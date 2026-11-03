  G["exponential-growth"] = (function () {
    var LN2 = Math.log(2);
    var d = function (x, k) { return x.toFixed(k); };
    var cl = function (x) { return String(Math.round(x * 10000) / 10000); };   // tidy decimal, e.g. 0.84
    var HIER = [
      { s: "(ln n)⁵", l: "5 ln ln n" },
      { s: "√n", l: "(1/2) ln n" },
      { s: "n³", l: "3 ln n" },
      { s: "n^(ln n)", l: "(ln n)²" },
      { s: "2^(√n)", l: "√n · ln 2" },
      { s: "1.01ⁿ", l: "n ln 1.01" },
      { s: "2ⁿ", l: "n ln 2" },
      { s: "n² · 2ⁿ", l: "n ln 2 + 2 ln n" },
      { s: "3ⁿ", l: "n ln 3" },
      { s: "n!", l: "n ln n − n + O(ln n)" },
      { s: "nⁿ", l: "n ln n" },
      { s: "2^(2ⁿ)", l: "2ⁿ ln 2" }
    ];
    function finalSize(R0) { var z = 0.99; for (var i = 0; i < 400; i++) z = 1 - Math.exp(-R0 * z); return z; }
    return [
      // 1. doubling time from two observations
      function () { var A = 20 * R(5, 45), c = pick([1.5, 2.5, 3, 4, 5, 6, 8, 10]), B = A * c, T = R(2, 15), k = Math.log(c) / T, T2 = LN2 / k;
        return num("A quantity obeys y′ = ky and grows from " + big(A) + " to " + big(B) + " in " + T + " years. Find its doubling time in years. (Round to 2 decimal places.)", T2, d(T2, 2),
          "k = ln(" + big(B) + "/" + big(A) + ")/" + T + " = ln " + c + "/" + T + " ≈ " + d(k, 5) + " per year, so T₂ = ln 2/k = " + T + " · ln 2/ln " + c + " ≈ " + d(T2, 2) + " years.", { tol: 0.006 }); },
      // 2. force of interest
      function () { var r = R(2, 12), n = pick([2, 4, 12, 365]), del = 100 * n * Math.log(1 + r / (100 * n));
        var nm = { 2: "semi-annually", 4: "quarterly", 12: "monthly", 365: "daily" }[n];
        return num("A nominal annual rate of " + r + "% is compounded " + nm + ". Find the equivalent force of interest δ (continuous rate), as a percentage. (Round to 4 decimal places.)", del, d(del, 4),
          "The growth factor per year is (1 + " + cl(r / 100) + "/" + n + ")" + sup(n) + " = e^δ, so δ = " + n + " ln(1 + " + cl(r / 100) + "/" + n + ") ≈ " + d(del / 100, 6) + ", that is " + d(del, 4) + "%. It is below " + r + "% because compounding already adds interest on interest.", { tol: 0.00006 }); },
      // 3. radiocarbon age
      function () { var f0 = R(5, 95), t = 5730 * Math.log(100 / f0) / LN2;
        return num("A sample retains " + f0 + "% of its original carbon-14. Taking the half-life to be 5730 years, find its age in years. (Round to the nearest year.)", t, String(Math.round(t)),
          "N = N₀ e^(−λt) with λ = ln 2/5730. So t = (5730/ln 2) · ln(100/" + f0 + ") ≈ 8266.64 × " + d(Math.log(100 / f0), 5) + " ≈ " + Math.round(t) + " years.", { tol: 1 }); },
      // 4. decay chain: time of maximal daughter population
      function () { var a, b; do { a = R(1, 5); b = R(1, 6); } while (a === b);
        var ts = Math.log(b / a) / (b - a), mx = Math.pow(a / b, b / (b - a));
        return num("In the decay chain A → B → C, A decays with rate λ_A = " + a + " per hour and B with rate λ_B = " + b + " per hour. Starting from pure A, at what time (in hours) is the amount of B largest? (Round to 3 decimal places.)", ts, d(ts, 3),
          "N_B(t) = N₀ λ_A/(λ_B − λ_A) · (e^(−λ_A t) − e^(−λ_B t)). Setting N_B′ = 0 gives λ_A e^(−λ_A t) = λ_B e^(−λ_B t), so t* = ln(λ_B/λ_A)/(λ_B − λ_A) = ln(" + fr(b, a) + ")/" + p(b - a) + " ≈ " + d(ts, 3) + " h. (The maximum is N_B/N₀ = (λ_A/λ_B)^(λ_B/(λ_B − λ_A)) ≈ " + d(mx, 4) + ".)", { tol: 0.0006 }); },
      // 5. logistic: time to reach a level
      function () { var K = pick([500, 1000, 2000, 5000]), P0 = K * R(2, 20) / 100, P1 = K * R(50, 95) / 100, r = R(1, 9) / 10;
        var t = Math.log(P1 * (K - P0) / (P0 * (K - P1))) / r;
        return num("A population obeys P′ = " + r + "P(1 − P/" + K + ") with P(0) = " + big(P0) + ". When does it reach " + big(P1) + "? (Round to 2 decimal places.)", t, d(t, 2),
          "P(t) = K/(1 + ((K − P₀)/P₀) e^(−rt)). Solving for t: e^(rt) = P₁(K − P₀)/(P₀(K − P₁)) = " + big(P1) + " · " + big(K - P0) + "/(" + big(P0) + " · " + big(K - P1) + ") ≈ " + d(P1 * (K - P0) / (P0 * (K - P1)), 4) + ", so t = ln(that)/" + r + " ≈ " + d(t, 2) + ".", { tol: 0.006 }); },
      // 6. logistic with constant harvesting
      function () { var r = R(2, 9) / 10, K = pick([1000, 2000, 4000, 5000]), msy = r * K / 4, h = Math.round(msy * R(20, 90) / 100), disc = Math.sqrt(1 - 4 * h / (r * K)), Pp = K / 2 * (1 + disc);
        return num("A fish stock obeys P′ = " + r + "P(1 − P/" + K + ") − " + h + " (constant harvest). Find the stable equilibrium population. (Round to 1 decimal place.)", Pp, d(Pp, 1),
          "Equilibria solve (r/K)P² − rP + h = 0, so P± = (K/2)(1 ± √(1 − 4h/(rK))) = " + (K / 2) + "(1 ± √(1 − " + cl(4 * h / (r * K)) + ")). The maximum sustainable yield is rK/4 = " + cl(msy) + " > " + h + ", so both exist; f′ < 0 at the larger one, P₊ ≈ " + d(Pp, 1) + " (P₋ ≈ " + d(K / 2 * (1 - disc), 1) + " is an unstable threshold).", { tol: 0.06 }); },
      // 7. phase portrait classification
      function () { var a, b, c, e, tr, de;
        do { a = R(-5, 5); b = R(-5, 5); c = R(-5, 5); e = R(-5, 5); tr = a + e; de = a * e - b * c; } while (de === 0 || tr * tr === 4 * de || (b === 0 && c === 0));
        var ty = de < 0 ? "Saddle" : tr === 0 ? "Centre" : (tr < 0 ? "Stable " : "Unstable ") + (tr * tr > 4 * de ? "node" : "spiral");
        var all = ["Saddle", "Centre", "Stable node", "Stable spiral", "Unstable node", "Unstable spiral"].filter(function (x) { return x !== ty; });
        return ch("Classify the equilibrium at the origin of x′ = Ax, where A = " + mat([[a, b], [c, e]]), ty, shuffle(all),
          "τ = tr A = " + f(tr) + ", Δ = det A = " + f(de) + ", τ² − 4Δ = " + f(tr * tr - 4 * de) + ". " + (de < 0 ? "Δ < 0: real eigenvalues of opposite sign, a saddle." : tr === 0 ? "Δ > 0 and τ = 0: purely imaginary eigenvalues, a centre." : "Δ > 0, so the eigenvalues have the sign of τ (" + (tr < 0 ? "negative real parts" : "positive real parts") + "); τ² − 4Δ " + (tr * tr > 4 * de ? "> 0 gives real eigenvalues, a node." : "< 0 gives complex eigenvalues, a spiral."))); },
      // 8. off-diagonal entry of e^A for a triangular matrix
      function () { var a, e2; do { a = R(-3, 2); e2 = R(-3, 2); } while (a === e2);
        var b = nz(-4, 4), v = b * (Math.exp(e2) - Math.exp(a)) / (e2 - a);
        return num("Let A = " + mat([[a, b], [0, e2]]) + " Find the (1, 2) entry of e^A. (Round to 3 decimal places.)", v, d(v, 3),
          "Here λ₁ = " + f(a) + " and λ₂ = " + f(e2) + ". The diagonal entries of e^(tA) are e^(λ₁t) and e^(λ₂t), and the (1, 2) entry c(t) solves c′ = λ₁c " + (b < 0 ? "− " + (-b) : "+ " + b) + " · e^(λ₂t), c(0) = 0, so c(t) = " + f(b) + "(e^(λ₂t) − e^(λ₁t))/(λ₂ − λ₁). At t = 1: " + f(b) + " × (" + d(Math.exp(e2), 4) + " − " + d(Math.exp(a), 4) + ")/" + p(e2 - a) + " ≈ " + d(v, 3) + ".", { tol: 0.0006 }); },
      // 9. Liouville: det e^(tA) = e^(t tr A)
      function () { var M = [], i, j, t = R(2, 5); for (i = 0; i < 3; i++) { M.push([]); for (j = 0; j < 3; j++) M[i].push(R(-6, 6)); }
        var tr = M[0][0] + M[1][1] + M[2][2];
        return num("Let A = " + mat(M) + " Find ln det(e^(" + t + "A)).", t * tr, null,
          "Liouville's formula: det e^B = e^(tr B). So ln det e^(" + t + "A) = " + t + " · tr A = " + t + " × (" + f(M[0][0]) + " + " + p(M[1][1]) + " + " + p(M[2][2]) + ") = " + f(t * tr) + ". No exponential needs to be computed."); },
      // 10. Leslie matrix dominant eigenvalue
      function () { var r10 = R(11, 30), k = R(1, 9), f1 = (r10 - k) / 10, f2 = Math.round(r10 * k * 2) / 100, rho = r10 / 10;
        return num("A population with two age classes has Leslie matrix L = " + mat([[f1, f2], [0.5, 0]]) + " Find its long-run growth factor per time step (the dominant eigenvalue).", rho, cl(rho),
          "det(λI − L) = λ² − " + cl(f1) + "λ − " + cl(f2) + " × 0.5 = λ² − " + cl(f1) + "λ − " + cl(f2 / 2) + ". The discriminant is " + cl(f1) + "² + 4 × " + cl(f2 / 2) + " = " + cl((r10 + k) * (r10 + k) / 100) + " = " + cl((r10 + k) / 10) + "², so ρ = (" + cl(f1) + " + " + cl((r10 + k) / 10) + ")/2 = " + cl(rho) + " (the other root is −" + cl(k / 10) + ", smaller in modulus, as Perron–Frobenius predicts)."); },
      // 11. branching process extinction probability
      function () { var p0, p2, p1; do { p0 = R(1, 5); p2 = R(1, 8); p1 = 12 - p0 - p2; } while (p1 < 0 || p0 === p2);
        var q = p2 > p0 ? p0 / p2 : 1, m = (p1 + 2 * p2) / 12;
        return num("In a Galton–Watson process each individual has 0, 1 or 2 children with probabilities " + fr(p0, 12) + ", " + fr(p1, 12) + ", " + fr(p2, 12) + ". Starting from one individual, what is the probability of extinction? (Type a fraction, or 1.)", q, p2 > p0 ? fr(p0, p2) : "1",
          "The mean is m = " + fr(p1 + 2 * p2, 12) + (m > 1 ? " > 1" : " < 1") + ". The equation f(s) = s factorizes as (s − 1)(p₂s − p₀) = 0, with roots 1 and p₀/p₂ = " + fr(p0, p2) + ". The extinction probability is the smallest root in [0, 1]: " + (p2 > p0 ? fr(p0, p2) + "." : "1 (subcritical)."), { lowest: true }); },
      // 12. SIR final size
      function () { var R0 = R(13, 40) / 10, z = finalSize(R0);
        return ch("An SIR epidemic with R₀ = " + R0 + " starts in a fully susceptible population. Which number is the final fraction of the population ever infected?", d(z, 3), [d(1 - 1 / R0, 3), d(1 - (1 + Math.log(R0)) / R0, 3), d(1 / R0, 3), d(1 - Math.exp(-R0), 3)],
          "The final size z solves 1 − z = e^(−R₀z); here e^(−" + R0 + " × " + d(z, 3) + ") ≈ " + d(Math.exp(-R0 * z), 3) + " = 1 − " + d(z, 3) + ". It overshoots the herd-immunity threshold 1 − 1/R₀ ≈ " + d(1 - 1 / R0, 3) + "; the peak prevalence 1 − (1 + ln R₀)/R₀ ≈ " + d(1 - (1 + Math.log(R0)) / R0, 3) + " is much smaller."); },
      // 13. R0 from the early growth rate
      function () { var D = R(3, 10), Td = R(2, 8), rr = LN2 / Td, R0 = 1 + D * rr;
        return num("Early in an SIR epidemic, cases double every " + Td + " days, and the mean infectious period is " + D + " days. Estimate R₀. (Round to 2 decimal places.)", R0, d(R0, 2),
          "The early growth rate is r = ln 2/" + Td + " ≈ " + d(rr, 4) + " per day, and r = γ(R₀ − 1) with γ = 1/" + D + ". So R₀ = 1 + r/γ = 1 + " + D + " × " + d(rr, 4) + " ≈ " + d(R0, 2) + ".", { tol: 0.006 }); },
      // 14. asymptotic hierarchy
      function () { var idx = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).slice(0, 4), fast = Math.random() < 0.5;
        var best = fast ? Math.max.apply(null, idx) : Math.min.apply(null, idx);
        var others = idx.filter(function (i) { return i !== best; }).map(function (i) { return HIER[i].s; });
        var sorted = idx.slice().sort(function (x, y) { return x - y; });
        return ch("Which function grows " + (fast ? "FASTEST" : "SLOWEST") + " as n → ∞?", HIER[best].s, others,
          "Compare logarithms: " + sorted.map(function (i) { return "ln(" + HIER[i].s + ") = " + HIER[i].l; }).join("; ") + ". So " + sorted.map(function (i) { return HIER[i].s; }).join(" ≪ ") + "."); },
      // 15. growth of the free group
      function () { var k = R(2, 4), n = R(2, 5), ball = Math.random() < 0.5, w = 2 * k - 1;
        var v = ball ? (k * Math.pow(w, n) - 1) / (k - 1) : 2 * k * Math.pow(w, n - 1);
        return num("In the free group on " + k + " generators (generating set: the generators and their inverses), how many elements have word length " + (ball ? "at most " : "exactly ") + n + "?", v, null,
          "A reduced word of length j ≥ 1 has " + (2 * k) + " choices for its first letter and " + w + " for each later letter (anything except the inverse of the previous one): " + (2 * k) + " · " + w + "^(j − 1) words. " + (ball ? "Adding 1 for the identity: β(" + n + ") = 1 + ∑ " + (2 * k) + " · " + w + "^(j−1) = (" + k + " · " + w + sup(n) + " − 1)/" + (k - 1) + " = " + big(v) + "." : "For j = " + n + ": " + (2 * k) + " · " + w + sup(n - 1) + " = " + big(v) + ".")); },
      // 16. dominant root of a linear recurrence
      function () { var r1 = R(2, 6), r2 = nz(-(r1 - 1), r1 - 1), pp = r1 + r2, qq = -r1 * r2;
        return num("Let x₀ = 0, x₁ = 1 and x<sub>n+2</sub> = " + (pp === 1 ? "" : pp) + "x<sub>n+1</sub> " + (qq < 0 ? "− " + (-qq) : "+ " + qq) + "x<sub>n</sub>. Find lim x<sub>n+1</sub>/x<sub>n</sub>.", r1, null,
          "The characteristic polynomial λ² − " + (pp === 1 ? "" : pp) + "λ " + (qq < 0 ? "+ " + (-qq) : "− " + qq) + " = (λ − " + r1 + ")(λ " + (r2 < 0 ? "+ " + (-r2) : "− " + r2) + ") has roots " + r1 + " and " + f(r2) + ". Here xₙ = (" + r1 + "ⁿ − " + p(r2) + "ⁿ)/" + (r1 - r2) + ", and " + r1 + " strictly dominates in modulus, so the ratio tends to " + r1 + "."); },
      // 17. exponential recurrence T(n) = aT(n − 1) + b
      function () { var a = R(2, 4), b = R(1, 5), n = R(4, 8), v = b * (Math.pow(a, n) - 1) / (a - 1);
        return num("A recursive algorithm satisfies T(n) = " + a + "T(n − 1) + " + b + " with T(0) = 0. Find T(" + n + ").", v, null,
          "The fixed point is c = −" + fr(b, a - 1) + ", and T(n) − c = " + a + "(T(n − 1) − c), so T(n) = " + (b === a - 1 ? "" : fr(b, a - 1) + " · ") + "(" + a + "ⁿ − 1). For n = " + n + ": " + (b === a - 1 ? "" : fr(b, a - 1) + " × ") + "(" + big(Math.pow(a, n)) + " − 1) = " + big(v) + ". The running time is Θ(" + a + "ⁿ)."); }
    ];
  })();
