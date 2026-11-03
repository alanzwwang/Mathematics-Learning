Complex Analysis — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Complex analysis is the study of functions of one complex variable that are differentiable in the complex sense. The definition looks innocent: it is the same difference quotient as in real calculus, except that the increment h is allowed to approach 0 from every direction in the plane. That single change has astonishing consequences. A function that is complex differentiable once on an open set is automatically differentiable infinitely often, equals its Taylor series on every disc it contains, is determined everywhere by its values on any small arc, satisfies a maximum principle, and has integrals over closed curves that depend only on topology and on a finite list of local numbers called residues. Nothing remotely like this is true for real differentiable functions.

The subject was built in the nineteenth century by Cauchy, who proved the integral theorem (1825) and the integral formula (1831), by Riemann, who introduced the geometric point of view of conformal maps and Riemann surfaces and, in an eight-page paper of 1859, extended the zeta function to the whole plane and stated the most famous open problem in mathematics, and by Weierstrass, who rebuilt the theory on power series with full rigour. In the twentieth century it became the language of analytic number theory, of potential theory and fluid flow, of quantum field theory and signal processing, and it remains the model case for several complex variables, complex geometry and modern dynamics.

This course assumes a working knowledge of real analysis (sequences, uniform convergence, compactness, the Riemann integral, Green's theorem) and of the arithmetic of complex numbers. Each lesson states definitions precisely, proves the main theorems, and works examples in full. The exercises in the Exercise boxes are meant to be done with pencil and paper before you read the answers.

In this course, you will:

  1. Treat ℂ as a field, a metric space and, via the Riemann sphere, a compact surface
  2. Master the polar form, Euler's formula, roots of unity and the multivalued logarithm
  3. Characterise complex differentiability by the Cauchy–Riemann equations
  4. Develop the theory of power series and analytic functions
  5. Define contour integrals and prove Cauchy's theorem through Goursat's lemma
  6. Derive Cauchy's integral formula and its consequences: Liouville, the fundamental theorem of algebra, the identity theorem and the maximum principle
  7. Classify isolated singularities using Laurent series
  8. Prove the residue theorem and use it to evaluate real integrals and infinite sums
  9. Count zeros with the argument principle and Rouché's theorem
  10. Study conformal maps, Möbius transformations, the Schwarz lemma and the Riemann mapping theorem
  11. Continue functions analytically, and meet the Gamma function, the Riemann zeta function and the Riemann hypothesis

─────────────────────────────────
Lesson 1: The Complex Field and Its Topology
─────────────────────────────────

📌 Key idea of this section:

        ℂ = ℝ² with (a, b)·(c, d) = (ac − bd, ad + bc) is a field.
        |zw| = |z|·|w|  and  |z + w| ≤ |z| + |w|.
        d(z, w) = |z − w| makes ℂ a complete metric space;
        adding one point ∞ makes it the compact Riemann sphere Ĉ.

The algebraic construction

Define ℂ as the set ℝ² of ordered pairs with componentwise addition and the multiplication (a, b)(c, d) = (ac − bd, ad + bc). Writing 1 = (1, 0) and i = (0, 1), every element is uniquely a + bi with a, b ∈ ℝ, and i² = (0, 1)(0, 1) = (−1, 0) = −1. Commutativity, associativity and distributivity are routine verifications. The only axiom that needs an idea is the existence of inverses: if z = a + bi ≠ 0 then a² + b² > 0 and

        z⁻¹ = (a − bi)/(a² + b²),   since (a + bi)(a − bi) = a² + b².

Two other models are worth knowing. Algebraically, ℂ ≅ ℝ[x]/(x² + 1), the quotient of the real polynomial ring by a maximal ideal; this is why ℂ is the splitting field of x² + 1 over ℝ. Linearly, the map a + bi ↦ the 2 × 2 real matrix with rows (a, −b) and (b, a) is an injective ring homomorphism, so complex numbers are exactly the real matrices of the form "rotation times dilation". This matrix model reappears in Lesson 3, where it explains the Cauchy–Riemann equations.

Theorem 1.1. There is no ordering of ℂ compatible with its field operations.

Proof. In an ordered field every nonzero square is positive. Both 1 = 1² and −1 = i² would be positive, so 0 = 1 + (−1) would be positive, a contradiction.

Conjugation, modulus and the triangle inequality

The conjugate of z = a + bi is z̄ = a − bi. Conjugation is a field automorphism of ℂ fixing ℝ (in fact the only nontrivial continuous one), and Re z = (z + z̄)/2, Im z = (z − z̄)/(2i). The modulus is |z| = √(a² + b²), so that z z̄ = |z|². From this identity, |zw|² = zw·z̄w̄ = |z|²|w|², so the modulus is multiplicative.

Theorem 1.2 (triangle inequality). For all z, w ∈ ℂ, |z + w| ≤ |z| + |w|, with equality if and only if one of them is a nonnegative real multiple of the other.

Proof. Expand |z + w|² = (z + w)(z̄ + w̄) = |z|² + 2 Re(z w̄) + |w|². Since Re(z w̄) ≤ |z w̄| = |z||w|, the right side is at most (|z| + |w|)². Equality forces Re(z w̄) = |z w̄|, that is z w̄ ≥ 0, which means z and w point in the same direction.

Replacing z by z − w gives the reverse triangle inequality ||z| − |w|| ≤ |z − w|, which will be used constantly to bound denominators from below: for example, on the circle |z| = R > 1 one has |z² + 1| ≥ R² − 1.

Topology of the plane

The function d(z, w) = |z − w| is the Euclidean metric of ℝ², so ℂ inherits all of the topology of the plane. A sequence converges if and only if its real and imaginary parts converge, so ℂ is complete; closed bounded sets are compact (Heine–Borel); every bounded sequence has a convergent subsequence (Bolzano–Weierstrass). We write D(a, r) = {z : |z − a| < r} for the open disc and 𝔻 = D(0, 1) for the unit disc. A domain (or region) is a nonempty open connected subset of ℂ. For open sets, connected and path-connected are equivalent, and any two points of a domain can be joined by a polygonal path with segments parallel to the axes; this elementary fact is behind every "a function with zero derivative on a domain is constant" argument.

The Riemann sphere

Let S² = {(x₁, x₂, x₃) ∈ ℝ³ : x₁² + x₂² + x₃² = 1} and N = (0, 0, 1). Stereographic projection from N sends a point X ≠ N of the sphere to the point where the line NX meets the plane x₃ = 0, identified with ℂ:

        X = (x₁, x₂, x₃)  ↦  z = (x₁ + i x₂)/(1 − x₃),
        z = x + iy  ↦  X = (2x, 2y, |z|² − 1)/(|z|² + 1).

This is a homeomorphism from S² \ {N} onto ℂ. Sending N to a new point ∞ defines the extended plane Ĉ = ℂ ∪ {∞}, a compact space homeomorphic to the sphere: the neighbourhoods of ∞ are the complements of compact subsets of ℂ, so z → ∞ means exactly |z| → ∞. The distance between the corresponding points of the sphere gives the chordal metric

        χ(z, w) = 2|z − w| / √((1 + |z|²)(1 + |w|²)),   χ(z, ∞) = 2/√(1 + |z|²).

Stereographic projection maps circles on S² to circles or lines in ℂ (lines being the images of circles through N) and preserves angles. Both facts will matter when we study Möbius transformations in Lesson 12, where Ĉ is the natural home of rational functions.

✏️ Your Turn

(a) Write (3 + 4i)⁻¹ in the form a + bi.
(b) Prove the parallelogram law |z + w|² + |z − w|² = 2|z|² + 2|w|².
(c) Find the point of S² that corresponds to z = 1 + i under stereographic projection, and compute χ(0, 1 + i).

Answers: (a) (3 − 4i)/25 = 3/25 − (4/25)i. (b) Expanding, |z ± w|² = |z|² ± 2 Re(z w̄) + |w|²; adding the two cancels the middle terms. (c) |z|² = 2, so X = (2, 2, 1)/3 = (2/3, 2/3, 1/3); χ(0, 1 + i) = 2√2/√(1·3) = 2√2/√3 = 2√6/3, which is indeed the distance from the south pole (0, 0, −1) to X.

─────────────────────────────────
Lesson 2: Polar Form, Euler's Formula and Roots of Unity
─────────────────────────────────

📌 Key idea of this section:

        e^(iθ) = cos θ + i sin θ,   z = r e^(iθ)  with r = |z|, θ ∈ arg z.
        In products, moduli multiply and arguments add.
        For w ≠ 0 the equation zⁿ = w has exactly n distinct roots.

The exponential and Euler's formula

For z = x + iy define e^z = e^x (cos y + i sin y). In Lesson 4 we show that this agrees with the everywhere convergent power series ∑ zⁿ/n!; for now note that splitting that series into even and odd powers of iy gives, term by term,

        ∑ (iy)ⁿ/n! = (1 − y²/2! + y⁴/4! − …) + i (y − y³/3! + y⁵/5! − …) = cos y + i sin y,

which is Euler's formula e^(iy) = cos y + i sin y. The addition formulas for sine and cosine are equivalent to the law e^(i(α+β)) = e^(iα) e^(iβ), and the special case e^(iπ) + 1 = 0 links the five fundamental constants. The exponential is periodic with period 2πi, never vanishes, and maps ℂ onto ℂ \ {0}; the horizontal strip {0 ≤ Im z < 2π} is mapped bijectively onto ℂ \ {0}.

Polar form and arguments

Every z ≠ 0 can be written z = r e^(iθ) with r = |z| > 0. The angle θ is determined only modulo 2π, so arg z is a set, a coset of 2πℤ in ℝ. The principal argument Arg z is the unique representative in (−π, π]. From e^(iα) e^(iβ) = e^(i(α+β)),

        (r e^(iα))(s e^(iβ)) = rs e^(i(α+β)),   (r e^(iθ))ⁿ = rⁿ e^(inθ)  (de Moivre).

Example. 1 + i = √2 e^(iπ/4), so (1 + i)¹⁰ = 2⁵ e^(10πi/4) = 32 e^(5πi/2) = 32 e^(iπ/2) = 32i. The same computation by the binomial theorem requires eleven terms.

Roots and roots of unity

Let w = ρ e^(iφ) with ρ > 0. Then zⁿ = w if and only if |z| = ρ^(1/n) and n arg z ≡ φ (mod 2π), so the solutions are

        z_k = ρ^(1/n) e^(i(φ + 2πk)/n),   k = 0, 1, …, n − 1,

the vertices of a regular n-gon centred at 0. For example, −8 = 8 e^(iπ) has cube roots 2e^(iπ/3) = 1 + i√3, 2e^(iπ) = −2 and 2e^(5πi/3) = 1 − i√3.

The n-th roots of unity μₙ = {1, ω, ω², …, ω^(n−1)}, ω = e^(2πi/n), form a cyclic group of order n under multiplication. Since they are exactly the roots of zⁿ − 1,

        zⁿ − 1 = ∏ (z − ω^k)  over k = 0, …, n − 1.

Comparing the coefficient of z^(n−1) shows that the roots sum to 0 for n ≥ 2, so ∑ cos(2πk/n) = ∑ sin(2πk/n) = 0. Dividing by z − 1 gives 1 + z + … + z^(n−1) = ∏ (z − ω^k) over k = 1, …, n − 1, and evaluating at z = 1,

        ∏ (1 − ω^k) = n   (k = 1, …, n − 1).

Taking moduli and using |1 − e^(iθ)| = 2 sin(θ/2) gives the classical identity ∏ 2 sin(πk/n) = n. A root ζ is primitive if it generates μₙ; there are φ(n) of them (Euler's totient), namely ω^k with gcd(k, n) = 1. The cyclotomic polynomial Φₙ(z) = ∏ (z − ζ) over primitive ζ has integer coefficients, zⁿ − 1 = ∏ Φ_d(z) over the divisors d of n, and the sum of the primitive n-th roots of unity equals the Möbius function μ(n). Gauss's construction of the regular 17-gon (1796) rests on the fact that φ(17) = 16 is a power of 2, so that the field generated by e^(2πi/17) is reached by a tower of quadratic extensions.

The logarithm and complex powers

A logarithm of z ≠ 0 is any w with e^w = z. Writing w = u + iv, this means e^u = |z| and v ∈ arg z, so

        log z = ln|z| + i arg z   (a set),   Log z = ln|z| + i Arg z   (principal value).

Log is continuous, indeed holomorphic, on the slit plane ℂ \ (−∞, 0], but it jumps by 2πi across the negative real axis. The familiar rules fail for principal values: Log((−1)(−1)) = Log 1 = 0, while Log(−1) + Log(−1) = 2πi. For a ∈ ℂ one defines z^a = e^(a log z), again a set, with principal value e^(a Log z). For instance i^i = e^(i·(iπ/2 + 2πik)) = e^(−π/2 − 2πk), a set of positive real numbers whose principal value is e^(−π/2) ≈ 0.2079. The multivaluedness of log and of z^a is not a defect to be patched; it is the first appearance of monodromy, which Lesson 13 treats systematically.

✏️ Your Turn

(a) Compute (1 − i√3)⁶.
(b) Find all fourth roots of −16.
(c) Find Log(−1 − i).

Answers: (a) 1 − i√3 = 2e^(−iπ/3), so the sixth power is 64 e^(−2πi) = 64. (b) −16 = 16e^(iπ), so the roots are 2e^(i(π + 2πk)/4), k = 0, 1, 2, 3, that is √2 + i√2, −√2 + i√2, −√2 − i√2, √2 − i√2. (c) |−1 − i| = √2 and Arg(−1 − i) = −3π/4, so Log(−1 − i) = (1/2) ln 2 − 3πi/4.

─────────────────────────────────
Lesson 3: Complex Differentiability and the Cauchy–Riemann Equations
─────────────────────────────────

📌 Key idea of this section:

        f = u + iv is complex differentiable at z₀ = x₀ + iy₀
        ⇔ (u, v) is real differentiable at (x₀, y₀) and
              u_x = v_y,   u_y = −v_x   (Cauchy–Riemann);
        then f′(z₀) = u_x + i v_x.

Definitions

Let U ⊆ ℂ be open and f : U → ℂ. We say f is complex differentiable at z₀ ∈ U if the limit

        f′(z₀) = lim (f(z₀ + h) − f(z₀))/h   as h → 0, h ∈ ℂ \ {0},

exists. The function is holomorphic on U if it is complex differentiable at every point of U, and entire if it is holomorphic on all of ℂ. The usual rules (sum, product, quotient, chain rule) hold with the usual proofs, so polynomials are entire and rational functions are holomorphic away from the zeros of their denominators.

The requirement that the limit be the same along all directions is severe. For f(z) = z̄ the difference quotient is h̄/h, which equals 1 for real h and −1 for imaginary h; so z̄ is nowhere complex differentiable, although as a map of ℝ² it is linear and hence infinitely smooth.

The Cauchy–Riemann equations

Theorem 3.1. Write f = u + iv with u, v real. Then f is complex differentiable at z₀ = x₀ + iy₀ if and only if u and v are differentiable at (x₀, y₀) as real functions and satisfy u_x = v_y and u_y = −v_x there.

Proof. Suppose f′(z₀) = a + ib exists. Then f(z₀ + h) = f(z₀) + (a + ib)h + o(|h|). Writing h = s + it and taking real and imaginary parts, u(x₀ + s, y₀ + t) = u + as − bt + o and v(x₀ + s, y₀ + t) = v + bs + at + o. Hence u, v are real differentiable with Jacobian matrix having rows (a, −b) and (b, a), which says precisely u_x = a = v_y and u_y = −b = −v_x. Conversely, if u and v are real differentiable and satisfy the equations, put a = u_x, b = v_x; the real Jacobian then has rows (a, −b) and (b, a), which is the matrix of multiplication by a + ib, so f(z₀ + h) − f(z₀) = (a + ib)h + o(|h|), and f′(z₀) = a + ib.

The proof exhibits the geometric content: the real derivative of a holomorphic map at a point is a rotation composed with a dilation, the matrix model of a + ib from Lesson 1. In particular the Jacobian determinant is a² + b² = |f′(z₀)|² ≥ 0, so holomorphic maps preserve orientation, and where f′(z₀) ≠ 0 they preserve angles between curves. This is the starting point of conformal geometry (Lesson 12).

A sufficient condition used in practice: if u, v have continuous first partial derivatives on U satisfying the Cauchy–Riemann equations, then f is holomorphic on U, since continuous partials imply real differentiability. Merely having partial derivatives satisfying the equations at a point is not enough: the function equal to e^(−1/z⁴) for z ≠ 0 and 0 at 0 satisfies the Cauchy–Riemann equations at every point, including 0, yet is not even continuous at 0 (along the line z = t e^(iπ/4) it equals e^(1/t⁴)). The Looman–Menchoff theorem says that continuity of f together with the existence of the partials and the Cauchy–Riemann equations everywhere on U does suffice; its proof is deep.

Example. Let f(z) = |z|² = x² + y², so u = x² + y² and v = 0. The equations read 2x = 0 and 2y = 0, so f is complex differentiable at 0 only (with f′(0) = 0) and holomorphic nowhere: holomorphy is a property of open sets.

Wirtinger derivatives

Define the operators ∂/∂z = (1/2)(∂/∂x − i ∂/∂y) and ∂/∂z̄ = (1/2)(∂/∂x + i ∂/∂y). For a real differentiable f, the Cauchy–Riemann equations are equivalent to the single complex equation ∂f/∂z̄ = 0, and then f′ = ∂f/∂z. These operators act on polynomials in z and z̄ as if z and z̄ were independent variables: ∂(z²z̄)/∂z̄ = z², which is nonzero away from 0, so z²z̄ is not holomorphic on any open set. Heuristically, a holomorphic function is a function of z alone.

Harmonic functions

If f = u + iv is holomorphic and u, v are of class C² (we shall see in Lesson 7 that this is automatic), then u_xx = v_yx and u_yy = −v_xy, so

        Δu = u_xx + u_yy = 0,   and likewise Δv = 0.

The real and imaginary parts of a holomorphic function are harmonic, and v is called a harmonic conjugate of u. Conversely, on a simply connected domain every harmonic u has a harmonic conjugate, unique up to an additive constant: the 1-form −u_y dx + u_x dy is closed because Δu = 0, so it is exact on a simply connected domain, and its primitive v satisfies the Cauchy–Riemann equations. On the punctured plane, u = ln|z| is harmonic but has no single-valued harmonic conjugate, since the conjugate would be a continuous branch of arg z.

Example. Let u = x² − y² + 3x. Then u_x = 2x + 3 = v_y gives v = 2xy + 3y + φ(x), and v_x = 2y + φ′(x) must equal −u_y = 2y, so φ is constant. Thus v = 2xy + 3y + C and f = u + iv = z² + 3z + iC.

✏️ Your Turn

(a) At which points is f(x + iy) = x² + i y² complex differentiable? Is it holomorphic anywhere?
(b) Find a harmonic conjugate of u = e^x cos y and identify f = u + iv.
(c) Show that u = ln(x² + y²) is harmonic on ℂ \ {0}.

Answers: (a) u_x = 2x, v_y = 2y, u_y = 0, v_x = 0, so the equations hold exactly on the line y = x; f is differentiable there but holomorphic nowhere, since the line contains no open set. (b) v = e^x sin y, and f = e^z. (c) u = 2 Re Log z locally, or directly u_xx = 2(y² − x²)/(x² + y²)² and u_yy = 2(x² − y²)/(x² + y²)², which sum to 0.

─────────────────────────────────
Lesson 4: Power Series and Analytic Functions
─────────────────────────────────

📌 Key idea of this section:

        ∑ aₙ (z − a)ⁿ converges absolutely on D(a, R) and diverges for |z − a| > R,
        where 1/R = limsup |aₙ|^(1/n)   (Cauchy–Hadamard).
        Inside the disc of convergence the sum is holomorphic,
        may be differentiated term by term, and aₙ = f⁽ⁿ⁾(a)/n!.

The radius of convergence

Theorem 4.1 (Cauchy–Hadamard). Given complex coefficients aₙ, let 1/R = limsup |aₙ|^(1/n), with the conventions 1/0 = ∞ and 1/∞ = 0. Then ∑ aₙ zⁿ converges absolutely for |z| < R, uniformly on every closed disc |z| ≤ ρ < R, and diverges for |z| > R.

Proof. Let ρ < r < R. By the definition of limsup, |aₙ|^(1/n) < 1/r for all large n, so |aₙ zⁿ| ≤ (ρ/r)ⁿ for |z| ≤ ρ and n large. The Weierstrass M-test against the convergent geometric series ∑ (ρ/r)ⁿ gives absolute and uniform convergence on |z| ≤ ρ. If |z| > R, then |aₙ|^(1/n) > 1/|z| for infinitely many n, so |aₙ zⁿ| > 1 infinitely often, the terms do not tend to 0, and the series diverges.

On the circle |z| = R anything can happen: ∑ zⁿ diverges at every point of |z| = 1, ∑ zⁿ/n² converges at every point, and ∑ zⁿ/n converges at every point except z = 1 (by Dirichlet's test). When the ratio |aₙ₊₁/aₙ| has a limit L, that limit equals 1/R, but the root form is the general one; for ∑ z^(n²) only the root test applies, and R = 1.

Example. For ∑ (2ⁿ + 3ⁿ) zⁿ, |aₙ|^(1/n) = 3 (1 + (2/3)ⁿ)^(1/n) → 3, so R = 1/3.

Term-by-term differentiation

Theorem 4.2. If f(z) = ∑ aₙ zⁿ has radius R > 0, then f is holomorphic on D(0, R) and f′(z) = ∑ n aₙ z^(n−1), a series with the same radius R.

Proof. Since n^(1/n) → 1, limsup |n aₙ|^(1/n) = limsup |aₙ|^(1/n), so g(z) = ∑ n aₙ z^(n−1) has radius R. Fix z₀ with |z₀| < ρ < R and let 0 < |h| < ρ − |z₀|. For each N write f = S_N + E_N, the partial sum up to degree N and the tail. Then

        (f(z₀ + h) − f(z₀))/h − g(z₀) = [(S_N(z₀ + h) − S_N(z₀))/h − S_N′(z₀)] + [S_N′(z₀) − g(z₀)] + (E_N(z₀ + h) − E_N(z₀))/h.

Using aⁿ − bⁿ = (a − b)(a^(n−1) + a^(n−2) b + … + b^(n−1)), the last term is at most ∑ over n > N of |aₙ| n ρ^(n−1), the tail of a convergent series; given ε > 0 choose N so large that it and the middle term are each below ε. For this fixed N the first bracket tends to 0 as h → 0, because S_N is a polynomial. Hence the whole expression is below 3ε for small |h|.

Iterating, f has derivatives of all orders on D(0, R), and evaluating the k-th derivative at 0 gives a_k = f⁽ᵏ⁾(0)/k!. Consequently the power series representing a function about a point is unique. A function on an open set U is called analytic if around every point of U it is given by a convergent power series. Theorem 4.2 shows that analytic functions are holomorphic; the deep converse, proved in Lesson 7, is that holomorphic functions are analytic.

The elementary transcendental functions

The series e^z = ∑ zⁿ/n!, cos z = ∑ (−1)ⁿ z^(2n)/(2n)! and sin z = ∑ (−1)ⁿ z^(2n+1)/(2n+1)! have infinite radius and define entire functions. Term-by-term differentiation gives (e^z)′ = e^z; the Cauchy product of two absolutely convergent series together with the binomial theorem gives e^(z+w) = e^z e^w, and so ∑ zⁿ/n! agrees with the definition e^x (cos y + i sin y) of Lesson 2. The identities

        cos z = (e^(iz) + e^(−iz))/2,   sin z = (e^(iz) − e^(−iz))/(2i)

hold for all complex z, and show that the complex sine is unbounded: sin(iy) = i sinh y. This is not an accident; by Liouville's theorem (Lesson 7) every bounded entire function is constant.

Why real calculus cannot see radii of convergence

The function 1/(1 + x²) is real analytic on all of ℝ, yet its Maclaurin series 1 − x² + x⁴ − … converges only for |x| < 1. Real analysis offers no explanation. Complex analysis does: 1/(1 + z²) has poles at ±i, at distance 1 from the origin, and we shall prove that the Taylor series of a holomorphic function at a converges on the largest disc about a on which the function is holomorphic. The radius of convergence is therefore the distance to the nearest singularity in the complex plane.

✏️ Your Turn

(a) Find the radius of convergence of ∑ n³ zⁿ/5ⁿ.
(b) Find the radius of convergence of ∑ z^(n!), whose coefficient aₖ is 1 if k is a factorial and 0 otherwise.
(c) Assuming the distance-to-the-nearest-singularity principle, find the radius of convergence of the Taylor series of 1/(z² − 2z + 5) about 0.

Answers: (a) |aₙ|^(1/n) = n^(3/n)/5 → 1/5, so R = 5. (b) The nonzero coefficients all equal 1, so limsup |aₖ|^(1/k) = 1 and R = 1. (c) The poles are the roots 1 ± 2i of z² − 2z + 5, at distance √5 from 0, so R = √5.

─────────────────────────────────
Lesson 5: Contour Integrals
─────────────────────────────────

📌 Key idea of this section:

        ∫_γ f(z) dz = ∫ₐᵇ f(γ(t)) γ′(t) dt,    |∫_γ f(z) dz| ≤ max over γ of |f| · L(γ).
        If F′ = f on U, then ∫_γ f(z) dz = F(γ(b)) − F(γ(a)).
        ∮ over |z − a| = r of (z − a)ⁿ dz = 2πi if n = −1, and 0 for every other integer n.

Paths and the integral

A path is a continuous, piecewise continuously differentiable map γ : [a, b] → ℂ; it is closed if γ(a) = γ(b). For f continuous on the trace γ* = γ([a, b]) define ∫_γ f(z) dz = ∫ₐᵇ f(γ(t)) γ′(t) dt. The chain rule shows that the integral is unchanged by an orientation-preserving reparametrisation and changes sign under reversal of orientation. Writing f = u + iv and dz = dx + i dy, the contour integral is the pair of real line integrals ∫ (u dx − v dy) + i ∫ (v dx + u dy). The length of γ is L(γ) = ∫ₐᵇ |γ′(t)| dt, and the estimate |∫_γ f dz| ≤ sup over γ* of |f| · L(γ), often called the ML-inequality, follows from |∫ g| ≤ ∫ |g| for complex-valued g. Circles |z − a| = r are always oriented counterclockwise unless stated otherwise.

The fundamental computation

Parametrise the circle by γ(t) = a + r e^(it), 0 ≤ t ≤ 2π, so γ′(t) = i r e^(it). For n ∈ ℤ,

        ∮ (z − a)ⁿ dz = ∫₀^(2π) rⁿ e^(int) · i r e^(it) dt = i r^(n+1) ∫₀^(2π) e^(i(n+1)t) dt,

which is 2πi when n = −1 and 0 otherwise, because e^(ikt) integrates to 0 over a full period when k ≠ 0. Almost every theorem in this course is, in the end, a sophisticated reduction to this one computation.

Primitives

Theorem 5.1. If f is continuous on an open set U and has a primitive F there (F holomorphic with F′ = f), then for every path γ in U from p to q, ∫_γ f dz = F(q) − F(p). In particular ∮_γ f dz = 0 for every closed path γ in U.

Proof. On each C¹ piece, (F ∘ γ)′(t) = F′(γ(t)) γ′(t) by the chain rule, so the integral telescopes by the fundamental theorem of calculus applied to real and imaginary parts.

Combining this with the fundamental computation: the function 1/z has no primitive on ℂ \ {0}, because its integral over the unit circle is 2πi ≠ 0. Equivalently, there is no continuous logarithm on the punctured plane. On the other hand, every integer power zⁿ with n ≠ −1 has the primitive z^(n+1)/(n + 1); so ∫ over any path from 0 to 1 + i of z² dz equals (1 + i)³/3 = (−2 + 2i)/3.

Integration and limits

If fₙ → f uniformly on γ*, then ∫_γ fₙ dz → ∫_γ f dz, by the ML-inequality. In particular a uniformly convergent series of continuous functions may be integrated term by term along a path. This simple remark is what turns Cauchy's integral formula into power series expansions in Lesson 7.

Green's theorem and a first glimpse of Cauchy

If f is C¹ on a neighbourhood of a closed region Ω with piecewise smooth positively oriented boundary, Green's theorem applied to the real and imaginary parts gives

        ∮ over ∂Ω of f dz = 2i ∬ over Ω of ∂f/∂z̄ dA.

For holomorphic f with continuous derivative the right side is 0, which is Cauchy's original (1825) form of his theorem. The test case f = z̄ has ∂f/∂z̄ = 1, and indeed ∮ over |z| = 1 of z̄ dz = ∫₀^(2π) e^(−it) i e^(it) dt = 2πi = 2i · π. Lesson 6 removes the hypothesis that f′ be continuous, which is essential for a theory built on the bare definition of holomorphy.

The winding number

For a closed path γ and a point a ∉ γ*, define the winding number (index) n(γ, a) = (1/2πi) ∮_γ dz/(z − a).

Theorem 5.2. n(γ, a) is an integer; it is constant on each connected component of ℂ \ γ* and is 0 on the unbounded component.

Proof. Parametrise γ on [α, β] and let φ(t) = ∫ from α to t of γ′(s)/(γ(s) − a) ds, so that φ(β) = 2πi n(γ, a). The function e^(−φ(t))(γ(t) − a) has derivative e^(−φ)(γ′ − φ′(γ − a)) = 0 wherever γ is differentiable, so it is constant; comparing t = α with t = β and using γ(α) = γ(β) gives e^(φ(β)) = 1, hence φ(β) ∈ 2πiℤ. The index is a continuous integer-valued function of a, hence locally constant, and it tends to 0 as |a| → ∞ by the ML-inequality.

✏️ Your Turn

(a) Compute ∮ over |z| = 2 of z⁻³ dz.
(b) Compute ∫ dz/z along the upper half of the unit circle from 1 to −1.
(c) Show that |∮ over |z| = R of dz/(z² + 1)| ≤ 2πR/(R² − 1) for R > 1, and deduce the limit as R → ∞.

Answers: (a) 0, since z⁻³ has the primitive −z⁻²/2 on ℂ \ {0}. (b) With z = e^(it), 0 ≤ t ≤ π, the integral is ∫₀^π i dt = iπ. (c) On |z| = R, |z² + 1| ≥ R² − 1 by the reverse triangle inequality, and the length is 2πR; the bound tends to 0. (Lesson 9 shows the integral is in fact exactly 0 for every R > 1.)

─────────────────────────────────
Lesson 6: Cauchy's Theorem
─────────────────────────────────

📌 Key idea of this section:

        Goursat: f holomorphic on U, T ⊂ U a closed triangle  ⇒  ∮ over ∂T of f dz = 0.
        Hence f has a primitive on every disc (indeed every convex or simply connected domain) in U,
        and ∮_γ f dz = 0 for every closed path γ that is null-homotopic in U.

Goursat's lemma

Theorem 6.1 (Cauchy–Goursat). Let f be holomorphic on an open set U, and let T be a closed solid triangle contained in U. Then ∮ over ∂T of f(z) dz = 0.

The point of Goursat's 1900 proof is that it uses only the existence of f′ at each point, with no continuity of f′.

Proof. Write η(T) = ∮ over ∂T of f dz, and let d and p be the diameter and perimeter of T. Joining the midpoints of the sides divides T into four congruent triangles T₁, …, T₄ with boundaries oriented consistently with ∂T. The integrals over the interior edges cancel in pairs, so η(T) = η(T₁) + η(T₂) + η(T₃) + η(T₄), and for at least one of them, call it T⁽¹⁾, |η(T⁽¹⁾)| ≥ |η(T)|/4. Repeating the construction yields nested triangles T ⊃ T⁽¹⁾ ⊃ T⁽²⁾ ⊃ … with

        |η(T)| ≤ 4ⁿ |η(T⁽ⁿ⁾)|,   diam T⁽ⁿ⁾ = d/2ⁿ,   perimeter of T⁽ⁿ⁾ = p/2ⁿ.

By compactness the intersection of the T⁽ⁿ⁾ is a single point z₀ ∈ T. Since f is complex differentiable at z₀, we may write f(z) = f(z₀) + f′(z₀)(z − z₀) + ψ(z)(z − z₀) with ψ(z) → 0 as z → z₀. The linear polynomial f(z₀) + f′(z₀)(z − z₀) has a primitive, so its integral over ∂T⁽ⁿ⁾ vanishes by Theorem 5.1. Therefore, with εₙ = sup of |ψ| over T⁽ⁿ⁾,

        |η(T⁽ⁿ⁾)| = |∮ over ∂T⁽ⁿ⁾ of ψ(z)(z − z₀) dz| ≤ εₙ · (d/2ⁿ) · (p/2ⁿ),

and so |η(T)| ≤ 4ⁿ · εₙ dp/4ⁿ = εₙ dp → 0. Hence η(T) = 0.

The same argument shows that the conclusion persists if f is only assumed continuous on U and holomorphic on U minus one point: a small triangle around the exceptional point contributes an integral bounded by its perimeter times sup |f|, which can be made arbitrarily small. This variant is exactly what is needed for the integral formula.

Primitives on discs and Cauchy's theorem for convex sets

Theorem 6.2. A holomorphic function on an open disc D (or more generally on a convex open set) has a primitive there. Consequently ∮_γ f dz = 0 for every closed path γ in D.

Proof. Fix the centre a and set F(z) = ∫ over the segment [a, z] of f(w) dw. By Goursat applied to the triangle with vertices a, z, z + h,

        F(z + h) − F(z) = ∫ over [z, z + h] of f(w) dw = h f(z) + ∫ over [z, z + h] of (f(w) − f(z)) dw,

and the last integral is at most |h| · sup of |f(w) − f(z)| over the segment, which is o(|h|) by continuity. So F′(z) = f(z), and Theorem 5.1 finishes the proof.

The general forms

Two closed paths γ₀, γ₁ in U are homotopic in U if one can be continuously deformed into the other through closed paths in U; γ is null-homotopic if it is homotopic to a constant path. A domain is simply connected if every closed path in it is null-homotopic.

Theorem 6.3 (Cauchy, homotopy form). If f is holomorphic on U and the closed paths γ₀ and γ₁ are homotopic in U, then ∮ over γ₀ of f dz = ∮ over γ₁ of f dz. In particular, if U is simply connected, then ∮_γ f dz = 0 for every closed path γ in U, and f has a primitive on U.

The proof covers the image of the homotopy by finitely many discs contained in U (a Lebesgue-number argument) and applies Theorem 6.2 on each, so that the integral does not change under small deformations. An even sharper statement, the homology form, says that ∮_γ f dz = 0 whenever n(γ, a) = 0 for every a ∉ U; a short proof was given by J. D. Dixon in 1971. Both say that the integral of a holomorphic function depends only on the topology of the path relative to the places where f fails to be holomorphic. In practice this is used as a deformation principle: a circle around a singularity may be shrunk or enlarged at will without changing the integral, provided no other singularity is crossed.

Example: a Gaussian integral by shifting the contour

Fix b > 0 and integrate the entire function e^(−z²) around the rectangle with vertices −R, R, R + ib, −R + ib. On the vertical sides, |e^(−(±R + it)²)| = e^(−R² + t²) ≤ e^(b² − R²), so they contribute at most 2b e^(b² − R²) → 0. Cauchy's theorem and the known value ∫ e^(−x²) dx = √π over ℝ then give ∫ e^(−(x + ib)²) dx = √π over ℝ. Since e^(−(x + ib)²) = e^(b²) e^(−x²) e^(−2ibx), taking real parts gives

        ∫ from −∞ to ∞ of e^(−x²) cos(2bx) dx = √π e^(−b²).

This is the statement that the Gaussian is its own Fourier transform, obtained with no differentiation under the integral sign.

✏️ Your Turn

(a) Compute ∮ over |z| = 1 of e^(z²) sin z/(z − 3) dz.
(b) Evaluate ∫ from −∞ to ∞ of e^(−x²) cos 4x dx.
(c) Explain why Cauchy's theorem does not contradict ∮ over |z| = 1 of dz/z = 2πi.

Answers: (a) 0, since the integrand is holomorphic on the disc |z| < 3, which contains the circle. (b) With b = 2, the value is √π e^(−4) ≈ 0.03246. (c) 1/z is holomorphic on ℂ \ {0}, which is not simply connected; the unit circle winds once around the excluded point 0 and is not null-homotopic in ℂ \ {0}.

─────────────────────────────────
Lesson 7: Cauchy's Integral Formula and Its Consequences
─────────────────────────────────

📌 Key idea of this section:

        If f is holomorphic on a neighbourhood of the closed disc |z − a| ≤ r and |w − a| < r, then
              f(w) = (1/2πi) ∮ f(z)/(z − w) dz,
              f⁽ⁿ⁾(w) = (n!/2πi) ∮ f(z)/(z − w)^(n+1) dz   (circle |z − a| = r).
        Holomorphic ⇒ analytic, Liouville, FTA, identity theorem, maximum principle.

The integral formula

Theorem 7.1 (Cauchy's integral formula). Let f be holomorphic on an open set containing the closed disc D̄ = {|z − a| ≤ r}, and let C be its boundary circle. Then for every w with |w − a| < r, f(w) = (1/2πi) ∮_C f(z)/(z − w) dz.

Proof. Let g(z) = (f(z) − f(w))/(z − w) for z ≠ w and g(w) = f′(w). Then g is continuous on a slightly larger disc and holomorphic except possibly at w, so by the variant of Goursat's lemma and Theorem 6.2, ∮_C g dz = 0. Hence ∮_C f(z)/(z − w) dz = f(w) ∮_C dz/(z − w) = 2πi f(w) · n(C, w) = 2πi f(w), since n(C, w) = 1 for w inside the circle (Theorem 5.2 and the fundamental computation at w = a).

Holomorphic functions are analytic

Theorem 7.2. If f is holomorphic on U and D(a, r) ⊆ U, then f(w) = ∑ cₙ (w − a)ⁿ for all w ∈ D(a, r), with cₙ = (1/2πi) ∮ f(z)/(z − a)^(n+1) dz over |z − a| = ρ, for any ρ < r. In particular f is infinitely differentiable and the formula for f⁽ⁿ⁾ in the key idea holds.

Proof. Fix w with |w − a| < ρ < r. For z on the circle |z − a| = ρ, the geometric series

        1/(z − w) = 1/((z − a)(1 − (w − a)/(z − a))) = ∑ (w − a)ⁿ/(z − a)^(n+1)

converges uniformly in z, because the ratio |w − a|/ρ is less than 1. Multiply by f(z)/(2πi), integrate term by term (Lesson 5), and apply Theorem 7.1. The derivative formula follows from aₙ = f⁽ⁿ⁾(a)/n! (Lesson 4).

Two consequences are worth isolating. First, the Taylor series at a converges on the largest open disc about a contained in U, which justifies the distance-to-the-nearest-singularity rule of Lesson 4. Second, the derivative of a holomorphic function is holomorphic, so the real and imaginary parts are C^∞ and the harmonicity argument of Lesson 3 needs no extra hypothesis.

Example. With f(z) = e^z and n = 2, ∮ over |z| = 2 of e^z/(z − 1)³ dz = (2πi/2!) · f″(1) = πi e.

Cauchy's estimates and Liouville's theorem

If |f| ≤ M on the circle |z − a| = r, the ML-inequality applied to the derivative formula gives Cauchy's estimates:

        |f⁽ⁿ⁾(a)| ≤ n! M / rⁿ.

Theorem 7.3 (Liouville). Every bounded entire function is constant. (The theorem carries the name of Liouville, who lectured on it in 1847, but Cauchy had already published it in 1844.)

Proof. If |f| ≤ M on ℂ, then |f′(a)| ≤ M/r for every r > 0, so f′ ≡ 0 and f is constant.

The same argument with n > k shows that an entire function satisfying |f(z)| ≤ A + B|z|ᵏ is a polynomial of degree at most k.

Theorem 7.4 (fundamental theorem of algebra). Every nonconstant polynomial p with complex coefficients has a zero in ℂ; hence p factors completely into linear factors.

Proof. If p(z) = aₙzⁿ + … + a₀ with n ≥ 1 and aₙ ≠ 0, then |p(z)| ≥ |aₙ||z|ⁿ/2 for |z| large, so |p(z)| → ∞. If p had no zero, 1/p would be entire and tend to 0 at infinity, hence bounded, hence constant by Liouville, which is absurd. Induction on the degree gives the factorisation.

Morera's theorem and uniform limits

Theorem 7.5 (Morera). If f is continuous on an open set U and ∮ over ∂T of f dz = 0 for every closed triangle T ⊂ U, then f is holomorphic on U.

Proof. On each disc in U the construction of Theorem 6.2 produces a holomorphic primitive F; then f = F′ is holomorphic by Theorem 7.2.

Corollary (Weierstrass). If fₙ are holomorphic on U and fₙ → f uniformly on compact subsets of U, then f is holomorphic and fₙ⁽ᵏ⁾ → f⁽ᵏ⁾ uniformly on compact subsets for every k. Indeed, triangle integrals pass to the limit, so Morera applies, and Cauchy's estimates control the derivatives. This is in sharp contrast with real analysis, where every continuous function on [0, 1] is a uniform limit of polynomials.

The identity theorem

Theorem 7.6. Let U be a domain and f holomorphic on U, not identically zero. Then the zeros of f are isolated: each zero a has an order m ≥ 1 with f(z) = (z − a)ᵐ g(z), g holomorphic and g(a) ≠ 0. Consequently, if two holomorphic functions on U agree on a set with an accumulation point in U, they agree everywhere on U.

Proof. Let A be the set of points of U at which all derivatives of f vanish. By Theorem 7.2, A is open (f vanishes on a disc around each of its points), and it is closed in U by continuity of the derivatives. Since U is connected and f ≢ 0, A is empty. So at each zero a some derivative is nonzero; if m is the least such order, the Taylor series gives f(z) = (z − a)ᵐ g(z) with g(a) = f⁽ᵐ⁾(a)/m! ≠ 0, and g is nonzero near a.

The identity theorem is the source of the rigidity of holomorphic functions: identities like sin²z + cos²z = 1, valid on ℝ, extend automatically to ℂ, and a holomorphic function on a domain is determined by its values on any segment.

The mean value property and the maximum principle

Taking w = a and z = a + r e^(it) in Theorem 7.1 gives the mean value property f(a) = (1/2π) ∫₀^(2π) f(a + r e^(it)) dt.

Theorem 7.7 (maximum modulus principle). If f is holomorphic on a domain U and |f| attains a local maximum at some point of U, then f is constant. If U is bounded and f is continuous on the closure, then max |f| over the closure is attained on the boundary.

Proof. Suppose |f(a)| ≥ |f(z)| for |z − a| ≤ r. The mean value property gives |f(a)| ≤ (1/2π) ∫ |f(a + r e^(it))| dt ≤ |f(a)|, so equality holds throughout, forcing |f| = |f(a)| on every small circle about a, hence on a disc. A holomorphic function of constant modulus on a disc is constant (the Cauchy–Riemann equations, or the open mapping theorem of Lesson 11), and the identity theorem spreads this to U.

✏️ Your Turn

(a) Compute ∮ over |z| = 3 of (z³ + 2z)/(z − 1)² dz.
(b) Let f be entire with |f(z)| ≤ 5|z|² for all z. What can f be?
(c) Find the maximum of |e^z| on the closed unit disc and where it is attained.

Answers: (a) By the derivative formula with n = 1, the integral is 2πi f′(1) with f(z) = z³ + 2z, f′(1) = 5, so it equals 10πi. (b) By Cauchy's estimates f is a polynomial of degree at most 2; f(0) = 0 and f′(0) = 0 are forced (since |f(z)| ≤ 5|z|² near 0), so f(z) = c z² with |c| ≤ 5. (c) |e^z| = e^(Re z), maximised on the boundary at z = 1, with value e.

─────────────────────────────────
Lesson 8: Laurent Series and Isolated Singularities
─────────────────────────────────

📌 Key idea of this section:

        f holomorphic on the annulus r < |z − a| < R  ⇒  f(z) = ∑ over n ∈ ℤ of cₙ (z − a)ⁿ,
              cₙ = (1/2πi) ∮ f(z)/(z − a)^(n+1) dz   over any circle |z − a| = ρ, r < ρ < R.
        An isolated singularity is removable, a pole, or essential,
        according as the principal part has no, finitely many, or infinitely many terms.

The Laurent expansion

Theorem 8.1 (Laurent, 1843). A function holomorphic on the annulus A = {r < |z − a| < R}, with 0 ≤ r < R ≤ ∞, has a unique expansion f(z) = ∑ cₙ (z − a)ⁿ over all n ∈ ℤ, converging absolutely and uniformly on compact subsets of A, with the coefficients given in the key idea.

Proof. Fix w ∈ A and radii r < ρ₁ < |w − a| < ρ₂ < R. Applying the Cauchy integral formula to the region between the circles (justified by the homology form of Cauchy's theorem) gives f(w) = (1/2πi)[∮ over |z − a| = ρ₂ − ∮ over |z − a| = ρ₁] of f(z)/(z − w) dz. On the outer circle expand 1/(z − w) as in Theorem 7.2, in nonnegative powers of (w − a). On the inner circle |z − a| < |w − a|, so 1/(z − w) = −∑ (z − a)ᵏ/(w − a)^(k+1) over k ≥ 0, which produces the negative powers. Uniqueness follows by integrating the series term by term against (z − a)^(−n−1), using the fundamental computation of Lesson 5.

The part with negative powers is the principal part at a; the coefficient c₋₁ is singled out and called the residue, Res(f, a). The same function can have different Laurent series in different annuli. For f(z) = 1/((z − 1)(z − 2)) = 1/(z − 2) − 1/(z − 1):

        |z| < 1:       f(z) = ∑ (1 − 2^(−n−1)) zⁿ                       (n ≥ 0)
        1 < |z| < 2:   f(z) = −∑ z^(−n) (n ≥ 1) − ∑ zⁿ/2^(n+1) (n ≥ 0)
        |z| > 2:       f(z) = ∑ (2^(n−1) − 1) z^(−n)                     (n ≥ 2)

Each line comes from expanding 1/(1 − z), 1/(1 − z/2), 1/(1 − 1/z) or 1/(1 − 2/z) as a geometric series in whichever ratio has modulus less than 1.

Classification of isolated singularities

Suppose f is holomorphic on a punctured disc 0 < |z − a| < r, with Laurent coefficients cₙ. The singularity at a is removable if cₙ = 0 for all n < 0, a pole of order m if c₋ₘ ≠ 0 and cₙ = 0 for n < −m, and essential if cₙ ≠ 0 for infinitely many negative n.

Theorem 8.2 (Riemann's removable singularity theorem). If f is bounded near a, then a is removable.

Proof. By Cauchy's estimate on a circle of radius ρ, |c₋ₙ| = |(1/2πi) ∮ f(z)(z − a)^(n−1) dz| ≤ M ρⁿ for n ≥ 1, which tends to 0 as ρ → 0.

Theorem 8.3. The point a is a pole of f if and only if |f(z)| → ∞ as z → a; it is a pole of order m if and only if f(z) = g(z)/(z − a)ᵐ with g holomorphic near a and g(a) ≠ 0, equivalently if and only if 1/f has a removable singularity at a and its extension has a zero of order m there.

Theorem 8.4 (Casorati–Weierstrass). If a is an essential singularity of f, then for every punctured disc V around a, f(V) is dense in ℂ.

Proof. Suppose instead that some disc D(w, δ) is disjoint from f(V). Then g(z) = 1/(f(z) − w) is holomorphic on V and bounded by 1/δ, so it has a removable singularity at a. If g(a) ≠ 0, then f = w + 1/g is holomorphic near a; if g has a zero of order m at a, then f has a pole of order m. Either conclusion contradicts the assumption that a is essential.

Much more is true. Picard's great theorem (1879) says that in every punctured neighbourhood of an essential singularity, f takes every complex value infinitely often, with at most one exception. The function e^(1/z) = ∑ z^(−n)/n! (n ≥ 0) has an essential singularity at 0 and omits exactly the value 0, so the exception can occur. Picard's little theorem states that a nonconstant entire function omits at most one complex value.

Examples. The function sin z/z has a removable singularity at 0, with value 1. Since 1 − cos z = z²/2 − z⁴/24 + …, the function (1 − cos z)/z⁴ = 1/(2z²) − 1/24 + … has a pole of order 2 at 0. The function sin(1/z) has an essential singularity at 0.

Singularities at infinity and meromorphic functions

The behaviour of f at ∞ is defined as the behaviour of f(1/w) at w = 0. A function is meromorphic on U if it is holomorphic except at a discrete set of poles. An entire function with a pole (or removable singularity) at ∞ is a polynomial, since its Taylor series at 0 must terminate; an entire function with an essential singularity at ∞, such as e^z, is called transcendental. The meromorphic functions on the whole Riemann sphere Ĉ are exactly the rational functions: subtracting the principal parts at the finitely many poles leaves a bounded entire function. This is the first instance of a recurring theme, that compactness of the underlying surface forces algebraic behaviour.

✏️ Your Turn

(a) Find the Laurent series of 1/(z(z − 1)) on 0 < |z| < 1 and read off its residue at 0.
(b) Classify the singularity of z sin(1/z) at 0.
(c) Classify the singularity of z/(e^z − 1) at 0, and of e^z/(z − 1)³ at 1.

Answers: (a) 1/(z(z − 1)) = −(1/z) · 1/(1 − z) = −1/z − 1 − z − z² − …, so the residue is −1. (b) z sin(1/z) = 1 − 1/(6z²) + 1/(120z⁴) − …, infinitely many negative powers, so the singularity is essential. (c) z/(e^z − 1) → 1 as z → 0, so it is removable; e^z/(z − 1)³ is a pole of order 3, since e^z does not vanish at 1.

─────────────────────────────────
Lesson 9: The Residue Theorem
─────────────────────────────────

📌 Key idea of this section:

        If f is holomorphic on U except at isolated singularities a₁, …, aₖ,
        and γ is a closed path in U \ {a₁, …, aₖ} with n(γ, z) = 0 for all z ∉ U, then
              ∮_γ f(z) dz = 2πi ∑ n(γ, aⱼ) Res(f, aⱼ).

The theorem

Theorem 9.1 (Cauchy's residue theorem, 1831). Under the hypotheses of the key idea, the integral of f over γ equals 2πi times the sum of the residues, each weighted by the winding number.

Proof. Let Pⱼ(z) be the principal part of f at aⱼ, a series in negative powers of z − aⱼ converging on ℂ \ {aⱼ}. Then g = f − P₁ − … − Pₖ has only removable singularities, so after removing them it is holomorphic on U, and ∮_γ g dz = 0 by the homology form of Cauchy's theorem. Integrating each Pⱼ term by term, every power (z − aⱼ)^(−n) with n ≥ 2 has a primitive and contributes nothing, while c₋₁(z − aⱼ)⁻¹ contributes 2πi n(γ, aⱼ) Res(f, aⱼ).

For a positively oriented simple closed curve, such as a circle or the boundary of a rectangle, the winding numbers are 1 for points inside and 0 for points outside, and the formula reduces to 2πi times the sum of the residues inside.

Computing residues

Residues are local, and in practice one rarely computes a full Laurent series. The standard rules are:

  1. If a is a simple pole, Res(f, a) = lim (z − a) f(z) as z → a.
  2. If f = g/h with g, h holomorphic at a, g(a) ≠ 0, h(a) = 0 and h′(a) ≠ 0, then Res(f, a) = g(a)/h′(a).
  3. If a is a pole of order at most m, then Res(f, a) = (1/(m − 1)!) lim d^(m−1)/dz^(m−1) [(z − a)ᵐ f(z)] as z → a.
  4. If f has a known Laurent expansion, read off c₋₁; this is the only option at an essential singularity.

Examples. At z = i, the function e^z/(z² + 1) has the simple pole with residue e^i/(2i) by rule 2. The function 1/(z² + 1)² has a double pole at i, and by rule 3 its residue is the derivative of (z + i)⁻² at i, namely −2(2i)⁻³ = −2/(−8i) = 1/(4i) = −i/4. The function π cot(πz) has a simple pole at every integer n with residue π cos(πn)/(π cos(πn)) = 1, and π/sin(πz) has residue (−1)ⁿ at n; these two facts are the engine of the summation method in Lesson 10. The function e^(1/z) has residue 1 at its essential singularity 0, read off from its Laurent series.

Worked integrals

Example. Compute ∮ over |z| = 3 of e^z/(z(z − 2)) dz. Both poles lie inside; Res at 0 is e⁰/(0 − 2) = −1/2 and Res at 2 is e²/2, so the integral is 2πi(e² − 1)/2 = πi(e² − 1).

Example. Compute ∮ over |z| = 2 of z/(z⁴ − 1) dz. The four simple poles ±1, ±i all lie inside. By rule 2 the residue at a pole a is a/(4a³) = 1/(4a²), and the sum over a = 1, −1, i, −i is (1 + 1 − 1 − 1)/4 = 0. So the integral is 0.

The residue at infinity

If f is holomorphic for |z| > R, define Res(f, ∞) = −(1/2πi) ∮ over |z| = ρ of f dz for any ρ > R, equivalently minus the coefficient of 1/z in the Laurent expansion valid near ∞. The minus sign makes the following statement true: if f is holomorphic on ℂ except at finitely many points, the sum of all its residues, including the one at ∞, is zero. This often shortens computations dramatically. In the last example, z/(z⁴ − 1) = z⁻³ + z⁻⁷ + … near ∞ has no 1/z term, so the residue at ∞ is 0 and the integral over any circle enclosing all four poles vanishes without computing a single finite residue. Similarly ∮ over |z| = 2 of z¹⁰/(z¹¹ − 1) dz = 2πi, because z¹⁰/(z¹¹ − 1) = 1/z + z⁻¹² + … near ∞.

✏️ Your Turn

(a) Find Res(z/(z² − 3z + 2), 2).
(b) Find Res(e^(2z)/(z − 1)³, 1).
(c) Compute ∮ over |z − 2i| = 2 of dz/(z² + 9).

Answers: (a) z² − 3z + 2 = (z − 1)(z − 2), so the residue is 2/(2 − 1) = 2. (b) By rule 3 with m = 3, the residue is (1/2) · (d²/dz²) e^(2z) at 1 = (1/2) · 4e² = 2e². (c) The poles are ±3i; only 3i lies inside, since |3i − 2i| = 1 < 2 while |−3i − 2i| = 5. The residue there is 1/(6i), so the integral is 2πi/(6i) = π/3.

─────────────────────────────────
Lesson 10: Evaluating Real Integrals and Infinite Sums
─────────────────────────────────

📌 Key idea of this section:

        Trigonometric integrals: put z = e^(iθ), cos θ = (z + z⁻¹)/2, dθ = dz/(iz).
        Integrals over ℝ: close the contour with a large semicircle; Jordan's lemma for e^(ikx).
        Many-valued integrands: keyhole contours around a branch cut.
        Sums: ∑ f(n) = −(sum of residues of π cot(πz) f(z) at the poles of f).

Type 1: rational functions of cos θ and sin θ

Substituting z = e^(iθ) turns ∫₀^(2π) R(cos θ, sin θ) dθ into the integral of a rational function over the unit circle. The classical example, for a > |b| > 0, is

        ∫₀^(2π) dθ/(a + b cos θ) = 2π/√(a² − b²).

Derivation. Since a + b(z + 1/z)/2 = (bz² + 2az + b)/(2z) and dθ = dz/(iz), the integral is (2/i) ∮ dz/(bz² + 2az + b) over |z| = 1. The roots of the quadratic are z± = (−a ± √(a² − b²))/b, with product 1; the root z₊ lies inside the circle and z₋ outside. The residue at z₊ is 1/(b(z₊ − z₋)) = 1/(2√(a² − b²)), so the integral is (2/i) · 2πi/(2√(a² − b²)) = 2π/√(a² − b²). For instance ∫₀^(2π) dθ/(5 + 3 cos θ) = 2π/4 = π/2. The same method handles cos(nθ) in the numerator, by taking the real part of zⁿ.

Type 2: rational functions on the real line

Theorem 10.1. If P and Q are polynomials with deg Q ≥ deg P + 2 and Q has no real zeros, then ∫ from −∞ to ∞ of P(x)/Q(x) dx = 2πi ∑ Res(P/Q, a) over the zeros a of Q in the upper half-plane.

Proof. Integrate over the boundary of the half-disc of radius R. On the semicircle |P/Q| ≤ C/R² for large R, so its contribution is at most πR · C/R² → 0 by the ML-inequality.

Example. ∫ dx/(x⁴ + 1) over ℝ. The poles in the upper half-plane are e^(iπ/4) and e^(3iπ/4). At a pole a, the residue is 1/(4a³) = a/(4a⁴) = −a/4. Their sum is −(e^(iπ/4) + e^(3iπ/4))/4 = −i√2/4, and 2πi · (−i√2/4) = π/√2.

Example. For a, b > 0 with a ≠ b, ∫ dx/((x² + a²)(x² + b²)) over ℝ = π/(ab(a + b)). The residues at ia and ib are 1/(2ia(b² − a²)) and 1/(2ib(a² − b²)); their sum simplifies to 1/(2i ab(a + b)), and multiplying by 2πi gives the result. The formula remains valid for a = b by continuity, giving π/(2a³).

Type 3: Fourier integrals and Jordan's lemma

Lemma 10.2 (Jordan). For R > 0, ∫₀^π e^(−R sin θ) dθ < π/R. Consequently, if g(z) → 0 uniformly as |z| → ∞ in the closed upper half-plane and k > 0, then the integral of g(z) e^(ikz) over the upper semicircle of radius R tends to 0.

Proof. On [0, π/2], sin θ ≥ 2θ/π (concavity), so ∫₀^(π/2) e^(−R sin θ) dθ ≤ ∫₀^(π/2) e^(−2Rθ/π) dθ < π/(2R); the other half is symmetric. On the semicircle |e^(ikz)| = e^(−kR sin θ), so the integral is at most max|g| · R · π/(kR) → 0.

Example. For k > 0 and a > 0, ∫ cos(kx)/(x² + a²) dx over ℝ = (π/a) e^(−ka). Integrate e^(ikz)/(z² + a²); its residue at ia is e^(−ka)/(2ia), and 2πi times this is π e^(−ka)/a, which is real, so it is the integral of the cosine (the sine part vanishes by oddness).

Indented contours. When the integrand has a simple pole on the real axis, one avoids it with a small semicircle of radius ε. As ε → 0 the integral over a small semicircle around a simple pole c, traversed clockwise above c, tends to −πi Res(f, c): half a turn picks up half of 2πi. Applied to e^(iz)/z with a big semicircle (Jordan) and a small one at 0, this gives PV ∫ e^(ix)/x dx = πi, and taking imaginary parts,

        ∫₀^∞ (sin x)/x dx = π/2,

the Dirichlet integral, which is an improper Riemann integral but not a Lebesgue integral.

Type 4: branch cuts and keyhole contours

Let 0 < a < 1 and use the branch of z^(a−1) on ℂ \ [0, ∞) with 0 < arg z < 2π. Integrate z^(a−1)/(1 + z) around the keyhole contour: a large circle |z| = R, a small circle |z| = ε, and the two edges of the cut along [ε, R]. The circles contribute nothing in the limit (the integrand is O(R^(a−2)) on the large circle and O(ε^(a−1)) on the small one), while the lower edge carries the factor e^(2πi(a−1)) relative to the upper edge. Hence, with I the desired integral,

        (1 − e^(2πi(a−1))) I = 2πi Res at −1 = 2πi e^(iπ(a−1)),

        I = ∫₀^∞ x^(a−1)/(1 + x) dx = 2πi/(e^(−iπ(a−1)) − e^(iπ(a−1))) = π/sin(πa).

For a = 1/2 this gives ∫₀^∞ dx/(√x (1 + x)) = π, which can be checked with the substitution x = t². The identity is the reflection formula Γ(a)Γ(1 − a) = π/sin(πa) in disguise (Lesson 13).

Summing series

Let f be rational with deg(denominator) ≥ deg(numerator) + 2 and no poles at integers. Integrate π cot(πz) f(z) over the boundary of the square C_N with vertices (N + 1/2)(±1 ± i). One checks that |cot(πz)| is bounded on all these squares independently of N, so the integrals tend to 0, and the residue theorem gives

        ∑ over n ∈ ℤ of f(n) = −∑ Res(π cot(πz) f(z)) over the poles of f.

Example (the Basel problem). Use f(z) = 1/z², with the double pole at 0 now coinciding with a pole of cot. Since π cot(πz) = 1/z − π²z/3 − π⁴z³/45 − …, the residue of π cot(πz)/z² at 0 is −π²/3. The residues at n ≠ 0 are 1/n², so ∑ over n ≠ 0 of 1/n² − π²/3 = 0, that is ∑ 1/n² = π²/6 (n ≥ 1). The next coefficient gives ∑ 1/n⁴ = π⁴/90.

Example. For a > 0, ∑ over n ∈ ℤ of 1/(n² + a²) = (π/a) coth(πa). Using π/sin(πz) instead of π cot(πz) gives alternating sums, such as ∑ over n ∈ ℤ of (−1)ⁿ/(n² + a²) = π/(a sinh(πa)).

✏️ Your Turn

(a) Evaluate ∫₀^(2π) dθ/(2 + sin θ).
(b) Evaluate ∫ dx/(x² + 1)² over ℝ.
(c) Evaluate ∫ cos x/(x² + 4) dx over ℝ.

Answers: (a) The substitution θ ↦ θ + π/2 does not change the integral over a full period and turns sin θ into cos θ, so the value is 2π/√(4 − 1) = 2π/√3 ≈ 3.6276. (b) The residue at the double pole i is −i/4 (Lesson 9), so the integral is 2πi(−i/4) = π/2. (c) With k = 1 and a = 2, the value is (π/2) e^(−2) ≈ 0.2126.

─────────────────────────────────
Lesson 11: The Argument Principle and Rouché's Theorem
─────────────────────────────────

📌 Key idea of this section:

        f meromorphic near the closed disc D̄, with no zeros or poles on ∂D:
              (1/2πi) ∮ over ∂D of f′(z)/f(z) dz = Z − P   (counted with multiplicity).
        Rouché: if |g| < |f| on ∂D, then f and f + g have the same number of zeros in D.

The argument principle

Theorem 11.1. Let f be meromorphic on an open set containing a closed disc D̄, with no zeros or poles on the boundary circle C. Then (1/2πi) ∮_C f′/f dz = Z − P, where Z and P are the numbers of zeros and poles of f inside, counted with multiplicity.

Proof. If f has a zero of order m at a, write f = (z − a)ᵐ g with g(a) ≠ 0; then f′/f = m/(z − a) + g′/g, and g′/g is holomorphic near a, so Res(f′/f, a) = m. At a pole of order m the same computation with −m gives residue −m. Elsewhere f′/f is holomorphic. The residue theorem finishes the proof.

The name comes from the interpretation of the left side: since (log f)′ = f′/f locally, the integral measures the total change of arg f(z) as z goes once around C, divided by 2π. In other words Z − P = n(f ∘ C, 0), the number of times the image curve f(C) winds around the origin. The same statement holds, with the same proof, for any closed path with winding numbers 0 or 1, and for a holomorphic function h one obtains the useful generalisation (1/2πi) ∮ h f′/f dz = ∑ h(zeros) − ∑ h(poles).

Rouché's theorem

Theorem 11.2 (Rouché, 1862). Let f, g be holomorphic on an open set containing the closed disc D̄, and suppose |g(z)| < |f(z)| for every z on the boundary circle C. Then f and f + g have the same number of zeros inside C.

Proof. For 0 ≤ t ≤ 1, the function f_t = f + tg satisfies |f_t| ≥ |f| − |g| > 0 on C, so it has no zeros on C. The number of zeros N(t) = (1/2πi) ∮ f_t′/f_t dz is an integer by the argument principle and depends continuously on t, since the integrand is jointly continuous in (t, z). Hence N is constant, and N(0) = N(1).

A symmetric version (Estermann, Glicksberg) requires only |f + g| < |f| + |g| on C. The informal content is the dog-walking principle: if a dog's leash is always shorter than the walker's distance to a lamppost, dog and walker circle the lamppost equally often.

Examples. In each case the inequality on the circle is strict, so there are no zeros on it.

  1. z⁵ + 3z + 1 on |z| = 1: |3z| = 3 > 2 ≥ |z⁵ + 1|, so exactly one zero in |z| < 1. On |z| = 2: |z⁵| = 32 > 7 ≥ |3z + 1|, so all five zeros lie in |z| < 2, and four lie in the annulus 1 < |z| < 2.
  2. z⁴ − 6z + 3: on |z| = 1, |−6z| = 6 > 4 ≥ |z⁴ + 3|, giving one zero in the unit disc; on |z| = 2, |z⁴| = 16 > 15 ≥ |−6z + 3|, so three zeros lie in 1 < |z| < 2.
  3. e^z = 3z has exactly one solution in |z| < 1: on |z| = 1, |3z| = 3 > e ≥ |e^z|, and 3z has one zero.

Rouché also reproves the fundamental theorem of algebra: for p(z) = zⁿ + aₙ₋₁z^(n−1) + … + a₀, on a large circle |zⁿ| dominates the rest, so p has n zeros.

Local mapping, open mapping and Hurwitz

Theorem 11.3 (local mapping). If f is holomorphic near z₀ and f − f(z₀) has a zero of order m ≥ 1 at z₀, then there are ε, δ > 0 such that every w with 0 < |w − f(z₀)| < δ has exactly m preimages in D(z₀, ε), all simple.

Proof. Choose ε so that f − f(z₀) and f′ have no zeros in 0 < |z − z₀| ≤ ε (zeros are isolated), and let δ be the minimum of |f − f(z₀)| on |z − z₀| = ε. For |w − f(z₀)| < δ, Rouché applied to f − f(z₀) and the constant perturbation f(z₀) − w shows that f − w has m zeros in the disc; they are simple because f′ ≠ 0 there away from z₀.

Corollaries. A nonconstant holomorphic function on a domain is an open map (open mapping theorem), which gives another proof of the maximum modulus principle; a holomorphic function is locally injective near z₀ if and only if f′(z₀) ≠ 0, and an injective holomorphic function has nonvanishing derivative and a holomorphic inverse. The last statement is false for real functions: x³ is injective with derivative 0 at the origin.

Theorem 11.4 (Hurwitz). If fₙ → f uniformly on compact subsets of a domain U, each fₙ is nowhere zero, and f is not identically zero, then f is nowhere zero. If each fₙ is injective, then f is injective or constant.

Proof. If f(a) = 0, choose a small circle around a on which f does not vanish. By uniform convergence fₙ′/fₙ → f′/f uniformly on the circle, so the zero counts converge; but those of fₙ are 0 and that of f is at least 1. For the second statement apply the first to fₙ − fₙ(b) on U \ {b}.

✏️ Your Turn

(a) How many zeros does z⁷ − 5z³ + 1 have in |z| < 1?
(b) How many zeros does 2z⁵ − 6z² + z + 1 have in |z| < 1?
(c) Let |a| > e and n ≥ 1. How many solutions does e^z = a zⁿ have in |z| < 1?

Answers: (a) On |z| = 1, |−5z³| = 5 > 2 ≥ |z⁷ + 1|, so there are 3 zeros, as many as 5z³ has. (b) On |z| = 1, |−6z²| = 6 > 4 ≥ |2z⁵ + z + 1|, so there are 2 zeros. (c) On |z| = 1, |a zⁿ| = |a| > e ≥ |e^z|, so a zⁿ − e^z has n zeros in the disc, as many as a zⁿ.

─────────────────────────────────
Lesson 12: Conformal Maps, Möbius Transformations and the Riemann Mapping Theorem
─────────────────────────────────

📌 Key idea of this section:

        Aut(Ĉ) = {z ↦ (az + b)/(cz + d) : ad − bc ≠ 0} ≅ PSL(2, ℂ);
        Aut(𝔻) = {z ↦ e^(iθ) (z − a)/(1 − āz) : |a| < 1, θ ∈ ℝ};
        Riemann: every simply connected domain U ≠ ℂ, U ≠ ∅, is biholomorphic to 𝔻.

Conformality

A map is conformal at a point if it preserves oriented angles between curves through that point. By Lesson 3, a holomorphic f with f′(z₀) ≠ 0 acts on tangent vectors as multiplication by f′(z₀), a rotation-dilation, and is therefore conformal at z₀. Conversely a real C¹ map whose derivative preserves oriented angles has a derivative of the form (rotation) × (dilation) and so satisfies the Cauchy–Riemann equations. A conformal map or biholomorphism between domains is a holomorphic bijection; its inverse is then automatically holomorphic (Lesson 11). Two domains are conformally equivalent if such a map exists.

Standard examples, all checked by tracking boundaries: z ↦ z² maps the first quadrant onto the upper half-plane ℍ = {Im z > 0}; z ↦ e^z maps the strip 0 < Im z < π onto ℍ, with inverse the principal logarithm; and the Joukowski map J(z) = (z + 1/z)/2 maps the exterior |z| > 1 conformally onto ℂ \ [−1, 1], sending circles |z| = r to confocal ellipses with foci ±1. The Joukowski map, applied to suitably placed circles, produces the classical airfoil profiles of aerodynamics.

Möbius transformations

A Möbius (linear fractional) transformation is T(z) = (az + b)/(cz + d) with ad − bc ≠ 0, extended to Ĉ by T(−d/c) = ∞ and T(∞) = a/c (or ∞ if c = 0). Composition corresponds to multiplication of the coefficient matrices, and scalar multiples give the same map, so the group of Möbius transformations is PGL(2, ℂ) = PSL(2, ℂ). It is generated by translations z + b, rotation-dilations az, and the inversion 1/z.

Theorem 12.1. Möbius transformations map circles and lines in ℂ (that is, circles in Ĉ) onto circles and lines. They are exactly the biholomorphic self-maps of Ĉ.

Proof sketch. The generalised circles are the solution sets of A|z|² + Bz + B̄z̄ + C = 0 with A, C real and |B|² > AC; this family is visibly preserved by translations and rotation-dilations, and by 1/z, which swaps the roles of A and C. For the second statement, a biholomorphism of Ĉ composed with a suitable Möbius map fixes ∞, hence restricts to an injective entire function, which must be a polynomial of degree 1.

Given three distinct points z₂, z₃, z₄ of Ĉ, there is a unique Möbius T with T(z₂) = 1, T(z₃) = 0, T(z₄) = ∞, namely the cross-ratio

        (z, z₂, z₃, z₄) = ((z − z₃)(z₂ − z₄)) / ((z − z₄)(z₂ − z₃)).

Cross-ratios are invariant under Möbius maps, and four distinct points lie on one generalised circle if and only if their cross-ratio is real. Hence any three points can be sent to any other three by a unique Möbius transformation, and the inverse image of a circle under T is determined by three of its points.

Classification. Normalise ad − bc = 1 and let τ = (a + d)², which is well defined. A Möbius map other than the identity has one or two fixed points in Ĉ, and is conjugate to z + 1 (parabolic, τ = 4), to e^(iθ) z (elliptic, 0 ≤ τ < 4), to λz with λ > 0, λ ≠ 1 (hyperbolic, τ > 4), or to a general λz (loxodromic, τ ∉ [0, ∞)). For instance (2z + 1)/(z + 1) has determinant 1 and τ = 9, so it is hyperbolic, with fixed points (1 ± √5)/2.

The Cayley transform C(z) = (z − i)/(z + i) maps ℍ onto 𝔻, because a point is closer to i than to −i exactly when it lies in the upper half-plane. Through C, statements about the disc and the half-plane are interchangeable; for example Aut(ℍ) = PSL(2, ℝ).

The Schwarz lemma and the automorphisms of the disc

Theorem 12.2 (Schwarz lemma). Let f : 𝔻 → 𝔻 be holomorphic with f(0) = 0. Then |f(z)| ≤ |z| for all z ∈ 𝔻 and |f′(0)| ≤ 1. If equality holds in either inequality at a single point z ≠ 0, or if |f′(0)| = 1, then f(z) = e^(iθ) z for some real θ.

Proof. The function g(z) = f(z)/z, with g(0) = f′(0), is holomorphic on 𝔻 (removable singularity). On |z| = r < 1, |g| ≤ 1/r, so by the maximum principle |g| ≤ 1/r on |z| ≤ r; letting r → 1 gives |g| ≤ 1 on 𝔻. If |g| = 1 at an interior point, g is a unimodular constant.

For |a| < 1 the map φₐ(z) = (a − z)/(1 − āz) is a holomorphic involution of 𝔻 exchanging 0 and a; that it maps 𝔻 into 𝔻 follows from the identity |1 − āz|² − |a − z|² = (1 − |a|²)(1 − |z|²) > 0.

Theorem 12.3. Every automorphism of 𝔻 is of the form e^(iθ) φₐ.

Proof. Let F be an automorphism and a = F⁻¹(0). Then G = F ∘ φₐ is an automorphism fixing 0. The Schwarz lemma applied to G and to G⁻¹ gives |G′(0)| ≤ 1 and |1/G′(0)| ≤ 1, so |G′(0)| = 1 and G is a rotation. Hence F = G ∘ φₐ, since φₐ is its own inverse.

Applying the same idea to f composed with suitable automorphisms gives the Schwarz–Pick inequality |f′(z)| ≤ (1 − |f(z)|²)/(1 − |z|²) for every holomorphic f : 𝔻 → 𝔻: holomorphic self-maps of the disc are contractions for the hyperbolic (Poincaré) metric 2|dz|/(1 − |z|²), whose isometry group is Aut(𝔻). This is where complex analysis meets non-Euclidean geometry.

The Riemann mapping theorem

Theorem 12.4 (Riemann, 1851). Let U be a simply connected domain with U ≠ ℂ, and let z₀ ∈ U. There is a unique biholomorphism F : U → 𝔻 with F(z₀) = 0 and F′(z₀) > 0.

Uniqueness follows at once from Theorem 12.3. Existence was claimed by Riemann on the basis of the Dirichlet principle, whose justification was then lacking; the first rigorous proofs are due to Osgood (1900) and Koebe and Carathéodory (around 1912). The modern proof, due to Fejér and F. Riesz, is an extremal argument: among all injective holomorphic maps f : U → 𝔻 with f(z₀) = 0, which exist after a square-root trick that uses simple connectivity, one maximising |f′(z₀)| exists by Montel's theorem on normal families and Hurwitz's theorem, and a cleverly composed square root shows that a non-surjective map cannot be maximal. The hypothesis U ≠ ℂ is essential, because ℂ is not conformally equivalent to 𝔻 by Liouville's theorem, although the two are homeomorphic (for example via z ↦ z/(1 + |z|)). Up to biholomorphism there are therefore exactly three simply connected Riemann surfaces, Ĉ, ℂ and 𝔻, which is the content of the uniformisation theorem of Koebe and Poincaré (1907). For a domain bounded by a Jordan curve, Carathéodory's theorem says that the Riemann map extends to a homeomorphism of the closures.

✏️ Your Turn

(a) Find a Möbius transformation sending 0, 1, ∞ to −1, 0, 1.
(b) Find all fixed points of T(z) = z/(z + 1) and classify T.
(c) Let f : 𝔻 → 𝔻 be holomorphic with f(0) = 0. What is the largest possible value of |f(1/2)|, and which maps attain it?

Answers: (a) T(z) = (z − 1)/(z + 1): indeed T(0) = −1, T(1) = 0, T(∞) = 1. (b) z = z/(z + 1) gives z² = 0, so 0 is the only fixed point; the matrix has determinant 1 and trace 2, so τ = 4 and T is parabolic. (c) By the Schwarz lemma |f(1/2)| ≤ 1/2, with equality exactly for the rotations f(z) = e^(iθ) z.

─────────────────────────────────
Lesson 13: Analytic Continuation, the Gamma Function and the Riemann Zeta Function
─────────────────────────────────

📌 Key idea of this section:

        A holomorphic function on a domain is determined by its restriction to any open subset.
        Γ(s) = ∫₀^∞ e^(−t) t^(s−1) dt continues to ℂ \ {0, −1, −2, …}, with Γ(s)Γ(1 − s) = π/sin(πs).
        ζ(s) = ∑ n^(−s) (Re s > 1) continues to ℂ \ {1}, with a simple pole of residue 1 at s = 1,
        and ξ(s) = π^(−s/2) Γ(s/2) ζ(s) satisfies ξ(s) = ξ(1 − s).

Analytic continuation

If f is holomorphic on a domain U and g is holomorphic on a domain V ⊇ U with g = f on U, then g is an analytic continuation of f, and by the identity theorem it is unique. More generally, one continues a power series along a path by a chain of overlapping discs, each series being the re-expansion of the previous one. The result may depend on the path: continuing Log z once around the origin returns Log z + 2πi, and continuing √z returns −√z. The monodromy theorem asserts that if a germ can be continued along every path in a simply connected domain, the continuations along homotopic paths agree, so the result is a single-valued holomorphic function there. Riemann's resolution of multivaluedness was to build a new surface, the Riemann surface of the function, on which the continuation becomes single-valued.

Continuation can also be impossible. The series f(z) = ∑ z^(2ⁿ) (n ≥ 0) has radius 1, and for every 2ᵏ-th root of unity ζ, all but finitely many terms satisfy (rζ)^(2ⁿ) = r^(2ⁿ), so |f(rζ)| → ∞ as r → 1⁻. Such roots of unity are dense in the circle, so no point of |z| = 1 has a neighbourhood to which f extends: the unit circle is a natural boundary. Fabry's gap theorem generalises this to any series whose exponents nₖ satisfy nₖ/k → ∞.

The Gamma function

For Re s > 0 the integral Γ(s) = ∫₀^∞ e^(−t) t^(s−1) dt converges absolutely and locally uniformly, so Γ is holomorphic there (differentiate under the integral sign, or apply Morera with Fubini). Integration by parts gives Γ(s + 1) = sΓ(s), and Γ(1) = 1, so Γ(n + 1) = n!. The functional equation provides the continuation: Γ(s) = Γ(s + n + 1)/(s(s + 1)…(s + n)) defines Γ on Re s > −n − 1 except at 0, −1, …, −n, consistently for all n. Each nonpositive integer −n is a simple pole with

        Res(Γ, −n) = (−1)ⁿ/n!.

The Beta integral B(a, b) = ∫₀¹ t^(a−1)(1 − t)^(b−1) dt = Γ(a)Γ(b)/Γ(a + b) and the substitution t = x/(1 + x) turn the keyhole integral of Lesson 10 into Γ(a)Γ(1 − a) = π/sin(πa) for 0 < a < 1, and the identity theorem extends it to all non-integer a ∈ ℂ. At a = 1/2 it gives Γ(1/2)² = π, so Γ(1/2) = √π and Γ(5/2) = (3/2)(1/2)√π = 3√π/4. Since sin(πs)/π has no poles, the reflection formula shows that Γ has no zeros and 1/Γ is entire, with the Weierstrass product 1/Γ(s) = s e^(γs) ∏ (1 + s/n) e^(−s/n), where γ ≈ 0.5772 is the Euler–Mascheroni constant.

The Riemann zeta function

For σ = Re s > 1, ζ(s) = ∑ n^(−s) converges absolutely and locally uniformly, because |n^(−s)| = n^(−σ). Unique prime factorisation gives Euler's product (1737)

        ζ(s) = ∏ over primes p of (1 − p^(−s))⁻¹   (Re s > 1),

an absolutely convergent product of nonzero factors, so ζ(s) ≠ 0 for Re s > 1. The divergence of ∑ 1/p, and hence the infinitude of primes, follows from letting s → 1⁺.

Theorem 13.1. The function ζ(s) − 1/(s − 1) extends to a holomorphic function on Re s > 0. Hence ζ is meromorphic there with a single simple pole at s = 1, of residue 1.

Proof. For Re s > 1, 1/(s − 1) = ∫₁^∞ x^(−s) dx = ∑ ∫ from n to n + 1 of x^(−s) dx, so

        ζ(s) − 1/(s − 1) = ∑ over n ≥ 1 of φₙ(s),   φₙ(s) = ∫ from n to n + 1 of (n^(−s) − x^(−s)) dx.

Each φₙ is entire. For n ≤ x ≤ n + 1, n^(−s) − x^(−s) = s ∫ from n to x of u^(−s−1) du, so |φₙ(s)| ≤ |s|/n^(σ+1). The series therefore converges uniformly on compact subsets of Re s > 0, and by the Weierstrass corollary of Lesson 7 its sum is holomorphic there.

Evaluating at s = 1 shows that ζ(s) = 1/(s − 1) + γ + O(s − 1), since ∑ φₙ(1) = lim (1 + 1/2 + … + 1/N − ln(N + 1)) = γ. Iterating the same idea with more terms of the Euler–Maclaurin formula continues ζ to Re s > −k for every k, hence to all of ℂ \ {1}. A cleaner route is Riemann's.

Theorem 13.2 (Riemann, 1859). The function ξ(s) = π^(−s/2) Γ(s/2) ζ(s) extends meromorphically to ℂ with simple poles only at s = 0 and s = 1, and ξ(s) = ξ(1 − s).

Sketch of proof. Substituting t ↦ πn²t in the Gamma integral gives π^(−s/2) Γ(s/2) n^(−s) = ∫₀^∞ e^(−πn²t) t^(s/2 − 1) dt, and summing over n, ξ(s) = ∫₀^∞ ω(t) t^(s/2 − 1) dt with ω(t) = ∑ e^(−πn²t) over n ≥ 1. The theta function θ(t) = 1 + 2ω(t) satisfies θ(1/t) = √t θ(t), a consequence of the Poisson summation formula and the self-duality of the Gaussian proved in Lesson 6. Splitting the integral at t = 1 and using this identity on (0, 1) gives

        ξ(s) = −1/s − 1/(1 − s) + ∫₁^∞ ω(t) (t^(s/2) + t^((1−s)/2)) t⁻¹ dt,

where the integral is entire because ω decays like e^(−πt). The right side is visibly invariant under s ↦ 1 − s.

Consequences. Because Γ(s/2) has poles at s = 0, −2, −4, …, and ξ is finite at s = −2, −4, …, the zeta function has the trivial zeros ζ(−2) = ζ(−4) = … = 0. The pole of ξ at 0 is cancelled by the pole of Γ(s/2), giving ζ(0) = −1/2. In general ζ(1 − 2k) = −B₂ₖ/(2k), with Bernoulli numbers B₂ = 1/6, B₄ = −1/30, so ζ(−1) = −1/12 and ζ(−3) = 1/120, and ζ(2k) = (−1)^(k+1) B₂ₖ (2π)^(2k)/(2(2k)!), which reproduces ζ(2) = π²/6 and ζ(4) = π⁴/90 from Lesson 10. These values are those of the continued function; the series ∑ n diverges, and the equation ζ(−1) = −1/12 is not a statement about it.

The zeros and the primes

All other zeros, the nontrivial ones, lie in the critical strip 0 ≤ Re s ≤ 1, symmetric about the real axis and about the critical line Re s = 1/2; the first is near 1/2 + 14.134725i. In 1896 Hadamard and de la Vallée Poussin proved, independently, that ζ(1 + it) ≠ 0 for real t, and deduced the prime number theorem π(x) ~ x/ln x. A slick proof of the non-vanishing, due to Mertens, starts from the inequality 3 + 4 cos θ + cos 2θ = 2(1 + cos θ)² ≥ 0. Applied to the logarithm of the Euler product it gives |ζ(σ)³ ζ(σ + it)⁴ ζ(σ + 2it)| ≥ 1 for σ > 1; a zero at 1 + it would make the left side behave like (σ − 1)^(−3) (σ − 1)⁴ → 0 as σ → 1⁺, a contradiction. Riemann conjectured in 1859 that every nontrivial zero lies on the critical line. The Riemann hypothesis is equivalent to the error estimate π(x) = Li(x) + O(√x ln x), and it remains open: it is one of the Clay Millennium Prize Problems. Many billions of zeros have been computed, and all lie on the line.

✏️ Your Turn

(a) Compute Γ(7/2).
(b) Find the residue of Γ at s = −3.
(c) Using the alternating zeta function η(s) = ∑ (−1)^(n−1) n^(−s) = (1 − 2^(1−s)) ζ(s), which converges for Re s > 0, compute lim of (1 − 2^(1−s)) ζ(s) as s → 1, and check it against η(1).

Answers: (a) Γ(7/2) = (5/2)(3/2)(1/2)√π = 15√π/8. (b) (−1)³/3! = −1/6. (c) Near s = 1, 1 − 2^(1−s) = (s − 1) ln 2 + O((s − 1)²) and ζ(s) = 1/(s − 1) + O(1), so the product tends to ln 2, which agrees with η(1) = 1 − 1/2 + 1/3 − … = ln 2.

─────────────────────────────────
Lesson 14: Synthesis and Common Pitfalls
─────────────────────────────────

📌 Key idea of this section:

        Holomorphic on an open set  ⇔  analytic  ⇔  continuous with vanishing triangle integrals.
        Integrals of holomorphic functions see only topology and residues.

The equivalences

For a function f on an open set U, the following are equivalent, and the course has proved each implication: f is complex differentiable at every point of U; f is real C¹ and satisfies the Cauchy–Riemann equations; f is continuous and ∮ over ∂T of f dz = 0 for every triangle T in U (Goursat and Morera); f is locally the sum of a convergent power series (Cauchy's integral formula and term-by-term differentiation); f is continuous and satisfies the Cauchy integral formula on every disc in U. Each of these descriptions is useful in a different situation: the first to verify holomorphy of explicit formulas, the third to verify it for limits and integrals depending on a parameter, the fourth for local computations, and the fifth for estimates.

Pitfalls that cost marks

The principal logarithm and principal powers do not obey the real rules: Log(zw) = Log z + Log w and (zw)^a = z^a w^a fail in general, and every manipulation of a multivalued function must specify a branch and a domain on which it is continuous. In contour integration, the orientation matters, a circle being counterclockwise by convention, and a pole lying exactly on the contour makes the integral undefined until the contour is indented, at which point only half the residue is picked up. When using Theorem 10.1 or Jordan's lemma, check the decay hypotheses: the integral of x/(x² + 1) over ℝ does not converge, although its principal value is 0. When using Rouché's theorem the inequality must be strict at every point of the curve, and the dominating function must have a known number of zeros inside. When computing residues at poles of order m ≥ 2, the shortcut g(a)/h′(a) does not apply. Finally, the values ζ(−1) = −1/12 and ζ(0) = −1/2 belong to the analytically continued function and say nothing about the divergent series 1 + 2 + 3 + … or 1 + 1 + 1 + … in the ordinary sense of summation.

Where to go next

The natural continuations are the theory of entire functions (Weierstrass and Hadamard factorisation, order and genus, Nevanlinna theory, which quantifies Picard's theorem), Riemann surfaces and algebraic curves (where the Riemann–Roch theorem governs meromorphic functions on compact surfaces), elliptic functions and modular forms (doubly periodic meromorphic functions and the action of PSL(2, ℤ) on ℍ), analytic number theory (Dirichlet L-functions and the explicit formulas linking zeros to primes), complex dynamics (Julia and Mandelbrot sets, whose basic tools are Montel's theorem and the Schwarz lemma), and several complex variables, where Hartogs' phenomenon shows that holomorphic functions of two or more variables can never have isolated singularities.

✏️ Your Turn

(a) Is it true that Log(z²) = 2 Log z for all z ≠ 0? Give the exact set of z where it holds.
(b) Evaluate the principal value of ∫ x/(x² + 1) dx over ℝ, and explain why the ordinary improper integral diverges.

Answers: (a) No. Log(z²) = 2 Log z holds exactly when 2 Arg z ∈ (−π, π], that is when −π/2 < Arg z ≤ π/2: the open right half-plane together with the positive imaginary axis; for example at z = −1 the left side is 0 and the right side is 2πi. (b) The principal value lim of ∫ from −R to R is 0 by oddness, but ∫ from 0 to R of x/(x² + 1) dx = (1/2) ln(1 + R²) → ∞, so the integral over [0, ∞) diverges and the improper integral over ℝ does not exist.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

These sixty problems are graded in three groups. The Core problems test the computations every course in complex analysis expects. The Advanced problems require combining several results, usually a contour, a residue computation and an estimate. The Challenge problems are proofs or multi-step evaluations of the kind found on qualifying examinations. Complete worked answers follow in the Answer Key.

Core (Problems 1–20)

  1. Write (2 + 3i)/(1 − i) in the form a + bi.
  2. Compute |(3 + 4i)⁵ (1 − i)²|.
  3. Write −√3 + i in polar form r e^(iθ) with θ = Arg z.
  4. Compute (−√3 + i)⁶.
  5. Find all cube roots of i in the form a + bi.
  6. Find Log(−ei).
  7. Find the principal value of (1 + i)^i in the form a + bi.
  8. Show that f(z) = Re z is nowhere complex differentiable.
  9. Verify the Cauchy–Riemann equations for f(z) = e^z.
  10. Find a harmonic conjugate of u = x³ − 3xy².
  11. Find the radius of convergence of ∑ (n!)² zⁿ/(2n)!.
  12. Find the radius of convergence of ∑ 2ⁿ z^(3n).
  13. Compute ∫ z² dz along any path from 0 to 2i.
  14. Compute ∮ over |z| = 1 of z̄² dz.
  15. Compute ∮ over |z| = 2 of dz/(z − 1).
  16. Compute ∮ over |z| = 1 of cos z/z³ dz.
  17. Find the Laurent series of z² e^(1/z) about 0 and its residue there.
  18. Classify the singularity of sin z/z³ at 0.
  19. Find the residue of 1/(z³ − z) at z = 1.
  20. Evaluate ∫ dx/(x² + 2x + 2) over ℝ.

Advanced (Problems 21–45)

  21. Prove that |z − a| < |1 − āz| whenever |z| < 1 and |a| < 1.
  22. Find all z ∈ ℂ with e^z = −2.
  23. Solve sin z = 2.
  24. For which real a is u = x³ + a xy² harmonic? For that a, find a holomorphic f with Re f = u.
  25. Let f be holomorphic on a domain U with |f| constant. Prove that f is constant.
  26. Prove that ∑ aₙ zⁿ and ∑ n aₙ z^(n−1) have the same radius of convergence.
  27. Evaluate ∫₀^(2π) e^(cos θ) cos(sin θ) dθ.
  28. Compute ∮ over |z| = 3 of e^z/(z²(z − 1)) dz.
  29. Evaluate ∫₀^(2π) dθ/(2 + cos θ).
  30. Evaluate ∫₀^(2π) cos 3θ/(5 − 4 cos θ) dθ.
  31. Evaluate ∫ x²/(x⁴ + 1) dx over ℝ.
  32. Evaluate ∫₀^∞ dx/(x⁶ + 1).
  33. Evaluate ∫ x sin x/(x² + 1) dx over ℝ.
  34. Evaluate ∫₀^∞ ln x/(1 + x²)² dx.
  35. Evaluate ∫₀^∞ x^(−1/3)/(1 + x) dx.
  36. Evaluate ∫₀^∞ sin²x/x² dx.
  37. Use π cot(πz) to prove that ∑ 1/n⁴ = π⁴/90 (n ≥ 1).
  38. Evaluate ∑ over n ∈ ℤ of (−1)ⁿ/(n² + 1).
  39. How many zeros does z⁵ + 15z + 1 have in |z| < 1, and how many in 1 < |z| < 2?
  40. Let |a| > e. Prove that e^z = a zⁿ has exactly n solutions in the unit disc.
  41. How many zeros does 3z¹⁰⁰ − e^z have in the unit disc?
  42. Find the Möbius transformation T with T(1) = 0, T(i) = 1, T(−1) = ∞, and determine T(𝔻).
  43. Find the fixed points of T(z) = (2z + 1)/(z + 1) and of S(z) = 1/z, and classify both maps.
  44. Find the automorphism f of 𝔻 with f(1/2) = 0 and f′(1/2) > 0, and compute f′(1/2).
  45. Let f : 𝔻 → 𝔻 be holomorphic with f(0) = 1/2. Find the largest possible value of |f′(0)| and a map attaining it.

Challenge (Problems 46–60)

  46. Let p(z) = zⁿ + aₙ₋₁z^(n−1) + … + a₀ with M = max |aₖ| > 0. Prove that all zeros of p lie in |z| < 1 + M.
  47. Prove that an entire function f with Re f(z) ≤ C for all z is constant.
  48. Let f be entire with |f(z)| ≤ |z|^(3/2) + 1 for all z. Prove that f(z) = az + b with |b| ≤ 1, and give a nonconstant example.
  49. Prove that ∫₀^∞ cos(x²) dx = ∫₀^∞ sin(x²) dx = √(2π)/4.
  50. For n ≥ 2, prove that ∫₀^∞ dx/(1 + xⁿ) = (π/n)/sin(π/n).
  51. For a > 0, prove that ∑ over n ≥ 1 of 1/(n² + a²) = (πa coth(πa) − 1)/(2a²).
  52. Prove Γ(s)Γ(1 − s) = π/sin(πs) for 0 < s < 1.
  53. Prove that f(z) = ∑ z^(n!) has the unit circle as a natural boundary.
  54. Let fₙ be injective holomorphic functions on a domain U converging uniformly on compact sets to f. Prove that f is injective or constant.
  55. Prove that ζ(1 + it) ≠ 0 for every real t ≠ 0.
  56. Prove that ζ(s) = 1/(s − 1) + γ + O(s − 1) as s → 1, where γ is the Euler–Mascheroni constant.
  57. Prove the Schwarz–Pick inequality |f′(z)| ≤ (1 − |f(z)|²)/(1 − |z|²) for holomorphic f : 𝔻 → 𝔻.
  58. Show that ℂ and 𝔻 are diffeomorphic as smooth manifolds but not biholomorphic.
  59. Show that J(z) = (z + 1/z)/2 maps the circle |z| = r > 1 onto an ellipse, and find its semi-axes and foci.
  60. Let f be holomorphic and injective on a neighbourhood of the closed disc D̄ with boundary C, and let w ∈ f(D) \ f(C). Prove that f⁻¹(w) = (1/2πi) ∮_C z f′(z)/(f(z) − w) dz.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. Multiply numerator and denominator by 1 + i: (2 + 3i)(1 + i)/2 = (2 + 5i + 3i²)/2 = (−1 + 5i)/2 = −1/2 + (5/2)i.
  2. The modulus is multiplicative: |3 + 4i|⁵ |1 − i|² = 5⁵ · 2 = 6250.
  3. |−√3 + i| = 2, and the point lies in the second quadrant with tan θ = −1/√3, so θ = 5π/6: −√3 + i = 2e^(5πi/6).
  4. (2e^(5πi/6))⁶ = 64 e^(5πi) = 64 e^(iπ) = −64.
  5. i = e^(iπ/2), so the roots are e^(i(π/2 + 2πk)/3) for k = 0, 1, 2: e^(iπ/6) = √3/2 + i/2, e^(5πi/6) = −√3/2 + i/2, and e^(3πi/2) = −i.
  6. |−ei| = e and Arg(−ei) = −π/2, so Log(−ei) = 1 − iπ/2.
  7. Log(1 + i) = (1/2) ln 2 + iπ/4, so (1 + i)^i = e^(i Log(1 + i)) = e^(−π/4) e^((i/2) ln 2) = e^(−π/4)(cos((ln 2)/2) + i sin((ln 2)/2)) ≈ 0.4288 + 0.1549i.
  8. u = x and v = 0, so u_x = 1 while v_y = 0; the first Cauchy–Riemann equation fails at every point. Directly, the difference quotient Re h/h is 1 for real h and 0 for imaginary h.
  9. u = e^x cos y and v = e^x sin y. Then u_x = e^x cos y = v_y and u_y = −e^x sin y = −v_x, and all partials are continuous, so e^z is entire with derivative u_x + i v_x = e^z.
  10. v_y = u_x = 3x² − 3y² gives v = 3x²y − y³ + φ(x); then v_x = 6xy + φ′(x) = −u_y = 6xy, so φ is constant. Thus v = 3x²y − y³ + C, and u + iv = z³ + iC.
  11. aₙ₊₁/aₙ = (n + 1)²/((2n + 2)(2n + 1)) = (n + 1)/(2(2n + 1)) → 1/4, so R = 4.
  12. As a series in w = z³ the radius is 1/2, so the series converges when |z|³ < 1/2 and diverges when |z|³ > 1/2: R = 2^(−1/3).
  13. z² has the primitive z³/3, so the integral is (2i)³/3 = −8i/3, independently of the path.
  14. On |z| = 1, z̄ = 1/z, so the integral is ∮ z⁻² dz = 0. (The integrand z̄² is not holomorphic, but on this circle it agrees with a function that has a primitive.)
  15. The point 1 lies inside, and n = 1 in the fundamental computation (after translation) gives 2πi.
  16. By the derivative formula with n = 2, the integral is (2πi/2!) (cos)″(0) = πi · (−1) = −πi.
  17. z² e^(1/z) = z² ∑ z^(−n)/n! = z² + z + 1/2 + 1/(6z) + 1/(24z²) + …; the residue is the coefficient of 1/z, namely 1/3! = 1/6.
  18. sin z/z³ = (z − z³/6 + …)/z³ = 1/z² − 1/6 + z²/120 − …, a pole of order 2 (with residue 0).
  19. z³ − z = z(z − 1)(z + 1) has a simple zero at 1 with derivative 3z² − 1 = 2 there, so the residue is 1/2.
  20. x² + 2x + 2 = (x + 1)² + 1, so the integral equals ∫ dt/(t² + 1) = π. By residues: the upper pole is −1 + i, with residue 1/(2i), giving 2πi/(2i) = π.

Advanced

  21. |1 − āz|² − |z − a|² = 1 − 2Re(āz) + |a|²|z|² − |z|² + 2Re(āz) − |a|² = (1 − |a|²)(1 − |z|²) > 0.
  22. −2 = 2e^(iπ), so z = ln 2 + i(π + 2πk) for k ∈ ℤ.
  23. With w = e^(iz), sin z = 2 becomes w² − 4iw − 1 = 0, so w = i(2 ± √3). Then iz = ln(2 ± √3) + i(π/2 + 2πk), so z = π/2 + 2πk − i ln(2 ± √3). Since ln(2 − √3) = −ln(2 + √3), the solutions are z = π/2 + 2πk ± i ln(2 + √3), k ∈ ℤ.
  24. Δu = 6x + 2ax, which vanishes identically exactly when a = −3. Then u = Re(z³) (Problem 10), so f(z) = z³ + iC.
  25. If |f|² = u² + v² = c, differentiating gives u u_x + v v_x = 0 and u u_y + v v_y = 0; with the Cauchy–Riemann equations these become u u_x − v u_y = 0 and v u_x + u u_y = 0, a linear system for (u_x, u_y) with determinant u² + v² = c. If c = 0 then f ≡ 0. Otherwise u_x = u_y = 0, hence v_x = v_y = 0 too, so f′ = 0 on the domain U and f is constant.
  26. limsup |n aₙ|^(1/n) = lim n^(1/n) · limsup |aₙ|^(1/n) = limsup |aₙ|^(1/n), since n^(1/n) = e^((ln n)/n) → 1. The two series have the same Cauchy–Hadamard radius (and multiplying by z does not change the radius).
  27. With z = e^(iθ), ∫₀^(2π) e^(e^(iθ)) dθ = ∮ e^z/(iz) dz = 2πi · (1/i) = 2π. The integrand e^(cos θ)(cos(sin θ) + i sin(sin θ)) has real part e^(cos θ) cos(sin θ), so the answer is 2π (and the imaginary part integrates to 0).
  28. Res at 1: e/1² = e. Res at the double pole 0: the derivative of e^z/(z − 1) at 0, which is (e^z(z − 1) − e^z)/(z − 1)² at 0 = (−1 − 1)/1 = −2. The integral is 2πi(e − 2).
  29. With a = 2, b = 1 in the formula of Lesson 10: 2π/√(4 − 1) = 2π/√3.
  30. Compute ∮ z³/(i z (5 − 2(z + 1/z))) dz = ∮ z³/(i(5z − 2z² − 2)) dz over |z| = 1, whose real part is the integral. Since 5z − 2z² − 2 = −(2z − 1)(z − 2), the only pole inside is 1/2; the integrand is −z³/(i(2z − 1)(z − 2)), with residue −(1/8)/(i · 2 · (−3/2)) = 1/(24i) there. So the integral is 2πi/(24i) = π/12.
  31. The residue of z²/(z⁴ + 1) at a pole a is a²/(4a³) = 1/(4a). For a = e^(iπ/4), e^(3iπ/4), the sum is (e^(−iπ/4) + e^(−3iπ/4))/4 = −i√2/4, so the integral is 2πi(−i√2/4) = π/√2.
  32. By Problem 50 with n = 6, the value is (π/6)/sin(π/6) = π/3. Directly: the poles of 1/(z⁶ + 1) in the upper half-plane are e^(iπ/6), i, e^(5πi/6), the residue at a is −a/6, their sum is −2i/6, and half of 2πi(−2i/6) = 2π/3 is π/3.
  33. Take the imaginary part of ∫ x e^(ix)/(x² + 1) dx. Here the degree difference is only 1, so Jordan's lemma is needed. The residue of z e^(iz)/(z² + 1) at i is i e^(−1)/(2i) = 1/(2e), so the integral of x e^(ix)/(x² + 1) is πi/e, and the answer is π/e.
  34. Differentiate under the integral sign in G(a) = ∫₀^∞ x^a/(1 + x²)² dx = (π/4)(1 − a)/cos(πa/2), valid for −1 < a < 3. To derive it, substitute x² = t and use ∫₀^∞ t^(p−1)/(1 + t)^(p+q) dt = B(p, q): G(a) = (1/2)B((a + 1)/2, (3 − a)/2) = (1/2)Γ((a + 1)/2)Γ((3 − a)/2) = (1/2)((1 − a)/2) π/sin(π(a + 1)/2). Then G′(0) = (π/4)(−1) + 0 = −π/4, since the derivative of 1/cos(πa/2) vanishes at 0. Since ∂/∂a of x^a is x^a ln x, the desired integral is G′(0) = −π/4 ≈ −0.7854.
  35. This is the integral of Lesson 10 with a − 1 = −1/3, a = 2/3: π/sin(2π/3) = 2π/√3.
  36. Integrate by parts: ∫₀^∞ sin²x/x² dx = [−sin²x/x]₀^∞ + ∫₀^∞ (2 sin x cos x)/x dx = ∫₀^∞ sin 2x/x dx = ∫₀^∞ sin t/t dt = π/2.
  37. The residue of π cot(πz)/z⁴ at n ≠ 0 is 1/n⁴. At 0 it is the coefficient of z³ in π cot(πz) = 1/z − π²z/3 − π⁴z³/45 − …, namely −π⁴/45. The integrals over the squares C_N tend to 0, so 2∑ 1/n⁴ − π⁴/45 = 0 and ∑ 1/n⁴ = π⁴/90.
  38. Use π/sin(πz), whose residue at n is (−1)ⁿ. The function π/(sin(πz)(z² + 1)) has residues at ±i equal to π/(sin(±πi) · (±2i)) = π/(i sinh π · 2i) = −π/(2 sinh π) each. Hence ∑ (−1)ⁿ/(n² + 1) = π/sinh π ≈ 0.2720.
  39. On |z| = 1, |15z| = 15 > 2 ≥ |z⁵ + 1|: one zero in |z| < 1. On |z| = 2, |z⁵| = 32 > 31 ≥ |15z + 1|: five zeros in |z| < 2. So four zeros lie in 1 < |z| < 2 (none lies on |z| = 1, by the strict inequality).
  40. On |z| = 1, |e^z| = e^(Re z) ≤ e < |a| = |a zⁿ|. By Rouché, a zⁿ − e^z has as many zeros in 𝔻 as a zⁿ, namely n.
  41. On |z| = 1, |3z¹⁰⁰| = 3 > e ≥ |e^z|, so there are 100 zeros.
  42. T(z) = (z, i, 1, −1) = ((z − 1)(i + 1))/((z + 1)(i − 1)). Since (i + 1)/(i − 1) = −i, T(z) = −i(z − 1)/(z + 1). The unit circle passes through 1, i, −1, so it maps onto the real line; T(0) = i, so 𝔻 maps onto the upper half-plane.
  43. For T: z² + z = 2z + 1 gives z² − z − 1 = 0, so z = (1 ± √5)/2; det = 1, trace 3, τ = 9 > 4, hyperbolic. For S(z) = 1/z: z² = 1, fixed points ±1; the matrix with rows (0, 1), (1, 0) has determinant −1; dividing by i normalises it to determinant 1 with trace 0, so τ = 0 and S is elliptic (a rotation of order 2 of the sphere).
  44. f(z) = (z − 1/2)/(1 − z/2) = (2z − 1)/(2 − z). Then f′(z) = (2(2 − z) + (2z − 1))/(2 − z)² = 3/(2 − z)², so f′(1/2) = 3/(9/4) = 4/3 > 0. Uniqueness follows from Theorem 12.3.
  45. Let φ(w) = (w − 1/2)/(1 − w/2), an automorphism of 𝔻 with φ(1/2) = 0. Then g = φ ∘ f maps 0 to 0, so |g′(0)| ≤ 1 by Schwarz. Since g′(0) = φ′(1/2) f′(0) = (4/3) f′(0), we get |f′(0)| ≤ 3/4. Equality holds for f(z) = (z + 1/2)/(1 + z/2), which has f(0) = 1/2 and f′(0) = (1 − 1/4)/1 = 3/4.

Challenge

  46. Let R = 1 + M. On |z| = R, |p(z) − zⁿ| ≤ M(1 + R + … + R^(n−1)) = M(Rⁿ − 1)/(R − 1) = Rⁿ − 1 < Rⁿ = |zⁿ|. So p has no zero on |z| = R and, by Rouché, exactly n zeros in |z| < R. The same estimate shows |p(z)| ≥ 1 for |z| ≥ R, so there are none outside either.
  47. g = e^f is entire with |g| = e^(Re f) ≤ e^C, so g is constant by Liouville. Then 0 = g′ = f′e^f, and e^f never vanishes, so f′ ≡ 0 and f is constant. (Alternatively apply Liouville to 1/(f − C − 1).)
  48. Cauchy's estimate on |z| = R gives |f⁽ⁿ⁾(0)| ≤ n!(R^(3/2) + 1)/Rⁿ, which tends to 0 as R → ∞ when n ≥ 2. So all Taylor coefficients of order at least 2 vanish and f(z) = az + b. Putting z = 0 gives |b| = |f(0)| ≤ 1. A nonconstant example is f(z) = z/2: if |z| ≤ 1 then |z|/2 < 1, and if |z| > 1 then |z|/2 < |z|^(3/2).
  49. Integrate e^(iz²) over the sector with vertices 0, R, R e^(iπ/4). The function is entire, so the integral is 0. On the arc z = R e^(iθ), |e^(iz²)| = e^(−R² sin 2θ), and by the estimate sin 2θ ≥ 4θ/π on [0, π/4] the arc contributes at most R ∫₀^(π/4) e^(−4R²θ/π) dθ < π/(4R) → 0. On the ray z = t e^(iπ/4), iz² = −t², so the ray contributes −e^(iπ/4) ∫₀^R e^(−t²) dt → −e^(iπ/4) √π/2. Hence ∫₀^∞ e^(ix²) dx = e^(iπ/4)√π/2 = (1 + i)√π/(2√2). Equating real and imaginary parts, both integrals equal √π/(2√2) = √(2π)/4 ≈ 0.6267.
  50. Integrate 1/(1 + zⁿ) over the sector 0 ≤ arg z ≤ 2π/n, |z| ≤ R. The arc contributes O(R^(1−n)) → 0. Along the ray z = t e^(2πi/n), zⁿ = tⁿ, so the ray contributes −e^(2πi/n) I, with I the desired integral. The only pole inside is a = e^(iπ/n), with residue 1/(n a^(n−1)) = −a/n (since aⁿ = −1). Hence (1 − e^(2πi/n)) I = −2πi a/n, and since 1 − a² = −a(a − a⁻¹) = −2i a sin(π/n), I = (−2πi a/n)/(−2i a sin(π/n)) = (π/n)/sin(π/n).
  51. From Lesson 10, ∑ over n ∈ ℤ of 1/(n² + a²) = (π/a) coth(πa). The sum is symmetric in n, so ∑ over n ≥ 1 = (1/2)((π/a) coth(πa) − 1/a²) = (πa coth(πa) − 1)/(2a²). Letting a → 0 and using coth x = 1/x + x/3 + O(x³) recovers π²/6.
  52. By Fubini and the substitution u = t/(1 + t) in the Beta integral, Γ(s)Γ(1 − s) = B(s, 1 − s) Γ(1) = ∫₀¹ u^(s−1)(1 − u)^(−s) du = ∫₀^∞ t^(s−1)/(1 + t) dt, which equals π/sin(πs) by the keyhole computation of Lesson 10 (with a = s).
  53. The radius is 1. Let ζ = e^(2πip/q). For n ≥ q, n! is a multiple of q, so ζ^(n!) = 1 and f(rζ) = (polynomial in r) + ∑ over n ≥ q of r^(n!), which tends to +∞ as r → 1⁻. So f is unbounded near every point e^(2πip/q), and these points are dense in the circle. If f extended holomorphically to a disc around a point of the circle, f would be bounded near the points e^(2πip/q) in that disc, a contradiction.
  54. Suppose f is not constant and f(a) = f(b) = w with a ≠ b. The functions fₙ − fₙ(b) are nowhere zero on U \ {b} (injectivity) and converge locally uniformly on U \ {b} to f − f(b), which is not identically zero (by the identity theorem, since f is nonconstant on the domain U). By Hurwitz, f − f(b) has no zero in U \ {b}, contradicting f(a) = f(b).
  55. For σ > 1, log ζ(s) = ∑ over p, k of p^(−ks)/k, so Re log ζ(σ + it) = ∑ cₙ n^(−σ) cos(t ln n) with cₙ ≥ 0. Hence 3 log|ζ(σ)| + 4 log|ζ(σ + it)| + log|ζ(σ + 2it)| = ∑ cₙ n^(−σ)(3 + 4 cos θₙ + cos 2θₙ) ≥ 0, where θₙ = t ln n. So |ζ(σ)³ ζ(σ + it)⁴ ζ(σ + 2it)| ≥ 1. If ζ(1 + it) = 0, then as σ → 1⁺, ζ(σ)³ = O((σ − 1)^(−3)), ζ(σ + it)⁴ = O((σ − 1)⁴), and ζ(σ + 2it) stays bounded (t ≠ 0, so 1 + 2it is not the pole), making the product tend to 0, a contradiction.
  56. By Theorem 13.1, ζ(s) − 1/(s − 1) = ∑ φₙ(s) is holomorphic near 1, so ζ(s) = 1/(s − 1) + c + O(s − 1) with c = ∑ φₙ(1) = ∑ (1/n − ln(n + 1) + ln n). The N-th partial sum is H_N − ln(N + 1), where H_N = 1 + 1/2 + … + 1/N, and this tends to γ.
  57. Fix z₀ ∈ 𝔻 and let w₀ = f(z₀). Put g = φ_(w₀) ∘ f ∘ φ_(z₀), with φₐ(z) = (a − z)/(1 − āz). Then g : 𝔻 → 𝔻 and g(0) = 0, so |g′(0)| ≤ 1. By the chain rule g′(0) = φ_(w₀)′(w₀) f′(z₀) φ_(z₀)′(0), and a direct computation gives φₐ′(0) = −(1 − |a|²) and φₐ′(a) = −1/(1 − |a|²). Hence |f′(z₀)| (1 − |z₀|²)/(1 − |w₀|²) ≤ 1, which is the inequality.
  58. The map z ↦ z/√(1 + |z|²) is a smooth bijection ℂ → 𝔻 with smooth inverse w ↦ w/√(1 − |w|²), so the two are diffeomorphic. A biholomorphism ℂ → 𝔻 would be a bounded nonconstant entire function, impossible by Liouville.
  59. With z = r e^(iθ), J(z) = (1/2)(r + 1/r) cos θ + (i/2)(r − 1/r) sin θ, which traces the ellipse x²/A² + y²/B² = 1 with semi-axes A = (r + 1/r)/2 and B = (r − 1/r)/2. Since A² − B² = 1, the foci are ±1 for every r: the images are confocal ellipses, which fill ℂ \ [−1, 1] as r ranges over (1, ∞).
  60. Let z₀ ∈ D be the unique point with f(z₀) = w. Since f is injective, f′(z₀) ≠ 0 (Lesson 11), so f(z) − w has a simple zero at z₀ and no other zero in D̄. The function z f′(z)/(f(z) − w) is therefore holomorphic on a neighbourhood of D̄ except for a simple pole at z₀, with residue z₀ f′(z₀)/f′(z₀) = z₀. By the residue theorem the integral equals z₀ = f⁻¹(w). This formula shows directly that f⁻¹ is holomorphic in w.
