  G["geometry"] = (function () {
    // ---- exact fraction helpers (numerator, denominator) ----
    function q(n, d) { if (d < 0) { n = -n; d = -d; } var g = gcd(n, d) || 1; return [n / g, d / g]; }
    function qs(a) { return fr(a[0], a[1]); }
    function qv(a) { return a[0] / a[1]; }
    function qadd(a, b) { return q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]); }
    function qsub(a, b) { return q(a[0] * b[1] - b[0] * a[1], a[1] * b[1]); }
    function qmul(a, b) { return q(a[0] * b[0], a[1] * b[1]); }
    // Heronian triangles (integer sides and integer area), none equilateral
    var HER = [[5, 5, 6], [5, 5, 8], [13, 14, 15], [10, 13, 13], [9, 10, 17], [6, 25, 29], [13, 20, 21], [11, 13, 20], [7, 15, 20], [3, 4, 5], [5, 12, 13], [8, 15, 17], [4, 13, 15], [10, 17, 21]];
    function tri() {
      var t = pick(HER), k = R(1, 3), a = t[0] * k, b = t[1] * k, c = t[2] * k, s = (a + b + c) / 2;
      var K = Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
      var Rr = q(a * b * c, 4 * K), r = q(K, s);
      return { a: a, b: b, c: c, s: s, K: K, R: Rr, r: r };
    }
    function triText(T) { return "the triangle with sides " + T.a + ", " + T.b + ", " + T.c; }
    function triWork(T) { return "s = " + T.s + ", Heron gives K = " + T.K + ", so R = abc/(4K) = " + (T.a * T.b * T.c) + "/" + (4 * T.K) + " = " + qs(T.R) + " and r = K/s = " + qs(T.r) + ". "; }
    // a homogeneous linear form a x + b y + c z with clean signs
    function lin(cs) {
      var vars = ["x", "y", "z"], s = "";
      cs.forEach(function (c, i) {
        if (c === 0) return;
        var t = (Math.abs(c) === 1 ? "" : String(Math.abs(c))) + vars[i];
        s += s ? (c < 0 ? " − " : " + ") + t : (c < 0 ? "−" : "") + t;
      });
      return s;
    }
    function phi(n) { var r = n, m = n; for (var p2 = 2; p2 * p2 <= m; p2++) if (m % p2 === 0) { while (m % p2 === 0) m /= p2; r -= r / p2; } if (m > 1) r -= r / m; return r; }
    function pow2(x) { return x > 0 && (x & (x - 1)) === 0; }
    function cons(n) { return pow2(phi(n)); }
    function pt(x, y) { return "(" + x + ", " + y + ")"; }

    return [
      // 0: Euler's relation OI² = R² − 2Rr
      function () { var T = tri(), oi = qsub(qmul(T.R, T.R), qmul([2, 1], qmul(T.R, T.r)));
        return num("For " + triText(T) + ", compute OI², the squared distance between the circumcentre O and the incentre I. (Type a fraction if needed.)", qv(oi), qs(oi),
          triWork(T) + "Euler's relation: OI² = R² − 2Rr = " + qs(qmul(T.R, T.R)) + " − " + qs(qmul([2, 1], qmul(T.R, T.r))) + " = " + qs(oi) + "."); },
      // 1: OH² = 9R² − (a² + b² + c²)
      function () { var T = tri(), sq = T.a * T.a + T.b * T.b + T.c * T.c, nine = qmul([9, 1], qmul(T.R, T.R)), oh = qsub(nine, [sq, 1]);
        return num("For " + triText(T) + ", compute OH², the squared length of the Euler segment from the circumcentre O to the orthocentre H. (Type a fraction if needed.)", qv(oh), qs(oh),
          triWork(T) + "With O as origin H = A + B + C, which gives OH² = 9R² − (a² + b² + c²) = " + qs(nine) + " − " + sq + " = " + qs(oh) + "."); },
      // 2: Feuerbach: distance from nine-point centre to incentre
      function () { var T = tri(), half = qmul(T.R, [1, 2]), ni = qsub(half, T.r);
        return num("For " + triText(T) + ", find the distance NI from the nine-point centre N to the incentre I. (Type a fraction if needed.)", qv(ni), qs(ni),
          triWork(T) + "The nine-point circle has radius R/2 = " + qs(half) + " and, by Feuerbach's theorem, is internally tangent to the incircle, so NI = R/2 − r = " + qs(half) + " − " + qs(T.r) + " = " + qs(ni) + "."); },
      // 3: Ceva (concurrent) or Menelaus (collinear), signed ratios
      function () {
        var a, b, c, d; do { a = R(1, 7); b = R(1, 7); c = R(1, 7); d = R(1, 7); } while (gcd(a, b) !== 1 || gcd(c, d) !== 1 || a * c === b * d || a === b);
        var men = Math.random() < 0.5, x = q(men ? -a : a, b), y = q(c, d), prod = qmul(x, y), z = q((men ? -1 : 1) * prod[1], prod[0]);
        var setup = "In triangle ABC, points D, E, F lie on the lines BC, CA, AB with signed ratios BD/DC = " + qs(x) + " and CE/EA = " + qs(y) + ". ";
        if (men) return num(setup + "If D, E, F are collinear, what is the signed ratio AF/FB? (Type a fraction.)", qv(z), qs(z),
          "Menelaus: (BD/DC)(CE/EA)(AF/FB) = −1. Here (BD/DC)(CE/EA) = " + qs(prod) + ", so AF/FB = −1/(" + qs(prod) + ") = " + qs(z) + ".");
        return num(setup + "If AD, BE, CF are concurrent, what is AF/FB? (Type a fraction.)", qv(z), qs(z),
          "Ceva: (BD/DC)(CE/EA)(AF/FB) = 1. Here (BD/DC)(CE/EA) = " + qs(prod) + ", so AF/FB = 1 ÷ " + qs(prod) + " = " + qs(z) + ".");
      },
      // 4: Routh's theorem
      function () {
        var x, y, z; do { x = R(1, 5); y = R(1, 5); z = R(1, 5); } while (x * y * z === 1);
        var n = (x * y * z - 1) * (x * y * z - 1), f1 = x * y + x + 1, f2 = y * z + y + 1, f3 = z * x + z + 1, ans = q(n, f1 * f2 * f3);
        return num("Cevians AD, BE, CF of triangle ABC satisfy BD/DC = " + x + ", CE/EA = " + y + ", AF/FB = " + z + ". What fraction of the area of ABC is the area of the triangle they enclose? (Type a fraction.)", qv(ans), qs(ans),
          "Routh's theorem: (xyz − 1)² / ((xy + x + 1)(yz + y + 1)(zx + z + 1)) = " + (x * y * z - 1) + "² / (" + f1 + " · " + f2 + " · " + f3 + ") = " + n + "/" + (f1 * f2 * f3) + (gcd(n, f1 * f2 * f3) > 1 ? " = " + qs(ans) : "") + ".");
      },
      // 5: inversion of a circle not through the centre
      function () {
        var k, h, rho; do { k = R(1, 6); h = R(2, 12); rho = R(1, 11); } while (rho >= h);
        var p = h * h - rho * rho, wantR = Math.random() < 0.5, cen = q(k * k * h, p), rad = q(k * k * rho, p);
        var qq = "The circle with centre " + pt(h, 0) + " and radius " + rho + " is inverted in the circle x² + y² = " + (k * k) + ". What is the " + (wantR ? "radius" : "x-coordinate of the centre") + " of the image circle? (Type a fraction.)";
        var why = "The power of the centre of inversion is p = " + h + "² − " + rho + "² = " + p + ". The image of a circle with centre c and radius ρ is the circle with centre k²c/p and radius k²ρ/|p|, here centre (" + qs(cen) + ", 0) and radius " + qs(rad) +
          ". Check with the diameter endpoints " + (h - rho) + " and " + (h + rho) + ", which go to " + qs(q(k * k, h - rho)) + " and " + qs(q(k * k, h + rho)) + ".";
        return wantR ? num(qq, qv(rad), qs(rad), why) : num(qq, qv(cen), qs(cen), why);
      },
      // 6: radical centre of three circles and its power
      function () {
        var d = R(2, 9), e = R(2, 9), r1 = R(1, 6), r2 = R(1, 6), r3 = R(1, 6);
        var X = d * d + r1 * r1 - r2 * r2, Y = e * e + r1 * r1 - r3 * r3, x = q(X, 2 * d), y = q(Y, 2 * e);
        var pw = q(X * X * e * e + Y * Y * d * d - 4 * d * d * e * e * r1 * r1, 4 * d * d * e * e);
        return num("Circles ω₁, ω₂, ω₃ have centres (0, 0), " + pt(d, 0) + ", " + pt(0, e) + " and radii " + r1 + ", " + r2 + ", " + r3 + ". Find the common power of their radical centre with respect to the three circles. (Type a fraction if needed; it may be negative.)", qv(pw), qs(pw),
          "Radical axis of ω₁, ω₂: x = (d² + r₁² − r₂²)/(2d) = " + qs(x) + ". Radical axis of ω₁, ω₃: y = (e² + r₁² − r₃²)/(2e) = " + qs(y) + ". The power with respect to ω₁ is x² + y² − r₁² = " + qs(qmul(x, x)) + " + " + qs(qmul(y, y)) + " − " + (r1 * r1) + " = " + qs(pw) + ".");
      },
      // 7: cross-ratio or harmonic conjugate
      function () {
        var a, b, c, dd;
        if (Math.random() < 0.5) {
          do { a = R(-6, 6); b = R(-6, 6); c = R(-6, 6); dd = R(-6, 6); } while (a === b || a === c || a === dd || b === c || b === dd || c === dd);
          var cr = q((c - a) * (dd - b), (c - b) * (dd - a));
          return num("Compute the cross-ratio (A, B; C, D) = (c − a)(d − b)/((c − b)(d − a)) for the points with coordinates a = " + f(a) + ", b = " + f(b) + ", c = " + f(c) + ", d = " + f(dd) + ". (Type a fraction.)", qv(cr), qs(cr),
            "(" + f(c) + " − " + p(a) + ")(" + f(dd) + " − " + p(b) + ") / ((" + f(c) + " − " + p(b) + ")(" + f(dd) + " − " + p(a) + ")) = (" + f(c - a) + " · " + p(dd - b) + ")/(" + f(c - b) + " · " + p(dd - a) + ") = " + qs(cr) + ".");
        }
        do { a = R(-8, 8); b = R(-8, 8); c = R(-8, 8); } while (a === b || c === a || c === b || 2 * c === a + b);
        var hd = q(c * (a + b) - 2 * a * b, 2 * c - a - b);
        return num("On a projective line, find the harmonic conjugate D of C = " + f(c) + " with respect to A = " + f(a) + " and B = " + f(b) + ", i.e. the point d with (A, B; C, D) = −1. (Type a fraction if needed.)", qv(hd), qs(hd),
          "(c − a)(d − b) = −(c − b)(d − a) gives d(2c − a − b) = c(a + b) − 2ab, so d = (" + f(c * (a + b)) + " − " + p(2 * a * b) + ")/(" + f(2 * c - a - b) + ") = " + qs(hd) + ".");
      },
      // 8: classify an isometry x ↦ Ax + b
      function () {
        var kinds = [
          { s: "(x, y) ↦ (−y + B1, x + B2)", rot: 90 }, { s: "(x, y) ↦ (−x + B1, −y + B2)", rot: 180 }, { s: "(x, y) ↦ (y + B1, −x + B2)", rot: 270 },
          { s: "(x, y) ↦ (x + B1, y + B2)", rot: 0 },
          { s: "(x, y) ↦ (x + B1, −y + B2)", ref: "the x-axis direction (1, 0)", g: function (b1, b2) { return [b1, 0]; } },
          { s: "(x, y) ↦ (−x + B1, y + B2)", ref: "the y-axis direction (0, 1)", g: function (b1, b2) { return [0, b2]; } },
          { s: "(x, y) ↦ (y + B1, x + B2)", ref: "the direction (1, 1)", g: function (b1, b2) { return [q(b1 + b2, 2), q(b1 + b2, 2)]; } },
          { s: "(x, y) ↦ (−y + B1, −x + B2)", ref: "the direction (1, −1)", g: function (b1, b2) { return [q(b1 - b2, 2), q(b2 - b1, 2)]; } }];
        var K = pick(kinds), b1, b2;
        do { b1 = R(-5, 5); b2 = R(-5, 5); } while (K.rot === 0 && b1 === 0 && b2 === 0);
        if (K.g && Math.random() < 0.4) { if (K.ref.indexOf("(1, 0)") >= 0) b1 = 0; else if (K.ref.indexOf("(0, 1)") >= 0) b2 = 0; else if (K.ref.indexOf("(1, 1)") >= 0) b2 = -b1; else b2 = b1; }
        var term = function (v) { return v === 0 ? "" : (v < 0 ? " − " + (-v) : " + " + v); };
        var map = K.s.replace("B1", "#").replace("B2", "@");
        map = map.replace(/ \+ #/, term(b1)).replace(/ \+ @/, term(b2));
        var ans, why, ALL = ["Translation", "Rotation", "Reflection", "Glide reflection"];
        if (K.rot === 0) { ans = "Translation"; why = "The linear part is the identity, so T is the translation by " + pt(f(b1), f(b2)) + "."; }
        else if (K.g === undefined) {
          var c;
          if (K.rot === 90) c = [qs(q(b1 - b2, 2)), qs(q(b1 + b2, 2))];
          else if (K.rot === 180) c = [qs(q(b1, 2)), qs(q(b2, 2))];
          else c = [qs(q(b1 + b2, 2)), qs(q(b2 - b1, 2))];
          ans = "Rotation"; why = "The linear part is the rotation through " + K.rot + "° (determinant 1, not the identity), so I − A is invertible and T has exactly one fixed point, " + pt(c[0], c[1]) + ": T is the rotation through " + K.rot + "° about it.";
        } else {
          var gv = K.g(b1, b2), gx = typeof gv[0] === "number" ? f(gv[0]) : qs(gv[0]), gy = typeof gv[1] === "number" ? f(gv[1]) : qs(gv[1]);
          var zero = (typeof gv[0] === "number" ? gv[0] === 0 : gv[0][0] === 0) && (typeof gv[1] === "number" ? gv[1] === 0 : gv[1][0] === 0);
          ans = zero ? "Reflection" : "Glide reflection";
          why = "The linear part is a reflection (determinant −1) fixing " + K.ref + ". The component of b = " + pt(f(b1), f(b2)) + " along that direction is " + pt(gx, gy) + (zero ? ", which is zero, so T² = id and T is a reflection." : ", which is non-zero, so T² is the translation by twice it and T is a glide reflection with glide vector " + pt(gx, gy) + ".");
        }
        return ch("Classify the isometry T: " + map + ".", ans, ALL.filter(function (w) { return w !== ans; }), why);
      },
      // 9: composite of two quarter-turns about different centres
      function () {
        var a, b; do { a = nz(-6, 6); b = nz(-6, 6); } while (a === b || a === -b);
        var cx0 = q(a + b, 2), cy0 = q(b - a, 2), good = "(" + qs(cx0) + ", " + qs(cy0) + ")";
        var w1 = "(" + qs(q(a - b, 2)) + ", " + qs(q(a + b, 2)) + ")", w2 = "(" + qs(q(a, 2)) + ", " + qs(q(b, 2)) + ")", w3 = "(" + qs(q(b - a, 2)) + ", " + qs(q(a + b, 2)) + ")", w4 = "(" + f(a) + ", " + f(b) + ")";
        return ch("Let ρ₀ be the rotation through +90° about (0, 0) and ρ₁ the rotation through +90° about " + pt(f(a), f(b)) + ". The composite ρ₁ ∘ ρ₀ (first ρ₀) is a half-turn. About which point?", good, [w1, w2, w3, w4].filter(function (w) { return w !== good; }),
          "With J(u, v) = (−v, u), ρ₀(p) = Jp and ρ₁(p) = B + J(p − B). So ρ₁ρ₀(p) = B + J(Jp − B) = −p + B − JB, a half-turn about (B − JB)/2. Here JB = " + pt(f(-b), f(a)) + ", so the centre is " + good + ".");
      },
      // 10: Euler characteristic computations
      function () {
        var t = R(0, 2);
        if (t === 0) { var V = 2 * R(12, 60), h = (V - 20) / 2;
          return num("A fullerene is a convex polyhedron with only pentagonal and hexagonal faces and three faces at every vertex. How many hexagonal faces does a fullerene with " + V + " vertices have?", h, null,
            "3V = 2E gives E = " + (3 * V / 2) + ", and Euler's formula gives F = 2 − V + E = " + (2 - V + 3 * V / 2) + ". There are always 12 pentagons (from V − E + F = p/6 = 2), so h = " + (2 - V + 3 * V / 2) + " − 12 = " + h + ". Check: 5 · 12 + 6 · " + h + " = " + (60 + 6 * h) + " = 2E."); }
        if (t === 1) { var P4 = pick([["the 24-cell", 24, 96, 96, 24], ["the 120-cell", 600, 1200, 720, 120], ["the 600-cell", 120, 720, 1200, 600], ["the 16-cell", 8, 24, 32, 16], ["the tesseract", 16, 32, 24, 8], ["the 5-cell", 5, 10, 10, 5]]), hide = R(1, 4), nm = ["", "vertices", "edges", "two-dimensional faces", "cells"];
          var given = [1, 2, 3, 4].filter(function (i) { return i !== hide; }).map(function (i) { return P4[i] + " " + nm[i]; }).join(", ");
          return num("The regular 4-polytope " + P4[0].replace("the ", "") + " has " + given + ". How many " + nm[hide] + " does it have?", P4[hide], null,
            "For a convex 4-polytope the Euler–Poincaré formula is V − E + F − C = 0. Solving with the given numbers: " + P4[1] + " − " + P4[2] + " + " + P4[3] + " − " + P4[4] + " = 0, so the missing number is " + P4[hide] + "."); }
        var V2 = R(5, 40);
        return num("A convex polyhedron with " + V2 + " vertices has every face a triangle. How many edges does it have?", 3 * V2 - 6, null,
          "Each face has 3 edges and each edge borders 2 faces, so 3F = 2E. Then V − E + 2E/3 = 2 gives E = 3V − 6 = " + (3 * V2 - 6) + " (and F = 2V − 4 = " + (2 * V2 - 4) + ").");
      },
      // 11: Gauss–Wantzel
      function () {
        if (Math.random() < 0.5) { var N = R(20, 260), L = []; for (var n = 3; n <= N; n++) if (cons(n)) L.push(n);
          return num("For how many integers n with 3 ≤ n ≤ " + N + " is the regular n-gon constructible with straightedge and compass?", L.length, null,
            "By Gauss–Wantzel, n works iff φ(n) is a power of 2, i.e. n = 2ᵏ times distinct Fermat primes from 3, 5, 17, 257. The values are " + L.join(", ") + ": " + L.length + " of them."); }
        var good, bad = [], tries = 0;
        do { good = R(7, 300); } while (!cons(good));
        while (bad.length < 3 && tries++ < 500) { var m = R(7, 300); if (!cons(m) && bad.indexOf(String(m)) < 0) bad.push(String(m)); }
        return ch("Which regular polygon can be constructed with straightedge and compass? (number of sides)", String(good), bad,
          "Gauss–Wantzel: the n-gon is constructible iff φ(n) is a power of 2. φ(" + good + ") = " + phi(good) + " is a power of 2, while " + bad.map(function (m) { return "φ(" + m + ") = " + phi(+m); }).join(", ") + " are not.");
      },
      // 12: degree of cos(2π/n)
      function () { var n = R(5, 60), d = phi(n) / 2;
        return num("What is the degree [ℚ(cos(2π/" + n + ")) : ℚ]?", d, null,
          "ℚ(ζ) with ζ = e^(2πi/" + n + ") has degree φ(" + n + ") = " + phi(n) + ", and ℚ(cos(2π/" + n + ")) = ℚ(ζ + ζ⁻¹) is its maximal real subfield, of index 2. So the degree is " + d + (pow2(d) ? " (a power of 2: the " + n + "-gon is constructible)." : " (not a power of 2: the " + n + "-gon is not constructible).")); },
      // 13: Dehn invariant
      function () {
        var a = R(1, 9), b = R(1, 9), c = R(1, 9);
        var good = pick(["a right prism over a triangle with sides " + (a + 2) + ", " + (a + 3) + ", " + (a + 4) + " and height " + b, "a rectangular box " + a + " × " + b + " × " + c, "a right prism over a regular " + (R(5, 12)) + "-gon of side " + a + " and height " + b]);
        var wrong = shuffle(["a regular tetrahedron of edge " + a, "a regular octahedron of edge " + b, "a regular icosahedron of edge " + c, "a regular dodecahedron of edge " + a]).slice(0, 3);
        var not = Math.random() < 0.5;
        if (not) { var bads = ["a rectangular box " + a + " × " + b + " × " + c, "a right prism over a triangle with sides " + (a + 2) + ", " + (a + 3) + ", " + (a + 4) + " and height " + b, "a right prism over a square of side " + c + " and height " + a]; good = wrong[0]; wrong = bads; }
        var stem = not ? pick(["Which solid is NOT scissors congruent to a cube of the same volume?", "Which of these solids has a non-zero Dehn invariant?", "Which solid cannot be cut into finitely many polyhedral pieces and reassembled into a cube of equal volume?"])
          : pick(["Which solid is scissors congruent to a cube of the same volume?", "Which of these solids has Dehn invariant zero?", "Which solid can be cut into finitely many polyhedral pieces and reassembled into a cube of equal volume?"]);
        return ch(stem, good, wrong,
          "By Dehn and Sydler, a polyhedron is scissors congruent to a cube of equal volume iff its Dehn invariant ∑ ℓ ⊗ θ vanishes. Prisms have base edges with angle π/2 and lateral edges whose angles sum to (n − 2)π, so D = 0. The regular tetrahedron, octahedron, icosahedron and dodecahedron have dihedral angles arccos(1/3), arccos(−1/3), arccos(−√5/3), arccos(−1/√5), none a rational multiple of π (2cos θ is not an algebraic integer), so their Dehn invariants are non-zero.");
      },
      // 14: intersection of two projective lines
      function () {
        var l, m, X, Y, Z;
        do { l = [nz(-5, 5), nz(-5, 5), R(-6, 6)]; m = [nz(-5, 5), nz(-5, 5), R(-6, 6)];
          X = l[1] * m[2] - l[2] * m[1]; Y = l[2] * m[0] - l[0] * m[2]; Z = l[0] * m[1] - l[1] * m[0]; } while (Z === 0);
        var wantX = Math.random() < 0.5, ans = wantX ? q(X, Z) : q(Y, Z);
        return num("In ℝP² the lines " + lin(l) + " = 0 and " + lin(m) + " = 0 meet at a point [X : Y : Z]. What is its affine " + (wantX ? "x" : "y") + "-coordinate X/Z? (Type a fraction if needed.)", qv(ans), qs(ans),
          "The meet of two lines is the cross product of their coordinate vectors: (" + l.map(f).join(", ") + ") × (" + m.map(f).join(", ") + ") = (" + f(X) + ", " + f(Y) + ", " + f(Z) + "). So the point is (" + qs(q(X, Z)) + ", " + qs(q(Y, Z)) + ") in the chart z = 1, and the " + (wantX ? "x" : "y") + "-coordinate is " + qs(ans) + ".");
      }
    ];
  })();
