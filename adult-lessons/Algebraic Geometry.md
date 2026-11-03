Algebraic Geometry — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Algebraic geometry studies the solution sets of systems of polynomial equations. An introductory course meets the subject in its most classical form: the coordinate plane, lines as solution sets of linear equations, circles as solution sets of x² + y² = r², and intersection points computed by solving two equations simultaneously. That is exactly where the subject began, with Descartes and Fermat in the 1630s. What makes algebraic geometry a field of research rather than a chapter of analytic geometry is the discovery that the dictionary between equations and shapes is far deeper than it first appears. Ideals of polynomial rings correspond to geometric objects, prime ideals to irreducible objects, maximal ideals to points, ring homomorphisms to maps, and field extensions to coverings. Once this dictionary is in place, theorems can be proved on whichever side of it they are easiest.

This course develops the classical theory over a field k, usually algebraically closed, with a strong emphasis on plane curves. The algebraic side rests on three nineteenth- and early twentieth-century pillars: Hilbert's basis theorem (1890), Hilbert's Nullstellensatz (1893), and Emmy Noether's theory of ideals in rings with the ascending chain condition (1921). The geometric side culminates in three classical theorems about curves: Bézout's theorem on the number of intersection points of two plane curves, the chord-and-tangent group law on a plane cubic, and the degree–genus formula relating the degree of a smooth plane curve to the topology of its Riemann surface. The last lesson indicates how Grothendieck's theory of schemes (1960s) recasts everything in a form that also covers number theory.

Prerequisites are a first graduate course in algebra: rings, ideals, quotient rings, prime and maximal ideals, polynomial rings, field extensions, and the basic facts about unique factorization in k[x₁, …, xₙ]. Some familiarity with point-set topology and with complex analysis (for the Riemann surface remarks) is helpful but not essential. Throughout, k denotes a field, k̄ its algebraic closure, and k[x] = k[x₁, …, xₙ] the polynomial ring in n variables. Proofs are given in full except where explicitly labelled as sketches; in those cases a standard reference is indicated by name.

In this course, you will:

  1. Define affine algebraic sets and learn the basic operations V(·) and I(·)
  2. Prove Hilbert's basis theorem and use it to show every algebraic set is cut out by finitely many equations
  3. Study the Zariski topology, irreducibility and the decomposition into irreducible components
  4. Prove the weak and strong forms of Hilbert's Nullstellensatz and set up the ideal–variety dictionary
  5. Work with coordinate rings, morphisms and rational maps, and decide when two varieties are isomorphic
  6. Classify conics, parametrize them rationally, and derive all Pythagorean triples from the unit circle
  7. Locate singular points with partial derivatives and compute tangent cones and multiplicities
  8. Pass to projective space, homogenize equations and compute points at infinity
  9. Define intersection multiplicity and use Bézout's theorem to count intersections exactly
  10. Put smooth cubics into Weierstrass form, compute discriminants and j-invariants
  11. Construct the group law on an elliptic curve and compute with it over ℚ and over finite fields
  12. Compute the genus of plane and hyperelliptic curves via the degree–genus formula and Riemann–Hurwitz
  13. Glimpse the language of schemes: Spec of a ring, generic points and nilpotents

─────────────────────────────────
Lesson 1: Affine Algebraic Sets
─────────────────────────────────

📌 Key idea of this section:

        V(S) = { a ∈ 𝔸ⁿ(k) : f(a) = 0 for all f ∈ S }

The affine space and its algebraic subsets

Let k be a field. The affine n-space over k is the set 𝔸ⁿ = 𝔸ⁿ(k) = kⁿ, regarded not as a vector space but simply as a set of points; we deliberately forget the origin and the linear structure, since the maps we care about will be polynomial maps. Every polynomial f ∈ k[x₁, …, xₙ] defines a function 𝔸ⁿ → k by evaluation. For a subset S ⊆ k[x₁, …, xₙ] we define the zero locus V(S) as in the key idea. A subset X ⊆ 𝔸ⁿ is called an affine algebraic set if X = V(S) for some S.

Some first examples in the plane 𝔸² with coordinates x, y. The parabola V(y − x²). The pair of coordinate axes V(xy). The single point V(x − a, y − b) = {(a, b)}. The empty set V(1) and the whole plane V(0). The twisted cubic V(y − x², z − x³) ⊂ 𝔸³, which is the image of t ↦ (t, t², t³). The field matters: V(x² + y² + 1) is empty in 𝔸²(ℝ) but is an infinite set in 𝔸²(ℂ), containing for instance (i, 0) and (0, i). This is the first sign that the theory is cleanest over an algebraically closed field.

Elementary properties of V

The operation V reverses inclusions: if S ⊆ T then V(T) ⊆ V(S). If ⟨S⟩ denotes the ideal generated by S, then V(S) = V(⟨S⟩), because a point killing every element of S also kills every combination ∑ gᵢ fᵢ with fᵢ ∈ S. So algebraic sets are exactly the zero loci of ideals. Moreover, for ideals I, J and a family of ideals (I_α):

        V(I) ∪ V(J) = V(I ∩ J) = V(IJ)
        ⋂ V(I_α) = V(∑ I_α)

Proof. Since IJ ⊆ I ∩ J ⊆ I, we have V(I) ⊆ V(I ∩ J) ⊆ V(IJ), and similarly for J, so V(I) ∪ V(J) ⊆ V(I ∩ J) ⊆ V(IJ). Conversely, let a ∈ V(IJ) and suppose a ∉ V(I). Then some f ∈ I has f(a) ≠ 0. For every g ∈ J we have fg ∈ IJ, so f(a)g(a) = 0 and hence g(a) = 0; thus a ∈ V(J). The statement about intersections is immediate, since a point is killed by every element of every I_α exactly when it is killed by every finite sum of such elements. ∎

The ideal of a set

In the other direction, for any subset X ⊆ 𝔸ⁿ define the ideal of X,

        I(X) = { f ∈ k[x₁, …, xₙ] : f(a) = 0 for all a ∈ X }

This is an ideal, and it is radical: if fᵐ vanishes on X then so does f. Recall that the radical of an ideal I is √I = { f : fᵐ ∈ I for some m ≥ 1 }. The basic relations are S ⊆ I(V(S)) and X ⊆ V(I(X)), with equality V(I(V(S))) = V(S) and I(V(I(X))) = I(X). The first equality says that an algebraic set is recovered from its ideal; the deeper question of which ideals arise as I(X) is the content of the Nullstellensatz in Lesson 4. Already now we can say that I(V(I)) ⊇ √I, since any f with fᵐ ∈ I vanishes wherever I does.

Algebraic subsets of the line

Since k[x] is a principal ideal domain, every ideal of k[x] is ⟨g⟩ for one polynomial g. If g ≠ 0, then V(g) is the set of roots of g in k, which has at most deg g elements. Hence the algebraic subsets of 𝔸¹ are exactly the finite subsets together with 𝔸¹ itself (for the finite set {a₁, …, a_r} take g = ∏(x − aᵢ)). This simple observation already shows that many familiar sets are not algebraic.

Example. The graph Γ = { (x, sin x) : x ∈ ℝ } is not an algebraic subset of 𝔸²(ℝ). Suppose Γ = V(S). Then Γ ∩ V(y) = V(S ∪ {y}) would be algebraic. Identifying V(y) with the line 𝔸¹ via (x, 0) ↦ x, the set Γ ∩ V(y) corresponds to { nπ : n ∈ ℤ }, and V(S ∪ {y}) corresponds to V({ f(x, 0) : f ∈ S }) ⊆ 𝔸¹, which is algebraic. But {nπ} is infinite and not all of ℝ, a contradiction.

Finite fields behave differently: every subset of 𝔸ⁿ(𝔽_q) is algebraic. Indeed a single point is V(x₁ − a₁, …, xₙ − aₙ), a finite union of algebraic sets is algebraic, and 𝔸ⁿ(𝔽_q) is finite. Over 𝔽_q the polynomial x^q − x vanishes at every point of 𝔸¹(𝔽_q) without being zero, so I(𝔸¹(𝔽_q)) = ⟨x^q − x⟩ ≠ 0. Over an infinite field, on the other hand, I(𝔸ⁿ) = 0: a nonzero polynomial cannot vanish on all of kⁿ. (Induct on n: write f = ∑ cⱼ(x₁, …, xₙ₋₁) xₙʲ; for each fixed (a₁, …, aₙ₋₁) the one-variable polynomial f(a, xₙ) has infinitely many roots and so is zero, whence each cⱼ vanishes on kⁿ⁻¹ and is zero by induction.)

Hypersurfaces and their degrees

If f is a single nonconstant polynomial, V(f) is called a hypersurface; in 𝔸² it is an affine plane curve. Writing f = f₁^{e₁} ⋯ f_r^{e_r} as a product of distinct irreducible factors, we have V(f) = V(f₁) ∪ ⋯ ∪ V(f_r), and (over k algebraically closed) I(V(f)) = ⟨f₁ ⋯ f_r⟩, the ideal of the squarefree part. The degree of the curve is the degree of the squarefree polynomial f₁ ⋯ f_r. Lines are curves of degree 1, conics of degree 2, cubics of degree 3, quartics of degree 4.

✏️ Your Turn

(a) Determine V(x² + y² − 1, x − 1) in 𝔸²(ℝ) and in 𝔸²(ℂ).
(b) Describe V(xz, yz) ⊂ 𝔸³ geometrically.
(c) Show that the unit disc { x² + y² ≤ 1 } is not an algebraic subset of 𝔸²(ℝ).

Answers: (a) Substituting x = 1 gives y² = 0, so y = 0 and V = {(1, 0)} over both fields; geometrically, the line x = 1 is tangent to the circle. (b) A point lies in V(xz, yz) iff z = 0 or x = y = 0, so V(xz, yz) = V(z) ∪ V(x, y), the union of the xy-plane and the z-axis. (c) Its intersection with the line V(y) corresponds to the interval [−1, 1] ⊂ 𝔸¹, which is infinite but not all of ℝ, hence not algebraic.

─────────────────────────────────
Lesson 2: Ideals, Noetherian Rings and Hilbert's Basis Theorem
─────────────────────────────────

📌 Key idea of this section:

        R Noetherian ⟹ R[x] Noetherian;  so every ideal of k[x₁, …, xₙ] is finitely generated

Noetherian rings

A commutative ring R is Noetherian if it satisfies any of the following equivalent conditions: (i) every ideal of R is finitely generated; (ii) every ascending chain of ideals I₁ ⊆ I₂ ⊆ I₃ ⊆ ⋯ is eventually constant (the ascending chain condition); (iii) every nonempty set of ideals has a maximal element. For (i) ⟹ (ii), the union I = ⋃ Iⱼ of an ascending chain is an ideal; if I = ⟨f₁, …, f_r⟩ then all fᵢ lie in some I_N, and then I_N = I_{N+1} = ⋯ = I. For (ii) ⟹ (iii), a set with no maximal element would allow us to choose (by dependent choice) a strictly increasing infinite chain. For (iii) ⟹ (i), given an ideal I, choose a maximal element J among the finitely generated ideals contained in I; if f ∈ I ∖ J then J + ⟨f⟩ is a larger finitely generated ideal contained in I, a contradiction, so J = I. Fields and principal ideal domains such as ℤ and k[x] are Noetherian. The ring k[x₁, x₂, x₃, …] in infinitely many variables is not: the chain ⟨x₁⟩ ⊊ ⟨x₁, x₂⟩ ⊊ ⋯ never stabilizes.

The term honours Emmy Noether, whose 1921 paper Idealtheorie in Ringbereichen showed that the ascending chain condition alone implies the primary decomposition of ideals, previously established by Lasker (1905) for polynomial rings by much more computational methods.

Theorem (Hilbert's basis theorem, 1890). If R is a Noetherian ring, then so is R[x]. Consequently k[x₁, …, xₙ] and ℤ[x₁, …, xₙ] are Noetherian.

Proof. Let I ⊆ R[x] be an ideal and suppose, for a contradiction, that I is not finitely generated. Choose f₁ ∈ I of minimal degree. Inductively, having chosen f₁, …, f_k, the ideal ⟨f₁, …, f_k⟩ is not all of I, so we may choose f_{k+1} ∈ I ∖ ⟨f₁, …, f_k⟩ of minimal degree. Let dᵢ = deg fᵢ and let aᵢ ∈ R be the leading coefficient of fᵢ. By construction d₁ ≤ d₂ ≤ d₃ ≤ ⋯, since f_{k+1} was also a candidate at each earlier step. The chain of ideals ⟨a₁⟩ ⊆ ⟨a₁, a₂⟩ ⊆ ⋯ of R stabilizes because R is Noetherian, so for some N we have a_{N+1} = ∑_{i=1}^{N} rᵢ aᵢ with rᵢ ∈ R. Put D = d_{N+1} and consider

        g = f_{N+1} − ∑_{i=1}^{N} rᵢ x^{D − dᵢ} fᵢ

The subtracted sum lies in ⟨f₁, …, f_N⟩ and has leading term (∑ rᵢaᵢ) x^D = a_{N+1} x^D, so deg g < D. But g ∈ I ∖ ⟨f₁, …, f_N⟩, since otherwise f_{N+1} would lie in ⟨f₁, …, f_N⟩. This contradicts the minimality of deg f_{N+1}. The statement for several variables follows by induction, because R[x₁, …, xₙ] = R[x₁, …, xₙ₋₁][xₙ]. ∎

Hilbert's original proof (in his work on invariant theory) was famously non-constructive; Gordan's reported reaction, "Das ist nicht Mathematik, das ist Theologie", reflects the novelty of proving that a finite basis exists without exhibiting one. Effective versions came later through Gröbner bases (Buchberger, 1965), which give an algorithm for ideal membership in k[x₁, …, xₙ].

Geometric consequences

Corollary 1. Every algebraic set is the zero locus of finitely many polynomials: V(S) = V(⟨S⟩) = V(f₁, …, f_r) for generators fᵢ of ⟨S⟩. Indeed one may take the fᵢ from S itself, since the finitely many generators are combinations of finitely many elements of S.

Corollary 2. Every descending chain of algebraic sets X₁ ⊇ X₂ ⊇ ⋯ in 𝔸ⁿ is eventually constant. Indeed I(X₁) ⊆ I(X₂) ⊆ ⋯ is an ascending chain of ideals, which stabilizes, and Xⱼ = V(I(Xⱼ)).

Computing radicals in examples

In k[x, y], the ideal ⟨x², xy⟩ is not radical: x ∉ ⟨x², xy⟩ (every element of the ideal has all its terms of total degree at least 2) although x² ∈ ⟨x², xy⟩. In fact √⟨x², xy⟩ = ⟨x⟩. To see this, note ⟨x²⟩ ⊆ ⟨x², xy⟩ ⊆ ⟨x⟩ and take radicals: ⟨x⟩ = √⟨x²⟩ ⊆ √⟨x², xy⟩ ⊆ √⟨x⟩ = ⟨x⟩, the last because ⟨x⟩ is prime. Geometrically V(x², xy) = V(x), the y-axis; the ideal ⟨x², xy⟩ carries extra "infinitesimal" information at the origin which the set forgets. Lesson 13 explains how schemes remember it.

A monomial ideal is one generated by monomials. Its radical is generated by the radicals of the generators: for example √⟨x³, y²⟩ = ⟨x, y⟩ and √⟨x²y⟩ = ⟨xy⟩. More generally, for any f with irreducible factorization f = ∏ fᵢ^{eᵢ}, unique factorization gives √⟨f⟩ = ⟨∏ fᵢ⟩.

✏️ Your Turn

(a) Show that the ideal ⟨x, y⟩ ⊂ k[x, y] is not principal.
(b) Find the smallest N with (x + y)ᴺ ∈ ⟨x², y³⟩ in ℚ[x, y].
(c) Is the ring of continuous functions C([0, 1], ℝ) Noetherian?

Answers: (a) If ⟨x, y⟩ = ⟨g⟩ then g divides both x and y, so g is a nonzero constant (x and y are non-associate irreducibles), making ⟨x, y⟩ = k[x, y]; but every element of ⟨x, y⟩ vanishes at the origin, so 1 ∉ ⟨x, y⟩. (b) A monomial xⁱyᴺ⁻ⁱ lies in ⟨x², y³⟩ iff i ≥ 2 or N − i ≥ 3. For N = 3 the term 3xy² fails (i = 1, N − i = 2); for N = 4 every i works (i ≤ 1 gives N − i ≥ 3). Since the binomial coefficients are nonzero in characteristic 0, N = 4. (c) No: the ideals Iⱼ = { f : f vanishes on [0, 1/j] } form a strictly ascending chain I₁ ⊊ I₂ ⊊ ⋯ (a continuous function vanishing on [0, 1/(j+1)] but positive at 1/j lies in I_{j+1} ∖ Iⱼ).

─────────────────────────────────
Lesson 3: The Zariski Topology and Irreducible Components
─────────────────────────────────

📌 Key idea of this section:

        Closed sets = algebraic sets;   X irreducible ⟺ I(X) prime

The Zariski topology

By Lesson 1, the algebraic subsets of 𝔸ⁿ contain ∅ and 𝔸ⁿ and are closed under finite unions and arbitrary intersections. Hence they are the closed sets of a topology on 𝔸ⁿ, the Zariski topology, introduced by Oscar Zariski in the 1940s in his programme to put Italian algebraic geometry on rigorous foundations. Any subset X ⊆ 𝔸ⁿ carries the induced topology. The basic open sets are the principal open sets D(f) = 𝔸ⁿ ∖ V(f), and every open set is a finite union of them by the basis theorem.

The Zariski topology is very coarse. On 𝔸¹ over an infinite field the closed sets are the finite sets and 𝔸¹, so this is the cofinite topology: any two nonempty open sets intersect, and the space is not Hausdorff. Polynomial maps are continuous, since the preimage of V(g₁, …, g_s) under a polynomial map φ is V(g₁ ∘ φ, …, g_s ∘ φ). The Zariski topology on 𝔸² is not the product topology of 𝔸¹ × 𝔸¹: the diagonal Δ = V(x − y) is Zariski closed, but in the product of two cofinite topologies the proper closed sets are finite unions of points, horizontal lines and vertical lines, and when k is infinite Δ is not of that form, since it is infinite yet contains no horizontal or vertical line.

The Zariski closure of a set X is V(I(X)), the smallest algebraic set containing it. Closures are often surprisingly large.

Example. The Zariski closure of ℤ ⊂ 𝔸¹(ℂ) is 𝔸¹, since ℤ is infinite. The closure of { (n, n²) : n ∈ ℤ } ⊂ 𝔸²(ℂ) is the parabola V(y − x²). Proof: the parabola is closed and contains the set. Conversely, let f vanish at all (n, n²). Divide f by y − x², viewed as a monic polynomial in y over k[x]: f = q·(y − x²) + r(x). Then r(n) = 0 for all n ∈ ℤ, so r = 0 and f ∈ ⟨y − x²⟩. Thus I = ⟨y − x²⟩ and the closure is V(y − x²).

Irreducibility

A nonempty topological space X is irreducible if it is not the union of two proper closed subsets; equivalently, any two nonempty open subsets of X intersect, or every nonempty open subset is dense. Irreducible spaces are wildly non-Hausdorff, which is why the notion is useless in classical topology and fundamental here. An irreducible affine algebraic set is called an affine variety (some authors use "variety" for any algebraic set).

Proposition. An algebraic set X ⊆ 𝔸ⁿ is irreducible if and only if I(X) is a prime ideal.

Proof. Suppose X is irreducible and fg ∈ I(X). Then X = (X ∩ V(f)) ∪ (X ∩ V(g)), a union of two closed subsets, so one of them is X; that is, f ∈ I(X) or g ∈ I(X). Also I(X) ≠ k[x] since X ≠ ∅. So I(X) is prime. Conversely, suppose I(X) is prime and X = X₁ ∪ X₂ with Xᵢ closed and proper. Then I(Xᵢ) ⊋ I(X) (strict because Xᵢ = V(I(Xᵢ)) ≠ X), so choose fᵢ ∈ I(Xᵢ) ∖ I(X). Then f₁f₂ vanishes on X₁ ∪ X₂ = X, so f₁f₂ ∈ I(X) with neither factor in I(X), contradicting primality. ∎

So 𝔸ⁿ is irreducible over an infinite field (I(𝔸ⁿ) = 0 is prime), and V(f) is irreducible whenever f is irreducible (over k = k̄, I(V(f)) = ⟨f⟩ by the Nullstellensatz, and ⟨f⟩ is prime in the UFD k[x]). The nodal cubic V(y² − x²(x + 1)) is irreducible: the polynomial y² − x³ − x² is irreducible, since a factorization would have to be (y − a(x))(y + a(x)) with a(x)² = x³ + x², impossible by degree parity.

Theorem (decomposition into irreducible components). Every nonempty algebraic set X ⊆ 𝔸ⁿ can be written as X = X₁ ∪ ⋯ ∪ X_r with each Xᵢ irreducible and Xᵢ ⊄ Xⱼ for i ≠ j. The Xᵢ are uniquely determined (up to order) and are called the irreducible components of X.

Proof. Existence by Noetherian induction: let Σ be the set of nonempty algebraic sets that are not finite unions of irreducible algebraic sets. If Σ ≠ ∅, it has a minimal element Y by Corollary 2 of Lesson 2 (a descending chain condition gives minimal elements). Y is not irreducible, so Y = Y₁ ∪ Y₂ with Yᵢ proper closed subsets. By minimality each Yᵢ ∉ Σ, so each is a finite union of irreducibles, and hence so is Y, a contradiction. Discard any Xᵢ contained in another to obtain an irredundant decomposition. For uniqueness, suppose X = X₁ ∪ ⋯ ∪ X_r = X′₁ ∪ ⋯ ∪ X′_s are two irredundant decompositions. Then X′₁ = ⋃ᵢ (X′₁ ∩ Xᵢ), and irreducibility of X′₁ forces X′₁ ⊆ Xᵢ for some i. Symmetrically Xᵢ ⊆ X′ⱼ for some j, so X′₁ ⊆ X′ⱼ, irredundancy gives j = 1 and X′₁ = Xᵢ. Remove both and induct. ∎

Algebraically, the components correspond to the minimal prime ideals over I(X); equivalently, √I = 𝔭₁ ∩ ⋯ ∩ 𝔭_r is the decomposition of a radical ideal in a Noetherian ring as an irredundant intersection of primes.

Dimension

The dimension of an irreducible algebraic set X is the supremum of the lengths n of chains X₀ ⊊ X₁ ⊊ ⋯ ⊊ Xₙ = X of irreducible closed subsets. Algebraically this is the Krull dimension of the coordinate ring k[X] (Lesson 5), and a fundamental theorem (proved via Noether normalization) states that it equals the transcendence degree of the function field k(X) over k. In particular dim 𝔸ⁿ = n, irreducible plane curves have dimension 1, and Krull's principal ideal theorem gives that every irreducible component of a hypersurface V(f) ⊂ 𝔸ⁿ has dimension n − 1.

✏️ Your Turn

(a) Find the irreducible components of V(xy, xz) ⊂ 𝔸³.
(b) Find the Zariski closure of { (t, t³) : t ∈ ℤ } in 𝔸²(ℂ).
(c) Show that every nonempty open subset of an irreducible space is itself irreducible.

Answers: (a) xy = xz = 0 means x = 0 or y = z = 0, so V(xy, xz) = V(x) ∪ V(y, z): the plane x = 0 (dimension 2) and the x-axis (dimension 1); both are irreducible since ⟨x⟩ and ⟨y, z⟩ are prime, and neither contains the other. (b) V(y − x³): dividing f by the polynomial y − x³ (monic in y) leaves a remainder r(x) with r(t) = 0 for all t ∈ ℤ, so r = 0. (c) Let U ⊆ X be open and nonempty. If U = A ∪ B with A, B closed in U, then X = Ā ∪ B̄ ∪ (X ∖ U), so X equals Ā or B̄ (it cannot equal X ∖ U since U ≠ ∅); if X = Ā then U = Ā ∩ U = A (A is closed in U). So U is irreducible.

─────────────────────────────────
Lesson 4: Hilbert's Nullstellensatz
─────────────────────────────────

📌 Key idea of this section:

        k = k̄:   I(V(J)) = √J   for every ideal J ⊆ k[x₁, …, xₙ]

Two versions of one theorem

The Nullstellensatz ("theorem of the zeros") of Hilbert (1893) answers the question left open in Lesson 1: which ideals are of the form I(X)? Over a field that is not algebraically closed the answer is messy: in ℝ[x], the ideal ⟨x² + 1⟩ is maximal (hence radical) but V(x² + 1) = ∅, so I(V(x² + 1)) = ℝ[x] ≠ ⟨x² + 1⟩. Over an algebraically closed field the answer is as clean as possible.

Theorem (weak Nullstellensatz). Let k be algebraically closed. If J ⊊ k[x₁, …, xₙ] is a proper ideal, then V(J) ≠ ∅. Equivalently, every maximal ideal of k[x₁, …, xₙ] has the form 𝔪_a = ⟨x₁ − a₁, …, xₙ − aₙ⟩ for a unique point a ∈ kⁿ.

The two formulations are equivalent: a proper ideal lies in some maximal ideal 𝔪 (Zorn, or simply the Noetherian property), and if 𝔪 = 𝔪_a then a ∈ V(J); conversely if V(𝔪) contains a point a, then 𝔪 ⊆ 𝔪_a and maximality forces equality. (𝔪_a is maximal because k[x]/𝔪_a ≅ k via evaluation at a.)

The heart of the matter is the following algebraic statement.

Zariski's lemma. If K is a field that is finitely generated as an algebra over a field k, then K is a finite extension of k.

Given Zariski's lemma, the weak Nullstellensatz follows at once: if 𝔪 is maximal, K = k[x]/𝔪 is a field finitely generated as a k-algebra, so K is finite (in particular algebraic) over k; as k is algebraically closed, the inclusion k → K is an isomorphism. Let aᵢ ∈ k be the element corresponding to the image of xᵢ. Then xᵢ − aᵢ ∈ 𝔪 for each i, so 𝔪_a ⊆ 𝔪, and equality holds by maximality of 𝔪_a.

A complete proof for uncountable fields

We prove Zariski's lemma, and hence the weak Nullstellensatz, in the important case where k is uncountable, such as k = ℂ. (The general case is usually proved via Noether normalization or by the Artin–Tate lemma; see Atiyah–Macdonald, Chapter 7.)

Proof. Let K = k[x₁, …, xₙ]/𝔪 be a field. As a k-vector space, K is spanned by the images of the countably many monomials, so dim_k K is at most countable. Suppose some t ∈ K is transcendental over k. Then the elements 1/(t − c), for c ∈ k, are linearly independent over k: a relation ∑ λᵢ/(t − cᵢ) = 0 with distinct cᵢ, after multiplying by ∏(t − cᵢ), becomes a polynomial identity in t, which must be the zero polynomial because t is transcendental; evaluating that polynomial at t = cⱼ shows λⱼ ∏_{i≠j}(cⱼ − cᵢ) = 0, so λⱼ = 0. This gives uncountably many linearly independent elements in a space of countable dimension, a contradiction. Hence K is algebraic over k, and being finitely generated, it is a finite extension. ∎

The strong Nullstellensatz

Theorem (strong Nullstellensatz). Let k be algebraically closed and J ⊆ k[x₁, …, xₙ] an ideal. If f vanishes at every point of V(J), then fᴺ ∈ J for some N ≥ 1. That is, I(V(J)) = √J.

Proof (the Rabinowitsch trick, 1929). By the basis theorem J = ⟨f₁, …, f_r⟩. We may assume f ≠ 0. Introduce a new variable t and consider the ideal J′ = ⟨f₁, …, f_r, 1 − t f⟩ ⊆ k[x₁, …, xₙ, t]. A common zero (a, b) of J′ would satisfy fᵢ(a) = 0 for all i, hence f(a) = 0, and then 1 − b f(a) = 1 ≠ 0. So V(J′) = ∅, and by the weak Nullstellensatz J′ is the unit ideal:

        1 = ∑ gᵢ(x, t) fᵢ(x) + h(x, t)(1 − t f(x))

This is an identity in k[x, t]; map it into the field of rational functions k(x) by t ↦ 1/f. The last term vanishes, and we get 1 = ∑ gᵢ(x, 1/f) fᵢ(x). Multiply by fᴺ, where N is at least the largest t-degree of the gᵢ, to clear denominators: fᴺ = ∑ Gᵢ(x) fᵢ(x) with Gᵢ = fᴺ gᵢ(x, 1/f) ∈ k[x]. Hence fᴺ ∈ J. ∎

The dictionary

Combining the Nullstellensatz with Lessons 1–3, we obtain an inclusion-reversing bijection, for k algebraically closed:

        { radical ideals of k[x₁, …, xₙ] }  ⟷  { algebraic subsets of 𝔸ⁿ }
        { prime ideals }                    ⟷  { irreducible algebraic subsets }
        { maximal ideals }                  ⟷  { points of 𝔸ⁿ }

given by J ↦ V(J) and X ↦ I(X). Intersections of algebraic sets correspond to radicals of sums of ideals: X ∩ Y ↔ √(I(X) + I(Y)). The radical is genuinely needed: the parabola y = x² and its tangent line y = 0 meet only at the origin, and I(X) + I(Y) = ⟨y − x², y⟩ = ⟨x², y⟩, whose radical is ⟨x, y⟩. The non-radical ideal ⟨x², y⟩ records the tangency, a theme we take up in Lesson 9.

Certificates of infeasibility

The weak Nullstellensatz has a computational reading: a system f₁ = ⋯ = f_r = 0 has no solution over k̄ if and only if there are polynomials gᵢ with ∑ gᵢ fᵢ = 1. Such a relation is a certificate of infeasibility. For example, the system x² = 0, 1 + xy = 0 has no solutions, and indeed

        (1 − xy)(1 + xy) + y² · x² = 1 − x²y² + x²y² = 1

Similarly the two concentric circles x² + y² = 1 and x² + y² = 4 never meet, and (1/3)(x² + y² − 1) − (1/3)(x² + y² − 4) = 1. The degrees of the gᵢ needed in general can be large; Kollár (1988) proved the sharp effective bound deg(gᵢfᵢ) ≤ max(3, d)ⁿ, where d bounds the degrees of the fᵢ (for d ≥ 3 this is dⁿ).

✏️ Your Turn

(a) Over ℂ, compute I(V(x² − 2xy + y²)) and I(V(x³, y − 1)).
(b) Find an explicit certificate showing that x = 0 and xy − 1 = 0 have no common zero.
(c) Show that over ℝ the ideal ⟨x² + y²⟩ is radical, but I(V(x² + y²)) ≠ ⟨x² + y²⟩.

Answers: (a) x² − 2xy + y² = (x − y)², so I(V) = √⟨(x − y)²⟩ = ⟨x − y⟩. Next, √⟨x³, y − 1⟩ = ⟨x, y − 1⟩, which is maximal, so I(V(x³, y − 1)) = ⟨x, y − 1⟩, the ideal of the point (0, 1). (b) y · x − (xy − 1) = 1. (c) x² + y² is irreducible over ℝ (a factorization would be into two real linear forms, but x² + y² has no real zero other than the origin, while a real line through the origin has infinitely many), so ⟨x² + y²⟩ is prime, hence radical. But V_ℝ(x² + y²) = {(0, 0)}, whose ideal is ⟨x, y⟩ ≠ ⟨x² + y²⟩.

─────────────────────────────────
Lesson 5: Coordinate Rings, Morphisms and Rational Maps
─────────────────────────────────

📌 Key idea of this section:

        X ↦ k[X] = k[x₁, …, xₙ]/I(X) is an anti-equivalence between affine algebraic sets and reduced finitely generated k-algebras

The coordinate ring

Let X ⊆ 𝔸ⁿ be an algebraic set over k algebraically closed. Two polynomials define the same function on X exactly when their difference lies in I(X), so the ring of polynomial functions on X is the coordinate ring

        k[X] = k[x₁, …, xₙ] / I(X)

It is a finitely generated k-algebra, and it is reduced (has no nonzero nilpotents) because I(X) is radical. It is an integral domain exactly when X is irreducible. By the Nullstellensatz, the points of X correspond to the maximal ideals of k[X]: the point a corresponds to 𝔪_a/I(X), the kernel of evaluation at a. Closed subsets of X correspond to radical ideals of k[X], and irreducible closed subsets to prime ideals.

Morphisms

A morphism (or polynomial map) φ: X → Y between algebraic sets X ⊆ 𝔸ⁿ and Y ⊆ 𝔸ᵐ is a map of the form φ(a) = (φ₁(a), …, φ_m(a)) with φⱼ ∈ k[X]. Every morphism induces a k-algebra homomorphism in the opposite direction, the pullback

        φ*: k[Y] → k[X],   g ↦ g ∘ φ

which is well defined because g ∈ I(Y) implies that g ∘ φ vanishes on X. Conversely, any k-algebra homomorphism ψ: k[Y] → k[X] equals φ* for a unique morphism φ, namely φⱼ = ψ(yⱼ) where the yⱼ are the coordinate functions on Y; φ maps X into Y because g(φ(a)) = ψ(g)(a) = 0 for g ∈ I(Y). This gives a bijection Mor(X, Y) ≅ Hom_{k-alg}(k[Y], k[X]), compatible with composition. Moreover, every finitely generated reduced k-algebra A arises as some k[X]: choose generators to write A = k[x₁, …, xₙ]/J; then J is radical because A is reduced, so A = k[V(J)] by the Nullstellensatz. In the language of categories, X ↦ k[X] is an equivalence between the category of affine algebraic sets over k and the opposite of the category of finitely generated reduced k-algebras.

In particular X ≅ Y as algebraic sets if and only if k[X] ≅ k[Y] as k-algebras. This turns geometric questions into algebraic ones.

Examples of isomorphisms and non-isomorphisms

The parabola. The map 𝔸¹ → V(y − x²), t ↦ (t, t²), has inverse (x, y) ↦ x, and both are morphisms. Algebraically k[x, y]/⟨y − x²⟩ ≅ k[t] via x ↦ t, y ↦ t². More generally the graph of any polynomial map is isomorphic to its domain.

The hyperbola. The coordinate ring of H = V(xy − 1) is k[x, y]/⟨xy − 1⟩ ≅ k[x, x⁻¹], the ring of Laurent polynomials. This ring has the unit x, which is not a constant, while the units of k[t] are only the nonzero constants. Hence H ≇ 𝔸¹. Geometrically, H is isomorphic to the open subset 𝔸¹ ∖ {0} via (x, y) ↦ x, which shows that an open subset of an affine variety can itself be affine. On the other hand 𝔸² ∖ {(0, 0)} is not isomorphic to any affine algebraic set (Problem 46).

The cuspidal cubic. Let C = V(y² − x³). The morphism φ: 𝔸¹ → C, t ↦ (t², t³), is a bijection (the inverse is (x, y) ↦ y/x for x ≠ 0 and (0, 0) ↦ 0) and a homeomorphism in the Zariski topology. But it is not an isomorphism: φ* maps k[C] = k[x, y]/⟨y² − x³⟩ isomorphically onto the subring k[t², t³] ⊊ k[t], and the function t is not a polynomial in t² and t³ (no element of the subring has a nonzero coefficient of t¹). So φ⁻¹ is not a morphism. A deeper reason is that C has a singular point at the origin (Lesson 7), while 𝔸¹ is smooth, and isomorphisms preserve singularities. Another algebraic witness: k[t², t³] is not integrally closed in its fraction field k(t), since t = t³/t² satisfies T² − t² = 0.

Rational functions and rational maps

Let X be an affine variety (irreducible). Its function field k(X) is the fraction field of the domain k[X]. A rational function f ∈ k(X) is regular at the point a ∈ X if it can be written as g/h with g, h ∈ k[X] and h(a) ≠ 0; the set of points where f is regular is a dense open subset of X. A function regular at every point of X lies in k[X]: the ideal of denominators D = { h ∈ k[X] : hf ∈ k[X] } contains, for each point a, an element not vanishing at a, so V(D) = ∅; then D = k[X] by the Nullstellensatz, and 1 ∈ D means f ∈ k[X]. Thus regular functions and polynomial functions agree on affine varieties.

A rational map φ: X ⇢ Y is given by rational functions defined on a dense open subset; it is dominant if its image is dense. Dominant rational maps X ⇢ Y correspond contravariantly to k-embeddings of function fields k(Y) → k(X), and X and Y are birational if k(X) ≅ k(Y). For example 𝔸¹ and the cuspidal cubic C are birational, since t = y/x identifies k(C) with k(t), although they are not isomorphic. Curves birational to 𝔸¹ are called rational curves; the next lesson shows that every irreducible conic is rational.

✏️ Your Turn

(a) Show that V(y − x³) ≅ 𝔸¹.
(b) For φ: 𝔸¹ → C = V(y² − x³), t ↦ (t², t³), compute φ*(x + y) and φ*(y² − x³).
(c) Show that the complex circle V(x² + y² − 1) ⊂ 𝔸²(ℂ) is isomorphic to the hyperbola V(uv − 1).

Answers: (a) t ↦ (t, t³) and (x, y) ↦ x are mutually inverse morphisms; equivalently k[x, y]/⟨y − x³⟩ ≅ k[t]. (b) φ*(x + y) = t² + t³, and φ*(y² − x³) = t⁶ − t⁶ = 0, as it must be since y² − x³ is zero in k[C]. (c) Over ℂ, x² + y² = (x + iy)(x − iy). The linear change of coordinates u = x + iy, v = x − iy is invertible (x = (u + v)/2, y = (u − v)/(2i)) and carries x² + y² − 1 to uv − 1. So the complex circle is isomorphic to 𝔸¹ ∖ {0}; in particular it is not isomorphic to 𝔸¹.

─────────────────────────────────
Lesson 6: Conics, Rational Parametrization and Pythagorean Triples
─────────────────────────────────

📌 Key idea of this section:

        x = (1 − t²)/(1 + t²),  y = 2t/(1 + t²):   ℚ-points of x² + y² = 1  ↔  t ∈ ℚ ∪ {∞}

Conics and their classification

A conic is a plane curve of degree 2, the zero set of a polynomial of the form:

        Q(x, y) = Ax² + Bxy + Cy² + Dx + Ey + F

with (A, B, C) ≠ (0, 0, 0). Homogenizing (Lesson 8) gives a ternary quadratic form Q(X, Y, Z) = AX² + BXY + CY² + DXZ + EYZ + FZ², with symmetric matrix (in characteristic ≠ 2)

        M = ⎡ A    B/2  D/2 ⎤
            ⎢ B/2  C    E/2 ⎥
            ⎣ D/2  E/2  F   ⎦

The conic is nondegenerate (irreducible over k̄, hence smooth) exactly when det M ≠ 0; if det M = 0 the conic is a pair of lines or a double line over k̄. Over an algebraically closed field of characteristic ≠ 2, every nondegenerate quadratic form in three variables can be diagonalized to X² + Y² + Z², so all smooth projective conics are projectively equivalent. Over ℝ, Sylvester's law of inertia leaves two classes of nondegenerate forms up to sign: signature (3, 0), whose conic X² + Y² + Z² = 0 has no real points, and signature (2, 1), whose conic X² + Y² = Z² is the real projective circle. In the affine plane, a real nondegenerate conic with real points is an ellipse, a parabola or a hyperbola according as its intersection with the line at infinity Z = 0, namely AX² + BXY + CY² = 0, has no real points (B² − 4AC < 0), one double point (B² − 4AC = 0) or two real points (B² − 4AC > 0). In projective terms, the three affine types are one and the same curve placed differently relative to the line at infinity.

Rational parametrization

Theorem. Let C ⊂ 𝔸² be an irreducible conic over a field k of characteristic ≠ 2 and let P ∈ C(k) be a k-rational point. Then projection from P defines a birational map C ⇢ 𝔸¹, and its inverse parametrizes all but finitely many k-points of C by rational functions with coefficients in k.

Proof. Translate so that P = (0, 0); then F = 0 and Q = q₂ + q₁ with q₂(x, y) = Ax² + Bxy + Cy² and q₁ = Dx + Ey. Irreducibility forces q₁ ≠ 0 (otherwise Q = q₂ would be a product of two lines over k̄). The lines through P are y = tx together with the vertical line x = 0. Substituting y = tx gives x²q₂(1, t) + x q₁(1, t) = 0, so apart from x = 0 the second intersection point is

        x(t) = −q₁(1, t)/q₂(1, t),   y(t) = t·x(t)

which are rational functions of t with coefficients in k. Conversely, every point (x, y) ∈ C(k) with x ≠ 0 determines t = y/x ∈ k. Thus t ↦ (x(t), y(t)) and (x, y) ↦ y/x are mutually inverse rational maps. ∎

The unit circle. Take C: x² + y² = 1 and P = (−1, 0). The line y = t(x + 1) meets C where x² + t²(x + 1)² = 1, that is, (x + 1)[(x − 1) + t²(x + 1)] = 0. The second root is

        x = (1 − t²)/(1 + t²),   y = t(x + 1) = 2t/(1 + t²)

and the inverse map is t = y/(x + 1). Over ℚ, every rational point other than P arises from exactly one t ∈ ℚ; the point P itself corresponds to t = ∞ (the vertical tangent line at P). Over ℝ, t = tan(θ/2) recovers the classical Weierstrass substitution for x = cos θ, y = sin θ, used to integrate rational functions of sine and cosine.

Example. t = 2/3 gives x = (1 − 4/9)/(1 + 4/9) = 5/13 and y = (4/3)/(13/9) = 12/13. Indeed 25/169 + 144/169 = 1.

Pythagorean triples

Theorem. Every primitive Pythagorean triple (a, b, c), meaning positive integers with a² + b² = c² and gcd(a, b, c) = 1, is, after possibly swapping a and b, of the form

        a = m² − n²,  b = 2mn,  c = m² + n²

for coprime integers m > n ≥ 1 of opposite parity; and every such pair (m, n) gives a primitive triple.

Proof. Given a primitive triple, (a/c, b/c) is a rational point on the unit circle with both coordinates positive, so it equals ((1 − t²)/(1 + t²), 2t/(1 + t²)) for t = (b/c)/(a/c + 1) = b/(a + c), and 0 < t < 1. Write t = n/m in lowest terms with m > n ≥ 1. Then

        a/c = (m² − n²)/(m² + n²),   b/c = 2mn/(m² + n²)

If m and n have opposite parity, then g = gcd(m² − n², 2mn, m² + n²) = 1: the number m² + n² is odd, and an odd prime dividing m² + n² and 2mn divides m or n and hence both, which is impossible. Since (a, b, c) and (m² − n², 2mn, m² + n²) are primitive positive triples with the same ratios, they coincide. If m and n are both odd, then g = 2 (each of the three numbers is even, and (m² + n²)/2 is odd because m² + n² ≡ 2 mod 4), so (a, b, c) = ((m² − n²)/2, mn, (m² + n²)/2). Now put m′ = (m + n)/2 and n′ = (m − n)/2. These are coprime (any common divisor divides m′ + n′ = m and m′ − n′ = n), of opposite parity (m′ + n′ = m is odd), with m′ > n′ ≥ 1, and m′² − n′² = mn, 2m′n′ = (m² − n²)/2, m′² + n′² = (m² + n²)/2. So after swapping a and b the triple has the stated form for (m′, n′). The converse is the identity (m² − n²)² + (2mn)² = (m² + n²)² together with the coprimality argument above. ∎

For example m = 2, n = 1 gives (3, 4, 5); m = 3, n = 2 gives (5, 12, 13); m = 4, n = 1 gives (15, 8, 17); m = 5, n = 2 gives (21, 20, 29).

Conics without rational points

A conic over ℚ need not have any rational point. The conic x² + y² = 3 has none. Suppose x = X/Z, y = Y/Z with integers X, Y, Z, Z ≠ 0 and gcd(X, Y, Z) = 1, so that X² + Y² = 3Z². Squares are 0 or 1 modulo 3, so X² + Y² ≡ 0 mod 3 forces X ≡ Y ≡ 0 mod 3. Then 9 divides 3Z², so 3 divides Z, contradicting gcd(X, Y, Z) = 1. The dichotomy is sharp: by the theorem above, a smooth conic over ℚ has either no rational points or infinitely many, parametrized by ℙ¹(ℚ). Legendre's theorem (1785) decides which case occurs for ax² + by² = cz², and its generalization, the Hasse–Minkowski theorem, states that a quadratic form over ℚ represents zero nontrivially if and only if it does so over ℝ and over every p-adic field ℚ_p. This local-global principle fails for curves of higher genus (Selmer's cubic 3x³ + 4y³ + 5z³ = 0 has points over ℝ and every ℚ_p but none over ℚ), which is one source of the depth of arithmetic geometry.

✏️ Your Turn

(a) Find the rational point on x² + y² = 1 with parameter t = 1/4, and the corresponding Pythagorean triple.
(b) Parametrize the conic x² − 2y² = 1 by lines through (1, 0), and find the point with t = 1.
(c) Which primitive triple corresponds to t = 3/5?

Answers: (a) x = (1 − 1/16)/(1 + 1/16) = 15/17 and y = (1/2)/(17/16) = 8/17, giving (15, 8, 17). (b) Substituting y = t(x − 1) gives (x − 1)(x + 1) − 2t²(x − 1)² = 0, so x + 1 = 2t²(x − 1), x = (2t² + 1)/(2t² − 1) and y = t(x − 1) = 2t/(2t² − 1). At t = 1 this is (3, 2), and indeed 9 − 8 = 1; the integer points are the solutions of Pell's equation. (c) m = 5, n = 3 are both odd, so (m² − n², 2mn, m² + n²) = (16, 30, 34) must be divided by 2, giving (8, 15, 17).

─────────────────────────────────
Lesson 7: Singular Points, Tangent Cones and Multiplicity
─────────────────────────────────

📌 Key idea of this section:

        P ∈ V(f) is singular  ⟺  f(P) = ∂f/∂x(P) = ∂f/∂y(P) = 0

Smooth and singular points of plane curves

Let f ∈ k[x, y] be squarefree and nonconstant, with k algebraically closed, and let C = V(f). A point P = (p₁, p₂) ∈ C is singular (a singularity) if both partial derivatives fₓ and f_y vanish at P; otherwise P is smooth (nonsingular), and the tangent line to C at P is

        fₓ(P)(x − p₁) + f_y(P)(y − p₂) = 0

The curve is smooth if all of its points are smooth. Over ℂ, the holomorphic implicit function theorem shows that near a smooth point C is a one-dimensional complex manifold.

Multiplicity and tangent cone

Translate P to the origin and expand f as a sum of homogeneous parts, f = f_m + f_{m+1} + ⋯ + f_d with f_m ≠ 0. The integer m = m_P(C) ≥ 1 is the multiplicity of C at P; P is smooth iff m = 1, in which case the tangent line is f₁ = 0. Over k algebraically closed the lowest form factors into linear forms, f_m = ∏ Lᵢ^{rᵢ}, and the lines Lᵢ = 0 are the tangent lines at P, with multiplicities rᵢ; their union is the tangent cone. A singular point is ordinary if it has m distinct tangent lines. An ordinary double point is a node; the double point of y² = x³, with a single tangent line counted twice, is the simplest cusp.

Example (the nodal cubic). Let f = y² − x³ − x². Then fₓ = −3x² − 2x and f_y = 2y. A singular point needs y = 0 and x(3x + 2) = 0, and must lie on the curve. At x = 0 the point (0, 0) is on the curve. At x = −2/3, f(−2/3, 0) = 8/27 − 4/9 = −4/27 ≠ 0. So the origin is the only singular point. The lowest form is f₂ = y² − x² = (y − x)(y + x): a node with tangent lines y = x and y = −x.

Example (the cusp). For f = y² − x³ the origin is the only singular point, with tangent cone y² = 0: one tangent line, the x-axis, of multiplicity 2.

Example (the folium of Descartes). For f = x³ + y³ − 3xy, the conditions fₓ = 3x² − 3y = 0 and f_y = 3y² − 3x = 0 give y = x² and x = x⁴, so x = 0 or x³ = 1. For x³ = 1 we get y = x² and f = x³ + x⁶ − 3x³ = 1 + 1 − 3 = −1 ≠ 0. Hence only the origin is singular; f₂ = −3xy, so it is a node whose tangents are the two coordinate axes.

Finiteness of the singular locus

Lemma. If f, g ∈ k[x, y] have no common factor, then V(f, g) is finite.

Proof. Regard f and g as polynomials in y over the field k(x). By Gauss's lemma they have no common factor there either, so there are a, b ∈ k(x)[y] with af + bg = 1. Clearing denominators gives a′f + b′g = d(x) with a′, b′ ∈ k[x, y] and 0 ≠ d ∈ k[x]. Any common zero (x₀, y₀) has d(x₀) = 0, leaving finitely many possible x₀. Symmetrically there are finitely many possible y₀. ∎

Proposition. In characteristic 0, a plane curve C = V(f) with f squarefree has only finitely many singular points.

Proof. A singular point of C is either a singular point of one irreducible component or a point lying on two components, and two distinct components meet in finitely many points by the lemma. For an irreducible nonconstant f, at least one partial derivative, say fₓ, is a nonzero polynomial of smaller degree (characteristic 0), so f ∤ fₓ, and since f is irreducible, f and fₓ have no common factor. The singular points lie in V(f, fₓ), which is finite by the lemma. ∎

In characteristic p the same argument works unless both partial derivatives vanish identically, which happens only when f is a polynomial in xᵖ and yᵖ; over a perfect field such an f is a p-th power, contradicting squarefreeness.

Singular Weierstrass cubics

Consider C: y² = x³ + ax + b, that is, f = y² − x³ − ax − b, in characteristic ≠ 2, 3. Then f_y = 2y and fₓ = −(3x² + a). A singular point must have y = 0, x³ + ax + b = 0 and 3x² + a = 0; that is, x must be a repeated root of the cubic x³ + ax + b. This happens exactly when the discriminant of the cubic vanishes:

        C is singular  ⟺  4a³ + 27b² = 0

For example x³ − 3x + 2 = (x − 1)²(x + 2) has 4(−27) + 27·4 = 0, and the singular point is (1, 0). Writing u = x − 1, the equation becomes y² = u²(u + 3), whose tangent cone at u = y = 0 is y² = 3u²: a node with tangents y = ±√3 (x − 1). In general, if 4a³ + 27b² = 0 and a ≠ 0, eliminating x² between 3x² + a = 0 and x³ + ax + b = 0 gives (2a/3)x + b = 0, so the double root is x₀ = −3b/(2a) and the singularity is a node; if a = b = 0 the curve is the cusp y² = x³.

The Jacobian criterion

For an irreducible algebraic set X ⊆ 𝔸ⁿ of dimension d with I(X) = ⟨f₁, …, f_r⟩, a point P is smooth iff the Jacobian matrix (∂fᵢ/∂xⱼ(P)) has rank n − d. Intrinsically, the Zariski tangent space at P is the dual of 𝔪_P/𝔪_P², where 𝔪_P is the maximal ideal of the local ring 𝒪_{X,P}, and P is smooth iff dim_k 𝔪_P/𝔪_P² = dim X, that is, iff 𝒪_{X,P} is a regular local ring. For the cusp y² = x³ at the origin, 𝔪/𝔪² is spanned by the classes of x and y and has dimension 2 > 1, confirming that the origin is singular.

✏️ Your Turn

(a) Find the singular points in 𝔸²(ℝ) of the quartic f = (x² + y²)² − (x² − y²) (the lemniscate of Bernoulli) and the tangent lines there.
(b) Show that the conic x² + y² − 1 is smooth.
(c) For which values of b is y² = x³ − 12x + b singular? Find the singular point in each case.

Answers: (a) fₓ = 4x(x² + y²) − 2x = 2x(2(x² + y²) − 1) and f_y = 4y(x² + y²) + 2y = 2y(2(x² + y²) + 1). Over ℝ the second factor of f_y is positive, so f_y = 0 forces y = 0. Then fₓ = 0 gives x = 0 or x² = 1/2, and f(x, 0) = x⁴ − x² vanishes at x = 0 but equals 1/4 − 1/2 ≠ 0 when x² = 1/2. So only the origin is singular in the real plane; the lowest form is −(x² − y²), a node with tangents y = x and y = −x. (b) fₓ = 2x and f_y = 2y vanish only at (0, 0), which is not on the curve. (c) 4(−12)³ + 27b² = 0 gives b² = 256, b = ±16. For b = 16: x³ − 12x + 16 = (x − 2)²(x + 4), singular point (2, 0). For b = −16: x³ − 12x − 16 = (x + 2)²(x − 4), singular point (−2, 0).

─────────────────────────────────
Lesson 8: Projective Space and Projective Closure
─────────────────────────────────

📌 Key idea of this section:

        ℙⁿ = (kⁿ⁺¹ ∖ {0}) / k*  =  𝔸ⁿ ⊔ ℙⁿ⁻¹,    f(x, y) ↦ Fʰ(X, Y, Z) = Zᵈ f(X/Z, Y/Z)

Why projective space

In the affine plane two distinct lines meet in one point, unless they are parallel; a line meets a circle in two points, unless it misses it or is tangent. Counting theorems in affine space are full of exceptions. Some exceptions disappear when k is algebraically closed (complex intersection points), some when multiplicities are counted (tangency), and the rest disappear when points at infinity are added. Projective space is the setting in which all three repairs can be made at once, and Bézout's theorem (Lesson 9) is the reward.

Definition. Projective n-space ℙⁿ = ℙⁿ(k) is the set of lines through the origin in kⁿ⁺¹, i.e. the set of equivalence classes of nonzero vectors (x₀, …, xₙ) under (x₀, …, xₙ) ∼ (λx₀, …, λxₙ) for λ ∈ k*. The class of (x₀, …, xₙ) is written [x₀ : ⋯ : xₙ]; these are homogeneous coordinates. The subset Uᵢ = { xᵢ ≠ 0 } is identified with 𝔸ⁿ via [x₀ : ⋯ : xₙ] ↦ (x₀/xᵢ, …, x̂ᵢ, …, xₙ/xᵢ), omitting the i-th entry. The n + 1 standard charts U₀, …, Uₙ cover ℙⁿ, and the complement of Uₙ is the hyperplane at infinity { xₙ = 0 } ≅ ℙⁿ⁻¹. So ℙⁿ = 𝔸ⁿ ⊔ ℙⁿ⁻¹, and by induction ℙⁿ = 𝔸ⁿ ⊔ 𝔸ⁿ⁻¹ ⊔ ⋯ ⊔ 𝔸⁰; over 𝔽_q this gives #ℙⁿ(𝔽_q) = qⁿ + qⁿ⁻¹ + ⋯ + 1.

In the projective plane ℙ² with coordinates [X : Y : Z] we use the chart Z ≠ 0 with x = X/Z, y = Y/Z as "the" affine plane, and call Z = 0 the line at infinity. A point at infinity [a : b : 0] is a direction (a, b) in the affine plane, up to scaling. Two parallel lines y = mx + c and y = mx + c′ become Y = mX + cZ and Y = mX + c′Z, which meet at the point [1 : m : 0] at infinity; vertical lines meet at [0 : 1 : 0]. Over ℝ, ℙ²(ℝ) is a compact non-orientable surface, and over ℂ, ℙⁿ(ℂ) is a compact complex manifold; ℙ¹(ℂ) is the Riemann sphere.

Projective algebraic sets

A polynomial F does not define a function on ℙⁿ, but if F is homogeneous of degree d then F(λx) = λᵈF(x), so the condition F(x) = 0 is well defined. For a set S of homogeneous polynomials, V(S) ⊆ ℙⁿ is the set of points where all of them vanish; these are the projective algebraic sets and the closed sets of the Zariski topology on ℙⁿ. An ideal J is homogeneous if it is generated by homogeneous polynomials, equivalently if every homogeneous component of every element of J lies in J; for X ⊆ ℙⁿ, the ideal I(X) generated by the homogeneous polynomials vanishing on X is homogeneous.

Theorem (projective Nullstellensatz). Let k be algebraically closed and J ⊆ k[x₀, …, xₙ] a homogeneous ideal. Then V(J) = ∅ in ℙⁿ if and only if √J ⊇ ⟨x₀, …, xₙ⟩, and if V(J) ≠ ∅ then I(V(J)) = √J.

Proof. Let C(V) ⊆ 𝔸ⁿ⁺¹ be the affine cone, the zero set of J in kⁿ⁺¹. Because J is homogeneous, C(V) is a union of lines through the origin together with the origin itself (if J is proper), and V(J) = ∅ in ℙⁿ iff C(V) ⊆ {0}. By the affine Nullstellensatz, C(V) ⊆ {0} iff √J ⊇ I({0}) = ⟨x₀, …, xₙ⟩. If V(J) ≠ ∅, a homogeneous F vanishes on V(J) iff it vanishes on C(V), iff F ∈ √J by the affine Nullstellensatz; and the radical of a homogeneous ideal is homogeneous. ∎

The ideal ⟨x₀, …, xₙ⟩ is called the irrelevant ideal: it defines the empty set although it is a proper ideal.

Homogenization and projective closure

For f ∈ k[x, y] of degree d, its homogenization is Fʰ(X, Y, Z) = Zᵈ f(X/Z, Y/Z), a homogeneous polynomial of degree d; dehomogenization sets Z = 1. The projective closure of an affine curve C = V(f) is the projective curve V(Fʰ), which is the Zariski closure of C in ℙ². Its points at infinity are found by setting Z = 0, which kills everything except the top-degree part f_d: the points at infinity are the zeros of f_d(X, Y) on the line Z = 0, i.e. the asymptotic directions of C.

Example (the parabola). y = x² homogenizes to YZ = X². At Z = 0 we get X² = 0: the single point [0 : 1 : 0], with multiplicity 2, so the line at infinity is tangent to the projective parabola there.

Example (the hyperbola). xy = 1 becomes XY = Z², with points at infinity [1 : 0 : 0] and [0 : 1 : 0], the directions of the two asymptotes. The projective closures of the parabola and the hyperbola are projectively equivalent to each other and to the circle: the classification of Lesson 6 is about how a single projective conic meets the line at infinity.

Example (the circle and the circular points). x² + y² = r² becomes X² + Y² = r²Z². At Z = 0, X² + Y² = 0 gives [1 : i : 0] and [1 : −i : 0]. Every circle (x − a)² + (y − b)² = r², homogenized, has top-degree part X² + Y², so every circle passes through these two points, the circular points at infinity. A conic is a circle iff it passes through both of them (for a real conic, iff its top-degree part is a multiple of X² + Y²).

For varieties of higher codimension, homogenizing a set of generators is not enough. The projective closure of an affine algebraic set V(I) is V(Iʰ), where Iʰ is generated by the homogenizations of all elements of I.

Example (the twisted cubic). C = V(y − x², z − x³) ⊂ 𝔸³ is the image of t ↦ (t, t², t³). In ℙ³ with coordinates [X : Y : Z : W] and W = 0 at infinity, the points [t : t² : t³ : 1] tend to [0 : 0 : 1 : 0] as t → ∞, which is the only point at infinity of the closure (Problem 33). Homogenizing the two generators gives YW − X² and ZW² − X³, whose common zeros at W = 0 are all [0 : Y : Z : 0], an entire line. The missing equation is y² − xz, which lies in I (both y² and xz equal x⁴ on C) and homogenizes to Y² − XZ; it cuts the line down to the single point [0 : 0 : 1 : 0].

Projective transformations and linear systems

The group PGL(n + 1, k) of invertible (n + 1) × (n + 1) matrices modulo scalars acts on ℙⁿ by projective transformations, and these are exactly the automorphisms of ℙⁿ as a variety. Any n + 2 points in general position (no n + 1 on a hyperplane) can be moved to any other such configuration by a unique projective transformation; for n = 1 this is the classical fact that a Möbius transformation is determined by the images of three points, and the cross-ratio of four points of ℙ¹ is the basic invariant.

A plane curve of degree d is given by a homogeneous polynomial of degree d up to a scalar. There are (d + 1)(d + 2)/2 monomials of degree d in X, Y, Z, so the curves of degree d form a projective space of dimension

        N(d) = (d + 1)(d + 2)/2 − 1 = d(d + 3)/2

Passing through a given point is one linear condition on the coefficients, so through any N(d) points there passes at least one curve of degree d. Thus through any 2 points passes a line, through any 5 points passes a conic, and through any 9 points passes a cubic.

Regular functions on projective varieties are constant: a regular function on ℙⁿ is given on each chart by a polynomial, and compatibility on overlaps forces it to be a homogeneous polynomial of degree 0. Over ℂ this mirrors compactness and Liouville's theorem. Consequently projective varieties are not described by their rings of global functions, and one works instead with the homogeneous coordinate ring k[x₀, …, xₙ]/I(X), with line bundles and with sheaves.

✏️ Your Turn

(a) Find the points at infinity of y² = x³ − x.
(b) Homogenize x²y + y³ − x + 2.
(c) Find the conic through (0, 0), (1, 0), (0, 1), (1, 1) and (2, 3), and determine its type.

Answers: (a) The projective closure is Y²Z = X³ − XZ². At Z = 0 we get X³ = 0, so the only point at infinity is [0 : 1 : 0], where the line Z = 0 meets the curve with multiplicity 3. (b) The degree is 3: X²Y + Y³ − XZ² + 2Z³. (c) Write Ax² + Bxy + Cy² + Dx + Ey + F = 0. The point (0, 0) gives F = 0; (1, 0) gives A + D = 0; (0, 1) gives C + E = 0; (1, 1) then gives B = 0; and (2, 3) gives 4A + 9C + 2D + 3E = 2A + 6C = 0, so A = −3C. With C = −1 the conic is 3x² − y² − 3x + y = 0, i.e. 3x(x − 1) = y(y − 1). Its matrix has determinant 3·(−1·0 − 1/4) + (−3/2)·(0·(1/2) − (−1)(−3/2)) = −3/4 + 9/4 = 3/2 ≠ 0, so it is nondegenerate, and B² − 4AC = 0 − 4·3·(−1) = 12 > 0 makes it a hyperbola.

─────────────────────────────────
Lesson 9: Intersection Multiplicity and Bézout's Theorem
─────────────────────────────────

📌 Key idea of this section:

        deg F = m, deg G = n, no common component:   ∑_{P ∈ F ∩ G} I_P(F, G) = mn   in ℙ²(k̄)

Intersection multiplicity

Let f, g ∈ k[x, y] with k algebraically closed and P ∈ 𝔸². Let 𝒪_P = k[x, y]_{𝔪_P} be the local ring of 𝔸² at P, consisting of rational functions defined at P. The intersection multiplicity of f and g at P is

        I_P(f, g) = dim_k 𝒪_P / ⟨f, g⟩

This algebraic definition captures exactly the intuitive notion of "how many intersection points have come together at P". Fulton (Algebraic Curves, §3.3) shows that I_P is the unique function satisfying the following properties, which in practice are how one computes it:

  1. I_P(f, g) is a nonnegative integer if f and g have no common component through P, and ∞ otherwise.
  2. I_P(f, g) = 0 if and only if P ∉ V(f) ∩ V(g).
  3. I_P is invariant under affine changes of coordinates.
  4. I_P(f, g) = I_P(g, f).
  5. I_P(f, g) ≥ m_P(f) m_P(g), with equality if and only if f and g have no tangent line in common at P.
  6. I_P(f, gh) = I_P(f, g) + I_P(f, h).
  7. I_P(f, g) = I_P(f, g + af) for every a ∈ k[x, y].

A useful consequence: if g is smooth at P = (0, 0) and of the form y − h(x) with h(0) = 0, then I_P(f, g) is the order of vanishing at x = 0 of the one-variable polynomial f(x, h(x)). Indeed, by property 7 we may replace f by f(x, h(x)) = xʳ u(x) with u(0) ≠ 0, then use property 6, and I_P(x, y − h(x)) = 1 by property 5, while I_P(u, ·) = 0 by property 2.

Examples. The parabola and its tangent line: I₀(y − x², y) = ord₀(x²) = 2, matching the dimension count 𝒪₀/⟨x², y⟩ with basis 1, x. The cusp and its tangent line: I₀(y² − x³, y) = ord₀(x³) = 3. The cusp and the parabola: I₀(y² − x³, y − x²) = ord₀(x⁴ − x³) = 3, strictly greater than m₀ · m₀ = 2 · 1 because the parabola's tangent y = 0 is the cusp's tangent. The cusp and the node: f = y² − x³ and g = y² − x³ − x² have tangent cones y² and (y − x)(y + x), with no common tangent, so I₀(f, g) = 2 · 2 = 4. Directly: ⟨f, g⟩ = ⟨y² − x³, x²⟩ = ⟨x², y²⟩ (since x³ ∈ ⟨x²⟩), and 𝒪₀/⟨x², y²⟩ has basis 1, x, y, xy.

For projective curves F, G and P ∈ ℙ², define I_P(F, G) by dehomogenizing with respect to any coordinate that is nonzero at P; the result does not depend on the choice.

Bézout's theorem

Theorem (Bézout). Let F and G be projective plane curves of degrees m and n over an algebraically closed field, with no common component. Then

        ∑_P I_P(F, G) = mn

the sum running over the finitely many points of F ∩ G. In particular two such curves meet in at least one and at most mn points.

The statement goes back to Newton and Maclaurin, appears in Bézout's Théorie générale des équations algébriques (1779), and was proved rigorously only in the nineteenth century, once complex points, points at infinity and multiplicities had all been properly defined.

Proof sketch (via resultants). Choose coordinates so that [0 : 1 : 0] lies on neither curve and on no line joining two points of F ∩ G (possible because F ∩ G is finite). Write F and G as polynomials in Y with coefficients in k[X, Z]; since [0 : 1 : 0] ∉ F ∪ G, the leading coefficients are nonzero constants. Their resultant R(X, Z) = Res_Y(F, G) is a homogeneous polynomial of degree mn (a standard property of the Sylvester determinant), nonzero because F and G have no common factor. A point [a : c] ∈ ℙ¹ is a root of R iff the line through [a : 0 : c] and [0 : 1 : 0] contains a common point of F and G; by the choice of coordinates such a line contains exactly one point P of F ∩ G, and one shows that the multiplicity of [a : c] as a root of R equals I_P(F, G). Summing over the roots of R, which number mn with multiplicity because k is algebraically closed, gives the theorem. A complete proof by a different route, computing dim k[X, Y, Z]_d/⟨F, G⟩_d = mn for large d, is in Fulton, Algebraic Curves, Chapter 5. ∎

Each hypothesis is necessary. Over ℝ a line can miss a circle. In 𝔸² parallel lines do not meet. Without multiplicities a tangent line meets a conic only once. And curves with a common component meet in infinitely many points.

Worked examples

Two circles. x² + y² = 1 and (x − 1)² + y² = 1 meet in the affine plane at (1/2, ±√3/2), obtained by subtracting the equations (2x − 1 = 0). Bézout predicts 2 · 2 = 4 intersections, and the remaining two are the circular points [1 : ±i : 0], through which every circle passes. Each has multiplicity 1, since the circles X² + Y² = Z² and X² + Y² − 2XZ = 0 have different tangent lines there (the gradients at [1 : i : 0] are (2, 2i, 0) and (2, 2i, −2), which are not proportional).

Concentric circles. x² + y² = 1 and x² + y² = 4 have no affine intersection. Projectively, X² + Y² = Z² and X² + Y² = 4Z² give 3Z² = 0, so the intersection consists of the two circular points, each with multiplicity 2. To verify at [1 : i : 0], dehomogenize with X = 1: the ideal ⟨1 + y² − z², 1 + y² − 4z²⟩ = ⟨1 + y², z²⟩, and since 1 + y² = (y − i)(y + i) with y + i a unit near y = i, the local ring is k[y, z]/⟨y − i, z²⟩ localized, of dimension 2. Total 2 + 2 = 4.

The parabola and the cubic. y = x² and y = x³ (degrees 2 and 3) should meet 6 times. In the affine plane, x² = x³ gives x²(1 − x) = 0: the origin with I₀ = ord₀(x² − x³) = 2, and (1, 1) with multiplicity 1. At infinity, YZ = X² and YZ² = X³ with Z = 0 force X = 0, so the only point is [0 : 1 : 0]. In the chart Y = 1 the curves are z = x² and z² = x³, and I = ord₀(x⁴ − x³) = 3. Total 2 + 1 + 3 = 6.

The cusp and the node again. For F = Y²Z − X³ and G = Y²Z − X³ − X²Z we found I = 4 at the origin. There are no other affine intersections (subtracting gives x² = 0, hence x = 0 and then y = 0). At infinity Z = 0 forces X = 0, the point [0 : 1 : 0]. In the chart Y = 1 the curves are z = x³ and z = x³ + x²z; substituting, x²z = x⁵ = 0 on the first curve, so I = 5. Total 4 + 5 = 9 = 3 · 3.

First consequences

(1) A line L and a curve F of degree d not containing L meet in exactly d points counted with multiplicity (Problem 52).
(2) Two conics without a common component meet in at most four points, so five points of which no four are collinear lie on a unique conic.
(3) An irreducible conic is smooth, and a cubic with two singular points is reducible (Problems 48 and 49).
(4) An irreducible curve of degree d has at most (d − 1)(d − 2)/2 singular points (Problem 50).

Theorem (Cayley–Bacharach for cubics). Let C₁ and C₂ be two plane cubics meeting in exactly nine distinct points. Then every cubic passing through eight of these points passes through the ninth.

This classical theorem, proved by counting conditions on the 10-dimensional space of cubic forms together with Bézout's theorem (see Fulton, Algebraic Curves, Chapter 5, or Eisenbud–Green–Harris, "Cayley–Bacharach theorems and conjectures", 1996), implies Pascal's theorem on hexagons inscribed in a conic and gives the associativity of the group law in Lesson 11.

✏️ Your Turn

(a) Compute I₀(y² − x³, x² − y³) and find all other intersection points of the two projective cubics, checking Bézout.
(b) Find all intersection points, with multiplicities, of the projective closures of y = x² and x = 0.

Answers: (a) The tangent cones at the origin are y² and x², with no common tangent, so I₀ = 2 · 2 = 4. Away from the origin, y² = x³ and x² = y³ give x⁴ = y⁶ = x⁹, so x⁵ = 1, and then y = y³/y² = x²/x³ = 1/x; conversely each fifth root of unity x with y = 1/x satisfies both equations. These five points are transverse intersections (multiplicity 1, since Bézout leaves no room for more). At infinity, Y²Z = X³ and X²Z = Y³ with Z = 0 force X = Y = 0, which is not a point. Total 4 + 5 = 9. (b) Affine: x = 0 gives y = 0, the origin, with I = 1 (the line x = 0 is not tangent to the parabola there). At infinity: YZ = X² and X = 0 with Z = 0 give [0 : 1 : 0]; in the chart Y = 1 the curves are z = x² and x = 0, meeting with multiplicity 1. Total 2 = 2 · 1.

─────────────────────────────────
Lesson 10: Plane Cubics and the Weierstrass Form
─────────────────────────────────

📌 Key idea of this section:

        E: y² = x³ + ax + b,   Δ = −16(4a³ + 27b²) ≠ 0,   j = 1728 · 4a³/(4a³ + 27b²)

Elliptic curves

An elliptic curve over a field k is a smooth projective curve of genus 1 (Lesson 12) together with a chosen k-rational point O. Every elliptic curve can be embedded in ℙ² as a smooth cubic in which O is a flex, and conversely every smooth plane cubic with a chosen flex is an elliptic curve. The name comes from elliptic integrals such as ∫ dx/√(cubic or quartic), which arose from the arc length of an ellipse; their inversion by Abel and Jacobi in the 1820s produced doubly periodic functions parametrizing these curves.

Flexes and the Hessian

A smooth point P of a plane curve F is a flex (inflection point) if the tangent line at P meets F with multiplicity at least 3 at P. The Hessian of F is H(F) = det(∂²F/∂Xᵢ∂Xⱼ), a form of degree 3(d − 2). In characteristic 0, a smooth point P ∈ F is a flex if and only if H(F)(P) = 0. For a smooth cubic, H has degree 3, and Bézout gives at most 9 flexes; in fact a smooth complex cubic has exactly 9 flexes, each with I_P(F, H) = 1. Any line through two of them passes through a third, forming the Hesse configuration of 9 points and 12 lines, which cannot be drawn in the real plane: by the Sylvester–Gallai theorem, a finite set of real points not all on one line has a line through exactly two of them. Accordingly, a real smooth cubic has exactly 3 real flexes, and they are collinear.

From a flex to Weierstrass form

Theorem. Let C be a smooth plane cubic and O ∈ C a flex. After a projective change of coordinates, O = [0 : 1 : 0], the tangent at O is the line Z = 0, and C has the long Weierstrass equation

        Y²Z + a₁XYZ + a₃YZ² = X³ + a₂X²Z + a₄XZ² + a₆Z³

Proof. Move O to [0 : 1 : 0] and its tangent line to Z = 0. Restricting F to Z = 0 gives a binary cubic in X, Y that vanishes to order 3 at [0 : 1] (O is a flex with tangent Z = 0), so F(X, Y, 0) = cX³; and c ≠ 0, for otherwise Z would divide F and C would be reducible. Hence F = cX³ + Z·Q(X, Y, Z) with Q a quadratic form. At O, ∂F/∂X = ∂F/∂Y = 0 (every term of these derivatives contains X or Z), while ∂F/∂Z(O) = Q(0, 1, 0), which is the coefficient of Y² in Q. Smoothness at O therefore forces this coefficient to be nonzero. Scaling X, Y and F suitably normalizes the coefficients of Y²Z and X³ to 1 and −1, which gives the displayed form. ∎

In characteristic ≠ 2, completing the square in y (replace y by y − (a₁x + a₃)/2) removes the xy and y terms; in characteristic ≠ 3, the shift x ↦ x − b₂/12, where b₂ = a₁² + 4a₂, removes the x² term. One arrives at the short Weierstrass form

        y² = x³ + ax + b

with the point O = [0 : 1 : 0] at infinity, which is always a smooth point: with F = Y²Z − X³ − aXZ² − bZ³ we get ∂F/∂Z = Y² − 2aXZ − 3bZ², equal to 1 at O. By Lesson 7 the affine part is smooth if and only if 4a³ + 27b² ≠ 0. The normalized quantity Δ = −16(4a³ + 27b²) is the discriminant of the curve.

Worked example. The curve y² + y = x³ − x² (the curve of conductor 11 labelled 11a3 in Cremona's tables) has a rational flex at infinity. Completing the square: (y + 1/2)² = x³ − x² + 1/4. With x = X + 1/3,

        x³ − x² = X³ + X² + X/3 + 1/27 − X² − 2X/3 − 1/9 = X³ − X/3 − 2/27

so (y + 1/2)² = X³ − X/3 + 19/108. Scaling X = x′/36 and y + 1/2 = y′/216 and multiplying by 216² = 46656 yields the integral model

        y′² = x′³ − 432x′ + 8208

since 46656/108 = 432 and 19 · 432 = 8208.

Isomorphisms and the j-invariant

The only changes of variables preserving the short Weierstrass form and the point O are x = u²x′, y = u³y′ with u ∈ k*. Substituting gives u⁶y′² = u⁶x′³ + au²x′ + b, that is,

        a′ = a/u⁴,   b′ = b/u⁶

The quantity j = 1728 · 4a³/(4a³ + 27b²) is unchanged, since numerator and denominator both scale by u⁻¹². Over an algebraically closed field, two elliptic curves are isomorphic if and only if they have the same j-invariant. Indeed, j(E) = j(E′) is equivalent to a³b′² = a′³b². If ab ≠ 0 (so also a′b′ ≠ 0), choose u with u² = ba′/(ab′); then u⁴ = b²a′²/(a²b′²) = a/a′ (using b²/b′² = a³/a′³) and u⁶ = u⁴u² = b/b′, as required. If a = 0 then j = 0 forces a′ = 0 and we need only u⁶ = b/b′; if b = 0 then j = 1728 forces b′ = 0 and we need only u⁴ = a/a′. Every value occurs: j = 0 for y² = x³ + 1, j = 1728 for y² = x³ − x, and for any other j₀ the curve

        y² = x³ + 3j₀(1728 − j₀)x + 2j₀(1728 − j₀)²

has j-invariant j₀ (substitute: 4a³ = 108j₀³(1728 − j₀)³ and 27b² = 108j₀²(1728 − j₀)⁴, whose sum is 108 · 1728 · j₀²(1728 − j₀)³). So the isomorphism classes of elliptic curves over ℂ are parametrized by the affine line, the j-line, which is the simplest example of a moduli space.

The Legendre form y² = x(x − 1)(x − λ), with λ ≠ 0, 1, is often more convenient; its j-invariant is

        j = 256 (λ² − λ + 1)³ / (λ²(λ − 1)²)

which takes each value six times as λ runs over the orbit { λ, 1 − λ, 1/λ, 1/(1 − λ), λ/(λ − 1), (λ − 1)/λ }. For instance λ = −1 gives y² = x³ − x and j = 256 · 27/4 = 1728, consistent with the short form.

The real picture

Over ℝ, the real points of y² = x³ + ax + b form one connected component if the cubic x³ + ax + b has one real root (Δ < 0) and two components, a bounded oval and an unbounded branch, if it has three distinct real roots (Δ > 0). Over ℂ, the Weierstrass ℘-function of a lattice Λ ⊂ ℂ satisfies ℘′² = 4℘³ − g₂℘ − g₃, and z ↦ [℘(z) : ℘′(z) : 1] identifies the torus ℂ/Λ with the cubic y² = 4x³ − g₂x − g₃. Topologically, every complex elliptic curve is a torus.

✏️ Your Turn

(a) Compute the j-invariants of y² = x³ − x, y² = x³ + 1 and y² = x³ − 3x + 3.
(b) Show that y² = x³ + 2x + 3 is smooth over ℚ, and find the primes p ≥ 5 for which its reduction modulo p is singular.
(c) Find u such that y² = x³ + 16x + 64 becomes y′² = x′³ + x′ + 1 under x = u²x′, y = u³y′.

Answers: (a) For a = −1, b = 0: j = 1728 · (−4)/(−4) = 1728. For a = 0, b = 1: j = 0. For a = −3, b = 3: 4a³ = −108 and 27b² = 243, so j = 1728 · (−108)/135 = −186624/135 = −6912/5. (b) 4a³ + 27b² = 32 + 243 = 275 ≠ 0, so the curve is smooth over ℚ. Since 275 = 5² · 11, the reduction is singular exactly for p = 5 and p = 11 among the primes p ≥ 5. (c) We need a/u⁴ = 1 and b/u⁶ = 1, i.e. u⁴ = 16 and u⁶ = 64, so u = ±2; the other fourth roots of 16, u = ±2i, give u⁶ = −64 and fail.

─────────────────────────────────
Lesson 11: The Group Law on an Elliptic Curve
─────────────────────────────────

📌 Key idea of this section:

        P + Q + R = O  ⟺  P, Q, R are the three intersections of E with a line

The chord-and-tangent construction

Let E be a smooth cubic in ℙ² with a chosen flex O; in Weierstrass form O = [0 : 1 : 0]. By Bézout, every line meets E in exactly three points counted with multiplicity. For points P, Q ∈ E, let P ∗ Q denote the third intersection of the line PQ with E (the tangent line at P if P = Q). Define

        P + Q = O ∗ (P ∗ Q)

Theorem. With this operation E is an abelian group with identity O. In Weierstrass form, −(x, y) = (x, −y), and three points sum to O exactly when they are collinear.

Proof. Commutativity is clear since the line PQ is symmetric in P and Q. Identity: the line through P and O meets E again at P ∗ O, and the line through P ∗ O and O meets E again at P, so P + O = P. Inverses: since O is a flex, O ∗ O = O; put P′ = P ∗ O. Then P ∗ P′ = O and P + P′ = O ∗ O = O. In Weierstrass form, the lines through O = [0 : 1 : 0] are the vertical lines x = c together with Z = 0, so P ∗ O is the reflection (x, −y), and −P = (x, −y). If P, Q, R are collinear, then P ∗ Q = R and P + Q = O ∗ R = −R. Associativity is the substantial point. One proof uses Cayley–Bacharach: for points P, Q, R in general position, consider the two reducible cubics C₁ = line(P, Q) · line(Q ∗ R, O) · line(P + Q, R) and C₂ = line(Q, R) · line(P ∗ Q, O) · line(P, Q + R). The three lines of C₁ meet E in P, Q, P ∗ Q; then Q ∗ R, O, Q + R; then P + Q, R, X with X = (P + Q) ∗ R. The three lines of C₂ meet E in Q, R, Q ∗ R; then P ∗ Q, O, P + Q; then P, Q + R, Y with Y = P ∗ (Q + R). So E and C₁ meet in nine points, and C₂ passes through eight of them. By Cayley–Bacharach C₂ also passes through X, and as X ∈ E ∩ C₂ is not among the other eight points in general position, X = Y. Hence (P + Q) + R = O ∗ X = O ∗ Y = P + (Q + R). Degenerate configurations follow by continuity in the Zariski topology, or by direct verification. Another proof identifies E with its Picard group Pic⁰(E) via P ↦ [P − O], where the group structure is evident. ∎

Explicit formulas

Let E: y² = x³ + ax + b and P₁ = (x₁, y₁), P₂ = (x₂, y₂) ≠ O. If x₁ = x₂ and y₁ = −y₂, then P₁ + P₂ = O. Otherwise let

        λ = (y₂ − y₁)/(x₂ − x₁)   if P₁ ≠ P₂,       λ = (3x₁² + a)/(2y₁)   if P₁ = P₂

Then P₁ + P₂ = (x₃, y₃), where:

        x₃ = λ² − x₁ − x₂,    y₃ = λ(x₁ − x₃) − y₁

Derivation. The line y = λx + ν with ν = y₁ − λx₁ meets E where x³ + ax + b − (λx + ν)² = 0. This monic cubic has roots x₁, x₂, x₃ (the third intersection), and the coefficient of x² is −λ², so x₁ + x₂ + x₃ = λ². The third point P₁ ∗ P₂ is (x₃, λx₃ + ν), and P₁ + P₂ is its reflection, with y-coordinate −(λx₃ + ν) = λ(x₁ − x₃) − y₁.

Example (Nagell's curve y² = x³ + 17). Take P = (−2, 3) and Q = (−1, 4); both lie on E since −8 + 17 = 9 and −1 + 17 = 16. Then λ = (4 − 3)/(−1 + 2) = 1, x₃ = 1 + 2 + 1 = 4 and y₃ = 1 · (−2 − 4) − 3 = −9, so P + Q = (4, −9), and indeed 64 + 17 = 81. Doubling P: λ = 3 · 4/(2 · 3) = 2, x₃ = 4 − 2(−2) = 8 and y₃ = 2(−2 − 8) − 3 = −23, so 2P = (8, −23), and 512 + 17 = 529 = 23². This curve has many integral points, including (43, ±282) and (52, ±375), and its group of rational points is free abelian of rank 2.

Torsion

A point P is torsion if nP = O for some n ≥ 1. A point of order 2 is a point with vertical tangent, i.e. y = 0; over k̄ there are exactly three, the roots of x³ + ax + b, so E[2] ≅ ℤ/2 × ℤ/2. On y² = x³ + 1, the point (−1, 0) has order 2. The points (0, ±1) have order 3: doubling (0, 1) gives λ = 0, x₃ = 0, y₃ = −1, so 2(0, 1) = (0, −1) = −(0, 1). The point (2, 3) has order 6: λ = 3 · 4/6 = 2, x₃ = 4 − 4 = 0, y₃ = 2(2 − 0) − 3 = 1, so 2(2, 3) = (0, 1), which has order 3. The rational torsion subgroup of y² = x³ + 1 is cyclic of order 6, generated by (2, 3).

Theorem (Nagell–Lutz, 1935–37). Let E: y² = x³ + ax + b with a, b ∈ ℤ. If P = (x, y) ∈ E(ℚ) is a torsion point other than O, then x, y ∈ ℤ, and either y = 0 or y² divides 4a³ + 27b².

Theorem (Mordell 1922, Weil 1928). For an elliptic curve E over a number field K, the group E(K) is finitely generated: E(K) ≅ E(K)_tors ⊕ ℤʳ.

Theorem (Mazur, 1977). For an elliptic curve over ℚ, the torsion subgroup E(ℚ)_tors is isomorphic to one of the fifteen groups ℤ/N for 1 ≤ N ≤ 10 or N = 12, or ℤ/2 × ℤ/2N for 1 ≤ N ≤ 4.

The rank r is far more mysterious. The conjecture of Birch and Swinnerton-Dyer (1960s) predicts that r equals the order of vanishing at s = 1 of the L-function L(E, s), which is built from the numbers of points of E modulo primes. The modularity theorem (Wiles and Taylor–Wiles 1995 for semistable curves; Breuil, Conrad, Diamond and Taylor 2001 in general) shows that L(E, s) comes from a modular form, and in the semistable case it was the key to Fermat's Last Theorem.

Elliptic curves over finite fields

Over 𝔽_p (p > 3), E(𝔽_p) is a finite abelian group, and Hasse's theorem (1933) gives

        | #E(𝔽_p) − (p + 1) | ≤ 2√p

This was the first case of the Weil conjectures, proved in general by Deligne in 1974. For example, y² = x³ + x + 1 over 𝔽₅: the squares mod 5 are 0, 1, 4. The values of x³ + x + 1 for x = 0, 1, 2, 3, 4 are 1, 3, 1, 1, 4, giving 2, 0, 2, 2, 2 points, so #E(𝔽₅) = 8 + 1 = 9, and |9 − 6| = 3 ≤ 2√5 ≈ 4.47. The hardness of the discrete logarithm problem in E(𝔽_p) underlies elliptic curve cryptography, proposed independently by Koblitz and Miller in 1985.

✏️ Your Turn

(a) On y² = x³ + 17, compute (−2, 3) + (2, 5).
(b) On y² = x³ − 2, compute 2(3, 5).
(c) Show that (0, 0) has order 2 on y² = x³ + x, and find all points of order 2 over ℂ.

Answers: (a) λ = (5 − 3)/(2 + 2) = 1/2, x₃ = 1/4 + 2 − 2 = 1/4 and y₃ = (1/2)(−2 − 1/4) − 3 = −9/8 − 3 = −33/8. So the sum is (1/4, −33/8); check: 1/64 + 17 = 1089/64 = (33/8)². (b) λ = 3 · 9/(2 · 5) = 27/10, x₃ = 729/100 − 6 = 129/100 and y₃ = (27/10)(3 − 129/100) − 5 = (27/10)(171/100) − 5 = 4617/1000 − 5000/1000 = −383/1000. So 2(3, 5) = (129/100, −383/1000). (c) At (0, 0) we have y = 0, so the tangent line is vertical (x = 0), the third intersection is O, and 2(0, 0) = O. The points of order 2 are the points with y = 0: x³ + x = x(x − i)(x + i), so (0, 0), (i, 0) and (−i, 0).

─────────────────────────────────
Lesson 12: Genus and the Degree–Genus Formula
─────────────────────────────────

📌 Key idea of this section:

        smooth plane curve of degree d:   g = (d − 1)(d − 2)/2

Curves as Riemann surfaces

A smooth projective curve over ℂ is, in the classical topology, a compact connected Riemann surface (connectedness of irreducible projective curves is a theorem), hence a compact orientable surface. By the classification of surfaces it is a sphere with g handles, and g is its genus. Conversely, Riemann's existence theorem shows that every compact Riemann surface is a smooth projective algebraic curve. The genus has several equivalent algebraic definitions: g = dim H⁰(C, Ω¹), the dimension of the space of holomorphic differentials; g = dim H¹(C, 𝒪_C); or g as the constant in the Riemann–Roch theorem below. These make sense over any field, which is how the genus is defined in characteristic p.

Examples. ℙ¹ has genus 0. A smooth plane cubic, a torus ℂ/Λ, has genus 1. A smooth plane quartic has genus 3.

The Riemann–Hurwitz formula

Theorem (Riemann–Hurwitz). Let f: X → Y be a nonconstant holomorphic map of degree n between compact Riemann surfaces, and let e_P be the ramification index at P ∈ X. Then

        2g_X − 2 = n(2g_Y − 2) + ∑_{P ∈ X} (e_P − 1)

Proof sketch. Triangulate Y so that the finitely many branch points are vertices, and lift to X. Every face and edge has exactly n preimages, and so does every vertex except that a vertex f(P) loses ∑(e_P − 1) preimages. Hence χ(X) = nχ(Y) − ∑(e_P − 1), and χ = 2 − 2g gives the formula. ∎

Hyperelliptic curves. Let f ∈ ℂ[x] be squarefree of degree n, and let C be the smooth projective model of y² = f(x). The map (x, y) ↦ x has degree 2 and is ramified exactly at the roots of f and, if n is odd, at the point over ∞, with e = 2 at each. So the number of branch points is r = n for n even and r = n + 1 for n odd, and 2g − 2 = 2(−2) + r gives

        g = (r − 2)/2 = ⌊(n − 1)/2⌋

For n = 3 or 4 this is genus 1, consistent with elliptic curves. The curve y² = x⁶ − 1 has genus 2, and every curve of genus 2 is hyperelliptic.

The degree–genus formula

Theorem. A smooth plane curve C ⊂ ℙ² of degree d has genus g = (d − 1)(d − 2)/2.

Proof. Choose a point O ∉ C in general position and coordinates with O = [0 : 1 : 0]. Projection from O, π([X : Y : Z]) = [X : Z], is a morphism C → ℙ¹ of degree d, because each line through O meets C in d points counted with multiplicity (Bézout). The ramification points are the points where the line through O is tangent to C, that is, the points of C where ∂F/∂Y = 0. The polar curve ∂F/∂Y = 0 has degree d − 1, so by Bézout C meets it in d(d − 1) points counted with multiplicity; for O general, all these intersections are transverse and each corresponds to a simple tangency, with e_P = 2 (this genericity statement is standard, see Griffiths–Harris, Principles of Algebraic Geometry, Chapter 2, or Fulton, Algebraic Curves, Chapter 8). Riemann–Hurwitz then gives

        2g − 2 = d(0 − 2) + d(d − 1) = d² − 3d

so g = (d² − 3d + 2)/2 = (d − 1)(d − 2)/2. ∎

The values are 0, 0, 1, 3, 6, 10, 15, … for d = 1, 2, 3, 4, 5, 6, 7. In particular no smooth plane curve has genus 2, 4 or 5. The Fermat curve Xⁿ + Yⁿ = Zⁿ is smooth (its partial derivatives nXⁿ⁻¹, nYⁿ⁻¹, nZⁿ⁻¹ vanish simultaneously only at the origin of k³), so it has genus (n − 1)(n − 2)/2.

Singular curves

If C is an irreducible plane curve of degree d with singular points, its normalization C̃ → C is a smooth projective curve birational to C, and the geometric genus of C is the genus of C̃. Then

        g(C̃) = (d − 1)(d − 2)/2 − ∑_P δ_P

where δ_P ≥ 1 for each singular point, and δ_P = m_P(m_P − 1)/2 for an ordinary point of multiplicity m_P. A node or a simple cusp has δ = 1. For example the nodal cubic y² = x²(x + 1) has genus 1 − 1 = 0, so it is rational, and indeed the lines y = tx through the node give the parametrization

        x = t² − 1,   y = t(t² − 1)

since t²x² = x²(x + 1) gives x = t² − 1 for x ≠ 0. The values t = ±1 both map to the node, which is the normalization separating its two branches. A quartic with an ordinary triple point has genus 3 − 3 = 0 and is likewise rational.

Riemann–Roch and the trichotomy

For a divisor D on a smooth projective curve C of genus g, let ℓ(D) be the dimension of the space of rational functions f with div(f) + D ≥ 0, and K a canonical divisor (the divisor of a meromorphic differential), of degree 2g − 2.

Theorem (Riemann–Roch). ℓ(D) − ℓ(K − D) = deg D + 1 − g.

For instance, for D = n·O on an elliptic curve and n ≥ 1, ℓ(D) = n; the functions 1, x, y in the Weierstrass model have poles of orders 0, 2, 3 at O, and the seven functions 1, x, y, x², xy, x³, y² in the six-dimensional space of functions with a pole of order at most 6 must satisfy a linear relation, which is precisely a Weierstrass equation.

The genus controls arithmetic in a striking way. For a smooth projective curve over ℚ: if g = 0, the curve is a conic and has either no rational points or infinitely many, parametrized by ℙ¹(ℚ) (Lesson 6). If g = 1 and there is a rational point, the rational points form a finitely generated abelian group (Mordell–Weil). If g ≥ 2, there are only finitely many rational points: this is the Mordell conjecture, proved by Faltings in 1983. For instance, for n ≥ 4 the Fermat curve xⁿ + yⁿ = 1 has genus at least 3, so it has only finitely many rational points, which was known before Wiles proved there are only the trivial ones.

✏️ Your Turn

(a) What is the genus of a smooth plane sextic?
(b) Compute the genus of the curve y² = x⁶ − 1 with Riemann–Hurwitz.
(c) An irreducible plane quartic has exactly two singular points, both ordinary nodes. What is its geometric genus?

Answers: (a) (6 − 1)(6 − 2)/2 = 10. (b) The polynomial x⁶ − 1 has six distinct roots and even degree, so the double cover x: C → ℙ¹ has exactly 6 branch points: 2g − 2 = 2(−2) + 6 = 2, g = 2. (c) 3 − 1 − 1 = 1.

─────────────────────────────────
Lesson 13: A Glimpse of Schemes
─────────────────────────────────

📌 Key idea of this section:

        Spec A = { prime ideals of A },  closed sets V(𝔞) = { 𝔭 ⊇ 𝔞 },  functions = elements of A

Why generalize

The dictionary of Lesson 5 identifies affine varieties over k = k̄ with reduced finitely generated k-algebras, and points with maximal ideals. Three limitations suggest going further. First, non-reduced ideals such as ⟨x², y⟩ carry real geometric information (the tangency recorded by intersection multiplicity) that the set V(x², y) forgets. Second, arithmetic questions concern rings like ℤ or ℤ[i], which are not algebras over a field at all. Third, it is natural to want every ring homomorphism to give a map of spaces, but the preimage of a maximal ideal need not be maximal (the preimage of the maximal ideal 0 ⊂ ℚ under ℤ → ℚ is the prime ideal 0 ⊂ ℤ), whereas the preimage of a prime ideal is always prime. Grothendieck's theory of schemes, developed in the Éléments de géométrie algébrique (with Dieudonné, 1960–67), resolves all three by using all prime ideals of an arbitrary commutative ring.

The spectrum of a ring

For a commutative ring A, the spectrum Spec A is the set of prime ideals of A. Its Zariski topology has closed sets V(𝔞) = { 𝔭 : 𝔭 ⊇ 𝔞 } for ideals 𝔞, and a basis of open sets D(f) = { 𝔭 : f ∉ 𝔭 }. An element f ∈ A is thought of as a function on Spec A whose value at 𝔭 is the image of f in the residue field κ(𝔭) = Frac(A/𝔭). A ring homomorphism φ: A → B induces a continuous map Spec B → Spec A, 𝔮 ↦ φ⁻¹(𝔮). Spec A carries a sheaf of rings 𝒪 with 𝒪(D(f)) = A_f, the localization; an affine scheme is a space of this form, and a scheme is a space locally isomorphic to affine schemes. The functor A ↦ Spec A is an anti-equivalence between commutative rings and affine schemes, with no hypotheses at all.

Examples

Spec ℂ[x]. The primes are ⟨x − a⟩ for a ∈ ℂ, the closed points, and the zero ideal ⟨0⟩. The closure of ⟨0⟩ is everything, since every prime contains 0: it is the generic point of the line, a point that lies "everywhere at once" and whose residue field is the function field ℂ(x).

Spec ℝ[x]. The closed points are ⟨x − a⟩ for a ∈ ℝ and ⟨x² + bx + c⟩ with b² < 4c; the latter correspond to pairs of complex conjugate points, with residue field ℂ. So Spec ℝ[x] is the complex line folded by complex conjugation, plus a generic point.

Spec ℤ. The points are ⟨p⟩ for p prime, with residue fields 𝔽_p, and the generic point ⟨0⟩ with residue field ℚ. The ring ℤ behaves like the coordinate ring of a curve, and an integer n is a "function" whose value at ⟨p⟩ is n mod p; it vanishes exactly at the primes dividing n.

Spec ℤ[i]. The inclusion ℤ → ℤ[i] gives a map Spec ℤ[i] → Spec ℤ, and the fiber over ⟨p⟩ is Spec 𝔽_p[x]/⟨x² + 1⟩. Over p = 2, x² + 1 = (x + 1)² in 𝔽₂[x], so the fiber is a single non-reduced point: the prime 2 ramifies, 2 = −i(1 + i)². Over primes p ≡ 1 mod 4, x² + 1 has two roots mod p and the fiber consists of two points: p splits, as 5 = (2 + i)(2 − i). Over primes p ≡ 3 mod 4, x² + 1 is irreducible and the fiber is one point with residue field 𝔽_{p²}: p is inert. This is the geometric form of Fermat's theorem on sums of two squares: an odd prime is x² + y² exactly when it splits in ℤ[i].

Spec ℤ[x]. This is an arithmetic surface: its points include the generic point ⟨0⟩, the "horizontal curves" ⟨f⟩ for irreducible f ∈ ℤ[x], the "vertical fibers" ⟨p⟩ ≅ Spec 𝔽_p[x], and closed points ⟨p, g⟩ with g irreducible mod p. Mumford's famous drawing of Spec ℤ[x] in his Red Book shows it as a plane fibered over Spec ℤ.

Nilpotents

Spec k[ε]/⟨ε²⟩ has one point, but its ring of functions contains the nonzero nilpotent ε. It is a point equipped with a tangent direction: a morphism Spec k[ε]/⟨ε²⟩ → X is the same as a point of X together with a tangent vector at it (Problem 58). Similarly, the scheme-theoretic intersection of the parabola y = x² with the line y = 0 is Spec k[x, y]/⟨y − x², y⟩ = Spec k[x]/⟨x²⟩, a double point, and its length 2 is precisely the intersection multiplicity of Lesson 9. In the language of schemes, Bézout's theorem says that the intersection of two plane curves without common components is a finite scheme of length mn.

Where this leads

The theory of schemes made it possible to transport topological intuition into number theory. Weil had conjectured in 1949 that the numbers of points of varieties over finite fields are governed by a cohomology theory with the formal properties of singular cohomology; Grothendieck, Artin and their school constructed étale cohomology, and Deligne used it to prove the last of the Weil conjectures, the analogue of the Riemann hypothesis, in 1974. Faltings's proof of the Mordell conjecture and Wiles's proof of Fermat's Last Theorem are both theorems of arithmetic geometry written in this language. The elementary objects of this course, plane curves over ℚ, remain at the center: the Birch and Swinnerton-Dyer conjecture about the elliptic curves of Lesson 11 is one of the Clay Millennium Problems.

✏️ Your Turn

(a) List the points of Spec ℤ/12ℤ.
(b) Describe the fiber of Spec ℤ[i] → Spec ℤ over ⟨13⟩.
(c) Show that Spec k[x]/⟨x²⟩ and Spec k have the same underlying topological space but are not isomorphic as schemes.

Answers: (a) The primes of ℤ/12ℤ correspond to primes of ℤ containing 12, namely ⟨2⟩ and ⟨3⟩: two points. (b) 13 ≡ 1 mod 4, and x² + 1 ≡ (x − 5)(x + 5) mod 13 since 25 = 26 − 1. So the fiber consists of two points, and 13 = (3 + 2i)(3 − 2i). (c) Both rings have exactly one prime ideal (⟨x⟩, respectively 0), so both spaces are a single point. But k[x]/⟨x²⟩ has the nonzero nilpotent x, while k is a field, so the rings are not isomorphic and, by the anti-equivalence, neither are the schemes.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped by difficulty. The Core problems check definitions and standard computations from each lesson. The Advanced problems require combining several ideas or writing short proofs. The Challenge problems are proofs of the kind found on graduate qualifying examinations; several of them complete arguments that the lessons only sketched. Unless stated otherwise, k is an algebraically closed field of characteristic 0 and curves are considered in ℙ²(k).

Core (Problems 1–20)

  1. Determine V(x² + y² − 1, y − 1) ⊂ 𝔸²(ℝ).
  2. Describe the algebraic set V(x² − y²) ⊂ 𝔸².
  3. Determine V(xy, x − 1) ⊂ 𝔸².
  4. Compute √⟨x³, y²⟩ in k[x, y].
  5. Is ⟨x² + 1⟩ a maximal ideal of ℝ[x]? Of ℂ[x]? Describe V(x² + 1) in each case.
  6. Find the irreducible components of V(x² − xy) ⊂ 𝔸².
  7. Find the rational point on x² + y² = 1 with parameter t = 3 in the parametrization through (−1, 0).
  8. Write down the primitive Pythagorean triples given by (m, n) = (4, 1), (5, 2) and (7, 4).
  9. Find the singular points of y² = x⁴ − x² and describe the real curve near each.
  10. Find the tangent line to the curve x³ + y³ = 9 at the point (1, 2).
  11. Homogenize y = x³ − 2x + 5 and find its points at infinity.
  12. Find the points at infinity of the hyperbola x² − 4y² = 1 and relate them to its asymptotes.
  13. A projective quartic and a projective cubic have no common component. How many intersection points do they have, counted with multiplicity?
  14. Compute I₀(y − x³, y).
  15. Decide whether y² = x³ − x and y² = x³ − 3x + 2 are smooth.
  16. Compute the j-invariants of y² = x³ + x and y² = x³ + 5.
  17. On y² = x³ + 1, compute (2, 3) + (0, 1).
  18. What is the genus of a smooth plane quintic?
  19. What is the genus of the curve y² = x⁵ − x?
  20. Identify the coordinate ring of the parabola V(y − x²) and the image of the function y under your isomorphism.

Advanced (Problems 21–45)

  21. Show that ℤ² is Zariski dense in 𝔸²(ℂ).
  22. Let k be infinite. Show that any two nonempty Zariski open subsets of 𝔸ⁿ intersect.
  23. Determine V(x − y², x² − y²) and decide whether the ideal J = ⟨x − y², x² − y²⟩ is radical.
  24. Find an explicit Nullstellensatz certificate showing that x² + y² − 1, x − 2 and y have no common zero.
  25. Find the smallest N with (x + y)ᴺ ∈ ⟨x², y²⟩ in ℚ[x, y].
  26. Show that φ(t) = (t² − 1, t(t² − 1)) maps 𝔸¹ onto the nodal cubic C: y² = x²(x + 1), is injective except that φ(1) = φ(−1), and is not an isomorphism.
  27. Show that the coordinate ring of the cuspidal cubic y² = x³ is not a unique factorization domain.
  28. Parametrize the conic x² + xy + y² = 1 by lines through (1, 0).
  29. Parametrize the rational points of x² + y² = 2 by lines through (1, 1), and find the point with t = 2.
  30. Find all intersection points, with multiplicities, of the circles x² + y² = 4 and (x − 1)² + (y − 1)² = 2 in ℙ²(ℂ).
  31. Compute I₀(y² − x³, y − x²) and compare it with the product of multiplicities.
  32. The projective closures of y² = x³ and y = x³ meet with total multiplicity 9. Find all intersection points and their multiplicities.
  33. Show that the projective closure of the twisted cubic { (t, t², t³) } ⊂ 𝔸³ meets the plane at infinity in exactly one point.
  34. Show that O = [0 : 1 : 0] is a flex of every Weierstrass cubic Y²Z = X³ + aXZ² + bZ³.
  35. On y² = x³ + 17, compute 2Q for Q = (−1, 4).
  36. Find all points of order 2 on y² = x³ − x and show that together with O they form a group isomorphic to ℤ/2 × ℤ/2.
  37. Count the points of y² = x³ + x + 1 over 𝔽₇ and determine the group structure.
  38. An irreducible plane quartic has exactly one singular point, an ordinary node. What is its geometric genus?
  39. Show that the Fermat quartic X⁴ + Y⁴ = Z⁴ is smooth and find its genus.
  40. Find the genus of the smooth projective curve y² = x⁷ − x.
  41. Show that no smooth plane curve has genus 2.
  42. Find the points at infinity of the projective closure of xy = 1 and the tangent lines there.
  43. Show that y² = x³ − x + 1 is smooth over ℚ, compute its j-invariant, and find the primes p ≥ 5 at which its reduction is singular.
  44. Find the tangent line to y² = x³ + 17 at P = (−2, 3) and its third intersection with the curve.
  45. On y² = x³ + 17 with P = (−2, 3), compute 3P.

Challenge (Problems 46–60)

  46. Show that U = 𝔸² ∖ {(0, 0)} is not isomorphic to an affine algebraic set. (A regular function on an open set is one that is locally a quotient of polynomials with nonvanishing denominator.)
  47. Prove that every algebraic set, with its Zariski topology, is quasi-compact: every open cover has a finite subcover.
  48. Prove that an irreducible conic is smooth.
  49. Prove that a plane cubic with two singular points is reducible.
  50. Prove that an irreducible plane curve of degree d has at most (d − 1)(d − 2)/2 singular points.
  51. Show that the smooth conics y = x² and x² + y² = y meet only at the origin, with intersection multiplicity 4.
  52. Prove Bézout's theorem when one of the curves is a line.
  53. Find all points of order 3 on y² = x³ + b (b ≠ 0) over ℂ, and the rational ones for b = 1.
  54. Show that the kernel of multiplication by 2 on a complex elliptic curve has exactly 4 elements.
  55. Count the points of y² = x³ + 3 over 𝔽₇, compare with Hasse's bound, and determine the group.
  56. Using the Legendre form, show that λ = −1, 2 and 1/2 all give j = 1728, and find the λ with j = 0.
  57. Compute the genus of the curve y³ = x⁴ + 1 in two ways: by Riemann–Hurwitz for the map (x, y) ↦ x, and by the degree–genus formula.
  58. Let C = V(f) ⊂ 𝔸² and P = (a, b) ∈ C. Show that k-algebra homomorphisms k[x, y]/⟨f⟩ → k[ε]/⟨ε²⟩ lying over P correspond to vectors (u, v) with fₓ(P)u + f_y(P)v = 0, and deduce that this space has dimension 1 at smooth points and 2 at singular points.
  59. Describe the fibers of Spec ℤ[i] → Spec ℤ over ⟨2⟩, ⟨3⟩ and ⟨5⟩.
  60. Show that Spec ℤ[x] contains a chain of three distinct prime ideals, so that its Krull dimension is at least 2.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. Substituting y = 1 gives x² = 0, so x = 0. V = {(0, 1)}: the line y = 1 is tangent to the circle at its top point.
  2. x² − y² = (x − y)(x + y), so V(x² − y²) = V(x − y) ∪ V(x + y), the two diagonal lines through the origin (in characteristic ≠ 2 they are distinct).
  3. x = 1 and xy = 0 force y = 0, so V = {(1, 0)}.
  4. ⟨x³, y²⟩ ⊆ ⟨x, y⟩, and x, y lie in the radical (x³, y² ∈ ⟨x³, y²⟩). Since ⟨x, y⟩ is maximal and the radical is proper (all elements vanish at 0), √⟨x³, y²⟩ = ⟨x, y⟩.
  5. In ℝ[x], x² + 1 is irreducible, so ⟨x² + 1⟩ is maximal (ℝ[x]/⟨x² + 1⟩ ≅ ℂ), yet V_ℝ(x² + 1) = ∅: over a non-closed field, maximal ideals need not correspond to points. In ℂ[x], x² + 1 = (x − i)(x + i), so ⟨x² + 1⟩ is not even prime, and V_ℂ(x² + 1) = {i, −i}.
  6. x² − xy = x(x − y), so the components are the lines x = 0 and y = x; each is irreducible (linear polynomials generate prime ideals) and neither contains the other.
  7. x = (1 − 9)/(1 + 9) = −4/5 and y = 6/10 = 3/5. Check: 16/25 + 9/25 = 1.
  8. (4, 1): (16 − 1, 8, 17) = (15, 8, 17). (5, 2): (21, 20, 29). (7, 4): (49 − 16, 56, 65) = (33, 56, 65); check 1089 + 3136 = 4225 = 65². Each pair is coprime of opposite parity, so the triples are primitive.
  9. f = y² − x⁴ + x², fₓ = −4x³ + 2x = −2x(2x² − 1), f_y = 2y. So y = 0 and x = 0 or x² = 1/2. At x² = 1/2, f = −1/4 + 1/2 = 1/4 ≠ 0. The only singular point is the origin, with lowest form y² + x² = (y − ix)(y + ix): over ℂ a node with tangents y = ±ix. Over ℝ, y² = x²(x² − 1) requires x = 0 or |x| ≥ 1, so the origin is an isolated real point (an acnode).
  10. fₓ = 3x² = 3 and f_y = 3y² = 12 at (1, 2), which lies on the curve (1 + 8 = 9). Tangent: 3(x − 1) + 12(y − 2) = 0, i.e. x + 4y = 9.
  11. Degree 3: YZ² = X³ − 2XZ² + 5Z³. At Z = 0: X³ = 0, so the only point at infinity is [0 : 1 : 0], where the line at infinity meets the curve with multiplicity 3.
  12. Homogenize: X² − 4Y² = Z². At Z = 0: (X − 2Y)(X + 2Y) = 0, giving [2 : 1 : 0] and [2 : −1 : 0]. These are the directions of the asymptotes y = x/2 and y = −x/2.
  13. By Bézout, 4 · 3 = 12.
  14. The x-axis y = 0 is smooth at the origin. Restricting y − x³ to it gives −x³, which has order 3 at x = 0, so I₀ = 3: the x-axis is the inflectional tangent of y = x³ at the origin.
  15. For y² = x³ − x: 4(−1)³ + 27 · 0 = −4 ≠ 0, smooth. For y² = x³ − 3x + 2: 4(−27) + 27 · 4 = 0, singular; x³ − 3x + 2 = (x − 1)²(x + 2) and the singular point is (1, 0).
  16. For a = 1, b = 0: j = 1728 · 4/4 = 1728. For a = 0, b = 5: j = 0 (the numerator 4a³ is 0 and 27b² = 675 ≠ 0).
  17. λ = (1 − 3)/(0 − 2) = 1, x₃ = 1 − 2 − 0 = −1 and y₃ = 1 · (2 − (−1)) − 3 = 0. So (2, 3) + (0, 1) = (−1, 0). This is consistent with Lesson 11: (0, 1) = 2(2, 3), so the sum is 3(2, 3), which has order 2 since (2, 3) has order 6.
  18. (5 − 1)(5 − 2)/2 = 6.
  19. x⁵ − x = x(x − 1)(x + 1)(x² + 1) is squarefree of degree 5, so g = ⌊4/2⌋ = 2 (six branch points including ∞: 2g − 2 = −4 + 6).
  20. k[x, y]/⟨y − x²⟩ ≅ k[t] via x ↦ t, y ↦ t²; the function y corresponds to t².

Advanced

  21. Let f ∈ ℂ[x, y] vanish on ℤ². Write f = ∑ cᵢ(y) xⁱ. For each b ∈ ℤ, the polynomial f(x, b) has infinitely many roots (all integers), so it is zero; hence cᵢ(b) = 0 for all i and all b ∈ ℤ, so each cᵢ has infinitely many roots and cᵢ = 0. Thus I(ℤ²) = 0 and the closure of ℤ² is V(0) = 𝔸².
  22. 𝔸ⁿ is irreducible because I(𝔸ⁿ) = 0 is prime (k infinite). If U₁, U₂ are nonempty open with U₁ ∩ U₂ = ∅, then 𝔸ⁿ = (𝔸ⁿ ∖ U₁) ∪ (𝔸ⁿ ∖ U₂) is a union of two proper closed subsets, a contradiction.
  23. On V, x = y² and y⁴ = y², so y = 0 or y = ±1: V = {(0, 0), (1, 1), (1, −1)}. Modulo J we may substitute x = y², so k[x, y]/J ≅ k[y]/⟨y⁴ − y²⟩ = k[y]/⟨y²(y − 1)(y + 1)⟩. The element f = y³ − y vanishes at all three points but is not divisible by y⁴ − y², so f ∉ J, while f² is divisible by y⁴ − y², so f² ∈ J. Hence J is not radical; √J = ⟨x − y², y³ − y⟩. The non-reducedness sits at the origin, where the parabola x = y² passes through the singular point (the node) of the line pair x² = y².
  24. (x² + y² − 1) − (x + 2)(x − 2) − y · y = x² + y² − 1 − x² + 4 − y² = 3, so 1 = (1/3)(x² + y² − 1) − (1/3)(x + 2)(x − 2) − (1/3)y · y.
  25. (x + y)² = x² + 2xy + y² ∉ ⟨x², y²⟩ because of the term 2xy (every element of ⟨x², y²⟩ has all its monomials divisible by x² or by y²), while (x + y)³ = x³ + 3x²y + 3xy² + y³ ∈ ⟨x², y²⟩. So N = 3.
  26. φ(t) lies on C: y² = t²(t² − 1)² = x²(x + 1) with x + 1 = t². Every point of C with x ≠ 0 has t = y/x and comes from exactly that t. The origin has preimages t = ±1. So φ is surjective and injective away from ±1. It is not an isomorphism since it is not injective (equivalently, φ*: k[C] → k[t] is not surjective; its image is the subring of polynomials g with g(1) = g(−1)).
  27. k[C] ≅ k[t², t³] = { polynomials with no t¹ term }. The elements t² and t³ are irreducible there (a factorization would need an element of degree 1, and there is none), and they are not associates (the units are constants). But t⁶ = t² · t² · t² = t³ · t³ gives two factorizations into irreducibles that differ, so k[t², t³] is not a UFD.
  28. Put y = t(x − 1). Then x² + tx(x − 1) + t²(x − 1)² = 1, i.e. (x − 1)[(x + 1) + tx + t²(x − 1)] = 0. The second root satisfies x(1 + t + t²) = t² − 1, so x = (t² − 1)/(t² + t + 1) and y = t(x − 1) = −t(t + 2)/(t² + t + 1). Check t = 2: (3/7, −8/7), and 9/49 − 24/49 + 64/49 = 1.
  29. Put y − 1 = t(x − 1). Then x² + (1 + t(x − 1))² = 2 becomes (x − 1)[x + 1 + 2t + t²(x − 1)] = 0, so x = (t² − 2t − 1)/(t² + 1) and y = 1 + t(x − 1) = (1 − 2t − t²)/(t² + 1). At t = 2: (−1/5, −7/5), and 1/25 + 49/25 = 2. Every rational point other than (1, 1) arises from a unique t ∈ ℚ, so there are infinitely many.
  30. The second circle is x² + y² − 2x − 2y = 0. Subtracting from x² + y² − 4 = 0 gives 2x + 2y − 4 = 0, so y = 2 − x and 2x² − 4x = 0: the points (0, 2) and (2, 0). The two circular points [1 : ±i : 0] are also common. At [1 : i : 0] the gradients of X² + Y² − 4Z² and X² + Y² − 2XZ − 2YZ are (2, 2i, 0) and (2, 2i, −2 − 2i), which are not proportional, so the tangents differ and the multiplicity is 1; similarly at [1 : −i : 0]. All four points have multiplicity 1, total 4 = 2 · 2.
  31. Restrict y² − x³ to the smooth curve y = x²: x⁴ − x³ = x³(x − 1) has order 3 at 0. So I₀ = 3 > m₀(y² − x³) · m₀(y − x²) = 2 · 1 = 2, as property 5 predicts, because both curves have the tangent y = 0 at the origin.
  32. Affine: y = x³ and y² = x³ give x⁶ = x³, so x³(x³ − 1) = 0. At the origin, restricting y² − x³ to the smooth curve y = x³ gives x⁶ − x³, of order 3: I = 3. The three points (ζ, 1) with ζ³ = 1 are simple roots of x³ − 1, so each has I = 1. At infinity, Y²Z = X³ and YZ² = X³ with Z = 0 force X = 0, giving [0 : 1 : 0]. In the chart Y = 1: z = x³ and z² = x³, and substituting z = x³ gives x⁶ − x³ of order 3, so I = 3. Total 3 + 3 + 3 = 9.
  33. Use coordinates [X : Y : Z : W] with C = { [t : t² : t³ : 1] }. The homogeneous quadrics WY − X², WZ − XY and XZ − Y² vanish on C (t² − t², t³ − t³, t⁴ − t⁴), so the closure lies in their common zero set. At W = 0 they give X² = 0, XY = 0 and XZ = Y², hence X = Y = 0, leaving only the point [0 : 0 : 1 : 0]. The closure does contain this point: over ℂ, [t : t² : t³ : 1] = [t⁻² : t⁻¹ : 1 : t⁻³] tends to [0 : 0 : 1 : 0] as t → ∞, and Zariski closed sets are closed in the classical topology. So the closure meets the plane at infinity in exactly one point. (By contrast, YW − X² and ZW² − X³ alone vanish on the whole line X = W = 0.)
  34. The tangent at O: the gradient of F = Y²Z − X³ − aXZ² − bZ³ at [0 : 1 : 0] is (0, 0, 1), so the tangent is Z = 0. Restricting F to Z = 0 gives −X³, which vanishes to order 3 at [0 : 1]. So I_O(F, Z) = 3 and O is a flex.
  35. λ = (3 · 1 + 0)/(2 · 4) = 3/8, x₃ = 9/64 − 2(−1) = 137/64 and y₃ = (3/8)(−1 − 137/64) − 4 = (3/8)(−201/64) − 4 = −603/512 − 2048/512 = −2651/512. So 2Q = (137/64, −2651/512); one checks (137/64)³ + 17 = (2651/512)².
  36. Points of order 2 have y = 0: x³ − x = x(x − 1)(x + 1) gives (0, 0), (1, 0), (−1, 0). The three points lie on the line y = 0, so their sum is O; since each equals its own negative, the sum of any two is the third. So {O, (0, 0), (1, 0), (−1, 0)} is a group in which every element has order dividing 2: the Klein four-group ℤ/2 × ℤ/2.
  37. Squares mod 7 are 0, 1, 2, 4. The values of x³ + x + 1 for x = 0, …, 6 are 1, 3, 4, 3, 6, 5, 6 (for instance x = 4: 64 + 4 + 1 = 69 ≡ 6). The squares among them are 1 (x = 0) and 4 (x = 2), each giving 2 points. So #E(𝔽₇) = 4 + 1 = 5, and |5 − 8| = 3 ≤ 2√7 ≈ 5.29. A group of prime order 5 is cyclic: E(𝔽₇) ≅ ℤ/5, generated by any of (0, ±1), (2, ±2).
  38. (4 − 1)(4 − 2)/2 − 1 = 3 − 1 = 2.
  39. The partial derivatives 4X³, 4Y³, −4Z³ vanish simultaneously only at X = Y = Z = 0, so the curve is smooth (characteristic 0, or any characteristic ≠ 2). By the degree–genus formula g = 3 · 2/2 = 3.
  40. x⁷ − x = x(x⁶ − 1) has 7 distinct roots (0 and the sixth roots of unity). For odd degree the point over ∞ is also a branch point, so there are 8 branch points: 2g − 2 = 2(−2) + 8 = 4, g = 3.
  41. The genus of a smooth plane curve of degree d is (d − 1)(d − 2)/2, taking the values 0, 0, 1, 3, 6, … for d = 1, 2, 3, 4, 5, …, and this function is strictly increasing for d ≥ 2. Since it jumps from 1 (d = 3) to 3 (d = 4), the value 2 never occurs.
  42. XY = Z² meets Z = 0 where XY = 0: [1 : 0 : 0] and [0 : 1 : 0]. The gradient of XY − Z² is (Y, X, −2Z); at [1 : 0 : 0] it is (0, 1, 0), giving the tangent Y = 0, and at [0 : 1 : 0] it is (1, 0, 0), giving X = 0. These are the asymptotes y = 0 and x = 0: asymptotes are tangent lines at points at infinity.
  43. 4a³ + 27b² = 4(−1) + 27 = 23 ≠ 0, so the curve is smooth over ℚ. j = 1728 · (−4)/23 = −6912/23. For p ≥ 5 the reduction is singular iff p divides 23, i.e. only for p = 23.
  44. λ = 3x₁²/(2y₁) = 12/6 = 2, so the tangent is y − 3 = 2(x + 2), i.e. y = 2x + 7. Substituting: x³ + 17 − (2x + 7)² = x³ − 4x² − 28x − 32 = (x + 2)²(x − 8). The third intersection is x = 8, y = 23, the point (8, 23) = −2P, in agreement with 2P = (8, −23).
  45. 3P = 2P + P = (8, −23) + (−2, 3). λ = (3 − (−23))/(−2 − 8) = 26/(−10) = −13/5. x₃ = 169/25 − 8 + 2 = 19/25 and y₃ = λ(8 − 19/25) − (−23) = (−13/5)(181/25) + 23 = −2353/125 + 2875/125 = 522/125. So 3P = (19/25, 522/125); check: (19/25)³ + 17 = 6859/15625 + 265625/15625 = 272484/15625 = (522/125)².

Challenge

  46. U = D(x) ∪ D(y). A regular function on U restricts to regular functions on D(x) ≅ V(xz − 1) ⊂ 𝔸³ and on D(y), so it lies in k[x, y][1/x] ∩ k[x, y][1/y] inside k(x, y). If g/xᵃ = h/yᵇ with g, h ∈ k[x, y], then yᵇg = xᵃh, so xᵃ divides g by unique factorization, and the function equals g/xᵃ ∈ k[x, y]. Hence 𝒪(U) = k[x, y]. If U were isomorphic to an affine algebraic set X, then k[X] ≅ 𝒪(U) = k[x, y], and the inclusion U → 𝔸², which induces the identity on k[x, y], would be an isomorphism by the anti-equivalence of Lesson 5. But it is not surjective. (Equivalently: the maximal ideal ⟨x, y⟩ of 𝒪(U) corresponds to no point of U.)
  47. Let X = ⋃ U_α be an open cover. The closed sets X ∖ (U_{α₁} ∪ ⋯ ∪ U_{α_r}) for finite subfamilies form a nonempty family of closed sets, which has a minimal element by the descending chain condition (Lesson 2, Corollary 2). If this minimal element Z were nonempty, pick z ∈ Z and some U_β ∋ z; adding U_β to the subfamily gives a strictly smaller closed set, a contradiction. So Z = ∅ and finitely many U_α cover X.
  48. Suppose the irreducible conic C is singular at P. Choose another point Q ∈ C (C is infinite) and let L be the line PQ. If L were not a component of C, Bézout would give 2 = ∑ I(C, L) ≥ I_P + I_Q ≥ m_P(C)m_P(L) + 1 ≥ 2 + 1 = 3, a contradiction. So L is a component of C, and C is reducible.
  49. Let P ≠ Q be singular points of the cubic F, and L the line PQ. If L is not a component of F, then 3 = ∑ I(F, L) ≥ I_P + I_Q ≥ 2 · 1 + 2 · 1 = 4, a contradiction. Hence L divides F, and F is reducible. (Example: the triangle XYZ has three singular points.)
  50. For d ≤ 2 this follows from Problem 48. Let d ≥ 3 and suppose F has at least s = (d − 1)(d − 2)/2 + 1 singular points P₁, …, P_s. Choose d − 3 further smooth points Q₁, …, Q_{d−3} of F. The total number of points is s + d − 3 = (d² − d − 2)/2 = (d − 2)(d + 1)/2, which equals the dimension of the projective space of curves of degree d − 2 (Lesson 8). So there is a curve G of degree d − 2 through all of them. G has no common component with F because F is irreducible of larger degree. By Bézout, d(d − 2) = ∑ I_P(F, G) ≥ 2s + (d − 3) = (d − 1)(d − 2) + 2 + d − 3 = (d − 1)², since I_P ≥ m_P(F) · m_P(G) ≥ 2 at each Pᵢ. But d(d − 2) = (d − 1)² − 1, a contradiction.
  51. Restrict x² + y² − y to the smooth curve y = x²: x² + x⁴ − x² = x⁴, of order 4. So I₀ = 4. Projectively, YZ = X² and X² + Y² = YZ give Y² = 0, so Y = 0, then X = 0: the only common point is [0 : 0 : 1], the origin. This accounts for all of 2 · 2 = 4. Both conics are smooth: the first is a parabola, the second the circle x² + (y − 1/2)² = 1/4.
  52. Let L be a line not contained in the curve F of degree d, and choose coordinates with L = V(Y), parametrized by [s : u] ↦ [s : 0 : u]. Then φ(s, u) = F(s, 0, u) is a binary form of degree d, not identically zero because L ⊄ F. Over k̄ it factors as φ = c ∏ᵢ (βᵢs − αᵢu)^{rᵢ} with distinct roots [αᵢ : βᵢ] and ∑ rᵢ = d. The intersection points are Pᵢ = [αᵢ : 0 : βᵢ]. In an affine chart around Pᵢ, the line is smooth and parametrized by one coordinate, so by Lesson 9 the multiplicity I_{Pᵢ}(F, L) is the order of vanishing of F restricted to L at Pᵢ, which is the multiplicity rᵢ of the root. Summing gives ∑ I_P(F, L) = ∑ rᵢ = d.
  53. 3P = O iff 2P = −P iff x(2P) = x(P) with P ≠ O and y ≠ 0. With a = 0, x(2P) = λ² − 2x where λ = 3x²/(2y), so the condition is 9x⁴/(4y²) = 3x, i.e. 9x⁴ = 12xy² = 12x(x³ + b), i.e. 3x⁴ + 12bx = 0, i.e. x(x³ + 4b) = 0. (Points with y = 0 have order 2 and are excluded; they satisfy x³ = −b, which is not a root of this equation since b ≠ 0.) For x = 0: y² = b, two points. For each of the three roots of x³ = −4b: y² = −3b ≠ 0, two points each. So there are 2 + 6 = 8 points of order 3, and E[3] ≅ (ℤ/3)². For b = 1, the rational ones are (0, ±1), since x³ = −4 has no rational root.
  54. 2P = O iff P = O or the tangent at P passes through O, i.e. is vertical, i.e. y = 0. In Weierstrass form y² = x³ + ax + b with 4a³ + 27b² ≠ 0, the cubic has three distinct roots, giving three points of order 2. With O, the kernel has 4 elements, and it is ℤ/2 × ℤ/2 as in Problem 36.
  55. The cubes mod 7 are 0 (x = 0), 1 (x = 1, 2, 4) and 6 (x = 3, 5, 6). So x³ + 3 takes the value 3 at x = 0, 4 at x = 1, 2, 4, and 9 ≡ 2 at x = 3, 5, 6. The squares mod 7 are 0, 1, 2, 4: 3 is not a square, while 4 = 2² and 2 = 3² are. So there are 0 + 3 · 2 + 3 · 2 = 12 affine points and #E(𝔽₇) = 13. Hasse: |13 − 8| = 5 ≤ 2√7 ≈ 5.29, close to the extreme. The discriminant check: 27 · 9 = 243 ≡ 5 ≢ 0 mod 7. A group of prime order 13 is cyclic: E(𝔽₇) ≅ ℤ/13.
  56. j(λ) = 256(λ² − λ + 1)³/(λ²(λ − 1)²). For λ = −1: 256 · 27/(1 · 4) = 1728. For λ = 2: 256 · 27/(4 · 1) = 1728. For λ = 1/2: 256 · (3/4)³/((1/4)(1/4)) = 256 · (27/64) · 16 = 1728. These three values form one orbit of the six-element group of Lesson 10 (here the orbit has only three elements). j = 0 iff λ² − λ + 1 = 0, i.e. λ = (1 ± √−3)/2 = −ω, −ω², where ω is a primitive cube root of unity.
  57. Riemann–Hurwitz: x: C → ℙ¹ has degree 3. Over each of the four roots of x⁴ + 1 there is a single point with e = 3. Over x = ∞: the projective closure Y³Z = X⁴ + Z⁴ meets Z = 0 only at [0 : 1 : 0], so there is a single point with e = 3. Elsewhere y³ = c ≠ 0 has three distinct solutions. So 2g − 2 = 3(−2) + 5 · 2 = 4 and g = 3. Degree–genus: F = X⁴ + Z⁴ − Y³Z has F_X = 4X³, F_Y = −3Y²Z, F_Z = 4Z³ − Y³. F_X = 0 gives X = 0; F_Y = 0 gives Y = 0 or Z = 0; Y = 0 makes F_Z = 4Z³ = 0, so Z = 0; Z = 0 makes F_Z = −Y³ = 0, so Y = 0. Either way all coordinates vanish, so the quartic is smooth and g = 3 · 2/2 = 3, in agreement.
  58. A homomorphism over P sends x ↦ a + uε and y ↦ b + vε, and it is well defined iff f(a + uε, b + vε) = 0 in k[ε]/⟨ε²⟩. By Taylor expansion, f(a + uε, b + vε) = f(a, b) + (fₓ(P)u + f_y(P)v)ε, and f(a, b) = 0. So the condition is fₓ(P)u + f_y(P)v = 0. At a smooth point the gradient is nonzero and the solutions form a line (dimension 1, the tangent line); at a singular point the gradient vanishes and every (u, v) works (dimension 2). This is the Zariski tangent space.
  59. The fiber over ⟨p⟩ is Spec ℤ[i]/⟨p⟩ = Spec 𝔽_p[x]/⟨x² + 1⟩. For p = 2: x² + 1 = (x + 1)², one non-reduced point, the prime ⟨1 + i⟩ (2 ramifies). For p = 3: x² + 1 is irreducible over 𝔽₃ (no root among 0, 1, 2), one point ⟨3⟩ with residue field 𝔽₉ (3 is inert). For p = 5: x² + 1 = (x − 2)(x + 2), two points ⟨2 + i⟩ and ⟨2 − i⟩, each with residue field 𝔽₅ (5 splits).
  60. Consider ⟨0⟩ ⊊ ⟨p⟩ ⊊ ⟨p, x⟩ for a prime p. These are prime: ℤ[x] is a domain, ℤ[x]/⟨p⟩ ≅ 𝔽_p[x] is a domain, and ℤ[x]/⟨p, x⟩ ≅ 𝔽_p is a field. The inclusions are strict (p ≠ 0, and x ∉ ⟨p⟩). Hence dim ℤ[x] ≥ 2. (In fact dim A[x] = dim A + 1 for Noetherian A, so dim ℤ[x] = 2: Spec ℤ[x] is a surface.)
