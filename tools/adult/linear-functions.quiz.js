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
