Linear Functions — The Complete Honors Lesson
═════════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        y = 2x + 3
        input x = 4  →  output y = 11
        slope 2, start 3  →  one perfectly straight line

Those three lines are a linear function in action — and by the end of this lesson you will not just recognize one, you will be able to build it from almost any clue (two points, one point plus a slope, a table, a story), flip it backwards, shift it around the plane, chain it together with other functions, and find exactly where two of them meet. That's the honors-level superpower: the equation y = mx + b stops being a formula you memorize and becomes a sentence you can read.

Why do people care? Because linear functions are everywhere money, time, and growth meet: saving $3 per week, a taxi charging $2 per block, a sequence climbing 5, 8, 11, 14. Once you understand them deeply, you can predict the future ("when will my savings reach $25?"), run time backwards ("when was the account empty?"), and find the exact instant two rival plans tie. Competition math loves these ideas too — AMC-style problems turn meeting points, parallel and perpendicular slopes, and chained functions into beautiful puzzles.

You already know the most important tool: the Golden Rule from Algebraic Equations (whatever you do to one side, do to the other). We'll use it constantly — this time to run functions backwards, to build equations from clues, and even to PROVE things.

In this lesson, you will:

  1. Learn what a function is — and meet the official notation f(x)
  2. Chain two machines together: composition, where slopes multiply
  3. Read tables with constant differences — and discover arithmetic sequences
  4. Graph lines, find both intercepts, and test graphs with vertical lines
  5. Prove that a line's slope is the same no matter which two points you pick
  6. Master parallel and perpendicular slopes (with the reason they work)
  7. Build equations three ways: slope-intercept, point-slope, standard form
  8. Shift, flip, and invert functions — transformations and f⁻¹(x)
  9. Solve systems: where lines meet, and the three fates of two lines
 10. Learn the common mistakes so you never make them
 11. Practice with 100 problems, from warm-ups to genuine brain-benders!

How to use this lesson: Read the sections in order — every idea is built from the one before it, and every worked example shows EVERY step with its reason. Take your time, and try every "Your Turn" box with a pencil and paper before peeking. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: What Is a Function? — Machines and f(x)
─────────────────────────────────────────────

📌 Key idea of this section:

        A function is a rule: put a number in, get exactly ONE number out.
        We name the machine f and write f(x) for "the output when x goes in."

Imagine a machine with a hopper on top and a chute on the bottom. You drop a number in the top, the machine follows its recipe, and out comes an answer. That machine is a function.

Here's a machine with the recipe "double it, then add 1":

        drop in 0 → out comes 1
        drop in 1 → out comes 3
        drop in 2 → out comes 5
        drop in 3 → out comes 7

The golden property of every function: each input gets exactly ONE output. Drop in 3 a hundred times, and you get 7 a hundred times. The machine never changes its mind.

The vending machine test

A good vending machine is a function: press D4, get the pretzels — every time. A broken machine that sometimes gives pretzels and sometimes cookies for the same button is NOT a function, because one input gives different outputs. One input, one output — that's the law.

The official notation: f(x)

Writing "drop in 3, out comes 7" gets tiring, so mathematicians name the machine (usually f, sometimes g or h) and write:

        f(x) = 2x + 1

Read it "f of x equals 2x + 1." It means: the machine f runs the recipe "double the input, then add 1." Then f(4) means "the output when 4 goes in." Watch every step:

        Step 1: f(4) = 2 × 4 + 1      (replace every x in the recipe with 4)
        Step 2: f(4) = 8 + 1          (multiply first — order of operations)
        Step 3: f(4) = 9              (add)

Negative inputs are welcome too. Find f(−1):

        Step 1: f(−1) = 2 × (−1) + 1  (replace x with −1 — use parentheses!)
        Step 2: f(−1) = −2 + 1        (2 × (−1) = −2)
        Step 3: f(−1) = −1            (climb from −2 up by 1)

Two more vocabulary words you'll meet everywhere:

        The DOMAIN of a function is the set of all allowed inputs.
        The RANGE is the set of all outputs it can actually produce.

For f(x) = 2x + 1, any number can be doubled and incremented, so the domain is all real numbers. And any target y can actually be produced (we'll prove this in Lesson 6 by running the machine backwards), so the range is also all real numbers. Compare with the flat machine f(x) = 4: its range is just the single number 4, because it only ever says "4."

✏️ Your Turn

Let f(x) = 3x − 2. Find f(4) and f(−1), showing each step.

Answer: f(4) = 3 × 4 − 2 = 12 − 2 = 10. And f(−1) = 3 × (−1) − 2 = −3 − 2 = −5 (from −3, subtract 2 more). The machine always triples the input, then subtracts 2.


─────────────────────────────────────────────
Lesson 2: Chained Machines — Composition of Functions
─────────────────────────────────────────────

📌 Key idea of this section:

        f(g(x)) means: run g FIRST, then feed its output into f.
        Read it inside-out. When linear machines chain, their slopes MULTIPLY.

What happens if you connect two machines in a row — the chute of g pouring into the hopper of f? That chained machine is called the composition of f and g, written f(g(x)) or (f ∘ g)(x). The one rule you must remember: the inside machine runs first.

Let's set up two machines and watch closely:

        f(x) = 2x + 1        (double, add 1)
        g(x) = 3x − 2        (triple, subtract 2)

Worked example 1 — a number through the chain. Find f(g(2)):

        Step 1: g(2) = 3 × 2 − 2        (inside machine g runs first)
        Step 2: g(2) = 6 − 2 = 4        (multiply, then subtract)
        Step 3: f(g(2)) = f(4)          (feed g's output into f)
        Step 4: f(4) = 2 × 4 + 1 = 9    (run f's recipe on 4)

So f(g(2)) = 9. The number 2 went into g, came out as 4, went into f, came out as 9.

Worked example 2 — the chain's own formula. What recipe does the chained machine f(g(x)) follow?

        Step 1: f(g(x)) = 2 × g(x) + 1      (f doubles ITS input, whatever it is)
        Step 2: f(g(x)) = 2(3x − 2) + 1     (g(x) IS 3x − 2 — substitute it in)
        Step 3: f(g(x)) = 6x − 4 + 1        (distribute: 2×3x = 6x, 2×(−2) = −4)
        Step 4: f(g(x)) = 6x − 3            (combine: −4 + 1 = −3)

Test drive with x = 2: 6 × 2 − 3 = 12 − 3 = 9 ✅ — matches example 1, as it must.

Worked example 3 — the OTHER order. Find g(f(x)):

        Step 1: g(f(x)) = 3 × f(x) − 2      (g triples ITS input, then takes 2)
        Step 2: g(f(x)) = 3(2x + 1) − 2     (substitute f(x) = 2x + 1)
        Step 3: g(f(x)) = 6x + 3 − 2        (distribute: 3×2x = 6x, 3×1 = 3)
        Step 4: g(f(x)) = 6x + 1            (combine: 3 − 2 = 1)

Look carefully: f(g(x)) = 6x − 3 but g(f(x)) = 6x + 1. Different recipes! Composition order matters. But notice something beautiful: both chains have slope 6, and 6 = 2 × 3 — the two slopes multiplied. That always happens:

        Chain slope = (slope of f) × (slope of g)

Why? If g multiplies every step by 3 and then f multiplies every result by 2, one step of x grows the final output by 3 × 2 = 6. (We'll prove it in the challenge problems — problem 78 turns this into a detective puzzle.)

✏️ Your Turn

With f(x) = 4x − 3 and g(x) = x + 5, find f(g(2)). Then find the formula for f(g(x)) and check your number with it.

Answer: g(2) = 2 + 5 = 7; f(7) = 4 × 7 − 3 = 28 − 3 = 25. Formula: f(g(x)) = 4(x + 5) − 3 = 4x + 20 − 3 = 4x + 17. Check: 4 × 2 + 17 = 25 ✅. Note the chain slope is 4 × 1 = 4 — g's slope is the hidden 1 in front of x.


─────────────────────────────────────────────
Lesson 3: Tables, Constant Steps, and Arithmetic Sequences
─────────────────────────────────────────────

📌 Key idea of this section:

        LINEAR means equal steps: whenever x grows by the same amount,
        y grows by the same amount. That constant ratio Δy ÷ Δx IS the slope.
        (Δ is the Greek letter delta — mathematicians write Δy for "change in y.")

A function machine keeps a diary called an input-output table. Here's the diary of y = 2x + 3, with the y-steps written in:

        x:   0   1   2   3   4
        y:   3   5   7   9  11
        Δy:     +2  +2  +2  +2

Equal x-steps (each +1) produce equal y-steps (each +2). That constant-step pattern is the fingerprint of a linear function, and the step size 2 is the slope.

The detective game, upgraded

The fun version is the reverse: you see the diary but NOT the recipe. Here's a table with a twist — the x's do NOT step by 1:

        x: 1   5   9   13
        y: 2   8  14   20

        Step 1: measure both step sizes. Δy = 8 − 2 = 6 each time, and
                Δx = 5 − 1 = 4 each time. Constant steps on both sides: linear!
        Step 2: slope = Δy ÷ Δx = 6 ÷ 4 = 3/2.
                (Not 6! Always divide the y-change by the x-change.)
        Step 3: so the rule is y = (3/2)x + b, with b unknown. Use ANY row
                to find b — pick x = 1, y = 2:
                    2 = (3/2) × 1 + b     (the row must fit the rule)
                    2 = 3/2 + b
                    b = 2 − 3/2 = 1/2     (subtract 3/2 from both sides)
        Step 4: the rule is y = (3/2)x + 1/2.
        Step 5: test drive on a row you DIDN'T use: x = 9 gives
                (3/2) × 9 + 1/2 = 27/2 + 1/2 = 28/2 = 14 ✅
                A rule that fails even one row is a wrong rule — send it back!

Arithmetic sequences: linear functions in disguise

Look at this list, where each term is the previous one plus 4:

        7, 11, 15, 19, ...

A list with a constant jump is called an arithmetic sequence, and the jump is called the common difference. Here's the secret: an arithmetic sequence IS a linear function, where the input is the position number n:

        position n:   1   2   3   4
        term a(n):    7  11  15  19

The y-steps are 4 per n-step of 1, so the slope is 4 — the common difference IS the slope. Walk the table back to n = 0: a(0) = 7 − 4 = 3. So:

        a(n) = 4n + 3

You may also meet the classic form a(n) = a₁ + (n − 1)d, where a₁ is the first term and d is the common difference. Both forms are the same machine:

        a(n) = 7 + (n − 1) × 4
             = 7 + 4n − 4        (distribute the 4: 4×n and 4×(−1))
             = 4n + 3            (combine: 7 − 4 = 3) — same rule!

Predict far ahead: a(10) = 4 × 10 + 3 = 43, and a(100) = 403. No counting on fingers needed — that's the power of having the rule.

The not-linear alarm

Check this table: x: 0, 1, 2, 3 and y: 1, 3, 7, 13. The y-steps are 2, 4, 6 — GROWING steps. No constant slope exists, so no linear rule fits. (The hidden rule is y = x² + x + 1 — a squared term always bends the steps. That's a story for another lesson.)

✏️ Your Turn

Write the rule for the arithmetic sequence 9, 13, 17, 21, ... as a function of n, then find a(10).

Answer: common difference d = 4, so slope 4. Walk back: a(0) = 9 − 4 = 5, so a(n) = 4n + 5. Then a(10) = 4 × 10 + 5 = 45. Test drive: a(1) = 9 ✅, a(4) = 21 ✅.


─────────────────────────────────────────────
Lesson 4: Graphs — Straight Lines, Intercepts, and the Vertical Line Test
─────────────────────────────────────────────

📌 Key ideas of this section:

        Every row of the table is a point (x, y). For a linear rule,
        the points line up PERFECTLY — "linear" literally means "line."
        y-intercept: where the line crosses the y-axis (set x = 0).
        x-intercept: where the line crosses the x-axis (set y = 0).

A quick coordinates refresher: a point like (2, 5) is an address. The first number says how far to run across (that's x), the second says how high to climb (that's y). Run first, then climb.

Take the table of y = 2x + 1:

        x: 0  1  2  3
        y: 1  3  5  7

Each row becomes a point: (0, 1), (1, 3), (2, 5), (3, 7). Plot them:

        y
      7 |      ●
      6 |
      5 |    ●
      4 |
      3 |  ●
      2 |
      1 |●
      0 +--------> x
         0 1 2 3

The four points fall on one perfectly straight line, like buttons on a ruler. That ALWAYS happens with rules of the shape y = (number) × x + (number) — it's exactly why they're called linear. A handy shortcut: since the answer is always a straight line, TWO points are enough to draw the whole thing. Plot two, lay a ruler through them, done. (Plot a third as a safety check — if it misses the ruler, something slipped.)

The vertical line test

Here's a one-glance test for whether a PICTURE shows a function: a graph is the graph of a function if and only if every vertical line hits it at most once. Why? A vertical line is an x-value. If some vertical line hits the graph twice, that one input x has two different outputs — breaking the one-output law of Lesson 1. Every slanted or flat straight line passes. But watch what happens below with a vertical line itself!

The two intercepts

Two points draw a line, and the two easiest points to find are where the line crosses the axes:

        The y-intercept is where the line meets the y-axis.
        The whole y-axis is exactly the line x = 0, so: set x = 0.
        The x-intercept is where the line meets the x-axis.
        The whole x-axis is exactly the line y = 0, so: set y = 0.

Worked example — find both intercepts of y = 2x − 6:

        y-intercept: set x = 0.
                y = 2 × 0 − 6 = −6.      Point (0, −6).
        x-intercept: set y = 0.
                0 = 2x − 6               (y = 0 means "on the x-axis")
                6 = 2x                   (add 6 to both sides)
                3 = x                    (divide both sides by 2)
                Point (3, 0).

Two points, one ruler — you've drawn the entire line. Notice the y-intercept −6 is just the b in y = mx + b, but the x-intercept 3 had to be SOLVED for. That little solve is the Golden Rule again.

Flat lines and vertical lines

The rule y = 4 gives outputs 4, 4, 4, 4 — a flat horizontal line. Its slope is 0 (rise 0 ÷ any run = 0), and it IS a function: every input gets the one output 4.

The picture x = 4 is a vertical line. Two things go wrong at once: the run between any two of its points is 0, and slope = rise ÷ 0 is illegal (division by zero is never allowed), so its slope is UNDEFINED — not zero, undefined. And it fails the vertical line test: the input 4 has infinitely many outputs. So x = 4 is a line, but NOT a function. Keep both facts!

A word from history

Turning algebra into pictures is about 400 years old, credited to the French philosopher René Descartes. Legend says he was lying in bed watching a fly crawl on the ceiling when he realized he could pin down its exact position with two numbers: distance from one wall, distance from the other. That's why coordinates are officially "Cartesian" — of Descartes. Every graph in this lesson is his fly on the ceiling.

✏️ Your Turn

Find both intercepts of y = 3x + 12, showing every step.

Answer: y-intercept: x = 0 gives y = 12 → point (0, 12). x-intercept: 0 = 3x + 12 → 3x = −12 (subtract 12) → x = −4 (divide by 3) → point (−4, 0). A negative x-intercept just means the line crosses the x-axis LEFT of zero.


─────────────────────────────────────────────
Lesson 5: Slope — The Deep Dive (with a Real Proof)
─────────────────────────────────────────────

📌 Key ideas of this section:

        slope = rise ÷ run = Δy ÷ Δx
        Through (x₁, y₁) and (x₂, y₂):  slope = (y₂ − y₁) ÷ (x₂ − x₁)
        Sign: + climbs, − falls, 0 flat. Steepness = |m| (size, ignoring sign).

You know slope as "how much y grows per step of x." Now let's go one level deeper: why can we talk about THE slope of a line, when a line has infinitely many pairs of points to choose from? Time for your first real proof in this course — with every step justified.

Proof: every pair of points on y = mx + b gives slope m

        Claim. Pick any two different x-values x₁ and x₂ on the line
        y = mx + b. The slope between the two points is always m.

        Step 1: the two points are (x₁, mx₁ + b) and (x₂, mx₂ + b).
                (Reason: "on the line" means their y equals mx + b.)
        Step 2: rise = (mx₂ + b) − (mx₁ + b)
                (Reason: rise is the change in y, second minus first.)
        Step 3: rise = mx₂ − mx₁
                (Reason: +b − b = 0 — the b's cancel.)
        Step 4: rise = m(x₂ − x₁)
                (Reason: factor out the shared m — distributive rule backwards.)
        Step 5: run = x₂ − x₁
                (Reason: run is the change in x.)
        Step 6: slope = m(x₂ − x₁) ÷ (x₂ − x₁) = m
                (Reason: rise ÷ run, then cancel — legal because x₂ ≠ x₁,
                so we're never dividing by zero.)  ■

That little square ■ means "proof complete." What we just proved: the slope doesn't depend on which window you look through. Zoom in, zoom out — same steepness. That's what makes the line straight, and it's the reason "the slope of the line" is a legal phrase at all.

Parallel lines

        Two DIFFERENT lines are parallel (never meet) exactly when
        their slopes are equal.

        Why equal slopes never meet: try to find a meeting point of
        y = mx + b₁ and y = mx + b₂ by setting them equal:
                mx + b₁ = mx + b₂
                b₁ = b₂        (subtract mx from both sides — the slopes cancel!)
        If b₁ ≠ b₂, that's impossible → no x works → the lines never meet.
        If b₁ = b₂, it was the same line twice — they "meet" everywhere.

Perpendicular lines

        Two lines are perpendicular (meet at 90°) exactly when their slopes
        are negative reciprocals: m and −1/m. Equivalently: the slopes
        multiply to −1.

        Why the negative reciprocal: a slope-m line marches "over 1, up m" —
        picture that as an arrow. Rotate the arrow a quarter-turn (90°):
        the rotation rule is (over, up) → (−up, over), so "over 1, up m"
        becomes "over −m, up 1." The rotated line's slope is
        rise ÷ run = 1 ÷ (−m) = −1/m.
        Check the product: m × (−1/m) = −1 ✅.

        Example: perpendicular to slope 3 is slope −1/3.
        Perpendicular to slope −2/5 is slope 5/2 (flip AND change sign —
        two negatives make it positive). Check: (−2/5) × (5/2) = −1 ✅.

Worked example — one line, three questions

The line through (1, 2) and (5, 8):

        Its slope:  rise = 8 − 2 = 6, run = 5 − 1 = 4, slope = 6/4 = 3/2.
        Any PARALLEL line has slope 3/2 (same climb rate, never meets it).
        Any PERPENDICULAR line has slope −2/3 (negative reciprocal).
        Check: (3/2) × (−2/3) = −6/6 = −1 ✅.

One more refinement: steepness is |m|, the size of the slope ignoring its sign. Slopes 5 and −5 are equally steep — one climbs, one dives. And fraction slopes are gentle: slope 1/2 means "up 1 for every 2 over," a wheelchair ramp next to slope 5's staircase.

✏️ Your Turn

For the line through (0, 1) and (4, 5): find its slope, the slope of any parallel line, and the slope of any perpendicular line.

Answer: rise = 5 − 1 = 4, run = 4 − 0 = 4, slope = 4/4 = 1. Parallel slope: 1. Perpendicular slope: −1 (the negative reciprocal of 1 is −1/1 = −1). Check: 1 × (−1) = −1 ✅.


─────────────────────────────────────────────
Lesson 6: Building Equations — The Three-Form Toolkit
─────────────────────────────────────────────

📌 Key ideas of this section:

        slope-intercept form:  y = mx + b           (slope + y-intercept)
        point-slope form:      y − y₁ = m(x − x₁)   (slope + ANY one point)
        standard form:         Ax + By = C          (tidy; great for intercepts)
        All three describe the same line — learn to move between them.

Form 1: slope-intercept, y = mx + b

You know this one: m is the slope, b is the y-intercept (the head start, the value when x = 0). A plant that starts at 5 cm and grows 2 cm per week is y = 2x + 5. Instant reading: how fast, and from where.

Form 2: point-slope, y − y₁ = m(x − x₁)

What if you know the slope and a point that is NOT the y-intercept — say slope 2 through (3, 8)? Here's the derivation, one step at a time:

        Step 1: the point (3, 8) and ANY other point (x, y) on the line
                must have slope 2 between them:
                        (y − 8) ÷ (x − 3) = 2
                (Reason: Lesson 5's proof — every pair of points on the
                line gives the same slope.)
        Step 2: y − 8 = 2(x − 3)
                (Reason: multiply both sides by (x − 3), the Golden Rule.)

That last line is point-slope form: y − y₁ = m(x − x₁), where (x₁, y₁) is the known point. It says "the line through (x₁, y₁) with slope m" in one move. To get slope-intercept form, just unwrap it:

        Step 3: y − 8 = 2x − 6      (distribute the 2: 2×x and 2×(−3))
        Step 4: y = 2x + 2          (add 8 to both sides: −6 + 8 = 2)
        Test drive: does (3, 8) fit? 2 × 3 + 2 = 8 ✅

Two points, no given slope? Find the slope first — you know how:

        Line through (1, 3) and (4, 9):
        Step 1: slope = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2.   (rise ÷ run)
        Step 2: point-slope with (1, 3): y − 3 = 2(x − 1).
        Step 3: y = 2x − 2 + 3 = 2x + 1.                  (distribute, add 3)
        Step 4: test BOTH points: 2×1+1 = 3 ✅  2×4+1 = 9 ✅
        (Using the OTHER point in step 2 — y − 9 = 2(x − 4) — simplifies
        to the very same y = 2x + 1. Either anchor works. Try it!)

Form 3: standard form, Ax + By = C

Sometimes the tidiest way to write a line is with x and y on the same side, like 3x + 4y = 12. That's standard form. Converting from slope-intercept:

        y = 2x + 1
        −2x + y = 1        (subtract 2x from both sides)
        2x − y = −1        (multiply both sides by −1 — prettier with +2x)

Standard form has two superpowers. First, the cover-up method for intercepts — each intercept needs only one term:

        3x + 4y = 12
        x-intercept (set y = 0):  3x = 12 → x = 4.   Point (4, 0).
        y-intercept (set x = 0):  4y = 12 → y = 3.   Point (0, 3).

Second, a one-glance slope formula. Solve for y in general:

        Ax + By = C
        By = −Ax + C           (subtract Ax from both sides)
        y = (−A/B)x + C/B      (divide every term by B — needs B ≠ 0)

So a line in standard form has slope −A ÷ B. For 3x + 4y = 12: slope = −3/4. (And its y-intercept C/B = 3, matching the cover-up method ✅.)

Which form when? Building an equation from a point and a slope: point-slope is fastest. Reading off how fast and from where: slope-intercept. Finding intercepts or feeding a system: standard form. Champions switch fluently.

✏️ Your Turn

Write the equation of the line through (2, 1) and (6, 9) in slope-intercept form, showing every step.

Answer: slope = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2. Point-slope with (2, 1): y − 1 = 2(x − 2). Distribute: y − 1 = 2x − 4. Add 1: y = 2x − 3. Test the unused point: 2 × 6 − 3 = 9 ✅.


─────────────────────────────────────────────
Lesson 7: Moving Lines Around — Transformations and Inverses
─────────────────────────────────────────────

📌 Key ideas of this section:

        f(x) + k   shifts the line UP by k        (slope unchanged)
        f(x − h)   shifts the line RIGHT by h     (slope unchanged)
        −f(x)      flips the line over the x-axis
        f(−x)      flips the line over the y-axis
        a × f(x)   stretches heights by a         (slope scales by a)
        f⁻¹(x)     is the INVERSE: the machine run backwards

A transformation takes a function and moves or flips its whole picture at once. The rule to watch: changes OUTSIDE (after f computes, like f(x) + 3) move the picture vertically; changes INSIDE (before f computes, like f(x − 3)) move it horizontally.

Shift up. Take f(x) = 2x + 1 and add 3 outside: g(x) = f(x) + 3 = 2x + 4. Every output is exactly 3 taller, so the whole line slides up 3. Slope stays 2 — a shift never tilts.

Shift right. Now change the inside: g(x) = f(x − 2). Unwrap it:

        g(x) = f(x − 2) = 2(x − 2) + 1      (f doubles its input, adds 1)
             = 2x − 4 + 1                   (distribute the 2)
             = 2x − 3                       (combine: −4 + 1)

Why does "minus 2 inside" mean "right 2"? Watch the tables:

        old f:  x: 0  1  2   →   y: 1  3  5
        new g:  x: 2  3  4   →   y: 1  3  5

The new machine at x = 2 replays what the old machine did at x = 0: g(2) = f(0) = 1. Every output happens 2 units LATER, so the whole line slides right 2. Slope is still 2. (Memory hook: inside changes act "backwards" — minus inside moves right, plus inside moves left.)

Flip over the x-axis: −f(x) = −(2x + 1) = −2x − 1. Every output is negated, so above becomes below: the line somersaults over the x-axis. Slope 2 became −2.

Flip over the y-axis: f(−x) = 2(−x) + 1 = −2x + 1. Inputs are negated, so left and right swap: a mirror over the y-axis.

Stretch: 3 × f(x) = 6x + 3. Every output triples — including the slope (2 → 6) and the intercept (1 → 3). Steeper, same tilt direction.

The inverse function: f⁻¹(x)

Every linear machine (with slope ≠ 0) can be run backwards. The backwards machine is called the inverse, written f⁻¹(x) — read "f inverse." (Warning: f⁻¹ is a label meaning "the undoing machine," NOT 1 ÷ f!)

        If f(2) = 7, then f⁻¹(7) = 2. The inverse undoes whatever f did.

How to build it: run the recipe backwards with the Golden Rule. For f(x) = 2x + 6:

        Step 1: y = 2x + 6            (the forward recipe)
        Step 2: y − 6 = 2x            (undo "+6": subtract 6 from both sides)
        Step 3: (y − 6)/2 = x         (undo "×2": divide both sides by 2)
        Step 4: f⁻¹(x) = (x − 6)/2 = x/2 − 3
                (rename y as x, since we like machines with input x)

An inverse must pass the round-trip test BOTH ways — that's its definition:

        f(f⁻¹(x)) = 2(x/2 − 3) + 6 = x − 6 + 6 = x ✅
        f⁻¹(f(x)) = (2x + 6 − 6)/2 = 2x/2 = x ✅

Two beautiful facts. First, the graph of f⁻¹ is the graph of f mirrored across the line y = x — because inverting swaps the roles of x and y, and swapping coordinates reflects over y = x. Second, the slope of the inverse is the RECIPROCAL 1/m (here 2 → 1/2): rise and run trade places. Reciprocal, not negative reciprocal — that one was perpendiculars!

And here's a promise kept from Lesson 1: the range of f(x) = 2x + 6 really is all numbers, because the inverse formula (y − 6)/2 produces an input for ANY target y.

✏️ Your Turn

Let f(x) = 4x − 8. (a) Write the rule for f(x) shifted right by 3. (b) Find f⁻¹(x). (c) Check the round trip f⁻¹(f(3)).

Answer: (a) f(x − 3) = 4(x − 3) − 8 = 4x − 12 − 8 = 4x − 20. (b) y = 4x − 8 → y + 8 = 4x → x = (y + 8)/4, so f⁻¹(x) = (x + 8)/4 = x/4 + 2. (c) f(3) = 12 − 8 = 4; f⁻¹(4) = 4/4 + 2 = 1 + 2 = 3 ✅ — back to the start.


─────────────────────────────────────────────
Lesson 8: Lines at Work — Systems, Two Methods, and the Three Fates
─────────────────────────────────────────────

📌 Key ideas of this section:

        Forward: plug in x, get y.   Backward: set the y, solve for x.
        Two lines meet where their y's are EQUAL — that's a SYSTEM of equations.
        A system has one solution, no solutions, or infinitely many.

Move 1: Predict. The plant y = 2x + 5 at week 10: y = 2 × 10 + 5 = 25 cm. Run the machine forward.

Move 2: Reverse. WHEN is the plant 25 cm tall? Set y = 25 and solve:

        2x + 5 = 25
        2x = 20        (subtract 5 from both sides)
        x = 10         (divide both sides by 2)

Reversing a linear function and solving an equation are the same move in two costumes — and the inverse function from Lesson 7 is this move bottled into a formula.

Move 3: Compare — with TWO methods you should both master

Two savings plans:

        Plan A: start $7, save $3 per week  →  y = 3x + 7
        Plan B: start $2, save $4 per week  →  y = 4x + 2

When does B catch A, and with how much?

        Method 1 — set the y's equal (the algebra method):
                4x + 2 = 3x + 7          (catch-up means EQUAL amounts)
                x + 2 = 7                (subtract 3x from both sides)
                x = 5                    (subtract 2 from both sides)
                y = 4 × 5 + 2 = 22       (run either rule forward)
        Tie at week 5, with $22 in each plan.

        Method 2 — gap ÷ closing rate (the racing method):
                Starting gap: 7 − 2 = $5 (A is ahead).
                Weekly closing: 4 − 3 = $1 per week (B's slope beats A's by 1).
                Time to catch up: 5 ÷ 1 = 5 weeks.
                Tied amount: 3 × 5 + 7 = $22 (run a rule forward).
        Same answer — because Method 2 is Method 1 in disguise:
        the gap is B − A = (4x + 2) − (3x + 7) = x − 5, which hits 0 at x = 5.

Compare the methods: Method 2 is lightning-fast for "when" and great for estimating, but you must build the "gap shrinks by the slope difference" picture. Method 1 is one size fits all, needs no picture, and hands you the tied amount automatically. Competition problems often reward Method 2; algebra class runs on Method 1. Champions own both.

The three fates of a system

Finding where two lines meet = solving a SYSTEM of equations. Two lines have exactly three possible fates:

        · Different slopes → they meet ONCE (one solution).
        · Same slope, different b → parallel, NEVER meet (no solution).
        · Same slope, same b → the same line twice (infinitely many solutions).

Watch the algebra report each fate. No solution:

        y = 2x + 1  and  y = 2x + 5
        2x + 1 = 2x + 5        (set equal)
        1 = 5                  (subtract 2x from both sides)
        IMPOSSIBLE — the algebra itself reports "no meeting." ■

Infinitely many:

        y = 2x + 2  and  y = 2(x + 1)
        2x + 2 = 2x + 2        (distribute the right side)
        2 = 2                  (subtract 2x)
        ALWAYS true — every x works, because it's one line wearing two costumes. ■

Concurrency: three lines, one point

Do y = 2x + 1, y = −x + 7, and y = 3x − 1 all pass through one point? (Lines that do are called concurrent.)

        Step 1: meet of the first two:
                2x + 1 = −x + 7
                3x = 6         (add x to both sides)
                x = 2          (divide by 3),  so y = 2 × 2 + 1 = 5.
        Step 2: test the third line at x = 2: 3 × 2 − 1 = 5 ✅.
        Yes — all three pass through (2, 5). Three lines concurrent.

Break-even analysis

A maker space buys a printer for $60; each print costs $2 in materials and sells for $5. Cost line C(x) = 2x + 60, revenue line R(x) = 5x. Breaking even means the lines meet:

        5x = 2x + 60           (revenue equals cost)
        3x = 60                (subtract 2x)
        x = 20 prints          (divide by 3) — and the money is 5 × 20 = $100.

Slicker view: the profit is P(x) = R(x) − C(x) = 5x − (2x + 60) = 3x − 60. Its x-intercept: 3x − 60 = 0 → x = 20. The break-even point IS the x-intercept of the profit line — negative before 20 (a loss), positive after.

✏️ Your Turn

Where do y = x + 2 and y = 3x − 6 meet? Then: is y = x − 1 concurrent with them, parallel to one of them, or neither? Explain.

Answer: x + 2 = 3x − 6 → 8 = 2x (subtract x, add 6) → x = 4 → y = 4 + 2 = 6. Meeting point (4, 6). Test y = x − 1 at x = 4: gives 3 ≠ 6, so NOT concurrent. Its slope 1 equals the slope of y = x + 2 with a different b, so it's PARALLEL to the first line — fate number two.


─────────────────────────────────────────────
Lesson 9: Watch Out! The Eight Classic Mistakes
─────────────────────────────────────────────

📌 Keep the definitions in sight:

        slope = rise ÷ run.  b = y when x = 0.  f(g(x)) = g runs first.
        Perpendicular slope = NEGATIVE reciprocal.  A rule must fit EVERY row.

Students lose points on these eight every single year. Not you!

Mistake 1: Slope upside-down

For (1, 3) and (4, 9), computing run ÷ rise gives 3 ÷ 6 = 1/2 — but the true slope is rise ÷ run = 6 ÷ 3 = 2. The rise goes on TOP. Memory hook: you climb the stairs before you know how far you walked; rise first, run second, rise over run.

Mistake 2: Forgetting the head start

A table shows x: 1, 2, 3 and y: 3, 5, 7. "The y's climb by 2, so y = 2x!" Check row one: 2 × 1 = 2 ≠ 3. Busted — the rule forgot the +1 head start: y = 2x + 1. Never declare a rule until it survives EVERY row.

Mistake 3: Ignoring big x-steps

If a table shows x: 0, 2, 4 and y: 1, 7, 13, the slope is NOT 6. The y-change is 6 while the x-change is 2, so slope = 6 ÷ 2 = 3. Always ask "how much did x change?" before you divide.

Mistake 4: Swapping x and y

The point (2, 7) means x = 2 and y = 7 — run first, then climb. To check whether it sits on y = 3x + 1, plug in x = 2: out comes 7 ✅. Plugging 7 in for x tests nonsense and "fails" a point that was actually fine. (Same trap in point-slope form: the y₁ goes next to y, the x₁ next to x.)

Mistake 5: Perpendicular slope blunders

"What slope is perpendicular to 3?" The correct answer is −1/3. But watch the two near-misses: −3 is only NEGATED (that pairs with flipping, not a right angle), and 1/3 is only FLIPPED (forgot the minus). Negative reciprocal means flip AND negate. Always finish with the check: 3 × (−1/3) = −1 ✅.

Mistake 6: Composition backwards

f(g(x)) means g runs FIRST. With f(x) = 2x + 1 and g(x) = 3x − 2, the right way gives f(g(2)) = f(4) = 9, but running f first gives g(f(2)) = g(5) = 13 — a different answer. Order is not a detail; inside-out is the law.

Mistake 7: Half-distributing in point-slope

From y − 8 = 2(x − 3), a rushed student writes y = 2x + 5 — they computed 2x − 3 + 8, distributing the 2 only to the x. The 2 must hit BOTH terms inside: 2(x − 3) = 2x − 6, so y = 2x − 6 + 8 = 2x + 2. Check with the original point (3, 8): 2 × 3 + 2 = 8 ✅ — and the wrong version gives 11, busted.

Mistake 8: "Straight-looking means linear function"

Two traps. First, a vertical line like x = 4 is perfectly straight but is NOT a function — it fails the vertical line test and its slope is undefined. Second, y = |x| is made of two straight pieces with a corner at x = 0: its slope is −1 on the left and +1 on the right. One slope per line is the law of linear — a corner means the rule changed mid-graph.

✏️ Your Turn

Your friend announces: "A line perpendicular to y = 2x + 5 is y = −2x + 5." What went wrong, and what's a correct answer?

Answer: negating the slope 2 gives −2, which is a flip, not a right angle. The perpendicular slope is the negative reciprocal −1/2 — for example y = −x/2 + 5. Check: 2 × (−1/2) = −1 ✅.


─────────────────────────────────────────────
Lesson 10: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Function: one input → exactly one output.  f(x) names the machine.
        slope = rise ÷ run = Δy ÷ Δx — the SAME from any two points (proved!).
        y = mx + b:  m = slope,  b = y-intercept (y when x = 0).
        Parallel: same slope.  Perpendicular: slopes multiply to −1.
        Inverse f⁻¹: undo the recipe (Golden Rule backwards); slope 1/m.

The recap list

  · A function is a machine: drop in x, exactly one y comes out. The domain is what may go in; the range is what can come out.
  · Composition chains machines: f(g(x)) runs g first, and the chain's slope is the PRODUCT of the slopes.
  · Tables reveal rules through constant steps: slope = Δy ÷ Δx (even when Δx isn't 1), then anchor b from any row — and test every row.
  · Arithmetic sequences are linear functions on the positions: a(n) = dn + (a₁ − d) = a₁ + (n − 1)d.
  · Two points draw the whole line. The y-intercept sets x = 0; the x-intercept sets y = 0 and solves.
  · The vertical line test decides whether a picture is a function; vertical lines fail it and have undefined slope.
  · Three forms of one line: y = mx + b (read it), y − y₁ = m(x − x₁) (build it from a point), Ax + By = C (tidy it; slope −A/B, intercepts by cover-up).
  · Transformations: f(x) + k slides up, f(x − h) slides right, −f(x) and f(−x) flip over the axes, a·f(x) stretches — and the inverse f⁻¹ runs the recipe backwards, reflecting over y = x.
  · Where two lines meet is a system: set the y's equal. Three fates: one solution, none (parallel), or infinitely many (same line twice). Three lines through one point are concurrent — check by meeting two and testing the third.
  · The gap ÷ closing-rate method races to "when"; the set-equal method gives "when and how much." Own both.

The magic sentence

        Equal steps make a straight line; the slope is the step size,
        and every form of the equation is just slope plus one anchor point.

Say it out loud three times. Seriously!

Why this matters

Every savings plan, taxi meter, and growing plant is a linear function, and now you can read each one like a sentence — how fast, from where, shifted how, chained with what. You can predict, reverse, find break-even points, and prove that rival plans can never tie. The meeting-point skill opens the door to systems of equations with three or more unknowns; the slope proof you read is the seed of calculus, where "the slope at one point" becomes the most important idea in mathematics. You didn't just finish a chapter — you built the launchpad.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        slope = Δy ÷ Δx = (y₂ − y₁) ÷ (x₂ − x₁)
        y = mx + b  ·  y − y₁ = m(x − x₁)  ·  Ax + By = C (slope −A/B)
        Parallel: same m.  Perpendicular: slopes multiply to −1.
        f(g(x)): g first.  Inverse: undo the recipe.  Test EVERY row.

Grab a pencil and paper. Start with the easy ones — they use the exact patterns from the lessons. The challenge section is competition-flavored: expect 4-6 chained steps, a strategic choice, and sometimes two good methods where you're asked to compare them. A few problems are open-ended. Don't peek at the answer key until you've tried!

Hint for almost every problem: ask yourself, "How much does y change per step of x — and where is the line anchored?"


🟢 EASY (Problems 1–40)

Problems 1–8 — Evaluate the function. Show each step. (Lesson 1)

  1. f(x) = 3x − 2. Find f(5).
  2. f(x) = −2x + 7. Find f(4).
  3. f(x) = x/2 + 3. Find f(10).
  4. g(x) = 5 − 3x. Find g(−2).
  5. f(x) = 4x + 1. Find f(0).
  6. f(x) = −x + 9. Find f(9).
  7. h(x) = 6x − 5. Find h(3).
  8. f(x) = 2x + 3. Find f(−4).

Problems 9–12 — Composition, one number at a time. Use f(x) = 2x + 1
and g(x) = 3x − 2 for all four. (Lesson 2)

  9. Find f(g(2)).
  10. Find g(f(2)).
  11. Find f(f(3)).
  12. Find g(g(1)).

Problems 13–16 — Is the point on the line? Plug in x and see. (Lesson 1)

  13. (3, 11) on y = 4x − 1?
  14. (2, 5) on y = 3x + 1?
  15. (−1, 6) on y = 8 − 2x?
  16. (4, 3) on y = x/2 + 1?

Problems 17–20 — Fill in the table: find y for each x-value shown. (Lesson 3)

  17. y = 3x + 2, for x = 0, 1, 2, 3
  18. y = 10 − 2x, for x = 0, 1, 2, 3
  19. y = 4x − 3, for x = 1, 2, 3, 4
  20. y = x/3 + 2, for x = 0, 3, 6, 9

Problems 21–26 — Find the hidden rule y = ___ and test it on every row. (Lesson 3)

  21. x: 0 1 2 3
      y: 1 4 7 10
  22. x: 0 1 2 3
      y: 6 9 12 15
  23. x: 0 1 2 3
      y: 5 3 1 −1
  24. x: 0 1 2 3
      y: 2 7 12 17
  25. x: 0 1 2 3
      y: 4 4 4 4
  26. x: 0 1 2 3
      y: 0 −3 −6 −9

Problems 27–30 — What is the slope? Watch the x-steps in 28 and 30! (Lessons 3 and 5)

  27. x: 0 1 2 3
      y: 5 9 13 17
  28. x: 0 2 4 6
      y: 1 8 15 22
  29. x: 1 2 3 4
      y: 3 1 −1 −3
  30. x: 0 4 8 12
      y: 2 5 8 11

Problems 31–34 — Slope through two points: slope = (y₂ − y₁) ÷ (x₂ − x₁). (Lesson 5)

  31. (2, 3) and (6, 11)
  32. (0, 7) and (4, −1)
  33. (1, 1) and (5, 3)
  34. (−2, 5) and (2, 13)

Problems 35–38 — Find BOTH intercepts: set x = 0 for the y-intercept,
set y = 0 for the x-intercept. (Lesson 4)

  35. y = 3x − 12
  36. y = 2x + 10
  37. 2x + 3y = 12   (cover-up method!)
  38. 5x − y = 20

Problems 39–40 — Quick think! Answer in one sentence.

  39. True or false: the picture x = 4 is a linear function.
  40. In f(x) = 7x − 2, what are the slope and the y-intercept?


🟡 INTERMEDIATE (Problems 41–75)

Problems 41–44 — Compose to a formula. Use f(x) = 2x + 3, g(x) = x − 4,
and h(x) = 5x. Show every step. (Lesson 2)

  41. Find f(g(x)).
  42. Find g(f(x)).
  43. Find f(h(x)).
  44. Find f(f(x)).

Problems 45–48 — Point-slope first, then simplify to y = mx + b. (Lesson 6)

  45. Through (2, 5), slope 3.
  46. Through (−1, 4), slope 2.
  47. Through (3, 1), slope −2.
  48. Through (4, 6), slope 1/2.

Problems 49–52 — Two points → equation. Slope first, then anchor. (Lesson 6)

  49. (1, 3) and (3, 11)
  50. (0, 5) and (4, 1)
  51. (2, 2) and (6, 10)
  52. (−2, 7) and (2, −1)

Problems 53–56 — Parallel and perpendicular slopes. (Lesson 5)

  53. What slope is parallel to y = 4x − 9?
  54. What slope is perpendicular to y = 4x − 9?
  55. What slope is perpendicular to y = −(2/3)x + 1?
  56. Write the rule for the line through (0, 0) parallel to y = −3x + 8.

Problems 57–60 — Standard form skills. (Lesson 6)

  57. Write 3x + 4y = 24 in slope-intercept form.
  58. Write y = (2/5)x − 3 in standard form with integer coefficients.
  59. What is the slope of x + 2y = 10?
  60. Does (6, 3) lie on 2x + 3y = 21?

Problems 61–64 — Inverses and backwards runs. (Lesson 7)

  61. f(x) = 3x + 6. Find f⁻¹(x).
  62. f(x) = 2x − 5. Find f⁻¹(x).
  63. f(x) = 4x + 8. Find x when f(x) = 0.
  64. f(x) = 5x − 1. Find f⁻¹(9). (That means: which INPUT gives output 9?)

Problems 65–68 — Transformations: write the new rule. (Lesson 7)

  65. y = 3x + 1 shifted UP by 4.
  66. y = 2x − 3 shifted RIGHT by 5.
  67. y = −x + 2 flipped over the x-axis.
  68. y = x + 1 shifted LEFT by 3. (Left means f(x + 3) — inside acts backwards!)

Problems 69–72 — Meeting points: set the y's equal, solve, then find y. (Lesson 8)

  69. y = 3x + 2 and y = x + 10
  70. y = 2x + 1 and y = 5x − 8
  71. y = −x + 4 and y = 2x − 11
  72. y = 4x − 3 and y = 4x + 7 (careful!)

Problems 73–75 — Explain yourself!

  73. f(x) = 6x + 1, and you're told f(10) = 61. WITHOUT computing 6 × 11,
      find f(11). Which idea makes this a one-step problem?
  74. Line A passes through (0, 0) with slope 2. Line B passes through (6, 0)
      with slope 2. Do they ever meet? Explain using the three fates.
  75. True or false, and why: "If f and g are both linear, then f(g(x)) and
      g(f(x)) always have the same slope."


🔴 CHALLENGE (Problems 76–100)

  76. The sequence disguise. The arithmetic sequence 7, 11, 15, 19, ... keeps
      climbing by 4. (a) Write a(n) as a linear function of the position n.
      (b) Find a(20). (c) Which position n gives the term 99?
  77. The pair-up sum. For the rule a(n) = 3n + 2, add up the ten terms
      a(1) through a(10) WITHOUT adding them one by one. (Hint: pair the
      first and last terms, then the second and second-to-last, and so on.
      What do all the pairs add to? How many pairs are there?)
  78. The self-chain mystery. f(x) = ax + b is linear, and chaining it with
      itself gives f(f(x)) = 9x + 16. Given a > 0, find a and b.
      (Expand f(f(x)) and match the slope and the intercept.)
      Bonus: what changes if a < 0 is allowed?
  79. Three lines, one point. The lines y = 2x + 1, y = −x + 7, and
      y = kx − 3 are concurrent (all through one point). Find k.
  80. The perpendicular bisector. The segment from (1, 0) to (5, 4) has a
      perpendicular bisector: the line through the segment's midpoint that
      meets it at 90°. (a) Find the midpoint (average the x's, average the
      y's). (b) Find the segment's slope, then the perpendicular slope.
      (c) Write the bisector's equation. (d) Check: show (2, 3) is on your
      line and is equally far from both endpoints — compare the SQUARED
      distances (2−1)² + (3−0)² and (2−5)² + (3−4)².
  81. Triangle area. The line y = −2x + 8 and the two axes form a triangle.
      Find both intercepts, then the triangle's area (half of base × height).
  82. Two ways to catch up. Plan A is y = 5x + 20 and Plan B is y = 9x + 4
      (dollars after x weeks). (a) Solve by setting the y's equal.
      (b) Solve again by gap ÷ closing rate. (c) In one or two sentences:
      which method felt faster, and what extra fact does the other one give?
  83. A system of THREE equations. Three mystery numbers satisfy:
              x + y = 7
              y + z = 9
              z + x = 8
      (a) Solve it the direct way: add all three equations, divide by 2 to
      get x + y + z, then peel off each number. (b) Solve it again by
      substitution: from the first equation y = 7 − x; feed that into the
      second; use the third to finish. (c) Which strategy scales better to
      four numbers? Why?
  84. The missing slope. For what value of k does y = kx + 3 pass through
      the point (4, 11)?
  85. The missing head start. f(x) = 2x + b, and you know f(3) = 11.
      Find b, then compute f(f(1)).
  86. The corner rule. Consider y = |x − 3| + 1. (a) Fill its table for
      x = 0, 1, 2, 3, 4, 5, 6. (b) Look at the y-steps: why is this NOT a
      linear function? (c) Where does it meet the line y = 5? (Two answers!
      Solve |x − 3| = 4 by considering x − 3 = 4 and x − 3 = −4 separately.)
  87. The unknown outer machine. g(x) = 4x − 1, and f(g(x)) = 8x + 5.
      Assuming f(x) = ax + b, find a and b (match slopes first, then
      intercepts), and write f(x).
  88. Mirror, mirror. Start with y = 2x + 3. (a) Write its reflection over
      the y-axis (replace x with −x). (b) Where do the original and the
      y-axis reflection meet? Why does that point make sense? (c) Write the
      reflection over the x-axis (negate y). (d) Show the x-axis reflection
      and the y-axis reflection NEVER meet — which fate is that?
  89. The ladder theorem. The three parallel lines y = x, y = x + 2, and
      y = x + 4 are all crossed by the transversal y = −x + 6. (a) Find all
      three crossing points. (b) Compute the step (Δx, Δy) between
      consecutive crossing points. (c) What do you notice? (This is the
      "parallel lines cut transversals equally" theorem from geometry,
      hiding inside algebra!)
  90. Collinear or not — two ways. (a) Show that (1, 2), (3, 6), (5, 10)
      all lie on one line, TWO ways: by comparing two slopes, and by finding
      a rule that fits all three. (b) Now test (1, 2), (3, 6), (5, 11) with
      both methods. (c) Which method do you prefer, and why?
  91. Break-even. A printer costs $60; each print costs $2 and sells for $5.
      (a) Write the cost line C(x) and the revenue line R(x). (b) How many
      prints to break even, and how much money changes hands then? (c) Write
      the profit line P(x) = R(x) − C(x) and find its x-intercept. What does
      that intercept mean?
  92. The missing middle. A linear rule's table shows x: 0, 1, 2, 3, 4 and
      y: 4, 9, ?, 19, 24. Find the missing y, and the full rule.
  93. The round trip. Let f(x) = 3x − 6. (a) Find f⁻¹(x). (b) Compute
      f(f⁻¹(12)) and f⁻¹(f(12)). (c) Explain in one sentence why both
      answers had to be 12.
  94. The steeper challenger. Line 1 passes through (0, 0) and (3, 7).
      Line 2 is y = 2x + 1. (a) Which is steeper? (b) Where do they meet?
      (c) The meeting point should feel suspicious — check something about
      (3, 7) and Line 2, and explain why the meeting point was guaranteed.
  95. The parallel messenger. Find the line that is parallel to y = 2x + 1
      and passes through the meeting point of y = x + 4 and y = −x + 2.
  96. Three plans, one timeline. After x weeks: Plan A has y = 6x, Plan B
      has y = 4x + 10, Plan C has y = 2x + 24. (a) Find when A ties B,
      when A ties C, and when B ties C. (b) Who is actually LEADING at
      week 5, week 6, and week 7? (c) B wins its private race against C —
      so why does B never lead overall?
  97. Prove it. Prove that two DISTINCT lines with the same slope can never
      meet. (Start: suppose they DID meet at some x. Set mx + b₁ = mx + b₂
      and follow the algebra until it claims something impossible. This
      style of proof — assume the opposite, reach nonsense — is called
      proof by contradiction.)
  98. Two candles. Candle A is 12 cm tall and burns 1 cm per hour:
      y = 12 − x. Candle B is 20 cm tall and burns 3 cm per hour:
      y = 20 − 3x. (a) When are they exactly the same height, and what
      height is that? (b) When is the gap between them exactly 2 cm?
      Careful — there are TWO times! (The gap is A − B = 2x − 8; set it
      equal to +2 AND to −2.) (c) Why are there two answers? Describe what
      the gap does over time.
  99. Design your own (negative start). Invent a real-world story that fits
      y = 5x − 10. What do x and y stand for? What do the 5 and the −10
      mean? (Hint: what real thing can be negative?) Then answer: at what x
      does your story's quantity hit zero, and what does that moment mean?
 100. The grand finale — build your own! Pick any slope m and any start b.
      (a) Write your rule y = mx + b.
      (b) Build its table for x = 0, 1, 2, 3, 4.
      (c) Pick two points from your table and compute the slope from them —
          does it match your m?
      (d) Find the inverse rule f⁻¹(x), and check one round trip.
      (e) Compose your rule with g(x) = x + 3 — what happened to the slope
          and the intercept, and why did the slope survive?
      (f) Invent a word problem that fits your rule, and solve it.


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — rise-over-run direction, a forgotten anchor point, an x-step bigger than 1, composition order, or flip-and-negate for perpendiculars.

Easy

  1. f(5) = 3×5 − 2 = 15 − 2 = 13.
  2. f(4) = −2×4 + 7 = −8 + 7 = −1.
  3. f(10) = 10/2 + 3 = 5 + 3 = 8.
  4. g(−2) = 5 − 3×(−2) = 5 + 6 = 11. (Subtracting −6 adds 6.)
  5. f(0) = 4×0 + 1 = 1. (f(0) is always just the b.)
  6. f(9) = −9 + 9 = 0.
  7. h(3) = 6×3 − 5 = 18 − 5 = 13.
  8. f(−4) = 2×(−4) + 3 = −8 + 3 = −5.

  9. Inside first: g(2) = 3×2 − 2 = 4. Then f(4) = 2×4 + 1 = 9.
 10. f(2) = 2×2 + 1 = 5. Then g(5) = 3×5 − 2 = 13. (Not 9 — order matters!)
 11. f(3) = 2×3 + 1 = 7. Then f(7) = 2×7 + 1 = 15.
 12. g(1) = 3×1 − 2 = 1. Then g(1) = 1 again — a fixed point of g!

 13. Yes: 4×3 − 1 = 12 − 1 = 11 ✅.
 14. No: 3×2 + 1 = 7 ≠ 5.
 15. No: 8 − 2×(−1) = 8 + 2 = 10 ≠ 6. (Negative input, careful!)
 16. Yes: 4/2 + 1 = 2 + 1 = 3 ✅.

 17. 2, 5, 8, 11 (add 3 each step).
 18. 10, 8, 6, 4 (subtract 2 each step — a downhill line).
 19. 1, 5, 9, 13 (first row: 4×1 − 3 = 1).
 20. 2, 3, 4, 5 (each x-step of 3 adds 1 to y — slope 1/3).

 21. Steps of 3, start 1: y = 3x + 1. Test: 3×3+1 = 10 ✅.
 22. Steps of 3, start 6: y = 3x + 6. Test: 3×2+6 = 12 ✅.
 23. Steps of −2, start 5: y = −2x + 5 (same as 5 − 2x). Test: 5−6 = −1 ✅.
 24. Steps of 5, start 2: y = 5x + 2. Test: 5×3+2 = 17 ✅.
 25. No steps at all: y = 4 (flat line, slope 0).
 26. Steps of −3, start 0: y = −3x. Test: −3×3 = −9 ✅.

 27. 9 − 5 = 4 per x-step of 1 → slope 4.
 28. Δy = 7, Δx = 2 → slope 7/2. (The x-step trap!)
 29. Δy = −2 per step → slope −2 (downhill).
 30. Δy = 3, Δx = 4 → slope 3/4.

 31. (11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2.
 32. (−1 − 7) ÷ (4 − 0) = −8 ÷ 4 = −2.
 33. (3 − 1) ÷ (5 − 1) = 2 ÷ 4 = 1/2.
 34. (13 − 5) ÷ (2 − (−2)) = 8 ÷ 4 = 2. (Run: from −2 to 2 is 4.)

 35. y-intercept −12 (set x = 0). x-intercept: 0 = 3x − 12 → 3x = 12 → x = 4.
 36. y-intercept 10. x-intercept: 0 = 2x + 10 → 2x = −10 → x = −5.
 37. Cover-up: y = 0 gives 2x = 12 → x = 6; x = 0 gives 3y = 12 → y = 4.
 38. y = 0 gives 5x = 20 → x = 4; x = 0 gives −y = 20 → y = −20.

 39. False. x = 4 is a vertical line: the input 4 gets infinitely many
     outputs, so it fails the vertical line test — not a function at all
     (and its slope is undefined).
 40. Slope 7, y-intercept −2. The intercept is the whole constant term,
     minus sign included.

Intermediate

 41. f(g(x)) = 2(x − 4) + 3 = 2x − 8 + 3 = 2x − 5.
 42. g(f(x)) = (2x + 3) − 4 = 2x − 1.
 43. f(h(x)) = 2(5x) + 3 = 10x + 3. (Chain slope: 2 × 5 = 10 ✅)
 44. f(f(x)) = 2(2x + 3) + 3 = 4x + 6 + 3 = 4x + 9. (Slope: 2 × 2 = 4 ✅)

 45. y − 5 = 3(x − 2) → y − 5 = 3x − 6 → y = 3x − 1. Test: 3×2−1 = 5 ✅.
 46. y − 4 = 2(x − (−1)) = 2(x + 1) → y − 4 = 2x + 2 → y = 2x + 6.
     Test: 2×(−1)+6 = 4 ✅.
 47. y − 1 = −2(x − 3) → y − 1 = −2x + 6 → y = −2x + 7. Test: −6+7 = 1 ✅.
 48. y − 6 = (1/2)(x − 4) → y − 6 = x/2 − 2 → y = x/2 + 4.
     Test: 4/2 + 4 = 6 ✅.

 49. Slope = (11 − 3) ÷ (3 − 1) = 8 ÷ 2 = 4. y − 3 = 4(x − 1) →
     y = 4x − 4 + 3 = 4x − 1. Test (3, 11): 4×3−1 = 11 ✅.
 50. Slope = (1 − 5) ÷ (4 − 0) = −1. The point (0, 5) IS the y-intercept:
     y = −x + 5. Test (4, 1): −4+5 = 1 ✅.
 51. Slope = (10 − 2) ÷ (6 − 2) = 8 ÷ 4 = 2. y − 2 = 2(x − 2) →
     y = 2x − 4 + 2 = 2x − 2. Test (6, 10): 12−2 = 10 ✅.
 52. Slope = (−1 − 7) ÷ (2 − (−2)) = −8 ÷ 4 = −2. y − 7 = −2(x + 2) →
     y = −2x − 4 + 7 = −2x + 3. Test (2, −1): −4+3 = −1 ✅.

 53. 4 — parallel lines keep the same slope.
 54. −1/4 — flip AND negate. Check: 4 × (−1/4) = −1 ✅.
 55. 3/2 — the negative reciprocal of −2/3. Check: (−2/3) × (3/2) = −1 ✅.
 56. Parallel means slope −3; through (0, 0) means b = 0: y = −3x.

 57. 3x + 4y = 24 → 4y = −3x + 24 (subtract 3x) → y = −3x/4 + 6 (÷4).
 58. y = (2/5)x − 3 → multiply everything by 5: 5y = 2x − 15 →
     2x − 5y = 15 (rearrange to x-first, positive x-term).
 59. x + 2y = 10 → 2y = −x + 10 → y = −x/2 + 5 → slope −1/2.
     (Shortcut: −A/B = −1/2 ✅.)
 60. Yes: 2×6 + 3×3 = 12 + 9 = 21 ✅.

 61. y = 3x + 6 → y − 6 = 3x → x = (y − 6)/3 → f⁻¹(x) = x/3 − 2.
     Check: f(f⁻¹(0)) = f(−2) = 0 ✅.
 62. y = 2x − 5 → y + 5 = 2x → f⁻¹(x) = (x + 5)/2.
     Check: f⁻¹(f(1)) = f⁻¹(−3) = 2/2 = 1 ✅.
 63. 4x + 8 = 0 → 4x = −8 → x = −2. (That's the x-intercept of the line.)
 64. f⁻¹(9) asks: which input gives 9? 5x − 1 = 9 → 5x = 10 → x = 2.
     Check forward: f(2) = 9 ✅.

 65. y = 3x + 1 + 4 = 3x + 5. (Outside change → intercept grows.)
 66. y = 2(x − 5) − 3 = 2x − 10 − 3 = 2x − 13. (Inside change: replace
     x with x − 5; slope stays 2.)
 67. −(−x + 2) = x − 2. (Every output negated: slope −1 → 1.)
 68. y = (x + 3) + 1 = x + 4. (Left 3 means x → x + 3.)

 69. 3x + 2 = x + 10 → 2x = 8 → x = 4. Then y = 4 + 10 = 14. Point (4, 14).
     Check the other: 3×4 + 2 = 14 ✅.
 70. 2x + 1 = 5x − 8 → 9 = 3x → x = 3. Then y = 2×3 + 1 = 7. Point (3, 7).
     Check: 5×3 − 8 = 7 ✅.
 71. −x + 4 = 2x − 11 → 15 = 3x → x = 5. Then y = −5 + 4 = −1.
     Point (5, −1). Check: 2×5 − 11 = −1 ✅.
 72. 4x − 3 = 4x + 7 → −3 = 7: impossible. Same slope 4, different
     intercepts — parallel lines, fate number two: they never meet.

 73. f(11) = 67. When x grows by 1, y grows by the slope 6:
     61 + 6 = 67 — no multiplication needed. The slope IS the per-step
     growth; that's the one-step idea.
 74. No. Both slopes are 2 with different anchors — parallel distinct
     lines. Algebra view: B is y = 2(x − 6) = 2x − 12, and setting
     2x = 2x − 12 gives 0 = −12, impossible. Fate number two.
 75. True. Slope of f(g(x)) = (slope of f) × (slope of g), and slope of
     g(f(x)) = (slope of g) × (slope of f) — multiplication doesn't care
     about order, so both chains get the same slope. (The intercepts can
     still differ, as problems 41 and 42 showed.)

Challenge

 76. (a) Common difference 4 → slope 4. Walk back: a(0) = 7 − 4 = 3.
     Rule: a(n) = 4n + 3. Test: a(4) = 19 ✅.
     (b) a(20) = 4×20 + 3 = 83.
     (c) 4n + 3 = 99 → 4n = 96 → n = 24. Check: a(24) = 96 + 3 = 99 ✅.

 77. Terms: a(1) = 5, a(10) = 32. Pair first with last: 5 + 32 = 37.
     Second with second-to-last: 8 + 29 = 37 — every pair sums to 37
     (each step inward adds 3 to one partner and subtracts 3 from the
     other). Ten terms make 5 pairs: total = 37 × 5 = 185.
     This pair-up trick works for ANY arithmetic sequence — Gauss
     famously used it as a schoolboy!

 78. Expand the self-chain:
        f(f(x)) = a(ax + b) + b      (f multiplies ITS input by a, adds b)
                = a²x + ab + b       (distribute the outer a)
     Match with 9x + 16: slopes give a² = 9, and a > 0 forces a = 3.
     Intercepts: ab + b = 16 → 3b + b = 4b = 16 → b = 4.
     So f(x) = 3x + 4. Check: f(f(x)) = 3(3x + 4) + 4 = 9x + 16 ✅.
     Bonus: with a < 0 allowed, a = −3 gives −3b + b = −2b = 16, so
     b = −8, and f(x) = −3x − 8 also works: 9x + 24 − 8 = 9x + 16 ✅.

 79. Step 1: find where the first two lines meet:
     2x + 1 = −x + 7 → 3x = 6 → x = 2, so y = 2×2 + 1 = 5. Point (2, 5).
     Step 2: force the third line through it: 5 = k×2 − 3 → 2k = 8 → k = 4.
     Check: 4×2 − 3 = 5 ✅.

 80. (a) Midpoint: ((1 + 5)/2, (0 + 4)/2) = (3, 2).
     (b) Segment slope: (4 − 0)/(5 − 1) = 4/4 = 1. Perpendicular slope:
     negative reciprocal −1. Check: 1 × (−1) = −1 ✅.
     (c) Point-slope through (3, 2): y − 2 = −(x − 3) → y = −x + 3 + 2
     → y = −x + 5.
     (d) Is (2, 3) on it? −2 + 5 = 3 ✅. Squared distances: to (1, 0):
     (2−1)² + (3−0)² = 1 + 9 = 10; to (5, 4): (2−5)² + (3−4)² = 9 + 1 = 10.
     Equal ✅ — every point of a perpendicular bisector is equally far
     from both endpoints; that's WHY it's called a bisector at 90°.

 81. y-intercept (x = 0): y = 8 → point (0, 8). x-intercept (y = 0):
     0 = −2x + 8 → 2x = 8 → x = 4 → point (4, 0). The triangle's legs
     lie on the axes: base 4, height 8. Area = ½ × 4 × 8 = 16.

 82. (a) 5x + 20 = 9x + 4 → 16 = 4x → x = 4. Amount: 5×4 + 20 = $40.
     (b) Gap: 20 − 4 = $16 (A ahead). Closing rate: 9 − 5 = $4 per week.
     Time: 16 ÷ 4 = 4 weeks ✅ — same answer.
     (c) Sample comparison: the gap method found "when" in two short
     divisions, but the set-equal method also handed over the tied amount
     $40 automatically and works even when the gap picture is confusing
     (like downhill plans). The methods match because the gap IS
     A − B = (5x + 20) − (9x + 4) = 16 − 4x, which hits 0 at x = 4.

 83. (a) Add all three equations: (x + y) + (y + z) + (z + x) = 7 + 9 + 8,
     so 2x + 2y + 2z = 24, and dividing by 2: x + y + z = 12.
     Peel off each: z = 12 − (x + y) = 12 − 7 = 5;
     x = 12 − (y + z) = 12 − 9 = 3; y = 12 − (z + x) = 12 − 8 = 4.
     Check: 3 + 4 = 7 ✅, 4 + 5 = 9 ✅, 5 + 3 = 8 ✅.
     (b) Substitution: y = 7 − x. Feed into y + z = 9: 7 − x + z = 9 →
     z = x + 2. Feed into z + x = 8: x + 2 + x = 8 → 2x = 6 → x = 3,
     then y = 4, z = 5. Same triple ✅.
     (c) The add-everything trick scales beautifully: with four numbers
     you'd add all pair equations and divide by 3, then peel off.
     Substitution chains get longer and messier with each new unknown.

 84. 11 = k×4 + 3 (the point must fit the rule) → 4k = 8 → k = 2.
     Rule: y = 2x + 3. Check: 2×4 + 3 = 11 ✅.

 85. f(3) = 2×3 + b = 11 → 6 + b = 11 → b = 5, so f(x) = 2x + 5.
     Then f(f(1)): f(1) = 2 + 5 = 7; f(7) = 14 + 5 = 19.

 86. (a) y = |x − 3| + 1 for x = 0..6: 4, 3, 2, 1, 2, 3, 4.
     (b) The y-steps are −1, −1, −1, +1, +1, +1 — they CHANGE at x = 3
     (the corner, where the inside x − 3 flips sign). One slope per line
     is the law; this rule has two. Not linear.
     (c) |x − 3| + 1 = 5 → |x − 3| = 4 → x − 3 = 4 gives x = 7, and
     x − 3 = −4 gives x = −1. Two meetings: (7, 5) and (−1, 5) — the
     V-shape hits height 5 once on each arm. Check: |7−3|+1 = 5 ✅,
     |−1−3|+1 = 5 ✅.

 87. f(g(x)) = a(4x − 1) + b = 4ax − a + b. Match with 8x + 5:
     slopes: 4a = 8 → a = 2. Intercepts: −a + b = 5 → −2 + b = 5 → b = 7.
     So f(x) = 2x + 7. Check: f(g(x)) = 2(4x − 1) + 7 = 8x + 5 ✅.

 88. (a) y-axis reflection: replace x with −x: y = 2(−x) + 3 = −2x + 3.
     (b) Meet: 2x + 3 = −2x + 3 → 4x = 0 → x = 0, y = 3. Point (0, 3) —
     of course: the y-axis (x = 0) is the mirror, and a figure meets its
     mirror image exactly ON the mirror.
     (c) x-axis reflection: negate y: y = −(2x + 3) = −2x − 3.
     (d) −2x + 3 vs −2x − 3: same slope −2, different intercepts —
     parallel distinct lines, fate number two: they never meet.
     (Setting equal: 3 = −3, impossible.)

 89. (a) y = x meets y = −x + 6: x = −x + 6 → 2x = 6 → x = 3 → (3, 3).
     y = x + 2 meets it: x + 2 = −x + 6 → 2x = 4 → x = 2 → (2, 4).
     y = x + 4 meets it: x + 4 = −x + 6 → 2x = 2 → x = 1 → (1, 5).
     (b) Between consecutive crossings: Δx = −1, Δy = +1 each time —
     identical steps.
     (c) Equally spaced parallel lines (gaps of 2) cut the transversal
     into EQUAL pieces. This always happens, for any transversal — in
     geometry it's the theorem that parallel lines divide transversals
     proportionally, proved with similar triangles. You just rediscovered
     it with pure algebra!

 90. (a) Method 1 — slopes: (1, 2)-(3, 6): (6−2)/(3−1) = 2.
     (3, 6)-(5, 10): (10−6)/(5−3) = 2. Equal slopes sharing the middle
     point → one line. Method 2 — one rule: slope 2 through (1, 2) gives
     y = 2x; test all three: 2, 6, 10 ✅✅✅.
     (b) (1, 2)-(3, 6): slope 2. (3, 6)-(5, 11): slope (11−6)/2 = 5/2.
     Different → NOT collinear. Rule test: y = 2x fits the first two but
     gives 10 ≠ 11 for the third → fails. Both agree: not on one line.
     (c) Sample preference: the two-slope method shows you WHERE the bend
     is; the one-rule method doubles as the equation-finder if they do
     line up. Either is complete — using both is a belt-and-suspenders
     check on contest day.

 91. (a) C(x) = 2x + 60 (fixed $60 plus $2 per print), R(x) = 5x.
     (b) Break even: 5x = 2x + 60 → 3x = 60 → x = 20 prints, and the
     money is R(20) = $100 (equals C(20) = 40 + 60 ✅).
     (c) P(x) = 5x − (2x + 60) = 3x − 60. x-intercept: 3x − 60 = 0 →
     x = 20 — the SAME 20. The x-intercept of the profit line is exactly
     the break-even point; before it the line is underground (loss),
     after it, above (profit).

 92. From x = 0 to x = 4, y grows from 4 to 24: total rise 20 over run 4,
     slope 5. Missing middle: 9 + 5 = 14. Rule: y = 5x + 4.
     Check the far rows: 5×3 + 4 = 19 ✅, 5×4 + 4 = 24 ✅.

 93. (a) y = 3x − 6 → y + 6 = 3x → x = (y + 6)/3, so
     f⁻¹(x) = (x + 6)/3 = x/3 + 2.
     (b) f(f⁻¹(12)): f⁻¹(12) = 18/3 = 6; f(6) = 18 − 6 = 12.
     f⁻¹(f(12)): f(12) = 36 − 6 = 30; f⁻¹(30) = 36/3 = 12. Both are 12 ✅.
     (c) The inverse is DEFINED as the machine that undoes f — so
     "do then undo" and "undo then do" must both return the starting
     number, for every input.

 94. (a) Line 1's slope: (7 − 0)/(3 − 0) = 7/3 ≈ 2.33, which beats
     Line 2's slope 2 — Line 1 is steeper (compare 7/3 vs 2 = 6/3).
     (b) Line 1 is y = (7/3)x. Meet: (7/3)x = 2x + 1 → multiply by 3:
     7x = 6x + 3 → x = 3 → y = (7/3)×3 = 7. Point (3, 7).
     (c) Suspicious — the meeting point is the very point that defined
     Line 1! Guaranteed because (3, 7) happens to lie on Line 2 as well:
     2×3 + 1 = 7 ✅. Two lines through one shared point must meet there.

 95. Step 1: the meeting point of y = x + 4 and y = −x + 2:
     x + 4 = −x + 2 → 2x = −2 → x = −1 → y = −1 + 4 = 3. Point (−1, 3).
     Step 2: parallel to y = 2x + 1 → slope 2.
     Step 3: point-slope: y − 3 = 2(x − (−1)) = 2(x + 1) →
     y = 2x + 2 + 3 = 2x + 5. Test: 2×(−1) + 5 = 3 ✅.

 96. (a) A ties B: 6x = 4x + 10 → 2x = 10 → x = 5 (both have 30).
     A ties C: 6x = 2x + 24 → 4x = 24 → x = 6 (both have 36).
     B ties C: 4x + 10 = 2x + 24 → 2x = 14 → x = 7 (both have 38).
     (b) Week 5: A 30, B 30, C 34 → C leads. Week 6: A 36, C 36, B 34 →
     A and C tied on top. Week 7: A 42, B 38, C 38 → A leads.
     (c) By the time B finally catches C (week 7), A — the steepest line
     — has already blown past everyone at week 6. Winning one private
     race isn't enough when a third runner is faster still: pairwise
     answers must be assembled into one timeline.

 97. Proof by contradiction. Suppose the two distinct lines y = mx + b₁
     and y = mx + b₂ DID meet at some input x. Then at that x:
         mx + b₁ = mx + b₂        (both give the same y — that's "meeting")
         b₁ = b₂                  (subtract mx from both sides)
     But "distinct lines with the same slope" means b₁ ≠ b₂ — so our
     conclusion b₁ = b₂ is impossible. The only thing we assumed was that
     a meeting exists, so that assumption must be wrong: no meeting point
     exists. The lines never meet. ■
     (Same logic, positive form: subtracting the equations cancels mx,
     leaving 0 = b₂ − b₁ ≠ 0 — no x can fix that.)

 98. (a) Same height: 12 − x = 20 − 3x → 2x = 8 (add 3x, subtract 12) →
     x = 4 hours. Height then: 12 − 4 = 8 cm (check B: 20 − 12 = 8 ✅).
     (b) The gap A − B = (12 − x) − (20 − 3x) = 2x − 8.
     Gap = +2: 2x − 8 = 2 → x = 5 (A = 7, B = 5: A taller by 2 ✅).
     Gap = −2: 2x − 8 = −2 → x = 3 (A = 9, B = 11: B taller by 2 ✅).
     (c) B starts taller, burns faster, and they tie at hour 4 — so the
     gap shrinks from 8 cm (B ahead) down to 0 at hour 4, then grows
     again with A ahead. A gap of exactly 2 cm happens once on the way
     in (hour 3) and once on the way out (hour 5). Two answers because
     the difference passes through +2 and −2 around the tie.

 99. Sample story: "You owe the school store $10, so your balance starts
     at −10 dollars, and you earn $5 per week walking dogs; y is your
     balance after x weeks." The 5 (slope) is your weekly earnings; the
     −10 (start) is the debt — negative because it's money you owe, not
     own. Balance hits zero when 5x − 10 = 0 → 5x = 10 → x = 2 weeks:
     that's the moment you've paid off the debt and finally break even.
     Your story will differ — anything with a steady rate of 5 and a
     starting deficit of 10 works.

100. Sample build with m = 3, b = 1:
     (a) y = 3x + 1.
     (b) x: 0, 1, 2, 3, 4 → y: 1, 4, 7, 10, 13.
     (c) Points (1, 4) and (3, 10): slope = (10−4)/(3−1) = 6/2 = 3 — matches m ✅.
     (d) Inverse: y = 3x + 1 → y − 1 = 3x → f⁻¹(x) = (x − 1)/3.
         Round trip: f(f⁻¹(7)) = f(2) = 7 ✅.
     (e) f(g(x)) = 3(x + 3) + 1 = 3x + 10: slope stayed 3, intercept grew
         by 3×3 = 9. The slope survived because g's slope is 1, and
         chaining MULTIPLIES slopes: 3 × 1 = 3. Only the anchor moved.
     (f) "A bamboo shoot is 1 cm tall and grows 3 cm per day. When is it
         13 cm tall?" 3x + 1 = 13 → 3x = 12 → x = 4 days ✅.
     Your build will differ — if your table steps by your slope, starts
     at your b, and your inverse passes the round-trip test, you're right.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you truly own linear functions — the one-output machine, the constant slope you PROVED, the three equation forms, the shifts and flips and inverses, and the meeting points where systems are born. You even handled concurrency, perpendicular bisectors, and a proof by contradiction — real honors-level moves. The next time you see a rule like y = 3x + 7, smile: you can already see the line — crossing at 7, climbing 3 per step, perpendicular to anything of slope −1/3, and meeting y = −x + 7 exactly where you say it does. Straight as a ruler, deep as a proof. Great work!
