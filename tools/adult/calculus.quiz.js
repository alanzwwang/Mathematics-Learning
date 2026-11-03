  // ---------- Calculus (adult): real analysis and multivariable calculus ----------
  // power of a variable: pw("x", 1) = "x", pw("x", 3) = "x³", pw("x", 0) = ""
  var pwC = function (v, e) { return e === 0 ? "" : e === 1 ? v : v + sup(e); };
  // a signed term after the first: sgnC(3, "xy²") = " + 3xy²", sgnC(-1, "xy²") = " − xy²"
  var sgnC = function (c, t) { if (c === 0) return ""; var a = Math.abs(c); return (c < 0 ? " − " : " + ") + (a === 1 && t ? "" : String(a)) + t; };

  G["calculus"] = [
    // 1. Cauchy–Hadamard radius of convergence
    function () { var d = R(2, 5), m = R(1, 3), k = R(0, 3), c = Math.pow(d, m);
      var term = "x" + (m === 1 ? "ⁿ" : sup(m) + "ⁿ") + " / (" + c + "ⁿ" + (k ? " · " + pwC("n", k) : "") + ")";
      return num("Find the radius of convergence R of the power series <b>∑ " + term + "</b> (sum over n ≥ 1).", d, null,
        "By Cauchy–Hadamard, look at the n-th root of the absolute value of the n-th term: (|x|" + (m > 1 ? sup(m) : "") + "/" + c + ")" + (k ? " · n^(−" + k + "/n)" : "") + " → |x|" + (m > 1 ? sup(m) : "") + "/" + c + (k ? ", since n^(1/n) → 1" : "") + ". The root test gives convergence iff |x|" + (m > 1 ? sup(m) + " < " + c + ", i.e. |x|" : "") + " < " + d + ". So R = " + d + "."); },

    // 2. limits by Taylor expansion with Peano remainder
    function () { var a = R(2, 5), t = R(0, 4), ax = a + "x", q, n, d, why;
      if (t === 0) { q = "(1 − cos " + ax + ") / x²"; n = a * a; d = 2; why = "cos " + ax + " = 1 − " + (a * a) + "x²/2 + o(x²), so the quotient tends to " + (a * a) + "/2"; }
      else if (t === 1) { q = "(sin " + ax + " − " + ax + ") / x³"; n = -a * a * a; d = 6; why = "sin " + ax + " = " + ax + " − (" + ax + ")³/6 + o(x³) = " + ax + " − " + (a * a * a) + "x³/6 + o(x³), so the quotient tends to −" + (a * a * a) + "/6"; }
      else if (t === 2) { q = "(e^(" + ax + ") − 1 − " + ax + " − " + (a % 2 ? "(" + fr(a * a, 2) + ")" : fr(a * a, 2)) + "x²) / x³"; n = a * a * a; d = 6; why = "e^(" + ax + ") = 1 + " + ax + " + (" + ax + ")²/2 + (" + ax + ")³/6 + o(x³), so the quotient tends to " + (a * a * a) + "/6"; }
      else if (t === 3) { q = "(tan " + ax + " − " + ax + ") / x³"; n = a * a * a; d = 3; why = "tan u = u + u³/3 + o(u³), so tan " + ax + " − " + ax + " = " + (a * a * a) + "x³/3 + o(x³) and the quotient tends to " + (a * a * a) + "/3"; }
      else { q = "(ln(1 + " + ax + ") − " + ax + ") / x²"; n = -a * a; d = 2; why = "ln(1 + u) = u − u²/2 + o(u²), so ln(1 + " + ax + ") − " + ax + " = −" + (a * a) + "x²/2 + o(x²) and the quotient tends to −" + (a * a) + "/2"; }
      return num("Compute <b>lim (x → 0) " + q + "</b>. (Type a fraction in lowest terms, or an integer.)", n / d, fr(n, d), why + (gcd(n, d) > 1 ? " = " + fr(n, d) : "") + ".", { lowest: true }); },

    // 3. sums of power series obtained by differentiating the geometric series
    function () { var r = R(2, 7), t = R(0, 1), n, d, why;
      if (t === 0) { n = r; d = (r - 1) * (r - 1); why = "From ∑ nxⁿ = x/(1 − x)² at x = 1/" + r + ": (1/" + r + ") / (" + (r - 1) + "/" + r + ")² = " + r + "/" + d; }
      else { n = r * (r + 1); d = Math.pow(r - 1, 3); why = "From ∑ n²xⁿ = x(1 + x)/(1 − x)³ at x = 1/" + r + ": (1/" + r + ")(" + (r + 1) + "/" + r + ") / (" + (r - 1) + "/" + r + ")³ = " + n + "/" + d; }
      return num("Find the exact sum <b>∑ (n ≥ 1) " + (t ? "n²" : "n") + " / " + r + "ⁿ</b>. (Type a fraction in lowest terms, or an integer.)", n / d, fr(n, d), why + (gcd(n, d) > 1 || d === 1 ? " = " + fr(n, d) : "") + ".", { lowest: true }); },

    // 4. Leibniz error bound for alternating series
    function () { var p = R(1, 3), k = R(2, 6), lim = Math.pow(10, k), n = Math.floor(Math.pow(lim, 1 / p));
      while (Math.pow(n, p) > lim) n--;
      while (Math.pow(n + 1, p) <= lim) n++; // n = the largest integer with nᵖ ≤ 10ᵏ
      return num("By the Leibniz estimate |S − sₙ| ≤ aₙ₊₁, what is the least number n of terms of <b>∑ (−1)ⁿ⁺¹ / " + pwC("n", p) + "</b> that guarantees |S − sₙ| &lt; 10" + sup("-" + k) + "?", n, null,
        "We need 1/" + pwC("(n + 1)", p) + " < 10" + sup("-" + k) + ", i.e. " + pwC("(n + 1)", p) + " > " + big(lim) + ". The least such n + 1 is " + (n + 1) + (p > 1 ? " (since " + pwC(String(n), p) + " = " + big(Math.pow(n, p)) + " is not larger)" : "") + ", so n = " + n + "."); },

    // 5. Lagrange remainder for the exponential series
    function () { var k = R(3, 10), lim = 3 * Math.pow(10, k), n = 0, F = 1;
      while (F <= lim) { n++; F *= (n + 1); } // F = (n + 1)!, the first factorial above 3·10^k
      return num("The Lagrange remainder gives 0 &lt; e − ∑ (k = 0 to n) 1/k! &lt; 3/(n + 1)!. What is the least n for which this guarantees an error below <b>10" + sup("-" + k) + "</b>?", n, null,
        "We need (n + 1)! > 3 × 10" + sup(k) + " = " + big(lim) + ". Now " + n + "! = " + big(F / (n + 1)) + " is too small and " + (n + 1) + "! = " + big(F) + " is large enough, so n + 1 = " + (n + 1) + " and n = " + n + "."); },

    // 6. Darboux sums of a monotone function
    function () { var k = R(1, 3), b = R(1, 3), q = pick([10, 100, 1000]), B = Math.pow(b, k + 1), n = B * q + 1;
      return num("Let f(x) = " + pwC("x", k) + " on [0, " + b + "] and let Pₙ be the uniform partition into n parts. What is the least n with <b>U(f, Pₙ) − L(f, Pₙ) &lt; 1/" + q + "</b>?", n, null,
        "f is increasing, so U − L telescopes to (f(" + b + ") − f(0)) · (" + b + "/n) = " + Math.pow(b, k) + " · " + b + "/n = " + B + "/n. We need " + B + "/n < 1/" + q + ", i.e. n > " + big(B * q) + ", so n = " + big(n) + "."); },

    // 7. Leibniz rule for variable limits
    function () { var k = R(1, 3), c = pick([-2, -1, 1, 2]), v = 2 * Math.pow(c, 2 * k + 1) - Math.pow(c, k);
      return num("Let F(x) = ∫ from x to x² of " + pwC("t", k) + " dt. Compute <b>F′(" + f(c) + ")</b>.", v, null,
        "By FTC I and the chain rule, F′(x) = (x²)" + (k > 1 ? sup(k) : "") + " · 2x − " + pwC("x", k) + " = 2" + pwC("x", 2 * k + 1) + " − " + pwC("x", k) + ". At x = " + f(c) + ": 2 · " + p(c) + sup(2 * k + 1) + " − " + p(c) + (k > 1 ? sup(k) : "") + " = " + f(2 * Math.pow(c, 2 * k + 1)) + " − " + p(Math.pow(c, k)) + " = " + f(v) + "."); },

    // 8. Gamma integrals
    function () { var n = R(1, 4), a = R(2, 5), num1 = fact(n), den = Math.pow(a, n + 1);
      return num("Compute <b>∫ from 0 to ∞ of " + pwC("x", n) + " e^(−" + a + "x) dx</b>. (Type a fraction in lowest terms.)", num1 / den, fr(num1, den),
        "Substitute t = " + a + "x: the integral is (1/" + a + sup(n + 1) + ") ∫ " + pwC("t", n) + " e⁻ᵗ dt = Γ(" + (n + 1) + ")/" + a + sup(n + 1) + " = " + n + "!/" + big(den) + " = " + fr(num1, den) + ".", { lowest: true }); },

    // 9. Jacobian determinant
    function () { var a = R(1, 3), b = R(1, 3), c = R(2, 3), pp = R(1, 4), x = pick([-2, -1, 1, 2]), y = pick([-2, -1, 1, 2]);
      var j11 = a * Math.pow(x, a - 1) * Math.pow(y, b), j12 = b * Math.pow(x, a) * Math.pow(y, b - 1), j21 = pp, j22 = c * Math.pow(y, c - 1), det = j11 * j22 - j12 * j21;
      return num("Let F(x, y) = (" + pwC("x", a) + pwC("y", b) + ", " + (pp === 1 ? "" : pp) + "x + " + pwC("y", c) + "). Compute the Jacobian determinant <b>det DF(" + f(x) + ", " + f(y) + ")</b>.", det, null,
        "The Jacobian matrix has rows (∂F₁/∂x, ∂F₁/∂y) and (∂F₂/∂x, ∂F₂/∂y). At (" + f(x) + ", " + f(y) + "): ∂F₁/∂x = " + f(j11) + ", ∂F₁/∂y = " + f(j12) + ", ∂F₂/∂x = " + pp + ", ∂F₂/∂y = " + f(j22) + ". So det = " + p(j11) + " · " + p(j22) + " − " + p(j12) + " · " + pp + " = " + f(det) + "."); },

    // 10. Polar coordinates
    function () { var r = R(1, 3), k = R(1, 3), n = Math.pow(r, 2 * k + 2), d = k + 1;
      return num("The integral of <b>(x² + y²)" + (k > 1 ? sup(k) : "") + "</b> over the disc x² + y² ≤ " + (r * r) + " equals A·π. Find A. (Type a fraction in lowest terms, or an integer.)", n / d, fr(n, d),
        "In polar coordinates dA = r dr dθ: ∫₀^(2π) ∫₀^" + r + " r" + sup(2 * k) + " · r dr dθ = 2π · " + r + sup(2 * k + 2) + "/" + (2 * k + 2) + " = " + fr(n, d) + "·π.", { lowest: true }); },

    // 11. Implicit differentiation
    function () { var k, x, y, Fy, Fx, c;
      do { k = nz(-3, 3); x = nz(-2, 2); y = nz(-2, 2); Fy = x * x + 2 * k * x * y; } while (Fy === 0);
      Fx = 2 * x * y + k * y * y; c = -(x * x * y + k * x * y * y);
      return num("The curve <b>x²y" + sgnC(k, "xy²") + (c ? plusMinus(c) : "") + " = 0</b> passes through (" + f(x) + ", " + f(y) + "). By the implicit function theorem, y is locally a function of x there. Find <b>dy/dx</b>. (Type a fraction in lowest terms, or an integer.)", -Fx / Fy, fr(-Fx, Fy),
        "dy/dx = −F_x/F_y with F_x = 2xy" + sgnC(k, "y²") + " = " + f(Fx) + " and F_y = x²" + sgnC(2 * k, "xy") + " = " + f(Fy) + " ≠ 0. So dy/dx = " + fr(-Fx, Fy) + ".", { lowest: true }); },

    // 12. Directional derivative
    function () { var a = R(1, 3), b = R(1, 3), x = pick([-2, -1, 1, 2]), y = pick([-2, -1, 1, 2]), T = pick(TRIPLES.slice(0, 4)), u = T[0] * pick([1, -1]), v = T[1] * pick([1, -1]), h = T[2];
      var fx = a * Math.pow(x, a - 1) * Math.pow(y, b), fy = b * Math.pow(x, a) * Math.pow(y, b - 1), n = fx * u + fy * v;
      return num("Find the directional derivative of <b>f(x, y) = " + pwC("x", a) + pwC("y", b) + "</b> at (" + f(x) + ", " + f(y) + ") in the direction of the vector (" + f(u) + ", " + f(v) + "). (Type a fraction in lowest terms, or an integer.)", n / h, fr(n, h),
        "∇f = (" + (a === 1 ? "" : a) + pwC("x", a - 1) + pwC("y", b) + ", " + (b === 1 ? "" : b) + pwC("x", a) + pwC("y", b - 1) + ") = (" + f(fx) + ", " + f(fy) + ") at the point. The unit vector is (" + f(u) + "/" + h + ", " + f(v) + "/" + h + "), so the derivative is (" + p(fx) + " · " + p(u) + " + " + p(fy) + " · " + p(v) + ")/" + h + " = " + fr(n, h) + ".", { lowest: true }); },

    // 13. Root / ratio test with the critical value e
    function () { var c = R(1, 5), t = R(0, 1), conv = c < Math.E;
      var s = t === 0 ? c === 1 ? "n! / nⁿ" : c + "ⁿ n! / nⁿ" : (c === 1 ? "" : c + "ⁿ · ") + "(n/(n + 1))^(n²)";
      var why = t === 0 ? "Ratio test: aₙ₊₁/aₙ = " + c + " · (n/(n + 1))ⁿ → " + c + "/e" : "Root test: the n-th root is " + c + " · (n/(n + 1))ⁿ = " + c + "/(1 + 1/n)ⁿ → " + c + "/e";
      return ch("Does the series <b>∑ " + s + "</b> converge?", conv ? "Converges (absolutely)" : "Diverges", [conv ? "Diverges" : "Converges (absolutely)", "Converges conditionally", "The test is inconclusive and it cannot be decided"],
        why + " ≈ " + (c / Math.E).toFixed(3) + (conv ? " < 1, so the series converges; its terms are positive, so the convergence is absolute." : " > 1, so the terms do not tend to 0 and the series diverges.")); },

    // 14. Logarithmic series via Cauchy condensation
    function () { var A = pick(["√n", "n", "n²"]), b = R(0, 3), conv = A === "n²" || (A === "n" && b >= 2);
      var s = b === 0 ? "1 / " + A : "1 / (" + A + (b === 1 ? " ln n" : " (ln n)" + sup(b)) + ")";
      var why = A === "n²" ? (b === 0 ? "This is the p-series with p = 2 > 1, so it converges." : "The terms are at most 1/n² for n ≥ 3 (since ln n ≥ 1), and ∑ 1/n² converges.")
        : A === "√n" ? "For large n, (ln n)" + (b > 1 ? sup(b) : "") + " < √n, so the terms exceed 1/n, and ∑ 1/n diverges."
        : "Cauchy condensation: 2ᵏ · a(2ᵏ) = 1/(k ln 2)" + (b > 1 ? sup(b) : "") + ", which behaves like 1/k" + (b > 1 ? sup(b) : "") + "; this " + (b >= 2 ? "converges since " + b + " > 1." : "diverges since the exponent is ≤ 1.");
      if (A === "n" && b === 0) why = "This is the harmonic series, which diverges.";
      if (A === "√n" && b === 0) why = "This is the p-series with p = 1/2 ≤ 1, which diverges.";
      return ch("Does <b>∑ (n ≥ 3) " + s + "</b> converge?", conv ? "Converges" : "Diverges", [conv ? "Diverges" : "Converges", "Converges conditionally"], why); },

    // 15. Uniform versus pointwise convergence
    function () { var a = R(2, 9), t = R(0, 5), q, yes, why;
      if (t === 0) { var pq = pick([[1, 2], [1, 3], [2, 3], [3, 4]]); q = "fₙ(x) = xⁿ on [0, " + pq[0] + "/" + pq[1] + "]"; yes = true; why = "sup |xⁿ| = (" + pq[0] + "/" + pq[1] + ")ⁿ → 0."; }
      else if (t === 1) { q = "fₙ(x) = x/(" + a + " + nx²) on ℝ"; yes = true; why = "The maximum of |fₙ| is at x = √(" + a + "/n), where fₙ = 1/(2√(" + a + "n)) → 0."; }
      else if (t === 2) { q = "fₙ(x) = " + a + "nx e^(−nx) on [0, ∞)"; yes = false; why = "fₙ → 0 pointwise, but the maximum, at x = 1/n, is " + a + "/e for every n."; }
      else if (t === 3) { q = "fₙ(x) = sin(" + a + "nx)/n on ℝ"; yes = true; why = "|fₙ(x)| ≤ 1/n for all x, so sup |fₙ| ≤ 1/n → 0."; }
      else if (t === 4) { q = "fₙ(x) = " + a + "nx/(1 + n²x²) on [0, 1]"; yes = false; why = "fₙ → 0 pointwise, but fₙ(1/n) = " + fr(a, 2) + " for every n, so sup |fₙ| does not tend to 0."; }
      else { q = "fₙ(x) = xⁿ on [0, 1)"; yes = false; why = "fₙ → 0 pointwise on [0, 1), but sup |xⁿ| = 1 for every n (take x close to 1)."; }
      return ch("Does <b>" + q + "</b> converge uniformly to its pointwise limit?", yes ? "Yes, uniformly" : "No, only pointwise", [yes ? "No, only pointwise" : "Yes, uniformly", "It does not converge even pointwise"], why); }
  ];
