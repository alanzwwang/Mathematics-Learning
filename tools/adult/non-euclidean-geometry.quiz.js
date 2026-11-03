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
