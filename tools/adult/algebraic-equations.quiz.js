  // ---------- Algebraic Equations (adult): theory of equations, resultants, Galois theory, Newton ----------
  var PRIMES_AE = [5, 7, 11, 13, 17, 19, 23];
  var isSqAE = function (n) { if (n < 0) return false; var r = Math.round(Math.sqrt(n)); return r * r === n; };
  // integer root of t³ + pt + q (must divide q), or null
  var intRootAE = function (p, q) { var a = Math.abs(q); for (var d = 1; d <= a; d++) { if (a % d) continue; if (d * d * d + p * d + q === 0) return d; if (-d * d * d - p * d + q === 0) return -d; } return null; };
  var modAE = function (a, m) { return ((a % m) + m) % m; };
  var linAE = function (c) { return c === 0 ? "x" : "(" + poly([1, -c]) + ")"; }; // (x − c)

  G["algebraic-equations"] = [
    // 1. power sums of the roots of a cubic (Newton's identities)
    function () { var b = nz(-6, 6), c = nz(-9, 9), d = nz(-9, 9), k = R(2, 3);
      var e1 = -b, e2 = c, e3 = -d, p2 = e1 * e1 - 2 * e2, p3 = e1 * p2 - e2 * e1 + 3 * e3, v = k === 2 ? p2 : p3;
      return num("Let α, β, γ be the roots of <b>" + poly([1, b, c, d]) + "</b>. Compute <b>α" + sup(k) + " + β" + sup(k) + " + γ" + sup(k) + "</b>.", v, null,
        "Vieta: e₁ = " + f(e1) + ", e₂ = " + f(e2) + ", e₃ = " + f(e3) + ". Newton: p₁ = e₁ = " + f(e1) + ", p₂ = e₁p₁ − 2e₂ = " + f(e1 * e1) + " − " + p(2 * e2) + " = " + f(p2) +
        (k === 3 ? ", p₃ = e₁p₂ − e₂p₁ + 3e₃ = " + f(e1 * p2) + " − " + p(e2 * e1) + " + " + p(3 * e3) + " = " + f(p3) : "") + "."); },

    // 2. discriminant of a full cubic
    function () { var a = R(1, 3), b = R(-5, 5), c = R(-6, 6), d = nz(-6, 6);
      var t1 = b * b * c * c, t2 = -4 * a * c * c * c, t3 = -4 * b * b * b * d, t4 = -27 * a * a * d * d, t5 = 18 * a * b * c * d, D = t1 + t2 + t3 + t4 + t5;
      return num("Compute the discriminant of <b>" + poly([a, b, c, d]) + "</b>.", D, null,
        "For ax³ + bx² + cx + d, Δ = b²c² − 4ac³ − 4b³d − 27a²d² + 18abcd. Here a = " + a + ", b = " + f(b) + ", c = " + f(c) + ", d = " + f(d) + ", so the five terms are " + f(t1) + ", " + f(t2) + ", " + f(t3) + ", " + f(t4) + " and " + f(t5) + ", giving Δ = " + f(D) + ". " +
        (D > 0 ? "Since Δ > 0 there are three distinct real roots." : D < 0 ? "Since Δ < 0 there is one real root and a pair of non-real conjugate roots." : "Since Δ = 0 there is a repeated root.")); },

    // 3. nature of the real roots from the sign of the discriminant
    function () { var pp, q, D; do { pp = nz(-12, 6); q = nz(-20, 20); D = -4 * pp * pp * pp - 27 * q * q; } while (D === 0);
      var ans = D > 0 ? "Three distinct real roots" : "Exactly one real root and two non-real roots";
      return ch("How many real roots does <b>" + poly([1, 0, pp, q]) + "</b> have?", ans,
        [D > 0 ? "Exactly one real root and two non-real roots" : "Three distinct real roots", "A double root and one simple real root", "Three real roots, two of them equal"],
        "Δ = −4p³ − 27q² = " + f(-4 * pp * pp * pp) + " − " + (27 * q * q) + " = " + f(D) + ". " + (D > 0 ? "Δ > 0, so all three roots are real and distinct." : "Δ < 0, so one root is real and the other two are complex conjugates. (A real cubic always has at least one real root.)")); },

    // 4. resultant via the product formula
    function () { var r1 = R(-5, 5), r2, s = R(-6, 6), t = R(-9, 9); do { r2 = R(-5, 5); } while (r2 === r1);
      var g1 = r1 * r1 + s * r1 + t, g2 = r2 * r2 + s * r2 + t, v = g1 * g2;
      return num("Compute the resultant <b>Res(" + poly([1, -(r1 + r2), r1 * r2]) + ", " + poly([1, s, t]) + ")</b>.", v, null,
        "The first polynomial is " + linAE(r1) + linAE(r2) + " with roots " + f(r1) + " and " + f(r2) + ". For monic f, Res(f, g) = ∏ g(αᵢ) = g(" + f(r1) + ") · g(" + f(r2) + ") = " + p(g1) + " · " + p(g2) + " = " + f(v) + "." +
        (v === 0 ? " A zero resultant means the polynomials have a common root." : "")); },

    // 5. the non-integer rational root (rational root theorem)
    function () { var a, b, c, d; do { a = R(2, 6); b = nz(-7, 7); c = nz(-4, 4); d = nz(-4, 4); } while (gcd(a, b) !== 1 || c === d);
      var A = a, B = -(b + a * (c + d)), Cc = b * (c + d) + a * c * d, Dd = -b * c * d;
      return num("The cubic <b>" + poly([A, B, Cc, Dd]) + "</b> has exactly one rational root that is not an integer. Find it. (Type a fraction.)", b / a, fr(b, a),
        "By the rational root theorem a root r/s in lowest terms has s | " + A + ". Testing shows the integer roots " + f(c) + " and " + f(d) + ", and dividing them out leaves " + poly([a, -b]) + ". So the polynomial is (" + poly([a, -b]) + ")" + linAE(c) + linAE(d) + ", and the non-integer root is " + fr(b, a) + ".", { lowest: true }); },

    // 6. Galois group of an irreducible cubic via the discriminant
    (function () {
      var CYC = []; // irreducible t³ + pt + q with square discriminant (Galois group A₃)
      for (var a = -1; a >= -80; a--) for (var b = -300; b <= 300; b++) { if (!b) continue; var dd = -4 * a * a * a - 27 * b * b; if (dd > 0 && isSqAE(dd) && intRootAE(a, b) === null) CYC.push([a, b]); }
      return function () { var pp, q, D, isC3 = Math.random() < 0.45;
        if (isC3) { var c = pick(CYC); pp = c[0]; q = c[1]; }
        else { do { pp = nz(-12, 12); q = nz(-15, 15); D = -4 * pp * pp * pp - 27 * q * q; } while (intRootAE(pp, q) !== null || isSqAE(D) || D === 0); }
        D = -4 * pp * pp * pp - 27 * q * q;
        var sq = isSqAE(D), ans = sq ? "A₃ ≅ C₃ (cyclic of order 3)" : "S₃ (order 6)";
        return ch("The cubic <b>" + poly([1, 0, pp, q]) + "</b> is irreducible over ℚ. What is its Galois group?", ans,
          [sq ? "S₃ (order 6)" : "A₃ ≅ C₃ (cyclic of order 3)", "C₂ (order 2)", "The trivial group"],
          "It has no integer root (an integer root would divide " + Math.abs(q) + "), so it is irreducible and the Galois group is a transitive subgroup of S₃: A₃ or S₃. The discriminant is −4p³ − 27q² = " + f(D) + (sq ? " = " + Math.round(Math.sqrt(D)) + "², a square, so the group lies in A₃: it is cyclic of order 3." : ", which is not a perfect square in ℚ, so the group is not inside A₃: it is S₃.")); };
    })(),

    // 7. degree of a splitting field over ℚ
    function () { var t = R(0, 3), q = pick([2, 3, 5, 7, 11]), n, why, poly_;
      if (t === 0) { poly_ = "x³ − " + q; n = 6; why = "∛" + q + " has degree 3 (Eisenstein at " + q + "), the field ℚ(∛" + q + ") is real, and adjoining ω = e^(2πi/3) (degree 2) gives the splitting field ℚ(∛" + q + ", ω) of degree 3 · 2 = 6."; }
      else if (t === 1) { poly_ = "x⁴ − " + q; n = 8; why = "⁴√" + q + " has degree 4 (Eisenstein at " + q + "), ℚ(⁴√" + q + ") is real, and the roots ±⁴√" + q + ", ±i⁴√" + q + " need i as well. So the splitting field ℚ(⁴√" + q + ", i) has degree 4 · 2 = 8 (Galois group D₄)."; }
      else if (t === 2) { var pr = pick([3, 5, 7, 11, 13]); poly_ = "x" + sup(pr) + " − 1"; n = pr - 1; why = "The splitting field is ℚ(ζ" + sub(pr) + "). The minimal polynomial of ζ" + sub(pr) + " is the cyclotomic polynomial Φ" + sub(pr) + " (Eisenstein after x ↦ x + 1), of degree " + (pr - 1) + "."; }
      else { var pr2 = pick([3, 5, 7]); poly_ = "x" + sup(pr2) + " − " + q; n = pr2 * (pr2 - 1); why = "The roots are ζᵏ · " + sup(pr2) + "√" + q + " with ζ = ζ" + sub(pr2) + ". The field needs " + sup(pr2) + "√" + q + " (degree " + pr2 + ", Eisenstein) and ζ" + sub(pr2) + " (degree " + (pr2 - 1) + "); these degrees are coprime, so the splitting field has degree " + pr2 + " · " + (pr2 - 1) + " = " + n + "."; }
      return num("What is the degree over ℚ of the splitting field of <b>" + poly_ + "</b>?", n, null, why); },

    // 8. two Newton steps for a square or cube root
    function () { var k = Math.random() < 0.6 ? 3 : 2, N, x0;
      do { N = k === 3 ? R(3, 200) : R(3, 200); } while (Math.abs(Math.round(Math.pow(N, 1 / k)) - Math.pow(N, 1 / k)) < 1e-9);
      x0 = Math.floor(Math.pow(N, 1 / k)) + R(0, 1);
      var step = function (x) { return k === 3 ? (2 * x + N / (x * x)) / 3 : (x + N / x) / 2; };
      var x1 = step(x0), x2 = step(x1), v = Math.round(x2 * 10000) / 10000, nm = k === 3 ? "∛" : "√";
      return num("Apply two steps of Newton's method to <b>x" + sup(k) + " − " + N + "</b> starting from x₀ = " + x0 + ". What is x₂? (Round to 4 decimal places.)", v, v.toFixed(4),
        "Newton: xₙ₊₁ = xₙ − (xₙ" + sup(k) + " − " + N + ")/(" + k + "xₙ" + (k === 3 ? "²" : "") + ") = " + (k === 3 ? "(2xₙ + " + N + "/xₙ²)/3" : "(xₙ + " + N + "/xₙ)/2") + ". Then x₁ = " + x1.toFixed(6) + " and x₂ = " + x2.toFixed(6) + ", compared with " + nm + N + " = " + Math.pow(N, 1 / k).toFixed(6) + " (quadratic convergence).", { tol: 0.00006 }); },

    // 9. number of roots of a quadratic over a finite field
    function () { var pr = pick(PRIMES_AE), b = R(0, pr - 1), c = R(1, pr - 1), cnt = 0, roots = [];
      for (var x = 0; x < pr; x++) if (modAE(x * x + b * x + c, pr) === 0) { cnt++; roots.push(x); }
      var D = modAE(b * b - 4 * c, pr), e = 1; for (var i = 0; i < (pr - 1) / 2; i++) e = modAE(e * D, pr);
      return num("How many roots does <b>" + poly([1, b, c]) + "</b> have in 𝔽" + sub(pr) + "?", cnt, null,
        "Δ = b² − 4c ≡ " + D + " (mod " + pr + "). " + (D === 0 ? "Δ = 0, so there is exactly one (double) root." : "Euler's criterion: Δ^((p−1)/2) = " + D + sup((pr - 1) / 2) + " ≡ " + (e === 1 ? "1, so Δ is a nonzero square and there are two roots." : "−1, so Δ is not a square and there are no roots.")) +
        (cnt ? " (The root" + (cnt > 1 ? "s are " : " is ") + roots.join(" and ") + ".)" : "")); },

    // 10. counting monic irreducible polynomials over 𝔽ₚ (Gauss's formula)
    function () { var MU = { 1: 1, 2: -1, 3: -1, 5: -1, 6: 1 }, pr, n;
      do { pr = pick([2, 3, 5, 7, 11]); n = R(2, 6); } while (Math.pow(pr, n) > 2e6);
      var tot = 0, terms = [];
      for (var d = 1; d <= n; d++) if (n % d === 0 && MU[d] != null) { var t = MU[d] * Math.pow(pr, n / d); tot += t; terms.push((MU[d] < 0 ? "− " : terms.length ? "+ " : "") + pr + sup(n / d)); }
      var v = tot / n;
      return num("How many monic irreducible polynomials of degree " + n + " are there over 𝔽" + sub(pr) + "?", v, null,
        "Gauss's formula: the number is (1/n)∑_{d|n} μ(d)p^(n/d), obtained by Möbius inversion of pⁿ = ∑_{d|n} d·N_d (the factorization of x^(pⁿ) − x into all monic irreducibles of degree dividing n). For n = " + n + ", p = " + pr + ": (" + terms.join(" ") + ")/" + n + " = " + tot + "/" + n + " = " + v + "."); },

    // 11. consistency of a linear system via rank (Rouché–Capelli)
    function () { var a1, a2, a3, b1, b2, b3; do { a1 = R(-4, 4); a2 = R(-4, 4); a3 = R(-4, 4); b1 = R(-4, 4); b2 = R(-4, 4); b3 = R(-4, 4); }
      while (a2 * b3 - a3 * b2 === 0 && a1 * b3 - a3 * b1 === 0 && a1 * b2 - a2 * b1 === 0 || a1 === 0 || b2 === 0);
      var al = nz(-3, 3), be = nz(-3, 3), r1 = R(-6, 6), r2 = R(-6, 6), del = Math.random() < 0.5 ? 0 : nz(-3, 3);
      var c1 = al * a1 + be * b1, c2 = al * a2 + be * b2, c3 = al * a3 + be * b3, r3 = al * r1 + be * r2 + del;
      var row = function (x, y, z, r) { var t = [[x, "x"], [y, "y"], [z, "z"]].filter(function (u) { return u[0] !== 0; }).map(function (u, i) { var a = Math.abs(u[0]), co = (a === 1 ? "" : a) + u[1]; return i === 0 ? (u[0] < 0 ? "−" : "") + co : (u[0] < 0 ? " − " : " + ") + co; }).join(""); return (t || "0") + " = " + f(r); };
      var ans = del === 0 ? "Infinitely many solutions (a line)" : "No solution";
      return ch("How many solutions does the system <b>" + row(a1, a2, a3, r1) + "</b>, <b>" + row(b1, b2, b3, r2) + "</b>, <b>" + row(c1, c2, c3, r3) + "</b> have over ℝ?", ans,
        [del === 0 ? "No solution" : "Infinitely many solutions (a line)", "Exactly one solution", "Infinitely many solutions (a plane)"],
        "The third left-hand side is " + f(al) + " × (row 1) + " + p(be) + " × (row 2), so rank A = 2 (rows 1 and 2 are not proportional). The same combination of the right-hand sides is " + f(al * r1 + be * r2) + (del === 0 ? ", which matches " + f(r3) + ": rank [A | b] = 2 = rank A, so by Rouché–Capelli the solutions form an affine space of dimension 3 − 2 = 1, a line." : ", but the third right-hand side is " + f(r3) + ": rank [A | b] = 3 > rank A, so the system is inconsistent.")); }
  ];
