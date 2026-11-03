Permutations vs Combinations — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

The elementary distinction between permutations and combinations is a distinction between ordered and unordered selections: P(n, k) = n!/(n − k)! counts arrangements of k objects chosen from n, and C(n, k) = n!/(k!(n − k)!) counts the underlying sets. That distinction, once made precise, turns out to be the doorway to a large part of modern algebra and combinatorics. A permutation is not merely an arrangement; it is a bijection of a finite set onto itself, and the collection of all such bijections forms the symmetric group, the first and most fundamental example of a non-abelian group. A combination is not merely an unordered list; it is an orbit of ordered lists under the action of a symmetric group, and the division by k! that the elementary course presents as "removing the orderings" is an instance of the orbit–stabiliser theorem.

This course develops both sides of the subject at the level of a graduate course in algebraic and enumerative combinatorics. On the permutation side we study the structure of Sₙ: the cycle decomposition and its uniqueness, the sign homomorphism and a complete proof that it is well defined, conjugacy classes and their sizes, and the statistics of cycles, fixed points and inversions, with their generating functions (Stirling numbers of the first kind, derangement numbers, the Mahonian distribution). On the combination side we study subsets and multisets, binomial and multinomial coefficients, combinations with repetition and the twelvefold way. We then turn to algorithmic questions — how to list, rank and unrank permutations and combinations, and how to list them so that consecutive objects differ minimally (Gray codes) — and close with group actions, Cayley's theorem, Burnside's lemma, and the probabilistic theory of random permutations, where the expected number of cycles grows like ln n.

Throughout, [n] denotes the set {1, 2, …, n}, |X| the cardinality of a finite set X, and (x)ₖ = x(x − 1)⋯(x − k + 1) the falling factorial, with (x)₀ = 1. We write x⁽ᵏ⁾ = x(x + 1)⋯(x + k − 1) for the rising factorial. Permutations are composed as functions, right to left: (στ)(i) = σ(τ(i)). Every computation in this course follows that convention, and the reader should be aware that some texts (notably in computational group theory) compose left to right, which reverses the order of every product.

In this course, you will:

  1. Treat permutations as bijections and k-permutations as injections, and organise counting by the symmetric group Sₙ
  2. Prove the cycle decomposition theorem and compute orders, powers and inverses from cycle type
  3. Prove that the sign of a permutation is well defined in three independent ways, and meet the alternating group
  4. Classify conjugacy classes of Sₙ by partitions and compute their sizes n!/z_λ
  5. Count permutations by their number of cycles (Stirling numbers of the first kind) and by fixed points (derangements)
  6. Develop binomial and multinomial coefficients, multisets and combinations with repetition, and the twelvefold way
  7. Study inversions and the q-analogues of n! and C(n, k), including their interpretation over finite fields
  8. Rank and unrank permutations and combinations, and construct Gray codes for subsets, permutations and combinations
  9. Prove Cayley's theorem and the orbit–stabiliser theorem, and use Burnside's lemma to count up to symmetry
 10. Analyse random permutations: cycle counts, the harmonic numbers, Poisson limits and the longest cycle

─────────────────────────────────
Lesson 1: Permutations as Bijections and the Symmetric Group
─────────────────────────────────

📌 Key idea of this section:

        A permutation of a finite set X is a bijection σ : X → X.
        Sym(X) is a group under composition; Sₙ = Sym([n]) has order n!.
        k-permutations of [n] are injections [k] → [n]: there are (n)ₖ of them.

From arrangements to functions

The elementary course describes a permutation of the letters A, B, C as an arrangement such as BCA. There are two ways to turn that arrangement into a mathematical object, and it is worth keeping both in view. In the passive reading, BCA is a word: a function w : [3] → {A, B, C} with w(1) = B, w(2) = C, w(3) = A, and the requirement that the letters are used once each says precisely that w is a bijection. In the active reading, BCA records a rearrangement of the positions 1, 2, 3: the object in position 1 moves to position 3, and so on. In both readings the essential datum is a bijection between finite sets of the same size, and we take this as the definition.

Definition 1.1. Let X be a finite set. A permutation of X is a bijection σ : X → X. The set of all permutations of X is denoted Sym(X). When X = [n] we write Sₙ = Sym([n]) and call it the symmetric group of degree n.

Theorem 1.2. Sym(X) is a group under composition of functions, with identity the identity map and inverses the inverse functions. If |X| = n, then |Sym(X)| = n!.

Proof. Composition of functions is associative; the composite of two bijections is a bijection; the identity map is a bijection; and the inverse of a bijection is a bijection. This proves the group axioms. For the count, we induct on n. If n = 0 there is exactly one function from the empty set to itself, and it is a bijection, so |Sym(∅)| = 1 = 0!. For n ≥ 1, fix x₀ ∈ X. A bijection σ is determined by the value σ(x₀) ∈ X (n choices) together with the restriction of σ to X ∖ {x₀}, which is a bijection X ∖ {x₀} → X ∖ {σ(x₀)}. Any two (n − 1)-element sets are in bijection, so the number of such restrictions equals |Sₙ₋₁| = (n − 1)! by induction. Hence |Sym(X)| = n · (n − 1)! = n!. ∎

We write a permutation σ ∈ Sₙ in two-line notation, listing i above σ(i), or in one-line notation as the word σ(1)σ(2)⋯σ(n). For instance σ = 3 1 4 2 is the permutation of [4] with σ(1) = 3, σ(2) = 1, σ(3) = 4, σ(4) = 2.

        ⎛ 1  2  3  4 ⎞
        ⎝ 3  1  4  2 ⎠     one-line notation:  3 1 4 2

Injections, surjections and the counting of functions

Let K and N be finite sets with |K| = k and |N| = n. The three basic classes of functions K → N give three of the most important counting sequences. Every function is a choice of an image for each element of K, so there are nᵏ functions. An injection assigns distinct images: the first element of K (in some fixed listing) has n possible images, the second n − 1, and so on, giving (n)ₖ = n!/(n − k)! injections when k ≤ n and none otherwise. An injection [k] → [n] is exactly what the elementary course calls a k-permutation of [n]; the word σ(1)σ(2)⋯σ(k) lists the k selected objects in order. Thus P(n, k) = (n)ₖ, and the case k = n recovers Theorem 1.2, since an injection between sets of equal finite size is a bijection.

Surjections are more subtle and are counted by inclusion–exclusion. For each y ∈ N let A_y be the set of functions K → N that miss y. A function misses every element of a fixed j-element subset J ⊆ N exactly when it maps into N ∖ J, and there are (n − j)ᵏ such functions. Inclusion–exclusion gives

        #{surjections K → N} = ∑ⱼ₌₀ⁿ (−1)ʲ C(n, j) (n − j)ᵏ = n! S(k, n),

where S(k, n), the Stirling number of the second kind, is the number of partitions of a k-element set into n nonempty blocks (a surjection is a partition of K into the n nonempty fibres, together with a bijection from the set of blocks to N). We return to S(k, n) in Lesson 8.

Non-commutativity

For n ≥ 3 the group Sₙ is non-abelian. With the right-to-left convention, consider the transpositions (1 2) and (2 3) (cycle notation is defined formally in Lesson 2; (a b) swaps a and b and fixes everything else). Then (1 2)(2 3) sends 1 ↦ 1 ↦ 2, 2 ↦ 3 ↦ 3, and 3 ↦ 2 ↦ 1, so it is the 3-cycle 1 → 2 → 3 → 1. In the other order, (2 3)(1 2) sends 1 ↦ 2 ↦ 3, so it is the 3-cycle 1 → 3 → 2 → 1. The two products differ. For n ≤ 2 the group has order at most 2 and is abelian.

The growth of n!

Stirling's formula n! ∼ √(2πn) (n/e)ⁿ describes the size of Sₙ. For n = 10 the exact value is 10! = 3,628,800, while √(20π)(10/e)¹⁰ ≈ 3,598,696; the ratio is about 1.0084, in agreement with the first correction term in the refined expansion n! = √(2πn)(n/e)ⁿ (1 + 1/(12n) + O(1/n²)). The super-exponential size of Sₙ is the reason that most questions about permutations must be answered structurally rather than by enumeration: S₂₀ already has more than 2.4 × 10¹⁸ elements.

✏️ Your Turn

(a) How many injections are there from a 4-element set to a 7-element set?
(b) How many surjections are there from a 5-element set onto a 3-element set?
(c) In S₄, with right-to-left composition, compute the product (1 2 3)(3 4).

Answers: (a) (7)₄ = 7 · 6 · 5 · 4 = 840. (b) 3⁵ − 3 · 2⁵ + 3 · 1⁵ − 0 = 243 − 96 + 3 = 150 (equivalently 3! · S(5, 3) = 6 · 25). (c) 1 ↦ 1 ↦ 2, 2 ↦ 2 ↦ 3, 3 ↦ 4 ↦ 4, 4 ↦ 3 ↦ 1, so the product is the 4-cycle (1 2 3 4).

─────────────────────────────────
Lesson 2: The Cycle Decomposition
─────────────────────────────────

📌 Key idea of this section:

        Every σ ∈ Sₙ is a product of disjoint cycles, unique up to order.
        The cycle type of σ is a partition λ of n; the order of σ is lcm(λ₁, λ₂, …).

Cycles

Definition 2.1. Let a₁, …, a_ℓ be distinct elements of [n], with ℓ ≥ 1. The cycle (a₁ a₂ ⋯ a_ℓ) is the permutation sending a₁ ↦ a₂ ↦ ⋯ ↦ a_ℓ ↦ a₁ and fixing every element not among the aᵢ. Its length is ℓ. A cycle of length 2 is a transposition. Two cycles are disjoint if their underlying sets of moved points are disjoint.

The same cycle has ℓ names: (a₁ a₂ ⋯ a_ℓ) = (a₂ ⋯ a_ℓ a₁), and so on by rotation. A 1-cycle (a) is the identity; we write it only when we wish to record fixed points explicitly. Disjoint cycles commute, because each acts as the identity on the points moved by the other.

The decomposition theorem

Theorem 2.2 (Cycle decomposition). Every permutation σ ∈ Sₙ can be written as a product of disjoint cycles. The decomposition is unique up to the order of the factors and the inclusion or omission of 1-cycles.

Proof. Define a relation on [n] by i ∼ j if j = σᵐ(i) for some integer m. This is an equivalence relation: reflexivity uses m = 0, symmetry uses −m, and transitivity adds exponents. Its classes are the orbits of the cyclic subgroup ⟨σ⟩ on [n]. Fix an orbit O and a point i ∈ O. The sequence i, σ(i), σ²(i), … takes values in the finite set O, so some value repeats; let ℓ ≥ 1 be the least positive integer with σ^ℓ(i) = σ^m(i) for some 0 ≤ m < ℓ. Applying σ⁻ᵐ gives σ^(ℓ−m)(i) = i, and minimality of ℓ forces m = 0. Thus i, σ(i), …, σ^(ℓ−1)(i) are distinct and σ^ℓ(i) = i. Every element σᵐ(i) of O equals σ^r(i) where r is the residue of m modulo ℓ, so O = {i, σ(i), …, σ^(ℓ−1)(i)}, and σ acts on O as the cycle (i σ(i) ⋯ σ^(ℓ−1)(i)). Since [n] is the disjoint union of the orbits, σ equals the product of these cycles, one for each orbit. For uniqueness, observe that if σ = γ₁⋯γ_r is any product of disjoint cycles (including 1-cycles for the fixed points), then the support of each γⱼ is invariant under σ and σ acts on it transitively, so the supports are exactly the orbits of ⟨σ⟩, and on each orbit the cycle is determined by σ itself. ∎

Example 2.3. Let σ = 4 7 1 3 2 8 5 6 in one-line notation. Following 1: 1 ↦ 4 ↦ 3 ↦ 1. Following the least unused point 2: 2 ↦ 7 ↦ 5 ↦ 2. Then 6 ↦ 8 ↦ 6. Hence σ = (1 4 3)(2 7 5)(6 8).

Cycle type and order

Definition 2.4. The cycle type of σ ∈ Sₙ is the multiset of its cycle lengths (including 1-cycles), written as a partition λ = (λ₁ ≥ λ₂ ≥ ⋯ ≥ λ_r) of n, or in multiplicity notation 1^(m₁) 2^(m₂) ⋯ n^(mₙ), where mᵢ is the number of cycles of length i. The number of cycles is κ(σ) = r = m₁ + ⋯ + mₙ.

Proposition 2.5. The order of σ is the least common multiple of its cycle lengths.

Proof. Write σ = γ₁⋯γ_r with disjoint cycles of lengths λ₁, …, λ_r. Because the γⱼ commute, σᵐ = γ₁ᵐ⋯γ_rᵐ, and because they have disjoint supports, σᵐ is the identity exactly when each γⱼᵐ is. An ℓ-cycle has order ℓ (the proof of Theorem 2.2 shows γ^m fixes a point of its support only when ℓ divides m). Hence σᵐ = 1 if and only if every λⱼ divides m, that is, if and only if lcm(λ₁, …, λ_r) divides m. ∎

The permutation of Example 2.3 has cycle type (3, 3, 2) and order lcm(3, 3, 2) = 6. The maximal order of an element of Sₙ is Landau's function g(n) = max lcm(λ) over partitions λ of n; its first values are g(5) = 6, g(6) = 6, g(7) = 12, g(8) = 15, g(9) = 20, g(10) = 30. Landau proved in 1903 that ln g(n) ∼ √(n ln n), so the maximal order grows faster than any polynomial but much more slowly than n!.

Powers and inverses

Proposition 2.6. Let γ be an ℓ-cycle and k an integer, and put d = gcd(ℓ, k). Then γᵏ is a product of d disjoint cycles, each of length ℓ/d.

Proof. Identify the support of γ with ℤ/ℓℤ so that γ acts as x ↦ x + 1. Then γᵏ acts as x ↦ x + k, whose orbits are the cosets of the subgroup generated by k in ℤ/ℓℤ. That subgroup is dℤ/ℓℤ, of order ℓ/d, and it has d cosets. ∎

For example, (1 2 3 4 5 6)⁴ has gcd(6, 4) = 2 cycles of length 3: it sends 1 ↦ 5 ↦ 3 ↦ 1 and 2 ↦ 6 ↦ 4 ↦ 2, so it equals (1 5 3)(2 6 4). The inverse of a cycle is the reversed cycle, (a₁ a₂ ⋯ a_ℓ)⁻¹ = (a_ℓ ⋯ a₂ a₁), and the inverse of a product of disjoint cycles is obtained by reversing each cycle. In particular σ and σ⁻¹ always have the same cycle type.

✏️ Your Turn

(a) Write σ = 2 3 1 5 4 in cycle notation and find its order.
(b) Compute (1 2 3 4 5 6)⁴ by Proposition 2.6 and check it directly.
(c) Find Landau's value g(7) and a permutation in S₇ attaining it.

Answers: (a) 1 ↦ 2 ↦ 3 ↦ 1 and 4 ↦ 5 ↦ 4, so σ = (1 2 3)(4 5), of order lcm(3, 2) = 6. (b) d = 2 cycles of length 3: (1 5 3)(2 6 4), since the fourth power adds 4 modulo 6. (c) g(7) = 12, attained by cycle type (4, 3), for example (1 2 3 4)(5 6 7); the other partitions of 7 give lcm at most 10 (cycle type (5, 2)).

─────────────────────────────────
Lesson 3: Transpositions and the Sign of a Permutation
─────────────────────────────────

📌 Key idea of this section:

        Every permutation is a product of transpositions; the parity of the
        number of factors is an invariant. sgn(σ) = (−1)^(n − κ(σ)) = (−1)^inv(σ).
        sgn : Sₙ → {±1} is a homomorphism; its kernel is the alternating group Aₙ.

Generation by transpositions

With right-to-left composition, an ℓ-cycle factors as a product of ℓ − 1 transpositions:

        (a₁ a₂ ⋯ a_ℓ) = (a₁ a_ℓ)(a₁ a_(ℓ−1)) ⋯ (a₁ a₃)(a₁ a₂).

To verify, apply the right-hand side to aᵢ with 1 ≤ i < ℓ: the factors (a₁ a₂), …, (a₁ a_(i−1)) fix aᵢ, the factor (a₁ aᵢ) sends it to a₁, the next factor (a₁ a_(i+1)) sends a₁ to a_(i+1), and the remaining factors fix a_(i+1). Finally a_ℓ is fixed by every factor except the last one applied, (a₁ a_ℓ), which sends it to a₁. Combining with Theorem 2.2, every σ ∈ Sₙ is a product of exactly n − κ(σ) transpositions, since a cycle decomposition with κ(σ) cycles (fixed points included) uses ∑(λⱼ − 1) = n − κ(σ) transpositions. In fact Sₙ is generated by the n − 1 adjacent transpositions sᵢ = (i i+1), since (i j) for i < j can be written as a conjugate of s_(j−1) by s_i s_(i+1) ⋯ s_(j−2).

The parity theorem

The factorisation into transpositions is far from unique: (1 2 3) = (1 3)(1 2) = (2 3)(1 3) = (1 3)(1 2)(4 5)(4 5). What is invariant is the parity of the number of factors. This is the deepest elementary fact about Sₙ, and we give three proofs, since each illuminates a different structure.

Lemma 3.1. Let σ ∈ Sₙ and let τ = (a b) be a transposition. If a and b lie in the same cycle of σ, then τσ is obtained from σ by splitting that cycle into two, so κ(τσ) = κ(σ) + 1. If a and b lie in different cycles of σ, then τσ is obtained by merging those two cycles into one, so κ(τσ) = κ(σ) − 1.

Proof. Suppose first that a and b lie in the same cycle, which we write as (a x₁ ⋯ x_r b y₁ ⋯ y_s) with r, s ≥ 0. We compute τσ on the points of this cycle. A point whose σ-image is neither a nor b is moved by σ and then left alone by τ. The point whose σ-image is b — namely x_r, or a itself if r = 0 — is sent to τ(b) = a. The point whose σ-image is a — namely y_s, or b itself if s = 0 — is sent to τ(a) = b. Hence on this set τσ acts as the two cycles (a x₁ ⋯ x_r)(b y₁ ⋯ y_s), and all other cycles of σ are unchanged; so κ increases by one. If instead a and b lie in different cycles of σ, write these as (a x₁ ⋯ x_r) and (b y₁ ⋯ y_s). Now x_r (or a, if r = 0) is sent by σ to a and then by τ to b, while y_s (or b, if s = 0) is sent to b and then to a; every other point of the two cycles is moved by σ and fixed by τ. Hence τσ acts on their union as the single cycle (a x₁ ⋯ x_r b y₁ ⋯ y_s), and κ decreases by one. ∎

For the parity theorem only the fact that κ changes by exactly ±1 matters.

Theorem 3.2 (Parity). If σ = τ₁τ₂⋯τ_m is a product of m transpositions, then m ≡ n − κ(σ) (mod 2). Consequently the map sgn(σ) = (−1)^(n − κ(σ)) is well defined and satisfies sgn(στ) = sgn(σ) sgn(τ).

First proof (counting cycles). Induct on m. For m = 0, σ is the identity, which has κ = n cycles, and n − n = 0. If σ = τ₁σ' with σ' a product of m − 1 transpositions, then by induction m − 1 ≡ n − κ(σ'), and by Lemma 3.1 κ(σ) = κ(σ') ± 1, so n − κ(σ) ≡ n − κ(σ') + 1 ≡ m. Multiplicativity follows: if σ and τ are products of m and m' transpositions, then στ is a product of m + m' transpositions. ∎

Second proof (the Vandermonde product). Let Δ(x₁, …, xₙ) = ∏_(i<j) (xⱼ − xᵢ), and let Sₙ act on polynomials by (σ·F)(x₁, …, xₙ) = F(x_σ(1), …, x_σ(n)). Each pair {i, j} occurs exactly once among the factors of σ·Δ, possibly with the order reversed, so σ·Δ = ε(σ)Δ with ε(σ) = ±1; precisely, ε(σ) = (−1)^inv(σ), where inv(σ) = #{(i, j) : i < j, σ(i) > σ(j)} counts the reversed pairs. The action is compatible with composition: substituting shows σ·(τ·F) = (στ)·F, so ε(στ)Δ = σ·(ε(τ)Δ) = ε(σ)ε(τ)Δ, and ε is a homomorphism. A transposition has ε = −1: for (i j) with i < j, the inverted pairs are (i, j) itself together with (i, k) and (k, j) for each i < k < j, giving 2(j − i − 1) + 1 inversions, an odd number. Hence any expression of σ as a product of m transpositions has ε(σ) = (−1)^m, and the parity of m is determined by σ. ∎

Third proof (determinants). Let M_σ be the permutation matrix with entries (M_σ)_(σ(j), j) = 1 and zeros elsewhere, so that M_σ M_τ = M_στ. Swapping two columns of the identity matrix negates the determinant, so det M_τ = −1 for every transposition, and multiplicativity of the determinant gives det M_σ = (−1)^m whenever σ is a product of m transpositions. ∎

The three proofs give three formulas for the same homomorphism:

        sgn(σ) = (−1)^(n − κ(σ)) = (−1)^inv(σ) = det M_σ = (−1)^(number of cycles of even length).

The last expression follows from the first, since n − κ(σ) = ∑ⱼ (λⱼ − 1) and λⱼ − 1 is odd exactly when λⱼ is even. In particular an ℓ-cycle has sign (−1)^(ℓ−1): it is even if and only if its length is odd.

The alternating group

The kernel Aₙ = {σ : sgn(σ) = 1} is a normal subgroup of index 2 for n ≥ 2, so |Aₙ| = n!/2. For n ≥ 3 it is generated by 3-cycles: every even permutation is a product of an even number of transpositions, and each product of two transpositions is a product of 3-cycles, since (a b)(a c) = (a c b) when the transpositions share a point and (a b)(c d) = (a b c)(b c d) when they are disjoint. For n ≥ 5, Aₙ is simple, a fact closely tied to the insolubility of the general quintic; we prove the case n = 5 in Lesson 4.

Inversions and adjacent transpositions

The number of inversions has a second meaning: inv(σ) is the minimal number of adjacent transpositions sᵢ needed to express σ. Indeed, if σ(i) > σ(i+1) then σ sᵢ (which swaps the entries in positions i and i+1 of the one-line word) has exactly one fewer inversion, so bubble sort reduces σ to the identity in inv(σ) steps; conversely each adjacent swap changes inv by exactly one, so no shorter expression exists. This is the length function of Sₙ regarded as the Coxeter group with generators s₁, …, s_(n−1) and relations sᵢ² = 1, sᵢsⱼ = sⱼsᵢ for |i − j| ≥ 2, and sᵢs_(i+1)sᵢ = s_(i+1)sᵢs_(i+1). The maximum length n(n−1)/2 is attained only by the reversal n(n−1)⋯1.

An application: the fifteen puzzle

In the fifteen puzzle, fifteen numbered tiles and one blank occupy a 4 × 4 grid, and a move slides a tile into the blank. Regard the configuration as a permutation of the 16 cells. Each move is a transposition of the blank with a neighbouring tile. Colour the grid like a chessboard: each move changes the colour of the blank's cell, so if the blank returns to its starting corner, an even number of moves has been made and the resulting permutation is even. The configuration in which only tiles 14 and 15 are interchanged, with the blank in its home corner, is a single transposition, hence odd, hence unreachable. Story, in the joint paper of Johnson and Story (1879), proved the converse: every even configuration with the blank home is reachable.

✏️ Your Turn

(a) Compute inv(3 1 4 2) and confirm that it has the same parity as n − κ(σ).
(b) What is the sign of a permutation of [12] with cycle type (4, 3, 2, 2, 1)?
(c) How many even permutations does S₆ contain?

Answers: (a) The inversions are (3,1), (3,2), (4,2), so inv = 3 and sgn = −1; the cycle decomposition is the single 4-cycle (1 3 4 2), so n − κ = 4 − 1 = 3, also odd. (b) n − κ = 12 − 5 = 7 is odd (equivalently, there are three cycles of even length), so the sign is −1. (c) |A₆| = 720/2 = 360.

─────────────────────────────────
Lesson 4: Conjugacy Classes of the Symmetric Group
─────────────────────────────────

📌 Key idea of this section:

        π (a₁ ⋯ a_ℓ) π⁻¹ = (π(a₁) ⋯ π(a_ℓ)): conjugation relabels cycles.
        Two permutations are conjugate in Sₙ iff they have the same cycle type.
        The class of type 1^(m₁)2^(m₂)⋯ has n!/z_λ elements, z_λ = ∏ i^(mᵢ) mᵢ!.

Conjugation as relabelling

Lemma 4.1. For π ∈ Sₙ and any cycle (a₁ a₂ ⋯ a_ℓ), we have π(a₁ a₂ ⋯ a_ℓ)π⁻¹ = (π(a₁) π(a₂) ⋯ π(a_ℓ)).

Proof. Let γ = (a₁ ⋯ a_ℓ). Then πγπ⁻¹(π(aᵢ)) = π(γ(aᵢ)) = π(a_(i+1)), indices modulo ℓ. If b is not of the form π(aᵢ), then π⁻¹(b) is fixed by γ, so πγπ⁻¹(b) = b. ∎

Since conjugation is a homomorphism, it acts on a product of disjoint cycles cycle by cycle: to compute πσπ⁻¹, write σ in cycle notation and replace every symbol i by π(i).

Theorem 4.2. Permutations σ, τ ∈ Sₙ are conjugate if and only if they have the same cycle type. Hence the conjugacy classes of Sₙ are in bijection with the partitions of n, and Sₙ has p(n) conjugacy classes.

Proof. By Lemma 4.1 conjugation preserves cycle type. Conversely, if σ and τ have the same cycle type, write both in cycle notation (including 1-cycles), with the cycles listed in order of decreasing length, and stack the two expressions one above the other. Each symbol of [n] appears exactly once in each row, so the stack defines a bijection π mapping each entry of the σ-row to the entry beneath it in the τ-row. By Lemma 4.1, πσπ⁻¹ = τ. ∎

For example, p(5) = 7 and p(10) = 42, so S₅ has 7 conjugacy classes and S₁₀ has 42. To conjugate (1 2 3) to (2 4 5) inside S₅ we stack (1 2 3)(4)(5) over (2 4 5)(1)(3), obtaining π with 1 ↦ 2, 2 ↦ 4, 3 ↦ 5, 4 ↦ 1, 5 ↦ 3, that is, π = (1 2 4)(3 5).

Class sizes

Theorem 4.3. Let λ = 1^(m₁) 2^(m₂) ⋯ n^(mₙ) be a partition of n. The number of permutations in Sₙ of cycle type λ is n!/z_λ, where z_λ = ∏ᵢ i^(mᵢ) mᵢ!. Equivalently, the centraliser of any permutation of type λ has order z_λ.

Proof. Fix a template consisting of m₁ empty brackets of length 1, then m₂ brackets of length 2, and so on. Filling the n slots with the n symbols of [n] in each of the n! possible ways produces a permutation of type λ, and every permutation of type λ arises. A given permutation arises from exactly z_λ fillings: within each cycle of length i the starting point can be chosen in i ways (this gives the factor i^(mᵢ)), and the mᵢ cycles of length i can be placed in the mᵢ brackets of that length in mᵢ! orders. Hence the class has n!/z_λ elements. The statement about centralisers follows from the orbit–stabiliser theorem applied to the conjugation action (Lesson 12): the class is the orbit and the centraliser is the stabiliser. ∎

For S₅ the classes are:

        type        z_λ     size     sign
        1⁵          120        1      +
        2 1³         12       10      −
        2² 1          8       15      +
        3 1²          6       20      +
        3 2           6       20      −
        4 1           4       30      −
        5             5       24      +
                    total    120

Dividing the identity ∑_λ n!/z_λ = n! by n! gives the useful identity ∑_(λ ⊢ n) 1/z_λ = 1, which we shall reinterpret probabilistically in Lesson 13: 1/z_λ is the probability that a uniformly random permutation has cycle type λ.

Classes in the alternating group and the simplicity of A₅

A conjugacy class of Sₙ contained in Aₙ is either a single Aₙ-class or splits into two Aₙ-classes of equal size. It splits precisely when the cycle type consists of distinct odd parts; equivalently, when the centraliser of an element is contained in Aₙ. In A₅ the even classes of S₅ have sizes 1, 15, 20, 24, and only the 5-cycles (type (5), distinct odd parts) split, into two classes of 12. So A₅ has class sizes 1, 15, 20, 12, 12.

Theorem 4.4. A₅ is simple.

Proof. A normal subgroup N ⊴ A₅ is a union of conjugacy classes containing the identity, so |N| = 1 + (a sum of a sub-multiset of {15, 20, 12, 12}), and |N| divides 60 by Lagrange's theorem. The possible sums are 1, 13, 16, 21, 25, 28, 33, 36, 40, 45, 48 and 60; the only divisors of 60 among them are 1 and 60. ∎

✏️ Your Turn

(a) How many elements of S₈ have cycle type (3, 3, 2)?
(b) Find π ∈ S₅ with π(1 2 3)(4 5)π⁻¹ = (1 3 4)(2 5).
(c) What is the order of the centraliser of (1 2)(3 4) in S₄?

Answers: (a) z = 3² · 2! · 2¹ · 1! = 36, so 8!/36 = 40320/36 = 1120. (b) Stack (1 2 3)(4 5) over (1 3 4)(2 5): π sends 1 ↦ 1, 2 ↦ 3, 3 ↦ 4, 4 ↦ 2, 5 ↦ 5, so π = (2 3 4). (c) z = 2² · 2! = 8; the centraliser is a dihedral group of order 8, and the class has 24/8 = 3 elements.

─────────────────────────────────
Lesson 5: Counting Permutations by Cycles — Stirling Numbers of the First Kind
─────────────────────────────────

📌 Key idea of this section:

        c(n, k) = #{σ ∈ Sₙ : κ(σ) = k}, the unsigned Stirling numbers of the first kind.
        c(n+1, k) = n·c(n, k) + c(n, k−1)
        ∑ₖ c(n, k) xᵏ = x(x+1)(x+2)⋯(x+n−1) = x⁽ⁿ⁾

The recurrence

Definition 5.1. For integers n, k ≥ 0, the unsigned Stirling number of the first kind c(n, k) is the number of permutations of [n] with exactly k cycles. By convention c(0, 0) = 1, and c(n, 0) = 0 for n ≥ 1.

Theorem 5.2. For n ≥ 0 and k ≥ 1, c(n+1, k) = n·c(n, k) + c(n, k−1).

Proof. Classify the permutations of [n+1] with k cycles according to the role of n+1. If n+1 is a fixed point, deleting it leaves a permutation of [n] with k − 1 cycles, and this is a bijection; this contributes c(n, k−1). Otherwise n+1 lies in a cycle of length at least 2; deleting it from its cycle (so that its predecessor now maps to its successor) gives a permutation of [n] with k cycles. Conversely, from a permutation of [n] with k cycles we can insert n+1 immediately after any one of the n symbols in its cycle, and each insertion gives a distinct permutation of [n+1] with k cycles. Hence this case contributes n·c(n, k). ∎

The table for small n follows immediately:

        n \ k    1     2     3     4     5     6
        1        1
        2        1     1
        3        2     3     1
        4        6    11     6     1
        5       24    50    35    10     1
        6      120   274   225    85    15     1

Each row sums to n!, as it must. Some entries have closed forms: c(n, n) = 1; c(n, 1) = (n − 1)!, the number of n-cycles; c(n, n−1) = C(n, 2), since a permutation with n − 1 cycles is a single transposition; and c(n, 2) = (n − 1)! Hₙ₋₁, where Hₘ = 1 + 1/2 + ⋯ + 1/m. (For n = 5 this gives 24 · 25/12 = 50.) A slightly harder count gives c(n, n−2) = 2C(n, 3) + 3C(n, 4) = (3n − 1)C(n, 3)/4, the two terms counting permutations of type (3, 1, …) and (2, 2, 1, …).

The generating function

Theorem 5.3. For every n ≥ 0, ∑ₖ c(n, k) xᵏ = x(x + 1)⋯(x + n − 1).

Proof. Let Fₙ(x) be the left side. The recurrence of Theorem 5.2 says exactly Fₙ₊₁(x) = (x + n)Fₙ(x), and F₀ = 1. ∎

A second proof, which explains the factors, constructs a permutation of [n] by inserting the symbols 1, 2, …, n one at a time. When symbol j is inserted, it may start a new cycle (1 way, contributing a factor x to record the new cycle) or be placed after one of the j − 1 symbols already present (j − 1 ways). The j-th factor of the product is therefore x + (j − 1).

Setting x = −1 shows ∑ₖ (−1)ᵏ c(n, k) = 0 for n ≥ 2, which is the statement that Sₙ has equally many even and odd permutations, since sgn(σ) = (−1)^(n − κ(σ)). The signed Stirling numbers s(n, k) = (−1)^(n−k) c(n, k) satisfy

        (x)ₙ = x(x − 1)⋯(x − n + 1) = ∑ₖ s(n, k) xᵏ,

obtained by replacing x by −x in Theorem 5.3. Together with the identity xⁿ = ∑ₖ S(n, k)(x)ₖ for the Stirling numbers of the second kind (Lesson 8), this shows that the lower-triangular matrices [s(n, k)] and [S(n, k)] are mutually inverse: they are the change-of-basis matrices between the bases {xⁿ} and {(x)ₙ} of the polynomial ring ℚ[x].

The exponential formula

The bivariate exponential generating function packages the whole table:

        ∑ₙ ∑ₖ c(n, k) yᵏ xⁿ/n!  =  (1 − x)^(−y)  =  exp( y · ln(1/(1 − x)) ).

The first equality is Theorem 5.3, since x⁽ⁿ⁾ evaluated at y is the n-th coefficient of (1 − x)^(−y) = ∑ y⁽ⁿ⁾ xⁿ/n!. The second form is an instance of the exponential formula of species theory: a permutation is a set of cycles, the exponential generating function of cycles is ∑ₘ (m − 1)! xᵐ/m! = ∑ₘ xᵐ/m = ln(1/(1 − x)), and taking sets of a structure corresponds to exponentiating, with y marking each cycle. The same formula with restricted cycle lengths gives, for instance, the permutations all of whose cycles have length in a set A: their exponential generating function is exp(∑_(m∈A) xᵐ/m).

Foata's fundamental transformation

Theorem 5.4 (Foata). There is a bijection Φ : Sₙ → Sₙ such that the number of cycles of σ equals the number of left-to-right maxima (records) of the word Φ(σ). Consequently the number of permutations of [n] with exactly k records is c(n, k).

Proof. Given σ, write each cycle with its largest element first, and order the cycles by increasing first elements. Erase the parentheses to obtain a word Φ(σ). The first element of each cycle is larger than everything before it in the word (it exceeds every element of its own cycle and the leaders of earlier cycles, which in turn exceed every element of their cycles), and every other element is smaller than the leader of its own cycle, which precedes it. So the records of Φ(σ) are exactly the cycle leaders. Conversely, given a word, cut it immediately before each record; the pieces are the cycles, written in standard form, and this inverts Φ. ∎

For σ = (1 4 3)(2 7 5)(6 8), the standard forms are (4 3 1), (7 5 2), (8 6), and Φ(σ) = 4 3 1 7 5 2 8 6, whose records are 4, 7, 8 — three records for three cycles. Foata's transformation is the prototype of a large family of bijections in permutation statistics that convert cyclic structure (cycles, excedances) into linear structure (records, descents).

✏️ Your Turn

(a) Find c(6, 3) from the table, and check it against the recurrence.
(b) Use the closed form for c(n, n−2) to compute c(7, 5).
(c) Compute Φ((1 3)(2 5 4)) and count its records.

Answers: (a) c(6, 3) = 5·c(5, 3) + c(5, 2) = 5 · 35 + 50 = 225. (b) c(7, 5) = (3 · 7 − 1) · C(7, 3)/4 = 20 · 35/4 = 175. (c) Standard forms (3 1) and (5 4 2); ordered by leaders, Φ = 3 1 5 4 2, with records 3 and 5: two records, matching two cycles.

─────────────────────────────────
Lesson 6: Fixed Points, Derangements and Restricted Cycle Structure
─────────────────────────────────

📌 Key idea of this section:

        Dₙ = #{σ ∈ Sₙ without fixed points} = n! ∑ₖ₌₀ⁿ (−1)ᵏ/k!, the nearest integer to n!/e.
        Dₙ = (n − 1)(Dₙ₋₁ + Dₙ₋₂),   Dₙ = n·Dₙ₋₁ + (−1)ⁿ,   ∑ Dₙ xⁿ/n! = e^(−x)/(1 − x).
        The number of fixed points of a random permutation converges to Poisson(1).

Inclusion–exclusion

A derangement is a permutation with no fixed points. The problem of counting them — the problème des rencontres — was posed and solved by Pierre Rémond de Montmort in 1708, and further studied by Nicolaus Bernoulli and Euler.

Theorem 6.1. The number of derangements of [n] is Dₙ = ∑ₖ₌₀ⁿ (−1)ᵏ C(n, k)(n − k)! = n! ∑ₖ₌₀ⁿ (−1)ᵏ/k!.

Proof. For i ∈ [n] let Aᵢ be the set of permutations fixing i. A permutation fixing every point of a k-element set K is a permutation of [n] ∖ K, so |∩_(i∈K) Aᵢ| = (n − k)!. Inclusion–exclusion gives the number of permutations in none of the Aᵢ as ∑_K (−1)^|K| (n − |K|)! = ∑ₖ (−1)ᵏ C(n, k)(n − k)!, and C(n, k)(n − k)! = n!/k!. ∎

Corollary 6.2. For n ≥ 1, Dₙ is the integer nearest to n!/e.

Proof. n!/e − Dₙ = n! ∑ₖ₌ₙ₊₁^∞ (−1)ᵏ/k!. This alternating series has terms strictly decreasing in absolute value, so its absolute value is less than its first term n!/(n+1)! = 1/(n + 1) ≤ 1/2. ∎

The first values are D₀ = 1, D₁ = 0, D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44, D₆ = 265, D₇ = 1854, D₈ = 14,833, D₉ = 133,496, D₁₀ = 1,334,961.

Recurrences with bijective content

Theorem 6.3. For n ≥ 2, Dₙ = (n − 1)(Dₙ₋₁ + Dₙ₋₂), and for n ≥ 1, Dₙ = n·Dₙ₋₁ + (−1)ⁿ.

Proof. Let σ be a derangement of [n] and let j = σ(n) ≠ n (n − 1 choices). If σ(j) = n, then (n j) is a 2-cycle of σ and the rest is a derangement of the remaining n − 2 points: Dₙ₋₂ possibilities. If σ(j) ≠ n, let i = σ⁻¹(n), so that i ≠ j, and define σ' on [n − 1] by σ'(i) = j and σ'(x) = σ(x) for x ≠ i; that is, remove n from its cycle. Then σ' is a derangement of [n − 1] with σ'(i) = j, and conversely every derangement of [n − 1] arises exactly once for each choice of j (insert n immediately before j in the cycle of j). This gives Dₙ₋₁ possibilities for each j. The second recurrence follows from the first by induction: Dₙ − nDₙ₋₁ = −(Dₙ₋₁ − (n − 1)Dₙ₋₂), and D₁ − 1·D₀ = −1. Alternatively it follows at once from the formula of Theorem 6.1. ∎

Generating functions and the rencontres numbers

Since every permutation is uniquely a set of fixed points together with a derangement of the remaining points, n! = ∑ₖ C(n, k) Dₙ₋ₖ. In exponential generating functions this reads 1/(1 − x) = eˣ · D(x), whence D(x) = ∑ Dₙ xⁿ/n! = e^(−x)/(1 − x). The same decomposition shows that the number of permutations of [n] with exactly k fixed points (the rencontres number) is Dₙ,ₖ = C(n, k)Dₙ₋ₖ. For example, the number of permutations of [8] with exactly three fixed points is C(8, 3) · D₅ = 56 · 44 = 2464.

The distribution of fixed points

Let F(σ) be the number of fixed points of a uniformly random σ ∈ Sₙ. Writing F = ∑ᵢ 1[σ(i) = i] and using P(σ(i₁) = i₁, …, σ(i_r) = i_r) = (n − r)!/n! for distinct i₁, …, i_r, the r-th factorial moment is

        E[(F)_r] = r! · C(n, r) · (n − r)!/n! = 1   for every r ≤ n.

These are the factorial moments of a Poisson(1) random variable. Consequently E[F] = 1, Var(F) = 1 for n ≥ 2, and by the method of moments P(F = k) → e⁻¹/k! as n → ∞. In particular the probability that a random permutation is a derangement tends to 1/e ≈ 0.3679, and the convergence is extraordinarily fast: the error at n is less than 1/(n + 1)!.

Restricted cycle structure

The exponential formula of Lesson 5 counts permutations with constrained cycles in one stroke. Permutations with no cycles of length at most m have exponential generating function exp(−x − x²/2 − ⋯ − xᵐ/m)/(1 − x); the case m = 1 is D(x). Involutions (σ² = 1) are permutations with all cycles of length 1 or 2, with generating function exp(x + x²/2). Their number Iₙ satisfies Iₙ = Iₙ₋₁ + (n − 1)Iₙ₋₂ (either n is fixed, or n is paired with one of the other n − 1 points), giving 1, 1, 2, 4, 10, 26, 76, 232, … for n = 0, 1, 2, …. More generally the permutations with σᵈ = 1 are those whose cycle lengths all divide d, with generating function exp(∑_(m | d) xᵐ/m).

A classical relative of the derangement problem is the ménage problem of Lucas (1891): in how many ways can n couples be seated alternately by sex at a round table so that no one sits next to their partner? After the women are seated, the count reduces to the number Uₙ of permutations σ of [n] with σ(i) ∉ {i, i + 1 (mod n)} for all i, and Touchard's formula gives Uₙ = ∑ₖ₌₀ⁿ (−1)ᵏ (2n/(2n − k)) C(2n − k, k)(n − k)!. The first values are U₃ = 1, U₄ = 2, U₅ = 13, U₆ = 80. The proof is again inclusion–exclusion, the factor (2n/(2n − k))C(2n − k, k) counting the ways to choose k pairwise disjoint edges in a 2n-cycle.

✏️ Your Turn

(a) Compute D₇ using Dₙ = nDₙ₋₁ + (−1)ⁿ.
(b) How many permutations of [8] have exactly three fixed points?
(c) Compute the number I₆ of involutions in S₆.

Answers: (a) D₇ = 7 · 265 − 1 = 1854. (b) C(8, 3)D₅ = 56 · 44 = 2464. (c) From I₄ = 10 and I₅ = I₄ + 4I₃ = 10 + 16 = 26, we get I₆ = I₅ + 5I₄ = 26 + 50 = 76.

─────────────────────────────────
Lesson 7: Subsets, Binomial Coefficients and Multinomial Coefficients
─────────────────────────────────

📌 Key idea of this section:

        C(n, k) = #{k-element subsets of [n]} = (n)ₖ/k! = n!/(k!(n − k)!).
        Multinomial: n!/(a₁! a₂! ⋯ a_r!) = #{words with aᵢ copies of letter i}.
        Combinatorial identities are best proved by bijections and double counting.

The fundamental relation between permutations and combinations

Theorem 7.1. The number of k-element subsets of an n-element set is C(n, k) = (n)ₖ/k!.

Proof. Double count the set of pairs consisting of a k-element subset A ⊆ [n] and a linear ordering of A. On one hand such a pair is exactly an injection [k] → [n] (list the elements of A in the chosen order), and there are (n)ₖ of these. On the other hand each A admits k! orderings. Hence C(n, k) · k! = (n)ₖ. ∎

In Lesson 12 this argument will reappear as the orbit–stabiliser theorem: S_k acts freely on the injections [k] → [n] by permuting positions, and the orbits are the k-subsets. This is the conceptual content of the phrase "a combination is a permutation with the order forgotten".

The extension C(α, k) = (α)ₖ/k! makes sense for any α in a commutative ℚ-algebra, and Newton's binomial series (1 + x)^α = ∑ₖ C(α, k)xᵏ holds as an identity of formal power series. For a negative integer, C(−n, k) = (−1)ᵏ C(n + k − 1, k), an identity that we will interpret combinatorially in Lesson 8.

Identities by bijection

Each of the following is proved by exhibiting two ways of counting the same set.

        C(n, k) = C(n, n − k)                                  (complementation)
        C(n, k) = C(n − 1, k) + C(n − 1, k − 1)                (does the subset contain n?)
        ∑ᵢ C(m, i) C(n, k − i) = C(m + n, k)                    (Vandermonde)
        ∑ⱼ₌ₖⁿ C(j, k) = C(n + 1, k + 1)                          (hockey stick)
        ∑ₖ k·C(n, k) = n·2ⁿ⁻¹                                    (committee with a chair)

For Vandermonde's identity, split the (m + n)-set into an m-set and an n-set and classify k-subsets by the number i of elements taken from the first part. For the hockey-stick identity, classify the (k+1)-subsets of [n+1] by their largest element j + 1: the remaining k elements form a k-subset of [j]. For the last identity, count pairs (committee, chair) either by first choosing the committee (∑ k C(n, k)) or by first choosing the chair and then any subset of the others (n · 2ⁿ⁻¹).

The binomial theorem (x + y)ⁿ = ∑ₖ C(n, k)xᵏyⁿ⁻ᵏ holds in any commutative ring, and more generally whenever xy = yx: expanding the product of n factors (x + y), each term corresponds to the subset of factors from which x is chosen. In a noncommutative setting the expansion instead has 2ⁿ distinct words, and the binomial theorem fails; this is one of the earliest places where the difference between ordered and unordered selection is visible in algebra.

Multinomial coefficients and permutations of multisets

Theorem 7.2. Let a₁ + ⋯ + a_r = n with aᵢ ≥ 0. The number of words of length n containing exactly aᵢ copies of the letter i is the multinomial coefficient

        C(n; a₁, …, a_r) = n!/(a₁! a₂! ⋯ a_r!).

Proof. Label the copies of each letter to make them distinct; there are then n! words. Erasing the labels identifies exactly a₁!⋯a_r! labelled words with each unlabelled one. Alternatively, choose the positions of the 1s in C(n, a₁) ways, then of the 2s in C(n − a₁, a₂) ways, and so on, and multiply. ∎

Thus MISSISSIPPI, with letter multiplicities 1, 4, 4, 2, has 11!/(1! 4! 4! 2!) = 34,650 distinct arrangements. The multinomial theorem (x₁ + ⋯ + x_r)ⁿ = ∑ C(n; a)x₁^(a₁)⋯x_r^(a_r) follows as the binomial theorem did. Words with prescribed multiplicities are also in bijection with lattice paths: words in E and N with m copies of E and n copies of N are monotone lattice paths from (0, 0) to (m, n), so there are C(m + n, m) of them.

The reflection principle and the Catalan numbers

A Dyck path of semilength n is a lattice path from (0, 0) to (n, n) with unit steps E and N that never rises above the diagonal y = x. A path that does rise above it touches the line y = x + 1 for a first time; reflecting the portion of the path after that point in the line y = x + 1 gives a bijection from bad paths to all paths from (0, 0) to (n − 1, n + 1). Hence the number of Dyck paths is the Catalan number

        Cₙ = C(2n, n) − C(2n, n + 1) = C(2n, n)/(n + 1),

so C₀, C₁, … = 1, 1, 2, 5, 14, 42, 132, 429, …. Catalan numbers count, among hundreds of other families, the permutations of [n] avoiding the pattern 231 (stack-sortable permutations, Knuth 1968), which is a first example of the theory of pattern avoidance.

Binomial coefficients modulo a prime

Theorem 7.3 (Lucas, 1878). Let p be prime, and write n = ∑ nᵢ pⁱ and k = ∑ kᵢ pⁱ in base p. Then C(n, k) ≡ ∏ᵢ C(nᵢ, kᵢ) (mod p), with the convention C(a, b) = 0 for b > a.

Proof. In 𝔽_p[x] we have (1 + x)^p = 1 + x^p, since p divides C(p, j) for 0 < j < p. Hence (1 + x)ⁿ = ∏ᵢ (1 + x^(pⁱ))^(nᵢ). Expanding the right side, the coefficient of xᵏ comes from the unique choice of exponents kᵢ pⁱ (by uniqueness of base-p representation with digits less than p), and equals ∏ C(nᵢ, kᵢ). ∎

For example 12 = 22₅ and 5 = 10₅, so C(12, 5) ≡ C(2, 1)C(2, 0) = 2 (mod 5); indeed C(12, 5) = 792 ≡ 2. Kummer's companion theorem states that the exponent of p in C(n, k) equals the number of carries when k and n − k are added in base p.

✏️ Your Turn

(a) How many distinct arrangements does the word BANANA have?
(b) Evaluate ∑ᵢ₌₀⁵ C(5, i)² by Vandermonde's identity.
(c) Use Lucas's theorem to find C(10, 3) mod 3, and check directly.

Answers: (a) 6!/(3! 2! 1!) = 720/12 = 60. (b) ∑ C(5, i)C(5, 5 − i) = C(10, 5) = 252. (c) 10 = 101₃ and 3 = 010₃, so C(10, 3) ≡ C(1, 0)C(0, 1)C(1, 0) = 0 (mod 3); indeed C(10, 3) = 120 = 3 · 40.

─────────────────────────────────
Lesson 8: Multisets, Combinations with Repetition and the Twelvefold Way
─────────────────────────────────

📌 Key idea of this section:

        A k-multiset on n types: ((n k)) = C(n + k − 1, k) = (−1)ᵏ C(−n, k).
        ∑ₖ ((n k)) xᵏ = (1 − x)^(−n).
        Twelve ways to distribute k balls into n boxes: the twelvefold way.

Multisets

A multiset of size k on an n-element set N is a function m : N → ℤ_(≥0) with ∑ m(y) = k; m(y) is the multiplicity of y. Equivalently, it is a combination with repetition. Write ((n k)) for the number of such multisets.

Theorem 8.1. ((n k)) = C(n + k − 1, k).

First proof (stars and bars). Encode a multiset on N = {y₁, …, yₙ} as a word of k stars and n − 1 bars: m(y₁) stars, a bar, m(y₂) stars, a bar, and so on. This is a bijection onto words of length n + k − 1 with k stars, of which there are C(n + k − 1, k). ∎

Second proof (shifting). A k-multiset on [n] is a weakly increasing sequence 1 ≤ a₁ ≤ a₂ ≤ ⋯ ≤ a_k ≤ n. The map aᵢ ↦ bᵢ = aᵢ + i − 1 sends it to a strictly increasing sequence 1 ≤ b₁ < b₂ < ⋯ < b_k ≤ n + k − 1, that is, to a k-subset of [n + k − 1], and the map is invertible. ∎

The same shifting idea counts k-subsets of [n] with no two consecutive elements: subtracting i − 1 from the i-th smallest element gives an arbitrary k-subset of [n − k + 1], so there are C(n − k + 1, k). For n = 12 and k = 4 this gives C(9, 4) = 126.

Reciprocity and generating functions

Expanding (1 − x)^(−n) = (1 + x + x² + ⋯)ⁿ, the coefficient of xᵏ counts the ways to write k = e₁ + ⋯ + eₙ with eᵢ ≥ 0, which is ((n k)). Comparing with Newton's series gives the reciprocity law

        ((n k)) = (−1)ᵏ C(−n, k),

which says that counting multisets is counting subsets "of a set of size −n". This is the simplest instance of combinatorial reciprocity, a phenomenon developed systematically by Stanley in the theory of Ehrhart polynomials and P-partitions.

Compositions and bounded solutions

The number of solutions of x₁ + ⋯ + xₙ = k in nonnegative integers is ((n k)) = C(n + k − 1, n − 1), and in positive integers (compositions of k into n parts) it is C(k − 1, n − 1), by substituting xᵢ = yᵢ + 1. Lower bounds are handled by substitution and upper bounds by inclusion–exclusion. For example, the solutions of x₁ + x₂ + x₃ = 10 with 0 ≤ xᵢ ≤ 4 number C(12, 2) − 3C(7, 2) + 3C(2, 2) = 66 − 63 + 3 = 6: we subtract, for each i, the solutions with xᵢ ≥ 5 (substitute xᵢ = 5 + yᵢ, leaving sum 5), and add back the solutions with two variables at least 5 (leaving sum 0). The six solutions are the rearrangements of (4, 4, 2) and (4, 3, 3).

Stirling numbers of the second kind

The Stirling number of the second kind S(k, n) is the number of partitions of [k] into n nonempty unlabelled blocks. It satisfies S(k + 1, n) = n S(k, n) + S(k, n − 1) (the element k + 1 joins one of the n blocks or forms a block alone), and the inclusion–exclusion of Lesson 1 gives

        S(k, n) = (1/n!) ∑ⱼ₌₀ⁿ (−1)ʲ C(n, j)(n − j)ᵏ.

For instance S(5, 3) = (243 − 3 · 32 + 3 · 1)/6 = 25 and S(6, 3) = (729 − 192 + 3)/6 = 90. Counting all functions [k] → X with |X| = x according to the partition of [k] into nonempty fibres gives xᵏ = ∑ₙ S(k, n)(x)ₙ, the identity used in Lesson 5. The total B_k = ∑ₙ S(k, n) is the Bell number: 1, 1, 2, 5, 15, 52, 203, ….

The twelvefold way

Consider distributions of k balls into n boxes. The balls may be distinguishable (labelled) or not; the boxes may be distinguishable or not; and the distribution may be arbitrary, injective (at most one ball per box) or surjective (no empty box). This gives twelve counting problems, organised by Rota into the twelvefold way. With labelled balls and labelled boxes a distribution is a function from balls to boxes; forgetting the labels of the balls means passing to orbits under S_k, forgetting the labels of the boxes means passing to orbits under Sₙ.

        balls      boxes      arbitrary           injective        surjective
        labelled   labelled   nᵏ                  (n)ₖ             n! S(k, n)
        unlabelled labelled   C(n + k − 1, k)     C(n, k)          C(k − 1, n − 1)
        labelled   unlabelled ∑ⱼ≤ₙ S(k, j)       1 if k ≤ n       S(k, n)
        unlabelled unlabelled ∑ⱼ≤ₙ pⱼ(k)         1 if k ≤ n       pₙ(k)

Here pⱼ(k) denotes the number of partitions of k into exactly j parts, and the injective entries in the last two rows are 0 when k > n. The four entries in the arbitrary and injective columns of the first two rows are the subject of this course: the permutations (injections) and the combinations (injections modulo S_k), together with their versions with repetition (functions, and functions modulo S_k, that is, multisets). The rows with unlabelled boxes lead to set partitions and integer partitions, whose theory is much harder: there is no closed formula for p(n), and the Hardy–Ramanujan asymptotic p(n) ∼ exp(π√(2n/3))/(4n√3) is a deep theorem of analytic number theory.

✏️ Your Turn

(a) How many multisets of size 6 can be formed from 4 types?
(b) In how many ways can 12 identical coins be given to 4 people so that each receives at least 2?
(c) How many surjections are there from [6] onto [3]?

Answers: (a) C(9, 6) = 84. (b) Give each person 2 coins first; the remaining 4 coins are distributed arbitrarily: C(4 + 3, 3) = 35. (c) 3! · S(6, 3) = 6 · 90 = 540, which agrees with 3⁶ − 3 · 2⁶ + 3 · 1⁶ = 729 − 192 + 3 = 540.

─────────────────────────────────
Lesson 9: Inversions and q-Analogues of Permutations and Combinations
─────────────────────────────────

📌 Key idea of this section:

        ∑_(σ∈Sₙ) q^inv(σ) = [n]_q! = [1]_q [2]_q ⋯ [n]_q,   where [m]_q = 1 + q + ⋯ + q^(m−1).
        [n k]_q = [n]_q!/([k]_q! [n−k]_q!) = ∑ q^inv(w) over 0–1 words w with k ones.
        [n k]_q = number of k-dimensional subspaces of 𝔽_qⁿ.

The Lehmer code

Definition 9.1. The Lehmer code of σ ∈ Sₙ is the sequence L(σ) = (L₁, …, Lₙ), where Lᵢ = #{j > i : σ(j) < σ(i)} is the number of entries to the right of position i that are smaller than σ(i).

Clearly 0 ≤ Lᵢ ≤ n − i, and ∑ Lᵢ = inv(σ), since each inversion (i, j) with i < j is counted exactly once, at its left end.

Theorem 9.2. The map σ ↦ L(σ) is a bijection from Sₙ to the set of sequences (L₁, …, Lₙ) of integers with 0 ≤ Lᵢ ≤ n − i.

Proof. Both sets have n! elements, so it suffices to recover σ from L. Given L, σ(1) must be the element of [n] having exactly L₁ smaller elements among the remaining ones, that is, the (L₁ + 1)-st smallest element of [n]. Remove it; then σ(2) is the (L₂ + 1)-st smallest of the remaining n − 1 elements, and so on. Each step is forced and always possible because Lᵢ ≤ n − i. ∎

The Mahonian distribution

Theorem 9.3 (Rodrigues 1839; MacMahon). ∑_(σ∈Sₙ) q^inv(σ) = ∏ᵢ₌₁ⁿ (1 + q + ⋯ + q^(i−1)) = [n]_q!.

Proof. Under the bijection of Theorem 9.2, inv(σ) = L₁ + ⋯ + Lₙ with the Lᵢ ranging independently over {0, …, n − i}. Hence ∑ q^inv(σ) = ∏ᵢ (1 + q + ⋯ + q^(n−i)), which is [n]_q! after reindexing. ∎

For n = 4 the coefficients are 1, 3, 5, 6, 5, 3, 1, and for n = 5 they are 1, 4, 9, 15, 20, 22, 20, 15, 9, 4, 1. The distribution is symmetric (σ ↦ σ composed with the reversal maps inv to n(n−1)/2 − inv) and unimodal. Because a uniformly random σ has independent uniformly distributed Lehmer digits, the number of inversions has mean ∑ (n − i)/2 = n(n − 1)/4 and variance ∑ⱼ₌₁ⁿ (j² − 1)/12 = n(n − 1)(2n + 5)/72, and it satisfies a central limit theorem.

MacMahon (1913) discovered that the major index maj(σ) = ∑ i over the descents i (positions with σ(i) > σ(i + 1)) has the same distribution as inv. A statistic with generating function [n]_q! is now called Mahonian; Foata (1968) gave an explicit bijection φ : Sₙ → Sₙ with inv(φ(σ)) = maj(σ).

Gaussian binomial coefficients

Definition 9.4. The Gaussian (q-)binomial coefficient is [n k]_q = [n]_q!/([k]_q! [n − k]_q!) for 0 ≤ k ≤ n.

Theorem 9.5. (i) [n k]_q = ∑_w q^inv(w), where w ranges over words of length n with k letters 1 and n − k letters 0, and inv(w) counts pairs of positions i < j with wᵢ = 1, wⱼ = 0. In particular [n k]_q is a polynomial in q with nonnegative integer coefficients, and it reduces to C(n, k) at q = 1. (ii) The q-Pascal recurrence holds: [n k]_q = [n−1 k−1]_q + qᵏ [n−1 k]_q. (iii) If q is a prime power, [n k]_q is the number of k-dimensional subspaces of the vector space 𝔽_qⁿ.

Proof. (ii) for the word sum: if the last letter of w is 1, it creates no inversions, leaving a word of length n − 1 with k − 1 ones; if it is 0, each of the k ones precedes it, contributing qᵏ times the sum over words of length n − 1 with k ones. The quotient [n]!/([k]![n−k]!) satisfies the same recurrence, as one checks from [n]_q = [k]_q + qᵏ[n − k]_q, and the same boundary values, proving (i). For (iii), count ordered k-tuples of linearly independent vectors in 𝔽_qⁿ: the i-th vector must avoid the span of the previous ones, giving (qⁿ − 1)(qⁿ − q)⋯(qⁿ − q^(k−1)) tuples. Each k-dimensional subspace has (qᵏ − 1)(qᵏ − q)⋯(qᵏ − q^(k−1)) ordered bases. The quotient is ∏ᵢ₌₀^(k−1) (q^(n−i) − 1)/(q^(k−i) − 1), and dividing every factor by q − 1 shows it equals [n k]_q. ∎

Part (iii) is the precise sense in which counting subspaces is the q-analogue of counting subsets, and in which the general linear group GLₙ(𝔽_q), of order ∏ᵢ₌₀^(n−1) (qⁿ − qⁱ), is a q-analogue of Sₙ. The argument in its proof — count ordered bases, then divide by the number of orderings of a basis — is exactly the argument C(n, k) = (n)ₖ/k! of Lesson 7 with "ordered list" replaced by "ordered basis". For example,

        [4 2]_q = (1 + q²)(1 + q + q²) = 1 + q + 2q² + q³ + q⁴,

which at q = 1 gives C(4, 2) = 6 and at q = 2 gives 35, the number of 2-dimensional subspaces of 𝔽₂⁴; directly, (2⁴ − 1)(2⁴ − 2)/((2² − 1)(2² − 2)) = 15 · 14/6 = 35. The q-binomial theorem ∏ᵢ₌₀^(n−1) (1 + qⁱx) = ∑ₖ q^(k(k−1)/2) [n k]_q xᵏ is the q-analogue of the binomial theorem.

✏️ Your Turn

(a) Find the Lehmer code and the number of inversions of σ = 3 1 4 2.
(b) How many permutations of [5] have exactly 4 inversions?
(c) Compute the number of 2-dimensional subspaces of 𝔽₃⁴.

Answers: (a) L = (2, 0, 1, 0), so inv(σ) = 3, as found in Lesson 3. (b) The coefficient of q⁴ in [5]_q!, which is 20. (c) (3⁴ − 1)(3⁴ − 3)/((3² − 1)(3² − 3)) = 80 · 78/(8 · 6) = 6240/48 = 130.

─────────────────────────────────
Lesson 10: Ranking and Unranking Permutations and Combinations
─────────────────────────────────

📌 Key idea of this section:

        Lexicographic rank of σ ∈ Sₙ (from 0):  r(σ) = ∑ᵢ Lᵢ · (n − i)!   (factorial number system).
        Colex rank of {c₁ < c₂ < ⋯ < c_k} ⊂ {0, 1, 2, …}:  N = C(c₁, 1) + C(c₂, 2) + ⋯ + C(c_k, k).
        Ranking turns combinatorial objects into integers and back, enabling uniform sampling and indexing.

The problem

A ranking of a finite set 𝒳 of combinatorial objects with respect to a total order is the bijection rank : 𝒳 → {0, 1, …, |𝒳| − 1} giving each object its position; unranking is the inverse map. Efficient ranking and unranking allow one to store an object as an integer, to index arrays by objects, to sample uniformly at random (choose a uniform integer and unrank it), and to split exhaustive searches into independent ranges for parallel computation.

Lexicographic ranking of permutations

Order Sₙ lexicographically by one-line words. For n = 3 the order is 123, 132, 213, 231, 312, 321.

Theorem 10.1. The lexicographic rank (counting from 0) of σ ∈ Sₙ is r(σ) = ∑ᵢ₌₁ⁿ Lᵢ (n − i)!, where (L₁, …, Lₙ) is the Lehmer code.

Proof. A permutation τ precedes σ if and only if, for some i, τ agrees with σ in positions 1, …, i − 1 and τ(i) < σ(i). For a fixed i, the possible values of τ(i) are the values smaller than σ(i) not used in positions 1, …, i − 1 — that is, the values smaller than σ(i) that appear in σ to the right of position i. There are Lᵢ of them, and for each the remaining n − i positions can be filled in (n − i)! ways. Summing over i gives the result. ∎

Since 0 ≤ Lᵢ ≤ n − i, Theorem 10.1 is the statement that every integer 0 ≤ r < n! has a unique representation r = ∑ₘ₌₀^(n−1) dₘ m! with digits 0 ≤ dₘ ≤ m, the factorial number system (factoradic). Unranking is a mixed-radix conversion followed by the decoding of Theorem 9.2.

Example 10.2. For σ = 3 1 4 2, L = (2, 0, 1, 0) and r(σ) = 2 · 3! + 0 · 2! + 1 · 1! + 0 · 0! = 13, so σ is the fourteenth permutation of [4] in lexicographic order. Conversely, to unrank 13 in S₄, write 13 = 2 · 6 + 0 · 2 + 1 · 1 + 0, so L = (2, 0, 1, 0). From {1, 2, 3, 4} take the element of index 2 (counting from 0), namely 3; from {1, 2, 4} take index 0, namely 1; from {2, 4} take index 1, namely 4; the last element is 2. This recovers 3 1 4 2.

Implemented naively each conversion costs O(n²) operations; with a Fenwick tree (binary indexed tree) for the order statistics it costs O(n log n). Myrvold and Ruskey (2001) gave linear-time ranking and unranking algorithms, at the price of using an order on Sₙ that is not lexicographic.

The successor algorithm

To step through Sₙ in lexicographic order without ranking, use the following procedure, already described by Nārāyaṇa Paṇḍita in the fourteenth century. Given σ, find the largest i with σ(i) < σ(i + 1) (if none exists, σ is the last permutation); find the largest j > i with σ(j) > σ(i); swap σ(i) and σ(j); and reverse the suffix σ(i + 1)⋯σ(n). For example, from 1 4 3 2 we find i = 1, j = 4, swap to get 2 4 3 1, and reverse the suffix to obtain 2 1 3 4. The correctness argument is that the suffix after position i is decreasing, so it is the last arrangement of its entries, and the successor must increase position i by the least possible amount and then begin the smallest arrangement of the suffix.

Colexicographic ranking of combinations

Represent a k-subset of ℕ = {0, 1, 2, …} as A = {c₁ < c₂ < ⋯ < c_k}. The colexicographic order compares two k-subsets by their largest elements first: A precedes B if the largest element of the symmetric difference A △ B belongs to B. For 2-subsets of {0, 1, 2, 3} the order is 01, 02, 12, 03, 13, 23.

Theorem 10.3 (Combinatorial number system). The colex rank of A = {c₁ < ⋯ < c_k} among all k-subsets of ℕ is N(A) = ∑ᵢ₌₁ᵏ C(cᵢ, i). Consequently every integer N ≥ 0 has a unique representation N = C(c_k, k) + ⋯ + C(c₁, 1) with c_k > ⋯ > c₁ ≥ 0.

Proof. A k-subset B precedes A exactly when the largest element of A △ B lies in A; call it cᵢ. Then B agrees with A above cᵢ, so B contains c_(i+1), …, c_k, omits cᵢ, and has its remaining i elements below cᵢ, chosen arbitrarily from {0, …, cᵢ − 1}. There are C(cᵢ, i) such B for each i, and summing gives the rank. Since every k-subset has only finitely many predecessors and there are infinitely many k-subsets, the colex order is a well-order of type ω, so the rank map is a bijection onto ℕ; this is the uniqueness and existence of the representation. ∎

The rank does not depend on any ambient n, which makes colex the natural order for combinations. Unranking is greedy: choose c_k as the largest c with C(c, k) ≤ N, subtract, and repeat with k − 1. For example, with k = 3, the subset {1, 3, 4} has rank C(1, 1) + C(3, 2) + C(4, 3) = 1 + 3 + 4 = 8; conversely for N = 8, the largest c with C(c, 3) ≤ 8 is 4 (C(4, 3) = 4, C(5, 3) = 10), leaving 4; the largest c with C(c, 2) ≤ 4 is 3, leaving 1; and C(1, 1) = 1 gives c₁ = 1.

Lexicographic order on k-subsets of [n] is obtained from colex by a reflection: if φ(A) = {n − a : a ∈ A} ⊆ {0, …, n − 1}, then the lexicographic rank of A equals C(n, k) − 1 − N(φ(A)). For example, among the 3-subsets of [6], A = {2, 4, 5} has φ(A) = {1, 2, 4}, with N = 1 + 1 + 4 = 6, so its lexicographic rank is 20 − 1 − 6 = 13.

✏️ Your Turn

(a) Find the lexicographic rank (from 0) of 2 4 1 3 in S₄.
(b) Unrank 100 in S₅ (lexicographic order, counting from 0).
(c) Find the 3-subset of ℕ with colex rank 50.

Answers: (a) L = (1, 2, 0, 0), so r = 1 · 6 + 2 · 2 = 10. (b) 100 = 4 · 24 + 0 · 6 + 2 · 2 + 0 · 1, so L = (4, 0, 2, 0, 0); decoding from {1, 2, 3, 4, 5} gives 5, then 1, then 4, then 2, then 3: the permutation 5 1 4 2 3. (c) C(7, 3) = 35 ≤ 50 < C(8, 3) = 56, leaving 15 = C(6, 2), leaving 0 = C(0, 1): the subset {0, 6, 7}.

─────────────────────────────────
Lesson 11: Gray Codes for Subsets, Permutations and Combinations
─────────────────────────────────

📌 Key idea of this section:

        A Gray code lists a family of objects so that consecutive objects differ minimally.
        Binary reflected Gray code: g(i) = i ⊕ ⌊i/2⌋; the bit flipped at step i → i+1 is ν₂(i+1).
        Steinhaus–Johnson–Trotter: all of Sₙ by adjacent transpositions; revolving door for k-subsets.

Subsets: the binary reflected Gray code

Identify subsets of [n] with binary words of length n. The binary reflected Gray code (BRGC) is defined recursively by Γ₁ = 0, 1 and Γₙ = 0Γₙ₋₁, 1Γₙ₋₁ᴿ, where ᴿ denotes the list in reverse order and 0Γ means prefix 0 to every word. Thus

        Γ₂ = 00, 01, 11, 10
        Γ₃ = 000, 001, 011, 010, 110, 111, 101, 100

Consecutive words differ in one bit (within each half by induction, and across the middle because the two halves meet at the same word of Γₙ₋₁), and the last word 10⋯0 differs from the first in one bit, so Γₙ is a Hamiltonian cycle on the hypercube graph Qₙ. The code is named after Frank Gray of Bell Laboratories, whose patent (filed 1947, granted 1953) used it to reduce errors in analogue-to-digital conversion; it had appeared earlier in Baudot's telegraph codes and in the solution of the Chinese rings puzzle.

Theorem 11.1. The i-th word of Γₙ (counting from 0) is the binary expansion of g(i) = i ⊕ ⌊i/2⌋, where ⊕ is bitwise exclusive or. The word changes between positions i and i + 1 in bit ν₂(i + 1), the exponent of 2 in i + 1 (bits numbered from 0 at the right).

Proof. For the second statement, i ⊕ (i + 1) = 2^(t+1) − 1 where t = ν₂(i + 1) (adding 1 turns the t trailing ones of i into zeros and the next zero into a one). Hence g(i) ⊕ g(i + 1) = (2^(t+1) − 1) ⊕ (2ᵗ − 1) = 2ᵗ. For the first statement, induct on n, the case n = 1 being clear; for n ≥ 2 and i < 2ⁿ⁻¹ the leading bit is 0 on both sides. For i = 2ⁿ⁻¹ + j with 0 ≤ j < 2ⁿ⁻¹, the reflected half places at position i the word 1 followed by entry 2ⁿ⁻¹ − 1 − j = j̄ (the bitwise complement of j in n − 1 bits) of Γₙ₋₁. Using M ⊕ ⌊M/2⌋ = 2ⁿ⁻² for M = 2ⁿ⁻¹ − 1, one computes g(j̄) = g(j) ⊕ 2ⁿ⁻² and g(i) = 2ⁿ⁻¹ ⊕ 2ⁿ⁻² ⊕ g(j) = 2ⁿ⁻¹ ⊕ g(j̄), as required. ∎

The sequence ν₂(1), ν₂(2), ν₂(3), … = 0, 1, 0, 2, 0, 1, 0, 3, … (the ruler sequence) is also the sequence of discs moved in the optimal solution of the Tower of Hanoi, which is no coincidence: the Tower of Hanoi state graph and the BRGC are two encodings of the same recursion. The inverse map is the prefix exclusive or: if g has bits g_(n−1)⋯g₀, then i has bits bₖ = g_(n−1) ⊕ ⋯ ⊕ gₖ.

Permutations: plain changes

Theorem 11.2 (Steinhaus–Johnson–Trotter). The permutations of [n] can be listed so that each is obtained from the previous one by swapping two adjacent entries, and the last differs from the first by an adjacent swap.

Proof. Induct on n. Given such a list for Sₙ₋₁, replace its j-th permutation by the n permutations obtained by inserting n into each of the n gaps, sweeping from right to left when j is odd and from left to right when j is even. Within a block, consecutive permutations differ by moving n one place, an adjacent swap. Between blocks, n is at the same end of both consecutive permutations, and the remaining entries differ by an adjacent swap by induction. The number of blocks, (n − 1)!, is even for n ≥ 3, so the final block ends with n in the same position as at the beginning of the first block, and the cyclic closing step is again an adjacent swap (for n = 2 the list 12, 21 is trivially cyclic). ∎

For n = 3 the list is 123, 132, 312, 321, 231, 213, and for n = 4 it begins 1234, 1243, 1423, 4123, 4132, 1432, 1342, 1324, 3124, …. This method, known as plain changes, was used by English change ringers in the seventeenth century, three hundred years before its rediscovery by Johnson and Trotter (1962–63) for computers. In graph-theoretic language, it is a Hamiltonian cycle in the Cayley graph of Sₙ with respect to the adjacent transpositions, the 1-skeleton of the permutohedron. Since each step changes the sign, consecutive permutations alternate in parity, giving another proof that exactly half of Sₙ is even. More generally, Kompel'maher and Liskovets (1975) proved that the Cayley graph of Sₙ with respect to any generating set of transpositions is Hamiltonian; whether every connected Cayley graph of a finite group with at least three elements has a Hamiltonian cycle remains open.

Combinations: the revolving door

Theorem 11.3. The k-subsets of [n] can be listed so that each is obtained from the previous one by removing one element and inserting another.

Proof. Define lists R(n, k) recursively by R(n, 0) = (∅), R(n, n) = ([n]), and for 0 < k < n, R(n, k) = R(n − 1, k) followed by the reverse of R(n − 1, k − 1) with n added to each set. Within each part consecutive sets differ by one exchange by induction. For k = 1 the list is 1, 2, …, n and there is nothing to prove, so let k ≥ 2. One shows by induction that R(n, k) begins with [k] and ends with {1, …, k − 1, n} (for k ≥ 1); hence the junction joins the last set {1, …, k − 1, n − 1} of R(n − 1, k) to the first set of the reversed second part, {1, …, k − 2, n − 1, n} (the last set of R(n − 1, k − 1) is {1, …, k − 2, n − 1}), which differ by exchanging k − 1 for n. ∎

For n = 4, k = 2 the revolving door order is 12, 23, 13, 34, 24, 14, and the last set 14 also differs from the first set 12 by a single exchange. Knuth's The Art of Computer Programming, Volume 4A, treats these and many refinements, including loopless algorithms, which produce each successor in a bounded number of operations, with no loops at all.

✏️ Your Turn

(a) Compute the 4-bit BRGC word with index 13, and the index of the word 1101.
(b) Which bit changes between the 5-bit BRGC words of indices 23 and 24?
(c) Write down R(4, 2) using the recursion and verify that it is the list given above.

Answers: (a) 13 ⊕ 6 = 1101 ⊕ 0110 = 1011. For 1101 the prefix exclusive or gives bits 1, 1 ⊕ 1 = 0, 0 ⊕ 0 = 0, 0 ⊕ 1 = 1, so the index is 1001 = 9; check: 9 ⊕ 4 = 1001 ⊕ 0100 = 1101. (b) ν₂(24) = 3, so bit 3 (the second from the left in a 5-bit word) changes: g(23) = 10111 ⊕ 01011 = 11100 and g(24) = 11000 ⊕ 01100 = 10100, which differ in bit 3. (c) R(3, 2) = 12, 23, 13 and R(3, 1) = 1, 2, 3, so R(4, 2) = 12, 23, 13 followed by 34, 24, 14.

─────────────────────────────────
Lesson 12: Group Actions, Cayley's Theorem and Counting up to Symmetry
─────────────────────────────────

📌 Key idea of this section:

        An action of G on X is a homomorphism G → Sym(X).
        Orbit–stabiliser: |G·x| = [G : G_x] = |G|/|G_x|.
        Burnside: #orbits = (1/|G|) ∑_(g∈G) |Fix(g)|.

Group actions

Definition 12.1. An action of a group G on a set X is a map G × X → X, (g, x) ↦ g·x, such that e·x = x and g·(h·x) = (gh)·x for all g, h ∈ G and x ∈ X. The orbit of x is G·x = {g·x : g ∈ G}; the stabiliser of x is G_x = {g : g·x = x}, a subgroup of G.

For each g the map x ↦ g·x is a bijection of X, with inverse x ↦ g⁻¹·x, and the axioms say exactly that g ↦ (x ↦ g·x) is a homomorphism G → Sym(X). Conversely every homomorphism G → Sym(X) defines an action. Thus a group action is nothing other than a representation of a group by permutations, and the symmetric groups are the universal recipients of such representations. The orbits partition X, because "y lies in the orbit of x" is an equivalence relation.

Cayley's theorem

Theorem 12.2 (Cayley, 1854). Every group G is isomorphic to a subgroup of Sym(G). In particular every group of order n is isomorphic to a subgroup of Sₙ.

Proof. Let G act on itself by left multiplication, g·x = gx. This is an action, so it gives a homomorphism λ : G → Sym(G), λ(g)(x) = gx. If λ(g) is the identity, then g = g·e = e, so λ is injective, and G ≅ λ(G). Choosing a bijection G → [n] identifies Sym(G) with Sₙ. ∎

For the cyclic group ℤ/4ℤ, the left regular representation sends the generator 1 to the 4-cycle x ↦ x + 1, so ℤ/4ℤ ≅ ⟨(1 2 3 4)⟩ ≤ S₄. Cayley's embedding is usually far from economical: S₃ embeds in S₆ by its regular representation, although it already acts faithfully on 3 points; on the other hand the quaternion group of order 8, which has no faithful action on fewer than 8 points, shows that the regular representation cannot always be improved. The theorem is nonetheless the reason that permutation groups are as general as groups: every question about finite groups can, in principle, be asked inside a symmetric group.

The orbit–stabiliser theorem

Theorem 12.3. Let G act on X and x ∈ X. The map gG_x ↦ g·x is a well-defined bijection from the set of left cosets of G_x onto G·x. In particular, if G is finite, |G·x| · |G_x| = |G|.

Proof. If gG_x = hG_x then h⁻¹g ∈ G_x, so h⁻¹g·x = x and g·x = h·x; this proves the map is well defined, and reversing the argument proves injectivity. It is surjective by the definition of the orbit. Lagrange's theorem gives the counting statement. ∎

Combinations are orbits

We can now state precisely the relationship that the elementary course describes as "divide the permutations by k!". Let X be the set of injections f : [k] → [n] (the k-permutations of [n]), and let S_k act on X by f ↦ f ∘ π⁻¹, that is, by rearranging the positions of the list. Two injections lie in the same orbit if and only if they have the same image, so the orbits are in bijection with the k-subsets of [n]. The action is free (every stabiliser is trivial), because if f ∘ π⁻¹ = f with f injective then π = 1. By the orbit–stabiliser theorem every orbit has exactly k! elements, so

        C(n, k) = |X / S_k| = (n)ₖ / k!.

Alternatively, let Sₙ act on the set of k-subsets of [n]. The action is transitive, and the stabiliser of {1, …, k} is the Young subgroup S_k × S_(n−k), which permutes {1, …, k} and {k + 1, …, n} separately. Orbit–stabiliser gives C(n, k) = n!/(k!(n − k)!). In the same way, Sₙ acts transitively on the words with aᵢ copies of the letter i, with stabiliser S_(a₁) × ⋯ × S_(a_r), which recovers the multinomial coefficient of Theorem 7.2. Applied to the conjugation action of Sₙ on itself, orbit–stabiliser shows that the conjugacy class of σ has size n!/|C(σ)|, where C(σ) is the centraliser, and so completes the proof of Theorem 4.3.

Burnside's lemma

Theorem 12.4 (Cauchy–Frobenius–Burnside). If a finite group G acts on a finite set X, the number of orbits is (1/|G|) ∑_(g∈G) |Fix(g)|, where Fix(g) = {x : g·x = x}.

Proof. Count the pairs (g, x) with g·x = x. Summing over g gives ∑_g |Fix(g)|; summing over x gives ∑_x |G_x| = ∑_x |G|/|G·x|. Group the last sum by orbits: each orbit O contributes |O| · |G|/|O| = |G|. Hence ∑_g |Fix(g)| = |G| × (number of orbits). ∎

Although named after Burnside, who stated it in his 1897 textbook, the lemma was known to Cauchy (1845) and to Frobenius (1887).

Example 12.5 (Necklaces). Colour the n beads of a circular necklace with q colours, and regard two colourings as equivalent if they differ by a rotation. The cyclic group Cₙ acts, and the rotation by j places has gcd(n, j) cycles on the beads; a colouring is fixed by it if and only if it is constant on each cycle, so |Fix| = q^gcd(n, j). Grouping the rotations by d = n/gcd(n, j), of which there are φ(d) for each divisor d of n, Burnside's lemma gives

        N(n, q) = (1/n) ∑_(d | n) φ(d) q^(n/d).

For n = 6 and q = 2 the divisors d = 1, 2, 3, 6 have φ(d) = 1, 1, 2, 2, giving (2⁶ + 2³ + 2 · 2² + 2 · 2¹)/6 = (64 + 8 + 8 + 4)/6 = 14. If reflections are also allowed (bracelets), the dihedral group of order 12 acts, and the count drops to 13. For a prime number p of beads, N(p, q) = (q^p + (p − 1)q)/p, and the integrality of this number is a combinatorial proof of Fermat's little theorem: p divides q^p − q.

Example 12.6 (Colouring the faces of a cube). The rotation group of the cube has order 24: the identity; 6 rotations by ±90° about face axes (3 cycles on faces each); 3 rotations by 180° about face axes (4 cycles); 8 rotations by ±120° about vertex axes (2 cycles); and 6 rotations by 180° about edge axes (3 cycles). With 2 colours, the number of distinct colourings is (2⁶ + 6 · 2³ + 3 · 2⁴ + 8 · 2² + 6 · 2³)/24 = (64 + 48 + 48 + 32 + 48)/24 = 240/24 = 10.

Pólya's refinement

In both examples |Fix(g)| depended only on the cycle type of g as a permutation of the positions being coloured: a colouring with q colours is fixed by g exactly when it is constant on the cycles of g, so |Fix(g)| = q^κ(g). Pólya (1937) packaged this in the cycle index Z(G) = (1/|G|) ∑_g ∏ᵢ xᵢ^(mᵢ(g)), where mᵢ(g) is the number of i-cycles of g; the number of q-colourings up to symmetry is Z(G) evaluated at xᵢ = q for all i, and substituting xᵢ = y₁ⁱ + y₂ⁱ + ⋯ counts colourings by their content. For the full symmetric group, Theorem 4.3 gives Z(Sₙ) = ∑_(λ⊢n) (1/z_λ) ∏ᵢ xᵢ^(mᵢ(λ)), and evaluating at xᵢ = q yields the number of multisets of size n from q types, ((q n)) — combinations with repetition reappear as orbits of functions [n] → [q] under Sₙ.

✏️ Your Turn

(a) How many 2-colour necklaces with 6 beads are there up to rotation? Re-derive 14 by listing the fixed-point counts of the six rotations.
(b) How many 3-colour necklaces with 5 beads are there up to rotation?
(c) Let S₇ act on the 3-element subsets of [7]. What is the order of the stabiliser of {1, 2, 3}, and what is the orbit size?

Answers: (a) Rotations by 0, 1, 2, 3, 4, 5 places have gcd(6, j) = 6, 1, 2, 3, 2, 1 cycles, fixing 64, 2, 4, 8, 4, 2 colourings; the total 84 divided by 6 is 14. (b) (3⁵ + 4 · 3)/5 = (243 + 12)/5 = 51. (c) The stabiliser is S₃ × S₄, of order 6 · 24 = 144, and the orbit has 5040/144 = 35 = C(7, 3) elements.

─────────────────────────────────
Lesson 13: Random Permutations
─────────────────────────────────

📌 Key idea of this section:

        For uniform σ ∈ Sₙ, the number of cycles Kₙ is a sum of independent Bernoulli(1/i), i = 1, …, n.
        E[Kₙ] = Hₙ = ln n + γ + o(1),   Var(Kₙ) = Hₙ − Hₙ⁽²⁾ ∼ ln n.
        The number of j-cycles has mean exactly 1/j and converges to Poisson(1/j).

The cycle count as a sum of independent indicators

Let σ be uniformly distributed on Sₙ, and let Kₙ = κ(σ). By Theorem 5.3 the probability generating function of Kₙ is

        E[x^Kₙ] = x(x + 1)⋯(x + n − 1)/n! = ∏ᵢ₌₁ⁿ ( (1 − 1/i) + x/i ).

The i-th factor is the generating function of a Bernoulli random variable Bᵢ with P(Bᵢ = 1) = 1/i. Since the generating function of a sum of independent variables is the product of their generating functions, Kₙ has the same distribution as B₁ + B₂ + ⋯ + Bₙ with the Bᵢ independent.

The Feller coupling makes this concrete. Build σ by determining its values along its cycles: start with x = 1, and at each step choose σ(x) uniformly among the values not yet used as images, then move to x = σ(x); whenever the chosen value is the first element of the current cycle, the cycle closes, and the next step starts from the least symbol not yet placed. At step i (i = 1, …, n), i − 1 values have been used, so there are n − i + 1 equally likely choices, exactly one of which closes the current cycle. Different sequences of choices give different permutations, and there are n(n − 1)⋯1 = n! sequences, so σ is uniform. The cycle count is the number of closures, a sum of independent Bernoulli variables with parameters 1/n, 1/(n − 1), …, 1/1. Consequently

        E[Kₙ] = ∑ᵢ₌₁ⁿ 1/i = Hₙ,        Var(Kₙ) = ∑ᵢ₌₁ⁿ (1/i)(1 − 1/i) = Hₙ − Hₙ⁽²⁾,

with Hₙ⁽²⁾ = ∑ 1/i² → π²/6. Since Hₙ = ln n + γ + 1/(2n) + O(1/n²), where γ ≈ 0.5772 is the Euler–Mascheroni constant, a random permutation has about ln n cycles. A well-shuffled deck of 52 cards, regarded as a permutation, has on average H₅₂ ≈ 4.54 cycles. Because Kₙ is a sum of independent bounded variables whose variance tends to infinity, the Lindeberg central limit theorem gives Goncharov's theorem (1940s): (Kₙ − ln n)/√(ln n) converges in distribution to the standard normal law.

Counts of cycles of each length

Let C_j(σ) be the number of j-cycles of σ. There are C(n, j)(j − 1)! possible j-cycles, and each appears in (n − j)! permutations, so

        E[C_j] = C(n, j)(j − 1)!(n − j)!/n! = 1/j   for 1 ≤ j ≤ n.

Summing over j recovers E[Kₙ] = Hₙ; the case j = 1 recovers E[F] = 1 from Lesson 6. By Theorem 4.3 and the formula ∑ 1/z_λ = 1, the joint distribution of (C₁, …, Cₙ) is

        P(C₁ = m₁, …, Cₙ = mₙ) = ∏ⱼ (1/j)^(mⱼ) / mⱼ!    whenever ∑ j·mⱼ = n.

Up to the conditioning on ∑ j·mⱼ = n, this is the joint law of independent Poisson variables with means 1/j. Goncharov and, in sharper form, Arratia and Tavaré (1992) proved that for each fixed b the vector (C₁, …, C_b) converges in distribution to independent Poisson variables Z₁, …, Z_b with E[Zⱼ] = 1/j, and the total variation distance tends to zero super-exponentially fast in n/b.

The cycle containing a given point

Proposition 13.1. The length of the cycle containing 1 is uniformly distributed on {1, …, n}.

Proof. The number of permutations in which 1 lies in a cycle of length ℓ is C(n − 1, ℓ − 1)(ℓ − 1)!(n − ℓ)!: choose the other ℓ − 1 members of the cycle, arrange them in a cycle with 1, and permute the rest. This equals (n − 1)! for every ℓ, so each length has probability (n − 1)!/n! = 1/n. ∎

In particular the probability that σ is an n-cycle is 1/n. A cycle of length j > n/2 can occur at most once, so the events "σ has a j-cycle" for j > n/2 are disjoint, each with probability E[C_j] = 1/j. Hence

        P(σ has a cycle longer than n/2) = ∑_(n/2 < j ≤ n) 1/j → ln 2.

The hundred prisoners

This computation solves a celebrated puzzle of Gál and Miltersen (2003). One hundred prisoners, numbered 1 to 100, are each allowed to open 50 of 100 boxes, which contain their numbers in a uniformly random arrangement; all are freed if every prisoner finds his own number, and they may agree on a strategy beforehand but not communicate afterwards. If each prisoner opens boxes independently at random, the probability of success is 2⁻¹⁰⁰. If instead prisoner i opens box i, then the box whose label is the number found there, and so on, he follows the cycle of the permutation containing i and succeeds exactly when that cycle has length at most 50. All succeed if and only if σ has no cycle longer than 50, which happens with probability

        1 − ∑ⱼ₌₅₁¹⁰⁰ 1/j = 1 − (H₁₀₀ − H₅₀) ≈ 0.3118,

and as n → ∞ the corresponding probability decreases to 1 − ln 2 ≈ 0.3069. The strategy is optimal (Curtin and Warshauer, 2006).

The longest cycle and the order

Let Lₙ be the length of the longest cycle. Shepp and Lloyd (1966) proved that E[Lₙ]/n → λ ≈ 0.62433, the Golomb–Dickman constant, which also governs the largest prime factor of a random integer; the distribution of Lₙ/n converges to a limit described by the Dickman function. More generally the sorted cycle lengths divided by n converge to the Poisson–Dirichlet distribution PD(1). The order of a random permutation is much larger than its number of cycles but much smaller than Landau's g(n): Erdős and Turán (1967) proved that ln ord(σ) is asymptotically normal with mean (ln n)²/2 and variance (ln n)³/3.

The Ewens distribution

The uniform measure is the member θ = 1 of the Ewens family P_θ(σ) = θ^κ(σ)/θ⁽ⁿ⁾, θ > 0, which arises in population genetics as the distribution of allelic partitions under neutral mutation, and in the Chinese restaurant process, where customer i joins an existing table at the right of a seated customer with probability 1/(θ + i − 1) each, or starts a new table with probability θ/(θ + i − 1). Under P_θ the number of cycles is a sum of independent Bernoulli(θ/(θ + i − 1)) variables, with mean ≈ θ ln n, and the cycle counts converge to independent Poisson(θ/j) variables.

✏️ Your Turn

(a) Compute E[K₁₀] exactly and to four decimal places.
(b) Compute the exact variance of K₄, both from the formula Hₙ − Hₙ⁽²⁾ and from the row 6, 11, 6, 1 of Stirling numbers.
(c) Ten prisoners each open 5 of 10 boxes using the cycle strategy. What is the exact probability that all succeed?

Answers: (a) H₁₀ = 7381/2520 ≈ 2.9290. (b) H₄ = 25/12 and H₄⁽²⁾ = 205/144, so Var = 300/144 − 205/144 = 95/144. Directly, E[K₄] = (6 + 22 + 18 + 4)/24 = 25/12 and E[K₄²] = (6 + 44 + 54 + 16)/24 = 5, so Var = 5 − 625/144 = 95/144. (c) 1 − (1/6 + 1/7 + 1/8 + 1/9 + 1/10) = 1 − 1627/2520 = 893/2520 ≈ 0.3544.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are arranged in three groups. The core problems test the definitions and the basic computations of every lesson. The advanced problems require combining several ideas or writing a short proof. The challenge problems are proofs and computations of the kind found on qualifying examinations in algebra and combinatorics. Composition of permutations is always right to left, (στ)(i) = σ(τ(i)).

Core (Problems 1–20)

  1. How many injections are there from a 5-element set into a 9-element set?
  2. Write σ = 5 3 1 2 4 7 6 (one-line notation) in disjoint cycle notation and find its order.
  3. Compute the product (1 3 5)(1 2) in S₅.
  4. Find the inverse of (1 4 2 6)(3 5) in S₆.
  5. Find the number of inversions and the sign of σ = 4 2 5 1 3, and confirm the sign from the cycle decomposition.
  6. Write (1 2 3 4 5) as a product of the fewest possible transpositions. How many are needed?
  7. What is the order of (1 2 3)(4 5 6 7)(8 9)?
  8. How many elements of S₇ have the same cycle type as (1 2)(3 4 5)?
  9. Show that (1 2 3)(4 5) and (1 3 4)(2 5) are conjugate in S₅ by finding an explicit conjugating permutation.
 10. List the unsigned Stirling numbers c(5, k) for k = 1, …, 5 and check that they sum to 5!.
 11. Compute the number of derangements D₆.
 12. What is the probability that a uniformly random permutation of [6] has exactly two fixed points?
 13. How many distinct arrangements of the letters of STATISTICS are there?
 14. How many multisets of size 5 can be formed from 7 types of objects?
 15. How many solutions in nonnegative integers does x₁ + x₂ + x₃ + x₄ = 15 have with x₁ ≥ 3 and x₂ ≥ 1?
 16. Compute S(6, 2), the number of ways to split 6 labelled people into 2 nonempty unlabelled groups.
 17. Find the lexicographic rank (counting from 0) of 2 4 1 3 in S₄.
 18. Write the 4-bit binary reflected Gray code word with index 11.
 19. How many 2-colour necklaces with 4 beads are there up to rotation?
 20. Find the expected number of cycles of a uniformly random permutation of [6].

Advanced (Problems 21–45)

 21. Prove that every product of two transpositions is a product of 3-cycles, and deduce that Aₙ is generated by 3-cycles for n ≥ 3.
 22. How many elements of order exactly 2 does S₆ contain?
 23. How many elements of order exactly 6 does S₆ contain?
 24. What is the largest order of an element of A₈?
 25. Find the sign of σ = 2 3 4 5 1 7 6 9 8 in S₉ using the number of cycles of even length.
 26. Compute z_λ and the class size in S₈ for cycle type λ = (2, 2, 2, 1, 1).
 27. Verify the identity ∑_(λ⊢4) 1/z_λ = 1 by listing the five cycle types of S₄.
 28. Prove that c(n, 2) = (n − 1)! Hₙ₋₁ and use it to compute c(7, 2).
 29. Prove that ∑ₖ (−1)ᵏ c(n, k) = 0 for n ≥ 2, and interpret the identity.
 30. Compute Foata's transformation Φ((1 5 2)(3)(4 7 6)) and verify that the number of records equals the number of cycles.
 31. Prove Dₙ = nDₙ₋₁ + (−1)ⁿ directly from the inclusion–exclusion formula, and compute D₁₀.
 32. How many permutations of [7] have neither fixed points nor 2-cycles?
 33. For a uniformly random permutation of [10], find the probability that σ(1) ≠ 1 and σ(2) ≠ 2.
 34. How many 4-element subsets of [12] contain no two consecutive integers?
 35. Evaluate ∑ᵢ C(6, i)C(8, 5 − i).
 36. Use Lucas's theorem to find C(100, 50) mod 7.
 37. How many lattice paths with unit steps E and N go from (0, 0) to (6, 6) without ever rising above the diagonal?
 38. In how many ways can 10 doughnuts be chosen from 4 kinds if at most 3 may be of the first kind?
 39. Count the surjections from [7] onto [3] and deduce S(7, 3).
 40. In how many ways can 8 identical balls be placed into 3 identical boxes, empty boxes allowed?
 41. Unrank 100 in S₅ in lexicographic order (counting from 0).
 42. Find the 3-subset of ℕ = {0, 1, 2, …} whose colexicographic rank is 50, and find the colex rank of {2, 5, 6}.
 43. Which index i has binary reflected Gray code word 1101?
 44. Expand the Gaussian coefficient [5 2]_q and use it to count the 2-dimensional subspaces of 𝔽₃⁵.
 45. How many colourings of the vertices of a square with 3 colours are there up to the full symmetry group D₄ of the square?

Challenge (Problems 46–60)

 46. Prove that Sₙ is generated by the transposition (1 2) and the n-cycle (1 2 ⋯ n).
 47. Prove that the centre of Sₙ is trivial for n ≥ 3.
 48. How many permutations σ ∈ S₈ satisfy σ³ = 1?
 49. Prove that for a uniformly random σ ∈ Sₙ the events Rᵢ = "position i is a record (left-to-right maximum)" are independent with P(Rᵢ) = 1/i, and deduce again that the expected number of records is Hₙ.
 50. In the hundred-prisoners problem with the cycle strategy, compute the success probability to four decimal places, and prove that for 2m prisoners opening m boxes each it tends to 1 − ln 2.
 51. Prove that the probability that 1 and 2 lie in the same cycle of a uniformly random permutation of [n] (n ≥ 2) is 1/2.
 52. How many permutations of [6] have exactly 3 inversions? What is the mean number of inversions of a random permutation of [6]?
 53. Prove the reciprocity law ((n k)) = (−1)ᵏ C(−n, k) and the identity ∑ₖ ((n k)) xᵏ = (1 − x)^(−n).
 54. Find the lexicographic rank (counting from 0) of 2 6 4 1 5 3 in S₆.
 55. Show that the number of k-subsets of [n] with no two elements cyclically adjacent (where n and 1 count as adjacent) is (n/(n − k))C(n − k, k) for 0 ≤ k < n, and evaluate it for n = 10, k = 3.
 56. How many 2-colour necklaces with 12 beads are there up to rotation?
 57. Use Burnside's lemma with S₄ acting on the 6 edges of the complete graph K₄ to count the isomorphism classes of simple graphs on 4 vertices.
 58. Find the exact probability that every cycle of a uniformly random permutation of [6] has length at most 3.
 59. Prove that for n ≥ 5 all 3-cycles are conjugate in Aₙ.
 60. Prove that the matrices of Stirling numbers [S(n, k)] and [s(n, k)] are mutually inverse, and verify ∑ₖ S(4, k)s(k, 2) = 0 explicitly.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. (9)₅ = 9 · 8 · 7 · 6 · 5 = 15,120.
  2. 1 ↦ 5 ↦ 4 ↦ 2 ↦ 3 ↦ 1 and 6 ↦ 7 ↦ 6, so σ = (1 5 4 2 3)(6 7). Its order is lcm(5, 2) = 10.
  3. Apply (1 2) first: 1 ↦ 2 ↦ 2, 2 ↦ 1 ↦ 3, 3 ↦ 3 ↦ 5, 5 ↦ 5 ↦ 1, and 4 is fixed. The product is (1 2 3 5).
  4. Reverse each cycle: (6 2 4 1)(5 3) = (1 6 2 4)(3 5).
  5. The inversions are (4,2), (4,1), (4,3), (2,1), (5,1), (5,3): six, so sgn = +1. The cycle decomposition is (1 4)(3 5) with 2 fixed, two transpositions, which is even.
  6. (1 2 3 4 5) = (1 5)(1 4)(1 3)(1 2). At least n − κ = 5 − 1 = 4 transpositions are needed, since each transposition changes the number of cycles by exactly one (Lemma 3.1) and the identity has 5 cycles.
  7. lcm(3, 4, 2) = 12.
  8. The cycle type is (3, 2, 1, 1), with z = 3 · 2 · 1² · 2! = 12, so the class has 5040/12 = 420 elements.
  9. Stack (1 2 3)(4 5) above (1 3 4)(2 5) to get π: 1 ↦ 1, 2 ↦ 3, 3 ↦ 4, 4 ↦ 2, 5 ↦ 5, that is, π = (2 3 4). By Lemma 4.1, π(1 2 3)(4 5)π⁻¹ = (π1 π2 π3)(π4 π5) = (1 3 4)(2 5).
 10. c(5, k) = 24, 50, 35, 10, 1, and 24 + 50 + 35 + 10 + 1 = 120 = 5!.
 11. D₆ = 6D₅ + 1 = 6 · 44 + 1 = 265 (or 720(1 − 1 + 1/2 − 1/6 + 1/24 − 1/120 + 1/720) = 360 − 120 + 30 − 6 + 1 = 265).
 12. C(6, 2)D₄/6! = 15 · 9/720 = 135/720 = 3/16.
 13. The letters are S×3, T×3, I×2, A, C, so 10!/(3! 3! 2!) = 3,628,800/72 = 50,400.
 14. ((7 5)) = C(11, 5) = 462.
 15. Substitute x₁ = 3 + y₁, x₂ = 1 + y₂: y₁ + y₂ + x₃ + x₄ = 11 in nonnegative integers, C(14, 3) = 364 solutions.
 16. S(6, 2) = (2⁶ − 2)/2 = 31: each of the 2⁶ − 2 surjections onto {A, B} is counted twice, once for each labelling of the two groups.
 17. The Lehmer code is (1, 2, 0, 0), so the rank is 1 · 3! + 2 · 2! + 0 + 0 = 10.
 18. g(11) = 1011 ⊕ 0101 = 1110.
 19. Rotations by 0, 1, 2, 3 places fix 2⁴, 2¹, 2², 2¹ colourings; (16 + 2 + 4 + 2)/4 = 6. They are 0000, 0001, 0011, 0101, 0111, 1111.
 20. H₆ = 1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 = 49/20 = 2.45.

Advanced

 21. If the transpositions share a point, (a b)(a c) = (a c b). If they are disjoint, (a b)(c d) = (a b c)(b c d); check: b c d acts first, so a ↦ a ↦ b, b ↦ c ↦ a, c ↦ d ↦ d, d ↦ b ↦ c, which is (a b)(c d). The identity is the empty product. Since every even permutation is a product of an even number of transpositions, grouping them in consecutive pairs writes it as a product of 3-cycles; and 3-cycles are even, so they generate exactly Aₙ.
 22. The elements of order 2 are those of cycle types (2,1⁴), (2²,1²), (2³), with 15 + 45 + 15 = 75 elements. Equivalently, I₆ − 1 = 76 − 1 = 75.
 23. The cycle types with lcm 6 in S₆ are (6) and (3, 2, 1). There are 5! = 120 six-cycles and 720/(3 · 2) = 120 permutations of type (3, 2, 1), for a total of 240.
 24. 15, attained by type (5, 3), which has no cycles of even length and is therefore even. Since Landau's g(8) = 15, no element of S₈, let alone A₈, has larger order.
 25. σ = (1 2 3 4 5)(6 7)(8 9) has two cycles of even length, so sgn(σ) = (−1)² = +1. Alternatively n − κ = 9 − 3 = 6 is even.
 26. m₂ = 3 and m₁ = 2, so z = 2³ · 3! · 1² · 2! = 8 · 6 · 2 = 96, and the class has 40320/96 = 420 elements.
 27. The values of z_λ for (1⁴), (2,1²), (2²), (3,1), (4) are 24, 4, 8, 3, 4. Then 1/24 + 1/4 + 1/8 + 1/3 + 1/4 = (1 + 6 + 3 + 8 + 6)/24 = 1.
 28. From the recurrence, c(n + 1, 2) = n·c(n, 2) + c(n, 1) = n·c(n, 2) + (n − 1)!. If c(n, 2) = (n − 1)!Hₙ₋₁ then c(n + 1, 2) = n!Hₙ₋₁ + n!/n = n!Hₙ, completing an induction from c(2, 2) = 1 = 1!H₁. Hence c(7, 2) = 6! · H₆ = 720 · 49/20 = 1764.
 29. Put x = −1 in ∑ c(n, k)xᵏ = x(x + 1)⋯(x + n − 1); the factor x + 1 vanishes for n ≥ 2. Since sgn(σ) = (−1)^(n−κ(σ)), the identity says (−1)ⁿ(#even − #odd) = 0: Sₙ has equally many even and odd permutations.
 30. Standard forms: (5 2 1), (3), (7 6 4). Ordered by increasing leaders: (3)(5 2 1)(7 6 4), so Φ = 3 5 2 1 7 6 4. Its records are 3, 5, 7: three records, three cycles.
 31. Dₙ = n!∑ₖ₌₀ⁿ(−1)ᵏ/k! = n·(n − 1)!∑ₖ₌₀ⁿ⁻¹(−1)ᵏ/k! + n!(−1)ⁿ/n! = nDₙ₋₁ + (−1)ⁿ. Then D₁₀ = 10 · 133,496 + 1 = 1,334,961.
 32. Such permutations have all cycles of length at least 3. For n = 7 the possible cycle types are (7) and (4, 3), with 6! = 720 and 7!/(4 · 3) = 420 elements, for a total of 1140. This agrees with the coefficient of x⁷/7! in e^(−x − x²/2)/(1 − x).
 33. By inclusion–exclusion, 1 − 2 · 9!/10! + 8!/10! = 1 − 1/5 + 1/90 = 73/90 ≈ 0.8111.
 34. Subtracting 0, 1, 2, 3 from the elements in increasing order gives a bijection with 4-subsets of [9], so the answer is C(9, 4) = 126.
 35. By Vandermonde's identity, C(14, 5) = 2002.
 36. 100 = 202₇ and 50 = 101₇, so C(100, 50) ≡ C(2, 1)C(0, 0)C(2, 1) = 4 (mod 7).
 37. The Catalan number C₆ = C(12, 6)/7 = 924/7 = 132.
 38. Without restriction there are C(13, 3) = 286 choices; those with at least 4 of the first kind correspond to choices of the remaining 6 doughnuts, C(9, 3) = 84. The answer is 286 − 84 = 202.
 39. 3⁷ − 3 · 2⁷ + 3 · 1⁷ = 2187 − 384 + 3 = 1806 surjections, so S(7, 3) = 1806/3! = 301.
 40. Partitions of 8 into at most 3 parts: 8, 7+1, 6+2, 5+3, 4+4, 6+1+1, 5+2+1, 4+3+1, 4+2+2, 3+3+2. There are 10.
 41. 100 = 4 · 4! + 0 · 3! + 2 · 2! + 0 · 1!, so the Lehmer code is (4, 0, 2, 0, 0) and the permutation is 5 1 4 2 3.
 42. Greedy unranking: C(7, 3) = 35 ≤ 50 < 56, remainder 15 = C(6, 2), remainder 0 = C(0, 1), giving {0, 6, 7}. The rank of {2, 5, 6} is C(2, 1) + C(5, 2) + C(6, 3) = 2 + 10 + 20 = 32.
 43. Prefix exclusive or of 1, 1, 0, 1 gives 1, 0, 0, 1, so i = 1001₂ = 9. Check: 9 ⊕ 4 = 1101.
 44. [5 2]_q = [5]_q[4]_q/([2]_q[1]_q) = (1 + q + q² + q³ + q⁴)(1 + q²) = 1 + q + 2q² + 2q³ + 2q⁴ + q⁵ + q⁶. At q = 3: 1 + 3 + 18 + 54 + 162 + 243 + 729 = 1210, which agrees with (3⁵ − 1)(3⁵ − 3)/((3² − 1)(3² − 3)) = 242 · 240/48 = 1210.
 45. Identity: 3⁴ = 81. Rotations by 90° and 270°: one 4-cycle, 3 each. Rotation by 180°: two 2-cycles, 9. Two diagonal reflections: two fixed vertices and a 2-cycle, 27 each. Two edge-midpoint reflections: two 2-cycles, 9 each. Total (81 + 6 + 9 + 54 + 18)/8 = 168/8 = 21.

Challenge

 46. Let c = (1 2 ⋯ n) and t = (1 2). By Lemma 4.1, cᵏtc⁻ᵏ = (cᵏ(1) cᵏ(2)) = (k+1 k+2) for 0 ≤ k ≤ n − 2, so the subgroup ⟨t, c⟩ contains every adjacent transposition sᵢ = (i i+1). Every transposition (i j) with i < j is a conjugate of s_(j−1) by s_i⋯s_(j−2), and every permutation is a product of transpositions. Hence ⟨t, c⟩ = Sₙ.
 47. Let σ ≠ 1, say σ(i) = j with i ≠ j. Since n ≥ 3, choose k ∉ {i, j} and put τ = (j k). Since τ fixes i, τστ⁻¹(i) = τ(σ(i)) = τ(j) = k, while σ(i) = j ≠ k. So τστ⁻¹ ≠ σ and σ is not central.
 48. σ³ = 1 exactly when all cycles have length 1 or 3. With j three-cycles the count is 8!/(3ʲ j! (8 − 3j)!): for j = 0, 1, 2 this gives 1, 112, 1120. The total is 1233. (Equivalently aₙ = aₙ₋₁ + (n − 1)(n − 2)aₙ₋₃.)
 49. Let ρᵢ ∈ {1, …, i} be the rank of σ(i) among σ(1), …, σ(i). The map σ ↦ (ρ₁, …, ρₙ) is a bijection onto {1} × {1, 2} × ⋯ × {1, …, n} (it is a reversed form of the Lehmer code: σ can be reconstructed from the last entry backwards), so for uniform σ the ρᵢ are independent and uniform. Position i is a record exactly when ρᵢ = i, an event of probability 1/i depending only on ρᵢ. Independence follows, and the expected number of records is ∑ 1/i = Hₙ.
 50. The probability is 1 − (H₁₀₀ − H₅₀) ≈ 0.3118. For 2m prisoners it is 1 − ∑ⱼ₌ₘ₊₁²ᵐ 1/j, and H₂ₘ − Hₘ = ln(2m) − ln m + o(1) → ln 2, so the probability tends to 1 − ln 2 ≈ 0.3069. (In fact H₂ₘ − Hₘ increases with m, so the success probability decreases to its limit.)
 51. By Proposition 13.1 the cycle containing 1 has length ℓ uniform on [n], and given its length its other ℓ − 1 members form a uniformly random (ℓ − 1)-subset of the remaining n − 1 points; so P(2 in it | ℓ) = (ℓ − 1)/(n − 1). Averaging, P = (E[ℓ] − 1)/(n − 1) = ((n + 1)/2 − 1)/(n − 1) = 1/2.
 52. The coefficient of q³ in (1)(1 + q)(1 + q + q²)⋯(1 + ⋯ + q⁵) is 29. The mean is n(n − 1)/4 = 30/4 = 7.5.
 53. C(−n, k) = (−n)(−n − 1)⋯(−n − k + 1)/k! = (−1)ᵏ n(n + 1)⋯(n + k − 1)/k! = (−1)ᵏ C(n + k − 1, k) = (−1)ᵏ((n k)). For the generating function, (1 − x)⁻ⁿ = ∏ᵢ₌₁ⁿ ∑_(eᵢ≥0) x^(eᵢ), and the coefficient of xᵏ counts the solutions of e₁ + ⋯ + eₙ = k, which are the k-multisets on n types.
 54. The Lehmer code is (1, 4, 2, 0, 1, 0): to the right of 2 only 1 is smaller; to the right of 6 four entries are smaller; to the right of 4, the entries 1 and 3; none to the right of 1; to the right of 5, the entry 3. The rank is 1 · 120 + 4 · 24 + 2 · 6 + 0 · 2 + 1 · 1 + 0 = 229.
 55. Subsets not containing n are k-subsets of [n − 1] with no two consecutive, C(n − k, k) of them; subsets containing n must avoid 1 and n − 1 and choose k − 1 nonconsecutive elements from {2, …, n − 2}, C(n − k − 1, k − 1) of them. The sum is C(n − k, k) + (k/(n − k))C(n − k, k) = (n/(n − k))C(n − k, k). For n = 10 and k = 3, (10/7) · 35 = 50.
 56. (1/12)∑_(d|12) φ(d)2^(12/d) = (4096 + 64 + 2 · 16 + 2 · 8 + 2 · 4 + 4 · 2)/12 = 4224/12 = 352.
 57. Identity: 6 edge-cycles, 2⁶ = 64. Six transpositions such as (1 2): edges 12 and 34 fixed, 13 ↔ 23 and 14 ↔ 24, so 4 cycles, 16 each, 96 in total. Three double transpositions such as (1 2)(3 4): 12 and 34 fixed, 13 ↔ 24, 14 ↔ 23, so 4 cycles, 48 in total. Eight 3-cycles: two 3-cycles on edges, 4 each, 32 in total. Six 4-cycles such as (1 2 3 4): a 4-cycle 12 → 23 → 34 → 14 and a 2-cycle 13 ↔ 24, 4 each, 24 in total. Number of graphs: (64 + 96 + 48 + 32 + 24)/24 = 264/24 = 11.
 58. A cycle of length j > 3 occurs at most once and with probability 1/j, so the probability is 1 − (1/4 + 1/5 + 1/6) = 1 − 37/60 = 23/60.
 59. Let γ = (a b c) and γ' = (a' b' c') be 3-cycles. By Theorem 4.2 there is π ∈ Sₙ with πγπ⁻¹ = γ'. If π is odd, replace it by π(d e), where d, e are two points outside {a, b, c} (they exist because n ≥ 5); then (d e) commutes with γ, so π(d e) still conjugates γ to γ', and it is even.
 60. By Lesson 5 and Lesson 8, xⁿ = ∑ₖ S(n, k)(x)ₖ and (x)ₖ = ∑ₘ s(k, m)xᵐ. Substituting gives xⁿ = ∑ₘ (∑ₖ S(n, k)s(k, m))xᵐ, and comparing coefficients ∑ₖ S(n, k)s(k, m) = δₙₘ; the product in the other order is also the identity, because restricted to indices at most N both matrices are square and lower triangular, and a one-sided inverse of a square matrix is two-sided. For n = 4, m = 2: S(4, 2)s(2, 2) + S(4, 3)s(3, 2) + S(4, 4)s(4, 2) = 7 · 1 + 6 · (−3) + 1 · 11 = 0.
