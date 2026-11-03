Fractions — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

        Frac(D) = (D × (D ∖ {0})) / ~ ,    (a, b) ~ (c, d)  ⟺  ad = bc

        x ∈ ℚ   ⟺   the decimal expansion of x is eventually periodic

        √2 = [1; 2, 2, 2, …],    3² − 2·2² = 1

The elementary theory of fractions is a set of rules for manipulating symbols a/b. The advanced theory asks what those symbols are, why the rules are forced upon us, and what the rational numbers reveal about the real numbers that surround them. The three lines above summarise the arc of this course. The first is the formal construction that turns any integral domain into a field, exactly as the integers are turned into the rationals. The second is a characterisation of ℚ inside ℝ by the behaviour of digit expansions, and the third is a glimpse of the theory of continued fractions, in which the arithmetic of a single irrational number such as √2 controls the integer solutions of the Diophantine equation x² − 2y² = 1.

The course assumes familiarity with the arithmetic of fractions, with proofs by induction and contradiction, with the basic vocabulary of rings and fields, and with elementary congruences. Everything else is developed from first principles. The style is that of a graduate text: definitions are stated precisely, theorems are proved in full unless explicitly labelled as a sketch, and historical and research context is given where it illuminates the mathematics.

The course falls into four parts. Lessons 1 to 3 are algebraic: the field of fractions, the ordered field ℚ, and the multiplicative arithmetic of ℚ through p-adic valuations. Lessons 4 to 6 study the rationals geometrically and combinatorially: positional expansions, Farey sequences and Ford circles. Lessons 7 to 9 belong to Diophantine approximation: continued fractions, Pell's equation, irrationality proofs and the approximation theorems of Dirichlet, Liouville and Roth. Lessons 10 to 12 return to algebra and number theory: partial fractions in a polynomial ring, Egyptian fractions and the open problems they generate, and finally the p-adic absolute values, which show that ℚ can be completed in infinitely many inequivalent ways.

In this course, you will:

  1. Construct the field of fractions of an integral domain and prove its universal property
  2. Characterise ℚ as the prime field of characteristic zero and as an Archimedean ordered field
  3. Use p-adic valuations to analyse reduced forms, rational roots and harmonic numbers
  4. Prove that the rationals are exactly the eventually periodic expansions and compute period lengths via multiplicative orders
  5. Develop Farey sequences, mediants, the Stern–Brocot tree and Ford circles
  6. Master continued fractions: convergents, best approximation, Lagrange's theorem and Pell's equation
  7. Prove the irrationality of √2, e and π, and the approximation theorems of Dirichlet and Liouville
  8. Prove existence and uniqueness of partial fraction decompositions over any field
  9. Study Egyptian fractions, the greedy algorithm and the Erdős–Straus conjecture
  10. Meet p-adic absolute values, the product formula and Ostrowski's theorem
  11. Work 60 problems ranging from routine computation to research-flavoured proofs

How to use this course: the lessons are cumulative, and each opens with a key statement that the lesson then proves. The exercises inside the lessons are short checks of understanding; the problem set at the end is where the real work happens. Notation: for a prime p, v_p denotes the p-adic valuation; ⌊x⌋ and ⌈x⌉ are the floor and ceiling; gcd and lcm are taken over the positive integers; φ is Euler's totient function; and ord_n(a) is the multiplicative order of a modulo n.

─────────────────────────────────
Lesson 1: The Field of Fractions of an Integral Domain
─────────────────────────────────

📌 Key idea of this section:

        Every integral domain D embeds in a field Frac(D), and every injective
        ring homomorphism from D to a field K extends uniquely to Frac(D) → K.

Why a construction is needed

Elementary arithmetic treats 2/4 and 1/2 as "the same fraction" without explaining what kind of object a fraction is. The cleanest answer is that a fraction is an equivalence class of ordered pairs. This is not pedantry: the same construction produces the field of rational functions K(x) from the polynomial ring K[x], the Gaussian rationals ℚ(i) from the Gaussian integers ℤ[i], and the field of formal Laurent series K((x)) from the ring of formal power series K[[x]]. Throughout, ring means commutative ring with identity 1 ≠ 0, and an integral domain is a ring D in which ab = 0 implies a = 0 or b = 0.

The construction

Let D be an integral domain and let S = D × (D ∖ {0}). Define a relation on S by

        (a, b) ~ (c, d)   ⟺   ad = bc.

Lemma 1.1. The relation ~ is an equivalence relation on S.

Proof. Reflexivity (ab = ba) and symmetry are immediate from commutativity. For transitivity, suppose (a, b) ~ (c, d) and (c, d) ~ (e, f), so that ad = bc and cf = de. Multiplying the first equation by f and the second by b gives adf = bcf = bde. Hence d(af − be) = 0. Since d ≠ 0 and D has no zero divisors, af = be, that is (a, b) ~ (e, f). ∎

The hypothesis that D is a domain was used exactly once, in the cancellation of d, and it cannot be dropped: in ℤ/6ℤ one has (2, 1) ~ (0, 3) and (0, 3) ~ (4, 1), because 2·3 = 0 = 1·0 and 0·1 = 0 = 3·4, but (2, 1) is not related to (4, 1) because 2·1 ≠ 1·4. We write a/b for the class of (a, b) and Frac(D) for the set of classes.

Define addition and multiplication by the familiar formulas:

        a/b + c/d = (ad + bc)/(bd),        (a/b)·(c/d) = (ac)/(bd).

The denominators are nonzero because D is a domain. The essential point is that these formulas do not depend on the chosen representatives. Suppose a/b = a′/b′, so ab′ = a′b. Then

        (ad + bc)·(b′d) = ab′d² + bb′cd = a′bd² + bb′cd = (a′d + b′c)·(bd),

so (ad + bc)/(bd) = (a′d + b′c)/(b′d); by symmetry the same holds when the second fraction is changed, and an analogous one-line computation, acb′d = a′cbd, handles multiplication.

Theorem 1.2. With these operations Frac(D) is a field, and the map ι: D → Frac(D), ι(a) = a/1, is an injective ring homomorphism.

Proof. The ring axioms reduce to the corresponding identities in D after clearing denominators; for example, associativity of addition follows because both bracketings of a/b + c/d + e/f equal (adf + bcf + bde)/(bdf). The zero is 0/1 and the identity 1/1. Note that a/b = 0/1 if and only if a = 0. If a/b ≠ 0 then a ≠ 0, so b/a is defined, and (a/b)(b/a) = ab/(ba) = 1/1. Hence every nonzero element is invertible. Finally ι is clearly additive and multiplicative, and a/1 = a′/1 forces a = a′. ∎

From now on we identify a with a/1, so that D ⊆ Frac(D) and a/b = a·b⁻¹ literally.

The universal property

Theorem 1.3 (Universal property). Let φ: D → K be an injective ring homomorphism into a field K. Then there is a unique ring homomorphism Φ: Frac(D) → K with Φ(a) = φ(a) for all a ∈ D, namely

        Φ(a/b) = φ(a)·φ(b)⁻¹.

Proof. Since φ is injective and b ≠ 0, φ(b) ≠ 0 is invertible in K. If a/b = a′/b′ then ab′ = a′b, so φ(a)φ(b′) = φ(a′)φ(b), and dividing by φ(b)φ(b′) shows that Φ is well defined. That Φ preserves sums and products is a direct verification: Φ(a/b + c/d) = φ(ad + bc)φ(bd)⁻¹ = φ(a)φ(b)⁻¹ + φ(c)φ(d)⁻¹. For uniqueness, if Ψ is any homomorphism extending φ, then Ψ(b)·Ψ(a/b) = Ψ(a), so Ψ(a/b) = φ(a)φ(b)⁻¹ = Φ(a/b). ∎

Corollary 1.4. Frac(D) is, up to a unique isomorphism fixing D, the smallest field containing D: if D ⊆ K for a field K, then the elements ab⁻¹ (a, b ∈ D, b ≠ 0) form a subfield of K isomorphic to Frac(D). Any two fields satisfying the universal property are isomorphic by a unique isomorphism compatible with the embeddings.

The usual argument from category theory applies: if F and F′ both satisfy the universal property, the induced maps F → F′ and F′ → F compose to homomorphisms extending the identity of D, which by uniqueness must be the identities.

Examples

The motivating example is Frac(ℤ) = ℚ, which we adopt as the definition of the rational numbers. For a field K, Frac(K[x]) = K(x) is the field of rational functions, whose elements are quotients P/Q of polynomials with Q ≠ 0. For the Gaussian integers, Frac(ℤ[i]) = ℚ(i), because

        (a + bi)/(c + di) = ((ac + bd) + (bc − ad)i)/(c² + d²),

so every quotient of Gaussian integers is a Gaussian rational, and conversely every (r + si)/n with r, s, n ∈ ℤ is a quotient of Gaussian integers. For a field K, the field of fractions of the power series ring K[[x]] is the field K((x)) of formal Laurent series ∑_{n ≥ −N} a_n xⁿ: every nonzero power series has the form x^m·u with u a unit of K[[x]], so dividing by it amounts to multiplying by x^(−m)·u⁻¹.

Localisation

The construction generalises. If R is any ring and S ⊆ R is multiplicatively closed (1 ∈ S, and s, t ∈ S implies st ∈ S), the localisation S⁻¹R consists of classes of pairs (r, s) ∈ R × S under the relation (r, s) ~ (r′, s′) if and only if u(rs′ − r′s) = 0 for some u ∈ S. The extra factor u repairs the transitivity argument of Lemma 1.1 in the presence of zero divisors. When R is a domain and S = R ∖ {0}, S⁻¹R = Frac(R). Two localisations of ℤ are fundamental in number theory: ℤ[1/n], obtained by inverting the powers of n, and the local ring ℤ₍ₚ₎ = {a/b ∈ ℚ : p ∤ b}, obtained by inverting every integer prime to p. The ring ℤ₍ₚ₎ has a unique maximal ideal pℤ₍ₚ₎, and its units are the a/b with p ∤ a and p ∤ b. In a ring with zero divisors localisation can kill elements: if 0 ∈ S then S⁻¹R = 0, and inverting 2 in ℤ/6ℤ sends 3 to zero, because 2·3 = 0.

✏️ Your Turn

(a) Let S = {1, 2, 4} ⊆ ℤ/6ℤ (a multiplicatively closed set, since 4·4 = 16 = 4 and 2·4 = 8 = 2). Identify the ring S⁻¹(ℤ/6ℤ).
(b) Write (3 + 2i)/(1 − i) in the form r + si with r, s ∈ ℚ.

Answers: (a) The natural map ℤ/6ℤ → S⁻¹(ℤ/6ℤ) sends 3 to 0, because 2·(3 − 0) = 0 with 2 ∈ S, and it makes 2 invertible; since 2 is already a unit in ℤ/3ℤ, the result is S⁻¹(ℤ/6ℤ) ≅ ℤ/3ℤ. (Equivalently, ℤ/6ℤ ≅ ℤ/2ℤ × ℤ/3ℤ and 2 corresponds to (0, 2), which kills the first factor.) (b) Multiply numerator and denominator by 1 + i: (3 + 2i)(1 + i)/2 = (3 + 3i + 2i − 2)/2 = (1 + 5i)/2, so r = 1/2 and s = 5/2.

─────────────────────────────────
Lesson 2: ℚ as an Ordered Field
─────────────────────────────────

📌 Key idea of this section:

        ℚ is the prime field of characteristic 0: it embeds uniquely in every field
        of characteristic 0, carries a unique ordering, and is dense but not complete.

The prime field

Every field K contains a smallest subfield, its prime field, namely the intersection of all subfields. The ring homomorphism ℤ → K, n ↦ n·1, has kernel a prime ideal of ℤ (because K has no zero divisors), so the kernel is either pℤ for a prime p or 0. In the first case K has characteristic p and its prime field is 𝔽_p. In the second case the map is injective, and by the universal property of Lesson 1 it extends uniquely to an embedding ℚ → K. Hence:

Theorem 2.1. Every field of characteristic zero contains a unique subfield isomorphic to ℚ, and the isomorphism is unique. In particular the only ring homomorphism ℚ → ℚ is the identity, so Aut(ℚ) is trivial.

The uniqueness clause is worth stating separately because it contrasts with ℂ, which has an enormous automorphism group, and with ℝ, whose automorphism group is also trivial but for a subtler reason (automorphisms of ℝ preserve squares, hence the order, hence are continuous).

The order on ℚ

Every element of ℚ can be written a/b with b > 0. Declare a/b > 0, for b > 0, if a > 0. This is well defined: if a/b = a′/b′ with b, b′ > 0 then ab′ = a′b, so a and a′ have the same sign. The positive cone P = {x : x > 0} satisfies the axioms of an ordering: P is closed under addition and multiplication, and for every x exactly one of x ∈ P, x = 0, −x ∈ P holds. Writing x < y for y − x ∈ P makes ℚ an ordered field, and the order is explicitly

        a/b < c/d   ⟺   ad < bc      (b, d > 0).

Proposition 2.2. The ordering of ℚ is the only ordering making ℚ an ordered field.

Proof. In any ordered field 1 = 1² > 0, so every positive integer n = 1 + ⋯ + 1 is positive, and for b > 0 the element 1/b is positive because b·(1/b) = 1 > 0. Hence every a/b with a, b > 0 must lie in the positive cone, which therefore coincides with P. ∎

Archimedean property and density

Proposition 2.3. ℚ is Archimedean: for any x, y ∈ ℚ with x > 0 there is n ∈ ℕ with nx > y. Moreover ℚ is dense in itself: between any two rationals x < y lies another, for instance (x + y)/2.

Proof. Write x = a/b and y = c/d with a, b, d > 0, and take n = b(|c| + 1). Since a ≥ 1 and d ≥ 1, nx = (|c| + 1)a ≥ |c| + 1 > |c| ≥ |c|/d ≥ y. ∎

A more arithmetical intermediate value comes from the mediant. If b, d > 0 and a/b < c/d, then

        a/b < (a + c)/(b + d) < c/d,

because (a + c)b − a(b + d) = bc − ad > 0 and c(b + d) − (a + c)d = bc − ad > 0. The mediant will be the protagonist of Lesson 5.

Countability

The set ℚ is countable, although it is dense. A beautiful explicit bijection between ℕ and the positive rationals is given by the Calkin–Wilf sequence: start with x₁ = 1 and set

        x_(n+1) = 1/(2⌊x_n⌋ − x_n + 1).

This sequence, due in this form to Moshe Newman, runs 1/1, 1/2, 2/1, 1/3, 3/2, 2/3, 3/1, 1/4, 4/3, 3/5, 5/2, 2/5, … and lists every positive rational exactly once, in lowest terms. It is the breadth-first traversal of the Calkin–Wilf tree, in which a/b has children a/(a + b) and (a + b)/b. That every reduced fraction occurs exactly once follows by running the Euclidean algorithm backwards: the parent of a/b is a/(b − a) if a < b and (a − b)/b if a > b, and this process strictly decreases a + b while preserving gcd(a, b) = 1, so it reaches 1/1 along a unique path.

Incompleteness

Theorem 2.4. The ordered field ℚ is not complete: the nonempty bounded set A = {x ∈ ℚ : x² < 2} has no least upper bound in ℚ.

Proof. Suppose s ∈ ℚ were the supremum. We show s² = 2, contradicting the irrationality of √2 (proved in Lessons 3 and 9). If s² < 2, put t = s + (2 − s²)/(s + 2). Then t > s and a short computation gives

        2 − t² = 2(2 − s²)/(s + 2)²  > 0,

so t ∈ A, contradicting that s is an upper bound. If s² > 2, the same t now satisfies t < s and t² > 2, so t is a smaller upper bound (any x ∈ A with x > t would satisfy x² > t² > 2). Thus s² = 2. ∎

The map s ↦ t = (2s + 2)/(s + 2) used here is itself a rational approximation scheme: starting from s = 1 it produces 4/3, 7/5, 24/17, 41/29, … , approaching √2, and alternate terms 7/5, 41/29, … are continued fraction convergents. The completion of ℚ with respect to the usual absolute value is ℝ, and Lesson 12 will show that ℚ has other, inequivalent completions.

✏️ Your Turn

(a) Find the fraction with the smallest denominator lying strictly between 13/17 and 10/13.
(b) Using Newman's formula, compute the 10th term of the Calkin–Wilf sequence.

Answers: (a) Since 13·13 − 17·10 = 169 − 170 = −1, the two fractions are Farey neighbours (Lesson 5), so the fraction of smallest denominator between them is their mediant 23/30. (b) Continuing from x₈ = 1/4: x₉ = 1/(2·0 − 1/4 + 1) = 4/3, and x₁₀ = 1/(2·1 − 4/3 + 1) = 1/(5/3) = 3/5.

─────────────────────────────────
Lesson 3: Valuations, Reduced Forms and Rational Roots
─────────────────────────────────

📌 Key idea of this section:

        Every x ∈ ℚ^× has a unique factorisation x = ±∏ p^(v_p(x)) with v_p(x) ∈ ℤ,
        and v_p(xy) = v_p(x) + v_p(y),  v_p(x + y) ≥ min(v_p(x), v_p(y)).

The p-adic valuation

By the fundamental theorem of arithmetic, every nonzero integer n factors uniquely as ±∏ p^(e_p). Set v_p(n) = e_p, the exponent of the prime p in n. For x = a/b ∈ ℚ^× define v_p(x) = v_p(a) − v_p(b). This is well defined, because a/b = a′/b′ gives ab′ = a′b and hence v_p(a) + v_p(b′) = v_p(a′) + v_p(b). By convention v_p(0) = +∞.

Proposition 3.1. For all x, y ∈ ℚ: (i) v_p(xy) = v_p(x) + v_p(y); (ii) v_p(x + y) ≥ min(v_p(x), v_p(y)), with equality whenever v_p(x) ≠ v_p(y).

Proof. Part (i) is additivity of exponents. For (ii) we may assume x, y, x + y ≠ 0. Let m = min(v_p(x), v_p(y)) and write x = p^m·a/b and y = p^m·c/d with p ∤ bd. Then x + y = p^m(ad + bc)/(bd) and p ∤ bd, so v_p(x + y) ≥ m. If, say, v_p(x) = m < v_p(y), then p ∤ a but p | c, so p ∤ ad + bc and equality holds. ∎

The map v_p: ℚ^× → ℤ is a surjective group homomorphism, a discrete valuation. Its valuation ring {x : v_p(x) ≥ 0} is exactly the localisation ℤ₍ₚ₎ of Lesson 1, and x ∈ ℤ if and only if v_p(x) ≥ 0 for every prime p. Collecting all primes gives the structure theorem

        ℚ^×  ≅  {±1} × ⊕_p ℤ,     x ↦ (sign x, (v_p(x))_p),

so the multiplicative group of ℚ is a free abelian group on the primes, times a group of order 2.

Reduced forms

Proposition 3.2. Every x ∈ ℚ has a unique representation x = a/b with b > 0 and gcd(a, b) = 1. If x = c/d is any representation, then c = ka and d = kb for some nonzero integer k.

Proof. Existence: divide any representation by the gcd and fix the sign. If a/b = c/d with gcd(a, b) = 1, then ad = bc, so b | ad and, being coprime to a, b | d (Euclid's lemma). Writing d = kb gives akb = ad = bc, and cancelling b ≠ 0 gives c = ka. Uniqueness of the reduced form follows because two reduced representations divide each other's denominators. ∎

The same proof works in any unique factorisation domain, so in Frac(D) for a UFD D every element has a reduced representation, unique up to multiplication of numerator and denominator by a common unit.

The rational root theorem

Theorem 3.3. Let f(x) = a_n xⁿ + ⋯ + a₁x + a₀ ∈ ℤ[x] with a_n a₀ ≠ 0. If r/s is a root of f with gcd(r, s) = 1, then r | a₀ and s | a_n.

Proof. Multiply f(r/s) = 0 by sⁿ:

        a_n rⁿ + a_(n−1) r^(n−1) s + ⋯ + a₁ r s^(n−1) + a₀ sⁿ = 0.

Every term except a₀sⁿ is divisible by r, so r | a₀sⁿ, and since gcd(r, s) = 1, r | a₀. Similarly every term except a_n rⁿ is divisible by s, so s | a_n. ∎

Corollary 3.4. A monic polynomial in ℤ[x] has no rational roots other than integers; in particular, for a positive integer N and k ≥ 2, the number N^(1/k) is rational only if N is a perfect k-th power. In the language of algebraic number theory, ℤ is integrally closed in ℚ.

For example, the rational roots of 6x³ − 11x² + 6x − 1 lie among ±1, ±1/2, ±1/3, ±1/6, and testing shows that they are 1, 1/2 and 1/3; indeed 6x³ − 11x² + 6x − 1 = (x − 1)(2x − 1)(3x − 1).

Gauss's lemma

Call f ∈ ℤ[x] primitive if the gcd of its coefficients is 1. Gauss's lemma states that the product of primitive polynomials is primitive. Proof: if a prime p divided every coefficient of fg, then in 𝔽_p[x] we would have f̄ ḡ = 0 with f̄, ḡ ≠ 0, impossible because 𝔽_p[x] is a domain. Consequently a primitive polynomial is irreducible in ℤ[x] if and only if it is irreducible in ℚ[x]: any factorisation over ℚ can be rescaled, by clearing denominators and extracting contents, into a factorisation over ℤ with factors of the same degrees. This is the bridge from the field of fractions back to the ring, and it is the reason why ℤ[x] is a unique factorisation domain.

Harmonic numbers are not integers

Valuations give slick proofs of non-integrality. Let H_n = 1 + 1/2 + ⋯ + 1/n.

Theorem 3.5. For n ≥ 2, v_2(H_n) = −⌊log₂ n⌋. In particular H_n is not an integer.

Proof. Let 2^k be the largest power of 2 not exceeding n, so k = ⌊log₂ n⌋ ≥ 1. Among 1, …, n the integer 2^k is the only one divisible by 2^k, since 2·2^k > n. Thus v_2(1/2^k) = −k while v_2(1/j) > −k for every other j ≤ n. Group the remaining terms into a sum T with v_2(T) > −k (by part (ii) of Proposition 3.1). Then by the equality case, v_2(H_n) = v_2(1/2^k + T) = −k < 0. ∎

For example H_10 = 7381/2520, where 2520 = 2³·3²·5·7 and 7381 = 11²·61, so v_2(H_10) = −3 = −⌊log₂ 10⌋, in agreement with the theorem. Wolstenholme's theorem, which asserts that the numerator of H_(p−1) is divisible by p² for primes p ≥ 5, is a deeper statement of the same flavour.

✏️ Your Turn

(a) Compute v_2, v_3, v_5, v_7 and v_11 of x = −540/77.
(b) Find v_3(H_10) and explain why it is negative.

Answers: (a) 540 = 2²·3³·5 and 77 = 7·11, so v_2(x) = 2, v_3(x) = 3, v_5(x) = 1, v_7(x) = −1 and v_11(x) = −1; the sign plays no role. (b) From H_10 = 7381/2520 with 7381 = 11²·61 and v_3(2520) = 2, v_3(H_10) = −2. The reason: 9 is the only j ≤ 10 with v_3(j) = 2, so the term 1/9 has strictly smallest 3-adic valuation and dominates the sum.

─────────────────────────────────
Lesson 4: Positional Expansions and the Order of 10
─────────────────────────────────

📌 Key idea of this section:

        x ∈ ℚ  ⟺  its base-b expansion is eventually periodic.
        For x = a/n in lowest terms, n = 2^α·5^β·m with gcd(m, 10) = 1:
        preperiod = max(α, β),   period = ord_m(10).

Expansions in an arbitrary base

Fix an integer base b ≥ 2. Every real x ∈ [0, 1) has a unique expansion x = ∑_{k ≥ 1} d_k b^(−k) with digits d_k ∈ {0, 1, …, b − 1} that does not end in an infinite string of the digit b − 1. It is produced by the greedy rule d_k = ⌊b·x_(k−1)⌋, x_k = b·x_(k−1) − d_k, starting from x₀ = x. We call the expansion eventually periodic if there are s ≥ 0 and t ≥ 1 with d_(k+t) = d_k for all k > s; the least such s is the preperiod and the least such t the period.

Theorem 4.1. A real number x ∈ [0, 1) is rational if and only if its base-b expansion is eventually periodic.

Proof. Suppose x = a/n with 0 ≤ a < n. The greedy algorithm keeps every x_k in the set {0, 1/n, …, (n − 1)/n}: indeed x_k = r_k/n where r₀ = a and r_k is the remainder of b·r_(k−1) on division by n, and d_k is the corresponding quotient. This is exactly long division. The sequence (r_k) takes at most n values, so r_i = r_j for some i < j; since r_k determines all later remainders and digits, the expansion is periodic from position i + 1 on with period dividing j − i.

Conversely, suppose the digits satisfy d_(k+t) = d_k for k > s. Let A be the integer with base-b digits d₁ … d_s and B the integer with digits d_(s+1) … d_(s+t). Then

        x = A/b^s + (B/b^(s+t))·(1 + b^(−t) + b^(−2t) + ⋯) = A/b^s + B/(b^s (b^t − 1)),

which is rational. ∎

Precise period and preperiod

We now determine the period and preperiod exactly. Work in base 10 (the argument is identical for any base, with the prime factors of b replacing 2 and 5).

Lemma 4.2. Let x ∈ (0, 1). Then x has an expansion with preperiod at most s and period dividing t if and only if 10^s(10^t − 1)·x ∈ ℤ.

Proof. The expansion of x is eventually periodic in the stated sense if and only if 10^(s+t)x and 10^s x have the same fractional part, i.e. if and only if 10^(s+t)x − 10^s x ∈ ℤ. (For the forward direction, the shift by s + t and by s produce identical digit strings after the point; for the converse, equal fractional parts have identical greedy expansions.) ∎

Theorem 4.3. Let x = a/n with gcd(a, n) = 1, 0 < a < n, and write n = 2^α 5^β m with gcd(m, 10) = 1. Then the preperiod of x is s₀ = max(α, β). If m = 1 the expansion terminates; if m > 1 the period is t₀ = ord_m(10), the multiplicative order of 10 modulo m.

Proof. By the lemma, (s, t) is admissible exactly when n divides 10^s(10^t − 1)a, and since gcd(a, n) = 1 this means n | 10^s(10^t − 1). Because 10^t − 1 is coprime to 10 and 2^α 5^β is coprime to m, this divisibility splits into two independent conditions:

        2^α 5^β | 10^s   ⟺   s ≥ max(α, β),         m | 10^t − 1   ⟺   ord_m(10) | t.

The set of admissible pairs is therefore {s ≥ s₀} × {t : t₀ | t}, which has a componentwise least element (s₀, t₀). When m = 1 every t is admissible, and t = 1 with repeating digit 0 shows that the expansion terminates after s₀ digits. ∎

The same reasoning shows that a reduced fraction a/n has a purely periodic expansion if and only if gcd(n, 10) = 1, and a terminating expansion if and only if n has no prime factors other than 2 and 5.

Consequences

Since ord_m(10) divides every exponent e with 10^e ≡ 1 (mod m), the period of 1/m divides φ(m) by Euler's theorem, and more sharply it divides the Carmichael exponent λ(m). For a prime p ≠ 2, 5 the period of 1/p divides p − 1, with equality precisely when 10 is a primitive root modulo p. Such primes are called full reptend primes; below 100 they are 7, 17, 19, 23, 29, 47, 59, 61 and 97. Artin's primitive root conjecture (1927) predicts that 10, like any integer other than −1 and the perfect squares, is a primitive root modulo infinitely many primes, with a positive density, approximately 0.3739558 (Artin's constant) for the base 10. Hooley proved this in 1967 assuming the generalised Riemann hypothesis; it remains open unconditionally for every individual base, although Heath-Brown (1986) showed that there are at most two prime bases for which the conjecture fails.

By the Chinese remainder theorem, ord_(mm′)(10) = lcm(ord_m(10), ord_(m′)(10)) for coprime m and m′. Thus 1/91 = 1/(7·13) has period lcm(6, 6) = 6, and 1/21 has period lcm(1, 6) = 6. For prime powers, the standard lifting-the-exponent argument shows: if ord_(p²)(10) ≠ ord_p(10), then ord_(p^k)(10) = p^(k−1) ord_p(10) for all k ≥ 1. For example 1/7 has period 6 and 1/49 has period 42. The exceptional primes, those for which 10^(p−1) ≡ 1 (mod p²), are the base-10 Wieferich primes; the only ones known are 3, 487 and 56598313. For p = 487 the fractions 1/487 and 1/487² have the same period 486.

Midy's theorem

The expansion 1/7 = 0.(142857) has the curious property 142 + 857 = 999, and 1/13 = 0.(076923) satisfies 076 + 923 = 999.

Theorem 4.4 (Midy, 1836). Let p ≠ 2, 5 be prime and suppose the period of 1/p is even, t = 2k. Split the repeating block into halves A and B of k digits each. Then A + B = 10^k − 1.

Proof. Since 10^(2k) ≡ 1 and 10^k ≢ 1 (mod p), and the only square roots of 1 modulo a prime are ±1, we have 10^k ≡ −1 (mod p). Multiplying 1/p = 0.(AB) by 10^k shifts the expansion: 10^k/p = A + 0.(BA). The fractional part of 10^k/p is (p − 1)/p, because 10^k ≡ p − 1 (mod p). Hence 0.(AB) + 0.(BA) = 1/p + (p − 1)/p = 1. Reading both purely periodic expansions as fractions with denominator 10^(2k) − 1,

        (A·10^k + B) + (B·10^k + A) = 10^(2k) − 1,   so   (A + B)(10^k + 1) = (10^k − 1)(10^k + 1),

and A + B = 10^k − 1. ∎

The cyclic number 142857 has a further property: its multiples by 1, …, 6 are its cyclic rotations, because the fractions k/7 for k = 1, …, 6 are the six fractional parts of 10^j/7. The same holds for the repeating block of 1/p for every full reptend prime p.

Mirror image in the p-adics

Theorem 4.1 has a twin. In Lesson 12 we shall meet p-adic expansions ∑_{k ≥ −N} d_k p^k, which are infinite to the left rather than to the right. A p-adic number is rational if and only if its digit sequence is eventually periodic, and the proof is the same long-division argument read backwards.

✏️ Your Turn

(a) Find the period of 1/41 and write out its repeating block.
(b) Find the preperiod and period of 1/84 and verify by computing the expansion.

Answers: (a) 10⁵ − 1 = 99999 = 41·2439 so ord_41(10) divides 5, and it is not 1 because 10 ≢ 1 (mod 41); hence the period is 5 and 1/41 = 0.(02439). (b) 84 = 2²·21 with α = 2, β = 0, m = 21, so the preperiod is 2 and the period is ord_21(10) = lcm(ord_3(10), ord_7(10)) = lcm(1, 6) = 6. Indeed 1/84 = 0.01(190476).

─────────────────────────────────
Lesson 5: Farey Sequences and the Stern–Brocot Tree
─────────────────────────────────

📌 Key idea of this section:

        If a/b < c/d are consecutive in the Farey sequence F_n, then bc − ad = 1,
        b + d > n, and the first fraction to appear between them is the mediant (a + c)/(b + d).

Definition and first examples

The Farey sequence of order n, F_n, is the increasing list of all reduced fractions h/k with 0 ≤ h/k ≤ 1 and 1 ≤ k ≤ n. Thus

        F_1:  0/1, 1/1
        F_2:  0/1, 1/2, 1/1
        F_3:  0/1, 1/3, 1/2, 2/3, 1/1
        F_4:  0/1, 1/4, 1/3, 1/2, 2/3, 3/4, 1/1

Each F_n arises from F_(n−1) by inserting the fractions with denominator exactly n, and there are φ(n) of these, so

        |F_n| = 1 + φ(1) + φ(2) + ⋯ + φ(n).

The sum of φ(k) for k ≤ n is asymptotic to 3n²/π², so |F_n| ~ 3n²/π²; the constant 6/π² = 1/ζ(2) is the probability that two random integers are coprime.

The determinant property

The key algebraic fact is a lemma about fractions caught between a unimodular pair.

Lemma 5.1. Let a/b < c/d with b, d > 0 and bc − ad = 1. If h/k is a fraction with k > 0 and a/b < h/k < c/d, then there are positive integers λ, μ with

        h = λa + μc,     k = λb + μd.

In particular k ≥ b + d, with equality only for the mediant (a + c)/(b + d).

Proof. The matrix M with columns (a, b) and (c, d) has determinant ad − bc = −1, so M⁻¹ has integer entries, and solving M·(λ, μ) = (h, k) gives

        λ = ck − dh,     μ = bh − ak.

Both are integers, and both are positive: ck − dh > 0 because h/k < c/d, and bh − ak > 0 because h/k > a/b. Since λ, μ ≥ 1, k = λb + μd ≥ b + d. ∎

Theorem 5.2. If a/b < c/d are consecutive in F_n, then bc − ad = 1 and b + d > n.

Proof. Induct on n. For F_1 the pair 0/1 < 1/1 has 1·1 − 0·1 = 1. Assume the statement for F_(n−1), and let a/b < c/d be consecutive there. By Lemma 5.1, every fraction strictly between them has denominator at least b + d, which by induction exceeds n − 1. So if b + d > n nothing is inserted between them in F_n; if b + d = n then exactly one fraction is inserted, namely the mediant, since equality in k ≥ b + d forces λ = μ = 1. The new consecutive pairs a/b < (a + c)/(b + d) and (a + c)/(b + d) < c/d again satisfy the determinant condition, because b(a + c) − a(b + d) = bc − ad = 1 and similarly for the other pair. Every consecutive pair in F_n is of one of these forms, which proves bc − ad = 1. Finally, if b + d ≤ n for neighbours in F_n, the mediant would lie in F_n strictly between them, a contradiction. ∎

Note that bc − ad = 1 also shows that every fraction in F_n is automatically reduced when obtained as a mediant: any common divisor of a + c and b + d divides b(a + c) − a(b + d) = 1.

Computing neighbours and successors

The determinant condition turns the search for neighbours into a congruence. The left neighbour of a reduced fraction h/k in F_n (k ≤ n) is the a/b with hb − ka = 1 and b ≤ n as large as possible, so b is the largest integer ≤ n with b ≡ h⁻¹ (mod k). For instance the left neighbour of 5/12 in F_12 has b ≡ 5⁻¹ ≡ 5 (mod 12), so b = 5, a = (5·5 − 1)/12 = 2, giving 2/5. Similarly the right neighbour c/d satisfies 12c − 5d = 1, so d ≡ 7 (mod 12) and c/d = 3/7.

Given two consecutive terms a/b < c/d of F_n, the next term e/f is:

        e = ⌊(n + b)/d⌋·c − a,     f = ⌊(n + b)/d⌋·d − b.

Indeed, by Theorem 5.2 the next term e/f satisfies de − cf = 1. Since bc − ad = 1, the pair (e, f) = (−a, −b) is one integer solution of this equation, so the general solution is (e, f) = (κc − a, κd − b) with κ ∈ ℤ. Each solution with 0 < f ≤ n gives an element of F_n to the right of c/d with e/f − c/d = 1/(df), so the nearest one, which is the next term, has the largest admissible f; that is κ = ⌊(n + b)/d⌋. This recurrence lets one generate F_n in O(|F_n|) arithmetic operations.

The Stern–Brocot tree

Start from the formal fractions 0/1 and 1/0 and repeatedly insert mediants between neighbours. The first stages are

        0/1, 1/0
        0/1, 1/1, 1/0
        0/1, 1/2, 1/1, 2/1, 1/0
        0/1, 1/3, 1/2, 2/3, 1/1, 3/2, 2/1, 3/1, 1/0

Arranging the inserted fractions as a binary tree, with 1/1 at the root, gives the Stern–Brocot tree (Stern 1858, Brocot 1861). By the argument of Theorem 5.2 every consecutive pair in every stage satisfies bc − ad = 1, so every fraction produced is reduced; and by Lemma 5.1 every positive reduced fraction h/k appears, at a stage bounded by h + k, exactly once. Locating h/k is a binary search: at each node move left (L) if h/k is smaller and right (R) if it is larger. For example 7/5 is reached by the path R L L R: 1/1 → 2/1 → 3/2 → 4/3 → 7/5.

The path encodes the continued fraction of Lesson 7: if h/k = [a₀; a₁, …, a_r] then the path is R^(a₀) L^(a₁) R^(a₂) ⋯ with the final exponent reduced by one. Since 7/5 = [1; 2, 2], the path is R¹L²R¹, as found. Algebraically, the matrices L = (1 0; 1 1) and R = (1 1; 0 1) generate a free monoid, and the products of L and R are exactly the integer matrices of determinant 1 with nonnegative entries; the Stern–Brocot tree is a picture of this monoid.

Farey fractions and the Riemann hypothesis

The Farey fractions are remarkably evenly spread. Enumerate F_n as f₁ < f₂ < ⋯ < f_N with N = |F_n|, and compare f_ν with the equally spaced points ν/N. Franel (1924) and Landau showed that the Riemann hypothesis is equivalent to the estimate

        ∑_{ν=1}^{N} |f_ν − ν/N| = O(n^(1/2 + ε))   for every ε > 0.

Thus one of the most famous open problems in mathematics can be phrased entirely in terms of the arrangement of fractions with bounded denominator.

✏️ Your Turn

(a) List F_5 and check its length against the totient formula.
(b) Find the two neighbours of 3/7 in F_7 and verify the determinant property.

Answers: (a) F_5: 0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1, which has 11 terms; and 1 + φ(1) + ⋯ + φ(5) = 1 + 1 + 1 + 2 + 2 + 4 = 11. (b) The left neighbour a/b needs 3b − 7a = 1, so b ≡ 5 (mod 7), b = 5, a = 2: it is 2/5. The right neighbour needs 7c − 3d = 1, so d ≡ 2 (mod 7), d = 2, c = 1: it is 1/2. Check: 3·5 − 7·2 = 1 and 7·1 − 3·2 = 1.

─────────────────────────────────
Lesson 6: Ford Circles and the Modular Group
─────────────────────────────────

📌 Key idea of this section:

        The Ford circle C(p/q) has centre (p/q, 1/(2q²)) and radius 1/(2q²).
        Two Ford circles are tangent if |ps − qr| = 1 and disjoint otherwise.

Definition

For each reduced fraction p/q with q ≥ 1, let C(p/q) be the circle in the upper half-plane tangent to the real axis at p/q with radius 1/(2q²). These circles were introduced by Lester R. Ford in 1938 as a geometric model of the Farey sequences. Large circles sit above fractions with small denominators: C(0/1) and C(1/1) have radius 1/2, C(1/2) has radius 1/8, C(1/3) and C(2/3) have radius 1/18.

Theorem 6.1 (Ford). Two distinct Ford circles C(p/q) and C(r/s) are either tangent or disjoint; they are tangent if and only if |ps − qr| = 1.

Proof. Let D be the distance between the centres and ρ₁ = 1/(2q²), ρ₂ = 1/(2s²) the radii. Then

        D² − (ρ₁ + ρ₂)² = (p/q − r/s)² + (ρ₁ − ρ₂)² − (ρ₁ + ρ₂)²
                        = (ps − qr)²/(q²s²) − 4ρ₁ρ₂
                        = ((ps − qr)² − 1)/(q²s²).

Since the fractions are distinct and reduced, ps − qr is a nonzero integer, so the last expression is ≥ 0, with equality exactly when |ps − qr| = 1. The circles therefore never overlap, and they touch exactly in the unimodular case. ∎

Combining this with Theorem 5.2: the Ford circles of two consecutive Farey fractions are tangent, and the circle of their mediant is tangent to both of them. A short computation with the weighted average of the centres shows that when bc − ad = 1 the circles C(a/b) and C(c/d) touch at the point

        ( (ab + cd)/(b² + d²),  1/(b² + d²) ).

Areas and ζ-values

How much of the strip 0 ≤ x < 1 do the Ford circles cover? Each denominator q contributes φ(q) circles with base point in [0, 1), each of area π/(4q⁴). Using the Dirichlet series ∑ φ(q)q^(−s) = ζ(s − 1)/ζ(s), valid for Re s > 2,

        ∑_{q ≥ 1} φ(q)·π/(4q⁴) = (π/4)·ζ(3)/ζ(4) ≈ 0.87228.

Because the whole configuration is invariant under x ↦ x + 1 and the circles are pairwise disjoint, this sum equals the area of the part of the unit square 0 ≤ x < 1, 0 < y ≤ 1 covered by Ford circles: about 87.2% of the square is covered, and the uncovered region consists of curvilinear triangles between triples of mutually tangent circles.

Ford circles as horocycles

Let ℍ = {z ∈ ℂ : Im z > 0} be the upper half-plane and let SL₂(ℤ) act by Möbius transformations γz = (αz + β)/(γ₀z + δ) for γ = (α β; γ₀ δ) with αδ − βγ₀ = 1. A computation gives

        Im(γz) = Im z / |γ₀z + δ|².

Take γ = (p r; q s) with ps − rq = 1 and q ≥ 1, so that γ(∞) = p/q. The horizontal line Im z = 1 is a horocycle at ∞; its image under γ is a circle tangent to ℝ at p/q, whose highest point has height max 1/|qz + s|² over Im z = 1, namely 1/q² (attained when Re(qz + s) = 0, where |qz + s| = q). Hence the image is a circle of diameter 1/q²: precisely the Ford circle C(p/q). The Ford circles together with the line Im z = 1 form a single SL₂(ℤ)-orbit of horocycles, and their tangency pattern is the Farey tessellation of the hyperbolic plane by ideal triangles with vertices at Farey neighbours. This is the geometric backbone of the theory of modular forms, where SL₂(ℤ) acts on ℍ with fundamental domain {|z| ≥ 1, |Re z| ≤ 1/2}.

Approximation by Ford circles

A vertical line through a real number x meets the circle C(p/q) if and only if |x − p/q| ≤ 1/(2q²). Ford's geometry thus gives a quick proof of a classical approximation theorem.

Theorem 6.2. If x is irrational, there are infinitely many reduced fractions p/q with |x − p/q| < 1/(2q²).

Proof. Translating by an integer, assume 0 < x < 1. For each n ≥ 2, x lies strictly between two consecutive terms a/b < c/d of F_n. Suppose neither of them satisfies the inequality. Then, as x is irrational, x − a/b > 1/(2b²) and c/d − x > 1/(2d²), and adding,

        1/(bd) = c/d − a/b > 1/(2b²) + 1/(2d²) = (b² + d²)/(2b²d²),

that is 2bd > b² + d², or (b − d)² < 0, which is absurd. So one of a/b and c/d satisfies the inequality. Since b + d > n, bd ≥ b + d − 1 ≥ n, so the bracketing interval has length 1/(bd) ≤ 1/n. As n grows the selected fractions therefore come arbitrarily close to x, and since x is irrational each individual fraction has positive distance from x; hence infinitely many distinct fractions occur. ∎

In Lesson 8 we shall see that the constant 1/2 can be improved to 1/√5 and no further.

✏️ Your Turn

(a) Are C(5/8) and C(3/5) tangent? What about C(1/3) and C(3/7)?
(b) Find the radius of the largest Ford circle lying strictly between C(0/1) and C(1/1) and touching both, and give its point of contact with C(0/1).

Answers: (a) |5·5 − 8·3| = 1, so C(5/8) and C(3/5) are tangent. |1·7 − 3·3| = 2, so C(1/3) and C(3/7) are disjoint. (b) The mediant of 0/1 and 1/1 is 1/2, with radius 1/(2·2²) = 1/8. With a/b = 0/1 and c/d = 1/2 (so bc − ad = 1), the contact point is ((0·1 + 1·2)/(1 + 4), 1/(1 + 4)) = (2/5, 1/5).

─────────────────────────────────
Lesson 7: Continued Fractions and Their Convergents
─────────────────────────────────

📌 Key idea of this section:

        x = [a₀; a₁, a₂, …],   p_n = a_n p_(n−1) + p_(n−2),   q_n = a_n q_(n−1) + q_(n−2),
        p_n q_(n−1) − p_(n−1) q_n = (−1)^(n−1),   x − p_n/q_n = (−1)^n / (q_n(x_(n+1) q_n + q_(n−1))).

The continued fraction algorithm

For a real number x, set x₀ = x and define recursively:

        a_n = ⌊x_n⌋,     x_(n+1) = 1/(x_n − a_n)   (if x_n ≠ a_n).

The integers a_n are the partial quotients and the x_n the complete quotients. Then a₀ ∈ ℤ, a_n ≥ 1 for n ≥ 1, and

        x = a₀ + 1/(a₁ + 1/(a₂ + ⋯)) =: [a₀; a₁, a₂, …].

If x = h/k is rational, the algorithm is precisely the Euclidean algorithm applied to h and k: the partial quotients are the successive quotients. It therefore stops, and every rational number has a finite continued fraction. For example, for 67/29:

        67 = 2·29 + 9,   29 = 3·9 + 2,   9 = 4·2 + 1,   2 = 2·1,

so 67/29 = [2; 3, 4, 2]. A finite expansion whose last partial quotient exceeds 1 can be rewritten using [… , a_r] = [… , a_r − 1, 1]; apart from this ambiguity the expansion of a rational is unique. Conversely the algorithm never stops when x is irrational, since every complete quotient is then irrational.

Convergents and the matrix formalism

Define p₋₂ = 0, p₋₁ = 1, q₋₂ = 1, q₋₁ = 0, and:

        p_n = a_n p_(n−1) + p_(n−2),     q_n = a_n q_(n−1) + q_(n−2)    (n ≥ 0).

Proposition 7.1. For every n ≥ 0,

        ( a₀ 1 ; 1 0 )( a₁ 1 ; 1 0 ) ⋯ ( a_n 1 ; 1 0 )  =  ( p_n  p_(n−1) ; q_n  q_(n−1) ),

and for any real t > 0, [a₀; a₁, …, a_n, t] = (t p_n + p_(n−1))/(t q_n + q_(n−1)). In particular [a₀; a₁, …, a_n] = p_n/q_n.

Proof. The matrix identity follows by induction, since multiplying (p_(n−1) p_(n−2); q_(n−1) q_(n−2)) on the right by (a_n 1; 1 0) produces exactly the recurrences. The second statement is also proved by induction on n: [a₀; a₁, …, a_n, t] = [a₀; a₁, …, a_(n−1), a_n + 1/t], and by the inductive hypothesis this equals ((a_n + 1/t)p_(n−1) + p_(n−2))/((a_n + 1/t)q_(n−1) + q_(n−2)); multiplying through by t gives (t p_n + p_(n−1))/(t q_n + q_(n−1)). ∎

Taking determinants in the matrix identity, each factor having determinant −1, gives the fundamental identity

        p_n q_(n−1) − p_(n−1) q_n = (−1)^(n−1).

Consequences: gcd(p_n, q_n) = 1, so the convergents p_n/q_n are automatically in lowest terms, and consecutive convergents are Farey neighbours. Also p_n q_(n−2) − p_(n−2) q_n = (−1)^n a_n, which shows that the even convergents increase and the odd convergents decrease.

The error formula

Applying Proposition 7.1 with t = x_(n+1) gives x = (x_(n+1)p_n + p_(n−1))/(x_(n+1)q_n + q_(n−1)), and subtracting p_n/q_n yields

        x − p_n/q_n = (−1)^n / ( q_n (x_(n+1) q_n + q_(n−1)) ).

Since a_(n+1) < x_(n+1) < a_(n+1) + 1 for irrational x, the denominator lies strictly between q_n q_(n+1) and q_n(q_(n+1) + q_n). Hence:

Theorem 7.2. For irrational x the convergents alternate around x, and

        1/(q_n(q_n + q_(n+1)))  <  |x − p_n/q_n|  <  1/(q_n q_(n+1))  ≤  1/q_n².

In particular p_n/q_n → x, so every infinite sequence a₀ ∈ ℤ, a₁, a₂, … ≥ 1 defines a real number, and the correspondence between irrational numbers and such sequences is a bijection.

Since q_n ≥ q_(n−1) + q_(n−2), the denominators grow at least as fast as the Fibonacci numbers: q_n ≥ F_(n+1). Hence the convergence is at least geometric, with ratio governed by the golden ratio.

Classical expansions

The simplest infinite continued fraction is the golden ratio, φ = (1 + √5)/2 = [1; 1, 1, 1, …], because φ = 1 + 1/φ. Its convergents are ratios of consecutive Fibonacci numbers, 1, 2, 3/2, 5/3, 8/5, 13/8, … , and since all partial quotients are as small as possible, φ is in a precise sense the irrational number hardest to approximate by rationals (Lesson 8). Similarly √2 = [1; 2, 2, 2, …], since √2 + 1 = 2 + 1/(√2 + 1), with convergents 1, 3/2, 7/5, 17/12, 41/29, 99/70, …. Euler found the regular pattern

        e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, …],

whose convergents are 2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, …. No pattern is known for π:

        π = [3; 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, …],

with convergents 3, 22/7, 333/106, 355/113, 103993/33102, …. The large partial quotient 292 explains why 355/113, found by Zu Chongzhi in the fifth century, is so good: by Theorem 7.2 its error is less than 1/(113·33102) ≈ 2.67·10⁻⁷, and in fact π − 355/113 ≈ −2.668·10⁻⁷.

Metric theory

For almost every real number x with respect to Lebesgue measure, the partial quotients have the Gauss–Kuzmin distribution: the asymptotic frequency of the value k is log₂(1 + 1/(k(k + 2))). Thus about 41.5% of the partial quotients are 1. Khinchin proved that the geometric mean (a₁a₂⋯a_n)^(1/n) tends almost surely to a universal constant K₀ ≈ 2.6854, and Lévy proved that q_n^(1/n) tends almost surely to e^(π²/(12 ln 2)) ≈ 3.2758. It is not known whether π satisfies Khinchin's law; e does not, because its partial quotients grow.

✏️ Your Turn

(a) Compute the continued fraction expansion of 157/68.
(b) List its convergents and verify the determinant identity for the last two.

Answers: (a) 157 = 2·68 + 21, 68 = 3·21 + 5, 21 = 4·5 + 1, 5 = 5·1, so 157/68 = [2; 3, 4, 5]. (b) The numerators are 2, 3·2 + 1 = 7, 4·7 + 2 = 30, 5·30 + 7 = 157, and the denominators 1, 3, 13, 5·13 + 3 = 68, so the convergents are 2, 7/3, 30/13, 157/68. Check: 157·13 − 30·68 = 2041 − 2040 = 1 = (−1)^(3−1).

─────────────────────────────────
Lesson 8: Best Approximation, Quadratic Irrationals and Pell's Equation
─────────────────────────────────

📌 Key idea of this section:

        Convergents are best approximations; |x − p/q| < 1/(2q²) forces p/q to be a convergent;
        the expansion of x is eventually periodic iff x is a quadratic irrational.

Best approximations

Theorem 8.1 (Lagrange). Let x be irrational and n ≥ 0. If p, q are integers with 0 < q < q_(n+1), then |qx − p| ≥ |q_n x − p_n|, with equality only for (p, q) = (p_n, q_n).

Proof. Because p_n q_(n+1) − p_(n+1) q_n = ±1, there are integers u, v with p = u p_n + v p_(n+1) and q = u q_n + v q_(n+1). If v = 0, then (p, q) = u(p_n, q_n) with u ≥ 1 and the claim is clear. If u = 0, then q = v q_(n+1) ≥ q_(n+1), which is excluded. Otherwise u and v have opposite signs: if v > 0 then u q_n = q − v q_(n+1) < 0, and if v < 0 then u q_n > 0. By Theorem 7.2 the numbers q_n x − p_n and q_(n+1)x − p_(n+1) also have opposite signs. Hence u(q_n x − p_n) and v(q_(n+1)x − p_(n+1)) have the same sign, and

        |qx − p| = |u|·|q_n x − p_n| + |v|·|q_(n+1) x − p_(n+1)|  >  |q_n x − p_n|. ∎

Corollary 8.2. If |x − p/q| < |x − p_n/q_n| then q > q_n. Indeed, if q ≤ q_n then q < q_(n+1), so |x − p/q| = |qx − p|/q ≥ |q_n x − p_n|/q_n = |x − p_n/q_n|.

So no fraction with denominator at most q_n is closer to x than p_n/q_n. Not every best approximation is a convergent: the best approximations in the sense of Corollary 8.2 also include certain intermediate fractions (p_(n−1) + k p_n)/(q_(n−1) + k q_n). For π, the next fraction closer than 355/113 is the intermediate fraction 52163/16604, and no fraction with denominator between 114 and 16603 does better than 355/113.

Legendre's criterion

Theorem 8.3 (Legendre). If x is irrational and |x − p/q| < 1/(2q²) with q ≥ 1, then p/q is a convergent of x.

Proof. Choose n with q_n ≤ q < q_(n+1). By Theorem 8.1, |q_n x − p_n| ≤ |qx − p| < 1/(2q), so |x − p_n/q_n| < 1/(2q q_n). If p/q ≠ p_n/q_n, then

        1/(q q_n) ≤ |p/q − p_n/q_n| ≤ |x − p/q| + |x − p_n/q_n| < 1/(2q²) + 1/(2q q_n),

so 1/(2q q_n) < 1/(2q²), i.e. q < q_n, a contradiction. ∎

Conversely, Vahlen showed that of any two consecutive convergents at least one satisfies |x − p/q| < 1/(2q²), which recovers Theorem 6.2. Borel (1903) proved that of any three consecutive convergents at least one satisfies |x − p/q| < 1/(√5 q²); in particular (Hurwitz, 1891) every irrational x has infinitely many approximations of this quality.

Proposition 8.4. The constant √5 is optimal: for c > √5 the golden ratio φ has only finitely many approximations with |φ − p/q| < 1/(c q²).

Proof. Since c > 2, by Legendre's theorem such p/q must be convergents, i.e. F_(n+2)/F_(n+1). Let ψ = (1 − √5)/2 = −1/φ. Binet's formula gives F_(k+1) − φF_k = ψ^k, so q(qφ − p) = −F_(n+1)ψ^(n+1) = −(φ^(n+1) − ψ^(n+1))ψ^(n+1)/√5 = (−(−1)^(n+1) + ψ^(2n+2))/√5. Thus q²|φ − p/q| → 1/√5 > 1/c, and only finitely many n can satisfy the inequality. ∎

If φ and the numbers equivalent to it under SL₂(ℤ) (those whose expansions end in all 1s) are excluded, the constant improves to √8; the next values are √221/5, √1517/13, …, accumulating at 3. This is the beginning of the Lagrange and Markov spectra, governed by the solutions of the Markov equation x² + y² + z² = 3xyz.

Quadratic irrationals

A real number is a quadratic irrational if it is irrational and satisfies a quadratic equation with integer coefficients.

Theorem 8.5 (Euler, Lagrange). The continued fraction of x is eventually periodic if and only if x is a quadratic irrational.

Proof of the easy direction (Euler). If x = [a₀; …, a_(s−1), y] with y = [b₀; …, b_(t−1), y] purely periodic, then by Proposition 7.1, y = (yP + P′)/(yQ + Q′) for integers P, P′, Q, Q′ with Q > 0, so Qy² + (Q′ − P)y − P′ = 0 is a quadratic equation; y is irrational because its expansion is infinite. Then x = (yp + p′)/(yq + q′) is a Möbius image of y with integer coefficients, hence lies in ℚ(y) ∖ ℚ and is a quadratic irrational. ∎

Proof of the hard direction (Lagrange). Let ax² + bx + c = 0 with a, b, c ∈ ℤ, a ≠ 0 and discriminant Δ = b² − 4ac > 0, not a square. Substituting x = (x_n p_(n−1) + p_(n−2))/(x_n q_(n−1) + q_(n−2)) shows that the complete quotient x_n satisfies A_n x_n² + B_n x_n + C_n = 0, where

        A_n = a p_(n−1)² + b p_(n−1) q_(n−1) + c q_(n−1)²,     C_n = A_(n−1),

and, because the substitution matrix has determinant ±1, B_n² − 4A_n C_n = Δ. Writing f(t) = at² + bt + c = a(t − x)(t − x′), we have A_n = q_(n−1)² f(p_(n−1)/q_(n−1)) = a q_(n−1)²(p_(n−1)/q_(n−1) − x)(p_(n−1)/q_(n−1) − x′). The first factor is less than 1/q_(n−1)² in absolute value and the second is bounded by |x − x′| + 1, so |A_n| < |a|(|x − x′| + 1) is bounded independently of n; the same holds for C_n = A_(n−1), and then B_n² = Δ + 4A_nC_n is bounded too. Only finitely many integer triples (A_n, B_n, C_n) therefore occur, each with at most two roots, so the complete quotients x_n take only finitely many values. Hence x_i = x_j for some i < j, and the expansion is periodic from position i on. ∎

Galois added a refinement: the expansion is purely periodic exactly when x > 1 and its conjugate x′ satisfies −1 < x′ < 0. From this one derives that for a non-square integer N ≥ 2,

        √N = [a₀; a₁, a₂, …, a_(ℓ−1), 2a₀, a₁, a₂, …],   with a_k = a_(ℓ−k) for 1 ≤ k ≤ ℓ − 1,

where the block a₁, …, a_(ℓ−1), 2a₀ of length ℓ repeats forever and its first ℓ − 1 entries form a palindrome. For example √7 = [2; 1, 1, 1, 4, …], √13 = [3; 1, 1, 1, 1, 6, …], √19 = [4; 2, 1, 3, 1, 2, 8, …] and √61 = [7; 1, 4, 3, 1, 2, 2, 1, 3, 4, 1, 14, …], with periods 4, 5, 6 and 11.

Pell's equation

Theorem 8.6. Let N ≥ 2 be a non-square, let ℓ be the period of √N, and let p_k/q_k be its convergents. Then

        p_(ℓ−1)² − N q_(ℓ−1)² = (−1)^ℓ.

Every positive solution of x² − Ny² = ±1 is a convergent (x, y) = (p_k, q_k); the smallest positive solution of x² − Ny² = 1 is (p_(ℓ−1), q_(ℓ−1)) if ℓ is even and (p_(2ℓ−1), q_(2ℓ−1)) if ℓ is odd.

Proof of the identity. The complete quotient after one period is x_ℓ = a₀ + √N, so by Proposition 7.1

        √N = ((a₀ + √N) p_(ℓ−1) + p_(ℓ−2)) / ((a₀ + √N) q_(ℓ−1) + q_(ℓ−2)).

Clearing the denominator and comparing rational and irrational parts (√N is irrational) gives N q_(ℓ−1) = a₀ p_(ℓ−1) + p_(ℓ−2) and p_(ℓ−1) = a₀ q_(ℓ−1) + q_(ℓ−2). Hence

        p_(ℓ−1)² − N q_(ℓ−1)² = p_(ℓ−1)(a₀q_(ℓ−1) + q_(ℓ−2)) − q_(ℓ−1)(a₀p_(ℓ−1) + p_(ℓ−2)) = p_(ℓ−1)q_(ℓ−2) − p_(ℓ−2)q_(ℓ−1) = (−1)^ℓ.

Proof that solutions are convergents. If x² − Ny² = ±1 with x, y ≥ 1, then x ≥ y (because x² ≥ Ny² − 1 ≥ y²), so x + y√N > 2y and

        |√N − x/y| = |x² − Ny²| / (y(x + y√N)) < 1/(2y²);

by Legendre's theorem x/y is a convergent. The description of the smallest solution follows from a finer analysis of the values p_k² − Nq_k², which equal (−1)^(k+1) times the denominators of the complete quotients. ∎

The solutions of x² − Ny² = 1 are the units of norm 1 in ℤ[√N], and they form the group {±ε^k : k ∈ ℤ}, where ε = x₁ + y₁√N is the fundamental solution. (If ε > 1 is the least unit of norm 1 and η > 1 is any other, choose k with ε^k ≤ η < ε^(k+1); then η ε^(−k) is a unit of norm 1 in [1, ε), so equals 1.) For example:

        √7:   ℓ = 4, convergents 2, 3, 5/2, 8/3,          8² − 7·3² = 1
        √13:  ℓ = 5, p₄/q₄ = 18/5,  18² − 13·5² = −1,     (18 + 5√13)² = 649 + 180√13
        √61:  ℓ = 11, 29718² − 61·3805² = −1,             fundamental solution (1766319049, 226153980)

The last example was posed by Fermat as a challenge in 1657, but had been solved five centuries earlier by Bhāskara II using the cyclic (chakravala) method that goes back to Brahmagupta. The size of the fundamental solution can be enormous: its number of digits can be of the order of √N, which is why Pell's equation is a benchmark problem in computational number theory, where subexponential and quantum algorithms (Hallgren, 2002) compute the regulator log ε.

✏️ Your Turn

(a) Find the continued fraction of √11 and the fundamental solution of x² − 11y² = 1.
(b) Using √19 = [4; 2, 1, 3, 1, 2, 8, …], find the fundamental solution of x² − 19y² = 1.

Answers: (a) √11 = [3; 3, 6, …] with period 2; the convergents begin 3, 10/3, and 10² − 11·3² = 100 − 99 = 1, so (10, 3) is the fundamental solution. (b) The period is ℓ = 6, so we need p₅/q₅. Numerators: 4, 9, 13, 48, 61, 170; denominators: 1, 2, 3, 11, 14, 39. Hence (170, 39), and 170² − 19·39² = 28900 − 28899 = 1.

─────────────────────────────────
Lesson 9: Irrationality and Diophantine Approximation
─────────────────────────────────

📌 Key idea of this section:

        x is irrational  ⟺  0 < |qx − p| < ε has integer solutions for every ε > 0.
        Dirichlet: every irrational x has infinitely many p/q with |x − p/q| < 1/q².
        Liouville: an algebraic x of degree d ≥ 2 satisfies |x − p/q| ≥ c(x)/q^d.

Three proofs that √2 is irrational

First proof (valuations). If √2 = p/q then p² = 2q², and v_2 of the left side is even while v_2 of the right side is odd.

Second proof (descent). If √2 = p/q with q ≥ 1 minimal, then since 1 < √2 < 2 we have 0 < p − q < q, and

        (2q − p)/(p − q) = (2 − √2)/(√2 − 1) = √2,

a representation with smaller denominator, a contradiction. Geometrically this is the classical argument that the side and diagonal of a square have no common measure.

Third proof (rational root theorem). √2 is a root of the monic polynomial x² − 2, so if it were rational it would be an integer, but 1² < 2 < 2².

An irrationality criterion

Proposition 9.1. A real number x is irrational if and only if for every ε > 0 there are integers p, q with 0 < |qx − p| < ε.

Proof. If x = a/b with b ≥ 1, then qx − p = (qa − pb)/b is either 0 or at least 1/b in absolute value, so the condition fails for ε = 1/b. Conversely, if x is irrational, Dirichlet's theorem below provides, for every N, integers with 0 < |qx − p| < 1/N. ∎

Every classical irrationality proof is, at heart, a construction of integer combinations qx − p that are nonzero but too small to be nonzero integers divided by a fixed denominator.

The irrationality of e

Theorem 9.2 (Euler, 1737; this proof is due to Fourier). The number e is irrational.

Proof. Suppose e = a/q with integers a, q ≥ 1. The number

        N = q!·(e − ∑_{k=0}^{q} 1/k!)

is an integer, because q!·e = (q − 1)!·a and q!/k! ∈ ℤ for k ≤ q. On the other hand N = ∑_{k > q} q!/k! > 0 and

        N = 1/(q + 1) + 1/((q + 1)(q + 2)) + ⋯ < ∑_{j ≥ 1} (q + 1)^(−j) = 1/q ≤ 1,

so 0 < N < 1, a contradiction. ∎

The irrationality of π

Theorem 9.3 (Lambert, 1761; this proof is due to Niven, 1947). The number π is irrational.

Proof. Suppose π = a/b with positive integers a, b. For n ≥ 1 put

        f(x) = xⁿ(a − bx)ⁿ / n!,     F(x) = f(x) − f″(x) + f⁽⁴⁾(x) − ⋯ + (−1)ⁿ f⁽²ⁿ⁾(x).

The polynomial n!·f has integer coefficients and only terms of degree n to 2n, so f^(j)(0) is 0 for j < n and an integer for j ≥ n. Since f(π − x) = f(x), also f^(j)(π) = (−1)^j f^(j)(0) ∈ ℤ. Hence F(0) and F(π) are integers. Now F″ + F = f, so

        d/dx [F′(x) sin x − F(x) cos x] = F″(x) sin x + F(x) sin x = f(x) sin x,

and therefore ∫₀^π f(x) sin x dx = F(π) + F(0) ∈ ℤ. But for 0 < x < π we have 0 < f(x) sin x ≤ πⁿaⁿ/n!, so the integral lies strictly between 0 and π(πa)ⁿ/n!, which is less than 1 for n large. No integer lies strictly between 0 and 1. ∎

Hermite proved in 1873 that e is transcendental, and Lindemann in 1882 that π is transcendental, which settled the ancient problem of squaring the circle. Apéry's proof of the irrationality of ζ(3) (1978) uses the same principle with an ingenious sequence of rational approximations. It is still unknown whether e + π, or Euler's constant γ, is irrational.

Dirichlet's approximation theorem

Theorem 9.4 (Dirichlet, 1842). For every real x and every integer N ≥ 1 there are integers p, q with 1 ≤ q ≤ N and |qx − p| < 1/N.

Proof. Consider the N + 1 numbers {kx} = kx − ⌊kx⌋ for k = 0, 1, …, N, all in [0, 1), and the N intervals [j/N, (j + 1)/N) for j = 0, …, N − 1. By the pigeonhole principle two of them, {ix} and {jx} with 0 ≤ i < j ≤ N, lie in the same interval. Put q = j − i and p = ⌊jx⌋ − ⌊ix⌋; then 1 ≤ q ≤ N and |qx − p| = |{jx} − {ix}| < 1/N. ∎

Corollary 9.5. If x is irrational, there are infinitely many fractions p/q with |x − p/q| < 1/q².

Proof. Dividing the theorem's conclusion by q gives |x − p/q| < 1/(qN) ≤ 1/q². Since x is irrational, |qx − p| > 0 for every pair; choosing N larger than 1/|qx − p| for the pairs already found produces new pairs. ∎

The pigeonhole argument extends immediately to simultaneous approximation: for real x₁, …, x_d and N ≥ 1 there is 1 ≤ q ≤ N^d with |qx_i − p_i| < 1/N for all i. This is the starting point of the geometry of numbers.

Liouville's theorem and transcendental numbers

Theorem 9.6 (Liouville, 1844). Let x be a real algebraic number of degree d ≥ 2. There is a constant c(x) > 0 such that |x − p/q| ≥ c(x)/q^d for all integers p and q ≥ 1.

Proof. Let f ∈ ℤ[t] be the minimal polynomial of x, of degree d, scaled to have integer coefficients. Let M = max |f′(t)| over [x − 1, x + 1]. If |x − p/q| ≥ 1 there is nothing to prove once c ≤ 1. Otherwise, f(p/q) ≠ 0 because f is irreducible of degree ≥ 2 and so has no rational root, and qᵈ f(p/q) is a nonzero integer, so |f(p/q)| ≥ 1/qᵈ. By the mean value theorem, |f(p/q)| = |f(x) − f(p/q)| ≤ M|x − p/q|. Hence |x − p/q| ≥ 1/(M qᵈ), and c(x) = min(1, 1/M) works. ∎

Corollary 9.7. The Liouville number L = ∑_{k ≥ 1} 10^(−k!) = 0.110001000000000000000001… is transcendental.

Proof. Let p_n/q_n be the partial sum up to k = n, so q_n = 10^(n!). Then 0 < L − p_n/q_n < 2·10^(−(n+1)!) = 2/q_n^(n+1). If L were algebraic of degree d (d ≥ 2, since its decimal expansion is not eventually periodic), Liouville's theorem would give c/q_n^d < 2/q_n^(n+1) for all n, which fails once n + 1 > d and q_n is large. ∎

The irrationality measure μ(x) is the supremum of the exponents μ for which |x − p/q| < 1/q^μ has infinitely many solutions. Rationals have μ = 1, Dirichlet gives μ ≥ 2 for irrationals, Liouville gives μ ≤ d for algebraic numbers of degree d, and the Thue–Siegel–Roth theorem (Roth, 1955, for which he received the Fields Medal in 1958) gives μ(x) = 2 for every irrational algebraic x. By a theorem of Khinchin, μ(x) = 2 for almost every real x. For e one also has μ(e) = 2, as follows from its continued fraction, whereas for π the best known upper bound, due to Zeilberger and Zudilin (2020), is about 7.103.

✏️ Your Turn

(a) Dirichlet's theorem with x = √2 and N = 10 guarantees some q ≤ 10 with |q√2 − p| < 1/10. Find the smallest such q.
(b) Prove that log₂ 3 is irrational.

Answers: (a) Testing q = 1, …, 5: the distances from q√2 to the nearest integer are about 0.414, 0.172, 0.243, 0.343, 0.071. So q = 5 is the smallest, with |5√2 − 7| ≈ 0.0711 < 0.1. (b) If log₂ 3 = a/b with positive integers a, b, then 2^a = 3^b, impossible because the left side is even and the right side odd.

─────────────────────────────────
Lesson 10: Partial Fractions over an Arbitrary Field
─────────────────────────────────

📌 Key idea of this section:

        If Q = q₁^(e₁) ⋯ q_r^(e_r) with distinct monic irreducibles q_i and deg P < deg Q, then
        P/Q = ∑_i ∑_{j=1}^{e_i} A_ij / q_i^j  uniquely, with deg A_ij < deg q_i.

The setting

Let K be a field. The field of fractions of the polynomial ring K[x] is the field K(x) of rational functions (Lesson 1). Because K[x] is a Euclidean domain, like ℤ, every rational function can be written uniquely as P/Q with Q monic and gcd(P, Q) = 1, and division with remainder writes P/Q = S + R/Q with deg R < deg Q. A rational function with deg P < deg Q is called proper. The partial fraction decomposition expresses every proper rational function as a sum of simple pieces whose denominators are powers of irreducible polynomials.

Theorem 10.1. Let Q ∈ K[x] be monic with factorisation Q = q₁^(e₁) ⋯ q_r^(e_r) into distinct monic irreducible polynomials, and let P ∈ K[x] with deg P < deg Q. Then there are unique polynomials A_ij (1 ≤ i ≤ r, 1 ≤ j ≤ e_i) with deg A_ij < deg q_i and

        P/Q = ∑_{i=1}^{r} ∑_{j=1}^{e_i} A_ij / q_i^j.

Proof of existence. Step 1: splitting coprime factors. Suppose Q = Q₁Q₂ with gcd(Q₁, Q₂) = 1. By Bézout's identity in K[x] there are U, V with UQ₁ + VQ₂ = 1, hence

        P/Q = P(UQ₁ + VQ₂)/(Q₁Q₂) = PV/Q₁ + PU/Q₂.

Divide: PV = S₁Q₁ + R₁ and PU = S₂Q₂ + R₂ with deg R_k < deg Q_k. Then P/Q − R₁/Q₁ − R₂/Q₂ = S₁ + S₂ is a polynomial which is also a proper rational function, so it is 0. Repeating, P/Q is a sum of proper fractions R_i/q_i^(e_i). Step 2: prime powers. Given R/q^e with deg R < e·deg q, expand R in base q (repeated division by q): R = B₁q^(e−1) + B₂q^(e−2) + ⋯ + B_e with deg B_j < deg q. Dividing by q^e gives R/q^e = ∑_j B_j/q^j.

Proof of uniqueness. Let n = deg Q. The proper rational functions with denominator dividing Q form the K-vector space V = {P/Q : deg P < n}, of dimension n. The tuples (A_ij) with deg A_ij < deg q_i form a K-vector space W of dimension ∑_i e_i deg q_i = n. The map W → V sending a tuple to the sum ∑ A_ij/q_i^j is linear and, by existence, surjective; a surjective linear map between spaces of the same finite dimension is injective. ∎

The analogy with ℤ is exact: the same proof shows that every rational number a/n with n = ∏ p^(e_p) can be written uniquely as k + ∑_p ∑_{j} c_pj/p^j with k ∈ ℤ and digits 0 ≤ c_pj < p. For example 1/12 = −1 + 1/2 + 1/4 + 1/3, which reflects the decomposition ℚ/ℤ ≅ ⊕_p ℚ_p/ℤ_p of the group ℚ/ℤ into its p-primary parts.

Computing the coefficients

Simple roots (the cover-up rule). If r ∈ K is a simple root of Q, the coefficient of 1/(x − r) is

        A = P(r)/Q′(r),

because writing Q = (x − r)Q₁ gives Q′(r) = Q₁(r), and multiplying the decomposition by (x − r) and setting x = r leaves A = P(r)/Q₁(r). For example, with Q = x³ − x and Q′ = 3x² − 1,

        1/(x³ − x) = −1/x + (1/2)/(x − 1) + (1/2)/(x + 1),

since Q′(0) = −1 and Q′(±1) = 2.

Repeated roots. If Q = (x − r)^e Q₁ with Q₁(r) ≠ 0, the coefficients of (x − r)^(−e), …, (x − r)^(−1) are the Taylor coefficients of P/Q₁ at r: the coefficient of (x − r)^(−(e−k)) is (1/k!)·(d/dx)^k (P/Q₁) evaluated at r. When Q₁ = 1 this is simply the Taylor expansion of P at r. For instance x² + 1 = (x − 1)² + 2(x − 1) + 2, so

        (x² + 1)/(x − 1)³ = 1/(x − 1) + 2/(x − 1)² + 2/(x − 1)³.

Irreducible quadratics over ℝ. Over ℝ the irreducible polynomials have degree 1 or 2, so numerators are constants or linear. For example x³ + 1 = (x + 1)(x² − x + 1), and the cover-up rule at x = −1 gives the coefficient 1/Q′(−1) = 1/3; the remaining numerator follows by subtraction:

        1/(x³ + 1) = (1/3)/(x + 1) + (−x + 2)/(3(x² − x + 1)).

Check: (x² − x + 1) + (−x + 2)(x + 1) = x² − x + 1 − x² + x + 2 = 3.

Consequences

Integration. Over ℂ every proper rational function is a sum of terms c/(x − r)^j, and over ℝ of such terms together with (Ax + B)/(x² + bx + c)^j. Since all of these have elementary antiderivatives, the integral of every real rational function is a rational function plus a linear combination of logarithms and arctangents. The Hermite–Ostrogradsky method computes the rational part without factoring Q, and the Rothstein–Trager algorithm computes the logarithmic part using only the field generated by the residues; this is the starting point of the Risch algorithm in computer algebra.

The logarithmic derivative. If Q = ∏ (x − r_i)^(e_i) splits over K, then Q′/Q = ∑ e_i/(x − r_i). Expanding each term as a geometric series in 1/x yields Newton's identities between power sums and elementary symmetric functions of the roots.

Generating functions. Linear recurrences have rational generating functions, and partial fractions turn them into closed forms. If F(x) = ∑ F_n xⁿ is the Fibonacci generating function, then F(x) = x/(1 − x − x²) = x/((1 − φx)(1 − ψx)), and the decomposition (1/√5)(1/(1 − φx) − 1/(1 − ψx)) gives Binet's formula F_n = (φⁿ − ψⁿ)/√5.

Telescoping. Partial fractions convert many series into telescoping sums. Since 1/(n(n + 1)) = 1/n − 1/(n + 1), the series ∑_{n ≥ 1} 1/(n(n + 1)) has partial sums 1 − 1/(N + 1) and sum 1.

Infinite partial fractions. For meromorphic functions, the Mittag-Leffler theorem provides infinite analogues; the most famous is

        π cot(πz) = 1/z + ∑_{n ≥ 1} 2z/(z² − n²),

from which comparison of Taylor coefficients at 0 gives Euler's evaluations ζ(2) = π²/6, ζ(4) = π⁴/90 and, in general, ζ(2k) as a rational multiple of π^(2k).

✏️ Your Turn

(a) Decompose (3x + 5)/((x + 1)(x + 3)).
(b) Evaluate ∑_{n ≥ 1} 1/(n(n + 2)).

Answers: (a) Cover-up: at x = −1 the coefficient is (−3 + 5)/(−1 + 3) = 1, and at x = −3 it is (−9 + 5)/(−3 + 1) = 2. So the decomposition is 1/(x + 1) + 2/(x + 3); check: (x + 3) + 2(x + 1) = 3x + 5. (b) 1/(n(n + 2)) = (1/2)(1/n − 1/(n + 2)), and the sum telescopes to (1/2)(1 + 1/2) = 3/4.

─────────────────────────────────
Lesson 11: Egyptian Fractions
─────────────────────────────────

📌 Key idea of this section:

        Every positive rational is a finite sum of distinct unit fractions 1/n.
        Erdős–Straus conjecture (open): 4/n = 1/x + 1/y + 1/z is solvable for every n ≥ 2.

Historical background

The scribes of Middle Kingdom Egypt wrote every fraction other than 2/3 as a sum of distinct unit fractions. The Rhind Mathematical Papyrus, copied by the scribe Ahmes around 1550 BC from an older text, opens with a table expressing 2/n as such a sum for every odd n from 5 to 101; for example

        2/5 = 1/3 + 1/15,     2/7 = 1/4 + 1/28,     2/101 = 1/101 + 1/202 + 1/303 + 1/606.

The principles by which the scribes chose their decompositions are still debated; they generally prefer few terms, small and even denominators. An expression of a rational number as a sum of distinct unit fractions is now called an Egyptian fraction.

The greedy algorithm

Theorem 11.1 (Fibonacci, 1202; Sylvester, 1880). Let 0 < a/b < 1 in lowest terms. Repeatedly subtract the largest unit fraction not exceeding the remainder. This process terminates after at most a steps and produces an Egyptian fraction with strictly increasing denominators.

Proof. The largest unit fraction not exceeding a/b is 1/n with n = ⌈b/a⌉, so n − 1 < b/a ≤ n. The remainder is

        a/b − 1/n = (an − b)/(bn).

Its numerator satisfies 0 ≤ an − b < a, because a(n − 1) < b. Hence the numerators, even before reduction, strictly decrease, and the process stops after at most a steps. For distinctness, the remainder is less than 1/(n − 1) − 1/n = 1/(n(n − 1)) ≤ 1/n when n ≥ 2, because a/b < 1/(n − 1); so the next denominator is strictly larger than n. ∎

For example, for 4/13 we find ⌈13/4⌉ = 4, 4/13 − 1/4 = 3/52, then ⌈52/3⌉ = 18, 3/52 − 1/18 = 2/936 = 1/468, so

        4/13 = 1/4 + 1/18 + 1/468.

The greedy algorithm is simple but can be very inefficient. For 5/121 it produces

        5/121 = 1/25 + 1/757 + 1/763309 + 1/873960180913 + 1/1527612795642093418846225,

whereas 5/121 = 1/33 + 1/121 + 1/363 has only three terms. Other algorithms do much better; for example, Vose (1985) proved that every a/b with 0 < a < b has an Egyptian representation with O(√(log b)) terms.

Sylvester's sequence

Define s₁ = 2 and s_(n+1) = s_n² − s_n + 1, giving 2, 3, 7, 43, 1807, 3263443, …. Then s_(n+1) − 1 = s_n(s_n − 1), so

        1/(s_n − 1) − 1/(s_(n+1) − 1) = 1/(s_n − 1) − 1/(s_n(s_n − 1)) = 1/s_n,

and the sum telescopes:

        1/s₁ + 1/s₂ + ⋯ + 1/s_n = 1 − 1/(s_(n+1) − 1).

For instance 1/2 + 1/3 + 1/7 + 1/43 = 1 − 1/1806, and so 1 = 1/2 + 1/3 + 1/7 + 1/43 + 1/1806. The terms are exactly the denominators produced by the greedy algorithm applied to 1 when at each stage the strict inequality 1/n < remainder is enforced, and Curtiss (1922) proved that 1/s₁ + ⋯ + 1/s_n is the closest approximation to 1 from below by a sum of n unit fractions. The sequence grows doubly exponentially, s_n ≈ E^(2^n) with E ≈ 1.2640.

The Erdős–Straus conjecture

In 1948 Erdős and Straus conjectured that for every integer n ≥ 2,

        4/n = 1/x + 1/y + 1/z

has a solution in positive integers x, y, z (not necessarily distinct). Several reductions are elementary. If the equation holds for n with solution (x, y, z), it holds for every multiple kn with solution (kx, ky, kz); so it suffices to treat prime n. For n = 2, 4/2 = 1/1 + 1/2 + 1/2. Congruence classes yield identities:

        n = 4k − 1:   4/n = 1/k + 1/(kn),                 since (n + 1)/(kn) = 4k/(kn)
        n = 3k − 1:   4/n = 1/n + 1/k + 1/(kn),           since 3/n = (n + 1)/(kn)

and in the two-term case one splits a unit fraction using 1/m = 1/(m + 1) + 1/(m(m + 1)). Every prime p > 3 not covered by these two identities satisfies p ≡ 1 (mod 12). Mordell showed with further identities that the conjecture holds for all n except possibly those with

        n ≡ 1, 121, 169, 289, 361, 529   (mod 840),

which are the squares 1, 11², 13², 17², 19², 23² modulo 840. Polynomial identities of this kind can never cover all residue classes of squares, which is a structural reason why the conjecture is hard. Computations have verified it for all n ≤ 10¹⁷ (Salez, 2014), and Elsholtz and Tao (2013) obtained precise estimates for the average number of solutions. The conjecture remains open, as does Sierpiński's analogous conjecture for 5/n.

Density and colouring results

Erdős and Graham asked many questions about representations of 1 as a sum of distinct unit fractions. Graham (1964) proved that every integer greater than 77 can be written as a sum of distinct positive integers whose reciprocals sum to 1, and that 77 cannot. Croot (2003) proved that in any colouring of the integers ≥ 2 with finitely many colours there is a monochromatic finite set whose reciprocals sum to 1. Bloom (2021) strengthened this to a density statement: every set of positive integers with positive upper density contains a finite subset whose reciprocals sum to 1.

✏️ Your Turn

(a) Apply the greedy algorithm to 3/7.
(b) Find a solution of the Erdős–Straus equation for n = 5.

Answers: (a) ⌈7/3⌉ = 3 and 3/7 − 1/3 = 2/21; ⌈21/2⌉ = 11 and 2/21 − 1/11 = (22 − 21)/231 = 1/231. So 3/7 = 1/3 + 1/11 + 1/231. (b) n = 5 = 3·2 − 1, so the second identity with k = 2 gives 4/5 = 1/5 + 1/2 + 1/10; check: (2 + 5 + 1)/10 = 8/10 = 4/5. Another solution is 4/5 = 1/2 + 1/4 + 1/20.

─────────────────────────────────
Lesson 12: p-adic Absolute Values and the Completions of ℚ
─────────────────────────────────

📌 Key idea of this section:

        |x|_p = p^(−v_p(x)) satisfies |x + y|_p ≤ max(|x|_p, |y|_p).
        Product formula: |x|_∞ · ∏_p |x|_p = 1 for every x ∈ ℚ^×.
        Ostrowski: every nontrivial absolute value on ℚ is equivalent to |·|_∞ or to some |·|_p.

Absolute values

An absolute value on a field K is a function |·|: K → [0, ∞) with |x| = 0 only for x = 0, |xy| = |x||y| and |x + y| ≤ |x| + |y|. It is non-archimedean if it satisfies the stronger ultrametric inequality |x + y| ≤ max(|x|, |y|), and archimedean otherwise. Two absolute values are equivalent if they define the same topology; equivalently, one is a positive power of the other. The trivial absolute value has |x| = 1 for all x ≠ 0.

For a prime p, the p-adic absolute value on ℚ is |x|_p = p^(−v_p(x)), with |0|_p = 0. Multiplicativity is v_p(xy) = v_p(x) + v_p(y), and the ultrametric inequality is v_p(x + y) ≥ min(v_p(x), v_p(y)) from Proposition 3.1. In this metric a number is small when it is divisible by a high power of p: |p^k|_p = p^(−k) → 0, while |1/p^k|_p = p^k. We write |·|_∞ for the usual absolute value.

Ultrametric geometry

Ultrametric spaces look strange to archimedean eyes. If |x|_p ≠ |y|_p then |x + y|_p = max(|x|_p, |y|_p) exactly, the equality case of Proposition 3.1; consequently every triangle is isosceles, with its two longest sides equal. Every point of an open ball is a centre of that ball, two balls are either disjoint or one contains the other, and every ball is both open and closed, so ℚ with |·|_p is totally disconnected. A series ∑ c_k converges in a complete ultrametric field if and only if c_k → 0, a dramatic simplification compared with real analysis.

The product formula

Theorem 12.1. For every x ∈ ℚ^×, |x|_∞ · ∏_p |x|_p = 1, where the product is over all primes and has only finitely many factors different from 1.

Proof. Both sides are multiplicative in x, so it suffices to check x = −1 and x = q prime. For −1 every factor is 1. For x = q we have |q|_∞ = q, |q|_q = 1/q and |q|_p = 1 for p ≠ q. ∎

The product formula expresses the unique factorisation of integers analytically. It is the prototype of the adelic point of view, in which all the completions of ℚ are treated simultaneously, and of the theory of heights in Diophantine geometry.

Ostrowski's theorem

Theorem 12.2 (Ostrowski, 1916). Every nontrivial absolute value on ℚ is equivalent either to |·|_∞ or to |·|_p for exactly one prime p.

Proof of the non-archimedean case. Suppose |·| is non-archimedean and nontrivial. Then |n| = |1 + ⋯ + 1| ≤ 1 for every integer n. If |n| = 1 for all nonzero integers, multiplicativity would make |·| trivial on ℚ; so the set I = {n ∈ ℤ : |n| < 1} is a nonzero ideal of ℤ (closed under addition by the ultrametric inequality, and under multiplication by integers because |m| ≤ 1). It is proper since |1| = 1, and prime since |ab| = |a||b| < 1 forces |a| < 1 or |b| < 1. Hence I = pℤ for a prime p. Writing n = p^v m with p ∤ m, we have |m| = 1 and |n| = |p|^v. Setting |p| = p^(−α) with α > 0, |n| = (p^(−v))^α = |n|_p^α for every integer n, and by multiplicativity for every rational. ∎

Sketch of the archimedean case. Let m, n ≥ 2 be integers. Writing m^k in base n with at most 1 + k log m/log n digits, each of absolute value at most n, gives |m|^k ≤ (1 + k log m/log n)·n·max(1, |n|)^(k log m/log n). Taking k-th roots and letting k → ∞,

        |m| ≤ max(1, |n|)^(log m / log n).

If |·| is archimedean, some integer has |n| > 1 (otherwise the ultrametric inequality would hold), and the inequality then forces |n| > 1 for all n ≥ 2; applying it in both directions gives |m|^(1/log m) = |n|^(1/log n). Hence |n| = n^α for a constant 0 < α ≤ 1, so |·| = |·|_∞^α.

The completions ℚ_p

Completing ℚ with respect to |·|_∞ gives ℝ. Completing with respect to |·|_p gives the field ℚ_p of p-adic numbers, introduced by Hensel in 1897. By Ostrowski's theorem these are all the completions of ℚ. The closed unit ball ℤ_p = {x ∈ ℚ_p : |x|_p ≤ 1} is a ring, the p-adic integers, isomorphic to the inverse limit of the rings ℤ/p^kℤ. Every x ∈ ℚ_p has a unique expansion

        x = ∑_{k ≥ −N} d_k p^k,    d_k ∈ {0, 1, …, p − 1},

convergent because its terms tend to 0. Familiar identities hold in a new form:

        1/(1 − p) = 1 + p + p² + p³ + ⋯,        −1 = (p − 1) + (p − 1)p + (p − 1)p² + ⋯.

In ℚ₂ the geometric series gives −1/3 = 1/(1 − 4) = 1 + 4 + 16 + ⋯, that is, the 2-adic digits of −1/3 are …010101, and 1/3 = 1 + (−2/3) = 1 + 2 + 2³ + 2⁵ + ⋯ has digits …101011. As promised in Lesson 4, a p-adic number is rational if and only if its digit sequence is eventually periodic.

Hensel's lemma and local–global principles

Theorem 12.3 (Hensel's lemma). Let f ∈ ℤ_p[x] and a ∈ ℤ_p with f(a) ≡ 0 (mod p) and f′(a) ≢ 0 (mod p). Then there is a unique α ∈ ℤ_p with f(α) = 0 and α ≡ a (mod p).

The proof is Newton's method: α_(k+1) = α_k − f(α_k)/f′(α_k) converges p-adically, the error being squared at every step. For example, −1 is a square modulo 5 (2² = 4 ≡ −1) and f′(2) = 4 ≢ 0, so √−1 exists in ℤ₅; the successive approximations are 2, 7, 57, … modulo 5, 25, 125, …, because 7² + 1 = 50 and 57² + 1 = 3250 = 26·125. By contrast √2 ∉ ℚ₅, since 2 is not a square modulo 5, while √2 ∈ ℚ₇ because 3² ≡ 2 (mod 7).

The p-adic fields are the setting for local–global principles. The Hasse–Minkowski theorem states that a quadratic form over ℚ represents 0 nontrivially over ℚ if and only if it does so over ℝ and over every ℚ_p. For cubic equations the principle fails: Selmer (1951) showed that 3x³ + 4y³ + 5z³ = 0 has nontrivial solutions in ℝ and in every ℚ_p but none in ℚ. The study of this failure leads to Tate–Shafarevich groups and to the deepest open problems about rational points, such as the conjecture of Birch and Swinnerton-Dyer.

✏️ Your Turn

(a) Compute |x|_v for x = 63/550 at v = ∞, 2, 3, 5, 7, 11, and verify the product formula.
(b) Find the 2-adic expansion of −1/3 and check it by adding 1/3.

Answers: (a) 63 = 3²·7 and 550 = 2·5²·11, so |x|_∞ = 63/550, |x|_2 = 2, |x|_3 = 1/9, |x|_5 = 25, |x|_7 = 1/7, |x|_11 = 11, and all other factors are 1. The product is (63/550)·2·(1/9)·25·(1/7)·11 = (63/550)·(550/63) = 1. (b) −1/3 = 1/(1 − 4) = 1 + 4 + 4² + ⋯, with digits …010101. Adding 1/3, with digits …101011, digit by digit with carries: 1 + 1 = 10 gives 0 carry 1; then 0 + 1 + 1 = 10 gives 0 carry 1; and so on, every digit becoming 0 with a carry that runs off to infinity. The sum is 0, as it should be.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are arranged in three groups. The core problems test the definitions and computational techniques of the lessons. The advanced problems ask for short proofs and longer computations. The challenge problems are substantial: several of them are classical theorems whose proofs require combining ideas from different lessons.

Core (Problems 1–20)

  1. In ℤ/6ℤ, exhibit pairs showing that the relation (a, b) ~ (c, d) ⟺ ad = bc on ℤ/6ℤ × (ℤ/6ℤ ∖ {0}) is not transitive.
  2. Write x/(x + 1) + 1/(x − 1) as a single reduced element of ℚ(x).
  3. Compute v_p(−540/77) for every prime p.
  4. Use the rational root theorem to prove that √12 is irrational.
  5. Find all rational roots of 6x³ − 11x² + 6x − 1.
  6. Write 0.3272727… (the block 27 repeating) as a reduced fraction.
  7. Find the periods of the decimal expansions of 1/13, 1/17 and 1/37.
  8. Find the preperiod and period of 7/120 without dividing, then confirm by computing the expansion.
  9. Write out the Farey sequence F_6.
  10. Compute |F_10|.
  11. Find the neighbours of 5/12 in F_12.
  12. Decide whether the Ford circles are tangent or disjoint: (i) C(5/13) and C(3/8); (ii) C(1/3) and C(3/7).
  13. Find the continued fraction of 415/93 and all its convergents.
  14. Evaluate [1; 2, 3, 4] as a reduced fraction.
  15. Find the continued fraction of √3 and the fundamental solution of x² − 3y² = 1.
  16. Decompose 1/(x² − 4) into partial fractions over ℚ.
  17. Decompose (2x² + 3)/(x(x² + 1)) into partial fractions over ℝ.
  18. Apply the greedy algorithm to 5/6 and to 7/15.
  19. Compute |1/48|_2, |48|_2, |−7/9|_3 and |1000/27|_5.
  20. Compute |3/8|_2, |5/8|_2 and |3/8 + 5/8|_2, and explain how the result illustrates the ultrametric inequality.

Advanced (Problems 21–45)

  21. Prove that every ring homomorphism from ℚ to a field K is injective, and that there is at most one. Deduce that Aut(ℚ) is trivial.
  22. Show directly that every quotient of Gaussian integers lies in ℚ(i), and compute (2 + 3i)/(4 − i).
  23. Prove that ℤ₍ₚ₎ = {a/b ∈ ℚ : p ∤ b} is a local ring with maximal ideal pℤ₍ₚ₎.
  24. Prove that H_n = 1 + 1/2 + ⋯ + 1/n is not an integer for n ≥ 2.
  25. Prove that v_2(H_n) = −⌊log₂ n⌋ for n ≥ 1, and compute v_2(H_20).
  26. Find the period of 1/49, and explain why it equals 7 times the period of 1/7.
  27. Find the period of 1/91 and write out the repeating block.
  28. List the primes p < 50 with p ≠ 2, 5 for which 1/p has period p − 1.
  29. Verify Midy's theorem for 1/17, whose period is 16.
  30. Show that 1/4 = 0.(02) in base 3, and determine the base-3 expansion of 1/2.
  31. Given the consecutive terms 2/7 < 1/3 of F_7, compute the next term using the successor formula.
  32. Prove that b + d > n for consecutive terms a/b < c/d of F_n, and that b ≠ d when n ≥ 2.
  33. Find the Stern–Brocot path of 7/5 and of 13/8, and relate them to the continued fractions.
  34. Evaluate the total area of the Ford circles with base points in [0, 1) to four decimal places, given ζ(3) ≈ 1.2020569 and ζ(4) = π⁴/90.
  35. Compute the convergents of e = [2; 1, 2, 1, 1, 4, 1, 1, …] up to 193/71, and estimate e − 87/32.
  36. Use Theorem 7.2 to bound |π − 355/113| from above and below, given q₄ = 33102 and q₃ = 113.
  37. Is 13/8 a convergent of φ? Check Legendre's criterion for it directly.
  38. Find the first three positive solutions of x² − 2y² = 1.
  39. Find the first three positive solutions of x² − 2y² = −1.
  40. Find the continued fraction of √23 and the fundamental solution of x² − 23y² = 1.
  41. Prove that √2 + √3 is irrational.
  42. Prove that ∑_{n ≥ 1} 2^(−n²) is irrational.
  43. Using Dirichlet's theorem with N = 7, find q ≤ 7 and p with |qπ − p| < 1/7.
  44. Evaluate ∑_{n ≥ 1} 1/(n(n + 1)(n + 2)).
  45. Use partial fractions to find a closed form for the coefficients of 1/((1 − x)(1 − 2x)).

Challenge (Problems 46–60)

  46. Let D be a unique factorisation domain. Prove that every element of Frac(D) has a reduced representation a/b (gcd(a, b) = 1), unique up to multiplying a and b by the same unit.
  47. Prove that Frac(K[[x]]) = K((x)) for a field K.
  48. Prove that a purely periodic continued fraction represents a quadratic irrational, and evaluate the purely periodic expansion with repeating block 1, 2.
  49. Prove that q_n²|φ − p_n/q_n| → 1/√5 for the convergents of the golden ratio, and deduce that √5 in Hurwitz's theorem cannot be replaced by a larger constant.
  50. The continued fraction of √61 has period 11 and p₁₀ = 29718, q₁₀ = 3805. Find the fundamental solution of x² − 61y² = 1.
  51. Prove that the Liouville number L = ∑_{k ≥ 1} 10^(−k!) is transcendental.
  52. Prove that log₁₀ 2 is irrational, deduce that some power of 2 has leading digit 7, and find the least such power.
  53. Prove that it suffices to prove the Erdős–Straus conjecture for primes, and prove it for all n ≡ 3 (mod 4) and all n ≡ 2 (mod 3).
  54. Verify the greedy expansion of 5/121 given in Lesson 11 for its first two steps, and verify that 5/121 = 1/33 + 1/121 + 1/363.
  55. For Sylvester's sequence s₁ = 2, s_(n+1) = s_n² − s_n + 1, prove that ∑_{k=1}^{n} 1/s_k = 1 − 1/(s_(n+1) − 1) and that the s_k are pairwise coprime.
  56. Prove the non-archimedean case of Ostrowski's theorem.
  57. Find the 2-adic expansion of 1/5 and verify that it is eventually periodic.
  58. Use Hensel's lemma to find a 5-adic integer α with α² = −1 and α ≡ 2 (mod 5), to three digits.
  59. Prove the product formula for every x ∈ ℚ^×.
  60. Let N ≥ 2 be a non-square and let (x₁, y₁) be the smallest positive solution of x² − Ny² = 1, with ε = x₁ + y₁√N. Prove that the positive solutions are exactly the (x_k, y_k) defined by x_k + y_k√N = ε^k, k ≥ 1.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. Take (2, 1), (0, 3), (4, 1). Then (2, 1) ~ (0, 3) since 2·3 = 0 = 1·0, and (0, 3) ~ (4, 1) since 0·1 = 0 = 3·4 = 12 ≡ 0. But 2·1 = 2 ≠ 4 = 1·4, so (2, 1) is not related to (4, 1). The failure comes from the zero divisor 3, which cannot be cancelled.
  2. Over the common denominator (x + 1)(x − 1) = x² − 1: (x(x − 1) + (x + 1))/(x² − 1) = (x² + 1)/(x² − 1). The numerator has no real roots and in particular does not vanish at ±1, so the fraction is reduced.
  3. 540 = 2²·3³·5 and 77 = 7·11, so v_2 = 2, v_3 = 3, v_5 = 1, v_7 = −1, v_11 = −1, and v_p = 0 for every other prime.
  4. √12 is a root of the monic polynomial x² − 12. Any rational root would be an integer dividing 12, but 3² = 9 < 12 < 16 = 4², so no integer squares to 12. Hence √12 is irrational.
  5. Candidates are ±1, ±1/2, ±1/3, ±1/6. Substituting, f(1) = 6 − 11 + 6 − 1 = 0, f(1/2) = 6/8 − 11/4 + 3 − 1 = 0 and f(1/3) = 6/27 − 11/9 + 2 − 1 = 0. As a cubic has at most three roots, these are all: f(x) = (x − 1)(2x − 1)(3x − 1).
  6. Let x = 0.3272727…. Then 10x = 3.2727… = 3 + 27/99 = 3 + 3/11 = 36/11, so x = 36/110 = 18/55.
  7. ord_13(10) = 6 (10³ ≡ −1 mod 13, so 10⁶ ≡ 1 and no smaller power works), giving 1/13 = 0.(076923). ord_17(10) = 16 (10 is a primitive root mod 17: 10⁸ ≡ −1 mod 17), so the period is 16. ord_37(10) = 3, since 999 = 27·37, giving 1/37 = 0.(027).
  8. 120 = 2³·3·5, so α = 3, β = 1 and m = 3. The preperiod is max(3, 1) = 3 and the period is ord_3(10) = 1. Indeed 7/120 = 0.058333… = 0.058(3).
  9. F_6: 0/1, 1/6, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 5/6, 1/1 (13 terms = 11 + φ(6)).
  10. |F_10| = 1 + ∑_{k=1}^{10} φ(k) = 1 + (1 + 1 + 2 + 2 + 4 + 2 + 6 + 4 + 6 + 4) = 1 + 32 = 33.
  11. Left neighbour a/b: 5b − 12a = 1 forces b ≡ 5⁻¹ ≡ 5 (mod 12), so b = 5, a = 2, giving 2/5. Right neighbour c/d: 12c − 5d = 1 forces d ≡ 7 (mod 12), so d = 7, c = 3, giving 3/7. Indeed 2/5 = 0.4 < 5/12 ≈ 0.4167 < 3/7 ≈ 0.4286.
  12. (i) 5·8 − 13·3 = 40 − 39 = 1, so C(5/13) and C(3/8) are tangent. (ii) 1·7 − 3·3 = −2, so C(1/3) and C(3/7) are disjoint; by Theorem 6.1 the squared distance between centres exceeds the squared sum of radii by (4 − 1)/(9·49) = 1/147.
  13. 415 = 4·93 + 43, 93 = 2·43 + 7, 43 = 6·7 + 1, 7 = 7·1, so 415/93 = [4; 2, 6, 7]. Numerators: 4, 9, 58, 415; denominators: 1, 2, 13, 93. Convergents: 4, 9/2, 58/13, 415/93.
  14. From the inside: 3 + 1/4 = 13/4, then 2 + 4/13 = 30/13, then 1 + 13/30 = 43/30. (Check with the recurrences: p = 1, 3, 10, 43 and q = 1, 2, 7, 30.)
  15. √3 = 1 + (√3 − 1), and 1/(√3 − 1) = (√3 + 1)/2 = 1 + (√3 − 1)/2, and 2/(√3 − 1) = √3 + 1 = 2 + (√3 − 1). So √3 = [1; 1, 2, 1, 2, …] with period 2. The convergent p₁/q₁ = 2/1 gives 2² − 3·1² = 1, so (2, 1) is the fundamental solution.
  16. Cover-up with Q′ = 2x: at x = 2 the coefficient is 1/4, at x = −2 it is −1/4. So 1/(x² − 4) = (1/4)/(x − 2) − (1/4)/(x + 2).
  17. Write A/x + (Bx + C)/(x² + 1). Cover-up at x = 0 gives A = 3/1 = 3. Then 2x² + 3 = 3(x² + 1) + (Bx + C)x = (3 + B)x² + Cx + 3, so B = −1 and C = 0. Hence (2x² + 3)/(x(x² + 1)) = 3/x − x/(x² + 1).
  18. 5/6: ⌈6/5⌉ = 2 and 5/6 − 1/2 = 1/3, so 5/6 = 1/2 + 1/3. 7/15: ⌈15/7⌉ = 3, 7/15 − 1/3 = 2/15; ⌈15/2⌉ = 8, 2/15 − 1/8 = 1/120. So 7/15 = 1/3 + 1/8 + 1/120.
  19. 48 = 2⁴·3, so |1/48|_2 = 2⁴ = 16 and |48|_2 = 1/16. v_3(−7/9) = −2, so |−7/9|_3 = 9. v_5(1000/27) = 3, so |1000/27|_5 = 1/125.
  20. v_2(3/8) = v_2(5/8) = −3, so both have absolute value 8, while 3/8 + 5/8 = 1 has |1|_2 = 1. The ultrametric inequality gives |x + y|_2 ≤ max(8, 8) = 8, and the inequality is strict here; strictness is possible only because |x|_2 = |y|_2.

Advanced

  21. A ring homomorphism σ: ℚ → K has kernel an ideal of the field ℚ not containing 1, hence zero, so σ is injective. It is determined on ℤ by σ(1) = 1, and then σ(a/b) = σ(a)σ(b)⁻¹ by the uniqueness part of Theorem 1.3. So there is at most one. Any automorphism of ℚ is such a homomorphism into ℚ, and the identity is one, so it is the only automorphism.
  22. (a + bi)/(c + di) = (a + bi)(c − di)/(c² + d²) = ((ac + bd) + (bc − ad)i)/(c² + d²) ∈ ℚ(i). For (2 + 3i)/(4 − i): (2 + 3i)(4 + i)/17 = (8 + 2i + 12i − 3)/17 = (5 + 14i)/17.
  23. ℤ₍ₚ₎ is a subring of ℚ (closed under sums and products because p ∤ b, d implies p ∤ bd). An element a/b (reduced) is a unit iff its inverse b/a lies in ℤ₍ₚ₎, iff p ∤ a. So the non-units are exactly the elements p·(a′/b) with p ∤ b, which form the ideal pℤ₍ₚ₎. A ring whose non-units form an ideal is local, with that ideal as the unique maximal ideal.
  24. This follows from Problem 25, since v_2(H_n) = −⌊log₂ n⌋ < 0 for n ≥ 2 and integers have nonnegative valuations.
  25. Let 2^k ≤ n < 2^(k+1). The term 1/2^k has 2-adic valuation −k, and every other term 1/j (j ≤ n, j ≠ 2^k) has v_2(1/j) > −k, since v_2(j) ≥ k with j ≤ n < 2^(k+1) forces j = 2^k. By the strict ultrametric inequality the sum has valuation exactly −k. For n = 1 both sides are 0. For n = 20, 16 ≤ 20 < 32 gives v_2(H_20) = −4.
  26. ord_7(10) = 6 and 10⁶ = 1000000 = 49·20408 + 8, so 10⁶ ≢ 1 (mod 49). The order modulo 49 divides φ(49) = 42 and is a multiple of 6; the only candidates are 6 and 42, and 6 fails, so the period is 42 = 7·6. This is the lifting rule ord_(p²)(10) = p·ord_p(10) when ord_(p²)(10) ≠ ord_p(10).
  27. 91 = 7·13 and both have period 6, so the period of 1/91 is lcm(6, 6) = 6. Indeed 999999/91 = 10989, so 1/91 = 0.(010989).
  28. The period of 1/p divides p − 1, and equals p − 1 exactly when 10 is a primitive root mod p. Checking the primes 3, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 gives orders 1, 6, 2, 6, 16, 18, 22, 28, 15, 3, 5, 21, 46. The full reptend primes are 7, 17, 19, 23, 29 and 47.
  29. 1/17 = 0.(0588235294117647). The halves are 05882352 and 94117647, and 05882352 + 94117647 = 99999999 = 10⁸ − 1, as Midy's theorem predicts (here 10⁸ ≡ −1 mod 17).
  30. In base 3, 0.(02) = 2/(3² − 1) = 2/8 = 1/4. For 1/2: 3·(1/2) = 3/2 gives digit 1 and remainder 1/2 again, so 1/2 = 0.(1) in base 3, consistent with ∑ 3^(−k) = 1/2.
  31. With a/b = 2/7, c/d = 1/3 and n = 7: κ = ⌊(7 + 7)/3⌋ = 4, so e = 4·1 − 2 = 2 and f = 4·3 − 7 = 5, giving 2/5. Check: 3·2 − 1·5 = 1.
  32. If b + d ≤ n, the mediant (a + c)/(b + d) lies in F_n (it is reduced, by the determinant identity) strictly between a/b and c/d, contradicting consecutiveness. If b = d, then bc − ad = b(c − a) = 1 forces b = d = 1, so the pair is 0/1, 1/1, which are consecutive only in F_1.
  33. 7/5 = [1; 2, 2] and its path is R L L R (1/1 → 2/1 → 3/2 → 4/3 → 7/5), i.e. R¹L²R^(2−1). 13/8 = [1; 1, 1, 1, 2]: its path is R L R L R (1/1 → 2/1 → 3/2 → 5/3 → 8/5 → 13/8), i.e. R¹L¹R¹L¹R^(2−1).
  34. The area is (π/4)·ζ(3)/ζ(4) = (π/4)·1.2020569/1.0823232 ≈ (0.7853982)·(1.1106265) ≈ 0.8723.
  35. With partial quotients 2, 1, 2, 1, 1, 4, 1, 1 the numerators are 2, 3, 8, 11, 19, 87, 106, 193 and the denominators 1, 1, 3, 4, 7, 32, 39, 71. Thus 87/32 = 2.71875 and e − 87/32 ≈ −0.000468. Theorem 7.2 bounds the error by 1/(32·39) ≈ 0.000801, consistent with this.
  36. With q₃ = 113 and q₄ = 33102: 1/(113·(113 + 33102)) < |π − 355/113| < 1/(113·33102), i.e. 2.6643·10⁻⁷ < |π − 355/113| < 2.6734·10⁻⁷. The true value is about 2.6676·10⁻⁷.
  37. The convergents of φ are F_(n+2)/F_(n+1), and 13/8 = F₇/F₆ is one. Directly, |φ − 13/8| ≈ |1.6180340 − 1.625| ≈ 0.0069660 < 1/(2·64) = 0.0078125.
  38. The fundamental solution is (3, 2). Powers of 3 + 2√2: (3 + 2√2)² = 17 + 12√2 and (3 + 2√2)³ = 99 + 70√2. So (3, 2), (17, 12), (99, 70); e.g. 99² − 2·70² = 9801 − 9800 = 1.
  39. The odd powers of 1 + √2 give the solutions of norm −1: (1, 1), (7, 5), (41, 29). Check: 49 − 50 = −1 and 1681 − 1682 = −1.
  40. √23 = [4; 1, 3, 1, 8, …] with period 4. The convergents are 4, 5, 19/4, 24/5, and 24² − 23·5² = 576 − 575 = 1, so the fundamental solution is (24, 5).
  41. If √2 + √3 = r ∈ ℚ, then r² = 5 + 2√6, so √6 = (r² − 5)/2 would be rational. But √6 is a root of x² − 6, and 2² < 6 < 3², so it is irrational. (Alternatively, √2 + √3 is a root of x⁴ − 10x² + 1, whose only possible rational roots ±1 are not roots.)
  42. In base 2 the number has digit 1 exactly at the positions n² = 1, 4, 9, 16, …. The gaps between consecutive 1s, 2n + 1, are unbounded, so the expansion is not eventually periodic (an eventually periodic expansion with infinitely many 1s has bounded gaps). By Theorem 4.1 the number is irrational.
  43. For q = 1, …, 7 the distances from qπ to the nearest integer are about 0.142, 0.283, 0.425, 0.434, 0.292, 0.150, 0.0089. Already q = 1, p = 3 works, since |π − 3| ≈ 0.1416 < 1/7 ≈ 0.1429; the pair q = 7, p = 22 is far better: |7π − 22| ≈ 0.0089 < 1/7.
  44. 1/(n(n + 1)(n + 2)) = (1/2)(1/(n(n + 1)) − 1/((n + 1)(n + 2))), which telescopes to (1/2)·(1/(1·2)) = 1/4.
  45. 1/((1 − x)(1 − 2x)) = A/(1 − x) + B/(1 − 2x) with 1 = A(1 − 2x) + B(1 − x). At x = 1: A = −1; at x = 1/2: B = 2. Hence the coefficient of xⁿ is a_n = 2·2ⁿ − 1 = 2^(n+1) − 1 (check: a₀ = 1, a₁ = 3 = 1 + 2).

Challenge

  46. Given x = c/d ∈ Frac(D), let g be a gcd of c and d (it exists in a UFD) and write c = ga, d = gb; then gcd(a, b) = 1 and x = a/b. If a/b = a′/b′ with both reduced, then ab′ = a′b; every prime factor of b divides ab′ but not a, hence divides b′ with at least the same multiplicity (unique factorisation), so b | b′, and symmetrically b′ | b. Thus b′ = ub with u a unit, and then a′ = ua.
  47. K((x)) is a field containing K[[x]]: a nonzero Laurent series is x^m·u with u ∈ K[[x]] having nonzero constant term, and such u is invertible in K[[x]] (solve for the coefficients of u⁻¹ recursively), so (x^m u)⁻¹ = x^(−m)u⁻¹. Every Laurent series is x^(−N)·g with g ∈ K[[x]], i.e. a quotient of elements of K[[x]]. So K((x)) is the smallest field containing K[[x]], and by Corollary 1.4 it is Frac(K[[x]]).
  48. If y = [b₀; b₁, …, b_(t−1), y], Proposition 7.1 gives y = (yP + P′)/(yQ + Q′) with integer P, P′, Q > 0, Q′, so Qy² + (Q′ − P)y − P′ = 0, and y is irrational since the expansion is infinite. For the block 1, 2: y = 1 + 1/(2 + 1/y) = 1 + y/(2y + 1), so y(2y + 1) = 3y + 1, i.e. 2y² − 2y − 1 = 0, and y = (1 + √3)/2 ≈ 1.366 (the positive root).
  49. Shown in Proposition 8.4: q(qφ − p) = (−(−1)^(n+1) + ψ^(2n+2))/√5 with |ψ| < 1, so q_n²|φ − p_n/q_n| → 1/√5. If c > √5 and |φ − p/q| < 1/(cq²) held infinitely often, all but finitely many of these p/q would be convergents (Legendre, as c > 2), with q² |φ − p/q| < 1/c < 1/√5 for infinitely many n, contradicting the limit.
  50. The period 11 is odd, so p₁₀² − 61q₁₀² = −1: 29718² − 61·3805² = 883159524 − 883159525 = −1. Squaring ε₀ = 29718 + 3805√61 gives the fundamental unit of norm 1: x = 29718² + 61·3805² = 1766319049 and y = 2·29718·3805 = 226153980. So the fundamental solution is (1766319049, 226153980).
  51. See Corollary 9.7. With q_n = 10^(n!) and p_n/q_n the n-th partial sum, 0 < L − p_n/q_n = ∑_{k > n} 10^(−k!) < 2·10^(−(n+1)!) = 2q_n^(−(n+1)). L is irrational since its decimal expansion has unbounded gaps between 1s. If L were algebraic of degree d ≥ 2, Liouville's theorem would give c/q_n^d ≤ 2/q_n^(n+1), i.e. c ≤ 2q_n^(d−n−1) → 0, a contradiction.
  52. If log₁₀ 2 = a/b with a, b ≥ 1, then 2^b = 10^a, so 5^a = 2^(b−a), impossible since 5 ∤ 2^(b−a). Since x = log₁₀ 2 is irrational, the fractional parts {nx} are dense in [0, 1) (by Dirichlet, some {qx} or 1 − {qx} is less than any given ε > 0, and its multiples then step through [0, 1) with steps smaller than ε). Now 2^n begins with 7 iff log₁₀ 7 ≤ {nx} < log₁₀ 8, an interval of positive length, so such n exist. The least is n = 46: 2⁴⁶ = 70368744177664.
  53. If 4/n = 1/x + 1/y + 1/z then 4/(kn) = 1/(kx) + 1/(ky) + 1/(kz); every n ≥ 2 is a multiple of a prime (and 4 = 2·2 is a multiple of 2, handled by 4/2 = 1/1 + 1/2 + 1/2), so primes suffice. For n = 4k − 1: 1/k + 1/(kn) = (n + 1)/(kn) = 4/n, and splitting 1/(kn) = 1/(kn + 1) + 1/(kn(kn + 1)) gives three terms. For n = 3k − 1: 1/k + 1/(kn) = (n + 1)/(kn) = 3/n, so 4/n = 1/n + 1/k + 1/(kn).
  54. ⌈121/5⌉ = 25 and 5/121 − 1/25 = (125 − 121)/3025 = 4/3025. Then ⌈3025/4⌉ = 757 and 4/3025 − 1/757 = (3028 − 3025)/(3025·757) = 3/2289925, and ⌈2289925/3⌉ = 763309, matching the third denominator. For the short form: 1/33 + 1/121 + 1/363 = 11/363 + 3/363 + 1/363 = 15/363 = 5/121.
  55. The identity follows by telescoping as in Lesson 11, using s_(n+1) − 1 = s_n(s_n − 1), and induction: the case n = 1 is 1/2 = 1 − 1/(3 − 1). For coprimality, s_(n+1) − 1 = s_n(s_n − 1) = s_n s_(n−1)(s_(n−1) − 1) = ⋯ = s_n s_(n−1)⋯s₁, so s_(n+1) ≡ 1 modulo every earlier term.
  56. See the proof of Theorem 12.2: |n| ≤ 1 for all integers by the ultrametric inequality; I = {n : |n| < 1} is a nonzero prime ideal pℤ; writing n = p^v m with p ∤ m gives |n| = |p|^v; and |p| = p^(−α) with α > 0 shows |·| = |·|_p^α.
  57. Since 1/(1 − 16) = −1/15 = ∑ 16^k, we get −1/5 = 3·∑ 16^k, with digits …0011 0011 0011 (the block 0011 = 3 repeating). Negation in ℤ₂ is "complement every digit, then add 1", so 1/5 has digits …1100 1100 1101: d₀ = 1, d₁ = 0, d₂ = 1, d₃ = 1 and then the block (0, 0, 1, 1) repeating. Check: 13 + ∑_{k ≥ 1} 12·16^k = 13 + 12·16/(1 − 16) = 13 − 12.8 = 0.2.
  58. Start with α₀ = 2: 2² + 1 = 5. Seek α₁ = 2 + 5t: (2 + 5t)² + 1 = 5 + 20t + 25t² ≡ 5(1 + 4t) (mod 25), so t ≡ 1 (mod 5) and α₁ = 7; check 50 ≡ 0 (mod 25). Seek α₂ = 7 + 25u: 49 + 350u + 1 ≡ 50 + 350u (mod 125), i.e. 2 + 14u ≡ 0 (mod 5), so u ≡ 2 and α₂ = 57; check 57² + 1 = 3250 = 26·125. So α ≡ 57 = 2 + 1·5 + 2·5² (mod 125), with digits 2, 1, 2.
  59. Write x = ±∏ p^(v_p(x)). Then |x|_∞ = ∏ p^(v_p(x)) and |x|_p = p^(−v_p(x)), so the product of all of them is ∏ p^(v_p(x))·p^(−v_p(x)) = 1. Only primes dividing the numerator or denominator contribute factors other than 1.
  60. Since norms multiply, ε^k = x_k + y_k√N has norm 1 and x_k, y_k > 0, so these are solutions. Conversely, let η = x + y√N > 1 with x² − Ny² = 1 and x, y > 0, and choose k ≥ 1 with ε^k ≤ η < ε^(k+1). Then θ = η ε^(−k) = η(x_k − y_k√N) lies in ℤ[√N], has norm 1 and satisfies 1 ≤ θ < ε. If θ > 1, write θ = u + v√N; since θ⁻¹ = u − v√N lies in (0, 1), we get u = (θ + θ⁻¹)/2 > 0 and v√N = (θ − θ⁻¹)/2 > 0, so (u, v) is a positive solution with u + v√N < ε, contradicting minimality. Hence θ = 1 and η = ε^k.

The ideas of this course reach far: the field of fractions underlies localisation in commutative algebra, continued fractions and Ford circles lead to modular forms, Diophantine approximation is an active research field, and the p-adic numbers are central to modern number theory.
