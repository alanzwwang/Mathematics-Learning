Probability — An Advanced Course
══════════════════════════════════════════

Introduction
─────────────────────────────────

Probability theory began as a calculus of games. In 1654 Pascal and Fermat exchanged letters on the "problem of points" (how to divide the stakes of an interrupted game), Huygens wrote the first textbook in 1657, Jacob Bernoulli proved the first law of large numbers in the posthumous Ars Conjectandi (1713), de Moivre found the normal approximation to the binomial in 1733, and Laplace turned the subject into a systematic theory in his Théorie analytique des probabilités (1812). For the next century, however, the foundations remained unclear: what exactly is an "event", and what is a "random variable"? Hilbert's sixth problem (1900) asked for an axiomatic treatment of probability alongside mechanics.

The answer came in 1933, when A. N. Kolmogorov published the Grundbegriffe der Wahrscheinlichkeitsrechnung. Kolmogorov observed that the new theory of measure and integration created by Borel, Lebesgue, Fréchet and Radon was exactly the right language: a probability is a measure of total mass one, a random variable is a measurable function, and an expectation is a Lebesgue integral. Once this identification is made, the deep limit theorems of the subject (the strong law of large numbers, the central limit theorem, the convergence of Markov chains, the martingale convergence theorem) become precise statements with rigorous proofs, and probability becomes a branch of analysis with its own distinctive intuition.

This course develops that theory at the level of a first graduate course. The elementary rules met in a school course (P(not A) = 1 − P(A), the addition rule, the multiplication rule for independent events, expected value as a weighted average) are taken as known; here they are derived from axioms, generalised to infinite and continuous settings, and used as tools to prove theorems. We assume familiarity with real analysis (limits, series, the Riemann integral, basic topology of ℝ) and linear algebra. Measure theory is introduced as needed, with the central convergence theorems stated precisely and their proofs sketched or referenced.

Notation used throughout: (Ω, 𝓕, P) is a probability space; ω ∈ Ω is a sample point; 1_A is the indicator function of A; Aᶜ is the complement of A; a.s. means "almost surely", that is, outside an event of probability zero; i.i.d. means "independent and identically distributed"; Φ is the standard normal distribution function; and log denotes the natural logarithm.

In this course, you will:

  1. Build probability on Kolmogorov's axioms: σ-algebras, probability measures, and the extension and uniqueness theorems
  2. Master conditional probability, Bayes' theorem, independence of events and σ-algebras, and the Borel–Cantelli lemmas
  3. Treat random variables as measurable maps and classify their distributions (discrete, absolutely continuous, singular)
  4. Define expectation as a Lebesgue integral and use the monotone and dominated convergence theorems
  5. Use probability generating functions, moment generating functions and characteristic functions
  6. Prove and apply the inequalities of Markov, Chebyshev, Jensen, Hölder and Chernoff
  7. Distinguish the four main modes of convergence and know every implication and counterexample between them
  8. Prove the weak law of large numbers and the strong law under a fourth-moment hypothesis
  9. Prove the central limit theorem with characteristic functions and meet its refinements
  10. Work with conditional expectation and martingales, and prove the optional stopping theorem
  11. Analyse Markov chains: recurrence, stationary distributions and convergence to equilibrium
  12. Construct and characterise the Poisson process
  13. Solve 60 practice problems, from routine computations to research-flavoured challenges, with a full worked answer key

─────────────────────────────────
Lesson 1: Probability Spaces and the Kolmogorov Axioms
─────────────────────────────────

📌 Key idea of this section:

        A probability space is a triple (Ω, 𝓕, P): a set Ω, a σ-algebra 𝓕 of subsets of Ω,
        and a countably additive measure P : 𝓕 → [0, 1] with P(Ω) = 1.

Why not assign a probability to every set

The naive model of a random experiment assigns a probability to every subset of the sample space Ω. For a finite or countable Ω this works perfectly: choose weights p(ω) ≥ 0 summing to 1 and set P(A) = ∑_{ω∈A} p(ω). For uncountable Ω it fails. Consider the "uniform random point" of the circle Ω = [0, 1) with addition modulo 1. We would like a function P defined on all subsets, countably additive, with P([a, b)) = b − a and invariant under rotation. Vitali (1905) showed no such function exists. Declare x ~ y when x − y is rational; choose (using the axiom of choice) one representative from each equivalence class to form a set V. The rotates V + q (mod 1), q ∈ ℚ ∩ [0, 1), are pairwise disjoint and their union is [0, 1). Rotation invariance forces them all to have the same probability c, and countable additivity forces 1 = ∑_q c, which is impossible whether c = 0 or c > 0. The remedy is to restrict the collection of sets that receive a probability.

Sigma-algebras

Definition 1.1. A collection 𝓕 of subsets of Ω is a σ-algebra if (i) Ω ∈ 𝓕; (ii) A ∈ 𝓕 implies Aᶜ ∈ 𝓕; (iii) A₁, A₂, … ∈ 𝓕 implies ⋃ₙ Aₙ ∈ 𝓕. The pair (Ω, 𝓕) is a measurable space and the elements of 𝓕 are called events.

By De Morgan's laws a σ-algebra is also closed under countable intersections, and hence under set differences, symmetric differences, lim sup and lim inf of sequences of sets. The intersection of any family of σ-algebras on Ω is again a σ-algebra, so for any collection 𝓒 of subsets there is a smallest σ-algebra containing it, written σ(𝓒) and called the σ-algebra generated by 𝓒. The most important example is the Borel σ-algebra 𝓑(ℝ) = σ(open sets), which is also generated by the intervals (−∞, x], x ∈ ℝ, or even x ∈ ℚ.

If 𝓒 = {A₁, …, Aₙ} is a finite partition of Ω into nonempty "atoms", then σ(𝓒) consists of all unions of atoms, so it has exactly 2ⁿ elements. Every finite σ-algebra arises this way, so the number of elements of a finite σ-algebra is always a power of 2.

The axioms

Definition 1.2 (Kolmogorov, 1933). A probability measure on (Ω, 𝓕) is a function P : 𝓕 → [0, 1] such that P(Ω) = 1 and, for every sequence of pairwise disjoint events A₁, A₂, …,

        P(⋃ₙ Aₙ) = ∑ₙ P(Aₙ)        (countable additivity)

All of the familiar rules follow quickly. Taking all Aₙ = ∅ gives P(∅) = 0, and then finite additivity follows. Since A and Aᶜ are disjoint with union Ω, P(Aᶜ) = 1 − P(A). If A ⊆ B then B = A ∪ (B \ A), so P(A) ≤ P(B) (monotonicity). Writing A ∪ B = A ∪ (B \ A) gives P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and induction yields the inclusion–exclusion formula

        P(A₁ ∪ ⋯ ∪ Aₙ) = ∑ᵢ P(Aᵢ) − ∑_{i<j} P(Aᵢ ∩ Aⱼ) + ∑_{i<j<k} P(Aᵢ ∩ Aⱼ ∩ Aₖ) − ⋯ + (−1)ⁿ⁺¹ P(A₁ ∩ ⋯ ∩ Aₙ)

Disjointifying a sequence (B₁ = A₁, Bₙ = Aₙ \ (A₁ ∪ ⋯ ∪ Aₙ₋₁)) gives countable subadditivity, P(⋃ Aₙ) ≤ ∑ P(Aₙ), often called the union bound.

Theorem 1.3 (continuity of measure). If A₁ ⊆ A₂ ⊆ ⋯ and A = ⋃ Aₙ, then P(Aₙ) ↑ P(A). If A₁ ⊇ A₂ ⊇ ⋯ and A = ⋂ Aₙ, then P(Aₙ) ↓ P(A).

Proof. For the increasing case, the sets B₁ = A₁ and Bₙ = Aₙ \ Aₙ₋₁ are disjoint, ⋃_{k≤n} Bₖ = Aₙ and ⋃ Bₖ = A. By countable additivity P(A) = ∑ₖ P(Bₖ) = limₙ ∑_{k≤n} P(Bₖ) = limₙ P(Aₙ). The decreasing case follows by taking complements. ∎

Conversely, a finitely additive P with P(Ω) = 1 that is continuous along decreasing sequences with empty intersection is countably additive; in this sense countable additivity is exactly a continuity axiom. It is what makes limit theorems possible.

Constructing measures: Carathéodory and Dynkin

How do we know a probability measure with given properties exists, for example the uniform (Lebesgue) measure on [0, 1], or the law of an infinite sequence of fair coin tosses? The standard tool is the following theorem.

Theorem 1.4 (Carathéodory extension). Let 𝓐 be an algebra of subsets of Ω (closed under complements and finite unions) and let P₀ : 𝓐 → [0, 1] be countably additive on 𝓐 with P₀(Ω) = 1. Then P₀ extends to a probability measure on σ(𝓐), and the extension is unique.

The proof defines the outer measure P*(E) = inf { ∑ P₀(Aₙ) : Aₙ ∈ 𝓐, E ⊆ ⋃ Aₙ } and shows that the sets E satisfying Carathéodory's splitting condition P*(F) = P*(F ∩ E) + P*(F ∩ Eᶜ) for all F form a σ-algebra containing 𝓐 on which P* is countably additive. Applied to finite unions of intervals in [0, 1) with P₀ = total length, it produces Lebesgue measure. The uniqueness half is a consequence of a purely set-theoretic result that we will use repeatedly.

Definition 1.5. A collection 𝓟 is a π-system if it is closed under finite intersections. A collection 𝓛 is a λ-system (Dynkin system) if Ω ∈ 𝓛, A, B ∈ 𝓛 with A ⊆ B implies B \ A ∈ 𝓛, and Aₙ ∈ 𝓛 with Aₙ ↑ A implies A ∈ 𝓛.

Theorem 1.6 (Dynkin's π–λ theorem). If 𝓟 is a π-system contained in a λ-system 𝓛, then σ(𝓟) ⊆ 𝓛.

Corollary 1.7. Two probability measures that agree on a π-system 𝓟 agree on σ(𝓟). In particular, a probability measure on (ℝ, 𝓑(ℝ)) is determined by its values on the half-lines (−∞, x].

Proof. The collection 𝓛 = {A : P(A) = Q(A)} is a λ-system (use P(B \ A) = P(B) − P(A) and continuity from below), and it contains the π-system 𝓟. By Theorem 1.6 it contains σ(𝓟). The half-lines form a π-system generating 𝓑(ℝ). ∎

Null sets and "almost surely"

An event N with P(N) = 0 is a null event. A property that holds outside a null event holds almost surely. Countable unions of null events are null (by subadditivity), which is why we may freely discard countably many exceptional events. Uncountable unions are a different matter: under Lebesgue measure every single point of [0, 1] is null, but their union is everything. A probability space is complete if every subset of a null event is an event; any space can be completed, and we shall do so tacitly when convenient.

✏️ Your Turn

(a) Let A and B be events with A ∩ B, A ∩ Bᶜ, Aᶜ ∩ B and Aᶜ ∩ Bᶜ all nonempty. How many sets are in σ({A, B})?
(b) Prove the Bonferroni inequality P(A ∩ B) ≥ P(A) + P(B) − 1, and evaluate the bound when P(A) = 0.7 and P(B) = 0.6.
(c) Show that P(A₁ ∩ ⋯ ∩ Aₙ) ≥ 1 − ∑ᵢ P(Aᵢᶜ). If each of 20 independent safety checks fails with probability 0.01, what does this bound give, and what is the exact probability that all pass?

Answers: (a) The four given sets are the atoms of a partition, so σ({A, B}) has 2⁴ = 16 elements. (b) P(A ∩ B) = P(A) + P(B) − P(A ∪ B) ≥ P(A) + P(B) − 1; the bound gives P(A ∩ B) ≥ 0.3. (c) By the union bound P(⋃ Aᵢᶜ) ≤ ∑ P(Aᵢᶜ), and taking complements gives the claim. The bound gives at least 1 − 20(0.01) = 0.8; the exact value is 0.99²⁰ ≈ 0.8179.

─────────────────────────────────
Lesson 2: Conditioning, Bayes' Theorem and Independence
─────────────────────────────────

📌 Key idea of this section:

        P(A | B) = P(A ∩ B) / P(B),     P(Bₖ | A) = P(A | Bₖ) P(Bₖ) / ∑ⱼ P(A | Bⱼ) P(Bⱼ)
        A, B independent  ⇔  P(A ∩ B) = P(A) P(B)

Conditional probability as a new measure

Definition 2.1. If P(B) > 0, the conditional probability of A given B is P(A | B) = P(A ∩ B) / P(B).

For fixed B, the map A ↦ P(A | B) is itself a probability measure on (Ω, 𝓕), concentrated on B. Thus every theorem about probability measures applies to conditional probabilities. The definition rearranges to the multiplication rule P(A ∩ B) = P(A | B) P(B), and by induction

        P(A₁ ∩ ⋯ ∩ Aₙ) = P(A₁) P(A₂ | A₁) P(A₃ | A₁ ∩ A₂) ⋯ P(Aₙ | A₁ ∩ ⋯ ∩ Aₙ₋₁)

whenever the conditioning events have positive probability.

Theorem 2.2 (law of total probability and Bayes' theorem). Let B₁, B₂, … be a finite or countable partition of Ω into events of positive probability. Then for every event A,

        P(A) = ∑ⱼ P(A | Bⱼ) P(Bⱼ)

and, if P(A) > 0,

        P(Bₖ | A) = P(A | Bₖ) P(Bₖ) / ∑ⱼ P(A | Bⱼ) P(Bⱼ)

Proof. A is the disjoint union of the sets A ∩ Bⱼ, so countable additivity and the multiplication rule give the first formula. The second is P(Bₖ ∩ A)/P(A) with numerator and denominator rewritten by the multiplication rule and the first formula. ∎

In Bayesian language, P(Bₖ) is the prior, P(A | Bₖ) the likelihood and P(Bₖ | A) the posterior. Bayes' theorem is often clearest in odds form: posterior odds equal prior odds times the likelihood ratio,

        P(B | A) / P(Bᶜ | A) = [P(B) / P(Bᶜ)] · [P(A | B) / P(A | Bᶜ)]

Worked example 2.3. A condition has prevalence 1%. A test detects it with probability 0.99 (sensitivity) and gives a false positive with probability 0.05. Given a positive test, the probability of the condition is

        P(D | +) = (0.99)(0.01) / [(0.99)(0.01) + (0.05)(0.99)] = 0.0099 / 0.0594 = 1/6 ≈ 0.167

The prior odds 1 : 99 multiplied by the likelihood ratio 0.99/0.05 = 19.8 give posterior odds 19.8 : 99 = 1 : 5, the same answer. The low posterior despite an accurate test is the base-rate effect, and ignoring it is the base-rate fallacy.

Independence of events

Definition 2.4. Events A₁, …, Aₙ are (mutually) independent if P(⋂_{i∈S} Aᵢ) = ∏_{i∈S} P(Aᵢ) for every subset S ⊆ {1, …, n}. An infinite family is independent if every finite subfamily is.

Pairwise independence is strictly weaker. Toss two fair coins and let A = {first is heads}, B = {second is heads}, C = {the two coins agree}. Each event has probability 1/2 and each pair intersects in a single outcome of probability 1/4, so the three are pairwise independent. But A ∩ B ∩ C = A ∩ B has probability 1/4 ≠ 1/8, so they are not mutually independent. Note also that if A and B are independent then so are A and Bᶜ, Aᶜ and B, and Aᶜ and Bᶜ.

Independence of σ-algebras

Definition 2.5. Sub-σ-algebras 𝓖₁, …, 𝓖ₙ of 𝓕 are independent if P(G₁ ∩ ⋯ ∩ Gₙ) = P(G₁) ⋯ P(Gₙ) whenever Gᵢ ∈ 𝓖ᵢ. Random variables are independent when the σ-algebras they generate are.

Checking the definition on every set of a σ-algebra is impractical. The π–λ theorem reduces it to generators.

Lemma 2.6. If 𝓟₁, …, 𝓟ₙ are π-systems with Ω ∈ 𝓟ᵢ and P(P₁ ∩ ⋯ ∩ Pₙ) = ∏ P(Pᵢ) whenever Pᵢ ∈ 𝓟ᵢ, then σ(𝓟₁), …, σ(𝓟ₙ) are independent.

Proof. Fix P₂, …, Pₙ. Both sides of the product identity, regarded as functions of the first set, are finite measures that agree on 𝓟₁; the sets where they agree form a λ-system, so by Dynkin's theorem they agree on σ(𝓟₁). Repeat for each coordinate in turn. ∎

In particular, real random variables X₁, …, Xₙ are independent if and only if P(X₁ ≤ x₁, …, Xₙ ≤ xₙ) = ∏ P(Xᵢ ≤ xᵢ) for all real x₁, …, xₙ. A further consequence is grouping: if a family of independent σ-algebras is split into disjoint blocks, the σ-algebras generated by the blocks are independent. Functions of disjoint groups of independent variables are therefore independent.

The Borel–Cantelli lemmas

For a sequence of events, the event that infinitely many occur is:

        {Aₙ i.o.} = lim sup Aₙ = ⋂_{m≥1} ⋃_{n≥m} Aₙ

Theorem 2.7 (first Borel–Cantelli lemma). If ∑ₙ P(Aₙ) < ∞, then P(Aₙ i.o.) = 0.

Proof. For every m, P(lim sup Aₙ) ≤ P(⋃_{n≥m} Aₙ) ≤ ∑_{n≥m} P(Aₙ), the tail of a convergent series, which tends to 0. ∎

Theorem 2.8 (second Borel–Cantelli lemma). If the Aₙ are independent and ∑ₙ P(Aₙ) = ∞, then P(Aₙ i.o.) = 1.

Proof. It suffices to show that P(⋂_{n≥m} Aₙᶜ) = 0 for every m. By independence and continuity from above, and the inequality 1 − x ≤ e^{−x},

        P(⋂_{n=m}^{N} Aₙᶜ) = ∏_{n=m}^{N} (1 − P(Aₙ)) ≤ exp(−∑_{n=m}^{N} P(Aₙ)) → 0 as N → ∞

so the intersection over all n ≥ m is null. A countable union of null events is null, so P(⋃ₘ ⋂_{n≥m} Aₙᶜ) = 0, which is the complement of {Aₙ i.o.}. ∎

Together the lemmas give a zero–one law: for independent events, P(Aₙ i.o.) is 0 or 1 according as ∑ P(Aₙ) converges or diverges. For example, in an infinite sequence of fair coin tosses, let Bₖ = {tosses 2ᵏ through 2ᵏ + k − 1 are all heads}. The blocks of tosses are disjoint, so the Bₖ are independent, and P(Bₖ) = 2⁻ᵏ is summable: almost surely only finitely many Bₖ occur. If instead the block starting at toss 2ᵏ has length ⌊log₂ k⌋, its probability 2^{−⌊log₂ k⌋} is at least 1/k, the series diverges, and such runs of heads occur infinitely often almost surely. Independence cannot be dropped in Theorem 2.8: with A₁ = A₂ = ⋯ = A and P(A) = 1/2 the series diverges but P(Aₙ i.o.) = 1/2.

✏️ Your Turn

(a) Urn I contains 3 red and 2 blue balls; urn II contains 1 red and 4 blue. An urn is chosen by a fair coin and a ball drawn from it is red. Find the posterior probability that urn I was chosen.
(b) Let Aₙ be independent with P(Aₙ) = 1/n. What is P(Aₙ i.o.)? What if P(Aₙ) = 1/n² (independence no longer needed)?
(c) Show that an event A is independent of itself if and only if P(A) ∈ {0, 1}.

Answers: (a) P(I | red) = (1/2)(3/5) / [(1/2)(3/5) + (1/2)(1/5)] = 3/4. (b) ∑ 1/n = ∞, so P(Aₙ i.o.) = 1 by the second lemma; ∑ 1/n² = π²/6 < ∞, so P(Aₙ i.o.) = 0 by the first. (c) Independence of A with itself means P(A) = P(A)², whose only solutions are 0 and 1.

─────────────────────────────────
Lesson 3: Random Variables and Their Distributions
─────────────────────────────────

📌 Key idea of this section:

        A random variable is a measurable map X : (Ω, 𝓕) → (ℝ, 𝓑(ℝ)); its law is μ_X = P ∘ X⁻¹,
        and its distribution function F(x) = P(X ≤ x) determines μ_X completely.

Measurable maps

Definition 3.1. A function X : Ω → ℝ is a random variable if {X ≤ x} = X⁻¹((−∞, x]) ∈ 𝓕 for every real x.

Because the preimage map commutes with unions and complements, the sets B with X⁻¹(B) ∈ 𝓕 form a σ-algebra; it contains the half-lines and therefore all Borel sets. So the definition is equivalent to X⁻¹(B) ∈ 𝓕 for every Borel B. Sums, products, limits, lim sup and lim inf of sequences of random variables are random variables, as is g(X) for any Borel function g. The σ-algebra σ(X) = {X⁻¹(B) : B ∈ 𝓑(ℝ)} is the information carried by X. A useful fact (the Doob–Dynkin lemma) is that a random variable Y is σ(X)-measurable if and only if Y = g(X) for some Borel function g.

The law of X is the probability measure μ_X(B) = P(X ∈ B) on (ℝ, 𝓑(ℝ)), and its distribution function is F(x) = μ_X((−∞, x]). By Corollary 1.7, F determines μ_X.

Theorem 3.2. A function F : ℝ → [0, 1] is the distribution function of some random variable if and only if F is non-decreasing, right-continuous, F(x) → 0 as x → −∞ and F(x) → 1 as x → +∞.

Proof. Necessity follows from monotonicity and continuity of measure: for instance (−∞, x + 1/n] ↓ (−∞, x] gives right-continuity. For sufficiency, take Ω = (0, 1) with Lebesgue measure and define the generalised inverse X(u) = F⁻(u) = inf {x : F(x) ≥ u}. Right-continuity and monotonicity give the key equivalence F⁻(u) ≤ x ⇔ u ≤ F(x). Hence P(X ≤ x) = Leb{u : u ≤ F(x)} = F(x). ∎

This quantile construction is also the inverse transform method for simulation: if U is uniform on (0, 1), then F⁻(U) has distribution function F. Conversely, if F is continuous then F(X) is uniform on (0, 1), the probability integral transform.

Three kinds of distribution

The jumps of F occur at the atoms x with P(X = x) = F(x) − F(x−) > 0; since the jumps sum to at most 1 there are at most countably many. A law is discrete if it is carried by its atoms, and absolutely continuous if there is a density f ≥ 0 with F(x) = ∫_{−∞}^{x} f(t) dt; then P(X ∈ B) = ∫_B f for every Borel B. There is a third, less familiar possibility. The Cantor distribution is the law of X = ∑ₖ 2εₖ/3ᵏ, where the εₖ are i.i.d. fair bits. Its distribution function is the Cantor function: continuous, so there are no atoms, yet the law lives on the Cantor set, which has Lebesgue measure zero, so there is no density. Such a law is called singular continuous.

Theorem 3.3 (Lebesgue decomposition). Every distribution function can be written uniquely as F = a F_d + b F_ac + c F_sc with a, b, c ≥ 0, a + b + c = 1, where F_d is discrete, F_ac is absolutely continuous and F_sc is singular continuous.

The Radon–Nikodym theorem underlies this result: μ has a density with respect to Lebesgue measure if and only if μ(B) = 0 for every Lebesgue-null set B.

A catalogue of laws

The following distributions occur constantly; mean and variance are listed for reference and are derived in the exercises and Lesson 5.

        Bernoulli(p)         P(X = 1) = p, P(X = 0) = 1 − p                      mean p        variance p(1 − p)
        Binomial(n, p)       P(X = k) = C(n,k) pᵏ (1 − p)ⁿ⁻ᵏ                     mean np       variance np(1 − p)
        Geometric(p)         P(X = k) = (1 − p)ᵏ⁻¹ p,  k ≥ 1                      mean 1/p      variance (1 − p)/p²
        Poisson(λ)           P(X = k) = e^{−λ} λᵏ / k!,  k ≥ 0                    mean λ        variance λ
        Uniform(a, b)        f(x) = 1/(b − a) on (a, b)                           mean (a+b)/2  variance (b − a)²/12
        Exponential(λ)       f(x) = λ e^{−λx},  x > 0                             mean 1/λ      variance 1/λ²
        Gamma(α, λ)          f(x) = λ^α x^{α−1} e^{−λx} / Γ(α),  x > 0            mean α/λ      variance α/λ²
        Normal(μ, σ²)        f(x) = (2πσ²)^{−1/2} exp(−(x − μ)²/(2σ²))            mean μ        variance σ²
        Cauchy               f(x) = 1/(π(1 + x²))                                 no mean       no variance

Joint laws and transformations

A random vector X = (X₁, …, Xₙ) is a measurable map into ℝⁿ; its law is a measure on 𝓑(ℝⁿ), determined by the joint distribution function. The coordinates are independent exactly when the joint law is the product of the marginal laws, and, in the absolutely continuous case, exactly when the joint density factorises as f(x₁, …, xₙ) = f₁(x₁) ⋯ fₙ(xₙ) almost everywhere.

Theorem 3.4 (change of variables). Let X have density f_X on an open set U ⊆ ℝⁿ and let g : U → V be a C¹ bijection with C¹ inverse. Then Y = g(X) has density

        f_Y(y) = f_X(g⁻¹(y)) · |det D(g⁻¹)(y)|,    y ∈ V

In one dimension with g strictly increasing, this reads f_Y(y) = f_X(g⁻¹(y)) / g′(g⁻¹(y)). When g is not injective, sum over the branches. For example, if Z is standard normal then Y = Z² has two branches ±√y, and

        f_Y(y) = 2 · (2π)^{−1/2} e^{−y/2} · 1/(2√y) = (2πy)^{−1/2} e^{−y/2},    y > 0

which is the Gamma(1/2, 1/2) law, also called the chi-squared law with one degree of freedom. A classical two-dimensional application is the Box–Muller transform: if U₁, U₂ are independent uniforms, then √(−2 log U₁) cos(2πU₂) and √(−2 log U₁) sin(2πU₂) are independent standard normals. The proof runs Theorem 3.4 backwards through polar coordinates, where the Gaussian density e^{−(x² + y²)/2}/(2π) separates into an exponential radial part and a uniform angle.

Order statistics give another standard computation. If X₁, …, Xₙ are i.i.d. with distribution function F, then M = max Xᵢ satisfies P(M ≤ x) = F(x)ⁿ by independence, and the minimum satisfies P(min Xᵢ > x) = (1 − F(x))ⁿ.

✏️ Your Turn

(a) Show that if U is uniform on (0, 1) and λ > 0, then −(log U)/λ is Exponential(λ).
(b) Let M be the maximum of n independent Uniform(0, 1) variables. Find its density and its mean.
(c) Let C be the Cantor function. Find C(1/4).

Answers: (a) P(−(log U)/λ > x) = P(U < e^{−λx}) = e^{−λx} for x > 0, the exponential tail. (b) P(M ≤ y) = yⁿ, so the density is n yⁿ⁻¹ on (0, 1) and E M = ∫₀¹ n yⁿ dy = n/(n + 1). (c) In base 3, 1/4 = 0.020202…, which has digits 0 and 2 only; replacing each 2 by 1 and reading in base 2 gives 0.010101… = 1/3, so C(1/4) = 1/3.

─────────────────────────────────
Lesson 4: Expectation as a Lebesgue Integral
─────────────────────────────────

📌 Key idea of this section:

        E X = ∫_Ω X dP = ∫_ℝ x μ_X(dx),   defined for X ≥ 0 as a supremum over simple functions,
        and justified in the limit by the monotone and dominated convergence theorems.

Construction in three steps

A simple random variable takes finitely many values: X = ∑ᵢ aᵢ 1_{Aᵢ} with Aᵢ ∈ 𝓕. Its expectation is E X = ∑ᵢ aᵢ P(Aᵢ), which is well defined (independent of the representation), linear and monotone. For X ≥ 0 we set

        E X = sup { E S : S simple, 0 ≤ S ≤ X } ∈ [0, ∞]

A concrete approximating sequence is Sₙ = min(n, 2⁻ⁿ⌊2ⁿX⌋), which is simple and increases to X pointwise. Finally, for general X write X = X⁺ − X⁻ with X⁺ = max(X, 0) and X⁻ = max(−X, 0); if E|X| = E X⁺ + E X⁻ < ∞ we say X is integrable, write X ∈ L¹, and set E X = E X⁺ − E X⁻. Expectation is then linear and monotone on L¹, and |E X| ≤ E|X|.

The three convergence theorems

The whole point of the Lebesgue integral is that it interacts well with limits. Here are the three results used constantly in probability.

Theorem 4.1 (monotone convergence). If 0 ≤ X₁ ≤ X₂ ≤ ⋯ and Xₙ ↑ X almost surely, then E Xₙ ↑ E X.

Theorem 4.2 (Fatou's lemma). If Xₙ ≥ 0, then E(lim inf Xₙ) ≤ lim inf E Xₙ.

Theorem 4.3 (dominated convergence). If Xₙ → X almost surely and |Xₙ| ≤ Y with E Y < ∞, then E|Xₙ − X| → 0, and in particular E Xₙ → E X.

Proof of 4.2 from 4.1. Let Yₘ = inf_{n≥m} Xₙ. Then Yₘ ↑ lim inf Xₙ, and Yₘ ≤ Xₙ for every n ≥ m, so E Yₘ ≤ inf_{n≥m} E Xₙ. Letting m → ∞ and applying monotone convergence on the left gives the result. ∎

Proof of 4.3 from 4.2. Apply Fatou to the nonnegative variables 2Y − |Xₙ − X|. Since lim inf of these is 2Y, we get 2E Y ≤ 2E Y − lim sup E|Xₙ − X|, so lim sup E|Xₙ − X| ≤ 0. ∎

Without domination the conclusion can fail: on (0, 1) with Lebesgue measure, Xₙ = n · 1_{(0, 1/n)} tends to 0 at every point, yet E Xₙ = 1 for all n. Applying monotone convergence to partial sums gives the important corollary E ∑ₙ Xₙ = ∑ₙ E Xₙ for nonnegative Xₙ, which is how expectations of infinite sums are computed.

The law of the unconscious statistician

Theorem 4.4. If g is Borel and g(X) is integrable or nonnegative, then E g(X) = ∫_ℝ g(x) μ_X(dx). In the discrete case this is ∑ₓ g(x) P(X = x), and with a density it is ∫ g(x) f(x) dx.

Proof. For g = 1_B both sides equal P(X ∈ B). Linearity gives simple g; monotone convergence gives nonnegative g; and the decomposition g = g⁺ − g⁻ gives integrable g. ∎

This "standard machine" (indicators, then simple functions, then limits, then differences) proves most identities about integrals. Another product of it is Fubini's theorem for nonnegative functions, from which follows a formula used repeatedly.

Theorem 4.5 (tail formula). If X ≥ 0, then E X = ∫₀^∞ P(X > t) dt. If N takes values in {0, 1, 2, …}, then E N = ∑_{k≥1} P(N ≥ k).

Proof. X = ∫₀^∞ 1{t < X} dt pointwise. Take expectations and exchange E with ∫ by Tonelli's theorem, which is permitted for nonnegative integrands. The discrete version is the same argument with a sum. ∎

For a Geometric(p) variable, P(N ≥ k) = (1 − p)ᵏ⁻¹, so E N = ∑_{k≥1} (1 − p)ᵏ⁻¹ = 1/p, with no differentiation of series required.

Variance, covariance and indicators

For X ∈ L², define Var X = E(X − E X)² = E X² − (E X)² and Cov(X, Y) = E[(X − E X)(Y − E Y)]. Bilinearity gives

        Var(X₁ + ⋯ + Xₙ) = ∑ᵢ Var Xᵢ + 2 ∑_{i<j} Cov(Xᵢ, Xⱼ)

If X and Y are independent and integrable, then E XY = E X · E Y (prove it for indicators, then use the standard machine), so Cov(X, Y) = 0 and variances of independent summands add. The converse is false: if X is uniform on {−1, 0, 1} and Y = X², then Cov(X, Y) = E X³ − E X · E X² = 0, yet Y is a function of X. The correlation coefficient ρ = Cov(X, Y)/√(Var X · Var Y) lies in [−1, 1] by the Cauchy–Schwarz inequality, with |ρ| = 1 exactly when Y is almost surely an affine function of X.

The method of indicators exploits linearity of expectation, which needs no independence. Write a count as a sum of indicators N = ∑ᵢ 1_{Aᵢ}; then E N = ∑ᵢ P(Aᵢ) and Var N = ∑ᵢ P(Aᵢ)(1 − P(Aᵢ)) + 2∑_{i<j} [P(Aᵢ ∩ Aⱼ) − P(Aᵢ)P(Aⱼ)].

Worked example 4.6 (fixed points). Let N be the number of fixed points of a uniformly random permutation of {1, …, n}, and Aᵢ = {i is fixed}. Then P(Aᵢ) = 1/n and P(Aᵢ ∩ Aⱼ) = 1/(n(n − 1)) for i ≠ j. Hence E N = 1 for every n, and

        Var N = n · (1/n)(1 − 1/n) + 2 · C(n, 2) · [1/(n(n − 1)) − 1/n²] = (1 − 1/n) + 1/n = 1

for every n ≥ 2. The exact law is P(N = 0) = ∑_{k=0}^{n} (−1)ᵏ/k! → e^{−1} by inclusion–exclusion, and in fact N converges in distribution to Poisson(1).

Worked example 4.7 (coupon collector). A collector receives independent uniformly random coupons from n types. After k distinct types have been seen, the waiting time for a new one is Geometric((n − k)/n), with mean n/(n − k). Summing over k = 0, …, n − 1, the expected time to complete the collection is

        E T = n (1 + 1/2 + ⋯ + 1/n) = n Hₙ ∼ n log n

For n = 6 (the faces of a die), E T = 6 · 49/20 = 14.7 rolls.

✏️ Your Turn

(a) Use the tail formula to compute E X for X ~ Exponential(λ).
(b) Let X ~ Binomial(n, p). Write X as a sum of indicators and derive Var X = np(1 − p).
(c) A random permutation of {1, …, 10} is chosen. What is the expected number of indices i ≤ 9 with σ(i + 1) = σ(i) + 1?

Answers: (a) E X = ∫₀^∞ e^{−λt} dt = 1/λ. (b) X = ∑ 1_{Aᵢ} with independent Aᵢ of probability p; covariances vanish, so Var X = ∑ p(1 − p) = np(1 − p). (c) For each i, the pair (σ(i), σ(i + 1)) is uniform over the 90 ordered pairs of distinct values, of which 9 have the form (v, v + 1); so each indicator has probability 1/10 and the expectation is 9/10.

─────────────────────────────────
Lesson 5: Generating Functions and Characteristic Functions
─────────────────────────────────

📌 Key idea of this section:

        G(s) = E sˣ,   M(t) = E e^{tX},   φ(t) = E e^{itX};   for independent X, Y:  φ_{X+Y} = φ_X · φ_Y,
        and φ determines the law uniquely.

Probability generating functions

For X with values in {0, 1, 2, …}, the probability generating function G(s) = E sˣ = ∑ₖ P(X = k) sᵏ is a power series with radius of convergence at least 1. It determines the law, since P(X = k) = G⁽ᵏ⁾(0)/k!, and its derivatives at 1 (taken as left limits) give the factorial moments: G′(1) = E X and G″(1) = E X(X − 1), so Var X = G″(1) + G′(1) − G′(1)². For independent X and Y, G_{X+Y} = G_X G_Y.

A celebrated application is the Galton–Watson branching process. Each individual independently has a random number of children with law (pₖ) and generating function G. Let Zₙ be the size of generation n, starting from Z₀ = 1. Conditioning on Z₁ shows that Zₙ has generating function Gₙ = G ∘ G ∘ ⋯ ∘ G (n-fold composition).

Theorem 5.1 (extinction). Let m = G′(1) be the mean offspring number and exclude the trivial case p₁ = 1. The extinction probability q = P(Zₙ = 0 for some n) is the smallest root of G(s) = s in [0, 1]. Consequently q = 1 if m ≤ 1, and q < 1 if m > 1.

Proof. P(Zₙ = 0) = Gₙ(0) increases to q by continuity of measure, and Gₙ₊₁(0) = G(Gₙ(0)), so continuity of G gives q = G(q). If r ∈ [0, 1] is any root, then 0 ≤ r implies Gₙ(0) ≤ Gₙ(r) = r for all n, so q ≤ r. Finally G is convex on [0, 1] with G(1) = 1; the graph crosses the diagonal below 1 exactly when the slope at 1 exceeds 1. ∎

For example, if p₀ = 1/4, p₁ = 1/4, p₂ = 1/2, then m = 5/4 and G(s) = s becomes 2s² − 3s + 1 = 0, with roots 1/2 and 1. The extinction probability is 1/2.

Moment generating functions

The moment generating function M(t) = E e^{tX} takes values in (0, ∞]. If it is finite on an open interval around 0, then M is analytic there, all moments exist, and E Xᵏ = M⁽ᵏ⁾(0). Moreover, two such laws with equal M on a neighbourhood of 0 coincide. Standard examples are:

        Poisson(λ):      M(t) = exp(λ(eᵗ − 1))
        Exponential(λ):  M(t) = λ/(λ − t),   t < λ
        Normal(μ, σ²):   M(t) = exp(μt + σ²t²/2)
        Gamma(α, λ):     M(t) = (λ/(λ − t))^α,   t < λ

Multiplying generating functions proves closure properties at once. The sum of independent Poisson(λ) and Poisson(μ) variables is Poisson(λ + μ); a sum of n independent Exponential(λ) variables is Gamma(n, λ); and independent normals add to a normal with added means and variances.

Moments alone need not determine a law. The log-normal density f(x) = (2π)^{−1/2} x⁻¹ exp(−(log x)²/2) and its perturbation f(x)(1 + sin(2π log x)) have identical moments E Xᵏ = e^{k²/2} for every k (Heyde, 1963). The log-normal MGF is infinite for every t > 0, which is why the uniqueness theorem does not apply. Carleman's condition, ∑ₖ (E X²ᵏ)^{−1/(2k)} = ∞, is a sufficient condition for a law on ℝ to be determined by its moments.

Characteristic functions

The characteristic function φ_X(t) = E e^{itX} = E cos(tX) + i E sin(tX) exists for every random variable, because |e^{itX}| = 1. Its basic properties:

        φ(0) = 1,   |φ(t)| ≤ 1,   φ(−t) = conj φ(t),   φ_{aX+b}(t) = e^{ibt} φ_X(at)
        φ is uniformly continuous on ℝ, and φ_{X+Y} = φ_X φ_Y when X and Y are independent

Uniform continuity follows from |φ(t + h) − φ(t)| ≤ E|e^{ihX} − 1|, which tends to 0 as h → 0 uniformly in t by dominated convergence. The following are the central facts.

Theorem 5.2 (inversion and uniqueness). For a < b,

        lim_{T→∞} (1/2π) ∫_{−T}^{T} (e^{−ita} − e^{−itb})/(it) · φ(t) dt = μ((a, b)) + ½ μ({a}) + ½ μ({b})

Hence φ determines μ. If ∫ |φ(t)| dt < ∞, then X has a bounded continuous density f(x) = (1/2π) ∫ e^{−itx} φ(t) dt.

Theorem 5.3 (moments). If E|X|ⁿ < ∞, then φ is n times continuously differentiable and φ⁽ᵏ⁾(0) = iᵏ E Xᵏ for k ≤ n. In particular, if E X = 0 and E X² = σ², then φ(t) = 1 − σ²t²/2 + o(t²) as t → 0.

Two standard computations: the standard normal has φ(t) = e^{−t²/2} (complete the square in the integral, or verify that φ′(t) = −tφ(t)); the standard Cauchy law has φ(t) = e^{−|t|}, which is not differentiable at 0, reflecting the absence of a mean. Consequently the average of n i.i.d. standard Cauchy variables has characteristic function (e^{−|t|/n})ⁿ = e^{−|t|}, so it is again standard Cauchy: averaging does not concentrate it at all. Bochner's theorem characterises characteristic functions as exactly the continuous positive-definite functions with φ(0) = 1.

✏️ Your Turn

(a) From M(t) = λ/(λ − t), compute E X and Var X for X ~ Exponential(λ).
(b) Find the extinction probability of a branching process with p₀ = 1/4 and p₂ = 3/4.
(c) Compute the characteristic function of a uniform variable on (−1, 1).

Answers: (a) M′(t) = λ/(λ − t)², M″(t) = 2λ/(λ − t)³, so E X = 1/λ, E X² = 2/λ² and Var X = 1/λ². (b) G(s) = 1/4 + 3s²/4 = s gives 3s² − 4s + 1 = 0, with roots 1/3 and 1; since m = 3/2 > 1, q = 1/3. (c) φ(t) = (1/2)∫_{−1}^{1} e^{itx} dx = sin(t)/t for t ≠ 0, and φ(0) = 1.

─────────────────────────────────
Lesson 6: The Fundamental Inequalities
─────────────────────────────────

📌 Key idea of this section:

        P(X ≥ a) ≤ E X / a  (X ≥ 0),     P(|X − μ| ≥ a) ≤ σ²/a²,     φ(E X) ≤ E φ(X)  (φ convex)
        P(X ≥ a) ≤ inf_{t>0} e^{−ta} E e^{tX}

Markov and Chebyshev

Theorem 6.1 (Markov's inequality). If X ≥ 0 and a > 0, then P(X ≥ a) ≤ E X / a.

Proof. Pointwise, a · 1{X ≥ a} ≤ X. Take expectations. ∎

Applied to an increasing function ψ ≥ 0 of |X|, it gives P(|X| ≥ a) ≤ E ψ(|X|)/ψ(a). With ψ(x) = x² and X replaced by X − μ, this is Chebyshev's inequality:

        P(|X − μ| ≥ a) ≤ Var X / a²

Both inequalities are sharp in the sense that equality is attained by suitable two- or three-point laws: X taking the value a with probability p and 0 otherwise gives equality in Markov's inequality. Their value lies in generality, not precision. A one-sided refinement is Cantelli's inequality, P(X − μ ≥ a) ≤ σ²/(σ² + a²) for a > 0.

Jensen, Hölder and the Lᵖ spaces

Theorem 6.2 (Jensen's inequality). If φ is convex on an interval containing the values of X, and X and φ(X) are integrable, then φ(E X) ≤ E φ(X).

Proof. A convex function lies above each of its supporting lines: for c = E X there is a slope m with φ(x) ≥ φ(c) + m(x − c) for all x. Put x = X and take expectations; the linear term has mean zero. ∎

Consequences include (E X)² ≤ E X², e^{E X} ≤ E e^{X}, and the AM–GM inequality (apply Jensen to −log with X uniform on a finite list). For 1 ≤ p < q, applying Jensen to the convex function x ↦ x^{q/p} and the variable |X|ᵖ gives Lyapunov's inequality

        ‖X‖_p = (E|X|ᵖ)^{1/p} ≤ (E|X|^q)^{1/q} = ‖X‖_q

so on a probability space L^q ⊆ Lᵖ. (This fails on infinite measure spaces such as ℝ with Lebesgue measure.) Hölder's inequality, E|XY| ≤ ‖X‖_p ‖Y‖_q for 1/p + 1/q = 1, has the Cauchy–Schwarz inequality E|XY| ≤ √(E X² · E Y²) as its case p = q = 2; and Minkowski's inequality ‖X + Y‖_p ≤ ‖X‖_p + ‖Y‖_p makes Lᵖ a normed space (after identifying a.s. equal variables), which is complete for every p ≥ 1.

Exponential bounds: the Chernoff method

Markov's inequality applied to e^{tX} gives, for every t > 0, P(X ≥ a) ≤ e^{−ta} M(t). Optimising over t is the Chernoff method. For a sum Sₙ of n i.i.d. copies of X, the bound becomes exp(−n sup_t [ta − log M(t)]), and the exponent

        I(a) = sup_{t∈ℝ} [ta − log M(t)]

is the Legendre transform of the cumulant generating function. Cramér's theorem (1938) states that this is the exact exponential rate: (1/n) log P(Sₙ ≥ na) → −I(a) for a > E X, provided M is finite near 0. This is the first theorem of large deviations theory. For Bernoulli(p) summands, I(a) = a log(a/p) + (1 − a) log((1 − a)/(1 − p)), the relative entropy of Bernoulli(a) with respect to Bernoulli(p).

Theorem 6.3 (Hoeffding's inequality). If X₁, …, Xₙ are independent with aᵢ ≤ Xᵢ ≤ bᵢ and Sₙ = ∑ Xᵢ, then for t > 0

        P(Sₙ − E Sₙ ≥ t) ≤ exp(−2t² / ∑ᵢ (bᵢ − aᵢ)²)

The proof bounds each factor by Hoeffding's lemma, E e^{s(X − E X)} ≤ exp(s²(b − a)²/8), which follows from convexity of x ↦ e^{sx} on [a, b] together with a second-order Taylor estimate of the resulting logarithm; then optimise s.

Worked example 6.4 (comparing the bounds). Let S be the number of heads in 100 fair tosses, so E S = 50 and Var S = 25. Consider P(S ≥ 75).

        Markov:     P(S ≥ 75) ≤ 50/75 ≈ 0.667
        Chebyshev:  P(S ≥ 75) ≤ P(|S − 50| ≥ 25) ≤ 25/625 = 0.04
        Hoeffding:  P(S ≥ 75) ≤ exp(−2 · 25²/100) = e^{−12.5} ≈ 3.73 × 10⁻⁶
        Chernoff:   P(S ≥ 75) ≤ exp(−100 · I(0.75)) ≈ e^{−13.08} ≈ 2.08 × 10⁻⁶
        Exact:      P(S ≥ 75) ≈ 2.82 × 10⁻⁷

Here I(0.75) = 0.75 log 1.5 + 0.25 log 0.5 ≈ 0.1308. The polynomial bounds are useless for small tail probabilities; the exponential bounds have essentially the right exponent and miss only a sub-exponential factor of order 1/√n.

✏️ Your Turn

(a) A nonnegative random variable has mean 4. What is the largest possible value of P(X ≥ 10)? Give a law attaining it.
(b) Show that E[1/X] ≥ 1/E X for a positive random variable X.
(c) For Sₙ ~ Binomial(n, 1/2), use Hoeffding's inequality to find n large enough that P(|Sₙ/n − 1/2| ≥ 0.05) ≤ 0.01.

Answers: (a) 0.4, by Markov; attained by X = 10 with probability 0.4 and X = 0 otherwise. (b) x ↦ 1/x is convex on (0, ∞), so Jensen gives 1/E X ≤ E[1/X]. (c) The two-sided bound is 2 exp(−2n(0.05)²) = 2e^{−n/200}; this is at most 0.01 when n ≥ 200 log 200 ≈ 1059.7, so n = 1060 suffices.

─────────────────────────────────
Lesson 7: Modes of Convergence
─────────────────────────────────

📌 Key idea of this section:

        almost surely  ⇒  in probability  ⇒  in distribution,      in Lᵖ  ⇒  in probability
        and no other implication holds in general.

Four definitions

Let X, X₁, X₂, … be random variables. We say that Xₙ → X

        almost surely (a.s.)    if P(Xₙ → X) = 1
        in probability          if P(|Xₙ − X| > ε) → 0 for every ε > 0
        in Lᵖ (p ≥ 1)           if E|Xₙ − X|ᵖ → 0
        in distribution         if Fₙ(x) → F(x) at every continuity point x of F

Convergence in distribution (also called weak convergence, written Xₙ ⇒ X) concerns only the laws, so the variables may even live on different probability spaces. The restriction to continuity points is essential: Xₙ = 1/n should converge to X = 0, yet Fₙ(0) = 0 does not converge to F(0) = 1.

The implications

Theorem 7.1. (i) Almost sure convergence implies convergence in probability. (ii) Lᵖ convergence implies convergence in probability. (iii) Convergence in probability implies convergence in distribution. (iv) If Xₙ ⇒ c for a constant c, then Xₙ → c in probability.

Proof. (i) Let Aₙ = {|Xₙ − X| > ε}. Almost sure convergence means P(Aₙ i.o.) = 0, and P(Aₙ) ≤ P(⋃_{m≥n} Aₘ) ↓ P(Aₙ i.o.) = 0. (ii) By Markov, P(|Xₙ − X| > ε) ≤ E|Xₙ − X|ᵖ/εᵖ. (iii) For every ε > 0, P(Xₙ ≤ x) ≤ P(X ≤ x + ε) + P(|Xₙ − X| > ε) and P(X ≤ x − ε) ≤ P(Xₙ ≤ x) + P(|Xₙ − X| > ε). Let n → ∞ and then ε ↓ 0, using continuity of F at x. (iv) P(|Xₙ − c| > ε) ≤ Fₙ(c − ε) + 1 − Fₙ(c + ε/2) → 0, since c − ε and c + ε/2 are continuity points of the distribution function of the constant c. ∎

The counterexamples

Every missing implication fails. Work on Ω = [0, 1] with Lebesgue measure.

The typewriter sequence: for n = 2ᵏ + j with 0 ≤ j < 2ᵏ, let Xₙ be the indicator of [j 2⁻ᵏ, (j + 1) 2⁻ᵏ]. Then P(Xₙ ≠ 0) = 2⁻ᵏ → 0, so Xₙ → 0 in probability and in every Lᵖ, but for every ω the sequence Xₙ(ω) equals 1 infinitely often: there is no almost sure convergence at any point.

Spikes: Xₙ = n · 1_{(0, 1/n)} converges to 0 at every point, hence a.s. and in probability, but E Xₙ = 1, so not in L¹.

Symmetric swaps: let X be Bernoulli(1/2) and Xₙ = 1 − X for all n. Then every Xₙ has the same law as X, so Xₙ ⇒ X trivially, but |Xₙ − X| = 1 always: no convergence in probability.

Two partial converses

Theorem 7.2 (Riesz). If Xₙ → X in probability, then some subsequence converges almost surely.

Proof. Choose n₁ < n₂ < ⋯ with P(|X_{nₖ} − X| > 1/k) ≤ 2⁻ᵏ. These probabilities are summable, so by the first Borel–Cantelli lemma, almost surely |X_{nₖ} − X| ≤ 1/k for all large k. ∎

A sequence is uniformly integrable if sup_n E[|Xₙ| 1{|Xₙ| > K}] → 0 as K → ∞. It is UI if, for instance, it is bounded in Lᵖ for some p > 1, or dominated by an integrable variable.

Theorem 7.3 (Vitali). Xₙ → X in L¹ if and only if Xₙ → X in probability and (Xₙ) is uniformly integrable.

The spike example fails exactly this test: E[Xₙ 1{Xₙ > K}] = 1 whenever n > K.

Working with convergence in distribution

Theorem 7.4 (portmanteau, partial). The following are equivalent: (a) Xₙ ⇒ X; (b) E g(Xₙ) → E g(X) for every bounded continuous g; (c) lim sup P(Xₙ ∈ F) ≤ P(X ∈ F) for every closed F; (d) P(Xₙ ∈ B) → P(X ∈ B) for every Borel B with P(X ∈ ∂B) = 0.

Statement (b) is the definition used for random elements of metric spaces, such as random functions in the theory of Brownian motion. From it follows the continuous mapping theorem: if Xₙ ⇒ X and h is continuous, then h(Xₙ) ⇒ h(X). Two further tools are used all the time in statistics.

Theorem 7.5 (Slutsky). If Xₙ ⇒ X and Yₙ → c in probability, with c constant, then Xₙ + Yₙ ⇒ X + c and XₙYₙ ⇒ cX.

Theorem 7.6 (Skorokhod representation). If Xₙ ⇒ X on ℝ, there exist variables Yₙ, Y on a common probability space with Yₙ equal in law to Xₙ, Y equal in law to X, and Yₙ → Y almost surely.

The proof of 7.6 takes Yₙ = Fₙ⁻(U) and Y = F⁻(U) for one uniform U, the quantile construction of Lesson 3; the generalised inverses converge at every continuity point of F⁻, and there are only countably many discontinuities.

Finally, tightness is the probabilistic form of compactness. A family of laws is tight if for every ε > 0 there is K with P(|Xₙ| > K) < ε for all n. Helly's selection theorem with Prokhorov's theorem says that every tight sequence has a subsequence converging in distribution. This is the compactness input in the proof of Lévy's continuity theorem in Lesson 9.

✏️ Your Turn

(a) Let Xₙ be independent with P(Xₙ = 1) = 1/n and P(Xₙ = 0) = 1 − 1/n. Does Xₙ → 0 in probability? Almost surely?
(b) Same question with P(Xₙ = 1) = 1/n².
(c) Let Xₙ be uniform on {1/n, 2/n, …, n/n}. Show that Xₙ ⇒ U, where U is Uniform(0, 1).

Answers: (a) In probability yes, since P(Xₙ = 1) → 0; almost surely no, since the events {Xₙ = 1} are independent with divergent probability sum, so Xₙ = 1 infinitely often a.s. by the second Borel–Cantelli lemma. (b) Both: the probabilities are summable, so Xₙ = 0 eventually a.s. by the first lemma. (c) For x ∈ [0, 1], Fₙ(x) = ⌊nx⌋/n, which lies within 1/n of x, so Fₙ(x) → x = F(x) everywhere.

─────────────────────────────────
Lesson 8: The Laws of Large Numbers
─────────────────────────────────

📌 Key idea of this section:

        X₁, X₂, … i.i.d. with E|X₁| < ∞ and μ = E X₁:   Sₙ/n = (X₁ + ⋯ + Xₙ)/n → μ   almost surely.

The weak law

Bernoulli's theorem of 1713, the first limit theorem of probability, says that the proportion of successes in n Bernoulli(p) trials converges in probability to p. Chebyshev's inequality makes the general L² case a one-line argument.

Theorem 8.1 (weak law, L² version). Let X₁, X₂, … be uncorrelated with E Xᵢ = μ and Var Xᵢ ≤ C < ∞. Then Sₙ/n → μ in L² and in probability.

Proof. By uncorrelatedness, Var(Sₙ/n) = (1/n²) ∑ Var Xᵢ ≤ C/n. Hence E(Sₙ/n − μ)² ≤ C/n → 0, and Chebyshev gives P(|Sₙ/n − μ| > ε) ≤ C/(nε²) → 0. ∎

The finite-variance hypothesis can be removed. For i.i.d. integrable Xᵢ, truncate at level n, writing Xᵢ = Xᵢ 1{|Xᵢ| ≤ n} + Xᵢ 1{|Xᵢ| > n}; the truncated variables have variance at most E[X₁² 1{|X₁| ≤ n}] = o(n), and the probability that any of the first n variables exceeds n is at most n P(|X₁| > n) → 0. This proves Khinchin's weak law: Sₙ/n → μ in probability whenever E|X₁| < ∞. Feller's refinement shows that Sₙ/n − E[X₁ 1{|X₁| ≤ n}] → 0 in probability if and only if x P(|X₁| > x) → 0, which can hold even when E|X₁| = ∞.

Bernstein's polynomial proof of the Weierstrass approximation theorem is a pretty application. For continuous f on [0, 1], define Bₙ(x) = E f(Sₙ/n) with Sₙ ~ Binomial(n, x), a polynomial of degree n in x. Splitting the expectation according to whether |Sₙ/n − x| < δ, uniform continuity of f and Chebyshev's bound x(1 − x)/(nδ²) ≤ 1/(4nδ²) give sup_x |Bₙ(x) − f(x)| → 0.

The strong law

Theorem 8.2 (Kolmogorov's strong law, 1933). If X₁, X₂, … are i.i.d., then Sₙ/n converges almost surely to a finite limit if and only if E|X₁| < ∞, and in that case the limit is E X₁.

We prove the direct half under an extra moment assumption, where the argument is transparent.

Theorem 8.3. If X₁, X₂, … are i.i.d. with E X₁⁴ < ∞, then Sₙ/n → E X₁ almost surely.

Proof. Replacing Xᵢ by Xᵢ − μ, assume E Xᵢ = 0. Expand Sₙ⁴ = ∑ XᵢXⱼXₖXₗ. Any term containing an index exactly once has zero expectation by independence. The surviving terms are Xᵢ⁴ (n of them) and Xᵢ²Xⱼ² with i ≠ j, which arise in C(4, 2) = 6 orderings for each of the C(n, 2) unordered pairs. Hence

        E Sₙ⁴ = n E X₁⁴ + 3n(n − 1)(E X₁²)² ≤ K n²

for a constant K. By Markov's inequality applied to Sₙ⁴, P(|Sₙ/n| > ε) ≤ K n²/(ε⁴ n⁴) = K/(ε⁴ n²), which is summable. The first Borel–Cantelli lemma shows that almost surely |Sₙ/n| ≤ ε for all large n. Applying this with ε = 1/k for k = 1, 2, … and intersecting countably many events of probability 1 gives Sₙ/n → 0 a.s. ∎

The general proof (Etemadi's 1981 argument is the shortest) uses truncation, a Chebyshev bound along a geometric subsequence nₖ = ⌊αᵏ⌋, and monotonicity for nonnegative summands to fill in the gaps between the nₖ. The necessity of E|X₁| < ∞ follows from the second Borel–Cantelli lemma: if E|X₁| = ∞ then ∑ P(|Xₙ| > n) = ∞, so |Xₙ| > n infinitely often, and Sₙ/n cannot converge. The Cauchy distribution, whose sample means are again standard Cauchy (Lesson 5), illustrates the failure vividly.

Tail events and the zero–one law

Why is the limit in the strong law a constant? Let 𝓣 = ⋂ₙ σ(Xₙ, Xₙ₊₁, …) be the tail σ-algebra. Events such as {Sₙ/n converges} or {lim sup Sₙ/n ≤ 3} belong to 𝓣, because changing finitely many Xᵢ does not affect them.

Theorem 8.4 (Kolmogorov's zero–one law). If X₁, X₂, … are independent, every event in 𝓣 has probability 0 or 1.

Proof. For each n, σ(X₁, …, Xₙ) is independent of σ(Xₙ₊₁, …) and hence of 𝓣. So 𝓣 is independent of ⋃ₙ σ(X₁, …, Xₙ), which is a π-system generating σ(X₁, X₂, …) ⊇ 𝓣. By Lemma 2.6, 𝓣 is independent of itself, so P(A) = P(A)² for every A ∈ 𝓣. ∎

A tail-measurable random variable is therefore almost surely constant. Hewitt and Savage proved the stronger statement that events invariant under finite permutations of an i.i.d. sequence also have probability 0 or 1.

Applications

Monte Carlo integration rests on the strong law: if U₁, U₂, … are i.i.d. uniform on [0, 1]ᵈ and f is integrable, then (1/n) ∑ f(Uᵢ) → ∫ f almost surely, and, when f is square-integrable, with error of order σ/√n regardless of dimension. Borel's normal number theorem (1909) follows by applying the strong law to binary digits: almost every x ∈ [0, 1] has asymptotic frequency 1/2 of the digit 1 in its binary expansion (and indeed is normal in every base). The Glivenko–Cantelli theorem upgrades the strong law for the empirical distribution function Fₙ(x) = (1/n) ∑ 1{Xᵢ ≤ x} to uniform convergence: sup_x |Fₙ(x) − F(x)| → 0 almost surely. It is often called the fundamental theorem of statistics.

✏️ Your Turn

(a) Verify the identity E S₂⁴ = 2E X₁⁴ + 6(E X₁²)² for i.i.d. mean-zero X₁, X₂ by direct expansion.
(b) Let X₁, X₂, … be i.i.d. Exponential(1). To what does (X₁² + ⋯ + Xₙ²)/n converge almost surely?
(c) Using Chebyshev, how many fair-coin tosses guarantee that the observed proportion of heads lies within 0.01 of 1/2 with probability at least 0.95?

Answers: (a) (X₁ + X₂)⁴ = X₁⁴ + 4X₁³X₂ + 6X₁²X₂² + 4X₁X₂³ + X₂⁴; the odd cross terms have mean zero, leaving 2E X₁⁴ + 6(E X₁²)², which agrees with n E X₁⁴ + 3n(n − 1)(E X₁²)² at n = 2. (b) The Xᵢ² are i.i.d. and integrable with mean E X₁² = Var X₁ + (E X₁)² = 2, so the limit is 2. (c) We need (1/4)/(n · 0.0001) ≤ 0.05, that is n ≥ 50,000. (The CLT shows about 9,604 tosses actually suffice.)

─────────────────────────────────
Lesson 9: The Central Limit Theorem
─────────────────────────────────

📌 Key idea of this section:

        X₁, X₂, … i.i.d., E X₁ = μ, Var X₁ = σ² ∈ (0, ∞):   (Sₙ − nμ)/(σ√n)  ⇒  N(0, 1),
        i.e.  P((Sₙ − nμ)/(σ√n) ≤ x) → Φ(x) = (2π)^{−1/2} ∫_{−∞}^{x} e^{−u²/2} du  for every x.

History

De Moivre (1733) found the normal approximation to Binomial(n, 1/2) by Stirling-type asymptotics, and Laplace (1812) extended it to Binomial(n, p). Lyapunov (1901) gave the first rigorous proof for general sums under a third-moment condition, Lindeberg (1922) found the sharp sufficient condition, and Feller and Lévy (1935) showed it is also necessary under a negligibility assumption. Lévy's continuity theorem made characteristic functions the standard tool.

The continuity theorem

Theorem 9.1 (Lévy continuity theorem). Let Xₙ have characteristic functions φₙ. (i) If Xₙ ⇒ X, then φₙ(t) → φ_X(t) for every t. (ii) If φₙ(t) → φ(t) for every t and φ is continuous at 0, then φ is the characteristic function of some X and Xₙ ⇒ X.

Part (i) is immediate from the portmanteau theorem, since cos(tx) and sin(tx) are bounded and continuous. For (ii), the key estimate is

        P(|Xₙ| > 2/u) ≤ (1/u) ∫_{−u}^{u} (1 − φₙ(t)) dt

valid for every u > 0. Continuity of φ at 0 and dominated convergence make the right side small uniformly in large n for small u, so the sequence is tight. By Prokhorov's theorem every subsequence has a further subsequence converging in distribution; by part (i) each such limit has characteristic function φ, and by uniqueness (Theorem 5.2) all the limits are the same law. A sequence every subsequence of which has a further subsequence converging to the same limit converges itself. ∎

Proof of the central limit theorem

Lemma 9.2. For real x and n = 0, 1, 2, …,

        | e^{ix} − ∑_{k=0}^{n} (ix)ᵏ/k! | ≤ min( |x|ⁿ⁺¹/(n + 1)!,  2|x|ⁿ/n! )

Proof. Integration by parts gives e^{ix} − ∑_{k≤n} (ix)ᵏ/k! = (iⁿ⁺¹/n!) ∫₀ˣ (x − s)ⁿ e^{is} ds; bounding |e^{is}| ≤ 1 gives the first term. Writing the remainder of order n as the remainder of order n − 1 minus the term (ix)ⁿ/n! and using the first bound at order n − 1 gives the second. ∎

Theorem 9.3 (Lindeberg–Lévy CLT). Let X₁, X₂, … be i.i.d. with mean μ and finite variance σ² > 0. Then (Sₙ − nμ)/(σ√n) ⇒ N(0, 1).

Proof. Standardising, assume μ = 0 and σ = 1, and let φ be the characteristic function of X₁. By Lemma 9.2 with n = 2,

        | φ(t) − (1 − t²/2) | ≤ E min(|tX₁|³/6, |tX₁|²)

and the right side is o(t²) as t → 0: divide by t² and apply dominated convergence, since min(|t||X₁|³/6, X₁²) → 0 and is dominated by X₁², which is integrable. The characteristic function of Sₙ/√n is φ(t/√n)ⁿ, and for fixed t,

        φ(t/√n) = 1 − t²/(2n) + o(1/n)

For complex numbers of modulus at most 1, |∏ zᵢ − ∏ wᵢ| ≤ ∑ |zᵢ − wᵢ|. With z = φ(t/√n) and w = 1 − t²/(2n) (which has modulus at most 1 once n ≥ t²/2), this gives |φ(t/√n)ⁿ − (1 − t²/(2n))ⁿ| ≤ n · o(1/n) → 0. Since (1 − t²/(2n))ⁿ → e^{−t²/2}, the characteristic functions converge to that of N(0, 1), and Lévy's theorem completes the proof. ∎

Beyond identical distribution

Theorem 9.4 (Lindeberg–Feller). For each n let Xₙ,₁, …, Xₙ,ₙ be independent with mean zero and ∑ₖ E Xₙ,ₖ² = 1. If for every ε > 0

        ∑ₖ E[ Xₙ,ₖ² 1{|Xₙ,ₖ| > ε} ] → 0       (Lindeberg's condition)

then ∑ₖ Xₙ,ₖ ⇒ N(0, 1). Conversely, if the sum converges to N(0, 1) and max_k E Xₙ,ₖ² → 0, then Lindeberg's condition holds.

Lyapunov's condition ∑ₖ E|Xₙ,ₖ|^{2+δ} → 0 for some δ > 0 implies Lindeberg's. For example, if Xₖ are independent Bernoulli(pₖ) with ∑ pₖ(1 − pₖ) = ∞, the standardised number of successes is asymptotically normal.

Rate of convergence

Theorem 9.5 (Berry–Esseen). If in addition ρ = E|X₁ − μ|³ < ∞, then

        sup_x | P((Sₙ − nμ)/(σ√n) ≤ x) − Φ(x) | ≤ C ρ / (σ³ √n)

with an absolute constant C; the best known value is C < 0.4748 (Shevtsova, 2011), and C cannot be smaller than about 0.4097 (Esseen, 1956). The rate n^{−1/2} cannot be improved for lattice laws such as the Bernoulli.

Worked example 9.6 (normal approximation with continuity correction). Let S ~ Binomial(100, 1/2), so μ = 50 and σ = 5. Treating the integer-valued S as continuous, P(S ≥ 60) = P(S > 59.5) ≈ 1 − Φ((59.5 − 50)/5) = 1 − Φ(1.9) ≈ 0.0287. The exact probability is 0.0284. Without the continuity correction, 1 − Φ(2) ≈ 0.0228 is noticeably worse.

The delta method and the multivariate CLT

If √n(Tₙ − θ) ⇒ N(0, τ²) and g is differentiable at θ, then √n(g(Tₙ) − g(θ)) ⇒ N(0, g′(θ)² τ²); the proof is a first-order Taylor expansion and Slutsky's theorem. In ℝᵈ, i.i.d. random vectors with mean μ and covariance matrix Σ satisfy (Sₙ − nμ)/√n ⇒ N(0, Σ), which reduces to the one-dimensional theorem by the Cramér–Wold device: a sequence of random vectors converges in distribution if and only if every fixed linear combination ⟨a, ·⟩ does.

✏️ Your Turn

(a) A fair die is rolled 420 times. Approximate the probability that the total exceeds 1500. (Use Φ(0.86) ≈ 0.805.)
(b) Show that the Lindeberg condition holds for Xₙ,ₖ = Xₖ/(σ√n) with i.i.d. Xₖ of finite variance σ².
(c) If X̄ₙ is the mean of n i.i.d. Exponential(1) variables, find the limiting law of √n(log X̄ₙ).

Answers: (a) One roll has mean 3.5 and variance 35/12, so the total has mean 1470 and variance 1225, standard deviation 35. P(total > 1500) ≈ 1 − Φ(30/35) ≈ 1 − Φ(0.86) ≈ 0.195; with a continuity correction, 1 − Φ(30.5/35) = 1 − Φ(0.871) ≈ 0.192. (b) The sum equals (1/σ²) E[X₁² 1{|X₁| > εσ√n}], which tends to 0 by dominated convergence. (c) √n(X̄ₙ − 1) ⇒ N(0, 1) and g = log has g′(1) = 1, so √n log X̄ₙ ⇒ N(0, 1).

─────────────────────────────────
Lesson 10: Conditional Expectation and Martingales
─────────────────────────────────

📌 Key idea of this section:

        E[X | 𝓖] is the a.s. unique 𝓖-measurable Y with E[Y 1_G] = E[X 1_G] for all G ∈ 𝓖;
        a martingale satisfies E[Mₙ₊₁ | 𝓕ₙ] = Mₙ, and under suitable conditions E M_T = E M₀.

Conditioning on a σ-algebra

Elementary conditioning on an event of positive probability does not cover the most important cases, such as conditioning on the value of a continuous random variable, where every individual value has probability zero. Kolmogorov's solution was to condition on a σ-algebra.

Definition 10.1. Let X ∈ L¹(Ω, 𝓕, P) and let 𝓖 ⊆ 𝓕 be a sub-σ-algebra. A conditional expectation of X given 𝓖 is a random variable Y such that (i) Y is 𝓖-measurable and integrable, and (ii) E[Y 1_G] = E[X 1_G] for every G ∈ 𝓖. We write Y = E[X | 𝓖], and E[X | Z] = E[X | σ(Z)].

Theorem 10.2. Conditional expectation exists and is unique up to almost sure equality.

Proof. Uniqueness: if Y and Y′ both qualify, then G = {Y > Y′} ∈ 𝓖 and E[(Y − Y′) 1_G] = 0, forcing P(G) = 0; by symmetry Y = Y′ a.s. Existence for X ∈ L²: the space L²(𝓖) is a closed subspace of the Hilbert space L²(𝓕), and the orthogonal projection Y of X onto it satisfies E[(X − Y)W] = 0 for all W ∈ L²(𝓖), in particular for W = 1_G. Existence for X ≥ 0 in L¹ follows by approximating with min(X, n) and monotone convergence, and general X by X = X⁺ − X⁻. (Alternatively, Y is the Radon–Nikodym derivative of the measure G ↦ E[X 1_G] with respect to P restricted to 𝓖.) ∎

The projection picture is worth keeping: for X ∈ L², E[X | 𝓖] is the best mean-square predictor of X among 𝓖-measurable variables. When 𝓖 is generated by a finite partition {B₁, …, Bₙ} with P(Bᵢ) > 0, the definition gives the elementary formula E[X | 𝓖] = ∑ᵢ (E[X 1_{Bᵢ}]/P(Bᵢ)) 1_{Bᵢ}. When (X, Z) has joint density f, E[g(X) | Z] = h(Z) with h(z) = ∫ g(x) f(x, z) dx / ∫ f(x, z) dx wherever the denominator is positive.

The essential properties, each provable directly from the definition, are:

        linearity and monotonicity;   E[E[X | 𝓖]] = E X
        taking out what is known:      E[ZX | 𝓖] = Z E[X | 𝓖] for bounded 𝓖-measurable Z
        tower property:                E[E[X | 𝓗] | 𝓖] = E[X | 𝓖] when 𝓖 ⊆ 𝓗
        independence:                  E[X | 𝓖] = E X when σ(X) and 𝓖 are independent
        conditional Jensen:            φ(E[X | 𝓖]) ≤ E[φ(X) | 𝓖] for convex φ

together with conditional versions of monotone and dominated convergence.

Martingales

Definition 10.3. A filtration is an increasing sequence of σ-algebras 𝓕₀ ⊆ 𝓕₁ ⊆ ⋯ ⊆ 𝓕, representing information available at time n. An adapted integrable sequence (Mₙ) is a martingale if E[Mₙ₊₁ | 𝓕ₙ] = Mₙ for all n, a supermartingale if E[Mₙ₊₁ | 𝓕ₙ] ≤ Mₙ, and a submartingale if E[Mₙ₊₁ | 𝓕ₙ] ≥ Mₙ.

A martingale models the fortune of a gambler in a fair game. Standard examples, with 𝓕ₙ = σ(X₁, …, Xₙ) for independent Xᵢ:

        partial sums  Sₙ = X₁ + ⋯ + Xₙ  with E Xᵢ = 0
        Sₙ² − nσ²  when the Xᵢ are i.i.d. with mean 0 and variance σ²
        products  ∏ᵢ Xᵢ  with Xᵢ ≥ 0 and E Xᵢ = 1;  in particular  exp(θSₙ)/M(θ)ⁿ
        Doob martingales  Mₙ = E[Z | 𝓕ₙ]  for any integrable Z
        likelihood ratios  ∏ᵢ g(Xᵢ)/f(Xᵢ)  when the Xᵢ have density f and g = 0 wherever f = 0

By the conditional Jensen inequality, a convex function of a martingale is a submartingale (when integrable); for instance |Mₙ| and Mₙ² are submartingales.

Stopping times and optional stopping

Definition 10.4. A random variable T with values in {0, 1, 2, …, ∞} is a stopping time if {T = n} ∈ 𝓕ₙ for every n.

A stopping time is a rule that decides when to stop using only past and present information. The first time a random walk hits a level is a stopping time; the last time it does so is not. The fundamental fact is that one cannot beat a fair game by choosing when to stop, provided the stopping rule is not too wild.

Theorem 10.5 (optional stopping). Let (Mₙ) be a martingale and T a stopping time. Then E M_T = E M₀ in each of the following cases: (i) T ≤ N almost surely for a constant N; (ii) T < ∞ a.s. and |M_{n∧T}| ≤ K for all n, for a constant K; (iii) E T < ∞ and |Mₙ₊₁ − Mₙ| ≤ K for all n.

Proof. (i) Write M_T = M₀ + ∑_{k=1}^{N} (Mₖ − Mₖ₋₁) 1{T ≥ k}. The event {T ≥ k} = {T ≤ k − 1}ᶜ belongs to 𝓕ₖ₋₁, so E[(Mₖ − Mₖ₋₁) 1{T ≥ k}] = E[1{T ≥ k} E[Mₖ − Mₖ₋₁ | 𝓕ₖ₋₁]] = 0. (ii) Apply (i) to the bounded stopping time T ∧ n, then let n → ∞ using dominated convergence, since M_{T∧n} → M_T a.s. and is bounded by K. (iii) Here |M_{T∧n} − M₀| ≤ K T, which is integrable, so dominated convergence again applies. ∎

The conditions matter. Let Sₙ be a simple symmetric random walk started at 0 and T the first time it reaches 1. Then T < ∞ a.s. (by recurrence, Lesson 11), S_T = 1, and E S_T = 1 ≠ 0 = E S₀. This is the "doubling strategy" paradox: guaranteed profit requires unbounded credit and has E T = ∞.

Worked example 10.6 (gambler's ruin). A gambler starts with k units and bets one unit at a time, winning with probability p and losing with probability q = 1 − p, until reaching 0 or N. Let T be the stopping time and Sₙ the fortune. In the fair case p = 1/2, Sₙ is a bounded martingale up to T, so k = E S_T = N · P(reach N), giving P(reach N) = k/N. Also Sₙ² − n is a martingale with bounded increments up to T, and E T < ∞ (the walk escapes any interval geometrically fast), so E S_T² = k² + E T, which gives E T = Nk − k² = k(N − k). In the unfair case, (q/p)^{Sₙ} is a martingale (check: p(q/p) + q(p/q) = q + p = 1), so

        P(reach N) = (1 − (q/p)ᵏ) / (1 − (q/p)ᴺ)

With p = 0.4, k = 5 and N = 10, this is (1 − 1.5⁵)/(1 − 1.5¹⁰) = 1/(1 + 1.5⁵) = 32/275 ≈ 0.116, compared with 1/2 in a fair game. A slightly unfavourable game is very likely to ruin a patient player.

Wald's identity is another special case: if X₁, X₂, … are i.i.d. integrable and T is a stopping time with E T < ∞, then E S_T = E T · E X₁. A direct proof writes S_T = ∑_{i≥1} Xᵢ 1{T ≥ i}; the event {T ≥ i} lies in 𝓕ᵢ₋₁ and is therefore independent of Xᵢ, so E[|Xᵢ| 1{T ≥ i}] = E|X₁| P(T ≥ i), and these sum to E|X₁| E T < ∞. Fubini's theorem then allows the expectation to be taken term by term, giving E S_T = E X₁ ∑ᵢ P(T ≥ i) = E X₁ · E T.

Convergence and inequalities

Theorem 10.7 (Doob's martingale convergence theorem). If (Mₙ) is a supermartingale with sup_n E Mₙ⁻ < ∞ (for example, a nonnegative supermartingale), then Mₙ converges almost surely to an integrable limit M_∞.

The proof counts upcrossings: the number Uₙ[a, b] of times the path crosses from below a to above b by time n satisfies (b − a) E Uₙ[a, b] ≤ E(Mₙ − a)⁻, so for rational a < b only finitely many upcrossings occur, which excludes oscillation. If the martingale is uniformly integrable, convergence also holds in L¹ and Mₙ = E[M_∞ | 𝓕ₙ]; if it is bounded in Lᵖ with p > 1, it converges in Lᵖ. Two supporting inequalities are Doob's maximal inequality for a nonnegative submartingale, λ P(max_{k≤n} Mₖ ≥ λ) ≤ E Mₙ, and the Azuma–Hoeffding inequality, P(Mₙ − M₀ ≥ t) ≤ exp(−t²/(2∑ cₖ²)) when |Mₖ − Mₖ₋₁| ≤ cₖ. The latter is the engine of the concentration-of-measure method in combinatorics and computer science.

Pólya's urn shows a non-degenerate limit. An urn holds one red and one blue ball; repeatedly draw a ball and return it with another of the same colour. The fraction of red balls is a bounded martingale, so it converges almost surely; its limit turns out to be uniformly distributed on (0, 1).

✏️ Your Turn

(a) In a fair game starting at k = 3 with absorbing barriers 0 and 10, find the probability of reaching 10 and the expected duration.
(b) Let Sₙ be a simple symmetric random walk. Show that Sₙ³ − 3nSₙ is a martingale.
(c) Show that the likelihood-ratio product Lₙ = ∏_{i≤n} g(Xᵢ)/f(Xᵢ), with Xᵢ i.i.d. of density f and g another density such that f is positive wherever g is, satisfies E Lₙ = 1 for all n.

Answers: (a) P = 3/10 and E T = 3 × 7 = 21. (b) With Sₙ₊₁ = Sₙ + ξ, E[(Sₙ + ξ)³ | 𝓕ₙ] = Sₙ³ + 3Sₙ (because E ξ = E ξ³ = 0 and E ξ² = 1), and E[3(n + 1)(Sₙ + ξ) | 𝓕ₙ] = 3(n + 1)Sₙ; the difference is Sₙ³ + 3Sₙ − 3(n + 1)Sₙ = Sₙ³ − 3nSₙ. (c) Each factor has mean ∫_{f>0} (g/f) f dx = ∫_{f>0} g dx = 1 (because g vanishes where f does), and the factors are independent, so E Lₙ = 1 (indeed Lₙ is a martingale).

─────────────────────────────────
Lesson 11: Markov Chains
─────────────────────────────────

📌 Key idea of this section:

        P(Xₙ₊₁ = j | X₀, …, Xₙ) = p(Xₙ, j);   πP = π;   for an irreducible, aperiodic,
        positive recurrent chain,  Pⁿ(i, j) → π(j) = 1/E_j[T_j]  for all i, j.

Definitions

Let S be a finite or countable state space. A stochastic matrix P = (p(i, j)) has nonnegative entries and rows summing to 1. A sequence X₀, X₁, … is a Markov chain with transition matrix P if

        P(Xₙ₊₁ = j | X₀ = i₀, …, Xₙ₋₁ = iₙ₋₁, Xₙ = i) = p(i, j)

whenever the conditioning event has positive probability. The future depends on the past only through the present. Summing over intermediate states gives the Chapman–Kolmogorov equations Pᵐ⁺ⁿ = PᵐPⁿ, so the n-step transition probabilities are the entries of the matrix power Pⁿ, and if X₀ has law λ (a row vector) then Xₙ has law λPⁿ. The strong Markov property states that, at any stopping time T with X_T = i, the process (X_{T+n}) is again a Markov chain started from i, independent of the past before T.

Classification of states

State j is accessible from i if Pⁿ(i, j) > 0 for some n ≥ 0; i and j communicate if each is accessible from the other. Communication is an equivalence relation, and the chain is irreducible if there is only one class. The period of i is d(i) = gcd{n ≥ 1 : Pⁿ(i, i) > 0}; it is a class property, and the chain is aperiodic if d = 1 (for instance, if some p(i, i) > 0 in an irreducible chain).

Let Tᵢ = inf{n ≥ 1 : Xₙ = i} be the first return time. State i is recurrent if Pᵢ(Tᵢ < ∞) = 1 and transient otherwise. By the strong Markov property the number of visits Vᵢ to i is geometric when i is transient, and infinite a.s. when i is recurrent, so

        i is recurrent  ⇔  Eᵢ Vᵢ = ∑ₙ Pⁿ(i, i) = ∞

A recurrent state is positive recurrent if Eᵢ Tᵢ < ∞ and null recurrent otherwise. Recurrence and positive recurrence are class properties. In a finite irreducible chain every state is positive recurrent.

Theorem 11.1 (Pólya, 1921). The simple symmetric random walk on ℤᵈ is recurrent for d = 1 and d = 2 and transient for d ≥ 3.

Proof for d = 1 and a sketch for d ≥ 2. Returns occur only at even times, and P²ⁿ(0, 0) = C(2n, n) 2⁻²ⁿ ∼ 1/√(πn) by Stirling's formula. The series ∑ n^{−1/2} diverges, so the walk is recurrent. In dimension d the return probability at time 2n is of order n^{−d/2} (for d = 2 it is exactly [C(2n, n) 2⁻²ⁿ]², because the walk rotated by 45° splits into two independent one-dimensional walks), and ∑ n^{−d/2} converges precisely when d ≥ 3. ∎

In three dimensions the probability of ever returning to the origin is approximately 0.3405. Kakutani's quip summarises the theorem: a drunk man will find his way home, but a drunk bird may get lost forever.

Stationary distributions

A probability vector π is stationary if πP = π: if X₀ has law π, so does every Xₙ.

Theorem 11.2. An irreducible chain has a stationary distribution if and only if it is positive recurrent. The stationary distribution is then unique and given by π(j) = 1/E_j T_j.

The construction behind the theorem: fix a state k and let μ(j) be the expected number of visits to j during an excursion from k, that is, before Tₖ. Then μ is invariant (μP = μ), μ(k) = 1 and ∑ⱼ μ(j) = Eₖ Tₖ; normalising gives π(k) = 1/Eₖ Tₖ.

A useful sufficient condition is detailed balance: if π(i) p(i, j) = π(j) p(j, i) for all i, j, then summing over i gives πP = π. Such chains are reversible, since in equilibrium the process has the same law run forwards and backwards. For a random walk on a finite connected graph, moving to a uniformly random neighbour, π(v) = deg(v)/(2|E|) satisfies detailed balance.

Worked example 11.3. Consider the chain on {1, 2, 3} with

        P = [ 1/2  1/2   0  ]
            [ 1/4  1/2  1/4 ]
            [  0   1/2  1/2 ]

Detailed balance gives π(1) · 1/2 = π(2) · 1/4 and π(2) · 1/4 = π(3) · 1/2, so π(2) = 2π(1) and π(3) = π(1). Normalising, π = (1/4, 1/2, 1/4). By Theorem 11.2 the mean return time to state 2 is 2 steps, and to state 1 it is 4 steps.

Convergence to equilibrium

Theorem 11.4 (convergence theorem). If the chain is irreducible, aperiodic and has stationary distribution π, then for every initial state i, ∑ⱼ |Pⁿ(i, j) − π(j)| → 0.

Proof by coupling (Doeblin, 1938). Run the chain X from i and an independent copy Y from π. Aperiodicity and irreducibility imply that the product chain (X, Y) is irreducible, and it has the stationary distribution π ⊗ π, so it is recurrent and the coupling time τ = inf{n : Xₙ = Yₙ} is finite a.s. After τ, let X follow Y; this does not change the law of X. Then for every set A of states, |P(Xₙ ∈ A) − π(A)| ≤ P(τ > n), which is the total variation bound ‖Pⁿ(i, ·) − π‖_TV ≤ P(τ > n) → 0. ∎

Aperiodicity is necessary: the chain on {1, 2} that always switches state has π = (1/2, 1/2) but Pⁿ(1, 1) alternates between 0 and 1. For a finite chain the rate is governed by the eigenvalues of P: if all eigenvalues other than 1 have modulus at most λ* < 1, the distance decays like (λ*)ⁿ up to a polynomial factor. For the two-state chain with p(1, 2) = a and p(2, 1) = b (0 < a + b < 2),

        π = ( b/(a + b),  a/(a + b) ),      Pⁿ(1, 1) = b/(a + b) + (a/(a + b)) (1 − a − b)ⁿ

The ergodic theorem completes the picture: for an irreducible positive recurrent chain and any bounded f, (1/n) ∑_{k<n} f(Xₖ) → ∑ⱼ π(j) f(j) almost surely, whatever the initial state. Time averages equal space averages. This is the basis of Markov chain Monte Carlo: to sample from a complicated π (for example a posterior distribution), the Metropolis–Hastings algorithm builds a reversible chain with stationary law π and averages along its path. The study of how long such chains take to mix, including the cutoff phenomenon discovered by Diaconis and Shahshahani (seven riffle shuffles suffice to mix a 52-card deck, in the sense of Bayer and Diaconis, 1992), is an active research area.

✏️ Your Turn

(a) For the two-state chain with a = 0.3 and b = 0.1, find π and P¹⁰(1, 1) to four decimal places.
(b) A random walk moves on the vertices of a star graph with one centre joined to 5 leaves. Find the stationary distribution and the mean return time to the centre. Is the chain aperiodic?
(c) Use Stirling's formula to estimate P²⁰⁰(0, 0) for the simple symmetric random walk on ℤ.

Answers: (a) π = (0.25, 0.75); P¹⁰(1, 1) = 0.25 + 0.75 · 0.6¹⁰ ≈ 0.25 + 0.75 · 0.0060466 ≈ 0.2545. (b) The centre has degree 5 and each leaf degree 1, with 2|E| = 10, so π(centre) = 1/2 and π(leaf) = 1/10; the mean return time to the centre is 2. The chain has period 2 (it alternates between the centre and the leaves), so it is not aperiodic and Pⁿ does not converge. (c) n = 100: 1/√(100π) ≈ 0.0564 (the exact value C(200, 100)/2²⁰⁰ ≈ 0.0563).

─────────────────────────────────
Lesson 12: The Poisson Process
─────────────────────────────────

📌 Key idea of this section:

        N(t) counts arrivals; independent stationary increments with N(t) − N(s) ~ Poisson(λ(t − s))
        ⇔ i.i.d. Exponential(λ) inter-arrival times;  given N(t) = n, the arrival times are i.i.d. uniform order statistics.

Three equivalent definitions

A counting process N = (N(t))_{t≥0} has N(0) = 0, integer values, and non-decreasing right-continuous paths that increase by jumps of size 1.

Theorem 12.1. For a counting process and λ > 0, the following are equivalent.

(i) N has independent increments, and N(t) − N(s) ~ Poisson(λ(t − s)) for s < t.
(ii) N has independent and stationary increments, P(N(h) = 1) = λh + o(h) and P(N(h) ≥ 2) = o(h) as h ↓ 0.
(iii) The inter-arrival times E₁, E₂, … between successive jumps are i.i.d. Exponential(λ).

Such an N is a Poisson process of rate λ.

Proof of (ii) ⇒ (i). Let pₙ(t) = P(N(t) = n). Independent stationary increments and the infinitesimal hypotheses give p₀(t + h) = p₀(t)(1 − λh + o(h)) and pₙ(t + h) = pₙ(t)(1 − λh) + pₙ₋₁(t)λh + o(h). Hence p₀′ = −λp₀ and pₙ′ = −λpₙ + λpₙ₋₁, with p₀(0) = 1. Solving successively (multiply by e^{λt}) gives pₙ(t) = e^{−λt}(λt)ⁿ/n!. For (i) ⇒ (iii), P(E₁ > t) = P(N(t) = 0) = e^{−λt}, and the strong Markov property of the process at the arrival times shows that the later gaps are independent copies. For (iii) ⇒ (i), the arrival time Sₙ = E₁ + ⋯ + Eₙ has the Gamma(n, λ) density λⁿ tⁿ⁻¹ e^{−λt}/(n − 1)!, and P(N(t) = n) = P(Sₙ ≤ t < Sₙ₊₁) can be computed by integrating against the tail of Eₙ₊₁. ∎

Memorylessness

The exponential law is memoryless: P(E > s + t | E > s) = e^{−λ(s+t)}/e^{−λs} = P(E > t). Among laws on (0, ∞) it is the only one. Indeed g(t) = P(E > t) then satisfies g(s + t) = g(s)g(t) with g monotone, whose only solutions with g(0) = 1 and g → 0 are g(t) = e^{−λt}. This explains the inspection paradox: if buses arrive as a Poisson process of rate λ, a passenger arriving at a fixed time waits on average 1/λ, and the gap containing the arrival time has mean length nearly 2/λ for large times, twice the typical gap, because long gaps are more likely to be sampled.

Conditional uniformity

Theorem 12.2. Given N(t) = n, the arrival times (S₁, …, Sₙ) have the law of the order statistics of n i.i.d. Uniform(0, t) variables.

Proof. For 0 < s₁ < ⋯ < sₙ < t, the joint density of (S₁, …, Sₙ, and no arrival in (sₙ, t]) is λe^{−λs₁} · λe^{−λ(s₂−s₁)} ⋯ λe^{−λ(sₙ−sₙ₋₁)} · e^{−λ(t−sₙ)} = λⁿ e^{−λt}. Dividing by P(N(t) = n) = e^{−λt}(λt)ⁿ/n! gives the constant density n!/tⁿ on the simplex, which is the order-statistic density. ∎

Superposition, thinning and marking

If N₁ and N₂ are independent Poisson processes of rates λ₁ and λ₂, then N₁ + N₂ is a Poisson process of rate λ₁ + λ₂, and each arrival of the sum comes from N₁ with probability λ₁/(λ₁ + λ₂), independently. Conversely, if each arrival of a rate-λ process is independently kept with probability p, the kept and discarded arrivals form independent Poisson processes of rates λp and λ(1 − p). The independence in thinning is surprising and important: knowing how many arrivals were discarded tells us nothing about how many were kept. Both facts follow from the identity

        P(N₁ = j, N₂ = k) = e^{−λt}(λt)^{j+k}/(j + k)! · C(j + k, j) pʲ(1 − p)ᵏ = [e^{−λpt}(λpt)ʲ/j!] · [e^{−λ(1−p)t}(λ(1 − p)t)ᵏ/k!]

If each arrival carries an independent mark Yᵢ, the compound Poisson process X(t) = ∑_{i≤N(t)} Yᵢ satisfies E X(t) = λt E Y and Var X(t) = λt E Y², by conditioning on N(t). Compound Poisson processes model total insurance claims, and the Cramér–Lundberg theory of ruin is built on them.

The law of rare events

Theorem 12.3 (Poisson limit; Le Cam's inequality). Let Sₙ be a sum of independent Bernoulli(pᵢ) variables, i = 1, …, n, and let λ = ∑ pᵢ. Then

        ∑_{k≥0} | P(Sₙ = k) − e^{−λ}λᵏ/k! | ≤ 2 ∑ᵢ pᵢ²

In particular, Binomial(n, λ/n) ⇒ Poisson(λ) as n → ∞, with total variation error O(1/n). The proof couples each Bernoulli(pᵢ) with a Poisson(pᵢ) variable so that they differ with probability at most pᵢ², and uses the fact that independent Poissons add. Counts of rare independent events, such as decays of radioactive atoms, misprints on a page, or the classical Prussian cavalry horse-kick data analysed by Bortkiewicz (1898), are therefore approximately Poisson.

Generalisations

A non-homogeneous Poisson process with intensity λ(t) has N(t) − N(s) ~ Poisson(∫ₛᵗ λ(u) du) with independent increments; it is obtained from a homogeneous one by a deterministic time change. More generally, a Poisson random measure on a space E with intensity measure μ assigns to disjoint sets independent Poisson counts with means μ(A). These are the building blocks of Lévy processes and of the theory of point processes, and together with Brownian motion and a linear drift they generate, through the Lévy–Itô decomposition, every stochastically continuous process with independent stationary increments (every Lévy process).

✏️ Your Turn

(a) Calls arrive as a Poisson process of rate 3 per hour. Find the probability of no calls in a 20-minute interval, and of exactly 4 calls in 2 hours.
(b) In the same process, given that exactly 5 calls arrived in the first hour, what is the expected time of the first call?
(c) Customers arrive at rate 10 per hour and each independently buys something with probability 0.3. Given that 4 customers who bought nothing arrived in an hour, what is the expected number of purchasing customers in that hour?

Answers: (a) N(1/3) ~ Poisson(1), so P(no calls) = e^{−1} ≈ 0.3679; N(2) ~ Poisson(6), so P(N(2) = 4) = e^{−6} 6⁴/4! = 54e^{−6} ≈ 0.1339. (b) The first of 5 i.i.d. Uniform(0, 1) order statistics has mean 1/6 hour, that is, 10 minutes. (c) By the independence of thinned processes, the number of purchasing customers is Poisson(3) regardless, so the expectation is 3.

═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

The problems are arranged in three groups. The Core problems check fluency with the definitions and standard computations of Lessons 1 to 12. The Advanced problems require combining several ideas or writing a short proof. The Challenge problems are of the kind found on graduate qualifying examinations; several of them contain classical results in disguise. Give exact answers where possible and decimals to three or four significant figures otherwise.

Core (Problems 1–20)

  1. A σ-algebra on Ω is generated by a partition of Ω into 5 nonempty sets. How many events does it contain?
  2. Let 𝓐 be the collection of subsets A ⊆ ℕ such that A or ℕ \ A is finite. Show that 𝓐 is an algebra but not a σ-algebra.
  3. Events satisfy P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. Find P(A ∩ B), P(A ∩ Bᶜ) and P(A | B). Are A and B independent?
  4. Three fair dice are rolled. Find the probability that the total is 10.
  5. Machines I, II and III produce 50%, 30% and 20% of a factory's output, with defect rates 1%, 2% and 3%. Find the probability that a random item is defective, and the probability that a defective item came from machine III.
  6. Find the probability that a uniformly random permutation of {1, 2, 3, 4, 5} has no fixed point.
  7. Let X ~ Poisson(2). Compute P(X ≥ 2).
  8. A random variable has density f(x) = cx² on (0, 2). Find c, E X and Var X.
  9. Let Z ~ N(0, 1) and Y = e^Z. Find the density of Y and E Y.
  10. Let X₁ ~ Exponential(λ₁) and X₂ ~ Exponential(λ₂) be independent. Find the law of min(X₁, X₂) and P(X₁ < X₂).
  11. Compute the probability generating function of X ~ Geometric(p) on {1, 2, …} and use it to find E X and Var X.
  12. A fair die is rolled 6 times. Find the expected number of distinct faces that appear.
  13. A nonnegative random variable has E X = 2. Bound P(X ≥ 8). If also Var X = 1, give a better bound.
  14. Use Jensen's inequality to show E log X ≤ log E X for positive integrable X, and check it when X is uniform on {1, 4}.
  15. Show that Cov(X + Y, X − Y) = Var X − Var Y for X, Y ∈ L².
  16. Find the characteristic function of Binomial(n, p).
  17. Using the MGF of the standard normal, compute E Z⁴.
  18. Find the stationary distribution of the two-state chain with p(1, 2) = 0.2 and p(2, 1) = 0.3.
  19. For a Poisson process of rate 2, compute P(N(3) = 5 | N(1) = 2).
  20. A fair random walk starts at 4 and is absorbed at 0 or 12. Find the probability of absorption at 12 and the expected absorption time.

Advanced (Problems 21–45)

  21. Show that continuity from above can fail for a measure of infinite total mass, by an example on ℕ with counting measure. Why does this not contradict Theorem 1.3?
  22. Prove that if X ≥ 0 and E X = 0, then X = 0 almost surely.
  23. Let X be a random variable that is independent of itself. Prove that X is almost surely constant.
  24. Let U ~ Uniform(0, 1). Find the law of Y = −2 log U and its mean.
  25. Let X, Y be i.i.d. Exponential(1). Show that X/(X + Y) is Uniform(0, 1) and independent of X + Y.
  26. Let X, Y be i.i.d. N(0, 1). Show that X/Y has the standard Cauchy law.
  27. Compute E|Z| for Z ~ N(0, 1).
  28. Compute E max(X, Y) for i.i.d. standard normals X, Y.
  29. Compute the variance of the coupon collector time for n = 6 coupon types.
  30. A branching process has Poisson(2) offspring. Find its extinction probability numerically to four decimal places.
  31. Use the Chernoff method to prove P(X ≥ a) ≤ e^{−λ}(eλ/a)^a for X ~ Poisson(λ) and a > λ, and evaluate the bound for λ = 10, a = 20.
  32. Prove the Paley–Zygmund inequality P(X > θ E X) ≥ (1 − θ)² (E X)²/E X² for X ≥ 0 in L² and θ ∈ [0, 1]. Evaluate it when E X = 1, E X² = 4 and θ = 1/2.
  33. Show that d(X, Y) = E min(|X − Y|, 1) metrises convergence in probability.
  34. Let Xₙ ~ N(0, 1/n). Show that Xₙ → 0 in probability. Does Xₙ → 0 almost surely, whatever the joint law of the sequence?
  35. Let U₁, U₂, … be i.i.d. Uniform(0, 1). Find the almost sure limit of (U₁U₂⋯Uₙ)^{1/n}.
  36. Let Mₙ be the maximum of n i.i.d. Exponential(1) variables. Show that Mₙ − log n converges in distribution and identify the limit.
  37. Let mₙ be the minimum of n i.i.d. Uniform(0, 1) variables. Find the limit in distribution of n mₙ.
  38. Let X ~ Poisson(100). Use the normal approximation with continuity correction to estimate P(X ≤ 90).
  39. How large a sample is needed so that a 95% normal-approximation confidence interval for an unknown proportion has half-width at most 0.03, whatever the true proportion?
  40. Let X̄ₙ be the mean of n i.i.d. Bernoulli(p) variables. Find the asymptotic variance of √n(X̄ₙ(1 − X̄ₙ) − p(1 − p)), and evaluate it at p = 0.3.
  41. Let X, Y be i.i.d. integrable. Show that E[X | X + Y] = (X + Y)/2.
  42. Let X ~ Uniform(0, 1) and, given X, let Y ~ Uniform(0, X). Find E Y and Var Y.
  43. Let N ~ Poisson(4) and let X₁, X₂, … be i.i.d. Exponential with mean 2, independent of N. Find the mean and variance of S = X₁ + ⋯ + X_N.
  44. A gambler with 10 units bets one unit at a time at odds p = 0.45 of winning, until reaching 0 or 20. Find the probability of reaching 20.
  45. A random walk moves to a uniformly chosen neighbour on the 3 × 3 grid graph. Find the mean return time to a corner vertex and to the centre.

Challenge (Problems 46–60)

  46. Show that there is no probability measure on all subsets of ℕ giving every singleton the same probability. Is there a finitely additive one?
  47. Let Sₙ be the simple symmetric random walk on ℤ. Prove that lim sup Sₙ/√n = +∞ almost surely.
  48. Prove Kolmogorov's maximal inequality: for independent mean-zero Xᵢ ∈ L², P(max_{k≤n} |Sₖ| ≥ λ) ≤ Var Sₙ/λ².
  49. Prove that E|X| < ∞ if and only if ∑_{n≥1} P(|X| ≥ n) < ∞.
  50. Compute the characteristic function of the Laplace density ½e^{−|x|}, and use the inversion formula to deduce the characteristic function of the standard Cauchy law.
  51. Let U₁, U₂, … be i.i.d. Uniform(0, 1) and N = min{n : U₁ + ⋯ + Uₙ > 1}. Find E N.
  52. In an election candidate A receives 6 votes and candidate B receives 4, counted in uniformly random order. Find the probability that A is strictly ahead throughout the count.
  53. In Pólya's urn (start with one red and one blue ball; each drawn ball is returned with another of its colour), show that after n draws the number of red balls added is uniform on {0, 1, …, n}, and deduce the law of the limiting fraction.
  54. For the biased gambler's ruin with p = 0.4, starting at 5 with barriers 0 and 10, compute the expected duration using the martingale Sₙ − n(p − q).
  55. A fair coin is tossed repeatedly. Find the expected number of tosses until the pattern HH first appears, and until HT first appears.
  56. A walk on {0, 1, …, n} moves from 0 to 1 with probability 1 and from each other interior point to either neighbour with probability 1/2. Find the expected time to reach n from 0.
  57. Let X₁, X₂, … be i.i.d. with E|X₁| = ∞. Prove that lim sup |Sₙ|/n = ∞ almost surely.
  58. For a Poisson process of rate λ, compute E ∑_{i : Sᵢ ≤ t} Sᵢ, the expected sum of the arrival times in [0, t]. Evaluate it for λ = 3, t = 2.
  59. Compare Binomial(100, 0.02) with Poisson(2): give Le Cam's bound on ∑ₖ |P(X = k) − P(Y = k)| and compare the two probabilities of zero.
  60. Prove that e^{−n} ∑_{k=0}^{n} nᵏ/k! → 1/2 as n → ∞.

═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

Core

  1. The events are the unions of atoms, so there are 2⁵ = 32 of them.
  2. Complements swap "finite" and "cofinite", so 𝓐 is closed under complements. A union of two sets is finite if both are finite and cofinite if either is cofinite, so 𝓐 is closed under finite unions. But the even numbers form a countable union of finite sets {0}, {2}, {4}, … that is neither finite nor cofinite, so 𝓐 is not a σ-algebra.
  3. P(A ∩ B) = 0.5 + 0.4 − 0.7 = 0.2; P(A ∩ Bᶜ) = 0.5 − 0.2 = 0.3; P(A | B) = 0.2/0.4 = 0.5. Since P(A)P(B) = 0.2 = P(A ∩ B), they are independent.
  4. The number of ordered triples in {1, …, 6}³ with sum 10 is 27 (the coefficient of x¹⁰ in (x + ⋯ + x⁶)³), so the probability is 27/216 = 1/8.
  5. P(D) = 0.5(0.01) + 0.3(0.02) + 0.2(0.03) = 0.005 + 0.006 + 0.006 = 0.017. P(III | D) = 0.006/0.017 = 6/17 ≈ 0.353.
  6. By inclusion–exclusion, P = ∑_{k=0}^{5} (−1)ᵏ/k! = 1 − 1 + 1/2 − 1/6 + 1/24 − 1/120 = 44/120 = 11/30 ≈ 0.367.
  7. P(X ≥ 2) = 1 − e^{−2}(1 + 2) = 1 − 3e^{−2} ≈ 0.5940.
  8. ∫₀² cx² dx = 8c/3 = 1 gives c = 3/8. E X = (3/8)∫₀² x³ dx = (3/8)(4) = 3/2. E X² = (3/8)(32/5) = 12/5, so Var X = 12/5 − 9/4 = 3/20.
  9. With g(z) = eᶻ and g⁻¹(y) = log y, f_Y(y) = (2π)^{−1/2} y⁻¹ exp(−(log y)²/2) for y > 0 (the log-normal density). E Y = M_Z(1) = e^{1/2} ≈ 1.6487.
  10. P(min > t) = e^{−λ₁t} e^{−λ₂t}, so the minimum is Exponential(λ₁ + λ₂). P(X₁ < X₂) = ∫₀^∞ λ₁e^{−λ₁x} e^{−λ₂x} dx = λ₁/(λ₁ + λ₂).
  11. G(s) = ∑ (1 − p)ᵏ⁻¹ p sᵏ = ps/(1 − (1 − p)s) for |s| < 1/(1 − p). Then G′(1) = 1/p and G″(1) = 2(1 − p)/p², so Var X = 2(1 − p)/p² + 1/p − 1/p² = (1 − p)/p².
  12. Each face is missed with probability (5/6)⁶, so by indicators the expectation is 6(1 − (5/6)⁶) = 31031/7776 ≈ 3.991.
  13. Markov gives P(X ≥ 8) ≤ 2/8 = 1/4. Chebyshev gives P(X ≥ 8) ≤ P(|X − 2| ≥ 6) ≤ 1/36.
  14. −log is convex, so −log E X ≤ E(−log X). For X uniform on {1, 4}: E log X = (log 1 + log 4)/2 = log 2 ≈ 0.693, while log E X = log 2.5 ≈ 0.916.
  15. By bilinearity, Cov(X + Y, X − Y) = Cov(X, X) − Cov(X, Y) + Cov(Y, X) − Cov(Y, Y) = Var X − Var Y.
  16. A Bernoulli(p) variable has φ(t) = 1 − p + pe^{it}; a binomial is a sum of n independent ones, so φ(t) = (1 − p + pe^{it})ⁿ.
  17. M(t) = e^{t²/2} = ∑ t²ᵏ/(2ᵏ k!). The coefficient of t⁴ is 1/8, and E Z⁴ = 4! × 1/8 = 3.
  18. π = (b/(a + b), a/(a + b)) with a = 0.2, b = 0.3, so π = (0.6, 0.4).
  19. By independent stationary increments, this is P(N(2) = 3) = e^{−4} 4³/3! = (32/3)e^{−4} ≈ 0.1954.
  20. P(reach 12) = 4/12 = 1/3, and E T = 4 × 8 = 32.

Advanced

  21. Let Aₙ = {n, n + 1, …}. Then Aₙ ↓ ∅ but every Aₙ has infinite counting measure. Theorem 1.3 uses P(A₁) < ∞ when it subtracts (taking complements requires finite total mass), so there is no contradiction.
  22. For each k, Markov gives P(X ≥ 1/k) ≤ k E X = 0. Then P(X > 0) = P(⋃ₖ {X ≥ 1/k}) ≤ ∑ₖ 0 = 0.
  23. For every x, F(x) = P(X ≤ x, X ≤ x) = F(x)², so F takes only the values 0 and 1. A non-decreasing right-continuous function with limits 0 and 1 and only these values jumps once, at some c, so P(X = c) = 1.
  24. P(Y > y) = P(U < e^{−y/2}) = e^{−y/2}, so Y ~ Exponential(1/2) (the chi-squared law with 2 degrees of freedom), with mean 2.
  25. Put S = X + Y and R = X/S, so X = RS and Y = (1 − R)S with Jacobian determinant s. The joint density is e^{−s} · s on {0 < r < 1, s > 0}, which factorises as 1 × se^{−s}. Hence R is Uniform(0, 1), S is Gamma(2, 1), and they are independent.
  26. In polar coordinates the angle Θ of (X, Y) is uniform on (0, 2π), and X/Y = cot Θ. Since cot has period π and cot θ = tan(π/2 − θ), the variable cot Θ has the law of tan V with V uniform on (−π/2, π/2). Then P(tan V ≤ z) = 1/2 + (arctan z)/π, whose derivative is 1/(π(1 + z²)). So X/Y is standard Cauchy.
  27. E|Z| = 2∫₀^∞ z (2π)^{−1/2} e^{−z²/2} dz = 2(2π)^{−1/2} = √(2/π) ≈ 0.7979.
  28. max(X, Y) = (X + Y)/2 + |X − Y|/2. Here X − Y ~ N(0, 2), so E|X − Y| = √2 · √(2/π) = 2/√π. Thus E max = 1/√π ≈ 0.5642.
  29. T is a sum of independent geometrics with success probabilities j/n, j = 1, …, n, so Var T = ∑ⱼ (1 − j/n)/(j/n)² = n² ∑ 1/j² − n ∑ 1/j. For n = 6: 36 × 5369/3600 − 14.7 = 53.69 − 14.7 = 38.99, a standard deviation of about 6.24.
  30. G(s) = e^{2(s − 1)}, and q is the smallest root of q = e^{2(q − 1)}. Iterating qₖ₊₁ = e^{2(qₖ − 1)} from q₀ = 0 converges to q ≈ 0.2032.
  31. P(X ≥ a) ≤ e^{−ta} exp(λ(eᵗ − 1)) for t > 0; the exponent is minimised at eᵗ = a/λ, giving e^{−λ} e^{a} (λ/a)^a = e^{−λ}(eλ/a)^a. For λ = 10, a = 20 the bound is e^{−10}(e/2)²⁰ ≈ 0.0210.
  32. Write X = X 1{X ≤ θE X} + X 1{X > θE X}. The first part has mean at most θE X; by Cauchy–Schwarz the second has mean at most √(E X²) √(P(X > θE X)). So (1 − θ)E X ≤ √(E X² · P(X > θE X)); square and rearrange. With the given numbers the bound is (1/2)² × 1/4 = 1/16.
  33. If Xₙ → X in probability, then E min(|Xₙ − X|, 1) ≤ ε + P(|Xₙ − X| > ε) for ε < 1, which tends to ε; let ε ↓ 0. Conversely, for ε < 1, Markov gives P(|Xₙ − X| > ε) ≤ d(Xₙ, X)/ε. The triangle inequality follows from min(|a + b|, 1) ≤ min(|a|, 1) + min(|b|, 1).
  34. P(|Xₙ| > ε) = P(|Z| > ε√n) → 0 for Z ~ N(0, 1). In general marginal laws alone do not decide almost sure convergence, but here they do: the Gaussian tail bound P(|Z| > x) ≤ 2e^{−x²/2} gives ∑ₙ P(|Xₙ| > ε) ≤ ∑ₙ 2e^{−nε²/2} < ∞, and the first Borel–Cantelli lemma needs no independence. So Xₙ → 0 almost surely, whatever the joint law.
  35. log of the product root is (1/n) ∑ log Uᵢ, and E log U = ∫₀¹ log u du = −1. By the strong law the limit is e^{−1} ≈ 0.3679.
  36. P(Mₙ − log n ≤ x) = (1 − e^{−x}/n)ⁿ → exp(−e^{−x}) for every real x: the Gumbel law.
  37. P(n mₙ > x) = (1 − x/n)ⁿ → e^{−x} for x ≥ 0, so n mₙ ⇒ Exponential(1).
  38. X has mean 100 and standard deviation 10, so P(X ≤ 90) ≈ Φ((90.5 − 100)/10) = Φ(−0.95) ≈ 0.171. The exact value is about 0.1714.
  39. The half-width is 1.96√(p(1 − p)/n) ≤ 1.96/(2√n). Requiring this to be at most 0.03 gives n ≥ (1.96/0.06)² ≈ 1067.1, so n = 1068.
  40. By the CLT √n(X̄ₙ − p) ⇒ N(0, p(1 − p)), and g(x) = x(1 − x) has g′(p) = 1 − 2p. The delta method gives variance (1 − 2p)² p(1 − p); at p = 0.3 this is 0.16 × 0.21 = 0.0336.
  41. By symmetry (X, X + Y) and (Y, X + Y) have the same joint law, so E[X | X + Y] = E[Y | X + Y]. Their sum is E[X + Y | X + Y] = X + Y.
  42. E[Y | X] = X/2 and Var(Y | X) = X²/12. So E Y = E X/2 = 1/4 and Var Y = E[X²]/12 + Var(X/2) = (1/3)/12 + (1/12)/4 = 1/36 + 1/48 = 7/144.
  43. E S = E N · E X = 4 × 2 = 8. Var S = E N · Var X + Var N · (E X)² = 4 × 4 + 4 × 4 = 32, which is λ E X² = 4 × 8.
  44. With q/p = 11/9, P = (1 − (11/9)¹⁰)/(1 − (11/9)²⁰) = 1/(1 + (11/9)¹⁰) ≈ 0.1185.
  45. The grid has 12 edges, so 2|E| = 24. A corner has degree 2, so π = 1/12 and the mean return time is 12; the centre has degree 4, π = 1/6 and mean return time 6.

Challenge

  46. If P({n}) = c for all n, countable additivity gives 1 = ∑ₙ c, impossible for c = 0 and for c > 0. Finitely additive "uniform" measures do exist: Banach limits of the densities |A ∩ {1, …, n}|/n give finitely additive probabilities extending natural density, with every singleton of measure 0, but their construction requires the axiom of choice (via the Hahn–Banach theorem).
  47. Fix K. The event A_K = {Sₙ/√n > K infinitely often} is a tail event of the i.i.d. steps, since changing finitely many steps changes Sₙ by a bounded amount, which is negligible after division by √n. By Fatou's lemma applied to indicators, P(A_K) ≥ lim sup P(Sₙ/√n > K) = 1 − Φ(K) > 0, using the CLT. By Kolmogorov's zero–one law P(A_K) = 1, so lim sup Sₙ/√n ≥ K almost surely. Intersecting over K = 1, 2, … gives the claim.
  48. Sₖ is a martingale, so Sₖ² is a nonnegative submartingale. Doob's maximal inequality gives λ² P(max_{k≤n} Sₖ² ≥ λ²) ≤ E Sₙ² = Var Sₙ, which is the claim. (A direct proof decomposes by the first k with |Sₖ| ≥ λ and uses E[Sₖ(Sₙ − Sₖ) 1_{Aₖ}] = 0.)
  49. By the tail formula, E|X| = ∫₀^∞ P(|X| > t) dt. Since t ↦ P(|X| > t) is non-increasing, ∑_{n≥1} P(|X| ≥ n) ≤ E|X| ≤ 1 + ∑_{n≥1} P(|X| ≥ n), comparing the integral on [n − 1, n] with the values at the endpoints. So both are finite or both infinite.
  50. φ(t) = ½∫ e^{itx} e^{−|x|} dx = ½[1/(1 − it) + 1/(1 + it)] = 1/(1 + t²). It is integrable, so by inversion ½e^{−|x|} = (1/2π) ∫ e^{−itx}/(1 + t²) dt. Swapping the roles of x and t: ∫ e^{itx} · 1/(π(1 + x²)) dx = e^{−|t|}, the Cauchy characteristic function.
  51. P(N > n) = P(U₁ + ⋯ + Uₙ ≤ 1) = 1/n!, the volume of the standard simplex. By the tail formula E N = ∑_{n≥0} P(N > n) = ∑ 1/n! = e ≈ 2.718.
  52. By the ballot theorem (Bertrand, 1887), the probability is (a − b)/(a + b) = (6 − 4)/10 = 1/5. A proof via the reflection principle: counts that start with a vote for A but tie at some later point are in bijection (reflect the part up to the first tie) with counts starting with a vote for B, so the bad counts number twice C(9, 3) = 168 of C(10, 4) = 210.
  53. Any particular sequence of draws with k reds and n − k blues has probability k!(n − k)!/(n + 1)!, independently of the order (the numerators run through 1, …, k and 1, …, n − k, and the denominators through 2, …, n + 1). Multiplying by C(n, k) gives 1/(n + 1). The fraction of red after n draws, (k + 1)/(n + 2), is a bounded martingale converging a.s., and its law converges to Uniform(0, 1), so the limit is uniform.
  54. Sₙ − n(p − q) is a martingale with bounded increments and E T < ∞, so 5 + (p − q)E T = E S_T = 10 × 32/275. With p − q = −0.2: E T = (5 − 64/55)/0.2 = 211/11 ≈ 19.18.
  55. For HH, a gambler-martingale argument (a new gambler arrives before each toss and bets successively on H, H at fair odds) gives E T = 2² + 2 = 6, because the pattern HH overlaps itself at the last letter; for HT there is no self-overlap and E T = 4. A direct check for HT: the time to the first H is 2, and then the time to the first T is 2.
  56. Let hₖ be the expected time from k to n. With dₖ = hₖ − hₖ₊₁, the equations give d₀ = 1 and dₖ = dₖ₋₁ + 2, so dₖ = 2k + 1 and h₀ = ∑_{k=0}^{n−1} (2k + 1) = n².
  57. For each C > 0, E|X₁|/C = ∞, so ∑ₙ P(|Xₙ| > Cn) = ∞ by Problem 49 applied to |X₁|/C. By the second Borel–Cantelli lemma, |Xₙ| > Cn infinitely often. Since |Xₙ| ≤ |Sₙ| + |Sₙ₋₁|, one of |Sₙ|, |Sₙ₋₁| exceeds Cn/2 infinitely often, so lim sup |Sₙ|/n ≥ C/2. Let C → ∞.
  58. Given N(t) = n, the arrival times are uniform order statistics, so their sum has mean nt/2. Hence the answer is E N(t) · t/2 = λt²/2; for λ = 3 and t = 2 it is 6.
  59. Le Cam's bound is 2 × 100 × 0.02² = 0.08; the actual sum is about 0.0091. P(X = 0) = 0.98¹⁰⁰ ≈ 0.1326 and P(Y = 0) = e^{−2} ≈ 0.1353.
  60. Let Sₙ be a sum of n i.i.d. Poisson(1) variables, so Sₙ ~ Poisson(n) and the expression equals P(Sₙ ≤ n) = P((Sₙ − n)/√n ≤ 0). By the CLT this tends to Φ(0) = 1/2, since 0 is a continuity point of Φ.
