  G["trigonometry"] = (function () {
    var D = Math.PI / 180;
    var fx = function (x, k) { var s = x.toFixed(k); if (/^-0\.?0*$/.test(s)) s = s.slice(1); return s.replace(/^-/, "−"); };
    var tm = function (fn, m) { return fn + " " + (m === 1 ? "" : m) + "x"; };       // "cos x", "cos 3x"
    var phi = function (n) { var r = n, m = n; for (var q = 2; q * q <= m; q++) { if (m % q === 0) { while (m % q === 0) m /= q; r -= r / q; } } if (m > 1) r -= r / m; return r; };
    function cheb(n) { // coefficient lists, highest power first
      var a = [1], b = [1, 0];
      if (n === 0) return a;
      for (var k = 1; k < n; k++) {
        var c = b.concat([0]).map(function (v) { return 2 * v; });
        for (var i = 0; i < a.length; i++) c[c.length - a.length + i] -= a[i];
        a = b; b = c;
      }
      return b;
    }
    function angPi(p, q) { // p·π/q as text, reduced
      var g = gcd(p, q); p /= g; q /= g;
      var num = (p === 1 ? "" : p === -1 ? "−" : f(p)) + "π";
      return q === 1 ? num : num + "/" + q;
    }
    return [
      // 0. law of cosines
      function () { var a = R(3, 15), b = R(3, 15), C = R(20, 150);
        var c2 = a * a + b * b - 2 * a * b * Math.cos(C * D), c = Math.sqrt(c2);
        return num("In triangle ABC, a = " + a + ", b = " + b + " and the included angle C = " + C + "°. Find the side c. (Round to 2 decimal places.)", Math.round(c * 100) / 100, fx(c, 2),
          "Law of cosines: c² = a² + b² − 2ab cos C = " + (a * a) + " + " + (b * b) + " − " + (2 * a * b) + " · cos " + C + "° ≈ " + fx(c2, 4) + ", so c ≈ " + fx(c, 2) + ".", { tol: 0.006 }); },
      // 1. circumradius via Heron
      function () { var a, b, c; do { a = R(4, 20); b = R(4, 20); c = R(4, 20); } while (a + b <= c || b + c <= a || c + a <= b);
        var s = (a + b + c) / 2, A2 = s * (s - a) * (s - b) * (s - c), A = Math.sqrt(A2), Rr = a * b * c / (4 * A);
        return num("A triangle has sides " + a + ", " + b + " and " + c + ". Find its circumradius R. (Round to 2 decimal places.)", Math.round(Rr * 100) / 100, fx(Rr, 2),
          "Heron: s = " + s + ", Δ = √(s(s − a)(s − b)(s − c)) = √" + A2 + " ≈ " + fx(A, 4) + ". Then R = abc/(4Δ) = " + (a * b * c) + "/(4 · " + fx(A, 4) + ") ≈ " + fx(Rr, 2) + ".", { tol: 0.006 }); },
      // 2. ambiguous case SSA
      function () { var A = R(15, 120), b = R(5, 20), a = R(2, 22), h = b * Math.sin(A * D), n, why;
        if (A >= 90) { n = a > b ? 1 : 0; why = "A = " + A + "° is not acute, so a triangle exists only if a > b (the largest side faces the largest angle). Here a " + (a > b ? "&gt;" : "≤") + " b, so there " + (n ? "is exactly 1 triangle." : "are 0 triangles."); }
        else {
          if (Math.abs(a - h) < 1e-9) n = 1; else if (a < h) n = 0; else if (a < b) n = 2; else n = 1;
          why = "The height from C is h = b sin A = " + b + " sin " + A + "° ≈ " + fx(h, 3) + ". " + (n === 0 ? "Since a &lt; h, the side a cannot reach the base line: 0 triangles." : n === 2 ? "Since h &lt; a &lt; b, sin B = b sin A/a ≈ " + fx(b * Math.sin(A * D) / a, 4) + " gives two valid angles B and 180° − B: 2 triangles." : (Math.abs(a - h) < 1e-9 ? "Since a = h, B = 90°: exactly 1 triangle." : "Since a ≥ b, only the acute solution for B is possible: exactly 1 triangle."));
        }
        return ch("How many non-congruent triangles have a = " + a + ", b = " + b + " and A = " + A + "°?", String(n), ["0", "1", "2"].filter(function (x) { return x !== String(n); }).concat(["infinitely many"]), why); },
      // 3. great-circle angle
      function () { var p1 = R(-60, 60), p2 = R(-60, 60), dl = R(10, 170);
        var cs = Math.sin(p1 * D) * Math.sin(p2 * D) + Math.cos(p1 * D) * Math.cos(p2 * D) * Math.cos(dl * D), sg = Math.acos(cs) / D;
        var lat = function (x) { return x === 0 ? "0°" : Math.abs(x) + "° " + (x > 0 ? "N" : "S"); };
        return num("Find the central angle σ (in degrees) between the points at latitude " + lat(p1) + " and latitude " + lat(p2) + " whose longitudes differ by " + dl + "°. (Round to 1 decimal place.)", Math.round(sg * 10) / 10, fx(sg, 1),
          "Spherical law of cosines in the triangle with the pole: cos σ = sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos Δλ ≈ " + fx(cs, 5) + ", so σ ≈ " + fx(sg, 1) + "°.", { tol: 0.06 }); },
      // 4. spherical excess
      function () { var A, B, C; do { A = R(40, 170); B = R(40, 170); C = R(40, 170); } while (A + B + C <= 185 || A + B - C >= 180 || B + C - A >= 180 || C + A - B >= 180);
        var r = R(1, 9), E = (A + B + C - 180) * D, ar = r * r * E;
        return num("A spherical triangle on a sphere of radius " + r + " has angles " + A + "°, " + B + "° and " + C + "°. Find its area. (Round to 2 decimal places.)", Math.round(ar * 100) / 100, fx(ar, 2),
          "Girard's theorem: area = (A + B + C − π) r². The excess is " + (A + B + C) + "° − 180° = " + (A + B + C - 180) + "° ≈ " + fx(E, 5) + " rad, so the area is " + (r * r) + " × " + fx(E, 5) + " ≈ " + fx(ar, 2) + ".", { tol: 0.006 }); },
      // 5. Chebyshev coefficient
      function () { var n = R(4, 12), j = R(1, Math.floor(n / 2)), k = n - 2 * j, cs = cheb(n), v = cs[n - k];
        return num("The Chebyshev polynomial Tₙ is defined by Tₙ(cos θ) = cos nθ. What is the coefficient of x" + (k === 0 ? "⁰ (the constant term)" : k === 1 ? "" : sup(k)) + " in T" + sub(n) + "(x)?", v, null,
          "Use T₀ = 1, T₁ = x, Tₙ₊₁ = 2xTₙ − Tₙ₋₁. This gives T" + sub(n) + "(x) = " + poly(cs) + ", so the coefficient is " + f(v) + "."); },
      // 6. finite sine and cosine products
      function () { var t = R(0, 2), m, N, ks = [], k;
        var list = function (fn, q, cnt) { var tt = function (j) { return fn + "(" + angPi(j, q) + ")"; };
          return cnt <= 3 ? ks.slice(0, cnt).map(function (j) { return tt(j); }).join(" · ") : tt(1) + " · " + tt(2) + " ⋯ " + tt(cnt); };
        if (t === 0) { var n = R(5, 16); for (k = 1; k < n; k++) ks.push(k);
          return num("Evaluate the product " + list("sin", n, n - 1) + " (all kπ/" + n + " with 1 ≤ k ≤ " + (n - 1) + "). (Type a fraction.)", n / Math.pow(2, n - 1), fr(n, Math.pow(2, n - 1)),
            "From zⁿ − 1 = ∏(z − ζᵏ) with ζ = e^(2πi/n) we get ∏ₖ₌₁ⁿ⁻¹ (1 − ζᵏ) = n, and |1 − e^(iθ)| = 2 sin(θ/2). So the product is n/2ⁿ⁻¹ = " + n + "/" + Math.pow(2, n - 1) + (gcd(n, Math.pow(2, n - 1)) > 1 ? " = " + fr(n, Math.pow(2, n - 1)) : "") + ".", { lowest: true }); }
        m = R(2, 8); N = 2 * m + 1; for (k = 1; k <= m; k++) ks.push(k);
        if (t === 1)
          return num("Evaluate the product " + list("cos", N, m) + " (all kπ/" + N + " with 1 ≤ k ≤ " + m + "). (Type a fraction.)", Math.pow(2, -m), fr(1, Math.pow(2, m)),
            "Put N = " + N + ". Since sin(2kπ/N) = 2 sin(kπ/N) cos(kπ/N), and the numbers sin(2kπ/N), k = 1, …, " + m + ", are a rearrangement of sin(kπ/N), k = 1, …, " + m + " (because sin(jπ/N) = sin((N − j)π/N)), dividing the two products gives ∏ cos(kπ/N) = 2⁻ᵐ = 1/" + Math.pow(2, m) + ".", { lowest: true });
        return num("Let P = " + list("sin", N, m) + " (all kπ/" + N + " with 1 ≤ k ≤ " + m + "). Compute P². (Type a fraction.)", N / Math.pow(4, m), fr(N, Math.pow(4, m)),
          "By the product theorem, ∏ₖ₌₁^(N−1) sin(kπ/N) = N/2^(N−1) with N = " + N + ". The factors for k and N − k are equal, so this product is P², giving P² = " + N + "/2^" + (N - 1) + " = " + fr(N, Math.pow(4, m)) + ".", { lowest: true }); },
      // 7. cosecant / cotangent sums
      function () { var t = R(0, 4), n, m, v, q, why;
        if (t === 0) { n = R(3, 25); v = n * n - 1; q = "∑ₖ₌₁ⁿ⁻¹ csc²(kπ/n) for n = " + n;
          why = "By the identity ∑ₖ₌₀ⁿ⁻¹ csc²(x + kπ/n) = n² csc²(nx), letting x → 0 after removing the k = 0 term, ∑ₖ₌₁ⁿ⁻¹ csc²(kπ/n) = (n² − 1)/3 = " + v + "/3"; }
        else if (t === 1) { n = R(3, 25); v = (n - 1) * (n - 2); q = "∑ₖ₌₁ⁿ⁻¹ cot²(kπ/n) for n = " + n;
          why = "Since cot² = csc² − 1, the sum is (n² − 1)/3 − (n − 1) = (n − 1)(n − 2)/3 = " + v + "/3"; }
        else if (t === 2) { m = R(1, 12); v = m * (2 * m - 1); q = "∑ₖ₌₁ᵐ cot²(kπ/(2m + 1)) for m = " + m;
          why = "The numbers cot²(kπ/(2m+1)) are the roots of a degree-m polynomial obtained from de Moivre's formula for sin((2m+1)θ); by Vieta their sum is C(2m+1, 3)/C(2m+1, 1) = m(2m − 1)/3 = " + v + "/3"; }
        else if (t === 3) { m = R(1, 12); v = 2 * m * (m + 1); q = "∑ₖ₌₁ᵐ csc²(kπ/(2m + 1)) for m = " + m;
          why = "Add m to the cotangent sum m(2m − 1)/3 (since csc² = 1 + cot²): the result is 2m(m + 1)/3 = " + v + "/3"; }
        else { n = R(2, 20); v = 3 * n * n; q = "∑ₖ₌₀ⁿ⁻¹ csc²((2k + 1)π/(2n)) for n = " + n;
          why = "From sin nx = 2ⁿ⁻¹ ∏ₖ₌₀ⁿ⁻¹ sin(x + kπ/n), taking logarithmic derivatives twice gives ∑ₖ₌₀ⁿ⁻¹ csc²(x + kπ/n) = n² csc²(nx). At x = π/(2n), csc²(nx) = 1, so the sum is n² = " + (n * n); }
        return num("Evaluate " + q + ". (Type a fraction if needed.)", v / 3, fr(v, 3), why + (t === 4 ? "." : (v % 3 === 0 ? " = " + (v / 3) : "") + "."), { lowest: true }); },
      // 8. algebraic degree / constructibility
      function () {
        if (Math.random() < 0.6) { var dg = R(1, 179), g = gcd(dg, 360), n = 360 / g, ph = phi(n), v = n <= 2 ? 1 : ph / 2;
          return num("What is the degree over ℚ of the algebraic number cos " + dg + "°?", v, null,
            "cos " + dg + "° = cos(2π · " + (dg / g) + "/" + n + "), with " + (dg / g) + " coprime to " + n + ". " + (n <= 2 ? "This value is rational, so the degree is 1." : "By Theorem 12.1, 2cos(2πk/n) with gcd(k, n) = 1 is a Galois conjugate of 2cos(2π/n), of degree φ(n)/2. Here φ(" + n + ") = " + ph + ", so the degree is " + v + ".")); }
        var n2 = R(3, 300), p2 = phi(n2), yes = (p2 & (p2 - 1)) === 0;
        return ch("Is the regular " + n2 + "-gon constructible with straightedge and compass?", yes ? "Yes" : "No", yes ? ["No", "Only with a marked ruler"] : ["Yes", "Only with a marked ruler"],
          "Gauss–Wantzel: the regular n-gon is constructible if and only if φ(n) is a power of 2 (n = 2ᵏ times distinct Fermat primes). Here φ(" + n2 + ") = " + p2 + (yes ? ", a power of 2: yes." : ", not a power of 2: no.")); },
      // 9. Niven
      function () {
        var qs = [2, 3, 4, 5, 6, 8, 10, 12], fns = ["sin", "cos", "tan"];
        var ratStr = function (fn, p, q) { var th = p * Math.PI / q, v = Math[fn](th);
          if (fn === "tan" && Math.abs(Math.cos(th)) < 1e-12) return null;
          var c = [[0, "0"], [0.5, "1/2"], [-0.5, "−1/2"], [1, "1"], [-1, "−1"]];
          for (var i = 0; i < c.length; i++) if (Math.abs(v - c[i][0]) < 1e-9) return c[i][1];
          return ""; };
        var wantRat = Math.random() < 0.5, good = null, bad = [], seen = {}, guard = 0;
        while ((good === null || bad.length < 3) && guard++ < 2000) {
          var q = pick(qs), p = R(1, 2 * q - 1), fn = pick(fns);
          if (gcd(p, q) > 1) continue;
          var r = ratStr(fn, p, q); if (r === null) continue;
          var s = fn + "(" + angPi(p, q) + ")"; if (seen[s]) continue;
          if ((r !== "") === wantRat) { if (good === null) { good = [s, r]; seen[s] = 1; } }
          else if (bad.length < 3) { bad.push([s, r]); seen[s] = 1; }
        }
        var others = bad.map(function (x) { return x[0] + (x[1] ? " = " + x[1] : ""); }).join(", ");
        return ch("Exactly one of these numbers is " + (wantRat ? "rational" : "irrational") + ". Which one?", good[0], bad.map(function (x) { return x[0]; }),
          "Niven's theorem: for θ a rational multiple of π, a rational sin θ or cos θ must be 0, ±1/2 or ±1, and a rational tan θ must be 0 or ±1. " +
          (wantRat ? "Here " + good[0] + " = " + good[1] + ", while " + others + " take none of these values, so they are irrational."
                   : "Here " + good[0] + " takes none of these values, so it is irrational, while " + others + " are rational.")); },
      // 10. principal branches
      function () { var k = R(2, 20), useSin = Math.random() < 0.5, m, v, s;
        if (useSin) { m = Math.round(k / Math.PI); v = (m % 2 === 0 ? 1 : -1) * (k - m * Math.PI);
          s = m % 2 === 0 ? k + " − " + m + "π" : (m === 1 ? "π" : m + "π") + " − " + k;
          return num("Compute arcsin(sin " + k + ") (the argument is in radians). (Round to 3 decimal places.)", Math.round(v * 1000) / 1000, fx(v, 3),
            "arcsin(sin x) = (−1)ᵐ(x − mπ) where m is the integer nearest to x/π, because x − mπ ∈ [−π/2, π/2]. Here " + k + "/π ≈ " + fx(k / Math.PI, 3) + ", so m = " + m + " and arcsin(sin " + k + ") = " + s + " ≈ " + fx(v, 3) + ".", { tol: 0.0006 }); }
        m = Math.round(k / (2 * Math.PI)); v = Math.abs(k - 2 * m * Math.PI);
        var tp = 2 * m + "π";
        s = m === 0 ? String(k) : k > 2 * m * Math.PI ? k + " − " + tp : tp + " − " + k;
        return num("Compute arccos(cos " + k + ") (the argument is in radians). (Round to 3 decimal places.)", Math.round(v * 1000) / 1000, fx(v, 3),
          "arccos(cos x) = |x − 2mπ| where m is the integer nearest to x/(2π), because cos is even and 2π-periodic and |x − 2mπ| ∈ [0, π]. Here m = " + m + ", so arccos(cos " + k + ") = " + s + " ≈ " + fx(v, 3) + ".", { tol: 0.0006 }); },
      // 11. inverse hyperbolic
      function () { var q = R(2, 20), t = R(0, 1), v, why, q2;
        if (t === 0) { v = Math.log(q + Math.sqrt(q * q - 1));
          why = "cosh x = (eˣ + e⁻ˣ)/2 = " + q + " gives e²ˣ − " + (2 * q) + "eˣ + 1 = 0, so eˣ = " + q + " ± √" + (q * q - 1) + ". The positive solution is x = arcosh " + q + " = ln(" + q + " + √" + (q * q - 1) + ") ≈ " + fx(v, 4) + ".";
          return num("Find the positive real solution of cosh x = " + q + ". (Round to 4 decimal places.)", Math.round(v * 1e4) / 1e4, fx(v, 4), why, { tol: 0.00006 }); }
        q2 = q * q + 1; v = Math.log(q + Math.sqrt(q2));
        why = "arsinh y = ln(y + √(y² + 1)), so x = ln(" + q + " + √" + q2 + ") ≈ " + fx(v, 4) + ".";
        return num("Solve sinh x = " + q + " for real x. (Round to 4 decimal places.)", Math.round(v * 1e4) / 1e4, fx(v, 4), why, { tol: 0.00006 }); },
      // 12. Parseval for a trigonometric polynomial
      function () { var a = nz(-6, 6), b = nz(-6, 6), c = nz(-6, 6), m = R(1, 5), n = R(1, 5), N = 2 * a * a + b * b + c * c;
        var fs = f(a) + (b < 0 ? " − " : " + ") + (Math.abs(b) === 1 ? "" : Math.abs(b) + " ") + tm("cos", m) + (c < 0 ? " − " : " + ") + (Math.abs(c) === 1 ? "" : Math.abs(c) + " ") + tm("sin", n);
        return num("Let f(x) = " + fs + ". Compute the mean square (1/(2π)) ∫₋π^π f(x)² dx. (Type a fraction if needed.)", N / 2, fr(N, 2),
          "By orthogonality (Parseval), the cross terms integrate to 0, the mean of a constant squared is a², and the mean of cos² or sin² is 1/2. So the answer is " + (a * a) + " + (" + (b * b) + " + " + (c * c) + ")/2 = " + fr(N, 2) + ".", { lowest: true }); },
      // 13. Fourier coefficients
      function () { var n = R(1, 8), t = R(0, 3), sg = n % 2 ? 1 : -1, v, q, why, sh = Math.sinh(Math.PI), nx = (n === 1 ? "" : n) + "x";
        if (t === 0) { v = sg * (2 * Math.PI * Math.PI / n - 12 / (n * n * n));
          q = "For f(x) = x³ on (−π, π), extended 2π-periodically, compute b" + sub(n) + " = (1/π)∫₋π^π x³ sin " + nx + " dx.";
          why = "Integrating by parts three times, bₙ = (−1)ⁿ⁺¹(2π²/n − 12/n³). For n = " + n + " this is " + fx(v, 4) + "."; }
        else if (t === 1) { v = n % 2 ? -4 / (Math.PI * n * n) : 0;
          q = "For f(x) = |x| on [−π, π], compute a" + sub(n) + " = (1/π)∫₋π^π |x| cos " + nx + " dx.";
          why = "Integrating by parts, aₙ = 2((−1)ⁿ − 1)/(πn²), which is −4/(πn²) for odd n and 0 for even n. For n = " + n + " this is " + fx(v, 4) + "."; }
        else if (t === 2) { v = -sg * 2 * sh / (Math.PI * (1 + n * n));
          q = "For f(x) = eˣ on (−π, π), extended 2π-periodically, compute a" + sub(n) + " = (1/π)∫₋π^π eˣ cos " + nx + " dx.";
          why = "With cos nx = Re e^(inx): ∫₋π^π e^((1+in)x) dx = (−1)ⁿ · 2 sinh π/(1 + in) = (−1)ⁿ · 2 sinh π (1 − in)/(1 + n²), so aₙ = (−1)ⁿ 2 sinh π/(π(1 + n²)). For n = " + n + " this is " + fx(v, 4) + "."; }
        else { v = sg * 2 * n * sh / (Math.PI * (1 + n * n));
          q = "For f(x) = eˣ on (−π, π), extended 2π-periodically, compute b" + sub(n) + " = (1/π)∫₋π^π eˣ sin " + nx + " dx.";
          why = "With sin nx = Im e^(inx): ∫₋π^π e^((1+in)x) dx = (−1)ⁿ · 2 sinh π (1 − in)/(1 + n²), so bₙ = (−1)ⁿ⁺¹ 2n sinh π/(π(1 + n²)). For n = " + n + " this is " + fx(v, 4) + "."; }
        return num(q + " (Round to 4 decimal places.)", Math.round(v * 1e4) / 1e4, fx(v, 4), why, { tol: 0.00006 }); },
      // 14. Gibbs phenomenon
      function () { var Si = 1.8519370519824978, G0 = Si / Math.PI - 0.5, t = R(0, 2), a, b, v, N;
        if (t === 0) { a = R(-10, 5); b = a + R(2, 12); v = b + G0 * (b - a);
          return num("Let f be 2π-periodic with f = " + f(a) + " on (−π, 0) and f = " + f(b) + " on (0, π). Find the limit, as n → ∞, of the maximum of the Fourier partial sum Sₙf on (0, π/2). (Round to 3 decimal places.)", Math.round(v * 1000) / 1000, fx(v, 3),
            "Gibbs phenomenon: near the jump of size J = " + (b - a) + " the partial sums overshoot the right-hand value by (Si(π)/π − 1/2) J ≈ 0.089490 × " + (b - a) + ", where Si(π) = ∫₀^π (sin t)/t dt ≈ 1.851937. So the limit is " + f(b) + " + " + fx(G0 * (b - a), 4) + " ≈ " + fx(v, 3) + ".", { tol: 0.0006 }); }
        if (t === 1) { N = R(3, 40); v = Math.PI / (2 * N);
          return num("Let S(x) = (4/π) ∑ₖ₌₁ᴺ sin((2k − 1)x)/(2k − 1) with N = " + N + " (a partial sum of the square wave). At which x > 0 does S attain its first local maximum? (Round to 4 decimal places.)", Math.round(v * 1e4) / 1e4, fx(v, 4),
            "S′(x) = (4/π) ∑ cos((2k − 1)x) = (2/π) sin(2Nx)/sin x, whose first positive zero is x = π/(2N) = π/" + (2 * N) + " ≈ " + fx(v, 4) + "; S′ changes from positive to negative there.", { tol: 0.00006 }); }
        N = R(2, 20); v = 2 * N * Si;
        return num("Let f be the 2π-periodic function equal to " + N + "x on (−π, π). Find the limit, as n → ∞, of the maximum of the Fourier partial sum Sₙf on (0, π). (Round to 3 decimal places.)", Math.round(v * 1000) / 1000, fx(v, 3),
          "For f(x) = x, Sₙf(π − t) = 2∑ₖ₌₁ⁿ sin kt/k; at the first critical point t = π/(n + 1) this is a Riemann sum tending to 2 Si(π) ≈ 3.703874. Scaling by " + N + ", the limit is " + (2 * N) + " Si(π) ≈ " + fx(v, 3) + ", while f itself only approaches " + N + "π ≈ " + fx(N * Math.PI, 3) + ".", { tol: 0.0006 }); }
    ];
  })();
