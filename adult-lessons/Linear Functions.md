Linear Functions — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

In school a linear function is a formula, y = mx + b, whose graph is a straight line. In advanced mathematics the same idea is split into two precise notions and then generalised enormously. A map is linear when it respects addition and scalar multiplication; it is affine when it is a linear map followed by a translation. The school function y = mx + b is affine, and it is linear only when b = 0. This distinction, which looks like pedantry on the real line, becomes the organising principle of linear algebra, multivariable calculus, statistics and optimisation.

The reason linear maps occupy such a central place is that they are the only maps we understand completely. A linear map between finite-dimensional spaces is determined by a finite table of numbers, its matrix; its behaviour is controlled by a handful of invariants such as rank, determinant and eigenvalues; and the equations it produces can be solved by finite algorithms. Almost every other part of analysis proceeds by reducing a nonlinear problem to a linear one. The derivative of a function is, by definition, the linear map that best approximates it near a point. A least-squares fit is an orthogonal projection, which is linear. A linear programme asks for the best vertex of a polyhedron cut out by affine inequalities. Even modern neural networks are compositions of affine maps with one very simple piecewise-linear function.

This course assumes fluency with the material of the school lesson (slope, intercepts, composition, inverses, systems of two equations) and some familiarity with matrices. It proceeds at the level of a first graduate course: every definition is stated precisely, the central theorems are proved, and the history and research connections are indicated where they illuminate the mathematics. Proofs end with the symbol ∎.

In this course, you will:

  1. Distinguish linear from affine maps and characterise both, including the Cauchy functional equation and its pathological solutions
  2. Work with abstract vector spaces, bases and dimension, and prove the Steinitz exchange lemma
  3. Prove the rank–nullity theorem and use it to derive the basic structure theory of linear maps
  4. Represent linear maps by matrices and understand change of basis and similarity invariants
  5. Study dual spaces, dual bases, annihilators and transposes, with applications to numerical integration
  6. Develop affine geometry: affine combinations, barycentric coordinates and the affine group
  7. Understand the derivative as the best linear approximation, the Jacobian, and Newton's method
  8. Derive the normal equations of least squares and interpret them as an orthogonal projection
  9. Prove the Gauss–Markov theorem and the unbiasedness of the residual variance estimator
 10. Solve linear programmes geometrically and by the simplex method
 11. Prove weak duality, state strong duality and Farkas' lemma, and use complementary slackness
 12. Study Lipschitz and piecewise-linear functions, operator norms, contractions and ReLU representations

Throughout, F denotes a field (usually ℝ), vectors in ℝⁿ are columns, Aᵀ is the transpose of A, eⱼ is the j-th standard basis vector, and ⟨x, y⟩ = xᵀy is the standard inner product.

─────────────────────────────────
Lesson 1: Linear Versus Affine Maps
─────────────────────────────────

📌 Key idea of this section:

        T is linear      ⇔  T(x + y) = T(x) + T(y)  and  T(λx) = λT(x)
        f is affine      ⇔  f(x) = Ax + b  for a matrix A and a vector b
        On ℝ:  x ↦ mx is linear;  x ↦ mx + b is affine, and linear only if b = 0

Definitions

Let V and W be vector spaces over a field F. A map T : V → W is linear if T(x + y) = T(x) + T(y) and T(λx) = λT(x) for all x, y ∈ V and λ ∈ F. Equivalently, T preserves every linear combination: T(λ₁x₁ + ⋯ + λₖxₖ) = λ₁T(x₁) + ⋯ + λₖT(xₖ). Setting λ = 0 shows that every linear map satisfies T(0) = 0.

A map f : V → W is affine if it preserves affine combinations, that is, combinations whose coefficients sum to 1. Concretely, we require f(λx + (1 − λ)y) = λf(x) + (1 − λ)f(y) for all x, y ∈ V and all λ ∈ F. Geometrically, f maps the line through x and y onto the line through f(x) and f(y), and it does so in a way that preserves ratios along the line.

Theorem 1.1 (Structure of affine maps)

A map f : V → W is affine if and only if there is a linear map L : V → W and a vector b ∈ W with f(x) = L(x) + b for every x. The pair (L, b) is unique: b = f(0) and L(x) = f(x) − f(0).

Proof. If f = L + b with L linear, then f(λx + (1 − λ)y) = λL(x) + (1 − λ)L(y) + b = λ(L(x) + b) + (1 − λ)(L(y) + b), so f is affine. Conversely, suppose f is affine and put L(x) = f(x) − f(0). Then L(0) = 0 and L is again affine (subtracting a constant preserves the defining identity because the coefficients sum to 1). For homogeneity, L(λx) = L(λx + (1 − λ)0) = λL(x) + (1 − λ)L(0) = λL(x). For additivity (assuming the characteristic of F is not 2, as for ℝ), L(x + y) = 2L(½x + ½y) = 2(½L(x) + ½L(y)) = L(x) + L(y). Hence L is linear and f = L + f(0). Uniqueness follows by evaluating at 0. ∎

The case V = ℝⁿ, W = ℝᵐ

Every vector x ∈ ℝⁿ is x = x₁e₁ + ⋯ + xₙeₙ, so a linear map satisfies T(x) = x₁T(e₁) + ⋯ + xₙT(eₙ). If A is the m × n matrix whose j-th column is T(eⱼ), this says exactly that T(x) = Ax. Thus linear maps ℝⁿ → ℝᵐ are in bijection with m × n matrices, and by Theorem 1.1 affine maps are exactly the maps x ↦ Ax + b. The school formula is the case m = n = 1, where A = (m) is the slope and b is the intercept.

Worked example. Consider f(x, y) = (2x − y + 3, x + 4y − 1). Here b = f(0, 0) = (3, −1) and the linear part has columns f(e₁) − b = (2, 1) and f(e₂) − b = (−1, 4), so

        f(x) = Ax + b,   A = [ 2  −1 ]    b = [  3 ]
                             [ 1   4 ]        [ −1 ]

For instance f(1, 2) = (2 − 2 + 3, 1 + 8 − 1) = (3, 8). The map is affine but not linear, since f(0) ≠ 0.

Cauchy's functional equation

On ℝ, which additive functions f(x + y) = f(x) + f(y) are linear? Additivity alone gives f(0) = 0, f(−x) = −f(x), f(nx) = nf(x) for integers n, and then f(p/q) = (p/q)f(1) for rationals, because q·f(p/q) = f(p) = p·f(1). So an additive function is ℚ-linear: f(qx) = qf(x) for q ∈ ℚ. If, in addition, f is continuous at a single point, then f(x) = cx with c = f(1), because both sides are continuous and agree on the dense set ℚ. The same conclusion follows from much weaker hypotheses: monotonicity on an interval, boundedness on a set of positive measure, or Lebesgue measurability (a theorem of Fréchet, Banach and Sierpiński from around 1920).

Without any regularity hypothesis the conclusion is false. Regard ℝ as a vector space over ℚ. By the axiom of choice it has a basis H (a Hamel basis, after Georg Hamel, 1905). Any function H → ℝ extends uniquely to a ℚ-linear map ℝ → ℝ; choosing f(h₀) = 1 and f(h₁) = 0 for two basis elements already produces an additive function that is not of the form cx. Such functions are wildly discontinuous: their graphs are dense in the plane (Problem 47). The moral is that "linear" depends on the field of scalars. Over ℚ there are vastly more linear maps ℝ → ℝ than over ℝ.

✏️ Your Turn

(a) Find A and b for the affine map f : ℝ² → ℝ² with f(0, 0) = (1, 2), f(1, 0) = (4, 2) and f(0, 1) = (0, 7).
(b) An additive function f : ℝ → ℝ satisfies f(1) = 3. Compute f(5/2), and explain why f(√2) cannot be determined without further hypotheses.
(c) Show that the map x ↦ x² is not affine on ℝ by testing the defining identity with x = 0, y = 2, λ = ½.

Answers: (a) b = (1, 2); the columns of A are f(e₁) − b = (3, 0) and f(e₂) − b = (−1, 5), so A has rows (3, −1) and (0, 5). (b) f(5/2) = (5/2)·3 = 15/2. Since √2 is irrational, ℚ-linearity says nothing about f(√2): in a Hamel basis containing 1 and √2 we may assign f(√2) any value. (c) The left side is f(1) = 1, the right side is ½·0 + ½·4 = 2; they differ.

─────────────────────────────────
Lesson 2: Vector Spaces, Bases and Dimension
─────────────────────────────────

📌 Key idea of this section:

        Every spanning set of V contains a basis; every independent set extends to one
        Steinitz exchange:  |independent set| ≤ |spanning set|
        Hence all bases have the same size, dim V

Vector spaces and subspaces

A vector space over F is a set V with an addition and a scalar multiplication satisfying the familiar eight axioms (associativity and commutativity of addition, a zero vector, additive inverses, and the distributive and unital laws for scalars). A subset U ⊆ V is a subspace if it contains 0 and is closed under addition and scalar multiplication. Examples include ℝⁿ; the space Pₙ of real polynomials of degree at most n; the space M_{m×n} of m × n matrices; the space C[0, 1] of continuous functions; and the solution set of any homogeneous linear system or homogeneous linear differential equation. The solution set of an inhomogeneous system Ax = b with b ≠ 0 is not a subspace but an affine subspace: a translate x₀ + ker A of a subspace, as we shall see in Lesson 6.

Span, independence, basis

The span of a set S ⊆ V is the set of all finite linear combinations of elements of S; it is the smallest subspace containing S. A set S is linearly independent if the only finite linear combination of distinct elements of S equal to 0 is the trivial one. A basis is an independent spanning set. Equivalently, B is a basis exactly when every v ∈ V can be written as a linear combination of elements of B in exactly one way; the coefficients are the coordinates of v with respect to B.

Lemma 2.1 (Steinitz exchange lemma)

Suppose u₁, …, uₖ are linearly independent in V and w₁, …, wₘ span V. Then k ≤ m, and after renumbering the wⱼ, the list u₁, …, uₖ, wₖ₊₁, …, wₘ also spans V.

Proof. Induct on k; the case k = 0 is trivial. Assume the statement for k − 1, so (after renumbering) u₁, …, uₖ₋₁, wₖ, …, wₘ spans V, and k − 1 ≤ m. Write uₖ = a₁u₁ + ⋯ + aₖ₋₁uₖ₋₁ + bₖwₖ + ⋯ + bₘwₘ. If all the bⱼ were zero (including the case where there are no w's left, that is k − 1 = m), uₖ would be a combination of u₁, …, uₖ₋₁, contradicting independence. Hence k ≤ m and some bⱼ ≠ 0; renumber so that bₖ ≠ 0. Solving for wₖ expresses it as a combination of u₁, …, uₖ, wₖ₊₁, …, wₘ, so this new list spans everything the old list spanned, namely V. ∎

Theorem 2.2 (Dimension)

If V has a finite spanning set, then V has a finite basis, and all bases of V have the same number of elements, called the dimension dim V. Moreover any independent set in V extends to a basis, and any spanning set contains a basis.

Proof. A spanning set can be pruned to a basis: repeatedly discard a vector that is a combination of the others; the process stops at an independent spanning set. If B and B′ are bases, Lemma 2.1 applied in both directions gives |B| ≤ |B′| and |B′| ≤ |B|. If u₁, …, uₖ is independent and w₁, …, wₘ is a basis, the lemma produces a spanning list u₁, …, uₖ, wₖ₊₁, …, wₘ of length m = dim V; a spanning list of length dim V is a basis (otherwise pruning would give a basis that is too short). ∎

Examples of dimension

        dim ℝⁿ = n                  dim Pₙ = n + 1     (basis 1, x, …, xⁿ)
        dim M_{m×n} = mn             dim of symmetric n × n matrices = n(n + 1)/2
        dim {y : y″ + y = 0} = 2     (basis cos t, sin t)
        dim of ℝ over ℚ = the cardinality of the continuum (infinite)

For spaces without a finite spanning set, Zorn's lemma shows that every vector space has a basis and that any two bases have the same cardinality. These infinite-dimensional "algebraic" bases are rarely useful in analysis, where one prefers topological notions such as Schauder bases or orthonormal bases of a Hilbert space, in which infinite convergent sums are allowed.

✏️ Your Turn

(a) Find the dimension of U = {p ∈ P₃ : p(1) = 0}.
(b) Are (1, 2, 3), (4, 5, 6), (7, 8, 9) linearly independent in ℝ³? If not, give an explicit dependence.
(c) Find the dimension of the space of 3 × 3 symmetric matrices and of 3 × 3 skew-symmetric matrices.

Answers: (a) dim U = 3: U is the kernel of the nonzero functional p ↦ p(1) on the 4-dimensional space P₃ (rank–nullity, Lesson 3), and a basis is x − 1, x² − 1, x³ − 1. (b) No: (7, 8, 9) = 2(4, 5, 6) − (1, 2, 3), that is (1, 2, 3) − 2(4, 5, 6) + (7, 8, 9) = 0. (c) Symmetric: 3·4/2 = 6. Skew-symmetric: 3·2/2 = 3. Together 6 + 3 = 9 = dim M₃ₓ₃, reflecting the decomposition A = ½(A + Aᵀ) + ½(A − Aᵀ).

─────────────────────────────────
Lesson 3: Kernel, Image and the Rank–Nullity Theorem
─────────────────────────────────

📌 Key idea of this section:

        For T : V → W linear with dim V finite,
        dim V = dim ker T + dim im T        (nullity + rank)

Kernel and image

For a linear map T : V → W, the kernel ker T = {v ∈ V : T(v) = 0} is a subspace of V, and the image im T = {T(v) : v ∈ V} is a subspace of W. Their dimensions are the nullity and the rank of T. The kernel measures failure of injectivity: T(x) = T(y) if and only if x − y ∈ ker T, so T is injective exactly when ker T = {0}. The full solution set of T(x) = w, when non-empty, is x₀ + ker T for any particular solution x₀. This is the abstract form of the familiar statement that the general solution of a linear system or linear differential equation is "particular solution plus general homogeneous solution".

Theorem 3.1 (Rank–nullity)

Let V be finite-dimensional and T : V → W linear. Then dim V = dim ker T + dim im T.

Proof. Choose a basis u₁, …, uₖ of ker T and extend it (Theorem 2.2) to a basis u₁, …, uₖ, v₁, …, vᵣ of V, so dim V = k + r. We claim that T(v₁), …, T(vᵣ) is a basis of im T, which gives rank T = r. Spanning: any w ∈ im T is w = T(Σaᵢuᵢ + Σbⱼvⱼ) = ΣbⱼT(vⱼ), since T(uᵢ) = 0. Independence: if ΣbⱼT(vⱼ) = 0, then T(Σbⱼvⱼ) = 0, so Σbⱼvⱼ ∈ ker T and Σbⱼvⱼ = Σaᵢuᵢ for some aᵢ. Then Σaᵢuᵢ − Σbⱼvⱼ = 0 is a dependence among basis vectors of V, forcing all bⱼ = 0. ∎

An equivalent formulation is the first isomorphism theorem: T induces an isomorphism V/ker T ≅ im T, and dim(V/U) = dim V − dim U for any subspace U.

Corollaries

  1. If dim V = dim W < ∞, then T is injective ⇔ T is surjective ⇔ T is bijective.
  2. If dim V > dim W, then T has a nontrivial kernel: a homogeneous system with more unknowns than equations has a nonzero solution.
  3. If dim V < dim W, then T is not surjective.
  4. For matrices, rank(AB) ≤ min(rank A, rank B) (Problem 22), and Sylvester's inequality rank A + rank B − n ≤ rank(AB) holds for A of size m × n and B of size n × p (Problem 23).

Corollary 1 is false in infinite dimensions: on the space of all polynomials, multiplication by x is injective but not surjective, and differentiation is surjective but not injective (Problem 59). Fredholm theory recovers a version of the statement for compact perturbations of the identity on Banach spaces: for such an operator I − K, injectivity and surjectivity are again equivalent (the Fredholm alternative).

Row rank equals column rank

For a real m × n matrix A, the column rank is the dimension of the column space im A ⊆ ℝᵐ, and the row rank is the dimension of the row space R ⊆ ℝⁿ spanned by the rows. A vector x lies in ker A exactly when it is orthogonal to every row, so ker A = R⊥. Since dim R + dim R⊥ = n, rank–nullity gives column rank = n − dim ker A = n − dim R⊥ = dim R. Hence the two ranks agree. (Over an arbitrary field the same argument works with the annihilator of Lesson 5 in place of the orthogonal complement.)

Worked example. Consider the matrix A shown below.

        A = [ 1  2  3 ]
            [ 2  4  6 ]
            [ 1  1  1 ]

The second row is twice the first, and the third is not a multiple of the first, so rank A = 2 and nullity = 3 − 2 = 1. To find the kernel, solve x + 2y + 3z = 0 and x + y + z = 0. Subtracting gives y + 2z = 0, so y = −2z and then x = −y − z = z. Hence ker A = span{(1, −2, 1)}. Check: 1 − 4 + 3 = 0, 2 − 8 + 6 = 0 and 1 − 2 + 1 = 0.

A second example: differentiation D : Pₙ → Pₙ has kernel the constants (dimension 1) and image Pₙ₋₁ (dimension n), and indeed n + 1 = 1 + n.

✏️ Your Turn

(a) Let T : P₃ → ℝ² be T(p) = (p(0), p(1)). Find the rank and nullity of T and a basis of ker T.
(b) A is a 5 × 7 matrix. What is the smallest possible nullity of A?
(c) For n ≥ 2, find the rank of the n × n matrix with entries aᵢⱼ = i + j.

Answers: (a) T is surjective (p = a + (b − a)x hits (a, b)), so rank 2 and nullity 4 − 2 = 2; a basis of the kernel is x² − x, x³ − x, since these vanish at 0 and 1 and are independent. (b) rank ≤ 5, so nullity = 7 − rank ≥ 2, and nullity 2 occurs when rank A = 5. (c) Row i equals i·(1, 1, …, 1) + (1, 2, …, n), so every row lies in the span of two independent vectors, and rows 1 and 2 are independent; the rank is 2.

─────────────────────────────────
Lesson 4: Matrices, Change of Basis and Similarity
─────────────────────────────────

📌 Key idea of this section:

        [T]_{C←B} has j-th column = C-coordinates of T(bⱼ)
        [S∘T] = [S][T]          (composition is matrix multiplication)
        Change of basis:  [T]_{B′} = P⁻¹ [T]_B P,  P = matrix whose columns are the B′ vectors in B-coordinates

Coordinates and matrices

Fix an ordered basis B = (b₁, …, bₙ) of V. The coordinate map v ↦ [v]_B ∈ Fⁿ is a linear isomorphism, so every n-dimensional space over F "is" Fⁿ once a basis is chosen. But the isomorphism depends on the choice, and much of linear algebra consists in choosing well. If C = (c₁, …, cₘ) is a basis of W and T : V → W is linear, the matrix of T is the m × n matrix [T]_{C←B} whose j-th column is [T(bⱼ)]_C. By construction [T(v)]_C = [T]_{C←B}[v]_B.

Theorem 4.1 (Composition)

If T : U → V and S : V → W are linear and A, B, C are bases of U, V, W, then [S∘T]_{C←A} = [S]_{C←B}[T]_{B←A}.

Proof. For any u ∈ U, [S(T(u))]_C = [S]_{C←B}[T(u)]_B = [S]_{C←B}[T]_{B←A}[u]_A. Applying this to the basis vectors of A identifies the columns of both sides. ∎

This theorem is the reason matrix multiplication is defined the way it is: the row-by-column rule is forced by the requirement that composition of maps correspond to the product of matrices. In particular matrix multiplication is associative because composition of functions is, and it is noncommutative because composition generally is.

Change of basis

Let B and B′ be two bases of V and let P = [id]_{B←B′} be the matrix whose j-th column is the B-coordinate vector of the j-th vector of B′. Then [v]_B = P[v]_{B′}, P is invertible, and for an operator T : V → V Theorem 4.1 gives

        [T]_{B′} = [id]_{B′←B} [T]_B [id]_{B←B′} = P⁻¹ [T]_B P.

Two square matrices A and A′ are similar if A′ = P⁻¹AP for some invertible P; similar matrices represent the same operator in different bases. Any quantity defined in terms of the operator alone, rather than its matrix, is therefore a similarity invariant: the rank, the determinant, the trace, the characteristic polynomial det(λI − A), the eigenvalues with their algebraic and geometric multiplicities, and the minimal polynomial. The complete classification of matrices up to similarity is given by the Jordan normal form over an algebraically closed field, or the rational canonical form over any field.

Worked example (diagonalisation). Let T : ℝ² → ℝ² have the standard matrix shown below.

        A = [ 3  1 ]
            [ 0  2 ]

Its eigenvalues are 3 and 2 (it is triangular). Eigenvectors: A(1, 0) = (3, 0) and A(1, −1) = (3 − 1, −2) = (2, −2) = 2(1, −1). With B′ = ((1, 0), (1, −1)) we have

        P = [ 1   1 ]     P⁻¹ = P  (since P² = I)     P⁻¹AP = [ 3  0 ]
            [ 0  −1 ]                                          [ 0  2 ]

Indeed AP has columns (3, 0) and (2, −2), and multiplying by P⁻¹ = P gives columns (3, 0) and (0, 2). In the eigenbasis the operator simply stretches the two axes by 3 and by 2. Trace 5 and determinant 6 are visible in both matrices.

Worked example (an operator on polynomials). On P₂ with basis (1, x, x²), differentiation D sends 1 ↦ 0, x ↦ 1, x² ↦ 2x. Reading off coordinate columns,

        [D] = [ 0  1  0 ]
              [ 0  0  2 ]
              [ 0  0  0 ]

The matrix is nilpotent ([D]³ = 0, matching the fact that three derivatives kill any quadratic), its trace is 0 and its rank is 2.

Why the trace is special

The trace satisfies tr(AB) = tr(BA), which immediately implies tr(P⁻¹AP) = tr(APP⁻¹) = tr A. Conversely, any linear functional φ on n × n matrices with φ(AB) = φ(BA) for all A, B is a scalar multiple of the trace (Problem 26). A famous consequence: there are no n × n matrices with AB − BA = I, because the left side has trace 0 and the right side has trace n (Problem 48). In quantum mechanics the canonical commutation relation [x, p] = iħ therefore forces infinite-dimensional state spaces.

✏️ Your Turn

(a) Find the matrix of T(p) = p′ + p on P₂ with respect to (1, x, x²), and its determinant.
(b) A 2 × 2 matrix B is similar to a matrix A with trace 7 and determinant 10. Find the eigenvalues of B.
(c) Let A have rows (4, −2) and (1, 1). Find an invertible P with P⁻¹AP diagonal.

Answers: (a) T(1) = 1, T(x) = 1 + x, T(x²) = 2x + x², so the matrix has rows (1, 1, 0), (0, 1, 2), (0, 0, 1); it is upper triangular with determinant 1. (b) B has characteristic polynomial λ² − 7λ + 10 = (λ − 2)(λ − 5), so eigenvalues 2 and 5. (c) The characteristic polynomial is λ² − 5λ + 6, with roots 2 and 3; eigenvectors are (1, 1) for 2 and (2, 1) for 3, so P with columns (1, 1) and (2, 1) gives P⁻¹AP = diag(2, 3).

─────────────────────────────────
Lesson 5: Dual Spaces and Linear Functionals
─────────────────────────────────

📌 Key idea of this section:

        V* = { linear maps V → F }       dim V* = dim V  (finite dimension)
        Dual basis:  φᵢ(bⱼ) = δᵢⱼ
        dim U⁰ = dim V − dim U,     V ≅ (V*)* canonically

Linear functionals

A linear functional on V is a linear map φ : V → F. On ℝⁿ every functional has the form φ(x) = a₁x₁ + ⋯ + aₙxₙ = aᵀx for a unique row vector aᵀ; this is the case m = 1 of Lesson 1, and it is what the school lesson calls a "linear expression" in several variables. On function spaces the functionals are more interesting: evaluation p ↦ p(t₀), differentiation followed by evaluation p ↦ p′(t₀), and integration p ↦ ∫₀¹ p(t) dt are all linear functionals on Pₙ. The set of all functionals is the dual space V*, a vector space under pointwise operations.

Theorem 5.1 (Dual basis)

Let B = (b₁, …, bₙ) be a basis of V. There are unique functionals φ₁, …, φₙ with φᵢ(bⱼ) = δᵢⱼ (1 if i = j, 0 otherwise), and they form a basis of V*. In particular dim V* = dim V.

Proof. A linear map is determined by, and may be freely prescribed on, a basis; so each φᵢ exists and is unique, namely φᵢ(v) = the i-th B-coordinate of v. If ψ ∈ V*, then ψ = Σψ(bᵢ)φᵢ, because both sides agree on every bⱼ; so the φᵢ span. If Σcᵢφᵢ = 0, evaluating at bⱼ gives cⱼ = 0; so they are independent. ∎

Computing a dual basis in ℝⁿ. If the basis vectors are the columns of an invertible matrix V, the dual basis functionals are the rows of V⁻¹, because V⁻¹V = I says precisely that (row i of V⁻¹)·(column j of V) = δᵢⱼ. For b₁ = (1, 1) and b₂ = (1, 2),

        V = [ 1  1 ]     V⁻¹ = [  2  −1 ]     φ₁(x, y) = 2x − y,   φ₂(x, y) = −x + y
            [ 1  2 ]           [ −1   1 ]

and one checks φ₁(1, 1) = 1, φ₁(1, 2) = 0, φ₂(1, 1) = 0, φ₂(1, 2) = 1.

Annihilators and the transpose

For a subspace U ⊆ V, the annihilator is U⁰ = {φ ∈ V* : φ(u) = 0 for all u ∈ U}. Extending a basis u₁, …, uₖ of U to a basis of V and taking the dual basis, one sees that U⁰ is spanned by the last n − k dual functionals, so dim U⁰ = dim V − dim U (Problem 27). Every subspace of dimension k is therefore the common zero set of n − k independent linear equations, and every hyperplane (subspace of dimension n − 1) is the kernel of a single nonzero functional, unique up to scaling.

A linear map T : V → W induces the transpose (or dual) map T* : W* → V*, T*(ψ) = ψ∘T. With respect to dual bases the matrix of T* is the transpose of the matrix of T (Problem 30). The identities ker T* = (im T)⁰ and im T* = (ker T)⁰ give another proof that row rank equals column rank.

The double dual

There is a natural linear map ι : V → (V*)*, ι(v)(φ) = φ(v). It is injective (if v ≠ 0, extend v to a basis and use the dual functional that is 1 on v), and when dim V < ∞ it is an isomorphism because dim (V*)* = dim V. This isomorphism requires no choice of basis, unlike the isomorphism V ≅ V* given by a dual basis; in the language of category theory, ι is a natural transformation while V ≅ V* is not. In infinite dimensions ι is never surjective: if V has an infinite basis, then V* has strictly larger dimension than V (the Erdős–Kaplansky theorem), and the coordinate functionals no longer span V* (Problem 49).

Inner products and the Riesz representation

On a finite-dimensional real inner product space, every functional is of the form φ(x) = ⟨x, a⟩ for a unique vector a: choose an orthonormal basis eᵢ and put a = Σφ(eᵢ)eᵢ. The same statement holds for continuous functionals on any Hilbert space (the Riesz representation theorem, 1907), and it is the reason that gradients exist: the derivative of a scalar function at a point is a functional (Lesson 7), and its Riesz representative is the gradient vector.

Application: quadrature rules as dual-space identities

On Pₙ the evaluations at n + 1 distinct points t₀, …, tₙ form a basis of Pₙ* (Problem 28). Its dual basis in Pₙ is the Lagrange basis ℓⱼ(t) = ∏_{i≠j} (t − tᵢ)/(tⱼ − tᵢ). Consequently every linear functional on Pₙ, in particular every integral, is a unique linear combination of point evaluations. For P₂ with nodes 0, 1, 2, write ∫₀² p(t) dt = c₀p(0) + c₁p(1) + c₂p(2) and test on the basis:

        p = 1:    2   = c₀ + c₁ + c₂
        p = t:    2   = c₁ + 2c₂
        p = t²:   8/3 = c₁ + 4c₂

Subtracting the second equation from the third gives 2c₂ = 2/3, so c₂ = 1/3, c₁ = 4/3 and c₀ = 1/3. This is Simpson's rule ∫₀² p ≈ (p(0) + 4p(1) + p(2))/3, exact on P₂ by construction. By symmetry it is also exact for t³ (∫₀² t³ dt = 4 and (0 + 4 + 8)/3 = 4), hence on P₃. Gaussian quadrature (Problem 29) pushes this idea further by choosing the nodes as well as the weights.

✏️ Your Turn

(a) Find the dual basis of b₁ = (1, 0), b₂ = (1, 1) in ℝ².
(b) U is a 2-dimensional subspace of ℝ⁵. What is dim U⁰? How many independent linear equations are needed to describe U?
(c) Find c₀, c₁ so that ∫₀¹ p(t) dt = c₀p(0) + c₁p(1) for every p ∈ P₁.

Answers: (a) V has columns (1, 0), (1, 1), and V⁻¹ has rows (1, −1) and (0, 1); so φ₁(x, y) = x − y and φ₂(x, y) = y. (b) dim U⁰ = 5 − 2 = 3, so U is the solution set of 3 independent homogeneous linear equations. (c) p = 1 gives c₀ + c₁ = 1 and p = t gives c₁ = 1/2, so c₀ = c₁ = 1/2: the trapezoidal rule.

─────────────────────────────────
Lesson 6: Affine Geometry
─────────────────────────────────

📌 Key idea of this section:

        Affine combination: λ₁p₁ + ⋯ + λₖpₖ with λ₁ + ⋯ + λₖ = 1
        Affine maps preserve affine combinations, parallelism and ratios along lines
        Aff(n) = { x ↦ Ax + b : A ∈ GL(n) },   dim Aff(n) = n² + n

Points versus vectors

Affine geometry is the geometry of a space with no preferred origin. Its objects are points; the difference of two points is a vector; and a point plus a vector is a point. One cannot meaningfully add two points, but one can form an affine combination λ₁p₁ + ⋯ + λₖpₖ with Σλᵢ = 1, because it equals p₁ + Σ_{i≥2} λᵢ(pᵢ − p₁), an expression involving only a point and vectors. The midpoint ½p + ½q and the centroid (p + q + r)/3 are affine combinations; the "sum" p + q is not.

An affine subspace of ℝⁿ is a set of the form x₀ + U with U a linear subspace (the direction of the affine subspace, uniquely determined); equivalently, a non-empty set closed under affine combinations. Its dimension is dim U. Points, lines and planes are affine subspaces of dimensions 0, 1, 2; the solution set of a consistent system Ax = b is the affine subspace x₀ + ker A; and an affine hyperplane is a set {x : aᵀx = c} with a ≠ 0, a level set of a nonzero linear functional.

Affine independence and barycentric coordinates

Points p₀, …, pₖ are affinely independent if the vectors p₁ − p₀, …, pₖ − p₀ are linearly independent; equivalently, if Σλᵢpᵢ = 0 with Σλᵢ = 0 forces all λᵢ = 0. In ℝⁿ at most n + 1 points can be affinely independent, and n + 1 affinely independent points form an affine frame. Every point x then has unique barycentric coordinates (λ₀, …, λₙ), Σλᵢ = 1, with x = Σλᵢpᵢ. For a triangle the barycentric coordinates are ratios of signed areas: λ_A = area(PBC)/area(ABC), and so on. The point lies inside the triangle exactly when all three coordinates are positive, and the centroid has coordinates (1/3, 1/3, 1/3). Barycentric coordinates are the workhorse of the finite element method and of computer graphics, where colours and textures are interpolated across triangles.

Worked example. Find the barycentric coordinates of P = (1, 1) with respect to A = (0, 0), B = (4, 0), C = (0, 2). Writing P = αA + βB + γC with α + β + γ = 1 gives 4β = 1 and 2γ = 1, so β = 1/4, γ = 1/2 and α = 1 − 1/4 − 1/2 = 1/4. All are positive, so P is interior. Check with areas: area(ABC) = 4, area(PBC) = ½|(4 − 1)(2 − 1) − (0 − 1)(0 − 1)| = ½|3 − 1| = 1, and 1/4 = α as claimed.

Affine maps

A map f between affine spaces is affine if it preserves affine combinations; by Theorem 1.1, on ℝⁿ this means f(x) = Ax + b. Affine maps send affine subspaces to affine subspaces, send parallel lines to parallel lines (or to points), and preserve ratios of lengths along a line (Problem 31), but in general they do not preserve angles, lengths or areas. Areas, and n-dimensional volumes, are all multiplied by the same factor |det A|. An affine map is determined by its values on an affine frame, and those values may be prescribed arbitrarily (Problem 32). Hence any triangle can be mapped onto any other, which is why every "affine" theorem about triangles (for example, the medians are concurrent at the point dividing each in the ratio 2 : 1) need only be proved for one convenient triangle, such as an equilateral one.

The affine group

The invertible affine maps of ℝⁿ form a group Aff(n) under composition: (A, b)∘(A′, b′) = (AA′, Ab′ + b). It is the semidirect product ℝⁿ ⋊ GL(n), and it embeds in GL(n + 1) through the homogeneous-coordinate trick

        x ↦ Ax + b    ⇔    [ x ]  ↦  [ A  b ] [ x ]
                            [ 1 ]      [ 0  1 ] [ 1 ]

which converts affine maps into linear ones in one higher dimension (Problem 33). Every computer graphics pipeline works in these coordinates. As a Lie group, Aff(n) has dimension n² + n: n² parameters for A and n for b.

Felix Klein's Erlangen programme of 1872 defined a geometry as the study of invariants of a group action. Euclidean geometry studies invariants of the isometry group (x ↦ Qx + b, Q orthogonal); affine geometry those of Aff(n); projective geometry those of the projective group. Each enlargement of the group discards invariants: lengths and angles are not affine invariants, but parallelism, midpoints and ratios of areas are.

Theorem 6.1 (Fundamental theorem of affine geometry, real case)

Let n ≥ 2. A bijection f : ℝⁿ → ℝⁿ that maps every line onto a line is affine.

We do not give the proof, which is a careful but elementary argument: such an f preserves parallelism, hence (by parallelogram constructions) it is additive after translating so that f(0) = 0, and it is ℚ-linear; a further argument shows that the induced map on scalars is a field automorphism of ℝ, and the only such automorphism is the identity, because it must preserve squares and hence the order. Over ℂ the analogous theorem allows semilinear maps such as complex conjugation.

✏️ Your Turn

(a) Find the barycentric coordinates of (2, 1) with respect to (0, 0), (4, 0), (0, 4).
(b) What is the dimension of the group Aff(3)?
(c) An affine map sends A = (0, 0) to (1, 1) and B = (2, 0) to (5, 3). Where does it send the midpoint of AB?

Answers: (a) 4β = 2 and 4γ = 1 give β = 1/2, γ = 1/4, α = 1/4. (b) 3² + 3 = 12. (c) Affine maps preserve midpoints, so the image is the midpoint of (1, 1) and (5, 3), namely (3, 2).

─────────────────────────────────
Lesson 7: The Derivative as the Best Linear Approximation
─────────────────────────────────

📌 Key idea of this section:

        f(a + h) = f(a) + Df(a)h + o(‖h‖)      as h → 0
        Df(a) is linear, represented by the Jacobian matrix [∂fᵢ/∂xⱼ(a)]
        Chain rule:  D(g∘f)(a) = Dg(f(a)) ∘ Df(a)

The Fréchet derivative

The school lesson computes the slope of a line. Calculus computes the slope of a curve by approximating the curve by a line. In several variables the correct generalisation of "slope" is not a number but a linear map. Let U ⊆ ℝⁿ be open and f : U → ℝᵐ. We say f is differentiable at a ∈ U if there is a linear map L : ℝⁿ → ℝᵐ such that

        lim_{h→0}  ‖f(a + h) − f(a) − Lh‖ / ‖h‖ = 0.

The map L is then unique and is called the derivative Df(a). The affine map h ↦ f(a) + Df(a)h is the best affine approximation to f near a: it is the only affine map whose error vanishes faster than ‖h‖.

Proof of uniqueness. If L and L′ both work, then ‖(L − L′)h‖/‖h‖ → 0 as h → 0, by the triangle inequality. Put h = tv for a fixed unit vector v and t → 0⁺; by linearity ‖(L − L′)(tv)‖/‖tv‖ = ‖(L − L′)v‖, which is constant in t and therefore 0. So Lv = L′v for every unit vector v, hence L = L′. ∎

Taking h = teⱼ shows that if f is differentiable then all partial derivatives exist and the matrix of Df(a) is the Jacobian matrix J_f(a) with entries ∂fᵢ/∂xⱼ(a). The converse fails: f(x, y) = xy/(x² + y²), f(0, 0) = 0, has both partial derivatives equal to 0 at the origin, yet it is not even continuous there, since f(t, t) = 1/2 for all t ≠ 0 (Problem 34). A useful sufficient condition is that all partial derivatives exist near a and are continuous at a.

Theorem 7.1 (Chain rule)

If f is differentiable at a and g is differentiable at f(a), then g∘f is differentiable at a and D(g∘f)(a) = Dg(f(a))∘Df(a). In matrices, J_{g∘f}(a) = J_g(f(a))·J_f(a).

The proof is an estimate: write f(a + h) = f(a) + Df(a)h + r(h) and g(f(a) + k) = g(f(a)) + Dg(f(a))k + s(k), with r(h) = o(‖h‖) and s(k) = o(‖k‖); substitute k = Df(a)h + r(h), note that ‖k‖ ≤ C‖h‖ for small h, and collect the error terms. The conceptual content is the slogan "the linearisation of a composition is the composition of the linearisations". For affine functions on ℝ this is the school fact that the slope of f∘g is the product of the slopes.

Worked example. Let f(x, y) = (x²y, x + y³) and a = (1, 2). Then

        J_f(x, y) = [ 2xy   x²  ]       J_f(1, 2) = [ 4   1 ]
                    [ 1     3y² ]                   [ 1  12 ]

Also f(1, 2) = (2, 9). To approximate f(1.1, 1.9), take h = (0.1, −0.1): J_f(1, 2)h = (0.4 − 0.1, 0.1 − 1.2) = (0.3, −1.1), so f(1.1, 1.9) ≈ (2.3, 7.9). The exact value is (1.21·1.9, 1.1 + 6.859) = (2.299, 7.959). The errors 0.001 and 0.059 are of second order in h, as the theory predicts.

The inverse and implicit function theorems

A linear map is invertible if and only if its determinant is nonzero. The inverse function theorem says that this linear criterion controls the nonlinear map locally: if f is C¹ near a and det J_f(a) ≠ 0, then f restricts to a C¹ bijection from a neighbourhood of a onto a neighbourhood of f(a), and D(f⁻¹)(f(a)) = Df(a)⁻¹. In the example above det J_f(1, 2) = 48 − 1 = 47 ≠ 0, so f is locally invertible near (1, 2). The implicit function theorem is the analogous statement for solving F(x, y) = 0 for y in terms of x, under the hypothesis that the partial Jacobian ∂F/∂y is invertible; it is the nonlinear version of solving a linear system by rank–nullity.

Newton's method

To solve F(x) = 0, replace F by its linearisation at the current guess and solve the linear problem exactly:

        xₖ₊₁ = xₖ − J_F(xₖ)⁻¹ F(xₖ).

In one variable this is xₖ₊₁ = xₖ − F(xₖ)/F′(xₖ), the x-intercept of the tangent line. If F is C² near a root x* with J_F(x*) invertible, Newton's method converges quadratically from any starting point close enough to x*: ‖xₖ₊₁ − x*‖ ≤ C‖xₖ − x*‖², so the number of correct digits roughly doubles at each step (Problem 51). For F(x) = x² − 2 the iteration is xₖ₊₁ = (xₖ + 2/xₖ)/2, the Babylonian method; from x₀ = 1 it gives 1.5, 1.41666…, 1.41421568…, compared with √2 = 1.41421356…. Kantorovich's theorem (1948) gives verifiable conditions at the starting point that guarantee convergence.

✏️ Your Turn

(a) Compute the Jacobian determinant of the polar-coordinate map (r, θ) ↦ (r cos θ, r sin θ).
(b) Find the linearisation of f(x, y) = x eʸ at (2, 0) and use it to estimate f(2.1, 0.05).
(c) Perform one Newton step for x³ − 2 = 0 from x₀ = 1.

Answers: (a) The Jacobian has rows (cos θ, −r sin θ) and (sin θ, r cos θ), with determinant r cos² θ + r sin² θ = r. (b) f(2, 0) = 2, fₓ = eʸ = 1 and f_y = x eʸ = 2 at (2, 0), so L(x, y) = 2 + (x − 2) + 2y; L(2.1, 0.05) = 2 + 0.1 + 0.1 = 2.2, compared with the exact 2.1·exp(0.05) ≈ 2.2077. (c) x₁ = 1 − (1 − 2)/(3·1²) = 1 + 1/3 = 4/3.

─────────────────────────────────
Lesson 8: Least Squares and Orthogonal Projection
─────────────────────────────────

📌 Key idea of this section:

        minimise ‖Ax − b‖²   ⇔   AᵀA x̂ = Aᵀb      (normal equations)
        A x̂ = Pb is the orthogonal projection of b onto the column space of A
        If A has full column rank:  x̂ = (AᵀA)⁻¹Aᵀb,   P = A(AᵀA)⁻¹Aᵀ

Overdetermined systems

A system Ax = b with A of size m × n and m > n typically has no solution: there are more equations than unknowns, and the column space of A is a proper subspace of ℝᵐ that b usually misses. This is the normal situation when fitting a model to data. If we measure points (xᵢ, yᵢ), i = 1, …, m, and seek a line y = c + mx through all of them, we obtain m equations in the two unknowns c, m, and the data are almost never exactly collinear. The method of least squares, published by Adrien-Marie Legendre in 1805 and justified probabilistically by Carl Friedrich Gauss in 1809 (who claimed to have used it since 1795, notably to predict the return of the asteroid Ceres in 1801), replaces the unsolvable system by the problem of minimising the sum of squared residuals ‖Ax − b‖².

Theorem 8.1 (Normal equations)

A vector x̂ minimises ‖Ax − b‖² over ℝⁿ if and only if AᵀAx̂ = Aᵀb. Such an x̂ always exists. It is unique if and only if the columns of A are linearly independent, in which case x̂ = (AᵀA)⁻¹Aᵀb.

Proof. Suppose AᵀAx̂ = Aᵀb, so the residual r = b − Ax̂ satisfies Aᵀr = 0, meaning r is orthogonal to every column of A and hence to the column space. For any x, the vector A(x̂ − x) lies in the column space, so by Pythagoras

        ‖Ax − b‖² = ‖A(x − x̂) − r‖² = ‖A(x − x̂)‖² + ‖r‖² ≥ ‖r‖² = ‖Ax̂ − b‖²,

with equality exactly when A(x − x̂) = 0. So x̂ is a minimiser, and the minimisers are precisely x̂ + ker A, which all satisfy the normal equations. Existence: the column space of AᵀA equals the column space of Aᵀ (Problem 37 shows rank AᵀA = rank A, and im AᵀA ⊆ im Aᵀ always), so Aᵀb lies in the image of AᵀA. Finally, ker AᵀA = ker A: if AᵀAx = 0 then ‖Ax‖² = xᵀAᵀAx = 0. Hence AᵀA is invertible exactly when ker A = {0}. ∎

The projection interpretation

Geometrically, Ax̂ is the point of the column space closest to b, and b − Ax̂ is perpendicular to that subspace. When A has full column rank the map b ↦ Ax̂ is the linear map P = A(AᵀA)⁻¹Aᵀ, which statisticians call the hat matrix because it "puts the hat on y". It satisfies P² = P and Pᵀ = P, and conversely every symmetric idempotent matrix is the orthogonal projection onto its image (Problem 39). Its trace equals its rank, n. The residual map I − P projects onto the orthogonal complement of the column space.

Simple linear regression

For the model y ≈ c + mx with data (x₁, y₁), …, (x_N, y_N), the columns of A are (1, …, 1) and (x₁, …, x_N), and the normal equations are

        N c   + (Σxᵢ) m  = Σyᵢ
        (Σxᵢ) c + (Σxᵢ²) m = Σxᵢyᵢ

Eliminating c gives the familiar formulas m = S_xy/S_xx and c = ȳ − m x̄, where x̄, ȳ are the means, S_xx = Σ(xᵢ − x̄)² and S_xy = Σ(xᵢ − x̄)(yᵢ − ȳ). The first normal equation says the residuals sum to zero, so the fitted line passes through the centroid (x̄, ȳ) of the data (Problem 40).

Worked example. Fit a line to (1, 6), (2, 5), (3, 7), (4, 10), the data shown in the picture accompanying this course. Here x̄ = 2.5, ȳ = 7, S_xx = 2.25 + 0.25 + 0.25 + 2.25 = 5 and S_xy = (−1.5)(−1) + (−0.5)(−2) + (0.5)(0) + (1.5)(3) = 1.5 + 1 + 0 + 4.5 = 7. So m = 7/5 = 1.4 and c = 7 − 1.4·2.5 = 3.5: the least-squares line is y = 3.5 + 1.4x. As a check against the normal equations: Σxᵢ = 10, Σxᵢ² = 30, Σyᵢ = 28, Σxᵢyᵢ = 6 + 10 + 21 + 40 = 77, and indeed 4(3.5) + 10(1.4) = 28 and 10(3.5) + 30(1.4) = 77. The residuals are 1.1, −1.3, −0.7, 0.9; they sum to 0, their x-weighted sum 1.1 − 2.6 − 2.1 + 3.6 is 0, and the residual sum of squares is 1.21 + 1.69 + 0.49 + 0.81 = 4.2.

Numerical practice

Forming AᵀA squares the condition number of the problem: if A has singular values σ₁ ≥ ⋯ ≥ σₙ > 0, then κ(AᵀA) = (σ₁/σₙ)² = κ(A)². Numerically stable algorithms therefore avoid the normal equations. With a QR factorisation A = QR (Q with orthonormal columns, R upper triangular and invertible), the normal equations become Rx̂ = Qᵀb, solved by back substitution. With the singular value decomposition A = UΣVᵀ, the minimum-norm least-squares solution, valid even when A is rank-deficient, is x̂ = A⁺b, where A⁺ = VΣ⁺Uᵀ is the Moore–Penrose pseudoinverse and Σ⁺ inverts the nonzero singular values.

Least squares is the special case p = 2 of fitting in the ℓᵖ norm. The ℓ¹ problem (least absolute deviations) and the ℓ∞ problem (Chebyshev or minimax fitting) are not solved by linear equations but are linear programmes (Lesson 10 and Problem 56); for a constant model, ℓ² fitting gives the mean and ℓ¹ fitting gives a median.

✏️ Your Turn

(a) Fit the line y = mx through the origin to (1, 2), (2, 3), (3, 7).
(b) Project b = (1, 2, 3) orthogonally onto the line spanned by (1, 1, 1).
(c) Find the least-squares line for (0, 0), (1, 1), (2, 3).

Answers: (a) Here A is the single column (1, 2, 3), so m = Σxᵢyᵢ/Σxᵢ² = (2 + 6 + 21)/14 = 29/14. (b) The projection onto span{u} is (uᵀb/uᵀu)u = (6/3)(1, 1, 1) = (2, 2, 2). (c) x̄ = 1, ȳ = 4/3, S_xx = 2, S_xy = (−1)(−4/3) + 0 + (1)(5/3) = 3, so m = 3/2 and c = 4/3 − 3/2 = −1/6: y = −1/6 + (3/2)x.

─────────────────────────────────
Lesson 9: The Gauss–Markov Theorem
─────────────────────────────────

📌 Key idea of this section:

        Model:  y = Xβ + ε,   E[ε] = 0,   Cov(ε) = σ²I,   X of full column rank p
        OLS:    β̂ = (XᵀX)⁻¹Xᵀy,   E[β̂] = β,   Cov(β̂) = σ²(XᵀX)⁻¹
        Gauss–Markov:  β̂ is the Best Linear Unbiased Estimator (BLUE)

The linear model

Lesson 8 treated least squares as geometry. Statistics asks why it is a good idea. In the linear model an n-vector of observations y is generated as y = Xβ + ε, where X is a known n × p design matrix of full column rank, β ∈ ℝᵖ is an unknown parameter, and ε is a random error vector. The Gauss–Markov assumptions are that the errors have mean zero, E[ε] = 0, and are uncorrelated with common variance, Cov(ε) = E[εεᵀ] = σ²I (homoscedasticity). No normality is assumed.

An estimator β̃ of β is linear if β̃ = Cy for a fixed p × n matrix C, and unbiased if E[β̃] = β for every β. Since E[Cy] = CXβ, a linear estimator is unbiased exactly when CX = I. The ordinary least squares (OLS) estimator β̂ = (XᵀX)⁻¹Xᵀy is linear, with C₀ = (XᵀX)⁻¹Xᵀ, and unbiased because C₀X = I. Its covariance is

        Cov(β̂) = C₀ Cov(y) C₀ᵀ = σ² (XᵀX)⁻¹XᵀX(XᵀX)⁻¹ = σ²(XᵀX)⁻¹.

For symmetric matrices write M ⪰ N if M − N is positive semidefinite. This is the natural order on covariance matrices: M ⪰ N means that every linear combination aᵀβ̃ has at least as large a variance under M as under N.

Theorem 9.1 (Gauss–Markov)

Under the Gauss–Markov assumptions, every linear unbiased estimator β̃ = Cy satisfies Cov(β̃) ⪰ Cov(β̂). Consequently, for every vector a, the estimator aᵀβ̂ has the smallest variance among all linear unbiased estimators of aᵀβ.

Proof. Write C = C₀ + D. Unbiasedness gives CX = I = C₀X, so DX = 0. Then

        Cov(β̃) = σ²CCᵀ = σ²(C₀C₀ᵀ + C₀Dᵀ + DC₀ᵀ + DDᵀ).

Now DC₀ᵀ = DX(XᵀX)⁻¹ = 0, and C₀Dᵀ is its transpose, so Cov(β̃) = σ²(XᵀX)⁻¹ + σ²DDᵀ. The matrix DDᵀ is positive semidefinite, since aᵀDDᵀa = ‖Dᵀa‖² ≥ 0. Hence Cov(β̃) − Cov(β̂) = σ²DDᵀ ⪰ 0, with equality only if D = 0, that is β̃ = β̂. The second statement follows because Var(aᵀβ̃) = aᵀCov(β̃)a. ∎

Estimating the error variance

The fitted values are ŷ = Hy with H = X(XᵀX)⁻¹Xᵀ, and the residual vector is e = (I − H)y. Since (I − H)X = 0, we have e = (I − H)ε, and the residual sum of squares is RSS = eᵀe = εᵀ(I − H)ε, because I − H is symmetric and idempotent.

Theorem 9.2

The estimator σ̂² = RSS/(n − p) is unbiased for σ².

Proof. For any fixed matrix M, E[εᵀMε] = E[tr(Mεεᵀ)] = tr(M E[εεᵀ]) = σ² tr M. With M = I − H we get E[RSS] = σ²(n − tr H) = σ²(n − p), since tr H = tr((XᵀX)⁻¹XᵀX) = tr I_p = p. ∎

The divisor n − p, the degrees of freedom, is the dimension of the orthogonal complement of the column space into which the residual is projected. For the worked example of Lesson 8 (n = 4, p = 2, RSS = 4.2) the estimate is σ̂² = 2.1. In simple regression the slope has variance σ²/S_xx, so its estimated standard error is √(2.1/5) = √0.42 ≈ 0.648.

Beyond Gauss–Markov

Each hypothesis of the theorem is essential, and relaxing each leads to an important theory.

  1. Correlated or heteroscedastic errors. If Cov(ε) = σ²Ω with Ω known and positive definite, OLS is still unbiased but no longer best. The best linear unbiased estimator is the generalised least squares estimator β̂_GLS = (XᵀΩ⁻¹X)⁻¹XᵀΩ⁻¹y (Aitken, 1935), obtained by applying OLS after transforming by the inverse square root of Ω (Problem 52).
  2. Normality. If in addition ε is Gaussian, then β̂ is the maximum-likelihood estimator and, by the Lehmann–Scheffé theorem, it is the minimum-variance unbiased estimator among all unbiased estimators, linear or not. Gauss's own 1809 argument went in the reverse direction: he asked which error law makes the arithmetic mean the most probable value, and found the normal distribution.
  3. Unbiasedness. Dropping unbiasedness can reduce the mean squared error. Ridge regression (XᵀX + λI)⁻¹Xᵀy trades bias for variance, and the James–Stein phenomenon (1956, 1961) shows that when estimating three or more means simultaneously, the obvious unbiased estimator is inadmissible under squared-error loss.
  4. Linearity. Without normality there can be nonlinear unbiased estimators that beat OLS; the restriction to linear estimators is what makes the theorem hold under only second-moment assumptions.

✏️ Your Turn

(a) A regression has n = 10 observations and p = 3 parameters. What is tr H, and what is the divisor in σ̂²?
(b) In simple regression σ² = 4 and S_xx = 16. Find the variance of the OLS slope.
(c) In the model yᵢ = μ + εᵢ (i = 1, …, n), identify X and show that the BLUE of μ is the sample mean.

Answers: (a) tr H = p = 3, and the divisor is n − p = 7. (b) σ²/S_xx = 4/16 = 1/4. (c) X is the n × 1 column of ones, XᵀX = n and Xᵀy = Σyᵢ, so β̂ = (1/n)Σyᵢ = ȳ, which by Gauss–Markov has variance σ²/n, the smallest among linear unbiased estimators.

─────────────────────────────────
Lesson 10: Linear Programming and the Simplex Method
─────────────────────────────────

📌 Key idea of this section:

        maximise cᵀx   subject to   Ax ≤ b,  x ≥ 0
        The feasible region is a polyhedron; a bounded optimum is attained at a vertex
        Simplex method: walk from vertex to adjacent vertex, improving the objective

Linear programmes

A linear programme (LP) optimises a linear objective over a set described by finitely many linear inequalities and equations. In the form used here, we seek to maximise cᵀx subject to Ax ≤ b and x ≥ 0, with A an m × n matrix. Any LP can be brought to this form by standard tricks: an equation is two inequalities, a free variable is a difference of two nonnegative ones, and minimising cᵀx is maximising −cᵀx. The subject was created in the Second World War era for planning problems. Leonid Kantorovich formulated production-planning LPs in 1939, George Dantzig invented the simplex method in 1947, and John von Neumann conjectured the duality theorem in the same year. Kantorovich and Tjalling Koopmans shared the 1975 Nobel prize in economics for the theory of optimal allocation of resources.

Polyhedra and vertices

The feasible region P = {x : Ax ≤ b, x ≥ 0} is a polyhedron: an intersection of finitely many closed half-spaces {x : aᵀx ≤ β}. It is convex, since each half-space is. A point v ∈ P is a vertex (extreme point) if it is not a proper convex combination of two other points of P. Algebraically, v is a vertex exactly when the constraints active at v (those holding with equality) include n whose normal vectors are linearly independent; then v is the unique solution of those n equations. Since there are finitely many ways to choose n constraints out of m + n, a polyhedron has finitely many vertices.

Theorem 10.1 (Fundamental theorem of linear programming)

If an LP over a polyhedron P that contains no line has a finite optimal value, the optimum is attained at a vertex of P.

Proof sketch. The set F of optimal points is a non-empty polyhedron (P intersected with the hyperplane cᵀx = z*), and any vertex of F is a vertex of P, because if a point of F is a proper convex combination of two points of P, both points must also be optimal and hence lie in F. Take x ∈ F with the largest possible rank r of the active constraints of F at x. If r < n, there is a nonzero direction d orthogonal to all active normals; moving along x + td stays in F until a new constraint becomes active, which must happen in one direction or the other because F contains no line. The new point has larger rank, a contradiction. So r = n and x is a vertex. ∎

The polyhedron {Ax ≤ b, x ≥ 0} never contains a line (the constraints x ≥ 0 forbid it), so the theorem applies to every LP in our form.

A worked example

Maximise z = 3x + 2y subject to x + y ≤ 4, x + 3y ≤ 7, x ≤ 3, x ≥ 0, y ≥ 0. The vertices of the feasible pentagon and the objective values are

        (0, 0):     z = 0
        (3, 0):     z = 9
        (3, 1):     z = 11     (x = 3 and x + y = 4)
        (5/2, 3/2): z = 21/2   (x + y = 4 and x + 3y = 7)
        (0, 7/3):   z = 14/3

so the optimum is z = 11 at (3, 1). Optimality can be certified without listing vertices: at (3, 1) the active constraints are x ≤ 3 and x + y ≤ 4, and the objective gradient (3, 2) = 1·(1, 0) + 2·(1, 1) is a nonnegative combination of their outward normals. So no feasible direction can increase z. The multipliers 1 and 2 are the dual solution of Lesson 11.

The simplex method

The simplex method makes this search systematic. Introduce slack variables s₁ = 4 − x − y, s₂ = 7 − x − 3y, s₃ = 3 − x, all required to be nonnegative, and write the objective in terms of the current nonbasic variables, which are set to zero; the starting vertex is the origin, where z = 3x + 2y = 0.

Pivot 1. The coefficient of x in z is positive, so increasing x improves z. The ratio test asks how far x can grow before a basic variable becomes negative: s₁ allows x ≤ 4, s₂ allows x ≤ 7, s₃ allows x ≤ 3. The minimum is 3, so x enters and s₃ leaves: x = 3 − s₃, and substituting gives

        s₁ = 1 + s₃ − y,    s₂ = 4 + s₃ − 3y,    z = 9 − 3s₃ + 2y.

Pivot 2. Now y has a positive coefficient. The ratio test gives y ≤ 1 (from s₁) and y ≤ 4/3 (from s₂), so y enters and s₁ leaves: y = 1 + s₃ − s₁. Substituting,

        z = 11 − 2s₁ − s₃,    s₂ = 1 + 3s₁ − 2s₃,    x = 3 − s₃.

All coefficients in the objective row are now negative, so no move improves z, and the vertex (x, y) = (3, 1) with z = 11 is optimal. The negatives of the slack coefficients, 2, 0 and 1, are again the dual prices.

Each pivot moves along an edge of the polyhedron to an adjacent vertex with a larger (or, at a degenerate vertex, equal) objective value. Degeneracy can make the naive method cycle forever; Bland's rule (1977), always choosing the eligible variable with the smallest index, prevents cycling, so the method terminates in finitely many steps.

Complexity

The simplex method is extraordinarily fast in practice, typically needing a small multiple of m pivots, yet Klee and Minty (1972) constructed deformed cubes on which Dantzig's pivoting rule visits all 2ⁿ vertices. Whether some pivoting rule runs in polynomial time is open, and is linked to the polynomial Hirsch conjecture on diameters of polytopes (the original Hirsch conjecture was disproved by Francisco Santos in 2010). The first polynomial-time algorithm for LP was Khachiyan's ellipsoid method (1979); Karmarkar's interior-point method (1984) was the first that was also practical. Spielman and Teng's smoothed analysis (2001) explained the practical success of simplex: under small random perturbations of the data, its expected running time is polynomial. Whether LP admits a strongly polynomial algorithm, one whose number of arithmetic operations is bounded by a polynomial in m and n alone, is one of Smale's eighteen problems for the twenty-first century.

✏️ Your Turn

(a) Maximise x + 2y subject to x + y ≤ 5, y ≤ 3, x, y ≥ 0, by listing vertices.
(b) In the worked example, which constraint is slack at the optimum, and by how much?
(c) Explain why the LP "maximise x subject to x − y ≤ 1, x, y ≥ 0" has no vertex at which the optimum is attained.

Answers: (a) The vertices are (0, 0), (5, 0), (2, 3), (0, 3), with values 0, 5, 8, 6; the maximum is 8 at (2, 3). (b) x + 3y ≤ 7 has x + 3y = 6 at (3, 1), so it is slack by 1 (s₂ = 1). (c) The objective is unbounded: (t + 1, t) is feasible for every t ≥ 0 with value t + 1 → ∞. Theorem 10.1 needs a finite optimal value.

─────────────────────────────────
Lesson 11: Duality, Farkas' Lemma and Complementary Slackness
─────────────────────────────────

📌 Key idea of this section:

        Primal:  max cᵀx   s.t.  Ax ≤ b, x ≥ 0
        Dual:    min bᵀy   s.t.  Aᵀy ≥ c, y ≥ 0
        Weak duality cᵀx ≤ bᵀy;  strong duality: the optimal values are equal

The dual programme

Every LP comes with a partner. To the primal problem max {cᵀx : Ax ≤ b, x ≥ 0} associate the dual problem min {bᵀy : Aᵀy ≥ c, y ≥ 0}. The dual variables yᵢ are multipliers for the primal constraints: if we multiply the i-th constraint by yᵢ ≥ 0 and add, we obtain yᵀAx ≤ yᵀb, and when Aᵀy ≥ c the left side dominates cᵀx for every x ≥ 0. The dual asks for the best upper bound obtainable this way. The dual of the dual is the primal.

Theorem 11.1 (Weak duality)

If x is primal feasible and y is dual feasible, then cᵀx ≤ bᵀy.

Proof. cᵀx ≤ (Aᵀy)ᵀx = yᵀ(Ax) ≤ yᵀb. The first inequality uses Aᵀy ≥ c and x ≥ 0; the second uses Ax ≤ b and y ≥ 0. ∎

Consequently, if feasible x and y have equal objective values, both are optimal; if the primal is unbounded, the dual is infeasible; and if the dual is unbounded below, the primal is infeasible.

Theorem 11.2 (Farkas' lemma, 1902)

For a matrix A and a vector b, exactly one of the following holds: (i) there is x ≥ 0 with Ax = b; (ii) there is y with Aᵀy ≥ 0 and bᵀy < 0.

Proof. Both cannot hold, since then 0 > bᵀy = (Ax)ᵀy = xᵀ(Aᵀy) ≥ 0. Suppose (i) fails, so b lies outside the cone K = {Ax : x ≥ 0}. This cone is convex and closed (a finitely generated cone is closed; this is the one nontrivial technical point, proved via Carathéodory's theorem). By the separating hyperplane theorem there is y with yᵀb < yᵀz for all z ∈ K. Taking z = 0 gives yᵀb < 0. If yᵀz < 0 for some z ∈ K, then scaling z by a large positive factor would make yᵀ(tz) smaller than yᵀb, a contradiction; so yᵀz ≥ 0 for all z ∈ K, and in particular for the columns of A, which says Aᵀy ≥ 0. ∎

The vector y in (ii) is a certificate of infeasibility: a combination of the equations that produces an obviously contradictory consequence. Farkas' lemma is the linear-inequality analogue of the Fredholm alternative "Ax = b is solvable if and only if b is orthogonal to every solution of Aᵀy = 0".

Theorem 11.3 (Strong duality)

If the primal has a finite optimal value, then so does the dual, and the two optimal values are equal. If either problem is infeasible, the other is either infeasible or unbounded.

Idea of proof. Let z* be the primal optimum. For every ε > 0 the system Ax ≤ b, cᵀx ≥ z* + ε, x ≥ 0 is infeasible; after adding slack variables, Farkas' lemma produces a nonnegative combination of the constraints certifying this, and normalising that combination gives a dual feasible y with bᵀy < z* + ε. Combined with weak duality and the fact that the dual optimum is attained (it is an LP with finite value, so Theorem 10.1 applies), this yields equality. A constructive proof comes from the simplex method itself: at an optimal tableau the negatives of the slack coefficients in the objective row form an optimal dual solution, exactly as observed in Lesson 10.

Complementary slackness

From the proof of weak duality, equality cᵀx = bᵀy holds if and only if both inequalities in the chain are equalities, which unpacks to the following conditions (Problem 54).

        yᵢ > 0   ⇒   the i-th primal constraint is tight:   (Ax)ᵢ = bᵢ
        xⱼ > 0   ⇒   the j-th dual constraint is tight:     (Aᵀy)ⱼ = cⱼ

Worked example. The dual of the Lesson 10 problem is: minimise 4y₁ + 7y₂ + 3y₃ subject to y₁ + y₂ + y₃ ≥ 3, y₁ + 3y₂ ≥ 2, y ≥ 0. At the primal optimum (3, 1), the constraint x + 3y ≤ 7 is slack, so y₂ = 0; and x, y > 0 force both dual constraints to be tight: y₁ + y₃ = 3 and y₁ = 2. Hence y = (2, 0, 1), which is feasible with dual value 4·2 + 0 + 3·1 = 11, equal to the primal value. Both solutions are thereby proved optimal.

Economic and combinatorial meaning

If bᵢ is the available amount of resource i and cⱼ the profit per unit of product j, then the optimal dual variable yᵢ is the shadow price of resource i: the rate at which the optimal profit increases per additional unit of bᵢ (for small changes that do not alter the optimal basis). In the example, an extra unit of the first resource is worth 2, an extra unit of the third is worth 1, and the second resource, not fully used, is worth nothing. Duality also unifies classical min–max theorems of combinatorics and game theory: the max-flow min-cut theorem, König's theorem on bipartite matchings, and von Neumann's minimax theorem for two-person zero-sum games are all instances of LP duality.

✏️ Your Turn

(a) Write the dual of: maximise x₁ + x₂ subject to x₁ + 2x₂ ≤ 4, 3x₁ + x₂ ≤ 6, x ≥ 0. Solve both problems and confirm that the values agree.
(b) Find a Farkas certificate showing that x₁ + x₂ = 1, x₁ − x₂ = 3, x₁, x₂ ≥ 0 has no solution.

Answers: (a) Dual: minimise 4y₁ + 6y₂ subject to y₁ + 3y₂ ≥ 1, 2y₁ + y₂ ≥ 1, y ≥ 0. Primal: the vertices (0, 0), (2, 0), (8/5, 6/5), (0, 2) give 0, 2, 14/5, 2, so the optimum is 14/5 at (8/5, 6/5). Both xⱼ are positive, so both dual constraints are tight: y₁ + 3y₂ = 1 and 2y₁ + y₂ = 1 give y = (2/5, 1/5), which is feasible with value 8/5 + 6/5 = 14/5. (b) Take y = (1, −1): Aᵀy = (1 − 1, 1 + 1) = (0, 2) ≥ 0 and bᵀy = 1 − 3 = −2 < 0. In words: subtracting the second equation from the first gives 2x₂ = −2, impossible for x₂ ≥ 0.

─────────────────────────────────
Lesson 12: Lipschitz and Piecewise-Linear Functions
─────────────────────────────────

📌 Key idea of this section:

        f is L-Lipschitz  ⇔  ‖f(x) − f(y)‖ ≤ L‖x − y‖ for all x, y
        Lip(x ↦ Ax + b) = ‖A‖ = σ_max(A) = √λ_max(AᵀA)
        Continuous piecewise-linear f on ℝ:  f(x) = α + βx + Σ dᵢ ReLU(x − tᵢ)

Lipschitz functions

A function f between normed spaces is Lipschitz with constant L if ‖f(x) − f(y)‖ ≤ L‖x − y‖ for all x and y; the smallest such L is the Lipschitz constant Lip(f). Lipschitz continuity is the quantitative form of continuity that is closest to linearity: an affine map is Lipschitz, a composition of Lipschitz maps is Lipschitz with Lip(g∘f) ≤ Lip(g)Lip(f), and by the mean value inequality a C¹ function on a convex set with ‖Df(x)‖ ≤ L everywhere is L-Lipschitz. Conversely, Rademacher's theorem (1919) states that a Lipschitz function ℝⁿ → ℝᵐ is differentiable almost everywhere, so a Lipschitz function is "linear on infinitesimal scales" at almost every point.

Theorem 12.1 (The operator norm)

For a real m × n matrix A and Euclidean norms, Lip(x ↦ Ax + b) = ‖A‖ := max_{‖x‖=1} ‖Ax‖ = √λ_max(AᵀA), the largest singular value of A.

Proof. ‖(Ax + b) − (Ay + b)‖ = ‖A(x − y)‖, so the Lipschitz constant is sup_{h≠0} ‖Ah‖/‖h‖ = ‖A‖. The matrix AᵀA is symmetric positive semidefinite; by the spectral theorem it has an orthonormal eigenbasis v₁, …, vₙ with eigenvalues λ₁ ≥ ⋯ ≥ λₙ ≥ 0. For x = Σcᵢvᵢ with ‖x‖ = 1, ‖Ax‖² = xᵀAᵀAx = Σλᵢcᵢ² ≤ λ₁Σcᵢ² = λ₁, with equality at x = v₁. ∎

Worked example. For A with rows (3, 0) and (4, 5), the matrix AᵀA has rows (25, 20) and (20, 25), with eigenvalues 45 and 5 (eigenvectors (1, 1) and (1, −1)). So ‖A‖ = √45 = 3√5 ≈ 6.708. Note that the largest entry, 5, and the largest eigenvalue of A itself, also 5, both underestimate the stretching. Unless A is normal, its eigenvalues do not determine ‖A‖.

Contractions

Theorem 12.2 (Banach fixed-point theorem, 1922)

Let X be a complete metric space and f : X → X Lipschitz with constant q < 1. Then f has exactly one fixed point x*, and for any x₀ the iterates xₖ₊₁ = f(xₖ) converge to x* with d(xₖ, x*) ≤ qᵏ d(x₀, x₁)/(1 − q).

Proof. By induction d(xₖ, xₖ₊₁) ≤ qᵏ d(x₀, x₁), so for j > k the triangle inequality and the geometric series give d(xₖ, xⱼ) ≤ (qᵏ + ⋯ + qʲ⁻¹) d(x₀, x₁) ≤ qᵏ d(x₀, x₁)/(1 − q). Thus (xₖ) is Cauchy and converges to some x*, and continuity of f gives f(x*) = x*. If x* and y* are fixed points, d(x*, y*) = d(f(x*), f(y*)) ≤ q d(x*, y*) forces d(x*, y*) = 0. The error bound follows by letting j → ∞. ∎

For an affine map f(x) = Ax + b with ‖A‖ < 1, the fixed point is x* = (I − A)⁻¹b, and the iteration reproduces the Neumann series (I − A)⁻¹ = I + A + A² + ⋯. This is the principle behind the Jacobi and Gauss–Seidel iterations for linear systems and behind Picard's existence theorem for ordinary differential equations. In one variable: x ↦ x/2 + 3 has fixed point 6, and from x₀ = 0 the iterates 3, 4.5, 5.25, … close half the remaining gap each step.

Piecewise-linear functions

A continuous function f : ℝ → ℝ is piecewise linear (PL) if there are finitely many breakpoints t₁ < ⋯ < tₖ such that f is affine on each of the intervals (−∞, t₁], [t₁, t₂], …, [tₖ, ∞). Let dᵢ be the jump in slope at tᵢ (slope to the right minus slope to the left), and let ReLU(u) = max(u, 0) be the rectified linear unit.

Theorem 12.3 (Representation on ℝ)

Every continuous PL function on ℝ can be written as f(x) = α + βx + Σᵢ dᵢ ReLU(x − tᵢ), where β is the slope on the leftmost piece. Equivalently f(x) = α′ + β′x + Σᵢ (dᵢ/2)|x − tᵢ|. The function f is convex if and only if every dᵢ ≥ 0, and then f is the maximum of its affine pieces.

Proof. The function g(x) = f(x) − Σdᵢ ReLU(x − tᵢ) is continuous and PL, and at each tᵢ the slope jump of g is dᵢ − dᵢ = 0. So g has the same slope on every piece, and being continuous, it is a single affine function α + βx; for x < t₁ all the ReLU terms vanish, so β is the leftmost slope. The absolute-value form follows from ReLU(u) = (u + |u|)/2. A function with nondecreasing slopes is convex, and decreasing slope somewhere violates convexity. A convex function lies above each of its tangent lines, and on each piece it coincides with one of them, so it equals the maximum of the pieces. ∎

Example. The hat function h(x) that is 0 for x ≤ 0, rises with slope 1 to h(1) = 1, falls with slope −1 to h(2) = 0, and is 0 afterwards, has slope jumps +1, −2, +1 at 0, 1, 2. Hence h(x) = ReLU(x) − 2ReLU(x − 1) + ReLU(x − 2). Check on [1, 2]: x − 2(x − 1) = 2 − x. On [2, ∞): x − 2(x − 1) + (x − 2) = 0. Its Lipschitz constant is the largest absolute slope, 1.

Piecewise-linear functions in higher dimensions and neural networks

On ℝⁿ, a continuous function is PL if ℝⁿ can be covered by finitely many polyhedra on each of which it is affine. Every convex PL function is a maximum of finitely many affine functions, and every continuous PL function is a difference of two convex ones, or equivalently a max–min of finitely many affine functions (results of Tarela and Martínez, and Ovchinnikov, around 2000). Since max(a, b) = b + ReLU(a − b), maxima can be computed with ReLU units. A feedforward ReLU network is precisely a composition of affine maps and coordinatewise ReLUs, so it computes a continuous PL function; conversely, Arora, Basu, Mianjy and Mukherjee (2018) proved that every continuous PL function on ℝⁿ is computed by a ReLU network with at most ⌈log₂(n + 1)⌉ hidden layers. Because ReLU is 1-Lipschitz, Theorem 12.1 bounds the Lipschitz constant of a network by the product of the operator norms of its weight matrices. This bound underlies spectral normalisation and certified robustness of neural networks.

✏️ Your Turn

(a) Find the Lipschitz constant of f(x) = max(2x − 1, −x + 3, x/2) on ℝ.
(b) Find the fixed point of f(x) = x/2 + 3 and the operator norm of the diagonal matrix diag(3, −7).
(c) Write g(x) = |x − 1| + |x + 1| in ReLU form and state its Lipschitz constant.

Answers: (a) The piece x/2 is never the largest: it exceeds 2x − 1 only for x < 2/3 and exceeds −x + 3 only for x > 2. So f(x) = −x + 3 for x ≤ 4/3 and f(x) = 2x − 1 for x ≥ 4/3, and the Lipschitz constant is the largest absolute slope, 2. (b) x = x/2 + 3 gives x = 6; ‖diag(3, −7)‖ = max(|3|, |−7|) = 7. (c) The slopes are −2, 0, 2 on (−∞, −1], [−1, 1], [1, ∞), with jumps 2 at −1 and 2 at 1, so g(x) = −2x + 2ReLU(x + 1) + 2ReLU(x − 1). Check: at x = 0 this gives 0 + 2 + 0 = 2 = |−1| + |1|, and at x = 2 it gives −4 + 6 + 2 = 4 = 1 + 3. The Lipschitz constant is 2.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are arranged in three groups. The Core problems check fluency with the definitions and computations of each lesson. The Advanced problems ask for short proofs and multi-step computations. The Challenge problems are of the kind found on graduate qualifying examinations and require combining ideas from several lessons. Complete worked solutions follow in the answer key.

Core (Problems 1–20)

  1. Show that T(x, y) = (x + 2y, 3x − y) is linear on ℝ² and write down its matrix.
  2. Verify directly that f(x) = 5x − 2 satisfies f(λx + (1 − λ)y) = λf(x) + (1 − λ)f(y) for all real x, y, λ.
  3. Find the affine function f : ℝ → ℝ with f(1) = 4 and f(3) = 10.
  4. A linear map T : ℝ² → ℝ² sends (1, 0) to (2, 1) and (0, 1) to (−1, 3). Find its matrix and T(3, −2).
  5. Decide whether (1, 0, 1), (0, 1, 1), (1, 1, 0) is a basis of ℝ³.
  6. Find the dimension of U = {x ∈ ℝ⁴ : x₁ + x₂ + x₃ + x₄ = 0} and give a basis.
  7. Find the kernel, image, rank and nullity of the matrix with rows (1, −1) and (2, −2).
  8. A linear map ℝ⁶ → ℝ⁴ has a 3-dimensional kernel. What is its rank? Is it surjective?
  9. Write the matrix of differentiation D on P₃ with respect to (1, x, x², x³) and find its rank.
 10. A has rows (2, 1) and (1, 2), and B = P⁻¹AP for some invertible P. Find tr B, det B and the eigenvalues of B.
 11. Find the dual basis of b₁ = (2, 1), b₂ = (1, 1) in ℝ².
 12. Find the barycentric coordinates of (1, 2) with respect to A = (0, 0), B = (3, 0), C = (0, 3). Where does the point lie?
 13. Compute the Jacobian matrix and its determinant for f(x, y) = (x² − y², 2xy) at (1, 1).
 14. Use the linearisation of √x at 100 to estimate √101.
 15. Find the least-squares line for (1, 1), (2, 2), (3, 2) and its residuals.
 16. Find the matrix of the orthogonal projection of ℝ² onto the line spanned by (1, 2).
 17. Maximise 4x + 3y subject to 2x + y ≤ 10, x + y ≤ 7, x, y ≥ 0.
 18. Write the dual of: maximise 2x₁ + 3x₂ subject to x₁ + x₂ ≤ 4, x₁ + 3x₂ ≤ 6, x ≥ 0. Solve both.
 19. Find the Lipschitz constant of f(x) = 3|x| − 2x on ℝ.
 20. Show that ReLU(x) − ReLU(−x) = x and ReLU(x) + ReLU(−x) = |x|.

Advanced (Problems 21–45)

 21. Let T : V → V be linear with dim V = n and T² = 0. Prove that rank T ≤ n/2.
 22. Prove that rank(AB) ≤ min(rank A, rank B).
 23. Prove Sylvester's inequality: for A of size m × n and B of size n × p, rank A + rank B − n ≤ rank(AB).
 24. Let T(p)(x) = p(x + 1) on P₂. Find the matrix of T with respect to (1, x, x²) and the matrix of T⁻¹.
 25. Let A have rows (5, −6) and (3, −4). Diagonalise A and compute A¹⁰.
 26. Let φ be a linear functional on n × n matrices with φ(AB) = φ(BA) for all A, B. Prove that φ = c·tr for some scalar c.
 27. Prove that dim U⁰ = dim V − dim U for a subspace U of a finite-dimensional space V.
 28. Let t₀, …, tₙ be distinct reals and evᵢ(p) = p(tᵢ). Prove that ev₀, …, evₙ is a basis of Pₙ* and identify the dual basis in Pₙ.
 29. Find w and a > 0 such that ∫₋₁¹ p(t) dt = w(p(−a) + p(a)) for every p ∈ P₃.
 30. Let T : V → W have matrix M with respect to bases B, C. Prove that T* : W* → V* has matrix Mᵀ with respect to the dual bases.
 31. Prove that an affine map preserves ratios along lines: if z = x + t(y − x) then f(z) = f(x) + t(f(y) − f(x)).
 32. Find the affine map sending (0, 0), (1, 0), (0, 1) to (1, 1), (3, 2), (0, 4), and the factor by which it multiplies areas.
 33. Show that x ↦ Ax + b corresponds to the (n + 1) × (n + 1) block matrix with rows (A, b) and (0, 1), and that composition corresponds to matrix multiplication.
 34. Let f(x, y) = xy/(x² + y²) for (x, y) ≠ (0, 0) and f(0, 0) = 0. Show that both partial derivatives exist at the origin but f is not differentiable there.
 35. Let f(x, y) = (x + y, xy) and g(u, v) = u² − 2v. Compute D(g∘f)(1, 2) with the chain rule and check it directly.
 36. Perform two steps of Newton's method for x² + y² = 4, x = y, starting at (1, 1).
 37. Prove that ker(AᵀA) = ker A and hence rank(AᵀA) = rank A for every real matrix A.
 38. Fit y = c₀ + c₁x + c₂x² by least squares to (−1, 2), (0, 0), (1, 1), (2, 4).
 39. Let A have full column rank and P = A(AᵀA)⁻¹Aᵀ. Prove that Pᵀ = P, P² = P, and tr P = rank A.
 40. Prove that in least-squares regression with an intercept, the residuals sum to zero and the fitted line passes through (x̄, ȳ).
 41. In the model yᵢ = βxᵢ + εᵢ with Gauss–Markov errors, compare the variances of β̃ = ȳ/x̄ and the OLS estimator β̂ = Σxᵢyᵢ/Σxᵢ². Evaluate the ratio for x = (1, 2, 3).
 42. Maximise 5x + 4y subject to 6x + 4y ≤ 24, x + 2y ≤ 6, −x + y ≤ 1, y ≤ 2, x, y ≥ 0. Find an optimal dual solution.
 43. Use Farkas' lemma to show that x₁ + x₂ + x₃ = 2, 2x₁ + 3x₂ + x₃ = 1 has no solution with x ≥ 0, and give a certificate.
 44. Find the Lipschitz constant of x ↦ Ax + b on ℝ² when A has rows (1, 2) and (2, 1).
 45. Write the tent function max(0, 1 − |x|) as a combination of ReLUs.

Challenge (Problems 46–60)

 46. Prove that ℝ is infinite-dimensional as a vector space over ℚ.
 47. Let f : ℝ → ℝ be additive but not of the form f(x) = cx. Prove that the graph of f is dense in ℝ².
 48. Prove that no n × n matrices satisfy AB − BA = I, and exhibit linear operators D, M on the space of all polynomials with DM − MD = I.
 49. Let V have an infinite basis (eᵢ)_{i∈I}, with coordinate functionals φᵢ. Prove that the φᵢ are linearly independent but do not span V*.
 50. Let f : ℝⁿ → ℝⁿ satisfy ‖f(x) − f(y)‖ = ‖x − y‖ (Euclidean norm). Prove that f is affine.
 51. For the Newton iteration xₖ₊₁ = (xₖ + 2/xₖ)/2, prove the exact identity xₖ₊₁ − √2 = (xₖ − √2)²/(2xₖ) and deduce quadratic convergence for x₀ > 0.
 52. Two unbiased measurements y₁, y₂ of μ are uncorrelated with variances 1 and 4. Find the BLUE of μ and its variance, and compare with the plain average.
 53. Let H be the hat matrix of a regression with p parameters. Prove that each leverage hᵢᵢ satisfies 0 ≤ hᵢᵢ ≤ 1 and that Σhᵢᵢ = p.
 54. Derive the complementary slackness conditions from the proof of weak duality.
 55. Find optimal mixed strategies and the value of the zero-sum game whose payoff matrix to the row player has rows (3, −1) and (−2, 1).
 56. Find the line y = a + bx that minimises the maximum absolute error at (0, 0), (1, 1), (2, 0), formulate the problem as an LP, and prove optimality.
 57. Prove that every continuous piecewise-linear function on ℝ is a difference of two convex piecewise-linear functions, and do this explicitly for the hat function of Lesson 12.
 58. Compute the operator norm of the shear with rows (1, 1) and (0, 1).
 59. On the space P of all real polynomials, show that p ↦ xp is injective but not surjective and that p ↦ p′ is surjective but not injective. Why does this not contradict rank–nullity?
 60. Prove that f : ℝⁿ → ℝ is affine if and only if it is both convex and concave.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. T(x + x′, y + y′) = (x + x′ + 2y + 2y′, 3x + 3x′ − y − y′) = T(x, y) + T(x′, y′), and T(λx, λy) = λT(x, y). The columns are T(e₁) = (1, 3) and T(e₂) = (2, −1), so the matrix has rows (1, 2) and (3, −1).
  2. f(λx + (1 − λ)y) = 5λx + 5(1 − λ)y − 2, while λ(5x − 2) + (1 − λ)(5y − 2) = 5λx + 5(1 − λ)y − 2λ − 2(1 − λ) = 5λx + 5(1 − λ)y − 2. They agree.
  3. The slope is (10 − 4)/(3 − 1) = 3, and f(1) = 3 + b = 4 gives b = 1: f(x) = 3x + 1.
  4. The matrix has columns (2, 1) and (−1, 3), i.e. rows (2, −1) and (1, 3). T(3, −2) = 3(2, 1) − 2(−1, 3) = (8, −3).
  5. The determinant of the matrix with these rows is 1·(1·0 − 1·1) − 0 + 1·(0·1 − 1·1) = −1 − 1 = −2 ≠ 0, so the vectors are independent and form a basis.
  6. U is the kernel of the nonzero functional x ↦ x₁ + x₂ + x₃ + x₄, so dim U = 4 − 1 = 3. A basis: (1, −1, 0, 0), (0, 1, −1, 0), (0, 0, 1, −1).
  7. The second row is twice the first, so the rank is 1 and the nullity is 1. The kernel is {x − y = 0} = span{(1, 1)}; the image is spanned by the first column, span{(1, 2)}.
  8. Rank = 6 − 3 = 3 < 4 = dim ℝ⁴, so the map is not surjective.
  9. D(1) = 0, D(x) = 1, D(x²) = 2x, D(x³) = 3x², so the matrix has 1, 2, 3 on the superdiagonal and zeros elsewhere; rows (0, 1, 0, 0), (0, 0, 2, 0), (0, 0, 0, 3), (0, 0, 0, 0). Its rank is 3 (the image is P₂).
 10. Similarity preserves trace and determinant: tr B = 4, det B = 4 − 1 = 3. The characteristic polynomial λ² − 4λ + 3 = (λ − 1)(λ − 3) gives eigenvalues 1 and 3.
 11. V has columns (2, 1), (1, 1) and det V = 1, so V⁻¹ has rows (1, −1) and (−1, 2): φ₁(x, y) = x − y and φ₂(x, y) = −x + 2y. Check: φ₁(2, 1) = 1, φ₁(1, 1) = 0, φ₂(2, 1) = 0, φ₂(1, 1) = 1.
 12. 3β = 1 and 3γ = 2 give β = 1/3, γ = 2/3 and α = 0. Since α = 0 the point lies on the edge BC (indeed x + y = 3 there), between B and C.
 13. J = rows (2x, −2y) and (2y, 2x), which at (1, 1) is rows (2, −2) and (2, 2), with determinant 4 + 4 = 8. (This is the map z ↦ z² in complex notation, and 8 = |2z|² at z = 1 + i.)
 14. With f(x) = √x, f(100) = 10 and f′(100) = 1/(2·10) = 1/20, so √101 ≈ 10 + 1/20 = 10.05. The true value is 10.0498756…, an error of about 1.2 × 10⁻⁴.
 15. x̄ = 2, ȳ = 5/3, S_xx = 2, S_xy = (−1)(−2/3) + 0 + (1)(1/3) = 1. So m = 1/2 and c = 5/3 − 1 = 2/3: y = 2/3 + x/2. The fitted values are 7/6, 5/3, 13/6, and the residuals −1/6, 1/3, −1/6 sum to 0.
 16. P = uuᵀ/uᵀu with u = (1, 2): P = (1/5)·(rows (1, 2) and (2, 4)). One checks P² = P and P(1, 2) = (1, 2), P(2, −1) = 0.
 17. Vertices: (0, 0) gives 0; (5, 0) gives 20; (3, 4), where 2x + y = 10 meets x + y = 7, gives 24; (0, 7) gives 21. The maximum is 24 at (3, 4).
 18. Dual: minimise 4y₁ + 6y₂ subject to y₁ + y₂ ≥ 2, y₁ + 3y₂ ≥ 3, y ≥ 0. Primal vertices (0, 0), (4, 0), (3, 1), (0, 2) give 0, 8, 9, 6, so the primal optimum is 9 at (3, 1). Both xⱼ > 0, so both dual constraints are tight: y₁ + y₂ = 2, y₁ + 3y₂ = 3 give y = (3/2, 1/2), with value 6 + 3 = 9.
 19. For x > 0, f(x) = x (slope 1); for x < 0, f(x) = −5x (slope −5). A continuous PL function has Lipschitz constant equal to its largest absolute slope, so Lip(f) = 5.
 20. For x ≥ 0: ReLU(x) = x and ReLU(−x) = 0, giving x and x = |x|. For x < 0: ReLU(x) = 0 and ReLU(−x) = −x, giving x and −x = |x|. Hence ReLU(x) = (x + |x|)/2.

Advanced

 21. T² = 0 means T(T(v)) = 0 for all v, i.e. im T ⊆ ker T. Hence rank T ≤ nullity T = n − rank T, so 2 rank T ≤ n.
 22. im(AB) ⊆ im A, so rank(AB) ≤ rank A. Also AB is A applied to im B, and a linear map cannot increase dimension, so rank(AB) = dim A(im B) ≤ dim im B = rank B.
 23. Apply rank–nullity to the restriction of A to im B: rank(AB) = dim A(im B) = dim im B − dim(ker A ∩ im B) ≥ rank B − dim ker A = rank B − (n − rank A).
 24. T(1) = 1, T(x) = 1 + x, T(x²) = 1 + 2x + x², so [T] has rows (1, 1, 1), (0, 1, 2), (0, 0, 1). T⁻¹(p)(x) = p(x − 1) sends 1, x, x² to 1, x − 1, x² − 2x + 1, giving rows (1, −1, 1), (0, 1, −2), (0, 0, 1). The product of the two matrices is I.
 25. The characteristic polynomial is λ² − λ − 2 = (λ − 2)(λ + 1). Eigenvectors: (2, 1) for 2 (since A(2, 1) = (4, 2)) and (1, 1) for −1 (since A(1, 1) = (−1, −1)). With P having columns (2, 1), (1, 1), det P = 1, P⁻¹ has rows (1, −1), (−1, 2), and A = P diag(2, −1) P⁻¹. Then A¹⁰ = P diag(1024, 1) P⁻¹, which has rows (2047, −2046) and (1023, −1022).
 26. Let Eᵢⱼ be the matrix units, EᵢⱼEₖₗ = δⱼₖEᵢₗ. For i ≠ j, Eᵢⱼ = EᵢᵢEᵢⱼ while EᵢⱼEᵢᵢ = 0, so φ(Eᵢⱼ) = φ(EᵢⱼEᵢᵢ) = φ(0) = 0. Also Eᵢᵢ = EᵢⱼEⱼᵢ and Eⱼⱼ = EⱼᵢEᵢⱼ, so φ(Eᵢᵢ) = φ(Eⱼⱼ) =: c. By linearity φ(A) = Σᵢ aᵢᵢc = c·tr A.
 27. Let u₁, …, uₖ be a basis of U, extended to a basis u₁, …, uₙ of V, with dual basis φ₁, …, φₙ. A functional φ = Σcᵢφᵢ annihilates U iff φ(uⱼ) = cⱼ = 0 for j ≤ k. So U⁰ = span{φₖ₊₁, …, φₙ}, of dimension n − k.
 28. Let ℓⱼ(t) = ∏_{i≠j}(t − tᵢ)/(tⱼ − tᵢ) ∈ Pₙ. Then evᵢ(ℓⱼ) = δᵢⱼ. If Σcᵢevᵢ = 0, applying it to ℓⱼ gives cⱼ = 0, so the n + 1 = dim Pₙ* functionals are independent, hence a basis. The relations evᵢ(ℓⱼ) = δᵢⱼ say that (ℓⱼ) is the basis of Pₙ to which (evᵢ) is dual, so every p ∈ Pₙ equals Σp(tⱼ)ℓⱼ: Lagrange interpolation.
 29. Odd polynomials (t, t³) integrate to 0 and the symmetric rule gives 0 for them automatically. For p = 1: 2 = 2w, so w = 1. For p = t²: 2/3 = 2wa², so a = 1/√3. The rule ∫₋₁¹ p ≈ p(−1/√3) + p(1/√3) is two-point Gauss–Legendre quadrature, exact on P₃.
 30. Let B = (bⱼ), C = (cᵢ) with dual bases (βⱼ), (γᵢ). The (j, i) entry of [T*] is the βⱼ-coefficient of T*(γᵢ) = γᵢ∘T, namely (γᵢ∘T)(bⱼ) = γᵢ(Σₖ Mₖⱼcₖ) = Mᵢⱼ. So [T*]ⱼᵢ = Mᵢⱼ, i.e. [T*] = Mᵀ.
 31. z = (1 − t)x + ty is an affine combination, so f(z) = (1 − t)f(x) + tf(y) = f(x) + t(f(y) − f(x)). In particular the ratio |xz|/|xy| = |t| is preserved.
 32. b = (1, 1); the columns of A are (3, 2) − (1, 1) = (2, 1) and (0, 4) − (1, 1) = (−1, 3). So f(x, y) = (1 + 2x − y, 1 + x + 3y). det A = 2·3 − (−1)·1 = 7, so areas are multiplied by 7.
 33. The block matrix sends (x, 1) to (Ax + b, 1). Multiplying the blocks for (A, b) and (A′, b′) gives rows (AA′, Ab′ + b) and (0, 1), which corresponds to x ↦ A(A′x + b′) + b, the composition.
 34. f(x, 0) = 0 and f(0, y) = 0, so both partial derivatives at the origin are 0. But f(t, t) = t²/(2t²) = 1/2 for t ≠ 0, so f is not continuous at the origin, and a differentiable function is continuous. Hence f is not differentiable there.
 35. f(1, 2) = (3, 2); J_f = rows (1, 1) and (y, x) = rows (1, 1), (2, 1) at (1, 2); J_g = (2u, −2) = (6, −2) at (3, 2). The product is (6·1 − 2·2, 6·1 − 2·1) = (2, 4). Directly, g∘f = (x + y)² − 2xy = x² + y², with gradient (2x, 2y) = (2, 4).
 36. F(x, y) = (x² + y² − 4, x − y) and J = rows (2x, 2y), (1, −1). At (1, 1): F = (−2, 0); solving J d = (2, 0), i.e. 2d₁ + 2d₂ = 2 and d₁ = d₂, gives d = (1/2, 1/2) and the new point (3/2, 3/2). There F = (1/2, 0) and J = rows (3, 3), (1, −1); solving 3d₁ + 3d₂ = −1/2, d₁ = d₂ gives d₁ = d₂ = −1/12, so the next point is (17/12, 17/12) ≈ (1.41667, 1.41667), close to (√2, √2).
 37. If Ax = 0 then AᵀAx = 0. Conversely if AᵀAx = 0 then 0 = xᵀAᵀAx = ‖Ax‖², so Ax = 0. Thus the kernels agree, and since both matrices have n columns, rank–nullity gives rank(AᵀA) = n − dim ker A = rank A.
 38. With columns 1, x, x² the normal-equation sums are Σ1 = 4, Σx = 2, Σx² = 6, Σx³ = 8, Σx⁴ = 18, Σy = 7, Σxy = 7, Σx²y = 19. Solving 4c₀ + 2c₁ + 6c₂ = 7, 2c₀ + 6c₁ + 8c₂ = 7, 6c₀ + 8c₁ + 18c₂ = 19 gives c₀ = 3/20, c₁ = −11/20, c₂ = 5/4. The residuals are 1/20, −3/20, 3/20, −1/20, orthogonal to (1, 1, 1, 1), (−1, 0, 1, 2) and (1, 0, 1, 4), and RSS = 20/400 = 1/20.
 39. Pᵀ = A((AᵀA)⁻¹)ᵀAᵀ = P because AᵀA is symmetric. P² = A(AᵀA)⁻¹(AᵀA)(AᵀA)⁻¹Aᵀ = P. tr P = tr((AᵀA)⁻¹AᵀA) = tr Iₙ = n = rank A.
 40. The column of ones is in the design matrix, and the normal equations say Xᵀe = 0 for the residual vector e; its first component is Σeᵢ = 0. Then Σ(yᵢ − c − mxᵢ) = 0 gives ȳ = c + m x̄.
 41. β̃ = Σyᵢ/Σxᵢ is linear and unbiased, with variance nσ²/(Σxᵢ)² = σ²/(n x̄²). OLS has variance σ²/Σxᵢ². By Cauchy–Schwarz (Σxᵢ)² ≤ nΣxᵢ², so Var β̃ ≥ Var β̂, as Gauss–Markov predicts. For x = (1, 2, 3): Var β̃ = σ²·3/36 = σ²/12 and Var β̂ = σ²/14, ratio 14/12 = 7/6.
 42. At (3, 3/2): 6·3 + 4·1.5 = 24 and 3 + 2·1.5 = 6 are tight, −3 + 1.5 = −1.5 < 1 and 1.5 < 2 are slack; z = 15 + 6 = 21. Other vertices: (0, 0) 0, (4, 0) 20, (2, 2) 18, (1, 2) 13, (0, 1) 4. Dual: minimise 24y₁ + 6y₂ + y₃ + 2y₄ subject to 6y₁ + y₂ − y₃ ≥ 5, 4y₁ + 2y₂ + y₃ + y₄ ≥ 4, y ≥ 0. Complementary slackness gives y₃ = y₄ = 0 and 6y₁ + y₂ = 5, 4y₁ + 2y₂ = 4, so y₁ = 3/4, y₂ = 1/2, with dual value 18 + 3 = 21.
 43. A has rows (1, 1, 1), (2, 3, 1) and b = (2, 1). Take y = (−1, 1): Aᵀy = (1, 2, 0) ≥ 0 and bᵀy = −2 + 1 = −1 < 0. In words: subtracting the first equation from the second gives x₁ + 2x₂ = −1, impossible for x ≥ 0.
 44. A is symmetric with eigenvalues 3 (eigenvector (1, 1)) and −1 (eigenvector (1, −1)). For symmetric A, AᵀA = A² has eigenvalues 9 and 1, so ‖A‖ = 3, and the Lipschitz constant is 3 (independent of b).
 45. The slope jumps are +1 at −1, −2 at 0, +1 at 1, and the function is 0 on the far left, so max(0, 1 − |x|) = ReLU(x + 1) − 2ReLU(x) + ReLU(x − 1). Check: on [0, 1] this is (x + 1) − 2x = 1 − x; on [1, ∞) it is (x + 1) − 2x + (x − 1) = 0.

Challenge

 46. If ℝ had a finite basis r₁, …, rₖ over ℚ, the map ℚᵏ → ℝ, (q₁, …, qₖ) ↦ Σqᵢrᵢ, would be a bijection. But ℚᵏ is countable and ℝ is not. (The same argument shows the dimension is uncountable, in fact equal to the continuum.)
 47. f is ℚ-linear (Lesson 1). Since f is not of the form cx, there are nonzero x₁, x₂ with f(x₁)/x₁ ≠ f(x₂)/x₂; then u = (x₁, f(x₁)) and v = (x₂, f(x₂)) are linearly independent in ℝ², because x₁f(x₂) − x₂f(x₁) ≠ 0. The graph contains (q₁x₁ + q₂x₂, f(q₁x₁ + q₂x₂)) = q₁u + q₂v for all rationals q₁, q₂. The map (s, t) ↦ su + tv is a homeomorphism of ℝ² and ℚ² is dense, so {q₁u + q₂v} is dense in ℝ².
 48. tr(AB − BA) = tr(AB) − tr(BA) = 0 but tr I = n ≠ 0. On polynomials let D be differentiation and M multiplication by x. Then (DM − MD)p = (xp)′ − xp′ = p + xp′ − xp′ = p, so DM − MD = I. No contradiction arises because the space is infinite-dimensional and the trace is undefined there.
 49. Independence: if a finite combination Σcᵢφᵢ vanishes, evaluating at eⱼ gives cⱼ = 0. Not spanning: define ψ ∈ V* by ψ(eᵢ) = 1 for all i (a linear map may be prescribed freely on a basis). Any element of span{φᵢ} is a finite combination and so vanishes on all but finitely many eᵢ; since I is infinite, ψ is not such a combination.
 50. Replace f by f − f(0), so f(0) = 0. In Euclidean space, the midpoint m of x and y is the unique point with ‖x − m‖ = ‖y − m‖ = ½‖x − y‖: equality in the triangle inequality ‖x − y‖ ≤ ‖x − z‖ + ‖z − y‖ holds only for z on the segment, because the Euclidean norm is strictly convex. An isometry preserves these distance relations, so f((x + y)/2) = (f(x) + f(y))/2. A midpoint-preserving map with f(0) = 0 satisfies f(x/2) = f(x)/2 and then f(x + y) = 2f((x + y)/2) = f(x) + f(y); additivity together with continuity (f is 1-Lipschitz) gives ℝ-linearity, coordinatewise as in Cauchy's equation. Hence the original f is affine. (Mazur and Ulam, 1932, proved this for every surjective isometry between real normed spaces.)
 51. xₖ₊₁ − √2 = (xₖ² + 2 − 2√2xₖ)/(2xₖ) = (xₖ − √2)²/(2xₖ). For x₀ > 0 all iterates are positive, and by the identity xₖ ≥ √2 for k ≥ 1. Then eₖ₊₁ = eₖ²/(2xₖ) ≤ eₖ²/(2√2), which is quadratic convergence (and the bound eₖ₊₁ ≤ eₖ/2 for k ≥ 1 gives convergence from any x₀ > 0). From x₀ = 1: e₀ ≈ 0.414, e₁ ≈ 0.0858, e₂ ≈ 0.00245, e₃ ≈ 2.1 × 10⁻⁶.
 52. Here X = (1, 1)ᵀ and Ω = diag(1, 4). GLS gives μ̂ = (Σyᵢ/σᵢ²)/(Σ1/σᵢ²) = (y₁ + y₂/4)/(5/4) = (4y₁ + y₂)/5, with variance 1/(Σ1/σᵢ²) = 1/(5/4) = 4/5; directly, (16·1 + 1·4)/25 = 4/5. The plain average has variance (1 + 4)/4 = 5/4, which is larger.
 53. H is symmetric and idempotent, so H = H² = HᵀH and hᵢᵢ = Σⱼhᵢⱼ² ≥ hᵢᵢ². This gives hᵢᵢ(1 − hᵢᵢ) ≥ 0, i.e. 0 ≤ hᵢᵢ ≤ 1. Also Σhᵢᵢ = tr H = p (Lesson 9). The average leverage is p/n.
 54. Weak duality reads cᵀx ≤ (Aᵀy)ᵀx = yᵀAx ≤ yᵀb. Equality in the first step means Σⱼ((Aᵀy)ⱼ − cⱼ)xⱼ = 0, a sum of nonnegative terms, so each term vanishes: xⱼ > 0 ⇒ (Aᵀy)ⱼ = cⱼ. Equality in the second means Σᵢyᵢ(bᵢ − (Ax)ᵢ) = 0, again termwise: yᵢ > 0 ⇒ (Ax)ᵢ = bᵢ. Feasible x, y are both optimal iff these conditions hold, by weak and strong duality.
 55. There is no saddle point: the row minima are −1 and −2 (maximin −1), and the column maxima are 3 and 1 (minimax 1). If the row player plays row 1 with probability p, the payoffs against the two columns are 3p − 2(1 − p) = 5p − 2 and −p + (1 − p) = 1 − 2p; equating gives p = 3/7 and value 1/7. If the column player plays column 1 with probability q, the row payoffs are 4q − 1 and 1 − 3q; equating gives q = 2/7 and value 1/7. The equal values confirm optimality (von Neumann's minimax theorem, an instance of LP duality).
 56. LP: minimise t subject to −t ≤ yᵢ − a − bxᵢ ≤ t for the three points. With residuals r₀ = −a, r₁ = 1 − a − b, r₂ = −a − 2b, one has the identity r₀ − 2r₁ + r₂ = −2 for every a, b. Hence 2 ≤ |r₀| + 2|r₁| + |r₂| ≤ 4 max|rᵢ|, so the maximum error is at least 1/2. The line y = 1/2 (a = 1/2, b = 0) has residuals −1/2, 1/2, −1/2, attaining the bound. It is optimal, and the alternating signs are an instance of Chebyshev's equioscillation theorem. The weights (1, −2, 1) form a dual certificate.
 57. By Theorem 12.3, f(x) = α + βx + Σdᵢ ReLU(x − tᵢ). Put g = α + βx + Σ_{dᵢ>0} dᵢ ReLU(x − tᵢ) and h = Σ_{dᵢ<0} |dᵢ| ReLU(x − tᵢ). Both are convex (nonnegative combinations of convex functions plus an affine one) and PL, and f = g − h. For the hat function: g(x) = ReLU(x) + ReLU(x − 2) and h(x) = 2ReLU(x − 1).
 58. AᵀA has rows (1, 1) and (1, 2), with trace 3 and determinant 1, so its eigenvalues are (3 ± √5)/2. The norm is √((3 + √5)/2) = (1 + √5)/2 ≈ 1.618, the golden ratio, since ((1 + √5)/2)² = (6 + 2√5)/4 = (3 + √5)/2. The eigenvalues of A itself are both 1.
 59. If xp = 0 then p = 0, so multiplication by x is injective; its image contains no nonzero constant, so it is not surjective. Every polynomial is a derivative (integrate termwise), so D is surjective; D(1) = 0, so it is not injective. Rank–nullity and its corollary require finite dimension, and P is infinite-dimensional (it contains the independent set 1, x, x², …).
 60. An affine function f(x) = aᵀx + c satisfies the convexity and concavity inequalities with equality. Conversely, if f is convex and concave, then f(λx + (1 − λ)y) = λf(x) + (1 − λ)f(y) for λ ∈ [0, 1]. For λ > 1 put z = λx + (1 − λ)y; then x = (1/λ)z + (1 − 1/λ)y with 1/λ ∈ (0, 1), so f(x) = (1/λ)f(z) + (1 − 1/λ)f(y), which rearranges to f(z) = λf(x) + (1 − λ)f(y). The case λ < 0 follows by exchanging x and y (replace λ by 1 − λ > 1). So f preserves all affine combinations of two points, and Theorem 1.1 shows f is affine.
