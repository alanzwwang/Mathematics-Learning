Non-Euclidean Geometry — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

For more than two thousand years the fifth postulate of Euclid's Elements was regarded as a blemish: a statement that looked like a theorem but resisted every attempt at proof. The resolution of the problem in the first half of the nineteenth century — the discovery that a perfectly consistent geometry exists in which the postulate fails — is one of the great conceptual turning points in mathematics. It separated the question "what is true in geometry?" from the question "what is true of physical space?", it gave birth to the axiomatic method in its modern form, and through Gauss and Riemann it led directly to differential geometry and to the geometric theory of gravitation.

This course treats the subject at the level of a first graduate course. An introductory treatment presents the three model worlds (plane, sphere, saddle), the idea of a geodesic, Girard's theorem and the qualitative meaning of curvature. Here we make everything precise. We begin with neutral geometry — the theorems that survive without the parallel postulate — and prove the Saccheri–Legendre theorem. We then develop spherical geometry and spherical trigonometry in full, construct the hyperbolic plane in four equivalent models (the hyperboloid, the upper half-plane, the Poincaré disk and the Beltrami–Klein disk), compute its isometry group PSL(2,ℝ), classify its isometries, and derive hyperbolic trigonometry and the area formula. We study discrete groups of isometries (Fuchsian groups), the tilings they produce, and the modular group. Finally we place everything inside the framework of Gauss's intrinsic theory of surfaces — curvature, the Theorema Egregium and the Gauss–Bonnet theorem — and of Riemann's generalisation to manifolds of any dimension, which is the mathematical language of general relativity.

Notation. Throughout, angles are measured in radians unless degrees are explicitly indicated. The hyperbolic plane is normalised to have constant curvature −1 and the unit sphere has curvature +1; formulas for curvature K = ±1/R² follow by scaling lengths by R. We write H = {z ∈ ℂ : Im z > 0} for the upper half-plane, D = {z ∈ ℂ : |z| < 1} for the unit disk, and ⟨·,·⟩ for the Lorentzian form on ℝ³ introduced in Lesson 4. Prerequisites are linear algebra, multivariable calculus, basic complex analysis (Möbius maps) and some familiarity with groups.

In this course, you will:

  1. Prove what can and cannot be derived without the parallel postulate, and trace the history from Saccheri to Beltrami
  2. Develop spherical and elliptic geometry, including a complete proof of Girard's theorem
  3. Derive the spherical laws of cosines and sines and apply them to geodesy
  4. Construct the hyperboloid model and its isometry group O⁺(2,1)
  5. Study the upper half-plane with metric ds² = (dx² + dy²)/y², its geodesics and its distance formula
  6. Classify the isometries of the hyperbolic plane through the trace of a matrix in PSL(2,ℝ)
  7. Translate between the Poincaré disk, the Beltrami–Klein disk and the other models
  8. Derive hyperbolic trigonometry and the angle of parallelism
  9. Prove that the area of a hyperbolic triangle equals π minus its angle sum
  10. Study Fuchsian groups, triangle groups, regular tilings and the modular group
  11. Define Gaussian curvature and prove that it is intrinsic (the Theorema Egregium)
  12. Prove the Gauss–Bonnet theorem and use it to classify constant-curvature surfaces
  13. Connect all of this to Riemannian geometry and to Einstein's theory of gravitation
  14. Work through 60 problems, from routine computations to research-flavoured challenges, with a full answer key

─────────────────────────────────
Lesson 1: Neutral Geometry and the Parallel Postulate
─────────────────────────────────

📌 Key idea of this section:

        Neutral geometry = Hilbert's axioms without the parallel axiom.
        Saccheri–Legendre:  in neutral geometry every triangle has angle sum ≤ π.
        Euclidean geometry is the unique neutral geometry with one triangle of sum π.

Euclid's fifth postulate

Euclid's fifth postulate states: if a straight line falling on two straight lines makes the interior angles on the same side less than two right angles, the two lines, if produced indefinitely, meet on that side. In the presence of the other axioms it is equivalent to Playfair's axiom: through a point P not on a line ℓ there is at most one line through P that does not meet ℓ. (The existence of at least one such line is a theorem of neutral geometry, as we shall see.) The first 28 propositions of Book I of the Elements do not use the postulate, and Proclus already reports attempts by Ptolemy to prove it.

Hilbert's axioms

Euclid's own axioms are incomplete: they do not, for example, guarantee that two circles each passing through the other's centre actually intersect, nor do they control the notion of "betweenness". The modern foundation is Hilbert's Grundlagen der Geometrie (1899), which uses undefined terms point, line, lies on, between and congruent, together with five groups of axioms: incidence (I1–I3), order or betweenness (II1–II4, including Pasch's axiom), congruence (III1–III5, the last being the side-angle-side criterion), continuity (Archimedes' axiom and the line-completeness axiom, or more economically Dedekind's axiom), and the parallel axiom. Neutral (or absolute) geometry is the theory obtained from all of these except the parallel axiom. A model of neutral geometry with full (Dedekind) continuity is a special kind of Hilbert plane; we shall see that, up to isomorphism and scaling, there are exactly two of them: the Euclidean plane and the hyperbolic plane.

The exterior angle theorem

Theorem 1.1 (Euclid I.16, neutral). An exterior angle of a triangle is strictly greater than either remote interior angle.

Proof. Let ABC be a triangle and extend BC beyond C to D. We show ∠ACD > ∠BAC. Let M be the midpoint of AC, extend BM beyond M to E with BM = ME. Triangles AMB and CME are congruent by SAS (vertical angles at M are equal), so ∠MCE = ∠MAB = ∠BAC. The point E lies in the interior of ∠ACD (this uses the betweenness axioms), so ∠ACD > ∠ACE = ∠BAC. Applying the same argument to the vertical angle at C gives ∠ACD > ∠ABC. ∎

Corollary 1.2. In any triangle, the sum of any two angles is less than π. Through a point P not on a line ℓ there exists at least one line parallel to ℓ (drop the perpendicular PQ to ℓ, then erect the perpendicular m to PQ at P; if m met ℓ at R, triangle PQR would have two right angles).

Note that on the sphere both conclusions fail: there are triangles with two right angles. This is why the sphere is not a model of neutral geometry — on the sphere, lines are not infinitely extendable in Hilbert's sense, and the betweenness axioms fail.

The Saccheri–Legendre theorem

Lemma 1.3 (Legendre). For every triangle ABC there is a triangle with the same angle sum, one of whose angles is at most ½∠A.

Proof. Let D be the midpoint of BC and extend AD beyond D to E with AD = DE. Triangles ADC and EDB are congruent by SAS, so ∠DEB = ∠DAC and ∠EBD = ∠ACD. In triangle ABE the angle at B is ∠ABC + ∠CBE = ∠B + ∠C, while the angles at A and E are ∠BAE and ∠AEB = ∠DAC, whose sum is ∠BAE + ∠DAC = ∠A. Thus triangle ABE has angle sum ∠A + ∠B + ∠C, and one of its two angles at A and E is at most ½∠A. ∎

Theorem 1.4 (Saccheri 1733, Legendre 1794). In neutral geometry the angle sum of every triangle is at most π.

Proof. Suppose triangle ABC has angle sum π + ε with ε > 0. Applying Lemma 1.3 n times produces a triangle with the same angle sum and an angle of at most ∠A/2ⁿ. By the Archimedean property of real numbers choose n with ∠A/2ⁿ < ε. The remaining two angles of that triangle then sum to more than π, contradicting Corollary 1.2. ∎

The defect of a triangle is δ(ABC) = π − (∠A + ∠B + ∠C) ≥ 0. It is additive: if a cevian from A divides ABC into two triangles T₁, T₂, then δ(ABC) = δ(T₁) + δ(T₂), because the two new angles at the foot of the cevian sum to π. Additivity is the first hint that the defect behaves like an area — a fact made exact in Lesson 9.

Saccheri and Lambert quadrilaterals

A Saccheri quadrilateral ABCD has base AB, right angles at A and B, and equal legs AD = BC. By congruence its summit angles at C and D are equal; by Theorem 1.4 (cut along a diagonal) each is at most a right angle. Saccheri considered three hypotheses — the right angle, the obtuse angle and the acute angle — disposed of the obtuse one using the infinitude of lines, and spent many pages deriving consequences of the acute hypothesis before declaring it "repugnant to the nature of the straight line". In fact he had derived a large part of hyperbolic geometry. Johann Heinrich Lambert (Theorie der Parallellinien, written 1766, published 1786) studied quadrilaterals with three right angles, observed that under the acute hypothesis the defect of a triangle is proportional to its area, and speculated that the acute hypothesis would hold on "an imaginary sphere" — a sphere of imaginary radius iR, for which R² is replaced by −R² in spherical formulas. This is precisely the relationship between spherical and hyperbolic trigonometry.

Equivalents of the parallel postulate

Theorem 1.5. In neutral geometry the following are equivalent:

  1. Playfair's axiom (uniqueness of parallels).
  2. Some triangle has angle sum π.
  3. Every triangle has angle sum π.
  4. A rectangle exists.
  5. There exist two similar triangles which are not congruent (Wallis).
  6. Through any three non-collinear points there is a circle.
  7. The Pythagorean theorem holds for all right triangles.

Sketch of (2) ⇒ (3). From a triangle of defect 0, the additivity of the defect shows that both right triangles obtained by dropping an altitude have defect 0. Two copies of such a right triangle form a rectangle; stacking rectangles (Archimedes' axiom) yields arbitrarily large rectangles, hence arbitrarily large right triangles of defect 0; any right triangle sits inside such a large one, so by additivity and nonnegativity it too has defect 0; every triangle splits into two right triangles. The remaining implications are standard and are left to the problems.

The discovery

Carl Friedrich Gauss had become convinced by about 1817 that the parallel postulate was unprovable, but published nothing. Nikolai Lobachevsky presented his geometry at Kazan University in February 1826 and published it in 1829–1830 in the Kazan Messenger. János Bolyai, independently, published "Appendix scientiam spatii absolute veram exhibens" in 1832 as an appendix to his father Farkas Bolyai's textbook Tentamen. Gauss, on receiving it, wrote to Farkas that to praise it would be to praise himself, since it coincided with his own meditations of the past thirty to thirty-five years. Neither Lobachevsky nor Bolyai could prove that their geometry was consistent. That was achieved by Eugenio Beltrami in 1868, who exhibited a model inside Euclidean geometry, and the models of Felix Klein (1871) and Henri Poincaré (1882) followed. A model shows relative consistency: hyperbolic geometry is consistent if Euclidean geometry (equivalently, the theory of real numbers) is.

✏️ Your Turn

(a) In neutral geometry, a triangle is divided by a cevian into two triangles of defects 0.07 and 0.12 radians. What is the defect of the original triangle?
(b) Explain why Lemma 1.3 cannot be applied on the sphere to deduce an angle sum bound there.
(c) Show that if a Saccheri quadrilateral has right summit angles, then a rectangle exists, and deduce that the parallel postulate holds.

Answers: (a) 0.19 radians, by additivity: the two angles at the foot of the cevian sum to π, so δ = δ₁ + δ₂. (b) The construction relies on the exterior angle theorem (via Corollary 1.2), which fails on the sphere because segments cannot be extended indefinitely without returning; for instance a triangle with three right angles has two angles summing to π. (c) A Saccheri quadrilateral with right summit angles has four right angles, i.e. it is a rectangle; by Theorem 1.5, (4) ⇒ (1).

─────────────────────────────────
Lesson 2: Spherical and Elliptic Geometry
─────────────────────────────────

📌 Key idea of this section:

        S² = { x ∈ ℝ³ : |x| = 1 },   d(x, y) = arccos(x · y)
        Geodesics are great circles;  Isom(S²) = O(3)
        Girard:  Area(Δ) = α + β + γ − π

The sphere as a metric space

On the unit sphere S² ⊂ ℝ³ the intrinsic distance between points x and y is the angle between them, d(x, y) = arccos(x · y) ∈ [0, π]. A great circle is the intersection of S² with a plane through the origin. Every pair of distinct non-antipodal points lies on a unique great circle, and the shorter of its two arcs is the unique shortest path between them; antipodal points are joined by infinitely many shortest arcs, all of length π. Any two distinct great circles meet in exactly two antipodal points, so there are no parallel lines at all.

Theorem 2.1. Every isometry of S² is the restriction of an orthogonal linear map; Isom(S²) = O(3), and the orientation-preserving isometries form SO(3).

Proof. An isometry T of S² preserves x · y = cos d(x, y). Extend T to ℝ³ by T(rx) = rT(x) for r ≥ 0. Then the extension preserves inner products, and a map of ℝ³ fixing 0 and preserving inner products is linear (expand |T(x + y) − T(x) − T(y)|² and use bilinearity). Hence T ∈ O(3). ∎

Shortest paths are great circles

Let x, y ∈ S² with d(x, y) = θ < π, and rotate so that x = (0, 0, 1) and y lies at polar angle θ in spherical coordinates (φ, λ) with φ the polar angle. The metric is ds² = dφ² + sin²φ dλ², so for any curve from x to y, length = ∫ √(φ′² + sin²φ λ′²) dt ≥ ∫ |φ′| dt ≥ θ, with equality iff λ is constant and φ is monotone, i.e. iff the curve is the meridian arc. This proves both the distance formula and that geodesics are great circles.

Lunes and Girard's theorem

A lune (or digon) of angle θ is the region between two half great circles from a point to its antipode, meeting at angle θ. Since lunes of angles θ₁, θ₂ with a common edge combine to a lune of angle θ₁ + θ₂, and the full sphere is the lune of angle 2π, the area of a lune of angle θ is (θ/2π) · 4π = 2θ.

Theorem 2.2 (Harriot 1603, Girard 1629). A spherical triangle with angles α, β, γ on the unit sphere has area α + β + γ − π. On a sphere of radius R the area is R²(α + β + γ − π).

Proof. Let the triangle Δ have vertices A, B, C and let Δ′ = −Δ be its antipodal triangle, which has the same area. The three great circles through the sides divide the sphere into eight triangles. The two great circles through A determine a pair of antipodal lunes of angle α, of total area 4α; one contains Δ and the other contains Δ′. Doing the same at B and C gives three pairs of lunes whose total area is 4(α + β + γ). These six lunes cover the sphere, covering Δ and Δ′ three times each and every other point exactly once. Hence 4(α + β + γ) = 4π + 2 · Area(Δ) + 2 · Area(Δ′) = 4π + 4 Area(Δ), which gives Area(Δ) = α + β + γ − π. ∎

Corollary 2.3. A spherical n-gon (geodesic sides, simply connected) with interior angles θ₁, …, θₙ has area θ₁ + ⋯ + θₙ − (n − 2)π. In particular two spherical triangles with the same angles have the same area: there are no similarities on the sphere other than isometries.

Worked example. The octant triangle with vertices (1,0,0), (0,1,0), (0,0,1) has three right angles. Its area is 3π/2 − π = π/2, one eighth of 4π, as it must be.

The elliptic plane

Identifying antipodal points of S² gives the real projective plane ℝP² with the quotient metric, called the elliptic plane. Lines (images of great circles) have length π; any two distinct lines meet in exactly one point, so the elliptic plane satisfies the incidence axioms of a projective plane. Its total area is 2π. It is non-orientable: a neighbourhood of a line is a Möbius band. Felix Klein's term "elliptic geometry" refers to this space; Riemann, in 1854, had in mind both the sphere and positively curved spaces in general. Elliptic geometry fails the order axioms (three points on a line do not have a well-defined "between"), which is why it is not a Hilbert plane.

Duality and the polar triangle

For a spherical triangle ABC with unit position vectors A, B, C, the polar triangle A′B′C′ is defined by A′ = (B × C)/|B × C|, oriented so that A′ · A > 0, and similarly for B′, C′. The sides of the polar triangle are a′ = π − α, b′ = π − β, c′ = π − γ, and its angles are α′ = π − a, β′ = π − b, γ′ = π − c. Polar duality converts every theorem about sides into one about angles; we use it in Lesson 3 to derive the second law of cosines.

✏️ Your Turn

(a) A spherical triangle on a sphere of radius 3 has angles 100°, 80° and 60°. Find its area.
(b) What is the area of a spherical pentagon on the unit sphere all of whose angles are 2π/3?
(c) Show that a spherical triangle cannot have angle sum 3π or more. What is the maximum possible area of a spherical triangle, and is it attained?

Answers: (a) The excess is 240° − 180° = 60° = π/3, so the area is 9 · π/3 = 3π. (b) 5 · 2π/3 − 3π = π/3. (c) Each angle of a (proper) spherical triangle is less than π, so the sum is less than 3π and the area is less than 2π — half the sphere. The supremum 2π is approached by triangles degenerating to a hemisphere (three points on one great circle) but is not attained by a proper triangle.

─────────────────────────────────
Lesson 3: Spherical Trigonometry
─────────────────────────────────

📌 Key idea of this section:

        cos c = cos a cos b + sin a sin b cos γ          (first law of cosines)
        cos γ = −cos α cos β + sin α sin β cos c          (second law of cosines)
        sin α / sin a = sin β / sin b = sin γ / sin c     (law of sines)

Conventions

A spherical triangle on the unit sphere has vertices A, B, C (unit vectors), sides a = d(B, C), b = d(C, A), c = d(A, B), all in (0, π), and angles α, β, γ at A, B, C. The angle γ at C is the angle between the unit tangent vectors at C pointing along the sides towards A and towards B.

Theorem 3.1 (first law of cosines). cos c = cos a cos b + sin a sin b cos γ.

Proof. The unit tangent vector at C pointing towards A is u = (A − (A · C)C)/|A − (A · C)C| = (A − cos b · C)/sin b, since |A − cos b · C|² = 1 − 2cos²b + cos²b = sin²b. Similarly v = (B − cos a · C)/sin a. Then

        cos γ = u · v = (A·B − cos a (A·C) − cos b (B·C) + cos a cos b) / (sin a sin b)
                     = (cos c − cos a cos b) / (sin a sin b),

which rearranges to the stated formula. ∎

Theorem 3.2 (second law of cosines). cos γ = −cos α cos β + sin α sin β cos c.

Proof. Apply Theorem 3.1 to the polar triangle, whose sides are π − α, π − β, π − γ and whose angle opposite side π − γ is π − c: cos(π − γ) = cos(π − α)cos(π − β) + sin(π − α)sin(π − β)cos(π − c). Since cos(π − x) = −cos x and sin(π − x) = sin x, this is −cos γ = cos α cos β − sin α sin β cos c. ∎

The second law has no Euclidean analogue: it determines the sides from the angles, reflecting the fact that the angles of a spherical triangle determine it up to isometry.

Theorem 3.3 (law of sines). sin α / sin a = sin β / sin b = sin γ / sin c.

Proof. From Theorem 3.1, sin²γ = 1 − cos²γ = (sin²a sin²b − (cos c − cos a cos b)²)/(sin²a sin²b). Expanding, the numerator equals 1 − cos²a − cos²b − cos²c + 2 cos a cos b cos c, which is symmetric in a, b, c; call it Q. Hence sin²γ / sin²c = Q/(sin²a sin²b sin²c), which is symmetric, and all three ratios agree (all quantities are positive). In fact Q = det[A B C]², the squared volume of the parallelepiped spanned by A, B, C. ∎

Right triangles and the Euclidean limit

If γ = π/2 the first law gives the spherical Pythagorean theorem cos c = cos a cos b. On a sphere of radius R, with sides a, b, c measured as lengths, it reads cos(c/R) = cos(a/R) cos(b/R). Expanding cos x = 1 − x²/2 + x⁴/24 − ⋯ gives

        1 − c²/(2R²) + c⁴/(24R⁴) = 1 − (a² + b²)/(2R²) + (a⁴ + 6a²b² + b⁴)/(24R⁴) + O(R⁻⁶),

so c² = a² + b² − a²b²/(3R²) + O(R⁻⁴). As R → ∞ the Euclidean theorem is recovered, and the leading correction shows that the hypotenuse is shorter than its Euclidean value — the spherical surface is "more cramped" than the plane. Similar expansions recover the Euclidean laws of sines and cosines.

Equilateral triangles

For an equilateral spherical triangle with side s and angle α, the first law gives cos s = cos²s + sin²s cos α, so cos α = (cos s − cos²s)/sin²s = cos s/(1 + cos s). As s → 0, cos α → 1/2 and α → π/3; as s → π/2, α → π/2 (the octant triangle); as s → 2π/3, cos α → −1, so α → π and the triangle degenerates to a great circle.

Application: great-circle navigation

On a sphere of radius R, points with latitude φ₁, φ₂ and longitude difference Δλ form, together with the North Pole, a triangle with sides π/2 − φ₁, π/2 − φ₂ and angle Δλ at the pole. The first law of cosines gives the great-circle distance d by

        cos(d/R) = sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos Δλ.

Worked example. Two points on the parallel 60°N whose longitudes differ by 90°. Then cos(d/R) = (√3/2)² + (1/2)² · 0 = 3/4, so d/R = arccos(0.75) ≈ 0.7227 rad ≈ 41.41°. With R = 6371 km, d ≈ 4605 km. Travelling along the parallel instead covers an arc of radius R cos 60° = R/2 through 90°, a distance πR/4 ≈ 5004 km. The great-circle route is about 8% shorter; it bends poleward, which is why transatlantic and transpacific flights appear "curved" on Mercator charts. For numerical work at small distances the haversine form hav(d/R) = hav(Δφ) + cos φ₁ cos φ₂ hav(Δλ), with hav x = sin²(x/2), avoids the loss of precision of arccos near 1.

Spherical excess from sides

The area can be computed from the sides directly by L'Huilier's theorem: with s = (a + b + c)/2 and E = α + β + γ − π,

        tan(E/4) = √( tan(s/2) tan((s − a)/2) tan((s − b)/2) tan((s − c)/2) ).

For the octant triangle a = b = c = π/2, s = 3π/4, and tan(E/4) = √(tan(3π/8) tan³(π/8)) = tan(π/8) since tan(3π/8) tan(π/8) = 1. So E = π/2, as before.

✏️ Your Turn

(a) A right spherical triangle on the unit sphere has legs a = b = π/3. Find the hypotenuse c.
(b) Use the second law of cosines to find the side s of an equilateral spherical triangle all of whose angles are 2π/5. (Its vertices are adjacent vertices of the spherical icosahedron.)
(c) Find the great-circle distance on the unit sphere between two points on the equator whose longitudes differ by Δλ, and check your formula.

Answers: (a) cos c = cos²(π/3) = 1/4, so c = arccos(1/4) ≈ 1.3181. (b) cos α = −cos²α + sin²α cos s gives cos s = (cos α + cos²α)/sin²α = cos α/(1 − cos α). With cos(2π/5) = (√5 − 1)/4 ≈ 0.30902, cos s ≈ 0.30902/0.69098 ≈ 0.44721 = 1/√5, so s = arccos(1/√5) ≈ 1.1071 rad ≈ 63.43°, the angle subtended by an edge of the regular icosahedron at its centre. (c) With φ₁ = φ₂ = 0, cos d = cos Δλ, so d = Δλ for Δλ ∈ [0, π], as expected since the equator is a great circle.

─────────────────────────────────
Lesson 4: The Hyperboloid Model
─────────────────────────────────

📌 Key idea of this section:

        ⟨x, y⟩ = x₁y₁ + x₂y₂ − x₃y₃
        H² = { x : ⟨x, x⟩ = −1, x₃ > 0 },   cosh d(x, y) = −⟨x, y⟩
        Isom(H²) = O⁺(2,1);   geodesics = H² ∩ (planes through 0)

Minkowski space

Equip ℝ³ with the symmetric bilinear form ⟨x, y⟩ = x₁y₁ + x₂y₂ − x₃y₃ of signature (2,1); this is three-dimensional Minkowski space ℝ²˒¹. A vector x is spacelike, lightlike or timelike according as ⟨x, x⟩ > 0, = 0 or < 0. The set ⟨x, x⟩ = −1 is a hyperboloid of two sheets; its upper sheet

        H² = { x ∈ ℝ³ : x₁² + x₂² − x₃² = −1,  x₃ > 0 }

is the hyperboloid model of the hyperbolic plane. Its formal analogy with the sphere x₁² + x₂² + x₃² = 1 is the precise version of Lambert's "sphere of imaginary radius".

The metric

The tangent space at p ∈ H² is T_pH² = { v : ⟨p, v⟩ = 0 } (differentiate ⟨x, x⟩ = −1). Lemma 4.1: if p is timelike, then ⟨·,·⟩ is positive definite on p^⊥. Proof: write v = (w, v₃) and p = (q, p₃) with w, q ∈ ℝ². The condition ⟨v, p⟩ = 0 says w · q = v₃p₃, so v₃ = (w · q)/p₃. For p ∈ H² we have |q|² = p₃² − 1 < p₃², so if w ≠ 0 then v₃² ≤ |w|²|q|²/p₃² < |w|² and ⟨v, v⟩ = |w|² − v₃² > 0; if w = 0 then v₃ = 0 and v = 0. ∎

Hence the restriction of ⟨·,·⟩ to the tangent planes is a Riemannian metric on H². In the parametrisation x = (sinh r cos θ, sinh r sin θ, cosh r) it becomes

        ds² = dr² + sinh²r dθ²,

the hyperbolic analogue of the spherical metric dφ² + sin²φ dλ² in polar coordinates.

The isometry group

Let O(2,1) be the group of linear maps preserving ⟨·,·⟩, and O⁺(2,1) the subgroup of index 2 preserving the upper sheet. These act on H² by isometries. The stabiliser of p₀ = (0, 0, 1) contains O(2) acting on the first two coordinates, and the action is transitive: the boost

        B_t = [ cosh t   0   sinh t ]
              [   0      1     0    ]
              [ sinh t   0   cosh t ]

maps p₀ to (sinh t, 0, cosh t), and composing with rotations reaches every point. Theorem 4.2: Isom(H²) = O⁺(2,1). (An isometry fixing p₀ is determined by its derivative at p₀, an element of O(2), because isometries map geodesics to geodesics; combining with transitivity, every isometry is the restriction of a linear map.) The identity component SO⁺(2,1) consists of the orientation-preserving isometries; it is isomorphic to PSL(2,ℝ), as Lesson 5 makes explicit.

Geodesics and distance

For p ∈ H² and a unit tangent vector v ∈ T_pH², the curve γ(t) = cosh t · p + sinh t · v satisfies ⟨γ, γ⟩ = −cosh²t + sinh²t = −1 and ⟨γ′, γ′⟩ = −sinh²t + cosh²t = 1, so it is a unit-speed curve in H². It is the intersection of H² with the plane spanned by p and v, and it is the fixed set of the Lorentzian reflection in that plane, which belongs to O⁺(2,1). The fixed-point set of an isometric reflection is a union of geodesics, and through every point in every direction there is exactly one such curve. Hence:

Theorem 4.3. The geodesics of H² are exactly the nonempty intersections of H² with planes through the origin. The hyperbolic distance satisfies cosh d(x, y) = −⟨x, y⟩.

Proof of the distance formula. Both sides are invariant under O⁺(2,1), so we may take x = p₀ and y = (sinh t, 0, cosh t). Then −⟨x, y⟩ = cosh t. That the geodesic arc of length t is length-minimising follows from the polar metric: any curve from p₀ to a point at radius t has length ∫ √(r′² + sinh²r θ′²) ≥ ∫ |r′| ≥ t. ∎

A plane through 0 meets H² if and only if it has the form n^⊥ for a spacelike vector n (orthogonality with respect to ⟨·,·⟩). Thus lines of H² correspond to spacelike unit vectors n up to sign — the hyperbolic analogue of the poles of great circles. Two lines n₁^⊥, n₂^⊥ intersect, are asymptotically parallel (meet on the light cone) or are ultraparallel according as |⟨n₁, n₂⟩| < 1, = 1, or > 1; in the first case the angle θ between them satisfies cos θ = |⟨n₁, n₂⟩|, and in the last case their common perpendicular has length ℓ with cosh ℓ = |⟨n₁, n₂⟩|.

Failure of the parallel postulate

Take the line ℓ = H² ∩ {x₁ = 0} (normal n = e₁) and the point p = (sinh t, 0, cosh t) at distance t > 0 from it. The lines through p correspond to unit spacelike normals n with ⟨n, p⟩ = 0; those with |⟨n, e₁⟩| ≥ 1 do not meet ℓ. There are infinitely many of them, bounded by two asymptotic parallels. Playfair's axiom fails, while all axioms of neutral geometry hold (they can be verified using the transitivity of O⁺(2,1) on points, on unit tangent vectors and on flags).

The connection with special relativity

In special relativity with c = 1, the four-velocities of particles are the future unit timelike vectors of Minkowski space ℝ³˒¹, which form the hyperboloid model of H³. The hyperbolic distance between two four-velocities is their relative rapidity: if u, w have relative speed v, then −⟨u, w⟩ = γ(v) = 1/√(1 − v²) = cosh φ with v = tanh φ. Collinear velocities combine by adding rapidities, which is the relativistic velocity-addition law tanh(φ₁ + φ₂) = (v₁ + v₂)/(1 + v₁v₂). The hyperbolic geometry of velocity space was recognised by Sommerfeld (1909) and Varićak (1910). It also underlies the Thomas–Wigner rotation: composing boosts around a closed loop in velocity space produces a spatial rotation whose angle is the angle defect of the corresponding hyperbolic triangle.

✏️ Your Turn

(a) Verify that x = (2, 2, 3) lies on H², and compute its distance from p₀ = (0, 0, 1).
(b) Compute d(x, y) numerically for x = (2, 2, 3) and y = (sinh 1, 0, cosh 1).
(c) Two particles move in opposite directions, each at speed 0.6 relative to the laboratory. Using rapidities, find their relative speed.

Answers: (a) 4 + 4 − 9 = −1 and x₃ > 0. cosh d = −⟨x, p₀⟩ = 3, so d = arccosh 3 = ln(3 + 2√2) ≈ 1.7627. (b) −⟨x, y⟩ = 3 cosh 1 − 2 sinh 1 ≈ 4.62924 − 2.35040 = 2.27884, so d ≈ arccosh(2.27884) ≈ 1.4648. (c) Each rapidity is artanh 0.6 = ½ ln 4 = ln 2; the relative rapidity is 2 ln 2 = ln 4, so the relative speed is tanh(ln 4) = (16 − 1)/(16 + 1) = 15/17 ≈ 0.882, agreeing with (0.6 + 0.6)/(1 + 0.36) = 1.2/1.36 = 15/17.

─────────────────────────────────
Lesson 5: The Upper Half-Plane
─────────────────────────────────

📌 Key idea of this section:

        H = { z = x + iy : y > 0 },    ds² = (dx² + dy²) / y²
        cosh d(z, w) = 1 + |z − w|² / (2 Im z · Im w)
        PSL(2,ℝ) acts by z ↦ (az + b)/(cz + d),  ad − bc = 1

The metric

The upper half-plane model is H = { x + iy : y > 0 } with Riemannian metric ds² = (dx² + dy²)/y², i.e. |dz|/Im z. The length of a piecewise C¹ curve γ(t) = x(t) + iy(t), t ∈ [0, 1], is

        L(γ) = ∫₀¹ √(x′(t)² + y′(t)²) / y(t) dt,

and d(z, w) is the infimum of L(γ) over curves from z to w. The metric is conformal (a positive multiple of the Euclidean metric), so hyperbolic angles equal Euclidean angles. Near the real axis Euclidean-small segments are hyperbolically long: the real axis together with ∞ is the ideal boundary ∂H = ℝ ∪ {∞}, at infinite distance from every point.

Vertical geodesics

Proposition 5.1. For 0 < a < b, d(ia, ib) = ln(b/a), and the vertical segment is the unique shortest curve.

Proof. For any curve from ia to ib, L(γ) = ∫ √(x′² + y′²)/y dt ≥ ∫ |y′|/y dt ≥ ∫ y′/y dt = ln(b/a). Equality in the first inequality requires x′ ≡ 0 and in the second y′ ≥ 0, so the minimiser is the vertical segment, monotonically parametrised. ∎

Isometries

Proposition 5.2. For g = (a b; c d) ∈ SL(2,ℝ), the map g(z) = (az + b)/(cz + d) is an isometry of H. The kernel of the action is {±I}, so PSL(2,ℝ) = SL(2,ℝ)/{±I} acts faithfully.

Proof. Multiplying numerator and denominator by the conjugate of cz + d and using ad − bc = 1 gives Im g(z) = Im z / |cz + d|², so g preserves H. Also g′(z) = 1/(cz + d)². Hence |g′(z)| / Im g(z) = (1/|cz + d|²) · (|cz + d|² / Im z) = 1/Im z, so g pulls the metric |dw|/Im w back to |dz|/Im z. ∎

The group acts transitively: the matrix (√y  x/√y; 0  1/√y) sends i to x + iy. The stabiliser of i is PSO(2), the image of the rotations k_θ = (cos θ  sin θ; −sin θ  cos θ); since k_θ′(i) = 1/(cos θ − i sin θ)² = e^{2iθ}, it rotates the tangent plane at i by 2θ. Consequently PSL(2,ℝ) acts simply transitively on the unit tangent bundle of H, which is therefore diffeomorphic to PSL(2,ℝ). The full isometry group consists of PSL(2,ℝ) together with the orientation-reversing maps z ↦ (−az̄ + b)/(−cz̄ + d); it is isomorphic to PGL(2,ℝ), and its identity component PSL(2,ℝ) is isomorphic to SO⁺(2,1).

Geodesics

Theorem 5.3. The geodesics of H are the vertical half-lines {Re z = c} and the semicircles centred on the real axis.

Proof. Möbius maps send generalised circles to generalised circles, preserve angles, and preserve ℝ ∪ {∞}; hence elements of PSL(2,ℝ) send the imaginary axis, a generalised circle orthogonal to ℝ, to a generalised circle orthogonal to ℝ — a vertical line or a semicircle centred on ℝ. Conversely, any such curve with endpoints p < q is the image of the imaginary axis under z ↦ (qz + p)/(z + 1), which has determinant q − p > 0 and sends 0 ↦ p and ∞ ↦ q (vertical lines are images under translations). By Proposition 5.1 and isometry invariance, these are exactly the geodesics. ∎

The geodesic equations confirm this. The Christoffel symbols of g = y⁻²(dx² + dy²) are Γˣ_xy = −1/y, Γʸ_xx = 1/y, Γʸ_yy = −1/y, the others zero, so geodesics satisfy

        ẍ − (2/y) ẋ ẏ = 0,          ÿ + (ẋ² − ẏ²)/y = 0.

The first equation says d/dt(ẋ/y²) = 0, so ẋ = C y². With unit speed ẋ² + ẏ² = y², this yields ẏ² = y²(1 − C²y²). If C = 0 we get vertical lines; otherwise dx/dy = ±Cy/√(1 − C²y²), whose solutions satisfy (x − x₀)² + y² = 1/C², semicircles of radius 1/|C| centred on the real axis.

The distance formula

Theorem 5.4. For z, w ∈ H, cosh d(z, w) = 1 + |z − w|² / (2 Im z Im w). Equivalently, sinh(d/2) = |z − w| / (2√(Im z Im w)), and tanh(d/2) = |z − w| / |z − w̄|.

Proof. The right-hand side is invariant under PSL(2,ℝ): from g(z) − g(w) = (z − w)/((cz + d)(cw + d)) and Im g(z) = Im z/|cz + d|², the factors |cz + d|²|cw + d|² cancel. Applying an isometry, we may assume z = ia, w = ib with a < b. Then 1 + (b − a)²/(2ab) = (a² + b²)/(2ab) = ½(b/a + a/b) = cosh ln(b/a), which by Proposition 5.1 is cosh d(z, w). The other forms follow from cosh d = 1 + 2 sinh²(d/2) and from |z − w̄|² = |z − w|² + 4 Im z Im w. ∎

Worked example. d(i, 2 + i): cosh d = 1 + 4/2 = 3, so d = arccosh 3 = ln(3 + 2√2) = 2 ln(1 + √2) ≈ 1.7627. The geodesic joining the points is the arc of the semicircle |z − 1| = √2; the horizontal segment between them, of hyperbolic length 2, is longer.

Hyperbolic circles and horocycles

The hyperbolic circle of centre i and radius r is the Euclidean circle with centre i cosh r and radius sinh r: it is invariant under the rotations about i, hence (being the image of a circle in the disk model) a Euclidean circle symmetric about the imaginary axis, and it passes through ieʳ and ie⁻ʳ. The horizontal lines Im z = c are horocycles centred at ∞: they are orthogonal to all geodesics ending at ∞ and are limits of circles whose centres recede to ∞. Every Euclidean circle in H tangent to ℝ is a horocycle centred at the point of tangency. Two points on the horocycle Im z = 1 separated horizontally by Euclidean distance L are at distance L along the horocycle but at hyperbolic distance arccosh(1 + L²/2) = 2 arsinh(L/2), which is about 2 ln L for large L.

✏️ Your Turn

(a) Compute d(2i, 3 + 6i).
(b) Find the hyperbolic circle of centre 3i and radius ln 2 as a Euclidean circle.
(c) Which geodesic passes through 1 + i and 3 + i? Give its endpoints on ℝ.

Answers: (a) cosh d = 1 + (9 + 16)/(2 · 2 · 6) = 1 + 25/24 = 49/24, so d = arccosh(49/24) ≈ 1.3407. (b) The circle of centre i and radius r has Euclidean centre i cosh r and radius sinh r; applying the isometry z ↦ 3z gives centre 3i cosh(ln 2) = 15i/4 and radius 3 sinh(ln 2) = 9/4. Check: the circle passes through 15i/4 ± 9i/4, i.e. 6i and 3i/2, which are both at distance ln 2 from 3i. (c) The centre x₀ on ℝ is equidistant from both points, so x₀ = 2, and the radius is |1 + i − 2| = √2. The endpoints are 2 − √2 and 2 + √2.

─────────────────────────────────
Lesson 6: Möbius Transformations and the Classification of Isometries
─────────────────────────────────

📌 Key idea of this section:

        For g ∈ PSL(2,ℝ), g ≠ id:
          |tr g| < 2   elliptic     one fixed point in H;  rotation by θ with |tr g| = 2|cos(θ/2)|
          |tr g| = 2   parabolic    one fixed point on ∂H
          |tr g| > 2   hyperbolic   two fixed points on ∂H;  translation length ℓ, |tr g| = 2cosh(ℓ/2)

Fixed points

The trace of an element of PSL(2,ℝ) is defined up to sign, so |tr g| is a well-defined conjugacy invariant. The fixed points of g(z) = (az + b)/(cz + d) satisfy cz² + (d − a)z − b = 0. If c ≠ 0,

        z = ( (a − d) ± √((a + d)² − 4) ) / (2c),

using (d − a)² + 4bc = (a + d)² − 4(ad − bc) = (tr g)² − 4. So g has two real fixed points if |tr g| > 2, a double real fixed point if |tr g| = 2, and a conjugate pair of non-real fixed points — exactly one in H — if |tr g| < 2. If c = 0, then ∞ is fixed and the other fixed point is b/(d − a) when a ≠ d.

Normal forms

Theorem 6.1. Every g ∈ PSL(2,ℝ) other than the identity is conjugate in PSL(2,ℝ) to exactly one of:

        elliptic:     k_φ(z) = (cos φ · z + sin φ)/(−sin φ · z + cos φ),   0 < φ < π
        parabolic:    z ↦ z + 1   or   z ↦ z − 1
        hyperbolic:   z ↦ λz,   λ > 1

The elliptic normal form is rotation about i through angle 2φ; the hyperbolic normal form translates along the imaginary axis (its axis) by ℓ = ln λ, and its matrix diag(√λ, 1/√λ) has trace √λ + 1/√λ = 2cosh(ℓ/2). The two parabolic normal forms are not conjugate in PSL(2,ℝ); they are conjugate by z ↦ −z̄, which reverses orientation.

Proof. If g has a fixed point in H, conjugate it to i; then g lies in the stabiliser PSO(2). If g has a unique fixed point on ∂H, conjugate it to ∞; then g(z) = αz + β, and α = 1 (otherwise β/(1 − α) would be a second fixed point), so g(z) = z + β with β ≠ 0, and conjugating by z ↦ z/|β| gives z ↦ z ± 1. If g has two boundary fixed points, conjugate them to 0 and ∞; then g(z) = λz with λ > 0, λ ≠ 1, and conjugating by z ↦ −1/z if necessary gives λ > 1. ∎

Dynamics. Elliptic elements are rotations; they preserve the hyperbolic circles about their fixed point. Parabolic elements preserve each horocycle at their fixed point and slide points along it. Hyperbolic elements preserve their axis, translating along it by ℓ; points off the axis move along hypercycles (equidistant curves), which are Euclidean rays from 0 when the axis is the imaginary axis. For a hyperbolic g the translation length is the minimum displacement, ℓ(g) = min over z ∈ H of d(z, gz), and 2cosh(ℓ/2) = |tr g|.

Worked example. g = (2 1; 1 1) has det 1 and tr 3 > 2, so g is hyperbolic with translation length ℓ = 2 arccosh(3/2) = 2 ln((3 + √5)/2) ≈ 1.9248. Its fixed points solve z² − z − 1 = 0, namely z = (1 ± √5)/2, the golden ratio φ and its conjugate. Since (3 + √5)/2 = φ², ℓ = 4 ln φ.

Cross-ratio and distance

The cross-ratio [z₁, z₂; z₃, z₄] = (z₁ − z₃)(z₂ − z₄) / ((z₁ − z₄)(z₂ − z₃)) is invariant under all Möbius maps of the Riemann sphere. Proposition 6.2: if the geodesic through z, w has ideal endpoints p and q, with p on the side of z and q on the side of w, then

        d(z, w) = ln | (w − p)(z − q) / ((z − p)(w − q)) |.

Proof: map p ↦ 0 and q ↦ ∞, so that z = ia and w = ib with a < b. The expression becomes (ib/ia) · (z − q)/(w − q), whose limit as q → ∞ is b/a, and ln(b/a) = d(z, w). By invariance of the cross-ratio this holds in general. ∎

Discreteness and Jørgensen's inequality

A subgroup Γ of PSL(2,ℝ) is discrete if it has no accumulation points in the topology of matrix entries. Not every group generated by isometries is discrete: the group generated by h(z) = 2z and t(z) = z + 1 contains h⁻ⁿ t hⁿ, which is z ↦ z + 2⁻ⁿ, for every n, so it is not discrete. A sharp criterion is Jørgensen's inequality (1976): if A, B ∈ SL(2,ℂ) generate a non-elementary discrete group, then

        |tr²A − 4| + |tr(ABA⁻¹B⁻¹) − 2| ≥ 1.

Results of this kind are closely related to the Margulis lemma and the collar lemma, which guarantee embedded collars around short closed geodesics and embedded cusp neighbourhoods on every hyperbolic surface; they underlie the thick–thin decomposition.

Trace identities

For A, B ∈ SL(2,ℝ) one has tr A tr B = tr AB + tr AB⁻¹ (from the Cayley–Hamilton theorem B + B⁻¹ = (tr B) I), and the Fricke identity

        tr²A + tr²B + tr²AB − tr A · tr B · tr AB = 2 + tr[A, B].

The commutator [A, B] = ABA⁻¹B⁻¹ is parabolic with trace −2 exactly in the situation where A and B are the holonomies of a complete hyperbolic once-punctured torus; with x = tr A, y = tr B, z = tr AB this becomes x² + y² + z² = xyz. Its integer solutions, starting from (3, 3, 3), are three times the solutions of Markov's equation a² + b² + c² = 3abc, which govern the Markov–Lagrange spectrum in Diophantine approximation — a striking bridge between hyperbolic geometry and number theory.

✏️ Your Turn

(a) Classify g = (3 −2; 2 −1) and find its fixed point(s).
(b) Classify g = (1 −1; 1 0). Find the fixed point in H and the rotation angle.
(c) Find the translation length of g(z) = 9z, and of (5 2; 2 1).

Answers: (a) det = −3 + 4 = 1 and tr = 2, so g is parabolic (g ≠ ±I). Fixed points: 2z² − 4z + 2 = 0, i.e. z = 1 (double). (b) det = 0 + 1 = 1 and tr = 1 < 2: elliptic. Fixed points: z² − z + 1 = 0, so z = (1 + i√3)/2 = e^{iπ/3} in H. The rotation angle θ satisfies 2cos(θ/2) = 1, so θ = 2π/3; indeed the characteristic polynomial x² − x + 1 has primitive sixth roots of unity as roots, so g³ = −I and g has order 3 in PSL(2,ℝ). (c) For z ↦ 9z the matrix is diag(3, 1/3), with trace 10/3 = 2cosh(ln 3), so ℓ = 2 ln 3 = ln 9 ≈ 2.1972. For (5 2; 2 1): det = 1, tr = 6, so ℓ = 2 arccosh 3 = 2 ln(3 + 2√2) ≈ 3.5255.

─────────────────────────────────
Lesson 7: The Poincaré Disk and the Beltrami–Klein Model
─────────────────────────────────

📌 Key idea of this section:

        Poincaré disk:  D,  ds² = 4|du|² / (1 − |u|²)²,   conformal;  geodesics = arcs ⊥ ∂D
        Klein disk:     D,  geodesics = straight chords;  not conformal
        d(0, u) = 2 artanh |u|  (Poincaré),     d(0, k) = artanh |k|  (Klein)

The Cayley transform

The map C(z) = (z − i)/(z + i) is a biholomorphism from H onto the unit disk D sending i to 0 and ℝ ∪ {∞} to the unit circle. Transporting the metric of H by C gives the Poincaré disk model with metric

        ds² = 4 |du|² / (1 − |u|²)².

To check this, note |C′(z)| = 2/|z + i|² and 1 − |C(z)|² = (|z + i|² − |z − i|²)/|z + i|² = 4 Im z/|z + i|². Hence 2|C′(z)|/(1 − |C(z)|²) = 1/Im z, as required.

Geodesics are the diameters of D and the arcs of circles meeting the unit circle orthogonally; the orientation-preserving isometries are

        u ↦ e^{iθ} (u − a)/(1 − ā u),     |a| < 1,  θ ∈ ℝ,

which form the group PSU(1,1), conjugate to PSL(2,ℝ) by C. The distance is given by

        cosh d(u, v) = 1 + 2|u − v|² / ((1 − |u|²)(1 − |v|²)),      tanh(d/2) = |u − v| / |1 − ū v|.

For v = 0 and |u| = r this gives cosh d = (1 + r²)/(1 − r²), so d(0, u) = 2 artanh r = ln((1 + r)/(1 − r)).

Relation to the hyperboloid

Stereographic projection from (0, 0, −1) to the plane x₃ = 0 maps H² onto D by x ↦ (x₁, x₂)/(1 + x₃). Indeed |u|² = (x₃² − 1)/(1 + x₃)² = (x₃ − 1)/(x₃ + 1) < 1. This projection is an isometry from the hyperboloid model to the Poincaré disk, exactly as stereographic projection from the South Pole maps the unit sphere conformally onto the plane with metric 4|du|²/(1 + |u|²)².

Circles in the disk

A hyperbolic circle in D is a Euclidean circle (with a different centre unless it is centred at 0). The circle of hyperbolic radius r about 0 has Euclidean radius ρ = tanh(r/2). In polar geodesic coordinates ds² = dr² + sinh²r dθ², so

        circumference = 2π sinh r,          area = ∫₀ʳ 2π sinh t dt = 2π(cosh r − 1) = 4π sinh²(r/2).

Both grow like π eʳ. For r = 1 the circumference is 2π sinh 1 ≈ 7.384 (Euclidean: 6.283) and the area is about 3.412 (Euclidean: 3.142). For r = 10 the circumference is about 69 198. Exponential growth of balls is the basic large-scale feature of negative curvature; it reappears in the exponential growth of hyperbolic groups in Gromov's sense and in the efficiency of hyperbolic embeddings of tree-like data.

The Beltrami–Klein model

Central projection from the origin of ℝ³ to the plane x₃ = 1 maps H² onto D by x ↦ (x₁/x₃, x₂/x₃). Since planes through the origin meet x₃ = 1 in straight lines, geodesics in this model are open chords of the unit disk: it is a projective model, and its isometries are the projective transformations of the plane preserving the unit disk. The model is not conformal; angles are distorted except at the centre.

Proposition 7.1. If the chord through P, Q has endpoints A (beyond P) and B (beyond Q) on the unit circle, then d(P, Q) = ½ ln( |AQ| · |PB| / (|AP| · |QB|) ), half the logarithm of a cross-ratio.

Check at the centre: P = 0, Q = k ∈ (0, 1), A = −1, B = 1. Then d = ½ ln((1 + k)/(1 − k)) = artanh k. The same formula makes sense in any bounded convex domain and defines the Hilbert metric; it descends from Cayley's projective metric of 1859, which Klein recognised in 1871 as a model of Lobachevsky's geometry.

Converting between Poincaré and Klein

A point at Euclidean distance r from the centre in the Poincaré disk corresponds to the point in the same direction at distance k = 2r/(1 + r²) in the Klein disk. Check: k = 2 tanh(t)/(1 + tanh²t) = tanh 2t with t = artanh r, so artanh k = 2 artanh r, matching the two distance formulas. Geometrically: lift the Poincaré disk to the upper hemisphere by inverse stereographic projection from the South Pole, then project vertically down. Under this correspondence a Poincaré geodesic arc becomes the chord joining its endpoints.

A dictionary of models

        Model             Space                  Geodesics                           Conformal
        Hyperboloid       sheet of ⟨x,x⟩ = −1    H² ∩ planes through 0               yes
        Upper half-plane  Im z > 0               vertical lines, semicircles ⊥ ℝ     yes
        Poincaré disk     |u| < 1                diameters, arcs ⊥ unit circle       yes
        Beltrami–Klein    |k| < 1                straight chords                     no

✏️ Your Turn

(a) In the Poincaré disk, find d(0, 1/2) and the Klein coordinate of the same point.
(b) Find the hyperbolic distance between u = 1/2 and v = −1/2 in the Poincaré disk, in two ways.
(c) What Euclidean radius does a Poincaré-disk circle about 0 of hyperbolic radius 2 have?

Answers: (a) d = ln((1 + 1/2)/(1 − 1/2)) = ln 3 ≈ 1.0986; k = 2(1/2)/(1 + 1/4) = 4/5, and artanh(4/5) = ½ ln 9 = ln 3, consistent. (b) Along the diameter, d = ln 3 + ln 3 = ln 9 ≈ 2.1972. By the formula, cosh d = 1 + 2 · 1/((3/4)(3/4)) = 1 + 32/9 = 41/9, and cosh(ln 9) = (9 + 1/9)/2 = 41/9. (c) ρ = tanh 1 ≈ 0.7616.

─────────────────────────────────
Lesson 8: Hyperbolic Trigonometry
─────────────────────────────────

📌 Key idea of this section:

        cosh c = cosh a cosh b − sinh a sinh b cos γ        (first law of cosines)
        cos γ = −cos α cos β + sin α sin β cosh c           (second law of cosines)
        sin α / sinh a = sin β / sinh b = sin γ / sinh c    (law of sines)

The laws of cosines

Theorem 8.1. In a hyperbolic triangle (curvature −1) with sides a, b, c opposite angles α, β, γ,

        cosh c = cosh a cosh b − sinh a sinh b cos γ.

Proof. Work in the hyperboloid model and use an isometry to place C at p₀ = (0, 0, 1) with side CA leaving C in the direction e₁. The geodesic from p₀ in the unit direction (cos θ, sin θ, 0) is t ↦ (sinh t cos θ, sinh t sin θ, cosh t), so A = (sinh b, 0, cosh b) and B = (sinh a cos γ, sinh a sin γ, cosh a). By Theorem 4.3, cosh c = −⟨A, B⟩ = cosh a cosh b − sinh a sinh b cos γ. ∎

The proof is word for word the proof of the spherical law in Lesson 3 with sin and cos of sides replaced by sinh and cosh; formally, the hyperbolic formulas are obtained from the spherical ones by the substitution a ↦ ia (so cos a ↦ cosh a and sin a ↦ i sinh a) — Lambert's imaginary sphere made exact.

Theorem 8.2 (second law of cosines). cos γ = −cos α cos β + sin α sin β cosh c.

Proof. Solve Theorem 8.1 and its cyclic permutations for the cosines of the angles, cos γ = (cosh a cosh b − cosh c)/(sinh a sinh b) and so on, and substitute into the right-hand side; after clearing denominators both sides reduce to the same expression in cosh a, cosh b, cosh c. (Alternatively, apply Theorem 8.1 to the polar configuration in de Sitter space, the one-sheeted hyperboloid ⟨x, x⟩ = 1.) ∎

As on the sphere, the second law shows that a hyperbolic triangle is determined up to congruence by its three angles (AAA congruence).

Theorem 8.3 (law of sines). sin α / sinh a = sin β / sinh b = sin γ / sinh c.

Proof. From Theorem 8.1, sin²γ · sinh²a sinh²b = sinh²a sinh²b − (cosh a cosh b − cosh c)², which expands to 1 − cosh²a − cosh²b − cosh²c + 2 cosh a cosh b cosh c. This is symmetric in a, b, c, so sin²γ / sinh²c is symmetric. ∎

Right triangles

Let γ = π/2 and let c be the hypotenuse. Then:

        cosh c = cosh a cosh b                     (hyperbolic Pythagoras)
        sin α = sinh a / sinh c                    cos α = tanh b / tanh c
        tan α = tanh a / sinh b                    cos α = cosh a sin β
        cosh c = cot α cot β

These follow from Theorems 8.1–8.3 by short calculations; for example, from the law of cosines for α, cos α = (cosh b cosh c − cosh a)/(sinh b sinh c), and substituting cosh a = cosh c / cosh b gives cos α = cosh c (cosh²b − 1)/(cosh b sinh b sinh c) = tanh b · cosh c / sinh c = tanh b / tanh c.

Worked example. A right triangle has legs with cosh a = cosh b = 2. Then cosh c = 4, so c = arccosh 4 ≈ 2.0634. Since sinh b = √3 and tanh a = √3/2, tan α = (√3/2)/√3 = 1/2, so α = β = arctan(1/2) ≈ 26.565°. Check: cot α cot β = 2 · 2 = 4 = cosh c. The angle sum is about 143.13°, so the defect is about 36.87° ≈ 0.6435 rad; by Lesson 9 this is the area.

The Euclidean limit

On the hyperbolic plane of curvature −1/R², Pythagoras reads cosh(c/R) = cosh(a/R) cosh(b/R). Expanding as in Lesson 3,

        c² = a² + b² + a²b²/(3R²) + O(R⁻⁴),

so hyperbolic hypotenuses are longer than Euclidean ones, the opposite of the spherical correction −a²b²/(3R²). The sign of the correction detects the sign of the curvature.

The angle of parallelism

Fix a line ℓ and a point P at distance a from ℓ, with foot F. The angle of parallelism Π(a) is the angle at P between PF and either of the two asymptotic parallels to ℓ through P. Let Q move along ℓ away from F, with FQ = x. In the right triangle PFQ (right angle at F), the leg PF = a is adjacent to the angle at P, so the right-triangle formula cos α = tanh b / tanh c gives cos(∠FPQ) = tanh a / tanh(PQ). As x → ∞, PQ → ∞ and tanh(PQ) → 1, so

        cos Π(a) = tanh a,     sin Π(a) = 1/cosh a,     tan(Π(a)/2) = e⁻ᵃ.

The last identity is Lobachevsky's formula; it follows from tan(θ/2) = sin θ/(1 + cos θ) = (1/cosh a)/(1 + tanh a) = 1/(cosh a + sinh a). Thus Π(a) decreases from π/2 (as a → 0, the Euclidean value) to 0 (as a → ∞). Example: Π(ln 3) has cos Π = tanh(ln 3) = 8/10 = 4/5, so Π(ln 3) = arccos(4/5) = 2 arctan(1/3) ≈ 36.87°. Lobachevsky and Bolyai both made Π(a) central; Bolyai noted that it ties the unit of length to the geometry — in hyperbolic geometry there is an absolute unit of length, for example the length a with Π(a) = π/4, namely a = artanh(1/√2) = ln(1 + √2) ≈ 0.8814.

Equilateral triangles

For an equilateral triangle with side s and angles α, the second law of cosines gives cos α = −cos²α + sin²α cosh s, so

        cosh s = cos α (1 + cos α) / sin²α = cos α / (1 − cos α).

This is positive and greater than 1 exactly when 0 < α < π/3. For α = π/4, cosh s = (√2/2)/(1 − √2/2) = √2 + 1 and s = arccosh(1 + √2) ≈ 1.5286; for α → π/3, s → 0; for α → 0, s → ∞ and the triangle tends to an ideal triangle.

Right-angled hexagons

A right-angled hexagon has six geodesic sides meeting at right angles. For any three positive numbers a, b, c there is, up to isometry, exactly one right-angled hexagon with alternate sides a, b, c, and the opposite sides a′, b′, c′ are given by the hexagon law of cosines

        cosh c′ = (cosh a cosh b + cosh c) / (sinh a sinh b).

Gluing two copies of such a hexagon along the sides a′, b′, c′ gives a pair of pants with boundary geodesics of lengths 2a, 2b, 2c. Since every closed hyperbolic surface of genus g ≥ 2 decomposes into 2g − 2 pairs of pants along 3g − 3 curves, this yields the Fenchel–Nielsen coordinates on Teichmüller space: 3g − 3 lengths and 3g − 3 twist parameters, for a total real dimension 6g − 6.

✏️ Your Turn

(a) A right hyperbolic triangle has legs a, b with cosh a = 3 and cosh b = 2. Find cosh c and the angle α opposite a, to the nearest 0.01°.
(b) Find Π(a) when a = ln 2.
(c) Find the side of an equilateral hyperbolic triangle with angles π/5, and compare its area with that of the triangle in the text with angles π/4.

Answers: (a) cosh c = 6. sinh a = √8, sinh c = √35, so sin α = √8/√35 = √(8/35) ≈ 0.47809 and α ≈ 28.56°. (Check with tan α = tanh a / sinh b = (√8/3)/√3 ≈ 0.54433, arctan ≈ 28.56°.) (b) tan(Π/2) = 1/2, so Π = 2 arctan(1/2) ≈ 53.13°; equivalently cos Π = tanh(ln 2) = (4 − 1)/(4 + 1) = 3/5. (c) cos(π/5) = (1 + √5)/4 ≈ 0.80902, so cosh s ≈ 0.80902/0.19098 ≈ 4.2361 = 2 + √5, and s = arccosh(2 + √5) ≈ 2.1225. Its area is π − 3π/5 = 2π/5 ≈ 1.2566, larger than π − 3π/4 = π/4 ≈ 0.7854.

─────────────────────────────────
Lesson 9: Area and Angle Defect
─────────────────────────────────

📌 Key idea of this section:

        dA = dx dy / y²   in H
        Area(triangle) = π − (α + β + γ)
        Area(geodesic n-gon) = (n − 2)π − (θ₁ + ⋯ + θₙ)

The area form

The Riemannian area element of ds² = (dx² + dy²)/y² is dA = dx dy / y². It is invariant under PSL(2,ℝ): a holomorphic map multiplies Euclidean area by |g′|², and |g′(z)|² = (Im g(z)/Im z)². Area is thus an isometry invariant, and all triangles congruent under isometries have equal area.

Ideal triangles

An ideal triangle has its three vertices on ∂H. Since PSL(2,ℝ) together with z ↦ −z̄ acts transitively on triples of distinct boundary points, all ideal triangles are congruent. The ideal triangle with vertices −1, 1, ∞ is bounded by x = −1, x = 1 and the unit semicircle, so

        Area = ∫ from −1 to 1 of ∫ from √(1 − x²) to ∞ of dy/y² dx = ∫ from −1 to 1 of dx/√(1 − x²) = π.

Its angles are all 0, so the formula Area = π − (angle sum) holds. Two remarkable metric facts about this triangle: its inscribed circle has centre i√3 and radius ½ ln 3 ≈ 0.5493 (the distances from i√3 to the side |z| = 1 and to the side x = 1 are ln √3 and arsinh(1/√3) = ln √3); and the point i on the side |z| = 1 is at distance arsinh 1 = ln(1 + √2) ≈ 0.8814 from both other sides, which is the maximum distance from a point on one side to the union of the other two. Every geodesic triangle in H² is therefore δ-thin with δ = ln(1 + √2): this is the prototype of Gromov hyperbolicity.

Theorem 9.1 (Lambert, Gauss). A hyperbolic triangle with angles α, β, γ has area π − α − β − γ.

Proof. Step 1: triangles with two finite vertices and one ideal vertex. Place the ideal vertex at ∞ and the finite vertices on the unit circle at e^{i(π − α)} and e^{iβ}, with vertical sides going up from them. The angle between the vertical line x = cos β and the unit circle at e^{iβ} equals the angle between the radius and the horizontal, which is β; similarly the angle at e^{i(π − α)} is α. Every triangle with angles α, β, 0 is congruent to this one. Its area is

        ∫ from cos(π − α) to cos β of dx/√(1 − x²) = arccos(cos(π − α)) − arccos(cos β) = (π − α) − β.

Step 2: a general triangle ABC. Extend the side AC beyond C to its ideal endpoint P. The triangle ABP has angles α, β + δ and 0, where δ = ∠CBP, and the triangle CBP has angles π − γ, δ and 0. Since ABC = ABP minus CBP,

        Area(ABC) = (π − α − β − δ) − (π − (π − γ) − δ) = π − α − β − γ. ∎

Corollary 9.2. Every hyperbolic triangle has area less than π; a convex geodesic n-gon with angles θ₁, …, θₙ has area (n − 2)π − Σθᵢ (triangulate from a vertex: n − 2 triangles whose angles add up to Σθᵢ). Two triangles with the same angles have the same area, and indeed are congruent; there are no similarities of the hyperbolic plane except isometries.

Corollary 9.3. On the plane of curvature −1/R², the area of a triangle is R²(π − α − β − γ). Comparing with Girard's theorem R²(α + β + γ − π) on the sphere of curvature 1/R², both are special cases of the single statement: the integral of the curvature over a geodesic triangle equals α + β + γ − π. That statement is the Gauss–Bonnet theorem of Lesson 12.

Regular polygons

A regular hyperbolic n-gon with interior angle θ exists for every θ with 0 ≤ θ < (n − 2)π/n (the Euclidean value), and is unique up to congruence; its area is (n − 2)π − nθ. Its circumradius ρ is determined from the right triangle formed by the centre, a vertex and the midpoint of a side, with angles π/n at the centre and θ/2 at the vertex: cosh ρ = cot(π/n) cot(θ/2).

Worked example. The regular octagon with all angles π/4 has area 6π − 2π = 4π, and its circumradius satisfies cosh ρ = cot(π/8) cot(π/8) = (1 + √2)² = 3 + 2√2, so ρ = arccosh(3 + 2√2) ≈ 2.4485. Identifying opposite sides of this octagon produces a closed surface of genus 2 (Lesson 10), whose area is 4π in accordance with Gauss–Bonnet: −2πχ = −2π(2 − 4) = 4π.

✏️ Your Turn

(a) Find the area of a hyperbolic quadrilateral with angles 30°, 45°, 60°, 90°.
(b) Show that a hyperbolic triangle with angles π/2, π/4, π/6 has area π/12, and find its hypotenuse.
(c) An ideal quadrilateral has four vertices on ∂H. What is its area?

Answers: (a) 2π − (π/6 + π/4 + π/3 + π/2) = 2π − 5π/4 = 3π/4. (b) π − π/2 − π/4 − π/6 = π/12. With γ = π/2, cosh c = cot α cot β = cot(π/4) cot(π/6) = √3, so c = arccosh √3 ≈ 1.1462. (c) A diagonal splits it into two ideal triangles, so its area is 2π, which agrees with (4 − 2)π − 0.

─────────────────────────────────
Lesson 10: Fuchsian Groups, Triangle Groups and Tilings
─────────────────────────────────

📌 Key idea of this section:

        Fuchsian group = discrete subgroup Γ < PSL(2,ℝ)
        {p, q} tiling of H²  ⟺  (p − 2)(q − 2) > 4  ⟺  1/p + 1/q < 1/2
        Area(H²/Γ) = 2π (2g − 2 + n + Σ (1 − 1/mᵢ))

Discrete groups

A Fuchsian group is a discrete subgroup Γ of PSL(2,ℝ). Theorem 10.1: Γ is discrete if and only if it acts properly discontinuously on H, i.e. for every compact K ⊂ H only finitely many γ ∈ Γ satisfy γK ∩ K ≠ ∅. (One direction uses that the stabiliser of i is compact, so {g : gK ∩ K ≠ ∅} is compact in PSL(2,ℝ).) The quotient H/Γ is then a hyperbolic orbifold: a surface with a hyperbolic metric away from finitely many cone points (images of fixed points of elliptic elements) and cusps (images of parabolic fixed points), when Γ is finitely generated and of finite covolume.

Fundamental domains

A fundamental domain for Γ is a closed region F such that the translates γF cover H and have disjoint interiors. For any point p not fixed by any nontrivial element, the Dirichlet domain

        D_p(Γ) = { z ∈ H : d(z, p) ≤ d(z, γp) for all γ ∈ Γ }

is a convex fundamental domain bounded by geodesic perpendicular bisectors. For finitely generated Γ it is a polygon with finitely many sides, paired by elements of Γ. Its area is independent of the choice of fundamental domain and is called the covolume of Γ. If Γ′ < Γ has finite index, then Area(H/Γ′) = [Γ : Γ′] · Area(H/Γ).

The modular group

Γ = PSL(2,ℤ) is generated by S(z) = −1/z and T(z) = z + 1, with S² = (ST)³ = 1, and in fact PSL(2,ℤ) ≅ ℤ/2 ∗ ℤ/3. The standard fundamental domain is

        F = { z ∈ H : |Re z| ≤ 1/2,  |z| ≥ 1 },

a triangle with vertices e^{iπ/3}, e^{2iπ/3} (angles π/3) and ∞ (angle 0). Its area is π − 2π/3 = π/3. The quotient H/PSL(2,ℤ) is the moduli space of elliptic curves (lattices in ℂ up to similarity), a sphere with one cusp, a cone point of order 2 (image of i) and a cone point of order 3 (image of e^{iπ/3}). The principal congruence subgroup Γ(2) = {g ≡ I mod 2} has index 6 in PSL(2,ℤ), since SL(2, ℤ/2ℤ) ≅ S₃ has order 6 and −I ≡ I mod 2; its fundamental domain is an ideal quadrilateral of area 6 · π/3 = 2π, and H/Γ(2) is a sphere with three punctures.

The area formula

Theorem 10.2. If Γ is a finitely generated Fuchsian group of finite covolume with signature (g; m₁, …, m_r; n) — the quotient has genus g, cone points of orders m₁, …, m_r, and n cusps — then

        Area(H/Γ) = 2π ( 2g − 2 + n + Σᵢ (1 − 1/mᵢ) ),

and such a group exists if and only if the right-hand side is positive. This is the orbifold Gauss–Bonnet theorem: the bracket is minus the orbifold Euler characteristic. Check for PSL(2,ℤ), signature (0; 2, 3; 1): 2π(−2 + 1 + 1/2 + 2/3) = 2π/6 = π/3. For a closed surface of genus g ≥ 2 the area is 4π(g − 1).

Triangle groups

Let p, q, r ≥ 2 be integers (∞ allowed) with 1/p + 1/q + 1/r < 1. There is a hyperbolic triangle T with angles π/p, π/q, π/r, unique up to congruence, with area π(1 − 1/p − 1/q − 1/r). The group generated by the reflections in its sides is discrete, and T is a fundamental domain (Poincaré's polygon theorem; the angle condition π/p etc. is exactly what is needed for the copies of T around each vertex to fit together). Its orientation-preserving subgroup, the von Dyck group

        Δ(p, q, r) = ⟨ x, y, z | xᵖ = y^q = zʳ = xyz = 1 ⟩,

has fundamental domain the union of T and one reflected copy, of area 2π(1 − 1/p − 1/q − 1/r), in agreement with Theorem 10.2 for signature (0; p, q, r; 0). When 1/p + 1/q + 1/r = 1 we get the Euclidean groups (2,3,6), (2,4,4), (3,3,3), and when it is greater than 1 the spherical groups (2,2,n), (2,3,3), (2,3,4), (2,3,5) — the symmetry groups of the dihedra and the Platonic solids.

Theorem 10.3 (Siegel 1945). The Fuchsian group of smallest covolume is Δ(2, 3, 7), with covolume 2π(1 − 1/2 − 1/3 − 1/7) = 2π/42 = π/21.

Corollary 10.4 (Hurwitz 1893). A closed Riemann surface of genus g ≥ 2 has at most 84(g − 1) conformal automorphisms. Proof: uniformise the surface as H/K with K torsion-free of covolume 4π(g − 1). The automorphism group G lifts to a Fuchsian group Γ ⊃ K with Γ/K ≅ G, and |G| = Area(H/K)/Area(H/Γ) ≤ 4π(g − 1)/(π/21) = 84(g − 1). ∎ The bound is attained for g = 3 by Klein's quartic x³y + y³z + z³x = 0, whose automorphism group PSL(2, 7) has order 168 = 84 · 2.

Regular tilings

The Schläfli symbol {p, q} denotes a tiling by regular p-gons, q at each vertex. The interior angle must be 2π/q, and a regular p-gon with angle 2π/q is spherical, Euclidean or hyperbolic according as 2π/q is greater than, equal to or less than the Euclidean angle (p − 2)π/p, i.e. according as (p − 2)(q − 2) is less than, equal to or greater than 4. Euclidean: {3,6}, {4,4}, {6,3}. Spherical: {3,3}, {3,4}, {4,3}, {3,5}, {5,3} (the Platonic solids) and the degenerate {2,q}, {p,2}. All other pairs give hyperbolic tilings; the tile area is (p − 2)π − 2πp/q. For example {7,3} has tiles of area 5π − 14π/3 = π/3, and {4,5} has tiles of area 2π − 8π/5 = 2π/5. Each regular tiling's symmetry group is the triangle reflection group (2, q, p) — the triangle with vertices at a tile centre, a vertex and an edge midpoint has angles π/p, π/q and π/2.

In 1957–58 H. S. M. Coxeter sent M. C. Escher a figure of a triangle-group tiling of the Poincaré disk, which inspired Escher's woodcuts Circle Limit I–IV (1958–1960). Coxeter later showed that the white arcs of Circle Limit III are not geodesics but equidistant curves (hypercycles), meeting the boundary circle at an angle of about 80°.

Surface groups

The regular 4g-gon with all angles 2π/(4g) has area (4g − 2)π − 2π = 4π(g − 1). Pairing its sides by the pattern a₁b₁a₁⁻¹b₁⁻¹ ⋯ a_g b_g a_g⁻¹ b_g⁻¹ with hyperbolic isometries produces a Fuchsian group with presentation

        ⟨ a₁, b₁, …, a_g, b_g | [a₁, b₁] ⋯ [a_g, b_g] = 1 ⟩,

and all 4g vertices of the polygon map to a single point with total angle 4g · 2π/(4g) = 2π, so the quotient is a closed hyperbolic surface of genus g. By the uniformisation theorem (Koebe and Poincaré, 1907) every closed Riemann surface of genus g ≥ 2 arises this way from some surface group, and the set of such hyperbolic structures up to isotopy, Teichmüller space, is homeomorphic to ℝ^{6g−6}.

✏️ Your Turn

(a) Find the area of a tile of the {5,4} tiling and of the {3,7} tiling.
(b) Is there a Fuchsian group of signature (0; 2, 4, 4; 0)? Of (0; 2, 4, 5; 0)? If so, give its covolume.
(c) What is the area of H/Γ for a torsion-free Fuchsian group Γ with quotient a sphere with four punctures?

Answers: (a) {5,4}: 3π − 10π/4 = π/2. {3,7}: π − 6π/7 = π/7. (b) (2,4,4): 1/2 + 1/4 + 1/4 = 1, so it is Euclidean, not Fuchsian (the formula gives 0). (2,4,5): 1 − 1/2 − 1/4 − 1/5 = 1/20 > 0, so it exists, with covolume 2π/20 = π/10. (c) 2π(0 − 2 + 4) = 4π.

─────────────────────────────────
Lesson 11: Gaussian Curvature and the Theorema Egregium
─────────────────────────────────

📌 Key idea of this section:

        K = det(shape operator) = (LN − M²) / (EG − F²)
        Theorema Egregium: K depends only on E, F, G
        Conformal metric λ²(dx² + dy²):   K = −Δ(ln λ) / λ²

Curvature of a surface in space

Let x(u, v) be a regular parametrised surface in ℝ³ with unit normal N. The first fundamental form I = E du² + 2F du dv + G dv², with E = x_u · x_u, F = x_u · x_v, G = x_v · x_v, is the induced Riemannian metric. The second fundamental form II = L du² + 2M du dv + N dv², with L = x_uu · N, M = x_uv · N, N = x_vv · N, measures how the surface bends in space. The shape operator (Weingarten map) S = −dN is a self-adjoint endomorphism of each tangent plane; its eigenvalues κ₁, κ₂ are the principal curvatures, and

        K = κ₁κ₂ = det S = (LN − M²)/(EG − F²),        H = (κ₁ + κ₂)/2.

Equivalently, K is the limiting ratio of the area swept out by the Gauss map N on the unit sphere to the area of a small region of the surface (with sign). Examples: a sphere of radius R has κ₁ = κ₂ = 1/R and K = 1/R²; a cylinder of radius R has κ₁ = 1/R, κ₂ = 0, K = 0; at the origin the saddle z = x² − y² has κ₁ = 2, κ₂ = −2, K = −4.

The Theorema Egregium

Theorem 11.1 (Gauss 1827). The Gaussian curvature can be expressed entirely in terms of E, F, G and their first and second derivatives. Consequently K is invariant under local isometries.

Proof sketch. Write the derivatives of the frame (x_u, x_v, N) in terms of the frame: x_uu = Γ¹₁₁x_u + Γ²₁₁x_v + LN, and similarly for x_uv, x_vv, where the Christoffel symbols Γᵏᵢⱼ are determined by E, F, G (they solve linear equations obtained by dotting with x_u and x_v; for instance x_uu · x_u = ½E_u). Equate the tangential components of (x_uu)_v and (x_uv)_u. The terms involving N contribute products of the coefficients of II, and the outcome is the Gauss equation

        E · K = (Γ²₁₁)_v − (Γ²₁₂)_u + Γ¹₁₁Γ²₁₂ + Γ²₁₁Γ²₂₂ − Γ¹₁₂Γ²₁₁ − (Γ²₁₂)²,

whose right-hand side involves only the metric. ∎

For orthogonal coordinates (F = 0) the formula becomes:

        K = −(1/(2√(EG))) [ ∂_u( G_u / √(EG) ) + ∂_v( E_v / √(EG) ) ].

Conformal metrics. If E = G = λ² and F = 0, then √(EG) = λ² and G_u/√(EG) = 2λ_u/λ = 2(ln λ)_u, so K = −Δ(ln λ)/λ², where Δ = ∂²_u + ∂²_v. Examples:

        Upper half-plane, λ = 1/y:        Δ ln λ = Δ(−ln y) = 1/y²,                K = −(1/y²)·y² = −1
        Poincaré disk, λ = 2/(1 − r²):    Δ ln λ = −Δ ln(1 − r²) = 4/(1 − r²)²,     K = −1
        Stereographic sphere, λ = 2/(1 + r²):  Δ ln λ = −4/(1 + r²)²,              K = +1

(For radial functions Δf = f″ + f′/r; with f = ln(1 + r²) one finds f′ = 2r/(1 + r²) and Δf = 4/(1 + r²)².) The Theorema Egregium explains a basic fact of cartography: since the sphere has K = 1/R² and the plane has K = 0, no map of any region of the Earth can preserve all distances. A cylinder or cone, in contrast, can be unrolled without distortion.

Geodesic polar coordinates

Around any point p of a surface, exponential coordinates (r, θ) give a metric of the form ds² = dr² + G(r, θ) dθ², with √G = r − (K(p)/6) r³ + O(r⁴). The orthogonal formula reduces to

        K = −(√G)_rr / √G.

On the unit sphere √G = sin r and on the hyperbolic plane √G = sinh r, giving K = +1 and −1. Integrating, the circumference and area of a small geodesic circle are

        C(r) = 2πr − (π/3) K r³ + o(r³),        A(r) = πr² − (π/12) K r⁴ + o(r⁴),

the Bertrand–Diguet–Puiseux formulas (1848). They give an intrinsic recipe for measuring K: K = lim (3/π)(2πr − C(r))/r³. Check on the unit sphere: 2π sin r = 2πr − πr³/3 + ⋯.

Surfaces of revolution and the pseudosphere

A surface of revolution with unit-speed profile curve (f(v), h(v)), f > 0, has metric ds² = dv² + f(v)² du², so by the polar formula K = −f″/f. Taking f(v) = e⁻ᵛ for v ≥ 0, with h′ = √(1 − e⁻²ᵛ), gives the pseudosphere, the surface of revolution of the tractrix, with K ≡ −1. The substitution y = eᵛ transforms its metric into

        ds² = dv² + e⁻²ᵛ du² = (du² + dy²)/y²,     y ≥ 1,  u ∈ ℝ/2πℤ.

So the pseudosphere is isometric to the region {Im z ≥ 1} of H modulo the parabolic translation z ↦ z + 2π: it is a cusp. Its area is ∫ from 1 to ∞ of 2π dy/y² = 2π. Beltrami used this surface in 1868 to give a concrete (local) realisation of Lobachevsky's planimetry; geodesics on the pseudosphere correspond to semicircles and vertical lines in H.

Hilbert's theorem

Theorem 11.2 (Hilbert 1901). There is no complete smooth surface of constant negative curvature isometrically immersed in ℝ³. In particular the whole hyperbolic plane cannot be realised as a smooth surface in Euclidean 3-space; every realisation, like the pseudosphere, has a singular edge or is incomplete. Efimov (1964) strengthened this: no complete surface with K ≤ −δ < 0 can be C² immersed in ℝ³. By contrast the Nash–Kuiper theorem gives C¹ isometric embeddings of H² into ℝ³, and H² embeds isometrically (smoothly) in ℝⁿ for larger n by Nash's theorem; crocheted models of hyperbolic planes (Taimina, 1997) give physical local approximations.

✏️ Your Turn

(a) Compute K for the metric ds² = (dx² + dy²)/(4y²).
(b) Compute K for ds² = dr² + cosh²r dθ² (on ℝ × ℝ).
(c) A small geodesic circle of radius 0.1 on a surface has circumference 0.62852. Estimate K at its centre.

Answers: (a) λ = 1/(2y), ln λ = −ln 2 − ln y, Δ ln λ = 1/y², so K = −(1/y²)/(1/(4y²)) = −4. (Scaling a metric by c² multiplies K by 1/c².) (b) √G = cosh r, (√G)_rr = cosh r, so K = −1. (This is the hyperbolic plane in Fermi coordinates along a geodesic.) (c) 2π(0.1) = 0.628319, so K ≈ (3/π)(0.628319 − 0.62852)/0.001 = (3/π)(−0.000201)/0.001 ≈ −0.19.

─────────────────────────────────
Lesson 12: The Gauss–Bonnet Theorem
─────────────────────────────────

📌 Key idea of this section:

        Local:   ∫∫_R K dA + ∫_∂R k_g ds + Σ (π − interior angles) = 2π
        Triangle: ∫∫_Δ K dA = α + β + γ − π
        Global:  ∫∫_M K dA = 2π χ(M)

Geodesic curvature

For a unit-speed curve c(s) on an oriented surface, the geodesic curvature is k_g = ⟨c″, N × c′⟩, the component of acceleration in the surface perpendicular to the curve. Geodesics are exactly the curves with k_g = 0. A key lemma is Liouville's formula: in orthogonal coordinates with E = 1, if ψ(s) is the angle from ∂_r to c′(s), then

        k_g = dψ/ds + (√G)_r dθ/ds.

Theorem 12.1 (local Gauss–Bonnet for a geodesic triangle). If Δ is a geodesic triangle with angles α, β, γ lying in a normal coordinate neighbourhood, then ∫∫_Δ K dA = α + β + γ − π.

Proof. Use geodesic polar coordinates centred at the vertex A, with the side AB along θ = 0 and the side AC along θ = α. Write the side BC as r = ρ(θ), 0 ≤ θ ≤ α. With dA = √G dr dθ and K√G = −(√G)_rr,

        ∫∫_Δ K dA = ∫₀^α ∫₀^ρ(θ) −(√G)_rr dr dθ = ∫₀^α [ 1 − (√G)_r(ρ(θ), θ) ] dθ,

using (√G)_r → 1 as r → 0. Along the geodesic BC Liouville's formula gives dψ = −(√G)_r dθ, so the integral equals α + ψ(C) − ψ(B). At B the angle between the outward radial direction and BC is ψ(B) = π − β; at C the angle between ∂_r and the direction of travel equals the interior angle, ψ(C) = γ. Hence ∫∫ K dA = α + γ − (π − β). ∎

For K ≡ 1 this is Girard's theorem, for K ≡ −1 it is Theorem 9.1, and for K ≡ 0 it is Euclid I.32. The general local theorem, for a simply connected region R with piecewise smooth boundary and exterior angles εᵢ at the corners, reads ∫∫_R K dA + ∫_∂R k_g ds + Σ εᵢ = 2π; its proof combines Green's theorem with Hopf's Umlaufsatz (the tangent of a simple closed curve turns by exactly 2π).

The global theorem

Theorem 12.2 (Gauss–Bonnet). For a compact oriented Riemannian surface M without boundary, ∫∫_M K dA = 2πχ(M) = 2π(2 − 2g).

Proof. Triangulate M by small geodesic triangles, with V vertices, E edges and F faces. Summing Theorem 12.1 over the faces, ∫∫_M K dA = (sum of all angles) − πF. The angles around each vertex add to 2π, so the sum of all angles is 2πV. Each face has three edges and each edge lies on two faces, so 3F = 2E and πF = 2πE − 2πF. Therefore ∫∫_M K dA = 2πV − 2πE + 2πF = 2πχ(M). ∎

The left-hand side is defined by the metric, the right-hand side by topology alone. If M has boundary, ∫∫_M K dA + ∫_∂M k_g ds = 2πχ(M).

Consequences

  1. A metric on S² must have positive curvature somewhere; a metric on the torus with K ≥ 0 is flat; a surface of genus g ≥ 2 must have negative curvature somewhere.
  2. A closed surface of constant curvature K = −1 and genus g has area 4π(g − 1); constant curvature +1 forces the sphere (area 4π) or ℝP² (area 2π).
  3. Two geodesics on a surface with K ≤ 0 cannot bound a simply connected digon (it would have ∫∫ K ≤ 0 but angle term positive), so on a simply connected complete surface with K ≤ 0 geodesics are unique between points (a two-dimensional case of the Cartan–Hadamard theorem).
  4. Holonomy: parallel transport of a vector around the boundary of a simply connected region R rotates it by ∫∫_R K dA. Around the latitude circle at latitude φ on the unit sphere the enclosed cap has area 2π(1 − sin φ), so a transported vector rotates by 2π(1 − sin φ), i.e. by −2π sin φ modulo 2π. This is the Foucault pendulum, whose plane of swing turns through 2π sin φ per sidereal day; at Paris (φ ≈ 48.85°) that is about 271° per day, roughly 11.3° per hour.
  5. Poincaré–Hopf: the indices of a vector field with isolated zeros sum to χ(M); in particular every vector field on S² vanishes somewhere (the hairy ball theorem).

Uniformisation and the trichotomy

Theorem 12.3 (Uniformisation; Poincaré and Koebe, 1907). Every simply connected Riemann surface is biholomorphic to the Riemann sphere, ℂ, or the disk D. Consequently every closed orientable surface carries a metric of constant curvature +1, 0 or −1 in each conformal class, and the sign is that of χ(M).

Thus the three geometries of this course are not three curiosities but the three possible model geometries for surfaces: the sphere for g = 0, the Euclidean plane for g = 1, and the hyperbolic plane for every g ≥ 2 — "most" surfaces are hyperbolic. Thurston's geometrisation programme, completed by Perelman (2003), extends this picture to three dimensions with eight model geometries, of which hyperbolic geometry H³ is again the richest.

✏️ Your Turn

(a) A torus of revolution has K > 0 on its outer half and K < 0 on its inner half. What is ∫∫ K dA over the whole torus?
(b) A geodesic quadrilateral on a surface has angles 100°, 95°, 85° and 90°. What is ∫∫ K dA over it?
(c) Find the total curvature of a hyperbolic surface of genus 3 and its area if K ≡ −1/4.

Answers: (a) 0, since χ(torus) = 0. (b) Splitting along a diagonal into two geodesic triangles, ∫∫ K dA = (sum of angles) − 2π = 370° − 360° = 10° = π/18 ≈ 0.1745. (c) ∫∫ K dA = 2π(2 − 6) = −8π. With K = −1/4, area = −8π/(−1/4) = 32π.

─────────────────────────────────
Lesson 13: Riemannian Geometry and General Relativity
─────────────────────────────────

📌 Key idea of this section:

        ds² = g_ij dxⁱ dxʲ;      geodesics: ẍᵏ + Γᵏᵢⱼ ẋⁱ ẋʲ = 0
        Jacobi equation:  J″ + K J = 0  (geodesics converge if K > 0, diverge if K < 0)
        Einstein:  R_μν − ½ R g_μν + Λ g_μν = (8πG/c⁴) T_μν

Riemann's lecture

On 10 June 1854, Bernhard Riemann gave his Habilitation lecture "Über die Hypothesen, welche der Geometrie zu Grunde liegen" (published in 1868). He proposed that a space is an n-dimensional manifold whose infinitesimal distance is given by a positive definite quadratic form ds² = Σ g_ij(x) dxⁱ dxʲ, that curvature should be measured in each two-dimensional direction, and that the geometry of physical space is an empirical question to be settled by physics — anticipating the separation, decisive for relativity, between mathematical geometry and physical space.

Riemannian manifolds

A Riemannian manifold (M, g) is a smooth manifold with a smoothly varying inner product on each tangent space. There is a unique torsion-free connection ∇ compatible with g (the Levi-Civita connection), with Christoffel symbols

        Γᵏᵢⱼ = ½ gᵏˡ ( ∂ᵢ g_jl + ∂ⱼ g_il − ∂ₗ g_ij ).

Geodesics are the curves with ∇_ẋ ẋ = 0, i.e. ẍᵏ + Γᵏᵢⱼ ẋⁱ ẋʲ = 0; they are the critical points of the energy functional and locally minimise length. For a conformal metric e^{2φ}δ_ij one finds Γᵏᵢⱼ = δᵢₖ ∂ⱼφ + δⱼₖ ∂ᵢφ − δᵢⱼ ∂ₖφ; with φ = −ln y this reproduces the Christoffel symbols of Lesson 5. The Riemann curvature tensor R(X, Y)Z = ∇_X∇_Y Z − ∇_Y∇_X Z − ∇_{[X,Y]}Z measures the failure of second covariant derivatives to commute, and the sectional curvature of a 2-plane spanned by X, Y is

        sec(X, Y) = ⟨R(X, Y)Y, X⟩ / (|X|²|Y|² − ⟨X, Y⟩²),

which on a surface is the Gaussian curvature. Contractions give the Ricci tensor R_ij and the scalar curvature R; on a surface R = 2K.

Space forms

Theorem 13.1 (Killing–Hopf). A complete, simply connected Riemannian n-manifold of constant sectional curvature κ is isometric to the round sphere Sⁿ of radius 1/√κ (κ > 0), to Euclidean space ℝⁿ (κ = 0), or to hyperbolic space Hⁿ scaled to curvature κ (κ < 0). Every complete manifold of constant curvature is a quotient of one of these by a discrete group of isometries acting freely.

Hyperbolic n-space has the same models as H²: the hyperboloid in ℝⁿ˒¹ with isometry group O⁺(n,1), the upper half-space with metric (dx₁² + ⋯ + dxₙ²)/xₙ², and the Poincaré and Klein balls. For n = 3 the orientation-preserving isometries of the upper half-space are the Möbius maps of the Riemann sphere, PSL(2,ℂ), acting on its boundary; discrete subgroups are Kleinian groups. Mostow rigidity (1968) asserts that for n ≥ 3 a closed hyperbolic manifold is determined up to isometry by its fundamental group — in sharp contrast with the 6g − 6 dimensional Teichmüller spaces of surfaces.

Geodesic deviation

Let γ_s(t) be a family of unit-speed geodesics and J = ∂γ/∂s the variation field (a Jacobi field), orthogonal to the geodesics. On a surface of constant curvature K, its length satisfies the Jacobi equation J″ + K J = 0, so with J(0) = 0, J′(0) = 1:

        J(t) = sin(√K t)/√K   (K > 0),      J(t) = t   (K = 0),      J(t) = sinh(√−K t)/√−K   (K < 0).

Nearby geodesics refocus on the sphere (conjugate points at distance π/√K), separate linearly in the plane, and diverge exponentially in the hyperbolic plane. Exponential divergence is the source of the chaotic (Anosov, mixing, ergodic) behaviour of the geodesic flow on compact hyperbolic surfaces, proved by Hopf (1939) and Anosov (1967) — the mathematical prototype of deterministic chaos.

General relativity

In Einstein's general theory of relativity (1915), spacetime is a four-dimensional Lorentzian manifold with metric of signature (−, +, +, +); freely falling bodies follow timelike geodesics and light follows null geodesics. Gravitation is not a force but curvature, and tidal acceleration is literally the geodesic deviation equation D²J/dt² = −R(J, u)u. The metric is determined by the matter content through the Einstein field equations

        R_μν − ½ R g_μν + Λ g_μν = (8πG/c⁴) T_μν.

Outside a spherical mass M the solution is the Schwarzschild metric:

        ds² = −(1 − r_s/r) c²dt² + dr²/(1 − r_s/r) + r²(dθ² + sin²θ dφ²),     r_s = 2GM/c².

Its predictions include the deflection of light passing a mass at impact parameter b by the angle 4GM/(c²b), which for a ray grazing the Sun is about 1.75 arcseconds (confirmed, within the large uncertainties of the time, by the eclipse expeditions of 1919), the anomalous perihelion precession of Mercury of about 43 arcseconds per century, and the gravitational time dilation that must be corrected for in satellite navigation systems (about 38 microseconds per day for GPS clocks, the net of +45 μs from weaker gravity and −7 μs from orbital speed).

The geometry of the universe

The Friedmann–Lemaître–Robertson–Walker metrics, describing a homogeneous isotropic universe, have the form ds² = −c²dt² + a(t)² dΣ², where dΣ² is a metric of constant curvature k = +1, 0 or −1 on three-dimensional space: spherical, Euclidean or hyperbolic. The three geometries of this course are thus the three candidate geometries for space at cosmological scales. Measurements of the cosmic microwave background (Planck collaboration, 2018), combined with baryon acoustic oscillation data, give a spatial curvature density parameter Ω_K = 0.001 ± 0.002, consistent with flat space; a hyperbolic or spherical universe with a radius of curvature much larger than the observable universe cannot be excluded. The question Gauss is said to have tested by triangulating three mountain peaks, and which Lobachevsky proposed to test with stellar parallaxes, is still an empirical one.

✏️ Your Turn

(a) Two geodesics on the unit sphere leave a point at angle 0.01 rad. How far apart are they (approximately) after travelling π/2? After π?
(b) Repeat (a) in the hyperbolic plane for a travelled distance of 10.
(c) Compute the Schwarzschild radius of the Sun (M = 1.989 × 10³⁰ kg, G = 6.674 × 10⁻¹¹ m³ kg⁻¹ s⁻², c = 2.998 × 10⁸ m/s).

Answers: (a) Separation ≈ 0.01 · sin t: after π/2 it is 0.01, after π it is 0 (the antipodal point is conjugate). (b) 0.01 · sinh 10 ≈ 0.01 · 11013.2 ≈ 110.1 — by then the linear approximation is meaningless; the point is that the separation grows like e^t. (c) r_s = 2GM/c² = 2 · 6.674 × 10⁻¹¹ · 1.989 × 10³⁰ / (2.998 × 10⁸)² ≈ 2.655 × 10²⁰ / 8.988 × 10¹⁶ ≈ 2954 m, about 2.95 km.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped by difficulty. Core problems check fluency with the basic formulas of each model; Advanced problems require combining several results; Challenge problems ask for proofs or for connections between lessons. Unless stated otherwise, the sphere has radius 1, the hyperbolic plane has curvature −1, and angles are in radians.

Core (Problems 1–20)

  1. Find the area of a spherical triangle with angles 90°, 60°, 60°.
  2. On a sphere of radius 2, find the area of a spherical triangle with three angles of 120°.
  3. Find the area of a lune of angle π/5 on a sphere of radius 3.
  4. A right spherical triangle has legs a = b = π/4. Find its hypotenuse.
  5. Find the great-circle distance between the points with (latitude, longitude) (0°, 0°) and (45°N, 90°E) on the unit sphere.
  6. Verify that (3, 0, √10) lies on the hyperboloid model H² and find its distance from (0, 0, 1).
  7. Find d(i, 4i) in the upper half-plane.
  8. Find d(1 + i, 4 + 5i) in the upper half-plane.
  9. Classify the isometry given by (4 3; 1 1) and find its translation length.
  10. Classify (0 −1; 1 1), find its fixed point in H and its order in PSL(2,ℝ).
  11. Classify (1 4; 0 1) and describe its action.
  12. Find the image of i under g = (2 1; 1 1) and check the formula Im g(z) = Im z/|cz + d|².
  13. In the Poincaré disk, find d(0, 3/5).
  14. Find the Klein-model coordinate of the Poincaré-disk point 3/5.
  15. Find the area of a hyperbolic triangle with angles 20°, 30° and 40°.
  16. Find the area of a hyperbolic pentagon all of whose angles are right angles.
  17. A right hyperbolic triangle has legs with cosh a = 2, cosh b = 5. Find cosh of the hypotenuse.
  18. Find the angle of parallelism Π(ln 5).
  19. Find the circumference and area of a hyperbolic circle of radius ln 3.
  20. Find the Gaussian curvature of ds² = 9(dx² + dy²)/y².

Advanced (Problems 21–45)

  21. Prove in neutral geometry that the summit angles of a Saccheri quadrilateral are equal.
  22. Show in neutral geometry that the summit of a Saccheri quadrilateral is at least as long as its base.
  23. Find the angles and area of the equilateral spherical triangle with sides π/3.
  24. Find the sides of the spherical triangle with angles π/2, π/2, π/3.
  25. Estimate the great-circle distance between New York (40.71°N, 74.01°W) and London (51.51°N, 0.13°W), with R = 6371 km.
  26. Find d(i, 1 + 2i) and express it in terms of the golden ratio.
  27. Find the geodesic through i and 2 + 2i and its ideal endpoints.
  28. Find an element of PSL(2,ℝ) mapping the geodesic from 0 to ∞ onto the unit semicircle, with 0 ↦ −1 and ∞ ↦ 1.
  29. Find the translation length, the fixed points and the axis of (3 1; 2 1).
  30. Show that an elliptic element of order n in PSL(2,ℝ) (rotation by 2π/n) has |tr| = 2cos(π/n), and deduce the possible finite orders of elements of PSL(2,ℤ).
  31. Find the distance between 1/2 and i/2 in the Poincaré disk.
  32. Compute the Cayley transform of 2i and verify that it is consistent with d(i, 2i) = ln 2.
  33. In the Beltrami–Klein model, find d(0, 1/2).
  34. A hyperbolic triangle has cosh a = 2, cosh b = 3 and γ = π/3. Find c.
  35. Find the sides of the hyperbolic triangle with angles π/3, π/4, π/4, and its area.
  36. Find the area and circumradius of the regular right-angled hyperbolic hexagon.
  37. Find the area and side length of a tile of the {3,7} tiling.
  38. Which of the Schläfli symbols {4,4}, {5,4}, {3,6}, {3,7}, {6,3}, {4,5}, {3,5} define hyperbolic tilings?
  39. Find the covolume of Δ(2,3,8), and deduce an upper bound for the number of orientation-preserving symmetries of a hyperbolic surface of genus 2 whose symmetry group is a quotient of Δ(2,3,8).
  40. The congruence subgroup Γ₀(p) has index p + 1 in PSL(2,ℤ) for p prime. Find the area of H/Γ₀(5).
  41. Find the Gaussian curvature of ds² = dx² + e^{2x} dy².
  42. The torus of revolution with radii R > r has K = cos v / (r(R + r cos v)). For R = 3, r = 1, find K on the outer and inner equators and verify ∫∫ K dA = 0.
  43. A geodesic triangle of area 0.3 lies on a surface with −2 ≤ K ≤ −1. Bound its angle sum.
  44. Find the holonomy of parallel transport around the parallel of latitude 30° on the unit sphere, and the corresponding Foucault rotation per sidereal day.
  45. Find the Christoffel symbols of dφ² + sin²φ dλ² and show that a circle of latitude φ = φ₀ is a geodesic only if φ₀ = π/2.

Challenge (Problems 46–60)

  46. Show that a small equilateral spherical triangle of side s has excess √3 s²/4 + O(s⁴), so that Girard's theorem reduces to the Euclidean area formula.
  47. Prove that every hyperbolic triangle has inradius at most ½ ln 3.
  48. Let A = (1 1; 1 2) and B = (1 −1; −1 2). Compute tr A, tr B, tr AB and tr[A, B] using the Fricke identity, and interpret the result.
  49. Use the Hurwitz bound to find the maximum order of the automorphism group of a closed Riemann surface of genus 7, and name a surface attaining it.
  50. Compute the area of the standard fundamental domain of PSL(2,ℤ) by direct integration.
  51. Prove that for g(z) = λz, λ > 1, the minimum of d(z, gz) is ln λ, attained exactly on the imaginary axis.
  52. For a closed hyperbolic surface of genus 2, estimate the number of orbit points γ(p) within distance 10 of p.
  53. Compute the total curvature of the catenoid x(u, v) = (cosh v cos u, cosh v sin u, v).
  54. Verify Gauss–Bonnet with boundary for a geodesic disk of radius r on the unit sphere and on the hyperbolic plane.
  55. Show that a horocycle has geodesic curvature 1, and verify Gauss–Bonnet for the cusp region {Im z ≥ 1}/(z ↦ z + 2π).
  56. Find the regular hyperbolic tiling {p, q} whose tiles have the smallest possible area.
  57. Show that the three points −1 + i, i, 1 + i in H do not lie on any hyperbolic circle, and explain which equivalent of the parallel postulate this violates.
  58. In the hyperboloid model, show that the lines with unit normals n₁ = (1, 0, 0) and n₂ = (cosh 2, 0, sinh 2) are ultraparallel and find the length of their common perpendicular.
  59. How many tiles of the {8,3} tiling form a fundamental domain of a genus-2 surface? Check with the Euler characteristic.
  60. In an open FLRW universe whose spatial sections are hyperbolic with curvature radius R_c, find the area of a sphere of geodesic radius r, and its ratio to the Euclidean value at r = R_c.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. Excess = 210° − 180° = 30° = π/6, so area π/6.
  2. Excess 360° − 180° = π; area = R² · π = 4π.
  3. Area = 2θR² = 2 · (π/5) · 9 = 18π/5.
  4. cos c = cos a cos b = (√2/2)² = 1/2, so c = π/3.
  5. cos d = sin 0 sin 45° + cos 0 cos 45° cos 90° = 0, so d = π/2.
  6. 9 + 0 − 10 = −1 and x₃ > 0. cosh d = √10, so d = arccosh √10 ≈ 1.8184.
  7. ln 4 ≈ 1.3863 (Proposition 5.1).
  8. |z − w|² = 9 + 16 = 25 and 2 · 1 · 5 = 10, so cosh d = 1 + 25/10 = 7/2 and d = arccosh 3.5 ≈ 1.9248.
  9. det = 4 − 3 = 1, tr = 5 > 2: hyperbolic, with ℓ = 2 arccosh(5/2) ≈ 3.1336.
  10. det = 1, tr = 1: elliptic. Fixed points: z² + z + 1 = 0, so z = (−1 + i√3)/2 = e^{2πi/3}. Rotation angle θ with 2cos(θ/2) = 1, so θ = 2π/3 and the order is 3.
  11. tr = 2 and it is not the identity: parabolic, z ↦ z + 4, fixing ∞ and sliding each horocycle Im z = c.
  12. g(i) = (2i + 1)/(i + 1) = (2i + 1)(1 − i)/2 = (3 + i)/2. Im = 1/2 = 1/|i + 1|².
  13. ln((1 + 3/5)/(1 − 3/5)) = ln 4.
  14. k = 2(3/5)/(1 + 9/25) = 15/17; check artanh(15/17) = ½ ln(32/2) = ln 4.
  15. π − 90° = π − π/2 = π/2.
  16. 3π − 5π/2 = π/2.
  17. cosh c = 2 · 5 = 10.
  18. cos Π = tanh(ln 5) = 24/26 = 12/13, so Π = arccos(12/13) ≈ 22.62°.
  19. sinh(ln 3) = 4/3 and cosh(ln 3) = 5/3: circumference 8π/3, area 2π(5/3 − 1) = 4π/3.
  20. λ = 3/y, Δ ln λ = 1/y², K = −(1/y²)/(9/y²) = −1/9.

Advanced

  21. In ABCD (right angles at A, B, AD = BC), triangles DAB and CBA are congruent (SAS), so DB = CA. Then triangles ADC and BCD have equal sides AD = BC, DC = CD, AC = BD, so they are congruent (SSS) and ∠ADC = ∠BCD.
  22. Reflect ABCD repeatedly in its legs to obtain n congruent Saccheri quadrilaterals A₀A₁D₁D₀, A₁A₂D₂D₁, …, side by side; since the base angles are right, A₀, A₁, …, Aₙ lie on one line and A₀Aₙ = n·AB. By the triangle inequality along the broken path A₀D₀D₁⋯DₙAₙ, n·AB ≤ AD + n·CD + AD. Thus AB ≤ CD + 2AD/n for every n, and by the Archimedean property AB ≤ CD.
  23. cos α = cos s/(1 + cos s) = (1/2)/(3/2) = 1/3, α = arccos(1/3) ≈ 70.53°. Area 3 arccos(1/3) − π ≈ 0.5513.
  24. By the second law, cos c = (cos γ + cos α cos β)/(sin α sin β) = cos(π/3) = 1/2, so c = π/3; cos a = (cos α + cos β cos γ)/(sin β sin γ) = 0, so a = b = π/2. Area π/3.
  25. cos(d/R) = sin 40.71° sin 51.51° + cos 40.71° cos 51.51° cos 73.88° gives d/R ≈ 0.8743 rad ≈ 50.10°, so d ≈ 5570 km.
  26. |z − w|² = 2, 2 · 1 · 2 = 4, cosh d = 3/2. d = ln(3/2 + √5/2) = ln φ² = 2 ln φ ≈ 0.9624.
  27. Centre x₀ with x₀² + 1 = (2 − x₀)² + 4 gives x₀ = 7/4; radius² = 49/16 + 1 = 65/16. Endpoints (7 ± √65)/4 ≈ −0.2656 and 3.7656.
  28. z ↦ (z − 1)/(z + 1) has determinant 2; normalised, (1/√2)(1 −1; 1 1). It maps 0 ↦ −1, ∞ ↦ 1, and i ↦ (i − 1)/(i + 1) = i, so the image is the unit semicircle.
  29. det = 1, tr = 4: ℓ = 2 arccosh 2 = 2 ln(2 + √3) ≈ 2.6339. Fixed points: 2z² − 2z − 1 = 0, z = (1 ± √3)/2. The axis is the semicircle with centre 1/2 and radius √3/2.
  30. Conjugate to k_φ with rotation 2φ = 2π/n, so φ = π/n and |tr| = 2cos(π/n). Integer traces in (−2, 2) are 0, ±1, giving n = 2 or 3; orders 4 and 6 would need |tr| = √2 or √3. So nontrivial finite-order elements of PSL(2,ℤ) have order 2 or 3.
  31. |u − v|² = 1/2 and (1 − 1/4)² = 9/16, so cosh d = 1 + 2(1/2)/(9/16) = 25/9, d = arccosh(25/9) ≈ 1.6807.
  32. C(2i) = i/(3i) = 1/3, and d(0, 1/3) = ln((4/3)/(2/3)) = ln 2 = d(i, 2i).
  33. artanh(1/2) = ½ ln 3 ≈ 0.5493.
  34. cosh c = 2 · 3 − √3 · √8 · ½ = 6 − √6 ≈ 3.5505, so c ≈ 1.9398.
  35. Second law: cosh c = (cos(π/3) + cos²(π/4))/sin²(π/4) = (1/2 + 1/2)/(1/2) = 2, c = arccosh 2 ≈ 1.3170 (opposite π/3). cosh a = (cos(π/4) + cos(π/4)cos(π/3))/(sin(π/4) sin(π/3)) = (3√2/4)/(√6/4) = √3, so a = b = arccosh √3 ≈ 1.1462. Area π − 5π/6 = π/6.
  36. Area 4π − 6 · π/2 = π. cosh ρ = cot(π/6) cot(π/4) = √3, ρ ≈ 1.1462.
  37. Area π − 3 · 2π/7 = π/7. cosh s = cos(2π/7)/(1 − cos(2π/7)) ≈ 0.62349/0.37651 ≈ 1.6560, s ≈ 1.0905.
  38. (p − 2)(q − 2) > 4 for {5,4} (6), {3,7} (5) and {4,5} (6). {4,4}, {3,6}, {6,3} give 4 (Euclidean) and {3,5} gives 3 (icosahedron).
  39. 2π(1 − 1/2 − 1/3 − 1/8) = 2π/24 = π/12. The surface has area 4π, so at most 4π/(π/12) = 48 symmetries; this is attained by the Bolza surface, whose automorphism group has order 48.
  40. 6 · π/3 = 2π.
  41. E = 1, √G = eˣ, K = −(eˣ)″/eˣ = −1. (These are horocyclic coordinates on H².)
  42. Outer: K = 1/(1 · 4) = 1/4. Inner: K = −1/(1 · 2) = −1/2. With dA = r(R + r cos v) du dv, ∫∫ K dA = ∫₀^{2π}∫₀^{2π} cos v du dv = 0.
  43. By Theorem 12.1, α + β + γ − π = ∫∫ K dA, and −2(0.3) ≤ ∫∫ K dA ≤ −1(0.3). Hence π − 0.6 ≤ α + β + γ ≤ π − 0.3.
  44. The cap has area 2π(1 − sin 30°) = π, so the holonomy is π. Foucault rotation: 2π sin 30° = π per sidereal day (180°).
  45. Γ^φ_λλ = −sin φ cos φ, Γ^λ_φλ = Γ^λ_λφ = cot φ, all others 0. The φ-equation of a geodesic is φ̈ − sin φ cos φ λ̇² = 0. For the unit-speed latitude circle φ = φ₀, λ̇ = 1/sin φ₀, the left side is −cot φ₀, which vanishes only if φ₀ = π/2 (the equator).

Challenge

  46. cos α = cos s/(1 + cos s) = ½(1 − s²/4) + O(s⁴). Writing α = π/3 + δ, cos α = ½ − (√3/2)δ + O(δ²), so δ = s²/(4√3) + O(s⁴). Excess = 3δ = √3 s²/4 + O(s⁴), the Euclidean area.
  47. Let R and P be the ideal endpoints of the line AB (R beyond A, P beyond B) and Q the ideal endpoint of the ray from A through C. The ideal triangle PQR is convex, A and B lie on its side RP, and C lies on the segment AQ inside it, so it contains ABC and hence the incircle of ABC. The largest disk contained in an ideal triangle is its incircle, of radius ½ ln 3 (Lesson 9). Hence every inradius is at most ½ ln 3; since ABC is a proper subset of PQR the bound is not attained.
  48. tr A = 3, tr B = 3, AB = (0 1; −1 3), tr AB = 3. Fricke: tr[A,B] = 9 + 9 + 9 − 27 − 2 = −2. The commutator is parabolic of trace −2, so A, B are holonomies of a once-punctured hyperbolic torus; (3, 3, 3) is the basic solution of x² + y² + z² = xyz.
  49. 84(7 − 1) = 504, attained by the Fricke–Macbeath surface, whose automorphism group is PSL(2, 8) of order 504.
  50. ∫ from −1/2 to 1/2 of ∫ from √(1 − x²) to ∞ of dy/y² dx = ∫ from −1/2 to 1/2 of dx/√(1 − x²) = arcsin(1/2) − arcsin(−1/2) = π/3.
  51. cosh d(z, λz) = 1 + (λ − 1)²|z|²/(2λy²) ≥ 1 + (λ − 1)²/(2λ) = (λ² + 1)/(2λ) = cosh ln λ, with equality iff |z| = y, i.e. Re z = 0.
  52. By the Delsarte–Huber asymptotic, the count is about Area(B₁₀)/Area(surface) = 2π(cosh 10 − 1)/(4π) ≈ e¹⁰/4 ≈ 5.5 × 10³.
  53. E = G = cosh²v, F = 0, so K = −Δ ln cosh v / cosh²v = −sech²v/cosh²v = −1/cosh⁴v, and dA = cosh²v du dv. Total curvature = −2π ∫ sech²v dv over ℝ = −2π · 2 = −4π.
  54. Sphere: the boundary circle has length 2π sin r and geodesic curvature cot r, so ∫∫ K dA + ∫ k_g ds = 2π(1 − cos r) + 2π cos r = 2π = 2πχ(disk). Hyperbolic: −2π(cosh r − 1) + 2π sinh r · coth r = 2π.
  55. The circle with hyperbolic centre ieʳ through i has hyperbolic radius r; as a Euclidean circle it has centre ieʳ cosh r and radius eʳ sinh r, so its lowest point is i, and as r → ∞ it converges to the horocycle Im z = 1. Its geodesic curvature coth r tends to 1. (Directly: for a conformal metric λ|dz| a curve of Euclidean curvature κ has k_g = (κ + ∂ₙ ln λ)/λ; for Im z = c, κ = 0 and |∂_y ln(1/y)|/λ = (1/c)/(1/c) = 1.) Gauss–Bonnet check on the cusp {Im z ≥ 1}/(z ↦ z + 2π): ∫∫ K dA = −2π, the boundary horocycle has length 2π and curves towards the region, contributing +2π, and the total 0 equals 2πχ of a punctured disk.
  56. Tile area π((p − 2) − 2p/q). For p = 3 it is π(q − 6)/q, minimised at q = 7: π/7. Other p give at least 2π/5 ({4,5}) or π/3 ({7,3}). The minimum is {3,7}, area π/7.
  57. The only generalised Euclidean circle through the three points is the line Im z = 1, a horocycle; hyperbolic circles are Euclidean circles contained in H. So the triangle has no circumcircle, violating equivalent (6) of Theorem 1.5.
  58. ⟨n₂, n₂⟩ = cosh²2 − sinh²2 = 1 and ⟨n₁, n₂⟩ = cosh 2 ≈ 3.762 > 1, so the lines are ultraparallel; the common perpendicular has length arccosh(cosh 2) = 2.
  59. {8,3} tiles have area 6π − 16π/3 = 2π/3, so 4π/(2π/3) = 6 tiles. Then F = 6, E = 6 · 8/2 = 24, V = 6 · 8/3 = 16, χ = 16 − 24 + 6 = −2 = 2 − 2 · 2.
  60. Area = 4πR_c² sinh²(r/R_c). At r = R_c the ratio to 4πr² is sinh²1 ≈ 1.381: a sphere in such a universe has 38% more area than its Euclidean counterpart, so an object of fixed size at that distance subtends a smaller angle (L/(R_c sinh(r/R_c)) instead of L/r), and there is more volume, hence more galaxies, within a given distance.
