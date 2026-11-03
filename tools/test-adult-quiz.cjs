// Stress-tests one adult quiz maker file:  node tools/test-adult-quiz.cjs <slug>
// It builds a temporary quiz engine with ONLY tools/adult/<slug>.quiz.js as the makers,
// then makes thousands of questions and checks they are well-formed.
const fs = require("fs"), path = require("path"), os = require("os");
const slug = process.argv[2];
if (!slug) { console.log("usage: node tools/test-adult-quiz.cjs <slug>"); process.exit(1); }
const ROOT = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(ROOT, "quiz.js"), "utf8");
const makers = fs.readFileSync(path.join(__dirname, "adult", slug + ".quiz.js"), "utf8");
const a = src.indexOf("/* MAKERS:START"), b = src.indexOf("/* MAKERS:END */");
if (a < 0 || b < 0) { console.log("FAIL: quiz.js is missing its MAKERS:START / MAKERS:END markers"); process.exit(1); }
const tmp = path.join(os.tmpdir(), "adult-quiz-test-" + slug + "-" + process.pid + ".cjs");
fs.writeFileSync(tmp, src.slice(0, a) + makers + "\n  " + src.slice(b));
const Q = require(tmp); fs.unlinkSync(tmp);
const gens = Q.G[slug];
if (!Array.isArray(gens) || gens.length < 6) { console.log("FAIL: G[\"" + slug + "\"] must be a list of at least 6 makers"); process.exit(1); }
let bad = 0, n = 0;
gens.forEach((g, i) => {
  const t0 = Date.now(), seen = new Set();
  for (let k = 0; k < 3000; k++) {
    const q = g(); n++; seen.add(q.q);
    const fail = (m) => { bad++; if (bad < 20) console.log("FAIL maker " + i + ": " + m + " | " + String(q && q.q).slice(0, 120)); };
    if (!q || !q.q || !q.why || q.show == null) { fail("missing q/why/show"); continue; }
    if (q.kind === "num") {
      if (!isFinite(q.ans)) fail("answer is not a number");
      const typed = String(q.show).replace(/ \(=.*\)$/, "").replace(/−/g, "-").replace(/,/g, "");
      if (Q.grade(q, typed) !== "right") fail("the shown answer '" + q.show + "' is not graded right");
      if (Q.grade(q, String(q.ans + 1)) === "right" && !q.tol) fail("a wrong answer is graded right");
    } else if (q.kind === "choice") {
      if (!Array.isArray(q.opts) || q.opts.length < 3) fail("needs at least 3 options");
      if (new Set(q.opts).size !== q.opts.length) fail("duplicate options");
      if (q.ans < 0 || q.opts[q.ans] !== q.show) fail("ans index does not point at show");
    } else fail("kind must be num or choice");
    if (/NaN|undefined|Infinity|\+ −|[^0-9.]1x\b/.test(q.q + " " + q.why + " " + q.show)) fail("bad text (NaN/undefined/'+ −'/'1x')");
    if (Date.now() - t0 > 4000) { fail("too slow (a loop that never finishes?)"); break; }
  }
  console.log("maker " + i + ": " + seen.size + " different questions");
});
const quiz = Q.makeQuiz(gens);
console.log(n + " questions made, " + bad + " problems, sample quiz has " + quiz.length + " questions");
process.exit(bad ? 1 : 0);
