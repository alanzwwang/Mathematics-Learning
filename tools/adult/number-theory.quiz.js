  G["number-theory"] = (function () {
    var isPrime = function (n) { if (n < 2) return false; for (var d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
    var primesIn = function (a, b) { var o = []; for (var n = a; n <= b; n++) if (isPrime(n)) o.push(n); return o; };
    var pw = function (b, e, m) { var r = 1; b = ((b % m) + m) % m; while (e > 0) { if (e % 2 === 1) r = (r * b) % m; b = (b * b) % m; e = Math.floor(e / 2); } return r; };
    var inv = function (a, m) { for (var x = 1; x < m; x++) if ((a * x) % m === 1) return x; return 0; };
    var factors = function (n) { var o = [], d = 2; while (n > 1) { var e = 0; while (n % d === 0) { n /= d; e++; } if (e) o.push([d, e]); d++; } return o; };
    var fstr = function (n) { return factors(n).map(function (t) { return t[0] + (t[1] > 1 ? sup(t[1]) : ""); }).join(" · "); };
    var phi = function (n) { var r = n; factors(n).forEach(function (t) { r = r / t[0] * (t[0] - 1); }); return r; };
    var ord = function (a, p) { var k = 1, x = a % p; while (x !== 1) { x = (x * a) % p; k++; } return k; };
    var divisors = function (n) { var o = []; for (var d = 1; d <= n; d++) if (n % d === 0) o.push(d); return o; };
    var ex = function (b, e) { return e === 1 ? String(b) : b + sup(e); };
    var SMALLP = primesIn(7, 47), MIDP = primesIn(23, 199);
    return [
      // 0: Fermat reduction of a huge exponent
      function () { var p = pick(SMALLP), a = R(2, p - 1), k = R(200, 9999), r = k % (p - 1), v = pw(a, k, p);
        return num("Compute <b>" + a + sup(k) + " mod " + p + "</b> (answer in 0…" + (p - 1) + ").", v, null,
          "Since " + p + " is prime and " + p + " ∤ " + a + ", Fermat gives " + a + sup(p - 1) + " ≡ 1 (mod " + p + "). Now " + k + " = " + (p - 1) + " · " + Math.floor(k / (p - 1)) + " + " + r + ", so " + a + sup(k) + " ≡ " + ex(a, r) + " ≡ " + v + " (mod " + p + ")."); },
      // 1: modular inverse
      function () { var m, a; do { m = R(40, 400); a = R(2, m - 1); } while (gcd(a, m) !== 1);
        var x = inv(a, m), t = (a * x - 1) / m;
        return num("Find the inverse of <b>" + a + " modulo " + m + "</b>, as a number in 1…" + (m - 1) + ".", x, null,
          "gcd(" + a + ", " + m + ") = 1, so the inverse exists; the extended Euclidean algorithm gives " + x + ". Check: " + a + " · " + x + " = " + (a * x) + " = " + t + " · " + m + " + 1."); },
      // 2: Chinese remainder theorem with three moduli
      function () { var ms = [3, 4, 5, 7, 8, 9, 11, 13], a, b, c;
        do { a = pick(ms); b = pick(ms); c = pick(ms); } while (gcd(a, b) !== 1 || gcd(a, c) !== 1 || gcd(b, c) !== 1 || a * b * c > 1500);
        var M = a * b * c, x = R(0, M - 1);
        return num("Find the least non-negative x with <b>x ≡ " + (x % a) + " (mod " + a + "), x ≡ " + (x % b) + " (mod " + b + "), x ≡ " + (x % c) + " (mod " + c + ")</b>.", x, null,
          "The moduli are pairwise coprime, so by the Chinese remainder theorem there is exactly one solution modulo " + a + " · " + b + " · " + c + " = " + M + ". Solving one congruence at a time gives x = " + x + ". Check: " + x + " = " + Math.floor(x / a) + " · " + a + " + " + (x % a) + " = " + Math.floor(x / b) + " · " + b + " + " + (x % b) + " = " + Math.floor(x / c) + " · " + c + " + " + (x % c) + "."); },
      // 3: Euler's totient from the factorisation
      function () { var ps = [2, 3, 5, 7, 11, 13], n, k;
        do { n = 1; k = R(2, 3); var used = shuffle(ps).slice(0, k); used.forEach(function (q) { n *= Math.pow(q, R(1, 3)); }); } while (n > 60000 || n < 30);
        var fs = factors(n), v = phi(n);
        return num("Compute <b>φ(" + big(n) + ")</b>, Euler's totient.", v, null,
          big(n) + " = " + fstr(n) + ". By multiplicativity φ(n) = ∏ (pᵉ − pᵉ⁻¹) = " + fs.map(function (t) { return "(" + Math.pow(t[0], t[1]) + " − " + Math.pow(t[0], t[1] - 1) + ")"; }).join(" · ") + " = " + big(v) + "."); },
      // 4: Legendre symbol
      function () { var p, q; do { p = pick(MIDP); q = pick(MIDP); } while (p === q);
        var a = R(2, Math.min(p, q) - 2);
        var one = function (pp) { var res = pw(a, (pp - 1) / 2, pp) === 1, x = 0;
          if (res) { for (x = 1; (x * x) % pp !== a % pp; x++); }
          return { s: res ? "+1" : "−1", why: "(" + a + "/" + pp + ") ≡ " + a + sup((pp - 1) / 2) + " ≡ " + (res ? "1" : "−1") + " (mod " + pp + ")" + (res ? "; indeed " + x + "² = " + (x * x) + " ≡ " + a + " (mod " + pp + ")" : ", so " + a + " is a non-residue mod " + pp) }; };
        var A = one(p), B = one(q), all = ["+1", "−1"], opts = [];
        all.forEach(function (u) { all.forEach(function (v) { opts.push("(" + a + "/" + p + ") = " + u + ",  (" + a + "/" + q + ") = " + v); }); });
        var right = "(" + a + "/" + p + ") = " + A.s + ",  (" + a + "/" + q + ") = " + B.s;
        return ch("Evaluate the Legendre symbols <b>(" + a + "/" + p + ")</b> and <b>(" + a + "/" + q + ")</b> (" + p + " and " + q + " are prime).", right, opts.filter(function (o) { return o !== right; }),
          "Euler's criterion: " + A.why + ". Likewise " + B.why + "."); },
      // 5: multiplicative order
      function () { var p = pick(primesIn(11, 61)), a = R(2, p - 2), k = ord(a, p);
        var ds = divisors(p - 1);
        return num("Find the multiplicative order of <b>" + a + " modulo " + p + "</b>.", k, null,
          "The order divides p − 1 = " + (p - 1) + ", whose divisors are " + ds.join(", ") + ". Testing them in increasing order, the first d with " + a + "ᵈ ≡ 1 (mod " + p + ") is d = " + k + (k === p - 1 ? ", so " + a + " is a primitive root modulo " + p + "." : ".")); },
      // 6: sigma or tau
      function () { var n; do { n = R(60, 3000); } while (factors(n).length < 2);
        var fs = factors(n), t = R(0, 1);
        if (t === 0) { var s = 1; fs.forEach(function (q) { s *= (Math.pow(q[0], q[1] + 1) - 1) / (q[0] - 1); });
          return num("Compute <b>σ(" + n + ")</b>, the sum of all positive divisors of " + n + ".", s, null,
            n + " = " + fstr(n) + ". σ is multiplicative with σ(pᵉ) = (pᵉ⁺¹ − 1)/(p − 1), so σ(" + n + ") = " + fs.map(function (q) { return (Math.pow(q[0], q[1] + 1) - 1) / (q[0] - 1); }).join(" · ") + " = " + big(s) + "."); }
        var c = 1; fs.forEach(function (q) { c *= q[1] + 1; });
        return num("Compute <b>τ(" + n + ")</b>, the number of positive divisors of " + n + ".", c, null,
          n + " = " + fstr(n) + ", so τ(" + n + ") = ∏ (eᵢ + 1) = " + fs.map(function (q) { return q[1] + 1; }).join(" · ") + " = " + c + "."); },
      // 7: number of square roots of 1 modulo n
      function () { var e, odd, n;
        do { e = R(0, 5); odd = shuffle([3, 5, 7, 11, 13]).slice(0, R(1, 3)); n = Math.pow(2, e); odd.forEach(function (q) { n *= Math.pow(q, R(1, 2)); }); } while (n > 50000);
        var c2 = e <= 1 ? 1 : e === 2 ? 2 : 4, cnt = c2 * Math.pow(2, odd.length);
        return num("How many solutions modulo " + big(n) + " does <b>x² ≡ 1 (mod " + big(n) + ")</b> have?", cnt, null,
          big(n) + " = " + fstr(n) + ". By the CRT the count is the product over prime powers: each odd prime power contributes 2 (x ≡ ±1), and 2ᵉ contributes " + c2 + " (1 for e ≤ 1, 2 for e = 2, 4 for e ≥ 3; here e = " + e + "). Total: " + c2 + " · " + ex(2, odd.length) + " = " + cnt + "."); },
      // 8: Pell equation, the next solution
      function () { var T = [[2,3,2],[3,2,1],[5,9,4],[6,5,2],[7,8,3],[8,3,1],[10,19,6],[11,10,3],[12,7,2],[13,649,180],[14,15,4],[15,4,1],[17,33,8],[18,17,4],[19,170,39],[20,9,2],[21,55,12],[22,197,42],[23,24,5],[24,5,1],[26,51,10],[27,26,5],[28,127,24],[30,11,2],[31,1520,273],[32,17,3],[33,23,4],[34,35,6],[35,6,1],[37,73,12],[38,37,6],[39,25,4],[40,19,3],[41,2049,320],[42,13,2],[43,3482,531],[44,199,30],[45,161,24],[47,48,7],[48,7,1],[50,99,14],[51,50,7],[52,649,90],[54,485,66],[55,89,12],[56,15,2],[57,151,20],[59,530,69],[60,31,4],[62,63,8],[63,8,1],[65,129,16],[66,65,8],[68,33,4],[70,251,30]];
        var r = pick(T), d = r[0], x = r[1], y = r[2], X = x * x + d * y * y, Y = 2 * x * y, askX = Math.random() < 0.5;
        return num("The fundamental solution of <b>x² − " + d + "y² = 1</b> is (" + x + ", " + y + "). What is " + (askX ? "x" : "y") + " in the next solution (the second smallest with x, y > 0)?", askX ? X : Y, null,
          "The next solution comes from squaring the fundamental unit: (" + x + " + " + y + "√" + d + ")² = (" + x + "² + " + d + " · " + y + "²) + 2 · " + x + " · " + y + "√" + d + " = " + X + " + " + Y + "√" + d + ". Check: " + big(X * X) + " − " + d + " · " + big(Y * Y) + " = 1."); },
      // 9: RSA private exponent
      function () { var P = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37], p, q, e, ph;
        do { p = pick(P); q = pick(P); e = pick([3, 5, 7, 11, 13, 17]); ph = (p - 1) * (q - 1); } while (p === q || gcd(e, ph) !== 1);
        var d = inv(e, ph);
        return num("RSA with p = " + p + ", q = " + q + " and public exponent e = " + e + ". Find the private exponent <b>d</b> with 0 < d < φ(n) and ed ≡ 1 (mod φ(n)).", d, null,
          "n = " + (p * q) + " and φ(n) = " + (p - 1) + " · " + (q - 1) + " = " + ph + ". Since gcd(" + e + ", " + ph + ") = 1, the extended Euclidean algorithm gives d = " + d + ": " + e + " · " + d + " = " + (e * d) + " = " + ((e * d - 1) / ph) + " · " + ph + " + 1."); },
      // 10: one round of Miller-Rabin with base 2
      function () { var n, kind = R(0, 2);
        if (kind === 0) n = pick([2047, 3277, 4033, 4681, 8321, 15841, 29341, 42799, 49141, 52633, 65281, 74665, 80581, 85489, 88357, 90751, 561, 1105, 1729, 2465, 2821, 6601, 8911, 10585, 41041, 62745, 63973, 75361, 341, 645, 1387, 1905, 2701, 4369, 4371, 5461, 7957, 10261]);
        else { do { n = 2 * R(500, 49999) + 1; } while (isPrime(n) !== (kind === 1) || n % 3 === 0 || n % 5 === 0); }
        var s = 0, d = n - 1; while (d % 2 === 0) { d /= 2; s++; }
        var x = pw(2, d, n), seq = [x], pass = x === 1 || x === n - 1;
        for (var i = 1; i < s && !pass; i++) { x = (x * x) % n; seq.push(x); if (x === n - 1) pass = true; }
        return ch("Run one round of the Miller–Rabin test on <b>n = " + n + "</b> with base 2. What does it conclude?", pass ? "n passes: it is a strong probable prime to base 2" : "n is proved composite",
          [pass ? "n is proved composite" : "n passes: it is a strong probable prime to base 2", "n is proved prime"],
          "n − 1 = " + (n - 1) + " = " + ex(2, s) + " · " + d + ". The sequence 2" + sup(d) + ", then repeated squaring, gives " + seq.join(", ") + " (mod " + n + "). " +
          (pass ? "It starts at 1 or reaches −1 ≡ " + (n - 1) + ", so the test passes. (A pass is never a proof of primality" + (isPrime(n) ? "; here n happens to be prime.)" : ": " + n + " = " + fstr(n) + " is a strong pseudoprime to base 2.)")
                : "It neither starts at 1 nor reaches −1 ≡ " + (n - 1) + ", so n is composite" + (isPrime(n) ? "." : ": in fact " + n + " = " + fstr(n) + "."))); },
      // 11: representations as a sum of two squares
      function () { var n; do { n = R(25, 1500); } while (n % 4 === 3);
        var c = 0, m = Math.floor(Math.sqrt(n)); for (var x = -m; x <= m; x++) for (var y = -m; y <= m; y++) if (x * x + y * y === n) c++;
        var d1 = 0, d3 = 0; divisors(n).forEach(function (t) { if (t % 4 === 1) d1++; if (t % 4 === 3) d3++; });
        return num("How many ordered pairs of integers (x, y) satisfy <b>x² + y² = " + n + "</b>? (Signs and order count.)", c, null,
          "Jacobi's formula r₂(n) = 4(d₁(n) − d₃(n)), where dᵢ counts divisors ≡ i (mod 4). " + n + " = " + fstr(n) + " has d₁ = " + d1 + " and d₃ = " + d3 + ", so r₂ = 4 · (" + d1 + " − " + d3 + ") = " + c + "." + (c === 0 ? " (A prime ≡ 3 (mod 4) appears to an odd power.)" : "")); },
      // 12: number of primitive roots modulo a prime
      function () { var p = pick(primesIn(40, 500)), v = phi(p - 1);
        return num("How many primitive roots are there modulo the prime <b>" + p + "</b> (among 1, …, " + (p - 1) + ")?", v, null,
          "𝔽ₚ× is cyclic of order p − 1 = " + (p - 1) + " = " + fstr(p - 1) + ", and a cyclic group of order m has φ(m) generators. φ(" + (p - 1) + ") = " + v + "."); },
      // 13: sum of mu(d) d over divisors
      function () { var n; do { n = R(12, 3000); } while (factors(n).length < 2);
        var fs = factors(n), v = 1; fs.forEach(function (q) { v *= 1 - q[0]; });
        return num("Evaluate <b>∑ μ(d) · d</b>, summed over all positive divisors d of " + n + ".", v, null,
          "The function n ↦ ∑_d|n μ(d)d is multiplicative, and at pᵉ only d = 1 and d = p contribute: 1 − p. " + n + " = " + fstr(n) + ", so the sum is " + fs.map(function (q) { return "(1 − " + q[0] + ")"; }).join("") + " = " + f(v) + "."); }
    ];
  })();
