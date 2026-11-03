  // Adult (graduate-level) makers for Arithmetic
  var AR_PRIMES = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  var arIsPrime = function (n) { if (n < 2) return false; for (var d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
  var arFactor = function (n) { var out = [], d = 2; while (n > 1 && d * d <= n) { var e = 0; while (n % d === 0) { n /= d; e++; } if (e) out.push([d, e]); d++; } if (n > 1) out.push([n, 1]); return out; };
  var arFacStr = function (fs) { return fs.map(function (q) { return q[0] + (q[1] > 1 ? sup(q[1]) : ""); }).join(" · "); };
  var arPhi = function (n) { var r = n; arFactor(n).forEach(function (q) { r = r / q[0] * (q[0] - 1); }); return r; };
  var arMod = function (a, m) { return ((a % m) + m) % m; };
  var arPow = function (b, e, m) { var r = 1; b = arMod(b, m); while (e > 0) { if (e % 2 === 1) r = (r * b) % m; b = (b * b) % m; e = Math.floor(e / 2); } return r; };
  var arOrd = function (b, q) { var r = b % q, k = 1; while (r !== 1) { r = (r * b) % q; k++; } return k; };
  var arEgcd = function (a, b) { // returns [g, x, y] with a·x + b·y = g
    var r0 = a, r1 = b, x0 = 1, x1 = 0, y0 = 0, y1 = 1;
    while (r1 !== 0) { var q = Math.floor(r0 / r1), t; t = r0 - q * r1; r0 = r1; r1 = t; t = x0 - q * x1; x0 = x1; x1 = t; t = y0 - q * y1; y0 = y1; y1 = t; }
    return [r0, x0, y0];
  };
  var arLin = function (a, x, b, y) { return a + "·" + p(x) + (y < 0 ? " − " : " + ") + b + "·" + Math.abs(y); };
  var arBits = function (v, w) { var s = v.toString(2); while (s.length < w) s = "0" + s; return s; };

  G["arithmetic"] = [
    // 0. modular inverse by the extended Euclidean algorithm
    function () { var m, a; do { m = R(30, 199); a = R(2, m - 2); } while (gcd(a, m) !== 1);
      var e = arEgcd(a, m), inv = arMod(e[1], m);
      return num("Find the inverse of <b>" + a + "</b> in the ring ℤ/" + m + "ℤ, as a number between 0 and " + (m - 1) + ".", inv, null,
        "Since gcd(" + a + ", " + m + ") = 1, the extended Euclidean algorithm gives the Bézout identity " + arLin(a, e[1], m, e[2]) + " = 1. So " + a + "⁻¹ ≡ " + f(e[1]) + (e[1] !== inv ? " ≡ " + inv : "") + " (mod " + m + "). Check: " + a + " · " + inv + " = " + (a * inv) + " = " + Math.floor(a * inv / m) + " · " + m + " + 1."); },
    // 1. Chinese remainder theorem with three moduli
    function () { var M = pick([[3, 5, 7], [4, 5, 7], [3, 4, 5], [5, 7, 9], [4, 5, 9], [7, 8, 9], [5, 8, 9], [3, 7, 8]]), N = M[0] * M[1] * M[2], x = R(1, N - 1);
      var r = M.map(function (m) { return x % m; }), m12 = M[0] * M[1], x12 = 0;
      while (x12 % M[0] !== r[0] || x12 % M[1] !== r[1]) x12++;
      return num("Find the least nonnegative x with <b>x ≡ " + r[0] + " (mod " + M[0] + "), x ≡ " + r[1] + " (mod " + M[1] + "), x ≡ " + r[2] + " (mod " + M[2] + ")</b>.", x, null,
        "The moduli are pairwise coprime, so by the Chinese remainder theorem there is exactly one solution modulo " + N + ". The first two congruences combine to x ≡ " + x12 + " (mod " + m12 + "). Among " + x12 + ", " + (x12 + m12) + ", " + (x12 + 2 * m12) + ", … the first that is ≡ " + r[2] + " (mod " + M[2] + ") is " + x + "."); },
    // 2. Legendre's formula
    function () { var pr = pick([2, 3, 5, 7]), n = R(60, 2500), terms = [], s = 0, q = pr;
      while (q <= n) { terms.push(Math.floor(n / q)); s += Math.floor(n / q); q *= pr; }
      var zeros = pr === 5 && Math.random() < 0.5;
      return num(zeros ? "How many trailing zeros does <b>" + n + "!</b> have in decimal?" : "Compute the " + pr + "-adic valuation <b>v" + sub(pr) + "(" + n + "!)</b>, the exponent of " + pr + " in " + n + "!.", s, null,
        "Legendre's formula: v" + sub(pr) + "(" + n + "!) = Σ ⌊" + n + "/" + pr + "ᵏ⌋ = " + terms.join(" + ") + " = " + s + "." + (zeros ? " Since v₂(" + n + "!) ≥ v₅(" + n + "!), the number of factors 10 is v₅(" + n + "!) = " + s + "." : "")); },
    // 3. decimal period = multiplicative order of 10
    function () { var q = pick([7, 11, 13, 17, 19, 21, 23, 27, 29, 31, 33, 37, 39, 41, 43, 47, 49, 53, 59, 61, 63, 67, 71, 73, 77, 79, 81, 83, 89, 91, 97, 99, 101]), k = arOrd(10, q);
      return num("What is the length of the repeating period of the decimal expansion of <b>1/" + q + "</b>?", k, null,
        "Since gcd(" + q + ", 10) = 1, the expansion is purely periodic with period ord" + sub(q) + "(10), the least k ≥ 1 with 10ᵏ ≡ 1 (mod " + q + "). It divides φ(" + q + ") = " + arPhi(q) + ", and checking the divisors gives k = " + k + "."); },
    // 4. modular exponentiation via Fermat
    function () { var pr = pick(AR_PRIMES), a = R(2, pr - 1), e = R(1000, 999999), r = e % (pr - 1), v = arPow(a, e, pr);
      return num("Compute <b>" + a + sup(e) + " mod " + pr + "</b> (" + pr + " is prime).", v, null,
        "By Fermat's little theorem " + a + sup(pr - 1) + " ≡ 1 (mod " + pr + "), so reduce the exponent modulo " + (pr - 1) + ": " + e + " = " + Math.floor(e / (pr - 1)) + " · " + (pr - 1) + " + " + r + ". Then " + a + sup(e) + " ≡ " + a + sup(r) + " ≡ " + v + " (mod " + pr + "), by repeated squaring."); },
    // 5. Euler's totient
    function () { var n, fs; do { n = R(100, 6000); fs = arFactor(n); } while (fs.length < 2);
      var v = arPhi(n);
      return num("Compute Euler's totient <b>φ(" + n + ")</b>, the order of the unit group (ℤ/" + n + "ℤ)<sup>×</sup>.", v, null,
        n + " = " + arFacStr(fs) + ". Using φ(n) = n ∏ (1 − 1/p): φ(" + n + ") = " + fs.map(function (q) { return q[1] > 1 ? q[0] + (q[1] > 2 ? sup(q[1] - 1) : "") + "·" + (q[0] - 1) : String(q[0] - 1); }).join(" · ") + " = " + v + "."); },
    // 6. decode an IEEE 754 binary32 word
    function () { var s = R(0, 1), e = R(-4, 6), k = R(0, 7), E = e + 127, frac = arBits(k, 3) + "00000000000000000000";
      var v = (s ? -1 : 1) * (1 + k / 8) * Math.pow(2, e);
      return num("Decode the IEEE 754 binary32 word <b>" + s + " " + arBits(E, 8) + " " + frac + "</b> (sign, exponent, fraction). (Type a decimal number.)", v, null,
        "The biased exponent is " + arBits(E, 8) + "₂ = " + E + ", so the exponent is " + E + " − 127 = " + f(e) + ". With the hidden bit the significand is 1." + arBits(k, 3) + "₂ = " + (1 + k / 8) + ". The value is " + (s ? "−" : "") + (1 + k / 8) + " × 2" + sup(e) + " = " + f(v) + "."); },
    // 7. ulp: spacing of floating-point numbers
    function () { var fmt = pick([["binary64", 52], ["binary32", 23]]), N = R(3, 2000000000), k = 0;
      if (fmt[0] === "binary32") N = R(3, 16000000);
      while (Math.pow(2, k + 1) <= N) k++;
      return num("In IEEE 754 " + fmt[0] + ", the gap between consecutive floating-point numbers near <b>" + big(N) + "</b> is 2<sup>j</sup>. What is j?", k - fmt[1], null,
        "2" + sup(k) + " = " + big(Math.pow(2, k)) + " ≤ " + big(N) + " < 2" + sup(k + 1) + ", so the number lies in the binade [2" + sup(k) + ", 2" + sup(k + 1) + "). " + fmt[0] + " has " + fmt[1] + " fraction bits, so the spacing there is 2" + sup(k) + " · 2" + sup(-fmt[1]) + " = 2<sup>" + f(k - fmt[1]) + "</sup>."); },
    // 8. zero divisors of Z/nZ
    function () { var n; do { n = R(12, 300); } while (arIsPrime(n));
      var ph = arPhi(n), z = n - 1 - ph;
      return num("How many <b>zero divisors</b> (nonzero non-units) does the ring ℤ/" + n + "ℤ have?", z, null,
        "Every nonzero class of ℤ/nℤ is either a unit (gcd(a, n) = 1) or a zero divisor. There are φ(" + n + ") = " + ph + " units (" + n + " = " + arFacStr(arFactor(n)) + "), so there are " + n + " − 1 − " + ph + " = " + z + " zero divisors."); },
    // 9. divide-and-conquer multiplication counts
    function () { var s = pick([2, 2, 3, 4]), nm = { 2: "Karatsuba (Toom-2)", 3: "Toom-3", 4: "Toom-4" }[s], pc = 2 * s - 1,
        k = s === 2 ? R(2, 10) : s === 3 ? R(2, 7) : R(2, 5), n = Math.pow(s, k), c = Math.pow(pc, k), ex = { 2: "1.585", 3: "1.465", 4: "1.404" }[s];
      return num("Two numbers with <b>" + big(n) + "</b> digits are multiplied by fully recursive " + nm + ", splitting each factor into " + s + " parts and forming " + pc + " products of size 1/" + s + ", down to single digits. How many single-digit multiplications are performed?", c, null,
        big(n) + " = " + s + sup(k) + ", and each level replaces one product by " + pc + " of a " + (s === 2 ? "half" : s === 3 ? "third" : "quarter") + " the size, so there are " + pc + sup(k) + " = " + big(c) +
        " single-digit products, against " + big(n * n) + " for the schoolbook method. This is n<sup>log" + sub(s) + pc + "</sup> ≈ n<sup>" + ex + "</sup>."); },
    // 10. number of division steps in Euclid's algorithm
    function () { var a, b; do { a = R(200, 9999); b = R(50, a - 1); } while (b < 10);
      var x = a, y = b, qs = [];
      while (y !== 0) { qs.push(Math.floor(x / y)); var t = x % y; x = y; y = t; }
      return num("How many division steps does Euclid's algorithm take to compute <b>gcd(" + a + ", " + b + ")</b>? (Count every division, including the last one with remainder 0.)", qs.length, null,
        "The successive quotients are " + qs.join(", ") + ", so there are " + qs.length + " divisions, and the gcd is " + x + ". Lamé's bound allows at most 5 × (digits of " + b + ") = " + (5 * String(b).length) + "."); },
    // 11. which class is a unit
    function () { var n, fs; do { n = R(20, 120); fs = arFactor(n); } while (fs.length < 2);
      var units = [], non = []; for (var a = 2; a < n; a++) (gcd(a, n) === 1 ? units : non).push(a);
      var u = pick(units), w = shuffle(non).slice(0, 3);
      return ch("Which of these classes is a <b>unit</b> in ℤ/" + n + "ℤ?", "[" + u + "]", w.map(function (x) { return "[" + x + "]"; }),
        "[a] is a unit exactly when gcd(a, " + n + ") = 1, and " + n + " = " + arFacStr(fs) + ". gcd(" + u + ", " + n + ") = 1, while " + w.map(function (x) { return "gcd(" + x + ", " + n + ") = " + gcd(x, n); }).join(", ") + ", so those are zero divisors."); },
    // 12. pre-period and period of a rational number
    function () { var i = R(0, 3), j = R(0, 2), m = pick([3, 7, 9, 11, 13, 21, 27, 37]), q = Math.pow(2, i) * Math.pow(5, j) * m;
      var pre = Math.max(i, j), per = arOrd(10, m), right = "pre-period " + pre + ", period " + per;
      var wrong = ["pre-period " + (pre + 1) + ", period " + per, "pre-period " + pre + ", period " + (m - 1 === per ? arPhi(m) / 2 : m - 1), "pre-period " + Math.min(i, j) + ", period " + per, "pre-period 0, period " + (per * 2)].filter(function (s) { return s !== right; });
      return ch("Describe the decimal expansion of <b>1/" + q + "</b>.", right, wrong,
        q + " = 2" + sup(i) + " · 5" + sup(j) + " · " + m + ". The factor 2" + sup(i) + "5" + sup(j) + " gives a pre-period of max(" + i + ", " + j + ") = " + pre + " digits, and the factor " + m + " (coprime to 10) gives period ord" + sub(m) + "(10) = " + per + "."); },
    // 13. condition number of subtraction
    function () { var a = R(1000, 99999), d = R(1, 50), b = a - d, nn = a + b, dd = d;
      return num("A computation forms a − b with <b>a = " + a + "</b> and <b>b = " + b + "</b>, both known to a relative error η. What is the relative condition number (|a| + |b|)/|a − b| that multiplies η? (Type a fraction.)", nn / dd, fr(nn, dd),
        "(|a| + |b|)/|a − b| = (" + a + " + " + b + ")/" + d + " = " + nn + "/" + dd + (gcd(nn, dd) > 1 ? " = " + fr(nn, dd) : "") + " ≈ " + Math.round(nn / dd) + ". A relative input error η can become a relative error of about " + Math.round(nn / dd) + "η in the difference: catastrophic cancellation."); }
  ];
