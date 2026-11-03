  G["algebraic-geometry"] = (function () {
    // the Weierstrass cubic y² = x³ + ax + b as text
    var curve = function (a, b) { return "y² = " + poly([1, 0, a, b]); };
    var disc = function (a, b) { return 4 * a * a * a + 27 * b * b; };
    var pt = function (x, y) { return "(" + f(x) + ", " + f(y) + ")"; };
    var md = function (n, m) { return ((n % m) + m) % m; };
    return [
      // 1. chord addition on an elliptic curve through two given integer points
      function () { var x1, x2, y1, y2, a, b;
        do { x1 = R(-5, 5); x2 = R(-5, 5); y1 = nz(-9, 9); y2 = nz(-9, 9);
          a = (x1 !== x2 && (y1 * y1 - y2 * y2 - x1 * x1 * x1 + x2 * x2 * x2) % (x1 - x2) === 0) ? (y1 * y1 - y2 * y2 - x1 * x1 * x1 + x2 * x2 * x2) / (x1 - x2) : 999;
          b = y1 * y1 - x1 * x1 * x1 - a * x1;
        } while (x1 === x2 || Math.abs(a) > 30 || Math.abs(b) > 99 || disc(a, b) === 0);
        var ln = y2 - y1, ld = x2 - x1, xn = ln * ln - (x1 + x2) * ld * ld, xd = ld * ld;
        return num("On the elliptic curve <b>" + curve(a, b) + "</b> take P = " + pt(x1, y1) + " and Q = " + pt(x2, y2) + ". What is the x-coordinate of P + Q? (Type an integer or a fraction.)", xn / xd, fr(xn, xd),
          "The chord through P and Q has slope λ = (" + f(y2) + " − " + p(y1) + ")/(" + f(x2) + " − " + p(x1) + ") = " + fr(ln, ld) + ". The third intersection with the cubic has x₃ = λ² − x₁ − x₂ = " + fr(ln * ln, ld * ld) + " − " + p(x1) + " − " + p(x2) + " = " + fr(xn, xd) + ", and P + Q is its reflection in the x-axis, which has the same x-coordinate."); },
      // 2. tangent doubling
      function () { var x1, y1, a, b;
        do { x1 = R(-4, 4); y1 = nz(-8, 8); a = R(-6, 6); b = y1 * y1 - x1 * x1 * x1 - a * x1; } while (disc(a, b) === 0 || Math.abs(b) > 99);
        var ln = 3 * x1 * x1 + a, ld = 2 * y1, xn = ln * ln - 2 * x1 * ld * ld, xd = ld * ld;
        return num("P = " + pt(x1, y1) + " lies on <b>" + curve(a, b) + "</b>. What is the x-coordinate of 2P? (Type an integer or a fraction.)", xn / xd, fr(xn, xd),
          "Implicit differentiation gives the tangent slope λ = (3x₁² + a)/(2y₁) = (3·" + p(x1) + "² + " + p(a) + ")/(2·" + p(y1) + ") = " + fr(ln, ld) + ". Then x(2P) = λ² − 2x₁ = " + fr(ln * ln, ld * ld) + " − " + p(2 * x1) + " = " + fr(xn, xd) + "."); },
      // 3. counting points over a prime field
      function () { var pr = pick([5, 7, 11, 13]), a, b;
        do { a = R(0, pr - 1); b = R(0, pr - 1); } while (md(disc(a, b), pr) === 0);
        var sq = {}, y, x, n = 1, parts = [];
        for (y = 0; y < pr; y++) sq[md(y * y, pr)] = (sq[md(y * y, pr)] || 0) + 1;
        for (x = 0; x < pr; x++) { var v = md(x * x * x + a * x + b, pr), c = sq[v] || 0; n += c; parts.push("x = " + x + ": " + v + " → " + c); }
        return num("How many points does the elliptic curve <b>" + curve(a, b) + "</b> have over the field 𝔽" + sub(pr) + ", counting the point at infinity O?", n, null,
          "For each x in 𝔽" + sub(pr) + " compute x³ + ax + b mod " + pr + " and count its square roots (2 for a nonzero square, 1 for 0, none for a non-square). " + parts.join("; ") + ". That gives " + (n - 1) + " affine points, plus O: " + n + ". (Hasse: |" + n + " − " + (pr + 1) + "| ≤ 2√" + pr + ".)"); },
      // 4. intersection multiplicity of a monomial curve with a smooth branch
      function () { var e, q, c, k;
        do { e = R(2, 4); q = R(2, 7); c = nz(-5, 5); k = R(1, 4); } while (e * k === q || e === q);
        var g = "y " + (c > 0 ? "− " : "+ ") + (Math.abs(c) === 1 ? "" : Math.abs(c)) + "x" + (k > 1 ? sup(k) : ""), m = Math.min(e * k, q);
        return num("Compute the intersection multiplicity at the origin: <b>I₀(y" + sup(e) + " − x" + sup(q) + ", " + g + ")</b>.", m, null,
          "The second curve is smooth at 0 and parametrized by x ↦ (x, " + f(c).replace(/^1$/, "").replace(/^−1$/, "−") + "x" + (k > 1 ? sup(k) : "") + "), so I₀ is the order of vanishing at x = 0 of the first equation restricted to it: " + p(c) + sup(e) + "x" + sup(e * k) + " − x" + sup(q) + ". Since " + (e * k) + " ≠ " + q + ", the order is min(" + (e * k) + ", " + q + ") = " + m + "."); },
      // 5. Bézout: how much intersection is hidden at infinity
      function () { var a = R(3, 10), b = R(2, a - 1), inf = a * (b - 1), xe = "x" + (a - b > 1 ? sup(a - b) : "");
        return num("In ℙ²(ℂ), the projective closures of y = x" + sup(a) + " and y = x" + sup(b) + " meet with total multiplicity " + a + " · " + b + " = " + (a * b) + " (Bézout). What is the intersection multiplicity at the point at infinity [0 : 1 : 0]?", inf, null,
          "Affine meetings: x" + sup(a) + " = x" + sup(b) + " gives x" + sup(b) + "(" + xe + " − 1) = 0. The origin has multiplicity " + b + " (the order of x" + sup(b) + ") and the " + (a - b) + " root" + (a - b > 1 ? "s" : "") + " of " + xe + " = 1" + (a - b > 1 ? " are" : " is") + " simple. So [0 : 1 : 0] carries " + (a * b) + " − " + b + " − " + (a - b) + " = " + inf + "."); },
      // 6. genus by the degree–genus formula or Riemann–Hurwitz
      function () {
        if (Math.random() < 0.5) { var d = R(3, 8), gm = (d - 1) * (d - 2) / 2, dl = R(1, gm);
          return num("An irreducible plane curve of degree " + d + " has exactly " + dl + " singular point" + (dl === 1 ? "" : "s") + ", all ordinary nodes. What is the geometric genus of its normalization?", gm - dl, null,
            "Degree–genus with singularities: g = (d − 1)(d − 2)/2 − Σ δ_P, and an ordinary node has δ = 1. So g = " + (d - 1) + "·" + (d - 2) + "/2 − " + dl + " = " + gm + " − " + dl + " = " + (gm - dl) + "."); }
        var n = R(3, 12), g = Math.floor((n - 1) / 2), br = n % 2 === 0 ? n : n + 1;
        return num("Let f ∈ ℂ[x] be squarefree of degree " + n + ". What is the genus of the smooth projective curve with affine model y² = f(x)?", g, null,
          "The map (x, y) ↦ x has degree 2 and branches at the " + n + " roots of f" + (n % 2 ? " and at ∞ (odd degree)" : " only (even degree, ∞ is unbranched)") + ": " + br + " branch points. Riemann–Hurwitz: 2g − 2 = 2(−2) + " + br + ", so g = " + g + "."); },
      // 7. rational points on the circle and primitive triples
      function () { var m, n; do { m = R(2, 12); n = R(1, m - 1); } while (gcd(m, n) !== 1);
        var odd = (m % 2 === 1 && n % 2 === 1), A = m * m - n * n, B = 2 * m * n, Cc = m * m + n * n, s = odd ? 2 : 1;
        return num("The line through (−1, 0) of slope t = " + n + "/" + m + " meets the unit circle x² + y² = 1 again at a rational point (X/Z, Y/Z). Clearing denominators gives a PRIMITIVE Pythagorean triple (|X|, |Y|, Z). What is Z?", Cc / s, null,
          "The second point is ((1 − t²)/(1 + t²), 2t/(1 + t²)) = ((m² − n²)/(m² + n²), 2mn/(m² + n²)) with m = " + m + ", n = " + n + ": (" + A + "/" + Cc + ", " + B + "/" + Cc + "). " + (odd ? "Both m and n are odd, so all three of " + A + ", " + B + ", " + Cc + " are even; dividing by 2 gives (" + (A / 2) + ", " + (B / 2) + ", " + (Cc / 2) + ")." : "One of m, n is even and gcd(m, n) = 1, so (" + A + ", " + B + ", " + Cc + ") is already primitive.") + " Z = " + (Cc / s) + "."); },
      // 8. singular Weierstrass cubics
      function () { var c = R(1, 15), sg = pick([1, -1]), a = -3 * c * c, b = sg * 2 * c * c * c, xs = sg * c;
        return num("The cubic <b>" + curve(a, b) + "</b> is singular. What is the x-coordinate of its singular point?", xs, null,
          "4a³ + 27b² = 4" + p(a) + "³ + 27·" + p(b) + "² = " + f(4 * a * a * a) + " + " + (27 * b * b) + " = 0, so the cubic has a repeated root: x³ " + "− " + (3 * c * c) + "x " + (b < 0 ? "− " : "+ ") + Math.abs(b) + " = (x " + (xs < 0 ? "+ " : "− ") + c + ")²(x " + (xs < 0 ? "− " : "+ ") + (2 * c) + "). A singular point needs y = 0 and a double root of the cubic, so it is " + pt(xs, 0) + ", a node."); },
      // 9. the j-invariant
      function () { var a, b; do { a = R(-5, 5); b = R(-5, 5); } while (disc(a, b) === 0 || (a === 0 && b === 0));
        var jn = 1728 * 4 * a * a * a, jd = disc(a, b);
        return num("What is the j-invariant of the elliptic curve <b>" + curve(a, b) + "</b>? (Type an integer or a fraction.)", jn / jd, fr(jn, jd),
          "j = 1728 · 4a³/(4a³ + 27b²). Here 4a³ = " + f(4 * a * a * a) + " and 27b² = " + (27 * b * b) + ", so j = 1728 · " + f(4 * a * a * a) + "/" + f(jd) + " = " + fr(jn, jd) + "."); },
      // 10. the radical: how large a power lands in a monomial ideal
      function () { var a = R(2, 7), b = R(2, 7);
        return num("Over ℂ, the polynomial x + y lies in the radical of I = ⟨x" + sup(a) + ", y" + sup(b) + "⟩ ⊂ ℂ[x, y]. What is the smallest N with (x + y)" + "ᴺ ∈ I?", a + b - 1, null,
          "(x + y)ᴺ = Σ C(N, i) xⁱ yᴺ⁻ⁱ with every binomial coefficient nonzero. A monomial lies in the monomial ideal I iff i ≥ " + a + " or N − i ≥ " + b + ". This fails for some i ≤ " + (a - 1) + " exactly when N − " + (a - 1) + " ≤ " + (b - 1) + ", i.e. N ≤ " + (a + b - 2) + ". So N = " + a + " + " + b + " − 1 = " + (a + b - 1) + "."); },
      // 11. real conics and their points at infinity
      function () { var t = R(0, 2), A, B, Cc, q, ans;
        var opts = ["An ellipse, with no real points at infinity", "A hyperbola, with two real points at infinity", "A parabola, with one real point at infinity", "A hyperbola, with one real point at infinity"];
        if (t === 2) { A = nz(-5, 5); B = R(-6, 6); Cc = R(-6, 6); q = "y = " + poly([A, B, Cc]); ans = opts[2];
          return ch("Classify the real affine conic <b>" + q + "</b> and its projective closure.", ans, [opts[0], opts[1], opts[3]], "Homogenize: YZ = " + poly([A, 0, 0]).replace("x", "X") + " + …; at Z = 0 we get X² = 0, the single point [0 : 1 : 0] with multiplicity 2, so the line at infinity is tangent to the conic there: a parabola."); }
        do { A = R(1, 6); B = R(-8, 8); Cc = nz(-6, 6); } while ((t === 0) !== (B * B - 4 * A * Cc < 0) || B * B - 4 * A * Cc === 0);
        var D = B * B - 4 * A * Cc, form = (poly([A, 0, 0]) + (B ? (B < 0 ? " − " : " + ") + (Math.abs(B) === 1 ? "" : Math.abs(B)) + "xy" : "") + (Cc < 0 ? " − " : " + ") + (Math.abs(Cc) === 1 ? "" : Math.abs(Cc)) + "y²");
        ans = D < 0 ? opts[0] : opts[1];
        return ch("Classify the real affine conic <b>" + form + " = 1</b> and its projective closure.", ans, opts.filter(function (o) { return o !== ans; }),
          "The points at infinity solve the quadratic form " + form + " = 0 with Z = 0. Its discriminant is B² − 4AC = " + p(B) + "² − 4·" + A + "·" + p(Cc) + " = " + f(D) + (D < 0 ? " < 0: no real solutions, so the conic is bounded, an ellipse (A > 0 makes it nonempty)." : " > 0: two distinct real directions (the asymptotes), so it is a hyperbola.")); }
    ];
  })();
