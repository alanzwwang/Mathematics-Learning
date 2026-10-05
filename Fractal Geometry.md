Fractal Geometry — A Complete Lesson
════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        3 → 9 → 27 → 81 → 243 — one triangle, copying itself

        A snowflake's edge can grow forever — while its area settles down to exactly 8/5 of where it started

        Zoom in on a fern leaf: it's built from tiny fern leaves

Those three lines are fractal geometry in action. The first is the counting pattern of the most famous fractal ever drawn — a triangle that keeps replacing itself with smaller copies, tripling every round. The second sounds impossible — an edge that grows without end, wrapped around an inside that converges to one exact, modest number — and in this lesson you won't just believe it, you'll PROVE it. The third is nature's favorite building trick: make a big thing out of small copies of itself.

Why do people care? Because fractals are hiding everywhere you look. Ferns, trees, broccoli, snowflakes, lightning bolts, river networks, coastlines, even the branching airways inside your lungs — all are built from the same pattern repeated at smaller and smaller scales. Movie studios use fractal rules to draw mountains and clouds that look real. Doctors use them to understand blood vessels. And mathematicians love fractals because one tiny rule, repeated forever, can create endless, beautiful complexity out of almost nothing.

A fair warning: this lesson goes much further than most. You'll work with powers like (4/3)ⁿ, turn repeating rules into explicit formulas, sum infinite geometric series, solve equations with logarithms, and finish by computing EXACT fractal dimensions — numbers like 1.585 that live between dimensions. Nothing here is magic: every step is shown, with the reason for each move written next to it. Hard just means "takes more than one step."

In this lesson, you will:

  1. Learn the zoom test — and what exact self-similarity means
  2. Turn a repeating rule into a formula: geometric sequences, series, and function composition
  3. Build the Koch snowflake — and prove its edge is infinite while its area is exactly 8/5 of the original
  4. Build the Sierpinski triangle — and track its area, its holes, and its surprisingly infinite perimeter
  5. Master logarithms and compute fractal dimensions — numbers between dimensions
  6. Measure coastlines with math: why the answer depends on your ruler, and by exactly how much
  7. Explore the big paradoxes — now with proofs instead of promises
  8. Learn the common mistakes so you never make them
  9. Practice with 100 problems at the end!

How to use this lesson: Read the sections in order — each one builds on the one before it, and every new term is defined the moment it appears. Take your time, and try every "Your Turn" box with a pencil and paper. Drawing the stages makes everything easier — fractals are meant to be doodled! Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: What Is a Fractal? — The Zoom Test
─────────────────────────────────────────────

📌 Key idea of this section:

        A fractal is a shape whose small parts look like smaller COPIES of the whole.
        Zoom in — and the same shape shows up again.

Pick up a fern leaf and look closely. The whole leaf is a long stem lined with leaflets. But each leaflet is shaped like a tiny fern leaf! And if you zoom into one leaflet, ITS leaflets are tinier fern leaves still. The same shape, over and over, smaller and smaller.

Mathematicians call this SELF-SIMILARITY: the shape is similar to itself. Not just once, but at level after level of zoom.

Two flavors of self-similarity are worth naming now, because we'll use them all lesson:

  · EXACT self-similarity: the small parts are perfect scaled-down copies of the whole — same shape, same angles, just shrunk. The Sierpinski triangle and Koch snowflake (coming in Lessons 3 and 4) are exactly self-similar, because they are built by precise rules.

  · APPROXIMATE (statistical) self-similarity: the small parts look ROUGHLY like the whole — same style of wiggliness, never identical. Ferns, coastlines, and lightning are like this. Nature never draws exactly; it doodles with a consistent style.

That gives us a test — the ZOOM TEST. Imagine pointing a magic microscope at a shape. If a small part looks like a shrunken copy of the whole shape, it passes: fractal! If not, it fails.

Three surprises hide in that test:

  · Repetition alone is NOT enough. A brick wall repeats — but every brick is the SAME size. A tiled floor repeats forever and never zooms anywhere. Fractal copies must get SMALLER as you zoom.

  · Smooth shapes fail. Zoom into the edge of a circle and it looks flatter and flatter — like a straight line. A line is not a small circle, so a circle is not a fractal. Fractals are the shapes of the rough, crinkly, branching world.

  · Self-similarity alone can be BORING. Slice a square into 4 smaller squares, then slice each of those into 4 — every small square is a perfect copy of the whole. Exactly self-similar! Yet nobody calls a solid square a fractal. In Lesson 5 you'll see why: when you compute its dimension, it comes out to exactly 2 — a whole number. The wild shapes are the ones whose dimensions land BETWEEN whole numbers. Keep that in the back of your mind.

✏️ Your Turn

(a) Does a tree pass the zoom test? (b) Does a checkerboard of identical squares pass? (c) A square subdivided into smaller and smaller squares, forever — is it exactly self-similar? Is it an interesting fractal?

Answers: (a) Yes — a branch looks like a small tree, and a twig looks like a small branch (approximately). (b) No — the squares repeat at the same size. Repetition isn't enough; the copies must shrink! (c) It IS exactly self-similar, but boring — its dimension will compute to exactly 2, so it doesn't live between dimensions. Self-similarity is the entry ticket; a fractional dimension is the prize.


─────────────────────────────────────────────
Lesson 2: The Recipe — One Rule, Repeated (and the Formula That Captures It)
─────────────────────────────────────────────

📌 Key idea of this section:

        A fractal is built by ONE rule, applied over and over.
        Each round is called an ITERATION (or stage). The start is stage 0.
        Counting through the stages produces a GEOMETRIC SEQUENCE —
        and geometric sequences have exact formulas.

Nobody draws a fractal one tiny piece at a time — that would take forever. Instead, you write down ONE rule and let it repeat. Watch how it works with the simplest fractal of all: the fractal tree.

The rule: every branch splits into 2 smaller branches.

        Stage 0:  1 trunk
        Stage 1:  the trunk splits — 2 new branches
        Stage 2:  both branches split — 4 new branches
        Stage 3:  all four split — 8 new branches

The new branches go 1, 2, 4, 8, 16... doubling every stage. The rule never changes; only the SIZE changes — each new generation is smaller than the last.

A list where every term is the previous term times the same fixed number is called a GEOMETRIC SEQUENCE, and that fixed multiplier is called the RATIO (usually written r). The tree's tip counts are geometric with ratio 2.

Two ways to write the same pattern:

  · RECURSIVE formula (each term from the one before):

        B₀ = 1                        (stage 0: the trunk alone)
        Bₙ = 2 · Bₙ₋₁                 (each stage doubles the tips)

  · EXPLICIT formula (any term directly, no climbing needed):

        Bₙ = 2ⁿ

Why are they the same? Unroll the recursive rule: Bₙ = 2·Bₙ₋₁ = 2·2·Bₙ₋₂ = ... after n doublings you reach B₀ = 1, so Bₙ = 2ⁿ · 1 = 2ⁿ. Each formula has a superpower: recursive is natural to write down from the rule; explicit lets you jump straight to stage 50.

Here's a third viewpoint that will matter in Lessons 3 and 4. Iterating a rule is COMPOSING A FUNCTION with itself. Define f(x) = 2x ("double it"). Then:

        f(x) = 2x                     (one iteration)
        f(f(x)) = f(2x) = 4x          (two iterations: substitute 2x into f)
        f(f(f(x))) = 8x               (three iterations)
        f applied n times = 2ⁿ · x    (n iterations)

Same math, new outfit: the n-th stage is the n-th composition of the rule-function.

Now count the TOTAL branches: 1, then 1 + 2 = 3, then 1 + 2 + 4 = 7, then 1 + 2 + 4 + 8 = 15. Look closely: 1, 3, 7, 15 — each total is exactly 1 less than the next power of 2 (2, 4, 8, 16). Let's PROVE that pattern instead of trusting it.

Theorem: 1 + 2 + 4 + ... + 2ⁿ = 2ⁿ⁺¹ − 1.

Proof (every step justified):

        Let S = 1 + 2 + 4 + ... + 2ⁿ        (name the sum so we can work with it)
           2S =     2 + 4 + ... + 2ⁿ + 2ⁿ⁺¹  (multiply BOTH sides by 2; every term shifts one place right)
        2S − S = 2ⁿ⁺¹ − 1                    (subtract the equations: 2 cancels 2, 4 cancels 4, ..., 2ⁿ cancels 2ⁿ)
             S = 2ⁿ⁺¹ − 1                    (2S − S is just S)

Check at n = 4: 2⁵ − 1 = 31, and 1 + 2 + 4 + 8 + 16 = 31. ✓

The same trick works for ANY ratio. A sum of a geometric sequence is called a GEOMETRIC SERIES, and here is its formula, derived the same way:

        S = a + ar + ar² + ... + arⁿ⁻¹       (n terms, first term a, ratio r)
       rS =    ar + ar² + ... + arⁿ⁻¹ + arⁿ  (multiply both sides by r)
    S − rS = a − arⁿ                          (subtract: the middle terms cancel in pairs)
  S(1 − r) = a(1 − rⁿ)                        (factor out S on the left, a on the right)
         S = a(rⁿ − 1)/(r − 1)                (divide by (1 − r), then flip both signs to taste)

Worked example: the tripling tree (rule: every branch splits into 3). Total branches through stage 4 = 1 + 3 + 9 + 27 + 81. Here a = 1, r = 3, n = 5:

        S = 1·(3⁵ − 1)/(3 − 1)                (substitute into the formula)
          = (243 − 1)/2                       (3⁵ = 243)
          = 242/2 = 121                       (simplify)

Check by adding: 1 + 3 + 9 + 27 + 81 = 121. ✓

One more case — the one that powers everything in Lesson 3. What if the series never ends, but the ratio is BETWEEN −1 and 1? Then the powers rⁿ shrink toward 0 (halve forever and you approach nothing), so in the formula S = a(1 − rⁿ)/(1 − r), the rⁿ term vanishes in the limit:

        a + ar + ar² + ... (forever) = a/(1 − r),   valid when |r| < 1

We say this series CONVERGES — it settles on one finite number. When |r| ≥ 1 the terms don't shrink and the sum DIVERGES (grows past every bound). Example:

        1 + 1/2 + 1/4 + 1/8 + ... = 1/(1 − 1/2) = 2   (a = 1, r = 1/2)

An infinite list of positive numbers adding up to a finite total — that's not a paradox, it's a convergent series, and it's the engine behind Lesson 3's big theorem.

Last worked example — deriving the tree's total formula by SOLVING EQUATIONS. The totals satisfy the recurrence Tₙ = 2Tₙ₋₁ + 1 (check: 2·3 + 1 = 7 ✓, 2·7 + 1 = 15 ✓). Guess a solution of the form Tₙ = a·2ⁿ + c, with unknown numbers a and c, and force it to work:

        Substitute the guess into the recurrence:
        a·2ⁿ + c = 2(a·2ⁿ⁻¹ + c) + 1          (Tₙ must equal 2Tₙ₋₁ + 1)
        a·2ⁿ + c = a·2ⁿ + 2c + 1              (distribute: 2·2ⁿ⁻¹ = 2ⁿ)
              c = 2c + 1                      (subtract a·2ⁿ from both sides)
              0 = c + 1                       (subtract c from both sides)
              c = −1                          (subtract 1 from both sides)
        Now use stage 0: T₀ = 1:
        a·2⁰ + (−1) = 1                       (T₀ = a·1 + c, and c = −1)
        a = 2                                 (add 1 to both sides)
        Formula: Tₙ = 2·2ⁿ − 1 = 2ⁿ⁺¹ − 1     (combine: 2·2ⁿ = 2ⁿ⁺¹)

Matches the theorem. Two methods, one answer — that's how you know you're right.

In math, the iterations never stop. A true fractal has infinitely many stages — zoom in forever, and there's always more detail. Nature's fractals stop after a few rounds (a real tree splits maybe five or six times before the twigs end). But the RULE — and the formulas — are exactly the same.

✏️ Your Turn

(a) A rule says: every square becomes 4 smaller squares. Start with 1 square. Write the recursive and explicit formulas for the count, and find the count at stage 2. (b) A tree's rule is: every branch splits into 3. Write the explicit formula for new tips at stage n, and list stages 1–3. (c) Use the series formula to find the total branches of a doubling tree through stage 5 — then check by adding.

Answers: (a) Recursive: S₀ = 1, Sₙ = 4·Sₙ₋₁. Explicit: Sₙ = 4ⁿ. Stage 2: 16. (b) Tₙ = 3ⁿ: 3, 9, 27. (c) a = 1, r = 2, n = 6 terms (stages 0 through 5): S = (2⁶ − 1)/(2 − 1) = 63. Check: 1 + 2 + 4 + 8 + 16 + 32 = 63 ✓.


─────────────────────────────────────────────
Lesson 3: The Koch Snowflake — The Edge That Never Stops (and the Area That Does)
─────────────────────────────────────────────

📌 Key idea of this section:

        Koch rule: every segment becomes 4 segments, each 1/3 as long.
        Every iteration multiplies the PERIMETER by 4/3 — forever.
        But the added AREA forms a convergent series — total area: exactly 8/5 of the original.

Meet the most famous fractal of all. Start with an equilateral triangle (stage 0). Now the rule: take every segment, divide it into thirds, and replace the middle third with two sides of a smaller equilateral triangle pointing outward — a little bump.

Follow one straight segment through the rule. It becomes: a third, then up the bump, then down the bump, then the last third. That's 4 segments — and each one is exactly 1/3 as long as the original.

All three quantities now have explicit formulas (Lesson 2's superpower). Start with side length 1:

        Piece count:    3 → 12 → 48 → 192       count(n) = 3·4ⁿ        (×4 each stage)
        Piece length:   1 → 1/3 → 1/9 → 1/27    length(n) = (1/3)ⁿ     (÷3 each stage)
        Perimeter:      3 → 4 → 16/3 → 64/9     P(n) = 3·(4/3)ⁿ        (×4/3 each stage)

The perimeter formula isn't a third thing to memorize — it's the other two MULTIPLIED:

        P(n) = count(n) × length(n) = 3·4ⁿ · (1/3)ⁿ = 3·(4/3)ⁿ
        (why: 4ⁿ · (1/3)ⁿ = (4 · 1/3)ⁿ = (4/3)ⁿ — same exponent, so combine the bases)

Worked example — find the stage-4 perimeter TWO ways, then compare.

        Method A (recursive, step by step):
        3 → 4 → 16/3 → 64/9 → 256/27          (multiply by 4/3 four times)
        P(4) = 256/27 ≈ 9.48 cm

        Method B (explicit formula):
        P(4) = 3·(4/3)⁴                       (substitute n = 4)
             = 3 · 256/81                     (4⁴ = 256, 3⁴ = 81)
             = 768/81 = 256/27 ≈ 9.48 cm      (simplify: divide by 3)

Same answer — it had better be! Method B wins when n is large (imagine computing stage 40 recursively), while Method A is safer when you're unsure of the formula. Strong solvers pick the method to fit the problem — and use the other as a check.

Since 4/3 > 1, the powers (4/3)ⁿ grow past every number: the perimeter DIVERGES to infinity. (Feel it: (4/3)¹⁰ ≈ 17.8, (4/3)²⁰ ≈ 315.) Yet the snowflake never grows beyond its original circle on the page. So what happens to the area? Time for the theorem the old lesson could only state — now we can prove it.

Theorem: the Koch snowflake's total area is exactly 8/5 of the original triangle's area.

Setup — the area of an equilateral triangle with side s is A₀ = (√3/4)·s². Where does that come from? Split the triangle down the middle and use the Pythagorean theorem on the right triangle with hypotenuse s and base s/2:

        h² + (s/2)² = s²                      (Pythagorean theorem)
        h² = s² − s²/4 = 3s²/4                (subtract (s/2)² = s²/4 from both sides)
        h = (√3/2)·s                          (take the positive square root)
        A₀ = ½ · base · height = ½ · s · (√3/2)s = (√3/4)s²   (area formula)

Proof — add up the bumps, stage by stage.

        Step 1: At stage n (for n ≥ 1), one new bump is planted on EVERY segment
        that existed at stage n − 1. Segments at stage n − 1: 3·4ⁿ⁻¹.   (count formula)
        Step 2: Each stage-n bump has side s/3ⁿ.                          (length formula)
        Step 3: Each stage-n bump has area A₀/9ⁿ.
        (why: area scales by the SQUARE of the length scale: (s/3ⁿ)² = s²/9ⁿ,
         so the bump's area is A₀ · (1/3ⁿ)² = A₀/9ⁿ)
        Step 4: Total area added at stage n:
        added(n) = 3·4ⁿ⁻¹ · A₀/9ⁿ               (count × area each)
                 = (A₀/3) · (4/9)ⁿ⁻¹            (simplify: 3·4ⁿ⁻¹/9ⁿ = (3/9)·(4ⁿ⁻¹/9ⁿ⁻¹) = (1/3)(4/9)ⁿ⁻¹)
        Step 5: Sum over all stages — a geometric series with a = A₀/3, r = 4/9:
        total added = (A₀/3)/(1 − 4/9)          (infinite series formula, valid since |4/9| < 1)
                    = (A₀/3)/(5/9)              (1 − 4/9 = 5/9)
                    = (A₀/3)·(9/5) = 3A₀/5      (dividing by 5/9 = multiplying by 9/5)
        Step 6: Add the original triangle:
        total area = A₀ + 3A₀/5 = 8A₀/5         (common denominator: 5A₀/5 + 3A₀/5)

The snowflake's area is exactly 8/5 of the original — it never even doubles. Let's sanity-check with numbers. Take A₀ = 81:

        Stage 1 adds:  (81/3) = 27
        Stage 2 adds:  27 · 4/9 = 12
        Stage 3 adds:  12 · 4/9 = 16/3 ≈ 5.33
        All additions: 27/(1 − 4/9) = 27 · 9/5 = 243/5 = 48.6
        Total: 81 + 48.6 = 129.6 = (8/5)·81 ✓

Why does the edge explode while the area naps? Two different races with two different ratios. The perimeter race pits count (×4) against length (×1/3): net ×4/3 > 1 — growth wins. The area race pits bump count (×4) against bump area (×1/9): net ×4/9 < 1 — shrinkage wins, and the additions form a convergent series. One shape, two races, two opposite outcomes. That's the whole paradox, resolved by a single inequality each way.

✏️ Your Turn

(a) Start with a triangle of perimeter 9 cm. What is the perimeter after 1 iteration? After 2? (b) How many pieces does the snowflake have after 2 iterations — use the explicit formula. (c) If the starting triangle has area A₀ = 36, how much area is ADDED at stage 1?

Answers: (a) 9 × 4/3 = 12 cm; then 12 × 4/3 = 16 cm (or 9·(4/3)² = 9·16/9 = 16 ✓). (b) count(2) = 3·4² = 48. (c) added(1) = A₀/3 = 12 — three bumps, each of area 36/9 = 4, and 3·4 = 12 ✓.


─────────────────────────────────────────────
Lesson 4: The Sierpinski Triangle — The Great Disappearing Act (With Infinite Perimeter!)
─────────────────────────────────────────────

📌 Key idea of this section:

        Sierpinski rule: every solid triangle becomes 3 solid triangles, each 1/2 the size.
        The COUNT multiplies by 3. Each triangle's AREA multiplies by 1/4.
        Total area ×3/4 → 0. Total perimeter ×3/2 → ∞. Both at once!

Draw a triangle and connect the midpoints of its three sides. That splits it into 4 equal smaller triangles (each with half the side length). Now remove the middle one — it becomes a hole — and keep the 3 corner triangles. That's one iteration. Then do the same thing inside every solid triangle that's left, forever.

Every quantity here gets an explicit formula, just like in Lesson 3:

        Triangle count:   1 → 3 → 9 → 27 → 81       count(n) = 3ⁿ          (×3 each stage)
        Side length:      s → s/2 → s/4 → s/8       side(n) = s·(1/2)ⁿ     (×1/2 each stage)

Why does each small triangle have 1/4 the AREA (not 1/2)? Area scales with the SQUARE of the length scale:

        area of one small triangle = A₀ · (1/2)² = A₀/4     (side halved → area quartered)

Now the total solid area is count × area-each:

        A(n) = 3ⁿ · A₀/4ⁿ = A₀·(3/4)ⁿ             (combine: 3ⁿ/4ⁿ = (3/4)ⁿ)

Since 3/4 < 1, the powers (3/4)ⁿ shrink toward 0: 3/4, 9/16, 27/64, 81/256... The area shrinks forever — toward zero, though no stage ever lands exactly on zero, because 3/4 of SOMETHING is never nothing. In the language of Lesson 2: the sequence converges to 0 in the limit.

Here's the function-composition view (Lesson 2). The area rule is f(x) = (3/4)x. Iterating is composing:

        f(f(x)) = (3/4)·(3/4)x = (9/16)x          (two iterations)
        fⁿ(x) = (3/4)ⁿ · x                        (n iterations — the n-th composition)

A beautiful detail, kept from the classic lesson: start with area exactly 64. Then stage 3 leaves 64·(3/4)³ = 64·27/64 = 27. The fraction left is 27/64, and exactly 27 out of 64 remains — the fraction and the count match perfectly!

Now the HOLES — a geometric series in disguise. Stage 1 cuts 1 hole. Stage 2 cuts 3 new holes (one inside each solid triangle). Stage 3 cuts 9 new holes. So after stage n:

        H(n) = 1 + 3 + 9 + ... + 3ⁿ⁻¹             (n terms, a = 1, r = 3)
             = (3ⁿ − 1)/(3 − 1)                   (geometric series formula from Lesson 2)
             = (3ⁿ − 1)/2                         (simplify)

Check at n = 3: (27 − 1)/2 = 13, and 1 + 3 + 9 = 13. ✓

Next, something the gentle version of this lesson never mentions: the PERIMETER of the Sierpinski triangle. Sum the perimeters of all the solid triangles:

        perimeter of one small triangle = 3 · s·(1/2)ⁿ = 3s/2ⁿ   (3 sides of length s/2ⁿ)
        total perimeter P(n) = 3ⁿ · 3s/2ⁿ = 3s·(3/2)ⁿ            (count × perimeter each)

Since 3/2 > 1, this DIVERGES: the Sierpinski triangle's total edge length grows forever! (These edges are exactly the borders between solid and hole, so this really is the boundary length of the shape.) Compare:

        Koch snowflake:    perimeter → ∞,   area → 8A₀/5 (finite!)
        Sierpinski:        perimeter → ∞,   area → 0

Same infinite-edge trick — but one keeps a finite inside while the other loses its inside completely.

Last question: how much area is REMOVED in total, if the rule runs forever? Stage k removes 3ᵏ⁻¹ triangles (one per solid triangle present), each of area A₀/4ᵏ:

        removed(k) = 3ᵏ⁻¹ · A₀/4ᵏ = (A₀/4)·(3/4)ᵏ⁻¹      (count × area each, then factor)
        total removed = (A₀/4)/(1 − 3/4)                  (infinite series, a = A₀/4, r = 3/4)
                      = (A₀/4)/(1/4) = A₀                 (divide)

The total removed equals the ENTIRE original area — a second, independent proof that the remaining area must vanish. (Consistent with A(n) = A₀·(3/4)ⁿ → 0. Two roads, same destination.)

✏️ Your Turn

(a) Which stage has 27 solid triangles — answer from the formula 3ⁿ, not by listing. (b) Start with an area of 16. What remains after 2 iterations? (c) How many holes in total after stage 3 — once by adding, once by the formula.

Answers: (a) 3ⁿ = 27 = 3³, so n = 3. (b) 16·(3/4)² = 16·9/16 = 9. (c) Adding: 1 + 3 + 9 = 13. Formula: (3³ − 1)/2 = 26/2 = 13 ✓.


─────────────────────────────────────────────
Lesson 5: The Dimension Secret — Now With Logarithms
─────────────────────────────────────────────

📌 Key idea of this section:

        If a shape is made of N copies of itself, each shrunk by a factor of r,
        then N = (1/r)ᵈ — and solving for d gives the DIMENSION:
        d = log N / log (1/r). For fractals, d comes out as a fraction!

Here's a strange little experiment. Take a shape and ask: how many HALF-SIZE copies of itself does it take to build it?

  · A line segment: 2 half-size copies, end to end.
  · A square: 4 half-size copies (slice it in half both ways).
  · A cube: 8 half-size copies (slice it in half all three ways).

Now repeat with THIRD-SIZE copies (scale factor r = 1/3):

  · Line: 3 copies. Square: 9 copies. Cube: 27 copies.

Organize everything into one table and hunt for the pattern:

        Shape   r = 1/2   r = 1/3   ...and the dimension we know it has
        line    2         3         1
        square  4         9         2
        cube    8         27        3

        Line:   2 = 2¹ and 3 = 3¹     → dimension 1
        Square: 4 = 2² and 9 = 3²     → dimension 2
        Cube:   8 = 2³ and 27 = 3³    → dimension 3

The pattern: N = (1/r)ᵈ. The copy count equals the inverse scale factor raised to the dimension!

Why should that be true? When you shrink a shape by a factor r, its "bulk" shrinks by rᵈ — length for d = 1, area for d = 2, volume for d = 3. So each small copy holds rᵈ of the whole, and it takes exactly N = 1/rᵈ = (1/r)ᵈ copies to rebuild the whole. Check the square at r = 1/2: each copy has (1/2)² = 1/4 the area, and indeed 4 copies rebuild it. ✓

Now flip it around — this is the big move. For a self-similar shape, DEFINE the dimension by that equation:

        N = (1/r)ᵈ        where N = number of self-copies, r = their scale factor

For ordinary shapes this reproduces 1, 2, 3. For fractals it produces something new — IF we can solve for d. That requires a tool you may not have met yet, so here it is, properly defined.

LOGARITHMS, from scratch. The logarithm of a number x to base b is the EXPONENT you must put on b to get x:

        log_b(x) = y    means exactly    bʸ = x

        log₂(8) = 3        because 2³ = 8
        log₃(81) = 4       because 3⁴ = 81
        log₁₀(1000) = 3    because 10³ = 1000

Two laws make logarithms do real work. Each gets a one-line proof.

        Law 1: log_b(M·N) = log_b(M) + log_b(N)
        Proof: write M = bˣ and N = bʸ (that's what the logs ARE: x = log_b M, y = log_b N).
        Then M·N = bˣ·bʸ = bˣ⁺ʸ (adding exponents), so log_b(M·N) = x + y = log_b M + log_b N. ✓

        Law 2: log_b(Mᵏ) = k · log_b(M)
        Proof: M = bˣ, so Mᵏ = (bˣ)ᵏ = bᵏˣ (power of a power multiplies exponents),
        so log_b(Mᵏ) = kx = k·log_b(M). ✓

        Change-of-base: log_b(x) = log(x) / log(b)   — using ANY log your calculator has.
        Proof: x = bʸ means y = log_b(x). Take log₁₀ of both sides of x = bʸ:
        log(x) = log(bʸ) = y·log(b) (Law 2). Divide by log(b): y = log(x)/log(b). ✓

One more fact we lean on: equal numbers have equal logarithms, so you may "take log of both sides" of any equation. (Logs are one-to-one: different inputs never give the same output.)

Now solve the dimension equation, every step shown:

        N = (1/r)ᵈ                        (the dimension equation)
        log N = log((1/r)ᵈ)               (take log of both sides — any base)
        log N = d · log(1/r)              (Law 2 brings the exponent down in front)
        d = log N / log(1/r)              (divide both sides by log(1/r))

THE DIMENSION FORMULA. Let's fire it up:

        Line:       d = log 2 / log 2 = 1                                  (exact)
        Square:     d = log 4 / log 2 = log(2²)/log 2 = 2·log 2/log 2 = 2  (exact, using Law 2)
        Cube:       d = log 8 / log 2 = log(2³)/log 2 = 3                  (exact)
        Sierpinski: N = 3 copies at r = 1/2:
                    d = log 3 / log 2 ≈ 0.4771/0.3010 ≈ 1.585
        Koch edge:  N = 4 copies at r = 1/3 (zoom into any bump: the whole edge
                    is 4 copies of itself, each 1/3 the size):
                    d = log 4 / log 3 ≈ 0.6021/0.4771 ≈ 1.262
        Cantor set  (Lesson 7): N = 2 copies at r = 1/3:
                    d = log 2 / log 3 ≈ 0.3010/0.4771 ≈ 0.631

Read those answers slowly — they're the payoff of the entire lesson:

  · The Sierpinski triangle has dimension ≈ 1.585: MORE than a line (1), LESS than a surface (2). Of course it does — it's so full of holes it's not quite a surface anymore, yet it's far more than a curve.
  · The Koch edge has dimension ≈ 1.262: too crinkly to be a mere line, too skinny to cover any area.
  · The Cantor set has dimension ≈ 0.631: between a scattering of points (0) and a line (1). Dust with structure.

Shapes whose dimension lands between whole numbers are called FRACTALS — from "fractional dimension." That's where the name comes from! And notice the square from Lesson 1: exactly self-similar, but its dimension computes to exactly 2 — self-similar yet not fractional, so not a true fractal. The mystery from Lesson 1, resolved.

✏️ Your Turn

(a) Which has more dimensions: a shape made of 4 half-size copies, or one made of 8? (b) A mystery fractal is built from 5 half-size copies of itself. Compute its dimension and place it between two whole numbers. (c) A fractal is made of 4 copies at scale 1/3. Compute its dimension — do you recognize the shape?

Answers: (a) 8 copies: d = log 8/log 2 = 3 beats 4 copies: d = log 4/log 2 = 2. (b) d = log 5/log 2 ≈ 0.6990/0.3010 ≈ 2.32 — between 2 and 3 dimensions. (c) d = log 4/log 3 ≈ 1.262 — that's exactly the Koch snowflake's edge!


─────────────────────────────────────────────
Lesson 6: Fractals All Over Nature — And Why (Plus: the Coastline Formula)
─────────────────────────────────────────────

📌 Key idea of this section:

        Nature builds with fractal rules to pack a LOT into a LITTLE space.
        Real-world fractals are approximately self-similar and zoom only a few levels deep.
        Their roughness is measurable: measured length L(ε) = C·ε^(1−D), where ε is your ruler.

Once you know the zoom test, you start seeing fractals everywhere:

  · TREES and FERNS: branches that look like small trees, leaflets that look like small leaves.
  · ROMANESCO BROCCOLI: spiraling cones made of smaller spiraling cones, made of smaller ones still.
  · LIGHTNING: each fork zigzags and branches the way the whole bolt does.
  · RIVERS and their tributaries: every small stream branches like the great river it feeds.
  · COASTLINES: bays within bays within bays, at every scale of map.
  · YOUR OWN BODY: the airways in your lungs split and split again (about 15–20 levels!), and your blood vessels branch from big highways down to tiny capillaries.

Why does nature keep choosing fractal rules? Because fractal branching PACKS A LOT INTO A LITTLE — and now you can say that quantitatively. Splitting n rounds with ratio 2 produces 2ⁿ tips: after just 10 rounds you have 2¹⁰ = 1024 ends from ONE trunk. Exponential growth is nature's shortcut to huge numbers. A tree catches sunlight over a huge area while taking up a small patch of ground. Your lungs fold an enormous surface — about the size of a tennis court — inside your chest, so oxygen can pass into your blood quickly. One splitting rule, repeated, solves a giant packing problem.

But remember the difference from Lesson 2: nature's fractals are APPROXIMATELY self-similar and they STOP. Twigs end in buds, airways end in tiny sacs. Real-world fractals zoom maybe four to six levels deep. Only in math does the zoom go on forever — and four levels of self-similarity is enough to pack a tennis court into your chest.

Now the coastline, with real math. Measure a coast with a ruler of length ε: you count some number of steps N(ε), and your measured length is L(ε) = N(ε)·ε. For a fractal coast of dimension D, the copy-count law from Lesson 5 runs backwards: finer rulers reveal copies in proportion N(ε) ≈ C·ε⁻ᴰ for some constant C. Multiply by ε:

        L(ε) = N(ε)·ε = C·ε⁻ᴰ · ε = C·ε^(1−D)          (adding exponents: −D + 1)

Since coastlines have D > 1, the exponent 1 − D is NEGATIVE — and a negative exponent means the smaller ε gets, the LARGER L gets. The formula makes the paradox precise.

Worked example — a coastline with D = 1.25 (about right for the west coast of Britain, the example Mandelbrot made famous). What happens when you halve your ruler?

        L(ε/2) / L(ε) = (ε/2)^(1−D) / ε^(1−D)           (ratio of the formula at two rulers)
                      = (1/2)^(1−D)                     (ε^(1−D) cancels — same base, divide powers)
                      = (1/2)^(−0.25)                   (substitute D = 1.25)
                      = 2^0.25                          (negative exponent flips the fraction)
                      ≈ 1.19                            (2^0.25 = √√2 ≈ 1.189)

Halving the ruler makes the measured coast about 19% longer — every time, forever. There is no single true length; there is a LAW connecting ruler to answer.

Let's verify this law against the one fractal we know completely. The Koch edge has D = log 4/log 3. Shrink the ruler by 3 (ε → ε/3):

        L multiplies by 3^(D−1)
        3^(D−1) = 3^D / 3                               (subtracting exponents = dividing)
        D = log 4/log 3 = log₃(4)                      (change of base, from Lesson 5)
        3^D = 3^(log₃(4)) = 4                          (base and log base cancel — the definition of log!)
        3^(D−1) = 4/3                                    (so L multiplies by 4/3)

That's EXACTLY the perimeter multiplier from Lesson 3 — each iteration is a ruler three times finer, and the measured length grows by 4/3. The coastline formula and the snowflake formula are the same truth in two outfits.

✏️ Your Turn

(a) Give one reason nature might "choose" a fractal rule. (b) Does a real fern zoom forever? (c) A very rough coastline has D = 1.5. If you halve your ruler, by what factor does the measured length grow?

Answers: (a) To pack a huge amount of surface or reach into a tiny space — catching sunlight, moving air and blood, draining a valley. (b) No — after a few levels the copies stop. Only math fractals zoom forever. (c) Factor = 2^(D−1) = 2^0.5 = √2 ≈ 1.41 — about 41% longer.


─────────────────────────────────────────────
Lesson 7: The Big Paradoxes — Now Proven
─────────────────────────────────────────────

📌 Key idea of this section:

        A fractal edge can be infinitely long while the area inside stays finite — proven.
        The smaller your ruler, the LONGER a fractal edge measures — quantified.
        A set can have infinitely many points yet zero total length — meet the Cantor set.

Paradox 1: the infinite edge around a small inside — RESOLVED

In the gentle version of this lesson, you had to take it on faith. Not anymore. Lesson 3 proved both halves with geometric series:

        Perimeter:  P(n) = 3·(4/3)ⁿ  diverges — ratio 4/3 > 1, powers grow past every bound
        Area:       A₀ + (A₀/3)/(1 − 4/9) = 8A₀/5   converges — ratio 4/9 < 1

Infinite fence, finite yard — not a mystery, a theorem.

Paradox 2: how long is a coastline, really? — QUANTIFIED

Measure a coastline on a big map with a 100 km ruler, and you skip every bay and peninsula. Use a 1 km ruler and you follow more wiggles — the answer grows. Walk it with a meter stick, chasing every pebble, and the coast becomes enormous. Lesson 6 turned this into a formula: L(ε) = C·ε^(1−D). A fractal-ish coastline doesn't HAVE one true length — the answer depends on your ruler, in exactly the way that formula describes.

This puzzle bothered scientists for years, until the mathematician Benoit Mandelbrot built fractal geometry around it in the 1960s and 70s and gave these shapes their name. His famous observation: "Clouds are not spheres, mountains are not cones, coastlines are not circles, and bark is not smooth, nor does lightning travel in a straight line." The rough world needed a new geometry — and this is it.

Paradox 3: the Cantor set — infinity in a speck of dust

The simplest fractal of all, and maybe the strangest. Start with a segment of length 1. The rule: remove the middle third of every solid segment, leaving the two ends.

        Stage 0:  1 piece,  total length 1
        Stage 1:  2 pieces, total length 2/3
        Stage 2:  4 pieces, total length 4/9
        Stage n:  2ⁿ pieces, total length (2/3)ⁿ

The piece count doubles forever (ratio 2 > 1: diverges), while the total length multiplies by 2/3 forever (ratio < 1: converges to 0). In the limit: INFINITELY many pieces with ZERO total length. Is anything left at all? Yes! The endpoints of every removed interval never get removed: 0, 1, 1/3, 2/3, 1/9, 2/9, 7/9, 8/9, ... Infinitely many points survive — a "dust" of points with no length. And its dimension (Lesson 5): d = log 2/log 3 ≈ 0.631, between 0 and 1. More than a sprinkle of points, less than a line — exactly what the math said it would be.

Paradox 4: infinity from one sentence

Maybe the strangest part of all: every fractal in this lesson came from ONE rule short enough to say in a single breath — "split every branch in two," "bump every segment," "remove the middle." Yet repeating that breath forever creates infinite detail. The recipe is tiny; the result is endless. And now you own the machinery — geometric sequences, series, and logarithms — that tames that endlessness into exact numbers like 8/5 and 1.585.

✏️ Your Turn

(a) After 20 stages, the snowflake's perimeter is enormous. Could you still draw the whole snowflake on one sheet of paper? (b) You measure a coast with a big ruler; your friend uses a tiny one. Who gets the longer coastline? (c) What fraction of the Cantor set's original length remains after stage 5? Give the exact fraction and a decimal approximation.

Answers: (a) Yes! The snowflake never grows beyond its original circle — only its edge gets longer and more crinkled. (b) Your friend — the tiny ruler follows thousands of wiggles your big ruler skipped: L(ε) = C·ε^(1−D) grows as ε shrinks. (c) (2/3)⁵ = 32/243 ≈ 0.132 — about 13% remains, and 2⁵ = 32 pieces carry it.


─────────────────────────────────────────────
Lesson 8: Watch Out! Common Mistakes
─────────────────────────────────────────────

📌 Keep the big ideas in sight:

        Zoom test: copies must SHRINK. Count and size move in OPPOSITE directions.
        Series with |r| < 1 converge; sequences with r > 1 diverge. Don't mix the races!
        d = log N / log(1/r) — copies on top, scale factor INVERTED on the bottom.

These six mistakes catch students every time. Learn them now, and they won't catch you!

Mistake 1: "It repeats, so it's a fractal"

        A checkerboard repeats squares forever — fractal?   ❌

No — every square is the SAME size. The zoom test demands SMALLER copies of the whole at every level. Repetition without shrinking is just a pattern. Fractals repeat AND shrink. ✅

Mistake 2: Multiplying when you should shrink

        Koch stage n: the pieces get 4 times LONGER?   ❌

Backwards! The COUNT multiplies by 4 while each piece's LENGTH divides by 3: count(n) = 3·4ⁿ but length(n) = (1/3)ⁿ. Count and size always move in opposite directions — that's the whole drama of fractals. Quick check that saves you every time: count × length must give the perimeter, and 3·4ⁿ·(1/3)ⁿ = 3·(4/3)ⁿ — growing, as it should. ✅

Mistake 3: "Infinite edge means infinite area"

        The snowflake's edge is infinite, so its area must be too?   ❌

The perimeter diverges (×4/3 per stage), but the added areas form a convergent series (ratio 4/9 < 1) summing to 3A₀/5. Total area: exactly 8A₀/5 — it never even doubles. Infinite fence, finite yard — and now you can prove both halves. ✅

Mistake 4: Off-by-one in the stage number

        Sierpinski stage 3 has 81 triangles?   ❌

Stage n means n iterations AFTER stage 0. count(n) = 3ⁿ, so stage 3 has 3³ = 27 triangles — 81 is stage 4. The exponent IS the stage number; count your stages starting from 0. ✅

Mistake 5: Flipping the dimension formula

        Sierpinski dimension = log(1/2) / log 3?   ❌

It's d = log N / log(1/r): copy count on top, and the scale factor INVERTED (1/r, not r) on the bottom. Get it wrong and the signs betray you: log(1/2)/log 3 is NEGATIVE, and a dimension can never be negative. Sanity check every answer: Sierpinski should land between 1 and 2 (≈ 1.585), and if your answer is 0.631 you accidentally computed log 2/log 3 — that's the Cantor set! ✅

Mistake 6: "An infinite sum must be infinite"

        1 + 1/2 + 1/4 + 1/8 + ... grows past every number?   ❌

No — when |r| < 1 the terms shrink so fast that the sum converges to a/(1 − r): here 1/(1 − 1/2) = 2. The trap is mixing up the two races: a geometric SEQUENCE with r > 1 diverges (Koch perimeter), while a geometric SERIES with |r| < 1 converges (Koch area additions). Ask two questions, always: "Is this a sequence of stages, or a sum of additions? And is the ratio above or below 1?" ✅


─────────────────────────────────────────────
Lesson 9: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Zoom test: small parts = smaller copies of the whole
        Geometric sequence: aₙ = a·rⁿ · series: a + ar + ... + arⁿ⁻¹ = a(rⁿ − 1)/(r − 1)
        Infinite series: a/(1 − r), convergent exactly when |r| < 1
        Koch:      pieces 3·4ⁿ · length (1/3)ⁿ · perimeter 3(4/3)ⁿ → ∞ · area → 8A₀/5
        Sierpinski: triangles 3ⁿ · sides (1/2)ⁿ · area (3/4)ⁿA₀ → 0 · perimeter 3s(3/2)ⁿ → ∞
        Cantor:    pieces 2ⁿ · length (2/3)ⁿ → 0 · dimension log 2/log 3 ≈ 0.631
        Tree:      tips 2ⁿ · total 2ⁿ⁺¹ − 1
        Dimension: d = log N / log(1/r) — Sierpinski ≈ 1.585, Koch ≈ 1.262
        Coastline: L(ε) = C·ε^(1−D) — smaller ruler, longer answer, by law

The recap list

  · A fractal passes the zoom test: its small parts look like smaller copies of the whole — exactly (math) or approximately (nature).
  · Fractals are built by ONE rule repeated; each round is an iteration (stage), and the start is stage 0.
  · Iterating a rule is composing a function with itself: f applied n times multiplies by rⁿ.
  · Geometric sequences have explicit formulas aₙ = a·rⁿ; geometric series sum to a(rⁿ − 1)/(r − 1), and to a/(1 − r) forever when |r| < 1.
  · Koch snowflake: every segment becomes 4 segments, each 1/3 as long. Perimeter 3·(4/3)ⁿ diverges; area converges to exactly 8A₀/5 — proven by summing the bumps.
  · Sierpinski triangle: keep 3 corner triangles, remove the middle. Triangles 3ⁿ; area (3/4)ⁿA₀ → 0; holes (3ⁿ − 1)/2; perimeter 3s(3/2)ⁿ → ∞.
  · Doubling tree: tips 2ⁿ; totals 2ⁿ⁺¹ − 1 — proven by the multiply-and-subtract trick.
  · Dimension formula d = log N/log(1/r): line 1, square 2, cube 3 — and fractals land BETWEEN: Sierpinski ≈ 1.585, Koch ≈ 1.262, Cantor ≈ 0.631. THAT's why they're called fractals!
  · Nature uses fractal rules to pack a lot into a little — lungs, trees, rivers, lightning — but zooms only a few levels deep.
  · Coastlines obey L(ε) = C·ε^(1−D): the smaller your ruler, the longer the measured coast, by a precise law.

The magic sentence

        Small parts echo the whole —
        one rule, repeated, builds the infinite —
        edges grow while areas shrink —
        geometric series decide what's finite —
        logarithms count the copies —
        and dimensions come in fractions.

Say it out loud three times. Seriously! That's the whole lesson in six lines.

Why this matters

For two thousand years, geometry was the math of smooth things — circles, triangles, perfect solids. But the real world is rough: crinkly coasts, branching trees, ragged clouds, forked lightning. Fractal geometry is the math of THAT world, and you now own its core machinery: the zoom test, the repeating rule as a geometric sequence, series that decide infinite-versus-finite, and logarithms that measure dimensions between the whole numbers. The next time you see a fern or a fork of lightning, look closer: smaller copies, all the way down — the math you just learned, growing wild.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Zoom test: are the parts SMALLER copies of the whole?
        Geometric sequence: aₙ = a·rⁿ · series: a(rⁿ − 1)/(r − 1) · infinite: a/(1 − r) if |r| < 1
        Koch: pieces 3·4ⁿ · length (1/3)ⁿ · perimeter 3(4/3)ⁿ · area → 8A₀/5
        Sierpinski: triangles 3ⁿ · area (3/4)ⁿA₀ · holes (3ⁿ − 1)/2 · perimeter 3s(3/2)ⁿ
        Tree: tips 2ⁿ · total 2ⁿ⁺¹ − 1
        Dimension: d = log N / log(1/r) · coastline: L(ε) = C·ε^(1−D)
        Handy logs: log 2 ≈ 0.301 · log 3 ≈ 0.477 · log 4 ≈ 0.602 · log 5 ≈ 0.699
        log 8 ≈ 0.903 · log 20 ≈ 1.301 · log(4/3) ≈ 0.125 · log(3/4) ≈ −0.125 · log 1.5 ≈ 0.176

Grab a pencil and paper — and sketch! Fractals make ten times more sense when you draw the stages. Start with the easy ones — they use the exact patterns from the lessons. The challenge section asks for proofs, multi-step chains, and a few problems with more than one good solution method — when you finish one, ask yourself: what would the OTHER approach look like? Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "What's the RULE — what does it do to the COUNT, and what does it do to the SIZE?"


🟢 EASY (Problems 1–60)

Problems 1–8 — Fractal or not? (Use the zoom test!) (Lesson 1)

  1. A fern leaf: every leaflet looks like a tiny copy of the whole leaf.
  2. A brick wall: the same brick repeats, again and again, all at the same size.
  3. A tree: every branch looks like a smaller tree.
  4. A perfect circle: zoom in, and the edge just looks flatter and flatter.
  5. A lightning bolt: every fork zigzags the way the whole bolt zigzags.
  6. A tiled floor: identical square tiles, side by side, all the same size.
  7. A coastline: bays within bays within bays, at every scale of map.
  8. True or false: to pass the zoom test, the copies must be SMALLER than the whole.

Problems 9–16 — What comes next? (Each is a geometric sequence — name the ratio too.) (Lesson 2)

  9. 2, 4, 8, 16, ___
  10. 3, 9, 27, ___
  11. 4, 16, 64, ___
  12. 1, 5, 25, ___
  13. 6, 12, 24, ___
  14. 2, 6, 18, ___
  15. 81, 27, 9, ___   (shrinking sequences are geometric too!)
  16. 64, 32, 16, ___

Problems 17–24 — Powers! Evaluate exactly. (Lesson 2)

  17. 2⁵
  18. 3⁴
  19. 4³
  20. 5³
  21. (1/2)⁴
  22. (1/3)³
  23. (4/3)²
  24. (3/4)³

Problems 25–32 — Fractal trees! (Doubling tree: every branch splits into 2. Tripling tree: splits into 3.) (Lesson 2)

  25. Doubling tree: tips at stage 4?
  26. Doubling tree: tips at stage 6?
  27. Tripling tree: tips at stage 3?
  28. Tripling tree: tips at stage 5?
  29. Doubling tree: TOTAL branches, stages 0 through 4 (1 + 2 + 4 + 8 + 16)?
  30. Doubling tree: total branches, stages 0 through 5?
  31. Tripling tree: total branches, stages 0 through 2?
  32. Tripling tree: total branches, stages 0 through 3 — use the series formula.

Problems 33–40 — The Koch snowflake! Start with a triangle with 3 sides of 1 cm each (perimeter 3 cm). (Lesson 3)

  33. How many pieces at stage 2? (Use count(n) = 3·4ⁿ.)
  34. How many pieces at stage 3?
  35. How long is each piece at stage 2?
  36. How long is each piece at stage 4?
  37. Perimeter at stage 1?
  38. Perimeter at stage 2?
  39. Perimeter at stage 3? (An improper fraction is fine.)
  40. Compute the stage-3 perimeter from the explicit formula P(n) = 3·(4/3)ⁿ and show it agrees with problem 39.

Problems 41–48 — The Sierpinski triangle! (Lesson 4)

  41. Solid triangles at stage 4?
  42. Solid triangles at stage 6?
  43. What fraction of the original area remains at stage 2?
  44. What fraction remains at stage 4?
  45. Total holes after stage 4? (Use H(n) = (3ⁿ − 1)/2.)
  46. Total holes after stage 5?
  47. Start with area 256. Solid area at stage 4?
  48. Same triangle: total HOLE area at stage 4? (Hint: original minus solid — complementary counting!)

Problems 49–54 — Series sums! (Lesson 2)

  49. 1 + 2 + 4 + 8 + 16
  50. 1 + 3 + 9 + 27
  51. 1 + 3 + 9 + 27 + 81 + 243
  52. 2 + 6 + 18 + 54
  53. 1 + 1/2 + 1/4 + 1/8 + ... (forever)
  54. 1/3 + 1/9 + 1/27 + ... (forever)

Problems 55–60 — Log warm-ups! (Find the exponent — no calculator needed.) (Lesson 5)

  55. log₂(8)
  56. log₂(32)
  57. log₃(81)
  58. log₁₀(1000)
  59. log₅(25)
  60. log₄(64)


🟡 INTERMEDIATE (Problems 61–85)

Problems 61–64 — Solve for the stage! (Work backwards through the formula.)

  61. A Sierpinski triangle has 729 solid triangles. Solve 3ⁿ = 729 for the stage n.
  62. A Koch snowflake has 3072 pieces. Solve 3·4ⁿ = 3072 for n.
  63. A doubling tree has 127 branches in total. Solve 2ⁿ⁺¹ − 1 = 127 for n.
  64. A Sierpinski triangle has 81/256 of its original area left. Solve (3/4)ⁿ = 81/256 for n.
      (Hint: write both the numerator and the denominator as fourth powers.)

Problems 65–68 — Koch perimeter, with muscle!

  65. Starting perimeter 3 cm. Find the stage-4 perimeter with the explicit formula.
      Give the exact fraction and a decimal approximation.
  66. Now start with a perimeter of 9 cm instead. Find the perimeter at stage 2.
      (It comes out clean!)
  67. Compute the stage-3 perimeter TWO ways: recursively (start at 3, multiply by 4/3
      three times) and explicitly (substitute into 3·(4/3)ⁿ). Show they agree, then say
      which method you'd prefer for stage 40 and why.
  68. Starting perimeter 3 cm. Find the FIRST stage at which the perimeter exceeds 20 cm.
      (a) Set up 3·(4/3)ⁿ > 20 and solve with logarithms. (b) Verify your answer by
      checking the stage before and the stage after directly.

Problems 69–72 — Sierpinski, deeper!

  69. Side length s = 1. Find the total perimeter at stage 3, using P(n) = 3s·(3/2)ⁿ.
  70. Explain why the Sierpinski perimeter must grow past every bound, using the ratio 3/2.
      (One or two sentences — what's special about that ratio?)
  71. Start with area 64. How much area has been REMOVED by stage 3?
      (Complementary counting: original minus remaining.)
  72. What is the FIRST stage at which less than 1% of the original area remains?
      (a) Set up (3/4)ⁿ < 0.01 and solve with logarithms — CAREFUL: log(3/4) is
      negative, so the inequality flips when you divide! (b) Check stages 16 and 17
      directly with the approximations (3/4)¹⁶ ≈ 0.0100 and (3/4)¹⁷ ≈ 0.0075.

Problems 73–76 — Series at work!

  73. Koch area: write the formula for the area ADDED at stage n, then evaluate it
      at stage 3 for A₀ = 81.
  74. Prove that the total area REMOVED from the Sierpinski triangle, over all stages,
      equals the whole original area A₀. (Sum the series removed(k) = (A₀/4)(3/4)ᵏ⁻¹.)
  75. Sum the infinite series 5 + 10/3 + 20/9 + 40/27 + ...  (Identify a and r first!)
  76. A fractal's piece counts form a geometric sequence: a·rⁿ. Stage 1 has 12 pieces
      and stage 3 has 48 pieces. (a) Set up two equations in a and r. (b) Divide them
      to find r. (c) Find a, and state the count at stage 0.

Problems 77–80 — Compute the dimension! (d = log N / log(1/r); use the handy logs list.)

  77. Koch edge: N = 4 copies at r = 1/3.
  78. Sierpinski triangle: N = 3 copies at r = 1/2.
  79. Cantor set: N = 2 copies at r = 1/3. (Your answer should land between 0 and 1!)
  80. Sierpinski CARPET: a square divided into a 3 × 3 grid, middle square removed —
      so N = 8 copies at r = 1/3.

Problems 81–85 — Word problems with teeth!

  81. A coastline has dimension D = 1.25. (a) If you halve your ruler, by what factor
      does the measured length grow? (b) You measured 1000 km with the big ruler —
      predict the measurement with the halved ruler. (Hint: factor = 2^(D−1), and
      2^0.25 ≈ 1.19.)
  82. The lung tree. Every airway splits into 2. (a) After 10 rounds of splitting,
      how many passage-ends are there? (b) Write the explicit formula for round n.
      (c) Why might nature build lungs this way?
  83. The coastline detectives. Maya measures a coast with a 10 km ruler: 600 km.
      Jonah uses a 1 km ruler: 900 km. Using L(ε) = C·ε^(1−D): (a) write the ratio
      L(1)/L(10) two ways — from the measurements and from the formula; (b) solve
      for the coast's dimension D (you'll need log 1.5 ≈ 0.176).
  84. Function composition. f(x) = (3/4)x is the Sierpinski area rule. (a) Compute
      f(64), f(f(64)), and f(f(f(64))) step by step. (b) Write the n-th composition
      fⁿ(x) as a single expression. (c) Check your expression against part (a) at n = 3.
  85. The patient gardener. g(x) = (4/3)x is the Koch perimeter rule applied to a
      snowflake with starting perimeter 9 cm. Find the smallest n for which
      gⁿ(9) > 50. (Compute (4/3)⁵ ≈ 4.21 and (4/3)⁶ ≈ 5.62 — then think.)


🔴 CHALLENGE (Problems 86–100)

  86. Prove it. Prove 1 + 2 + 4 + ... + 2ⁿ = 2ⁿ⁺¹ − 1 using the multiply-and-subtract
      trick, justifying every step in words. Then verify the formula at n = 4 by
      adding the terms directly.
  87. The 8/5 theorem. Starting from an equilateral triangle of side 1 (so
      A₀ = √3/4), derive the Koch snowflake's total area from scratch: count the
      bumps at stage n, find each bump's area, form the series, and sum it.
      Finish with the exact total area (a multiple of √3) and a decimal check.
  88. Cantor set, complete analysis. (a) List the total lengths at stages 1–4 as
      fractions. (b) What happens to the length and to the piece count as n → ∞?
      (c) Compute the dimension. (d) Explain the paradox in one sentence: how can
      infinitely many points remain when the total length is zero?
  89. Dimension detective. (a) Prove a square has dimension EXACTLY 2 using
      d = log 4/log 2 (no decimals — use a log law). (b) A shape is made of 9 copies
      at scale 1/3. Prove its dimension is EXACTLY 2, and name a shape it could be.
      (c) A mystery fractal is made of 5 copies at scale 1/2. Between which two
      whole numbers does its dimension lie? Give the decimal.
  90. The great perimeter race. Koch's perimeter multiplies by 4/3 per stage;
      Sierpinski's (with the same starting side) multiplies by 3/2 per stage.
      (a) Write the RATIO of the two perimeters at stage n as a single power.
      (b) Evaluate it at stage 4. (c) As n → ∞, which perimeter outruns the other,
      and why? (d) Both perimeters diverge — so what exactly does the ratio tell you?
  91. Not everything is geometric! A fractal artist builds a shape whose piece count
      does NOT multiply by the same ratio each stage. The counts at stages 1, 2, 3
      are 6, 11, 18, and they follow f(n) = an² + bn + c. (a) Set up a system of
      three equations in a, b, c. (b) Solve it by elimination, showing every step.
      (c) Check all three counts. (d) Compute the count at stage 4, and state one
      sentence on how this growth differs from a geometric sequence.
  92. Coastline inverse problem — two methods required. Maya measures 600 km with a
      10 km ruler; Jonah measures 900 km with a 1 km ruler. Predict the measurement
      with a 0.1 km ruler. Method 1: find the pattern in "ruler 10× finer." Method 2:
      use D from problem 83 and the formula L(ε) = C·ε^(1−D). Show both, get the same
      answer, and say which method generalizes to a 2.5 km ruler and why.
  93. Triangle census — casework! In a stage-3 Sierpinski triangle (starting side s),
      count ALL triangles — solid ones AND holes — organized by size. (a) How many of
      side s/8? (Careful: both solid triangles and stage-3 holes have that size!)
      (b) Sides s/4 and s/2? (c) Grand total? (d) What fraction of all triangles are
      solid? Give the percent.
  94. Complementary counting. A Sierpinski triangle starts with area 256. Find the
      smallest stage n at which the total HOLE area exceeds 200. (Hole area =
      256 − 256·(3/4)ⁿ. Set up the inequality, then test n = 5 and n = 6 exactly:
      (3/4)⁵ = 243/1024 and (3/4)⁶ = 729/4096.)
  95. The Menger sponge. Start with a cube. Divide it into a 3 × 3 × 3 grid of 27
      small cubes and remove 7 of them (the very center cube and the center cube of
      each face), leaving 20. Repeat inside every remaining cube, forever.
      (a) What is N, and what is r? (b) Compute the dimension. Between which two
      whole numbers does it lie? (c) Each stage keeps 20/27 of the volume — what
      happens to the volume in the limit? (d) Each stage keeps about 20/9 times the
      surface area (20 surviving faces at 1/9 the area, plus new interior walls) —
      what happens to the surface? (e) One sentence: why is "sponge" the perfect name?
  96. Invent-a-fractal — upgraded! Make up a rule: "every ___ becomes N copies at
      scale 1/r." (a) Write your rule. (b) Compute the piece count at stages 1, 2, 3.
      (c) Compute your fractal's dimension. (d) The area multiplier per stage is N·r²
      and the perimeter multiplier is N·r — compute both and decide: does your
      fractal's area grow, shrink, or stay the same? What about its perimeter?
      (A worked sample is in the answer key — but yours can be completely different!)
  97. The square-bump island. A Koch variant: divide every segment into thirds, and
      replace the middle third with THREE sides of a square pointing outward (up,
      across, down). Start with a square island of perimeter 4 km. (a) Into how many
      pieces does each segment turn, each of what length? (b) Piece count at stages 1
      and 2? (c) Perimeter at stages 1 and 2? (d) Compute this edge's dimension and
      compare with the ordinary Koch edge (1.262) — which coast is rougher, and how
      do you know?
  98. The boundary hunter. For a Sierpinski triangle, find the FIRST stage at which
      less than 0.1% of the original area remains. (a) Solve (3/4)ⁿ < 0.001 with
      logarithms. (b) The answer is a near thing — verify by checking the stage just
      below and just above, using (3/4)²⁴ ≈ 0.001003 and (3/4)²⁵ ≈ 0.000752.
      (c) One sentence: what does this teach about trusting rounded logs near a boundary?
  99. The folding strip — a baby dragon fractal. Fold a strip in half: 1 crease.
      Fold in half again (doubling over): 3 creases. A third fold: 7 creases.
      (a) Explain why fold number k presses in exactly 2ᵏ⁻¹ NEW creases (how many
      layers does it fold through?). (b) Use the series formula to write the total
      creases after n folds as a closed formula. (c) How many creases after 10 folds?
      (d) What is the first fold count giving more than 500 creases?
  100. The grand finale — the great race, full scorecard. (a) Koch perimeter
       multiplies by ___ each stage; is that number bigger or smaller than 1, and
       what happens to the perimeter? (b) Sierpinski area multiplies by ___ each
       stage; bigger or smaller than 1, and what happens to the area? (c) The
       Sierpinski triangle COUNT multiplies by 3 while each triangle's area
       multiplies by 1/4 — so total area multiplies by ___, and the race is decided
       by comparing 3 with ___. (d) The Sierpinski perimeter multiplies by 3/2 —
       so Sierpinski has infinite perimeter AND zero area. Explain in your own words
       how the SAME two numbers (count ×3, side ×1/2) produce opposite outcomes for
       perimeter and area. (e) Koch edge dimension ≈ 1.262, Sierpinski ≈ 1.585:
       which shape is "more of a surface," and what does that phrase mean precisely?


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — the zoom test (copies must shrink), the count-versus-size split (one multiplies, the other divides), the off-by-one in stage numbers, the series formula, the flipped dimension formula, or the convergent/divergent race.

Easy

  1–8:   fractal (leaflets are smaller copies)  ·  not a fractal (same-size repetition)
         fractal  ·  not a fractal (zooming shows a line, not a small circle)
         fractal  ·  not a fractal  ·  fractal (bays within bays, shrinking)
         true — repetition without shrinking is just a pattern

  9–16:  32 (r = 2)  ·  81 (r = 3)  ·  256 (r = 4)  ·  125 (r = 5)
         48 (r = 2)  ·  54 (r = 3)  ·  3 (r = 1/3 — dividing IS multiplying by a
         fraction)  ·  8 (r = 1/2)

  17–24: 32 (2·2·2·2·2)  ·  81 (3·3·3·3)  ·  64 (4·4·4)  ·  125 (5·5·5)
         1/16 (1/2⁴)  ·  1/27 (1/3³)  ·  16/9 (4²/3²)  ·  27/64 (3³/4³)

  25–32: 16 (2⁴)  ·  64 (2⁶)  ·  27 (3³)  ·  243 (3⁵)
         31 (= 2⁵ − 1)  ·  63 (= 2⁶ − 1)  ·  13 (1 + 3 + 9)
         40 (formula: (3⁴ − 1)/(3 − 1) = 80/2)

  33–40: 48 (3·4² = 3·16)  ·  192 (3·4³ = 3·64)  ·  1/9 cm ((1/3)²)
         1/81 cm ((1/3)⁴)  ·  4 cm (3·4/3)  ·  16/3 cm (3·16/9)
         64/9 cm (3·64/27)  ·  3·(4/3)³ = 3·64/27 = 192/27 = 64/9 ✓ agrees

  41–48: 81 (3⁴)  ·  729 (3⁶)  ·  9/16 ((3/4)²)  ·  81/256 ((3/4)⁴)
         40 ((3⁴ − 1)/2 = 80/2)  ·  121 ((3⁵ − 1)/2 = 242/2)
         81 (256·(3/4)⁴ = 256·81/256)  ·  175 (256 − 81, complementary counting)

  49–54: 31  ·  40  ·  364 (or (3⁶ − 1)/2 = 728/2)  ·  80 (a = 2, r = 3:
         2(3⁴ − 1)/(3 − 1) = 2·80/2)  ·  2 (a = 1, r = 1/2: 1/(1 − 1/2))
         1/2 (a = 1/3, r = 1/3: (1/3)/(1 − 1/3) = (1/3)/(2/3))

  55–60: 3 (2³ = 8)  ·  5 (2⁵ = 32)  ·  4 (3⁴ = 81)  ·  3 (10³ = 1000)
         2 (5² = 25)  ·  3 (4³ = 64)

Intermediate

  61. 3ⁿ = 729. Climb the powers: 3² = 9, 3³ = 27, 3⁴ = 81, 3⁵ = 243, 3⁶ = 729.
      So n = 6. (Log check: n = log 729/log 3 = 6.)
  62. 3·4ⁿ = 3072 → divide both sides by 3: 4ⁿ = 1024. Since 4⁵ = 4·4·4·4·4 = 1024,
      n = 5. (Handy fact: 4⁵ = (2²)⁵ = 2¹⁰ = 1024.)
  63. 2ⁿ⁺¹ − 1 = 127 → add 1 to both sides: 2ⁿ⁺¹ = 128 = 2⁷ → n + 1 = 7 → n = 6.
  64. (3/4)ⁿ = 81/256. Write 81 = 3⁴ and 256 = 4⁴, so (3/4)ⁿ = 3⁴/4⁴ = (3/4)⁴.
      Matching exponents: n = 4.
  65. P(4) = 3·(4/3)⁴ = 3·256/81 = 768/81 = 256/27 ≈ 9.48 cm.
  66. P(2) = 9·(4/3)² = 9·16/9 = 16 cm. Clean as promised!
  67. Recursive: 3 → 3·4/3 = 4 → 4·4/3 = 16/3 → 16/3·4/3 = 64/9.
      Explicit: 3·(4/3)³ = 3·64/27 = 192/27 = 64/9 ≈ 7.11 cm. ✓ Same.
      For stage 40 the explicit formula wins by a mile — one substitution instead
      of forty multiplications (and no chance to slip on step 31).
  68. (a) 3·(4/3)ⁿ > 20 → divide by 3: (4/3)ⁿ > 20/3 ≈ 6.67 → take logs:
      n·log(4/3) > log(6.67) → n > 0.824/0.125 ≈ 6.6 → smallest whole stage: n = 7.
      (b) Check: stage 6 gives 3·(4/3)⁶ ≈ 3·5.62 ≈ 16.9 cm < 20 — not yet.
      Stage 7 gives 3·(4/3)⁷ ≈ 3·7.49 ≈ 22.5 cm > 20. ✓ Answer: stage 7.
  69. P(3) = 3·1·(3/2)³ = 3·27/8 = 81/8 = 10.125 cm.
  70. The ratio 3/2 is GREATER than 1, so the powers (3/2)ⁿ grow without bound —
      (3/2)¹⁰ ≈ 57.7 already. Any fixed multiplier above 1, compounded forever,
      passes every number. The perimeter diverges.
  71. Remaining at stage 3: 64·(3/4)³ = 64·27/64 = 27. Removed: 64 − 27 = 37.
  72. (a) (3/4)ⁿ < 0.01 → take logs: n·log(3/4) < log(0.01) → divide by log(3/4),
      which is NEGATIVE, so flip the inequality: n > (−2)/(−0.125) = 16.0...
      precisely 2/0.12494 ≈ 16.01, so n = 17.
      (b) Check: (3/4)¹⁶ ≈ 0.0100 — still a hair ABOVE 1%; (3/4)¹⁷ ≈ 0.0075 — below.
      Answer: stage 17. The flip in (a) is the step everyone forgets!
  73. added(n) = (A₀/3)·(4/9)ⁿ⁻¹ (Lesson 3, step 4). At n = 3:
      added(3) = (A₀/3)·(4/9)² = (A₀/3)·(16/81) = 16A₀/243.
      With A₀ = 81: 16·81/243 = 16/3 ≈ 5.33 (since 81/243 = 1/3).
  74. removed(k) = 3ᵏ⁻¹·A₀/4ᵏ = (A₀/4)(3/4)ᵏ⁻¹ — a geometric series with
      a = A₀/4 and r = 3/4. Since |3/4| < 1 it converges:
      total = (A₀/4)/(1 − 3/4) = (A₀/4)/(1/4) = A₀.
      The entire original area is eventually removed — matching A(n) = (3/4)ⁿA₀ → 0.
  75. First term a = 5; ratio: (10/3)/5 = 2/3. Since |2/3| < 1:
      S = 5/(1 − 2/3) = 5/(1/3) = 15.
  76. (a) a·r = 12 and a·r³ = 48. (b) Divide the second by the first:
      r² = 4 → r = 2 (reject r = −2: counts are positive). (c) a = 12/2 = 6.
      Stage 0: 6 pieces. The counts go 6, 12, 24, 48.
  77. d = log 4/log 3 ≈ 0.602/0.477 ≈ 1.262. Between 1 and 2 — a very crinkly line.
  78. d = log 3/log 2 ≈ 0.477/0.301 ≈ 1.585. Between 1 and 2 — an almost-surface.
  79. d = log 2/log 3 ≈ 0.301/0.477 ≈ 0.631. Between 0 and 1 — structured dust.
  80. d = log 8/log 3 ≈ 0.903/0.477 ≈ 1.893. Between 1 and 2, and closer to 2
      than the Sierpinski triangle — the carpet is more fabric than holes.
  81. (a) Factor = 2^(D−1) = 2^0.25 ≈ 1.19. (b) 1000 × 1.19 ≈ 1190 km.
      (Derivation: L(ε/2)/L(ε) = (1/2)^(1−D) = 2^(D−1), as in Lesson 6.)
  82. (a) 2¹⁰ = 1024 passage-ends. (b) T(n) = 2ⁿ. (c) Fractal splitting packs a
      huge number of passages — a huge surface — into a tiny space, so oxygen
      reaches the blood quickly. Packing a lot into a little!
  83. (a) From measurements: L(1)/L(10) = 900/600 = 3/2. From the formula:
      L(1)/L(10) = (1/10)^(1−D) = 10^(D−1). (b) So 10^(D−1) = 1.5; take log₁₀:
      D − 1 = log 1.5 ≈ 0.176; D ≈ 1.176 ≈ 1.18. This coast is slightly rougher
      than a smooth curve (D = 1) but gentler than Britain (1.25).
  84. (a) f(64) = 48; f(48) = 36; f(36) = 27. (b) fⁿ(x) = (3/4)ⁿ·x — each
      composition multiplies by one more 3/4. (c) Check n = 3: (3/4)³·64 =
      (27/64)·64 = 27 ✓ matches.
  85. Need 9·(4/3)ⁿ > 50, i.e. (4/3)ⁿ > 50/9 ≈ 5.56. Given (4/3)⁵ ≈ 4.21 — too
      small (9·4.21 ≈ 37.9) — and (4/3)⁶ ≈ 5.62 — enough (9·5.62 ≈ 50.6 > 50).
      Smallest n = 6. (Log route: n > log(50/9)/log(4/3) ≈ 0.745/0.125 ≈ 5.96.)

Challenge

  86. Let S = 1 + 2 + 4 + ... + 2ⁿ (name the sum).
      Then 2S = 2 + 4 + ... + 2ⁿ + 2ⁿ⁺¹ (multiplied both sides by 2; each term shifts).
      Subtract: 2S − S = 2ⁿ⁺¹ − 1 (every middle term cancels: 2−2, 4−4, ..., 2ⁿ−2ⁿ).
      So S = 2ⁿ⁺¹ − 1. Verify n = 4: 1 + 2 + 4 + 8 + 16 = 31 and 2⁵ − 1 = 31. ✓
  87. Bumps at stage n: one per existing segment = 3·4ⁿ⁻¹.
      Side of each stage-n bump: 1/3ⁿ (starting side 1).
      Area of each: A₀/9ⁿ = (√3/4)/9ⁿ (area scales with the square of the side).
      Added at stage n: 3·4ⁿ⁻¹ · A₀/9ⁿ = (A₀/3)(4/9)ⁿ⁻¹.
      Sum forever (a = A₀/3, r = 4/9 < 1): (A₀/3)/(1 − 4/9) = (A₀/3)(9/5) = 3A₀/5.
      Total: A₀ + 3A₀/5 = 8A₀/5.
      With A₀ = √3/4: total = (8/5)(√3/4) = 2√3/5 ≈ 2·1.732/5 ≈ 0.693.
      Decimal check: the original triangle is ≈ 0.433, and 0.693 is indeed less
      than double it — as the theorem demands.
  88. (a) 2/3, 4/9, 8/27, 16/81 — multiply by 2/3 each stage.
      (b) Length (2/3)ⁿ → 0 (ratio < 1); pieces 2ⁿ → ∞ (ratio > 1).
      (c) d = log 2/log 3 ≈ 0.301/0.477 ≈ 0.631.
      (d) The endpoints of every removed interval survive forever — infinitely
      many points — but they form no intervals, so the total length is zero:
      the set is all dust, no rope.
  89. (a) d = log 4/log 2 = log(2²)/log 2 = 2·log 2/log 2 = 2 (Law 2, then cancel).
      (b) d = log 9/log 3 = log(3²)/log 3 = 2·log 3/log 3 = 2 — exactly 2. The
      shape could be an ordinary square divided into a 3×3 grid: 9 third-size
      copies rebuild a 2-dimensional surface.
      (c) d = log 5/log 2 ≈ 0.699/0.301 ≈ 2.32 — between 2 and 3 dimensions.
  90. (a) Ratio = (3/2)ⁿ/(4/3)ⁿ = ((3/2)·(3/4))ⁿ = (9/8)ⁿ (dividing powers with
      the same exponent = one power of the quotient).
      (b) (9/8)⁴ = 6561/4096 ≈ 1.60 — Sierpinski's perimeter is already 1.6 times
      Koch's at stage 4.
      (c) Since 9/8 > 1, the ratio (9/8)ⁿ → ∞: Sierpinski's perimeter outruns
      Koch's. Its stage multiplier 1.5 beats Koch's 1.333..., and the gap compounds.
      (d) Both grow without bound — "infinite" alone doesn't compare them. The ratio
      measures HOW FAST: Sierpinski's edge diverges strictly faster, by an
      ever-widening factor.
  91. (a) f(1) = a + b + c = 6; f(2) = 4a + 2b + c = 11; f(3) = 9a + 3b + c = 18.
      (b) Subtract eq1 from eq2: 3a + b = 5 (the c's cancel).
          Subtract eq2 from eq3: 5a + b = 7.
          Subtract those: 2a = 2, so a = 1.
          Back-substitute: 3(1) + b = 5 → b = 2.
          Back-substitute: 1 + 2 + c = 6 → c = 3.
      (c) Check: f(1) = 1 + 2 + 3 = 6 ✓; f(2) = 4 + 4 + 3 = 11 ✓;
          f(3) = 9 + 6 + 3 = 18 ✓.
      (d) f(4) = 16 + 8 + 3 = 27. Difference: a geometric sequence has a constant
      RATIO between terms; this one has a constant SECOND DIFFERENCE (the gaps
      5, 7, 9 grow by 2) — quadratic growth, much slower than exponential.
  92. Method 1 (pattern): going 10× finer multiplied the answer by 900/600 = 1.5.
      The next 10× finer step (1 km → 0.1 km) does the same: 900 × 1.5 = 1350 km.
      Method 2 (formula): D ≈ 1.176 from problem 83, so 1 − D ≈ −0.176 and
      L(0.1) = L(1)·(0.1/1)^(1−D) = 900·(0.1)^(−0.176) = 900·10^0.176 ≈ 900·1.5
      = 1350 km. ✓ Same answer both ways.
      For a 2.5 km ruler the pattern method stalls (2.5 is not a 10× step from our
      data), but the formula handles any ε: L(2.5) = 900·(2.5)^(−0.176). The formula
      generalizes; the pattern is just the formula in disguise.
  93. (a) Side s/8: 27 solid + 9 stage-3 holes = 36 triangles.
      (b) Side s/4: 3 holes (cut at stage 2). Side s/2: 1 hole (cut at stage 1).
      (c) Grand total: 36 + 3 + 1 = 40 triangles. (Lovely echo: 40 = 1 + 3 + 9 + 27,
      the tripling-tree total!)
      (d) Solid fraction: 27/40 = 67.5%.
  94. Hole area = 256 − 256·(3/4)ⁿ > 200 → 256·(3/4)ⁿ < 56 → (3/4)ⁿ < 56/256 = 0.21875.
      Test n = 5: (3/4)⁵ = 243/1024 ≈ 0.237 > 0.21875 — hole area ≈ 256·0.763 ≈ 195.2,
      not enough. Test n = 6: (3/4)⁶ = 729/4096 ≈ 0.178 < 0.21875 — hole area ≈
      256·0.822 ≈ 210.4 > 200. ✓ Smallest n = 6.
  95. (a) N = 20 copies, r = 1/3. (b) d = log 20/log 3 ≈ 1.301/0.477 ≈ 2.73 —
      between 2 and 3 dimensions! (c) Volume ×20/27 each stage: (20/27)ⁿ → 0 since
      20/27 < 1 — the solid melts away. (d) Surface multiplier ≈ 20/9 > 1, plus new
      interior walls every stage — the surface area diverges to infinity.
      (e) It ends with infinite surface wrapped around no volume at all: all hole,
      no cube — the perfect sponge.
  96. Worked sample: "every square becomes 5 squares at scale 1/3" (the corners and
      the center of a 3×3 grid).
      (b) Counts: 5, 25, 125 — multiplying by 5 (powers of 5).
      (c) d = log 5/log 3 ≈ 0.699/0.477 ≈ 1.465 — between 1 and 2.
      (d) Area multiplier: N·r² = 5·(1/9) = 5/9 < 1 — area shrinks to zero.
      Perimeter multiplier: N·r = 5/3 > 1 — perimeter diverges.
      The general recipe: dimension log N/log(1/r); area lives or dies by N·r²
      versus 1; perimeter lives or dies by N·r versus 1. If your rule's N and r
      make the count grow geometrically, you built a fractal worth drawing!
  97. (a) Each segment becomes 5 pieces (first third, up, across, down, last
      third), each 1/3 as long.
      (b) Stage 1: 4 sides × 5 = 20 pieces. Stage 2: 20 × 5 = 100 (count = 4·5ⁿ).
      (c) Perimeter multiplies by 5·(1/3) = 5/3 each stage: 4 → 20/3 km ≈ 6.67 km
      → 100/9 km ≈ 11.1 km (P(n) = 4·(5/3)ⁿ).
      (d) d = log 5/log 3 ≈ 1.465 > 1.262 (Koch). The square bump packs 5 pieces
      into the same shrink factor where Koch packs 4 — a rougher coast by exactly
      the dimension's verdict.
  98. (a) (3/4)ⁿ < 0.001 → n·log(3/4) < log(0.001) → divide by the NEGATIVE
      log(3/4) and flip: n > (−3)/(−0.12494) ≈ 24.01 → smallest whole stage n = 25.
      (b) Check: (3/4)²⁴ ≈ 0.001003 — still a whisker ABOVE 0.001; (3/4)²⁵ ≈
      0.000752 — below. ✓ Stage 25.
      (c) Rounded logs said "24.01" — dangerously close to 24. Near a boundary,
      verify the neighboring integers exactly; rounding can flip a borderline answer.
  99. (a) After k − 1 folds there are 2ᵏ⁻¹ layers stacked; fold k presses one new
      crease through every layer, so it creates 2ᵏ⁻¹ new creases.
      (b) Total = 1 + 2 + 4 + ... + 2ⁿ⁻¹ = (2ⁿ − 1)/(2 − 1) = 2ⁿ − 1 creases.
      (c) n = 10: 2¹⁰ − 1 = 1023 creases.
      (d) Need 2ⁿ − 1 > 500 → 2ⁿ > 501. Since 2⁸ = 256 (too small) and
      2⁹ = 512, the answer is fold 9 (511 creases).
  100. (a) 4/3 — bigger than 1 — so the perimeter diverges: it grows past every
      number. (b) 3/4 — smaller than 1 — so the area shrinks toward zero.
      (c) 3 × 1/4 = 3/4 — the race is decided by comparing 3 with 4: the
      quartering beats the tripling, so area dies.
      (d) Perimeter weighs count against LENGTH: 3 copies at 1/2 length give
      3·(1/2) = 3/2 > 1 — the tripling beats the halving, so perimeter explodes.
      Area weighs count against AREA: 3 copies at 1/4 area give 3/4 < 1 — the
      quartering beats the tripling, so area vanishes. Same two numbers (×3 count,
      ×1/2 side); perimeter divides by 2, area divides by 4. One inequality each
      way decides each race.
      (e) Sierpinski (1.585) is "more of a surface" than the Koch edge (1.262) —
      precisely: its self-similarity dimension is closer to 2, the dimension of a
      true surface, while Koch's is closer to 1, the dimension of a line.
      Dimensions let you RANK roughness — that's the whole point of computing them.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you truly understand fractal geometry — how one small rule, repeated forever, builds infinite detail; how geometric sequences and series turn that rule into exact formulas; how an edge can diverge to infinity while an area converges to 8/5 or melts to zero; how logarithms reveal dimensions hiding between the whole numbers; and why ferns, lightning, lungs, and coastlines all follow the same secret recipe. The next time you see a branching tree or a zigzag of lightning, zoom in with your mind's eye: smaller copies, all the way down — and now you can measure them. Great work!
