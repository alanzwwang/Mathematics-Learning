Algebraic Equations — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

The elementary theory of equations asks a deceptively simple question: given an equation built from an unknown by the operations of arithmetic, which values of the unknown make it true? For linear equations the answer is completely mechanical, and the introductory course ends with the rule "do the same thing to both sides". This course begins where that one stops. We treat equations the way a graduate algebra course does: as statements about polynomial rings and fields, whose solvability is governed by structure rather than by cleverness.

The story has three strands. The first is computational: systems of linear equations are solved by Gaussian elimination, and the solvability of a system is decided by the rank of a matrix. The second is classical: the Babylonians solved quadratics, the Italian algebraists of the sixteenth century (del Ferro, Tartaglia, Cardano, Ferrari) solved cubics and quartics by radicals, and for almost three centuries afterwards the best mathematicians in Europe tried and failed to do the same for the quintic. The third strand is structural: Lagrange (1770) noticed that the classical formulas work because of how permutations of the roots act on certain auxiliary expressions; Ruffini (1799) and Abel (1824) proved that no general formula in radicals exists for degree five; and Galois (written 1830–1832, published 1846) gave the definitive criterion, attaching to every equation a group whose structure decides whether the equation is solvable by radicals.

Alongside the algebra we need two analytic facts. The fundamental theorem of algebra guarantees that every complex polynomial equation has a complex solution, so that the question is never whether roots exist but how they can be expressed. And when no expression in radicals exists, or when one exists but is useless in practice, we compute roots numerically; Newton's method, with its quadratic convergence, is the workhorse, and its failures are as instructive as its successes.

Throughout, K denotes a field, K[x] the ring of polynomials in one indeterminate over K, and ℤ, ℚ, ℝ, ℂ the integers, rationals, reals and complex numbers. 𝔽ₚ denotes the field ℤ/pℤ for a prime p. For a polynomial f, deg f is its degree and lc(f) its leading coefficient. Proofs are given in full except where a result is standard group theory, which we quote by its usual name.

In this course, you will:

  1. Decide solvability of linear systems by Gaussian elimination and rank, and prove the Rouché–Capelli theorem
  2. Work in the polynomial ring K[x]: division with remainder, the Euclidean algorithm, the factor theorem and multiple roots
  3. Prove the rational root theorem, Gauss's lemma and Eisenstein's criterion, and use them to test irreducibility
  4. Solve quadratic equations over arbitrary fields, including finite fields and characteristic 2
  5. Derive Cardano's formula for the cubic and understand the casus irreducibilis
  6. Solve the quartic by Ferrari's method and its resolvent cubic
  7. Prove the fundamental theorem on symmetric polynomials and use Vieta's formulas and Newton's identities
  8. Compute resultants and discriminants and use them to eliminate variables
  9. Prove the fundamental theorem of algebra
  10. Build field extensions and splitting fields and compute their degrees
  11. State and apply the fundamental theorem of Galois theory
  12. Prove that the general quintic is not solvable by radicals, and exhibit an explicit unsolvable quintic
  13. Analyse Newton's method, prove its quadratic convergence, and count real roots with Sturm sequences

─────────────────────────────────
Lesson 1: Linear Systems, Gaussian Elimination and Rank
─────────────────────────────────

📌 Key idea of this section:

        Ax = b is solvable  ⟺  rank A = rank [A | b]
        If solvable, the solution set is x₀ + ker A, of dimension n − rank A

A system of m linear equations in n unknowns over a field K is written Ax = b, where A is an m × n matrix with entries in K, x ∈ Kⁿ is the column of unknowns and b ∈ Kᵐ. The augmented matrix [A | b] records all the data. Every question about the system is a question about these two matrices.

Elementary row operations

There are three elementary row operations: interchange two rows, multiply a row by a nonzero scalar, and add a multiple of one row to another. Each is invertible and is achieved by left multiplication by an invertible elementary matrix E. Since EAx = Eb holds if and only if Ax = b (multiply by E⁻¹ to go back), row operations on [A | b] never change the solution set. This is the precise content of "doing the same thing to both sides".

Gaussian elimination applies row operations to bring [A | b] to row echelon form: each nonzero row begins with a pivot (a nonzero entry) strictly to the right of the pivot in the row above, and zero rows are at the bottom. Continuing (Gauss–Jordan) one reaches the reduced row echelon form, in which every pivot equals 1 and is the only nonzero entry of its column. The reduced form is unique: it depends only on the row space of the matrix, not on the sequence of operations used.

Worked example A. Solve the system

        x +  y +  z = 6
        2x −  y + 3z = 9
        x + 4y −  z = 6

Subtract 2 × (row 1) from row 2 and row 1 from row 3:

        x +  y +  z = 6
            −3y +  z = −3
             3y − 2z = 0

Add row 2 to row 3, giving −z = −3, so z = 3. Back-substitution gives −3y + 3 = −3, so y = 2, and then x = 6 − 2 − 3 = 1. The unique solution is (x, y, z) = (1, 2, 3). There are three pivots in three columns, so there are no free variables.

Rank and the Rouché–Capelli theorem

The rank of A is the dimension of its column space, which equals the dimension of its row space and equals the number of pivots in any echelon form. Row operations preserve the row space, hence the rank, of both A and [A | b].

Theorem 1.1 (Rouché–Capelli). The system Ax = b has a solution if and only if rank A = rank [A | b]. In that case, if x₀ is any one solution, the set of all solutions is x₀ + ker A = {x₀ + v : Av = 0}, an affine subspace of dimension n − rank A.

Proof. The product Ax is the linear combination x₁a₁ + ⋯ + xₙaₙ of the columns aⱼ of A. Hence Ax = b is solvable if and only if b lies in the column space of A, which happens if and only if adjoining b as an extra column does not increase the dimension of the column space, that is, rank [A | b] = rank A. If Ax₀ = b, then Ax = b ⟺ A(x − x₀) = 0 ⟺ x − x₀ ∈ ker A. Finally, the rank–nullity theorem gives dim ker A = n − rank A. ∎

In echelon form the theorem becomes visible: the system is inconsistent exactly when some row reads 0 = c with c ≠ 0, which is a pivot in the last column of [A | b]. Otherwise the n − r non-pivot columns correspond to free variables, which may be chosen arbitrarily, and the r pivot variables are then determined.

Worked example B. For which c is the following system consistent?

        x + 2y +  3z = 1
        2x + 4y +  7z = 3
        3x + 6y + 10z = c

Row 2 − 2 × row 1 gives z = 1; row 3 − 3 × row 1 gives z = c − 3. Subtracting these, the last row of the echelon form reads 0 = c − 4. So rank A = 2 always, while rank [A | b] = 2 when c = 4 and 3 otherwise. For c = 4 the solutions are z = 1, y = t free, x = 1 − 3 − 2t = −2 − 2t: a line in K³, of dimension 3 − 2 = 1, as the theorem predicts.

Square systems, determinants and Cramer's rule

When m = n, the following are equivalent: A is invertible; det A ≠ 0; rank A = n; ker A = 0; Ax = b has exactly one solution for every b. In that case Cramer's rule expresses the solution as xᵢ = det Aᵢ / det A, where Aᵢ is A with column i replaced by b. Cramer's rule is valuable theoretically (it shows the solution is a rational function of the data, a fact used in Lesson 8), but it is a poor algorithm: computing n + 1 determinants by cofactor expansion costs on the order of n · n! operations, while Gaussian elimination costs about 2n³/3.

Cost, stability and pivoting

Over ℚ, elimination is exact but the entries can grow; fraction-free variants (Bareiss) keep all intermediate entries integral and polynomially bounded. Over ℝ in floating point, one chooses at each step the entry of largest absolute value in the current column as pivot (partial pivoting). Without pivoting, a tiny pivot can amplify rounding errors catastrophically; with partial pivoting, Gaussian elimination is backward stable for all practical purposes, although Wilkinson constructed matrices for which the element growth factor reaches 2ⁿ⁻¹. These considerations are the origin of numerical linear algebra as a discipline.

The linear case is the template for everything that follows. The solution set of a linear system is always empty or a translate of a subspace, and its existence is decided by an invariant (rank) computed by a finite algorithm. For nonlinear polynomial equations the solution sets are algebraic varieties, the role of Gaussian elimination is played by resultants and Gröbner bases, and the existence question in one variable is settled by the fundamental theorem of algebra.

✏️ Your Turn

(a) Solve x + y + z = 2, x − y + 2z = 9, 2x + y − z = −3.
(b) For which values of a does the system x + ay = 1, ax + y = 1 have no solution?

Answers: (a) Eliminating x: −2y + z = 7 and −y − 3z = −7. From the first, z = 7 + 2y; substituting, −y − 21 − 6y = −7, so y = −2, z = 3, x = 1. The solution is (1, −2, 3). (b) det = 1 − a². For a ≠ ±1 there is a unique solution x = y = 1/(1 + a). For a = 1 both equations are x + y = 1, with infinitely many solutions. For a = −1 the equations are x − y = 1 and −x + y = 1; adding gives 0 = 2, so there is no solution exactly when a = −1.

─────────────────────────────────
Lesson 2: Polynomial Rings over a Field
─────────────────────────────────

📌 Key idea of this section:

        f = qg + r with deg r < deg g          (division with remainder)
        f(a) = 0  ⟺  (x − a) divides f       (factor theorem)
        a nonzero f ∈ K[x] has at most deg f roots in K

A polynomial over K is a finite formal sum f = aₙxⁿ + ⋯ + a₁x + a₀ with aᵢ ∈ K. Formally, f is the sequence (a₀, a₁, …) with only finitely many nonzero terms; the indeterminate x is not a number but a symbol, and two polynomials are equal precisely when their coefficient sequences agree. This distinction matters over finite fields: over 𝔽ₚ the polynomials xᵖ and x are different (their coefficients differ), although by Fermat's little theorem they define the same function 𝔽ₚ → 𝔽ₚ.

Degree and integral domains

If f, g ≠ 0 then lc(fg) = lc(f) lc(g) ≠ 0, because a field has no zero divisors. Hence deg(fg) = deg f + deg g, K[x] is an integral domain, and its units are exactly the nonzero constants. With the convention deg 0 = −∞ the degree formula holds for all f, g.

Theorem 2.1 (Division with remainder). Let g ∈ K[x] be nonzero. For every f ∈ K[x] there are unique q, r ∈ K[x] with f = qg + r and deg r < deg g.

Proof. Existence, by induction on deg f. If deg f < deg g take q = 0, r = f. Otherwise let deg f = n ≥ m = deg g and put f₁ = f − (lc(f)/lc(g)) xⁿ⁻ᵐ g. The leading terms cancel, so deg f₁ < n, and by induction f₁ = q₁g + r with deg r < m; then f = (q₁ + (lc(f)/lc(g))xⁿ⁻ᵐ)g + r. Uniqueness: if qg + r = q′g + r′, then (q − q′)g = r′ − r. The right side has degree < m, while the left side has degree ≥ m unless q = q′. Hence q = q′ and r = r′. ∎

The only place a division by a coefficient occurs is by lc(g). So the same argument works over any commutative ring provided g is monic (or lc(g) is a unit). This remark is what makes the factor theorem valid over every commutative ring.

Worked example. Divide f = x⁴ − 3x³ + 2x − 5 by g = x² + x − 1. The first quotient term is x²; f − x²g = −4x³ + x² + 2x − 5. Next −4x: adding 4xg gives 5x² − 2x − 5. Next 5: subtracting 5g gives −7x. Hence

        x⁴ − 3x³ + 2x − 5 = (x² + x − 1)(x² − 4x + 5) − 7x

Check: (x² + x − 1)(x² − 4x + 5) = x⁴ − 3x³ + 9x − 5, and subtracting 7x gives the original polynomial.

The factor theorem and counting roots

Theorem 2.2 (Factor theorem). Let R be a commutative ring, f ∈ R[x], a ∈ R. Then f = (x − a)q + f(a) for some q ∈ R[x]. In particular f(a) = 0 if and only if (x − a) divides f.

Proof. Divide by the monic polynomial x − a: f = (x − a)q + r with r a constant. Evaluating at a gives r = f(a). ∎

Corollary 2.3. Over an integral domain, a nonzero polynomial of degree n has at most n roots.

Proof. Induction on n. If f(a) = 0 then f = (x − a)q with deg q = n − 1. If f(b) = 0 with b ≠ a, then (b − a)q(b) = 0 and, since there are no zero divisors and b − a ≠ 0, q(b) = 0. So every root other than a is a root of q, which has at most n − 1 roots. ∎

The hypothesis is essential. In ℤ/8ℤ, which has zero divisors, the polynomial x² − 1 has four roots: 1, 3, 5, 7. Over the noncommutative ring of quaternions, x² + 1 has infinitely many roots (every unit pure quaternion). The corollary has a famous consequence: a finite subgroup of the multiplicative group of a field is cyclic. (If the group G had exponent e < |G|, all of its elements would be roots of xᵉ − 1, more than e roots; and a finite abelian group whose exponent equals its order is cyclic.) In particular 𝔽ₚˣ is cyclic of order p − 1: primitive roots exist.

The Euclidean algorithm and ideals

Because of division with remainder, K[x] is a Euclidean domain, hence a principal ideal domain and a unique factorization domain. The greatest common divisor of f and g is the monic generator of the ideal (f, g), and the Euclidean algorithm computes it together with Bézout coefficients u, v with uf + vg = gcd(f, g). A nonconstant polynomial is irreducible if it is not a product of two polynomials of smaller degree. Every nonconstant polynomial is a product of irreducibles, uniquely up to order and constant factors.

Theorem 2.4. For p ∈ K[x] nonconstant, the quotient ring K[x]/(p) is a field if and only if p is irreducible.

Proof. If p = gh with g, h of smaller degree, the classes of g and h are nonzero but multiply to zero, so the quotient is not a domain. Conversely, if p is irreducible and p does not divide f, then gcd(f, p) = 1, so uf + vp = 1 and the class of u inverts the class of f. ∎

Worked example. In ℚ[x], compute gcd(x⁴ − 1, x³ + 2x² + 2x + 1). Dividing, x⁴ − 1 = (x − 2)(x³ + 2x² + 2x + 1) + (2x² + 3x + 1). Then x³ + 2x² + 2x + 1 = ((1/2)x + 1/4)(2x² + 3x + 1) + (3/4)(x + 1), and 2x² + 3x + 1 = (2x + 1)(x + 1). The last nonzero remainder, made monic, is x + 1. Indeed x⁴ − 1 = (x − 1)(x + 1)(x² + 1) and x³ + 2x² + 2x + 1 = (x + 1)(x² + x + 1).

Multiple roots and the formal derivative

Define the formal derivative D(∑ aᵢxⁱ) = ∑ i aᵢ xⁱ⁻¹. It is K-linear and satisfies the Leibniz rule, with no analysis involved. A root a of f is multiple if (x − a)² divides f.

Proposition 2.5. a is a multiple root of f if and only if f(a) = f′(a) = 0. Consequently f has a multiple root in some extension field if and only if gcd(f, f′) ≠ 1.

Proof. Write f = (x − a)ᵐ g with g(a) ≠ 0 and m ≥ 1. Then f′ = (x − a)ᵐ⁻¹(mg + (x − a)g′), so if m ≥ 2 then f′(a) = 0, while if m = 1 then f′(a) = g(a) ≠ 0. For the second statement, note that the gcd of f and f′ does not change when the field is enlarged, since it is computed by the Euclidean algorithm inside K[x]. ∎

The proposition makes a polynomial's multiple roots detectable without finding any roots, and it shows that an irreducible f over a field of characteristic 0 has distinct roots: gcd(f, f′) is a divisor of the irreducible f of smaller degree than f, hence 1. In characteristic p this can fail, because f′ may vanish identically: over the field 𝔽ₚ(t), the polynomial xᵖ − t is irreducible yet has a single root of multiplicity p in its splitting field. Fields in which this pathology cannot occur are called perfect; ℚ and all finite fields are perfect.

✏️ Your Turn

(a) Find the remainder when x¹⁰⁰ is divided by x² − 1.
(b) Find all multiple roots of f = x⁴ − 2x³ + 2x − 1 by computing gcd(f, f′).

Answers: (a) Write x¹⁰⁰ = q(x)(x² − 1) + ax + b. Substituting x = 1 and x = −1 gives a + b = 1 and −a + b = 1, so a = 0, b = 1: the remainder is 1. (b) f′ = 4x³ − 6x² + 2 = 2(x − 1)²(2x + 1). Since f = (x − 1)³(x + 1), gcd(f, f′) = (x − 1)², so 1 is the only multiple root (of multiplicity 3).

─────────────────────────────────
Lesson 3: Factorization over ℤ and ℚ
─────────────────────────────────

📌 Key idea of this section:

        rational root r/s in lowest terms of aₙxⁿ + ⋯ + a₀ ∈ ℤ[x]:  r | a₀ and s | aₙ
        Gauss: content(fg) = content(f) · content(g)
        Eisenstein: p | aᵢ (i < n), p ∤ aₙ, p² ∤ a₀  ⟹  f irreducible over ℚ

Over ℚ, irreducibility is subtle: there are irreducible polynomials of every degree, and deciding irreducibility is a genuine algorithmic problem. The tools of this lesson pass between ℚ[x] and ℤ[x], where divisibility of integers gives traction.

The rational root theorem

Theorem 3.1. Let f = aₙxⁿ + ⋯ + a₀ ∈ ℤ[x] with aₙa₀ ≠ 0. If r/s is a root with gcd(r, s) = 1, then r divides a₀ and s divides aₙ.

Proof. Multiply f(r/s) = 0 by sⁿ: aₙrⁿ + aₙ₋₁rⁿ⁻¹s + ⋯ + a₀sⁿ = 0. Every term except a₀sⁿ is divisible by r, so r | a₀sⁿ, and since gcd(r, s) = 1, r | a₀. Similarly every term except aₙrⁿ is divisible by s, so s | aₙ. ∎

In particular a monic integer polynomial has only integer rational roots; this is why √2, ∛5 and in general ᵏ√N for a positive integer N that is not a perfect k-th power are irrational. Example: the candidates for 2x³ − 3x² − 3x + 2 are ±1, ±2, ±1/2. Testing gives roots 2, −1 and 1/2, so 2x³ − 3x² − 3x + 2 = (x − 2)(x + 1)(2x − 1).

A polynomial of degree 2 or 3 over a field is irreducible if and only if it has no root in that field, since any factorization would include a linear factor. For degree 2 and 3 over ℚ, the rational root theorem therefore decides irreducibility. For degree 4 this is no longer enough: (x² + 1)² has no rational root but is reducible.

Content and Gauss's lemma

The content c(f) of a nonzero f ∈ ℤ[x] is the gcd of its coefficients; f is primitive if c(f) = 1. Every nonzero f ∈ ℚ[x] can be written as f = c · f₀ with c ∈ ℚ positive and f₀ ∈ ℤ[x] primitive, uniquely.

Lemma 3.2 (Gauss). The product of two primitive polynomials is primitive. Hence c(fg) = c(f)c(g).

Proof. Suppose f, g are primitive but a prime p divides every coefficient of fg. Reduce modulo p: the map ℤ[x] → 𝔽ₚ[x] is a ring homomorphism, so f̄ ḡ = 0 in 𝔽ₚ[x]. As 𝔽ₚ[x] is an integral domain, f̄ = 0 or ḡ = 0, meaning p divides all coefficients of f or of g, a contradiction. The formula for contents follows by writing f = c(f)f₀, g = c(g)g₀. ∎

Theorem 3.3. If a primitive f ∈ ℤ[x] factors in ℚ[x] as f = gh with deg g, deg h ≥ 1, then it factors in ℤ[x] as f = g₁h₁ with g₁, h₁ rational multiples of g, h. Consequently ℤ[x] is a unique factorization domain, whose irreducible elements are the primes of ℤ and the primitive polynomials irreducible in ℚ[x] (up to sign).

Proof. Write g = αg₀ and h = βh₀ with α, β ∈ ℚ positive and g₀, h₀ primitive. Then f = αβ g₀h₀, and by Gauss's lemma g₀h₀ is primitive. Writing αβ = r/s in lowest terms, s f = r g₀h₀, and comparing contents gives s = r, so αβ = 1 and f = g₀h₀. The statement about unique factorization follows by combining unique factorization in ℚ[x] with that in ℤ. ∎

The same argument works for any UFD R in place of ℤ, with its field of fractions in place of ℚ; inductively, R[x₁, …, xₙ] is a UFD whenever R is. This is how one knows, for instance, that ℤ[x, y] and K[x₁, …, xₙ] have unique factorization.

Eisenstein's criterion

Theorem 3.4 (Eisenstein, 1850; Schönemann, 1846). Let f = aₙxⁿ + ⋯ + a₀ ∈ ℤ[x] and p a prime with p | aᵢ for all i < n, p ∤ aₙ and p² ∤ a₀. Then f is irreducible in ℚ[x].

Proof. Dividing by the content (which is prime to p) we may assume f primitive, and by Theorem 3.3 it suffices to rule out a factorization f = gh in ℤ[x] with deg g = k, deg h = n − k, both at least 1. Reduce modulo p: f̄ = āₙxⁿ with āₙ ≠ 0. The degrees of g and h do not drop, because their leading coefficients multiply to aₙ, which p does not divide. Since 𝔽ₚ[x] has unique factorization and x is irreducible, ḡ = bxᵏ and h̄ = cxⁿ⁻ᵏ with b, c ≠ 0. As k, n − k ≥ 1, the constant terms of g and h are both divisible by p, so p² divides their product a₀, a contradiction. ∎

Eisenstein's criterion shows that xⁿ − p is irreducible over ℚ for every n ≥ 1 and every prime p, so ℚ has extensions of every degree. It often applies after a change of variable x ↦ x + c, which preserves irreducibility. The classical example is the cyclotomic polynomial Φₚ(x) = xᵖ⁻¹ + ⋯ + x + 1 = (xᵖ − 1)/(x − 1) for p prime:

        Φₚ(x + 1) = ((x + 1)ᵖ − 1)/x = xᵖ⁻¹ + C(p, p−1)xᵖ⁻² + ⋯ + C(p, 2)x + p

All binomial coefficients C(p, k) with 0 < k < p are divisible by p, and the constant term is p, so Eisenstein applies with the prime p.

Reduction modulo p

If f ∈ ℤ[x] is primitive, p ∤ lc(f), and the reduction f̄ ∈ 𝔽ₚ[x] is irreducible, then f is irreducible over ℚ (a factorization in ℤ[x] would reduce to one with the same degrees). The converse fails badly: x⁴ + 1 is irreducible over ℚ (apply Eisenstein to (x + 1)⁴ + 1 = x⁴ + 4x³ + 6x² + 4x + 2 with p = 2) but it is reducible modulo every prime. Modulo 2 it is (x + 1)⁴, and modulo 3 it is (x² + x + 2)(x² + 2x + 2). The underlying reason is that its Galois group is the Klein four-group, which has no element of order 4 (Lesson 11). Practical factoring algorithms (Berlekamp, Cantor–Zassenhaus, then Hensel lifting and the lattice-based method of van Hoeij) factor modulo a prime, lift the factorization p-adically, and recombine the lifted factors; the Lenstra–Lenstra–Lovász algorithm (1982) made this provably polynomial-time.

✏️ Your Turn

(a) Find all rational roots of 3x³ − x² − 12x + 4.
(b) Prove that Φ₅(x) = x⁴ + x³ + x² + x + 1 is irreducible over ℚ.

Answers: (a) Grouping, 3x³ − x² − 12x + 4 = x²(3x − 1) − 4(3x − 1) = (3x − 1)(x² − 4), so the rational roots are 1/3, 2 and −2 (all of which appear in the list ±1, ±2, ±4, ±1/3, ±2/3, ±4/3 of candidates). (b) Φ₅(x + 1) = ((x + 1)⁵ − 1)/x = x⁴ + 5x³ + 10x² + 10x + 5, which is Eisenstein at p = 5; hence Φ₅(x + 1), and therefore Φ₅(x), is irreducible.

─────────────────────────────────
Lesson 4: Quadratic Equations over Arbitrary Fields
─────────────────────────────────

📌 Key idea of this section:

        char K ≠ 2:  ax² + bx + c = 0  ⟺  (2ax + b)² = b² − 4ac
        roots exist in K  ⟺  the discriminant b² − 4ac is a square in K

The quadratic formula is not a fact about real numbers; it is an identity valid in every field in which 2 is invertible. Seeing it this way explains where the formula breaks and what replaces it.

Completing the square

Let K be a field with char K ≠ 2 and a ≠ 0. Multiplying ax² + bx + c = 0 by 4a (an invertible operation) gives 4a²x² + 4abx + 4ac = 0, that is

        (2ax + b)² = b² − 4ac = Δ

So the equation has a root in K if and only if Δ is a square in K, and then the roots are x = (−b ± δ)/(2a), where δ² = Δ. If Δ = 0 there is a double root −b/(2a); if Δ is a nonzero square there are two distinct roots; otherwise the polynomial is irreducible over K and its roots lie in the quadratic extension K(√Δ) = K[t]/(t² − Δ). Every quadratic extension of K arises this way: if [L : K] = 2 and α ∈ L∖K, then α satisfies a quadratic over K, and completing the square shows L = K(√Δ) for some non-square Δ ∈ K.

Vieta's relations for the quadratic state that the roots α, β satisfy α + β = −b/a and αβ = c/a, and the discriminant is

        Δ = a²(α − β)²

This form generalizes to every degree (Lesson 8): the discriminant is, up to a power of the leading coefficient, the product of the squared differences of the roots.

Quadratics over finite fields

Over 𝔽ₚ with p odd, the nonzero squares form the subgroup of index 2 in the cyclic group 𝔽ₚˣ, so exactly (p − 1)/2 nonzero elements are squares. Euler's criterion decides squareness: for a ≢ 0, a is a square modulo p if and only if a^((p−1)/2) ≡ 1 (mod p). (If g is a generator, gᵏ is a square exactly when k is even, and (gᵏ)^((p−1)/2) = (−1)ᵏ.) Quadratic reciprocity then makes the computation efficient for large p.

Worked example. Over 𝔽₅ solve x² + x + 3 = 0. The discriminant is 1 − 12 = −11 ≡ 4 = 2², so the roots are (−1 ± 2)/2. Since 2⁻¹ = 3 in 𝔽₅, these are 1 · 3 = 3 and (−3) · 3 = −9 ≡ 1. Check: 3² + 3 + 3 = 15 ≡ 0 and 1 + 1 + 3 = 5 ≡ 0. Vieta: 3 + 1 = 4 ≡ −1 and 3 · 1 = 3, as required.

Worked example. Over 𝔽₇, x² + 3x + 4 has Δ = 9 − 16 = −7 ≡ 0, so it has the double root −3/2 = −3 · 4 = −12 ≡ 2. Indeed (x − 2)² = x² − 4x + 4 ≡ x² + 3x + 4 mod 7, since −4 ≡ 3.

Characteristic 2

When char K = 2, the derivative of x² + bx + c is b, and the substitution trick collapses because 2a = 0. If b = 0 the equation is x² = c, which has the root √c, a double root, whenever c is a square; over a finite field of characteristic 2 every element is a square, because the Frobenius map x ↦ x² is injective and hence bijective. If b ≠ 0, substitute x = by to obtain the Artin–Schreier form

        y² + y = d,    d = c/b²

The map y ↦ y² + y is additive in characteristic 2, with kernel {0, 1}. Over 𝔽 with 2ᵏ elements its image is the kernel of the absolute trace Tr(d) = d + d² + d⁴ + ⋯ + d^(2^(k−1)), so y² + y = d is solvable if and only if Tr(d) = 0. Over 𝔽₂ itself the trace is the identity, so y² + y + 1 has no root: it is the unique irreducible quadratic over 𝔽₂, and 𝔽₄ = 𝔽₂[y]/(y² + y + 1).

Counting irreducible quadratics

Over 𝔽_q there are q² monic quadratics, and the reducible ones are (x − α)(x − β) with {α, β} a multiset of size 2 from 𝔽_q, giving q(q + 1)/2 of them. Hence the number of monic irreducible quadratics is q² − q(q + 1)/2 = (q² − q)/2. For q = 2 this is 1, for q = 3 it is 3 (namely x² + 1, x² + x + 2, x² + 2x + 2), for q = 5 it is 10. Gauss's general formula, proved via the factorization of x^(qⁿ) − x as the product of all monic irreducibles of degree dividing n, gives (1/n) ∑_{d | n} μ(d) q^(n/d) monic irreducibles of degree n.

Quadratic forms and geometry

Solving ax² + bxy + cy² = 0 projectively is the same problem, and over ℚ the deeper question of solving ax² + by² = cz² in integers is answered by Legendre's theorem and, more generally, by the Hasse–Minkowski local-global principle: a quadratic form over ℚ represents 0 nontrivially if and only if it does so over ℝ and over every p-adic field ℚₚ. No such principle holds for cubic equations (Selmer's example 3x³ + 4y³ + 5z³ = 0 has nontrivial solutions everywhere locally but none in ℚ), which is one sign of how much harder degree three is.

✏️ Your Turn

(a) Does x² + 4x + 1 have a root in 𝔽₇?
(b) Solve y² + y = 1 over 𝔽₄ = {0, 1, ω, ω²}, where ω² = ω + 1.

Answers: (a) Δ = 16 − 4 = 12 ≡ 5 (mod 7). The nonzero squares modulo 7 are 1, 4, 2, so 5 is not a square (equivalently 5³ = 125 ≡ 6 ≡ −1). There is no root; the polynomial is irreducible over 𝔽₇. (b) Over 𝔽₄ the trace of 1 is 1 + 1 = 0, so solutions exist. Try y = ω: ω² + ω = (ω + 1) + ω = 1. The other solution is ω + 1 = ω². Thus y ∈ {ω, ω²}, the two roots of y² + y + 1.

─────────────────────────────────
Lesson 5: The Cubic — Cardano's Formula and the Casus Irreducibilis
─────────────────────────────────

📌 Key idea of this section:

        t³ + pt + q = 0,   D = q²/4 + p³/27
        t = ∛(−q/2 + √D) + ∛(−q/2 − √D),   with the two cube roots chosen so that their product is −p/3

The solution of the cubic is the great achievement of Renaissance algebra. Scipione del Ferro (c. 1515) solved the depressed cubic but kept the method secret; Niccolò Tartaglia rediscovered it in 1535; Gerolamo Cardano, having obtained it from Tartaglia under a promise of secrecy, published it in the Ars Magna (1545) after learning of del Ferro's priority. Since negative numbers were then distrusted, the sixteenth-century authors treated a dozen separate cases such as "cube and things equal to number". We treat them all at once, over ℂ.

Depressing the cubic

Let ax³ + bx² + cx + d = 0 with a ≠ 0, over a field of characteristic not 2 or 3. The substitution x = t − b/(3a) removes the quadratic term (the Tschirnhaus translation), leaving the depressed cubic

        t³ + pt + q = 0,   p = (3ac − b²)/(3a²),   q = (2b³ − 9abc + 27a²d)/(27a³)

The translation shifts every root by b/(3a), so it changes neither the differences of the roots nor the discriminant. In general, a translation removes the term of degree n − 1 from any polynomial of degree n; Tschirnhaus (1683) hoped that more elaborate substitutions y = g(x) would remove further terms and eventually solve every equation. For the quintic one can indeed reach the Bring–Jerrard form y⁵ + ay + b, but no further simplification yields a solution, for reasons that Lesson 12 makes precise.

Cardano's formula

Try t = u + v. Then t³ = u³ + v³ + 3uv(u + v), so

        t³ − 3uv · t − (u³ + v³) = 0

This matches t³ + pt + q = 0 if 3uv = −p and u³ + v³ = −q. Then u³ and v³ have sum −q and product −p³/27, so they are the two roots of the resolvent quadratic z² + qz − p³/27 = 0:

        u³, v³ = −q/2 ± √D,   D = q²/4 + p³/27

Each of u³ and v³ has three cube roots in ℂ. If u is one cube root of u³, the condition uv = −p/3 fixes v, and the three solutions are

        t₁ = u + v,   t₂ = ωu + ω²v,   t₃ = ω²u + ωv,   ω = e^(2πi/3) = (−1 + i√3)/2

(Replacing u by ωu forces v to be replaced by ω²v to keep uv fixed.) A direct check using 1 + ω + ω² = 0 confirms that t₁ + t₂ + t₃ = 0 and that these three numbers are the roots.

Worked example (Cardano's own). Solve x³ + 6x = 20. Here p = 6, q = −20, D = 100 + 8 = 108, and

        x = ∛(10 + √108) + ∛(10 − √108) = ∛(10 + 6√3) + ∛(10 − 6√3)

Since (1 + √3)³ = 1 + 3√3 + 9 + 3√3 = 10 + 6√3, and similarly (1 − √3)³ = 10 − 6√3, this is (1 + √3) + (1 − √3) = 2. Dividing, x³ + 6x − 20 = (x − 2)(x² + 2x + 10), and the other roots are −1 ± 3i. The formula delivered the integer 2 in a disguise that takes some effort to remove: denesting radicals is itself a nontrivial problem (Landau, 1992, gave an algorithm).

The discriminant and the nature of the roots

The discriminant of t³ + pt + q, defined by Δ = (t₁ − t₂)²(t₁ − t₃)²(t₂ − t₃)², equals

        Δ = −4p³ − 27q² = −108 D

For the full cubic ax³ + bx² + cx + d one has Δ = b²c² − 4ac³ − 4b³d − 27a²d² + 18abcd. For real coefficients the sign of Δ classifies the roots. If Δ > 0 the three roots are real and distinct. If Δ = 0 there is a repeated root, and all roots are real. If Δ < 0 there is one real root and a pair of non-real complex conjugate roots. Proof: if the roots are real and distinct, every factor (tᵢ − tⱼ)² is positive. If t₁ is real and t₂, t₃ = σ ± iτ with τ ≠ 0, then (t₂ − t₃)² = −4τ² < 0 while (t₁ − t₂)(t₁ − t₃) = |t₁ − t₂|² > 0, so Δ < 0.

The casus irreducibilis

Since Δ = −108D, three distinct real roots occur exactly when D < 0, and then √D is imaginary: Cardano's formula expresses real numbers through cube roots of non-real numbers. Rafael Bombelli (L'Algebra, 1572) confronted this with x³ = 15x + 4, which has the obvious root 4. Here p = −15, q = −4 and D = 4 − 125 = −121, so

        x = ∛(2 + 11i) + ∛(2 − 11i)

Bombelli observed that (2 + i)³ = 8 + 12i − 6 − i = 2 + 11i, so with u = 2 + i, v = 2 − i (and uv = 5 = −p/3, as required) the formula gives x = 4. The other roots are ωu + ω²v = −2 − √3 and ω²u + ωv = −2 + √3. This calculation is commonly regarded as the moment complex numbers became unavoidable. In Bombelli's example the cube root could be found because the cubic has a rational root. When it does not, the complex numbers cannot be avoided at all:

Theorem 5.1 (Casus irreducibilis; Wantzel 1843, Hölder 1891). Let f ∈ ℚ[x] be an irreducible cubic with three real roots. Then no root of f lies in any field obtained from ℚ by successively adjoining real radicals; that is, there is no tower ℚ = F₀ ⊆ F₁ ⊆ ⋯ ⊆ Fₖ ⊆ ℝ with Fᵢ₊₁ = Fᵢ(αᵢ), αᵢ^(nᵢ) ∈ Fᵢ, such that Fₖ contains a root of f.

Proof. Suppose such a tower exists. Refining it, we may assume each nᵢ is a prime, and we may prepend the step F₀ = ℚ(√Δ), which is real since Δ > 0. Choose k minimal with Fₖ containing a root r of f, and put F = Fₖ₋₁, α = αₖ₋₁, p = nₖ₋₁, a = αᵖ ∈ F. Since f has no root in F, it is irreducible over F (a reducible cubic has a linear factor). If a were a p-th power, a = bᵖ with b ∈ F ⊆ ℝ, then α ∈ F: for p odd, b is the only real p-th root of a, and for p = 2, α = ±b. This contradicts minimality, so a is not a p-th power in F, and then xᵖ − a is irreducible over F (a standard lemma: for p prime, xᵖ − a is irreducible over F unless a is a p-th power in F). Hence [F(α) : F] = p. Since F ⊊ F(r) ⊆ F(α) and [F(r) : F] = 3 divides p, we get p = 3 and F(α) = F(r). Now √Δ ∈ F, so the Galois group of f over F lies in A₃ (Lesson 11) and has order 3; hence F(r) is already the splitting field of f over F and is a normal extension of F. A normal extension containing one root of the irreducible polynomial x³ − a contains all of them, including ωα, which is not real. But F(r) ⊆ ℝ. This contradiction proves the theorem. ∎

So for an irreducible cubic with three real roots, every expression of a root by radicals must pass through non-real numbers. The way out is trigonometric, discovered by Viète around 1591. When p < 0, put t = 2√(−p/3) cos φ. The identity 4cos³φ − 3cos φ = cos 3φ turns the cubic into

        cos 3φ = (3q/(2p)) √(−3/p)

and the right-hand side lies in [−1, 1] exactly when D ≤ 0. Then the roots are tₖ = 2√(−p/3) cos(φ₀ − 2πk/3), k = 0, 1, 2, with 3φ₀ = arccos((3q/(2p))√(−3/p)). For Bombelli's cubic: √(−p/3) = √5 and cos 3φ₀ = (12/30)/√5 = 2√5/25 ≈ 0.178885, so φ₀ ≈ 0.463648 and t₀ = 2√5 cos φ₀ ≈ 4.000000. In effect, the trigonometric method replaces the cube root of a complex number by trisection of an angle, which is the same operation in polar form.

✏️ Your Turn

(a) Show by Cardano's formula that ∛(2 + √5) + ∛(2 − √5) = 1.
(b) Depress x³ + 6x² + 9x + 4 and solve it.

Answers: (a) The number is a root of t³ + pt + q with u³ + v³ = 4 = −q and uv = ∛(4 − 5) = −1 = −p/3, so p = 3, q = −4: t³ + 3t − 4 = 0. This factors as (t − 1)(t² + t + 4), whose quadratic factor has no real root; since the given real number is a real root, it equals 1. (b) With x = t − 2: (t − 2)³ + 6(t − 2)² + 9(t − 2) + 4 = t³ − 3t + 2 = (t − 1)²(t + 2). So t = 1 (double) or t = −2, giving x = −1 (double) and x = −4. Check: (x + 1)²(x + 4) = x³ + 6x² + 9x + 4.

─────────────────────────────────
Lesson 6: The Quartic — Ferrari's Method and the Resolvent Cubic
─────────────────────────────────

📌 Key idea of this section:

        y⁴ + py² + qy + r = 0  ⟶  (y² + p/2 + m)² = 2my² − qy + (m² + pm + p²/4 − r)
        choose m with 8m³ + 8pm² + (2p² − 8r)m − q² = 0, making the right side a perfect square

Lodovico Ferrari, Cardano's student, solved the quartic around 1540, and the solution appeared in the Ars Magna alongside the cubic. The pattern of his method reappears in all later theory: the quartic is reduced to an auxiliary equation of lower degree, the resolvent, whose roots are rational expressions in the original roots.

Ferrari's method

After the translation x = y − b/4, a monic quartic becomes y⁴ + py² + qy + r. Write y⁴ + py² = −qy − r and complete the square on the left: (y² + p/2)² = −qy − r + p²/4. For a new parameter m, add 2m(y² + p/2) + m² to both sides:

        (y² + p/2 + m)² = 2my² − qy + (m² + pm + p²/4 − r)

The left side is a square for every m. The right side is a quadratic in y; it is the square of a linear polynomial precisely when its discriminant vanishes, q² = 8m(m² + pm + p²/4 − r), that is, when m is a root of Ferrari's resolvent cubic

        8m³ + 8pm² + (2p² − 8r)m − q² = 0

If q = 0 the quartic is a quadratic in y² and can be solved directly. If q ≠ 0, then m = 0 is not a root, and for any root m the right side equals 2m(y − q/(4m))². The quartic then splits into two quadratics,

        y² + p/2 + m = ±√(2m) (y − q/(4m))

each solved by the quadratic formula. Thus the quartic is solvable by radicals: one cubic (solved by Cardano) and two quadratics.

Worked example. Solve y⁴ + 4y − 1 = 0. Here p = 0, q = 4, r = −1, and the resolvent is 8m³ + 8m − 16 = 0, that is m³ + m − 2 = 0, with root m = 1. Then

        (y² + 1)² = 2y² − 4y + 2 = 2(y − 1)²

Check: (y² + 1)² − 2(y − 1)² = y⁴ + 2y² + 1 − 2y² + 4y − 2 = y⁴ + 4y − 1. So y² + 1 = ±√2 (y − 1). The equation y² − √2 y + 1 + √2 = 0 has discriminant 2 − 4 − 4√2 < 0, giving two non-real roots (√2 ± i√(2 + 4√2))/2. The equation y² + √2 y + 1 − √2 = 0 has discriminant 4√2 − 2 > 0, giving the real roots (−√2 ± √(4√2 − 2))/2 ≈ 0.2490 and −1.6633.

The resolvent in terms of the roots

Let y₁, y₂, y₃, y₄ be the roots, so y₁ + y₂ + y₃ + y₄ = 0. Ferrari's method factors the quartic as (y² − sy + ⋯)(y² + sy + ⋯) with s² = 2m. The roots of the first factor are two of the yᵢ, whose sum is s. Hence the three roots of the resolvent are

        m = (y₁ + y₂)²/2,   (y₁ + y₃)²/2,   (y₁ + y₄)²/2

one for each way of splitting {1, 2, 3, 4} into two pairs (note (y₁ + y₂)² = (y₃ + y₄)² since the sum is 0). Lagrange's insight (Réflexions sur la résolution algébrique des équations, 1770–71) was that these expressions take exactly three values under the 24 permutations of the roots, which is why they satisfy an equation of degree 3. The stabilizer of (y₁ + y₂)² in S₄ is a dihedral group of order 8, of index 3. In modern language: S₄ has the normal series

        S₄ ⊳ A₄ ⊳ V₄ ⊳ C₂ ⊳ 1

with abelian factors C₂, C₃, C₂, C₂, where V₄ = {e, (12)(34), (13)(24), (14)(23)} is the Klein four-group. The element (y₁ + y₂)(y₃ + y₄) is fixed by V₄ and takes three values under S₄/V₄ ≅ S₃; this is the cubic step. Lagrange tried to find a similar reduction for the quintic, found that the natural resolvents had degree 6 rather than less than 5, and conjectured that the quintic might be unsolvable.

The discriminant of a quartic

For y⁴ + py² + qy + r the discriminant ∏_{i<j}(yᵢ − yⱼ)² is:

        256r³ − 128p²r² + 144pq²r − 27q⁴ + 16p⁴r − 4p³q²

and it equals the discriminant of the Ferrari resolvent up to a constant factor. In particular, for y⁴ + qy + r it is 256r³ − 27q⁴. For y⁴ + 4y − 1 this is −256 − 27 · 256 = −7168 < 0, which for a real quartic means exactly two real roots, in agreement with the computation above. (For a real quartic with distinct roots, Δ < 0 means two real and two non-real roots, while Δ > 0 means either four real or four non-real roots.)

✏️ Your Turn

(a) Solve y⁴ − 2y² − 8y − 3 = 0 by Ferrari's method.
(b) Verify that the resolvent of part (a) has the root m predicted by the formula m = (y₁ + y₂)²/2.

Answers: (a) p = −2, q = −8, r = −3. The resolvent is 8m³ − 16m² + 32m − 64 = 8(m − 2)(m² + 4), so m = 2. Then (y² + 1)² = 4y² + 8y + 4 = 4(y + 1)², so y² + 1 = ±2(y + 1). The equation y² − 2y − 1 = 0 gives y = 1 ± √2, and y² + 2y + 3 = 0 gives y = −1 ± i√2. Indeed (y² − 2y − 1)(y² + 2y + 3) = y⁴ − 2y² − 8y − 3. (b) The two roots 1 + √2 and 1 − √2 have sum 2, and 2²/2 = 2 = m. The other two resolvent roots, ±2i, come from pairing a real root with a non-real one: (1 + √2 − 1 + i√2)²/2 = (√2(1 + i))²/2 = (1 + i)² = 2i, and similarly −2i.

─────────────────────────────────
Lesson 7: Symmetric Polynomials and Vieta's Formulas
─────────────────────────────────

📌 Key idea of this section:

        every symmetric polynomial is a unique polynomial in e₁, …, eₙ
        Newton:  k eₖ = ∑_{j=1}^{k} (−1)^(j−1) eₖ₋ⱼ pⱼ

Let R be a commutative ring and x₁, …, xₙ indeterminates. The symmetric group Sₙ acts on R[x₁, …, xₙ] by permuting the variables, and a polynomial is symmetric if it is fixed by every permutation. The elementary symmetric polynomials eₖ are defined by the generating identity

        (1 + x₁t)(1 + x₂t)⋯(1 + xₙt) = 1 + e₁t + e₂t² + ⋯ + eₙtⁿ

so e₁ = ∑ xᵢ, e₂ = ∑_{i<j} xᵢxⱼ, …, eₙ = x₁x₂⋯xₙ. Equivalently, (X − x₁)⋯(X − xₙ) = Xⁿ − e₁Xⁿ⁻¹ + e₂Xⁿ⁻² − ⋯ + (−1)ⁿeₙ.

Vieta's formulas

If f = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ⋯ + a₀ factors over some field as aₙ(x − α₁)⋯(x − αₙ), comparing coefficients gives Vieta's formulas (Viète, 1591, in partial form; Girard, 1629, in general):

        eₖ(α₁, …, αₙ) = (−1)ᵏ aₙ₋ₖ / aₙ,   k = 1, …, n

So the elementary symmetric functions of the roots are known rationally from the coefficients, even when the roots themselves are not. The next theorem extends this to every symmetric expression.

Theorem 7.1 (Fundamental theorem on symmetric polynomials). Every symmetric f ∈ R[x₁, …, xₙ] can be written as g(e₁, …, eₙ) for a unique g ∈ R[y₁, …, yₙ].

Proof. Order monomials x^α = x₁^(α₁)⋯xₙ^(αₙ) lexicographically: x^α > x^β if the first nonzero entry of α − β is positive. This is a total order compatible with multiplication, and it is a well-order on ℕⁿ. Existence: let f ≠ 0 be symmetric with leading monomial c x^α. Since f is symmetric, every permutation of α is also an exponent of f, and since x^α is the largest, α₁ ≥ α₂ ≥ ⋯ ≥ αₙ. The leading monomial of eₖ is x₁x₂⋯xₖ, so the leading monomial of

        e₁^(α₁−α₂) e₂^(α₂−α₃) ⋯ eₙ₋₁^(αₙ₋₁−αₙ) eₙ^(αₙ)

is x₁^(α₁) x₂^(α₂) ⋯ xₙ^(αₙ) = x^α with coefficient 1. Subtracting c times this product from f gives a symmetric polynomial whose leading monomial is strictly smaller. Every monomial that appears has total degree at most deg f, and there are only finitely many such monomials, so the process terminates, expressing f as a polynomial in the eₖ. Uniqueness: it suffices to show that g(e₁, …, eₙ) ≠ 0 whenever g ≠ 0. The monomial y^β of g contributes a product of the eₖ whose leading monomial is x^α with αᵢ = βᵢ + βᵢ₊₁ + ⋯ + βₙ. This map β ↦ α is injective, so among the monomials of g, the one producing the lex-largest α contributes a leading term that nothing else cancels. ∎

The proof is an algorithm. Example, n = 3: f = ∑_{i≠j} xᵢ²xⱼ (six terms) has leading monomial x₁²x₂, exponent (2, 1, 0), so we subtract e₁^(1) e₂^(1). Since e₁e₂ = ∑_{i≠j} xᵢ²xⱼ + 3x₁x₂x₃, we find f = e₁e₂ − 3e₃. Check at (1, 2, 3): f = 2 + 3 + 4 + 12 + 9 + 18 = 48 and e₁e₂ − 3e₃ = 6 · 11 − 18 = 48.

Corollary 7.2. If f ∈ K[x] has roots α₁, …, αₙ in an extension field and h ∈ K[x₁, …, xₙ] is symmetric, then h(α₁, …, αₙ) ∈ K.

This corollary is the algebraic heart of many classical arguments. Kronecker used it to show that sums and products of algebraic integers are algebraic integers: if α has conjugates αᵢ and β has conjugates βⱼ, the polynomial ∏_{i,j}(x − αᵢ − βⱼ) has coefficients symmetric in each set of conjugates, hence integers. It also proves that the discriminant of a polynomial over K lies in K, and it is the key step of the algebraic proof of the fundamental theorem of algebra sketched in Lesson 9.

Power sums and Newton's identities

The power sums pₖ = x₁ᵏ + ⋯ + xₙᵏ are symmetric, and Newton's identities give them recursively. Write E(t) = ∏(1 + xᵢt). Taking the logarithmic derivative, which is legitimate in the formal power series ring R[[t]] since each 1 + xᵢt is a unit,

        t E′(t) / E(t) = ∑ᵢ xᵢt/(1 + xᵢt) = ∑_{k≥1} (−1)^(k−1) pₖ tᵏ

Multiplying by E(t) and comparing coefficients of tᵏ yields:

        k eₖ = eₖ₋₁p₁ − eₖ₋₂p₂ + ⋯ + (−1)^(k−1) e₀pₖ,   with e₀ = 1 and eₖ = 0 for k > n

The first cases are p₁ = e₁, p₂ = e₁p₁ − 2e₂ = e₁² − 2e₂, and p₃ = e₁p₂ − e₂p₁ + 3e₃ = e₁³ − 3e₁e₂ + 3e₃. Example: the roots of x³ − 6x² + 11x − 6 are 1, 2, 3, and e₁ = 6, e₂ = 11, e₃ = 6 give p₂ = 36 − 22 = 14 = 1 + 4 + 9 and p₃ = 6 · 14 − 11 · 6 + 18 = 36 = 1 + 8 + 27. Over ℚ the identities can be inverted, so the pₖ with k ≤ n also generate the ring of symmetric polynomials with rational coefficients; over ℤ they do not (e₂ = (p₁² − p₂)/2 requires dividing by 2). In characteristic p, Newton's identities cannot be solved for eₖ when p divides k.

Rational symmetric functions of roots

Corollary 7.2 also covers symmetric rational functions. For the roots of t³ + pt + q (so e₁ = 0, e₂ = p, e₃ = −q):

        ∑ 1/tᵢ = e₂/e₃ = −p/q,     ∑ 1/tᵢ² = (e₂² − 2e₁e₃)/e₃² = p²/q²

Lagrange's 1770 analysis, the bridge from Vieta to Galois, studied rational functions of the roots that are not symmetric, and counted how many distinct values each takes under permutations. A function taking k values satisfies an equation of degree k over the coefficient field, whose coefficients are symmetric functions of those values. Galois's theory turns this counting into the correspondence between subgroups and intermediate fields.

✏️ Your Turn

(a) Let α, β, γ be the roots of x³ − 2x² + 3x − 5. Compute α² + β² + γ².
(b) Let α, β, γ be the roots of x³ − x − 1. Compute α⁴ + β⁴ + γ⁴.

Answers: (a) e₁ = 2 and e₂ = 3, so p₂ = e₁² − 2e₂ = 4 − 6 = −2. (A negative sum of squares shows that two of the roots are non-real.) (b) Here e₁ = 0, e₂ = −1, e₃ = 1. Then p₁ = 0, p₂ = 0 − 2(−1) = 2, p₃ = e₁p₂ − e₂p₁ + 3e₃ = 3, and p₄ = e₁p₃ − e₂p₂ + e₃p₁ − 4e₄ = 0 + 2 + 0 − 0 = 2. Alternatively, x⁴ = x² + x for each root, so p₄ = p₂ + p₁ = 2.

─────────────────────────────────
Lesson 8: Resultants, Discriminants and Elimination
─────────────────────────────────

📌 Key idea of this section:

        Res(f, g) = aₙᵐ bₘⁿ ∏_{i,j} (αᵢ − βⱼ) = aₙᵐ ∏ᵢ g(αᵢ)
        Res(f, g) = 0  ⟺  f and g have a common factor  (aₙbₘ ≠ 0)
        Disc(f) = aₙ^(2n−2) ∏_{i<j} (αᵢ − αⱼ)²,   Res(f, f′) = (−1)^(n(n−1)/2) aₙ Disc(f)

How do we decide whether two polynomials have a common root without finding any roots? Euclid's algorithm answers this, but it requires division, and it does not give a single closed formula in the coefficients. The resultant, introduced by Euler and Bézout and put in determinant form by Sylvester (1840), does.

The Sylvester matrix

Let f = aₙxⁿ + ⋯ + a₀ and g = bₘxᵐ + ⋯ + b₀ over a commutative ring R. The Sylvester matrix Syl(f, g) is the (m + n) × (m + n) matrix whose first m rows are the coefficients (aₙ, …, a₀) shifted one place right in each successive row, and whose last n rows are the coefficients (bₘ, …, b₀) shifted likewise. The resultant is Res(f, g) = det Syl(f, g). For f = x² − 1 and g = x − 2 (n = 2, m = 1):

        ⎡ 1   0  −1 ⎤
        ⎢ 1  −2   0 ⎥       det = 1 · ((−2)(−2) − 0 · 1) − 0 + (−1)(1 · 1 − 0) = 4 − 1 = 3
        ⎣ 0   1  −2 ⎦

Theorem 8.1. Let K be a field, f, g ∈ K[x] with aₙbₘ ≠ 0. Then Res(f, g) = 0 if and only if f and g have a nonconstant common factor.

Proof. Consider the K-linear map Φ : (u, v) ↦ uf + vg from pairs with deg u < m, deg v < n to polynomials of degree < m + n. Both spaces have dimension m + n, and in the monomial bases the matrix of Φ is the transpose of Syl(f, g). If h = gcd(f, g) is nonconstant, then u = g/h, v = −f/h is a nonzero element of ker Φ, so det = 0. Conversely, if det = 0 there is (u, v) ≠ 0 with uf = −vg. Then f divides vg; if gcd(f, g) = 1 then f divides v, impossible because deg v < n and v ≠ 0 (v = 0 would force u = 0). ∎

Since Φ is surjective when the resultant is nonzero, Cramer's rule gives polynomials u, v with coefficients in R (not just K) such that uf + vg = Res(f, g). So the resultant lies in the ideal (f, g) ∩ R: it is the "eliminant" of x from the system f = g = 0.

Theorem 8.2 (Product formula). If f = aₙ∏(x − αᵢ) and g = bₘ∏(x − βⱼ), then

        Res(f, g) = aₙᵐ bₘⁿ ∏_{i,j}(αᵢ − βⱼ) = aₙᵐ ∏ᵢ g(αᵢ) = (−1)^(mn) bₘⁿ ∏ⱼ f(βⱼ)

Sketch of proof. Work universally, with aₙ, bₘ, αᵢ, βⱼ as indeterminates and the other coefficients given by Vieta. Res(f, g) is then a polynomial that vanishes whenever αᵢ = βⱼ (by Theorem 8.1), so each αᵢ − βⱼ divides it. Counting degrees, give a₍ₙ₋ⱼ₎ and b₍ₘ₋ⱼ₎ weight j: every term of the Sylvester determinant has total weight mn, and a₍ₙ₋ⱼ₎/aₙ = (−1)ʲeⱼ(α) has degree j in the α's (similarly for the β's), so Res/(aₙᵐbₘⁿ) has degree mn in the α's and β's, the degree of ∏(αᵢ − βⱼ). Comparing the coefficient of a single monomial (for instance setting all βⱼ = 0, when g = bₘxᵐ and the Sylvester determinant is a triangular computation) fixes the constant. ∎

Check with the example: aₙᵐ ∏ g(αᵢ) = 1 · g(1) g(−1) = (−1)(−3) = 3, as computed from the determinant.

The discriminant

Define Disc(f) = aₙ^(2n−2) ∏_{i<j}(αᵢ − αⱼ)². It is symmetric in the roots, hence (by Lesson 7) a polynomial in the coefficients, and it vanishes exactly when f has a repeated root. Since f′(αᵢ) = aₙ∏_{j≠i}(αᵢ − αⱼ), the product formula gives

        Res(f, f′) = aₙⁿ⁻¹ ∏ᵢ f′(αᵢ) = aₙ^(2n−1) ∏_{i≠j}(αᵢ − αⱼ) = (−1)^(n(n−1)/2) aₙ Disc(f)

because each pair i < j contributes (αᵢ − αⱼ)(αⱼ − αᵢ) = −(αᵢ − αⱼ)², and there are n(n − 1)/2 pairs. For the quadratic, Res(ax² + bx + c, 2ax + b) = a(2aα + b)(2aβ + b) = a · (√Δ)(−√Δ) = −aΔ, recovering Disc = b² − 4ac. Further examples worth knowing:

        Disc(x³ + px + q) = −4p³ − 27q²
        Disc(xⁿ + a) = (−1)^(n(n−1)/2) nⁿ aⁿ⁻¹
        Disc(xⁿ + ax + b) = (−1)^(n(n−1)/2) (nⁿ bⁿ⁻¹ + (−1)ⁿ⁻¹ (n − 1)ⁿ⁻¹ aⁿ)

For n = 3 the last formula gives −(27b² + 4a³), agreeing with the first.

Elimination of variables

Treat f, g ∈ K[x, y] as polynomials in y with coefficients in K[x]. The resultant Res_y(f, g) is a polynomial in x alone, and it vanishes at every x-coordinate of a common zero (and at x-values where both leading coefficients vanish). This is elimination. Example: intersect the circle x² + y² = 5 with the hyperbola xy = 2. Taking f = y² + (x² − 5) and g = xy − 2, the product formula applied to the root y = 2/x of g gives

        Res_y(f, g) = x² f(x, 2/x) = 4 + x⁴ − 5x² = (x² − 1)(x² − 4)

so x ∈ {±1, ±2} and the intersection points are (1, 2), (−1, −2), (2, 1), (−2, −1). There are 2 · 2 = 4 of them, as Bézout's theorem predicts: two projective plane curves of degrees d and e without a common component meet in exactly de points of the complex projective plane, counted with multiplicity. The degree bound in Bézout's theorem comes from the degree of the resultant.

For several variables the resultant generalizes in two directions: the multivariate (Macaulay) resultant of n homogeneous forms in n variables, and Gröbner bases (Buchberger, 1965), which give an algorithmic elimination theory for arbitrary ideals and are the standard tool of computer algebra for solving polynomial systems.

✏️ Your Turn

(a) Compute Res(x² + 1, x³ + x + 1).
(b) Compute Res(x² − 3x + 2, x² + x − 6) and interpret the result.

Answers: (a) The roots of x² + 1 are ±i, and g(i) = −i + i + 1 = 1, g(−i) = i − i + 1 = 1, so Res = 1³ · 1 · 1 = 1. The polynomials are coprime; in fact there are integer polynomials u, v with u(x² + 1) + v(x³ + x + 1) = 1. (b) The roots of the first polynomial are 1 and 2; g(1) = −4 and g(2) = 0, so the resultant is 0. The polynomials share the root 2: indeed x² − 3x + 2 = (x − 1)(x − 2) and x² + x − 6 = (x − 2)(x + 3).

─────────────────────────────────
Lesson 9: The Fundamental Theorem of Algebra
─────────────────────────────────

📌 Key idea of this section:

        every nonconstant f ∈ ℂ[z] has a root in ℂ
        hence f = aₙ(z − α₁)(z − α₂)⋯(z − αₙ) over ℂ, and ℂ is algebraically closed

The statement that an equation of degree n has n roots was asserted by Girard (1629) and Descartes (1637) without any clear idea of where the roots live. D'Alembert (1746), Euler, Lagrange and Laplace offered proofs with gaps; Gauss's doctoral dissertation (1799) criticized them all and gave a geometric argument whose own topological gap was filled only in the twentieth century. The first essentially complete proof, by the minimum-modulus argument given here, is due to Argand (1806, 1814), made rigorous by Cauchy's analysis. Remarkably, the theorem cannot be proved by algebra alone: every proof uses some form of completeness of ℝ, if only the intermediate value theorem.

Theorem 9.1 (Fundamental theorem of algebra). Every polynomial f ∈ ℂ[z] of degree n ≥ 1 has a root in ℂ.

The proof has three steps: |f| is large far from the origin; so |f| attains a minimum on ℂ; and a point where |f| ≠ 0 is never a local minimum.

Step 1: growth at infinity

Lemma 9.2. If f = aₙzⁿ + ⋯ + a₀ with aₙ ≠ 0 and n ≥ 1, then |f(z)| → ∞ as |z| → ∞.

Proof. For |z| ≥ 1, |aₙ₋₁zⁿ⁻¹ + ⋯ + a₀| ≤ A|z|ⁿ⁻¹ where A = |aₙ₋₁| + ⋯ + |a₀|. Hence |f(z)| ≥ |z|ⁿ⁻¹(|aₙ||z| − A), which tends to ∞. ∎

Step 2: a global minimum exists

Choose R so that |f(z)| > |f(0)| for |z| > R. The closed disc |z| ≤ R is compact and |f| is continuous, so |f| attains a minimum on it at some z₀ (Weierstrass's extreme value theorem). Since |f(z₀)| ≤ |f(0)| < |f(z)| for |z| > R, the point z₀ is a global minimum of |f| on ℂ.

Step 3: d'Alembert's lemma

Lemma 9.3. If f is nonconstant and f(z₀) ≠ 0, then every neighbourhood of z₀ contains a point z with |f(z)| < |f(z₀)|.

Proof. Expand f around z₀: f(z₀ + w) = f(z₀) + cₖwᵏ + wᵏ⁺¹h(w), where cₖ ≠ 0 is the first nonzero coefficient after the constant term (it exists since f is nonconstant) and h is a polynomial. Let ζ be a k-th root of −f(z₀)/cₖ; it exists because every complex number has k-th roots (write it in polar form; this uses the existence of real k-th roots of positive reals, hence completeness). For real t ∈ (0, 1],

        f(z₀ + tζ) = f(z₀)(1 − tᵏ) + tᵏ⁺¹ζᵏ⁺¹h(tζ)

Since |h(tζ)| ≤ H for t ∈ [0, 1], we get |f(z₀ + tζ)| ≤ |f(z₀)|(1 − tᵏ) + tᵏ⁺¹|ζ|ᵏ⁺¹H = |f(z₀)| − tᵏ(|f(z₀)| − t|ζ|ᵏ⁺¹H), which is strictly less than |f(z₀)| once t < |f(z₀)| / (|ζ|ᵏ⁺¹H) (for any t, if H = 0). ∎

Proof of Theorem 9.1. The global minimum z₀ of Step 2 cannot satisfy f(z₀) ≠ 0, by Lemma 9.3. So f(z₀) = 0. ∎

Corollaries

By induction with the factor theorem, every f ∈ ℂ[z] of degree n factors as aₙ(z − α₁)⋯(z − αₙ), so it has exactly n roots counted with multiplicity. A field with this property is called algebraically closed. If f has real coefficients, its non-real roots come in conjugate pairs (complex conjugation is a ring automorphism of ℂ fixing ℝ), and (z − α)(z − ᾱ) = z² − 2Re(α)z + |α|² is a real quadratic. Hence every real polynomial is a product of real linear factors and real irreducible quadratics; this is the fact behind partial fractions in calculus. For example

        x⁴ + 1 = (x² + √2 x + 1)(x² − √2 x + 1)

The set of complex numbers algebraic over ℚ is a subfield ℚ̄ that is itself algebraically closed, the algebraic closure of ℚ. It is countable, so almost all complex numbers are transcendental (Cantor, 1874), although proving that a specific number such as e (Hermite, 1873) or π (Lindemann, 1882) is transcendental is hard.

Other proofs

The theorem has many proofs, each illuminating a different field. Complex analysis: if f had no root, 1/f would be a bounded entire function (by Lemma 9.2), hence constant by Liouville's theorem. Topology: the loop t ↦ f(Re^(it)) winds n times around 0 for large R and is null-homotopic in ℂ∖{0} if f has no root, a contradiction for n ≥ 1. Algebra plus a minimum of analysis (Artin's proof, refining ideas of Euler, Lagrange and Laplace): the only analytic inputs are that real polynomials of odd degree have real roots and that positive reals have square roots; Galois theory and the Sylow theorems then show that a finite extension of ℂ must be ℂ itself. We outline this proof at the end of Lesson 11.

Root bounds and continuity of roots

Two quantitative facts are used constantly in numerical work. The Cauchy bound: every root of aₙzⁿ + ⋯ + a₀ satisfies |z| ≤ 1 + max_{i<n} |aᵢ/aₙ|. (If |z| > 1 + A with A the maximum, then |aₙ₋₁zⁿ⁻¹ + ⋯ + a₀| ≤ |aₙ|A(|z|ⁿ − 1)/(|z| − 1) < |aₙ||z|ⁿ, so f(z) ≠ 0.) And the roots depend continuously on the coefficients, as an unordered n-tuple: this follows from the argument principle (Hurwitz's theorem). Continuity does not mean good conditioning; see Lesson 13.

✏️ Your Turn

(a) Use the Cauchy bound to locate all roots of z⁵ − 6z + 3.
(b) Explain why z ↦ z̄ shows that f(z) = 0 implies f(z̄) = 0 when f has real coefficients, and deduce that a real polynomial of odd degree has a real root.

Answers: (a) max |aᵢ/aₙ| = 6, so every root satisfies |z| ≤ 7. (b) Conjugation is a field automorphism of ℂ fixing each real number, so the conjugate of f(z) = ∑ aᵢzⁱ is ∑ aᵢz̄ⁱ = f(z̄). Thus non-real roots occur in pairs {α, ᾱ} of equal multiplicity, and if the degree is odd, at least one root is unpaired, that is, real. (This also follows directly from the intermediate value theorem.)

─────────────────────────────────
Lesson 10: Field Extensions and Splitting Fields
─────────────────────────────────

📌 Key idea of this section:

        [M : K] = [M : L][L : K]          (tower law)
        [K(α) : K] = deg of the minimal polynomial of α
        a splitting field of f of degree n has degree at most n! over K

To solve f(x) = 0 we must first say where the solutions live. The answer of Kronecker (1887) is that we can always manufacture a field containing a root, without reference to ℂ: if p is irreducible over K, then L = K[x]/(p) is a field (Theorem 2.4), K embeds in L as the constants, and the class of x is a root of p in L.

Degree and the tower law

If K ⊆ L are fields, L is a vector space over K and its dimension [L : K] is the degree of the extension. The extension is finite if the degree is finite.

Theorem 10.1 (Tower law). If K ⊆ L ⊆ M, then [M : K] = [M : L][L : K]. More precisely, if (uᵢ) is a basis of L over K and (vⱼ) a basis of M over L, then (uᵢvⱼ) is a basis of M over K.

Proof. Spanning: any m ∈ M is ∑ⱼ λⱼvⱼ with λⱼ ∈ L, and each λⱼ = ∑ᵢ κᵢⱼuᵢ with κᵢⱼ ∈ K, so m = ∑ κᵢⱼuᵢvⱼ. Independence: if ∑ κᵢⱼuᵢvⱼ = 0, then ∑ⱼ(∑ᵢ κᵢⱼuᵢ)vⱼ = 0 with coefficients in L, so each ∑ᵢ κᵢⱼuᵢ = 0 and hence each κᵢⱼ = 0. ∎

Algebraic elements and minimal polynomials

An element α ∈ L is algebraic over K if it is a root of some nonzero polynomial in K[x]. The polynomials vanishing at α form an ideal of K[x], generated by a unique monic polynomial m_α, the minimal polynomial of α; m_α is irreducible, because a factorization m_α = gh would give g(α)h(α) = 0 in a field. The evaluation map K[x] → L, x ↦ α, then induces an isomorphism

        K[x]/(m_α)  ≅  K(α),    with basis 1, α, α², …, αᵈ⁻¹,  d = deg m_α

so [K(α) : K] = deg m_α. Conversely, every element of a finite extension is algebraic (the powers 1, α, α², … cannot all be independent). Combining with the tower law, sums, products and quotients of algebraic elements are algebraic: if α, β are algebraic then [K(α, β) : K] ≤ [K(α) : K][K(β) : K] is finite.

Worked example. Let α = √2 + √3. Then α² = 5 + 2√6, so (α² − 5)² = 24, and α is a root of x⁴ − 10x² + 1. Now ℚ(√2) has degree 2. If √3 were in ℚ(√2), say √3 = a + b√2 with a, b ∈ ℚ, then squaring gives 3 = a² + 2b² + 2ab√2, forcing ab = 0, and either 3 = 2b² or 3 = a², impossible in ℚ. So [ℚ(√2, √3) : ℚ] = 4 by the tower law. Since α³ = 11√2 + 9√3, one has √2 = (α³ − 9α)/2 and √3 = (11α − α³)/2, so ℚ(α) = ℚ(√2, √3), and x⁴ − 10x² + 1 is the minimal polynomial of α (it has the right degree). This illustrates the primitive element theorem: every finite separable extension is of the form K(α).

Splitting fields

A splitting field of f ∈ K[x] over K is an extension L in which f factors into linear factors and which is generated over K by the roots of f.

Theorem 10.2. (i) Every f of degree n ≥ 1 has a splitting field L with [L : K] ≤ n!. (ii) Any two splitting fields of f over K are isomorphic by an isomorphism that is the identity on K.

Proof. (i) By induction on n. Let p be an irreducible factor of f and K₁ = K[x]/(p), in which f has a root α₁ and [K₁ : K] ≤ n. Over K₁, f = (x − α₁)g with deg g = n − 1; by induction g has a splitting field L over K₁ with [L : K₁] ≤ (n − 1)!, and L is a splitting field of f over K with [L : K] ≤ n · (n − 1)!. (ii) One proves more generally: if σ : K → K′ is an isomorphism carrying f to f′, and L, L′ are splitting fields of f, f′, then σ extends to an isomorphism L → L′. Take an irreducible factor p of f with a root α ∈ L; then p′ = σ(p) has a root α′ ∈ L′, and σ extends to K(α) ≅ K[x]/(p) ≅ K′[x]/(p′) ≅ K′(α′) sending α to α′. Now L is a splitting field of f/(x − α) over K(α), and induction on the degree completes the proof. ∎

Uniqueness is what lets us speak of the splitting field. The same induction shows that the number of extensions of σ is at most [L : K], with equality when the roots of f are distinct; this inequality is the seed of Galois theory.

Examples

The splitting field of x³ − 2 over ℚ is ℚ(∛2, ω), ω = e^(2πi/3). Eisenstein gives [ℚ(∛2) : ℚ] = 3; since ℚ(∛2) ⊆ ℝ and ω ∉ ℝ, while ω is a root of x² + x + 1, we get [ℚ(∛2, ω) : ℚ(∛2)] = 2, and the splitting field has degree 6 = 3!. The splitting field of x⁴ − 2 is ℚ(⁴√2, i), of degree 4 · 2 = 8, smaller than 4! = 24. The splitting field of xᵖ − 1 for p prime is ℚ(ζₚ) with ζₚ = e^(2πi/p), of degree p − 1, since its minimal polynomial is Φₚ (Lesson 3).

Finite fields are splitting fields. For a prime power q = pⁿ, the polynomial x^q − x over 𝔽ₚ has derivative −1, so its q roots are distinct; the set of roots is closed under addition, multiplication and inverses (since the Frobenius x ↦ xᵖ is a ring homomorphism in characteristic p), so it is the splitting field. This proves that for every prime power q there is a field 𝔽_q of order q, unique up to isomorphism, and every finite field arises so.

Ruler-and-compass constructions

A point constructible from 0 and 1 with ruler and compass has coordinates obtained by a chain of quadratic extensions, since intersecting lines and circles only requires solving equations of degree at most 2. So a constructible number α lies in a field of degree 2ᵏ over ℚ, and by the tower law [ℚ(α) : ℚ] is a power of 2 (Wantzel, 1837). Three classical problems fall at once. Doubling the cube requires ∛2, of degree 3. Trisecting 60° requires cos 20°, a root of the irreducible polynomial 8x³ − 6x − 1 (from cos 3θ = 4cos³θ − 3cos θ), of degree 3. The regular heptagon requires cos(2π/7), a root of 8x³ + 4x² − 4x − 1, again of degree 3. Gauss (1796) and Wantzel showed that the regular n-gon is constructible if and only if φ(n) is a power of 2, that is, n = 2ᵏp₁⋯pᵣ with the pᵢ distinct Fermat primes 2^(2^m) + 1. (Squaring the circle also fails, but that requires Lindemann's theorem that π is transcendental.)

✏️ Your Turn

(a) Find [ℚ(∛2, i) : ℚ].
(b) In ℚ(∛2), write 1/(1 + ∛2) in the basis 1, ∛2, ∛4.

Answers: (a) ∛2 has degree 3 and i has degree 2; the degree of the compositum is divisible by both, hence by 6, and is at most 3 · 2 = 6. So the degree is 6. (b) With a = ∛2, (1 + a)(1 − a + a²) = 1 + a³ = 3, so 1/(1 + a) = (1 − a + a²)/3 = 1/3 − (1/3)∛2 + (1/3)∛4.

─────────────────────────────────
Lesson 11: Galois Theory — The Fundamental Correspondence
─────────────────────────────────

📌 Key idea of this section:

        L/K Galois with group G  ⟹  {subgroups H ≤ G}  ⟷  {fields K ⊆ E ⊆ L}
        H ↦ L^H,   E ↦ Gal(L/E),   [L : E] = |H|,   E/K normal ⟺ H ⊴ G

Galois's idea was to measure an equation by the symmetries of its roots: the permutations of the roots that preserve every algebraic relation among them with coefficients in the base field. In modern language these are the field automorphisms of the splitting field that fix the base field.

Automorphisms and Galois extensions

For an extension L/K, Gal(L/K) (also written Aut(L/K)) is the group of field automorphisms of L fixing K pointwise. If L = K(α₁, …, αₙ) is the splitting field of f, an automorphism σ is determined by its values on the αᵢ, and σ(αᵢ) is again a root of f, since f(σ(αᵢ)) = σ(f(αᵢ)) = 0. So Gal(L/K) embeds in the symmetric group Sₙ on the roots. The extension-counting remark after Theorem 10.2 shows |Gal(L/K)| ≤ [L : K].

A finite extension L/K is called Galois if |Gal(L/K)| = [L : K]. The following are equivalent: L/K is Galois; L is the splitting field of a separable polynomial over K (one with distinct roots); L/K is normal (every irreducible polynomial over K with one root in L splits in L) and separable; the fixed field of Gal(L/K) is exactly K. In characteristic 0 separability is automatic (Lesson 2), so a Galois extension is simply a splitting field. The key ingredient, Artin's theorem, states that if G is a finite group of automorphisms of a field L, then [L : L^G] = |G|, where L^G is the fixed field. Its proof uses Dedekind's lemma that distinct field homomorphisms are linearly independent.

Theorem 11.1 (Fundamental theorem of Galois theory). Let L/K be a finite Galois extension with group G. Then the maps H ↦ L^H and E ↦ Gal(L/E) are mutually inverse, inclusion-reversing bijections between subgroups of G and intermediate fields K ⊆ E ⊆ L. Moreover [L : E] = |Gal(L/E)| and [E : K] = [G : Gal(L/E)]; E/K is Galois if and only if Gal(L/E) is normal in G, and then Gal(E/K) ≅ G/Gal(L/E).

Proof outline. For an intermediate field E, L is still the splitting field over E of the same separable polynomial, so L/E is Galois and L^(Gal(L/E)) = E. For a subgroup H, Artin's theorem gives [L : L^H] = |H|; since H ⊆ Gal(L/L^H) and the latter has order [L : L^H], equality holds. This proves the bijection and the degree formulas. For σ ∈ G, σ maps E to σ(E) and Gal(L/σE) = σ Gal(L/E) σ⁻¹. So E is stable under all of G if and only if Gal(L/E) is normal; stability is equivalent to normality of E/K, and restriction σ ↦ σ|_E gives the surjection G → Gal(E/K) with kernel Gal(L/E). ∎

Examples

The biquadratic field. L = ℚ(√2, √3) has degree 4, and the automorphisms are determined by √2 ↦ ±√2, √3 ↦ ±√3, all four of which occur. So G ≅ C₂ × C₂, with three subgroups of order 2, corresponding to the three quadratic subfields ℚ(√3), ℚ(√2) and ℚ(√6) (fixed respectively by √2 ↦ −√2, by √3 ↦ −√3, and by changing both signs).

The splitting field of x³ − 2. Here [L : ℚ] = 6 and G embeds in S₃, so G ≅ S₃, acting on the roots ∛2, ω∛2, ω²∛2. The three subgroups of order 2 (transpositions) fix the three non-normal cubic fields ℚ(∛2), ℚ(ω∛2), ℚ(ω²∛2), and the normal subgroup A₃ fixes the normal quadratic field ℚ(ω) = ℚ(√−3). The non-normality of ℚ(∛2) matches the fact that the transposition subgroups are not normal in S₃.

Finite fields. Gal(𝔽_(pⁿ)/𝔽ₚ) is cyclic of order n, generated by the Frobenius automorphism φ(x) = xᵖ. Its subgroups correspond to the subfields 𝔽_(pᵈ) for d | n, one for each divisor.

Cyclotomic fields. Gal(ℚ(ζₙ)/ℚ) ≅ (ℤ/nℤ)ˣ, the class of a corresponding to ζₙ ↦ ζₙᵃ; this needs the irreducibility of the cyclotomic polynomial Φₙ (Gauss for n prime; Kronecker and Dedekind in general). In particular ℚ(ζₚ)/ℚ is cyclic of degree p − 1, and Gauss's construction of the regular 17-gon is the descent through a chain of subgroups of the cyclic group of order 16.

Galois groups of cubics

Let f ∈ K[x] (char K ≠ 2) be separable of degree n with roots α₁, …, αₙ, and let δ = ∏_{i<j}(αᵢ − αⱼ), so δ² = Disc(f)/aₙ^(2n−2). A permutation σ ∈ Sₙ maps δ to sgn(σ)δ. Since δ ≠ 0 and char K ≠ 2, δ is fixed by Gal(f) exactly when Gal(f) ⊆ Aₙ. By the Galois correspondence:

        Gal(f) ⊆ Aₙ   ⟺   δ ∈ K   ⟺   Disc(f) is a square in K

For an irreducible cubic over ℚ, Gal(f) is a transitive subgroup of S₃, hence A₃ or S₃, and the discriminant decides which. For x³ − 3x + 1, Disc = −4(−3)³ − 27 = 108 − 27 = 81 = 9², so the group is cyclic of order 3 and all three roots lie in ℚ of any one of them. Indeed, putting x = 2cos θ turns the equation into 2cos 3θ = −1, so the roots are 2cos(2π/9), 2cos(4π/9), 2cos(8π/9), and 2cos(4π/9) = (2cos(2π/9))² − 2 expresses one root polynomially in another. For x³ − 2, Disc = −108 is not a square and the group is S₃.

Irreducibility is transitivity. The Galois group of a separable f acts transitively on the roots if and only if f is irreducible: the orbit of a root α under Gal(f) consists of roots of m_α, and conversely any two roots of an irreducible polynomial are related by some automorphism of the splitting field (Theorem 10.2(ii)).

Artin's algebraic proof of the fundamental theorem of algebra

We sketch it. It suffices to show that ℂ has no proper finite extension. Let L be a finite Galois extension of ℝ containing ℂ, with group G, and let P be a Sylow 2-subgroup. The fixed field L^P has odd degree [G : P] over ℝ; by the primitive element theorem it is ℝ(α), and the minimal polynomial of α has odd degree, hence a real root, hence degree 1. So G = P is a 2-group. Then Gal(L/ℂ) is a 2-group; if it were nontrivial it would have a subgroup of index 2, giving a quadratic extension of ℂ. But every complex quadratic has roots in ℂ, because every complex number has a complex square root. So L = ℂ.

✏️ Your Turn

(a) Determine the Galois group of x³ − 4x + 2 over ℚ.
(b) List all subfields of ℚ(ζ₈), where ζ₈ = e^(2πi/8).

Answers: (a) It is Eisenstein at 2, hence irreducible. Disc = −4(−4)³ − 27 · 2² = 256 − 108 = 148, which is not a perfect square (12² = 144, 13² = 169). So the Galois group is S₃. (Since 148 > 0, all three roots are real.) (b) ζ₈ = (1 + i)/√2, so ℚ(ζ₈) = ℚ(i, √2), of degree 4 with group (ℤ/8ℤ)ˣ ≅ C₂ × C₂. Its subfields are ℚ, ℚ(i), ℚ(√2), ℚ(√−2) and ℚ(ζ₈) itself: five in all.

─────────────────────────────────
Lesson 12: Solvability by Radicals and the Abel–Ruffini Theorem
─────────────────────────────────

📌 Key idea of this section:

        f is solvable by radicals over a field of characteristic 0  ⟺  Gal(f) is a solvable group
        A₅ is simple, so S₅ is not solvable, and the general quintic has no solution in radicals

An extension L/K is radical if there is a tower K = K₀ ⊆ K₁ ⊆ ⋯ ⊆ Kₘ = L with Kᵢ₊₁ = Kᵢ(αᵢ) and αᵢ^(nᵢ) ∈ Kᵢ for some nᵢ ≥ 1. A polynomial f ∈ K[x] is solvable by radicals if its splitting field is contained in some radical extension of K. This makes precise the idea of a formula for the roots built from the coefficients by field operations and extraction of roots. Throughout this lesson K has characteristic 0.

Solvable groups

A finite group G is solvable if it has a chain of subgroups 1 = G₀ ⊴ G₁ ⊴ ⋯ ⊴ Gₖ = G, each normal in the next, with every quotient Gᵢ₊₁/Gᵢ abelian; equivalently (refining the chain), with every quotient cyclic of prime order. Subgroups and quotients of solvable groups are solvable, and an extension of a solvable group by a solvable group is solvable. Abelian groups, p-groups, S₃ and S₄ are solvable. The term was coined precisely for the application to equations.

Theorem 12.1. Aₙ is simple for n ≥ 5. In particular Sₙ is not solvable for n ≥ 5.

Proof for n = 5. The conjugacy classes of A₅ have sizes 1 (identity), 15 (products of two disjoint transpositions), 20 (3-cycles), 12 and 12 (the 5-cycles split into two classes in A₅). A normal subgroup is a union of conjugacy classes containing the identity, and its order divides 60. The possible sums 1 + (a subset of {12, 12, 15, 20}) are 1, 13, 16, 21, 25, 28, 33, 36, 40, 45, 48 and 60, of which only 1 and 60 divide 60. So A₅ is simple. Being simple and non-abelian, A₅ equals its own commutator subgroup, so the derived series of S₅ stops at A₅ ≠ 1 and S₅ is not solvable. For n > 5, Sₙ contains a copy of S₅, and subgroups of solvable groups are solvable. ∎

Roots of unity and Kummer theory

Two kinds of radical step occur. Adjoining a primitive n-th root of unity ζₙ gives an abelian extension, since Gal(K(ζₙ)/K) embeds in (ℤ/nℤ)ˣ. If K already contains ζₙ and a ∈ K, then K(ⁿ√a)/K is Galois with cyclic group: σ ↦ σ(α)/α (α = ⁿ√a) is an injective homomorphism into the group of n-th roots of unity. Conversely (Kummer theory), if K contains a primitive n-th root of unity and L/K is cyclic of degree n with generator σ, then L = K(α) with αⁿ ∈ K. One takes α to be a Lagrange resolvent α = θ + ζ⁻¹σ(θ) + ζ⁻²σ²(θ) + ⋯ + ζ^(−(n−1))σⁿ⁻¹(θ), which satisfies σ(α) = ζα; then αⁿ is fixed by σ, so it lies in K, and Dedekind's lemma guarantees a choice of θ with α ≠ 0. Cardano's formula is exactly this construction for the cyclic group A₃: the cube roots u and v are, up to a factor 3, the resolvents x₁ + ω²x₂ + ωx₃ and x₁ + ωx₂ + ω²x₃.

Theorem 12.2 (Galois, 1832). A polynomial f over a field K of characteristic 0 is solvable by radicals if and only if its Galois group is solvable.

Proof sketch. Suppose the splitting field of f lies in a radical extension. Enlarging the tower, we may assume it is Galois over K and that its first step adjoins a primitive N-th root of unity, where N is the product of all the exponents nᵢ. Then the tower has successive steps that are abelian (the root of unity step) or cyclic (the Kummer steps), so by the Galois correspondence the Galois group of the top field has a normal series with abelian quotients, hence is solvable. Gal(f) is a quotient of it, hence solvable. Conversely, if G = Gal(f) is solvable, adjoin a primitive N-th root of unity with N = |G|. Over K(ζ_N), the Galois group of f is a subgroup of G, hence solvable, with a normal series whose quotients are cyclic of prime order dividing N. By the correspondence this is a tower of cyclic extensions of prime degree, and by Kummer theory each step is obtained by adjoining a root. ∎

The general polynomial of degree n

Let k be a field of characteristic 0 and t₁, …, tₙ indeterminates. The general polynomial of degree n is Xⁿ − s₁Xⁿ⁻¹ + s₂Xⁿ⁻² − ⋯ + (−1)ⁿsₙ over the field k(s₁, …, sₙ), whose coefficients are independent indeterminates. A formula in radicals for the roots of the general polynomial would specialize to a formula valid for all polynomials over k.

Theorem 12.3. The Galois group of the general polynomial of degree n is Sₙ. Hence for n ≥ 5 the general polynomial of degree n is not solvable by radicals (Abel–Ruffini).

Proof. Let F = k(t₁, …, tₙ) and let Sₙ act by permuting the tᵢ. Put eᵢ = eᵢ(t₁, …, tₙ). By the uniqueness part of Theorem 7.1, the eᵢ are algebraically independent, so the field E = k(e₁, …, eₙ) is isomorphic to k(s₁, …, sₙ) via sᵢ ↦ eᵢ, and the general polynomial becomes ∏(X − tᵢ). Its splitting field over E is F. Every symmetric rational function is a quotient of symmetric polynomials (multiply numerator and denominator by the other conjugates of the denominator), so the fixed field F^(Sₙ) is E. By Artin's theorem, Gal(F/E) = Sₙ. For n ≥ 5 this group is not solvable, and Theorem 12.2 applies. ∎

Ruffini's 1799 proof contained a gap, closed by Abel in 1824 and 1826; Abel's argument shows directly that any radical expression for a root would be a rational function of the roots, and then uses the fact that a rational function of five variables taking fewer than five values under permutations takes at most two. Galois's work, published by Liouville in 1846, explained not only the general case but every specific equation.

An explicit unsolvable quintic

Theorem 12.3 does not by itself exhibit a quintic over ℚ with no radical solution. Here is one.

Lemma 12.4. Let p be prime. A subgroup G of Sₚ containing a p-cycle and a transposition is Sₚ.

Proof. Let τ = (a b) and let σ be the p-cycle. Some power σᵏ maps a to b, and since p is prime σᵏ is again a p-cycle. Relabeling, σᵏ = (1 2 ⋯ p) and τ = (1 2). Conjugating (1 2) by powers of (1 2 ⋯ p) gives all transpositions (i i+1), and these generate Sₚ. ∎

Theorem 12.5. The Galois group of f = x⁵ − 6x + 3 over ℚ is S₅, so f is not solvable by radicals.

Proof. f is Eisenstein at 3, hence irreducible, so 5 = [ℚ(α) : ℚ] divides |Gal(f)|, and by Cauchy's theorem Gal(f) contains an element of order 5, which in S₅ is a 5-cycle. Next, f′ = 5x⁴ − 6 vanishes only at x = ±(6/5)^(1/4) ≈ ±1.0466 among the reals, with f(−1.0466) ≈ 8.02 > 0 and f(1.0466) ≈ −2.02 < 0. With f(x) → −∞ as x → −∞ and f(x) → +∞ as x → +∞, f has exactly three real roots (approximately −1.6709, 0.5055 and 1.4016) and so exactly two non-real roots. Complex conjugation restricts to an automorphism of the splitting field that swaps the two non-real roots and fixes the three real ones: a transposition. By Lemma 12.4, Gal(f) = S₅. ∎

The same argument works for any irreducible polynomial of prime degree p with exactly two non-real roots. Not every quintic is unsolvable: x⁵ − 2 has Galois group of order 20 (the Frobenius group F₂₀, generated by σ, which sends ⁵√2 to ζ₅⁵√2 and fixes ζ₅, and τ, which fixes ⁵√2 and sends ζ₅ to ζ₅²), which is solvable, and its roots are ζ₅ᵏ ⁵√2. Up to conjugacy, the solvable transitive subgroups of S₅ are C₅, D₅ and F₂₀, which are exactly the transitive subgroups of F₂₀. Beyond radicals, the general quintic can be solved by elliptic modular functions (Hermite, 1858) or by the geometry of the icosahedron (Klein, 1884), whose rotation group is A₅.

✏️ Your Turn

(a) Show that x⁵ − 4x + 2 is not solvable by radicals over ℚ.
(b) Why is every polynomial of degree at most 4 solvable by radicals?

Answers: (a) It is Eisenstein at 2, hence irreducible of degree 5. The real critical points are ±(4/5)^(1/4) ≈ ±0.9457, with f(−0.9457) ≈ 5.03 > 0 and f(0.9457) ≈ −1.03 < 0, so there are exactly three real roots (≈ −1.5185, 0.5085, 1.2436) and two non-real roots. As in Theorem 12.5, the Galois group contains a 5-cycle and a transposition, so it is S₅, which is not solvable. (b) The Galois group of a polynomial of degree n ≤ 4 embeds in Sₙ, and S₁, S₂, S₃ and S₄ are solvable (S₄ ⊳ A₄ ⊳ V₄ ⊳ 1 has abelian quotients C₂, C₃ and V₄). Subgroups of solvable groups are solvable, so Theorem 12.2 applies.

─────────────────────────────────
Lesson 13: Numerical Solution — Newton's Method and Its Convergence
─────────────────────────────────

📌 Key idea of this section:

        xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)
        xₙ₊₁ − r = (f″(ξₙ) / (2f′(xₙ))) (xₙ − r)²          (quadratic convergence at a simple root)

When the roots of an equation have no expression by radicals, or when the expression is unusable, we compute them. Every serious root-finder rests on a few ideas: bracketing (bisection), local linearization (Newton), counting (Sturm), and linear algebra (eigenvalues of the companion matrix).

Newton's method

Replace f near xₙ by its tangent line f(xₙ) + f′(xₙ)(x − xₙ) and take the zero of the tangent as the next approximation. The idea goes back to Newton (1669, for polynomials, in a different form) and Raphson (1690); the modern formulation with derivatives is due to Simpson (1740).

Theorem 13.1 (Local quadratic convergence). Let f be twice continuously differentiable near r with f(r) = 0 and f′(r) ≠ 0. Then there is δ > 0 such that for every x₀ ∈ [r − δ, r + δ], the Newton iterates stay in this interval, converge to r, and satisfy |xₙ₊₁ − r| ≤ C|xₙ − r|² for a constant C. Moreover (xₙ₊₁ − r)/(xₙ − r)² → f″(r)/(2f′(r)).

Proof. Choose δ > 0 so that on I = [r − δ, r + δ] we have |f′| ≥ m > 0 and |f″| ≤ M, and so that Cδ < 1, where C = M/(2m). For xₙ ∈ I, Taylor's theorem with Lagrange remainder gives 0 = f(r) = f(xₙ) + f′(xₙ)(r − xₙ) + ½f″(ξₙ)(r − xₙ)² for some ξₙ between r and xₙ. Dividing by f′(xₙ) and rearranging,

        xₙ₊₁ − r = xₙ − r − f(xₙ)/f′(xₙ) = (f″(ξₙ)/(2f′(xₙ))) (xₙ − r)²

so |xₙ₊₁ − r| ≤ C|xₙ − r|² ≤ Cδ|xₙ − r| < |xₙ − r|, and xₙ₊₁ ∈ I. By induction all iterates lie in I, and C|xₙ − r| ≤ (C|x₀ − r|)^(2ⁿ) → 0, a doubly exponential decay. As xₙ → r, also ξₙ → r, giving the limit. ∎

In practice, quadratic convergence means that the number of correct digits roughly doubles at each step. For f = x² − 2 the iteration is xₙ₊₁ = (xₙ + 2/xₙ)/2, the ancient Babylonian (Heron's) method, and xₙ₊₁ − √2 = (xₙ − √2)²/(2xₙ) exactly. From x₀ = 1:

        x₁ = 1.5
        x₂ = 1.416666666667
        x₃ = 1.414215686275
        x₄ = 1.414213562375          (√2 = 1.41421356237…)

The ratio (xₙ₊₁ − √2)/(xₙ − √2)² tends to 1/(2√2) ≈ 0.3536, which is f″(r)/(2f′(r)) = 2/(4√2).

Multiple roots

If r is a root of multiplicity m ≥ 2, write f = (x − r)ᵐ g with g(r) ≠ 0. The Newton map N(x) = x − f(x)/f′(x) has f/f′ = (x − r)g/(mg + (x − r)g′), so N′(r) = 1 − 1/m ≠ 0. Convergence is merely linear, with ratio (m − 1)/m. For f = (x − 1)²(x + 2) from x₀ = 2, the errors are 0.5556, 0.2979, 0.1554, 0.0796, 0.0403: each roughly half the previous one, as m = 2 predicts. The modified iteration xₙ₊₁ = xₙ − m f(xₙ)/f′(xₙ) restores quadratic convergence (iterates 1.1111, 1.00195, 1.0000006), and Newton's method applied to f/f′, whose roots are all simple, avoids needing to know m.

Global behaviour, cycles and fractals

Newton's method is local. For f = x³ − 2x + 2 and x₀ = 0, one finds x₁ = 0 − 2/(−2) = 1 and x₂ = 1 − 1/1 = 0, so the iteration cycles forever between 0 and 1, while the only real root is r ≈ −1.7693. The cycle is attracting: the Newton map has N′(x) = f(x)f″(x)/f′(x)², which vanishes at 0 because f″(0) = 0, so the derivative of N∘N along the cycle is N′(0)N′(1) = 0, and an open interval of starting points around 0 is trapped. In the complex plane, Cayley (1879) asked for the basins of attraction of Newton's method for z³ − 1. The answer, understood only with the development of complex dynamics by Fatou and Julia (1918–1920) and visualized by computer in the 1980s, is that the three basins share a common fractal boundary, the Julia set of the Newton map: every boundary point of one basin is a boundary point of all three. Despite this, Hubbard, Schleicher and Sutherland (2001) showed that for every polynomial of degree d, suitably normalized, an explicit set of O(d log² d) starting points finds all the roots.

Bisection and Sturm sequences

If f is continuous with f(a)f(b) < 0, halving the interval and keeping the half with a sign change gains one binary digit per step, regardless of f′. Robust solvers (Brent's method) combine guaranteed bisection with fast interpolation steps. To find intervals with exactly one root, one counts roots.

Theorem 13.2 (Sturm, 1829). Let f ∈ ℝ[x] be square-free. Define p₀ = f, p₁ = f′, and pᵢ₊₁ = −(remainder of pᵢ₋₁ divided by pᵢ), until a constant pₖ is reached. For x not a root of f, let V(x) be the number of sign changes in p₀(x), p₁(x), …, pₖ(x), ignoring zeros. Then for a < b, neither a root, the number of distinct real roots of f in (a, b) is V(a) − V(b).

Idea of proof. V can change only where some pᵢ vanishes. Consecutive pᵢ have no common zero (their gcd is gcd(f, f′) = 1), and if pᵢ(c) = 0 with 0 < i < k then pᵢ₋₁(c) = −pᵢ₊₁(c), so the pair around pᵢ contributes exactly one sign change on both sides of c, and V does not change. At a root c of f, f and f′ have opposite signs just to the left of c and equal signs just to the right, so V drops by exactly one. ∎

Example. For f = x³ − 3x + 1: p₁ = 3x² − 3; dividing, f = (x/3)p₁ + (−2x + 1), so p₂ = 2x − 1; then p₁ evaluated at x = 1/2 gives the remainder −9/4, so p₃ = 9/4. At x = 0 the signs are (+, −, −, +), with V(0) = 2. At x = 2 the values are (3, 9, 3, 9/4), with V(2) = 0. So f has exactly two roots in (0, 2) (they are 2cos(4π/9) ≈ 0.3473 and 2cos(2π/9) ≈ 1.5321). As x → −∞ the signs are (−, +, −, +), with V = 3, and as x → +∞ they are all +, so f has three real roots in total.

Linear algebra and conditioning

The roots of the monic polynomial xⁿ + cₙ₋₁xⁿ⁻¹ + ⋯ + c₀ are the eigenvalues of its companion matrix, the n × n matrix with ones on the subdiagonal and last column (−c₀, −c₁, …, −cₙ₋₁)ᵀ. Computing them by the QR algorithm, which is backward stable, is how standard numerical libraries compute polynomial roots. Simultaneous iterations such as Weierstrass's (Durand–Kerner) method and the Aberth–Ehrlich method approximate all n roots at once.

Backward stability does not mean that roots are well determined by the coefficients. Wilkinson's polynomial w(x) = (x − 1)(x − 2)⋯(x − 20) became the classic warning: changing the coefficient −210 of x¹⁹ by 2⁻²³ (about 10⁻⁷) moves the roots 10 to 19 dramatically, five pairs becoming complex with imaginary parts of size up to about 2.8. The condition number of a simple root r with respect to a coefficient aₖ is |aₖ rᵏ| / |r f′(r)|, which is enormous for w. The lesson is that representing a polynomial by its monomial coefficients can itself be the ill-conditioned step; this is why the problem is often posed in other bases or as an eigenvalue problem from the start.

✏️ Your Turn

(a) Apply two steps of Newton's method to x² − 3 starting from x₀ = 2.
(b) Show that the Newton map for f = (x − r)ᵐ is linear, and find its fixed-point ratio.

Answers: (a) xₙ₊₁ = (xₙ + 3/xₙ)/2. Then x₁ = (2 + 1.5)/2 = 1.75 and x₂ = (1.75 + 1.714285…)/2 = 1.732142857…, compared with √3 = 1.732050808…; the error went from 0.268 to 0.018 to 0.000092. (b) f/f′ = (x − r)/m, so N(x) = x − (x − r)/m and N(x) − r = (1 − 1/m)(x − r). Each step multiplies the error by exactly (m − 1)/m.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped by difficulty. The Core problems check fluency with the computations of each lesson; the Advanced problems require combining several ideas or writing a short proof; the Challenge problems are of the kind found on graduate qualifying examinations. Full solutions follow in the answer key. Unless stated otherwise, polynomials have rational coefficients and fields have characteristic 0.

Core (Problems 1–20)

  1. Solve the system x + 2y + z = 4, 3x − y + 2z = 15, x + y − z = −3 by Gaussian elimination.
  2. For which k does the system x + 2y = 3, 2x + ky = 6 have a unique solution, infinitely many solutions, or none?
  3. Find the rank of the matrix with rows (1, 2, 3), (4, 5, 6), (7, 8, 9) and a basis of its kernel.
  4. Find the rank of the matrix with rows (1, 2, 1, 0), (2, 4, 0, 2), (3, 6, 1, 2) and a basis of the solution space of the homogeneous system.
  5. Divide x⁵ + 1 by x² + 1, giving quotient and remainder.
  6. Compute gcd(x⁴ − 1, x⁶ − 1) in ℚ[x], and state the general formula for gcd(xᵃ − 1, xᵇ − 1).
  7. Find all rational roots of 6x³ − 11x² + 6x − 1.
  8. Prove that x⁴ + 10x + 5 is irreducible over ℚ.
  9. Is x³ + 2x + 1 irreducible over 𝔽₃? Over ℚ?
  10. Let α, β, γ be the roots of x³ + 2x² − 5x + 1. Compute α² + β² + γ² and 1/α + 1/β + 1/γ.
  11. Find the monic cubic with roots 1, 2 and −4.
  12. Depress x³ − 6x² + 11x − 6 by a translation and solve it.
  13. Solve x³ − 6x − 9 = 0 by Cardano's formula, and find all three roots.
  14. Compute the discriminant of x³ − 7x + 6 and say what it tells you about the roots.
  15. Solve x² + x + 1 = 0 in 𝔽₁₃.
  16. Let α, β, γ be the roots of x³ − x − 1. Compute α³ + β³ + γ³.
  17. Find [ℚ(√2, √5) : ℚ] and the minimal polynomial of √2 + √5 over ℚ.
  18. Find the minimal polynomials over ℚ of 1 + √3 and of 1 + ∛2.
  19. Apply three steps of Newton's method to x³ − 2 starting from x₀ = 1, and compare with ∛2.
  20. Find all roots of x² − 1 in ℤ/8ℤ, and explain why this does not contradict Corollary 2.3.

Advanced (Problems 21–45)

  21. Discuss the system x + y + az = 1, x + ay + z = 1, ax + y + z = 1 for all real a, using rank.
  22. Let a ≠ b. Find the remainder of f ∈ K[x] on division by (x − a)(x − b) in terms of f(a) and f(b).
  23. Find gcd(f, f′) and the square-free part of f = x⁵ − 3x⁴ + 4x³ − 4x² + 3x − 1.
  24. Show that x³ + x + 1 is irreducible over 𝔽₂ and over ℚ, and describe the field 𝔽₂[x]/(x³ + x + 1).
  25. Factor x⁴ + 1 over 𝔽₂, 𝔽₃ and 𝔽₅, and prove that it is irreducible over ℚ.
  26. Prove that x⁴ − 4x³ + 6x² − 4x + 3 is irreducible over ℚ.
  27. Let f ∈ ℤ[x] be monic with f(0) and f(1) both odd. Prove that f has no rational root.
  28. Apply Cardano's formula to x³ − 7x + 6. Why must complex numbers appear, and why does this not contradict the casus irreducibilis theorem in a deeper sense?
  29. Solve x³ − 3x − 1 = 0 trigonometrically, giving the roots to four decimal places.
  30. Solve y⁴ − 6y² + 8y − 3 = 0 by Ferrari's method, and explain the multiplicity of the resolvent root.
  31. Compute the discriminant of y⁴ + y + 1 and decide how many real roots it has.
  32. Let t₁, t₂, t₃ be the roots of t³ + pt + q. Express (t₁ − t₂)² + (t₁ − t₃)² + (t₂ − t₃)² in terms of p and q.
  33. Let α, β, γ be the roots of x³ − x − 1. Compute α⁵ + β⁵ + γ⁵ in two ways.
  34. Express x₁³ + x₂³ + x₃³ − 3x₁x₂x₃ in terms of elementary symmetric polynomials.
  35. Compute Res(x² − 2, x³ − 3).
  36. Use a resultant to find the intersection points of x² + y² = 1 and y = x² − 1, and reconcile the count with Bézout's theorem.
  37. Compute Disc(x⁵ − 6x + 3) and check its sign against the number of real roots.
  38. Factor x⁴ + 4 into real quadratics, and explain why every real polynomial is a product of real factors of degree at most 2.
  39. Prove the Cauchy bound and apply it to 2x³ − 3x² − 3x + 2.
  40. Find the degree of the splitting field of x⁴ − 2 over ℚ and identify its Galois group.
  41. Show that Gal(ℚ(ζ₅)/ℚ) is cyclic of order 4 and find its unique quadratic subfield.
  42. Show that ℚ(√2 + i) = ℚ(√2, i) and find the minimal polynomial of √2 + i.
  43. Determine the Galois groups over ℚ of x³ − x − 1 and of x³ − 7x − 7.
  44. How many fields lie between ℚ and the splitting field of x³ − 2 (inclusive)? List them.
  45. Analyse Newton's method for f = (x − 1)²(x + 2) near x = 1, and give an iteration that converges quadratically there.

Challenge (Problems 46–60)

  46. Prove that the conjugacy classes of A₅ have sizes 1, 15, 20, 12, 12.
  47. Prove that x⁵ − 10x + 5 is not solvable by radicals over ℚ.
  48. Express cos(2π/5) and a primitive fifth root of unity in radicals, and explain why x⁵ − 1 is solvable.
  49. Prove that the roots of x³ − 3x + 1 cannot be expressed using only real radicals.
  50. Prove that the regular heptagon cannot be constructed with ruler and compass.
  51. How many intermediate fields does the splitting field of x⁴ − 2 over ℚ have?
  52. For Newton's method on x² − 2, compute lim (xₙ₊₁ − √2)/(xₙ − √2)², and prove the exact error identity.
  53. Show that Newton's method for x³ − 2x + 2 has a superattracting 2-cycle.
  54. Prove the fundamental theorem of algebra from Liouville's theorem.
  55. Using the product formula, prove Res(f, gh) = Res(f, g) Res(f, h) and Res(g, f) = (−1)^(mn) Res(f, g).
  56. Count the monic irreducible cubics over 𝔽ₚ, and list them for p = 2.
  57. Prove that xᵖ − x − a is irreducible over 𝔽ₚ for every a ≠ 0 in 𝔽ₚ.
  58. Show that Gal(x⁴ + 1) over ℚ is the Klein four-group, and use this to explain why x⁴ + 1 is reducible modulo every prime.
  59. Use a Sturm sequence to count the roots of x⁴ − 5x² + 4 in (0, 3).
  60. Given that x⁴ + 8x + 12 is irreducible over ℚ, show that its Galois group is A₄.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. Row 2 − 3 × row 1 gives −7y − z = 3; row 3 − row 1 gives −y − 2z = −7, so y = 7 − 2z. Substituting, −49 + 14z − z = 3, so 13z = 52 and z = 4. Then y = −1 and x = 4 − 2(−1) − 4 = 2. The solution is (2, −1, 4); check: 3(2) − (−1) + 2(4) = 15 and 2 − 1 − 4 = −3.
  2. The determinant is k − 4. If k ≠ 4 there is a unique solution, namely x = 3, y = 0 (which visibly satisfies both equations). If k = 4 the second equation is twice the first, so there are infinitely many solutions x = 3 − 2t, y = t. There is no value of k for which the system is inconsistent, since (3, 0) is always a solution.
  3. Row 2 − 4 × row 1 = (0, −3, −6) and row 3 − 7 × row 1 = (0, −6, −12) = 2 × (0, −3, −6). So the rank is 2 and the kernel has dimension 1. From y + 2z = 0 and x + 2y + 3z = 0, taking z = 1 gives y = −2, x = 1: the kernel is spanned by (1, −2, 1).
  4. Row 3 = row 1 + row 2, and rows 1, 2 are independent, so the rank is 2 and the nullity is 4 − 2 = 2. From x₁ + 2x₂ + x₃ = 0 and (row 2 − 2 row 1) −2x₃ + 2x₄ = 0, we get x₃ = x₄ and x₁ = −2x₂ − x₄. A basis is (−2, 1, 0, 0) and (−1, 0, 1, 1).
  5. x⁵ + 1 = (x² + 1)(x³ − x) + (x + 1). Check: (x² + 1)(x³ − x) = x⁵ − x, and adding x + 1 gives x⁵ + 1.
  6. x⁶ − 1 = x²(x⁴ − 1) + (x² − 1), and x² − 1 divides x⁴ − 1, so the gcd is x² − 1. In general gcd(xᵃ − 1, xᵇ − 1) = x^(gcd(a, b)) − 1, because xᵃ − 1 = xᵃ⁻ᵇ(xᵇ − 1) + (xᵃ⁻ᵇ − 1), so the Euclidean algorithm on the polynomials mirrors the Euclidean algorithm on the exponents.
  7. The candidates are ±1, ±1/2, ±1/3, ±1/6. f(1) = 0, and dividing gives 6x³ − 11x² + 6x − 1 = (x − 1)(6x² − 5x + 1) = (x − 1)(2x − 1)(3x − 1). The roots are 1, 1/2 and 1/3.
  8. Eisenstein at p = 5: 5 divides 10 and 5 (and the zero coefficients), 5 does not divide the leading coefficient 1, and 25 does not divide 5.
  9. Over 𝔽₃: f(0) = 1, f(1) = 4 ≡ 1, f(2) = 13 ≡ 1, so there is no root, and a cubic without roots is irreducible. Over ℚ the only rational root candidates are ±1, and f(1) = 4, f(−1) = −2, so it is irreducible over ℚ as well (which also follows from irreducibility modulo 3).
  10. e₁ = −2, e₂ = −5, e₃ = −1. Then α² + β² + γ² = e₁² − 2e₂ = 4 + 10 = 14, and 1/α + 1/β + 1/γ = e₂/e₃ = (−5)/(−1) = 5.
  11. (x − 1)(x − 2)(x + 4) = (x² − 3x + 2)(x + 4) = x³ + x² − 10x + 8.
  12. Put x = t + 2 (since b/(3a) = −2). Then x³ − 6x² + 11x − 6 becomes t³ − t = t(t − 1)(t + 1), so t ∈ {0, 1, −1} and x ∈ {2, 3, 1}.
  13. p = −6, q = −9, D = 81/4 − 216/27 = 81/4 − 8 = 49/4, √D = 7/2. Then u³ = 9/2 + 7/2 = 8 and v³ = 9/2 − 7/2 = 1, so u = 2, v = 1 (and uv = 2 = −p/3, as required). One root is x = 3. Dividing, x³ − 6x − 9 = (x − 3)(x² + 3x + 3), and the other roots are (−3 ± i√3)/2, which are also ωu + ω²v and ω²u + ωv.
  14. Δ = −4(−7)³ − 27 · 6² = 1372 − 972 = 400 > 0, so there are three distinct real roots. Since 400 = 20² is a square, the Galois group lies in A₃; in fact the cubic splits over ℚ: x³ − 7x + 6 = (x − 1)(x − 2)(x + 3), and indeed ((1 − 2)(1 + 3)(2 + 3))² = (−20)² = 400.
  15. Δ = 1 − 4 = −3 ≡ 10 (mod 13), and 6² = 36 ≡ 10, so the roots are (−1 ± 6)/2. As 2⁻¹ = 7 in 𝔽₁₃, these are 5 · 7 = 35 ≡ 9 and −7 · 7 = −49 ≡ 3. Check: 9² + 9 + 1 = 91 = 7 · 13 and 3² + 3 + 1 = 13. (They are the two primitive cube roots of unity modulo 13.)
  16. e₁ = 0, e₂ = −1, e₃ = 1, so p₃ = e₁³ − 3e₁e₂ + 3e₃ = 3. Alternatively, α³ = α + 1 for each root, so p₃ = p₁ + 3 = 0 + 3 = 3.
  17. As in Lesson 10, √5 ∉ ℚ(√2) (if √5 = a + b√2 then 5 = a² + 2b² + 2ab√2, forcing ab = 0, and neither 5 = a² nor 5 = 2b² has a rational solution), so the degree is 4. With α = √2 + √5, α² = 7 + 2√10, so (α² − 7)² = 40, giving α⁴ − 14α² + 9 = 0. Since α generates (α³ = 17√2 + 11√5 gives √2 = (α³ − 11α)/6), this degree-4 polynomial is the minimal polynomial.
  18. For 1 + √3: (x − 1)² = 3 gives x² − 2x − 2, irreducible since √3 is irrational. For 1 + ∛2: (x − 1)³ = 2 gives x³ − 3x² + 3x − 3, which is Eisenstein at 3 and hence the minimal polynomial.
  19. xₙ₊₁ = xₙ − (xₙ³ − 2)/(3xₙ²) = (2xₙ + 2/xₙ²)/3. Then x₁ = 4/3 ≈ 1.333333, x₂ = 91/72 ≈ 1.263889, x₃ ≈ 1.259933, while ∛2 ≈ 1.259921. The errors 0.0734, 0.00397, 0.0000124 show the number of correct digits roughly doubling.
  20. 1² = 1, 3² = 9 ≡ 1, 5² = 25 ≡ 1, 7² = 49 ≡ 1, while even numbers square to even numbers. So the roots are 1, 3, 5, 7: four roots for a quadratic. There is no contradiction because ℤ/8ℤ is not an integral domain: (x − 1)(x + 1) = 0 can hold with neither factor 0, for instance at x = 3, where (2)(4) = 8 ≡ 0.

Advanced

  21. The coefficient matrix has determinant −a³ + 3a − 2 = −(a − 1)²(a + 2). For a ≠ 1, −2 the solution is unique, and by symmetry x = y = z, so (a + 2)x = 1 and x = y = z = 1/(a + 2). For a = 1 all three equations are x + y + z = 1: rank A = rank [A | b] = 1, a two-parameter family of solutions. For a = −2, adding the three equations gives 0 = 3: rank A = 2 but rank [A | b] = 3, so there is no solution.
  22. The remainder r has degree at most 1 and satisfies r(a) = f(a), r(b) = f(b) (by the factor theorem applied to f − r). So r is the linear interpolant: r(x) = ((f(a) − f(b))/(a − b)) x + (a f(b) − b f(a))/(a − b). One checks r(a) = (a f(a) − a f(b) + a f(b) − b f(a))/(a − b) = f(a), and similarly r(b) = f(b).
  23. f = (x − 1)³(x² + 1), as expanding (x³ − 3x² + 3x − 1)(x² + 1) confirms. Then f′ = 3(x − 1)²(x² + 1) + 2x(x − 1)³ = (x − 1)²(5x² − 2x + 3), and 5x² − 2x + 3 shares no root with (x − 1)(x² + 1) (at x = 1 it is 6, at x = ±i it is −2 ∓ 2i). Hence gcd(f, f′) = (x − 1)², and the square-free part f / gcd(f, f′) is (x − 1)(x² + 1) = x³ − x² + x − 1.
  24. Over 𝔽₂, f(0) = 1 and f(1) = 1, so the cubic has no root and is irreducible. Over ℚ, f(±1) = 3 or −1, so again there is no rational root. Thus 𝔽₂[x]/(x³ + x + 1) is a field with 2³ = 8 elements, 𝔽₈, with basis 1, θ, θ² over 𝔽₂ where θ³ = θ + 1; its multiplicative group has prime order 7, so θ (indeed every element other than 0 and 1) generates it.
  25. Over 𝔽₂: x⁴ + 1 = (x + 1)⁴. Over 𝔽₃: (x² + x + 2)(x² + 2x + 2) = x⁴ + 3x³ + 6x² + 6x + 4 ≡ x⁴ + 1. Over 𝔽₅: (x² + 2)(x² + 3) = x⁴ + 5x² + 6 ≡ x⁴ + 1. Over ℚ: (x + 1)⁴ + 1 = x⁴ + 4x³ + 6x² + 4x + 2 is Eisenstein at 2, so x⁴ + 1 is irreducible.
  26. The polynomial is (x − 1)⁴ + 2. Substituting x = y + 1 gives y⁴ + 2, which is Eisenstein at 2; a translation preserves irreducibility.
  27. A rational root of a monic integer polynomial is an integer (rational root theorem with s = 1). For any integer n, f(n) ≡ f(0) or f(1) (mod 2) according as n is even or odd, because n ≡ 0 or 1 (mod 2) and f has integer coefficients. Both are odd, so f(n) ≠ 0.
  28. p = −7, q = 6, D = 9 − 343/27 = −100/27 < 0, so √D = (10/(3√3))i and Cardano's formula requires the cube roots of the non-real numbers −3 ± (10/(3√3))i. Indeed Δ = −108D = 400 > 0, so the roots 1, 2, −3 are real and distinct. Theorem 5.1 applies only to irreducible cubics; this one splits over ℚ, so its roots are trivially in ℚ. The appearance of complex numbers is a feature of the formula, not of the roots. (In fact one cube root of −3 + (10/(3√3))i is 1 + 2i/√3, giving u + v = 2.)
  29. With x = 2cos θ: 8cos³θ − 6cos θ − 1 = 2cos 3θ − 1 = 0, so cos 3θ = 1/2, 3θ ∈ {π/3, 7π/3, 13π/3} and θ ∈ {π/9, 7π/9, 13π/9}. The roots are 2cos(π/9) ≈ 1.8794, 2cos(7π/9) ≈ −1.5321, and 2cos(13π/9) = 2cos(5π/9) ≈ −0.3473. Check: their sum is 0 and their product is 1 = −q, as Vieta requires.
  30. p = −6, q = 8, r = −3. The resolvent is 8m³ − 48m² + 96m − 64 = 8(m − 2)³, so m = 2. Then (y² − 1)² = 4y² − 8y + 4 = 4(y − 1)², and y² − 1 = ±2(y − 1). The two quadratics are y² − 2y + 1 = (y − 1)² and y² + 2y − 3 = (y − 1)(y + 3). So y⁴ − 6y² + 8y − 3 = (y − 1)³(y + 3). The resolvent roots are (y₁ + y₂)²/2 over the three pairings of the roots {1, 1, 1, −3}: every pairing gives one pair {1, 1} with sum 2, so all three resolvent roots equal 2²/2 = 2, which explains the triple root.
  31. For y⁴ + qy + r, Disc = 256r³ − 27q⁴ = 256 − 27 = 229 > 0. So the roots are distinct and either all real or all non-real. The minimum of y⁴ + y + 1 on ℝ is at y = −(1/4)^(1/3) ≈ −0.630, where the value is about 0.528 > 0. So there are no real roots: two pairs of complex conjugate roots (approximately 0.7271 ± 0.9341i and −0.7271 ± 0.4300i).
  32. ∑_{i<j}(tᵢ − tⱼ)² = 2(t₁² + t₂² + t₃²) − 2e₂ = 2(e₁² − 2e₂) − 2e₂ = 2e₁² − 6e₂. With e₁ = 0 and e₂ = p, this is −6p (independent of q).
  33. Newton: p₁ = 0, p₂ = 2, p₃ = 3, p₄ = 2 (Lesson 7), and p₅ = e₁p₄ − e₂p₃ + e₃p₂ = 0 + 3 + 2 = 5. Directly: α³ = α + 1 gives α⁵ = α³ + α² = α² + α + 1, so p₅ = p₂ + p₁ + 3 = 2 + 0 + 3 = 5.
  34. Using p₃ = e₁³ − 3e₁e₂ + 3e₃, the expression is e₁³ − 3e₁e₂ + 3e₃ − 3e₃ = e₁³ − 3e₁e₂ = e₁(e₁² − 3e₂). This is the classical factorization x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx).
  35. Res = ∏ over the roots ±√2 of g(x) = x³ − 3: (2√2 − 3)(−2√2 − 3) = −(2√2 − 3)(2√2 + 3) = −(8 − 9) = 1.
  36. Treat both as polynomials in y. Since g = y − (x² − 1) is monic of degree 1, Res_y(f, g) = f(x, x² − 1) = x² + (x² − 1)² − 1 = x⁴ − x² = x²(x − 1)(x + 1). So x ∈ {0, 1, −1}, with points (0, −1), (1, 0), (−1, 0). Bézout predicts 2 · 2 = 4 intersections counted with multiplicity; the factor x² reflects that the parabola is tangent to the circle at (0, −1), an intersection of multiplicity 2.
  37. Disc(xⁿ + ax + b) = (−1)^(n(n−1)/2)(nⁿbⁿ⁻¹ + (−1)ⁿ⁻¹(n − 1)ⁿ⁻¹aⁿ). With n = 5, a = −6, b = 3: (−1)¹⁰(3125 · 81 + 256 · (−7776)) = 253125 − 1990656 = −1737531. For a real polynomial with distinct roots, the sign of the discriminant is (−1)^s where s is the number of conjugate pairs of non-real roots; here s = 1 (three real roots, Theorem 12.5), and the sign is negative, as it should be.
  38. x⁴ + 4 = (x² + 2)² − (2x)² = (x² + 2x + 2)(x² − 2x + 2). In general, by the fundamental theorem of algebra a real polynomial factors over ℂ into linear factors; the non-real roots occur in conjugate pairs α, ᾱ of equal multiplicity, and each pair combines into the real quadratic x² − 2Re(α)x + |α|².
  39. Let A = max_{i<n}|aᵢ/aₙ| and |z| > 1 + A. Then |aₙ₋₁zⁿ⁻¹ + ⋯ + a₀| ≤ |aₙ|A(|z|ⁿ⁻¹ + ⋯ + 1) = |aₙ|A(|z|ⁿ − 1)/(|z| − 1) < |aₙ||z|ⁿ, since A/(|z| − 1) < 1. So f(z) ≠ 0. For 2x³ − 3x² − 3x + 2, A = 3/2 and all roots satisfy |z| ≤ 5/2; the roots 2, −1, 1/2 do.
  40. The roots are ±⁴√2, ±i⁴√2, so the splitting field is ℚ(⁴√2, i). Since x⁴ − 2 is Eisenstein, [ℚ(⁴√2) : ℚ] = 4; this field is real, so i ∉ ℚ(⁴√2) and the degree is 8. The Galois group has order 8 and acts faithfully on the four roots, which form a square in the complex plane; it is generated by r : ⁴√2 ↦ i⁴√2, i ↦ i (order 4) and complex conjugation s (order 2), with srs = r⁻¹. It is the dihedral group D₄ of order 8.
  41. Φ₅ is irreducible (Lesson 3), so [ℚ(ζ₅) : ℚ] = 4 and the automorphisms are ζ₅ ↦ ζ₅ᵃ for a ∈ (ℤ/5ℤ)ˣ = {1, 2, 3, 4}, which is cyclic, generated by 2 (2, 4, 3, 1 are its powers). A cyclic group of order 4 has a unique subgroup of order 2, generated by ζ ↦ ζ⁴ = ζ̄. Its fixed field contains ζ + ζ⁴ = 2cos(2π/5) = (√5 − 1)/2, so the quadratic subfield is ℚ(√5).
  42. Let α = √2 + i. Then (α − i)² = 2 gives α² − 2iα − 1 = 2, so α² − 3 = 2iα, and squaring, (α² − 3)² = −4α², that is α⁴ − 2α² + 9 = 0. From α² − 3 = 2iα we get i = (α² − 3)/(2α) ∈ ℚ(α), and then √2 = α − i ∈ ℚ(α). So ℚ(α) = ℚ(√2, i), which has degree 4, and x⁴ − 2x² + 9 is the minimal polynomial.
  43. x³ − x − 1 has no rational roots (f(±1) = −1, −1), so it is irreducible; its discriminant is −4(−1)³ − 27 = −23, not a square, so the Galois group is S₃. x³ − 7x − 7 is Eisenstein at 7; its discriminant is −4(−7)³ − 27(−7)² = 1372 − 1323 = 49 = 7², a square, so the Galois group is A₃ ≅ C₃.
  44. The Galois group is S₃, which has six subgroups: 1, three of order 2, A₃, and S₃. Correspondingly there are six fields: ℚ(∛2, ω), the three cubic fields ℚ(∛2), ℚ(ω∛2), ℚ(ω²∛2), the quadratic field ℚ(ω) = ℚ(√−3), and ℚ.
  45. The root 1 is double (m = 2), so Newton's map has N′(1) = 1 − 1/2 = 1/2: convergence is linear and the error is roughly halved at each step (from x₀ = 2 the errors are 0.556, 0.298, 0.155, 0.080, 0.040). The modified iteration xₙ₊₁ = xₙ − 2f(xₙ)/f′(xₙ) has derivative 0 at the root and converges quadratically (1.1111, 1.00195, 1.0000006, …).

Challenge

  46. In S₅ there are 20 three-cycles, 15 double transpositions and 24 five-cycles in A₅, besides the identity: 1 + 20 + 15 + 24 = 60. An Sₙ-class C ⊆ Aₙ either remains a single Aₙ-class or splits into two of equal size, and it splits exactly when the centralizer in Sₙ of an element of C lies inside Aₙ. The centralizer of (1 2 3) contains the odd permutation (4 5), and the centralizer of (1 2)(3 4) contains the odd permutation (1 2), so these classes do not split. The centralizer of a 5-cycle σ in S₅ has order 120/24 = 5, so it is ⟨σ⟩ ⊆ A₅, and the class of 24 five-cycles splits into two classes of 12. Hence the class equation is 60 = 1 + 15 + 20 + 12 + 12.
  47. f = x⁵ − 10x + 5 is Eisenstein at 5. f′ = 5x⁴ − 10 vanishes on ℝ only at ±2^(1/4) ≈ ±1.1892, with f(−1.1892) ≈ 14.51 > 0 and f(1.1892) ≈ −4.51 < 0, so f has exactly three real roots (≈ −1.8860, 0.5032, 1.6217) and two non-real roots (≈ −0.1195 ± 1.7984i). As in Theorem 12.5, Gal(f) contains a 5-cycle (5 divides its order) and a transposition (complex conjugation), so it is S₅, which is not solvable; by Theorem 12.2 f is not solvable by radicals.
  48. Let c = cos(2π/5). From ζ⁴ + ζ³ + ζ² + ζ + 1 = 0, dividing by ζ² and putting y = ζ + ζ⁻¹ = 2c gives y² + y − 1 = 0, so y = (√5 − 1)/2 (the positive root) and c = (√5 − 1)/4. Then sin(2π/5) = √(1 − c²) = √(10 + 2√5)/4, and ζ₅ = (√5 − 1)/4 + i√(10 + 2√5)/4. x⁵ − 1 = (x − 1)Φ₅ has Galois group (ℤ/5ℤ)ˣ ≅ C₄, which is abelian, hence solvable, and the formula above exhibits the radicals explicitly.
  49. x³ − 3x + 1 has no rational root (f(1) = −1, f(−1) = 3), so it is irreducible over ℚ. Its discriminant is 81 > 0, so its three roots are real (they are 2cos(2π/9), 2cos(4π/9), 2cos(8π/9)). By Theorem 5.1 no root lies in a tower of real radical extensions of ℚ: any radical expression for these real numbers must pass through non-real complex numbers.
  50. A regular heptagon is constructible if and only if cos(2π/7) is. Let ζ = e^(2πi/7) and y = ζ + ζ⁻¹ = 2cos(2π/7). Dividing 1 + ζ + ⋯ + ζ⁶ = 0 by ζ³ gives (ζ³ + ζ⁻³) + (ζ² + ζ⁻²) + (ζ + ζ⁻¹) + 1 = 0, and since ζ² + ζ⁻² = y² − 2 and ζ³ + ζ⁻³ = y³ − 3y, this is y³ + y² − 2y − 1 = 0. The candidates ±1 give −1 and 1, so the cubic is irreducible and [ℚ(cos(2π/7)) : ℚ] = 3, which is not a power of 2. By Wantzel's theorem cos(2π/7) is not constructible. (Equivalently, φ(7) = 6 is not a power of 2.)
  51. The Galois group is D₄ (Problem 40), which has 10 subgroups: the trivial group, five subgroups of order 2 (the rotation by π and four reflections), three of order 4 (the cyclic rotation group and two Klein four-groups), and D₄ itself. By the fundamental theorem there are 10 intermediate fields, including ℚ and the splitting field. Explicitly they are ℚ, ℚ(i), ℚ(√2), ℚ(√−2), ℚ(⁴√2), ℚ(i⁴√2), ℚ(√2, i), ℚ((1 + i)⁴√2), ℚ((1 − i)⁴√2), and ℚ(⁴√2, i).
  52. xₙ₊₁ − √2 = (xₙ² + 2)/(2xₙ) − √2 = (xₙ² − 2√2xₙ + 2)/(2xₙ) = (xₙ − √2)²/(2xₙ). This is exact. As xₙ → √2, the ratio (xₙ₊₁ − √2)/(xₙ − √2)² = 1/(2xₙ) → 1/(2√2) ≈ 0.3536, in agreement with f″(r)/(2f′(r)) = 2/(2 · 2√2).
  53. With f = x³ − 2x + 2, f′ = 3x² − 2: N(0) = 0 − 2/(−2) = 1 and N(1) = 1 − 1/1 = 0, so {0, 1} is a 2-cycle. Since N′ = ff″/(f′)² and f″ = 6x, N′(0) = 0 and N′(1) = 1 · 6 / 1² = 6. The multiplier of the cycle is (N∘N)′(0) = N′(1)N′(0) = 0, so the cycle is superattracting: all starting points sufficiently close to 0 converge to the cycle, not to the root ≈ −1.7693, and the convergence to the cycle is quadratic.
  54. Suppose f ∈ ℂ[z] has degree n ≥ 1 and no root. Then g = 1/f is entire. By Lemma 9.2 there is R with |f(z)| ≥ 1 for |z| ≥ R, so |g| ≤ 1 there, and |g| is bounded on the compact disc |z| ≤ R by continuity. So g is a bounded entire function, constant by Liouville's theorem, and then f is constant, a contradiction.
  55. Let f have roots αᵢ and leading coefficient a, of degree n, and let g, h have degrees m, k and leading coefficients b, c. Then Res(f, gh) = a^(m+k) ∏ᵢ g(αᵢ)h(αᵢ) = (aᵐ∏g(αᵢ))(aᵏ∏h(αᵢ)) = Res(f, g)Res(f, h). For the symmetry, Res(g, f) = bⁿaᵐ∏_{j,i}(βⱼ − αᵢ), and each of the mn factors changes sign relative to αᵢ − βⱼ, so Res(g, f) = (−1)^(mn)Res(f, g).
  56. A monic cubic is reducible exactly when it has a root, so it is a product of three monic linear factors or of one linear factor and an irreducible quadratic. The number of multisets of size 3 from p elements is C(p + 2, 3) = p(p + 1)(p + 2)/6, and there are p · (p² − p)/2 products of a linear factor and an irreducible quadratic. Hence the number of irreducible monic cubics is p³ − p(p + 1)(p + 2)/6 − p²(p − 1)/2 = (p³ − p)/3. (This agrees with Gauss's formula (1/3)(p³ − p).) For p = 2 there are 2: x³ + x + 1 and x³ + x² + 1.
  57. Let f = xᵖ − x − a and let α be a root in a splitting field. For c ∈ 𝔽ₚ, (α + c)ᵖ − (α + c) − a = αᵖ + c − α − c − a = 0 (Frobenius is additive and cᵖ = c), so the roots are α, α + 1, …, α + p − 1. None lies in 𝔽ₚ, because tᵖ − t = 0 for t ∈ 𝔽ₚ while a ≠ 0. Suppose f = gh with g monic of degree d, 0 < d < p. Then g = ∏_{c ∈ S}(x − α − c) for some set S of d elements of 𝔽ₚ, and its x^(d−1) coefficient −(dα + ∑S) lies in 𝔽ₚ. Since d is invertible in 𝔽ₚ, α ∈ 𝔽ₚ, a contradiction. So f is irreducible.
  58. The roots of x⁴ + 1 are the primitive eighth roots of unity ζ, ζ³, ζ⁵, ζ⁷ with ζ = e^(2πi/8), so the splitting field is ℚ(ζ₈) = ℚ(i, √2), with Galois group (ℤ/8ℤ)ˣ = {1, 3, 5, 7}, in which every element has order dividing 2: the Klein four-group. Modulo 2, x⁴ + 1 = (x + 1)⁴. For an odd prime p, the discriminant 256 is prime to p, and Dedekind's theorem says that the degrees of the irreducible factors of f modulo p are the cycle lengths of a Frobenius element in Gal(f) acting on the roots. Every element of the Klein group has order 1 or 2, so all cycle lengths are at most 2, and f factors modulo p into factors of degree at most 2. (Directly: 𝔽_(p²)ˣ is cyclic of order p² − 1, which is divisible by 8 for odd p, so 𝔽_(p²) contains all roots of x⁴ + 1.)
  59. Take p₀ = x⁴ − 5x² + 4 and p₁ = 4x³ − 10x. Then p₀ = (x/4)p₁ − (5/2)x² + 4, so p₂ = (5/2)x² − 4; scaling by positive constants does not change sign counts, so use p₂ = 5x² − 8. Next 4x³ − 10x = (4x/5)(5x² − 8) − (18/5)x, so p₃ = x (after positive scaling). Finally 5x² − 8 = 5x · x − 8, so p₄ = 8, or 1 after scaling. At x = 0 the signs are (4, 0, −8, 0, 1) → (+, −, +) ignoring zeros, so V(0) = 2. At x = 3 the values are (40, 78, 37, 3, 1), all positive, so V(3) = 0. Hence there are V(0) − V(3) = 2 roots in (0, 3), namely 1 and 2, since x⁴ − 5x² + 4 = (x² − 1)(x² − 4).
  60. For y⁴ + qy + r with q = 8 and r = 12, Disc = 256 · 12³ − 27 · 8⁴ = 442368 − 110592 = 331776 = 576², a square, so G = Gal(f) ⊆ A₄. Since f is irreducible, G is transitive on the four roots, so G is V₄ or A₄ (the transitive subgroups of A₄). The Ferrari resolvent is 8m³ − 96m − 64 = 8(m³ − 12m − 8), and m³ − 12m − 8 has no rational roots (testing ±1, ±2, ±4, ±8 gives −19, 3, −24, 8, 8, −24, 408, −424), so it is irreducible. Its roots (y₁ + y₂)²/2, (y₁ + y₃)²/2, (y₁ + y₄)²/2 lie in the splitting field and generate a cubic extension of ℚ, so 3 divides |G|. Hence G ≠ V₄, and G = A₄.
