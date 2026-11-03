/* ============================================================
   🏆 Mathematics Learning: the Quiz
   Every quiz is made up fresh: each question maker below picks
   new random numbers, so no two quizzes are the same and there
   is nothing to memorise. Answers are only shown after the whole
   quiz is submitted.
   ============================================================ */
(function () {
  "use strict";

  // ---------- helpers ----------
  var R = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); };
  var pick = function (a) { return a[Math.floor(Math.random() * a.length)]; };
  var shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; };
  var lcm = function (a, b) { return Math.abs(a * b) / gcd(a, b); };
  var nz = function (a, b) { var x; do { x = R(a, b); } while (x === 0); return x; };
  var f = function (n) { return n < 0 ? "−" + (-n) : String(n); };              // −5 with a real minus sign
  var p = function (n) { return n < 0 ? "(" + f(n) + ")" : String(n); };          // (−5) in brackets when negative
  var fr = function (n, d) { if (d < 0) { n = -n; d = -d; } var g = gcd(n, d) || 1; n /= g; d /= g; return d === 1 ? f(n) : f(n) + "/" + d; };
  var fact = function (n) { return n <= 1 ? 1 : n * fact(n - 1); };
  var P = function (n, k) { return k < 0 || k > n ? 0 : fact(n) / fact(n - k); };
  var C = function (n, k) { return P(n, k) / fact(k); };
  var SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  var SUB = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" };
  var sup = function (n) { return String(n).split("").map(function (c) { return SUP[c]; }).join(""); };
  var sub = function (n) { return String(n).split("").map(function (c) { return SUB[c]; }).join(""); };
  var big = function (n) { return n.toLocaleString("en-US"); };
  // polynomial with the highest power first: poly([3, -5]) = "3x − 5"
  function poly(cs, v) {
    v = v || "x"; var n = cs.length - 1, s = "";
    cs.forEach(function (c, i) {
      var pw = n - i; if (c === 0) return;
      var a = Math.abs(c), coef = (a === 1 && pw > 0) ? "" : String(a), t = coef + (pw === 0 ? "" : pw === 1 ? v : v + sup(pw));
      s += s ? (c < 0 ? " − " : " + ") + t : (c < 0 ? "−" : "") + t;
    });
    return s || "0";
  }
  var plusMinus = function (b) { return b < 0 ? " − " + (-b) : " + " + b; }; // " + 3" or " − 3"
  function cx(a, b) { // complex number a + bi
    if (b === 0) return f(a);
    var bi = (Math.abs(b) === 1 ? "" : Math.abs(b)) + "i";
    if (a === 0) return (b < 0 ? "−" : "") + bi;
    return f(a) + (b < 0 ? " − " : " + ") + bi;
  }
  function mat(M) {
    var w = 0; M.forEach(function (r) { r.forEach(function (x) { w = Math.max(w, f(x).length); }); });
    return '<pre class="qz-mat">' + M.map(function (r) { return "[ " + r.map(function (x) { var s = f(x); while (s.length < w) s = " " + s; return s; }).join("  ") + " ]"; }).join("\n") + "</pre>";
  }
  var TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29]];

  // a question with a typed number answer
  function num(q, ans, show, why, o) {
    var x = { kind: "num", q: q, ans: ans, show: show == null ? f(ans) : show, why: why };
    if (o) for (var k in o) x[k] = o[k];
    return x;
  }
  // a multiple-choice question (correct answer first, then wrong ones)
  function ch(q, correct, wrong, why) {
    var opts = [correct];
    wrong.forEach(function (w) { if (opts.indexOf(w) < 0 && opts.length < 4) opts.push(w); });
    opts = shuffle(opts);
    return { kind: "choice", q: q, opts: opts, ans: opts.indexOf(correct), show: correct, why: why };
  }
  var YN = function (yes) { return yes ? ["Yes", "No"] : ["No", "Yes"]; };

  // ---------- the question makers, one list per topic ----------
  var G = {};
  /* MAKERS:START (the adult site's quiz.js is built from this file with these makers swapped for tools/adult/*.quiz.js) */

  G.arithmetic = [
    function () { var a = R(2, 9), x = R(-10, 10), b = nz(-20, 20), c = a * x + b;
      return num("Solve for x: <b>" + poly([a, b]) + " = " + f(c) + "</b>", x, null,
        (b > 0 ? "Subtract " + b + " from" : "Add " + (-b) + " to") + " both sides: " + a + "x = " + f(c - b) + ". Then divide by " + a + ": x = " + f(x) + "."); },
    function () { var a = R(2, 20), b = R(2, 9), c = R(2, 9), d = R(1, 20), v = a + b * c - d;
      return num("Work it out: <b>" + a + " + " + b + " × " + c + " − " + d + "</b>", v, null,
        "Multiply first: " + b + " × " + c + " = " + (b * c) + ". Then go left to right: " + a + " + " + (b * c) + " − " + d + " = " + f(v) + "."); },
    function () { var a = R(2, 9), b = R(2, 9), t = R(0, 2);
      if (t === 0) return num("x" + sup(a) + " · x" + sup(b) + " = x to what power? Type the exponent.", a + b, null, "Multiplying the same base: ADD the exponents. " + a + " + " + b + " = " + (a + b) + ".");
      if (t === 1) return num("(x" + sup(a) + ")" + sup(b) + " = x to what power? Type the exponent.", a * b, null, "A power of a power: MULTIPLY the exponents. " + a + " × " + b + " = " + (a * b) + ".");
      return num("x" + sup(a + b) + " ÷ x" + sup(b) + " = x to what power? Type the exponent.", a, null, "Dividing the same base: SUBTRACT the exponents. " + (a + b) + " − " + b + " = " + a + "."); },
    function () { var a = nz(-12, 12), b = nz(-12, 12), t = pick(["×", "+", "−"]);
      var v = t === "×" ? a * b : t === "+" ? a + b : a - b;
      var why = t === "×" ? Math.abs(a) + " × " + Math.abs(b) + " = " + Math.abs(v) + ", and " + ((a < 0) === (b < 0) ? "same signs make it positive" : "different signs make it negative") + ": " + f(v) + "."
        : t === "+" ? f(a) + " + " + p(b) + " = " + f(v) + "."
        : "Subtracting " + p(b) + " is the same as adding " + p(-b) + ": " + f(a) + " + " + p(-b) + " = " + f(v) + ".";
      return num("Work it out: <b>" + p(a) + " " + t + " " + p(b) + "</b>", v, null, why); },
    function () { var m = nz(-6, 6), k = R(-9, 9), x = R(-5, 5), v = m * x + k;
      return num("If f(x) = " + poly([m, k]) + ", what is f(" + f(x) + ")?", v, null, "Put " + f(x) + " in for x: " + f(m) + " × " + p(x) + (k ? plusMinus(k) : "") + " = " + f(v) + "."); },
    function () { var a = -R(2, 6), x = R(-6, 6), b = R(-10, 10), c = a * x + b;
      return ch("Solve: <b>" + poly([a, b]) + " &lt; " + f(c) + "</b>", "x > " + f(x), ["x < " + f(x), "x > " + f(x === 0 ? 1 : -x), "x < " + f(x === 0 ? -1 : -x), "x ≥ " + f(x)],
        (b ? (b > 0 ? "Subtract " + b + " from" : "Add " + (-b) + " to") + " both sides: " : "") + f(a) + "x < " + f(c - b) + ". Divide by " + f(a) + ". Dividing by a NEGATIVE number flips the sign, so x > " + f(x) + "."); },
    function () { var n = R(2, 12);
      return ch("Solve: <b>x² = " + (n * n) + "</b>", "x = " + n + " or x = −" + n, ["x = " + n + " only", "x = −" + n + " only", "x = " + (2 * n)],
        "Both " + n + "² and (−" + n + ")² equal " + (n * n) + ", so there are TWO answers."); }
  ];

  G.fractions = [
    function () { var b, d, a, c; do { b = R(2, 9); d = R(2, 9); a = R(1, b - 1); c = R(1, d - 1); } while (gcd(a, b) !== 1 || gcd(c, d) !== 1);
      var L = lcm(b, d), A = a * L / b, Cc = c * L / d, n = A + Cc;
      return num("Add, and simplify fully: <b>" + a + "/" + b + " + " + c + "/" + d + "</b>", n / L, fr(n, L),
        (b === d ? "The bottoms already match. " : "Make the bottoms match (the LCD is " + L + "): " + a + "/" + b + " = " + A + "/" + L + " and " + c + "/" + d + " = " + Cc + "/" + L + ". ") + "Add the tops: " + n + "/" + L + (gcd(n, L) > 1 ? " = " + fr(n, L) : "") + ".", { lowest: true }); },
    function () { var b, d, a, c; do { b = R(2, 9); d = R(2, 9); a = R(1, b - 1); c = R(1, d - 1); } while (gcd(a, b) !== 1 || gcd(c, d) !== 1 || a * d === c * b);
      var L = lcm(b, d), A = a * L / b, Cc = c * L / d, n = A - Cc;
      return num("Subtract, and simplify fully: <b>" + a + "/" + b + " − " + c + "/" + d + "</b>", n / L, fr(n, L),
        (b === d ? "The bottoms already match: " : "Make the bottoms match (the LCD is " + L + "): ") + A + "/" + L + " − " + Cc + "/" + L + " = " + f(n) + "/" + L + (gcd(n, L) > 1 ? " = " + fr(n, L) : "") + ".", { lowest: true }); },
    function () { var a, b, c, d; do { a = nz(-9, 9); b = R(2, 9); c = R(1, 9); d = R(2, 9); } while (gcd(a, b) !== 1 || gcd(c, d) !== 1 || c === d);
      return num("Multiply, and simplify fully: <b>" + fr(a, b).replace(/^(−.*)$/, "($1)") + " × " + c + "/" + d + "</b>", (a * c) / (b * d), fr(a * c, b * d),
        "Straight across: top × top = " + f(a * c) + ", bottom × bottom = " + (b * d) + ". So " + f(a * c) + "/" + (b * d) + (gcd(a * c, b * d) > 1 ? " = " + fr(a * c, b * d) : "") + ".", { lowest: true }); },
    function () { var a, b, c, d; do { a = R(1, 9); b = R(2, 9); c = R(1, 9); d = R(2, 9); } while (gcd(a, b) !== 1 || gcd(c, d) !== 1 || c === d || a === b);
      return num("Divide, and simplify fully: <b>" + a + "/" + b + " ÷ " + c + "/" + d + "</b>", (a * d) / (b * c), fr(a * d, b * c),
        "Keep, change, flip: " + a + "/" + b + " × " + d + "/" + c + " = " + (a * d) + "/" + (b * c) + (gcd(a * d, b * c) > 1 ? " = " + fr(a * d, b * c) : "") + ".", { lowest: true }); },
    function () { var b = R(3, 12), a, k = R(2, 9); do { a = R(1, b - 1); } while (gcd(a, b) !== 1);
      return num("Simplify fully: <b>" + (a * k) + "/" + (b * k) + "</b>", a / b, a + "/" + b,
        "The biggest number that divides both is " + k + ". " + (a * k) + " ÷ " + k + " = " + a + " and " + (b * k) + " ÷ " + k + " = " + b + ". So " + (a * k) + "/" + (b * k) + " = " + a + "/" + b + ".", { lowest: true }); },
    function () { var a, b, c, d; do { b = R(2, 12); d = R(2, 12); a = R(1, b + 3); c = R(1, d + 3); } while (b === d);
      var l = a * d, r = c * b, s = l > r ? ">" : l < r ? "<" : "=";
      return ch("Which sign goes in the box? <b>" + a + "/" + b + " ☐ " + c + "/" + d + "</b>", s, [">", "<", "="].filter(function (x) { return x !== s; }),
        "Cross-multiply: " + a + " × " + d + " = " + l + " and " + c + " × " + b + " = " + r + ". Since " + l + " " + s + " " + r + ", " + a + "/" + b + " " + s + " " + c + "/" + d + "."); },
    function () { var b = R(2, 9), a, m = nz(-6, 6); do { a = R(1, 9); } while (gcd(a, b) !== 1 || a === b);
      var x = b * m, c = a * m;
      return num("Solve for x: <b>(" + a + "/" + b + ")x = " + f(c) + "</b>", x, null, "Multiply both sides by the flip, " + b + "/" + a + ": x = " + f(c) + " × " + b + "/" + a + " = " + f(x) + "."); },
    function () { var b = R(2, 10), a = R(1, b - 1), m = R(2, 12), n = b * m;
      return num("What is <b>" + a + "/" + b + " of " + n + "</b>?", a * m, null, "Split " + n + " into " + b + " equal parts: each part is " + m + ". Take " + a + " parts: " + a + " × " + m + " = " + (a * m) + "."); }
  ];

  G.logic = (function () {
    function st() { var a = R(1, 20), b; do { b = R(1, 20); } while (b === a); var op = pick([">", "<"]); return { t: a + " " + (op === ">" ? "&gt;" : "&lt;") + " " + b, v: op === ">" ? a > b : a < b }; }
    var TF = function (v) { return v ? "True" : "False"; };
    var PAIRS = [
      { original: "If an animal is a dog, then it is a mammal.", converse: "If an animal is a mammal, then it is a dog.", inverse: "If an animal is not a dog, then it is not a mammal.", contrapositive: "If an animal is not a mammal, then it is not a dog." },
      { original: "If a shape is a square, then it has four sides.", converse: "If a shape has four sides, then it is a square.", inverse: "If a shape is not a square, then it does not have four sides.", contrapositive: "If a shape does not have four sides, then it is not a square." },
      { original: "If it is raining, then the ground is wet.", converse: "If the ground is wet, then it is raining.", inverse: "If it is not raining, then the ground is not wet.", contrapositive: "If the ground is not wet, then it is not raining." },
      { original: "If a number ends in 0, then it is even.", converse: "If a number is even, then it ends in 0.", inverse: "If a number does not end in 0, then it is not even.", contrapositive: "If a number is not even, then it does not end in 0." },
      { original: "If you live in Paris, then you live in France.", converse: "If you live in France, then you live in Paris.", inverse: "If you do not live in Paris, then you do not live in France.", contrapositive: "If you do not live in France, then you do not live in Paris." },
      { original: "If an animal is a penguin, then it is a bird.", converse: "If an animal is a bird, then it is a penguin.", inverse: "If an animal is not a penguin, then it is not a bird.", contrapositive: "If an animal is not a bird, then it is not a penguin." }];
    return [
      function () { var a = st(), b = st(), op = pick(["AND", "OR"]), v = op === "AND" ? (a.v && b.v) : (a.v || b.v);
        return ch("True or false? <b>(" + a.t + ") " + op + " (" + b.t + ")</b>", TF(v), [TF(!v)],
          "The first part is " + TF(a.v).toLowerCase() + " and the second part is " + TF(b.v).toLowerCase() + ". " + (op === "AND" ? "AND needs BOTH parts to be true" : "OR needs at least ONE part to be true") + ", so it's " + TF(v).toLowerCase() + "."); },
      function () { var a = st(); return ch("True or false? <b>NOT (" + a.t + ")</b>", TF(!a.v), [TF(a.v)], "\"" + a.t.replace(/&gt;/, ">").replace(/&lt;/, "<") + "\" is " + TF(a.v).toLowerCase() + ", and NOT flips it, so the answer is " + TF(!a.v).toLowerCase() + "."); },
      function () { var n = R(-9, 12), ops = [[">", "≤"], ["<", "≥"], ["≥", "<"], ["≤", ">"]], o = pick(ops);
        var esc = function (s) { return s.replace(">", "&gt;").replace("<", "&lt;"); };
        return ch("What is the opposite (NOT) of <b>x " + esc(o[0]) + " " + f(n) + "</b>?", "x " + esc(o[1]) + " " + f(n), ops.filter(function (q) { return q[1] !== o[1]; }).map(function (q) { return "x " + esc(q[1]) + " " + f(n); }),
          "NOT flips the sign AND swaps whether the number itself is included. The opposite of " + esc(o[0]) + " is " + esc(o[1]) + "."); },
      function () { var a = st(), b = st(), v = !a.v || b.v;
        return ch("True or false? <b>IF (" + a.t + ") THEN (" + b.t + ")</b>", TF(v), [TF(!v)],
          "An IF–THEN promise is only broken when the IF part is true but the THEN part is false. Here the IF part is " + TF(a.v).toLowerCase() + " and the THEN part is " + TF(b.v).toLowerCase() + ", so it's " + TF(v).toLowerCase() + "." + (a.v ? "" : " A false IF never tests the promise, so it can't be broken.")); },
      function () { var s = pick(PAIRS), kind = pick(["contrapositive", "converse", "inverse"]);
        var why = { converse: "The CONVERSE swaps the two parts.", inverse: "The INVERSE puts NOT in front of both parts.", contrapositive: "The CONTRAPOSITIVE swaps the parts AND puts NOT in front of both. It's the one that always means the same as the original!" };
        return ch("Which is the <b>" + kind.toUpperCase() + "</b> of: “" + s.original + "”", s[kind], ["contrapositive", "converse", "inverse", "original"].filter(function (k) { return k !== kind; }).map(function (k) { return s[k]; }), why[kind]); },
      function () { if (Math.random() < 0.5) { var good = 4 * R(1, 20) + 2;
          return ch("Which number is a COUNTEREXAMPLE to: “If a number is even, then it is divisible by 4”?", String(good), [String(4 * R(1, 20)), String(4 * R(1, 20) + 1), String(2 * R(1, 20) + 1), String(4 * R(1, 20))],
            "A counterexample makes the IF part true and the THEN part false. " + good + " is even, but " + good + " ÷ 4 leaves a remainder, so it breaks the rule."); }
        var g = 6 * R(1, 15);
        return ch("Which number is a COUNTEREXAMPLE to: “If a number is divisible by 3, then it is odd”?", String(g), [String(6 * R(0, 14) + 3), String(6 * R(0, 14) + 3), String(2 * R(1, 30) + 1), String(6 * R(1, 15) + 4)],
          "A counterexample makes the IF part true and the THEN part false. " + g + " is divisible by 3, but it is even, so it breaks the rule."); }
    ];
  })();

  G["algebraic-equations"] = [
    function () { var x = R(-9, 9), a = R(2, 9), c, b = R(-15, 15); do { c = R(1, 9); } while (c === a); var d = a * x + b - c * x;
      return num("Solve for x: <b>" + poly([a, b]) + " = " + poly([c, d]) + "</b>", x, null,
        "Get the x's on one side: " + poly([a, 0]) + " − " + poly([c, 0]) + " = " + poly([a - c, 0]) + ". Get the numbers on the other: " + f(d) + " − " + p(b) + " = " + f(d - b) + ". So " + poly([a - c, 0]) + " = " + f(d - b) + ". " + (a - c === 1 ? "" : "Divide both sides by " + f(a - c) + ": ") + "x = " + f(x) + "."); },
    function () { var a = R(2, 6), x = R(-8, 8), b = nz(-9, 9), c = a * (x + b);
      return num("Solve for x: <b>" + a + "(x" + plusMinus(b) + ") = " + f(c) + "</b>", x, null, "Divide both sides by " + a + ": x" + plusMinus(b) + " = " + f(x + b) + ". Then " + (b > 0 ? "subtract " + b : "add " + (-b)) + ": x = " + f(x) + "."); },
    function () { var a = R(2, 6), m = R(-6, 6), b = nz(-9, 9), x = a * m, c = m + b;
      return num("Solve for x: <b>x/" + a + plusMinus(b) + " = " + f(c) + "</b>", x, null, (b > 0 ? "Subtract " + b : "Add " + (-b)) + ": x/" + a + " = " + f(m) + ". Multiply by " + a + ": x = " + f(x) + "."); },
    function () { var x = R(-8, 8), y = R(-8, 8), s = x + y, d = x - y, askX = Math.random() < 0.5;
      return num("Solve the pair of equations: <b>x + y = " + f(s) + "</b> and <b>x − y = " + f(d) + "</b>. What is " + (askX ? "x" : "y") + "?", askX ? x : y, null,
        "Add the two equations: 2x = " + f(s + d) + ", so x = " + f(x) + ". Then y = " + f(s) + " − " + p(x) + " = " + f(y) + "."); },
    function () { var a = nz(-6, 6), x = R(-6, 6), b = R(-10, 10), c = a * x + b, yes = Math.random() < 0.5, v = yes ? x : x + nz(-3, 3);
      return ch("Is <b>x = " + f(v) + "</b> a solution of <b>" + poly([a, b]) + " = " + f(c) + "</b>?", YN(yes)[0], [YN(yes)[1]],
        "Plug it in: " + f(a) + " × " + p(v) + (b ? plusMinus(b) : "") + " = " + f(a * v + b) + (a * v + b === c ? ", which matches " + f(c) + ". Yes!" : ", which is not " + f(c) + ". No.")); },
    function () { var a = nz(-9, 9), b = nz(-9, 9), k = nz(-9, 9), ask = pick(["x", "y", "c"]);
      var e = poly([a, 0]) + (b < 0 ? " − " : " + ") + (Math.abs(b) === 1 ? "" : Math.abs(b)) + "y" + plusMinus(k);
      if (ask === "c") return num("In <b>" + e + "</b>, what is the CONSTANT term?", k, null, "The constant is the plain number with no letter: " + f(k) + ". (The sign comes along!)");
      return num("In <b>" + e + "</b>, what is the COEFFICIENT of " + ask + "?", ask === "x" ? a : b, null, "The coefficient is the number in front of " + ask + ", sign included" + (Math.abs(ask === "x" ? a : b) === 1 ? " (no number means 1, so −" + ask + " means −1 × " + ask + ")" : "") + ": " + f(ask === "x" ? a : b) + "."); }
  ];

  G["linear-functions"] = [
    function () { var x1 = R(-6, 6), x2, y1 = R(-6, 6), y2 = R(-6, 6); do { x2 = R(-6, 6); } while (x2 === x1);
      return num("What is the slope of the line through <b>(" + f(x1) + ", " + f(y1) + ")</b> and <b>(" + f(x2) + ", " + f(y2) + ")</b>? (Type a fraction if it isn't a whole number.)", (y2 - y1) / (x2 - x1), fr(y2 - y1, x2 - x1),
        "Slope = rise ÷ run = (" + f(y2) + " − " + p(y1) + ") ÷ (" + f(x2) + " − " + p(x1) + ") = " + f(y2 - y1) + " ÷ " + p(x2 - x1) + " = " + fr(y2 - y1, x2 - x1) + "."); },
    function () { var m = nz(-6, 6), b = R(-9, 9), k = R(-6, 6);
      return num("If f(x) = " + poly([m, b]) + ", what is f(" + f(k) + ")?", m * k + b, null, f(m) + " × " + p(k) + (b ? plusMinus(b) : "") + " = " + f(m * k + b) + "."); },
    function () { var r = R(-8, 8), m = nz(-5, 5), b = -m * r;
      return num("Where does the line <b>y = " + poly([m, b]) + "</b> cross the x-axis? Type the x-value.", r, null, "On the x-axis, y = 0. So " + poly([m, b]) + " = 0. " + (b ? (b < 0 ? "Add " + (-b) + " to" : "Subtract " + b + " from") + " both sides: " + poly([m, 0]) + " = " + f(-b) + ". " : "") + "Divide by " + f(m) + ": x = " + f(r) + "."); },
    function () { var pp = nz(-5, 5), q = R(1, 5), b = R(-9, 9), perp = Math.random() < 0.5, mS = fr(pp, q);
      var line = pp % q === 0 ? "y = " + poly([pp / q, b]) : "y = (" + mS + ")x" + (b ? plusMinus(b) : "");
      if (perp) return num("What is the slope of a line PERPENDICULAR to <b>" + line + "</b>? (Type a fraction if it isn't a whole number.)", -q / pp, fr(-q, pp), "Perpendicular slopes multiply to −1: flip the slope " + mS + " and change its sign, giving " + fr(-q, pp) + ".");
      return num("What is the slope of a line PARALLEL to <b>" + line + "</b>?", pp / q, mS, "Parallel lines have exactly the same slope: " + mS + "."); },
    function () { var a = nz(-4, 4), b = R(-6, 6), c = nz(-4, 4), d = R(-6, 6), k = R(-4, 4), g = c * k + d, v = a * g + b;
      return num("If f(x) = " + poly([a, b]) + " and g(x) = " + poly([c, d]) + ", what is <b>f(g(" + f(k) + "))</b>?", v, null, "Inside first: g(" + f(k) + ") = " + f(g) + ". Then f(" + f(g) + ") = " + f(a) + " × " + p(g) + (b ? plusMinus(b) : "") + " = " + f(v) + "."); },
    function () { var m = nz(-4, 4), b = R(-9, 9), x1 = R(-5, 5), x2; do { x2 = R(-5, 5); } while (x2 === x1);
      return num("A straight line goes through <b>(" + f(x1) + ", " + f(m * x1 + b) + ")</b> and <b>(" + f(x2) + ", " + f(m * x2 + b) + ")</b>. What is its y-intercept?", b, null,
        "The slope is (" + f(m * x2 + b) + " − " + p(m * x1 + b) + ") ÷ (" + f(x2) + " − " + p(x1) + ") = " + f(m * (x2 - x1)) + " ÷ " + p(x2 - x1) + " = " + f(m) + ". Then b = y − mx = " + f(m * x1 + b) + " − " + p(m) + " × " + p(x1) + " = " + f(b) + "."); }
  ];

  G.logarithms = [
    function () { var b = pick([2, 3, 5, 10]), n = R(0, b === 2 ? 7 : b === 3 ? 5 : 4);
      return num("Work it out: <b>log" + sub(b) + "(" + big(Math.pow(b, n)) + ")</b>", n, null, b + " to the power " + n + " is " + big(Math.pow(b, n)) + ", so the log is " + n + "."); },
    function () { var b = 2, n = R(1, 3);
      return num("Bonus! Work it out: <b>log" + sub(b) + "(1/" + big(Math.pow(b, n)) + ")</b>", -n, null, "1/" + big(Math.pow(b, n)) + " = " + b + sup(-n) + ", so the log is " + f(-n) + "."); },
    function () { var b = pick([2, 3, 4, 5, 10]), n = R(1, b === 10 ? 5 : 4);
      return num("If <b>log" + sub(b) + "(x) = " + n + "</b>, what is x?", Math.pow(b, n), big(Math.pow(b, n)), "Rewrite it as a power: x = " + b + sup(n) + " = " + big(Math.pow(b, n)) + "."); },
    function () { var b = pick([2, 3, 10]), x = R(2, 12), y = R(2, 12);
      return num("log" + sub(b) + "(" + x + ") + log" + sub(b) + "(" + y + ") = log" + sub(b) + "(?)", x * y, null, "Adding logs is the same as multiplying inside: " + x + " × " + y + " = " + (x * y) + "."); },
    function () { var b = pick([2, 3, 10]), y = R(2, 9), k = R(2, 9);
      return num("log" + sub(b) + "(" + (y * k) + ") − log" + sub(b) + "(" + y + ") = log" + sub(b) + "(?)", k, null, "Subtracting logs is the same as dividing inside: " + (y * k) + " ÷ " + y + " = " + k + "."); },
    function () { var b = pick([2, 5, 7, 10, 12]), one = Math.random() < 0.5;
      return num("Work it out: <b>log" + sub(b) + "(" + (one ? 1 : b) + ")</b>", one ? 0 : 1, null, one ? b + " to the power 0 is 1, so the log of 1 is 0." : b + " to the power 1 is " + b + ", so the answer is 1."); },
    function () { var a = R(3, 6), d = R(1, 3);
      return num("One earthquake is magnitude " + (a + d) + " and another is magnitude " + a + ". How many times more shaking does the bigger one have?", Math.pow(10, d), big(Math.pow(10, d)),
        "Each step up the magnitude scale means 10 times the shaking. " + d + " step" + (d > 1 ? "s" : "") + " up: 10" + sup(d) + " = " + big(Math.pow(10, d)) + "."); }
  ];

  G["exponential-growth"] = [
    function () { var a = R(1, 5), b = R(2, 4), n = R(0, 4);
      return num("If f(x) = " + a + " × " + b + "ˣ, what is f(" + n + ")?", a * Math.pow(b, n), null, a + " × " + b + sup(n) + " = " + a + " × " + Math.pow(b, n) + " = " + (a * Math.pow(b, n)) + "."); },
    function () { var a = R(2, 20), k = R(1, 6);
      return num("A colony starts with " + a + " bacteria and DOUBLES every hour. How many are there after " + k + " hour" + (k > 1 ? "s" : "") + "?", a * Math.pow(2, k), big(a * Math.pow(2, k)), a + " × 2" + sup(k) + " = " + a + " × " + Math.pow(2, k) + " = " + big(a * Math.pow(2, k)) + "."); },
    function () { var a = R(1, 12), k = R(1, 5), start = a * Math.pow(2, k);
      return num("A medicine starts at " + start + " mg in the body and HALVES every 6 hours. How many mg are left after " + (6 * k) + " hours?", a, null, (6 * k) + " hours is " + k + " halving" + (k > 1 ? "s" : "") + ": " + start + " ÷ " + Math.pow(2, k) + " = " + a + "."); },
    function () { var b = R(2, 5), n = R(1, 3);
      return num("Work it out: <b>" + b + sup(-n) + "</b>. (Type a fraction.)", 1 / Math.pow(b, n), "1/" + Math.pow(b, n), "A negative exponent means flip: " + b + sup(-n) + " = 1/" + (n === 1 ? b : b + sup(n) + " = 1/" + Math.pow(b, n)) + "."); },
    function () { var b = R(2, 15); return num("Work it out: <b>" + b + "⁰</b>", 1, null, "Any (non-zero) number to the power 0 is 1."); },
    function () { var r = pick([5, 10, 20, 25, 50, 3, 8]), up = Math.random() < 0.5;
      return num("Something " + (up ? "grows" : "shrinks") + " by " + r + "% every year. What do you multiply by each year? (Type a decimal or a fraction.)", up ? 1 + r / 100 : 1 - r / 100, String(up ? 1 + r / 100 : 1 - r / 100),
        (up ? "Keep 100% and add " + r + "%: 1 + " : "Keep 100% and take away " + r + "%: 1 − ") + (r / 100) + " = " + (up ? 1 + r / 100 : 1 - r / 100) + "." + " (As a fraction: " + fr(up ? 100 + r : 100 - r, 100) + ".)"); },
    function () { var a = R(1, 5), r = R(2, 4), d = R(2, 6), s = R(1, 5);
      var ex = [a, a * r, a * r * r, a * r * r * r].join(", "), li = [s, s + d, s + 2 * d, s + 3 * d].join(", "), qu = [1, 4, 9, 16].map(function (x) { return x + s; }).join(", ");
      return ch("Which list of numbers grows EXPONENTIALLY?", ex, [li, qu], "In " + ex + ", every number is " + r + " times the one before. Multiplying by the same number each step is exponential growth."); }
  ];

  G["pascals-triangle"] = [
    function () { var n = R(4, 10), k = R(1, n - 1);
      return num("In Pascal's triangle, what is entry " + k + " of row " + n + "? (Start counting rows and entries at 0.) That's C(" + n + ", " + k + ").", C(n, k), null, "C(" + n + ", " + k + ") = " + n + "! ÷ (" + k + "! × " + (n - k) + "!) = " + C(n, k) + "."); },
    function () { var n = R(3, 12);
      return num("What do all the numbers in row " + n + " of Pascal's triangle add up to? (The top row is row 0.)", Math.pow(2, n), big(Math.pow(2, n)), "Each row adds up to a power of 2: row " + n + " adds up to 2" + sup(n) + " = " + big(Math.pow(2, n)) + "."); },
    function () { var n = R(4, 10), k = R(1, n - 2);
      return num("Two neighbours in Pascal's triangle are <b>" + C(n, k) + "</b> and <b>" + C(n, k + 1) + "</b>. What number sits right below them?", C(n, k) + C(n, k + 1), null, "Pascal's rule: add the two numbers above. " + C(n, k) + " + " + C(n, k + 1) + " = " + (C(n, k) + C(n, k + 1)) + "."); },
    function () { var n = R(3, 8), k = R(1, n - 1);
      return num("When you multiply out <b>(x + 1)" + sup(n) + "</b>, what number is in front of x" + (k === 1 ? "" : sup(k)) + "?", C(n, k), null, "The numbers come from row " + n + " of Pascal's triangle: C(" + n + ", " + k + ") = " + C(n, k) + "."); },
    function () { var a = R(1, 5), b = R(1, 5);
      return num("On a grid, you walk from the bottom-left corner to a spot " + a + " step" + (a > 1 ? "s" : "") + " right and " + b + " step" + (b > 1 ? "s" : "") + " up, only moving RIGHT or UP. How many different paths are there?", C(a + b, a), null, "You take " + (a + b) + " steps and choose which " + a + " of them are RIGHT: C(" + (a + b) + ", " + a + ") = " + C(a + b, a) + "."); },
    function () { var n = R(5, 20); return num("A row of Pascal's triangle starts 1, " + n + ", ... What is its third number?", C(n, 2), null, "That's row " + n + ", and its third number is C(" + n + ", 2) = " + n + " × " + (n - 1) + " ÷ 2 = " + C(n, 2) + "."); }
  ];

  G.geometry = [
    function () { var a = R(20, 100), b = R(20, 160 - a - 10), c = 180 - a - b;
      return num("A triangle has angles of " + a + "° and " + b + "°. What is the third angle (in degrees)?", c, null, "The angles of a triangle add up to 180°: 180 − " + a + " − " + b + " = " + c + "."); },
    function () { var t = pick(TRIPLES.slice(0, 4)), k = R(1, 2), A = t[0] * k, B = t[1] * k, H = t[2] * k;
      if (Math.random() < 0.5) return num("A right triangle has legs " + A + " and " + B + ". How long is the hypotenuse?", H, null, A + "² + " + B + "² = " + (A * A) + " + " + (B * B) + " = " + (H * H) + ", and √" + (H * H) + " = " + H + ".");
      return num("A right triangle has hypotenuse " + H + " and one leg " + A + ". How long is the other leg?", B, null, H + "² − " + A + "² = " + (H * H) + " − " + (A * A) + " = " + (B * B) + ", and √" + (B * B) + " = " + B + "."); },
    function () { var n = R(3, 12);
      return num("What do the inside angles of a " + n + "-sided polygon add up to (in degrees)?", (n - 2) * 180, null, "(n − 2) × 180 = (" + n + " − 2) × 180 = " + ((n - 2) * 180) + "."); },
    function () { var n = pick([3, 4, 5, 6, 8, 9, 10, 12]), ext = Math.random() < 0.5;
      if (ext) return num("What is each OUTSIDE (exterior) angle of a regular " + n + "-sided polygon (in degrees)?", 360 / n, null, "The outside angles always add up to 360°: 360 ÷ " + n + " = " + (360 / n) + ".");
      return num("What is each INSIDE angle of a regular " + n + "-sided polygon (in degrees)?", (n - 2) * 180 / n, null, "Total (" + n + " − 2) × 180 = " + ((n - 2) * 180) + ", shared by " + n + " angles: " + ((n - 2) * 180 / n) + "."); },
    function () { var t = R(0, 2);
      if (t === 0) { var b = R(2, 20), h = R(2, 20); return num("A triangle has base " + b + " and height " + h + ". What is its area?", b * h / 2, null, "Area = base × height ÷ 2 = " + b + " × " + h + " ÷ 2 = " + (b * h / 2) + "."); }
      if (t === 1) { var a = R(2, 12), c = R(2, 12), hh = 2 * R(1, 6); return num("A trapezoid has parallel sides " + a + " and " + c + " and height " + hh + ". What is its area?", (a + c) * hh / 2, null, "Area = (" + a + " + " + c + ") ÷ 2 × " + hh + " = " + ((a + c) * hh / 2) + "."); }
      var w = R(2, 15), l = R(2, 15); return num("A rectangle is " + w + " by " + l + ". What is its area?", w * l, null, w + " × " + l + " = " + (w * l) + "."); },
    function () { var supp = Math.random() < 0.5, a = supp ? R(10, 170) : R(5, 85);
      return num("What angle is " + (supp ? "SUPPLEMENTARY" : "COMPLEMENTARY") + " to " + a + "° (in degrees)?", (supp ? 180 : 90) - a, null, (supp ? "Supplementary angles add up to 180°" : "Complementary angles add up to 90°") + ": " + (supp ? 180 : 90) + " − " + a + " = " + ((supp ? 180 : 90) - a) + "."); },
    function () { var r = R(2, 12), area = Math.random() < 0.5;
      return num("A circle has radius " + r + ". Its " + (area ? "AREA" : "CIRCUMFERENCE") + " is how many times π? (Type just the number in front of π.)", area ? r * r : 2 * r, null, area ? "Area = πr² = π × " + r + "² = " + (r * r) + "π." : "Circumference = 2πr = 2 × π × " + r + " = " + (2 * r) + "π."); },
    function () { var k = R(2, 5);
      return num("A shape is enlarged so every length is " + k + " times longer. How many times as big is its AREA?", k * k, null, "Area grows by the scale factor SQUARED: " + k + "² = " + (k * k) + "."); }
  ];

  G["algebraic-geometry"] = [
    function () { var t = pick(TRIPLES.slice(0, 4)), x = R(-6, 6), y = R(-6, 6), dx = t[0] * pick([1, -1]), dy = t[1] * pick([1, -1]);
      if (Math.random() < 0.5) { var s = dx; dx = dy; dy = s; }
      return num("How far apart are <b>(" + f(x) + ", " + f(y) + ")</b> and <b>(" + f(x + dx) + ", " + f(y + dy) + ")</b>?", t[2], null, "Across " + Math.abs(dx) + ", up/down " + Math.abs(dy) + ". Distance = √(" + Math.abs(dx) + "² + " + Math.abs(dy) + "²) = √" + (t[2] * t[2]) + " = " + t[2] + "."); },
    function () { var x1 = R(-8, 8), y1 = R(-8, 8), x2 = x1 + 2 * R(-5, 5), y2 = y1 + 2 * nz(-5, 5), mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      var pt = function (a, b) { return "(" + f(a) + ", " + f(b) + ")"; };
      return ch("What is the MIDPOINT of " + pt(x1, y1) + " and " + pt(x2, y2) + "?", pt(mx, my), [pt(x2 - x1, y2 - y1), pt(x1 + x2, y1 + y2), pt(my, mx), pt(mx, -my), pt(mx + 1, my), pt(mx, my + 1), pt(x1, y1)],
        "Average the coordinates: x = (" + f(x1) + " + " + p(x2) + ") ÷ 2 = " + f(mx) + ", y = (" + f(y1) + " + " + p(y2) + ") ÷ 2 = " + f(my) + "."); },
    function () { var x = nz(-9, 9), y = nz(-9, 9), q = x > 0 ? (y > 0 ? "I" : "IV") : (y > 0 ? "II" : "III");
      return ch("Which quadrant is the point <b>(" + f(x) + ", " + f(y) + ")</b> in?", "Quadrant " + q, ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        "x is " + (x > 0 ? "positive (right)" : "negative (left)") + " and y is " + (y > 0 ? "positive (up)" : "negative (down)") + ", so it's in Quadrant " + q + "."); },
    function () { var m = nz(-4, 4), b = R(-6, 6), x = R(-5, 5), yes = Math.random() < 0.5, y = m * x + b + (yes ? 0 : nz(-3, 3));
      return ch("Is the point <b>(" + f(x) + ", " + f(y) + ")</b> on the line <b>y = " + poly([m, b]) + "</b>?", YN(yes)[0], [YN(yes)[1]],
        "Plug in x = " + f(x) + ": y = " + f(m) + " × " + p(x) + (b ? plusMinus(b) : "") + " = " + f(m * x + b) + ". " + (yes ? "That matches, so yes!" : "But the point has y = " + f(y) + ", so no.")); },
    function () { var h = R(-6, 6), k, r = R(1, 9); do { k = R(-6, 6); } while ((h === 0 && k === 0) || Math.abs(h) === Math.abs(k)); var eq = "(x" + (h ? plusMinus(-h) : "") + ")² + (y" + (k ? plusMinus(-k) : "") + ")² = " + (r * r);
      if (h === 0) eq = eq.replace("(x)²", "x²"); if (k === 0) eq = eq.replace("(y)²", "y²");
      if (Math.random() < 0.5) return num("What is the RADIUS of the circle <b>" + eq + "</b>?", r, null, "The number on the right is r² = " + (r * r) + ", so r = √" + (r * r) + " = " + r + ".");
      var pt = function (a, b) { return "(" + f(a) + ", " + f(b) + ")"; };
      return ch("What is the CENTER of the circle <b>" + eq + "</b>?", pt(h, k), [pt(-h, -k), pt(k, h), pt(-h, k), pt(h, -k)], "In (x − h)² + (y − k)² = r², the center is (h, k). Watch the signs: it's " + pt(h, k) + "."); },
    function () { var x = nz(-9, 9), y = nz(-9, 9), axis = pick(["x", "y"]);
      var pt = function (a, b) { return "(" + f(a) + ", " + f(b) + ")"; }, ans = axis === "x" ? pt(x, -y) : pt(-x, y);
      return ch("Reflect <b>" + pt(x, y) + "</b> over the " + axis + "-axis. Where does it land?", ans, [pt(x, -y), pt(-x, y), pt(-x, -y), pt(y, x)],
        "Reflecting over the " + axis + "-axis flips the sign of the " + (axis === "x" ? "y" : "x") + "-coordinate: " + ans + "."); }
  ];

  G["non-euclidean-geometry"] = [
    function () { var a, b, c; do { a = R(60, 150); b = R(60, 150); c = R(10, 170); } while (a + b + c <= 185 || a + 180 <= b + c || b + 180 <= a + c || c + 180 <= a + b);
      return num("A triangle drawn on a sphere (ball) has angles " + a + "°, " + b + "° and " + c + "°. What is its angle EXCESS (sum − 180°)?", a + b + c - 180, null, a + " + " + b + " + " + c + " = " + (a + b + c) + "°, and " + (a + b + c) + " − 180 = " + (a + b + c - 180) + "°."); },
    function () { var E = pick([72, 90, 120, 144, 180, 240, 270]);
      return num("A triangle on a sphere (ball) has an angle excess of " + E + "°. What FRACTION of the whole sphere does it cover? (Type a fraction.)", E / 720, fr(E, 720), "Girard's theorem: area = R² × excess (in radians), and the whole ball is 4πR². So the fraction is excess ÷ 4π, which in degrees is excess ÷ 720°. (The 90°-90°-90° triangle has excess 90° and covers 1/8 of the ball.) " + E + "/720 = " + fr(E, 720) + "."); },
    function () { var t = R(0, 2), s = t === 0 ? R(120, 179) : t === 1 ? 180 : R(181, 300);
      var w = ["a saddle (hyperbolic)", "a flat plane (Euclidean)", "a sphere (spherical)"];
      return ch("A triangle's angles add up to " + s + "°. What kind of surface is it drawn on?", w[t], w.filter(function (x, i) { return i !== t; }),
        "Less than 180° means a saddle, exactly 180° means flat, and more than 180° means a sphere."); },
    function () { var t = R(0, 2), worlds = ["on a flat plane", "on a sphere", "on a saddle (hyperbolic plane)"], ans = ["Exactly 1", "None", "Infinitely many"];
      return ch("You have a line and a point NOT on it. How many lines through the point never meet the first line, " + worlds[t] + "?", ans[t], ans.filter(function (x, i) { return i !== t; }),
        "Flat: exactly 1 (Euclid's parallel postulate). Sphere: none, because every pair of great circles meets. Saddle: infinitely many."); },
    function () { var a = R(30, 80), b = R(20, 80), c = R(10, Math.max(11, 170 - a - b));
      return num("A triangle on a saddle (hyperbolic) surface has angles " + a + "°, " + b + "° and " + c + "°. What is its angle DEFICIT (180° − sum)?", 180 - a - b - c, null, "180 − (" + a + " + " + b + " + " + c + ") = 180 − " + (a + b + c) + " = " + (180 - a - b - c) + "°."); },
    function () { return ch("On a sphere, what are the \"straight lines\" (the shortest paths)?", "Great circles", ["Latitude lines other than the equator", "Tiny circles", "Spirals"], "The shortest path on a sphere follows a GREAT circle, a circle whose center is the center of the sphere, like the equator."); }
  ];

  G["fractal-geometry"] = [
    function () { var n = R(1, 5); return num("Start with one line segment and do the Koch step " + n + " time" + (n > 1 ? "s" : "") + ". How many small segments are there?", Math.pow(4, n), big(Math.pow(4, n)), "Each step turns every segment into 4: 4" + sup(n) + " = " + big(Math.pow(4, n)) + "."); },
    function () { var n = R(1, 4); return num("A Koch curve starts 1 unit long. How long is it after " + n + " step" + (n > 1 ? "s" : "") + "? (Type a fraction.)", Math.pow(4 / 3, n), fr(Math.pow(4, n), Math.pow(3, n)), "Each step multiplies the length by 4/3: (4/3)" + sup(n) + " = " + fr(Math.pow(4, n), Math.pow(3, n)) + "."); },
    function () { var n = R(1, 6); return num("After " + n + " step" + (n > 1 ? "s" : "") + " of the Sierpinski triangle, how many small shaded triangles are there?", Math.pow(3, n), big(Math.pow(3, n)), "Each step turns every triangle into 3: 3" + sup(n) + " = " + big(Math.pow(3, n)) + "."); },
    function () { var n = R(1, 4); return num("What fraction of the original area is still shaded after " + n + " step" + (n > 1 ? "s" : "") + " of the Sierpinski triangle? (Type a fraction.)", Math.pow(3 / 4, n), fr(Math.pow(3, n), Math.pow(4, n)), "Each step keeps 3/4 of the area: (3/4)" + sup(n) + " = " + fr(Math.pow(3, n), Math.pow(4, n)) + "."); },
    function () { var c = pick([[4, 2, "a square"], [9, 3, "a square"], [8, 2, "a cube"], [27, 3, "a cube"], [3, 3, "a line segment"], [3, 2, "the Sierpinski triangle"], [4, 3, "the Koch curve"], [8, 3, "the Sierpinski carpet"]]);
      var d = Math.log(c[0]) / Math.log(c[1]), whole = Math.abs(d - Math.round(d)) < 1e-9, show = whole ? String(Math.round(d)) : d.toFixed(2);
      return num("It takes " + c[0] + " copies of " + c[2] + ", each 1/" + c[1] + " the size, to build the whole thing. Its dimension is log(" + c[0] + ") ÷ log(" + c[1] + "). What is it?" + (whole ? "" : " (Round to 2 decimal places.)"), d, show,
        "log(" + c[0] + ") ÷ log(" + c[1] + ") = " + show + (whole ? "" : " (≈ " + d.toFixed(3) + ")") + "." + (whole ? "" : " A dimension between whole numbers is the sign of a fractal!"), { tol: whole ? 1e-9 : 0.006 }); },
    function () { var n = R(1, 5), len = Math.random() < 0.5;
      if (len) return num("The Cantor set starts as a line 1 unit long. Each step removes the middle third of every piece. How long is what's left after " + n + " step" + (n > 1 ? "s" : "") + "? (Type a fraction.)", Math.pow(2 / 3, n), fr(Math.pow(2, n), Math.pow(3, n)), "Each step keeps 2/3: (2/3)" + sup(n) + " = " + fr(Math.pow(2, n), Math.pow(3, n)) + ".");
      return num("The Cantor set removes the middle third of every piece each step. How many pieces are there after " + n + " step" + (n > 1 ? "s" : "") + "?", Math.pow(2, n), null, "Each piece becomes 2: 2" + sup(n) + " = " + Math.pow(2, n) + "."); }
  ];

  G.calculus = [
    function () { var a = R(1, 5), n = R(2, 4), k = R(-3, 3), v = a * n * Math.pow(k, n - 1);
      return num("If f(x) = " + poly([a].concat(new Array(n).fill(0))) + ", what is <b>f′(" + f(k) + ")</b>?", v, null, "Power rule: f′(x) = " + (a * n) + "x" + (n - 1 > 1 ? sup(n - 1) : "") + ". Then f′(" + f(k) + ") = " + (a * n) + " × " + p(k) + (n - 1 > 1 ? sup(n - 1) : "") + " = " + f(v) + "."); },
    function () { var a = nz(-5, 5), b = R(-9, 9), c = R(-9, 9), k = R(-4, 4), v = 2 * a * k + b;
      return num("If f(x) = " + poly([a, b, c]) + ", what is <b>f′(" + f(k) + ")</b>?", v, null, "f′(x) = " + poly([2 * a, b]) + ". So f′(" + f(k) + ") = " + f(2 * a) + " × " + p(k) + (b ? plusMinus(b) : "") + " = " + f(v) + "."); },
    function () { var a = nz(-9, 9);
      return num("What is the limit of <b>(x² − " + (a * a) + ") ÷ (x" + plusMinus(-a) + ")</b> as x gets closer and closer to " + f(a) + "?", 2 * a, null, "Factor: x² − " + (a * a) + " = (x" + plusMinus(-a) + ")(x" + plusMinus(a) + "). Cancel, leaving x" + plusMinus(a) + ". Then plug in x = " + f(a) + ": " + f(2 * a) + "."); },
    function () { var a = R(-5, 5), b; do { b = R(-5, 8); } while (b <= a);
      return num("What is the AVERAGE rate of change of f(x) = x² from x = " + f(a) + " to x = " + f(b) + "?", a + b, null, "(f(" + f(b) + ") − f(" + f(a) + ")) ÷ (" + f(b) + " − " + p(a) + ") = (" + (b * b) + " − " + (a * a) + ") ÷ " + (b - a) + " = " + f(a + b) + "."); },
    function () { var b = 2 * R(1, 10);
      return num("f(x) = " + poly([-1, b, 0]) + ". What value of x makes f(x) as BIG as possible?", b / 2, null, "f′(x) = " + poly([-2, b]) + ". Set it to 0: x = " + (b / 2) + ". Since the x² has a minus sign, this is the top of the hill."); },
    function () { var t = R(0, 2), b = R(1, 6);
      if (t === 0) return num("What is the area under the line y = 2x from x = 0 to x = " + b + "?", b * b, null, "The area is a triangle: " + b + " × " + (2 * b) + " ÷ 2 = " + (b * b) + ". (Or: x² from 0 to " + b + " = " + (b * b) + ".)");
      if (t === 1) { var k = R(2, 9), a = R(-3, 3), bb = a + R(1, 6); return num("What is ∫ from " + f(a) + " to " + f(bb) + " of " + k + " dx? (The area of a rectangle!)", k * (bb - a), null, "A rectangle " + (bb - a) + " wide and " + k + " tall: " + k + " × " + (bb - a) + " = " + (k * (bb - a)) + "."); }
      return num("What is ∫ from 0 to " + b + " of 3x² dx?", b * b * b, null, "An antiderivative of 3x² is x³. So " + b + "³ − 0³ = " + (b * b * b) + "."); },
    function () { var a = nz(-4, 4), b = nz(-5, 5), k = R(-3, 3), v = 2 * a * (a * k + b);
      return num("If f(x) = (" + poly([a, b]) + ")², what is <b>f′(" + f(k) + ")</b>?", v, null, "Chain rule: f′(x) = 2(" + poly([a, b]) + ") × " + p(a) + ". At x = " + f(k) + ": 2 × " + p(a * k + b) + " × " + p(a) + " = " + f(v) + "."); }
  ];

  G["complex-analysis"] = [
    function () { var n = R(2, 40), r = ["1", "i", "−1", "−i"][n % 4];
      return ch("What is <b>i" + sup(n) + "</b>?", r, ["1", "i", "−1", "−i"], "The powers of i repeat every 4: i, −1, −i, 1. " + n + " ÷ 4 leaves remainder " + (n % 4) + ", so i" + sup(n) + " = " + r + "."); },
    function () { var a = R(-9, 9), b = nz(-9, 9), c = R(-9, 9), d = nz(-9, 9), s = Math.random() < 0.5 ? 1 : -1;
      return ch("Work it out: <b>(" + cx(a, b) + ") " + (s > 0 ? "+" : "−") + " (" + cx(c, d) + ")</b>", cx(a + s * c, b + s * d), [cx(a - s * c, b + s * d), cx(a + s * c, b - s * d), cx(a + s * d, b + s * c), cx(a + s * c + 1, b + s * d)],
        "Real parts: " + f(a) + (s > 0 ? " + " : " − ") + p(c) + " = " + f(a + s * c) + ". Imaginary parts: " + f(b) + (s > 0 ? " + " : " − ") + p(d) + " = " + f(b + s * d) + ". So the answer is " + cx(a + s * c, b + s * d) + "."); },
    function () { var a = nz(-5, 5), b = nz(-5, 5), c = nz(-5, 5), d = nz(-5, 5), re = a * c - b * d, im = a * d + b * c;
      return ch("Work it out: <b>(" + cx(a, b) + ")(" + cx(c, d) + ")</b>", cx(re, im), [cx(a * c + b * d, im), cx(re, a * d - b * c), cx(a * c, b * d), cx(re, -im)],
        "Four baby multiplications: " + f(a * c) + ", " + cx(0, a * d) + ", " + cx(0, b * c) + " and " + (Math.abs(b * d) === 1 ? (b * d < 0 ? "−" : "") : f(b * d)) + "i². Since i² = −1, the last one is " + f(-b * d) + ". Add the real parts and the i parts: " + cx(re, im) + "."); },
    function () { var t = pick(TRIPLES.slice(0, 5)), sw = Math.random() < 0.5, a = t[sw ? 1 : 0] * pick([1, -1]), b = t[sw ? 0 : 1] * pick([1, -1]);
      return num("What is the length (modulus) of <b>" + cx(a, b) + "</b>?", t[2], null, "|a + bi| = √(a² + b²) = √(" + (a * a) + " + " + (b * b) + ") = √" + (t[2] * t[2]) + " = " + t[2] + "."); },
    function () { var a = nz(-9, 9), b = nz(-9, 9);
      return ch("What is the CONJUGATE of <b>" + cx(a, b) + "</b>?", cx(a, -b), [cx(-a, b), cx(-a, -b), cx(b, a), cx(a + 1, -b), cx(a, b)], "The conjugate is the mirror image: keep the real part, flip the sign of the imaginary part: " + cx(a, -b) + "."); },
    function () { var a = nz(-9, 9), b = nz(-9, 9);
      return ch("Work it out: <b>i × (" + cx(a, b) + ")</b>", cx(-b, a), [cx(b, a), cx(-b, -a), cx(a, -b), cx(-b + 1, a), cx(a, b)], "i × " + p(a) + " = " + cx(0, a) + ", and i × " + (b < 0 ? "(" + cx(0, b) + ")" : cx(0, b)) + " = " + (Math.abs(b) === 1 ? (b < 0 ? "−" : "") : f(b)) + "i² = " + f(-b) + ". Together: " + cx(-b, a) + ". (Multiplying by i turns a point a quarter turn!)"); },
    function () { return ch("Multiplying a number by <b>i</b> does what to its arrow on the complex map?", "Turns it 90° counterclockwise", ["Turns it 180°", "Makes it twice as long", "Flips it upside down"], "Multiplying by i is a quarter turn (90°) counterclockwise, and its length stays the same."); }
  ];

  G["matrix-math"] = [
    function () { var M = [[R(0, 9), R(0, 9), R(0, 9)], [R(0, 9), R(0, 9), R(0, 9)]], r = R(1, 2), c = R(1, 3);
      return num("What is the entry in row " + r + ", column " + c + " of this matrix?" + mat(M), M[r - 1][c - 1], null, "Find row " + r + " (going across), then column " + c + " (going down): " + f(M[r - 1][c - 1]) + "."); },
    function () { var A = [[R(0, 9), R(0, 9)], [R(0, 9), R(0, 9)]], B = [[R(0, 9), R(0, 9)], [R(0, 9), R(0, 9)]], r = R(1, 2), c = R(1, 2);
      return num("Add the matrices. What is the entry in row " + r + ", column " + c + " of A + B?<div class=\"qz-mats\">A =" + mat(A) + "B =" + mat(B) + "</div>", A[r - 1][c - 1] + B[r - 1][c - 1], null, "Add the matching squares: " + f(A[r - 1][c - 1]) + " + " + p(B[r - 1][c - 1]) + " = " + f(A[r - 1][c - 1] + B[r - 1][c - 1]) + "."); },
    function () { var k = R(2, 5), A = [[R(0, 9), R(0, 9)], [R(0, 9), R(0, 9)]], r = R(1, 2), c = R(1, 2);
      return num("Work out " + f(k) + "A. What is the entry in row " + r + ", column " + c + "?<div class=\"qz-mats\">A =" + mat(A) + "</div>", k * A[r - 1][c - 1], null, "Multiply every entry by " + f(k) + ": " + f(k) + " × " + p(A[r - 1][c - 1]) + " = " + f(k * A[r - 1][c - 1]) + "."); },
    function () { var A = [[R(0, 5), R(0, 5)], [R(0, 5), R(0, 5)]], B = [[R(0, 5), R(0, 5)], [R(0, 5), R(0, 5)]], r = R(1, 2), c = R(1, 2);
      var a1 = A[r - 1][0], a2 = A[r - 1][1], b1 = B[0][c - 1], b2 = B[1][c - 1], v = a1 * b1 + a2 * b2;
      return num("Multiply the matrices. What is the entry in row " + r + ", column " + c + " of A × B?<div class=\"qz-mats\">A =" + mat(A) + "B =" + mat(B) + "</div>", v, null,
        "Row " + r + " of A meets column " + c + " of B: " + p(a1) + " × " + p(b1) + " + " + p(a2) + " × " + p(b2) + " = " + f(a1 * b1) + " + " + p(a2 * b2) + " = " + f(v) + "."); },
    function () { var m, n, q; do { m = R(1, 5); n = R(1, 5); q = R(1, 5); } while (new Set([m, n, q]).size < 3);
      return ch("A is a " + m + " × " + n + " matrix and B is a " + n + " × " + q + " matrix. What size is A × B?", m + " × " + q, [n + " × " + n, m + " × " + n, n + " × " + q, q + " × " + m],
        "The inside numbers (" + n + " and " + n + ") match, so they can be multiplied, and the answer takes the OUTSIDE numbers: " + m + " × " + q + "."); },
    function () { var m = R(2, 4), n = R(2, 4), k; do { k = R(2, 4); } while (k === n); var yes = Math.random() < 0.5, bRows = yes ? n : k;
      return ch("Can you multiply a " + m + " × " + n + " matrix A by a " + bRows + " × " + R(2, 4) + " matrix B (A × B)?", YN(yes)[0], [YN(yes)[1]],
        "You can only multiply when A's number of columns (" + n + ") equals B's number of rows (" + bRows + "). " + (yes ? "They match, so yes!" : "They don't match, so no.")); },
    function () { var A = [[R(0, 9), R(0, 9)], [R(0, 9), R(0, 9)]], r = R(1, 2), c = R(1, 2);
      return num("I is the identity matrix [ 1 0 ; 0 1 ]. What is the entry in row " + r + ", column " + c + " of A × I?<div class=\"qz-mats\">A =" + mat(A) + "</div>", A[r - 1][c - 1], null, "The identity matrix is like the number 1 for matrices: A × I = A, so the entry is the same as in A: " + f(A[r - 1][c - 1]) + "."); }
  ];

  G["number-theory"] = (function () {
    var isPrime = function (n) { if (n < 2) return false; for (var d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
    var nFactors = function (n) { var c = 0; for (var d = 1; d <= n; d++) if (n % d === 0) c++; return c; };
    var factorise = function (n) { var out = [], d = 2; while (n > 1) { var e = 0; while (n % d === 0) { n /= d; e++; } if (e) out.push(d + (e > 1 ? sup(e) : "")); d++; } return out.join(" × "); };
    return [
      function () { var g = R(2, 15), x, y; do { x = R(1, 12); y = R(1, 12); } while (gcd(x, y) !== 1 || x === y);
        return num("What is the GCF (greatest common factor) of " + (g * x) + " and " + (g * y) + "?", g, null, "The biggest number that divides both: " + (g * x) + " = " + g + " × " + x + " and " + (g * y) + " = " + g + " × " + y + ", and " + x + " and " + y + " share nothing more. GCF = " + g + "."); },
      function () { var a = R(2, 15), b; do { b = R(2, 15); } while (b === a);
        return num("What is the LCM (least common multiple) of " + a + " and " + b + "?", lcm(a, b), null, "LCM = " + a + " × " + b + " ÷ GCF(" + a + ", " + b + ") = " + (a * b) + " ÷ " + gcd(a, b) + " = " + lcm(a, b) + "."); },
      function () { var n, want = Math.random() < 0.5; do { n = R(2, 120); } while (isPrime(n) !== want || (!want && n % 2 === 0 && Math.random() < 0.6));
        var pr = isPrime(n), d = 2; if (!pr) while (n % d) d++;
        return ch("Is <b>" + n + "</b> a prime number?", YN(pr)[0], [YN(pr)[1]], pr ? (n < 4 ? "Its only factors are 1 and " + n + ", so it is prime." : "No number from 2 up to √" + n + " divides it evenly, so " + n + " is prime.") : n + " = " + d + " × " + (n / d) + ", so it is NOT prime."); },
      function () { var n = R(6, 100);
        return num("How many factors (numbers that divide it evenly, including 1 and itself) does " + n + " have?", nFactors(n), null, "The factors of " + n + " are: " + (function () { var a = []; for (var d = 1; d <= n; d++) if (n % d === 0) a.push(d); return a.join(", "); })() + ". That's " + nFactors(n) + "."); },
      function () { var b = R(3, 12), a = R(b + 1, 150);
        return num("What is the remainder when " + a + " is divided by " + b + "?", a % b, null, a + " = " + b + " × " + Math.floor(a / b) + " + " + (a % b) + ", so the remainder is " + (a % b) + "."); },
      function () { var d = pick([3, 9]), n = R(100, 9999), yes = n % d === 0, s = String(n).split("").reduce(function (x, c) { return x + +c; }, 0);
        if (Math.random() < 0.5) { n = n - (n % d); if (n < 100) n += d; yes = true; s = String(n).split("").reduce(function (x, c) { return x + +c; }, 0); }
        return ch("Is <b>" + n + "</b> divisible by " + d + "?", YN(yes)[0], [YN(yes)[1]], "Add the digits: " + String(n).split("").join(" + ") + " = " + s + ". " + (yes ? s + " is divisible by " + d + ", so yes!" : s + " is not divisible by " + d + ", so no.")); },
      function () { var ps = [2, 3, 5, 7], n = 1, cnt = R(2, 4); for (var i = 0; i < cnt; i++) n *= pick(ps); if (n < 8) n *= pick(ps);
        var right = factorise(n), q = pick(ps.filter(function (x) { return n % x === 0; })), r = pick(ps.filter(function (x) { return x !== q; }));
        var near = shuffle([factorise(n / q * r), factorise(n * q), factorise(n / q), factorise(n / q * r * r)]).filter(function (w) { return w && w !== right; });
        return ch("What is the prime factorization of <b>" + n + "</b>?", right, near, "Keep dividing by primes: " + n + " = " + right + "."); }
    ];
  })();

  G.trigonometry = [
    function () { var t = pick(TRIPLES.slice(0, 4)), k = R(1, 3), o = t[0] * k, a = t[1] * k, h = t[2] * k, fn = pick(["sin", "cos", "tan"]);
      if (Math.random() < 0.5) { var s = o; o = a; a = s; }
      var nn = fn === "sin" ? o : fn === "cos" ? a : o, dd = fn === "tan" ? a : h;
      return num("In a right triangle, angle A has OPPOSITE side " + o + ", ADJACENT side " + a + " and HYPOTENUSE " + h + ". What is <b>" + fn + " A</b>? (Type a fraction.)", nn / dd, fr(nn, dd),
        "SOH CAH TOA: " + fn + " = " + (fn === "sin" ? "opposite ÷ hypotenuse" : fn === "cos" ? "adjacent ÷ hypotenuse" : "opposite ÷ adjacent") + " = " + nn + "/" + dd + (gcd(nn, dd) > 1 ? " = " + fr(nn, dd) : "") + "."); },
    function () { var T = { "sin 30°": "0.5", "sin 45°": "≈ 0.71", "sin 60°": "≈ 0.87", "cos 30°": "≈ 0.87", "cos 45°": "≈ 0.71", "cos 60°": "0.5", "tan 30°": "≈ 0.58", "tan 45°": "1", "tan 60°": "≈ 1.73" };
      var k = pick(Object.keys(T)); return ch("What is <b>" + k + "</b>?", T[k], shuffle(["0.5", "≈ 0.71", "≈ 0.87", "1", "≈ 1.73", "≈ 0.58", "2"]), "This is one of the special angles: " + k + (T[k].charAt(0) === "≈" ? " " : " = ") + T[k] + "."); },
    function () { var t = pick(TRIPLES), k = R(1, 2);
      return num("A right triangle has legs " + (t[0] * k) + " and " + (t[1] * k) + ". How long is the hypotenuse?", t[2] * k, null, "Pythagorean theorem: " + (t[0] * k) + "² + " + (t[1] * k) + "² = " + (t[0] * t[0] * k * k) + " + " + (t[1] * t[1] * k * k) + " = " + (t[2] * t[2] * k * k) + ", and " + (t[2] * k) + "² = " + (t[2] * t[2] * k * k) + ", so the hypotenuse is " + (t[2] * k) + "."); },
    function () { var L = 2 * R(2, 10);
      return num("A " + L + "-meter ladder leans on a wall, making a 30° angle with the ground. How high up the wall does it reach (in meters)?", L / 2, null, "sin 30° = height ÷ ladder, and sin 30° = 1/2. So height = " + L + " × 1/2 = " + (L / 2) + " m."); },
    function () { var s = R(3, 30);
      return num("The Sun is 45° above the horizon, and a tree's shadow is " + s + " m long. How tall is the tree (in metres)?", s, null, "tan 45° = height ÷ shadow, and tan 45° = 1, so the height equals the shadow: " + s + " m."); },
    function () { var a = R(5, 85);
      return num("sin " + a + "° = cos ?° (Type the angle.)", 90 - a, null, "In a right triangle the two small angles add up to 90°, and the sine of one is the cosine of the other: 90 − " + a + " = " + (90 - a) + "."); }
  ];

  G.combinatorics = [
    function () { var a = R(2, 8), b = R(2, 8), c = R(2, 6);
      return num("You have " + a + " shirts, " + b + " pairs of pants and " + c + " hats. How many different outfits (one of each) can you make?", a * b * c, null, "AND means multiply: " + a + " × " + b + " × " + c + " = " + (a * b * c) + "."); },
    function () { var n = R(3, 8); return num("In how many different orders can " + n + " friends stand in a line?", fact(n), big(fact(n)), n + "! = " + Array.from({ length: n }, function (_, i) { return n - i; }).join(" × ") + " = " + big(fact(n)) + "."); },
    function () { var n = R(5, 10), k = R(2, 3); return num("" + n + " runners are in a race. In how many ways can the " + (k === 2 ? "gold and silver" : "gold, silver and bronze") + " medals be given out?", P(n, k), null, "Order matters: " + Array.from({ length: k }, function (_, i) { return n - i; }).join(" × ") + " = " + P(n, k) + "."); },
    function () { var n = R(5, 10), k = R(2, 4); return num("How many different teams of " + k + " can be chosen from " + n + " kids?", C(n, k), null, "In order, there are " + Array.from({ length: k }, function (_, i) { return n - i; }).join(" × ") + " = " + big(P(n, k)) + " ways. But a team doesn't care about order, and each team can be lined up in " + k + "! = " + fact(k) + " ways. So " + big(P(n, k)) + " ÷ " + fact(k) + " = " + C(n, k) + " teams."); },
    function () { var k = R(2, 4); if (Math.random() < 0.5) return num("How many " + k + "-digit codes can you make using the digits 0–9 (repeats allowed)?", Math.pow(10, k), big(Math.pow(10, k)), "10 choices for each of " + k + " digits: 10" + sup(k) + " = " + big(Math.pow(10, k)) + ".");
      return num("How many " + k + "-digit codes (digits 0–9, repeats allowed) have AT LEAST ONE 7?", Math.pow(10, k) - Math.pow(9, k), big(Math.pow(10, k) - Math.pow(9, k)), "Count the opposite! All codes: 10" + sup(k) + " = " + big(Math.pow(10, k)) + ". Codes with NO 7: 9" + sup(k) + " = " + big(Math.pow(9, k)) + ". Subtract: " + big(Math.pow(10, k) - Math.pow(9, k)) + "."); },
    function () { var n = R(4, 15); return num("" + n + " people meet, and everyone shakes hands with everyone else once. How many handshakes is that?", C(n, 2), null, "Each handshake is a pair of people: C(" + n + ", 2) = " + n + " × " + (n - 1) + " ÷ 2 = " + C(n, 2) + "."); },
    function () { var n = R(4, 7); return num("" + n + " friends (Sam is one of them) line up for a photo, and Sam MUST stand at the front. How many line-ups are possible?", fact(n - 1), big(fact(n - 1)), "Sam's spot is fixed, so arrange the other " + (n - 1) + ": " + (n - 1) + "! = " + big(fact(n - 1)) + "."); }
  ];

  G["permutations-vs-combinations"] = (function () {
    var S = [["picking a president and a vice-president from the class", true], ["choosing 3 friends to come to a sleepover", false], ["setting a 4-digit lock code with no repeated digits", true],
      ["picking 2 pizza toppings", false], ["giving out gold, silver and bronze medals", true], ["choosing a team of 5 players", false], ["arranging 6 books on a shelf", true],
      ["choosing 2 flavors for a cup of ice cream", false], ["deciding the order of 4 songs on a playlist", true], ["choosing 3 cards from a deck to make a hand", false]];
    var PM = "Permutation (order matters)", CM = "Combination (order doesn't matter)";
    return [
      function () { var s = pick(S); return ch("Is this a permutation or a combination? <b>" + s[0][0].toUpperCase() + s[0].slice(1) + "</b>", s[1] ? PM : CM, [s[1] ? CM : PM],
        s[1] ? "Swapping the order makes a DIFFERENT result here, so order matters: permutation." : "Swapping the order gives the SAME result here, so order doesn't matter: combination."); },
      function () { var n = R(4, 10), k = R(2, 3); return num("Work out <b>P(" + n + ", " + k + ")</b>.", P(n, k), null, "P(" + n + ", " + k + ") = " + Array.from({ length: k }, function (_, i) { return n - i; }).join(" × ") + " = " + P(n, k) + "."); },
      function () { var n = R(5, 10), k = R(2, 4); return num("Work out <b>C(" + n + ", " + k + ")</b>.", C(n, k), null, "C(" + n + ", " + k + ") = P(" + n + ", " + k + ") ÷ " + k + "! = " + P(n, k) + " ÷ " + fact(k) + " = " + C(n, k) + "."); },
      function () { var n = R(3, 7); return num("Work out <b>" + n + "!</b>", fact(n), big(fact(n)), Array.from({ length: n }, function (_, i) { return n - i; }).join(" × ") + " = " + big(fact(n)) + "."); },
      function () { var n = R(5, 9), k = R(2, 4);
        return num("There are P(" + n + ", " + k + ") = " + P(n, k) + " ways to pick " + k + " kids IN ORDER from " + n + " kids. Each team of " + k + " can be put in order in " + k + "! = " + fact(k) + " ways. So how many TEAMS of " + k + " can be chosen from " + n + " kids?", C(n, k), null, "Divide out the orders: " + P(n, k) + " ÷ " + fact(k) + " = " + C(n, k) + "."); },
      function () { var w = pick(["MATH", "CAT", "DOG", "STAR", "PLANET", "BRICK", "QUIZ", "FROG", "LUNCH"]);
        return num("How many different ways can you arrange ALL the letters of the word <b>" + w + "</b>?", fact(w.length), big(fact(w.length)), "All " + w.length + " letters are different, so " + w.length + "! = " + big(fact(w.length)) + "."); }
    ];
  })();

  G.probability = [
    function () { var E = pick([["an even number", [2, 4, 6]], ["a number greater than 4", [5, 6]], ["a number greater than 2", [3, 4, 5, 6]], ["a multiple of 3", [3, 6]], ["a prime number", [2, 3, 5]], ["a number less than 5", [1, 2, 3, 4]], ["a 6", [6]]]);
      return num("You roll a normal 6-sided die. What is the probability of rolling " + E[0] + "? (Type a fraction.)", E[1].length / 6, fr(E[1].length, 6), "The good results are " + E[1].join(", ") + ": that's " + E[1].length + " out of 6 = " + fr(E[1].length, 6) + "."); },
    function () { var r = R(1, 9);
      return num("The chance of rain tomorrow is " + r + "/10. What is the chance it does NOT rain? (Type a fraction or decimal.)", 1 - r / 10, fr(10 - r, 10), "The chances of \"rain\" and \"no rain\" add up to 1: 1 − " + r + "/10 = " + fr(10 - r, 10) + "."); },
    function () { var r = R(1, 9), b = R(1, 9), g = R(0, 6), c = pick([["red", r], ["blue", b]]), t = r + b + g;
      return num("A bag has " + r + " red" + (g ? ", " + b + " blue and " + g + " green" : " and " + b + " blue") + " marbles. You pick one without looking. What is the probability it's " + c[0] + "? (Type a fraction.)", c[1] / t, fr(c[1], t), c[1] + " " + c[0] + " out of " + t + " marbles: " + c[1] + "/" + t + (gcd(c[1], t) > 1 ? " = " + fr(c[1], t) : "") + "."); },
    function () { var n = R(2, 4), t = pick(["coins", "die"]);
      if (t === "coins") return num("You flip " + n + " coins. What is the probability they ALL land heads? (Type a fraction.)", 1 / Math.pow(2, n), "1/" + Math.pow(2, n), "Each coin is 1/2, and AND means multiply: (1/2)" + sup(n) + " = 1/" + Math.pow(2, n) + ".");
      return num("You flip a coin AND roll a die. What is the probability of heads AND a " + R(1, 6) + "? (Type a fraction.)", 1 / 12, "1/12", "1/2 × 1/6 = 1/12. AND means multiply when the two things don't affect each other."); },
    function () { var r = R(2, 6), b = R(1, 6), t = r + b;
      return num("A bag has " + r + " red and " + b + " blue marbles. You take out 2 marbles, one after the other, WITHOUT putting the first back. What is the probability both are red? (Type a fraction.)", r * (r - 1) / (t * (t - 1)), fr(r * (r - 1), t * (t - 1)),
        "First red: " + r + "/" + t + ". Then " + (r - 1) + " red " + (r - 1 === 1 ? "is" : "are") + " left out of " + (t - 1) + ": " + (r - 1) + "/" + (t - 1) + ". Multiply: " + (r * (r - 1)) + "/" + (t * (t - 1)) + " = " + fr(r * (r - 1), t * (t - 1)) + "."); },
    function () { var x = 6 * R(1, 8);
      return num("A game: roll a die. If you roll a 6 you win " + x + " points; otherwise you win 0. What is the EXPECTED number of points per roll?", x / 6, null, "Expected value = " + x + " × 1/6 + 0 × 5/6 = " + (x / 6) + "."); },
    function () { var A = pick([["even", [2, 4, 6]], ["odd", [1, 3, 5]]]), k = R(2, 4), B = [], u = [];
      for (var i = k + 1; i <= 6; i++) B.push(i);
      [1, 2, 3, 4, 5, 6].forEach(function (v) { if (A[1].indexOf(v) >= 0 || B.indexOf(v) >= 0) u.push(v); });
      return num("You roll a die. What is the probability of rolling a number that is " + A[0] + " OR greater than " + k + "? (Type a fraction.)", u.length / 6, fr(u.length, 6), "List the numbers that work (count each only once!): " + u.join(", ") + ". That's " + u.length + " out of 6 = " + fr(u.length, 6) + "."); },
    function () { var n = 6 * R(2, 20);
      return num("You roll a die " + n + " times. About how many times do you EXPECT to roll a " + R(1, 6) + "?", n / 6, null, "Each number has a 1/6 chance: " + n + " × 1/6 = " + (n / 6) + "."); }
  ];

  /* MAKERS:END */

  // ---------- checking typed answers ----------
  function parse(s) {
    s = String(s).trim().toLowerCase().replace(/[−–—]/g, "-").replace(/\s+/g, " ").replace(/^[a-z]\s*=\s*/, "").replace(/^([-+])\s+/, "$1").replace(/½/g, " 1/2").replace(/¼/g, " 1/4").replace(/¾/g, " 3/4").replace(/⅓/g, " 1/3").replace(/⅔/g, " 2/3").trim().replace(/\s+/g, " ")
      .replace(/(\d),(?=\d{3}(\D|$))/g, "$1").replace(/\s*(π|pi|°|º|degrees?|mg|m|metres?|meters?)$/, "").trim();
    var m;
    if ((m = s.match(/^(-?)(\d+) (\d+)\s*\/\s*(\d+)$/)) && +m[4] !== 0) { var v = +m[2] + +m[3] / +m[4]; return { v: m[1] ? -v : v, mixed: [+m[3], +m[4]] }; }
    if ((m = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/))) { if (+m[2] === 0) return null; return { v: +m[1] / +m[2], fr: [+m[1], +m[2]] }; }
    if (/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s)) return { v: +s };
    return null;
  }
  function grade(q, val) {
    if (q.kind === "choice") return val === q.ans ? "right" : "wrong";
    var x = parse(val); if (!x) return "wrong";
    var tol = q.tol != null ? q.tol : 1e-9 * Math.max(1, Math.abs(q.ans));
    if (Math.abs(x.v - q.ans) > tol) return "wrong";
    if (q.lowest && x.fr && Number.isInteger(x.fr[0]) && Number.isInteger(x.fr[1]) && (gcd(x.fr[0], x.fr[1]) !== 1 || Math.abs(x.fr[1]) === 1)) return "simplify";
    if (q.lowest && x.mixed && (gcd(x.mixed[0], x.mixed[1]) !== 1 || x.mixed[0] >= x.mixed[1])) return "simplify";
    return "right";
  }

  // ---------- the quiz on the page ----------
  var N = 10; // questions per quiz
  function makeQuiz(gens) {
    var qs = [], seen = {}, order = [], guard = 0;
    while (qs.length < N && guard++ < 400) {
      if (!order.length) order = shuffle(gens.map(function (_, i) { return i; }));
      var q; try { q = gens[order.pop()](); } catch (e) { continue; }
      if (!q || seen[q.q]) continue;
      seen[q.q] = 1; qs.push(q);
    }
    return qs;
  }

  // Adult questions sometimes write powers/indices as x^(…), x^y, a_{…}, a_ij: show them as real super/subscripts.
  var NICE = function (h) {
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
  function niceMath(h) { return NICE(String(h)).replace(/(^|[\s(=,:])-(\d)/g, "$1−$2"); }

  function start() {
    var box = document.getElementById("quiz"); if (!box) return;
    var topic = box.getAttribute("data-topic"), gens = G[topic];
    if (!gens) { box.innerHTML = "<p>This quiz is coming soon.</p>"; return; }
    var ADULT = box.getAttribute("data-mode") === "adult";
    // wording for the two modes
    var W = ADULT ? {
      best: "Best score so far: ", tip: "Enter integers, decimals or fractions, e.g. <b>12</b>, <b>-5</b>, <b>0.75</b>, <b>3/4</b>.",
      submit: "Submit", blank: function (n) { return n + " question" + (n > 1 ? "s are" : " is") + " unanswered. Press Submit again to submit anyway."; },
      right: "Correct.", left: "Not answered.", simplify: "Correct value, but not fully simplified.", wrong: "Incorrect.", answer: "Answer: ", why: "",
      score: function (s) { return "Score: <strong>" + s + " / " + N + "</strong>"; },
      msg: function (p) { return p === 1 ? "All answers correct." : p >= 0.7 ? "Review the solutions to the questions you missed." : "Review the relevant lessons, then attempt a new assessment."; },
      again: "New assessment"
    } : {
      best: "⭐ Your best score so far: ", tip: "💡 Type whole numbers like <b>12</b>, negatives like <b>-5</b> and fractions like <b>3/4</b>.",
      submit: "📝 Submit my quiz", blank: function (n) { return "✋ You left " + n + " question" + (n > 1 ? "s" : "") + " blank. Press Submit again to hand it in anyway, or fill " + (n > 1 ? "them" : "it") + " in first."; },
      right: "✅ Correct!", left: "⬜ Left blank.", simplify: "🟡 Right value, but simplify it all the way!", wrong: "❌ Not quite.", answer: "The answer is ", why: "💭 ",
      score: function (s) { return "You got <strong>" + s + " out of " + N + "</strong>!"; },
      msg: function (p) { return p === 1 ? "🏆 PERFECT SCORE! You're a math superstar!" : p >= 0.8 ? "🌟 Awesome work!" : p >= 0.6 ? "👍 Nice job! Check the ones you missed below." : p >= 0.4 ? "💪 Good try! Read the explanations, then try a new quiz." : "📚 Keep going! Look back at the lessons, then try a brand-new quiz."; },
      again: "🔄 Try a brand-new quiz"
    };
    var KEY = "quizBest." + (ADULT ? "adult." : "") + topic, qs, answers, warned;

    function best() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

    function render() {
      qs = makeQuiz(gens); answers = []; warned = false;
      var b = best();
      var html = (b ? '<p class="qz-best">' + W.best + '<strong>' + b + "/" + N + "</strong></p>" : "") +
        '<p class="qz-tip">' + W.tip + '</p><ol class="qz-list">';
      qs.forEach(function (q, i) {
        html += '<li class="qz-q" id="qz-' + i + '"><p class="qz-num">Question ' + (i + 1) + ' of ' + N + '</p><div class="qz-text">' + (ADULT ? niceMath(q.q) : q.q) + "</div>";
        if (q.kind === "num") html += '<label class="qz-label">' + (ADULT ? "Answer:" : "Your answer:") + ' <input class="qz-in" type="text" aria-label="' + (ADULT ? "Answer" : "Your answer") + ' to question ' + (i + 1) + '" autocomplete="off" autocapitalize="off" spellcheck="false" data-i="' + i + '"></label>';
        else html += '<div class="qz-opts" role="radiogroup" aria-label="Choices for question ' + (i + 1) + '">' + q.opts.map(function (o, j) {
          return '<label class="qz-opt"><input type="radio" name="qz-' + i + '" value="' + j + '" data-i="' + i + '"> <span>' + (ADULT ? niceMath(o) : o) + "</span></label>"; }).join("") + "</div>";
        html += '<div class="qz-result" hidden></div></li>';
      });
      html += '</ol><p class="qz-warn" role="alert" hidden></p><div class="qz-actions"><button type="button" class="btn qz-submit">' + W.submit + '</button></div><div class="qz-score" aria-live="polite" hidden></div>';
      box.innerHTML = html;
      box.querySelector(".qz-submit").addEventListener("click", submit);
      box.querySelectorAll(".qz-in").forEach(function (inp) { inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); var n = box.querySelector("#qz-" + (+inp.dataset.i + 1) + " input"); if (n) n.focus(); } }); });
    }

    function read() {
      return qs.map(function (q, i) {
        if (q.kind === "num") { var v = box.querySelector('.qz-in[data-i="' + i + '"]').value; return v.trim() ? v : null; }
        var c = box.querySelector('input[name="qz-' + i + '"]:checked'); return c ? +c.value : null;
      });
    }

    function submit() {
      answers = read();
      var blank = answers.filter(function (a) { return a === null; }).length, warn = box.querySelector(".qz-warn");
      if (blank && !warned) {
        warned = true; warn.hidden = false;
        warn.textContent = W.blank(blank);
        var first = answers.indexOf(null); var el = box.querySelector("#qz-" + first); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      warn.hidden = true;
      var score = 0;
      qs.forEach(function (q, i) {
        var g = answers[i] === null ? "blank" : grade(q, answers[i]), li = box.querySelector("#qz-" + i), res = li.querySelector(".qz-result");
        if (g === "right") score++;
        li.classList.add(g === "right" ? "qz-right" : "qz-wrong");
        li.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
        if (q.kind === "choice") li.querySelectorAll(".qz-opt").forEach(function (lab, j) { if (j === q.ans) lab.classList.add("qz-correct-opt"); });
        res.hidden = false;
        res.innerHTML = (g === "right" ? "<p><strong>" + W.right + "</strong></p>" : "<p><strong>" + (g === "blank" ? W.left : g === "simplify" ? W.simplify : W.wrong) + "</strong> " + W.answer + "<strong>" + (ADULT ? niceMath(q.show) : q.show) + "</strong>.</p>") +
          '<p class="qz-why">' + W.why + (ADULT ? niceMath(q.why) : q.why) + "</p>";
      });
      try { var b = +best() || 0; if (score > b) localStorage.setItem(KEY, String(score)); } catch (e) { /* fine */ }
      var pct = score / N, msg = W.msg(pct);
      var sc = box.querySelector(".qz-score"); sc.hidden = false;
      sc.innerHTML = '<p class="qz-big">' + W.score(score) + "</p><p>" + msg + '</p><button type="button" class="btn qz-again">' + W.again + '</button>';
      box.querySelector(".qz-actions").hidden = true;
      sc.querySelector(".qz-again").addEventListener("click", function () { render(); box.scrollIntoView({ behavior: "smooth", block: "start" }); });
      var top = box.querySelector(".qz-score"); box.insertBefore(top, box.firstChild); top.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    render();
  }

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    window.MathQuiz = { G: G, grade: grade, parse: parse, makeQuiz: makeQuiz };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
  } else if (typeof module !== "undefined") {
    module.exports = { G: G, grade: grade, parse: parse, makeQuiz: makeQuiz, niceMath: niceMath };
  }
})();
