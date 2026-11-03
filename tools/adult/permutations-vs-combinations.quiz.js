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
