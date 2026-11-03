/* Built by tools/build.cjs from quiz.js + tools/adult/*.quiz.js. Don't edit this copy. */
/* ============================================================
   🏆 Mathematics Learning: the Quiz
   Every quiz is made up fresh: each question maker below picks
   new random numbers, so no two quizzes are the same and there
   is nothing to memorise. Answers are only shown after the whole
   quiz is submitted.
   ============================================================ */
(function () {
  "use strict";

  // ---------- helpers ----------
  var R = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); };
  var pick = function (a) { return a[Math.floor(Math.random() * a.length)]; };
  var shuffle = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  var gcd = function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; };
  var lcm = function (a, b) { return Math.abs(a * b) / gcd(a, b); };
  var nz = function (a, b) { var x; do { x = R(a, b); } while (x === 0); return x; };
  var f = function (n) { return n < 0 ? "−" + (-n) : String(n); };              // −5 with a real minus sign
  var p = function (n) { return n < 0 ? "(" + f(n) + ")" : String(n); };          // (−5) in brackets when negative
  var fr = function (n, d) { if (d < 0) { n = -n; d = -d; } var g = gcd(n, d) || 1; n /= g; d /= g; return d === 1 ? f(n) : f(n) + "/" + d; };
  var fact = function (n) { return n <= 1 ? 1 : n * fact(n - 1); };
  var P = function (n, k) { return k < 0 || k > n ? 0 : fact(n) / fact(n - k); };
  var C = function (n, k) { return P(n, k) / fact(k); };
  var SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  var SUB = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" };
  var sup = function (n) { return String(n).split("").map(function (c) { return SUP[c]; }).join(""); };
  var sub = function (n) { return String(n).split("").map(function (c) { return SUB[c]; }).join(""); };
  var big = function (n) { return n.toLocaleString("en-US"); };
  // polynomial with the highest power first: poly([3, -5]) = "3x − 5"
  function poly(cs, v) {
    v = v || "x"; var n = cs.length - 1, s = "";
    cs.forEach(function (c, i) {
      var pw = n - i; if (c === 0) return;
      var a = Math.abs(c), coef = (a === 1 && pw > 0) ? "" : String(a), t = coef + (pw === 0 ? "" : pw === 1 ? v : v + sup(pw));
      s += s ? (c < 0 ? " − " : " + ") + t : (c < 0 ? "−" : "") + t;
    });
    return s || "0";
  }
  var plusMinus = function (b) { return b < 0 ? " − " + (-b) : " + " + b; }; // " + 3" or " − 3"
  function cx(a, b) { // complex number a + bi
    if (b === 0) return f(a);
    var bi = (Math.abs(b) === 1 ? "" : Math.abs(b)) + "i";
    if (a === 0) return (b < 0 ? "−" : "") + bi;
    return f(a) + (b < 0 ? " − " : " + ") + bi;
  }
  function mat(M) {
    var w = 0; M.forEach(function (r) { r.forEach(function (x) { w = Math.max(w, f(x).length); }); });
    return '<pre class="qz-mat">' + M.map(function (r) { return "[ " + r.map(function (x) { var s = f(x); while (s.length < w) s = " " + s; return s; }).join("  ") + " ]"; }).join("\n") + "</pre>";
  }
  var TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29]];

  // a question with a typed number answer
  function num(q, ans, show, why, o) {
    var x = { kind: "num", q: q, ans: ans, show: show == null ? f(ans) : show, why: why };
    if (o) for (var k in o) x[k] = o[k];
    return x;
  }
  // a multiple-choice question (correct answer first, then wrong ones)
  function ch(q, correct, wrong, why) {
    var opts = [correct];
    wrong.forEach(function (w) { if (opts.indexOf(w) < 0 && opts.length < 4) opts.push(w); });
    opts = shuffle(opts);
    return { kind: "choice", q: q, opts: opts, ans: opts.indexOf(correct), show: correct, why: why };
  }
  var YN = function (yes) { return yes ? ["Yes", "No"] : ["No", "Yes"]; };

  // ---------- the question makers, one list per topic ----------
  var G = {};
  /* ADULT MAKERS */
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

// Adult (graduate-level) makers for Logic
  // random propositional formulas: { s: text, f: function(valuation array) -> 0/1, d: depth }
  var LO_AT = ["p", "q", "r"];
  var LO_OPS = [
    { t: "∧", f: function (a, b) { return a & b; } },
    { t: "∨", f: function (a, b) { return a | b; } },
    { t: "→", f: function (a, b) { return (1 - a) | b; } },
    { t: "↔", f: function (a, b) { return a === b ? 1 : 0; } },
    { t: "⊕", f: function (a, b) { return a ^ b; } }
  ];
  function loForm(n, depth) {
    if (depth === 0 || Math.random() < 0.15) { var i = R(0, n - 1); return { s: LO_AT[i], f: function (v) { return v[i]; }, top: false }; }
    if (Math.random() < 0.2) { var g = loForm(n, depth - 1); return { s: "¬" + (g.top ? "(" + g.s + ")" : g.s), f: function (v) { return 1 - g.f(v); }, top: false }; }
    var o = pick(LO_OPS), a = loForm(n, depth - 1), b = loForm(n, depth - 1);
    return { s: (a.top ? "(" + a.s + ")" : a.s) + " " + o.t + " " + (b.top ? "(" + b.s + ")" : b.s), f: function (v) { return o.f(a.f(v), b.f(v)); }, top: true };
  }
  function loVals(n) { var out = [], k, i; for (k = 0; k < (1 << n); k++) { var v = []; for (i = 0; i < n; i++) v.push((k >> (n - 1 - i)) & 1); out.push(v); } return out; }
  var loTup = function (v) { return "(" + v.join(", ") + ")"; };
  // ordinals below ω² written ω·a + b
  var loOrd = function (o) { var a = o[0], b = o[1]; if (a === 0) return String(b); var s = a === 1 ? "ω" : "ω · " + a; return b ? s + " + " + b : s; };
  var loAdd = function (x, y) { return y[0] > 0 ? [x[0] + y[0], y[1]] : [x[0], x[1] + y[1]]; };
  // hereditary base-b notation and the Goodstein bump
  function loHer(n, b) {
    var parts = [], e = 0, m = n;
    while (m > 0) { var d = m % b; if (d) { var pw = e === 0 ? "1" : (e === 1 ? String(b) : b + "<sup>" + loHer(e, b) + "</sup>"); parts.unshift(e === 0 ? String(d) : (d === 1 ? pw : d + "·" + pw)); } m = Math.floor(m / b); e++; }
    return parts.length ? parts.join(" + ") : "0";
  }
  function loBump(n, b) { var r = 0, e = 0, m = n; while (m > 0) { var d = m % b; if (d) r += d * Math.pow(b + 1, loBump(e, b)); m = Math.floor(m / b); e++; } return r; }

  G["logic"] = [
    // 1. counting Boolean functions in Post's classes
    function () { var n = R(2, 4), k = pick(["sd", "aff", "p0", "p01", "all"]), N = Math.pow(2, n), ans, why;
      var name = { sd: "self-dual", aff: "affine (of the form a₀ ⊕ a₁x₁ ⊕ … ⊕ aₙxₙ over 𝔽₂)", p0: "0-preserving (F(0, …, 0) = 0)", p01: "both 0-preserving and 1-preserving", all: "Boolean" }[k];
      if (k === "sd") { ans = Math.pow(2, N / 2); why = "The " + N + " points of {0, 1}" + sup(n) + " split into " + (N / 2) + " complementary pairs {a, ā}; a self-dual F takes the values 0 and 1 on each pair in one of 2 ways, so there are 2" + sup(N / 2) + " = " + big(ans) + "."; }
      else if (k === "aff") { ans = Math.pow(2, n + 1); why = "An affine function is fixed by its n + 1 = " + (n + 1) + " coefficients a₀, …, a" + sub(n) + " ∈ {0, 1}, and different coefficients give different functions, so there are 2" + sup(n + 1) + " = " + ans + "."; }
      else if (k === "p0") { ans = Math.pow(2, N - 1); why = "The value at (0, …, 0) is fixed to 0 and the other " + (N - 1) + " values are free: 2" + sup(N - 1) + " = " + big(ans) + "."; }
      else if (k === "p01") { ans = Math.pow(2, N - 2); why = "The values at the all-0 and all-1 points are fixed and the other " + (N - 2) + " are free: 2" + sup(N - 2) + " = " + big(ans) + "."; }
      else { ans = Math.pow(2, N); why = "Each of the 2" + sup(n) + " = " + N + " points can be sent to 0 or 1: 2" + sup(N) + " = " + big(ans) + "."; }
      return num(k === "p01" ? "How many functions {0, 1}" + sup(n) + " → {0, 1} are both 0-preserving and 1-preserving?" : "How many " + name + " functions {0, 1}" + sup(n) + " → {0, 1} are there?", ans, big(ans), why); },
    // 2. models of a random formula, full DNF / full CNF sizes
    function () { var F, vs = loVals(3), sat, guard = 0;
      do { F = loForm(3, 3); sat = vs.filter(function (v) { return F.f(v) === 1; }); } while ((!F.top || sat.length === 0 || sat.length === 8 || !/p/.test(F.s) || !/q/.test(F.s) || !/r/.test(F.s)) && guard++ < 5000);
      var ask = pick(["models", "dnf", "cnf"]), k = sat.length, ans = ask === "cnf" ? 8 - k : k;
      var qs = { models: "How many of the 8 valuations of (p, q, r) satisfy", dnf: "How many terms (minterms) does the full disjunctive normal form of the following formula have:", cnf: "How many clauses does the full conjunctive normal form of the following formula have:" }[ask];
      return num(qs + " <b>" + F.s + "</b>?", ans, null,
        "Evaluating at all 8 valuations, the formula is true exactly at (p, q, r) = " + sat.map(loTup).join(", ") + ", i.e. at " + k + " valuations. " +
        (ask === "models" ? "So the answer is " + k + "." : ask === "dnf" ? "The full DNF has one minterm per satisfying valuation: " + k + "." : "The full CNF has one clause per falsifying valuation: 8 − " + k + " = " + (8 - k) + ".")); },
    // 3. classify a formula: tautology / contingent / contradiction
    function () { var F, vs = loVals(2), useT = Math.random() < 0.4;
      if (useT) {
        var L = function () { var i = R(0, 1), neg = Math.random() < 0.4; return { s: (neg ? "¬" : "") + LO_AT[i], f: function (v) { return neg ? 1 - v[i] : v[i]; } }; };
        var A = L(), B = L(), T = pick([
          { s: "((" + A.s + " → " + B.s + ") → " + A.s + ") → " + A.s, f: function (v) { var a = A.f(v), b = B.f(v), x = (1 - a) | b; return (1 - ((1 - x) | a)) | a; } },
          { s: "(" + A.s + " → " + B.s + ") ∨ (" + B.s + " → " + A.s + ")", f: function (v) { var a = A.f(v), b = B.f(v); return ((1 - a) | b) | ((1 - b) | a); } },
          { s: "(" + A.s + " → " + B.s + ") → (" + B.s + " → " + A.s + ")", f: function (v) { var a = A.f(v), b = B.f(v); return (1 - ((1 - a) | b)) | ((1 - b) | a); } },
          { s: A.s + " ∧ (" + A.s + " → " + B.s + ") ∧ ¬" + B.s, f: function (v) { var a = A.f(v), b = B.f(v); return a & ((1 - a) | b) & (1 - b); } },
          { s: "(" + A.s + " ∨ " + B.s + ") ∧ (" + A.s + " → " + B.s + ")", f: function (v) { var a = A.f(v), b = B.f(v); return (a | b) & ((1 - a) | b); } }]);
        F = T;
      } else { do { F = loForm(2, 3); } while (!F.top); }
      var vals = vs.map(function (v) { return F.f(v); }), k = vals.filter(function (x) { return x === 1; }).length;
      var c = k === 4 ? "A tautology" : k === 0 ? "Unsatisfiable (a contradiction)" : "Satisfiable but not a tautology";
      var fals = vs.filter(function (v) { return F.f(v) === 0; }), tru = vs.filter(function (v) { return F.f(v) === 1; });
      var w = "Checking the 4 valuations of (p, q): " + (tru.length ? "true at " + tru.map(loTup).join(", ") : "true nowhere") + (fals.length ? "; false at " + fals.map(loTup).join(", ") : "; false nowhere") + ". So it is " + c.toLowerCase() + ".";
      return ch("Classify the formula <b>" + F.s + "</b>.", c, ["A tautology", "Unsatisfiable (a contradiction)", "Satisfiable but not a tautology"].filter(function (x) { return x !== c; }), w); },
    // 4. the clause-splitting reduction SAT ≤ 3-SAT
    function () { var m = R(3, 5), ks = [], i, nv = 0, nc = 0; for (i = 0; i < m; i++) ks.push(R(1, 9));
      if (ks.every(function (k) { return k <= 3; })) ks[0] = R(4, 9);
      ks.forEach(function (k) { if (k >= 4) { nv += k - 3; nc += k - 2; } else nc += 1; });
      var askV = Math.random() < 0.5;
      return num("A CNF has " + m + " clauses of lengths <b>" + ks.join(", ") + "</b>. Clauses of length ≤ 3 are kept; each clause (ℓ₁ ∨ … ∨ ℓₖ) with k ≥ 4 is replaced by the chain (ℓ₁ ∨ ℓ₂ ∨ y₁) ∧ (¬y₁ ∨ ℓ₃ ∨ y₂) ∧ … ∧ (¬y ∨ ℓₖ₋₁ ∨ ℓₖ) with fresh variables. How many " + (askV ? "new variables are introduced" : "clauses does the resulting formula have") + "?", askV ? nv : nc, null,
        "A clause of length k ≥ 4 needs k − 3 new variables and becomes k − 2 clauses. " + ks.map(function (k) { return k >= 4 ? "k = " + k + ": " + (k - 3) + " new, " + (k - 2) + " clauses" : "k = " + k + ": kept, 1 clause"; }).join("; ") + ". Total: " + nv + " new variables and " + nc + " clauses."); },
    // 5. Gödel numbering by prime powers
    function () { var a = [R(0, 4), R(0, 4), R(0, 4)], code = Math.pow(2, a[0] + 1) * Math.pow(3, a[1] + 1) * Math.pow(5, a[2] + 1);
      if (Math.random() < 0.5) return num("Sequences are coded by (a₁, a₂, a₃) ↦ 2<sup>a₁+1</sup> · 3<sup>a₂+1</sup> · 5<sup>a₃+1</sup>. What is the code of <b>(" + a.join(", ") + ")</b>?", code, big(code),
        "2" + sup(a[0] + 1) + " · 3" + sup(a[1] + 1) + " · 5" + sup(a[2] + 1) + " = " + Math.pow(2, a[0] + 1) + " · " + Math.pow(3, a[1] + 1) + " · " + Math.pow(5, a[2] + 1) + " = " + big(code) + ".");
      var j = R(0, 2);
      return num("Sequences are coded by (a₁, a₂, a₃) ↦ 2<sup>a₁+1</sup> · 3<sup>a₂+1</sup> · 5<sup>a₃+1</sup>. The number <b>" + big(code) + "</b> codes a sequence. What is <b>a" + sub(j + 1) + "</b>?", a[j], null,
        "Factor: " + big(code) + " = 2" + sup(a[0] + 1) + " · 3" + sup(a[1] + 1) + " · 5" + sup(a[2] + 1) + ", so the sequence is (" + a.join(", ") + ") and a" + sub(j + 1) + " = " + a[j] + ". Unique factorisation makes the decoding unambiguous."); },
    // 6. ordinal arithmetic below ω²
    function () { var x = [R(0, 3), R(0, 6)], y = [R(1, 3), R(0, 6)], guard = 0;
      while ((x[0] === 0 && x[1] === 0) && guard++ < 50) x = [R(0, 3), R(0, 6)];
      var terms = [], s = loAdd(x, y), r = loAdd(y, x), naive = [x[0] + y[0], x[1] + y[1]];
      if (x[0]) terms.push(loOrd([x[0], 0])); if (x[1]) terms.push(String(x[1])); terms.push(loOrd([y[0], 0])); if (y[1]) terms.push(String(y[1]));
      var wrong = [loOrd(r), loOrd(naive), loOrd([s[0] + 1, s[1]]), loOrd([s[0], s[1] + 1]), loOrd([Math.max(1, s[0] - 1), s[1]])].filter(function (t) { return t !== loOrd(s); });
      return ch("Compute the ordinal sum <b>(" + loOrd(x) + ") + (" + loOrd(y) + ")</b>.", loOrd(s), wrong,
        "Write the sum as " + terms.join(" + ") + ". " + (x[1] ? "Since n + ω = ω for every finite n, the finite part " + x[1] + " is absorbed by the following " + loOrd([y[0], 0]) + ", " : "Nothing needs to be absorbed, ") + "so the sum is " + loOrd(s) + ". (In the other order the sum is " + loOrd(r) + ": ordinal addition is not commutative.)"); },
    // 7. which class is first-order axiomatisable?
    function () {
      var good = ["infinite sets", "groups of exponent " + R(2, 9), "fields of characteristic " + pick([2, 3, 5, 7, 11, 13]), "dense linear orders without endpoints", "fields of characteristic 0", "algebraically closed fields", "divisible torsion-free abelian groups", "graphs in which every vertex has degree at most " + R(2, 6)];
      var bad = ["finite sets", "torsion groups", "connected graphs", "well-orders", "finite groups", "Archimedean ordered fields", "structures isomorphic to (ℕ, 0, S, +, ·)", "graphs of finite diameter"];
      var c = pick(good), w = shuffle(bad).slice(0, 3);
      if (Math.random() < 0.4) { var cb = pick(bad), wg = shuffle(good).slice(0, 3);
        return ch("Exactly one of these classes of structures is NOT axiomatisable by any set of first-order sentences. Which?", cb, wg,
          "The class of " + cb + " is not axiomatisable: by compactness, add new constants and sentences violating the property one finite piece at a time; every finite subset is satisfiable inside the class, so a model of everything satisfies the putative axioms but lies outside the class. The other three classes are axiomatised by explicit first-order sentences."); }
      return ch("Exactly one of these classes of structures is axiomatisable by a set of first-order sentences. Which?", c, w,
        "The class of " + c + " is axiomatised by explicit first-order sentences (for infinite sets or characteristic 0, by an infinite list). Each of the others fails by compactness: adding new constants and the sentences that would break the property, every finite subset is satisfiable, so a structure outside the class would satisfy the axioms. For example finite sets: add λₙ (at least n elements) for all n; torsion groups: add cⁿ ≠ e; well-orders: add cₙ₊₁ &lt; cₙ."); },
    // 8. which theory is ℵ₀-categorical?
    function () {
      var good = ["DLO (dense linear orders without endpoints)", "the theory of infinite sets (empty language)", "the theory of the random graph", "the theory of atomless Boolean algebras", "the theory of infinite vector spaces over 𝔽" + sub(pick([2, 3, 5, 7]))];
      var bad = ["ACF" + sub(0) + " (algebraically closed fields of characteristic 0)", "Th(ℤ, &lt;)", "Th(ℕ, 0, S, +, ·)", "the theory of real closed fields", "divisible torsion-free abelian groups", "Th(ℤ, +)"].map(function (t) { return t === "divisible torsion-free abelian groups" ? "nontrivial divisible torsion-free abelian groups" : t; });
      var c = pick(good), w = shuffle(bad).slice(0, 3);
      if (Math.random() < 0.4) { var cb = pick(bad), wg = shuffle(good).slice(0, 3);
        return ch("Exactly one of these complete theories is NOT ℵ₀-categorical. Which?", cb, wg,
          "The theories " + wg.join("; ") + " are ℵ₀-categorical by back-and-forth arguments. " + cb + " has non-isomorphic countable models (for ACF₀ different transcendence degrees, for divisible torsion-free groups ℚ vs ℚ², for Th(ℤ, &lt;) ℤ vs ℤ + ℤ, for Th(ℤ, +), arithmetic and RCF countable non-standard models)."); }
      return ch("Exactly one of these complete theories is ℵ₀-categorical (all its countable models are isomorphic). Which?", c, w,
        "For " + c + ", a back-and-forth argument shows any two countable models are isomorphic. The others have non-isomorphic countable models: ACF₀ by transcendence degree (the algebraic closures of ℚ and of ℚ(t)), divisible torsion-free groups by dimension over ℚ (ℚ vs ℚ²), Th(ℤ, &lt;) has ℤ and ℤ + ℤ, Th(ℤ, +), true arithmetic and RCF have countable models that are not isomorphic to the standard one. (Ryll-Nardzewski: a complete countable theory is ℵ₀-categorical iff it has only finitely many n-types for each n.)"); },
    // 9. which set is computable?
    function () { var n = R(5, 40), m = R(2, 30);
      var good = ["{e : the machine with code e has at most " + n + " states}", "{e : φₑ(0) halts within " + n + " steps}", "{e : φₑ(" + m + ") halts within e² steps}", "{(e, k) : the machine with code e makes at most " + n + " moves on input k}"];
      var bad = ["{e : φₑ is total}", "{e : φₑ(" + m + ") is defined}", "{e : φₑ(" + m + ") = " + n + "}", "{e : the domain of φₑ is finite}", "{e : φₑ is the constant function 0}", "{e : φₑ(e) is defined}"];
      var c = pick(good), w = shuffle(bad).slice(0, 3);
      if (Math.random() < 0.4) { var cb = pick(bad), wg = shuffle(good).slice(0, 3);
        return ch("Exactly one of these sets of indices is NOT computable. Which?", cb, wg,
          "The set " + cb + " is an index set of a nontrivial property of φₑ (or the halting set K itself), so it is undecidable by Rice's theorem or Turing's theorem. The other three are decided by a syntactic check or a simulation for a bounded number of steps, which always terminates."); }
      return ch("Exactly one of these sets of indices is computable. Which?", c, w,
        "The set " + c + " is decided by decoding e and simulating for a bounded number of steps (or by a syntactic check), which always terminates. The other sets are index sets of nontrivial properties of the partial function φₑ (or the halting set K itself), so they are undecidable by Rice's theorem."); },
    // 10. Gödel's β-function
    function () { var c = R(20, 400), d = R(2, 12), i = R(0, 4), mod = 1 + (i + 1) * d, ans = c % mod;
      return num("Gödel's β-function is β(c, d, i) = c mod (1 + (i + 1)d). Compute <b>β(" + c + ", " + d + ", " + i + ")</b>.", ans, null,
        "1 + (" + i + " + 1) · " + d + " = " + mod + ", and " + c + " = " + Math.floor(c / mod) + " · " + mod + " + " + ans + ", so β = " + ans + "."); },
    // 11. Goodstein sequences
    function () { var m = R(4, 9), k = R(2, 3), g = m, b = 2, steps = [], j;
      for (j = 1; j < k; j++) { var h = loHer(g, b), nx = loBump(g, b) - 1; steps.push(g + " = " + h + " in base " + b + " → replace " + b + " by " + (b + 1) + " and subtract 1 → " + big(nx)); g = nx; b++; }
      return num("In the Goodstein sequence starting at G₁ = " + m + " (base 2: write in hereditary base b, replace b by b + 1, subtract 1), what is <b>G" + sub(k) + "</b>?", g, big(g),
        steps.join("; ") + ". So G" + sub(k) + " = " + big(g) + "."); },
    // 12. unsatisfiable chains: minimal unsatisfiable subsets
    function () { var n = R(5, 60);
      return num("Let Γ = {p₀} ∪ {pₖ → pₖ₊₁ : k ∈ ℕ} ∪ {¬p" + sub(n) + "}. What is the smallest size of an unsatisfiable finite subset of Γ?", n + 2, null,
        "Any unsatisfiable subset must contain p₀, ¬p" + sub(n) + " and every implication pₖ → pₖ₊₁ with k &lt; " + n + ": if pₖ → pₖ₊₁ is missing, making p₀, …, pₖ true and the rest false satisfies the subset. So the minimum is 1 + " + n + " + 1 = " + (n + 2) + "."); }
  ];

// ---------- Algebraic Equations (adult): theory of equations, resultants, Galois theory, Newton ----------
  var PRIMES_AE = [5, 7, 11, 13, 17, 19, 23];
  var isSqAE = function (n) { if (n < 0) return false; var r = Math.round(Math.sqrt(n)); return r * r === n; };
  // integer root of t³ + pt + q (must divide q), or null
  var intRootAE = function (p, q) { var a = Math.abs(q); for (var d = 1; d <= a; d++) { if (a % d) continue; if (d * d * d + p * d + q === 0) return d; if (-d * d * d - p * d + q === 0) return -d; } return null; };
  var modAE = function (a, m) { return ((a % m) + m) % m; };
  var linAE = function (c) { return c === 0 ? "x" : "(" + poly([1, -c]) + ")"; }; // (x − c)

  G["algebraic-equations"] = [
    // 1. power sums of the roots of a cubic (Newton's identities)
    function () { var b = nz(-6, 6), c = nz(-9, 9), d = nz(-9, 9), k = R(2, 3);
      var e1 = -b, e2 = c, e3 = -d, p2 = e1 * e1 - 2 * e2, p3 = e1 * p2 - e2 * e1 + 3 * e3, v = k === 2 ? p2 : p3;
      return num("Let α, β, γ be the roots of <b>" + poly([1, b, c, d]) + "</b>. Compute <b>α" + sup(k) + " + β" + sup(k) + " + γ" + sup(k) + "</b>.", v, null,
        "Vieta: e₁ = " + f(e1) + ", e₂ = " + f(e2) + ", e₃ = " + f(e3) + ". Newton: p₁ = e₁ = " + f(e1) + ", p₂ = e₁p₁ − 2e₂ = " + f(e1 * e1) + " − " + p(2 * e2) + " = " + f(p2) +
        (k === 3 ? ", p₃ = e₁p₂ − e₂p₁ + 3e₃ = " + f(e1 * p2) + " − " + p(e2 * e1) + " + " + p(3 * e3) + " = " + f(p3) : "") + "."); },

    // 2. discriminant of a full cubic
    function () { var a = R(1, 3), b = R(-5, 5), c = R(-6, 6), d = nz(-6, 6);
      var t1 = b * b * c * c, t2 = -4 * a * c * c * c, t3 = -4 * b * b * b * d, t4 = -27 * a * a * d * d, t5 = 18 * a * b * c * d, D = t1 + t2 + t3 + t4 + t5;
      return num("Compute the discriminant of <b>" + poly([a, b, c, d]) + "</b>.", D, null,
        "For ax³ + bx² + cx + d, Δ = b²c² − 4ac³ − 4b³d − 27a²d² + 18abcd. Here a = " + a + ", b = " + f(b) + ", c = " + f(c) + ", d = " + f(d) + ", so the five terms are " + f(t1) + ", " + f(t2) + ", " + f(t3) + ", " + f(t4) + " and " + f(t5) + ", giving Δ = " + f(D) + ". " +
        (D > 0 ? "Since Δ > 0 there are three distinct real roots." : D < 0 ? "Since Δ < 0 there is one real root and a pair of non-real conjugate roots." : "Since Δ = 0 there is a repeated root.")); },

    // 3. nature of the real roots from the sign of the discriminant
    function () { var pp, q, D; do { pp = nz(-12, 6); q = nz(-20, 20); D = -4 * pp * pp * pp - 27 * q * q; } while (D === 0);
      var ans = D > 0 ? "Three distinct real roots" : "Exactly one real root and two non-real roots";
      return ch("How many real roots does <b>" + poly([1, 0, pp, q]) + "</b> have?", ans,
        [D > 0 ? "Exactly one real root and two non-real roots" : "Three distinct real roots", "A double root and one simple real root", "Three real roots, two of them equal"],
        "Δ = −4p³ − 27q² = " + f(-4 * pp * pp * pp) + " − " + (27 * q * q) + " = " + f(D) + ". " + (D > 0 ? "Δ > 0, so all three roots are real and distinct." : "Δ < 0, so one root is real and the other two are complex conjugates. (A real cubic always has at least one real root.)")); },

    // 4. resultant via the product formula
    function () { var r1 = R(-5, 5), r2, s = R(-6, 6), t = R(-9, 9); do { r2 = R(-5, 5); } while (r2 === r1);
      var g1 = r1 * r1 + s * r1 + t, g2 = r2 * r2 + s * r2 + t, v = g1 * g2;
      return num("Compute the resultant <b>Res(" + poly([1, -(r1 + r2), r1 * r2]) + ", " + poly([1, s, t]) + ")</b>.", v, null,
        "The first polynomial is " + linAE(r1) + linAE(r2) + " with roots " + f(r1) + " and " + f(r2) + ". For monic f, Res(f, g) = ∏ g(αᵢ) = g(" + f(r1) + ") · g(" + f(r2) + ") = " + p(g1) + " · " + p(g2) + " = " + f(v) + "." +
        (v === 0 ? " A zero resultant means the polynomials have a common root." : "")); },

    // 5. the non-integer rational root (rational root theorem)
    function () { var a, b, c, d; do { a = R(2, 6); b = nz(-7, 7); c = nz(-4, 4); d = nz(-4, 4); } while (gcd(a, b) !== 1 || c === d);
      var A = a, B = -(b + a * (c + d)), Cc = b * (c + d) + a * c * d, Dd = -b * c * d;
      return num("The cubic <b>" + poly([A, B, Cc, Dd]) + "</b> has exactly one rational root that is not an integer. Find it. (Type a fraction.)", b / a, fr(b, a),
        "By the rational root theorem a root r/s in lowest terms has s | " + A + ". Testing shows the integer roots " + f(c) + " and " + f(d) + ", and dividing them out leaves " + poly([a, -b]) + ". So the polynomial is (" + poly([a, -b]) + ")" + linAE(c) + linAE(d) + ", and the non-integer root is " + fr(b, a) + ".", { lowest: true }); },

    // 6. Galois group of an irreducible cubic via the discriminant
    (function () {
      var CYC = []; // irreducible t³ + pt + q with square discriminant (Galois group A₃)
      for (var a = -1; a >= -80; a--) for (var b = -300; b <= 300; b++) { if (!b) continue; var dd = -4 * a * a * a - 27 * b * b; if (dd > 0 && isSqAE(dd) && intRootAE(a, b) === null) CYC.push([a, b]); }
      return function () { var pp, q, D, isC3 = Math.random() < 0.45;
        if (isC3) { var c = pick(CYC); pp = c[0]; q = c[1]; }
        else { do { pp = nz(-12, 12); q = nz(-15, 15); D = -4 * pp * pp * pp - 27 * q * q; } while (intRootAE(pp, q) !== null || isSqAE(D) || D === 0); }
        D = -4 * pp * pp * pp - 27 * q * q;
        var sq = isSqAE(D), ans = sq ? "A₃ ≅ C₃ (cyclic of order 3)" : "S₃ (order 6)";
        return ch("The cubic <b>" + poly([1, 0, pp, q]) + "</b> is irreducible over ℚ. What is its Galois group?", ans,
          [sq ? "S₃ (order 6)" : "A₃ ≅ C₃ (cyclic of order 3)", "C₂ (order 2)", "The trivial group"],
          "It has no integer root (an integer root would divide " + Math.abs(q) + "), so it is irreducible and the Galois group is a transitive subgroup of S₃: A₃ or S₃. The discriminant is −4p³ − 27q² = " + f(D) + (sq ? " = " + Math.round(Math.sqrt(D)) + "², a square, so the group lies in A₃: it is cyclic of order 3." : ", which is not a perfect square in ℚ, so the group is not inside A₃: it is S₃.")); };
    })(),

    // 7. degree of a splitting field over ℚ
    function () { var t = R(0, 3), q = pick([2, 3, 5, 7, 11]), n, why, poly_;
      if (t === 0) { poly_ = "x³ − " + q; n = 6; why = "∛" + q + " has degree 3 (Eisenstein at " + q + "), the field ℚ(∛" + q + ") is real, and adjoining ω = e^(2πi/3) (degree 2) gives the splitting field ℚ(∛" + q + ", ω) of degree 3 · 2 = 6."; }
      else if (t === 1) { poly_ = "x⁴ − " + q; n = 8; why = "⁴√" + q + " has degree 4 (Eisenstein at " + q + "), ℚ(⁴√" + q + ") is real, and the roots ±⁴√" + q + ", ±i⁴√" + q + " need i as well. So the splitting field ℚ(⁴√" + q + ", i) has degree 4 · 2 = 8 (Galois group D₄)."; }
      else if (t === 2) { var pr = pick([3, 5, 7, 11, 13]); poly_ = "x" + sup(pr) + " − 1"; n = pr - 1; why = "The splitting field is ℚ(ζ" + sub(pr) + "). The minimal polynomial of ζ" + sub(pr) + " is the cyclotomic polynomial Φ" + sub(pr) + " (Eisenstein after x ↦ x + 1), of degree " + (pr - 1) + "."; }
      else { var pr2 = pick([3, 5, 7]); poly_ = "x" + sup(pr2) + " − " + q; n = pr2 * (pr2 - 1); why = "The roots are ζᵏ · " + sup(pr2) + "√" + q + " with ζ = ζ" + sub(pr2) + ". The field needs " + sup(pr2) + "√" + q + " (degree " + pr2 + ", Eisenstein) and ζ" + sub(pr2) + " (degree " + (pr2 - 1) + "); these degrees are coprime, so the splitting field has degree " + pr2 + " · " + (pr2 - 1) + " = " + n + "."; }
      return num("What is the degree over ℚ of the splitting field of <b>" + poly_ + "</b>?", n, null, why); },

    // 8. two Newton steps for a square or cube root
    function () { var k = Math.random() < 0.6 ? 3 : 2, N, x0;
      do { N = k === 3 ? R(3, 200) : R(3, 200); } while (Math.abs(Math.round(Math.pow(N, 1 / k)) - Math.pow(N, 1 / k)) < 1e-9);
      x0 = Math.floor(Math.pow(N, 1 / k)) + R(0, 1);
      var step = function (x) { return k === 3 ? (2 * x + N / (x * x)) / 3 : (x + N / x) / 2; };
      var x1 = step(x0), x2 = step(x1), v = Math.round(x2 * 10000) / 10000, nm = k === 3 ? "∛" : "√";
      return num("Apply two steps of Newton's method to <b>x" + sup(k) + " − " + N + "</b> starting from x₀ = " + x0 + ". What is x₂? (Round to 4 decimal places.)", v, v.toFixed(4),
        "Newton: xₙ₊₁ = xₙ − (xₙ" + sup(k) + " − " + N + ")/(" + k + "xₙ" + (k === 3 ? "²" : "") + ") = " + (k === 3 ? "(2xₙ + " + N + "/xₙ²)/3" : "(xₙ + " + N + "/xₙ)/2") + ". Then x₁ = " + x1.toFixed(6) + " and x₂ = " + x2.toFixed(6) + ", compared with " + nm + N + " = " + Math.pow(N, 1 / k).toFixed(6) + " (quadratic convergence).", { tol: 0.00006 }); },

    // 9. number of roots of a quadratic over a finite field
    function () { var pr = pick(PRIMES_AE), b = R(0, pr - 1), c = R(1, pr - 1), cnt = 0, roots = [];
      for (var x = 0; x < pr; x++) if (modAE(x * x + b * x + c, pr) === 0) { cnt++; roots.push(x); }
      var D = modAE(b * b - 4 * c, pr), e = 1; for (var i = 0; i < (pr - 1) / 2; i++) e = modAE(e * D, pr);
      return num("How many roots does <b>" + poly([1, b, c]) + "</b> have in 𝔽" + sub(pr) + "?", cnt, null,
        "Δ = b² − 4c ≡ " + D + " (mod " + pr + "). " + (D === 0 ? "Δ = 0, so there is exactly one (double) root." : "Euler's criterion: Δ^((p−1)/2) = " + D + sup((pr - 1) / 2) + " ≡ " + (e === 1 ? "1, so Δ is a nonzero square and there are two roots." : "−1, so Δ is not a square and there are no roots.")) +
        (cnt ? " (The root" + (cnt > 1 ? "s are " : " is ") + roots.join(" and ") + ".)" : "")); },

    // 10. counting monic irreducible polynomials over 𝔽ₚ (Gauss's formula)
    function () { var MU = { 1: 1, 2: -1, 3: -1, 5: -1, 6: 1 }, pr, n;
      do { pr = pick([2, 3, 5, 7, 11]); n = R(2, 6); } while (Math.pow(pr, n) > 2e6);
      var tot = 0, terms = [];
      for (var d = 1; d <= n; d++) if (n % d === 0 && MU[d] != null) { var t = MU[d] * Math.pow(pr, n / d); tot += t; terms.push((MU[d] < 0 ? "− " : terms.length ? "+ " : "") + pr + sup(n / d)); }
      var v = tot / n;
      return num("How many monic irreducible polynomials of degree " + n + " are there over 𝔽" + sub(pr) + "?", v, null,
        "Gauss's formula: the number is (1/n)∑_{d|n} μ(d)p^(n/d), obtained by Möbius inversion of pⁿ = ∑_{d|n} d·N_d (the factorization of x^(pⁿ) − x into all monic irreducibles of degree dividing n). For n = " + n + ", p = " + pr + ": (" + terms.join(" ") + ")/" + n + " = " + tot + "/" + n + " = " + v + "."); },

    // 11. consistency of a linear system via rank (Rouché–Capelli)
    function () { var a1, a2, a3, b1, b2, b3; do { a1 = R(-4, 4); a2 = R(-4, 4); a3 = R(-4, 4); b1 = R(-4, 4); b2 = R(-4, 4); b3 = R(-4, 4); }
      while (a2 * b3 - a3 * b2 === 0 && a1 * b3 - a3 * b1 === 0 && a1 * b2 - a2 * b1 === 0 || a1 === 0 || b2 === 0);
      var al = nz(-3, 3), be = nz(-3, 3), r1 = R(-6, 6), r2 = R(-6, 6), del = Math.random() < 0.5 ? 0 : nz(-3, 3);
      var c1 = al * a1 + be * b1, c2 = al * a2 + be * b2, c3 = al * a3 + be * b3, r3 = al * r1 + be * r2 + del;
      var row = function (x, y, z, r) { var t = [[x, "x"], [y, "y"], [z, "z"]].filter(function (u) { return u[0] !== 0; }).map(function (u, i) { var a = Math.abs(u[0]), co = (a === 1 ? "" : a) + u[1]; return i === 0 ? (u[0] < 0 ? "−" : "") + co : (u[0] < 0 ? " − " : " + ") + co; }).join(""); return (t || "0") + " = " + f(r); };
      var ans = del === 0 ? "Infinitely many solutions (a line)" : "No solution";
      return ch("How many solutions does the system <b>" + row(a1, a2, a3, r1) + "</b>, <b>" + row(b1, b2, b3, r2) + "</b>, <b>" + row(c1, c2, c3, r3) + "</b> have over ℝ?", ans,
        [del === 0 ? "No solution" : "Infinitely many solutions (a line)", "Exactly one solution", "Infinitely many solutions (a plane)"],
        "The third left-hand side is " + f(al) + " × (row 1) + " + p(be) + " × (row 2), so rank A = 2 (rows 1 and 2 are not proportional). The same combination of the right-hand sides is " + f(al * r1 + be * r2) + (del === 0 ? ", which matches " + f(r3) + ": rank [A | b] = 2 = rank A, so by Rouché–Capelli the solutions form an affine space of dimension 3 − 2 = 1, a line." : ", but the third right-hand side is " + f(r3) + ": rank [A | b] = 3 > rank A, so the system is inconsistent.")); }
  ];

G["linear-functions"] = (function () {
    // rank of a small integer matrix (Gaussian elimination)
    function rankOf(M) {
      var A = M.map(function (r) { return r.slice(); }), rows = A.length, cols = A[0].length, rk = 0;
      for (var c = 0; c < cols && rk < rows; c++) {
        var piv = -1;
        for (var i = rk; i < rows; i++) if (Math.abs(A[i][c]) > 1e-9) { piv = i; break; }
        if (piv < 0) continue;
        var t = A[piv]; A[piv] = A[rk]; A[rk] = t;
        for (var j = 0; j < rows; j++) if (j !== rk) { var q = A[j][c] / A[rk][c]; for (var k = c; k < cols; k++) A[j][k] -= q * A[rk][k]; }
        rk++;
      }
      return rk;
    }
    function mul2(X, Y) { return [[X[0][0] * Y[0][0] + X[0][1] * Y[1][0], X[0][0] * Y[0][1] + X[0][1] * Y[1][1]], [X[1][0] * Y[0][0] + X[1][1] * Y[1][0], X[1][0] * Y[0][1] + X[1][1] * Y[1][1]]]; }
    // a 2x2 integer matrix P D P^-1 with det P = 1 and integer eigenvalues l1 != l2
    function similar() {
      var l1, l2, k, m;
      do { l1 = R(-4, 5); l2 = R(-4, 5); k = R(-2, 2); m = R(-2, 2); } while (l1 === l2 || l1 + l2 === 0 || (k === 0 && m === 0));
      var Pm = [[1 + k * m, k], [m, 1]], Pi = [[1, -k], [-m, 1 + k * m]];
      return { A: mul2(mul2(Pm, [[l1, 0], [0, l2]]), Pi), l1: l1, l2: l2 };
    }
    function term(a, s) { return (a < 0 ? " − " : " + ") + (Math.abs(a) === 1 ? "" : Math.abs(a)) + s; }
    function co(a, v) { return (a === 1 ? "" : String(a)) + v; }
    function lin(a, b, u, v) { // a·u + b·v, nicely signed
      var s = a === 0 ? "" : (a < 0 ? "−" : "") + (Math.abs(a) === 1 ? "" : Math.abs(a)) + u;
      if (b !== 0) s += s ? term(b, v) : (b < 0 ? "−" : "") + (Math.abs(b) === 1 ? "" : Math.abs(b)) + v;
      return s || "0";
    }
    function relu(t) { return "ReLU(x" + (t === 0 ? "" : plusMinus(-t)) + ")"; }
    return [
      // 1. rank-nullity for a 3 x 4 matrix
      function () {
        var r = R(1, 3), rows = [], i, j;
        for (i = 0; i < r; i++) { var row = []; for (j = 0; j < 4; j++) row.push(R(-3, 3)); rows.push(row); }
        while (rows.length < 3) { var a = R(-2, 2), b = nz(-2, 2), x = rows[R(0, r - 1)], y = rows[R(0, r - 1)];
          rows.push(x.map(function (v, k) { return a * v + b * y[k]; })); }
        rows = shuffle(rows);
        var rk = rankOf(rows), ask = Math.random() < 0.5;
        return num("Let A be the matrix below, viewed as a linear map ℝ⁴ → ℝ³." + mat(rows) + "What is the " + (ask ? "nullity (dim ker A)" : "rank") + " of A?", ask ? 4 - rk : rk, null,
          "Row reduction leaves " + rk + " nonzero row" + (rk === 1 ? "" : "s") + ", so rank A = " + rk + ". By rank–nullity, dim ker A = 4 − " + rk + " = " + (4 - rk) + "."); },
      // 2. similarity invariants: trace of A^3
      function () {
        var S = similar(), t = S.l1 + S.l2, d = S.l1 * S.l2, v = Math.pow(S.l1, 3) + Math.pow(S.l2, 3);
        return num("For the matrix A below, compute <b>tr(A³)</b>." + mat(S.A), v, null,
          "tr A = " + f(t) + " and det A = " + f(d) + ", so the characteristic polynomial is " + poly([1, -t, d], "λ") + ", with roots " + f(S.l1) + " and " + f(S.l2) +
          ". A is diagonalisable, and similarity preserves trace, so tr(A³) = " + p(S.l1) + "³ + " + p(S.l2) + "³ = " + f(v) + "."); },
      // 3. which matrix is similar to A
      function () {
        var S = similar(), a = S.l1, b = S.l2, D = function (x, y) { return "diag(" + f(x) + ", " + f(y) + ")"; };
        return ch("Which of these matrices is similar to the matrix A below?" + mat(S.A), D(a, b), [D(a + 1, b + 1), D(-a, -b), D(a, a)],
          "tr A = " + f(a + b) + " and det A = " + f(a * b) + ", so the eigenvalues are " + f(a) + " and " + f(b) + ". They are distinct, so A is diagonalisable and similar to " + D(a, b) +
          ". The other options have a different trace or determinant, and similarity preserves both."); },
      // 4. dual basis
      function () {
        var a, b, c, d, det;
        do { a = R(-3, 4); b = R(-3, 4); c = R(-3, 4); d = R(-3, 4); det = a * d - b * c; } while (det === 0);
        var x0 = R(-5, 5), y0 = R(-5, 5), first = Math.random() < 0.5;
        var n = first ? d * x0 - c * y0 : -b * x0 + a * y0;
        var form = "(" + (first ? lin(d, -c, "x", "y") : lin(-b, a, "x", "y")) + ")/" + p(det);
        return num("Let (φ₁, φ₂) be the dual basis of b₁ = (" + f(a) + ", " + f(b) + "), b₂ = (" + f(c) + ", " + f(d) + ") in ℝ². Compute <b>φ" + (first ? "₁" : "₂") + "(" + f(x0) + ", " + f(y0) + ")</b>. (Type a fraction if needed.)",
          n / det, fr(n, det),
          "The dual functionals are the rows of V⁻¹, where V has columns b₁, b₂ and det V = " + f(det) + ". So φ" + (first ? "₁" : "₂") + "(x, y) = " + form + ", and at (" + f(x0) + ", " + f(y0) + ") this is " + f(n) + "/" + p(det) + " = " + fr(n, det) + "."); },
      // 5. barycentric coordinates
      function () {
        var A, B, C, P, D;
        do { A = [R(-3, 3), R(-3, 3)]; B = [R(-3, 5), R(-3, 5)]; C = [R(-3, 5), R(-3, 5)]; P = [R(-2, 4), R(-2, 4)];
          D = (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]); } while (D === 0);
        var nb = (P[0] - A[0]) * (C[1] - A[1]) - (P[1] - A[1]) * (C[0] - A[0]);
        var ng = (B[0] - A[0]) * (P[1] - A[1]) - (B[1] - A[1]) * (P[0] - A[0]);
        var na = D - nb - ng, k = R(0, 2), names = ["A", "B", "C"], vals = [na, nb, ng];
        var pt = function (q) { return "(" + f(q[0]) + ", " + f(q[1]) + ")"; };
        return num("Find the barycentric coordinate of P = " + pt(P) + " belonging to vertex <b>" + names[k] + "</b> of the triangle A = " + pt(A) + ", B = " + pt(B) + ", C = " + pt(C) + ". (Type a fraction if needed.)",
          vals[k] / D, fr(vals[k], D),
          "Write P − A = β(B − A) + γ(C − A) and solve by Cramer's rule with det(B − A, C − A) = " + f(D) + ": β = " + fr(nb, D) + ", γ = " + fr(ng, D) + ", and α = 1 − β − γ = " + fr(na, D) + ". The coordinate for " + names[k] + " is " + fr(vals[k], D) + "."); },
      // 6. Jacobian determinant
      function () {
        var a = nz(-3, 3), b = nz(-4, 4), c = nz(-4, 4), d = nz(-3, 3), x0 = nz(-2, 2), y0 = nz(-2, 2);
        var j11 = 2 * a * x0, j22 = 3 * d * y0 * y0, v = j11 * j22 - b * c;
        return num("Let f(x, y) = (" + poly([a, 0, 0]) + term(b, "y") + ", " + poly([c, 0]) + term(d, "y³") + "). Compute the Jacobian determinant <b>det J_f(" + f(x0) + ", " + f(y0) + ")</b>.", v, null,
          "J_f has rows (" + f(2 * a) + "x, " + f(b) + ") and (" + f(c) + ", " + f(3 * d) + "y²). At (" + f(x0) + ", " + f(y0) + ") the diagonal entries are " + f(j11) + " and " + f(j22) +
          ", so det = " + p(j11) + "·" + p(j22) + " − " + p(b) + "·" + p(c) + " = " + f(v) + "."); },
      // 7. least squares slope or intercept
      function () {
        var xs, ys, n = 4, Sx, Sy, Sxx, Sxy, den;
        do { xs = []; while (xs.length < n) { var x = R(-3, 5); if (xs.indexOf(x) < 0) xs.push(x); } xs.sort(function (u, w) { return u - w; });
          ys = xs.map(function () { return R(-4, 9); });
          Sx = 0; Sy = 0; Sxx = 0; Sxy = 0; for (var i = 0; i < n; i++) { Sx += xs[i]; Sy += ys[i]; Sxx += xs[i] * xs[i]; Sxy += xs[i] * ys[i]; }
          den = n * Sxx - Sx * Sx; } while (den === 0);
        var mn = n * Sxy - Sx * Sy, slope = Math.random() < 0.5;
        var cn = Sy * den - mn * Sx, cd = n * den;
        var pts = xs.map(function (x, i) { return "(" + f(x) + ", " + f(ys[i]) + ")"; }).join(", ");
        var why = "Σx = " + f(Sx) + ", Σy = " + f(Sy) + ", Σx² = " + Sxx + ", Σxy = " + f(Sxy) + ". Slope m = (nΣxy − ΣxΣy)/(nΣx² − (Σx)²) = " + f(mn) + "/" + den + " = " + fr(mn, den) +
          ". Intercept c = (Σy − mΣx)/n = " + fr(cn, cd) + ".";
        return num("Find the least-squares line y = c + mx for the data " + pts + ". What is <b>" + (slope ? "the slope m" : "the intercept c") + "</b>? (Type a fraction if needed.)",
          slope ? mn / den : cn / cd, slope ? fr(mn, den) : fr(cn, cd), why); },
      // 8. linear programme by vertices
      function () {
        var a1, b1, a2, b2, xs, ys;
        do { a1 = R(1, 5); b1 = R(1, 5); a2 = R(1, 5); b2 = R(1, 5); xs = R(1, 5); ys = R(1, 5); } while (a1 * b2 - a2 * b1 === 0);
        var r1 = a1 * xs + b1 * ys, r2 = a2 * xs + b2 * ys, c1 = R(1, 6), c2 = R(1, 6);
        // vertices as [num, den] values of the objective
        var X = r1 * a2 <= r2 * a1 ? [r1, a1] : [r2, a2], Y = r1 * b2 <= r2 * b1 ? [r1, b1] : [r2, b2];
        var cand = [[0, 1, "(0, 0)"], [c1 * X[0], X[1], "(" + fr(X[0], X[1]) + ", 0)"], [c2 * Y[0], Y[1], "(0, " + fr(Y[0], Y[1]) + ")"], [c1 * xs + c2 * ys, 1, "(" + xs + ", " + ys + ")"]];
        var best = cand[0]; cand.forEach(function (v) { if (v[0] / v[1] > best[0] / best[1]) best = v; });
        return num("Maximise <b>" + poly([c1, 0]) + " + " + (c2 === 1 ? "" : c2) + "y</b> subject to " + poly([a1, 0]) + " + " + (b1 === 1 ? "" : b1) + "y ≤ " + r1 + ", " + poly([a2, 0]) + " + " + (b2 === 1 ? "" : b2) + "y ≤ " + r2 + ", x ≥ 0, y ≥ 0. What is the optimal value? (Type a fraction if needed.)",
          best[0] / best[1], fr(best[0], best[1]),
          "The optimum is attained at a vertex. The vertices are " + cand.map(function (v) { return v[2] + " with value " + fr(v[0], v[1]); }).join(", ") + ". The largest is " + fr(best[0], best[1]) + " at " + best[2] + "."); },
      // 9. LP duality: optimal dual value or a shadow price
      function () {
        var a1, b1, a2, b2, xs, ys;
        do { a1 = R(1, 5); b1 = R(1, 5); a2 = R(1, 5); b2 = R(1, 5); xs = R(1, 5); ys = R(1, 5); } while (a1 * b2 - a2 * b1 === 0);
        var y1 = R(1, 4), y2 = R(1, 4), c1 = y1 * a1 + y2 * a2, c2 = y1 * b1 + y2 * b2, r1 = a1 * xs + b1 * ys, r2 = a2 * xs + b2 * ys, ask = R(0, 2);
        var q = "The LP: maximise " + c1 + "x + " + c2 + "y subject to " + poly([a1, 0]) + " + " + (b1 === 1 ? "" : b1) + "y ≤ " + r1 + " (constraint 1), " + poly([a2, 0]) + " + " + (b2 === 1 ? "" : b2) + "y ≤ " + r2 + " (constraint 2), x, y ≥ 0, has its optimum at (" + xs + ", " + ys + "). ";
        var why = "Both x and y are positive at the optimum, so by complementary slackness both dual constraints are tight: " + co(a1, "y₁") + " + " + co(a2, "y₂") + " = " + c1 + " and " + co(b1, "y₁") + " + " + co(b2, "y₂") + " = " + c2 +
          ". Solving gives y₁ = " + y1 + ", y₂ = " + y2 + " (both ≥ 0, which confirms optimality). The dual value is " + r1 + "·" + y1 + " + " + r2 + "·" + y2 + " = " + (r1 * y1 + r2 * y2) + ", equal to the primal value " + c1 + "·" + xs + " + " + c2 + "·" + ys + ".";
        if (ask === 0) return num(q + "What is the <b>optimal value of the dual LP</b>?", r1 * y1 + r2 * y2, null, why);
        return num(q + "What is the <b>shadow price (optimal dual variable) of constraint " + ask + "</b>?", ask === 1 ? y1 : y2, null, why); },
      // 10. operator norm
      function () {
        var A;
        do { A = [[R(-4, 4), R(-4, 4)], [R(-4, 4), R(-4, 4)]]; } while (A[0][0] * A[1][1] - A[0][1] * A[1][0] === 0 || (A[0][1] === 0 && A[1][0] === 0));
        var g11 = A[0][0] * A[0][0] + A[1][0] * A[1][0], g22 = A[0][1] * A[0][1] + A[1][1] * A[1][1], g12 = A[0][0] * A[0][1] + A[1][0] * A[1][1];
        var t = g11 + g22, dt = g11 * g22 - g12 * g12, lam = (t + Math.sqrt(t * t - 4 * dt)) / 2, nrm = Math.sqrt(lam);
        return num("Find the Lipschitz constant (Euclidean norms) of x ↦ Ax + b (for any vector b), where A is the matrix below. (Round to 2 decimal places.)" + mat(A), nrm, nrm.toFixed(2),
          "The Lipschitz constant is ‖A‖ = √λ_max(AᵀA). Here AᵀA has rows (" + g11 + ", " + f(g12) + ") and (" + f(g12) + ", " + g22 + "), trace " + t + " and determinant " + dt +
          ", so λ_max = (" + t + " + √" + (t * t - 4 * dt) + ")/2 ≈ " + lam.toFixed(3) + " and ‖A‖ ≈ " + nrm.toFixed(2) + ".", { tol: 0.006 }); },
      // 11. Gauss-Markov: variance of the OLS slope
      function () {
        var xs = [], n = 4, s2 = R(1, 9);
        while (xs.length < n) { var x = R(-3, 6); if (xs.indexOf(x) < 0) xs.push(x); }
        xs.sort(function (u, w) { return u - w; });
        var Sx = 0, Sxx = 0; xs.forEach(function (x) { Sx += x; Sxx += x * x; });
        var den = n * Sxx - Sx * Sx;
        return num("In the model yᵢ = c + mxᵢ + εᵢ with uncorrelated errors of variance σ² = " + s2 + ", the design points are x = " + xs.map(f).join(", ") + ". What is <b>Var(m̂)</b> for the OLS slope? (Type a fraction.)",
          n * s2 / den, fr(n * s2, den),
          "Cov(β̂) = σ²(XᵀX)⁻¹, and the slope entry is σ²/S_xx with S_xx = Σx² − (Σx)²/n = " + Sxx + " − " + p(Sx) + "²/" + n + " = " + fr(den, n) + ". So Var(m̂) = " + s2 + "/(" + fr(den, n) + ") = " + fr(n * s2, den) + "."); },
      // 12. Lipschitz constant of a ReLU combination
      function () {
        var c = nz(-3, 3), a = nz(-4, 4), b = nz(-4, 4), t1 = R(-3, 1), t2 = R(t1 + 1, 4);
        var s0 = c, s1 = c + a, s2 = c + a + b, L = Math.max(Math.abs(s0), Math.abs(s1), Math.abs(s2));
        return num("Find the Lipschitz constant of <b>g(x) = " + poly([c, 0]) + term(a, relu(t1)) + term(b, relu(t2)) + "</b> on ℝ.", L, null,
          "g is continuous and piecewise linear with slopes " + f(s0) + " on (−∞, " + f(t1) + "], " + f(s0) + " + " + p(a) + " = " + f(s1) + " on [" + f(t1) + ", " + f(t2) + "], and " + f(s1) + " + " + p(b) + " = " + f(s2) +
          " on [" + f(t2) + ", ∞). The Lipschitz constant is the largest absolute slope, " + L + "."); },
      // 13. Newton step for a cube root
      function () {
        var x0 = R(1, 4), N; do { N = R(2, 60); } while (N === x0 * x0 * x0);
        var nn = 2 * x0 * x0 * x0 + N, dd = 3 * x0 * x0;
        return num("Perform one step of Newton's method for <b>x³ − " + N + " = 0</b> starting from x₀ = " + x0 + ". What is x₁? (Type a fraction.)", nn / dd, fr(nn, dd),
          "x₁ = x₀ − (x₀³ − " + N + ")/(3x₀²) = " + x0 + " − (" + (x0 * x0 * x0) + " − " + N + ")/" + dd + " = (2x₀³ + " + N + ")/(3x₀²) = " + nn + "/" + dd + (gcd(nn, dd) > 1 ? " = " + fr(nn, dd) : "") + "."); },
      // 14. quadrature weights from the dual basis
      function () {
        var L = pick([1, 3, 4, 5, 6, 7, 8, 9]), k = R(0, 2);
        var w = [[2 * L * L * L - 9 * L * L + 12 * L, 12], [3 * L * L - L * L * L, 3], [2 * L * L * L - 3 * L * L, 12]];
        return num("Find the weight <b>c" + sub(k) + "</b> in the rule ∫₀" + sup(L) + " p(t) dt = c₀p(0) + c₁p(1) + c₂p(2), required to be exact for every p ∈ P₂. (Type a fraction.)",
          w[k][0] / w[k][1], fr(w[k][0], w[k][1]),
          "Test on 1, t, t²: c₀ + c₁ + c₂ = " + L + ", c₁ + 2c₂ = " + fr(L * L, 2) + ", c₁ + 4c₂ = " + fr(L * L * L, 3) + ". Then c₂ = " + fr(w[2][0], 12) + ", c₁ = " + fr(w[1][0], 3) + ", c₀ = " + fr(w[0][0], 12) + "."); }
    ];
  })();

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

G["geometry"] = (function () {
    // ---- exact fraction helpers (numerator, denominator) ----
    function q(n, d) { if (d < 0) { n = -n; d = -d; } var g = gcd(n, d) || 1; return [n / g, d / g]; }
    function qs(a) { return fr(a[0], a[1]); }
    function qv(a) { return a[0] / a[1]; }
    function qadd(a, b) { return q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]); }
    function qsub(a, b) { return q(a[0] * b[1] - b[0] * a[1], a[1] * b[1]); }
    function qmul(a, b) { return q(a[0] * b[0], a[1] * b[1]); }
    // Heronian triangles (integer sides and integer area), none equilateral
    var HER = [[5, 5, 6], [5, 5, 8], [13, 14, 15], [10, 13, 13], [9, 10, 17], [6, 25, 29], [13, 20, 21], [11, 13, 20], [7, 15, 20], [3, 4, 5], [5, 12, 13], [8, 15, 17], [4, 13, 15], [10, 17, 21]];
    function tri() {
      var t = pick(HER), k = R(1, 3), a = t[0] * k, b = t[1] * k, c = t[2] * k, s = (a + b + c) / 2;
      var K = Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
      var Rr = q(a * b * c, 4 * K), r = q(K, s);
      return { a: a, b: b, c: c, s: s, K: K, R: Rr, r: r };
    }
    function triText(T) { return "the triangle with sides " + T.a + ", " + T.b + ", " + T.c; }
    function triWork(T) { return "s = " + T.s + ", Heron gives K = " + T.K + ", so R = abc/(4K) = " + (T.a * T.b * T.c) + "/" + (4 * T.K) + " = " + qs(T.R) + " and r = K/s = " + qs(T.r) + ". "; }
    // a homogeneous linear form a x + b y + c z with clean signs
    function lin(cs) {
      var vars = ["x", "y", "z"], s = "";
      cs.forEach(function (c, i) {
        if (c === 0) return;
        var t = (Math.abs(c) === 1 ? "" : String(Math.abs(c))) + vars[i];
        s += s ? (c < 0 ? " − " : " + ") + t : (c < 0 ? "−" : "") + t;
      });
      return s;
    }
    function phi(n) { var r = n, m = n; for (var p2 = 2; p2 * p2 <= m; p2++) if (m % p2 === 0) { while (m % p2 === 0) m /= p2; r -= r / p2; } if (m > 1) r -= r / m; return r; }
    function pow2(x) { return x > 0 && (x & (x - 1)) === 0; }
    function cons(n) { return pow2(phi(n)); }
    function pt(x, y) { return "(" + x + ", " + y + ")"; }

    return [
      // 0: Euler's relation OI² = R² − 2Rr
      function () { var T = tri(), oi = qsub(qmul(T.R, T.R), qmul([2, 1], qmul(T.R, T.r)));
        return num("For " + triText(T) + ", compute OI², the squared distance between the circumcentre O and the incentre I. (Type a fraction if needed.)", qv(oi), qs(oi),
          triWork(T) + "Euler's relation: OI² = R² − 2Rr = " + qs(qmul(T.R, T.R)) + " − " + qs(qmul([2, 1], qmul(T.R, T.r))) + " = " + qs(oi) + "."); },
      // 1: OH² = 9R² − (a² + b² + c²)
      function () { var T = tri(), sq = T.a * T.a + T.b * T.b + T.c * T.c, nine = qmul([9, 1], qmul(T.R, T.R)), oh = qsub(nine, [sq, 1]);
        return num("For " + triText(T) + ", compute OH², the squared length of the Euler segment from the circumcentre O to the orthocentre H. (Type a fraction if needed.)", qv(oh), qs(oh),
          triWork(T) + "With O as origin H = A + B + C, which gives OH² = 9R² − (a² + b² + c²) = " + qs(nine) + " − " + sq + " = " + qs(oh) + "."); },
      // 2: Feuerbach: distance from nine-point centre to incentre
      function () { var T = tri(), half = qmul(T.R, [1, 2]), ni = qsub(half, T.r);
        return num("For " + triText(T) + ", find the distance NI from the nine-point centre N to the incentre I. (Type a fraction if needed.)", qv(ni), qs(ni),
          triWork(T) + "The nine-point circle has radius R/2 = " + qs(half) + " and, by Feuerbach's theorem, is internally tangent to the incircle, so NI = R/2 − r = " + qs(half) + " − " + qs(T.r) + " = " + qs(ni) + "."); },
      // 3: Ceva (concurrent) or Menelaus (collinear), signed ratios
      function () {
        var a, b, c, d; do { a = R(1, 7); b = R(1, 7); c = R(1, 7); d = R(1, 7); } while (gcd(a, b) !== 1 || gcd(c, d) !== 1 || a * c === b * d || a === b);
        var men = Math.random() < 0.5, x = q(men ? -a : a, b), y = q(c, d), prod = qmul(x, y), z = q((men ? -1 : 1) * prod[1], prod[0]);
        var setup = "In triangle ABC, points D, E, F lie on the lines BC, CA, AB with signed ratios BD/DC = " + qs(x) + " and CE/EA = " + qs(y) + ". ";
        if (men) return num(setup + "If D, E, F are collinear, what is the signed ratio AF/FB? (Type a fraction.)", qv(z), qs(z),
          "Menelaus: (BD/DC)(CE/EA)(AF/FB) = −1. Here (BD/DC)(CE/EA) = " + qs(prod) + ", so AF/FB = −1/(" + qs(prod) + ") = " + qs(z) + ".");
        return num(setup + "If AD, BE, CF are concurrent, what is AF/FB? (Type a fraction.)", qv(z), qs(z),
          "Ceva: (BD/DC)(CE/EA)(AF/FB) = 1. Here (BD/DC)(CE/EA) = " + qs(prod) + ", so AF/FB = 1 ÷ " + qs(prod) + " = " + qs(z) + ".");
      },
      // 4: Routh's theorem
      function () {
        var x, y, z; do { x = R(1, 5); y = R(1, 5); z = R(1, 5); } while (x * y * z === 1);
        var n = (x * y * z - 1) * (x * y * z - 1), f1 = x * y + x + 1, f2 = y * z + y + 1, f3 = z * x + z + 1, ans = q(n, f1 * f2 * f3);
        return num("Cevians AD, BE, CF of triangle ABC satisfy BD/DC = " + x + ", CE/EA = " + y + ", AF/FB = " + z + ". What fraction of the area of ABC is the area of the triangle they enclose? (Type a fraction.)", qv(ans), qs(ans),
          "Routh's theorem: (xyz − 1)² / ((xy + x + 1)(yz + y + 1)(zx + z + 1)) = " + (x * y * z - 1) + "² / (" + f1 + " · " + f2 + " · " + f3 + ") = " + n + "/" + (f1 * f2 * f3) + (gcd(n, f1 * f2 * f3) > 1 ? " = " + qs(ans) : "") + ".");
      },
      // 5: inversion of a circle not through the centre
      function () {
        var k, h, rho; do { k = R(1, 6); h = R(2, 12); rho = R(1, 11); } while (rho >= h);
        var p = h * h - rho * rho, wantR = Math.random() < 0.5, cen = q(k * k * h, p), rad = q(k * k * rho, p);
        var qq = "The circle with centre " + pt(h, 0) + " and radius " + rho + " is inverted in the circle x² + y² = " + (k * k) + ". What is the " + (wantR ? "radius" : "x-coordinate of the centre") + " of the image circle? (Type a fraction.)";
        var why = "The power of the centre of inversion is p = " + h + "² − " + rho + "² = " + p + ". The image of a circle with centre c and radius ρ is the circle with centre k²c/p and radius k²ρ/|p|, here centre (" + qs(cen) + ", 0) and radius " + qs(rad) +
          ". Check with the diameter endpoints " + (h - rho) + " and " + (h + rho) + ", which go to " + qs(q(k * k, h - rho)) + " and " + qs(q(k * k, h + rho)) + ".";
        return wantR ? num(qq, qv(rad), qs(rad), why) : num(qq, qv(cen), qs(cen), why);
      },
      // 6: radical centre of three circles and its power
      function () {
        var d = R(2, 9), e = R(2, 9), r1 = R(1, 6), r2 = R(1, 6), r3 = R(1, 6);
        var X = d * d + r1 * r1 - r2 * r2, Y = e * e + r1 * r1 - r3 * r3, x = q(X, 2 * d), y = q(Y, 2 * e);
        var pw = q(X * X * e * e + Y * Y * d * d - 4 * d * d * e * e * r1 * r1, 4 * d * d * e * e);
        return num("Circles ω₁, ω₂, ω₃ have centres (0, 0), " + pt(d, 0) + ", " + pt(0, e) + " and radii " + r1 + ", " + r2 + ", " + r3 + ". Find the common power of their radical centre with respect to the three circles. (Type a fraction if needed; it may be negative.)", qv(pw), qs(pw),
          "Radical axis of ω₁, ω₂: x = (d² + r₁² − r₂²)/(2d) = " + qs(x) + ". Radical axis of ω₁, ω₃: y = (e² + r₁² − r₃²)/(2e) = " + qs(y) + ". The power with respect to ω₁ is x² + y² − r₁² = " + qs(qmul(x, x)) + " + " + qs(qmul(y, y)) + " − " + (r1 * r1) + " = " + qs(pw) + ".");
      },
      // 7: cross-ratio or harmonic conjugate
      function () {
        var a, b, c, dd;
        if (Math.random() < 0.5) {
          do { a = R(-6, 6); b = R(-6, 6); c = R(-6, 6); dd = R(-6, 6); } while (a === b || a === c || a === dd || b === c || b === dd || c === dd);
          var cr = q((c - a) * (dd - b), (c - b) * (dd - a));
          return num("Compute the cross-ratio (A, B; C, D) = (c − a)(d − b)/((c − b)(d − a)) for the points with coordinates a = " + f(a) + ", b = " + f(b) + ", c = " + f(c) + ", d = " + f(dd) + ". (Type a fraction.)", qv(cr), qs(cr),
            "(" + f(c) + " − " + p(a) + ")(" + f(dd) + " − " + p(b) + ") / ((" + f(c) + " − " + p(b) + ")(" + f(dd) + " − " + p(a) + ")) = (" + f(c - a) + " · " + p(dd - b) + ")/(" + f(c - b) + " · " + p(dd - a) + ") = " + qs(cr) + ".");
        }
        do { a = R(-8, 8); b = R(-8, 8); c = R(-8, 8); } while (a === b || c === a || c === b || 2 * c === a + b);
        var hd = q(c * (a + b) - 2 * a * b, 2 * c - a - b);
        return num("On a projective line, find the harmonic conjugate D of C = " + f(c) + " with respect to A = " + f(a) + " and B = " + f(b) + ", i.e. the point d with (A, B; C, D) = −1. (Type a fraction if needed.)", qv(hd), qs(hd),
          "(c − a)(d − b) = −(c − b)(d − a) gives d(2c − a − b) = c(a + b) − 2ab, so d = (" + f(c * (a + b)) + " − " + p(2 * a * b) + ")/(" + f(2 * c - a - b) + ") = " + qs(hd) + ".");
      },
      // 8: classify an isometry x ↦ Ax + b
      function () {
        var kinds = [
          { s: "(x, y) ↦ (−y + B1, x + B2)", rot: 90 }, { s: "(x, y) ↦ (−x + B1, −y + B2)", rot: 180 }, { s: "(x, y) ↦ (y + B1, −x + B2)", rot: 270 },
          { s: "(x, y) ↦ (x + B1, y + B2)", rot: 0 },
          { s: "(x, y) ↦ (x + B1, −y + B2)", ref: "the x-axis direction (1, 0)", g: function (b1, b2) { return [b1, 0]; } },
          { s: "(x, y) ↦ (−x + B1, y + B2)", ref: "the y-axis direction (0, 1)", g: function (b1, b2) { return [0, b2]; } },
          { s: "(x, y) ↦ (y + B1, x + B2)", ref: "the direction (1, 1)", g: function (b1, b2) { return [q(b1 + b2, 2), q(b1 + b2, 2)]; } },
          { s: "(x, y) ↦ (−y + B1, −x + B2)", ref: "the direction (1, −1)", g: function (b1, b2) { return [q(b1 - b2, 2), q(b2 - b1, 2)]; } }];
        var K = pick(kinds), b1, b2;
        do { b1 = R(-5, 5); b2 = R(-5, 5); } while (K.rot === 0 && b1 === 0 && b2 === 0);
        if (K.g && Math.random() < 0.4) { if (K.ref.indexOf("(1, 0)") >= 0) b1 = 0; else if (K.ref.indexOf("(0, 1)") >= 0) b2 = 0; else if (K.ref.indexOf("(1, 1)") >= 0) b2 = -b1; else b2 = b1; }
        var term = function (v) { return v === 0 ? "" : (v < 0 ? " − " + (-v) : " + " + v); };
        var map = K.s.replace("B1", "#").replace("B2", "@");
        map = map.replace(/ \+ #/, term(b1)).replace(/ \+ @/, term(b2));
        var ans, why, ALL = ["Translation", "Rotation", "Reflection", "Glide reflection"];
        if (K.rot === 0) { ans = "Translation"; why = "The linear part is the identity, so T is the translation by " + pt(f(b1), f(b2)) + "."; }
        else if (K.g === undefined) {
          var c;
          if (K.rot === 90) c = [qs(q(b1 - b2, 2)), qs(q(b1 + b2, 2))];
          else if (K.rot === 180) c = [qs(q(b1, 2)), qs(q(b2, 2))];
          else c = [qs(q(b1 + b2, 2)), qs(q(b2 - b1, 2))];
          ans = "Rotation"; why = "The linear part is the rotation through " + K.rot + "° (determinant 1, not the identity), so I − A is invertible and T has exactly one fixed point, " + pt(c[0], c[1]) + ": T is the rotation through " + K.rot + "° about it.";
        } else {
          var gv = K.g(b1, b2), gx = typeof gv[0] === "number" ? f(gv[0]) : qs(gv[0]), gy = typeof gv[1] === "number" ? f(gv[1]) : qs(gv[1]);
          var zero = (typeof gv[0] === "number" ? gv[0] === 0 : gv[0][0] === 0) && (typeof gv[1] === "number" ? gv[1] === 0 : gv[1][0] === 0);
          ans = zero ? "Reflection" : "Glide reflection";
          why = "The linear part is a reflection (determinant −1) fixing " + K.ref + ". The component of b = " + pt(f(b1), f(b2)) + " along that direction is " + pt(gx, gy) + (zero ? ", which is zero, so T² = id and T is a reflection." : ", which is non-zero, so T² is the translation by twice it and T is a glide reflection with glide vector " + pt(gx, gy) + ".");
        }
        return ch("Classify the isometry T: " + map + ".", ans, ALL.filter(function (w) { return w !== ans; }), why);
      },
      // 9: composite of two quarter-turns about different centres
      function () {
        var a, b; do { a = nz(-6, 6); b = nz(-6, 6); } while (a === b || a === -b);
        var cx0 = q(a + b, 2), cy0 = q(b - a, 2), good = "(" + qs(cx0) + ", " + qs(cy0) + ")";
        var w1 = "(" + qs(q(a - b, 2)) + ", " + qs(q(a + b, 2)) + ")", w2 = "(" + qs(q(a, 2)) + ", " + qs(q(b, 2)) + ")", w3 = "(" + qs(q(b - a, 2)) + ", " + qs(q(a + b, 2)) + ")", w4 = "(" + f(a) + ", " + f(b) + ")";
        return ch("Let ρ₀ be the rotation through +90° about (0, 0) and ρ₁ the rotation through +90° about " + pt(f(a), f(b)) + ". The composite ρ₁ ∘ ρ₀ (first ρ₀) is a half-turn. About which point?", good, [w1, w2, w3, w4].filter(function (w) { return w !== good; }),
          "With J(u, v) = (−v, u), ρ₀(p) = Jp and ρ₁(p) = B + J(p − B). So ρ₁ρ₀(p) = B + J(Jp − B) = −p + B − JB, a half-turn about (B − JB)/2. Here JB = " + pt(f(-b), f(a)) + ", so the centre is " + good + ".");
      },
      // 10: Euler characteristic computations
      function () {
        var t = R(0, 2);
        if (t === 0) { var V = 2 * R(12, 60), h = (V - 20) / 2;
          return num("A fullerene is a convex polyhedron with only pentagonal and hexagonal faces and three faces at every vertex. How many hexagonal faces does a fullerene with " + V + " vertices have?", h, null,
            "3V = 2E gives E = " + (3 * V / 2) + ", and Euler's formula gives F = 2 − V + E = " + (2 - V + 3 * V / 2) + ". There are always 12 pentagons (from V − E + F = p/6 = 2), so h = " + (2 - V + 3 * V / 2) + " − 12 = " + h + ". Check: 5 · 12 + 6 · " + h + " = " + (60 + 6 * h) + " = 2E."); }
        if (t === 1) { var P4 = pick([["the 24-cell", 24, 96, 96, 24], ["the 120-cell", 600, 1200, 720, 120], ["the 600-cell", 120, 720, 1200, 600], ["the 16-cell", 8, 24, 32, 16], ["the tesseract", 16, 32, 24, 8], ["the 5-cell", 5, 10, 10, 5]]), hide = R(1, 4), nm = ["", "vertices", "edges", "two-dimensional faces", "cells"];
          var given = [1, 2, 3, 4].filter(function (i) { return i !== hide; }).map(function (i) { return P4[i] + " " + nm[i]; }).join(", ");
          return num("The regular 4-polytope " + P4[0].replace("the ", "") + " has " + given + ". How many " + nm[hide] + " does it have?", P4[hide], null,
            "For a convex 4-polytope the Euler–Poincaré formula is V − E + F − C = 0. Solving with the given numbers: " + P4[1] + " − " + P4[2] + " + " + P4[3] + " − " + P4[4] + " = 0, so the missing number is " + P4[hide] + "."); }
        var V2 = R(5, 40);
        return num("A convex polyhedron with " + V2 + " vertices has every face a triangle. How many edges does it have?", 3 * V2 - 6, null,
          "Each face has 3 edges and each edge borders 2 faces, so 3F = 2E. Then V − E + 2E/3 = 2 gives E = 3V − 6 = " + (3 * V2 - 6) + " (and F = 2V − 4 = " + (2 * V2 - 4) + ").");
      },
      // 11: Gauss–Wantzel
      function () {
        if (Math.random() < 0.5) { var N = R(20, 260), L = []; for (var n = 3; n <= N; n++) if (cons(n)) L.push(n);
          return num("For how many integers n with 3 ≤ n ≤ " + N + " is the regular n-gon constructible with straightedge and compass?", L.length, null,
            "By Gauss–Wantzel, n works iff φ(n) is a power of 2, i.e. n = 2ᵏ times distinct Fermat primes from 3, 5, 17, 257. The values are " + L.join(", ") + ": " + L.length + " of them."); }
        var good, bad = [], tries = 0;
        do { good = R(7, 300); } while (!cons(good));
        while (bad.length < 3 && tries++ < 500) { var m = R(7, 300); if (!cons(m) && bad.indexOf(String(m)) < 0) bad.push(String(m)); }
        return ch("Which regular polygon can be constructed with straightedge and compass? (number of sides)", String(good), bad,
          "Gauss–Wantzel: the n-gon is constructible iff φ(n) is a power of 2. φ(" + good + ") = " + phi(good) + " is a power of 2, while " + bad.map(function (m) { return "φ(" + m + ") = " + phi(+m); }).join(", ") + " are not.");
      },
      // 12: degree of cos(2π/n)
      function () { var n = R(5, 60), d = phi(n) / 2;
        return num("What is the degree [ℚ(cos(2π/" + n + ")) : ℚ]?", d, null,
          "ℚ(ζ) with ζ = e^(2πi/" + n + ") has degree φ(" + n + ") = " + phi(n) + ", and ℚ(cos(2π/" + n + ")) = ℚ(ζ + ζ⁻¹) is its maximal real subfield, of index 2. So the degree is " + d + (pow2(d) ? " (a power of 2: the " + n + "-gon is constructible)." : " (not a power of 2: the " + n + "-gon is not constructible).")); },
      // 13: Dehn invariant
      function () {
        var a = R(1, 9), b = R(1, 9), c = R(1, 9);
        var good = pick(["a right prism over a triangle with sides " + (a + 2) + ", " + (a + 3) + ", " + (a + 4) + " and height " + b, "a rectangular box " + a + " × " + b + " × " + c, "a right prism over a regular " + (R(5, 12)) + "-gon of side " + a + " and height " + b]);
        var wrong = shuffle(["a regular tetrahedron of edge " + a, "a regular octahedron of edge " + b, "a regular icosahedron of edge " + c, "a regular dodecahedron of edge " + a]).slice(0, 3);
        var not = Math.random() < 0.5;
        if (not) { var bads = ["a rectangular box " + a + " × " + b + " × " + c, "a right prism over a triangle with sides " + (a + 2) + ", " + (a + 3) + ", " + (a + 4) + " and height " + b, "a right prism over a square of side " + c + " and height " + a]; good = wrong[0]; wrong = bads; }
        var stem = not ? pick(["Which solid is NOT scissors congruent to a cube of the same volume?", "Which of these solids has a non-zero Dehn invariant?", "Which solid cannot be cut into finitely many polyhedral pieces and reassembled into a cube of equal volume?"])
          : pick(["Which solid is scissors congruent to a cube of the same volume?", "Which of these solids has Dehn invariant zero?", "Which solid can be cut into finitely many polyhedral pieces and reassembled into a cube of equal volume?"]);
        return ch(stem, good, wrong,
          "By Dehn and Sydler, a polyhedron is scissors congruent to a cube of equal volume iff its Dehn invariant ∑ ℓ ⊗ θ vanishes. Prisms have base edges with angle π/2 and lateral edges whose angles sum to (n − 2)π, so D = 0. The regular tetrahedron, octahedron, icosahedron and dodecahedron have dihedral angles arccos(1/3), arccos(−1/3), arccos(−√5/3), arccos(−1/√5), none a rational multiple of π (2cos θ is not an algebraic integer), so their Dehn invariants are non-zero.");
      },
      // 14: intersection of two projective lines
      function () {
        var l, m, X, Y, Z;
        do { l = [nz(-5, 5), nz(-5, 5), R(-6, 6)]; m = [nz(-5, 5), nz(-5, 5), R(-6, 6)];
          X = l[1] * m[2] - l[2] * m[1]; Y = l[2] * m[0] - l[0] * m[2]; Z = l[0] * m[1] - l[1] * m[0]; } while (Z === 0);
        var wantX = Math.random() < 0.5, ans = wantX ? q(X, Z) : q(Y, Z);
        return num("In ℝP² the lines " + lin(l) + " = 0 and " + lin(m) + " = 0 meet at a point [X : Y : Z]. What is its affine " + (wantX ? "x" : "y") + "-coordinate X/Z? (Type a fraction if needed.)", qv(ans), qs(ans),
          "The meet of two lines is the cross product of their coordinate vectors: (" + l.map(f).join(", ") + ") × (" + m.map(f).join(", ") + ") = (" + f(X) + ", " + f(Y) + ", " + f(Z) + "). So the point is (" + qs(q(X, Z)) + ", " + qs(q(Y, Z)) + ") in the chart z = 1, and the " + (wantX ? "x" : "y") + "-coordinate is " + qs(ans) + ".");
      }
    ];
  })();

G["algebraic-geometry"] = (function () {
    // the Weierstrass cubic y² = x³ + ax + b as text
    var curve = function (a, b) { return "y² = " + poly([1, 0, a, b]); };
    var disc = function (a, b) { return 4 * a * a * a + 27 * b * b; };
    var pt = function (x, y) { return "(" + f(x) + ", " + f(y) + ")"; };
    var md = function (n, m) { return ((n % m) + m) % m; };
    return [
      // 1. chord addition on an elliptic curve through two given integer points
      function () { var x1, x2, y1, y2, a, b;
        do { x1 = R(-5, 5); x2 = R(-5, 5); y1 = nz(-9, 9); y2 = nz(-9, 9);
          a = (x1 !== x2 && (y1 * y1 - y2 * y2 - x1 * x1 * x1 + x2 * x2 * x2) % (x1 - x2) === 0) ? (y1 * y1 - y2 * y2 - x1 * x1 * x1 + x2 * x2 * x2) / (x1 - x2) : 999;
          b = y1 * y1 - x1 * x1 * x1 - a * x1;
        } while (x1 === x2 || Math.abs(a) > 30 || Math.abs(b) > 99 || disc(a, b) === 0);
        var ln = y2 - y1, ld = x2 - x1, xn = ln * ln - (x1 + x2) * ld * ld, xd = ld * ld;
        return num("On the elliptic curve <b>" + curve(a, b) + "</b> take P = " + pt(x1, y1) + " and Q = " + pt(x2, y2) + ". What is the x-coordinate of P + Q? (Type an integer or a fraction.)", xn / xd, fr(xn, xd),
          "The chord through P and Q has slope λ = (" + f(y2) + " − " + p(y1) + ")/(" + f(x2) + " − " + p(x1) + ") = " + fr(ln, ld) + ". The third intersection with the cubic has x₃ = λ² − x₁ − x₂ = " + fr(ln * ln, ld * ld) + " − " + p(x1) + " − " + p(x2) + " = " + fr(xn, xd) + ", and P + Q is its reflection in the x-axis, which has the same x-coordinate."); },
      // 2. tangent doubling
      function () { var x1, y1, a, b;
        do { x1 = R(-4, 4); y1 = nz(-8, 8); a = R(-6, 6); b = y1 * y1 - x1 * x1 * x1 - a * x1; } while (disc(a, b) === 0 || Math.abs(b) > 99);
        var ln = 3 * x1 * x1 + a, ld = 2 * y1, xn = ln * ln - 2 * x1 * ld * ld, xd = ld * ld;
        return num("P = " + pt(x1, y1) + " lies on <b>" + curve(a, b) + "</b>. What is the x-coordinate of 2P? (Type an integer or a fraction.)", xn / xd, fr(xn, xd),
          "Implicit differentiation gives the tangent slope λ = (3x₁² + a)/(2y₁) = (3·" + p(x1) + "² + " + p(a) + ")/(2·" + p(y1) + ") = " + fr(ln, ld) + ". Then x(2P) = λ² − 2x₁ = " + fr(ln * ln, ld * ld) + " − " + p(2 * x1) + " = " + fr(xn, xd) + "."); },
      // 3. counting points over a prime field
      function () { var pr = pick([5, 7, 11, 13]), a, b;
        do { a = R(0, pr - 1); b = R(0, pr - 1); } while (md(disc(a, b), pr) === 0);
        var sq = {}, y, x, n = 1, parts = [];
        for (y = 0; y < pr; y++) sq[md(y * y, pr)] = (sq[md(y * y, pr)] || 0) + 1;
        for (x = 0; x < pr; x++) { var v = md(x * x * x + a * x + b, pr), c = sq[v] || 0; n += c; parts.push("x = " + x + ": " + v + " → " + c); }
        return num("How many points does the elliptic curve <b>" + curve(a, b) + "</b> have over the field 𝔽" + sub(pr) + ", counting the point at infinity O?", n, null,
          "For each x in 𝔽" + sub(pr) + " compute x³ + ax + b mod " + pr + " and count its square roots (2 for a nonzero square, 1 for 0, none for a non-square). " + parts.join("; ") + ". That gives " + (n - 1) + " affine points, plus O: " + n + ". (Hasse: |" + n + " − " + (pr + 1) + "| ≤ 2√" + pr + ".)"); },
      // 4. intersection multiplicity of a monomial curve with a smooth branch
      function () { var e, q, c, k;
        do { e = R(2, 4); q = R(2, 7); c = nz(-5, 5); k = R(1, 4); } while (e * k === q || e === q);
        var g = "y " + (c > 0 ? "− " : "+ ") + (Math.abs(c) === 1 ? "" : Math.abs(c)) + "x" + (k > 1 ? sup(k) : ""), m = Math.min(e * k, q);
        return num("Compute the intersection multiplicity at the origin: <b>I₀(y" + sup(e) + " − x" + sup(q) + ", " + g + ")</b>.", m, null,
          "The second curve is smooth at 0 and parametrized by x ↦ (x, " + f(c).replace(/^1$/, "").replace(/^−1$/, "−") + "x" + (k > 1 ? sup(k) : "") + "), so I₀ is the order of vanishing at x = 0 of the first equation restricted to it: " + p(c) + sup(e) + "x" + sup(e * k) + " − x" + sup(q) + ". Since " + (e * k) + " ≠ " + q + ", the order is min(" + (e * k) + ", " + q + ") = " + m + "."); },
      // 5. Bézout: how much intersection is hidden at infinity
      function () { var a = R(3, 10), b = R(2, a - 1), inf = a * (b - 1), xe = "x" + (a - b > 1 ? sup(a - b) : "");
        return num("In ℙ²(ℂ), the projective closures of y = x" + sup(a) + " and y = x" + sup(b) + " meet with total multiplicity " + a + " · " + b + " = " + (a * b) + " (Bézout). What is the intersection multiplicity at the point at infinity [0 : 1 : 0]?", inf, null,
          "Affine meetings: x" + sup(a) + " = x" + sup(b) + " gives x" + sup(b) + "(" + xe + " − 1) = 0. The origin has multiplicity " + b + " (the order of x" + sup(b) + ") and the " + (a - b) + " root" + (a - b > 1 ? "s" : "") + " of " + xe + " = 1" + (a - b > 1 ? " are" : " is") + " simple. So [0 : 1 : 0] carries " + (a * b) + " − " + b + " − " + (a - b) + " = " + inf + "."); },
      // 6. genus by the degree–genus formula or Riemann–Hurwitz
      function () {
        if (Math.random() < 0.5) { var d = R(3, 8), gm = (d - 1) * (d - 2) / 2, dl = R(1, gm);
          return num("An irreducible plane curve of degree " + d + " has exactly " + dl + " singular point" + (dl === 1 ? "" : "s") + ", all ordinary nodes. What is the geometric genus of its normalization?", gm - dl, null,
            "Degree–genus with singularities: g = (d − 1)(d − 2)/2 − Σ δ_P, and an ordinary node has δ = 1. So g = " + (d - 1) + "·" + (d - 2) + "/2 − " + dl + " = " + gm + " − " + dl + " = " + (gm - dl) + "."); }
        var n = R(3, 12), g = Math.floor((n - 1) / 2), br = n % 2 === 0 ? n : n + 1;
        return num("Let f ∈ ℂ[x] be squarefree of degree " + n + ". What is the genus of the smooth projective curve with affine model y² = f(x)?", g, null,
          "The map (x, y) ↦ x has degree 2 and branches at the " + n + " roots of f" + (n % 2 ? " and at ∞ (odd degree)" : " only (even degree, ∞ is unbranched)") + ": " + br + " branch points. Riemann–Hurwitz: 2g − 2 = 2(−2) + " + br + ", so g = " + g + "."); },
      // 7. rational points on the circle and primitive triples
      function () { var m, n; do { m = R(2, 12); n = R(1, m - 1); } while (gcd(m, n) !== 1);
        var odd = (m % 2 === 1 && n % 2 === 1), A = m * m - n * n, B = 2 * m * n, Cc = m * m + n * n, s = odd ? 2 : 1;
        return num("The line through (−1, 0) of slope t = " + n + "/" + m + " meets the unit circle x² + y² = 1 again at a rational point (X/Z, Y/Z). Clearing denominators gives a PRIMITIVE Pythagorean triple (|X|, |Y|, Z). What is Z?", Cc / s, null,
          "The second point is ((1 − t²)/(1 + t²), 2t/(1 + t²)) = ((m² − n²)/(m² + n²), 2mn/(m² + n²)) with m = " + m + ", n = " + n + ": (" + A + "/" + Cc + ", " + B + "/" + Cc + "). " + (odd ? "Both m and n are odd, so all three of " + A + ", " + B + ", " + Cc + " are even; dividing by 2 gives (" + (A / 2) + ", " + (B / 2) + ", " + (Cc / 2) + ")." : "One of m, n is even and gcd(m, n) = 1, so (" + A + ", " + B + ", " + Cc + ") is already primitive.") + " Z = " + (Cc / s) + "."); },
      // 8. singular Weierstrass cubics
      function () { var c = R(1, 15), sg = pick([1, -1]), a = -3 * c * c, b = sg * 2 * c * c * c, xs = sg * c;
        return num("The cubic <b>" + curve(a, b) + "</b> is singular. What is the x-coordinate of its singular point?", xs, null,
          "4a³ + 27b² = 4" + p(a) + "³ + 27·" + p(b) + "² = " + f(4 * a * a * a) + " + " + (27 * b * b) + " = 0, so the cubic has a repeated root: x³ " + "− " + (3 * c * c) + "x " + (b < 0 ? "− " : "+ ") + Math.abs(b) + " = (x " + (xs < 0 ? "+ " : "− ") + c + ")²(x " + (xs < 0 ? "− " : "+ ") + (2 * c) + "). A singular point needs y = 0 and a double root of the cubic, so it is " + pt(xs, 0) + ", a node."); },
      // 9. the j-invariant
      function () { var a, b; do { a = R(-5, 5); b = R(-5, 5); } while (disc(a, b) === 0 || (a === 0 && b === 0));
        var jn = 1728 * 4 * a * a * a, jd = disc(a, b);
        return num("What is the j-invariant of the elliptic curve <b>" + curve(a, b) + "</b>? (Type an integer or a fraction.)", jn / jd, fr(jn, jd),
          "j = 1728 · 4a³/(4a³ + 27b²). Here 4a³ = " + f(4 * a * a * a) + " and 27b² = " + (27 * b * b) + ", so j = 1728 · " + f(4 * a * a * a) + "/" + f(jd) + " = " + fr(jn, jd) + "."); },
      // 10. the radical: how large a power lands in a monomial ideal
      function () { var a = R(2, 7), b = R(2, 7);
        return num("Over ℂ, the polynomial x + y lies in the radical of I = ⟨x" + sup(a) + ", y" + sup(b) + "⟩ ⊂ ℂ[x, y]. What is the smallest N with (x + y)" + "ᴺ ∈ I?", a + b - 1, null,
          "(x + y)ᴺ = Σ C(N, i) xⁱ yᴺ⁻ⁱ with every binomial coefficient nonzero. A monomial lies in the monomial ideal I iff i ≥ " + a + " or N − i ≥ " + b + ". This fails for some i ≤ " + (a - 1) + " exactly when N − " + (a - 1) + " ≤ " + (b - 1) + ", i.e. N ≤ " + (a + b - 2) + ". So N = " + a + " + " + b + " − 1 = " + (a + b - 1) + "."); },
      // 11. real conics and their points at infinity
      function () { var t = R(0, 2), A, B, Cc, q, ans;
        var opts = ["An ellipse, with no real points at infinity", "A hyperbola, with two real points at infinity", "A parabola, with one real point at infinity", "A hyperbola, with one real point at infinity"];
        if (t === 2) { A = nz(-5, 5); B = R(-6, 6); Cc = R(-6, 6); q = "y = " + poly([A, B, Cc]); ans = opts[2];
          return ch("Classify the real affine conic <b>" + q + "</b> and its projective closure.", ans, [opts[0], opts[1], opts[3]], "Homogenize: YZ = " + poly([A, 0, 0]).replace("x", "X") + " + …; at Z = 0 we get X² = 0, the single point [0 : 1 : 0] with multiplicity 2, so the line at infinity is tangent to the conic there: a parabola."); }
        do { A = R(1, 6); B = R(-8, 8); Cc = nz(-6, 6); } while ((t === 0) !== (B * B - 4 * A * Cc < 0) || B * B - 4 * A * Cc === 0);
        var D = B * B - 4 * A * Cc, form = (poly([A, 0, 0]) + (B ? (B < 0 ? " − " : " + ") + (Math.abs(B) === 1 ? "" : Math.abs(B)) + "xy" : "") + (Cc < 0 ? " − " : " + ") + (Math.abs(Cc) === 1 ? "" : Math.abs(Cc)) + "y²");
        ans = D < 0 ? opts[0] : opts[1];
        return ch("Classify the real affine conic <b>" + form + " = 1</b> and its projective closure.", ans, opts.filter(function (o) { return o !== ans; }),
          "The points at infinity solve the quadratic form " + form + " = 0 with Z = 0. Its discriminant is B² − 4AC = " + p(B) + "² − 4·" + A + "·" + p(Cc) + " = " + f(D) + (D < 0 ? " < 0: no real solutions, so the conic is bounded, an ellipse (A > 0 makes it nonempty)." : " > 0: two distinct real directions (the asymptotes), so it is a hyperbola.")); }
    ];
  })();

G["non-euclidean-geometry"] = (function () {
    var DEG = Math.PI / 180;
    // a random integer matrix in SL(2,Z) that is not ±I, with small entries
    function slz() {
      var a, b, c, d;
      do { a = R(-4, 4); d = R(-4, 4); b = nz(-5, 5); c = (a * d - 1) / b; } while (!Number.isInteger(c) || Math.abs(c) > 12);
      return [a, b, c, d];
    }
    function mtx(m) { return "(" + f(m[0]) + " " + f(m[1]) + "; " + f(m[2]) + " " + f(m[3]) + ")"; }
    // "kπ" written unambiguously: π, 3π, (1/3)π
    function kp(s) { s = String(s); return s === "1" ? "π" : s.indexOf("/") >= 0 ? "(" + s + ")π" : s + "π"; }
    function cpx(x, y) { return x === 0 ? (y === 1 ? "i" : y + "i") : f(x) + " + " + (y === 1 ? "" : y) + "i"; }
    return [
      // 1. distance in the upper half-plane
      function () {
        var x1, y1, x2, y2;
        do { x1 = R(-4, 4); y1 = R(1, 5); x2 = R(-4, 4); y2 = R(1, 5); } while (x1 === x2 && y1 === y2);
        var dx = x1 - x2, dy = y1 - y2, top = dx * dx + dy * dy, bot = 2 * y1 * y2;
        return num("In the upper half-plane with ds² = (dx² + dy²)/y², compute <b>cosh d(z, w)</b> for z = " + cpx(x1, y1) + " and w = " + cpx(x2, y2) + ". (Type a fraction or a whole number.)",
          1 + top / bot, fr(bot + top, bot),
          "cosh d = 1 + |z − w|²/(2 Im z Im w). Here |z − w|² = " + (dx * dx) + " + " + (dy * dy) + " = " + top + " and 2 Im z Im w = " + bot + ", so cosh d = 1 + " + top + "/" + bot + " = " + fr(bot + top, bot) + "."); },
      // 2. classify an element of PSL(2,R)
      function () {
        var m = slz(), t = Math.abs(m[0] + m[3]);
        var kind = t < 2 ? "Elliptic" : t === 2 ? "Parabolic" : "Hyperbolic";
        return ch("Classify the isometry z ↦ (az + b)/(cz + d) of the hyperbolic plane given by the matrix <b>" + mtx(m) + "</b> in PSL(2,ℝ).", kind, ["Elliptic", "Parabolic", "Hyperbolic"].filter(function (k) { return k !== kind; }),
          "The determinant is " + p(m[0]) + "·" + p(m[3]) + " − " + p(m[1]) + "·" + p(m[2]) + " = 1 and |trace| = |" + f(m[0]) + " + " + p(m[3]) + "| = " + t + ". |tr| < 2 is elliptic (a rotation), |tr| = 2 parabolic (one fixed point on the boundary), |tr| > 2 hyperbolic (a translation along an axis). So it is " + kind.toLowerCase() + "."); },
      // 3. translation length of a hyperbolic element
      function () {
        var m; do { m = slz(); } while (Math.abs(m[0] + m[3]) <= 2);
        var t = Math.abs(m[0] + m[3]), L = 2 * Math.acosh(t / 2);
        return num("The matrix <b>" + mtx(m) + "</b> defines a hyperbolic isometry of H. Find its translation length ℓ. (Round to 3 decimal places.)", L, L.toFixed(3),
          "For a hyperbolic element, |tr| = 2cosh(ℓ/2). Here |tr| = " + t + ", so ℓ = 2 arccosh(" + fr(t, 2) + ") ≈ " + L.toFixed(3) + ".", { tol: 0.001 }); },
      // 4. Girard's theorem
      function () {
        var A, B, Cc, Rr = R(1, 6);
        do { A = 5 * R(8, 34); B = 5 * R(8, 34); Cc = 5 * R(8, 34); } while (A + B + Cc <= 180 || B + Cc >= 180 + A || A + Cc >= 180 + B || A + B >= 180 + Cc);
        var E = A + B + Cc - 180, k = Rr * Rr * E;
        return num("A spherical triangle on a sphere of radius " + Rr + " has angles " + A + "°, " + B + "° and " + Cc + "°. Its area is kπ. Find k. (Type a fraction or a whole number.)", k / 180, fr(k, 180),
          "Girard: area = R²(α + β + γ − π). The excess is " + (A + B + Cc) + "° − 180° = " + E + "° = " + kp(fr(E, 180)) + ", so the area is " + (Rr * Rr) + " · " + kp(fr(E, 180)) + " = " + kp(fr(k, 180)) + "."); },
      // 5. area of a hyperbolic polygon
      function () {
        var n = R(3, 7), angs, s;
        do { angs = []; s = 0; for (var i = 0; i < n; i++) { var a = 5 * R(2, 30); angs.push(a); s += a; } } while (s >= (n - 2) * 180);
        var defect = (n - 2) * 180 - s;
        return num("A geodesic " + n + "-gon in the hyperbolic plane (curvature −1) has angles " + angs.join("°, ") + "°. Its area is kπ. Find k. (Type a fraction or a whole number.)", defect / 180, fr(defect, 180),
          "Area = (n − 2)π − (sum of angles). The angles sum to " + s + "°, and (" + n + " − 2) · 180° − " + s + "° = " + defect + "°, which is " + kp(fr(defect, 180)) + "."); },
      // 6. tile of a regular hyperbolic tiling {p, q}
      function () {
        var P, Q; do { P = R(3, 10); Q = R(3, 10); } while ((P - 2) * (Q - 2) <= 4);
        var top = P * Q - 2 * P - 2 * Q;
        return num("In the regular hyperbolic tiling {" + P + ", " + Q + "} (regular " + P + "-gons, " + Q + " at each vertex), each tile has area kπ. Find k. (Type a fraction or a whole number.)", top / Q, fr(top, Q),
          "Each angle is 2π/" + Q + ", so the area is (" + P + " − 2)π − " + P + " · 2π/" + Q + " = (" + (P - 2) + " − " + fr(2 * P, Q) + ")π = " + kp(fr(top, Q)) + ". (Hyperbolic because (p − 2)(q − 2) = " + ((P - 2) * (Q - 2)) + " > 4.)"); },
      // 7. orbifold Gauss–Bonnet / triangle groups
      function () {
        var t = R(0, 1);
        if (t === 0) {
          var a, b, c; do { a = R(2, 9); b = R(2, 9); c = R(2, 9); } while (a > b || b > c || a * b + b * c + c * a >= a * b * c);
          var N = a * b * c - (a * b + b * c + c * a), Dd = a * b * c;
          return num("The von Dyck group Δ(" + a + ", " + b + ", " + c + ") is a Fuchsian group of signature (0; " + a + ", " + b + ", " + c + "). Its covolume (the area of H/Δ) is kπ. Find k. (Type a fraction.)", 2 * N / Dd, fr(2 * N, Dd),
            "Area = 2π(2g − 2 + Σ(1 − 1/mᵢ)) = 2π(1 − 1/" + a + " − 1/" + b + " − 1/" + c + ") = 2π · " + fr(N, Dd) + " = " + kp(fr(2 * N, Dd)) + "."); }
        var g = R(0, 4), n = R(0, 5); while (2 * g - 2 + n <= 0) { g = R(0, 4); n = R(0, 5); }
        var k = 2 * (2 * g - 2 + n);
        return num("A complete hyperbolic surface (curvature −1) of genus " + g + " with " + n + " cusp" + (n === 1 ? "" : "s") + " and no cone points has area kπ. Find k.", k, null,
          "Gauss–Bonnet: area = −2πχ = 2π(2g − 2 + n) = 2π(" + (2 * g) + " − 2 + " + n + ") = " + k + "π."); },
      // 8. angle of parallelism
      function () {
        var t = R(0, 2);
        if (t === 2) {
          var th = 5 * R(3, 16), A = Math.atanh(Math.cos(th * DEG));
          return num("In the hyperbolic plane (curvature −1), a point P lies at distance a from a line ℓ, and the angle of parallelism is Π(a) = " + th + "°. Find a. (Round to 3 decimal places.)", A, A.toFixed(3),
            "cos Π(a) = tanh a, so a = artanh(cos " + th + "°) = artanh(" + Math.cos(th * DEG).toFixed(5) + ") ≈ " + A.toFixed(3) + ". (Equivalently a = −ln tan(Π/2).)", { tol: 0.001 });
        }
        var P, Q; do { P = R(2, 9); Q = R(1, P - 1); } while (gcd(P, Q) !== 1);
        var lg = Q === 1 ? "ln " + P : "ln(" + P + "/" + Q + ")", s2 = P * P + Q * Q;
        if (t === 0) return num("Let Π(a) be the angle of parallelism in the hyperbolic plane (curvature −1). Find <b>cos Π(" + lg + ")</b>. (Type a fraction.)", (P * P - Q * Q) / s2, fr(P * P - Q * Q, s2),
          "cos Π(a) = tanh a, and tanh(ln x) = (x² − 1)/(x² + 1). With x = " + fr(P, Q) + ": (" + (P * P) + " − " + (Q * Q) + ")/(" + (P * P) + " + " + (Q * Q) + ") = " + fr(P * P - Q * Q, s2) + ". (Equivalently tan(Π/2) = e⁻ᵃ = " + fr(Q, P) + ".)");
        return num("Let Π(a) be the angle of parallelism in the hyperbolic plane (curvature −1). Find <b>sin Π(" + lg + ")</b>. (Type a fraction.)", 2 * P * Q / s2, fr(2 * P * Q, s2),
          "sin Π(a) = 1/cosh a, and cosh(ln x) = (x + 1/x)/2. With x = " + fr(P, Q) + ": cosh a = " + fr(s2, 2 * P * Q) + ", so sin Π = " + fr(2 * P * Q, s2) + ". (Check: tan(Π/2) = e⁻ᵃ = " + fr(Q, P) + " and sin Π = 2t/(1 + t²).)"); },
      // 9. hyperbolic circles
      function () {
        var P, Q; do { P = R(2, 9); Q = R(1, P - 1); } while (gcd(P, Q) !== 1);
        var lg = Q === 1 ? "ln " + P : "ln(" + P + "/" + Q + ")", x = fr(P, Q), t = R(0, 2);
        var sh = fr(P * P - Q * Q, 2 * P * Q), co = fr(P * P + Q * Q, 2 * P * Q);
        if (t === 0) return num("A hyperbolic circle (curvature −1) has radius " + lg + ". Its circumference is kπ. Find k. (Type a fraction or a whole number.)", (P * P - Q * Q) / (P * Q), fr(P * P - Q * Q, P * Q),
          "Circumference = 2π sinh r, and sinh(ln x) = (x − 1/x)/2. With x = " + x + ", sinh r = " + sh + ", so the circumference is " + kp(fr(P * P - Q * Q, P * Q)) + ".");
        if (t === 1) return num("A hyperbolic circle (curvature −1) has radius " + lg + ". Its area is kπ. Find k. (Type a fraction or a whole number.)", (P - Q) * (P - Q) / (P * Q), fr((P - Q) * (P - Q), P * Q),
          "Area = 2π(cosh r − 1), and cosh(ln x) = (x + 1/x)/2. With x = " + x + ", cosh r = " + co + ", so the area is 2π(" + co + " − 1) = " + kp(fr((P - Q) * (P - Q), P * Q)) + ".");
        return num("In the Poincaré disk, the hyperbolic circle with centre 0 and hyperbolic radius " + lg + " is a Euclidean circle. Find its Euclidean radius. (Type a fraction.)", (P - Q) / (P + Q), fr(P - Q, P + Q),
          "d(0, u) = 2 artanh |u|, so the Euclidean radius is ρ = tanh(r/2). With r = ln x and x = " + x + ": tanh(ln(x)/2) = (x − 1)/(x + 1) = (" + P + " − " + Q + ")/(" + P + " + " + Q + ") = " + fr(P - Q, P + Q) + "."); },
      // 10. right hyperbolic triangle
      function () {
        var m = R(2, 9), n = R(2, 9);
        var ta = Math.sqrt(m * m - 1) / m, sb = Math.sqrt(n * n - 1), al = Math.atan(ta / sb) / DEG;
        var tb = Math.sqrt(n * n - 1) / n, sa = Math.sqrt(m * m - 1), be = Math.atan(tb / sa) / DEG;
        if (Math.random() < 0.5) return num("A right hyperbolic triangle (curvature −1) has legs a and b with cosh a = " + m + " and cosh b = " + n + ". Find the angle α opposite a, in degrees. (Round to 2 decimal places.)", al, al.toFixed(2),
          "tan α = tanh a / sinh b. Here tanh a = √" + (m * m - 1) + "/" + m + " ≈ " + ta.toFixed(5) + " and sinh b = √" + (n * n - 1) + " ≈ " + sb.toFixed(5) + ", so tan α ≈ " + (ta / sb).toFixed(5) + " and α ≈ " + al.toFixed(2) + "°. (The hypotenuse has cosh c = cosh a cosh b = " + (m * n) + ".)", { tol: 0.006 });
        var area = Math.PI / 2 - (al + be) * DEG;
        return num("A right hyperbolic triangle (curvature −1) has legs a and b with cosh a = " + m + " and cosh b = " + n + ". Find its area. (Round to 3 decimal places.)", area, area.toFixed(3),
          "Area = π − (π/2 + α + β). From tan α = tanh a / sinh b and tan β = tanh b / sinh a: α ≈ " + al.toFixed(4) + "° and β ≈ " + be.toFixed(4) + "°, so the area is π/2 − α − β ≈ " + area.toFixed(3) + ". (Check: cot α cot β = cosh c = " + (m * n) + ".)", { tol: 0.001 }); },
      // 11. Gaussian curvature of a metric
      function () {
        var t = R(0, 4), k = R(2, 9);
        if (t === 4) {
          var c = nz(-9, 9), cs = (c < 0 ? "1 − " + (c === -1 ? "" : -c) : "1 + " + (c === 1 ? "" : c)) + "(x² + y²)";
          return num("Find the Gaussian curvature K of the metric <b>ds² = 4(dx² + dy²)/(" + cs + ")²</b> (where it is defined).", c, null,
            "With λ = 2/(1 + cr²), c = " + c + ": for radial f, Δf = f″ + f′/r, and Δ ln(1 + cr²) = 4c/(1 + cr²)². So Δ ln λ = −4c/(1 + cr²)² and K = −Δ(ln λ)/λ² = " + c + ". (c = 1 is the stereographic sphere, c = −1 the Poincaré disk.)");
        }
        if (t === 0) return num("Find the Gaussian curvature K of the metric <b>ds² = " + k + "(dx² + dy²)/y²</b> on the upper half-plane. (Type a fraction.)", -1 / k, fr(-1, k),
          "For λ²(dx² + dy²), K = −Δ(ln λ)/λ². With λ = √" + k + "/y, Δ ln λ = Δ(−ln y) = 1/y², so K = −(1/y²)/(" + k + "/y²) = " + fr(-1, k) + ".");
        if (t === 1) return num("Find the Gaussian curvature K of the metric <b>ds² = dx² + e<sup>" + (2 * k) + "x</sup> dy²</b>.", -k * k, null,
          "With E = 1 and √G = e<sup>" + k + "x</sup>, K = −(√G)ₓₓ/√G = −" + (k * k) + ".");
        if (t === 2) return num("Find the Gaussian curvature K of the metric <b>ds² = dr² + sinh²(" + k + "r) dθ²</b>.", -k * k, null,
          "In polar form ds² = dr² + G dθ², K = −(√G)ᵣᵣ/√G. With √G = sinh(" + k + "r), (√G)ᵣᵣ = " + (k * k) + " sinh(" + k + "r), so K = −" + (k * k) + ".");
        return num("Find the Gaussian curvature K of the metric <b>ds² = dr² + sin²(r/" + k + ") dθ²</b> (for small r > 0). (Type a fraction.)", 1 / (k * k), fr(1, k * k),
          "With √G = sin(r/" + k + "), (√G)ᵣᵣ = −(1/" + (k * k) + ") sin(r/" + k + "), so K = −(√G)ᵣᵣ/√G = " + fr(1, k * k) + ". (Locally this is a sphere of radius " + k + "; the missing factor " + (k * k) + " in front of dθ² only creates cone points.)"); },
      // 12. Gauss–Bonnet with curvature −1/k
      function () {
        var g = R(2, 6), k = R(2, 9), A = 4 * (g - 1) * k;
        return num("A closed orientable surface of genus " + g + " carries a metric of constant curvature K = " + fr(-1, k) + ". Its area is kπ. Find k.", A, null,
          "Gauss–Bonnet: K · Area = 2πχ = 2π(2 − 2·" + g + ") = " + f(2 * (2 - 2 * g)) + "π. So Area = " + f(2 * (2 - 2 * g)) + "π ÷ (" + fr(-1, k) + ") = " + A + "π."); },
      // 13. great-circle distance on the Earth
      function () {
        var phi = 5 * R(2, 14), dl = 10 * R(3, 17), Re = 6371;
        var c = Math.pow(Math.sin(phi * DEG), 2) + Math.pow(Math.cos(phi * DEG), 2) * Math.cos(dl * DEG), d = Math.acos(c) * Re;
        return num("Two cities both lie on latitude " + phi + "°N, and their longitudes differ by " + dl + "°. Taking the Earth as a sphere of radius 6371 km, find the great-circle distance between them, in km. (Round to the nearest km.)", d, String(Math.round(d)),
          "Spherical law of cosines with the North Pole: cos(d/R) = sin²φ + cos²φ cos Δλ = " + c.toFixed(6) + ", so d/R ≈ " + Math.acos(c).toFixed(5) + " rad and d ≈ " + Math.round(d) + " km. (Along the parallel the trip would be " + Math.round(Re * Math.cos(phi * DEG) * dl * DEG) + " km.)", { tol: 1 }); },
      // 14. Poincaré disk distance from the centre
      function () {
        var q = R(3, 9), pp; do { pp = R(1, q - 1); } while (gcd(pp, q) !== 1);
        return num("In the Poincaré disk with ds² = 4|du|²/(1 − |u|²)², find <b>cosh d(0, " + pp + "/" + q + ")</b>. (Type a fraction.)", (q * q + pp * pp) / (q * q - pp * pp), fr(q * q + pp * pp, q * q - pp * pp),
          "cosh d(u, v) = 1 + 2|u − v|²/((1 − |u|²)(1 − |v|²)); with v = 0 and |u| = r this is (1 + r²)/(1 − r²). For r = " + pp + "/" + q + ": (" + (q * q) + " + " + (pp * pp) + ")/(" + (q * q) + " − " + (pp * pp) + ") = " + fr(q * q + pp * pp, q * q - pp * pp) + "."); },
      // 15. right spherical triangle
      function () {
        var a = 5 * R(4, 17), b = 5 * R(4, 17);
        var c = Math.acos(Math.cos(a * DEG) * Math.cos(b * DEG)) / DEG;
        return num("A right spherical triangle on the unit sphere has legs " + a + "° and " + b + "°. Find its hypotenuse in degrees. (Round to 2 decimal places.)", c, c.toFixed(2),
          "Spherical Pythagoras: cos c = cos a cos b = " + Math.cos(a * DEG).toFixed(5) + " × " + Math.cos(b * DEG).toFixed(5) + " = " + (Math.cos(a * DEG) * Math.cos(b * DEG)).toFixed(5) + ", so c ≈ " + c.toFixed(2) + "°. (It is less than the Euclidean value √(a² + b²) = " + Math.sqrt(a * a + b * b).toFixed(2) + "°.)", { tol: 0.006 }); }
    ];
  })();

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

G["complex-analysis"] = (function () {
    // "z − c" written nicely for a real integer c
    var zm = function (c) { return c === 0 ? "z" : "z" + plusMinus(-c); };
    // "z − w" for a Gaussian integer w = x + yi
    var zmc = function (x, y) { return y === 0 ? zm(x) : "z − (" + cx(x, y) + ")"; };
    // a factor with an exponent, leaving out the exponent 1
    var pw = function (s, m) { return "(" + s + ")" + (m === 1 ? "" : sup(m)); };
    // signed term " + 3x" / " − x" (k ≠ 0), t is the monomial text
    var term = function (k, t) { var a = Math.abs(k); return (k < 0 ? " − " : " + ") + (a === 1 && t ? "" : a) + t; };
    var kpi = function (s) { return s.indexOf("/") < 0 ? (s === "1" ? "" : s === "−1" ? "−" : s) + "πi" : "(" + s + ")πi"; };
    return [
      // 0. residue at a pole of order 2 or 3 (polynomial numerator)
      function () { var a, b, c; do { a = nz(-6, 6); b = nz(-9, 9); c = nz(-3, 3); } while (c * c * c + a * c + b === 0);
        var m = R(2, 3), num0 = poly([1, 0, a, b, 0], "z"), r, why;
        if (m === 2) { r = 4 * c * c * c + 2 * a * c + b;
          why = "For a pole of order 2, Res = p′(c) with p(z) = " + num0 + ". p′(z) = " + poly([4, 0, 2 * a, b], "z") + ", so p′(" + f(c) + ") = " + f(4 * c * c * c) + " + " + p(2 * a * c) + " + " + p(b) + " = " + f(r) + "."; }
        else { r = 6 * c * c + a;
          why = "For a pole of order 3, Res = p″(c)/2! with p(z) = " + num0 + ". p″(z) = " + poly([12, 0, 2 * a], "z") + ", so p″(" + f(c) + ")/2 = (" + f(12 * c * c) + " + " + p(2 * a) + ")/2 = " + f(r) + "."; }
        return num("Find the residue of <b>f(z) = (" + num0 + ")/" + pw(zm(c), m) + "</b> at z = " + f(c) + ".", r, null, why); },
      // 1. contour integral of 1/((z − p)(z − q)) over |z| = 3
      function () { var pp, q, both = Math.random() < 0.25;
        do { pp = R(-2, 2); q = both ? R(-2, 2) : pick([-1, 1]) * R(4, 8); } while (pp === q);
        var k = both ? 0 : 2 / (pp - q), show = both ? "0" : fr(2, pp - q);
        var why = both ? "Both poles " + f(pp) + " and " + f(q) + " lie inside |z| = 3. The residues are 1/(" + f(pp) + " − " + p(q) + ") and 1/(" + f(q) + " − " + p(pp) + "), which cancel, so I = 0 (equivalently, the residue at ∞ is 0 because the integrand is O(1/z²))."
          : "Only z = " + f(pp) + " lies inside |z| = 3 (|" + f(q) + "| > 3). Res = 1/(" + f(pp) + " − " + p(q) + ") = " + fr(1, pp - q) + ", so I = 2πi · (" + fr(1, pp - q) + ") = " + kpi(show) + ".";
        return num("Let I = ∮ over |z| = 3 of <b>dz / (" + "(" + zm(pp) + ")(" + zm(q) + "))</b>. Then I = k·πi. Find k. (Type an integer or a fraction.)", k, show, why); },
      // 2. ∫ dx/((x²+a²)(x²+b²)) = π/(ab(a+b))
      function () { var a, b; do { a = R(1, 6); b = R(1, 7); } while (a >= b);
        var d = a * b * (a + b);
        return num("Evaluate <b>∫ dx / ((x² + " + (a * a) + ")(x² + " + (b * b) + "))</b> over the whole real line. The answer is k·π; find k. (Type a fraction.)", 1 / d, fr(1, d),
          "Close in the upper half-plane. The poles there are " + cx(0, a) + " and " + cx(0, b) + ", with residues 1/(2·" + cx(0, a) + "·(" + (b * b) + " − " + (a * a) + ")) and 1/(2·" + cx(0, b) + "·(" + (a * a) + " − " + (b * b) + ")). Their sum is 1/(2i·ab(a + b)), so the integral is π/(ab(a + b)) = π/(" + a + "·" + b + "·" + (a + b) + ") = (" + fr(1, d) + ")π."); },
      // 3. ∫₀^{2π} dθ/(A + B cos θ)
      function () { var t = pick(TRIPLES.slice(0, 4)), s = R(1, 2), sw = Math.random() < 0.5, A = s * t[2], B = s * (sw ? t[0] : t[1]) * pick([1, -1]), L = s * (sw ? t[1] : t[0]), trig = pick(["cos", "sin"]);
        return num("Evaluate <b>∫₀^(2π) dθ / (" + A + (B < 0 ? " − " : " + ") + Math.abs(B) + " " + trig + " θ)</b>. The answer is k·π; find k. (Type a fraction.)", 2 / L, fr(2, L),
          "With z = e^(iθ) the integral becomes a residue computation, giving the general formula ∫₀^(2π) dθ/(a + b cos θ) = 2π/√(a² − b²) for a > |b|" + (trig === "sin" ? " (and the same for sin θ, by shifting θ by π/2)" : "") + ". Here √(" + (A * A) + " − " + (B * B) + ") = √" + (L * L) + " = " + L + ", so the value is 2π/" + L + " = (" + fr(2, L) + ")π."); },
      // 4. radius of convergence
      function () { var P0, Q0, S, j = R(0, 3); do { P0 = R(2, 7); Q0 = R(2, 7); S = R(1, 9); } while (P0 === Q0 || gcd(S, Math.max(P0, Q0)) === Math.max(P0, Q0));
        var M = Math.max(P0, Q0), coef = (j === 0 ? "" : j === 1 ? "n·" : "n" + sup(j) + "·");
        return num("Find the radius of convergence of <b>∑ " + coef + "(" + P0 + "ⁿ + " + Q0 + "ⁿ) zⁿ" + (S === 1 ? "" : " / " + S + "ⁿ") + "</b>. (Type a fraction.)", S / M, fr(S, M),
          "By Cauchy–Hadamard, |aₙ|^(1/n) = " + (j ? "n^(" + j + "/n) · " : "") + M + "(1 + (" + Math.min(P0, Q0) + "/" + M + ")ⁿ)^(1/n) / " + S + " → " + M + "/" + S + (j ? " (since n^(1/n) → 1)" : "") + ". So R = " + S + "/" + M + (gcd(S, M) > 1 ? " = " + fr(S, M) : "") + "."); },
      // 5. Rouché: zeros of zⁿ + a zᵏ + b in the unit disc or in the annulus 1 < |z| < 2
      function () { var n, k, a, b;
        do { n = R(5, 9); k = R(1, n - 2); b = nz(-4, 4); a = pick([1, -1]) * R(Math.abs(b) + 2, 20); } while (Math.pow(2, n) <= Math.abs(a) * Math.pow(2, k) + Math.abs(b));
        var pz = poly((function () { var c = []; for (var i = n; i >= 0; i--) c.push(i === n ? 1 : i === k ? a : i === 0 ? b : 0); return c; })(), "z"), ann = Math.random() < 0.5;
        var w1 = "On |z| = 1: |" + f(a) + "z" + (k === 1 ? "" : sup(k)) + "| = " + Math.abs(a) + " > " + (1 + Math.abs(b)) + " ≥ |z" + sup(n) + plusMinus(b) + "|, so by Rouché there are " + k + " zeros in |z| &lt; 1.";
        var w2 = " On |z| = 2: |z" + sup(n) + "| = " + Math.pow(2, n) + " > " + (Math.abs(a) * Math.pow(2, k) + Math.abs(b)) + " ≥ |" + f(a) + "z" + (k === 1 ? "" : sup(k)) + plusMinus(b) + "|, so all " + n + " zeros lie in |z| &lt; 2, leaving " + n + " − " + k + " = " + (n - k) + " in the annulus.";
        return num("How many zeros (with multiplicity) does <b>" + pz + "</b> have in " + (ann ? "the annulus 1 &lt; |z| &lt; 2" : "the unit disc |z| &lt; 1") + "?", ann ? n - k : k, null, w1 + (ann ? w2 : "")); },
      // 6. argument principle
      function () { var r = R(2, 4), pts = [], i, x, y;
        for (i = 0; i < 3; i++) { do { x = R(-4, 4); y = R(-4, 4); } while (x * x + y * y === r * r || pts.some(function (q) { return q[0] === x && q[1] === y; })); pts.push([x, y]); }
        var e = [R(1, 4), R(1, 4), R(1, 3)], ins = pts.map(function (q) { return q[0] * q[0] + q[1] * q[1] < r * r; });
        var v = (ins[0] ? e[0] : 0) + (ins[1] ? e[1] : 0) - (ins[2] ? e[2] : 0);
        var fz = pw(zmc(pts[0][0], pts[0][1]), e[0]) + pw(zmc(pts[1][0], pts[1][1]), e[1]) + " / " + pw(zmc(pts[2][0], pts[2][1]), e[2]);
        var parts = ["zero " + cx(pts[0][0], pts[0][1]) + " (order " + e[0] + ")", "zero " + cx(pts[1][0], pts[1][1]) + " (order " + e[1] + ")", "pole " + cx(pts[2][0], pts[2][1]) + " (order " + e[2] + ")"];
        var inside = parts.filter(function (_, j) { return ins[j]; });
        return num("Let <b>f(z) = " + fz + "</b>. Compute (1/2πi) ∮ f′(z)/f(z) dz over the circle |z| = " + r + ".", v, null,
          "By the argument principle the integral is Z − P inside the circle. A point x + yi is inside when x² + y² &lt; " + (r * r) + ". " + (inside.length ? "Inside: " + inside.join(", ") + "." : "Nothing lies inside.") + " So Z − P = " + f(v) + "."); },
      // 7. harmonic conjugate
      function () { var A = R(-4, 4), B = R(-5, 5), x0 = nz(-3, 3), y0 = nz(-3, 3);
        var u = "x³ − 3xy²" + (A ? term(A, "(x² − y²)") : "") + (B ? term(B, "x") : "");
        var v = 3 * x0 * x0 * y0 - y0 * y0 * y0 + 2 * A * x0 * y0 + B * y0;
        return num("The function <b>u(x, y) = " + u + "</b> is harmonic. Let v be its harmonic conjugate with v(0, 0) = 0. Find v(" + f(x0) + ", " + f(y0) + ").", v, null,
          "u = Re f with f(z) = " + poly([1, A, B, 0], "z") + ", so v = Im f = 3x²y − y³" + (A ? term(2 * A, "xy") : "") + (B ? term(B, "y") : "") + " (check: u_x = v_y, u_y = −v_x). At (" + f(x0) + ", " + f(y0) + "): " + f(3 * x0 * x0 * y0) + " − " + p(y0 * y0 * y0) + " + " + p(2 * A * x0 * y0) + " + " + p(B * y0) + " = " + f(v) + "."); },
      // 8. product over nontrivial roots of unity
      function () { var n = R(3, 7), a; do { a = R(-4, 5); } while (a === 0 || a === 1 || (a === -1)); var v = (Math.pow(a, n) - 1) / (a - 1);
        return num("Let ω = e^(2πi/" + n + "). Compute <b>∏ (" + f(a) + " − ω<sup>k</sup>)</b> over k = 1, …, " + (n - 1) + ".", v, null,
          "Since zⁿ − 1 = ∏ (z − ωᵏ) over k = 0, …, n − 1, dividing by z − 1 gives ∏ over k = 1, …, n − 1 of (z − ωᵏ) = 1 + z + … + z^(n−1) = (zⁿ − 1)/(z − 1). At z = " + f(a) + ": (" + p(a) + sup(n) + " − 1)/(" + f(a) + " − 1) = " + f(Math.pow(a, n) - 1) + "/" + p(a - 1) + " = " + f(v) + "."); },
      // 9. Cauchy's formula for derivatives: ∮ e^{az}/z^{n+1}
      function () { var a = nz(-4, 4), n = R(1, 4), N = Math.pow(a, n), d = fact(n), show = fr(2 * N, d);
        return num("Let I = ∮ over |z| = 1 of <b>e<sup>" + (a === 1 ? "" : a === -1 ? "−" : f(a)) + "z</sup> / z" + sup(n + 1) + "</b> dz. Then I = k·πi. Find k. (Type an integer or a fraction.)", 2 * N / d, show,
          "Cauchy's formula: ∮ g(z)/z^(n+1) dz = 2πi g⁽ⁿ⁾(0)/n!. With g(z) = e^(" + (a === 1 ? "" : a === -1 ? "−" : f(a)) + "z), g⁽" + sup(n) + "⁾(0) = " + p(a) + sup(n) + " = " + f(N) + ". So I = 2πi · (" + f(N) + "/" + d + ") = " + kpi(show) + "."); },
      // 10. classify a Möbius transformation
      function () { var a, b, c, d, D;
        do { a = R(-4, 4); b = R(-4, 4); c = R(-4, 4); d = R(-4, 4); D = a * d - b * c; } while (D === 0 || (b === 0 && c === 0 && a === d) || c === 0);
        var t2 = (a + d) * (a + d), tau = t2 / D, cls = tau < 0 ? "Loxodromic" : tau < 4 ? "Elliptic" : tau === 4 ? "Parabolic" : "Hyperbolic";
        var T = "(" + poly([a, b], "z") + ") / (" + poly([c, d], "z") + ")";
        return ch("Classify the Möbius transformation <b>T(z) = " + T + "</b>.", cls, ["Elliptic", "Parabolic", "Hyperbolic", "Loxodromic"].filter(function (s) { return s !== cls; }),
          "Normalise by the determinant: τ = (a + d)²/(ad − bc) = " + t2 + "/" + p(D) + " = " + fr(t2, D) + ". τ = 4 is parabolic, 0 ≤ τ &lt; 4 elliptic, τ > 4 hyperbolic, τ &lt; 0 loxodromic. So T is " + cls.toLowerCase() + "."); },
      // 11. Schwarz–Pick bound
      function () { var z0n, z0d, w0n, w0d;
        do { z0d = R(2, 6); z0n = R(0, z0d - 1); w0d = R(2, 6); w0n = R(-w0d + 1, w0d - 1); } while (gcd(z0n, z0d) !== 1 || gcd(Math.abs(w0n), w0d) !== 1 || (z0n === 0 && w0n === 0));
        var nu = (w0d * w0d - w0n * w0n) * z0d * z0d, de = (z0d * z0d - z0n * z0n) * w0d * w0d, zs = fr(z0n, z0d), ws = fr(w0n, w0d);
        return num("Let f : 𝔻 → 𝔻 be holomorphic with <b>f(" + zs + ") = " + ws + "</b>. What is the largest possible value of |f′(" + zs + ")|? (Type a fraction.)", nu / de, fr(nu, de),
          "Schwarz–Pick: |f′(z)| ≤ (1 − |f(z)|²)/(1 − |z|²), with equality for a disc automorphism. Here (1 − " + fr(w0n * w0n, w0d * w0d) + ")/(1 − " + fr(z0n * z0n, z0d * z0d) + ") = " + fr(w0d * w0d - w0n * w0n, w0d * w0d) + " ÷ " + fr(z0d * z0d - z0n * z0n, z0d * z0d) + " = " + fr(nu, de) + "."); },
      // 12. Laurent coefficient in an annulus
      function () { var pp = R(1, 3), q, m, neg = Math.random() < 0.5;
        do { q = R(2, 5); } while (q <= pp); m = neg ? R(1, 3) : R(0, 2);
        var nu = neg ? Math.pow(pp, m - 1) : 1, de = neg ? (pp - q) : (pp - q) * Math.pow(q, m + 1), pw0 = neg ? "z" + sup("-" + m) : (m === 0 ? "z⁰ (the constant term)" : m === 1 ? "z" : "z" + sup(m));
        return num("Let <b>f(z) = 1/((" + zm(pp) + ")(" + zm(q) + "))</b>. In its Laurent series on the annulus " + pp + " &lt; |z| &lt; " + q + ", what is the coefficient of " + pw0 + "? (Type a fraction.)", nu / de, fr(nu, de),
          "Partial fractions: f = (1/" + p(pp - q) + ")[1/(" + zm(pp) + ") − 1/(" + zm(q) + ")]. On the annulus, 1/(" + zm(pp) + ") = ∑ " + pp + "^(m−1) z^(−m) (m ≥ 1) and −1/(" + zm(q) + ") = ∑ zⁿ/" + q + "^(n+1) (n ≥ 0). " +
          (neg ? "The coefficient of z" + sup("-" + m) + " is " + pp + sup(m - 1) + "/" + p(pp - q) + " = " + fr(nu, de) + "." : "The coefficient of " + (m === 0 ? "z⁰" : m === 1 ? "z" : "z" + sup(m)) + " is 1/(" + p(pp - q) + "·" + q + sup(m + 1) + ") = " + fr(nu, de) + ".")); }
    ];
  })();

G["matrix-math"] = (function () {
    // ---- private helpers for the adult Matrix Math quiz ----
    function det2(a, b, c, d) { return a * d - b * c; }
    function det3(M) {
      return M[0][0] * det2(M[1][1], M[1][2], M[2][1], M[2][2]) - M[0][1] * det2(M[1][0], M[1][2], M[2][0], M[2][2]) + M[0][2] * det2(M[1][0], M[1][1], M[2][0], M[2][1]);
    }
    function rankOf(M) { // exact rank by fraction-free elimination (small integers only)
      var A = M.map(function (r) { return r.slice(); }), rows = A.length, cols = A[0].length, r = 0, c, i, k;
      for (c = 0; c < cols && r < rows; c++) {
        var piv = -1;
        for (i = r; i < rows; i++) if (A[i][c] !== 0) { piv = i; break; }
        if (piv < 0) continue;
        var t = A[r]; A[r] = A[piv]; A[piv] = t;
        for (i = r + 1; i < rows; i++) {
          var a = A[r][c], b = A[i][c];
          for (k = 0; k < cols; k++) A[i][k] = a * A[i][k] - b * A[r][k];
          var g = 0; for (k = 0; k < cols; k++) g = gcd(g, A[i][k]);
          if (g > 1) for (k = 0; k < cols; k++) A[i][k] /= g;
        }
        r++;
      }
      return r;
    }
    // "2·row 1 − row 2" style linear combination text
    function comb(cs, names) {
      var s = "";
      cs.forEach(function (c, i) {
        if (c === 0) return;
        var a = Math.abs(c), t = (a === 1 ? "" : a + "·") + names[i];
        s += s ? (c < 0 ? " − " : " + ") + t : (c < 0 ? "−" : "") + t;
      });
      return s || "0";
    }
    function fac(a) { return a === 0 ? "λ" : "(λ " + (a > 0 ? "− " + a : "+ " + (-a)) + ")"; }
    function fac2(a) { return a === 0 ? "λ²" : fac(a) + "²"; }
    function vec(v) { return "(" + v.map(f).join(", ") + ")"; }
    function dot(u, v) { var s = 0; for (var i = 0; i < u.length; i++) s += u[i] * v[i]; return s; }
    function cA(c, sym) { return (c === 1 ? "" : c === -1 ? "−" : f(c)) + sym; }
    function shiftI(a) { return a === 0 ? "A" : "A " + (a < 0 ? "+ " + (-a) : "− " + a) + "I"; }
    function dec(x) { return f(Math.round(x * 10) / 10); }

    return [
      // 0. 3 × 3 determinant by cofactor expansion
      function () {
        var M, D;
        do { M = [[R(-4, 5), R(-4, 5), R(-4, 5)], [R(-4, 5), R(-4, 5), R(-4, 5)], [R(-4, 5), R(-4, 5), R(-4, 5)]]; D = det3(M); } while (D === 0);
        var m1 = det2(M[1][1], M[1][2], M[2][1], M[2][2]), m2 = det2(M[1][0], M[1][2], M[2][0], M[2][2]), m3 = det2(M[1][0], M[1][1], M[2][0], M[2][1]);
        return num("Compute det A for" + mat(M), D, null,
          "Expand along the first row: det A = a₁₁M₁₁ − a₁₂M₁₂ + a₁₃M₁₃ with minors M₁₁ = " + f(m1) + ", M₁₂ = " + f(m2) + ", M₁₃ = " + f(m3) +
          ". So det A = " + p(M[0][0]) + "·" + p(m1) + " − " + p(M[0][1]) + "·" + p(m2) + " + " + p(M[0][2]) + "·" + p(m3) + " = " + f(D) + ".");
      },
      // 1. rank of a 3 × 4 matrix with a hidden linear relation
      function () {
        var r, M, why, i, j, k, base, c1, c2, names = ["row 1", "row 2", "row 3"];
        do {
          r = pick([1, 2, 2, 3]);
          base = [0, 1, 2].map(function () { return [R(-3, 3), R(-3, 3), R(-3, 3), R(-3, 3)]; });
          M = base; why = "";
          if (r === 2) {
            k = R(0, 2); i = (k + 1) % 3; j = (k + 2) % 3; c1 = nz(-2, 2); c2 = nz(-2, 2);
            M = [0, 1, 2].map(function (t) { return t === k ? base[i].map(function (x, q) { return c1 * x + c2 * base[j][q]; }) : base[t]; });
            why = names[k] + " = " + comb(i < j ? [c1, c2] : [c2, c1], i < j ? [names[i], names[j]] : [names[j], names[i]]) +
              ", so the rank is at most 2; " + names[i] + " and " + names[j] + " are not proportional, so the rank is exactly 2.";
          } else if (r === 1) {
            i = R(0, 2); c1 = nz(-2, 2); c2 = nz(-2, 2);
            var cs = [0, 1, 2].map(function (t) { return t === i ? 1 : (t === (i + 1) % 3 ? c1 : c2); });
            M = cs.map(function (c) { return base[i].map(function (x) { return c * x; }); });
            why = "Every row is a multiple of " + names[i] + " (the multipliers are " + cs.map(f).join(", ") + "), and the matrix is not zero, so the rank is 1.";
          } else {
            why = "No row is a combination of the others: elimination leaves three nonzero pivot rows (equivalently some 3 × 3 minor is nonzero), so the rank is 3.";
          }
        } while (rankOf(M) !== r || M.some(function (row) { return row.every(function (x) { return x === 0; }); }));
        return num("Find the rank of the 3 × 4 matrix" + mat(M), r, null, why);
      },
      // 2. eigenvalues of a 2 × 2 matrix from trace and determinant
      function () {
        var a, b, l1, l2, A;
        do {
          a = R(-2, 2); b = R(-2, 2); l1 = R(-5, 7); l2 = R(-5, 7);
          var P = [[1, a], [b, 1 + a * b]], Pi = [[1 + a * b, -a], [-b, 1]];
          var PD = [[P[0][0] * l1, P[0][1] * l2], [P[1][0] * l1, P[1][1] * l2]];
          A = [[PD[0][0] * Pi[0][0] + PD[0][1] * Pi[1][0], PD[0][0] * Pi[0][1] + PD[0][1] * Pi[1][1]], [PD[1][0] * Pi[0][0] + PD[1][1] * Pi[1][0], PD[1][0] * Pi[0][1] + PD[1][1] * Pi[1][1]]];
        } while (l1 === l2 || A[0][1] === 0 || A[1][0] === 0 || Math.max(Math.abs(A[0][0]), Math.abs(A[0][1]), Math.abs(A[1][0]), Math.abs(A[1][1])) > 30);
        var t = A[0][0] + A[1][1], d = det2(A[0][0], A[0][1], A[1][0], A[1][1]), big = Math.max(l1, l2), small = Math.min(l1, l2), askBig = R(0, 1) === 1;
        return num("Find the " + (askBig ? "larger" : "smaller") + " eigenvalue of" + mat(A), askBig ? big : small, null,
          "tr A = " + f(t) + " and det A = " + f(d) + ", so p(λ) = " + poly([1, -t, d], "λ") + " = " + fac(big) + fac(small) + ". The eigenvalues are " + f(big) + " and " + f(small) + ".");
      },
      // 3. Cayley–Hamilton: A³ = αA + βI
      function () {
        var A, t, d;
        do { A = [[R(-4, 5), R(-4, 5)], [R(-4, 5), R(-4, 5)]]; t = A[0][0] + A[1][1]; d = det2(A[0][0], A[0][1], A[1][0], A[1][1]); } while (t === 0 || d === 0 || (A[0][1] === 0 && A[1][0] === 0 && A[0][0] === A[1][1]));
        var al = t * t - d, be = -t * d, askA = R(0, 1) === 1;
        return num("By the Cayley–Hamilton theorem, A³ = αA + βI for the matrix below. Find " + (askA ? "α" : "β") + "." + mat(A), askA ? al : be, null,
          "tr A = " + f(t) + ", det A = " + f(d) + ", so A² = " + cA(t, "A") + plusMinus(-d) + "I. Then A³ = A·A² = " + cA(t, "A²") + plusMinus(-d) + "A = (t² − d)A − tdI with t² − d = " + f(al) + " and −td = " + f(be) + ".");
      },
      // 4. Jordan block sizes from the rank sequence
      function () {
        var n, sizes, lam = R(-3, 5), mx, ranks, k, s;
        do {
          sizes = []; n = 0;
          while (n < 5) { s = R(1, 4); sizes.push(s); n += s; }
          sizes.sort(function (x, y) { return y - x; }); mx = sizes[0];
        } while (n > 9 || sizes.length < 2);
        ranks = [n];
        for (k = 1; k <= mx; k++) ranks.push(sizes.reduce(function (acc, z) { return acc + Math.max(z - k, 0); }, 0));
        var info = ranks.slice(1).map(function (rk, i) { return "rank N" + (i + 1 === 1 ? "" : sup(i + 1)) + " = " + rk; }).join(", ");
        var ge = ranks.slice(1).map(function (rk, i) { return "≥ " + (i + 1) + ": " + (ranks[i] - rk); }).join("; ");
        var kind = R(0, 2), ans, q;
        if (kind === 0) { s = pick(sizes.concat([R(1, mx)])); ans = sizes.filter(function (z) { return z === s; }).length; q = "How many Jordan blocks of size exactly " + s + " does A have?"; }
        else if (kind === 1) { ans = mx; q = "What is the degree of the minimal polynomial of A?"; }
        else { ans = sizes.length; q = "How many Jordan blocks does A have (its geometric multiplicity)?"; }
        return num("A is " + n + " × " + n + " with the single eigenvalue " + f(lam) + ". With N = " + shiftI(lam) + ": " + info + ". " + q, ans, null,
          "Blocks of size ≥ k number rank N^(k−1) − rank N^k: " + ge + ". So the block sizes are " + sizes.join(", ") + " (sum " + n + "), the largest block has size " + mx + " and the minimal polynomial is " + (lam === 0 ? "λ" + sup(mx) : fac(lam) + sup(mx)) + ".");
      },
      // 5. two-state Markov chain
      function () {
        var A = R(1, 9), B = R(1, 9), kind = R(0, 1);
        var Pm = "<b>P = [ " + dec(1 - A / 10) + "  " + dec(A / 10) + " ; " + dec(B / 10) + "  " + dec(1 - B / 10) + " ]</b>";
        if (kind === 0) return num("A Markov chain has transition matrix " + Pm + " (rows sum to 1). Find the stationary probability π₁ of state 1. (Type a fraction.)", B / (A + B), fr(B, A + B),
          "πP = π gives π₁·" + dec(A / 10) + " = π₂·" + dec(B / 10) + ", so π₁ : π₂ = " + B + " : " + A + " and π₁ = " + B + "/" + (A + B) + (gcd(B, A + B) > 1 ? " = " + fr(B, A + B) : "") + ".");
        var l2 = (10 - A - B) / 10;
        return num("A Markov chain has transition matrix " + Pm + ". Its eigenvalues are 1 and λ₂; λ₂ governs the rate at which Pⁿ converges. Find λ₂. (Type a decimal.)", l2, f(l2),
          "The eigenvalues sum to tr P = " + dec(2 - (A + B) / 10) + ", and one of them is 1 (P1 = 1). So λ₂ = tr P − 1 = " + f(l2) + ".");
      },
      // 6. 2-norm condition number of a symmetric positive definite matrix
      function () {
        var m = R(1, 4), l2 = R(1, 6), S, l1;
        if (R(0, 1) === 1) { l1 = l2 + 5 * m; S = [[l2 + 4 * m, 2 * m], [2 * m, l2 + m]]; }
        else { l1 = l2 + 2 * m; S = [[l2 + m, m], [m, l2 + m]]; }
        var t = S[0][0] + S[1][1], d = det2(S[0][0], S[0][1], S[1][0], S[1][1]);
        return num("Find the condition number κ₂(S) = ‖S‖₂‖S⁻¹‖₂ of the symmetric matrix below. (Type a fraction if needed.)" + mat(S), l1 / l2, fr(l1, l2),
          "S is symmetric positive definite, so κ₂ = λ_max/λ_min. tr S = " + t + ", det S = " + d + ", p(λ) = " + poly([1, -t, d], "λ") + " = " + fac(l1) + fac(l2) + ". So κ₂ = " + l1 + "/" + l2 + " = " + fr(l1, l2) + ".");
      },
      // 7. smallest singular value = best rank-one approximation error
      function () {
        var A, F, D, disc;
        do { A = [[R(-4, 5), R(-4, 5)], [R(-4, 5), R(-4, 5)]]; F = A[0][0] * A[0][0] + A[0][1] * A[0][1] + A[1][0] * A[1][0] + A[1][1] * A[1][1]; D = Math.abs(det2(A[0][0], A[0][1], A[1][0], A[1][1])); disc = F * F - 4 * D * D; } while (D === 0 || disc <= 0);
        var s1 = Math.sqrt((F + Math.sqrt(disc)) / 2), s2 = Math.sqrt((F - Math.sqrt(disc)) / 2), askSmall = R(0, 1) === 1;
        var ans = askSmall ? s2 : s1;
        return num((askSmall ? "By the Eckart–Young theorem, the distance (in the 2-norm) from A to the nearest matrix of rank 1 is σ₂. Find it" : "Find the largest singular value σ₁ = ‖A‖₂") + " for the matrix below. (Round to 2 decimal places.)" + mat(A), ans, ans.toFixed(2),
          "σ₁² + σ₂² = ‖A‖_F² = " + F + " and σ₁σ₂ = |det A| = " + D + ". So σ² are the roots of t² − " + F + "t + " + (D * D) + ", i.e. (" + F + " ± √" + disc + ")/2. Hence σ₁ ≈ " + s1.toFixed(3) + " and σ₂ ≈ " + s2.toFixed(3) + ".", { tol: 0.006 });
      },
      // 8. inertia by Jacobi's sign rule on the leading minors
      function () {
        var M, D1, D2, D3, a, b, c, d, e, g;
        do {
          a = nz(-4, 4); b = R(-4, 4); c = R(-4, 4); d = nz(-4, 4); e = R(-4, 4); g = R(-4, 4);
          M = [[a, b, c], [b, d, e], [c, e, g]]; D1 = a; D2 = det2(a, b, b, d); D3 = det3(M);
        } while (D2 === 0 || D3 === 0);
        var seq = [1, D1, D2, D3], ch2 = 0;
        for (var i = 1; i < 4; i++) if ((seq[i] > 0) !== (seq[i - 1] > 0)) ch2++;
        var askNeg = R(0, 1) === 1;
        return num("How many " + (askNeg ? "negative" : "positive") + " eigenvalues does this symmetric matrix have?" + mat(M), askNeg ? ch2 : 3 - ch2, null,
          "The leading principal minors are D₁ = " + f(D1) + ", D₂ = " + f(D2) + ", D₃ = " + f(D3) + ", all nonzero. The LDLᵀ pivots are D₁, D₂/D₁, D₃/D₂, and by Sylvester's law of inertia their signs are the signs of the eigenvalues. The sequence 1, " + f(D1) + ", " + f(D2) + ", " + f(D3) + " has " + ch2 + " sign change" + (ch2 === 1 ? "" : "s") + ". Hence the matrix has " + ch2 + " negative and " + (3 - ch2) + " positive eigenvalue" + (3 - ch2 === 1 ? "" : "s") + " (counted with multiplicity).");
      },
      // 9. Cholesky factor entry
      function () {
        var l11 = R(1, 4), l22 = R(1, 4), l33 = R(1, 4), l21 = R(-3, 3), l31 = R(-3, 3), l32 = R(-3, 3);
        var A = [[l11 * l11, l11 * l21, l11 * l31], [l11 * l21, l21 * l21 + l22 * l22, l21 * l31 + l22 * l32], [l11 * l31, l21 * l31 + l22 * l32, l31 * l31 + l32 * l32 + l33 * l33]];
        var askLast = R(0, 1) === 1;
        var why = "l₁₁ = √" + A[0][0] + " = " + l11 + ", l₂₁ = " + f(A[1][0]) + "/" + l11 + " = " + f(l21) + ", l₃₁ = " + f(A[2][0]) + "/" + l11 + " = " + f(l31) +
          ", l₂₂ = √(" + A[1][1] + " − " + (l21 * l21) + ") = " + l22 + ", l₃₂ = (" + f(A[2][1]) + " − " + p(l31) + "·" + p(l21) + ")/" + l22 + " = " + f(l32) +
          ", l₃₃ = √(" + A[2][2] + " − " + (l31 * l31) + " − " + (l32 * l32) + ") = " + l33 + ".";
        return num("A = LLᵀ is the Cholesky factorization of the positive definite matrix below (L lower triangular with positive diagonal). Find " + (askLast ? "l₃₃" : "l₃₂") + "." + mat(A), askLast ? l33 : l32, null, why);
      },
      // 10. squared distance from a point to a line (orthogonal projection)
      function () {
        var a, b, aa, ab, bb, N;
        do { a = [R(-3, 3), R(-3, 3), R(-3, 3)]; b = [R(-4, 4), R(-4, 4), R(-4, 4)]; aa = dot(a, a); ab = dot(a, b); bb = dot(b, b); N = bb * aa - ab * ab; } while (aa === 0 || ab === 0 || N === 0);
        return num("Find the squared distance from b = " + vec(b) + " to the line spanned by a = " + vec(a) + " in ℝ³. (Type a fraction if needed.)", N / aa, fr(N, aa),
          "The orthogonal projection is p = (a·b/a·a) a with a·b = " + f(ab) + ", a·a = " + aa + ". By Pythagoras ‖b − p‖² = ‖b‖² − (a·b)²/(a·a) = " + bb + " − " + (ab * ab) + "/" + aa + " = " + fr(N, aa) + ".");
      },
      // 11. matrix determinant lemma
      function () {
        var d = [nz(-4, 4), nz(-4, 4), nz(-4, 4)], u = [R(-3, 3), R(-3, 3), R(-3, 3)], v = [R(-3, 3), R(-3, 3), R(-3, 3)];
        var dD = d[0] * d[1] * d[2], terms = [u[0] * v[0] * d[1] * d[2], u[1] * v[1] * d[0] * d[2], u[2] * v[2] * d[0] * d[1]];
        var ans = dD + terms[0] + terms[1] + terms[2];
        return num("Let D = diag(" + d.map(f).join(", ") + "), u = " + vec(u) + " and v = " + vec(v) + ". Find det(D + uvᵀ).", ans, null,
          "Matrix determinant lemma: det(D + uvᵀ) = det D · (1 + vᵀD⁻¹u) = det D + ∑ u_i v_i (∏ over j ≠ i of d_j) = " + f(dD) + " + " + p(terms[0]) + " + " + p(terms[1]) + " + " + p(terms[2]) + " = " + f(ans) + ".");
      },
      // 12. sign of a permutation = determinant of its permutation matrix
      function () {
        var s, inv = 0, i, j;
        do { s = shuffle([1, 2, 3, 4, 5, 6]); } while (s.every(function (x, k) { return x === k + 1; }));
        for (i = 0; i < 6; i++) for (j = i + 1; j < 6; j++) if (s[i] > s[j]) inv++;
        var seen = [], cyc = [];
        for (i = 1; i <= 6; i++) if (!seen[i]) { var c = [], x = i; while (!seen[x]) { seen[x] = true; c.push(x); x = s[x - 1]; } if (c.length > 1) cyc.push("(" + c.join(" ") + ")"); }
        var sg = inv % 2 === 0 ? 1 : -1;
        return num("σ ∈ S₆ has one-line notation <b>" + s.join(" ") + "</b> (σ(1) = " + s[0] + ", σ(2) = " + s[1] + ", …). Its permutation matrix P has P e_i = e_σ(i). Find det P (type 1 or −1).", sg, null,
          "det P = sgn σ = (−1)^(number of inversions). σ has " + inv + " inversion" + (inv === 1 ? "" : "s") + ", so sgn σ = " + f(sg) + ". Check with cycles: σ = " + (cyc.length ? cyc.join("") : "identity") + ", and a k-cycle has sign (−1)^(k−1).");
      },
      // 13. minimal polynomial and diagonalizability from rank data
      function () {
        var a = R(-3, 4), b, r = R(1, 2);
        do { b = R(-3, 4); } while (b === a);
        var m1 = fac(a) + fac(b), m2 = fac2(a) + fac(b), wrong1 = fac2(a), wrong2 = fac(a) + fac2(b);
        var correct = r === 1 ? m1 : m2;
        return ch("A is 3 × 3 with characteristic polynomial " + fac2(a) + fac(b) + ", and rank(" + shiftI(a) + ") = " + r + ". What is the minimal polynomial of A?",
          correct, [r === 1 ? m2 : m1, wrong1, wrong2],
          "The geometric multiplicity of " + f(a) + " is 3 − " + r + " = " + (3 - r) + ". " + (r === 1 ? "It equals the algebraic multiplicity 2, so A is diagonalizable and the minimal polynomial has simple roots: " + m1 + "." : "It is less than the algebraic multiplicity 2, so there is a Jordan block J₂(" + f(a) + ") and the minimal polynomial is " + m2 + "; A is not diagonalizable.") + " The eigenvalue " + f(b) + " is simple, so its factor appears once.");
      },
      // 14. dimension of the centralizer of a nilpotent Jordan matrix
      function () {
        var sizes, n, i, j, tot = 0;
        do { sizes = []; n = 0; while (n < 5) { var z = R(1, 4); sizes.push(z); n += z; } } while (n > 8 || sizes.length < 2);
        sizes.sort(function (x, y) { return y - x; });
        for (i = 0; i < sizes.length; i++) for (j = 0; j < sizes.length; j++) tot += Math.min(sizes[i], sizes[j]);
        return num("A is " + n + " × " + n + " nilpotent with Jordan blocks of sizes " + sizes.join(", ") + ". Find the dimension of the space of matrices X with AX = XA.", tot, null,
          "Writing X in blocks X_ij compatible with the Jordan decomposition, AX = XA says J(k_i)X_ij = X_ij J(k_j); the solutions are upper triangular Toeplitz blocks, a space of dimension min(k_i, k_j). Summing min(k_i, k_j) over all ordered pairs (i, j) gives " + tot + ".");
      },
      // 15. order of GL_n over a finite field
      function () {
        var c = pick([[2, 2], [2, 3], [2, 5], [3, 2], [3, 3], [2, 7], [4, 2]]), n = c[0], qq = c[1], qn = Math.pow(qq, n), ans = 1, fs = [];
        for (var k = 0; k < n; k++) { ans *= qn - Math.pow(qq, k); fs.push(qn - Math.pow(qq, k)); }
        return num("How many invertible " + n + " × " + n + " matrices are there over the finite field with " + qq + " elements?", ans, null,
          "Choose the columns in turn: column k + 1 must avoid the span of the first k columns, which has " + qq + "^k elements, giving " + qn + " − " + qq + "^k choices. So |GL(" + n + ", " + qq + ")| = " + fs.join(" · ") + " = " + ans + ".");
      }
    ];
  })();

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

G["combinatorics"] = (function () {
    // exact binomial (0 outside the triangle), Stirling numbers, derangements, partitions
    function B(n, k) { if (k < 0 || n < 0 || k > n) return 0; var r = 1, i; for (i = 0; i < k; i++) r = r * (n - i) / (i + 1); return Math.round(r); }
    function S2(n, k) { if (n === 0 && k === 0) return 1; if (n === 0 || k === 0) return 0; return S2(n - 1, k - 1) + k * S2(n - 1, k); }
    function der(n) { var a = 1, b = 0, i, t; if (n === 0) return 1; for (i = 2; i <= n; i++) { t = (i - 1) * (a + b); a = b; b = t; } return b; }
    function bell(n) { var s = 0, k; for (k = 0; k <= n; k++) s += S2(n, k); return s; }
    function parts(n) { var q = [1], i, k; for (i = 1; i <= n; i++) q[i] = 0; for (k = 1; k <= n; k++) for (i = k; i <= n; i++) q[i] += q[i - k]; return q; }
    function distinct(n) { var q = [1], i, k; for (i = 1; i <= n; i++) q[i] = 0; for (k = 1; k <= n; k++) for (i = n; i >= k; i--) q[i] += q[i - k]; return q[n]; }
    function phi(n) { var r = 0, i; for (i = 1; i <= n; i++) if (gcd(i, n) === 1) r++; return r; }
    function pw(b, e) { return b < 0 ? "(" + f(b) + ")" + sup(e) : b + sup(e); }
    function pwn(b) { return b < 0 ? "(" + f(b) + ")ⁿ" : b + "ⁿ"; }
    // "c·aₙ₋ⱼ" terms of a recurrence, with clean signs
    function rec(cs) {
      var s = "", names = ["aₙ₋₁", "aₙ₋₂"];
      cs.forEach(function (c, i) {
        if (c === 0) return;
        var t = (Math.abs(c) === 1 ? "" : Math.abs(c)) + names[i];
        s += s ? (c < 0 ? " − " : " + ") + t : (c < 0 ? "−" : "") + t;
      });
      return "aₙ = " + s;
    }
    return [
      // 1. stars and bars with lower bounds
      function () {
        var k = R(3, 5), b = R(1, 3), n = R(k * b + 4, k * b + 14), m = n - k * b, v = B(m + k - 1, k - 1), vs = [], i;
        for (i = 1; i <= k; i++) vs.push("x" + sub(i));
        return num("How many integer solutions does <b>" + vs.join(" + ") + " = " + n + "</b> have with every xᵢ ≥ " + b + "?", v, big(v),
          "Substitute yᵢ = xᵢ − " + b + " ≥ 0. Then the yᵢ sum to " + n + " − " + k + "·" + b + " = " + m + ", and stars and bars gives C(" + m + " + " + (k - 1) + ", " + (k - 1) + ") = C(" + (m + k - 1) + ", " + (k - 1) + ") = " + big(v) + ".");
      },
      // 2. inclusion–exclusion with upper bounds
      function () {
        var u = R(4, 9), n = R(u + 2, 2 * u + 1), terms = [], v = 0, j, t;
        for (j = 0; j <= 3; j++) { t = B(3, j) * B(n - j * (u + 1) + 2, 2); v += (j % 2 ? -1 : 1) * t; if (t) terms.push((j ? (j % 2 ? "− " : "+ ") : "") + (j ? B(3, j) + "·" : "") + "C(" + (n - j * (u + 1) + 2) + ", 2)"); }
        return num("How many integer solutions does <b>x₁ + x₂ + x₃ = " + n + "</b> have with 0 ≤ xᵢ ≤ " + u + " for every i?", v, null,
          "Let Aᵢ be the solutions with xᵢ ≥ " + (u + 1) + ". Removing " + (u + 1) + " from j of the variables leaves C(" + n + " − " + (u + 1) + "j + 2, 2) solutions, so inclusion–exclusion gives " + terms.join(" ") + " = " + v + ".");
      },
      // 3. surjections
      function () {
        var k = R(3, 4), n = R(k + 2, 8), v = 0, j, s = [];
        for (j = 0; j < k; j++) { v += (j % 2 ? -1 : 1) * B(k, j) * Math.pow(k - j, n); s.push((j ? (j % 2 ? " − " : " + ") : "") + (j ? B(k, j) + "·" : "") + (k - j) + sup(n)); }
        return num("How many surjective functions are there from " + (n === 8 ? "an " : "a ") + n + "-element set onto a " + k + "-element set?", v, big(v),
          "By inclusion–exclusion over the missed values: " + s.join("") + " = " + big(v) + ". Check: this is " + k + "!·S(" + n + ", " + k + ") = " + fact(k) + " · " + big(S2(n, k)) + ".");
      },
      // 4. permutations with exactly j fixed points
      function () {
        var n = R(5, 9), j = R(1, 3), v = B(n, j) * der(n - j);
        return num("How many permutations of {1, …, " + n + "} have <b>exactly " + j + "</b> fixed point" + (j > 1 ? "s" : "") + "?", v, big(v),
          "Choose the fixed points in C(" + n + ", " + j + ") = " + B(n, j) + " ways and derange the other " + (n - j) + " elements: D" + sub(n - j) + " = " + der(n - j) + ". Total " + B(n, j) + " · " + der(n - j) + " = " + big(v) + ".");
      },
      // 5. linear recurrence with two distinct roots
      function () {
        var r, s, al, be;
        do { r = R(-3, 4); s = R(-3, 4); al = nz(-3, 3); be = nz(-3, 3); } while (r === 0 || s === 0 || r === s);
        var a0 = al + be, a1 = al * r + be * s, m = R(5, 7), v = al * Math.pow(r, m) + be * Math.pow(s, m);
        return num("Let <b>" + rec([r + s, -r * s]) + "</b> for n ≥ 2, with a₀ = " + f(a0) + " and a₁ = " + f(a1) + ". Find a" + sub(m) + ".", v, null,
          "The characteristic polynomial " + poly([1, -(r + s), r * s], "t") + " has roots " + f(r) + " and " + f(s) + ", so aₙ = α·" + pwn(r) + " + β·" + pwn(s) + ". The initial values give α = " + f(al) + ", β = " + f(be) + ", so a" + sub(m) + " = " + f(al) + "·" + pw(r, m) + " + " + p(be) + "·" + pw(s, m) + " = " + f(v) + ".");
      },
      // 6. linear recurrence with a double root
      function () {
        var r = pick([2, 3, -2]), al = R(1, 3), be = nz(-3, 3), m = R(4, 6);
        var a0 = al, a1 = (al + be) * r, v = (al + be * m) * Math.pow(r, m);
        return num("Let <b>" + rec([2 * r, -r * r]) + "</b> for n ≥ 2, with a₀ = " + f(a0) + " and a₁ = " + f(a1) + ". Find a" + sub(m) + ".", v, null,
          "The characteristic polynomial is (t " + (r < 0 ? "+ " + (-r) : "− " + r) + ")², a double root, so aₙ = (α + βn)·" + pwn(r) + ". From a₀: α = " + al + "; from a₁ = (α + β)·" + p(r) + ": β = " + f(be) + ". So a" + sub(m) + " = (" + al + " + " + p(be) + "·" + m + ")·" + pw(r, m) + " = " + f(v) + ".");
      },
      // 7. coefficient extraction
      function () {
        var a = R(1, 3), b = R(2, 4), n = R(5, 10), v = 0, j, s = [];
        for (j = 0; j <= a; j++) { v += B(a, j) * B(n - j + b - 1, b - 1); s.push(B(a, j) + "·" + B(n - j + b - 1, b - 1)); }
        return num("Find the coefficient of x" + sup(n) + " in <b>(1 + x)" + (a > 1 ? sup(a) : "") + " / (1 − x)" + sup(b) + "</b>.", v, null,
          "[xᵐ](1 − x)" + sup("-" + b) + " = C(m + " + (b - 1) + ", " + (b - 1) + "). Multiplying by (1 + x)" + (a > 1 ? sup(a) : "") + " = ∑ C(" + a + ", j)xʲ gives ∑ⱼ C(" + a + ", j)·C(" + n + " − j + " + (b - 1) + ", " + (b - 1) + ") = " + s.join(" + ") + " = " + v + ".");
      },
      // 8. Stirling numbers of the second kind
      function () {
        var n = R(6, 9), k = R(2, n - 2), v = S2(n, k);
        return num("Compute the Stirling number of the second kind <b>S(" + n + ", " + k + ")</b>, the number of partitions of a set of " + n + " elements into " + k + " nonempty blocks.", v, big(v),
          "S(n, k) = S(n − 1, k − 1) + k·S(n − 1, k): S(" + n + ", " + k + ") = S(" + (n - 1) + ", " + (k - 1) + ") + " + k + "·S(" + (n - 1) + ", " + k + ") = " + big(S2(n - 1, k - 1)) + " + " + k + "·" + big(S2(n - 1, k)) + " = " + big(v) + ".");
      },
      // 9. Bell numbers from the recurrence
      function () {
        var n = R(5, 9), v = bell(n), s = [], k;
        for (k = 0; k < n; k++) s.push(B(n - 1, k) + "·" + bell(k));
        return num("The Bell numbers begin B₀, …, B₄ = 1, 1, 2, 5, 15. Find <b>B" + sub(n) + "</b>, the number of set partitions of a set of " + n + " elements.", v, big(v),
          "Classify by the block containing the last element: Bₙ = ∑ₖ C(n − 1, k)·Bₖ. So B" + sub(n) + " = " + s.join(" + ") + " = " + big(v) + ".");
      },
      // 10. partitions via Euler's pentagonal recurrence
      function () {
        var n = R(10, 24), q = parts(n), terms = [], j, g, sg, i;
        for (j = 1; j * (3 * j - 1) / 2 <= n; j++) {
          sg = j % 2 ? "+" : "−";
          g = [j * (3 * j - 1) / 2, j * (3 * j + 1) / 2];
          for (i = 0; i < 2; i++) if (g[i] <= n) terms.push(sg + " p(" + (n - g[i]) + ")");
        }
        var txt = terms.join(" ").replace(/^\+ /, "");
        return num("The partition numbers p(0), …, p(" + (n - 1) + ") are " + q.slice(0, n).join(", ") + ". Use Euler's pentagonal number theorem to find <b>p(" + n + ")</b>.", q[n], big(q[n]),
          "p(n) = p(n − 1) + p(n − 2) − p(n − 5) − p(n − 7) + p(n − 12) + p(n − 15) − ⋯. Here p(" + n + ") = " + txt + " = " + big(q[n]) + ".");
      },
      // 11. distinct parts = odd parts
      function () {
        var n = R(8, 22), v = distinct(n), odd = pick([true, false]);
        return num("How many partitions of " + n + " are there into <b>" + (odd ? "odd" : "distinct") + "</b> parts?", v, null,
          "By Euler's theorem, ∏(1 + xᵏ) = ∏(1 − x²ᵏ)/(1 − xᵏ) = ∏ 1/(1 − x²ᵏ⁻¹), so partitions into distinct parts and into odd parts are equinumerous; for n = " + n + " there are " + v + " of each.");
      },
      // 12. lattice paths below the diagonal / ballot
      function () {
        var b = R(2, 6), a = R(b, b + 4);
        if (a > b && R(0, 1)) {
          return num("In an election candidate A gets " + a + " votes and B gets " + b + ". The ballots are counted in random order. What is the probability that A is <b>strictly ahead</b> throughout the count? (Type a fraction.)", (a - b) / (a + b), fr(a - b, a + b),
            "Bertrand's ballot theorem (via the cycle lemma): the probability is (a − b)/(a + b) = " + (a - b) + "/" + (a + b) + (gcd(a - b, a + b) > 1 ? " = " + fr(a - b, a + b) : "") + ".", { lowest: true });
        }
        var v = B(a + b, b) * (a - b + 1) / (a + 1);
        return num("How many lattice paths with unit steps east and north go from (0, 0) to <b>(" + a + ", " + b + ")</b> without ever rising above the line y = x?", v, big(v),
          "By the reflection principle the bad paths correspond to paths ending at (" + (b - 1) + ", " + (a + 1) + "), so the count is C(" + (a + b) + ", " + b + ") − C(" + (a + b) + ", " + (b - 1) + ") = " + big(B(a + b, b)) + " − " + big(B(a + b, b - 1)) + " = " + big(v) + ".");
      },
      // 13. necklaces by Burnside
      function () {
        var n = R(4, 10), k = R(2, 4), tot = 0, s = [], d;
        for (d = 1; d <= n; d++) if (n % d === 0) { tot += phi(d) * Math.pow(k, n / d); s.push((phi(d) > 1 ? phi(d) + "·" : "") + k + sup(n / d)); }
        var v = tot / n;
        return num("How many necklaces of " + n + " beads, each bead one of " + k + " colours, are there <b>up to rotation</b>?", v, big(v),
          "By Burnside's lemma, N(n, k) = (1/n) ∑ over d | n of φ(d)·k^(n/d) = (" + s.join(" + ") + ")/" + n + " = " + big(tot) + "/" + n + " = " + big(v) + ".");
      },
      // 14. cube colourings
      function () {
        var faces = pick([true, false]), k = faces ? R(2, 6) : R(2, 4);
        var v = faces ? (Math.pow(k, 6) + 3 * Math.pow(k, 4) + 12 * Math.pow(k, 3) + 8 * k * k) / 24 : (Math.pow(k, 8) + 17 * Math.pow(k, 4) + 6 * k * k) / 24;
        return num("In how many ways can the <b>" + (faces ? "6 faces" : "8 vertices") + "</b> of a cube be coloured with " + k + " colours, counting colourings that differ by a rotation as the same?", v, big(v),
          "The rotation group has 24 elements. Counting cycles of each class on the " + (faces ? "faces" : "vertices") + " and applying Burnside: " + (faces ? "(k⁶ + 3k⁴ + 12k³ + 8k²)/24" : "(k⁸ + 17k⁴ + 6k²)/24") + " with k = " + k + " gives " + big(v) + ".");
      },
      // 15. trees with a prescribed degree (Prüfer codes)
      function () {
        var n = R(5, 8), d = R(1, n - 2), v = B(n - 2, d - 1) * Math.pow(n - 1, n - d - 1);
        return num("How many labelled trees on the vertex set {1, …, " + n + "} have vertex 1 of degree exactly " + d + "?", v, big(v),
          (d === 1 ? "In the Prüfer code (length " + (n - 2) + "), vertex 1 must not appear, so every entry is one of the other " + (n - 1) + " labels: " : "In the Prüfer code (length " + (n - 2) + "), vertex 1 appears exactly " + (d - 1) + " time" + (d === 2 ? "" : "s") + ". Choose those positions in C(" + (n - 2) + ", " + (d - 1) + ") ways and fill the rest from the other " + (n - 1) + " labels: ") + B(n - 2, d - 1) + " · " + (n - 1) + sup(n - d - 1) + " = " + big(v) + ".");
      },
      // 16. Erdős lower bound
      function () {
        var k = R(4, 8), e = k * (k - 1) / 2 - 1, lim = Math.pow(2, e), n = k;
        while (B(n + 1, k) < lim) n++;
        return num("Erdős's theorem says R(k, k) > n whenever C(n, k)·2^(1 − C(k, 2)) &lt; 1. For <b>k = " + k + "</b>, what is the largest n for which this proves R(" + k + ", " + k + ") > n?", n, null,
          "We need C(n, " + k + ") &lt; 2" + sup(e) + " = " + big(lim) + ". C(" + n + ", " + k + ") = " + big(B(n, k)) + " works, but C(" + (n + 1) + ", " + k + ") = " + big(B(n + 1, k)) + " does not. So R(" + k + ", " + k + ") > " + n + ".");
      },
      // 17. expected number of monochromatic cliques
      function () {
        var k = R(3, 4), n = R(k + 3, 12), top = B(n, k) * 2, bot = Math.pow(2, k * (k - 1) / 2);
        return num("Each edge of K" + sub(n) + " is coloured red or blue independently with probability 1/2. What is the <b>expected number</b> of monochromatic K" + sub(k) + "'s? (Type a fraction or a whole number.)", top / bot, fr(top, bot),
          "By linearity of expectation: C(" + n + ", " + k + ")·2·2" + sup("-" + (k * (k - 1) / 2)) + " = " + B(n, k) + "·2/" + bot + " = " + fr(top, bot) + ".", { lowest: true });
      },
      // 18. the twelvefold way
      function () {
        var F = ["kⁿ", "(k)ₙ = k!/(k − n)!", "k!·S(n, k)", "C(n + k − 1, k − 1)", "C(k, n)", "C(n − 1, k − 1)", "S(n, k)", "pₖ(n)"];
        var cases = [
          ["n distinct balls into k distinct boxes, any number per box", 0],
          ["n distinct balls into k distinct boxes, at most one per box", 1],
          ["n distinct balls into k distinct boxes, no box empty", 2],
          ["n identical balls into k distinct boxes, any number per box", 3],
          ["n identical balls into k distinct boxes, at most one per box", 4],
          ["n identical balls into k distinct boxes, no box empty", 5],
          ["n distinct balls into k identical boxes, no box empty", 6],
          ["n identical balls into k identical boxes, no box empty", 7]];
        var c = pick(cases), wrong = shuffle(F.filter(function (x, i) { return i !== c[1]; }));
        return ch("Which formula counts the placements of <b>" + c[0] + "</b>?", F[c[1]], wrong,
          "In the twelvefold way this is the entry " + F[c[1]] + ". Distinct balls into distinct boxes are functions; identical balls record only the occupancy numbers (stars and bars); identical boxes record only the set partition (Stirling) or the integer partition (pₖ).");
      }
      ,
      // 19. Kummer's theorem: p-adic valuation of a binomial coefficient
      function () {
        var pr = pick([2, 3, 5]), m = R(20, 200), n = R(20, 200), v = 0, c = 0, x = m, y = n, dm = [], dn = [];
        while (x > 0 || y > 0 || c > 0) { var t = (x % pr) + (y % pr) + c; c = t >= pr ? 1 : 0; v += c; x = Math.floor(x / pr); y = Math.floor(y / pr); }
        for (x = m; x > 0; x = Math.floor(x / pr)) dm.unshift(x % pr);
        for (y = n; y > 0; y = Math.floor(y / pr)) dn.unshift(y % pr);
        return num("What is the exponent of the prime " + pr + " in the binomial coefficient <b>C(" + (m + n) + ", " + m + ")</b>?", v, null,
          "By Kummer's theorem it equals the number of carries when " + m + " and " + n + " are added in base " + pr + ". In base " + pr + ", " + m + " = " + dm.join("") + " and " + n + " = " + dn.join("") + "; the addition produces " + v + " carr" + (v === 1 ? "y" : "ies") + ".");
      },
      // 20. aperiodic necklaces (Lyndon words) by Möbius inversion
      function () {
        function mu(n) { var r = 1, q; for (q = 2; q * q <= n; q++) if (n % q === 0) { n /= q; if (n % q === 0) return 0; r = -r; } return n > 1 ? -r : r; }
        var n = R(4, 12), k = R(2, 3), tot = 0, s = [], d;
        for (d = 1; d <= n; d++) if (n % d === 0 && mu(d) !== 0) { tot += mu(d) * Math.pow(k, n / d); s.push((s.length ? (mu(d) < 0 ? " − " : " + ") : "") + k + sup(n / d)); }
        var v = tot / n;
        return num("How many <b>aperiodic</b> necklaces (primitive necklaces, equivalently Lyndon words) of length " + n + " are there over an alphabet of " + k + " letters?", v, big(v),
          "Every word of length n is a rotation of a unique primitive necklace of some length d | n, repeated n/d times, so kⁿ = ∑ over d | n of d·M(d). Möbius inversion gives M(n) = (1/n) ∑ over d | n of μ(d)·k^(n/d) = (" + s.join("") + ")/" + n + " = " + big(v) + ".");
      },
      // 21. necklaces with prescribed colour counts (Pólya)
      function () {
        var n = pick([6, 8, 9, 10, 12]), j = R(2, n - 2), g = gcd(n, j), tot = 0, s = [], d;
        function ph(m) { var r = 0, i; for (i = 1; i <= m; i++) if (gcd(i, m) === 1) r++; return r; }
        for (d = 1; d <= g; d++) if (g % d === 0) { tot += ph(d) * B(n / d, j / d); s.push((ph(d) > 1 ? ph(d) + "·" : "") + "C(" + (n / d) + ", " + (j / d) + ")"); }
        var v = tot / n;
        return num("How many necklaces of " + n + " beads with <b>exactly " + j + " black</b> and " + (n - j) + " white beads are there up to rotation?", v, big(v),
          "By Pólya's theorem the rotation by i positions has gcd(i, " + n + ") cycles of length " + n + "/gcd(i, " + n + "); it fixes a colouring with " + j + " black beads only when the cycle length d divides " + j + ", and then in C(" + n + "/d, " + j + "/d) ways. Summing over d | gcd(" + n + ", " + j + ") = " + g + ": (" + s.join(" + ") + ")/" + n + " = " + big(tot) + "/" + n + " = " + big(v) + ".");
      },
      // 22. rooted forests via Lagrange inversion
      function () {
        var n = R(5, 9), k = R(2, n - 1), v = B(n - 1, k - 1) * Math.pow(n, n - k);
        return num("How many rooted forests on the vertex set {1, …, " + n + "} consist of <b>exactly " + k + "</b> rooted trees?", v, big(v),
          "The EGF of rooted trees satisfies T = x·exp(T), and forests of " + k + " trees have EGF T" + sup(k) + "/" + k + "!. Lagrange inversion gives n!·[xⁿ] T" + sup(k) + "/" + k + "! = n!·(1/n)[tⁿ⁻¹] t" + sup(k - 1) + "/(" + k + " − 1)!·eⁿᵗ = C(n − 1, k − 1)·nⁿ⁻ᵏ = C(" + (n - 1) + ", " + (k - 1) + ")·" + n + sup(n - k) + " = " + big(v) + ".");
      },
      // 23. connected labelled graphs via the exponential formula
      function () {
        var n = R(4, 7), g = [1], c = [0], m, k, t;
        for (m = 1; m <= n; m++) { g[m] = Math.pow(2, m * (m - 1) / 2); t = 0; for (k = 1; k < m; k++) t += B(m - 1, k - 1) * c[k] * g[m - k]; c[m] = g[m] - t; }
        return num("How many <b>connected</b> labelled graphs are there on the vertex set {1, …, " + n + "}? (The counts for 1, …, " + (n - 1) + " vertices are " + c.slice(1, n).join(", ") + ".)", c[n], big(c[n]),
          "By the exponential formula, ∑ gₘxᵐ/m! = exp(∑ cₘxᵐ/m!) with gₘ = 2^C(m, 2); equivalently gₙ = ∑ₖ C(n − 1, k − 1)·cₖ·gₙ₋ₖ (classify by the component of vertex n). So c" + sub(n) + " = " + big(g[n]) + " − " + big(g[n] - c[n]) + " = " + big(c[n]) + ".");
      }
    ];
  })();

G["permutations-vs-combinations"] = (function () {
    // ----- small private helpers -----
    function range(n) { var a = []; for (var i = 1; i <= n; i++) a.push(i); return a; }
    // a random permutation of [n] (one-line, values 1..n)
    function randPerm(n) { return shuffle(range(n)); }
    // cycles of a one-line permutation, each cycle starting at its least element, sorted by first element
    function cyclesOf(p) {
      var n = p.length, seen = [], cs = [];
      for (var i = 1; i <= n; i++) {
        if (seen[i]) continue;
        var c = [], j = i;
        while (!seen[j]) { seen[j] = 1; c.push(j); j = p[j - 1]; }
        cs.push(c);
      }
      return cs;
    }
    function cycStr(cs, keepFixed) {
      var s = cs.filter(function (c) { return keepFixed || c.length > 1; }).map(function (c) { return "(" + c.join(" ") + ")"; }).join("");
      return s || "the identity";
    }
    function Cb(n, k) { return (k < 0 || k > n) ? 0 : C(n, k); } // C(n, k) = 0 when k > n
    function lcmList(a) { return a.reduce(function (x, y) { return lcm(x, y); }, 1); }
    function harm(m, n) { // sum_{j=m}^{n} 1/j as [num, den]
      var a = 0, b = 1;
      for (var j = m; j <= n; j++) { a = a * j + b; b = b * j; var g = gcd(a, b); a /= g; b /= g; }
      return [a, b];
    }
    var D = [1, 0]; for (var i = 2; i <= 12; i++) D[i] = (i - 1) * (D[i - 1] + D[i - 2]);
    var c1 = [[1]];
    for (var n0 = 1; n0 <= 10; n0++) { c1[n0] = []; for (var k0 = 0; k0 <= n0; k0++) c1[n0][k0] = (k0 ? (c1[n0 - 1][k0 - 1] || 0) : 0) + (n0 - 1) * (c1[n0 - 1][k0] || 0); }
    // d1[n][k] = permutations of [n] with k cycles and no fixed points: d(n+1, k) = n·d(n, k) + n·d(n−1, k−1)
    var d1 = [[1], [0, 0]];
    for (var n1 = 2; n1 <= 10; n1++) { d1[n1] = []; for (var k1 = 0; k1 <= n1; k1++) d1[n1][k1] = (n1 - 1) * ((d1[n1 - 1][k1] || 0) + (k1 ? (d1[n1 - 2][k1 - 1] || 0) : 0)); }
    function lehmer(p) { var L = []; for (var i = 0; i < p.length; i++) { var c = 0; for (var j = i + 1; j < p.length; j++) if (p[j] < p[i]) c++; L.push(c); } return L; }
    function unrank(r, n) {
      var pool = range(n), out = [];
      for (var i = n - 1; i >= 0; i--) { var f0 = fact(i), d = Math.floor(r / f0); r -= d * f0; out.push(pool.splice(d, 1)[0]); }
      return out;
    }
    function totient(d) { var c = 0; for (var i = 1; i <= d; i++) if (gcd(i, d) === 1) c++; return c; }
    function digits(n, p) { var d = []; do { d.push(n % p); n = Math.floor(n / p); } while (n > 0); return d; }
    function bin(i, w) { var s = i.toString(2); while (s.length < w) s = "0" + s; return s; }
    // random partition-like cycle structure: returns a one-line permutation of [n] with at least two nontrivial cycles
    function permWithCycles(n) {
      var p, cs;
      do { p = randPerm(n); cs = cyclesOf(p); } while (cs.filter(function (c) { return c.length > 1; }).length < 2);
      return p;
    }

    return [
      // 1. order of a permutation given in one-line notation
      function () {
        var n = R(8, 11), p = permWithCycles(n), cs = cyclesOf(p), ls = cs.map(function (c) { return c.length; }), o = lcmList(ls);
        return num("Let σ ∈ S" + sub(n) + " be given in one-line notation by <b>σ = " + p.join(" ") + "</b>. What is the order of σ?", o, null,
          "Following each point: σ = " + cycStr(cs, false) + ". The cycle lengths are " + ls.filter(function (l) { return l > 1; }).join(", ") +
          ", and the order of a product of disjoint cycles is the lcm of their lengths: " + o + "."); },

      // 2. number of cycles of a power (Proposition 2.6)
      function () {
        var n, p, cs, k, ls, kap;
        do { n = R(9, 12); p = permWithCycles(n); cs = cyclesOf(p); k = R(2, 6); ls = cs.map(function (c) { return c.length; });
          kap = ls.reduce(function (s, l) { return s + gcd(l, k); }, 0); } while (ls.filter(function (l) { return l > 1 && gcd(l, k) > 1; }).length === 0);
        var parts = ls.filter(function (l) { return l > 1; }).map(function (l) { return "gcd(" + l + ", " + k + ") = " + gcd(l, k); });
        var fixed = ls.filter(function (l) { return l === 1; }).length;
        return num("In S" + sub(n) + " let <b>σ = " + cycStr(cs, false) + "</b>. How many cycles (counting fixed points as 1-cycles) does <b>σ" + sup(k) + "</b> have?", kap, null,
          "An ℓ-cycle raised to the power " + k + " splits into gcd(ℓ, " + k + ") cycles. Here " + parts.join(", ") + (fixed ? ", and the " + fixed + " fixed point" + (fixed > 1 ? "s stay" : " stays") + " fixed" : "") +
          ". Total: " + kap + " cycles."); },

      // 3. conjugacy class size n!/z_lambda
      function () {
        var n = R(7, 10), p = permWithCycles(n), cs = cyclesOf(p), m = {}, z = 1, zs = [];
        cs.forEach(function (c) { m[c.length] = (m[c.length] || 0) + 1; });
        Object.keys(m).forEach(function (l) { var t = Math.pow(+l, m[l]) * fact(m[l]); z *= t; zs.push(l + (m[l] > 1 ? sup(m[l]) : "") + (m[l] > 1 ? " · " + m[l] + "!" : "")); });
        var size = fact(n) / z;
        return num("How many elements of S" + sub(n) + " are conjugate to <b>" + cycStr(cs, false) + "</b>?", size, big(size),
          "Conjugacy classes are cycle types. Including fixed points the cycle lengths are " + cs.map(function (c) { return c.length; }).sort(function (a, b) { return b - a; }).join(", ") +
          ", so z = " + zs.join(" · ") + " = " + z + ", and the class has " + n + "!/" + z + " = " + big(fact(n)) + "/" + z + " = " + big(size) + " elements."); },

      // 4. Stirling numbers of the first kind
      function () {
        var mode = R(0, 2), n = R(6, 10), k, v;
        if (mode === 2) {
          k = R(2, Math.floor(n / 2)); v = d1[n][k];
          return num("How many permutations of [" + n + "] have exactly <b>" + k + " cycles, none of them a fixed point</b>?", v, big(v),
            "Let d(n, k) count these. Remove n from its cycle: if that cycle had length at least 3, we get a permutation of [n − 1] with k cycles and no fixed points, and n can be reinserted after any of n − 1 symbols; if n was in a 2-cycle with one of n − 1 partners, the rest is counted by d(n − 2, k − 1). So d(n, k) = (n − 1)(d(n − 1, k) + d(n − 2, k − 1)), giving d(" + n + ", " + k + ") = " + (n - 1) + " · (" + d1[n - 1][k] + " + " + d1[n - 2][k - 1] + ") = " + big(v) + "."); }
        k = R(2, n - 2); v = c1[n][k];
        var stem = mode === 0 ? "have exactly <b>" + k + " cycles</b> (fixed points count as cycles)" : "have exactly <b>" + k + " left-to-right maxima</b> (records) in one-line notation";
        return num("How many permutations of [" + n + "] " + stem + "?", v, big(v),
          (mode === 1 ? "By Foata's fundamental transformation, permutations with k records are equinumerous with permutations with k cycles, so the answer is " : "This is ") +
          "the unsigned Stirling number c(" + n + ", " + k + "). Using c(n, k) = (n − 1)·c(n − 1, k) + c(n − 1, k − 1): c(" + n + ", " + k + ") = " + (n - 1) + " · " + c1[n - 1][k] + " + " + c1[n - 1][k - 1] + " = " + big(v) + "."); },

      // 5. rencontres numbers
      function () {
        var n = R(6, 12), k = R(0, 4), v = C(n, k) * D[n - k];
        if (pick([true, false])) {
          var tot = 0, parts = [];
          for (var j = 0; j <= k; j++) { tot += C(n, j) * D[n - j]; parts.push(C(n, j) + "·" + D[n - j]); }
          return num("How many permutations of [" + n + "] have <b>at most " + k + " fixed point" + (k === 1 ? "" : "s") + "</b>?", tot, big(tot),
            "Sum the rencontres numbers C(n, j)·D" + sub(n) + "₋ⱼ for j = 0, …, " + k + ": " + parts.join(" + ") + " = " + big(tot) + ". (Dₘ from Dₘ = m·Dₘ₋₁ + (−1)ᵐ.)"); }
        return num("How many permutations of [" + n + "] have <b>exactly " + k + " fixed point" + (k === 1 ? "" : "s") + "</b>?", v, big(v),
          (k ? "Choose the fixed points in C(" + n + ", " + k + ") = " + C(n, k) + " ways; the other " + (n - k) + " points must be deranged: D" + sub(n - k) + " = " + D[n - k] + ". Total " + C(n, k) + " · " + D[n - k] + " = " + big(v) + "."
            : "These are the derangements: D" + sub(n) + " = " + n + "!·∑(−1)ᵏ/k! = " + big(v) + ".") + " (D" + sub(n - k) + " can be computed from Dₘ = m·Dₘ₋₁ + (−1)ᵐ.)"); },

      // 6. bounded solutions by inclusion–exclusion
      function () {
        var m, b, s;
        do { m = R(3, 4); b = R(3, 6); s = R(b + 2, m * b - 1); } while (s > m * b);
        var terms = [], tot = 0;
        for (var j = 0; j <= m && s - j * (b + 1) >= 0; j++) { var t = C(m, j) * C(s - j * (b + 1) + m - 1, m - 1); tot += (j % 2 ? -t : t); terms.push((j ? (j % 2 ? " − " : " + ") : "") + C(m, j) + "·C(" + (s - j * (b + 1) + m - 1) + ", " + (m - 1) + ")"); }
        var vars = range(m).map(function (i) { return "x" + sub(i); }).join(" + ");
        return num("How many solutions in integers does <b>" + vars + " = " + s + "</b> have with <b>0 ≤ xᵢ ≤ " + b + "</b> for every i?", tot, null,
          "Inclusion–exclusion over the variables that exceed " + b + " (substitute xᵢ = " + (b + 1) + " + yᵢ): " + terms.join("") + " = " + tot + "."); },

      // 7. lexicographic rank of a permutation
      function () {
        var n = R(5, 6), p = randPerm(n), L = lehmer(p), r = 0, ts = [];
        for (var i = 0; i < n; i++) { r += L[i] * fact(n - 1 - i); if (L[i]) ts.push(L[i] + "·" + (n - 1 - i) + "!"); }
        return num("In the lexicographic order of S" + sub(n) + ", counting from 0 (so 1 2 … " + n + " has rank 0), what is the rank of <b>" + p.join(" ") + "</b>?", r, null,
          "The Lehmer code (number of smaller entries to the right of each position) is (" + L.join(", ") + "). Rank = ∑ Lᵢ·(n − i)! = " + (ts.length ? ts.join(" + ") : "0") + " = " + r + "."); },

      // 8. unranking a permutation
      function () {
        var n = 5, r = R(1, 118), ranks = [r], q;
        while (ranks.length < 4) { q = R(0, 119); if (ranks.indexOf(q) < 0) ranks.push(q); }
        var w = function (x) { return unrank(x, n).join(" "); }, d = [], rr = r;
        for (var i = n - 1; i >= 1; i--) { d.push(Math.floor(rr / fact(i))); rr %= fact(i); }
        return ch("Which permutation of [5] has lexicographic rank <b>" + r + "</b> (counting from 0)?", w(r), [w(ranks[1]), w(ranks[2]), w(ranks[3])],
          "Write " + r + " in the factorial number system: " + r + " = " + d[0] + "·4! + " + d[1] + "·3! + " + d[2] + "·2! + " + d[3] + "·1!, so the Lehmer code is (" + d.join(", ") + ", 0). Decoding from {1, 2, 3, 4, 5} gives " + w(r) + "."); },

      // 9. colex rank of a combination
      function () {
        var k = R(3, 4), pool = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).slice(0, k).sort(function (a, b) { return a - b; }), r = 0, ts = [];
        pool.forEach(function (c, i) { r += Cb(c, i + 1); ts.push("C(" + c + ", " + (i + 1) + ")"); });
        return num("In the colexicographic order of the " + k + "-element subsets of ℕ = {0, 1, 2, …}, counting from 0, what is the rank of <b>{" + pool.join(", ") + "}</b>?", r, null,
          "Combinatorial number system: rank = " + ts.join(" + ") + " = " + pool.map(function (c, i) { return Cb(c, i + 1); }).join(" + ") + " = " + r + "."); },

      // 10. necklaces by Burnside
      function () {
        var n = R(4, 12), q = R(2, 4), s = 0, ts = [];
        for (var d = 1; d <= n; d++) if (n % d === 0) { s += totient(d) * Math.pow(q, n / d); ts.push(totient(d) + "·" + q + sup(n / d)); }
        if (pick([true, false])) { // bracelets: the dihedral group of order 2n
          var refl = n % 2 ? n * Math.pow(q, (n + 1) / 2) : (n / 2) * (Math.pow(q, n / 2 + 1) + Math.pow(q, n / 2)), tot = (s + refl) / (2 * n);
          return num("How many bracelets with <b>" + n + " beads</b> in <b>" + q + " colours</b> are there, counting two as the same if one is obtained from the other by a rotation <b>or a reflection</b>?", tot, big(tot),
            "Burnside with the dihedral group of order " + (2 * n) + ". The rotations fix " + ts.join(" + ") + " = " + big(s) + " colourings in total. " +
            (n % 2 ? "Each of the " + n + " reflections passes through one bead and has (n + 1)/2 = " + ((n + 1) / 2) + " cycles, fixing " + q + sup((n + 1) / 2) + " colourings"
              : "Of the " + n + " reflections, " + (n / 2) + " pass through two beads (" + (n / 2 + 1) + " cycles, " + q + sup(n / 2 + 1) + " each) and " + (n / 2) + " through no bead (" + (n / 2) + " cycles, " + q + sup(n / 2) + " each)") +
            ", " + big(refl) + " in total. So the count is (" + big(s) + " + " + big(refl) + ")/" + (2 * n) + " = " + big(tot) + "."); }
        return num("How many necklaces with <b>" + n + " beads</b> in <b>" + q + " colours</b> are there, counting two as the same if one is a rotation of the other?", s / n, big(s / n),
          "Burnside: N = (1/n)∑_(d|n) φ(d)·q^(n/d) = (" + ts.join(" + ") + ")/" + n + " = " + big(s) + "/" + n + " = " + big(s / n) + "."); },

      // 11. long cycles in a random permutation
      function () {
        var n = R(6, 20), t = R(Math.ceil(n / 2), n - 1), m = t + 1, h = harm(m, n), no = pick([true, false]);
        var a = no ? h[1] - h[0] : h[0], b = h[1];
        return num("A permutation of [" + n + "] is chosen uniformly at random. What is the probability that it " + (no ? "has <b>no</b> cycle of length greater than " + t : "<b>has</b> a cycle of length greater than " + t) + "? (Type a fraction in lowest terms.)",
          a / b, fr(a, b),
          "Since " + t + " ≥ n/2, a cycle of length j > " + t + " occurs at most once, and the events \"σ has a j-cycle\" are disjoint, each of probability E[Cⱼ] = 1/j. So P(some cycle is longer than " + t + ") = ∑ from j = " + m + " to " + n + " of 1/j = " + fr(h[0], h[1]) + "." + (no ? " The complement is 1 − " + fr(h[0], h[1]) + " = " + fr(a, b) + "." : ""), { lowest: true }); },

      // 12. expected number of cycles (of length at least m)
      function () {
        var n = R(5, 16), m = R(1, 4), M = pick([n, n, R(m + 1, n)]), h = harm(m, M);
        var what = M === n ? (m > 1 ? " of length at least " + m : " (fixed points included)") : " whose length is between " + m + " and " + M + " inclusive";
        return num("For a uniformly random permutation of [" + n + "], what is the expected number of cycles" + what + "? (Type a fraction in lowest terms.)",
          h[0] / h[1], fr(h[0], h[1]),
          "The expected number of j-cycles is exactly 1/j for every j ≤ n, so by linearity the answer is ∑ from j = " + m + " to " + M + " of 1/j = " + fr(h[0], h[1]) + (m === 1 && M === n ? " = H" + sub(n) : "") + ".", { lowest: true }); },

      // 13. subspaces of a vector space over a finite field (Gaussian binomial)
      function () {
        var q = pick([2, 3, 4, 5]), n = R(3, q === 2 ? 6 : 5), k = R(1, n - 1), top = 1, bot = 1, tt = [], bb = [];
        for (var i = 0; i < k; i++) { top *= Math.pow(q, n) - Math.pow(q, i); bot *= Math.pow(q, k) - Math.pow(q, i); tt.push("(" + q + sup(n) + " − " + Math.pow(q, i) + ")"); bb.push("(" + q + sup(k) + " − " + Math.pow(q, i) + ")"); }
        var v = top / bot;
        return num("How many <b>" + k + "-dimensional subspaces</b> does the vector space <b>𝔽" + sub(q) + sup(n) + "</b> have?", v, big(v),
          "Count ordered bases and divide by the ordered bases of one subspace: [" + n + " " + k + "]_" + q + " = " + tt.join("") + " / " + bb.join("") + " = " + big(top) + "/" + big(bot) + " = " + big(v) + "."); },

      // 14. Lucas's theorem
      function () {
        var p = pick([3, 5, 7]), n = R(40, 300), k = R(5, n - 5), dn = digits(n, p), dk = digits(k, p), ans = 1, fs = [];
        while (dk.length < dn.length) dk.push(0);
        for (var i = dn.length - 1; i >= 0; i--) { var c = dk[i] > dn[i] ? 0 : C(dn[i], dk[i]); ans = (ans * c) % p; fs.push("C(" + dn[i] + ", " + dk[i] + ")"); }
        return num("Find <b>C(" + n + ", " + k + ") mod " + p + "</b> (an integer from 0 to " + (p - 1) + ").", ans, null,
          "Lucas's theorem: in base " + p + ", " + n + " = " + dn.slice().reverse().join("") + " and " + k + " = " + dk.slice().reverse().join("") + " (padded). So C(" + n + ", " + k + ") ≡ " + fs.join("·") + " ≡ " + ans + " (mod " + p + "), using C(a, b) = 0 when b > a."); },

      // 15. binary reflected Gray code
      function () {
        var mode = R(0, 2), w = R(6, 8), top = Math.pow(2, w) - 1, i = R(5, top - 1), g = i ^ (i >> 1);
        if (mode === 0) { // inverse Gray code: prefix exclusive or
          var gs = bin(g, w), bs = "", acc = 0;
          for (var t = 0; t < w; t++) { acc ^= +gs[t]; bs += acc; }
          return num("In the " + w + "-bit binary reflected Gray code, which index i (counting from 0) has the word <b>" + gs + "</b>?", i, null,
            "Invert g(i) = i ⊕ ⌊i/2⌋ by prefix exclusive or from the left: bₖ = g" + sub(w - 1) + " ⊕ ⋯ ⊕ gₖ gives " + bs + "₂ = " + i + ". Check: " + bs + " ⊕ " + bin(i >> 1, w) + " = " + gs + "."); }
        if (mode === 1) { // which bit flips
          var j = i + 1, tz = 0; while (j % 2 === 0) { j /= 2; tz++; }
          return num("In the " + w + "-bit binary reflected Gray code, which bit (numbered from 0 at the right) changes between the words of index <b>" + i + "</b> and <b>" + (i + 1) + "</b>?", tz, null,
            "The bit that changes is ν₂(i + 1), the exponent of 2 in " + (i + 1) + ", which is " + tz + ". Directly: g(" + i + ") = " + bin(g, w) + " and g(" + (i + 1) + ") = " + bin((i + 1) ^ ((i + 1) >> 1), w) + "."); }
        var opts = [bin(g, w)], cand = [bin(i, w), bin(g ^ 1, w), bin(g ^ (1 << (w - 1)), w), bin(((i + 1) ^ ((i + 1) >> 1)) & top, w), bin(i ^ ((i << 1) & top), w)];
        cand.forEach(function (c) { if (opts.indexOf(c) < 0) opts.push(c); });
        return ch("Which " + w + "-bit word is entry number <b>" + i + "</b> (counting from 0) of the binary reflected Gray code?", opts[0], opts.slice(1),
          "g(i) = i ⊕ ⌊i/2⌋ = " + bin(i, w) + " ⊕ " + bin(i >> 1, w) + " = " + bin(g, w) + "."); }
    ];
  })();

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
  /* MAKERS:END */

  // ---------- checking typed answers ----------
  function parse(s) {
    s = String(s).trim().toLowerCase().replace(/[−–—]/g, "-").replace(/\s+/g, " ").replace(/^[a-z]\s*=\s*/, "").replace(/^([-+])\s+/, "$1").replace(/½/g, " 1/2").replace(/¼/g, " 1/4").replace(/¾/g, " 3/4").replace(/⅓/g, " 1/3").replace(/⅔/g, " 2/3").trim().replace(/\s+/g, " ")
      .replace(/(\d),(?=\d{3}(\D|$))/g, "$1").replace(/\s*(π|pi|°|º|degrees?|mg|m|metres?|meters?)$/, "").trim();
    var m;
    if ((m = s.match(/^(-?)(\d+) (\d+)\s*\/\s*(\d+)$/)) && +m[4] !== 0) { var v = +m[2] + +m[3] / +m[4]; return { v: m[1] ? -v : v, mixed: [+m[3], +m[4]] }; }
    if ((m = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/))) { if (+m[2] === 0) return null; return { v: +m[1] / +m[2], fr: [+m[1], +m[2]] }; }
    if (/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s)) return { v: +s };
    return null;
  }
  function grade(q, val) {
    if (q.kind === "choice") return val === q.ans ? "right" : "wrong";
    var x = parse(val); if (!x) return "wrong";
    var tol = q.tol != null ? q.tol : 1e-9 * Math.max(1, Math.abs(q.ans));
    if (Math.abs(x.v - q.ans) > tol) return "wrong";
    if (q.lowest && x.fr && Number.isInteger(x.fr[0]) && Number.isInteger(x.fr[1]) && (gcd(x.fr[0], x.fr[1]) !== 1 || Math.abs(x.fr[1]) === 1)) return "simplify";
    if (q.lowest && x.mixed && (gcd(x.mixed[0], x.mixed[1]) !== 1 || x.mixed[0] >= x.mixed[1])) return "simplify";
    return "right";
  }

  // ---------- the quiz on the page ----------
  var N = 10; // questions per quiz
  function makeQuiz(gens) {
    var qs = [], seen = {}, order = [], guard = 0;
    while (qs.length < N && guard++ < 400) {
      if (!order.length) order = shuffle(gens.map(function (_, i) { return i; }));
      var q; try { q = gens[order.pop()](); } catch (e) { continue; }
      if (!q || seen[q.q]) continue;
      seen[q.q] = 1; qs.push(q);
    }
    return qs;
  }

  // Adult questions sometimes write powers/indices as x^(…), x^y, a_{…}, a_ij: show them as real super/subscripts.
  var NICE = function (h) {
    var B = "(?<=[\\p{L}\\p{N}\\p{M})\\]}|‖′∑∏∫∮⋂⋃₀-₌ₐ-ₜ×]|</su[bp]>)";
    var P2 = "(?:[^()<>]|\\((?:[^()<>]|\\([^()<>]*\\))*\\))";
    var rules = [
      [/\^\{([^{}<>]{1,80})\}/g, "<sup>$1</sup>"], [/_\{([^{}<>]{1,80})\}/g, "<sub>$1</sub>"],
      [/([\p{L}])\^([\p{L}])\^([\p{L}∞])/gu, "$1<sup>$2<sup>$3</sup></sup>"],
      [new RegExp(B + "\\^(\\|[^|<>]{1,20}\\||⌊[^⌋<>]{1,20}⌋|⌈[^⌉<>]{1,20}⌉|[ℕℤℚℝℂ⊥∞×𝔄-𝔷](?:\\([^()<>]{1,20}\\))?)", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^\\((" + P2 + "{1,60})\\)", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^(\\p{L}{1,6}\\([^()<>]{1,30}\\))", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "\\^([−-]?[\\p{L}\\p{N}∞×]{1,3})(?![\\p{L}\\p{N}({])", "gu"), "<sup>$1</sup>"],
      [new RegExp(B + "_\\((" + P2 + "{1,60})\\)", "gu"), "<sub>$1</sub>"],
      [new RegExp(B + "_([\\p{L}\\p{N}∞]{1,4})(?![\\p{L}\\p{N}{_])", "gu"), "<sub>$1</sub>"]
    ];
    for (var i = 0; i < 4; i++) { var n = h; rules.forEach(function (r) { n = n.replace(r[0], r[1]); }); if (n === h) break; h = n; }
    return h;
  };
  function niceMath(h) { return NICE(String(h)).replace(/(^|[\s(=,:])-(\d)/g, "$1−$2"); }

  function start() {
    var box = document.getElementById("quiz"); if (!box) return;
    var topic = box.getAttribute("data-topic"), gens = G[topic];
    if (!gens) { box.innerHTML = "<p>This quiz is coming soon.</p>"; return; }
    var ADULT = box.getAttribute("data-mode") === "adult";
    // wording for the two modes
    var W = ADULT ? {
      best: "Best score so far: ", tip: "Enter integers, decimals or fractions, e.g. <b>12</b>, <b>-5</b>, <b>0.75</b>, <b>3/4</b>.",
      submit: "Submit", blank: function (n) { return n + " question" + (n > 1 ? "s are" : " is") + " unanswered. Press Submit again to submit anyway."; },
      right: "Correct.", left: "Not answered.", simplify: "Correct value, but not fully simplified.", wrong: "Incorrect.", answer: "Answer: ", why: "",
      score: function (s) { return "Score: <strong>" + s + " / " + N + "</strong>"; },
      msg: function (p) { return p === 1 ? "All answers correct." : p >= 0.7 ? "Review the solutions to the questions you missed." : "Review the relevant lessons, then attempt a new assessment."; },
      again: "New assessment"
    } : {
      best: "⭐ Your best score so far: ", tip: "💡 Type whole numbers like <b>12</b>, negatives like <b>-5</b> and fractions like <b>3/4</b>.",
      submit: "📝 Submit my quiz", blank: function (n) { return "✋ You left " + n + " question" + (n > 1 ? "s" : "") + " blank. Press Submit again to hand it in anyway, or fill " + (n > 1 ? "them" : "it") + " in first."; },
      right: "✅ Correct!", left: "⬜ Left blank.", simplify: "🟡 Right value, but simplify it all the way!", wrong: "❌ Not quite.", answer: "The answer is ", why: "💭 ",
      score: function (s) { return "You got <strong>" + s + " out of " + N + "</strong>!"; },
      msg: function (p) { return p === 1 ? "🏆 PERFECT SCORE! You're a math superstar!" : p >= 0.8 ? "🌟 Awesome work!" : p >= 0.6 ? "👍 Nice job! Check the ones you missed below." : p >= 0.4 ? "💪 Good try! Read the explanations, then try a new quiz." : "📚 Keep going! Look back at the lessons, then try a brand-new quiz."; },
      again: "🔄 Try a brand-new quiz"
    };
    var KEY = "quizBest." + (ADULT ? "adult." : "") + topic, qs, answers, warned;

    function best() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

    function render() {
      qs = makeQuiz(gens); answers = []; warned = false;
      var b = best();
      var html = (b ? '<p class="qz-best">' + W.best + '<strong>' + b + "/" + N + "</strong></p>" : "") +
        '<p class="qz-tip">' + W.tip + '</p><ol class="qz-list">';
      qs.forEach(function (q, i) {
        html += '<li class="qz-q" id="qz-' + i + '"><p class="qz-num">Question ' + (i + 1) + ' of ' + N + '</p><div class="qz-text">' + (ADULT ? niceMath(q.q) : q.q) + "</div>";
        if (q.kind === "num") html += '<label class="qz-label">' + (ADULT ? "Answer:" : "Your answer:") + ' <input class="qz-in" type="text" aria-label="' + (ADULT ? "Answer" : "Your answer") + ' to question ' + (i + 1) + '" autocomplete="off" autocapitalize="off" spellcheck="false" data-i="' + i + '"></label>';
        else html += '<div class="qz-opts" role="radiogroup" aria-label="Choices for question ' + (i + 1) + '">' + q.opts.map(function (o, j) {
          return '<label class="qz-opt"><input type="radio" name="qz-' + i + '" value="' + j + '" data-i="' + i + '"> <span>' + (ADULT ? niceMath(o) : o) + "</span></label>"; }).join("") + "</div>";
        html += '<div class="qz-result" hidden></div></li>';
      });
      html += '</ol><p class="qz-warn" role="alert" hidden></p><div class="qz-actions"><button type="button" class="btn qz-submit">' + W.submit + '</button></div><div class="qz-score" aria-live="polite" hidden></div>';
      box.innerHTML = html;
      box.querySelector(".qz-submit").addEventListener("click", submit);
      box.querySelectorAll(".qz-in").forEach(function (inp) { inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); var n = box.querySelector("#qz-" + (+inp.dataset.i + 1) + " input"); if (n) n.focus(); } }); });
    }

    function read() {
      return qs.map(function (q, i) {
        if (q.kind === "num") { var v = box.querySelector('.qz-in[data-i="' + i + '"]').value; return v.trim() ? v : null; }
        var c = box.querySelector('input[name="qz-' + i + '"]:checked'); return c ? +c.value : null;
      });
    }

    function submit() {
      answers = read();
      var blank = answers.filter(function (a) { return a === null; }).length, warn = box.querySelector(".qz-warn");
      if (blank && !warned) {
        warned = true; warn.hidden = false;
        warn.textContent = W.blank(blank);
        var first = answers.indexOf(null); var el = box.querySelector("#qz-" + first); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      warn.hidden = true;
      var score = 0;
      qs.forEach(function (q, i) {
        var g = answers[i] === null ? "blank" : grade(q, answers[i]), li = box.querySelector("#qz-" + i), res = li.querySelector(".qz-result");
        if (g === "right") score++;
        li.classList.add(g === "right" ? "qz-right" : "qz-wrong");
        li.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
        if (q.kind === "choice") li.querySelectorAll(".qz-opt").forEach(function (lab, j) { if (j === q.ans) lab.classList.add("qz-correct-opt"); });
        res.hidden = false;
        res.innerHTML = (g === "right" ? "<p><strong>" + W.right + "</strong></p>" : "<p><strong>" + (g === "blank" ? W.left : g === "simplify" ? W.simplify : W.wrong) + "</strong> " + W.answer + "<strong>" + (ADULT ? niceMath(q.show) : q.show) + "</strong>.</p>") +
          '<p class="qz-why">' + W.why + (ADULT ? niceMath(q.why) : q.why) + "</p>";
      });
      try { var b = +best() || 0; if (score > b) localStorage.setItem(KEY, String(score)); } catch (e) { /* fine */ }
      var pct = score / N, msg = W.msg(pct);
      var sc = box.querySelector(".qz-score"); sc.hidden = false;
      sc.innerHTML = '<p class="qz-big">' + W.score(score) + "</p><p>" + msg + '</p><button type="button" class="btn qz-again">' + W.again + '</button>';
      box.querySelector(".qz-actions").hidden = true;
      sc.querySelector(".qz-again").addEventListener("click", function () { render(); box.scrollIntoView({ behavior: "smooth", block: "start" }); });
      var top = box.querySelector(".qz-score"); box.insertBefore(top, box.firstChild); top.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    render();
  }

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    window.MathQuiz = { G: G, grade: grade, parse: parse, makeQuiz: makeQuiz };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
  } else if (typeof module !== "undefined") {
    module.exports = { G: G, grade: grade, parse: parse, makeQuiz: makeQuiz, niceMath: niceMath };
  }
})();
