// Builds the Mathematics Learning website from the lesson .md files.
// Usage (from the Mathematics-Learning folder):  node tools/build.cjs
//
// There are two modes, each a full website:
//   KID mode (the default, at the site root)  — built from the .md files in the repo root,
//       with topic emojis/colours/captions in tools/topics.json and picture credits in tools/pictures.json.
//   ADULT mode (in the adult/ folder)          — built from adult-lessons/*.md, with each topic's
//       description and pictures in tools/adult/<slug>.json and its quiz makers in tools/adult/<slug>.quiz.js.
// Each topic gets a start page, one page per lesson, the practice problems and a quiz.
// The answer keys in the .md files are NOT published (no cheating!).
// Don't edit the generated .html files by hand: edit the .md/.json files and run this script again.
"use strict";
const fs = require("fs"), path = require("path");

const SITE = {};
SITE.VERSION = 'V.3.1'; // tools/whats-new in the alanwang.info repo updates this line

const ROOT = path.resolve(__dirname, "..");
const T = JSON.parse(fs.readFileSync(path.join(__dirname, "topics.json"), "utf8"));
const PICS = JSON.parse(fs.readFileSync(path.join(__dirname, "pictures.json"), "utf8"));
const HAS_POPUP = fs.existsSync(path.join(ROOT, "whats-new.js"));

// ---------- the two modes ----------
const MODES = {
  kid: {
    id: "kid", outDir: ROOT, srcDir: ROOT, toRoot: "", css: "style.css",
    fonts: '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap">',
    logo: "📐 Mathematics Learning", home: "🏠 Home", switchText: "🎓 Switch to adult mode",
  },
  adult: {
    id: "adult", outDir: path.join(ROOT, "adult"), srcDir: path.join(ROOT, "adult-lessons"), toRoot: "../", css: "adult.css",
    fonts: "", logo: "Mathematics Learning · Advanced", home: "Home", switchText: "Switch to kid mode",
  },
};
const ADULT_GROUP_BLURBS = {
  foundations: "Number systems, rational numbers and mathematical logic.",
  algebra: "Equations, linear maps, logarithms, exponential models and binomial coefficients.",
  geometry: "Euclidean, algebraic, non-Euclidean and fractal geometry.",
  advanced: "Analysis, linear algebra, number theory, trigonometry, combinatorics and probability.",
};

// ---------- little helpers ----------
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
// Adult lessons also write short powers/indices without braces: e^(kt), 2^m, (−1)^d, E_j, ‖·‖_TV.
// These become real superscripts/subscripts too (adult pages only; kid pages are left exactly as written).
let ADULT_NOTATION = false;
const NICE = function (h) {
    var B = "(?<=[\\p{L}\\p{N}\\p{M})\\]}|‖′∑∏∫∮⋂⋃₀-₌ₐ-ₜ×]|</su[bp]>)";
    var P2 = "(?:[^()<>]|\\((?:[^()<>]|\\([^()<>]*\\))*\\))";
    var rules = [
      [/\^\{([^{}<>]{1,80})\}/g, "<sup>$1</sup>"], [/_\{([^{}<>]{1,80})\}/g, "<sub>$1</sub>"],
      [/([\p{L}])\^([\p{L}])\^([\p{L}∞])/gu, "$1<sup>$2<sup>$3</sup></sup>"],
      [new RegExp(B + "\\^(\\|[^|<>]{1,20}\\||⌊[^⌋<>]{1,20}⌋|⌈[^⌉<>]{1,20}⌉|[ℕℤℚℝℂ⊥∞×𝔄-𝔷](?:\\([^()<>]{1,20}\\))?)", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^\\((" + P2 + "{1,60})\\)", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^(\\p{L}{1,6}\\([^()<>]{1,30}\\))", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^([−-]?[\\p{L}\\p{N}∞×]{1,3})(?![\\p{L}\\p{N}({])", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "_\\((" + P2 + "{1,60})\\)", "gu"), "<sub>$1</sub>"],
      [new RegExp(B + "_([\\p{L}\\p{N}∞]{1,4})(?![\\p{L}\\p{N}{_])", "gu"), "<sub>$1</sub>"]
    ];
    for (var i = 0; i < 4; i++) { var n = h; rules.forEach(function (r) { n = n.replace(r[0], r[1]); }); if (n === h) break; h = n; }
    return h;
  };
const notation = (h) => (ADULT_NOTATION ? NICE(h) : h);
// x^{n+1} and a_{ij} (used where Unicode has no super/subscript) become real superscripts/subscripts
const supsub = (h) => {
  for (let i = 0; i < 4; i++) { // innermost first, so nested ones like 10^{10^{34}} work too
    const n = h.replace(/\^\{([^{}]{1,80})\}/g, "<sup>$1</sup>").replace(/_\{([^{}]{1,80})\}/g, "<sub>$1</sub>");
    if (n === h) break; h = n;
  }
  return h;
};
const DECOR = /^\s*[─═━]{3,}\s*$/;
const LIST = /^(\s{0,3})(\d{1,3}[.)]|\([a-z0-9]{1,3}\)|[a-h]\)|[•●▪◦·✓✔☐→*]|[-–])\s+/;
const LESSON_EMOJI = ["🚀", "🧩", "🎯", "🔍", "⚡", "🌟", "🛠️", "🎨", "🏗️", "🧪", "🪄", "🎢", "🦉", "🧭"];

function inline(s) {
  let h = esc(s);
  h = h.replace(/^(Answers?|Check|Hint|Trick|Why|Method [A-Z]|Step \d+|Upgrade \d+|Worked [Ee]xample(?: [A-Z0-9.]+)?)(:| —)/, "<strong>$1</strong>$2");
  h = h.replace(/^((?:Theorem|Lemma|Definition|Corollary|Proposition|Remark|Example|Worked example|Proof(?: sketch| outline| of [^.:]{1,50})?|Sketch of proof|Idea of proof|Claim|Notation|Exercise)(?: [0-9]+(?:\.[0-9]+)*)?(?: \([^)]{1,80}\))?)(\.(?!\d)|:| —)/, "<strong>$1</strong>$2");
  return notation(supsub(h));
}

function dedent(lines) {
  const ind = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  return lines.map((l) => l.slice(ind)).join("\n").replace(/\s+$/, "");
}

// ---------- read one lesson file into sections ----------
function isSectionTitle(line) {
  return /^(Welcome!.*|Introduction|Lesson \d+:.*|Practice Problems.*|✅ Answer Key.*|Answer Key.*)$/.test(line.trim()) && !/^\s/.test(line);
}

function readLesson(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r/g, "").replace(/^﻿/, "");
  const lines = raw.split("\n").map((l) => l.replace(/\s+$/, "").replace(/^# /, ""));
  const prose = lines.filter((l) => /^\S/.test(l));
  const wrapped = prose.filter((l) => l.length > 110).length === 0; // lines hard-wrapped at ~75 characters
  const blank = (i) => i < 0 || i >= lines.length || !lines[i].trim() || DECOR.test(lines[i]);
  let title = "", sections = [], cur = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (DECOR.test(l)) { if (cur) cur.lines.push(""); continue; }
    if (!title && l.trim()) { title = l.trim(); continue; }
    if (isSectionTitle(l) && blank(i - 1) && blank(i + 1)) {
      cur = { title: l.trim(), lines: [] };
      sections.push(cur);
      continue;
    }
    if (cur) cur.lines.push(l);
  }
  return { title, sections, wrapped };
}

// ---------- turn a section's lines into HTML ----------
function blocksOf(lines, wrapped) {
  const out = [];
  let b = [];
  for (const l of lines) {
    if (!l.trim()) { if (b.length) out.push(b); b = []; continue; }
    // "Answers:", "✏️ Your Turn" and "📌" always start their own block, even without a blank line before them
    if (b.length && /^(Answers?\b|✏|📌)/.test(l)) { out.push(b); b = []; }
    // a list that starts straight after a normal line becomes its own block
    if (!wrapped && b.length && LIST.test(l) && !LIST.test(b[0]) && !/^\s{4,}/.test(b[b.length - 1])) { out.push(b); b = []; }
    b.push(l);
  }
  if (b.length) out.push(b);
  return out;
}

function isHeading(text) {
  const t = text.trim();
  if (t.length > 80 || t.length < 3) return false;
  if (/^(Check|Answers?|Hint|Note)\b/i.test(t)) return false;
  if (/[.,;:]$/.test(t) || /✅$/.test(t) || /∎$/.test(t)) return false;
  if (/[.!?] [A-Z(]/.test(t) || /^[·•]/.test(t)) return false;
  if (/\?$/.test(t) && /=/.test(t)) return false;
  if (/^[a-z(0-9]/.test(t) || / · /.test(t)) return false;
  return true;
}

// Each item: {k:'h'|'p'|'pre'|'list', ...}
function parseItems(lines, wrapped) {
  const items = [];
  for (const block of blocksOf(lines, wrapped)) {
    if (LIST.test(block[0])) {
      const lis = [];
      for (const l of block) {
        const m = l.match(LIST);
        if (m) lis.push({ ci: m[0].length, marker: m[2], parts: [{ t: "text", s: l.slice(m[0].length).trim() }] });
        else {
          const li = lis[lis.length - 1], ind = l.match(/^\s*/)[0].length;
          const last = li.parts[li.parts.length - 1];
          if (ind >= 8 && (last.t === "pre" || /\S {2,}\S/.test(l.trim()) || ind >= li.ci + 6)) {
            if (last.t === "pre") last.lines.push(l); else li.parts.push({ t: "pre", lines: [l] });
          } else if (last.t === "text" && wrapped && !/^\s*\(?[a-z0-9]\)/.test(l)) last.s += " " + l.trim();
          else li.parts.push({ t: "text", s: l.trim(), br: true });
        }
      }
      // "(a) … (b) … (c) …" written on one line becomes separate items
      const split = [];
      for (const li of lis) {
        const t = li.parts.length === 1 && li.parts[0].t === "text" && /^\([a-h]\)$/.test(li.marker) ? li.parts[0].s : null;
        const bits = t ? t.split(/\s+(?=\([b-h]\)\s)/) : [];
        if (bits.length > 1) {
          split.push({ ...li, parts: [{ t: "text", s: bits[0] }] });
          for (const bit of bits.slice(1)) { const m = bit.match(/^(\([b-h]\))\s+([\s\S]*)$/); split.push({ ci: li.ci, marker: m[1], parts: [{ t: "text", s: m[2] }] }); }
        } else split.push(li);
      }
      items.push({ k: "list", lis: split });
      continue;
    }
    // split into runs of prose lines and indented (display) lines
    let run = null;
    const flush = () => {
      if (!run) return;
      if (run.pre) items.push({ k: "pre", s: dedent(run.lines) });
      else if (wrapped) pushText(items, run.lines.map((x) => x.trim()).join(" "));
      else run.lines.forEach((x) => pushText(items, x.trim()));
      run = null;
    };
    for (const l of block) {
      const pre = /^\s{4,}/.test(l) || (/^\s{2,}/.test(l) && !LIST.test(l) && run && run.pre);
      if (!run || run.pre !== pre) { flush(); run = { pre, lines: [] }; }
      run.lines.push(l);
    }
    flush();
  }
  return items;
}
function pushText(items, t) {
  if (/^(🟢|🟡|🟠|🔴|🔵|🟣)/.test(t) && t.length < 90) items.push({ k: "h", s: t, cls: "level" });
  else if (/^Problems? \d/.test(t) && t.length < 200) items.push({ k: "h", s: t, cls: "group", lvl: 4 });
  else if (isHeading(t) && !/^(📌|✏|🎉|💡)/.test(t)) items.push({ k: "h", s: t });
  else items.push({ k: "p", s: t });
}

function itemHTML(it) {
  if (it.k === "h") return `<h${it.lvl || 3}${it.cls ? ` class="${it.cls}"` : ""}>${inline(it.s)}</h${it.lvl || 3}>`;
  if (it.k === "pre") return `<pre class="math">${notation(supsub(esc(it.s)))}</pre>`;
  if (it.k === "list") {
    return '<ul class="steps">' + it.lis.map((li) => '<li><span class="mk">' + esc(li.marker) + "</span><div>" +
      li.parts.map((p) => p.t === "pre" ? `<pre class="math">${notation(supsub(esc(dedent(p.lines))))}</pre>` : (p.br ? "<br>" : "") + inline(p.s)).join(" ") +
      "</div></li>").join("") + "</ul>";
  }
  const t = it.s;
  if (/^🎉/.test(t)) return `<p class="celebrate">${inline(t)}</p>`;
  if (/^💡/.test(t)) return `<p class="tipbox">${inline(t)}</p>`;
  return `<p>${inline(t)}</p>`;
}

// group items into Key Idea boxes and Your Turn boxes
function sectionHTML(lines, wrapped, M) {
  const adult = M.id === "adult";
  const items = parseItems(lines, wrapped), out = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const text = it.k === "p" || it.k === "h" ? it.s : "";
    if (/^📌/.test(text)) {
      const label = text.replace(/^📌\s*/, "").replace(/:$/, "") || "Key idea";
      const body = [];
      while (i + 1 < items.length && (items[i + 1].k === "pre" || (body.length === 0 && items[i + 1].k === "p" && label.length < 20))) body.push(items[++i]);
      out.push(`<div class="box key"><p class="box-title">${adult ? "" : "📌 "}${inline(label)}</p>${body.map(itemHTML).join("")}</div>`);
      continue;
    }
    if (/^✏️?\s*your turn/i.test(text)) {
      const q = [], a = [];
      let j = i + 1;
      for (; j < items.length; j++) {
        const n = items[j], nt = n.k === "p" || n.k === "h" ? n.s : "";
        if (/^(📌|✏)/.test(nt) || (n.k === "h" && !a.length && q.length)) break;
        if (/^Answers?\b/i.test(nt) && !a.length) { a.push(n); continue; }
        if (a.length) { if (n.k === "pre" || n.k === "list" || (n.k === "p" && /^\(/.test(nt))) { a.push(n); continue; } break; }
        q.push(n);
      }
      i = j - 1;
      out.push(`<div class="box turn"><p class="box-title">${adult ? "Exercise" : "✏️ Your Turn!"}</p>` + q.map(itemHTML).join("") +
        (a.length ? `<details><summary>${adult ? "Show solution" : "👀 Show the answers"}</summary><div class="answers">` + a.map(itemHTML).join("") + "</div></details>" : "") + "</div>");
      continue;
    }
    out.push(itemHTML(it));
  }
  return out.join("\n");
}

// ---------- page chrome ----------
// depth = how many folders below the mode's own root this page is (0 = home page, 1 = topic page)
function page(M, { depth, title, desc, color, body, active, switchTo }) {
  const up = depth ? "../" : "";
  const toRoot = up + M.toRoot; // from this page to the repo root (where whats-new.js lives)
  const adult = M.id === "adult";
  const nav = T.groups.map((g) => `<a href="${up}index.html#${g.id}"${active === g.id ? ' class="active"' : ""}>${adult ? "" : g.emoji + " "}${esc(g.name)}</a>`).join("\n      ");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${adult ? "∑" : "📐"}</text></svg>">
${M.fonts}
<link rel="stylesheet" href="${up}${M.css}">
</head>
<body id="top" class="mode-${M.id}"${color ? ` style="--topic:${color}"` : ""}>

<header class="site-header">
  <div class="container nav-wrap">
    <a class="logo" href="${up}index.html">${M.logo}</a>
    <nav class="site-nav" aria-label="Topic groups">
      <a href="${up}index.html"${active === "home" ? ' class="active"' : ""}>${M.home}</a>
      ${nav}
    </nav>
    ${switchTo ? `<a class="mode-switch" href="${switchTo}">${M.switchText}</a>` : ""}
  </div>
</header>

${body}

<footer class="site-footer">
  <div class="container">
    ${adult ? `<p>Mathematics Learning · Advanced Edition · ${T.topics.length} fields of mathematics</p>
    <p><a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Back to top</a></p>`
    : `<p>📐 Mathematics Learning · 20 topics · ${T.topics.length * 100} practice problems · Keep exploring! 🌟</p>
    <p><a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">⬆️ Back to the top</a></p>`}
  </div>
</footer>
<div id="page-version" aria-label="Page version" style="position:fixed;left:8px;bottom:6px;z-index:2147483647;pointer-events:none;font:700 11px/1 system-ui,sans-serif;letter-spacing:.5px;color:#fff;background:rgba(0,0,0,.45);padding:3px 7px;border-radius:6px;opacity:.8">${SITE.VERSION}</div>
${HAS_POPUP ? `<!-- WHATS-NEW:START -->\n<script src="${toRoot}whats-new.js" defer></script>\n<!-- WHATS-NEW:END -->\n` : ""}</body>
</html>
`;
}

// the answer key isn't on the website, so take out the sentences that point to it
function noAnswerKey(html) {
  const W = (t) => new RegExp("(?:\\s|<br>)*" + esc(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "(?:\\s|<br>)+"));
  for (const t of ["Don't peek at the answer key until you've tried!",
    "(A full model solution appears in the answer key — your numbers will differ, and that is the point.)",
    "(A worked sample is in the answer key — but yours can be completely different!)"]) html = html.replace(W(t), "");
  // anything else that mentions the answer key (adult lessons): drop that sentence
  html = html.replace(/\s*\(?[^.!?<>()]*\b(?:answer key|solutions? (?:are|is) (?:given|provided) (?:below|at the end))[^.!?<>()]*[.!?]?\)?/gi, "");
  html = html.replace(/<li><span class="mk">[^<]*<\/span><div>\s*<\/div><\/li>/g, "");
  if (/answer key/i.test(html)) throw new Error("a page still mentions the answer key");
  return html;
}
const countProblems = (lines) => lines.filter((l) => /^\s{0,3}\d{1,3}\.\s/.test(l)).length;

// ---------- build one topic ----------
function partInfo(sec, n, M) {
  const t = sec.title, adult = M.id === "adult";
  if (/^(Welcome|Introduction)/.test(t)) return { file: "index.html", emoji: "👋", chip: adult ? "Overview" : "👋 Start", short: adult ? "Overview" : "Start here", kind: "start" };
  if (/^Practice/.test(t)) return { file: "practice.html", emoji: "🏋️", chip: adult ? "Problems" : "🏋️ Practice", short: adult ? "Problem Set" : "Practice Problems", kind: "practice" };
  if (/Answer Key/.test(t)) return { file: "quiz.html", emoji: "🏆", chip: adult ? "Assessment" : "🏆 Quiz", short: adult ? "Assessment" : "Quiz", kind: "quiz" };
  const m = t.match(/^Lesson (\d+):\s*(.*)$/);
  const num = m ? +m[1] : n;
  const name = m ? m[2] : t;
  const emoji = adult ? "" : /Watch Out|Mistake/i.test(name) ? "⚠️" : /Review|Recap|Big Picture/i.test(name) ? "🧠" : LESSON_EMOJI[(num - 1) % LESSON_EMOJI.length];
  return { file: `lesson-${num}.html`, emoji, chip: String(num), short: `Lesson ${num}`, name, num, kind: "lesson" };
}

function topicMeta(topic, M) {
  if (M.id === "kid") {
    const pics = (PICS[topic.slug] || []).map((p, i) => ({ ...p, ...(topic.pics[i] || {}), artist: T.artists[p.img] || p.artist }));
    return { blurb: topic.blurb, pics, file: path.join(M.srcDir, topic.file) };
  }
  const jf = path.join(__dirname, "adult", topic.slug + ".json"), md = path.join(M.srcDir, topic.file);
  if (!fs.existsSync(jf) || !fs.existsSync(md)) return null;
  const j = JSON.parse(fs.readFileSync(jf, "utf8"));
  return { blurb: j.blurb, pics: j.pics || [], file: md };
}

function buildTopic(topic, M, other) {
  ADULT_NOTATION = M.id === "adult";
  const meta = topicMeta(topic, M);
  if (!meta) { console.log(`  (skipped ${M.id} ${topic.slug}: files not ready)`); return null; }
  const adult = M.id === "adult";
  const L = readLesson(meta.file);
  const parts = L.sections.map((s, i) => ({ sec: s, ...partInfo(s, i, M) }));
  const lessons = parts.filter((p) => p.kind === "lesson");
  const dir = path.join(M.outDir, topic.slug);
  fs.mkdirSync(dir, { recursive: true });
  for (const old of fs.readdirSync(dir)) if (old.endsWith(".html")) fs.unlinkSync(path.join(dir, old)); // no leftover pages (like the old answers.html)
  // The answer key is NOT published (no cheating!). Only its closing 🎉 cheer is kept, at the end of the practice page.
  const quizPart = parts.find((p) => p.kind === "quiz");
  const practicePart = parts.find((p) => p.kind === "practice");
  const nProblems = practicePart ? countProblems(practicePart.sec.lines) : 0;
  const cheer = quizPart ? quizPart.sec.lines.filter((l) => /^🎉/.test(l)) : [];
  const subtitle = (L.title.split(/\s+—\s+/)[1] || (adult ? "An Advanced Course" : "A Complete Lesson")).trim();
  const group = T.groups.find((g) => g.id === topic.group);
  const pics = meta.pics;
  const toRoot = "../" + M.toRoot;
  const switchTo = other ? "../" + (adult ? "../" : "adult/") + topic.slug + "/index.html" : null;

  const chips = (here) => '<nav class="part-nav" aria-label="Lessons in this topic">' + parts.map((p) =>
    `<a href="${p.file}"${p === here ? ' class="here" aria-current="page"' : ""} title="${esc(p.kind === "lesson" ? p.short + ": " + p.name : p.short)}">${esc(p.chip)}</a>`).join("") + "</nav>";

  parts.forEach((p, idx) => {
    const prev = parts[idx - 1], next = parts[idx + 1];
    const E = (e) => (adult || !e ? "" : e + " ");
    const heading = p.kind === "lesson" ? `${E(p.emoji)}${p.name}` : p.kind === "start" ? `${E(topic.emoji)}${topic.name}` : `${E(p.emoji)}${p.short}`;
    const kicker = adult
      ? (p.kind === "lesson" ? `Lesson ${p.num} of ${lessons.length}` : p.kind === "start" ? `${esc(group.name)} · ${esc(subtitle)}` : p.kind === "practice" ? `${nProblems} problems` : "10 randomly generated questions")
      : (p.kind === "lesson" ? `📖 Lesson ${p.num} of ${lessons.length}` : p.kind === "start" ? `${group.emoji} ${group.name} · ${esc(subtitle)}` : p.kind === "practice" ? `💪 ${nProblems} problems to try` : "🎲 10 brand-new questions every time!");
    let main = "";
    if (p.kind === "start") {
      let welcome = sectionHTML(p.sec.lines, L.wrapped, M).replace(/,?\s*(?:—\s*)?with a (?:full step-by-step|fully worked) answer key/g, adult ? ", then take the assessment" : ", then take the 🏆 Quiz");
      welcome = noAnswerKey(welcome);
      main += `<div class="welcome">${welcome}</div>`;
      main += `<h2>${adult ? "Figures" : "📸 Pictures"}</h2><div class="picture-row">` + pics.map((pic, i) => `
    <figure class="picture">
      <img src="${toRoot}${pic.img}" alt="${esc(pic.alt || "")}" loading="lazy">
      <figcaption>${adult ? `<strong>Figure ${i + 1}.</strong> ` : `<span class="photo-badge">📷 Picture ${i + 1}</span><br>`}${esc(pic.caption || "")} <a href="#sources">${adult ? "Source" : "See source ↓"}</a></figcaption>
    </figure>`).join("") + "</div>";
      main += `<h2>${adult ? "Contents" : "🗺️ Your lesson map"}</h2><div class="lesson-list">` + parts.slice(1).map((q) => `
    <a class="lesson-card" href="${q.file}">${adult ? "" : `<span class="lc-emoji">${q.emoji}</span>`}<span><span class="lc-num">${esc(q.short)}</span><br><strong>${esc(q.kind === "lesson" ? q.name : q.kind === "practice" ? (adult ? `${nProblems} problems` : `${nProblems} problems to try`) : (adult ? "Randomly generated questions" : "Test yourself: new questions every time!"))}</strong></span></a>`).join("") + "</div>";
      main += `<section class="sources" id="sources"><h2>${adult ? "Image sources" : "📚 Picture Sources"}</h2><ol>` + pics.map((pic, i) =>
        `<li><strong>${adult ? "Figure" : "Picture"} ${i + 1}</strong> · ${esc(pic.title.replace(/\.[a-z]+$/i, ""))}. ${/^From /.test(pic.artist || "") ? "" : "By "}${esc(pic.artist || "unknown")}. ${esc(/public domain/i.test(pic.license) ? "Public domain" : pic.license)}. From Wikimedia Commons: <a href="${esc(pic.page)}">${esc(decodeURI(pic.page))}</a></li>`).join("") + "</ol></section>";
    } else if (p.kind === "quiz") {
      main += adult
        ? `<div class="quiz-intro"><p>This assessment contains <strong>10 questions</strong> on ${esc(topic.name)}, generated at random on every attempt, so no two assessments are the same.</p>
    <p>Answer every question, then press <strong>Submit</strong>. Your score, the correct answers and worked solutions are shown only after submission.</p></div>`
        : `<div class="quiz-intro"><p>🏆 Ready to test yourself? This quiz has <strong>10 questions</strong> about ${esc(topic.name)}.</p>
    <p>🎲 Every quiz is made up fresh by the computer, with new numbers each time, so there's nothing to memorise. You just have to know the math!</p>
    <p>📝 Answer every question, then press <strong>Submit</strong> at the bottom. You'll see your score and the right answers only <em>after</em> you submit.</p></div>`;
      main += `
  <div id="quiz" data-topic="${topic.slug}" data-mode="${M.id}"><noscript><p>The quiz needs JavaScript turned on.</p></noscript></div>
  <script src="../quiz.js" defer></script>`;
    } else {
      let html = sectionHTML(p.kind === "practice" ? p.sec.lines.concat([""], cheer) : p.sec.lines, L.wrapped, M);
      if (p.kind === "practice") html = noAnswerKey(html);
      main += `<article class="lesson">${html}</article>`;
    }
    const pager = adult
      ? `<nav class="pager" aria-label="Next and previous">${prev ? `<a class="btn ghost" href="${prev.file}">← ${esc(prev.short)}</a>` : `<a class="btn ghost" href="../index.html">All fields</a>`}${next ? `<a class="btn" href="${next.file}">${esc(next.short)} →</a>` : `<a class="btn" href="../index.html">Back to all fields</a>`}</nav>`
      : `<nav class="pager" aria-label="Next and previous">${prev ? `<a class="btn ghost" href="${prev.file}">⬅️ ${esc(prev.short)}</a>` : `<a class="btn ghost" href="../index.html">🏠 All topics</a>`}${next ? `<a class="btn" href="${next.file}">${esc(next.short)} ➡️</a>` : `<a class="btn" href="../index.html">🎉 Pick a new topic!</a>`}</nav>`;
    const body = `<section class="hero topic-hero">
  <div class="container">
    <p class="crumbs"><a href="../index.html">${adult ? "Home" : "🏠 Home"}</a> › ${p.kind === "start" ? `<span aria-current="page">${E(topic.emoji)}${esc(topic.name)}</span>` : `<a href="index.html">${E(topic.emoji)}${esc(topic.name)}</a> › ${esc(p.short)}`}</p>
    <h1>${esc(heading)}</h1>
    <p class="kicker">${kicker}</p>
  </div>
</section>

<main class="container">
  ${chips(p)}
  ${main}
  ${pager}
</main>`;
    const title = p.kind === "start" ? `${topic.name} — Mathematics Learning${adult ? " (Advanced)" : ""}` : `${p.kind === "lesson" ? p.short + ": " + p.name : p.short} — ${topic.name}${adult ? " (Advanced)" : ""}`;
    fs.writeFileSync(path.join(dir, p.file), page(M, { depth: 1, title, desc: meta.blurb, color: topic.color, body, active: topic.group, switchTo }));
  });
  return { ...topic, blurb: meta.blurb, lessons: lessons.length, problems: nProblems, cover: pics[0] };
}

// ---------- home pages ----------
function buildHome(built, M) {
  ADULT_NOTATION = M.id === "adult";
  const adult = M.id === "adult";
  const groups = T.groups.map((g) => {
    const cards = built.filter((t) => t.group === g.id).map((t) => `
      <a class="topic-card" href="${t.slug}/index.html" style="--topic:${t.color}">
        ${t.cover ? `<img src="${M.toRoot}${t.cover.img}" alt="${esc(t.cover.alt || "")}" loading="lazy">` : ""}
        <span class="tc-body">
          <span class="tc-title">${adult ? "" : t.emoji + " "}${esc(t.name)}</span>
          <span class="tc-blurb">${esc(t.blurb)}</span>
          <span class="tc-meta">${adult ? `${t.lessons} lessons · ${t.problems} problems · assessment` : `📖 ${t.lessons} lessons · 🏋️ ${t.problems} problems · 🏆 quiz`}</span>
        </span>
      </a>`).join("");
    if (!cards) return "";
    return `
  <section class="group" id="${g.id}">
    <h2>${adult ? "" : g.emoji + " "}${esc(g.name)}</h2>
    <p class="group-blurb">${esc(adult ? ADULT_GROUP_BLURBS[g.id] : g.blurb)}</p>
    <div class="topic-grid">${cards}
    </div>
  </section>`;
  }).join("\n");
  const total = built.reduce((n, t) => n + t.lessons, 0), probs = built.reduce((n, t) => n + t.problems, 0);
  const body = adult ? `<section class="hero home-hero">
  <div class="container">
    <h1>Mathematics Learning</h1>
    <p class="kicker">Advanced Edition</p>
    <p>${built.length} fields of mathematics treated at graduate level: ${total} lessons with definitions, theorems and proofs, ${probs} problems, and randomly generated assessments.</p>
    <a class="btn big" href="#foundations">Browse the fields</a>
  </div>
</section>

<main class="container">
  <h2>About this edition</h2>
  <p class="intro">The Advanced Edition covers the same twenty fields as the children's site, written for adults and advanced students. Each field is a self-contained course: an overview, a sequence of lessons with full proofs and worked examples, a problem set, and an assessment whose questions are generated afresh on every attempt.</p>
  <div class="how">
    <div class="how-step"><span>1</span><p><strong>Choose a field</strong> from the four groups below.</p></div>
    <div class="how-step"><span>2</span><p><strong>Work through the lessons</strong> in order; each builds on the previous ones.</p></div>
    <div class="how-step"><span>3</span><p><strong>Attempt the exercises</strong> before opening their solutions.</p></div>
    <div class="how-step"><span>4</span><p><strong>Finish with the problem set</strong> and the assessment.</p></div>
  </div>
${groups}
</main>` : `<section class="hero home-hero">
  <div class="container">
    <p class="float-emoji" aria-hidden="true">➕ 🍕 📐 🎲 ♾️ 🔺 🌀 📈</p>
    <h1>📐 Mathematics Learning 🧮</h1>
    <p>From counting on an abacus to spinning numbers with <em>i</em>: explore ${built.length} math topics, ${total} lessons, ${probs} practice problems and never-ending quizzes!</p>
    <a class="btn big" href="#foundations">🚀 Start exploring</a>
  </div>
</section>

<main class="container">
  <h2>👋 Welcome, math explorer!</h2>
  <p class="intro">Math isn't just numbers on a page. It's a giant toolbox for solving puzzles, building games, measuring the world and even exploring curved space!</p>
  <div class="how">
    <div class="how-step"><span>1️⃣</span><p><strong>Pick a topic</strong> below. Each one has its own pages, just like a book.</p></div>
    <div class="how-step"><span>2️⃣</span><p><strong>Read the lessons</strong> in order. Grab a pencil and paper for every example!</p></div>
    <div class="how-step"><span>3️⃣</span><p><strong>Try the ✏️ Your Turn</strong> boxes, then tap 👀 to check your answers.</p></div>
    <div class="how-step"><span>4️⃣</span><p><strong>Practise with 🏋️ 100 problems</strong>, then take the 🏆 Quiz. It has new questions every time!</p></div>
  </div>
${groups}
</main>`;
  const switchTo = adult ? "../index.html" : "adult/index.html";
  fs.writeFileSync(path.join(M.outDir, "index.html"), page(M, adult
    ? { depth: 0, title: "Mathematics Learning — Advanced Edition", desc: "Twenty fields of mathematics at graduate level: lessons with proofs, problem sets and randomly generated assessments.", body, active: "home", switchTo }
    : { depth: 0, title: "Mathematics Learning — Math Topics for Curious Kids!", desc: "A kid-friendly math library: 20 topics from arithmetic to complex analysis, with lessons, pictures, practice problems and quizzes.", body, active: "home", switchTo }));
}

// the adult quiz engine = quiz.js with its kid question makers swapped for tools/adult/*.quiz.js
function buildAdultQuiz(slugs) {
  const src = fs.readFileSync(path.join(ROOT, "quiz.js"), "utf8");
  const a = src.indexOf("/* MAKERS:START"), b = src.indexOf("/* MAKERS:END */");
  if (a < 0 || b < 0) throw new Error("quiz.js is missing its MAKERS:START / MAKERS:END markers");
  const makers = slugs.map((s) => path.join(__dirname, "adult", s + ".quiz.js")).filter((f) => fs.existsSync(f)).map((f) => fs.readFileSync(f, "utf8").trim()).join("\n\n");
  fs.writeFileSync(path.join(MODES.adult.outDir, "quiz.js"),
    "/* Built by tools/build.cjs from quiz.js + tools/adult/*.quiz.js. Don't edit this copy. */\n" + src.slice(0, a) + "/* ADULT MAKERS */\n" + makers + "\n  " + src.slice(b));
}

// ---------- go! ----------
fs.mkdirSync(MODES.adult.outDir, { recursive: true });
const adultReady = T.topics.filter((t) => topicMeta(t, MODES.adult));
const builtKid = T.topics.map((t) => buildTopic(t, MODES.kid, adultReady.includes(t)));
buildHome(builtKid, MODES.kid);
const builtAdult = adultReady.map((t) => buildTopic(t, MODES.adult, true)).filter(Boolean);
buildHome(builtAdult, MODES.adult);
buildAdultQuiz(builtAdult.map((t) => t.slug));
for (const t of builtKid) console.log(`${t.emoji} ${t.name}: ${t.lessons} kid lessons` + (builtAdult.find((a) => a.slug === t.slug) ? `, ${builtAdult.find((a) => a.slug === t.slug).lessons} adult lessons` : ""));
console.log(`\nBuilt ${builtKid.length} kid topics and ${builtAdult.length} adult topics (${SITE.VERSION}).`);
