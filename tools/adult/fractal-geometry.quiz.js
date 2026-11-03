  G["fractal-geometry"] = (function () {
    var LN = Math.log, l2 = function (x) { return Math.log(x) / Math.LN2; };
    var d3 = function (x) { return x.toFixed(3); };
    var dec = function (x) { return f(+x.toFixed(4)); };
    return [
      // similarity dimension, equal ratios (OSC holds)
      function () { var m, N, dim, kind;
        do { kind = R(0, 1); m = kind ? R(3, 6) : R(3, 9); N = kind ? R(m + 1, m * m - 1) : R(2, m - 1); dim = LN(N) / LN(m); } while (Math.abs(dim - Math.round(dim)) < 1e-9);
        var what = kind ? "Divide the unit square into a " + m + " × " + m + " grid of subsquares and keep " + N + " of them, then repeat inside every kept square (the open set condition holds)."
                        : "An IFS on ℝ consists of " + N + " similarities of ratio 1/" + m + " whose images are disjoint subintervals of [0, 1].";
        return num(what + " What is the Hausdorff dimension of the attractor? (Round to 3 decimal places.)", dim, d3(dim),
          "With the OSC, dim_H = similarity dimension, the root of " + N + "·(1/" + m + ")ˢ = 1: s = log " + N + " / log " + m + " = " + (LN(N)).toFixed(4) + " / " + (LN(m)).toFixed(4) + " ≈ " + d3(dim) + ".", { tol: 0.0015 }); },
      // Moran equation with ratios 1/2 and 1/4
      function () { var a, b, u, s;
        do { a = R(1, 3); b = R(1, 4); } while (2 * a + b === 4);
        u = (-a + Math.sqrt(a * a + 4 * b)) / (2 * b); s = -l2(u);
        return num("An IFS of similarities of ℝ² satisfying the open set condition has " + a + " map" + (a > 1 ? "s" : "") + " of ratio 1/2 and " + b + " map" + (b > 1 ? "s" : "") + " of ratio 1/4. Solve Moran's equation for the dimension s. (Round to 3 decimal places.)", s, d3(s),
          "Moran: " + a + "·2⁻ˢ + " + b + "·4⁻ˢ = 1. Put u = 2⁻ˢ: " + b + "u² + " + a + "u − 1 = 0, so u = (−" + a + " + √" + (a * a + 4 * b) + ")/" + (2 * b) + " ≈ " + u.toFixed(5) + ", and s = −log₂ u ≈ " + d3(s) + ".", { tol: 0.0015 }); },
      // box dimension of {k^(-p)}
      function () { var a, b; do { a = R(1, 6); b = R(1, 4); } while (gcd(a, b) !== 1);
        var pS = b === 1 ? String(a) : a + "/" + b;
        return num("Find the box-counting dimension of F = {0} ∪ { k<sup>−p</sup> : k ∈ ℕ } with p = " + pS + ". (Type a fraction.)", b / (a + b), fr(b, a + b),
          "For {k⁻ᵖ} the points are δ-separated up to k ≈ δ^(−1/(p+1)) and the rest fills an interval needing about the same number of δ-intervals, so dim_B = 1/(1 + p) = 1/(1 + " + pS + ") = " + fr(b, a + b) + ". (Its Hausdorff dimension is 0: it is countable.)", { lowest: true }); },
      // Bedford–McMullen carpet
      function () { var n, t1, t2, wantH;
        do { n = R(3, 5); t1 = R(1, n); t2 = R(1, n); } while (t1 === t2);
        wantH = R(0, 1); var th = LN(2) / LN(n), N = t1 + t2;
        var dH = l2(Math.pow(t1, th) + Math.pow(t2, th)), dB = 1 + LN(N / 2) / LN(n), ans = wantH ? dH : dB;
        return num("A Bedford–McMullen carpet uses a grid of " + n + " columns and 2 rows (rectangles of width 1/" + n + ", height 1/2), choosing " + t1 + " rectangle" + (t1 > 1 ? "s" : "") + " in the top row and " + t2 + " in the bottom row. Find its <b>" + (wantH ? "Hausdorff" : "box-counting") + "</b> dimension. (Round to 3 decimal places.)", ans, d3(ans),
          (wantH ? "McMullen: θ = log 2/log " + n + " ≈ " + th.toFixed(4) + ", dim_H = log₂(" + t1 + "^θ + " + t2 + "^θ) = log₂(" + (Math.pow(t1, th) + Math.pow(t2, th)).toFixed(4) + ") ≈ " + d3(dH) + "."
                 : "dim_B = log_m r + log_n(N/r) with m = 2, r = 2 rows used, N = " + N + ": 1 + log_" + n + "(" + N + "/2) ≈ " + d3(dB) + ".") +
          " (For comparison, the other dimension is " + d3(wantH ? dB : dH) + "; dim_H &lt; dim_B since the rows are unequal.)", { tol: 0.0015 }); },
      // logistic 2-cycle multiplier
      function () { var k = R(1, 44), r = 3 + k / 100, lam = -r * r + 2 * r + 4;
        return num("For the logistic map g(x) = r x(1 − x) with r = " + r.toFixed(2) + ", compute the multiplier (g²)′ of the 2-cycle. (Round to 4 decimal places.)", lam, dec(lam),
          "The 2-cycle points x± satisfy x₊ + x₋ = (r + 1)/r and x₊x₋ = (r + 1)/r², so (g²)′ = r²(1 − 2x₊)(1 − 2x₋) = −r² + 2r + 4 = −" + (r * r).toFixed(4) + " + " + (2 * r).toFixed(2) + " + 4 = " + dec(lam) + ". It lies in (−1, 1): the cycle is attracting (3 &lt; r &lt; 1 + √6).", { tol: 0.00006 }); },
      // real slice of M
      function () { var c; do { c = R(-240, 50) / 100; } while (c === 0); var inM = c >= -2 && c <= 0.25;
        return ch("For f(z) = z² + c with c = " + f(c) + ", what is the filled Julia set K<sub>c</sub>?", inM ? "Connected (c ∈ M)" : "A Cantor set (c ∉ M)", [inM ? "A Cantor set (c ∉ M)" : "Connected (c ∈ M)", "Empty", "A smooth Jordan curve"],
          "M ∩ ℝ = [−2, 1/4]. " + (c > 0.25 ? "For c > 1/4, z² + c > z for all real z, so the orbit of 0 increases without a fixed point to converge to and escapes." : c < -2 ? "For c &lt; −2, z₂ = c² + c > |c| > 2, so the orbit of 0 escapes." : "For −2 ≤ c ≤ 1/4, f maps [−β, β] into itself (β the larger fixed point), so the critical orbit is bounded.") + " By the Fatou–Julia dichotomy, K_c is " + (inM ? "connected" : "a Cantor set") + "; K_c is never empty (it contains the fixed points)."); },
      // escape time
      function () { var k = R(3, 20), c = k / 10, z = 0, n = 0, orb = [];
        while (Math.abs(z) <= 2) { z = z * z + c; n++; orb.push(+z.toFixed(4)); }
        return num("Let c = " + c + " and z₀ = 0, z<sub>n+1</sub> = z<sub>n</sub>² + c. What is the first n with |z<sub>n</sub>| &gt; 2?", n, null,
          "Orbit: " + orb.map(function (v, i) { return "z" + sub(i + 1) + " ≈ " + v; }).join(", ") + ". Once |z| > 2 ≥ |c| the orbit escapes (Lemma 9.1), so c ∉ M, consistent with c > 1/4."); },
      // Hausdorff distance, finite set vs interval
      function () { var L = R(8, 20), k = R(2, 4), pts = [], i, gap = 0, h;
        while (pts.length < k) { var x = R(0, L); if (pts.indexOf(x) < 0) pts.push(x); }
        pts.sort(function (a, b) { return a - b; });
        for (i = 1; i < k; i++) gap = Math.max(gap, pts[i] - pts[i - 1]);
        h = Math.max(pts[0], L - pts[k - 1], gap / 2);
        return num("Compute the Hausdorff distance h(P, [0, " + L + "]) in ℝ, where P = {" + pts.join(", ") + "}. (Type a decimal if needed.)", h, String(h),
          "P ⊂ [0, " + L + "], so h = sup over x ∈ [0, " + L + "] of d(x, P). The worst points are the ends (distances " + pts[0] + " and " + (L - pts[k - 1]) + ") and the midpoint of the largest gap (" + gap + "/2 = " + (gap / 2) + "). Maximum: " + h + "."); },
      // a priori iterations for a contraction
      function () { var k = R(2, 5), D = R(1, 9), m = R(2, 4), n = 0, P = 1, T = D * k * Math.pow(10, m);
        while ((k - 1) * P <= T) { P *= k; n++; }
        return num("A contraction of a complete metric space has ratio c = 1/" + k + ", and d(x₀, x₁) = " + D + ". What is the least n for which the a priori bound cⁿ/(1 − c)·d(x₀, x₁) is less than 10<sup>−" + m + "</sup>?", n, null,
          "Need " + D + "·" + k + "⁻ⁿ·" + k + "/" + (k - 1) + " &lt; 10⁻" + sup(m) + ", i.e. " + (k - 1) + "·" + k + "ⁿ > " + big(T) + ". " + (k - 1) + "·" + k + sup(n - 1) + " = " + big((k - 1) * Math.pow(k, n - 1)) + " fails and " + (k - 1) + "·" + k + sup(n) + " = " + big((k - 1) * Math.pow(k, n)) + " works, so n = " + n + "."); },
      // binomial multifractal
      function () { var P = pick([[1, 3], [1, 4], [1, 5], [2, 5], [1, 10], [3, 10]]), p = P[0] / P[1], q = 1 - p, t = R(0, 3), ans, why;
        if (t === 0) { ans = -l2(p * p + q * q); why = "D₂ = τ(2) = −log₂(p² + (1 − p)²) = −log₂(" + (p * p + q * q).toFixed(4) + ") ≈ " + d3(ans) + "."; }
        else if (t === 1) { ans = -(p * l2(p) + q * l2(q)); why = "D₁ = τ′(1) = −p log₂ p − (1 − p) log₂(1 − p), the binary entropy H(p) ≈ " + d3(ans) + "."; }
        else if (t === 2) { ans = -l2(q); why = "α_min = −log₂(max weight) = −log₂(" + fr(P[1] - P[0], P[1]) + ") ≈ " + d3(ans) + " (the most concentrated points, where the heavier half is always chosen)."; }
        else { ans = -0.5 * l2(p * q); why = "f(α) = 1 is attained at α = τ′(0) = −(1/2)log₂(p(1 − p)) = −(1/2)log₂(" + (p * q).toFixed(4) + ") ≈ " + d3(ans) + "."; }
        var asks = ["the correlation dimension D₂", "the information dimension D₁", "α_min", "the value of α at which f(α) = 1"];
        return num("For the binomial measure on [0, 1] with weights p = " + fr(P[0], P[1]) + " (left half) and 1 − p (right half), compute " + asks[t] + ". (Round to 3 decimal places.)", ans, d3(ans), why, { tol: 0.0015 }); },
      // main cardioid multiplier
      function () { var j; do { j = R(1, 19); } while (j === 10);
        var c = (100 - j * j) / 400, mu = (10 - j) / 10;
        return num("For f(z) = z² + c with c = " + dec(c) + ", find the multiplier of the attracting fixed point. (Type a decimal.)", mu, f(mu),
          "Fixed points: z = (1 ± √(1 − 4c))/2 with 1 − 4c = " + dec(1 - 4 * c) + ", √ = " + (j / 10) + ". The multiplier is 2z = 1 ± " + (j / 10) + "; the attracting one is 1 − " + (j / 10) + " = " + f(mu) + " (|μ| &lt; 1), so c = μ/2 − μ²/4 lies in the main cardioid."); },
      // Weierstrass graph dimension
      function () { var b = R(3, 9), k = R(2, b - 1), d = 2 - LN(k) / LN(b);
        return num("Find the box-counting dimension of the graph of W(t) = ∑ aᵏ cos(2π bᵏ t) with a = 1/" + k + " and b = " + b + ". (Round to 3 decimal places.)", d, d3(d),
          "Here 0 &lt; a &lt; 1 and ab = " + fr(b, k) + " > 1, so dim_B = 2 + log a / log b = 2 − log " + k + " / log " + b + " ≈ 2 − " + (LN(k) / LN(b)).toFixed(4) + " = " + d3(d) + ".", { tol: 0.0015 }); },
      // fractional Brownian motion
      function () { var H = R(1, 9) / 10, d = R(1, 4), t = R(0, 1), ans, why;
        if (t === 0) { ans = 2 - H; why = "The graph of B_H has dimension 2 − H = " + (+(2 - H).toFixed(1)) + " almost surely (upper bound from Hölder continuity of every order below H, lower bound from the energy method)."; }
        else { ans = Math.min(d, 1 / H); why = "The path B_H[0, 1] ⊂ ℝ" + sup(d) + " has dimension min{d, 1/H} = min{" + d + ", " + (+(1 / H).toFixed(4)) + "} = " + (+ans.toFixed(4)) + "."; }
        return num("Fractional Brownian motion with Hurst index H = " + H + ": what is the almost-sure Hausdorff dimension of " + (t ? "its path in ℝ" + sup(d) : "its graph over [0, 1]") + "? (Round to 3 decimal places.)", ans, d3(ans), why, { tol: 0.0015 }); }
    ];
  })();
