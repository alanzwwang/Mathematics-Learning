Exponential Growth — A Complete Lesson (Honors Level)
═════════════════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        2⁻³ = 1/8
        f(x) = 3 × 2^x   →   f(4) = 48
        3 × 2^x = 96     →   x = 5

Those three lines are this lesson in miniature. The first is a NEGATIVE exponent — it flips the 2 into a fraction. The second is function notation: a machine named f that turns hours into bacteria counts. The third is an equation we solve backwards: not "what do you get?" but "what power do you need?" By the end of this lesson, all three will feel as natural as 2 × 2 = 4.

Why do people care? Because exponential growth runs the world: bacteria multiply, rumors spread, videos go viral, savings grow, and computer chips get faster — all by multiplying by the same factor over and over. Grown-ups say "growing exponentially" whenever something explodes. After this lesson, you'll know the exact math behind that word — and you'll be able to predict it, run it backwards, and prove things about it.

This is the honors version of the lesson, so we go further than just computing answers. You'll solve equations with the unknown up in the exponent, find hidden growth factors from clues, compare exponential growth to linear AND quadratic growth, and explain WHY the patterns work — with every single step shown.

In this lesson, you will:

  1. Power up your exponents — zero powers, negative powers, and the three exponent laws
  2. Give the doubling machine a name: the function f(x) = a × 2^x
  3. Sort patterns into three families: linear, exponential, and (peek!) quadratic
  4. Find the growth factor — even from two snapshots that aren't neighbors
  5. Use the formula f(x) = a × b^x, then SOLVE it for x, for a, and for both
  6. Time-travel backwards with division and negative exponents
  7. Master the halving machine: exponential decay with honest fractions
  8. Dodge the six classic mistakes (including the ones honors students make!)
  9. Prove it with 100 practice problems at the end

How to use this lesson: Read the sections in order — every new idea is built from the idea before it, and every worked example shows EVERY step with the reason for the move. Keep a pencil and paper next to you, and try every "Your Turn" box before peeking. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: Exponent Power-Ups — Zero, Negatives, and the Three Laws
─────────────────────────────────────────────

📌 Key idea of this section:

        2⁵ = 32:  five 2s multiplied, starting from 1
        2⁰ = 1,   2⁻³ = 1/8,   and  2ᵃ × 2ᵇ = 2^(a + b)

Quick refresher. Multiplication is fast adding: 5 × 4 is "four 5s added." Exponents are fast multiplying: 2⁵ is "five 2s multiplied." The big number on the floor is the base — the thing being multiplied. The little number up top is the exponent — it counts how many copies join the pile.

        base  →  2⁵  ←  exponent (the copy counter)

The picture that makes everything click: start at 1, then multiply by the base once for each notch of the exponent. Five notches of 2:

        1 → 2 → 4 → 8 → 16 → 32
          ×2   ×2   ×2   ×2    ×2

Two facts fall out of this picture with zero memorizing: 2¹ = 2 (one multiplication) and 2⁰ = 1 (no multiplications — you never leave the starting line).

Now the honors move: keep walking PAST zero. Watch the powers of 2 descend:

        2³ = 8   →   2² = 4   →   2¹ = 2   →   2⁰ = 1
             ÷2          ÷2          ÷2

Each step down divides by 2. So why stop? One more step down:

        2⁻¹ = 1/2      2⁻² = 1/4      2⁻³ = 1/8

        A negative exponent means: flip the base into a fraction.
        2⁻³ = 1/2³ = 1/8

The exponent is still a copy counter — negative just means the copies go on the BOTTOM of a fraction.

Fractions can be bases too, and they behave perfectly:

        (3/2)² = 3/2 × 3/2 = 9/4        (multiply numerators, multiply denominators)
        (1/2)³ = 1/2 × 1/2 × 1/2 = 1/8

The three exponent laws

All three laws are just the copy counter doing arithmetic. Read each one as "count the copies."

Law 1 — Multiplying same-base powers: ADD the exponents.

        2³ × 2² = (2 × 2 × 2) × (2 × 2) = 2⁵
        Three copies plus two copies = five copies.  2ᵃ × 2ᵇ = 2^(a + b)

Law 2 — Dividing same-base powers: SUBTRACT the exponents.

        2⁵ ÷ 2² = (2 × 2 × 2 × 2 × 2) ÷ (2 × 2) = 2 × 2 × 2 = 2³
        Two copies cancel off the top and bottom.  2ᵃ ÷ 2ᵇ = 2^(a − b)

Law 3 — A power of a power: MULTIPLY the exponents.

        (2³)² = 2³ × 2³ = 2^(3 + 3) = 2⁶
        Two groups of three copies = six copies.  (2ᵃ)ᵇ = 2^(ab)

And here is the beautiful part — the laws EXPLAIN the weird powers:

        2³ ÷ 2³ = 2^(3 − 3) = 2⁰  ... but anything ÷ itself is 1, so 2⁰ = 1 ✅
        2³ ÷ 2⁵ = 2^(3 − 5) = 2⁻² ... and cancelling copies leaves 1/(2 × 2) = 1/4 ✅

No new rules to memorize. The laws were hiding in the copy counter all along.

Worked example — watch every step:

        Simplify 2⁴ × 2³ ÷ 2⁵.

        Step 1:  2⁴ × 2³ = 2^(4 + 3) = 2⁷      (Law 1: multiplying joins the copy piles)
        Step 2:  2⁷ ÷ 2⁵ = 2^(7 − 5) = 2²      (Law 2: dividing cancels copies)
        Answer:  2² = 4

        Check by brute force: 16 × 8 ÷ 32 = 128 ÷ 32 = 4 ✅

Two exponents have pet names: the 2nd power is squared (5² = 25 fills a 5 × 5 square) and the 3rd is cubed (2³ = 8 fills a 2 × 2 × 2 cube). And these powers of 2 are worth memorizing — this lesson runs on them:

        2¹ = 2    2² = 4    2³ = 8    2⁴ = 16    2⁵ = 32
        2⁶ = 64   2⁷ = 128  2⁸ = 256  2⁹ = 512   2¹⁰ = 1,024

✏️ Your Turn

(a) 2³ × 2⁴   (b) 10⁵ ÷ 10³   (c) 3⁻²   (d) (2/3)²   (e) (5²)²

Answers: (a) 2^(3 + 4) = 2⁷ = 128. (b) 10^(5 − 3) = 10² = 100. (c) 3⁻² = 1/3² = 1/9.
(d) (2/3)² = 2/3 × 2/3 = 4/9. (e) (5²)² = 5⁴ = 625 (check: 25² = 625 ✅).


─────────────────────────────────────────────
Lesson 2: The Doubling Machine Gets a Name — f(x) = a × 2^x
─────────────────────────────────────────────

📌 Key idea of this section:

        f(x) = 3 × 2^x   means   "start at 3, then double x times"
        f(x + 1) = 2 × f(x):  each new step doubles the WHOLE pile

One bacterium sits in a dish. Every hour it splits in two. A colony that starts at 3 cells keeps this diary:

        Hour (x):    0    1    2    3    4     5     6
        Cells f(x):  3    6   12   24   48    96   192

Now let's name this machine properly. Mathematicians write:

        f(x) = 3 × 2^x

Read it out loud as "f of x equals 3 times 2 to the x." The letter f is the machine's name. The x in parentheses is the input — the hour. f(x) is the output — the cells at that hour. So f(4) means "the cell count at hour 4":

        f(4) = 3 × 2⁴ = 3 × 16 = 48

ORDER OF OPERATIONS ALERT: the exponent fires BEFORE the ×3. You compute 2⁴ = 16 first, then multiply by 3. (3 × 2⁴ is NOT 6⁴ — that's Mistake 2 in Lesson 8!)

Check the two ends of the table:

        f(0) = 3 × 2⁰ = 3 × 1 = 3   ✅  (the zero exponent = the starting line)
        f(6) = 3 × 2⁶ = 3 × 64 = 192   ✅

The secret law of the doubling machine

Here is a fact worth proving, not just noticing: each step doubles the ENTIRE pile so far. In symbols, f(x + 1) = 2 × f(x). Watch the proof — every step has a reason:

        f(x + 1) = 3 × 2^(x + 1)        (the definition, with x + 1 plugged in for x)
                 = 3 × 2^x × 2¹         (Law 1 backwards: 2^(x + 1) = 2^x × 2¹)
                 = 2 × (3 × 2^x)        (multiplication can be reordered)
                 = 2 × f(x)             (3 × 2^x IS f(x), by definition)

No memorizing — that was Law 1 from Lesson 1 doing all the work.

How big is each jump?

Look at the table's jumps: +3, +6, +12, +24, +48, +96. The jumps are doubling too! Here's why, using the factoring trick (pull out the common piece):

        jump = f(x + 1) − f(x)
             = 3 × 2^(x + 1) − 3 × 2^x        (definition of both terms)
             = 3 × 2^x × (2 − 1)              (factor out 3 × 2^x from both pieces)
             = 3 × 2^x × 1 = f(x)

The jump EQUALS the current value. When something doubles, it gains as much in one step as the whole pile is worth — that's why doubling doesn't just grow, it accelerates. The colony gains more between hours 5 and 6 (+96) than it gained in all previous hours combined (3 + 6 + 12 + 24 + 48 = 93).

The doubling-total trick

That last comparison hides a famous pattern. The pile so far is always 1 less than the next double:

        1 + 2 + 4 + 8 = 15 = 16 − 1
        1 + 2 + 4 + 8 + 16 = 31 = 32 − 1

In general:  1 + 2 + 4 + ... + 2ⁿ = 2^(n + 1) − 1.  Keep this in your pocket — challenge problem 89 makes you PROVE it, and problems 83 and 90 will use it.

A word from history

Legend says the inventor of chess asked a king for rice: 1 grain on square 1, 2 on square 2, 4 on square 3, doubling across all 64 squares. The king laughed — until his treasurers computed. Square n holds 2^(n − 1) grains, so square 64 alone wants 2⁶³ grains. How huge is that? With a clever estimate from Lesson 1's laws (problem 86), you'll show it's about 8 × 10¹⁸ grains — more rice than any kingdom could ever grow. Doubling starts like a joke and ends like a flood.

✏️ Your Turn

Let f(x) = 5 × 2^x.
(a) Find f(0).   (b) Find f(3).   (c) Compute f(4) and f(5), and check that f(5) = 2 × f(4).

Answers: (a) f(0) = 5 × 2⁰ = 5 × 1 = 5. (b) f(3) = 5 × 2³ = 5 × 8 = 40.
(c) f(4) = 5 × 16 = 80 and f(5) = 5 × 32 = 160 — and indeed 160 = 2 × 80 ✅.


─────────────────────────────────────────────
Lesson 3: Three Families — Linear, Exponential, and (Peek!) Quadratic
─────────────────────────────────────────────

📌 Key idea of this section:

        Linear:       the GAPS stay the same        (add d every step)
        Exponential:  the RATIOS stay the same      (multiply by b every step)
        Quadratic:    the gaps change — but the gaps OF the gaps stay the same

Three functions walk up to x = 0, 1, 2, 3, 4. Here are their value tables:

        f(x) = 2x + 3:     3,   5,   7,   9,  11
        g(x) = 3 × 2^x:    3,   6,  12,  24,  48
        h(x) = x²:         0,   1,   4,   9,  16

Each family has a fingerprint. Run all three checks on any mystery sequence:

  · The gap check: subtract neighbors. Same gap every time → linear.
        f: 5 − 3 = 2,  7 − 5 = 2,  9 − 7 = 2,  11 − 9 = 2.  Constant gaps → LINEAR.

  · The ratio check: divide next ÷ now. Same ratio every time → exponential.
        g: 6 ÷ 3 = 2,  12 ÷ 6 = 2,  24 ÷ 12 = 2,  48 ÷ 24 = 2.  Constant ratios → EXPONENTIAL.

  · The second-gap check: if the gaps change, subtract the GAPS. Constant second gaps → quadratic.
        h: gaps are 1, 3, 5, 7. Second gaps: 3 − 1 = 2, 5 − 3 = 2, 7 − 5 = 2. Constant → QUADRATIC.

Why do the squares have constant second gaps? Their gaps are the odd numbers 1, 3, 5, 7, ... and odd numbers march upward by 2. That's a story for your quadratics lessons — for now, the fingerprint is enough.

Beware the traps

        3, 6, 9, 12     feels multiply-ish, but gaps are 3, 3, 3 → LINEAR (the classic trap!)
        1, 2, 4, 7, 11  gaps 1, 2, 3, 4 — growing! Exponential? Ratios: 2 ÷ 1 = 2,
                        4 ÷ 2 = 2, but 7 ÷ 4 = 1.75 — NOT constant. Not exponential!
                        Second gaps: 1, 1, 1 — constant → it's in the quadratic family.

The race of the century: x² vs 2^x

Which grows faster — squaring or doubling? Line them up:

        x:        1    2    3     4     5     6
        x²:       1    4    9    16    25    36
        2^x:      2    4    8    16    32    64

Watch the drama: they tie at x = 2 (4 = 4). The quadratic sneaks AHEAD at x = 3 (9 beats 8). They tie again at x = 4 (16 = 16). Then 2^x pulls ahead at x = 5 (32 beats 25) and never looks back.

Why does exponential always win eventually? Look at the jumps. From x = 4 to 7, the jumps of 2^x are 16, 32, 64 — they keep DOUBLING. The jumps of x² are 9, 11, 13 — they only creep up by 2. A machine whose jumps multiply will always eventually bury a machine whose jumps merely add. That's true against x², x³, even x¹⁰⁰ — exponential beats every polynomial in the long run.

✏️ Your Turn

Classify each sequence as linear, exponential, or quadratic, and name the evidence:
(a) 2, 5, 8, 11   (b) 4, 12, 36, 108   (c) 2, 6, 12, 20

Answers: (a) Linear — gaps 3, 3, 3. (b) Exponential — ratios 3, 3, 3.
(c) Quadratic — gaps 4, 6, 8, but second gaps 2, 2. (It's x² + x: 1 + 1 = 2, 4 + 2 = 6, 9 + 3 = 12, 16 + 4 = 20 ✅.)


─────────────────────────────────────────────
Lesson 4: The Growth Factor — and the Percent Connection
─────────────────────────────────────────────

📌 Key idea of this section:

        growth factor  b = next ÷ now
        "grows by 50%"  →  factor 3/2      "shrinks by 25%"  →  factor 3/4

Every exponential pattern has one motor inside: the number every step multiplies by. Find it with a single division — pick any two neighbors and compute next ÷ now:

        4, 20, 100    →  20 ÷ 4 = 5      →  factor ×5
        96, 48, 24    →  48 ÷ 96 = 1/2   →  factor ×1/2  (a shrinker!)

The percent connection

Word problems at this level speak in percents, so let's translate. "Grows by 50%" sounds mysterious until you do it once, slowly:

        A colony of 40 grows by 50%. What is the new size?

        Step 1:  the increase is 50% of 40 = 1/2 × 40 = 20     ("of" means multiply)
        Step 2:  add the increase on:  40 + 20 = 60

Now the shortcut that turns this into a factor. Watch the 40 get factored out:

        40 + (1/2 × 40) = 40 × (1 + 1/2) = 40 × 3/2 = 60

So "grows by 50%" is just "multiply by 3/2" wearing a costume. The general translation:

        grows by p%   →  factor (1 + p/100)      shrink by p%   →  factor (1 − p/100)

        grows by 50%  →  × 3/2        shrinks by 25%  →  × 3/4
        doubles       →  × 2 (that's +100%!)     halves         →  × 1/2
        grows by 10%  →  × 11/10      shrinks by 10%  →  × 9/10

Finding the factor from two snapshots that AREN'T neighbors

Here is the honors upgrade. You don't always get neighboring values. Suppose you only know:

        f(1) = 8  and  f(3) = 72.  Find the hourly growth factor b.

        Step 1:  two steps happened between hour 1 and hour 3, so  8 × b × b = 72,
                 which is  8b² = 72
        Step 2:  divide both sides by 8:  b² = 9          (undo the ×8)
        Step 3:  undo the square:  b = 3                  (growth factors are positive,
                                                          so we take the positive root)
        Check:  8 → 24 → 72  ✅  (8 × 3 = 24, then 24 × 3 = 72)

Notice what just happened: you solved b² = 9 — a tiny quadratic equation — by undoing the square. Quadratics are peeking in, exactly as promised.

Building a table with a fraction factor

Multiply by 3/2 the smart way: divide by 2 FIRST, then multiply by 3. Start 16, factor 3/2:

        16 → 24 → 36 → 54
        (16 ÷ 2 = 8, 8 × 3 = 24;  then 24 ÷ 2 = 12, 12 × 3 = 36;  then 36 ÷ 2 = 18, 18 × 3 = 54)

Dividing first keeps every number whole and friendly.

✏️ Your Turn

(a) Find the growth factor of 80, 40, 20.
(b) Start 8, factor ×3/2 — write the next two values.
(c) f(2) = 12 and f(4) = 108. Find b.

Answers: (a) 40 ÷ 80 = 1/2, so ×1/2. (b) 8 → 12 → 18 (8 ÷ 2 = 4, 4 × 3 = 12; then 12 ÷ 2 = 6, 6 × 3 = 18).
(c) Two steps: 12b² = 108 → b² = 9 → b = 3. Check: 12 → 36 → 108 ✅.


─────────────────────────────────────────────
Lesson 5: The Formula f(x) = a × b^x — Predict, Then SOLVE
─────────────────────────────────────────────

📌 Key idea of this section:

        f(x) = a × b^x      a = the start (the value at x = 0),  b = the growth factor
        To solve for x: peel the equation down to  b^x = b^(something), then match exponents.

Every exponential function fits one master shape: f(x) = a × b^x. The letter a is the start, because:

        f(0) = a × b⁰ = a × 1 = a        (any base to the 0 power is 1)

The letter b is the growth factor from Lesson 4. So "a colony starts at 3 and doubles" becomes f(x) = 3 × 2^x in one line.

Predicting forward (the easy direction):

        f(x) = 3 × 2^x.  Find f(4).
        Step 1:  exponent first:  2⁴ = 16
        Step 2:  then multiply:  3 × 16 = 48

Now the honors part: SOLVING the formula. Three kinds of unknowns, three worked examples, every step shown.

Solving for x (the exponent is the unknown):

        Solve  3 × 2^x = 96.

        Step 1:  divide both sides by 3:   2^x = 32         (undo the ×3 — the 3 is
                                                              multiplied, so divide it away)
        Step 2:  rewrite 32 as a power of 2:   2^x = 2⁵     (your memorized powers of 2!)
        Step 3:  same base on both sides, so the exponents must match:   x = 5
        Check:  3 × 2⁵ = 3 × 32 = 96 ✅

Solving for the start a:

        Solve  a × 2⁴ = 48.

        Step 1:  compute the power:  2⁴ = 16, so the equation is  16a = 48
        Step 2:  divide both sides by 16:  a = 3            (undo the ×16)
        Check:  3 × 2⁴ = 3 × 16 = 48 ✅

Solving for BOTH a and b (a mini system):

        f(0) = 2  and  f(2) = 18.  Find the function.

        Step 1:  f(0) = a, so  a = 2                        (the start is handed to you)
        Step 2:  f(2) = 2 × b² = 18
        Step 3:  divide both sides by 2:  b² = 9
        Step 4:  undo the square:  b = 3
        Answer:  f(x) = 2 × 3^x
        Check:  f(2) = 2 × 3² = 2 × 9 = 18 ✅

That's a system of two equations (one for each clue), solved one piece at a time. Two clues, two unknowns — the clues always match the unknowns.

When does it pass a target? (an inequality)

        When does 3 × 2^x first pass 50?

        Step 1:  test powers of 2 against the target:  2⁴ = 16 → 3 × 16 = 48 (not past 50!)
        Step 2:  next power:  2⁵ = 32 → 3 × 32 = 96 (past!)
        Answer:  at x = 5. Testing powers beats guessing — the powers of 2 are the only
        landing spots the function can hit.

Two methods, one answer

Problem: start 2, triple every step, value after 4 steps?
Method 1 (table):  2 → 6 → 18 → 54 → 162.
Method 2 (formula):  f(4) = 2 × 3⁴ = 2 × 81 = 162.
Same destination. The table is the local train; the formula is the express. Honors students ride both and check that they agree.

A word from science

In 1965, engineer Gordon Moore noticed computer chips were doubling in power roughly every two years — and predicted it would continue. It did, for decades: about 25 doublings between his prediction and the phone in your pocket. That's why one phone outmuscles a room-sized 1960s computer by a factor of 2²⁵ — more than 33 million. Moore's "law" is f(x) = a × 2^x wearing a lab coat.

✏️ Your Turn

(a) f(x) = 4 × 3^x. Find f(3).
(b) Solve 2 × 5^x = 250.
(c) f(0) = 5 and f(2) = 45. Find a and b.

Answers: (a) f(3) = 4 × 3³ = 4 × 27 = 108.
(b) 5^x = 125 (divide by 2), and 125 = 5³, so x = 3. Check: 2 × 125 = 250 ✅.
(c) a = 5 from the first clue; then 5b² = 45 → b² = 9 → b = 3. So f(x) = 5 × 3^x.


─────────────────────────────────────────────
Lesson 6: Time Travel — Dividing Backwards, and Why f(−2) Makes Sense
─────────────────────────────────────────────

📌 Key idea of this section:

        Forward one step: × b.   Backward one step: ÷ b.
        f(−1) = a/b,  f(−2) = a/b²  —  negative exponents ARE time travel.

The famous pond puzzle, upgraded. Lily pads double every day. On day 20 the pond is completely covered. When was it half covered? Day 19 — one step back is one ÷2, and the calendar is innocent. Now the harder question: when was it 1/16 covered?

        Step 1:  how many halvings make 1/16?  1/16 = 1/2 × 1/2 × 1/2 × 1/2 = (1/2)⁴
        Step 2:  four halvings = four steps back:  day 20 − 4 = day 16

On day 16 the pond looked 15/16 EMPTY — and four days later it was choked solid. Exponential growth spends almost all its time looking harmless. (Ecologists lose sleep over exactly this.)

The backwards machine

Going backwards undoes the multiplying, so divide by the factor once per step back:

        earlier value = later value ÷ b^(steps back)

        A doubling colony has 96 cells now. How many were there 5 hours ago?
        Step 1:  2⁵ = 32                       (five steps back = divide by 2 five times)
        Step 2:  96 ÷ 32 = 3 cells
        Check forward: 3 × 2⁵ = 96 ✅  — backwards and forwards must always agree.

Solving for the TIME itself

Now let the unknown be HOW MANY steps back. This is an equation with x in the exponent — and the moves are pure algebra:

        96 ÷ 2^x = 3.  Find x.

        Step 1:  multiply both sides by 2^x:   96 = 3 × 2^x     (2^x was dividing, so
                                                                  multiply it away)
        Step 2:  divide both sides by 3:   32 = 2^x             (undo the ×3)
        Step 3:  rewrite 32 as a power:   2⁵ = 2^x
        Step 4:  match exponents:   x = 5
        Check:  96 ÷ 2⁵ = 96 ÷ 32 = 3 ✅

Same answer as the worked example above — because it's the same question wearing equation clothes.

Negative time is real (mathematically)

Here is the payoff from Lesson 1's negative exponents. For f(x) = 3 × 2^x:

        f(−1) = 3 × 2⁻¹ = 3 × 1/2 = 3/2     (one hour BEFORE the clock started)
        f(−2) = 3 × 2⁻² = 3 × 1/4 = 3/4     (two hours before)

The math and the meaning agree perfectly: two hours before the start, the colony was 3 ÷ 2 ÷ 2 = 3/4 of a cell. (A real colony can't have 3/4 of a cell — models have borders! But the PATTERN extends backwards flawlessly.)

✏️ Your Turn

(a) A doubling rumor has reached 192 people. How many knew 3 hours ago?
(b) Doubling lilies fill a pond on day 30. When was it 1/8 covered?
(c) Solve 144 ÷ 2^x = 9.

Answers: (a) 192 ÷ 2³ = 192 ÷ 8 = 24 people.
(b) 1/8 = (1/2)³, so 3 steps back: day 27.
(c) Multiply by 2^x: 144 = 9 × 2^x. Divide by 9: 16 = 2^x. Since 16 = 2⁴, x = 4.
Check: 144 ÷ 2⁴ = 144 ÷ 16 = 9 ✅.


─────────────────────────────────────────────
Lesson 7: The Halving Machine — Exponential Decay with Honest Fractions
─────────────────────────────────────────────

📌 Key idea of this section:

        A factor between 0 and 1 means DECAY:  f(x) = 64 × (1/2)^x halves every step.
        Decay never reaches 0 — it just gets closer and closer.

Drop a bouncy ball from 64 cm. Each bounce reaches half the height before it:

        64 → 32 → 16 → 8 → 4 → 2 → 1 → ...

Same machine as doubling — a constant factor every step — but the factor is 1/2, so values shrink. Shrinking by a constant factor is exponential decay. Everything from Lessons 4–6 still works, because the machine never changed:

        factor check:   32 ÷ 64 = 1/2 ✅
        formula:        height after 4 bounces = 64 × (1/2)⁴ = 64 × 1/16 = 4 cm

Fraction powers, honestly computed. Raise the top AND the bottom separately:

        (1/2)⁴ = 1⁴/2⁴ = 1/16          (3/4)² = 3²/4² = 9/16

Three ways to write the same decay. All of these say "halve, x times":

        (1/2)^x   =   1/2^x   =   2⁻^x
        Check at x = 3:  (1/2)³ = 1/8,  and  1/2³ = 1/8,  and  2⁻³ = 1/8 ✅

Pick whichever form makes the problem friendliest — they're one machine with three name tags.

A decay chain with a 3/4 factor. "Loses 25% per step" means factor 3/4. Start 256 and divide by 4 first, then multiply by 3:

        256 → 192 → 144 → 108 → 81
        (256 ÷ 4 = 64, 64 × 3 = 192;  192 ÷ 4 = 48, 48 × 3 = 144;  and so on)

Half-life: the clock inside decay. The half-life is the time for half to disappear. Caffeine in your body has a half-life of about 4–6 hours. With 80 mg aboard and a 4-hour half-life:

        after 4 h: 40 mg   →   after 8 h: 20 mg   →   after 12 h: 10 mg
        (12 hours = 3 half-lives, so 80 × (1/2)³ = 80/8 = 10)

Does decay ever reach zero? Compute f(10) for the ball: 64 × (1/2)¹⁰ = 64/1,024 = 1/16 cm. Tiny — but NOT zero. No matter how far you go, (1/2)^x is a fraction with a 1 on top; it can shrink toward 0 forever but never arrives. Mathematicians say the height "approaches 0." In real life, once you're down to a few atoms the model stops applying — remember, models have borders.

A word from science

Every living thing carries a trace of radioactive carbon-14, which halves about every 5,700 years. When something dies, the clock starts: half left after 5,700 years, a quarter after 11,400, an eighth after 17,100. In the 1940s, Willard Libby turned that halving machine into a stopwatch for archaeologists — carbon dating — and won a Nobel Prize. Fossils tell their age by how much has decayed: measure the fraction left, count the halvings, multiply by 5,700.

✏️ Your Turn

(a) f(x) = 81 × (1/3)^x. Find f(3).
(b) You have 240 mg of a medicine in your blood, half-life 3 hours. How much is left after 9 hours?
(c) Solve 64 × (1/2)^x = 4.

Answers: (a) f(3) = 81 × (1/3)³ = 81 × 1/27 = 3. (b) 9 hours = 3 half-lives: 240 → 120 → 60 → 30 mg.
(c) Divide by 64: (1/2)^x = 4/64 = 1/16. Since 1/16 = (1/2)⁴, x = 4. Check: 64 × 1/16 = 4 ✅.


─────────────────────────────────────────────
Lesson 8: Watch Out! Six Classic Mistakes (Honors Edition)
─────────────────────────────────────────────

📌 Keep the recipes in sight:

        f(x) = a × b^x.   b = next ÷ now.   Backwards = ÷ b.   2⁻ⁿ = 1/2ⁿ.

Mistake 1: Thinking the exponent is a multiplier

        2³ = 2 × 3 = 6?   ❌

The exponent is a COPY COUNTER, not a times sign: 2³ = 2 × 2 × 2 = 8. Walk the line from Lesson 1: start at 1, then ×2, ×2, ×2 — three hops, landing on 8.

Mistake 2: Multiplying the base before the exponent

        3 × 2⁴ = 6⁴ = 1,296?   ❌

Exponents fire BEFORE multiplication — always. The correct order: 2⁴ = 16 first, then 3 × 16 = 48. The ×3 has to wait its turn. (This is the most common honors-level error on tests. Now it's yours to avoid.)

Mistake 3: Thinking (2x)² = 2x²

        (2x)² = 2x²?   ❌

The square applies to EVERYTHING inside the parentheses: (2x)² = (2x)(2x) = 4x². Test it with a number — let x = 3:

        (2 × 3)² = 6² = 36      but      2 × 3² = 2 × 9 = 18

36 ≠ 18, so the two expressions can't be the same. When in doubt, plug in a number and let arithmetic be the judge.

Mistake 4: Negative exponent panic

        2⁻³ = −8?   ❌

A negative exponent makes a RECIPROCAL, not a negative answer: 2⁻³ = 1/2³ = 1/8. The minus sign lives in the exponent, and it means "flip into a fraction" — the value stays positive.

Mistake 5: Percent-factor confusion

        "The colony grew by 50%, so the factor is 50"?   ❌

Growing by 50% means the factor is 1 + 1/2 = 3/2. And be careful the other way too: a factor of ×2 means growing by 100% (you ADD a whole extra copy), not by 2%. The factor is always 1 plus (or minus) the percent as a fraction.

Mistake 6: Off-by-one steps (a.k.a. the pond panic)

        Start 5, double for 3 steps → 5 × 2⁴ = 80?   ❌
        Pond full day 20 → half full day 10?   ❌

Three steps means three multiplications: 5 × 2³ = 40. The start itself is step 0 — it uses up no multiplication. And the pond: time isn't what halves — the COVERAGE halves each step back. Full on day 20 means half on day 19. Before computing, say out loud: "how many multiplications actually happened — and which direction am I walking?"


─────────────────────────────────────────────
Lesson 9: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Exponent laws:  2ᵃ × 2ᵇ = 2^(a+b)   ·   2ᵃ ÷ 2ᵇ = 2^(a−b)   ·   (2ᵃ)ᵇ = 2^(ab)
        Special powers:  2⁰ = 1   ·   2⁻ⁿ = 1/2ⁿ   ·   (p/q)ⁿ = pⁿ/qⁿ
        The function:   f(x) = a × b^x   with a = f(0) and b = next ÷ now = f(x+1) ÷ f(x)
        Percents:       +p% → ×(1 + p/100)   ·   −p% → ×(1 − p/100)
        Backwards:      ÷ b per step back  ·  f(−n) = a/bⁿ
        Solving:        b^x = bⁿ  →  x = n   (peel to the same base, then match exponents)
        Families:       same gap → linear  ·  same ratio → exponential  ·  same second gap → quadratic

The recap list

  · An exponent counts multiplications: 2⁵ = 32, 2⁰ = 1 (zero multiplications), 2⁻³ = 1/8 (copies on the bottom).
  · The three exponent laws are just copy-counting: add when multiplying, subtract when dividing, multiply when stacking powers.
  · f(x) = a × b^x names the whole machine: a is the start, b is the factor, x counts the steps.
  · Each doubling step's jump equals the entire current value — that's why growth accelerates.
  · Constant gaps mean linear, constant ratios mean exponential, constant second gaps mean quadratic.
  · "Grows by p%" is the factor (1 + p/100) in disguise; "shrinks by p%" is (1 − p/100).
  · Solve b^x = bⁿ by matching exponents — after peeling away everything multiplied on the outside.
  · Backwards means divide: earlier = later ÷ b^steps, and negative exponents are time travel.
  · A factor between 0 and 1 is decay: the value approaches 0 but never arrives.
  · The doubling total: 1 + 2 + 4 + ... + 2ⁿ = 2^(n+1) − 1.

The magic sentence

        Add the same amount every step — that's linear.
        Multiply by the same factor every step — that's exponential.
        Factor = next ÷ now, and f(x) = a × b^x tells the future, the past, and everything between.

Say it out loud three times. Seriously!

Why this matters

You can now read the math inside bacteria colonies, viral videos, savings accounts, computer chips, and ancient fossils — and you can do more than read it: you can solve for the time, the start, and the factor, translate percents, and prove why exponential beats linear and quadratic in the long run. One question remains open: what if 2^x = 75, where 75 isn't a clean power of 2? Later math hands you the machine for that — logarithms, the ultimate backwards button — and everything you practiced in Lesson 6 is the foundation. The door is open.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Exponent laws:  2ᵃ × 2ᵇ = 2^(a+b)  ·  2ᵃ ÷ 2ᵇ = 2^(a−b)  ·  (2ᵃ)ᵇ = 2^(ab)  ·  2⁻ⁿ = 1/2ⁿ
        Growth factor:  b = next ÷ now   ·   +p% → ×(1 + p/100)
        The function:   f(x) = a × b^x,  with a = f(0)
        Solving:        peel to b^x = bⁿ, then match exponents
        Backwards:      divide by b once per step back
        Doubling total:  1 + 2 + 4 + ... + 2ⁿ = 2^(n+1) − 1

Grab a pencil and paper. Start with the green ones — they use the exact patterns from the lessons. Some problems are open-ended: they have more than one right answer. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "Is this adding or multiplying — and how many steps have actually passed?"


🟢 EASY (Problems 1–60)

Problems 1–6 — Evaluate. Watch for negative exponents and fraction bases! (Lesson 1)

  1. 2⁶
  2. 3⁴
  3. 5³
  4. 2⁻³
  5. (3/2)²
  6. 10⁻²

Problems 7–12 — Simplify to a single power using the exponent laws. (Lesson 1)

  7. 2³ × 2⁴
  8. 3⁵ ÷ 3²
  9. (5²)³
  10. 2⁹ ÷ 2⁷
  11. 7³ × 7⁻³
  12. (2³)² ÷ 2⁴

Problems 13–18 — Function practice. Let f(x) = 3 × 2^x. (Lesson 2)

  13. f(0)
  14. f(2)
  15. f(4)
  16. f(−1)
  17. f(−2)
  18. Find x so that f(x) = 24.

Problems 19–24 — Write the next TWO terms, and name the multiplier. (Lessons 2 and 4)

  19. 2, 6, 18, ___, ___
  20. 5, 10, 20, ___, ___
  21. 96, 48, 24, ___, ___
  22. 4, 20, 100, ___, ___
  23. 7, 14, 28, ___, ___
  24. 16, 24, 36, ___, ___

Problems 25–30 — Linear, exponential, or quadratic? Name the evidence. (Lesson 3)

  25. 4, 7, 10, 13, ...
  26. 4, 8, 16, 32, ...
  27. 1, 4, 9, 16, ...
  28. 3, 6, 9, 12, ...
  29. 2, 6, 12, 20, ...
  30. 81, 27, 9, 3, ...

Problems 31–36 — Find the growth factor: next ÷ now. (Lesson 4)

  31. 6, 18, 54
  32. 8, 12, 18
  33. 5, 20, 80
  34. 72, 36, 18
  35. 3, 21, 147
  36. 100, 90, 81

Problems 37–42 — Percent ↔ factor translations. (Lesson 4)

  37. "Grows by 50% each hour." What is the factor?
  38. "Doubles every hour." What percent growth is that per hour?
  39. "Shrinks by 25% each step." What is the factor?
  40. "Grows by 10% each year." What is the factor?
  41. The factor is ×3/2. What percent growth is that?
  42. The factor is ×4. What percent growth is that?

Problems 43–48 — Compute the value a × b^x. Exponent BEFORE multiplying! (Lesson 5)

  43. a = 5, b = 2, x = 3
  44. a = 2, b = 3, x = 4
  45. a = 3, b = 4, x = 2
  46. a = 6, b = 1/2, x = 3
  47. a = 1, b = 2, x = 8
  48. a = 4, b = 3, x = 3

Problems 49–54 — Word problems! Name a, b, and x first, then compute. (Lesson 5)

  49. A single bacterium doubles every hour. How many after 6 hours?
  50. A colony starts at 5 cells and triples every hour. How many after 3 hours?
  51. A video has 3 views on day 0 and doubles every day. How many views on day 5?
  52. 2 people know a secret, and the number who know triples every hour. How many
      know after 3 hours?
  53. An algae blob weighs 4 grams and doubles every day. How much after 4 days?
  54. A colony of 8 cells grows by 50% every hour. How many cells after 3 hours?
      (Factor 3/2 — and divide by 2 before multiplying by 3!)

Problems 55–60 — True or false? (Lessons 1–7)

  55. "2⁵ means 2 times 5, which is 10."
  56. "(2x)² and 2x² are the same expression."
  57. "2⁻⁴ is a negative number."
  58. "If f(x) = 3 × 2^x, then f(0) = 0."
  59. "A growth factor of 1/2 means the values shrink."
  60. "Once x² pulls ahead of 2^x (like it does at x = 3), it stays ahead forever."


🟡 INTERMEDIATE (Problems 61–85)

Problems 61–64 — Solve for x. Peel to the same base, then match exponents. (Lesson 5)

  61. 2^x = 64
  62. 3^x = 81
  63. 5 × 2^x = 80
  64. 3 × 3^x = 243   (Hint: 3 × 3^x = 3^(x + 1). Or just divide both sides by 3!)

Problems 65–68 — Solve for the START a. (Lesson 5)

  65. a × 2⁵ = 96
  66. a × 3³ = 54
  67. a × (1/2)⁴ = 5
  68. a × 4² = 48

Problems 69–72 — Two clues, two unknowns: find a and b, then write f(x). (Lessons 4 and 5)

  69. f(0) = 3 and f(1) = 12
  70. f(0) = 2 and f(2) = 50
  71. f(1) = 6 and f(3) = 54
  72. f(2) = 12 and f(4) = 48

Problems 73–76 — Time travel! Divide by the factor per step back. (Lesson 6)

  73. There are 96 cells now, doubling every hour. How many were there 5 hours ago?
  74. Doubling lilies fill a pond on day 18. When was it one-eighth covered?
  75. After 4 hours of tripling, a colony has 162 cells. How many started?
  76. Solve 48 ÷ 2^x = 6. (Multiply both sides by 2^x first!)

Problems 77–80 — The decay machine. (Lesson 7)

  77. A ball dropped from 64 cm bounces to half its height each time. How high is
      the 4th bounce? The 6th?
  78. You have 160 mg of caffeine in your body, half-life 5 hours. How much is left
      after 15 hours?
  79. A 256-gram sample loses 25% of its mass every day. How much is left after
      2 days? After 4 days?
  80. Solve 81 × (1/3)^x = 1.

Problems 81–83 — Races and inequalities: build the tables and find the crossing. (Lessons 3 and 5)

  81. Plan A pays f(x) = 4x + 20 dollars. Plan B pays g(x) = 2 × 2^x dollars.
      At which x does B first pay more than A?
  82. Compute x² and 2^x at x = 2, 3, 4, and 5. Describe the race in one sentence.
  83. You earn 1¢ on day 1, 2¢ on day 2, 4¢ on day 3 — doubling. After n days your
      TOTAL is 2ⁿ − 1 cents. What is the first day the total passes 500¢?
      (Solve the inequality 2ⁿ − 1 > 500 by testing powers of 2.)

Problems 84–85 — Explain yourself!

  84. Why does ANY exponential function with b > 1 eventually pass ANY linear
      function, even if the linear one gets a huge head start?
  85. f(x) = 64 × (1/2)^x gets closer and closer to 0 but never reaches it.
      Explain why it can NEVER equal 0. (What is on top of the fraction?)


🔴 CHALLENGE (Problems 86–100)

  86. The estimation trick. You know 2¹⁰ = 1,024 ≈ 10³. Use the exponent laws to
      estimate: (a) 2²⁰ = (2¹⁰)²   (b) 2⁶³ = 2³ × 2⁶⁰ = 2³ × (2¹⁰)⁶ — the rice on
      the chessboard's last square!
  87. The chessboard, precisely. Square n holds 2^(n − 1) grains. (a) How many on
      square 12? (b) Which is the FIRST square holding more than 500 grains?
      (c) What is the total on squares 1 through 12?
  88. The pond, seriously. Doubling lilies fill a pond on day 24. (a) When was it
      half covered? (b) When was it 1/16 covered? (c) A neighbor says on the 1/16
      day: "Relax, we have plenty of time." Explain the flaw in two sentences.
  89. Prove the doubling-total trick! (a) Verify: 1 + 2 + 4 + 8 + 16 + 32 = 63 = 64 − 1.
      (b) Daily cases of a rumor run 1, 2, 4, 8, ... What is the TOTAL over days 0–6?
      (c) Now prove it always works. Let S = 1 + 2 + 4 + ... + 2ⁿ. Write down 2S.
      Subtract S from 2S and watch everything cancel. What is left?
  90. The allowance showdown. Plan A pays $20 per week. Plan B pays 1¢ in week 1
      and doubles every week (total after n weeks: 2ⁿ − 1 cents). Who has more
      TOTAL money after 10 weeks? After 15 weeks? (2¹⁵ = 32,768 — build it by
      doubling 1,024 five times.)
  91. Backwards, twice. A colony triples every hour. After 4 hours there are 405
      cells. (a) How many cells started? (b) How many were there one hour before
      the end?
  92. The last bounce. A ball starts at 96 cm and each bounce reaches half the
      height before it. After WHICH bounce is the height first BELOW 3 cm?
      (Careful: "below 3" — exactly 3 doesn't count!)
  93. The crossing point. Colony A follows f(x) = 3 × 3^x. Colony B follows
      g(x) = 100 + 100x. At which step does A first take the lead — and by how much?
  94. Open-ended! Find TWO different (a, b) pairs that both give f(2) = 36.
      Check both. (Bonus: find one where b is a FRACTION.)
  95. Design it! (a) Invent a doubling word problem whose answer is 96.
      (b) Invent a decay word problem whose answer is 5. Then solve both to
      prove they work.
  96. The equal-colonies puzzle. Colony A follows f(x) = 4 × 2^x. Colony B follows
      g(x) = 4^x. Use exponent laws to find when they are EQUAL.
      (Hint: 4 = 2², so 4^x = (2²)^x = 2^(2x). Set 2² × 2^x = 2^(2x), match
      exponents, and solve x + 2 = 2x.)
  97. The exponent-law chain. (a) Simplify (2³ × 2^x) ÷ 2² to a single power of 2.
      (b) Then solve: your simplified expression equals 32. What is x?
  98. Negative time. f(x) = 5 × 3^x. (a) Compute f(−2). (b) Solve 5 × 3^x = 5/27.
      (What negative power of 3 is 1/27?)
  99. Why exponential beats quadratic. Compute the JUMPS of 2^x from x = 4 to 7,
      and the jumps of x² over the same steps. (The values: 2^x goes 16, 32, 64, 128;
      x² goes 16, 25, 36, 49.) What happens to each family's jumps — and why does
      that settle the race forever?
  100. The grand finale — design it! (a) Invent an equation a × b^x = 108 whose
       solution is x = 3, wrapped in a word problem. (b) Invent a backwards word
       problem whose answer is "3 hours ago." Then solve both to prove they work!


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — the exponent laws, the order of operations, the factor division, the step count, or the backwards direction.

Easy

  1–6:   64  (2⁶ = 2×2×2×2×2×2)  ·  81  (3×3×3×3)  ·  125  (5×5×5)
         1/8  (2⁻³ = 1/2³ = 1/8)  ·  9/4  (3/2 × 3/2 = 9/4)  ·  1/100  (10⁻² = 1/10²)

  7–12:  2⁷  (3 + 4 copies)  ·  3³  (5 − 2 copies)  ·  5⁶  (2 × 3 copies)
         2²  (9 − 7 copies)  ·  7⁰ = 1  (3 − 3 copies — anything⁰ = 1)
         2²  ((2³)² = 2⁶, then 2⁶ ÷ 2⁴ = 2²)

  13–18: 3  (3 × 2⁰ = 3 × 1)  ·  12  (3 × 4)  ·  48  (3 × 16)
         3/2  (3 × 2⁻¹ = 3 × 1/2)  ·  3/4  (3 × 2⁻² = 3 × 1/4)
         x = 3  (3 × 2^x = 24 → 2^x = 8 = 2³)

  19–24: 54, 162  (×3)  ·  40, 80  (×2)  ·  12, 6  (×1/2)
         500, 2,500  (×5)  ·  56, 112  (×2)
         54, 81  (×3/2: 36 ÷ 2 = 18, 18 × 3 = 54; then 54 ÷ 2 = 27, 27 × 3 = 81)

  25–30: linear (gaps +3, +3, +3)  ·  exponential (ratios 2, 2, 2)
         quadratic (gaps 3, 5, 7; second gaps 2, 2)
         linear (gaps +3 — the trap! adding, not multiplying)
         quadratic (gaps 4, 6, 8; second gaps 2, 2)
         exponential (ratios 1/3, 1/3, 1/3 — a decay factor)

  31–36: ×3  (18 ÷ 6)  ·  ×3/2  (12 ÷ 8 = 3/2)  ·  ×4  (20 ÷ 5)
         ×1/2  (36 ÷ 72)  ·  ×7  (21 ÷ 3)  ·  ×9/10  (90 ÷ 100 = 9/10)

  37–42: ×3/2  (1 + 1/2)  ·  100%  (×2 adds a whole extra copy)
         ×3/4  (1 − 1/4)  ·  ×11/10  (1 + 1/10)
         50%  (3/2 − 1 = 1/2)  ·  300%  (4 − 1 = 3, and 3 = 300%)

  43–48: 40  (5 × 2³ = 5 × 8)  ·  162  (2 × 3⁴ = 2 × 81)  ·  48  (3 × 4² = 3 × 16)
         3/4  (6 × 1/8 = 6/8)  ·  256  (1 × 2⁸)  ·  108  (4 × 3³ = 4 × 27)

  49–54: 64  (a=1, b=2, x=6: 1 × 2⁶)  ·  135  (5 × 3³ = 5 × 27)
         96  (3 × 2⁵ = 3 × 32)  ·  54  (2 × 3³ = 2 × 27)
         64  (4 × 2⁴ = 4 × 16)
         27  (8 × (3/2)³ = 8 × 27/8 = 27 — the 8s cancel!)

  55–60: False — 2⁵ = 32 (five 2s multiplied); 2 × 5 = 10
         False — (2x)² = (2x)(2x) = 4x² (test x = 3: 36 vs 18)
         False — 2⁻⁴ = 1/2⁴ = 1/16, which is positive (negative exponent = reciprocal)
         False — f(0) = 3 × 2⁰ = 3 × 1 = 3
         True — a factor between 0 and 1 is exponential decay
         False — from x = 5 on, 2^x leads (32 > 25), and its doubling jumps win forever

Intermediate

  61. 64 = 2⁶, so x = 6
  62. 81 = 3⁴, so x = 4
  63. Divide by 5: 2^x = 16 = 2⁴, so x = 4
  64. Divide by 3: 3^x = 81 = 3⁴, so x = 4. (Other method: 3 × 3^x = 3^(x+1) = 243 = 3⁵,
      so x + 1 = 5 and x = 4. Both roads reach x = 4!)

  65. 2⁵ = 32, so 32a = 96 → a = 3
  66. 3³ = 27, so 27a = 54 → a = 2
  67. (1/2)⁴ = 1/16, so a/16 = 5 → a = 80  (multiply both sides by 16)
  68. 4² = 16, so 16a = 48 → a = 3

  69. a = 3 (f(0) hands it to you); b = 12 ÷ 3 = 4.  f(x) = 3 × 4^x
  70. a = 2; 2b² = 50 → b² = 25 → b = 5.  f(x) = 2 × 5^x
      Check: f(2) = 2 × 25 = 50 ✅
  71. Two steps from 6 to 54: 6b² = 54 → b² = 9 → b = 3.
      Then f(1) = a × 3 = 6 → a = 2.  f(x) = 2 × 3^x
      Check: f(3) = 2 × 27 = 54 ✅
  72. Two steps from 12 to 48: 12b² = 48 → b² = 4 → b = 2.
      Then f(2) = a × 2² = 12 → 4a = 12 → a = 3.  f(x) = 3 × 2^x
      Check: f(4) = 3 × 16 = 48 ✅

  73. 96 ÷ 2⁵ = 96 ÷ 32 = 3 cells
  74. 1/8 = (1/2)³, so 3 steps back: day 15
  75. 162 ÷ 3⁴ = 162 ÷ 81 = 2 cells
  76. Multiply by 2^x: 48 = 6 × 2^x. Divide by 6: 8 = 2^x. Since 8 = 2³, x = 3.
      Check: 48 ÷ 2³ = 48 ÷ 8 = 6 ✅

  77. 4th bounce: 64 × (1/2)⁴ = 64/16 = 4 cm.  6th bounce: 64 × (1/2)⁶ = 64/64 = 1 cm.
  78. 15 hours = 3 half-lives: 160 → 80 → 40 → 20 mg
  79. Factor ×3/4. After 2 days: 256 → 192 → 144 g. After 4 days: 144 → 108 → 81 g.
  80. Divide by 81: (1/3)^x = 1/81. Since 81 = 3⁴, 1/81 = (1/3)⁴, so x = 4.
      Check: 81 × 1/81 = 1 ✅

  81. A: 20, 24, 28, 32, 36, 40.  B: 2, 4, 8, 16, 32, 64.
      At x = 4: 36 > 32 (A still ahead). At x = 5: 64 > 40 — B first passes at x = 5 ✅
  82. x = 2: 4 = 4 (tie). x = 3: 9 > 8 (x² ahead!). x = 4: 16 = 16 (tie again).
      x = 5: 32 > 25 (2^x ahead for good). The quadratic sneaks ahead once, then
      the exponential passes it and never looks back.
  83. Need 2ⁿ − 1 > 500, i.e. 2ⁿ > 501. Test powers: 2⁸ = 256 (no), 2⁹ = 512 (yes!).
      Day 9 — and the total is 511¢.

  84. The linear function's jumps NEVER change — it adds the same amount forever.
      The exponential's jumps keep multiplying (when doubling, each jump equals the
      entire current value). Once the exponential's single jump grows bigger than
      the linear function's fixed jump, it gains more every single step — and the
      gap explodes. A head start only delays the inevitable.
  85. (1/2)^x always equals 1/(a power of 2) — the TOP of the fraction is 1, and the
      bottom keeps growing (2, 4, 8, 16, ...). The only way a fraction equals 0 is
      for its top to be 0, and 1 is never 0. So 64 × (1/2)^x can shrink toward 0
      forever — but never arrive.

Challenge

  86. (a) 2²⁰ = (2¹⁰)² ≈ (10³)² = 10⁶ — about a million.
      (b) 2⁶³ = 2³ × 2⁶⁰ = 8 × (2¹⁰)⁶ ≈ 8 × (10³)⁶ = 8 × 10¹⁸ —
      8 followed by 18 zeros. The king never stood a chance.
      (Both moves are Law 3: (2ᵃ)ᵇ = 2^(ab).)
  87. (a) Square 12 holds 2¹¹ = 2,048 grains.
      (b) Square 10: it holds 2⁹ = 512 > 500, while square 9 holds only 2⁸ = 256.
      (c) Total = 2¹² − 1 = 4,096 − 1 = 4,095 grains (the doubling-total trick!).
  88. (a) Day 23 (one step back = ÷2). (b) 1/16 = (1/2)⁴, so 4 steps back: day 20.
      (c) On day 20 the pond looks 15/16 empty — but only 4 days of doubling remain.
      "Plenty of time" confuses the empty SPACE with the shrinking TIME: coverage
      doubles daily, so the last 4 days fill 15/16 of the pond.
  89. (a) 1 + 2 + 4 + 8 + 16 + 32 = 63 = 64 − 1 ✅
      (b) 1 + 2 + 4 + 8 + 16 + 32 + 64 = 127 (= 2⁷ − 1) ✅
      (c) Let S = 1 + 2 + 4 + ... + 2ⁿ.
          Then 2S =     2 + 4 + ... + 2ⁿ + 2^(n+1)      (multiply every term by 2)
          Subtract: 2S − S = 2^(n+1) − 1                (every other term cancels:
          the 2, 4, ..., 2ⁿ appear in both rows and vanish)
          Since 2S − S = S, we get S = 2^(n+1) − 1.  Proven — for ANY n! ✅
  90. After 10 weeks: A has 10 × $20 = $200. B has 2¹⁰ − 1 = 1,023¢ = $10.23 → A wins easily.
      After 15 weeks: A has $300. B has 2¹⁵ − 1 = 32,767¢ = $327.67 → B wins!
      (Building 2¹⁵: 1,024 → 2,048 → 4,096 → 8,192 → 16,384 → 32,768.)
      Doubling lost for 14 straight weeks — then took the lead forever.
  91. (a) 405 ÷ 3⁴ = 405 ÷ 81 = 5 cells. Check: 5 × 81 = 405 ✅
      (b) One hour back is one ÷3: 405 ÷ 3 = 135 cells.
  92. Bounce heights: 48, 24, 12, 6, 3, 1.5. Bounce 5 is EXACTLY 3 cm — not below!
      Bounce 6 is 1.5 cm. Answer: the 6th bounce ✅
  93. A: 3, 9, 27, 81, 243, 729.  B: 100, 200, 300, 400, 500, 600.
      Step 4: 243 < 500. Step 5: 729 > 600 — A first leads at step 5, by 129 ✅
  94. a × b² = 36. Two that work: (a = 9, b = 2): 9 × 4 = 36 ✅ and
      (a = 4, b = 3): 4 × 9 = 36 ✅. Fraction bonus: (a = 144, b = 1/2):
      144 × 1/4 = 36 ✅. Any pair with a × b² = 36 counts!
  95. Sample (a): "A colony starts at 3 cells and doubles every hour. How many
      after 5 hours?" → 3 × 2⁵ = 3 × 32 = 96 ✅
      Sample (b): "A 160-gram sample loses half its mass every day. How much is
      left after 5 days?" → 160 × (1/2)⁵ = 160/32 = 5 g ✅
      Yours may differ — if the doubling lands on 96 and the decay lands on 5, you're right!
  96. Set 4 × 2^x = 4^x. Rewrite with base 2: 2² × 2^x = (2²)^x.
      Left side: 2² × 2^x = 2^(x + 2)  (Law 1).  Right side: (2²)^x = 2^(2x)  (Law 3).
      Match exponents: x + 2 = 2x. Subtract x from both sides: 2 = x.
      Check: A(2) = 4 × 2² = 16 and B(2) = 4² = 16 ✅ — equal at x = 2, and after
      that B's bigger factor (×4) leaves A behind.
  97. (a) (2³ × 2^x) ÷ 2² = 2^(3 + x) ÷ 2² = 2^(3 + x − 2) = 2^(x + 1)  (Law 1, then Law 2)
      (b) 2^(x + 1) = 32 = 2⁵ → x + 1 = 5 → x = 4.
      Check: (2³ × 2⁴) ÷ 2² = 2⁷ ÷ 2² = 2⁵ = 32 ✅
  98. (a) f(−2) = 5 × 3⁻² = 5 × 1/9 = 5/9.
      (b) Divide by 5: 3^x = 1/27. Since 27 = 3³, we have 1/27 = 3⁻³, so x = −3.
      Check: 5 × 3⁻³ = 5 × 1/27 = 5/27 ✅
  99. Jumps of 2^x: 32 − 16 = 16, 64 − 32 = 32, 128 − 64 = 64 — the jumps DOUBLE
      (16, 32, 64). Jumps of x²: 25 − 16 = 9, 36 − 25 = 11, 49 − 36 = 13 — the
      jumps only creep up by 2 (9, 11, 13). The exponential's jumps multiply while
      the quadratic's jumps merely add — so even when the quadratic is ahead
      (like at x = 3), the exponential's leaps eventually dwarf it. That is WHY
      exponential wins the race, not just THAT it wins.
  100. Sample (a): "A colony starts at 4 cells and triples every hour. Solve
       4 × 3^x = 108 to find when it reaches 108 cells." → 3^x = 27 = 3³ → x = 3 ✅
       (Any a × b³ = 108 works — a = 4, b = 3 is the friendliest.)
       Sample (b): "A doubling rumor has reached 72 people. How many knew
       3 hours ago?" → 72 ÷ 2³ = 72 ÷ 8 = 9 people ✅
       Your problems may be different — if x = 3 solves the first and "3 hours ago"
       answers the second, you're right!


─────────────────────────────────────────────

🎉 You finished the whole lesson — the honors version! If you can solve these 100 problems, you truly own exponential growth: exponents as copy counters (even zero and negative ones), the three exponent laws, growth factors hiding in a single division, the f(x) = a × b^x machine running forwards AND backwards, percents as factors in disguise, decay approaching zero but never arriving, and the proof that exponential beats linear and quadratic in the long run. The next time someone says a video "blew up overnight," smile: you know the exact math of explosions — and when logarithms finally arrive to solve 2^x = 75, you'll be more than ready. Great work!
