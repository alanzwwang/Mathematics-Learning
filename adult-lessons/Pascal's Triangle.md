Pascal's Triangle — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

        C(n, k) = n! / (k!(n − k)!)          (1 + x)^α = ∑ₖ C(α, k) xᵏ
        C(n, k) ≡ ∏ᵢ C(nᵢ, kᵢ)  (mod p)      v_p C(n, k) = #carries in k + (n − k), base p
        C(2n, n) ~ 4ⁿ / √(πn)                 [n k]_q = #{k-dimensional subspaces of F_qⁿ}

The arithmetic triangle is one of the oldest objects in mathematics. It appears in the work of Pingala and his commentator Halāyudha in India, in al-Karajī and al-Samaw'al in the Islamic world, in Yang Hui (1261) and Zhu Shijie (1303) in China, and in Tartaglia, Stifel and Cardano in Renaissance Europe, long before Blaise Pascal's Traité du triangle arithmétique (written 1654, published 1665). Pascal's contribution was not the triangle itself but a systematic treatment of it, including one of the earliest explicit uses of mathematical induction. This course takes the elementary facts as known — the factorial formula, Pascal's rule, row sums, the hockey stick, the binomial theorem for natural exponents, lattice paths and Vandermonde's identity — and develops the theory as it appears in graduate combinatorics, number theory and analysis.

The guiding observation is that the binomial coefficient lives simultaneously in several worlds. Combinatorially, C(n, k) counts k-subsets of an n-set. Algebraically, C(x, k) = x(x − 1)⋯(x − k + 1)/k! is a polynomial, and the identities of the triangle are polynomial identities valid for arbitrary complex upper index. Analytically, C(α, k) are the Taylor coefficients of (1 + x)^α, and C(n, k) has precise asymptotics governed by Stirling's formula and the normal distribution. Arithmetically, the residues of C(n, k) modulo a prime p are controlled by the base-p digits of n and k, which is why the triangle reduced modulo 2 is a discrete Sierpinski gasket. Finally, the triangle admits deformations — multinomial coefficients, which form Pascal's simplex, and Gaussian coefficients, which count subspaces of vector spaces over finite fields — and it contains the Catalan numbers, which govern the ballot problem. The course closes with an open problem: Singmaster's conjecture on how often an integer can occur in the triangle.

Notation. Throughout, ℕ = {0, 1, 2, …}, C(α, k) denotes the binomial coefficient with upper index α and lower index k, x^(k) = x(x − 1)⋯(x − k + 1) denotes the falling factorial (with x^(0) = 1), s_p(n) denotes the sum of the base-p digits of n, v_p(m) denotes the exponent of the prime p in the nonzero rational m, and [xⁿ]F(x) denotes the coefficient of xⁿ in a power series F. Proofs are given in full unless a result is explicitly labelled as cited.

In this course, you will:

  1. Define C(α, k) for arbitrary α and prove the basic identities as polynomial identities
  2. Master the four proof techniques: double counting, bijection, sign-reversing involution and the polynomial method
  3. Prove the Chu–Vandermonde identity in full generality and read it as a binomial-type property of falling factorials
  4. Use ordinary and exponential generating functions, the binomial transform and the Pascal matrix
  5. Prove Newton's generalized binomial theorem and determine its behaviour on the boundary circle
  6. Use finite differences and Newton interpolation to classify integer-valued polynomials
  7. Prove the theorems of Lucas, Legendre and Kummer, and apply them to Babbage, Wolstenholme and Bertrand
  8. Explain the Sierpinski pattern modulo 2 and compute the fractal dimension of the triangle modulo p
  9. Study multinomial coefficients, Pascal's simplex and their p-adic valuations
  10. Develop Gaussian binomial coefficients, the q-binomial theorem and their linear-algebraic meaning
  11. Derive the Catalan numbers by reflection and by the cycle lemma, and solve the ballot problem
  12. Obtain sharp asymptotics for central and non-central coefficients, and survey Singmaster's conjecture

─────────────────────────────────
Lesson 1: Binomial Coefficients with Arbitrary Upper Index
─────────────────────────────────

📌 Key idea of this section:

        C(α, k) = α(α − 1)⋯(α − k + 1) / k!   for every α and every k ∈ ℕ
        Pascal's rule, absorption and upper negation are identities of polynomials in α

The general definition

Let A be a commutative ring containing ℚ (for instance ℚ, ℝ, ℂ, or a polynomial ring over ℚ). For α ∈ A and an integer k we define C(α, k) = α^(k)/k! when k ≥ 0 and C(α, k) = 0 when k < 0. For fixed k, the map α ↦ C(α, k) is a polynomial of degree k with leading coefficient 1/k!. When α = n ∈ ℕ and k > n, the falling factorial contains the factor (n − n) = 0, so C(n, k) = 0; when 0 ≤ k ≤ n, multiplying numerator and denominator by (n − k)! gives the familiar C(n, k) = n!/(k!(n − k)!), which counts the k-element subsets of an n-element set.

The symmetry C(n, k) = C(n, n − k) is a statement about natural numbers n. It is false for general α: the right-hand side C(α, α − k) is not even defined unless α − k is an integer. For example C(−1, 0) = 1 but C(−1, −1) = 0 by our convention for negative lower index. Symmetry must therefore be used with care whenever the upper index is not a natural number.

The polynomial principle

Lemma 1.1 (polynomial principle). If P, Q ∈ ℚ[x] agree at infinitely many points, then P = Q. More generally, if P ∈ ℚ[x₁, …, x_m] vanishes at every point of ℕᵐ, then P = 0. Proof. P − Q has infinitely many roots, and a nonzero polynomial over a field has at most its degree many roots. For several variables, write P = ∑ⱼ Pⱼ(x₁, …, x_{m−1}) x_mʲ; for each fixed point of ℕ^(m−1) the one-variable polynomial in x_m vanishes on ℕ, so every Pⱼ vanishes on ℕ^(m−1), and induction on m finishes the proof. ∎

The principle converts combinatorial identities proved for natural numbers into identities valid for arbitrary upper index. This will be our standard method of generalization.

Three fundamental identities

Theorem 1.2. For every α in A and every integer k:

        (i)   Pascal's rule:      C(α, k) = C(α − 1, k) + C(α − 1, k − 1)
        (ii)  absorption:         k C(α, k) = α C(α − 1, k − 1)
        (iii) upper negation:     C(α, k) = (−1)ᵏ C(k − α − 1, k)

Proof. All three are trivial for k < 0 and easily checked for k = 0, so let k ≥ 1. For (ii), α^(k) = α · (α − 1)^(k−1), so k · α^(k)/k! = α · (α − 1)^(k−1)/(k − 1)!. For (i), both sides are polynomials in α of degree at most k; for α = n ∈ ℕ with n ≥ 1, the k-subsets of {1, …, n} split into those not containing n, counted by C(n − 1, k), and those containing n, counted by C(n − 1, k − 1). Hence the two sides agree for all integers n ≥ 1 and so agree identically by Lemma 1.1. For (iii), reverse the order of the factors: α(α − 1)⋯(α − k + 1) = (−1)ᵏ(−α)(−α + 1)⋯(−α + k − 1) = (−1)ᵏ (k − α − 1)^(k), since the factors −α + k − 1, −α + k − 2, …, −α are exactly the falling factorial of k − α − 1 of length k. ∎

Upper negation is the gateway to negative exponents. With α = −n for n ∈ ℕ it reads C(−n, k) = (−1)ᵏ C(n + k − 1, k), the number of k-element multisets from an n-set, with a sign. In particular C(−1, k) = (−1)ᵏ and C(−2, k) = (−1)ᵏ(k + 1).

Integrality

Proposition 1.3. For every integer m and every k ∈ ℕ, C(m, k) ∈ ℤ. Proof. For m ≥ 0, C(m, k) is a count of subsets (or 0). For m < 0, upper negation gives C(m, k) = (−1)ᵏ C(k − m − 1, k) with k − m − 1 ≥ 0. ∎

Corollary 1.4. The product of any k consecutive integers is divisible by k!. Proof. (m)(m − 1)⋯(m − k + 1) = k! C(m, k). ∎

Half-integer upper index

The case α = −1/2 is central to everything that follows. The numerator of C(−1/2, n) is (−1/2)(−3/2)⋯(−(2n − 1)/2) = (−1)ⁿ (1 · 3 ⋯ (2n − 1))/2ⁿ, and 1 · 3 ⋯ (2n − 1) = (2n)!/(2ⁿ n!). Hence

        C(−1/2, n) = (−1)ⁿ (2n)! / (4ⁿ n! n!) = (−1/4)ⁿ C(2n, n)

and absorption, n C(1/2, n) = (1/2) C(−1/2, n − 1), then yields the closed form C(1/2, n) = (−1)ⁿ⁻¹ C(2n, n)/(4ⁿ(2n − 1)) for n ≥ 1. The first values of C(1/2, n) for n = 0, 1, 2, 3, 4, 5 are 1, 1/2, −1/8, 1/16, −5/128, 7/256.

        check n = 3:  (−1)² · C(6, 3) / (64 · 5) = 20/320 = 1/16
        check n = 4:  (−1)³ · C(8, 4) / (256 · 7) = −70/1792 = −5/128

✏️ Your Turn

(a) Compute C(−3, 4) both from the definition and by upper negation.
(b) Compute C(1/2, 4) from the definition.
(c) Prove that C(n, k) = C(n, n − k) for n ∈ ℕ and 0 ≤ k ≤ n, and give an example showing that the polynomial identity C(x, k) = C(x, x − k) cannot even be formulated for non-integer x.

Answers: (a) From the definition, (−3)(−4)(−5)(−6)/4! = 360/24 = 15; by upper negation, C(−3, 4) = (−1)⁴ C(4 + 3 − 1, 4) = C(6, 4) = 15. (b) (1/2)(−1/2)(−3/2)(−5/2)/24 = (−15/16)/24 = −15/384 = −5/128. (c) Complementation S ↦ {1, …, n} ∖ S is a bijection from k-subsets to (n − k)-subsets. For x = 1/2 and k = 1, the lower index x − k = −1/2 is not an integer, and C(α, j) has been defined only for integer j.

─────────────────────────────────
Lesson 2: Four Proof Techniques for Binomial Identities
─────────────────────────────────

📌 Key idea of this section:

        double counting · explicit bijection · sign-reversing involution · polynomial method

Double counting

To prove that two expressions are equal, exhibit a finite set and count it in two ways. The prototype is the committee–chair identity k C(n, k) = n C(n − 1, k − 1): both sides count pairs (S, s) with S a k-subset of [n] = {1, …, n} and s ∈ S; on the left choose S first, on the right choose the chair s first. Summing over k gives the first moment of the row.

Proposition 2.1. For n ≥ 1, ∑ₖ k C(n, k) = n 2ⁿ⁻¹, and for n ≥ 2, ∑ₖ k² C(n, k) = n(n + 1) 2ⁿ⁻². Proof. The first sum counts pairs (S, s) with s ∈ S ⊆ [n]; choosing s first leaves 2ⁿ⁻¹ subsets of the remaining elements. The second sum counts triples (S, s, t) with s, t ∈ S. Pairs with s = t contribute n 2ⁿ⁻¹; ordered pairs with s ≠ t contribute n(n − 1)2ⁿ⁻². The total is 2ⁿ⁻²(2n + n² − n) = n(n + 1)2ⁿ⁻². ∎

The same idea proves the trinomial revision identity C(n, m) C(m, k) = C(n, k) C(n − k, m − k), counting pairs K ⊆ M ⊆ [n] with |K| = k and |M| = m: choose M then K, or choose K then the m − k further elements of M from the n − k remaining.

Explicit bijection

A bijection proof identifies two families of objects. The upper summation identity (the hockey stick) is the standard example.

Proposition 2.2. For integers 0 ≤ k ≤ n, ∑_{m=k}^{n} C(m, k) = C(n + 1, k + 1). Proof. Partition the (k + 1)-subsets of [n + 1] according to their largest element m + 1, where k ≤ m ≤ n. A subset with maximum m + 1 is determined by its other k elements, an arbitrary k-subset of [m]. ∎

Its companion, parallel summation, has an arbitrary upper index and is proved by induction: ∑_{j=0}^{m} C(α + j, j) = C(α + m + 1, m). For m = 0 both sides equal 1, and the inductive step is C(α + m + 1, m) + C(α + m + 1, m + 1) = C(α + m + 2, m + 1), which is Pascal's rule.

Sign-reversing involutions

To evaluate an alternating sum ∑ (−1)^{|X|} over a family of objects, find an involution ι on the family that changes the parity of |X| on all objects except a set of fixed points. Then the sum equals the signed count of fixed points.

Proposition 2.3. For n ≥ 1, ∑ₖ (−1)ᵏ C(n, k) = 0, and for every α and every m ∈ ℕ, ∑_{k=0}^{m} (−1)ᵏ C(α, k) = (−1)ᵐ C(α − 1, m). Proof. For the first claim, the map S ↦ S △ {1} (add 1 if absent, remove it if present) is a fixed-point-free involution on subsets of [n] changing |S| by one. For the second, write C(α, k) = C(α − 1, k) + C(α − 1, k − 1); the alternating sum telescopes: ∑_{k=0}^{m} (−1)ᵏ [C(α − 1, k) + C(α − 1, k − 1)] = (−1)ᵐ C(α − 1, m), because the term (−1)ᵏ C(α − 1, k) cancels against (−1)^{k+1} C(α − 1, k) coming from index k + 1, leaving only the last one. ∎

        example:  1 − 12 + 66 − 220 + 495 = 330 = C(11, 4)

The polynomial method

To prove an identity of polynomials in α, it suffices by Lemma 1.1 to prove it for α ∈ ℕ, where combinatorics is available. Conversely, a generating-function computation can yield an identity that is hard to see combinatorially. A typical example is the signed sum of squares.

Proposition 2.4. ∑ₖ (−1)ᵏ C(n, k)² equals (−1)^{n/2} C(n, n/2) if n is even and 0 if n is odd. Proof. The coefficient of xⁿ in (1 − x)ⁿ(1 + x)ⁿ is ∑ₖ (−1)ᵏ C(n, k) C(n, n − k) = ∑ₖ (−1)ᵏ C(n, k)². On the other hand (1 − x)ⁿ(1 + x)ⁿ = (1 − x²)ⁿ = ∑ⱼ (−1)ʲ C(n, j) x^{2j}, whose coefficient of xⁿ is (−1)^{n/2} C(n, n/2) if n is even and 0 otherwise. ∎

For cubes the corresponding result is Dixon's identity (1891), ∑ₖ (−1)ᵏ C(2n, k)³ = (−1)ⁿ (3n)!/(n!)³, which we cite. For n = 1 the row is C(2, k) = 1, 2, 1, so the sum is 1 − 8 + 1 = −6 = (−1)¹ · 3!/1!³; for n = 2 it is 1 − 64 + 216 − 64 + 1 = 90 = 6!/2!³. Identities of this kind are now provable mechanically by the Wilf–Zeilberger method, which certifies any identity of the form ∑ₖ F(n, k) = r(n) with F hypergeometric by producing a rational certificate.

✏️ Your Turn

(a) Evaluate ∑ₖ k² C(10, k).
(b) Evaluate ∑_{k=0}^{4} (−1)ᵏ C(12, k) without adding the terms.
(c) Give a double-counting proof that ∑ₖ C(n, k) C(k, m) = C(n, m) 2ⁿ⁻ᵐ.

Answers: (a) n(n + 1)2ⁿ⁻² = 10 · 11 · 2⁸ = 28160. (b) By Proposition 2.3 it equals (−1)⁴ C(11, 4) = 330 (indeed 1 − 12 + 66 − 220 + 495 = 330). (c) Both sides count pairs M ⊆ K ⊆ [n] with |M| = m: choose K of size k and then M inside K, or choose M first and then K ∖ M as an arbitrary subset of the n − m remaining elements.

─────────────────────────────────
Lesson 3: The Chu–Vandermonde Identity
─────────────────────────────────

📌 Key idea of this section:

        ∑ₖ C(α, k) C(β, n − k) = C(α + β, n)      for all α, β and all n ∈ ℕ
        equivalently  (α + β)^(n) = ∑ₖ C(n, k) α^(k) β^(n−k)

Statement and two proofs

The identity was known to Zhu Shijie in 1303 and rediscovered by Alexandre-Théophile Vandermonde in 1772. For natural numbers it is a familiar double count: choosing n people from a group of a women and b men, classified by the number k of women chosen.

Theorem 3.1 (Chu–Vandermonde). For all α, β in a commutative ℚ-algebra and every n ∈ ℕ, ∑_{k=0}^{n} C(α, k) C(β, n − k) = C(α + β, n).

First proof (polynomial method). Fix n. Both sides are polynomials in (α, β) with rational coefficients. For (α, β) = (a, b) ∈ ℕ², both sides count n-subsets of a disjoint union of an a-set and a b-set. By the two-variable form of Lemma 1.1 the identity holds identically. ∎

Second proof (formal power series). Define the formal power series B_α(x) = ∑ₖ C(α, k) xᵏ in A[[x]]. The coefficient of xⁿ in B_α(x) B_β(x) − B_{α+β}(x) is a polynomial in (α, β) which vanishes on ℕ², because for natural exponents B_a(x) = (1 + x)ᵃ is a polynomial and (1 + x)ᵃ(1 + x)ᵇ = (1 + x)^{a+b}. Hence B_α B_β = B_{α+β} in A[[x]], which is exactly the theorem. ∎

The second proof shows that B_α behaves like an exponential: B_α B_β = B_{α+β} and B_1 = 1 + x. This is the formal content of the generalized binomial theorem; Lesson 5 adds convergence.

The binomial-type form

Multiplying Theorem 3.1 by n! gives (α + β)^(n) = ∑ₖ C(n, k) α^(k) β^(n−k). A sequence of polynomials pₙ(x) with deg pₙ = n satisfying pₙ(x + y) = ∑ₖ C(n, k) pₖ(x) pₙ₋ₖ(y) is said to be of binomial type. The monomials xⁿ, the falling factorials x^(n), the rising factorials x(x + 1)⋯(x + n − 1) and the Abel polynomials x(x − an)ⁿ⁻¹ are all of binomial type; Rota's umbral calculus classifies such sequences through their generating functions ∑ pₙ(x) tⁿ/n! = exp(x g(t)) for a power series g with g(0) = 0 and g′(0) ≠ 0. For falling factorials g(t) = log(1 + t).

Hypergeometric form

With the Pochhammer symbol (a)ₙ = a(a + 1)⋯(a + n − 1), the Gauss hypergeometric series is ₂F₁(a, b; c; z) = ∑ₙ (a)ₙ (b)ₙ zⁿ/((c)ₙ n!). When a = −n is a negative integer the series terminates, and Chu–Vandermonde is equivalent to

        ₂F₁(−n, b; c; 1) = (c − b)ₙ / (c)ₙ

a special case of Gauss's summation theorem ₂F₁(a, b; c; 1) = Γ(c)Γ(c − a − b)/(Γ(c − a)Γ(c − b)) for Re(c − a − b) > 0. The translation uses C(α, k) = (−1)ᵏ(−α)ₖ/k!. In this language most classical binomial identities become special evaluations of hypergeometric series, which is the starting point of the Wilf–Zeilberger theory.

Consequences

Corollary 3.2. (i) ∑ₖ C(n, k)² = C(2n, n). (ii) ∑ₖ C(m, k) C(n, k) = C(m + n, m) for m, n ∈ ℕ. (iii) For a, b, n ∈ ℕ, ∑_{k=0}^{n} C(a + k, k) C(b + n − k, n − k) = C(a + b + n + 1, n). Proof. (i) and (ii) follow from Theorem 3.1 with β = n and C(n, n − k) = C(n, k). For (iii), upper negation gives C(a + k, k) = (−1)ᵏ C(−a − 1, k), so the sum equals (−1)ⁿ ∑ₖ C(−a − 1, k) C(−b − 1, n − k) = (−1)ⁿ C(−a − b − 2, n) = C(a + b + n + 1, n), by Theorem 3.1 and upper negation once more. ∎

Part (iii) has a combinatorial reading in terms of multisets, and for a = b = 0 it reduces to ∑ₖ 1 = n + 1. It shows how negative upper indices, which have no direct combinatorial meaning, give short proofs of positive identities.

Corollary 3.3. ∑ₖ k C(n, k)² = n C(2n − 1, n − 1). Proof. By absorption the sum is n ∑ₖ C(n − 1, k − 1) C(n, n − k) = n C(2n − 1, n − 1) by Theorem 3.1, since the lower indices sum to n − 1. ∎

✏️ Your Turn

(a) Evaluate ∑_{k=0}^{5} C(7, k) C(6, 5 − k).
(b) Evaluate ∑_{k=0}^{4} C(k + 2, 2)(5 − k) using Corollary 3.2(iii), and check by direct addition.
(c) Show that ∑ₖ C(1/2, k) C(1/2, n − k) = 0 for n ≥ 2 and verify it for n = 2.

Answers: (a) C(13, 5) = 1287. (b) Here 5 − k = C(1 + (4 − k), 4 − k), so a = 2, b = 1, n = 4 and the sum is C(2 + 1 + 4 + 1, 4) = C(8, 4) = 70; directly, 1·5 + 3·4 + 6·3 + 10·2 + 15·1 = 5 + 12 + 18 + 20 + 15 = 70. (c) By Theorem 3.1 the sum is C(1, n) = 0 for n ≥ 2. For n = 2: 2 C(1/2, 0) C(1/2, 2) + C(1/2, 1)² = 2(−1/8) + 1/4 = 0.

─────────────────────────────────
Lesson 4: Generating Functions, the Binomial Transform and the Pascal Matrix
─────────────────────────────────

📌 Key idea of this section:

        rows: (1 + x)ⁿ     columns: xᵏ/(1 − x)^{k+1}     whole triangle: 1/(1 − y − xy)
        bₙ = ∑ₖ C(n, k) aₖ   ⟺   aₙ = ∑ₖ (−1)ⁿ⁻ᵏ C(n, k) bₖ

Rows, columns and the bivariate series

The nth row has generating function ∑ₖ C(n, k) xᵏ = (1 + x)ⁿ. For the kth column we need ∑ₙ C(n, k) xⁿ. Writing n = m + k and using upper negation, C(m + k, m) = (−1)ᵐ C(−k − 1, m), so

        ∑ₙ C(n, k) xⁿ = xᵏ ∑ₘ C(−k − 1, m)(−x)ᵐ = xᵏ / (1 − x)^{k+1}

by the formal identity B_α(−x) = (1 − x)^α with α = −k − 1 (Lesson 3). Summing the row generating functions against yⁿ gives the generating function of the whole triangle,

        ∑_{n,k} C(n, k) xᵏ yⁿ = ∑ₙ (y(1 + x))ⁿ = 1 / (1 − y − xy)

from which every row and column series can be extracted. Shallow diagonals are obtained by substituting: the sums dₙ = ∑ₖ C(n − k, k) along the lines of slope one in the left-justified triangle have generating function ∑ₙ yⁿ ∑ₖ C(n − k, k) = 1/(1 − y − y²), obtained from the bivariate series by the substitution that weights C(m, k) by y^{m+k}, namely x ↦ y and y ↦ y in 1/(1 − y − xy). Since 1/(1 − y − y²) = ∑ Fₙ₊₁ yⁿ with F₁ = F₂ = 1, we get dₙ = Fₙ₊₁: the shallow diagonal sums are Fibonacci numbers.

        n = 4:  C(4, 0) + C(3, 1) + C(2, 2) = 1 + 3 + 1 = 5 = F₅

The central binomial coefficients

From C(−1/2, n) = (−1/4)ⁿ C(2n, n) (Lesson 1) we obtain:

        ∑ₙ C(2n, n) xⁿ = ∑ₙ C(−1/2, n)(−4x)ⁿ = (1 − 4x)^{−1/2}

Squaring gives (1 − 4x)^{−1} = ∑ 4ⁿ xⁿ, hence the striking identity ∑_{k=0}^{n} C(2k, k) C(2n − 2k, n − k) = 4ⁿ. For n = 3 the terms are 20, 12, 12, 20, with sum 64. Bijective proofs of this identity exist but are considerably more intricate than the two-line generating-function argument, which illustrates how far ahead the algebra can be.

Exponential generating functions and the binomial transform

For sequences (aₙ), (bₙ) with exponential generating functions A(x) = ∑ aₙ xⁿ/n! and B(x) = ∑ bₙ xⁿ/n!, the product rule for exponential series reads

        A(x) B(x) = ∑ₙ ( ∑ₖ C(n, k) aₖ bₙ₋ₖ ) xⁿ/n!

so binomial convolution corresponds to multiplication. In particular bₙ = ∑ₖ C(n, k) aₖ means B(x) = eˣ A(x), and therefore A(x) = e⁻ˣ B(x), that is aₙ = ∑ₖ (−1)ⁿ⁻ᵏ C(n, k) bₖ. This is binomial inversion, a special case of Möbius inversion on the Boolean lattice.

Example (derangements). Every permutation of [n] fixes some set of k points and deranges the remaining n − k, so n! = ∑ₖ C(n, k) D_{n−k} = ∑ₖ C(n, k) Dₖ. Binomial inversion gives Dₙ = ∑ₖ (−1)ⁿ⁻ᵏ C(n, k) k! = n! ∑_{j=0}^{n} (−1)ʲ/j!.

        D₄ = 1 − 4 + 12 − 24 + 24 = 9          D₅ = 44          D₆ = 265

The Pascal matrix

Let Lₙ be the (n + 1) × (n + 1) lower-triangular matrix with entries (Lₙ)ᵢⱼ = C(i, j), 0 ≤ i, j ≤ n. Binomial inversion says precisely that Lₙ⁻¹ has entries (−1)^{i−j} C(i, j). More generally the matrix with entries C(i, j) t^{i−j} represents the substitution f(x) ↦ f(x + t) on polynomials of degree at most n in the basis 1, x, …, xⁿ (up to transposition), so these matrices form a one-parameter group: their product for parameters s and t is the matrix for s + t. Its infinitesimal generator is the matrix S with S_{i,i−1} = i and zeros elsewhere (the matrix of d/dx), and Lₙ = exp(S), the series terminating because S is nilpotent.

The symmetric Pascal matrix Pₙ has entries C(i + j, i). By Corollary 3.2(ii), ∑ₖ C(i, k) C(j, k) = C(i + j, i), which says Pₙ = Lₙ Lₙᵀ. This is the Cholesky (LU) factorization of Pₙ, and since Lₙ is unitriangular, det Pₙ = 1 for every n. Thus Pₙ is a positive-definite integer matrix of determinant 1 whose entries grow exponentially.

✏️ Your Turn

(a) Find the coefficient of x¹⁰ in 1/(1 − x)⁴.
(b) Evaluate ∑ₖ C(10 − k, k).
(c) Compute D₅ by binomial inversion.

Answers: (a) This is column k = 3 shifted: [x¹⁰] 1/(1 − x)⁴ = C(10 + 3, 3) = C(13, 3) = 286. (b) F₁₁ = 89 (terms 1 + 9 + 28 + 35 + 15 + 1). (c) D₅ = ∑ₖ (−1)⁵⁻ᵏ C(5, k) k! = −1 + 5 − 20 + 60 − 120 + 120 = 44.

─────────────────────────────────
Lesson 5: Newton's Generalized Binomial Theorem
─────────────────────────────────

📌 Key idea of this section:

        (1 + x)^α = ∑ₖ C(α, k) xᵏ      for α ∈ ℂ and |x| < 1   (principal branch)
        on |x| = 1:  converges absolutely ⟺ α ∈ ℕ or Re α > 0

History

Isaac Newton found the series for (1 + x)^α with fractional α around 1665 by interpolating Wallis's tables of areas, and described it in two letters of 1676 (the epistola prior and epistola posterior) sent through Henry Oldenburg to Leibniz. Newton had no proof of convergence; the first rigorous treatment of the binomial series for general real and complex exponents was given by Niels Henrik Abel in 1826, in a paper that also contains Abel's theorem on power series at the boundary.

Radius of convergence and the analytic statement

If α ∈ ℕ the series is a polynomial. Otherwise no coefficient vanishes, and |C(α, k + 1)/C(α, k)| = |α − k|/(k + 1) → 1, so the radius of convergence is exactly 1.

Theorem 5.1 (Newton–Abel). Let α ∈ ℂ and let (1 + x)^α = exp(α Log(1 + x)) with the principal logarithm. Then (1 + x)^α = ∑_{k≥0} C(α, k) xᵏ for every complex x with |x| < 1.

Proof. Let f(x) = ∑ C(α, k) xᵏ on the unit disc. Differentiating term by term and using absorption, f′(x) = ∑ₖ k C(α, k) xᵏ⁻¹ = α ∑ₖ C(α − 1, k − 1) xᵏ⁻¹. Hence (1 + x) f′(x) = α ∑ₖ [C(α − 1, k) + C(α − 1, k − 1)] xᵏ = α f(x) by Pascal's rule. Now let g(x) = f(x)(1 + x)^{−α}, which is holomorphic on the disc since 1 + x has positive real part there. Then g′ = (1 + x)^{−α−1}[(1 + x) f′ − α f] = 0, so g is constant, and g(0) = f(0) = 1. ∎

Size of the coefficients

For α ∉ ℕ, upper negation and the Gamma function give C(α, k) = (−1)ᵏ C(k − α − 1, k) = (−1)ᵏ Γ(k − α)/(Γ(−α) Γ(k + 1)). Since Γ(k + a)/Γ(k + b) ~ k^{a−b} as k → ∞,

        C(α, k) ~ (−1)ᵏ k^{−α−1} / Γ(−α)        (k → ∞, α ∉ ℕ)

For example, C(−1/2, k)(−1)ᵏ = C(2k, k)/4ᵏ ~ k^{−1/2}/Γ(1/2) = 1/√(πk), which anticipates the central asymptotics of Lesson 13.

Behaviour on the boundary (real α)

Proposition 5.2. Let α be real and not in ℕ. (i) The series converges absolutely on |x| = 1 if and only if α > 0. (ii) At x = 1 it converges if and only if α > −1, and then its sum is 2^α. (iii) At x = −1 it converges if and only if α > 0, and then its sum is 0.

Proof. By the asymptotic formula |C(α, k)| is comparable to k^{−α−1}, which is summable if and only if α > 0; this gives (i). At x = 1 the terms C(α, k) eventually alternate in sign, and |C(α, k + 1)/C(α, k)| = |k − α|/(k + 1) < 1 once k > α and α > −1, so the terms decrease in modulus to 0 when α > −1 and the series converges by the alternating series test; if α ≤ −1 the terms do not tend to 0. At x = −1 the terms C(α, k)(−1)ᵏ = Γ(k − α)/(Γ(−α)Γ(k + 1)) eventually have constant sign and size comparable to k^{−α−1}, so they are summable exactly when α > 0. In the convergent cases Abel's theorem identifies the sum with lim_{x→±1} (1 + x)^α, which is 2^α and 0 respectively. ∎

        α = −1/2,  x = 1:   1 − 1/2 + 3/8 − 5/16 + 35/128 − ⋯ = 1/√2
        α = −1/2,  x = −1:  ∑ C(2k, k)/4ᵏ diverges (terms ~ 1/√(πk))

Computation with the series

The series gives rapid algorithms for roots. Since 2 = (49/25) · (50/49), we have √2 = (7/5)(1 − 1/50)^{−1/2}, and (1 − y)^{−1/2} = ∑ C(2k, k)(y/4)ᵏ. With y = 1/50 the terms are 1, 1/100, 6/40000, 20/8000000, …, so

        √2 ≈ 1.4 × (1 + 0.01 + 0.00015 + 0.0000025) = 1.4142135

correct to seven decimal places (√2 = 1.41421356…). Each further term gains more than one and a half decimal digits, since the ratio of consecutive terms tends to y = 1/50.

The generating function of the Catalan numbers, introduced in Lesson 12, is (1 − √(1 − 4x))/(2x), and its coefficients are obtained from the series for (1 − 4x)^{1/2} exactly as above.

Formal versus analytic

Over an arbitrary ℚ-algebra, Lesson 3 already showed that B_α(x) = ∑ C(α, k) xᵏ satisfies B_α B_β = B_{α+β} and B_n = (1 + x)ⁿ. In particular B_{1/m}(x)ᵐ = 1 + x, so B_{1/m} is the unique formal power series with constant term 1 whose mth power is 1 + x. Theorem 5.1 adds that this formal object converges and equals the principal branch. The formal statement is often all that is needed in combinatorics, where convergence is irrelevant.

✏️ Your Turn

(a) Find the coefficient of x³ in (1 + x)^{1/3}.
(b) Find the coefficient of x⁴ in (1 − 4x)^{−1/2}.
(c) For which real α does ∑ₖ C(α, k) converge? What is the sum for α = −1/2?

Answers: (a) C(1/3, 3) = (1/3)(−2/3)(−5/3)/6 = (10/27)/6 = 5/81. (b) C(8, 4) = 70. (c) By Proposition 5.2(ii), for α > −1 (and trivially for α ∈ ℕ), with sum 2^α; for α = −1/2 the sum is 2^{−1/2} = 1/√2.

─────────────────────────────────
Lesson 6: Finite Differences and Integer-Valued Polynomials
─────────────────────────────────

📌 Key idea of this section:

        Δf(x) = f(x + 1) − f(x),   Δ C(x, k) = C(x, k − 1)
        f(x) = ∑ₖ Δᵏf(0) C(x, k)   for every polynomial f
        f(ℤ) ⊆ ℤ  ⟺  f is an integer combination of the C(x, k)   (Pólya, 1915)

The difference operator

Let Δ be the forward difference operator, Δf(x) = f(x + 1) − f(x), and E the shift, Ef(x) = f(x + 1), so Δ = E − 1. Pascal's rule in the form C(x + 1, k) − C(x, k) = C(x, k − 1) says that Δ lowers the binomial basis exactly as d/dx lowers the basis xᵏ/k!. Expanding Δⁿ = (E − 1)ⁿ by the binomial theorem (E and 1 commute) gives

        Δⁿf(x) = ∑ₖ (−1)ⁿ⁻ᵏ C(n, k) f(x + k)

Newton's forward-difference formula

Theorem 6.1. For every polynomial f with coefficients in a ℚ-algebra, f(x) = ∑_{k≥0} Δᵏf(0) C(x, k), the sum being finite.

Proof. The polynomials C(x, 0), C(x, 1), …, C(x, d) have degrees 0, 1, …, d and therefore form a basis of the polynomials of degree at most d. Write f = ∑ cₖ C(x, k). Applying Δʲ and evaluating at 0 gives Δʲf(0) = ∑ₖ cₖ C(0, k − j) = cⱼ, since C(0, m) = 1 for m = 0 and 0 otherwise. ∎

This is the discrete Taylor formula: falling factorials play the role of powers, and Δ plays the role of the derivative. The analogy extends to summation: since Δ C(x, k + 1) = C(x, k), the discrete antiderivative of C(x, k) is C(x, k + 1), and

        ∑_{j=0}^{N−1} f(j) = ∑ₖ Δᵏf(0) C(N, k + 1)

which is the hockey stick identity applied term by term.

        f(j) = j³:  values 0, 1, 8, 27  →  Δ-table 0, 1, 6, 6
        j³ = C(j, 1) + 6 C(j, 2) + 6 C(j, 3)
        ∑_{j<N} j³ = C(N, 2) + 6 C(N, 3) + 6 C(N, 4)      (N = 4: 6 + 24 + 6 = 36)

Stirling numbers

Writing powers in the binomial basis introduces the Stirling numbers of the second kind S(m, k), the number of partitions of an m-set into k nonempty blocks: xᵐ = ∑ₖ k! S(m, k) C(x, k) = ∑ₖ S(m, k) x^(k). Combinatorial proof for x ∈ ℕ: a function [m] → [x] is determined by its kernel partition into k blocks together with an injective assignment of the k blocks to values, which can be done in x^(k) ways. Comparing with Theorem 6.1 yields

        ∑ₖ (−1)ⁿ⁻ᵏ C(n, k) kᵐ = Δⁿ(xᵐ)(0) = n! S(m, n)

In particular the left side vanishes for m < n and equals n! for m = n. These are the classical alternating power sums of Euler.

Integer-valued polynomials

A polynomial f ∈ ℚ[x] is integer-valued if f(ℤ) ⊆ ℤ. Examples are C(x, k) (Proposition 1.3) and x(x + 1)(2x + 1)/6, which is not in ℤ[x].

Theorem 6.2 (Pólya, 1915). The following are equivalent for f ∈ ℚ[x] of degree d: (i) f is integer-valued; (ii) f(0), f(1), …, f(d) are integers; (iii) f = ∑ₖ cₖ C(x, k) with every cₖ ∈ ℤ.

Proof. (i) ⇒ (ii) is trivial. (ii) ⇒ (iii): Δᵏf(0) = ∑ⱼ (−1)ᵏ⁻ʲ C(k, j) f(j) is an integer combination of f(0), …, f(k) for k ≤ d, and cₖ = Δᵏf(0) by Theorem 6.1. (iii) ⇒ (i): each C(x, k) is integer-valued. ∎

Corollary 6.3. If f ∈ ℚ[x] has degree d and is integer-valued, then d! f ∈ ℤ[x]. Proof. k! C(x, k) = x^(k) ∈ ℤ[x], and d!/k! is an integer for k ≤ d. ∎

The ring Int(ℤ) of integer-valued polynomials is a free ℤ-module with basis C(x, k), but it is not Noetherian; it is a basic example in commutative algebra (Cahen and Chabert's monograph is the standard reference). Its structure is closely tied to the p-adic behaviour of factorials studied in Lesson 8.

Example. Is (x⁵ − x)/30 integer-valued? Using S(5, k) = 1, 15, 25, 10, 1 for k = 1, …, 5, x⁵ = C(x, 1) + 30 C(x, 2) + 150 C(x, 3) + 240 C(x, 4) + 120 C(x, 5). Hence (x⁵ − x)/30 = C(x, 2) + 5 C(x, 3) + 8 C(x, 4) + 4 C(x, 5), which has integer coefficients; the answer is yes. (This also follows from Fermat's little theorem for the primes 2, 3, 5.)

✏️ Your Turn

(a) Express x⁴ in the binomial basis and check the result at x = 3.
(b) Decide whether (x⁴ − x²)/12 is integer-valued.
(c) Find the polynomial f of degree at most 3 with f(0) = 1, f(1) = 3, f(2) = 8, f(3) = 19, and compute f(4).

Answers: (a) With S(4, k) = 1, 7, 6, 1: x⁴ = C(x, 1) + 14 C(x, 2) + 36 C(x, 3) + 24 C(x, 4); at x = 3, 3 + 42 + 36 + 0 = 81 = 3⁴. (b) x⁴ − x² = 12 C(x, 2) + 36 C(x, 3) + 24 C(x, 4), so (x⁴ − x²)/12 = C(x, 2) + 3 C(x, 3) + 2 C(x, 4), integer-valued. (c) The difference table of 1, 3, 8, 19 is 1; 2; 3; 3 (first entries of successive rows), so f = 1 + 2 C(x, 1) + 3 C(x, 2) + 3 C(x, 3) and f(4) = 1 + 8 + 18 + 12 = 39.

─────────────────────────────────
Lesson 7: Lucas' Theorem
─────────────────────────────────

📌 Key idea of this section:

        n = ∑ nᵢ pⁱ,  k = ∑ kᵢ pⁱ  (base p)   ⟹   C(n, k) ≡ ∏ᵢ C(nᵢ, kᵢ)  (mod p)

The Frobenius lemma

Lemma 7.1. Let p be prime. Then p divides C(p, k) for 0 < k < p, and consequently (1 + x)^{pʲ} ≡ 1 + x^{pʲ} in F_p[x] for all j ≥ 0. Proof. In C(p, k) = p!/(k!(p − k)!) the prime p divides the numerator once and does not divide the denominator. Thus (1 + x)ᵖ ≡ 1 + xᵖ, and the general case follows by induction: (1 + x)^{p^{j+1}} = ((1 + x)^{pʲ})ᵖ ≡ (1 + x^{pʲ})ᵖ ≡ 1 + x^{p^{j+1}}. ∎

This is the statement that the Frobenius map u ↦ uᵖ is a ring homomorphism in characteristic p.

Lucas' theorem and its proof

Theorem 7.2 (Lucas, 1878). Let p be prime, and let n = n₀ + n₁p + ⋯ + n_r pʳ and k = k₀ + k₁p + ⋯ + k_r pʳ with digits 0 ≤ nᵢ, kᵢ ≤ p − 1. Then C(n, k) ≡ C(n₀, k₀) C(n₁, k₁) ⋯ C(n_r, k_r) (mod p), with the convention C(a, b) = 0 for b > a.

Proof. In F_p[x], by Lemma 7.1,

        (1 + x)ⁿ = ∏ᵢ ((1 + x)^{pⁱ})^{nᵢ} ≡ ∏ᵢ (1 + x^{pⁱ})^{nᵢ} = ∏ᵢ ∑_{jᵢ=0}^{nᵢ} C(nᵢ, jᵢ) x^{jᵢ pⁱ}

Expanding the product, each monomial has exponent ∑ jᵢ pⁱ with 0 ≤ jᵢ ≤ nᵢ ≤ p − 1. By uniqueness of base-p expansions, the exponent k arises from exactly one choice, jᵢ = kᵢ for all i, provided kᵢ ≤ nᵢ for all i, and from no choice otherwise. Comparing coefficients of xᵏ gives the theorem. ∎

        C(2026, 626) mod 5:   2026 = 31101₅,  626 = 10001₅
        ≡ C(3, 1) C(1, 0) C(1, 0) C(0, 0) C(1, 1) = 3        (mod 5)

        C(1000, 300) mod 7:   1000 = 2626₇,  300 = 0606₇
        ≡ C(2, 0) C(6, 6) C(2, 0) C(6, 6) = 1                (mod 7)

Consequences

Corollary 7.3. (i) p ∣ C(n, k) if and only if some base-p digit of k exceeds the corresponding digit of n. (ii) C(n, k) is odd if and only if every binary digit 1 of k is also a digit 1 of n, that is k AND n = k in bitwise notation. (iii) (Fine, 1947) The number of k ∈ {0, …, n} with p ∤ C(n, k) equals ∏ᵢ (nᵢ + 1). (iv) (Glaisher, 1899) Row n contains exactly 2^{s₂(n)} odd entries. (v) All of C(n, 1), …, C(n, n − 1) are divisible by p if and only if n is a power of p. (vi) No entry of row n is divisible by p if and only if n = c pᵐ − 1 with m ≥ 0 and 1 ≤ c ≤ p, that is, all base-p digits of n other than the leading one equal p − 1.

Proof. (i) and (ii) are immediate from Theorem 7.2, since C(nᵢ, kᵢ) with nᵢ, kᵢ < p is divisible by p exactly when kᵢ > nᵢ. For (iii), k is admissible exactly when kᵢ ∈ {0, …, nᵢ} for each i, independently. (iv) is (iii) with p = 2. For (v), by (iii) the number of nonzero entries is ∏(nᵢ + 1), and this equals 2 (only the two ends) exactly when n has a single nonzero digit equal to 1. For (vi) we need ∏(nᵢ + 1) = n + 1. We claim ∏(nᵢ + 1) ≤ n + 1 always, with equality exactly when all digits below the leading one equal p − 1. Write n = n′ + d pʳ with leading digit d ≥ 1 and n′ < pʳ; by induction the product over the digits of n′ is at most n′ + 1, so ∏(nᵢ + 1) ≤ (d + 1)(n′ + 1) = d(n′ + 1) + n′ + 1 ≤ d pʳ + n′ + 1 = n + 1, with equality throughout if and only if n′ = pʳ − 1 (all lower digits p − 1, for which the inductive bound is an equality). Then n + 1 = (d + 1)pʳ with 2 ≤ d + 1 ≤ p, and together with n = 0 this is the stated family. ∎

For p = 2, (vi) says that every entry of row n is odd exactly when n = 2ᵐ − 1, which is the case visible in the triangle at rows 1, 3, 7, 15, 31.

Extensions

Lucas' theorem fails for prime powers: in base 4, 4 = 10₄ and 2 = 02₄, so the naive analogue would predict C(4, 2) ≡ C(1, 0) C(0, 2) = 0 (mod 4), whereas C(4, 2) = 6 ≡ 2 (mod 4). Davis and Webb (1990) and Granville (1997) found correct generalizations to prime powers, the latter in terms of factorials with the multiples of p removed. There is a multinomial version (Lesson 10) and a q-analogue (Lesson 11): if ζ is a primitive dth root of unity, the Gaussian coefficient [n k] evaluated at q = ζ equals C(⌊n/d⌋, ⌊k/d⌋) times the Gaussian coefficient of the remainders n mod d and k mod d evaluated at ζ.

✏️ Your Turn

(a) How many odd entries are there in row 2026?
(b) How many entries of row 2026 are not divisible by 5?
(c) Compute C(50, 20) mod 7 and C(100, 19) mod 3.

Answers: (a) 2026 = 11111101010₂ has eight 1s, so 2⁸ = 256. (b) 2026 = 31101₅, so (3 + 1)(1 + 1)(1 + 1)(0 + 1)(1 + 1) = 32. (c) 50 = 101₇ and 20 = 026₇; the middle digit 2 exceeds 0, so C(50, 20) ≡ 0 (mod 7). 100 = 10201₃ and 19 = 00201₃, so C(100, 19) ≡ C(1, 0)C(0, 0)C(2, 2)C(0, 0)C(1, 1) = 1 (mod 3).

─────────────────────────────────
Lesson 8: Legendre, Kummer and the p-adic Valuation
─────────────────────────────────

📌 Key idea of this section:

        v_p(n!) = ∑_{i≥1} ⌊n/pⁱ⌋ = (n − s_p(n))/(p − 1)
        v_p C(n, k) = (s_p(k) + s_p(n − k) − s_p(n))/(p − 1) = number of carries in k + (n − k)

Legendre's formula

Theorem 8.1 (Legendre, 1808). v_p(n!) = ∑_{i≥1} ⌊n/pⁱ⌋ = (n − s_p(n))/(p − 1).

Proof. v_p(n!) = ∑_{m=1}^{n} v_p(m) = ∑_{m=1}^{n} #{i ≥ 1 : pⁱ ∣ m} = ∑_{i≥1} #{m ≤ n : pⁱ ∣ m} = ∑_{i≥1} ⌊n/pⁱ⌋. For the second form, if n = ∑ⱼ nⱼ pʲ then ⌊n/pⁱ⌋ = ∑_{j≥i} nⱼ p^{j−i}, and summing over i ≥ 1 gives ∑ⱼ nⱼ (p^{j−1} + ⋯ + 1) = ∑ⱼ nⱼ (pʲ − 1)/(p − 1) = (n − s_p(n))/(p − 1). ∎

        v₂(30!) = 15 + 7 + 3 + 1 = 26 = (30 − 4)/1        (30 = 11110₂)
        v₅(30!) = 6 + 1 = 7 = (30 − 2)/4                   (30 = 110₅)

Kummer's theorem

Theorem 8.2 (Kummer, 1852). For 0 ≤ k ≤ n, v_p C(n, k) equals the number of carries that occur when k and n − k are added in base p.

Proof. By Legendre, v_p C(n, k) = v_p(n!) − v_p(k!) − v_p((n − k)!) = (s_p(k) + s_p(n − k) − s_p(n))/(p − 1). Now add a = k and b = n − k digit by digit with carries c₋₁ = 0, c₀, c₁, … ∈ {0, 1}: at position i, aᵢ + bᵢ + c_{i−1} = (a + b)ᵢ + p cᵢ. Summing over i gives s_p(a) + s_p(b) + ∑ᵢ c_{i−1} = s_p(a + b) + p ∑ᵢ cᵢ, i.e. s_p(a) + s_p(b) − s_p(a + b) = (p − 1) ∑ cᵢ. ∎

Kummer proved the theorem in his 1852 memoir on reciprocity laws; the digit-sum form makes it a one-line consequence of Legendre. Lucas' theorem is the special case "zero carries" read modulo p.

        v₃ C(100, 50):  50 = 1212₃;  1212₃ + 1212₃ produces carries at all 4 positions
        ⟹ 3⁴ = 81 divides C(100, 50) exactly
        v₂ C(100, 50) = s₂(50) = 3,   v₅ = v₇ = 0  (50 = 200₅ = 101₇; no carries)

Corollaries

Corollary 8.3. (i) v₂ C(2n, n) = s₂(n); in particular C(2n, n) is even for n ≥ 1 and divisible by 4 unless n is a power of 2. (ii) For every prime p and 0 ≤ k ≤ n, p^{v_p C(n, k)} ≤ n. (iii) C(n, k) divides lcm(1, 2, …, n), and therefore lcm(1, …, 2n) ≥ C(2n, n) ≥ 4ⁿ/(2n + 1).

Proof. (i) In n + n each binary 1 of n produces a carry (Kummer), or directly 2s₂(n) − s₂(2n) = s₂(n). (ii) If pᴸ⁻¹ ≤ n < pᴸ then n has L digits, and a carry out of position L − 1 would force n ≥ pᴸ; so there are at most L − 1 carries and p^{v} ≤ p^{L−1} ≤ n. (iii) By (ii), every prime power exactly dividing C(n, k) is at most n and hence divides lcm(1, …, n). The last inequality holds because C(2n, n) is the largest of the 2n + 1 terms in the expansion of 4ⁿ = (1 + 1)^{2n}. ∎

Part (iii) is the elementary route to Chebyshev-type bounds: it shows lcm(1, …, N) grows at least like 2^N up to polynomial factors, i.e. ψ(N) = log lcm(1, …, N) ≥ N log 2 − O(log N).

Babbage and Wolstenholme

Theorem 8.4 (Babbage, 1819). For every prime p ≥ 3, C(2p − 1, p − 1) ≡ 1 (mod p²).

Proof. C(2p − 1, p − 1) = ∏_{k=1}^{p−1} (p + k)/k = ∏_{k=1}^{p−1} (1 + p/k). Working in the ring ℤ₍p₎ of rationals with denominator prime to p, the product is ≡ 1 + p ∑_{k=1}^{p−1} 1/k (mod p²). Pairing k with p − k, 1/k + 1/(p − k) = p/(k(p − k)), so the harmonic sum H_{p−1} is divisible by p (for p ≥ 3, where the pairs are disjoint). Hence the product is ≡ 1 (mod p²). ∎

Wolstenholme (1862) proved more: for p ≥ 5, H_{p−1} ≡ 0 (mod p²), which yields C(2p − 1, p − 1) ≡ 1 (mod p³), equivalently C(2p, p) ≡ 2 (mod p³). For p = 7: C(14, 7) = 3432 and 3432 − 2 = 3430 = 7³ · 10. Primes for which the congruence holds modulo p⁴ are called Wolstenholme primes; only 16843 and 2124679 are known.

Erdős's proof of Bertrand's postulate

Theorem 8.5 (Chebyshev, 1852). For every n ≥ 1 there is a prime p with n < p ≤ 2n.

Proof (Erdős, 1932). Step 1: ∏_{p≤m} p < 4ᵐ for m ≥ 1. By induction it suffices to treat odd m = 2s + 1; the primes in (s + 1, 2s + 1] all divide C(2s + 1, s), which is at most 4ˢ because it appears twice in the expansion of 2^{2s+1}; hence ∏_{p≤2s+1} p < 4^{s+1} · 4ˢ = 4^{2s+1}. Step 2: write v_p C(2n, n) = ∑_{i≥1} (⌊2n/pⁱ⌋ − 2⌊n/pⁱ⌋), each term being 0 or 1. Hence p^{v_p} ≤ 2n by Corollary 8.3(ii); primes p > √(2n) appear at most to the first power; and for n ≥ 5 primes with 2n/3 < p ≤ n do not divide C(2n, n) at all, because then ⌊2n/p⌋ = 2, ⌊n/p⌋ = 1 and p² > 2n. Step 3: suppose no prime lies in (n, 2n]. Then all prime factors of C(2n, n) are at most 2n/3, and

        4ⁿ/(2n + 1) ≤ C(2n, n) ≤ (2n)^{√(2n)} · ∏_{p ≤ 2n/3} p < (2n)^{√(2n)} · 4^{2n/3}

where primes up to √(2n) (fewer than √(2n) of them) contribute at most 2n each. This gives 4^{n/3} < (2n + 1)(2n)^{√(2n)}, which is false for all n ≥ 468. For n < 468 (indeed for n < 631) the primes 2, 3, 5, 7, 13, 23, 43, 83, 163, 317, 631, each less than twice its predecessor, supply a prime in (n, 2n]. ∎

✏️ Your Turn

(a) Find v₂ C(1000, 500).
(b) Find v₃ C(63, 26) by counting carries.
(c) Verify Babbage's congruence for p = 7.

Answers: (a) s₂(500) = 6 (500 = 111110100₂), so v₂ = 6. (b) 26 = 222₃ and 63 − 26 = 37 = 1101₃. Adding 0222₃ + 1101₃: position 0: 2 + 1 = 3, write 0 carry 1; position 1: 2 + 0 + 1 = 3, write 0 carry 1; position 2: 2 + 1 + 1 = 4, write 1 carry 1; position 3: 0 + 1 + 1 = 2, no carry. Three carries, so v₃ C(63, 26) = 3 (and indeed 63 = 2100₃). (c) C(13, 6) = 1716 and 1716 − 1 = 1715 = 49 · 35.

─────────────────────────────────
Lesson 9: The Sierpinski Pattern and Fractal Structure
─────────────────────────────────

📌 Key idea of this section:

        rows 0 … 2ᵐ⁺¹ − 1 mod 2  =  three copies of rows 0 … 2ᵐ − 1  +  an inverted triangle of zeros
        #odd entries in rows 0 … 2ᵐ − 1 = 3ᵐ;   limiting set: Sierpinski gasket, dimension log 3/log 2

Self-similarity from Lucas' theorem

Let Tₘ denote the array of residues C(n, k) mod 2 for 0 ≤ k ≤ n < 2ᵐ. Write a row index in the range 2ᵐ ≤ n < 2ᵐ⁺¹ as n = 2ᵐ + n′ with 0 ≤ n′ < 2ᵐ. By Lucas' theorem with the top binary digit separated:

        k < 2ᵐ:           C(n, k) ≡ C(1, 0) C(n′, k) = C(n′, k)
        k = 2ᵐ + k′:      C(n, k) ≡ C(1, 1) C(n′, k′) = C(n′, k′)

In the first case C(n′, k) = 0 when n′ < k < 2ᵐ. Hence the rows 2ᵐ, …, 2ᵐ⁺¹ − 1 consist of a copy of Tₘ on the left (k ≤ n′), a copy of Tₘ on the right (k ≥ 2ᵐ), and between them the inverted triangle n′ < k < 2ᵐ of zeros. Together with Tₘ itself on top, Tₘ₊₁ is three copies of Tₘ arranged in a triangle around a hole. The same argument works for every prime p: Tₘ₊₁ mod p consists of p(p + 1)/2 blocks, the block in position (a, b), 0 ≤ b ≤ a < p, being C(a, b) · Tₘ (mod p), and the remaining p(p − 1)/2 blocks are zero.

Counting odd entries

Proposition 9.1. The number of odd entries in rows 0, …, 2ᵐ − 1 is 3ᵐ; more generally the number of entries not divisible by p in rows 0, …, pᵐ − 1 is (p(p + 1)/2)ᵐ. Proof. By Fine's theorem the count is ∑ over n < pᵐ of ∏ᵢ (nᵢ + 1), and since the digits n₀, …, n_{m−1} range independently over {0, …, p − 1}, this is (∑_{d=0}^{p−1} (d + 1))ᵐ = (p(p + 1)/2)ᵐ. ∎

The total number of entries in the first 2ᵐ rows is 2ᵐ(2ᵐ + 1)/2, so the proportion of odd entries is about 2(3/4)ᵐ → 0: almost all binomial coefficients are even, and more generally, for any fixed modulus, almost all are divisible by it. For a general number N of rows, let f(N) be the number of odd entries in rows 0, …, N − 1. Then f(N)/N^θ with θ = log₂ 3 equals 1 whenever N is a power of 2 but oscillates otherwise; Harborth (1977) showed that lim sup f(N)/N^θ = 1 and lim inf f(N)/N^θ ≈ 0.812556. For example f(100) = 1251, while 100^θ ≈ 1478.9.

The limiting fractal

Scale the first 2ᵐ rows into the unit triangle by sending the entry (n, k) to the point (k/2ᵐ − n/2ᵐ⁺¹, −n/2ᵐ) and replacing it by a small triangle of side 2⁻ᵐ. Let Kₘ be the union of the small triangles at odd entries. The self-similarity above says Kₘ₊₁ = φ₁(Kₘ) ∪ φ₂(Kₘ) ∪ φ₃(Kₘ), where φ₁, φ₂, φ₃ are the three similarities of ratio 1/2 fixing the vertices of the big triangle. By Hutchinson's theorem the iterated function system {φ₁, φ₂, φ₃} has a unique nonempty compact invariant set K, the Sierpinski gasket, and Kₘ → K in the Hausdorff metric. Because the open set condition holds (the open triangle is mapped onto three disjoint open subtriangles), Moran's equation 3 · (1/2)ˢ = 1 gives the Hausdorff dimension

        dim_H K = log 3 / log 2 ≈ 1.5850

For a prime p the same construction with p(p + 1)/2 maps of ratio 1/p gives a fractal of dimension log(p(p + 1)/2)/log p: for p = 3 this is log 6/log 3 ≈ 1.6309, for p = 5 it is log 15/log 5 ≈ 1.6826, and the dimension tends to 2 as p → ∞.

Cellular automata and generating functions

Pascal's rule modulo 2 says that each row is the exclusive-or of the previous row with its shift. In the staggered layout of the triangle this is Wolfram's elementary cellular automaton Rule 90 (each cell becomes the XOR of its two neighbours), started from a single live cell; Rule 90 is linear over F₂, and its space-time diagram is the Sierpinski pattern. Algebraically, the generating function of row n modulo 2 factors as (1 + x)ⁿ ≡ ∏ᵢ (1 + x^{2ⁱ})^{nᵢ}, a product of s₂(n) sparse factors, which is Lucas' theorem once more.

Finer valuations

Kummer's theorem gives a nested family of patterns: the entries with v_p C(n, k) ≥ j form a union of inverted triangles of all sizes, determined by the carry structure. The number of entries in row n with v_p C(n, k) = j can be computed from the digit pattern of n (results of Carlitz and others), and the pictures modulo pᵉ are self-similar in a weaker, automatic-sequence sense: the residues C(n, k) mod pᵉ form a two-dimensional p-automatic sequence (Allouche and Shallit's book is the standard reference).

✏️ Your Turn

(a) How many odd entries are there in rows 0 through 63?
(b) How many entries not divisible by 3 are there in rows 0 through 80?
(c) Compute the fractal dimension of Pascal's triangle modulo 5 to four decimal places.

Answers: (a) 64 = 2⁶, so 3⁶ = 729. (b) 81 = 3⁴, so (3 · 4/2)⁴ = 6⁴ = 1296. (c) log 15/log 5 = 1.6826 (to four places).

─────────────────────────────────
Lesson 10: Multinomial Coefficients and Pascal's Simplex
─────────────────────────────────

📌 Key idea of this section:

        C(n; k₁, …, k_m) = n! / (k₁! ⋯ k_m!)      (k₁ + ⋯ + k_m = n)
        (x₁ + ⋯ + x_m)ⁿ = ∑ C(n; k₁, …, k_m) x₁^{k₁} ⋯ x_m^{k_m}
        v_p C(n; k₁, …, k_m) = (∑ s_p(kⱼ) − s_p(n))/(p − 1) = total carries in k₁ + ⋯ + k_m

Definition and the multinomial theorem

For nonnegative integers k₁, …, k_m with sum n, the multinomial coefficient C(n; k₁, …, k_m) = n!/(k₁! ⋯ k_m!) counts the words of length n over the alphabet {1, …, m} in which the letter j occurs kⱼ times; equivalently, the ordered partitions of [n] into blocks of sizes k₁, …, k_m. Choosing the positions of the letter 1, then of the letter 2, and so on gives the factorization

        C(n; k₁, …, k_m) = C(n, k₁) C(n − k₁, k₂) ⋯ C(n − k₁ − ⋯ − k_{m−1}, k_m)

which proves integrality and reduces many properties to the binomial case. The multinomial theorem follows by expanding (x₁ + ⋯ + x_m)ⁿ as a sum over all words of length n: the word w contributes the monomial ∏ x_{wᵢ}, and the number of words with letter counts (k₁, …, k_m) is the multinomial coefficient. Setting all xⱼ = 1 gives ∑ C(n; k₁, …, k_m) = mⁿ, and the number of distinct monomials is the number of solutions of k₁ + ⋯ + k_m = n in nonnegative integers, which is C(n + m − 1, m − 1) by stars and bars.

        [x²y³z] (2x − y + 3z)⁶ = C(6; 2, 3, 1) · 2² · (−1)³ · 3 = 60 · (−12) = −720

Pascal's simplex

Classifying words by their last letter gives the recurrence C(n; k₁, …, k_m) = ∑ⱼ C(n − 1; k₁, …, kⱼ − 1, …, k_m), with terms having a negative entry omitted. For m = 3 the coefficients of (x + y + z)ⁿ arranged in triangular layers form Pascal's pyramid (or tetrahedron); each entry is the sum of the three entries above it, the edges of each layer are rows of Pascal's triangle, and the entries of layer n with first index a form row n − a of the triangle multiplied by C(n, a), because C(n; a, b, c) = C(n, a) C(n − a, b). For general m one obtains Pascal's (m − 1)-simplex.

Maximal coefficients

Proposition 10.1. For fixed n and m, C(n; k₁, …, k_m) is maximal exactly when the kⱼ differ pairwise by at most 1. Proof. If kᵢ ≥ kⱼ + 2, replace (kᵢ, kⱼ) by (kᵢ − 1, kⱼ + 1); the coefficient is multiplied by kᵢ/(kⱼ + 1) > 1. So a maximizer is balanced, and all balanced vectors are permutations of each other and give the same value. ∎

        max over (x + y + z)¹⁰:  C(10; 4, 3, 3) = 3628800 / (24 · 6 · 6) = 4200

Arithmetic: Lucas and Kummer for multinomials

Theorem 10.2. Let p be prime. (i) (Kummer for multinomials) v_p C(n; k₁, …, k_m) = (s_p(k₁) + ⋯ + s_p(k_m) − s_p(n))/(p − 1), and this equals the sum of all carries when k₁ + ⋯ + k_m is computed in base p (a carry at one position may now exceed 1). (ii) (Lucas for multinomials) Writing kⱼ = ∑ᵢ k_{j,i} pⁱ and n = ∑ nᵢ pⁱ, C(n; k₁, …, k_m) ≡ ∏ᵢ C(nᵢ; k_{1,i}, …, k_{m,i}) (mod p) if k_{1,i} + ⋯ + k_{m,i} = nᵢ for every i, and ≡ 0 otherwise.

Proof. (i) Legendre's formula gives the digit-sum expression, and the carry argument of Theorem 8.2 applies verbatim to a multi-term addition: at position i, ∑ⱼ k_{j,i} + c_{i−1} = nᵢ + p cᵢ. (ii) By (i) the coefficient is divisible by p exactly when some carry occurs, i.e. exactly when the digit columns do not add up without carrying. If no carry occurs, the factorization into binomial coefficients and Lucas' theorem give the product formula. ∎

        v₂ C(12; 4, 4, 4) = 3 · s₂(4) − s₂(12) = 3 − 2 = 1      (C(12; 4, 4, 4) = 34650 = 2 · 17325)
        v₃ C(9; 3, 3, 3) = (1 + 1 + 1 − 1)/2 = 1                 (C(9; 3, 3, 3) = 1680 = 3 · 560)

Consequently, Pascal's simplex modulo p is self-similar in the same way as the triangle, and modulo 2 the pyramid gives a discrete Sierpinski tetrahedron-type fractal: the number of odd entries in layers 0 through 2ʳ − 1 is 4ʳ, since a layer n has 3^{s₂(n)} odd entries (each binary 1 of n can be given to any of the three letters) and ∑_{n<2ʳ} 3^{s₂(n)} = 4ʳ.

Multinomial coefficients also appear as the coefficients of the multinomial distribution, and the entropy estimates of Lesson 13 extend to them: for kⱼ = pⱼn, C(n; k₁, …, k_m) = exp(n H(p₁, …, p_m) + O(log n)) with H the Shannon entropy in natural units.

✏️ Your Turn

(a) Find the coefficient of a³b²c² in (a + b + c)⁷.
(b) How many distinct monomials occur in (x + y + z + w)¹⁰?
(c) Find the coefficient of x³yz² in (x − 2y + z)⁶.

Answers: (a) C(7; 3, 2, 2) = 5040/(6 · 2 · 2) = 210. (b) C(10 + 3, 3) = C(13, 3) = 286. (c) C(6; 3, 1, 2) · (−2) = 60 · (−2) = −120.

─────────────────────────────────
Lesson 11: Gaussian Binomial Coefficients
─────────────────────────────────

📌 Key idea of this section:

        [n]_q = 1 + q + ⋯ + qⁿ⁻¹,   [n k]_q = [n]_q! / ([k]_q! [n − k]_q!)
        [n k]_q = ∑ over 0-1 words with k ones of q^{inv(w)} = #{k-dimensional subspaces of F_qⁿ}
        ∏_{i=0}^{n−1} (1 + qⁱx) = ∑ₖ q^{k(k−1)/2} [n k]_q xᵏ

Definition and the two q-Pascal rules

For an indeterminate q, put [n]_q = 1 + q + ⋯ + qⁿ⁻¹ = (1 − qⁿ)/(1 − q), [n]_q! = [1]_q [2]_q ⋯ [n]_q, and for 0 ≤ k ≤ n define the Gaussian (or q-binomial) coefficient [n k]_q = [n]_q!/([k]_q! [n − k]_q!), with [n k]_q = 0 if k < 0 or k > n. At q = 1 it reduces to C(n, k). We usually suppress the subscript q.

Proposition 11.1. For 1 ≤ k ≤ n,

        [n k] = [n − 1  k − 1] + qᵏ [n − 1  k]
        [n k] = qⁿ⁻ᵏ [n − 1  k − 1] + [n − 1  k]

Proof. Factor out [n − 1]!/([k]! [n − k]!) from the right-hand side of the first rule; what remains is [k] + qᵏ[n − k] = (1 + ⋯ + qᵏ⁻¹) + (qᵏ + ⋯ + qⁿ⁻¹) = [n]. The second rule is the same computation with [n − k] + qⁿ⁻ᵏ[k] = [n]. ∎

By induction on n, [n k] is a polynomial in q of degree k(n − k) with nonnegative integer coefficients, palindromic since [n k] = [n  n − k] and the definition is invariant under q ↦ q⁻¹ up to the factor q^{k(n−k)}.

        [4 2] = 1 + q + 2q² + q³ + q⁴             [5 2] = 1 + q + 2q² + 2q³ + 2q⁴ + q⁵ + q⁶

Combinatorial meaning: inversions and partitions in a box

For a word w ∈ {0, 1}ⁿ, an inversion is a pair i < j with wᵢ = 1 and wⱼ = 0. Theorem 11.2. ∑ q^{inv(w)}, over words with k ones and n − k zeros, equals [n k]. Proof. Let W(n, k) be the sum. If the last letter is 1 it is involved in no inversion, contributing W(n − 1, k − 1); if it is 0, each of the k ones forms an inversion with it, contributing qᵏ W(n − 1, k). This is the first q-Pascal rule, and the initial values agree. ∎

Reading a word as a lattice path (1 = step east, 0 = step north), inv(w) is the area of the region between the path and the bottom-right corner of the k × (n − k) box, so [n k] is also the generating function of integer partitions whose Young diagram fits in a k × (n − k) box, counted by size. The coefficients of [5 2] above, 1, 1, 2, 2, 2, 1, 1, count partitions of 0, …, 6 with at most 2 parts, each at most 3.

Subspaces of vector spaces over finite fields

Theorem 11.3. If q is a prime power, the number of k-dimensional subspaces of F_qⁿ is [n k]_q.

Proof. An ordered k-tuple of linearly independent vectors can be chosen in (qⁿ − 1)(qⁿ − q)⋯(qⁿ − qᵏ⁻¹) ways, since the ith vector must avoid the span of the previous ones, which has qⁱ⁻¹ elements. Each k-dimensional subspace has (qᵏ − 1)(qᵏ − q)⋯(qᵏ − qᵏ⁻¹) ordered bases. Dividing and cancelling the powers of q gives ∏_{i=0}^{k−1} (qⁿ⁻ⁱ − 1)/(qᵏ⁻ⁱ − 1) = [n k]_q. ∎

        [4 2]₂ = (15 · 14)/(3 · 2) = 35        [4 2]₃ = (80 · 78)/(8 · 6) = 130
        subspaces of F₂⁴ of all dimensions: 1 + 15 + 35 + 15 + 1 = 67

This is the basis of the slogan that combinatorics of sets is linear algebra over the field with one element: subsets correspond to subspaces, and C(n, k) is the q → 1 limit of [n k]_q. The q-Pascal rules count subspaces according to whether they lie in a fixed hyperplane.

The q-binomial theorem

Theorem 11.4 (Cauchy; Rothe). ∏_{i=0}^{n−1} (1 + qⁱ x) = ∑_{k=0}^{n} q^{k(k−1)/2} [n k] xᵏ.

Proof. Induction on n; the case n = 0 is trivial. Multiplying the identity for n by (1 + qⁿx), the coefficient of xᵏ becomes q^{k(k−1)/2}[n k] + qⁿ q^{(k−1)(k−2)/2}[n  k − 1]. Since (k − 1)(k − 2)/2 + n = k(k − 1)/2 + (n + 1 − k), this equals q^{k(k−1)/2}([n k] + q^{n+1−k}[n  k − 1]) = q^{k(k−1)/2}[n + 1  k] by the second q-Pascal rule. ∎

Further results (cited): the q-Vandermonde identity [m + n  k] = ∑ⱼ q^{(m−j)(k−j)} [m j][n  k − j]; Gauss's evaluation ∑ₖ (−1)ᵏ [n k] = 0 for odd n and (1 − q)(1 − q³)⋯(1 − qⁿ⁻¹) for even n; and the unimodality of the coefficient sequence of [n k], proved by Sylvester (1878) by invariant-theoretic methods (in modern terms, the representation theory of sl₂) and combinatorially by O'Hara (1990). For n = 4, Gauss's sum is 1 − [4 1] + [4 2] − [4 3] + 1 = 1 − q − q³ + q⁴ = (1 − q)(1 − q³).

✏️ Your Turn

(a) Verify q-Vandermonde for m = n = 1, k = 1.
(b) How many 2-dimensional subspaces does F₃⁴ have?
(c) How many 3-dimensional subspaces does F₂⁵ have?

Answers: (a) [2 1] = 1 + q; the right side is q^{1·1}[1 0][1 1] + q⁰[1 1][1 0] = q + 1. (b) [4 2]₃ = 130 (also 1 + 3 + 2·9 + 27 + 81 = 130). (c) [5 3]₂ = [5 2]₂ = (31 · 30)/(3 · 2) = 155.

─────────────────────────────────
Lesson 12: Catalan Numbers, Reflection and the Ballot Problem
─────────────────────────────────

📌 Key idea of this section:

        Cₙ = C(2n, n) − C(2n, n + 1) = C(2n, n)/(n + 1) = C(2n + 1, n)/(2n + 1)
        P(A strictly ahead throughout | a votes for A, b for B, a > b) = (a − b)/(a + b)

Dyck paths and the reflection principle

A Dyck path of semilength n is a sequence of n up-steps (+1) and n down-steps (−1) whose partial sums are all nonnegative. Let Cₙ be their number.

Theorem 12.1. Cₙ = C(2n, n) − C(2n, n + 1) = C(2n, n)/(n + 1).

Proof. Among all C(2n, n) paths from height 0 to height 0, call a path bad if it reaches height −1. Reflect the portion of a bad path after its first visit to −1 in the line y = −1. This produces a path from 0 to −2, i.e. with n − 1 ups and n + 1 downs, and the map is a bijection onto all such paths (every path ending at −2 visits −1, and reflecting after the first visit inverts the map). Hence the number of bad paths is C(2n, n + 1), and C(2n, n) − C(2n, n + 1) = C(2n, n)(1 − n/(n + 1)) = C(2n, n)/(n + 1). ∎

The reflection argument is traditionally credited to Désiré André (1887), though André's own published argument was a different bijection.

The ballot theorem

Theorem 12.2 (Whitworth 1878; Bertrand 1887). If candidate A receives a votes and B receives b < a votes, and the ballots are counted in uniformly random order, the probability that A is strictly ahead throughout the count is (a − b)/(a + b).

Proof. Encode a count as a lattice path with up-steps for A. A good path starts with an up-step and stays strictly above 0 afterwards; it is a path from (1, 1) to (a + b, a − b) avoiding the axis. There are C(a + b − 1, a − 1) paths from (1, 1) to (a + b, a − b) in total. Those touching the axis are, by reflecting their initial segment up to the first touch, in bijection with paths from (1, −1) to (a + b, a − b), which have a ups and b − 1 downs: there are C(a + b − 1, a) of them. Hence the number of good paths is C(a + b − 1, a − 1) − C(a + b − 1, a) = C(a + b, a)(a/(a + b) − b/(a + b)), and dividing by C(a + b, a) gives the claim. ∎

Prepending an extra vote for A converts "never behind" into "strictly ahead": the number of paths from (0, 0) to (a, b) with unit east and north steps that never go above the diagonal (a ≥ b) is the ballot number

        ((a − b + 1)/(a + 1)) C(a + b, b)        (a = b = n:  Cₙ;   a = 8, b = 5:  (4/9) · 1287 = 572)

The cycle lemma

Lemma 12.3 (Dvoretzky–Motzkin, 1947). Let s be a sequence of a terms +1 and b terms −1 with a > b. Exactly a − b of the a + b cyclic rotations of s have all partial sums positive (counting rotations by their starting position).

Proof sketch. Call a starting position good if the rotation beginning there has all partial sums positive. A +1 immediately followed cyclically by a −1 can be deleted without changing which of the remaining starting positions are good, and neither deleted position is good (the −1 position starts with a negative sum, and the +1 position reaches 0 after two steps). After b such deletions only a − b terms +1 remain, all of them good. ∎

Applied to sequences of n + 1 ups and n downs (all rotations distinct because gcd(2n + 1, n) = 1), each rotation class of size 2n + 1 contains exactly one good sequence, and a good sequence is an up-step followed by a Dyck path. Hence Cₙ = C(2n + 1, n)/(2n + 1), a second proof of Theorem 12.1. More generally the cycle lemma gives the Fuss–Catalan numbers C(mn + 1, n)/(mn + 1) counting m-ary trees with n internal nodes.

Generating function and asymptotics

Decomposing a nonempty Dyck path at its first return to 0 gives Cₙ₊₁ = ∑_{k=0}^{n} Cₖ Cₙ₋ₖ, so C(x) = ∑ Cₙ xⁿ satisfies C(x) = 1 + x C(x)². Solving and choosing the branch regular at 0, C(x) = (1 − √(1 − 4x))/(2x). Newton's series for (1 − 4x)^{1/2} recovers Cₙ = C(2n, n)/(n + 1), and the central asymptotics of Lesson 13 give

        Cₙ ~ 4ⁿ / (√π n^{3/2})

The sequence begins 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796. Stanley's monograph Catalan Numbers (2015) lists over two hundred families of objects counted by Cₙ, including triangulations of a convex (n + 2)-gon, binary trees with n internal nodes, noncrossing partitions of [n] and 231-avoiding permutations.

Parity

Proposition 12.4. v₂(Cₙ) = s₂(n + 1) − 1. In particular Cₙ is odd if and only if n = 2ᵐ − 1. Proof. v₂(Cₙ) = v₂ C(2n, n) − v₂(n + 1) = s₂(n) − v₂(n + 1) by Corollary 8.3. If n ends in exactly j binary ones, then v₂(n + 1) = j and adding 1 replaces these j ones by a single one, so s₂(n + 1) = s₂(n) − j + 1. Hence v₂(Cₙ) = s₂(n + 1) − 1, which vanishes exactly when n + 1 is a power of 2. ∎

✏️ Your Turn

(a) Compute C₁₀.
(b) With a = 7 and b = 4, find the probability that A is strictly ahead throughout.
(c) Find v₂(C₃₀) and decide whether C₃₁ is odd.

Answers: (a) C(20, 10)/11 = 184756/11 = 16796. (b) (7 − 4)/(7 + 4) = 3/11. (c) v₂(C₃₀) = s₂(31) − 1 = 5 − 1 = 4; C₃₁ is odd since 32 is a power of 2.

─────────────────────────────────
Lesson 13: Asymptotics of Binomial Coefficients
─────────────────────────────────

📌 Key idea of this section:

        C(2n, n) = (4ⁿ/√(πn)) (1 − 1/(8n) + O(n⁻²))
        4ⁿ/(2√n) ≤ C(2n, n) ≤ 4ⁿ/√(3n + 1)       (n ≥ 1)
        C(n, αn) = 2^{nH(α)} / √(2πnα(1 − α)) · (1 + o(1)),   H(α) = −α log₂ α − (1 − α) log₂(1 − α)

Stirling's formula

Stirling's formula n! = √(2πn)(n/e)ⁿ(1 + 1/(12n) + O(n⁻²)) is the basic tool; Robbins (1955) gave the explicit bounds √(2πn)(n/e)ⁿ e^{1/(12n+1)} < n! < √(2πn)(n/e)ⁿ e^{1/(12n)} for n ≥ 1. Applied to C(2n, n) = (2n)!/(n!)², the main terms give 4ⁿ/√(πn), and the correction factors combine to e^{1/(24n) − 2/(12n) + O(n⁻²)} = 1 − 1/(8n) + O(n⁻²).

        C(100, 50) = 100891344545564193334812497256 ≈ 1.008913 × 10²⁹
        4⁵⁰/√(50π) ≈ 1.011439 × 10²⁹;   with the factor (1 − 1/400):  ≈ 1.008910 × 10²⁹

Elementary bounds

Proposition 13.1. For n ≥ 1, 4ⁿ/(2√n) ≤ C(2n, n) ≤ 4ⁿ/√(3n + 1), with equality in both at n = 1.

Proof. Let aₙ = C(2n, n)/4ⁿ, so a₁ = 1/2 and aₙ₊₁ = aₙ (2n + 1)/(2n + 2). For the upper bound we show aₙ²(3n + 1) ≤ 1 by induction. It holds with equality for n = 1, and the inductive step requires (2n + 1)²(3n + 4) ≤ (3n + 1)(2n + 2)². Expanding, the left side is 12n³ + 28n² + 19n + 4 and the right side is 12n³ + 28n² + 20n + 4, so the inequality holds. For the lower bound we show 4n aₙ² ≥ 1; equality holds at n = 1, and the step requires (2n + 1)²(n + 1) ≥ 4n(n + 1)², i.e. (2n + 1)² ≥ 4n(n + 1), i.e. 1 ≥ 0. ∎

Both bounds are of the correct order 4ⁿ/√n, and they pin the constant: 1/2 ≤ aₙ√n ≤ 1/√3. The true limit 1/√π ≈ 0.5642 lies between 0.5 and 0.5774; the statement lim aₙ√(πn) = 1 is equivalent to Wallis's product π/2 = ∏ (2k)²/((2k − 1)(2k + 1)).

Entropy and the binomial distribution

Proposition 13.2. Let 0 < α < 1 with αn an integer. Then 2^{nH(α)}/(n + 1) ≤ C(n, αn) ≤ 2^{nH(α)}. Proof. With k = αn, αᵏ(1 − α)ⁿ⁻ᵏ = 2^{−nH(α)}. The upper bound follows from 1 = (α + (1 − α))ⁿ ≥ C(n, k) αᵏ(1 − α)ⁿ⁻ᵏ. For the lower bound, the term with j = k is the largest of the n + 1 terms C(n, j) αʲ(1 − α)ⁿ⁻ʲ (the ratio of consecutive terms crosses 1 at j = k), and they sum to 1. ∎

The sharp form C(n, αn) ~ 2^{nH(α)}/√(2πnα(1 − α)) follows from Stirling. A related estimate bounds the volume of a Hamming ball: for 0 < α ≤ 1/2, ∑_{k≤αn} C(n, k) ≤ 2^{nH(α)}, since for k ≤ αn we have αᵏ(1 − α)ⁿ⁻ᵏ = (1 − α)ⁿ(α/(1 − α))ᵏ ≥ (1 − α)ⁿ(α/(1 − α))^{αn} = 2^{−nH(α)}, and the sum of C(n, k)αᵏ(1 − α)ⁿ⁻ᵏ is at most 1. This inequality underlies the Gilbert–Varshamov and Hamming bounds in coding theory.

        ∑_{k≤10} C(100, k) ≈ 1.94 × 10¹³   ≤   2^{100 H(0.1)} = 2^{46.90} ≈ 1.31 × 10¹⁴

The local limit theorem

The de Moivre–Laplace theorem in local form states that for even n,

        C(n, n/2 + x) = 2ⁿ √(2/(πn)) e^{−2x²/n} (1 + o(1))

uniformly for integers x with |x| = o(n^{2/3}). Proof sketch: log(C(n, n/2 + x)/C(n, n/2)) = ∑_{j=1}^{x} log((n/2 − j + 1)/(n/2 + j)) = −2x²/n + O(|x|³/n² + |x|/n), using log((1 − u)/(1 + u)) = −2u + O(u³). Combined with the central asymptotics this gives the Gaussian profile: the rows of Pascal's triangle, normalized, converge to the normal density, which is the central limit theorem for fair coin tossing. The binomial coefficients are also strictly log-concave in k, C(n, k)² > C(n, k − 1)C(n, k + 1) for 0 < k < n, because the ratio C(n, k + 1)/C(n, k) = (n − k)/(k + 1) is strictly decreasing; log-concavity implies unimodality, with mode(s) ⌊n/2⌋ and ⌈n/2⌉.

Random walk interpretation. C(2n, n)/4ⁿ is the probability that a simple random walk is at the origin at time 2n. Since it is ~ 1/√(πn), the expected number of returns ∑ C(2n, n)/4ⁿ diverges, so the one-dimensional walk is recurrent (Pólya, 1921). For n = 50 the exact probability is 0.079589 and 1/√(50π) = 0.079788.

✏️ Your Turn

(a) Estimate C(40, 20) by 4ⁿ/√(πn) and by the corrected formula, and compare with the exact value 137846528820.
(b) Check the Hamming bound for n = 40 and α = 1/4.
(c) Show that C(2n, n) ≥ 4ⁿ/(2n + 1) and compare it with Proposition 13.1.

Answers: (a) 4²⁰/√(20π) ≈ 1.38711 × 10¹¹ (relative error about 0.63%); multiplying by 1 − 1/160 gives ≈ 1.37844 × 10¹¹, relative error about 0.002%. (b) ∑_{k≤10} C(40, k) = 1221246132 ≈ 1.22 × 10⁹, while 2^{40 H(1/4)} = 2^{32.45} ≈ 5.87 × 10⁹. (c) C(2n, n) is the largest of the 2n + 1 terms of (1 + 1)^{2n} = 4ⁿ. This bound is weaker than 4ⁿ/(2√n) for n ≥ 1, since 2√n ≤ 2n + 1.

─────────────────────────────────
Lesson 14: Multiplicities and Singmaster's Conjecture
─────────────────────────────────

📌 Key idea of this section:

        N(a) = #{(n, k) : C(n, k) = a}  (a ≥ 2);   N(a) ≤ 2 log₂ a,   conjecturally N(a) = O(1)
        N(3003) = 8:  C(3003, 1) = C(78, 2) = C(15, 5) = C(14, 6) = 3003, with their mirror images

The multiplicity function

For an integer a ≥ 2 let N(a) be the number of pairs (n, k) with 0 ≤ k ≤ n and C(n, k) = a. Always N(a) ≥ 2, because of C(a, 1) = C(a, a − 1), and N(a) is finite, because C(n, k) ≥ n for 1 ≤ k ≤ n − 1 forces n ≤ a.

Proposition 14.1 (Singmaster, 1971). N(a) ≤ 2 log₂ a for a ≥ 2. Proof. By symmetry it suffices to count solutions with 1 ≤ k ≤ n/2, each giving at most two solutions (n, k), (n, n − k). For fixed k ≥ 1, C(n, k) is strictly increasing in n ≥ k, so each k contributes at most one n. If k ≤ n/2 then a = C(n, k) ≥ C(2k, k) = ∏_{i=1}^{k} (k + i)/i ≥ 2ᵏ, so k ≤ log₂ a. Hence there are at most log₂ a admissible values of k, and N(a) ≤ 2 log₂ a. ∎

        a = 3003:   bound 2 log₂ 3003 ≈ 23.1;   actual N(3003) = 8

Singmaster conjectured in 1971 that N(a) is bounded, and suggested that the bound might be as small as 10 or 12. The best unconditional bounds are only slightly better than logarithmic: Abbott, Erdős and Hanson (1974) proved N(a) = O(log a / log log a), and Kane (2007) proved N(a) = O(log a · log log log a / (log log a)³). In the interior of the triangle much more is known: Matomäki, Radziwiłł, Shao, Tao and Teräväinen (2022) proved that for fixed ε > 0 and a sufficiently large, the equation C(n, k) = a has at most four solutions in the region exp((log n)^{2/3+ε}) ≤ k ≤ n − exp((log n)^{2/3+ε}), at most two in each half.

Small multiplicities

The numbers below 10⁵ that occur exactly six times are 120, 210, 1540, 7140, 11628 and 24310:

        120 = C(120, 1) = C(16, 2) = C(10, 3)          210 = C(210, 1) = C(21, 2) = C(10, 4)
        1540 = C(1540, 1) = C(56, 2) = C(22, 3)        7140 = C(7140, 1) = C(120, 2) = C(36, 3)
        11628 = C(11628, 1) = C(153, 2) = C(19, 5)     24310 = C(24310, 1) = C(221, 2) = C(17, 8)

each together with its mirror image C(n, n − k). The equation C(n, 2) = C(m, 3) defines an elliptic curve, and its complete solution (Avanesov, 1966) shows that apart from 10 = C(5, 2) = C(5, 3), the only common values are 120, 1540 and 7140. The number 3003 is the only integer greater than 1 known to occur eight times, and no integer is known to occur more often.

An infinite family with six occurrences

Theorem 14.2 (Lind 1968; Singmaster 1975). Let F₀ = 0, F₁ = 1, … be the Fibonacci numbers and, for i ≥ 1, put n = F_{2i+2}F_{2i+3} − 1 and k = F_{2i}F_{2i+3} − 1. Then C(n + 1, k + 1) = C(n, k + 2). Consequently infinitely many integers occur at least six times in Pascal's triangle.

Proof sketch. Dividing, C(n + 1, k + 1)/C(n, k + 2) = (n + 1)(k + 2)/((n − k)(n − k − 1)), so the equation is equivalent to the quadratic Diophantine equation (n + 1)(k + 2) = (n − k)(n − k − 1). Substituting the Fibonacci expressions reduces it to standard Fibonacci identities of Cassini type; we verify the first two cases numerically. For i = 1: n = 3 · 5 − 1 = 14, k = 1 · 5 − 1 = 4, and 15 · 6 = 90 = 10 · 9, giving C(15, 5) = C(14, 6) = 3003. For i = 2: n = 8 · 13 − 1 = 103, k = 3 · 13 − 1 = 38, and 104 · 40 = 4160 = 65 · 64, giving C(104, 39) = C(103, 40) ≈ 6.12 × 10²⁸. The value a = C(n + 1, k + 1) then occurs at (n + 1, k + 1), (n + 1, n − k), (n, k + 2), (n, n − k − 2), (a, 1) and (a, a − 1), six distinct positions since 2 ≤ k + 1 < (n + 1)/2. ∎

Related arithmetic results

Two classical theorems illustrate how rigid the arithmetic of the triangle is. Sylvester (1892; the result was rediscovered by Schur in 1929) proved that for n ≥ 2k ≥ 2 the coefficient C(n, k) has a prime factor greater than k; for n = 2k this is Bertrand's postulate. Erdős (1951) proved that C(n, k) is never a perfect ℓth power (ℓ ≥ 2) when 4 ≤ k ≤ n − 4; for k = 2 and k = 3 there are squares, such as C(50, 3) = 19600 = 140² and C(9, 2) = 36 = 6². Both proofs combine the size estimates of Lesson 13 with the p-adic information of Lesson 8, which is also the strategy behind every known bound on N(a): a binomial coefficient is determined to a large extent by its prime factorization, and Kummer's theorem constrains that factorization severely.

✏️ Your Turn

(a) Find all occurrences of 120 in Pascal's triangle.
(b) Using Proposition 14.1, give an upper bound for N(10⁶).
(c) Verify that n = 103, k = 38 satisfies (n + 1)(k + 2) = (n − k)(n − k − 1).

Answers: (a) C(120, 1), C(120, 119), C(16, 2), C(16, 14), C(10, 3), C(10, 7): six occurrences. (b) The proof forces k ≤ log₂ 10⁶ ≈ 19.93, so k ≤ 19 and N(10⁶) ≤ 2 · 19 = 38. (c) 104 · 40 = 4160 and 65 · 64 = 4160.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped by difficulty. Core problems test the definitions and the main formulas of each lesson; Advanced problems require combining two or more results or writing a short proof; Challenge problems are of the kind found in graduate qualifying examinations and research-level texts. Unless stated otherwise, n and k denote nonnegative integers, p denotes a prime, and C(α, k) is defined as in Lesson 1.

Core (Problems 1–20)

  1. Compute C(−4, 3) and C(3/2, 3).
  2. Evaluate ∑ₖ k C(12, k).
  3. Evaluate ∑_{k=0}^{6} (−1)ᵏ C(15, k) in closed form.
  4. Evaluate ∑_{m=5}^{20} C(m, 5).
  5. Evaluate ∑_{j=0}^{7} C(j + 3, j) by parallel summation.
  6. Evaluate ∑ₖ C(8, k) C(5, 6 − k).
  7. Find the coefficient of x⁵ in (1 − 2x)⁻³.
  8. Find the coefficient of x⁴ in √(1 + x).
  9. Evaluate ∑ₖ C(12 − k, k).
  10. Write x³ in the basis C(x, k) and use it to evaluate ∑_{j=0}^{9} j³.
  11. Compute C(1000, 300) mod 7 by Lucas' theorem.
  12. How many odd entries does row 1000 of Pascal's triangle contain?
  13. Compute v₂(100!) and v₃(100!) in two ways.
  14. Compute v₂ C(200, 100) and v₃ C(200, 100).
  15. Find the coefficient of x²y²z² in (x + y + z)⁶.
  16. Find the coefficient of x²yz³ in (3x + y − 2z)⁶.
  17. Expand the Gaussian coefficient [4 2] as a polynomial in q, and evaluate it at q = 2 and at q = −1.
  18. Compute C₈ and state what it counts for convex polygons.
  19. In an election A receives 9 votes and B receives 5. Find the probability that A is strictly ahead throughout a random count.
  20. Estimate C(50, 25) using 4ⁿ/√(πn) with and without the correction factor 1 − 1/(8n), and compare with the exact value 126410606437752.

Advanced (Problems 21–45)

  21. Prove that (1 − x)⁻ᵐ = ∑ₖ C(m + k − 1, k) xᵏ as formal power series, and find the coefficient of x⁷ in (1 − x)⁻⁴.
  22. Prove ∑ₖ C(n, k) C(k, m) = C(n, m) 2ⁿ⁻ᵐ and evaluate it for n = 10, m = 3.
  23. Prove ∑ₖ (−1)ᵏ C(n, k) C(k, m) = (−1)ᵐ if n = m and 0 otherwise. Evaluate the sum for n = 7, m = 3.
  24. Prove ∑_{k=0}^{n} C(2k, k) C(2n − 2k, n − k) = 4ⁿ and verify it for n = 4.
  25. Evaluate ∑_{k=0}^{n} C(n, k)/(k + 1) in closed form, and compute it for n = 9.
  26. Compute the number of derangements D₆ by binomial inversion.
  27. Compute the determinant of the symmetric Pascal matrix with entries C(i + j, i), 0 ≤ i, j ≤ 3, without expanding it.
  28. Determine whether ∑ₖ C(−1/3, k) xᵏ converges at x = 1 and at x = −1, and give the sum when it converges.
  29. Approximate √1.2 by the first four terms of the binomial series and bound the error.
  30. Find the coefficients of x⁶ in (1 − 4x)^{−1/2} and in (1 − 4x)^{1/2}.
  31. Show that (x³ − x)/6 is integer-valued by writing it in the binomial basis, and identify it as a single binomial coefficient.
  32. Find the polynomial f of degree at most 3 with f(0) = 2, f(1) = 5, f(2) = 14, f(3) = 35, in the binomial basis and in the monomial basis, and compute f(4).
  33. Evaluate ∑_{k=0}^{5} (−1)ᵏ C(5, k) k⁵.
  34. Show that no entry of row 242 is divisible by 3.
  35. Determine all n ≥ 2 such that C(n, k) is divisible by 6 for every 0 < k < n.
  36. How many entries of row 2026 are divisible by 5?
  37. Find the smallest n such that 2⁵ divides C(2n, n).
  38. Verify Babbage's congruence for p = 5, and show that in this case even the congruence modulo 5³ holds.
  39. Verify Wolstenholme's congruence C(2p, p) ≡ 2 (mod p³) for p = 11.
  40. Using Corollary 8.3, explain why C(10, 4) divides lcm(1, …, 10), and compute the quotient.
  41. Compute the number of odd entries in rows 0 through 99 of Pascal's triangle.
  42. Compute the Hausdorff dimension of the limiting fractal of Pascal's triangle modulo 3.
  43. Find the largest coefficient of (x + y + z + w)⁹.
  44. How many 2-dimensional subspaces does F₅⁴ have?
  45. Count the lattice paths from (0, 0) to (9, 4) with unit steps east and north that never go above the line y = x.

Challenge (Problems 46–60)

  46. Use Chu–Vandermonde with α = 1/2 and β = −1/2 to prove ∑_{k=0}^{n} C(2k, k) C(2n − 2k, n − k)/(2k − 1) = 0 for n ≥ 1. Verify it for n = 2.
  47. Verify Dixon's identity ∑ₖ (−1)ᵏ C(2n, k)³ = (−1)ⁿ (3n)!/(n!)³ for n = 2.
  48. Compute v₂(C₁₀₀), where C₁₀₀ is the 100th Catalan number.
  49. Show without computing C(20, 10) that 7 does not divide it, then confirm with the factorization of C(20, 10).
  50. Prove that ∏_{p≤m} p < 4ᵐ for all m ≥ 1, and check it for m = 30.
  51. Verify that the Fibonacci family of Theorem 14.2 with i = 2 satisfies the Diophantine condition, and list the six positions of the value a = C(104, 39).
  52. List all occurrences of 3003 in Pascal's triangle and compare with the bound of Proposition 14.1.
  53. Find the coefficient of x² in ∏_{i=0}^{3} (1 + qⁱx), both directly and by the q-binomial theorem.
  54. Verify Gauss's evaluation ∑ₖ (−1)ᵏ [6 k] = (1 − q)(1 − q³)(1 − q⁵) at q = 2 by computing all seven Gaussian coefficients [6 k]₂.
  55. Compare ∑_{k≤25} C(100, k) with the Hamming-ball bound 2^{100 H(1/4)}.
  56. Compute the probability that a simple random walk is at 0 at time 200, and compare with 1/√(100π) and its corrected version.
  57. Compute v₂ of the multinomial coefficient C(15; 5, 5, 5) by Theorem 10.2 and confirm it from the value of the coefficient.
  58. Check the bounds of Proposition 13.1 for n = 10.
  59. Find the smallest n such that row n contains exactly 12 entries not divisible by 3.
  60. Prove ∑_{k=0}^{n} (−1)ᵏ C(n, k)/(x + k) = n!/(x(x + 1)⋯(x + n)) and evaluate the left side for n = 4, x = 1.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. C(−4, 3) = (−4)(−5)(−6)/6 = −20, equivalently (−1)³ C(6, 3) = −20. C(3/2, 3) = (3/2)(1/2)(−1/2)/6 = (−3/8)/6 = −1/16.
  2. By Proposition 2.1, ∑ k C(n, k) = n 2ⁿ⁻¹ = 12 · 2¹¹ = 24576.
  3. By Proposition 2.3, ∑_{k=0}^{m} (−1)ᵏ C(n, k) = (−1)ᵐ C(n − 1, m), so the sum is C(14, 6) = 3003.
  4. By the hockey stick (Proposition 2.2), ∑_{m=5}^{20} C(m, 5) = C(21, 6) = 54264.
  5. Parallel summation with α = 3, m = 7 gives C(3 + 7 + 1, 7) = C(11, 7) = 330.
  6. By Vandermonde, C(8 + 5, 6) = C(13, 6) = 1716.
  7. (1 − y)⁻³ = ∑ C(m + 2, 2) yᵐ, so with y = 2x the coefficient is C(7, 2) · 2⁵ = 21 · 32 = 672.
  8. C(1/2, 4) = (1/2)(−1/2)(−3/2)(−5/2)/24 = −5/128.
  9. The shallow diagonal sum equals F₁₃ = 233 (terms 1 + 11 + 45 + 84 + 70 + 21 + 1 = 233).
  10. The difference table of 0, 1, 8, 27 at 0 is 0, 1, 6, 6, so x³ = C(x, 1) + 6C(x, 2) + 6C(x, 3). Summing with the hockey stick, ∑_{j=0}^{9} j³ = C(10, 2) + 6C(10, 3) + 6C(10, 4) = 45 + 720 + 1260 = 2025 = 45².
  11. 1000 = 2626₇ and 300 = 0606₇, so C(1000, 300) ≡ C(2, 0)C(6, 6)C(2, 0)C(6, 6) = 1 (mod 7).
  12. 1000 = 1111101000₂ has six 1s, so there are 2⁶ = 64 odd entries.
  13. v₂(100!) = 50 + 25 + 12 + 6 + 3 + 1 = 97 = 100 − s₂(100) = 100 − 3. v₃(100!) = 33 + 11 + 3 + 1 = 48 = (100 − s₃(100))/2 = (100 − 4)/2, since 100 = 10201₃.
  14. v₂ C(200, 100) = s₂(100) = 3 (100 = 1100100₂). For p = 3, add 10201₃ + 10201₃: the digit sums from the right are 2, 0, 4, 0 + 1, 2, so exactly one carry occurs and v₃ C(200, 100) = 1.
  15. C(6; 2, 2, 2) = 720/8 = 90.
  16. C(6; 2, 1, 3) · 3² · 1 · (−2)³ = 60 · 9 · (−8) = −4320.
  17. [4 2] = 1 + q + 2q² + q³ + q⁴. At q = 2: 1 + 2 + 8 + 8 + 16 = 35 (the number of planes in F₂⁴). At q = −1: 1 − 1 + 2 − 1 + 1 = 2, which agrees with the q-Lucas theorem: C(2, 1) · [0 0] = 2.
  18. C₈ = C(16, 8)/9 = 12870/9 = 1430; it counts the triangulations of a convex decagon by non-crossing diagonals.
  19. (9 − 5)/(9 + 5) = 4/14 = 2/7.
  20. With n = 25: 4²⁵/√(25π) ≈ 1.27044 × 10¹⁴ (about 0.50% too large); multiplying by 1 − 1/200 gives ≈ 1.26409 × 10¹⁴, while the exact value is ≈ 1.26411 × 10¹⁴ (relative error about 0.001%).

Advanced

  21. By Lesson 3, B_α(−x) = (1 − x)^α formally, so (1 − x)⁻ᵐ = ∑ C(−m, k)(−x)ᵏ, and upper negation gives C(−m, k)(−1)ᵏ = C(m + k − 1, k). For m = 4, k = 7: C(10, 7) = C(10, 3) = 120.
  22. Count pairs M ⊆ K ⊆ [n] with |M| = m: choosing K first gives the left side; choosing M first and then any subset of the other n − m elements gives C(n, m) 2ⁿ⁻ᵐ. For n = 10, m = 3: 120 · 128 = 15360.
  23. By trinomial revision, C(n, k)C(k, m) = C(n, m)C(n − m, k − m), so the sum is C(n, m) ∑ₖ (−1)ᵏ C(n − m, k − m) = (−1)ᵐ C(n, m) ∑ⱼ (−1)ʲ C(n − m, j), which is (−1)ᵐ if n = m and 0 if n > m. For n = 7, m = 3 the sum is 0.
  24. Since ∑ C(2n, n)xⁿ = (1 − 4x)^{−1/2}, the square of this series is (1 − 4x)⁻¹ = ∑ 4ⁿxⁿ; comparing coefficients gives the identity. For n = 4: 70 + 2 · 20 + 6 · 6 + 20 · 2 + 70 = 256 = 4⁴.
  25. By absorption, C(n, k)/(k + 1) = C(n + 1, k + 1)/(n + 1), so the sum is (2ⁿ⁺¹ − 1)/(n + 1). For n = 9 this is 1023/10. (Alternatively, integrate (1 + x)ⁿ from 0 to 1.)
  26. D₆ = ∑ₖ (−1)⁶⁻ᵏ C(6, k) k! = 1 − 6 + 30 − 120 + 360 − 720 + 720 = 265.
  27. The matrix has rows (1, 1, 1, 1), (1, 2, 3, 4), (1, 3, 6, 10), (1, 4, 10, 20). By Corollary 3.2(ii) it equals L Lᵀ with L the unitriangular matrix (C(i, j)), so its determinant is det(L)² = 1.
  28. Here α = −1/3. At x = 1 the series converges because α > −1 (Proposition 5.2(ii)), with sum 2^{−1/3} ≈ 0.7937. At x = −1 it diverges because α < 0: the terms C(−1/3, k)(−1)ᵏ = C(k − 2/3, k) are positive and comparable to k^{−2/3}.
  29. √(1 + x) ≈ 1 + x/2 − x²/8 + x³/16 with x = 0.2 gives 1 + 0.1 − 0.005 + 0.0005 = 1.0955. The terms alternate and decrease in modulus, so the error is less than the next term |C(1/2, 4)| x⁴ = (5/128)(0.0016) = 0.0000625. Indeed √1.2 = 1.095445…, an error of about 0.000055.
  30. [x⁶](1 − 4x)^{−1/2} = C(12, 6) = 924. For the square root, C(1/2, 6)(−4)⁶ = −C(12, 6)/(2 · 6 − 1) = −924/11 = −84, which equals −2C₅, consistent with √(1 − 4x) = 1 − 2xC(x).
  31. x³ − x = (C(x, 1) + 6C(x, 2) + 6C(x, 3)) − C(x, 1) = 6C(x, 2) + 6C(x, 3), so (x³ − x)/6 = C(x, 2) + C(x, 3) = C(x + 1, 3) by Pascal's rule. It is integer-valued by Theorem 6.2; it is the product (x − 1)x(x + 1)/6 of three consecutive integers divided by 3!.
  32. The difference table of 2, 5, 14, 35 has first entries 2, 3, 6, 6, so f = 2 + 3C(x, 1) + 6C(x, 2) + 6C(x, 3). Expanding, 6C(x, 3) = x³ − 3x² + 2x and 6C(x, 2) = 3x² − 3x, so f = x³ + 2x + 2. Then f(4) = 64 + 8 + 2 = 74 (also 2 + 12 + 36 + 24 = 74).
  33. ∑ₖ (−1)ⁿ⁻ᵏ C(n, k) kⁿ = n! S(n, n) = n!, so ∑ₖ (−1)ᵏ C(n, k) kⁿ = (−1)ⁿ n!. For n = 5 the sum is −120.
  34. 242 = 3⁵ − 1 = 22222₃. Every k ≤ 242 has five base-3 digits each at most 2, so no digit of k exceeds the corresponding digit of 242, and by Corollary 7.3(i) none of the 243 entries is divisible by 3.
  35. By Corollary 7.3(v), all inner entries are even only if n is a power of 2, and all are divisible by 3 only if n is a power of 3. No n ≥ 2 is both, so there is no such n.
  36. Row 2026 has 2027 entries, of which 32 are not divisible by 5 (Lesson 7, exercise), so 2027 − 32 = 1995 are divisible by 5.
  37. v₂ C(2n, n) = s₂(n) ≥ 5 requires at least five binary 1s; the smallest such n is 11111₂ = 31.
  38. C(9, 4) = 126 and 126 − 1 = 125 = 5³. So C(2p − 1, p − 1) ≡ 1 (mod 25), as Babbage asserts, and in fact ≡ 1 (mod 125), as Wolstenholme's theorem predicts for p ≥ 5.
  39. C(22, 11) = 705432 and 705432 − 2 = 705430 = 1331 · 530, so C(22, 11) ≡ 2 (mod 11³).
  40. Every prime power exactly dividing C(n, k) is at most n, hence divides lcm(1, …, n). Here C(10, 4) = 210 = 2 · 3 · 5 · 7 and lcm(1, …, 10) = 2520 = 2³ · 3² · 5 · 7; the quotient is 12.
  41. The count is ∑_{n=0}^{99} 2^{s₂(n)}. Rows 0–63 contribute 3⁶ = 729. Rows 64–95 are 64 + n′ with n′ < 32, contributing 2 · 3⁵ = 486. Rows 96–99 are 96 + n′ with n′ < 4 and s₂(96) = 2, contributing 4 · (1 + 2 + 2 + 4) = 36. Total 729 + 486 + 36 = 1251.
  42. There are 3 · 4/2 = 6 maps of ratio 1/3, so the dimension is log 6/log 3 ≈ 1.6309.
  43. By Proposition 10.1 the maximum is at (3, 2, 2, 2) and its permutations: 9!/(3! 2! 2! 2!) = 362880/48 = 7560.
  44. [4 2]₅ = (5⁴ − 1)(5⁴ − 5)/((5² − 1)(5² − 5)) = 624 · 620/(24 · 20) = 806, also 1 + 5 + 2 · 25 + 125 + 625 = 806.
  45. The ballot number ((a − b + 1)/(a + 1)) C(a + b, b) with a = 9, b = 4 is (6/10) · 715 = 429.

Challenge

  46. Chu–Vandermonde gives ∑ₖ C(1/2, k) C(−1/2, n − k) = C(0, n) = 0 for n ≥ 1. Using C(1/2, k) = (−1)ᵏ⁻¹ C(2k, k)/(4ᵏ(2k − 1)), valid for all k ≥ 0 (for k = 0 it gives 1), and C(−1/2, n − k) = (−1)ⁿ⁻ᵏ C(2n − 2k, n − k)/4ⁿ⁻ᵏ, each product equals (−1)ⁿ⁻¹ C(2k, k)C(2n − 2k, n − k)/(4ⁿ(2k − 1)). Multiplying by (−1)ⁿ⁻¹4ⁿ gives the identity. For n = 2 the terms are 6/(−1) + 2 · 2/1 + 6/3 = −6 + 4 + 2 = 0.
  47. Row 4 is 1, 4, 6, 4, 1, so the sum is 1 − 64 + 216 − 64 + 1 = 90, and (−1)² · 6!/(2!)³ = 720/8 = 90.
  48. By Proposition 12.4, v₂(C₁₀₀) = s₂(101) − 1; since 101 = 1100101₂ has four 1s, v₂(C₁₀₀) = 3.
  49. With n = 10 we have 2n/3 ≈ 6.67 < 7 ≤ 10, so ⌊20/7⌋ − 2⌊10/7⌋ = 2 − 2 = 0, and 7² = 49 > 20 contributes nothing; hence 7 ∤ C(20, 10). Indeed C(20, 10) = 184756 = 2² · 11 · 13 · 17 · 19.
  50. Induction on m. For m ≤ 2 it is clear, and for even m > 2 the product equals that for m − 1. For m = 2s + 1, every prime in (s + 1, 2s + 1] divides C(2s + 1, s) = (2s + 1)!/(s!(s + 1)!), because it divides the numerator and not the denominator, and C(2s + 1, s) ≤ 4ˢ since it and C(2s + 1, s + 1) are two equal terms of a sum equal to 2^{2s+1}. Hence ∏_{p≤2s+1} p ≤ 4ˢ · ∏_{p≤s+1} p < 4ˢ · 4^{s+1} = 4^{2s+1}. For m = 30 the product of the primes up to 29 is 6469693230 ≈ 6.5 × 10⁹, far below 4³⁰ ≈ 1.15 × 10¹⁸.
  51. For i = 2: F₄ = 3, F₆ = 8, F₇ = 13, so n = 103 and k = 38, and (n + 1)(k + 2) = 104 · 40 = 4160 = 65 · 64 = (n − k)(n − k − 1). The value a = C(104, 39) = C(103, 40) ≈ 6.12 × 10²⁸ occurs at (104, 39), (104, 65), (103, 40), (103, 63), (a, 1) and (a, a − 1).
  52. 3003 = C(3003, 1) = C(3003, 3002) = C(78, 2) = C(78, 76) = C(15, 5) = C(15, 10) = C(14, 6) = C(14, 8): eight occurrences, compared with the bound 2 log₂ 3003 ≈ 23.1.
  53. Directly, the coefficient of x² is ∑_{0 ≤ i < j ≤ 3} q^{i+j}, and the exponents i + j are 1, 2, 3, 3, 4, 5, so it is q + q² + 2q³ + q⁴ + q⁵. By the q-binomial theorem it is q^{2·1/2}[4 2] = q(1 + q + 2q² + q³ + q⁴), the same polynomial.
  54. [6 k]₂ for k = 0, …, 6 equals 1, 63, 651, 1395, 651, 63, 1 (for instance [6 2]₂ = 63 · 62/(3 · 2) = 651 and [6 3]₂ = 63 · 62 · 60/(7 · 6 · 4) = 1395). The alternating sum is 1 − 63 + 651 − 1395 + 651 − 63 + 1 = −217, and (1 − 2)(1 − 8)(1 − 32) = (−1)(−7)(−31) = −217.
  55. H(1/4) = 2 − (3/4) log₂ 3 ≈ 0.81128, so 2^{100 H(1/4)} = 2^{81.13} ≈ 2.64 × 10²⁴, while ∑_{k≤25} C(100, k) ≈ 3.57 × 10²³: the bound holds and is off by a factor of about 7.4, which is consistent with the polynomial-factor loss in Proposition 13.2.
  56. The probability is C(200, 100)/4¹⁰⁰ ≈ 0.0563485. The leading approximation 1/√(100π) ≈ 0.0564190 is 0.13% too large; with the factor 1 − 1/800 it becomes ≈ 0.0563484, accurate to a few parts in a million.
  57. s₂(5) = 2 and s₂(15) = 4, so v₂ = (3 · 2 − 4)/1 = 2. Indeed C(15; 5, 5, 5) = 15!/(5!)³ = 756756 = 4 · 189189, with 189189 odd.
  58. C(20, 10) = 184756, 4¹⁰/(2√10) ≈ 165794 and 4¹⁰/√31 ≈ 188330, so 165794 ≤ 184756 ≤ 188330.
  59. By Fine's theorem the count is ∏(nᵢ + 1) over the base-3 digits of n, with each factor in {1, 2, 3}. Since 12 = 3 · 2 · 2 is the only such factorization, n has exactly one digit 2, two digits 1 and all other digits 0. The smallest such number places the largest digit lowest: n = 112₃ = 9 + 3 + 2 = 14. Check: row 14 has (1 + 1)(1 + 1)(2 + 1) = 12 entries not divisible by 3.
  60. Partial fractions: n!/(x(x + 1)⋯(x + n)) = ∑ₖ Aₖ/(x + k) with Aₖ obtained by multiplying by (x + k) and setting x = −k: Aₖ = n!/∏_{j≠k} (j − k) = n!/((−1)ᵏ k! (n − k)!) = (−1)ᵏ C(n, k). For n = 4, x = 1: 1 − 4/2 + 6/3 − 4/4 + 1/5 = 1/5, and 4!/(1 · 2 · 3 · 4 · 5) = 24/120 = 1/5.
