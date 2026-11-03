  // Adult (graduate-level) makers for Logic
  // random propositional formulas: { s: text, f: function(valuation array) -> 0/1, d: depth }
  var LO_AT = ["p", "q", "r"];
  var LO_OPS = [
    { t: "∧", f: function (a, b) { return a & b; } },
    { t: "∨", f: function (a, b) { return a | b; } },
    { t: "→", f: function (a, b) { return (1 - a) | b; } },
    { t: "↔", f: function (a, b) { return a === b ? 1 : 0; } },
    { t: "⊕", f: function (a, b) { return a ^ b; } }
  ];
  function loForm(n, depth) {
    if (depth === 0 || Math.random() < 0.15) { var i = R(0, n - 1); return { s: LO_AT[i], f: function (v) { return v[i]; }, top: false }; }
    if (Math.random() < 0.2) { var g = loForm(n, depth - 1); return { s: "¬" + (g.top ? "(" + g.s + ")" : g.s), f: function (v) { return 1 - g.f(v); }, top: false }; }
    var o = pick(LO_OPS), a = loForm(n, depth - 1), b = loForm(n, depth - 1);
    return { s: (a.top ? "(" + a.s + ")" : a.s) + " " + o.t + " " + (b.top ? "(" + b.s + ")" : b.s), f: function (v) { return o.f(a.f(v), b.f(v)); }, top: true };
  }
  function loVals(n) { var out = [], k, i; for (k = 0; k < (1 << n); k++) { var v = []; for (i = 0; i < n; i++) v.push((k >> (n - 1 - i)) & 1); out.push(v); } return out; }
  var loTup = function (v) { return "(" + v.join(", ") + ")"; };
  // ordinals below ω² written ω·a + b
  var loOrd = function (o) { var a = o[0], b = o[1]; if (a === 0) return String(b); var s = a === 1 ? "ω" : "ω · " + a; return b ? s + " + " + b : s; };
  var loAdd = function (x, y) { return y[0] > 0 ? [x[0] + y[0], y[1]] : [x[0], x[1] + y[1]]; };
  // hereditary base-b notation and the Goodstein bump
  function loHer(n, b) {
    var parts = [], e = 0, m = n;
    while (m > 0) { var d = m % b; if (d) { var pw = e === 0 ? "1" : (e === 1 ? String(b) : b + "<sup>" + loHer(e, b) + "</sup>"); parts.unshift(e === 0 ? String(d) : (d === 1 ? pw : d + "·" + pw)); } m = Math.floor(m / b); e++; }
    return parts.length ? parts.join(" + ") : "0";
  }
  function loBump(n, b) { var r = 0, e = 0, m = n; while (m > 0) { var d = m % b; if (d) r += d * Math.pow(b + 1, loBump(e, b)); m = Math.floor(m / b); e++; } return r; }

  G["logic"] = [
    // 1. counting Boolean functions in Post's classes
    function () { var n = R(2, 4), k = pick(["sd", "aff", "p0", "p01", "all"]), N = Math.pow(2, n), ans, why;
      var name = { sd: "self-dual", aff: "affine (of the form a₀ ⊕ a₁x₁ ⊕ … ⊕ aₙxₙ over 𝔽₂)", p0: "0-preserving (F(0, …, 0) = 0)", p01: "both 0-preserving and 1-preserving", all: "Boolean" }[k];
      if (k === "sd") { ans = Math.pow(2, N / 2); why = "The " + N + " points of {0, 1}" + sup(n) + " split into " + (N / 2) + " complementary pairs {a, ā}; a self-dual F takes the values 0 and 1 on each pair in one of 2 ways, so there are 2" + sup(N / 2) + " = " + big(ans) + "."; }
      else if (k === "aff") { ans = Math.pow(2, n + 1); why = "An affine function is fixed by its n + 1 = " + (n + 1) + " coefficients a₀, …, a" + sub(n) + " ∈ {0, 1}, and different coefficients give different functions, so there are 2" + sup(n + 1) + " = " + ans + "."; }
      else if (k === "p0") { ans = Math.pow(2, N - 1); why = "The value at (0, …, 0) is fixed to 0 and the other " + (N - 1) + " values are free: 2" + sup(N - 1) + " = " + big(ans) + "."; }
      else if (k === "p01") { ans = Math.pow(2, N - 2); why = "The values at the all-0 and all-1 points are fixed and the other " + (N - 2) + " are free: 2" + sup(N - 2) + " = " + big(ans) + "."; }
      else { ans = Math.pow(2, N); why = "Each of the 2" + sup(n) + " = " + N + " points can be sent to 0 or 1: 2" + sup(N) + " = " + big(ans) + "."; }
      return num(k === "p01" ? "How many functions {0, 1}" + sup(n) + " → {0, 1} are both 0-preserving and 1-preserving?" : "How many " + name + " functions {0, 1}" + sup(n) + " → {0, 1} are there?", ans, big(ans), why); },
    // 2. models of a random formula, full DNF / full CNF sizes
    function () { var F, vs = loVals(3), sat, guard = 0;
      do { F = loForm(3, 3); sat = vs.filter(function (v) { return F.f(v) === 1; }); } while ((!F.top || sat.length === 0 || sat.length === 8 || !/p/.test(F.s) || !/q/.test(F.s) || !/r/.test(F.s)) && guard++ < 5000);
      var ask = pick(["models", "dnf", "cnf"]), k = sat.length, ans = ask === "cnf" ? 8 - k : k;
      var qs = { models: "How many of the 8 valuations of (p, q, r) satisfy", dnf: "How many terms (minterms) does the full disjunctive normal form of the following formula have:", cnf: "How many clauses does the full conjunctive normal form of the following formula have:" }[ask];
      return num(qs + " <b>" + F.s + "</b>?", ans, null,
        "Evaluating at all 8 valuations, the formula is true exactly at (p, q, r) = " + sat.map(loTup).join(", ") + ", i.e. at " + k + " valuations. " +
        (ask === "models" ? "So the answer is " + k + "." : ask === "dnf" ? "The full DNF has one minterm per satisfying valuation: " + k + "." : "The full CNF has one clause per falsifying valuation: 8 − " + k + " = " + (8 - k) + ".")); },
    // 3. classify a formula: tautology / contingent / contradiction
    function () { var F, vs = loVals(2), useT = Math.random() < 0.4;
      if (useT) {
        var L = function () { var i = R(0, 1), neg = Math.random() < 0.4; return { s: (neg ? "¬" : "") + LO_AT[i], f: function (v) { return neg ? 1 - v[i] : v[i]; } }; };
        var A = L(), B = L(), T = pick([
          { s: "((" + A.s + " → " + B.s + ") → " + A.s + ") → " + A.s, f: function (v) { var a = A.f(v), b = B.f(v), x = (1 - a) | b; return (1 - ((1 - x) | a)) | a; } },
          { s: "(" + A.s + " → " + B.s + ") ∨ (" + B.s + " → " + A.s + ")", f: function (v) { var a = A.f(v), b = B.f(v); return ((1 - a) | b) | ((1 - b) | a); } },
          { s: "(" + A.s + " → " + B.s + ") → (" + B.s + " → " + A.s + ")", f: function (v) { var a = A.f(v), b = B.f(v); return (1 - ((1 - a) | b)) | ((1 - b) | a); } },
          { s: A.s + " ∧ (" + A.s + " → " + B.s + ") ∧ ¬" + B.s, f: function (v) { var a = A.f(v), b = B.f(v); return a & ((1 - a) | b) & (1 - b); } },
          { s: "(" + A.s + " ∨ " + B.s + ") ∧ (" + A.s + " → " + B.s + ")", f: function (v) { var a = A.f(v), b = B.f(v); return (a | b) & ((1 - a) | b); } }]);
        F = T;
      } else { do { F = loForm(2, 3); } while (!F.top); }
      var vals = vs.map(function (v) { return F.f(v); }), k = vals.filter(function (x) { return x === 1; }).length;
      var c = k === 4 ? "A tautology" : k === 0 ? "Unsatisfiable (a contradiction)" : "Satisfiable but not a tautology";
      var fals = vs.filter(function (v) { return F.f(v) === 0; }), tru = vs.filter(function (v) { return F.f(v) === 1; });
      var w = "Checking the 4 valuations of (p, q): " + (tru.length ? "true at " + tru.map(loTup).join(", ") : "true nowhere") + (fals.length ? "; false at " + fals.map(loTup).join(", ") : "; false nowhere") + ". So it is " + c.toLowerCase() + ".";
      return ch("Classify the formula <b>" + F.s + "</b>.", c, ["A tautology", "Unsatisfiable (a contradiction)", "Satisfiable but not a tautology"].filter(function (x) { return x !== c; }), w); },
    // 4. the clause-splitting reduction SAT ≤ 3-SAT
    function () { var m = R(3, 5), ks = [], i, nv = 0, nc = 0; for (i = 0; i < m; i++) ks.push(R(1, 9));
      if (ks.every(function (k) { return k <= 3; })) ks[0] = R(4, 9);
      ks.forEach(function (k) { if (k >= 4) { nv += k - 3; nc += k - 2; } else nc += 1; });
      var askV = Math.random() < 0.5;
      return num("A CNF has " + m + " clauses of lengths <b>" + ks.join(", ") + "</b>. Clauses of length ≤ 3 are kept; each clause (ℓ₁ ∨ … ∨ ℓₖ) with k ≥ 4 is replaced by the chain (ℓ₁ ∨ ℓ₂ ∨ y₁) ∧ (¬y₁ ∨ ℓ₃ ∨ y₂) ∧ … ∧ (¬y ∨ ℓₖ₋₁ ∨ ℓₖ) with fresh variables. How many " + (askV ? "new variables are introduced" : "clauses does the resulting formula have") + "?", askV ? nv : nc, null,
        "A clause of length k ≥ 4 needs k − 3 new variables and becomes k − 2 clauses. " + ks.map(function (k) { return k >= 4 ? "k = " + k + ": " + (k - 3) + " new, " + (k - 2) + " clauses" : "k = " + k + ": kept, 1 clause"; }).join("; ") + ". Total: " + nv + " new variables and " + nc + " clauses."); },
    // 5. Gödel numbering by prime powers
    function () { var a = [R(0, 4), R(0, 4), R(0, 4)], code = Math.pow(2, a[0] + 1) * Math.pow(3, a[1] + 1) * Math.pow(5, a[2] + 1);
      if (Math.random() < 0.5) return num("Sequences are coded by (a₁, a₂, a₃) ↦ 2<sup>a₁+1</sup> · 3<sup>a₂+1</sup> · 5<sup>a₃+1</sup>. What is the code of <b>(" + a.join(", ") + ")</b>?", code, big(code),
        "2" + sup(a[0] + 1) + " · 3" + sup(a[1] + 1) + " · 5" + sup(a[2] + 1) + " = " + Math.pow(2, a[0] + 1) + " · " + Math.pow(3, a[1] + 1) + " · " + Math.pow(5, a[2] + 1) + " = " + big(code) + ".");
      var j = R(0, 2);
      return num("Sequences are coded by (a₁, a₂, a₃) ↦ 2<sup>a₁+1</sup> · 3<sup>a₂+1</sup> · 5<sup>a₃+1</sup>. The number <b>" + big(code) + "</b> codes a sequence. What is <b>a" + sub(j + 1) + "</b>?", a[j], null,
        "Factor: " + big(code) + " = 2" + sup(a[0] + 1) + " · 3" + sup(a[1] + 1) + " · 5" + sup(a[2] + 1) + ", so the sequence is (" + a.join(", ") + ") and a" + sub(j + 1) + " = " + a[j] + ". Unique factorisation makes the decoding unambiguous."); },
    // 6. ordinal arithmetic below ω²
    function () { var x = [R(0, 3), R(0, 6)], y = [R(1, 3), R(0, 6)], guard = 0;
      while ((x[0] === 0 && x[1] === 0) && guard++ < 50) x = [R(0, 3), R(0, 6)];
      var terms = [], s = loAdd(x, y), r = loAdd(y, x), naive = [x[0] + y[0], x[1] + y[1]];
      if (x[0]) terms.push(loOrd([x[0], 0])); if (x[1]) terms.push(String(x[1])); terms.push(loOrd([y[0], 0])); if (y[1]) terms.push(String(y[1]));
      var wrong = [loOrd(r), loOrd(naive), loOrd([s[0] + 1, s[1]]), loOrd([s[0], s[1] + 1]), loOrd([Math.max(1, s[0] - 1), s[1]])].filter(function (t) { return t !== loOrd(s); });
      return ch("Compute the ordinal sum <b>(" + loOrd(x) + ") + (" + loOrd(y) + ")</b>.", loOrd(s), wrong,
        "Write the sum as " + terms.join(" + ") + ". " + (x[1] ? "Since n + ω = ω for every finite n, the finite part " + x[1] + " is absorbed by the following " + loOrd([y[0], 0]) + ", " : "Nothing needs to be absorbed, ") + "so the sum is " + loOrd(s) + ". (In the other order the sum is " + loOrd(r) + ": ordinal addition is not commutative.)"); },
    // 7. which class is first-order axiomatisable?
    function () {
      var good = ["infinite sets", "groups of exponent " + R(2, 9), "fields of characteristic " + pick([2, 3, 5, 7, 11, 13]), "dense linear orders without endpoints", "fields of characteristic 0", "algebraically closed fields", "divisible torsion-free abelian groups", "graphs in which every vertex has degree at most " + R(2, 6)];
      var bad = ["finite sets", "torsion groups", "connected graphs", "well-orders", "finite groups", "Archimedean ordered fields", "structures isomorphic to (ℕ, 0, S, +, ·)", "graphs of finite diameter"];
      var c = pick(good), w = shuffle(bad).slice(0, 3);
      if (Math.random() < 0.4) { var cb = pick(bad), wg = shuffle(good).slice(0, 3);
        return ch("Exactly one of these classes of structures is NOT axiomatisable by any set of first-order sentences. Which?", cb, wg,
          "The class of " + cb + " is not axiomatisable: by compactness, add new constants and sentences violating the property one finite piece at a time; every finite subset is satisfiable inside the class, so a model of everything satisfies the putative axioms but lies outside the class. The other three classes are axiomatised by explicit first-order sentences."); }
      return ch("Exactly one of these classes of structures is axiomatisable by a set of first-order sentences. Which?", c, w,
        "The class of " + c + " is axiomatised by explicit first-order sentences (for infinite sets or characteristic 0, by an infinite list). Each of the others fails by compactness: adding new constants and the sentences that would break the property, every finite subset is satisfiable, so a structure outside the class would satisfy the axioms. For example finite sets: add λₙ (at least n elements) for all n; torsion groups: add cⁿ ≠ e; well-orders: add cₙ₊₁ &lt; cₙ."); },
    // 8. which theory is ℵ₀-categorical?
    function () {
      var good = ["DLO (dense linear orders without endpoints)", "the theory of infinite sets (empty language)", "the theory of the random graph", "the theory of atomless Boolean algebras", "the theory of infinite vector spaces over 𝔽" + sub(pick([2, 3, 5, 7]))];
      var bad = ["ACF" + sub(0) + " (algebraically closed fields of characteristic 0)", "Th(ℤ, &lt;)", "Th(ℕ, 0, S, +, ·)", "the theory of real closed fields", "divisible torsion-free abelian groups", "Th(ℤ, +)"].map(function (t) { return t === "divisible torsion-free abelian groups" ? "nontrivial divisible torsion-free abelian groups" : t; });
      var c = pick(good), w = shuffle(bad).slice(0, 3);
      if (Math.random() < 0.4) { var cb = pick(bad), wg = shuffle(good).slice(0, 3);
        return ch("Exactly one of these complete theories is NOT ℵ₀-categorical. Which?", cb, wg,
          "The theories " + wg.join("; ") + " are ℵ₀-categorical by back-and-forth arguments. " + cb + " has non-isomorphic countable models (for ACF₀ different transcendence degrees, for divisible torsion-free groups ℚ vs ℚ², for Th(ℤ, &lt;) ℤ vs ℤ + ℤ, for Th(ℤ, +), arithmetic and RCF countable non-standard models)."); }
      return ch("Exactly one of these complete theories is ℵ₀-categorical (all its countable models are isomorphic). Which?", c, w,
        "For " + c + ", a back-and-forth argument shows any two countable models are isomorphic. The others have non-isomorphic countable models: ACF₀ by transcendence degree (the algebraic closures of ℚ and of ℚ(t)), divisible torsion-free groups by dimension over ℚ (ℚ vs ℚ²), Th(ℤ, &lt;) has ℤ and ℤ + ℤ, Th(ℤ, +), true arithmetic and RCF have countable models that are not isomorphic to the standard one. (Ryll-Nardzewski: a complete countable theory is ℵ₀-categorical iff it has only finitely many n-types for each n.)"); },
    // 9. which set is computable?
    function () { var n = R(5, 40), m = R(2, 30);
      var good = ["{e : the machine with code e has at most " + n + " states}", "{e : φₑ(0) halts within " + n + " steps}", "{e : φₑ(" + m + ") halts within e² steps}", "{(e, k) : the machine with code e makes at most " + n + " moves on input k}"];
      var bad = ["{e : φₑ is total}", "{e : φₑ(" + m + ") is defined}", "{e : φₑ(" + m + ") = " + n + "}", "{e : the domain of φₑ is finite}", "{e : φₑ is the constant function 0}", "{e : φₑ(e) is defined}"];
      var c = pick(good), w = shuffle(bad).slice(0, 3);
      if (Math.random() < 0.4) { var cb = pick(bad), wg = shuffle(good).slice(0, 3);
        return ch("Exactly one of these sets of indices is NOT computable. Which?", cb, wg,
          "The set " + cb + " is an index set of a nontrivial property of φₑ (or the halting set K itself), so it is undecidable by Rice's theorem or Turing's theorem. The other three are decided by a syntactic check or a simulation for a bounded number of steps, which always terminates."); }
      return ch("Exactly one of these sets of indices is computable. Which?", c, w,
        "The set " + c + " is decided by decoding e and simulating for a bounded number of steps (or by a syntactic check), which always terminates. The other sets are index sets of nontrivial properties of the partial function φₑ (or the halting set K itself), so they are undecidable by Rice's theorem."); },
    // 10. Gödel's β-function
    function () { var c = R(20, 400), d = R(2, 12), i = R(0, 4), mod = 1 + (i + 1) * d, ans = c % mod;
      return num("Gödel's β-function is β(c, d, i) = c mod (1 + (i + 1)d). Compute <b>β(" + c + ", " + d + ", " + i + ")</b>.", ans, null,
        "1 + (" + i + " + 1) · " + d + " = " + mod + ", and " + c + " = " + Math.floor(c / mod) + " · " + mod + " + " + ans + ", so β = " + ans + "."); },
    // 11. Goodstein sequences
    function () { var m = R(4, 9), k = R(2, 3), g = m, b = 2, steps = [], j;
      for (j = 1; j < k; j++) { var h = loHer(g, b), nx = loBump(g, b) - 1; steps.push(g + " = " + h + " in base " + b + " → replace " + b + " by " + (b + 1) + " and subtract 1 → " + big(nx)); g = nx; b++; }
      return num("In the Goodstein sequence starting at G₁ = " + m + " (base 2: write in hereditary base b, replace b by b + 1, subtract 1), what is <b>G" + sub(k) + "</b>?", g, big(g),
        steps.join("; ") + ". So G" + sub(k) + " = " + big(g) + "."); },
    // 12. unsatisfiable chains: minimal unsatisfiable subsets
    function () { var n = R(5, 60);
      return num("Let Γ = {p₀} ∪ {pₖ → pₖ₊₁ : k ∈ ℕ} ∪ {¬p" + sub(n) + "}. What is the smallest size of an unsatisfiable finite subset of Γ?", n + 2, null,
        "Any unsatisfiable subset must contain p₀, ¬p" + sub(n) + " and every implication pₖ → pₖ₊₁ with k &lt; " + n + ": if pₖ → pₖ₊₁ is missing, making p₀, …, pₖ true and the rest false satisfies the subset. So the minimum is 1 + " + n + " + 1 = " + (n + 2) + "."); }
  ];
