Logarithms — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

The elementary definition of a logarithm, "the power to which the base must be raised", presupposes that we already know what bˣ means for an arbitrary real exponent x. For rational x this is algebra, but for x = √2 or x = π it requires a limiting process, and the cleanest way to supply that process runs in the opposite direction: define the natural logarithm first, as an integral, and obtain the exponential function as its inverse. This course takes that route and then follows the logarithm wherever it leads, which turns out to be almost everywhere in mathematics.

The logarithm is, at heart, a single structural fact: the positive reals under multiplication and the reals under addition are isomorphic as topological groups, and the isomorphism is unique up to a scalar. Every "log law" is a restatement of this fact. The same idea, transplanted to the punctured complex plane, produces a multi-valued function whose failure to be single-valued is measured by the integer winding number, the seed of the argument principle and of covering-space theory. Transplanted to a finite cyclic group, it produces the discrete logarithm, a function that is trivially well defined but apparently very hard to compute, and on whose difficulty a large part of public-key cryptography rests.

The logarithm is also the natural measure of size for multiplicative phenomena. It counts digits, measures information in bits and nats, sets the scale for decibels and stellar magnitudes, and governs the distribution of prime numbers: the density of primes near x is 1/ln x, which is the content of the prime number theorem. The constant γ = lim (Hₙ − ln n) records the discrepancy between the discrete sum ∑ 1/k and the integral ∫ dt/t, and Benford's law explains why the leading digits of real-world data are logarithmically, not uniformly, distributed.

We assume a working knowledge of real analysis (the Riemann integral, uniform convergence, the mean value theorem), basic complex analysis (holomorphic functions, contour integrals) and elementary group theory. Proofs are given in full except where a result, such as the prime number theorem itself, needs machinery beyond the scope of the course; in those cases we prove the strongest elementary statement available and state the rest precisely.

In this course, you will:

  1. Define ln x = ∫₁ˣ dt/t and derive every property of the logarithm and of exp, e and real powers from this definition alone.
  2. Prove that the continuous homomorphisms (ℝ₊, ×) → (ℝ, +) are exactly the maps c·ln x, and understand change of base as a change of scalar.
  3. Establish the sharp inequalities and growth rates of ln, including ln x = o(xᵋ) and Stirling's estimate for ln n!.
  4. Derive the power series of ln(1 + x), determine its exact domain of convergence, and accelerate it to compute logarithms efficiently.
  5. Use logarithmic differentiation and logarithmic derivatives, including p′/p for polynomials and products.
  6. Construct the complex logarithm, its branches and branch cuts, the principal value Log z, and complex powers.
  7. Prove that Hₙ − ln n converges to Euler's constant γ, and that ∑ 1/p diverges like ln ln x.
  8. State the prime number theorem precisely, prove Chebyshev's bounds, and compare x/ln x with li(x).
  9. Treat entropy, bits, decibels and other logarithmic scales rigorously, including Gibbs' inequality and the characterisation of log by additivity.
  10. Explain Benford's law through equidistribution modulo 1.
  11. Study the discrete logarithm problem, the Diffie–Hellman protocol, and the algorithms that attack it.

─────────────────────────────────
Lesson 1: The Natural Logarithm as an Integral
─────────────────────────────────

📌 Key idea of this section:

        ln x := ∫₁ˣ dt/t   (x > 0)
        ln(xy) = ln x + ln y,   (ln x)′ = 1/x,   ln: (0, ∞) → ℝ is a bijection

The definition

The function t ↦ 1/t is continuous on (0, ∞), so for every x > 0 the Riemann integral ∫₁ˣ dt/t exists. (For 0 < x < 1 we use the convention ∫₁ˣ = −∫ₓ¹.) We define

        ln x = ∫₁ˣ (1/t) dt,   x > 0.

Definition 1.1. The function ln: (0, ∞) → ℝ defined above is the natural logarithm.

Nothing about exponents has been assumed. Every property of ln below is derived from this definition, from the fundamental theorem of calculus, and from the substitution rule.

Immediate properties

Proposition 1.2. (i) ln 1 = 0. (ii) ln is differentiable on (0, ∞) with (ln x)′ = 1/x. (iii) ln is strictly increasing and strictly concave. (iv) ln x < 0 for 0 < x < 1 and ln x > 0 for x > 1.

Proof. (i) is the integral over a degenerate interval. (ii) is the fundamental theorem of calculus, since 1/t is continuous. (iii) The derivative 1/x is positive, so ln is strictly increasing; the second derivative −1/x² is negative, so ln is strictly concave. (iv) follows from (i) and (iii). ∎

The functional equation

Theorem 1.3 (Product rule). For all x, y > 0, ln(xy) = ln x + ln y.

Proof. Fix y > 0 and put g(x) = ln(xy) − ln x. By the chain rule g′(x) = y·(1/(xy)) − 1/x = 0, so g is constant on the interval (0, ∞). Evaluating at x = 1 gives g(1) = ln y. Hence ln(xy) − ln x = ln y for every x. ∎

A second proof makes the mechanism visible. Split the integral and substitute t = xs in the second piece:

        ln(xy) = ∫₁ˣ dt/t + ∫ₓˣʸ dt/t = ln x + ∫₁ʸ (x ds)/(xs) = ln x + ln y.

The substitution works because the measure dt/t is invariant under the dilation t ↦ xt. This invariance is the real reason logarithms exist; we return to it in Lesson 3.

Corollary 1.4. For x, y > 0 and every integer n: (i) ln(1/x) = −ln x; (ii) ln(x/y) = ln x − ln y; (iii) ln(xⁿ) = n ln x; (iv) for every rational r = m/n with n ≥ 1, ln(x^{m/n}) = (m/n) ln x, where x^{m/n} denotes the positive n-th root of xᵐ.

Proof. (i) 0 = ln 1 = ln(x · 1/x) = ln x + ln(1/x). (ii) follows from (i) and Theorem 1.3. (iii) For n ≥ 0 by induction, for n < 0 by (i). (iv) If u = x^{m/n} then uⁿ = xᵐ, so n ln u = m ln x by (iii). ∎

The range of ln

Proposition 1.5. ln is a bijection from (0, ∞) onto ℝ.

Proof. Injectivity follows from strict monotonicity. For surjectivity, note that ln 2 = ∫₁² dt/t > ∫₁² dt/2 = 1/2, because 1/t > 1/2 on [1, 2). By Corollary 1.4, ln(2ⁿ) = n ln 2 > n/2, which is unbounded above, and ln(2⁻ⁿ) = −n ln 2 is unbounded below. Since ln is continuous on an interval, the intermediate value theorem shows it takes every real value. ∎

Two-sided bounds

Proposition 1.6. For all x > 0,

        1 − 1/x ≤ ln x ≤ x − 1,

with equality in either place if and only if x = 1.

Proof. For x > 1, 1/x < 1/t < 1 for t ∈ (1, x), so (x − 1)/x < ∫₁ˣ dt/t < x − 1, and (x − 1)/x = 1 − 1/x. For 0 < x < 1, apply the same reasoning to the interval [x, 1]: there 1 < 1/t < 1/x, so 1 − x < −ln x < (1 − x)/x, which rearranges to the same inequalities. Equality at x = 1 is clear. ∎

The upper bound ln x ≤ x − 1 is the single most useful inequality about logarithms. It says that the concave curve y = ln x lies below its tangent line at x = 1. We shall use it to prove Gibbs' inequality in information theory and the AM–GM inequality in Lesson 4.

Numerical evaluation from the definition

The definition is directly computable. The trapezoidal rule with step 1/4 on [1, 2] gives

        ln 2 ≈ (1/4)·(1/2 + 4/5 + 2/3 + 4/7 + 1/4) ≈ 0.69702,

an overestimate, since 1/t is convex and the trapezoidal rule overestimates the integral of a convex function. The true value is ln 2 = 0.693147… . Simpson's rule with the same nodes gives 0.69325, already correct to three decimals. Much better methods appear in Lesson 5.

✏️ Your Turn

(a) Prove from the definition that ln x < 2(√x − 1) for x > 1. (Hint: compare 1/t with 1/√t.)
(b) Show that the sequence ln n / n tends to 0, using only Proposition 1.6 and the identity ln n = 2 ln √n.
(c) Using only ln 2 > 1/2 (from the proof of Proposition 1.5) and Proposition 1.6, prove that 1/2 < ln 2 < 1.

Answers: (a) For t > 1, 1/t < 1/√t, so ln x = ∫₁ˣ dt/t < ∫₁ˣ t^{−1/2} dt = 2(√x − 1). (b) ln n = 2 ln √n ≤ 2(√n − 1) < 2√n, so 0 ≤ ln n / n < 2/√n → 0 for n ≥ 1. (c) The lower bound is given. The upper bound follows from ln x ≤ x − 1 at x = 2, which gives ln 2 ≤ 1, with strict inequality because 2 ≠ 1.

─────────────────────────────────
Lesson 2: The Exponential Function, e, and Real Powers
─────────────────────────────────

📌 Key idea of this section:

        exp := ln⁻¹: ℝ → (0, ∞),   exp′ = exp,   exp(x + y) = exp x · exp y
        e := exp(1) = lim (1 + 1/n)ⁿ = ∑ 1/k! = 2.718281828…
        aˣ := exp(x ln a)   (a > 0, x ∈ ℝ)

The inverse function

By Proposition 1.5, ln is a strictly increasing differentiable bijection (0, ∞) → ℝ whose derivative never vanishes. By the inverse function theorem its inverse exp: ℝ → (0, ∞) is differentiable, and

        exp′(x) = 1 / ln′(exp x) = 1 / (1/exp x) = exp x.

Proposition 2.1. exp(0) = 1, exp is strictly increasing and convex, exp′ = exp, and exp(x + y) = exp(x)·exp(y) for all real x, y.

Proof. Only the last statement needs comment. Put u = exp x and v = exp y. Then ln(uv) = ln u + ln v = x + y, so uv = exp(x + y). ∎

Definition 2.2. The number e is exp(1), the unique real number with ln e = 1.

Since ln 2 < 1 and ln 4 = 2 ln 2 > 1, we have 2 < e < 4. Sharper information follows below.

Real powers

For a > 0 and rational r, Corollary 1.4 gives ln(aʳ) = r ln a, so aʳ = exp(r ln a). The right-hand side makes sense for all real r, which motivates the following.

Definition 2.3. For a > 0 and x ∈ ℝ, aˣ := exp(x ln a).

By Corollary 1.4 this agrees with the algebraic definition for rational x, and it is the unique continuous extension of that function from ℚ to ℝ. In particular eˣ = exp(x ln e) = exp(x), so the notation eˣ is now justified. The laws of exponents follow at once: aˣ⁺ʸ = aˣaʸ, (aˣ)ʸ = aˣʸ, (ab)ˣ = aˣbˣ, and ln(aˣ) = x ln a for all real x. Differentiating, (aˣ)′ = aˣ ln a and, for fixed real r and x > 0, (xʳ)′ = (exp(r ln x))′ = xʳ · r/x = r xʳ⁻¹. The power rule for arbitrary real exponents is thus a corollary of the logarithm.

The number e as a limit

Theorem 2.4. For every real x, lim_{n→∞} (1 + x/n)ⁿ = eˣ.

Proof. For x = 0 there is nothing to prove. Otherwise, for n > |x| the base is positive and ln((1 + x/n)ⁿ) = n ln(1 + x/n) = x · [ln(1 + h) − ln 1]/h with h = x/n. As n → ∞, h → 0, and the difference quotient tends to ln′(1) = 1. So the logarithm tends to x, and by continuity of exp the sequence tends to eˣ. ∎

The convergence is slow. From ln(1 + 1/n) = 1/n − 1/(2n²) + O(1/n³) (Lesson 5) we get n ln(1 + 1/n) = 1 − 1/(2n) + O(1/n²), hence (1 + 1/n)ⁿ = e(1 − 1/(2n) + O(1/n²)). For n = 1000 the value is 2.716923932…, which is short of e = 2.718281828… by 0.001358, close to the predicted e/2000 ≈ 0.001359.

The number e as a series

Theorem 2.5. For every real x, eˣ = ∑ₖ₌₀^{∞} xᵏ/k!, the series converging absolutely and uniformly on compact sets.

Proof. Fix x and n. Since exp is its own derivative, every derivative of exp is exp, so Taylor's theorem with Lagrange remainder gives eˣ = ∑ₖ₌₀ⁿ xᵏ/k! + e^{ξ} xⁿ⁺¹/(n + 1)! for some ξ between 0 and x. The remainder is bounded by e^{|x|}|x|ⁿ⁺¹/(n + 1)!, which tends to 0 because factorials outgrow geometric sequences. Uniformity on [−A, A] follows from the same bound with |x| replaced by A. ∎

At x = 1 the series converges very fast: the error after the term 1/n! is less than 3/(n + 1)!. Summing to 1/10! gives 2.7182818011, within 3·10⁻⁸ of e.

Theorem 2.6 (Euler, 1737; Fourier's proof). e is irrational.

Proof. Suppose e = a/b with positive integers a, b. Let x = b!(e − ∑ₖ₌₀ᵇ 1/k!). Then x is an integer, because b!e = a(b − 1)! and b!/k! is an integer for k ≤ b. On the other hand

        x = ∑_{k>b} b!/k! = 1/(b+1) + 1/((b+1)(b+2)) + … < ∑_{j≥1} 1/(b+1)ʲ = 1/b ≤ 1,

and x > 0. An integer strictly between 0 and 1 cannot exist. ∎

Much more is true: e is transcendental (Hermite, 1873), and Lindemann (1882) extended Hermite's method to show that e^{α} is transcendental for every nonzero algebraic α. Taking α = iπ, where e^{iπ} = −1 is algebraic, yields the transcendence of π. The Lindemann–Weierstrass theorem also implies that ln a is transcendental for every algebraic a ≠ 0, 1.

Uniqueness of exp as a solution of y′ = y

Proposition 2.7. If f: ℝ → ℝ is differentiable with f′ = f and f(0) = c, then f(x) = c eˣ.

Proof. (f(x)e⁻ˣ)′ = f′(x)e⁻ˣ − f(x)e⁻ˣ = 0, so f(x)e⁻ˣ is constant, equal to its value c at 0. ∎

✏️ Your Turn

(a) Prove that (1 + 1/n)ⁿ < e < (1 + 1/n)ⁿ⁺¹ for every n ≥ 1, using Proposition 1.6.
(b) Compute lim_{n→∞} (1 − 3/n)²ⁿ.
(c) Show that xˣ = exp(x ln x) has a unique minimum on (0, ∞) and find it.

Answers: (a) Apply Proposition 1.6 with x = 1 + 1/n: 1 − n/(n + 1) = 1/(n + 1) < ln(1 + 1/n) < 1/n. Multiplying by n gives n ln(1 + 1/n) < 1, so (1 + 1/n)ⁿ < e; multiplying by n + 1 gives (n + 1) ln(1 + 1/n) > 1, so (1 + 1/n)ⁿ⁺¹ > e. (b) (1 − 3/n)²ⁿ = ((1 − 3/n)ⁿ)² → (e⁻³)² = e⁻⁶ ≈ 0.00248. (c) (x ln x)′ = ln x + 1 vanishes only at x = 1/e, where the second derivative 1/x is positive; the minimum value is (1/e)^{1/e} = e^{−1/e} ≈ 0.6922.

─────────────────────────────────
Lesson 3: The Logarithm as a Group Isomorphism
─────────────────────────────────

📌 Key idea of this section:

        ln: (ℝ₊, ×) → (ℝ, +) is an isomorphism of topological groups
        Every continuous homomorphism (ℝ₊, ×) → (ℝ, +) has the form x ↦ c ln x
        log_{b} x = ln x / ln b

The structural statement

Let ℝ₊ = (0, ∞). Theorem 1.3 and Proposition 1.5 say that ln is a bijective group homomorphism from the multiplicative group (ℝ₊, ×) to the additive group (ℝ, +), and ln and exp are both continuous. Hence ln is an isomorphism of topological groups. Every rule for manipulating logarithms is an instance of "a homomorphism turns the group operation of the source into that of the target": products become sums, quotients become differences, powers become multiples, 1 becomes 0. The historical motive for logarithms, Napier's 1614 Mirifici Logarithmorum Canonis Descriptio and Briggs' base-10 tables of 1617 and 1624, was exactly this: to replace multiplication, which is hard by hand, with addition, which is easy.

Classification of the homomorphisms

Theorem 3.1. Let φ: ℝ₊ → ℝ satisfy φ(xy) = φ(x) + φ(y) for all x, y > 0. If φ is continuous at a single point, or monotone, then φ(x) = c ln x where c = φ(e).

Proof. Put ψ(u) = φ(eᵘ). Then ψ: ℝ → ℝ satisfies Cauchy's equation ψ(u + v) = ψ(u) + ψ(v). By induction ψ(nu) = nψ(u) for n ∈ ℕ; also ψ(0) = 0 and ψ(−u) = −ψ(u), so ψ(nu) = nψ(u) for n ∈ ℤ. If q = m/n then nψ(q) = ψ(m) = mψ(1), so ψ(q) = cq with c = ψ(1) = φ(e). Thus ψ is linear on ℚ. If ψ is continuous at one point u₀, then the identity ψ(u) = ψ(u − u₀ + u₀) = ψ(u − u₀) + ψ(u₀) shows that ψ is continuous at 0 and hence, by the same identity, everywhere; a continuous function agreeing with cu on the dense set ℚ equals cu. If ψ is monotone, say non-decreasing, take rationals q < u < q′ to get cq ≤ ψ(u) ≤ cq′ and let q, q′ → u (the non-increasing case is identical). Translating back, φ(x) = ψ(ln x) = c ln x. ∎

Boundedness of φ on some interval also suffices (Darboux), and so does Lebesgue measurability (Fréchet, Banach, Sierpiński). Without any regularity hypothesis the conclusion fails. Regard ℝ as a vector space over ℚ and choose a Hamel basis B (this needs the axiom of choice). Any function B → ℝ extends uniquely to a ℚ-linear map ℝ → ℝ, and a ℚ-linear map that is not ℝ-linear is additive but discontinuous everywhere; its graph is dense in the plane, and it is not Lebesgue measurable. Composing with ln yields pathological "logarithms". Any of the regularity hypotheses above excludes these monsters.

Change of base

Definition 3.2. For b > 0 with b ≠ 1, the logarithm to base b is log_{b} x := ln x / ln b.

By Theorem 3.1, log_{b} is the unique continuous homomorphism with log_{b}(b) = 1, and it is the inverse of the function u ↦ bᵘ, since log_{b}(bᵘ) = u ln b / ln b = u. The change-of-base formula log_{a} x = log_{b} x / log_{b} a is now merely the statement that two nonzero multiples of ln differ by a constant factor. In particular

        log₁₀ x = ln x / ln 10 ≈ 0.4342944819 ln x,
        log₂ x = ln x / ln 2 ≈ 1.4426950409 ln x,
        log_{a} b · log_{b} a = 1,   log_{a} b · log_{b} c = log_{a} c.

The scalar c in Theorem 3.1 is therefore only a choice of unit. Natural logarithms are distinguished by the normalisation φ′(1) = 1, equivalently by the fact that ln is the antiderivative of 1/x with no constant factor. This is why calculus favours base e, information theory base 2, and engineering base 10.

Haar measure on the multiplicative group

The integral definition of ln is an instance of a general principle. On a locally compact group there is, up to scale, a unique translation-invariant measure, the Haar measure. On (ℝ, +) it is Lebesgue measure du; on (ℝ₊, ×) it is dt/t, since for every a > 0 and every interval [x, y] ⊂ ℝ₊,

        ∫ₐₓᵃʸ dt/t = ∫ₓʸ ds/s   (substitute t = as).

The logarithm is then simply the map that measures the Haar distance from 1 to x: ln x = μ([1, x]) for x ≥ 1. The isomorphism ln transports dt/t to du. This viewpoint generalises: on the multiplicative group of a local field one uses dx/|x|, and Mellin transforms ∫₀^{∞} f(t) tˢ dt/t are the Fourier transforms of the group (ℝ₊, ×).

Other characterisations

The logarithm admits many characterisations, each useful in different contexts. We list three, all equivalent to Definition 1.1 by the preceding results. (1) ln is the unique differentiable function f on ℝ₊ with f(1) = 0 and f′(x) = 1/x. (2) ln is the unique continuous homomorphism (ℝ₊, ×) → (ℝ, +) with derivative 1 at the identity. (3) ln is the inverse of the unique solution of y′ = y, y(0) = 1. A fourth characterisation, through the entropy axioms, is given in Lesson 11, and a fifth, through monotone additive arithmetic functions, is Erdős's theorem in the same lesson.

✏️ Your Turn

(a) Prove that log₂ 3 is irrational.
(b) Simplify log₂ 3 · log₃ 4 · log₄ 5 · … · log₆₃ 64.
(c) Show that if φ: ℝ₊ → ℝ is a differentiable homomorphism, then φ(x) = φ′(1) ln x, without using Theorem 3.1.

Answers: (a) If log₂ 3 = m/n with positive integers m, n, then 3 = 2^{m/n}, so 3ⁿ = 2ᵐ, which is impossible since the left side is odd and the right side is even. (b) Each factor is ln(k + 1)/ln k, so the product telescopes to ln 64 / ln 2 = log₂ 64 = 6. (c) Differentiate φ(xy) = φ(x) + φ(y) with respect to y and set y = 1: xφ′(x) = φ′(1). So φ′(x) = φ′(1)/x, and since φ(1) = 0, φ(x) = φ′(1) ln x.

─────────────────────────────────
Lesson 4: Inequalities, Growth Rates and Stirling's Estimate
─────────────────────────────────

📌 Key idea of this section:

        ln x = o(xᵋ) as x → ∞ for every ε > 0;   ln x = o(x^{−ε}) as x → 0⁺
        ln n! = n ln n − n + ½ ln(2πn) + O(1/n)

The logarithm grows slower than any power

Theorem 4.1. For every ε > 0 and x > 1, 0 < ln x < xᵋ/ε. Consequently ln x / xᵋ → 0 as x → ∞, and xᵋ ln x → 0 as x → 0⁺.

Proof. Apply ln y ≤ y − 1 < y with y = xᵋ: ε ln x = ln(xᵋ) < xᵋ. For the second limit put x = 1/y: xᵋ ln x = −ln y / yᵋ → 0 as y → ∞. ∎

Equivalently, eˣ grows faster than any polynomial: xᵏ/eˣ → 0 for every k. In complexity theory this gives the familiar hierarchy 1 ≺ log log n ≺ log n ≺ nᵋ ≺ n ≺ n log n ≺ n² ≺ 2ⁿ, where f ≺ g means f = o(g).

Concavity and the AM–GM inequality

Because ln is strictly concave, Jensen's inequality gives, for positive x₁, …, xₙ and weights wᵢ ≥ 0 with ∑ wᵢ = 1,

        ∑ wᵢ ln xᵢ ≤ ln(∑ wᵢ xᵢ),

with equality if and only if all xᵢ with wᵢ > 0 coincide. Exponentiating gives the weighted AM–GM inequality ∏ xᵢ^{wᵢ} ≤ ∑ wᵢ xᵢ. Here is a self-contained proof using only Proposition 1.6. Let A = ∑ wᵢxᵢ. Then ln(xᵢ/A) ≤ xᵢ/A − 1, and multiplying by wᵢ and summing gives ∑ wᵢ ln(xᵢ/A) ≤ A/A − 1 = 0, which is the claim. Equality forces xᵢ/A = 1 whenever wᵢ > 0.

The same technique proves Young's inequality ab ≤ aᵖ/p + b^{q}/q for conjugate exponents 1/p + 1/q = 1, and from it Hölder's inequality. In each case the logarithm converts a product inequality into a statement about a concave function.

Logarithmic mean

For distinct positive a, b, the logarithmic mean is L(a, b) = (a − b)/(ln a − ln b). It satisfies

        √(ab) < L(a, b) < (a + b)/2.

Proof. Assume a > b and put s = a/b > 1. The left inequality √(ab) < (a − b)/ln(a/b) is equivalent to ln s < (s − 1)/√s, that is, with t = √s > 1, to 2 ln t < t − 1/t. Both sides vanish at t = 1, and the derivative of (t − 1/t) − 2 ln t is 1 + 1/t² − 2/t = (1 − 1/t)² > 0. The right inequality is equivalent to ln s > 2(s − 1)/(s + 1). Both sides vanish at s = 1, and the derivative of the difference is 1/s − 4/(s + 1)² = (s − 1)²/(s(s + 1)²) > 0. ∎

The logarithmic mean appears in heat-exchanger design (the log-mean temperature difference) and is the value of ∫₀¹ aᵗ b¹⁻ᵗ dt.

Comparing sums with integrals

For a monotone function f on [1, n], the sum ∑ f(k) is squeezed between integrals. Applied to f = ln, which is increasing,

        ∫₁ⁿ ln t dt ≤ ∑ₖ₌₂ⁿ ln k ≤ ∫₁ⁿ⁺¹ ln t dt.

Since ∫ ln t dt = t ln t − t, this gives n ln n − n + 1 ≤ ln n! ≤ (n + 1) ln(n + 1) − n. Hence ln n! = n ln n − n + O(ln n), and in particular ln n! ~ n ln n. Dividing by ln 2, log₂ n! ~ n log₂ n. This is the information-theoretic lower bound for comparison sorting: a decision tree that distinguishes n! orderings has depth at least ⌈log₂ n!⌉.

Stirling's formula

Theorem 4.2 (de Moivre, Stirling, 1730). ln n! = n ln n − n + ½ ln(2πn) + εₙ, where 0 < εₙ < 1/(12n).

Proof of the first part (the constant is postponed). Let dₙ = ln n! − (n + ½) ln n + n. Then

        dₙ − dₙ₊₁ = (n + ½) ln((n + 1)/n) − 1.

Put x = 1/(2n + 1), so that (n + 1)/n = (1 + x)/(1 − x) and n + ½ = 1/(2x). Using the series of Lesson 5, ln((1 + x)/(1 − x)) = 2(x + x³/3 + x⁵/5 + …), so

        dₙ − dₙ₊₁ = x²/3 + x⁴/5 + x⁶/7 + … .

This is positive, so dₙ is decreasing, and it is at most (x²/3)(1 + x² + x⁴ + …) = x²/(3(1 − x²)) = 1/(12n(n + 1)) = 1/(12n) − 1/(12(n + 1)). Hence dₙ − 1/(12n) is increasing. So dₙ converges to a limit C with C < dₙ < C + 1/(12n). The value C = ½ ln(2π) follows from Wallis' product π/2 = ∏ (2k)²/((2k − 1)(2k + 1)): writing the partial products in terms of factorials and substituting n! ≈ e^{C} n^{n+1/2} e⁻ⁿ gives e^{2C} = 2π. ∎

For n = 10, ln 10! = ln 3628800 = 15.104413, while 10 ln 10 − 10 = 13.025851 and adding ½ ln(20π) = 2.070231 gives 15.096082. The remaining error 0.008331 is just under 1/120 = 0.008333, as the theorem predicts.

✏️ Your Turn

(a) Show that ln(1 + x) ≥ x/(1 + x) for x > −1, and deduce that ∑ₖ₌₁ⁿ 1/k ≥ ln(n + 1).
(b) Determine lim_{x→0⁺} xˣ and lim_{x→∞} x^{1/x}.
(c) Use Stirling's formula to show that the central binomial coefficient satisfies ln C(2n, n) = 2n ln 2 − ½ ln(πn) + O(1/n).

Answers: (a) Proposition 1.6 with x replaced by 1 + x gives ln(1 + x) ≥ 1 − 1/(1 + x) = x/(1 + x). For the sum, ln(1 + 1/k) ≤ 1/k by the upper bound, so ∑ₖ₌₁ⁿ 1/k ≥ ∑ ln((k + 1)/k) = ln(n + 1). (b) xˣ = exp(x ln x) → e⁰ = 1 by Theorem 4.1, and x^{1/x} = exp(ln x / x) → 1. (c) ln C(2n, n) = ln (2n)! − 2 ln n!. Stirling gives 2n ln 2n − 2n + ½ ln(4πn) − 2(n ln n − n + ½ ln(2πn)) + O(1/n) = 2n ln 2 + ½ ln(4πn) − ln(2πn) + O(1/n) = 2n ln 2 − ½ ln(πn) + O(1/n).

─────────────────────────────────
Lesson 5: The Series for ln(1 + x) and the Computation of Logarithms
─────────────────────────────────

📌 Key idea of this section:

        ln(1 + x) = x − x²/2 + x³/3 − x⁴/4 + …   exactly for −1 < x ≤ 1
        ln((1 + y)/(1 − y)) = 2(y + y³/3 + y⁵/5 + …)   for |y| < 1

Derivation with an exact remainder

The series is due to Nicholas Mercator (Logarithmotechnia, 1668), and was found independently by Newton in 1665; two decades earlier Grégoire de Saint-Vincent and Alphonse Antonio de Sarasa had observed that areas under the hyperbola y = 1/x behave like logarithms. We derive it with an exact remainder. For t ≠ −1 and n ≥ 1 the finite geometric sum gives

        1/(1 + t) = 1 − t + t² − … + (−t)ⁿ⁻¹ + (−t)ⁿ/(1 + t).

Integrating from 0 to x > −1 and using ln(1 + x) = ∫₀ˣ dt/(1 + t),

        ln(1 + x) = ∑ₖ₌₁ⁿ (−1)ᵏ⁺¹ xᵏ/k + Rₙ(x),   Rₙ(x) = (−1)ⁿ ∫₀ˣ tⁿ/(1 + t) dt.

Theorem 5.1. The series ∑_{k≥1} (−1)ᵏ⁺¹ xᵏ/k converges to ln(1 + x) if and only if −1 < x ≤ 1. Its radius of convergence is 1; it converges absolutely for |x| < 1, conditionally at x = 1, and diverges at x = −1.

Proof. For 0 ≤ x ≤ 1, 1 + t ≥ 1 on [0, x], so |Rₙ(x)| ≤ ∫₀ˣ tⁿ dt = xⁿ⁺¹/(n + 1) → 0. For −1 < x < 0, write x = −r with 0 < r < 1; on [x, 0] we have 1 + t ≥ 1 − r, so |Rₙ(x)| ≤ rⁿ⁺¹/((n + 1)(1 − r)) → 0. At x = −1 the series is −∑ 1/k, which diverges; for |x| > 1 the terms do not tend to 0. Absolute convergence for |x| < 1 follows from the ratio test, and at x = 1 the series ∑ (−1)ᵏ⁺¹/k is not absolutely convergent. ∎

At x = 1 we obtain the alternating harmonic series:

        ln 2 = 1 − 1/2 + 1/3 − 1/4 + … ,

with error at most 1/(n + 1) after n terms. It converges far too slowly for computation: a million terms give only six correct decimals.

Rearrangements

Because the convergence at x = 1 is conditional, the Riemann rearrangement theorem says that the terms can be reordered to converge to any prescribed real number. A classical example takes one positive term followed by two negative terms:

        1 − 1/2 − 1/4 + 1/3 − 1/6 − 1/8 + 1/5 − 1/10 − 1/12 + … = ½ ln 2.

Proof. Group the terms in threes. The k-th group is 1/(2k − 1) − 1/(4k − 2) − 1/(4k) = 1/(4k − 2) − 1/(4k) = ½(1/(2k − 1) − 1/(2k)). Summing over k gives ½ ln 2 for the grouped series, and since the individual terms tend to 0, the ungrouped series has the same sum. ∎

More generally (Pringsheim), taking p positive terms followed by q negative terms produces ln 2 + ½ ln(p/q).

Acceleration by the inverse hyperbolic tangent

Subtracting the series for ln(1 − y) from that for ln(1 + y) cancels the even powers:

        ln((1 + y)/(1 − y)) = 2 ∑_{k≥0} y²ᵏ⁺¹/(2k + 1) = 2 artanh y,   |y| < 1.

Every x > 0 can be written as (1 + y)/(1 − y) with y = (x − 1)/(x + 1) ∈ (−1, 1), so this single series computes every natural logarithm. For x = 2 we get y = 1/3, and

        ln 2 = 2(1/3 + 1/81 + 1/1215 + 1/15309 + …).

Four terms give 0.6931348, with error about 1.24·10⁻⁵. Each further term gains roughly a factor of 9 = 1/y² in accuracy. The truncation error after the term with y²ⁿ⁻¹ is bounded by 2y²ⁿ⁺¹/((2n + 1)(1 − y²)).

Machin-type formulas

To make y even smaller one writes ln 2 as a combination of logarithms of rationals very close to 1. Since artanh(1/26) = ½ ln(27/25), artanh(1/4801) = ½ ln(2401/2400) and artanh(1/8749) = ½ ln(4375/4374), and these ratios factor over the primes 2, 3, 5, 7, one can solve for ln 2 and obtain, for instance,

        ln 2 = 18 artanh(1/26) − 2 artanh(1/4801) + 8 artanh(1/8749),

a formula of the same kind as Machin's formula for π, and used in record computations of ln 2. Here 1/26 makes each term gain a factor of 676, so a few dozen terms deliver dozens of digits. Once ln 2, ln 3, ln 5 and ln 7 are known, ln x for any x can be obtained by range reduction: write x = 2ᵐ·u with u near 1 and evaluate ln u by the artanh series.

The arithmetic–geometric mean method

For very high precision a quadratically convergent method is used. The arithmetic–geometric mean M(a, b) of a, b > 0 is the common limit of aₙ₊₁ = (aₙ + bₙ)/2, bₙ₊₁ = √(aₙbₙ), and the error roughly squares at each step. A theorem going back to Gauss and made effective by Salamin, Brent and the Borweins states that for large s,

        ln s = π / (2 M(1, 4/s)) + O(ln s / s²).

Choosing s = 2ᵐ·x with m large, and subtracting m ln 2, yields ln x to N digits in O(log N) AGM iterations. This is how arbitrary-precision libraries compute logarithms of millions of digits.

The logarithm in floating-point hardware

A practical libm logarithm does three things: it extracts the binary exponent m and mantissa u ∈ [1, 2) from the floating-point representation, so that ln x = m ln 2 + ln u; it reduces u further using a small table of values ln cᵢ with u/cᵢ close to 1; and it evaluates ln(u/cᵢ) by a short minimax polynomial. The constant ln 2 is stored in two pieces (a high part with trailing zero bits and a low correction) so that m·ln 2 is computed without rounding error. Correctly rounded logarithms, as in the CORE-MATH project, additionally need to rule out hard-to-round cases.

✏️ Your Turn

(a) How many terms of the alternating harmonic series are needed to guarantee an error below 10⁻⁴ for ln 2?
(b) Use the artanh series with x = 3/2 (so y = 1/5) to compute ln(3/2) to five decimal places, and deduce ln 3 from ln 2 = 0.693147.
(c) Find the radius and interval of convergence of ∑_{k≥1} xᵏ/(k·3ᵏ), and its sum.

Answers: (a) The remainder bound |Rₙ(1)| ≤ 1/(n + 1) guarantees an error below 10⁻⁴ once n + 1 > 10⁴, that is, for n ≥ 10000. (The true error is close to 1/(2n), so in fact about 5000 terms come close to this accuracy.) (b) 2(1/5 + 1/375 + 1/15625 + 1/546875) = 2(0.2 + 0.0026667 + 0.000064 + 0.0000018) = 0.405465, and ln(3/2) = 0.405465…; then ln 3 = ln 2 + ln(3/2) ≈ 0.693147 + 0.405465 = 1.098612. (c) The series is −ln(1 − x/3). The radius is 3; it converges for −3 ≤ x < 3 (conditionally at x = −3, where the sum is −ln 2) and diverges at x = 3.

─────────────────────────────────
Lesson 6: Logarithmic Differentiation and the Logarithmic Derivative
─────────────────────────────────

📌 Key idea of this section:

        (ln |f|)′ = f′/f   wherever f ≠ 0
        f = ∏ fᵢ^{aᵢ}   ⟹   f′/f = ∑ aᵢ fᵢ′/fᵢ

The method

If f is differentiable and nonzero on an interval, then ln |f| is differentiable there, and the chain rule gives (ln |f|)′ = f′/f. (For f < 0 we have ln |f| = ln(−f), whose derivative is −f′/(−f) = f′/f.) The expression f′/f is the logarithmic derivative of f. It turns products into sums and powers into multiples, exactly as the logarithm does: if f = g·h then f′/f = g′/g + h′/h, and if f = gᵃ then f′/f = a g′/g. This is the cleanest proof of the product rule for many factors and of the power rule for real exponents.

Worked example A

Let y = (x² + 1)³ √(x − 1) / (x + 2)⁴ for x > 1. Then

        ln y = 3 ln(x² + 1) + ½ ln(x − 1) − 4 ln(x + 2),
        y′/y = 6x/(x² + 1) + 1/(2(x − 1)) − 4/(x + 2).

At x = 2: y′/y = 12/5 + 1/2 − 1 = 19/10, and y(2) = 125/256, so y′(2) = (19/10)(125/256) = 475/512.

Variable exponents

Logarithmic differentiation is indispensable when the variable appears in both base and exponent. For y = u(x)ᵛ⁽ˣ⁾ with u > 0 we have ln y = v ln u, hence

        y′ = u^{v} (v′ ln u + v u′/u).

For example (xˣ)′ = xˣ(ln x + 1) and (x^{sin x})′ = x^{sin x}(cos x · ln x + (sin x)/x).

Polynomials and the Gauss–Lucas theorem

If p(z) = c ∏ⱼ₌₁ⁿ (z − rⱼ) is a complex polynomial with roots rⱼ (listed with multiplicity), then away from the roots

        p′(z)/p(z) = ∑ⱼ₌₁ⁿ 1/(z − rⱼ).

Theorem 6.1 (Gauss–Lucas). Every root of p′ lies in the convex hull of the roots of p.

Proof. Let p′(w) = 0. If w is a root of p there is nothing to prove. Otherwise ∑ 1/(w − rⱼ) = 0. Since 1/(w − rⱼ) = (w̄ − r̄ⱼ)/|w − rⱼ|², taking complex conjugates gives ∑ (w − rⱼ)/|w − rⱼ|² = 0. With weights λⱼ = |w − rⱼ|⁻² > 0, this says w = ∑ λⱼrⱼ / ∑ λⱼ, a convex combination of the roots. ∎

Logarithmic derivatives of infinite products

The logarithmic derivative converts a convergent infinite product into a series. Euler's product sin πz = πz ∏_{n≥1} (1 − z²/n²), which converges locally uniformly on ℂ, gives on differentiating logarithmically

        π cot πz = 1/z + ∑_{n≥1} 2z/(z² − n²),

valid for z ∉ ℤ. (At z = 0.3 both sides equal 2.28250… .) Similarly, the Weierstrass product for the gamma function, 1/Γ(z) = z eᵞᶻ ∏ (1 + z/n)e^{−z/n}, leads to the digamma function ψ = Γ′/Γ:

        ψ(z) = −γ − 1/z + ∑_{n≥1} (1/n − 1/(n + z)),   so   ψ(n + 1) = Hₙ − γ.

Here Hₙ = 1 + 1/2 + … + 1/n and γ is Euler's constant, studied in Lesson 9.

Elasticity and log–log scales

In economics and the physical sciences one often studies the elasticity E = d(ln y)/d(ln x) = (x/y)(dy/dx), the percentage change of y per percentage change of x. A power law y = Cxᵏ has constant elasticity k, which is why power laws plot as straight lines of slope k on log–log axes, while exponential laws y = Ceᵏˣ are straight lines of slope k on semi-log axes (ln y against x). Kepler's third law, T² ∝ a³, appears on log–log axes as a line of slope 3/2.

✏️ Your Turn

(a) Differentiate y = (ln x)^{ln x} for x > 1.
(b) Let p(z) = z³ − 3z + 1. Compute ∑ 1/(2 − rⱼ) over the roots rⱼ of p, without finding the roots.
(c) For f(x) = x⁴ e²ˣ / (1 + x²)², find the values of x at which f′(x) = 0.

Answers: (a) ln y = ln x · ln ln x, so y′/y = (ln ln x)/x + (ln x)·1/(x ln x) = (ln ln x + 1)/x, and y′ = (ln x)^{ln x}(1 + ln ln x)/x. (b) ∑ 1/(2 − rⱼ) = p′(2)/p(2) = (3·4 − 3)/(8 − 6 + 1) = 9/3 = 3. (c) f′/f = 4/x + 2 − 4x/(1 + x²) for x ≠ 0. Setting this to 0 and multiplying by x(1 + x²): 4(1 + x²) + 2x(1 + x²) − 4x² = 2x³ + 2x + 4 = 2(x + 1)(x² − x + 2), so the only nonzero real critical point is x = −1. In addition f′(0) = 0, since f has a zero of order 4 at 0. The critical points are x = −1 and x = 0.

─────────────────────────────────
Lesson 7: The Complex Logarithm
─────────────────────────────────

📌 Key idea of this section:

        log z = ln |z| + i arg z   (a set: one value for each choice of arg z)
        Log z = ln |z| + i Arg z,   Arg z ∈ (−π, π]   (principal value)
        Log is holomorphic on ℂ ∖ (−∞, 0] with Log′(z) = 1/z

The exponential map on ℂ

Define eᶻ = ∑ zᵏ/k! for z ∈ ℂ. The Cauchy product of absolutely convergent series gives eᶻ⁺ʷ = eᶻe^{w}, and Euler's formula eⁱʸ = cos y + i sin y follows by comparing series. Hence eˣ⁺ⁱʸ = eˣ(cos y + i sin y), so |eᶻ| = e^{Re z} and arg eᶻ = Im z (mod 2π). Consequently exp: ℂ → ℂ∖{0} is surjective and eᶻ = e^{w} if and only if z − w ∈ 2πiℤ. In group-theoretic terms, exp is a surjective homomorphism (ℂ, +) → (ℂ*, ×) with kernel 2πiℤ, and

        ℂ / 2πiℤ ≅ ℂ*.

Unlike the real case, exp is not injective, so it has no global inverse. A logarithm of w ≠ 0 is any z with eᶻ = w, and the set of all logarithms is

        log w = { ln |w| + i(θ + 2πk) : k ∈ ℤ },   where θ is any argument of w.

Branches

Definition 7.1. Let D ⊆ ℂ∖{0} be open. A branch of the logarithm on D is a continuous function L: D → ℂ with e^{L(z)} = z for all z ∈ D.

Any branch is automatically holomorphic with L′(z) = 1/z: from e^{L(z)} = z and continuity of L, the difference quotient (L(z + h) − L(z))/h equals (L(z + h) − L(z))/(e^{L(z+h)} − e^{L(z)}), which tends to 1/e^{L(z)} = 1/z. Two branches on a connected set differ by a constant 2πik, since their difference is continuous with values in 2πiℤ.

Definition 7.2. The principal branch is Log z = ln |z| + i Arg z, where Arg z ∈ (−π, π] is the principal argument.

Log is defined on all of ℂ∖{0} but is continuous only on the slit plane ℂ∖(−∞, 0]. Across the negative real axis Arg jumps by 2π: for r > 0, Arg(−r + iε) → π and Arg(−r − iε) → −π as ε → 0⁺. The ray (−∞, 0] is the branch cut. The choice of cut is conventional; any simple curve from 0 to ∞ would do. Some examples:

        Log(−1) = iπ,   Log(i) = iπ/2,   Log(1 + i) = ½ ln 2 + iπ/4,
        Log(−1 − i) = ½ ln 2 − 3iπ/4,   Log(−e) = 1 + iπ.

No logarithm on a circle

Theorem 7.3. There is no branch of the logarithm on any set containing a circle |z| = r.

Proof. Suppose L is a branch on |z| = r and set g(θ) = (L(re^{iθ}) − ln r − iθ)/(2πi) for θ ∈ [0, 2π]. Since e^{L(re^{iθ})} = re^{iθ}, g takes integer values, and g is continuous, so it is constant. But re^{i·2π} = re^{i·0}, so g(2π) = g(0) − 1, a contradiction. ∎

Existence on simply connected domains

Theorem 7.4. Let D ⊆ ℂ∖{0} be a simply connected domain and z₀ ∈ D. Choose w₀ with e^{w₀} = z₀. Then L(z) = w₀ + ∫_{z₀}ᶻ dζ/ζ, the integral along any path in D, defines a branch of the logarithm on D.

Proof. 1/ζ is holomorphic on D, so by Cauchy's theorem for simply connected domains the integral is independent of the path, and L is holomorphic with L′ = 1/z. Then (z e^{−L(z)})′ = e^{−L} − z(1/z)e^{−L} = 0, so z e^{−L(z)} is constant, equal to z₀e^{−w₀} = 1 at z₀. ∎

The obstruction in Theorem 7.3 is measured exactly by the integral (1/2πi) ∮ dz/z = 1 over a positively oriented circle around 0. More generally the winding number of a closed curve γ around a point a is n(γ, a) = (1/2πi) ∮_{γ} dz/(z − a), the net number of times the continuous argument increases by 2π. Applied to f′/f, the logarithmic derivative, this gives the argument principle: for f meromorphic inside a simple closed contour with no zeros or poles on it, (1/2πi) ∮ f′/f dz = Z − P, the number of zeros minus the number of poles, counted with multiplicity. Rouché's theorem and many proofs of the fundamental theorem of algebra follow.

The Riemann surface

The multi-valuedness can be removed by enlarging the domain. The Riemann surface of log is the set S = {(z, w) ∈ ℂ* × ℂ : eʷ = z}, which is biholomorphic to ℂ via (z, w) ↦ w, and on which log is the single-valued function (z, w) ↦ w. Projected to z, it looks like an infinite spiral staircase (Figure 2): walking once around the origin moves you up one storey, adding 2πi to the logarithm. In topological language, exp: ℂ → ℂ* is the universal covering map of the punctured plane, with deck transformation group 2πiℤ ≅ ℤ = π₁(ℂ*).

Laws that fail

Log(zw) = Log z + Log w holds if and only if Arg z + Arg w ∈ (−π, π]. In general

        Log(zw) = Log z + Log w + 2πik,   k ∈ {−1, 0, 1}.

For example Log((−1)(−1)) = Log 1 = 0, whereas Log(−1) + Log(−1) = 2πi, so here k = −1. Similarly Log(zⁿ) ≠ n Log z in general. The set-valued identity log(zw) = log z + log w (as sets of complex numbers) is, however, always true.

Complex powers

Definition 7.5. For z ≠ 0 and w ∈ ℂ, the values of zʷ are exp(w log z); the principal value is exp(w Log z).

If w = n is an integer all values coincide and agree with the algebraic power. If w = p/q in lowest terms there are exactly q values, the q-th roots of zᵖ. If w is irrational or non-real there are infinitely many values. A famous example:

        iⁱ = exp(i log i) = exp(i · i(π/2 + 2πk)) = e^{−π/2 − 2πk},   k ∈ ℤ,

so every value of iⁱ is real and positive, and the principal value is e^{−π/2} = 0.2078795763… . By Gelfond–Schneider (1934), e^{π} = (−1)⁻ⁱ is transcendental, as is 2^{√2}.

The series in the complex disc

For |z| < 1 the series Log(1 + z) = ∑_{k≥1} (−1)ᵏ⁺¹ zᵏ/k holds, since both sides are holomorphic on the disc and agree on the real segment (−1, 1) (identity theorem); note that 1 + z lies in the right half-plane, so the principal branch is continuous there. On the boundary circle the series converges for every z ≠ −1 (Dirichlet's test), and at z = e^{iθ} with −π < θ < π it gives

        ∑_{k≥1} (−1)ᵏ⁺¹ e^{ikθ}/k = ln(2 cos(θ/2)) + iθ/2.

Taking imaginary parts with θ replaced by π − φ yields the Fourier series ∑ sin(kφ)/k = (π − φ)/2 for 0 < φ < 2π.

✏️ Your Turn

(a) Compute the principal values Log(−3i) and (−1)ⁱ.
(b) Find all solutions of eᶻ = 1 + i√3.
(c) For which z ∈ ℂ∖{0} does Log(z²) = 2 Log z hold?

Answers: (a) Log(−3i) = ln 3 − iπ/2. (−1)ⁱ = exp(i Log(−1)) = exp(i · iπ) = e^{−π} ≈ 0.04321. (b) |1 + i√3| = 2 and an argument is π/3, so z = ln 2 + i(π/3 + 2πk), k ∈ ℤ. (c) Exactly when 2 Arg z ∈ (−π, π], that is, when Arg z ∈ (−π/2, π/2], the open right half-plane together with the positive imaginary axis.

─────────────────────────────────
Lesson 8: Logarithms in Integration
─────────────────────────────────

📌 Key idea of this section:

        ∫ dx/x = ln |x| + C   (separately on (−∞, 0) and (0, ∞))
        ∫₀¹ ln x dx = −1,   ∫₀^{π/2} ln sin x dx = −(π/2) ln 2,   ∫₀^{∞} (e⁻ᵃˣ − e⁻ᵇˣ)/x dx = ln(b/a)

The antiderivative of 1/x

On (0, ∞) an antiderivative of 1/x is ln x; on (−∞, 0) it is ln(−x), whose derivative is −1/(−x) = 1/x. Hence ∫ dx/x = ln |x| + C, with the warning that the constant may differ on the two intervals: the general antiderivative on ℝ∖{0} is ln |x| + C₁ for x > 0 and ln |x| + C₂ for x < 0. The power rule ∫ xᵃ dx = xᵃ⁺¹/(a + 1) fails exactly at a = −1, and the logarithm fills the gap continuously in the sense that (xᵃ⁺¹ − 1)/(a + 1) → ln x as a → −1, because (e^{h ln x} − 1)/h → ln x as h = a + 1 → 0.

Standard integrals produced by logarithms

Every rational function has an elementary antiderivative consisting of a rational function, logarithms and arctangents; this is the partial-fraction theorem. For example

        ∫ dx/(x² − a²) = (1/(2a)) ln |(x − a)/(x + a)| + C,
        ∫ tan x dx = −ln |cos x| + C,
        ∫ sec x dx = ln |sec x + tan x| + C.

The last integral has a notable history. Edward Wright's 1599 tables for the Mercator projection were in effect numerical values of ∫ sec φ dφ; around 1645 Henry Bond noticed, by comparing tables, that they matched ln tan(π/4 + φ/2), and the identity was proved by James Gregory in 1668. One checks that ln tan(π/4 + φ/2) = ln(sec φ + tan φ).

Integration by parts gives ∫ ln x dx = x ln x − x + C and, more generally, ∫ xᵃ ln x dx = xᵃ⁺¹ ln x/(a + 1) − xᵃ⁺¹/(a + 1)² + C for a ≠ −1. As x → 0⁺, xᵃ⁺¹ ln x → 0 when a > −1, by Theorem 4.1, so

        ∫₀¹ xᵃ ln x dx = −1/(a + 1)²   (a > −1),   in particular ∫₀¹ ln x dx = −1.

The integral of ln sin

Theorem 8.1 (Euler). ∫₀^{π/2} ln sin x dx = −(π/2) ln 2.

Proof. The integral I converges because ln sin x ~ ln x near 0. By the substitution x ↦ π/2 − x, I = ∫₀^{π/2} ln cos x dx. So 2I = ∫₀^{π/2} ln(sin x cos x) dx = ∫₀^{π/2} ln(sin 2x) dx − (π/2) ln 2. With u = 2x, ∫₀^{π/2} ln sin 2x dx = ½ ∫₀^{π} ln sin u du = I, by the symmetry of sin about π/2. Hence 2I = I − (π/2) ln 2. ∎

Frullani integrals

Theorem 8.2. For 0 < a < b, ∫₀^{∞} (e⁻ᵃˣ − e⁻ᵇˣ)/x dx = ln(b/a).

Proof. (e⁻ᵃˣ − e⁻ᵇˣ)/x = ∫ₐᵇ e⁻ᵗˣ dt. The integrand e⁻ᵗˣ is non-negative, so Tonelli's theorem allows interchanging the integrals: ∫₀^{∞} ∫ₐᵇ e⁻ᵗˣ dt dx = ∫ₐᵇ ∫₀^{∞} e⁻ᵗˣ dx dt = ∫ₐᵇ dt/t = ln(b/a). ∎

The same argument proves Frullani's general formula ∫₀^{∞} (f(ax) − f(bx))/x dx = (f(0) − f(∞)) ln(b/a) for suitable f. The logarithm appears because the measure dx/x is invariant under dilations (Lesson 3): dilating by a and by b and subtracting leaves only the "Haar length" ln(b/a) of the interval between the scales.

Integrals that define new functions

Liouville's theory of elementary functions (1830s), made algorithmic by Risch (1969), shows that some innocent integrands have no elementary antiderivative. The most important example for us is 1/ln x. We define the logarithmic integral

        li(x) = PV ∫₀ˣ dt/ln t,   Li(x) = ∫₂ˣ dt/ln t = li(x) − li(2),   li(2) = 1.04516… ,

where PV denotes the Cauchy principal value at the singularity t = 1. Integration by parts repeatedly gives the asymptotic (divergent) expansion

        li(x) ~ (x/ln x)(1 + 1!/ln x + 2!/(ln x)² + 3!/(ln x)³ + …).

These functions return in Lesson 10 as the best simple approximations to the prime-counting function.

Convergence tests calibrated by logarithms

Repeated logarithms give an infinite scale of convergence. For p real,

        ∫₂^{∞} dx/(x (ln x)ᵖ) converges if and only if p > 1,

since the substitution u = ln x turns it into ∫_{ln 2}^{∞} u⁻ᵖ du. For p > 1 the value is (ln 2)¹⁻ᵖ/(p − 1). Similarly ∑ 1/(n ln n) diverges (like ln ln N) while ∑ 1/(n (ln n)²) converges, and one can continue with ∑ 1/(n ln n (ln ln n)ᵖ). Cauchy's condensation test, ∑ aₙ < ∞ ⟺ ∑ 2ᵏa_{2ᵏ} < ∞ for decreasing positive aₙ, is the discrete counterpart of the substitution u = ln x.

✏️ Your Turn

(a) Evaluate ∫₀¹ x² ln x dx.
(b) Evaluate ∫₀^{∞} (e⁻ˣ − e⁻³ˣ)/x dx.
(c) Decide whether ∑_{n≥3} 1/(n ln n ln ln n) converges.

Answers: (a) By the formula with a = 2, the value is −1/9. (b) By Frullani with a = 1, b = 3, the value is ln 3 ≈ 1.0986. (c) It diverges: the integral test with u = ln ln x gives ∫ du/u = ln ln ln x → ∞, very slowly.

─────────────────────────────────
Lesson 9: Harmonic Numbers, Euler's Constant and the Primes
─────────────────────────────────

📌 Key idea of this section:

        Hₙ = 1 + 1/2 + … + 1/n = ln n + γ + 1/(2n) − 1/(12n²) + O(1/n⁴)
        γ = 0.5772156649…   (Euler–Mascheroni constant)
        ∑_{p ≤ x} 1/p = ln ln x + M + o(1),   M = 0.2614972128…

The constant γ

The harmonic numbers Hₙ are Riemann sums for ∫ dt/t, so Hₙ ≈ ln n. The error converges.

Theorem 9.1. The sequence aₙ = Hₙ − ln n is strictly decreasing, the sequence bₙ = Hₙ − ln(n + 1) is strictly increasing, and both converge to a common limit γ with 1 − ln 2 < γ < 1.

Proof. By Proposition 1.6, 1/(n + 1) < ln(1 + 1/n) < 1/n. Hence aₙ − aₙ₊₁ = ln(1 + 1/n) − 1/(n + 1) > 0 and bₙ₊₁ − bₙ = 1/(n + 1) − ln(1 + 1/(n + 1)) > 0. Since bₙ < aₙ, we have b₁ < bₙ < aₙ < a₁, so both monotone sequences are bounded and converge. Their difference aₙ − bₙ = ln(1 + 1/n) tends to 0. The bounds b₁ = 1 − ln 2 ≈ 0.3069 and a₁ = 1 give the stated inequalities. ∎

Euler computed γ to 16 decimal places in 1781 using the Euler–Maclaurin formula; Mascheroni's 1790 computation contained errors in later digits. Today γ = 0.57721566490153286… is known to hundreds of billions of digits, yet it is not known whether γ is irrational. Continued-fraction computations show that if γ = p/q in lowest terms, then q > 10²⁴⁰⁰⁰⁰.

Refinement

The Euler–Maclaurin summation formula applied to f(t) = 1/t gives the full asymptotic expansion

        Hₙ = ln n + γ + 1/(2n) − ∑_{k≥1} B₂ₖ/(2k n²ᵏ) = ln n + γ + 1/(2n) − 1/(12n²) + 1/(120n⁴) − … ,

where B₂ = 1/6, B₄ = −1/30, … are Bernoulli numbers. The series diverges, but truncation is extremely accurate. For n = 10, H₁₀ = 7381/2520 = 2.9289683, while ln 10 + γ + 1/20 − 1/1200 = 2.9289674; the difference, 8.3·10⁻⁷, is the next term 1/(120·10⁴). A simple consequence is the bracket 1/(2n + 2) < Hₙ − ln n − γ < 1/(2n), which for n = 10 reads 0.04545 < 0.04917 < 0.05.

Integral representations

Writing Hₙ − ln n = ∑_{k≤n} 1/k − ∫₁ⁿ dt/t and letting n → ∞ gives:

        γ = ∫₁^{∞} (1/⌊t⌋ − 1/t) dt = 1 − ∫₁^{∞} {t}/t² dt,

where {t} = t − ⌊t⌋ is the fractional part. Through the digamma function of Lesson 6, γ = −ψ(1) = −Γ′(1), and differentiating Γ(s) = ∫₀^{∞} tˢ⁻¹e⁻ᵗ dt at s = 1 gives γ = −∫₀^{∞} e⁻ᵗ ln t dt. Mertens' third theorem, below, shows that γ also controls the density of integers free of small prime factors.

Euler's proof that ∑ 1/p diverges

Theorem 9.2 (Euler, 1737). ∑_{p prime} 1/p diverges. More precisely ∑_{p ≤ N} 1/p > ln ln(N + 1) − 1/2 for N ≥ 2.

Proof. Every integer n ≤ N is a product of primes p ≤ N. Expanding each factor of the finite product ∏_{p≤N} (1 − 1/p)⁻¹ = ∏_{p≤N} (1 + 1/p + 1/p² + …) and using unique factorisation, every 1/n with n ≤ N appears in the expansion, so

        ∏_{p≤N} (1 − 1/p)⁻¹ ≥ ∑_{n≤N} 1/n ≥ ln(N + 1),

by Exercise (a) of Lesson 4. Taking logarithms, ∑_{p≤N} −ln(1 − 1/p) ≥ ln ln(N + 1). For 0 ≤ x ≤ 1/2, −ln(1 − x) = x + x²/2 + x³/3 + … ≤ x + (x²/2)(1 + x + x² + …) = x + x²/(2(1 − x)) ≤ x + x². Therefore ∑_{p≤N} 1/p ≥ ln ln(N + 1) − ∑_{p} 1/p². Finally ∑_{p} 1/p² ≤ 1/4 + ∑_{odd m≥3} 1/m² = 1/4 + (π²/8 − 1) < 0.49 < 1/2. ∎

The divergence of ∑ 1/p is a quantitative form of Euclid's theorem: there are not only infinitely many primes, but enough of them that their reciprocals diverge, unlike the squares, whose reciprocals sum to π²/6.

Mertens' theorems

Theorem 9.3 (Mertens, 1874). As x → ∞,

        ∑_{p≤x} (ln p)/p = ln x + O(1),
        ∑_{p≤x} 1/p = ln ln x + M + O(1/ln x),
        ∏_{p≤x} (1 − 1/p) = e⁻ᵞ/ln x · (1 + O(1/ln x)).

The first follows from Legendre's formula for the power of p dividing n!, combined with Stirling's estimate ln n! = n ln n + O(n) and Chebyshev's upper bound θ(x) = O(x) from Lesson 10; the second follows from the first by partial summation, and the third, whose constant e⁻ᵞ ≈ 0.561459 is surprisingly hard to identify, from the second together with an analysis of the Euler product of ζ(s) near s = 1. Numerically, for x = 10⁶, ∑_{p≤x} 1/p = 2.887328, while ln ln 10⁶ + M = 2.887289, and ln(10⁶)·∏_{p≤10⁶}(1 − 1/p) = 0.561438.

Dirichlet's divisor problem

Logarithms and γ appear together again in the average order of the divisor function d(n), the number of divisors of n. Counting lattice points under the hyperbola xy = x₀ by Dirichlet's hyperbola method gives

        ∑_{n≤x} d(n) = x ln x + (2γ − 1)x + O(√x).

So a typical integer up to x has about ln x divisors, although the maximal order of d(n) is much larger, exp((ln 2 + o(1)) ln n / ln ln n) (Wigert). The optimal exponent θ in the error term O(x^{θ}) is unknown; it is at least 1/4 (Hardy, 1916) and at most 131/416 ≈ 0.3149 (Huxley, 2003), with small later improvements.

✏️ Your Turn

(a) Using Hₙ ≈ ln n + γ + 1/(2n), estimate the least n with Hₙ > 10.
(b) Prove that ∑_{n≥1} (1/n − ln(1 + 1/n)) = γ.
(c) Show that ∏_{p≤x} (1 − 1/p)⁻¹ → ∞ and use Mertens' third theorem to estimate it at x = 10⁶.

Answers: (a) Ignoring 1/(2n), we need ln n > 10 − γ = 9.4227843, so n > e^{9.4227843} ≈ 12366.97. Including 1/(2n) ≈ 4.0·10⁻⁵ lowers the threshold for ln n by that amount, giving n > 12366.97·e^{−0.00004} ≈ 12366.47. The least such n is 12367 (indeed H₁₂₃₆₆ ≈ 9.99997 and H₁₂₃₆₇ ≈ 10.00004). (b) The N-th partial sum is H_{N} − ∑_{n≤N} ln((n + 1)/n) = H_{N} − ln(N + 1) = b_{N} → γ. (c) By Euler's argument it is at least ln(x + 1) → ∞. Mertens gives about eᵞ ln 10⁶ = 1.781072 × 13.815511 ≈ 24.61.

─────────────────────────────────
Lesson 10: The Prime Number Theorem
─────────────────────────────────

📌 Key idea of this section:

        π(x) ~ x / ln x   and, more precisely,   π(x) = li(x) + O(x e^{−c√(ln x)})
        Equivalent forms:   θ(x) = ∑_{p≤x} ln p ~ x,   ψ(x) = ∑_{pᵏ≤x} ln p ~ x,   pₙ ~ n ln n

History

Let π(x) denote the number of primes not exceeding x. Around 1792, at the age of fifteen, Gauss examined tables of primes and conjectured that their density near x is 1/ln x, so that π(x) ≈ ∫₂ˣ dt/ln t; he described this in an 1849 letter to Encke. Legendre (1798, 1808) proposed π(x) ≈ x/(ln x − 1.08366). Chebyshev (1848–1852) proved that π(x) is of exact order x/ln x and that if π(x) ln x / x has a limit it must equal 1; he also proved Bertrand's postulate that there is always a prime between n and 2n. Riemann's 1859 memoir connected π(x) with the zeros of ζ(s), and in 1896 Hadamard and de la Vallée Poussin independently proved the theorem by showing that ζ(s) has no zeros on the line Re s = 1. Elementary proofs, avoiding complex analysis, were found by Selberg and Erdős in 1948–1949, and D. J. Newman (1980) found a short analytic proof based on a Tauberian theorem.

Theorem 10.1 (Prime number theorem). lim_{x→∞} π(x) ln x / x = 1.

The data

        x        π(x)          x/ln x           li(x)
        10³      168           144.8            177.6
        10⁴      1 229         1 085.7          1 246.1
        10⁶      78 498        72 382.4         78 627.5
        10⁹      50 847 534    48 254 942.4     50 849 235.0
        10¹⁰     455 052 511   434 294 481.9    455 055 614.6

The ratio π(x)/(x/ln x) is 1.161 at 10³ and 1.048 at 10¹⁰, approaching 1 slowly, while li(x) is accurate to within a relative error of about 7·10⁻⁶ at 10¹⁰. Figure 1 shows both ratios on a logarithmic axis.

Why li(x) is better

By integration by parts, li(x) = x/ln x + x/(ln x)² + O(x/(ln x)³). So the statements π(x) ~ x/ln x and π(x) ~ li(x) are equivalent, but x/ln x has relative error of order 1/ln x, whereas the error π(x) − li(x) is, by de la Vallée Poussin (1899), O(x e^{−c√(ln x)}) for some c > 0, smaller than x/(ln x)ᴬ for every A. The best known error term, due to Korobov and Vinogradov (1958), is O(x exp(−c(ln x)^{3/5}(ln ln x)^{−1/5})). Von Koch (1901) proved that the Riemann hypothesis is equivalent to π(x) = li(x) + O(√x ln x), and Schoenfeld (1976) made this explicit: under RH, |π(x) − li(x)| < √x ln x / (8π) for x ≥ 2657.

Legendre's constant 1.08366 is an artefact of his tables: since li(x) = x/ln x · (1 + 1/ln x + 2/(ln x)² + …) and x/(ln x − A) = x/ln x · (1 + A/ln x + A²/(ln x)² + …), the best constant in the limit is A = 1.

In every computed case li(x) > π(x). Littlewood proved in 1914 that π(x) − li(x) changes sign infinitely often; Skewes (1933) gave the first explicit upper bound for the first sign change, assuming RH, of about 10^{10^{10³⁴}}. Modern work places the first crossing below 1.4 × 10³¹⁶.

Chebyshev functions and partial summation

It is technically simpler to count primes with the weight ln p. Define θ(x) = ∑_{p≤x} ln p and ψ(x) = ∑_{pᵏ≤x} ln p = ∑_{n≤x} Λ(n), where the von Mangoldt function Λ(n) equals ln p if n = pᵏ and 0 otherwise. Then ln lcm(1, 2, …, n) = ψ(n), and ψ(x) − θ(x) = θ(x^{1/2}) + θ(x^{1/3}) + … = O(√x ln x).

Proposition 10.2. For x ≥ 2, π(x) = θ(x)/ln x + ∫₂ˣ θ(t)/(t (ln t)²) dt. Consequently π(x) ~ x/ln x if and only if θ(x) ~ x.

Proof. Write π(x) = ∑_{p≤x} (ln p)·(1/ln p) and apply Abel summation with the weights ln p and the smooth function 1/ln t, whose derivative is −1/(t (ln t)²). If θ(t) ≤ Ct, the integral is at most C∫₂ˣ dt/(ln t)² = O(x/(ln x)²), as one sees by splitting at √x. Hence π(x) ln x / x and θ(x)/x have the same limiting behaviour. ∎

Chebyshev's bounds

Theorem 10.3. For all sufficiently large x, (ln 2/2)·x/ln x < π(x) < 3x/ln x. In particular π(x) is of exact order x/ln x.

Proof. Lower bound. Let N = C(2n, n). By Legendre's formula, the exponent of a prime p in N is ∑_{k≥1} (⌊2n/pᵏ⌋ − 2⌊n/pᵏ⌋). Each summand is 0 or 1 and vanishes when pᵏ > 2n, so pᵛ ≤ 2n for the exact power pᵛ dividing N, and only primes p ≤ 2n occur. Hence N ≤ (2n)^{π(2n)}. On the other hand N is the largest of the 2n + 1 binomial coefficients C(2n, k), whose sum is 4ⁿ, so N ≥ 4ⁿ/(2n + 1). Therefore

        π(2n) ≥ (n ln 4 − ln(2n + 1)) / ln(2n),

which is asymptotic to (ln 2)·(2n)/ln(2n). For x between 2n and 2n + 2 the same bound holds up to a factor tending to 1, and since ln 2 > ln 2/2, the lower bound follows for large x.

Upper bound. Every prime p with n < p ≤ 2n divides (2n)! but not (n!)², hence divides N, and so ∏_{n<p≤2n} p ≤ N ≤ 4ⁿ. Taking logarithms, θ(2n) − θ(n) ≤ n ln 4. Summing over n = 2ʲ⁻¹ for j = 1, …, k gives θ(2ᵏ) < 2ᵏ ln 4, and for 2ᵏ⁻¹ ≤ x < 2ᵏ we obtain θ(x) ≤ θ(2ᵏ) < 2x ln 4. Now ln p > ½ ln x for √x < p ≤ x, so (π(x) − π(√x))·½ ln x < θ(x) < 2x ln 4, whence π(x) < √x + 4 ln 4 · x/ln x. This proves π(x) = O(x/ln x); a sharper version of the same argument (Erdős, using C(2m + 1, m) to get θ(x) < x ln 4) yields the constant 3 once x is large. ∎

For instance with n = 50 the lower bound gives π(100) ≥ (50 ln 4 − ln 101)/ln 100 ≈ 14.05, so π(100) ≥ 15; the true value is 25.

The n-th prime

Inverting π(x) ~ x/ln x gives pₙ ~ n ln n. Indeed, if x = pₙ then n = π(x) ~ x/ln x, so ln n = ln x − ln ln x + o(1) ~ ln x, and x ~ n ln x ~ n ln n. A sharper statement is pₙ = n(ln n + ln ln n − 1 + o(1)). For n = 10⁶, n ln n ≈ 13 815 511, while p₁₀₀₀₀₀₀ = 15 485 863; including the correction gives n(ln n + ln ln n − 1) ≈ 15 441 302, within 0.3%.

The probabilistic model

The prime number theorem suggests modelling the primes as a random set in which n is "prime" with probability 1/ln n, independently (Cramér, 1936). The model predicts that the largest gap between consecutive primes below x is about (ln x)², a conjecture consistent with all data, though Granville has argued the true constant is larger than the model predicts. It also predicts the Riemann-hypothesis-sized error √x ln x for π(x) − li(x). The logarithm is therefore not merely a convenient approximating function: 1/ln x is the natural density of the primes.

✏️ Your Turn

(a) Show that ψ(n) = ln lcm(1, 2, …, n), and deduce from the prime number theorem that lcm(1, …, n) = e^{n(1 + o(1))}.
(b) Using pₙ ~ n ln n, show that ∑ 1/pₙ diverges, in agreement with Theorem 9.2.
(c) Compute π(10⁹)/(10⁹/ln 10⁹) to three decimals.

Answers: (a) The exponent of a prime p in lcm(1, …, n) is the largest k with pᵏ ≤ n, so ln lcm(1, …, n) = ∑_{p≤n} k_{p} ln p = ∑_{pᵏ≤n} ln p = ψ(n). The prime number theorem in the form ψ(x) ~ x gives ln lcm(1, …, n) = n(1 + o(1)). (b) 1/pₙ ≥ c/(n ln n) for large n and some c > 0, and ∑ 1/(n ln n) diverges by the integral test (Lesson 8). (c) 10⁹/ln 10⁹ = 10⁹/20.7233 ≈ 48 254 942, and 50 847 534/48 254 942 ≈ 1.054.

─────────────────────────────────
Lesson 11: Information, Entropy and Logarithmic Scales
─────────────────────────────────

📌 Key idea of this section:

        H(p₁, …, pₙ) = −∑ pᵢ log₂ pᵢ bits,   0 ≤ H ≤ log₂ n
        D(p ‖ q) = ∑ pᵢ ln(pᵢ/qᵢ) ≥ 0   (Gibbs)
        level in dB = 10 log₁₀(P/P₀)

Why information is a logarithm

Suppose we want a measure I(N) of the information gained when one of N equally likely possibilities is revealed. Two natural requirements are that I is non-decreasing in N and that independent choices add: choosing one of M and, independently, one of N is choosing one of MN, so I(MN) = I(M) + I(N). Hartley (1928) and Shannon (1948) took I(N) = log N; the following theorem shows there is no other choice.

Theorem 11.1. Let f: ℕ → ℝ be non-decreasing with f(mn) = f(m) + f(n) for all m, n ≥ 1. Then f(n) = c ln n for some c ≥ 0.

Proof. f(1) = 2f(1) gives f(1) = 0. If f(2) = 0 then f(2ᵏ) = 0 for all k, and monotonicity forces f ≡ 0, which is the case c = 0. Otherwise f(m) ≥ f(2) > 0 for all m ≥ 2. Fix m, n ≥ 2 and k ≥ 1, and choose the integer j with mʲ ≤ nᵏ < mʲ⁺¹. Applying the monotone, additive f and the increasing, additive ln to these inequalities gives

        j/k ≤ f(n)/f(m) ≤ (j + 1)/k   and   j/k ≤ ln n/ln m < (j + 1)/k.

So |f(n)/f(m) − ln n/ln m| ≤ 1/k for every k, hence f(n)/ln n = f(m)/ln m. This common value is the constant c. ∎

Erdős (1946) proved the stronger result in which additivity is required only for coprime m, n. The choice of c is the choice of unit: c = 1/ln 2 gives bits, c = 1 gives nats, and c = 1/ln 10 gives hartleys (also called bans or dits). Thus 1 nat = 1/ln 2 ≈ 1.4427 bits and 1 hartley = log₂ 10 ≈ 3.3219 bits.

Shannon entropy

For a probability distribution p = (p₁, …, pₙ), an outcome of probability pᵢ carries surprisal −log₂ pᵢ bits, and the entropy is the expected surprisal

        H(p) = −∑ pᵢ log₂ pᵢ,   with the convention 0 log 0 = 0 (justified by x ln x → 0).

Shannon showed that H is, up to the unit, the only function that is continuous, increasing in n on uniform distributions, and satisfies the grouping rule H(p₁, …, pₙ) = H(p₁ + p₂, p₃, …, pₙ) + (p₁ + p₂)H(p₁/(p₁ + p₂), p₂/(p₁ + p₂)); the uniform case is Theorem 11.1. Examples: a fair coin has H = 1 bit; a coin with P(heads) = 0.9 has H ≈ 0.4690 bits; the distribution (1/2, 1/4, 1/8, 1/8) has H = 1/2 + 2/4 + 3/8 + 3/8 = 1.75 bits; a uniformly shuffled deck has log₂ 52! ≈ 225.58 bits.

Gibbs' inequality

Theorem 11.2. Let p, q be probability distributions on {1, …, n} with qᵢ > 0 whenever pᵢ > 0. Then the Kullback–Leibler divergence D(p ‖ q) = ∑ pᵢ ln(pᵢ/qᵢ) is non-negative, with equality if and only if p = q.

Proof. Sum over i with pᵢ > 0 and use ln x ≤ x − 1 (Proposition 1.6): −D(p ‖ q) = ∑ pᵢ ln(qᵢ/pᵢ) ≤ ∑ pᵢ(qᵢ/pᵢ − 1) = ∑_{pᵢ>0} qᵢ − 1 ≤ 0. Equality in Proposition 1.6 requires qᵢ = pᵢ for every i with pᵢ > 0, and then ∑_{pᵢ>0} qᵢ = 1 forces qᵢ = 0 elsewhere. ∎

Corollary 11.3. 0 ≤ H(p) ≤ log₂ n, with H = log₂ n exactly for the uniform distribution. Indeed log₂ n − H(p) = D(p ‖ u)/ln 2 for the uniform distribution u.

The source coding theorem

A prefix code assigns to symbol i a binary word of length ℓᵢ, no word being a prefix of another. Kraft's inequality says such a code exists if and only if ∑ 2^{−ℓᵢ} ≤ 1.

Theorem 11.4 (Shannon, 1948). Every prefix code has expected length L = ∑ pᵢℓᵢ ≥ H(p), and there is a prefix code with L < H(p) + 1.

Proof. Let K = ∑ 2^{−ℓᵢ} ≤ 1 and qᵢ = 2^{−ℓᵢ}/K. Then L − H(p) = ∑ pᵢ log₂(pᵢ/2^{−ℓᵢ}) = D(p ‖ q)/ln 2 − log₂ K ≥ 0. For the second statement take ℓᵢ = ⌈−log₂ pᵢ⌉; then ∑ 2^{−ℓᵢ} ≤ ∑ pᵢ = 1, so a prefix code exists by Kraft, and ℓᵢ < −log₂ pᵢ + 1 gives L < H + 1. ∎

Coding blocks of k symbols reduces the overhead to 1/k bit per symbol, so the entropy is exactly the optimal compression rate. The same quantity, with natural logarithms and Boltzmann's constant, is the thermodynamic entropy S = k_{B} ln W of a system with W equally likely microstates.

Logarithmic scales

A logarithmic scale reports log(X/X₀) for a reference value X₀. It is the right choice whenever ratios, not differences, are meaningful, and whenever the quantity ranges over many orders of magnitude.

        decibel (power):       L = 10 log₁₀(P/P₀) dB;   doubling the power adds 10 log₁₀ 2 ≈ 3.0103 dB
        decibel (amplitude):   L = 20 log₁₀(A/A₀) dB,   since power ∝ amplitude²
        neper:                 ln(A/A₀) Np;   1 Np = 20/ln 10 dB ≈ 8.6859 dB
        stellar magnitude:     m₁ − m₂ = −2.5 log₁₀(F₁/F₂)   (5 magnitudes = factor 100, Pogson 1856)
        pH:                    pH = −log₁₀ a(H⁺)
        moment magnitude:      M_{w} = (2/3)(log₁₀ M₀ − 9.1),   M₀ the seismic moment in N·m
        musical cents:         1200 log₂(f₂/f₁);   a just fifth 3/2 is 701.955 cents

Because the moment magnitude has slope 2/3, one magnitude unit corresponds to a factor 10^{1.5} ≈ 31.6 in seismic moment, and roughly in radiated energy. The decibel scale for sound pressure uses P₀ corresponding to 20 μPa; adding n incoherent sources of equal level adds 10 log₁₀ n dB, while two coherent sources in phase add 20 log₁₀ 2 ≈ 6.02 dB. The Weber–Fechner law in psychophysics, that perceived intensity grows like the logarithm of stimulus intensity, is the empirical reason that loudness, brightness and pitch are reported on logarithmic scales.

✏️ Your Turn

(a) Compute the entropy in bits of the distribution (1/2, 1/4, 1/4), and D(p ‖ q) in bits for p = (1/2, 1/2), q = (1/4, 3/4).
(b) A signal has power 0.5 mW and the reference is 1 mW. Express its level in dBm, and find the power at 27 dBm.
(c) Prove that the cents value of an equal-tempered semitone is exactly 100, and that twelve just fifths exceed seven octaves by about 23.46 cents (the Pythagorean comma).

Answers: (a) H = 1/2·1 + 1/4·2 + 1/4·2 = 1.5 bits. D = ½ log₂(0.5/0.25) + ½ log₂(0.5/0.75) = ½ − ½ log₂ 1.5 ≈ 0.5 − 0.2925 = 0.2075 bits. (b) 10 log₁₀ 0.5 ≈ −3.01 dBm. 27 dBm corresponds to 10^{2.7} ≈ 501.2 mW. (c) A semitone is the ratio 2^{1/12}, and 1200 log₂ 2^{1/12} = 100. Twelve fifths give 12 × 701.955 = 8423.46 cents, and seven octaves are 8400 cents, a difference of 23.46 cents; exactly, the comma is 3¹²/2¹⁹ ≈ 1.01364.

─────────────────────────────────
Lesson 12: Benford's Law
─────────────────────────────────

📌 Key idea of this section:

        P(first significant digit = d) = log₁₀(1 + 1/d),   d = 1, …, 9
        X is Benford  ⟺  log₁₀ X mod 1 is uniformly distributed on [0, 1)

The phenomenon

In 1881 the astronomer Simon Newcomb noticed that the early pages of logarithm tables were far more worn than the later ones: people looked up numbers beginning with 1 more often than numbers beginning with 9. The physicist Frank Benford rediscovered the effect in 1938 and tested it on over 20 000 numbers from river areas, populations, physical constants and street addresses. The law states that the leading digit D satisfies

        d        1       2       3       4       5       6       7       8       9
        P(D=d)   0.3010  0.1761  0.1249  0.0969  0.0792  0.0669  0.0580  0.0512  0.0458

The mantissa formulation

Every x > 0 can be written uniquely as x = 10ᵏ·s with k ∈ ℤ and significand s ∈ [1, 10). Then log₁₀ x = k + log₁₀ s, so log₁₀ s = {log₁₀ x} is the fractional part. The leading digit is d if and only if d ≤ s < d + 1, that is, if and only if {log₁₀ x} ∈ [log₁₀ d, log₁₀(d + 1)).

Proposition 12.1. If {log₁₀ X} is uniformly distributed on [0, 1), then P(D = d) = log₁₀(d + 1) − log₁₀ d = log₁₀(1 + 1/d). More generally, P(s ≤ t) = log₁₀ t for 1 ≤ t < 10.

This formulation also gives the joint distribution of all digits. The second digit, for example, satisfies P(D₂ = d) = ∑ₖ₌₁⁹ log₁₀(1 + 1/(10k + d)), which is 0.1197 for d = 0 and 0.0850 for d = 9; the higher digits rapidly become uniform.

Scale invariance

Why should real data have uniformly distributed log-mantissas? One answer is invariance under change of units. If a distribution of significands is the same whether a quantity is measured in metres or feet, then the distribution of {log₁₀ X} on the circle ℝ/ℤ must be invariant under every rotation u ↦ u + log₁₀ c. Theorem (Hill, 1995): the only probability distribution on significands that is invariant under all such scalings is Benford's. The proof is the uniqueness of Haar measure on the circle group, a close relative of the Haar measure dt/t of Lesson 3. Hill also proved a limit theorem: if one samples from randomly chosen distributions in an unbiased way, the combined data converge to Benford. In addition, products of many independent positive factors tend to Benford, because the sum of many independent random variables reduced mod 1 tends to the uniform distribution.

Powers of 2

Theorem 12.2. The leading digits of 2ⁿ, n = 1, 2, 3, …, follow Benford's law in the sense of asymptotic density.

Proof. {log₁₀ 2ⁿ} = {nα} with α = log₁₀ 2. The number α is irrational, since α = p/q would give 2^{q} = 10^{p}, impossible for positive integers because 5 divides the right side but not the left. By Weyl's equidistribution theorem, {nα} is equidistributed in [0, 1) for irrational α: for every interval [a, b) ⊂ [0, 1) the proportion of n ≤ N with {nα} ∈ [a, b) tends to b − a. By Proposition 12.1 the leading digit of 2ⁿ is d exactly when {nα} lies in an interval of length log₁₀(1 + 1/d). ∎

Proof of Weyl's theorem (sketch). By Weyl's criterion it suffices to show (1/N) ∑ₙ₌₁^{N} e^{2πikn α} → 0 for every nonzero integer k. This is a geometric sum equal to (1/N) e^{2πikα}(e^{2πikNα} − 1)/(e^{2πikα} − 1), whose numerator is bounded by 2 and whose denominator is a fixed nonzero number, because kα ∉ ℤ. Approximating the indicator of [a, b) above and below by trigonometric polynomials completes the argument.

Among 2¹, …, 2¹⁰⁰⁰ the leading digits 1 through 9 occur 301, 176, 125, 97, 79, 69, 56, 52 and 45 times, against Benford expectations of 301.0, 176.1, 124.9, 96.9, 79.2, 66.9, 58.0, 51.2 and 45.8. The same theorem applies to aⁿ whenever log₁₀ a is irrational, to n!, and to the Fibonacci numbers, since Fₙ ≈ φⁿ/√5 with log₁₀ φ irrational.

Applications and cautions

Benford's law is used to screen accounting and election data for fabrication (Nigrini's work since the 1990s), since invented numbers tend to have too uniform leading digits. It also guides the design of floating-point systems: Hamming showed that, for data whose significands are Benford, relative rounding error is distributed non-uniformly. Caution is needed: data confined to a narrow range (human heights, prices set to end in 99, assigned identifiers) are not Benford, and a deviation from Benford is evidence of nothing unless the data would be expected to span several orders of magnitude.

✏️ Your Turn

(a) Compute the probability, under Benford's law, that the leading digit is at least 5.
(b) Prove that two consecutive powers of 2 never have the same leading digit.
(c) Find the leading digit of 2¹⁰⁰ using log₁₀ 2 ≈ 0.30103.

Answers: (a) P(D ≥ 5) = log₁₀(10/5) = log₁₀ 2 ≈ 0.3010. (b) Let 2ⁿ have significand s ∈ [1, 10). If s < 5, then 2ⁿ⁺¹ has significand 2s, and ⌊2s⌋ ≥ ⌊s + 1⌋ = ⌊s⌋ + 1 because s ≥ 1, so the leading digit increases. If s ≥ 5, then 2ⁿ⁺¹ has significand 2s/10 ∈ [1, 2), with leading digit 1, while 2ⁿ has leading digit at least 5. (c) 100 log₁₀ 2 ≈ 30.103, so 2¹⁰⁰ = 10³⁰·10^{0.103} ≈ 1.27 × 10³⁰, leading digit 1. (Indeed 2¹⁰⁰ = 1.2676506… × 10³⁰.)

─────────────────────────────────
Lesson 13: Discrete Logarithms and Cryptography
─────────────────────────────────

📌 Key idea of this section:

        G = ⟨g⟩ cyclic of order n:   log_{g}: G → ℤ/nℤ,   g^{log_{g} h} = h,   an isomorphism (G, ·) ≅ (ℤ/nℤ, +)
        Computing g^{x} is easy (O(log x) multiplications); recovering x from g^{x} is believed hard

The discrete logarithm

Let G be a finite cyclic group of order n with generator g. The map ℤ/nℤ → G, x ↦ gˣ, is a group isomorphism, and its inverse is the discrete logarithm log_{g}. It satisfies the familiar laws log_{g}(hk) = log_{g} h + log_{g} k and log_{g}(hᵐ) = m log_{g} h, now with arithmetic modulo n, and change of base reads log_{g′} h = log_{g} h · (log_{g} g′)⁻¹ mod n for another generator g′. Algebraically, then, the discrete logarithm is exactly as well behaved as the real logarithm: both are isomorphisms from a multiplicative group to an additive one (Lesson 3). The difference is computational. The real logarithm can be evaluated to any precision in time polynomial in the number of digits (Lesson 5). For well-chosen groups no comparable algorithm for log_{g} is known.

Exponentiation is fast. Square-and-multiply computes gˣ with at most 2⌊log₂ x⌋ multiplications by scanning the binary digits of x: for x = 13 = 1101₂ one computes g, g², g³ = g²·g, g⁶, g¹², g¹³ = g¹²·g. The discrete logarithm problem (DLP) is: given g and h ∈ G, find x with gˣ = h.

Example. In G = (ℤ/23ℤ)ˣ, of order 22, the element 5 is a primitive root, and its powers 5⁰, 5¹, …, 5²¹ are

        1, 5, 2, 10, 4, 20, 8, 17, 16, 11, 9, 22, 18, 21, 13, 19, 3, 15, 6, 7, 12, 14.

Hence log₅ 8 = 6, log₅ 22 = 11 (consistent with 5¹¹ ≡ −1, as for any primitive root modulo an odd prime) and log₅ 19 = 15.

Diffie–Hellman key exchange

In 1976 Whitfield Diffie and Martin Hellman, building on ideas of Ralph Merkle, published a method by which two parties communicating over a public channel can agree on a secret. Fix a public group G = ⟨g⟩. Alice chooses a secret a and publishes A = gᵃ; Bob chooses a secret b and publishes B = gᵇ. Each computes the shared key K = Bᵃ = Aᵇ = gᵃᵇ. An eavesdropper sees g, gᵃ and gᵇ, and must solve the computational Diffie–Hellman problem of producing gᵃᵇ. Anyone who can compute discrete logarithms can do this, by recovering a from A. Whether the converse holds is a deep question; Maurer and Wolf showed that for many groups the two problems are equivalent under plausible assumptions.

With p = 23 and g = 5 as above, a = 6 and b = 15 give A = 8 and B = 19, and both parties obtain K = 19⁶ ≡ 8¹⁵ ≡ 5⁹⁰ ≡ 5² = 2 (mod 23), using 90 ≡ 2 (mod 22). The same idea underlies ElGamal encryption (1985), the Digital Signature Algorithm (1991) and their elliptic-curve analogues ECDH and ECDSA, which secure most present-day TLS connections.

Generic algorithms: baby-step giant-step

Theorem 13.1 (Shanks, 1971). The DLP in a cyclic group of order n can be solved with O(√n) group operations and O(√n) storage.

Proof. Let m = ⌈√n⌉. Every x ∈ {0, …, n − 1} can be written x = im + j with 0 ≤ i, j < m. Then gˣ = h is equivalent to gʲ = h·(g⁻ᵐ)ⁱ. Compute and store the m "baby steps" gʲ in a hash table. Then compute the "giant steps" h, hg⁻ᵐ, hg⁻²ᵐ, … until one appears in the table; this happens for some i < m, and x = im + j. Both phases use O(m) operations. ∎

Example. Solve 5ˣ ≡ 8 (mod 23). Here n = 22 and m = 5. The baby steps 5ʲ for j = 0, …, 4 are 1, 5, 2, 10, 4. Since 5⁵ ≡ 20 and 20·15 = 300 ≡ 1 (mod 23), we have 5⁻⁵ ≡ 15. The giant steps are 8 (not in the table) and then 8·15 = 120 ≡ 5, which is 5¹. So i = 1, j = 1, and x = 1·5 + 1 = 6.

Pollard's rho method (1978) achieves the same O(√n) time with only O(1) memory, by looking for a collision in a pseudo-random walk on G, and is the method of choice in practice; it parallelises well using distinguished points (van Oorschot and Wiener). Shoup (1997) proved that in the generic group model, where an algorithm can only perform group operations and test equality, Ω(√q) operations are necessary, q being the largest prime divisor of n. Generic algorithms therefore cannot do better than square-root time.

Pohlig–Hellman reduction

If n = ∏ qᵢ^{eᵢ}, the DLP in G reduces to DLPs in subgroups of prime order qᵢ. For each i, raising gˣ = h to the power n/qᵢ^{eᵢ} projects onto the subgroup of order qᵢ^{eᵢ} and determines x mod qᵢ^{eᵢ}, one base-qᵢ digit at a time; the Chinese remainder theorem then reassembles x mod n. The cost is O(∑ eᵢ(log n + √qᵢ)) group operations. Consequently cryptographic groups must have order divisible by a large prime q, typically with q ≥ 2²⁵⁶, and in (ℤ/pℤ)ˣ one uses a "safe prime" p = 2q + 1 or works in a subgroup of prime order q.

Example. For 5ˣ ≡ 8 (mod 23) with n = 22 = 2·11: raising to the 11th power, (5¹¹)ˣ = (−1)ˣ must equal 8¹¹ ≡ 1, so x is even. Raising to the square, (5²)ˣ = 2ˣ must equal 8² = 64 ≡ 18, and the powers of 2 modulo 23 are 1, 2, 4, 8, 16, 9, 18, …, so x ≡ 6 (mod 11). The Chinese remainder theorem gives x = 6.

Index calculus and subexponential attacks

In the multiplicative group of a finite field the elements have additional structure, namely factorisation, and this allows much faster algorithms. The index calculus method chooses a factor base of small primes ℓ ≤ B, finds many relations gᵏ ≡ ∏ ℓ^{eℓ} (mod p) by testing random k for B-smoothness, solves the resulting linear system modulo p − 1 for the unknowns log_{g} ℓ, and finally finds one k with h·gᵏ smooth. With the optimal choice of B the running time is L_{p}[1/2, √2], where

        L_{p}[α, c] = exp((c + o(1)) (ln p)^{α} (ln ln p)^{1−α}).

The number field sieve reduces this to L_{p}[1/3, (64/9)^{1/3}] ≈ L_{p}[1/3, 1.923], which is why 2048-bit primes are now the minimum recommended size for finite-field Diffie–Hellman. In fields of small characteristic, Joux and collaborators found in 2013–2014 quasi-polynomial algorithms, of complexity exp(O((ln ln Q)²)) in a field of Q elements, so such fields are no longer used. The 2015 "Logjam" attack exploited the fact that many servers shared a few 512-bit primes, for which the expensive precomputation of the number field sieve could be done once and reused.

Elliptic curves

For the group of points of a well-chosen elliptic curve over a prime field, no analogue of smoothness is known, and the best algorithms remain the generic ones of time O(√n). Hence a 256-bit elliptic-curve group gives roughly 128-bit security, comparable to a 3072-bit finite-field group. Special curves must be avoided: supersingular and pairing-friendly curves allow the MOV reduction to a finite-field DLP, and anomalous curves with n = p are broken in polynomial time by the Semaev–Satoh–Araki–Smart method, which is itself built on a p-adic elliptic logarithm.

Quantum algorithms

Peter Shor (1994) gave a quantum algorithm that solves the DLP in any group in which the group operation is efficiently computable, in time polynomial in log n. It uses the quantum Fourier transform over ℤ/nℤ × ℤ/nℤ to find the period of the function (a, b) ↦ gᵃh⁻ᵇ, whose kernel is generated by (log_{g} h, 1). The hidden-subgroup framework thus unifies the computation of the real logarithm via periods of exp (the kernel 2πiℤ of Lesson 7) with the discrete case. Large-scale quantum computers would break both RSA and all discrete-logarithm cryptography, and this is the motivation for the post-quantum standards (lattice-based ML-KEM and ML-DSA) published by NIST in 2024.

✏️ Your Turn

(a) Using the table of powers of 5 modulo 23, compute log₅ 13 and log₅ 13⁻¹.
(b) Solve 3ˣ ≡ 7 (mod 17) by baby-step giant-step with m = 4.
(c) Explain why the DLP in the additive group (ℤ/nℤ, +) with generator g (g coprime to n) is easy.

Answers: (a) From the table, 5¹⁴ ≡ 13, so log₅ 13 = 14, and log₅ 13⁻¹ = −14 ≡ 8 (mod 22); indeed 5⁸ ≡ 16 and 13·16 = 208 = 9·23 + 1. (b) Baby steps 3ʲ for j = 0, …, 3: 1, 3, 9, 10. Since 3⁴ ≡ 13 and 13·4 = 52 ≡ 1, 3⁻⁴ ≡ 4. Giant steps: 7, 7·4 = 28 ≡ 11, 11·4 = 44 ≡ 10 = 3³. So i = 2, j = 3 and x = 2·4 + 3 = 11; check: 3¹¹ ≡ 7 (mod 17). (c) "Exponentiation" there is multiplication: x·g ≡ h (mod n), so x ≡ h·g⁻¹ (mod n), and g⁻¹ is computed by the extended Euclidean algorithm in O(log n) steps. The isomorphism type of the group is the same as for any cyclic group of order n, for example (ℤ/pℤ)ˣ when n = p − 1; what differs is the representation, which is why the hardness of the DLP is a property of how the group is presented, not of the abstract group.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped by difficulty. The core problems check fluency with the definitions and standard techniques; the advanced problems require a short proof or a multi-step computation; the challenge problems are of the kind found on graduate qualifying examinations. Numerical answers should be verified independently, and every proof should be written out in full.

Core (Problems 1–20)

  1. Prove directly from the definition ln x = ∫₁ˣ dt/t that ln(x/y) = ln x − ln y for x, y > 0.
  2. Evaluate ∫₁^{e³} dt/t and ∫_{1/e}ᵉ dt/t.
  3. Prove that ln x ≤ x/e for all x > 0, with equality only at x = e.
  4. Solve 3²ˣ⁻¹ = 5ˣ⁺¹ exactly, and give x to four decimal places.
  5. Compute log₈ 32 and log₂₇ 9 exactly.
  6. Evaluate lim_{n→∞} (1 + 2/n)³ⁿ.
  7. Find the derivative of x^{1/x} for x > 0 and its maximum value.
  8. Express log₄ 7 and log_{1/2} 7 in terms of log₂ 7.
  9. Find the Maclaurin series of ln(1 − x²) up to the term in x⁶, and its radius of convergence.
  10. Use the series for ln(1 + x) to compute ln 1.1 to five decimal places, with an error bound.
  11. Compute the principal values Log(−2), Log(2i) and Log(−1 + i).
  12. Find all values of log(−4).
  13. Compute the principal value of 2ⁱ in the form a + bi, to four decimal places.
  14. Find ∫ x ln x dx.
  15. Evaluate ∫₁^{e} (ln x)² dx.
  16. Compute the entropy, in bits, of a fair six-sided die.
  17. Under Benford's law, find the probability that the leading digit is 1 or 2.
  18. Find the discrete logarithm x ∈ {0, …, 9} with 2ˣ ≡ 9 (mod 11).
  19. An amplifier multiplies power by 250. Express its gain in decibels.
  20. Estimate H₁₀₀₀ using Hₙ ≈ ln n + γ + 1/(2n), and state the size of the next correction.

Advanced (Problems 21–45)

  21. Prove that ln is not a rational function on (0, ∞).
  22. Prove that the sequence (1 + 1/n)ⁿ⁺¹ is strictly decreasing.
  23. Prove that eˣ ≥ 1 + x for all real x, and deduce that (1 + x/n)ⁿ ≤ eˣ whenever n > −x.
  24. Prove that lim_{x→0} (aˣ − 1)/x = ln a for every a > 0.
  25. Evaluate lim_{x→∞} x (ln(x + 1) − ln x).
  26. Prove that (n!)^{1/n}/n → 1/e.
  27. Evaluate ∑_{k≥1} 1/(k·2ᵏ).
  28. Evaluate ∑_{n≥1} 1/(n(2n + 1)).
  29. Use the artanh series to compute ln(5/4) to six decimal places.
  30. Let f(x) = ∏ₖ₌₁ⁿ (x − k). Compute f′(0)/f(0).
  31. Find the critical points of p(z) = (z − 1)(z − 2)(z − 4) and verify the Gauss–Lucas theorem.
  32. Let L be the branch of log on ℂ minus the closed positive imaginary axis {iy : y ≥ 0} with L(1) = 0. Find L(−1) and L(−i).
  33. Find all values of (1 + i)ⁱ, and the modulus and argument of the principal value.
  34. Evaluate ∮_{|z|=2} p′(z)/p(z) dz for p(z) = z⁵ + 3z + 1.
  35. Prove that ∫₀¹ ln(1 − x)/x dx = −π²/6, using ∑ 1/n² = π²/6.
  36. Prove that ∫₀^{∞} ln x/(1 + x²) dx = 0.
  37. Evaluate ∫₀¹ (x − 1)/ln x dx.
  38. Prove that H₂ₙ − Hₙ → ln 2, and deduce the value of the alternating harmonic series from it.
  39. Prove that ∑ₖ₌₂ⁿ 1/(k ln k) = ln ln n + O(1).
  40. Use Mertens' third theorem to estimate ∏_{p≤1000} (1 − 1/p), and compare with the true value 0.080965.
  41. Use Legendre's formula to find the exact power of 2 dividing C(20, 10).
  42. Use the prime number theorem to estimate the number of primes in the interval (10⁹, 10⁹ + 10⁶].
  43. Compute the entropy of the geometric distribution pₖ = 2⁻⁽ᵏ⁺¹⁾, k = 0, 1, 2, … .
  44. For p = (0.4, 0.3, 0.2, 0.1), compute H(p), the Shannon code lengths ⌈−log₂ pᵢ⌉, and the expected length of that code.
  45. Use the table in Lesson 13 to find log₅ 3 and log₅ 7 modulo 22, and use them to find log₅ 21.

Challenge (Problems 46–60)

  46. Prove that n(e − (1 + 1/n)ⁿ) → e/2.
  47. Let f: (0, ∞) → ℝ be continuous, and suppose that for every y > 0 the integral ∫ₓˣʸ f(t) dt is independent of x > 0. Prove that f(t) = c/t.
  48. Prove that ln is uniformly continuous on [1, ∞) but not on (0, 1].
  49. Prove that ∑_{n≥1} (−1)ⁿ (ln n)/n = γ ln 2 − (ln 2)²/2. You may use the result of Problem 52.
  50. Prove that ∑_{k≥1} cos(kθ)/k = −ln(2 sin(θ/2)) for 0 < θ < 2π.
  51. Prove that there is no continuous function s on the unit circle with s(z)² = z.
  52. Prove that ∑ₖ₌₁ⁿ (ln k)/k = (ln n)²/2 + C + o(1) for some constant C.
  53. Prove that ∏_{p≤n} p < 4ⁿ for every n ≥ 1.
  54. Deduce from the prime number theorem that for every ε > 0 and all sufficiently large x there is a prime in (x, (1 + ε)x].
  55. How many decimal digits does 100! have? Find the answer with logarithms, and show that the number of digits of n! is asymptotic to n log₁₀ n.
  56. Find the smallest n ≥ 1 such that 2ⁿ has leading digit 7, and state the asymptotic proportion of such n.
  57. Prove that the joint entropy satisfies H(X, Y) ≤ H(X) + H(Y), with equality if and only if X and Y are independent.
  58. Solve 5ˣ ≡ 8 (mod 23) by Pohlig–Hellman, and explain why a group of order 2²⁵⁶ would be a poor choice for Diffie–Hellman.
  59. Carry out Diffie–Hellman with p = 23, g = 5, a = 6, b = 15, and verify that both parties obtain the same key.
  60. Prove that |Log(1 + z)| ≤ −ln(1 − |z|) for |z| < 1.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. Fix y and let g(x) = ln(x/y) − ln x. Then g′(x) = (1/y)·(y/x) − 1/x = 0, so g is constant, and g(y) = ln 1 − ln y = −ln y. Hence ln(x/y) = ln x − ln y.
  2. ∫₁^{e³} dt/t = ln e³ = 3. ∫_{1/e}ᵉ dt/t = ln e − ln(1/e) = 1 − (−1) = 2.
  3. Let h(x) = ln x − x/e. Then h′(x) = 1/x − 1/e is positive for x < e and negative for x > e, so h has its maximum at x = e, where h(e) = 1 − 1 = 0. Hence h ≤ 0, with equality only at e. Equivalently, x^{e} ≤ e^{x} for all x > 0.
  4. Taking natural logarithms, (2x − 1) ln 3 = (x + 1) ln 5, so x(2 ln 3 − ln 5) = ln 5 + ln 3 and
       x = ln 15 / ln(9/5) ≈ 2.70805/0.58779 ≈ 4.6072.
  5. log₈ 32 = ln 32/ln 8 = 5 ln 2/(3 ln 2) = 5/3. log₂₇ 9 = 2 ln 3/(3 ln 3) = 2/3.
  6. (1 + 2/n)³ⁿ = ((1 + 2/n)ⁿ)³ → (e²)³ = e⁶ ≈ 403.43, by Theorem 2.4.
  7. With y = x^{1/x}, ln y = (ln x)/x, so y′/y = (1 − ln x)/x², and y′ = x^{1/x}(1 − ln x)/x². The derivative is positive for x < e and negative for x > e, so the maximum is e^{1/e} ≈ 1.44467.
  8. log₄ 7 = ln 7/ln 4 = ln 7/(2 ln 2) = ½ log₂ 7. log_{1/2} 7 = ln 7/(−ln 2) = −log₂ 7.
  9. Replace x by −x² in ln(1 + x): ln(1 − x²) = −x² − x⁴/2 − x⁶/3 − … . The series converges for x² < 1, so the radius is 1.
  10. ln 1.1 = 0.1 − 0.005 + 0.000333 − 0.000025 + 0.000002 − … . Five terms give 0.0953103, and by the alternating-series (or remainder) bound the error is less than the next term 10⁻⁶/6 ≈ 1.7·10⁻⁷. So ln 1.1 = 0.09531 to five decimals (true value 0.0953102).
  11. Log(−2) = ln 2 + iπ. Log(2i) = ln 2 + iπ/2. Log(−1 + i) = ½ ln 2 + 3iπ/4 ≈ 0.34657 + 2.35619i.
  12. log(−4) = ln 4 + i(π + 2πk) = 2 ln 2 + i(2k + 1)π, k ∈ ℤ.
  13. 2ⁱ = exp(i ln 2) = cos(ln 2) + i sin(ln 2) ≈ 0.7692 + 0.6390i. It lies on the unit circle.
  14. By parts with u = ln x and dv = x dx: ∫ x ln x dx = (x²/2) ln x − ∫ (x²/2)(1/x) dx = (x²/2) ln x − x²/4 + C.
  15. An antiderivative of (ln x)² is x(ln x)² − 2x ln x + 2x (differentiate to check). Evaluating from 1 to e gives (e − 2e + 2e) − (0 − 0 + 2) = e − 2 ≈ 0.71828.
  16. H = log₂ 6 = 1 + log₂ 3 ≈ 2.585 bits.
  17. log₁₀ 2 + log₁₀(3/2) = log₁₀ 3 ≈ 0.4771.
  18. The powers 2⁰, …, 2⁹ modulo 11 are 1, 2, 4, 8, 5, 10, 9, 7, 3, 6, so x = 6. (So 2 is a primitive root modulo 11.)
  19. 10 log₁₀ 250 = 10(2 + log₁₀ 2.5) ≈ 10 × 2.39794 = 23.98 dB.
  20. ln 1000 + γ + 1/2000 = 6.907755 + 0.577216 + 0.0005 = 7.485471. The next term is −1/(12·10⁶) ≈ −8.3·10⁻⁸, so H₁₀₀₀ = 7.4854709 to seven decimals; the true value is 7.48547086… .

Advanced

  21. Suppose ln x = P(x)/Q(x) on (0, ∞) with polynomials P, Q, Q ≢ 0. Since ln x → ∞ as x → ∞, deg P > deg Q, and then P(x)/(xQ(x)) tends to a nonzero constant or to ±∞. But (ln x)/x → 0 by Theorem 4.1. Contradiction.
  22. Let g(x) = (x + 1) ln(1 + 1/x) for x > 0. Then g′(x) = ln(1 + 1/x) − 1/x, which is negative by Proposition 1.6 (ln(1 + u) < u with u = 1/x). So g is strictly decreasing, and so is exp(g(n)) = (1 + 1/n)ⁿ⁺¹.
  23. The function eˣ − 1 − x has derivative eˣ − 1, negative for x < 0 and positive for x > 0, so its minimum is 0 at x = 0. Applying the inequality to x/n gives 1 + x/n ≤ e^{x/n}; when n > −x the left side is positive, and raising to the n-th power preserves the inequality: (1 + x/n)ⁿ ≤ eˣ.
  24. aˣ = exp(x ln a), so (aˣ − 1)/x = ln a · (exp(x ln a) − 1)/(x ln a) for a ≠ 1, and the last fraction tends to exp′(0) = 1. For a = 1 both sides are 0.
  25. x ln(1 + 1/x) = ln((1 + 1/x)ˣ) → ln e = 1.
  26. By Stirling, ln n! = n ln n − n + O(ln n), so (1/n) ln n! − ln n = −1 + O((ln n)/n) → −1, and (n!)^{1/n}/n → 1/e. The elementary bounds of Lesson 4 (n ln n − n + 1 ≤ ln n! ≤ (n + 1) ln(n + 1) − n) already suffice. At n = 100 the ratio is 0.3799, against 1/e ≈ 0.3679.
  27. ∑ xᵏ/k = −ln(1 − x) for |x| < 1. At x = 1/2 the sum is −ln(1/2) = ln 2.
  28. 1/(n(2n + 1)) = 1/n − 2/(2n + 1). The partial sum up to N is H_{N} − 2(1/3 + 1/5 + … + 1/(2N + 1)) = H_{N} − 2(H_{2N+1} − ½H_{N} − 1) = 2H_{N} − 2H_{2N+1} + 2. Since H_{2N+1} − H_{N} → ln 2, the sum is 2 − 2 ln 2 ≈ 0.61371.
  29. x = 5/4 corresponds to y = (x − 1)/(x + 1) = 1/9. Then ln(5/4) = 2(1/9 + 1/(3·9³) + 1/(5·9⁵) + 1/(7·9⁷) + …) = 2(0.1111111 + 0.0004572 + 0.0000034 + 0.00000003) ≈ 0.2231436. The true value is 0.22314355.
  30. f′/f = ∑ 1/(x − k), so f′(0)/f(0) = −∑ₖ₌₁ⁿ 1/k = −Hₙ.
  31. p(z) = z³ − 7z² + 14z − 8, p′(z) = 3z² − 14z + 14, whose roots are z = (7 ± √7)/3 ≈ 1.4514 and 3.2153. Both lie in the convex hull [1, 4] of the roots, as Gauss–Lucas predicts.
  32. The slit plane is simply connected and omits 0, so a branch exists by Theorem 7.4. The continuous argument starts at 0 at z = 1 and may not cross the positive imaginary axis, so it takes values in (−3π/2, π/2). Moving from 1 to −1 through the lower half-plane, the argument decreases from 0 to −π, so L(−1) = −iπ. Continuing to −i, it reaches −π/2 directly from 1 (clockwise a quarter turn), so L(−i) = −iπ/2.
  33. log(1 + i) = ½ ln 2 + i(π/4 + 2πk), so the values of (1 + i)ⁱ are exp(i·log(1 + i)) = e^{−π/4 − 2πk}·e^{i(ln 2)/2}, k ∈ ℤ. The principal value (k = 0) has modulus e^{−π/4} ≈ 0.45594 and argument ½ ln 2 ≈ 0.34657.
  34. By the argument principle the integral is 2πi times the number of zeros of p in |z| < 2. On |z| = 2, |z⁵| = 32 > 7 ≥ |3z + 1|, so by Rouché's theorem p has as many zeros in the disc as z⁵, namely 5. The integral is 10πi.
  35. For 0 ≤ x < 1, ln(1 − x)/x = −∑_{n≥1} xⁿ⁻¹/n. All terms have the same sign, so by monotone convergence we may integrate term by term: ∫₀¹ = −∑ 1/n² = −π²/6.
  36. The integral converges at 0 and ∞. Substituting x = 1/u, dx = −du/u², gives ∫₀^{∞} ln(1/u)/(1 + 1/u²) · du/u² = −∫₀^{∞} ln u/(1 + u²) du. So the integral equals its own negative and is 0.
  37. Let I(a) = ∫₀¹ (xᵃ − 1)/ln x dx for a > −1. Differentiating under the integral (justified by dominated convergence), I′(a) = ∫₀¹ xᵃ dx = 1/(a + 1), and I(0) = 0, so I(a) = ln(a + 1). The requested integral is I(1) = ln 2.
  38. H₂ₙ − Hₙ = (ln 2n + γ + o(1)) − (ln n + γ + o(1)) = ln 2 + o(1). Since 1 − 1/2 + … − 1/(2n) = H₂ₙ − 2·(1/2)Hₙ = H₂ₙ − Hₙ, the partial sums of the alternating harmonic series of even length tend to ln 2, and the odd-length ones differ by 1/(2n + 1) → 0.
  39. The function g(t) = 1/(t ln t) is decreasing for t > 1, so ∫ₖᵏ⁺¹ g ≤ g(k) ≤ ∫ₖ₋₁ᵏ g for k ≥ 3. Summing over 3 ≤ k ≤ n shows that ∑ₖ₌₃ⁿ 1/(k ln k) lies between ∫₃ⁿ g and ∫₂ⁿ g, that is, between ln ln n − ln ln 3 and ln ln n − ln ln 2. Adding the k = 2 term gives ln ln n + O(1).
  40. e⁻ᵞ/ln 1000 = 0.561459/6.907755 ≈ 0.08128. The true value 0.080965 differs by about 0.4%, consistent with the relative error O(1/ln x).
  41. The exponent is ∑_{k≥1} (⌊20/2ᵏ⌋ − 2⌊10/2ᵏ⌋) = (10 − 10) + (5 − 4) + (2 − 2) + (1 − 0) = 2. Indeed C(20, 10) = 184756 = 4 × 46189 with 46189 odd.
  42. The density of primes near 10⁹ is 1/ln 10⁹ ≈ 1/20.723, so the expected count is about 10⁶/20.723 ≈ 48 255. (The interval is short compared with 10⁹, so ln t is essentially constant on it.)
  43. H = ∑_{k≥0} 2⁻⁽ᵏ⁺¹⁾ log₂ 2ᵏ⁺¹ = ∑_{k≥0} (k + 1)/2ᵏ⁺¹ = ∑_{m≥1} m/2ᵐ = 2 bits.
  44. H = −(0.4 log₂ 0.4 + 0.3 log₂ 0.3 + 0.2 log₂ 0.2 + 0.1 log₂ 0.1) ≈ 1.8464 bits. The lengths are ⌈1.32⌉ = 2, ⌈1.74⌉ = 2, ⌈2.32⌉ = 3, ⌈3.32⌉ = 4; Kraft's sum is 1/4 + 1/4 + 1/8 + 1/16 = 11/16 ≤ 1. The expected length is 0.8 + 0.6 + 0.6 + 0.4 = 2.4 bits, which lies in [H, H + 1). (A Huffman code achieves 1.9 bits.)
  45. From the table, 5¹⁶ ≡ 3 and 5¹⁹ ≡ 7, so log₅ 3 = 16 and log₅ 7 = 19. Then log₅ 21 = 16 + 19 = 35 ≡ 13 (mod 22), and indeed 5¹³ ≡ 21.

Challenge

  46. Let aₙ = n ln(1 + 1/n) = 1 − 1/(2n) + O(1/n²) by the series of Lesson 5. Then (1 + 1/n)ⁿ = e^{aₙ} = e·e^{−1/(2n) + O(1/n²)} = e(1 − 1/(2n) + O(1/n²)), so n(e − (1 + 1/n)ⁿ) = e/2 + O(1/n) → e/2.
  47. Let F be an antiderivative of f. Then F(xy) − F(x) is independent of x; differentiating in x gives y f(xy) − f(x) = 0 for all x, y > 0. Setting x = 1 gives f(y) = f(1)/y, so f(t) = c/t with c = f(1). Conversely c/t has the property, with ∫ₓˣʸ = c ln y.
  48. On [1, ∞), |ln x − ln y| ≤ |x − y| by the mean value theorem, since |ln′| = 1/ξ ≤ 1 there; so ln is Lipschitz, hence uniformly continuous. On (0, 1], take x = e⁻ⁿ and y = e⁻ⁿ⁻¹: then |x − y| < e⁻ⁿ → 0 while |ln x − ln y| = 1, so ln is not uniformly continuous.
  49. Let L(N) = ∑_{n≤N} (ln n)/n = (ln N)²/2 + C + o(1) (Problem 52). The partial sum of even length is S_{2N} = 2∑_{k≤N} ln(2k)/(2k) − L(2N) = ln 2 · H_{N} + L(N) − L(2N). Substituting H_{N} = ln N + γ + o(1) and the asymptotic for L,
       S_{2N} = ln 2 ln N + γ ln 2 + (ln N)²/2 − (ln N + ln 2)²/2 + o(1) = γ ln 2 − (ln 2)²/2 + o(1).
     The odd partial sums differ by (ln(2N + 1))/(2N + 1) → 0. Numerically the value is 0.159869.
  50. For 0 < θ < 2π, z = e^{iθ} ≠ 1, and Abel's theorem (or Dirichlet's test with the boundary behaviour of the power series) gives ∑ e^{ikθ}/k = −Log(1 − e^{iθ}). Since 1 − e^{iθ} = −2i sin(θ/2) e^{iθ/2} = 2 sin(θ/2) e^{i(θ − π)/2}, with 2 sin(θ/2) > 0 and (θ − π)/2 ∈ (−π/2, π/2), we get −Log(1 − e^{iθ}) = −ln(2 sin(θ/2)) + i(π − θ)/2. Taking real parts gives the result (and imaginary parts give ∑ sin(kθ)/k = (π − θ)/2).
  51. Suppose s is continuous on |z| = 1 with s(z)² = z. Let σ(θ) = s(e^{iθ})e^{−iθ/2} for θ ∈ [0, 2π]. Then σ(θ)² = 1, so σ is a continuous function with values in {1, −1}, hence constant. But s(e^{2πi}) = s(1) gives σ(2π) = s(1)e^{−iπ} = −σ(0), a contradiction.
  52. Let g(t) = (ln t)/t, which is decreasing for t ≥ e since g′(t) = (1 − ln t)/t². Put dₙ = ∑ₖ₌₃ⁿ g(k) − ∫₃ⁿ g(t) dt. Then dₙ₊₁ − dₙ = g(n + 1) − ∫ₙⁿ⁺¹ g ≤ 0, so dₙ is decreasing; and since g(k) ≥ ∫ₖᵏ⁺¹ g, we have ∑ₖ₌₃ⁿ g(k) ≥ ∫₃ⁿ⁺¹ g ≥ ∫₃ⁿ g, so dₙ ≥ 0. Hence dₙ converges. As ∫₃ⁿ g = (ln n)²/2 − (ln 3)²/2, the claim follows, with C collecting the limit of dₙ, the constant (ln 3)²/2 and the terms k = 1, 2.
  53. Induction on n; the cases n ≤ 2 are clear. If n > 2 is even, it is not prime and the claim follows from n − 1. If n = 2m + 1 is odd, every prime p with m + 2 ≤ p ≤ 2m + 1 divides C(2m + 1, m), which is at most 4ᵐ because C(2m + 1, m) = C(2m + 1, m + 1) and these two terms sum to at most 2²ᵐ⁺¹. Hence ∏_{p≤2m+1} p ≤ ∏_{p≤m+1} p · 4ᵐ < 4ᵐ⁺¹·4ᵐ = 4²ᵐ⁺¹ by the induction hypothesis for m + 1.
  54. π((1 + ε)x) − π(x) = (1 + ε)x/ln((1 + ε)x)·(1 + o(1)) − x/ln x·(1 + o(1)) = εx/ln x + o(x/ln x), using ln((1 + ε)x) = ln x + O(1). This tends to ∞, so for large x the interval contains primes (in fact about εx/ln x of them).
  55. The number of digits of N is ⌊log₁₀ N⌋ + 1. Summing, log₁₀ 100! = ∑ₖ₌₁¹⁰⁰ log₁₀ k ≈ 157.970, so 100! has 158 digits (Stirling gives the same: (100 ln 100 − 100 + ½ ln(200π))/ln 10 ≈ 157.970). In general log₁₀ n! = (n ln n − n + O(ln n))/ln 10 ~ n log₁₀ n.
  56. We need {n log₁₀ 2} ∈ [log₁₀ 7, log₁₀ 8) = [0.84510, 0.90309). Checking n = 1, 2, … , the first n is 46: 46 × 0.30103 = 13.8474, and 2⁴⁶ = 70 368 744 177 664. (For n = 3, 3 × 0.30103 = 0.90309 lies just at the right endpoint and 2³ = 8.) By Theorem 12.2 the proportion of such n is log₁₀(8/7) ≈ 0.0580.
  57. Let p(x, y) be the joint distribution with marginals p(x), p(y). Then H(X) + H(Y) − H(X, Y) = ∑ p(x, y) log₂(p(x, y)/(p(x)p(y))) = D(p(x, y) ‖ p(x)p(y))/ln 2 ≥ 0 by Gibbs' inequality, with equality if and only if p(x, y) = p(x)p(y) for all x, y, that is, independence.
  58. As in Lesson 13: x is even because 8¹¹ ≡ 1, and x ≡ 6 (mod 11) because 2ˣ ≡ 18 (mod 23) in the subgroup generated by 5² = 2; so x = 6. A group of order 2²⁵⁶ is a 2-group: Pohlig–Hellman solves the DLP one binary digit at a time, using about 256 steps each of trivial cost, so it is completely insecure.
  59. A = 5⁶ ≡ 8 and B = 5¹⁵ ≡ 19 (mod 23). Alice computes B⁶ = 19⁶ ≡ 2 and Bob computes A¹⁵ = 8¹⁵ ≡ 2, both equal to 5⁹⁰ = 5^{4·22+2} ≡ 5² = 2. The shared key is 2.
  60. For |z| < 1, Log(1 + z) = ∑ (−1)ᵏ⁺¹ zᵏ/k, so by the triangle inequality |Log(1 + z)| ≤ ∑ |z|ᵏ/k = −ln(1 − |z|).
