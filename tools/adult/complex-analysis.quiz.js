  G["complex-analysis"] = (function () {
    // "z − c" written nicely for a real integer c
    var zm = function (c) { return c === 0 ? "z" : "z" + plusMinus(-c); };
    // "z − w" for a Gaussian integer w = x + yi
    var zmc = function (x, y) { return y === 0 ? zm(x) : "z − (" + cx(x, y) + ")"; };
    // a factor with an exponent, leaving out the exponent 1
    var pw = function (s, m) { return "(" + s + ")" + (m === 1 ? "" : sup(m)); };
    // signed term " + 3x" / " − x" (k ≠ 0), t is the monomial text
    var term = function (k, t) { var a = Math.abs(k); return (k < 0 ? " − " : " + ") + (a === 1 && t ? "" : a) + t; };
    var kpi = function (s) { return s.indexOf("/") < 0 ? (s === "1" ? "" : s === "−1" ? "−" : s) + "πi" : "(" + s + ")πi"; };
    return [
      // 0. residue at a pole of order 2 or 3 (polynomial numerator)
      function () { var a, b, c; do { a = nz(-6, 6); b = nz(-9, 9); c = nz(-3, 3); } while (c * c * c + a * c + b === 0);
        var m = R(2, 3), num0 = poly([1, 0, a, b, 0], "z"), r, why;
        if (m === 2) { r = 4 * c * c * c + 2 * a * c + b;
          why = "For a pole of order 2, Res = p′(c) with p(z) = " + num0 + ". p′(z) = " + poly([4, 0, 2 * a, b], "z") + ", so p′(" + f(c) + ") = " + f(4 * c * c * c) + " + " + p(2 * a * c) + " + " + p(b) + " = " + f(r) + "."; }
        else { r = 6 * c * c + a;
          why = "For a pole of order 3, Res = p″(c)/2! with p(z) = " + num0 + ". p″(z) = " + poly([12, 0, 2 * a], "z") + ", so p″(" + f(c) + ")/2 = (" + f(12 * c * c) + " + " + p(2 * a) + ")/2 = " + f(r) + "."; }
        return num("Find the residue of <b>f(z) = (" + num0 + ")/" + pw(zm(c), m) + "</b> at z = " + f(c) + ".", r, null, why); },
      // 1. contour integral of 1/((z − p)(z − q)) over |z| = 3
      function () { var pp, q, both = Math.random() < 0.25;
        do { pp = R(-2, 2); q = both ? R(-2, 2) : pick([-1, 1]) * R(4, 8); } while (pp === q);
        var k = both ? 0 : 2 / (pp - q), show = both ? "0" : fr(2, pp - q);
        var why = both ? "Both poles " + f(pp) + " and " + f(q) + " lie inside |z| = 3. The residues are 1/(" + f(pp) + " − " + p(q) + ") and 1/(" + f(q) + " − " + p(pp) + "), which cancel, so I = 0 (equivalently, the residue at ∞ is 0 because the integrand is O(1/z²))."
          : "Only z = " + f(pp) + " lies inside |z| = 3 (|" + f(q) + "| > 3). Res = 1/(" + f(pp) + " − " + p(q) + ") = " + fr(1, pp - q) + ", so I = 2πi · (" + fr(1, pp - q) + ") = " + kpi(show) + ".";
        return num("Let I = ∮ over |z| = 3 of <b>dz / (" + "(" + zm(pp) + ")(" + zm(q) + "))</b>. Then I = k·πi. Find k. (Type an integer or a fraction.)", k, show, why); },
      // 2. ∫ dx/((x²+a²)(x²+b²)) = π/(ab(a+b))
      function () { var a, b; do { a = R(1, 6); b = R(1, 7); } while (a >= b);
        var d = a * b * (a + b);
        return num("Evaluate <b>∫ dx / ((x² + " + (a * a) + ")(x² + " + (b * b) + "))</b> over the whole real line. The answer is k·π; find k. (Type a fraction.)", 1 / d, fr(1, d),
          "Close in the upper half-plane. The poles there are " + cx(0, a) + " and " + cx(0, b) + ", with residues 1/(2·" + cx(0, a) + "·(" + (b * b) + " − " + (a * a) + ")) and 1/(2·" + cx(0, b) + "·(" + (a * a) + " − " + (b * b) + ")). Their sum is 1/(2i·ab(a + b)), so the integral is π/(ab(a + b)) = π/(" + a + "·" + b + "·" + (a + b) + ") = (" + fr(1, d) + ")π."); },
      // 3. ∫₀^{2π} dθ/(A + B cos θ)
      function () { var t = pick(TRIPLES.slice(0, 4)), s = R(1, 2), sw = Math.random() < 0.5, A = s * t[2], B = s * (sw ? t[0] : t[1]) * pick([1, -1]), L = s * (sw ? t[1] : t[0]), trig = pick(["cos", "sin"]);
        return num("Evaluate <b>∫₀^(2π) dθ / (" + A + (B < 0 ? " − " : " + ") + Math.abs(B) + " " + trig + " θ)</b>. The answer is k·π; find k. (Type a fraction.)", 2 / L, fr(2, L),
          "With z = e^(iθ) the integral becomes a residue computation, giving the general formula ∫₀^(2π) dθ/(a + b cos θ) = 2π/√(a² − b²) for a > |b|" + (trig === "sin" ? " (and the same for sin θ, by shifting θ by π/2)" : "") + ". Here √(" + (A * A) + " − " + (B * B) + ") = √" + (L * L) + " = " + L + ", so the value is 2π/" + L + " = (" + fr(2, L) + ")π."); },
      // 4. radius of convergence
      function () { var P0, Q0, S, j = R(0, 3); do { P0 = R(2, 7); Q0 = R(2, 7); S = R(1, 9); } while (P0 === Q0 || gcd(S, Math.max(P0, Q0)) === Math.max(P0, Q0));
        var M = Math.max(P0, Q0), coef = (j === 0 ? "" : j === 1 ? "n·" : "n" + sup(j) + "·");
        return num("Find the radius of convergence of <b>∑ " + coef + "(" + P0 + "ⁿ + " + Q0 + "ⁿ) zⁿ" + (S === 1 ? "" : " / " + S + "ⁿ") + "</b>. (Type a fraction.)", S / M, fr(S, M),
          "By Cauchy–Hadamard, |aₙ|^(1/n) = " + (j ? "n^(" + j + "/n) · " : "") + M + "(1 + (" + Math.min(P0, Q0) + "/" + M + ")ⁿ)^(1/n) / " + S + " → " + M + "/" + S + (j ? " (since n^(1/n) → 1)" : "") + ". So R = " + S + "/" + M + (gcd(S, M) > 1 ? " = " + fr(S, M) : "") + "."); },
      // 5. Rouché: zeros of zⁿ + a zᵏ + b in the unit disc or in the annulus 1 < |z| < 2
      function () { var n, k, a, b;
        do { n = R(5, 9); k = R(1, n - 2); b = nz(-4, 4); a = pick([1, -1]) * R(Math.abs(b) + 2, 20); } while (Math.pow(2, n) <= Math.abs(a) * Math.pow(2, k) + Math.abs(b));
        var pz = poly((function () { var c = []; for (var i = n; i >= 0; i--) c.push(i === n ? 1 : i === k ? a : i === 0 ? b : 0); return c; })(), "z"), ann = Math.random() < 0.5;
        var w1 = "On |z| = 1: |" + f(a) + "z" + (k === 1 ? "" : sup(k)) + "| = " + Math.abs(a) + " > " + (1 + Math.abs(b)) + " ≥ |z" + sup(n) + plusMinus(b) + "|, so by Rouché there are " + k + " zeros in |z| &lt; 1.";
        var w2 = " On |z| = 2: |z" + sup(n) + "| = " + Math.pow(2, n) + " > " + (Math.abs(a) * Math.pow(2, k) + Math.abs(b)) + " ≥ |" + f(a) + "z" + (k === 1 ? "" : sup(k)) + plusMinus(b) + "|, so all " + n + " zeros lie in |z| &lt; 2, leaving " + n + " − " + k + " = " + (n - k) + " in the annulus.";
        return num("How many zeros (with multiplicity) does <b>" + pz + "</b> have in " + (ann ? "the annulus 1 &lt; |z| &lt; 2" : "the unit disc |z| &lt; 1") + "?", ann ? n - k : k, null, w1 + (ann ? w2 : "")); },
      // 6. argument principle
      function () { var r = R(2, 4), pts = [], i, x, y;
        for (i = 0; i < 3; i++) { do { x = R(-4, 4); y = R(-4, 4); } while (x * x + y * y === r * r || pts.some(function (q) { return q[0] === x && q[1] === y; })); pts.push([x, y]); }
        var e = [R(1, 4), R(1, 4), R(1, 3)], ins = pts.map(function (q) { return q[0] * q[0] + q[1] * q[1] < r * r; });
        var v = (ins[0] ? e[0] : 0) + (ins[1] ? e[1] : 0) - (ins[2] ? e[2] : 0);
        var fz = pw(zmc(pts[0][0], pts[0][1]), e[0]) + pw(zmc(pts[1][0], pts[1][1]), e[1]) + " / " + pw(zmc(pts[2][0], pts[2][1]), e[2]);
        var parts = ["zero " + cx(pts[0][0], pts[0][1]) + " (order " + e[0] + ")", "zero " + cx(pts[1][0], pts[1][1]) + " (order " + e[1] + ")", "pole " + cx(pts[2][0], pts[2][1]) + " (order " + e[2] + ")"];
        var inside = parts.filter(function (_, j) { return ins[j]; });
        return num("Let <b>f(z) = " + fz + "</b>. Compute (1/2πi) ∮ f′(z)/f(z) dz over the circle |z| = " + r + ".", v, null,
          "By the argument principle the integral is Z − P inside the circle. A point x + yi is inside when x² + y² &lt; " + (r * r) + ". " + (inside.length ? "Inside: " + inside.join(", ") + "." : "Nothing lies inside.") + " So Z − P = " + f(v) + "."); },
      // 7. harmonic conjugate
      function () { var A = R(-4, 4), B = R(-5, 5), x0 = nz(-3, 3), y0 = nz(-3, 3);
        var u = "x³ − 3xy²" + (A ? term(A, "(x² − y²)") : "") + (B ? term(B, "x") : "");
        var v = 3 * x0 * x0 * y0 - y0 * y0 * y0 + 2 * A * x0 * y0 + B * y0;
        return num("The function <b>u(x, y) = " + u + "</b> is harmonic. Let v be its harmonic conjugate with v(0, 0) = 0. Find v(" + f(x0) + ", " + f(y0) + ").", v, null,
          "u = Re f with f(z) = " + poly([1, A, B, 0], "z") + ", so v = Im f = 3x²y − y³" + (A ? term(2 * A, "xy") : "") + (B ? term(B, "y") : "") + " (check: u_x = v_y, u_y = −v_x). At (" + f(x0) + ", " + f(y0) + "): " + f(3 * x0 * x0 * y0) + " − " + p(y0 * y0 * y0) + " + " + p(2 * A * x0 * y0) + " + " + p(B * y0) + " = " + f(v) + "."); },
      // 8. product over nontrivial roots of unity
      function () { var n = R(3, 7), a; do { a = R(-4, 5); } while (a === 0 || a === 1 || (a === -1)); var v = (Math.pow(a, n) - 1) / (a - 1);
        return num("Let ω = e^(2πi/" + n + "). Compute <b>∏ (" + f(a) + " − ω<sup>k</sup>)</b> over k = 1, …, " + (n - 1) + ".", v, null,
          "Since zⁿ − 1 = ∏ (z − ωᵏ) over k = 0, …, n − 1, dividing by z − 1 gives ∏ over k = 1, …, n − 1 of (z − ωᵏ) = 1 + z + … + z^(n−1) = (zⁿ − 1)/(z − 1). At z = " + f(a) + ": (" + p(a) + sup(n) + " − 1)/(" + f(a) + " − 1) = " + f(Math.pow(a, n) - 1) + "/" + p(a - 1) + " = " + f(v) + "."); },
      // 9. Cauchy's formula for derivatives: ∮ e^{az}/z^{n+1}
      function () { var a = nz(-4, 4), n = R(1, 4), N = Math.pow(a, n), d = fact(n), show = fr(2 * N, d);
        return num("Let I = ∮ over |z| = 1 of <b>e<sup>" + (a === 1 ? "" : a === -1 ? "−" : f(a)) + "z</sup> / z" + sup(n + 1) + "</b> dz. Then I = k·πi. Find k. (Type an integer or a fraction.)", 2 * N / d, show,
          "Cauchy's formula: ∮ g(z)/z^(n+1) dz = 2πi g⁽ⁿ⁾(0)/n!. With g(z) = e^(" + (a === 1 ? "" : a === -1 ? "−" : f(a)) + "z), g⁽" + sup(n) + "⁾(0) = " + p(a) + sup(n) + " = " + f(N) + ". So I = 2πi · (" + f(N) + "/" + d + ") = " + kpi(show) + "."); },
      // 10. classify a Möbius transformation
      function () { var a, b, c, d, D;
        do { a = R(-4, 4); b = R(-4, 4); c = R(-4, 4); d = R(-4, 4); D = a * d - b * c; } while (D === 0 || (b === 0 && c === 0 && a === d) || c === 0);
        var t2 = (a + d) * (a + d), tau = t2 / D, cls = tau < 0 ? "Loxodromic" : tau < 4 ? "Elliptic" : tau === 4 ? "Parabolic" : "Hyperbolic";
        var T = "(" + poly([a, b], "z") + ") / (" + poly([c, d], "z") + ")";
        return ch("Classify the Möbius transformation <b>T(z) = " + T + "</b>.", cls, ["Elliptic", "Parabolic", "Hyperbolic", "Loxodromic"].filter(function (s) { return s !== cls; }),
          "Normalise by the determinant: τ = (a + d)²/(ad − bc) = " + t2 + "/" + p(D) + " = " + fr(t2, D) + ". τ = 4 is parabolic, 0 ≤ τ &lt; 4 elliptic, τ > 4 hyperbolic, τ &lt; 0 loxodromic. So T is " + cls.toLowerCase() + "."); },
      // 11. Schwarz–Pick bound
      function () { var z0n, z0d, w0n, w0d;
        do { z0d = R(2, 6); z0n = R(0, z0d - 1); w0d = R(2, 6); w0n = R(-w0d + 1, w0d - 1); } while (gcd(z0n, z0d) !== 1 || gcd(Math.abs(w0n), w0d) !== 1 || (z0n === 0 && w0n === 0));
        var nu = (w0d * w0d - w0n * w0n) * z0d * z0d, de = (z0d * z0d - z0n * z0n) * w0d * w0d, zs = fr(z0n, z0d), ws = fr(w0n, w0d);
        return num("Let f : 𝔻 → 𝔻 be holomorphic with <b>f(" + zs + ") = " + ws + "</b>. What is the largest possible value of |f′(" + zs + ")|? (Type a fraction.)", nu / de, fr(nu, de),
          "Schwarz–Pick: |f′(z)| ≤ (1 − |f(z)|²)/(1 − |z|²), with equality for a disc automorphism. Here (1 − " + fr(w0n * w0n, w0d * w0d) + ")/(1 − " + fr(z0n * z0n, z0d * z0d) + ") = " + fr(w0d * w0d - w0n * w0n, w0d * w0d) + " ÷ " + fr(z0d * z0d - z0n * z0n, z0d * z0d) + " = " + fr(nu, de) + "."); },
      // 12. Laurent coefficient in an annulus
      function () { var pp = R(1, 3), q, m, neg = Math.random() < 0.5;
        do { q = R(2, 5); } while (q <= pp); m = neg ? R(1, 3) : R(0, 2);
        var nu = neg ? Math.pow(pp, m - 1) : 1, de = neg ? (pp - q) : (pp - q) * Math.pow(q, m + 1), pw0 = neg ? "z" + sup("-" + m) : (m === 0 ? "z⁰ (the constant term)" : m === 1 ? "z" : "z" + sup(m));
        return num("Let <b>f(z) = 1/((" + zm(pp) + ")(" + zm(q) + "))</b>. In its Laurent series on the annulus " + pp + " &lt; |z| &lt; " + q + ", what is the coefficient of " + pw0 + "? (Type a fraction.)", nu / de, fr(nu, de),
          "Partial fractions: f = (1/" + p(pp - q) + ")[1/(" + zm(pp) + ") − 1/(" + zm(q) + ")]. On the annulus, 1/(" + zm(pp) + ") = ∑ " + pp + "^(m−1) z^(−m) (m ≥ 1) and −1/(" + zm(q) + ") = ∑ zⁿ/" + q + "^(n+1) (n ≥ 0). " +
          (neg ? "The coefficient of z" + sup("-" + m) + " is " + pp + sup(m - 1) + "/" + p(pp - q) + " = " + fr(nu, de) + "." : "The coefficient of " + (m === 0 ? "z⁰" : m === 1 ? "z" : "z" + sup(m)) + " is 1/(" + p(pp - q) + "·" + q + sup(m + 1) + ") = " + fr(nu, de) + ".")); }
    ];
  })();
