Matrix Math — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

        A = U Σ V*        A = Q Λ Qᵀ        PA = LU        A = S J S⁻¹

These four factorizations, the singular value decomposition, the spectral decomposition, the LU factorization and the Jordan normal form, summarize most of what is known about a single matrix. Each one rewrites an arbitrary array of numbers as a product of matrices that are simple in some precise sense: orthogonal, diagonal, triangular or nearly diagonal. This course is about where those factorizations come from, why they exist, what they reveal, and what happens when they are computed in floating-point arithmetic.

The elementary course treated a matrix as a rectangular table and taught the mechanics of addition, scalar multiplication and the row-by-column product. Here a matrix is primarily the coordinate expression of a linear map between finite-dimensional vector spaces. That shift of viewpoint explains at once why the product is defined as it is, why it is associative but not commutative, and why quantities such as the rank, the determinant, the trace and the eigenvalues are worth computing: they are exactly the quantities that do not depend on the choice of coordinates.

The subject has a long history. Elimination on rectangular arrays appears in the Chinese Nine Chapters on the Mathematical Art (compiled by the first century CE). Determinants were introduced independently by Seki Takakazu (1683) and Leibniz (1693), and Cramer published his rule in 1750. Sylvester coined the word matrix in 1850, and Cayley's 1858 memoir made matrices algebraic objects in their own right. The twentieth century added the spectral theory of Hilbert, Schur and von Neumann, and, with the arrival of electronic computers, the numerical linear algebra of Turing, Wilkinson, Householder and Golub, which is now the computational core of scientific computing, statistics and machine learning.

Notation. Throughout, 𝔽 denotes ℝ or ℂ unless a general field is explicitly allowed. 𝔽^{m×n} is the space of m × n matrices, a_ij is the entry in row i and column j, Aᵀ is the transpose, and A* = Āᵀ is the conjugate transpose (for real matrices A* = Aᵀ). Vectors are columns. Inside a paragraph a matrix is written row by row with semicolons separating rows, so [ 1 2 ; 3 4 ] has first row (1, 2) and second row (3, 4). The identity is I, the standard basis vectors are e₁, …, eₙ, and diag(d₁, …, dₙ) is the diagonal matrix with the given diagonal. Proofs end with the symbol ∎.

In this course, you will:

  1. Treat matrices as linear maps, prove the rank–nullity theorem and understand change of basis and similarity
  2. Prove that row rank equals column rank, that reduced row echelon form is unique, and when LU factorization exists
  3. Characterize the determinant axiomatically, derive the Leibniz formula, and prove det(AB) = det A · det B
  4. Use the adjugate, Cramer's rule, Schur complements and the Sherman–Morrison–Woodbury identity
  5. Study eigenvalues through the characteristic and minimal polynomials and prove the Cayley–Hamilton theorem
  6. Decide diagonalizability and construct the Jordan normal form, including the rank formula for block sizes
  7. Build orthonormal bases by Gram–Schmidt, factor A = QR, and solve least-squares problems
  8. Prove the spectral theorem, Schur's triangularization theorem and the Courant–Fischer min-max principle
  9. Characterize positive definite matrices five different ways and prove Sylvester's criterion and law of inertia
  10. Prove the existence of the singular value decomposition and the Eckart–Young low-rank approximation theorem
  11. Analyze Markov chains through the Perron–Frobenius theory of nonnegative matrices
  12. Measure sensitivity with norms and condition numbers and understand backward stability of algorithms
  13. Solve 60 practice problems, from computations to research-style proofs

How to use this course: the lessons are cumulative, and each one states its key idea at the top. Work every exercise before opening its solution, and attempt each practice problem with pencil and paper. Several practice problems prove results that are quoted without proof in the lessons.

─────────────────────────────────
Lesson 1: Matrices as Linear Maps
─────────────────────────────────

📌 Key idea of this section:

        [S ∘ T] = [S] [T]          dim V = dim ker T + dim im T
        a change of basis replaces A by P⁻¹ A P

Linear maps and their matrices

Let V and W be vector spaces over 𝔽 with dim V = n and dim W = m. A map T : V → W is linear if T(αx + βy) = αT(x) + βT(y) for all vectors x, y and scalars α, β. Fix ordered bases B = (v₁, …, vₙ) of V and C = (w₁, …, w_m) of W. Since C is a basis, each T(v_j) has a unique expansion T(v_j) = a_1j w₁ + ⋯ + a_mj w_m. The m × n array A = (a_ij) is the matrix of T with respect to B and C, written [T]_{C←B}. In words: column j of A holds the C-coordinates of the image of the j-th basis vector.

If x has B-coordinate vector [x]_B = (c₁, …, cₙ)ᵀ, then by linearity T(x) = ∑_j c_j T(v_j) = ∑_i (∑_j a_ij c_j) w_i, so [T(x)]_C = A [x]_B. Matrix-vector multiplication is therefore nothing more than linearity written in coordinates. The assignment T ↦ [T]_{C←B} is a vector-space isomorphism from the space Hom(V, W) of linear maps onto 𝔽^{m×n}, so dim Hom(V, W) = mn.

Theorem 1.1 (Composition is multiplication). Let T : U → V and S : V → W be linear, with bases B, C, D of U, V, W. Then [S ∘ T]_{D←B} = [S]_{D←C} [T]_{C←B}, where the product on the right is the usual row-by-column product.

Proof. For every u ∈ U, [S(T(u))]_D = [S]_{D←C} [T(u)]_C = [S]_{D←C} [T]_{C←B} [u]_B. Taking u to be the j-th vector of B, the left side is column j of [S ∘ T]_{D←B} and the right side is column j of the product. ∎

This is the real reason the product is defined row by column. Two consequences follow without any computation. Matrix multiplication is associative, because composition of functions is associative. It is not commutative, because composition is not: rotating the plane by 90° and then reflecting in the x-axis is a different map from reflecting first and rotating second.

Two further views of the product are indispensable. Writing A by columns as [a₁ ⋯ aₙ], the product Ax = x₁a₁ + ⋯ + xₙaₙ is a linear combination of the columns, so the column space col(A) is exactly the image of x ↦ Ax. Writing A by columns and B by rows b₁ᵀ, …, bₙᵀ, the product is a sum of outer products:

        AB = a₁ b₁ᵀ + a₂ b₂ᵀ + ⋯ + aₙ bₙᵀ        (each term has rank at most 1)

The outer-product form is the starting point for low-rank approximation in Lesson 10.

Change of basis and similarity

Let B and B′ be two bases of V, and let P be the matrix whose j-th column is the B-coordinate vector of the j-th vector of B′. Then [x]_B = P [x]_{B′}, P is invertible, and for an operator T : V → V,

        [T]_{B′} = P⁻¹ [T]_B P

Square matrices A and A′ are similar if A′ = P⁻¹AP for some invertible P; similar matrices represent the same operator in different bases. Any quantity defined in terms of the operator alone, such as its rank, determinant, trace, characteristic polynomial or eigenvalues, is a similarity invariant. A recurring theme of this course is the search for a basis in which [T]_B is as simple as possible.

Worked example: let T(x, y) = (2x + y, x + 2y), so that in the standard basis T has matrix A = [ 2 1 ; 1 2 ]. Take the new basis b₁ = (1, 1), b₂ = (1, −1). Then T(b₁) = (3, 3) = 3b₁ and T(b₂) = (1, −1) = b₂, so in the new basis T is simply diag(3, 1). In matrix form, with P = [ 1 1 ; 1 −1 ],

        P⁻¹ A P = (1/2) [ 1   1 ] [ 2  1 ] [ 1   1 ]  =  [ 3  0 ]
                        [ 1  −1 ] [ 1  2 ] [ 1  −1 ]     [ 0  1 ]

The rank–nullity theorem

The kernel ker T = {x : T(x) = 0} and image im T = {T(x) : x ∈ V} are subspaces. Their dimensions are the nullity and the rank of T.

Theorem 1.2 (Rank–nullity). If V is finite-dimensional and T : V → W is linear, then dim V = dim ker T + dim im T.

Proof. Choose a basis u₁, …, u_k of ker T and extend it to a basis u₁, …, u_k, v₁, …, v_r of V, so dim V = k + r. Every vector of im T has the form T(∑ α_i u_i + ∑ β_j v_j) = ∑ β_j T(v_j), so T(v₁), …, T(v_r) span im T. They are independent: if ∑ β_j T(v_j) = 0, then ∑ β_j v_j lies in ker T, hence equals some ∑ α_i u_i, and independence of the extended basis forces every β_j = 0. Therefore dim im T = r. ∎

Corollary 1.3. For a linear operator T on a finite-dimensional space, T is injective if and only if T is surjective if and only if T is invertible. For square matrices, a one-sided inverse is automatically two-sided: if AB = I then BA = I.

Proof. Injective means dim ker T = 0, surjective means dim im T = dim V, and these are equivalent by Theorem 1.2. If AB = I then B is injective (Bx = 0 implies x = ABx = 0), hence invertible, and A = AB B⁻¹ = B⁻¹, so BA = I. ∎

The corollary is false in infinite dimensions: on the space of all sequences, the right shift (x₁, x₂, …) ↦ (0, x₁, x₂, …) is injective but not surjective. Finite dimensionality is doing real work.

For A ∈ 𝔽^{m×n} of rank r, the four fundamental subspaces are the column space col(A) ⊆ 𝔽^m of dimension r, the null space null(A) ⊆ 𝔽ⁿ of dimension n − r, the row space col(Aᵀ) ⊆ 𝔽ⁿ of dimension r, and the left null space null(Aᵀ) ⊆ 𝔽^m of dimension m − r. That row space and column space have the same dimension is a genuine theorem, proved in Lesson 2. Over ℝ the row space and null space are orthogonal complements in ℝⁿ, because Ax = 0 says exactly that x is orthogonal to every row.

How fast can matrices be multiplied

The definition uses n³ multiplications for two n × n matrices. In 1969 Strassen found a way to multiply 2 × 2 block matrices with 7 block products instead of 8; applied recursively this gives O(n^{log₂ 7}) ≈ O(n^{2.807}) operations. The infimum ω of exponents for which O(n^ω) multiplication is possible is one of the central open problems of algebraic complexity theory: it is known that 2 ≤ ω, and a sequence of improvements since Coppersmith and Winograd (1990) has pushed the upper bound below 2.372. Whether ω = 2 is unknown.

✏️ Your Turn

(a) A is a 5 × 7 real matrix of rank 3. Give the dimensions of its four fundamental subspaces.
(b) Find the dimension of the space of 3 × 3 matrices X that commute with D = diag(1, 2, 3).
(c) Let V be the space of real polynomials of degree at most 3 with basis 1, x, x², x³, and let T = d/dx. Write [T] and state its rank and nullity.

Answers: (a) col(A) has dimension 3, null(A) has dimension 7 − 3 = 4, the row space has dimension 3, and null(Aᵀ) has dimension 5 − 3 = 2. (b) (DX − XD)_ij = (d_i − d_j) x_ij, which vanishes for all i, j exactly when x_ij = 0 for i ≠ j, so the commutant is the diagonal matrices: dimension 3. (c) T(1) = 0, T(x) = 1, T(x²) = 2x, T(x³) = 3x², so [T] = [ 0 1 0 0 ; 0 0 2 0 ; 0 0 0 3 ; 0 0 0 0 ]; the rank is 3 and the nullity is 1 (the kernel is the constants).

─────────────────────────────────
Lesson 2: Row Reduction, Rank and LU Factorization
─────────────────────────────────

📌 Key idea of this section:

        row operations = left multiplication by invertible elementary matrices
        row rank = column rank          A = LU  ⇔  leading minors ≠ 0 (A invertible)

Elementary matrices and echelon form

The three elementary row operations, namely swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another, are each effected by left multiplication by an invertible elementary matrix E obtained by performing the same operation on I. Consequently row reduction of A produces EA with E = E_k ⋯ E₁ invertible, and it preserves the null space: Ax = 0 if and only if EAx = 0. Equivalently, row operations preserve every linear relation among the columns of A.

A matrix is in reduced row echelon form (RREF) if every nonzero row lies above every zero row, the first nonzero entry of each nonzero row (its pivot) equals 1 and lies strictly to the right of the pivot in the row above, and each pivot is the only nonzero entry in its column. Gauss–Jordan elimination shows that every matrix can be brought to RREF.

Theorem 2.1 (Uniqueness of RREF). Each matrix A is row-equivalent to exactly one matrix in reduced row echelon form.

Proof. Let R be any RREF of A. Because row operations preserve linear relations among columns, column j of R lies in the span of the preceding columns of R exactly when column j of A lies in the span of the preceding columns of A. In an RREF the pivot columns are precisely the columns not in the span of their predecessors, so the pivot positions are determined by A alone. If the pivot columns are j₁ < ⋯ < j_r, then the pivot columns of R are e₁, …, e_r, and every non-pivot column of R is the coefficient vector expressing the corresponding column of A in terms of columns j₁, …, j_r of A; those coefficients are unique because the pivot columns of A are independent. Hence every entry of R is determined by A. ∎

Theorem 2.2 (Row rank equals column rank). For every A ∈ 𝔽^{m×n}, dim col(A) = dim col(Aᵀ).

Proof. Let r = dim col(A) and let C ∈ 𝔽^{m×r} have as columns a basis of col(A). Each column of A is a combination of the columns of C, so A = CF for some F ∈ 𝔽^{r×n}. Then each row of A is a combination of the r rows of F, so the row space of A has dimension at most r. Thus row rank ≤ column rank for every matrix; applying this to Aᵀ gives the reverse inequality. ∎

The factorization A = CF with C of full column rank and F of full row rank is called a rank factorization. The common value r is the rank of A, and equals the number of pivots in its RREF. In the RREF the non-pivot columns correspond to free variables, and setting one free variable to 1 and the others to 0 produces a basis of null(A), confirming nullity = n − r.

Worked example: A = [ 1 2 3 ; 4 5 6 ; 7 8 9 ] reduces as R₂ − 4R₁ = (0, −3, −6), R₃ − 7R₁ = (0, −6, −12), then R₃ − 2R₂ = 0. The RREF is [ 1 0 −1 ; 0 1 2 ; 0 0 0 ], so the rank is 2, and the free variable x₃ = 1 gives x₁ = 1, x₂ = −2: the null space is spanned by (1, −2, 1). Indeed column 1 − 2 · column 2 + column 3 = 0.

The LU factorization

Gaussian elimination without row swaps subtracts multiples ℓ_ij of row j from row i (i > j) to clear column j below the diagonal. Each step is left multiplication by a unit lower-triangular matrix, the product of these is unit lower triangular, and so is its inverse, which contains the multipliers ℓ_ij in their natural positions. The result is A = LU with L unit lower triangular and U upper triangular.

Theorem 2.3 (Existence and uniqueness of LU). An invertible A ∈ 𝔽^{n×n} has a factorization A = LU with L unit lower triangular and U upper triangular if and only if every leading principal submatrix A_k (rows and columns 1, …, k) is invertible. The factorization is then unique.

Proof. If A = LU, the block structure of triangular matrices gives A_k = L_k U_k, so det A_k = det U_k = u₁₁ ⋯ u_kk; since det A ≠ 0 all u_ii ≠ 0, hence every det A_k ≠ 0. Conversely, induct on n. Write A = [ A_{n−1} b ; cᵀ d ] with A_{n−1} = L′U′ by induction, and seek L = [ L′ 0 ; ℓᵀ 1 ], U = [ U′ u ; 0 δ ]. Multiplying out requires L′u = b, ℓᵀU′ = cᵀ and ℓᵀu + δ = d, which are uniquely solvable because L′ and U′ are invertible. For uniqueness in general, L₁U₁ = L₂U₂ gives L₂⁻¹L₁ = U₂U₁⁻¹, a matrix that is simultaneously unit lower triangular and upper triangular, hence equal to I. ∎

Worked example: for A = [ 2 1 1 ; 4 3 3 ; 8 7 9 ], subtract 2 × row 1 from row 2 and 4 × row 1 from row 3 to get rows (0, 1, 1) and (0, 3, 5); then subtract 3 × the new row 2 from row 3 to get (0, 0, 2). Recording the multipliers 2, 4, 3,

        [ 2  1  1 ]   [ 1  0  0 ] [ 2  1  1 ]
        [ 4  3  3 ] = [ 2  1  0 ] [ 0  1  1 ]
        [ 8  7  9 ]   [ 4  3  1 ] [ 0  0  2 ]

The condition of Theorem 2.3 can fail even for invertible matrices, for example [ 0 1 ; 1 0 ]. Partial pivoting, which at step j swaps into the pivot position the entry of largest absolute value in column j, always succeeds for invertible A and gives PA = LU with P a permutation matrix and all |ℓ_ij| ≤ 1. Its numerical behaviour is discussed in Lesson 12.

Cost. Elimination on an n × n matrix requires about (2/3)n³ floating-point operations. Once A = LU is known, each system Ax = b is solved by forward substitution Ly = b and back substitution Ux = y in about 2n² operations. This is why one factors a matrix once and reuses the factors, and why one essentially never forms A⁻¹ explicitly in order to solve a linear system.

✏️ Your Turn

(a) Find the LU factorization of A = [ 1 2 ; 3 8 ].
(b) Find the rank of B = [ 1 2 1 0 ; 2 4 0 2 ; 3 6 1 2 ].
(c) Show directly that [ 0 1 ; 1 0 ] has no factorization LU with L unit lower triangular and U upper triangular.

Answers: (a) The multiplier is 3, and row 2 − 3 × row 1 = (0, 2), so L = [ 1 0 ; 3 1 ] and U = [ 1 2 ; 0 2 ]. (b) Row 3 = row 1 + row 2, while rows 1 and 2 are independent, so the rank is 2. (c) Comparing (1, 1) entries gives 0 = 1 · u₁₁, so u₁₁ = 0; but then the (2, 1) entry of LU is ℓ₂₁u₁₁ = 0 ≠ 1, a contradiction.

─────────────────────────────────
Lesson 3: Determinants
─────────────────────────────────

📌 Key idea of this section:

        det A = ∑_{σ ∈ Sₙ} sgn(σ) a_{σ(1)1} a_{σ(2)2} ⋯ a_{σ(n)n}
        det(AB) = det A · det B        A invertible ⇔ det A ≠ 0

Permutations and their signs

The symmetric group Sₙ consists of the n! bijections of {1, …, n}. An inversion of σ is a pair i < j with σ(i) > σ(j), and sgn(σ) = (−1)^{inv(σ)}. A transposition of two adjacent values changes the number of inversions by exactly one, and every transposition is a product of an odd number of adjacent ones, so composing with any transposition flips the sign. Since every permutation is a product of transpositions, sgn is a homomorphism Sₙ → {±1}; a k-cycle has sign (−1)^{k−1}.

The axiomatic characterization

Regard a function D : 𝔽^{n×n} → 𝔽 as a function of the n columns of its argument. Call D multilinear if it is linear in each column when the others are fixed, and alternating if D(A) = 0 whenever two columns of A are equal.

Lemma 3.1. An alternating multilinear D changes sign when two columns are exchanged.

Proof. Put x + y in both positions i and j: 0 = D(…, x + y, …, x + y, …) = D(…, x, …, y, …) + D(…, y, …, x, …), because the terms with x, x and y, y vanish. ∎

Theorem 3.2 (Leibniz formula). There is exactly one alternating multilinear function D with D(I) = 1, namely

        det A = ∑_{σ ∈ Sₙ} sgn(σ) ∏_{j=1}^{n} a_{σ(j) j}

Moreover, every alternating multilinear D satisfies D(A) = D(I) · det A.

Proof. Write column j as ∑_i a_ij e_i and expand by multilinearity: D(A) = ∑_f (∏_j a_{f(j) j}) D(e_{f(1)}, …, e_{f(n)}), the sum over all functions f : {1, …, n} → {1, …, n}. If f is not injective, two arguments coincide and the term vanishes. If f = σ is a permutation, then by Lemma 3.1 sorting the columns e_{σ(1)}, …, e_{σ(n)} into the order e₁, …, eₙ by transpositions multiplies D by sgn(σ), so D(e_{σ(1)}, …, e_{σ(n)}) = sgn(σ) D(I). This proves D(A) = D(I) det A and hence uniqueness. For existence, check that the Leibniz sum has the three properties: each term is linear in each column, since it contains exactly one entry from each column; D(I) = 1 since only σ = id contributes; and if columns k and l are equal, the terms for σ and σ ∘ (k l) are equal in absolute value and opposite in sign, so they cancel in pairs. ∎

Corollary 3.3. det Aᵀ = det A. Consequently det is also alternating and multilinear in the rows, and may be expanded along any row or column (Laplace expansion).

Proof. Substituting τ = σ⁻¹, which is a bijection of Sₙ with sgn τ = sgn σ, gives ∏_j a_{σ(j) j} = ∏_i a_{i τ(i)}, so the Leibniz sums for A and Aᵀ agree term by term. ∎

Theorem 3.4 (Multiplicativity). For all A, B ∈ 𝔽^{n×n}, det(AB) = det A · det B.

Proof. Fix A and define D(B) = det(AB). The j-th column of AB is A b_j, which depends linearly on b_j, so D is multilinear in the columns of B; and if two columns of B are equal, the same two columns of AB are equal, so D(B) = 0. By the last statement of Theorem 3.2, D(B) = D(I) det B = det A · det B. ∎

Corollary 3.5. A is invertible if and only if det A ≠ 0, and then det(A⁻¹) = 1/det A. Similar matrices have equal determinants.

Proof. If A is invertible, 1 = det I = det A · det A⁻¹. If A is not invertible, its columns are dependent, say a_k = ∑_{j≠k} c_j a_j; substituting into column k and expanding by multilinearity gives a sum of determinants each with a repeated column, so det A = 0. Finally det(P⁻¹AP) = det P⁻¹ det A det P = det A. ∎

Geometric meaning and computation

For real A, |det A| is the factor by which the map x ↦ Ax multiplies n-dimensional volume, and the sign records whether orientation is preserved. This is the origin of the Jacobian determinant in the change-of-variables formula for multiple integrals. Computationally, the Leibniz formula has n! terms and is useless beyond tiny n. Instead one factors PA = LU, and then det A = sgn(P) u₁₁ u₂₂ ⋯ uₙₙ at a cost of O(n³). For the matrix of Lesson 2, det [ 2 1 1 ; 4 3 3 ; 8 7 9 ] = 2 · 1 · 2 = 4.

Theorem 3.6 (Vandermonde determinant). For V = (x_i^{j−1}), the n × n matrix whose i-th row is (1, x_i, x_i², …, x_i^{n−1}),

        det V = ∏_{1 ≤ i < j ≤ n} (x_j − x_i)

Proof. Induct on n; n = 1 is trivial. Replace x_n by a variable t. The determinant is a polynomial in t of degree at most n − 1 whose coefficient of t^{n−1} is, by expansion along the last row, the Vandermonde determinant of x₁, …, x_{n−1}. It vanishes at t = x₁, …, x_{n−1} because two rows then coincide. If the x_i are distinct, the polynomial therefore equals V_{n−1} ∏_{i<n} (t − x_i), and setting t = x_n completes the induction. The identity then holds for all values because both sides are polynomials that agree on a dense set. ∎

Consequently a polynomial of degree less than n is determined by its values at n distinct points: Lagrange interpolation is precisely the statement that V is invertible.

✏️ Your Turn

(a) Evaluate the Vandermonde determinant for x₁ = 1, x₂ = 2, x₃ = 4.
(b) Compute det of the permutation matrix [ 0 1 0 ; 0 0 1 ; 1 0 0 ].
(c) Show that every real skew-symmetric matrix (Aᵀ = −A) of odd size is singular.

Answers: (a) (2 − 1)(4 − 1)(4 − 2) = 1 · 3 · 2 = 6. (b) The matrix sends e₁ ↦ e₃, e₂ ↦ e₁, e₃ ↦ e₂, a 3-cycle, whose sign is (−1)² = +1, so the determinant is 1. (c) det A = det Aᵀ = det(−A) = (−1)ⁿ det A = −det A for odd n, so det A = 0.

─────────────────────────────────
Lesson 4: Inverses, Cramer's Rule and Block Matrices
─────────────────────────────────

📌 Key idea of this section:

        A · adj(A) = adj(A) · A = (det A) I
        det [ A B ; C D ] = det A · det(D − C A⁻¹ B)

The adjugate

The (i, j) minor M_ij of A is the determinant of the (n − 1) × (n − 1) matrix obtained by deleting row i and column j, and the cofactor is C_ij = (−1)^{i+j} M_ij. Laplace expansion along row i reads det A = ∑_j a_ij C_ij. The adjugate adj(A) is the transpose of the cofactor matrix: adj(A)_ji = C_ij.

Theorem 4.1. A · adj(A) = adj(A) · A = (det A) I. Hence, if det A ≠ 0, A⁻¹ = adj(A)/det A.

Proof. The (i, k) entry of A · adj(A) is ∑_j a_ij C_kj. For i = k this is the expansion of det A along row i. For i ≠ k it is the expansion along row k of the matrix obtained from A by replacing row k with row i; that matrix has two equal rows, so its determinant is 0. The other product is handled by expanding along columns. ∎

For n = 2 the theorem gives the familiar formula [ a b ; c d ]⁻¹ = (1/(ad − bc)) [ d −b ; −c a ]. Theorem 4.1 also shows that the entries of A⁻¹ are rational functions of the entries of A, so inversion is continuous, indeed smooth, on the open set of invertible matrices.

Theorem 4.2 (Cramer's rule, 1750). If det A ≠ 0, the unique solution of Ax = b has components x_i = det A_i(b) / det A, where A_i(b) is A with column i replaced by b.

Proof. Let X_i be the identity matrix with column i replaced by x. Then A X_i = A_i(b), because A e_j = a_j for j ≠ i and A x = b. Expanding det X_i along row i gives det X_i = x_i. Taking determinants, det A · x_i = det A_i(b). ∎

Worked example: for 2x + y = 5 and x + 3y = 10, det A = 6 − 1 = 5, so x = det [ 5 1 ; 10 3 ]/5 = (15 − 10)/5 = 1 and y = det [ 2 5 ; 1 10 ]/5 = (20 − 5)/5 = 3. Cramer's rule is of great theoretical value, for example in proving that the solution depends smoothly on the data and in bounding the size of integer solutions, but as an algorithm it costs far more than elimination and is numerically inferior.

Block elimination and the Schur complement

Matrices may be partitioned into blocks and multiplied blockwise, provided the block sizes are compatible. Suppose M = [ A B ; C D ] with A square and invertible. Block elimination gives the factorization

        [ A  B ]   [ I       0 ] [ A  0 ] [ I  A⁻¹B ]
        [ C  D ] = [ CA⁻¹    I ] [ 0  S ] [ 0    I  ]        S = D − C A⁻¹ B

The matrix S is the Schur complement of A in M. Since the outer factors are block unitriangular with determinant 1, det M = det A · det S. Inverting the three factors yields

        M⁻¹ = [ A⁻¹ + A⁻¹ B S⁻¹ C A⁻¹     −A⁻¹ B S⁻¹ ]
              [ −S⁻¹ C A⁻¹                  S⁻¹      ]

whenever S is invertible. Schur complements appear throughout mathematics: as conditional covariance matrices of Gaussian vectors, in the reduction of a quadratic form, in domain decomposition methods, and in the proof of Sylvester's criterion in Lesson 9.

Low-rank updates

Theorem 4.3 (Sherman–Morrison–Woodbury). Let A ∈ 𝔽^{n×n} and C ∈ 𝔽^{k×k} be invertible and U ∈ 𝔽^{n×k}, V ∈ 𝔽^{k×n}. If C⁻¹ + V A⁻¹ U is invertible, then

        (A + U C V)⁻¹ = A⁻¹ − A⁻¹ U (C⁻¹ + V A⁻¹ U)⁻¹ V A⁻¹

Proof. Multiply A + UCV by the proposed inverse. The product is I + UCVA⁻¹ − U(C⁻¹ + VA⁻¹U)⁻¹VA⁻¹ − UCVA⁻¹U(C⁻¹ + VA⁻¹U)⁻¹VA⁻¹. The last two terms combine to −UC(C⁻¹ + VA⁻¹U)(C⁻¹ + VA⁻¹U)⁻¹VA⁻¹ = −UCVA⁻¹, which cancels the second term, leaving I. ∎

The case k = 1 is the Sherman–Morrison formula (A + uvᵀ)⁻¹ = A⁻¹ − A⁻¹uvᵀA⁻¹/(1 + vᵀA⁻¹u). Its companion is the matrix determinant lemma det(A + uvᵀ) = det A · (1 + vᵀA⁻¹u), which follows from det(I + xvᵀ) = 1 + vᵀx: indeed I + xvᵀ maps x to (1 + vᵀx)x and fixes every vector of the (n − 1)-dimensional subspace {w : vᵀw = 0}, so (when vᵀx ≠ 0, and by continuity otherwise) its eigenvalues are 1 + vᵀx and 1 repeated n − 1 times. These formulas let one update a factorization after a rank-one change in O(n²) operations instead of refactoring in O(n³); they are the engine of quasi-Newton methods such as BFGS and of recursive least squares.

The Neumann series

If ‖E‖ < 1 in some submultiplicative matrix norm, then I − E is invertible and (I − E)⁻¹ = I + E + E² + ⋯, with ‖(I − E)⁻¹‖ ≤ 1/(1 − ‖E‖). The proof is the geometric series: the partial sums are Cauchy, and (I − E)(I + E + ⋯ + E^k) = I − E^{k+1} → I. One consequence is that the invertible matrices form an open set: if A is invertible and ‖A⁻¹‖ ‖F‖ < 1, then A + F = A(I + A⁻¹F) is invertible.

✏️ Your Turn

(a) Compute the inverse of [ 2 1 ; 5 3 ] using the adjugate.
(b) Let u = (1, 2, 3)ᵀ and v = (1, 1, 1)ᵀ. Find det(I + uvᵀ).
(c) For the same u and v, use Sherman–Morrison to write (I + uvᵀ)⁻¹.

Answers: (a) The determinant is 6 − 5 = 1, so the inverse is the adjugate [ 3 −1 ; −5 2 ]. (b) det(I + uvᵀ) = 1 + vᵀu = 1 + 1 + 2 + 3 = 7. (c) With A = I the formula gives (I + uvᵀ)⁻¹ = I − uvᵀ/(1 + vᵀu) = I − (1/7) uvᵀ, where uvᵀ = [ 1 1 1 ; 2 2 2 ; 3 3 3 ].

─────────────────────────────────
Lesson 5: Eigenvalues and the Cayley–Hamilton Theorem
─────────────────────────────────

📌 Key idea of this section:

        Av = λv, v ≠ 0   ⇔   det(λI − A) = 0
        p_A(A) = 0   for   p_A(λ) = det(λI − A)

Eigenvalues and the characteristic polynomial

A scalar λ is an eigenvalue of A ∈ 𝔽^{n×n} if Av = λv for some nonzero vector v, an eigenvector. Equivalently A − λI is singular, that is, λ is a root of the characteristic polynomial p_A(λ) = det(λI − A). By the Leibniz formula p_A is monic of degree n, and expanding gives

        p_A(λ) = λⁿ − (tr A) λ^{n−1} + E₂(A) λ^{n−2} − ⋯ + (−1)ⁿ det A

where E_k(A) is the sum of all k × k principal minors. Over ℂ the fundamental theorem of algebra factors p_A(λ) = ∏ (λ − λ_i), so tr A = ∑ λ_i, det A = ∏ λ_i, and in general E_k(A) is the k-th elementary symmetric function of the eigenvalues. Similar matrices have the same characteristic polynomial, since det(λI − P⁻¹AP) = det(P⁻¹(λI − A)P) = det(λI − A). The converse fails: I and [ 1 1 ; 0 1 ] share the polynomial (λ − 1)² but are not similar, since only I is similar to I.

Over ℝ a matrix need not have any eigenvalue: the rotation [ 0 −1 ; 1 0 ] has p(λ) = λ² + 1. This is why most of spectral theory is done over ℂ, or over an algebraically closed field.

Multiplicities

The algebraic multiplicity of λ is its multiplicity as a root of p_A; the geometric multiplicity is dim ker(A − λI).

Proposition 5.1. The geometric multiplicity never exceeds the algebraic multiplicity.

Proof. Let v₁, …, v_g be a basis of ker(A − λI) and extend it to a basis of 𝔽ⁿ. In this basis A has block form [ λI_g X ; 0 Y ], so p_A(t) = (t − λ)^g p_Y(t), and (t − λ)^g divides p_A. ∎

Proposition 5.2. Eigenvectors belonging to distinct eigenvalues are linearly independent.

Proof. Suppose not, and take a shortest nontrivial relation c₁v₁ + ⋯ + c_kv_k = 0 among eigenvectors with distinct eigenvalues λ₁, …, λ_k; all c_i ≠ 0 and k ≥ 2. Applying A − λ_k I gives ∑_{i<k} c_i(λ_i − λ_k)v_i = 0, a shorter nontrivial relation, a contradiction. ∎

Worked example: A = [ 4 1 ; 2 3 ] has tr A = 7 and det A = 10, so p_A(λ) = λ² − 7λ + 10 = (λ − 5)(λ − 2). For λ = 5, A − 5I = [ −1 1 ; 2 −2 ] has kernel spanned by (1, 1); for λ = 2, A − 2I = [ 2 1 ; 2 1 ] has kernel spanned by (1, −2). By Proposition 5.2 these two eigenvectors form a basis of 𝔽².

The Cayley–Hamilton theorem

For a polynomial q(t) = c₀ + c₁t + ⋯ + c_k t^k define q(A) = c₀I + c₁A + ⋯ + c_kA^k. The map q ↦ q(A) is a ring homomorphism from 𝔽[t] to the commutative subalgebra 𝔽[A] of matrices.

Theorem 5.3 (Cayley–Hamilton). Every square matrix satisfies its own characteristic polynomial: p_A(A) = 0.

Proof. The tempting argument "substitute λ = A into det(λI − A)" is not valid, because det(AI − A) is the scalar det 0, whereas p_A(A) is a matrix. Instead, apply Theorem 4.1 to λI − A over the polynomial ring: (λI − A) adj(λI − A) = p_A(λ) I. The entries of adj(λI − A) are polynomials in λ of degree at most n − 1, so adj(λI − A) = B₀ + B₁λ + ⋯ + B_{n−1}λ^{n−1} with constant matrices B_k. Write p_A(λ) = c₀ + c₁λ + ⋯ + λⁿ and compare coefficients of λ^k:

        −A B₀ = c₀ I,     B_{k−1} − A B_k = c_k I  (1 ≤ k ≤ n − 1),     B_{n−1} = I

Multiply the equation for λ^k on the left by A^k and add all of them. The left sides telescope: −AB₀ + (AB₀ − A²B₁) + ⋯ + (A^{n−1}B_{n−2} − AⁿB_{n−1}) + AⁿB_{n−1} = 0. The right sides add up to c₀I + c₁A + ⋯ + Aⁿ = p_A(A). ∎

Cayley stated the theorem in 1858, verified it for 2 × 2 matrices and reported checking the 3 × 3 case; Hamilton had met a special case in his work on quaternions. The first general proof is due to Frobenius (1878). The theorem holds over every commutative ring, and the proof above works verbatim in that generality.

For the matrix A = [ 4 1 ; 2 3 ] above, Cayley–Hamilton says A² = 7A − 10I. Consequently every power of A is a combination of A and I, and A⁻¹ = (7I − A)/10 = (1/10)[ 3 −1 ; −2 4 ]. More generally, if det A ≠ 0 then A⁻¹ is a polynomial in A of degree at most n − 1.

The minimal polynomial

The set of polynomials q with q(A) = 0 is a nonzero ideal of 𝔽[t] (it contains p_A), so it is generated by a unique monic polynomial m_A, the minimal polynomial. By Cayley–Hamilton m_A divides p_A. Conversely every eigenvalue is a root of m_A: if Av = λv then 0 = m_A(A)v = m_A(λ)v. Hence m_A and p_A have the same roots, possibly with smaller multiplicities in m_A. The minimal polynomial is the right object for deciding diagonalizability, as Lesson 6 shows.

✏️ Your Turn

(a) Find the eigenvalues of A = [ 2 0 0 ; 1 3 0 ; 4 5 6 ].
(b) With A = [ 4 1 ; 2 3 ], use Cayley–Hamilton to express A³ as αA + βI.
(c) Give a 3 × 3 matrix with characteristic polynomial (λ − 2)³ and minimal polynomial (λ − 2)².

Answers: (a) The matrix is lower triangular, so det(λI − A) = (λ − 2)(λ − 3)(λ − 6) and the eigenvalues are 2, 3, 6. (b) A³ = A · A² = A(7A − 10I) = 7A² − 10A = 7(7A − 10I) − 10A = 39A − 70I; one checks A³ = [ 86 39 ; 78 47 ] = 39A − 70I. (c) For example [ 2 1 0 ; 0 2 0 ; 0 0 2 ]: with N = A − 2I we have N ≠ 0 but N² = 0, so the minimal polynomial is (λ − 2)².

─────────────────────────────────
Lesson 6: Diagonalization and the Jordan Normal Form
─────────────────────────────────

📌 Key idea of this section:

        A diagonalizable  ⇔  m_A has distinct roots  ⇔  ∑ geometric multiplicities = n
        A = S (J_{k₁}(λ₁) ⊕ ⋯ ⊕ J_{k_s}(λ_s)) S⁻¹,   unique up to the order of blocks

Diagonalizability

A is diagonalizable if A = SΛS⁻¹ with Λ diagonal; the columns of S are then eigenvectors and the diagonal of Λ lists the eigenvalues. Thus A is diagonalizable precisely when 𝔽ⁿ has a basis of eigenvectors. Diagonalization makes functions of A transparent: A^k = SΛ^kS⁻¹, and more generally q(A) = S q(Λ) S⁻¹.

Lemma 6.1 (Kernel decomposition). If q = q₁q₂ with gcd(q₁, q₂) = 1, then ker q(A) = ker q₁(A) ⊕ ker q₂(A).

Proof. By Bézout there are polynomials a, b with aq₁ + bq₂ = 1, hence I = a(A)q₁(A) + b(A)q₂(A). For x ∈ ker q(A), put x₁ = b(A)q₂(A)x and x₂ = a(A)q₁(A)x. Then x = x₁ + x₂, while q₁(A)x₁ = b(A)q(A)x = 0 and q₂(A)x₂ = 0. If x lies in both kernels, x = a(A)q₁(A)x + b(A)q₂(A)x = 0. ∎

Theorem 6.2. For A ∈ 𝔽^{n×n} the following are equivalent: (i) A is diagonalizable over 𝔽; (ii) p_A splits over 𝔽 and, for each eigenvalue, the geometric multiplicity equals the algebraic multiplicity; (iii) m_A splits over 𝔽 into distinct linear factors.

Proof. (i) ⇒ (iii): if A = SΛS⁻¹ with distinct diagonal values μ₁, …, μ_s, then q(t) = ∏(t − μ_j) kills Λ and hence A, so m_A divides q and has distinct roots. (iii) ⇒ (i): if m_A = ∏(t − μ_j) with distinct μ_j, repeated use of Lemma 6.1 gives 𝔽ⁿ = ker m_A(A) = ⊕ ker(A − μ_jI), a direct sum of eigenspaces. (i) ⇔ (ii): eigenspaces for distinct eigenvalues form a direct sum by Proposition 5.2, so A has a basis of eigenvectors exactly when the geometric multiplicities add up to n; since each is at most the corresponding algebraic multiplicity (Proposition 5.1) and those add up to at most n, with equality exactly when p_A splits, this happens exactly under (ii). ∎

Corollary 6.3. A matrix with n distinct eigenvalues is diagonalizable. Over ℂ the diagonalizable matrices are dense, since an arbitrarily small perturbation of the upper triangular Schur form (Lesson 8) separates the eigenvalues.

Jordan blocks

The Jordan block J_k(λ) is the k × k matrix with λ on the diagonal, 1 on the superdiagonal and 0 elsewhere. With N = J_k(λ) − λI, the shift N sends e_k ↦ e_{k−1} ↦ ⋯ ↦ e₁ ↦ 0, so N^{k−1} ≠ 0 and N^k = 0. Hence J_k(λ) has the single eigenvalue λ with algebraic multiplicity k, geometric multiplicity 1, and minimal polynomial (t − λ)^k. For k ≥ 2 it is not diagonalizable.

Theorem 6.4 (Jordan normal form). Let A ∈ ℂ^{n×n}, or more generally suppose p_A splits over 𝔽. Then A is similar to a block-diagonal matrix J = J_{k₁}(λ₁) ⊕ ⋯ ⊕ J_{k_s}(λ_s), and J is unique up to the order of the blocks.

Proof. Step 1 (generalized eigenspaces). Write p_A = ∏(t − μ_j)^{a_j} with distinct μ_j. By Cayley–Hamilton and Lemma 6.1, 𝔽ⁿ = ⊕_j G_j with G_j = ker(A − μ_jI)^{a_j}. Each G_j is A-invariant, and on G_j the operator N_j = A − μ_jI is nilpotent. It therefore suffices to show that a nilpotent operator N on a space G has a basis consisting of chains x, Nx, …, N^{k−1}x with N^k x = 0, because in the reversed basis N^{k−1}x, …, Nx, x each chain is a single shift block.

Step 2 (nilpotent operators). Induct on dim G; the case dim G = 0 is empty. Since N is nilpotent, N is not injective, so W = N(G) is a proper N-invariant subspace. By induction W has a basis of chains: vectors y₁, …, y_p and lengths ℓ₁, …, ℓ_p such that the vectors N^r y_i (0 ≤ r < ℓ_i) form a basis of W and N^{ℓ_i} y_i = 0. Each y_i lies in N(G), so choose x_i with Nx_i = y_i. The vectors N^{ℓ_i − 1}y_i (the chain ends) are independent and lie in ker N; extend them to a basis of ker N by vectors z₁, …, z_q. Consider the chains x_i, Nx_i, …, N^{ℓ_i}x_i (length ℓ_i + 1) together with the one-element chains z_j. Their number of vectors is dim W + p + q = dim im N + dim ker N = dim G. They are independent: given a vanishing linear combination, apply N; the z_j and the chain ends N^{ℓ_i}x_i are killed, and what remains is a combination of the basis of W, so all coefficients except those of N^{ℓ_i}x_i = N^{ℓ_i−1}y_i and z_j vanish; those remaining vectors are independent by construction, so their coefficients vanish as well. Thus we have a chain basis of G.

Step 3 (uniqueness). For an eigenvalue λ let r_k = rank(A − λI)^k, with r₀ = n. On a block J_m(λ) the rank of N^k drops by one for each k ≤ m, while blocks with other eigenvalues are invertible under A − λI. Counting gives that the number of Jordan blocks for λ of size at least k equals r_{k−1} − r_k. These ranks are similarity invariants, so the block sizes are determined by A. ∎

Corollary 6.5. The number of Jordan blocks for λ of size exactly k is r_{k−1} − 2r_k + r_{k+1}. The number of blocks for λ is its geometric multiplicity, the sum of their sizes is its algebraic multiplicity, and the largest size is its multiplicity as a root of m_A.

Worked example: A = [ 3 1 ; −1 1 ] has tr A = 4 and det A = 4, so p_A(λ) = (λ − 2)². Since A − 2I = [ 1 1 ; −1 −1 ] has rank 1, there is a single block: A ∼ J₂(2). A chain is obtained by choosing x = e₁, which is not in ker(A − 2I), and setting y = (A − 2I)x = (1, −1). With S = [ y x ] = [ 1 1 ; −1 0 ] one has A = S J₂(2) S⁻¹.

The matrix exponential

For any square A the series exp(A) = ∑_{k≥0} A^k/k! converges absolutely, and x(t) = exp(tA)x₀ is the unique solution of x′ = Ax with x(0) = x₀. If AB = BA then exp(A + B) = exp(A)exp(B), the binomial theorem being valid for commuting matrices. Writing J_k(λ) = λI + N with N nilpotent and commuting with λI,

        exp(t J_k(λ)) = e^{λt} ( I + tN + t²N²/2! + ⋯ + t^{k−1}N^{k−1}/(k−1)! )

For the worked example, N = A − 2I satisfies N² = 0, so exp(tA) = e^{2t}(I + tN) = e^{2t} [ 1 + t  t ; −t  1 − t ]. The polynomial factors t^j e^{λt} that appear for nontrivial blocks are the source of the secular terms in the theory of linear differential equations with repeated characteristic roots.

Two caveats are important in practice. First, the Jordan form is discontinuous in the entries: the matrix [ 0 1 ; ε 0 ] is diagonalizable with eigenvalues ±√ε for every ε > 0, but tends to J₂(0). The Jordan form therefore cannot be computed stably in floating-point arithmetic, and numerical work uses the Schur form of Lesson 8 instead. Second, every A with split characteristic polynomial decomposes uniquely as A = D + N with D diagonalizable, N nilpotent and DN = ND (the Jordan–Chevalley decomposition); moreover D and N are polynomials in A.

✏️ Your Turn

(a) How many similarity classes of 4 × 4 nilpotent complex matrices are there?
(b) A is 7 × 7 with single eigenvalue 3, and with N = A − 3I one has rank N = 4, rank N² = 2, rank N³ = 1, rank N⁴ = 0. Find the Jordan block sizes.
(c) Compute exp(tA) for A = [ 0 1 ; 0 0 ] and use it to solve x′ = Ax with x(0) = (a, b).

Answers: (a) Nilpotent Jordan forms correspond to partitions of 4: 4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1, so there are 5 classes. (b) Blocks of size ≥ 1: 7 − 4 = 3; ≥ 2: 4 − 2 = 2; ≥ 3: 2 − 1 = 1; ≥ 4: 1 − 0 = 1; ≥ 5: 0. Hence the sizes are 4, 2, 1 (and indeed 4 + 2 + 1 = 7). (c) A² = 0, so exp(tA) = I + tA = [ 1 t ; 0 1 ] and x(t) = (a + bt, b).

─────────────────────────────────
Lesson 7: Inner Products, Gram–Schmidt and QR
─────────────────────────────────

📌 Key idea of this section:

        A = QR,  Q*Q = I,  R upper triangular        Pb = QQ*b is the closest point of col(A) to b
        least squares:  A*A x = A*b   ⇔   R x = Q*b

Inner products and the Cauchy–Schwarz inequality

An inner product on a vector space V over 𝔽 is a map ⟨·, ·⟩ : V × V → 𝔽 that is linear in its first argument, conjugate symmetric (⟨y, x⟩ is the complex conjugate of ⟨x, y⟩) and positive definite (⟨x, x⟩ > 0 for x ≠ 0). The standard inner product on 𝔽ⁿ is ⟨x, y⟩ = y*x = ∑ x_i ȳ_i, with norm ‖x‖ = ⟨x, x⟩^{1/2}. Other important examples are ⟨x, y⟩_M = y*Mx for a positive definite matrix M (Lesson 9), and ⟨f, g⟩ = ∫₀¹ f(t) g(t) dt on polynomials, which leads to the Legendre polynomials and to the Hilbert matrix of Lesson 12.

Theorem 7.1 (Cauchy–Schwarz). |⟨x, y⟩| ≤ ‖x‖ ‖y‖, with equality if and only if x and y are linearly dependent.

Proof. The case y = 0 is trivial. Otherwise let p = (⟨x, y⟩/‖y‖²) y. Then ⟨x − p, y⟩ = ⟨x, y⟩ − ⟨x, y⟩ = 0, so x − p ⊥ p and Pythagoras gives ‖x‖² = ‖p‖² + ‖x − p‖² ≥ ‖p‖² = |⟨x, y⟩|²/‖y‖². Equality holds exactly when x = p, that is, when x is a multiple of y. ∎

The triangle inequality ‖x + y‖ ≤ ‖x‖ + ‖y‖ follows by expanding ‖x + y‖² and applying Cauchy–Schwarz to the cross term.

Gram–Schmidt and the QR factorization

Given linearly independent a₁, …, aₙ, the Gram–Schmidt process sets q₁ = a₁/‖a₁‖ and, for k ≥ 2,

        v_k = a_k − ∑_{j<k} ⟨a_k, q_j⟩ q_j,        q_k = v_k / ‖v_k‖

By induction q₁, …, q_k is an orthonormal basis of span(a₁, …, a_k) for every k; v_k ≠ 0 because a_k is not in the span of its predecessors. Solving for a_k gives a_k = ∑_{j≤k} r_jk q_j with r_jk = ⟨a_k, q_j⟩ for j < k and r_kk = ‖v_k‖ > 0. In matrix form this is the QR factorization.

Theorem 7.2 (QR factorization). If A ∈ 𝔽^{m×n} has linearly independent columns, then A = QR with Q ∈ 𝔽^{m×n} having orthonormal columns and R ∈ 𝔽^{n×n} upper triangular with positive diagonal. This factorization is unique.

Proof. Existence is Gram–Schmidt. For uniqueness, suppose Q₁R₁ = Q₂R₂. Then A*A = R₁*R₁ = R₂*R₂, so the matrix X = R₂R₁⁻¹ equals (R₂*)⁻¹R₁* = (R₁R₂⁻¹)*. The first expression is upper triangular and the last is lower triangular, so X is diagonal with positive diagonal entries. Moreover X*X = R₁⁻* R₂*R₂ R₁⁻¹ = R₁⁻* R₁*R₁ R₁⁻¹ = I, so each diagonal entry has modulus 1 and therefore equals 1. Hence R₁ = R₂ and Q₁ = Q₂. ∎

Worked example: let a₁ = (1, 1, 0) and a₂ = (1, 0, 1). Then q₁ = (1, 1, 0)/√2, ⟨a₂, q₁⟩ = 1/√2, and v₂ = a₂ − (1/2)(1, 1, 0) = (1/2, −1/2, 1) with ‖v₂‖ = √(3/2). Thus q₂ = (1, −1, 2)/√6 and

        [ 1  1 ]   [ 1/√2    1/√6 ]
        [ 1  0 ] = [ 1/√2   −1/√6 ] [ √2   1/√2  ]
        [ 0  1 ]   [ 0       2/√6 ] [ 0    √(3/2) ]

Orthogonal projection and least squares

Let W be a subspace with orthonormal basis given by the columns of Q, and let P = QQ*. Then P² = P = P*, Pb ∈ W, and b − Pb ⊥ W.

Theorem 7.3 (Best approximation). For every w ∈ W, ‖b − w‖ ≥ ‖b − Pb‖, with equality only for w = Pb.

Proof. Write b − w = (b − Pb) + (Pb − w). The first summand is orthogonal to W and the second lies in W, so ‖b − w‖² = ‖b − Pb‖² + ‖Pb − w‖². ∎

Now consider an overdetermined system Ax = b with A ∈ 𝔽^{m×n}, m > n, of full column rank. The least-squares problem asks for x minimizing ‖Ax − b‖. By Theorem 7.3 the minimizer satisfies Ax = Pb, the projection of b onto col(A); equivalently the residual is orthogonal to col(A), that is, A*(b − Ax) = 0. These are the normal equations A*A x = A*b. Since A*A is invertible when A has full column rank, x = (A*A)⁻¹A*b, and the projection onto col(A) is P = A(A*A)⁻¹A*. With A = QR the normal equations collapse to R x = Q*b, which is solved by back substitution.

Worked example: fit a line y = c₀ + c₁t to the data (0, 1), (1, 2), (2, 2). Here A has rows (1, 0), (1, 1), (1, 2) and b = (1, 2, 2), so AᵀA = [ 3 3 ; 3 5 ] and Aᵀb = (5, 6). The normal equations give c₀ = 7/6 and c₁ = 1/2. The residuals are −1/6, 1/3, −1/6; they sum to zero and are orthogonal to (0, 1, 2), as the normal equations require.

Householder reflections and numerical orthogonality

For a nonzero vector v, the Householder matrix H = I − 2vv*/(v*v) is Hermitian and unitary, and it reflects in the hyperplane orthogonal to v. Given x, the choice v = x + sign(x₁)‖x‖e₁ (for real x) yields Hx = −sign(x₁)‖x‖e₁, and the sign is chosen to avoid cancellation. Applying n such reflections annihilates the subdiagonal of A column by column and produces A = QR with Q orthogonal to working precision. In floating-point arithmetic the classical Gram–Schmidt process can lose orthogonality badly when A is ill conditioned; the modified Gram–Schmidt process, which subtracts each projection from the current vector immediately, loses orthogonality only in proportion to κ(A) times the unit roundoff (Björck, 1967); Householder QR is backward stable regardless of conditioning. Solving least-squares problems through the normal equations is avoided in practice because κ(A*A) = κ(A)², a fact explained in Lesson 12.

The process is named after Jørgen Pedersen Gram (1883) and Erhard Schmidt (1907), although the underlying computation already appears in work of Laplace. Alston Householder introduced his reflections for QR factorization in 1958.

✏️ Your Turn

(a) Find the matrix of orthogonal projection onto the line spanned by (1, 2) in ℝ².
(b) Find the distance from b = (1, 2, 3) to the line spanned by (1, 1, 1).
(c) Find the Householder reflection H with H(3, 4) = (5, 0).

Answers: (a) P = aaᵀ/(aᵀa) = (1/5) [ 1 2 ; 2 4 ]. (b) The projection is ((1 + 2 + 3)/3)(1, 1, 1) = (2, 2, 2), the residual is (−1, 0, 1), and the distance is √2. (c) Take v = (3, 4) − (5, 0) = (−2, 4); then H = I − 2vvᵀ/20 = I − (1/10) [ 4 −8 ; −8 16 ] = [ 0.6 0.8 ; 0.8 −0.6 ], and indeed H(3, 4) = (1.8 + 3.2, 2.4 − 2.4) = (5, 0).

─────────────────────────────────
Lesson 8: The Spectral Theorem
─────────────────────────────────

📌 Key idea of this section:

        A normal (AA* = A*A)   ⇔   A = U Λ U*  with U unitary, Λ diagonal
        λ_k(A) = max_{dim S = k} min_{x ∈ S, x ≠ 0} x*Ax / x*x

Adjoints and special classes of matrices

With the standard inner product, ⟨Ax, y⟩ = ⟨x, A*y⟩ for all x, y, so the conjugate transpose is the adjoint of A. A matrix is Hermitian (real symmetric, in the real case) if A* = A, unitary (real orthogonal) if U*U = I, skew-Hermitian if A* = −A, and normal if AA* = A*A. Hermitian, skew-Hermitian and unitary matrices are all normal. Unitary matrices preserve inner products, ⟨Ux, Uy⟩ = ⟨x, y⟩, hence lengths and angles; their eigenvalues have modulus 1.

Lemma 8.1. The eigenvalues of a Hermitian matrix are real, and eigenvectors belonging to distinct eigenvalues are orthogonal.

Proof. If Av = λv with v ≠ 0, then λ‖v‖² = ⟨Av, v⟩ = ⟨v, Av⟩ = λ̄‖v‖², so λ is real. If also Aw = μw with μ ≠ λ, then λ⟨v, w⟩ = ⟨Av, w⟩ = ⟨v, Aw⟩ = μ⟨v, w⟩ (μ is real), so ⟨v, w⟩ = 0. ∎

Schur triangularization

Theorem 8.2 (Schur, 1909). Every A ∈ ℂ^{n×n} is unitarily similar to an upper triangular matrix: A = UTU* with U unitary and T upper triangular. The diagonal of T consists of the eigenvalues of A, in any prescribed order.

Proof. Induct on n. Let u₁ be a unit eigenvector, Au₁ = λ₁u₁, and extend it to a unitary matrix U₁ = [ u₁ U′ ]. Then U₁*AU₁ = [ λ₁ w* ; 0 A′ ] for some vector w and some (n − 1) × (n − 1) matrix A′, because the first column of U₁*AU₁ is U₁*λ₁u₁ = λ₁e₁. By induction A′ = U₂T′U₂*, and U = U₁(1 ⊕ U₂) triangularizes A. ∎

Unlike the Jordan form, the Schur form is computed stably: it is the output of the QR algorithm of Lesson 12. If A is real with real eigenvalues, U may be taken real orthogonal; for general real A there is a real Schur form, quasi-triangular with 2 × 2 diagonal blocks for complex conjugate pairs.

The spectral theorem

Theorem 8.3 (Spectral theorem). A matrix A ∈ ℂ^{n×n} is normal if and only if A = UΛU* for some unitary U and diagonal Λ. In particular every Hermitian matrix is unitarily diagonalizable with real Λ, and every real symmetric matrix is orthogonally diagonalizable: A = QΛQᵀ with Q real orthogonal and Λ real.

Proof. If A = UΛU*, then AA* = UΛΛ̄U* = UΛ̄ΛU* = A*A. Conversely, let A be normal and write A = UTU* by Schur. Then T is normal as well. Compare the (1, 1) entries of TT* and T*T: the first is ∑_j |t_1j|² and the second is |t₁₁|², because the first column of T is t₁₁e₁. Hence t_1j = 0 for j > 1. Deleting the first row and column leaves a normal upper triangular matrix, and induction shows T is diagonal. For Hermitian A, Λ = U*AU is Hermitian and diagonal, hence real. For real symmetric A the eigenvalues are real, so at each step of the Schur induction one may choose a real unit eigenvector and real orthogonal completions; the resulting real triangular T is symmetric, hence diagonal. ∎

Writing the columns of U as q₁, …, qₙ, the spectral theorem reads A = ∑ λ_i q_i q_i*: a Hermitian matrix is a real combination of orthogonal rank-one projections. This yields a functional calculus, f(A) = ∑ f(λ_i) q_i q_i*, which defines √A, log A or exp A for Hermitian A consistently with the power-series definitions wherever those apply. The theorem has a long history: Cauchy proved in 1829 that the eigenvalues of a real symmetric matrix are real, in connection with quadric surfaces and principal axes, and Hilbert's work on integral equations (1904–1910) extended the theory to infinite dimensions and introduced the word spectrum.

Worked example: A = [ 2 1 ; 1 2 ] has eigenvalues 3 and 1 with unit eigenvectors (1, 1)/√2 and (1, −1)/√2, so A = QΛQᵀ with Q = (1/√2) [ 1 1 ; 1 −1 ] and Λ = diag(3, 1); equivalently A = 3 · (1/2)[ 1 1 ; 1 1 ] + 1 · (1/2)[ 1 −1 ; −1 1 ].

Variational characterization of eigenvalues

For Hermitian A let λ₁ ≥ λ₂ ≥ ⋯ ≥ λₙ be its eigenvalues with orthonormal eigenvectors q₁, …, qₙ. The Rayleigh quotient is R(x) = x*Ax/x*x for x ≠ 0. Expanding x = ∑ c_i q_i gives R(x) = ∑ λ_i |c_i|² / ∑ |c_i|², a weighted average of eigenvalues; hence max R = λ₁ and min R = λₙ.

Theorem 8.4 (Courant–Fischer min-max). For k = 1, …, n,

        λ_k = max_{dim S = k}  min_{x ∈ S, x ≠ 0} R(x)  =  min_{dim S = n−k+1}  max_{x ∈ S, x ≠ 0} R(x)

Proof. Let S have dimension k. The subspace T = span(q_k, …, qₙ) has dimension n − k + 1, so dim(S ∩ T) ≥ k + (n − k + 1) − n = 1. For nonzero x ∈ S ∩ T, R(x) is a weighted average of λ_k, …, λₙ, so R(x) ≤ λ_k; thus min over S of R is at most λ_k. For S = span(q₁, …, q_k) the minimum equals λ_k. This proves the first formula; the second follows in the same way, or by applying the first to −A. ∎

Corollary 8.5 (Weyl's inequalities). For Hermitian A and B, λ_k(A) + λₙ(B) ≤ λ_k(A + B) ≤ λ_k(A) + λ₁(B). Consequently |λ_k(A + E) − λ_k(A)| ≤ ‖E‖₂ for every Hermitian perturbation E.

Proof. For every x ≠ 0, R_A(x) + λₙ(B) ≤ R_{A+B}(x) ≤ R_A(x) + λ₁(B). Taking the minimum over a k-dimensional S and then the maximum over S preserves these inequalities. For the second statement note that ‖E‖₂ = max(|λ₁(E)|, |λₙ(E)|). ∎

Weyl's inequalities say that the eigenvalues of Hermitian matrices are perfectly conditioned: a perturbation of norm ε moves each eigenvalue by at most ε. Another consequence of Courant–Fischer is the Cauchy interlacing theorem: if B is the (n − 1) × (n − 1) matrix obtained from Hermitian A by deleting row and column i, then λ_k(A) ≥ λ_k(B) ≥ λ_{k+1}(A) for 1 ≤ k ≤ n − 1 (Practice Problem 60).

✏️ Your Turn

(a) Find the eigenvalues of A = [ 0 1 1 ; 1 0 1 ; 1 1 0 ].
(b) Find the maximum of 2x² + 2xy + 2y² on the unit circle x² + y² = 1, and where it is attained.
(c) Show that N = [ 0 1 ; 0 0 ] is not normal, and explain why this is consistent with Theorem 8.3.

Answers: (a) A = J − I where J is the all-ones matrix with eigenvalues 3, 0, 0, so A has eigenvalues 2, −1, −1. (b) The form is xᵀAx with A = [ 2 1 ; 1 2 ], so the maximum is λ₁ = 3, attained at ±(1, 1)/√2. (c) NN* = [ 1 0 ; 0 0 ] while N*N = [ 0 0 ; 0 1 ]. Indeed N is not even diagonalizable, being the Jordan block J₂(0), so it cannot be unitarily diagonalizable.

─────────────────────────────────
Lesson 9: Positive Definite Matrices and Quadratic Forms
─────────────────────────────────

📌 Key idea of this section:

        x*Ax > 0  ⇔  all λ_i > 0  ⇔  A = B*B (B invertible)  ⇔  A = LL*  ⇔  all leading minors > 0
        the inertia (n₊, n₋, n₀) is invariant under congruence A ↦ S*AS

Five characterizations

A Hermitian matrix A is positive definite (A ≻ 0) if x*Ax > 0 for every x ≠ 0, and positive semidefinite (A ⪰ 0) if x*Ax ≥ 0 for every x. Positive definite matrices are exactly the Gram matrices of linearly independent vectors, the covariance matrices of nondegenerate random vectors, the Hessians at strict local minima satisfying the second-order sufficient condition, and the matrices of inner products: ⟨x, y⟩_A = y*Ax is an inner product precisely when A ≻ 0.

Theorem 9.1. For Hermitian A ∈ 𝔽^{n×n} the following are equivalent:

  (i) x*Ax > 0 for all x ≠ 0
  (ii) every eigenvalue of A is positive
  (iii) A = B*B for some invertible B
  (iv) A = LL* for a lower triangular L with positive diagonal (Cholesky factorization), and L is unique
  (v) every leading principal minor det A_k (k = 1, …, n) is positive (Sylvester's criterion)

Proof. (i) ⇔ (ii): if Aq = λq with ‖q‖ = 1, then q*Aq = λ; conversely, writing x = ∑ c_i q_i in an orthonormal eigenbasis, x*Ax = ∑ λ_i |c_i|². (ii) ⇒ (iii): by the spectral theorem A = UΛU*; take B = Λ^{1/2}U*. (iii) ⇒ (i): x*B*Bx = ‖Bx‖² > 0 since B is injective. (i) ⇒ (v): for x ∈ 𝔽^k \ {0}, padding x with zeros gives x*A_kx > 0, so A_k satisfies (i), hence (ii), and det A_k is a product of positive numbers. (v) ⇒ (iv): by Theorem 2.3, A = LU with L unit lower triangular, and u₁₁ ⋯ u_kk = det A_k > 0, so every u_kk > 0. Write U = DM with D = diag(u_kk) and M unit upper triangular. Then A = LDM, and A = A* = M*D L* is another factorization of the same type, so uniqueness gives M = L*. Hence A = (LD^{1/2})(LD^{1/2})*. Uniqueness of the Cholesky factor follows from the uniqueness of LU. (iv) ⇒ (iii) is immediate with B = L*. ∎

The Cholesky factor is computed column by column from the identity A = LL*: for real A,

        l_jj = ( a_jj − ∑_{k<j} l_jk² )^{1/2},        l_ij = ( a_ij − ∑_{k<j} l_ik l_jk ) / l_jj   (i > j)

at a cost of about n³/3 operations, half that of LU, and no pivoting is needed for stability. If a radicand is not positive, A is not positive definite: Cholesky is also the cheapest practical test of definiteness. The method is due to André-Louis Cholesky, an officer in the French army geodetic service, and was published posthumously in 1924.

Worked example: for A = [ 4 2 2 ; 2 5 3 ; 2 3 6 ] the formulas give l₁₁ = 2, l₂₁ = 1, l₃₁ = 1, l₂₂ = √(5 − 1) = 2, l₃₂ = (3 − 1 · 1)/2 = 1 and l₃₃ = √(6 − 1 − 1) = 2. Hence

        [ 4  2  2 ]   [ 2  0  0 ] [ 2  1  1 ]
        [ 2  5  3 ] = [ 1  2  0 ] [ 0  2  1 ]
        [ 2  3  6 ]   [ 1  1  2 ] [ 0  0  2 ]

The leading minors are 4, 16 and 64 = (2 · 2 · 2)², all positive, as Sylvester's criterion predicts.

Semidefinite matrices and square roots

For semidefinite matrices the analogues of (i)–(iv) hold with "positive" replaced by "nonnegative" and invertibility dropped, but (v) fails: A = [ 0 0 ; 0 −1 ] has leading minors 0 and 0 yet is not semidefinite. The correct criterion is that all principal minors, not merely the leading ones, are nonnegative. Every A ⪰ 0 has a unique positive semidefinite square root A^{1/2} = UΛ^{1/2}U*. Uniqueness holds because any positive semidefinite B with B² = A commutes with A, hence preserves each eigenspace of A, and on the eigenspace for λ it is a positive semidefinite matrix whose square is λI, so it acts there as √λ times the identity.

Congruence and Sylvester's law of inertia

Matrices A and S*AS with S invertible are congruent; they represent the same Hermitian form x ↦ x*Ax in different coordinates. Congruence does not preserve eigenvalues, but it preserves their signs. Let n₊(A), n₋(A), n₀(A) be the numbers of positive, negative and zero eigenvalues, counted with multiplicity; the triple is the inertia of A.

Theorem 9.2 (Sylvester's law of inertia, 1852). Congruent Hermitian matrices have the same inertia.

Proof. First, n₊(A) is the largest dimension of a subspace W on which x*Ax > 0 for all nonzero x ∈ W. Indeed the span of the eigenvectors for positive eigenvalues is such a subspace, and any subspace of larger dimension meets the span of the remaining eigenvectors, of dimension n − n₊(A), in a nonzero x with x*Ax ≤ 0. Now if x*S*ASx > 0 on W \ {0}, then y*Ay > 0 on SW \ {0}, and dim SW = dim W because S is invertible. Hence n₊(S*AS) ≤ n₊(A), and applying the same argument with S⁻¹ gives equality. The same reasoning applies to n₋, and n₀ = n − rank A is preserved because rank is. ∎

Consequently a real quadratic form can be reduced by a change of variables to ∑_{i ≤ p} y_i² − ∑_{p < i ≤ p+q} y_i², and the pair (p, q) is an invariant. In optimization, the inertia of the Hessian at a critical point classifies it as a local minimum, a local maximum or a saddle whenever n₀ = 0. In the LDL* factorization of a Hermitian matrix with nonzero leading minors, the inertia can be read off from the signs of the pivots d_k = det A_k / det A_{k−1}.

✏️ Your Turn

(a) For which real t is [ 1 t ; t 4 ] positive definite?
(b) Find the inertia of [ 1 2 ; 2 1 ].
(c) Show that if A ≻ 0 then a_ii > 0 for all i and |a_ij|² < a_ii a_jj for all i ≠ j.

Answers: (a) The leading minors are 1 > 0 and 4 − t² > 0, so exactly for −2 < t < 2. (b) The eigenvalues are 3 and −1 (trace 2, determinant −3), so the inertia is (1, 1, 0): the matrix is indefinite although all its entries are positive. (c) a_ii = e_i*Ae_i > 0, and the 2 × 2 principal submatrix in rows and columns i, j is positive definite by the argument for (i) ⇒ (v) (applied after a permutation), so its determinant a_ii a_jj − |a_ij|² is positive.

─────────────────────────────────
Lesson 10: The Singular Value Decomposition
─────────────────────────────────

📌 Key idea of this section:

        A = U Σ V* = ∑_{i=1}^{r} σ_i u_i v_i*,     σ₁ ≥ σ₂ ≥ ⋯ ≥ σ_r > 0
        min_{rank B ≤ k} ‖A − B‖₂ = σ_{k+1}        min_{rank B ≤ k} ‖A − B‖_F = ( ∑_{i>k} σ_i² )^{1/2}

Existence

Theorem 10.1 (Singular value decomposition). Every A ∈ 𝔽^{m×n} can be written A = UΣV* with U ∈ 𝔽^{m×m} and V ∈ 𝔽^{n×n} unitary and Σ ∈ ℝ^{m×n} diagonal with entries σ₁ ≥ σ₂ ≥ ⋯ ≥ σ_p ≥ 0, p = min(m, n). The singular values σ_i are uniquely determined by A: they are the square roots of the eigenvalues of A*A.

Proof. The matrix A*A is Hermitian and positive semidefinite, since x*A*Ax = ‖Ax‖² ≥ 0. By the spectral theorem it has an orthonormal eigenbasis v₁, …, vₙ with eigenvalues σ₁² ≥ ⋯ ≥ σₙ² ≥ 0, where σ_i ≥ 0. Let r be the number of positive σ_i. For i ≤ r put u_i = Av_i/σ_i. These are orthonormal: u_i*u_j = v_i*A*Av_j/(σ_iσ_j) = σ_j² v_i*v_j/(σ_iσ_j) = δ_ij. Extend them to an orthonormal basis u₁, …, u_m of 𝔽^m. For i > r, ‖Av_i‖² = σ_i² = 0, so Av_i = 0. Therefore Av_i = σ_iu_i for all i ≤ p (with σ_i = 0 for i > r) and Av_i = 0 for i > m, which is the matrix identity AV = UΣ. Uniqueness of the σ_i follows from A*A = VΣᵀΣV*. ∎

The SVD exposes everything at once: rank A = r; u₁, …, u_r is an orthonormal basis of col(A) and v_{r+1}, …, vₙ of null(A); ‖A‖₂ = σ₁; ‖A‖_F² = ∑ σ_i²; for square A, |det A| = ∏ σ_i; and for Hermitian A the singular values are the absolute values of the eigenvalues. Geometrically, A maps the unit ball of 𝔽ⁿ onto a (possibly degenerate) solid ellipsoid in col(A) with semi-axes σ_iu_i. The compact form A = U_rΣ_rV_r* keeps only the first r columns of U and V.

Worked example: A = [ 3 0 ; 4 5 ] gives AᵀA = [ 25 20 ; 20 25 ] with eigenvalues 45 and 5 and eigenvectors v₁ = (1, 1)/√2, v₂ = (1, −1)/√2. So σ₁ = √45 = 3√5 and σ₂ = √5. Then u₁ = Av₁/σ₁ = (3, 9)/(√2 · 3√5) = (1, 3)/√10 and u₂ = Av₂/σ₂ = (3, −1)/√10. Checks: σ₁σ₂ = 15 = |det A| and σ₁² + σ₂² = 50 = 9 + 16 + 25 = ‖A‖_F².

The pseudoinverse

The Moore–Penrose pseudoinverse is A⁺ = VΣ⁺U*, where Σ⁺ ∈ ℝ^{n×m} has diagonal entries 1/σ_i for i ≤ r and 0 otherwise. It is the unique X satisfying Penrose's four conditions AXA = A, XAX = X, (AX)* = AX and (XA)* = XA. For every b, the vector x = A⁺b minimizes ‖Ax − b‖, and among all minimizers it has the smallest norm; when A has full column rank, A⁺ = (A*A)⁻¹A*. E. H. Moore described the generalized inverse in 1920 and Roger Penrose rediscovered and characterized it in 1955.

Low-rank approximation

Truncating the dyadic expansion gives A_k = ∑_{i≤k} σ_iu_iv_i*, a matrix of rank k with ‖A − A_k‖₂ = σ_{k+1} and ‖A − A_k‖_F² = ∑_{i>k} σ_i².

Theorem 10.2 (Eckart–Young–Mirsky). If rank B ≤ k, then ‖A − B‖₂ ≥ σ_{k+1} and ‖A − B‖_F ≥ (∑_{i>k} σ_i²)^{1/2}. Hence A_k is a best rank-k approximation in both norms.

Proof for the spectral norm. Since rank B ≤ k, dim null(B) ≥ n − k. The space spanned by v₁, …, v_{k+1} has dimension k + 1, so the two spaces share a unit vector x = ∑_{i≤k+1} c_iv_i with ∑|c_i|² = 1. Then ‖(A − B)x‖² = ‖Ax‖² = ∑_{i≤k+1} σ_i²|c_i|² ≥ σ_{k+1}², so ‖A − B‖₂ ≥ σ_{k+1}. The Frobenius statement is proved in Practice Problem 48. ∎

For the example above, the best rank-one approximation is A₁ = σ₁u₁v₁ᵀ = 3√5 · (1, 3)ᵀ(1, 1)/√20 = (3/2) [ 1 1 ; 3 3 ], and A − A₁ = [ 1.5 −1.5 ; −0.5 0.5 ] has Frobenius norm √(2.25 + 2.25 + 0.25 + 0.25) = √5 = σ₂, as the theorem predicts.

Low-rank approximation underlies principal component analysis (Pearson 1901, Hotelling 1933), where the u_i of a centred data matrix are the principal directions (columns as observations; with rows as observations they are the v_i); compression, since A_k is stored with k(m + n + 1) numbers instead of mn; latent semantic analysis of text; recommender systems; and the definition of numerical rank as the number of singular values above a tolerance. The SVD was discovered for square real matrices independently by Beltrami (1873) and Jordan (1874), extended by Sylvester (1889), Autonne (1915) and Eckart and Young (1936), and made computable by the Golub–Kahan (1965) and Golub–Reinsch (1970) algorithms. Mirsky (1960) proved that A_k is optimal in every unitarily invariant norm.

✏️ Your Turn

(a) Find the singular values of [ 1 1 ; 1 1 ].
(b) Find the pseudoinverse of the column vector a = (1, 2, 2)ᵀ.
(c) A 3 × 3 matrix has singular values 4, 2 and 1/2. Find |det A|, ‖A‖_F, ‖A‖₂ and the distance in the spectral norm from A to the nearest singular matrix.

Answers: (a) AᵀA = [ 2 2 ; 2 2 ] has eigenvalues 4 and 0, so σ₁ = 2 and σ₂ = 0. (b) Here σ₁ = ‖a‖ = 3, u₁ = a/3, v₁ = 1, so a⁺ = v₁u₁ᵀ/σ₁ = aᵀ/9 = (1/9, 2/9, 2/9). (c) |det A| = 4 · 2 · (1/2) = 4, ‖A‖_F = √(16 + 4 + 1/4) = √(81/4) = 9/2, ‖A‖₂ = 4, and the distance to the nearest singular matrix is σ₃ = 1/2.

─────────────────────────────────
Lesson 11: Nonnegative Matrices, Markov Chains and Perron–Frobenius
─────────────────────────────────

📌 Key idea of this section:

        A > 0  ⇒  ρ(A) is a simple eigenvalue with a positive eigenvector, and |λ| < ρ(A) for all other λ
        P primitive stochastic  ⇒  Pᵗ → 1π  geometrically, at rate |λ₂|

Positive matrices

Write A ≥ 0 if every entry of A is nonnegative and A > 0 if every entry is positive, and similarly for vectors; |v| denotes the vector of absolute values. The spectral radius is ρ(A) = max |λ| over the eigenvalues of A. Positive matrices arise as transition matrices, population (Leslie) models, input–output models in economics and adjacency matrices of strongly connected graphs, and their spectral theory is remarkably rigid.

Theorem 11.1 (Perron, 1907). Let A ∈ ℝ^{n×n} with A > 0 and let r = ρ(A). Then r > 0 is an eigenvalue of A with an eigenvector z > 0; every other eigenvalue satisfies |λ| < r; and r is an algebraically simple eigenvalue.

Proof. Step 1 (a maximizer). For x ≥ 0, x ≠ 0, define the Collatz–Wielandt function f(x) = min over i with x_i > 0 of (Ax)_i/x_i, so f(x) is the largest t with tx ≤ Ax. Let r* = sup f, the supremum over all nonzero x ≥ 0; by scale invariance we may restrict to the simplex Δ = {x ≥ 0 : ∑ x_i = 1}. If f(x)x ≤ Ax, then multiplying by A ≥ 0 gives f(x)Ax ≤ A(Ax), so f(Ax) ≥ f(x). Hence r* is also the supremum of f over the set K of normalized vectors Ax/∑(Ax)_i with x ∈ Δ. That set is compact and consists of positive vectors, on which f is continuous, so the supremum is attained at some z > 0. Moreover r* ≥ f(1, …, 1) = min row sum > 0.

Step 2 (an eigenvector). We have Az − r*z ≥ 0. If this vector were nonzero, then A(Az − r*z) > 0 because A > 0, so A(Az) > r*Az coordinatewise and f(Az) > r*, contradicting maximality. Hence Az = r*z with z > 0.

Step 3 (dominance). If Av = λv with v ≠ 0, then |λ||v| = |Av| ≤ A|v|, so |λ| ≤ f(|v|) ≤ r*. Thus r* = ρ(A) = r. If |λ| = r, then A|v| − r|v| ≥ 0, and the argument of Step 2 shows A|v| = r|v|, so |Av| = A|v|: for each i, |∑_j a_ij v_j| = ∑_j a_ij |v_j| with all a_ij > 0. Equality in the triangle inequality forces all v_j to have a common argument, v = e^{iθ}|v|, and then λv = Av = e^{iθ}A|v| = rv, so λ = r.

Step 4 (geometric simplicity). If w is a real eigenvector for r that is not a multiple of z, choose t so that y = z − tw ≥ 0 has some zero coordinate but y ≠ 0. Then Ay = ry, but Ay > 0, which is impossible at the zero coordinate. Since A is real, the real and imaginary parts of any complex eigenvector for r are real eigenvectors, so the eigenspace is spanned by z.

Step 5 (algebraic simplicity). Applying Steps 1–4 to Aᵀ > 0 gives y > 0 with yᵀA = ryᵀ. If r had algebraic multiplicity greater than its geometric multiplicity 1, its Jordan block would have size at least 2 and there would be a vector w with (A − rI)w = z. Then yᵀz = yᵀ(A − rI)w = 0, contradicting yᵀz > 0. ∎

Frobenius (1912) extended the theory to irreducible A ≥ 0, those for which the directed graph with an edge i → j whenever a_ij > 0 is strongly connected. Such A still has a simple eigenvalue ρ(A) with a positive eigenvector, but there may be other eigenvalues of modulus ρ(A): they are exactly ρ(A)e^{2πik/h} for k = 0, …, h − 1, where h is the period, the gcd of the lengths of the closed walks in the graph. A is primitive (some power A^m > 0) exactly when h = 1, and Wielandt showed that m = (n − 1)² + 1 always suffices for primitive A.

Markov chains

A finite Markov chain with states 1, …, n is described by a row-stochastic matrix P ≥ 0 whose rows sum to 1, p_ij being the probability of moving from i to j. A probability distribution is a row vector μ ≥ 0 with μ1 = 1, and it evolves by μ_{t+1} = μ_tP. Since P1 = 1, the number 1 is an eigenvalue; since ‖P‖∞ = 1, ρ(P) = 1. A stationary distribution is a distribution π with πP = π.

Theorem 11.2 (Convergence theorem). If P is primitive (irreducible and aperiodic), there is a unique stationary distribution π, it is positive, and Pᵗ → 1π as t → ∞. The convergence is geometric: ‖Pᵗ − 1π‖ ≤ C(ε)(|λ₂| + ε)ᵗ for every ε > 0, where |λ₂| < 1 is the largest modulus of an eigenvalue of P other than 1.

Proof. Apply Theorem 11.1 to P^m > 0: the eigenvalue 1 of P is simple, and every other eigenvalue λ satisfies |λ^m| < 1, hence |λ| < 1. The left Perron vector, normalized to sum 1, is π. Let E = 1π. Then PE = EP = E² = E, and induction gives (P − E)ᵗ = Pᵗ − E. The spectrum of P − E is that of P with the eigenvalue 1 replaced by 0, so ρ(P − E) = |λ₂| < 1, and Gelfand's formula ρ(M) = lim ‖Mᵗ‖^{1/t} (Practice Problem 50) yields the geometric bound. ∎

Worked example: for the two-state chain P = [ 0.9 0.1 ; 0.5 0.5 ], the equation πP = π gives 0.1π₁ = 0.5π₂, so π = (5/6, 1/6). The other eigenvalue is tr P − 1 = 0.4, and in fact Pᵗ = 1π + (0.4)ᵗ [ 1/6 −1/6 ; −5/6 5/6 ] exactly; at t = 1 this reproduces P. The chain forgets its initial state at the rate 0.4ᵗ.

PageRank

The original PageRank algorithm of Brin and Page (1998) ranks web pages by the stationary distribution of the Google matrix G = αS + (1 − α)(1/n)11ᵀ, where S is the row-stochastic matrix of a random walk on the link graph (with dangling pages patched) and α = 0.85 is the damping factor. Since G > 0, Perron's theorem guarantees a unique positive ranking vector, and since every eigenvalue of G other than 1 has modulus at most α, the power iteration πₜ₊₁ = πₜG converges at rate αᵗ independently of the size of the web.

✏️ Your Turn

(a) Find the stationary distribution of P = [ 0.5 0.5 0 ; 0.25 0.5 0.25 ; 0 0.5 0.5 ].
(b) Find the Perron root and a positive eigenvector of A = [ 1 2 ; 3 4 ].
(c) For P = [ 0 1 ; 1 0 ], find the eigenvalues and the period, and decide whether Pᵗ converges.

Answers: (a) The chain moves only between neighbouring states, so the balance equations π₁ · 0.5 = π₂ · 0.25 and π₂ · 0.25 = π₃ · 0.5 hold; hence π₂ = 2π₁, π₃ = π₁, and normalization gives π = (1/4, 1/2, 1/4). (b) p(λ) = λ² − 5λ − 2, so r = (5 + √33)/2 ≈ 5.372; the first row of (A − rI)v = 0 gives v = (2, r − 1) ≈ (2, 4.372) > 0, and the other eigenvalue (5 − √33)/2 ≈ −0.372 has smaller modulus. (c) The eigenvalues are 1 and −1, the period is 2, and Pᵗ alternates between P and I, so it does not converge, although π = (1/2, 1/2) is still the unique stationary distribution.

─────────────────────────────────
Lesson 12: Norms, Conditioning and Numerical Stability
─────────────────────────────────

📌 Key idea of this section:

        κ(A) = ‖A‖ ‖A⁻¹‖,    κ₂(A) = σ₁/σₙ        ‖δx‖/‖x‖ ≤ κ(A) ‖δb‖/‖b‖
        forward error ≲ condition number × backward error

Matrix norms

A vector norm ‖·‖ on 𝔽ⁿ induces the operator norm ‖A‖ = max_{‖x‖=1} ‖Ax‖, which satisfies ‖Ax‖ ≤ ‖A‖‖x‖ and ‖AB‖ ≤ ‖A‖‖B‖. For the 1-norm the induced norm is the largest absolute column sum, for the ∞-norm it is the largest absolute row sum, and for the Euclidean norm it is the largest singular value, ‖A‖₂ = σ₁. The Frobenius norm ‖A‖_F = (∑|a_ij|²)^{1/2} is not induced by any vector norm (‖I‖_F = √n), but it is submultiplicative and unitarily invariant. For every induced norm ρ(A) ≤ ‖A‖, since Av = λv gives |λ|‖v‖ ≤ ‖A‖‖v‖.

Condition numbers

The condition number of an invertible matrix is κ(A) = ‖A‖‖A⁻¹‖ ≥ ‖AA⁻¹‖ = 1; in the 2-norm κ₂(A) = σ₁/σₙ. It measures how much relative errors in the data can be amplified in the solution. The term was introduced by Alan Turing in 1948, in a paper on rounding errors in matrix processes.

Theorem 12.1. Let Ax = b with b ≠ 0, and A(x + δx) = b + δb. Then ‖δx‖/‖x‖ ≤ κ(A) ‖δb‖/‖b‖, and for each A there exist b and δb for which equality holds.

Proof. From Aδx = δb, ‖δx‖ = ‖A⁻¹δb‖ ≤ ‖A⁻¹‖‖δb‖, and from b = Ax, ‖b‖ ≤ ‖A‖‖x‖. Multiplying the first inequality by the reciprocal of the second gives the bound. Equality holds when x is chosen with ‖Ax‖ = ‖A‖‖x‖ and δb with ‖A⁻¹δb‖ = ‖A⁻¹‖‖δb‖. ∎

Theorem 12.2. If Ax = b and (A + δA)(x + δx) = b, then ‖δx‖/‖x + δx‖ ≤ κ(A) ‖δA‖/‖A‖.

Proof. Subtracting gives Aδx = −δA(x + δx), so ‖δx‖ ≤ ‖A⁻¹‖‖δA‖‖x + δx‖ = κ(A)(‖δA‖/‖A‖)‖x + δx‖. ∎

Theorem 12.3 (Distance to singularity). min { ‖E‖₂ : A + E singular } = σₙ(A), so the relative distance from A to the nearest singular matrix is 1/κ₂(A).

Proof. This is the case k = n − 1 of Theorem 10.2: the singular matrices are exactly the matrices of rank at most n − 1, and the nearest one is A_{n−1} at distance σₙ. ∎

Worked example: A = [ 1 1 ; 1 1.0001 ] has det A = 0.0001 and A⁻¹ = 10⁴ [ 1.0001 −1 ; −1 1 ], so κ∞(A) = 2.0001 × 20001 ≈ 4.0 × 10⁴. The system Ax = (2, 2.0001) has solution x = (1, 1). Changing the right side to (2, 2.0002), a relative change of about 5 × 10⁻⁵ in the ∞-norm, changes the solution to (0, 2), a relative change of 1. The amplification factor 20001 is within the bound κ∞(A).

A classical family of ill-conditioned matrices is the Hilbert matrix H_n = (1/(i + j − 1)), the Gram matrix of 1, t, …, t^{n−1} in L²(0, 1). It is positive definite, but κ₂(H₃) ≈ 524, κ₂(H₅) ≈ 4.8 × 10⁵ and κ₂(H₁₀) ≈ 1.6 × 10¹³, growing roughly like e^{3.5n}. This is why fitting high-degree polynomials in the monomial basis is numerically hopeless, and why orthogonal polynomial bases are used instead. Note also that κ₂(A*A) = κ₂(A)², because the singular values of A*A are the squares of those of A; forming the normal equations squares the condition number.

Floating point and backward stability

IEEE double-precision arithmetic has unit roundoff u = 2⁻⁵³ ≈ 1.1 × 10⁻¹⁶: each arithmetic operation returns the exact result multiplied by (1 + δ) with |δ| ≤ u. An algorithm is backward stable if its computed output is the exact output for slightly perturbed input, with a relative perturbation of order u. Wilkinson's analysis (1961) showed that Gaussian elimination with partial pivoting computes x̂ satisfying (A + E)x̂ = b with ‖E‖∞ ≤ c n³ ρ_n u ‖A‖∞ for a modest constant c, where the growth factor ρ_n is the ratio of the largest entry produced during elimination to the largest entry of A. The worst case is ρ_n = 2^{n−1} (Practice Problem 56), but for matrices met in practice the growth is small, a phenomenon explained only partially to this day. Householder QR and the Cholesky factorization are backward stable unconditionally. Combining backward stability with Theorem 12.2 gives the rule of thumb that solving a linear system loses about log₁₀ κ(A) of the sixteen significant digits available.

Sensitivity of eigenvalues

Theorem 12.4 (Bauer–Fike). Let A = VΛV⁻¹ be diagonalizable and let μ be an eigenvalue of A + E. Then min_i |μ − λ_i| ≤ κ_p(V) ‖E‖_p for every p-norm.

Proof. If μ is an eigenvalue of A there is nothing to prove. Otherwise μI − A − E is singular, and μI − A − E = V(μI − Λ)(I − (μI − Λ)⁻¹V⁻¹EV)V⁻¹, so the last bracket is singular. Then 1 ≤ ‖(μI − Λ)⁻¹V⁻¹EV‖_p ≤ κ_p(V)‖E‖_p / min_i |μ − λ_i|, because the p-norm of a diagonal matrix is the largest modulus of its entries. ∎

For normal matrices V can be taken unitary, κ₂(V) = 1, and eigenvalues move no further than ‖E‖₂, in agreement with Weyl's inequalities. Non-normal matrices can be dramatically worse: perturbing the (n, 1) entry of J_n(0) from 0 to ε produces the characteristic polynomial λⁿ − ε, whose roots have modulus ε^{1/n}. For n = 10 and ε = 10⁻¹⁰ the eigenvalues move from 0 to modulus 0.1.

Computing eigenvalues

The power iteration x_{k+1} = Ax_k/‖Ax_k‖ converges to a dominant eigenvector at the rate |λ₂/λ₁|ᵏ when |λ₁| > |λ₂| (Practice Problem 57); it is the method behind PageRank. The standard algorithm for all eigenvalues of a dense matrix is the QR algorithm, found independently by John Francis (1961–62) and Vera Kublanovskaya (1961): factor A_k = Q_kR_k and set A_{k+1} = R_kQ_k = Q_k*A_kQ_k. Each iterate is unitarily similar to A, and under mild conditions A_k converges to the Schur form. In practice the matrix is first reduced to Hessenberg form, shifts are used to accelerate convergence, and the whole computation takes O(n³) operations and is backward stable. The SVD is computed by the closely related Golub–Kahan–Reinsch algorithm, which never forms A*A.

✏️ Your Turn

(a) Compute κ₂(diag(10, 0.1)).
(b) Show that κ₂(Q) = 1 for every unitary Q, and that κ₂(QA) = κ₂(A).
(c) Compute ‖A‖₁ and ‖A‖∞ for A = [ 1 −2 ; 3 4 ].

Answers: (a) The singular values are 10 and 0.1, so κ₂ = 10/0.1 = 100. (b) ‖Qx‖₂ = ‖x‖₂ gives ‖Q‖₂ = 1, and Q⁻¹ = Q* is unitary too, so κ₂(Q) = 1; multiplying by Q does not change singular values, so κ₂(QA) = κ₂(A). (c) The absolute column sums are 4 and 6, so ‖A‖₁ = 6; the absolute row sums are 3 and 7, so ‖A‖∞ = 7.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are arranged in three tiers. The Core problems are computations that every reader should be able to carry out quickly and correctly by hand. The Advanced problems combine computation with proof and develop results used or quoted in the lessons. The Challenge problems are theorems of the kind found on graduate qualifying examinations; several of them complete proofs that the lessons deferred. Matrices are written row by row with semicolons separating rows.

Core (Problems 1–20)

  1. Compute det [ 1 2 0 ; 3 1 4 ; 0 5 2 ] by cofactor expansion, and check the result by row reduction.
  2. Find the reduced row echelon form, the rank and a basis of the null space of B = [ 1 2 1 3 ; 2 4 0 2 ; 3 6 1 5 ].
  3. Find the LU factorization of [ 2 3 ; 4 7 ].
  4. Find the LU factorization of A = [ 1 1 1 ; 2 3 5 ; 4 6 8 ] and use it to compute det A.
  5. The permutation σ ∈ S₅ has one-line notation 3 4 5 2 1, that is, σ(1) = 3, σ(2) = 4, σ(3) = 5, σ(4) = 2, σ(5) = 1. Count its inversions, write it as a product of disjoint cycles, and find sgn σ in two ways.
  6. Invert the upper unitriangular matrix [ 1 2 0 ; 0 1 3 ; 0 0 1 ].
  7. Use Cramer's rule to find y in the system 2x + y = 1, x + 3y + z = 0, y + 2z = 3, and then find the full solution.
  8. Find the eigenvalues and eigenvectors of [ 1 2 ; 2 −2 ].
  9. Find the eigenvalues and eigenspaces of [ 2 1 1 ; 1 2 1 ; 1 1 2 ].
  10. Use the Cayley–Hamilton theorem to compute the inverse of [ 2 1 ; 1 1 ].
  11. Show that A = [ 1 1 ; 0 1 ] is not diagonalizable, and compute Aⁿ for all n ≥ 1.
  12. Diagonalize A = [ 4 1 ; 2 3 ] and give a closed formula for Aⁿ.
  13. Apply the Gram–Schmidt process to (1, 0, 1), (1, 1, 0), (0, 1, 1) and write the QR factorization of the matrix with these columns.
  14. Find the least-squares line y = c₀ + c₁t through the points (−1, 0), (0, 1), (1, 3), (2, 4).
  15. Find the matrix of orthogonal projection onto the plane x + y + z = 0 in ℝ³, and project (1, 2, 6) onto it.
  16. Orthogonally diagonalize S = [ 5 2 ; 2 2 ].
  17. Show that T = [ 2 −1 0 ; −1 2 −1 ; 0 −1 2 ] is positive definite in two ways, and find its eigenvalues.
  18. Find the singular values of [ 1 1 ; 0 1 ].
  19. Find the stationary distribution of the Markov chain P = [ 0.8 0.2 0 ; 0.1 0.8 0.1 ; 0 0.4 0.6 ].
  20. Compute κ∞ of [ 1 2 ; 3 4 ] and κ₂ of [ 5 2 ; 2 2 ].

Advanced (Problems 21–45)

  21. Let A ∈ 𝔽^{m×n} and B ∈ 𝔽^{n×p}. Prove rank(AB) ≤ min(rank A, rank B) and Sylvester's rank inequality rank A + rank B − n ≤ rank(AB).
  22. Evaluate the Vandermonde determinant for the nodes 1, 2, 3, 4.
  23. Let T_n be the n × n tridiagonal matrix with 2 on the diagonal and −1 on the sub- and superdiagonals. Prove det T_n = n + 1.
  24. Prove that det [ A B ; 0 D ] = det A · det D for square blocks A and D.
  25. Let M be the n × n matrix with every diagonal entry equal to a and every off-diagonal entry equal to b. Find det M and the eigenvalues of M.
  26. Let A ∈ 𝔽^{m×n} and B ∈ 𝔽^{n×m}. Prove that λⁿ p_{AB}(λ) = λ^m p_{BA}(λ). Deduce that AB and BA have the same nonzero eigenvalues with the same algebraic multiplicities.
  27. Let u = (1, 1, 1)ᵀ. Use the Sherman–Morrison formula and the matrix determinant lemma to find (I + uuᵀ)⁻¹ and det(I + uuᵀ).
  28. The Laplacian of a graph is L = D − A, where D is the diagonal matrix of degrees and A is the adjacency matrix. Kirchhoff's matrix-tree theorem states that every cofactor of L equals the number of spanning trees. Use it to count the spanning trees of the complete graph K₄, and then of Kₙ, using the eigenvalues of L.
  29. Give two 4 × 4 matrices with the same characteristic polynomial and the same minimal polynomial that are not similar.
  30. Find the Jordan normal form of A = [ 5 4 2 1 ; 0 1 −1 −1 ; −1 −1 3 0 ; 1 1 −1 2 ], given that p_A(λ) = (λ − 1)(λ − 2)(λ − 4)².
  31. N is a nilpotent 6 × 6 matrix with rank N = 3, rank N² = 1 and N³ = 0. Find its Jordan form and its minimal polynomial.
  32. Compute exp(tA) for A = [ 0 1 ; −1 0 ] and use it to solve x″ + x = 0 with x(0) = x₀, x′(0) = v₀.
  33. Let A² = A. Prove that A is diagonalizable with eigenvalues in {0, 1}, and that rank A = tr A.
  34. Prove that two commuting diagonalizable matrices are simultaneously diagonalizable.
  35. Find the QR factorization of [ 3 1 ; 4 7 ] with R having positive diagonal.
  36. Let A ∈ ℝ^{m×n} have full column rank and P = A(AᵀA)⁻¹Aᵀ. Prove that Pᵀ = P, P² = P, col(P) = col(A), and that I − P is the orthogonal projection onto null(Aᵀ).
  37. Prove that a normal matrix with real eigenvalues is Hermitian, and a normal matrix whose eigenvalues all have modulus 1 is unitary. Show by example that normality cannot be dropped.
  38. Let K be real skew-symmetric. Prove that the eigenvalues of K are purely imaginary, and that exp(K) is orthogonal with determinant 1.
  39. A is real symmetric with eigenvalues 10, 5, 1, and E is real symmetric with ‖E‖₂ ≤ 0.3. Locate the eigenvalues of A + E, and decide whether A + E is necessarily positive definite.
  40. For which real t is [ 1 t 0 ; t 1 t ; 0 t 1 ] positive definite?
  41. Compute the Cholesky factorization of [ 9 3 −6 ; 3 5 0 ; −6 0 14 ].
  42. Compute the pseudoinverse of A = [ 1 2 ; 2 4 ] and the minimum-norm least-squares solution of Ax = (1, 0)ᵀ.
  43. A 3 × 3 matrix A has singular values 5, 3, 1. Find ‖A‖₂, ‖A‖_F, ‖A⁻¹‖₂, κ₂(A), and the errors of the best rank-one approximation in the spectral and Frobenius norms.
  44. For 0 < a ≤ 1 and 0 < b ≤ 1, let P = [ 1 − a a ; b 1 − b ]. Find Pⁿ in closed form and the stationary distribution, and show that Pⁿ converges unless a = b = 1.
  45. Prove the Gershgorin circle theorem: every eigenvalue of A lies in some disc |z − a_ii| ≤ ∑_{j≠i} |a_ij|. Deduce that a strictly diagonally dominant matrix is invertible, and locate the eigenvalues of [ 4 1 0 ; 1 5 1 ; 0 1 6 ].

Challenge (Problems 46–60)

  46. Give a second proof of the Cayley–Hamilton theorem over ℂ: verify it for diagonalizable matrices and conclude by a density and continuity argument.
  47. Prove Hadamard's inequality |det A| ≤ ∏_j ‖a_j‖₂ for A = [ a₁ ⋯ aₙ ] ∈ ℂ^{n×n}, and determine the cases of equality.
  48. Prove the Frobenius-norm part of the Eckart–Young theorem. Hint: first prove Weyl's inequality for singular values, σ_{i+j−1}(X + Y) ≤ σ_i(X) + σ_j(Y).
  49. Let A ≥ 0 be irreducible. Prove that (I + A)^{n−1} > 0, and use Perron's theorem for (I + A)^{n−1} to show that ρ(A) is an algebraically simple eigenvalue of A with a positive eigenvector.
  50. Prove Gelfand's formula ρ(A) = lim_{k→∞} ‖A^k‖^{1/k}, valid for every matrix norm.
  51. Prove that det(exp A) = e^{tr A} for every A ∈ ℂ^{n×n}.
  52. Prove that every A ∈ ℂ^{n×n} is similar to its transpose Aᵀ.
  53. Prove the polar decomposition: every A ∈ ℂ^{n×n} can be written A = UP with U unitary and P positive semidefinite; P is unique, and U is unique when A is invertible.
  54. Prove that the Hilbert matrix H_n = (1/(i + j − 1)) is positive definite for every n, and compute det H₂ and det H₃.
  55. Prove that the number of invertible n × n matrices over the finite field with q elements is ∏_{k=0}^{n−1} (qⁿ − q^k). Evaluate it for n = 2, q = 3 and for n = 3, q = 2.
  56. Let W_n be the n × n matrix with 1 on the diagonal, −1 below the diagonal, 1 in the last column and 0 elsewhere. Show that Gaussian elimination with partial pivoting produces u_nn = 2^{n−1}, so the growth factor is 2^{n−1}.
  57. Let A be diagonalizable with eigenvalues |λ₁| > |λ₂| ≥ ⋯ ≥ |λₙ| and eigenvectors v₁, …, vₙ. Prove that if x₀ has a nonzero v₁-component, the power iteration x_k = A^k x₀/‖A^k x₀‖ satisfies dist(x_k, span v₁) = O(|λ₂/λ₁|^k).
  58. Prove the Cauchy–Binet formula: for A ∈ 𝔽^{k×n} and B ∈ 𝔽^{n×k} with k ≤ n, det(AB) = ∑_S det A_{:,S} det B_{S,:}, the sum over all k-element subsets S of {1, …, n}. Deduce that det(AAᵀ) ≥ 0 for real A.
  59. Prove Ky Fan's maximum principle: for Hermitian A with eigenvalues λ₁ ≥ ⋯ ≥ λₙ, λ₁ + ⋯ + λ_k = max tr(Q*AQ), the maximum over all Q ∈ ℂ^{n×k} with Q*Q = I.
  60. Prove the Cauchy interlacing theorem: if B is obtained from Hermitian A ∈ ℂ^{n×n} by deleting row i and column i, then λ_k(A) ≥ λ_k(B) ≥ λ_{k+1}(A) for k = 1, …, n − 1.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Each answer gives the result and the essential working. Where a problem asks for a proof, a complete proof is given; other correct proofs are of course possible.

Core

  1. Along the first row: 1 · (1 · 2 − 4 · 5) − 2 · (3 · 2 − 4 · 0) + 0 = −18 − 12 = −30. Check: R₂ − 3R₁ gives (0, −5, 4); then R₃ + R₂ gives (0, 0, 6); the pivots are 1, −5, 6 with product −30.
  2. R₂ − 2R₁ = (0, 0, −2, −4) and R₃ − 3R₁ = (0, 0, −2, −4); so R₃ becomes zero, and scaling and clearing give the RREF [ 1 2 0 1 ; 0 0 1 2 ; 0 0 0 0 ]. The rank is 2 (pivots in columns 1 and 3). With free variables x₂, x₄: x₁ = −2x₂ − x₄ and x₃ = −2x₄, so a basis of the null space is (−2, 1, 0, 0) and (−1, 0, −2, 1). Check: 2 + 2 = 4 = number of columns.
  3. The multiplier is 2, and row 2 − 2 × row 1 = (0, 1). So L = [ 1 0 ; 2 1 ] and U = [ 2 3 ; 0 1 ].
  4. R₂ − 2R₁ = (0, 1, 3) and R₃ − 4R₁ = (0, 2, 4); then R₃ − 2R₂ = (0, 0, −2). Hence L = [ 1 0 0 ; 2 1 0 ; 4 2 1 ], U = [ 1 1 1 ; 0 1 3 ; 0 0 −2 ] and det A = 1 · 1 · (−2) = −2.
  5. The inversions are the pairs of positions (i, j), i < j, with σ(i) > σ(j): (1,4), (1,5), (2,4), (2,5), (3,4), (3,5), (4,5), so there are 7 and sgn σ = (−1)⁷ = −1. The cycles are 1 → 3 → 5 → 1 and 2 → 4 → 2, so σ = (1 3 5)(2 4), with sign (+1)(−1) = −1, in agreement.
  6. Solving UX = I by back substitution gives [ 1 −2 6 ; 0 1 −3 ; 0 0 1 ]. Check the (1, 3) entry of the product: 1 · 6 + 2 · (−3) + 0 · 1 = 0.
  7. det A = det [ 2 1 0 ; 1 3 1 ; 0 1 2 ] = 2(6 − 1) − 1(2 − 0) = 8. Replacing column 2 by b = (1, 0, 3) gives det [ 2 1 0 ; 1 0 1 ; 0 3 2 ] = 2(0 − 3) − 1(2 − 0) = −8, so y = −8/8 = −1. Then 2x = 1 − y = 2 gives x = 1, and 2z = 3 − y = 4 gives z = 2. The solution is (1, −1, 2); check: 1 − 3 + 2 = 0.
  8. tr = −1 and det = −2 − 4 = −6, so p(λ) = λ² + λ − 6 = (λ − 2)(λ + 3). For λ = 2: A − 2I = [ −1 2 ; 2 −4 ], eigenvector (2, 1). For λ = −3: A + 3I = [ 4 2 ; 2 1 ], eigenvector (1, −2). The eigenvectors are orthogonal, as they must be for a symmetric matrix.
  9. The matrix is I + J with J the all-ones matrix, whose eigenvalues are 3 (eigenvector (1, 1, 1)) and 0 (eigenspace x + y + z = 0). Hence the eigenvalues are 4, with eigenspace spanned by (1, 1, 1), and 1 with multiplicity 2, with eigenspace the plane x + y + z = 0, spanned for example by (1, −1, 0) and (1, 0, −1).
  10. p(λ) = λ² − 3λ + 1, so A² − 3A + I = 0, i.e. A(3I − A) = I. Hence A⁻¹ = 3I − A = [ 1 −1 ; −1 2 ]. Check: [ 2 1 ; 1 1 ][ 1 −1 ; −1 2 ] = [ 1 0 ; 0 1 ].
  11. The only eigenvalue is 1, and A − I = [ 0 1 ; 0 0 ] has rank 1, so the eigenspace is one-dimensional, smaller than the algebraic multiplicity 2; by Theorem 6.2 A is not diagonalizable. With N = A − I, N² = 0 and the binomial theorem for the commuting I and N gives Aⁿ = I + nN = [ 1 n ; 0 1 ].
  12. From Lesson 5, A = PDP⁻¹ with P = [ 1 1 ; 1 −2 ], D = diag(5, 2) and P⁻¹ = (1/3)[ 2 1 ; 1 −1 ]. Hence Aⁿ = PDⁿP⁻¹ = (1/3) [ 2·5ⁿ + 2ⁿ   5ⁿ − 2ⁿ ; 2·5ⁿ − 2·2ⁿ   5ⁿ + 2·2ⁿ ]. For n = 1 this gives (1/3)[ 12 3 ; 6 9 ] = A.
  13. q₁ = (1, 0, 1)/√2. Next ⟨a₂, q₁⟩ = 1/√2 and v₂ = (1, 1, 0) − (1/2)(1, 0, 1) = (1/2, 1, −1/2), of norm √(3/2), so q₂ = (1, 2, −1)/√6. Then ⟨a₃, q₁⟩ = 1/√2, ⟨a₃, q₂⟩ = 1/√6 and v₃ = (0, 1, 1) − (1/2)(1, 0, 1) − (1/6)(1, 2, −1) = (−2/3, 2/3, 2/3), of norm 2/√3, so q₃ = (−1, 1, 1)/√3. Thus Q = [ q₁ q₂ q₃ ] and R = [ √2 1/√2 1/√2 ; 0 √(3/2) 1/√6 ; 0 0 2/√3 ].
  14. With rows (1, t_i): AᵀA = [ 4 2 ; 2 6 ] and Aᵀy = (0 + 1 + 3 + 4, 0 + 0 + 3 + 8) = (8, 11). The determinant is 20, so c₀ = (6 · 8 − 2 · 11)/20 = 26/20 = 1.3 and c₁ = (4 · 11 − 2 · 8)/20 = 28/20 = 1.4. The line is y = 1.3 + 1.4t; the residuals 0.1, −0.3, 0.3, −0.1 sum to zero and are orthogonal to (−1, 0, 1, 2).
  15. The normal vector is n = (1, 1, 1), so P = I − nnᵀ/3 = I − J/3 = (1/3)[ 2 −1 −1 ; −1 2 −1 ; −1 −1 2 ]. The projection of (1, 2, 6) subtracts the mean 3 from each coordinate: (−2, −1, 3), which indeed satisfies x + y + z = 0.
  16. tr S = 7 and det S = 6, so the eigenvalues are 6 and 1. For 6, S − 6I = [ −1 2 ; 2 −4 ] gives (2, 1)/√5; for 1, S − I = [ 4 2 ; 2 1 ] gives (1, −2)/√5. Hence S = QΛQᵀ with Q = (1/√5)[ 2 1 ; 1 −2 ] and Λ = diag(6, 1).
  17. The leading minors are 2, 4 − 1 = 3 and 2 · 3 − (−1)(−2) = 4, all positive, so T ≻ 0 by Sylvester's criterion. Alternatively xᵀTx = x₁² + (x₁ − x₂)² + (x₂ − x₃)² + x₃² > 0 for x ≠ 0. The eigenvalues are 2 − √2, 2 and 2 + √2, with eigenvectors (1, √2, 1), (1, 0, −1) and (1, −√2, 1); their product is (4 − 2) · 2 = 4 = det T.
  18. AᵀA = [ 1 1 ; 1 2 ] has trace 3 and determinant 1, so its eigenvalues are (3 ± √5)/2. Since ((1 ± √5)/2)² = (6 ± 2√5)/4 = (3 ± √5)/2, the singular values are σ₁ = (1 + √5)/2 ≈ 1.618 (the golden ratio φ) and σ₂ = (√5 − 1)/2 = 1/φ ≈ 0.618; their product is 1 = |det A|.
  19. The chain is a birth–death chain, so detailed balance holds: 0.2π₁ = 0.1π₂ and 0.1π₂ = 0.4π₃. Hence π₂ = 2π₁ and π₃ = π₁/2, and normalization gives π = (2/7, 4/7, 1/7). Check the third component of πP: (4/7)(0.1) + (1/7)(0.6) = 1/7.
  20. A⁻¹ = (1/(4 − 6))[ 4 −2 ; −3 1 ] = [ −2 1 ; 1.5 −0.5 ], so ‖A‖∞ = 7, ‖A⁻¹‖∞ = 3 and κ∞ = 21. For the symmetric positive definite S, κ₂ = λ_max/λ_min = 6/1 = 6 (Problem 16).

Advanced

  21. col(AB) ⊆ col(A) gives rank(AB) ≤ rank A, and null(B) ⊆ null(AB) gives rank(AB) ≤ rank B by rank–nullity. For Sylvester's inequality, restrict A to the subspace col(B): rank–nullity for this restriction gives rank(AB) = dim A(col B) = rank B − dim(null A ∩ col B) ≥ rank B − dim null A = rank B − (n − rank A).
  22. ∏_{i<j} (x_j − x_i) = (2 − 1)(3 − 1)(4 − 1)(3 − 2)(4 − 2)(4 − 3) = 1 · 2 · 3 · 1 · 2 · 1 = 12.
  23. Expanding along the first row, det T_n = 2 det T_{n−1} + det M, where M is T_n with row 1 and column 2 deleted; expanding M along its first column, which is (−1, 0, …, 0), gives det M = −det T_{n−2}. Thus D_n = 2D_{n−1} − D_{n−2} with D₁ = 2 and D₂ = 3. If D_{n−1} = n and D_{n−2} = n − 1, then D_n = 2n − (n − 1) = n + 1, so D_n = n + 1 by induction.
  24. If A is singular, its columns are dependent, so the first columns of the block matrix are dependent and both sides are 0. Otherwise factor [ A B ; 0 D ] = [ A 0 ; 0 I ][ I A⁻¹B ; 0 D ]. Expanding the first factor along its last rows gives det A; expanding the second repeatedly along its first column gives det D. Multiplicativity finishes the proof. (Alternatively: in the Leibniz formula, any permutation that sends some column of the first block into a row of the second block picks up a zero entry.)
  25. M = (a − b)I + bJ, and J has eigenvalues n (once) and 0 (n − 1 times). Hence M has eigenvalues a + (n − 1)b (eigenvector (1, …, 1)) and a − b with multiplicity n − 1, and det M = (a − b)^{n−1}(a + (n − 1)b). In particular M is invertible exactly when a ≠ b and a ≠ −(n − 1)b.
  26. Let S = [ I_m A ; 0 I_n ], M = [ AB 0 ; B 0 ] and N = [ 0 0 ; B BA ]. Direct multiplication gives MS = [ AB ABA ; B BA ] = SN, so N = S⁻¹MS and p_M = p_N. Both matrices are block triangular, so p_M(λ) = p_{AB}(λ) λⁿ and p_N(λ) = λ^m p_{BA}(λ). Cancelling powers of λ shows the nonzero roots, with multiplicities, coincide.
  27. Here uᵀu = 3, so (I + uuᵀ)⁻¹ = I − uuᵀ/(1 + 3) = I − J/4 = (1/4)[ 3 −1 −1 ; −1 3 −1 ; −1 −1 3 ], and det(I + uuᵀ) = 1 + uᵀu = 4. Check: (I + J)(I − J/4) = I + J − J/4 − J²/4 = I + (3/4)J − (3/4)J = I, using J² = 3J.
  28. For K₄, L = 4I − J; deleting one row and column leaves [ 3 −1 −1 ; −1 3 −1 ; −1 −1 3 ], whose determinant is (3 + 1)²(3 − 2) = 16 by Problem 25 with a = 3, b = −1, n = 3. For Kₙ, L = nI − J has eigenvalues 0 (once) and n (n − 1 times). Each cofactor of L equals (1/n) times the product of its nonzero eigenvalues (the coefficient of λ in p_L is (−1)^{n−1} times the sum of the n principal (n − 1)-minors, which are all equal), so the count is nⁿ⁻¹/n = n^{n−2}: Cayley's formula.
  29. Take A = J₂(0) ⊕ J₂(0) and B = J₂(0) ⊕ J₁(0) ⊕ J₁(0). Both have characteristic polynomial λ⁴ and minimal polynomial λ², but rank A = 2 while rank B = 1, so they are not similar. (In dimension at most 3, characteristic and minimal polynomial together do determine the Jordan form.)
  30. The eigenvalues 1 and 2 are simple, so each contributes a 1 × 1 block. For λ = 4, one computes rank(A − 4I) = 3, so the geometric multiplicity is 4 − 3 = 1, smaller than the algebraic multiplicity 2: there is a single block J₂(4). Hence J = diag(1, 2) ⊕ [ 4 1 ; 0 4 ]. Check: det A = p_A(0) = 1 · 2 · 16 = 32, and tr A = 11 = 1 + 2 + 4 + 4.
  31. Blocks of size ≥ 1: 6 − 3 = 3; of size ≥ 2: 3 − 1 = 2; of size ≥ 3: 1 − 0 = 1. Hence the sizes are 3, 2, 1, J = J₃(0) ⊕ J₂(0) ⊕ J₁(0), and the minimal polynomial is λ³.
  32. A² = −I, so the even terms of the series give cos t · I and the odd terms give sin t · A: exp(tA) = [ cos t sin t ; −sin t cos t ]. Writing x′ = v, v′ = −x gives (x, v)′ = A(x, v), so (x(t), v(t)) = exp(tA)(x₀, v₀) and x(t) = x₀ cos t + v₀ sin t.
  33. The polynomial t² − t = t(t − 1) annihilates A and has distinct roots, so m_A divides it and has distinct roots; by Theorem 6.2 A is diagonalizable, with eigenvalues among 0 and 1. In a diagonalizing basis A = diag(1, …, 1, 0, …, 0), so rank A = number of 1s = tr A, and both are similarity invariants.
  34. Let AB = BA with both diagonalizable, and let E_λ be an eigenspace of A. If x ∈ E_λ then A(Bx) = BAx = λBx, so B maps E_λ into itself. The minimal polynomial of B restricted to E_λ divides m_B, which has distinct roots, so B restricted to E_λ is diagonalizable: E_λ has a basis of eigenvectors of B, each of which is also an eigenvector of A. Combining these bases over all eigenspaces of A gives a common eigenbasis.
  35. q₁ = (3, 4)/5 and r₁₁ = 5. Then r₁₂ = ⟨a₂, q₁⟩ = (3 + 28)/5 = 31/5, and a₂ − r₁₂q₁ = (1 − 93/25, 7 − 124/25) = (−68/25, 51/25) = (17/25)(−4, 3), so r₂₂ = 17/5 and q₂ = (−4, 3)/5. Hence Q = (1/5)[ 3 −4 ; 4 3 ] and R = [ 5 31/5 ; 0 17/5 ]. Check: det R = 17 = 3 · 7 − 1 · 4.
  36. Pᵀ = A((AᵀA)⁻¹)ᵀAᵀ = P because AᵀA is symmetric. P² = A(AᵀA)⁻¹(AᵀA)(AᵀA)⁻¹Aᵀ = P. Clearly col(P) ⊆ col(A), and PA = A gives the reverse inclusion. For any b, Aᵀ(b − Pb) = Aᵀb − Aᵀb = 0, so (I − P)b ∈ null(Aᵀ); and if Aᵀb = 0 then Pb = 0, so I − P is the identity on null(Aᵀ). Since I − P is symmetric and idempotent with image null(Aᵀ), it is the orthogonal projection onto null(Aᵀ) = col(A)^⊥.
  37. Write A = UΛU*. Then A* = UΛ̄U*, which equals A when Λ is real; and A*A = U|Λ|²U* = I when every |λ_i| = 1. Without normality both fail: [ 1 1 ; 0 2 ] has real eigenvalues but is not symmetric, and [ 1 1 ; 0 1 ] has its only eigenvalue of modulus 1 but is not unitary (it maps e₂ to a vector of length √2).
  38. If Kv = λv with v ≠ 0, then λ‖v‖² = v*Kv and, since K* = Kᵀ = −K, the conjugate of v*Kv is v*K*v = −v*Kv; hence v*Kv is purely imaginary and so is λ. Next, K and Kᵀ = −K commute, so exp(K)ᵀexp(K) = exp(Kᵀ)exp(K) = exp(−K + K) = I. Finally det exp(K) = e^{tr K} = e⁰ = 1 by Problem 51 (or by continuity: det exp(sK) is ±1 for all s and equals 1 at s = 0).
  39. By Weyl's inequalities each eigenvalue moves by at most 0.3, so the eigenvalues of A + E lie in [9.7, 10.3], [4.7, 5.3] and [0.7, 1.3] respectively (in decreasing order). In particular the smallest is at least 0.7 > 0, so A + E is positive definite.
  40. The leading minors are 1, 1 − t² and 1 − 2t² (expanding along the first row: 1 · (1 − t²) − t · t = 1 − 2t²). All are positive exactly when t² < 1/2, that is, |t| < 1/√2 ≈ 0.707.
  41. l₁₁ = 3, l₂₁ = 3/3 = 1, l₃₁ = −6/3 = −2, l₂₂ = √(5 − 1) = 2, l₃₂ = (0 − (−2)(1))/2 = 1, l₃₃ = √(14 − 4 − 1) = 3. So L = [ 3 0 0 ; 1 2 0 ; −2 1 3 ]; one checks LLᵀ reproduces the matrix, and det = (3 · 2 · 3)² = 324.
  42. A = (1, 2)ᵀ(1, 2) has rank 1; with u = v = (1, 2)/√5 we have A = 5uvᵀ, so σ₁ = 5 and A⁺ = (1/5)vuᵀ = (1/25)[ 1 2 ; 2 4 ]. The minimum-norm least-squares solution is A⁺(1, 0)ᵀ = (1/25, 2/25). Check: A(1/25, 2/25) = (1/5, 2/5), the projection of (1, 0) onto col(A).
  43. ‖A‖₂ = 5, ‖A‖_F = √(25 + 9 + 1) = √35, ‖A⁻¹‖₂ = 1/σ₃ = 1, κ₂ = 5/1 = 5. The best rank-one approximation has spectral error σ₂ = 3 and Frobenius error √(9 + 1) = √10.
  44. P has eigenvalues 1 and ℓ = 1 − a − b, with right eigenvector 1 and left eigenvector (b, a). Splitting P = E + ℓF with E = (1/(a + b))[ b a ; b a ] and F = (1/(a + b))[ a −a ; −b b ], one checks E² = E, F² = F, EF = FE = 0, so Pⁿ = E + ℓⁿF. The stationary distribution is π = (b/(a + b), a/(a + b)), the common row of E. Since 0 < a + b ≤ 2, we have −1 ≤ ℓ < 1, and |ℓ| < 1 unless a + b = 2; so Pⁿ → E except when a = b = 1. In that case ℓ = −1 and Pⁿ alternates between [ 0 1 ; 1 0 ] and I: this is the periodic chain of Lesson 11.
  45. Let Av = λv and choose i with |v_i| = max_j |v_j| > 0. Then (λ − a_ii)v_i = ∑_{j≠i} a_ij v_j, so |λ − a_ii| ≤ ∑_{j≠i} |a_ij| |v_j|/|v_i| ≤ ∑_{j≠i} |a_ij|. If A is strictly diagonally dominant, no disc contains 0, so 0 is not an eigenvalue and A is invertible. For the given symmetric matrix the discs are [3, 5], [3, 7] and [5, 7], so all eigenvalues are real and lie in [3, 7]; in particular the matrix is positive definite.

Challenge

  46. If A = SΛS⁻¹, then p_A(A) = S p_A(Λ) S⁻¹ = S diag(p_A(λ₁), …, p_A(λₙ)) S⁻¹ = 0. The diagonalizable matrices are dense in ℂ^{n×n}: by Schur, A = UTU*, and perturbing the diagonal of T by arbitrarily small amounts makes the eigenvalues distinct (Corollary 6.3). The map A ↦ p_A(A) is continuous, since the coefficients of p_A are polynomials in the entries of A and so is p_A(A). A continuous map vanishing on a dense set vanishes everywhere.
  47. If A is singular the left side is 0. Otherwise A = QR with Q unitary and R upper triangular with positive diagonal. Then |det A| = |det Q| det R = ∏ r_jj, and since a_j = ∑_{i≤j} r_ij q_i with orthonormal q_i, ‖a_j‖² = ∑_{i≤j} |r_ij|² ≥ r_jj². Hence |det A| ≤ ∏ ‖a_j‖. For invertible A, equality forces r_ij = 0 for i < j, so R is diagonal and the columns a_j = r_jj q_j are mutually orthogonal; conversely orthogonal columns give equality. So equality holds exactly when some column is zero or the columns are pairwise orthogonal. Geometrically: the volume of a parallelepiped is at most the product of its edge lengths.
  48. For X ∈ 𝔽^{m×n}, σ_j(X) = min over subspaces T of dimension n − j + 1 of max_{x ∈ T, ‖x‖=1} ‖Xx‖; this is Courant–Fischer for X*X. Given X and Y, let T₁ = span(v_i(X), …, vₙ(X)) and T₂ = span(v_j(Y), …, vₙ(Y)), on which ‖Xx‖ ≤ σ_i(X)‖x‖ and ‖Yx‖ ≤ σ_j(Y)‖x‖. Their intersection has dimension at least n − (i + j − 1) + 1, and on it ‖(X + Y)x‖ ≤ (σ_i(X) + σ_j(Y))‖x‖, which yields σ_{i+j−1}(X + Y) ≤ σ_i(X) + σ_j(Y). Now let rank B ≤ k, so σ_{k+1}(B) = 0. Applying the inequality with X = A − B, Y = B and j = k + 1 gives σ_{i+k}(A) ≤ σ_i(A − B) for every i. Therefore ‖A − B‖_F² = ∑_i σ_i(A − B)² ≥ ∑_i σ_{i+k}(A)² = ∑_{l>k} σ_l(A)² = ‖A − A_k‖_F².
  49. (I + A)^{n−1} = ∑_k C(n − 1, k) A^k, and (A^k)_ij > 0 exactly when the graph of A has a walk of length k from i to j. Strong connectivity gives, for i ≠ j, a path of length at most n − 1, and the k = 0 term covers i = j, so B = (I + A)^{n−1} > 0. Let z > 0 be the Perron vector of B. Since A commutes with B, Az lies in the eigenspace of B for ρ(B), which is spanned by z; so Az = μz with μ ≥ 0. For a nonnegative matrix with a positive eigenvector, the weighted max-norm ‖x‖_z = max |x_i|/z_i has induced norm max_i (Az)_i/z_i = μ, so ρ(A) ≤ μ ≤ ρ(A), and μ = ρ(A). For simplicity: the eigenvalues of B are (1 + λ)^{n−1}, with multiplicities, as λ runs over the eigenvalues of A (Schur form). Since |1 + λ| ≤ 1 + |λ| ≤ 1 + ρ(A), with equality only for λ = ρ(A), the simple Perron root ρ(B) = (1 + ρ(A))^{n−1} arises from λ = ρ(A) alone and only once; so ρ(A) is algebraically simple.
  50. All norms on a finite-dimensional space are equivalent, and c^{1/k} → 1 for every c > 0, so it suffices to treat one submultiplicative norm. Since ρ(A)^k = ρ(A^k) ≤ ‖A^k‖, we have ρ(A) ≤ ‖A^k‖^{1/k} for all k. Fix ε > 0 and let B = A/(ρ(A) + ε), so ρ(B) < 1. In Jordan form, the entries of J_m(λ)^k are C(k, j)λ^{k−j} with j < m, which tend to 0 when |λ| < 1, so B^k → 0 and ‖B^k‖ ≤ 1 for all large k. Then ‖A^k‖^{1/k} ≤ ρ(A) + ε for all large k. Hence the limit exists and equals ρ(A).
  51. By Schur, A = UTU* with T upper triangular, and exp(A) = U exp(T) U* since (UTU*)^k = UT^kU*. Powers of T are upper triangular with diagonal entries t_ii^k, so exp(T) is upper triangular with diagonal entries e^{t_ii}. Therefore det exp(A) = ∏ e^{t_ii} = e^{∑ t_ii} = e^{tr A}. A consequence is that exp(A) is always invertible.
  52. By Theorem 6.4, A = SJS⁻¹ with J a direct sum of Jordan blocks, so Aᵀ = S⁻ᵀJᵀSᵀ and it suffices to show that each block J_k(λ) is similar to its transpose. Let R be the k × k reversal permutation, R e_i = e_{k+1−i}; then R = R⁻¹ and R J_k(λ) R moves the superdiagonal to the subdiagonal, so R J_k(λ) R = J_k(λ)ᵀ. Taking the direct sum of these reversals shows J ∼ Jᵀ, hence A ∼ J ∼ Jᵀ ∼ Aᵀ. (An alternative argument: rank (A − λI)^k = rank (Aᵀ − λI)^k for all λ, k, and these ranks determine the Jordan form.)
  53. Let A = WΣV* be an SVD and set U = WV* and P = VΣV*. Then U is unitary, P ⪰ 0 and UP = WΣV* = A. If A = UP with U unitary and P ⪰ 0, then A*A = PU*UP = P², so P is the unique positive semidefinite square root of A*A (Lesson 9); this shows P is unique. If A is invertible, so is P, and U = AP⁻¹ is determined.
  54. For x ∈ ℝⁿ, xᵀH_nx = ∑_{i,j} x_i x_j/(i + j − 1) = ∑_{i,j} x_i x_j ∫₀¹ t^{i+j−2} dt = ∫₀¹ (∑_i x_i t^{i−1})² dt. This is ≥ 0, and it is 0 only if the polynomial ∑ x_i t^{i−1} vanishes on [0, 1], which forces x = 0. So H_n ≻ 0. Next det H₂ = 1 · (1/3) − (1/2)² = 1/12, and det H₃ = 1/2160 (expand along the first row: (1/15 − 1/16) − (1/2)(1/10 − 1/12) + (1/3)(1/8 − 1/9) = 1/240 − 1/120 + 1/216 = 1/2160).
  55. An n × n matrix over 𝔽_q is invertible exactly when its columns are linearly independent. Choose them in order: the first column can be any nonzero vector (qⁿ − 1 choices); once k independent columns are chosen, they span a subspace with q^k elements, and the next column can be any vector outside it (qⁿ − q^k choices). Multiplying gives ∏_{k=0}^{n−1} (qⁿ − q^k). For n = 2, q = 3: (9 − 1)(9 − 3) = 48. For n = 3, q = 2: (8 − 1)(8 − 2)(8 − 4) = 7 · 6 · 4 = 168.
  56. Induct on the elimination steps, with the following invariant before step k: for each active row i ≥ k and each column j with k ≤ j ≤ n − 1, the entry is −1 if j < i, 1 if j = i and 0 if j > i (exactly as in W_n), and every active last-column entry equals 2^{k−1}. This holds for k = 1. In column k the active entries are 1 (row k) and −1 (rows below), all of modulus 1, so partial pivoting (taking the first maximal entry) performs no swap and every multiplier is −1. Row k has, among columns k, …, n − 1, only the entry 1 in column k, so adding it to each row i > k turns the −1 in column k into 0, leaves columns k + 1, …, n − 1 unchanged, and doubles the last-column entry to 2^{k−1} + 2^{k−1} = 2^k. The invariant therefore holds before step k + 1. After n − 1 steps u_nn = 2^{n−1}, while every entry of W_n has modulus at most 1. For n = 4: the last column evolves as 1 → 2 → 4 → 8. This example of Wilkinson shows that the worst-case bound ρ_n ≤ 2^{n−1} for partial pivoting is attained.
  57. Write x₀ = ∑ c_i v_i with c₁ ≠ 0. Then A^k x₀ = λ₁^k (c₁v₁ + ∑_{i≥2} c_i (λ_i/λ₁)^k v_i). The vector in brackets equals c₁v₁ + r_k with ‖r_k‖ ≤ (∑_{i≥2} |c_i|‖v_i‖) |λ₂/λ₁|^k. Normalizing does not change the direction, so the distance from x_k to span v₁ is at most ‖r_k‖/‖c₁v₁ + r_k‖ = O(|λ₂/λ₁|^k). The Rayleigh quotient x_k*Ax_k converges to λ₁ at the same rate, and at the squared rate |λ₂/λ₁|^{2k} when A is Hermitian.
  58. The columns of AB are A b_j where b_j is column j of B, and A b_j = ∑_l b_lj a_l with a_l the columns of A. By multilinearity in the columns, det(AB) = ∑_{l₁, …, l_k} b_{l₁1} ⋯ b_{l_k k} det(a_{l₁}, …, a_{l_k}). Terms with a repeated index vanish. For distinct indices with underlying set S = {s₁ < ⋯ < s_k}, write l_j = s_{τ(j)} with τ ∈ S_k; then det(a_{l₁}, …, a_{l_k}) = sgn(τ) det A_{:,S}. Summing over τ for fixed S gives det A_{:,S} · ∑_τ sgn(τ) ∏_j b_{s_{τ(j)} j} = det A_{:,S} det B_{S,:}. For real A and B = Aᵀ, det B_{S,:} = det A_{:,S}, so det(AAᵀ) = ∑_S (det A_{:,S})² ≥ 0; for k = n this reduces to det(AB) = det A det B.
  59. Let q₁, …, qₙ be an orthonormal eigenbasis. For Q with orthonormal columns, tr(Q*AQ) = ∑_i λ_i w_i with w_i = ‖Q*q_i‖². Each w_i ≤ 1, because Q*q_i is the coordinate vector of the orthogonal projection of q_i onto col(Q) and ‖q_i‖ = 1; and ∑_i w_i = ‖Q*U‖_F² = ‖Q‖_F² = k, where U = [ q₁ ⋯ qₙ ]. Maximizing ∑ λ_i w_i subject to 0 ≤ w_i ≤ 1 and ∑ w_i = k puts weight 1 on the k largest eigenvalues, so tr(Q*AQ) ≤ λ₁ + ⋯ + λ_k. Equality is attained by Q = [ q₁ ⋯ q_k ].
  60. Without loss of generality i = n, so B = A restricted to and compressed onto the subspace V = span(e₁, …, e_{n−1}), and for x ∈ V the Rayleigh quotients of A and B agree. By Courant–Fischer, λ_k(B) is the maximum over k-dimensional subspaces S ⊆ V of min_{x∈S} R(x); the maximum over all k-dimensional subspaces of ℂⁿ can only be larger, so λ_k(B) ≤ λ_k(A). For the other inequality use the min-max form: λ_k(B) = min over subspaces S ⊆ V with dim S = (n − 1) − k + 1 = n − k of max_{x∈S} R(x). Since n − k = n − (k + 1) + 1, each such S is admissible in the min-max formula for λ_{k+1}(A), whose minimum runs over a larger family; hence λ_{k+1}(A) ≤ λ_k(B).

─────────────────────────────────

Completing these problems covers the main structure theory of finite-dimensional linear algebra: the four fundamental subspaces, determinants, canonical forms under similarity (Jordan) and under unitary similarity (Schur and the spectral theorem), canonical forms under congruence (Sylvester) and under two-sided unitary equivalence (the SVD), the Perron–Frobenius theory of positive matrices, and the perturbation theory that governs every numerical computation. Natural next steps are matrix analysis (Horn and Johnson), numerical linear algebra (Trefethen and Bau; Golub and Van Loan; Higham), and the infinite-dimensional spectral theory of operators on Hilbert space.
