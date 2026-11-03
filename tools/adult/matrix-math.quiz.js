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
