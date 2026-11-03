Exponential Growth — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

The elementary theory of exponential growth begins and ends with the rule "multiply by the same factor at every step". That rule is correct, but it is only the visible surface of a structure that runs through nearly every branch of mathematics. The exponential function is the unique solution of the simplest linear differential equation, the unique continuous homomorphism from the additive reals to the multiplicative reals, the limit of compound interest, the law of radioactive decay, the generic behaviour of linear systems near equilibrium, the mean behaviour of branching processes, the early phase of every epidemic, and the dividing line between tractable and intractable computation.

This course treats exponential growth and decay at the level of a graduate course in applied analysis. We state definitions precisely, prove the theorems we use, and track the hypotheses that make them true. The emphasis is on three recurring themes. The first is characterization: why the exponential is forced upon us by very weak assumptions (linearity, memorylessness, additivity). The second is comparison: how exponential rates dominate polynomial rates, how they are measured (growth exponents, spectral radii, Malthusian parameters, entropy), and how they are bounded (Grönwall). The third is saturation: how nonlinear feedback (logistic regulation, depletion of susceptibles, extinction) bends exponential curves and what survives of the exponential law when it does.

Notation. Throughout, exp(x) = eˣ, ln is the natural logarithm, ℝ₊ = [0, ∞), and for real functions f(x) ~ g(x) means f(x)/g(x) → 1. We write e^(kt) when the exponent is a compound expression. A matrix norm ‖·‖ is always an operator norm, so that ‖AB‖ ≤ ‖A‖‖B‖. Probabilities are written P(·) and expectations E[·].

Prerequisites are a first course in real analysis (uniform convergence, the mean value theorem), linear algebra (eigenvalues, Jordan form) and elementary probability (generating functions, conditional probability). Each lesson ends with exercises; sixty further problems, graded Core, Advanced and Challenge, follow the last lesson with a complete worked answer key.

In this course, you will:

  1. Prove that y′ = ky has exactly one solution through each initial point, and characterize the exponential by its functional equation
  2. Construct e as a limit, prove the compound-interest inequalities, and quantify continuous compounding
  3. Model radioactive decay as a memoryless random process and solve decay chains
  4. Prove that exponentials dominate every polynomial and organize growth rates into a hierarchy
  5. Solve the inhomogeneous linear equation and prove Grönwall's inequality
  6. Analyse the logistic equation: explicit solution, equilibria, stability and harvesting bifurcations
  7. Build the matrix exponential and read stability of x′ = Ax from the spectrum
  8. Study discrete models, linear recurrences and the Leslie matrix through Perron–Frobenius theory
  9. Compute extinction probabilities of Galton–Watson branching processes
  10. Derive the threshold, peak and final-size results of the SIR epidemic model
  11. Separate polynomial, subexponential and exponential complexity in algorithms
  12. Define exponential growth rates in general via Fekete's lemma, with applications to groups and entropy

─────────────────────────────────
Lesson 1: The Equation y′ = ky — Existence, Uniqueness and Characterization
─────────────────────────────────

📌 Key idea of this section:

        y′ = ky,  y(0) = y₀   has the unique solution   y(t) = y₀ e^(kt)  on all of ℝ

Exponential growth is, before anything else, a statement about rates: a quantity grows exponentially when its rate of change is proportional to its current size. The proportionality constant k is the relative (or per-capita) growth rate, since k = y′/y = (d/dt) ln|y|. The sign of k distinguishes growth (k > 0) from decay (k < 0).

Defining the exponential

There are several equivalent definitions of the exponential function. For definiteness we take the power series

        exp(x) = ∑_{n=0}^{∞} xⁿ/n!

which converges absolutely for every real (indeed complex) x by the ratio test, since |x|^{n+1}/(n+1)! divided by |x|ⁿ/n! equals |x|/(n+1) → 0. The convergence is uniform on bounded sets, so the series may be differentiated term by term, giving exp′ = exp and exp(0) = 1. The Cauchy product of two absolutely convergent series, together with the binomial theorem, gives the addition law

        exp(x) exp(y) = ∑_{n} ∑_{j+k=n} xʲ yᵏ/(j! k!) = ∑_{n} (x + y)ⁿ/n! = exp(x + y)

From the addition law, exp(x) exp(−x) = exp(0) = 1, so exp never vanishes; being continuous with exp(0) = 1 it is therefore strictly positive. Since exp′ = exp > 0 the function is strictly increasing, exp(x) ≥ 1 + x for x ≥ 0 shows it is unbounded above, and exp(−x) = 1/exp(x) shows it tends to 0 at −∞. Hence exp is a bijection ℝ → (0, ∞), and its inverse is the natural logarithm. We define e = exp(1) and, for a > 0, aˣ = exp(x ln a); for rational x this agrees with the algebraic definition of powers, by the addition law.

Theorem 1.1 (uniqueness). Let k ∈ ℝ and let y be a differentiable function on an interval I containing 0 with y′ = ky on I and y(0) = y₀. Then y(t) = y₀ e^(kt) for every t ∈ I.

Proof. Put u(t) = y(t) e^(−kt). Then u is differentiable and u′(t) = y′(t) e^(−kt) − k y(t) e^(−kt) = (y′ − ky) e^(−kt) = 0 on I. By the mean value theorem u is constant on I, so u(t) = u(0) = y₀ and y(t) = y₀ e^(kt). Conversely y₀ e^(kt) is a solution, so a solution exists, is unique, and is defined on all of ℝ. ∎

The integrating-factor argument is so short that it hides the general principle. The equation y′ = F(t, y) with F(t, y) = ky satisfies a global Lipschitz condition |F(t, y) − F(t, z)| ≤ |k| |y − z|, and the Picard–Lindelöf theorem guarantees a unique solution for every initial condition. It is instructive to see Picard iteration produce the exponential series. Write the problem as the integral equation y(t) = y₀ + ∫₀ᵗ k y(s) ds and iterate from φ₀(t) = y₀:

        φ₁(t) = y₀(1 + kt)
        φ₂(t) = y₀(1 + kt + k²t²/2)
        φₙ(t) = y₀ ∑_{j=0}^{n} (kt)ʲ/j!

so the Picard iterates are exactly the partial sums of y₀ exp(kt). The standard estimate |φₙ₊₁(t) − φₙ(t)| ≤ |y₀| (|k||t|)^{n+1}/(n+1)! is the error bound of the Taylor series.

Characterization by the functional equation

The addition law exp(x + y) = exp(x) exp(y) characterizes the exponential among well-behaved functions. This is the mathematical form of the statement that exponential growth is growth by a fixed factor over every interval of fixed length.

Theorem 1.2 (Cauchy). Let f : ℝ → ℝ be continuous, not identically zero, with f(x + y) = f(x) f(y) for all x, y. Then a = f(1) > 0 and f(x) = aˣ for all x.

Proof. If f(x₀) = 0 for some x₀ then f(x) = f(x₀) f(x − x₀) = 0 for all x, which is excluded. So f never vanishes, and f(x) = f(x/2)² > 0. Then g = ln f is continuous and additive: g(x + y) = g(x) + g(y). Additivity gives g(nx) = n g(x) for integers n, hence g(m/n) = (m/n) g(1) for rationals, and continuity extends this to g(x) = x g(1) for all real x. Therefore f(x) = exp(x ln a) = aˣ with a = f(1). ∎

Continuity can be weakened to measurability, or even to boundedness on some interval; without any regularity hypothesis, however, the axiom of choice produces additive functions g that are not linear (via a Hamel basis of ℝ over ℚ), and exp∘g is then a pathological solution of the multiplicative equation. Every such pathological solution is unbounded on every interval and has a graph dense in the upper half-plane {y > 0}.

The relative rate as the invariant

If y > 0 solves y′ = k(t) y with a continuous time-dependent rate, the same integrating-factor argument gives

        y(t) = y(0) exp( ∫₀ᵗ k(s) ds )

and the long-run exponential growth rate is lim (1/t) ln y(t) = lim (1/t) ∫₀ᵗ k(s) ds, the time average of the instantaneous rate, whenever that limit exists. The doubling time of a process with constant rate k > 0 is T₂ = ln 2/k, and the half-life of a process with rate −λ < 0 is T½ = ln 2/λ.

✏️ Your Turn

(a) Find the solution of y′ = −3y with y(2) = 5, and state the time at which y = 5/e.
(b) Show that the solution of y′ = (1 + cos t) y, y(0) = 1, satisfies lim (1/t) ln y(t) = 1.
(c) Show that a differentiable f with f(x + y) = f(x) f(y) and f(0) = 1 satisfies f′ = f′(0) f, and deduce the form of f from Theorem 1.1.

Answers: (a) y(t) = 5 e^(−3(t − 2)); y = 5/e when 3(t − 2) = 1, that is t = 7/3. (b) ln y(t) = t + sin t, so (1/t) ln y(t) = 1 + (sin t)/t → 1. (c) f′(x) = lim_{h→0} (f(x + h) − f(x))/h = f(x) lim (f(h) − 1)/h = f(x) f′(0); by Theorem 1.1, f(x) = e^(cx) with c = f′(0).

─────────────────────────────────
Lesson 2: The Number e — Compound Interest and Continuous Compounding
─────────────────────────────────

📌 Key idea of this section:

        (1 + x/n)ⁿ  increases to  eˣ  as n → ∞   (x > 0),   and   1 + x ≤ eˣ  for all real x

Jacob Bernoulli, studying compound interest in 1683, asked what happens to one unit of capital lent at 100% annual interest if the interest is credited n times per year. After one year the balance is (1 + 1/n)ⁿ. Bernoulli showed that this sequence is bounded between 2 and 3; Euler later identified its limit with the base of the natural logarithm and named it e.

        n = 1:      2
        n = 2:      2.25
        n = 12:     2.6130352902…
        n = 365:    2.7145674820…
        n → ∞:      e = 2.7182818284…

Monotonicity and the limit

Theorem 2.1. For each x > 0 the sequence aₙ = (1 + x/n)ⁿ is strictly increasing and converges to eˣ.

Proof. Monotonicity follows from the inequality of arithmetic and geometric means applied to the n + 1 numbers 1, 1 + x/n, …, 1 + x/n (n copies): their arithmetic mean is (1 + n + x)/(n + 1) = 1 + x/(n + 1), and the means are unequal because not all numbers are equal, so (1 + x/n)^{n/(n+1)} < 1 + x/(n + 1), which is aₙ < aₙ₊₁. For the limit, n ln(1 + x/n) = x · [ln(1 + h)/h] with h = x/n → 0, and ln(1 + h)/h → 1 because it is the difference quotient of ln at 1. By continuity of exp, aₙ = exp(n ln(1 + x/n)) → eˣ. ∎

The fundamental inequality 1 + x ≤ eˣ, valid for all real x with equality only at x = 0, follows from convexity: the tangent line to eˣ at 0 is 1 + x, and a convex function lies above its tangent lines. Replacing x by x/n and raising to the n-th power gives (1 + x/n)ⁿ ≤ eˣ whenever 1 + x/n ≥ 0, an independent proof of the upper bound. A matching lower bound comes from the elementary inequality ln(1 + h) ≥ h − h²/2 for h ≥ 0 (both sides vanish at 0, and the derivative of the difference is 1/(1 + h) − 1 + h = h²/(1 + h) ≥ 0). Taking h = x/n and multiplying by n gives n ln(1 + x/n) ≥ x − x²/(2n), hence

        eˣ e^(−x²/(2n))  ≤  (1 + x/n)ⁿ  ≤  eˣ        (x ≥ 0)

so the relative error of the n-fold compounding approximation is at most 1 − e^(−x²/(2n)) ≤ x²/(2n). For x = 1 and n = 1000, the true error e − (1 + 1/1000)^{1000} ≈ 0.0013579 is very close to the first-order estimate e/(2n) ≈ 0.0013591; indeed a finer expansion gives (1 + 1/n)ⁿ = e(1 − 1/(2n) + 11/(24n²) − …).

Nominal rates, effective rates and the force of interest

A nominal annual rate r compounded n times per year produces the effective annual rate i = (1 + r/n)ⁿ − 1. Continuous compounding at nominal rate δ (the force of interest in actuarial notation) produces A(t) = A₀ e^(δt), the solution of A′ = δA, with effective rate e^δ − 1. Conversion is via δ = ln(1 + i). For example, with r = 5%:

        monthly compounding:     (1 + 0.05/12)¹² − 1 ≈ 0.051162   (5.1162%)
        continuous compounding:  e^0.05 − 1 ≈ 0.051271              (5.1271%)

The present value of a payment C due at time t is C e^(−δt); the present value of a continuous income stream of rate c(t) over [0, T] is ∫₀ᵀ c(t) e^(−δt) dt, and for a constant perpetual stream it is c/δ. These are Laplace transforms, which is one reason the Laplace transform appears so naturally in economics and actuarial science.

Doubling times and the rule of 72

At effective rate i per period, capital doubles after T = ln 2/ln(1 + i) periods. Since ln(1 + i) ≈ i − i²/2, we get T ≈ (ln 2)/i · (1 + i/2), and the folk rule "T ≈ 72/(100 i)" uses 72 instead of 69.3 = 100 ln 2 to absorb the correction term near i = 8% (the exact value of 100 i · T at i = 8% is 72.05) and because 72 has many divisors. At 7% the exact doubling time is ln 2/ln 1.07 ≈ 10.245 years against the rule's 72/7 ≈ 10.286; under continuous compounding at δ = 0.07 it is ln 2/0.07 ≈ 9.902 years.

Irrationality of e

Theorem 2.2. e is irrational.

Proof. Suppose e = p/q with positive integers p, q. Then x = q!(e − ∑_{j=0}^{q} 1/j!) is an integer, since q! e = (q − 1)! p and q!/j! is an integer for j ≤ q. But x = ∑_{j>q} q!/j! = 1/(q+1) + 1/((q+1)(q+2)) + … lies strictly between 0 and ∑_{m≥1} (q+1)^{−m} = 1/q ≤ 1, a contradiction. ∎

Hermite proved in 1873 that e is transcendental, the first number proved transcendental that was not constructed for the purpose; Lindemann adapted the method to π in 1882.

✏️ Your Turn

(a) Find the balance after 10 years on 1000 invested at a nominal 6% compounded annually, monthly and continuously.
(b) Which effective annual rate corresponds to a force of interest δ = 0.04? Give 5 decimal places.
(c) Prove that (1 − 1/n)ⁿ → 1/e.

Answers: (a) Annually 1000 · 1.06¹⁰ ≈ 1790.85; monthly 1000 · 1.005¹²⁰ ≈ 1819.40; continuously 1000 e^0.6 ≈ 1822.12. (b) e^0.04 − 1 ≈ 0.04081. (c) n ln(1 − 1/n) = −[ln(1 − h)/(−h)] with h = 1/n, and the bracket tends to 1, so the limit of the logarithm is −1 and the sequence tends to e⁻¹.

─────────────────────────────────
Lesson 3: Half-Life, Radioactive Decay and the Exponential Distribution
─────────────────────────────────

📌 Key idea of this section:

        N(t) = N₀ e^(−λt),   T½ = ln 2/λ,   mean lifetime τ = 1/λ = T½/ln 2

Radioactive decay was the first physical process recognized as fundamentally random. Rutherford and Soddy (1902–1903) established that the activity of a radioactive sample decays exponentially; the explanation came later from quantum mechanics, but the mathematical law can be derived from a single probabilistic hypothesis.

Memorylessness forces the exponential law

Let T be the (random) lifetime of a single unstable nucleus, with survival function S(t) = P(T > t). The physical hypothesis is that a nucleus does not age: the probability that it survives a further time t, given that it has survived to time s, does not depend on s.

        P(T > s + t | T > s) = P(T > t),   that is   S(s + t) = S(s) S(t)

Theorem 3.1. If T is a positive random variable that is not almost surely infinite, with S(t) > 0 for all t and S(s + t) = S(s) S(t) for all s, t ≥ 0, then S(t) = e^(−λt) for some λ > 0. Thus T has the exponential distribution with density λe^(−λt), mean 1/λ and variance 1/λ².

Proof. S is monotone, hence measurable, and right-continuous as a survival function. The argument of Theorem 1.2 applies on [0, ∞) (rationals first, then right-continuity), giving S(t) = S(1)ᵗ. Since S(1) ∈ (0, 1) (it is less than 1, otherwise S ≡ 1 and T = ∞ almost surely) we may write S(1) = e^(−λ) with λ > 0. ∎

The exponential distribution is the only continuous memoryless distribution; its discrete analogue is the geometric distribution. The rate λ is a hazard rate: P(t < T ≤ t + h | T > t) = λh + o(h).

From one nucleus to a sample

For N₀ independent nuclei, the number surviving at time t is binomial with parameters N₀ and e^(−λt), so its mean is N₀ e^(−λt) and its standard deviation is √(N₀ e^(−λt)(1 − e^(−λt))). For a macroscopic sample (N₀ of order 10²⁰), the relative fluctuation is of order 10⁻¹⁰ and the deterministic law N′ = −λN is effectively exact. The activity A(t) = λN(t) is what a detector measures; it decays with the same half-life.

Three time scales are related by T½ = τ ln 2: the half-life T½, the mean lifetime τ = 1/λ, and the e-folding time (equal to τ). After m half-lives a fraction 2⁻ᵐ remains; after 10 half-lives, less than 0.1%.

Radiocarbon dating

Carbon-14 is produced in the atmosphere by cosmic rays and incorporated into living organisms at an approximately constant ratio to carbon-12. After death, intake stops and ¹⁴C decays with half-life 5730 years (the modern value; Libby's original value was 5568 years, and conventional radiocarbon ages are still quoted using it). If a fraction f of the original ¹⁴C remains, the age is

        t = (T½/ln 2) · ln(1/f) = 8266.6 · ln(1/f)  years      (T½ = 5730)

A sample with f = 0.30 has age 8266.6 · ln(10/3) ≈ 9953 years. In practice the raw ages are calibrated against tree-ring and other records, because atmospheric ¹⁴C production has not been constant.

Decay chains and the Bateman equations

Suppose nuclide A decays to B with rate λ_A and B decays to a stable C with rate λ_B ≠ λ_A. With N_A(0) = N₀ and N_B(0) = 0:

        N_A′ = −λ_A N_A
        N_B′ = λ_A N_A − λ_B N_B

The first equation gives N_A = N₀ e^(−λ_A t). The second is an inhomogeneous linear equation (see Lesson 5), whose solution is

        N_B(t) = N₀ λ_A/(λ_B − λ_A) · ( e^(−λ_A t) − e^(−λ_B t) )

Differentiating and setting N_B′ = 0 gives the time of maximum daughter population t* = ln(λ_B/λ_A)/(λ_B − λ_A). If the parent is much longer-lived (λ_A ≪ λ_B), then for t ≫ 1/λ_B the ratio N_B/N_A tends to λ_A/(λ_B − λ_A) ≈ λ_A/λ_B: the activities λ_A N_A and λ_B N_B become nearly equal (secular equilibrium). Bateman (1910) solved the general n-member chain; the solution is a linear combination of the exponentials e^(−λ_j t), obtained also as the matrix exponential of a triangular matrix (Lesson 7).

✏️ Your Turn

(a) A sample retains 20% of its original ¹⁴C. Using T½ = 5730 years, find its age to the nearest 10 years.
(b) Show that the median of an exponential lifetime is the half-life, and that the mean exceeds the median.
(c) For a chain A → B → C with λ_A = 1 and λ_B = 2 (per hour), find t* and N_B(t*)/N₀.

Answers: (a) t = 5730 · ln 5/ln 2 ≈ 13,305, so about 13,300 years. (b) S(m) = 1/2 gives m = ln 2/λ = T½; the mean 1/λ exceeds ln 2/λ since ln 2 < 1. (c) t* = ln 2/(2 − 1) = ln 2 ≈ 0.693 h; N_B/N₀ = (1/(2 − 1))(e^(−ln 2) − e^(−2 ln 2)) = 1/2 − 1/4 = 1/4.

─────────────────────────────────
Lesson 4: Exponential versus Polynomial — A Hierarchy of Growth Rates
─────────────────────────────────

📌 Key idea of this section:

        for every a > 1 and every k:   nᵏ/aⁿ → 0,   and   (ln x)ᵏ/x^ε → 0  for every ε > 0

The phrase "growing exponentially" is used colloquially for anything that grows fast. Mathematically it is a precise and very strong statement: exponential growth eventually overwhelms every polynomial, however large its degree and coefficients. We prove this in several ways, because each proof generalizes differently.

Three proofs that eˣ dominates xᵏ

Theorem 4.1. For every k ≥ 0, xᵏ e^(−x) → 0 as x → ∞.

Proof 1 (series). For x > 0 every term of the exponential series is positive, so eˣ > x^{k+1}/(k+1)!. Hence 0 < xᵏ/eˣ < (k+1)!/x → 0.

Proof 2 (logarithms). ln(xᵏ e^(−x)) = k ln x − x = −x(1 − k (ln x)/x), and (ln x)/x → 0 (for instance because ln x ≤ 2√x, as the derivative of 2√x − ln x is (√x − 1)/x ≥ 0 for x ≥ 1). So the logarithm tends to −∞.

Proof 3 (L'Hôpital). Apply L'Hôpital's rule k times (for integer k): xᵏ/eˣ has the same limit as k!/eˣ, which is 0. ∎

Corollary 4.2. For a > 1 and any real k, nᵏ/aⁿ → 0. For ε > 0 and any k, (ln x)ᵏ/x^ε → 0. Both follow by substitution: aⁿ = e^(n ln a), and setting x = eᵘ turns (ln x)ᵏ/x^ε into uᵏ/e^(εu).

The discrete version is the ratio test: if bₙ = nᵏ/aⁿ then bₙ₊₁/bₙ = (1 + 1/n)ᵏ/a → 1/a < 1, so the series ∑ bₙ converges and in particular bₙ → 0.

The asymptotic hierarchy

Write f ≪ g if f(n)/g(n) → 0. Then for constants 0 < ε < 1, k > 1 and a > 1:

        1 ≪ ln ln n ≪ ln n ≪ (ln n)ᵏ ≪ n^ε ≪ n ≪ nᵏ ≪ n^(ln n) ≪ 2^(n^ε) ≪ aⁿ ≪ n! ≪ nⁿ ≪ 2^(2ⁿ)

A few links deserve justification. n^(ln n) = e^((ln n)²) and (ln n)² ≪ n^ε ln 2, so n^(ln n) ≪ 2^(n^ε); this quasi-polynomial class sits strictly between polynomial and exponential. For n!, Stirling's formula

        n! ~ √(2πn) (n/e)ⁿ

shows n!/aⁿ ≥ (n/(ae))ⁿ → ∞, while n!/nⁿ ~ √(2πn) e^(−n) → 0. Stirling's approximation is already good at n = 10: it gives 3,598,696 against 10! = 3,628,800, an error of about 0.83%, consistent with the correction factor 1 + 1/(12n).

Exponential rate as the right invariant

Two exponential functions aⁿ and bⁿ with a < b are separated by an exponential factor (b/a)ⁿ, so the natural coarse invariant of a positive sequence is its exponential growth rate

        γ = limsup_{n→∞} (1/n) ln xₙ,

equivalently the base e^γ = limsup xₙ^{1/n}. Polynomial factors do not change γ: nᵏ aⁿ and aⁿ have the same rate ln a. By the root test, γ also determines the radius of convergence 1/e^γ of the power series ∑ xₙ zⁿ (Cauchy–Hadamard), a link between growth rates and complex analysis that is the starting point of analytic combinatorics: the exponential growth of the coefficients of a generating function is dictated by the location of its dominant singularity.

A warning about finite ranges

The hierarchy is asymptotic. The polynomial n¹⁰⁰ exceeds 2ⁿ for all 2 ≤ n ≤ 996 (the crossover lies between 996 and 997, where n ln 2 = 100 ln n), and 1.0001ⁿ remains below n² for every n from 2 up to 248,474. Statements of the form "exponential beats polynomial" therefore carry no information about any particular range of n without explicit constants, a point that matters greatly in complexity theory (Lesson 11).

✏️ Your Turn

(a) Find lim_{x→∞} x¹⁰⁰⁰ e^(−x/1000).
(b) Order by growth: n^(√n), 3ⁿ, n! / 2ⁿ, (ln n)^(ln n).
(c) Use the series to show eˣ ≥ x³/6 for x ≥ 0 and deduce x² e^(−x) ≤ 6/x for x > 0.

Answers: (a) 0, by Corollary 4.2 with u = x/1000: x¹⁰⁰⁰ e^(−x/1000) = 1000¹⁰⁰⁰ u¹⁰⁰⁰ e^(−u) → 0. (b) Take logarithms: (ln n)^(ln n) = e^(ln n · ln ln n), n^(√n) = e^(√n ln n), 3ⁿ = e^(n ln 3), n!/2ⁿ = e^(n ln n − n(1 + ln 2) + O(ln n)); the exponents are ordered ln n ln ln n ≪ √n ln n ≪ n ln 3 ≪ n ln n, so (ln n)^(ln n) ≪ n^(√n) ≪ 3ⁿ ≪ n!/2ⁿ. (c) All terms of the series are nonnegative for x ≥ 0, so eˣ ≥ x³/3! = x³/6; dividing, x² e^(−x) ≤ x²·6/x³ = 6/x.

─────────────────────────────────
Lesson 5: Inhomogeneous Linear Equations and Grönwall's Inequality
─────────────────────────────────

📌 Key idea of this section:

        y′ = k(t) y + b(t)   ⟹   y(t) = e^(K(t)) [ y₀ + ∫₀ᵗ e^(−K(s)) b(s) ds ],   K(t) = ∫₀ᵗ k(s) ds

Real systems are rarely closed: populations receive immigrants, bodies exchange heat with their surroundings, loans receive payments. The simplest open model adds a forcing term to exponential growth. The resulting theory has two halves: an exact solution formula (variation of constants, or Duhamel's principle), and an inequality (Grönwall's) that says exponential growth is the worst that a linear feedback can do.

Variation of constants

Theorem 5.1. Let k and b be continuous on an interval I ∋ 0. The problem y′ = k(t) y + b(t), y(0) = y₀ has the unique solution displayed above.

Proof. Multiply by the integrating factor e^(−K(t)), which is positive and satisfies (e^(−K))′ = −k e^(−K). Then (y e^(−K))′ = (y′ − k y) e^(−K) = b e^(−K). Integrate from 0 to t. Uniqueness follows because the difference of two solutions solves the homogeneous equation with zero initial value, and is therefore 0 by Theorem 1.1 (in its time-dependent form). ∎

For constant k ≠ 0 and constant b the formula reduces to:

        y(t) = −b/k + (y₀ + b/k) e^(kt)

The constant −b/k is the unique equilibrium. When k < 0 every solution converges to it exponentially fast with rate |k|; when k > 0 every solution other than the equilibrium diverges from it exponentially.

Newton's law of cooling

A body at temperature T(t) in surroundings at constant temperature Tₐ obeys T′ = −c(T − Tₐ) with c > 0, an empirical law that is accurate when the heat transfer is dominated by convection and the temperature difference is moderate. The excess temperature T − Tₐ decays exponentially. Example: coffee at 90 °C is placed in a room at 20 °C and is 60 °C after 10 minutes. Then 40 = 70 e^(−10c), so c = ln(7/4)/10 ≈ 0.05596 per minute. It reaches 40 °C when 70 e^(−ct) = 20, at t = ln(3.5)/c = 10 ln 3.5/ln 1.75 ≈ 22.39 minutes.

Continuous amortization

A loan of A₀ at force of interest δ repaid continuously at rate c obeys A′ = δA − c. The balance is A(t) = c/δ + (A₀ − c/δ) e^(δt), and the loan is repaid at time T exactly when A(T) = 0, that is

        c = δ A₀ / (1 − e^(−δT))

For A₀ = 200,000, δ = 0.05 and T = 30 years, c = 10,000/(1 − e^(−1.5)) ≈ 12,872 per year, for a total of about 386,165 repaid. The formula also shows that a payment rate c ≤ δA₀ never repays the loan: the interest alone is δA₀.

Grönwall's inequality

Theorem 5.2 (Grönwall, integral form). Let u and β be continuous and nonnegative on [0, T], let α ≥ 0 be a constant, and suppose

        u(t) ≤ α + ∫₀ᵗ β(s) u(s) ds    for all t ∈ [0, T].

Then u(t) ≤ α exp( ∫₀ᵗ β(s) ds ) for all t ∈ [0, T].

Proof. Let v(t) = α + ∫₀ᵗ β(s) u(s) ds, so that u ≤ v and v′ = βu ≤ βv. Put B(t) = ∫₀ᵗ β. Then (v e^(−B))′ = (v′ − βv) e^(−B) ≤ 0, so v(t) e^(−B(t)) ≤ v(0) = α. Hence u(t) ≤ v(t) ≤ α e^(B(t)). ∎

The differential form is simpler still: if u′ ≤ β(t) u then u(t) ≤ u(0) e^(B(t)), with no sign condition on u, by the same computation applied to u e^(−B). Note that the integral form needs β ≥ 0; the multiplication step u ≤ v ⟹ βu ≤ βv uses it.

Consequences for differential equations

Grönwall's inequality converts a Lipschitz condition into exponential control. Let F be Lipschitz in x with constant L, and let x(t), z(t) solve x′ = F(t, x) with initial values x₀ and z₀. Then

        |x(t) − z(t)| ≤ |x₀ − z₀| + ∫₀ᵗ L |x(s) − z(s)| ds   ⟹   |x(t) − z(t)| ≤ |x₀ − z₀| e^(Lt)

This single line proves uniqueness (take x₀ = z₀) and continuous dependence on initial data. It also shows that nearby trajectories can separate at most exponentially fast; chaotic systems are those in which they actually do separate at an exponential rate, the maximal Lyapunov exponent. The limited range of weather forecasts is usually explained in these terms: small errors in the initial state grow roughly exponentially, with doubling times often quoted as one to two days.

Sharpness

Grönwall's bound is attained: equality holds for u(t) = α e^(B(t)), the solution of the corresponding equation. In this sense exponential growth is the extremal behaviour of linear feedback: any quantity whose rate of increase is bounded by a multiple of its own size grows at most exponentially, and the exponential itself shows the bound cannot be improved.

✏️ Your Turn

(a) Solve y′ = 2y − 6 with y(0) = 5, and find the equilibrium and its stability.
(b) In the cooling example, at what time was the coffee at 75 °C?
(c) Suppose u is continuous, nonnegative, and u(t) ≤ 3 + ∫₀ᵗ 2s u(s) ds. Bound u(t).

Answers: (a) The equilibrium is y = 3, and y(t) = 3 + 2e^(2t); since k = 2 > 0 the equilibrium is unstable. (b) 55 = 70 e^(−ct) gives t = ln(70/55)/c = 10 ln(14/11)/ln(7/4) ≈ 4.31 minutes. (c) With α = 3 and β(s) = 2s, u(t) ≤ 3 e^(t²).

─────────────────────────────────
Lesson 6: The Logistic Equation — Saturation, Equilibria and Stability
─────────────────────────────────

📌 Key idea of this section:

        P′ = rP(1 − P/K)   ⟹   P(t) = K / (1 + ((K − P₀)/P₀) e^(−rt)),   P → K for every P₀ > 0

Thomas Malthus argued in 1798 that population, "when unchecked, increases in a geometrical ratio", while subsistence increases only arithmetically. Pierre-François Verhulst proposed in 1838 that the per-capita growth rate should decline linearly as the population approaches a ceiling K, the carrying capacity. Raymond Pearl and Lowell Reed rediscovered the model in 1920 and fitted it to the United States census. The logistic equation is the simplest nonlinear correction to exponential growth and the prototype for autonomous scalar dynamics.

Explicit solution

Substitute u = 1/P. Then u′ = −P′/P² = −r/P + r/K = −r u + r/K, a linear equation (Lesson 5) with equilibrium 1/K. Its solution is u(t) = 1/K + (1/P₀ − 1/K) e^(−rt), and inverting gives the formula in the box. (Alternatively, separate variables using the partial fraction 1/(P(1 − P/K)) = 1/P + 1/(K − P).) The solution is defined for all t ≥ 0 when P₀ > 0; for P₀ > K it decreases to K, and for 0 < P₀ < K it increases to K along an S-shaped (sigmoid) curve.

For P₀ < K, the inflection point is at P = K/2, where P″ = r(1 − 2P/K)P′ vanishes; it occurs at t = ln((K − P₀)/P₀)/r. Before the inflection the curve is approximately exponential, P ≈ P₀ e^(rt) for P ≪ K; after it, the approach to K is again exponential: K − P(t) ~ C e^(−rt).

Example. With K = 1000, P₀ = 100 and r = 0.5 per year, P(t) = 1000/(1 + 9e^(−0.5t)). Then P(4) = 1000/(1 + 9e^(−2)) ≈ 450.9, the inflection is at t = 2 ln 9 ≈ 4.39 years, and P(10) = 1000/(1 + 9e^(−5)) ≈ 942.8.

Stability of equilibria of y′ = f(y)

For an autonomous scalar equation with f ∈ C¹, solutions are monotone (they cannot cross an equilibrium, by uniqueness), and every bounded solution converges to an equilibrium. An equilibrium y* (f(y*) = 0) is

        asymptotically stable if f′(y*) < 0,    unstable if f′(y*) > 0.

Proof. If f′(y*) = −μ < 0, choose δ with f′(y) ≤ −μ/2 on [y* − δ, y* + δ]. For a solution starting in this interval, w = (y − y*)² satisfies w′ = 2(y − y*) f(y) ≤ −μ w, because f(y) = f′(ξ)(y − y*) with ξ between y and y*. So w(t) ≤ w(0) e^(−μt) by Grönwall: the solution stays in the interval and converges to y* exponentially with rate at least μ/2. The unstable case is symmetric with time reversed. ∎

For the logistic equation f(P) = rP − rP²/K, so f′(0) = r > 0 and f′(K) = −r < 0: extinction is unstable and the carrying capacity is asymptotically stable, with linear convergence rate r. When f′(y*) = 0 the linearization is inconclusive (consider y′ = y³ and y′ = −y³).

Harvesting and the saddle-node bifurcation

With a constant harvest h ≥ 0, P′ = rP(1 − P/K) − h. Equilibria solve rP²/K − rP + h = 0:

        P± = (K/2) (1 ± √(1 − 4h/(rK)))

For h < rK/4 there are two equilibria; P₊ is stable and P₋ is an unstable threshold: a population that falls below P₋ collapses to zero in finite time. As h increases to rK/4 the two equilibria merge at K/2 and disappear (a saddle-node bifurcation); for h > rK/4 every population collapses. The quantity rK/4 is the maximum sustainable yield, the peak of the logistic growth curve rP(1 − P/K). With r = 0.5, K = 1000 the maximum sustainable yield is 125; a harvest h = 96 gives P± = 500(1 ± 0.4817) ≈ 740.8 and 259.2.

Constant-effort harvesting, P′ = rP(1 − P/K) − EP, behaves very differently: there is a single positive equilibrium K(1 − E/r) for E < r, it is stable, and the sustained yield EK(1 − E/r) is maximized at E = r/2 with the same value rK/4. Harvesting a fixed quota is structurally fragile; harvesting a fixed fraction is not. This contrast is a standard lesson of fisheries management.

Other sigmoid laws

The Gompertz equation P′ = rP ln(K/P) (Gompertz 1825, originally for human mortality) has solution P = K exp(ln(P₀/K) e^(−rt)), an asymmetric sigmoid with inflection at K/e; it is widely used for tumour growth. The Richards family P′ = rP(1 − (P/K)^ν)/ν interpolates between logistic (ν = 1) and Gompertz (ν → 0).

✏️ Your Turn

(a) For P′ = 0.2P(1 − P/500) with P(0) = 50, find the time at which P = 250 and the value of P′ at that moment.
(b) Find the equilibria of y′ = y(1 − y)(y − 1/3) and their stability.
(c) A logistic population has r = 0.4 and K = 2000. What is the largest constant harvest it can sustain?

Answers: (a) P = 250 = K/2 is the inflection point, at t = ln(450/50)/0.2 = 5 ln 9 ≈ 10.99; there P′ = rK/4 = 25. (b) f(y) = −y³ + (4/3)y² − (1/3)y, so f′(y) = −3y² + (8/3)y − 1/3. f′(0) = −1/3 < 0 (stable), f′(1/3) = −1/3 + 8/9 − 1/3 = 2/9 > 0 (unstable), f′(1) = −3 + 8/3 − 1/3 = −2/3 < 0 (stable). This is a bistable system with threshold 1/3 (an Allee effect). (c) rK/4 = 0.4 · 2000/4 = 200.

─────────────────────────────────
Lesson 7: Linear Systems and the Matrix Exponential
─────────────────────────────────

📌 Key idea of this section:

        x′ = Ax,  x(0) = x₀   ⟹   x(t) = e^(tA) x₀,   e^(tA) = ∑_{n≥0} tⁿAⁿ/n!

The scalar theory generalizes verbatim to linear systems, with the matrix exponential in place of the exponential. The new phenomena are rotation (complex eigenvalues), polynomial corrections (non-trivial Jordan blocks), coexistence of growth and decay in different directions (saddles), and transient growth in systems that are asymptotically stable.

Definition and basic properties

For an n × n real or complex matrix A, the series ∑ Aⁿ/n! converges absolutely in any operator norm, since ‖Aⁿ/n!‖ ≤ ‖A‖ⁿ/n!; hence ‖e^A‖ ≤ e^(‖A‖). Term-by-term differentiation (justified by uniform convergence on bounded t-sets) gives (d/dt) e^(tA) = A e^(tA) = e^(tA) A. The uniqueness argument of Theorem 1.1 carries over: if x′ = Ax then (e^(−tA) x)′ = 0. Further properties:

        e^(A+B) = e^A e^B   whenever AB = BA
        e^(PAP⁻¹) = P e^A P⁻¹
        (e^A)⁻¹ = e^(−A)
        det e^A = e^(tr A)

The commuting hypothesis cannot be dropped. With A = [[0, 1], [0, 0]] and B = [[0, 0], [1, 0]] (rows listed), e^A = [[1, 1], [0, 1]] and e^B = [[1, 0], [1, 1]], so e^A e^B = [[2, 1], [1, 1]], whereas A + B = [[0, 1], [1, 0]] has e^(A+B) = [[cosh 1, sinh 1], [sinh 1, cosh 1]] ≈ [[1.543, 1.175], [1.175, 1.543]]. The general correction is the Baker–Campbell–Hausdorff formula, e^A e^B = e^(A + B + [A,B]/2 + …).

The determinant identity (Liouville's formula) has a two-line proof: over ℂ, A is similar to an upper triangular matrix T with the eigenvalues λ₁, …, λₙ on the diagonal, and e^T is upper triangular with diagonal entries e^(λ_j), so det e^A = det e^T = e^(λ₁ + … + λₙ) = e^(tr A). Geometrically, the flow of x′ = Ax multiplies volumes by e^(t tr A).

Computing e^(tA)

If A = PDP⁻¹ is diagonalizable with D = diag(λ₁, …, λₙ), then e^(tA) = P diag(e^(λ₁t), …, e^(λₙt)) P⁻¹: in the eigenbasis the system decouples into n scalar exponential laws. Example: A = [[1, 2], [2, 1]] has eigenvalues 3 and −1 with eigenvectors (1, 1) and (1, −1), and

        e^(tA) = (1/2) [[e^(3t) + e^(−t),  e^(3t) − e^(−t)],
                        [e^(3t) − e^(−t),  e^(3t) + e^(−t)]]

The origin is a saddle: growth at rate 3 along the diagonal, decay at rate 1 along the antidiagonal.

For a Jordan block J = λI + N with N nilpotent (N^m = 0), λI and N commute, so:

        e^(tJ) = e^(λt) (I + tN + t²N²/2! + … + t^(m−1) N^(m−1)/(m−1)!)

and polynomial factors appear: for J = [[λ, 1], [0, λ]], e^(tJ) = e^(λt) [[1, t], [0, 1]]. For complex eigenvalues a ± ib of a real 2 × 2 matrix, the real normal form [[a, −b], [b, a]] has exponential e^(at) [[cos bt, −sin bt], [sin bt, cos bt]]: rotation at angular speed b combined with exponential growth or decay at rate a.

Spectral characterization of stability

Theorem 7.1. Let α(A) = max Re λ over the eigenvalues of A (the spectral abscissa). For every ε > 0 there is C_ε with ‖e^(tA)‖ ≤ C_ε e^((α(A)+ε)t) for t ≥ 0, and ε may be taken 0 if every eigenvalue with Re λ = α(A) is semisimple. In particular every solution of x′ = Ax tends to 0 if and only if α(A) < 0, and then the decay is exponential.

Proof. Use the Jordan form A = P J P⁻¹. Each entry of e^(tJ) has the form e^(λt) tʲ/j! with j smaller than the size of the block, and |e^(λt) tʲ| ≤ C e^((Re λ + ε)t) for t ≥ 0. Conversely, if Re λ ≥ 0 for some eigenvalue with eigenvector v, the solution e^(λt) v does not tend to 0 (for real A take its real part). ∎

For 2 × 2 real matrices, with τ = tr A and Δ = det A, the eigenvalues are (τ ± √(τ² − 4Δ))/2 and the phase portrait is classified by the (τ, Δ) plane: Δ < 0 gives a saddle; Δ > 0 and τ < 0 a stable node (τ² ≥ 4Δ) or stable spiral (τ² < 4Δ); Δ > 0 and τ > 0 the unstable counterparts; Δ > 0 and τ = 0 a centre. For nonlinear systems x′ = F(x) the Hartman–Grobman theorem says that near an equilibrium whose Jacobian has no eigenvalues on the imaginary axis, the flow is topologically conjugate to the linear flow of the Jacobian.

Transient growth and non-normality

Eigenvalues govern the limit t → ∞, not intermediate times. For A = [[−1, 10], [0, −2]], both eigenvalues are negative, yet the (1, 2) entry of e^(tA) equals 10(e^(−t) − e^(−2t)), which rises from 0 to its maximum 2.5 at t = ln 2 before decaying. For highly non-normal matrices (large ‖A‖ compared with the eigenvalue gap) the transient amplification can be enormous; this mechanism is central to the theory of the transition to turbulence in shear flows, and is the reason pseudospectra, not spectra, predict the short-time behaviour of such systems. An entry of exactly this form is the daughter population of the decay chain of Lesson 3, which is the linear system with triangular matrix [[−λ_A, 0], [λ_A, −λ_B]].

✏️ Your Turn

(a) Compute e^(tA) for A = [[2, 1], [0, 2]] and solve x′ = Ax with x(0) = (1, 1).
(b) Classify the origin for A = [[1, −5], [1, −3]].
(c) Without computing e^A, find det e^A for A = [[3, 7], [−2, −5]].

Answers: (a) A = 2I + N with N = [[0, 1], [0, 0]], so e^(tA) = e^(2t) [[1, t], [0, 1]] and x(t) = e^(2t)(1 + t, 1). (b) τ = −2, Δ = −3 + 5 = 2, τ² − 4Δ = −4 < 0: eigenvalues −1 ± i, a stable spiral. (c) det e^A = e^(tr A) = e^(3 − 5) = e^(−2).

─────────────────────────────────
Lesson 8: Discrete Models — Malthus, Linear Recurrences and the Leslie Matrix
─────────────────────────────────

📌 Key idea of this section:

        xₙ₊₁ = L xₙ with L ≥ 0 primitive   ⟹   xₙ ~ c ρⁿ v,   ρ = spectral radius, v > 0 the Perron vector

Populations that reproduce in discrete seasons, accounts credited at discrete dates, and algorithms that proceed in rounds are modelled by difference equations. The discrete theory runs parallel to the continuous one, with powers in place of exponentials: the scalar law xₙ₊₁ = λxₙ gives xₙ = λⁿ x₀, which is growth if |λ| > 1 and decay if |λ| < 1, and the bridge between the two worlds is λ = e^k (one time step of a continuous process of rate k).

Linear recurrences

A recurrence xₙ₊ₘ = c₁xₙ₊ₘ₋₁ + … + cₘxₙ is the first-order system Xₙ₊₁ = CXₙ with companion matrix C, whose characteristic polynomial is χ(λ) = λᵐ − c₁λᵐ⁻¹ − … − cₘ. If χ has distinct roots λ₁, …, λₘ then xₙ = ∑ a_j λ_jⁿ, and if one root strictly dominates the others in modulus and its coefficient is nonzero, xₙ ~ a₁λ₁ⁿ. The Fibonacci numbers (F₀ = 0, F₁ = 1, Fₙ₊₂ = Fₙ₊₁ + Fₙ) have roots φ = (1 + √5)/2 and ψ = (1 − √5)/2, and Binet's formula

        Fₙ = (φⁿ − ψⁿ)/√5

shows Fₙ is the nearest integer to φⁿ/√5 (because |ψⁿ/√5| < 1/2). For example φ²⁰/√5 ≈ 6765.00003 and F₂₀ = 6765. The growth rate per step is φ ≈ 1.618.

The Leslie matrix

P. H. Leslie (1945) divided a female population into age classes 1, …, m. Let f_j ≥ 0 be the expected number of daughters born per female in class j per time step and s_j ∈ (0, 1] the probability of surviving from class j to class j + 1. The census vector xₙ evolves by xₙ₊₁ = Lxₙ with

        L = [[f₁, f₂, …, fₘ₋₁, fₘ],
             [s₁, 0,  …, 0,    0 ],
             [0,  s₂, …, 0,    0 ],
             [0,  0,  …, sₘ₋₁, 0 ]]

Expanding det(λI − L) along the first row gives the Euler–Lotka equation for the eigenvalues:

        1 = ∑_{j=1}^{m} f_j ℓ_j λ^(−j),    ℓ₁ = 1,  ℓ_j = s₁ s₂ ⋯ s_{j−1}

The right-hand side is strictly decreasing in λ > 0, so there is exactly one positive root ρ, and ρ > 1, = 1 or < 1 according as the net reproductive number R₀ = ∑ f_j ℓ_j exceeds, equals or falls below 1 (evaluate at λ = 1).

Perron–Frobenius

Theorem 8.1 (Perron 1907, Frobenius 1912). Let L be a nonnegative square matrix that is primitive (some power Lᵏ has all entries positive). Then the spectral radius ρ is a simple eigenvalue, it has right and left eigenvectors v, w with all entries positive, every other eigenvalue satisfies |λ| < ρ, and

        Lⁿ/ρⁿ → v wᵀ / (wᵀ v)   as n → ∞.

Consequently, for any nonzero nonnegative x₀, xₙ/ρⁿ → (wᵀx₀/wᵀv) v: the population grows geometrically at rate ρ, and its age structure converges to the stable age distribution v, at the geometric rate |λ₂|/ρ set by the second-largest eigenvalue modulus. A Leslie matrix with s_j > 0 and fₘ > 0 is primitive if and only if the gcd of the ages j with f_j > 0 equals 1.

Example. Take three age classes with f = (0, 1, 3), s₁ = 1/2, s₂ = 1/3. The characteristic polynomial is λ³ − (1/2)λ − 1/2 = (λ − 1)(λ² + λ + 1/2). The dominant eigenvalue is ρ = 1 (R₀ = 0 + 1 · 1/2 + 3 · 1/6 = 1), the others are (−1 ± i)/2 with modulus √2/2 ≈ 0.707, and the stable age distribution is v ∝ (1, s₁/ρ, s₁s₂/ρ²) = (1, 1/2, 1/6), that is (3/5, 3/10, 1/10). Fertility occurs at ages 2 and 3, with gcd 1, so L is primitive and every initial population converges to a multiple of v, the deviations shrinking like 0.707ⁿ.

The intrinsic rate of increase of the population, in continuous-time units, is r = ln ρ; demographers estimate r from life tables through the Euler–Lotka equation, and the stable-population theory of Lotka (1907–1939) is its continuous-age analogue.

Nonlinear discrete models

The discrete logistic map xₙ₊₁ = μxₙ(1 − xₙ) shows how dramatically the discrete and continuous theories can differ. The fixed point x* = 1 − 1/μ has multiplier f′(x*) = 2 − μ, so it is stable for 1 < μ < 3. At μ = 3 it loses stability to a 2-cycle (the multiplier passes through −1, which is impossible in one-dimensional continuous time), and a cascade of period doublings accumulates at μ ≈ 3.5699, beyond which chaos appears. The ratios of successive period-doubling intervals converge to Feigenbaum's constant δ ≈ 4.6692, the same for every smooth unimodal map with a quadratic maximum.

✏️ Your Turn

(a) Solve xₙ₊₂ = 5xₙ₊₁ − 6xₙ with x₀ = 0 and x₁ = 1, and give the growth rate.
(b) For L = [[1, 2], [1/2, 0]], find the dominant eigenvalue, R₀ and the stable age distribution.
(c) For which μ is the fixed point x* = 1 − 1/μ of the logistic map superstable (multiplier 0)?

Answers: (a) χ(λ) = λ² − 5λ + 6 = (λ − 2)(λ − 3), so xₙ = a2ⁿ + b3ⁿ with a + b = 0 and 2a + 3b = 1, giving xₙ = 3ⁿ − 2ⁿ, which grows at rate 3 per step. (b) λ² − λ − 1 = 0 gives ρ = φ = (1 + √5)/2 ≈ 1.618; R₀ = 1 + 2 · 1/2 = 2; v ∝ (1, s₁/ρ) = (1, 1/(2φ)) ≈ (1, 0.309). (c) 2 − μ = 0 gives μ = 2, where x* = 1/2.

─────────────────────────────────
Lesson 9: Branching Processes — Exponential Growth or Extinction
─────────────────────────────────

📌 Key idea of this section:

        E[Zₙ] = mⁿ,  and  P(extinction) = q = smallest root of f(s) = s in [0, 1];  q < 1 ⟺ m > 1

Deterministic models predict that a population with growth factor above 1 grows forever. Small populations, however, are subject to chance, and a lineage may die out even when it is expected to grow. The Galton–Watson process, introduced by Francis Galton and Henry William Watson in 1874 to study the extinction of family surnames (and anticipated by Irénée-Jules Bienaymé in 1845), is the basic model of this phenomenon.

The model

Let Z₀ = 1, and let each individual of generation n independently produce a random number of children with the offspring distribution p_k = P(ξ = k), k = 0, 1, 2, …. Then Zₙ₊₁ = ξ₁ + … + ξ_{Zₙ}, with the ξᵢ independent copies of ξ, independent of Zₙ. Write

        f(s) = E[s^ξ] = ∑_{k≥0} p_k sᵏ,    m = E[ξ] = f′(1),    σ² = Var ξ

Conditioning on Zₙ, the generating function of Zₙ₊₁ is E[f(s)^{Zₙ}], so the generating function of Zₙ is the n-fold composition fₙ = f ∘ f ∘ ⋯ ∘ f. Differentiating at s = 1 gives E[Zₙ] = mⁿ, and a second differentiation gives

        Var Zₙ = σ² m^(n−1) (mⁿ − 1)/(m − 1)   (m ≠ 1),     Var Zₙ = nσ²   (m = 1)

The extinction theorem

Theorem 9.1. Assume p₁ < 1. The extinction probability q = P(Zₙ = 0 for some n) is the smallest root of f(s) = s in [0, 1]. Moreover q = 1 if m ≤ 1, and q < 1 if m > 1.

Proof. Since the events {Zₙ = 0} increase with n, q = lim qₙ with qₙ = P(Zₙ = 0) = fₙ(0). From fₙ₊₁ = f ∘ fₙ we get qₙ₊₁ = f(qₙ), with q₀ = 0. As f is continuous and nondecreasing on [0, 1], qₙ increases to a limit q with f(q) = q. If ŝ ∈ [0, 1] is any fixed point, then q₀ = 0 ≤ ŝ, and qₙ ≤ ŝ implies qₙ₊₁ = f(qₙ) ≤ f(ŝ) = ŝ; hence q ≤ ŝ, so q is the smallest fixed point.

Now locate the fixed points. If p₀ + p₁ = 1 then f(s) = p₀ + p₁s is linear with slope p₁ < 1, m = p₁ < 1, and s = 1 is its only fixed point, so q = 1. Otherwise some p_k with k ≥ 2 is positive and f is strictly convex on [0, 1]. Let g(s) = f(s) − s, strictly convex with g(1) = 0. If m = f′(1) ≤ 1, then g′(s) < g′(1) = m − 1 ≤ 0 for s < 1, so g is strictly decreasing on [0, 1] and g(s) > 0 for s < 1: the only fixed point is 1 and q = 1. If m > 1, then g′(1) > 0, so g < 0 just to the left of 1, while g(0) = p₀ ≥ 0; by the intermediate value theorem g has a root in [0, 1), and q < 1. ∎

Three examples

        p = (1/4, 1/4, 1/2):   f(s) = 1/4 + s/4 + s²/2,   m = 5/4,   2s² − 3s + 1 = 0,   q = 1/2
        geometric, p_k = (1 − a)aᵏ (a > 1/2):   f(s) = (1 − a)/(1 − as),   m = a/(1 − a),   q = (1 − a)/a = 1/m
        Poisson(m):   f(s) = e^(m(s − 1)),   q = e^(−m(1 − q));   for m = 2,  q ≈ 0.2032

For the three-point distribution with p₁ = 1 − p₀ − p₂, the fixed-point equation factorizes as (s − 1)(p₂s − p₀) = 0, so q = min(1, p₀/p₂). A population founded by k individuals dies out with probability qᵏ, because the k lineages are independent; a supercritical population is at real risk of extinction only while it is small.

Growth on survival

When 1 < m < ∞, the normalized population Wₙ = Zₙ/mⁿ is a nonnegative martingale (E[Zₙ₊₁ | Zₙ] = mZₙ), so it converges almost surely to a limit W. The Kesten–Stigum theorem (1966) states that W is nondegenerate, with P(W > 0) = 1 − q and E[W] = 1, if and only if E[ξ ln ξ] < ∞; otherwise W = 0 almost surely. Under this condition the process, conditioned on survival, really does grow like a random multiple of mⁿ: the mean growth rate of the deterministic theory is the true almost-sure growth rate of the surviving population. In the critical case m = 1 (with σ² < ∞), Kolmogorov's estimate P(Zₙ > 0) ~ 2/(nσ²) shows that survival is only polynomially unlikely.

Multitype branching processes, with a mean matrix M whose entry M_ij is the expected number of type-j children of a type-i parent, behave in the same way with m replaced by the Perron root of M (Lesson 8), provided M is primitive.

✏️ Your Turn

(a) Find the extinction probability for the offspring distribution p₀ = 1/6, p₁ = 1/3, p₂ = 1/2, and for a population founded by three individuals.
(b) For binomial offspring ξ ~ Bin(2, 3/4), find m and q.
(c) Compute E[Z₁₀] and Var Z₁₀ when p = (1/4, 1/4, 1/2).

Answers: (a) q = p₀/p₂ = 1/3 (here m = 1/3 + 1 = 4/3 > 1); with three founders the probability is (1/3)³ = 1/27. (b) m = 3/2, f(s) = (1/4 + 3s/4)², and the roots of f(s) = s are 1 and 1/9, so q = 1/9 (check: f(1/9) = (1/4 + 1/12)² = (1/3)² = 1/9). (c) m = 5/4 and σ² = E[ξ²] − m² = (1/4 + 2) − 25/16 = 11/16; E[Z₁₀] = 1.25¹⁰ ≈ 9.313 and Var Z₁₀ = (11/16) · 1.25⁹ · (1.25¹⁰ − 1)/0.25 ≈ 170.3.

─────────────────────────────────
Lesson 10: Epidemics — the SIR Model, R₀ and the Final Size
─────────────────────────────────

📌 Key idea of this section:

        early growth rate r = γ(R₀ − 1);   final size z solves  1 − z = e^(−R₀ z);   herd immunity at 1 − 1/R₀

The early phase of an epidemic is exponential growth in its purest form: each case generates a roughly constant number of new cases. What distinguishes an epidemic from a Malthusian population is that the resource consumed is the pool of susceptible individuals, and its depletion ends the outbreak. The model of W. O. Kermack and A. G. McKendrick (1927) captures this in three equations.

The model

A closed population of size N is divided into susceptible S, infectious I and removed R individuals (S + I + R = N). Infection occurs by mass action with transmission rate β and recovery with rate γ, so the mean infectious period is 1/γ:

        S′ = −β S I / N
        I′ = β S I / N − γ I
        R′ = γ I

The basic reproduction number R₀ = β/γ is the expected number of secondary cases produced by one infectious individual in a fully susceptible population: infections at rate β for an expected time 1/γ.

The threshold and early exponential growth

Since I′ = γI (R₀ S/N − 1), the number infected increases if and only if S/N > 1/R₀. This is the threshold theorem: an outbreak introduced into a population with S(0)/N ≤ 1/R₀ never grows. While S ≈ N, the infectious class grows exponentially at rate

        r = β − γ = γ (R₀ − 1)

so R₀ = 1 + r/γ. Example: with an infectious period of 7 days (γ = 1/7 per day) and R₀ = 2.5, r = 1.5/7 ≈ 0.214 per day, and the early doubling time is ln 2/r ≈ 3.23 days. The relation between r and R₀ depends on the distribution of the generation interval: for a general generation-interval density g, the Euler–Lotka equation reappears as 1/R₀ = ∫₀^∞ e^(−rt) g(t) dt (Wallinga and Lipsitch 2007), and the formula R₀ = 1 + r/γ is the case of an exponential g.

A conserved quantity, the peak and the final size

Dividing the equations, dI/dS = −1 + N/(R₀ S), which integrates to the first integral

        S + I − (N/R₀) ln S = constant

The peak of I occurs when S = N/R₀. Starting from S(0) ≈ N and I(0) ≈ 0, the peak prevalence is

        I_max/N = 1 − (1 + ln R₀)/R₀

which is about 15.3% for R₀ = 2 and 30.0% for R₀ = 3. Similarly dS/dR = −R₀ S/N gives S(t) = S(0) e^(−R₀ R(t)/N). As t → ∞, I → 0 and R(∞) = N − S(∞). Writing z = R(∞)/N for the fraction ever infected and letting S(0) → N, R(0) = 0:

        1 − z = e^(−R₀ z)

Theorem 10.1. If R₀ > 1, the final-size equation has exactly one root z ∈ (0, 1), and z > 1 − 1/R₀. If R₀ ≤ 1, the only root in [0, 1] is z = 0.

Proof. Let h(z) = 1 − e^(−R₀z) − z, a strictly concave function with h(0) = 0, h′(0) = R₀ − 1 and h(1) = −e^(−R₀) < 0. If R₀ > 1, h is positive just to the right of 0, so it has a root in (0, 1), and by strict concavity it has at most one root besides 0. If R₀ ≤ 1, h′(z) < h′(0) ≤ 0 for z > 0, so h < 0 on (0, 1]. For the inequality, put z₀ = 1 − 1/R₀; then h(z₀) = 1/R₀ − e^(−(R₀ − 1)) > 0 because e^(R₀−1) > R₀ for R₀ ≠ 1 (Lesson 2), so the root lies to the right of z₀. ∎

        R₀ = 1.5:   z ≈ 0.583      R₀ = 2:   z ≈ 0.797      R₀ = 3:   z ≈ 0.940      R₀ = 4:   z ≈ 0.980

In closed form, z = 1 + W(−R₀ e^(−R₀))/R₀, with W the principal branch of the Lambert W function. The inequality z > 1 − 1/R₀ is the overshoot: an unmitigated epidemic does not stop at the herd-immunity threshold, because at the moment the threshold is crossed (the epidemic peak) many people are still infectious.

Herd immunity and vaccination

If a fraction p of the population is immune before the outbreak, the effective reproduction number is R₀(1 − p), and the outbreak cannot grow if p ≥ p_c = 1 − 1/R₀. For measles, with R₀ commonly quoted in the range 12 to 18, p_c lies between about 92% and 94%; for a disease with R₀ = 2.5, it is 60%. This assumes a perfectly effective vaccine and homogeneous mixing; heterogeneity in contact rates generally lowers the threshold reached by natural infection but not necessarily the one required of random vaccination.

The stochastic beginning

When a single infective enters a large susceptible population, the early epidemic is a branching process (Lesson 9). In the Markovian SIR model, the number of infections caused by one case is geometric with mean R₀, so by the geometric example the probability of only a minor outbreak is q = 1/R₀, and a major outbreak occurs with probability 1 − 1/R₀ (Whittle 1955). Conditioned on a major outbreak, the deterministic final-size equation holds in the limit N → ∞. If instead each case caused a Poisson(R₀) number of infections (a fixed infectious period), the minor-outbreak probability would satisfy q = e^(−R₀(1 − q)), and 1 − q would satisfy exactly the final-size equation: the probability of a major outbreak equals the final size, a coincidence explained by a duality between the forward epidemic and a backward branching process.

✏️ Your Turn

(a) An epidemic has early doubling time 4 days and mean infectious period 5 days (SIR model). Estimate R₀.
(b) For R₀ = 4 (S(0) ≈ N), compute the peak prevalence and the herd-immunity threshold.
(c) Show that z = 1/2 is the final size exactly when R₀ = 2 ln 2.

Answers: (a) r = ln 2/4 ≈ 0.1733 per day and γ = 0.2, so R₀ = 1 + r/γ ≈ 1.87. (b) I_max/N = 1 − (1 + ln 4)/4 ≈ 1 − 2.386/4 ≈ 0.403, about 40%; the threshold is 1 − 1/4 = 75%. (c) 1 − 1/2 = e^(−R₀/2) gives R₀/2 = ln 2, so R₀ = 2 ln 2 ≈ 1.386.

─────────────────────────────────
Lesson 11: Exponential and Subexponential Complexity
─────────────────────────────────

📌 Key idea of this section:

        P ⊊ EXP;   between them lie quasi-polynomial n^((log n)^c) and subexponential 2^(o(n)) running times

In computer science, the dividing line between feasible and infeasible computation is drawn, as a first approximation, between polynomial and exponential running time. The reason is the hierarchy of Lesson 4 together with a scaling argument: if hardware becomes faster by a factor of 2, an algorithm with running time nᵏ can solve instances 2^(1/k) times larger in the same time, whereas an algorithm with running time 2ⁿ gains only one unit of input size.

Exponential recursions

Recurrences that reduce the problem size by subtraction typically yield exponential growth; those that reduce it by division typically yield polynomial growth. The Tower of Hanoi with n discs requires T(n) = 2T(n − 1) + 1 moves, with T(1) = 1; adding 1 gives T(n) + 1 = 2(T(n − 1) + 1), so T(n) = 2ⁿ − 1, and a simple argument (the largest disc must move at least once, and before its first move all other discs must be stacked on the third peg, and after its last move they must all be moved back onto it, so T(n) ≥ 2T(n − 1) + 1) shows that no algorithm uses fewer moves. Computing the Fibonacci number Fₙ by the naive recursion makes C(n) = C(n − 1) + C(n − 2) + 1 calls, with C(0) = C(1) = 1; then C(n) + 1 satisfies the Fibonacci recurrence, and C(n) = 2Fₙ₊₁ − 1 ~ (2/√5) φ^(n+1). Storing computed values reduces this to a linear number of additions, and the identity (Fₙ₊₁, Fₙ; Fₙ, Fₙ₋₁) = (1, 1; 1, 0)ⁿ together with repeated squaring reduces it to O(log n) matrix multiplications.

By contrast, divide-and-conquer recurrences T(n) = aT(n/b) + Θ(nᵈ) have polynomial solutions by the master theorem: Θ(nᵈ) if d > log_b a, Θ(nᵈ log n) if d = log_b a, and Θ(n^(log_b a)) if d < log_b a. Mergesort, T(n) = 2T(n/2) + Θ(n), is Θ(n log n).

The classes P and EXP

Let P be the class of decision problems solvable by a deterministic Turing machine in time O(nᵏ) for some k, and EXP the class solvable in time O(2^(nᵏ)) for some k. The time hierarchy theorem (Hartmanis and Stearns 1965; in this form Hennie and Stearns 1966) states that for time-constructible functions with f(n) log f(n) = o(g(n)), DTIME(f) ⊊ DTIME(g); it is proved by diagonalization, and it implies P ⊊ EXP. Thus there are decidable problems that provably require exponential time; generalized chess and Go on n × n boards (with suitable rules) are EXP-complete. The famous open problems, P versus NP and NP versus EXP, concern classes that lie between: P ⊆ NP ⊆ PSPACE ⊆ EXP, and at least one of these inclusions is strict.

Exhaustive search for satisfiability of a Boolean formula in n variables takes 2ⁿ · poly(n) time. Much better exponential bases are known for restricted versions: randomized algorithms for 3-SAT in time about 1.307ⁿ descend from the PPSZ algorithm of Paturi, Pudlák, Saks and Zane. Whether the base can be pushed down to 1 + ε for every ε is the content of the Exponential Time Hypothesis (Impagliazzo and Paturi 2001), which asserts that 3-SAT cannot be solved in time 2^(o(n)); it is a stronger assumption than P ≠ NP, and many fine-grained lower bounds are conditional on it. Exponents can also be halved by meet-in-the-middle: subset sum on n numbers can be solved in O(2^(n/2) · n) time by splitting the set in two and sorting the 2^(n/2) partial sums of each half (Horowitz and Sahni 1974).

Between polynomial and exponential

A function is subexponential if it is 2^(o(n)). Number theory supplies the canonical examples through the L-notation

        L_n[α, c] = exp( (c + o(1)) (ln n)^α (ln ln n)^(1−α) ),   0 ≤ α ≤ 1,

which interpolates between polynomial in ln n (α = 0) and polynomial in n (α = 1). The quadratic sieve factors an integer n in time L_n[1/2, 1] and the general number field sieve, the fastest known classical method for numbers of cryptographic size, in heuristic time L_n[1/3, (64/9)^(1/3)], with (64/9)^(1/3) ≈ 1.923. Since the input size is the number of digits, log n, these running times are subexponential but superpolynomial in the input size. Shor's algorithm (1994) factors in polynomial time on a quantum computer.

Quasi-polynomial time, 2^((log n)^c), sits just above polynomial time. In 2015 László Babai announced an algorithm deciding graph isomorphism in quasi-polynomial time, the largest advance on that problem in decades.

Exponential lower bounds in restricted models

Where unconditional exponential lower bounds are known, they concern restricted models of computation. Haken (1985) proved that every resolution refutation of the pigeonhole principle (n + 1 pigeons, n holes) has size exponential in n, and Razborov (1985) proved superpolynomial (later exponential, by Alon and Boppana) lower bounds for monotone circuits computing the clique function. Proving such bounds for general circuits would separate P from NP.

✏️ Your Turn

(a) Solve T(n) = 3T(n − 1) + 2 with T(0) = 0.
(b) An algorithm of running time 1.5ⁿ handles n = 60 in one hour. What size does it handle in one hour on a machine 1000 times faster?
(c) Apply the master theorem to T(n) = 8T(n/2) + n².

Answers: (a) T(n) + 1 = 3(T(n − 1) + 1) and T(0) + 1 = 1, so T(n) = 3ⁿ − 1. (b) 1.5^(n − 60) = 1000 gives n − 60 = ln 1000/ln 1.5 ≈ 17.04, so n ≈ 77. (c) log₂ 8 = 3 > 2, so T(n) = Θ(n³).

─────────────────────────────────
Lesson 12: Growth Rates in General — Fekete's Lemma, Groups and Entropy
─────────────────────────────────

📌 Key idea of this section:

        aₘ₊ₙ ≤ aₘ + aₙ   ⟹   lim aₙ/n = inf aₙ/n;    xₘ₊ₙ ≤ xₘxₙ   ⟹   lim xₙ^(1/n) exists

We have met exponential growth rates in many disguises: the rate k of an ODE, the spectral abscissa of a matrix, the Perron root of a Leslie matrix, the mean offspring number of a branching process, the base of an exponential algorithm. In many combinatorial and geometric problems one cannot compute the sequence explicitly and must first prove that an exponential growth rate exists at all. The standard tool is a lemma of Michael Fekete (1923).

Fekete's lemma

Lemma 12.1. Let (aₙ)_{n≥1} be a real sequence with aₘ₊ₙ ≤ aₘ + aₙ for all m, n ≥ 1 (subadditivity). Then lim aₙ/n exists in [−∞, ∞) and equals inf_{n≥1} aₙ/n.

Proof. Let L = inf aₙ/n. Clearly liminf aₙ/n ≥ L, so it suffices to show limsup aₙ/n ≤ aₘ/m for every fixed m. Write n = qm + r with 0 ≤ r < m (and set a₀ = 0 for the case r = 0). Subadditivity gives aₙ ≤ q aₘ + aᵣ. Dividing by n and letting n → ∞ with m fixed, q/n → 1/m and aᵣ/n → 0 because aᵣ takes only finitely many values. Hence limsup aₙ/n ≤ aₘ/m. Taking the infimum over m, limsup aₙ/n ≤ L ≤ liminf aₙ/n. ∎

Applying the lemma to aₙ = ln xₙ gives the multiplicative version: a positive submultiplicative sequence (xₘ₊ₙ ≤ xₘxₙ) has a well-defined exponential growth rate lim xₙ^(1/n) = inf xₙ^(1/n).

Three applications

First, Gelfand's spectral radius formula. For a square matrix (or a bounded operator on a Banach space), ‖Aᵐ⁺ⁿ‖ ≤ ‖Aᵐ‖‖Aⁿ‖, so lim ‖Aⁿ‖^(1/n) exists; Gelfand's theorem identifies it with the spectral radius ρ(A) = max |λ|. This is the discrete analogue of Theorem 7.1 and explains why the dominant eigenvalue of Lesson 8 is the growth rate of Lⁿ.

Second, self-avoiding walks. Let cₙ be the number of n-step self-avoiding walks on the square lattice ℤ² starting at the origin. Cutting an (m + n)-step walk into its first m and last n steps gives an injection into pairs of walks, so cₘ₊ₙ ≤ cₘcₙ. Hence the connective constant μ = lim cₙ^(1/n) exists; for ℤ² it is known numerically to be μ ≈ 2.638, with 2 < μ < 3 elementary (walks that only go up or right show cₙ ≥ 2ⁿ, and forbidding immediate reversals gives cₙ ≤ 4 · 3^(n−1)). For the hexagonal lattice, Duminil-Copin and Smirnov proved in 2012 that μ = √(2 + √2) ≈ 1.848, as Nienhuis had predicted in 1982.

Third, topological entropy. For a set of admissible words closed under taking subwords, let Nₙ be the number of admissible words of length n. Splitting a word of length m + n gives Nₘ₊ₙ ≤ NₘNₙ, so the entropy h = lim (1/n) ln Nₙ exists. For the golden mean shift (binary words with no two consecutive 1s), Nₙ = Fₙ₊₂, so h = ln φ ≈ 0.4812; in general for a shift of finite type with irreducible transition matrix, h is the logarithm of the Perron root.

Growth of groups

Let G be a group generated by a finite symmetric set S, and let β(n) be the number of elements expressible as words of length at most n in S. Every element of length at most m + n is a product of one of length at most m and one of length at most n, so β(m + n) ≤ β(m)β(n), and the growth rate ω = lim β(n)^(1/n) ≥ 1 exists. Changing the generating set changes β only up to a linear rescaling of n, so the distinction between exponential growth (ω > 1) and subexponential growth (ω = 1) is an invariant of the group.

For the free group F_k on k generators with S = {a₁^(±1), …, a_k^(±1)}, reduced words of length n ≥ 1 number 2k(2k − 1)^(n−1) (2k choices for the first letter, then 2k − 1 avoiding cancellation), so

        β(n) = 1 + ∑_{j=1}^{n} 2k(2k − 1)^(j−1) = (k(2k − 1)ⁿ − 1)/(k − 1)   (k ≥ 2),   ω = 2k − 1

For F₂ this is β(n) = 2 · 3ⁿ − 1. At the other extreme, ℤ² with the standard generators has β(n) = 2n² + 2n + 1, polynomial of degree 2; more generally ℤᵈ has polynomial growth of degree d, and the discrete Heisenberg group has growth of degree 4 (Bass–Guivarc'h formula).

The structure theory is deep. Milnor and Wolf (1968) showed that a finitely generated solvable group has either polynomial or exponential growth, the former exactly when it is virtually nilpotent. Milnor asked whether intermediate growth (faster than every polynomial but slower than every exponential) can occur at all. Gromov (1981) proved that a finitely generated group has polynomial growth if and only if it is virtually nilpotent, a theorem whose proof introduced the Gromov–Hausdorff limit of metric spaces. Grigorchuk (1984) answered Milnor's question by constructing a group of intermediate growth, with exp(n^α) ≲ β(n) ≲ exp(n^β) for some 0 < α < β < 1. A group of exponential growth also has an exponential growth rate in its Cayley graph geometry, and growth rates of fundamental groups of compact manifolds are tied to volume entropy and curvature (Milnor's original motivation: the fundamental group of a compact manifold of negative curvature has exponential growth).

✏️ Your Turn

(a) Use Fekete's lemma to show that if xₙ > 0 satisfies xₘ₊ₙ ≥ xₘxₙ then lim xₙ^(1/n) exists in (0, ∞].
(b) Compute β(3) for F₂ and for ℤ², and the sphere size of F₃ at radius 2.
(c) Show that ρ(A) ≤ ‖Aⁿ‖^(1/n) for every n.

Answers: (a) aₙ = −ln xₙ is subadditive, so lim aₙ/n = inf aₙ/n ∈ [−∞, ∞); hence lim (1/n) ln xₙ = sup (1/n) ln xₙ ∈ (−∞, ∞], and xₙ^(1/n) converges to a limit in (0, ∞]. (b) F₂: 2 · 27 − 1 = 53; ℤ²: 2 · 9 + 6 + 1 = 25; F₃ sphere of radius 2: 6 · 5 = 30. (c) If Av = λv with v ≠ 0, then Aⁿv = λⁿv, so |λ|ⁿ ≤ ‖Aⁿ‖; take n-th roots and the maximum over λ.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The sixty problems below are graded in three tiers. The Core problems check fluency with the formulas and computations of the course. The Advanced problems require short proofs or multi-step modelling. The Challenge problems are longer and connect several lessons; some are standard results from the literature that are worth proving once in full. Numerical answers should be given to the stated precision; logarithms are natural unless indicated otherwise.

Core (Problems 1–20)

  1. Solve y′ = 0.3y with y(0) = 40 and evaluate y(5) to two decimal places.
  2. Find the doubling time of a quantity obeying y′ = 0.035y, to two decimal places.
  3. A quantity decays exponentially from 800 to 200 in 12 hours. Find its half-life and its decay constant λ.
  4. Find the effective annual rate of a nominal 8% compounded quarterly.
  5. Find the force of interest δ equivalent to an effective annual rate of 6%, to six decimal places.
  6. Find the present value of 10,000 due in 8 years at force of interest δ = 0.045.
  7. Iodine-131 has a half-life of 8.02 days. What fraction of a sample remains after 30 days?
  8. Find the mean lifetime of a nuclide with half-life 10 minutes.
  9. Prove that 1 + x ≤ eˣ for every real x, with equality only at x = 0, using the mean value theorem.
  10. Order by asymptotic growth: 1.1ⁿ, n¹⁰, 2^(√n), n³, n^(ln n).
  11. Solve y′ = −2y + 8 with y(0) = 1 and identify the equilibrium and its stability.
  12. An object at 100 °C is placed in a room at 25 °C and is at 70 °C after 5 minutes. Find its temperature after 15 minutes under Newton's law of cooling.
  13. For P′ = 0.3P(1 − P/500), P(0) = 50, compute P(10) to one decimal place.
  14. Find the equilibria of y′ = y² − 4 and classify their stability.
  15. Compute e^(tA) for A = [[0, 1], [0, 0]] and solve x′ = Ax with x(0) = (a, b).
  16. Classify the equilibrium at the origin of x′ = Ax for A = [[−3, 1], [1, −3]], and give its eigenvalues.
  17. Solve xₙ₊₁ = 1.04xₙ + 100 with x₀ = 0, and compute x₁₀ to two decimal places.
  18. Solve xₙ₊₂ = xₙ₊₁ + 2xₙ with x₀ = 0, x₁ = 3, and state the growth rate per step.
  19. For the offspring distribution p₀ = 0.3, p₁ = 0.2, p₂ = 0.5, find the mean m and the extinction probability q.
  20. An SIR epidemic has R₀ = 3 and recovery rate γ = 0.25 per day. Find the herd-immunity threshold, the early growth rate and the early doubling time.

Advanced (Problems 21–45)

  21. Use Grönwall's inequality to give a second proof that the solution of y′ = ky, y(0) = y₀ is unique.
  22. Prove that bₙ = (1 + 1/n)^(n+1) is strictly decreasing, and deduce (1 + 1/n)ⁿ < e < (1 + 1/n)^(n+1) for every n ≥ 1.
  23. For which effective rate i is the rule of 72 exact, that is, 100 i · ln 2/ln(1 + i) = 72? Give i to three significant figures.
  24. A sample's ¹⁴C activity is 45% of that of modern carbon. Compute its age using T½ = 5730 years and using the Libby half-life 5568 years, to the nearest year.
  25. In the chain A → B → C with λ_A = 0.1 and λ_B = 0.3 per hour, find the time t* at which N_B is maximal and the exact value of N_B(t*)/N₀.
  26. For an exponential lifetime with mean τ, compute P(T > 2τ) and P(T½ < T ≤ 2T½).
  27. A nuclide decays by two independent channels whose partial half-lives are 10 hours and 40 hours. Prove that its lifetime is exponential and find the overall half-life.
  28. Deduce from Theorem 4.1 that (ln n)/n^ε → 0 for every ε > 0.
  29. Find all positive integers n with n³ > 2ⁿ.
  30. Use Stirling's formula to show C(2n, n) ~ 4ⁿ/√(πn), and compare with the exact value for n = 10.
  31. Find the radius of convergence of ∑ Fₙ zⁿ, where Fₙ are the Fibonacci numbers.
  32. Let u ≥ 0 be continuous with u(t) ≤ 2 + ∫₀ᵗ u(s)/(1 + s) ds for t ≥ 0. Find the bound given by Grönwall's inequality.
  33. Solve y′ = −y + e^(−t), y(0) = 0, and explain why the solution is not a combination of pure exponentials.
  34. Show that every logistic solution with 0 < P₀ < K is symmetric about its inflection point: P(t* + s) + P(t* − s) = K.
  35. For P′ = 0.8P(1 − P/5000) − 600, find the equilibria and their stability, and the maximum sustainable yield.
  36. For constant-effort harvesting with r = 0.8 and K = 5000, compute the sustained yield at E = 0.3 and find the effort that maximizes yield.
  37. Verify that P(t) = K exp(ln(P₀/K) e^(−rt)) solves the Gompertz equation and that its inflection value is K/e.
  38. Compute e^(tA) for A = [[0, −2], [2, 0]] and describe the trajectories, including their period.
  39. Compute e^(tA) for A = [[1, 1], [0, 2]].
  40. Show that the flow of x′ = Ax preserves area in the plane if and only if tr A = 0.
  41. For A = [[1, 0], [0, 0]] and B = [[0, 1], [0, 0]], compute e^A e^B, e^B e^A and e^(A+B), and confirm that all three differ.
  42. For the Leslie matrix L = [[0.5, 1.5], [0.6, 0]], find the dominant eigenvalue to four decimal places and the net reproductive number R₀.
  43. Prove that Fₙ is the nearest integer to φⁿ/√5 for all n ≥ 0.
  44. Find the extinction probability of a Galton–Watson process with Poisson(1.5) offspring, to three decimal places.
  45. For an SIR epidemic with R₀ = 1.8 starting from S(0) ≈ N, compute the final size and the peak prevalence.

Challenge (Problems 46–60)

  46. (Herschel–Maxwell.) Let f : ℝ → (0, ∞) be continuous and even, with f(x) f(y) = f(0) f(√(x² + y²)) for all x, y. Prove that f(x) = f(0) e^(cx²) for some constant c, and that c < 0 if f is integrable.
  47. Solve y′ = y² with y(0) = y₀ > 0 and show that the solution blows up in finite time. More generally, show that y′ = f(y) with f positive and continuous on [y₀, ∞) reaches infinity in finite time if and only if ∫_{y₀}^∞ dy/f(y) < ∞, and explain why linear growth never blows up.
  48. For A = [[−1, M], [0, −1]] with M > 0, compute e^(tA) and the maximum over t ≥ 0 of its (1, 2) entry. Evaluate for M = 100.
  49. Prove the variance formula Var Zₙ = σ² m^(n−1)(mⁿ − 1)/(m − 1) for a Galton–Watson process with m ≠ 1.
  50. For the critical geometric offspring distribution p_k = 2^(−(k+1)), show that the n-th iterate of f(s) = 1/(2 − s) is fₙ(s) = (n − (n − 1)s)/(n + 1 − ns), and deduce P(Zₙ > 0) = 1/(n + 1). Compare with Kolmogorov's estimate.
  51. For the SIR model with general initial values S₀, I₀ and R₀S₀/N > 1, prove that the peak prevalence is I_max = S₀ + I₀ − (N/R₀)(1 + ln(R₀S₀/N)).
  52. Derive the Lambert W form z = 1 + W(−R₀e^(−R₀))/R₀ of the final size, and explain which branch gives the nontrivial root.
  53. Prove that the Euler–Lotka equation has exactly one positive root ρ, that every other eigenvalue λ of the Leslie matrix satisfies |λ| ≤ ρ, and that ρ > 1 if and only if R₀ > 1.
  54. For the Leslie matrix with f = (0, 0, 6), s₁ = 1/2, s₂ = 1/3, show that L³ = I. What does this say about convergence to a stable age distribution, and which hypothesis of Theorem 8.1 fails?
  55. Count the binary words of length n with no two consecutive 1s, and those with no three consecutive 1s, and compute the topological entropy of each constraint.
  56. Let S and T be finite symmetric generating sets of a group G. Prove that there is C ≥ 1 with β_S(n) ≤ β_T(Cn) for all n, and deduce that having exponential growth does not depend on the generating set.
  57. For A = [[1, 1], [0, 1]], compute Aⁿ and verify Gelfand's formula lim ‖Aⁿ‖^(1/n) = ρ(A) directly, even though ‖Aⁿ‖ is unbounded.
  58. A recursive algorithm satisfies T(n) = T(n − 1) + T(n − 3) + 1. Find the exponential base of its running time to four decimal places.
  59. Prove that (I + A/n)ⁿ → e^A for every square matrix A, with error at most ‖A‖² e^(‖A‖)/(2n).
  60. Show that L_n[1/2, 1] grows faster than every power of ln n and slower than n^ε for every ε > 0.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. y(t) = 40e^(0.3t) by Theorem 1.1, so y(5) = 40e^1.5 ≈ 40 · 4.481689 ≈ 179.27.
  2. T₂ = ln 2/0.035 ≈ 0.693147/0.035 ≈ 19.80.
  3. 200/800 = 1/4 = (1/2)², so 12 hours is two half-lives and T½ = 6 hours. Then λ = ln 2/6 ≈ 0.1155 per hour (equivalently λ = ln 4/12).
  4. i = (1 + 0.08/4)⁴ − 1 = 1.02⁴ − 1 = 1.08243216 − 1 ≈ 0.082432, that is 8.2432%.
  5. δ = ln(1.06) ≈ 0.058269.
  6. PV = 10,000 e^(−0.045 · 8) = 10,000 e^(−0.36) ≈ 6976.76.
  7. The fraction is 2^(−30/8.02) = 2^(−3.7406) ≈ 0.0748, about 7.48%.
  8. τ = T½/ln 2 = 10/0.693147 ≈ 14.43 minutes.
  9. Let g(x) = eˣ − 1 − x. For x ≠ 0 the mean value theorem gives eˣ − 1 = x e^ξ with ξ strictly between 0 and x. If x > 0 then e^ξ > 1, so eˣ − 1 > x; if x < 0 then e^ξ < 1 and multiplying by the negative number x reverses the inequality, so again eˣ − 1 = xe^ξ > x. Hence g(x) > 0 for x ≠ 0 and g(0) = 0.
  10. n³ ≪ n¹⁰ ≪ n^(ln n) ≪ 2^(√n) ≪ 1.1ⁿ. Compare logarithms: 3 ln n < 10 ln n ≪ (ln n)² ≪ √n ln 2 ≪ n ln 1.1, using Corollary 4.2 for (ln n)² ≪ √n.
  11. By Lesson 5 with k = −2, b = 8, the equilibrium is −b/k = 4 and y(t) = 4 + (1 − 4)e^(−2t) = 4 − 3e^(−2t). Since k < 0 the equilibrium is asymptotically stable.
  12. The excess temperature decays exponentially: it falls from 75 to 45 in 5 minutes, a factor 0.6. After 15 minutes the excess is 75 · 0.6³ = 75 · 0.216 = 16.2, so the temperature is 41.2 °C.
  13. P(t) = 500/(1 + 9e^(−0.3t)), so P(10) = 500/(1 + 9e^(−3)) = 500/(1 + 0.448084) ≈ 345.3.
  14. f(y) = y² − 4 vanishes at y = ±2, and f′(y) = 2y. f′(2) = 4 > 0, so y = 2 is unstable; f′(−2) = −4 < 0, so y = −2 is asymptotically stable.
  15. A² = 0, so the series stops: e^(tA) = I + tA = [[1, t], [0, 1]], and x(t) = (a + bt, b).
  16. τ = −6 and Δ = 9 − 1 = 8, with τ² − 4Δ = 4 > 0. The eigenvalues are (−6 ± 2)/2 = −2 and −4 (eigenvectors (1, 1) and (1, −1)). Both are real and negative: a stable node.
  17. The equilibrium is x* = 100/(1 − 1.04) = −2500, so xₙ = −2500 + (0 + 2500) · 1.04ⁿ = 2500(1.04ⁿ − 1). Then x₁₀ = 2500(1.480244 − 1) ≈ 1200.61.
  18. χ(λ) = λ² − λ − 2 = (λ − 2)(λ + 1), so xₙ = a2ⁿ + b(−1)ⁿ. From a + b = 0 and 2a − b = 3: a = 1, b = −1, so xₙ = 2ⁿ − (−1)ⁿ. The growth rate is 2 per step.
  19. m = 0.2 + 2 · 0.5 = 1.2 > 1. By the factorization (s − 1)(p₂s − p₀) = 0, q = p₀/p₂ = 0.3/0.5 = 0.6.
  20. p_c = 1 − 1/3 = 2/3 ≈ 66.7%. The early growth rate is r = γ(R₀ − 1) = 0.25 · 2 = 0.5 per day, with doubling time ln 2/0.5 ≈ 1.386 days.

Advanced

  21. Let y and z be two solutions with the same initial value and w = y − z. Then w(t) = ∫₀ᵗ k w(s) ds, so for t ≥ 0, |w(t)| ≤ 0 + ∫₀ᵗ |k| |w(s)| ds. Grönwall with α = 0 gives |w(t)| ≤ 0 · e^(|k|t) = 0. For t ≤ 0 apply the same argument to w(−t), which satisfies the equation with −k.
  22. Let g(x) = (x + 1) ln(1 + 1/x) for x > 0. Then g′(x) = ln(1 + 1/x) − 1/x < 0, because ln(1 + u) < u for u > 0 (Problem 9 with logarithms). So ln bₙ = g(n) is strictly decreasing. Also bₙ = (1 + 1/n)ⁿ (1 + 1/n) → e · 1 = e. A strictly decreasing sequence lies strictly above its limit, so bₙ > e, while Theorem 2.1 gives (1 + 1/n)ⁿ < e since that sequence strictly increases to e.
  23. The function i ↦ 100 i ln 2/ln(1 + i) increases from 69.31 (as i → 0) and equals 72 at i ≈ 0.0785, that is about 7.85% (bisection; at i = 8% its value is 72.05).
  24. t = T½ ln(1/0.45)/ln 2 with ln(1/0.45) ≈ 0.798508. With T½ = 5730: t ≈ 8266.64 · 0.798508 ≈ 6601 years. With 5568: t ≈ 8032.92 · 0.798508 ≈ 6414 years. The difference is about 187 years, a 2.9% effect equal to the ratio 5730/5568 ≈ 1.029.
  25. t* = ln(λ_B/λ_A)/(λ_B − λ_A) = ln 3/0.2 ≈ 5.493 hours. At t*, e^(−λ_A t*) = 3^(−1/2) and e^(−λ_B t*) = 3^(−3/2), so N_B/N₀ = (0.1/0.2)(3^(−1/2) − 3^(−3/2)) = (1/2) · 3^(−1/2) · (2/3) = 1/(3√3) ≈ 0.1925.
  26. P(T > 2τ) = e^(−λ · 2/λ) = e^(−2) ≈ 0.1353. P(T½ < T ≤ 2T½) = S(T½) − S(2T½) = 1/2 − 1/4 = 1/4.
  27. Let T₁, T₂ be independent exponential with rates λ₁ = ln 2/10 and λ₂ = ln 2/40. The nucleus decays at T = min(T₁, T₂), and P(T > t) = P(T₁ > t)P(T₂ > t) = e^(−(λ₁+λ₂)t), so T is exponential with rate λ₁ + λ₂. Its half-life is ln 2/(λ₁ + λ₂) = 1/(1/10 + 1/40) = 1/(5/40) = 8 hours.
  28. Put n = eᵘ: (ln n)/n^ε = u e^(−εu) = (1/ε)(εu) e^(−εu), and v e^(−v) → 0 as v = εu → ∞ by Theorem 4.1 with k = 1.
  29. Direct computation: n = 1 gives 1 < 2; n = 2, …, 9 give n³ > 2ⁿ (for instance 9³ = 729 > 512); n = 10 gives 1000 < 1024. For n ≥ 10, if 2ⁿ > n³ then 2^(n+1) > 2n³ > (n + 1)³, because ((n + 1)/n)³ ≤ 1.1³ = 1.331 < 2. So the answer is n = 2, 3, …, 9.
  30. C(2n, n) = (2n)!/(n!)² ~ √(4πn)(2n/e)^(2n) / (2πn (n/e)^(2n)) = 4ⁿ √(4πn)/(2πn) = 4ⁿ/√(πn). For n = 10: 4¹⁰/√(10π) = 1,048,576/5.60499 ≈ 187,079, against the exact 184,756; the relative error is about 1.26%, and the next correction factor 1 − 1/(8n) brings the estimate to about 184,740.
  31. Fₙ^(1/n) → φ (Binet), so by Cauchy–Hadamard the radius is 1/φ = (√5 − 1)/2 ≈ 0.618. Equivalently, ∑ Fₙ zⁿ = z/(1 − z − z²), whose singularity nearest the origin is the root (√5 − 1)/2 of z² + z − 1.
  32. With α = 2 and β(s) = 1/(1 + s), ∫₀ᵗ β = ln(1 + t), so u(t) ≤ 2e^(ln(1+t)) = 2(1 + t). The bound is attained by u = 2(1 + t).
  33. Variation of constants: y(t) = e^(−t) ∫₀ᵗ eˢ e^(−s) ds = t e^(−t). The forcing e^(−t) is resonant with the homogeneous solution (the same rate), which produces the factor t, exactly as a 2 × 2 Jordan block does in Lesson 7.
  34. Write P(t) = K/(1 + e^(−r(t − t*))) with e^(rt*) = (K − P₀)/P₀. Then with u = e^(−rs), P(t* + s) + P(t* − s) = K/(1 + u) + K/(1 + 1/u) = K/(1 + u) + Ku/(u + 1) = K.
  35. rK/4 = 0.8 · 5000/4 = 1000 is the maximum sustainable yield, and h = 600 < 1000. With 4h/(rK) = 0.6, P± = 2500(1 ± √0.4) ≈ 2500(1 ± 0.632456), that is P₊ ≈ 4081.1 and P₋ ≈ 918.9. Here f′(P) = 0.8 − 0.00032P, which is negative at P₊ (stable) and positive at P₋ (unstable threshold).
  36. The equilibrium is K(1 − E/r) and the yield is Y(E) = EK(1 − E/r). Y(0.3) = 0.3 · 5000 · (1 − 0.375) = 937.5. Y′(E) = K(1 − 2E/r) = 0 at E = r/2 = 0.4, with Y(0.4) = 1000 = rK/4.
  37. Let u = ln(P/K) = ln(P₀/K) e^(−rt). Then P′/P = u′ = −ru = r ln(K/P), which is the Gompertz equation. The growth rate g(P) = rP ln(K/P) has g′(P) = r(ln(K/P) − 1), vanishing at P = K/e, and P″ = g′(P)P′ changes sign there, so K/e is the inflection value.
  38. A = 2J with J = [[0, −1], [1, 0]] and J² = −I, so e^(tA) = cos(2t) I + sin(2t) J = [[cos 2t, −sin 2t], [sin 2t, cos 2t]]. Trajectories are circles centred at the origin traversed counterclockwise with angular speed 2, of period π.
  39. The eigenvalues 1, 2 are distinct. Writing e^(tA) = [[eᵗ, c(t)], [0, e^(2t)]], the equation (e^(tA))′ = A e^(tA) gives c′ = c + e^(2t), c(0) = 0, so c(t) = e^(2t) − eᵗ. Hence e^(tA) = [[eᵗ, e^(2t) − eᵗ], [0, e^(2t)]].
  40. The flow multiplies areas by |det e^(tA)| = e^(t tr A) (Liouville). This equals 1 for all t if and only if tr A = 0. Example: linear Hamiltonian systems, A = [[a, b], [c, −a]].
  41. e^A = [[e, 0], [0, 1]] and e^B = I + B = [[1, 1], [0, 1]]. Then e^A e^B = [[e, e], [0, 1]] and e^B e^A = [[e, 1], [0, 1]]. A + B = [[1, 1], [0, 0]] has eigenvalues 1 and 0, and the method of Problem 39 gives e^(A+B) = [[e, e − 1], [0, 1]]. The (1, 2) entries e, 1 and e − 1 ≈ 1.718 are all different (AB = B ≠ 0 = BA).
  42. χ(λ) = λ² − 0.5λ − 1.5 · 0.6 = λ² − 0.5λ − 0.9, so ρ = (0.5 + √(0.25 + 3.6))/2 = (0.5 + 1.962142)/2 ≈ 1.2311. R₀ = f₁ + f₂s₁ = 0.5 + 0.9 = 1.4 > 1, consistent with ρ > 1.
  43. Binet: Fₙ − φⁿ/√5 = −ψⁿ/√5, and |ψ| = (√5 − 1)/2 < 1, so |ψⁿ/√5| ≤ 1/√5 < 1/2 for all n ≥ 0. An integer within distance less than 1/2 of a real number is its nearest integer.
  44. Iterate qₖ₊₁ = e^(1.5(qₖ − 1)) from q₀ = 0 (the iteration of Theorem 9.1, which converges monotonically): q ≈ 0.417. Check: e^(1.5(0.417 − 1)) = e^(−0.8745) ≈ 0.417.
  45. Solve 1 − z = e^(−1.8z) by iteration: z ≈ 0.732 (check e^(−1.8 · 0.732) = e^(−1.3176) ≈ 0.268). The peak prevalence is 1 − (1 + ln 1.8)/1.8 = 1 − 1.587787/1.8 ≈ 0.118, about 11.8%. The herd-immunity threshold 1 − 1/1.8 ≈ 0.444 is overshot by almost 29 percentage points.

Challenge

  46. Define g(u) = ln(f(√u)/f(0)) for u ≥ 0, which is continuous. For u, v ≥ 0, taking x = √u and y = √v in the hypothesis gives f(√u) f(√v) = f(0) f(√(u + v)), that is g(u + v) = g(u) + g(v). The argument of Theorem 1.2 on [0, ∞) gives g(u) = cu. Hence f(x) = f(0) e^(cx²) for x ≥ 0, and for x < 0 by evenness. If c ≥ 0 then f(x) ≥ f(0) > 0 everywhere and f is not integrable, so integrability forces c < 0: the density is Gaussian. This is the Herschel (1850) and Maxwell (1860) derivation of the normal law from rotational invariance and independence of coordinates.
  47. Separating variables, −1/y = t − 1/y₀, so y(t) = y₀/(1 − y₀t), which tends to infinity as t → 1/y₀. In general, the time for the solution to travel from y₀ to Y is ∫_{y₀}^{Y} dy/f(y) (as t is the inverse function of y, with dt/dy = 1/f(y)), and the solution reaches infinity in finite time if and only if this integral converges as Y → ∞. For f(y) = ky the integral is (1/k) ln(Y/y₀) → ∞, so exponential growth never blows up; for f(y) ≥ c y^(1+δ) with δ > 0 the blow-up time is at most 1/(cδ y₀^δ). This is Osgood's criterion; exponential growth is the borderline linear case.
  48. A = −I + MN with N = [[0, 1], [0, 0]], and −I commutes with N, so e^(tA) = e^(−t)(I + tMN) = e^(−t)[[1, Mt], [0, 1]]. The (1, 2) entry h(t) = Mte^(−t) has h′(t) = M(1 − t)e^(−t), so its maximum is at t = 1 with value M/e. For M = 100 the maximum is 100/e ≈ 36.79: a stable system with both eigenvalues −1 amplifies a perturbation of the second coordinate by a factor of about 37 before it decays.
  49. Let Vₙ = Var Zₙ. By the law of total variance, Vₙ₊₁ = E[Var(Zₙ₊₁ | Zₙ)] + Var(E[Zₙ₊₁ | Zₙ]) = E[Zₙσ²] + Var(mZₙ) = σ²mⁿ + m²Vₙ, with V₀ = 0. Unrolling, Vₙ = σ² ∑_{j=0}^{n−1} m^(2(n−1−j)) mʲ = σ² m^(n−1) ∑_{j=0}^{n−1} m^(n−1−j) = σ² m^(n−1)(mⁿ − 1)/(m − 1). (For m = 1 the same sum gives nσ².)
  50. Here f(s) = ∑ 2^(−(k+1)) sᵏ = (1/2)/(1 − s/2) = 1/(2 − s), with m = 1 and σ² = 2. The formula holds for n = 1: (1 − 0 · s)/(2 − s). If it holds for n, then fₙ₊₁(s) = f(fₙ(s)) = 1/(2 − (n − (n − 1)s)/(n + 1 − ns)) = (n + 1 − ns)/(2(n + 1 − ns) − n + (n − 1)s) = (n + 1 − ns)/(n + 2 − (n + 1)s), the formula for n + 1. So P(Zₙ = 0) = fₙ(0) = n/(n + 1) and P(Zₙ > 0) = 1/(n + 1), matching Kolmogorov's 2/(nσ²) = 1/n asymptotically.
  51. Along solutions, dI/dS = I′/S′ = (βSI/N − γI)/(−βSI/N) = −1 + N/(R₀S), so I + S − (N/R₀) ln S is constant. I is maximal when I′ = 0, that is S = N/R₀ (which is reached since S decreases from S₀ > N/R₀). Equating the constant at t = 0 and at the peak: I_max + N/R₀ − (N/R₀) ln(N/R₀) = I₀ + S₀ − (N/R₀) ln S₀, which rearranges to I_max = S₀ + I₀ − (N/R₀)(1 + ln(R₀S₀/N)).
  52. Put w = −R₀(1 − z). From 1 − z = e^(−R₀z) = e^(−R₀) e^(R₀(1 − z)) we get (1 − z) e^(−R₀(1−z)) = e^(−R₀), and multiplying by −R₀, w eʷ = −R₀e^(−R₀). Hence w = W(−R₀e^(−R₀)) and z = 1 + w/R₀. The argument lies in (−1/e, 0) for R₀ ≠ 1, where W has two real branches, W₀ ≥ −1 and W₋₁ ≤ −1. One solution is always w = −R₀, giving z = 0. For R₀ > 1, −R₀ < −1 is the W₋₁ value, so the nontrivial root is z = 1 + W₀(−R₀e^(−R₀))/R₀, on the principal branch. (For R₀ < 1 the principal branch returns w = −R₀ and the only root in [0, 1] is z = 0.)
  53. Let φ(λ) = ∑ f_j ℓ_j λ^(−j) for λ > 0, with some f_j ℓ_j > 0. Then φ is continuous and strictly decreasing, φ → ∞ as λ → 0⁺ and φ → 0 as λ → ∞, so φ(λ) = 1 has exactly one positive root ρ. If λ ≠ 0 is any complex eigenvalue, then 1 = |∑ f_j ℓ_j λ^(−j)| ≤ ∑ f_j ℓ_j |λ|^(−j) = φ(|λ|), so φ(|λ|) ≥ 1 = φ(ρ) and |λ| ≤ ρ by monotonicity. Finally φ(1) = R₀, and since φ is decreasing, ρ > 1 ⟺ φ(1) > φ(ρ) = 1 ⟺ R₀ > 1.
  54. L(x₁, x₂, x₃) = (6x₃, x₁/2, x₂/3). Applying L three times: L²x = (6x₂/3, 3x₃, x₁/6) = (2x₂, 3x₃, x₁/6) and L³x = (6x₁/6, 2x₂/2, 3x₃/3) = x. So L³ = I and the eigenvalues are the cube roots of unity, all of modulus ρ = 1. Every census vector returns exactly after three steps, and unless x₀ is a multiple of the eigenvector (1, 1/2, 1/6) the age structure oscillates forever with period 3. L is irreducible but not primitive: reproduction occurs only at age 3, and gcd{3} = 3 ≠ 1, so the strict dominance |λ| < ρ of Theorem 8.1 fails.
  55. Let aₙ count words with no 11. A word either ends in 0 (preceded by any admissible word of length n − 1) or in 01 (preceded by any admissible word of length n − 2), so aₙ = aₙ₋₁ + aₙ₋₂ with a₁ = 2, a₂ = 3, giving aₙ = Fₙ₊₂ and entropy ln φ ≈ 0.4812. Similarly words with no 111 end in 0, 01 or 011, so bₙ = bₙ₋₁ + bₙ₋₂ + bₙ₋₃ with b₁ = 2, b₂ = 4, b₃ = 7. The growth rate is the real root of λ³ = λ² + λ + 1, the tribonacci constant ≈ 1.8393, and the entropy is ln 1.8393 ≈ 0.6094.
  56. Each element of S is a word in T; let C be the maximal T-length of an element of S. A word of S-length at most n is then a word of T-length at most Cn, so β_S(n) ≤ β_T(Cn). Hence ω_S = lim β_S(n)^(1/n) ≤ lim β_T(Cn)^(1/n) = ω_T^C, and symmetrically ω_T ≤ ω_S^(C′). So ω_S > 1 if and only if ω_T > 1.
  57. By induction Aⁿ = [[1, n], [0, 1]]. In the maximum-row-sum norm ‖Aⁿ‖ = n + 1, and in every norm ‖Aⁿ‖ is between c(n + 1) and C(n + 1) for constants c, C > 0 by equivalence of norms. Then ‖Aⁿ‖^(1/n) → 1 because (n + 1)^(1/n) = e^(ln(n+1)/n) → 1 and c^(1/n), C^(1/n) → 1. Indeed ρ(A) = 1: polynomial growth of ‖Aⁿ‖ is invisible to the exponential rate.
  58. The homogeneous part has characteristic equation λ³ = λ² + 1. Its real root is λ ≈ 1.4656 (the other two roots have modulus 1/√1.4656 ≈ 0.826 < 1, since the product of the roots is 1), and the constant forcing only adds a constant particular solution (T = −1). So T(n) = Θ(1.4656ⁿ).
  59. Let X = I + A/n and Y = e^(A/n); they commute, being power series in A, and Xⁿ − Yⁿ = ∑_{k=0}^{n−1} Xᵏ (X − Y) Y^(n−1−k). With a = ‖A‖, ‖X‖ ≤ 1 + a/n ≤ e^(a/n) and ‖Y‖ ≤ e^(a/n), so ‖Xⁿ − Yⁿ‖ ≤ n e^(a(n−1)/n) ‖X − Y‖. Also ‖X − Y‖ ≤ ∑_{j≥2} (a/n)ʲ/j! ≤ ((a/n)²/2) ∑_{i≥0} (a/n)ⁱ/i! = (a²/(2n²)) e^(a/n), using j! ≥ 2 (j − 2)!. Combining, ‖(I + A/n)ⁿ − e^A‖ ≤ a² eᵃ/(2n). This is the convergence of Euler's method for x′ = Ax.
  60. L_n[1/2, 1] = exp((1 + o(1)) √(ln n · ln ln n)). A power (ln n)ᵏ equals exp(k ln ln n), and √(ln n ln ln n)/(k ln ln n) = (1/k)√(ln n/ln ln n) → ∞, so L_n[1/2, 1] eventually exceeds (ln n)ᵏ. On the other hand n^ε = exp(ε ln n), and √(ln n ln ln n)/(ε ln n) = (1/ε)√(ln ln n/ln n) → 0, so L_n[1/2, 1] is eventually smaller than n^ε. In terms of the input length ℓ ≈ log₂ n, the quadratic sieve therefore runs in time exp(O(√(ℓ log ℓ))): superpolynomial but subexponential in ℓ.
