Combinatorics — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Enumerative combinatorics asks a deceptively simple question: given a finite set described by some rule, how many elements does it have? The elementary answer — multiply independent choices, divide out the order you do not care about — is where the subject begins, not where it ends. Almost every interesting counting problem resists a closed formula, and the real work consists of finding the right structure: a bijection that converts one family into another, an algebraic object (a generating function, a group action, an inverse matrix) that encodes the whole sequence at once, or an asymptotic estimate when exact answers are out of reach.

This course treats combinatorics as a graduate text would. We assume fluency with permutations and combinations, mathematical induction, basic linear algebra, power series, and elementary group theory. We begin with the twelvefold way, Rota's systematic classification of distribution problems, and with the algebra of binomial and multinomial coefficients. We then develop the three great general methods of enumeration: inclusion–exclusion (and its generalization, Möbius inversion), linear recurrences, and generating functions, both ordinary and exponential. These tools are applied to the classical number families — Stirling, Bell, partition and Catalan numbers — whose theory culminates in results such as Euler's pentagonal number theorem and the Hardy–Ramanujan asymptotic formula.

The second half of the course turns to existence and structure. Burnside's lemma and Pólya's theorem count objects up to symmetry. The pigeonhole principle leads to Ramsey theory, one of the deepest parts of modern combinatorics, where the exact value of R(5, 5) is still unknown. We prove the foundational theorems of graph theory that every combinatorialist uses — Euler's theorem, Hall's marriage theorem and Cayley's formula, together with the statement of König's theorem — and we close with the probabilistic method of Erdős, which proves that objects exist without ever constructing them.

In this course, you will:

  1. Classify distribution problems by the twelvefold way and solve each case
  2. Prove binomial and multinomial identities by double counting, and use Lucas's and Kummer's theorems
  3. Apply inclusion–exclusion and Möbius inversion on partially ordered sets
  4. Solve linear recurrences with constant coefficients by the characteristic polynomial
  5. Use ordinary and exponential generating functions as formal power series, including the exponential formula and Lagrange inversion
  6. Master the Stirling numbers of both kinds, the Bell numbers and Dobinski's formula
  7. Study integer partitions, Euler's pentagonal number theorem and the asymptotics of p(n)
  8. Derive the Catalan numbers by the reflection principle and the cycle lemma
  9. Count orbits under group actions with Burnside's lemma and the Pólya enumeration theorem
  10. Prove Ramsey-type theorems and the classical bounds on Ramsey numbers
  11. Prove the theorems of Euler, Hall and Cayley, and state König's theorem
  12. Use the probabilistic method: expectation, alteration and the Lovász local lemma

Notation used throughout: [n] = {1, 2, …, n}; (x)ₖ = x(x − 1)⋯(x − k + 1) is the falling factorial and x⁽ᵏ⁾ = x(x + 1)⋯(x + k − 1) the rising factorial; C(n, k) is the binomial coefficient; [xⁿ] F(x) denotes the coefficient of xⁿ in a power series F(x); |A| is the cardinality of a finite set A.

─────────────────────────────────
Lesson 1: The Twelvefold Way
─────────────────────────────────

📌 Key idea of this section:

        Count functions f : N → K with |N| = n, |K| = k,
        up to permutations of N and/or K, with f arbitrary, injective, or surjective.

Distributions as functions

A huge class of counting problems has the form "place n balls into k boxes." Formally, a placement is a function f : N → K from a set N of n balls to a set K of k boxes. Two further choices determine the problem. First, we may regard the balls as distinguishable or indistinguishable, and likewise the boxes; indistinguishability means that we count functions only up to the action of the symmetric group on N, on K, or on both. Second, we may impose no condition on f, require f to be injective (at most one ball per box), or require f to be surjective (no empty box). Three restrictions times four symmetry types give twelve problems. Gian-Carlo Rota organized them in this way in lectures in the 1960s; the name "twelvefold way" is due to Joel Spencer, and the table was popularized by Richard Stanley's Enumerative Combinatorics.

Stars and bars

Theorem 1.1. The number of solutions of x₁ + x₂ + ⋯ + xₖ = n in nonnegative integers (weak compositions of n into k parts) is C(n + k − 1, k − 1). The number of solutions in positive integers (compositions of n into k parts) is C(n − 1, k − 1).

Proof. A weak composition corresponds bijectively to a word consisting of n stars and k − 1 bars: x₁ is the number of stars before the first bar, xᵢ the number between bar i − 1 and bar i, and xₖ the number after the last bar. Such a word is determined by the positions of the bars among n + k − 1 slots, giving C(n + k − 1, k − 1). For positive solutions, substitute yᵢ = xᵢ − 1 ≥ 0, which gives a weak composition of n − k into k parts, counted by C(n − 1, k − 1). Alternatively, a composition of n is determined by choosing k − 1 of the n − 1 gaps between n stars in a row. ∎

The same substitution handles arbitrary lower bounds: if xᵢ ≥ bᵢ, put yᵢ = xᵢ − bᵢ and count weak compositions of n − ∑bᵢ. Upper bounds are harder and require inclusion–exclusion (Lesson 3).

The table

Write S(n, k) for the Stirling number of the second kind (the number of partitions of an n-set into k nonempty blocks) and pₖ(n) for the number of partitions of the integer n into exactly k positive parts. Write [P] for 1 if the statement P is true and 0 otherwise.

        balls / boxes          any f                    injective f      surjective f
        distinct / distinct    kⁿ                       (k)ₙ             k!·S(n, k)
        identical / distinct   C(n + k − 1, n)          C(k, n)          C(n − 1, k − 1)
        distinct / identical   S(n,1) + ⋯ + S(n,k)      [n ≤ k]          S(n, k)
        identical / identical  p₁(n) + ⋯ + pₖ(n)        [n ≤ k]          pₖ(n)

Proofs of the entries

Row one: an arbitrary function assigns each of n balls one of k boxes, giving kⁿ; an injective function is an arrangement of n distinct images, giving (k)ₙ = k!/(k − n)!. A surjection [n] → [k] is the same as an ordered partition of [n] into k nonempty blocks (block i is the preimage of box i); forgetting the order of the blocks loses exactly a factor of k!, so there are k!·S(n, k) surjections.

Row two: a function from indistinguishable balls is determined by the occupancy numbers (x₁, …, xₖ), which form a weak composition of n; injectivity means each xᵢ ∈ {0, 1}, which amounts to choosing n occupied boxes out of k; surjectivity means a composition. Row three: if the boxes are indistinguishable, a function is determined by its set of nonempty preimages, which is a set partition of N into at most k blocks; surjectivity forces exactly k blocks. An injective placement exists if and only if n ≤ k, and then all injective placements are equivalent. Row four: forgetting the labels on both sides leaves only the multiset of occupancy numbers, that is, an integer partition of n into at most k parts.

Worked example 1.2. Ten identical coins are distributed among four people so that each person receives at least one coin. This is a surjection from identical balls to distinct boxes: C(9, 3) = 84. If instead the ten coins are distinct, the count is 4!·S(10, 4) = 24 · 34105 = 818,520.

Remark. The table makes clear why the Stirling numbers and the partition numbers are fundamental: they are the irreducible quantities that remain after symmetry has been divided out. Neither has a closed product formula, and much of this course is devoted to understanding them.

✏️ Your Turn

(a) How many weak compositions of 12 into 5 parts are there?
(b) In how many ways can 6 distinct balls be put into 3 identical boxes if empty boxes are allowed?
(c) In how many ways can 8 identical balls be put into 3 identical boxes with no box empty?

Answers: (a) C(16, 4) = 1820. (b) S(6, 1) + S(6, 2) + S(6, 3) = 1 + 31 + 90 = 122. (c) p₃(8) = 5, namely 6+1+1, 5+2+1, 4+3+1, 4+2+2, 3+3+2.

─────────────────────────────────
Lesson 2: Binomial and Multinomial Coefficients
─────────────────────────────────

📌 Key idea of this section:

        (1 + x)ᵅ = ∑ₖ C(α, k) xᵏ,   C(α, k) = (α)ₖ / k!   for any α ∈ ℂ
        Identities are best proved by counting one set in two ways.

The generalized binomial coefficient

For an arbitrary complex number α and an integer k ≥ 0, define C(α, k) = α(α − 1)⋯(α − k + 1)/k!, and C(α, k) = 0 for k < 0. When α = n is a nonnegative integer, this agrees with the number of k-subsets of [n]. Newton's binomial series states that (1 + x)ᵅ = ∑ₖ C(α, k) xᵏ as formal power series (and as convergent series for |x| < 1). The case α = −m with m a positive integer is especially important, because

        C(−m, k) = (−m)(−m − 1)⋯(−m − k + 1)/k! = (−1)ᵏ C(m + k − 1, k),

so that

        (1 − x)⁻ᵐ = ∑ₖ C(m + k − 1, k) xᵏ.

This is stars and bars in algebraic form: the coefficient of xᵏ counts multisets of size k from an m-set.

Combinatorial proofs

A combinatorial (double counting) proof of an identity A = B exhibits a set of size A and a set of size B and a bijection between them, or counts a single set in two ways. Such proofs often explain an identity better than algebra does.

Theorem 2.1 (Vandermonde's convolution). For nonnegative integers m, n, r, ∑ₖ C(m, k) C(n, r − k) = C(m + n, r).

Proof. Count r-subsets of a set consisting of m red and n blue elements. Classifying by the number k of red elements chosen, there are C(m, k) C(n, r − k) such subsets for each k. ∎ Since both sides are polynomials in m and n of degree r that agree on all pairs of nonnegative integers, the identity holds for arbitrary complex m and n. This polynomial method — prove for integers by counting, extend by polynomial identity — is used constantly.

Theorem 2.2 (Hockey stick). For 0 ≤ k ≤ n, ∑ᵢ₌ₖⁿ C(i, k) = C(n + 1, k + 1).

Proof. A (k + 1)-subset of [n + 1] has a largest element i + 1 with k ≤ i ≤ n, and the remaining k elements form an arbitrary k-subset of [i]. ∎

Theorem 2.3. ∑ₖ k C(n, k) = n 2ⁿ⁻¹ and ∑ₖ k(k − 1) C(n, k) = n(n − 1) 2ⁿ⁻².

Proof. The first sum counts pairs (S, s) with S ⊆ [n] and s ∈ S (a committee with a chair); choose the chair first in n ways and then any subset of the remaining n − 1 elements. The second counts committees with an ordered pair of distinct officers. ∎ Combining them, ∑ₖ k² C(n, k) = n(n + 1) 2ⁿ⁻².

Multinomial coefficients

For k₁ + ⋯ + kₘ = n, the multinomial coefficient n!/(k₁! k₂! ⋯ kₘ!) counts words of length n containing exactly kᵢ copies of the letter i, or equivalently ordered partitions of [n] into labelled blocks of sizes k₁, …, kₘ. The multinomial theorem states that in any commutative ring

        (x₁ + ⋯ + xₘ)ⁿ = ∑ n!/(k₁!⋯kₘ!) · x₁^k₁ ⋯ xₘ^kₘ,

the sum running over all weak compositions (k₁, …, kₘ) of n. Expanding the product of n factors and recording which variable is taken from each factor proves it immediately.

Arithmetic of binomial coefficients

Theorem 2.4 (Lucas, 1878). Let p be prime and write n = ∑ nᵢ pⁱ and k = ∑ kᵢ pⁱ in base p, with 0 ≤ nᵢ, kᵢ ≤ p − 1. Then C(n, k) ≡ ∏ᵢ C(nᵢ, kᵢ) (mod p).

Proof. Over the field 𝔽ₚ we have (1 + x)ᵖ = 1 + xᵖ, because p divides C(p, j) for 0 < j < p. Iterating, (1 + x)^(pⁱ) = 1 + x^(pⁱ). Hence (1 + x)ⁿ = ∏ᵢ (1 + x^(pⁱ))^(nᵢ) in 𝔽ₚ[x]. Expanding the right-hand side, the exponent of x in each term is ∑ jᵢ pⁱ with 0 ≤ jᵢ ≤ nᵢ ≤ p − 1; by uniqueness of base-p expansion, xᵏ arises from exactly one choice, namely jᵢ = kᵢ, with coefficient ∏ C(nᵢ, kᵢ). ∎

Corollary. C(n, k) is odd if and only if every binary digit 1 of k is also a binary digit 1 of n. Consequently the rows of Pascal's triangle modulo 2 form the Sierpiński pattern.

Theorem 2.5 (Kummer, 1852). The exponent of the prime p in C(m + n, m) equals the number of carries when m and n are added in base p.

Example. C(10, 3) = 120 = 2³ · 3 · 5. In base 2, 3 = 11₂ and 7 = 111₂; adding them produces three carries, matching the factor 2³. In base 3, 3 = 10₃ and 7 = 21₃; adding them produces one carry, matching the single factor 3.

✏️ Your Turn

(a) Find the coefficient of x²y³z² in (x + y + z)⁷.
(b) Evaluate ∑ₖ k² C(6, k).
(c) Is C(2026, 1000) odd or even?

Answers: (a) 7!/(2! 3! 2!) = 210. (b) 6 · 7 · 2⁴ = 672. (c) Odd: 2026 = 11111101010₂ and 1000 = 1111101000₂, and every 1-bit of 1000 is a 1-bit of 2026, so by Lucas's theorem C(2026, 1000) ≡ 1 (mod 2).

─────────────────────────────────
Lesson 3: Inclusion–Exclusion and Möbius Inversion
─────────────────────────────────

📌 Key idea of this section:

        |A₁ ∪ ⋯ ∪ Aₘ| = ∑ over nonempty I ⊆ [m] of (−1)^(|I|+1) |⋂ᵢ∈I Aᵢ|
        Dₙ = n! ∑ⱼ₌₀ⁿ (−1)ʲ/j!

The principle

Theorem 3.1 (Inclusion–exclusion). Let A₁, …, Aₘ be subsets of a finite set X, and for I ⊆ [m] let A_I = ⋂ᵢ∈I Aᵢ, with A_∅ = X. Then the number of elements of X lying in none of the Aᵢ is ∑ over I ⊆ [m] of (−1)^|I| |A_I|.

Proof. Consider an element x ∈ X, and let J be the set of indices i with x ∈ Aᵢ, with |J| = j. The element x is counted in |A_I| exactly when I ⊆ J, so its total contribution to the right-hand side is ∑ over I ⊆ J of (−1)^|I| = ∑ᵣ C(j, r)(−1)ʳ = (1 − 1)ʲ, which is 1 if j = 0 and 0 otherwise. ∎

Truncating the alternating sum gives the Bonferroni inequalities: stopping after a positive term gives an upper bound for the union, and stopping after a negative term gives a lower bound. In probability these yield the estimates Pr(⋃Aᵢ) ≤ ∑ Pr(Aᵢ) and Pr(⋃Aᵢ) ≥ ∑ Pr(Aᵢ) − ∑ Pr(Aᵢ ∩ Aⱼ).

Derangements

A derangement is a permutation with no fixed point. Let Aᵢ be the set of permutations of [n] fixing i. Then |A_I| = (n − |I|)!, and inclusion–exclusion gives

        Dₙ = ∑ⱼ (−1)ʲ C(n, j)(n − j)! = n! ∑ⱼ₌₀ⁿ (−1)ʲ / j!.

The first values are D₀, …, D₈ = 1, 0, 1, 2, 9, 44, 265, 1854, 14833. Since the tail of the alternating series for e⁻¹ is bounded by its first omitted term, |Dₙ − n!/e| < n!/(n + 1)! = 1/(n + 1), so for n ≥ 1, Dₙ is the integer nearest to n!/e, and the probability that a random permutation is a derangement tends to 1/e ≈ 0.3679. Two recurrences follow combinatorially: Dₙ = (n − 1)(Dₙ₋₁ + Dₙ₋₂) (look at where n goes and whether that image maps back to n) and Dₙ = n Dₙ₋₁ + (−1)ⁿ. The number of permutations of [n] with exactly j fixed points is C(n, j) Dₙ₋ⱼ.

Surjections and Euler's totient

Taking Aᵢ to be the set of functions [n] → [k] missing the value i gives the count of surjections, k!·S(n, k) = ∑ⱼ (−1)ʲ C(k, j)(k − j)ⁿ. Taking X = [N] and Aᵢ the multiples of the i-th prime divisor pᵢ of N gives Euler's product φ(N) = N ∏ (1 − 1/p) over primes p dividing N, since |A_I| = N/∏ᵢ∈I pᵢ.

Upper bounds in stars and bars

Example 3.2. The number of solutions of x₁ + x₂ + x₃ = 15 with 0 ≤ xᵢ ≤ 7: let Aᵢ be the solutions with xᵢ ≥ 8. Then |Aᵢ| is the number of weak compositions of 7 into 3 parts, C(9, 2) = 36, and no two of the Aᵢ intersect because 16 > 15. Hence the count is C(17, 2) − 3 · 36 = 136 − 108 = 28.

Möbius inversion on posets

Inclusion–exclusion is the special case of a far more general principle. Let (P, ≤) be a locally finite partially ordered set (every interval [x, y] is finite). The Möbius function μ is defined recursively by μ(x, x) = 1 and μ(x, y) = −∑ over x ≤ z < y of μ(x, z) for x < y, and μ(x, y) = 0 unless x ≤ y.

Theorem 3.3 (Möbius inversion). Let f, g : P → ℂ, and suppose every principal ideal {y : y ≤ x} is finite. Then g(x) = ∑ over y ≤ x of f(y) for all x if and only if f(x) = ∑ over y ≤ x of μ(y, x) g(y) for all x.

Proof. Assume the first relation. Then ∑ over y ≤ x of μ(y, x) g(y) = ∑ over z ≤ x of f(z) ∑ over z ≤ y ≤ x of μ(y, x). The inner sum is 1 if z = x and 0 otherwise; this is the dual form of the defining recursion, which holds because the incidence algebra of P is an associative algebra in which μ is the two-sided inverse of the zeta function ζ(x, y) = [x ≤ y], and ζ has both a left inverse and a right inverse (each defined by an analogous recursion), which in an associative algebra must coincide. The converse is identical. ∎

Three posets recover classical results. For the Boolean lattice of subsets of [m], μ(S, T) = (−1)^|T∖S|, which is inclusion–exclusion. For the positive integers ordered by divisibility, μ(d, n) = μ(n/d), the number-theoretic Möbius function, giving the classical inversion g(n) = ∑_{d|n} f(d) ⟺ f(n) = ∑_{d|n} μ(n/d) g(d). For the lattice of set partitions of [n] ordered by refinement, μ(0̂, 1̂) = (−1)ⁿ⁻¹(n − 1)!. Philip Hall and, decisively, Gian-Carlo Rota (On the Foundations of Combinatorial Theory I, 1964) made Möbius functions a central tool.

✏️ Your Turn

(a) How many permutations of [7] have exactly 2 fixed points?
(b) Compute φ(360) by inclusion–exclusion.
(c) Using the recurrence Dₙ = n Dₙ₋₁ + (−1)ⁿ, compute D₉ from D₈ = 14833.

Answers: (a) C(7, 2) D₅ = 21 · 44 = 924. (b) 360 = 2³·3²·5, so φ(360) = 360 · (1/2)(2/3)(4/5) = 96. (c) D₉ = 9 · 14833 − 1 = 133,496.

─────────────────────────────────
Lesson 4: Linear Recurrence Relations
─────────────────────────────────

📌 Key idea of this section:

        aₙ = c₁aₙ₋₁ + ⋯ + c_d a_{n−d},   χ(t) = t^d − c₁t^(d−1) − ⋯ − c_d = ∏ (t − rᵢ)^(mᵢ)
        ⟹ aₙ = ∑ᵢ Pᵢ(n) rᵢⁿ,  deg Pᵢ < mᵢ

The structure theorem

A sequence (aₙ)ₙ≥₀ of complex numbers satisfies a linear recurrence of order d with constant coefficients if aₙ = c₁aₙ₋₁ + ⋯ + c_d a_{n−d} for all n ≥ d, with c_d ≠ 0. The solutions form a complex vector space V of dimension d, since a solution is determined freely by its initial values a₀, …, a_{d−1}. The characteristic polynomial is χ(t) = t^d − c₁t^(d−1) − ⋯ − c_d.

Theorem 4.1. Suppose χ(t) = ∏ᵢ (t − rᵢ)^(mᵢ) with distinct nonzero roots rᵢ. Then the sequences nʲ rᵢⁿ, for 0 ≤ j < mᵢ, form a basis of V. Equivalently, every solution has the form aₙ = ∑ᵢ Pᵢ(n) rᵢⁿ with Pᵢ a polynomial of degree less than mᵢ.

Proof. Let E be the shift operator (Ea)ₙ = aₙ₊₁ on the space of all sequences. Then V is the kernel of χ(E). Because the factors (E − rᵢ)^(mᵢ) commute and are pairwise coprime polynomials in E, the kernel of their product is the direct sum of their kernels (by Bézout, write 1 = ∑ uᵢ(E) ∏ⱼ≠ᵢ (E − rⱼ)^(mⱼ) and project). It remains to show that the kernel of (E − r)^m has basis nʲ rⁿ, 0 ≤ j < m. Substituting aₙ = rⁿ bₙ, one checks ((E − r)a)ₙ = rⁿ⁺¹(bₙ₊₁ − bₙ) = rⁿ⁺¹(Δb)ₙ, so (E − r)^m a = 0 if and only if Δ^m b = 0, i.e. bₙ is a polynomial in n of degree less than m. The sequences found are linearly independent (their total number is d = dim V, and they span by the direct-sum decomposition), so they form a basis. ∎

Fibonacci numbers and Binet's formula

For F₀ = 0, F₁ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂, the characteristic polynomial is t² − t − 1, with roots φ = (1 + √5)/2 and ψ = (1 − √5)/2. Solving for the constants with the initial values gives Binet's formula

        Fₙ = (φⁿ − ψⁿ)/√5.

Because |ψ| < 1, Fₙ is the integer nearest to φⁿ/√5. Combinatorially, Fₙ₊₁ counts tilings of a 1 × n strip by squares and dominoes, i.e. compositions of n into parts 1 and 2; counting tilings with k dominoes gives the identity Fₙ₊₁ = ∑ₖ C(n − k, k).

A repeated root

Worked example 4.2. Solve aₙ = 4aₙ₋₁ − 4aₙ₋₂ with a₀ = 1, a₁ = 6. Here χ(t) = (t − 2)², so aₙ = (α + βn)2ⁿ. From a₀ = 1 we get α = 1, and from a₁ = 2(1 + β) = 6 we get β = 2. Thus aₙ = (2n + 1)2ⁿ. Check: a₂ = 4 · 6 − 4 · 1 = 20 = 5 · 4.

Inhomogeneous recurrences

If aₙ = c₁aₙ₋₁ + ⋯ + c_d a_{n−d} + g(n), the general solution is a particular solution plus the general homogeneous solution. When g(n) = Q(n) sⁿ with Q a polynomial, one tries a particular solution R(n) sⁿ with deg R = deg Q, multiplied by n^m when s is a root of χ of multiplicity m (resonance). The justification is the annihilator method: (E − s)^(deg Q + 1) kills g, so a satisfies a homogeneous recurrence whose characteristic polynomial is χ(t)(t − s)^(deg Q + 1), and Theorem 4.1 applies.

Worked example 4.3. Solve aₙ = 3aₙ₋₁ + 2ⁿ with a₀ = 0. Try c·2ⁿ: c·2ⁿ = 3c·2ⁿ⁻¹ + 2ⁿ gives c = 3c/2 + 1, so c = −2. Hence aₙ = α3ⁿ − 2ⁿ⁺¹, and a₀ = 0 forces α = 2: aₙ = 2·3ⁿ − 2ⁿ⁺¹. Check: a₁ = 2, a₂ = 3·2 + 4 = 10 = 18 − 8.

Domino tilings of a 3 × n board

Let aₙ be the number of domino tilings of a 3 × n rectangle and bₙ the number of tilings of a 3 × n rectangle with one corner cell removed. Examining the leftmost column gives aₙ = aₙ₋₂ + 2bₙ₋₁ and bₙ = aₙ₋₁ + bₙ₋₂. Eliminating b yields aₙ = 4aₙ₋₂ − aₙ₋₄ for even n, with a₀ = 1, a₂ = 3, so a₄ = 11, a₆ = 41, a₈ = 153, and aₙ = 0 for odd n. The characteristic polynomial λ⁴ − 4λ² + 1 has roots with λ² = 2 ± √3, so aₙ grows like a constant times (2 + √3)^(n/2).

✏️ Your Turn

(a) Solve aₙ = aₙ₋₁ + 6aₙ₋₂ with a₀ = 2, a₁ = 1.
(b) Solve aₙ = 6aₙ₋₁ − 9aₙ₋₂ with a₀ = 1, a₁ = 6.
(c) Solve aₙ = 2aₙ₋₁ + 3ⁿ with a₀ = 1.

Answers: (a) Roots 3 and −2; aₙ = 3ⁿ + (−2)ⁿ. (b) Double root 3; aₙ = (n + 1)3ⁿ. (c) A particular solution is 3ⁿ⁺¹; then aₙ = 3ⁿ⁺¹ + α2ⁿ with 3 + α = 1, so aₙ = 3ⁿ⁺¹ − 2ⁿ⁺¹.

─────────────────────────────────
Lesson 5: Ordinary Generating Functions
─────────────────────────────────

📌 Key idea of this section:

        A(x) = ∑ₙ aₙ xⁿ ∈ ℂ[[x]]
        disjoint union ↔ A + B,   ordered pair ↔ A · B,   sequence ↔ 1/(1 − A)

The ring of formal power series

The ordinary generating function (OGF) of a sequence (aₙ) is the formal power series A(x) = ∑ aₙ xⁿ. Formal power series are added termwise and multiplied by the Cauchy product, [xⁿ] A(x)B(x) = ∑ₖ aₖ bₙ₋ₖ. With these operations ℂ[[x]] is an integral domain, and A(x) is invertible if and only if a₀ ≠ 0 (the coefficients of the inverse are found recursively). The composition A(B(x)) is defined whenever b₀ = 0, since then only finitely many terms contribute to each coefficient. Formal differentiation obeys the usual rules. None of this requires convergence; convergence becomes relevant only for asymptotics.

The symbolic dictionary

Let 𝒜 be a combinatorial class: a set with a size function such that the number aₙ of objects of size n is finite. If 𝒜 and ℬ are disjoint, the OGF of their union is A + B. The OGF of the Cartesian product 𝒜 × ℬ, with size additive, is A · B, because an ordered pair of total size n consists of an object of size k and one of size n − k. If a₀ = 0, the class of finite sequences of objects of 𝒜 has OGF 1 + A + A² + ⋯ = 1/(1 − A). These three rules, systematized by Flajolet and Sedgewick in Analytic Combinatorics (2009), translate combinatorial descriptions directly into equations.

Example 5.1 (compositions). A composition is a sequence of positive integers. The class of positive integers has OGF x/(1 − x), so compositions have OGF 1/(1 − x/(1 − x)) = (1 − x)/(1 − 2x), and there are 2ⁿ⁻¹ compositions of n ≥ 1. Restricting to parts in {1, 2} gives 1/(1 − x − x²), the Fibonacci generating function shifted by one place.

Example 5.2 (making change). The number of ways to make n cents from coins of values 1, 5, 10, 25 is [xⁿ] 1/((1 − x)(1 − x⁵)(1 − x¹⁰)(1 − x²⁵)), since each factor 1/(1 − x^d) = 1 + x^d + x^(2d) + ⋯ records how many coins of value d are used. Multiplying out (or running the corresponding dynamic program) gives 49 ways for n = 50; adding a 50-cent coin gives 292 ways to make a dollar, a figure made famous by Pólya.

Rational generating functions

Theorem 5.3. A sequence satisfies a linear recurrence with constant coefficients of order d (for all n ≥ d) if and only if its OGF is P(x)/Q(x) with Q(x) = 1 − c₁x − ⋯ − c_d x^d and deg P < d.

Proof. If aₙ = c₁aₙ₋₁ + ⋯ + c_d a_{n−d} for n ≥ d, then the coefficient of xⁿ in Q(x)A(x) vanishes for n ≥ d, so Q(x)A(x) = P(x) is a polynomial of degree less than d. Conversely, if Q(x)A(x) = P(x) with deg P < d, comparing coefficients of xⁿ for n ≥ d recovers the recurrence. ∎ Note that Q(x) = x^d χ(1/x): the poles of A are the reciprocals of the characteristic roots, and partial fractions reproduce Theorem 4.1, since 1/(1 − rx)^m = ∑ₙ C(n + m − 1, m − 1) rⁿ xⁿ and C(n + m − 1, m − 1) is a polynomial in n of degree m − 1.

Coefficient extraction

Three formulas cover most extractions: [xⁿ] (1 − x)⁻ᵐ = C(n + m − 1, m − 1); [xⁿ] x^k A(x) = [xⁿ⁻ᵏ] A(x); and [xⁿ] A(x)/(1 − x) = a₀ + a₁ + ⋯ + aₙ (partial sums). Differentiation gives moment-type sums: applying (x d/dx) twice to 1/(1 − x) yields ∑ n² xⁿ = x(1 + x)/(1 − x)³.

Example 5.4. The number of solutions of x₁ + x₂ + x₃ + x₄ = 12 with every xᵢ ≥ 2 is [x¹²] (x² + x³ + ⋯)⁴ = [x¹²] x⁸(1 − x)⁻⁴ = [x⁴] (1 − x)⁻⁴ = C(7, 3) = 35, in agreement with stars and bars.

Growth rates from singularities

If A(x) has radius of convergence ρ, then limsup |aₙ|^(1/n) = 1/ρ (Cauchy–Hadamard), and when aₙ ≥ 0 Pringsheim's theorem guarantees that x = ρ itself is a singularity. Locating the dominant singularity and its type yields precise asymptotics: a simple pole at ρ gives aₙ ≈ c ρ⁻ⁿ, while a square-root singularity, as for the Catalan numbers in Lesson 9, gives aₙ ≈ c ρ⁻ⁿ n^(−3/2). This is the starting point of singularity analysis (Flajolet–Odlyzko, 1990).

✏️ Your Turn

(a) Find the number of ways to pay 20 cents with coins of value 1, 2 and 5.
(b) Find [x¹⁰] (1 + x)²/(1 − x)².
(c) Find a closed form for the OGF of the sequence aₙ = n² 3ⁿ.

Answers: (a) 29. (b) (1 + x)²(1 − x)⁻² = (1 + 2x + x²) ∑ (n + 1)xⁿ, so the coefficient is 11 + 2·10 + 9 = 40. (c) Substitute 3x for x in x(1 + x)/(1 − x)³ to get 3x(1 + 3x)/(1 − 3x)³.

─────────────────────────────────
Lesson 6: Exponential Generating Functions and the Exponential Formula
─────────────────────────────────

📌 Key idea of this section:

        Â(x) = ∑ₙ aₙ xⁿ/n!   for labelled structures
        labelled product ↔ Â·B̂,   set of components ↔ exp(Ĉ),   cycles ↔ log 1/(1 − Â)

Labelled classes

In a labelled class, an object of size n carries the labels 1, …, n on its atoms (a permutation, a set partition, a graph on vertex set [n]). Its exponential generating function (EGF) is Â(x) = ∑ aₙ xⁿ/n!. The labelled product of two classes consists of pairs (α, β) together with a relabelling: if α has size k and β has size n − k, we choose which k of the labels [n] go to α, in C(n, k) ways, and relabel order-preservingly. Hence the number of labelled products of size n is ∑ₖ C(n, k) aₖ bₙ₋ₖ, which is exactly n! [xⁿ] Â(x)B̂(x). This binomial convolution is the reason for the factorials.

Sets, sequences and cycles

Taking a labelled product of k copies of 𝒞 and forgetting the order of the factors (which, since labels are distinct, produces each unordered set exactly k! times) shows that the class of sets of k components has EGF Ĉ(x)ᵏ/k!, and the class of all sets of components has EGF exp(Ĉ(x)), provided c₀ = 0. Similarly, sequences have EGF 1/(1 − Ĉ) and cycles (sequences up to rotation) have EGF log(1/(1 − Ĉ)), since a cycle of k components arises from exactly k sequences.

Theorem 6.1 (The exponential formula). If every object of a labelled class 𝒜 decomposes uniquely as a set of connected components belonging to a class 𝒞 (with c₀ = 0), then Â(x) = exp(Ĉ(x)).

Examples

A permutation is a set of disjoint cycles. There are (k − 1)! cyclic orders on a k-set, so the EGF of a single cycle is ∑ (k − 1)! xᵏ/k! = ∑ xᵏ/k = log 1/(1 − x), and the exponential formula returns exp(log 1/(1 − x)) = 1/(1 − x) = ∑ n! xⁿ/n!, as it must. Removing 1-cycles gives the derangements: exp(log 1/(1 − x) − x) = e⁻ˣ/(1 − x), whose coefficients are the partial sums found in Lesson 3. Allowing only cycles of length 1 and 2 gives the involutions, with EGF exp(x + x²/2); differentiating, I′(x) = (1 + x)I(x), which translates into the recurrence Iₙ = Iₙ₋₁ + (n − 1)Iₙ₋₂, so I₀, …, I₈ = 1, 1, 2, 4, 10, 26, 76, 232, 764.

A set partition is a set of nonempty blocks, and a block of size k is a single structure, so blocks have EGF eˣ − 1 and set partitions have EGF exp(eˣ − 1), the EGF of the Bell numbers (Lesson 7). Forbidding singleton blocks gives exp(eˣ − 1 − x), with coefficients 1, 0, 1, 1, 4, 11, 41, 162, …

Connected graphs

Let gₙ = 2^C(n,2) be the number of labelled graphs on [n] and cₙ the number of connected ones. Every graph is a set of connected components, so ∑ gₙ xⁿ/n! = exp(∑ cₙ xⁿ/n!), and therefore Ĉ(x) = log Ĝ(x) as formal power series, although Ĝ has radius of convergence 0. Extracting coefficients is equivalent to the recurrence gₙ = ∑ₖ C(n − 1, k − 1) cₖ gₙ₋ₖ, obtained by classifying graphs according to the component containing vertex n. It gives c₁, …, c₅ = 1, 1, 4, 38, 728.

Lagrange inversion and Cayley's formula

Theorem 6.2 (Lagrange inversion). Let φ(t) be a formal power series with φ(0) ≠ 0, and let T(x) be the unique formal power series with T(0) = 0 satisfying T = x φ(T). Then for n ≥ 1, [xⁿ] T(x) = (1/n) [tⁿ⁻¹] φ(t)ⁿ.

A rooted labelled tree is a root together with a set of rooted subtrees attached to it, so the EGF T(x) of rooted labelled trees satisfies T = x exp(T). Lagrange inversion with φ = eᵗ gives [xⁿ] T = (1/n) nⁿ⁻¹/(n − 1)! = nⁿ⁻¹/n!. Hence there are nⁿ⁻¹ rooted labelled trees on [n], and, since each unrooted tree can be rooted in n ways, nⁿ⁻² labelled trees: Cayley's formula (1889), first found by Borchardt in 1860 and given a bijective proof by Prüfer in 1918 (Lesson 12). More generally, [xⁿ] H(T(x)) = (1/n) [tⁿ⁻¹] H′(t)φ(t)ⁿ; taking H(t) = tᵏ/k! shows that there are C(n − 1, k − 1) nⁿ⁻ᵏ forests of k rooted trees on [n].

✏️ Your Turn

(a) How many partitions of [6] have all blocks of even size?
(b) How many permutations of [6] have only cycles of odd length?
(c) Use the recurrence for involutions to compute I₉ and I₁₀.

Answers: (a) The EGF is exp(cosh x − 1); directly, block-size patterns {6}, {4, 2} and {2, 2, 2} give 1 + 15 + 15 = 31. (b) The EGF is exp(∑ over odd k of xᵏ/k) = √((1 + x)/(1 − x)); the count is 225 (the sequence is 1, 1, 1, 3, 9, 45, 225, …). (c) I₉ = 764 + 8·232 = 2620 and I₁₀ = 2620 + 9·764 = 9496.

─────────────────────────────────
Lesson 7: Stirling Numbers and Bell Numbers
─────────────────────────────────

📌 Key idea of this section:

        xⁿ = ∑ₖ S(n, k) (x)ₖ          x⁽ⁿ⁾ = ∑ₖ c(n, k) xᵏ
        Bₙ = ∑ₖ S(n, k) = (1/e) ∑ₘ≥₀ mⁿ/m!

Stirling numbers of the second kind

S(n, k) is the number of partitions of [n] into k nonempty blocks; by convention S(0, 0) = 1 and S(n, 0) = 0 for n ≥ 1. Classifying partitions of [n] according to whether n forms a singleton block gives

        S(n, k) = S(n − 1, k − 1) + k S(n − 1, k),

because otherwise n is inserted into one of the k blocks of a partition of [n − 1]. From Lessons 1 and 3 we also have the explicit formula S(n, k) = (1/k!) ∑ⱼ (−1)ʲ C(k, j)(k − j)ⁿ. Row n = 6 is 1, 31, 90, 65, 15, 1, and row n = 7 is 1, 63, 301, 350, 140, 21, 1. Special values: S(n, 2) = 2ⁿ⁻¹ − 1 and S(n, n − 1) = C(n, 2).

Theorem 7.1. For every n ≥ 0, xⁿ = ∑ₖ S(n, k)(x)ₖ as polynomials.

Proof. For a positive integer x, count functions [n] → [x]. Directly there are xⁿ. Alternatively, classify a function by its image: the kernel partition (the nonempty fibres) has some number k of blocks, which may be chosen in S(n, k) ways, and the blocks are then mapped injectively into [x] in (x)ₖ ways. Both sides are polynomials in x agreeing at infinitely many points, so they are equal. ∎

Stirling numbers of the first kind

The unsigned Stirling number c(n, k) is the number of permutations of [n] with exactly k cycles. Inserting n into a permutation of [n − 1], either as a fixed point or immediately after one of the n − 1 elements in its cycle, gives c(n, k) = c(n − 1, k − 1) + (n − 1)c(n − 1, k). Row n = 5 is 24, 50, 35, 10, 1, summing to 5! = 120.

Theorem 7.2. x⁽ⁿ⁾ = x(x + 1)⋯(x + n − 1) = ∑ₖ c(n, k) xᵏ.

Proof. Both sides equal 1 for n = 0, and multiplying by (x + n − 1) reproduces the recurrence for c(n, k): x⁽ⁿ⁾ = x⁽ⁿ⁻¹⁾(x + n − 1) = ∑ₖ [c(n − 1, k − 1) + (n − 1)c(n − 1, k)] xᵏ. ∎

The signed numbers s(n, k) = (−1)ⁿ⁻ᵏ c(n, k) satisfy (x)ₙ = ∑ₖ s(n, k) xᵏ, obtained by replacing x by −x. Since {xⁿ} and {(x)ₙ} are both bases of ℂ[x], Theorems 7.1 and 7.2 say that the infinite lower-triangular matrices [S(n, k)] and [s(n, k)] are mutually inverse: ∑ₖ S(n, k) s(k, m) = [n = m].

Generating functions

Column generating functions follow from the symbolic method: a partition into k blocks is a set of k nonempty sets, so ∑ₙ S(n, k) xⁿ/n! = (eˣ − 1)ᵏ/k!. Ordinarily, iterating the recurrence gives ∑ₙ S(n, k) xⁿ = xᵏ/((1 − x)(1 − 2x)⋯(1 − kx)). For the first kind, ∑ₙ,ₖ c(n, k) uᵏ xⁿ/n! = (1 − x)⁻ᵘ, which is the exponential formula with each cycle weighted by u.

Bell numbers

The Bell number Bₙ = ∑ₖ S(n, k) counts all partitions of [n]: B₀, …, B₁₀ = 1, 1, 2, 5, 15, 52, 203, 877, 4140, 21147, 115975. Classifying a partition of [n + 1] by the block containing n + 1, which consists of n + 1 together with some k of the other elements, gives Bₙ₊₁ = ∑ₖ C(n, k) Bₙ₋ₖ = ∑ₖ C(n, k) Bₖ. The EGF is exp(eˣ − 1).

Theorem 7.3 (Dobinski, 1877). Bₙ = (1/e) ∑ₘ≥₀ mⁿ/m!.

Proof. Let X be a Poisson random variable of mean 1, so Pr(X = m) = e⁻¹/m!. Its factorial moments are E[(X)ₖ] = ∑ₘ (m)ₖ e⁻¹/m! = e⁻¹ ∑ₘ≥ₖ 1/(m − k)! = 1. Taking expectations in Theorem 7.1 gives E[Xⁿ] = ∑ₖ S(n, k) · 1 = Bₙ, and E[Xⁿ] is the stated series. ∎

So Bₙ is the n-th moment of the Poisson(1) distribution. A further arithmetic property is Touchard's congruence Bₚ₊ₙ ≡ Bₙ + Bₙ₊₁ (mod p) for primes p; for example B₅ = 52 ≡ B₀ + B₁ = 2 (mod 5). Asymptotically, log Bₙ = n(log n − log log n − 1 + o(1)), which grows faster than any exponential but slower than n!.

✏️ Your Turn

(a) Compute S(7, 3) from the explicit formula.
(b) Compute c(5, 2) and check that the row c(5, k) sums to 5!.
(c) Compute B₆ from B₀, …, B₅.

Answers: (a) (3⁷ − 3·2⁷ + 3)/6 = (2187 − 384 + 3)/6 = 301. (b) c(5, 2) = c(4, 1) + 4c(4, 2) = 6 + 4·11 = 50, and 24 + 50 + 35 + 10 + 1 = 120. (c) B₆ = 1·1 + 5·1 + 10·2 + 10·5 + 5·15 + 1·52 = 203.

─────────────────────────────────
Lesson 8: Integer Partitions
─────────────────────────────────

📌 Key idea of this section:

        ∑ₙ p(n) xⁿ = ∏ₖ≥₁ 1/(1 − xᵏ)
        ∏ₖ≥₁ (1 − xᵏ) = ∑ⱼ∈ℤ (−1)ʲ x^(j(3j−1)/2)

Definitions and Ferrers diagrams

A partition of n is a weakly decreasing sequence λ = (λ₁ ≥ λ₂ ≥ ⋯ ≥ λₗ > 0) of positive integers with sum n; we write λ ⊢ n and call l the length. Its Ferrers diagram is the array of left-justified rows of λ₁, λ₂, … cells. Reflecting the diagram in its main diagonal gives the conjugate partition λ′, where λ′ⱼ is the number of parts λᵢ ≥ j. Conjugation is an involution, and it exchanges "the number of parts" with "the largest part." Consequently the number pₖ(n) of partitions of n into exactly k parts equals the number of partitions of n with largest part k, and the number of partitions with at most k parts equals the number with all parts at most k. Removing the first column of the diagram of a partition with exactly k parts shows pₖ(n) = p_{≤k}(n − k), the number of partitions of n − k into at most k parts.

Generating functions

Choosing independently how many parts of each size k to use gives Euler's product ∑ p(n)xⁿ = ∏ₖ (1 − xᵏ)⁻¹; the product converges formally because only finitely many factors affect each coefficient. Restricting part sizes or multiplicities modifies the factors: partitions into parts at most k have generating function ∏ⱼ₌₁ᵏ (1 − xʲ)⁻¹, and partitions into distinct parts have ∏ₖ (1 + xᵏ). The first values of p(n) for n = 0, …, 20 are

        1, 1, 2, 3, 5, 7, 11, 15, 22, 30, 42, 56, 77, 101, 135, 176, 231, 297, 385, 490, 627,

and p(100) = 190,569,292. For at most three parts, partial fractions give the closed form p_{≤3}(n) = the integer nearest to (n + 3)²/12; for instance p_{≤3}(12) = 19.

Theorem 8.1 (Euler, 1748). The number of partitions of n into distinct parts equals the number of partitions of n into odd parts.

Proof. As formal power series, ∏ₖ (1 + xᵏ) = ∏ₖ (1 − x²ᵏ)/(1 − xᵏ). The numerator cancels every factor with an even exponent in the denominator, leaving ∏ over odd k of (1 − xᵏ)⁻¹. ∎ A bijective proof was given by Glaisher (1883): write each odd part's multiplicity in binary and merge equal parts, so that m copies of the odd part a, with m = 2^e₁ + 2^e₂ + ⋯ (distinct eᵢ), become the distinct parts a·2^e₁, a·2^e₂, …; uniqueness of the factorization of an integer as odd times a power of 2 makes this invertible. For n = 10 both counts equal 10.

Euler's pentagonal number theorem

The numbers j(3j − 1)/2 for j ∈ ℤ are the generalized pentagonal numbers 0, 1, 2, 5, 7, 12, 15, 22, 26, 35, 40, …, obtained alternately from j = 1, −1, 2, −2, …

Theorem 8.2 (Euler). ∏ₖ≥₁ (1 − xᵏ) = 1 + ∑ⱼ≥₁ (−1)ʲ [x^(j(3j−1)/2) + x^(j(3j+1)/2)] = 1 − x − x² + x⁵ + x⁷ − x¹² − x¹⁵ + ⋯

Proof (Franklin, 1881). The coefficient of xⁿ on the left is E(n) − O(n), where E(n) and O(n) count partitions of n into an even and an odd number of distinct parts. We build a sign-reversing involution on most of these partitions. For a partition λ into distinct parts, let s be its smallest part and let t be the length of its "slope," the maximal run λ₁, λ₁ − 1, …, λ₁ − t + 1 of consecutive integers starting with the largest part. If s ≤ t, remove the smallest part and add 1 to each of the s largest parts; if s > t, subtract 1 from each of the t largest parts and append a new smallest part equal to t. Each move changes the number of parts by one and is inverse to the other, except when it is not defined: this happens precisely when the slope contains the smallest part and either s = t (then λ = (2j − 1, …, j), with n = j(3j − 1)/2) or s = t + 1 (then λ = (2j, …, j + 1), with n = j(3j + 1)/2), in each case with j parts. So E(n) − O(n) = 0 unless n is a generalized pentagonal number, in which case it is (−1)ʲ. ∎

Corollary 8.3. Multiplying Theorem 8.2 by ∑ p(n)xⁿ gives 1, so for n ≥ 1

        p(n) = p(n − 1) + p(n − 2) − p(n − 5) − p(n − 7) + p(n − 12) + p(n − 15) − ⋯,

with p(m) = 0 for m < 0 and signs following the pattern + + − − + + − − ⋯. Since there are about √(8n/3) nonzero terms, this computes p(1), …, p(N) in O(N^(3/2)) operations; MacMahon used it to tabulate p(n) for n ≤ 200, the table that Hardy and Ramanujan used to test their formula. For example, p(12) = p(11) + p(10) − p(7) − p(5) + p(0) = 56 + 42 − 15 − 7 + 1 = 77.

Asymptotics and arithmetic

Hardy and Ramanujan (1918) proved p(n) ~ e^(π√(2n/3))/(4n√3), using the modularity of Dedekind's eta function η(τ) = q^(1/24) ∏(1 − qⁿ) and what became the circle method. Rademacher (1937) refined their series into a convergent exact formula. At n = 100 the leading term is about 1.993 × 10⁸, against the true value 1.906 × 10⁸, a relative error of about 4.6%. Ramanujan discovered the congruences p(5n + 4) ≡ 0 (mod 5), p(7n + 5) ≡ 0 (mod 7), and p(11n + 6) ≡ 0 (mod 11); for example p(4) = 5, p(5) = 7 and p(6) = 11, and p(17) = 297 = 27 · 11. Dyson's rank (1944) and the crank of Andrews and Garvan (1988) explain these combinatorially, and Ono (2000) showed that for every prime m ≥ 5 there are infinitely many congruences of the form p(An + B) ≡ 0 (mod m).

Gaussian binomial coefficients

The generating function, by size, of the partitions whose Ferrers diagram fits in a k × (n − k) box is the Gaussian binomial coefficient [n choose k]_q = (1 − qⁿ)(1 − qⁿ⁻¹)⋯(1 − qⁿ⁻ᵏ⁺¹)/((1 − q)(1 − q²)⋯(1 − qᵏ)). It is a polynomial in q that reduces to C(n, k) at q = 1, and when q is a prime power it counts the k-dimensional subspaces of 𝔽_qⁿ.

✏️ Your Turn

(a) Use the pentagonal recurrence to compute p(15) from the table.
(b) How many partitions of 9 into distinct parts are there?
(c) How many partitions of 10 have largest part exactly 3?

Answers: (a) p(15) = p(14) + p(13) − p(10) − p(8) + p(3) + p(0) = 135 + 101 − 42 − 22 + 3 + 1 = 176. (b) 8: 9, 8+1, 7+2, 6+3, 5+4, 6+2+1, 5+3+1, 4+3+2. (c) By conjugation this equals p₃(10) = 8.

─────────────────────────────────
Lesson 9: Catalan Numbers and Lattice Paths
─────────────────────────────────

📌 Key idea of this section:

        Cₙ = C(2n, n)/(n + 1) = C(2n, n) − C(2n, n + 1)
        C(x) = 1 + x C(x)²,   C(x) = (1 − √(1 − 4x))/(2x)

Dyck paths and the reflection principle

A Dyck path of semilength n is a lattice path from (0, 0) to (2n, 0) with steps U = (1, 1) and D = (1, −1) that never goes below the x-axis. Let Cₙ be the number of them.

Theorem 9.1. Cₙ = C(2n, n) − C(2n, n + 1) = C(2n, n)/(n + 1).

Proof (André's reflection principle, 1887). There are C(2n, n) paths with n up-steps and n down-steps. A bad path touches the line y = −1; reflect the part of the path after its first such touch in that line. This produces a path from (0, 0) to (2n, −2), that is, one with n − 1 up-steps and n + 1 down-steps; conversely every such path must cross y = −1 and reflecting after its first touch recovers a bad path. So there are C(2n, n + 1) bad paths, and C(2n, n) − C(2n, n + 1) = C(2n, n)[1 − n/(n + 1)] = C(2n, n)/(n + 1). ∎

The same argument shows that the number of lattice paths from (0, 0) to (a, b), with unit east and north steps and a ≥ b, that never rise above the line y = x is C(a + b, b) − C(a + b, b − 1) = ((a − b + 1)/(a + 1)) C(a + b, b).

The recursive decomposition

A nonempty Dyck path decomposes uniquely by its first return to the axis as U P D Q, where P and Q are Dyck paths, of semilengths k and n − 1 − k. Hence C₀ = 1 and Cₙ = ∑ₖ CₖCₙ₋₁₋ₖ, so the OGF satisfies C(x) = 1 + xC(x)². Solving the quadratic and choosing the root that is a power series gives C(x) = (1 − √(1 − 4x))/(2x). Expanding √(1 − 4x) by the binomial series recovers Theorem 9.1 independently, since [xⁿ⁺¹] √(1 − 4x) = C(1/2, n + 1)(−4)ⁿ⁺¹ = −2Cₙ.

The values are C₀, …, C₁₂ = 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012. From Stirling's formula, Cₙ ~ 4ⁿ/(n^(3/2)√π); the factor n^(−3/2) is the fingerprint of the square-root singularity of C(x) at x = 1/4.

A family of interpretations

Each of the following is counted by Cₙ, by a bijection with Dyck paths or by the same recursive decomposition: binary trees with n internal nodes; plane (ordered) trees with n + 1 vertices; full parenthesizations of a product of n + 1 factors; triangulations of a convex (n + 2)-gon (fix a side; the triangle on it splits the polygon in two); noncrossing partitions of [n]; permutations of [n] avoiding any fixed pattern of length 3 (Knuth for 231, Simion–Schmidt in general); and standard Young tableaux of shape (n, n). Stanley's monograph Catalan Numbers (2015) lists 214 such families.

The last of these is an instance of the hook length formula of Frame, Robinson and Thrall (1954): the number of standard Young tableaux of shape λ ⊢ n is n!/∏ h(c), the product over cells c of the hook length h(c), which is the number of cells to the right of c in its row, below c in its column, and c itself. For λ = (n, n) the hooks in the first row are n + 1, n, …, 2 and in the second row n, n − 1, …, 1, giving (2n)!/((n + 1)! n!) = Cₙ.

The ballot problem and the cycle lemma

Theorem 9.2 (Bertrand's ballot theorem, 1887). If candidate A receives a votes and candidate B receives b < a votes, and the ballots are counted in uniformly random order, the probability that A is strictly ahead throughout the count is (a − b)/(a + b).

Proof (cycle lemma of Dvoretzky and Motzkin, 1947). Write each ballot sequence as a word in +1 (for A) and −1 (for B) with sum a − b = m > 0. Among the a + b cyclic rotations of any such word, exactly m have all partial sums positive. Indeed, cancel adjacent pairs (+1, −1), cyclically, until only m copies of +1 remain; a rotation has positive partial sums exactly when it starts at one of the original positions of those m surviving +1's. Since rotation partitions the a + b positions into classes in which the fraction of good starting points is m/(a + b), the probability is (a − b)/(a + b). ∎

Applying the cycle lemma to words with n + 1 copies of +1 and n copies of −1 gives a third proof of Cₙ = C(2n + 1, n)/(2n + 1), which equals C(2n, n)/(n + 1).

✏️ Your Turn

(a) Compute C₇ from the formula.
(b) How many east–north lattice paths from (0, 0) to (6, 4) never rise above y = x?
(c) In an election A receives 9 votes and B receives 6. What is the probability that A is strictly ahead throughout the count?

Answers: (a) C(14, 7)/8 = 3432/8 = 429. (b) (3/7) · C(10, 4) = (3/7) · 210 = 90. (c) (9 − 6)/15 = 1/5.

─────────────────────────────────
Lesson 10: Burnside's Lemma and Pólya Enumeration
─────────────────────────────────

📌 Key idea of this section:

        number of orbits = (1/|G|) ∑ over g ∈ G of |Fix(g)|
        colourings of X with k colours: |Fix(g)| = k^(c(g)),  c(g) = number of cycles of g on X

Group actions

A group G acts on a finite set X if each g ∈ G gives a permutation x ↦ gx with ex = x and g(hx) = (gh)x. The orbit of x is Gx = {gx : g ∈ G}, its stabilizer is Gₓ = {g : gx = x}, and the orbit–stabilizer theorem states |Gx| · |Gₓ| = |G|, because gx = hx if and only if h⁻¹g ∈ Gₓ, so the points of the orbit correspond to cosets of Gₓ. Counting objects "up to symmetry" means counting orbits.

Theorem 10.1 (Cauchy–Frobenius–Burnside). The number of orbits is (1/|G|) ∑ over g of |Fix(g)|, where Fix(g) = {x : gx = x}.

Proof. Count pairs (g, x) with gx = x. Summing over g gives ∑ |Fix(g)|. Summing over x gives ∑ₓ |Gₓ| = ∑ₓ |G|/|Gx|, and each orbit O contributes ∑ over x ∈ O of |G|/|O| = |G|. ∎ The lemma is often attributed to Burnside (1897), but it appears in Frobenius (1887) and in essence in Cauchy (1845).

Colourings

Let G act on a set X of positions (beads, faces, vertices), and let it act on the colourings c : X → [k] by (gc)(x) = c(g⁻¹x). A colouring is fixed by g if and only if it is constant on every cycle of g acting on X, so |Fix(g)| = k^(c(g)), where c(g) is the number of cycles of g.

Theorem 10.2 (Necklaces). The number of k-colourings of n beads on a circle, up to rotation, is N(n, k) = (1/n) ∑ over d | n of φ(d) k^(n/d).

Proof. The rotation by j positions decomposes the n beads into gcd(j, n) cycles, each of length n/gcd(j, n). For each divisor e of n, exactly φ(n/e) values of j in {0, …, n − 1} have gcd(j, n) = e. Apply Burnside and substitute d = n/e. ∎

Under the full dihedral group of order 2n (bracelets, which may also be turned over), one adds the reflections. For odd n each of the n reflections fixes one bead and pairs the rest, contributing n k^((n+1)/2); for even n, n/2 reflections pass through two beads and n/2 through no beads, contributing (n/2)(k^(n/2 + 1) + k^(n/2)). Dividing the total by 2n gives the number of bracelets. For example N(6, 2) = (2⁶ + 2³ + 2·2² + 2·2)/6 = 84/6 = 14 binary necklaces of length 6, and 13 binary bracelets.

The cube

The rotation group of the cube has order 24 and acts on the six faces with cycle types as follows: the identity (1 element, 6 cycles); rotations by ±90° about face axes (6 elements, 3 cycles each); rotations by 180° about face axes (3 elements, 4 cycles); rotations by ±120° about vertex diagonals (8 elements, 2 cycles); and rotations by 180° about axes through midpoints of opposite edges (6 elements, 3 cycles). Hence the number of face colourings with k colours is

        (k⁶ + 3k⁴ + 12k³ + 8k²)/24,

which is 10 for k = 2, 57 for k = 3 and 240 for k = 4. On the eight vertices the same classes have 8, 2, 4, 4 and 4 cycles respectively, giving (k⁸ + 17k⁴ + 6k²)/24, which is 23 for k = 2.

The cycle index and Pólya's theorem

To count colourings with a prescribed number of each colour, record the cycle structure. If g has jᵢ(g) cycles of length i, the cycle index of the action is the polynomial Z(G; s₁, s₂, …) = (1/|G|) ∑ over g of s₁^(j₁(g)) s₂^(j₂(g)) ⋯.

Theorem 10.3 (Redfield 1927, Pólya 1937). Give each colour r a weight wᵣ. The sum over orbits of colourings of the product of the weights of the colours used is Z(G; s₁, s₂, …) with sᵢ replaced by w₁ⁱ + w₂ⁱ + ⋯ + wₖⁱ.

Proof. Apply Burnside's lemma separately to the set of colourings with each fixed weight, which is G-invariant. A colouring fixed by g is constant on cycles, and a cycle of length i coloured r contributes wᵣⁱ; summing over the colour of each cycle gives ∏ᵢ (w₁ⁱ + ⋯ + wₖⁱ)^(jᵢ(g)). ∎

Example 10.4 (graphs on four vertices). Isomorphism classes of graphs on 4 vertices are the orbits of S₄ acting on 2-colourings (edge or non-edge) of the 6 pairs. The cycle types of S₄ on pairs are: identity, s₁⁶; the 6 transpositions and the 3 double transpositions, s₁²s₂²; the 8 three-cycles, s₃²; and the 6 four-cycles, s₂s₄. Thus

        Z = (s₁⁶ + 9 s₁²s₂² + 8 s₃² + 6 s₂s₄)/24.

Setting every sᵢ = 2 gives (64 + 144 + 32 + 24)/24 = 11 graphs. Setting sᵢ = 1 + yⁱ and extracting the coefficient of y³ gives (20 + 9·4 + 8·2 + 0)/24 = 3 graphs with three edges: the triangle with an isolated vertex, the path P₄, and the star K₁,₃.

✏️ Your Turn

(a) How many binary necklaces of length 8 are there up to rotation?
(b) How many necklaces of 6 beads with exactly 2 black and 4 white beads are there up to rotation?
(c) How many ways are there to colour the faces of a cube with 2 colours, up to rotation?

Answers: (a) (2⁸ + 2⁴ + 2·2² + 4·2)/8 = 288/8 = 36. (b) Only the identity (15 colourings) and the half-turn (3 colourings, with the black beads opposite) fix any, so (15 + 3)/6 = 3. (c) (64 + 48 + 96 + 32)/24 = 10.

─────────────────────────────────
Lesson 11: The Pigeonhole Principle and Ramsey Theory
─────────────────────────────────

📌 Key idea of this section:

        R(3, 3) = 6,   R(s, t) ≤ R(s − 1, t) + R(s, t − 1) ≤ C(s + t − 2, s − 1)
        "Complete disorder is impossible." — T. S. Motzkin

Pigeonhole

If n objects are placed in k boxes, some box contains at least ⌈n/k⌉ objects. This trivial statement has nontrivial consequences.

Theorem 11.1 (Erdős–Szekeres, 1935). Every sequence of rs + 1 distinct real numbers contains an increasing subsequence of length r + 1 or a decreasing subsequence of length s + 1. The bound is sharp.

Proof. Label the i-th term by the pair (aᵢ, dᵢ), the lengths of the longest increasing and decreasing subsequences ending at it. For i < j, if the j-th term is larger than the i-th, then aⱼ > aᵢ; otherwise dⱼ > dᵢ; so the labels are distinct. If every aᵢ ≤ r and dᵢ ≤ s, there are at most rs labels for rs + 1 terms, a contradiction. For sharpness, concatenate s increasing blocks of length r, each block lying entirely below the previous one. ∎

Theorem 11.2 (Dirichlet, 1842). For every real α and integer N ≥ 1 there are integers p and q with 1 ≤ q ≤ N and |qα − p| < 1/N.

Proof. The N + 1 numbers {0·α}, {1·α}, …, {N·α} (fractional parts) lie in [0, 1), which is the union of N intervals of length 1/N. Two of them, say {iα} and {jα} with i < j, lie in the same interval; take q = j − i and p the difference of the integer parts. ∎

Ramsey numbers

The Ramsey number R(s, t) is the least n such that every red–blue colouring of the edges of Kₙ contains a red Kₛ or a blue Kₜ. Ramsey (1930) proved that such n exists in a lemma on decidability in logic; Erdős and Szekeres rediscovered it in 1935.

Theorem 11.3. R(3, 3) = 6.

Proof. Colour the edges of K₆ and fix a vertex v. Of its five edges, at least three have the same colour, say red, to vertices a, b, c. If any edge among a, b, c is red, it forms a red triangle with v; otherwise a, b, c form a blue triangle. So R(3, 3) ≤ 6. For the lower bound, colour the edges of a pentagon (the 5-cycle) red and its diagonals blue; the red graph C₅ and the blue graph (again a C₅) contain no triangle. ∎

Theorem 11.4 (Erdős–Szekeres). For s, t ≥ 2, R(s, t) ≤ R(s − 1, t) + R(s, t − 1). If both terms on the right are even, the inequality is strict. Consequently R(s, t) ≤ C(s + t − 2, s − 1).

Proof. Let n = R(s − 1, t) + R(s, t − 1) and colour Kₙ. A vertex v has n − 1 neighbours, so either at least R(s − 1, t) of them are joined to v by red edges or at least R(s, t − 1) by blue edges. In the first case, the red neighbourhood contains a blue Kₜ (done) or a red Kₛ₋₁, which together with v forms a red Kₛ. The second case is symmetric. If both numbers are even and n − 1 is odd, a colouring with no red Kₛ and no blue Kₜ on n − 1 vertices would need every vertex to have red degree exactly R(s − 1, t) − 1, which is odd; but then the red graph would have an odd number of vertices of odd degree, contradicting the handshake lemma. The binomial bound follows by induction from R(2, t) = t and Pascal's rule. ∎

Thus R(3, 4) ≤ R(2, 4) + R(3, 3) − 1 = 4 + 6 − 1 = 9, and in fact R(3, 4) = 9. Known exact values include R(3, 5) = 14, R(4, 4) = 18 (Greenwood and Gleason, 1955, using the Paley graph on 17 vertices, whose edges join residues mod 17 differing by a quadratic residue) and R(4, 5) = 25 (McKay and Radziszowski, 1995). For R(5, 5) only 43 ≤ R(5, 5) ≤ 46 is known, the upper bound due to Angeltveit and McKay (2024). Erdős famously remarked that if aliens demanded the value of R(5, 5) we should marshal all our computers to find it, but if they asked for R(6, 6) we should try to destroy them.

Multicolour Ramsey numbers

The same argument shows that R(3, 3, 3), the least n such that every 3-colouring of Kₙ has a monochromatic triangle, satisfies R(3, 3, 3) ≤ 3(R(3, 3) − 1) + 2 = 17: a vertex of K₁₇ has 16 edges, so six of them have one colour, and the six neighbours span a monochromatic triangle in that colour or a 2-coloured K₆. Greenwood and Gleason showed R(3, 3, 3) = 17. This is closely tied to Schur's theorem (1916): for every r there is N such that any r-colouring of [N] contains x, y, z of one colour with x + y = z; colour the edge {i, j} of K_{N+1} by the colour of |i − j| and look for a monochromatic triangle.

Asymptotics of diagonal Ramsey numbers

Theorem 11.4 gives R(k, k) ≤ C(2k − 2, k − 1) < 4ᵏ, and Erdős's probabilistic argument (Lesson 13) gives R(k, k) > 2^(k/2). For more than seventy-five years the exponential bases √2 and 4 were not improved, apart from lower-order factors. In 2023 Campos, Griffiths, Morris and Sahasrabudhe proved R(k, k) ≤ (4 − ε)ᵏ for some fixed ε > 0, the first exponential improvement of the upper bound. The lower bound has seen only a constant-factor improvement since 1947 (Spencer, via the local lemma). The infinite Ramsey theorem — every 2-colouring of the pairs of ℕ has an infinite monochromatic set — follows by a compactness or a direct greedy argument, and its finite form, through the Paris–Harrington variant, gives a true statement of arithmetic unprovable in Peano arithmetic.

✏️ Your Turn

(a) Show that every 2-colouring of K₆ contains at least two monochromatic triangles.
(b) What is the least N such that every sequence of N distinct reals has a monotone subsequence of length 5?
(c) Bound R(3, 5) using Theorem 11.4.

Answers: (a) Call a pair of edges at a common vertex bichromatic if they differ in colour. A vertex with r red and 5 − r blue edges is the apex of r(5 − r) ≤ 6 bichromatic pairs, so there are at most 36 in total. Each non-monochromatic triangle contains exactly two bichromatic pairs and each monochromatic triangle none, so at most 18 of the C(6, 3) = 20 triangles are non-monochromatic, and at least 2 are monochromatic. (Goodman, 1959, determined the minimum for every n.) (b) N = 4·4 + 1 = 17. (c) R(3, 5) ≤ R(2, 5) + R(3, 4) = 5 + 9 = 14, which is the exact value.

─────────────────────────────────
Lesson 12: Graph Theory Essentials
─────────────────────────────────

📌 Key idea of this section:

        Euler circuit ⟺ connected and every degree even
        Matching saturating X ⟺ |N(S)| ≥ |S| for all S ⊆ X   (Hall)
        Labelled trees on [n]: nⁿ⁻²   (Cayley)

Degrees and Euler's theorem

A graph G = (V, E) has ∑ᵥ deg(v) = 2|E| (the handshake lemma), since each edge contributes to two degrees; hence the number of odd-degree vertices is even. An Euler circuit is a closed walk using every edge exactly once.

Theorem 12.1 (Euler 1736, Hierholzer 1873). A connected multigraph has an Euler circuit if and only if every vertex has even degree. It has an Euler trail (not closed) if and only if exactly two vertices have odd degree.

Proof. Necessity: each passage of a circuit through v uses two edges at v. Sufficiency, by induction on |E|: since every degree is even and positive (when E ≠ ∅), G has no vertex of degree 1, so walking without repeating edges from any vertex must eventually return to it, giving a closed trail T. Deleting the edges of T leaves a graph whose degrees are still even; each of its components meets T (by connectivity) and has, by induction, an Euler circuit, which can be spliced into T at a common vertex. For the trail version, add an edge between the two odd vertices. ∎

In 1736 Euler applied this to the seven bridges of Königsberg. The four land masses have degrees 5, 3, 3, 3, so there is no walk crossing each bridge once. More generally, a connected graph with 2k odd vertices (k ≥ 1) can be covered by k edge-disjoint trails, and not fewer.

Hall's marriage theorem

Theorem 12.2 (Hall, 1935). Let G be a bipartite graph with parts X and Y. There is a matching covering every vertex of X if and only if |N(S)| ≥ |S| for every S ⊆ X, where N(S) is the set of neighbours of S.

Proof (Halmos–Vaughan). Necessity is clear. For sufficiency, induct on |X|; the case |X| = 1 is trivial. Case 1: |N(S)| ≥ |S| + 1 for every nonempty proper S ⊂ X. Match any x ∈ X to any neighbour y, and delete both; every nonempty S ⊆ X − x loses at most one neighbour, so Hall's condition still holds, and induction completes the matching. Case 2: some nonempty proper S₀ has |N(S₀)| = |S₀|. By induction S₀ can be matched into N(S₀). In the graph on (X − S₀) ∪ (Y − N(S₀)), any T ⊆ X − S₀ satisfies |N(T) − N(S₀)| = |N(T ∪ S₀)| − |N(S₀)| ≥ |T| + |S₀| − |S₀| = |T|, so by induction X − S₀ can be matched into Y − N(S₀). The two matchings together cover X. ∎

Corollary 12.3. Every k-regular bipartite graph with k ≥ 1 has a perfect matching, and its edge set is a disjoint union of k perfect matchings.

Proof. Counting edges, k|S| ≤ k|N(S)| for every S ⊆ X, since the k|S| edges leaving S all end in N(S), where at most k|N(S)| edges arrive. Also |X| = |Y|. Remove a perfect matching to obtain a (k − 1)-regular bipartite graph and repeat. ∎

Equivalently, by Birkhoff and von Neumann, every doubly stochastic matrix is a convex combination of permutation matrices. Hall's theorem is also equivalent to König's theorem (1931): in a bipartite graph the maximum size of a matching equals the minimum size of a vertex cover. Both are special cases of the max-flow min-cut theorem and of linear programming duality for totally unimodular systems, and in turn imply Dilworth's theorem that a finite poset can be partitioned into as many chains as the maximum size of an antichain.

Trees and Cayley's formula

A tree is a connected acyclic graph; a tree on n vertices has n − 1 edges and a unique path between any two vertices.

Theorem 12.4 (Cayley). There are nⁿ⁻² trees on the vertex set [n]. More precisely, the number with deg(i) = dᵢ for all i, where ∑ dᵢ = 2n − 2 and every dᵢ ≥ 1, is the multinomial coefficient (n − 2)!/∏ᵢ (dᵢ − 1)!.

Proof (Prüfer, 1918). Given a tree on [n] with n ≥ 2, repeatedly delete the leaf with the smallest label and record its unique neighbour, until two vertices remain. The resulting Prüfer code is a word of length n − 2 over [n], in which vertex i appears exactly deg(i) − 1 times (it is recorded once each time a neighbour is deleted, except for the last edge, which either deletes i itself or survives at the end). The tree is recovered from the code: at step j, the deleted leaf is the smallest label that does not occur in the remaining code and has not yet been deleted, and it is joined to the j-th code letter; finally the two unused labels are joined. Hence the map is a bijection between labelled trees and [n]ⁿ⁻², and words with prescribed letter counts dᵢ − 1 are counted by the multinomial coefficient. ∎

For example, the tree on [6] with edges 12, 13, 34, 35, 56 has leaves 2, 4, 6. Deleting 2 records 1; then 1 is a leaf and deleting it records 3; deleting 4 records 3; deleting 3 records 5. The code is (1, 3, 3, 5), and indeed deg 1 = 2, deg 3 = 3 and deg 5 = 2.

The matrix-tree theorem

Theorem 12.5 (Kirchhoff, 1847). The number of spanning trees of a connected graph G equals any cofactor of its Laplacian L = D − A, where D is the diagonal matrix of degrees and A the adjacency matrix; equivalently, (1/n) times the product of the nonzero eigenvalues of L.

For Kₙ the Laplacian nI − J has eigenvalue n with multiplicity n − 1, giving nⁿ⁻¹/n = nⁿ⁻², another proof of Cayley's formula. For the complete bipartite graph K_{m,n} the theorem gives m^(n−1) n^(m−1).

✏️ Your Turn

(a) How many trees on [6] have vertex 1 of degree exactly 3?
(b) Reconstruct the tree on [5] with Prüfer code (4, 4, 2).
(c) How many spanning trees does K₄ have, and how many does K₂,₃ have?

Answers: (a) Vertex 1 must appear exactly twice in a code of length 4, with the other two letters from the remaining 5 labels: C(4, 2) · 5² = 150. (b) The leaf 1 is joined to 4, then 3 to 4, then 4 to 2; the remaining labels 2 and 5 are joined. Edges: 14, 34, 24, 25. (c) 4² = 16, and 2² · 3¹ = 12.

─────────────────────────────────
Lesson 13: The Probabilistic Method
─────────────────────────────────

📌 Key idea of this section:

        If Pr(a random object has property P) > 0, an object with property P exists.
        Some value of a random variable is at least its expectation.

Erdős's lower bound for Ramsey numbers

Theorem 13.1 (Erdős, 1947). If C(n, k) 2^(1 − C(k, 2)) < 1, then R(k, k) > n. In particular R(k, k) > ⌊2^(k/2)⌋ for every k ≥ 3.

Proof. Colour each edge of Kₙ red or blue independently with probability 1/2. A fixed set of k vertices is monochromatic with probability 2 · 2^(−C(k,2)). By the union bound, the probability that some k-set is monochromatic is at most C(n, k) 2^(1 − C(k,2)) < 1, so some colouring has no monochromatic Kₖ. For n = ⌊2^(k/2)⌋, use C(n, k) < nᵏ/k! ≤ 2^(k²/2)/k!, so the bound is less than 2^(k²/2) · 2^(1 − k²/2 + k/2)/k! = 2^(1 + k/2)/k!, which is less than 1 for k ≥ 3 (it equals 2^(2.5)/6 ≈ 0.94 at k = 3, and each increase of k multiplies it by √2/(k + 1) < 1). ∎

The remarkable feature is that no explicit construction is known achieving R(k, k) > (1 + ε)ᵏ for any ε > 0. Finding one is a central open problem (Erdős offered $100), and explicit "Ramsey graphs" are closely related to randomness extractors in theoretical computer science.

Linearity of expectation

Expectation is linear even for dependent random variables, which makes it the method's most powerful tool.

Theorem 13.2. Every graph with m edges has a bipartite subgraph with at least m/2 edges.

Proof. Put each vertex independently on side A or B with probability 1/2. Each edge crosses with probability 1/2, so the expected number of crossing edges is m/2, and some partition achieves at least that. ∎

Theorem 13.3 (Szele, 1943). There is a tournament on n vertices with at least n!/2ⁿ⁻¹ Hamiltonian paths.

Proof. Orient each edge of Kₙ randomly. Each of the n! orderings of the vertices is a directed path with probability 2^(−(n−1)), so the expected number of Hamiltonian paths is n!/2ⁿ⁻¹. ∎

Theorem 13.4 (Caro 1979, Wei 1981). Every graph G has an independent set of size at least ∑ᵥ 1/(deg(v) + 1).

Proof. Order the vertices uniformly at random, and let I be the set of vertices that precede all of their neighbours. I is independent, and v ∈ I with probability 1/(deg(v) + 1), since each of the deg(v) + 1 vertices of the closed neighbourhood is equally likely to come first. Take expectations. ∎ Applied to the complement, this implies Turán's theorem: a graph on n vertices with no Kᵣ₊₁ has at most (1 − 1/r)n²/2 edges.

The alteration method

Sometimes a random object is nearly good and can be repaired. For any n, colour Kₙ randomly as above and delete one vertex from each monochromatic k-set. The expected number deleted is C(n, k) 2^(1 − C(k,2)), so R(k, k) > n − C(n, k) 2^(1 − C(k,2)) for every n. Optimizing n improves Erdős's bound by a factor of about √2.

Property B

A hypergraph is 2-colourable (has property B) if its vertices can be coloured red and blue with no monochromatic edge. Erdős (1963) showed that every k-uniform hypergraph with fewer than 2^(k−1) edges is 2-colourable: in a random colouring each edge is monochromatic with probability 2^(1−k), so the expected number of monochromatic edges is less than 1. The least number m(k) of edges in a non-2-colourable k-uniform hypergraph satisfies m(2) = 3 (a triangle) and m(3) = 7 (the Fano plane).

The Lovász local lemma

Union bounds waste information when bad events are rare and mostly independent. The local lemma exploits this.

Theorem 13.5 (Erdős–Lovász, 1975, symmetric form). Let A₁, …, Aₙ be events, each with Pr(Aᵢ) ≤ p, such that each Aᵢ is mutually independent of all but at most d of the others. If e p (d + 1) ≤ 1, then Pr(no Aᵢ occurs) > 0.

Applied to the monochromatic k-sets of a random colouring, the local lemma gives Spencer's bound R(k, k) > (√2/e)(1 + o(1)) k 2^(k/2), still the best known lower bound up to the constant factor. Applied to k-SAT, it shows that a formula in which every clause has exactly k literals and shares variables with at most 2ᵏ/e − 1 other clauses is satisfiable. Moser and Tardos (2010) made the lemma algorithmic: resampling the variables of violated events terminates quickly in expectation, so the objects it promises can actually be found.

✏️ Your Turn

(a) In a uniformly random 2-colouring of the edges of K₁₀, what is the expected number of monochromatic K₄'s?
(b) Use the Caro–Wei bound to find a lower bound for the independence number of the 5-cycle C₅.
(c) Show that some tournament on 6 vertices has at least 23 Hamiltonian paths.

Answers: (a) C(10, 4) · 2^(1−6) = 210/32 = 105/16 = 6.5625. (b) ∑ 1/3 over five vertices gives 5/3, so α(C₅) ≥ 2, which is the true value. (c) The expectation is 6!/2⁵ = 720/32 = 22.5, so some tournament has at least 22.5 and hence, being an integer count, at least 23.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems below are grouped by difficulty. The Core problems check the basic techniques of each lesson; the Advanced problems require combining methods or writing a complete proof; the Challenge problems are of the kind found in graduate qualifying examinations. Full worked solutions are given in the Answer Key.

Core (Problems 1–20)

  1. How many solutions does x₁ + x₂ + x₃ + x₄ = 20 have in nonnegative integers?
  2. How many solutions does x₁ + x₂ + x₃ + x₄ = 20 have with every xᵢ ≥ 2?
  3. How many compositions of 12 into exactly 5 positive parts are there?
  4. How many surjections are there from [7] onto [3]?
  5. Compute D₇, and compare D₇/7! with 1/e.
  6. How many integers in [1, 1000] are divisible by none of 2, 3 and 5?
  7. Solve aₙ = 5aₙ₋₁ − 6aₙ₋₂ with a₀ = 1, a₁ = 4.
  8. Find the coefficient of x⁵ in (1 − 2x)⁻³.
  9. Compute S(6, 3) both from the recurrence and from the explicit formula.
  10. Compute B₅ using the recurrence Bₙ₊₁ = ∑ₖ C(n, k)Bₖ.
  11. Find p(10), and the number of partitions of 10 into distinct parts.
  12. How many triangulations does a convex octagon have?
  13. How many binary necklaces of length 6 are there up to rotation?
  14. In how many ways can the faces of a cube be coloured with 3 colours, up to rotation?
  15. Prove that among any n + 1 integers chosen from [2n], two are coprime, and two are such that one divides the other.
  16. How many spanning trees does K₅ have?
  17. For which n does Kₙ have an Euler circuit?
  18. Evaluate ∑ₖ C(8, k)² by a combinatorial argument.
  19. Candidate A receives 7 votes and B receives 4. What is the probability that A is strictly ahead throughout a random count?
  20. In how many ways can 10 distinct books be given to 4 people so that each person gets at least one?

Advanced (Problems 21–45)

  21. Solve aₙ = 4aₙ₋₁ − 4aₙ₋₂ with a₀ = 1, a₁ = 6, and verify a₃.
  22. Solve aₙ = 2aₙ₋₁ + 3ⁿ with a₀ = 1 using generating functions.
  23. Using generating functions, count the ways to make 50 cents from coins of 1, 5, 10 and 25 cents.
  24. Prove that for n ≥ 1, Dₙ is the integer nearest to n!/e.
  25. Count the involutions of [7].
  26. Count the partitions of [6] with no singleton block, and give the exponential generating function.
  27. Prove xⁿ = ∑ₖ S(n, k)(x)ₖ, and check it for n = 4 and x = 3.
  28. An ordered set partition is a set partition with a linear order on its blocks. Count the ordered set partitions of [4], and find their EGF.
  29. Use Euler's pentagonal recurrence to compute p(12) from p(0), …, p(11).
  30. Find the number of partitions of 12 into at most 3 parts.
  31. A partition is self-conjugate if λ = λ′. Prove that self-conjugate partitions of n are equinumerous with partitions of n into distinct odd parts, and count those of 12.
  32. How many Dyck paths of semilength 5 touch the x-axis only at their endpoints?
  33. How many east–north lattice paths from (0, 0) to (8, 5) never rise above the line y = x?
  34. Count the 3-colour necklaces of length 7 up to rotation, and up to rotation and reflection.
  35. Find a formula for the number of k-colourings of the vertices of a square up to the dihedral group of order 8, and evaluate it at k = 3.
  36. Using the cycle index of Example 10.4, count the graphs on 4 vertices with exactly 2 edges, up to isomorphism.
  37. In how many ways can the vertices of a cube be coloured with 2 colours, up to rotation?
  38. What is the minimal length N such that every sequence of N distinct reals has a monotone subsequence of length 6? Give an extremal example of length N − 1.
  39. Prove R(3, 4) ≤ 9.
  40. Prove R(3, 3, 3) ≤ 17.
  41. Prove that the edge set of a k-regular bipartite graph is a disjoint union of k perfect matchings.
  42. How many perfect matchings does K₁₀ have?
  43. Prove that every graph with m edges has a bipartite subgraph with at least m/2 edges, and show that the constant 1/2 cannot be replaced by any c > 1/2 for all graphs.
  44. Use Erdős's theorem to show that R(10, 10) > 100.
  45. Show that some tournament on 5 vertices has at least 8 Hamiltonian paths.

Challenge (Problems 46–60)

  46. Find the coefficients of x¹² and x¹³ in ∏ₖ≥₁ (1 − xᵏ).
  47. A rooted forest on [n] is a set of rooted trees whose vertex sets partition [n]. Prove that there are (n + 1)ⁿ⁻¹ rooted forests on [n], and evaluate for n = 4.
  48. Count the connected labelled graphs on 4 vertices using the exponential formula.
  49. Evaluate ∑ₖ C(10, k)C(8, 6 − k) and prove the general identity with generating functions.
  50. Find the number of domino tilings of a 3 × 8 rectangle, deriving the recurrence.
  51. Evaluate the Hardy–Ramanujan estimate for p(100) and its relative error.
  52. Prove that R(4, 4) ≤ 18, and state what is needed to show R(4, 4) = 18.
  53. Prove that every k-uniform hypergraph with fewer than 2ᵏ⁻¹ edges is 2-colourable, and compare the bound with the true values m(2) = 3 and m(3) = 7.
  54. How many necklaces of 6 beads with exactly 2 black and 4 white beads are there up to rotation? Up to rotation and reflection?
  55. Use the hook length formula to count the standard Young tableaux of shape (4, 3, 1).
  56. Count the permutations of [5] in which i is never immediately followed by i + 1.
  57. Let X be the number of fixed points of a uniformly random permutation of [n], n ≥ 2. Find E[X] and Var(X).
  58. Show that the number of compositions of n into odd parts is Fₙ, and evaluate for n = 10.
  59. Count binary strings of length 12 with no two consecutive 1s, and find the exponential growth rate of the sequence.
  60. Compare C₁₀ with the asymptotic estimate 4ⁿ/(n^(3/2)√π).

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. Weak compositions of 20 into 4 parts: C(23, 3) = 1771.
  2. Put yᵢ = xᵢ − 2 ≥ 0; then ∑yᵢ = 12, giving C(15, 3) = 455.
  3. C(11, 4) = 330, by choosing 4 of the 11 gaps between 12 stars.
  4. 3⁷ − 3·2⁷ + 3·1⁷ = 2187 − 384 + 3 = 1806, which equals 3!·S(7, 3) = 6 · 301.
  5. D₇ = 7 · D₆ − 1 = 7 · 265 − 1 = 1854. Then 1854/5040 ≈ 0.367857, while 1/e ≈ 0.367879; the difference is less than 1/8!, as the alternating-series bound predicts.
  6. 1000 − (500 + 333 + 200) + (166 + 100 + 66) − 33 = 266. Here ⌊1000/6⌋ = 166, ⌊1000/10⌋ = 100, ⌊1000/15⌋ = 66 and ⌊1000/30⌋ = 33.
  7. χ(t) = t² − 5t + 6 = (t − 2)(t − 3), so aₙ = α2ⁿ + β3ⁿ. The conditions α + β = 1 and 2α + 3β = 4 give β = 2, α = −1: aₙ = 2·3ⁿ − 2ⁿ. Check: a₂ = 5·4 − 6·1 = 14 = 18 − 4.
  8. [x⁵](1 − 2x)⁻³ = C(5 + 2, 2) 2⁵ = 21 · 32 = 672.
  9. Recurrence: S(6, 3) = S(5, 2) + 3S(5, 3) = 15 + 3·25 = 90. Formula: (3⁶ − 3·2⁶ + 3)/6 = (729 − 192 + 3)/6 = 540/6 = 90.
  10. B₅ = C(4,0)B₀ + C(4,1)B₁ + C(4,2)B₂ + C(4,3)B₃ + C(4,4)B₄ = 1 + 4 + 12 + 20 + 15 = 52.
  11. p(10) = 42. Partitions into distinct parts: 10, 9+1, 8+2, 7+3, 6+4, 7+2+1, 6+3+1, 5+4+1, 5+3+2, 4+3+2+1, a total of 10, equal to the number of partitions into odd parts by Euler's theorem.
  12. An (n + 2)-gon has Cₙ triangulations; for n = 6 this is C₆ = 132.
  13. N(6, 2) = (64 + 8 + 2·4 + 2·2)/6 = 84/6 = 14.
  14. (3⁶ + 3·3⁴ + 12·3³ + 8·3²)/24 = (729 + 243 + 324 + 72)/24 = 1368/24 = 57.
  15. Partition [2n] into the n pairs {2i − 1, 2i}; two of the n + 1 chosen integers lie in one pair and are consecutive, hence coprime. For divisibility, write each chosen integer as 2ᵉ·m with m odd; there are only n odd numbers m in [2n], so two chosen integers share the same m, and the one with the smaller power of 2 divides the other.
  16. By Cayley's formula, 5³ = 125.
  17. Kₙ is connected and (n − 1)-regular, so it has an Euler circuit if and only if n − 1 is even, i.e. n is odd (n = 1 trivially, and n ≥ 3 odd).
  18. ∑ C(8, k)² = ∑ C(8, k)C(8, 8 − k) = C(16, 8) = 12870, by Vandermonde: choose 8 people from 8 women and 8 men.
  19. By the ballot theorem, (7 − 4)/(7 + 4) = 3/11.
  20. Surjections [10] → [4]: 4!·S(10, 4) = 24 · 34105 = 818,520. Equivalently 4¹⁰ − 4·3¹⁰ + 6·2¹⁰ − 4 = 1,048,576 − 236,196 + 6,144 − 4 = 818,520.

Advanced

  21. As in Worked example 4.2, aₙ = (2n + 1)2ⁿ. Check: a₂ = 4·6 − 4·1 = 20, a₃ = 4·20 − 4·6 = 56, and (2·3 + 1)·8 = 56.
  22. Let A(x) = ∑aₙxⁿ. Multiplying the recurrence by xⁿ and summing over n ≥ 1 gives A − 1 = 2xA + (1/(1 − 3x) − 1), so A(x) = 1/((1 − 2x)(1 − 3x)) = 3/(1 − 3x) − 2/(1 − 2x). Hence aₙ = 3ⁿ⁺¹ − 2ⁿ⁺¹.
  23. [x⁵⁰] 1/((1 − x)(1 − x⁵)(1 − x¹⁰)(1 − x²⁵)). Using a quarter count q ∈ {0, 1, 2}, the remainder r = 50 − 25q must be made of 1, 5, 10; the number of ways to make r with 1, 5, 10 is ∑ over j ≤ r/10 of (⌊(r − 10j)/5⌋ + 1). For r = 50: 11 + 9 + 7 + 5 + 3 + 1 = 36; for r = 25: 6 + 4 + 2 = 12; for r = 0: 1. Total 36 + 12 + 1 = 49.
  24. Dₙ − n!/e = n! ∑ⱼ>ₙ (−1)ʲ/j! = (−1)ⁿ⁺¹ n! [1/(n + 1)! − 1/(n + 2)! + ⋯]. The bracket is an alternating series with decreasing terms, so its absolute value is less than 1/(n + 1)!. Thus |Dₙ − n!/e| < 1/(n + 1) ≤ 1/2 for n ≥ 1, and Dₙ, being an integer, is the nearest integer to n!/e.
  25. Iₙ = Iₙ₋₁ + (n − 1)Iₙ₋₂ gives 1, 1, 2, 4, 10, 26, 76, 232, so I₇ = 232. Directly: ∑ₖ 7!/(k! 2ᵏ (7 − 2k)!) = 1 + 21 + 105 + 105 = 232.
  26. The EGF is exp(eˣ − 1 − x). Directly: block sizes {6}: 1; {4, 2}: C(6, 4) = 15; {3, 3}: C(6, 3)/2 = 10; {2, 2, 2}: 15. Total 41.
  27. Proof as in Theorem 7.1 (count functions [n] → [x] by the partition into fibres). Check: S(4,1)(3)₁ + S(4,2)(3)₂ + S(4,3)(3)₃ + S(4,4)(3)₄ = 1·3 + 7·6 + 6·6 + 1·0 = 81 = 3⁴.
  28. ∑ₖ k! S(4, k) = 1 + 2·7 + 6·6 + 24·1 = 75 (a Fubini number). An ordered set partition is a sequence of nonempty sets, so its EGF is 1/(1 − (eˣ − 1)) = 1/(2 − eˣ).
  29. Generalized pentagonal numbers up to 12 are 1, 2, 5, 7, 12 with signs +, +, −, −, +. So p(12) = p(11) + p(10) − p(7) − p(5) + p(0) = 56 + 42 − 15 − 7 + 1 = 77.
  30. The generating function is 1/((1 − x)(1 − x²)(1 − x³)), and its coefficients are the integers nearest to (n + 3)²/12. For n = 12, 225/12 = 18.75, so the answer is 19. (Check by counting partitions with at most 3 parts and largest part a: a = 4 gives 1, a = 5: 2, a = 6: 4, a = 7: 3, a = 8: 3, a = 9: 2, a = 10: 2, a = 11: 1, a = 12: 1, total 19.)
  31. Decompose the Ferrers diagram of a self-conjugate λ into hooks along the diagonal: the i-th hook consists of the cell (i, i), the cells to its right and the cells below it. Symmetry makes each hook of odd size 2(λᵢ − i) + 1, and the sizes strictly decrease; conversely, nesting hooks of distinct odd sizes recovers a self-conjugate diagram. For n = 12 the partitions into distinct odd parts are 11+1, 9+3 and 7+5 (three odd parts would have odd sum, and four distinct odd parts sum to at least 16), so there are 3. The hook construction turns them into the self-conjugate partitions (6, 2, 1, 1, 1, 1), (5, 3, 2, 1, 1) and (4, 4, 2, 2).
  32. Such a path is U P D with P an arbitrary Dyck path of semilength 4, so the count is C₄ = 14.
  33. ((8 − 5 + 1)/(8 + 1)) C(13, 5) = (4/9) · 1287 = 572.
  34. Rotation: N(7, 3) = (3⁷ + 6·3)/7 = (2187 + 18)/7 = 2205/7 = 315. Bracelets: (2205 + 7·3⁴)/14 = (2205 + 567)/14 = 2772/14 = 198.
  35. Identity: k⁴; rotations by ±90°: k each; rotation by 180°: k²; the 2 reflections through opposite vertices: k³ each; the 2 reflections through midpoints of opposite sides: k² each. The count is (k⁴ + 2k³ + 3k² + 2k)/8; at k = 3 it is (81 + 54 + 27 + 6)/8 = 168/8 = 21.
  36. Substitute sᵢ = 1 + yⁱ and take [y²]: from s₁⁶, C(6, 2) = 15; from s₁²s₂² = (1 + y)²(1 + y²)², the coefficient 1 + 2 = 3, times 9 elements gives 27; s₃² contributes 0; s₂s₄ = (1 + y²)(1 + y⁴) contributes 1 for each of 6 elements. Total (15 + 27 + 0 + 6)/24 = 2: two adjacent edges, or two disjoint edges.
  37. (2⁸ + 17·2⁴ + 6·2²)/24 = (256 + 272 + 24)/24 = 552/24 = 23.
  38. N = 5·5 + 1 = 26 by Erdős–Szekeres with r = s = 5. Extremal example of length 25: 21, 22, 23, 24, 25, 16, 17, 18, 19, 20, 11, …, 15, 6, …, 10, 1, …, 5 (five increasing blocks, each below the previous), whose longest increasing and decreasing subsequences have length 5.
  39. By Theorem 11.4, R(3, 4) ≤ R(2, 4) + R(3, 3) = 4 + 6 = 10, and since both terms are even the inequality is strict. Directly: in a colouring of K₉ with no red triangle and no blue K₄, each vertex has red degree at most 3 (its red neighbours span no red edge, so if there were 4 they would form a blue K₄) and blue degree at most 5 (its blue neighbours contain no blue triangle and no red triangle, so there are at most R(3, 3) − 1 = 5). Since 3 + 5 = 8 = 9 − 1, every vertex has red degree exactly 3, and the red graph would have 9 vertices of odd degree, which is impossible.
  40. Take any vertex v of a 3-coloured K₁₇. Its 16 edges include at least ⌈16/3⌉ = 6 of one colour, say colour 1, to vertices w₁, …, w₆. If any edge wᵢwⱼ has colour 1, it forms a triangle of colour 1 with v. Otherwise the edges among the wᵢ use only colours 2 and 3, and since R(3, 3) = 6 they contain a monochromatic triangle.
  41. By Corollary 12.3 a k-regular bipartite graph (k ≥ 1) has a perfect matching M. Removing M leaves a (k − 1)-regular bipartite graph; by induction its edges split into k − 1 perfect matchings, and adding M gives k. (This is König's edge-colouring theorem in the regular case.)
  42. (2n − 1)!! for 2n = 10: 9·7·5·3·1 = 945. Vertex 1 has 9 possible partners, then the smallest unmatched vertex has 7, and so on.
  43. The expectation argument of Theorem 13.2 gives a cut of size at least m/2. For sharpness, the largest cut of Kₙ has ⌊n/2⌋⌈n/2⌉ edges, and ⌊n/2⌋⌈n/2⌉/C(n, 2) → 1/2 as n → ∞, so no constant c > 1/2 works for all graphs.
  44. C(100, 10) = 17,310,309,456,440 ≈ 1.731 × 10¹³, while 2^(C(10,2) − 1) = 2⁴⁴ ≈ 1.759 × 10¹³. Hence C(100, 10) · 2^(1−45) < 1, and Erdős's theorem gives R(10, 10) > 100. (The general bound ⌊2^(k/2)⌋ would give only R(10, 10) > 32.)
  45. By Szele's argument the expected number of Hamiltonian paths in a random tournament on 5 vertices is 5!/2⁴ = 7.5, so some tournament has at least 7.5, hence at least 8.

Challenge

  46. By the pentagonal number theorem, the coefficient of xⁿ is (−1)ʲ if n = j(3j ± 1)/2 and 0 otherwise. Since 12 = 3(3·3 − 1)/2 with j = 3, the coefficient of x¹² is (−1)³ = −1; 13 is not a generalized pentagonal number (the sequence runs 12, 15, …), so the coefficient of x¹³ is 0.
  47. Add a new vertex 0 and join it to the root of every tree in the forest. This is a bijection between rooted forests on [n] and trees on {0, 1, …, n}, which by Cayley's formula number (n + 1)ⁿ⁻¹. For n = 4: 5³ = 125.
  48. With gₙ = 2^C(n,2), the recurrence gₙ = ∑ₖ C(n − 1, k − 1)cₖgₙ₋ₖ gives c₁ = 1, c₂ = 2 − 1 = 1, c₃ = 8 − (1·1·2 + 2·1·1) = 4, and c₄ = 64 − (1·1·8 + 3·1·2 + 3·4·1) = 64 − 26 = 38. Equivalently, the coefficients of log(1 + x + 2x²/2! + 8x³/3! + 64x⁴/4! + ⋯).
  49. Comparing coefficients of xʳ in (1 + x)ᵐ(1 + x)ⁿ = (1 + x)^(m+n) gives ∑ₖ C(m, k)C(n, r − k) = C(m + n, r). Here the sum is C(18, 6) = 18564.
  50. With aₙ (full 3 × n board) and bₙ (board with a corner removed): consider the leftmost column of a full board. Either three horizontal dominoes cover its first two columns (one way, leaving a 3 × (n − 2) board) or a vertical domino covers two cells of the first column and a horizontal domino the third cell, in two mirror-image ways, leaving a board with a corner removed; so aₙ = aₙ₋₂ + 2bₙ₋₁. Similarly bₙ = aₙ₋₁ + bₙ₋₂. Since bₙ₋₁ − bₙ₋₃ = aₙ₋₂, we get aₙ − aₙ₋₂ = 2bₙ₋₁ = 2aₙ₋₂ + 2bₙ₋₃ = 2aₙ₋₂ + (aₙ₋₂ − aₙ₋₄), i.e. aₙ = 4aₙ₋₂ − aₙ₋₄. With a₀ = 1, a₂ = 3: a₄ = 11, a₆ = 41, a₈ = 4·41 − 11 = 153.
  51. e^(π√(200/3))/(400√3): π√(66.667) ≈ 25.651, e^25.651 ≈ 1.3806 × 10¹¹, divided by 400√3 ≈ 692.82 gives about 1.993 × 10⁸. Since p(100) = 190,569,292, the relative error is about 4.6%. Rademacher's exact series reduces the error below 1/2 with only a handful of terms.
  52. R(4, 4) ≤ R(3, 4) + R(4, 3) = 9 + 9 = 18. Since 9 is odd the parity refinement does not apply. To show equality one needs a 2-colouring of K₁₇ with no monochromatic K₄; the Paley graph on 𝔽₁₇, with i ~ j when i − j ∈ {±1, ±2, ±4, ±8}, provides it. It is self-complementary (multiplication by 3, a non-residue, maps edges to non-edges), so it suffices to check that it has no K₄, which follows by examining the neighbourhood {±1, ±2, ±4, ±8} of 0: its induced graph is a 3-regular graph with 8 vertices and 12 edges, and a direct check shows that it contains no triangle. Since the Paley graph is vertex-transitive, a K₄ would have to contain 0 and a triangle in this neighbourhood.
  53. In a uniformly random 2-colouring each edge is monochromatic with probability 2 · 2⁻ᵏ = 2^(1−k). If there are m < 2ᵏ⁻¹ edges, the expected number of monochromatic edges is m·2^(1−k) < 1, so some colouring has none. So m(k) ≥ 2ᵏ⁻¹. For k = 2 this gives m(2) ≥ 2, while the true value is 3 (the triangle); for k = 3 it gives m(3) ≥ 4, while the true value is 7 (the Fano plane). Asymptotically the truth lies between about 2ᵏ√(k/log k) (Radhakrishnan–Srinivasan, 2000) and about k²2ᵏ (Erdős, 1964).
  54. Rotations: as in Lesson 10, (15 + 3)/6 = 3. The three classes are determined by the cyclic distance 1, 2 or 3 between the black beads, and each is mapped to itself by a reflection, so the dihedral count is also 3. By Burnside: each of the 3 reflections through two opposite beads fixes 3 colourings (both black beads on the axis, or one of the 2 symmetric pairs off the axis), and each of the 3 reflections through edge midpoints fixes 3 colourings (one of its 3 pairs black). So the count is (18 + 9 + 9)/12 = 3.
  55. Hook lengths of (4, 3, 1): first row 6, 4, 3, 1; second row 4, 2, 1; third row 1. Their product is 6·4·3·1·4·2·1·1 = 576, and 8!/576 = 40320/576 = 70.
  56. Let Aᵢ (1 ≤ i ≤ 4) be the permutations in which i + 1 immediately follows i. Requiring j such adjacencies glues the elements into n − j blocks, so |A_I| = (5 − |I|)!. Hence the count is ∑ⱼ (−1)ʲ C(4, j)(5 − j)! = 120 − 96 + 36 − 8 + 1 = 53.
  57. Write X = ∑ Iᵢ with Iᵢ the indicator that i is fixed, so E[X] = n · (1/n) = 1. For i ≠ j, E[IᵢIⱼ] = (n − 2)!/n! = 1/(n(n − 1)), so E[X²] = E[X] + n(n − 1)/(n(n − 1)) = 2, and Var(X) = 2 − 1 = 1. In fact the distribution of X tends to Poisson(1).
  58. The OGF of odd parts is x/(1 − x²), so compositions into odd parts have OGF 1/(1 − x/(1 − x²)) = (1 − x²)/(1 − x − x²), whose coefficient of xⁿ for n ≥ 1 is Fₙ₊₁ − Fₙ₋₁ = Fₙ. For n = 10 this is F₁₀ = 55.
  59. Let sₙ be the count; a valid string ends in 0 (preceded by any valid string of length n − 1) or in 01 (preceded by one of length n − 2), so sₙ = sₙ₋₁ + sₙ₋₂ with s₁ = 2, s₂ = 3, giving sₙ = Fₙ₊₂. Thus s₁₂ = F₁₄ = 377, and the growth rate is φ = (1 + √5)/2 ≈ 1.618.
  60. C₁₀ = 16796. The estimate gives 4¹⁰/(10^(3/2)√π) = 1048576/(31.623 · 1.7725) ≈ 18708, so the ratio C₁₀/estimate ≈ 0.898. The full expansion Cₙ = (4ⁿ/(n^(3/2)√π))(1 − 9/(8n) + O(n⁻²)) accounts for most of the deficit of about 10% at n = 10: the corrected estimate 18708 · (1 − 9/80) ≈ 16603 is within 1.2% of C₁₀.
