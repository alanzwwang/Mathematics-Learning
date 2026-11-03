  G["fractions"] = (function () {
    // multiplicative order of b modulo n (gcd(b, n) = 1, n > 1)
    function ordMod(b, n) { var x = b % n, k = 1; while (x !== 1) { x = (x * b) % n; k++; } return k; }
    function isPrime(n) { if (n < 2) return false; for (var d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; }
    function phi(n) { var r = n, m = n; for (var d = 2; d * d <= m; d++) if (m % d === 0) { while (m % d === 0) m /= d; r -= r / d; } if (m > 1) r -= r / m; return r; }
    function vp(n, q) { var v = 0; while (n % q === 0) { n /= q; v++; } return v; }
    function inv(a, m) { a = ((a % m) + m) % m; for (var x = 1; x < m; x++) if ((a * x) % m === 1) return x; return -1; }
    // continued fraction of a positive rational h/k
    function cf(h, k) { var a = []; while (k) { a.push(Math.floor(h / k)); var t = h % k; h = k; k = t; } return a; }
    // fundamental solution of x^2 - N y^2 = 1 via the continued fraction of sqrt(N)
    function pell(N) {
      var a0 = Math.floor(Math.sqrt(N)), m = 0, d = 1, a = a0, p0 = 1, p1 = a0, q0 = 0, q1 = 1, guard = 0;
      while (p1 * p1 - N * q1 * q1 !== 1 && guard++ < 200) {
        m = d * a - m; d = (N - m * m) / d; a = Math.floor((a0 + m) / d);
        var p2 = a * p1 + p0, q2 = a * q1 + q0; p0 = p1; p1 = p2; q0 = q1; q1 = q2;
      }
      return [p1, q1];
    }
    var PELL_N = [2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 50];
    return [
      // 1. period of 1/n via the order of 10
      function () {
        var n; do { n = R(7, 199); } while (gcd(n, 10) !== 1 || n % 3 === 0 && n < 30);
        var t = ordMod(10, n), parts = [];
        var m = n, fs = [];
        for (var d = 3; d <= m; d++) if (m % d === 0) { var e = 0; while (m % d === 0) { m /= d; e++; } fs.push(d + (e > 1 ? sup(e) : "")); }
        return num("Let n = " + n + ". What is the length of the repeating block (the period) of the decimal expansion of 1/" + n + "?", t, null,
          "Since gcd(" + n + ", 10) = 1, the expansion is purely periodic and the period is ord_" + n + "(10), the least t with 10^t ≡ 1 (mod " + n + "). Here " + n + " = " + fs.join("·") + " and the least such t is " + t + "; it divides λ(" + n + ") and φ(" + n + ") = " + phi(n) + "."); },
      // 2. preperiod and period of a/n with n = 2^α 5^β m
      function () {
        var al, be, m, n, a, ask; do { al = R(0, 5); be = R(0, 4); m = pick([1, 3, 7, 9, 11, 13, 21, 27, 37, 41]); n = Math.pow(2, al) * Math.pow(5, be) * m; } while (n < 12 || n > 20000 || al === be);
        do { a = R(1, n - 1); } while (gcd(a, n) !== 1);
        ask = m === 1 ? "pre" : pick(["pre", "per"]);
        var s0 = Math.max(al, be), t0 = m === 1 ? 0 : ordMod(10, m);
        var fact = (al ? "2" + (al > 1 ? sup(al) : "") : "") + (al && be ? "·" : "") + (be ? "5" + (be > 1 ? sup(be) : "") : "") + (m > 1 ? "·" + m : "");
        var why = "Write " + n + " = " + fact + ". The preperiod is max(α, β) = max(" + al + ", " + be + ") = " + s0 + (m === 1 ? ", and since no other prime divides " + n + " the expansion terminates." : ", and the period is ord_" + m + "(10) = " + t0 + ".");
        if (ask === "pre") return num("How many digits come <b>before</b> the repeating part of the decimal expansion of " + a + "/" + n + "? (For a terminating expansion, count all digits after the point.)", s0, null, why);
        return num("What is the <b>period</b> of the decimal expansion of " + a + "/" + n + "?", t0, null, why); },
      // 3. evaluate a finite continued fraction
      function () {
        var a = [R(0, 3)], len = R(4, 6); while (a.length < len) a.push(R(1, 9)); a.push(R(2, 9));
        var p0 = 1, p1 = a[0], q0 = 0, q1 = 1, ps = [p1], qs = [q1];
        for (var i = 1; i < a.length; i++) { var p2 = a[i] * p1 + p0, q2 = a[i] * q1 + q0; p0 = p1; p1 = p2; q0 = q1; q1 = q2; ps.push(p1); qs.push(q1); }
        return num("Evaluate the continued fraction <b>[" + a[0] + "; " + a.slice(1).join(", ") + "]</b>. (Type a fraction in lowest terms.)", p1 / q1, fr(p1, q1),
          "Use p_n = a_n p_(n−1) + p_(n−2) and q_n = a_n q_(n−1) + q_(n−2). Numerators: " + ps.join(", ") + "; denominators: " + qs.join(", ") + ". So the value is " + p1 + "/" + q1 + " (automatically reduced, since p_n q_(n−1) − p_(n−1) q_n = ±1).", { lowest: true }); },
      // 4. a partial quotient of h/k
      function () {
        var h, k, a; do { k = R(20, 199); h = R(k + 1, 4 * k); a = cf(h, k); } while (gcd(h, k) !== 1 || a.length < 4);
        var steps = [], x = h, y = k;
        while (y) { steps.push(x + " = " + Math.floor(x / y) + "·" + y + " + " + (x % y)); var t = x % y; x = y; y = t; }
        return num("Let " + h + "/" + k + " = [a₀; a₁, a₂, …] be its continued fraction (with last partial quotient ≥ 2). What is <b>a₂</b>?", a[2], null,
          "Run the Euclidean algorithm: " + steps.join(", ") + ". The quotients give " + h + "/" + k + " = [" + a[0] + "; " + a.slice(1).join(", ") + "], so a₂ = " + a[2] + "."); },
      // 5. Pell's equation
      function () {
        var N = pick(PELL_N), s = pell(N), x = s[0], y = s[1];
        var ask = pick(["x", "y"]);
        return num("Find the fundamental (smallest positive) solution of <b>x² − " + N + "y² = 1</b>. Type the value of <b>" + ask + "</b>.", ask === "x" ? x : y, null,
          "Expand √" + N + " as a continued fraction and test the convergents p/q: the first with p² − " + N + "q² = 1 is " + x + "/" + y + ". Check: " + big(x) + "² − " + N + "·" + big(y) + "² = " + big(x * x) + " − " + big(N * y * y) + " = 1."); },
      // 6. left Farey neighbour
      function () {
        var k, h, n; do { k = R(5, 20); h = R(1, k - 1); n = R(k + 1, k + 12); } while (gcd(h, k) !== 1);
        var hi = inv(h, k), b = hi; while (b + k <= n) b += k;
        var a = (h * b - 1) / k;
        return num("In the Farey sequence F_" + n + ", what fraction comes immediately <b>before</b> " + h + "/" + k + "? (Type a fraction.)", a / b, fr(a, b),
          "The left neighbour a/b satisfies " + h + "b − " + k + "a = 1, so b ≡ " + h + "⁻¹ ≡ " + hi + " (mod " + k + "), and b must be as large as possible with b ≤ " + n + ": b = " + b + ", a = (" + h + "·" + b + " − 1)/" + k + " = " + a + ". So the neighbour is " + a + "/" + b + ".", { lowest: true }); },
      // 7. Ford circles
      function () {
        var p1, q1, p2, q2, D; do { q1 = R(2, 15); q2 = R(2, 15); p1 = R(1, q1 - 1); p2 = R(1, q2 - 1); D = Math.abs(p1 * q2 - q1 * p2); } while (gcd(p1, q1) !== 1 || gcd(p2, q2) !== 1 || D === 0 || (D !== 1 && Math.random() < 0.6));
        if (D === 1) {
          // tangent pair: ask for the height of the point of contact, 1/(q₁² + q₂²)
          var H = q1 * q1 + q2 * q2;
          return num("The Ford circles C(" + p1 + "/" + q1 + ") and C(" + p2 + "/" + q2 + ") are tangent. What is the <b>height (y-coordinate) of their point of contact</b>? (Type a fraction.)", 1 / H, "1/" + H,
            "Here |" + p1 + "·" + q2 + " − " + q1 + "·" + p2 + "| = 1, so the circles touch. The contact point divides the segment between the centres in the ratio of the radii, which gives the point ((ab + cd)/(b² + d²), 1/(b² + d²)) for neighbours a/b, c/d. Its height is 1/(" + q1 + "² + " + q2 + "²) = 1/" + H + ".", { lowest: true });
        }
        // disjoint pair: ask for D² − (ρ₁ + ρ₂)² = (Δ² − 1)/(q₁²q₂²)
        var gN = D * D - 1, gD = q1 * q1 * q2 * q2;
        return num("For the Ford circles C(" + p1 + "/" + q1 + ") and C(" + p2 + "/" + q2 + "), let D be the distance between their centres and ρ₁, ρ₂ their radii. Compute <b>D² − (ρ₁ + ρ₂)²</b>. (Type a fraction.)", gN / gD, fr(gN, gD),
          "By the computation in Theorem 6.1, D² − (ρ₁ + ρ₂)² = ((ps − qr)² − 1)/(q²s²). Here |" + p1 + "·" + q2 + " − " + q1 + "·" + p2 + "| = " + D + ", so the value is (" + D + "² − 1)/(" + q1 + "²·" + q2 + "²) = " + gN + "/" + gD + " = " + fr(gN, gD) + " > 0, and the circles are disjoint.", { lowest: true }); },
      // 8. p-adic absolute value
      function () {
        var p = pick([2, 3, 5, 7]), e1, e2, u, w;
        do { e1 = R(0, 4); e2 = R(0, 4); u = R(1, 30); w = R(1, 30); } while (u % p === 0 || w % p === 0 || gcd(u, w) !== 1 || e1 === e2);
        var top = u * Math.pow(p, e1), bot = w * Math.pow(p, e2), g = gcd(top, bot); top /= g; bot /= g;
        var v = vp(top, p) - vp(bot, p), val = Math.pow(p, -v);
        return num("Compute the " + p + "-adic absolute value <b>|" + top + "/" + bot + "|_" + p + "</b>. (Type an integer or a fraction.)", val, v > 0 ? "1/" + Math.pow(p, v) : String(Math.pow(p, -v)),
          "v_" + p + "(" + top + "/" + bot + ") = v_" + p + "(" + top + ") − v_" + p + "(" + bot + ") = " + vp(top, p) + " − " + vp(bot, p) + " = " + f(v) + ", so |x|_" + p + " = " + p + "^(" + f(-v) + ") = " + (v > 0 ? "1/" + Math.pow(p, v) : Math.pow(p, -v)) + "."); },
      // 9. 2-adic valuation of a harmonic number
      function () {
        var n = R(3, 200), k = Math.floor(Math.log(n) / Math.LN2 + 1e-12);
        return num("Let H_" + n + " = 1 + 1/2 + ⋯ + 1/" + n + ". What is <b>v₂(H_" + n + ")</b>?", -k, null,
          "The largest power of 2 not exceeding " + n + " is 2" + sup(k) + " = " + Math.pow(2, k) + ", and it is the only j ≤ " + n + " with v₂(j) = " + k + ". So the term 1/" + Math.pow(2, k) + " has strictly the smallest 2-adic valuation, −" + k + ", and by the strict ultrametric inequality v₂(H_" + n + ") = −" + k + "."); },
      // 10. greedy Egyptian fraction
      function () {
        var a, b; do { b = R(7, 40); a = R(2, b - 1); } while (gcd(a, b) !== 1);
        var n1 = Math.ceil(b / a), A = a * n1 - b, B = b * n1, g = gcd(A, B); A /= g; B /= g;
        var n2 = Math.ceil(B / A);
        return num("Apply the greedy (Fibonacci–Sylvester) algorithm to " + a + "/" + b + ". What is the <b>second</b> denominator produced?", n2, null,
          "First ⌈" + b + "/" + a + "⌉ = " + n1 + ", and " + a + "/" + b + " − 1/" + n1 + " = " + fr(A, B) + ". Next ⌈" + B + "/" + A + "⌉ = " + n2 + ", so the second unit fraction is 1/" + n2 + "."); },
      // 11. partial fractions by the cover-up rule
      function () {
        var r, s, m, c; do { r = R(-6, 6); s = R(-6, 6); m = R(1, 7); c = R(-9, 9); } while (r === s || m * r + c === 0 || m * s + c === 0);
        var num1 = m * r + c, den = r - s;
        var Q = "(x" + plusMinus(-r).replace(" + 0", "").replace(" − 0", "") + ")(x" + plusMinus(-s).replace(" + 0", "").replace(" − 0", "") + ")";
        return num("Write <b>(" + poly([m, c]) + ")/(" + Q.replace("(x)", "x") + ")</b> = A/" + (r === 0 ? "x" : "(x" + plusMinus(-r) + ")") + " + B/" + (s === 0 ? "x" : "(x" + plusMinus(-s) + ")") + ". What is <b>A</b>? (Type a fraction if needed.)", num1 / den, fr(num1, den),
          "Cover-up rule: multiply by (x" + (r === 0 ? "" : plusMinus(-r)) + ") and set x = " + f(r) + ": A = (" + f(m) + "·" + p(r) + (c ? plusMinus(c) : "") + ")/(" + f(r) + " − " + p(s) + ") = " + f(num1) + "/" + p(den) + " = " + fr(num1, den) + ".", { lowest: true }); },
      // 12. Hensel lifting of a square root
      function () {
        var P = pick([7, 11, 13, 17, 19, 23]), r = R(1, P - 1), t = R(1, P - 1), A = (r * r + P * t) % (P * P);
        var c = ((A - r * r) / P % P + P) % P, sidx = (c * inv(2 * r, P)) % P, x = r + P * sidx;
        return num("Find the integer x with 0 ≤ x &lt; " + (P * P) + ", x ≡ " + r + " (mod " + P + ") and <b>x² ≡ " + A + " (mod " + (P * P) + ")</b>.", x, null,
          "Hensel's lemma: write x = " + r + " + " + P + "s. Then x² ≡ " + (r * r) + " + " + (2 * r * P) + "s (mod " + (P * P) + "), so we need " + (2 * r) + "s ≡ (" + A + " − " + (r * r) + ")/" + P + " ≡ " + c + " (mod " + P + "), giving s = " + sidx + " and x = " + x + ". Check: " + x + "² = " + (x * x) + " ≡ " + ((x * x) % (P * P)) + " (mod " + (P * P) + ")."); },
      // 13. length of a Farey sequence
      function () {
        var n = R(12, 60), s = 1, terms = [];
        for (var k = 1; k <= n; k++) { s += phi(k); terms.push(phi(k)); }
        if (Math.random() < 0.5) return num("How many fractions of the Farey sequence <b>F_" + n + "</b> lie strictly between 0 and 1/2?", (s - 3) / 2, null,
          "|F_n| = 1 + φ(1) + ⋯ + φ(n). Here the totients are " + terms.join(", ") + ", so |F_" + n + "| = " + s + ". The map x ↦ 1 − x permutes F_" + n + " and fixes only 1/2, so the " + s + " − 3 = " + (s - 3) + " terms other than 0, 1/2 and 1 split evenly: " + ((s - 3) / 2) + " lie in (0, 1/2).");
        return num("How many fractions does the Farey sequence <b>F_" + n + "</b> contain (including 0/1 and 1/1)?", s, null,
          "|F_n| = 1 + φ(1) + ⋯ + φ(n). Here the totients are " + terms.join(", ") + ", whose sum is " + (s - 1) + ", so |F_" + n + "| = " + s + "."); },
      // 14. period length of the continued fraction of √N
      function () {
        var N, a0; do { N = R(10, 120); a0 = Math.floor(Math.sqrt(N)); } while (a0 * a0 === N);
        var m = 0, d = 1, a = a0, block = [];
        do { m = d * a - m; d = (N - m * m) / d; a = Math.floor((a0 + m) / d); block.push(a); } while (a !== 2 * a0);
        var L = block.length;
        return num("The continued fraction of <b>√" + N + "</b> is eventually periodic. What is the length ℓ of its period?", L, null,
          "Run the algorithm m_(k+1) = d_k a_k − m_k, d_(k+1) = (N − m_(k+1)²)/d_k, a_(k+1) = ⌊(a₀ + m_(k+1))/d_(k+1)⌋ with a₀ = " + a0 + ". It gives √" + N + " = [" + a0 + "; " + block.join(", ") + ", …], and the block ends at the first partial quotient equal to 2a₀ = " + (2 * a0) + ". So ℓ = " + L + (L % 2 ? " (odd, so x² − " + N + "y² = −1 is solvable)." : " (even, so x² − " + N + "y² = −1 has no solution).")); }
    ];
  })();
