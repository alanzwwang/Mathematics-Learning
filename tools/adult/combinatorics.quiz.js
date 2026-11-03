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
