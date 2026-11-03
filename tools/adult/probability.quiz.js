  // Adult (graduate-level) makers for Probability
  var prR = function (x, d) { var m = Math.pow(10, d); return Math.round(x * m) / m; };
  var prS = function (x, d) { return prR(x, d).toFixed(d); };
  var prErf = function (x) { var s = 0, t = x; for (var n = 0; n < 120; n++) { s += t / (2 * n + 1); t *= -x * x / (n + 1); } return 2 / Math.sqrt(Math.PI) * s; };
  var prPhi = function (z) { return 0.5 * (1 + prErf(z / Math.SQRT2)); };
  var prPat = function (w) { var t = 0; for (var k = 1; k <= w.length; k++) if (w.slice(0, k) === w.slice(w.length - k)) t += Math.pow(2, k); return t; };
  G["probability"] = [
    // 1. Bayes' theorem with a base rate
    function () { var prev = R(1, 9), sens = R(80, 99), fp = R(2, 15);
      var a = prev / 100 * sens / 100, b = (1 - prev / 100) * fp / 100, v = a / (a + b);
      return num("A condition has prevalence " + prev + "%. A test has sensitivity " + sens + "% and false-positive rate " + fp + "%. Find P(condition | positive test). (Round to 3 decimal places.)", prR(v, 3), prS(v, 3),
        "Bayes: P(D | +) = P(+ | D)P(D) / [P(+ | D)P(D) + P(+ | Dᶜ)P(Dᶜ)] = (" + (sens / 100) + " × " + (prev / 100) + ") / (" + (sens / 100) + " × " + (prev / 100) + " + " + (fp / 100) + " × " + prR(1 - prev / 100, 2) + ") = " + prS(a, 5) + " / " + prS(a + b, 5) + " ≈ " + prS(v, 3) + ".", { tol: 0.0011 }); },
    // 2. extinction probability of a Galton–Watson process with 0, 1 or 2 children
    function () { var d, a, c, m; do { d = pick([6, 8, 10, 12]); a = R(1, d - 2); c = R(1, d - a); m = d - a - c; } while (c <= a || m < 0);
      return num("A branching process has offspring law P(0 children) = " + fr(a, d) + ", P(1) = " + fr(m, d) + ", P(2) = " + fr(c, d) + ". Starting from one individual, find the extinction probability. (Type a fraction.)", a / c, fr(a, c),
        "The mean offspring number is " + fr(m + 2 * c, d) + " > 1, so q is the smallest root of G(s) = s in [0, 1]. Multiplying G(s) = s by " + d + " gives " + c + "s² − " + (a + c) + "s + " + a + " = 0, which factors as (s − 1)(" + c + "s − " + a + ") = 0. So q = " + fr(a, c) + "."); },
    // 3. stationary distribution of a birth–death chain (detailed balance)
    function () { var d = pick([4, 5, 6, 8]), a = R(1, d - 1), b, c, e; do { b = R(1, d - 1); c = R(1, d - 1); } while (b + c > d); e = R(1, d - 1);
      var w = [b * e, a * e, a * c], t = w[0] + w[1] + w[2], k = R(0, 2);
      return num("A Markov chain on {1, 2, 3} has p(1,2) = " + fr(a, d) + ", p(1,1) = " + fr(d - a, d) + "; p(2,1) = " + fr(b, d) + ", p(2,3) = " + fr(c, d) + ", p(2,2) = " + fr(d - b - c, d) + "; p(3,2) = " + fr(e, d) + ", p(3,3) = " + fr(d - e, d) + ". Find the stationary probability π(" + (k + 1) + "). (Type a fraction.)", w[k] / t, fr(w[k], t),
        "Detailed balance: π(1)·" + fr(a, d) + " = π(2)·" + fr(b, d) + " and π(2)·" + fr(c, d) + " = π(3)·" + fr(e, d) + ". So π ∝ (" + b * e + ", " + a * e + ", " + a * c + "), which sums to " + t + ". Hence π(" + (k + 1) + ") = " + fr(w[k], t) + "."); },
    // 4. biased gambler's ruin
    function () { var o = pick([[1, 3, 2, 1], [2, 5, 3, 2], [3, 4, 1, 3]]), N = R(4, 10), k = R(1, N - 1);
      // o = [p numerator, p denominator, q/p numerator, q/p denominator]
      var u = o[2], v = o[3], num1 = Math.pow(u, k) * Math.pow(v, N - k) - Math.pow(v, N), den = Math.pow(u, N) - Math.pow(v, N);
      return num("A gambler starts with " + k + (k === 1 ? " unit" : " units") + " and bets one unit at a time, winning each bet with probability " + fr(o[0], o[1]) + ", until reaching 0 or " + N + ". Find the probability of reaching " + N + ". (Type a fraction.)", num1 / den, fr(num1, den),
        "With r = q/p = " + fr(u, v) + ", the process r^(Sₙ) is a martingale, and optional stopping gives P(reach N) = (r" + sup(k) + " − 1)/(r" + sup(N) + " − 1) = " + fr(num1, den) + "."); },
    // 5. CLT with continuity correction for dice
    function () { var n = 12 * R(5, 40), mu = 3.5 * n, sd = Math.sqrt(n * 35 / 12), t = Math.round(mu + sd * (R(3, 20) / 10));
      var z = (t + 0.5 - mu) / sd, v = 1 - prPhi(z);
      return num("A fair die is rolled " + n + " times. Using the normal approximation with continuity correction, estimate P(total &gt; " + t + "). (Round to 3 decimal places.)", prR(v, 3), prS(v, 3),
        "One roll has mean 3.5 and variance 35/12, so the total has mean " + mu + " and variance " + (n * 35 / 12) + " (sd ≈ " + prS(sd, 3) + "). P(total ≥ " + (t + 1) + ") ≈ 1 − Φ((" + (t + 0.5) + " − " + mu + ")/" + prS(sd, 3) + ") = 1 − Φ(" + prS(z, 3) + ") ≈ " + prS(v, 3) + ".", { tol: 0.0015 }); },
    // 6. Poisson process: conditional uniformity gives a binomial
    function () { var n = R(3, 6), b = R(3, 6), a = R(1, b - 1), k = R(1, n - 1);
      var top = C(n, k) * Math.pow(a, k) * Math.pow(b - a, n - k), bot = Math.pow(b, n);
      return num("For a Poisson process, exactly " + n + " arrivals occur in [0, " + b + "]. Find the probability that exactly " + k + " of them occur in [0, " + a + "]. (Type a fraction.)", top / bot, fr(top, bot),
        "Given N(" + b + ") = " + n + ", the arrival times are i.i.d. Uniform(0, " + b + "), so the count in [0, " + a + "] is Binomial(" + n + ", " + fr(a, b) + "): C(" + n + "," + k + ")(" + fr(a, b) + ")" + sup(k) + "(" + fr(b - a, b) + ")" + sup(n - k) + " = " + fr(top, bot) + "."); },
    // 7. coupon collector
    function () { var n = R(3, 9), hn = 0, hd = 1;
      for (var j = 1; j <= n; j++) { hn = hn * j + hd; hd = hd * j; var g = gcd(hn, hd); hn /= g; hd /= g; }
      return num("Coupons of " + n + " equally likely types are collected one at a time. Find the expected number of coupons needed to collect every type. (Type a fraction or whole number.)", n * hn / hd, fr(n * hn, hd),
        "When k types are held, the wait for a new type is Geometric((" + n + " − k)/" + n + ") with mean " + n + "/(" + n + " − k). Summing, E T = " + n + "(1 + 1/2 + ⋯ + 1/" + n + ") = " + n + " × " + fr(hn, hd) + " = " + fr(n * hn, hd) + "."); },
    // 8. fourth moment of a normal variable
    function () { var m = nz(-4, 4), s = R(1, 3), v = Math.pow(m, 4) + 6 * m * m * s * s + 3 * Math.pow(s, 4);
      return num("Let X ~ N(" + f(m) + ", " + (s * s) + "). Compute E X⁴.", v, null,
        "Write X = μ + σZ. Odd moments of Z vanish, E Z² = 1 and E Z⁴ = 3 (from M(t) = e^(t²/2)). So E X⁴ = μ⁴ + 6μ²σ² + 3σ⁴ = " + Math.pow(m, 4) + " + " + (6 * m * m * s * s) + " + " + (3 * Math.pow(s, 4)) + " = " + v + "."); },
    // 9. variance of a compound Poisson sum
    function () { var l = R(2, 9), mu = R(2, 6), t = pick(["exp", "const"]);
      var ey2 = t === "exp" ? 2 * mu * mu : mu * mu, v = l * ey2;
      return num("Let N ~ Poisson(" + l + ") and let Y₁, Y₂, … be i.i.d., independent of N, with " + (t === "exp" ? "the exponential law of mean " + mu : "Yᵢ = " + mu + " always") + ". Find Var(Y₁ + ⋯ + Y_N).", v, null,
        "Conditioning on N: Var S = E N · Var Y + Var N · (E Y)² = λ E Y² = " + l + " × " + ey2 + " = " + v + (t === "exp" ? " (here E Y² = 2 × " + mu + "²)." : ".")); },
    // 10. Borel–Cantelli: a.s. versus in probability
    function () { var e = pick([["1/2", 0.5], ["1", 1], ["3/2", 1.5], ["2", 2]]), ind = pick([true, false]);
      var good = e[1] > 1 ? "Xₙ → 0 almost surely and in probability" : (ind ? "Xₙ → 0 in probability but not almost surely" : "Xₙ → 0 in probability; almost sure convergence is not determined by this information");
      var all = ["Xₙ → 0 almost surely and in probability", "Xₙ → 0 in probability but not almost surely", "Xₙ → 0 in probability; almost sure convergence is not determined by this information", "Xₙ → 0 almost surely but not in probability", "Xₙ does not converge to 0 in probability"];
      var why = "P(Xₙ ≠ 0) = n^(−" + e[0] + ") → 0, so Xₙ → 0 in probability. " + (e[1] > 1 ? "The series ∑ n^(−" + e[0] + ") converges, so by the first Borel–Cantelli lemma (no independence needed) Xₙ = 0 eventually, almost surely."
        : "The series ∑ n^(−" + e[0] + ") diverges. " + (ind ? "With independence, the second Borel–Cantelli lemma gives Xₙ = 1 infinitely often a.s., so there is no a.s. convergence." : "Without independence the second lemma does not apply: Xₙ = 1{U &lt; n^(−" + e[0] + ")} for one uniform U converges a.s., while independent Xₙ do not."));
      return ch("Let Xₙ take the value 1 with probability n^(−" + e[0] + ") and 0 otherwise" + (ind ? ", independently for n = 1, 2, …" : " (nothing is assumed about the joint law)") + ". Which statement is correct?", good, all.filter(function (s) { return s !== good; }), why); },
    // 11. two-state chain after n steps
    function () { var a = R(1, 8) / 10, b = R(1, 8) / 10, n = R(3, 12), lam = prR(1 - a - b, 1), v = b / (a + b) + a / (a + b) * Math.pow(lam, n);
      return num("A Markov chain on {1, 2} has p(1,2) = " + a + " and p(2,1) = " + b + ". Find Pⁿ(1,1) for n = " + n + ". (Round to 4 decimal places.)", prR(v, 4), prS(v, 4),
        "Pⁿ(1,1) = b/(a + b) + (a/(a + b))(1 − a − b)ⁿ = " + prS(b / (a + b), 4) + " + " + prS(a / (a + b), 4) + " × (" + f(lam) + ")" + sup(n) + " ≈ " + prS(v, 4) + ".", { tol: 0.00011 }); },
    // 12. waiting time for a coin pattern (martingale / overlap argument)
    function () { var L = R(3, 4), w = ""; for (var i = 0; i < L; i++) w += pick(["H", "T"]);
      var v = prPat(w), parts = [];
      for (var k = 1; k <= L; k++) if (w.slice(0, k) === w.slice(L - k)) parts.push("2" + sup(k));
      return num("A fair coin is tossed until the pattern <b>" + w + "</b> first appears. Find the expected number of tosses.", v, null,
        "By the fair-gamblers martingale argument, E T = ∑ 2ᵏ over the lengths k for which the first k letters of " + w + " equal its last k letters: " + parts.join(" + ") + " = " + v + "."); },
    // 13. Hoeffding sample size
    function () { var eps = pick([0.01, 0.02, 0.025, 0.05, 0.1]), del = pick([0.01, 0.05, 0.1]);
      var x = Math.log(2 / del) / (2 * eps * eps), n = Math.ceil(x - 1e-9);
      return num("Using Hoeffding's inequality P(|X̄ₙ − p| ≥ ε) ≤ 2e^(−2nε²) for i.i.d. Bernoulli trials, find the smallest n for which this bound guarantees P(|X̄ₙ − p| ≥ " + eps + ") ≤ " + del + ".", n, null,
        "We need 2e^(−2n·" + eps + "²) ≤ " + del + ", that is n ≥ ln(" + prR(2 / del, 0) + ")/(2 × " + prR(eps * eps, 6) + ") ≈ " + prS(x, 2) + ". So n = " + n + "."); },
    // 14. Chernoff bound for a Poisson tail
    function () { var l, a, v; do { l = R(2, 10); a = l + R(3, 8); v = Math.exp(-l) * Math.pow(Math.E * l / a, a); } while (v < 0.002);
      return num("For X ~ Poisson(" + l + "), the optimised Chernoff bound is P(X ≥ a) ≤ e^(−λ)(eλ/a)^a. Evaluate it for a = " + a + ". (Round to 4 decimal places.)", prR(v, 4), prS(v, 4),
        "Minimising e^(−ta) exp(λ(eᵗ − 1)) over t gives eᵗ = a/λ, and the bound e^(−" + l + ")(" + l + "e/" + a + ")" + sup(a) + " ≈ " + prS(v, 4) + ".", { tol: 0.00011 }); }
  ];
