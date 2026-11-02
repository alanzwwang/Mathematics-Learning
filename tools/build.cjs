// Builds the Mathematics Learning website from the lesson .md files.
// Usage (from the Mathematics-Learning folder):  node tools/build.cjs
//
// The .md lessons stay exactly as they are. This script reads them and writes
// a kid-friendly HTML website: a home page, plus one folder per topic with a
// start page, one page per lesson, the practice problems and the answer key.
// Topic names, emojis, colours and picture captions live in tools/topics.json.
// Picture credits live in tools/pictures.json.
// Don't edit the generated .html files by hand: edit the .md files (or
// topics.json) and run this script again.
"use strict";
const fs = require("fs"), path = require("path");

const SITE = {};
SITE.VERSION = 'V.2.9'; // tools/whats-new in the alanwang.info repo updates this line

const ROOT = path.resolve(__dirname, "..");
const T = JSON.parse(fs.readFileSync(path.join(__dirname, "topics.json"), "utf8"));
const PICS = JSON.parse(fs.readFileSync(path.join(__dirname, "pictures.json"), "utf8"));
const HAS_POPUP = fs.existsSync(path.join(ROOT, "whats-new.js"));

// ---------- little helpers ----------
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const DECOR = /^\s*[─═━]{3,}\s*$/;
const LIST = /^(\s{0,3})(\d{1,3}[.)]|\([a-z0-9]{1,3}\)|[a-h]\)|[•●▪◦✓✔☐→*]|[-–])\s+/;
const LESSON_EMOJI = ["🚀", "🧩", "🎯", "🔍", "⚡", "🌟", "🛠️", "🎨", "🏗️", "🧪", "🪄", "🎢", "🦉", "🧭"];

function inline(s) {
  let h = esc(s);
  h = h.replace(/^(Answers?|Check|Hint|Trick|Why|Method [A-Z]|Step \d+|Upgrade \d+|Worked [Ee]xample(?: [A-Z0-9]+)?)(:| —)/, "<strong>$1</strong>$2");
  return h;
}

function dedent(lines) {
  const ind = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  return lines.map((l) => l.slice(ind)).join("\n").replace(/\s+$/, "");
}

// ---------- read one lesson file into sections ----------
function isSectionTitle(line) {
  return /^(Welcome!.*|Lesson \d+:.*|Practice Problems.*|✅ Answer Key.*|Answer Key.*)$/.test(line.trim()) && !/^\s/.test(line);
}

function readLesson(file) {
  const raw = fs.readFileSync(path.join(ROOT, file), "utf8").replace(/\r/g, "").replace(/^﻿/, "");
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
function blocksOf(lines) {
  const out = [];
  let b = [];
  for (const l of lines) {
    if (!l.trim()) { if (b.length) out.push(b); b = []; continue; }
    // "Answers:", "✏️ Your Turn" and "📌" always start their own block, even without a blank line before them
    if (b.length && /^(Answers?\b|✏|📌)/.test(l)) { out.push(b); b = []; }
    // a list that starts straight after a normal line becomes its own block
    if (b.length && LIST.test(l) && !LIST.test(b[0]) && !/^\s{4,}/.test(b[b.length - 1])) { out.push(b); b = []; }
    b.push(l);
  }
  if (b.length) out.push(b);
  return out;
}

function isHeading(text) {
  const t = text.trim();
  if (t.length > 80 || t.length < 3) return false;
  if (/^(Check|Answers?|Hint|Note)\b/i.test(t)) return false;
  if (/[.,;:]$/.test(t) || /✅$/.test(t)) return false;
  if (/[.!?] [A-Z(]/.test(t) || /^[·•]/.test(t)) return false;
  if (/\?$/.test(t) && /=/.test(t)) return false;
  if (/^[a-z(0-9]/.test(t) || / · /.test(t)) return false;
  return true;
}

// Each item: {k:'h'|'p'|'pre'|'list', ...}
function parseItems(lines, wrapped) {
  const items = [];
  for (const block of blocksOf(lines)) {
    if (LIST.test(block[0])) {
      const lis = [];
      for (const l of block) {
        const m = l.match(LIST);
        if (m) lis.push({ marker: m[2], parts: [{ t: "text", s: l.slice(m[0].length).trim() }] });
        else {
          const li = lis[lis.length - 1], ind = l.match(/^\s*/)[0].length;
          const last = li.parts[li.parts.length - 1];
          if (ind >= 8) {
            if (last.t === "pre") last.lines.push(l); else li.parts.push({ t: "pre", lines: [l] });
          } else if (last.t === "text" && wrapped && !/^\s*\(?[a-z0-9]\)/.test(l)) last.s += " " + l.trim();
          else li.parts.push({ t: "text", s: l.trim(), br: true });
        }
      }
      items.push({ k: "list", lis });
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
  if (it.k === "pre") return `<pre class="math">${esc(it.s)}</pre>`;
  if (it.k === "list") {
    return '<ul class="steps">' + it.lis.map((li) => '<li><span class="mk">' + esc(li.marker) + "</span><div>" +
      li.parts.map((p) => p.t === "pre" ? `<pre class="math">${esc(dedent(p.lines))}</pre>` : (p.br ? "<br>" : "") + inline(p.s)).join(" ") +
      "</div></li>").join("") + "</ul>";
  }
  const t = it.s;
  if (/^🎉/.test(t)) return `<p class="celebrate">${inline(t)}</p>`;
  if (/^💡/.test(t)) return `<p class="tipbox">${inline(t)}</p>`;
  return `<p>${inline(t)}</p>`;
}

// group items into Key Idea boxes and Your Turn boxes
function sectionHTML(lines, wrapped) {
  const items = parseItems(lines, wrapped), out = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const text = it.k === "p" || it.k === "h" ? it.s : "";
    if (/^📌/.test(text)) {
      const label = text.replace(/^📌\s*/, "").replace(/:$/, "") || "Key idea";
      const body = [];
      while (i + 1 < items.length && (items[i + 1].k === "pre" || (body.length === 0 && items[i + 1].k === "p" && label.length < 20))) body.push(items[++i]);
      out.push(`<div class="box key"><p class="box-title">📌 ${inline(label)}</p>${body.map(itemHTML).join("")}</div>`);
      continue;
    }
    if (/^✏️?\s*your turn/i.test(text)) {
      const q = [], a = [];
      let j = i + 1;
      for (; j < items.length; j++) {
        const n = items[j], nt = n.k === "p" || n.k === "h" ? n.s : "";
        if (/^(📌|✏)/.test(nt) || (n.k === "h" && !a.length && q.length)) break;
        if (/^Answers?\b/i.test(nt) && !a.length) { a.push(n); continue; }
        if (a.length) { if (n.k === "pre" || n.k === "list" || (n.k === "p" && /^\(?[a-z0-9]\)/.test(nt))) { a.push(n); continue; } break; }
        q.push(n);
      }
      i = j - 1;
      out.push('<div class="box turn"><p class="box-title">✏️ Your Turn!</p>' + q.map(itemHTML).join("") +
        (a.length ? '<details><summary>👀 Show the answers</summary><div class="answers">' + a.map(itemHTML).join("") + "</div></details>" : "") + "</div>");
      continue;
    }
    out.push(itemHTML(it));
  }
  return out.join("\n");
}

// ---------- page chrome ----------
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap">';

function page({ depth, title, desc, color, body, active }) {
  const up = depth ? "../" : "";
  const nav = T.groups.map((g) => `<a href="${up}index.html#${g.id}"${active === g.id ? ' class="active"' : ""}>${g.emoji} ${esc(g.name)}</a>`).join("\n      ");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📐</text></svg>">
${FONTS}
<link rel="stylesheet" href="${up}style.css">
</head>
<body${color ? ` style="--topic:${color}"` : ""}>

<header class="site-header">
  <div class="container nav-wrap">
    <a class="logo" href="${up}index.html">📐 Mathematics Learning</a>
    <nav class="site-nav" aria-label="Topic groups">
      <a href="${up}index.html"${active === "home" ? ' class="active"' : ""}>🏠 Home</a>
      ${nav}
    </nav>
  </div>
</header>

${body}

<footer class="site-footer">
  <div class="container">
    <p>📐 Mathematics Learning · 20 topics · ${T.topics.length * 100} practice problems · Keep exploring! 🌟</p>
    <p><a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">⬆️ Back to the top</a></p>
  </div>
</footer>
<div id="page-version" aria-label="Page version" style="position:fixed;left:8px;bottom:6px;z-index:2147483647;pointer-events:none;font:700 11px/1 system-ui,sans-serif;letter-spacing:.5px;color:#fff;background:rgba(0,0,0,.45);padding:3px 7px;border-radius:6px;opacity:.8">${SITE.VERSION}</div>
${HAS_POPUP ? `<!-- WHATS-NEW:START -->\n<script src="${up}whats-new.js" defer></script>\n<!-- WHATS-NEW:END -->\n` : ""}</body>
</html>
`;
}

// ---------- build one topic ----------
function partInfo(sec, n) {
  const t = sec.title;
  if (/^Welcome/.test(t)) return { file: "index.html", emoji: "👋", chip: "👋 Start", short: "Start here", kind: "start" };
  if (/^Practice/.test(t)) return { file: "practice.html", emoji: "🏋️", chip: "🏋️ Practice", short: "Practice Problems", kind: "practice" };
  if (/Answer Key/.test(t)) return { file: "answers.html", emoji: "✅", chip: "✅ Answers", short: "Answer Key", kind: "answers" };
  const m = t.match(/^Lesson (\d+):\s*(.*)$/);
  const num = m ? +m[1] : n;
  const name = m ? m[2] : t;
  const emoji = /Watch Out|Mistake/i.test(name) ? "⚠️" : /Review|Recap|Big Picture/i.test(name) ? "🧠" : LESSON_EMOJI[(num - 1) % LESSON_EMOJI.length];
  return { file: `lesson-${num}.html`, emoji, chip: String(num), short: `Lesson ${num}`, name, num, kind: "lesson" };
}

function buildTopic(topic) {
  const L = readLesson(topic.file);
  const parts = L.sections.map((s, i) => ({ sec: s, ...partInfo(s, i) }));
  const lessons = parts.filter((p) => p.kind === "lesson");
  const dir = path.join(ROOT, topic.slug);
  fs.mkdirSync(dir, { recursive: true });
  const subtitle = (L.title.split(/\s+—\s+/)[1] || "A Complete Lesson").trim();
  const group = T.groups.find((g) => g.id === topic.group);
  const pics = (PICS[topic.slug] || []).map((p, i) => ({ ...p, ...(topic.pics[i] || {}), artist: T.artists[p.img] || p.artist }));

  const chips = (here) => '<nav class="part-nav" aria-label="Lessons in this topic">' + parts.map((p) =>
    `<a href="${p.file}"${p === here ? ' class="here" aria-current="page"' : ""} title="${esc(p.kind === "lesson" ? p.short + ": " + p.name : p.short)}">${esc(p.chip)}</a>`).join("") + "</nav>";

  parts.forEach((p, idx) => {
    const prev = parts[idx - 1], next = parts[idx + 1];
    const heading = p.kind === "lesson" ? `${p.emoji} ${p.name}` : p.kind === "start" ? `${topic.emoji} ${topic.name}` : `${p.emoji} ${p.short}`;
    const kicker = p.kind === "lesson" ? `📖 Lesson ${p.num} of ${lessons.length}` : p.kind === "start" ? `${group.emoji} ${group.name} · ${esc(subtitle)}` : p.kind === "practice" ? "💪 100 problems to try" : "🏁 The finish line!";
    let main = "";
    if (p.kind === "start") {
      main += `<div class="welcome">${sectionHTML(p.sec.lines, L.wrapped)}</div>`;
      main += '<h2>📸 Pictures</h2><div class="picture-row">' + pics.map((pic, i) => `
    <figure class="picture">
      <img src="../${pic.img}" alt="${esc(pic.alt || "")}" loading="lazy">
      <figcaption><span class="photo-badge">📷 Picture ${i + 1}</span><br>${esc(pic.caption || "")} <a href="#sources">See source ↓</a></figcaption>
    </figure>`).join("") + "</div>";
      main += '<h2>🗺️ Your lesson map</h2><div class="lesson-list">' + parts.slice(1).map((q) => `
    <a class="lesson-card" href="${q.file}"><span class="lc-emoji">${q.emoji}</span><span><span class="lc-num">${esc(q.short)}</span><br><strong>${esc(q.kind === "lesson" ? q.name : q.kind === "practice" ? "100 problems to try" : "Check your work")}</strong></span></a>`).join("") + "</div>";
      main += '<section class="sources" id="sources"><h2>📚 Picture Sources</h2><ol>' + pics.map((pic, i) =>
        `<li><strong>Picture ${i + 1}</strong> · ${esc(pic.title.replace(/\.[a-z]+$/i, ""))}. By ${esc(pic.artist || "unknown")}. ${esc(/public domain/i.test(pic.license) ? "Public domain" : pic.license)}. From Wikimedia Commons: <a href="${esc(pic.page)}">${esc(decodeURI(pic.page))}</a></li>`).join("") + "</ol></section>";
    } else {
      main += `<article class="lesson">${sectionHTML(p.sec.lines, L.wrapped)}</article>`;
    }
    const pager = `<nav class="pager" aria-label="Next and previous">${prev ? `<a class="btn ghost" href="${prev.file}">⬅️ ${esc(prev.short)}</a>` : `<a class="btn ghost" href="../index.html">🏠 All topics</a>`}${next ? `<a class="btn" href="${next.file}">${esc(next.kind === "lesson" ? next.short : next.short)} ➡️</a>` : `<a class="btn" href="../index.html">🎉 Pick a new topic!</a>`}</nav>`;
    const body = `<section class="hero topic-hero">
  <div class="container">
    <p class="crumbs"><a href="../index.html">🏠 Home</a> › <a href="index.html">${topic.emoji} ${esc(topic.name)}</a>${p.kind !== "start" ? " › " + esc(p.short) : ""}</p>
    <h1>${esc(heading)}</h1>
    <p class="kicker">${kicker}</p>
  </div>
</section>

<main class="container" id="top">
  ${chips(p)}
  ${main}
  ${pager}
</main>`;
    const title = p.kind === "start" ? `${topic.name} — Mathematics Learning` : `${p.kind === "lesson" ? p.short + ": " + p.name : p.short} — ${topic.name}`;
    fs.writeFileSync(path.join(dir, p.file), page({ depth: 1, title, desc: topic.blurb, color: topic.color, body, active: topic.group }));
  });
  return { ...topic, lessons: lessons.length, cover: pics[0] };
}

// ---------- home page ----------
function buildHome(built) {
  const groups = T.groups.map((g) => {
    const cards = built.filter((t) => t.group === g.id).map((t) => `
      <a class="topic-card" href="${t.slug}/index.html" style="--topic:${t.color}">
        <img src="${t.cover.img}" alt="${esc(t.cover.alt || "")}" loading="lazy">
        <span class="tc-body">
          <span class="tc-title">${t.emoji} ${esc(t.name)}</span>
          <span class="tc-blurb">${esc(t.blurb)}</span>
          <span class="tc-meta">📖 ${t.lessons} lessons · 🏋️ 100 problems</span>
        </span>
      </a>`).join("");
    return `
  <section class="group" id="${g.id}">
    <h2>${g.emoji} ${esc(g.name)}</h2>
    <p class="group-blurb">${esc(g.blurb)}</p>
    <div class="topic-grid">${cards}
    </div>
  </section>`;
  }).join("\n");
  const total = built.reduce((n, t) => n + t.lessons, 0);
  const body = `<section class="hero home-hero">
  <div class="container">
    <p class="float-emoji" aria-hidden="true">➕ 🍕 📐 🎲 ♾️ 🔺 🌀 📈</p>
    <h1>📐 Mathematics Learning 🧮</h1>
    <p>From counting on an abacus to spinning numbers with <em>i</em>: explore ${built.length} math topics, ${total} lessons and ${built.length * 100} practice problems!</p>
    <a class="btn big" href="#foundations">🚀 Start exploring</a>
  </div>
</section>

<main class="container" id="top">
  <h2>👋 Welcome, math explorer!</h2>
  <p class="intro">Math isn't just numbers on a page. It's a giant toolbox for solving puzzles, building games, measuring the world and even exploring curved space!</p>
  <div class="how">
    <div class="how-step"><span>1️⃣</span><p><strong>Pick a topic</strong> below. Each one has its own pages, just like a book.</p></div>
    <div class="how-step"><span>2️⃣</span><p><strong>Read the lessons</strong> in order. Grab a pencil and paper for every example!</p></div>
    <div class="how-step"><span>3️⃣</span><p><strong>Try the ✏️ Your Turn</strong> boxes, then tap 👀 to check your answers.</p></div>
    <div class="how-step"><span>4️⃣</span><p><strong>Finish with 🏋️ 100 practice problems</strong> and the ✅ answer key.</p></div>
  </div>
${groups}
</main>`;
  fs.writeFileSync(path.join(ROOT, "index.html"), page({ depth: 0, title: "Mathematics Learning — Math Topics for Curious Kids!", desc: "A kid-friendly math library: 20 topics from arithmetic to complex analysis, with lessons, pictures and practice problems.", body, active: "home" }));
}

// ---------- go! ----------
const built = T.topics.map(buildTopic);
buildHome(built);
for (const t of built) console.log(`${t.emoji} ${t.name}: ${t.lessons} lessons`);
console.log(`\nBuilt ${built.length} topics (${SITE.VERSION}).`);
