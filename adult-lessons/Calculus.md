Calculus — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Calculus was invented twice in the seventeenth century, by Isaac Newton in the 1660s (the method of fluxions) and by Gottfried Wilhelm Leibniz, who published the first account of the differential calculus in 1684. For more than a century afterwards it was used with spectacular success and very little foundation: infinitesimals were quantities that were zero when convenient and nonzero when convenient. Bishop Berkeley's 1734 jibe about "the ghosts of departed quantities" was never properly answered by the inventors. The answer came in the nineteenth century, through the work of Bolzano (1817), Cauchy (Cours d'analyse, 1821), Riemann (1854), Weierstrass (lectures in Berlin from the 1860s), Dedekind and Cantor (1872), and finally Lebesgue (1902). That rigorous reconstruction is what is now called real analysis, and it is the subject of this course.

An introductory calculus course computes derivatives and areas with the standard rules and derives a few of them. This course asks the questions that come next. What exactly is a real number, and which property of the real numbers makes calculus work? What does it mean for an infinite sum to have a value, and why can rearranging its terms change that value? When may two limiting processes be interchanged? Exactly which functions have an integral, and why did Riemann's integral eventually have to be replaced? Every theorem is stated precisely, and most are proved. The proofs are short, but each one uses completeness, compactness or uniformity in a specific way, and seeing where these enter is the real content of the subject.

Prerequisites: fluency with the computational calculus of one variable (derivatives, antiderivatives, standard series), basic linear algebra (linear maps, matrices, determinants), and comfort reading proofs by contradiction and induction. Notation: ℕ = {1, 2, 3, ...}, ℚ is the rational numbers, ℝ the real numbers; "iff" means "if and only if"; ∀ means "for all" and ∃ means "there exists".

In this course, you will:

  1. Characterise ℝ as the complete ordered field and derive the equivalent forms of completeness
  2. Prove the main theorems on sequences: monotone convergence, Bolzano–Weierstrass, the Cauchy criterion, lim sup and lim inf
  3. Develop the convergence theory of infinite series, including the root, ratio and condensation tests and Riemann's rearrangement theorem
  4. Work with ε–δ limits, continuity and uniform continuity, and prove the intermediate and extreme value theorems
  5. Prove the mean value theorem, Darboux's theorem and Taylor's theorem with three forms of the remainder
  6. Build the Riemann integral from Darboux sums, prove the integrability criteria and the fundamental theorem of calculus
  7. Handle improper integrals, the Gamma function and the integral test
  8. Understand uniform convergence as the condition for interchanging limits, and apply it to power series
  9. Extend differentiation to several variables: the total derivative, the chain rule, and the inverse and implicit function theorems
 10. Integrate in several variables with Fubini's theorem and the change of variables formula
 11. See why the Lebesgue integral was needed, and use the monotone and dominated convergence theorems

─────────────────────────────────
Lesson 1: The Real Numbers and Completeness
─────────────────────────────────

📌 Key idea of this section:

        Completeness axiom: every nonempty subset of ℝ that is bounded above
        has a least upper bound (supremum) in ℝ.

Ordered fields

A field is a set with addition and multiplication satisfying the usual algebraic laws (associativity, commutativity, distributivity, identities 0 and 1, additive inverses, and multiplicative inverses of nonzero elements). An ordered field is a field with a total order ≤ compatible with the operations: x ≤ y implies x + z ≤ y + z, and 0 ≤ x, 0 ≤ y imply 0 ≤ xy. Both ℚ and ℝ are ordered fields. From the axioms alone one derives all the familiar inequality rules: squares are nonnegative, 0 < 1, multiplying an inequality by a negative number reverses it, and so on.

The difference between ℚ and ℝ is not algebraic but order-theoretic. Let S ⊆ F be a subset of an ordered field F. An element u is an upper bound of S if x ≤ u for every x ∈ S. An element s is the supremum (least upper bound) of S, written s = sup S, if s is an upper bound and s ≤ u for every upper bound u. Infimum (greatest lower bound, inf S) is defined in the same way with the inequalities reversed. A supremum, when it exists, is unique.

Definition 1.1. An ordered field F is complete if every nonempty subset of F that is bounded above has a supremum in F.

Theorem 1.2. Up to a unique order-preserving field isomorphism, there is exactly one complete ordered field. It is called ℝ.

Existence is proved by construction, either from Dedekind cuts of ℚ (Dedekind, 1872) or from equivalence classes of Cauchy sequences of rationals (Méray, 1869; Cantor, 1872). Uniqueness is proved by showing that any complete ordered field contains a copy of ℚ that is dense in it, and that each element is the supremum of the rationals below it. For the rest of this course we take Definition 1.1 as the starting point: ℝ is a complete ordered field, and every theorem below that distinguishes ℝ from ℚ uses completeness somewhere.

The approximation property

The working form of the definition is the following characterisation, used in almost every proof that follows.

Lemma 1.3. Let S be nonempty and bounded above, and let u be an upper bound of S. Then u = sup S iff for every ε > 0 there exists x ∈ S with x > u − ε.

Proof. If u = sup S and ε > 0, then u − ε < u, so u − ε is not an upper bound; hence some x ∈ S satisfies x > u − ε. Conversely, suppose the condition holds and v < u is any number. Taking ε = u − v gives x ∈ S with x > v, so v is not an upper bound. Hence u is the least upper bound. ∎

Theorem 1.4 (Archimedean property). For every real x there is n ∈ ℕ with n > x. Equivalently, for every ε > 0 there is n ∈ ℕ with 1/n < ε.

Proof. Suppose ℕ were bounded above, and let s = sup ℕ. By Lemma 1.3 with ε = 1 there is n ∈ ℕ with n > s − 1. Then n + 1 ∈ ℕ and n + 1 > s, contradicting that s is an upper bound. ∎

There are non-Archimedean ordered fields, for example the field of rational functions ℝ(t) ordered so that t is larger than every real number. In such a field 1/t is a positive "infinitesimal", smaller than every 1/n. Completeness rules these out. From the Archimedean property one derives that ℚ is dense in ℝ: between any two reals a < b there is a rational, namely m/n where 1/n < b − a and m is the least integer greater than na.

The rationals are not complete

Theorem 1.5. The set S = {x ∈ ℚ : x > 0 and x² < 2} is nonempty and bounded above in ℚ but has no supremum in ℚ. In ℝ its supremum s satisfies s² = 2.

Proof. Let s = sup S in ℝ (it exists by completeness; 1 ∈ S and 2 is an upper bound). We exclude s² < 2 and s² > 2.

Suppose s² < 2. Put h = min(1/2, (2 − s²)/(2(2s + 1))) > 0. Since h < 1, h² < h, so (s + h)² = s² + 2sh + h² < s² + h(2s + 1) ≤ s² + (2 − s²)/2 < 2. By density pick a rational q with s < q < s + h; then q² < 2 and q ∈ S, contradicting that s is an upper bound.

Suppose s² > 2. Put h = (s² − 2)/(2s) > 0. Then s − h = (s² + 2)/(2s) > 0 and (s − h)² = s² − 2sh + h² > s² − 2sh = 2. If some x ∈ S had x > s − h, then x² > (s − h)² > 2, which is impossible. So s − h is an upper bound smaller than s, a contradiction.

Hence s² = 2. Since √2 is irrational (the classical argument: if p² = 2q² in lowest terms then p and q are both even), the supremum does not lie in ℚ. If ℚ had a supremum s' for S, the same argument carried out inside ℚ would force s'² = 2. ∎

Equivalent forms of completeness

Completeness can be expressed in several ways. For an ordered field F, the following are equivalent:

  1. The least upper bound property (Definition 1.1).
  2. The monotone convergence property: every increasing sequence that is bounded above converges.
  3. The Bolzano–Weierstrass property: every bounded sequence has a convergent subsequence.
  4. F is Archimedean and every Cauchy sequence converges.
  5. F is Archimedean and every nested sequence of closed bounded intervals I₁ ⊇ I₂ ⊇ I₃ ⊇ ... has nonempty intersection.

The Archimedean hypothesis in (4) and (5) cannot be dropped: there are non-Archimedean ordered fields in which every Cauchy sequence converges. We prove (1) ⇒ (2) ⇒ (3) ⇒ Cauchy completeness in Lesson 2, and (4) ⇒ (1) is Problem 46. A famous consequence of (5) is Cantor's theorem that ℝ is uncountable: given any sequence x₁, x₂, ..., choose nested closed intervals Iₙ with xₙ ∉ Iₙ (trisect and keep a third avoiding xₙ); a point in the intersection is missed by the sequence.

✏️ Your Turn

(a) Find sup S and inf S for S = {1/n − 1/m : n, m ∈ ℕ}, and say whether they are attained.
(b) Find sup and inf of T = {(−1)ⁿ(1 − 1/n) : n ∈ ℕ}.
(c) Let A, B be nonempty and bounded above and A + B = {a + b : a ∈ A, b ∈ B}. Prove sup(A + B) = sup A + sup B.

Answers: (a) sup S = 1 and inf S = −1, neither attained: 1/n − 1/m < 1/n ≤ 1, and taking n = 1, m large gives values above 1 − ε; symmetrically for −1. (b) sup T = 1 (approached by even n, never attained since 1 − 1/n < 1), inf T = −1 (approached by odd n, never attained). (c) sup A + sup B is an upper bound of A + B. Given ε > 0 choose a > sup A − ε/2 and b > sup B − ε/2; then a + b > sup A + sup B − ε, so Lemma 1.3 applies.

─────────────────────────────────
Lesson 2: Sequences, Cauchy Sequences and lim sup
─────────────────────────────────

📌 Key idea of this section:

        aₙ → L  ⇔  ∀ε > 0 ∃N ∈ ℕ ∀n ≥ N : |aₙ − L| < ε
        In ℝ:  (aₙ) converges  ⇔  (aₙ) is Cauchy

Convergence

A sequence of real numbers is a function ℕ → ℝ, written (aₙ). It converges to L if for every ε > 0 there is N such that |aₙ − L| < ε for all n ≥ N. The quantifier order matters: N may depend on ε, but not the other way round. Limits are unique (if aₙ → L and aₙ → M then |L − M| ≤ |L − aₙ| + |aₙ − M| < 2ε for every ε), and a convergent sequence is bounded.

Worked example: let aₙ = (3n + 1)/(n + 2). Then |aₙ − 3| = |3n + 1 − 3n − 6|/(n + 2) = 5/(n + 2). Given ε > 0, choose N > 5/ε. For n ≥ N, 5/(n + 2) < 5/n ≤ 5/N < ε. Hence aₙ → 3.

The algebraic limit laws follow from the triangle inequality. For example, if aₙ → a and bₙ → b, then

        |aₙbₙ − ab| = |aₙ(bₙ − b) + b(aₙ − a)| ≤ M|bₙ − b| + |b||aₙ − a|,

where M bounds |aₙ|, and both terms can be made small. Limits also preserve weak inequalities: if aₙ ≤ bₙ for all large n then lim aₙ ≤ lim bₙ (strict inequalities need not survive: 0 < 1/n but lim 1/n = 0). The squeeze theorem follows.

Monotone convergence

Theorem 2.1 (Monotone convergence). An increasing sequence that is bounded above converges to sup{aₙ : n ∈ ℕ}. A decreasing sequence that is bounded below converges to its infimum.

Proof. Let s = sup{aₙ}. Given ε > 0, Lemma 1.3 gives N with a_N > s − ε. For n ≥ N, monotonicity gives s − ε < a_N ≤ aₙ ≤ s, so |aₙ − s| < ε. ∎

Worked example: define a₁ = 1 and aₙ₊₁ = √(2 + aₙ). By induction 0 < aₙ < 2 (if aₙ < 2 then aₙ₊₁ < √4 = 2) and aₙ < aₙ₊₁ (since aₙ₊₁² − aₙ² = 2 + aₙ − aₙ² = (2 − aₙ)(1 + aₙ) > 0). So the sequence converges to some L with 1 ≤ L ≤ 2. Passing to the limit in aₙ₊₁² = 2 + aₙ gives L² = L + 2, so L = 2 (the root −1 is excluded).

A second classical example is eₙ = (1 + 1/n)ⁿ. Expanding by the binomial theorem shows that eₙ is increasing and that eₙ < 1 + 1 + 1/2 + 1/4 + ... = 3. Its limit is Euler's number e = 2.71828..., and the same expansion shows that e = ∑ₖ₌₀^∞ 1/k!.

Subsequences and Bolzano–Weierstrass

A subsequence of (aₙ) is (aₙₖ) with n₁ < n₂ < n₃ < .... If aₙ → L then every subsequence converges to L.

Lemma 2.2 (Peak lemma). Every real sequence has a monotone subsequence.

Proof. Call m a peak if aₘ ≥ aₙ for all n > m. If there are infinitely many peaks m₁ < m₂ < ..., then aₘ₁ ≥ aₘ₂ ≥ ... is decreasing. If there are finitely many, let n₁ be beyond the last peak. Since n₁ is not a peak there is n₂ > n₁ with aₙ₂ > aₙ₁; since n₂ is not a peak there is n₃ > n₂ with aₙ₃ > aₙ₂; and so on, giving an increasing subsequence. ∎

Theorem 2.3 (Bolzano–Weierstrass). Every bounded real sequence has a convergent subsequence.

Proof. By the peak lemma it has a monotone subsequence, which is bounded, hence convergent by Theorem 2.1. ∎

Cauchy sequences

A sequence is Cauchy if for every ε > 0 there is N with |aₘ − aₙ| < ε for all m, n ≥ N. The definition does not mention a limit, which is exactly why it is useful: it lets us prove that a limit exists without knowing it in advance.

Theorem 2.4 (Cauchy criterion). A real sequence converges iff it is Cauchy.

Proof. If aₙ → L then |aₘ − aₙ| ≤ |aₘ − L| + |L − aₙ| < ε/2 + ε/2 for m, n ≥ N. Conversely, a Cauchy sequence is bounded (take ε = 1: all terms beyond N lie within 1 of a_N). By Bolzano–Weierstrass some subsequence aₙₖ → L. Given ε > 0, choose N with |aₘ − aₙ| < ε/2 for m, n ≥ N, and choose k with nₖ ≥ N and |aₙₖ − L| < ε/2. Then for n ≥ N, |aₙ − L| ≤ |aₙ − aₙₖ| + |aₙₖ − L| < ε. ∎

In ℚ the sequence of decimal truncations 1, 1.4, 1.41, 1.414, ... of √2 is Cauchy but has no rational limit. Spaces in which every Cauchy sequence converges are called complete metric spaces; the concept, and the theorems of this lesson, carry over to ℝⁿ and to many spaces of functions.

Limit superior and limit inferior

For a bounded sequence define:

        lim sup aₙ = lim (n → ∞) sup{aₖ : k ≥ n} = inf over n of sup{aₖ : k ≥ n},
        lim inf aₙ = lim (n → ∞) inf{aₖ : k ≥ n} = sup over n of inf{aₖ : k ≥ n}.

The tail suprema form a decreasing sequence, so the first limit exists by monotone convergence; similarly for the second. These always exist (allowing ±∞ for unbounded sequences), and (aₙ) converges iff lim sup aₙ = lim inf aₙ, in which case both equal the limit. An equivalent description: lim sup aₙ is the largest subsequential limit of (aₙ), and lim inf aₙ is the smallest.

Worked example: aₙ = (−1)ⁿ + 1/n. For even n the terms are 1 + 1/n → 1; for odd n they are −1 + 1/n → −1. So lim sup aₙ = 1 and lim inf aₙ = −1. Note that sup{aₙ} = a₂ = 3/2 differs from the lim sup: the lim sup ignores any finite number of terms.

Theorem 2.5 (Cesàro). If aₙ → L then the averages σₙ = (a₁ + ... + aₙ)/n also tend to L. The converse fails: aₙ = (−1)ⁿ diverges but σₙ → 0.

Proof. Given ε > 0 choose N with |aₖ − L| < ε for k > N. For n > N, |σₙ − L| ≤ C/n + ((n − N)/n)ε, where C = |a₁ − L| + ... + |a_N − L| is fixed. The first term tends to 0, so lim sup |σₙ − L| ≤ ε for every ε > 0. ∎

✏️ Your Turn

(a) For aₙ = (3n + 1)/(n + 2) and ε = 0.01, find the least N such that |aₙ − 3| < ε for all n ≥ N.
(b) Find lim sup and lim inf of aₙ = sin(nπ/3).
(c) Let a₁ = 0 and aₙ₊₁ = √(6 + aₙ). Prove the sequence converges and find its limit.

Answers: (a) 5/(n + 2) < 0.01 iff n + 2 > 500 iff n > 498, so N = 499. (b) The sequence is periodic with values √3/2, √3/2, 0, −√3/2, −√3/2, 0, so lim sup = √3/2 and lim inf = −√3/2. (c) By induction 0 ≤ aₙ < 3 and aₙ < aₙ₊₁, so it converges; the limit satisfies L² = 6 + L, L ≥ 0, so L = 3.

─────────────────────────────────
Lesson 3: Infinite Series and Convergence Tests
─────────────────────────────────

📌 Key idea of this section:

        ∑ aₙ converges  ⇔  the partial sums sₙ = a₁ + ... + aₙ converge
        ⇔  ∀ε > 0 ∃N : |aₙ₊₁ + ... + aₘ| < ε for all m > n ≥ N

Partial sums and the Cauchy criterion

An infinite series ∑ aₙ is, by definition, the sequence of its partial sums sₙ = a₁ + ... + aₙ; its sum is lim sₙ when this exists. Applying the Cauchy criterion to (sₙ) gives the boxed criterion above. Taking m = n + 1 yields the term test: if ∑ aₙ converges then aₙ → 0. The converse is false, as the harmonic series shows.

The geometric series ∑ₙ₌₀^∞ rⁿ has partial sums (1 − rⁿ⁺¹)/(1 − r), so it converges to 1/(1 − r) iff |r| < 1. Telescoping series are summed directly: ∑ 1/(n(n + 1)) = ∑ (1/n − 1/(n + 1)) has partial sums 1 − 1/(n + 1) → 1.

The harmonic series diverges: grouping 1 + 1/2 + (1/3 + 1/4) + (1/5 + ... + 1/8) + ..., each bracket is at least 1/2, so s₂ₖ ≥ 1 + k/2. This argument, due to Nicole Oresme (c. 1350), generalises.

Series with nonnegative terms

If aₙ ≥ 0, the partial sums increase, so ∑ aₙ converges iff the partial sums are bounded. This gives the comparison test: if 0 ≤ aₙ ≤ bₙ and ∑ bₙ converges, so does ∑ aₙ. The limit comparison test follows: if aₙ, bₙ > 0 and aₙ/bₙ → c with 0 < c < ∞, then ∑ aₙ and ∑ bₙ converge or diverge together.

Theorem 3.1 (Cauchy condensation). Write a(m) for aₘ. If aₙ ≥ 0 is decreasing, then ∑ aₙ converges iff ∑ₖ₌₀^∞ 2ᵏ a(2ᵏ) converges.

Proof. Group the terms in blocks from 2ᵏ to 2ᵏ⁺¹ − 1. The block has 2ᵏ terms, each between a(2ᵏ⁺¹) and a(2ᵏ). Hence the block sum lies between 2ᵏa(2ᵏ⁺¹) = (1/2)·2ᵏ⁺¹a(2ᵏ⁺¹) and 2ᵏa(2ᵏ). Summing over k, the partial sums of the two series bound each other up to a factor 2. ∎

Applied to aₙ = 1/nᵖ (p > 0) the condensed series is ∑ 2ᵏ/2ᵏᵖ = ∑ (2¹⁻ᵖ)ᵏ, a geometric series that converges iff p > 1. Applied to 1/(n ln n) the condensed series is ∑ 2ᵏ/(2ᵏ k ln 2) = (1/ln 2)∑ 1/k, which diverges. The series ∑ 1/(n (ln n)ᵖ) converges iff p > 1, so the boundary between convergence and divergence is extremely fine: there is no "slowest diverging" series.

Root and ratio tests

Theorem 3.2 (Root test). Let α = lim sup |aₙ|^(1/n). If α < 1 then ∑ aₙ converges absolutely; if α > 1 it diverges; if α = 1 the test is inconclusive.

Proof. If α < 1 choose α < β < 1. For all large n, |aₙ|^(1/n) < β, i.e. |aₙ| < βⁿ, and compare with the geometric series. If α > 1, then |aₙ| > 1 for infinitely many n, so aₙ does not tend to 0. ∎

Theorem 3.3 (Ratio test). If aₙ ≠ 0 and lim sup |aₙ₊₁/aₙ| < 1 the series converges absolutely; if |aₙ₊₁/aₙ| ≥ 1 for all large n it diverges.

The two tests are related by the inequalities:

        lim inf |aₙ₊₁/aₙ| ≤ lim inf |aₙ|^(1/n) ≤ lim sup |aₙ|^(1/n) ≤ lim sup |aₙ₊₁/aₙ|,

so whenever the ratio test decides convergence, the root test does too (Problem 49). The ratio test is usually easier to apply, especially with factorials. Example: for aₙ = n!/nⁿ, aₙ₊₁/aₙ = (n/(n + 1))ⁿ = 1/(1 + 1/n)ⁿ → 1/e < 1, so ∑ n!/nⁿ converges.

Absolute and conditional convergence

A series converges absolutely if ∑ |aₙ| converges. Absolute convergence implies convergence, by the Cauchy criterion and the triangle inequality. A convergent series that is not absolutely convergent is conditionally convergent.

Theorem 3.4 (Leibniz alternating series test). If aₙ decreases to 0, then ∑ (−1)ⁿ⁺¹aₙ converges, and the sum S satisfies |S − sₙ| ≤ aₙ₊₁.

Proof. The even partial sums s₂ₙ increase, the odd partial sums s₂ₙ₊₁ decrease, s₂ₙ ≤ s₂ₙ₊₁, and s₂ₙ₊₁ − s₂ₙ = a₂ₙ₊₁ → 0. Both sequences converge to the same limit S, which lies between any two consecutive partial sums. ∎

So 1 − 1/2 + 1/3 − 1/4 + ... converges; its sum is ln 2 (Lesson 11). It is not absolutely convergent. A more general tool is summation by parts, the discrete analogue of integration by parts. It gives the Dirichlet test: if the partial sums of ∑ bₙ are bounded and aₙ decreases to 0, then ∑ aₙbₙ converges. For instance ∑ sin(n)/n converges, because |sin 1 + ... + sin n| ≤ 1/sin(1/2) for all n.

Rearrangements

Theorem 3.5 (Riemann rearrangement theorem, 1854). If ∑ aₙ converges conditionally, then for every L ∈ ℝ ∪ {±∞} there is a rearrangement ∑ aσ(n) whose sum is L. If ∑ aₙ converges absolutely, every rearrangement converges to the same sum.

Proof sketch. The positive terms and the negative terms of a conditionally convergent series each form a divergent series, while the terms tend to 0. Add positive terms until the partial sum first exceeds L, then negative terms until it first drops below L, and repeat. The overshoot at each stage is at most the size of the last term used, which tends to 0. ∎

Worked example: rearrange the alternating harmonic series as one positive term followed by two negative terms:

        1 − 1/2 − 1/4 + 1/3 − 1/6 − 1/8 + 1/5 − 1/10 − 1/12 + ...

Grouping each triple as (1/(2k − 1) − 1/(4k − 2)) − 1/(4k) = 1/(4k − 2) − 1/(4k) = (1/2)(1/(2k − 1) − 1/(2k)), the rearranged series sums to (1/2) ln 2, half of the original sum.

Two famous sums

Euler's solution of the Basel problem (1734) gives ∑ 1/n² = π²/6 ≈ 1.6449. Power-series techniques (Lesson 11) give sums such as ∑ₙ₌₁^∞ n²/2ⁿ = 6. Most convergent series, however, have no closed-form sum, and the theory above is designed to decide convergence without finding the sum.

✏️ Your Turn

(a) Decide whether ∑ n²/2ⁿ and ∑ 2ⁿ/n² converge.
(b) Decide whether ∑ 1/(n (ln n)²), summed from n = 2, converges.
(c) How many terms of ∑ (−1)ⁿ⁺¹/n² guarantee, by the Leibniz bound, an error below 10⁻³?

Answers: (a) The first converges (ratio test: ratio → 1/2); the second diverges (terms tend to ∞). (b) It converges: the condensed series is ∑ 2ᵏ/(2ᵏ k² (ln 2)²) = (1/(ln 2)²)∑ 1/k². (c) We need 1/(n + 1)² < 10⁻³, i.e. (n + 1)² > 1000, so n + 1 ≥ 32 and n = 31 terms.

─────────────────────────────────
Lesson 4: Limits, Continuity and Uniform Continuity
─────────────────────────────────

📌 Key idea of this section:

        lim (x → a) f(x) = L  ⇔  ∀ε > 0 ∃δ > 0 : 0 < |x − a| < δ ⇒ |f(x) − L| < ε
        f uniformly continuous  ⇔  ∀ε > 0 ∃δ > 0 ∀x, y : |x − y| < δ ⇒ |f(x) − f(y)| < ε

The ε–δ definition

Let f be defined on a set D ⊆ ℝ and let a be a limit point of D (every interval around a contains points of D other than a). We say lim (x → a) f(x) = L if for every ε > 0 there exists δ > 0 such that |f(x) − L| < ε whenever x ∈ D and 0 < |x − a| < δ. This formulation, implicit in Cauchy and Bolzano and made fully explicit by Weierstrass, eliminates infinitesimals: every statement about "x close to a" becomes a statement about inequalities between real numbers.

Worked example: lim (x → 2) x² = 4. Factor |x² − 4| = |x − 2||x + 2|. If we first insist δ ≤ 1, then |x − 2| < 1 forces 1 < x < 3 and |x + 2| < 5. So |x² − 4| < 5|x − 2|, and δ = min(1, ε/5) works. The trick of restricting δ first to control the "other factor" is standard.

Theorem 4.1 (Sequential criterion). lim (x → a) f(x) = L iff f(xₙ) → L for every sequence xₙ in D \ {a} with xₙ → a.

The sequential criterion is the easiest way to show that a limit fails to exist. For f(x) = sin(1/x), the sequences xₙ = 1/(2πn) and yₙ = 1/(2πn + π/2) both tend to 0, but f(xₙ) = 0 and f(yₙ) = 1. So sin(1/x) has no limit at 0.

Continuity

f is continuous at a ∈ D if for every ε > 0 there is δ > 0 with |f(x) − f(a)| < ε whenever x ∈ D and |x − a| < δ. Sums, products, quotients (with nonzero denominator) and compositions of continuous functions are continuous. Continuity can behave in unexpected ways:

  1. Dirichlet's function, 1 on ℚ and 0 on ℝ \ ℚ, is discontinuous everywhere, since every interval contains rationals and irrationals.
  2. Thomae's function, defined by t(p/q) = 1/q for p/q in lowest terms with q ≥ 1, and t(x) = 0 for irrational x, is continuous at every irrational and discontinuous at every rational. Given ε > 0, only finitely many rationals in a bounded interval have 1/q ≥ ε, and an irrational point has a neighbourhood avoiding them all.
  3. There is no function continuous exactly at the rationals: the set of continuity points of any function is a countable intersection of open sets, and ℚ is not such a set (by the Baire category theorem).

The two great theorems on intervals

Theorem 4.2 (Intermediate value theorem; Bolzano, 1817). If f is continuous on [a, b] and f(a) < y < f(b), there exists c ∈ (a, b) with f(c) = y.

Proof. Let S = {x ∈ [a, b] : f(x) < y}. S contains a and is bounded by b; let c = sup S. If f(c) < y, continuity gives δ with f < y on [c, c + δ), contradicting that c is an upper bound (note c < b since f(b) > y). If f(c) > y, continuity gives δ with f > y on (c − δ, c], so c − δ is an upper bound of S, contradicting minimality. Hence f(c) = y. ∎

Theorem 4.3 (Extreme value theorem). A continuous function on a closed bounded interval [a, b] is bounded and attains its maximum and minimum.

Proof. If f were unbounded, there would be xₙ ∈ [a, b] with |f(xₙ)| > n. By Bolzano–Weierstrass a subsequence converges to some c ∈ [a, b], and by continuity f(xₙₖ) → f(c), contradicting |f(xₙₖ)| → ∞. So M = sup f is finite. Choose xₙ with f(xₙ) > M − 1/n; a subsequence converges to some c, and f(c) = M. ∎

Both theorems fail over ℚ (f(x) = x² − 2 changes sign on [0, 2] ∩ ℚ without vanishing) and on non-closed intervals (1/x on (0, 1] is unbounded). They are statements about completeness and compactness, not about continuity alone.

Uniform continuity

In the definition of continuity, δ may depend on both ε and the point a. f is uniformly continuous on D if one δ works for all points simultaneously. Examples:

  1. f(x) = x² is not uniformly continuous on ℝ: with xₙ = n + 1/n and yₙ = n, |xₙ − yₙ| → 0 but |f(xₙ) − f(yₙ)| = 2 + 1/n² > 2.
  2. f(x) = 1/x is not uniformly continuous on (0, 1): with xₙ = 1/n and yₙ = 1/(n + 1), |xₙ − yₙ| → 0 but |f(xₙ) − f(yₙ)| = 1.
  3. Every Lipschitz function, |f(x) − f(y)| ≤ K|x − y|, is uniformly continuous with δ = ε/K.
  4. f(x) = √x is uniformly continuous on [0, ∞), because |√x − √y| ≤ √|x − y| (take δ = ε²), but it is not Lipschitz near 0.

Theorem 4.4 (Heine–Cantor). A continuous function on a closed bounded interval is uniformly continuous.

Proof. If not, there is ε > 0 and points xₙ, yₙ with |xₙ − yₙ| < 1/n but |f(xₙ) − f(yₙ)| ≥ ε. By Bolzano–Weierstrass a subsequence xₙₖ → c, and then yₙₖ → c too. Continuity at c gives f(xₙₖ) − f(yₙₖ) → 0, a contradiction. ∎

Uniform continuity is exactly what allows a function on a bounded open interval to be extended continuously to the endpoints: a uniformly continuous f maps Cauchy sequences to Cauchy sequences, so the limits at the endpoints exist. This is why x sin(1/x) on (0, 1) is uniformly continuous (it extends continuously by 0 at x = 0), while sin(1/x) is not.

✏️ Your Turn

(a) For lim (x → 3) x² = 9, find a δ that works for ε = 0.1 using the restriction δ ≤ 1.
(b) Find an explicit δ, as a function of ε, proving lim (x → 1) (x² + x) = 2.
(c) Is f(x) = sin(1/x) uniformly continuous on (0, 1)? Is g(x) = x sin(1/x)?

Answers: (a) |x² − 9| = |x − 3||x + 3| < 7|x − 3| when |x − 3| < 1, so δ = min(1, 0.1/7) = 1/70 works. (b) |x² + x − 2| = |x − 1||x + 2| < 4|x − 1| when |x − 1| < 1, so δ = min(1, ε/4). (c) f is not: the points 1/(2πn) and 1/(2πn + π/2) get arbitrarily close while their values differ by 1. g is: it extends to a continuous function on [0, 1], which is uniformly continuous by Heine–Cantor.

─────────────────────────────────
Lesson 5: Differentiation and the Mean Value Theorem
─────────────────────────────────

📌 Key idea of this section:

        f′(a) = lim (h → 0) (f(a + h) − f(a))/h
        Mean value theorem:  f(b) − f(a) = f′(c)(b − a)  for some c ∈ (a, b)

The derivative and Carathéodory's formulation

Let f be defined on an open interval containing a. f is differentiable at a if the limit of the difference quotient (f(a + h) − f(a))/h as h → 0 exists; the limit is f′(a). An equivalent formulation, due to Carathéodory, is often more convenient in proofs: f is differentiable at a iff there is a function φ, continuous at a, with

        f(x) − f(a) = φ(x)(x − a)  for all x near a,

and then f′(a) = φ(a). (Define φ(x) as the difference quotient for x ≠ a and φ(a) = f′(a).) It shows at once that differentiability implies continuity, since f(x) − f(a) = φ(x)(x − a) → φ(a)·0 = 0.

Theorem 5.1 (Chain rule). If f is differentiable at a and g is differentiable at f(a), then g ∘ f is differentiable at a and (g ∘ f)′(a) = g′(f(a)) f′(a).

Proof. Write f(x) − f(a) = φ(x)(x − a) and g(y) − g(f(a)) = ψ(y)(y − f(a)) with φ continuous at a and ψ continuous at f(a). Then g(f(x)) − g(f(a)) = ψ(f(x)) φ(x)(x − a). The function x ↦ ψ(f(x))φ(x) is continuous at a, with value ψ(f(a))φ(a) = g′(f(a))f′(a). ∎

The naive proof, which multiplies and divides by f(x) − f(a), fails when f(x) = f(a) for x arbitrarily close to a; Carathéodory's form avoids the problem.

Rolle and the mean value theorem

Lemma 5.2 (Fermat). If f has a local maximum or minimum at an interior point c and f′(c) exists, then f′(c) = 0.

Proof. At a local maximum, the difference quotient is ≤ 0 for h > 0 and ≥ 0 for h < 0; the limit must be both. ∎

Theorem 5.3 (Rolle). If f is continuous on [a, b], differentiable on (a, b), and f(a) = f(b), then f′(c) = 0 for some c ∈ (a, b).

Proof. By the extreme value theorem f attains a maximum and a minimum on [a, b]. If both occur at endpoints, f is constant and any c works. Otherwise one occurs at an interior point c, and Fermat's lemma gives f′(c) = 0. ∎

Theorem 5.4 (Mean value theorem). If f is continuous on [a, b] and differentiable on (a, b), then f(b) − f(a) = f′(c)(b − a) for some c ∈ (a, b).

Proof. Apply Rolle to g(x) = f(x) − f(a) − ((f(b) − f(a))/(b − a))(x − a), which vanishes at both endpoints. ∎

Theorem 5.5 (Cauchy mean value theorem). If f, g are continuous on [a, b] and differentiable on (a, b), there is c ∈ (a, b) with (f(b) − f(a)) g′(c) = (g(b) − g(a)) f′(c).

Proof. Apply Rolle to h(x) = (f(b) − f(a))g(x) − (g(b) − g(a))f(x), for which h(a) = h(b). ∎

Consequences of the mean value theorem

The mean value theorem converts information about f′ into information about f. If f′ = 0 on an interval, f is constant there. If f′ > 0 on an interval, f is strictly increasing there. If |f′| ≤ K on an interval, f is K-Lipschitz there. For example, |sin x − sin y| = |cos c||x − y| ≤ |x − y| for all real x, y. The hypothesis "on an interval" is essential: f(x) = 1/x has f′ < 0 on its domain but is not decreasing on ℝ \ {0}.

Theorem 5.6 (L'Hôpital's rule). Suppose f, g are differentiable on (a, b), g′ ≠ 0 there, f(x) → 0 and g(x) → 0 as x → a⁺, and f′(x)/g′(x) → L. Then f(x)/g(x) → L as x → a⁺.

Proof. Extend f and g by 0 at a. For x ∈ (a, b), the Cauchy mean value theorem on [a, x] gives cₓ ∈ (a, x) with f(x)/g(x) = f′(cₓ)/g′(cₓ). As x → a⁺, cₓ → a⁺ and the right side tends to L. (Note g(x) ≠ 0, since otherwise Rolle would give a zero of g′.) ∎

Derivatives need not be continuous, yet have the intermediate value property

Let f(x) = x² sin(1/x) for x ≠ 0 and f(0) = 0. Then f′(0) = lim h sin(1/h) = 0, while for x ≠ 0,

        f′(x) = 2x sin(1/x) − cos(1/x),

which has no limit as x → 0. So f is differentiable everywhere, but f′ is discontinuous at 0. Nevertheless derivatives cannot have jump discontinuities:

Theorem 5.7 (Darboux, 1875). If f is differentiable on [a, b] and f′(a) < y < f′(b), then f′(c) = y for some c ∈ (a, b).

Proof. Let g(x) = f(x) − yx, so g′(a) < 0 < g′(b). The continuous function g attains a minimum on [a, b]. Since g′(a) < 0, g takes values smaller than g(a) just to the right of a; since g′(b) > 0, g takes values smaller than g(b) just to the left of b. So the minimum is at an interior point c, and g′(c) = 0 by Fermat's lemma. ∎

Consequently a function like sign(x) is not the derivative of anything on an interval containing 0. At the other extreme, Weierstrass showed in 1872 that a continuous function can fail to be differentiable at every single point; we construct such functions in Lesson 10.

✏️ Your Turn

(a) Find the number c given by the mean value theorem for f(x) = x³ on [0, 3].
(b) Prove that eˣ > 1 + x for all x ≠ 0 using the mean value theorem.
(c) Compute lim (x → 0) (x − sin x)/x³.

Answers: (a) (27 − 0)/3 = 9 = 3c², so c = √3 ≈ 1.732. (b) For x > 0, eˣ − 1 = e^c x with 0 < c < x, so e^c > 1 gives eˣ − 1 > x; for x < 0, eˣ − 1 = e^c x with x < c < 0, and e^c < 1 with x < 0 gives e^c x > x. (c) Applying L'Hôpital three times: (1 − cos x)/(3x²), then sin x/(6x), then cos x/6 → 1/6.

─────────────────────────────────
Lesson 6: Taylor's Theorem and the Remainder
─────────────────────────────────

📌 Key idea of this section:

        f(x) = ∑ₖ₌₀ⁿ f⁽ᵏ⁾(a)(x − a)ᵏ/k!  +  Rₙ(x)
        Lagrange:  Rₙ(x) = f⁽ⁿ⁺¹⁾(ξ)(x − a)ⁿ⁺¹/(n + 1)!   for some ξ between a and x

The Taylor polynomial

If f has n derivatives at a, its Taylor polynomial of degree n at a is Pₙ(x) = ∑ₖ₌₀ⁿ f⁽ᵏ⁾(a)(x − a)ᵏ/k!. It is the unique polynomial of degree ≤ n whose derivatives of orders 0 to n agree with those of f at a. Brook Taylor published the series in 1715; the question of how well Pₙ approximates f, i.e. the size of the remainder Rₙ = f − Pₙ, was first answered by Lagrange (1797).

Theorem 6.1 (Taylor's theorem, Lagrange remainder). Suppose f⁽ⁿ⁾ is continuous on the closed interval between a and x and f⁽ⁿ⁺¹⁾ exists on the open interval. Then there is ξ strictly between a and x with

        f(x) = Pₙ(x) + f⁽ⁿ⁺¹⁾(ξ)(x − a)ⁿ⁺¹/(n + 1)!.

Proof. Fix x ≠ a and choose M so that f(x) = Pₙ(x) + M(x − a)ⁿ⁺¹. Define, for t between a and x,

        g(t) = f(x) − ∑ₖ₌₀ⁿ f⁽ᵏ⁾(t)(x − t)ᵏ/k!  −  M(x − t)ⁿ⁺¹.

Then g(x) = 0 and g(a) = 0 by the choice of M. Differentiating, the sum telescopes: the derivative of ∑ₖ₌₀ⁿ f⁽ᵏ⁾(t)(x − t)ᵏ/k! equals f⁽ⁿ⁺¹⁾(t)(x − t)ⁿ/n!. Hence

        g′(t) = −f⁽ⁿ⁺¹⁾(t)(x − t)ⁿ/n! + (n + 1)M(x − t)ⁿ.

By Rolle there is ξ between a and x with g′(ξ) = 0, i.e. M = f⁽ⁿ⁺¹⁾(ξ)/(n + 1)!. ∎

Two other forms of the remainder are important. If f⁽ⁿ⁺¹⁾ is continuous (or merely Riemann integrable), the integral form

        Rₙ(x) = (1/n!) ∫ₐˣ f⁽ⁿ⁺¹⁾(t)(x − t)ⁿ dt

follows from the fundamental theorem of calculus by induction, integrating by parts at each step. If f is only n times differentiable at a, the Peano form says Rₙ(x) = o((x − a)ⁿ), meaning Rₙ(x)/(x − a)ⁿ → 0 as x → a. The Peano form is what makes Taylor expansion a tool for computing limits; the Lagrange and integral forms give explicit error bounds.

Computing limits with expansions

Using the standard expansions with Peano remainders, for example cos x = 1 − x²/2 + x⁴/24 + o(x⁴):

        lim (x → 0) (cos x − 1 + x²/2)/x⁴ = lim (x⁴/24 + o(x⁴))/x⁴ = 1/24.

Similarly sin x − x cos x = (x − x³/6) − (x − x³/2) + o(x³) = x³/3 + o(x³), so (sin x − x cos x)/x³ → 1/3. This is usually far quicker and less error-prone than repeated L'Hôpital.

Error bounds and the irrationality of e

For f(x) = eˣ at a = 0, every derivative is eˣ, so for 0 < x ≤ 1,

        0 < eˣ − ∑ₖ₌₀ⁿ xᵏ/k! = e^ξ xⁿ⁺¹/(n + 1)! < 3/(n + 1)!.

At x = 1 this gives 0 < e − ∑ₖ₌₀ⁿ 1/k! < 3/(n + 1)!, so the series converges to e very rapidly. The same estimate proves:

Theorem 6.2. e is irrational. (Euler proved this in 1737 using continued fractions; the short proof below is due to Fourier, 1815.)

Proof. Suppose e = p/q with p, q ∈ ℕ. Let x = q!(e − ∑ (k = 0 to q) 1/k!). Since q!e = (q − 1)!p and each q!/k! with k ≤ q is an integer, x is an integer. And

        0 < x = ∑ (k = q + 1 to ∞) q!/k! = 1/(q + 1) + 1/((q + 1)(q + 2)) + ... < ∑ⱼ₌₁^∞ 1/(q + 1)ʲ = 1/q ≤ 1.

No integer lies strictly between 0 and 1. Hence e is irrational. ∎

The remainder can be large even when the Taylor series converges

For ln(1 + x) at 0 the Taylor series is x − x²/2 + x³/3 − .... At x = 1 the Lagrange remainder is |Rₙ(1)| = (n!/(1 + ξ)ⁿ⁺¹)/(n + 1)! ≤ 1/(n + 1) → 0, so ln 2 = 1 − 1/2 + 1/3 − ..., confirming the sum of the alternating harmonic series. For x > 1 the series diverges, although ln(1 + x) is perfectly smooth there.

More strikingly, the Taylor series of a smooth function need not converge to the function at all. Let f(x) = e^(−1/x²) for x ≠ 0 and f(0) = 0. By induction, for x ≠ 0 each derivative has the form f⁽ⁿ⁾(x) = pₙ(1/x)e^(−1/x²) for a polynomial pₙ, and since e^(−1/x²) decays faster than any power of x, every derivative at 0 equals 0 (Problem 52). The Taylor series of f at 0 is identically 0, which converges everywhere but equals f only at x = 0. Functions equal to their Taylor series near every point are called real analytic; f is C^∞ but not analytic. The distinction disappears in complex analysis, where one complex derivative implies analyticity.

Higher-order extremum test

If f′(a) = ... = f⁽ⁿ⁻¹⁾(a) = 0 and f⁽ⁿ⁾(a) ≠ 0 with f⁽ⁿ⁾ continuous at a, then Taylor's theorem shows that f(x) − f(a) has the sign of f⁽ⁿ⁾(a)(x − a)ⁿ near a. So for even n, a is a strict local minimum if f⁽ⁿ⁾(a) > 0 and a strict local maximum if f⁽ⁿ⁾(a) < 0; for odd n, a is not an extremum. For f(x) = x⁴ at 0 (n = 4, f⁽⁴⁾ = 24) this detects the minimum that the second derivative test misses.

✏️ Your Turn

(a) Find the degree-3 Taylor polynomial of √(1 + x) at 0.
(b) Using the Lagrange bound 3/(n + 1)!, what is the least n for which ∑ₖ₌₀ⁿ 1/k! is guaranteed to approximate e within 10⁻⁶?
(c) Compute lim (x → 0) (eˣ − 1 − x − x²/2)/x³.

Answers: (a) 1 + x/2 − x²/8 + x³/16 (the coefficients are the binomial coefficients C(1/2, k)). (b) We need (n + 1)! > 3 × 10⁶. Since 9! = 362,880 and 10! = 3,628,800, n + 1 = 10, so n = 9. (c) eˣ − 1 − x − x²/2 = x³/6 + o(x³), so the limit is 1/6.

─────────────────────────────────
Lesson 7: The Riemann Integral via Darboux Sums
─────────────────────────────────

📌 Key idea of this section:

        L(f, P) = ∑ mᵢ Δxᵢ  ≤  ∫ₐᵇ f  ≤  U(f, P) = ∑ Mᵢ Δxᵢ
        f is integrable  ⇔  ∀ε > 0 ∃ partition P : U(f, P) − L(f, P) < ε

Upper and lower sums

Riemann defined his integral in his 1854 Habilitationsschrift on trigonometric series; the cleaner formulation with upper and lower sums is due to Darboux (1875). Let f be bounded on [a, b]. A partition P is a finite set a = x₀ < x₁ < ... < xₙ = b, with Δxᵢ = xᵢ − xᵢ₋₁. On the i-th subinterval put mᵢ = inf f and Mᵢ = sup f. The lower and upper sums are

        L(f, P) = ∑ᵢ₌₁ⁿ mᵢ Δxᵢ,     U(f, P) = ∑ᵢ₌₁ⁿ Mᵢ Δxᵢ.

Lemma 7.1. If Q ⊇ P (Q refines P) then L(f, P) ≤ L(f, Q) ≤ U(f, Q) ≤ U(f, P). Consequently L(f, P₁) ≤ U(f, P₂) for any two partitions.

Proof. It suffices to add one point x* to the subinterval [xᵢ₋₁, xᵢ]. The infimum over each half is at least mᵢ, so the lower sum can only increase; similarly the upper sum can only decrease. For two partitions, compare both with their common refinement P₁ ∪ P₂. ∎

Define the lower integral as sup over P of L(f, P) and the upper integral as inf over P of U(f, P). By the lemma, lower integral ≤ upper integral. f is Riemann integrable if they are equal, and the common value is ∫ₐᵇ f.

Theorem 7.2 (Riemann's criterion). A bounded f is integrable on [a, b] iff for every ε > 0 there is a partition P with U(f, P) − L(f, P) < ε.

Proof. If the condition holds, upper integral − lower integral ≤ U(f, P) − L(f, P) < ε for every ε. Conversely, if f is integrable, choose P₁ with L(f, P₁) > ∫f − ε/2 and P₂ with U(f, P₂) < ∫f + ε/2, and take P = P₁ ∪ P₂. ∎

Worked example: f(x) = x² on [0, 1]

With the uniform partition into n pieces, f is increasing, so mᵢ = ((i − 1)/n)² and Mᵢ = (i/n)². Using ∑ i² = n(n + 1)(2n + 1)/6,

        U(f, Pₙ) = (1/n³) ∑ᵢ₌₁ⁿ i² = (n + 1)(2n + 1)/(6n²),
        L(f, Pₙ) = (1/n³) ∑ᵢ₌₀ⁿ⁻¹ i² = (n − 1)(2n − 1)/(6n²),
        U − L = [(2n² + 3n + 1) − (2n² − 3n + 1)]/(6n²) = 1/n.

Both sums tend to 1/3, and U − L → 0, so ∫₀¹ x² dx = 1/3.

Which functions are integrable

Theorem 7.3. Every continuous function on [a, b] is integrable.

Proof. By Heine–Cantor, f is uniformly continuous: given ε > 0 there is δ with |f(x) − f(y)| < ε/(b − a) when |x − y| < δ. For any partition with all Δxᵢ < δ, the extreme value theorem gives Mᵢ − mᵢ < ε/(b − a), so U − L < ε. ∎

Theorem 7.4. Every monotone function on [a, b] is integrable.

Proof. For increasing f and the uniform partition into n parts, Mᵢ = f(xᵢ) and mᵢ = f(xᵢ₋₁), so U − L telescopes to (f(b) − f(a))(b − a)/n. ∎

A monotone function can have infinitely many discontinuities (at most countably many), so Theorem 7.4 already goes beyond continuity. Dirichlet's function is not integrable on [0, 1]: every subinterval contains rationals and irrationals, so L(f, P) = 0 and U(f, P) = 1 for every P. Thomae's function, on the other hand, is integrable with integral 0, although it is discontinuous at every rational: for ε > 0, only finitely many points have t(x) ≥ ε/2, and they can be enclosed in subintervals of total length less than ε/2.

The complete answer was found by Lebesgue in 1902. A set Z ⊆ ℝ has measure zero if for every ε > 0 it can be covered by countably many intervals of total length less than ε. Every countable set has measure zero (cover the n-th point by an interval of length ε/2ⁿ⁺¹), and so does the Cantor set, which is uncountable.

Theorem 7.5 (Lebesgue's criterion). A bounded function on [a, b] is Riemann integrable iff its set of discontinuities has measure zero.

This criterion explains all the examples at once: continuous and monotone functions have countably many discontinuities, Thomae's function has countably many, and Dirichlet's function is discontinuous everywhere.

Properties

The integral is linear and monotone; if f is integrable, so is |f|, and |∫f| ≤ ∫|f|; products of integrable functions are integrable; if f is integrable and φ is continuous, then φ ∘ f is integrable. Finally, Riemann's original definition with tagged sums agrees with Darboux's: f is integrable with integral I iff for every ε > 0 there is δ > 0 such that |∑ f(tᵢ)Δxᵢ − I| < ε for every partition with mesh max Δxᵢ < δ and every choice of tags tᵢ ∈ [xᵢ₋₁, xᵢ].

✏️ Your Turn

(a) For f(x) = x³ on [0, 2] with the uniform partition into n parts, compute U − L exactly, and find the least n for which U − L < 0.01.
(b) Let f(x) = 1 if x = 1/n for some n ∈ ℕ, and f(x) = 0 otherwise, on [0, 1]. Is f integrable? If so, find ∫₀¹ f.
(c) Show directly from the definition that a function which is 0 except at one point is integrable with integral 0.

Answers: (a) U − L = (f(2) − f(0))(2/n) = 16/n; we need n > 1600, so n = 1601. (b) Yes: the discontinuities are the points 1/n and 0, a countable set. Every lower sum is 0 (every subinterval contains points where f = 0), so the integral is 0. (c) If f = c at x* and 0 elsewhere, take a partition in which x* lies in subintervals of total length less than ε/|c|; then U − L < ε and every lower or upper sum lies within ε of 0.

─────────────────────────────────
Lesson 8: The Fundamental Theorem of Calculus
─────────────────────────────────

📌 Key idea of this section:

        FTC I:   F(x) = ∫ₐˣ f  is continuous, and F′(c) = f(c) wherever f is continuous
        FTC II:  if F′ = f on [a, b] and f is integrable, then ∫ₐᵇ f = F(b) − F(a)

The first fundamental theorem

Theorem 8.1. Let f be integrable on [a, b] and F(x) = ∫ₐˣ f(t) dt. Then F is Lipschitz, hence uniformly continuous, on [a, b]. If f is continuous at c ∈ (a, b), then F is differentiable at c and F′(c) = f(c).

Proof. If |f| ≤ M then |F(y) − F(x)| = |∫ₓʸ f| ≤ M|y − x|. Now suppose f is continuous at c. Given ε > 0 choose δ with |f(t) − f(c)| < ε for |t − c| < δ. For 0 < |h| < δ,

        |(F(c + h) − F(c))/h − f(c)| = |(1/h) ∫ from c to c + h of (f(t) − f(c)) dt| ≤ ε.

So the difference quotient tends to f(c). Hence F′(c) = f(c). ∎

If f has a jump at c, F has a corner there: for f = 0 on [0, 1) and f = 1 on [1, 2], F(x) = max(0, x − 1), which is not differentiable at 1. Integration smooths: it turns integrable functions into continuous ones and continuous functions into C¹ ones.

The second fundamental theorem

Theorem 8.2. If F is differentiable on [a, b] (one-sided at the endpoints) and F′ = f is Riemann integrable, then ∫ₐᵇ f = F(b) − F(a).

Proof. Let P be any partition. By the mean value theorem, on each subinterval F(xᵢ) − F(xᵢ₋₁) = f(tᵢ)Δxᵢ for some tᵢ, so

        F(b) − F(a) = ∑ᵢ (F(xᵢ) − F(xᵢ₋₁)) = ∑ᵢ f(tᵢ)Δxᵢ,

which lies between L(f, P) and U(f, P). Since this holds for every P, F(b) − F(a) is between the lower and upper integrals, which are both equal to ∫ₐᵇ f. ∎

Notice that the proof does not require f to be continuous, only integrable. The integrability hypothesis cannot be dropped: Volterra constructed in 1881 a function F that is differentiable everywhere with bounded derivative F′, yet F′ is not Riemann integrable (its discontinuities form a set of positive measure). For such a function the Riemann integral of F′ does not exist, although the Lebesgue integral does and recovers F (Lesson 14).

Consequences

Integration by parts: if u, v are C¹ on [a, b], then ∫ₐᵇ uv′ = [uv]ₐᵇ − ∫ₐᵇ u′v, from FTC II applied to (uv)′ = u′v + uv′. Substitution: if φ is C¹ on [α, β] and f is continuous on the range of φ, then

        ∫ from α to β of f(φ(t)) φ′(t) dt = ∫ from φ(α) to φ(β) of f(x) dx,

from FTC II applied to F ∘ φ, where F is an antiderivative of f. Combining FTC I with the chain rule gives the Leibniz rule for variable limits: if f is continuous and g, h differentiable,

        d/dx ∫ from h(x) to g(x) of f(t) dt = f(g(x)) g′(x) − f(h(x)) h′(x).

Worked example: d/dx ∫ from x to x² of e^(t²) dt = 2x e^(x⁴) − e^(x²).

Mean value theorem for integrals: if f is continuous and g ≥ 0 is integrable on [a, b], then ∫ₐᵇ fg = f(c) ∫ₐᵇ g for some c ∈ [a, b]. (The quantity ∫fg/∫g lies between min f and max f; apply the intermediate value theorem.) With g = 1, this says a continuous function attains its average value.

Worked example: compute lim (x → 0) (1/x³) ∫₀ˣ sin(t²) dt. By L'Hôpital and FTC I the limit equals lim sin(x²)/(3x²) = 1/3. Alternatively, sin(t²) = t² + O(t⁶) integrates to x³/3 + O(x⁷).

✏️ Your Turn

(a) Compute d/dx ∫₀^(x³) cos(t²) dt.
(b) Compute ∫₀^(π/2) x cos x dx.
(c) Let f be continuous on [0, 1] with ∫₀ˣ f = ∫ₓ¹ f for every x ∈ [0, 1]. Show f = 0.

Answers: (a) 3x² cos(x⁶). (b) Integrating by parts, [x sin x + cos x] from 0 to π/2 = (π/2 + 0) − (0 + 1) = π/2 − 1 ≈ 0.5708. (c) Differentiating both sides with FTC I gives f(x) = −f(x), so f(x) = 0.

─────────────────────────────────
Lesson 9: Improper Integrals
─────────────────────────────────

📌 Key idea of this section:

        ∫₁^∞ x⁻ᵖ dx < ∞  ⇔  p > 1          ∫₀¹ x⁻ᵖ dx < ∞  ⇔  p < 1
        Γ(s) = ∫₀^∞ tˢ⁻¹ e⁻ᵗ dt,   Γ(n + 1) = n!,   Γ(1/2) = √π

Definitions

The Riemann integral is defined only for bounded functions on bounded intervals. An improper integral extends it by a limit. If f is integrable on [a, R] for every R > a, define ∫ₐ^∞ f = lim (R → ∞) ∫ₐᴿ f when the limit exists (type I). If f is integrable on [a + η, b] for every η > 0 but unbounded near a, define ∫ₐᵇ f = lim (η → 0⁺) of ∫ from a + η to b of f (type II). An integral over (−∞, ∞) or with several bad points is split into pieces, each of which must converge separately.

The basic examples are computed directly: ∫₁ᴿ x⁻ᵖ dx = (R¹⁻ᵖ − 1)/(1 − p) for p ≠ 1 and ln R for p = 1, so ∫₁^∞ x⁻ᵖ dx converges iff p > 1, with value 1/(p − 1). Similarly ∫₀¹ x⁻ᵖ dx converges iff p < 1, with value 1/(1 − p). For instance ∫₀¹ dx/√x = 2.

Tests for convergence

For f ≥ 0 the function R ↦ ∫ₐᴿ f is increasing, so the integral converges iff it is bounded. This gives the comparison test (0 ≤ f ≤ g and ∫g < ∞ imply ∫f < ∞) and the limit comparison test, exactly as for series. Examples:

  1. ∫₁^∞ e^(−x²) dx converges, since e^(−x²) ≤ e⁻ˣ for x ≥ 1.
  2. ∫₀^∞ x²/(x⁴ + 1) dx converges: near ∞ the integrand behaves like 1/x², and on [0, 1] it is continuous.
  3. ∫₀^(π/2) dx/sin x diverges, since sin x ≤ x near 0 and ∫₀ dx/x diverges.

The Cauchy criterion also applies: ∫ₐ^∞ f converges iff for every ε > 0 there is R₀ with |∫ from R to S of f| < ε for all S > R > R₀. As with series, absolute convergence (∫|f| < ∞) implies convergence.

The integral test

Theorem 9.1 (Integral test). Let f be positive and decreasing on [1, ∞). Then ∑ f(n) converges iff ∫₁^∞ f converges. Moreover, the remainder satisfies ∫ from N + 1 to ∞ of f ≤ ∑ₙ₌N₊₁^∞ f(n) ≤ ∫ from N to ∞ of f.

Proof. On [n, n + 1], f(n + 1) ≤ f(x) ≤ f(n). Integrate and sum. ∎

The same comparison shows that γₙ = 1 + 1/2 + ... + 1/n − ln n is decreasing and bounded below by 0; its limit γ ≈ 0.57722 is the Euler–Mascheroni constant. It is unknown whether γ is irrational.

Conditional convergence: the Dirichlet integral

The integral ∫₀^∞ (sin x)/x dx converges (the integrand extends continuously to 1 at 0). Integrating by parts on [1, R],

        ∫₁ᴿ (sin x)/x dx = cos 1 − (cos R)/R − ∫₁ᴿ (cos x)/x² dx,

and the last integral converges absolutely. Its value is π/2, a classical result usually proved with complex analysis or by differentiating under the integral sign. But it is not absolutely convergent: on [kπ, (k + 1)π], |sin x|/x ≥ |sin x|/((k + 1)π), whose integral is 2/((k + 1)π), and ∑ 1/(k + 1) diverges. Such integrals are a major reason why the Lebesgue integral, which only handles absolutely integrable functions, does not simply replace improper Riemann integrals.

The Gamma function

For s > 0, Γ(s) = ∫₀^∞ tˢ⁻¹e⁻ᵗ dt converges: near 0 the integrand is at most tˢ⁻¹ (integrable since s − 1 > −1), and near ∞ it is at most Ce^(−t/2). Integrating by parts gives the functional equation Γ(s + 1) = sΓ(s), and Γ(1) = 1, so Γ(n + 1) = n! for every n ≥ 0. The substitution t = x² shows Γ(1/2) = 2∫₀^∞ e^(−x²) dx = √π, using the Gaussian integral proved in Lesson 13. Hence

        Γ(3/2) = √π/2,   Γ(5/2) = 3√π/4,   Γ(7/2) = 15√π/8.

Γ interpolates the factorial; by the Bohr–Mollerup theorem (1922) it is the only log-convex function on (0, ∞) with Γ(1) = 1 and Γ(s + 1) = sΓ(s).

Principal values

∫₋₁¹ dx/x does not converge as an improper integral, because ∫₀¹ dx/x diverges. Its Cauchy principal value, lim (η → 0⁺) (∫ from −1 to −η + ∫ from η to 1) of dx/x, equals 0 by symmetry. Principal values are an essential tool (the Hilbert transform, dispersion relations) but must not be confused with genuine convergence.

✏️ Your Turn

(a) Compute ∫₁^∞ (ln x)/x² dx.
(b) For which p does ∫₂^∞ dx/(x (ln x)ᵖ) converge?
(c) Compute Γ(5/2) to four decimal places, and Γ(5).

Answers: (a) By parts, [−(ln x)/x] from 1 to ∞ + ∫₁^∞ dx/x² = 0 + 1 = 1. (b) Substituting u = ln x gives ∫ from ln 2 to ∞ of u⁻ᵖ du, which converges iff p > 1. (c) Γ(5/2) = 3√π/4 ≈ 1.3293, and Γ(5) = 4! = 24.

─────────────────────────────────
Lesson 10: Uniform Convergence and the Interchange of Limits
─────────────────────────────────

📌 Key idea of this section:

        fₙ → f uniformly on D  ⇔  ‖fₙ − f‖ = sup over x ∈ D of |fₙ(x) − f(x)| → 0
        Uniform limits of continuous functions are continuous

Pointwise versus uniform

Many objects in analysis are defined as limits of functions: power series, Fourier series, solutions of differential equations obtained by iteration. A sequence of functions fₙ converges pointwise to f on D if fₙ(x) → f(x) for each x ∈ D. Pointwise convergence is too weak to preserve the basic properties of functions. On [0, 1], fₙ(x) = xⁿ converges pointwise to the function that is 0 on [0, 1) and 1 at x = 1: continuous functions with a discontinuous limit. Cauchy believed in 1821 that a convergent series of continuous functions has a continuous sum; Abel pointed out in 1826 that Fourier series provide counterexamples. The correct hypothesis, isolated by Seidel, Stokes and Weierstrass in the 1840s, is uniform convergence.

fₙ → f uniformly on D if for every ε > 0 there is N such that |fₙ(x) − f(x)| < ε for all n ≥ N and all x ∈ D simultaneously, i.e. ‖fₙ − f‖ → 0 in the sup norm. For xⁿ on [0, 1), ‖fₙ − 0‖ = 1 for every n, so the convergence is not uniform; on [0, r] with r < 1 it is uniform, since ‖fₙ‖ = rⁿ → 0.

Worked example: fₙ(x) = x/(1 + nx²) on ℝ. For x ≥ 0, the derivative (1 − nx²)/(1 + nx²)² vanishes at x = 1/√n, where fₙ = 1/(2√n). By symmetry ‖fₙ‖ = 1/(2√n) → 0, so fₙ → 0 uniformly. In contrast, gₙ(x) = nxe^(−nx) on [0, ∞) tends to 0 pointwise, but its maximum, at x = 1/n, is e⁻¹ for every n: not uniform.

Theorem 10.1 (Cauchy criterion for uniform convergence). (fₙ) converges uniformly on D iff for every ε > 0 there is N with ‖fₘ − fₙ‖ < ε for all m, n ≥ N.

Continuity

Theorem 10.2. If each fₙ is continuous at a and fₙ → f uniformly, then f is continuous at a.

Proof (the ε/3 argument). Given ε > 0 choose n with ‖fₙ − f‖ < ε/3, then δ with |fₙ(x) − fₙ(a)| < ε/3 for |x − a| < δ. For such x,

        |f(x) − f(a)| ≤ |f(x) − fₙ(x)| + |fₙ(x) − fₙ(a)| + |fₙ(a) − f(a)| < ε. ∎

Restated, uniform convergence permits the interchange lim (x → a) lim (n → ∞) fₙ(x) = lim (n → ∞) lim (x → a) fₙ(x). In functional-analytic language, the continuous functions on [a, b] with the sup norm form a complete normed space C[a, b], a Banach space.

Integration

Theorem 10.3. If fₙ are integrable on [a, b] and fₙ → f uniformly, then f is integrable and ∫ₐᵇ fₙ → ∫ₐᵇ f.

Proof. For any partition, U(f, P) − L(f, P) ≤ U(fₙ, P) − L(fₙ, P) + 2‖fₙ − f‖(b − a), which is small for suitable n and P; and |∫fₙ − ∫f| ≤ ‖fₙ − f‖(b − a). ∎

Without uniformity this fails. Let fₙ(x) = nx(1 − x²)ⁿ on [0, 1]. For each fixed x, fₙ(x) → 0 (for 0 < x < 1 the geometric factor (1 − x²)ⁿ beats the linear factor n). But

        ∫₀¹ nx(1 − x²)ⁿ dx = n/(2(n + 1)) → 1/2 ≠ 0.

Differentiation

Uniform convergence of fₙ says nothing about the derivatives. fₙ(x) = sin(nx)/√n → 0 uniformly on ℝ, but fₙ′(x) = √n cos(nx) does not converge at x = 0. For the sequence x/(1 + nx²) above, the limit is f = 0, but fₙ′(0) = 1 for every n. The correct theorem puts the uniformity on the derivatives:

Theorem 10.4. Let fₙ be differentiable on [a, b]. Suppose fₙ′ → g uniformly on [a, b] and (fₙ(x₀)) converges for some x₀. Then fₙ converges uniformly to a differentiable function f with f′ = g.

Proof sketch. Applying the mean value theorem to fₘ − fₙ gives |(fₘ − fₙ)(x) − (fₘ − fₙ)(x₀)| ≤ ‖fₘ′ − fₙ′‖(b − a), so (fₙ) is uniformly Cauchy. A second application, to difference quotients at a point c, shows that the difference quotients of fₙ at c converge uniformly in h, and Theorem 10.2's interchange-of-limits argument identifies f′(c) with g(c). ∎

The Weierstrass M-test

Theorem 10.5 (Weierstrass M-test). If |uₙ(x)| ≤ Mₙ for all x ∈ D and ∑ Mₙ < ∞, then ∑ uₙ converges absolutely and uniformly on D.

Proof. For m > n, ‖∑ₖ₌ₙ₊₁ᵐ uₖ‖ ≤ ∑ₖ₌ₙ₊₁ᵐ Mₖ, which tends to 0; apply the Cauchy criterion. ∎

For instance ∑ sin(nx)/n² converges uniformly on ℝ to a continuous function, and its termwise derivative ∑ cos(nx)/n does not converge uniformly, so Theorem 10.4 does not apply to it.

Continuous nowhere differentiable functions

In 1872 Weierstrass presented to the Berlin Academy the function:

        W(x) = ∑ₙ₌₀^∞ aⁿ cos(bⁿπx),    0 < a < 1,  b an odd integer,  ab > 1 + 3π/2.

By the M-test (Mₙ = aⁿ) W is continuous; Weierstrass proved it is differentiable nowhere. Hardy showed in 1916 that 0 < a < 1 and ab ≥ 1 suffice. A simpler example is the Takagi function T(x) = ∑ₙ₌₀^∞ 2⁻ⁿ d(2ⁿx), where d(x) is the distance from x to the nearest integer (Problem 55). Banach proved in 1931, using the Baire category theorem, that in a precise sense most continuous functions are nowhere differentiable. The geometric intuition that curves are smooth except at isolated corners is simply false.

Two further theorems

Theorem 10.6 (Dini, 1878). If fₙ are continuous on a closed bounded interval, fₙ(x) is increasing in n for every x, and the pointwise limit f is continuous, then the convergence is uniform.

Theorem 10.7 (Weierstrass approximation theorem, 1885). Every continuous function on [a, b] is a uniform limit of polynomials. An explicit construction on [0, 1] is given by the Bernstein polynomials Bₙ(x) = ∑ₖ₌₀ⁿ f(k/n) C(n, k) xᵏ(1 − x)ⁿ⁻ᵏ (Bernstein, 1912), whose convergence is a disguised form of the law of large numbers.

✏️ Your Turn

(a) Compute ‖fₙ‖ on [0, ∞) for fₙ(x) = x²e^(−nx), and decide whether fₙ → 0 uniformly.
(b) Does ∑ xⁿ/n² converge uniformly on [−1, 1]?
(c) Find lim (n → ∞) ∫₀¹ (n + x)/(n + x²) dx and justify the interchange.

Answers: (a) The derivative vanishes at x = 2/n, where fₙ = (4/n²)e⁻²; so ‖fₙ‖ = 4/(e²n²) → 0 and the convergence is uniform. (b) Yes, by the M-test with Mₙ = 1/n². (c) (n + x)/(n + x²) → 1 uniformly on [0, 1], since |(x − x²)/(n + x²)| ≤ 1/(4n); hence the limit is ∫₀¹ 1 dx = 1.

─────────────────────────────────
Lesson 11: Power Series
─────────────────────────────────

📌 Key idea of this section:

        ∑ cₙ(x − a)ⁿ has radius of convergence R with  1/R = lim sup |cₙ|^(1/n)
        Inside (a − R, a + R) it may be differentiated and integrated term by term

Radius of convergence

Theorem 11.1 (Cauchy–Hadamard). Let 1/R = lim sup |cₙ|^(1/n), with the conventions 1/0 = ∞ and 1/∞ = 0. Then ∑ cₙ(x − a)ⁿ converges absolutely for |x − a| < R and diverges for |x − a| > R. Moreover, it converges uniformly on every interval [a − r, a + r] with r < R.

Proof. Apply the root test: lim sup |cₙ(x − a)ⁿ|^(1/n) = |x − a|/R, which is < 1 or > 1 as stated. For uniformity on |x − a| ≤ r < R, choose r < ρ < R; then |cₙ| ≤ ρ⁻ⁿ for large n, and the M-test applies with Mₙ = (r/ρ)ⁿ. ∎

The formula was stated by Cauchy in 1821 and rediscovered by Hadamard in 1888. When the ratio |cₙ/cₙ₊₁| has a limit, that limit is R, which is often easier to compute. Examples: ∑ xⁿ/n! has R = ∞; ∑ n! xⁿ has R = 0; ∑ (2ⁿ/n) xⁿ has R = 1/2; ∑ ((n!)²/(2n)!) xⁿ has R = 4, since the ratio of consecutive coefficients is (n + 1)²/((2n + 1)(2n + 2)) → 1/4.

On the boundary |x − a| = R anything can happen. ∑ xⁿ diverges at both endpoints of (−1, 1); ∑ xⁿ/n converges at −1 (alternating harmonic) and diverges at 1; ∑ xⁿ/n² converges at both.

Termwise differentiation and integration

Theorem 11.2. Let f(x) = ∑ cₙ(x − a)ⁿ with radius R > 0. Then f is differentiable on (a − R, a + R) with f′(x) = ∑ ncₙ(x − a)ⁿ⁻¹, and this series also has radius R. Consequently f is C^∞ there, cₙ = f⁽ⁿ⁾(a)/n!, and f is the sum of its own Taylor series.

Proof. Since n^(1/n) → 1, the differentiated series has the same lim sup and hence the same radius. It converges uniformly on compact subintervals by Theorem 11.1, so Theorem 10.4 applies. Iterating gives all derivatives, and evaluating the k-th derivative at a gives f⁽ᵏ⁾(a) = k! cₖ. ∎

This turns power series into a calculus of their own. From 1/(1 − x) = ∑ xⁿ (|x| < 1):

  1. Differentiating: ∑ₙ₌₁^∞ nxⁿ⁻¹ = 1/(1 − x)², so ∑ nxⁿ = x/(1 − x)² and ∑ n/2ⁿ = 2.
  2. Differentiating again: ∑ n²xⁿ = x(1 + x)/(1 − x)³, so ∑ n²/2ⁿ = (1/2)(3/2)/(1/8) = 6.
  3. Integrating: −ln(1 − x) = ∑ₙ₌₁^∞ xⁿ/n for |x| < 1.
  4. Replacing x by −x² and integrating: arctan x = ∑ₙ₌₀^∞ (−1)ⁿx²ⁿ⁺¹/(2n + 1) for |x| < 1.

Abel's theorem

The arctangent series converges at x = 1 by the Leibniz test. Does it converge to arctan 1 = π/4? Theorem 11.2 says nothing at the boundary. The answer is given by:

Theorem 11.3 (Abel, 1826). If ∑ cₙ converges, then ∑ cₙxⁿ converges uniformly on [0, 1], and hence lim (x → 1⁻) ∑ cₙxⁿ = ∑ cₙ.

Proof sketch. Let rₙ = ∑ (k > n) cₖ be the tails, which tend to 0. Summation by parts expresses ∑ₖ₌ₘⁿ cₖxᵏ in terms of the rₖ and the decreasing nonnegative numbers xᵏ, and gives |∑ₖ₌ₘⁿ cₖxᵏ| ≤ 2 max over k ≥ m − 1 of |rₖ|, uniformly in x ∈ [0, 1]. ∎

Consequently:

        1 − 1/3 + 1/5 − 1/7 + ... = π/4,     1 − 1/2 + 1/3 − 1/4 + ... = ln 2.

The first identity was found by Madhava of Sangamagrama (c. 1400) and rediscovered by Gregory (1671) and Leibniz (1674). The converse of Abel's theorem fails: ∑ (−1)ⁿxⁿ = 1/(1 + x) → 1/2 as x → 1⁻, but ∑ (−1)ⁿ diverges. Partial converses with extra hypotheses (such as cₙ = O(1/n), Littlewood 1911) are called Tauberian theorems and are deep.

Why the radius is what it is

The function 1/(1 + x²) is smooth on all of ℝ, yet its series ∑ (−1)ⁿx²ⁿ has radius 1. The explanation is invisible on the real line: as a function of a complex variable, 1/(1 + z²) has poles at z = ±i, at distance 1 from the origin. In general the radius of the Taylor series of an analytic function at a is the distance from a to the nearest complex singularity. This is one of the first places where real analysis points to complex analysis.

The binomial series

For real α and |x| < 1, (1 + x)^α = ∑ₙ₌₀^∞ C(α, n) xⁿ, where C(α, n) = α(α − 1)...(α − n + 1)/n!. The ratio test gives R = 1 when α is not a nonnegative integer. To prove the series converges to (1 + x)^α, let g(x) be its sum; termwise differentiation gives (1 + x)g′(x) = αg(x), so g(x)/(1 + x)^α has zero derivative and equals its value 1 at x = 0.

✏️ Your Turn

(a) Find the radius of convergence of ∑ (n²/3ⁿ) xⁿ.
(b) Find the radius of convergence of ∑ x²ⁿ/4ⁿ, and its sum.
(c) Use ∑ n²xⁿ = x(1 + x)/(1 − x)³ to evaluate ∑ₙ₌₁^∞ n²/3ⁿ.

Answers: (a) |cₙ|^(1/n) = n^(2/n)/3 → 1/3, so R = 3. (b) It is the geometric series in x²/4, so it converges iff x² < 4: R = 2, with sum 1/(1 − x²/4) = 4/(4 − x²). (c) At x = 1/3: (1/3)(4/3)/(2/3)³ = (4/9)(27/8) = 3/2.

─────────────────────────────────
Lesson 12: Differentiation in Several Variables
─────────────────────────────────

📌 Key idea of this section:

        f(a + h) = f(a) + Df(a)h + o(|h|),   Df(a) a linear map ℝⁿ → ℝᵐ
        Inverse function theorem: f ∈ C¹ and det Df(a) ≠ 0  ⇒  f is locally invertible with C¹ inverse

The total derivative

For functions of several variables, the difference quotient cannot be formed (one cannot divide by a vector), so the derivative is defined as a linear approximation. Let U ⊆ ℝⁿ be open and f: U → ℝᵐ. f is differentiable at a ∈ U if there is a linear map T: ℝⁿ → ℝᵐ with

        lim (h → 0) |f(a + h) − f(a) − Th| / |h| = 0.

T is unique, written Df(a), and its matrix with respect to the standard bases is the Jacobian matrix of partial derivatives (∂fᵢ/∂xⱼ)(a). If f is differentiable at a then it is continuous at a and every directional derivative exists: Dᵤf(a) = Df(a)u. For real-valued f this is ∇f(a)·u, which shows that ∇f points in the direction of steepest increase.

Partial derivatives are not enough

The existence of all partial derivatives does not imply differentiability, or even continuity. Let

        f(x, y) = xy/(x² + y²) for (x, y) ≠ (0, 0),   f(0, 0) = 0.

f vanishes on both axes, so ∂f/∂x(0, 0) = ∂f/∂y(0, 0) = 0. But f(t, t) = 1/2 for every t ≠ 0, so f is not even continuous at the origin. The right sufficient condition is:

Theorem 12.1. If all partial derivatives of f exist near a and are continuous at a, then f is differentiable at a.

Proof idea. Move from a to a + h one coordinate at a time and apply the one-variable mean value theorem along each step; continuity of the partials at a makes the error o(|h|). ∎

Such f are called C¹. The chain rule takes the form D(g ∘ f)(a) = Dg(f(a)) Df(a), a product of matrices; its proof is the multivariable version of Carathéodory's argument.

Mixed partial derivatives

Theorem 12.2 (Schwarz–Clairaut). If ∂²f/∂x∂y and ∂²f/∂y∂x exist near a and are continuous at a, they are equal at a.

Continuity cannot be dropped. Let f(x, y) = xy(x² − y²)/(x² + y²) with f(0, 0) = 0. Then ∂f/∂x(0, y) = −y and ∂f/∂y(x, 0) = x, so

        ∂/∂y (∂f/∂x)(0, 0) = −1,     ∂/∂x (∂f/∂y)(0, 0) = 1.

The inverse function theorem

Theorem 12.3 (Inverse function theorem). Let f: U → ℝⁿ be C¹ on an open U ⊆ ℝⁿ, and suppose Df(a) is invertible. Then there are open sets V ∋ a and W ∋ f(a) such that f maps V bijectively onto W, the inverse g: W → V is C¹, and Dg(f(a)) = Df(a)⁻¹.

Proof sketch. Replacing f by Df(a)⁻¹(f(a + x) − f(a)), we may assume a = 0, f(0) = 0 and Df(0) = I. For y near 0, solving f(x) = y is the same as finding a fixed point of φᵧ(x) = x − f(x) + y. Since Dφᵧ(x) = I − Df(x) is small near 0 (continuity of Df), the mean value inequality makes φᵧ a contraction on a small closed ball, which it maps into itself when |y| is small. By the Banach fixed point theorem it has a unique fixed point. Differentiability of the inverse then follows from the definition, and Dg = (Df ∘ g)⁻¹ is continuous because matrix inversion is. ∎

The theorem is purely local. The map f(x, y) = (eˣ cos y, eˣ sin y) has Jacobian determinant e²ˣ > 0 everywhere, so it is locally invertible at every point, but it is not globally injective (f is 2π-periodic in y).

The implicit function theorem

Theorem 12.4 (Implicit function theorem). Let F: ℝⁿ × ℝᵐ → ℝᵐ be C¹ near (a, b), with F(a, b) = 0 and the m × m matrix D_yF(a, b) invertible. Then there is a C¹ function g defined near a with g(a) = b such that, near (a, b), F(x, y) = 0 iff y = g(x). Its derivative is

        Dg(a) = −D_yF(a, b)⁻¹ D_xF(a, b).

Proof. Apply the inverse function theorem to (x, y) ↦ (x, F(x, y)), whose Jacobian is block triangular with determinant det D_yF(a, b) ≠ 0. ∎

Worked example: the circle x² + y² = 1 near (0.6, 0.8). Here ∂F/∂y = 2y = 1.6 ≠ 0, so y is locally a C¹ function of x with dy/dx = −F_x/F_y = −x/y = −0.75. At (1, 0), ∂F/∂y = 0 and indeed y is not a function of x near that point.

Extrema and Lagrange multipliers

At an interior local extremum of a differentiable f: U → ℝ, ∇f = 0. If f is C², the Hessian matrix H = (∂²f/∂xᵢ∂xⱼ) decides the nature of a critical point: positive definite gives a strict local minimum, negative definite a strict local maximum, indefinite a saddle. For extrema of f subject to a constraint g = 0 with ∇g ≠ 0, the implicit function theorem lets one parametrise the constraint set locally, and one obtains the Lagrange condition ∇f = λ∇g. Example: on the sphere x² + y² + z² = 9, the maximum of x + 2y + 2z occurs where (1, 2, 2) = λ(2x, 2y, 2z), i.e. at (1, 2, 2), with value 1 + 4 + 4 = 9 (equivalently, by Cauchy–Schwarz, |(1, 2, 2)|·3 = 9).

✏️ Your Turn

(a) Compute the Jacobian determinant of (u, v) = (x² − y², 2xy).
(b) The equation xyz + x + y + z = 4 defines z as a function of (x, y) near (1, 1, 1). Find ∂z/∂x there.
(c) Find the directional derivative of f(x, y) = x²y at (1, 2) in the direction of (3, 4).

Answers: (a) det [[2x, −2y], [2y, 2x]] = 4x² + 4y² = 4(x² + y²). (b) ∂z/∂x = −F_x/F_z = −(yz + 1)/(xy + 1) = −2/2 = −1. (c) ∇f = (2xy, x²) = (4, 1), and the unit vector is (3/5, 4/5), so the derivative is 12/5 + 4/5 = 16/5 = 3.2.

─────────────────────────────────
Lesson 13: Multiple Integrals and Change of Variables
─────────────────────────────────

📌 Key idea of this section:

        ∫ over φ(U) of f(x) dx  =  ∫ over U of f(φ(u)) |det Dφ(u)| du
        Polar coordinates: dx dy = r dr dθ

Integrals over rectangles and Fubini's theorem

The Riemann integral over a rectangle Q = [a₁, b₁] × ... × [aₙ, bₙ] is defined exactly as in one variable, with partitions into subrectangles and volumes in place of lengths. Lebesgue's criterion carries over: a bounded f is integrable iff its discontinuities form a set of n-dimensional measure zero. A bounded set S is Jordan measurable if its boundary has measure zero; then ∫ over S of f is defined as the integral over a rectangle of f times the indicator of S.

Theorem 13.1 (Fubini, for Riemann integrals). If f is continuous on Q = [a, b] × [c, d], then

        ∫∫ over Q of f = ∫ₐᵇ (∫ from c to d of f(x, y) dy) dx = ∫ from c to d of (∫ₐᵇ f(x, y) dx) dy.

More generally, if f is integrable on Q and each inner integral exists, the iterated integral equals the double integral. The hypotheses matter. Consider f(x, y) = (x² − y²)/(x² + y²)² on (0, 1]². Since ∂/∂y (y/(x² + y²)) = (x² − y²)/(x² + y²)²,

        ∫₀¹ (x² − y²)/(x² + y²)² dy = 1/(1 + x²),   so   ∫₀¹ ∫₀¹ f dy dx = ∫₀¹ dx/(1 + x²) = π/4,

and by the antisymmetry f(y, x) = −f(x, y), the other order gives −π/4. The function is unbounded near the origin and ∫∫|f| = ∞, so neither the Riemann nor the Lebesgue version of Fubini's theorem applies. (Fubini proved the Lebesgue version in 1907; Tonelli's theorem covers nonnegative functions without any integrability assumption.)

The change of variables theorem

Theorem 13.2. Let U ⊆ ℝⁿ be open, φ: U → ℝⁿ a C¹ injective map with det Dφ(u) ≠ 0 on U, and f integrable on φ(U). Then

        ∫ over φ(U) of f(x) dx = ∫ over U of f(φ(u)) |det Dφ(u)| du.

The factor |det Dφ| is the local volume scaling: a linear map T multiplies volumes by |det T|, and near u the map φ is approximately the linear map Dφ(u). The proof approximates U by small cubes, uses the linear case on each, and controls the error with uniform continuity of Dφ; alternatively, one reduces to the case where φ changes one coordinate at a time.

The standard coordinate systems:

        polar:        x = r cos θ, y = r sin θ,                 |det Dφ| = r
        cylindrical:  x = r cos θ, y = r sin θ, z = z,          |det Dφ| = r
        spherical:    x = ρ sin φ cos θ, y = ρ sin φ sin θ, z = ρ cos φ,   |det Dφ| = ρ² sin φ

Worked example: the Gaussian integral

Let I = ∫ from −∞ to ∞ of e^(−x²) dx. Then, using Tonelli's theorem to write the square as a double integral, and polar coordinates,

        I² = ∫∫ over ℝ² of e^(−(x² + y²)) dx dy = ∫₀^(2π) ∫₀^∞ e^(−r²) r dr dθ = 2π · (1/2) = π,

so I = √π. (A fully Riemann-integral proof compares the squares [−R, R]² with the discs of radii R and R√2; see Problem 53.) This integral is the normalising constant of the normal distribution, and it gives Γ(1/2) = √π.

Volumes of balls

Integrating e^(−|x|²) over ℝⁿ in two ways (as a product, πⁿ/², and in spherical shells) shows that the volume of the n-dimensional ball of radius r is

        Vₙ(r) = πⁿ/² rⁿ / Γ(n/2 + 1).

Check: V₂ = πr², V₃ = π^(3/2) r³/((3/4)√π) = (4/3)πr³, and V₄ = (π²/2) r⁴. For the unit ball, Vₙ increases up to n = 5 (V₅ = 8π²/15 ≈ 5.264) and then decreases to 0, since the Gamma function grows faster than any exponential. In high dimension almost all of the volume of a ball lies near its surface, a fact of real importance in statistics and data science.

Toward Stokes' theorem

The fundamental theorem of calculus has higher-dimensional generalisations: Green's theorem in the plane, the divergence theorem and Stokes' theorem in ℝ³. All are special cases of the general Stokes theorem for differential forms on oriented manifolds with boundary,

        ∫ over ∂M of ω = ∫ over M of dω,

which says that integrating a derivative over a region equals integrating the original object over its boundary. FTC II is the case where M = [a, b] is a 1-manifold with boundary {a, b} and ω = F is a function.

✏️ Your Turn

(a) Compute the integral of e^(−(x² + y²)) over the disc x² + y² ≤ 4, to four decimal places.
(b) Use u = x + y, v = x − y to compute ∫∫ over R of (x + y)² dA, where R is the square |x + y| ≤ 1, |x − y| ≤ 1.
(c) Compute ∫∫ over the unit disc of (x² + y²) dA.

Answers: (a) ∫₀^(2π) ∫₀² e^(−r²) r dr dθ = π(1 − e⁻⁴) ≈ 3.0841. (b) The Jacobian of (u, v) ↦ (x, y) has absolute determinant 1/2, so the integral is (1/2)∫₋₁¹∫₋₁¹ u² du dv = (1/2)(2/3)(2) = 2/3. (c) ∫₀^(2π) ∫₀¹ r² · r dr dθ = 2π/4 = π/2.

─────────────────────────────────
Lesson 14: The Lebesgue Integral — An Overview
─────────────────────────────────

📌 Key idea of this section:

        Dominated convergence: fₙ → f a.e. and |fₙ| ≤ g with ∫g < ∞  ⇒  ∫fₙ → ∫f
        Riemann integrable ⇒ Lebesgue integrable, with the same integral

Why the Riemann integral is not enough

The Riemann integral has three serious defects. First, it is not closed under limits: enumerate the rationals in [0, 1] as q₁, q₂, ... and let fₙ be the indicator of {q₁, ..., qₙ}. Each fₙ is integrable with integral 0, fₙ increases to Dirichlet's function, and the limit is not Riemann integrable. Second, the convergence theorems require uniform convergence, which is rarely available in practice (for example in the theory of Fourier series or probability). Third, the space of Riemann integrable functions with the distance ∫|f − g| is not complete, so it cannot serve as a foundation for functional analysis. Lebesgue's 1902 thesis, "Intégrale, longueur, aire", removed all three defects.

The idea is to partition the range instead of the domain. Instead of asking for the value of f on small intervals of x, ask for the size of the set where f lies in a small interval of y. That requires assigning a size to sets far more complicated than intervals.

Lebesgue measure

The Lebesgue outer measure of A ⊆ ℝ is m*(A) = inf ∑ ℓ(Iₖ), the infimum over all countable covers of A by open intervals Iₖ. A set E is measurable if m*(A) = m*(A ∩ E) + m*(A \ E) for every A (Carathéodory's criterion). The measurable sets form a σ-algebra (closed under complements and countable unions) containing all intervals, and on it m = m* is countably additive: m(⋃ Eₖ) = ∑ m(Eₖ) for pairwise disjoint Eₖ. Countable sets have measure 0; the Cantor set is uncountable with measure 0. Assuming the axiom of choice, Vitali (1905) constructed a nonmeasurable subset of [0, 1], so some restriction to measurable sets is unavoidable.

A function f is measurable if {x : f(x) > c} is measurable for every c. A property holds almost everywhere (a.e.) if it fails only on a set of measure zero.

The integral

For a simple function s = ∑ cₖ 1(Eₖ) (finitely many values cₖ ≥ 0 on measurable sets Eₖ) define ∫s = ∑ cₖ m(Eₖ). For measurable f ≥ 0 define ∫f = sup{∫s : s simple, 0 ≤ s ≤ f}, a number in [0, ∞]. A measurable f is Lebesgue integrable if ∫|f| < ∞, and then ∫f = ∫f⁺ − ∫f⁻. With this definition the integral of Dirichlet's function over [0, 1] is 0, because ℚ ∩ [0, 1] has measure 0.

The three convergence theorems

Theorem 14.1 (Monotone convergence). If 0 ≤ f₁ ≤ f₂ ≤ ... are measurable and fₙ → f pointwise, then ∫fₙ → ∫f.

Theorem 14.2 (Fatou's lemma). If fₙ ≥ 0 are measurable, then ∫ lim inf fₙ ≤ lim inf ∫fₙ.

Theorem 14.3 (Dominated convergence). If fₙ → f a.e., and |fₙ| ≤ g for all n with g integrable, then f is integrable and ∫|fₙ − f| → 0; in particular ∫fₙ → ∫f.

Proof of 14.3 from Fatou. Apply Fatou's lemma to the nonnegative functions 2g − |fₙ − f|. Since |fₙ − f| → 0 a.e., this gives ∫2g ≤ ∫2g − lim sup ∫|fₙ − f|, so lim sup ∫|fₙ − f| ≤ 0. ∎

The example fₙ = n·1((0, 1/n)) shows that domination cannot be omitted: fₙ → 0 everywhere, but ∫fₙ = 1 for every n. No integrable g dominates all fₙ, since sup fₙ ≥ 1/(2x) on (0, 1/2), which is not integrable.

Worked examples

By monotone convergence, since (1 − x/n)ⁿ·1([0, n]) increases to e⁻ˣ,

        lim (n → ∞) ∫₀ⁿ (1 − x/n)ⁿ dx = ∫₀^∞ e⁻ˣ dx = 1.

(Indeed the integral equals n/(n + 1) exactly.) By dominated convergence, with dominating function 1/(1 + x²) (since |sin u| ≤ |u|),

        lim (n → ∞) ∫₀^∞ n sin(x/n) / (x(1 + x²)) dx = ∫₀^∞ dx/(1 + x²) = π/2.

Differentiation under the integral sign is a corollary: if ∂f/∂t exists and |∂f/∂t(x, t)| ≤ g(x) with g integrable, then d/dt ∫f(x, t) dx = ∫ ∂f/∂t(x, t) dx, by dominated convergence applied to difference quotients and the mean value theorem.

Relation to the Riemann integral

Every Riemann integrable function on [a, b] is Lebesgue integrable with the same integral, so nothing is lost. Absolutely convergent improper Riemann integrals are Lebesgue integrals; conditionally convergent ones, such as ∫₀^∞ (sin x)/x dx, are not, since the Lebesgue integral requires ∫|f| < ∞. The space L¹ of integrable functions, with functions equal a.e. identified, is complete with respect to ‖f‖₁ = ∫|f| (Riesz–Fischer), and the same holds for Lᵖ with 1 ≤ p ≤ ∞.

The fundamental theorem, revisited

Theorem 14.4 (Lebesgue differentiation theorem). If f is integrable on [a, b] and F(x) = ∫ₐˣ f, then F′(x) = f(x) for almost every x.

The converse direction requires care. The Cantor function c: [0, 1] → [0, 1] is continuous and increasing, constant on each interval removed in constructing the Cantor set, so c′ = 0 a.e.; yet c(1) − c(0) = 1 ≠ 0 = ∫₀¹ c′. The correct class is the absolutely continuous functions: F(b) − F(a) = ∫ₐᵇ F′ holds iff F is absolutely continuous, which in particular covers every Lipschitz function and every everywhere-differentiable F with bounded derivative, such as Volterra's function. With this the two halves of the fundamental theorem, first discovered by Newton and Leibniz for smooth functions, attain their final and sharpest form.

✏️ Your Turn

(a) Compute ∫₀¹ nx/(1 + n²x²) dx exactly, find its limit as n → ∞, and confirm the answer with dominated convergence.
(b) Compute lim (n → ∞) ∫₀^∞ e^(−x) cos(x/n) dx.
(c) Is the indicator of the Cantor set Riemann integrable? Lebesgue integrable? What is its integral?

Answers: (a) The integral equals ln(1 + n²)/(2n), which tends to 0. The integrands tend to 0 pointwise, and the maximum of nx/(1 + n²x²) is 1/2 (at x = 1/n), so the constant 1/2 is a dominating function on [0, 1] and dominated convergence also gives the limit 0. (b) The integrand is dominated by e⁻ˣ and tends to e⁻ˣ, so the limit is 1. (c) Both: its discontinuities are exactly the Cantor set, which has measure 0, so it is Riemann integrable (Lebesgue's criterion), and both integrals are 0.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The sixty problems below are graded in three groups. The Core problems check the definitions and standard computations of each lesson. The Advanced problems require a short proof or a multi-step calculation. The Challenge problems are proofs of theorems that were only stated or sketched in the lessons, together with some classical computations; each could be an exercise in a first-year graduate course. Complete worked answers follow in the Answer Key.

Core (Problems 1–20)

  1. Find sup and inf of A = {n/(n + 1) : n ∈ ℕ} and of B = {x ∈ ℚ : x² < 3}, the latter computed in ℝ. Which are attained?
  2. Prove from the definition that aₙ = (2n² + 1)/(n² + 3) converges to 2, and find the least N with |aₙ − 2| < 0.001 for all n ≥ N.
  3. Let a₁ = 0 and aₙ₊₁ = √(12 + aₙ). Prove that (aₙ) converges and find its limit.
  4. For aₙ = (1 + (−1)ⁿ)/2 + 1/n, find sup aₙ, inf aₙ, lim sup aₙ and lim inf aₙ.
  5. Does ∑ n/(n³ + 1) converge? Justify.
  6. Show that ∑ₙ₌₀^∞ 3ⁿ/n! converges and find its sum to four decimal places.
  7. Find the sum of ∑ₙ₌₁^∞ 1/(n(n + 2)).
  8. Find the interval of convergence of ∑ₙ₌₁^∞ (2ⁿ/n) xⁿ, including the behaviour at the endpoints.
  9. Find an explicit δ(ε) proving lim (x → 2) 1/x = 1/2.
 10. Prove that f(x) = 1/x is uniformly continuous on [1, ∞) but not on (0, 1].
 11. Find the number c given by the mean value theorem for f(x) = x² + 2x on [1, 4].
 12. Compute lim (x → 0) (1 − cos x)/x² and lim (x → 0⁺) x ln x.
 13. Find the Maclaurin polynomial of degree 4 of eˣ cos x.
 14. For f(x) = x² on [0, 1] with the uniform partition into n parts, U − L = 1/n. Find the least n with U − L < 10⁻³.
 15. Compute d/dx ∫ from sin x to 1 of √(1 + t²) dt.
 16. Compute ∫₀¹ x eˣ dx.
 17. Evaluate the improper integrals ∫₁^∞ x⁻³ dx and ∫₀¹ x^(−1/3) dx.
 18. Does fₙ(x) = xⁿ converge uniformly on [0, 1/2]? On [0, 1)?
 19. Find the Jacobian matrix and Jacobian determinant of f(x, y) = (x²y, x + y³) at (1, 2).
 20. Compute ∫∫ over the disc x² + y² ≤ 4 of √(x² + y²) dA.

Advanced (Problems 21–45)

 21. Using only the least upper bound property, prove that every nonempty subset of ℝ that is bounded below has an infimum.
 22. Prove that every Cauchy sequence is bounded, and that a Cauchy sequence with a convergent subsequence converges (in any metric space).
 23. Decide the convergence of ∑ n!/nⁿ and of ∑ nⁿ/n!.
 24. Decide the convergence of ∑ (n/(n + 1))^(n²).
 25. For which p > 0 does ∑ₙ₌₂^∞ 1/(n (ln n)ᵖ) converge?
 26. Find the sum of the rearrangement 1 + 1/3 − 1/2 + 1/5 + 1/7 − 1/4 + 1/9 + 1/11 − 1/6 + ... of the alternating harmonic series (two positive terms, then one negative).
 27. Prove that |sin 1 + sin 2 + ... + sin n| ≤ 1/sin(1/2) for all n, and deduce that ∑ sin(n)/n converges.
 28. Prove that Thomae's function is continuous at every irrational and discontinuous at every rational.
 29. Prove that √x is uniformly continuous on [0, ∞) but not Lipschitz on [0, 1].
 30. Let f(x) = x² sin(1/x) and g(x) = x sin(1/x) for x ≠ 0, with f(0) = g(0) = 0. Show f′(0) exists but f′ is not continuous at 0, and that g′(0) does not exist.
 31. Prove that there is no function f on [−1, 1] with f′(x) = −1 for x < 0 and f′(x) = 1 for x ≥ 0.
 32. Prove that eˣ > 1 + x + x²/2 for x > 0 and eˣ < 1 + x + x²/2 for x < 0.
 33. Approximate ln(1.2) by its degree-3 Taylor polynomial at 0, and bound the error using the Lagrange remainder.
 34. Compute lim (x → 0) (tan x − x)/x³ and lim (x → 0) (1/sin²x − 1/x²).
 35. For f(x) = √x on [0, 4] with the uniform partition into n parts, compute U − L, and find the least n with U − L < 0.01.
 36. Prove that ∫₀^∞ (sin x)/x dx converges but ∫₀^∞ |sin x|/x dx diverges.
 37. Compute Γ(7/2) and ∫₀^∞ x⁴e^(−x²) dx in terms of √π, and give decimal values.
 38. Compute lim (n → ∞) ∫₀¹ nx(1 − x²)ⁿ dx, find the pointwise limit of the integrands, and explain why the convergence is not uniform.
 39. Let fₙ(x) = x/(1 + nx²). Show fₙ → 0 uniformly on ℝ but fₙ′(0) does not converge to the derivative of the limit.
 40. Find the radius of convergence of ∑ ((n!)²/(2n)!) xⁿ.
 41. Derive a closed form for ∑ₙ₌₁^∞ n³xⁿ on (−1, 1) and evaluate ∑ n³/2ⁿ.
 42. Show that ∫₀¹ dx/(1 + x³) = ∑ₙ₌₀^∞ (−1)ⁿ/(3n + 1), justifying the interchange, and evaluate both to four decimal places using (1/3)ln 2 + π/(3√3).
 43. Let f(x, y) = x²y/(x⁴ + y²) with f(0, 0) = 0. Show that every directional derivative of f at the origin exists but f is not continuous there.
 44. The folium of Descartes x³ + y³ = 6xy passes through (3, 3). Show y is locally a C¹ function of x there and compute dy/dx.
 45. Find the maximum and minimum of x + 2y + 2z on the sphere x² + y² + z² = 9, by Lagrange multipliers.

Challenge (Problems 46–60)

 46. Let F be an Archimedean ordered field in which every Cauchy sequence converges. Prove that F has the least upper bound property.
 47. Prove the Bolzano–Weierstrass theorem in ℝⁿ, and deduce that a continuous real function on a closed bounded subset of ℝⁿ attains its maximum.
 48. Prove the Cauchy condensation test, and use it to decide the convergence of ∑ₙ₌₃^∞ 1/(n ln n (ln ln n)²).
 49. Prove that lim sup |aₙ|^(1/n) ≤ lim sup |aₙ₊₁/aₙ| for nonzero aₙ, and show with aₙ = 2^(−n + (−1)ⁿ) that the root test can succeed where the ratio test fails.
 50. Prove the Heine–Cantor theorem, and prove that a continuous f on (0, 1) extends continuously to [0, 1] iff f is uniformly continuous on (0, 1).
 51. Prove Darboux's theorem: a derivative on an interval has the intermediate value property.
 52. Let f(x) = e^(−1/x²) for x ≠ 0 and f(0) = 0. Prove f is C^∞ on ℝ with f⁽ⁿ⁾(0) = 0 for all n, so f is not analytic at 0.
 53. Give a proof of ∫₀^∞ e^(−x²) dx = √π/2 using only Riemann integrals over squares and discs.
 54. Prove that a bounded function on [a, b] that is continuous except at finitely many points is Riemann integrable.
 55. Let d(x) be the distance from x to the nearest integer and T(x) = ∑ₙ₌₀^∞ 2⁻ⁿ d(2ⁿx) (the Takagi function). Prove T is continuous, compute T(1/2), T(1/4) and T(1/3), and sketch why T is nowhere differentiable.
 56. Prove that ∫₀^∞ e^(−x²) cos(tx) dx = (√π/2) e^(−t²/4) for all real t, by differentiating under the integral sign.
 57. Prove the one-dimensional inverse function theorem: if f is C¹ near a and f′(a) ≠ 0, then f has a C¹ inverse near f(a), with (f⁻¹)′(f(a)) = 1/f′(a).
 58. Show that the iterated integrals of f(x, y) = (x² − y²)/(x² + y²)² over [0, 1]² are π/4 and −π/4, and prove that ∫∫|f| = ∞.
 59. Using Vₙ = πⁿ/²/Γ(n/2 + 1) for the volume of the unit n-ball, compute V₅ and V₆, prove that Vₙ → 0, and find the dimension n for which Vₙ is largest.
 60. Prove ∫₀^∞ x/(eˣ − 1) dx = π²/6, using the monotone convergence theorem and the Basel sum ∑ 1/n² = π²/6.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. A: the terms increase from 1/2 towards 1, so inf A = 1/2 (attained at n = 1) and sup A = 1 (not attained, since n/(n + 1) < 1, but 1 − 1/(n + 1) exceeds 1 − ε for large n). B: by the argument of Theorem 1.5, sup B = √3 and inf B = −√3; neither is attained because √3 is irrational.
  2. |aₙ − 2| = |2n² + 1 − 2n² − 6|/(n² + 3) = 5/(n² + 3) < 5/n², which is < ε once n > √(5/ε). For ε = 0.001 we need n² + 3 > 5000, i.e. n² > 4997; since 70² = 4900 and 71² = 5041, the least N is 71.
  3. By induction 0 ≤ aₙ < 4 (if aₙ < 4 then aₙ₊₁ < √16 = 4), and aₙ₊₁² − aₙ² = 12 + aₙ − aₙ² = (4 − aₙ)(3 + aₙ) > 0, so the sequence increases. By monotone convergence it has a limit L ≥ 0 with L² = 12 + L, so (L − 4)(L + 3) = 0 and L = 4.
  4. For even n, aₙ = 1 + 1/n; for odd n, aₙ = 1/n. So sup aₙ = a₂ = 3/2 and inf aₙ = 0 (not attained). Even terms tend to 1, odd terms to 0: lim sup = 1, lim inf = 0.
  5. Yes. n/(n³ + 1) ≤ 1/n², or by limit comparison: (n/(n³ + 1))/(1/n²) = n³/(n³ + 1) → 1, and ∑ 1/n² converges.
  6. The ratio of consecutive terms is 3/(n + 1) → 0, so the series converges. By the exponential series it equals e³ ≈ 20.0855.
  7. 1/(n(n + 2)) = (1/2)(1/n − 1/(n + 2)). The partial sums telescope to (1/2)(1 + 1/2 − 1/(n + 1) − 1/(n + 2)) → (1/2)(3/2) = 3/4.
  8. |cₙ|^(1/n) = 2/n^(1/n) → 2, so R = 1/2. At x = 1/2 the series is ∑ 1/n, divergent; at x = −1/2 it is ∑ (−1)ⁿ/n, convergent by Leibniz. The interval is [−1/2, 1/2).
  9. |1/x − 1/2| = |x − 2|/(2|x|). If |x − 2| < 1 then x > 1, so |1/x − 1/2| < |x − 2|/2. Hence δ = min(1, 2ε) works.
 10. For x, y ≥ 1, |1/x − 1/y| = |x − y|/(xy) ≤ |x − y|, so f is 1-Lipschitz and δ = ε works. On (0, 1], xₙ = 1/n and yₙ = 1/(n + 1) satisfy |xₙ − yₙ| → 0 but |f(xₙ) − f(yₙ)| = 1, so no δ works for ε = 1.
 11. (f(4) − f(1))/(4 − 1) = (24 − 3)/3 = 7 = f′(c) = 2c + 2, so c = 5/2.
 12. 1 − cos x = x²/2 + o(x²), so the first limit is 1/2. For the second, x ln x = (ln x)/(1/x), and L'Hôpital gives (1/x)/(−1/x²) = −x → 0.
 13. eˣ cos x is the real part of e^((1 + i)x) = ∑ (1 + i)ⁿxⁿ/n!. The real parts of (1 + i)ⁿ for n = 0, ..., 4 are 1, 1, 0, −2, −4, so the polynomial is 1 + x − 2x³/6 − 4x⁴/24 = 1 + x − x³/3 − x⁴/6.
 14. 1/n < 10⁻³ iff n > 1000, so n = 1001.
 15. ∫ from sin x to 1 = −∫ from 1 to sin x, so by FTC I and the chain rule the derivative is −√(1 + sin²x) · cos x.
 16. By parts: [x eˣ − eˣ] from 0 to 1 = (e − e) − (0 − 1) = 1.
 17. ∫₁ᴿ x⁻³ dx = (1 − R⁻²)/2 → 1/2. ∫ from η to 1 of x^(−1/3) dx = (3/2)(1 − η^(2/3)) → 3/2.
 18. On [0, 1/2], ‖xⁿ‖ = 2⁻ⁿ → 0: uniform. On [0, 1), the pointwise limit is 0, but sup |xⁿ| = 1 for every n: not uniform.
 19. Df = [[2xy, x²], [1, 3y²]], which at (1, 2) is [[4, 1], [1, 12]], with determinant 48 − 1 = 47.
 20. In polar coordinates: ∫₀^(2π) ∫₀² r · r dr dθ = 2π · (8/3) = 16π/3 ≈ 16.755.

Advanced

 21. Let A be nonempty and bounded below, and −A = {−a : a ∈ A}. Then −A is nonempty and bounded above, so s = sup(−A) exists. For a ∈ A, −a ≤ s, so −s ≤ a: −s is a lower bound. If ℓ is any lower bound of A, then −ℓ is an upper bound of −A, so s ≤ −ℓ, i.e. ℓ ≤ −s. Hence inf A = −s.
 22. Take ε = 1: there is N with d(xₙ, x_N) < 1 for n ≥ N, so all terms lie within max(1, d(x₁, x_N), ..., d(x_(N−1), x_N)) of x_N, which is a finite bound. If xₙₖ → L, given ε choose N with d(xₘ, xₙ) < ε/2 for m, n ≥ N and k with nₖ ≥ N and d(xₙₖ, L) < ε/2; then d(xₙ, L) < ε for n ≥ N.
 23. For aₙ = n!/nⁿ, aₙ₊₁/aₙ = (n/(n + 1))ⁿ → 1/e < 1: converges. For bₙ = nⁿ/n!, bₙ₊₁/bₙ = (1 + 1/n)ⁿ → e > 1: diverges (indeed bₙ ≥ 1).
 24. The n-th root of the term is (n/(n + 1))ⁿ = 1/(1 + 1/n)ⁿ → 1/e < 1, so the series converges by the root test.
 25. The terms decrease, so condensation applies: 2ᵏ · 1/(2ᵏ (k ln 2)ᵖ) = (ln 2)⁻ᵖ k⁻ᵖ. This converges iff p > 1, so the original series converges iff p > 1.
 26. Let Hₙ = 1 + ... + 1/n = ln n + γ + o(1). After 3m terms the sum of the positive terms is 1 + 1/3 + ... + 1/(4m − 1) = H₄ₘ − (1/2)H₂ₘ and the negative terms total (1/2)Hₘ. So the partial sum is H₄ₘ − (1/2)H₂ₘ − (1/2)Hₘ = ln 4m − (1/2)ln 2m − (1/2)ln m + o(1) → ln 4 − (1/2)ln 2 = (3/2)ln 2 ≈ 1.0397. Partial sums not ending a block differ by terms tending to 0.
 27. Using 2 sin(1/2) sin k = cos(k − 1/2) − cos(k + 1/2), the sum telescopes: 2 sin(1/2) ∑ₖ₌₁ⁿ sin k = cos(1/2) − cos(n + 1/2), whose absolute value is at most 2. Hence |∑ sin k| ≤ 1/sin(1/2) ≈ 2.086. Since 1/n decreases to 0, the Dirichlet test gives convergence of ∑ sin(n)/n.
 28. At a rational p/q, t(p/q) = 1/q > 0 while every interval around p/q contains irrationals, where t = 0; so t is discontinuous there. At an irrational x and ε > 0, the rationals in (x − 1, x + 1) with denominator q ≤ 1/ε are finitely many and none equals x; choose δ smaller than their distances to x. On (x − δ, x + δ) every rational has denominator > 1/ε, so |t(y) − t(x)| = t(y) < ε.
 29. For x ≥ y ≥ 0, (√x − √y)² ≤ (√x − √y)(√x + √y) = x − y, so |√x − √y| ≤ √|x − y|, and δ = ε² works. If |√x − √0| ≤ K|x| on [0, 1], then 1/√x ≤ K for all x ∈ (0, 1], which is false.
 30. f′(0) = lim h sin(1/h) = 0 by the squeeze theorem. For x ≠ 0, f′(x) = 2x sin(1/x) − cos(1/x); at xₙ = 1/(2πn) this equals −1, while f′(0) = 0, and xₙ → 0, so f′ is not continuous at 0. For g, the quotient (g(h) − g(0))/h = sin(1/h) has no limit at 0.
 31. Such an f would be differentiable on [−1, 1] with f′(−1) = −1 < 0 < 1 = f′(1), so by Darboux's theorem f′ would take the value 0 somewhere, but f′ only takes the values ±1.
 32. By Taylor's theorem with n = 2, eˣ = 1 + x + x²/2 + e^ξ x³/6 with ξ between 0 and x. The remainder has the sign of x³: positive for x > 0, negative for x < 0.
 33. With f(x) = ln(1 + x), P₃(x) = x − x²/2 + x³/3, so P₃(0.2) = 0.2 − 0.02 + 0.008/3 = 0.182667 (to six places). The remainder is f⁽⁴⁾(ξ)x⁴/4! = −6x⁴/(24(1 + ξ)⁴) with 0 < ξ < 0.2, so |R₃| ≤ (0.2)⁴/4 = 0.0004. In fact ln 1.2 = 0.182322, so the error is about 0.000345.
 34. tan x = x + x³/3 + o(x³), so (tan x − x)/x³ → 1/3. For the second, sin²x = x² − x⁴/3 + o(x⁴), so 1/sin²x − 1/x² = (x² − sin²x)/(x² sin²x) = (x⁴/3 + o(x⁴))/(x⁴ + o(x⁴)) → 1/3.
 35. √x is increasing, so U − L = (f(4) − f(0))(4/n) = 2 · 4/n = 8/n. We need 8/n < 0.01, i.e. n > 800, so n = 801.
 36. Convergence: near 0 the integrand is continuous (limit 1). On [1, R], integrating by parts gives cos 1 − (cos R)/R − ∫₁ᴿ (cos x)/x² dx, and the last integral converges absolutely as R → ∞. Divergence of the absolute integral: ∫ from kπ to (k + 1)π of |sin x|/x dx ≥ (1/((k + 1)π)) ∫ from kπ to (k + 1)π of |sin x| dx = 2/((k + 1)π), and ∑ 2/((k + 1)π) diverges.
 37. Γ(7/2) = (5/2)(3/2)(1/2)Γ(1/2) = 15√π/8 ≈ 3.3234. Substituting t = x², dx = dt/(2√t): ∫₀^∞ x⁴e^(−x²) dx = (1/2)∫₀^∞ t^(3/2)e⁻ᵗ dt = (1/2)Γ(5/2) = 3√π/8 ≈ 0.6647.
 38. ∫₀¹ nx(1 − x²)ⁿ dx = n[−(1 − x²)ⁿ⁺¹/(2(n + 1))]₀¹ = n/(2(n + 1)) → 1/2. Pointwise, fₙ(0) = fₙ(1) = 0, and for 0 < x < 1, nx(1 − x²)ⁿ → 0 since n rⁿ → 0 for 0 ≤ r < 1. If the convergence were uniform, Theorem 10.3 would give limit 0 for the integrals, not 1/2. (Directly: fₙ(1/√n) = √n(1 − 1/n)ⁿ ≈ √n/e → ∞.)
 39. For x ≥ 0, fₙ′(x) = (1 − nx²)/(1 + nx²)² vanishes at x = 1/√n, where fₙ = 1/(2√n); fₙ is odd, so ‖fₙ‖ = 1/(2√n) → 0. The limit is f = 0, with f′(0) = 0, but fₙ′(0) = 1 for all n.
 40. With cₙ = (n!)²/(2n)!, cₙ₊₁/cₙ = (n + 1)²/((2n + 1)(2n + 2)) = (n + 1)/(2(2n + 1)) → 1/4, so R = 4.
 41. Apply x d/dx to ∑ n²xⁿ = x(1 + x)/(1 − x)³ = (x + x²)/(1 − x)³. The derivative is [(1 + 2x)(1 − x) + 3(x + x²)]/(1 − x)⁴ = (1 + 4x + x²)/(1 − x)⁴, so ∑ n³xⁿ = x(1 + 4x + x²)/(1 − x)⁴. At x = 1/2: (1/2)(1 + 2 + 1/4)/(1/16) = (1/2)(13/4)(16) = 26.
 42. For 0 ≤ x < 1, 1/(1 + x³) = ∑ (−1)ⁿx³ⁿ, and integrating term by term over [0, r] (uniform convergence on [0, r]) gives ∑ (−1)ⁿr³ⁿ⁺¹/(3n + 1). The series ∑ (−1)ⁿ/(3n + 1) converges by Leibniz, so by Abel's theorem the right side tends to it as r → 1⁻, while the left side tends to ∫₀¹ dx/(1 + x³) by continuity of the integral. Partial fractions give the value (1/3)ln 2 + π/(3√3) ≈ 0.23105 + 0.60460 = 0.8356.
 43. For a unit vector (u, v) with v ≠ 0, f(tu, tv)/t = u²v/(t²u⁴ + v²) → u²/v; if v = 0 then f(tu, 0) = 0 and the derivative is 0. So every directional derivative exists. But along the parabola y = x², f(x, x²) = x⁴/(2x⁴) = 1/2 for x ≠ 0, so f is not continuous at the origin.
 44. F(x, y) = x³ + y³ − 6xy has F_y = 3y² − 6x = 27 − 18 = 9 ≠ 0 at (3, 3), so the implicit function theorem applies. dy/dx = −F_x/F_y = −(3x² − 6y)/(3y² − 6x) = −(27 − 18)/(27 − 18) = −1.
 45. ∇(x + 2y + 2z) = (1, 2, 2) = λ(2x, 2y, 2z) gives (x, y, z) = (1, 2, 2)/(2λ); the constraint gives 9/(4λ²) = 9, so λ = ±1/2 and the points are ±(1, 2, 2). The maximum is 9 at (1, 2, 2) and the minimum is −9 at (−1, −2, −2). (By Cauchy–Schwarz, |x + 2y + 2z| ≤ 3 · 3 = 9.)

Challenge

 46. Let S be nonempty and bounded above, with an upper bound b₀ and an element a₀ ∈ S. Construct aₙ ≤ bₙ with two invariants: bₙ is an upper bound of S, and some element of S is ≥ aₙ. Given aₙ, bₙ, let m = (aₙ + bₙ)/2; if m is an upper bound put (aₙ₊₁, bₙ₊₁) = (aₙ, m), otherwise some element of S exceeds m and we put (aₙ₊₁, bₙ₊₁) = (m, bₙ). Then bₙ − aₙ = (b₀ − a₀)/2ⁿ, which tends to 0 by the Archimedean property (2ⁿ ≥ n). For m ≥ n, aₙ ≤ aₘ ≤ bₘ ≤ bₙ, so |bₘ − bₙ| ≤ bₙ − aₙ and (bₙ) is Cauchy, with limit s; also aₙ → s. Every x ∈ S satisfies x ≤ bₙ for all n, hence x ≤ s, so s is an upper bound. If u < s were an upper bound, then aₙ > u for large n, and an element of S that is ≥ aₙ would exceed u, a contradiction. So s = sup S.
 47. A bounded sequence in ℝⁿ has bounded coordinate sequences. Extract a subsequence on which the first coordinate converges, then a further subsequence on which the second converges, and so on; after n steps all coordinates converge, so the subsequence converges in ℝⁿ. Let K be closed and bounded and f: K → ℝ continuous. If f were unbounded above, pick xₖ with f(xₖ) > k; a subsequence converges to some x ∈ K (K is closed), and continuity gives f(xₖⱼ) → f(x), a contradiction. With M = sup f, pick xₖ with f(xₖ) > M − 1/k; a convergent subsequence has a limit x ∈ K with f(x) = M.
 48. Proof as in Theorem 3.1: for decreasing aₙ ≥ 0, the block from 2ᵏ to 2ᵏ⁺¹ − 1 has sum between 2ᵏa(2ᵏ⁺¹) and 2ᵏa(2ᵏ), so ∑ aₙ ≤ ∑ 2ᵏa(2ᵏ) and ∑ 2ᵏa(2ᵏ) ≤ a(1) + 2∑ aₙ. For the example, the terms decrease for n ≥ 3, and the condensed terms are 2ᵏ/(2ᵏ · k ln 2 · (ln(k ln 2))²) = 1/(ln 2 · k (ln k + ln ln 2)²), which is comparable to 1/(k (ln k)²); this converges by a second condensation (it gives terms comparable to 1/k²). So the series converges.
 49. Let r = lim sup |aₙ₊₁/aₙ|; if r = ∞ there is nothing to prove. For any r' > r there is N with |aₙ₊₁| ≤ r'|aₙ| for n ≥ N, hence |aₙ| ≤ |a_N| r'ⁿ⁻ᴺ = C r'ⁿ and |aₙ|^(1/n) ≤ C^(1/n) r' → r'. So lim sup |aₙ|^(1/n) ≤ r' for every r' > r. For aₙ = 2^(−n + (−1)ⁿ): |aₙ|^(1/n) = 2^(−1 + (−1)ⁿ/n) → 1/2 < 1, so the root test gives convergence. The ratio aₙ₊₁/aₙ = 2^(−1 + (−1)ⁿ⁺¹ − (−1)ⁿ) equals 2^(−3) = 1/8 for even n and 2¹ = 2 for odd n, so the ratio test is inconclusive (lim sup 2 > 1, but the ratio is not eventually ≥ 1).
 50. Heine–Cantor: as in Theorem 4.4, by contradiction with Bolzano–Weierstrass. Extension: if f extends continuously to [0, 1], the extension is uniformly continuous by Heine–Cantor, and so is its restriction. Conversely, if f is uniformly continuous and xₙ → 0, then (xₙ) is Cauchy, and uniform continuity makes (f(xₙ)) Cauchy, hence convergent. Interleaving two such sequences shows the limit does not depend on the sequence; defining f(0) as this limit (and f(1) similarly) gives a continuous extension by the sequential criterion.
 51. See Theorem 5.7. If f′(a) < y < f′(b), let g(x) = f(x) − yx. Then g′(a) < 0 < g′(b), so g(a + h) < g(a) and g(b − h) < g(b) for small h > 0. The minimum of the continuous g on [a, b] is therefore at an interior point c, and Fermat's lemma gives g′(c) = 0, i.e. f′(c) = y. The case f′(a) > y > f′(b) follows by applying this to −f.
 52. By induction, for x ≠ 0, f⁽ⁿ⁾(x) = pₙ(1/x)e^(−1/x²) with pₙ a polynomial: p₀ = 1 and pₙ₊₁(u) = 2u³pₙ(u) − u²pₙ′(u). For any k, uᵏe^(−u²) → 0 as |u| → ∞, so f⁽ⁿ⁾(x) → 0 as x → 0. Inductively, if f⁽ⁿ⁾(0) = 0, then f⁽ⁿ⁺¹⁾(0) = lim f⁽ⁿ⁾(h)/h = lim (1/h)pₙ(1/h)e^(−1/h²) = 0, which is again of the form (polynomial in 1/h) × e^(−1/h²). So f is C^∞ with all derivatives 0 at 0; its Taylor series is 0, which equals f only at x = 0, so f is not analytic at 0.
 53. Let I(R) = ∫₀ᴿ e^(−x²) dx, and let Q_R = [0, R]², D(r) the quarter disc of radius r in the first quadrant. Since D(R) ⊆ Q_R ⊆ D(R√2) and the integrand e^(−(x² + y²)) is positive, ∫∫ over D(R) ≤ I(R)² ≤ ∫∫ over D(R√2), where I(R)² = ∫∫ over Q_R by Fubini for continuous functions. In polar coordinates, ∫∫ over D(r) = (π/2)∫₀ʳ e^(−s²)s ds = (π/4)(1 − e^(−r²)). Both bounds tend to π/4, so I(R) → √π/2.
 54. Let the discontinuities be p₁, ..., pₖ and |f| ≤ M. Given ε > 0, enclose each pⱼ in an interval of length ε/(4kM); their total contribution to U − L is at most 2M · k · ε/(4kM) = ε/2. On each of the finitely many remaining closed intervals f is continuous, hence uniformly continuous, so a fine enough partition of them contributes less than ε/2. Combining gives P with U − L < ε.
 55. 0 ≤ d ≤ 1/2, so the M-test with Mₙ = 2⁻ⁿ⁻¹ shows uniform convergence of continuous functions, hence T is continuous. T(1/2) = d(1/2) + 0 = 1/2. T(1/4) = d(1/4) + (1/2)d(1/2) + 0 = 1/4 + 1/4 = 1/2. For x = 1/3, 2ⁿ/3 is never an integer and lies at distance 1/3 from the nearest integer (2ⁿ ≡ 1 or 2 mod 3), so T(1/3) = ∑ 2⁻ⁿ/3 = 2/3. Non-differentiability: at x, take dyadic intervals [kₘ/2ᵐ, (kₘ + 1)/2ᵐ] containing x. On such an interval the terms with n < m are linear with slopes ±1, and the terms with n ≥ m vanish at both endpoints, so the chord slope is a sum of m terms ±1, an integer with the parity of m. Consecutive chord slopes differ in parity, so they cannot converge; if T′(x) existed, the chord slopes over shrinking intervals containing x would converge to it.
 56. Let I(t) = ∫₀^∞ e^(−x²) cos(tx) dx. The t-derivative of the integrand is −xe^(−x²) sin(tx), dominated by the integrable xe^(−x²), so by dominated convergence (Lesson 14) I′(t) = −∫₀^∞ xe^(−x²) sin(tx) dx. Integrating by parts with u = sin(tx), dv = −xe^(−x²)dx (v = e^(−x²)/2): I′(t) = [e^(−x²) sin(tx)/2]₀^∞ − (t/2)∫₀^∞ e^(−x²) cos(tx) dx = −(t/2)I(t). Hence (I(t)e^(t²/4))′ = 0 and I(t) = I(0)e^(−t²/4) = (√π/2)e^(−t²/4).
 57. Say f′(a) > 0. By continuity f′ > 0 on an interval J around a, so f is strictly increasing and continuous on J, and by the intermediate value theorem maps J onto an interval f(J); its inverse g is increasing, and continuous (a monotone function onto an interval has no jumps). For y₀ = f(x₀) and y = f(x) with x ≠ x₀, (g(y) − g(y₀))/(y − y₀) = (x − x₀)/(f(x) − f(x₀)). As y → y₀, continuity of g gives x → x₀, so the quotient tends to 1/f′(x₀). Thus g′(y) = 1/f′(g(y)), which is continuous as a composition of continuous functions.
 58. Since ∂/∂y (y/(x² + y²)) = (x² − y²)/(x² + y²)², ∫₀¹ f(x, y) dy = 1/(1 + x²) for x > 0, so ∫₀¹∫₀¹ f dy dx = arctan 1 = π/4. Since f(y, x) = −f(x, y), the other order gives −π/4. For ∫∫|f|: in polar coordinates |f| = |cos 2θ|/r², so over the quarter disc of radius 1 (contained in the square), ∫∫|f| = ∫₀^(π/2) |cos 2θ| dθ · ∫₀¹ (1/r) dr = 1 · ∞ = ∞.
 59. V₅ = π^(5/2)/Γ(7/2) = π^(5/2) · 8/(15√π) = 8π²/15 ≈ 5.2638. V₆ = π³/Γ(4) = π³/6 ≈ 5.1677. From Γ(s + 1) = sΓ(s), Vₙ = (2π/n)Vₙ₋₂. So Vₙ > Vₙ₋₂ iff n < 2π ≈ 6.28, and the ratio 2π/n → 0 forces Vₙ → 0. Computing V₁, ..., V₇ = 2, π, 4π/3, π²/2, 8π²/15, π³/6, 16π³/105 ≈ 2, 3.1416, 4.1888, 4.9348, 5.2638, 5.1677, 4.7248 shows the maximum is at n = 5.
 60. For x > 0, x/(eˣ − 1) = xe⁻ˣ/(1 − e⁻ˣ) = ∑ₙ₌₁^∞ xe⁻ⁿˣ, a series of nonnegative functions, so its partial sums increase to the integrand. By monotone convergence, ∫₀^∞ x/(eˣ − 1) dx = ∑ₙ₌₁^∞ ∫₀^∞ xe⁻ⁿˣ dx = ∑ 1/n² = π²/6 ≈ 1.6449, since ∫₀^∞ xe⁻ⁿˣ dx = Γ(2)/n² = 1/n².
