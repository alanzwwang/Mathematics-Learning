Fractal Geometry — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Fractal geometry is the study of sets whose structure persists under magnification and whose size is not adequately described by length, area or volume. The elementary picture — the Koch curve has infinite length and zero area, the Sierpinski triangle has zero area and infinite perimeter, and a "dimension" such as log 4 / log 3 measures something in between — is the starting point of this course, not its goal. Here we make that picture rigorous and then push it into the territory where the subject meets analysis, probability and dynamical systems.

The mathematical backbone is threefold. First, a fractal is usually a compact set, and the space of compact sets carries a natural complete metric, the Hausdorff metric; in that space, a finite family of contractions defines a contraction, and Banach's fixed point theorem produces the self-similar sets as attractors. Second, the notion of dimension splits into several inequivalent definitions — similarity dimension, box-counting dimension and Hausdorff dimension, together with packing and affinity dimensions — and much of the theory consists of deciding when they agree and computing them when they do not. Third, fractals arise not only by design but by dynamics: Julia sets and the Mandelbrot set from iterating z ↦ z² + c, strange attractors and period-doubling cascades from the logistic map, and random fractals from Brownian motion.

The prerequisites are a first course in real analysis (metric spaces, compactness, uniform convergence), a working knowledge of Lebesgue measure, and elementary complex analysis. Probability enters only in the lesson on Brownian motion, where standard facts are quoted with references to their proofs. Throughout, log denotes the natural logarithm unless a base is indicated, |U| denotes the diameter sup{|x − y| : x, y ∈ U} of a set U ⊂ ℝⁿ, and B(x, r) is the closed ball of centre x and radius r.

The historical arc is worth keeping in view. Cantor's ternary set (1883), von Koch's curve (1904) and Sierpinski's gasket (1915) were constructed as counterexamples in analysis and topology. Carathéodory (1914) and Hausdorff (1918) supplied the measure theory that assigns fractional dimensions; Besicovitch and his school developed it from the 1920s to the 1950s. Fatou and Julia (1918–1920) founded complex dynamics without ever seeing a computer picture of a Julia set. Mandelbrot's books of 1975–1982 unified these strands, named them, and showed their reach into the sciences; Hutchinson (1981) and Barnsley (1988) gave the iterated function system formalism; Douady and Hubbard (1982–1985) proved the first deep theorems on the Mandelbrot set; Feigenbaum (1978) discovered universality in period doubling. The subject remains an active research area, with major problems such as the local connectivity of the Mandelbrot set still open.

In this course, you will:

  1. Work in the complete metric space of compact sets equipped with the Hausdorff metric
  2. Prove the contraction mapping theorem and use it to construct attractors of iterated function systems
  3. Code self-similar sets by infinite words and analyse the chaos game
  4. Derive the similarity dimension from the Moran equation and understand the open set condition
  5. Define and compute box-counting dimensions, and see where they fail
  6. Build Hausdorff measures by the Carathéodory construction and define Hausdorff dimension
  7. Prove that the Cantor set has Hausdorff dimension log 2 / log 3, using the mass distribution principle
  8. Prove the Moran–Hutchinson theorem and meet self-affine sets, where dimensions genuinely differ
  9. Study Julia sets: escape radius, complete invariance and the Fatou–Julia dichotomy
  10. Study the Mandelbrot set as the connectedness locus, with its cardioid, bulbs and open problems
  11. Analyse the logistic map, period doubling and the Feigenbaum constants
  12. Compute the dimensions of Brownian paths and graphs, and of Weierstrass-type functions
  13. Meet multifractal measures, the τ-spectrum and the Legendre transform

─────────────────────────────────
Lesson 1: Metric Spaces and the Hausdorff Metric
─────────────────────────────────

📌 Key idea of this section:

        For non-empty compact A, B ⊂ X:
        h(A, B) = max{ sup_{a∈A} d(a, B),  sup_{b∈B} d(b, A) }
        If (X, d) is complete, then (𝒦(X), h) is complete.

Fractals are sets, and to speak of a sequence of sets converging to a fractal — the stages of the Koch construction converging to the Koch curve, say — we need a topology on a space of sets. The right choice for compact sets is the Hausdorff metric, introduced by Hausdorff in his Grundzüge der Mengenlehre (1914).

Distance from a point to a set

Let (X, d) be a metric space. For x ∈ X and a non-empty set A ⊂ X, put d(x, A) = inf{d(x, a) : a ∈ A}. The function x ↦ d(x, A) is 1-Lipschitz: for any a ∈ A, d(x, a) ≤ d(x, y) + d(y, a), and taking the infimum over a gives d(x, A) ≤ d(x, y) + d(y, A). If A is compact the infimum is attained.

For ε > 0 define the closed ε-neighbourhood of A as

        A_ε = { x ∈ X : d(x, A) ≤ ε }

Definition of the Hausdorff metric

Let 𝒦(X) be the collection of non-empty compact subsets of X. For A, B ∈ 𝒦(X) define

        h(A, B) = max{ sup_{a∈A} d(a, B),  sup_{b∈B} d(b, A) }
                = inf{ ε ≥ 0 : A ⊂ B_ε and B ⊂ A_ε }

The two expressions agree: A ⊂ B_ε says exactly that sup_{a∈A} d(a, B) ≤ ε, and since both suprema are attained on compact sets, the infimum in the second line is attained and equals the maximum in the first.

Theorem 1.1. h is a metric on 𝒦(X).

Proof. Finiteness: a compact set is bounded and d(·, B) is continuous, so the suprema are finite. Symmetry is built into the definition. If h(A, B) = 0 then every a ∈ A has d(a, B) = 0, so a lies in the closure of B, which is B itself; hence A ⊂ B, and by symmetry A = B. For the triangle inequality, let A, B, C ∈ 𝒦(X) and a ∈ A. For every c ∈ C we have d(a, B) ≤ d(a, c) + d(c, B) ≤ d(a, c) + h(C, B). Taking the infimum over c, d(a, B) ≤ d(a, C) + h(C, B) ≤ h(A, C) + h(C, B). The same bound holds for d(b, A) with b ∈ B, so h(A, B) ≤ h(A, C) + h(C, B). ∎

Two warnings. The Hausdorff metric is not a measure of how much the sets overlap: h({0}, [0, 1]) = 1 although {0} ⊂ [0, 1]. And it is not continuous with respect to Lebesgue measure: the finite sets Pₙ = {k/n : 0 ≤ k ≤ n} have measure zero but h(Pₙ, [0, 1]) = 1/(2n) → 0. Fractal approximations behave in exactly this way: the stages of a construction may have positive area while the limit has none.

Worked example. Let A = [0, 1] and B = [0, 3] in ℝ. Every point of A lies in B, so sup_{a∈A} d(a, B) = 0. The point of B farthest from A is 3, at distance 2. Hence h(A, B) = 2. More generally, for intervals h([a, b], [c, d]) = max{|a − c|, |b − d|}, because the distance from a point to an interval is a convex function of the point and is therefore maximised at an endpoint.

Completeness

Theorem 1.2. If (X, d) is complete, then (𝒦(X), h) is complete. If X is compact, then 𝒦(X) is compact.

Proof. Let (Aₙ) be Cauchy in 𝒦(X). Define A to be the set of points x ∈ X for which there exist n₁ < n₂ < ⋯ and points x_k ∈ A_{n_k} with x_k → x. (Equivalently, A = ⋂ₙ closure(⋃_{m≥n} A_m).) We show A is non-empty, compact, and that h(Aₙ, A) → 0.

Fix ε > 0 and choose N₁ < N₂ < ⋯ such that h(A_m, Aₙ) < ε 2^{−j} for m, n ≥ N_j; put N = N₁. Starting from any y₁ ∈ A_{N₁}, pick y_{j+1} ∈ A_{N_{j+1}} with d(y_j, y_{j+1}) < ε 2^{−j}; this is possible because d(y_j, A_{N_{j+1}}) ≤ h(A_{N_j}, A_{N_{j+1}}). The sequence (y_j) is Cauchy, so it converges to some y ∈ A, and d(y₁, y) < ∑ ε 2^{−j} = ε. This shows A is non-empty and, since y₁ ∈ A_N was arbitrary (and the argument works from any n ≥ N), every point of Aₙ (n ≥ N) is within ε of A.

Conversely, if x ∈ A then x is a limit of points x_k ∈ A_{n_k}; for n ≥ N and n_k ≥ N large, d(x, Aₙ) ≤ d(x, x_k) + h(A_{n_k}, Aₙ) < 2ε eventually. So h(Aₙ, A) ≤ 2ε for all n ≥ N.

Finally A is closed by construction (it is an intersection of closed sets) and totally bounded: a finite ε-net of A_N, which exists because A_N is compact, is a 3ε-net of A. A closed totally bounded subset of a complete space is compact. For the second statement, if X is compact then it is totally bounded, and the finite subsets of a finite ε-net of X form a finite ε-net of 𝒦(X) in h; so 𝒦(X) is complete and totally bounded, hence compact. ∎

The second half of Theorem 1.2 is the Blaschke selection theorem in its general form: every sequence of non-empty compact subsets of a compact metric space has a subsequence converging in the Hausdorff metric.

Two useful inequalities

Lemma 1.3. For A, B, C, D ∈ 𝒦(X), h(A ∪ B, C ∪ D) ≤ max{h(A, C), h(B, D)}.

Proof. If ε ≥ max{h(A, C), h(B, D)} then A ⊂ C_ε ⊂ (C ∪ D)_ε and B ⊂ D_ε ⊂ (C ∪ D)_ε; symmetrically C ∪ D ⊂ (A ∪ B)_ε. ∎

Lemma 1.4. If f : X → X is Lipschitz with constant L, then h(f(A), f(B)) ≤ L·h(A, B).

Proof. If a ∈ A and b ∈ B with d(a, b) = d(a, B), then d(f(a), f(B)) ≤ d(f(a), f(b)) ≤ L d(a, B) ≤ L h(A, B). By symmetry the claim follows; note f(A) is compact because f is continuous. ∎

✏️ Your Turn

(a) Compute h([0, 1], [2, 5]) in ℝ.
(b) Compute h(Pₙ, [0, 1]) where Pₙ = {0, 1/n, 2/n, …, 1}.
(c) In ℝ², compute h(S, D), where S is the unit circle and D is the closed unit disc.
(d) Give an example showing that the space of non-empty closed bounded subsets of a non-complete metric space need not be complete under h.

Answers: (a) Endpoint differences are |0 − 2| = 2 and |1 − 5| = 4, so h = 4 (the point 5 is at distance 4 from [0, 1]). (b) Every point of Pₙ is in [0, 1]; the point of [0, 1] farthest from Pₙ is the midpoint of a gap, at distance 1/(2n). So h = 1/(2n). (c) S ⊂ D, and the point of D farthest from S is the origin, at distance 1, so h = 1. (d) In X = (0, 1] with the usual metric, the singletons {1/n} are Cauchy in h (h({1/n}, {1/m}) = |1/n − 1/m|) but have no limit in 𝒦(X), since the only candidate {0} is not a subset of X.

─────────────────────────────────
Lesson 2: Contractions and Iterated Function Systems
─────────────────────────────────

📌 Key idea of this section:

        If f₁, …, f_N are contractions of a complete space X,
        the Hutchinson operator  T(A) = f₁(A) ∪ ⋯ ∪ f_N(A)
        is a contraction of (𝒦(X), h), so there is a unique compact F with F = T(F).

The Banach fixed point theorem

A map f : X → X is a contraction if there is c < 1 with d(f(x), f(y)) ≤ c d(x, y) for all x, y; the least such c is the contraction ratio (or Lipschitz constant) of f. If equality holds for all x, y, f is a similarity with ratio c.

Theorem 2.1 (Banach, 1922). Let (X, d) be a complete metric space and f a contraction with ratio c < 1. Then f has a unique fixed point x*, and for every x₀ ∈ X the iterates xₙ = fⁿ(x₀) converge to x*, with

        d(xₙ, x*) ≤ cⁿ/(1 − c) · d(x₀, x₁)          (a priori bound)
        d(xₙ, x*) ≤ c/(1 − c) · d(xₙ₋₁, xₙ)          (a posteriori bound)

Proof. By induction d(x_k, x_{k+1}) ≤ c^k d(x₀, x₁). For m > n, the triangle inequality gives

        d(xₙ, x_m) ≤ ∑_{k=n}^{m−1} c^k d(x₀, x₁) < cⁿ/(1 − c) · d(x₀, x₁)

so (xₙ) is Cauchy, and converges to some x* by completeness. As f is continuous, f(x*) = lim f(xₙ) = lim xₙ₊₁ = x*. If y* were another fixed point, d(x*, y*) = d(f(x*), f(y*)) ≤ c d(x*, y*) forces d(x*, y*) = 0. Letting m → ∞ in the displayed inequality gives the a priori bound; applying that bound with xₙ₋₁ as the starting point gives the a posteriori bound. ∎

Worked example. The map f(x) = cos x is not a contraction of ℝ, but it maps [0, 1] into [cos 1, 1] ⊂ [0, 1], and |f′(x)| = |sin x| ≤ sin 1 ≈ 0.8415 there. Banach's theorem therefore applies on [0, 1] with c = sin 1, and iteration from any starting point converges to the unique solution x* ≈ 0.739085 of cos x = x (the Dottie number). With x₀ = 0, x₁ = 1, the a priori bound says that n iterations suffice for an error below 10⁻⁶ once 0.8415ⁿ/(1 − 0.8415) < 10⁻⁶, that is n ≥ 91. The bound is pessimistic: |f′(x*)| = sin x* ≈ 0.674, so the actual error decays roughly like 0.674ⁿ.

Iterated function systems

Definition. An iterated function system (IFS) on a complete metric space X is a finite family {f₁, …, f_N} of contractions, N ≥ 2. Its Hutchinson operator is T : 𝒦(X) → 𝒦(X),

        T(A) = ⋃_{i=1}^{N} f_i(A)

Theorem 2.2 (Hutchinson, 1981). Let c_i be the ratio of f_i and c = max c_i. Then T is a contraction of (𝒦(X), h) with ratio c. Consequently there is a unique F ∈ 𝒦(X), the attractor of the IFS, with

        F = f₁(F) ∪ ⋯ ∪ f_N(F)

and Tⁿ(A) → F in the Hausdorff metric for every A ∈ 𝒦(X).

Proof. By Lemma 1.3 (extended to N sets by induction) and Lemma 1.4,

        h(T(A), T(B)) ≤ max_i h(f_i(A), f_i(B)) ≤ max_i c_i h(A, B) = c·h(A, B)

Since 𝒦(X) is complete (Theorem 1.2), Banach's theorem applies. ∎

The theorem explains why the pictures in an elementary treatment look the same no matter what initial shape is used: begin with a square, a single point or a picture of a cat, and the iterates Tⁿ(A) converge to the same attractor. If A is chosen with T(A) ⊂ A — for instance a large enough ball — the iterates are nested, Tⁿ⁺¹(A) ⊂ Tⁿ(A), and F = ⋂ₙ Tⁿ(A). This is the classical "remove the middle third" description of the Cantor set.

Examples

The middle-third Cantor set C is the attractor of f₁(x) = x/3, f₂(x) = x/3 + 2/3 on ℝ. The Sierpinski triangle with vertices p₁, p₂, p₃ ∈ ℝ² is the attractor of f_i(x) = (x + p_i)/2. The von Koch curve is the attractor of four similarities of ratio 1/3, two of which involve rotations by ±60°. The unit interval itself is the attractor of x ↦ x/2, x ↦ x/2 + 1/2 — so "having an IFS" does not make a set fractal in any interesting sense.

Barnsley's fern is the attractor of four affine maps of ℝ² of the form x ↦ Ax + b. The fern makes a point that will recur: affine maps that are not similarities produce sets whose dimension theory is considerably harder (Lesson 8).

The collage theorem

Theorem 2.3 (Barnsley). If T is the Hutchinson operator of an IFS with ratio c and A ∈ 𝒦(X) is arbitrary, then

        h(A, F) ≤ h(A, T(A)) / (1 − c)

Proof. h(A, F) ≤ h(A, T(A)) + h(T(A), T(F)) ≤ h(A, T(A)) + c h(A, F), and rearrange. ∎

The collage theorem is the basis of fractal image compression: to approximate a target set A by an attractor, it suffices to find a few contractions whose images "cover A by small copies of itself" — that is, make h(A, T(A)) small. It is the a posteriori bound of Theorem 2.1 in disguise.

✏️ Your Turn

(a) Show that x ↦ x/2 + 1/2 and x ↦ x/2 have attractor [0, 1] by checking the fixed point equation.
(b) For a contraction with c = 1/3 and d(x₀, x₁) = 2, find the least n for which the a priori bound guarantees d(xₙ, x*) < 10⁻³.
(c) Let T be the Hutchinson operator of the Cantor IFS and A = [0, 1]. Compute h(A, T(A)), and use the collage theorem to bound h([0, 1], C). Is the bound sharp?

Answers: (a) f₁([0, 1]) ∪ f₂([0, 1]) = [0, 1/2] ∪ [1/2, 1] = [0, 1], and the attractor is unique. (b) We need 3⁻ⁿ · 2/(2/3) = 3^{1−n} < 10⁻³, i.e. 3^{n−1} > 1000; since 3⁶ = 729 and 3⁷ = 2187, n − 1 = 7, so n = 8. (c) T([0, 1]) = [0, 1/3] ∪ [2/3, 1]; the point 1/2 is at distance 1/6 from it, so h = 1/6 and the bound is (1/6)/(2/3) = 1/4. The true value is h([0, 1], C) = 1/6, attained at x = 1/2 (all other gaps are smaller), so the collage bound is not sharp.

─────────────────────────────────
Lesson 3: Coding, Addresses and the Chaos Game
─────────────────────────────────

📌 Key idea of this section:

        The coding map π : {1, …, N}^ℕ → F,
        π(i₁i₂i₃…) = lim_{n→∞} f_{i₁} ∘ f_{i₂} ∘ ⋯ ∘ f_{iₙ}(x₀)
        is a continuous surjection from the symbol space onto the attractor.

Symbolic space

Let Σ = {1, …, N}^ℕ be the space of infinite words i = i₁i₂i₃… with the metric ρ(i, j) = 2^{−k}, where k is the length of the longest common prefix of i and j (and ρ(i, i) = 0). Then Σ is a compact metric space homeomorphic to the Cantor set; the cylinder sets [i₁…iₙ] = {j : j₁ = i₁, …, jₙ = iₙ} are the closed (and open) balls. Write f_{i₁…iₙ} = f_{i₁} ∘ ⋯ ∘ f_{iₙ} and F_{i₁…iₙ} = f_{i₁…iₙ}(F).

Theorem 3.1. For every i ∈ Σ, the sets F_{i₁…iₙ} are nested and |F_{i₁…iₙ}| ≤ cⁿ|F| → 0, so ⋂ₙ F_{i₁…iₙ} is a single point π(i). The map π : Σ → F is continuous and surjective, and π(i) = lim f_{i₁…iₙ}(x₀) for every x₀ ∈ X.

Proof. Nesting: F_{i₁…iₙ₊₁} = f_{i₁…iₙ}(f_{iₙ₊₁}(F)) ⊂ f_{i₁…iₙ}(F) because f_j(F) ⊂ F. The diameter bound follows from Lemma 1.4. A nested sequence of non-empty compact sets with diameters tending to 0 has one-point intersection. If ρ(i, j) ≤ 2^{−n}, then π(i), π(j) ∈ F_{i₁…iₙ}, so |π(i) − π(j)| ≤ cⁿ|F|: π is uniformly continuous. Surjectivity: iterating F = ⋃ f_i(F) gives F = ⋃_{|w|=n} F_w for each n, so a point x ∈ F lies in some F_{i₁} ∩ F_{i₁i₂} ∩ ⋯ by König's lemma (or compactness of Σ). Finally, both f_{i₁…iₙ}(x₀) and π(i) lie in f_{i₁…iₙ}(F ∪ {x₀}), whose diameter is at most cⁿ|F ∪ {x₀}| → 0, which gives the last claim. ∎

For the Cantor set, π(i₁i₂…) = ∑ 2(i_k − 1) 3^{−k}: the attractor consists exactly of the numbers in [0, 1] having a ternary expansion with digits 0 and 2 only, and π is a homeomorphism. For the interval [0, 1] with the two halving maps, π is the binary expansion map, which is two-to-one at dyadic rationals; so coding maps need not be injective, and the failure of injectivity is measured precisely by how much the pieces f_i(F) overlap.

Shift dynamics

The left shift σ(i₁i₂i₃…) = i₂i₃… satisfies π(i) = f_{i₁}(π(σi)). When the pieces f_i(F) are pairwise disjoint (the strong separation condition), π is a homeomorphism and the map g : F → F defined by g = f_i⁻¹ on f_i(F) is conjugate to σ. Since the shift has a dense orbit and dense periodic points and is sensitive to initial conditions, g is chaotic in the sense of Devaney; this is the first example of the link between fractal sets and chaotic dynamics that Lessons 9–11 develop.

The chaos game

Fix probabilities p₁, …, p_N > 0 with ∑ p_i = 1. Start at x₀ ∈ X, and repeatedly set x_{k+1} = f_{i_k}(x_k), where i₀, i₁, i₂, … are independent with P(i_k = j) = p_j. Note the order: the new map is applied on the outside, so x_k = f_{i_{k−1}} ∘ ⋯ ∘ f_{i₀}(x₀) — this is a backward composition relative to π, which is why the points x_k do not converge but wander over F.

Theorem 3.2 (Elton, 1987, in simplified form). With probability one, the orbit {x_k} accumulates on all of F; indeed d(x_k, F) ≤ c^k d(x₀, F), and every cylinder F_w is visited infinitely often. Moreover the empirical measures (1/n)∑_{k<n} δ_{x_k} converge weakly to the self-similar measure μ, the unique Borel probability measure with

        μ = ∑_{i=1}^{N} p_i · μ ∘ f_i⁻¹

Proof of the first part. d(x_{k+1}, F) ≤ d(f_{i_k}(x_k), f_{i_k}(F)) ≤ c d(x_k, F), since f_{i_k}(F) ⊂ F. For a fixed word w = w₁…w_m, the event that the next m symbols are w_m, …, w₁ (in that order, so that x_{k+m} = f_{w₁…w_m}(x_k)) has probability p_{w₁}⋯p_{w_m} > 0 independently in disjoint blocks, so by the second Borel–Cantelli lemma it happens infinitely often; when it happens, x_{k+m} lies within c^m d(x_k, F) + (diameter of F_w) of F_w. ∎

The existence and uniqueness of μ is itself a contraction argument: on the space of Borel probability measures on F with the Wasserstein (Kantorovich–Rubinstein) metric, the operator ν ↦ ∑ p_i ν ∘ f_i⁻¹ is a contraction with ratio c. The measure μ is the image under π of the Bernoulli product measure (p₁, …, p_N)^ℕ on Σ. Self-similar measures reappear as the prototypical multifractals in Lesson 13.

✏️ Your Turn

(a) Find π(1222…) and π(2111…) for the Cantor IFS, and explain why the coding map is nevertheless injective.
(b) For the IFS x ↦ x/2, x ↦ x/2 + 1/2, show that π(1222…) = π(2111…).
(c) For the Sierpinski IFS f_i(x) = (x + p_i)/2, which point has address 123123123…?

Answers: (a) π(1222…) = ∑_{k≥2} 2·3^{−k} = 2·(1/9)/(2/3) = 1/3, and π(2111…) = 2/3. Different words give different points because the two first-level pieces [0, 1/3] and [2/3, 1] are disjoint, and by self-similarity the same holds at every level. (b) π(1222…) = ∑_{k≥2} 2^{−k} = 1/2 = π(2111…), the two binary expansions 0.0111… and 0.1000… of 1/2. (c) It is the fixed point of f₁ ∘ f₂ ∘ f₃, namely x = f₁(f₂(f₃(x))) = x/8 + p₃/8 + p₂/4 + p₁/2, so x = (4p₁ + 2p₂ + p₃)/7.

─────────────────────────────────
Lesson 4: Similarity Dimension, the Moran Equation and the Open Set Condition
─────────────────────────────────

📌 Key idea of this section:

        For an IFS of similarities with ratios r₁, …, r_N, the similarity dimension s is
        the unique solution of   r₁ˢ + r₂ˢ + ⋯ + r_Nˢ = 1   (Moran's equation).

The Moran equation

Let {f₁, …, f_N} be similarities of ℝⁿ with ratios 0 < r_i < 1. The function φ(t) = ∑ r_iᵗ is continuous and strictly decreasing, with φ(0) = N ≥ 2 and φ(t) → 0 as t → ∞. Hence there is a unique s > 0 with φ(s) = 1; it is called the similarity dimension of the IFS. When all ratios are equal to r, Moran's equation reads N rˢ = 1 and gives the familiar formula

        s = log N / log(1/r)

The heuristic is scaling: if F = ⋃ f_i(F) with the pieces essentially disjoint, and if some s-dimensional "size" 𝓗ˢ scales by r_iˢ under f_i, then 𝓗ˢ(F) = ∑ r_iˢ 𝓗ˢ(F), and a size that is neither 0 nor ∞ requires ∑ r_iˢ = 1. Lesson 8 turns this heuristic into a theorem.

Worked example 1 (two different ratios). Take f₁(x) = x/2 and f₂(x) = x/4 + 3/4 on ℝ, whose attractor is a Cantor set with first-level pieces [0, 1/2] and [3/4, 1]. Setting u = 2^{−s}, Moran's equation reads u + u² = 1, so u = (√5 − 1)/2 = 1/φ, the reciprocal of the golden ratio. Hence

        s = log φ / log 2 = 0.4812 / 0.6931 ≈ 0.6942

Worked example 2. Take ratios 1/2, 1/4, 1/4. With u = 2^{−s}, the equation u + 2u² = 1 has positive root u = 1/2, so s = 1 exactly. (Indeed [0, 1] is the attractor of x ↦ x/2, x ↦ x/4 + 1/2, x ↦ x/4 + 3/4.)

Similarity dimension is a property of the IFS, not of the set

The same set may be generated by many IFSs. [0, 1] is generated by k maps of ratio 1/k for every k ≥ 2, always with s = 1. But [0, 1] is also the attractor of the three maps x ↦ x/2, x ↦ x/2 + 1/2 and x ↦ x/2 + 1/4, whose similarity dimension is log 3 / log 2 ≈ 1.585 > 1. Overlaps inflate the similarity dimension. In general the Hausdorff dimension of the attractor (Lesson 6) satisfies dim_H F ≤ min{s, n}, and equality can fail badly when pieces overlap.

The open set condition

Definition. The IFS satisfies the open set condition (OSC) if there is a non-empty bounded open set V ⊂ ℝⁿ with

        f_i(V) ⊂ V for every i,  and  f_i(V) ∩ f_j(V) = ∅ for i ≠ j

The OSC formalises "the pieces f_i(F) touch, if at all, only in a negligible way". For the Cantor set take V = (0, 1). For the Sierpinski triangle take V to be the open triangle: the three half-size open triangles are disjoint although their closures meet at three points. For the Koch curve one can take V to be the interior of the isosceles triangle with base [0, 1] and apex at the peak of the curve.

The OSC is stronger than requiring the attractor's pieces to be disjoint up to measure zero, and weaker than the strong separation condition f_i(F) ∩ f_j(F) = ∅. A theorem of Schief (1994) shows that for similarities the OSC is equivalent to the strong open set condition (one may take V ∩ F ≠ ∅) and to 0 < 𝓗ˢ(F), where s is the similarity dimension.

Theorem 4.1 (Moran 1946, Hutchinson 1981). If an IFS of similarities on ℝⁿ satisfies the open set condition, then the attractor F satisfies

        dim_H F = dim_B F = s,  and  0 < 𝓗ˢ(F) < ∞

The proof requires the Hausdorff measure, defined in Lesson 6; we give it in Lesson 8.

Dimension of products and graph-directed sets

If F ⊂ ℝ is the attractor of N₁ similarities of ratio r and E ⊂ ℝ of N₂ similarities of the same ratio r, then F × E ⊂ ℝ² is the attractor of N₁N₂ similarities of ratio r, so its similarity dimension is log(N₁N₂)/log(1/r) = s_F + s_E. For example C × C, the Cantor dust, has dimension 2 log 2 / log 3 = log 4 / log 3 ≈ 1.2619 — the same as the Koch curve, though one is totally disconnected and the other is an arc. Dimension does not determine topology.

More general self-similar structures arise when the pieces of several sets are copies of one another (graph-directed constructions of Mauldin and Williams, 1988). The dimension is then the unique s for which the matrix M(s) with entries ∑ r_eˢ over edges e from vertex i to vertex j has spectral radius 1, which reduces to Moran's equation when there is a single vertex.

✏️ Your Turn

(a) Find the similarity dimension of the Sierpinski carpet (keep 8 of the 9 subsquares of side 1/3) and of the Menger sponge (keep 20 of the 27 subcubes).
(b) Solve Moran's equation for ratios 1/3, 1/3, 1/9.
(c) Show that the similarity dimension of the IFS with ratios r₁, …, r_N is at most n whenever the OSC holds in ℝⁿ.
(d) Find the dimension of the set of x ∈ [0, 1] whose base-5 expansion uses only the digits 0, 2 and 4.

Answers: (a) log 8 / log 3 ≈ 1.8928 and log 20 / log 3 ≈ 2.7268. (b) With u = 3^{−s}: 2u + u² = 1, so u = √2 − 1 and s = −log(√2 − 1)/log 3 = log(1 + √2)/log 3 ≈ 0.8814/1.0986 ≈ 0.8023. (c) The sets f_i(V) are disjoint subsets of V with volumes r_iⁿ vol(V), so ∑ r_iⁿ ≤ 1 = ∑ r_iˢ; since t ↦ ∑ r_iᵗ is decreasing, s ≤ n. (d) Three maps of ratio 1/5 with disjoint pieces [0, 1/5], [2/5, 3/5], [4/5, 1]: s = log 3 / log 5 ≈ 0.6826.

─────────────────────────────────
Lesson 5: Box-Counting Dimension
─────────────────────────────────

📌 Key idea of this section:

        dim_B F = lim_{δ→0} log N_δ(F) / (−log δ),
        where N_δ(F) is the least number of sets of diameter at most δ that cover F.
        Upper and lower box dimensions use lim sup and lim inf.

Definitions

Let F ⊂ ℝⁿ be non-empty and bounded, and let N_δ(F) be the smallest number of sets of diameter at most δ that cover F. The lower and upper box-counting dimensions are

        dim_B̲ F = lim inf_{δ→0} log N_δ(F) / (−log δ)
        dim_B̄ F = lim sup_{δ→0} log N_δ(F) / (−log δ)

and when they agree the common value is the box-counting (or box, or Minkowski–Bouligand) dimension dim_B F. Informally, N_δ(F) ≈ δ^{−d} with d = dim_B F: a curve of dimension 1 needs about δ⁻¹ boxes, a surface about δ⁻², and the Koch curve about δ^{−1.2619}.

Equivalent forms

Proposition 5.1. The box dimensions are unchanged if N_δ(F) is replaced by any of: (i) the number of δ-mesh cubes [m₁δ, (m₁+1)δ] × ⋯ × [mₙδ, (mₙ+1)δ] that meet F; (ii) the smallest number of closed balls of radius δ that cover F; (iii) the largest number of disjoint closed balls of radius δ with centres in F.

Proof. Each count is bounded above and below by constant multiples of the others at comparable scales, and such constants disappear in the limit because log(cδ)/log δ → 1. For (i): a mesh cube of side δ has diameter δ√n, so N_{δ√n}(F) ≤ N′_δ(F); and a set of diameter at most δ lies in at most 3ⁿ mesh cubes of side δ, so N′_δ(F) ≤ 3ⁿ N_δ(F). For (ii): a ball of radius δ has diameter 2δ, and a set of diameter δ lies in a ball of radius δ. For (iii): let B(x₁, δ), …, B(x_k, δ) be a maximal disjoint family with centres in F. By maximality every point of F lies within 2δ of some x_i, so the balls B(x_i, 2δ), of diameter 4δ, cover F and N_{4δ}(F) ≤ k. Conversely, the centres are more than 2δ apart, so a set of diameter at most δ contains at most one of them; since each centre lies in some set of a minimal δ-cover, k ≤ N_δ(F). ∎

A further simplification: it suffices to let δ → 0 through a geometric sequence δ_k = c^k (0 < c < 1). If c^{k+1} ≤ δ < c^k, then N_{c^k} ≤ N_δ ≤ N_{c^{k+1}}, and log N_δ / (−log δ) is squeezed between log N_{c^k} / (−(k+1) log c) and log N_{c^{k+1}} / (−k log c), whose limits coincide.

Worked example: the Koch curve. At scale δ = 3^{−k}, the curve is covered by its 4^k level-k pieces, each of diameter 3^{−k}, so N_{3^{−k}} ≤ 4^k. Conversely, the level-k pieces satisfy the open set condition, and a volume argument (Lemma 8.1 below) shows that a set of diameter 3^{−k} meets at most a bounded number M of them; hence N_{3^{−k}} ≥ 4^k / M. Therefore

        dim_B K = lim log 4^k / log 3^k = log 4 / log 3 ≈ 1.2619

Minkowski content and parallel bodies

A second classical formulation uses the volume of the δ-parallel body F_δ = {x : d(x, F) ≤ δ}. One shows

        dim_B̄ F = n − lim inf_{δ→0} log Lⁿ(F_δ) / log δ
        dim_B̲ F = n − lim sup_{δ→0} log Lⁿ(F_δ) / log δ

where Lⁿ is Lebesgue measure. The idea: F_δ is covered by the N_δ(F) sets of diameter δ, each fattened to diameter 3δ, so Lⁿ(F_δ) ≤ c N_δ(F) δⁿ; and F_δ contains the disjoint balls of (iii), so Lⁿ(F_δ) ≥ c′ N′′_δ(F) δⁿ with N′′ the packing count. When Lⁿ(F_δ) ~ M δ^{n−d} with 0 < M < ∞, the constant M is (up to normalisation) the d-dimensional Minkowski content of F. For the middle-third Cantor set the ratio L¹(C_δ)/δ^{1−d} oscillates and does not converge, a phenomenon called lacunarity; for self-similar subsets of ℝ the Minkowski content exists precisely when the logarithms of the ratios r_i do not all lie in a common lattice aℤ (Lapidus and van Frankenhuijsen; Falconer 1995).

The sequence {1/k}

Proposition 5.2. Let F = {0} ∪ {1/k : k ∈ ℕ}. Then dim_B F = 1/2.

Proof. The gap between 1/k and 1/(k + 1) is 1/(k(k + 1)), which decreases in k. Fix a small δ > 0 and let K be the largest integer with K(K + 1) < 1/δ; then K ~ δ^{−1/2}.

Lower bound: the gaps between consecutive points among 1, 1/2, …, 1/(K + 1) are all at least 1/(K(K + 1)) > δ, so these K + 1 points are pairwise more than δ apart, and a set of diameter at most δ contains at most one of them. Hence N_δ(F) ≥ K + 1.

Upper bound: by maximality of K, (K + 1)(K + 2) ≥ 1/δ. Cover the K points 1, …, 1/K by K singletons, and the rest of F, which lies in [0, 1/(K + 1)], by at most 1/((K + 1)δ) + 1 ≤ K + 3 intervals of length δ. Hence N_δ(F) ≤ 2K + 3.

Since K + 1 ≤ N_δ(F) ≤ 2K + 3 and K ~ δ^{−1/2}, log N_δ(F)/(−log δ) → 1/2. ∎

The same argument shows that {0} ∪ {k^{−p} : k ∈ ℕ} has box dimension 1/(1 + p) for every p > 0: the gap after k^{−p} is about p k^{−p−1}, so the points are δ-separated for k ≲ δ^{−1/(p+1)}, and the remaining interval [0, k^{−p}] has length about δ^{p/(p+1)}, which needs about δ^{−1/(p+1)} intervals of length δ.

Properties and defects

Proposition 5.3. (a) dim_B̲ and dim_B̄ are monotone, and dim_B̄ is finitely stable: dim_B̄(E ∪ F) = max{dim_B̄ E, dim_B̄ F}. (b) If f is Lipschitz then dim_B̄ f(F) ≤ dim_B̄ F, and bi-Lipschitz maps preserve both box dimensions. (c) dim_B̲ F̄ = dim_B̲ F and dim_B̄ F̄ = dim_B̄ F, where F̄ is the closure of F.

Proof. (a) N_δ(E ∪ F) ≤ N_δ(E) + N_δ(F) ≤ 2 max{N_δ(E), N_δ(F)}. (b) If f is L-Lipschitz, the images of a δ-cover form an Lδ-cover. (c) The closure of a set of diameter δ has diameter δ, so a finite cover of F by closed sets of diameter at most δ also covers F̄. ∎

Property (c) is the decisive defect. The rationals in [0, 1] form a countable set with closure [0, 1], so their box dimension is 1; but a countable set should be "zero-dimensional". Box dimension is not countably stable: ℚ ∩ [0, 1] is a countable union of points of dimension 0, yet has dimension 1. The set {1/k} shows the same defect more subtly. Box dimension is nevertheless indispensable: it is computable, it is what experimentalists estimate from log–log plots, and for most well-behaved self-similar sets it coincides with the Hausdorff dimension defined next.

✏️ Your Turn

(a) Compute the box dimension of the Sierpinski triangle by counting at scales 2^{−k}.
(b) Find dim_B of {0} ∪ {k^{−2} : k ∈ ℕ}, and of {0} ∪ {2^{−k} : k ∈ ℕ}.
(c) Give a compact set whose lower and upper box dimensions differ.
(d) Show that if dim_B̲ F < n then F has Lebesgue measure zero.

Answers: (a) At level k the triangle is covered by its 3^k level-k pieces, each of diameter 2^{−k} times the side, and by the open set condition a set of diameter 2^{−k} meets boundedly many of them, so N ≍ 3^k at scale 2^{−k}, and dim_B = log 3 / log 2 ≈ 1.585. (b) 1/(1 + 2) = 1/3 for k^{−2}. For 2^{−k}: at scale δ the points 2^{−k} > 2δ are δ-separated, and there are about log₂(1/δ) of them, while [0, 2δ] needs 2 more intervals; so N_δ ~ log₂(1/δ), and dim_B = 0. (c) Let F ⊂ [0, 1] be the set of x whose decimal digit in position k is 0 whenever (2j)! < k ≤ (2j + 1)! for some j, with the other digits arbitrary. At δ = 10^{−k} we have N_δ(F) ≍ 10^{a(k)}, where a(k) is the number of free positions up to k. At k = (2j + 1)!, a(k) ≤ (2j)! = o(k); at k = (2j + 2)!, a(k) ≥ k − (2j + 1)! = k(1 − o(1)). Hence dim_B̲ F = 0 and dim_B̄ F = 1. (d) Lⁿ(F) ≤ Lⁿ(F_δ) ≤ c N_δ(F) δⁿ. If dim_B̲ F < s < n, then N_δ(F) ≤ δ^{−s} along a sequence δ → 0, so Lⁿ(F) ≤ c δ^{n−s} → 0 along that sequence.

─────────────────────────────────
Lesson 6: Hausdorff Measure and Hausdorff Dimension
─────────────────────────────────

📌 Key idea of this section:

        𝓗ˢ(F) = lim_{δ→0} inf{ ∑ |U_i|ˢ : F ⊂ ⋃ U_i, |U_i| ≤ δ }
        dim_H F = inf{ s ≥ 0 : 𝓗ˢ(F) = 0 } = sup{ s : 𝓗ˢ(F) = ∞ }

The Carathéodory construction

Let F ⊂ ℝⁿ, s ≥ 0 and δ > 0. A δ-cover of F is a countable (or finite) collection {U_i} of sets with |U_i| ≤ δ and F ⊂ ⋃ U_i. Define

        𝓗ˢ_δ(F) = inf{ ∑_i |U_i|ˢ : {U_i} is a δ-cover of F }

As δ decreases the class of admissible covers shrinks, so 𝓗ˢ_δ(F) increases, and the limit

        𝓗ˢ(F) = lim_{δ→0} 𝓗ˢ_δ(F) = sup_{δ>0} 𝓗ˢ_δ(F) ∈ [0, ∞]

exists. It is the s-dimensional Hausdorff measure of F. (Many authors include a normalising constant so that 𝓗ⁿ agrees with Lebesgue measure on ℝⁿ; we use the unnormalised version, which changes nothing about dimensions.)

The restriction |U_i| ≤ δ is essential. Without it, one obtains the Hausdorff content 𝓗ˢ_∞, which sees only the coarsest covers: 𝓗¹_∞ of a circle of radius 1 is at most 2, its diameter, rather than its length 2π. Forcing the covers to be fine lets 𝓗ˢ see the small-scale geometry. The content is not a Borel measure but is useful in potential theory, and it has the same null sets as 𝓗ˢ.

Theorem 6.1. 𝓗ˢ is a metric outer measure on ℝⁿ; consequently every Borel set is 𝓗ˢ-measurable and 𝓗ˢ restricted to the Borel sets is a measure.

Proof. Countable subadditivity: given F ⊂ ⋃ F_j and ε > 0, take δ-covers of F_j with sums less than 𝓗ˢ_δ(F_j) + ε 2^{−j}; their union is a δ-cover of F, so 𝓗ˢ_δ(F) ≤ ∑ 𝓗ˢ_δ(F_j) + ε ≤ ∑ 𝓗ˢ(F_j) + ε. Metric additivity: if dist(E, F) > 0 and δ < dist(E, F), no set of diameter at most δ meets both E and F, so a δ-cover of E ∪ F splits into a δ-cover of E and one of F, and 𝓗ˢ_δ(E ∪ F) = 𝓗ˢ_δ(E) + 𝓗ˢ_δ(F) for such δ. Carathéodory's criterion then says a metric outer measure makes all Borel sets measurable. ∎

Basic properties

(a) Scaling: if g is a similarity of ratio λ, then 𝓗ˢ(g(F)) = λˢ 𝓗ˢ(F), since g maps δ-covers bijectively to λδ-covers and multiplies each |U_i|ˢ by λˢ. More generally, if g is Lipschitz with constant L, 𝓗ˢ(g(F)) ≤ Lˢ 𝓗ˢ(F).

(b) Hölder maps: if |g(x) − g(y)| ≤ c|x − y|^α, then 𝓗^{s/α}(g(F)) ≤ c^{s/α} 𝓗ˢ(F), because a set of diameter |U| is mapped into a set of diameter at most c|U|^α.

(c) Counting and Lebesgue: 𝓗⁰ is counting measure. 𝓗¹ on ℝ is Lebesgue measure, and on ℝⁿ, 𝓗¹ of a simple rectifiable curve equals its length. In general 𝓗ⁿ = (2ⁿ/ω_n) Lⁿ on ℝⁿ, where ω_n = π^{n/2}/Γ(n/2 + 1) is the volume of the unit ball; the inequality 𝓗ⁿ ≥ (2ⁿ/ω_n) Lⁿ is the isodiametric inequality Lⁿ(U) ≤ ω_n (|U|/2)ⁿ, and the reverse needs a Vitali covering argument.

The dimension jump

Lemma 6.2. If 𝓗ˢ(F) < ∞ and t > s, then 𝓗ᵗ(F) = 0. If 𝓗ᵗ(F) > 0 and s < t, then 𝓗ˢ(F) = ∞.

Proof. For any δ-cover, ∑ |U_i|ᵗ ≤ δ^{t−s} ∑ |U_i|ˢ. Taking infima, 𝓗ᵗ_δ(F) ≤ δ^{t−s} 𝓗ˢ_δ(F) ≤ δ^{t−s} 𝓗ˢ(F) → 0. The second statement is the contrapositive. ∎

So the graph of s ↦ 𝓗ˢ(F) is ∞ for s < d and 0 for s > d, for a unique critical value d ∈ [0, n]: this is the Hausdorff dimension,

        dim_H F = inf{ s : 𝓗ˢ(F) = 0 } = sup{ s : 𝓗ˢ(F) = ∞ }

At s = d itself, 𝓗ᵈ(F) may be 0, positive and finite, or ∞. A set with 0 < 𝓗ᵈ(F) < ∞ is called a d-set; the Cantor set is a (log 2/log 3)-set (Lesson 7), and so is every self-similar set satisfying the open set condition (Lesson 8).

Properties of Hausdorff dimension

Theorem 6.3. (i) Monotonicity: E ⊂ F ⇒ dim_H E ≤ dim_H F. (ii) Countable stability: dim_H ⋃_j F_j = sup_j dim_H F_j. (iii) Countable sets have Hausdorff dimension 0. (iv) Open subsets of ℝⁿ have dimension n; smooth m-dimensional submanifolds have dimension m. (v) If g is α-Hölder, dim_H g(F) ≤ (1/α) dim_H F; bi-Lipschitz maps preserve dim_H. (vi) dim_H F ≤ dim_B̲ F ≤ dim_B̄ F for bounded F.

Proof. (i) is immediate from monotonicity of 𝓗ˢ. (ii) The inequality ≥ is (i). If s > sup dim_H F_j, then 𝓗ˢ(F_j) = 0 for all j and 𝓗ˢ(⋃F_j) ≤ ∑ 𝓗ˢ(F_j) = 0. (iii) follows from (ii) since a point has dimension 0. (iv) Lⁿ(V) > 0 for open V gives 𝓗ⁿ(V) > 0, while 𝓗ᵗ(ℝⁿ) = 0 for t > n by covering unit cubes with kⁿ cubes of side 1/k; for submanifolds use local bi-Lipschitz charts. (v) is property (b) above. (vi) If dim_B̲ F < t < s, there are δ_k → 0 with N_{δ_k}(F) ≤ δ_k^{−t}. Then 𝓗ˢ_{δ_k}(F) ≤ N_{δ_k}(F) δ_kˢ ≤ δ_k^{s−t} → 0, and since 𝓗ˢ_δ increases to 𝓗ˢ as δ ↓ 0, 𝓗ˢ(F) = lim_k 𝓗ˢ_{δ_k}(F) = 0. Hence dim_H F ≤ s. ∎

The inequality in (vi) can be strict: ℚ ∩ [0, 1] has Hausdorff dimension 0 and box dimension 1, and {1/k} ∪ {0} has Hausdorff dimension 0 and box dimension 1/2.

Packing dimension

Dual to Hausdorff measure, which uses efficient covers by small sets, is the packing measure of Tricot (1982) and Taylor–Tricot (1985), which uses efficient packings by small disjoint balls centred in the set. The resulting packing dimension dim_P satisfies

        dim_H F ≤ dim_P F ≤ dim_B̄ F
        dim_P F = inf{ sup_j dim_B̄ F_j : F ⊂ ⋃_j F_j }

so packing dimension is the countably stable regularisation of upper box dimension. For every self-similar set with the OSC, all of dim_H, dim_P, dim_B̲ and dim_B̄ agree.

✏️ Your Turn

(a) Show that a line segment L of length ℓ in ℝ² has 𝓗¹(L) = ℓ and dim_H L = 1.
(b) Prove that the graph of a Lipschitz function g : [0, 1] → ℝ has Hausdorff dimension 1.
(c) Show directly from the definition that 𝓗ˢ(ℚ ∩ [0, 1]) = 0 for every s > 0.
(d) What is the box dimension of E = [0, 1] × C, with C the middle-third Cantor set?

Answers: (a) Covering L by k pieces of length ℓ/k gives 𝓗¹_{ℓ/k}(L) ≤ ℓ. Projecting any cover orthogonally onto the line through L does not increase diameters and gives a cover of an interval of length ℓ by sets whose convex hulls are intervals, so ∑|U_i| ≥ ℓ by subadditivity of length. Hence 𝓗¹(L) = ℓ ∈ (0, ∞) and dim_H L = 1. (b) The map x ↦ (x, g(x)) is bi-Lipschitz from [0, 1] onto the graph, so dim_H of the graph equals dim_H [0, 1] = 1. (c) Enumerate the rationals q₁, q₂, …; cover q_j by an interval of diameter (ε 2^{−j})^{1/s}. Then ∑|U_j|ˢ = ε and all diameters are at most ε^{1/s}. Letting ε → 0 gives 𝓗ˢ_δ = 0 for every δ, so 𝓗ˢ = 0. (d) At scale 3^{−k}, E is covered by 3^k · 2^k squares of side 3^{−k}, and the count is sharp up to a constant, so dim_B E = log 6 / log 3 = 1 + log 2 / log 3 ≈ 1.6309.

─────────────────────────────────
Lesson 7: Computing Hausdorff Dimension — The Cantor Set and the Mass Distribution Principle
─────────────────────────────────

📌 Key idea of this section:

        Upper bounds come from exhibiting covers.
        Lower bounds come from measures:  μ(U) ≤ c|U|ˢ for all small U  ⇒  𝓗ˢ(F) ≥ μ(F)/c.

Upper bounds are easy, lower bounds are hard

To show dim_H F ≤ s it suffices to exhibit, for each δ, one δ-cover with ∑|U_i|ˢ bounded. To show dim_H F ≥ s one must control every cover, and covers can be cleverly shaped. The standard way around this is to construct a measure on F that is spread out evenly enough that no set can carry much of it relative to its size.

Theorem 7.1 (Mass distribution principle). Let μ be a finite Borel measure with μ(F) > 0, and suppose there are c > 0 and δ₀ > 0 such that μ(U) ≤ c|U|ˢ for all sets U with |U| ≤ δ₀. Then 𝓗ˢ(F) ≥ μ(F)/c, and in particular dim_H F ≥ s.

Proof. If {U_i} is any δ-cover of F with δ ≤ δ₀, then μ(F) ≤ μ(⋃U_i) ≤ ∑ μ(U_i) ≤ c ∑|U_i|ˢ (replacing each U_i by its closure if necessary, so that it is Borel, without changing its diameter). Taking the infimum, 𝓗ˢ_δ(F) ≥ μ(F)/c for all δ ≤ δ₀, and letting δ → 0 gives the claim. ∎

The middle-third Cantor set

Let C = ⋂_k C_k, where C_k is the union of the 2^k closed intervals of length 3^{−k} remaining after k steps of removing open middle thirds. Put s = log 2 / log 3, so that 3ˢ = 2 and 2^k (3^{−k})ˢ = 1.

Theorem 7.2. 1/2 ≤ 𝓗ˢ(C) ≤ 1. In particular dim_H C = dim_B C = log 2 / log 3 ≈ 0.6309.

Proof. Upper bound: the 2^k level-k intervals cover C and have diameter 3^{−k}, so 𝓗ˢ_{3^{−k}}(C) ≤ 2^k 3^{−ks} = 1. Letting k → ∞, 𝓗ˢ(C) ≤ 1.

Lower bound: let μ be the Cantor measure, the unique Borel probability measure giving mass 2^{−k} to each level-k interval (equivalently, the distribution of ∑ 2X_k 3^{−k} with X_k independent fair bits, or the Lebesgue–Stieltjes measure of the Cantor function). Two facts about the geometry: level-k intervals have length 3^{−k}, and any two distinct level-k intervals are separated by a gap of length at least 3^{−k}, since the gaps created at step j ≤ k have length 3^{−j} ≥ 3^{−k}.

Let U be a set with 0 < |U| < 1, and let k ≥ 0 be the integer with 3^{−(k+1)} ≤ |U| < 3^{−k}. Because the gaps between level-k intervals are at least 3^{−k} > |U|, the set U meets at most one level-k interval. Hence

        μ(U) ≤ 2^{−k} = (3^{−k})ˢ = 3ˢ (3^{−(k+1)})ˢ ≤ 3ˢ |U|ˢ = 2|U|ˢ

By the mass distribution principle with c = 2, 𝓗ˢ(C) ≥ μ(C)/2 = 1/2. Since 0 < 𝓗ˢ(C) < ∞, dim_H C = s. The box dimension is squeezed between dim_H C = s and the covering bound N_{3^{−k}}(C) ≤ 2^k, so it equals s too. ∎

With more work one shows 𝓗ˢ(C) = 1 exactly: one reduces an arbitrary finite cover by intervals to a cover by level-k intervals without increasing ∑|U_i|ˢ, using the concavity of t ↦ tˢ (Falconer, Fractal Geometry, Example 2.7, proves the bounds above and outlines the sharp value). Exact values of Hausdorff measures are known for few fractals; for the Sierpinski triangle only numerical bounds are known.

Frostman's lemma

The mass distribution principle has a converse, which makes it the universal method.

Theorem 7.3 (Frostman, 1935). Let F ⊂ ℝⁿ be a Borel set with 𝓗ˢ(F) > 0. Then there exist a compact E ⊂ F, a Borel probability measure μ supported on E, and a constant c, such that μ(B(x, r)) ≤ c rˢ for all x ∈ ℝⁿ and r > 0.

For compact F the proof builds μ on dyadic cubes: start at a fine scale 2^{−k} with mass |Q|ˢ on each dyadic cube Q of side 2^{−k} meeting F, then move up the dyadic tree, scaling down the mass in any cube Q whose total exceeds |Q|ˢ. The resulting measure satisfies μ(Q) ≤ |Q|ˢ for every dyadic cube, and the maximal cubes in which a scaling occurred, together with the unscaled fine cubes, cover F and carry their full allotted mass; so the total mass is at least a constant times the dyadic Hausdorff content of F, which is positive. A weak-* limit as k → ∞ gives the measure.

The energy method

For a measure μ, the s-energy is

        I_s(μ) = ∫∫ |x − y|^{−s} dμ(x) dμ(y)

Theorem 7.4. If F supports a probability measure with I_s(μ) < ∞, then dim_H F ≥ s. Conversely, if dim_H F > s, then F supports a probability measure with I_s(μ) < ∞. Hence dim_H F = sup{ s : F supports μ with I_s(μ) < ∞ }, the capacitary characterisation of Hausdorff dimension.

Proof of the first statement. The potential φ(x) = ∫|x − y|^{−s} dμ(y) is finite for μ-almost every x, so there is M with E = {x : φ(x) ≤ M} satisfying μ(E) > 1/2. For x ∈ E and any r > 0, μ(B(x, r)) r^{−s} ≤ ∫_{B(x,r)} |x − y|^{−s} dμ(y) ≤ M. If U meets E and x ∈ U ∩ E, then U ⊂ B(x, |U|), so the restriction ν of μ to E satisfies ν(U) ≤ M|U|ˢ. The mass distribution principle applied to ν gives 𝓗ˢ(F) ≥ ν(E)/M > 0. ∎

For the converse, apply Frostman's lemma at a dimension t with s < t < dim_H F: if μ(B(x, r)) ≤ c rᵗ, then ∫|x − y|^{−s} dμ(y) = ∫₀^∞ μ{y : |x − y|^{−s} > u} du is bounded uniformly in x, since the integrand is at most min{1, c u^{−t/s}} and t/s > 1. The energy method is the main tool for random fractals, because the expected energy of a random measure is often computable by Fubini's theorem even when nothing about individual covers is. We use it for Brownian motion in Lesson 12.

Digit frequencies

Theorem 7.5 (Besicovitch 1934, Eggleston 1949). Let b ≥ 2 and let p₀, …, p_{b−1} ≥ 0 sum to 1. The set of x ∈ [0, 1] whose base-b expansion contains each digit i with asymptotic frequency p_i has Hausdorff dimension

        −∑_i p_i log p_i / log b

that is, its entropy divided by log b. For example, the numbers whose binary digits have asymptotic frequency 1/3 of ones have dimension (log 3 − (2/3) log 2)/log 2 ≈ 0.9183. The proof of the lower bound applies a local form of the mass distribution principle, due to Billingsley, to the Bernoulli measure with weights p_i, using the strong law of large numbers to estimate the measure of b-adic intervals.

✏️ Your Turn

(a) Show that the middle-λ Cantor set (remove the open middle interval of relative length λ at each stage, 0 < λ < 1) has Hausdorff dimension log 2 / log(2/(1 − λ)). Evaluate it for λ = 1/2.
(b) Find the Hausdorff dimension of the set of x ∈ [0, 1] whose decimal expansion never uses the digit 7.
(c) Explain why the mass distribution principle is needed even though covers by level-k intervals give the correct exponent.
(d) Show that the Cantor measure satisfies μ([0, x]) = xˢ for x of the form 3^{−k}, and deduce that μ(B(0, r)) ≤ 2rˢ for all 0 < r < 1.

Answers: (a) The set is generated by two similarities of ratio r = (1 − λ)/2 with disjoint images. The level-k intervals have length r^k and are separated by gaps of length at least λ r^{k−1} > λ r^k. Repeating the proof of Theorem 7.2 with this separation, a set U with λ r^{k+1} ≤ |U| < λ r^k meets at most one level-k interval, so μ(U) ≤ 2^{−k} = (r^k)ˢ ≤ (λr)^{−s}|U|ˢ, where s = log 2/log(1/r). Hence dim_H = log 2 / log(2/(1 − λ)); for λ = 1/2 it is log 2 / log 4 = 1/2. (b) Nine similarities of ratio 1/10 satisfying the OSC with V = (0, 1), so log 9 / log 10 ≈ 0.9542. (c) Covers by level-k intervals give only an upper bound; an arbitrary cover might use sets of many different sizes and be more efficient. The measure controls every cover simultaneously. (d) [0, 3^{−k}] is a level-k interval, of mass 2^{−k} = (3^{−k})ˢ. For 0 < r < 1, choose k with 3^{−(k+1)} ≤ r < 3^{−k}; the part of C in B(0, r) lies in [0, r] ⊂ [0, 3^{−k}], so μ(B(0, r)) ≤ 2^{−k} = 2·(3^{−(k+1)})ˢ ≤ 2rˢ.

─────────────────────────────────
Lesson 8: The Moran–Hutchinson Theorem, Overlaps and Self-Affine Sets
─────────────────────────────────

📌 Key idea of this section:

        Under the open set condition, a self-similar set has dim_H = dim_B = s, where ∑ r_iˢ = 1.
        For self-affine carpets the dimensions can differ:
        dim_H = log_m ∑_j t_j^{log m/log n}   versus   dim_B = log_m r + log_n(N/r)

A packing lemma

Lemma 8.1. Let {V_i} be a collection of disjoint open subsets of ℝⁿ such that each V_i contains a ball of radius a₁ρ and is contained in a ball of radius a₂ρ. Then any ball B of radius ρ meets at most q = (1 + 2a₂)ⁿ a₁^{−n} of the closures V̄_i.

Proof. If V̄_i meets B = B(x, ρ), then V̄_i ⊂ B(x, (1 + 2a₂)ρ), because V̄_i has diameter at most 2a₂ρ. If q′ of the closures meet B, then the corresponding disjoint balls of radius a₁ρ all lie in B(x, (1 + 2a₂)ρ), and comparing volumes, q′ (a₁ρ)ⁿ ≤ ((1 + 2a₂)ρ)ⁿ. ∎

Proof of the Moran–Hutchinson theorem

Recall the setting: similarities f₁, …, f_N of ℝⁿ with ratios r_i, attractor F, similarity dimension s, and an open set V witnessing the OSC. Write r_w = r_{w₁}⋯r_{w_k} for a word w = w₁…w_k, and r_min = min r_i.

Step 1 (stopping sets). For 0 < ρ < 1 let Q_ρ be the set of finite words w = w₁…w_k with r_w ≤ ρ < r_{w₁…w_{k−1}} (the empty word has ratio 1). Every infinite word has exactly one prefix in Q_ρ, so the cylinders [w], w ∈ Q_ρ, partition Σ. Consequently ∑_{w∈Q_ρ} r_wˢ = 1. Indeed, ∑_{|w|=k} r_wˢ = (∑ r_iˢ)^k = 1, and a finite partition of Σ into cylinders can be refined to the partition by all words of length k by repeatedly replacing a word w by its N children, which preserves the sum since ∑_i (r_w r_i)ˢ = r_wˢ. Also r_min ρ < r_w ≤ ρ for w ∈ Q_ρ.

Step 2 (upper bound). F = ⋃_{w∈Q_ρ} F_w, and |F_w| = r_w|F| ≤ ρ|F|. Hence 𝓗ˢ_{ρ|F|}(F) ≤ ∑_{w∈Q_ρ} r_wˢ |F|ˢ = |F|ˢ, so 𝓗ˢ(F) ≤ |F|ˢ < ∞ and dim_H F ≤ s. Also #Q_ρ · (r_min ρ)ˢ < ∑ r_wˢ = 1, so N_{ρ|F|}(F) ≤ #Q_ρ < (r_min ρ)^{−s}, and dim_B̄ F ≤ s. Step 2 does not use the OSC.

Step 3 (disjointness). If w, v ∈ Q_ρ are distinct, then neither is a prefix of the other, so they first differ at some position: w = u i w′, v = u j v′ with i ≠ j. Then f_w(V) ⊂ f_u(f_i(V)) and f_v(V) ⊂ f_u(f_j(V)), and these are disjoint because f_i(V) ∩ f_j(V) = ∅ and f_u is injective. Thus {f_w(V) : w ∈ Q_ρ} is a disjoint family of open sets.

Step 4 (lower bound). Choose a₁, a₂ such that V contains a ball of radius a₁ and is contained in a ball of radius a₂. Then f_w(V) contains a ball of radius r_w a₁ ≥ r_min a₁ ρ and is contained in a ball of radius r_w a₂ ≤ a₂ ρ. By Lemma 8.1 (with a₁ replaced by r_min a₁), any ball of radius ρ meets at most q = (1 + 2a₂)ⁿ (r_min a₁)^{−n} of the closures f_w(V̄). Since T(V̄) ⊂ V̄, iterating gives F ⊂ V̄, hence F_w ⊂ f_w(V̄).

Let ν be the Bernoulli measure on Σ with weights r_iˢ, so ν([w]) = r_wˢ, and let μ = ν ∘ π⁻¹, a probability measure on F. Let U be a set with |U| = ρ < 1, and B a ball of radius ρ containing U. If π(i) ∈ U, the prefix w of i in Q_ρ has π(i) ∈ F_w ⊂ f_w(V̄), so f_w(V̄) meets B. Hence

        μ(U) ≤ ∑{ ν([w]) : w ∈ Q_ρ, f_w(V̄) ∩ B ≠ ∅ } ≤ q ρˢ = q|U|ˢ

By the mass distribution principle, 𝓗ˢ(F) ≥ 1/q > 0, so dim_H F ≥ s. Combining with Step 2 and dim_H ≤ dim_B̲ ≤ dim_B̄, all three dimensions equal s. ∎

Overlaps

Without separation, dim_H F ≤ min{s, n} always holds and may be strict. Consider the IFS on ℝ

        f₁(x) = λx,   f₂(x) = λx + 1,   f₃(x) = λx + t

with similarity dimension log 3 / log(1/λ). For t = λ we have f₁ ∘ f₂(x) = λ²x + λ = f₃ ∘ f₁(x): two distinct words of length 2 give the same map. Such an exact overlap reduces the effective number of pieces, and the dimension of the attractor is then strictly less than s (hence less than min{1, s} whenever s ≤ 1; for s > 1 it can equal 1, e.g. λ = t = 1/2 gives the attractor [0, 2]). A breakthrough of Hochman (2014) shows that in ℝ exact overlaps are essentially the only obstruction: if the IFS satisfies an exponential separation condition — which holds, for instance, whenever all parameters are algebraic and there are no exact overlaps — then dim_H F = min{1, s}. Whether exact overlaps are the only obstruction for all self-similar sets on the line is the exact overlaps conjecture, still open in general.

Self-affine carpets

Replace similarities by affine maps x ↦ A_i x + b_i. The simplest non-conformal examples are the Bedford–McMullen carpets (Bedford 1984, McMullen 1984). Fix integers n > m ≥ 2, divide the unit square into a grid of n columns and m rows, so each rectangle has width 1/n and height 1/m, and choose a set D of N of these rectangles. The maps (x, y) ↦ (x/n, y/m) + (a/n, b/m), one for each chosen rectangle (a, b), generate a carpet F. Let t_j be the number of chosen rectangles in row j and r the number of rows with t_j ≥ 1.

Theorem 8.2 (McMullen, 1984). With θ = log m / log n,

        dim_H F = log_m ( ∑_{j=1}^{m} t_j^θ )
        dim_B F = log_m r + log_n (N/r)

and dim_H F < dim_B F unless all non-zero t_j are equal.

Proof of the box formula. Let l ≥ 1, δ = m^{−l}, and k = ⌊θl⌋, so that n^{−k} is comparable to m^{−l} = δ. An approximate square of level l is the set of points of F whose first k column digits and first l row digits are prescribed; it is contained in a rectangle of width n^{−k} and height m^{−l}, both comparable to δ. Choosing such a square amounts to choosing k chosen rectangles (N^k possibilities, which fix both digits at levels 1, …, k) and then l − k rows (r possibilities each). The approximate squares are disjoint pieces of F of size comparable to δ, so N_δ(F) ≍ N^k r^{l−k}, and

        log N_δ / (−log δ) = [k log N + (l − k) log r] / (l log m)
                           → θ log N / log m + (1 − θ) log r / log m
                           = log_n N + log_m r − log_n r = log_m r + log_n(N/r)

using θ/log m = 1/log n. The Hausdorff formula requires the McMullen measure, the Bernoulli measure giving each rectangle in row j weight t_j^{θ−1}/∑_i t_i^θ, together with a law of large numbers along approximate squares. ∎

Worked example. Take n = 3, m = 2, one rectangle in the top row and two in the bottom row (N = 3, r = 2, t = (1, 2)). Then θ = log 2 / log 3 ≈ 0.6309 and

        dim_H F = log₂(1 + 2^{0.6309}) = log₂(2.5486) ≈ 1.3497
        dim_B F = log₂ 2 + log₃(3/2) = 1 + 0.3691 ≈ 1.3691

The Hausdorff dimension is strictly smaller, a phenomenon impossible for self-similar sets with the OSC. Moreover, when the non-zero t_j are not all equal, the Hausdorff measure of the carpet in its own dimension is infinite (Peres, 1994).

Affinity dimension

For a general self-affine IFS, Falconer (1988) introduced the singular value function: if σ₁ ≥ ⋯ ≥ σₙ are the singular values of a matrix A and 0 ≤ s ≤ n, write s = k + η with k an integer and 0 ≤ η < 1, and set φˢ(A) = σ₁⋯σ_k σ_{k+1}^η. The affinity dimension is the unique d with

        lim_{k→∞} ( ∑_{|w|=k} φᵈ(A_w) )^{1/k} = 1

where A_w = A_{w₁}⋯A_{w_k}; for similarities it reduces to Moran's equation.

Theorem 8.3 (Falconer 1988; Solomyak 1998). If ‖A_i‖ < 1/2 for all i, then for Lebesgue-almost every choice of translations (b₁, …, b_N), the attractor satisfies dim_H F = dim_B F = min{d, n}.

Falconer proved this with the bound 1/3, and Solomyak observed that 1/2 suffices; the bound cannot be relaxed to 1. The carpets show that "almost every" cannot be dropped: their translations are special, aligned to a grid. Bárány, Hochman and Rapaport (2019) proved that for planar self-affine sets satisfying strong separation and an irreducibility condition on the linear parts, the Hausdorff dimension equals the affinity dimension.

✏️ Your Turn

(a) Verify Step 1 for the Cantor set: what is Q_ρ when ρ = 1/9?
(b) Compute dim_H and dim_B of the carpet with n = 4, m = 2, two rectangles in the top row and one in the bottom row.
(c) Show that if all non-zero t_j equal t, then both McMullen formulas reduce to log_m r + log_n t.
(d) For a Bedford–McMullen carpet with N = n·m (all rectangles chosen), what are the dimensions?

Answers: (a) Q_{1/9} consists of the 4 words of length 2, since r_w = 1/9 ≤ 1/9 < 1/3 = r_{w₁}; and ∑ r_wˢ = 4·(1/9)ˢ = 4·(1/4) = 1. (b) θ = log 2/log 4 = 1/2; dim_H = log₂(2^{1/2} + 1) = log₂(2.4142) ≈ 1.2716; dim_B = log₂ 2 + log₄(3/2) = 1 + 0.2925 ≈ 1.2925. (c) ∑ t_j^θ = r t^θ, so dim_H = log_m r + θ log_m t = log_m r + log t/log n = log_m r + log_n t; and N = rt, so dim_B = log_m r + log_n t as well. (d) The carpet is the whole square: t_j = n for all m rows, and both formulas give log_m m + log_n n = 2.

─────────────────────────────────
Lesson 9: Julia Sets of Quadratic Polynomials
─────────────────────────────────

📌 Key idea of this section:

        For f_c(z) = z² + c, the filled Julia set is K_c = { z ∈ ℂ : (f_cⁿ(z)) is bounded },
        and the Julia set is J_c = ∂K_c.
        If |z| > max{2, |c|}, then f_cⁿ(z) → ∞.

The fractals of Lessons 2–8 were defined by contractions. Julia sets arise from the opposite mechanism: a single expanding map whose repelling behaviour on a compact invariant set creates fine structure at all scales. Their study was founded by Pierre Fatou and Gaston Julia around 1918–1920, using Montel's theory of normal families, decades before the first computer pictures.

Escape radius

Lemma 9.1. Let R = max{2, |c|}. If |z| > R, then |f_cⁿ(z)| ≥ λⁿ |z| with λ = |z| − 1 > 1; in particular f_cⁿ(z) → ∞.

Proof. Since |c| ≤ R < |z|,

        |z² + c| ≥ |z|² − |c| > |z|² − |z| = |z|(|z| − 1) = λ|z|

So |f_c(z)| > λ|z| > |z| > R. The point f_c(z) again satisfies the hypothesis, and |f_c(z)| − 1 > |z| − 1 = λ, so by induction |f_cⁿ(z)| > λⁿ|z|. ∎

Corollary 9.2. K_c = ⋂_{n≥0} f_c^{−n}(D̄_R), where D̄_R is the closed disc of radius R. Hence K_c is compact; it is non-empty because it contains the fixed points of f_c; and it is completely invariant: f_c^{−1}(K_c) = K_c = f_c(K_c).

Proof. A point outside D̄_R escapes by Lemma 9.1, and so does any point with some iterate outside D̄_R; conversely a point whose orbit stays in D̄_R has bounded orbit. Each f_c^{−n}(D̄_R) is closed, and they are nested because f_c^{−1}(D̄_R) ⊂ D̄_R (if |z| > R then |f_c(z)| > R). Complete invariance holds because z and f_c(z) have the same orbit from the second term on, and f_c is surjective. ∎

The escape-time pictures of Julia sets colour each z by the first n with |f_cⁿ(z)| > R; by Lemma 9.1 this is a rigorous test.

Fatou and Julia sets

The Fatou set F_c is the set of z having a neighbourhood on which the iterates {f_cⁿ} form a normal family (every sequence has a subsequence converging locally uniformly, possibly to ∞). For polynomials, the Julia set J_c = ℂ \ F_c coincides with ∂K_c: on the interior of K_c the iterates are uniformly bounded, hence normal by Montel's theorem, and on ℂ \ K_c they converge to ∞ locally uniformly; at a point of ∂K_c, any neighbourhood contains points with bounded orbits and points escaping, so no subsequence converges locally uniformly.

Theorem 9.3 (Fatou, Julia). J_c is a non-empty, compact, perfect, completely invariant set with empty interior. It is the closure of the set of repelling periodic points. For every z ∈ J_c, the backward orbit ⋃ₙ f_c^{−n}(z) is dense in J_c; and for every open U meeting J_c, ⋃ₙ f_cⁿ(U) covers ℂ except at most one point.

The last property, a consequence of Montel's theorem that a family of holomorphic maps omitting two values is normal, says that J_c is where the dynamics is chaotic: arbitrarily small neighbourhoods of a point of J_c are eventually spread over the whole plane. The density of backward orbits gives the inverse iteration method for drawing J_c: iterate z ↦ ±√(z − c) with random signs, exactly as in the chaos game of Lesson 3. Indeed, when c ∉ M (Lesson 10) the two branches of f_c^{−1} are contractions in a suitable metric, and J_c is literally the attractor of a non-linear IFS.

Two exactly solvable examples

For c = 0, f₀(z) = z². Points with |z| < 1 converge to 0, points with |z| > 1 escape, and the unit circle is invariant, so K₀ is the closed unit disc and J₀ is the unit circle. In the angle coordinate z = e^{2πiθ}, f₀ acts on J₀ as the doubling map θ ↦ 2θ mod 1, which is chaotic.

For c = −2, consider the substitution z = w + 1/w with |w| ≥ 1, which maps {|w| > 1} conformally onto ℂ \ [−2, 2] and the unit circle two-to-one onto [−2, 2]. Then

        f₋₂(w + 1/w) = w² + 2 + w^{−2} − 2 = w² + w^{−2}

so f₋₂ is conjugate on ℂ \ [−2, 2] to w ↦ w² on {|w| > 1}, and every point off [−2, 2] escapes. On [−2, 2], writing z = 2 cos θ, f₋₂(2 cos θ) = 4 cos²θ − 2 = 2 cos 2θ, so [−2, 2] is invariant. Hence K₋₂ = J₋₂ = [−2, 2], a segment of dimension 1, and f₋₂ on it is a Chebyshev polynomial semiconjugate to angle doubling.

Fixed points and multipliers

The fixed points of f_c are the roots of z² − z + c = 0,

        z± = (1 ± √(1 − 4c))/2,   with multipliers λ± = f_c′(z±) = 2z±,   λ₊ + λ₋ = 2

A periodic point of period p with multiplier λ = (f_cᵖ)′(z) is attracting if |λ| < 1 (superattracting if λ = 0), repelling if |λ| > 1, and indifferent if |λ| = 1. Since λ₊ + λ₋ = 2, at most one fixed point can be attracting.

Theorem 9.4 (Fatou). The immediate basin of every attracting cycle of a polynomial contains a critical point.

Since f_c has a single critical point, 0, it has at most one attracting cycle, and if it has one, the orbit of 0 converges to it. The critical orbit governs everything — the observation that leads to the Mandelbrot set.

The fundamental dichotomy

Theorem 9.5 (Fatou, Julia). (i) If the critical orbit (f_cⁿ(0)) is bounded, then K_c and J_c are connected. (ii) If f_cⁿ(0) → ∞, then K_c = J_c is a Cantor set: compact, perfect and totally disconnected.

Proof sketch. Let D = D̄_R with R as in Lemma 9.1 (enlarged slightly so that its boundary avoids the critical orbit), and Dₙ = f_c^{−n}(D), so that K_c = ⋂ Dₙ. The map f_c : D_{n+1} → Dₙ is a proper holomorphic map of degree 2 branched only over the critical value c. By the Riemann–Hurwitz formula, if Dₙ is a closed topological disc containing c, then D_{n+1} is a closed topological disc; if Dₙ is a disc not containing c, then D_{n+1} consists of two disjoint discs, each mapped conformally onto Dₙ.

(i) If the critical orbit is bounded, it lies in K_c, so c = f_c(0) ∈ Dₙ for every n, and every Dₙ is a disc. A nested intersection of compact connected sets is connected, so K_c is connected, and so is its boundary J_c (for a compact connected set in the plane whose complement is connected, the boundary is connected).

(ii) If the critical orbit escapes, then c ∉ D_N for some N, so D_{N+1} splits into two discs, D_{N+2} into four, and so on. The inverse branches of f_c on these discs are uniformly contracting in the hyperbolic metric of D_N, so the components of Dₙ have diameters tending to zero, and K_c is a Cantor set — the attractor of a two-map conformal IFS. In particular K_c has no interior, so K_c = J_c. ∎

For |c| large the two inverse branches z ↦ ±√(z − c) contract by a factor of about 1/(2|c|^{1/2}) on J_c, and a conformal version of Moran's equation gives dim_H J_c ~ 2 log 2 / log |c| as |c| → ∞.

Dimension of Julia sets

For c = 0 and c = −2 the Julia set is smooth and has dimension 1; these are the only real-analytic Julia sets in the family. For small c ≠ 0, J_c is a quasicircle — a Jordan curve that is the image of the circle under a quasiconformal map — whose dimension is strictly greater than 1. Ruelle (1982) proved

        dim_H J_c = 1 + |c|²/(4 log 2) + o(|c|²)   as c → 0

using the thermodynamic formalism: for hyperbolic c, dim_H J_c is the unique zero t of the pressure function P(−t log|f_c′|), Bowen's formula (1979). At the other extreme, Shishikura (1998) proved that there are parameters c with dim_H J_c = 2, and Buff and Chéritat (2012) constructed quadratic Julia sets of positive Lebesgue measure.

✏️ Your Turn

(a) Show that the critical orbit for c = i is eventually periodic, and conclude that K_i is connected.
(b) Find the fixed points of f_c for c = −3/4 and classify them.
(c) For c = −2, verify that 2 cos(2π/7), 2 cos(4π/7), 2 cos(6π/7) form a cycle of period 3. Is it repelling?
(d) For c = 0.3, is J_c connected?

Answers: (a) 0 ↦ i ↦ i² + i = −1 + i ↦ (−1 + i)² + i = −2i + i = −i ↦ (−i)² + i = −1 + i. So the orbit is 0, i, −1 + i, −i, −1 + i, −i, …, bounded, and K_i is connected by Theorem 9.5 (it is a dendrite with empty interior). (b) z² − z − 3/4 = 0 gives z = 3/2 and z = −1/2, with multipliers 3 (repelling) and −1 (indifferent; parabolic, since −1 is a root of unity). (c) With z = 2 cos θ, f₋₂ doubles θ: 2π/7 → 4π/7 → 8π/7, and cos(8π/7) = cos(6π/7); then 12π/7 ≡ −2π/7 gives cos(12π/7) = cos(2π/7). So the three points form a 3-cycle. The multiplier is ∏ 2z_i = 8·∏ 2cos(2πk/7) = 8·8·cos(2π/7)cos(4π/7)cos(6π/7) = 8·8·(1/8) = 8, so the cycle is repelling, as every cycle in J₋₂ other than the fixed point 2 must be: differentiating f₋₂ᵖ(2 cos θ) = 2 cos(2ᵖθ) shows a period-p cycle off ±2 has multiplier ±2ᵖ. (d) No: 0 ↦ 0.3 ↦ 0.39 ↦ 0.4521 ↦ … The real orbit of 0 for real c > 1/4 is increasing with no fixed point to converge to (z² + c > z for all real z when 1 − 4c < 0), so it escapes and J_{0.3} is a Cantor set.

─────────────────────────────────
Lesson 10: The Mandelbrot Set
─────────────────────────────────

📌 Key idea of this section:

        M = { c ∈ ℂ : (f_cⁿ(0)) is bounded } = { c : K_c is connected }
        M ⊂ { |c| ≤ 2 },   c ∈ M  ⇔  |f_cⁿ(0)| ≤ 2 for all n,   M ∩ ℝ = [−2, 1/4]

By the dichotomy of Theorem 9.5, the parameter plane splits into the parameters for which K_c is connected and those for which it is a Cantor set. The first set is the Mandelbrot set M, the connectedness locus of the quadratic family. It was first drawn by Brooks and Matelski (1978) and made famous by Mandelbrot (1980); its systematic theory was created by Douady and Hubbard in the Orsay notes (1984–1985).

The radius-2 criterion

Theorem 10.1. If |c| > 2 then c ∉ M. If |c| ≤ 2, then c ∈ M if and only if |f_cⁿ(0)| ≤ 2 for every n. Consequently M is a compact subset of the closed disc of radius 2.

Proof. Write zₙ = f_cⁿ(0), so z₁ = c and z₂ = c² + c. Suppose |c| > 2. Then |z₂| ≥ |c|² − |c| = |c|(|c| − 1) > |c| > 2, so z₂ satisfies |z₂| > max{2, |c|}, and the orbit escapes by Lemma 9.1. Now suppose |c| ≤ 2. If |zₙ| > 2 for some n, then |zₙ| > 2 = max{2, |c|}, and the orbit escapes. Conversely if c ∈ M then all |zₙ| ≤ 2, since otherwise the orbit would escape. Finally M = ⋂ₙ {c : |f_cⁿ(0)| ≤ 2}, an intersection of closed sets (each f_cⁿ(0) is a polynomial in c), contained in the closed disc of radius 2. ∎

The real slice

Theorem 10.2. M ∩ ℝ = [−2, 1/4].

Proof. If c > 1/4, then z² − z + c > 0 for all real z, since the discriminant 1 − 4c is negative. So the real orbit of 0 is strictly increasing; a bounded increasing sequence would converge to a fixed point of f_c, of which there are none on ℝ. So the orbit is unbounded. If c < −2, then z₁ = c and z₂ = c² + c = |c|(|c| − 1) > |c| > 2, so the orbit escapes.

Now let −2 ≤ c ≤ 1/4 and β = (1 + √(1 − 4c))/2, the larger fixed point; β ≥ 1/2. We claim f_c maps I = [−β, β] into itself. On I, f_c(z) = z² + c ranges over [c, β² + c] = [c, β], so it suffices to show c ≥ −β, i.e. √(1 − 4c) ≥ −2c − 1. If c ≥ −1/2 the right side is at most 0, and the inequality holds. If −2 ≤ c < −1/2, both sides are non-negative and squaring gives 1 − 4c ≥ 4c² + 4c + 1, i.e. 0 ≥ 4c(c + 2), which holds for −2 ≤ c ≤ 0. Since 0 ∈ I, the orbit of 0 stays in I and is bounded. ∎

Hyperbolic components

A parameter c is hyperbolic if f_c has an attracting cycle. The set of hyperbolic parameters in M is open, and its connected components are the hyperbolic components; each has a well-defined period p, and the multiplier map λ : W → 𝔻, sending c to the multiplier of its attracting p-cycle, is a conformal isomorphism onto the unit disc (Douady–Hubbard). The parameter λ⁻¹(0) is the centre of W, where 0 itself is periodic.

The main cardioid. f_c has an attracting fixed point z with multiplier μ = 2z, |μ| < 1, exactly when c = z − z² with z = μ/2:

        c = μ/2 − μ²/4,   |μ| < 1

The boundary, traced by μ = e^{iθ}, is a cardioid with cusp at c = 1/4 (μ = 1) and leftmost point c = −3/4 (μ = −1). Its centre is c = 0.

The period-2 disc. The 2-cycles of f_c are the roots of f_c²(z) − z divided by the fixed-point factor:

        f_c²(z) − z = (z² − z + c)(z² + z + c + 1)

The roots z₁, z₂ of z² + z + c + 1 satisfy z₁ + z₂ = −1 and z₁z₂ = c + 1, so the multiplier of the 2-cycle is (f_c²)′ = f_c′(z₁) f_c′(z₂) = 4z₁z₂ = 4(c + 1). The cycle is attracting exactly when |c + 1| < 1/4: the hyperbolic component of period 2 is the open disc of radius 1/4 centred at −1, tangent to the cardioid at c = −3/4.

Bulbs. At each point c(θ) = e^{iθ}/2 − e^{2iθ}/4 of the cardioid with θ = 2πp/q (p/q in lowest terms), a fixed point becomes parabolic with multiplier a primitive q-th root of unity, and a hyperbolic component of period q is attached there, the p/q-bulb. For example, the 1/3-bulb is attached at

        c = e^{2πi/3}/2 − e^{4πi/3}/4 = −1/8 + (3√3/8) i ≈ −0.125 + 0.6495 i

Connectedness and the Böttcher map

Theorem 10.3 (Douady–Hubbard, 1982). M is connected. More precisely, the map Φ(c) = φ_c(c), where φ_c is the Böttcher coordinate of f_c near ∞ (the conformal map with φ_c(f_c(z)) = φ_c(z)² and φ_c(z) ~ z), extends to a conformal isomorphism Φ : ℂ \ M → ℂ \ D̄, with Φ(c) ~ c at ∞.

Since ℂ \ M is conformally a punctured disc around ∞, M is connected and full (its complement is connected), and its logarithmic capacity equals 1. The external rays Φ⁻¹({re^{2πiθ} : r > 1}) organise the combinatorics of M; rays with rational angles land: those with odd denominator at roots of hyperbolic components, those with even denominator at Misiurewicz points (parameters whose critical orbit is strictly preperiodic, like c = i).

Geometry and open problems

Shishikura (1998) proved that ∂M has Hausdorff dimension 2, the largest possible, as does J_c for generic c ∈ ∂M. Whether ∂M has positive area is unknown. The area of M is known only numerically, approximately 1.5066. The central open problem is the MLC conjecture: M is locally connected. Douady and Hubbard showed that MLC would imply the density of hyperbolicity (every component of the interior of M is hyperbolic), and Yoccoz proved local connectivity of M at all parameters that are not infinitely renormalisable. The small copies of M visible everywhere along its boundary — at the tips of the antennae, along the real axis near −1.75 — are explained by renormalisation: certain iterates f_cᵖ, restricted to small discs, behave like quadratic polynomials, giving homeomorphic copies of M inside M (Douady–Hubbard tuning).

The real slice of M is precisely the logistic family of Lesson 11 in disguise, and the period-doubling cascade of the logistic map is the sequence of hyperbolic components of periods 1, 2, 4, 8, … strung along the real axis between c = 1/4 and the Feigenbaum point c ≈ −1.4012.

✏️ Your Turn

(a) Find c on the main cardioid's interior with attracting fixed-point multiplier μ = 1/2, and the fixed point itself.
(b) For c = −1.1, find the multiplier of the 2-cycle and decide whether it is attracting.
(c) Decide whether c = 1 + i is in M.
(d) Show that the period-2 disc and the main cardioid are tangent at c = −3/4 by computing the fixed-point and 2-cycle multipliers there.

Answers: (a) c = μ/2 − μ²/4 = 1/4 − 1/16 = 3/16, with fixed point z = μ/2 = 1/4. Check: (1/4)² + 3/16 = 1/16 + 3/16 = 1/4. (b) 4(c + 1) = 4(−0.1) = −0.4; |−0.4| < 1, so the 2-cycle is attracting and c lies in the period-2 component. (c) z₁ = 1 + i, z₂ = (1 + i)² + 1 + i = 1 + 3i with |z₂| = √10 > 2, so c ∉ M by Theorem 10.1. (d) At c = −3/4 the fixed point z = −1/2 has multiplier −1 (boundary of the cardioid, μ = −1), and the 2-cycle multiplier 4(c + 1) = 1 (boundary of the disc |c + 1| < 1/4). At this point the two fixed points of f_c² that form the 2-cycle collide with the fixed point z = −1/2: z² + z + 1/4 = (z + 1/2)².

─────────────────────────────────
Lesson 11: The Logistic Map, Period Doubling and Feigenbaum Universality
─────────────────────────────────

📌 Key idea of this section:

        g_r(x) = r x(1 − x) on [0, 1] is conjugate to f_c(z) = z² + c with c = r/2 − r²/4.
        Period-doubling parameters r_k accumulate at r_∞ ≈ 3.5699456 geometrically:
        (r_k − r_{k−1})/(r_{k+1} − r_k) → δ = 4.6692016…

Conjugacy with the quadratic family

Let g_r(x) = r x(1 − x) with 0 < r ≤ 4, which maps [0, 1] into itself. Put z = h(x) = r(1/2 − x). Then

        h(g_r(x)) = r/2 − r² x(1 − x)
        h(x)² + c = r²/4 − r² x + r² x² + c

and these agree for all x exactly when c = r/2 − r²/4. So g_r is affinely conjugate to f_c with c = r/2 − r²/4, which runs from 1/4 (at r = 1) down to −2 (at r = 4) as r increases from 1 to 4. Everything known about the real quadratic family transfers.

Fixed points and the first bifurcation

The fixed points of g_r are 0 and x* = 1 − 1/r (in [0, 1] for r ≥ 1). The multipliers are g_r′(0) = r and g_r′(x*) = r(1 − 2x*) = 2 − r. Thus for 1 < r < 3 the point x* is attracting, and in fact attracts every x ∈ (0, 1). At r = 3 the multiplier passes through −1, and a period-doubling (flip) bifurcation occurs.

The 2-cycle

Proposition 11.1. For r > 3, g_r has a unique 2-cycle {x₊, x₋},

        x± = ( r + 1 ± √((r − 3)(r + 1)) ) / (2r)

with multiplier (g_r²)′ = −r² + 2r + 4. The cycle is attracting for 3 < r < 1 + √6 ≈ 3.449490.

Proof. Dividing g_r²(x) − x by the fixed-point factor x(rx − r + 1) leaves the quadratic r²x² − r(r + 1)x + (r + 1), whose roots are x±; they are real and distinct exactly when (r − 3)(r + 1) > 0. Their sum is (r + 1)/r and product (r + 1)/r². The multiplier is

        g_r′(x₊)g_r′(x₋) = r²(1 − 2x₊)(1 − 2x₋) = r²[1 − 2(x₊ + x₋) + 4x₊x₋]
                        = r² − 2r(r + 1) + 4(r + 1) = −r² + 2r + 4

This equals 1 at r = 3 and −1 when r² − 2r − 5 = 0, i.e. r = 1 + √6, and lies strictly between −1 and 1 in between. ∎

The 2-cycle is superattracting, multiplier 0, when r² − 2r − 4 = 0, i.e. r = 1 + √5 ≈ 3.2361; then x₋ = 1/2, the critical point. Under the conjugacy, r = 3 corresponds to c = −3/4 and r = 1 + √6 to c = 3/2 + √6/2 − (7 + 2√6)/4 = −5/4, the two real boundary points of the period-2 disc |c + 1| < 1/4.

The cascade and the Feigenbaum constants

As r increases, the attracting 2-cycle loses stability at r₂ = 1 + √6, giving birth to an attracting 4-cycle, which gives way to an 8-cycle at r₃, and so on. Numerically:

        k     r_k (period 2ᵏ born)    (r_k − r_{k−1})/(r_{k+1} − r_k)
        1     3.000000
        2     3.449490                4.7515
        3     3.544090                4.6562
        4     3.564407                4.6684
        5     3.568759
        ∞     3.569946

Feigenbaum (1978) observed that the ratios converge to

        δ = 4.669201609102990…

and, crucially, that the same constant appears for every smooth unimodal family with a quadratic maximum — for instance r sin(πx), or the real quadratic family itself — and in physical experiments (Libchaber's convection experiments, 1980). A second constant α = 2.502907875… governs the spatial scaling: the signed distance from the critical point to its nearest neighbour on the superstable 2ᵏ-cycle changes by a factor approaching −1/α at each doubling.

Renormalisation

The explanation is a fixed point of an infinite-dimensional operator. For a unimodal map g with critical point at 0 normalised by g(0) = 1, define the period-doubling renormalisation

        (𝓡g)(x) = −α g(g(−x/α)),   α = −1/g(1)

which rescales the second iterate restricted to a small interval around the critical point. The Feigenbaum–Cvitanović equation g* = 𝓡g* has a unique even analytic solution with a quadratic maximum, g*(x) = 1 − 1.5276330… x² + 0.1048152… x⁴ + ⋯. The constant α is −1/g*(1), and δ is the unique eigenvalue of modulus greater than 1 of the derivative D𝓡 at g*. The existence of g* and the hyperbolicity of 𝓡 were proved by Lanford (1982) with computer assistance; conceptual proofs were given by Sullivan, McMullen and Lyubich (Lyubich, 1999, proved hyperbolicity of renormalisation for the full quadratic family). Universality is thus a theorem: every family crossing the stable manifold of g* transversally has period-doubling ratios converging to δ.

The Feigenbaum attractor

At r = r_∞ the attractor of g_r is a Cantor set, the closure of the critical orbit, on which g_r acts as an adding machine (odometer). Its Hausdorff dimension is approximately 0.538 (Grassberger, 1981). It is not exactly self-similar, but it is asymptotically self-similar with the scaling factors α and α² governing the two halves of each piece — an early example of a "dynamically defined" Cantor set.

Beyond the accumulation point

For r_∞ < r ≤ 4 the dynamics is a mixture of windows of periodic attraction and chaotic parameters. The most visible window opens with a saddle-node (tangent) bifurcation at r = 1 + √8 ≈ 3.828427, where an attracting 3-cycle appears; by the conjugacy this is c = −7/4. Two theorems frame this region.

Theorem 11.2 (Sharkovskii, 1964). Order the positive integers as

        3 ▷ 5 ▷ 7 ▷ ⋯ ▷ 2·3 ▷ 2·5 ▷ ⋯ ▷ 2²·3 ▷ 2²·5 ▷ ⋯ ▷ 2³ ▷ 2² ▷ 2 ▷ 1

If a continuous map of an interval has a periodic point of period m and m ▷ n, then it has a periodic point of period n.

In particular a period-3 orbit forces orbits of every period (Li and Yorke, 1975, "Period three implies chaos"). For the logistic family, the order in which periods appear as r increases is consistent with the Sharkovskii order, and the cascade 1, 2, 4, 8, … is the tail of that order.

Theorem 11.3 (Jakobson 1981; Graczyk–Świątek and Lyubich 1997; Lyubich 2002). The set of r for which g_r has an absolutely continuous invariant probability measure has positive Lebesgue measure; the set of r for which g_r has an attracting cycle is open and dense in [0, 4]; and for Lebesgue-almost every r one of these two alternatives holds.

The case r = 4

Writing x = sin²(πθ),

        g₄(sin² πθ) = 4 sin²(πθ) cos²(πθ) = sin²(2πθ)

so g₄ is semiconjugate to the doubling map θ ↦ 2θ mod 1, and conjugate via x = sin²(πθ/2) to the tent map T(θ) = 1 − |1 − 2θ|. Pushing Lebesgue measure forward, g₄ has the invariant density ρ(x) = 1/(π√(x(1 − x))), and its Lyapunov exponent, lim (1/n) log|(g₄ⁿ)′(x)|, equals log 2 for almost every x.

✏️ Your Turn

(a) Compute the 2-cycle multiplier at r = 3.2 and decide stability.
(b) Find the 2-cycle explicitly at r = 10/3.
(c) Use δ to predict r₆ from r₄ and r₅, and compare with the true value r₆ ≈ 3.569692.
(d) Verify that r = 1 + √8 corresponds to c = −7/4.

Answers: (a) −(3.2)² + 2(3.2) + 4 = −10.24 + 6.4 + 4 = 0.16, which lies in (−1, 1): attracting. (b) (r − 3)(r + 1) = (1/3)(13/3) = 13/9, so x± = (13/3 ± √13/3)/(20/3) = (13 ± √13)/20, i.e. x₊ ≈ 0.8303 and x₋ ≈ 0.4697. (c) r₆ ≈ r₅ + (r₅ − r₄)/δ = 3.568759 + 0.004352/4.669202 ≈ 3.568759 + 0.000932 = 3.569691, agreeing with the true value to about 10⁻⁶. (d) c = r/2 − r²/4 with r = 1 + 2√2: r² = 9 + 4√2, so c = (2 + 4√2 − 9 − 4√2)/4 = −7/4.

─────────────────────────────────
Lesson 12: Brownian Motion and Random Fractals
─────────────────────────────────

📌 Key idea of this section:

        Almost surely: the graph of linear Brownian motion has dim_H = dim_B = 3/2,
        the path of d-dimensional Brownian motion (d ≥ 2) has dim_H = 2,
        and the zero set of linear Brownian motion has dim_H = 1/2.

Brownian motion

A standard linear Brownian motion is a stochastic process (B(t))_{t≥0} with B(0) = 0, independent increments, B(t) − B(s) normally distributed with mean 0 and variance t − s for s < t, and continuous sample paths (Wiener, 1923). A d-dimensional Brownian motion has d independent linear Brownian motions as coordinates.

Brownian motion is statistically self-similar: for every c > 0, the process c^{−1/2} B(ct) is again a standard Brownian motion. A random set is not a fixed point of a deterministic IFS, but its law is invariant under rescaling, and the dimension is read off from the scaling exponent: time scales by c, space by c^{1/2}.

Regularity

Theorem 12.1. Almost surely, B is α-Hölder continuous on [0, 1] for every α < 1/2, and for no α > 1/2. Moreover, almost surely B is nowhere differentiable (Paley, Wiener and Zygmund, 1933).

The Hölder statement follows from the Kolmogorov–Chentsov criterion, since E|B(t) − B(s)|^{2m} = C_m |t − s|^m for every m; Lévy's modulus of continuity sharpens it to lim sup_{h→0} sup_{|t−s|≤h} |B(t) − B(s)|/√(2h log(1/h)) = 1 almost surely.

Lemma 12.2. If f : [0, 1] → ℝ satisfies |f(t) − f(s)| ≤ c|t − s|^α, then the graph Γ_f has dim_B̄ Γ_f ≤ 2 − α.

Proof. Let 0 < δ < 1 and divide [0, 1] into ⌈1/δ⌉ columns of width δ. Over each column f oscillates by at most cδ^α, so the part of the graph above that column is covered by at most cδ^{α−1} + 2 squares of side δ. Hence N_δ(Γ_f) ≤ (1/δ + 1)(cδ^{α−1} + 2) ≤ C δ^{α−2}, and the claim follows. ∎

The graph of Brownian motion

Theorem 12.3 (Taylor, 1953). Almost surely, the graph Γ = {(t, B(t)) : 0 ≤ t ≤ 1} has dim_H Γ = dim_B Γ = 3/2.

Proof. Upper bound: by Theorem 12.1 and Lemma 12.2, dim_B̄ Γ ≤ 2 − α for every α < 1/2, so dim_H Γ ≤ dim_B̄ Γ ≤ 3/2.

Lower bound by the energy method: let μ be the image of Lebesgue measure on [0, 1] under t ↦ (t, B(t)). For 1 < s < 3/2,

        E I_s(μ) = ∫₀¹∫₀¹ E[ (|t − u|² + |B(t) − B(u)|²)^{−s/2} ] dt du

With h = |t − u|, B(t) − B(u) has the law of √h Z with Z standard normal, so the integrand is E[(h² + hZ²)^{−s/2}]. Split according to |Z| ≤ √h or not. On the first event the integrand is at most h^{−s}, and the event has probability at most √h; on the second it is at most h^{−s/2}|Z|^{−s}, and E[|Z|^{−s}; |Z| > √h] ≤ C(1 + h^{(1−s)/2}). Hence, for small h,

        E[(h² + hZ²)^{−s/2}] ≤ h^{1/2 − s} + C h^{−s/2} + C h^{1/2 − s} ≤ C′ h^{1/2 − s}

because 1/2 − s < −s/2 when s > 1. The function h^{1/2−s} is integrable over [0, 1]² exactly when s − 1/2 < 1, i.e. s < 3/2. So E I_s(μ) < ∞, hence I_s(μ) < ∞ almost surely, and dim_H Γ ≥ s by Theorem 7.4. Letting s ↑ 3/2 along a sequence gives dim_H Γ ≥ 3/2 almost surely. ∎

Brownian paths in higher dimensions

Theorem 12.4 (Lévy; Taylor 1953). For d ≥ 2, almost surely dim_H B[0, 1] = 2.

Proof. Upper bound: B is α-Hölder for α < 1/2, so by Theorem 6.3(v), dim_H B[0, 1] ≤ (1/α) dim_H [0, 1] = 1/α for every α < 1/2. Lower bound: let μ be the occupation measure, the image of Lebesgue measure under B. For s < 2 ≤ d,

        E I_s(μ) = ∫₀¹∫₀¹ E|B(t) − B(u)|^{−s} dt du = E|Z|^{−s} ∫₀¹∫₀¹ |t − u|^{−s/2} dt du

where Z is a standard normal vector in ℝᵈ. Here E|Z|^{−s} < ∞ because s < d, and the time integral is finite because s/2 < 1. ∎

So the planar Brownian path has Hausdorff dimension 2 — the dimension of the plane — yet Lévy proved it has Lebesgue measure zero almost surely. The exact gauge function for which the Hausdorff measure is positive and finite is r² log(1/r) log log log(1/r) in the plane (Ray 1963, Taylor 1964) and r² log log(1/r) in dimensions d ≥ 3 (Ciesielski and Taylor, 1962). The outer boundary (frontier) of the planar path has dimension 4/3, as Mandelbrot conjectured from simulations and Lawler, Schramm and Werner proved in 2001 using the Schramm–Loewner evolution; this work contributed to Werner's Fields Medal in 2006.

Zero sets and level sets

The zero set Z = {t ∈ [0, 1] : B(t) = 0} is almost surely a closed, perfect, Lebesgue-null set of Hausdorff dimension 1/2: a random Cantor set. The upper bound comes from counting the dyadic intervals of length 2^{−k} meeting Z, whose expected number is of order 2^{k/2}; the lower bound uses the local time at zero as a mass distribution.

Fractional Brownian motion and Weierstrass functions

Fractional Brownian motion B_H with Hurst index H ∈ (0, 1) is the centred Gaussian process with covariance E[B_H(t)B_H(s)] = (|t|^{2H} + |s|^{2H} − |t − s|^{2H})/2; H = 1/2 is ordinary Brownian motion. It is H-self-similar and has stationary increments, which are positively correlated for H > 1/2 and negatively correlated for H < 1/2. The same proofs give, almost surely,

        dim_H graph(B_H) = 2 − H,     dim_H B_H[0, 1] = min{d, 1/H} in ℝᵈ

Mandelbrot and van Ness (1968) introduced fractional Brownian motion as a model for long-range dependence in hydrology (the Hurst phenomenon in Nile flood data) and finance.

The deterministic analogue is the Weierstrass function

        W(t) = ∑_{k≥0} aᵏ cos(2π bᵏ t),   0 < a < 1,  ab > 1

which is continuous and nowhere differentiable (Weierstrass 1872 under stronger hypotheses; Hardy 1916 in this generality). Its graph has box dimension 2 + log a / log b (Kaplan, Mallet-Paret and Yorke, 1984). That the Hausdorff dimension takes the same value was a long-standing problem: it was proved for many parameters by Barański, Bárány and Romanowska (2014) and for every integer b ≥ 2 by Shen (2018).

✏️ Your Turn

(a) What are the dimensions of the graph of fractional Brownian motion with H = 0.3, and of its path in ℝ² and ℝ⁴?
(b) Compute the box dimension of the graph of W with a = 1/2 and b = 4.
(c) Show that Lemma 12.2 is not sharp in general by considering f(t) = √t.
(d) Use the energy method to show that the path of 3-dimensional Brownian motion has dimension at least s for every s < 2, and explain why the argument cannot give more than 2.

Answers: (a) Graph: 2 − 0.3 = 1.7. Path in ℝ²: min{2, 1/0.3} = 2. Path in ℝ⁴: min{4, 10/3} = 10/3 ≈ 3.333. (b) 2 + log(1/2)/log 4 = 2 − 1/2 = 3/2. (c) √t is 1/2-Hölder on [0, 1], so Lemma 12.2 gives dim_B̄ ≤ 3/2, but its graph is a smooth monotone curve of finite length, of dimension 1. (d) E I_s(μ) = E|Z|^{−s} ∫∫|t − u|^{−s/2} dt du with Z standard normal in ℝ³; E|Z|^{−s} < ∞ for s < 3 and the time integral is finite for s < 2. For s ≥ 2 the time integral diverges, reflecting the true dimension 2 of the path.

─────────────────────────────────
Lesson 13: Multifractal Measures
─────────────────────────────────

📌 Key idea of this section:

        For a measure μ, the local dimension α(x) = lim_{r→0} log μ(B(x, r)) / log r varies with x.
        The multifractal spectrum f(α) = dim_H{ x : α(x) = α }
        is the Legendre transform of the moment scaling exponent τ(q):  f(α) = inf_q ( qα − τ(q) ).

So far each fractal set has carried a single dimension. Measures supported on fractals — the self-similar measures of the chaos game, harmonic measure on a fractal boundary, the energy dissipation in a turbulent fluid — are typically far less homogeneous: they concentrate with different intensities at different points. Multifractal analysis decomposes the support into level sets of the local intensity and measures each level set's dimension.

Local dimension

For a finite Borel measure μ on ℝⁿ and x in its support, the lower and upper local dimensions are the lim inf and lim sup of log μ(B(x, r))/log r as r → 0; if they agree, the common value is the local dimension dim_loc μ(x). A measure is exact-dimensional if the local dimension exists and equals a constant d for μ-almost every x; then d = dim_H μ, the infimum of dim_H E over sets E of full measure. The mass distribution principle (Lesson 7) is the statement that sets where the lower local dimension is everywhere at least s have dimension at least s; its converse (the "Billingsley lemma") gives the matching upper bound.

The binomial measure

Fix 0 < p < 1/2 and let μ_p be the self-similar measure for the IFS x ↦ x/2, x ↦ x/2 + 1/2 with probabilities (p, 1 − p). Equivalently, μ_p gives the dyadic interval I(w) of the binary word w = w₁…w_k the mass

        μ_p(I(w)) = p^{N₀(w)} (1 − p)^{N₁(w)}

where N₀ and N₁ count the zeros and ones of w. If x has binary digits with asymptotic frequency η of zeros, then

        α(x) = lim (−1/k) log₂ μ_p(I_k(x)) = −η log₂ p − (1 − η) log₂(1 − p)

and α(x) ranges over [α_min, α_max] = [−log₂(1 − p), −log₂ p]. By the Besicovitch–Eggleston theorem (Theorem 7.5), the set of points with zero-frequency η has dimension H(η) = −η log₂ η − (1 − η) log₂(1 − η). Hence the multifractal spectrum is given parametrically by

        α(η) = −η log₂ p − (1 − η) log₂(1 − p),     f(α(η)) = H(η),     0 ≤ η ≤ 1

The maximum f = 1 occurs at η = 1/2 (typical points for Lebesgue measure), and f(α) = α at η = p (typical points for μ_p itself, which therefore has dimension H(p)).

Moment scaling and the Legendre transform

Define the partition function at scale 2^{−k} by summing over the dyadic intervals of length 2^{−k}:

        S_k(q) = ∑_{|w|=k} μ_p(I(w))^q = (p^q + (1 − p)^q)^k

The moment scaling exponent τ(q) is defined by S_k(q) ≈ (2^{−k})^{τ(q)}, so

        τ(q) = −log₂( p^q + (1 − p)^q )

τ is real-analytic, increasing and strictly concave, with τ(0) = −1 (the negative of the dimension of the support) and τ(1) = 0 (total mass 1). Its Legendre transform recovers the spectrum.

Theorem 13.1 (multifractal formalism for self-similar measures; Cawley–Mauldin 1992, Arbeiter–Patzschke 1996). For a self-similar measure satisfying the open set condition, for every α ∈ [α_min, α_max],

        f(α) = inf_{q∈ℝ} ( qα − τ(q) )

and the infimum is attained at the q with τ′(q) = α.

Heuristic derivation. Group the 2ᵏ intervals according to their local exponent: about 2^{k f(α)} intervals have mass about 2^{−kα}. Then S_k(q) ≈ ∑_α 2^{k f(α)} 2^{−kqα} ≈ 2^{−k inf_α (qα − f(α))} by Laplace's method, so τ(q) = inf_α (qα − f(α)); since f is concave, Legendre duality inverts this to f(α) = inf_q (qα − τ(q)). ∎

Verification for the binomial measure. Differentiate τ:

        τ′(q) = −( p^q log₂ p + (1 − p)^q log₂(1 − p) ) / ( p^q + (1 − p)^q )

which is α(η) with η = p^q/(p^q + (1 − p)^q). A direct computation shows qτ′(q) − τ(q) = H(η) for this η, confirming Theorem 13.1. At q = 0, η = 1/2 and f = 1; at q = 1, η = p and f = α = H(p); as q → +∞ the larger weight 1 − p dominates, η → 0 and α → α_min = −log₂(1 − p); as q → −∞, η → 1 and α → α_max = −log₂ p, with f → 0 at both ends.

Generalised dimensions

The Rényi (or generalised) dimensions are D_q = τ(q)/(q − 1) for q ≠ 1, with D_1 = τ′(1) by continuity. D_0 is the box dimension of the support, D_1 is the information dimension (the dimension of the measure), and D_2 is the correlation dimension, estimated in practice by the Grassberger–Procaccia algorithm (1983) from the fraction of pairs of points at distance less than r. For the binomial measure with p = 1/3:

        α_min = log₂(3/2) ≈ 0.5850,   α_max = log₂ 3 ≈ 1.5850
        D_0 = 1,   D_1 = H(1/3) ≈ 0.9183,   D_2 = −log₂(5/9) = log₂(9/5) ≈ 0.8480
        the peak f = 1 occurs at α = −(1/2) log₂(p(1 − p)) = (1/2) log₂(9/2) ≈ 1.0850

Applications and further theory

Multifractal ideas entered physics through turbulence: Frisch and Parisi (1985) explained the anomalous scaling of velocity structure functions by a spectrum of singularities, and Halsey, Jensen, Kadanoff, Procaccia and Shraiman (1986) introduced the f(α) formalism for strange attractors and diffusion-limited aggregation. In complex analysis, Makarov (1985) proved that harmonic measure on the boundary of any simply connected planar domain has dimension exactly 1, however fractal the boundary — a striking rigidity theorem — while its multifractal spectrum carries deep information about the domain (the universal integral means spectrum, with conjectures of Brennan and Kraetzer still open). In probability, the multifractal analysis of Brownian occupation measures, of Gaussian multiplicative chaos and of Liouville quantum gravity is an active research field.

✏️ Your Turn

(a) For p = 1/4, find α_min and α_max.
(b) For p = 1/4, compute D_2 and D_1.
(c) Show that f(α) = 0 at α_min and α_max, and f = 1 at α = −(1/2) log₂(p(1 − p)).
(d) Explain why τ(0) = −1 for every probability measure on [0, 1] whose support is all of [0, 1].

Answers: (a) α_min = −log₂(3/4) = log₂(4/3) ≈ 0.4150 and α_max = −log₂(1/4) = 2. (b) D_2 = −log₂(1/16 + 9/16) = −log₂(5/8) = log₂ 1.6 ≈ 0.6781. D_1 = H(1/4) = (1/4)·2 + (3/4) log₂(4/3) ≈ 0.5 + 0.3113 = 0.8113. (c) At η = 0 and η = 1 the entropy H(η) is 0, and these give α = −log₂(1 − p) and α = −log₂ p; at η = 1/2, H = 1 and α = −(1/2)(log₂ p + log₂(1 − p)). (d) S_k(0) counts the dyadic intervals of length 2^{−k} with positive mass, which is 2ᵏ when the support is [0, 1]; so 2ᵏ = (2^{−k})^{τ(0)} gives τ(0) = −1.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are grouped in three tiers. Core problems check the definitions and the standard computations; Advanced problems require combining several results or carrying out a short proof; Challenge problems are proofs at the level of a graduate qualifying examination or a research seminar. Unless stated otherwise, C denotes the middle-third Cantor set, s_C = log 2 / log 3, and logarithms without a base are natural.

Core (Problems 1–20)

  1. Compute the Hausdorff distance h([0, 2], [1, 4]) in ℝ.
  2. Compute h({0, 1}, [0, 1]).
  3. In ℝ², compute h(S, {0}), where S is the unit circle.
  4. Let f(x) = x/3 + 2 on ℝ and x₀ = 0. Find the fixed point, the least n for which the a priori bound of Theorem 2.1 guarantees |xₙ − x*| < 0.01, and the actual error |xₙ − x*|.
  5. Show that [0, 1] is the attractor of x ↦ x/2 and x ↦ x/2 + 1/2, and find the similarity dimension of this IFS.
  6. The Vicsek fractal is the attractor of 5 similarities of ratio 1/3 (the centre and four corner subsquares). Find its dimension.
  7. Solve Moran's equation for the ratios 1/2, 1/3, 1/6.
  8. Find the dimension of the Sierpinski carpet.
  9. Find the addresses in {1, 2}^ℕ of the points 1/4 and 3/4 of C for the IFS f₁(x) = x/3, f₂(x) = x/3 + 2/3.
  10. Find the box dimension of {0} ∪ {k^{−3} : k ∈ ℕ}.
  11. Find the Hausdorff, box and packing dimensions of ℚ ∩ [0, 1].
  12. Express 𝓗^{s_C}(C ∩ [0, 1/3]) in terms of 𝓗^{s_C}(C).
  13. Find the Hausdorff dimension of the middle-3/5 Cantor set.
  14. Find the Hausdorff dimension of the set of x ∈ [0, 1] whose decimal digits are all odd.
  15. Find the Hausdorff dimension of C × [0, 1].
  16. Find the parameter c of the quadratic family whose attracting fixed point has multiplier −1/2, and find that fixed point.
  17. Decide whether each of c = −1.9, c = 0.26 and c = −2.01 belongs to M.
  18. For c = 1, find the first n with |f_cⁿ(0)| > 2.
  19. For the logistic map with r = 2.5, find the non-zero fixed point, its multiplier, and its type.
  20. Using r₁ = 3, r₂ = 1 + √6 and δ ≈ 4.669202, predict r₃ and compare with r₃ ≈ 3.544090.

Advanced (Problems 21–45)

  21. Let Cₙ be the union of the 2ⁿ level-n intervals of the Cantor construction. Prove that h(Cₙ, C) = 3^{−(n+1)}/2.
  22. Apply the collage theorem to A = Cₙ for the Cantor IFS, and compare the bound with the true distance from Problem 21.
  23. Solve Moran's equation for the ratios 1/2, 1/4, 1/8, giving s to four decimal places.
  24. The quadratic Koch curve of type 2 is generated by 8 similarities of ratio 1/4. Find its dimension.
  25. Find the box dimension of {0} ∪ {1/log k : k ≥ 2}.
  26. Find the box dimension of {0} ∪ {k^{−1/2} : k ∈ ℕ}.
  27. Prove that the Cantor function φ : [0, 1] → [0, 1] is not α-Hölder for any α > s_C.
  28. A Bedford–McMullen carpet has n = 4 columns and m = 3 rows, with one chosen rectangle in one row, two in a second row and none in the third. Compute dim_H and dim_B.
  29. Prove that the Cantor dust C × C is totally disconnected, and find its dimension.
  30. Compute the s-energy of Lebesgue measure on [0, 1] and find the values of s for which it is finite.
  31. Find the Hausdorff dimension of the set of x ∈ [0, 1] whose ternary digits 0, 1, 2 have asymptotic frequencies 1/2, 1/4, 1/4.
  32. For c = −2, find the 2-cycle of f_c, its multiplier, and the corresponding angles under the substitution z = 2 cos θ.
  33. For c = −2, find both fixed points and their multipliers, and explain why both lie in J₋₂.
  34. For c = i, find the preperiod and period of the critical value and the multiplier of the cycle it lands on.
  35. Find all real c for which f_c has an attracting 2-cycle, and find the 2-cycle for c = −1.
  36. Show that the escape radius 2 in Theorem 10.1 cannot be lowered: exhibit c ∈ M and n with |f_cⁿ(0)| = 2.
  37. Show that for r = 1 + √5 the 2-cycle of the logistic map contains the critical point 1/2, and find the other point of the cycle.
  38. Find the parameter c of the quadratic family conjugate to the logistic map with r = 1 + √5.
  39. Find the Lyapunov exponent of the tent map T(x) = 1 − |1 − 2x| at every point whose orbit avoids 1/2.
  40. Find the values of r for which the logistic map is conjugate to f₀ and to f₋₂.
  41. Find the dimensions of the graph of fractional Brownian motion with H = 0.75 and of its path in ℝ².
  42. Compute the box dimension of the graph of the Weierstrass function with a = 0.6 and b = 3.
  43. For the binomial measure with p = 0.2, find α_min and α_max.
  44. For the binomial measure with p = 0.2, compute the correlation dimension D₂.
  45. With b = 9, find the value of a for which the graph of the Weierstrass function has the same dimension as the graph of Brownian motion.

Challenge (Problems 46–60)

  46. Prove that dim_H(E × F) ≥ dim_H E + dim_H F for Borel sets E ⊂ ℝⁿ, F ⊂ ℝᵐ.
  47. Prove that the graph of the Cantor function has length 2 and Hausdorff dimension 1.
  48. Prove that every c with |c| ≤ 1/4 belongs to M.
  49. Prove that every c with |c| < 1/4 lies in the main cardioid, that is, f_c has an attracting fixed point.
  50. Prove that the Sierpinski triangle Δ of side 1 satisfies 0 < 𝓗ˢ(Δ) ≤ 1 with s = log 3/log 2.
  51. Use the characterisation of packing dimension to show dim_P(ℚ ∩ [0, 1]) = 0, and contrast with box dimension.
  52. Let λ₁, λ₂ be the multipliers of the two fixed points of f_c, both different from 1. Prove that 1/(1 − λ₁) + 1/(1 − λ₂) = 0, and deduce that if one fixed point is attracting the other is repelling.
  53. Prove that ρ(x) = 1/(π√(x(1 − x))) is an invariant density for the logistic map g₄.
  54. Compute the Lyapunov exponent ∫ log|g₄′(x)| ρ(x) dx of g₄ with respect to the invariant density.
  55. Show that the zero set Z of linear Brownian motion on [0, 1] satisfies dim_H Z ≤ 1/2 almost surely, using P(B has a zero in [t, t + h]) = (2/π) arctan √(h/t).
  56. Compute E|Z|^{−s} for a standard normal vector Z in ℝ², and use it to complete the energy argument showing that the planar Brownian path has dimension 2.
  57. For the binomial measure with p = 1/3, compute f(1), the dimension of the set of points with local dimension exactly 1.
  58. Estimate r_∞ from r₄ = 3.564407 and r₅ = 3.568759 by assuming the gaps r_{k+1} − r_k decrease exactly geometrically with ratio 1/δ.
  59. Let F be the attractor of an IFS of similarities satisfying the OSC, with similarity dimension s. Prove that 𝓗ˢ(f_i(F) ∩ f_j(F)) = 0 for i ≠ j.
  60. Prove that dim_B̄ F ≤ s for every IFS of similarities, whether or not it satisfies the OSC, and give an example with dim_H F < s.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. For intervals h([a, b], [c, d]) = max{|a − c|, |b − d|} = max{1, 2} = 2. The point 4 is at distance 2 from [0, 2].
  2. Every point of {0, 1} lies in [0, 1]; the point 1/2 of [0, 1] is at distance 1/2 from {0, 1}, and no point is farther. So h = 1/2.
  3. Every point of S is at distance 1 from 0, so both suprema equal 1 and h = 1.
  4. x* = 3 (solve x = x/3 + 2). Here x₁ = 2 and c = 1/3, so the bound is 3^{−n}·2/(2/3) = 3^{1−n}. We need 3^{n−1} > 100; 3⁴ = 81 and 3⁵ = 243, so n = 6. In fact xₙ = 3(1 − 3^{−n}), so the actual error is 3^{1−n} — the bound is exact here, because f is affine and the error contracts by exactly 1/3 each step.
  5. f₁([0, 1]) ∪ f₂([0, 1]) = [0, 1/2] ∪ [1/2, 1] = [0, 1], and the attractor is unique by Theorem 2.2. The similarity dimension solves 2·2^{−s} = 1, so s = 1.
  6. log 5 / log 3 ≈ 1.4650 (the OSC holds with the open unit square).
  7. Since 1/2 + 1/3 + 1/6 = 1, s = 1 satisfies the equation, and it is the unique solution because ∑ r_iᵗ is strictly decreasing.
  8. Eight similarities of ratio 1/3 with the OSC: log 8 / log 3 = 3 log 2 / log 3 ≈ 1.8928.
  9. 1/4 = ∑_{k≥1} 2·9^{−k} = 0.020202…₃, so its address is 1212…; 3/4 = 1 − 1/4 = 0.202020…₃, with address 2121…. (Digit 0 corresponds to map 1 and digit 2 to map 2.)
  10. By the k^{−p} result of Lesson 5 with p = 3, dim_B = 1/(1 + 3) = 1/4.
  11. dim_H = 0 (countable); dim_B = 1 (the closure is [0, 1]); dim_P = 0 (countable union of points, each with upper box dimension 0).
  12. C ∩ [0, 1/3] = f₁(C), a similar copy of ratio 1/3, so its measure is 3^{−s_C} 𝓗^{s_C}(C) = 𝓗^{s_C}(C)/2. With the exact value 𝓗^{s_C}(C) = 1, this is 1/2.
  13. Each stage keeps two intervals of relative length (1 − 3/5)/2 = 1/5, so dim = log 2 / log 5 ≈ 0.4307.
  14. Five similarities of ratio 1/10 (digits 1, 3, 5, 7, 9) with the OSC: log 5 / log 10 ≈ 0.6990.
  15. C × [0, 1] is the attractor of 6 similarities of ratio 1/3 (three vertical positions for each of the two Cantor pieces) with the OSC, so dim_H = log 6 / log 3 = 1 + s_C ≈ 1.6309.
  16. c = μ/2 − μ²/4 = −1/4 − 1/16 = −5/16, with fixed point z = μ/2 = −1/4. Check: (−1/4)² − 5/16 = 1/16 − 5/16 = −1/4.
  17. By Theorem 10.2, M ∩ ℝ = [−2, 1/4]: −1.9 ∈ M; 0.26 ∉ M; −2.01 ∉ M.
  18. The orbit is 0, 1, 2, 5, …; |z₂| = 2 is not greater than 2, and |z₃| = 5 > 2, so n = 3.
  19. x* = 1 − 1/2.5 = 0.6, with multiplier 2 − r = −0.5; since |−0.5| < 1 it is attracting, and orbits approach it with alternating sign.
  20. r₃ ≈ r₂ + (r₂ − r₁)/δ = 3.449490 + 0.449490/4.669202 ≈ 3.449490 + 0.096267 = 3.545757, which overshoots the true value 3.544090 by about 0.0017; the ratios have not yet converged to δ at this early stage (the first ratio is 4.7515).

Advanced

  21. Since C ⊂ Cₙ, h(Cₙ, C) = sup_{x∈Cₙ} d(x, C). A point x ∈ Cₙ ∖ C lies in a gap of C contained in some level-n interval I. Such gaps are removed at stages n + 1, n + 2, …, so they have length at most 3^{−(n+1)}, and both endpoints of every gap lie in C; hence d(x, C) ≤ 3^{−(n+1)}/2. The midpoint of the middle third of I attains this value. So h(Cₙ, C) = 3^{−(n+1)}/2.
  22. T(Cₙ) = Cₙ₊₁, and by the same argument as in Problem 21, h(Cₙ, Cₙ₊₁) = 3^{−(n+1)}/2. The collage theorem with c = 1/3 gives h(Cₙ, C) ≤ (3^{−(n+1)}/2)/(2/3) = 3^{−n}/4. The true value is 3^{−(n+1)}/2 = 3^{−n}/6, so the bound is off by the factor 3/2.
  23. With u = 2^{−s}: u + u² + u³ = 1. Newton's method gives u ≈ 0.543689 (the reciprocal of the tribonacci constant 1.839287), so s = −log₂ u ≈ 0.8791.
  24. log 8 / log 4 = 3 log 2 / (2 log 2) = 3/2.
  25. The gap between 1/log k and 1/log(k + 1) is about 1/(k log² k). For small δ, the points with k log² k < 1/δ are δ-separated, so N_δ ≥ c/(δ log²(1/δ)), and log N_δ / log(1/δ) → 1. Since the set lies in [0, 1], dim_B ≤ 1. So dim_B = 1 — although the set is countable, with Hausdorff dimension 0.
  26. 1/(1 + 1/2) = 2/3.
  27. φ maps C onto [0, 1] (every y ∈ [0, 1] has a binary expansion, and φ(∑ 2a_k 3^{−k}) = ∑ a_k 2^{−k}). If φ were α-Hölder, Theorem 6.3(v) would give 1 = dim_H [0, 1] = dim_H φ(C) ≤ s_C/α < 1 when α > s_C, a contradiction. (In fact φ is s_C-Hölder, so the exponent s_C is sharp.)
  28. N = 3, r = 2, t = (1, 2, 0), θ = log 3 / log 4 ≈ 0.7925. dim_H = log₃(1 + 2^θ) = log₃(1 + 1.7321) = log₃ 2.7321 ≈ 0.9148 (note 2^θ = 2^{log 3/log 4} = √3). dim_B = log₃ 2 + log₄(3/2) ≈ 0.6309 + 0.2925 = 0.9234.
  29. If two points of C × C differ, they differ in one coordinate, say x ≠ x′ in C. There is a gap (a, b) of C between x and x′; the vertical strip over (a, b) misses C × C, so C × C splits into two relatively clopen sets separating the points. The dust is the attractor of 4 similarities of ratio 1/3 with the OSC, so its dimension is log 4 / log 3 ≈ 1.2619.
  30. I_s = ∫₀¹∫₀¹ |x − y|^{−s} dx dy = 2∫₀¹ (1 − h) h^{−s} dh = 2[1/(1 − s) − 1/(2 − s)] = 2/((1 − s)(2 − s)) for s < 1, and +∞ for s ≥ 1. Consistently with Theorem 7.4, dim_H [0, 1] = 1.
  31. The entropy is −(1/2) log(1/2) − 2·(1/4) log(1/4) = (1/2) log 2 + log 2 = (3/2) log 2. Divide by log 3: (3/2)·0.6931/1.0986 ≈ 0.9464.
  32. The 2-cycle solves z² + z + c + 1 = z² + z − 1 = 0, so z = (−1 ± √5)/2 ≈ 0.6180 and −1.6180. Its multiplier is 4(c + 1) = −4, repelling. With z = 2 cos θ: 0.6180 = 2 cos(2π/5) and −1.6180 = 2 cos(4π/5), and doubling sends 2π/5 → 4π/5 → 8π/5 ≡ −2π/5, closing the cycle.
  33. z² − z − 2 = 0 gives z = 2 and z = −1, with multipliers 4 and −2. Both are repelling, and repelling periodic points always lie in J_c (Theorem 9.3); consistently, both lie in J₋₂ = [−2, 2].
  34. The orbit is 0 ↦ i ↦ −1 + i ↦ −i ↦ −1 + i. The critical value z₁ = i is not periodic, but z₂ = −1 + i is periodic of period 2; so the critical value has preperiod 1 and period 2 (c = i is a Misiurewicz point). The multiplier of the cycle {−1 + i, −i} is 4(c + 1) = 4 + 4i (also 2(−1 + i)·2(−i) = 4(1 + i)), of modulus 4√2 ≈ 5.657, repelling.
  35. By Lesson 10, f_c has an attracting 2-cycle iff |c + 1| < 1/4; for real c this is −5/4 < c < −3/4. For c = −1 the cycle solves z² + z = 0: it is {0, −1}, which contains the critical point, so it is superattracting (multiplier 4(c + 1) = 0).
  36. For c = −2: f_c(0) = −2, f_c²(0) = 2, f_c³(0) = 2, …, so the orbit is bounded with |f_c²(0)| = 2. Hence c = −2 ∈ M and the criterion "|f_cⁿ(0)| ≤ 2 for all n" cannot be replaced by "< 2", nor 2 by any smaller radius.
  37. With r = 1 + √5, (r − 3)(r + 1) = (√5 − 2)(√5 + 2) = 1, so x± = (r + 1 ± 1)/(2r). Then x₋ = r/(2r) = 1/2, and x₊ = g_r(1/2) = r/4 = (1 + √5)/4 ≈ 0.8090. The multiplier −r² + 2r + 4 = −(6 + 2√5) + 2 + 2√5 + 4 = 0, confirming superattraction.
  38. c = r/2 − r²/4 = (1 + √5)/2 − (6 + 2√5)/4 = (2 + 2√5 − 6 − 2√5)/4 = −1, the centre of the period-2 disc, as Problem 35 predicts.
  39. |T′(x)| = 2 wherever T is differentiable, so (1/n) log|(Tⁿ)′(x)| = log 2 for every n, and the exponent is log 2 ≈ 0.6931.
  40. c = r/2 − r²/4 = 0 gives r = 2 (taking r > 0); then x* = 1/2 is a superattracting fixed point, like z = 0 for f₀. c = −2 gives r² − 2r − 8 = 0, so r = 4.
  41. Graph: 2 − H = 1.25. Path in ℝ²: min{2, 1/H} = min{2, 4/3} = 4/3.
  42. 2 + log 0.6 / log 3 = 2 − 0.5108/1.0986 ≈ 2 − 0.4650 = 1.5350. (The hypothesis ab = 1.8 > 1 holds.)
  43. α_min = −log₂ 0.8 ≈ 0.3219 and α_max = −log₂ 0.2 = log₂ 5 ≈ 2.3219.
  44. D₂ = τ(2)/(2 − 1) = −log₂(0.04 + 0.64) = −log₂ 0.68 ≈ 0.5564.
  45. We need 2 + log a / log 9 = 3/2, so log a = −(1/2) log 9 and a = 1/3. (Then ab = 3 > 1.)

Challenge

  46. If dim_H E = 0 or dim_H F = 0 the claim follows from monotonicity, since for y ∈ F the set E × {y} ⊂ E × F is isometric to E (and similarly for F). Otherwise take 0 < s < dim_H E and 0 < t < dim_H F. Then 𝓗ˢ(E) = ∞ > 0 and 𝓗ᵗ(F) > 0, and Frostman's lemma gives probability measures μ on compact E′ ⊂ E and ν on compact F′ ⊂ F with μ(B(x, r)) ≤ c rˢ and ν(B(y, r)) ≤ c rᵗ. Any set U ⊂ ℝⁿ⁺ᵐ of diameter r meeting E′ × F′ at (x, y) lies in B(x, r) × B(y, r), so (μ × ν)(U) ≤ c² r^{s+t}. By the mass distribution principle, dim_H(E × F) ≥ s + t; let s ↑ dim_H E and t ↑ dim_H F. (Marstrand, 1954. The reverse inequality fails in general; one has dim_H(E × F) ≤ dim_H E + dim_P F.)
  47. The graph of a continuous increasing function from (0, 0) to (1, 1) has length at most 1 + 1 = 2, since each chord satisfies √(Δx² + Δy²) ≤ Δx + Δy. For the lower bound, partition [0, 1] at the endpoints of the level-k intervals. Over the gaps (total length 1 − (2/3)ᵏ) the function is constant, contributing horizontal chords of total length 1 − (2/3)ᵏ; over the 2ᵏ level-k intervals the chords have vertical increments 2^{−k} each, contributing at least ∑ 2^{−k} = 1. So the length is at least 2 − (2/3)ᵏ for every k, hence exactly 2. A rectifiable curve has finite 𝓗¹ measure, so the dimension is at most 1, and it is at least 1 because the projection onto the x-axis, a 1-Lipschitz map, maps the graph onto [0, 1].
  48. Let D = {|z| ≤ 1/2}. For z ∈ D, |z² + c| ≤ |z|² + |c| ≤ 1/4 + 1/4 = 1/2, so f_c(D) ⊂ D. Since 0 ∈ D, the critical orbit stays in D and is bounded, so c ∈ M.
  49. The fixed point z = (1 − w)/2, with w the principal square root of 1 − 4c, has multiplier μ = 2z = 1 − w. If |c| < 1/4, then u = 1 − 4c satisfies |u − 1| < 1, so u = w² lies inside the right lobe of the lemniscate |w² − 1| = 1, which in polar coordinates w = ρe^{iφ} reads ρ² < 2 cos 2φ with |φ| < π/4. The disc |w − 1| < 1 is ρ < 2 cos φ. Since 2 cos 2φ = 4 cos²φ − 2 < 4 cos²φ, we have ρ < √(2 cos 2φ) < 2 cos φ, so |1 − w| < 1, i.e. |μ| < 1. Thus the fixed point is attracting and c lies in the main cardioid.
  50. At level k, Δ is covered by its 3ᵏ level-k triangles of diameter 2^{−k}, so 𝓗ˢ_{2^{−k}}(Δ) ≤ 3ᵏ 2^{−ks} = 3ᵏ 3^{−k} = 1, and 𝓗ˢ(Δ) ≤ 1. The IFS f_i(x) = (x + p_i)/2 satisfies the OSC with V the open triangle, so the Moran–Hutchinson theorem (Lesson 8) gives 𝓗ˢ(Δ) > 0. The exact value is not known.
  51. Write ℚ ∩ [0, 1] = ⋃ {q_j}. Each singleton has upper box dimension 0, so dim_P(ℚ ∩ [0, 1]) ≤ sup_j 0 = 0. Box dimension, by contrast, equals 1 because it cannot see the countable decomposition: dim_B̄ is only finitely stable, and passing to the infimum over countable covers is exactly what repairs this.
  52. The fixed points z₁, z₂ satisfy z₁ + z₂ = 1 and λ_i = 2z_i. Then 1/(1 − λ₁) + 1/(1 − λ₂) = [(1 − λ₂) + (1 − λ₁)]/[(1 − λ₁)(1 − λ₂)] = [2 − 2(z₁ + z₂)]/[⋯] = 0. (This is the holomorphic fixed point formula: for a rational map, ∑ 1/(1 − λ) over all fixed points is 1, and ∞, with multiplier 0, contributes 1.) The Möbius map λ ↦ 1/(1 − λ) sends the closed unit disc minus {1} onto the closed half-plane Re w ≥ 1/2, and the open disc into Re w > 1/2. If |λ₁| < 1 then Re 1/(1 − λ₁) > 1/2, so Re 1/(1 − λ₂) < −1/2, which forces |λ₂| > 1.
  53. Let x = sin²(πθ) with θ ∈ [0, 1/2]; then dx = 2π sin(πθ) cos(πθ) dθ = 2π√(x(1 − x)) dθ, so the measure ρ(x) dx is the image of 2 dθ on [0, 1/2], equivalently of Lebesgue measure on [0, 1] under θ ↦ sin²(πθ). By the semiconjugacy g₄(sin² πθ) = sin²(2πθ) and the invariance of Lebesgue measure under θ ↦ 2θ mod 1, the image measure is g₄-invariant. One can also verify directly the Perron–Frobenius equation ρ(y) = ∑_{g₄(x)=y} ρ(x)/|g₄′(x)|.
  54. With x = sin²(πθ), θ uniform on [0, 1]: g₄′(x) = 4(1 − 2x) = 4 cos(2πθ). So the exponent is ∫₀¹ log|4 cos 2πθ| dθ = log 4 + ∫₀¹ log|cos 2πθ| dθ = log 4 − log 2 = log 2, using the classical integral ∫₀¹ log|cos 2πθ| dθ = −log 2.
  55. Let N_k be the number of intervals [j2^{−k}, (j + 1)2^{−k}], 0 ≤ j < 2ᵏ, that meet Z. For j ≥ 1, the probability is (2/π) arctan √(1/j) ≤ (2/π) j^{−1/2}, and for j = 0 it is 1. So E N_k ≤ 1 + (2/π) ∑_{j=1}^{2ᵏ} j^{−1/2} ≤ 1 + (4/π) 2^{k/2}. For ε > 0, Markov's inequality gives P(N_k > 2^{k(1/2 + ε)}) ≤ C 2^{−kε}, which is summable, so by Borel–Cantelli N_k ≤ 2^{k(1/2+ε)} for all large k almost surely. Hence dim_B̄ Z ≤ 1/2 + ε, and dim_H Z ≤ dim_B̄ Z ≤ 1/2 almost surely.
  56. In polar coordinates, |Z|² is exponential with mean 2, i.e. P(|Z| > ρ) = e^{−ρ²/2}. So E|Z|^{−s} = ∫₀^∞ ρ^{−s} ρ e^{−ρ²/2} dρ = 2^{−s/2} Γ(1 − s/2), finite for s < 2. Then E I_s(μ) = 2^{−s/2} Γ(1 − s/2) · ∫₀¹∫₀¹ |t − u|^{−s/2} dt du = 2^{−s/2} Γ(1 − s/2) · 2/((1 − s/2)(2 − s/2)) < ∞ for s < 2, using Problem 30 with exponent s/2. By Theorem 7.4, dim_H B[0, 1] ≥ s for every s < 2.
  57. α(η) = −η log₂(1/3) − (1 − η) log₂(2/3) = η log₂ 3 + (1 − η)(log₂ 3 − 1) = log₂ 3 − 1 + η. Setting α = 1 gives η = 2 − log₂ 3 ≈ 0.41504. Then f(1) = H(η) = −η log₂ η − (1 − η) log₂(1 − η) ≈ 0.9791.
  58. If r_{k+1} − r_k = (r_k − r_{k−1})/δ for all k ≥ 5, then r_∞ = r₅ + (r₅ − r₄)(1/δ + 1/δ² + ⋯) = r₅ + (r₅ − r₄)/(δ − 1) = 3.568759 + 0.004352/3.669202 ≈ 3.568759 + 0.001186 = 3.569945, matching the true value 3.5699456… to six decimal places.
  59. By the Moran–Hutchinson theorem 0 < 𝓗ˢ(F) < ∞. By scaling, 𝓗ˢ(f_i(F)) = r_iˢ 𝓗ˢ(F), so ∑_i 𝓗ˢ(f_i(F)) = (∑ r_iˢ) 𝓗ˢ(F) = 𝓗ˢ(F) = 𝓗ˢ(⋃_i f_i(F)). For finitely many sets of finite measure, 𝓗ˢ(⋃ A_i) = ∑ 𝓗ˢ(A_i) forces 𝓗ˢ(A_i ∩ A_j) = 0 for i ≠ j (otherwise inclusion–exclusion, or the inequality 𝓗ˢ(A ∪ B) = 𝓗ˢ(A) + 𝓗ˢ(B) − 𝓗ˢ(A ∩ B), would make the union strictly smaller than the sum).
  60. Step 2 of the proof in Lesson 8 never used the OSC: for every ρ, F is covered by the #Q_ρ < (r_min ρ)^{−s} sets F_w of diameter at most ρ|F|, so N_{ρ|F|}(F) < (r_min ρ)^{−s} and dim_B̄ F ≤ s. For an example with strict inequality, the three maps x ↦ x/2, x ↦ x/2 + 1/4, x ↦ x/2 + 1/2 have attractor [0, 1] and similarity dimension log 3/log 2 ≈ 1.585 > 1 = dim_H [0, 1].
