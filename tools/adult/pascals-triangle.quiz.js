  G["pascals-triangle"] = (function () {
    // exact binomial coefficient for moderate sizes (keeps every intermediate value an integer)
    function B(n, k) { if (k < 0 || k > n) return 0; k = Math.min(k, n - k); var r = 1; for (var i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); }
    function digits(n, b) { var d = []; do { d.push(n % b); n = Math.floor(n / b); } while (n > 0); return d; } // lowest digit first
    function inBase(n, b) { return digits(n, b).slice().reverse().join("") + sub(b); }
    function ds(n, b) { return digits(n, b).reduce(function (s, x) { return s + x; }, 0); }
    function v2(n) { var c = 0; while (n % 2 === 0) { n /= 2; c++; } return c; }
    function term(c, v, e) { // coefficient c in front of v^e inside a sum, e.g. "2x", "−y", "3z"
      return (c < 0 ? "−" : "") + (Math.abs(c) === 1 ? "" : Math.abs(c)) + v;
    }
    return [
      // 0: negative exponent, upper negation
      function () { var m = R(2, 6), k = R(3, 7), c = pick([1, 2, 3]), s = pick([1, -1]);
        var base = B(m + k - 1, k), sign = s === 1 ? 1 : (k % 2 ? -1 : 1), ans = sign * base * Math.pow(c, k);
        var inner = "(1 " + (s === 1 ? "− " : "+ ") + (c === 1 ? "" : c) + "x)";
        return num("Find the coefficient of x" + sup(k) + " in " + inner + sup("-" + m) + ".", ans, null,
          "By upper negation, (1 − y)" + sup("-" + m) + " = ∑ C(" + m + " + j − 1, j) y" + "ʲ. Here y = " + (s === 1 ? "" : "−") + (c === 1 ? "" : c) + "x, so the coefficient is C(" + (m + k - 1) + ", " + k + ") · " + (s === 1 ? "" : "(−1)" + sup(k) + " · ") + (c === 1 ? "1" : c + sup(k)) + " = " + big(base) + " · " + p(sign * Math.pow(c, k)) + " = " + f(ans) + "."); },
      // 1: fractional exponents: coefficient of x^k in (1 + cx)^(r/s)
      function () { var s = pick([2, 3, 4]), k = R(2, 5), c = pick([1, -1, 2, -2, 3, 4]), r;
        do { r = nz(-7, 7); } while (gcd(Math.abs(r), s) !== 1);
        var N = 1, D = Math.pow(s, k) * fact(k), fs = [];
        for (var j = 0; j < k; j++) { N *= r - j * s; fs.push("(" + f(r - j * s) + "/" + s + ")"); }
        N *= Math.pow(c, k);
        var al = f(r) + "/" + s, base = "(1 " + (c < 0 ? "− " : "+ ") + (Math.abs(c) === 1 ? "" : Math.abs(c)) + "x)";
        return num("Find the coefficient of x" + sup(k) + " in " + base + "<sup>" + al + "</sup>. (Type a fraction.)", N / D, fr(N, D),
          "By Newton's binomial series the coefficient is C(" + al + ", " + k + ") · " + p(c) + sup(k) + ", with C(" + al + ", " + k + ") = " + fs.join("") + "/" + k + "!. This gives " + f(N) + "/" + D + " = " + fr(N, D) + ".", { lowest: true }); },
      // 2: Lucas' theorem
      function () { var p = pick([3, 5, 7]), n = R(100, 999), k = R(1, n - 1);
        var dn = digits(n, p), dk = digits(k, p), r = 1, parts = [];
        for (var i = dn.length - 1; i >= 0; i--) { var a = dn[i], b = dk[i] || 0; parts.push("C(" + a + ", " + b + ")"); r = r * B(a, b) % p; }
        return num("Using Lucas' theorem, compute C(" + n + ", " + k + ") mod " + p + ". (Give the residue 0 to " + (p - 1) + ".)", r, null,
          n + " = " + inBase(n, p) + " and " + k + " = " + inBase(k, p) + ". Lucas: C(" + n + ", " + k + ") ≡ " + parts.join(" · ") + " ≡ " + r + " (mod " + p + ")" + (r === 0 ? ", because some digit of " + k + " exceeds the matching digit of " + n : "") + "."); },
      // 3: Kummer's theorem
      function () { var p = pick([2, 3, 5]), n = R(60, 999), k = R(1, n - 1), m = n - k;
        var v = (ds(k, p) + ds(m, p) - ds(n, p)) / (p - 1);
        return num("Find the exponent of " + p + " in C(" + n + ", " + k + "), i.e. v" + sub(p) + " C(" + n + ", " + k + ").", v, null,
          "Kummer: v" + sub(p) + " = (s(" + k + ") + s(" + m + ") − s(" + n + "))/(" + p + " − 1), digit sums in base " + p + ": " + k + " = " + inBase(k, p) + ", " + m + " = " + inBase(m, p) + ", " + n + " = " + inBase(n, p) + ". So v" + sub(p) + " = (" + ds(k, p) + " + " + ds(m, p) + " − " + ds(n, p) + ")/" + (p - 1) + " = " + v + ", the number of carries in " + k + " + " + m + " in base " + p + "."); },
      // 4: Fine's theorem
      function () { var p = pick([2, 3, 5, 7]), n = R(200, 3000), d = digits(n, p), prod = 1, fac = [];
        for (var i = d.length - 1; i >= 0; i--) { prod *= d[i] + 1; fac.push("(" + d[i] + " + 1)"); }
        var div = Math.random() < 0.5;
        return num("How many entries of row " + n + " of Pascal's triangle are " + (div ? "" : "NOT ") + "divisible by " + p + "?", div ? n + 1 - prod : prod, null,
          n + " = " + inBase(n, p) + ". By Lucas/Fine, the number of entries not divisible by " + p + " is " + fac.join("") + " = " + prod + (div ? ". The row has " + (n + 1) + " entries, so " + (n + 1) + " − " + prod + " = " + (n + 1 - prod) + " are divisible by " + p + "." : ".")); },
      // 5: odd entries in the first N rows (binary-block formula)
      function () { var N, e = [];
        do { N = R(20, 1000); e = []; for (var b = 10; b >= 0; b--) if (N & (1 << b)) e.push(b); } while (e.length < 2);
        var ans = 0, parts = [];
        e.forEach(function (x, i) { var t = Math.pow(2, i) * Math.pow(3, x); ans += t; parts.push((i ? Math.pow(2, i) + " · " : "") + "3" + sup(x)); });
        return num("How many odd entries are there in rows 0 through " + (N - 1) + " of Pascal's triangle?", ans, big(ans),
          N + " = " + e.map(function (x) { return "2" + sup(x); }).join(" + ") + ". Row n has 2" + "ˢ⁽ⁿ⁾ odd entries (Glaisher), and splitting rows 0 to N − 1 into blocks of 2ᵉ consecutive rows, one for each binary 1 of N, the rows of the (i + 1)th block carry i extra binary ones, so that block contributes 2ⁱ · 3ᵉ. Hence the count is " + parts.join(" + ") + " = " + big(ans) + "."); },
      // 6: Gaussian coefficients count subspaces
      function () { var q = pick([2, 3, 4, 5]), n = R(3, q === 2 ? 7 : 5), k = R(1, n - 1), num1 = 1, den = 1, ns = [], dsx = [];
        for (var i = 0; i < k; i++) { num1 *= Math.pow(q, n - i) - 1; den *= Math.pow(q, k - i) - 1; ns.push(Math.pow(q, n - i) - 1); dsx.push(Math.pow(q, k - i) - 1); }
        var ans = Math.round(num1 / den);
        return num("How many " + k + "-dimensional subspaces does the vector space F" + sub(q) + sup(n) + " have?", ans, big(ans),
          "The number is the Gaussian coefficient [" + n + " " + k + "]" + sub(q) + " = ∏ (q" + "ⁿ⁻ⁱ − 1)/(q" + "ᵏ⁻ⁱ − 1) = (" + ns.join(" · ") + ")/(" + dsx.join(" · ") + ") = " + big(ans) + "."); },
      // 7: ballot theorem, counting version
      function () { var a = R(6, 15), b = R(2, a - 1), tot = B(a + b, a), t = R(0, 1);
        if (t === 0) { var ans = (a - b) * tot / (a + b);
          return num("Candidate A receives " + a + " votes and B receives " + b + ". Of the C(" + (a + b) + ", " + a + ") = " + big(tot) + " possible orders in which the votes can be counted (as sequences of A's and B's), how many keep A strictly ahead from the first vote to the last?", ans, big(ans),
            "Bertrand's ballot theorem: the proportion of good orders is (a − b)/(a + b), so the count is ((" + a + " − " + b + ")/(" + a + " + " + b + ")) · " + big(tot) + " = " + big(ans) + ". Equivalently C(a + b − 1, a − 1) − C(a + b − 1, a) by reflection."); }
        return num("Candidate A receives " + a + " votes and B receives " + b + ". The votes are counted in uniformly random order. What is the probability that A is never behind B during the count (ties allowed)? (Type a fraction.)", (a + 1 - b) / (a + 1), fr(a + 1 - b, a + 1),
          "Never behind means the lattice path of the count stays weakly above the diagonal, so the number of good orders is the ballot number ((a − b + 1)/(a + 1)) · C(a + b, b) (reflection, or prepend an extra vote for A). Dividing by C(a + b, b) gives (a + 1 − b)/(a + 1) = " + (a + 1 - b) + "/" + (a + 1) + " = " + fr(a + 1 - b, a + 1) + ".", { lowest: true }); },
      // 8: ballot numbers / paths below the diagonal
      function () { var a = R(4, 12), b = R(2, a), tot = B(a + b, b), ans = (a - b + 1) * tot / (a + 1);
        return num("Count the lattice paths from (0, 0) to (" + a + ", " + b + ") with unit steps east and north that never go above the line y = x.", ans, big(ans),
          "Ballot number: ((a − b + 1)/(a + 1)) · C(a + b, b) = (" + (a - b + 1) + "/" + (a + 1) + ") · C(" + (a + b) + ", " + b + ") = (" + (a - b + 1) + "/" + (a + 1) + ") · " + big(tot) + " = " + big(ans) + (a === b ? ", the Catalan number C" + sub(a) : "") + "."); },
      // 9: 2-adic valuation of Catalan numbers
      function () { var n = R(10, 600), s = ds(n + 1, 2), v = s - 1;
        return num("Find v" + sub(2) + "(C" + sub(n) + "), the exponent of 2 in the Catalan number C" + sub(n) + " = C(" + (2 * n) + ", " + n + ")/" + (n + 1) + ".", v, null,
          "v" + sub(2) + "(C" + sub(n) + ") = v" + sub(2) + " C(2n, n) − v" + sub(2) + "(n + 1) = s" + sub(2) + "(n) − v" + sub(2) + "(n + 1). Here " + n + " = " + inBase(n, 2) + " has " + ds(n, 2) + " ones and " + (n + 1) + " = " + inBase(n + 1, 2) + " is divisible by exactly 2" + sup(v2(n + 1)) + ", so the answer is " + ds(n, 2) + " − " + v2(n + 1) + " = " + v + " (equivalently s" + sub(2) + "(n + 1) − 1 = " + s + " − 1)."); },
      // 10: multinomial coefficient with weights
      function () { var n = R(4, 7), a = R(1, n - 2), b = R(1, n - a - 1), c = n - a - b, al = nz(-3, 3), be = nz(-3, 3), ga = nz(-3, 3);
        var mc = fact(n) / (fact(a) * fact(b) * fact(c)), w = Math.pow(al, a) * Math.pow(be, b) * Math.pow(ga, c), ans = mc * w;
        var poly3 = term(al, "x") + (be < 0 ? " − " : " + ") + term(Math.abs(be), "y") + (ga < 0 ? " − " : " + ") + term(Math.abs(ga), "z");
        var mono = "x" + (a > 1 ? sup(a) : "") + "y" + (b > 1 ? sup(b) : "") + "z" + (c > 1 ? sup(c) : "");
        return num("Find the coefficient of " + mono + " in (" + poly3 + ")" + sup(n) + ".", ans, big(ans).replace("-", "−"),
          "Multinomial theorem: C(" + n + "; " + a + ", " + b + ", " + c + ") · " + p(al) + (a > 1 ? sup(a) : "") + " · " + p(be) + (b > 1 ? sup(b) : "") + " · " + p(ga) + (c > 1 ? sup(c) : "") + " = " + mc + " · " + f(w) + " = " + f(ans) + "."); },
      // 11: alternating partial sums
      function () { var n = R(10, 25), m = R(2, n - 3), ans = (m % 2 ? -1 : 1) * B(n - 1, m);
        return num("Evaluate ∑ (−1)" + "ᵏ C(" + n + ", k) for k = 0 to " + m + ".", ans, big(Math.abs(ans)).replace(/^/, ans < 0 ? "−" : ""),
          "Telescoping with Pascal's rule gives ∑_{k=0}^{m} (−1)" + "ᵏ C(n, k) = (−1)" + "ᵐ C(n − 1, m) = (−1)" + sup(m) + " C(" + (n - 1) + ", " + m + ") = " + f(ans) + "."); },
      // 12: Chu–Vandermonde with negative upper indices
      function () { var a = R(1, 5), b = R(1, 5), n = R(3, 8), ans = B(a + b + n + 1, n);
        return num("Evaluate ∑ C(k + " + a + ", k) · C(" + n + " − k + " + b + ", " + n + " − k) for k = 0 to " + n + ".", ans, big(ans),
          "C(a + k, k) = (−1)" + "ᵏ C(−a − 1, k). By Chu–Vandermonde the sum is (−1)" + "ⁿ C(−a − b − 2, n) = C(a + b + n + 1, n) = C(" + (a + b + n + 1) + ", " + n + ") = " + big(ans) + "."); },
      // 13: asymptotics of C(an, bn)
      function () { var pr = pick([[2, 1], [3, 1], [3, 2], [4, 1], [4, 2], [4, 3], [5, 1], [5, 2], [5, 3], [5, 4], [6, 2], [6, 3]]), a = pr[0], b = pr[1], c = a - b;
        function fx(nu, de) { var g = gcd(nu, de); nu /= g; de /= g; return de === 1 ? nu + "ⁿ" : "(" + nu + "/" + de + ")ⁿ"; }
        function rt(nu, de) { var g = gcd(nu, de); nu /= g; de /= g; return nu === 1 ? "1/√(" + (de === 1 ? "" : de) + "πn)" : "√(" + nu + "/(" + (de === 1 ? "" : de) + "πn))"; }
        var BASE = fx(Math.pow(a, a), Math.pow(b, b) * Math.pow(c, c)), correct = BASE + " · " + rt(a, 2 * b * c);
        var wrong = [BASE + " · " + rt(a, b * c), BASE + " · " + rt(a, 4 * b * c), fx(B(a, b), 1) + " · " + rt(a, 2 * b * c)];
        return ch("Which expression is asymptotically equivalent to C(" + (a === 1 ? "" : a) + "n, " + (b === 1 ? "" : b) + "n) as n → ∞?", correct, wrong,
          "Stirling: for 0 < b < a, C(an, bn) ~ (aᵃ/(bᵇ(a − b)" + "ᵃ⁻ᵇ))ⁿ · √(a/(2πb(a − b)n)). With a = " + a + ", b = " + b + " this is " + correct + ". The base C(" + a + ", " + b + ")ⁿ is too small: C(a, b) < aᵃ/(bᵇ(a − b)ᵃ⁻ᵇ)."); }
    ];
  })();
