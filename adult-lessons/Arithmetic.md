Arithmetic — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

        a + 0 = a,          a + S(b) = S(a + b)
        a · 0 = 0,          a · S(b) = a · b + a
        fl(x ∘ y) = (x ∘ y)(1 + δ),   |δ| ≤ u = 2⁻⁵³

The first two lines are the entire definition of addition and multiplication of natural numbers; everything a schoolchild learns about carrying, borrowing and multiplication tables is a consequence of them together with the principle of induction. The third line is the fundamental model of arithmetic as it is actually performed by every computer on Earth: each operation is exact up to a relative error no larger than a fixed unit roundoff. Between these two poles lies the subject of this course.

Arithmetic is usually treated as the part of mathematics that is finished before mathematics begins. That view is mistaken in two directions. Looking down, the familiar laws (commutativity, associativity, distributivity, the rules of signs, the uniqueness of prime factorisation) are theorems, not conventions, and making their proofs precise was one of the great achievements of nineteenth-century foundations, through the work of Grassmann, Dedekind, Peano, Cantor and Weierstrass. Looking up, arithmetic becomes algebra (rings, ideals, Euclidean domains, quotient rings), analysis (the completion of ℚ to ℝ), numerical analysis (floating-point error and stability) and computational complexity (how fast two n-digit numbers can be multiplied, a question whose best known upper bound, O(n log n), was found only in 2019).

The course assumes familiarity with sets, functions, equivalence relations, proof by induction and the elementary language of groups and rings. All the material of the school course (order of operations, signed numbers, exponent laws, long division) is taken as known and is here re-derived from first principles.

In this course, you will:

  1. Define the natural numbers by the Peano axioms and justify definitions by recursion
  2. Prove the commutative, associative and distributive laws by induction
  3. Construct ℤ and ℚ as sets of equivalence classes and verify the ordered-field axioms
  4. Prove the division algorithm and study Euclidean domains, ℤ[i] and k[x]
  5. Prove the fundamental theorem of arithmetic and see where unique factorisation fails
  6. Develop modular arithmetic as the arithmetic of the quotient ring ℤ/nℤ
  7. Prove the existence and uniqueness of positional representations in any base
  8. Construct ℝ by Dedekind cuts and by Cauchy sequences and characterise it uniquely
  9. Analyse IEEE 754 floating-point arithmetic, rounding error and catastrophic cancellation
  10. Study the computational complexity of arithmetic, from Karatsuba to O(n log n) multiplication

Each lesson states its definitions and theorems precisely and proves them. Each lesson ends with short exercises, whose solutions can be revealed on the page; the sixty practice problems at the end range from routine verification to results found in research-level texts and are left for the reader to work.

─────────────────────────────────
Lesson 1: The Peano Axioms and Definition by Recursion
─────────────────────────────────

📌 Key idea of this section:

        ℕ is a set with an element 0 and an injective map S : ℕ → ℕ
        such that 0 ∉ S(ℕ) and every subset containing 0 and closed under S is all of ℕ.
        Addition and multiplication are then the unique functions satisfying
        a + 0 = a,  a + S(b) = S(a + b),  a · 0 = 0,  a · S(b) = a · b + a.

The axioms

In 1889 Giuseppe Peano published Arithmetices principia, nova methodo exposita, a short Latin pamphlet that set out the natural numbers as a formal axiomatic system. Richard Dedekind had reached essentially the same characterisation a year earlier in Was sind und was sollen die Zahlen? (1888), and Hermann Grassmann had already given recursive definitions of addition and multiplication in his Lehrbuch der Arithmetik (1861). We follow the modern formulation, starting the natural numbers at 0.

Definition 1.1 (Peano system). A Peano system is a triple (N, z, S) consisting of a set N, an element z ∈ N and a function S : N → N such that the following hold.

  1. (P1) S is injective: S(m) = S(n) implies m = n.
  2. (P2) z is not in the image of S: S(n) ≠ z for every n ∈ N.
  3. (P3) Induction: if A ⊆ N, z ∈ A, and n ∈ A implies S(n) ∈ A, then A = N.

We write ℕ, 0 and S for a fixed Peano system and call S(n) the successor of n. Abbreviations: 1 = S(0), 2 = S(1), 3 = S(2), and so on. Axiom P3 is the principle of mathematical induction; it is what forbids ℕ from containing "extra" elements beyond those reachable from 0 by repeated succession.

Lemma 1.2. Every n ∈ ℕ with n ≠ 0 is a successor: n = S(m) for a unique m.

Proof. Let A = {0} ∪ S(ℕ). Then 0 ∈ A, and if n ∈ A then S(n) ∈ S(ℕ) ⊆ A. By P3, A = ℕ, so every nonzero n lies in S(ℕ). Uniqueness of m is P1. ∎

Each axiom is independent of the others. The set {0} with S(0) = 0 satisfies P1 and P3 but not P2. The set {0, 1, 2} with S(0) = 1, S(1) = 2, S(2) = 1 satisfies P2 and P3 but not P1. The set ℕ ∪ {ω} with S(ω) = ω satisfies P1 and P2 but not P3, since ℕ itself is a proper subset containing 0 and closed under S.

The recursion theorem

It is tempting to say "define a + b by a + 0 = a and a + S(b) = S(a + b)" and move on. But a definition of this shape is a claim that a unique function exists with those properties, and that claim needs proof. Dedekind was the first to see this clearly.

Theorem 1.3 (Dedekind's recursion theorem). Let X be a set, x₀ ∈ X and g : X → X a function. Then there is exactly one function h : ℕ → X such that h(0) = x₀ and h(S(n)) = g(h(n)) for all n ∈ ℕ.

Proof. Call a relation R ⊆ ℕ × X admissible if (0, x₀) ∈ R and (n, x) ∈ R implies (S(n), g(x)) ∈ R. The set ℕ × X is admissible, so the intersection H of all admissible relations is a nonempty admissible relation, the smallest one. We show that H is the graph of a function, that is, for every n there is exactly one x with (n, x) ∈ H.

Let A be the set of n for which there is exactly one such x. First, 0 ∈ A: certainly (0, x₀) ∈ H. Suppose (0, y) ∈ H with y ≠ x₀. Then H minus the pair (0, y) is still admissible, because by P2 no pair of the form (S(n), g(x)) equals (0, y); this contradicts minimality. Next suppose n ∈ A, with unique partner x. Then (S(n), g(x)) ∈ H. If also (S(n), y) ∈ H with y ≠ g(x), remove the pair (S(n), y) from H; the result is still admissible, since the only way the closure condition could require (S(n), y) is from a pair (m, w) ∈ H with S(m) = S(n) and g(w) = y, and by P1 m = n, so w = x and g(w) = g(x) ≠ y. Again minimality is contradicted, so S(n) ∈ A. By P3, A = ℕ and H is the graph of a function h with the required properties.

Uniqueness: if h and h′ both satisfy the conditions, the set {n : h(n) = h′(n)} contains 0 and is closed under S, so it is ℕ. ∎

The theorem extends without difficulty to recursions with a parameter: given functions x₀ : P → X and g : P × X → X there is a unique h : P × ℕ → X with h(p, 0) = x₀(p) and h(p, S(n)) = g(p, h(p, n)). Applying it for each fixed p gives existence and uniqueness at once.

Definition 1.4 (Addition, multiplication, exponentiation). For a, b ∈ ℕ define:

        a + 0 = a,          a + S(b) = S(a + b)
        a · 0 = 0,          a · S(b) = a · b + a
        a⁰ = 1,             a^S(b) = a^b · a

The first line is the recursion theorem with parameter a, x₀(a) = a and g(a, x) = S(x). The second line uses x₀(a) = 0 and g(a, x) = x + a, which is legitimate because addition has already been defined. The third line uses multiplication in the same way. Each operation is therefore a well-defined function ℕ × ℕ → ℕ.

Two immediate observations. First, a + 1 = a + S(0) = S(a + 0) = S(a), so the successor is "adding one", as it should be. Second, the definitions make 2 + 2 = 4 a theorem with a four-line proof:

        2 + 2 = 2 + S(1) = S(2 + 1) = S(2 + S(0)) = S(S(2 + 0)) = S(S(2)) = S(3) = 4

Categoricity

Theorem 1.5 (Dedekind, 1888). Any two Peano systems are isomorphic: if (N, z, S) and (N′, z′, S′) are Peano systems there is a unique bijection φ : N → N′ with φ(z) = z′ and φ∘S = S′∘φ.

Proof. By the recursion theorem there are unique maps φ : N → N′ and ψ : N′ → N commuting with the successors and sending z to z′ and z′ to z. Then ψ∘φ : N → N sends z to z and commutes with S, as does the identity; by the uniqueness half of Theorem 1.3, ψ∘φ = id. Similarly φ∘ψ = id. ∎

This explains why it does not matter which set-theoretic model of ℕ one adopts (von Neumann's 0 = ∅, S(n) = n ∪ {n}, or Zermelo's S(n) = {n}): all of them are the same structure. A word of caution is in order. Axiom P3 quantifies over all subsets of ℕ and is a second-order statement. When the induction axiom is replaced by the first-order induction schema (one axiom for each formula of the language of arithmetic), the resulting theory, first-order Peano arithmetic (PA), is no longer categorical: it has nonstandard models containing elements larger than every standard numeral, which Skolem constructed in 1933–34 and which also follow from the compactness theorem. By Gödel's first incompleteness theorem (1931), PA is moreover incomplete: if it is consistent, there are sentences of arithmetic it neither proves nor refutes. The arithmetic of this course is that of the standard model, which second-order induction pins down uniquely.

✏️ Your Turn

(a) Using only Definition 1.4, compute 2 · 2, recording each use of a defining equation.
(b) Prove by induction that S(n) ≠ n for every n ∈ ℕ.
(c) Which of the three Peano axioms fails for the set of integers ℤ with S(n) = n + 1 and z = 0?

Answers: (a) 2 · 2 = 2 · S(1) = 2 · 1 + 2 = (2 · S(0)) + 2 = (2 · 0 + 2) + 2 = (0 + 2) + 2 = 2 + 2 = 4, where 0 + 2 = 2 needs one more short computation (0 + 2 = S(0 + 1) = S(S(0 + 0)) = S(S(0)) = 2) and 2 + 2 = 4 was computed above. (b) Let A = {n : S(n) ≠ n}. By P2, S(0) ≠ 0, so 0 ∈ A. If S(n) ≠ n then by P1 (injectivity, in contrapositive) S(S(n)) ≠ S(n), so S(n) ∈ A. By P3, A = ℕ. (c) P2 fails, since 0 = S(−1). P1 holds, and P3 fails too: ℕ ⊂ ℤ contains 0 and is closed under S.

─────────────────────────────────
Lesson 2: The Laws of Arithmetic by Induction
─────────────────────────────────

📌 Key idea of this section:

        (ℕ, +, ·, ≤) is a commutative semiring with cancellation,
        totally ordered, with no zero divisors, and well ordered.
        Every law is proved by induction on one variable, using the recursive definitions.

Addition

The recursive definition of addition treats its two arguments asymmetrically: recursion is on the right-hand argument. Commutativity, which is obvious to a child counting pebbles, therefore requires proof. The standard route goes through two lemmas.

Lemma 2.1. For all a ∈ ℕ, 0 + a = a.

Proof. Induction on a. The case a = 0 is the definition 0 + 0 = 0. If 0 + a = a then 0 + S(a) = S(0 + a) = S(a). ∎

Lemma 2.2. For all a, b ∈ ℕ, S(a) + b = S(a + b).

Proof. Induction on b. For b = 0 both sides equal S(a). If S(a) + b = S(a + b), then S(a) + S(b) = S(S(a) + b) = S(S(a + b)) = S(a + S(b)). ∎

Theorem 2.3. Addition is associative and commutative, and it satisfies cancellation: a + c = b + c implies a = b.

Proof. Associativity, (a + b) + c = a + (b + c), by induction on c. For c = 0 both sides are a + b. If it holds for c, then (a + b) + S(c) = S((a + b) + c) = S(a + (b + c)) = a + S(b + c) = a + (b + S(c)).

Commutativity, a + b = b + a, by induction on b. For b = 0 this is a = 0 + a, Lemma 2.1. If a + b = b + a then a + S(b) = S(a + b) = S(b + a) = S(b) + a, the last step being Lemma 2.2.

Cancellation by induction on c. For c = 0 there is nothing to prove. If a + S(c) = b + S(c) then S(a + c) = S(b + c), so a + c = b + c by P1, and a = b by the induction hypothesis. ∎

Multiplication

Theorem 2.4. Multiplication is commutative and associative, distributes over addition, has identity 1, and has no zero divisors: ab = 0 implies a = 0 or b = 0.

Proof. We give the steps in a workable order.

Left distributivity a(b + c) = ab + ac, by induction on c: for c = 0 both sides are ab. If it holds for c then a(b + S(c)) = a · S(b + c) = a(b + c) + a = (ab + ac) + a = ab + (ac + a) = ab + a · S(c).

The identities 0 · a = 0 and S(a) · b = ab + b follow by induction on the second variable, exactly as in Lemmas 2.1 and 2.2; for instance S(a) · S(b) = S(a) · b + S(a) = (ab + b) + S(a) = ab + S(b + a) = (ab + a) + S(b) = a · S(b) + S(b), using associativity and commutativity of addition and Lemma 2.2. With these, commutativity ab = ba follows by induction on b. Right distributivity then follows from left distributivity and commutativity. Associativity (ab)c = a(bc) is induction on c: (ab) · S(c) = (ab)c + ab = a(bc) + ab = a(bc + b) = a(b · S(c)). Finally a · 1 = a · S(0) = a · 0 + a = 0 + a = a.

For zero divisors, suppose a ≠ 0 and b ≠ 0. By Lemma 1.2 write b = S(c); then ab = ac + a, and a = S(d) gives ab = S(ac + d) ≠ 0 by P2. ∎

Order

Definition 2.5. For a, b ∈ ℕ write a ≤ b if there is c ∈ ℕ with a + c = b; such c is unique by cancellation and is denoted b − a. Write a < b if a ≤ b and a ≠ b.

Theorem 2.6. The relation ≤ is a total order on ℕ, compatible with the operations: a ≤ b implies a + c ≤ b + c and ac ≤ bc. Moreover a < b if and only if S(a) ≤ b.

Proof. Reflexivity: a + 0 = a. Transitivity: a + c = b and b + d = e give a + (c + d) = e. Antisymmetry: if a + c = b and b + d = a then a + (c + d) = a = a + 0, so c + d = 0 by cancellation; if d ≠ 0 then d = S(m) and c + d = S(c + m) ≠ 0, so d = 0 and c = 0, whence a = b. Totality: fix a and let A = {b : a ≤ b or b ≤ a}. Clearly 0 ≤ a, so 0 ∈ A. If b ≤ a, write a = b + c; either c = 0 and then a ≤ S(b), or c = S(m) and then a = S(b) + m, so S(b) ≤ a. If a ≤ b then a ≤ S(b). By P3, A = ℕ. Compatibility is immediate from the definitions. For the final statement, a < b means b = a + c with c ≠ 0, so c = S(m) and b = S(a) + m. ∎

Theorem 2.7 (Well-ordering principle). Every nonempty subset of ℕ has a least element.

Proof. Suppose E ⊆ ℕ has no least element. Let A = {n : no element of E is ≤ n}. Then 0 ∈ A, for otherwise 0 ∈ E would be least. If n ∈ A and S(n) ∉ A, some e ∈ E satisfies e ≤ S(n); since e ≤ n is excluded, e = S(n) (by totality and Theorem 2.6, n < e ≤ S(n) forces e = S(n)), and then e would be the least element of E. So S(n) ∈ A, A = ℕ and E = ∅. ∎

Well-ordering is equivalent (given the other axioms) to the principle of strong induction: if a property holds for n whenever it holds for all m < n, then it holds for every n. Both are used freely below.

Exponents

The exponent laws a^(m + n) = a^m · a^n, (a^m)^n = a^(mn) and (ab)^n = a^n b^n are proved by induction on n from the recursion a^S(n) = a^n · a; for the first, a^(m + S(n)) = a^S(m + n) = a^(m + n) · a = a^m · a^n · a = a^m · a^S(n). Note that the definition forces 0⁰ = 1, the convention that makes the binomial theorem and power series hold without exception.

✏️ Your Turn

(a) Prove by induction on n that a^(mn) = (a^m)^n, using the first exponent law.
(b) Show that a ≤ b and c ≤ d imply a + c ≤ b + d.
(c) Show that if ab = ac and a ≠ 0, then b = c.

Answers: (a) For n = 0 both sides are 1. If a^(mn) = (a^m)^n then a^(m · S(n)) = a^(mn + m) = a^(mn) · a^m = (a^m)^n · a^m = (a^m)^S(n). (b) Write b = a + x and d = c + y; then b + d = (a + c) + (x + y) by associativity and commutativity. (c) By totality we may assume b ≤ c, so c = b + x. Then ab = ab + ax, so ax = 0 by cancellation, and since a ≠ 0 we get x = 0 by the absence of zero divisors.

─────────────────────────────────
Lesson 3: Constructing the Integers
─────────────────────────────────

📌 Key idea of this section:

        ℤ = (ℕ × ℕ)/∼,   where (a, b) ∼ (c, d)  ⟺  a + d = b + c
        [(a, b)] + [(c, d)] = [(a + c, b + d)]
        [(a, b)] · [(c, d)] = [(ac + bd, ad + bc)]
        The pair (a, b) is a formal name for the difference a − b.

Why a construction is needed

Subtraction is only partially defined on ℕ: b − a exists if and only if a ≤ b. One could simply postulate new symbols −1, −2, …, and define the operations by cases, but verifying the ring axioms case by case is long and unenlightening. The construction below, which goes back to the late nineteenth century and is standard since Landau's Grundlagen der Analysis (1930), is cleaner. The idea is to represent the integer a − b by the pair (a, b), and to identify two pairs when they "should" represent the same difference, a − b = c − d, a condition that can be written without subtraction as a + d = b + c.

Lemma 3.1. The relation ∼ is an equivalence relation on ℕ × ℕ.

Proof. Reflexivity and symmetry are immediate. For transitivity, suppose a + d = b + c and c + f = d + e. Adding, a + d + c + f = b + c + d + e, and cancelling c + d gives a + f = b + e, that is, (a, b) ∼ (e, f). ∎

Note that transitivity uses cancellation in ℕ in an essential way. The same construction applied to a commutative monoid without cancellation (the Grothendieck construction, used to build K-groups in topology and algebraic geometry) needs a modified relation: (a, b) ∼ (c, d) if a + d + k = b + c + k for some k.

Theorem 3.2. The operations above are well defined, and (ℤ, +, ·) is a commutative ring with zero 0 = [(0, 0)] and identity 1 = [(1, 0)]. The additive inverse is −[(a, b)] = [(b, a)].

Proof. Well-definedness of addition: if (a, b) ∼ (a′, b′), so a + b′ = b + a′, then (a + c) + (b′ + d) = (b + d) + (a′ + c), so (a + c, b + d) ∼ (a′ + c, b′ + d). By symmetry the same holds in the second argument.

Well-definedness of multiplication in the first argument: suppose a + b′ = b + a′. We need (ac + bd) + (a′d + b′c) = (ad + bc) + (a′c + b′d). Group the left side as c(a + b′) + d(b + a′) and the right side as c(b + a′) + d(a + b′); both equal c(a + b′) + d(a + b′) by hypothesis. The second argument follows by commutativity of the formula.

The ring axioms reduce to identities in ℕ. For example, [(a, b)] + [(b, a)] = [(a + b, a + b)] = [(0, 0)], and associativity of multiplication reduces to an identity between two quadruples of sums of triple products, which is checked by expanding with the laws of Lesson 2. ∎

Embedding and normal forms

The map ι : ℕ → ℤ, n ↦ [(n, 0)], is injective (since (m, 0) ∼ (n, 0) means m = n) and preserves 0, 1, + and ·. Identify n with ι(n) and write −n for [(0, n)]. Every class has exactly one representative of the form (n, 0) or (0, n): given (a, b), if a ≥ b then (a, b) ∼ (a − b, 0), and otherwise (a, b) ∼ (0, b − a). Thus ℤ = ℕ ∪ (−ℕ) with ℕ ∩ (−ℕ) = {0}, which recovers the informal picture.

The rule of signs is now a computation, not a convention:

        (−1)(−1) = [(0, 1)] · [(0, 1)] = [(0·0 + 1·1, 0·1 + 1·0)] = [(1, 0)] = 1

More conceptually, in any ring x · 0 = x(0 + 0) = x·0 + x·0, so x · 0 = 0; then 0 = (−1)(1 + (−1)) = −1 + (−1)(−1), so (−1)(−1) = 1. The sign rules are forced by distributivity; the construction shows that a ring satisfying them exists.

Theorem 3.3. Define [(a, b)] ≤ [(c, d)] if a + d ≤ b + c. This is a well-defined total order making ℤ an ordered integral domain: x ≤ y implies x + z ≤ y + z, and x ≤ y with 0 ≤ z implies xz ≤ yz. The ring ℤ has no zero divisors.

Proof. Well-definedness and the order axioms follow from those of ℕ via cancellation. For zero divisors, use normal forms: up to sign both factors lie in ℕ, and ℕ has none. ∎

Universal property

Theorem 3.4. For every ring A (with identity) there is exactly one ring homomorphism ℤ → A. That is, ℤ is the initial object in the category of rings.

Proof. A homomorphism must send 1 to 1_A, hence n = 1 + ⋯ + 1 to n · 1_A and −n to −(n · 1_A); conversely this formula defines a homomorphism. ∎

The kernel of ℤ → A is an ideal nℤ with n ≥ 0; this n is the characteristic of A. This single observation links the construction of ℤ to modular arithmetic (Lesson 7) and to the classification of fields by characteristic.

✏️ Your Turn

(a) Find the normal form of [(3, 11)] · [(9, 2)] and interpret it.
(b) Verify directly from the definitions that [(a, b)] · [(1, 0)] = [(a, b)].
(c) Show that [(a, b)] = [(c, d)] if and only if [(a, b)] + [(d, c)] = 0.

Answers: (a) [(3·9 + 11·2, 3·2 + 11·9)] = [(27 + 22, 6 + 99)] = [(49, 105)] = [(0, 56)] = −56, consistent with (3 − 11)(9 − 2) = (−8)(7) = −56. (b) [(a·1 + b·0, a·0 + b·1)] = [(a, b)]. (c) The sum is [(a + d, b + c)], which equals [(0, 0)] exactly when a + d = b + c, the definition of (a, b) ∼ (c, d).

─────────────────────────────────
Lesson 4: The Rationals and Ordered Fields
─────────────────────────────────

📌 Key idea of this section:

        ℚ = (ℤ × (ℤ ∖ {0}))/∼,   where (a, b) ∼ (c, d)  ⟺  ad = bc
        An ordered field is a field with a set P of positives closed under + and ·
        such that each x is exactly one of: x ∈ P, x = 0, −x ∈ P.
        Every ordered field contains a unique copy of ℚ.

The field of fractions

The construction of ℚ from ℤ follows the pattern of Lesson 3 with multiplication in place of addition. A pair (a, b) with b ≠ 0 is a formal name for a/b, and a/b = c/d is encoded by ad = bc. Transitivity of ∼ now uses the absence of zero divisors: if ad = bc and cf = de then adf = bcf = bde, so d(af − be) = 0, and since d ≠ 0 we get af = be.

Operations are defined by the familiar formulas:

        a/b + c/d = (ad + bc)/(bd),        (a/b)(c/d) = (ac)/(bd)

and well-definedness is a direct verification (bd ≠ 0 again uses the absence of zero divisors). Every nonzero a/b has inverse b/a. The construction works verbatim for any integral domain D, producing its field of fractions Frac(D); applied to k[x] it yields the field k(x) of rational functions. Its universal property: every injective ring homomorphism from D to a field K extends uniquely to a homomorphism Frac(D) → K.

Ordered fields

Definition 4.1. An ordered field is a field F together with a subset P ⊆ F (the positive elements) such that P is closed under addition and multiplication, and for each x ∈ F exactly one of x ∈ P, x = 0, −x ∈ P holds. One writes x < y for y − x ∈ P.

Theorem 4.2. In any ordered field:

  1. x² > 0 for every x ≠ 0; in particular 1 = 1² > 0.
  2. The characteristic is 0, and the map ℚ → F is an order-preserving embedding.
  3. If 0 < a < b then 0 < 1/b < 1/a.
  4. |x + y| ≤ |x| + |y|, where |x| = max(x, −x).

Proof. (1) If x ∈ P then x² ∈ P; if −x ∈ P then x² = (−x)² ∈ P. (2) The sum 1 + 1 + ⋯ + 1 of n ones lies in P and so is nonzero; hence ℤ → F is injective and extends to ℚ → F. If m/n > 0 with n > 0 then m > 0, so m · 1_F and n · 1_F are positive, as is the inverse of the latter by (3). (3) If a > 0 then 1/a > 0, since otherwise a · (1/a) = 1 would be ≤ 0. Then 1/a − 1/b = (b − a)/(ab) > 0. (4) Each of x + y and −(x + y) is ≤ |x| + |y|. ∎

Corollary 4.3. The field ℂ admits no ordering, since i² = −1 would have to be positive while −1 = −(1²) is negative. More generally, a field can be ordered if and only if −1 is not a sum of squares (the Artin–Schreier theorem, 1927).

The rational numbers carry exactly one ordering: positivity of m/n with n > 0 is forced to mean m > 0 by Theorem 4.2. The same is true of ℝ, where the positive elements must be precisely the nonzero squares; but a field such as ℚ(√2) has two orderings, one with √2 > 0 and the other, obtained by the automorphism √2 ↦ −√2, with √2 < 0.

Archimedean and non-Archimedean fields

Definition 4.4. An ordered field F is Archimedean if for every x ∈ F there is n ∈ ℕ with n > x.

The field ℚ is Archimedean: if x = a/b with b > 0, take n = |a| + 1; since b ≥ 1 we have n > |a| ≥ |a|/b ≥ a/b. The field ℚ(t) of rational functions, ordered by declaring a nonzero f/g positive when the leading coefficients of f and g have the same sign, is non-Archimedean: t − n has positive leading coefficient for every n, so t > n for all n ∈ ℕ, and 1/t is a positive "infinitesimal" smaller than every 1/n. Fields of this kind underlie non-standard analysis and the Levi-Civita and Hahn series fields.

Density and the gaps in ℚ

Theorem 4.5. In an Archimedean ordered field, between any two elements x < y there is a rational number.

Proof. Choose n ∈ ℕ with n > 1/(y − x), so ny − nx > 1. Let m be the least integer with m > nx (it exists by the Archimedean property and well ordering). Then m − 1 ≤ nx, so m ≤ nx + 1 < ny, and nx < m < ny gives x < m/n < y. ∎

Density does not mean completeness. The set {q ∈ ℚ : q < 0 or q² < 2} is nonempty and bounded above, but has no least upper bound in ℚ: if s were one, then s² = 2 is impossible (√2 is irrational, Lesson 6), s² < 2 allows s to be increased slightly, and s² > 2 allows s to be decreased. Repairing this defect is the purpose of Lesson 9.

✏️ Your Turn

(a) Show that the formula (a, b) ↦ (a + b)/b gives a well-defined function on ℚ, and identify it.
(b) Find the two orderings of ℚ(√2) in which √2 − 1 is positive, or show that there is only one.
(c) In ℚ(t) with the ordering above, decide the sign of (t² − 1000t)/(5 − t).

Answers: (a) If ad = bc then (a + b)d = ad + bd = bc + bd = b(c + d), so (a + b)/b = (c + d)/d; the map is x ↦ x + 1. (b) There is only one: under the ordering with √2 < 0, the element √2 − 1 is a sum of two negatives and is negative, while under the usual ordering √2 − 1 > 0 because 2 > 1 implies √2 > 1. (c) The numerator has leading coefficient +1 and the denominator −1, so the quotient is negative (it behaves like −t for large t).

─────────────────────────────────
Lesson 5: The Division Algorithm and Euclidean Domains
─────────────────────────────────

📌 Key idea of this section:

        For a ∈ ℤ and b > 0 there are unique q, r ∈ ℤ with a = qb + r and 0 ≤ r < b.
        Iterating it computes gcd(a, b) and integers x, y with ax + by = gcd(a, b).
        A Euclidean domain is an integral domain with such a division; every one is a PID and a UFD.

The division algorithm

Theorem 5.1 (Division with remainder). Let a, b ∈ ℤ with b > 0. There exist unique integers q and r such that a = qb + r and 0 ≤ r < b.

Proof. Existence: the set E = {a − kb : k ∈ ℤ, a − kb ≥ 0} is nonempty (take k = −|a|, which gives a + |a|b ≥ a + |a| ≥ 0), so by well ordering it has a least element r = a − qb ≥ 0. If r ≥ b then r − b = a − (q + 1)b ∈ E is smaller, a contradiction; so 0 ≤ r < b. Uniqueness: if qb + r = q′b + r′ with both remainders in [0, b), then b|q − q′| = |r′ − r| < b, which forces q = q′ and then r = r′. ∎

The quotient is q = ⌊a/b⌋. For negative a the remainder is still nonnegative: −47 = (−8)·6 + 1. Many programming languages instead truncate the quotient toward zero, giving −47 = (−7)·6 − 5; the C99 standard fixed this truncating convention for the operators / and %, which is why −47 % 6 evaluates to −5 in C, Java and JavaScript but to 1 in Python, whose % follows the floor convention.

Greatest common divisors

For integers a, b not both zero, gcd(a, b) is the largest integer dividing both. The key observation is that if a = qb + r then the common divisors of (a, b) and of (b, r) coincide, because any common divisor of two of a, b, r divides the third. Hence gcd(a, b) = gcd(b, r), and repeating the division until the remainder vanishes yields the gcd as the last nonzero remainder. This is Euclid's algorithm (Elements, Book VII, Propositions 1–2, c. 300 BC).

Theorem 5.2 (Bézout's identity). For a, b ∈ ℤ not both zero, there are x, y ∈ ℤ with ax + by = gcd(a, b). Moreover gcd(a, b) is the least positive element of the set aℤ + bℤ, and aℤ + bℤ = gcd(a, b)ℤ.

Proof. Let d be the least positive element of I = {ax + by : x, y ∈ ℤ}, say d = ax + by. Divide a by d: a = qd + r with 0 ≤ r < d. Then r = a − q(ax + by) ∈ I, and minimality forces r = 0, so d divides a; likewise d divides b. Any common divisor of a and b divides every element of I, in particular d. Thus d = gcd(a, b). Since I is closed under subtraction and integer multiples and contains d, it equals dℤ. ∎

Worked Example 5.3 — gcd(1071, 462) with Bézout coefficients. The divisions are:

        1071 = 2 · 462 + 147
         462 = 3 · 147 + 21
         147 = 7 · 21  + 0

so gcd(1071, 462) = 21. Back-substitution gives:

        21 = 462 − 3 · 147
           = 462 − 3 · (1071 − 2 · 462)
           = 7 · 462 − 3 · 1071

and indeed 7 · 462 − 3 · 1071 = 3234 − 3213 = 21. In practice one runs the extended Euclidean algorithm forward, maintaining the invariant rᵢ = 1071·xᵢ + 462·yᵢ:

          i     rᵢ     qᵢ     xᵢ     yᵢ
          0   1071            1      0
          1    462     2      0      1
          2    147     3      1     −2
          3     21     7     −3      7
          4      0

Each new row is the row two above minus qᵢ times the row immediately above, where qᵢ is the quotient in the division of rᵢ₋₁ by rᵢ. The last nonzero remainder 21 appears with coefficients (−3, 7).

The cost of Euclid's algorithm

Theorem 5.4 (Lamé, 1844). If Euclid's algorithm applied to a > b > 0 takes n division steps, then b ≥ F(n+1) and a ≥ F(n+2), where F(1) = F(2) = 1 and F(k+1) = F(k) + F(k−1). Consequently the number of steps is at most five times the number of decimal digits of b.

Proof. Let r₀ = a, r₁ = b, and let r₂, r₃, … be the successive remainders, with rₙ ≠ 0 and rₙ₊₁ = 0 after n steps. Then rₙ ≥ 1 = F(2), and rₙ₋₁ ≥ 2 = F(3), because rₙ divides rₙ₋₁ and rₙ < rₙ₋₁. Each earlier step has quotient at least 1, so rᵢ₋₁ ≥ rᵢ + rᵢ₊₁, and by downward induction rᵢ ≥ F(n + 2 − i). In particular b = r₁ ≥ F(n + 1) and a = r₀ ≥ F(n + 2). Since F(k) ≥ φ^(k−2) with φ = (1 + √5)/2, we get b ≥ φ^(n−1), so n − 1 ≤ log₁₀ b / log₁₀ φ. If b has d decimal digits then log₁₀ b < d, and log₁₀ φ ≈ 0.20899 > 1/5, so n − 1 < 5d and n ≤ 5d. ∎

Consecutive Fibonacci numbers are the worst case: gcd(13, 8) needs five divisions (13 = 1·8 + 5, 8 = 1·5 + 3, 5 = 1·3 + 2, 3 = 1·2 + 1, 2 = 2·1). Lamé's theorem is often cited as the first result of computational complexity theory: it shows that Euclid's algorithm runs in time polynomial in the number of digits of its input, in fact O(n²) bit operations for n-bit inputs with schoolbook division.

Euclidean domains

Definition 5.5. A Euclidean domain is an integral domain R with a function N : R ∖ {0} → ℕ such that for all a, b ∈ R with b ≠ 0 there are q, r ∈ R with a = qb + r and either r = 0 or N(r) < N(b).

The three classical examples are the following.

  1. ℤ with N(n) = |n|.
  2. The polynomial ring k[x] over a field k, with N(f) = deg f. For example, x³ + 2x + 5 = x · (x² + 1) + (x + 5), and deg(x + 5) = 1 < 2.
  3. The Gaussian integers ℤ[i] = {a + bi : a, b ∈ ℤ}, with N(a + bi) = a² + b².

For ℤ[i], to divide α by β ≠ 0 compute α/β exactly in ℚ(i) and round each coordinate to a nearest integer to get q. The error α/β − q has both coordinates of absolute value at most 1/2, so N(α/β − q) ≤ 1/4 + 1/4 = 1/2, and since N is multiplicative, r = α − qβ satisfies N(r) ≤ N(β)/2 < N(β). For instance, with α = 8 + 9i and β = 2 − i,

        α/β = (8 + 9i)(2 + i)/5 = (7 + 26i)/5 = 1.4 + 5.2i,   so q = 1 + 5i
        r = (8 + 9i) − (1 + 5i)(2 − i) = (8 + 9i) − (7 + 9i) = 1,   N(r) = 1 < 5 = N(β)

so 8 + 9i and 2 − i are coprime Gaussian integers.

Theorem 5.6. Every Euclidean domain is a principal ideal domain (PID).

Proof. Let I ≠ 0 be an ideal and choose b ∈ I ∖ {0} with N(b) minimal. For a ∈ I write a = qb + r; then r = a − qb ∈ I, and N(r) < N(b) is impossible, so r = 0 and a ∈ (b). Hence I = (b). ∎

Every PID is a unique factorisation domain (UFD), so the chain ED ⇒ PID ⇒ UFD holds; neither implication reverses. The ring ℤ[(1 + √−19)/2] is a PID that is not Euclidean for any function N (Motzkin, 1949), and ℤ[x] is a UFD that is not a PID, since the ideal (2, x) is not principal.

✏️ Your Turn

(a) Use the extended Euclidean algorithm to find gcd(240, 46) and integers x, y with 240x + 46y = gcd(240, 46).
(b) Find q and r for the division of x⁴ + 1 by x² + x + 1 in ℚ[x].
(c) Divide 11 + 7i by 3 + i in ℤ[i], giving q and r with r = 0 or N(r) < N(3 + i).

Answers: (a) 240 = 5·46 + 10, 46 = 4·10 + 6, 10 = 1·6 + 4, 6 = 1·4 + 2, 4 = 2·2, so the gcd is 2. Back-substituting: 2 = 6 − 4 = 6 − (10 − 6) = 2·6 − 10 = 2(46 − 4·10) − 10 = 2·46 − 9·10 = 2·46 − 9(240 − 5·46) = 47·46 − 9·240; check 2162 − 2160 = 2. So x = −9, y = 47. (b) x⁴ + 1 = (x² − x)(x² + x + 1) + (x + 1); check: (x² − x)(x² + x + 1) = x⁴ − x, and adding x + 1 gives x⁴ + 1. So q = x² − x and r = x + 1. (c) (11 + 7i)/(3 + i) = (11 + 7i)(3 − i)/10 = (40 + 10i)/10 = 4 + i exactly, so q = 4 + i and r = 0: indeed (4 + i)(3 + i) = 12 + 4i + 3i − 1 = 11 + 7i.

─────────────────────────────────
Lesson 6: The Fundamental Theorem of Arithmetic
─────────────────────────────────

📌 Key idea of this section:

        Every integer n ≥ 2 is a product of primes, uniquely up to order:
        n = p₁^e₁ · p₂^e₂ ⋯ pₖ^eₖ.
        The engine is Euclid's lemma: if p is prime and p | ab, then p | a or p | b.
        Unique factorisation can fail: in ℤ[√−5], 6 = 2 · 3 = (1 + √−5)(1 − √−5).

Irreducible versus prime

In an integral domain R, a nonzero non-unit p is irreducible if p = ab forces a or b to be a unit, and prime if p | ab forces p | a or p | b. Every prime is irreducible: if p = ab then p divides a or b, say a = pc, so p = pcb and cb = 1. In ℤ the usual definition of a prime number (no divisors other than ±1 and ±p) is irreducibility; that it coincides with primality is the content of the next lemma.

Lemma 6.1 (Euclid's lemma, Elements VII.30). If p ∈ ℤ is irreducible and p | ab, then p | a or p | b.

Proof. Suppose p ∤ a. The only positive divisors of p are 1 and p, so gcd(p, a) = 1, and by Bézout px + ay = 1 for some x, y. Multiplying by b, pbx + aby = b; p divides both terms on the left, hence p | b. ∎

The same proof works in any PID, so in a PID irreducibles are prime.

Theorem 6.2 (Fundamental theorem of arithmetic). Every integer n ≥ 2 can be written as a product of primes, and the factorisation is unique up to the order of the factors.

Proof. Existence by strong induction: if n is prime we are done; otherwise n = ab with 1 < a, b < n, and both a and b are products of primes by the induction hypothesis. Uniqueness: suppose p₁ ⋯ pᵣ = q₁ ⋯ qₛ with all factors prime. Then p₁ divides the product of the q's, and by Euclid's lemma (extended to several factors by induction) p₁ | qⱼ for some j, so p₁ = qⱼ. Cancel and induct on r. ∎

The theorem was used implicitly from antiquity, but its first clear statement and proof appear in Gauss's Disquisitiones Arithmeticae (1801), Article 16. Gauss recognised that uniqueness is not self-evident; the examples below show why.

Valuations: the p-adic order

For a prime p and nonzero integer n, the p-adic valuation vₚ(n) is the exponent of p in the factorisation of n; it extends to nonzero rationals by vₚ(a/b) = vₚ(a) − vₚ(b). The fundamental theorem says that the map n ↦ (vₚ(n))ₚ is an isomorphism of the multiplicative monoid of positive integers onto the monoid of finitely supported sequences of natural numbers indexed by the primes. In these coordinates

        vₚ(ab) = vₚ(a) + vₚ(b)
        vₚ(gcd(a, b)) = min(vₚ(a), vₚ(b)),     vₚ(lcm(a, b)) = max(vₚ(a), vₚ(b))
        vₚ(a + b) ≥ min(vₚ(a), vₚ(b))

and gcd(a, b) · lcm(a, b) = ab for positive a, b because min + max = sum. The last inequality is the starting point of p-adic analysis: |x|ₚ = p^(−vₚ(x)) is an absolute value on ℚ satisfying the strong triangle inequality |x + y|ₚ ≤ max(|x|ₚ, |y|ₚ).

Theorem 6.3 (Legendre's formula, 1808). For a prime p and n ≥ 1,

        vₚ(n!) = ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ⋯ = (n − sₚ(n))/(p − 1),

where sₚ(n) is the sum of the base-p digits of n.

Proof. vₚ(n!) = Σ (k = 1 to n) vₚ(k). The number of k ≤ n with pʲ | k is ⌊n/pʲ⌋, and each k is counted once for every j with 1 ≤ j ≤ vₚ(k). For the second expression write n = Σ dᵢ pⁱ; then ⌊n/pʲ⌋ = Σ (i ≥ j) dᵢ p^(i−j), and summing over j ≥ 1 gives Σ dᵢ (pⁱ − 1)/(p − 1) = (n − sₚ(n))/(p − 1). ∎

For example v₂(100!) = 50 + 25 + 12 + 6 + 3 + 1 = 97, and 100 = 1100100₂ has digit sum 3, so (100 − 3)/1 = 97 as well. The number of trailing zeros of 100! is v₅(100!) = 20 + 4 = 24, since v₂(100!) ≥ v₅(100!).

Two classical consequences

Theorem 6.4 (Euclid, Elements IX.20). There are infinitely many primes.

Proof. Given primes p₁, …, pₖ, any prime factor of p₁p₂⋯pₖ + 1 differs from every pᵢ, since pᵢ divides the product and would then divide 1. ∎

Theorem 6.5. If n ≥ 1 is not a perfect k-th power, then the real k-th root of n is irrational.

Proof. If n^(1/k) = a/b with positive integers a, b then n bᵏ = aᵏ, so vₚ(n) + k · vₚ(b) = k · vₚ(a) for every prime p; hence k | vₚ(n) for all p, and n is a k-th power. ∎

Failure of unique factorisation

In R = ℤ[√−5] = {a + b√−5 : a, b ∈ ℤ}, the norm N(a + b√−5) = a² + 5b² is multiplicative. We have

        6 = 2 · 3 = (1 + √−5)(1 − √−5),   with norms  N(2) = 4,  N(3) = 9,  N(1 ± √−5) = 6

A proper factor of any of these four elements would have norm 2 or 3, but a² + 5b² = 2 and a² + 5b² = 3 have no integer solutions; so all four are irreducible. They are not associates (the only units are ±1). Thus 6 has two essentially different factorisations into irreducibles, and 2 is irreducible but not prime: it divides (1 + √−5)(1 − √−5) = 6 but neither factor, since (1 ± √−5)/2 ∉ R. Kummer's attempt to rescue unique factorisation in rings of cyclotomic integers (1840s), motivated by Fermat's Last Theorem, led to his ideal numbers, which Dedekind reformulated as ideals: in the ring of integers of any number field, every nonzero ideal factors uniquely into prime ideals. Here (6) = 𝔭² 𝔮 𝔮′ with 𝔭 = (2, 1 + √−5), 𝔮 = (3, 1 + √−5) and 𝔮′ = (3, 1 − √−5). The failure of unique factorisation of elements is measured by the ideal class group, which for ℤ[√−5] has order 2.

✏️ Your Turn

(a) Compute v₃(200!) by Legendre's formula, and check it with the digit-sum formula.
(b) Find gcd(2⁴·3²·7, 2²·3⁵·5) and the corresponding lcm, and verify gcd · lcm = product.
(c) Show that 3 is irreducible but not prime in ℤ[√−5].

Answers: (a) ⌊200/3⌋ + ⌊200/9⌋ + ⌊200/27⌋ + ⌊200/81⌋ = 66 + 22 + 7 + 2 = 97. In base 3, 200 = 21102₃ (2·81 + 1·27 + 1·9 + 0·3 + 2 = 200), with digit sum 6, and (200 − 6)/2 = 97. (b) gcd = 2²·3² = 36 and lcm = 2⁴·3⁵·5·7 = 136080. The numbers are 1008 and 4860, and 1008 · 4860 = 4898880 = 36 · 136080. (c) Irreducible: a proper factor would have norm 3, impossible since a² + 5b² = 3 has no solution. Not prime: 3 divides 6 = (1 + √−5)(1 − √−5) but (1 ± √−5)/3 ∉ ℤ[√−5].

─────────────────────────────────
Lesson 7: Modular Arithmetic and the Ring ℤ/nℤ
─────────────────────────────────

📌 Key idea of this section:

        a ≡ b (mod n)  ⟺  n | a − b.   ℤ/nℤ = ℤ/(n) is a commutative ring.
        (ℤ/nℤ)^× = {[a] : gcd(a, n) = 1} has φ(n) elements, and a^φ(n) ≡ 1 when gcd(a, n) = 1.
        If gcd(m, n) = 1 then ℤ/mnℤ ≅ ℤ/mℤ × ℤ/nℤ (Chinese remainder theorem).

The quotient ring

Congruence modulo n ≥ 1 was introduced by Gauss in the Disquisitiones (1801), along with the notation ≡. It is the equivalence relation on ℤ whose classes are the cosets a + nℤ of the ideal nℤ; the set of classes is the quotient ring ℤ/nℤ. Operations on classes are well defined because nℤ is an ideal: if a ≡ a′ and b ≡ b′ then a + b ≡ a′ + b′ and

        ab − a′b′ = a(b − b′) + b′(a − a′) ≡ 0 (mod n).

By the division algorithm each class contains exactly one of 0, 1, …, n − 1, so ℤ/nℤ has n elements. The quotient map ℤ → ℤ/nℤ is the unique ring homomorphism of Theorem 3.4, and its kernel is nℤ.

Units, zero divisors and fields

Theorem 7.1. In ℤ/nℤ the class [a] is a unit if and only if gcd(a, n) = 1. Every nonzero class is either a unit or a zero divisor. Consequently ℤ/nℤ is a field if and only if n is prime.

Proof. If gcd(a, n) = 1, Bézout gives ax + ny = 1, so [a][x] = [1]. If d = gcd(a, n) > 1 and [a] ≠ 0, then [a] · [n/d] = [a/d] · [n] = 0 with [n/d] ≠ 0, so [a] is a zero divisor, and zero divisors are never units. If n = p is prime, every a with p ∤ a satisfies gcd(a, p) = 1. If n = rs with 1 < r, s < n, then [r][s] = 0 exhibits zero divisors. ∎

Worked Example 7.2 — the inverse of 17 modulo 43. The Euclidean algorithm gives 43 = 2·17 + 9, 17 = 1·9 + 8, 9 = 1·8 + 1. Back-substituting,

        1 = 9 − 8 = 9 − (17 − 9) = 2·9 − 17 = 2(43 − 2·17) − 17 = 2·43 − 5·17

so 17⁻¹ ≡ −5 ≡ 38 (mod 43). Check: 17 · 38 = 646 = 15 · 43 + 1.

Euler's theorem

The unit group (ℤ/nℤ)^× has order φ(n), Euler's totient: the number of 1 ≤ a ≤ n with gcd(a, n) = 1.

Theorem 7.3 (Euler, 1763; Fermat, 1640). If gcd(a, n) = 1 then a^φ(n) ≡ 1 (mod n). In particular, for p prime and p ∤ a, a^(p−1) ≡ 1 (mod p), and a^p ≡ a (mod p) for every a.

Proof. By Lagrange's theorem the order of [a] in the finite group (ℤ/nℤ)^× divides the order φ(n) of the group. ∎

A direct proof avoiding group theory: multiplication by [a] permutes the φ(n) units, so the product of all units equals a^φ(n) times itself, and cancelling the (invertible) product gives the result. The multiplicative order ordₙ(a) is the least k ≥ 1 with aᵏ ≡ 1; it divides φ(n), and a is a primitive root modulo n when ordₙ(a) = φ(n). Primitive roots exist exactly for n = 1, 2, 4, pᵏ and 2pᵏ with p an odd prime (Gauss); in particular (ℤ/pℤ)^× is cyclic.

Theorem 7.4 (Chinese remainder theorem). If m and n are coprime, the map ℤ/mnℤ → ℤ/mℤ × ℤ/nℤ, [x] ↦ ([x]ₘ, [x]ₙ), is a ring isomorphism.

Proof. The map is a well-defined homomorphism. If x ≡ 0 modulo both m and n then mn | x since gcd(m, n) = 1, so the map is injective, and both sides have mn elements. Explicitly, with mu + nv = 1, the solution of x ≡ a (mod m), x ≡ b (mod n) is x = a·nv + b·mu. ∎

The isomorphism restricts to the unit groups, giving the multiplicativity φ(mn) = φ(m)φ(n) for coprime m, n, and hence

        φ(n) = n · ∏ (p | n) (1 − 1/p).

For instance φ(1000) = 1000 · (1/2) · (4/5) = 400 and φ(360) = 360 · (1/2)(2/3)(4/5) = 96. The theorem is named after a problem in the Sunzi Suanjing (c. 3rd–5th century AD): a number leaves remainders 2, 3, 2 on division by 3, 5, 7; the least such number is 23.

Fast exponentiation

To compute aᵉ mod n, write e in binary and square repeatedly; this uses at most 2⌊log₂ e⌋ multiplications modulo n. For 5¹¹⁷ mod 23, with 117 = 1110101₂ = 64 + 32 + 16 + 4 + 1:

        5¹ ≡ 5,  5² ≡ 2,  5⁴ ≡ 4,  5⁸ ≡ 16,  5¹⁶ ≡ 3,  5³² ≡ 9,  5⁶⁴ ≡ 12   (mod 23)
        5¹¹⁷ ≡ 12 · 9 · 3 · 4 · 5 ≡ 16 · 3 · 4 · 5 ≡ 2 · 4 · 5 ≡ 40 ≡ 17   (mod 23)

Fermat's theorem gives a check: 117 ≡ 7 (mod 22), and 5⁷ = 5⁴ · 5² · 5 ≡ 4 · 2 · 5 = 40 ≡ 17.

Fast exponentiation and Euler's theorem together make the RSA cryptosystem (Rivest, Shamir and Adleman, 1977) work. Choose primes p, q, let n = pq, and choose e coprime to φ(n) with inverse d modulo φ(n). Then (mᵉ)ᵈ ≡ m (mod n) for every m. In the textbook example p = 61, q = 53, n = 3233, φ(n) = 3120, e = 17 and d = 2753 (since 17 · 2753 = 46801 = 15 · 3120 + 1); the message m = 65 encrypts to 65¹⁷ mod 3233 = 2790, and 2790²⁷⁵³ mod 3233 = 65.

Theorem 7.5 (Wilson). An integer p ≥ 2 is prime if and only if (p − 1)! ≡ −1 (mod p).

Proof. If p is prime, in the field ℤ/pℤ each element of {1, …, p − 1} pairs with its inverse; only ±1 are self-inverse (x² = 1 means (x − 1)(x + 1) = 0), so the product is 1 · (−1) = −1. If p = ab is composite with 1 < a < p, then a divides (p − 1)!, so (p − 1)! ≡ 0 ≢ −1 (mod a), and hence (p − 1)! ≢ −1 (mod p). ∎

✏️ Your Turn

(a) Find the inverse of 11 modulo 60.
(b) Solve x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7).
(c) Compute 3¹⁰⁰ mod 7 and 2¹⁰⁰⁰ mod 13.

Answers: (a) 60 = 5·11 + 5, 11 = 2·5 + 1, so 1 = 11 − 2·5 = 11 − 2(60 − 5·11) = 11·11 − 2·60. Hence 11⁻¹ ≡ 11 (mod 60); check 121 = 2·60 + 1. (b) x ≡ 2 (mod 21), since 2 satisfies both the conditions modulo 3 and 7, so x ∈ {2, 23, 44, …}; 23 ≡ 3 (mod 5). The solution is x ≡ 23 (mod 105). (c) 3⁶ ≡ 1 (mod 7) and 100 = 16·6 + 4, so 3¹⁰⁰ ≡ 3⁴ = 81 ≡ 4. 2¹² ≡ 1 (mod 13) and 1000 = 83·12 + 4, so 2¹⁰⁰⁰ ≡ 2⁴ = 16 ≡ 3.

─────────────────────────────────
Lesson 8: Positional Numeral Systems
─────────────────────────────────

📌 Key idea of this section:

        For every base b ≥ 2, each n ≥ 1 has a unique representation
        n = dₖbᵏ + ⋯ + d₁b + d₀  with digits 0 ≤ dᵢ < b and dₖ ≠ 0, where k = ⌊log_b n⌋.
        A rational number has an eventually periodic base-b expansion,
        and for gcd(q, b) = 1 the period of 1/q is ord_q(b).

History in brief

Positional notation is the single most consequential invention in the history of computation. Babylonian scribes used a sexagesimal place-value system from about 2000 BC, without a true zero until a placeholder sign appeared in the late period; the Maya used a vigesimal system with zero. The decimal system with a zero digit developed in India: Brahmagupta's Brāhmasphuṭasiddhānta (628 AD) gives rules for arithmetic with zero and negative numbers. Al-Khwārizmī's treatise on Hindu reckoning (c. 825) carried the system to the Islamic world (his name gives us the word algorithm), and Fibonacci's Liber Abaci (1202) introduced it to Europe. Leibniz studied binary arithmetic in detail in his Explication de l'arithmétique binaire (1703).

Existence and uniqueness

Theorem 8.1. Let b ≥ 2. Every integer n ≥ 1 has exactly one representation n = Σ (i = 0 to k) dᵢ bⁱ with dᵢ ∈ {0, 1, …, b − 1} and dₖ ≠ 0. Moreover bᵏ ≤ n < bᵏ⁺¹, so the number of digits is ⌊log_b n⌋ + 1.

Proof. Existence by strong induction: if n < b, take k = 0 and d₀ = n. Otherwise divide: n = qb + d₀ with 0 ≤ d₀ < b and 1 ≤ q < n; represent q by induction and shift. Uniqueness: reducing any representation modulo b gives d₀ ≡ n, so d₀ is the remainder of n on division by b and is determined; then (n − d₀)/b has a representation with digits d₁, d₂, …, which is unique by induction. The bounds: n ≥ dₖbᵏ ≥ bᵏ and n ≤ (b − 1)(1 + b + ⋯ + bᵏ) = bᵏ⁺¹ − 1. ∎

The proof is itself the conversion algorithm: the digits of n in base b are the successive remainders of repeated division by b, read in reverse. Conversely, the value of a digit string is computed by Horner's scheme, n = (⋯((dₖ b + dₖ₋₁) b + dₖ₋₂) b + ⋯) b + d₀, which uses k multiplications and k additions.

Worked Example 8.2 — 2026 in several bases. Repeated division by 2 gives remainders 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, so

        2026 = 11111101010₂ = 3752₈ = 7EA₁₆ = 5623₇

Octal and hexadecimal digits are read off by grouping binary digits in threes and fours from the right: 011 111 101 010 and 0111 1110 1010. As a check on the base-7 form, Horner's scheme gives ((5·7 + 6)·7 + 2)·7 + 3 = (41·7 + 2)·7 + 3 = 289·7 + 3 = 2026.

Divisibility tests

Since b ≡ 1 (mod b − 1), every power bⁱ ≡ 1, so n ≡ d₀ + d₁ + ⋯ + dₖ (mod b − 1); since b ≡ −1 (mod b + 1), n ≡ d₀ − d₁ + d₂ − ⋯ (mod b + 1). In decimal these are the tests for 9 (and 3) and for 11. More generally n ≡ d₀ (mod b), and the last j digits determine n modulo bʲ, which gives the tests for 2, 4, 5, 8 and 10ʲ.

Expansions of real numbers

Every real x ∈ [0, 1) has a base-b expansion x = Σ (i ≥ 1) dᵢ b⁻ⁱ, produced by the digit map dᵢ = ⌊b xᵢ⌋, xᵢ₊₁ = b xᵢ − dᵢ, starting from x₁ = x. The expansion is unique except for numbers of the form m/bʲ, which have two: one ending in repeated 0s and one ending in repeated (b − 1)s. Thus 0.999… = 1 in decimal and 0.0111…₂ = 0.1₂ = 1/2. The identity 0.999… = 1 is not a paradox but a theorem about limits: the partial sums 1 − 10⁻ⁿ converge to 1.

Theorem 8.3. Let x = a/q with 0 < a < q and gcd(a, q) = 1.

  1. The base-b expansion of x terminates if and only if every prime factor of q divides b.
  2. If gcd(q, b) = 1, the expansion is purely periodic with period exactly ord_q(b).
  3. In general, writing q = q₁q₂ where every prime of q₁ divides b and gcd(q₂, b) = 1, the expansion has a pre-period of length min{j : q₁ | bʲ} followed by a period of length ord_q₂(b).

Proof of (2). The digit map applied to a/q produces xᵢ₊₁ = rᵢ/q with rᵢ = a bⁱ mod q, and each digit is determined by the current remainder, so the expansion is periodic with period p whenever a bᵖ ≡ a (mod q), that is, whenever bᵖ ≡ 1 (mod q), since a is invertible modulo q. Conversely, if the digits repeat with period p, then bᵖx − x is an integer, so q | a(bᵖ − 1) and bᵖ ≡ 1 (mod q). The least such p is ord_q(b). Part (1) is the case where x · bʲ is an integer for some j, and (3) combines the two. ∎

Examples: 1/7 = 0.(142857) with period ord₇(10) = 6; 1/13 has period 6; 1/37 = 0.(027) has period 3 because 999 = 27 · 37; 1/17 has period 16, the maximum possible, so 10 is a primitive root modulo 17. Whether 10 is a primitive root modulo infinitely many primes (so that infinitely many 1/p have the maximal period p − 1) is a special case of Artin's primitive root conjecture (1927), which remains open, although Hooley proved it in 1967 assuming the generalised Riemann hypothesis.

Non-standard bases

Two variants are important in computing and in theory.

  1. Balanced ternary uses digits −1, 0, 1 (written T, 0, 1). Every integer, positive or negative, has a unique representation, and negation is just digit-wise sign change. For example 25 = 27 − 3 + 1 = 10T1 and 2026 = 10T10001, since 2187 − 243 + 81 + 1 = 2026. The Soviet Setun computer (Moscow State University, 1958) used balanced ternary.
  2. Base −2 with digits 0 and 1 also represents every integer uniquely without a sign: 6 = 16 − 8 − 2 = 11010 in base −2.

Two's complement, the representation of signed integers in essentially all modern processors, can be viewed as arithmetic in ℤ/2ʷℤ for word size w with the representatives −2ʷ⁻¹, …, 2ʷ⁻¹ − 1; the bit pattern of −x is that of 2ʷ − x. Integer overflow is therefore not an error of the hardware but simply arithmetic modulo 2ʷ.

✏️ Your Turn

(a) Convert 0.6875 to binary and 0.1 to binary, and say which terminates.
(b) Determine the pre-period and period of the decimal expansion of 1/12 and of 1/56.
(c) Use the alternating digit sum to decide whether 918082 is divisible by 11.

Answers: (a) 0.6875 = 11/16 = 0.1011₂ (doubling gives 1.375, 0.75, 1.5, 1.0, so the digits are 1, 0, 1, 1). 0.1 = 1/10 has the prime factor 5 in its denominator, which does not divide 2, so it does not terminate: 0.1 = 0.0(0011)₂ = 0.000110011001100…₂. (b) 1/12 = 0.08(3): q₁ = 4 needs j = 2 and q₂ = 3 has ord₃(10) = 1, so pre-period 2 and period 1. 1/56 = 0.017(857142): q₁ = 8 needs j = 3, q₂ = 7 has ord₇(10) = 6, so pre-period 3 and period 6. (c) Reading from the right, 2 − 8 + 0 − 8 + 1 − 9 = −22, which is divisible by 11, so 11 | 918082 (indeed 918082 = 11 · 83462).

─────────────────────────────────
Lesson 9: The Real Numbers
─────────────────────────────────

📌 Key idea of this section:

        A complete ordered field is an ordered field in which every nonempty set
        that is bounded above has a least upper bound.
        It exists (Dedekind cuts, or Cauchy sequences of rationals modulo null sequences)
        and is unique up to a unique isomorphism. That field is ℝ.

The problem

Lesson 4 ended with a bounded set of rationals that has no rational supremum. The arithmetic of ℚ is therefore insufficient for analysis: the intermediate value theorem fails for x ↦ x² − 2 on [1, 2] if only rational values are allowed. In 1872 three constructions of the real numbers appeared independently: Dedekind's cuts (Stetigkeit und irrationale Zahlen), Cantor's fundamental sequences, and Heine's account of Cantor's approach; Charles Méray had published a Cauchy-sequence construction in 1869. Weierstrass had lectured on a related approach in Berlin in the 1860s.

Dedekind cuts

Definition 9.1. A cut is a subset A ⊂ ℚ such that A ≠ ∅, A ≠ ℚ, A is downward closed (if a ∈ A and q < a then q ∈ A), and A has no greatest element. ℝ is the set of all cuts, ordered by inclusion.

Each rational q determines the cut q* = {r ∈ ℚ : r < q}. The cut √2* = {q ∈ ℚ : q < 0 or q² < 2} is not of this form, and represents √2. That it has no greatest element follows from the identity below: for positive rational a with a² < 2, the rational a′ = (2a + 2)/(a + 2) satisfies

        a′ − a = (2 − a²)/(a + 2) > 0,        a′² − 2 = 2(a² − 2)/(a + 2)² < 0

so a′ is a larger element of the cut.

Theorem 9.2 (Least upper bound property). Every nonempty set 𝒮 of cuts that is bounded above (by a cut M) has a least upper bound, namely the union U of the members of 𝒮.

Proof. U is nonempty, and U ⊆ M ≠ ℚ. It is downward closed, since each member is, and it has no greatest element, since any u ∈ U lies in some A ∈ 𝒮 which contains a larger element. So U is a cut. It contains every A ∈ 𝒮, so it is an upper bound; and any upper bound B contains every A ∈ 𝒮, hence contains U. ∎

Addition is A + B = {a + b : a ∈ A, b ∈ B}, with zero 0* and negative −A = {p ∈ ℚ : there is r > 0 with −p − r ∉ A}. Multiplication is defined first for positive cuts by A · B = {q ∈ ℚ : q ≤ 0} ∪ {ab : a ∈ A, b ∈ B, a > 0, b > 0} and extended by the rule of signs. Verifying the field axioms is lengthy but elementary; the delicate one is the existence of additive inverses, where one needs that for every rational ε > 0 there are a ∈ A and b ∉ A with b − a = ε, a consequence of the Archimedean property of ℚ. The full verification is carried out in Rudin's Principles of Mathematical Analysis (Appendix to Chapter 1) and in Landau's Grundlagen.

Cauchy sequences

Definition 9.3. A sequence (aₙ) of rationals is Cauchy if for every rational ε > 0 there is N with |aₘ − aₙ| < ε for all m, n ≥ N, and null if aₙ → 0. Let C be the set of Cauchy sequences and N₀ ⊂ C the set of null sequences.

With termwise operations, C is a commutative ring (Cauchy sequences are bounded, which gives closure under multiplication: |aₘbₘ − aₙbₙ| ≤ |aₘ||bₘ − bₙ| + |bₙ||aₘ − aₙ|), and N₀ is an ideal. Define ℝ = C/N₀.

Lemma 9.4. If (aₙ) is Cauchy and not null, there are a rational ε > 0 and an index N such that either aₙ ≥ ε for all n ≥ N or aₙ ≤ −ε for all n ≥ N.

Proof. Since (aₙ) is not null there is a rational 2ε > 0 with |aₙ| ≥ 2ε for infinitely many n. Choose N with |aₘ − aₙ| < ε for m, n ≥ N, and pick k ≥ N with |aₖ| ≥ 2ε, say aₖ ≥ 2ε. Then for n ≥ N, aₙ > aₖ − ε ≥ ε. The case aₖ ≤ −2ε is symmetric. ∎

Consequently N₀ is a maximal ideal and ℝ is a field: a non-null class has a representative with no zero terms (change finitely many), and (1/aₙ) is again Cauchy because |1/aₘ − 1/aₙ| = |aₙ − aₘ|/|aₘaₙ| ≤ |aₙ − aₘ|/ε². The lemma also defines the order: a class is positive when its representatives are eventually ≥ some positive rational. One then proves that every Cauchy sequence of reals converges in ℝ (by a diagonal argument choosing rationals close to each term), and that ℝ has the least upper bound property.

The same construction applied to the p-adic absolute value |·|ₚ of Lesson 6 instead of the usual one produces the field ℚₚ of p-adic numbers. Ostrowski's theorem (1916) says that, up to equivalence, these are the only completions of ℚ: every nontrivial absolute value on ℚ is equivalent to the usual one or to some |·|ₚ.

Uniqueness

Theorem 9.5. If F and F′ are complete ordered fields, there is exactly one bijection F → F′ preserving addition and multiplication, and it also preserves the order.

Proof. First, a complete ordered field is Archimedean: if ℕ were bounded above in F it would have a least upper bound s, but then s − 1 is not an upper bound, so some n > s − 1, and n + 1 > s, a contradiction. Both fields contain ℚ (Theorem 4.2), and by Theorem 4.5 ℚ is dense in each. Define φ(x) = sup{q ∈ ℚ : q < x}, the supremum taken in F′. One checks that φ is an order-preserving bijection respecting + and ·, using density at every step. For uniqueness, a field isomorphism ψ fixes ℚ and maps squares to squares; as the nonnegative elements of a complete ordered field are exactly the squares (every positive element has a square root, by completeness), ψ preserves order, and an order-preserving map fixing a dense subfield is determined. ∎

Corollary 9.6. The only ring homomorphism ℝ → ℝ sending 1 to 1 is the identity. This is in sharp contrast with ℂ, which has uncountably many field automorphisms (assuming the axiom of choice), although only two continuous ones.

Equivalent forms of completeness

For an ordered field F the following are equivalent: (i) the least upper bound property; (ii) every bounded monotone sequence converges; (iii) F is Archimedean and every Cauchy sequence converges; (iv) F is Archimedean and every nested sequence of closed bounded intervals has nonempty intersection; (v) every bounded sequence has a convergent subsequence (Bolzano–Weierstrass). The Archimedean hypothesis in (iii) and (iv) cannot be dropped: there are non-Archimedean ordered fields in which every Cauchy sequence converges.

Size

Theorem 9.7 (Cantor, 1874; diagonal proof 1891). ℝ is uncountable.

Proof. Suppose x₁, x₂, … lists all reals in (0, 1), each by a decimal expansion not ending in repeated 9s. Define y with n-th digit 5 if the n-th digit of xₙ is not 5, and 4 otherwise. Then y ∈ (0, 1), its expansion contains no 9s so it is the unique expansion of y, and y differs from each xₙ in the n-th digit. ∎

Since there are only countably many algorithms, almost all real numbers are not computable in Turing's sense (1936): no program outputs their digits. Every number that arithmetic can actually produce is computable; the computable reals form a real-closed field.

✏️ Your Turn

(a) Show that the cut A + 0* equals A, where 0* = {q ∈ ℚ : q < 0}.
(b) Show that the sequence aₙ = (−1)ⁿ is not Cauchy, while aₙ = Σ (k = 1 to n) 1/k² is Cauchy.
(c) Starting from a = 1, apply the map a ↦ (2a + 2)/(a + 2) three times and compare the squares of the results with 2.

Answers: (a) If a ∈ A and q < 0 then a + q < a, so a + q ∈ A; hence A + 0* ⊆ A. Conversely, for a ∈ A choose a larger a′ ∈ A (A has no maximum); then a = a′ + (a − a′) with a − a′ < 0. (b) |aₙ₊₁ − aₙ| = 2 for all n, so ε = 1 fails. For the second, if m > n then aₘ − aₙ = Σ (k = n+1 to m) 1/k² < Σ (k = n+1 to m) (1/(k − 1) − 1/k) < 1/n. (c) The values are 4/3, 7/5 and 24/17, with squares 16/9 ≈ 1.7778, 49/25 = 1.96 and 576/289 ≈ 1.99308, all below 2 and increasing toward it, as the two identities above predict.

─────────────────────────────────
Lesson 10: Floating-Point Arithmetic and IEEE 754
─────────────────────────────────

📌 Key idea of this section:

        A binary floating-point number is ±(1.f)₂ × 2ᵉ with a p-bit significand.
        Every real x in the normal range rounds to fl(x) = x(1 + δ) with |δ| ≤ u = 2⁻ᵖ.
        IEEE 754 requires +, −, ×, ÷ and √ to be correctly rounded:
        fl(x ∘ y) = (x ∘ y)(1 + δ),  |δ| ≤ u.

Floating-point systems

Exact real arithmetic is impossible on a finite machine, and exact rational arithmetic is too expensive for most scientific computation because denominators grow without bound. The practical compromise is scientific notation with a fixed number of digits.

Definition 10.1. The floating-point system F(β, p, e_min, e_max) consists of 0 and the numbers ±(d₀.d₁d₂…d₍p−1₎)_β × βᵉ with digits 0 ≤ dᵢ < β, d₀ ≠ 0 and e_min ≤ e ≤ e_max. The integer p is the precision. The machine epsilon ε = β^(1−p) is the gap between 1 and the next larger element, and the unit roundoff is u = ½β^(1−p).

The elements are not uniformly spaced. In each binade [βᵉ, βᵉ⁺¹) there are (β − 1)β^(p−1) elements with constant spacing β^(e−p+1), the unit in the last place, ulp. Relative spacing is therefore roughly constant, between ε/β and ε, which is exactly what scientific computation needs.

The IEEE 754 standard

Before 1985 every manufacturer had its own floating-point arithmetic, with different precisions, rounding rules and exceptional behaviour, and portable numerical software was nearly impossible. The IEEE 754 standard (1985), whose principal architect was William Kahan (Turing Award 1989), fixed binary formats and their semantics; revisions in 2008 and 2019 added decimal formats, the fused multiply-add and recommended elementary functions. The three most common binary formats are

          format      sign  exponent  fraction   p    bias   e_min   e_max   machine ε
          binary16      1       5        10      11     15     −14      15    2⁻¹⁰ ≈ 9.77 × 10⁻⁴
          binary32      1       8        23      24    127    −126     127    2⁻²³ ≈ 1.19 × 10⁻⁷
          binary64      1      11        52      53   1023   −1022    1023    2⁻⁵² ≈ 2.22 × 10⁻¹⁶

A word with sign bit s, biased exponent field E (w bits) and fraction field f is decoded as follows.

  1. If 1 ≤ E ≤ 2ʷ − 2: the normal number (−1)ˢ × (1.f)₂ × 2^(E − bias). The leading 1 is implicit (the hidden bit), which is why p exceeds the fraction width by one.
  2. If E = 0: the number (−1)ˢ × (0.f)₂ × 2^e_min, a subnormal number when f ≠ 0, and ±0 when f = 0.
  3. If E = 2ʷ − 1: ±∞ when f = 0, and NaN (not a number) when f ≠ 0.

Worked Example 10.2 — encoding and decoding in binary32. To encode −6.25: 6.25 = 110.01₂ = 1.1001₂ × 2², so s = 1, E = 2 + 127 = 129 = 10000001₂ and f = 1001 followed by 19 zeros. The word is 1 10000001 10010000000000000000000, or C0C80000 in hexadecimal. Conversely, the word 40490FDB has s = 0, E = 10000000₂ = 128 and f = 490FDB₁₆, which decodes to 1.5707963705… × 2¹ = 3.14159274101257…, the binary32 number nearest to π.

Key numbers for binary64 (the type double in C and the type of every JavaScript number): the largest finite value is (2 − 2⁻⁵²) × 2¹⁰²³ ≈ 1.7977 × 10³⁰⁸; the smallest positive normal value is 2⁻¹⁰²² ≈ 2.2251 × 10⁻³⁰⁸; the smallest positive subnormal is 2⁻¹⁰⁷⁴ ≈ 4.94 × 10⁻³²⁴; and every integer of absolute value at most 2⁵³ = 9007199254740992 is exactly representable, but 2⁵³ + 1 is not. For binary32 the corresponding numbers are about 3.4028 × 10³⁸, 1.1755 × 10⁻³⁸, 1.4013 × 10⁻⁴⁵ and 2²⁴ = 16777216.

Rounding

The default rounding mode is round to nearest, ties to even: a real x is rounded to the nearest floating-point number, and in case of a tie to the one whose last significand bit is 0. Three directed modes (toward 0, toward +∞, toward −∞) are also required; the latter two make interval arithmetic possible.

Theorem 10.3 (Standard model). If x ∈ ℝ lies in the normal range of a binary format with precision p and fl(x) denotes x rounded to nearest, then fl(x) = x(1 + δ) with |δ| ≤ u = 2⁻ᵖ. IEEE 754 requires that for x, y in the format and ∘ ∈ {+, −, ×, ÷}, the computed result is fl(x ∘ y), and likewise for √.

Proof. Suppose 2ᵉ ≤ |x| < 2ᵉ⁺¹. Floating-point numbers in this binade are spaced 2^(e−p+1) apart, and the endpoint 2ᵉ⁺¹ is also representable, so |fl(x) − x| ≤ ½ · 2^(e−p+1) = 2^(e−p). Hence |fl(x) − x|/|x| ≤ 2^(e−p)/2ᵉ = 2⁻ᵖ. ∎

For binary64, u = 2⁻⁵³ ≈ 1.11 × 10⁻¹⁶: each operation is accurate to about 16 significant decimal digits. The guarantee concerns a single operation. It says nothing directly about a sequence of operations, which is the subject of Lesson 11.

The decimal fraction 0.1

Since 1/10 has a factor 5 in the denominator, its binary expansion 0.0(0011)₂ does not terminate (Theorem 8.3), and fl(0.1) is a different number. In binary64 the stored values are exactly

        fl(0.1)         = 0.1000000000000000055511151231257827021181583404541015625
        fl(0.2)         = 0.200000000000000011102230246251565404236316680908203125
        fl(0.3)         = 0.299999999999999988897769753748434595763683319091796875
        fl(0.1) ⊕ fl(0.2) = 0.3000000000000000444089209850062616169452667236328125

where ⊕ denotes floating-point addition. The sum is the floating-point number immediately above fl(0.3), so the comparison 0.1 + 0.2 == 0.3 is false in every IEEE 754 binary64 environment, and the shortest decimal string that reads back to the computed sum is 0.30000000000000004. Every one of these numbers is a dyadic rational with denominator dividing 2¹⁰⁷⁴, and every one has a terminating decimal expansion, because 2 divides 10.

The same phenomenon had real consequences. During the Gulf War, in February 1991, a Patriot missile battery at Dhahran failed to intercept an incoming Scud missile. Its clock counted tenths of a second in an integer and multiplied by 1/10 stored in a 24-bit fixed-point register; the chopping error of about 9.5 × 10⁻⁸ per tenth accumulated over 100 hours of continuous operation (3.6 × 10⁶ tenths) to about 0.34 s, enough for the tracking gate to miss a target moving at about 1,700 m/s. Twenty-eight soldiers were killed.

Failure of the field axioms

Floating-point addition is commutative but not associative. In binary64,

        (2⁵³ ⊕ 1) ⊕ 1 = 2⁵³ ⊕ 1 = 2⁵³,      but      2⁵³ ⊕ (1 ⊕ 1) = 2⁵³ + 2

because 2⁵³ + 1 lies exactly halfway between the representable numbers 2⁵³ and 2⁵³ + 2, and ties go to the even significand, which is 2⁵³. Distributivity fails as well, and x ⊕ y = x can hold with y ≠ 0. Multiplication by a power of 2 is exact (barring overflow and underflow), and so are the operations whose exact result is representable, a fact exploited in Lesson 11.

Subnormals and special values

Without subnormal numbers, the gap between 0 and the smallest normal number 2^e_min would be much larger than the gap just above it. With them (gradual underflow, championed by Kahan), the implication x ≠ y ⇒ x ⊖ y ≠ 0 holds for all finite floating-point x, y, a property that protects code such as "if x ≠ y then z = 1/(x − y)". Infinities and signed zeros make 1/(+0) = +∞ and 1/(−0) = −∞, and NaN is the result of invalid operations such as 0/0, ∞ − ∞ and √−1; NaN compares unequal to everything, including itself, so x ≠ x is the standard test for NaN.

✏️ Your Turn

(a) Decode the binary32 word 0 10000010 01100000000000000000000.
(b) How many binary64 numbers lie in [1, 2), and what is the next binary64 number after 1?
(c) Encode 0.15625 in binary32, giving the three fields.

Answers: (a) E = 130, so the exponent is 130 − 127 = 3, and the significand is 1.011₂ = 1.375; the value is 1.375 × 8 = 11. (b) The exponent is fixed at 0 and the 52 fraction bits are free, so there are 2⁵² numbers; the successor of 1 is 1 + 2⁻⁵² = 1 + ε ≈ 1.0000000000000002. (c) 0.15625 = 5/32 = 0.00101₂ = 1.01₂ × 2⁻³, so s = 0, E = −3 + 127 = 124 = 01111100₂, and f = 01 followed by 21 zeros; the word is 3E200000 in hexadecimal.

─────────────────────────────────
Lesson 11: Rounding Error, Cancellation and Stability
─────────────────────────────────

📌 Key idea of this section:

        The relative condition number of subtraction at (a, b) is (|a| + |b|)/|a − b|.
        Subtracting nearly equal numbers is itself exact (Sterbenz), but it magnifies
        the errors already present in the operands: catastrophic cancellation.
        Forward error ≲ condition number × backward error.

Conditioning

Let f be a differentiable function and x ≠ 0 with f(x) ≠ 0. If x is perturbed to x(1 + δ), then f changes by approximately f′(x) x δ, a relative change of κ(x) δ where

        κ(x) = |x f′(x) / f(x)|

is the relative condition number. It is a property of the problem, not of any algorithm. For f(x) = √x, κ = 1/2 everywhere: square roots are perfectly conditioned. For f(x) = ln x, κ = 1/|ln x|, which is large near x = 1. For the function of two variables (a, b) ↦ a − b, if a and b carry relative errors at most η then

        |(â − b̂) − (a − b)| / |a − b| ≤ η (|a| + |b|) / |a − b|

since |â − a| + |b̂ − b| ≤ η(|a| + |b|). The factor (|a| + |b|)/|a − b| is unbounded as a → b: this is cancellation.

Theorem 11.1 (Sterbenz lemma, 1974). If x and y are floating-point numbers with y/2 ≤ x ≤ 2y, then x − y is exactly representable, so x ⊖ y = x − y.

Proof. The hypothesis forces y ≥ 0 and x ≥ 0, and if y = 0 then x = 0; so assume y > 0. The hypothesis is symmetric in x and y (it is equivalent to x/2 ≤ y ≤ 2x), so we may also assume y ≤ x ≤ 2y. Let 2ᵉ ≤ y < 2ᵉ⁺¹ in the normal range. Both x and y are integer multiples of the quantum 2^(e−p+1), since x ≥ y lies in the same or a higher binade, where the spacing is a multiple of that of y's binade. Hence x − y is an integer multiple of 2^(e−p+1), and 0 ≤ x − y ≤ y < 2ᵉ⁺¹, so x − y = k · 2^(e−p+1) with 0 ≤ k < 2ᵖ, which is representable (as a normal or, if small, subnormal number). If y is subnormal the same argument works with the fixed subnormal quantum. ∎

The lesson of the lemma is subtle: the subtraction introduces no error at all. Cancellation is catastrophic when the operands are themselves the result of earlier rounding, because the subtraction strips away the leading digits that agree and exposes the inaccurate trailing ones. Cancellation of exact data is benign.

Three case studies

Example 11.2 — (1 − cos x)/x². The true value tends to 1/2 as x → 0. In binary64 at x = 10⁻⁸, cos x = 1 − 5 × 10⁻¹⁷ + ⋯, which is closer to 1 than to the next binary64 number below 1, namely 1 − 2⁻⁵³ ≈ 1 − 1.11 × 10⁻¹⁶. So the computed cosine is exactly 1, and the formula returns 0, with relative error 100 percent. The identity 1 − cos x = 2 sin²(x/2) removes the subtraction; evaluating 2 sin²(x/2)/x² in binary64 gives 0.5000000000000001, correct to rounding.

Example 11.3 — the quadratic formula. The roots of x² − 10⁸x + 1 = 0 are x = (10⁸ ± √(10¹⁶ − 4))/2, approximately 10⁸ and 10⁻⁸ (more precisely, the small root is 10⁻⁸ + 10⁻²⁴ + ⋯). In binary64, √(10¹⁶ − 4) ≈ 10⁸ − 2 × 10⁻⁸ is rounded to the nearest number in a binade where the spacing is 2⁻²⁶ ≈ 1.49 × 10⁻⁸, namely 10⁸ − 2⁻²⁶. The naive formula then returns 2⁻²⁶/2 = 2⁻²⁷ ≈ 7.4506 × 10⁻⁹ for the small root, which is wrong by about 25 percent. The stable method, writing the equation as x² − bx + c = 0 with b > 0, computes the large root x₁ = (b + √(b² − 4c))/2, where no cancellation occurs, and then the small root from Vieta's relation x₁x₂ = c, giving x₂ = 1/x₁ = 1.0000000000000000 × 10⁻⁸, correct to full precision.

Example 11.4 — √(x + 1) − √x for large x. At x = 10¹⁵ the naive difference in binary64 is 1.862645149230957 × 10⁻⁸, while the algebraically equivalent 1/(√(x + 1) + √x) gives 1.5811388300841893 × 10⁻⁸, the correctly rounded value. The naive result is off by about 18 percent: the two square roots agree in their first eight digits, and the subtraction leaves only the rounding errors of the square roots.

Summation

Theorem 11.5. Let Ŝ be the result of summing x₁, …, xₙ left to right in floating-point arithmetic with unit roundoff u, and let γₖ = ku/(1 − ku) for ku < 1. Then

        |Ŝ − Σ xᵢ| ≤ γₙ₋₁ Σ |xᵢ|.

Proof. By the standard model, the computed partial sums satisfy Ŝₖ = (Ŝₖ₋₁ + xₖ)(1 + δₖ) with |δₖ| ≤ u. Unrolling, Ŝ = Σ xᵢ ∏ (k = max(i, 2) to n) (1 + δₖ), each product having at most n − 1 factors. A product of j factors (1 + δ) with |δ| ≤ u lies within γⱼ of 1 (an elementary induction), and the bound follows. ∎

The bound, roughly (n − 1)u Σ|xᵢ|, is a worst case; with random rounding errors the typical error grows like √n u. The ordering matters: summing positive terms in increasing order reduces the error. William Kahan's compensated summation (1965) carries a running correction term c:

        s = 0, c = 0
        for each x:  y = x − c;   t = s + y;   c = (t − s) − y;   s = t

The quantity (t − s) − y recovers, exactly in many cases, the low-order part of y that was lost in forming t. The error bound becomes (2u + O(nu²)) Σ|xᵢ|, essentially independent of n. Adding 0.1 ten times in binary64 gives 0.9999999999999999 by naive summation and exactly 1 with Kahan's algorithm.

Backward stability

James Wilkinson's backward error analysis, developed in the 1950s and 1960s for matrix computations, changed the way numerical analysts think. Instead of asking how far the computed answer is from the true one, ask for which nearby data the computed answer is exact. An algorithm is backward stable if its output is the exact result for data perturbed by a relative amount of order u. Recursive summation is backward stable: the result above is the exact sum of the perturbed numbers xᵢ(1 + θᵢ) with |θᵢ| ≤ γₙ₋₁. Combining backward error with conditioning gives the rule of thumb

        relative forward error ≲ κ × relative backward error

so a backward-stable algorithm applied to a well-conditioned problem gives an accurate answer, and no algorithm can be expected to do better than κu on an ill-conditioned one. The naive quadratic formula in Example 11.3 is not backward stable for the small root; the Vieta-based method is. The fused multiply-add, which computes xy + z with a single rounding, is a further tool: it allows the exact computation of the rounding error of a product, since xy − fl(xy) is a floating-point number that FMA returns exactly.

✏️ Your Turn

(a) Compute the relative condition number of f(x) = eˣ and of f(x) = x − 1, and say where each is ill-conditioned.
(b) Give an expression for ln(1 + x) − x, for small |x|, that avoids cancellation, to within a relative error O(x).
(c) For x = 1.5 and y = 1 in binary64, decide whether the Sterbenz lemma applies and compute x ⊖ y.

Answers: (a) For eˣ, κ = |x · eˣ/eˣ| = |x|, ill-conditioned only for large |x|. For x − 1, κ = |x/(x − 1)|, ill-conditioned near x = 1. (b) From the Taylor series ln(1 + x) − x = −x²/2 + x³/3 − ⋯, the truncation −x²/2 + x³/3 has relative error O(x²) and −x²/2 alone has relative error O(x); in practice one uses the library function log1p(x) and subtracts x only when x is not small. (c) y/2 = 0.5 ≤ 1.5 ≤ 2 = 2y, so the lemma applies and x ⊖ y = 0.5 exactly.

─────────────────────────────────
Lesson 12: The Computational Complexity of Arithmetic
─────────────────────────────────

📌 Key idea of this section:

        Adding n-digit numbers costs Θ(n). Schoolbook multiplication costs Θ(n²).
        Karatsuba (1960): (aB + b)(cB + d) = acB² + [(a + b)(c + d) − ac − bd]B + bd, cost O(n^1.585).
        FFT methods: Schönhage–Strassen (1971) O(n log n log log n);
        Harvey–van der Hoeven (2019) O(n log n). Division costs a constant times multiplication.

Kolmogorov's conjecture and its refutation

Write M(n) for the number of bit operations needed to multiply two n-bit integers. Schoolbook multiplication shows M(n) = O(n²), and for millennia no one suspected that one could do better. In a seminar at Moscow State University in 1960, Andrey Kolmogorov conjectured that Θ(n²) is optimal. Within a week a 23-year-old student in the seminar, Anatoly Karatsuba, found a faster method, and Kolmogorov closed the seminar; the result was published in 1962 under the names of Karatsuba and Ofman.

Karatsuba's algorithm

Split n-digit numbers in base B as x = aBᵐ + b and y = cBᵐ + d with m = ⌈n/2⌉. Then

        xy = ac B²ᵐ + (ad + bc) Bᵐ + bd,      ad + bc = (a + b)(c + d) − ac − bd

so three multiplications of half-size numbers (ac, bd and (a + b)(c + d)) and a linear number of additions suffice, instead of four. Applied recursively this gives the recurrence T(n) = 3T(n/2) + O(n).

Theorem 12.1 (Master theorem, simple form). If T(n) = aT(n/b) + Θ(n) with a > b ≥ 2, then T(n) = Θ(n^(log_b a)).

Proof sketch. The recursion tree has log_b n levels; level j has aʲ subproblems of size n/bʲ, costing Θ(n (a/b)ʲ) in total. This geometric series is dominated by its last term, Θ(n (a/b)^(log_b n)) = Θ(a^(log_b n)) = Θ(n^(log_b a)). ∎

Thus Karatsuba multiplication costs Θ(n^(log₂ 3)) = Θ(n^1.58496…). For n = 2ᵏ single digits the recursion performs exactly 3ᵏ single-digit multiplications against 4ᵏ for the schoolbook method: 2187 against 16384 at k = 7.

Worked Example 12.2 — 1234 × 5678 with one level of Karatsuba. Here a = 12, b = 34, c = 56, d = 78 with B = 10 and m = 2, so Bᵐ = 100:

        ac = 12 · 56 = 672,     bd = 34 · 78 = 2652,     (a + b)(c + d) = 46 · 134 = 6164
        ad + bc = 6164 − 672 − 2652 = 2840
        xy = 672 · 10⁴ + 2840 · 10² + 2652 = 6720000 + 284000 + 2652 = 7006652

Toom–Cook

Karatsuba's trick is polynomial interpolation in disguise: x and y are values at B of linear polynomials, their product is a quadratic polynomial, and a quadratic is determined by three values (at 0, 1 and ∞ in Karatsuba's version). Toom (1963) and Cook (1966) generalised this by splitting into k pieces: the product of two polynomials of degree k − 1 has degree 2k − 2 and is determined by 2k − 1 values, giving T(n) = (2k − 1)T(n/k) + O(n) and cost Θ(n^(log_k(2k − 1))). Toom-3 has exponent log₃ 5 ≈ 1.465. Since log_k(2k − 1) → 1 as k → ∞, for every ε > 0 there is an O(n^(1+ε)) algorithm, though the constants grow rapidly with k.

The fast Fourier transform

Taking the evaluation points to be N-th roots of unity, with N a power of 2 at least the length of the product, turns evaluation and interpolation into the discrete Fourier transform, which the fast Fourier transform computes in O(N log N) ring operations. The FFT was published by Cooley and Tukey in 1965, but Gauss had used the method around 1805 for interpolating asteroid orbits. To multiply integers: write them as digit sequences, i.e. polynomials evaluated at the base, compute the cyclic convolution of the digit sequences by FFT, pointwise multiplication and inverse FFT, and finally propagate carries.

The ring in which the FFT runs is a design choice. Over ℂ with floating-point arithmetic one needs an error analysis to be sure that rounding to the nearest integer recovers the exact convolution. Alternatively, the number-theoretic transform works in ℤ/pℤ for a prime p = c · 2ᵏ + 1, which contains primitive 2ᵏ-th roots of unity because (ℤ/pℤ)^× is cyclic of order p − 1; a popular choice is p = 998244353 = 119 · 2²³ + 1. Schönhage and Strassen (1971) worked in ℤ/(2^K + 1)ℤ, where 2 is a root of unity of order 2K so that multiplications by roots of unity are mere shifts, and obtained M(n) = O(n log n log log n). Schönhage and Strassen conjectured that Θ(n log n) is the true complexity. Fürer (2007) improved the bound to n log n · 2^O(log* n), and in 2019 David Harvey and Joris van der Hoeven gave an algorithm with M(n) = O(n log n) (Annals of Mathematics, 2021), so the upper bound now matches the conjecture. No matching lower bound is known for general models of computation; Ω(n log n) has been proved only for restricted models or conditionally on conjectures in network coding.

The hierarchy of practical algorithms is visible in libraries such as GMP, which switch from schoolbook to Karatsuba to several Toom variants and finally to FFT multiplication as operand sizes grow past tuned thresholds. Record computations of π to trillions of digits rest entirely on FFT multiplication.

Division and other operations

Theorem 12.3. Division of n-bit numbers can be performed in O(M(n)) bit operations.

Proof sketch. To compute 1/d, use Newton's method on g(x) = 1/x − d, which gives the iteration

        xₖ₊₁ = xₖ(2 − d xₖ),        with error eₖ = 1 − d xₖ satisfying eₖ₊₁ = eₖ²

since 1 − d xₖ(2 − d xₖ) = (1 − d xₖ)². The number of correct bits doubles at each step, so step k need only be carried out with about 2ᵏ bits of precision. The total cost is O(M(n) + M(n/2) + M(n/4) + ⋯) = O(M(n)), assuming M(n)/n is nondecreasing; then a/d = a · (1/d) costs one more multiplication, and a final correction fixes the last bit of the quotient. ∎

Similar Newton iterations give square roots in O(M(n)). Conversion between binary and decimal, and the gcd by the Knuth–Schönhage half-gcd algorithm, cost O(M(n) log n), compared with O(n²) for the naive methods. Modular exponentiation aᵉ mod m with n-bit numbers costs O(n) modular multiplications by the square-and-multiply method of Lesson 7, hence O(n M(n)) bit operations, which is what makes RSA practical. The analogous question for matrices remains open: Strassen (1969) showed that n × n matrices can be multiplied in O(n^(log₂ 7)) = O(n^2.807) operations, and the best known exponent ω is now below 2.372, but whether ω = 2 is unknown.

✏️ Your Turn

(a) Apply Newton's iteration for 1/7 from x₀ = 0.1 three times, and verify that the error eₖ = 1 − 7xₖ squares at each step.
(b) Compute 47 × 83 by one level of Karatsuba with B = 10.
(c) How many single-digit multiplications does fully recursive Karatsuba use for two 64-digit numbers, compared with the schoolbook method?

Answers: (a) x₁ = 0.1(2 − 0.7) = 0.13, x₂ = 0.13(2 − 0.91) = 0.1417, x₃ = 0.1417(2 − 0.9919) = 0.14284777. The errors are e₀ = 0.3, e₁ = 0.09, e₂ = 0.0081, e₃ = 0.00006561, each the square of the one before; 1/7 = 0.142857142…. (b) a = 4, b = 7, c = 8, d = 3: ac = 32, bd = 21, (a + b)(c + d) = 11 · 11 = 121, so ad + bc = 121 − 32 − 21 = 68 and the product is 3200 + 680 + 21 = 3901. (c) 64 = 2⁶, so Karatsuba uses 3⁶ = 729 single-digit multiplications against 64² = 4096.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The sixty problems below are arranged in three groups. The Core problems check the definitions, computations and algorithms of the lessons; the Advanced problems require short proofs or multi-step calculations; the Challenge problems are of the kind found in graduate texts and qualifying examinations. Work them with pencil and paper before consulting the answer key; for the numerical problems, a careful check by hand is part of the exercise.

Core (Problems 1–20)

  1. Using only the recursive definitions of Lesson 1, compute 2 · 3, recording each step.
  2. Prove from the definitions that a + 1 = S(a) and 1 + a = S(a) for every a ∈ ℕ.
  3. Which of the pairs (0, 5), (5, 0), (10, 15), (8, 3) represent the same integer as (3, 8)?
  4. Compute [(2, 7)] · [(4, 1)] in ℤ = (ℕ × ℕ)/∼ and give its normal form.
  5. In the construction of ℚ, verify that (1, 2) ∼ (3, 6), and compute (1, 2) + (1, 3) and (1, 2) · (1, 3) as pairs.
  6. Find the quotient and remainder (with 0 ≤ r < b) for a = −47, b = 6 and for a = −100, b = 7.
  7. Find gcd(252, 198) by Euclid's algorithm and express it as 252x + 198y.
  8. Factor 360 into primes and find its number of positive divisors τ(360) and their sum σ(360).
  9. Find the last digit of 7²²².
  10. Find the inverse of 7 modulo 26.
  11. Solve the congruence 5x ≡ 3 (mod 12).
  12. Write 2026 in bases 2, 8 and 16.
  13. Convert 101101₂, 2201₃ and 7EA₁₆ to decimal.
  14. Write the repeating decimal 0.363636… as a fraction in lowest terms.
  15. Which of 1/40, 1/12, 7/80 and 3/14 have terminating decimal expansions?
  16. Prove that √3 is irrational using the fundamental theorem of arithmetic.
  17. State the machine epsilon and the unit roundoff of binary64, as powers of 2 and in decimal.
  18. Decode the binary32 word 0 10000001 10100000000000000000000.
  19. Explain precisely why 0.1 + 0.2 == 0.3 evaluates to false in binary64 arithmetic.
  20. Compute 12 × 34 by one level of Karatsuba's method with B = 10.

Advanced (Problems 21–45)

  21. Prove that if a, b ∈ ℕ and ab = 1, then a = b = 1.
  22. Prove the principle of strong induction from the well-ordering principle.
  23. Prove that the order on ℤ defined by [(a, b)] ≤ [(c, d)] ⟺ a + d ≤ b + c is well defined.
  24. In an ordered field, prove that for a, b > 0 we have a < b if and only if a² < b².
  25. Prove that no finite field can be ordered.
  26. In ℚ(t) with the ordering of Lesson 4, show that 1/t is positive and smaller than every positive rational number.
  27. Divide 11 + 3i by 1 + 2i in ℤ[i], giving q and r with N(r) < N(1 + 2i).
  28. Find gcd(x⁶ − 1, x⁴ − 1) in ℚ[x] by the Euclidean algorithm.
  29. How many trailing zeros does 1000! have?
  30. Compute v₃(50!) by Legendre's formula and confirm it with the digit-sum formula.
  31. Show that 2 and 1 + √−5 are irreducible in ℤ[√−5] and are not associates.
  32. Find all x with x ≡ 1 (mod 4), x ≡ 2 (mod 5), x ≡ 3 (mod 7).
  33. Compute 2²⁰²⁶ mod 101.
  34. Find the last three digits of 3⁴⁰².
  35. List the units and the zero divisors of ℤ/12ℤ, and check that their numbers are φ(12) and 12 − 1 − φ(12).
  36. Find the decimal periods of 1/17, 1/37 and 1/41.
  37. Prove the divisibility test for 11: n is divisible by 11 if and only if its alternating digit sum is.
  38. Write 25 and 100 in balanced ternary.
  39. Write 6 and −3 in base −2.
  40. Prove that the sum A + B of two Dedekind cuts is a cut.
  41. Let aₙ be the decimal truncation of √2 to n places. Show that (aₙ) is a Cauchy sequence of rationals.
  42. Find the largest finite binary32 number exactly and to five significant figures.
  43. What is the ulp (spacing of consecutive binary64 numbers) at 2026.0, and how many binary64 numbers lie in [1024, 2048)?
  44. Bound the relative error of the floating-point evaluation fl(x · fl(y + z)) for floating-point x, y, z with y + z ≠ 0.
  45. Compute the relative condition numbers of f(x) = √x, f(x) = x − 1 and f(x) = sin x, and say where each is ill-conditioned.

Challenge (Problems 46–60)

  46. Deduce the recursion theorem with a parameter from Theorem 1.3.
  47. Prove that the ideal (2, x) of ℤ[x] is not principal.
  48. Prove that there are infinitely many primes congruent to 3 modulo 4.
  49. Prove that gcd(2ᵐ − 1, 2ⁿ − 1) = 2^gcd(m, n) − 1, and compute gcd(4095, 262143).
  50. Show that Euclid's algorithm on the pair (F(n+2), F(n+1)) takes exactly n division steps, so Lamé's bound is sharp.
  51. Prove that ℝ has exactly one ordering making it an ordered field, and deduce that the only field automorphism of ℝ is the identity.
  52. Show that the number of idempotents (x² = x) in ℤ/nℤ is 2^ω(n), where ω(n) is the number of distinct primes dividing n. List the idempotents of ℤ/360ℤ by their count and of ℤ/10ℤ explicitly.
  53. Prove that every Cauchy sequence of rationals is bounded and that the product of two Cauchy sequences is Cauchy.
  54. Show that the implication x ≠ y ⇒ x ⊖ y ≠ 0 fails in binary64 if subnormal results are flushed to zero, using x = 1.5 × 2⁻¹⁰²² and y = 2⁻¹⁰²².
  55. The population variance of the data 10⁹ + 4, 10⁹ + 7, 10⁹ + 13, 10⁹ + 16 is to be computed. Compare the one-pass formula (1/n)Σxᵢ² − x̄² with the two-pass formula (1/n)Σ(xᵢ − x̄)² in binary64.
  56. Let a ≥ b ≥ 0 be floating-point numbers and s = a ⊕ b. Using the Sterbenz lemma, prove that s ⊖ a is computed exactly.
  57. Solve the Karatsuba recurrence T(1) = 1, T(n) = 3T(n/2) + cn exactly for n = 2ᵏ.
  58. Show that Toom-k multiplication has exponent log_k(2k − 1), compute it for k = 2, 3, 4, and show that it tends to 1.
  59. Newton's iteration for 1/d is started with error |e₀| = 1/2. How many iterations are needed to guarantee 10⁶ correct bits?
  60. (Midy's theorem.) Let p be a prime, p ≠ 2, 5, such that the decimal period of 1/p is even, say 2k. Prove that 10ᵏ ≡ −1 (mod p) and that the two halves of the repeating block of 1/p add to 10ᵏ − 1. Check it for 1/7 and 1/17.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. 2 · 3 = 2 · S(2) = 2 · 2 + 2 = 4 + 2, using 2 · 2 = 4 from the exercise in Lesson 1. Then 4 + 2 = 4 + S(1) = S(4 + 1) = S(4 + S(0)) = S(S(4 + 0)) = S(S(4)) = S(5) = 6.
  2. a + 1 = a + S(0) = S(a + 0) = S(a). For the other, by Lemma 2.2, 1 + a = S(0) + a = S(0 + a) = S(a), using Lemma 2.1.
  3. (a, b) ∼ (3, 8) means a + 8 = b + 3. This holds for (0, 5) (8 = 8) and (10, 15) (18 = 18), but not for (5, 0) (13 ≠ 3) or (8, 3) (16 ≠ 6). The class is −5.
  4. [(2·4 + 7·1, 2·1 + 7·4)] = [(15, 30)] = [(0, 15)] = −15, matching (2 − 7)(4 − 1) = (−5)(3).
  5. 1 · 6 = 6 = 2 · 3, so (1, 2) ∼ (3, 6). The sum is (1·3 + 2·1, 2·3) = (5, 6) and the product is (1, 6).
  6. −47 = (−8)·6 + 1, so q = −8, r = 1. −100 = (−15)·7 + 5, so q = −15, r = 5.
  7. 252 = 1·198 + 54, 198 = 3·54 + 36, 54 = 1·36 + 18, 36 = 2·18, so the gcd is 18. Then 18 = 54 − 36 = 54 − (198 − 3·54) = 4·54 − 198 = 4(252 − 198) − 198 = 4·252 − 5·198; check 1008 − 990 = 18.
  8. 360 = 2³ · 3² · 5. τ = (3 + 1)(2 + 1)(1 + 1) = 24, and σ = (1 + 2 + 4 + 8)(1 + 3 + 9)(1 + 5) = 15 · 13 · 6 = 1170.
  9. 7² = 49 ≡ 9 and 7⁴ ≡ 81 ≡ 1 (mod 10). Since 222 = 4·55 + 2, 7²²² ≡ 7² ≡ 9. The last digit is 9.
  10. 26 = 3·7 + 5, 7 = 1·5 + 2, 5 = 2·2 + 1. Back-substituting, 1 = 5 − 2·2 = 5 − 2(7 − 5) = 3·5 − 2·7 = 3(26 − 3·7) − 2·7 = 3·26 − 11·7, so 7⁻¹ ≡ −11 ≡ 15; check 7 · 15 = 105 = 4·26 + 1.
  11. gcd(5, 12) = 1 and 5 · 5 = 25 ≡ 1, so 5⁻¹ ≡ 5 and x ≡ 15 ≡ 3 (mod 12). Check 5 · 3 = 15 ≡ 3.
  12. 2026 = 1024 + 512 + 256 + 128 + 64 + 32 + 8 + 2 = 11111101010₂. Grouping in threes: 011 111 101 010 = 3752₈. Grouping in fours: 0111 1110 1010 = 7EA₁₆.
  13. 101101₂ = 32 + 8 + 4 + 1 = 45. 2201₃ = 2·27 + 2·9 + 0·3 + 1 = 73. 7EA₁₆ = 7·256 + 14·16 + 10 = 1792 + 224 + 10 = 2026.
  14. If x = 0.3636… then 100x − x = 36, so x = 36/99 = 4/11.
  15. 1/40 (40 = 2³·5) and 7/80 (80 = 2⁴·5) terminate: 0.025 and 0.0875. 1/12 and 3/14 do not, as their reduced denominators contain the primes 3 and 7.
  16. If √3 = a/b with positive integers, then 3b² = a². The exponent of 3 in a² is even, while in 3b² it is odd, contradicting unique factorisation.
  17. ε = 2⁻⁵² ≈ 2.220446 × 10⁻¹⁶ (the gap from 1 to the next binary64 number) and u = 2⁻⁵³ ≈ 1.110223 × 10⁻¹⁶ (the maximum relative rounding error).
  18. E = 10000001₂ = 129, so the exponent is 2; the significand is 1.101₂ = 1.625. The value is 1.625 × 4 = 6.5.
  19. None of 0.1, 0.2, 0.3 is a dyadic rational, so each is rounded on input. fl(0.1) and fl(0.2) both lie slightly above the true values, and their correctly rounded sum is 0.3000000000000000444…, while fl(0.3) = 0.2999999999999999888…; these are adjacent but distinct binary64 numbers.
  20. a = 1, b = 2, c = 3, d = 4: ac = 3, bd = 8, (a + b)(c + d) = 3 · 7 = 21, so ad + bc = 21 − 3 − 8 = 10. Then 12 × 34 = 300 + 100 + 8 = 408.

Advanced

  21. Neither a nor b is 0, since a · 0 = 0 ≠ 1. If a = S(m) with m ≠ 0, then ab = mb + b ≥ b + b ≥ 2 > 1 (because b ≥ 1 and m ≥ 1 give mb ≥ b). So a = 1, and then b = 1 · b = 1.
  22. Suppose P(n) holds whenever P(m) holds for all m < n, but P fails somewhere. The set of failures has a least element n₀. Then P(m) holds for all m < n₀, so P(n₀) holds, a contradiction.
  23. Suppose (a, b) ∼ (a′, b′) and (c, d) ∼ (c′, d′), so a + b′ = b + a′ and c + d′ = d + c′, and suppose a + d ≤ b + c. Adding b′ + c′ to both sides gives (a + b′) + (d + c′) ≤ (b + c) + (b′ + c′). The left side equals (b + a′) + (c + d′) = (b + c) + (a′ + d′). Cancelling b + c (order cancellation in ℕ) gives a′ + d′ ≤ b′ + c′. By symmetry the converse holds, so the relation does not depend on the representatives.
  24. b² − a² = (b − a)(b + a), and b + a > 0. So b² − a² > 0 if and only if b − a > 0.
  25. In an ordered field the elements 1, 1 + 1, 1 + 1 + 1, … are all positive, hence nonzero, so the characteristic is 0 and the field is infinite.
  26. 1/t has numerator 1 and denominator t, both with leading coefficient +1, so 1/t > 0. For a rational r > 0, r − 1/t = (rt − 1)/t has leading coefficients r and 1, both positive, so r − 1/t > 0.
  27. (11 + 3i)/(1 + 2i) = (11 + 3i)(1 − 2i)/5 = (11 − 22i + 3i + 6)/5 = (17 − 19i)/5 = 3.4 − 3.8i. Round to q = 3 − 4i. Then (3 − 4i)(1 + 2i) = 3 + 6i − 4i + 8 = 11 + 2i, so r = (11 + 3i) − (11 + 2i) = i, with N(r) = 1 < 5.
  28. x⁶ − 1 = x² (x⁴ − 1) + (x² − 1), and x⁴ − 1 = (x² + 1)(x² − 1) + 0. The gcd is x² − 1, in agreement with gcd(x^m − 1, x^n − 1) = x^gcd(m, n) − 1.
  29. v₅(1000!) = 200 + 40 + 8 + 1 = 249, and v₂(1000!) is larger, so 1000! ends in exactly 249 zeros.
  30. ⌊50/3⌋ + ⌊50/9⌋ + ⌊50/27⌋ = 16 + 5 + 1 = 22. In base 3, 50 = 1212₃ (27 + 18 + 3 + 2), with digit sum 6, and (50 − 6)/2 = 22.
  31. N(2) = 4 and N(1 + √−5) = 6. A proper factorisation would need an element of norm 2 or 3, and a² + 5b² ∈ {2, 3} has no integer solutions. Associates have equal norms, and 4 ≠ 6, so they are not associates.
  32. The solutions of x ≡ 3 (mod 7) and x ≡ 2 (mod 5) are x ≡ 17 (mod 35) (17 = 2·7 + 3 = 3·5 + 2). Among 17, 52, 87, 122 the one ≡ 1 (mod 4) is 17. So x ≡ 17 (mod 140).
  33. By Fermat, 2¹⁰⁰ ≡ 1 (mod 101), and 2026 = 20·100 + 26, so 2²⁰²⁶ ≡ 2²⁶. Now 2¹⁰ = 1024 ≡ 14, 2²⁰ ≡ 196 ≡ 95 ≡ −6, and 2²⁶ = 2²⁰ · 2⁶ ≡ −6 · 64 = −384 ≡ −384 + 404 = 20. The answer is 20.
  34. φ(1000) = 400 and gcd(3, 1000) = 1, so 3⁴⁰⁰ ≡ 1 and 3⁴⁰² ≡ 9 (mod 1000). The last three digits are 009.
  35. Units: 1, 5, 7, 11 (four of them, and φ(12) = 4). Zero divisors: 2, 3, 4, 6, 8, 9, 10 (seven, and 12 − 1 − 4 = 7); for example 4 · 3 = 0 and 9 · 4 = 0.
  36. ord₁₇(10) = 16: the powers 10ᵏ mod 17 run through 10, 15, 14, 4, 6, 9, 5, 16, so 10⁸ ≡ −1 and the order is 16. 10³ = 1000 = 27·37 + 1, so 1/37 has period 3 (10 ≢ 1 and 100 ≢ 1). 10⁵ = 100000 = 2439·41 + 1, so the order divides 5; it is not 1, so it is 5. The periods are 16, 3 and 5.
  37. 10 ≡ −1 (mod 11), so n = Σ dᵢ 10ⁱ ≡ Σ (−1)ⁱ dᵢ (mod 11). Hence 11 | n exactly when 11 divides the alternating sum.
  38. 25 = 27 − 3 + 1 = 10T1. 100 = 81 + 27 − 9 + 1 = 11T01.
  39. 6 = 16 − 8 − 2 = 1·16 + 1·(−8) + 0·4 + 1·(−2) + 0, written 11010. −3 = −8 + 4 + 1 = 1·(−8) + 1·4 + 0·(−2) + 1, written 1101.
  40. A + B is nonempty. If a₀ ∉ A and b₀ ∉ B, then a < a₀ and b < b₀ for all a ∈ A, b ∈ B (downward closure), so a₀ + b₀ ∉ A + B and A + B ≠ ℚ. If q < a + b, then q − b < a, so q − b ∈ A and q = (q − b) + b ∈ A + B. Finally a + b < a′ + b with a′ ∈ A larger than a, so there is no greatest element.
  41. For m > n, aₙ ≤ aₘ < aₙ + 10⁻ⁿ, because aₘ and aₙ agree in the first n decimal places. Given ε > 0 choose N with 10⁻ᴺ < ε; then |aₘ − aₙ| < 10⁻ⁿ ≤ 10⁻ᴺ < ε for m > n ≥ N.
  42. (2 − 2⁻²³) × 2¹²⁷ = 2¹²⁸ − 2¹⁰⁴ = 340282346638528859811704183484516925440 ≈ 3.4028 × 10³⁸.
  43. 2026 lies in [2¹⁰, 2¹¹), where the spacing is 2^(10 − 52) = 2⁻⁴² ≈ 2.27 × 10⁻¹³. Every binade contains 2⁵² binary64 numbers, so [1024, 2048) contains 2⁵² = 4503599627370496 of them.
  44. fl(y + z) = (y + z)(1 + δ₁) and fl(x · w) = xw(1 + δ₂) with |δᵢ| ≤ u. The result is x(y + z)(1 + δ₁)(1 + δ₂), so the relative error is |δ₁ + δ₂ + δ₁δ₂| ≤ 2u + u².
  45. For √x: κ = |x · (1/(2√x))/√x| = 1/2, never ill-conditioned. For x − 1: κ = |x/(x − 1)|, ill-conditioned near x = 1. For sin x: κ = |x cos x/sin x| = |x cot x|, ill-conditioned near x = kπ with k ≠ 0 (at x = 0 the limit is 1).

Challenge

  46. Given x₀ : P → X and g : P × X → X, fix p ∈ P and apply Theorem 1.3 to the element x₀(p) and the map gₚ(x) = g(p, x). This gives a unique hₚ : ℕ → X with hₚ(0) = x₀(p) and hₚ(S(n)) = g(p, hₚ(n)). Define h(p, n) = hₚ(n). Uniqueness of h follows from uniqueness of each hₚ.
  47. Suppose (2, x) = (f). Since 2 ∈ (f), f divides 2, so f = ±1 or ±2 (degree 0, as degrees add). If f = ±2, then x ∈ (2), impossible since x has an odd coefficient. If f = ±1, then 1 = 2g + xh for some g, h ∈ ℤ[x]; setting x = 0 gives 1 = 2g(0), impossible in ℤ.
  48. Suppose p₁, …, pₖ are all the primes ≡ 3 (mod 4), and let N = 4p₁⋯pₖ − 1. N is odd and N ≡ 3 (mod 4). If all prime factors of N were ≡ 1 (mod 4), so would be N. Hence some prime q ≡ 3 (mod 4) divides N; but q = pᵢ would give pᵢ | 1. Contradiction.
  49. If m = qn + r, then 2ᵐ − 1 = 2ʳ(2^(qn) − 1) + (2ʳ − 1), and 2ⁿ − 1 divides 2^(qn) − 1. So gcd(2ᵐ − 1, 2ⁿ − 1) = gcd(2ⁿ − 1, 2ʳ − 1): Euclid's algorithm on the exponents runs in parallel, ending with 2^gcd(m, n) − 1. Since 4095 = 2¹² − 1 and 262143 = 2¹⁸ − 1, the gcd is 2⁶ − 1 = 63.
  50. For n ≥ 2, F(n+2) = 1 · F(n+1) + F(n) with 0 < F(n) < F(n+1) (for n ≥ 2, F(n) < F(n+1) since F(n−1) > 0), so one division step reduces (F(n+2), F(n+1)) to (F(n+1), F(n)). By induction the algorithm reaches (F(3), F(2)) = (2, 1) after n − 1 steps, and 2 = 2 · 1 is one more step, for n in total. (For n = 1 the pair (2, 1) takes one step.)
  51. In any ordering of a field, squares are nonnegative. In ℝ every nonnegative number (for the usual order) is a square, and every negative number is minus a square; so the set of positives of any ordering must be exactly the set of usual positives. A field automorphism σ maps squares to squares, so it preserves the order; it fixes ℚ; and if σ(x) ≠ x for some x, a rational strictly between x and σ(x) would be fixed by σ while lying on the wrong side of σ(x), contradicting order preservation.
  52. By the CRT, ℤ/nℤ ≅ ∏ ℤ/pᵉℤ over the prime powers exactly dividing n, and x is idempotent iff each component is. In ℤ/pᵉℤ, x(x − 1) ≡ 0 with x and x − 1 coprime forces pᵉ | x or pᵉ | x − 1, so the only idempotents are 0 and 1. Thus there are 2^ω(n) idempotents. For 360 = 2³·3²·5 there are 2³ = 8. In ℤ/10ℤ they are 0, 1, 5, 6 (25 ≡ 5, 36 ≡ 6).
  53. Choose N with |aₙ − a_N| < 1 for n ≥ N; then |aₙ| ≤ max(|a₁|, …, |a_N|) + 1 for all n. For the product, with bounds |aₙ| ≤ A and |bₙ| ≤ B, |aₘbₘ − aₙbₙ| ≤ |aₘ||bₘ − bₙ| + |bₙ||aₘ − aₙ| ≤ A|bₘ − bₙ| + B|aₘ − aₙ|, which is made < ε by choosing N for ε/(2A) and ε/(2B).
  54. Both x and y are normal and x ≠ y. Their exact difference is 0.5 × 2⁻¹⁰²² = 2⁻¹⁰²³, which is below the smallest normal 2⁻¹⁰²² but exactly representable as a subnormal. With gradual underflow x ⊖ y = 2⁻¹⁰²³ ≠ 0; with flush to zero it becomes 0, and a guarded division 1/(x − y) would divide by zero.
  55. The two-pass formula: x̄ = 10⁹ + 10 is computed exactly, the deviations −6, −3, 3, 6 are exact, and the result is (36 + 9 + 9 + 36)/4 = 22.5, correct. The one-pass formula: xᵢ² ≈ 10¹⁸ lies in [2⁵⁹, 2⁶⁰), where the spacing of binary64 numbers is 2⁷ = 128, so each square and each partial sum carries rounding errors of tens of units, while the quantity sought is 22.5. In binary64, summing in the given order, the one-pass formula returns −128, a negative variance. This is catastrophic cancellation of two nearly equal numbers of size 10¹⁸ that were already inexact.
  56. Since 0 ≤ b ≤ a, the exact sum satisfies a ≤ a + b ≤ 2a. Rounding is monotone and a, 2a are floating-point numbers (barring overflow), so a ≤ s ≤ 2a. Then s/2 ≤ a ≤ s, which is the Sterbenz hypothesis for the pair (s, a); hence s − a is a floating-point number and s ⊖ a = s − a exactly. (This is the first step of Dekker's Fast2Sum, which goes on to recover the rounding error b − (s − a) exactly.)
  57. Unrolling, T(2ᵏ) = 3ᵏ T(1) + c Σ (j = 0 to k − 1) 3ʲ 2^(k−j) = 3ᵏ + c 2ᵏ Σ (3/2)ʲ = 3ᵏ + 2c(3ᵏ − 2ᵏ). With n = 2ᵏ and 3ᵏ = n^(log₂ 3), T(n) = (1 + 2c) n^(log₂ 3) − 2cn. Check k = 1: 3 + 2c = 3T(1) + 2c.
  58. Splitting each factor into k pieces makes them values of polynomials of degree k − 1; the product has degree 2k − 2 and 2k − 1 coefficients, determined by 2k − 1 point values, each a product of numbers of size about n/k. So T(n) = (2k − 1)T(n/k) + O(n), and the master theorem gives exponent log_k(2k − 1). For k = 2, 3, 4: log₂ 3 ≈ 1.585, log₃ 5 ≈ 1.465, log₄ 7 ≈ 1.404. Since log_k(2k − 1) = 1 + log_k(2 − 1/k) ≤ 1 + log 2/log k → 1, any exponent 1 + ε is attained for large k.
  59. eₖ = e₀^(2ᵏ) = 2^(−2ᵏ), which gives 2ᵏ correct bits. We need 2ᵏ ≥ 10⁶; since 2¹⁹ = 524288 and 2²⁰ = 1048576, k = 20 iterations suffice and 19 do not.
  60. The period is ord_p(10) = 2k, so x = 10ᵏ satisfies x² ≡ 1 but x ≢ 1 (mod p); in the field ℤ/pℤ this forces x ≡ −1. The repeating block of 1/p consists of the first 2k digits; its first half is A = ⌊10ᵏ/p⌋, and the remainder is 10ᵏ − pA ≡ −1, i.e. equal to p − 1. The second half is then the first k digits of (p − 1)/p = 1 − 1/p, namely B = ⌊10ᵏ(p − 1)/p⌋ = 10ᵏ − ⌈10ᵏ/p⌉ = 10ᵏ − A − 1 (as p ∤ 10ᵏ). So A + B = 10ᵏ − 1. For 1/7 = 0.(142857): 142 + 857 = 999. For 1/17 = 0.(0588235294117647): 05882352 + 94117647 = 99999999.
