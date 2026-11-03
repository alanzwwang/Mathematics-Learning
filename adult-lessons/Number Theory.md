Number Theory — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Elementary number theory studies the integers ℤ with nothing more than addition, multiplication and the order relation, yet it contains some of the deepest problems in mathematics. The subject has a peculiar character: its theorems can usually be stated to a schoolchild, while their proofs may require the full apparatus of modern algebra and analysis. Fermat's Last Theorem, stated in 1637 and proved by Andrew Wiles (with Richard Taylor) in 1995, is the famous example; the Riemann hypothesis, still open, is another.

The introductory lesson on this topic covered divisibility rules, prime factorisations, the divisor-counting function, greatest common divisors, least common multiples and the Euclidean algorithm. This course assumes all of that and rebuilds it rigorously, then goes much further. The guiding idea, due to Gauss's Disquisitiones Arithmeticae (1801), is to replace statements about divisibility by statements about the arithmetic of residue classes: the ring ℤ/nℤ and its unit group (ℤ/nℤ)×. The structure of these finite rings and groups governs almost everything in the first half of the course, culminating in the law of quadratic reciprocity, which Gauss called the theorema aureum (golden theorem).

The second half turns to arithmetic functions and the distribution of the primes, where analysis enters through Dirichlet series and the Riemann zeta function; to classical Diophantine equations (sums of two squares, Pell's equation); and finally to computation: primality testing and the RSA cryptosystem, where nineteenth-century theorems became twentieth-century infrastructure.

Notation. ℕ = {1, 2, 3, …}. For integers a, b we write a | b when b = ac for some c ∈ ℤ. The letter p always denotes a prime. gcd(a, b) and lcm(a, b) are written (a, b) and [a, b] when no confusion is possible. The natural logarithm is log. For functions f, g we write f(x) = O(g(x)) if |f(x)| ≤ C g(x) for some constant C and all large x, and f ~ g if f(x)/g(x) → 1.

In this course, you will:

  1. Prove the division algorithm, Bézout's identity and the fundamental theorem of arithmetic from the well-ordering principle
  2. Work in the rings ℤ/nℤ and prove the theorems of Fermat, Euler and Wilson as consequences of group theory
  3. Prove the Chinese remainder theorem as a ring isomorphism and use it to compute with composite moduli
  4. Determine the structure of (ℤ/nℤ)× completely, including the existence of primitive roots
  5. Develop quadratic residues, the Legendre and Jacobi symbols, and prove quadratic reciprocity
  6. Use Dirichlet convolution and Möbius inversion to manipulate arithmetic functions
  7. Prove Chebyshev-type bounds for π(x) and understand the statements of the prime number theorem, Dirichlet's theorem and the Riemann hypothesis
  8. Solve the classical Diophantine equations: linear equations, sums of two squares and Pell's equation
  9. Analyse the Miller–Rabin primality test and prove the correctness of RSA

How to read this course: each lesson opens with its key statement, develops definitions, theorems and complete proofs, and closes with exercises whose solutions are given immediately afterwards. The practice problems at the end are graded from routine computation to research-flavoured proofs, and the answer key works every one of them in full.

─────────────────────────────────
Lesson 1: Divisibility, the Euclidean Algorithm and Bézout's Identity
─────────────────────────────────

📌 Key idea of this section:

        For a, b ∈ ℤ not both 0, the set {ax + by : x, y ∈ ℤ} is exactly dℤ, where d = gcd(a, b).

The well-ordering principle

Every argument in this lesson rests on one axiom of the integers: every non-empty set of natural numbers has a least element. This is equivalent to the principle of mathematical induction, and it is the source of every existence statement below.

Theorem 1.1 (Division algorithm). Let a ∈ ℤ and b ∈ ℕ. There are unique integers q and r with a = bq + r and 0 ≤ r < b.

Proof. Existence: the set S = {a − bk : k ∈ ℤ, a − bk ≥ 0} is non-empty (take k = −|a|, since then a − bk = a + b|a| ≥ a + |a| ≥ 0). Let r = a − bq be its least element. Then r ≥ 0, and if r ≥ b we would have r − b = a − b(q + 1) ∈ S, smaller than r, a contradiction. Uniqueness: if bq + r = bq' + r' with 0 ≤ r, r' < b, then b | r − r' and |r − r'| < b, so r = r' and then q = q'. ∎

Greatest common divisors

For integers a, b not both zero, a common divisor is an integer d with d | a and d | b; the greatest such d is gcd(a, b). It exists because the common divisors are bounded by max(|a|, |b|) and include 1. We say a and b are coprime (relatively prime) if gcd(a, b) = 1.

Theorem 1.2 (Bézout's identity). Let a, b ∈ ℤ, not both 0, and let I = {ax + by : x, y ∈ ℤ}. Then I = dℤ where d = gcd(a, b). In particular there exist integers x, y with ax + by = gcd(a, b).

Proof. I contains positive elements (a² + b² > 0 is one). Let d be the least positive element of I, say d = ax₀ + by₀. Divide a by d: a = dq + r with 0 ≤ r < d. Then r = a − dq = a(1 − qx₀) + b(−qy₀) ∈ I, and minimality of d forces r = 0. So d | a, and similarly d | b. Conversely any common divisor c of a and b divides ax₀ + by₀ = d, so c ≤ |c| ≤ d. Hence d = gcd(a, b). Finally I is closed under addition and under multiplication by integers, so dℤ ⊆ I, and every element ax + by of I is divisible by d, so I ⊆ dℤ. ∎

The structural content of Theorem 1.2 is that ℤ is a principal ideal domain: the ideal (a, b) generated by a and b is principal, generated by gcd(a, b). Two corollaries are used constantly.

Corollary 1.3. A common divisor of a and b divides gcd(a, b); and gcd(a, b) = 1 if and only if ax + by = 1 has an integer solution.

Corollary 1.4 (Generalised Euclid's lemma). If a | bc and gcd(a, b) = 1, then a | c.

Proof. Write ax + by = 1. Multiply by c: acx + bcy = c. Both terms on the left are divisible by a, so a | c. ∎

The Euclidean algorithm

Bézout's theorem is an existence statement; the Euclidean algorithm makes it effective. The key observation is that gcd(a, b) = gcd(b, r) whenever a = bq + r, because the pairs (a, b) and (b, r) have exactly the same common divisors. Repeating the division algorithm produces a strictly decreasing sequence of non-negative remainders, which must reach 0; the last non-zero remainder is the gcd.

Worked example: gcd(1071, 462).

        1071 = 2 · 462 + 147
         462 = 3 · 147 + 21
         147 = 7 · 21  + 0

So gcd(1071, 462) = 21. Running the equations backwards (back-substitution) expresses 21 as a combination:

        21 = 462 − 3 · 147
           = 462 − 3 · (1071 − 2 · 462)
           = 7 · 462 − 3 · 1071

Check: 7 · 462 = 3234 and 3 · 1071 = 3213, and 3234 − 3213 = 21.

The extended Euclidean algorithm carries the coefficients forward instead of backward: maintain triples (rᵢ, sᵢ, tᵢ) with rᵢ = a sᵢ + b tᵢ, starting from (a, 1, 0) and (b, 0, 1), and set (rᵢ₊₁, sᵢ₊₁, tᵢ₊₁) = (rᵢ₋₁, sᵢ₋₁, tᵢ₋₁) − qᵢ (rᵢ, sᵢ, tᵢ). This is how computers find modular inverses.

Theorem 1.5 (Lamé, 1844). If the Euclidean algorithm applied to a > b > 0 takes n division steps, then b ≥ Fₙ₊₁, where F₁ = F₂ = 1, Fₖ₊₁ = Fₖ + Fₖ₋₁ are the Fibonacci numbers. Consequently the number of steps is O(log b).

Proof sketch. Let the remainders be r₀ = a, r₁ = b, r₂, …, rₙ > rₙ₊₁ = 0, where step k is rₖ₋₁ = qₖ rₖ + rₖ₊₁, so the last non-zero remainder is rₙ. Then rₙ ≥ 1 = F₂ and rₙ₋₁ ≥ 2 = F₃ (since rₙ₋₁ > rₙ ≥ 1), and each step gives rₖ₋₁ ≥ rₖ + rₖ₊₁. By downward induction rₖ ≥ Fₙ₊₂₋ₖ, so b = r₁ ≥ Fₙ₊₁. Since Fₖ ≥ φ^(k−2) with φ = (1 + √5)/2, the bound n = O(log b) follows. The worst case is consecutive Fibonacci numbers, where every quotient is 1. ∎

Linear Diophantine equations

Theorem 1.6. The equation ax + by = c (a, b not both 0) has an integer solution if and only if d = gcd(a, b) divides c. If (x₀, y₀) is one solution, all solutions are

        x = x₀ + (b/d) t,   y = y₀ − (a/d) t,   t ∈ ℤ.

Proof. Solvability is Theorem 1.2. If (x, y) is another solution then a(x − x₀) = −b(y − y₀); dividing by d gives (a/d)(x − x₀) = −(b/d)(y − y₀), and since gcd(a/d, b/d) = 1, Corollary 1.4 shows (b/d) | (x − x₀). Writing x − x₀ = (b/d)t gives the stated form, and every such pair is a solution. ∎

Least common multiples

The least common multiple [a, b] of non-zero a, b is the least positive common multiple. Every common multiple is a multiple of [a, b] (divide and use minimality), and for positive a, b one has gcd(a, b) · lcm(a, b) = ab. The cleanest proof uses the prime factorisations of Lesson 2: the exponent of p in the gcd is min(vₚ(a), vₚ(b)), in the lcm it is max(vₚ(a), vₚ(b)), and min + max = sum.

✏️ Your Turn

(a) Use the Euclidean algorithm to find gcd(252, 198), and find integers x, y with 252x + 198y = gcd(252, 198).
(b) Find all integer solutions of 252x + 198y = 90.
(c) Prove that gcd(n² + 1, n + 1) divides 2 for every integer n.

Answers: (a) 252 = 1·198 + 54, 198 = 3·54 + 36, 54 = 1·36 + 18, 36 = 2·18, so the gcd is 18. Back-substituting: 18 = 54 − 36 = 54 − (198 − 3·54) = 4·54 − 198 = 4(252 − 198) − 198 = 4·252 − 5·198; check 1008 − 990 = 18. (b) 90 = 5·18, so (x₀, y₀) = (20, −25) is a solution, and all solutions are x = 20 + 11t, y = −25 − 14t (t ∈ ℤ), since 198/18 = 11 and 252/18 = 14. (c) Any common divisor d divides (n² + 1) − (n − 1)(n + 1) = 2.

─────────────────────────────────
Lesson 2: Primes and the Fundamental Theorem of Arithmetic
─────────────────────────────────

📌 Key idea of this section:

        Every integer n ≥ 2 can be written as n = p₁^e₁ p₂^e₂ ⋯ pₖ^eₖ, uniquely up to the order of the factors.

Primes and irreducibles

An integer p ≥ 2 is prime if its only positive divisors are 1 and p. In a general ring one distinguishes two properties that coincide in ℤ: an element is irreducible if it has no non-trivial factorisation, and prime if whenever it divides a product it divides one of the factors. The definition above is irreducibility; the fact that it implies primality is the heart of the subject.

Lemma 2.1 (Euclid's lemma). If p is prime and p | ab, then p | a or p | b.

Proof. If p ∤ a then gcd(p, a) = 1, because the only positive divisors of p are 1 and p. By Corollary 1.4, p | b. ∎

By induction, if p divides a product a₁a₂⋯aₘ then p divides some aᵢ.

Theorem 2.2 (Fundamental theorem of arithmetic). Every integer n ≥ 2 is a product of primes, and this product is unique apart from the order of the factors.

Proof. Existence, by strong induction: if n is prime we are done; otherwise n = ab with 1 < a, b < n, and a, b are products of primes by the induction hypothesis. Uniqueness: suppose n = p₁p₂⋯pᵣ = q₁q₂⋯qₛ with all pᵢ, qⱼ prime, and suppose n is the least integer with two different factorisations. Then p₁ divides q₁⋯qₛ, so by Lemma 2.1 p₁ | qⱼ for some j, and since qⱼ is prime, p₁ = qⱼ. Cancelling gives a smaller integer n/p₁ with two different factorisations (or, if n/p₁ = 1, both sides were the single prime p₁), contradicting minimality. ∎

For n ∈ ℤ ∖ {0} and a prime p, write vₚ(n) for the exponent of p in n (the p-adic valuation), so that |n| = ∏ p^vₚ(n). Then vₚ(ab) = vₚ(a) + vₚ(b), and a | b if and only if vₚ(a) ≤ vₚ(b) for all p.

Uniqueness is not automatic

The importance of Theorem 2.2 is best seen where it fails. In the ring ℤ[√−5] = {a + b√−5 : a, b ∈ ℤ}, with norm N(a + b√−5) = a² + 5b², we have

        6 = 2 · 3 = (1 + √−5)(1 − √−5).

The norms of 2, 3, 1 ± √−5 are 4, 9, 6, 6. No element has norm 2 or 3 (a² + 5b² = 2 or 3 has no solutions), so all four factors are irreducible, and since the only units are ±1 the two factorisations are genuinely different. Thus 2 is irreducible but not prime in ℤ[√−5]: it divides (1 + √−5)(1 − √−5) without dividing either factor. Kummer's attempt to repair this failure in cyclotomic rings led him to ideal numbers, and Dedekind's reformulation in terms of ideals created modern algebraic number theory. In the rings of integers of number fields, ideals still factor uniquely into prime ideals; the failure of unique factorisation of elements is measured by a finite abelian group, the ideal class group.

Infinitely many primes

Theorem 2.3 (Euclid). There are infinitely many primes.

Proof. Given primes p₁, …, pₖ, the number N = p₁p₂⋯pₖ + 1 is ≥ 2, so it has a prime factor p. If p were some pᵢ it would divide N − p₁⋯pₖ = 1. So there is a prime outside every finite list. ∎

Euclid's argument gives a weak quantitative statement: if pₙ is the n-th prime then pₙ₊₁ ≤ p₁⋯pₙ + 1, whence pₙ ≤ 2^(2^(n−1)) by induction. Much better bounds come in Lesson 10. Two other proofs are worth knowing because they generalise. Euler's proof (1737) observes that for s > 1

        ∑ₙ₌₁^∞ 1/nˢ = ∏ₚ (1 − p⁻ˢ)⁻¹,

an analytic restatement of unique factorisation; as s → 1⁺ the left side tends to ∞, so the product cannot be finite. Fürstenberg's proof (1955) puts a topology on ℤ whose basic open sets are the arithmetic progressions; the set ℤ ∖ {±1} is the union of the closed sets pℤ, and if there were finitely many primes it would be closed, so {±1} would be open, which it is not because non-empty open sets are infinite.

Divisor functions in terms of factorisations

If n = ∏ pᵢ^eᵢ then the divisors of n are exactly the numbers ∏ pᵢ^fᵢ with 0 ≤ fᵢ ≤ eᵢ. Hence the number of divisors τ(n) and their sum σ(n) are

        τ(n) = ∏ (eᵢ + 1),     σ(n) = ∏ (pᵢ^(eᵢ+1) − 1)/(pᵢ − 1).

For example 720 = 2⁴ · 3² · 5, so τ(720) = 5 · 3 · 2 = 30 and σ(720) = 31 · 13 · 6 = 2418. These are the first examples of multiplicative functions, studied systematically in Lesson 9.

The irrationality of √2, and much more, is a direct consequence of unique factorisation: if a² = 2b² then v₂(a²) is even while v₂(2b²) is odd. The same argument shows that the n-th root of a positive integer m is rational only when m is a perfect n-th power.

✏️ Your Turn

(a) Find the prime factorisation of 10! and use it to compute τ(10!).
(b) Prove that if p is prime and 1 ≤ k ≤ p − 1, then p divides the binomial coefficient C(p, k).
(c) Show that 3 is irreducible but not prime in ℤ[√−5].

Answers: (a) 10! = 3628800 = 2⁸ · 3⁴ · 5² · 7 (Legendre's formula: v₂ = 5 + 2 + 1 = 8, v₃ = 3 + 1 = 4, v₅ = 2, v₇ = 1), so τ(10!) = 9 · 5 · 3 · 2 = 270. (b) k! (p − k)! C(p, k) = p!, and p divides the right side but not k! (p − k)! (all its factors are less than p), so by Euclid's lemma p | C(p, k). (c) N(3) = 9; a factorisation 3 = αβ into non-units would need N(α) = 3, and a² + 5b² = 3 has no solutions, so 3 is irreducible. But 3 divides 6 = (1 + √−5)(1 − √−5), while (1 ± √−5)/3 is not in ℤ[√−5], so 3 is not prime.

─────────────────────────────────
Lesson 3: Congruences and the Ring ℤ/nℤ
─────────────────────────────────

📌 Key idea of this section:

        a has a multiplicative inverse modulo n  ⟺  gcd(a, n) = 1.

Congruence

Fix a modulus n ≥ 1. We write a ≡ b (mod n) when n | a − b. This is an equivalence relation, and it respects both ring operations: if a ≡ a' and b ≡ b' then a + b ≡ a' + b' and ab ≡ a'b' (since ab − a'b' = a(b − b') + b'(a − a')). The equivalence classes ā = a + nℤ are the residue classes, and the set of n classes forms a commutative ring ℤ/nℤ, the quotient of ℤ by the ideal nℤ. Gauss introduced the notation ≡ in 1801, deliberately echoing =.

Many classical facts are one-line congruence computations. Since 10 ≡ 1 (mod 9), any number is congruent to its digit sum mod 9; since 10 ≡ −1 (mod 11), it is congruent mod 11 to its alternating digit sum. Since every square is ≡ 0 or 1 (mod 4), no integer ≡ 3 (mod 4) is a sum of two squares. Since every odd square is ≡ 1 (mod 8), no integer ≡ 7 (mod 8) is a sum of three squares (Problem 55 completes this to Legendre's condition).

Units and zero divisors

Theorem 3.1. The class ā is a unit in ℤ/nℤ if and only if gcd(a, n) = 1. If gcd(a, n) = d > 1, then ā is a zero divisor (or zero).

Proof. ā is a unit iff ax ≡ 1 (mod n) is solvable iff ax + ny = 1 is solvable iff gcd(a, n) = 1, by Corollary 1.3. If d > 1, then a · (n/d) = (a/d) · n ≡ 0 while n/d ≢ 0 (mod n). ∎

The units form a group (ℤ/nℤ)× of order φ(n), Euler's totient: the number of integers in {1, …, n} coprime to n. In particular ℤ/nℤ is a field if and only if n is prime; we write 𝔽ₚ for ℤ/pℤ.

Worked example: the inverse of 17 modulo 43. The Euclidean algorithm gives 43 = 2·17 + 9, 17 = 1·9 + 8, 9 = 1·8 + 1. Back-substituting:

        1 = 9 − 8 = 9 − (17 − 9) = 2·9 − 17 = 2(43 − 2·17) − 17 = 2·43 − 5·17

so 17⁻¹ ≡ −5 ≡ 38 (mod 43). Check: 17 · 38 = 646 = 15 · 43 + 1.

Linear congruences

Theorem 3.2. Let d = gcd(a, n). The congruence ax ≡ b (mod n) is solvable if and only if d | b, in which case it has exactly d solutions modulo n, forming a single residue class modulo n/d.

Proof. Solvability is Theorem 1.6 applied to ax − ny = b. If d | b, divide through: (a/d)x ≡ b/d (mod n/d), where a/d is now invertible modulo n/d, giving a unique class x₀ mod n/d. Its lifts x₀ + k(n/d), k = 0, 1, …, d − 1, are distinct mod n. ∎

Worked example: solve 35x ≡ 10 (mod 50). Here d = gcd(35, 50) = 5 divides 10, so there are 5 solutions. Dividing by 5: 7x ≡ 2 (mod 10). Since 7 · 3 = 21 ≡ 1 (mod 10), x ≡ 3 · 2 = 6 (mod 10). Modulo 50 the solutions are x ≡ 6, 16, 26, 36, 46. Check: 35 · 6 = 210 = 4 · 50 + 10.

Polynomial congruences

For a polynomial f ∈ ℤ[x], the number of solutions of f(x) ≡ 0 (mod n) is a basic arithmetic invariant. Over a field the situation is controlled by the following theorem.

Theorem 3.3 (Lagrange). If p is prime and f ∈ ℤ[x] has degree d whose leading coefficient is not divisible by p, then f(x) ≡ 0 (mod p) has at most d solutions modulo p.

Proof. 𝔽ₚ is a field, so 𝔽ₚ[x] has a division algorithm: if f(r) = 0 then f(x) = (x − r)g(x) with deg g = d − 1. If s ≠ r is another root then (s − r)g(s) = 0 in 𝔽ₚ, and since 𝔽ₚ has no zero divisors g(s) = 0. Induction on d completes the proof. ∎

The hypothesis that the modulus is prime is essential: x² ≡ 1 (mod 8) has four solutions 1, 3, 5, 7. For composite moduli one first reduces to prime powers by the Chinese remainder theorem (Lesson 5) and then to primes by Hensel's lemma.

Theorem 3.4 (Hensel's lemma, simple form). Let p be prime, f ∈ ℤ[x], and suppose f(a) ≡ 0 (mod pᵏ) and f'(a) ≢ 0 (mod p), where k ≥ 1. Then there is a unique t modulo p such that f(a + tpᵏ) ≡ 0 (mod pᵏ⁺¹).

Proof. By Taylor expansion (valid over ℤ because f(a + h) − f(a) − f'(a)h is divisible by h², and 2k ≥ k + 1), f(a + tpᵏ) ≡ f(a) + tpᵏ f'(a) (mod pᵏ⁺¹). Writing f(a) = pᵏ m, the condition becomes m + t f'(a) ≡ 0 (mod p), which has exactly one solution t since f'(a) is invertible mod p. ∎

Thus a simple root modulo p lifts uniquely to a root modulo every pᵏ, and in the limit to a root in the p-adic integers ℤₚ. This is Newton's method in the p-adic metric, where |x|ₚ = p^(−vₚ(x)).

✏️ Your Turn

(a) Solve 91x ≡ 35 (mod 133).
(b) Find all solutions of x² ≡ 2 (mod 49).
(c) Show that x² ≡ 1 (mod 2ᵏ) has exactly four solutions for every k ≥ 3.

Answers: (a) gcd(91, 133) = 7 divides 35, so divide by 7: 13x ≡ 5 (mod 19). Since 13 · 3 = 39 ≡ 1 (mod 19), x ≡ 15 (mod 19), and modulo 133 the seven solutions are 15, 34, 53, 72, 91, 110, 129. Check: 91 · 15 = 1365 = 10 · 133 + 35. (b) Modulo 7, x² ≡ 2 has roots ±3. Lift x = 3 + 7t: (3 + 7t)² ≡ 9 + 42t (mod 49), and 9 + 42t ≡ 2 means 42t ≡ −7, i.e. 6t ≡ −1 ≡ 6 (mod 7), so t = 1 and x = 10. The other root is −10 ≡ 39. Check: 100 = 2·49 + 2. (c) x must be odd; (x − 1)(x + 1) ≡ 0 (mod 2ᵏ) with exactly one of x ± 1 divisible by 2 only once (they differ by 2 and both are even), so the other is divisible by 2ᵏ⁻¹. This gives x ≡ ±1 (mod 2ᵏ⁻¹), that is x ≡ 1, 1 + 2ᵏ⁻¹, −1, −1 + 2ᵏ⁻¹ (mod 2ᵏ), four distinct classes when k ≥ 3, and all four do satisfy x² ≡ 1 since (±1 + 2ᵏ⁻¹)² = 1 ± 2ᵏ + 2²ᵏ⁻² ≡ 1 (mod 2ᵏ).

─────────────────────────────────
Lesson 4: The Theorems of Fermat, Euler and Wilson
─────────────────────────────────

📌 Key idea of this section:

        gcd(a, n) = 1  ⟹  a^φ(n) ≡ 1 (mod n);     (p − 1)! ≡ −1 (mod p).

Euler's theorem as group theory

The cleanest route to the classical congruences is Lagrange's theorem from group theory: in a finite group G, the order of every element divides |G|. (The cosets of the cyclic subgroup ⟨g⟩ partition G into blocks of equal size ord(g).) Applying it to G = (ℤ/nℤ)×, of order φ(n), gives at once the following.

Theorem 4.1 (Euler, 1763). If gcd(a, n) = 1 then a^φ(n) ≡ 1 (mod n).

Corollary 4.2 (Fermat's little theorem, 1640). If p is prime then aᵖ ≡ a (mod p) for every integer a, and a^(p−1) ≡ 1 (mod p) if p ∤ a.

A proof that avoids group theory, and is essentially Euler's own: if r₁, …, r_φ(n) are the residues coprime to n, then ar₁, …, ar_φ(n) are the same residues in a different order (multiplication by a unit is a bijection), so ∏(arᵢ) ≡ ∏ rᵢ, and cancelling the unit ∏ rᵢ gives a^φ(n) ≡ 1. A third proof of Fermat's theorem uses the binomial theorem: by Lesson 2, p | C(p, k) for 0 < k < p, so (a + 1)ᵖ ≡ aᵖ + 1 (mod p), and induction on a gives aᵖ ≡ a. The identity (x + y)ᵖ = xᵖ + yᵖ in characteristic p says that the Frobenius map x ↦ xᵖ is a ring homomorphism, a fact of enormous importance in algebraic geometry over finite fields.

Fast exponentiation

Euler's theorem reduces exponents modulo φ(n). Combined with repeated squaring, which computes aᵏ mod n with O(log k) multiplications, it makes huge powers easy. Worked example: 3¹⁰⁰ mod 7. Since 3⁶ ≡ 1 (mod 7) and 100 = 6 · 16 + 4, we get 3¹⁰⁰ ≡ 3⁴ = 81 ≡ 4 (mod 7). Worked example: 2¹⁰⁰⁰ mod 13. Here φ(13) = 12 and 1000 = 12 · 83 + 4, so 2¹⁰⁰⁰ ≡ 2⁴ = 16 ≡ 3 (mod 13).

The exponent φ(n) is not always the best one. The Carmichael function λ(n) is the exponent of the group (ℤ/nℤ)×, the least m with aᵐ ≡ 1 for all units a. We will compute it in Lesson 6; for instance λ(15) = 4 while φ(15) = 8.

Wilson's theorem

Theorem 4.3 (Wilson; first proved by Lagrange, 1771). An integer n ≥ 2 is prime if and only if (n − 1)! ≡ −1 (mod n).

Proof. Let p be prime. In the field 𝔽ₚ, the equation x² = 1 has only the roots x = ±1 (Theorem 3.3), so every element of {2, 3, …, p − 2} is distinct from its inverse. These elements therefore split into pairs {x, x⁻¹} with product 1, and (p − 1)! ≡ 1 · (p − 1) ≡ −1 (mod p). (For p = 2 the statement is 1 ≡ −1, which is true.) Conversely, if n is composite with a divisor d, 1 < d < n, then d | (n − 1)!, so d cannot divide (n − 1)! + 1, and therefore n cannot either. ∎

Wilson's theorem is a perfect primality criterion and a useless primality test: computing (n − 1)! mod n takes about n multiplications. It is nevertheless a powerful theoretical tool, as the next result shows.

Corollary 4.4. If p ≡ 1 (mod 4), then x = ((p − 1)/2)! satisfies x² ≡ −1 (mod p).

Proof. Pair k with p − k ≡ −k in the product (p − 1)!:

        −1 ≡ (p − 1)! = ∏ₖ₌₁^((p−1)/2) k(p − k) ≡ (−1)^((p−1)/2) (((p − 1)/2)!)²   (mod p).

When p ≡ 1 (mod 4) the exponent (p − 1)/2 is even, so the sign (−1)^((p−1)/2) is +1 and the congruence reads −1 ≡ (((p − 1)/2)!)². ∎

For p = 13: 6! = 720 = 55 · 13 + 5, and 5² = 25 ≡ −1 (mod 13). Conversely, if x² ≡ −1 (mod p) for an odd prime p, then x has order 4 in 𝔽ₚ×, so 4 | p − 1. Hence −1 is a square modulo an odd prime p if and only if p ≡ 1 (mod 4), a result we will meet again as the first supplementary law of quadratic reciprocity.

Pseudoprimes and Carmichael numbers

The converse of Fermat's theorem is false. 341 = 11 · 31 is composite, yet 2¹⁰ = 1024 = 3 · 341 + 1, so 2³⁴⁰ = (2¹⁰)³⁴ ≡ 1 (mod 341). We call a composite n with a^(n−1) ≡ 1 (mod n) a Fermat pseudoprime to base a. Worse, some composite numbers are pseudoprimes to every coprime base.

Definition 4.5. A Carmichael number is a composite n such that a^(n−1) ≡ 1 (mod n) for every a coprime to n.

Theorem 4.6 (Korselt's criterion, 1899). A composite n is a Carmichael number if and only if n is squarefree and p − 1 | n − 1 for every prime p | n.

Proof of sufficiency. Let a be coprime to n and p | n. Since p − 1 | n − 1, Fermat gives a^(n−1) = (a^(p−1))^((n−1)/(p−1)) ≡ 1 (mod p). As n is squarefree it is the product of its distinct prime divisors, so a^(n−1) ≡ 1 modulo their product n (Lesson 5). The converse uses primitive roots and is Problem 57. ∎

The smallest Carmichael number is 561 = 3 · 11 · 17: 560 = 2⁴ · 5 · 7 is divisible by 2, 10 and 16. The next are 1105 = 5 · 13 · 17 and 1729 = 7 · 13 · 19. A Carmichael number is odd and has at least three prime factors. Alford, Granville and Pomerance proved in 1994 that there are infinitely many, indeed more than x^(2/7) of them up to x for all large x. Carmichael numbers are the reason the Fermat test must be strengthened to the Miller–Rabin test of Lesson 13.

✏️ Your Turn

(a) Find the last two digits of 3¹⁰⁰⁰.
(b) Compute 15! mod 17 and 8! mod 17 using Wilson's theorem.
(c) Prove that if p is an odd prime, then 1ᵖ⁻¹ + 2ᵖ⁻¹ + ⋯ + (p − 1)ᵖ⁻¹ ≡ −1 (mod p).

Answers: (a) φ(100) = 40 and 1000 = 25 · 40, so 3¹⁰⁰⁰ ≡ 1 (mod 100): the last two digits are 01. (b) 16! ≡ −1 and 16 ≡ −1, so 15! ≡ 1 (mod 17). For 8!: 16! = 8! · (9 · 10 ⋯ 16) ≡ 8! · ((−8)(−7)⋯(−1)) = 8! · (−1)⁸ · 8! = (8!)², so (8!)² ≡ −1 (mod 17), which pins 8! down to ±4. Direct computation decides the sign: 8! = 40320 = 2371 · 17 + 13, so 8! ≡ 13 ≡ −4, and indeed (−4)² = 16 ≡ −1. (c) Each of the p − 1 terms is ≡ 1 by Fermat, so the sum is ≡ p − 1 ≡ −1.

─────────────────────────────────
Lesson 5: The Chinese Remainder Theorem
─────────────────────────────────

📌 Key idea of this section:

        If n = n₁n₂⋯nₖ with the nᵢ pairwise coprime, then ℤ/nℤ ≅ ℤ/n₁ℤ × ℤ/n₂ℤ × ⋯ × ℤ/nₖℤ as rings.

Statement and proof

The problem goes back to the Sunzi Suanjing (third to fifth century): find a number that leaves remainder 2 on division by 3, remainder 3 on division by 5, and remainder 2 on division by 7. The answer 23 (unique modulo 105) illustrates the general theorem.

Theorem 5.1 (Chinese remainder theorem). Let n₁, …, nₖ be pairwise coprime positive integers and n = n₁⋯nₖ. The map

        ψ : ℤ/nℤ → ℤ/n₁ℤ × ⋯ × ℤ/nₖℤ,   x mod n ↦ (x mod n₁, …, x mod nₖ)

is a ring isomorphism. In particular the system x ≡ aᵢ (mod nᵢ), i = 1, …, k, has a solution, unique modulo n.

Proof. ψ is well defined (each nᵢ divides n) and a ring homomorphism. If ψ(x) = 0 then every nᵢ divides x; since the nᵢ are pairwise coprime their product divides x (induction with Corollary 1.4), so x ≡ 0 (mod n). Thus ψ is injective, and since both sides have n elements it is bijective. ∎

The proof is non-constructive, but an explicit inverse is easy. Let Nᵢ = n/nᵢ; since gcd(Nᵢ, nᵢ) = 1 there is Mᵢ with NᵢMᵢ ≡ 1 (mod nᵢ). The numbers eᵢ = NᵢMᵢ satisfy eᵢ ≡ 1 (mod nᵢ) and eᵢ ≡ 0 (mod nⱼ) for j ≠ i (they are the idempotents of the product ring), so x = ∑ aᵢeᵢ solves the system.

Worked example (Sunzi). n = 105. N₁ = 35 ≡ 2 (mod 3), M₁ = 2, e₁ = 70. N₂ = 21 ≡ 1 (mod 5), e₂ = 21. N₃ = 15 ≡ 1 (mod 7), e₃ = 15. Then

        x ≡ 2 · 70 + 3 · 21 + 2 · 15 = 233 ≡ 23 (mod 105).

In practice one often solves the congruences one at a time. Worked example: x ≡ 3 (mod 8), x ≡ 5 (mod 9), x ≡ 2 (mod 5). From the first, x = 3 + 8t; then 3 + 8t ≡ 5 (mod 9) gives −t ≡ 2, t ≡ 7, so x ≡ 59 (mod 72). Then 59 + 72s ≡ 2 (mod 5) gives 4 + 2s ≡ 2, 2s ≡ 3, s ≡ 4, so x ≡ 59 + 288 = 347 (mod 360).

Non-coprime moduli

Proposition 5.2. The system x ≡ a (mod m), x ≡ b (mod n) is solvable if and only if a ≡ b (mod gcd(m, n)), and then the solution is unique modulo lcm(m, n).

Proof. x = a + mt solves the second congruence iff mt ≡ b − a (mod n), which by Theorem 3.2 is solvable iff gcd(m, n) | b − a, with t unique modulo n/gcd(m, n), i.e. x unique modulo m · n/gcd(m, n) = lcm(m, n). ∎

For example x ≡ 5 (mod 12) and x ≡ 11 (mod 18) is solvable because 5 ≡ 11 (mod 6), and the solution is x ≡ 29 (mod 36).

Consequences

Restricting ψ to units gives a group isomorphism (ℤ/nℤ)× ≅ ∏ (ℤ/nᵢℤ)×, so φ(mn) = φ(m)φ(n) for coprime m, n. Since φ(pᵉ) = pᵉ − pᵉ⁻¹ (the non-units mod pᵉ are the multiples of p), we obtain the product formula

        φ(n) = n ∏ₚ|ₙ (1 − 1/p).

For example φ(1000) = 1000 · (1/2) · (4/5) = 400 and φ(1001) = φ(7)φ(11)φ(13) = 6 · 10 · 12 = 720.

More generally, for f ∈ ℤ[x], the number of solutions of f(x) ≡ 0 (mod n) is the product of the numbers of solutions modulo the prime powers exactly dividing n. Combined with Hensel's lemma and Lesson 3: x² ≡ 1 (mod pᵉ) has 2 solutions for odd p, while modulo 2, 4 and 2ᵉ (e ≥ 3) it has 1, 2 and 4 solutions. So x² ≡ 1 (mod 840) has 4 · 2 · 2 · 2 = 32 solutions, since 840 = 2³ · 3 · 5 · 7.

The CRT is also a computational principle. In RSA decryption (Lesson 13) one computes modulo p and q separately and recombines, roughly a three- to four-fold saving; computer algebra systems compute determinants and resultants of integer matrices modulo many small primes and recombine them by CRT, avoiding coefficient explosion. Abstractly, the theorem holds in any commutative ring: if ideals I₁, …, Iₖ are pairwise comaximal (Iᵢ + Iⱼ = R), then R/(I₁ ∩ ⋯ ∩ Iₖ) ≅ ∏ R/Iᵢ.

✏️ Your Turn

(a) Solve x ≡ 1 (mod 4), x ≡ 2 (mod 5), x ≡ 3 (mod 9).
(b) How many solutions does x² ≡ 1 (mod 2520) have? (2520 = 2³ · 3² · 5 · 7.)
(c) Prove that φ(n) is even for every n ≥ 3.

Answers: (a) x ≡ 1 (mod 4) and x ≡ 2 (mod 5) give x ≡ 17 (mod 20). Among 17, 37, 57, … the first that is ≡ 3 (mod 9) is 57 (57 = 6 · 9 + 3), so x ≡ 57 (mod 180). (b) 4 · 2 · 2 · 2 = 32. (c) If an odd prime p divides n then p − 1 is an even factor of φ(n). Otherwise n = 2ᵉ with e ≥ 2 and φ(n) = 2ᵉ⁻¹ is even. (Alternatively, a ↦ n − a is a fixed-point-free involution of the units when n ≥ 3.)

─────────────────────────────────
Lesson 6: Primitive Roots and the Structure of (ℤ/nℤ)×
─────────────────────────────────

📌 Key idea of this section:

        (ℤ/nℤ)× is cyclic  ⟺  n = 1, 2, 4, pᵏ or 2pᵏ (p an odd prime, k ≥ 1).

Orders

For gcd(a, n) = 1, the order ordₙ(a) is the least k ≥ 1 with aᵏ ≡ 1 (mod n). Elementary group theory gives: aᵐ ≡ 1 iff ordₙ(a) | m; ordₙ(a) divides φ(n); and ordₙ(aʲ) = ordₙ(a)/gcd(j, ordₙ(a)). A primitive root modulo n is an a with ordₙ(a) = φ(n), that is, a generator of (ℤ/nℤ)×.

For example 3 is a primitive root modulo 7, since its powers 3, 2, 6, 4, 5, 1 run through all units, whereas 2 is not: 2³ = 8 ≡ 1, so ord₇(2) = 3.

Primes

Lemma 6.1 (Gauss). For every n ≥ 1, ∑_d|n φ(d) = n.

Proof. Partition {1, …, n} according to the value of gcd(k, n) = n/d. The k with gcd(k, n) = n/d are k = (n/d)j with 1 ≤ j ≤ d and gcd(j, d) = 1, and there are φ(d) of them. ∎

Theorem 6.2 (Gauss). For every prime p, the group 𝔽ₚ× is cyclic; it has exactly φ(p − 1) generators. More generally, every finite subgroup of the multiplicative group of a field is cyclic.

Proof. Let G be a finite subgroup of K× of order m, and for d | m let ψ(d) be the number of elements of G of order d. If ψ(d) > 0, pick a of order d. Then 1, a, …, a^(d−1) are d distinct roots of x^d − 1, which has at most d roots in the field K, so every element of order d is a power aʲ, and aʲ has order d iff gcd(j, d) = 1. Hence ψ(d) is 0 or φ(d). Now

        m = ∑_d|m ψ(d) ≤ ∑_d|m φ(d) = m,

so ψ(d) = φ(d) for every d | m, and in particular ψ(m) = φ(m) ≥ 1. ∎

A practical test follows from Lagrange's theorem: g is a primitive root modulo p if and only if g^((p−1)/q) ≢ 1 (mod p) for every prime q dividing p − 1. Worked example: the smallest primitive root modulo 23. Here 22 = 2 · 11. For g = 2: 2¹¹ = 2048 = 89 · 23 + 1, so 2 fails; 3 and 4 fail too (3¹¹ ≡ 4¹¹ ≡ 1). For g = 5: 5² = 25 ≡ 2 ≢ 1 and 5¹¹ ≡ −1 ≢ 1, so 5 is the smallest primitive root modulo 23. The primitive roots modulo 13 are 2, 6, 7, 11, exactly φ(12) = 4 of them.

Odd prime powers

Theorem 6.3. Let p be an odd prime and g a primitive root modulo p. Then g or g + p is a primitive root modulo p², and any primitive root modulo p² is a primitive root modulo pᵏ for all k ≥ 2.

Proof sketch. Since (g + p)^(p−1) ≡ g^(p−1) + (p − 1)g^(p−2)p (mod p²) and p ∤ (p − 1)g^(p−2), at most one of g, g + p satisfies x^(p−1) ≡ 1 (mod p²); choose one, h, that does not. The order of h modulo p² is a multiple of p − 1 (h is a primitive root mod p) and divides p(p − 1), and it is not p − 1, so it is p(p − 1) = φ(p²). For the second statement one shows by induction, using the binomial theorem, that if h^(p−1) = 1 + pu with p ∤ u then h^(pᵏ⁻²(p−1)) = 1 + pᵏ⁻¹uₖ with p ∤ uₖ; this forces ord_pᵏ(h) = pᵏ⁻¹(p − 1). ∎

For example 10 ≡ 3 (mod 7) is a primitive root modulo 7, and 10⁶ ≡ 8 (mod 49), not 1, so 10 is a primitive root modulo 49 and modulo every power of 7. Since ℤ/2pᵏℤ ≅ ℤ/2ℤ × ℤ/pᵏℤ with (ℤ/2ℤ)× trivial, an odd primitive root modulo pᵏ is also one modulo 2pᵏ.

Powers of 2

Theorem 6.4. For k ≥ 3, (ℤ/2ᵏℤ)× = {±5ʲ : 0 ≤ j < 2ᵏ⁻²} ≅ C₂ × C_(2ᵏ⁻²). In particular it is not cyclic, and λ(2ᵏ) = 2ᵏ⁻².

Proof. By induction, 5^(2ᵏ⁻³) ≡ 1 + 2ᵏ⁻¹ (mod 2ᵏ) for k ≥ 3: for k = 3 it reads 5 ≡ 5, and squaring 5^(2ᵏ⁻³) = 1 + 2ᵏ⁻¹ + 2ᵏm gives 1 + 2ᵏ + 2ᵏ⁺¹(⋯) ≡ 1 + 2ᵏ (mod 2ᵏ⁺¹). Hence 5 has order exactly 2ᵏ⁻² modulo 2ᵏ. All powers of 5 are ≡ 1 (mod 4), so −1 is not among them, and the 2ᵏ⁻¹ elements ±5ʲ are distinct; this is all of (ℤ/2ᵏℤ)×. Every element has order dividing 2ᵏ⁻², which is less than φ(2ᵏ) = 2ᵏ⁻¹. ∎

The general structure theorem

Theorem 6.5. If n = 2ᵉ p₁^e₁ ⋯ pᵣ^eᵣ with odd primes pᵢ, then

        (ℤ/nℤ)× ≅ (ℤ/2ᵉℤ)× × C_φ(p₁^e₁) × ⋯ × C_φ(pᵣ^eᵣ),

with (ℤ/2ᵉℤ)× trivial for e ≤ 1, C₂ for e = 2 and C₂ × C_(2ᵉ⁻²) for e ≥ 3. The Carmichael function λ(n) is the lcm of the exponents of the factors, and (ℤ/nℤ)× is cyclic exactly for n = 1, 2, 4, pᵏ, 2pᵏ.

Proof. The decomposition is the CRT plus Theorems 6.2–6.4. For the cyclicity criterion: if n is not of the listed forms, then either 8 | n (and the 2-part is not cyclic), or n = ab with gcd(a, b) = 1 and a, b ≥ 3. In the latter case φ(a) and φ(b) are both even, so every element has order dividing lcm(φ(a), φ(b)) ≤ φ(a)φ(b)/2 < φ(n). ∎

For example (ℤ/15ℤ)× ≅ C₂ × C₄: the orders of 1, 2, 4, 7, 8, 11, 13, 14 are 1, 4, 2, 4, 4, 2, 4, 2, so λ(15) = 4 and no element has order 8.

Discrete logarithms and an open problem

If g is a primitive root mod p, every unit a is gᵏ for a unique k mod p − 1, the index or discrete logarithm of a. Indices convert multiplicative congruences into linear ones modulo p − 1, exactly as logarithms convert products into sums; Gauss and Jacobi published tables of them. No efficient classical algorithm for discrete logarithms in 𝔽ₚ× is known, and the Diffie–Hellman key exchange (1976) relies on this. Shor's algorithm (1994) would solve both discrete logarithms and factoring on a large quantum computer.

Artin's conjecture (1927) asserts that every integer a that is neither −1 nor a perfect square is a primitive root modulo infinitely many primes. Hooley proved it in 1967 assuming the generalised Riemann hypothesis; unconditionally, Heath-Brown showed (1986) that at most two primes are exceptions, but no specific a, not even a = 2, is known to satisfy it.

✏️ Your Turn

(a) Find all primitive roots modulo 11.
(b) Show that 2 is a primitive root modulo 101.
(c) Compute λ(720) and the number of elements x of (ℤ/720ℤ)× with x⁴ = 1, given 720 = 2⁴ · 3² · 5.

Answers: (a) 10 = 2 · 5, so g is a primitive root iff g² ≢ 1 and g⁵ ≢ 1. 2 works (2² = 4, 2⁵ = 32 ≡ −1), and the primitive roots are 2ʲ with gcd(j, 10) = 1: 2¹ = 2, 2³ = 8, 2⁷ ≡ 7, 2⁹ ≡ 6. So they are 2, 6, 7, 8, and there are φ(10) = 4 of them. (b) 100 = 2² · 5², so we need 2⁵⁰ ≢ 1 and 2²⁰ ≢ 1 (mod 101). 2¹⁰ = 1024 ≡ 14, so 2²⁰ ≡ 196 ≡ 95; and 2⁵⁰ = (2¹⁰)⁵ ≡ 14⁵ ≡ −1 (one can also see this from Lesson 7, since 101 ≡ 5 (mod 8) makes 2 a non-residue). (c) (ℤ/720ℤ)× ≅ (C₂ × C₄) × C₆ × C₄, so λ(720) = lcm(4, 6, 4) = 12. The number of x with x⁴ = 1 in a cyclic group of order m is gcd(4, m), so the count is (2 · 4) · 2 · 4 = 64.

─────────────────────────────────
Lesson 7: Quadratic Residues and the Legendre Symbol
─────────────────────────────────

📌 Key idea of this section:

        For an odd prime p and p ∤ a:   (a/p) ≡ a^((p−1)/2) (mod p)   (Euler's criterion).

Definitions

Let p be an odd prime. An integer a with p ∤ a is a quadratic residue modulo p if x² ≡ a (mod p) is solvable, and a quadratic non-residue otherwise. The Legendre symbol is

        (a/p) = +1 if a is a quadratic residue mod p,  −1 if a is a non-residue,  0 if p | a.

Since x ↦ x² is two-to-one on 𝔽ₚ× (x and −x have the same square, and x² = y² forces x = ±y), exactly half of the p − 1 units are residues: there are (p − 1)/2 residues and (p − 1)/2 non-residues. Modulo 11 the residues are 1, 3, 4, 5, 9 (the squares of 1, …, 5). In terms of a primitive root g, the residues are exactly the even powers of g.

Theorem 7.1 (Euler's criterion). For p ∤ a, (a/p) ≡ a^((p−1)/2) (mod p). Consequently (ab/p) = (a/p)(b/p).

Proof. Write a = gᵏ for a primitive root g. Then a is a residue iff k is even. Now g^((p−1)/2) is a square root of 1 different from 1, so it equals −1 (Theorem 3.3), and a^((p−1)/2) = (g^((p−1)/2))ᵏ = (−1)ᵏ. Multiplicativity follows because both sides of Euler's criterion are multiplicative, and two numbers in {±1} congruent modulo p > 2 are equal. ∎

Thus the Legendre symbol a ↦ (a/p) is a homomorphism 𝔽ₚ× → {±1}, the unique non-trivial character of order 2 of the cyclic group 𝔽ₚ×. Taking a = −1 recovers the result of Lesson 4:

        (−1/p) = (−1)^((p−1)/2) = +1 if p ≡ 1 (mod 4),  −1 if p ≡ 3 (mod 4).

Gauss's lemma

Euler's criterion decides individual cases but does not reveal how (a/p) depends on p. Gauss's lemma converts the symbol into a counting problem.

Theorem 7.2 (Gauss's lemma). Let p be an odd prime, p ∤ a, and let μ be the number of the integers a, 2a, …, ((p − 1)/2)a whose least positive residue modulo p exceeds p/2. Then (a/p) = (−1)^μ.

Proof. Let h = (p − 1)/2. Reduce each ka (1 ≤ k ≤ h) to the representative of its class in (−p/2, p/2), writing ka ≡ εₖ mₖ with εₖ = ±1 and 1 ≤ mₖ ≤ h; exactly μ of the signs εₖ are −1. The mₖ are distinct: if mⱼ = mₖ then ja ≡ ±ka, so j ≡ ±k (mod p), forcing j = k because 2 ≤ j + k ≤ p − 1. Hence {m₁, …, mₕ} = {1, …, h}, and multiplying all h congruences,

        aʰ · h! ≡ (−1)^μ · h!   (mod p).

Since h! is a unit modulo p it can be cancelled, leaving aʰ ≡ (−1)^μ, and Euler's criterion gives (a/p) = (−1)^μ. ∎

Worked example: (5/13). The multiples 5, 10, 15, 20, 25, 30 reduce to 5, 10, 2, 7, 12, 4 modulo 13. Those exceeding 6.5 are 10, 7, 12, so μ = 3 and (5/13) = −1. Check: 5² ≡ −1, so 5⁶ ≡ −1 (mod 13), as Euler's criterion predicts.

The second supplementary law

Theorem 7.3. For an odd prime p,

        (2/p) = (−1)^((p²−1)/8) = +1 if p ≡ ±1 (mod 8),  −1 if p ≡ ±3 (mod 8).

Proof. Apply Gauss's lemma with a = 2. The numbers 2, 4, …, p − 1 are already reduced, and μ counts those in (p/2, p): μ = h − ⌊p/4⌋ with h = (p − 1)/2. Checking the four classes p = 8m + 1, 8m + 3, 8m + 5, 8m + 7 gives μ = 2m, 2m + 1, 2m + 1, 2m + 2, so μ is even exactly when p ≡ ±1 (mod 8). The same four cases show that (p² − 1)/8 has the same parity as μ. ∎

As an application, if q = 2p + 1 with p and q prime and p ≡ 3 (mod 4), then q ≡ 7 (mod 8), so 2 is a residue modulo q and 2^p = 2^((q−1)/2) ≡ 1 (mod q). So q divides the Mersenne number 2ᵖ − 1. Euler found this way that 23 | 2¹¹ − 1 = 2047 = 23 · 89 and 47 | 2²³ − 1.

✏️ Your Turn

(a) List the quadratic residues modulo 13 and check that there are six.
(b) Use Gauss's lemma to compute (3/11).
(c) Show that 2 is a primitive root modulo every prime q = 4p + 1 with p an odd prime. (Hint: the order of 2 divides 4p.)

Answers: (a) Squares of 1, …, 6 modulo 13: 1, 4, 9, 3, 12, 10. So the residues are 1, 3, 4, 9, 10, 12. (b) The multiples 3, 6, 9, 12, 15 reduce to 3, 6, 9, 1, 4 modulo 11; those above 5.5 are 6 and 9, so μ = 2 and (3/11) = +1. Indeed 5² = 25 ≡ 3. (c) q = 4p + 1 with p odd gives q ≡ 5 (mod 8), so (2/q) = −1 and 2^(2p) ≡ −1 (mod q); therefore the order of 2 divides 4p but not 2p, so it is 4 or 4p. It is not 4, since 2⁴ − 1 = 15 is not divisible by q ≥ 13. So the order is 4p = q − 1.

─────────────────────────────────
Lesson 8: The Law of Quadratic Reciprocity
─────────────────────────────────

📌 Key idea of this section:

        For distinct odd primes p, q:   (p/q)(q/p) = (−1)^(((p−1)/2)·((q−1)/2)).

Statement and history

Reciprocity says that the question "is p a square modulo q?" and the question "is q a square modulo p?" have the same answer, unless both p and q are ≡ 3 (mod 4), in which case they have opposite answers. The law was conjectured by Euler and stated by Legendre, whose attempted proof was incomplete; Gauss gave the first complete proof in April 1796, shortly before his nineteenth birthday, and published it in the Disquisitiones (1801). He eventually gave eight proofs, and well over three hundred have since been published. We give Eisenstein's geometric proof (1844), built on Gauss's lemma.

Eisenstein's lemma

Lemma 8.1. Let p be an odd prime and a an odd integer with p ∤ a. Then

        (a/p) = (−1)^T,   T = ∑ₖ₌₁^((p−1)/2) ⌊ka/p⌋.

Proof. Let h = (p − 1)/2 and write ka = p⌊ka/p⌋ + rₖ with 0 < rₖ < p. Let r′₁, …, r′λ be those rₖ below p/2 and s₁, …, s_μ those above p/2. In the proof of Gauss's lemma we saw that the numbers r′ᵢ and p − sⱼ together are exactly 1, …, h. Summing the division equations and summing this list,

        a ∑ₖ k = pT + ∑ r′ᵢ + ∑ sⱼ,      ∑ₖ k = ∑ r′ᵢ + μp − ∑ sⱼ.

Subtracting gives (a − 1)∑ₖ k = p(T − μ) + 2∑ sⱼ. Reducing modulo 2, with a and p odd, yields 0 ≡ T − μ (mod 2). So (−1)^T = (−1)^μ = (a/p) by Gauss's lemma. ∎

The proof of reciprocity

Theorem 8.2 (Quadratic reciprocity). If p and q are distinct odd primes, then (p/q)(q/p) = (−1)^(((p−1)/2)·((q−1)/2)).

Proof. Consider the lattice points (x, y) with 1 ≤ x ≤ (p − 1)/2 and 1 ≤ y ≤ (q − 1)/2; there are ((p − 1)/2)((q − 1)/2) of them. None lies on the line qx = py, since that would require p | x. Those below the line (y < qx/p) number

        ∑ₓ₌₁^((p−1)/2) ⌊qx/p⌋ = T(q, p),

because for each x the admissible y are 1, …, ⌊qx/p⌋ (and ⌊qx/p⌋ ≤ (q − 1)/2 since qx/p < q/2). Symmetrically, the points above the line number T(p, q) = ∑_y ⌊py/q⌋. Hence T(q, p) + T(p, q) = ((p − 1)/2)((q − 1)/2), and Lemma 8.1 gives

        (q/p)(p/q) = (−1)^(T(q,p) + T(p,q)) = (−1)^(((p−1)/2)((q−1)/2)). ∎

Computing with reciprocity

Together with multiplicativity and the two supplementary laws, reciprocity evaluates any Legendre symbol by repeated reduction, in the manner of the Euclidean algorithm. Worked example: is 219 a square modulo the prime 383? Here 219 = 3 · 73.

        (3/383) = −(383/3) = −(2/3) = −(−1) = +1        (both ≡ 3 mod 4; 383 ≡ 2 mod 3)
        (73/383) = (383/73) = (18/73) = (2/73)(9/73) = +1   (73 ≡ 1 mod 4 and 73 ≡ 1 mod 8)

So (219/383) = +1, and x² ≡ 219 (mod 383) is solvable. Euler's criterion confirms 219¹⁹¹ ≡ 1 (mod 383).

Reciprocity also answers the inverse question: for which primes p is a fixed a a residue? For example, for p > 3,

        (3/p) = +1  ⟺  p ≡ ±1 (mod 12).

Indeed (3/p) = (p/3)(−1)^((p−1)/2); (p/3) = +1 iff p ≡ 1 (mod 3), and the sign is +1 iff p ≡ 1 (mod 4); combining by CRT, (3/p) = +1 iff p ≡ 1 or 11 (mod 12). The answer depends only on p modulo 12, a phenomenon with no a priori explanation; class field theory explains it as the decomposition law of primes in the field ℚ(√3) ⊂ ℚ(e^(2πi/12)).

The Jacobi symbol

To avoid factoring the top entry, Jacobi extended the symbol. For odd n = p₁p₂⋯pᵣ (primes with repetition) and any a, define (a/n) = ∏ (a/pᵢ). The Jacobi symbol is multiplicative in both arguments and satisfies the same three laws: for odd positive coprime m, n,

        (m/n)(n/m) = (−1)^(((m−1)/2)((n−1)/2)),  (−1/n) = (−1)^((n−1)/2),  (2/n) = (−1)^((n²−1)/8).

(Proof: each formula is multiplicative in the relevant variables, because (m − 1)/2 is additive modulo 2 under multiplication of odd numbers, and similarly for (n² − 1)/8 modulo 2.) It can therefore be computed in O(log² n) bit operations without any factorisation. One warning: (a/n) = +1 does not imply that a is a square modulo a composite n. For instance (2/15) = (2/3)(2/5) = (−1)(−1) = +1, but the squares of units modulo 15 are only 1 and 4. On the other hand (a/n) = −1 does prove that a is a non-residue.

An application: Pépin's test

For the Fermat number Fₙ = 2^(2ⁿ) + 1 (n ≥ 1), Fₙ is prime if and only if 3^((Fₙ−1)/2) ≡ −1 (mod Fₙ). If Fₙ is prime then Fₙ ≡ 1 (mod 4) and Fₙ ≡ 2 (mod 3), so (3/Fₙ) = (Fₙ/3) = (2/3) = −1, and Euler's criterion gives the congruence. Conversely the congruence implies that 3 has order Fₙ − 1, a power of 2, modulo Fₙ, so Fₙ − 1 ≤ φ(Fₙ) and Fₙ is prime. For F₄ = 65537 one checks 3³²⁷⁶⁸ ≡ 65536 ≡ −1. Fermat numbers F₅ through F₃₂ are all known to be composite.

✏️ Your Turn

(a) Compute (150/1009) (1009 is prime).
(b) Determine all primes p ≠ 2, 5 for which 5 is a quadratic residue.
(c) Compute the Jacobi symbol (1001/9907) without factoring 9907.

Answers: (a) (150/1009) = (2/1009)(3/1009)(25/1009). Since 1009 ≡ 1 (mod 8), (2/1009) = 1; since 1009 ≡ 1 (mod 4), (3/1009) = (1009/3) = (1/3) = 1; and (25/1009) = 1. So (150/1009) = +1. (b) 5 ≡ 1 (mod 4), so (5/p) = (p/5), which is +1 iff p ≡ ±1 (mod 5). (c) 1001 ≡ 1 (mod 4), so (1001/9907) = (9907/1001) = (898/1001) = (2/1001)(449/1001). 1001 ≡ 1 (mod 8) gives (2/1001) = 1. Then (449/1001) = (1001/449) = (103/449) = (449/103) = (37/103) = (103/37) = (29/37) = (37/29) = (8/29) = (2/29)³ = (−1)³ = −1, using at each flip that one of the two entries is ≡ 1 (mod 4), and 29 ≡ 5 (mod 8). So (1001/9907) = −1. (In fact 9907 is prime, so 1001 is a non-residue.)

─────────────────────────────────
Lesson 9: Arithmetic Functions, Dirichlet Convolution and Möbius Inversion
─────────────────────────────────

📌 Key idea of this section:

        g(n) = ∑_d|n f(d)  for all n   ⟺   f(n) = ∑_d|n μ(d) g(n/d)  for all n.

The Dirichlet ring

An arithmetic function is any f : ℕ → ℂ. It is multiplicative if f(1) = 1 and f(mn) = f(m)f(n) whenever gcd(m, n) = 1, and completely multiplicative if this holds for all m, n. A multiplicative function is determined by its values on prime powers. Examples: the constant function 1, the identity id(n) = n, the powers idₖ(n) = nᵏ, the divisor functions τ and σ, Euler's φ, and the Möbius function

        μ(n) = (−1)ʳ if n is a product of r distinct primes,  μ(n) = 0 if p² | n for some p,  μ(1) = 1.

The Dirichlet convolution of f and g is defined by:

        (f ∗ g)(n) = ∑_d|n f(d) g(n/d) = ∑_ab=n f(a) g(b).

Theorem 9.1. Under pointwise addition and Dirichlet convolution, the arithmetic functions form a commutative ring with identity ε, where ε(1) = 1 and ε(n) = 0 for n > 1. A function f is invertible if and only if f(1) ≠ 0. If f and g are multiplicative, so is f ∗ g, and so is the inverse of a multiplicative function.

Proof. Commutativity and associativity follow from the symmetric descriptions ∑_ab=n and ∑_abc=n. The inverse is built recursively: g(1) = 1/f(1) and, for n > 1, g(n) = −(1/f(1)) ∑_d|n, d<n f(n/d) g(d). For multiplicativity, if gcd(m, n) = 1 then every divisor of mn is uniquely d = d₁d₂ with d₁ | m, d₂ | n, gcd(d₁, d₂) = 1, and the sum factorises. For inverses, let h be the multiplicative function that agrees with f⁻¹ on prime powers; then f ∗ h is multiplicative and equals ε on prime powers, so f ∗ h = ε and h = f⁻¹. ∎

Möbius inversion

Theorem 9.2. μ ∗ 1 = ε; that is, ∑_d|n μ(d) = 1 if n = 1 and 0 if n > 1.

Proof. Both sides are multiplicative, so it suffices to check n = pᵉ with e ≥ 1: ∑_d|pᵉ μ(d) = μ(1) + μ(p) = 1 − 1 = 0. ∎

Corollary 9.3 (Möbius inversion formula). g = f ∗ 1 if and only if f = g ∗ μ.

Proof. If g = f ∗ 1, convolve both sides with μ: g ∗ μ = f ∗ (1 ∗ μ) = f ∗ ε = f by Theorem 9.2. Conversely, if f = g ∗ μ, convolve with 1: f ∗ 1 = g ∗ (μ ∗ 1) = g. ∎

Examples. Gauss's identity ∑_d|n φ(d) = n (Lemma 6.1) reads φ ∗ 1 = id, so φ = μ ∗ id:

        φ(n) = ∑_d|n μ(d) n/d = n ∏ₚ|ₙ (1 − 1/p),

a second proof of the product formula. Similarly τ = 1 ∗ 1 and σ = id ∗ 1. One gets identities by pure algebra: φ ∗ τ = φ ∗ 1 ∗ 1 = id ∗ 1 = σ, that is ∑_d|n φ(d) τ(n/d) = σ(n). Check for n = 6: φ(1)τ(6) + φ(2)τ(3) + φ(3)τ(2) + φ(6)τ(1) = 4 + 2 + 4 + 2 = 12 = σ(6).

Irreducible polynomials over finite fields

Every element of 𝔽_(qⁿ) is a root of x^(qⁿ) − x, and this polynomial is the product of all monic irreducible polynomials over 𝔽_q whose degree divides n. Comparing degrees, if Nₖ is the number of monic irreducibles of degree k,

        qⁿ = ∑_d|n d·N_d,   hence   Nₙ = (1/n) ∑_d|n μ(d) q^(n/d).

For q = 2 and n = 4: N₄ = (16 − 4)/4 = 3, namely x⁴ + x + 1, x⁴ + x³ + 1 and x⁴ + x³ + x² + x + 1. Since nNₙ ≥ qⁿ − (q + q² + ⋯ + q^⌊n/2⌋) > qⁿ − 2q^(n/2), which is positive for n ≥ 3 (and N₁ = q, N₂ = (q² − q)/2 are positive directly), irreducible polynomials of every degree exist, so finite fields of every prime-power order exist; and Nₙ ~ qⁿ/n, a function-field analogue of the prime number theorem.

Dirichlet series

To an arithmetic function attach its Dirichlet series F(s) = ∑ f(n)n⁻ˢ. Formally, and absolutely where the series converge absolutely, the series of f ∗ g is F(s)G(s). For multiplicative f there is an Euler product F(s) = ∏ₚ (1 + f(p)p⁻ˢ + f(p²)p⁻²ˢ + ⋯). Thus

        ζ(s) = ∑ n⁻ˢ = ∏ₚ (1 − p⁻ˢ)⁻¹,   1/ζ(s) = ∑ μ(n) n⁻ˢ,   ζ(s)² = ∑ τ(n) n⁻ˢ,

for Re s > 1. Since ζ(2) = π²/6, the density of squarefree integers is ∑ μ(d)/d² = 6/π² (Problem 51), which is also the probability that two random integers are coprime.

Average orders

Arithmetic functions fluctuate wildly, but their averages are regular. Dirichlet showed, counting lattice points under the hyperbola xy = n,

        ∑ₙ≤ₓ τ(n) = x log x + (2γ − 1)x + O(√x),

where γ ≈ 0.5772 is Euler's constant; improving the error term (Dirichlet's divisor problem) is a famous open problem, the conjectured exponent being 1/4 + ε. Similarly ∑ₙ≤ₓ φ(n) = (3/π²)x² + O(x log x) and ∑ₙ≤ₓ σ(n) = (π²/12)x² + O(x log x).

Perfect numbers

A number n is perfect if σ(n) = 2n. Euclid (Elements IX.36) showed that if 2ᵖ − 1 is prime then 2ᵖ⁻¹(2ᵖ − 1) is perfect: σ is multiplicative, so σ = (2ᵖ − 1) · 2ᵖ. Euler proved the converse for even perfect numbers (Problem 56). Whether an odd perfect number exists is one of the oldest open problems in mathematics; any such number exceeds 10¹⁵⁰⁰ (Ochem and Rao, 2012). As of 2024, 52 Mersenne primes are known, the largest being 2¹³⁶²⁷⁹⁸⁴¹ − 1, found in October 2024.

✏️ Your Turn

(a) Compute ∑_d|60 μ(d) d.
(b) Find the number of monic irreducible polynomials of degree 2 and of degree 3 over 𝔽₃.
(c) Prove that ∑_d|n μ(d) τ(n/d) = 1 for every n.

Answers: (a) The function n ↦ ∑_d|n μ(d)d is multiplicative with value 1 − p at pᵉ, so the sum is (1 − 2)(1 − 3)(1 − 5) = (−1)(−2)(−4) = −8. (b) N₂ = (9 − 3)/2 = 3 and N₃ = (27 − 3)/3 = 8. (c) μ ∗ τ = μ ∗ 1 ∗ 1 = ε ∗ 1 = 1.

─────────────────────────────────
Lesson 10: The Distribution of Primes
─────────────────────────────────

📌 Key idea of this section:

        π(x) ~ x / log x   (the prime number theorem, 1896).

Counting functions

Let π(x) be the number of primes ≤ x. Chebyshev introduced the weighted counts

        θ(x) = ∑ₚ≤ₓ log p,     ψ(x) = ∑ₚᵏ≤ₓ log p = ∑ₙ≤ₓ Λ(n),

where the von Mangoldt function is Λ(n) = log p if n = pᵏ and 0 otherwise. Unique factorisation gives log = Λ ∗ 1, the identity behind every analytic approach. Partial summation shows that π(x) ~ x/log x, θ(x) ~ x and ψ(x) ~ x are equivalent statements. Euler's divergence of ∑ 1/p (Problem 47) already shows that the primes are much denser than the squares.

Chebyshev's bounds

Theorem 10.1 (Erdős's form of Chebyshev's upper bound). For every integer n ≥ 1, ∏ₚ≤ₙ p < 4ⁿ; hence θ(x) < x log 4 for x ≥ 1.

Proof. Induction on n; the cases n = 1, 2 are clear. If n > 2 is even, n is not prime and the claim follows from n − 1. If n = 2m + 1, every prime p with m + 1 < p ≤ 2m + 1 divides the binomial coefficient C(2m + 1, m) = (2m + 1)!/(m!(m + 1)!), since it divides the numerator but not the denominator. This coefficient appears twice in the expansion of (1 + 1)^(2m+1) (as C(2m + 1, m) and C(2m + 1, m + 1)), so C(2m + 1, m) ≤ 2^(2m) = 4ᵐ. Therefore

        ∏ₚ≤₂ₘ₊₁ p ≤ (∏ₚ≤ₘ₊₁ p) · C(2m + 1, m) < 4^(m+1) · 4ᵐ = 4^(2m+1). ∎

Theorem 10.2 (Chebyshev's lower bound). For every integer n ≥ 1, π(2n) ≥ n log 2 / log(2n).

Proof. By Legendre's formula vₚ(m!) = ∑ₖ≥₁ ⌊m/pᵏ⌋, the exponent of p in N = C(2n, n) is

        vₚ(N) = ∑ₖ≥₁ (⌊2n/pᵏ⌋ − 2⌊n/pᵏ⌋).

Each term is 0 or 1 (since ⌊2y⌋ − 2⌊y⌋ ∈ {0, 1}) and vanishes once pᵏ > 2n, so p^vₚ(N) ≤ 2n. Every prime factor of N is ≤ 2n, so N ≤ (2n)^π(2n). On the other hand N = ∏ₖ₌₁ⁿ (n + k)/k ≥ 2ⁿ. Taking logarithms, π(2n) log(2n) ≥ n log 2. ∎

Combining the two theorems with the trivial estimate π(x) − π(√x) ≤ θ(x)/log √x shows that c·x/log x < π(x) < C·x/log x for suitable constants and all x ≥ 2: the order of magnitude x/log x, conjectured by Legendre and Gauss from tables, is correct. Refining the same binomial coefficient argument (showing that no prime in (2n/3, n] divides C(2n, n)) proves Bertrand's postulate, first proved by Chebyshev in 1852: for every n ≥ 1 there is a prime p with n < p ≤ 2n.

Mertens' theorems (1874) sharpen this further:

        ∑ₚ≤ₓ (log p)/p = log x + O(1),   ∑ₚ≤ₓ 1/p = log log x + M + O(1/log x),   ∏ₚ≤ₓ (1 − 1/p) ~ e^(−γ)/log x,

where M ≈ 0.2615 is the Meissel–Mertens constant.

The prime number theorem

Theorem 10.3 (Hadamard; de la Vallée Poussin, 1896). π(x) ~ x/log x. More precisely, with li(x) = ∫₀ˣ dt/log t (principal value),

        π(x) = li(x) + O(x e^(−c√(log x)))   for some c > 0.

The numbers bear this out. For x = 10⁶: π(x) = 78 498, x/log x ≈ 72 382, li(x) ≈ 78 628. For x = 10⁹: π(x) = 50 847 534, x/log x ≈ 48 254 942, li(x) ≈ 50 849 235. The logarithmic integral is far more accurate, and it is the natural main term: heuristically the "probability" that n is prime is 1/log n. The proof of 1896 rests on Riemann's memoir of 1859, which treats ζ(s) as a function of a complex variable s = σ + it. ζ extends to a meromorphic function on ℂ with a single simple pole at s = 1, satisfies the functional equation

        ξ(s) = ξ(1 − s),   ξ(s) = π^(−s/2) Γ(s/2) ζ(s),

and has trivial zeros at −2, −4, −6, …; all other zeros (the non-trivial zeros) lie in the critical strip 0 < σ < 1. The decisive input for the prime number theorem is that ζ(s) has no zeros on the line σ = 1. Riemann's explicit formula expresses ψ(x) as x minus a sum over the non-trivial zeros ρ of x^ρ/ρ (plus small terms), so the location of the zeros controls the error term. Elementary proofs, avoiding complex analysis, were found by Selberg and Erdős in 1949; Newman's short proof (1980) uses only Cauchy's theorem.

The Riemann hypothesis

Conjecture 10.4 (Riemann hypothesis). Every non-trivial zero of ζ(s) has real part 1/2.

It is equivalent to the error estimate π(x) = li(x) + O(√x log x) (von Koch, 1901), and in explicit form to |π(x) − li(x)| < √x log x/(8π) for all x ≥ 2657 (Schoenfeld, 1976). More than 10¹³ zeros have been computed and all lie on the critical line. The Riemann hypothesis is one of the Clay Millennium Prize Problems. Its analogue for curves over finite fields was proved by Weil (1948), and for general varieties over finite fields by Deligne (1974). A curious fact: π(x) < li(x) for every x for which π(x) has been computed, yet Littlewood proved in 1914 that the difference changes sign infinitely often.

Primes in arithmetic progressions

Theorem 10.5 (Dirichlet, 1837). If gcd(a, q) = 1, the progression a, a + q, a + 2q, … contains infinitely many primes. In fact ∑ 1/p over primes p ≡ a (mod q) diverges, and (by the prime number theorem for progressions) the primes are equidistributed among the φ(q) coprime classes:

        π(x; q, a) ~ (1/φ(q)) · x/log x.

Dirichlet's proof introduced characters χ of (ℤ/qℤ)× and the L-functions L(s, χ) = ∑ χ(n)n⁻ˢ; orthogonality of characters isolates a single class, and the crux is that L(1, χ) ≠ 0 for every non-principal χ. For special progressions elementary proofs exist (Problems 23 and 24). The study of these L-functions and of their zeros (the generalised Riemann hypothesis) occupies a large part of modern analytic number theory.

Open problems and recent progress

The twin prime conjecture (infinitely many p with p + 2 prime) is open, but Zhang (2013) proved that lim inf (pₙ₊₁ − pₙ) < 7 · 10⁷, and Maynard and the Polymath project lowered the bound to 246. Green and Tao (2004) proved that the primes contain arbitrarily long arithmetic progressions. The ternary Goldbach conjecture (every odd n > 5 is a sum of three primes) was proved by Helfgott in 2013; the binary Goldbach conjecture remains open.

✏️ Your Turn

(a) Using Theorem 10.1 and the estimate π(x) − π(√x) ≤ θ(x)/log √x, show that π(x) < √x + 4 log 2 · x/log x for x ≥ 2.
(b) Compute the exponents of 3 and of 7 in C(100, 50) using Legendre's formula.
(c) Explain why ζ(s) has no zero with real part σ > 1.

Answers: (a) Each prime in (√x, x] contributes log p > (1/2)log x to θ(x), so (π(x) − π(√x)) · (1/2)log x < θ(x) < x log 4, giving π(x) < π(√x) + 2x log 4/log x ≤ √x + 4 log 2 · x/log x. (b) For p = 3 the terms are ⌊100/3⌋ − 2⌊50/3⌋ = 33 − 32 = 1, ⌊100/9⌋ − 2⌊50/9⌋ = 11 − 10 = 1, ⌊100/27⌋ − 2⌊50/27⌋ = 3 − 2 = 1 and ⌊100/81⌋ − 2⌊50/81⌋ = 1 − 0 = 1, so v₃ = 4. For p = 7: ⌊100/7⌋ − 2⌊50/7⌋ = 14 − 14 = 0 and ⌊100/49⌋ − 2⌊50/49⌋ = 2 − 2 = 0, so 7 does not divide C(100, 50) at all. (Kummer's theorem says vₚ(C(m + n, n)) is the number of carries when adding m and n in base p; 50 = 101 in base 7 and 50 + 50 involves no carries.) (c) For σ > 1 the Euler product converges absolutely, and an absolutely convergent product of non-zero factors (1 − p⁻ˢ)⁻¹ is non-zero.

─────────────────────────────────
Lesson 11: Sums of Two Squares and Pythagorean Triples
─────────────────────────────────

📌 Key idea of this section:

        n = x² + y² is solvable  ⟺  every prime q ≡ 3 (mod 4) divides n to an even power.

Fermat's two-square theorem

Fermat announced in a letter of 1640 that every prime p ≡ 1 (mod 4) is a sum of two squares; Euler published the first proof in 1752. Since squares are ≡ 0 or 1 (mod 4), no prime ≡ 3 (mod 4) has this property, and 2 = 1² + 1².

Lemma 11.1 (Thue, 1902). Let p be a prime and a an integer with p ∤ a. There exist integers x, y, not both zero, with |x|, |y| < √p and x ≡ ay (mod p).

Proof. Let m = ⌊√p⌋, so (m + 1)² > p. The (m + 1)² numbers u − av with 0 ≤ u, v ≤ m cannot all be distinct modulo p, so u₁ − av₁ ≡ u₂ − av₂ for two different pairs. Put x = u₁ − u₂ and y = v₁ − v₂. These are not both zero, |x|, |y| ≤ m, and m < √p because a prime is not a perfect square. ∎

Theorem 11.2 (Fermat–Euler). Every prime p ≡ 1 (mod 4) is a sum of two squares, and the representation p = x² + y² with x > y > 0 is unique.

Proof. By Corollary 4.4 there is a with a² ≡ −1 (mod p). Take x, y from Thue's lemma. Then x² + y² ≡ a²y² + y² ≡ 0 (mod p), and 0 < x² + y² < 2p, so x² + y² = p. For uniqueness, suppose p = a² + b² = c² + d² with a, b, c, d > 0. Then a²d² − b²c² = a²(p − c²) − (p − a²)c² = p(a² − c²), so p divides (ad − bc)(ad + bc). Also p² = (a² + b²)(c² + d²) = (ac + bd)² + (ad − bc)² = (ac − bd)² + (ad + bc)². If p | ad − bc, then since 0 < ad, bc < p we get ad = bc; as gcd(a, b) = gcd(c, d) = 1 this forces a | c and c | a, so (a, b) = (c, d). If p | ad + bc, then 0 < ad + bc ≤ p forces ad + bc = p, hence ac = bd, and similarly (a, b) = (d, c). So the representation is unique up to order. ∎

Worked example: p = 13, a = 5 (since 5² = 25 ≡ −1). With |x|, |y| ≤ 3 we need x ≡ 5y (mod 13): y = 2 gives x ≡ 10 ≡ −3. Indeed (−3)² + 2² = 13. Don Zagier (1990) gave a famous "one-sentence proof" of Theorem 11.2: the involution on the finite set {(x, y, z) ∈ ℕ³ : x² + 4yz = p} defined by three cases has exactly one fixed point, so the set has odd size, and hence so does the fixed-point set of the obvious involution (x, y, z) ↦ (x, z, y), which therefore is non-empty; a fixed point (x, y, y) gives p = x² + (2y)².

The general case

The Brahmagupta–Fibonacci identity,

        (a² + b²)(c² + d²) = (ac − bd)² + (ad + bc)²

is the multiplicativity of the norm N(a + bi) = a² + b² in ℤ[i]. It shows that products of sums of two squares are sums of two squares.

Theorem 11.3. A positive integer n is a sum of two squares if and only if the exponent of q in n is even for every prime q ≡ 3 (mod 4).

Proof. Sufficiency: write n = m²k with k squarefree. Every prime factor of k is 2 or ≡ 1 (mod 4), so k is a product of sums of two squares, hence one itself, and n = m²(x² + y²) = (mx)² + (my)². Necessity: suppose q ≡ 3 (mod 4) and q | x² + y². If q ∤ y then (xy⁻¹)² ≡ −1 (mod q), contradicting (−1/q) = −1. So q | y and then q | x, and q² | x² + y², with (x/q)² + (y/q)² = n/q². Induction on the exponent of q in n completes the proof. ∎

The Gaussian integers

The ring ℤ[i] is Euclidean with respect to the norm (divide in ℚ(i) and round each coordinate to the nearest integer; the error has norm ≤ 1/2), hence a principal ideal domain and a unique factorisation domain. Its units are ±1, ±i, and its primes are, up to units: 1 + i (with norm 2); the rational primes q ≡ 3 (mod 4), which stay prime; and, for each p ≡ 1 (mod 4), the two conjugate primes x ± yi with x² + y² = p. This is the simplest instance of the splitting of primes in a number field, and the rule "p splits iff p ≡ 1 (mod 4)" is reciprocity in disguise.

Counting the representations through this factorisation gives Jacobi's formula: the number r₂(n) of pairs (x, y) ∈ ℤ² with x² + y² = n is

        r₂(n) = 4(d₁(n) − d₃(n)),

where dᵢ(n) is the number of divisors of n that are ≡ i (mod 4). For n = 65 the divisors 1, 5, 13, 65 are all ≡ 1 (mod 4), so r₂(65) = 16, matching the representations (±1, ±8), (±8, ±1), (±4, ±7), (±7, ±4). For n = 2026 = 2 · 1013, the odd divisors 1 and 1013 are ≡ 1 (mod 4), so r₂(2026) = 8: the only representation up to order and sign is 2026 = 45² + 1², obtained from 1013 = 23² + 22² by (1 + i)(23 + 22i) = 1 + 45i.

Pythagorean triples

Theorem 11.4. The solutions of x² + y² = z² in positive integers with gcd(x, y) = 1 and y even are exactly

        x = m² − n²,   y = 2mn,   z = m² + n²,

with m > n > 0, gcd(m, n) = 1 and m, n of opposite parity.

Proof. Since gcd(x, y) = 1 and y is even, x and z are odd and coprime. Then (y/2)² = ((z + x)/2)((z − x)/2), where the two factors are coprime positive integers (a common divisor divides their sum z and difference x). By unique factorisation each is a square: (z + x)/2 = m², (z − x)/2 = n². The stated conditions on m, n are forced by the coprimality and the parity of x. Conversely these formulas always give primitive triples. ∎

A geometric view: rational points on the circle X² + Y² = 1 correspond, via lines of rational slope t through (−1, 0), to the parametrisation (X, Y) = ((1 − t²)/(1 + t²), 2t/(1 + t²)). This is the prototype of the arithmetic of curves of genus 0.

Infinite descent

Theorem 11.5 (Fermat). The equation x⁴ + y⁴ = z² has no solutions in positive integers. In particular Fermat's Last Theorem holds for exponent 4.

Proof. Suppose a solution exists and take one with z minimal; then gcd(x, y) = 1 and (x², y², z) is a primitive triple. Say y is even: x² = m² − n², y² = 2mn, z = m² + n² as in Theorem 11.4. From x² + n² = m² with x odd, n must be even (otherwise x² + n² ≡ 2 (mod 4) would be a square), so (x, n, m) is again a primitive triple: x = r² − s², n = 2rs, m = r² + s² with gcd(r, s) = 1. Now (y/2)² = m · (n/2) = m · r · s, and m, r, s are pairwise coprime, so each is a square: r = u², s = v², m = w². Then u⁴ + v⁴ = r² + s² = m = w², a new solution with 0 < w ≤ w² = m < m² + n² = z, contradicting minimality. ∎

Fermat's Last Theorem in general (xⁿ + yⁿ = zⁿ has no positive solutions for n ≥ 3) was proved by Wiles in 1995, by establishing enough of the modularity conjecture for elliptic curves; by the earlier work of Frey, Serre and Ribet, a counterexample would give an elliptic curve that cannot be modular.

Three and four squares

Lagrange proved in 1770 that every positive integer is a sum of four squares; Euler's four-square identity (the multiplicativity of the quaternion norm) reduces this to primes. Legendre and Gauss showed that n is a sum of three squares if and only if n is not of the form 4ᵃ(8b + 7). Jacobi's formula r₄(n) = 8 ∑ d, summed over the divisors d of n with 4 ∤ d, comes from the theory of modular forms, which is the natural home of all such representation numbers.

✏️ Your Turn

(a) Find the representation of 1013 as a sum of two squares and use it to write 2026 as a sum of two squares.
(b) Which of 245, 246 and 250 are sums of two squares? Give representations.
(c) Find all primitive Pythagorean triples with hypotenuse 65.

Answers: (a) Trying squares: 1013 − 23² = 1013 − 529 = 484 = 22², so 1013 = 23² + 22², and 2026 = 2 · 1013 = (23 + 22)² + (23 − 22)² = 45² + 1², using (a² + b²)(1² + 1²) = (a + b)² + (a − b)². (b) 245 = 5 · 7² is a sum of two squares: 14² + 7² = 196 + 49. 246 = 2 · 3 · 41 is not (3 appears to the first power). 250 = 2 · 5³ is: 15² + 5² = 225 + 25 and 13² + 9² = 169 + 81. (c) m² + n² = 65 with m > n > 0 coprime of opposite parity: (m, n) = (8, 1) and (7, 4). These give (63, 16, 65) and (33, 56, 65).

─────────────────────────────────
Lesson 12: Continued Fractions and Pell's Equation
─────────────────────────────────

📌 Key idea of this section:

        For non-square d > 0, x² − dy² = 1 has infinitely many solutions, all of the form ±(x₁ + y₁√d)ⁿ.

Continued fractions

Every real α has a simple continued fraction expansion α = [a₀; a₁, a₂, …], obtained by a₀ = ⌊α⌋, α₁ = 1/(α − a₀), a₁ = ⌊α₁⌋, and so on; it terminates exactly when α is rational, and then it is the Euclidean algorithm in disguise. The convergents pₖ/qₖ = [a₀; a₁, …, aₖ] satisfy

        pₖ = aₖpₖ₋₁ + pₖ₋₂,   qₖ = aₖqₖ₋₁ + qₖ₋₂,   pₖqₖ₋₁ − pₖ₋₁qₖ = (−1)^(k−1),

with p₋₁ = 1, q₋₁ = 0, p₋₂ = 0, q₋₂ = 1. The last identity implies that consecutive convergents straddle α and that |α − pₖ/qₖ| < 1/(qₖqₖ₊₁) < 1/qₖ². Conversely (Legendre), any fraction p/q with |α − p/q| < 1/(2q²) is a convergent. Convergents are the best rational approximations: for instance π = [3; 7, 15, 1, 292, …] gives 22/7 and 355/113, the latter accurate to within 3 · 10⁻⁷ because the next partial quotient, 292, is large.

Theorem 12.1 (Euler; Lagrange, 1770). The continued fraction of α is eventually periodic if and only if α is a quadratic irrational. For a non-square d > 0,

        √d = [a₀; a₁, a₂, …, aᵣ₋₁, 2a₀]   with period r, the block a₁, …, aᵣ₋₁ being a palindrome.

For example √2 = [1; 2, 2, 2, …], √7 = [2; 1, 1, 1, 4, …] with period 4, √13 = [3; 1, 1, 1, 1, 6, …] with period 5, and √61 = [7; 1, 4, 3, 1, 2, 2, 1, 3, 4, 1, 14, …] with period 11. No pattern of this kind is known for cube roots or for any algebraic number of degree ≥ 3; it is not even known whether the partial quotients of ∛2 are bounded.

Pell's equation

The equation x² − dy² = 1 for a non-square d > 0 was studied by Brahmagupta (628), who discovered the composition law

        (x₁² − dy₁²)(x₂² − dy₂²) = (x₁x₂ + dy₁y₂)² − d(x₁y₂ + x₂y₁)²,

and posed x² − 92y² = 1 (smallest solution (1151, 120)). The chakravala method of Bhāskara II (1150) solved x² − 61y² = 1. Fermat set the same equation as a challenge in 1657; the name of John Pell is a historical accident due to Euler. In modern language, solutions correspond to units of norm 1 in the ring ℤ[√d], since (x + y√d)(x − y√d) = x² − dy².

Theorem 12.2 (Lagrange, 1768). For non-square d > 0, x² − dy² = 1 has a solution with y ≠ 0.

Proof. By Dirichlet's approximation theorem (pigeonhole applied to the fractional parts of 0, √d, 2√d, …, N√d) there are infinitely many pairs of positive integers (p, q) with |p − q√d| < 1/q. For each, |p² − dq²| = |p − q√d| · |p + q√d| < (1/q)(2q√d + 1/q) ≤ 2√d + 1. Hence some integer k, necessarily non-zero because √d is irrational, satisfies p² − dq² = k for infinitely many pairs. Among these, two distinct pairs (p₁, q₁), (p₂, q₂) have p₁ ≡ p₂ and q₁ ≡ q₂ (mod |k|). Put α = p₁ + q₁√d and β = p₂ + q₂√d, both of norm k. Then

        α β̄ = (p₁p₂ − dq₁q₂) + (p₂q₁ − p₁q₂)√d,

and modulo |k| the coefficients are ≡ p₁² − dq₁² = k ≡ 0 and ≡ p₁q₁ − p₁q₁ = 0. So αβ̄/k = x + y√d with x, y ∈ ℤ and x² − dy² = N(α)N(β)/k² = 1. If y = 0 then x = ±1 and αβ̄ = ±k = ±ββ̄, so α = ±β, impossible for distinct pairs of positive integers. ∎

Theorem 12.3. Let (x₁, y₁) be the solution in positive integers with x₁ + y₁√d minimal (the fundamental solution) and ε = x₁ + y₁√d. Then the solutions of x² − dy² = 1 are exactly x + y√d = ±εⁿ, n ∈ ℤ.

Proof. Every ±εⁿ has norm 1. Conversely let η = x + y√d have norm 1; replacing η by −η we may assume η > 0, and replacing η by η⁻¹ = x − y√d we may assume η ≥ 1. Choose n ≥ 0 with εⁿ ≤ η < εⁿ⁺¹. Then u = ηε⁻ⁿ has norm 1 and 1 ≤ u < ε. If u > 1, write u = a + b√d; since u⁻¹ = a − b√d lies in (0, 1), we get a = (u + u⁻¹)/2 > 0 and b√d = (u − u⁻¹)/2 > 0, so (a, b) is a positive solution with a + b√d < ε, contradicting minimality. So u = 1 and η = εⁿ. ∎

The units of ℤ[√d] therefore form the group {±1} × ⟨ε⟩ ≅ C₂ × ℤ, the simplest case of Dirichlet's unit theorem (1846), which describes the unit group of the ring of integers of any number field as a finite cyclic group times ℤ^(r₁+r₂−1).

Finding the fundamental solution

Theorem 12.4. Let √d have period r and convergents pₖ/qₖ. Then pₖ² − dqₖ² = ±1 exactly for k ≡ −1 (mod r), with sign (−1)^(k+1). Consequently the fundamental solution of x² − dy² = 1 is (pᵣ₋₁, qᵣ₋₁) if r is even and (p₂ᵣ₋₁, q₂ᵣ₋₁) if r is odd; and x² − dy² = −1 is solvable if and only if r is odd.

Worked example: d = 7. The convergents of [2; 1, 1, 1, 4, …] are 2/1, 3/1, 5/2, 8/3, and r = 4, so the fundamental solution is (8, 3): 64 − 63 = 1. The next solution is (8 + 3√7)² = 127 + 48√7, and 127² − 7 · 48² = 16129 − 16128 = 1.

Worked example: d = 13. The convergents of [3; 1, 1, 1, 1, 6, …] are 3/1, 4/1, 7/2, 11/3, 18/5, and r = 5 is odd. So 18² − 13 · 5² = 324 − 325 = −1, and the fundamental solution of the positive equation is

        (18 + 5√13)² = (324 + 325) + 180√13 = 649 + 180√13,   649² − 13 · 180² = 421201 − 421200 = 1.

For d = 61 the period 11 is odd; x² − 61y² = −1 has fundamental solution (29718, 3805), and squaring gives the fundamental solution (1766319049, 226153980) of x² − 61y² = 1, the answer to Fermat's challenge. The fundamental solution can be enormous compared to d: its logarithm is the regulator, and by the class number formula it is related to the class number of ℚ(√d), so large regulators are typical. The Archimedes cattle problem reduces to x² − 410286423278424y² = 1, whose solution gives a herd whose size has 206 545 digits; it was computed in full only in 1965 (Williams, German and Zarnke).

✏️ Your Turn

(a) Find the fundamental solution of x² − 3y² = 1 and the next two solutions.
(b) Show that x² − 3y² = −1 has no integer solutions.
(c) Verify that (1151, 120) solves x² − 92y² = 1.

Answers: (a) √3 = [1; 1, 2, …] has period 2, convergents 1/1, 2/1, so the fundamental solution is (2, 1). Then (2 + √3)² = 7 + 4√3 and (2 + √3)³ = (7 + 4√3)(2 + √3) = 26 + 15√3, giving (7, 4) and (26, 15): 49 − 48 = 1 and 676 − 675 = 1. (b) Modulo 3, x² ≡ −1 ≡ 2, but squares are 0 or 1 mod 3. (Equivalently, the period of √3 is even.) (c) 1151² = 1324801 and 92 · 120² = 92 · 14400 = 1324800.

─────────────────────────────────
Lesson 13: Primality Testing and the RSA Cryptosystem
─────────────────────────────────

📌 Key idea of this section:

        If n is prime and n − 1 = 2ˢd with d odd, then a^d ≡ 1 or a^(2ʳd) ≡ −1 (mod n) for some 0 ≤ r < s.

The strong probable-prime test

Gauss wrote in the Disquisitiones that "the problem of distinguishing prime numbers from composite numbers and of resolving the latter into their prime factors is known to be one of the most important and useful in arithmetic." Trial division to √n is exponential in the number of digits. Fermat's theorem gives a fast necessary condition, but Carmichael numbers defeat it. The fix uses the fact that modulo a prime, 1 has only the square roots ±1.

Theorem 13.1. Let n be an odd prime, n − 1 = 2ˢd with d odd, and n ∤ a. Then either a^d ≡ 1 (mod n), or a^(2ʳd) ≡ −1 (mod n) for some r with 0 ≤ r < s.

Proof. Consider the sequence a^d, a^(2d), a^(4d), …, a^(2ˢd) = a^(n−1) ≡ 1, each term the square of the previous. If the first term is not 1, let a^(2ʳd) be the last term that is not 1; its square is 1, so it is a square root of 1 other than 1, hence −1 (Theorem 3.3). ∎

A composite n satisfying this condition for the base a is a strong pseudoprime to base a, and a is a strong liar for n. The Miller–Rabin test (Miller 1976, Rabin 1980) chooses random bases and declares n composite as soon as one base fails. Its power comes from the following theorem.

Theorem 13.2 (Monier; Rabin, 1980). If n > 9 is an odd composite, at most φ(n)/4 of the bases 1 ≤ a < n are strong liars.

We prove the easier fact that if n is not a Carmichael number, at most half of the units are even Fermat liars. The set H = {a ∈ (ℤ/nℤ)× : a^(n−1) = 1} is a subgroup, and it is proper because n is not a Carmichael number. By Lagrange's theorem |H| divides φ(n) and is therefore at most φ(n)/2. The full theorem handles Carmichael numbers using the CRT: since such n has at least two distinct prime factors, one can construct units whose powers a^(2ʳd) are ≡ −1 modulo one prime factor and ≡ 1 modulo another, and these are never strong liars. Consequently k independent random bases wrongly certify a composite with probability at most 4⁻ᵏ.

Worked example: n = 561, a = 2. Here 560 = 2⁴ · 35. Computing,

        2³⁵ ≡ 263,   263² ≡ 166,   166² ≡ 67,   67² ≡ 1   (mod 561).

The sequence never reaches −1 ≡ 560 before reaching 1, so 561 is composite; 2 is a Fermat liar but not a strong liar. Moreover 67 is a non-trivial square root of 1, which reveals factors: gcd(67 − 1, 561) = 33 and gcd(67 + 1, 561) = 17.

Strong pseudoprimes exist: the smallest to base 2 is 2047 = 23 · 89, since 2046 = 2 · 1023 and 2¹¹ = 2048 ≡ 1 gives 2¹⁰²³ = (2¹¹)⁹³ ≡ 1. But base 3 exposes it (3¹⁰²³ ≡ 1565 ≢ ±1 (mod 2047)). Testing the bases 2, 3, 5, 7 is deterministic for n < 3 215 031 751, and the first twelve primes as bases suffice for n < 3.18 · 10²³. Assuming the generalised Riemann hypothesis, testing all bases a ≤ 2(log n)² is a deterministic polynomial-time test (Miller; Bach, 1990).

Deterministic and certifying methods

Agrawal, Kayal and Saxena (2002) found the first unconditional deterministic polynomial-time primality test, based on the polynomial congruence (x + a)ⁿ ≡ xⁿ + a modulo (n, x^r − 1) for suitable small r; Lenstra and Pomerance reduced its running time to Õ((log n)⁶). In practice probabilistic tests are faster. For numbers of special form there are classical tests: Pépin's test for Fermat numbers (Lesson 8), and the Lucas–Lehmer test for Mersenne numbers: with s₀ = 4 and sₖ₊₁ = sₖ² − 2, the number Mₚ = 2ᵖ − 1 (p an odd prime) is prime if and only if Mₚ | sₚ₋₂. For p = 5, M₅ = 31 and s₁ = 14, s₂ = 194 ≡ 8, s₃ ≡ 62 ≡ 0 (mod 31). The largest known primes are Mersenne primes because of this test. Elliptic curve primality proving (ECPP) produces certificates that can be checked much faster than they are found.

The RSA cryptosystem

Rivest, Shamir and Adleman published their public-key system in 1977 (it had been found in 1973 by Clifford Cocks at GCHQ, but kept secret). Key generation: choose large primes p ≠ q, let n = pq, choose e with gcd(e, φ(n)) = 1, and compute d ≡ e⁻¹ (mod φ(n)) by the extended Euclidean algorithm. The public key is (n, e) and the private key is d. A message m ∈ ℤ/nℤ is encrypted as c = mᵉ mod n and decrypted as cᵈ mod n.

Theorem 13.3. For every m ∈ ℤ/nℤ (whether or not gcd(m, n) = 1), (mᵉ)ᵈ ≡ m (mod n).

Proof. Write ed = 1 + kφ(n) = 1 + k(p − 1)(q − 1). Modulo p: if p | m both sides are 0; otherwise m^(ed) = m · (m^(p−1))^(k(q−1)) ≡ m by Fermat. Similarly modulo q. By the CRT the congruence holds modulo n = pq. ∎

The same proof works with the Carmichael function λ(n) = lcm(p − 1, q − 1) in place of φ(n), giving a smaller decryption exponent.

Worked example: p = 61, q = 53, so n = 3233 and φ(n) = 60 · 52 = 3120. Take e = 17; the extended Euclidean algorithm gives d = 2753, since 17 · 2753 = 46801 = 15 · 3120 + 1. The message m = 65 encrypts to c = 65¹⁷ mod 3233 = 2790, and 2790²⁷⁵³ mod 3233 = 65.

Security

Anyone who can factor n can compute φ(n) and then d. Conversely, knowing φ(n) reveals the factors (p + q = n − φ(n) + 1 and pq = n, so p and q are the roots of a quadratic), and knowing d also allows n to be factored by a randomised algorithm that hunts for non-trivial square roots of 1, exactly as in the Miller–Rabin example above. Whether breaking RSA (recovering m from c without d) is as hard as factoring is open. The best known classical factoring algorithm is the general number field sieve, with heuristic running time

        exp((64/9)^(1/3) (log n)^(1/3) (log log n)^(2/3) (1 + o(1))),

which has factored RSA-250, a number of 829 bits, in 2020. Practical RSA uses moduli of 2048 bits or more, randomised padding (textbook RSA is deterministic and malleable), and the CRT for fast decryption. Shor's quantum algorithm factors in polynomial time, which is why post-quantum schemes based on lattices were standardised by NIST in 2024.

✏️ Your Turn

(a) Run one round of Miller–Rabin on n = 91 with base 2.
(b) In RSA with p = 5, q = 11 and e = 3, find d, encrypt m = 7, and decrypt.
(c) An RSA modulus n = 3233 has φ(n) = 3120. Factor n.

Answers: (a) 90 = 2 · 45. 2⁴⁵ ≡ 57 (mod 91), which is not ±1; squaring, 57² = 3249 = 35 · 91 + 64, so 2⁹⁰ ≡ 64 ≢ −1. Hence 91 is composite (indeed 91 = 7 · 13); here even the Fermat test detects it since 2⁹⁰ ≢ 1. (b) φ(55) = 40 and 3 · 27 = 81 ≡ 1 (mod 40), so d = 27. Encryption: 7³ = 343 = 6 · 55 + 13, so c = 13. Decryption: 13²⁷ ≡ 7 (mod 55). (c) p + q = 3233 − 3120 + 1 = 114 and pq = 3233, so p, q are the roots of t² − 114t + 3233 = 0: t = (114 ± √(12996 − 12932))/2 = (114 ± 8)/2, giving 61 and 53.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are in three groups. The Core problems are computations that every reader should be able to carry out quickly with the tools of Lessons 1–13. The Advanced problems ask for short proofs and less routine calculations. The Challenge problems contain several classical theorems whose proofs are standard material in graduate courses; each is solvable with the methods of this course, but some require a genuinely new idea.

Core (Problems 1–20)

  1. Use the Euclidean algorithm to compute gcd(3587, 1819), and find integers x, y with 3587x + 1819y = gcd(3587, 1819).
  2. Find all integer solutions of 3587x + 1819y = 51.
  3. Compute φ(2026) and φ(5040). (1013 is prime.)
  4. Find the last two digits of 7²⁰²⁶.
  5. Compute 3²⁰²⁶ mod 13.
  6. Find the inverse of 97 modulo 1000.
  7. Compute τ(360), σ(360) and φ(360).
  8. Show that 3 is a primitive root modulo 31.
  9. Solve the system x ≡ 2 (mod 7), x ≡ 4 (mod 11), x ≡ 5 (mod 13).
  10. List the quadratic residues modulo 17.
  11. Evaluate the Legendre symbol (3/101).
  12. Show that −2 is a quadratic residue modulo an odd prime p if and only if p ≡ 1 or 3 (mod 8).
  13. Compute 97! mod 101.
  14. Show that 341 is a Fermat pseudoprime to base 2 but not to base 3.
  15. Show that 2821 is a Carmichael number.
  16. Compute r₂(325) by Jacobi's formula and list the representations 325 = x² + y² with x > y ≥ 0.
  17. Evaluate ∑_d|360 μ(d) σ(360/d) without computing any σ values.
  18. Find the three smallest positive solutions of x² − 2y² = 1 and of x² − 2y² = −1.
  19. In RSA with p = 7, q = 17 and e = 5, find d, encrypt m = 10, and check the decryption.
  20. Run the Miller–Rabin test on n = 1105 with base 2, and use the result to find a factor of 1105.

Advanced (Problems 21–45)

  21. Prove that if gcd(a, b) = 1 then gcd(a + b, a − b) is 1 or 2.
  22. Prove that 30 divides n⁵ − n for every integer n.
  23. Prove that there are infinitely many primes p ≡ 3 (mod 4).
  24. Prove that there are infinitely many primes p ≡ 1 (mod 4).
  25. Prove that for n ≥ 2 the sum of the integers k with 1 ≤ k ≤ n and gcd(k, n) = 1 is nφ(n)/2.
  26. Find all solutions of x² ≡ 1 (mod 105).
  27. Let p be prime and m ≥ 1. Prove that ∑ₖ₌₁^(p−1) kᵐ ≡ −1 (mod p) if p − 1 | m, and ≡ 0 (mod p) otherwise.
  28. Evaluate (−42/61).
  29. Prove that if p ≡ 3 (mod 4) and q = 2p + 1 are both prime, then q | 2ᵖ − 1. Deduce that 2²⁵¹ − 1 is composite.
  30. Prove that σ(n) is odd if and only if n is a square or twice a square.
  31. Prove Liouville's identity ∑_d|n τ(d)³ = (∑_d|n τ(d))².
  32. Let λ(n) = (−1)^Ω(n) be Liouville's function (not to be confused with the Carmichael function), where Ω(n) counts prime factors with multiplicity. Prove that ∑_d|n λ(d) is 1 if n is a square and 0 otherwise.
  33. Find all n with φ(n) = 12, and prove that your list is complete.
  34. Show that 3 is a primitive root modulo 50.
  35. Find the smallest primitive root modulo 41.
  36. Prove that for a prime p ≥ 5, the product of the primitive roots modulo p (taken in {1, …, p − 1}) is ≡ 1 (mod p).
  37. Find the fundamental solution of x² − 14y² = 1 from the continued fraction of √14.
  38. Prove that if d has a prime factor q ≡ 3 (mod 4), then x² − dy² = −1 has no integer solutions.
  39. Prove that x² + y² = 3z² has no solution in integers other than x = y = z = 0.
  40. Find r₂(5525) and all representations 5525 = x² + y² with x > y > 0. (5525 = 5² · 13 · 17.)
  41. Show that 2047 is a strong pseudoprime to base 2 but that base 3 proves it composite.
  42. Prove that if 2ⁿ − 1 is prime then n is prime, and if 2ⁿ + 1 is prime (n ≥ 1) then n is a power of 2.
  43. Let p be an odd prime. Prove that every prime divisor q of 2ᵖ − 1 satisfies q ≡ 1 (mod 2p) and q ≡ ±1 (mod 8). Use this to factor 2¹¹ − 1.
  44. Solve x² ≡ −1 (mod 125) using Hensel's lemma.
  45. Compute λ(561), and prove that a composite n is a Carmichael number if and only if λ(n) | n − 1.

Challenge (Problems 46–60)

  46. Prove that (n − 1)! ≡ 0 (mod n) for every composite n > 4, and compute 3! mod 4.
  47. Prove that ∑ 1/p over all primes diverges. (Hint, after Erdős: suppose not, and count the integers n ≤ N all of whose prime factors are small.)
  48. Let n ≥ 3. Prove that every prime p with n < p ≤ 2n divides C(2n, n) exactly once, and that no prime p with 2n/3 < p ≤ n divides C(2n, n).
  49. Prove that for a prime p the sum of the primitive roots modulo p (taken in {1, …, p − 1}) is ≡ μ(p − 1) (mod p).
  50. Let Φₙ be the n-th cyclotomic polynomial. Prove that if a prime p ∤ n divides Φₙ(a) for an integer a, then ordₚ(a) = n. Deduce that there are infinitely many primes p ≡ 1 (mod n), for every n ≥ 2.
  51. Prove that the number Q(x) of squarefree integers n ≤ x satisfies Q(x) = (6/π²)x + O(√x).
  52. Determine the odd primes p ≠ 7 for which 7 is a quadratic residue, as congruence classes modulo 28.
  53. Prove Euler's discovery that 641 divides F₅ = 2³² + 1, and show that every prime divisor of Fₙ is ≡ 1 (mod 2ⁿ⁺¹).
  54. Find the fundamental solutions of x² − 29y² = −1 and x² − 29y² = 1. (√29 = [5; 2, 1, 1, 2, 10, …].)
  55. Prove that no integer of the form 4ᵃ(8b + 7), with a, b ≥ 0, is a sum of three squares.
  56. Prove Euler's theorem: every even perfect number has the form 2ᵖ⁻¹(2ᵖ − 1) with 2ᵖ − 1 prime.
  57. Complete the proof of Korselt's criterion: if n is a Carmichael number, then n is squarefree and p − 1 | n − 1 for every prime p | n.
  58. Factor n = 1022117 by Fermat's method (write n = a² − b²), and explain why RSA primes must not be too close together.
  59. For the RSA modulus n = 3233 = 61 · 53 with e = 17, compute λ(n) and the smallest positive d with ed ≡ 1 (mod λ(n)). Prove that this d decrypts correctly.
  60. Prove that every prime p ≡ 1 or 3 (mod 8) can be written as p = x² + 2y².

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. 3587 = 1 · 1819 + 1768, 1819 = 1 · 1768 + 51, 1768 = 34 · 51 + 34, 51 = 1 · 34 + 17, 34 = 2 · 17. So gcd = 17. Back-substitution: 17 = 51 − 34 = 51 − (1768 − 34 · 51) = 35 · 51 − 1768 = 35(1819 − 1768) − 1768 = 35 · 1819 − 36 · 1768 = 35 · 1819 − 36(3587 − 1819) = 71 · 1819 − 36 · 3587. So x = −36, y = 71. Check: 71 · 1819 = 129149 and 36 · 3587 = 129132, difference 17.
  2. 51 = 3 · 17, so (x₀, y₀) = (−108, 213) is a solution. Since 3587/17 = 211 and 1819/17 = 107, all solutions are x = −108 + 107t, y = 213 − 211t, t ∈ ℤ. Check: −108 · 3587 + 213 · 1819 = −387396 + 387447 = 51.
  3. φ(2026) = φ(2)φ(1013) = 1 · 1012 = 1012. 5040 = 2⁴ · 3² · 5 · 7, so φ(5040) = 5040 · (1/2)(2/3)(4/5)(6/7) = 1152.
  4. 7² = 49, 7⁴ = 2401 ≡ 1 (mod 100). 2026 = 4 · 506 + 2, so 7²⁰²⁶ ≡ 7² = 49. The last two digits are 49.
  5. 3³ = 27 ≡ 1 (mod 13), and 2026 = 3 · 675 + 1, so 3²⁰²⁶ ≡ 3.
  6. 1000 = 10 · 97 + 30, 97 = 3 · 30 + 7, 30 = 4 · 7 + 2, 7 = 3 · 2 + 1. Back-substitution: 1 = 7 − 3 · 2 = 13 · 7 − 3 · 30 = 13 · 97 − 42 · 30 = 433 · 97 − 42 · 1000. So 97⁻¹ ≡ 433 (mod 1000). Check: 97 · 433 = 42001.
  7. 360 = 2³ · 3² · 5. τ = 4 · 3 · 2 = 24; σ = 15 · 13 · 6 = 1170; φ = 360 · (1/2)(2/3)(4/5) = 96.
  8. 30 = 2 · 3 · 5, so check 3¹⁵, 3¹⁰, 3⁶ modulo 31. 3⁵ = 243 = 7 · 31 + 26 ≡ −5, so 3¹⁰ ≡ 25, 3¹⁵ ≡ −5 · 25 = −125 ≡ −1, and 3⁶ = 729 = 23 · 31 + 16 ≡ 16. None is 1, so ord₃₁(3) = 30.
  9. x = 2 + 7t with 7t ≡ 2 (mod 11); 7⁻¹ ≡ 8 (mod 11), so t ≡ 16 ≡ 5 and x ≡ 37 (mod 77). Then 37 + 77s ≡ 5 (mod 13): 37 ≡ 11 and 77 ≡ −1, so 11 − s ≡ 5, s ≡ 6, x = 37 + 462 = 499. Answer: x ≡ 499 (mod 1001). Check: 499 = 71 · 7 + 2 = 45 · 11 + 4 = 38 · 13 + 5.
  10. Squares of 1, …, 8 modulo 17: 1, 4, 9, 16, 8, 2, 15, 13. The residues are 1, 2, 4, 8, 9, 13, 15, 16.
  11. 101 ≡ 1 (mod 4), so (3/101) = (101/3) = (2/3) = −1.
  12. (−2/p) = (−1/p)(2/p). (−1/p) = +1 iff p ≡ 1 (mod 4), and (2/p) = +1 iff p ≡ ±1 (mod 8). Checking the classes 1, 3, 5, 7 mod 8: the products are (+1)(+1), (−1)(−1), (+1)(−1), (−1)(+1), so (−2/p) = +1 exactly for p ≡ 1, 3 (mod 8).
  13. By Wilson, 100! ≡ −1 (mod 101). Also 98 · 99 · 100 ≡ (−3)(−2)(−1) = −6. So 97! · (−6) ≡ −1, i.e. 97! ≡ 6⁻¹. Since 6 · 17 = 102 ≡ 1, 97! ≡ 17 (mod 101).
  14. 341 = 11 · 31 and 2¹⁰ = 1024 = 3 · 341 + 1, so 2³⁴⁰ = (2¹⁰)³⁴ ≡ 1 (mod 341): a pseudoprime to base 2. For base 3, work modulo 31: ord₃₁(3) = 30 (Problem 8) and 340 ≡ 10 (mod 30), so 3³⁴⁰ ≡ 3¹⁰ ≡ 25 (mod 31), hence 3³⁴⁰ ≢ 1 (mod 341). (In fact 3³⁴⁰ ≡ 56 (mod 341).)
  15. 2821 = 7 · 13 · 31 is squarefree, and 2820 = 6 · 470 = 12 · 235 = 30 · 94, so p − 1 | 2820 for p = 7, 13, 31. By Korselt's criterion it is a Carmichael number.
  16. 325 = 5² · 13; its divisors 1, 5, 13, 25, 65, 325 are all ≡ 1 (mod 4), so r₂(325) = 4 · 6 = 24. Representations: 325 = 18² + 1² = 17² + 6² = 15² + 10². Each gives 8 ordered signed pairs, total 24.
  17. The sum is (μ ∗ σ)(360) = (μ ∗ 1 ∗ id)(360) = id(360) = 360.
  18. Fundamental unit 1 + √2 has norm −1. Its odd powers give norm −1: 1 + √2, (1 + √2)³ = 7 + 5√2, (1 + √2)⁵ = 41 + 29√2; even powers give norm +1: 3 + 2√2, 17 + 12√2, 99 + 70√2. So x² − 2y² = 1: (3, 2), (17, 12), (99, 70); x² − 2y² = −1: (1, 1), (7, 5), (41, 29). Check e.g. 99² − 2 · 70² = 9801 − 9800 = 1 and 41² − 2 · 29² = 1681 − 1682 = −1.
  19. n = 119, φ(n) = 6 · 16 = 96. 5d ≡ 1 (mod 96): 5 · 77 = 385 = 4 · 96 + 1, so d = 77. Encryption: 10² = 100, 10⁴ ≡ 100² = 10000 = 84 · 119 + 4 ≡ 4, 10⁵ ≡ 40, so c = 40. Decryption: 40⁷⁷ ≡ 10 (mod 119); one can verify this via CRT. Modulo 7: 40 ≡ 5 and 77 ≡ 5 (mod 6), so 40⁷⁷ ≡ 5⁵ = 3125 ≡ 3 ≡ 10. Modulo 17: 40 ≡ 6 and 77 ≡ 13 (mod 16), so 40⁷⁷ ≡ 6¹³ ≡ 10 (6² ≡ 2, 6⁴ ≡ 4, 6⁸ ≡ 16 ≡ −1, so 6¹³ = 6⁸ · 6⁴ · 6 ≡ −24 ≡ 10).
  20. 1104 = 2⁴ · 69. Computing modulo 1105: 2⁶⁹ ≡ 967, then squaring 967² ≡ 259, 259² ≡ 781, 781² ≡ 1. The sequence reaches 1 without passing through −1 ≡ 1104, so 1105 is composite. The non-trivial square root 781 of 1 gives gcd(780, 1105) = 65 and gcd(782, 1105) = 17; indeed 1105 = 5 · 13 · 17.

Advanced

  21. Let d = gcd(a + b, a − b). Then d divides (a + b) + (a − b) = 2a and (a + b) − (a − b) = 2b, so d | gcd(2a, 2b) = 2 gcd(a, b) = 2.
  22. 30 = 2 · 3 · 5, and by Fermat n⁵ ≡ n (mod 5), n³ ≡ n (mod 3) so n⁵ = n³ · n² ≡ n · n² = n³ ≡ n (mod 3), and n⁵ ≡ n (mod 2) since n and n⁵ have the same parity. By CRT, n⁵ ≡ n (mod 30).
  23. Given primes p₁, …, pₖ ≡ 3 (mod 4), let N = 4p₁⋯pₖ − 1 ≡ 3 (mod 4). N is odd, and a product of primes ≡ 1 (mod 4) is ≡ 1 (mod 4), so N has a prime factor q ≡ 3 (mod 4). If q = pᵢ then q | 4p₁⋯pₖ − N = 1, impossible. So q is a new prime ≡ 3 (mod 4).
  24. Given primes p₁, …, pₖ ≡ 1 (mod 4), let N = (2p₁⋯pₖ)² + 1, and let q be a prime factor of N. Then q is odd and (2p₁⋯pₖ)² ≡ −1 (mod q), so (−1/q) = 1 and q ≡ 1 (mod 4). And q ≠ pᵢ since pᵢ ∤ N. So there is always a new prime ≡ 1 (mod 4).
  25. For n ≥ 3, k ↦ n − k permutes the residues coprime to n and has no fixed point (k = n/2 would have gcd(k, n) = k > 1). The φ(n) numbers split into φ(n)/2 pairs each with sum n, giving nφ(n)/2. For n = 2 the sum is 1 = 2 · 1/2.
  26. 105 = 3 · 5 · 7 and x ≡ ±1 modulo each prime gives 2³ = 8 solutions: x ≡ 1, 29, 34, 41, 64, 71, 76, 104 (mod 105). For example 29 ≡ −1 (mod 3, 5) and ≡ 1 (mod 7); 29² = 841 = 8 · 105 + 1.
  27. Let g be a primitive root. The sum is ∑ⱼ₌₀^(p−2) (gᵐ)ʲ. If p − 1 | m then gᵐ ≡ 1 and the sum is p − 1 ≡ −1. Otherwise gᵐ ≢ 1 and the geometric sum equals ((gᵐ)^(p−1) − 1)/(gᵐ − 1) ≡ 0, since (gᵐ)^(p−1) ≡ 1.
  28. (−42/61) = (−1/61)(2/61)(3/61)(7/61). 61 ≡ 1 (mod 4) gives (−1/61) = 1; 61 ≡ 5 (mod 8) gives (2/61) = −1; (3/61) = (61/3) = (1/3) = 1; (7/61) = (61/7) = (5/7) = (7/5) = (2/5) = −1. Product: 1 · (−1) · 1 · (−1) = +1.
  29. q = 2p + 1 ≡ 7 (mod 8) since p ≡ 3 (mod 4), so (2/q) = 1, and by Euler's criterion 2ᵖ = 2^((q−1)/2) ≡ 1 (mod q). For p = 251 ≡ 3 (mod 4), q = 503 is prime, so 503 | 2²⁵¹ − 1, a proper divisor since 2²⁵¹ − 1 > 503.
  30. σ is multiplicative. σ(2ᵉ) = 2ᵉ⁺¹ − 1 is odd. For odd p, σ(pᵉ) = 1 + p + ⋯ + pᵉ is a sum of e + 1 odd numbers, odd iff e is even. So σ(n) is odd iff every odd prime occurs to an even power, i.e. n = 2ᵉm² with m odd; this is a square if e is even and twice a square if e is odd.
  31. Both sides are multiplicative functions of n (the right side is the square of the multiplicative function τ ∗ 1). For n = pᵉ the divisors pᵏ have τ = k + 1, so the identity becomes ∑ⱼ₌₁^(e+1) j³ = (∑ⱼ₌₁^(e+1) j)², the classical identity 1³ + ⋯ + m³ = (m(m + 1)/2)².
  32. λ is completely multiplicative, so λ ∗ 1 is multiplicative. At n = pᵉ, ∑ₖ₌₀ᵉ (−1)ᵏ is 1 if e is even and 0 if e is odd. Hence (λ ∗ 1)(n) = 1 if every exponent is even (n a square) and 0 otherwise.
  33. If p | n then p − 1 | φ(n) = 12, so p ∈ {2, 3, 5, 7, 13}. If 5 | n then φ(5ᵃ) = 4 · 5ᵃ⁻¹ forces a = 1 and the cofactor m to have φ(m) = 3, impossible (φ(m) is even for m ≥ 3). If 13 | n: n = 13m with φ(m) = 1, so n = 13, 26. If 7 | n (and 13 ∤ n): n = 7m with φ(m) = 2, m coprime to 7, so m ∈ {3, 4, 6} and n = 21, 28, 42 (49 is excluded since φ(49) = 42). Otherwise n = 2ᵃ3ᵇ: 9 ∤ φ(n) forces b ≤ 2; b = 2 needs φ(2ᵃ) = 2, a = 2, n = 36; b ≤ 1 needs φ(2ᵃ) ∈ {6, 12}, impossible. Answer: n ∈ {13, 21, 26, 28, 36, 42}.
  34. (ℤ/50ℤ)× ≅ (ℤ/25ℤ)× is cyclic of order 20. Modulo 5, the powers of 3 are 3, 4, 2, 1, so 3 is a primitive root mod 5; and 3⁴ = 81 ≡ 6 ≢ 1 (mod 25), so by Theorem 6.3 it is a primitive root mod 25, and since 3 is odd it is a primitive root mod 50.
  35. 40 = 2³ · 5, so g is a primitive root iff g²⁰ ≢ 1 and g⁸ ≢ 1. g = 2: 41 ≡ 1 (mod 8), so (2/41) = 1 and 2²⁰ ≡ 1, fail. g = 3: 3⁸ = 6561 = 160 · 41 + 1, fail. g = 4 is a square, fail. g = 5: (5/41) = (41/5) = (1/5) = 1, fail. g = 6: (6/41) = (2/41)(3/41) = 1 · (41/3) = (2/3) = −1, so 6²⁰ ≡ −1; and 6² = 36 ≡ −5, 6⁴ ≡ 25, 6⁸ ≡ 625 = 15 · 41 + 10 ≡ 10. So 6 is the smallest primitive root.
  36. With g a primitive root, the primitive roots are gᵏ with 1 ≤ k ≤ p − 1, gcd(k, p − 1) = 1. Their product is g^S where S is the sum of these k, which equals (p − 1)φ(p − 1)/2 by Problem 25 (p − 1 ≥ 4). Since φ(p − 1) is even (Lesson 5), S is a multiple of p − 1 and g^S ≡ 1.
  37. √14 = [3; 1, 2, 1, 6, …] with period 4. Convergents: 3/1, 4/1, 11/3, 15/4. Since the period is even, the fundamental solution is (15, 4): 225 − 14 · 16 = 1.
  38. A solution would give x² ≡ −1 (mod q), contradicting (−1/q) = −1 for q ≡ 3 (mod 4).
  39. Suppose a non-trivial solution exists; divide by the gcd so that gcd(x, y, z) = 1. Then x² + y² ≡ 0 (mod 3), and since squares are 0 or 1 mod 3, 3 | x and 3 | y. Then 9 | 3z², so 3 | z, contradicting gcd = 1.
  40. All divisors of 5525 = 5² · 13 · 17 are ≡ 1 (mod 4), and τ(5525) = 3 · 2 · 2 = 12, so r₂(5525) = 48. As no representation has x = y or y = 0 (5525 is neither twice a square nor a square), there are 48/8 = 6 representations with x > y > 0: 5525 = 74² + 7² = 73² + 14² = 71² + 22² = 70² + 25² = 62² + 41² = 55² + 50².
  41. 2046 = 2 · 1023 and 2¹¹ = 2048 ≡ 1 (mod 2047), so 2¹⁰²³ = (2¹¹)⁹³ ≡ 1: the strong test with base 2 passes, while 2047 = 23 · 89. For base 3, 3¹⁰²³ ≡ 1565 (mod 2047), which is neither 1 nor −1, and since s = 1 there are no further squarings: 2047 is proved composite.
  42. If n = ab with 1 < a < n then 2ᵃ − 1 divides 2ⁿ − 1 = (2ᵃ)ᵇ − 1 and 1 < 2ᵃ − 1 < 2ⁿ − 1. If n has an odd divisor m > 1, n = mk, then 2ᵏ + 1 divides (2ᵏ)ᵐ + 1 (as x + 1 | xᵐ + 1 for odd m) and 1 < 2ᵏ + 1 < 2ⁿ + 1.
  43. 2ᵖ ≡ 1 (mod q), so ord_q(2) divides p and is not 1, hence equals p; by Fermat p | q − 1, and q − 1 is even, so 2p | q − 1. Also 2 = 2^(p+1) · 2⁻ᵖ ≡ (2^((p+1)/2))², so 2 is a square mod q and q ≡ ±1 (mod 8). For 2¹¹ − 1 = 2047, candidates are q = 22k + 1 ≡ ±1 (mod 8) up to √2047 ≈ 45: 23 works, and 2047 = 23 · 89, where 89 = 8 · 11 + 1.
  44. Modulo 5 the roots of x² ≡ −1 are ±2. Lift x = 2 + 5t: 4 + 20t ≡ −1 (mod 25) gives 4t ≡ −1 ≡ 4 (mod 5), t = 1, x = 7 (49 = 2 · 25 − 1). Lift x = 7 + 25t: 49 + 350t ≡ −1 (mod 125), i.e. 350t ≡ −50; divide by 25: 14t ≡ −2, 4t ≡ 3 (mod 5), t = 2, x = 57. Check: 57² = 3249 = 26 · 125 − 1. The solutions are x ≡ ±57, i.e. 57 and 68 (mod 125).
  45. λ(561) = lcm(λ(3), λ(11), λ(17)) = lcm(2, 10, 16) = 80, and 80 | 560. In general, a^(n−1) ≡ 1 for all units a iff the exponent λ(n) of (ℤ/nℤ)× divides n − 1, which (for composite n) is the definition of a Carmichael number.

Challenge

  46. Let n > 4 be composite. If n = ab with 1 < a < b < n, then a and b are distinct factors of (n − 1)!, so n | (n − 1)!. Otherwise n = p² with p prime, and p ≥ 3 since n > 4; then p and 2p are distinct numbers below p² = n (as 2p < p² for p ≥ 3), so 2p² | (n − 1)!. For n = 4, 3! = 6 ≡ 2 (mod 4), the only exception.
  47. Suppose ∑ 1/p converges. Choose k with ∑ᵢ>ₖ 1/pᵢ < 1/2, and call p₁, …, pₖ small. For any N, the integers n ≤ N divisible by some large prime number at most ∑ᵢ>ₖ N/pᵢ < N/2. Each n ≤ N with only small prime factors can be written n = m²s with s squarefree; there are at most 2ᵏ choices for s and at most √N for m, so at most 2ᵏ√N such n. Hence N < 2ᵏ√N + N/2, i.e. √N < 2ᵏ⁺¹, false for N = 4ᵏ⁺¹. So the series diverges.
  48. vₚ(C(2n, n)) = ∑ᵢ≥₁ (⌊2n/pⁱ⌋ − 2⌊n/pⁱ⌋). If n < p ≤ 2n: the i = 1 term is 1 − 0 = 1, and p² > 2n (as p > n ≥ 3 gives p² > 3n) kills the rest. If 2n/3 < p ≤ n: then 1 ≤ n/p < 3/2 and 2 ≤ 2n/p < 3, so the i = 1 term is 2 − 2 = 0; and p > 2n/3 ≥ 2 gives p ≥ 3, so p² ≥ 3p > 2n and all other terms vanish. (This is the key step of Erdős's proof of Bertrand's postulate.)
  49. In 𝔽ₚ, let S(d) be the sum of the elements of order d, for d | p − 1. Every element of order d is a root of x^m − 1 for d | m, and for m | p − 1 the polynomial x^m − 1 splits completely in 𝔽ₚ with distinct roots, so ∑_d|m S(d) is the sum of all roots of x^m − 1, which is 0 for m > 1 (the coefficient of x^(m−1)) and 1 for m = 1. So S ∗ 1 = ε on the divisors of p − 1, and Möbius inversion gives S(d) = μ(d). Taking d = p − 1: the sum of primitive roots is ≡ μ(p − 1). Example: p = 13, the roots 2 + 6 + 7 + 11 = 26 ≡ 0 = μ(12).
  50. xⁿ − 1 = ∏_d|n Φ_d(x). Suppose p ∤ n, p | Φₙ(a). Then aⁿ ≡ 1, so p ∤ a; let d = ordₚ(a), a divisor of n. If d < n, then p | a^d − 1 = ∏_e|d Φₑ(a) gives p | Φₑ(a) for some e | d, e < n, so a is a root of both Φₑ and Φₙ mod p, hence a double root of xⁿ − 1 mod p. But the derivative n xⁿ⁻¹ does not vanish at a (p ∤ n, p ∤ a), a contradiction. So d = n, and n | p − 1. Infinitely many: given finitely many primes p₁, …, pₖ ≡ 1 (mod n), let a = t · n p₁⋯pₖ with t ≥ 2. Since Φₙ(0) = ±1 for n ≥ 2 and Φₙ has integer coefficients, Φₙ(a) ≡ ±1 (mod a); and |Φₙ(a)| ≥ (a − 1)^φ(n) > 1. Any prime factor p of Φₙ(a) is coprime to a, hence p ∤ n and p ≠ pᵢ, and by the first part p ≡ 1 (mod n).
  51. μ(n)² = ∑_d²|n μ(d) (check on prime powers: for pᵉ the sum is 1 if e ≤ 1 and 1 − 1 = 0 if e ≥ 2). Hence Q(x) = ∑_d≤√x μ(d)⌊x/d²⌋ = x ∑_d≤√x μ(d)/d² + O(√x). Since ∑_d μ(d)/d² = 1/ζ(2) = 6/π² and the tail ∑_d>√x 1/d² = O(1/√x), we get Q(x) = (6/π²)x + O(√x).
  52. By reciprocity (7/p) = (p/7) · (−1)^((p−1)/2). The residues mod 7 are 1, 2, 4. If p ≡ 1 (mod 4) we need p ≡ 1, 2, 4 (mod 7): p ≡ 1, 9, 25 (mod 28). If p ≡ 3 (mod 4) we need p ≡ 3, 5, 6 (mod 7): p ≡ 3, 19, 27 (mod 28). So 7 is a residue exactly for p ≡ ±1, ±3, ±9 (mod 28).
  53. 641 = 5 · 2⁷ + 1 = 5⁴ + 2⁴. From 5 · 2⁷ ≡ −1 (mod 641), raising to the fourth power gives 5⁴ · 2²⁸ ≡ 1. Since 5⁴ ≡ −2⁴, this says −2³² ≡ 1, i.e. 641 | 2³² + 1. In general, if p | Fₙ then 2^(2ⁿ) ≡ −1, so 2^(2ⁿ⁺¹) ≡ 1 and ordₚ(2) = 2ⁿ⁺¹ exactly; hence 2ⁿ⁺¹ | p − 1. (For n = 5: 641 = 1 + 10 · 64; Lucas improved the modulus to 2ⁿ⁺², and 641 = 1 + 5 · 128.)
  54. The period is 5 (odd). Convergents: 5/1, 11/2, 16/3, 27/5, 70/13. So 70² − 29 · 13² = 4900 − 4901 = −1, the fundamental solution of the negative equation. Squaring, (70 + 13√29)² = (4900 + 4901) + 1820√29 = 9801 + 1820√29, so the fundamental solution of x² − 29y² = 1 is (9801, 1820).
  55. Squares are ≡ 0, 1 or 4 (mod 8), and sums of three of these are never 7 (mod 8). If 4 | x² + y² + z², then since squares are 0 or 1 (mod 4), all of x, y, z are even, and (x/2)² + (y/2)² + (z/2)² = n/4. By induction on a, no number 4ᵃ(8b + 7) is a sum of three squares.
  56. Let n = 2ᵏm be perfect with k ≥ 1 and m odd. Then 2ᵏ⁺¹m = σ(n) = (2ᵏ⁺¹ − 1)σ(m). So 2ᵏ⁺¹ − 1 | m; write m = (2ᵏ⁺¹ − 1)M, so σ(m) = 2ᵏ⁺¹M = m + M. Since 2ᵏ⁺¹ − 1 ≥ 3, M < m, and m, M are distinct divisors of m whose sum is already σ(m); so m has no other divisors. Thus M = 1 and m = 2ᵏ⁺¹ − 1 is prime. With p = k + 1, n = 2ᵖ⁻¹(2ᵖ − 1).
  57. Let n be Carmichael and p | n. If p² | n, take g a primitive root modulo p² and, by CRT, a ≡ g (mod p²), a ≡ 1 modulo the part of n coprime to p. Then a is a unit and a^(n−1) ≡ 1 (mod p²), so p(p − 1) = ord(g) | n − 1, giving p | n − 1, impossible since p | n. So n is squarefree. Similarly, choosing a ≡ g (mod p) with g a primitive root mod p and a ≡ 1 modulo n/p, a^(n−1) ≡ 1 (mod p) forces p − 1 | n − 1.
  58. √1022117 ≈ 1010.998, so try a = 1011: 1011² − 1022117 = 1022121 − 1022117 = 4 = 2². Thus n = 1011² − 2² = 1009 · 1013. In general, if n = pq with p, q close, then a = (p + q)/2 is just above √n and b = (q − p)/2 is small, so a short search from ⌈√n⌉ finds the factorisation; RSA primes must therefore differ substantially (standards require |p − q| to be very large).
  59. λ(3233) = lcm(60, 52) = 780. Since 2753 = 3 · 780 + 413, d = 413, and indeed 17 · 413 = 7021 = 9 · 780 + 1. Correctness: ed = 1 + 780k; modulo p = 61, either p | m or m^(ed) = m · (m⁶⁰)^(13k) ≡ m; modulo q = 53 similarly with m⁵² and exponent 15k. By CRT m^(ed) ≡ m (mod 3233).
  60. Since (−2/p) = 1 (Problem 12), choose a with a² ≡ −2 (mod p). By Thue's lemma there are x, y, not both 0, with |x|, |y| < √p and x ≡ ay. Then x² + 2y² ≡ a²y² + 2y² ≡ 0 (mod p), and 0 < x² + 2y² < 3p, so x² + 2y² = p or 2p. If it is 2p, then x is even, x = 2x′, and 2x′² + y² = p. Either way p is of the form X² + 2Y². Examples: 3 = 1 + 2 · 1², 11 = 3² + 2 · 1², 17 = 3² + 2 · 2², 19 = 1² + 2 · 3².
