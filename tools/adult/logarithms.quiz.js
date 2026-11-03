  // Adult (graduate-level) makers for Logarithms
  var LG_ARGS = [ // [re sign, im sign, numerator of Arg/π, denominator, text of Arg]
    [1, 1, 1, 4, "π/4"], [0, 1, 1, 2, "π/2"], [-1, 1, 3, 4, "3π/4"], [-1, 0, 1, 1, "π"],
    [1, -1, -1, 4, "−π/4"], [0, -1, -1, 2, "−π/2"], [-1, -1, -3, 4, "−3π/4"], [1, 0, 0, 1, "0"]
  ];
  var LG_PI = { 3: 168, 4: 1229, 5: 9592, 6: 78498, 7: 664579, 8: 5761455, 9: 50847534, 10: 455052511 };
  var lgR = function (x, d) { var m = Math.pow(10, d); return Math.round(x * m) / m; };
  var lgPi = function (n, d) { if (d < 0) { n = -n; d = -d; } var g = gcd(n, d) || 1; n /= g; d /= g; if (n === 0) return "0"; var m = (n < 0 ? "−" : "") + (Math.abs(n) === 1 ? "" : Math.abs(n)) + "π"; return d === 1 ? m : m + "/" + d; };
  var lgE = function (k) { return k === 0 ? "1" : k === 1 ? "e" : "e" + sup(k); };
  var lgS = function (x, d) { return lgR(x, d).toFixed(d); };
  G["logarithms"] = [
    // 1. modulus of a principal complex power z^i = exp(i Log z)
    function () { var t = pick(LG_ARGS.slice(0, 7)), s = R(1, 6), z = cx(t[0] * s, t[1] * s), A = Math.PI * t[2] / t[3], v = Math.exp(-A);
      return num("Using the principal branch, z<sup>i</sup> = exp(i·Log z). Find |z<sup>i</sup>| for <b>z = " + z + "</b>. (Round to 4 decimal places.)", lgR(v, 4), lgS(v, 4),
        "Log z = ln|z| + i·Arg z with Arg z = " + t[4] + ". Then i·Log z = −Arg z + i·ln|z|, so |z<sup>i</sup>| = e<sup>−Arg z</sup> = e<sup>" + (t[2] < 0 ? t[4].slice(1) : "−" + t[4]) + "</sup> ≈ " + lgS(v, 4) + ". The modulus |z| plays no role.", { tol: 0.00006 }); },
    // 2. discrete logarithm modulo a small prime
    function () { var PR = [[11, 2], [13, 2], [17, 3], [19, 2], [23, 5], [29, 2], [31, 3], [37, 2], [41, 6], [43, 3], [47, 5]], q = pick(PR), pp = q[0], g = q[1], x = R(2, pp - 2), h = 1, i;
      for (i = 0; i < x; i++) h = (h * g) % pp;
      return num("The number " + g + " is a primitive root modulo " + pp + ". Find the discrete logarithm x, with 0 ≤ x ≤ " + (pp - 2) + ", such that <b>" + g + "<sup>x</sup> ≡ " + h + " (mod " + pp + ")</b>.", x, null,
        "Because " + g + " generates the cyclic group (ℤ/" + pp + "ℤ)<sup>×</sup> of order " + (pp - 1) + ", the exponent is unique modulo " + (pp - 1) + ". Listing powers of " + g + " mod " + pp + " (or using baby-step giant-step) gives " + g + "<sup>" + x + "</sup> ≡ " + h + ", so x = " + x + "."); },
    // 3. Shannon entropy of a dyadic distribution
    function () { var ps = [1], k = R(3, 7), i, j, H = 0, terms = [];
      for (i = 0; i < k; i++) { j = R(0, ps.length - 1); var h = ps[j] / 2; ps.splice(j, 1, h, h); }
      ps.sort(function (a, b) { return b - a; });
      var names = ps.map(function (q) { return "1/" + Math.round(1 / q); });
      ps.forEach(function (q) { var b = Math.round(Math.log(1 / q) / Math.LN2); H += q * b; terms.push(names[terms.length] + "·" + b); });
      return num("A source emits " + ps.length + " symbols with probabilities <b>" + names.join(", ") + "</b>. Find its Shannon entropy H = −∑ p log₂ p in bits. (Type a decimal.)", H, String(H),
        "Each probability is 2<sup>−b</sup>, contributing p·b bits: H = " + terms.join(" + ") + " = " + H + " bits. (A Huffman code with these lengths meets the bound exactly.)"); },
    // 4. harmonic numbers versus ln n + γ
    function () { var n = R(1, 99) * pick([100, 1000]), Hn = 0, i, g = 0.5772156649;
      for (i = n; i >= 1; i--) Hn += 1 / i;
      return num("Use the asymptotic expansion H<sub>n</sub> = ln n + γ + 1/(2n) − 1/(12n²) + … (γ ≈ 0.5772157) to compute <b>H<sub>" + big(n) + "</sub></b> = 1 + 1/2 + … + 1/" + big(n) + ". (Round to 4 decimal places.)", lgR(Hn, 4), lgS(Hn, 4),
        "ln " + big(n) + " ≈ " + Math.log(n).toFixed(6) + ", plus γ ≈ 0.577216, plus 1/(2n) = " + (1 / (2 * n)).toFixed(7) + "; the next term, 1/(12n²), is negligible at this precision. Total ≈ " + lgS(Hn, 4) + ".", { tol: 0.00006 }); },
    // 5. logarithmic derivative of a rational product
    function () { var a = R(1, 5), b = R(1, 4), c, d = R(1, 4), x0 = R(1, 4);
      do { c = R(1, 6); } while (c === 1);
      var nn = a * (x0 + 1) * (x0 + c) + b * x0 * (x0 + c) - d * x0 * (x0 + 1), dd = x0 * (x0 + 1) * (x0 + c);
      var fx = "x" + (a > 1 ? sup(a) : "") + "(x + 1)" + (b > 1 ? sup(b) : "") + " / (x + " + c + ")" + (d > 1 ? sup(d) : "");
      return num("Let <b>f(x) = " + fx + "</b>. Use logarithmic differentiation to find f′(" + x0 + ")/f(" + x0 + "). (Type a fraction.)", nn / dd, fr(nn, dd),
        "ln f = " + (a > 1 ? a + " " : "") + "ln x + " + (b > 1 ? b + " " : "") + "ln(x + 1) − " + (d > 1 ? d + " " : "") + "ln(x + " + c + "), so f′/f = " + a + "/x + " + b + "/(x + 1) − " + d + "/(x + " + c + "). At x = " + x0 + ": " + fr(a, x0) + " + " + fr(b, x0 + 1) + " − " + fr(d, x0 + c) + " = " + fr(nn, dd) + "."); },
    // 6. Taylor coefficient of ln((1 + ax)/(1 − bx))
    function () { var a = R(1, 4), b = R(1, 4), n = R(2, 5), sg = n % 2 === 1 ? 1 : -1, nn = sg * Math.pow(a, n) + Math.pow(b, n);
      return num("Find the coefficient of x" + sup(n) + " in the Maclaurin series of <b>ln((1 + " + (a > 1 ? a : "") + "x)/(1 − " + (b > 1 ? b : "") + "x))</b>. (Type a fraction.)", nn / n, fr(nn, n),
        "ln(1 + ax) = ∑ (−1)<sup>k+1</sup> aᵏxᵏ/k and −ln(1 − bx) = ∑ bᵏxᵏ/k. For k = " + n + ": " + (sg > 0 ? "" : "−") + a + sup(n) + "/" + n + " + " + b + sup(n) + "/" + n + " = " + fr(nn, n) + ". (Valid for |x| < 1/max(a, b).)"); },
    // 7. prime number theorem ratio
    function () { var k = R(3, 10), x = Math.pow(10, k), L = k * Math.LN10;
      if (R(0, 1)) { var e2 = x / (L - 1), r2 = LG_PI[k] / e2;
        return num("Given π(10" + sup(k) + ") = " + big(LG_PI[k]) + ", compute the ratio <b>π(x) / (x/(ln x − 1))</b> at x = 10" + sup(k) + ". (Round to 4 decimal places.)", lgR(r2, 4), lgS(r2, 4),
          "ln 10" + sup(k) + " ≈ " + L.toFixed(4) + ", so x/(ln x − 1) ≈ " + big(Math.round(e2)) + " and the ratio is ≈ " + lgS(r2, 4) + ". Since li(x) = (x/ln x)(1 + 1/ln x + O(1/ln²x)) and x/(ln x − 1) agrees with it to that order (Legendre's form with A = 1), this ratio is much closer to 1 than π(x)/(x/ln x).", { tol: 0.00006 }); }
      var est = x / L, r = LG_PI[k] / est;
      return num("Given π(10" + sup(k) + ") = " + big(LG_PI[k]) + ", compute the ratio <b>π(x) / (x/ln x)</b> at x = 10" + sup(k) + ". (Round to 3 decimal places.)", lgR(r, 3), lgS(r, 3),
        "ln 10" + sup(k) + " = " + k + " ln 10 ≈ " + (k * Math.LN10).toFixed(4) + ", so x/ln x ≈ " + big(Math.round(est)) + " and the ratio is " + big(LG_PI[k]) + "/" + big(Math.round(est)) + " ≈ " + lgS(r, 3) + ". The PNT says it tends to 1, but only like 1 + 1/ln x.", { tol: 0.0006 }); },
    // 8. decibels of n incoherent sources
    function () { var L = R(40, 90), n = R(2, 40), v = L + 10 * Math.log(n) / Math.LN10;
      return num(n + " identical, mutually incoherent sources each produce a sound level of " + L + " dB at a point. What is the combined level in dB? (Round to 2 decimal places.)", lgR(v, 2), lgS(v, 2),
        "Incoherent intensities add, so the intensity is multiplied by " + n + " and the level rises by 10 log₁₀ " + n + " ≈ " + (10 * Math.log(n) / Math.LN10).toFixed(3) + " dB: " + L + " + " + (10 * Math.log(n) / Math.LN10).toFixed(3) + " ≈ " + lgS(v, 2) + " dB.", { tol: 0.006 }); },
    // 9. Benford's law for a block of leading digits
    function () { var d1 = R(1, 8), d2 = R(d1, 9), v = Math.log((d2 + 1) / d1) / Math.LN10;
      return num("Under Benford's law, what is the probability that the leading digit lies in <b>{" + d1 + (d2 > d1 ? ", …, " + d2 : "") + "}</b>? (Round to 4 decimal places.)", lgR(v, 4), lgS(v, 4),
        "P(D = d) = log₁₀(1 + 1/d) = log₁₀((d + 1)/d); the sum telescopes: log₁₀(" + (d2 + 1) + "/" + d1 + ") ≈ " + lgS(v, 4) + ".", { tol: 0.00006 }); },
    // 10. failure of Log(zw) = Log z + Log w
    function () { var t = pick(LG_ARGS), u = pick(LG_ARGS), s1 = R(1, 3), s2 = R(1, 3), sum = t[2] / t[3] + u[2] / u[3], k = sum > 1 ? -1 : sum <= -1 ? 1 : 0;
      return ch("For the principal logarithm, Log(zw) = Log z + Log w + 2πik for an integer k. Find k when <b>z = " + cx(t[0] * s1, t[1] * s1) + "</b> and <b>w = " + cx(u[0] * s2, u[1] * s2) + "</b>.", "k = " + f(k),
        ["k = −1", "k = 0", "k = 1", "k = 2"].filter(function (o) { return o !== "k = " + f(k); }),
        "Arg z + Arg w = " + t[4] + " + " + (u[2] < 0 ? "(" + u[4] + ")" : u[4]) + " = " + fr(t[2] * u[3] + u[2] * t[3], t[3] * u[3]).replace(/^(−?)(\d+)\/(\d+)$/, "$1$2π/$3").replace(/^(−?)1π/, "$1π").replace(/^(−?\d+)$/, "$1π").replace(/^0π$/, "0").replace(/^(−?)1π$/, "$1π") + ". Arg(zw) must lie in (−π, π], so we add 2πk with k = " + f(k) + "."); },
    // 11. an improper integral of Bertrand type
    function () { var pw = pick([2, 3, 4]), a = R(2, 20), v = Math.pow(Math.log(a), 1 - pw) / (pw - 1);
      return num("Evaluate <b>∫<sub>" + a + "</sub><sup>∞</sup> dx / (x (ln x)" + sup(pw) + ")</b>. (Round to 4 decimal places.)", lgR(v, 4), lgS(v, 4),
        "Substitute u = ln x, du = dx/x: ∫<sub>ln " + a + "</sub><sup>∞</sup> u<sup>−" + pw + "</sup> du = (ln " + a + ")<sup>−" + (pw - 1) + "</sup>/" + (pw - 1) + " with ln " + a + " ≈ " + Math.log(a).toFixed(5) + ", giving ≈ " + lgS(v, 4) + ". (For exponent 1 the integral diverges, like ln ln x.)", { tol: 0.00006 }); },
    // 12. a classical limit via logarithms
    function () { var a = R(2, 9), b = nz(-5, 5), c = R(2, 6), t = R(0, 1);
      if (t === 0) return ch("Evaluate <b>lim<sub>n→∞</sub> (1 + " + p(b) + "/n)<sup>" + c + "n</sup></b>.", lgE(b * c), [lgE(b + c), lgE(b), "1", lgE(c), lgE(-b * c)],
        "Take logs: " + c + "n · ln(1 + " + p(b) + "/n) = " + c + "n(" + p(b) + "/n − O(1/n²)) → " + f(b * c) + ", so the limit is " + lgE(b * c) + ".");
      var v = c * Math.log(a);
      return num("Evaluate <b>lim<sub>n→∞</sub> n(" + a + "<sup>" + c + "/n</sup> − 1)</b>. (Round to 4 decimal places.)", lgR(v, 4), lgS(v, 4),
        a + "<sup>" + c + "/n</sup> = exp((" + c + " ln " + a + ")/n) = 1 + (" + c + " ln " + a + ")/n + O(1/n²), so the limit is " + c + " ln " + a + " ≈ " + lgS(v, 4) + ".", { tol: 0.00006 }); }
  ];
