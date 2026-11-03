Geometry — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Euclidean geometry is the oldest deductive science and, for two thousand years, it was the model of what a mathematical theory should be. Yet the subject that most students meet — angle chasing, congruent triangles, the Pythagorean theorem, the inscribed angle theorem — is only its surface. Beneath it lie questions that occupied Gauss, Hilbert, Klein and Dehn: What exactly are the axioms, and are they consistent and independent? What is a "motion" of the plane, and how are all motions classified? Which figures can be cut into finitely many pieces and reassembled into one another? Which lengths can be produced with a straightedge and compass, and why can an angle of 60° not be trisected?

This course treats Euclidean geometry the way a graduate text would. We begin with Hilbert's axiom system of 1899 and its models, so that every later argument rests on a precise foundation. We then adopt Felix Klein's point of view from the Erlangen Program (1872): a geometry is the study of the invariants of a group of transformations. For Euclidean geometry that group is the isometry group E(2) = ℝ² ⋊ O(2), and we classify its elements and its discrete subgroups, including the crystallographic restriction and the frieze and wallpaper groups.

The middle of the course is classical triangle and circle geometry done with full proofs: the Euler line, the nine-point circle, Euler's relation OI² = R² − 2Rr, the theorems of Ceva and Menelaus in their signed form, Routh's theorem, power of a point, radical axes and inversion, with applications such as Ptolemy's inequality and Feuerbach's theorem. We then step outside the Euclidean plane into the real projective plane, where the cross-ratio becomes the fundamental invariant and the theorems of Desargues and Pappus acquire an algebraic meaning: they characterise when a projective plane can be coordinatised by a division ring or by a field.

The final part turns to solid geometry and to the algebra hiding inside geometric questions: the Euler characteristic V − E + F, the classification of the regular polytopes in every dimension, the Bolyai–Gerwien theorem on dissections of polygons, Dehn's solution of Hilbert's third problem, and the field-theoretic theory of straightedge-and-compass constructions culminating in the Gauss–Wantzel theorem.

In this course, you will:

  1. Read and use Hilbert's axioms for Euclidean geometry and understand its models and independence results
  2. Prove that every isometry of ℝ² is affine and classify all plane isometries
  3. Classify the finite symmetry groups of the plane and prove the crystallographic restriction
  4. Prove the Euler line, nine-point circle and Euler's inequality R ≥ 2r with exact computations
  5. Use signed ratios to prove Ceva, Menelaus and Routh's theorem
  6. Master power of a point, radical axes and inversion, and use inversion to prove classical theorems
  7. Work in the real projective plane with homogeneous coordinates, duality and cross-ratio
  8. Understand the theorems of Desargues and Pappus and their algebraic significance
  9. Prove Euler's formula V − E + F = 2 and Descartes' theorem on angular defect
  10. Classify the Platonic solids and the regular polytopes in all dimensions
  11. Prove the Bolyai–Gerwien theorem and solve Hilbert's third problem with the Dehn invariant
  12. Determine exactly which numbers and regular polygons are constructible with straightedge and compass

Prerequisites are a solid command of high-school geometry and trigonometry, linear algebra (matrices, determinants, orthogonal matrices), and elementary group theory and field theory (subgroups, cosets, field extensions and their degrees). Proofs are given in full unless explicitly labelled as sketches. Each lesson ends with exercises; their solutions follow immediately and should be consulted only after a serious attempt.

─────────────────────────────────
Lesson 1: Hilbert's Axioms and the Foundations of Geometry
─────────────────────────────────

📌 Key idea of this section:

        Euclidean plane geometry = incidence + order + congruence + continuity + parallels.
        Its models are exactly the Cartesian planes F² over suitable ordered fields F,
        and with full continuity the model is unique: ℝ².

Why Euclid needed repairing

Euclid's Elements (c. 300 BC) proves 465 propositions from five postulates and five common notions. Modern readers have found many hidden assumptions. In Proposition I.1, the construction of an equilateral triangle on a segment AB, two circles of radius AB centred at A and B are drawn and their intersection point C is used; nothing in Euclid's postulates guarantees that the circles meet. In several proofs Euclid uses the notion of a point lying "between" two others, or of a line entering a triangle and having to leave it, without any axiom governing betweenness. The superposition argument for SAS (Proposition I.4) moves one triangle onto another, but motion is not defined.

Moritz Pasch (1882) first axiomatised betweenness. Giuseppe Peano, Mario Pieri and others offered systems in the 1890s, and David Hilbert's Grundlagen der Geometrie (1899) gave the system that became standard. Hilbert's primitive notions are points, lines and planes, and the relations "lies on" (incidence), "between" (order) and "is congruent to" (for segments and for angles). Nothing is assumed about what these objects are. As Hilbert is said to have remarked, one must be able to say "tables, chairs and beer mugs" in place of "points, lines and planes".

The five groups of axioms

We restrict ourselves to plane geometry. The axioms fall into five groups.

Group I, incidence. (I1) For any two distinct points A, B there is exactly one line containing both. (I2) Every line contains at least two points. (I3) There exist three points not on a common line.

Group II, order. Betweenness is a ternary relation A∗B∗C ("B lies between A and C"). (II1) If A∗B∗C then A, B, C are distinct collinear points and C∗B∗A. (II2) For distinct points A, B there is a point C with A∗B∗C. (II3) Of three distinct collinear points, exactly one lies between the other two. (II4, Pasch's axiom) Let A, B, C be non-collinear and let ℓ be a line containing none of them. If ℓ passes through a point of the segment AB, then it also passes through a point of segment AC or of segment BC.

Group III, congruence. Congruence ≅ is a relation on segments and on angles. (III1) Given a segment AB and a ray from C, there is a unique point D on the ray with CD ≅ AB. (III2) Congruence of segments is transitive and reflexive. (III3) Segment addition: if A∗B∗C, A′∗B′∗C′, AB ≅ A′B′ and BC ≅ B′C′, then AC ≅ A′C′. (III4) Angle laying-off: a given angle can be laid off uniquely on a given side of a given ray. (III5) Congruence of angles is an equivalence relation. (III6, SAS) If AB ≅ A′B′, AC ≅ A′C′ and ∠BAC ≅ ∠B′A′C′, then ∠ABC ≅ ∠A′B′C′. From III6 Hilbert derives the full SAS criterion; thus SAS is an axiom, not a theorem, and this is unavoidable.

Group IV, parallels (Playfair's form). For every line ℓ and every point P not on ℓ there is at most one line through P that does not meet ℓ. Existence of at least one parallel follows from the other axioms by the alternate-angle construction.

Group V, continuity. (V1, Archimedes) For segments AB and CD there is a natural number n such that n copies of CD laid off from A along ray AB pass beyond B. (V2, completeness) The points of a line admit no proper extension preserving the previous axioms. Many modern treatments replace Group V with Dedekind's axiom: if the points of a line are split into two non-empty sets with no point of either set lying between two points of the other, there is a unique point separating them.

First consequences: plane separation

Pasch's axiom is the engine of the order theory. From it one proves the plane separation theorem: every line ℓ divides the points not on ℓ into exactly two non-empty half-planes, such that A and B lie in the same half-plane if and only if segment AB does not meet ℓ. From plane separation follows the crossbar theorem: if D lies in the interior of ∠BAC, then ray AD meets segment BC. This is precisely the fact used silently by Euclid whenever a line drawn from a vertex into a triangle is assumed to reach the opposite side.

The Cartesian model and the role of the field

Let F be an ordered field. On F² define lines as solution sets of ax + by = c with (a, b) ≠ (0, 0), betweenness via the order of F along a line, and congruence of segments by equality of the squared distance (x₁ − x₂)² + (y₁ − y₂)². Then Groups I, II, IV and the angle axioms III4–III5 hold over any ordered field. Segment laying-off (III1) holds exactly when the field is Pythagorean: √(1 + a²) ∈ F for every a ∈ F, since laying off a unit length along the direction (1, a) needs the coordinate 1/√(1 + a²). The smallest such subfield of ℝ is the Hilbert field Ω, obtained from ℚ by closing under the operations +, −, ×, ÷ and a ↦ √(1 + a²).

Conversely, every model of Groups I–IV is isomorphic to the Cartesian plane F² over some Pythagorean ordered field F; adding Archimedes forces F ⊆ ℝ, and adding completeness forces F = ℝ. In between sits a natural condition that Euclid really needed. The circle–circle intersection property says that if a circle passes through a point inside and a point outside another circle, the two circles meet. In F² this holds exactly when F is Euclidean: every positive element has a square root. The smallest Euclidean subfield of ℝ is the field of real constructible numbers, which reappears in Lesson 12. Since √2 ∉ ℚ, the line y = 0 and the circle x² + y² = 2 (centred at a rational point and passing through the rational point (1, 1)) do not meet in ℚ², even though the line passes through the centre; ℚ² therefore satisfies incidence and order but fails the intersection property.

Independence of the parallel postulate

An axiom is independent of the others if there is a model of the others in which it fails. The Beltrami–Klein model shows the independence of Playfair's axiom: take as points the interior of the unit disc in ℝ², as lines the open chords, with betweenness inherited from ℝ² and congruence defined by the Cayley–Klein metric d(P, Q) = ½ |ln (A, B; P, Q)|, where A, B are the endpoints of the chord through P, Q and (A, B; P, Q) is the cross-ratio of Lesson 8. All of Hilbert's axioms except Group IV hold, and through a point off a chord there pass infinitely many chords not meeting it. Hence the parallel postulate cannot be proved from the remaining axioms, a fact established by Beltrami (1868), completing the work of Lobachevsky (1829) and Bolyai (1832). Hilbert also proved relative consistency: any contradiction in Euclidean geometry would yield a contradiction in the arithmetic of ℝ.

Neutral geometry

The theorems that use only Groups I–III are called neutral or absolute geometry. They include the exterior angle theorem (an exterior angle exceeds each remote interior angle), the existence of parallels, and the Saccheri–Legendre theorem: in an Archimedean neutral plane the angle sum of every triangle is at most 180°. Equality for one triangle implies equality for all, and is equivalent to the parallel postulate. Lesson 9 will meet the spherical counterpart, where angle sums exceed 180° and the excess measures area.

✏️ Your Turn

(a) Show that the four points (0, 0), (1, 0), (0, 1), (1, 1) with the six two-point sets as "lines" satisfy axioms I1–I3, and decide whether Playfair's axiom holds in this model.
(b) In the Cartesian plane ℚ², find a circle with rational centre through a rational point and a line through its centre that do not meet.
(c) Euclid's Proposition I.1 needs the apex (1/2, √3/2) of the equilateral triangle on (0, 0) and (1, 0). Show that this point exists in the plane Ω² over the Hilbert field.

Answers: (a) Any two of the four points determine exactly one two-point line, each line has two points, and no three points are collinear because no line has three points, so I1–I3 hold. Given a line, say {(0,0), (1,0)}, and a point off it, say (0, 1), the lines through (0, 1) are {(0,1),(0,0)}, {(0,1),(1,0)} and {(0,1),(1,1)}; only the last misses the given line, so exactly one parallel exists and Playfair holds. This is the smallest affine plane, of order 2. (b) The circle x² + y² = 2 has centre (0, 0) and passes through (1, 1); the line y = 0 meets it only at x = ±√2, which is irrational. (c) √2 = √(1 + 1²) ∈ Ω, hence √3 = √(1 + (√2)²) ∈ Ω and √3/2 ∈ Ω. So the apex exists in Ω²; but the existence of such intersection points is a property of the field and must be argued from the axioms, not read off a diagram, which is exactly what Euclid omitted.

─────────────────────────────────
Lesson 2: Isometries of the Euclidean Plane
─────────────────────────────────

📌 Key idea of this section:

        Every isometry of ℝ² has the form x ↦ Ax + b with A ∈ O(2), b ∈ ℝ².
        E(2) = ℝ² ⋊ O(2), and the orientation-preserving isometries form SE(2) = ℝ² ⋊ SO(2).

Definitions and Klein's viewpoint

From now on we work in the model ℝ² with the Euclidean inner product ⟨x, y⟩ = x₁y₁ + x₂y₂ and norm |x| = √⟨x, x⟩. An isometry is a map T : ℝ² → ℝ² with |T(x) − T(y)| = |x − y| for all x, y. We do not assume T is surjective, linear, or even continuous; all of this will follow. In Felix Klein's Erlangen Program (1872), Euclidean geometry is the study of properties invariant under the group of isometries, affine geometry the study of invariants of the larger affine group, and projective geometry the study of invariants of the projective group. Lengths, angles and areas are Euclidean invariants; ratios of lengths along a line and parallelism are affine invariants; incidence and cross-ratio are projective invariants.

The structure theorem

Theorem 2.1. Let T be an isometry of ℝ². Then there are a unique orthogonal matrix A (AᵀA = I) and a unique vector b such that T(x) = Ax + b for all x.

Proof. Put b = T(0) and S(x) = T(x) − b. Then S is an isometry with S(0) = 0, so |S(x)| = |x| for all x. Polarisation gives ⟨S(x), S(y)⟩ = ½(|S(x)|² + |S(y)|² − |S(x) − S(y)|²) = ½(|x|² + |y|² − |x − y|²) = ⟨x, y⟩. Let e₁, e₂ be the standard basis; then f₁ = S(e₁), f₂ = S(e₂) form an orthonormal basis. For any x, the coordinates of S(x) in this basis are ⟨S(x), fᵢ⟩ = ⟨S(x), S(eᵢ)⟩ = ⟨x, eᵢ⟩ = xᵢ. Hence S(x) = x₁f₁ + x₂f₂ = Ax with A the matrix of columns f₁, f₂, which is orthogonal. Uniqueness: b = T(0), and then A is determined by its values on e₁, e₂. ∎

Corollary 2.2. Isometries are bijective, affine, and map lines to lines, circles to circles, and preserve angles; the set of isometries is a group E(2) under composition.

Corollary 2.3. An isometry is determined by the images of three non-collinear points. Indeed if T and T′ agree on non-collinear P, Q, R, then T′⁻¹T is an isometry fixing P, Q, R; any point X is determined by its distances to P, Q, R (two circles meet in at most two points, symmetric about line PQ, and the distance to R distinguishes them), so T′⁻¹T is the identity.

The group structure

The orthogonal group O(2) consists of the rotations:

        R_θ = [ cos θ   −sin θ ]       det R_θ = 1,
              [ sin θ    cos θ ]

and the reflections

        S_θ = [ cos 2θ    sin 2θ ]     det S_θ = −1,
              [ sin 2θ   −cos 2θ ]

where S_θ is the reflection in the line through 0 making angle θ with the x-axis. One checks the multiplication rules R_α R_β = R_{α+β}, S_α S_β = R_{2(α−β)}, R_α S_β = S_{β+α/2} and S_β R_α = S_{β−α/2}. The homomorphism E(2) → O(2), (x ↦ Ax + b) ↦ A, has kernel the translation group T ≅ ℝ², which is therefore normal, and the sequence 1 → ℝ² → E(2) → O(2) → 1 splits via A ↦ (x ↦ Ax). Hence E(2) ≅ ℝ² ⋊ O(2), with multiplication (b, A)(c, B) = (b + Ac, AB). Conjugating a translation τ_c by g = (b, A) gives g τ_c g⁻¹ = τ_{Ac}.

The determinant gives a homomorphism E(2) → {±1}; its kernel SE(2), the group of direct (orientation-preserving) isometries or proper motions, has index 2. The other coset consists of the opposite (orientation-reversing) isometries. As a manifold, E(2) has dimension 3 and two connected components.

Isometries and congruence

In Hilbert's synthetic setting, congruence is primitive. In the model, two figures are called congruent if some isometry maps one onto the other. The SAS axiom of Lesson 1 corresponds to the fact that an isometry is determined by three non-collinear points: given triangles with AB = A′B′, AC = A′C′ and equal included angles, there is an isometry with A ↦ A′, B ↦ B′, C ↦ C′, hence the triangles are congruent. Thus the axiom that Euclid tried to prove by superposition becomes, in the model, a theorem about the group E(2).

Similarities and the affine group

A similarity with ratio k > 0 satisfies |T(x) − T(y)| = k|x − y|; by the theorem applied to T/k, every similarity has the form x ↦ kAx + b with A ∈ O(2). Every similarity that is not an isometry has a unique fixed point: solving x = kAx + b requires I − kA to be invertible, which holds because the eigenvalues of kA have absolute value k ≠ 1. A direct similarity can be written in complex notation as z ↦ az + b with a ∈ ℂ \ {0}, and an opposite one as z ↦ a z̄ + b. Isometries correspond to |a| = 1.

✏️ Your Turn

(a) Find the direct isometry T with T(0, 0) = (1, 2) and T(1, 0) = (1, 3), and compute T(0, 1).
(b) Show that the map T(x, y) = (y + 1, x − 1) is an isometry, write it as x ↦ Ax + b, and decide whether it is direct or opposite.
(c) In complex notation, find the fixed point of the direct similarity z ↦ 2iz + 5.

Answers: (a) b = (1, 2) and A e₁ = (1, 3) − (1, 2) = (0, 1), so A = R_{90°} and A e₂ = (−1, 0). Hence T(0, 1) = (−1, 0) + (1, 2) = (0, 2). (b) A = [[0, 1], [1, 0]] and b = (1, −1); A is orthogonal with determinant −1, so T is opposite (in fact a reflection, see Lesson 3). (c) z = 2iz + 5 gives z(1 − 2i) = 5, so z = 5/(1 − 2i) = 5(1 + 2i)/5 = 1 + 2i.

─────────────────────────────────
Lesson 3: Classification of Plane Isometries
─────────────────────────────────

📌 Key idea of this section:

        Every isometry of the plane is one of: identity, translation, rotation,
        reflection, glide reflection — and is a product of at most three reflections.

Reflections generate the group

Theorem 3.1. Every isometry of ℝ² is the composition of at most three reflections.

Proof. Let T be an isometry. If T = id, it is the product of zero reflections. Otherwise pick a point P with T(P) ≠ P and let σ₁ be the reflection in the perpendicular bisector of P and T(P), so σ₁T fixes P. Now we have an isometry fixing a point. If it is not the identity, pick Q with σ₁T(Q) ≠ Q; since σ₁T(P) = P, the points Q and σ₁T(Q) are equidistant from P, so the perpendicular bisector of Q and σ₁T(Q) passes through P, and the reflection σ₂ in it fixes P; then σ₂σ₁T fixes P and Q, hence fixes every point of line PQ. If it is not yet the identity, it is a non-identity isometry fixing a line pointwise, and by Corollary 2.3 it must be the reflection σ₃ in that line (an isometry fixing PQ pointwise and some third non-collinear point is the identity; otherwise it agrees with the reflection on three non-collinear points). In all cases T is the product of at most three reflections. ∎

Products of two reflections

Let σ_ℓ denote the reflection in a line ℓ. If ℓ and m are parallel at distance d, then σ_m σ_ℓ is the translation by 2d in the direction perpendicular to the lines, from ℓ towards m. If ℓ and m meet at O with directed angle θ from ℓ to m, then σ_m σ_ℓ is the rotation about O through 2θ. This follows from S_β S_α = R_{2(β−α)}. Conversely, every translation and every rotation can be factored in infinitely many ways as a product of two reflections: for a rotation about O through φ one may take any line ℓ through O and let m be the line through O at angle φ/2 from ℓ. This freedom is the key computational tool.

Composition of rotations. Let ρ_A be rotation about A through α and ρ_B rotation about B through β, with A ≠ B. Let n = line AB, choose ℓ through A with ρ_A = σ_n σ_ℓ and m through B with ρ_B = σ_m σ_n. Then ρ_B ρ_A = σ_m σ_n σ_n σ_ℓ = σ_m σ_ℓ. If α + β is not a multiple of 2π, the lines ℓ and m meet at a point C and ρ_B ρ_A is the rotation about C through α + β; the triangle ABC has angles α/2 at A and β/2 at B. If α + β ≡ 0 (mod 2π), then ℓ ∥ m and the composite is a translation. In particular the composite of two half-turns about A and B is the translation by 2(B − A).

The classification

Theorem 3.2. Every isometry of ℝ² is exactly one of the following.

  1. The identity (fixes every point).
  2. A non-trivial translation x ↦ x + v, v ≠ 0 (no fixed point, direct).
  3. A non-trivial rotation about a point (exactly one fixed point, direct).
  4. A reflection in a line (fixes exactly a line, opposite).
  5. A glide reflection: a reflection in a line ℓ followed by a non-zero translation along ℓ (no fixed point, opposite).

Proof. Write T(x) = Ax + b. Suppose first det A = 1, so A = R_θ. If θ ≡ 0, T is a translation (or the identity). If θ ≢ 0, then I − A is invertible (its determinant is 2 − 2cos θ > 0), so T(x) = x has a unique solution c, and T(x) = A(x − c) + c is the rotation about c through θ. Now suppose det A = −1. Then A = S_α is the reflection in a line L₀ through 0 with unit direction u, and has eigenvalues 1 (eigenvector u) and −1 (eigenvector u⊥). Decompose b = su + tu⊥. Then T(x) = S_α x + tu⊥ + su. The map x ↦ S_α x + tu⊥ is the reflection in the line ℓ = L₀ + (t/2)u⊥, because it fixes that line pointwise and is opposite. Hence T is the reflection in ℓ followed by the translation su along ℓ; T is a reflection if s = 0 and a glide reflection if s ≠ 0. The five types are distinguished by orientation and fixed-point sets, so they are mutually exclusive. ∎

The proof gives an effective test. For an opposite isometry T(x) = Ax + b, with u a unit vector fixed by A, the glide component is s = ⟨b, u⟩; T is a reflection if and only if ⟨b, u⟩ = 0, equivalently if and only if T² = id, since T² is the translation by 2su.

Fixed points and conjugacy classes

Conjugation by g ∈ E(2) maps a rotation about c through θ to the rotation about g(c) through ±θ (with the sign − if g is opposite), a translation by v to the translation by Av, a reflection in ℓ to the reflection in g(ℓ), and a glide reflection with axis ℓ and glide length s to one with axis g(ℓ) and the same glide length. Thus the conjugacy classes of E(2) are: the identity; all translations of a given length; rotations through ±θ for fixed θ ∈ (0, π]; all reflections; and glide reflections with a given glide length. In SE(2) rotations through θ and −θ are not conjugate.

Complex form

Identify ℝ² with ℂ. Direct isometries are z ↦ e^{iθ}z + b and opposite ones are z ↦ e^{iθ}z̄ + b. The rotation about c through θ is z ↦ c + e^{iθ}(z − c). For an opposite isometry, T²(z) = e^{iθ}(e^{−iθ}z + b̄) + b = z + e^{iθ}b̄ + b, so T is a reflection iff e^{iθ}b̄ + b = 0, and otherwise a glide reflection with translation part (e^{iθ}b̄ + b)/2.

✏️ Your Turn

(a) Let σ₁ be the reflection in the x-axis and σ₂ the reflection in the line y = x. Identify σ₂σ₁.
(b) Let ρ₀ be the rotation through 90° about (0, 0) and ρ₁ the rotation through 90° about (1, 0). Identify ρ₁ρ₀ and find its fixed point.
(c) Classify T(x, y) = (−x + 4, y + 3) and T(x, y) = (y + 2, x + 3).

Answers: (a) σ₁(x, y) = (x, −y) and σ₂(x, y) = (y, x), so σ₂σ₁(x, y) = (−y, x): the rotation about the origin through +90°, twice the 45° angle from the x-axis to y = x. (b) ρ₀(x, y) = (−y, x) and ρ₁(x, y) = (1 − y, x − 1), so ρ₁ρ₀(x, y) = (1 − x, −y − 1). This is a half-turn (angles add to 180°); solving 1 − x = x and −y − 1 = y gives the centre (1/2, −1/2). (c) The first has A = diag(−1, 1), the reflection in the y-axis, with fixed direction u = (0, 1) and ⟨b, u⟩ = 3 ≠ 0: a glide reflection with axis x = 2 and glide vector (0, 3). The second has A the reflection in y = x, u = (1, 1)/√2, ⟨b, u⟩ = 5/√2 ≠ 0: a glide reflection; T²(x, y) = (x + 5, y + 5), so the glide vector is (5/2, 5/2), and the axis is y = x + 1/2.

─────────────────────────────────
Lesson 4: Symmetry Groups, Lattices and the Crystallographic Restriction
─────────────────────────────────

📌 Key idea of this section:

        Finite symmetry groups of the plane: cyclic Cₙ or dihedral Dₙ (Leonardo's theorem).
        A lattice can only have rotational symmetry of order 1, 2, 3, 4 or 6, since 2cos θ ∈ ℤ.
        There are 7 frieze groups and 17 wallpaper groups.

The symmetry group of a figure

For a subset X ⊆ ℝ², its symmetry group is Sym(X) = {g ∈ E(2) : g(X) = X}. The regular n-gon has the dihedral group Dₙ of order 2n, consisting of n rotations about the centre through multiples of 2π/n and n reflections. A pinwheel with n identical bent arms has only the cyclic group Cₙ of rotations. The question of which subgroups of E(2) can occur leads to a beautiful classification.

Leonardo's theorem

Theorem 4.1 (Leonardo da Vinci, Weyl). Every finite subgroup G of E(2) is conjugate to either the cyclic group Cₙ generated by R_{2π/n}, or the dihedral group Dₙ generated by R_{2π/n} and the reflection S₀ in the x-axis.

Proof. First, G has a fixed point. Let x be any point and let c = (1/|G|) ∑_{g ∈ G} g(x) be the centroid of its orbit. Since isometries are affine, they preserve centroids of finite sets (an affine map commutes with weighted averages whose weights sum to 1), so h(c) = (1/|G|) ∑ hg(x) = c for every h ∈ G, because g ↦ hg permutes G. Conjugating by the translation that moves c to 0, we may assume G ⊆ O(2). Let H = G ∩ SO(2), a finite group of rotations. If H is trivial, H = C₁. Otherwise let θ ∈ (0, 2π) be the least positive angle with R_θ ∈ H. For any R_φ ∈ H write φ = kθ + ψ with 0 ≤ ψ < θ; then R_ψ = R_φ R_θ^{−k} ∈ H, so ψ = 0 by minimality. Hence H is generated by R_θ, and since R_θ has finite order, θ = 2π/n for n = |H|, so H = Cₙ. If G = H we are done. Otherwise G contains a reflection σ, H has index 2 in G (it is the kernel of det restricted to G), and G = H ∪ σH. Conjugating by a rotation we can make σ the reflection in the x-axis, so G = Dₙ. ∎

The orbit-centroid argument is the simplest instance of a general principle: a compact group acting by affine maps on a convex set has a fixed point, obtained by averaging with respect to Haar measure.

Discrete groups and lattices

A subgroup G of E(2) is discrete if every orbit is a discrete set; equivalently, its translation subgroup T_G = G ∩ ℝ² is discrete and its point group (the image of G in O(2)) is finite. A discrete subgroup of ℝ² is 0, an infinite cyclic group ℤv, or a lattice ℤv ⊕ ℤw with v, w linearly independent. A frieze group is a discrete group whose translation subgroup is infinite cyclic; a wallpaper group, or plane crystallographic group, is one whose translation subgroup is a lattice.

Key observation. If g = (b, A) ∈ G and τ_v ∈ T_G, then g τ_v g⁻¹ = τ_{Av} ∈ T_G. So the point group preserves the lattice Λ = T_G.

Theorem 4.2 (crystallographic restriction). If a rotation R_θ maps a lattice Λ ⊂ ℝ² onto itself, then R_θ has order 1, 2, 3, 4 or 6.

Proof. In a basis v, w of Λ, the linear map R_θ has a matrix M with integer entries, since R_θ v and R_θ w lie in Λ = ℤv ⊕ ℤw. The trace is invariant under change of basis, so 2cos θ = tr R_θ = tr M ∈ ℤ. Since |2cos θ| ≤ 2, we get 2cos θ ∈ {−2, −1, 0, 1, 2}, i.e. θ ∈ {π, 2π/3, π/2, π/3, 0} up to sign, giving orders 2, 3, 4, 6, 1. ∎

In particular no periodic tiling of the plane has five-fold rotational symmetry: 2cos(2π/5) = (√5 − 1)/2 is irrational. The Penrose tilings (1974) have local five-fold symmetry but are aperiodic, and Dan Shechtman's discovery of icosahedral quasicrystals in 1982, recognised by the 2011 Nobel Prize in Chemistry, showed that nature also exploits order without periodicity. The same trace argument in dimension n shows that a finite-order integer matrix has eigenvalues that are roots of unity whose minimal polynomials have degree at most n; for n = 3 the allowed orders are again 1, 2, 3, 4, 6.

Frieze and wallpaper groups

Combining a point group with a compatible lattice, and taking into account glide reflections whose glide part is not a lattice vector, one obtains the classifications. Up to conjugacy by affine maps there are exactly 7 frieze groups and exactly 17 wallpaper groups. The wallpaper classification is due to Evgraf Fedorov (1891) and was rediscovered by George Pólya and Paul Niggli (1924). In crystallographic notation the 17 groups are p1, p2, pm, pg, cm, pmm, pmg, pgg, cmm, p4, p4m, p4g, p3, p3m1, p31m, p6, p6m. Their point groups are the ten groups C₁, C₂, C₃, C₄, C₆, D₁, D₂, D₃, D₄, D₆, exactly the cyclic and dihedral groups allowed by Theorem 4.2. In three dimensions there are 32 crystallographic point groups and 230 space groups (Fedorov and Schoenflies, 1891); if mirror-image pairs are identified the number is 219. Bieberbach's theorems (1910–1912) show in every dimension that the translations in a crystallographic group form a lattice of finite index and that there are only finitely many such groups up to affine conjugacy.

Orbifold notation

John Conway's orbifold notation encodes a wallpaper group by the quotient surface ℝ²/G. Each symbol has a cost: a rotation point of order n (written n) costs (n − 1)/n, a mirror ∗ costs 1, a corner of order n on a mirror costs (n − 1)/(2n), a glide × costs 1, and a handle costs 2. The magic theorem states that the plane groups are exactly the signatures of total cost 2; for example 632 (= p6) costs 5/6 + 2/3 + 1/2 = 2, and ∗442 (= p4m) costs 1 + 3/8 + 3/8 + 1/4 = 2. This is an Euler characteristic computation in disguise: the cost equals 2 − χ_orb.

✏️ Your Turn

(a) Find the order of the symmetry group of a regular hexagon and the number of its elements of order 2.
(b) Show that the matrix of a rotation through 90° in the lattice basis v = (1, 0), w = (0, 1) has trace 0, and find the matrix of the rotation through 60° in the basis v = (1, 0), w = (1/2, √3/2) of the hexagonal lattice.
(c) Verify the magic theorem for the signatures 333 and 2222.

Answers: (a) D₆ has order 12. Its elements of order 2 are the six reflections and the half-turn, so 7 in total. (b) R_{90°} sends v ↦ w and w ↦ −v, matrix [[0, −1], [1, 0]] with trace 0 = 2cos 90°. R_{60°} sends v ↦ w and w ↦ (−1/2, √3/2) = w − v, so its matrix (columns are images) is [[0, −1], [1, 1]], with trace 1 = 2cos 60°. (c) 333 costs 3 · 2/3 = 2 and 2222 costs 4 · 1/2 = 2; these are p3 and p2.

─────────────────────────────────
Lesson 5: Triangle Centres, the Euler Line and the Nine-Point Circle
─────────────────────────────────

📌 Key idea of this section:

        With the circumcentre O as origin: H = A + B + C, G = H/3, N = H/2.
        OH² = 9R² − (a² + b² + c²),   OI² = R² − 2Rr,   NI = R/2 − r.

Notation

Throughout, ABC is a triangle with side lengths a = BC, b = CA, c = AB, semiperimeter s = (a + b + c)/2, area K, circumradius R and inradius r. Classical formulas: K = √(s(s − a)(s − b)(s − c)) (Heron), K = rs, K = abc/(4R), and the law of sines a = 2R sin A. The four classical centres are the centroid G (medians), the circumcentre O (perpendicular bisectors), the incentre I (internal angle bisectors) and the orthocentre H (altitudes). In barycentric coordinates G = (1 : 1 : 1), I = (a : b : c), O = (sin 2A : sin 2B : sin 2C) and H = (tan A : tan B : tan C), the last for non-right triangles. Clark Kimberling's Encyclopedia of Triangle Centers now catalogues tens of thousands of such points.

The Euler line

Theorem 5.1 (Euler, 1765). The points O, G, H are collinear, with G between O and H and OG : GH = 1 : 2 (for a non-equilateral triangle).

Proof. Place the origin at O, so that A, B, C are vectors of length R. Define H′ = A + B + C. Then (H′ − A) · (B − C) = (B + C) · (B − C) = |B|² − |C|² = 0, so H′ lies on the altitude from A, and by symmetry on all three altitudes. Hence H′ = H, the altitudes are concurrent (which this argument proves), and G = (A + B + C)/3 = H/3. Thus G lies on segment OH with OG = OH/3. In an equilateral triangle the three points coincide. ∎

Corollary 5.2. OH² = 9R² − (a² + b² + c²). Indeed c² = |A − B|² = 2R² − 2A · B, so A · B = R² − c²/2 and |A + B + C|² = 3R² + 2(A · B + B · C + C · A) = 3R² + 6R² − (a² + b² + c²). Since OH² ≥ 0 we get a² + b² + c² ≤ 9R², with equality only for the equilateral triangle.

The nine-point circle

Theorem 5.3 (Poncelet, Brianchon 1821; Feuerbach 1822). The midpoints of the sides, the feet of the altitudes, and the midpoints of AH, BH, CH lie on one circle, with centre N = (O + H)/2 and radius R/2.

Proof. With O as origin, N = (A + B + C)/2. The midpoint of BC is M_a = (B + C)/2 and N − M_a = A/2, of length R/2. The midpoint of AH is K_a = (A + H)/2 = A + (B + C)/2, and K_a − N = A/2, of length R/2. So M_a and K_a lie on the circle Γ with centre N and radius R/2, and N is the midpoint of M_aK_a; that is, M_aK_a is a diameter of Γ. Let D be the foot of the altitude from A. Then D lies on BC, K_a lies on AD, and AD ⊥ BC, so ∠M_aDK_a = 90° (or D = M_a). By Thales' theorem D lies on the circle with diameter M_aK_a, which is Γ. The same argument applies at B and C. ∎

The nine-point circle is the image of the circumcircle under the homothety with centre G and ratio −1/2 (which maps A, B, C to the midpoints of the opposite sides), and also under the homothety with centre H and ratio 1/2 (which maps the circumcircle to a circle through K_a, K_b, K_c). Both centres of similitude, G and H, lie on the Euler line.

Euler's relation for the incentre

Lemma 5.4 (incentre–excentre lemma). Let the bisector AI meet the circumcircle again at M. Then MB = MC = MI.

Proof. M is the midpoint of arc BC not containing A, so MB = MC. By inscribed angles, ∠MBC = ∠MAC = A/2, so ∠MBI = A/2 + B/2. The angle ∠MIB is an exterior angle of triangle ABI, so ∠MIB = ∠IAB + ∠IBA = A/2 + B/2. Triangle MBI is therefore isosceles with MB = MI. ∎

Theorem 5.5 (Euler 1765, already known to Chapple 1746). OI² = R² − 2Rr. In particular R ≥ 2r, with equality only for the equilateral triangle.

Proof. The power of I with respect to the circumcircle is OI² − R² = −AI · IM (I lies inside, on chord AM). Now AI = r/sin(A/2), from the right triangle formed by A, I and the point where the incircle touches AB. By Lemma 5.4 and the law of sines in triangle ABM, IM = MB = 2R sin(A/2), since MB subtends the angle A/2 at A. Hence AI · IM = 2Rr and OI² = R² − 2Rr. ∎

Feuerbach's theorem. The nine-point circle is internally tangent to the incircle and externally tangent to the three excircles. Equivalently NI = R/2 − r and N I_a = R/2 + r_a. A metric proof expresses NI² through the barycentric distance formula and finds NI² = (R/2 − r)²; a synthetic proof by inversion appears in Lesson 7. The point of tangency with the incircle is the Feuerbach point X(11).

A worked example: the 13–14–15 triangle

Take B = (0, 0), C = (14, 0), A = (5, 12), so c = 13, a = 14, b = 15, s = 21 and K = 84 (base 14, height 12). Then r = K/s = 4 and R = abc/(4K) = 2730/336 = 65/8.

        G = ((0 + 14 + 5)/3, (0 + 0 + 12)/3) = (19/3, 4)
        O = (7, 33/8)       since 7² + y² = 2² + (12 − y)² gives y = 99/24 = 33/8
        H = A + B + C − 2O = (19, 12) − (14, 33/4) = (5, 15/4)
        I = (aA + bB + cC)/(a + b + c) = (14·(5, 12) + 13·(14, 0))/42 = (6, 4)
        N = (O + H)/2 = (6, 63/16)

Checks: H lies on the altitude x = 5 from A. OH² = 2² + (3/8)² = 265/64, and 9R² − (a² + b² + c²) = 38025/64 − 590 = 265/64. OI² = 1² + (1/8)² = 65/64, and R² − 2Rr = 4225/64 − 65 = 65/64. Finally NI = 4 − 63/16 = 1/16 and R/2 − r = 65/16 − 4 = 1/16, confirming Feuerbach's tangency in this case.

✏️ Your Turn

Let ABC be the isosceles triangle with B = (−3, 0), C = (3, 0), A = (0, 4).

(a) Compute R, r, and the coordinates of O, H and I.
(b) Verify OH² = 9R² − (a² + b² + c²) and OI² = R² − 2Rr.
(c) Compute NI and compare with R/2 − r.

Answers: (a) Sides are 5, 5, 6, s = 8, K = 12, so r = 12/8 = 3/2 and R = 150/48 = 25/8. O = (0, 7/8), from 9 + y² = (4 − y)²; H = A + B + C − 2O = (0, 4 − 7/4) = (0, 9/4); I = (0, 3/2). (b) OH = 9/4 − 7/8 = 11/8, so OH² = 121/64, while 9R² − 86 = 5625/64 − 5504/64 = 121/64. OI = 3/2 − 7/8 = 5/8, so OI² = 25/64 = 625/64 − 600/64 = R² − 2Rr. (c) N = (0, 25/16) and NI = 25/16 − 24/16 = 1/16 = R/2 − r.

─────────────────────────────────
Lesson 6: Ceva, Menelaus and Routh
─────────────────────────────────

📌 Key idea of this section:

        D ∈ BC, E ∈ CA, F ∈ AB, with signed ratios:
        AD, BE, CF concurrent (or parallel)  ⇔  (BD/DC)(CE/EA)(AF/FB) = +1      (Ceva)
        D, E, F collinear                    ⇔  (BD/DC)(CE/EA)(AF/FB) = −1      (Menelaus)

Signed ratios

For distinct collinear points X, Z and a point Y on line XZ, the signed ratio XY/YZ is the real number λ with Y − X = λ(Z − Y); it is positive when Y lies between X and Z and negative otherwise, and every real value except −1 occurs exactly once (λ = −1 would correspond to the point at infinity). Signed ratios are affine invariants, so the theorems of this lesson belong to affine geometry: they survive any affine transformation, which permits one to assume, for instance, that the triangle is equilateral.

Menelaus's theorem

Theorem 6.1 (Menelaus of Alexandria, c. 100 AD). Let D, E, F lie on the lines BC, CA, AB respectively, distinct from the vertices. Then D, E, F are collinear if and only if (BD/DC)(CE/EA)(AF/FB) = −1.

Proof. Suppose D, E, F lie on a line ℓ. Let h_A, h_B, h_C be the signed distances of A, B, C from ℓ (non-zero, since no vertex lies on ℓ). The signed distance from ℓ is an affine function, so parametrising D = B + t(C − B) gives h_B + t(h_C − h_B) = 0, whence BD/DC = t/(1 − t) = −h_B/h_C. Similarly CE/EA = −h_C/h_A and AF/FB = −h_A/h_B, and the product is (−1)³ = −1. Conversely, suppose the product is −1. If EF ∥ BC, then by similar triangles (CE/EA)(AF/FB) = 1, which would force BD/DC = −1, impossible. So line EF meets line BC at a point D′, and by the forward direction BD′/D′C = BD/DC. Since a signed ratio determines the point, D′ = D. ∎

Ceva's theorem

Theorem 6.2 (Giovanni Ceva, 1678; known to al-Mu'taman ibn Hud in the 11th century). With D, E, F as above, the lines AD, BE, CF are concurrent or all parallel if and only if (BD/DC)(CE/EA)(AF/FB) = 1.

Proof of necessity for concurrent lines. Let the lines meet at P. Apply Menelaus to triangle ABD with the transversal through F, P, C (F on AB, C on line BD, P on DA): (AF/FB)(BC/CD)(DP/PA) = −1. Apply Menelaus to triangle ADC with the transversal through B, P, E (P on AD, B on line DC, E on CA): (AP/PD)(DB/BC)(CE/EA) = −1. Multiply the two equations. The ratios DP/PA and AP/PD are reciprocal, so their product is 1, and a short computation with coordinates B = 0, C = 1, D = d on the line gives (BC/CD)(DB/BC) = (1/(d − 1))(−d) = d/(1 − d) = BD/DC. Hence we obtain (AF/FB)(BD/DC)(CE/EA) = 1. The parallel case follows by a similar-triangle computation, and the converse by the uniqueness of the point with a given ratio, exactly as for Menelaus. ∎

There is also a trigonometric form: cevians AD, BE, CF from the vertices are concurrent if and only if (sin ∠BAD / sin ∠DAC)(sin ∠CBE / sin ∠EBA)(sin ∠ACF / sin ∠FCB) = 1. It follows from the law of sines, since BD/DC = (AB sin ∠BAD)/(AC sin ∠DAC).

Applications

Medians: each ratio is 1, so they concur (at G). Internal angle bisectors: by the angle bisector theorem BD/DC = c/b, CE/EA = a/c, AF/FB = b/a, with product 1, so they concur (at I). Altitudes of an acute triangle: BD = c cos B, DC = b cos C, etc., and the product (c cos B / b cos C)(a cos C / c cos A)(b cos A / a cos B) = 1. Gergonne point: if the incircle touches the sides at D, E, F then BD = BF = s − b, CD = CE = s − c, AE = AF = s − a, so the product is ((s − b)/(s − c))((s − c)/(s − a))((s − a)/(s − b)) = 1. Nagel point: the excircle touch points give BD = s − c, DC = s − b, and similarly, again with product 1. Isotomic and isogonal conjugation, which send a point with cevian ratios (x, y, z) to the point with ratios (1/x, 1/y, 1/z), or reflect cevians in the angle bisectors, preserve Ceva's condition; for instance the isogonal conjugate of H is O and that of G is the symmedian point K.

Routh's theorem

Theorem 6.3 (Routh, 1896). Let BD/DC = x, CE/EA = y, AF/FB = z with x, y, z > 0. The cevians AD, BE, CF bound a triangle whose area, as a fraction of the area of ABC, is

        (xyz − 1)² / ((xy + x + 1)(yz + y + 1)(zx + z + 1)).

Proof. Use barycentric coordinates with respect to ABC, in which the area of a triangle with normalised coordinate rows is |det| times the area of ABC. Since D = (B + xC)/(1 + x), D = (0 : 1 : x); likewise E = (y : 0 : 1) and F = (1 : z : 0). A point on line AD has the form (s : 1 : x) and a point on BE the form (y : t : 1); they coincide for (xy : 1 : x). By cyclic symmetry the three vertices of the inner triangle are

        P = (xy : 1 : x),   Q = (y : yz : 1),   R = (1 : z : zx),

with coordinate sums xy + x + 1, yz + y + 1, zx + z + 1. Expanding along the first row, det [[xy, 1, x], [y, yz, 1], [1, z, zx]] = xy(xyz² − z) − (xyz − 1) + x(yz − yz) = (xyz − 1)². Dividing by the three coordinate sums gives the formula. ∎

For x = y = z = 1 the area is 0 (the medians concur), consistent with Ceva. For x = y = z = 2 the area ratio is 7²/7³ = 1/7, the famous one-seventh triangle. In general for x = y = z = k the ratio is (k³ − 1)²/(k² + k + 1)³ = (k − 1)²/(k² + k + 1).

✏️ Your Turn

(a) In triangle ABC, D lies on BC with BD/DC = 2 and E on CA with CE/EA = 3. Find AF/FB so that AD, BE, CF are concurrent.
(b) A line meets BC at D with BD/DC = −3 (so D lies outside segment BC) and meets CA at E with CE/EA = 1/2. Find the signed ratio AF/FB where it meets AB.
(c) Compute the Routh area ratio for x = y = z = 3, and for x = 2, y = 3, z = 4.

Answers: (a) AF/FB = 1/(2 · 3) = 1/6. (b) AF/FB = −1/((−3)(1/2)) = 2/3, so F lies inside segment AB. (c) For k = 3: (3 − 1)²/(9 + 3 + 1) = 4/13. For (2, 3, 4): xyz − 1 = 23, and the factors are xy + x + 1 = 9, yz + y + 1 = 16, zx + z + 1 = 13, so the ratio is 529/1872.

─────────────────────────────────
Lesson 7: Power of a Point, Radical Axes and Inversion
─────────────────────────────────

📌 Key idea of this section:

        pow(P, ω) = |PO|² − r² = PA · PB  for every line through P meeting ω at A, B.
        Inversion P ↦ P*, |OP| · |OP*| = k²: circles and lines ↔ circles and lines, angles preserved,
        |P*Q*| = k² |PQ| / (|OP| |OQ|).

Power of a point

Let ω be a circle with centre O and radius r. The power of a point P is pow(P, ω) = |PO|² − r². It is positive outside ω, zero on ω, negative inside.

Theorem 7.1. If a line through P meets ω at A and B, then PA · PB = pow(P, ω), where PA · PB is the signed product (positive if P is outside the segment AB). If P is outside, the tangent length t satisfies t² = pow(P, ω).

Proof. Parametrise the line as P + λu with |u| = 1. The intersection parameters satisfy |P − O + λu|² = r², a quadratic λ² + 2λ⟨P − O, u⟩ + (|P − O|² − r²) = 0. By Vieta the product of the roots, which is PA · PB in signed form, equals |PO|² − r², independently of u. For a tangent the two roots coincide and the product is t². ∎

This single statement contains the intersecting chords theorem, the secant–secant theorem and the tangent–secant theorem of the elementary course.

Radical axis and radical centre

For two non-concentric circles ω₁, ω₂ the locus {P : pow(P, ω₁) = pow(P, ω₂)} is a line perpendicular to the line of centres, the radical axis. With centres (0, 0) and (d, 0) and radii r₁, r₂, the condition x² + y² − r₁² = (x − d)² + y² − r₂² reduces to

        x = (d² + r₁² − r₂²) / (2d).

If the circles meet, the radical axis is their common chord line; if they are tangent, it is the common tangent. For three circles with non-collinear centres the three radical axes are concurrent at the radical centre, because a point with equal power with respect to ω₁, ω₂ and ω₂, ω₃ has equal power with respect to ω₁, ω₃. The set of circles orthogonal to two given circles, and the pencil of circles sharing a radical axis, form the coaxal systems of classical geometry.

Inversion

Fix a circle ω with centre O and radius k. Inversion in ω is the map ι : ℝ² \ {O} → ℝ² \ {O} sending P to the point P* on ray OP with |OP| · |OP*| = k², that is, P* = O + k²(P − O)/|P − O|². It is an involution fixing ω pointwise and exchanging the inside and the outside. In complex notation, with O = 0, ι(z) = k²/z̄. Extending by O ↔ ∞ makes ι a bijection of the extended plane ℝ² ∪ {∞}.

Lemma 7.2 (distance formula). For P, Q ≠ O, the triangles OPQ and OQ*P* are similar, and |P*Q*| = k² |PQ| / (|OP| |OQ|).

Proof. |OP|/|OQ| = |OQ*|/|OP*|, since both products |OP||OP*| and |OQ||OQ*| equal k², and the angle at O is common. By SAS similarity, triangle OPQ is similar to triangle OQ*P* with ratio |OQ*|/|OP| = k²/(|OP||OQ|). ∎

Theorem 7.3. Inversion maps (i) lines through O to themselves; (ii) lines not through O to circles through O, and conversely; (iii) circles not through O to circles not through O. It preserves the magnitude of angles between curves and reverses orientation (it is anticonformal).

Proof. (i) is clear. For (ii), let ℓ be a line not through O, F the foot of the perpendicular from O to ℓ, and X any point of ℓ. By Lemma 7.2 (or directly by similar triangles), triangle OFX is similar to triangle OX*F*, so ∠OX*F* = ∠OFX = 90°. Hence X* lies on the circle with diameter OF*. Conversely every point of that circle other than O arises. For (iii), write the circle as |x|² − 2⟨x, c⟩ + (|c|² − ρ²) = 0 with p = |c|² − ρ² ≠ 0 the power of O. Substituting x = k²y/|y|² gives k⁴/|y|² − 2k²⟨y, c⟩/|y|² + p = 0, and multiplying by |y|²/p gives |y|² − 2(k²/p)⟨y, c⟩ + k⁴/p = 0, again a circle, with centre k²c/p and radius k²ρ/|p|. Conformality follows because ι is smooth with derivative at x equal to (k²/|x|²) times a reflection, in fact the reflection in the line perpendicular to x. ∎

Inversion sends a circle orthogonal to ω to itself; this is the basis of the Poincaré disc model, where reflections in hyperbolic lines are inversions in circles orthogonal to the boundary. The group generated by inversions and reflections is the Möbius group of the extended plane, isomorphic to PGL(2, ℂ) extended by complex conjugation.

Ptolemy's inequality

Theorem 7.4. For any four points A, B, C, D in the plane, AB · CD + BC · DA ≥ AC · BD, with equality if and only if A, B, C, D lie in this order on a circle (or on a line).

Proof. Invert with centre A and radius 1. By Lemma 7.2, B*C* = BC/(AB · AC), C*D* = CD/(AC · AD) and B*D* = BD/(AB · AD). The triangle inequality B*C* + C*D* ≥ B*D*, multiplied by AB · AC · AD, gives BC · AD + CD · AB ≥ BD · AC. Equality holds iff C* lies on segment B*D*, i.e. iff B*, C*, D* are collinear in that order, i.e. iff B, C, D lie on a circle through A with C on the arc BD not containing A. ∎

Feuerbach's theorem by inversion (sketch)

Let the incircle and the A-excircle touch BC at X and X′. One checks BX = s − b and BX′ = s − c, so the midpoint M_a of BC is also the midpoint of XX′ and M_aX = |b − c|/2. Invert in the circle with centre M_a and radius |b − c|/2. This circle is orthogonal to the incircle and to the A-excircle (the tangent length from M_a to each equals the radius), so both are mapped to themselves. The nine-point circle passes through M_a, so it is mapped to a line; a calculation with Lemma 7.2 identifies this line as the reflection of BC in the bisector AI, which is the fourth common tangent of the incircle and the excircle. A line tangent to both circles inverts back to a circle tangent to both, proving that the nine-point circle touches the incircle and the A-excircle; by symmetry it touches all three excircles.

✏️ Your Turn

(a) Invert the point (3, 4) in the unit circle.
(b) Find the radical axis of x² + y² = 9 and (x − 8)² + y² = 49.
(c) Find the image of the circle (x − 5)² + y² = 9 under inversion in x² + y² = 4.

Answers: (a) |P|² = 25, so P* = (3, 4)/25 = (3/25, 4/25). (b) x = (64 + 9 − 49)/16 = 24/16 = 3/2. (c) Here k² = 4, c = (5, 0), ρ = 3, p = 25 − 9 = 16, so the image has centre 4 · (5, 0)/16 = (5/4, 0) and radius 4 · 3/16 = 3/4. Check: the diameter endpoints (2, 0) and (8, 0) go to (2, 0) and (1/2, 0), whose midpoint is (5/4, 0) and half-distance 3/4.

─────────────────────────────────
Lesson 8: Projective Geometry, Cross-Ratio, Desargues and Pappus
─────────────────────────────────

📌 Key idea of this section:

        ℝP² = lines through 0 in ℝ³; points [x : y : z], lines ax + by + cz = 0.
        Cross-ratio (A, B; C, D) = (c − a)(d − b) / ((c − b)(d − a)) is invariant under projection.
        Desargues ⇔ coordinates in a division ring;  Pappus ⇔ coordinates in a field.

The projective plane

The real projective plane ℝP² is the set of one-dimensional subspaces of ℝ³. A point is written in homogeneous coordinates [x : y : z], meaning the line through (x, y, z) ≠ 0, so that [x : y : z] = [λx : λy : λz] for λ ≠ 0. Lines of ℝP² are the two-dimensional subspaces, given by equations ax + by + cz = 0 and themselves described by homogeneous coordinates [a : b : c]. The affine plane ℝ² embeds as the chart z ≠ 0 via (x, y) ↦ [x : y : 1]; the remaining points [x : y : 0] form the line at infinity, one point for each direction in the plane. Two parallel affine lines meet at the point at infinity of their common direction, so in ℝP² any two distinct lines meet in exactly one point.

Incidence computations become linear algebra. The line through points p, q is p × q (the cross product), the intersection of lines ℓ, m is ℓ × m, and three points are collinear iff the determinant of their coordinate vectors vanishes. Points and lines play symmetric roles: the principle of duality states that from every theorem about incidences one obtains another by exchanging "point" and "line", "lies on" and "passes through". An abstract projective plane is an incidence structure in which any two points lie on a unique line, any two lines meet in a unique point, and there are four points no three collinear. The smallest is the Fano plane of 7 points and 7 lines, the plane PG(2, 2) over the field with two elements; in general PG(2, q) has q² + q + 1 points, q + 1 on each line.

Projective transformations

An invertible 3 × 3 matrix M induces a bijection [v] ↦ [Mv] of ℝP² mapping lines to lines; M and λM give the same map, so the projective group is PGL(3, ℝ) = GL(3, ℝ)/ℝ*, of dimension 8. The fundamental theorem of projective geometry (in its simplest form) says that for any two ordered quadruples of points in general position (no three collinear) there is a unique projective transformation taking one to the other. On a line, PGL(2, ℝ) acts on ℝP¹ = ℝ ∪ {∞} by Möbius maps x ↦ (αx + β)/(γx + δ), αδ − βγ ≠ 0, and is sharply 3-transitive. A central projection from one line to another through a point not on either (a perspectivity) is such a map. Affine maps are exactly the projective transformations preserving the line at infinity.

The cross-ratio

For four distinct points of ℝP¹ with affine coordinates a, b, c, d define:

        (A, B; C, D) = ((c − a)(d − b)) / ((c − b)(d − a)),

with the obvious limits when one point is ∞; for instance (A, B; C, ∞) = (c − a)/(c − b).

Theorem 8.1. The cross-ratio is invariant under every projective transformation of the line, and hence under perspectivities between lines.

Proof. For g(x) = (αx + β)/(γx + δ) a direct computation gives g(x) − g(y) = (αδ − βγ)(x − y)/((γx + δ)(γy + δ)). In the cross-ratio of g(a), g(b), g(c), g(d), the numerator contains the factors (γc + δ)(γa + δ)(γd + δ)(γb + δ) in its denominator, and the denominator of the cross-ratio contains (γc + δ)(γb + δ)(γd + δ)(γa + δ); these cancel, as does the factor (αδ − βγ)², leaving the original cross-ratio. ∎

Conversely, since PGL(2, ℝ) is sharply 3-transitive, three points and a value of the cross-ratio determine the fourth point: the projective map x ↦ ((x − a)(c − b))/((x − b)(c − a)) sends A ↦ 0, B ↦ ∞, C ↦ 1 and D ↦ 1/(A, B; C, D). Permuting the four points changes the cross-ratio λ through the six values λ, 1/λ, 1 − λ, 1/(1 − λ), (λ − 1)/λ, λ/(λ − 1), an action of S₄ with kernel the Klein four-group.

Four points are in harmonic position if (A, B; C, D) = −1; then D is the harmonic conjugate of C with respect to A, B. The midpoint of AB and the point at infinity are harmonic conjugates: (A, B; M, ∞) = (m − a)/(m − b) = −1. Harmonic conjugates can be constructed with a straightedge alone, using a complete quadrilateral, and the harmonic relation is preserved by projection. In the Cayley–Klein model of Lesson 1, the hyperbolic distance is defined through the cross-ratio with the endpoints of a chord, which is why it is invariant under the projective maps preserving the disc.

Desargues's theorem

Theorem 8.2 (Desargues, c. 1639). Let ABC and A′B′C′ be triangles in ℝP² such that the lines AA′, BB′, CC′ pass through a common point O (the triangles are perspective from O). Then the three points AB ∩ A′B′, BC ∩ B′C′, CA ∩ C′A′ are collinear (the triangles are perspective from a line).

Proof. Let a, b, c, a′, b′, c′, o ∈ ℝ³ be coordinate vectors. Since O, A, A′ are collinear and distinct, o is a linear combination of a and a′; rescaling the representatives a and a′ we may write o = a − a′, and likewise o = b − b′ = c − c′. Then a − b = a′ − b′. The vector a − b represents a point on line AB, and a′ − b′ a point on line A′B′, so this common vector represents AB ∩ A′B′. Similarly b − c represents BC ∩ B′C′ and c − a represents CA ∩ C′A′. But (a − b) + (b − c) + (c − a) = 0, so the three vectors are linearly dependent and the three points are collinear. ∎

The converse is the dual statement and therefore also true. Desargues's theorem in the plane can also be proved by lifting to space: if the triangles lie in different planes of ℝ³, the three intersection points lie on the line where the two planes meet, and the planar case is obtained by projection. This explains a remarkable fact discovered by Hilbert: every projective plane that embeds in a projective space of dimension at least 3 satisfies Desargues's theorem, but there are planes, such as the Moulton plane (1902), in which it fails.

Pappus's theorem

Theorem 8.3 (Pappus of Alexandria, c. 340 AD). Let A, B, C be distinct points on a line ℓ and A′, B′, C′ distinct points on another line m, none of them equal to ℓ ∩ m. Then the points AB′ ∩ A′B, AC′ ∩ A′C and BC′ ∩ B′C are collinear.

Proof. By a projective transformation we may assume that ℓ and m are the affine x-axis and y-axis. Write A = (a, 0), B = (b, 0), C = (c, 0), A′ = (0, a′), B′ = (0, b′), C′ = (0, c′), all coordinates non-zero, and put α = 1/a, β = 1/b, γ = 1/c and α′ = 1/a′, β′ = 1/b′, γ′ = 1/c′. The line AB′ is αx + β′y = 1 and A′B is βx + α′y = 1. Their intersection is

        AB′ ∩ A′B = [α′ − β′ : α − β : αα′ − ββ′],

as one verifies by substitution: α(α′ − β′) + β′(α − β) = αα′ − ββ′ and β(α′ − β′) + α′(α − β) = αα′ − ββ′. Let v₁ = (α′, α, αα′), v₂ = (β′, β, ββ′), v₃ = (γ′, γ, γγ′). The computation shows that the three Pappus points are represented by v₁ − v₂, v₁ − v₃ and v₂ − v₃. Since (v₁ − v₂) − (v₁ − v₃) + (v₂ − v₃) = 0, they are collinear. ∎

Notice where commutativity was used: the identity α(α′ − β′) + β′(α − β) = αα′ − ββ′ needs αβ′ = β′α. Pappus's theorem is the projective incarnation of the commutative law. Pascal's theorem (1640) generalises it from a pair of lines (a degenerate conic) to any conic: the three intersection points of opposite sides of a hexagon inscribed in a conic are collinear. Its dual is Brianchon's theorem (1806).

Coordinatisation

Hilbert showed that an abstract projective plane satisfies Desargues's theorem if and only if it is isomorphic to the plane P²(D) over a division ring D (a skew field), and that it satisfies Pappus's theorem if and only if D is commutative, that is, a field. The proof constructs addition and multiplication of points on a line by geometric constructions and uses Desargues to prove associativity and distributivity. Hessenberg (1905) proved that Pappus implies Desargues. By Wedderburn's theorem (1905), every finite division ring is a field; consequently every finite Desarguesian plane is Pappian, a purely geometric statement with no known purely geometric proof. The quaternions ℍ give a Desarguesian non-Pappian plane P²(ℍ), and the octonions give the Moufang plane, in which Desargues fails but the weaker little Desargues theorem holds.

✏️ Your Turn

(a) Compute the cross-ratio (A, B; C, D) of the points with coordinates 0, 1, 2, 3.
(b) With A = 0 and B = 6, find the harmonic conjugate D of C = 2.
(c) Find the intersection point of the lines x + 2y − 3z = 0 and 2x − y + z = 0 in ℝP², and interpret it in the affine chart z = 1.

Answers: (a) ((2 − 0)(3 − 1))/((2 − 1)(3 − 0)) = 4/3. (b) We need ((2 − 0)(d − 6))/((2 − 6)(d − 0)) = −1, i.e. 2(d − 6) = 4d, so d = −6. Check: (2 · (−12))/((−4)(−6)) = −24/24 = −1. (c) The cross product (1, 2, −3) × (2, −1, 1) = (2·1 − (−3)(−1), (−3)·2 − 1·1, 1·(−1) − 2·2) = (−1, −7, −5), so the point is [1 : 7 : 5], the affine point (1/5, 7/5). Check: 1/5 + 14/5 − 3 = 0 and 2/5 − 7/5 + 1 = 0.

─────────────────────────────────
Lesson 9: The Euler Characteristic and Angular Defect
─────────────────────────────────

📌 Key idea of this section:

        For every convex polyhedron:  V − E + F = 2.
        The total angular defect ∑ (2π − angles at v) equals 4π = 2π · χ.
        A spherical triangle with angles α, β, γ on the unit sphere has area α + β + γ − π.

History

Descartes, in a manuscript from about 1630 known only through a copy made by Leibniz, observed that the total angular defect of a convex polyhedron is 4π (eight right angles). Euler stated V − E + F = 2 in a letter to Goldbach in 1750 and published an incomplete proof in 1758. Legendre gave the first correct proof in 1794 using spherical geometry, and Cauchy (1813) gave a combinatorial proof by flattening the polyhedron into a planar graph. Imre Lakatos's Proofs and Refutations (1976) dramatises the long history of counterexamples, such as the "picture frame" with V − E + F = 0, which forced mathematicians to say exactly which polyhedra the theorem covers. The modern view, due to Poincaré, is that χ = V − E + F is a topological invariant of the surface of the polyhedron, independent of the subdivision.

Spherical area: Girard's theorem

On the unit sphere S² (area 4π), a lune of angle θ, the region between two great semicircles meeting at angle θ, has area 2θ, being the fraction θ/(2π) of the sphere.

Theorem 9.1 (Harriot 1603, Girard 1629). A spherical triangle with angles α, β, γ has area α + β + γ − π.

Proof. The three great circles bounding triangle T divide the sphere into eight triangles: T, its antipode T′ (congruent to T), and six others. Each pair of great circles through a vertex of T produces a lune containing T and an antipodal lune containing T′. The six lunes of angles α, α, β, β, γ, γ cover the sphere, with every point of T and of T′ covered three times and every other point covered once. Therefore 2(2α + 2β + 2γ) = 4π + 2 · 2 · Area(T), which gives Area(T) = α + β + γ − π. ∎

For a spherical polygon with n sides and angles θ₁, …, θₙ, triangulating from one vertex gives area ∑ θᵢ − (n − 2)π. Spherical geometry thus satisfies all of Hilbert's incidence axioms only after identifying antipodal points (the elliptic plane), and it violates the Saccheri–Legendre theorem: angle sums exceed π.

Legendre's proof of Euler's formula

Theorem 9.2. For every convex polyhedron with V vertices, E edges and F faces, V − E + F = 2.

Proof. Choose a point O in the interior and radially project the boundary from O onto the unit sphere centred at O; convexity guarantees that this projection is a bijection, sending vertices to points, edges to arcs of great circles and faces to spherical polygons that tile the sphere. Let face f have n_f sides. Then

        4π = ∑_f Area(f) = ∑_f (∑ angles of f − (n_f − 2)π)
           = (sum of all angles) − π ∑_f n_f + 2πF
           = 2πV − 2πE + 2πF,

because the angles around each vertex on the sphere sum to 2π, and ∑_f n_f = 2E since each edge borders exactly two faces. Dividing by 2π gives V − E + F = 2. ∎

Descartes's theorem

The angular defect at a vertex v of a convex polyhedron is δ(v) = 2π − (sum of the face angles at v), positive by convexity. Then ∑_v δ(v) = 2πV − ∑_f (n_f − 2)π = 2πV − 2πE + 2πF = 4π. For a cube each vertex has defect 2π − 3 · π/2 = π/2, and 8 · π/2 = 4π. This is the polyhedral Gauss–Bonnet theorem: the defect is a concentrated curvature, and the general theorem ∫ K dA = 2πχ for closed surfaces reduces to Descartes's formula when the curvature is concentrated at the vertices.

Beyond convexity

For a polyhedral surface topologically equivalent to a closed orientable surface of genus g, χ = 2 − 2g; for a non-orientable surface with k cross-caps, χ = 2 − k. The torus has χ = 0, as the picture frame shows. In higher dimensions the Euler–Poincaré formula for a convex d-polytope is f₀ − f₁ + f₂ − ⋯ + (−1)^{d−1} f_{d−1} = 1 − (−1)^d, which equals 2 for d = 3 and 0 for d = 4.

Combinatorial consequences

Theorem 9.3. (i) Every convex polyhedron has a face with at most five sides and a vertex of degree at most five. (ii) E ≤ 3V − 6 and E ≤ 3F − 6. (iii) If every face is a pentagon or a hexagon and every vertex has degree 3, there are exactly 12 pentagons.

Proof. (i) If every face had at least six sides, then 2E ≥ 6F; since every vertex has degree at least 3, 2E ≥ 3V. Then 2 = V − E + F ≤ 2E/3 − E + E/3 = 0, a contradiction. The vertex statement is dual. (ii) Each face has at least three sides, so 2E ≥ 3F, and V − E + F = 2 gives 2 ≤ V − E + 2E/3, i.e. E ≤ 3V − 6; the other bound is dual. (iii) Let there be p pentagons and h hexagons. Then 2E = 5p + 6h and 3V = 2E. So V − E + F = (5p + 6h)/3 − (5p + 6h)/2 + p + h = −(5p + 6h)/6 + p + h = p/6, and p/6 = 2 gives p = 12. ∎

Part (iii) explains why every fullerene molecule, such as buckminsterfullerene C₆₀ (12 pentagons, 20 hexagons), has exactly twelve pentagonal rings, and part (ii) is the same inequality that shows the complete graph K₅ is not planar.

✏️ Your Turn

(a) Verify Euler's formula for the truncated icosahedron (the C₆₀ shape), which has 12 pentagonal and 20 hexagonal faces with 3 faces at every vertex.
(b) A fullerene has 70 carbon atoms (vertices). How many hexagonal faces and how many edges does it have?
(c) Compute the angular defect at each vertex of a regular icosahedron and check Descartes's theorem.

Answers: (a) F = 32, E = (12 · 5 + 20 · 6)/2 = 90, V = 2E/3 = 60, and 60 − 90 + 32 = 2. (b) V = (60 + 6h)/3 = 20 + 2h = 70 gives h = 25, so F = 37 and E = 3V/2 = 105; check 70 − 105 + 37 = 2. (c) Five equilateral triangles meet at each vertex, so δ = 2π − 5π/3 = π/3, and 12 · π/3 = 4π.

─────────────────────────────────
Lesson 10: Regular Polytopes and the Platonic Solids
─────────────────────────────────

📌 Key idea of this section:

        A regular polyhedron {p, q} exists iff (p − 2)(q − 2) < 4:
        {3,3}, {4,3}, {3,4}, {5,3}, {3,5} — five in dimension 3,
        six in dimension 4, and three in every dimension n ≥ 5.

Definitions

A convex polyhedron is regular if its faces are congruent regular polygons and the same number of faces meet at every vertex; equivalently, its symmetry group acts transitively on flags (incident triples vertex ⊂ edge ⊂ face). The Schläfli symbol {p, q} records p-gonal faces with q at each vertex. Euclid devotes the thirteenth and final book of the Elements to their construction, ending with the proof that there are exactly five; Plato's Timaeus had associated four of them with the classical elements, and Kepler's Mysterium Cosmographicum (1596) nested them between the planetary spheres.

The classification

Theorem 10.1. There are exactly five regular convex polyhedra.

Proof. At each vertex q faces meet, each contributing an interior angle (1 − 2/p)π of a regular p-gon. For a convex solid angle the sum is strictly less than 2π (this is the positivity of the angular defect), so q(1 − 2/p)π < 2π, which rearranges to 1/p + 1/q > 1/2, or equivalently (p − 2)(q − 2) < 4. With p, q ≥ 3 the solutions are (p − 2, q − 2) ∈ {(1, 1), (1, 2), (2, 1), (1, 3), (3, 1)}, i.e. {3, 3}, {3, 4}, {4, 3}, {3, 5}, {5, 3}. Existence is shown by explicit coordinates, with φ = (1 + √5)/2:

        tetrahedron   {3,3}: (1,1,1), (1,−1,−1), (−1,1,−1), (−1,−1,1)
        cube          {4,3}: (±1, ±1, ±1)
        octahedron    {3,4}: (±1, 0, 0), (0, ±1, 0), (0, 0, ±1)
        icosahedron   {3,5}: cyclic permutations of (0, ±1, ±φ)
        dodecahedron  {5,3}: (±1, ±1, ±1) and cyclic permutations of (0, ±1/φ, ±φ)

Uniqueness up to similarity follows because a regular polyhedron is determined by its edge length and its Schläfli symbol: starting at one vertex, the faces around it are forced, and the surface is built face by face. ∎

The numbers V, E, F follow from Euler's formula: pF = 2E = qV and V − E + F = 2 give E = 2pq/(2p + 2q − pq).

        {p, q}     V    E    F    dihedral angle          rotation group
        {3, 3}     4    6    4    arccos(1/3)  ≈  70.53°    A₄,  order 12
        {4, 3}     8   12    6    90°                       S₄,  order 24
        {3, 4}     6   12    8    arccos(−1/3) ≈ 109.47°    S₄,  order 24
        {5, 3}    20   30   12    arccos(−1/√5) ≈ 116.57°   A₅,  order 60
        {3, 5}    12   30   20    arccos(−√5/3) ≈ 138.19°   A₅,  order 60

The dihedral angle δ of {p, q} satisfies sin(δ/2) = cos(π/q)/sin(π/p). Interchanging p and q gives the dual polyhedron, whose vertices are the face centres of the original; dual polyhedra have the same symmetry group. The rotation group has order 2E (it acts simply transitively on directed edges), and the full symmetry group has order 4E, equal to the number of flags: 24 for the tetrahedron (≅ S₄), 48 for the cube and octahedron (≅ S₄ × C₂), 120 for the dodecahedron and icosahedron (≅ A₅ × C₂). Together with the cyclic and dihedral groups, the groups A₄, S₄ and A₅ are, up to conjugacy, all the finite subgroups of SO(3), the three-dimensional analogue of Leonardo's theorem; the proof counts poles of rotations and uses the class equation.

Allowing non-convex faces or vertex figures gives the four Kepler–Poinsot star polyhedra (Kepler 1619, Poinsot 1809), and Cauchy proved in 1813 that there are no others.

Higher dimensions

A regular 4-polytope {p, q, r} has cells {p, q} with r of them around each edge. The analogue of the angle condition is that r dihedral angles of {p, q} fit around an edge with room to spare: r · δ{p, q} < 2π. Since δ{3,3} ≈ 70.53° allows r = 3, 4, 5, δ{4,3} = 90° allows r = 3, δ{3,4} ≈ 109.47° allows r = 3, δ{5,3} ≈ 116.57° allows r = 3, and δ{3,5} ≈ 138.19° allows no r ≥ 3, and since the vertex figure {q, r} must itself be a Platonic solid, the candidates are {3,3,3}, {3,3,4}, {3,3,5}, {4,3,3}, {3,4,3}, {5,3,3}. All six exist, as Ludwig Schläfli discovered around 1852:

        polytope        symbol     V     E     F     C
        5-cell          {3,3,3}    5    10    10     5
        tesseract       {4,3,3}   16    32    24     8
        16-cell         {3,3,4}    8    24    32    16
        24-cell         {3,4,3}   24    96    96    24
        120-cell        {5,3,3}  600  1200   720   120
        600-cell        {3,3,5}  120   720  1200   600

Each satisfies V − E + F − C = 0. The 24-cell is self-dual and has no analogue in any other dimension. Its 24 vertices can be taken as the units of the Hurwitz quaternions, and the 600-cell's 120 vertices form the binary icosahedral group in the unit quaternions. In every dimension n ≥ 5 the same angle argument leaves only three regular polytopes: the simplex {3, 3, …, 3}, the hypercube {4, 3, …, 3} and the cross-polytope {3, …, 3, 4}. The symmetry groups of regular polytopes are the finite Coxeter groups of types Aₙ, Bₙ, H₃, H₄ and F₄, generated by reflections; Coxeter's book Regular Polytopes is the classic reference.

✏️ Your Turn

(a) Using E = 2pq/(2p + 2q − pq), compute E, V and F for {5, 3}.
(b) Show that {6, 3} gives a vanishing denominator and interpret the result.
(c) Verify that the tesseract satisfies V − E + F − C = 0 by counting its k-faces as products: a k-face of the cube [0, 1]⁴ is obtained by choosing k free coordinates and fixing the other 4 − k to 0 or 1.

Answers: (a) E = 30/(10 + 6 − 15) = 30, V = 2E/q = 20, F = 2E/p = 12. (b) 2 · 6 + 2 · 3 − 18 = 0. The angle sum at a vertex equals 3 · 120° = 360°, so the faces lie flat: {6, 3} is the regular hexagonal tiling of the plane, an infinite tiling rather than a polyhedron; likewise {4, 4} and {3, 6}. (c) The number of k-faces is C(4, k) · 2^{4−k}: V = 16, E = 4 · 8 = 32, F = 6 · 4 = 24, C = 4 · 2 = 8, and 16 − 32 + 24 − 8 = 0.

─────────────────────────────────
Lesson 11: Dissections, Bolyai–Gerwien and Hilbert's Third Problem
─────────────────────────────────

📌 Key idea of this section:

        Polygons: equal area ⇔ scissors congruent (Bolyai–Gerwien).
        Polyhedra: the Dehn invariant D(P) = ∑ ℓ(e) ⊗ θ(e) ∈ ℝ ⊗_ℚ (ℝ/ℚπ) is also preserved,
        and the regular tetrahedron has D ≠ 0 = D(cube): equal volume is not enough.

Scissors congruence

Two polygons P and Q are scissors congruent, written P ∼ Q, if P can be cut into finitely many polygons P₁, …, Pₙ (meeting only along edges) and Q into Q₁, …, Qₙ with Pᵢ congruent to Qᵢ for each i. The same definition, with polyhedra, applies in space. Area (or volume) is an obvious invariant. Scissors congruence is an equivalence relation: for transitivity, if P ∼ Q and Q ∼ R, superimpose the two dissections of Q; the common refinement consists of finitely many convex pieces, each congruent to a piece in P and to a piece in R.

The Bolyai–Gerwien theorem

Theorem 11.1 (Wallace 1807, Bolyai 1832, Gerwien 1833). Two polygons of equal area are scissors congruent.

Proof. Let A be the common area. It suffices to show that every polygon P of area A is scissors congruent to the rectangle 1 × A.

Step 1. Triangulate P into triangles T₁, …, Tₘ.

Step 2. Each triangle is scissors congruent to a rectangle. Let the triangle have a longest side as base b with height h, so the foot of the altitude lies on the base. Cut along the midline parallel to the base; the top small triangle is then cut along its altitude into two right triangles, which are rotated by 180° about the midpoints of the slanted sides to fill the two corners. The result is a rectangle b × h/2.

Step 3. Two parallelograms with a common base AB lying between the same pair of parallel lines are scissors congruent. If the offset between their top sides is at most |AB|, the two parallelograms are each the union of their common part with one of two congruent triangles, so a single cut suffices; in general, insert finitely many intermediate parallelograms whose offsets increase by at most |AB| at each step and use transitivity.

Step 3′. Every rectangle of area A is scissors congruent to the rectangle 1 × A. Cutting a rectangle in half and stacking the halves shows x × y ∼ 2x × (y/2), so we may assume the rectangle is x × y with y ≤ 1. By Step 3 (applied with base x) it is scissors congruent to a parallelogram with base x, height y and slanted sides of length 1, which exists because y ≤ 1. Regarding a side of length 1 as the base, this parallelogram has height A, and by Step 3 again it is scissors congruent to the rectangle 1 × A.

Step 4. Each Tᵢ becomes a rectangle 1 × Area(Tᵢ); stacking them gives 1 × A. By transitivity, any two polygons of area A are scissors congruent. ∎

Hadwiger and Glur (1951) showed that one can even require each piece to be moved by a translation or a half-turn only. By contrast, Tarski asked in 1925 whether a disc and a square of equal area are equidecomposable under translations with arbitrary (not necessarily polygonal) pieces; Laczkovich (1990) proved that they are, using about 10⁵⁰ non-measurable pieces. In three dimensions the Banach–Tarski paradox (1924) shows that without measurability, volume is not even an invariant.

Hilbert's third problem

In his address to the 1900 International Congress of Mathematicians in Paris, Hilbert asked, as the third of his 23 problems, whether two tetrahedra of equal base and equal height are always scissors congruent. Euclid's proof that the volume of a pyramid is one third of base times height uses an exhaustion argument, and Gauss had asked in 1844 whether this limiting process could be avoided. Max Dehn answered the question negatively in the same year, 1900, the first of Hilbert's problems to be solved.

The Dehn invariant

Let V = ℝ ⊗_ℚ (ℝ/ℚπ), the tensor product over ℚ of the ℚ-vector spaces ℝ and ℝ/ℚπ. For a polyhedron P with edges e of length ℓ(e) and dihedral angle θ(e), define

        D(P) = ∑_e ℓ(e) ⊗ θ(e) ∈ V.

Theorem 11.2 (Dehn). If P ∼ Q then D(P) = D(Q).

Proof. It suffices to show that if P is cut into pieces P₁, …, Pₙ then D(P) = ∑ D(Pᵢ), since congruent polyhedra clearly have equal invariants. Subdivide all edges so that every edge segment of every piece and of P is a union of the same elementary segments; by bilinearity, ℓ ⊗ θ = ∑ ℓⱼ ⊗ θ when ℓ = ∑ ℓⱼ, so we may compare segment by segment. Consider one elementary segment s of length ℓ and the dihedral angles θ₁, …, θₖ of the pieces along s. If s lies on an edge of P with angle θ, the pieces fill that angle, so ∑ θᵢ = θ and ∑ ℓ ⊗ θᵢ = ℓ ⊗ θ. If s lies in the interior of a face of P, the angles sum to π and ∑ ℓ ⊗ θᵢ = ℓ ⊗ π = 0 in V. If s lies in the interior of P, the angles sum to 2π and the contribution is again 0. Summing over segments gives D(P) = ∑ D(Pᵢ). ∎

The angle of the regular tetrahedron

Lemma 11.3. Let θ = arccos(1/3). Then θ/π is irrational.

Proof 1. Write cos(nθ) = aₙ/3ⁿ. From cos((n + 1)θ) = 2cos θ cos(nθ) − cos((n − 1)θ) we get aₙ₊₁ = 2aₙ − 9aₙ₋₁ with a₀ = a₁ = 1, so aₙ₊₁ ≡ 2aₙ (mod 3) and no aₙ is divisible by 3. If θ = πm/n with n ≥ 1, then cos(nθ) = ±1, so aₙ = ±3ⁿ, a contradiction.

Proof 2. If θ were a rational multiple of π, then e^{iθ} would be a root of unity and 2cos θ = e^{iθ} + e^{−iθ} would be an algebraic integer; but 2cos θ = 2/3 is a rational non-integer. ∎

Theorem 11.4. The regular tetrahedron is not scissors congruent to a cube of the same volume.

Proof. The cube has 12 edges with angle π/2 ∈ ℚπ, so D(cube) = 0. The regular tetrahedron of edge a has six edges of angle θ = arccos(1/3), so D = 6a ⊗ θ = a ⊗ 6θ. Since a ≠ 0 in ℝ and 6θ ∉ ℚπ by Lemma 11.3, the element a ⊗ 6θ of a tensor product of ℚ-vector spaces is non-zero (choose ℚ-linear functionals on each factor that do not vanish on a and on 6θ; their product is a linear functional on V that does not vanish). ∎

Dehn's method also produces pairs of tetrahedra with equal bases and equal heights but different Dehn invariants, which answers Hilbert's question in the negative. The converse problem was solved by Jean-Pierre Sydler in 1965: two polyhedra are scissors congruent if and only if they have the same volume and the same Dehn invariant. Børge Jessen simplified the proof (1968) and extended the result to dimension 4 (1972); for dimensions 5 and higher, whether volume and the generalised Dehn invariants are complete remains open.

✏️ Your Turn

(a) Show that every right prism over a triangle has Dehn invariant 0.
(b) Show that the regular octahedron is not scissors congruent to a cube.
(c) Compute cos 2θ and cos 3θ for θ = arccos(1/3), and confirm the recursion aₙ₊₁ = 2aₙ − 9aₙ₋₁.

Answers: (a) The base and top edges have dihedral angle π/2, contributing 0. The three lateral edges have length h and dihedral angles equal to the angles α, β, γ of the triangle, contributing h ⊗ α + h ⊗ β + h ⊗ γ = h ⊗ (α + β + γ) = h ⊗ π = 0. So every such prism, and hence every polyhedron that can be cut into prisms, has D = 0; such a prism is in fact scissors congruent to a cube. (b) Its 12 edges have dihedral angle arccos(−1/3) = π − θ, so D = 12a ⊗ (π − θ) = −12a ⊗ θ ≠ 0. (c) cos 2θ = 2/9 − 1 = −7/9 and cos 3θ = 4/27 − 1 = −23/27. The recursion gives a₂ = 2 − 9 = −7 and a₃ = 2(−7) − 9 = −23, matching.

─────────────────────────────────
Lesson 12: Constructibility with Straightedge and Compass
─────────────────────────────────

📌 Key idea of this section:

        α is constructible ⇔ α lies in a tower ℚ = K₀ ⊂ K₁ ⊂ ⋯ ⊂ Kₙ with [Kᵢ₊₁ : Kᵢ] = 2.
        Hence [ℚ(α) : ℚ] is a power of 2: ∛2 and cos 20° are not constructible.
        The regular n-gon is constructible ⇔ φ(n) is a power of 2 (Gauss–Wantzel).

The rules

Start with two points 0 and 1 in the plane ℂ. A straightedge draws the line through two constructed points; a compass draws the circle with a constructed centre through a constructed point. New points are intersections of constructed lines and circles. A complex number is constructible if it is obtained after finitely many steps, and a real number is constructible if it is a coordinate of a constructible point.

Theorem 12.1. The constructible numbers form a subfield 𝒦 of ℂ that is closed under square roots, and it is the smallest such field.

Proof. Sums and differences come from parallelograms, and products and quotients of real lengths from similar triangles (the intercept theorem); complex multiplication then follows by adding angles and multiplying lengths. Square roots of positive reals: on a segment of length 1 + x construct the semicircle; the perpendicular at the point dividing it into 1 and x has length √x, by the altitude-on-hypotenuse theorem. Complex square roots combine this with angle bisection. Conversely, if all constructed points so far have coordinates in a subfield K ⊆ ℝ (for real and imaginary parts), then a line through two such points has an equation with coefficients in K, a circle has an equation x² + y² + dx + ey + f = 0 with coefficients in K, and intersections are found by solving linear equations or a quadratic equation over K. So every new coordinate lies in K or in K(√δ) for some δ ∈ K. ∎

Corollary 12.2. If α is constructible, then [ℚ(α) : ℚ] = 2ᵏ for some k ≥ 0.

Proof. α lies in a field Kₙ obtained by successive quadratic extensions, so [Kₙ : ℚ] = 2ⁿ, and by the tower law [ℚ(α) : ℚ] divides 2ⁿ. ∎

The converse fails: a root of an irreducible quartic with Galois group S₄, such as x⁴ − x − 1, has degree 4 but is not constructible. The precise criterion is that the Galois closure of ℚ(α) has 2-power degree, because a finite 2-group has a chain of subgroups of index 2.

The three classical problems

Doubling the cube. A cube of volume 2 needs edge ∛2, a root of x³ − 2, irreducible over ℚ by Eisenstein's criterion at p = 2. So [ℚ(∛2) : ℚ] = 3 is not a power of 2 and ∛2 is not constructible.

Trisecting the angle. An angle of 60° is constructible (it is the angle of an equilateral triangle). If it could be trisected, cos 20° would be constructible. From cos 3t = 4cos³t − 3cos t with t = 20°, the number c = cos 20° satisfies 4c³ − 3c = 1/2, and y = 2c satisfies y³ − 3y − 1 = 0. By the rational root theorem the only candidates are ±1, and 1 − 3 − 1 = −3, −1 + 3 − 1 = 1, so the cubic has no rational root and, being cubic, is irreducible. Hence [ℚ(cos 20°) : ℚ] = 3 and the 60° angle cannot be trisected. Some angles can be trisected (90°, for example, since 30° is constructible); the theorem says that no construction works for all angles.

Squaring the circle. A square of area π needs side √π. If √π were constructible, π would be algebraic, contradicting Lindemann's theorem (1882) that π is transcendental.

The first two impossibility proofs were published by Pierre Wantzel in 1837. Constructions become possible with other tools: Archimedes trisected angles with a marked ruler (neusis), and origami, axiomatised by Huzita and Hatori, can solve all cubic equations, hence both double the cube and trisect the angle. The Mohr–Mascheroni theorem (Mohr 1672, Mascheroni 1797) shows that every straightedge-and-compass construction of points can be done with a compass alone, and the Poncelet–Steiner theorem shows that a straightedge suffices if one circle with its centre is given.

Regular polygons: the Gauss–Wantzel theorem

Theorem 12.3. The regular n-gon (n ≥ 3) is constructible if and only if φ(n) is a power of 2, equivalently n = 2ᵏ p₁ p₂ ⋯ pₘ with k ≥ 0 and p₁, …, pₘ distinct Fermat primes, i.e. primes of the form 2^(2^j) + 1.

Proof. Constructing the n-gon is equivalent to constructing ζ = e^{2πi/n}. The extension ℚ(ζ)/ℚ is Galois with group (ℤ/nℤ)ˣ, abelian of order φ(n), because the cyclotomic polynomial Φₙ is irreducible. If φ(n) = 2ᵏ, the Galois group is a 2-group and has a chain of subgroups each of index 2 in the previous one; by the Galois correspondence ℚ(ζ) is reached by a tower of quadratic extensions, so ζ is constructible. Conversely, if ζ is constructible, then φ(n) = [ℚ(ζ) : ℚ] is a power of 2 by Corollary 12.2. Finally, writing n = 2ᵏ ∏ pᵢ^{eᵢ} with odd primes pᵢ, φ(n) = 2^{k−1} ∏ pᵢ^{eᵢ−1}(pᵢ − 1) for k ≥ 1 (and without the power of 2 for k = 0); this is a power of 2 iff each eᵢ = 1 and each pᵢ − 1 is a power of 2. If 2^m + 1 is prime then m is a power of 2 (for m with an odd factor r > 1, 2^{m/r} + 1 divides 2^m + 1), so the pᵢ are Fermat primes. ∎

Gauss found the construction of the 17-gon in 1796, at the age of 18, and the sufficiency appears in his Disquisitiones Arithmeticae (1801); Wantzel proved necessity in 1837. The only known Fermat primes are 3, 5, 17, 257 and 65537; Euler showed in 1732 that 2³² + 1 = 641 × 6700417 is composite, and no further Fermat primes are known. Explicitly, cos(2π/5) = (√5 − 1)/4, and Gauss's formula gives cos(2π/17) as a nested expression in square roots of 17.

✏️ Your Turn

(a) List all n with 3 ≤ n ≤ 20 for which the regular n-gon is constructible.
(b) Show that y = 2cos(2π/7) satisfies y³ + y² − 2y − 1 = 0, and conclude that the regular heptagon is not constructible.
(c) Decide whether each of √(2 + √3), ∛3 + 1 and cos(2π/15) is constructible.

Answers: (a) 3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20 (eleven values); 7, 9, 11, 13, 14, 18, 19 fail because φ(n) = 6, 6, 10, 12, 6, 6, 18. (b) Let ζ = e^{2πi/7}, so 1 + ζ + ⋯ + ζ⁶ = 0, and y = ζ + ζ⁻¹. Then y² = ζ² + ζ⁻² + 2 and y³ = ζ³ + ζ⁻³ + 3y. Hence y³ + y² − 2y − 1 = (ζ³ + ζ⁻³) + (ζ² + ζ⁻²) + (ζ + ζ⁻¹) + 1 = 1 + ζ + ⋯ + ζ⁶ = 0 (using ζ⁻ᵏ = ζ⁷⁻ᵏ). The cubic has no rational roots (y = 1 gives −1 and y = −1 gives 1), so it is irreducible, [ℚ(y) : ℚ] = 3, and the heptagon is not constructible. (c) √(2 + √3) is constructible (two square roots); ∛3 + 1 is not, since it generates the degree-3 field ℚ(∛3); cos(2π/15) is constructible, since φ(15) = 8.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped by difficulty. Core problems check the definitions and the main formulas of each lesson; Advanced problems require combining several results or giving a short proof; Challenge problems are proofs of the kind found on graduate qualifying examinations. Coordinates refer to ℝ² or ℂ unless stated otherwise, and in Ceva and Menelaus problems all ratios are signed.

Core (Problems 1–20)

  1. Classify the isometry T(x, y) = (−y + 3, x + 1) and find its fixed point.
  2. Classify T(x, y) = (x + 2, −y + 4); if it is a glide reflection, give its axis and glide vector.
  3. Identify the composite σ₂σ₁, where σ₁ is the reflection in y = 0 and σ₂ the reflection in y = 3.
  4. Identify the composite of the half-turn about (1, 2) followed by the half-turn about (4, −1).
  5. Find the order of the symmetry group of a regular octagon and the number of reflections it contains.
  6. Can a lattice in ℝ² be invariant under the rotation through 45°? Justify with a trace argument.
  7. For the triangle with sides 5, 12, 13, compute R, r and OI².
  8. For the same triangle compute OH² from Corollary 5.2 and explain the answer geometrically.
  9. Find the radius of the nine-point circle of the triangle with sides 13, 14, 15.
  10. In triangle ABC, BD/DC = 3/2 and CE/EA = 4/5. Find AF/FB for which AD, BE, CF are concurrent.
  11. A transversal meets BC at D with BD/DC = −2 and AB at F with AF/FB = 3/4. Find CE/EA where it meets CA.
  12. Find the power of (7, 1) with respect to the circle with centre (2, 1) and radius 3, and the tangent length.
  13. Find the radical axis of x² + y² = 16 and (x − 10)² + y² = 36 and explain the result.
  14. Invert the point (1, 2) in the circle x² + y² = 25.
  15. Compute the cross-ratio (A, B; C, D) for the points 1, 2, 4, 8 of the real line.
  16. Find the line through the points [1 : 2 : 1] and [3 : 0 : 1] of ℝP² and its affine equation.
  17. Verify Euler's formula for the pentagonal prism.
  18. Compute the angular defect at a vertex of the regular dodecahedron and check Descartes's theorem.
  19. Decide whether the regular 51-gon and the regular 25-gon are constructible.
  20. Prove that ∛5 is not constructible.

Advanced (Problems 21–45)

  21. Let a, b, c be the lines containing the sides of a triangle. Prove that σ_c σ_b σ_a is a glide reflection, not a reflection.
  22. Find the axis and glide vector of the opposite isometry T(z) = i z̄ + 1 + 3i of ℂ.
  23. In ℂ, let ρ₀ be the rotation through 60° about 0 and ρ₁ the rotation through 120° about 1. Identify ρ₁ρ₀ and find its centre.
  24. Prove that the n reflections of Dₙ form a single conjugacy class if n is odd and two classes if n is even.
  25. Prove that no wallpaper group contains both a rotation of order 3 and a rotation of order 4.
  26. For B = (0, 0), C = (8, 0), A = (2, 6) compute O, G, H and verify OG : GH = 1 : 2 and OH² = 9R² − (a² + b² + c²).
  27. For the triangle of Problem 26 find the centre and radius of the nine-point circle.
  28. Compute OI for the triangle with sides 6, 8, 10.
  29. Compute the Routh area ratio when BD/DC = CE/EA = AF/FB = 4.
  30. Compute the Routh area ratio for x = 1, y = 2, z = 5.
  31. In the 13–14–15 triangle (a = 14, b = 15, c = 13), find the three cevian ratios of the Gergonne point and verify Ceva.
  32. Find the image of the line x + y = 2 under inversion in the unit circle.
  33. Find the image of the circle (x − 3)² + y² = 4 under inversion in the unit circle.
  34. A cyclic quadrilateral ABCD has AB = 2, BC = 3, CD = 4, DA = 5. Find AC · BD.
  35. Find the radical centre of x² + y² = 1, (x − 4)² + y² = 9 and x² + (y − 6)² = 4, and its common power.
  36. Show that when (A, B; C, D) = −1, the six values of the cross-ratio under permutations reduce to three, and list them.
  37. Find the harmonic conjugate of C = 3 with respect to A = 1 and B = 7.
  38. Count the points, lines and incident point–line pairs of the projective plane PG(2, 3).
  39. The cuboctahedron has 8 triangular and 6 square faces, with 4 faces at each vertex. Find V and E and verify Euler's formula.
  40. Prove that a convex polyhedron all of whose faces are triangles satisfies E = 3V − 6 and F = 2V − 4.
  41. A torus is subdivided into a 4 × 4 grid of quadrilaterals. Compute V − E + F.
  42. Derive the dihedral angle of the regular octahedron from sin(δ/2) = cos(π/q)/sin(π/p).
  43. Compute the order of the rotation group of the icosahedron in three ways using the orbit–stabiliser theorem.
  44. Is the box 1 × 2 × 4 scissors congruent to the cube of edge 2? Justify.
  45. Show that y = 2cos(2π/9) satisfies y³ − 3y + 1 = 0 and deduce that the regular 9-gon is not constructible.

Challenge (Problems 46–60)

  46. Prove that an isometry of ℝ² commuting with every translation is itself a translation.
  47. Prove that the centre of the group E(2) is trivial.
  48. Prove that a group of isometries containing non-trivial rotations about two distinct points contains a non-trivial translation.
  49. Prove a² + b² + c² ≤ 9R² for every triangle and deduce sin²A + sin²B + sin²C ≤ 9/4.
  50. Use Euler's relation to compute OI for the 3–4–5 triangle, and prove that R = 2r only for equilateral triangles.
  51. Prove that the reflection of the orthocentre H in the midpoint of BC is the point of the circumcircle diametrically opposite A.
  52. Prove that the composite of the inversions in two concentric circles of radii k₁ and then k₂ is the dilation by (k₂/k₁)².
  53. Find a point L such that inversion centred at L maps the circles x² + y² = 1 and (x − 5)² + y² = 4 to concentric circles.
  54. Prove that a projective transformation of ℝP² fixing four points in general position is the identity.
  55. Prove |PGL(3, q)| = q³(q³ − 1)(q² − 1) and that this equals the number of ordered quadrangles in PG(2, q). Evaluate for q = 2 and q = 3.
  56. The 24-cell has 24 octahedral cells, with 3 cells around each edge. Derive E and F and verify V − E + F − C = 0 given V = 24.
  57. A regular tetrahedron of edge 2 is cut into four regular tetrahedra of edge 1 and one regular octahedron of edge 1. Check that volume and Dehn invariant are additive for this dissection.
  58. Prove that cos 72° = (√5 − 1)/4 and conclude that the regular pentagon is constructible.
  59. Prove that the acute angles of the 3–4–5 right triangle are irrational multiples of π.
  60. Determine how many regular n-gons with 3 ≤ n ≤ 100 are constructible, and show that the 255-gon is constructible.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. A = R_{90°}, so T is a rotation through 90°. Solving x = −y + 3, y = x + 1 gives x = 1, y = 2: the rotation through 90° about (1, 2).
  2. A = diag(1, −1) with fixed direction u = (1, 0) and ⟨b, u⟩ = 2 ≠ 0: a glide reflection with axis y = 2 and glide vector (2, 0).
  3. The lines are parallel at distance 3, so σ₂σ₁ is the translation by (0, 6).
  4. H_B H_A(p) = 2B − (2A − p) = p + 2(B − A), the translation by 2(3, −3) = (6, −6).
  5. D₈ has order 16 and contains 8 reflections.
  6. No. The matrix in a lattice basis would be an integer matrix with trace 2cos 45° = √2 ∉ ℤ.
  7. R = 13/2 (half the hypotenuse), r = (5 + 12 − 13)/2 = 2, OI² = 169/4 − 26 = 65/4.
  8. OH² = 9 · 169/4 − 338 = 169/4, so OH = 13/2 = R: in a right triangle H is the right-angle vertex and O the midpoint of the hypotenuse.
  9. R = 65/8 (Lesson 5), so the nine-point radius is 65/16.
  10. AF/FB = 1/((3/2)(4/5)) = 5/6.
  11. CE/EA = −1/((−2)(3/4)) = 2/3.
  12. pow = 5² − 3² = 16; tangent length 4.
  13. x = (100 + 16 − 36)/20 = 4. The point (4, 0) lies on both circles: the centres are 10 = 4 + 6 apart, so the circles are externally tangent and the radical axis is their common tangent x = 4.
  14. |P|² = 5, so P* = 25(1, 2)/5 = (5, 10).
  15. ((4 − 1)(8 − 2))/((4 − 2)(8 − 1)) = 18/14 = 9/7.
  16. (1, 2, 1) × (3, 0, 1) = (2, 2, −6), i.e. [1 : 1 : −3]: the line x + y = 3.
  17. V = 10, E = 15, F = 7 and 10 − 15 + 7 = 2.
  18. Three angles of 3π/5 meet: δ = 2π − 9π/5 = π/5, and 20 · π/5 = 4π.
  19. 51 = 3 · 17 is a product of distinct Fermat primes: constructible. 25 = 5² has a repeated prime and φ(25) = 20: not constructible.
  20. x³ − 5 is irreducible by Eisenstein at 5, so [ℚ(∛5) : ℚ] = 3 is not a power of 2.

Advanced

  21. The composite is opposite. If σ_c σ_b σ_a = σ_ℓ, then σ_b σ_a = σ_c σ_ℓ. The left side is a non-trivial rotation about P = a ∩ b, whose only fixed point is P; the right side then must also be that rotation, so c and ℓ meet at P. But c does not pass through P = a ∩ b, because the three lines form a triangle: a contradiction. By Theorem 3.2 the composite is a glide reflection.
  22. T²(z) = z + i(1 − 3i) + 1 + 3i = z + 4 + 4i, so the glide vector is 2 + 2i. Writing z = x + iy, T(z) − z = (y + 1 − x) + i(x + 3 − y), which equals 2 + 2i exactly on y = x + 1: the axis.
  23. ρ₁ρ₀(z) = 1 + e^{2πi/3}(e^{iπ/3}z − 1) = −z + 1 − e^{2πi/3}, a half-turn (60° + 120° = 180°) about (1 − e^{2πi/3})/2 = 3/4 − (√3/4)i.
  24. Number the axes by angles kπ/n, k mod n. Conjugation by R_{2π/n} sends k to k + 2, and conjugation by a reflection with axis index m sends k to 2m − k. Both preserve k mod 2 when n is even, giving two classes (axes through vertices and through edge midpoints of the n-gon); when n is odd, k ↦ k + 2 alone is transitive on ℤ/n.
  25. The point group would contain R_{120°} and R_{90°}, hence R_{120°}R_{−90°} = R_{30°} of order 12, contradicting the crystallographic restriction.
  26. O = (4, 2) with R² = 20; G = (10/3, 2); H = A + B + C − 2O = (2, 2). Then OG = 2/3 and GH = 4/3, ratio 1 : 2. a² + b² + c² = 64 + 72 + 40 = 176 and 9R² − 176 = 4 = OH².
  27. N = (O + H)/2 = (3, 2) and radius R/2 = √20/2 = √5.
  28. R = 5, r = (6 + 8 − 10)/2 = 2, OI² = 25 − 20 = 5, OI = √5.
  29. (k − 1)²/(k² + k + 1) = 9/21 = 3/7.
  30. (xyz − 1)² = 81 and the factors are 4, 13, 11, so the ratio is 81/572.
  31. s = 21, so BD/DC = (s − b)/(s − c) = 6/8 = 3/4, CE/EA = (s − c)/(s − a) = 8/7, AF/FB = (s − a)/(s − b) = 7/6, with product 1.
  32. The foot of the perpendicular is F = (1, 1), with F* = (1/2, 1/2). The image is the circle with diameter OF*: centre (1/4, 1/4), radius √2/4, i.e. x² + y² = (x + y)/2.
  33. p = 9 − 4 = 5, so the centre is (3/5, 0) and the radius 2/5; check: 1 ↦ 1 and 5 ↦ 1/5.
  34. Ptolemy's equality: AC · BD = 2 · 4 + 3 · 5 = 23.
  35. The axes are x = (16 + 1 − 9)/8 = 1 and y = (36 + 1 − 4)/12 = 11/4. Radical centre (1, 11/4), common power 1 + 121/16 − 1 = 121/16.
  36. With λ = −1: λ = −1, 1/λ = −1, 1 − λ = 2, 1/(1 − λ) = 1/2, (λ − 1)/λ = 2, λ/(λ − 1) = 1/2. The values are −1, 2, 1/2.
  37. d = (c(a + b) − 2ab)/(2c − a − b) = (24 − 14)/(6 − 8) = −5. Check: (2 · (−12))/((−4)(−6)) = −1.
  38. 3² + 3 + 1 = 13 points and 13 lines, 4 points on each line, so 52 incident pairs.
  39. E = (8 · 3 + 6 · 4)/2 = 24, V = 2E/4 = 12, F = 14, and 12 − 24 + 14 = 2.
  40. 3F = 2E, so V − E + 2E/3 = 2 gives E = 3V − 6 and then F = 2E/3 = 2V − 4.
  41. V = 16, E = 32, F = 16, so χ = 0 = 2 − 2g with g = 1.
  42. sin(δ/2) = (√2/2)/(√3/2) = √(2/3), so cos δ = 1 − 2 · 2/3 = −1/3 and δ = arccos(−1/3) ≈ 109.47°.
  43. Faces: one orbit of 20 faces, each with stabiliser C₃, so 20 · 3 = 60. Vertices: 12 · 5 = 60. Edges: 30 · 2 = 60.
  44. Yes. Both have volume 8 and Dehn invariant 0 (all dihedral angles π/2), so Sydler's theorem applies; elementarily, 1 × 2 × 4 ∼ 2 × 2 × 2 by cutting the box in half along its long edge and stacking.
  45. Let c = cos 40°. Then cos 120° = 4c³ − 3c = −1/2, so y = 2c satisfies y³ − 3y + 1 = 0. The values at ±1 are −1 and 3, so there is no rational root, the cubic is irreducible, and [ℚ(y) : ℚ] = 3.

Challenge

  46. Let g = (b, A). Then g τ_v g⁻¹ = τ_{Av}, so commuting with τ_v means Av = v. This holds for all v only if A = I, so g is a translation.
  47. A central element is a translation τ_b by Problem 46. Commuting with the rotation R about 0 gives τ_{Rb} = τ_b for every rotation R, so b = 0.
  48. Let ρ_A, ρ_B be the rotations through α, β ≢ 0. The commutator ρ_Aρ_Bρ_A⁻¹ρ_B⁻¹ = ρ′ρ_B⁻¹, where ρ′ = ρ_Aρ_Bρ_A⁻¹ is the rotation through β about ρ_A(B). Its angle is β − β = 0, so it is a translation; it is trivial only if ρ_A(B) = B, i.e. B = A.
  49. OH² = 9R² − (a² + b² + c²) ≥ 0. With a = 2R sin A, etc., 4R²(sin²A + sin²B + sin²C) ≤ 9R², which gives the bound 9/4, attained only by the equilateral triangle.
  50. R = 5/2, r = 1, OI² = 25/4 − 5 = 5/4, OI = √5/2. If R = 2r then OI = 0, so I = O. The incircle touches BC at the foot of the perpendicular from I, which is then the foot of the perpendicular from O, namely the midpoint of BC. Hence s − b = BD = DC = s − c, so b = c; similarly c = a, and the triangle is equilateral.
  51. With O as origin, H = A + B + C and M_a = (B + C)/2, so 2M_a − H = −A, which lies on the circumcircle and is antipodal to A.
  52. ι₁(P) = k₁²P/|P|², and |ι₁(P)|² = k₁⁴/|P|², so ι₂ι₁(P) = k₂² · (k₁²P/|P|²) · |P|²/k₁⁴ = (k₂/k₁)² P.
  53. The radical axis is x = (25 + 1 − 4)/10 = 11/5, and the power of M = (11/5, 0) is 121/25 − 1 = 96/25. The circles orthogonal to both given circles are centred on the radical axis and all pass through the limiting points L = ((11 ± 4√6)/5, 0). Inversion centred at L = ((11 − 4√6)/5, 0) maps these orthogonal circles to lines through the image of the other limiting point; the images of the given circles are orthogonal to all these lines and are therefore concentric about that image point.
  54. Choose coordinates in which the points are [e₁], [e₂], [e₃], [e₁ + e₂ + e₃]. A matrix M fixing the first three satisfies Meᵢ = λᵢeᵢ; fixing the fourth forces λ₁ = λ₂ = λ₃ = μ, so M = μI, the identity of PGL(3).
  55. |GL(3, q)| = (q³ − 1)(q³ − q)(q³ − q²); dividing by |F*| = q − 1 gives q³(q³ − 1)(q² − 1). Ordered quadrangles: (q² + q + 1)(q² + q) q² (q − 1)², choosing a point, a second point, a point off their line, and a point off the three lines they determine; this simplifies to the same expression, as it must since PGL(3, q) acts sharply transitively on them (Problem 54 and the fundamental theorem). For q = 2 the value is 168, and for q = 3 it is 5616.
  56. Each octahedron has 8 faces, each shared by 2 cells: F = 24 · 8/2 = 96. Each has 12 edges, each shared by 3 cells: E = 24 · 12/3 = 96. Then 24 − 96 + 96 − 24 = 0.
  57. Volume: the regular tetrahedron of edge a has volume a³/(6√2), and the octahedron of edge 1 has volume √2/3 = 4/(6√2). So 8/(6√2) = 4 · 1/(6√2) + 4/(6√2). Dehn: the left side is 6 · 2 ⊗ θ = 12 ⊗ θ; the right side is 4 · 6 ⊗ θ + 12 ⊗ (π − θ) = 24 ⊗ θ − 12 ⊗ θ = 12 ⊗ θ, using 12 ⊗ π = 0.
  58. Let t = 72°; then cos 3t = cos 2t because 3t + 2t = 360°. With c = cos t, 4c³ − 3c = 2c² − 1, i.e. (c − 1)(4c² + 2c − 1) = 0. Since c ≠ 1, c = (−2 + √20)/8 = (√5 − 1)/4, which lies in the quadratic field ℚ(√5).
  59. One acute angle has cos θ = 3/5 (the other 4/5). If θ were a rational multiple of π, 2cos θ = 6/5 would be an algebraic integer; a rational algebraic integer is an integer, contradiction. The same argument applies to 8/5.
  60. Exactly 24 values: 3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20, 24, 30, 32, 34, 40, 48, 51, 60, 64, 68, 80, 85, 96. Since 255 = 3 · 5 · 17 is a product of distinct Fermat primes, φ(255) = 2 · 4 · 16 = 128 = 2⁷ and the 255-gon is constructible.
