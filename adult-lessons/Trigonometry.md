Trigonometry — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Elementary trigonometry defines sin θ and cos θ as ratios of sides in a right triangle and then quietly assumes a great deal: that angles can be measured by real numbers, that the ratios do not depend on the triangle chosen, that the functions extend to all real arguments, that they are continuous and differentiable, and that the number π which appears everywhere is well defined. A rigorous course has to reverse the order. We begin with analysis, define sine and cosine by power series (or, equivalently, as the solutions of the differential equation y″ = −y), and derive every geometric property, including the existence of π and the fact that the circle has circumference 2π, as a theorem.

Once the foundations are in place, the subject opens in several directions at once. Euler's formula e^(iθ) = cos θ + i sin θ turns every trigonometric identity into an algebraic statement about the exponential function. The inverse functions require a careful choice of principal branches, which becomes unavoidable over the complex numbers. Plane and spherical trigonometry, the original applied core of the subject, become clean consequences of vector algebra. Chebyshev polynomials connect multiple-angle formulas to approximation theory. Fourier series reveal sine and cosine as an orthogonal basis of a Hilbert space and bring with them subtle convergence phenomena. Finally, algebraic number theory answers a very old question: for which angles can the trigonometric values be written exactly, and when are they rational?

The course assumes a first course in real analysis (uniform convergence, term-by-term differentiation of power series, the Riemann integral), basic linear algebra, and some familiarity with complex numbers. Facts from complex analysis, measure theory and Galois theory are used in a few places and are always stated precisely when they appear.

In this course, you will:

  1. Define sin and cos by power series and by the ODE y″ = −y, and prove they agree
  2. Define π analytically, prove periodicity, and justify radian measure as arc length
  3. Derive all addition, multiple-angle and product-to-sum formulas from Euler's formula
  4. Study the inverse functions, their principal branches and their complex extensions
  5. Prove the laws of sines, cosines and tangents, and the classical triangle formulas
  6. Develop spherical trigonometry and prove Girard's theorem on spherical excess
  7. Study Chebyshev polynomials, their orthogonality and their extremal property
  8. Evaluate finite trigonometric sums and products, and prove the product formula for sine
  9. Build Fourier series, prove Dirichlet's convergence theorem and meet the Gibbs phenomenon
  10. Use Parseval's identity to evaluate ζ(2), ζ(4) and other series
  11. Treat hyperbolic functions as trigonometry with imaginary arguments
  12. Decide which trigonometric values are rational, constructible or expressible in radicals

Notation: angles are in radians unless a degree sign is written. ℕ = {1, 2, 3, …}. For a complex number z, Re z and Im z are its real and imaginary parts and z̄ its conjugate. The exponential function is exp z = ∑ zⁿ/n!, which converges absolutely for every z ∈ ℂ and satisfies exp(z + w) = exp z · exp w (by the Cauchy product of absolutely convergent series).

─────────────────────────────────
Lesson 1: Sine and Cosine from First Principles
─────────────────────────────────

📌 Key idea of this section:

        sin x = ∑ₙ₌₀^∞ (−1)ⁿ x²ⁿ⁺¹/(2n+1)!        cos x = ∑ₙ₌₀^∞ (−1)ⁿ x²ⁿ/(2n)!
        These are the unique solutions of y″ = −y with (y(0), y′(0)) = (0, 1) and (1, 0).

The series definition

Define, for every complex number z,

        sin z = z − z³/3! + z⁵/5! − z⁷/7! + ⋯
        cos z = 1 − z²/2! + z⁴/4! − z⁶/6! + ⋯

By the ratio test both series have infinite radius of convergence, so they define entire functions; in particular they are infinitely differentiable on ℝ and may be differentiated term by term. Reading off the series immediately gives four basic facts: sin 0 = 0, cos 0 = 1, sin is odd, cos is even, and

        (sin x)′ = cos x,        (cos x)′ = −sin x.

For example, differentiating the cosine series term by term gives −z + z³/3! − z⁵/5! + ⋯ = −sin z. Comparing with the exponential series, we also obtain Euler's formula as a pure identity between power series:

        exp(iz) = ∑ (iz)ⁿ/n! = ∑ (−1)ᵏ z²ᵏ/(2k)! + i ∑ (−1)ᵏ z²ᵏ⁺¹/(2k+1)! = cos z + i sin z.

Hence cos z = (e^(iz) + e^(−iz))/2 and sin z = (e^(iz) − e^(−iz))/(2i) for all z ∈ ℂ.

The Pythagorean identity

Theorem 1.1. For every real x, sin²x + cos²x = 1. Consequently |sin x| ≤ 1 and |cos x| ≤ 1 for real x.

Proof. Let F(x) = sin²x + cos²x. Then F′(x) = 2 sin x cos x − 2 cos x sin x = 0, so F is constant and F(x) = F(0) = 1. Since both terms are non-negative squares of real numbers, each is at most 1. ∎

Note that the bound fails off the real axis: cos(iy) = (e^(−y) + e^(y))/2 = cosh y, which is unbounded. The identity sin²z + cos²z = 1 still holds for all complex z, by the identity theorem, or directly from the exponential forms.

The differential equation y″ = −y

The series definition has the defect of looking arbitrary. A more conceptual characterisation is through the simplest linear differential equation with oscillating solutions.

Theorem 1.2 (Uniqueness). Let y: ℝ → ℝ be twice differentiable with y″ + y = 0. Then y(x) = y(0) cos x + y′(0) sin x for all x.

Proof. Put u(x) = y(x) − y(0) cos x − y′(0) sin x. Then u″ + u = 0 and u(0) = u′(0) = 0. The energy E(x) = u(x)² + u′(x)² satisfies E′ = 2uu′ + 2u′u″ = 2u′(u + u″) = 0, so E is constant, equal to E(0) = 0. Hence u ≡ 0. ∎

This theorem is the engine behind almost every identity in the subject. One may take it as the definition of sine and cosine: S and C are the solutions of y″ = −y with S(0) = 0, S′(0) = 1 and C(0) = 1, C′(0) = 0. Existence is supplied by the power series (or by the Picard–Lindelöf theorem), and uniqueness by Theorem 1.2.

Corollary 1.3 (Addition formulas). For all real x and a,

        sin(x + a) = sin x cos a + cos x sin a,
        cos(x + a) = cos x cos a − sin x sin a.

Proof. For fixed a, the function y(x) = sin(x + a) satisfies y″ = −y with y(0) = sin a and y′(0) = cos a. By Theorem 1.2, y(x) = sin a cos x + cos a sin x. Differentiating in x gives the cosine formula. ∎

Inequalities from the series

For real x, the series for sin and cos are alternating, and for |x| small the terms decrease in absolute value. The alternating series estimate then gives explicit two-sided bounds, which we need in Lesson 2. For instance, if 0 < x ≤ 2 the terms x^(2n)/(2n)! of the cosine series are decreasing from n = 1 onward (the ratio of consecutive terms is x²/((2n+1)(2n+2)) < 1), so

        1 − x²/2 < cos x < 1 − x²/2 + x⁴/24        (0 < x ≤ 2).

In the same way, grouping the sine series in pairs,

        sin x = (x − x³/6) + (x⁵/5! − x⁷/7!) + ⋯,

each bracket x^(4k+1)/(4k+1)! − x^(4k+3)/(4k+3)! is positive whenever x² < (4k+2)(4k+3), which holds for 0 < x ≤ 2 and all k ≥ 0. Hence sin x > x − x³/6 > 0 on (0, 2]. A cruder but global bound is the Taylor estimate with Lagrange remainder: since |sin‴| = |cos| ≤ 1,

        |sin x − x| ≤ |x|³/6        for all real x.

Worked example: computing cos(1/2)

Summing the cosine series through the x⁶ term at x = 1/2 gives 1 − 1/8 + 1/384 − 1/46080 = 0.8775824652… The first omitted term is (1/2)⁸/8! ≈ 9.69 × 10⁻⁸, and the alternating series estimate bounds the error by this amount. The true value is cos(1/2) = 0.8775825618…, which differs from the partial sum by 9.66 × 10⁻⁸, just below the bound.

✏️ Your Turn

(a) Using only y″ = −y and Theorem 1.2, prove that sin(−x) = −sin x.
(b) Find the solution of y″ + y = 0 with y(0) = 2, y′(0) = −3, and write it in the form R cos(x + α) with R > 0.
(c) Prove the identity sin²z + cos²z = 1 for complex z directly from the exponential formulas.

Answers: (a) y(x) = −sin(−x) satisfies y″ = −y with y(0) = 0 and y′(0) = cos 0 = 1, so y = sin by uniqueness. (b) y = 2 cos x − 3 sin x = √13 cos(x + α) with cos α = 2/√13, sin α = 3/√13, so α = arctan(3/2) ≈ 0.9828. (c) Squaring, cos²z = (e^(2iz) + 2 + e^(−2iz))/4 and sin²z = −(e^(2iz) − 2 + e^(−2iz))/4; the sum is 4/4 = 1.

─────────────────────────────────
Lesson 2: The Definition of π and Periodicity
─────────────────────────────────

📌 Key idea of this section:

        π/2 is defined as the smallest positive zero of cos.
        Then e^(it) = 1 ⇔ t ∈ 2πℤ, and t ↦ (cos t, sin t) traces the unit circle at unit speed.

Existence of a first zero

Lemma 2.1. The cosine function has exactly one zero in the interval (0, 2).

Proof. By Lesson 1, sin x > 0 on (0, 2], so cos′ = −sin < 0 there and cos is strictly decreasing on [0, 2]. We have cos 0 = 1, and from the upper bound cos x < 1 − x²/2 + x⁴/24 at x = 2, cos 2 < 1 − 2 + 16/24 = −1/3 < 0. By the intermediate value theorem cos has a zero in (0, 2), and by strict monotonicity it has only one. ∎

Definition 2.2. π is the real number such that π/2 is the unique zero of cos in (0, 2).

This is Landau's definition (1934), and it is completely independent of geometry. Since cos(π/2) = 0 and sin(π/2) > 0, the Pythagorean identity forces sin(π/2) = 1, so e^(iπ/2) = i.

Rough bounds on π

The two-sided bounds of Lesson 1 locate π quickly. At x = 3/2 the terms of the cosine series decrease in absolute value from the x² term onward, so stopping after a negative term gives a lower bound:

        cos(3/2) > 1 − 9/8 + 81/384 − 729/46080 = 0.0701… > 0.

At x = 8/5 the same holds, and stopping after a positive term gives an upper bound:

        cos(8/5) < 1 − 1.28 + 0.27306… = −0.00693… < 0.

Since cos is decreasing on [0, 2], its zero lies in (3/2, 8/5), so 3 < π < 3.2. Better constants come from the arctangent series of Lesson 4.

Periodicity

Theorem 2.3. For all z ∈ ℂ, e^(z + iπ/2) = i e^z, e^(z + iπ) = −e^z and e^(z + 2πi) = e^z. In particular sin and cos are 2π-periodic, and

        sin(x + π/2) = cos x,   cos(x + π/2) = −sin x,   sin(x + π) = −sin x,   cos(x + π) = −cos x.

Proof. e^(iπ/2) = cos(π/2) + i sin(π/2) = i, and the functional equation of exp gives the rest; taking real and imaginary parts gives the formulas for sine and cosine. ∎

Theorem 2.4. e^(it) = 1 for real t if and only if t ∈ 2πℤ. Consequently 2π is the least positive period of sin and cos, and the zeros of sin are exactly the points kπ, k ∈ ℤ.

Proof. Suppose e^(it) = 1 with 0 < t < 2π. Write e^(it/4) = u + iv with u, v real. If 0 < t/4 < π/2 then u = cos(t/4) > 0 and v = sin(t/4) > 0 (cos is decreasing from 1 to 0 on [0, π/2] and sin² = 1 − cos²). Then (u + iv)⁴ = u⁴ − 6u²v² + v⁴ + 4iuv(u² − v²). For this to equal 1 we need u² = v², hence u² = v² = 1/2, and then the real part is 1/4 − 6/4 + 1/4 = −1 ≠ 1. Contradiction. Thus no t in (0, 2π) works, and by periodicity the set of real t with e^(it) = 1 is a subgroup of ℝ containing 2π whose positive part starts at 2π, namely 2πℤ. For the zeros of sin: sin t = 0 implies cos t = ±1, so e^(2it) = 1 and t ∈ πℤ. ∎

The circle and radian measure

Theorem 2.5. The map γ(t) = (cos t, sin t) is a continuous bijection from [0, 2π) onto the unit circle S¹ = {(x, y) : x² + y² = 1}, and the arc length of γ on [0, t] equals t for 0 ≤ t ≤ 2π.

Proof. Injectivity follows from Theorem 2.4: γ(s) = γ(t) means e^(i(s − t)) = 1. For surjectivity, let x² + y² = 1. If y ≥ 0, choose t ∈ [0, π] with cos t = x (cos decreases from 1 to −1 on [0, π] by Theorem 2.3); then sin t ≥ 0 and sin t = √(1 − x²) = y. If y < 0, use t ∈ (π, 2π) via the symmetry t ↦ 2π − t. Finally |γ′(t)| = √(sin²t + cos²t) = 1, so the arc length is ∫₀ᵗ 1 ds = t. ∎

Theorem 2.5 is the rigorous content of "radian measure": the real number t assigned to an angle is the length of the arc it cuts from the unit circle, and the circumference of the unit circle is 2π. The area of the unit disc is also π, since ∫₋₁¹ 2√(1 − x²) dx equals, after x = cos t, ∫₀^π 2 sin²t dt = π.

Every complex number z ≠ 0 can now be written as z = r e^(iθ) with r = |z| > 0 and θ unique modulo 2π. This is the polar form, and θ is an argument of z.

Historical note

That the ratio of circumference to diameter is the same for all circles was known in antiquity; Archimedes proved 223/71 < π < 22/7 with inscribed and circumscribed 96-gons. The symbol π was introduced by William Jones in 1706 and popularised by Euler. The analytic definition used here goes back to Weierstrass's school and to Landau's textbook, whose aim was precisely to free analysis from geometric intuition.

✏️ Your Turn

(a) Show that sin is strictly increasing on [−π/2, π/2].
(b) Use the bound cos x ≥ 1 − x²/2 (valid for all real x) to prove that π > 2√2.
(c) Show that tan x = sin x / cos x has least positive period π.

Answers: (a) sin′ = cos, and cos > 0 on (−π/2, π/2) because cos is even, positive at 0, and its first positive zero is π/2. (b) If 0 ≤ x < √2 then cos x ≥ 1 − x²/2 > 0, so the first zero π/2 is at least √2; equality is excluded because cos √2 > 1 − 1 = 0 by the strict lower bound of Lesson 1. Hence π > 2√2 ≈ 2.83. (c) tan(x + π) = (−sin x)/(−cos x) = tan x. If tan had a period 0 < p < π then tan p = tan 0 = 0, so sin p = 0, contradicting Theorem 2.4.

─────────────────────────────────
Lesson 3: Euler's Formula and the Algebra of Identities
─────────────────────────────────

📌 Key idea of this section:

        e^(iθ) = cos θ + i sin θ,        (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ
        Every polynomial identity in sin and cos is an identity of Laurent polynomials in w = e^(iθ).

De Moivre's theorem and multiple angles

Since e^(inθ) = (e^(iθ))ⁿ, we have de Moivre's formula (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ for every n ∈ ℤ. Expanding by the binomial theorem and separating real and imaginary parts:

        cos nθ = ∑ₖ (−1)ᵏ C(n, 2k) cosⁿ⁻²ᵏθ sin²ᵏθ
        sin nθ = ∑ₖ (−1)ᵏ C(n, 2k+1) cosⁿ⁻²ᵏ⁻¹θ sin²ᵏ⁺¹θ

For n = 2 and n = 3 this gives the familiar formulas:

        cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ,     sin 2θ = 2 sin θ cos θ,
        cos 3θ = 4cos³θ − 3cos θ,                             sin 3θ = 3 sin θ − 4 sin³θ.

Dividing the two expansions by cosⁿθ gives a formula for the tangent of a multiple angle in terms of t = tan θ:

        tan nθ = Im (1 + it)ⁿ / Re (1 + it)ⁿ,        e.g.  tan 3θ = (3t − t³)/(1 − 3t²).

Linearisation: powers to multiple angles

Conversely, powers of sine and cosine can be written as linear combinations of cos kθ and sin kθ by writing cos θ = (w + w⁻¹)/2 with w = e^(iθ):

        cos⁴θ = (w + w⁻¹)⁴/16 = (w⁴ + w⁻⁴ + 4(w² + w⁻²) + 6)/16 = 3/8 + (1/2)cos 2θ + (1/8)cos 4θ.

In general, for n ≥ 1,

        cos²ⁿθ = 2⁻²ⁿ [ C(2n, n) + 2 ∑ₖ₌₁ⁿ C(2n, n−k) cos 2kθ ].

These formulas are the reason integrals such as ∫₀^(2π) cos²ⁿθ dθ = 2π C(2n, n)/4ⁿ are elementary: every term except the constant integrates to zero.

Products and sums

Adding and subtracting the addition formulas gives the product-to-sum identities:

        2 cos α cos β = cos(α − β) + cos(α + β)
        2 sin α sin β = cos(α − β) − cos(α + β)
        2 sin α cos β = sin(α + β) + sin(α − β)

and, substituting α = (x + y)/2, β = (x − y)/2, the sum-to-product identities:

        sin x + sin y = 2 sin((x+y)/2) cos((x−y)/2)
        cos x + cos y = 2 cos((x+y)/2) cos((x−y)/2)
        cos x − cos y = −2 sin((x+y)/2) sin((x−y)/2).

In signal processing, the sum-to-product formula for cos x + cos y explains amplitude modulation and beats: the superposition of tones at nearby frequencies ω₁ and ω₂ is a tone at the mean frequency whose amplitude varies at half the difference frequency.

The tangent addition formula and the Weierstrass substitution

Dividing the addition formulas,

        tan(α + β) = (tan α + tan β)/(1 − tan α tan β),

valid whenever all three tangents are defined. With t = tan(θ/2) the double-angle formulas give the rational parametrisation

        sin θ = 2t/(1 + t²),     cos θ = (1 − t²)/(1 + t²),     dθ = 2 dt/(1 + t²).

This is the Weierstrass substitution: it converts any integral of a rational function of sin θ and cos θ into an integral of a rational function of t. Geometrically, it is the stereographic projection of the unit circle from the point (−1, 0), and it shows that the rational points of the circle are exactly ((1 − t²)/(1 + t²), 2t/(1 + t²)) for t ∈ ℚ, together with (−1, 0). Clearing denominators with t = n/m recovers the classical parametrisation of Pythagorean triples (m² − n², 2mn, m² + n²).

A useful amplitude–phase identity

For real a, b not both zero, a cos θ + b sin θ = R cos(θ − φ) with R = √(a² + b²) and (cos φ, sin φ) = (a/R, b/R). Indeed, a cos θ + b sin θ = Re((a − ib) e^(iθ)) and a − ib = R e^(−iφ). In particular the maximum of a cos θ + b sin θ is √(a² + b²), an instance of the Cauchy–Schwarz inequality.

✏️ Your Turn

(a) Prove that tan θ tan(π/3 − θ) tan(π/3 + θ) = tan 3θ wherever both sides are defined.
(b) Linearise sin⁵θ.
(c) Use the Weierstrass substitution to evaluate ∫₀^(2π) dθ/(2 + cos θ).

Answers: (a) With t = tan θ and s = tan(π/3) = √3, tan(π/3 − θ) tan(π/3 + θ) = (s² − t²)/(1 − s²t²) = (3 − t²)/(1 − 3t²); multiplying by t gives (3t − t³)/(1 − 3t²) = tan 3θ. (b) sin⁵θ = (10 sin θ − 5 sin 3θ + sin 5θ)/16. (c) 2π/√3. On (−π, π) the substitution gives ∫₋∞^∞ 2 dt/(3 + t²) = 2π/√3, and the integrand is 2π-periodic.

─────────────────────────────────
Lesson 4: Inverse Trigonometric Functions and Principal Branches
─────────────────────────────────

📌 Key idea of this section:

        arcsin: [−1, 1] → [−π/2, π/2],   arccos: [−1, 1] → [0, π],   arctan: ℝ → (−π/2, π/2)
        arctan x = ∫₀ˣ dt/(1 + t²) = x − x³/3 + x⁵/5 − ⋯   (|x| ≤ 1)

Principal branches on the real line

Since sin, cos and tan are periodic they are not injective, and an inverse function requires a choice of interval on which the function is a bijection. By Lesson 2, sin is strictly increasing from −1 to 1 on [−π/2, π/2], cos is strictly decreasing from 1 to −1 on [0, π], and tan is strictly increasing from −∞ to ∞ on (−π/2, π/2). The inverse functions on these intervals are the principal branches arcsin, arccos and arctan. They are continuous, and by the inverse function theorem they are differentiable on the interiors with

        (arcsin x)′ = 1/√(1 − x²),   (arccos x)′ = −1/√(1 − x²),   (arctan x)′ = 1/(1 + x²).

For example, if y = arcsin x then cos y ≥ 0 on [−π/2, π/2], so cos y = √(1 − x²) and dy/dx = 1/cos y. Since the derivatives of arcsin and arccos are negatives of each other and arcsin 0 + arccos 0 = π/2, we get arcsin x + arccos x = π/2 on [−1, 1].

The compositions in the "wrong" order are not identity maps. For real x, arcsin(sin x) is the unique y ∈ [−π/2, π/2] with sin y = sin x; it is a triangle wave of period 2π:

        arcsin(sin x) = x − 2kπ        for x ∈ [2kπ − π/2, 2kπ + π/2],
        arcsin(sin x) = (2k+1)π − x     for x ∈ [2kπ + π/2, 2kπ + 3π/2].

For instance, 5 lies in [3π/2, 5π/2], so arcsin(sin 5) = 5 − 2π ≈ −1.2832, while 5 lies in [π, 2π] and arccos(cos 5) = 2π − 5 ≈ 1.2832.

The arctangent addition law and atan2

From the tangent addition formula, for real a, b with ab ≠ 1,

        arctan a + arctan b = arctan((a + b)/(1 − ab)) + επ,

where ε = 0 if ab < 1, ε = 1 if ab > 1 and a > 0, and ε = −1 if ab > 1 and a < 0. The correction term appears because arctan a + arctan b may leave the interval (−π/2, π/2). For example arctan 2 + arctan 3: here (2 + 3)/(1 − 6) = −1 and ab > 1, a > 0, so the sum is −π/4 + π = 3π/4. In the same way arctan x + arctan(1/x) = π/2 for x > 0 and −π/2 for x < 0.

The function atan2(y, x) used in numerical computation returns the argument of the point (x, y) in (−π, π]: it equals arctan(y/x) when x > 0, arctan(y/x) + π when x < 0 and y ≥ 0, arctan(y/x) − π when x < 0 and y < 0, and ±π/2 on the y-axis. It is the principal argument Arg z of z = x + iy.

The arctangent series and Machin-type formulas

Integrating the geometric series 1/(1 + t²) = 1 − t² + t⁴ − ⋯ term by term gives, for |x| < 1,

        arctan x = x − x³/3 + x⁵/5 − x⁷/7 + ⋯ .

The series also converges at x = ±1 (alternating series), and Abel's theorem identifies the sum with arctan(±1) = ±π/4, giving the Leibniz–Madhava series π/4 = 1 − 1/3 + 1/5 − ⋯. This series converges far too slowly for computation. John Machin (1706) observed that if α = arctan(1/5) then tan 2α = 5/12 and tan 4α = 120/119, so

        tan(4α − π/4) = (120/119 − 1)/(1 + 120/119) = 1/239,
        π/4 = 4 arctan(1/5) − arctan(1/239).

Both series now converge geometrically. Using five terms of the first and two terms of the second already gives π ≈ 3.14159268, with error below 3 × 10⁻⁸. Formulas of this kind were used for record computations of π until the early 1980s, when quadratically convergent algorithms (Salamin–Brent, 1976, based on the arithmetic–geometric mean) took over; Machin-like formulas returned for some later records, such as Kanada's in 2002.

Complex inverse functions

Over ℂ, sin and cos are surjective but infinitely-many-to-one, and the inverses are multivalued. Solving w = sin z means e^(iz) − e^(−iz) = 2iw, a quadratic in u = e^(iz): u² − 2iwu − 1 = 0, so u = iw ± √(1 − w²). Therefore all solutions are

        z = −i log(iw + √(1 − w²)),

with all values of the logarithm and both square roots. The principal branch takes the principal square root and the principal logarithm Log; it is analytic on ℂ minus the two cuts (−∞, −1] and [1, ∞) and agrees with the real arcsin on (−1, 1). Similarly

        arctan w = (1/(2i)) Log((1 + iw)/(1 − iw)),

analytic off the cuts (−i∞, −i] and [i, i∞); the points ±i are logarithmic branch points, which is the deeper reason why the arctangent series has radius of convergence exactly 1 even though arctan is smooth on all of ℝ.

Example. The equation sin z = 2 has no real solutions, but in ℂ: with z = π/2 + iy we get sin z = cos(iy) = cosh y, and cosh y = 2 gives y = ±ln(2 + √3). By periodicity and the symmetry sin(π − z) = sin z, the full solution set is z = π/2 + 2kπ ± i ln(2 + √3), k ∈ ℤ.

Example. The zeros of cos in ℂ are only the real ones: cos z = 0 means e^(2iz) = −1 = e^(iπ), so 2iz ∈ iπ + 2πiℤ, that is z ∈ π/2 + πℤ.

✏️ Your Turn

(a) Evaluate arctan(1/2) + arctan(1/3) and arctan 1 + arctan 2 + arctan 3.
(b) Compute arcsin(sin 10) exactly.
(c) Show that the Euler formula π/4 = arctan(1/2) + arctan(1/5) + arctan(1/8) holds.

Answers: (a) (1/2 + 1/3)/(1 − 1/6) = 1 with product < 1, so the first sum is π/4. For the second, arctan 2 + arctan 3 = 3π/4, so the total is π/4 + 3π/4 = π. (b) 10 ∈ [5π/2, 7π/2] = [2π + π/2, 2π + 3π/2], so arcsin(sin 10) = 3π − 10 ≈ −0.5752. (c) arctan(1/2) + arctan(1/5) = arctan((7/10)/(9/10)) = arctan(7/9); then arctan(7/9) + arctan(1/8) = arctan((65/72)/(65/72)) = arctan 1 = π/4, all products being less than 1.

─────────────────────────────────
Lesson 5: Plane Triangles: the Laws of Sines, Cosines and Tangents
─────────────────────────────────

📌 Key idea of this section:

        a/sin A = b/sin B = c/sin C = 2R,        c² = a² + b² − 2ab cos C
        (a − b)/(a + b) = tan((A − B)/2) / tan((A + B)/2)

Conventions

In a triangle ABC we write a, b, c for the lengths of the sides opposite the vertices A, B, C, and use the same letters for the angles. We write s = (a + b + c)/2 for the semiperimeter, Δ for the area, R for the circumradius and r for the inradius. Angles satisfy A + B + C = π in the Euclidean plane, which is equivalent to the parallel postulate.

The law of cosines

Theorem 5.1. c² = a² + b² − 2ab cos C.

Proof. Place C at the origin and let u, v be the vectors from C to B and to A. Then |u| = a, |v| = b and u·v = ab cos C by the definition of the angle between vectors (which, by Lesson 2, agrees with the arc-length angle). Hence c² = |u − v|² = a² + b² − 2u·v. ∎

The law of cosines contains Pythagoras's theorem (C = π/2) and its converse, and it determines a triangle up to congruence from SSS or SAS data. Solving for the angle, cos C = (a² + b² − c²)/(2ab). The existence of a triangle with sides a, b, c is equivalent to |cos C| < 1, that is to the triangle inequalities.

The law of sines and the circumcircle

Theorem 5.2. a/sin A = b/sin B = c/sin C = 2R.

Proof. Let O be the circumcentre and let A′ be the point of the circumcircle diametrically opposite B. By the inscribed angle theorem, the angle BA′C equals A (or π − A if A′ and A lie on opposite sides of BC), and the angle BCA′ is a right angle since BA′ is a diameter. Hence a = BC = 2R sin A. ∎

A useful consequence is the area formula Δ = (1/2)ab sin C = abc/(4R). Combining Δ = (1/2)ab sin C with the law of cosines gives Heron's formula:

        16Δ² = 4a²b² − (a² + b² − c²)² = (a+b+c)(−a+b+c)(a−b+c)(a+b−c),
        Δ = √(s(s − a)(s − b)(s − c)).

The ambiguous case SSA

Given a, b and the angle A (not between them), the law of sines gives sin B = b sin A / a. If this exceeds 1 there is no triangle; if it equals 1 there is exactly one (right) triangle; if it is less than 1 there are two candidates B and π − B, and the second is valid exactly when A + (π − B) < π, that is A < B. For example, a = 6, b = 8, A = 30° gives sin B = 2/3, B ≈ 41.81° or 138.19°, and both triangles exist.

Half-angle formulas, the law of tangents, Mollweide

From cos A = (b² + c² − a²)/(2bc) and 1 − cos A = 2 sin²(A/2), one finds:

        sin²(A/2) = (s − b)(s − c)/(bc),    cos²(A/2) = s(s − a)/(bc),    tan(A/2) = r/(s − a),

where the last formula uses Δ = rs (decompose the triangle into three triangles with apex at the incentre). The law of tangents follows from the law of sines and sum-to-product:

        (a − b)/(a + b) = (sin A − sin B)/(sin A + sin B) = tan((A − B)/2)/tan((A + B)/2),

and Mollweide's formula, a convenient check in numerical work, is

        (a + b)/c = cos((A − B)/2)/sin(C/2).

The law of tangents is the natural tool for SAS data before calculators: given a, b and C one knows (A + B)/2 = (π − C)/2 and tan((A − B)/2) = ((a − b)/(a + b)) cot(C/2).

Worked example: the 13–14–15 triangle

Let a = 13, b = 14, c = 15. Then s = 21 and Δ = √(21·8·7·6) = √7056 = 84. Hence r = Δ/s = 4 and R = abc/(4Δ) = 2730/336 = 65/8. The law of cosines gives cos A = (196 + 225 − 169)/420 = 3/5, so sin A = 4/5, and indeed a/sin A = 65/4 = 2R. The other angles have cos B = 33/65 and cos C = 5/13.

Euler's distance formula

Theorem 5.3 (Euler, 1765). If O and I are the circumcentre and incentre, OI² = R(R − 2r). In particular R ≥ 2r, with equality only for the equilateral triangle.

Proof sketch. Let the bisector from A meet the circumcircle again at M, the midpoint of arc BC. The incentre–excentre lemma gives MI = MB = 2R sin(A/2). Also AI = r/sin(A/2). The power of I with respect to the circumcircle is R² − OI² = AI · IM = (r/sin(A/2)) · 2R sin(A/2) = 2Rr. ∎

For the 13–14–15 triangle, OI² = (65/8)(65/8 − 8) = 65/64.

✏️ Your Turn

(a) In a triangle with a = 7, b = 8, c = 9, find cos C and the area.
(b) Given A = 40°, B = 60° and a = 10, find b and c to three decimal places.
(c) Prove that in any non-right triangle tan A + tan B + tan C = tan A tan B tan C.

Answers: (a) cos C = (49 + 64 − 81)/112 = 2/7, so C ≈ 73.40°; s = 12 and Δ = √(12·5·4·3) = √720 = 12√5 ≈ 26.833. (b) C = 80°; b = 10 sin 60°/sin 40° ≈ 13.473 and c = 10 sin 80°/sin 40° ≈ 15.321. (c) tan C = −tan(A + B) = −(tan A + tan B)/(1 − tan A tan B); clear the denominator and rearrange.

─────────────────────────────────
Lesson 6: Spherical Trigonometry
─────────────────────────────────

📌 Key idea of this section:

        cos c = cos a cos b + sin a sin b cos C        (sides as arcs on the unit sphere)
        sin A/sin a = sin B/sin b = sin C/sin c,       Area = (A + B + C − π) R²

Spherical triangles

On the unit sphere S² ⊂ ℝ³, the great circles (intersections with planes through the origin) play the role of lines: the shortest path between two non-antipodal points is the shorter great-circle arc, and its length equals the angle between the position vectors. A spherical triangle has vertices given by unit vectors A, B, C (linearly independent), sides the great-circle arcs between them, of lengths a = ∠(B, C), b = ∠(C, A), c = ∠(A, B) in (0, π), and angles A, B, C equal to the dihedral angles between the planes of the sides. On a sphere of radius R, lengths scale by R and angles are unchanged.

The spherical law of cosines

Theorem 6.1. cos c = cos a cos b + sin a sin b cos C.

Proof. The angle C is the angle between the normals C × A and C × B of the two planes through C, so (C × A)·(C × B) = |C × A| |C × B| cos C = sin b sin a cos C. By the Binet–Cauchy identity (u × v)·(w × x) = (u·w)(v·x) − (u·x)(v·w), the left side is (C·C)(A·B) − (C·B)(A·C) = cos c − cos a cos b. ∎

For small triangles, cos x = 1 − x²/2 + O(x⁴) and sin x = x + O(x³) turn the spherical law into c² = a² + b² − 2ab cos C + O(|x|⁴): plane trigonometry is the infinitesimal limit of spherical trigonometry. When C = π/2 we get the spherical Pythagorean theorem cos c = cos a cos b.

The law of sines and the polar triangle

Theorem 6.2. sin A/sin a = sin B/sin b = sin C/sin c.

Proof. From Theorem 6.1, sin²C = 1 − cos²C = (sin²a sin²b − (cos c − cos a cos b)²)/(sin²a sin²b). The numerator equals 1 − cos²a − cos²b − cos²c + 2 cos a cos b cos c = det G, where G is the Gram matrix of A, B, C. Hence sin²C/sin²c = det G/(sin²a sin²b sin²c), which is symmetric in the three vertices. ∎

The polar triangle A′B′C′ has vertices A′ = B × C/|B × C| and so on (chosen on the same side as A). Its sides are π − A, π − B, π − C and its angles are π − a, π − b, π − c. Applying Theorem 6.1 to the polar triangle gives the dual law of cosines for angles:

        cos C = −cos A cos B + sin A sin B cos c.

In particular, a spherical triangle is determined up to congruence by its three angles: there are no similar but non-congruent spherical triangles.

Girard's theorem

Theorem 6.3 (Girard, 1629; Harriot, 1603). The area of a spherical triangle on the unit sphere is A + B + C − π.

Proof. A lune of angle θ (the region between two great semicircles meeting at angle θ) has area 2θ, since the whole sphere, of area 4π, is a lune of angle 2π and area is additive. The three great circles through the sides of the triangle produce three pairs of lunes, of angles A, B and C, each pair consisting of a lune and its antipodal image. These six lunes cover the sphere, covering the triangle T and its antipode −T three times each and every other point exactly once. Hence 2(2A + 2B + 2C) = 4π + 4·area(T), and area(T) = A + B + C − π. ∎

The quantity A + B + C − π is the spherical excess. Girard's theorem is the simplest case of the Gauss–Bonnet theorem: for a geodesic triangle on a surface, the angle sum minus π equals the integral of the Gaussian curvature over the triangle. On the sphere of radius R the curvature is 1/R², giving area (A + B + C − π)R².

Navigation and the haversine formula

Using latitude φ and longitude λ, the north pole N and points P₁, P₂ form a spherical triangle with sides π/2 − φ₁, π/2 − φ₂ and angle Δλ at N. Theorem 6.1 gives the central angle σ between P₁ and P₂:

        cos σ = sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos Δλ.

For small σ this is numerically unstable, because cos σ ≈ 1 loses digits. Writing hav θ = sin²(θ/2) = (1 − cos θ)/2, the same identity becomes

        hav σ = hav(φ₂ − φ₁) + cos φ₁ cos φ₂ hav(Δλ),

which is well conditioned for small distances and was the standard formula of celestial navigation, with printed tables of haversines.

Worked example. Two points at latitude 40° N with longitudes differing by 90° have cos σ = sin²40° ≈ 0.41318, so σ ≈ 65.60°. Following the parallel of latitude instead costs 90° · cos 40° ≈ 68.94° of great-circle measure: the great circle is shorter, which is why transatlantic flights curve towards the pole on a flat map.

✏️ Your Turn

(a) A spherical right triangle on the unit sphere has legs a = b = 60°. Find the hypotenuse c and the area.
(b) Find the angles and the area of an equilateral spherical triangle with sides 60° on the unit sphere.
(c) Two points on the equator differ in longitude by 120°. Find their great-circle distance on a sphere of radius 6371 km.

Answers: (a) cos c = cos²60° = 1/4, so c = arccos(1/4) ≈ 75.52°. By the law of sines, sin A = sin a sin C/sin c = (√3/2)/(√15/4) = 2/√5, and A is acute (cos A = (cos a − cos b cos c)/(sin b sin c) = (1/2 − 1/8)/((√3/2)(√15/4)) = 1/√5 > 0), so A = B = arctan 2 ≈ 63.43°. Area = 2 arctan 2 + π/2 − π = 2 arctan 2 − π/2 ≈ 0.6435. (b) By Theorem 6.1 with all sides equal, cos A = (cos a − cos²a)/sin²a = cos a/(1 + cos a) = 1/3, so each angle is arccos(1/3) ≈ 70.53° and the area is 3 arccos(1/3) − π ≈ 0.5513. (c) σ = 120° = 2π/3, so the distance is 6371 · 2π/3 ≈ 13 343.4 km.

─────────────────────────────────
Lesson 7: Chebyshev Polynomials and Multiple Angles
─────────────────────────────────

📌 Key idea of this section:

        Tₙ(cos θ) = cos nθ,        Uₙ₋₁(cos θ) = sin nθ / sin θ
        Tₙ₊₁(x) = 2x Tₙ(x) − Tₙ₋₁(x),     and 2¹⁻ⁿTₙ is the monic polynomial of least sup norm on [−1, 1]

Definition and recurrence

By the expansion of cos nθ in Lesson 3, cos nθ is a polynomial in cos θ (only even powers of sin θ occur, and sin²θ = 1 − cos²θ). The Chebyshev polynomial of the first kind Tₙ is defined by Tₙ(cos θ) = cos nθ. The sum formula cos(n+1)θ + cos(n−1)θ = 2 cos θ cos nθ gives the three-term recurrence

        T₀ = 1,  T₁ = x,  Tₙ₊₁ = 2x Tₙ − Tₙ₋₁,

and therefore:

        T₂ = 2x² − 1,   T₃ = 4x³ − 3x,   T₄ = 8x⁴ − 8x² + 1,   T₅ = 16x⁵ − 20x³ + 5x,
        T₆ = 32x⁶ − 48x⁴ + 18x² − 1.

By induction Tₙ has degree n, leading coefficient 2ⁿ⁻¹ for n ≥ 1, integer coefficients, and the parity of n. The polynomials of the second kind are defined by Uₙ₋₁(cos θ) = sin nθ/sin θ; they satisfy the same recurrence with U₀ = 1, U₁ = 2x, so U₂ = 4x² − 1, U₃ = 8x³ − 4x, U₄ = 16x⁴ − 12x² + 1. Two further identities follow from the trigonometric definition at once:

        Tₙ(x) = ((x + √(x² − 1))ⁿ + (x − √(x² − 1))ⁿ)/2,        Tₘ(Tₙ(x)) = Tₘₙ(x),

the first from cos nθ = Re(cos θ + i sin θ)ⁿ, valid for all x by polynomial identity, the second because Tₘ(Tₙ(cos θ)) = Tₘ(cos nθ) = cos mnθ. Also Tₙ′ = n Uₙ₋₁.

Zeros, extrema and orthogonality

From cos nθ = 0 ⇔ θ = (2k − 1)π/(2n), the n zeros of Tₙ are the Chebyshev nodes:

        xₖ = cos((2k − 1)π/(2n)),     k = 1, …, n,

all simple and in (−1, 1). On [−1, 1] we have |Tₙ| ≤ 1, and Tₙ attains ±1 alternately at the n + 1 points yₖ = cos(kπ/n), k = 0, …, n, with Tₙ(yₖ) = (−1)ᵏ. With the substitution x = cos θ, dx/√(1 − x²) = −dθ, so

        ∫₋₁¹ Tₘ(x) Tₙ(x) dx/√(1 − x²) = ∫₀^π cos mθ cos nθ dθ = 0 (m ≠ n),  π/2 (m = n ≥ 1),  π (m = n = 0).

Thus the Tₙ are the orthogonal polynomials for the weight (1 − x²)^(−1/2) on (−1, 1), and expansion in Chebyshev polynomials is nothing but the Fourier cosine series of θ ↦ f(cos θ). This is why Chebyshev expansions converge geometrically for analytic f, and why they are the basis of modern numerical function approximation.

The minimax property

Theorem 7.1 (Chebyshev). Let n ≥ 1. Among all monic real polynomials p of degree n, the quantity max over [−1, 1] of |p| is minimised uniquely by p = 2¹⁻ⁿ Tₙ, and the minimum is 2¹⁻ⁿ.

Proof. Let q = 2¹⁻ⁿTₙ, which is monic with sup norm 2¹⁻ⁿ, attained with alternating signs at y₀ > y₁ > ⋯ > yₙ. Suppose p is monic of degree n with |p| ≤ 2¹⁻ⁿ on [−1, 1] and p ≠ q. Then d = q − p has degree at most n − 1, and (−1)ᵏ d(yₖ) = 2¹⁻ⁿ − (−1)ᵏ p(yₖ) ≥ 0 for k = 0, …, n. A polynomial of degree ≤ n − 1 that weakly alternates in sign at n + 1 ordered points has at least n zeros counted with multiplicity (a standard counting argument: on each interval [yₖ₊₁, yₖ] there is a zero, and a zero at an interior node yₖ where d does not change sign is a double zero). Hence d ≡ 0, a contradiction. ∎

The theorem has a striking consequence for interpolation: if f ∈ Cⁿ⁺¹[−1, 1] is interpolated at nodes x₀, …, xₙ, the error is f⁽ⁿ⁺¹⁾(ξ)/(n+1)! · ∏(x − xⱼ), and the node polynomial ∏(x − xⱼ) has the smallest possible sup norm, 2⁻ⁿ, exactly when the xⱼ are the zeros of Tₙ₊₁. Equally spaced nodes, by contrast, give the Runge phenomenon. More generally, the Chebyshev equioscillation theorem states that a polynomial of degree ≤ n is the best uniform approximation to a continuous f on [a, b] if and only if the error equioscillates at n + 2 points.

Example. The best uniform approximation to x⁴ on [−1, 1] by polynomials of degree at most 3 is x⁴ − T₄(x)/8 = x² − 1/8, with error T₄/8 equioscillating at 5 points with amplitude 1/8.

Exact values from Chebyshev polynomials

Example: cos 36°. Put c = cos(π/5). Then T₅(c) = cos π = −1, so 16c⁵ − 20c³ + 5c + 1 = 0. This factors as

        16c⁵ − 20c³ + 5c + 1 = (c + 1)(4c² − 2c − 1)²,

and since c ≠ −1, 4c² − 2c − 1 = 0, so c = (1 + √5)/4 (the positive root). Hence cos 36° = φ/2 where φ is the golden ratio, and sin 18° = cos 72° = 2c² − 1 = (√5 − 1)/4.

✏️ Your Turn

(a) Compute T₇ from the recurrence.
(b) Find the zeros of T₄ in closed form.
(c) Find the monic cubic with least sup norm on [−1, 1] and its norm.

Answers: (a) T₇ = 2xT₆ − T₅ = 64x⁷ − 112x⁵ + 56x³ − 7x. (b) cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8), that is ±√(2 + √2)/2 and ±√(2 − √2)/2. (c) T₃/4 = x³ − (3/4)x, with sup norm 1/4.

─────────────────────────────────
Lesson 8: Finite Sums, Products, and the Product Formula for Sine
─────────────────────────────────

📌 Key idea of this section:

        1/2 + ∑ₖ₌₁ⁿ cos kx = sin((n + ½)x) / (2 sin(x/2)),        ∏ₖ₌₁ⁿ⁻¹ sin(kπ/n) = n/2ⁿ⁻¹
        sin πz = πz ∏ₙ₌₁^∞ (1 − z²/n²)

Geometric sums with w = e^(ix)

If x ∉ 2πℤ, summing a geometric progression gives ∑ₖ₌₀ⁿ e^(ikx) = (e^(i(n+1)x) − 1)/(e^(ix) − 1). Factoring e^(i(n+1)x/2) from the numerator and e^(ix/2) from the denominator,

        ∑ₖ₌₀ⁿ e^(ikx) = e^(inx/2) sin((n+1)x/2)/sin(x/2).

Taking real and imaginary parts,

        ∑ₖ₌₁ⁿ sin kx = sin(nx/2) sin((n+1)x/2)/sin(x/2),
        ∑ₖ₌₀ⁿ cos kx = cos(nx/2) sin((n+1)x/2)/sin(x/2),

and the symmetric form Dₙ(x) = 1/2 + ∑ₖ₌₁ⁿ cos kx = sin((n + ½)x)/(2 sin(x/2)) is the Dirichlet kernel, the central object of Lesson 9. For x = 2πj/m with m ∤ j, the sum ∑ₖ₌₀^(m−1) e^(ikx) vanishes; for example ∑ₖ₌₁⁶ cos(2πk/7) = −1.

The sine product over roots of unity

Theorem 8.1. For n ≥ 2, ∏ₖ₌₁ⁿ⁻¹ sin(kπ/n) = n/2ⁿ⁻¹.

Proof. With ζ = e^(2πi/n) we have zⁿ − 1 = ∏ₖ₌₀ⁿ⁻¹ (z − ζᵏ), so (zⁿ − 1)/(z − 1) = 1 + z + ⋯ + zⁿ⁻¹ = ∏ₖ₌₁ⁿ⁻¹ (z − ζᵏ). Setting z = 1 gives ∏ₖ₌₁ⁿ⁻¹ (1 − ζᵏ) = n. Now |1 − e^(iθ)| = 2|sin(θ/2)|, so taking absolute values, ∏ₖ₌₁ⁿ⁻¹ 2 sin(kπ/n) = n (all factors are positive). ∎

Corollary. (π/n) ∑ₖ₌₁ⁿ⁻¹ ln sin(kπ/n) = (π/n)(ln n − (n − 1) ln 2). Letting n → ∞, the left side is a Riemann sum for an improper but absolutely convergent integral, and ∫₀^π ln sin x dx = −π ln 2.

Similar telescoping tricks give closed forms for products of cosines. Since sin 2x = 2 sin x cos x,

        cos x cos 2x cos 4x ⋯ cos 2ⁿ⁻¹x = sin 2ⁿx / (2ⁿ sin x),

so for example cos 20° cos 40° cos 80° = sin 160°/(8 sin 20°) = 1/8 (Morrie's law) and cos(π/7) cos(2π/7) cos(4π/7) = sin(8π/7)/(8 sin(π/7)) = −1/8.

Sums of cosecants and cotangents

Theorem 8.2. For n ≥ 2, ∑ₖ₌₁ⁿ⁻¹ csc²(kπ/n) = (n² − 1)/3. For m ≥ 1, ∑ₖ₌₁ᵐ cot²(kπ/(2m+1)) = m(2m − 1)/3.

Proof of the second statement. Let N = 2m + 1 and θ = kπ/N for 1 ≤ k ≤ m. Then sin Nθ = 0, and by de Moivre sin Nθ = sinᴺθ ∑ⱼ (−1)ʲ C(N, 2j+1) cot^(N−2j−1)θ. Thus the m distinct positive numbers tₖ = cot²(kπ/N) are roots of the degree-m polynomial C(N,1)tᵐ − C(N,3)tᵐ⁻¹ + ⋯, and by Vieta their sum is C(N, 3)/C(N, 1) = (2m + 1)(2m)(2m − 1)/(6(2m + 1)) = m(2m − 1)/3. ∎

The first statement follows similarly (or from the partial fraction expansion below). For n = 4: csc²45° + csc²90° + csc²135° = 2 + 1 + 2 = 5 = 15/3.

Cauchy's proof of ζ(2) = π²/6. For 0 < θ < π/2 we have sin θ < θ < tan θ, so cot²θ < 1/θ² < csc²θ = 1 + cot²θ. Summing over θ = kπ/(2m+1), k = 1, …, m:

        m(2m − 1)/3 < ((2m + 1)/π)² ∑ₖ₌₁ᵐ 1/k² < m(2m − 1)/3 + m.

Multiply by π²/(2m + 1)² and let m → ∞: both bounds tend to π²/6.

The product formula for sine

Theorem 8.3 (Euler, 1735). For all z ∈ ℂ,

        sin πz = πz ∏ₙ₌₁^∞ (1 − z²/n²),        π cot πz = 1/z + ∑ₙ₌₁^∞ 2z/(z² − n²),

the product converging absolutely and locally uniformly, the series for z ∉ ℤ.

Proof sketch (Herglotz's trick for the cotangent series). Let f(z) = π cot πz and g(z) = 1/z + ∑ 2z/(z² − n²). Both are meromorphic with simple poles of residue 1 exactly at the integers, both are odd and 1-periodic, and both satisfy the duplication relation h(z/2) + h((z+1)/2) = 2h(z) (for f this is the identity cot x + cot(x + π/2) = 2 cot 2x). The difference Δ = f − g extends to a continuous function on ℝ (the poles cancel) satisfying the same relation. If M is the maximum of |Δ| on [0, 1], attained at x₀, then |Δ(x₀/2)| = |Δ((x₀+1)/2)| = M, and iterating gives points x₀/2ᵏ → 0 with |Δ| = M, so M = |Δ(0)| = 0, because Δ is odd. Hence f = g on ℝ, and by analytic continuation on ℂ. Integrating the logarithmic derivative gives the product formula, the constant being fixed by sin πz/(πz) → 1 as z → 0. ∎

Comparing the coefficient of z² in sin πz/(πz) = 1 − π²z²/6 + ⋯ with the product gives ∑ 1/n² = π²/6 again; this was Euler's original heuristic argument. Setting z = 1/2 gives Wallis's product

        π/2 = ∏ₙ₌₁^∞ 4n²/(4n² − 1) = (2/1)(2/3)(4/3)(4/5)(6/5)(6/7) ⋯ .

✏️ Your Turn

(a) Evaluate ∏ₖ₌₁⁶ sin(kπ/7).
(b) Show that ∑ₖ₌₀ⁿ C(n, k) cos kx = 2ⁿ cosⁿ(x/2) cos(nx/2).
(c) Verify the cotangent identity for m = 1 and m = 2.

Answers: (a) 7/2⁶ = 7/64. (b) ∑ C(n,k) e^(ikx) = (1 + e^(ix))ⁿ = (e^(ix/2) · 2 cos(x/2))ⁿ; take real parts. (c) m = 1: cot²60° = 1/3 = 1·1/3. m = 2: cot²36° + cot²72° = 1.8944… + 0.1055… = 2 = 2·3/3.

─────────────────────────────────
Lesson 9: Fourier Series and Pointwise Convergence
─────────────────────────────────

📌 Key idea of this section:

        f(x) ∼ a₀/2 + ∑ₙ₌₁^∞ (aₙ cos nx + bₙ sin nx),   aₙ = (1/π)∫₋π^π f(x) cos nx dx,   bₙ = (1/π)∫₋π^π f(x) sin nx dx
        If f is piecewise C¹, the series converges at every x to (f(x⁺) + f(x⁻))/2.

Orthogonality

For integers m, n ≥ 0, the product-to-sum formulas give:

        ∫₋π^π cos mx cos nx dx = π δₘₙ (m, n ≥ 1),   ∫₋π^π sin mx sin nx dx = π δₘₙ,   ∫₋π^π sin mx cos nx dx = 0,

and ∫₋π^π 1 dx = 2π. Equivalently, the exponentials eₙ(x) = e^(inx), n ∈ ℤ, are orthonormal in L²(−π, π) with the inner product ⟨f, g⟩ = (1/(2π)) ∫ f ḡ. If a trigonometric polynomial f = a₀/2 + ∑ (aₙ cos nx + bₙ sin nx) is given, its coefficients are recovered by the formulas in the key idea box; for a general integrable 2π-periodic f those formulas define the Fourier coefficients, and the partial sums are Sₙf(x) = a₀/2 + ∑ₖ₌₁ⁿ (aₖ cos kx + bₖ sin kx).

Two basic lemmas

Lemma 9.1 (Bessel). For f ∈ L²(−π, π), a₀²/2 + ∑ (aₙ² + bₙ²) ≤ (1/π)∫ f². In particular aₙ, bₙ → 0.

Proof. Sₙf is the orthogonal projection of f onto the span of 1, cos kx, sin kx (k ≤ n), so ‖Sₙf‖² ≤ ‖f‖². ∎

Lemma 9.2 (Riemann–Lebesgue). For f ∈ L¹(a, b), ∫ₐᵇ f(x) e^(iλx) dx → 0 as λ → ±∞.

Proof. For a step function this is a direct computation (each step contributes O(1/|λ|)). Step functions are dense in L¹, and the integral is a bounded linear functional with norm at most 1 for each λ. ∎

The Dirichlet kernel representation

Substituting the coefficients into the partial sum and using the identity of Lesson 8,

        Sₙf(x) = (1/π) ∫₋π^π f(x + t) Dₙ(t) dt,        Dₙ(t) = sin((n + ½)t)/(2 sin(t/2)),

with (1/π)∫₋π^π Dₙ = 1 (integrate the cosine sum term by term), and (1/π)∫₀^π Dₙ = 1/2.

Theorem 9.3 (Dirichlet, 1829). Let f be 2π-periodic and piecewise C¹ (finitely many points where f or f′ jumps, with one-sided limits of f and f′ everywhere). Then for every x,

        Sₙf(x) → (f(x⁺) + f(x⁻))/2.

Proof. Write Sₙf(x) − f(x⁺)/2 − f(x⁻)/2 = (1/π)∫₀^π (f(x+t) − f(x⁺)) Dₙ(t) dt + (1/π)∫₋π^0 (f(x+t) − f(x⁻)) Dₙ(t) dt. In the first integral the function g(t) = (f(x+t) − f(x⁺))/(2 sin(t/2)) is integrable on (0, π), because the numerator is O(t) by the one-sided derivative and 2 sin(t/2) ≥ 2t/π there. The integral equals (1/π)∫₀^π g(t) sin((n + ½)t) dt, which tends to 0 by Riemann–Lebesgue. The second integral is treated the same way. ∎

If moreover f is continuous and piecewise C¹, the convergence is uniform, since then ∑ (|aₙ| + |bₙ|) < ∞ (by Cauchy–Schwarz and Bessel applied to f′, whose coefficients are naₙ and nbₙ up to sign and order).

Two fundamental examples

The sawtooth. Let f(x) = x on (−π, π), extended 2π-periodically. f is odd, so aₙ = 0, and integration by parts gives bₙ = (2/π)∫₀^π x sin nx dx = 2(−1)ⁿ⁺¹/n. Hence

        x = 2 (sin x − sin 2x/2 + sin 3x/3 − ⋯)        (−π < x < π),

with the series summing to 0 = (π + (−π))/2 at x = ±π. At x = π/2 this is the Leibniz series π/4 = 1 − 1/3 + 1/5 − ⋯. Replacing x by π − x yields (π − x)/2 = ∑ₙ₌₁^∞ sin nx/n for 0 < x < 2π; at x = 1 we get the curious evaluation ∑ sin n/n = (π − 1)/2.

The parabola. Let f(x) = x² on [−π, π]. It is even and continuous with f(π) = f(−π), so the series converges uniformly. Here a₀ = 2π²/3 and aₙ = 4(−1)ⁿ/n², so

        x² = π²/3 + 4 ∑ₙ₌₁^∞ (−1)ⁿ cos nx/n²        (−π ≤ x ≤ π).

At x = π: π² = π²/3 + 4∑ 1/n², giving ∑ 1/n² = π²/6. At x = 0: ∑ (−1)ⁿ⁺¹/n² = π²/12.

Divergence and deeper theorems

Continuity alone does not ensure convergence: du Bois-Reymond (1873) constructed a continuous function whose Fourier series diverges at a point, and Kolmogorov (1926) an L¹ function whose Fourier series diverges everywhere. On the positive side, Carleson's theorem (1966) asserts that the Fourier series of every f ∈ L²(−π, π) converges almost everywhere, extended to Lᵖ, p > 1, by Hunt (1968). Fejér's theorem (1900) gives a robust remedy: the Cesàro means σₙ = (S₀f + ⋯ + Sₙf)/(n + 1) converge uniformly to f for every continuous periodic f, because they are convolutions with the Fejér kernel Fₙ(t) = sin²((n+1)t/2)/(2(n+1) sin²(t/2)), which, unlike Dₙ, is non-negative. As a corollary, trigonometric polynomials are uniformly dense in C(𝕋), a trigonometric form of the Weierstrass approximation theorem.

✏️ Your Turn

(a) Find the Fourier series of f(x) = |x| on [−π, π] and deduce ∑ₖ₌₁^∞ 1/(2k − 1)².
(b) Let f be the odd 2π-periodic function equal to x(π − x) on [0, π]. Show that bₙ = 8/(πn³) for odd n and 0 for even n.
(c) Deduce from (b) that 1 − 1/3³ + 1/5³ − 1/7³ + ⋯ = π³/32.

Answers: (a) a₀ = π, aₙ = 2((−1)ⁿ − 1)/(πn²), so |x| = π/2 − (4/π) ∑ₖ cos((2k−1)x)/(2k−1)². At x = 0, π/2 = (4/π)∑ 1/(2k−1)², so the sum is π²/8. (b) bₙ = (2/π)∫₀^π x(π − x) sin nx dx; integrating by parts twice gives ∫₀^π x(π − x) sin nx dx = 2(1 − (−1)ⁿ)/n³, hence bₙ = 4(1 − (−1)ⁿ)/(πn³). (c) f is continuous and piecewise C¹, so at x = π/2, π²/4 = (8/π) ∑ over odd n of sin(nπ/2)/n³ = (8/π)(1 − 1/3³ + 1/5³ − ⋯); multiply by π/8.

─────────────────────────────────
Lesson 10: Parseval's Identity and the Gibbs Phenomenon
─────────────────────────────────

📌 Key idea of this section:

        (1/π) ∫₋π^π |f|² = a₀²/2 + ∑ₙ₌₁^∞ (aₙ² + bₙ²)        for every f ∈ L²(−π, π)
        Near a jump of size J, the partial sums overshoot by about 0.0895 J, however many terms are taken.

Completeness and Parseval's identity

Theorem 10.1. The system {1, cos nx, sin nx : n ≥ 1} is complete in L²(−π, π): if f ∈ L² has all Fourier coefficients zero, then f = 0 almost everywhere. Consequently Sₙf → f in L² and Parseval's identity holds.

Proof. By Fejér's theorem, every continuous periodic function is a uniform limit of trigonometric polynomials; continuous periodic functions are dense in L²; hence trigonometric polynomials are dense in L². If f is orthogonal to all of them it is orthogonal to a dense subspace, so f = 0. For an orthonormal basis of a Hilbert space, the partial sums of the expansion converge in norm, and Bessel's inequality becomes an equality. ∎

In the language of harmonic analysis, the map f ↦ (f̂(n))ₙ∈ℤ with f̂(n) = (1/(2π))∫ f e^(−inx) dx is a unitary isomorphism L²(𝕋) → ℓ²(ℤ), and Parseval reads (1/(2π))∫|f|² = ∑ |f̂(n)|². The polarised form (1/π)∫ fg = a₀α₀/2 + ∑ (aₙαₙ + bₙβₙ) holds for two functions with coefficients (aₙ, bₙ) and (αₙ, βₙ).

Evaluating series

Applied to the sawtooth f(x) = x, with bₙ = 2(−1)ⁿ⁺¹/n:

        (1/π) ∫₋π^π x² dx = 2π²/3 = ∑ 4/n²,   so  ∑ 1/n² = π²/6.

Applied to f(x) = x², with a₀ = 2π²/3 and aₙ = 4(−1)ⁿ/n²:

        (1/π) ∫₋π^π x⁴ dx = 2π⁴/5 = (2π²/3)²/2 + ∑ 16/n⁴ = 2π⁴/9 + 16 ∑ 1/n⁴,

so 16 ζ(4) = 2π⁴/5 − 2π⁴/9 = 8π⁴/45 and ζ(4) = π⁴/90. Continuing with x⁴, x⁶, … (or using the cotangent series of Lesson 8) yields Euler's formula ζ(2k) = (−1)ᵏ⁺¹ B₂ₖ (2π)²ᵏ/(2(2k)!), with Bernoulli numbers B₂ₖ. By contrast, nothing comparable is known for ζ(3); Apéry proved in 1978 that ζ(3) is irrational.

The isoperimetric inequality

Hurwitz's proof (1901) is a famous application of Parseval. Let a closed C¹ curve of length 2π be parametrised by arc length as z(s) = x(s) + iy(s), 0 ≤ s ≤ 2π, with Fourier coefficients cₙ. Then |z′| = 1 gives (1/(2π))∫ |z′|² = ∑ n²|cₙ|² = 1, while the enclosed area is A = (1/2) Im ∫ z̄ z′ ds = π ∑ n|cₙ|². Hence

        π − A = π ∑ (n² − n)|cₙ|² ≥ 0,

with equality only if cₙ = 0 for all n ∉ {0, 1}, that is, only for a circle. Scaling, every closed curve of length L encloses area at most L²/(4π).

The Gibbs phenomenon

Let f be the 2π-periodic square wave equal to 1 on (0, π) and −1 on (−π, 0). Its coefficients are bₙ = (2/π)∫₀^π sin nx dx = 2(1 − (−1)ⁿ)/(πn), so

        f(x) ∼ (4/π) (sin x + sin 3x/3 + sin 5x/5 + ⋯).

By Dirichlet's theorem the partial sums converge to f at every x ≠ kπ and to 0 at the jumps. The convergence, however, is not uniform, and in a striking way. Consider the partial sum with the first N odd harmonics,

        S(x) = (4/π) ∑ₖ₌₁ᴺ sin((2k − 1)x)/(2k − 1).

Its derivative is S′(x) = (4/π) ∑ cos((2k−1)x) = (2/π) sin(2Nx)/sin x, so the first positive critical point is x = π/(2N). There, putting tₖ = (2k − 1)π/(2N),

        S(π/(2N)) = (2/π) ∑ₖ₌₁ᴺ (sin tₖ/tₖ) · (π/N),

which is a midpoint Riemann sum for an integral, so

        S(π/(2N)) → (2/π) ∫₀^π (sin t)/t dt = (2/π) Si(π) = 1.17897974…

as N → ∞, where Si(π) = 1.85193705… is the sine integral. The partial sums therefore overshoot the value 1 by about 0.179, which is 8.95% of the jump of size 2, and the overshoot does not shrink: it only moves closer to the discontinuity. This is the Gibbs phenomenon, first observed by Henry Wilbraham in 1848 and rediscovered and explained by J. Willard Gibbs in 1898–99 after A. A. Michelson's harmonic analyser displayed the overshoot. By localisation, the same overshoot, (1/π) Si(π) − 1/2 ≈ 0.0895 times the jump, occurs at every jump discontinuity of a piecewise smooth function.

The Gibbs phenomenon matters in signal processing (ringing artefacts in truncated spectra, JPEG compression around sharp edges). It disappears under Fejér summation: since the Fejér kernel is non-negative with integral 1, the Cesàro means of a function with values in [−1, 1] stay in [−1, 1]. Smoother summation methods (Lanczos σ-factors, Riesz means) are used in practice for the same reason.

✏️ Your Turn

(a) Use Parseval for f(x) = |x| to evaluate ∑ₖ₌₁^∞ 1/(2k − 1)⁴.
(b) Let g be 1 on [−1, 1] and 0 on the rest of [−π, π]. Use Parseval to show ∑ₙ₌₁^∞ sin²n/n² = (π − 1)/2.
(c) Compute the limit of the overshoot percentage at the jump of the sawtooth f(x) = x at x = π.

Answers: (a) (1/π)∫x² = 2π²/3 = π²/2 + ∑ 16/(π²(2k−1)⁴), so ∑ 1/(2k−1)⁴ = (π²/6) · (π²/16) = π⁴/96. (b) a₀ = 2/π and aₙ = 2 sin n/(πn), so 2/π = 2/π² + (4/π²)∑ sin²n/n²; multiply by π²/4 to get π/2 = 1/2 + ∑ sin²n/n². (c) The jump is 2π, and the overshoot tends to 0.0895 × 2π ≈ 0.562 above π: again about 8.95% of the jump, as for any jump.

─────────────────────────────────
Lesson 11: Hyperbolic Functions
─────────────────────────────────

📌 Key idea of this section:

        cosh x = (eˣ + e⁻ˣ)/2 = cos(ix),        sinh x = (eˣ − e⁻ˣ)/2 = −i sin(ix)
        cosh²x − sinh²x = 1:  (cosh t, sinh t) parametrises the hyperbola x² − y² = 1

Definitions and Osborn's rule

The hyperbolic functions are the even and odd parts of the exponential: cosh x = (eˣ + e⁻ˣ)/2, sinh x = (eˣ − e⁻ˣ)/2, tanh x = sinh x/cosh x. Their power series are those of cos and sin without the alternating signs, and they solve y″ = y with the initial data (1, 0) and (0, 1). Since cos(iz) = cosh z and sin(iz) = i sinh z, every trigonometric identity yields a hyperbolic one by substituting z ↦ iz:

        cosh²x − sinh²x = 1,   sinh(x + y) = sinh x cosh y + cosh x sinh y,   cosh(x + y) = cosh x cosh y + sinh x sinh y,
        cosh 2x = 2cosh²x − 1,   tanh(x + y) = (tanh x + tanh y)/(1 + tanh x tanh y).

Osborn's rule (1902) summarises this: replace each trigonometric function by its hyperbolic counterpart and then change the sign of every term containing a product (or implied product, as in tanh²) of two hyperbolic sines. The rule is a mnemonic; the theorem behind it is the identity theorem for analytic functions.

The hyperbolic angle

The point (cosh t, sinh t) lies on the right branch of the hyperbola x² − y² = 1, and as t runs over ℝ it traces this branch once. The parameter t is not an arc length; instead it equals twice the area of the hyperbolic sector from (1, 0) to (cosh t, sinh t), just as t is twice the area of the circular sector from (1, 0) to (cos t, sin t). This analogy is exact: in both cases the sector area is (1/2)∫₀ᵗ (x y′ − y x′) ds, and x y′ − y x′ equals cos² + sin² = 1 in one case and cosh² − sinh² = 1 in the other. In special relativity the hyperbolic angle is the rapidity, and the composition law of tanh is the relativistic addition of velocities (in units with c = 1).

Inverse hyperbolic functions

Since the hyperbolic functions are built from eˣ, their inverses are logarithms:

        arsinh x = ln(x + √(x² + 1)),   arcosh x = ln(x + √(x² − 1)) (x ≥ 1),   artanh x = (1/2) ln((1 + x)/(1 − x)) (|x| < 1).

For example, cosh x = 3 has the solutions x = ±ln(3 + 2√2) = ±2 ln(1 + √2), since 3 + 2√2 = (1 + √2)². The derivatives (arsinh x)′ = 1/√(1 + x²) and (arcosh x)′ = 1/√(x² − 1) make these functions the standard antiderivatives in integration, complementing arcsin and arctan.

The Gudermannian

The function gd(x) = ∫₀ˣ dt/cosh t = arctan(sinh x) = 2 arctan(tanh(x/2)) relates circular and hyperbolic functions without complex numbers. If θ = gd(x), then

        tan θ = sinh x,   sec θ = cosh x,   sin θ = tanh x.

Indeed tan θ = sinh x by definition, sec θ = √(1 + sinh²x) = cosh x (θ ∈ (−π/2, π/2) so sec θ > 0), and sin θ = tan θ/sec θ = tanh x. The inverse function gd⁻¹(φ) = ln tan(π/4 + φ/2) = artanh(sin φ) is the vertical coordinate of the Mercator projection at latitude φ, since that coordinate is ∫₀^φ sec t dt. Mercator published his chart in 1569, and Edward Wright computed its spacing in 1599 by summing secants numerically, in effect integrating sec φ decades before calculus.

Hyperbolic trigonometry

In the hyperbolic plane of curvature −1, the hyperbolic functions play the role that circular functions play on the unit sphere. A geodesic triangle with sides a, b, c and angles A, B, C satisfies

        cosh c = cosh a cosh b − sinh a sinh b cos C,        sin A/sinh a = sin B/sinh b = sin C/sinh c,

and its area is π − (A + B + C), the angle defect (Gauss–Bonnet again, with curvature −1). Formally these laws are obtained from the spherical ones by the substitution a ↦ ia, reflecting the fact that the hyperbolic plane is a "sphere of imaginary radius". In the hyperboloid model {x₀² − x₁² − x₂² = 1, x₀ > 0}, the proof of the law of cosines is the same vector computation as in Lesson 6 with the Euclidean inner product replaced by the Minkowski form.

The catenary

A uniform flexible chain hanging under gravity takes the shape y = a cosh(x/a). Indeed, balancing the horizontal tension H and the weight of the arc above [0, x] gives y′(x) = (w/H) · (arc length from 0 to x), and differentiating, y″ = (1/a)√(1 + y′²) with a = H/w. With p = y′ this separates to dp/√(1 + p²) = dx/a, so arsinh p = x/a and y = a cosh(x/a) + const. The arc length from 0 to x is a sinh(x/a).

✏️ Your Turn

(a) Compute cosh(ln 2), sinh(ln 2) and tanh(ln 2).
(b) Evaluate gd(ln(2 + √3)).
(c) Find the angles and area of an equilateral triangle in the hyperbolic plane whose sides satisfy cosh a = 2.

Answers: (a) cosh(ln 2) = (2 + 1/2)/2 = 5/4, sinh(ln 2) = (2 − 1/2)/2 = 3/4, tanh(ln 2) = 3/5. (b) sinh(ln(2 + √3)) = ((2 + √3) − (2 − √3))/2 = √3, so gd = arctan √3 = π/3. (c) From the law of cosines, cos A = (cosh²a − cosh a)/sinh²a = cosh a/(cosh a + 1) = 2/3, so A = arccos(2/3) ≈ 48.19°, and the area is π − 3 arccos(2/3) ≈ 0.6184.

─────────────────────────────────
Lesson 12: Exact Values: Radicals, Constructibility and Niven's Theorem
─────────────────────────────────

📌 Key idea of this section:

        For n ≥ 3, 2cos(2π/n) is an algebraic integer of degree φ(n)/2.
        Niven: if θ/π ∈ ℚ and sin θ ∈ ℚ, then sin θ ∈ {0, ±1/2, ±1}.

Algebraic integers and cyclotomic fields

A complex number is an algebraic integer if it is a root of a monic polynomial with integer coefficients. The algebraic integers form a ring, and a rational number that is an algebraic integer is an ordinary integer (by the rational root theorem). If ζ = e^(2πik/n), then ζ is a root of zⁿ − 1, so ζ and ζ⁻¹ are algebraic integers, and therefore 2 cos(2πk/n) = ζ + ζ⁻¹ is an algebraic integer. More explicitly, 2cos nθ = 2Tₙ(cos θ) is a monic polynomial with integer coefficients in 2cos θ (the polynomial Cₙ(y) = 2Tₙ(y/2), for example C₃(y) = y³ − 3y).

Theorem 12.1. For n ≥ 3, the number 2 cos(2π/n) has degree φ(n)/2 over ℚ, where φ is Euler's totient function. Its conjugates are the numbers 2 cos(2πk/n) with 1 ≤ k < n/2 and gcd(k, n) = 1.

Proof. The primitive n-th roots of unity are the roots of the cyclotomic polynomial Φₙ, which is irreducible over ℚ (Gauss for prime n, Dedekind in general), so [ℚ(ζ) : ℚ] = φ(n). The field ℚ(ζ + ζ⁻¹) is the fixed field of complex conjugation, which is a non-trivial automorphism for n ≥ 3, so its degree is φ(n)/2. Its conjugates are the images ζᵏ + ζ⁻ᵏ under the Galois group (ℤ/nℤ)ˣ. ∎

For example, cos 1° = cos(2π/360) has degree φ(360)/2 = 96/2 = 48, and 2 cos(2π/7) has degree 3, with minimal polynomial y³ + y² − 2y − 1 whose roots are 2cos(2π/7), 2cos(4π/7), 2cos(6π/7).

Niven's theorem

Theorem 12.2 (Niven, 1956). If θ is a rational multiple of π and cos θ is rational, then cos θ ∈ {0, ±1/2, ±1}. The same holds for sin θ.

Proof. Write θ = 2πk/n. Then 2 cos θ is an algebraic integer and, by hypothesis, rational, hence an integer. Since |2 cos θ| ≤ 2, it lies in {−2, −1, 0, 1, 2}. For the sine, sin θ = cos(π/2 − θ), and π/2 − θ is again a rational multiple of π. ∎

Corollary 12.3. If θ is a rational multiple of π and tan θ is rational, then tan θ ∈ {0, ±1}.

Proof. With q = tan θ, cos 2θ = (1 − q²)/(1 + q²) is rational, and 2θ is a rational multiple of π, so cos 2θ ∈ {0, ±1/2, ±1}. The value 1 gives q = 0, the value 0 gives q² = 1, the value −1 is impossible for finite q, and the values ±1/2 give q² = 1/3 or q² = 3, which have no rational solutions. ∎

A geometric consequence: the only regular polygon whose vertices can all be points of the integer lattice ℤ² is the square. Indeed, two consecutive edges are lattice vectors u, v of equal length, so cos(2π/n) = u·v/|u|² is rational and n ∈ {3, 4, 6}. The equilateral triangle is impossible because its area (√3/4)|u|² is irrational while a lattice triangle has area in (1/2)ℤ, and the hexagon is excluded because alternate vertices of a lattice hexagon would form a lattice equilateral triangle.

Constructible angles

A real number is constructible with straightedge and compass from the unit length if and only if it lies in a tower ℚ = K₀ ⊂ K₁ ⊂ ⋯ ⊂ Kₘ with each [Kᵢ₊₁ : Kᵢ] = 2. In particular a constructible number has degree a power of 2. Applying this to cos(2π/n) and using Theorem 12.1, together with the fact that ℚ(ζ) is an abelian extension (so a degree that is a power of 2 does give such a tower), one obtains:

Theorem 12.4 (Gauss–Wantzel). The regular n-gon is constructible if and only if φ(n) is a power of 2, that is, n = 2ᵏ p₁ ⋯ pᵣ with distinct Fermat primes pᵢ = 2^(2^m) + 1.

The known Fermat primes are 3, 5, 17, 257 and 65537. Gauss announced the construction of the 17-gon in 1796, giving in effect

        16 cos(2π/17) = −1 + √17 + √(34 − 2√17) + 2√(17 + 3√17 − √(34 − 2√17) − 2√(34 + 2√17)),

which evaluates to 14.91955…, so cos(2π/17) = 0.93247… . The regular 9-gon is not constructible: by the triple-angle formula, y = 2cos(2π/9) satisfies y³ − 3y = 2cos(2π/3) = −1, and y³ − 3y + 1 has no rational roots (±1 give −1 and 3), hence is irreducible of degree 3. This is also the classical proof that the angle 60° cannot be trisected with straightedge and compass.

Radicals and the casus irreducibilis

Every cos(2πk/n) can be expressed by radicals, because the Galois group of ℚ(ζ)/ℚ is abelian, hence solvable. But "radicals" may require complex numbers even though the value is real. For y = 2cos(2π/7), Cardano's formula applied to y³ + y² − 2y − 1 gives

        y = (−1 + ∛((7 + 21√−3)/2) + ∛((7 − 21√−3)/2))/3,

with complex cube roots. This is unavoidable: by the casus irreducibilis theorem (Hölder, 1891), if an irreducible cubic over ℚ has three real roots, none of them can be expressed using real radicals alone. Thus cos(2π/7) is expressible in radicals but not in real radicals.

Transcendence

If α ≠ 0 is algebraic, then sin α and cos α are transcendental. Indeed, by the Lindemann–Weierstrass theorem e^(iα) is transcendental, and if cos α were algebraic then so would be sin α = ±√(1 − cos²α) and hence e^(iα) = cos α + i sin α. The same holds for tan α, because e^(2iα) = (1 + i tan α)/(1 − i tan α) would otherwise be algebraic. Thus cos 1, sin 1 and tan 1 (in radians) are transcendental, whereas cos 1° = cos(π/180) is algebraic of degree 48. The contrast reflects the fact that π itself is transcendental: degrees are rational multiples of π radians, and radians that are rational numbers are not.

✏️ Your Turn

(a) Find all values cos²θ can take if θ is a rational multiple of π and cos²θ is rational.
(b) Show that 2cos(2π/7) satisfies y³ + y² − 2y − 1 = 0.
(c) Explain why the regular 7-gon is not constructible.

Answers: (a) cos 2θ = 2cos²θ − 1 is rational and 2θ is a rational multiple of π, so cos 2θ ∈ {0, ±1/2, ±1}, giving cos²θ ∈ {0, 1/4, 1/2, 3/4, 1}; each occurs (θ = π/2, π/3, π/4, π/6, 0). (b) With ζ = e^(2πi/7), y = ζ + ζ⁶, y² = ζ² + ζ⁵ + 2, y³ = ζ³ + ζ⁴ + 3(ζ + ζ⁶). Then y³ + y² − 2y − 1 = (ζ + ζ² + ⋯ + ζ⁶) + 1 = 0. (c) Its degree is φ(7)/2 = 3, not a power of 2.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped by difficulty. Core problems check the definitions and standard computations of each lesson; Advanced problems require combining several results or writing a short proof; Challenge problems are at the level of a qualifying examination and some of them develop results that were only sketched in the lessons. Angles are in radians unless marked with a degree sign, and numerical answers should be given to the stated accuracy.

Core (Problems 1–20)

  1. Compute cos(1/2) to six decimal places from the power series, and justify the accuracy with an explicit error bound.
  2. Prove from the power series that (sin x)′ = cos x and (cos x)′ = −sin x, and deduce that both functions satisfy y″ = −y.
  3. Solve y″ + y = 0 with y(0) = 1 and y′(0) = √3, and write the solution in the form R cos(x − φ).
  4. Derive the formulas for cos 2θ and sin 2θ from Euler's formula, and deduce cos²θ = (1 + cos 2θ)/2.
  5. Linearise cos⁴θ and use the result to evaluate ∫₀^(2π) cos⁴θ dθ.
  6. Find the exact values of sin 75°, cos 15° and tan 15°.
  7. Compute arcsin(sin 5) and arccos(cos 5) exactly.
  8. Prove by differentiation that arctan x + arctan(1/x) = π/2 for x > 0. What is the value for x < 0?
  9. Show that 2 arctan(1/3) + arctan(1/7) = π/4.
  10. Find all three angles (to two decimals, in degrees) of the triangle with sides 7, 8, 9.
  11. A triangle has a = 5, b = 8 and C = 60°. Find c and the area.
  12. In a triangle, a = 6, b = 8 and A = 30°. Find both possible values of c exactly.
  13. For the 5–12–13 right triangle, find R, r and the distance OI between the circumcentre and the incentre.
  14. Find the great-circle distance between the points (0° N, 0° E) and (45° N, 90° E) on a sphere of radius 6371 km.
  15. A spherical triangle has angles 80°, 70° and 60°. Find its area on the unit sphere and on a sphere of radius 6371 km.
  16. Show that c = cos(π/9) is a root of 8x³ − 6x − 1.
  17. Compute T₃(T₂(x)) and check that it equals T₆(x).
  18. Evaluate ∑ₖ₌₁¹⁰ sin(kπ/3) using the closed formula for ∑ sin kx, and check the result directly.
  19. Find the Fourier series of f(x) = |sin x| and deduce the value of ∑ₘ₌₁^∞ 1/(4m² − 1).
  20. Solve sinh x = 3/4 and tanh x = 1/2.

Advanced (Problems 21–45)

  21. Show from the series that 5/6 < sin 1 < 101/120.
  22. Prove that the set of real periods of cos is exactly 2πℤ.
  23. Prove that sin 3θ = 4 sin θ sin(π/3 − θ) sin(π/3 + θ).
  24. Estimate π from Machin's formula using five terms of the series for arctan(1/5) and two terms of the series for arctan(1/239), and bound the error.
  25. Show that arctan(1/(2n²)) = arctan(n/(n + 1)) − arctan((n − 1)/n), and evaluate ∑ₙ₌₁^∞ arctan(1/(2n²)).
  26. Find all complex solutions of cos z = 3.
  27. Show that |sin(x + iy)|² = sin²x + sinh²y, and deduce again that all zeros of sin in ℂ are real.
  28. Use the law of tangents to solve the triangle with a = 9, b = 5 and C = 60°.
  29. Prove Mollweide's formula (a + b)/c = cos((A − B)/2)/sin(C/2).
  30. Prove that in every triangle cot A cot B + cot B cot C + cot C cot A = 1.
  31. Prove r = 4R sin(A/2) sin(B/2) sin(C/2) and verify it for the 13–14–15 triangle.
  32. Prove Δ = 2R² sin A sin B sin C and verify it for the 13–14–15 triangle.
  33. A spherical right triangle (C = 90°) on the unit sphere has legs a = b = 45°. Find c, the angles A and B, and the area.
  34. Show that an equilateral spherical triangle with side a has angle A with cos A = cos a/(1 + cos a). For which a is A = 120°, and what configuration is this?
  35. Derive the haversine formula from the spherical law of cosines, and explain why it is preferred for short distances.
  36. Two points lie at latitude 60° N with longitudes 0° and 180°. Compare the great-circle distance with the distance along the parallel, in degrees of arc.
  37. Compute T₂(T₃(x)) and explain without calculation why it equals T₃(T₂(x)).
  38. Verify that T₅′ = 5U₄ by direct computation.
  39. Find the best uniform approximation of x³ on [0, 2] by polynomials of degree at most 2, and its error.
  40. Evaluate ∑ₖ₌₁⁵ csc²(kπ/6) directly and compare with Theorem 8.2.
  41. Evaluate cos(π/7) cos(2π/7) cos(3π/7) and cos(π/7) cos(2π/7) cos(4π/7).
  42. For a ∉ ℤ, find the Fourier series of cos(ax) on [−π, π] and deduce the partial fraction expansion of π cot πa.
  43. Use Parseval's identity for the odd 2π-periodic function equal to x(π − x) on [0, π] to evaluate the sum of 1/n⁶ over odd n.
  44. Solve 2 cosh x + sinh x = 2.
  45. Prove that gd(x) = 2 arctan(tanh(x/2)) and evaluate ∫₀^∞ sech x dx.

Challenge (Problems 46–60)

  46. Determine all rational numbers r such that cos(rπ) is rational.
  47. Suppose θ is a rational multiple of π and both cos θ and sin θ are rational. Show that (cos θ, sin θ) is one of (±1, 0), (0, ±1).
  48. Find the minimal polynomials over ℚ of 2 cos(2π/5) and 2 cos(2π/9), and check their degrees against Theorem 12.1.
  49. Find the degree of cos(2π/n) over ℚ for n = 15, 17 and 360, and decide which of the regular 15-gon and 17-gon are constructible.
  50. Show that for 0 < δ < π the series ∑ sin nx/n converges uniformly on [δ, 2π − δ].
  51. For the sawtooth f(x) = x on (−π, π), show that the maximum of the partial sum Sₙf on (0, π) tends to 2 Si(π) ≈ 3.704.
  52. Derive Wallis's product from the product formula for sine, and show that the partial products Pₙ = ∏ₖ₌₁ⁿ 4k²/(4k² − 1) increase to π/2.
  53. Use Theorem 8.1 to prove ∫₀^π ln sin x dx = −π ln 2, justifying the passage to the limit.
  54. Prove that ∑ₖ₌₀ⁿ⁻¹ csc²(x + kπ/n) = n² csc²(nx) and deduce ∑ₖ₌₁ⁿ⁻¹ csc²(kπ/n) = (n² − 1)/3.
  55. In the hyperbolic plane of curvature −1, find the side length of the equilateral triangle with angles π/4, and its area.
  56. Show that sin 1° is algebraic of degree 48 over ℚ.
  57. Find all twice-differentiable f: ℝ → ℝ with f(0) = 1 satisfying f(x + y) + f(x − y) = 2 f(x) f(y) for all x, y.
  58. Show that the Lebesgue constants Lₙ = (1/π) ∫₋π^π |Dₙ(t)| dt satisfy Lₙ ≥ (4/π²) ∑ₖ₌₁ⁿ 1/k, and explain why this implies that some continuous function has a Fourier series diverging at 0.
  59. Use the cotangent expansion to prove ∑ₙ₌₁^∞ 1/(n² + 1) = (π coth π − 1)/2.
  60. Using the minimal polynomial of 2 cos(2π/7), evaluate sec(2π/7) + sec(4π/7) + sec(6π/7).

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. cos(1/2) ≈ 1 − 1/8 + 1/384 − 1/46080 = 0.87758247. The cosine series at x = 1/2 is alternating with decreasing terms, so the error is less than the first omitted term (1/2)⁸/8! = 1/10 321 920 ≈ 9.7 × 10⁻⁸. Hence cos(1/2) = 0.877582 to six decimals (the true value is 0.8775825619…).
  2. Both series converge for all x, so they may be differentiated term by term. The derivative of ∑ (−1)ⁿ x²ⁿ⁺¹/(2n+1)! is ∑ (−1)ⁿ x²ⁿ/(2n)! = cos x, and the derivative of ∑ (−1)ⁿ x²ⁿ/(2n)! is ∑ₙ≥₁ (−1)ⁿ x²ⁿ⁻¹/(2n−1)! = −∑ₘ≥₀ (−1)ᵐ x²ᵐ⁺¹/(2m+1)! = −sin x. Differentiating once more gives sin″ = −sin and cos″ = −cos.
  3. By Theorem 1.2, y = cos x + √3 sin x. With R = √(1 + 3) = 2 and (cos φ, sin φ) = (1/2, √3/2), φ = π/3, so y = 2 cos(x − π/3).
  4. e^(2iθ) = (e^(iθ))² gives cos 2θ + i sin 2θ = cos²θ − sin²θ + 2i sin θ cos θ. Comparing parts, cos 2θ = cos²θ − sin²θ and sin 2θ = 2 sin θ cos θ. Using sin²θ = 1 − cos²θ, cos 2θ = 2cos²θ − 1, so cos²θ = (1 + cos 2θ)/2.
  5. cos⁴θ = ((1 + cos 2θ)/2)² = 1/4 + (1/2)cos 2θ + (1/4)cos²2θ = 3/8 + (1/2)cos 2θ + (1/8)cos 4θ. The cosine terms integrate to 0 over a period, so ∫₀^(2π) cos⁴θ dθ = 2π · 3/8 = 3π/4.
  6. sin 75° = sin(45° + 30°) = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4, and cos 15° = sin 75° = (√6 + √2)/4. tan 15° = tan(45° − 30°) = (1 − 1/√3)/(1 + 1/√3) = (√3 − 1)/(√3 + 1) = 2 − √3.
  7. 5 lies in [3π/2, 5π/2] (since 3π/2 ≈ 4.712 and 5π/2 ≈ 7.854), where sin is increasing and x − 2π ∈ [−π/2, π/2]; so arcsin(sin 5) = 5 − 2π ≈ −1.2832. 5 lies in [π, 2π], where 2π − x ∈ [0, π] and cos(2π − x) = cos x; so arccos(cos 5) = 2π − 5 ≈ 1.2832.
  8. The derivative of arctan x + arctan(1/x) is 1/(1 + x²) + (−1/x²)/(1 + 1/x²) = 0 on each of (0, ∞) and (−∞, 0). At x = 1 the value is π/4 + π/4 = π/2; at x = −1 it is −π/2. So the sum is π/2 for x > 0 and −π/2 for x < 0.
  9. 2 arctan(1/3) = arctan((2/3)/(1 − 1/9)) = arctan(3/4), valid since (1/3)² < 1. Then arctan(3/4) + arctan(1/7) = arctan((3/4 + 1/7)/(1 − 3/28)) = arctan((25/28)/(25/28)) = arctan 1 = π/4, valid since (3/4)(1/7) < 1.
  10. With a = 7, b = 8, c = 9: cos A = (64 + 81 − 49)/144 = 2/3, so A ≈ 48.19°; cos B = (49 + 81 − 64)/126 = 11/21, so B ≈ 58.41°; cos C = (49 + 64 − 81)/112 = 2/7, so C ≈ 73.40°. The sum is 180.00°, as it must be.
  11. c² = 25 + 64 − 2·5·8·(1/2) = 49, so c = 7. Area = (1/2)·5·8·sin 60° = 10√3 ≈ 17.32.
  12. The law of cosines for the angle A gives 36 = 64 + c² − 2·8·c·(√3/2), that is c² − 8√3 c + 28 = 0. Hence c = 4√3 ± √(48 − 28) = 4√3 ± 2√5, so c ≈ 11.400 or c ≈ 2.456. Both roots are positive, matching the two triangles (B ≈ 41.81° and B ≈ 138.19°) of the ambiguous case.
  13. The hypotenuse is a diameter of the circumcircle, so R = 13/2. Δ = 30 and s = 15, so r = Δ/s = 2. By Euler's formula OI² = R(R − 2r) = (13/2)(5/2) = 65/4, so OI = √65/2 ≈ 4.031.
  14. cos σ = sin 0° sin 45° + cos 0° cos 45° cos 90° = 0, so σ = π/2 and the distance is 6371 · π/2 ≈ 10 007.5 km.
  15. The spherical excess is 80° + 70° + 60° − 180° = 30° = π/6, so the area is π/6 ≈ 0.5236 on the unit sphere and (π/6) · 6371² ≈ 2.125 × 10⁷ km² on the sphere of radius 6371 km.
  16. T₃(c) = cos(3 · π/9) = cos(π/3) = 1/2, so 4c³ − 3c = 1/2, that is 8c³ − 6c − 1 = 0.
  17. T₃(T₂(x)) = 4(2x² − 1)³ − 3(2x² − 1) = 4(8x⁶ − 12x⁴ + 6x² − 1) − 6x² + 3 = 32x⁶ − 48x⁴ + 18x² − 1, which is T₆(x) as computed in Lesson 7.
  18. ∑ₖ₌₁ⁿ sin kx = sin(nx/2) sin((n+1)x/2)/sin(x/2). With n = 10 and x = π/3: sin(5π/3) sin(11π/6)/sin(π/6) = (−√3/2)(−1/2)/(1/2) = √3/2. Directly, the values sin(kπ/3) repeat with period 6 and sum to 0 over a period, so the sum equals the sum for k = 7, …, 10, namely √3/2 + √3/2 + 0 − √3/2 = √3/2.
  19. f is even, so bₙ = 0. a₀ = (2/π)∫₀^π sin x dx = 4/π. For n ≥ 2, aₙ = (1/π)∫₀^π (sin(1 + n)x + sin(1 − n)x) dx, which is 0 for odd n and −4/(π(n² − 1)) for even n; also a₁ = 0. Hence |sin x| = 2/π − (4/π) ∑ₘ₌₁^∞ cos 2mx/(4m² − 1), with uniform convergence since f is continuous and piecewise C¹. At x = 0, ∑ 1/(4m² − 1) = 1/2 (which also follows by telescoping 1/(4m² − 1) = (1/2)(1/(2m − 1) − 1/(2m + 1))).
  20. arsinh(3/4) = ln(3/4 + √(9/16 + 1)) = ln(3/4 + 5/4) = ln 2. artanh(1/2) = (1/2) ln((1 + 1/2)/(1 − 1/2)) = (1/2) ln 3 ≈ 0.5493.

Advanced

  21. For 0 < x ≤ 2, the bracketing argument of Lesson 1 gives x − x³/6 < sin x < x − x³/6 + x⁵/120: the lower bound because the pairs x^(4k+1)/(4k+1)! − x^(4k+3)/(4k+3)! are positive, the upper bound because sin x − (x − x³/6 + x⁵/120) = −(x⁷/7! − x⁹/9!) − ⋯ is a sum of negative pairs. At x = 1 this gives 5/6 < sin 1 < 1 − 1/6 + 1/120 = 101/120 (numerically 0.8333 < 0.8415 < 0.8417).
  22. If cos(x + p) = cos x for all x, then x = 0 gives cos p = 1, and x = π/2 gives cos(π/2 + p) = −sin p = 0. So e^(ip) = 1 and p ∈ 2πℤ by Theorem 2.4. Conversely every element of 2πℤ is a period by Theorem 2.3.
  23. sin(π/3 − θ) sin(π/3 + θ) = sin²(π/3) − sin²θ = 3/4 − sin²θ (from 2 sin α sin β = cos(α − β) − cos(α + β) and cos 2u = 1 − 2 sin²u). Thus 4 sin θ (3/4 − sin²θ) = 3 sin θ − 4 sin³θ = sin 3θ.
  24. π ≈ 16(1/5 − 1/(3·5³) + 1/(5·5⁵) − 1/(7·5⁷) + 1/(9·5⁹)) − 4(1/239 − 1/(3·239³)) = 3.14159268… Both series are alternating with decreasing terms, so the error is at most 16/(11·5¹¹) + 4/(5·239⁵) ≈ 2.98 × 10⁻⁸ + 1.0 × 10⁻¹². The actual error is 2.88 × 10⁻⁸.
  25. tan(arctan(n/(n+1)) − arctan((n−1)/n)) = (n/(n+1) − (n−1)/n)/(1 + (n−1)/(n+1)) = (1/(n(n+1)))/((2n)/(n+1)) = 1/(2n²), and both arctangent differences lie in (0, π/2), so the identity holds. The partial sums telescope to arctan(N/(N + 1)) − arctan 0, which tends to arctan 1 = π/4.
  26. cos z = cos w if and only if z = ±w + 2kπ (since cos z − cos w = −2 sin((z+w)/2) sin((z−w)/2) and the zeros of sin are kπ). One solution is w = i ln(3 + 2√2), since cos(iy) = cosh y and arcosh 3 = ln(3 + 2√2). So z = 2kπ ± i ln(3 + 2√2), k ∈ ℤ, where ln(3 + 2√2) = 2 ln(1 + √2) ≈ 1.7627.
  27. sin(x + iy) = sin x cos(iy) + cos x sin(iy) = sin x cosh y + i cos x sinh y. Hence |sin(x + iy)|² = sin²x cosh²y + cos²x sinh²y = sin²x (1 + sinh²y) + cos²x sinh²y = sin²x + sinh²y. This vanishes only if sin x = 0 and sinh y = 0, that is y = 0 and x ∈ πℤ.
  28. (A + B)/2 = 60° and tan((A − B)/2) = ((9 − 5)/(9 + 5)) cot 30° = (2/7)√3 ≈ 0.49487, so (A − B)/2 ≈ 26.33°. Hence A ≈ 86.33° and B ≈ 33.67°. Then c = a sin C/sin A ≈ 7.810, in agreement with the law of cosines c² = 81 + 25 − 45 = 61.
  29. By the law of sines, (a + b)/c = (sin A + sin B)/sin C = 2 sin((A+B)/2) cos((A−B)/2)/(2 sin(C/2) cos(C/2)). Since (A + B)/2 = π/2 − C/2, sin((A+B)/2) = cos(C/2), which cancels and leaves cos((A − B)/2)/sin(C/2).
  30. If one angle is right, say C, then cot C = 0 and cot A cot B = 1 since B = π/2 − A. Otherwise, from tan A + tan B + tan C = tan A tan B tan C (Lesson 5), divide by tan A tan B tan C to get cot B cot C + cot A cot C + cot A cot B = 1.
  31. By the half-angle formulas, sin(A/2) sin(B/2) sin(C/2) = √((s−b)(s−c)/(bc)) · √((s−c)(s−a)/(ca)) · √((s−a)(s−b)/(ab)) = (s−a)(s−b)(s−c)/(abc). Using abc = 4RΔ and Δ² = s(s−a)(s−b)(s−c), 4R sin(A/2) sin(B/2) sin(C/2) = (s−a)(s−b)(s−c)/Δ = Δ/s = r. For 13–14–15: sin(A/2) = √((1 − 3/5)/2) = 1/√5, sin(B/2) = √((1 − 33/65)/2) = 4/√65, sin(C/2) = √((1 − 5/13)/2) = 2/√13, and 4 · (65/8) · 8/(√5 · √65 · √13) = 260/65 = 4 = r.
  32. Δ = (1/2)ab sin C and a = 2R sin A, b = 2R sin B give Δ = 2R² sin A sin B sin C. For 13–14–15: sin A = 4/5, sin B = 56/65, sin C = 12/13, and 2(65/8)² · (4/5)(56/65)(12/13) = (4225/32) · (2688/4225) = 84, which is the area.
  33. cos c = cos 45° cos 45° = 1/2, so c = 60°. Napier's rule for right triangles gives tan A = tan a/sin b = 1/(√2/2) = √2 (this follows from the laws of sines and cosines), so A = B = arctan √2 ≈ 54.74°. The area is 2 arctan √2 + π/2 − π ≈ 0.3398 (about 19.47°).
  34. The law of cosines with all sides a gives cos a = cos²a + sin²a cos A, so cos A = (cos a − cos²a)/(1 − cos²a) = cos a/(1 + cos a). A = 120° requires cos a/(1 + cos a) = −1/2, that is cos a = −1/3, a ≈ 109.47°. The area is 3 · 2π/3 − π = π, a quarter of the sphere: these are the faces of the regular tetrahedron projected radially onto its circumscribed sphere.
  35. Write cos σ = 1 − 2 hav σ, cos(φ₂ − φ₁) = cos φ₁ cos φ₂ + sin φ₁ sin φ₂ = 1 − 2 hav(φ₂ − φ₁) and cos Δλ = 1 − 2 hav Δλ. Substituting into cos σ = sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos Δλ gives 1 − 2 hav σ = 1 − 2 hav(φ₂ − φ₁) − 2 cos φ₁ cos φ₂ hav Δλ, the haversine formula. For small σ, hav σ ≈ σ²/4 is computed with full relative precision, while cos σ ≈ 1 − σ²/2 loses about twice as many digits as σ has leading zeros.
  36. cos σ = sin²60° + cos²60° cos 180° = 3/4 − 1/4 = 1/2, so σ = 60° (the great circle passes over the pole, 30° + 30°). Along the parallel the distance is 180° · cos 60° = 90° of arc. The great circle is shorter by a third.
  37. T₂(T₃(x)) = 2(4x³ − 3x)² − 1 = 32x⁶ − 48x⁴ + 18x² − 1. Both compositions equal T₆, because Tₘ(Tₙ(cos θ)) = cos mnθ = Tₙ(Tₘ(cos θ)) for all θ, and polynomials agreeing on [−1, 1] are equal.
  38. T₅′ = 80x⁴ − 60x² + 5 = 5(16x⁴ − 12x² + 1) = 5U₄, with U₄ = 2xU₃ − U₂ = 2x(8x³ − 4x) − (4x² − 1) = 16x⁴ − 12x² + 1.
  39. Map [0, 2] to [−1, 1] by t = x − 1. The error x³ − p(x) is a monic cubic in t, minimised by (1/4)T₃(t) = t³ − (3/4)t. So p(x) = x³ − (x − 1)³ + (3/4)(x − 1) = 3x² − (9/4)x + 1/4, with uniform error 1/4, equioscillating at x = 0, 1/2, 3/2, 2.
  40. csc²30° + csc²60° + csc²90° + csc²120° + csc²150° = 4 + 4/3 + 1 + 4/3 + 4 = 35/3, and (6² − 1)/3 = 35/3.
  41. With x = π/7, cos x cos 2x cos 4x = sin 8x/(8 sin x) = sin(8π/7)/(8 sin(π/7)) = −1/8, since sin(8π/7) = −sin(π/7). As cos(3π/7) = −cos(4π/7), the first product is +1/8.
  42. ∫₋π^π cos ax cos nx dx = sin((a−n)π)/(a−n) + sin((a+n)π)/(a+n) = (−1)ⁿ sin(πa) · 2a/(a² − n²). So cos ax = (sin πa/π)(1/a + ∑ₙ₌₁^∞ (−1)ⁿ 2a cos nx/(a² − n²)), uniformly on [−π, π] since the periodic extension is continuous and piecewise C¹. At x = π, cos nπ (−1)ⁿ = 1 and dividing by sin πa/π gives π cot πa = 1/a + ∑ 2a/(a² − n²).
  43. bₙ = 8/(πn³) for odd n and 0 for even n (Lesson 9). (1/π)∫₋π^π f² = (2/π)∫₀^π x²(π − x)² dx = (2/π)(π⁵/30) = π⁴/15. Parseval gives π⁴/15 = (64/π²) ∑ over odd n of 1/n⁶, so the sum is π⁶/960 ≈ 1.00145. (Check: (1 − 2⁻⁶)ζ(6) = (63/64)(π⁶/945) = π⁶/960.)
  44. With u = eˣ: 2 cosh x + sinh x = (3/2)u + (1/2)u⁻¹ = 2, so 3u² − 4u + 1 = 0, u = 1 or u = 1/3. Hence x = 0 or x = −ln 3.
  45. Let g(x) = 2 arctan(tanh(x/2)). Then g′(x) = 2 · (1/2) sech²(x/2)/(1 + tanh²(x/2)) = 1/(cosh²(x/2) + sinh²(x/2)) = 1/cosh x, and g(0) = 0 = gd(0), so g = gd. Hence ∫₀^∞ sech x dx = lim gd(x) = 2 arctan 1 = π/2.

Challenge

  46. By Niven's theorem cos(rπ) ∈ {0, ±1/2, ±1}. cos(rπ) = ±1 iff r ∈ ℤ; cos(rπ) = 0 iff r ∈ 1/2 + ℤ; cos(rπ) = ±1/2 iff r ∈ ±1/3 + ℤ. Altogether: cos(rπ) ∈ ℚ if and only if 2r ∈ ℤ or 3r ∈ ℤ.
  47. By Niven's theorem both values lie in {0, ±1/2, ±1}. Since cos²θ + sin²θ = 1, the only possibilities are {cos²θ, sin²θ} = {0, 1} or {1/4, 3/4}; the latter requires a square equal to 3/4, which is not the square of a rational. Hence (cos θ, sin θ) ∈ {(±1, 0), (0, ±1)}.
  48. 2 cos(2π/5) = (√5 − 1)/2 is a root of y² + y − 1, irreducible because √5 is irrational; degree 2 = φ(5)/2. y = 2 cos(2π/9) satisfies y³ − 3y = 2 cos(2π/3) = −1, so y³ − 3y + 1 = 0; this cubic has no rational root (±1 give −1 and 3), so it is irreducible, of degree 3 = φ(9)/2.
  49. φ(15) = 8, φ(17) = 16, φ(360) = 96, so the degrees of cos(2π/n) are 4, 8 and 48. Both φ(15) and φ(17) are powers of 2 (15 = 3·5 and 17 are products of distinct Fermat primes), so the 15-gon and the 17-gon are both constructible.
  50. Let Sₙ(x) = ∑ₖ₌₁ⁿ sin kx. By Lesson 8, |Sₙ(x)| = |sin(nx/2) sin((n+1)x/2)/sin(x/2)| ≤ 1/sin(δ/2) on [δ, 2π − δ]. By Abel summation, ∑ₖ₌ₘⁿ sin kx/k = Sₙ/n − Sₘ₋₁/m + ∑ₖ₌ₘⁿ⁻¹ Sₖ (1/k − 1/(k+1)), whose absolute value is at most (2/m) · (1/sin(δ/2)) uniformly in x. The uniform Cauchy criterion holds, so the convergence is uniform (Dirichlet's test).
  51. Put x = π − t. Since sin(n(π − t)) = (−1)ⁿ⁺¹ sin nt, the partial sums become Sₙf(π − t) = 2∑ₖ₌₁ⁿ sin kt/k, while f(π − t) = π − t. The t-derivative is 2∑ₖ₌₁ⁿ cos kt = sin((n + ½)t)/sin(t/2) − 1, which first vanishes at t = π/(n + 1), where sin((n + ½)t) = sin(π − t/2) = sin(t/2). There the partial sum is 2∑ₖ₌₁ⁿ (sin uₖ/uₖ) · π/(n + 1) with uₖ = kπ/(n + 1), a Riemann sum converging to 2∫₀^π sin u/u du = 2 Si(π). This first critical point is a local maximum, and (as for the square wave) the later local maxima are smaller, so max Sₙf → 2 Si(π) ≈ 3.7039: an overshoot of about 0.562 ≈ 0.0895 × 2π above π.
  52. At z = 1/2, sin(π/2) = 1 = (π/2) ∏ (1 − 1/(4n²)), so π/2 = ∏ 4n²/(4n² − 1). Each factor 4k²/(4k² − 1) exceeds 1, so Pₙ is increasing, and it converges to π/2 by the convergence of the infinite product.
  53. By Theorem 8.1, (π/n)∑ₖ₌₁ⁿ⁻¹ ln sin(kπ/n) = (π/n)(ln n − (n − 1) ln 2) → −π ln 2. By symmetry about π/2 it suffices to compare sums and integrals on (0, π/2], where g = ln sin is increasing and integrable (|ln sin x| ≤ |ln(2x/π)| there). For an increasing g and mesh h = π/n, the sum h∑ₖ₌₁ᵐ g(kh) over the points in (0, π/2] lies between ∫ g over that range and the same integral plus h|g(mh)| + ∫₀ʰ |g|, and both correction terms tend to 0 as n → ∞. Hence the Riemann sums converge to the integral, and ∫₀^π ln sin x dx = −π ln 2.
  54. Writing sin(x + kπ/n) = (e^(i(x+kπ/n)) − e^(−i(x+kπ/n)))/(2i) and using wⁿ − 1 = ∏(w − ζᵏ), one obtains sin nx = 2ⁿ⁻¹ ∏ₖ₌₀ⁿ⁻¹ sin(x + kπ/n) (the constant is confirmed by Theorem 8.1 after dividing by sin x and letting x → 0). Taking logarithmic derivatives twice: n cot nx = ∑ cot(x + kπ/n) and −n² csc² nx = −∑ csc²(x + kπ/n), which is the first claim. Now separate the term k = 0 and let x → 0, using csc²x = 1/x² + 1/3 + O(x²): ∑ₖ₌₁ⁿ⁻¹ csc²(x + kπ/n) = n² csc²(nx) − csc²x = (1/x² + n²/3) − (1/x² + 1/3) + O(x²) → (n² − 1)/3.
  55. The hyperbolic law of cosines with all sides a gives cos A = cosh a/(1 + cosh a). For A = π/4: cosh a = (√2/2)(1 + cosh a), so cosh a = (√2/2)/(1 − √2/2) = 1 + √2 and a = arcosh(1 + √2) ≈ 1.5286. The area is the angle defect π − 3π/4 = π/4.
  56. sin 1° = cos 89° = cos(2π · 89/360). Since gcd(89, 360) = 1, by Theorem 12.1 the number 2 cos(2π · 89/360) is a Galois conjugate of 2 cos(2π/360), so it has the same degree φ(360)/2 = 48. Dividing by 2 does not change the degree.
  57. Setting x = 0 gives f(y) + f(−y) = 2f(y), so f is even and f′(0) = 0. Differentiating twice in y and setting y = 0 gives 2f″(x) = 2f(x)f″(0), so f″ = cf with c = f″(0). With f(0) = 1, f′(0) = 0, the solutions are f(x) = cos(√(−c) x) if c < 0, f ≡ 1 if c = 0, and f(x) = cosh(√c x) if c > 0. All three satisfy the equation (by the sum-to-product formulas for cos and their hyperbolic analogues). So f(x) = cos(kx) or cosh(kx) for some k ≥ 0.
  58. Since Dₙ is even and 0 < 2 sin(t/2) ≤ t on (0, π], Lₙ = (2/π)∫₀^π |sin((n + ½)t)|/(2 sin(t/2)) dt ≥ (2/π)∫₀^π |sin((n + ½)t)|/t dt = (2/π)∫₀^((n+½)π) |sin u|/u du. On [(k − 1)π, kπ] we have 1/u ≥ 1/(kπ) and ∫ |sin u| du = 2, so the integral is at least ∑ₖ₌₁ⁿ 2/(kπ). Hence Lₙ ≥ (4/π²)∑ₖ₌₁ⁿ 1/k → ∞. The functionals f ↦ Sₙf(0) on C(𝕋) have norms exactly Lₙ; since these are unbounded, the uniform boundedness principle gives a continuous f with sup |Sₙf(0)| = ∞.
  59. The expansion π cot πz = 1/z + ∑ 2z/(z² − n²) holds for all z ∉ ℤ, in particular z = i. Since cot(iπ) = cos(iπ)/sin(iπ) = cosh π/(i sinh π) = −i coth π, the left side is −iπ coth π. The right side is 1/i + ∑ 2i/(−1 − n²) = −i − 2i ∑ 1/(n² + 1). Dividing by −i: π coth π = 1 + 2∑ 1/(n² + 1), so the sum is (π coth π − 1)/2 ≈ 1.0767.
  60. The numbers yₖ = 2 cos(2πk/7), k = 1, 2, 3, are the roots of y³ + y² − 2y − 1, so by Vieta e₁ = −1, e₂ = −2, e₃ = 1. Then ∑ 1/yₖ = e₂/e₃ = −2, and ∑ sec(2πk/7) = ∑ 2/yₖ = −4. Numerically 1.6039 − 4.4940 − 1.1099 = −4.0000.
