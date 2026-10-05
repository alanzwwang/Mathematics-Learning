Algebraic Geometry — A Complete Lesson
══════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        (2, 5): two steps east, five steps north — you're there!

        Is (3, 7) on the line y = 2x + 1? Test: 2 × 3 + 1 = 7 ✅ Yes!

        y = x + 1 meets y = 2x − 2 at (3, 4) — a point obeying BOTH rules.

        (x − 3)² + (y − 4)² = 25: every point exactly 5 units from (3, 4).

Those four lines are algebraic geometry in action — the part of math where
shapes and equations turn out to be the same idea wearing two different
costumes. The first line gives a point's address on a map made of numbers.
The second asks whether a point belongs to a line — and answers with one
tiny computation. The third finds the single point where two lines shake
hands. And the fourth? One short equation draws an entire perfect circle.
Right now those lines might look a little mysterious. That's okay! By the
end of this lesson, you'll do all four yourself — and you'll be able to
prove exactly why each one works.

Why do people care? Because this is the math that makes computers DRAW!
Every video game world sits on a grid of numbered addresses. Every curve
your phone displays — every letter in this very font! — comes from an
equation telling pixels where to light up. GPS pins your position with two
numbers, robots steer by coordinates, and 3D printers follow shapes made of
rules. Algebraic geometry is the dictionary that translates between shapes
you can SEE and equations you can COMPUTE — and once you know both
languages, you can answer questions in one that look impossible in the
other.

In this lesson, you will:

  1.  Learn the coordinate plane — a map made of two number lines
  2.  Learn to plot points, name quadrants, and reflect across axes
  3.  Learn the big secret: an equation is a club rule that draws a shape
  4.  Learn the membership test — and run it BACKWARDS to find missing
      coordinates
  5.  Learn slope — including downhill, flat, and vertical lines
  6.  Learn y = mx + b — and the slopes of parallel and perpendicular
      lines (with the proof of the perpendicular rule!)
  7.  Learn TWO ways to find where lines meet — and how algebra counts
      the meetings before you ever draw
  8.  Learn the distance formula, midpoints, and the equation of a circle
  9.  Learn parabolas, transformations, and where lines meet curves
  10. Learn the common mistakes so you never make them
  11. Practice with 100 problems — including 20 real brain-stretchers!

How to use this lesson: Read the sections in order. Each section starts
with the key idea you'll learn in it. Take your time, and try every
"Your Turn" box with a pencil and paper. Keep graph paper nearby — drawing
the points yourself is where the magic happens. (No graph paper? Two
crossed number lines on plain paper are all a coordinate plane is!)
Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: Two Number Lines, One Map
─────────────────────────────────────────────

📌 Key idea of this section:

        Every point has an address: (x, y).
        x walks east/west, y walks north/south — and x ALWAYS goes first.
        Points and addresses match perfectly: one point, one address.

You already know the number line: a ruler that runs forever, with 0 in the
middle, positives marching east and negatives west. Now for the trick that
changed math forever: take TWO number lines. Lay one flat — that's the
X-AXIS, running east-west. Stand the other straight up — that's the Y-AXIS,
running north-south. Cross them at zero, and you get the COORDINATE PLANE:
a map that covers the whole flat world.

The spot where the axes cross is called the ORIGIN — the center of
everything. Its address is (0, 0): zero steps east-west, zero steps
north-south.

Here's the payoff: EVERY point on the plane now has an address, written as
two numbers in parentheses:

        (4, 2)  means:  start at the origin, walk 4 east, then 2 north.

The two numbers are called COORDINATES, and the pair is called an ORDERED
PAIR — because the order matters (more on that next lesson). The
x-coordinate always comes first: it gives the east-west walk. The
y-coordinate comes second: the north-south walk.

Two upgrades make this map truly complete.

Upgrade 1: coordinates don't have to be whole numbers. The address
(5/2, −3) is perfectly legal: two and a half steps east, then three south.
Fractions and decimals are welcome everywhere. The map has no gaps —
between any two addresses there are always more addresses.

Upgrade 2: the match is PERFECT in both directions. Every point has
exactly ONE address, and every address names exactly ONE point. No two
points share an address; no address points to two spots. Mathematicians
call this a ONE-TO-ONE CORRESPONDENCE, and it's what makes the whole
algebra-geometry dictionary trustworthy: when a computation hands you
(3, 4), you know there is exactly one spot it means.

Think of city streets: "meet me at 4th Avenue and 2nd Street" pins down one
exact corner. Or a theater ticket: row, then seat. Two numbers — one exact
spot. That's the whole idea!

A word from history: this brilliant idea is about 400 years old, from the
French mathematician René Descartes. Legend says he was watching a fly
crawl across his ceiling and realized he could pin down its exact position
with just two numbers — how far along the ceiling, how far across it. In
his honor, this grid is still called the Cartesian plane. Every time you
write (4, 2), you're using Descartes' four-century-old fly trick!

✏️ Your Turn

(a) What are the coordinates of the origin? (b) Give walking directions to
the point (5/2, −3). (c) True or false: somewhere on the plane there is a
point that has no address at all.

Answers: (a) (0, 0) — zero steps anywhere! (b) Walk 2½ steps east, then
3 steps south. (East-west first — the x always leads!) (c) False! Every
point has exactly one address and every address names exactly one point —
that's the one-to-one correspondence.


─────────────────────────────────────────────
Lesson 2: Plotting Points, Quadrants, and Mirror Tricks
─────────────────────────────────────────────

📌 Key idea of this section:

        (2, 5) and (5, 2) are DIFFERENT points — order matters!
        Signs name the quadrant. Flipping signs makes mirror images.

PLOTTING a point means marking its address on the plane. But beware the
classic trap:

        (2, 5):  2 east, 5 north.
        (5, 2):  5 east, 2 north.

Different walks, different spots! Row 2 seat 5 is not row 5 seat 2 — and
(2, 5) is not (5, 2). Say it with me: x first, y second. (If you ever
forget, the alphabet remembers: x comes before y!)

What about negatives? The axes don't stop at the origin — west and south
count too:

        (−3, 1):   3 WEST (negative east!), then 1 north.
        (2, −4):   2 east, then 4 SOUTH.
        (−3, −4):  3 west, then 4 south.

The four neighborhoods

The two axes slice the plane into four big regions called QUADRANTS,
numbered with Roman numerals, starting in the upper right and spinning
counter-clockwise:

        Quadrant I:    x positive, y positive    (east, north)
        Quadrant II:   x negative, y positive    (west, north)
        Quadrant III:  x negative, y negative    (west, south)
        Quadrant IV:   x positive, y negative    (east, south)

You can name a point's quadrant just by spying on its SIGNS: (−2, 7) has
signs (−, +) — Quadrant II. No drawing needed!

One riddle: which quadrant is (0, 3) in? Trick question — NONE! It sits
right ON the y-axis, on the fence between neighborhoods. Points on an axis
belong to no quadrant at all.

Mirror tricks: the three reflections

Now for something genuinely useful — and it uses nothing but sign flips.
Stand a mirror on an axis, and every point gets a twin:

        Reflect (x, y) across the X-AXIS:   (x, −y)
        Reflect (x, y) across the Y-AXIS:   (−x, y)
        Reflect (x, y) through the ORIGIN:  (−x, −y)

Why do the signs flip exactly like that? Reflecting across the x-axis keeps
your east-west walk the same but reverses north and south — so x stays put
and y flips sign. Reflecting across the y-axis reverses east and west
instead. And reflecting through the origin — a half-turn spin around
(0, 0) — reverses BOTH walks at once.

Try it: (4, −1) across the x-axis lands at (4, 1). Then (4, 1) across the
y-axis lands at (−4, 1). Notice anything? Two mirror flips — one per axis —
reached the same spot as one origin flip: (4, −1) spun halfway around lands
at (−4, 1). That's no coincidence: flipping y and then x flips both
coordinates — which is exactly what the origin reflection does. You'll
prove this carefully yourself in the challenge problems!

✏️ Your Turn

(a) Which quadrant holds (−4, −2)? (b) Which holds (6, −1)? (c) Where
exactly is (5, 0)? (d) Reflect (−3, 7) across the x-axis, then reflect the
result across the y-axis. Where do you land?

Answers: (a) Quadrant III — both signs negative. (b) Quadrant IV —
positive east, negative south. (c) On the x-axis itself (the fence!), in
no quadrant. (d) x-axis flip: (−3, −7). Then y-axis flip: (3, −7) — the
same as flipping (−3, 7) through the origin in one move!


─────────────────────────────────────────────
Lesson 3: Rules That Draw Shapes
─────────────────────────────────────────────

📌 Key idea of this section:

        An equation is a RULE for points; its solutions form a SET.
        All the points that obey it, plotted together, draw a SHAPE.

Here comes the idea this whole subject is named after.

Think of an equation with x and y in it as a strict CLUB RULE for points. A
point gets into the club only if its two coordinates make the equation
true. Let's watch some rules work.

Rule y = 3. Which points get in? (0, 3) ✅ (−2, 3) ✅ (7, 3) ✅ — any point
whose y-coordinate is 3, and x can be anything at all! Plot a bunch of
members: they line up in a perfectly flat HORIZONTAL line, floating 3 above
the x-axis. The rule drew a line!

Rule x = −2. Now (−2, 0) ✅ (−2, 5) ✅ (−2, −9) ✅ — the club of points
exactly 2 west of the y-axis, at any height. Plot them: a VERTICAL line.

Rule y = x. This one links the coordinates: the two numbers must MATCH.
(1, 1) ✅ (4, 4) ✅ (−2, −2) ✅ (0, 0) ✅ — but (2, 5) ❌. Plot the members:
a perfect DIAGONAL slicing through the origin at exactly 45 degrees!

Rule 2x + y = 6. Both letters at once! Members: (0, 6) ✅ (1, 4) ✅
(2, 2) ✅ (3, 0) ✅ — check the first one: 2 × 0 + 6 = 6 ✅. Plot them:
another straight line, but this one slides DOWNHILL. And look at the rhythm
hiding in the member list: every time x grows by 1, y drops by exactly 2.
Hold that rhythm in your memory — it becomes the star of Lesson 5.

        Rule y = 3        →   flat horizontal line
        Rule x = −2       →   straight vertical line
        Rule y = x        →   perfect diagonal
        Rule 2x + y = 6   →   downhill line with a hidden rhythm

The grand secret

Look at what just happened: an equation (pure algebra!) turned into a shape
(pure geometry!). And it works both ways — every point ON the shape obeys
the rule, and every point that obeys the rule sits ON the shape. The
equation and the shape are two descriptions of the very same thing.

The collection of ALL points that obey a rule has an official name: the
GRAPH of the equation. And the collection of all (x, y) pairs that make the
equation true is called its SOLUTION SET. Same club, two names — one from
geometry, one from algebra.

That dictionary between algebra and geometry has a name too: ALGEBRAIC
GEOMETRY. Really! The subject of this whole lesson — and, honestly, one of
the biggest fields in all of mathematics — is built on this one discovery:
shapes are equations in disguise.

✏️ Your Turn

(a) Does (4, −2) obey the rule 2x + y = 6? (b) Find the member of that
club whose x-coordinate is 5. (c) In the member list (0, 6), (1, 4),
(2, 2), (3, 0) — what does y do each time x grows by 1?

Answers: (a) Yes: 2 × 4 + (−2) = 8 − 2 = 6 ✅. (b) Plug in x = 5:
10 + y = 6, so y = −4 — the member is (5, −4). (c) y drops by exactly 2
each time. That steady rhythm is about to get a name: slope.


─────────────────────────────────────────────
Lesson 4: The Membership Test — Forwards and Backwards
─────────────────────────────────────────────

📌 Key idea of this section:

        Is a point ON the shape? Plug its x and y into the rule.
        True → ON. False → OFF. And run it BACKWARDS to solve
        for a missing coordinate.

You never have to guess whether a point lies on a shape. There's a test for
it — the single most-used move in algebraic geometry — and it always tells
the truth.

THE MEMBERSHIP TEST: plug the point's coordinates into the rule. If the
equation comes out true, the point is on the shape. If it comes out false,
it's off. That's the whole test!

Worked examples with the rule y = 2x + 1:

        Test (3, 7):   does 7 = 2 × 3 + 1?   7 = 7 ✅ ON!
        Test (3, 8):   does 8 = 2 × 3 + 1?   8 ≠ 7 ❌ OFF!
        Test (0, 1):   does 1 = 2 × 0 + 1?   1 = 1 ✅ ON!

Two lessons hide in that table. First: neighbors matter — (3, 7) and (3, 8)
differ by one little step, yet one is on the line and the other is off.
Second: don't fear the 0! Plugging in x = 0 is perfectly legal — and often
the easiest test of all.

The test works for ANY rule, including ones with both letters mixed:

        Rule 3x + 2y = 12.   Test (2, 3):  6 + 6 = 12 ✅ ON!
                             Test (4, 1):  12 + 2 = 14 ≠ 12 ❌ OFF!

And it works when x gets squared — just remember that squaring a negative
gives a positive:

        Rule y = x² − 3.   Test (2, 1):  2² − 3 = 4 − 3 = 1 ✅ ON!

Notice what you did NOT need: graph paper! The membership test is pure
arithmetic — it answers a geometry question ("is it on the shape?") with
algebra. That's the dictionary at work.

The backwards trick: find the missing coordinate

Here's where the test turns into a detective tool. Suppose you KNOW a point
is on a shape, but one coordinate is missing. Call the mystery number k,
run the membership test — and the test becomes an equation that solves the
mystery!

Mystery 1: The point (5, k) sits on y = 3x − 4. Find k.

        Membership test:   k = 3 × 5 − 4      (plug in x = 5, y = k)
                           k = 15 − 4 = 11
        The point is (5, 11). One step — the rule did all the work!

Mystery 2: The point (k, 7) sits on y = 2x + 1. Find k.

        Membership test:   7 = 2k + 1         (plug in x = k, y = 7)
        Subtract 1:        6 = 2k             (Golden Rule from the
                                               Algebraic Equations lesson:
                                               same thing to both sides!)
        Divide by 2:       k = 3
        Check (forwards!): 2 × 3 + 1 = 7 ✅   The point is (3, 7).

See the rhythm? Plugging in the KNOWN coordinate leaves an equation for the
unknown one. Forwards or backwards, the membership test is the whole game.

✏️ Your Turn

(a) The point (3, k) sits on y = x² − 2x. Find k. (b) The point (k, 2)
sits on 4x + y = 10. Find k.

Answers: (a) k = 3² − 2 × 3 = 9 − 6 = 3 — the point is (3, 3). Check:
9 − 6 = 3 ✅. (b) 4k + 2 = 10 → subtract 2: 4k = 8 → divide by 4: k = 2.
Check: 4 × 2 + 2 = 10 ✅.


─────────────────────────────────────────────
Lesson 5: Slope — Measuring the Tilt
─────────────────────────────────────────────

📌 Key idea of this section:

        slope = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)
        Positive climbs, negative slides, 0 is flat — and a vertical
        line's slope doesn't exist at all.

Remember the hidden rhythm from Lesson 3: in the rule 2x + y = 6, every
time x grew by 1, y dropped by 2. That rhythm — how y changes per step of
x — is the single most important number a line owns. It has a name: SLOPE.

Walk along a line from one point to another. The RUN is how far you moved
sideways (the change in x). The RISE is how far you climbed (the change in
y). Slope is the rise divided by the run:

        Points (1, 2) and (4, 8):
        run  = 4 − 1 = 3    (sideways)
        rise = 8 − 2 = 6    (up)
        slope = rise ÷ run = 6 ÷ 3 = 2

Slope 2 means: for every 1 step right, the line climbs 2 up. Steep!

In symbols, if the points are (x₁, y₁) and (x₂, y₂) — the little lowered
numbers are called SUBSCRIPTS, and they just label which point you mean —
then the slope formula is:

        slope m = (y₂ − y₁) ÷ (x₂ − x₁)

Does it matter which point you call "first"? No! Check it both ways with
our points:

        Forward:   (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2
        Backward:  (2 − 8) ÷ (1 − 4) = (−6) ÷ (−3) = 2

Same answer — and here's WHY it must always match. Swapping the order flips
the sign of BOTH the top and the bottom. And flipping both signs never
changes a fraction's value, because multiplying the top and the bottom of a
fraction by the same number (here −1) leaves the value unchanged:

        (−a) ÷ (−b) = (−1 × a) ÷ (−1 × b) = a ÷ b

So pick whichever order makes your arithmetic friendlier.

Four slopes to know by sight

        Climbing:   (0, 1) and (4, 3):  rise 2, run 4 → slope 2/4 = 1/2
                    a gentle ramp — up 1 for every 2 right
        Downhill:   (2, 6) and (5, 0):  rise −6, run 3 → slope −2
                    a negative rise slides down to the right
        Flat:       (1, 3) and (5, 3):  rise 0 → slope 0 ÷ 4 = 0
                    a horizontal line (like y = 3) — no climb at all
        Vertical:   (3, 1) and (3, 5):  run 0 → slope = 4 ÷ 0 = ???

That last one deserves a drumroll. Division by zero is not a number — it's
illegal in all of mathematics (no number times 0 gives 4, so 4 ÷ 0 has no
answer). So a vertical line, like x = 3, has NO slope. Not "slope 0" — no
slope at all! Horizontal lines have slope 0; vertical lines have none.
Those two sentences look alike and mean completely different things. Lock
them in.

One more detective trick: the SIGN of the slope tells the direction
(positive climbs up to the right; negative slides down), and the SIZE — the
absolute value — tells the steepness. Slope 5 is a cliff; slope 1/5 is a
lazy hill; slope −5 is a cliff going downhill.

✏️ Your Turn

(a) Find the slope through (1, 1) and (4, 10). (b) Find the slope through
(0, 5) and (3, 5) — and describe the line. (c) Find the slope through
(2, 1) and (2, 7) — and describe the line.

Answers: (a) rise 9, run 3, slope = 9 ÷ 3 = 3. (b) rise 0 → slope 0: a
flat horizontal line (the rule y = 5). (c) run 0 → division by zero → NO
slope: a vertical line (the rule x = 2).


─────────────────────────────────────────────
Lesson 6: From Rule to Line — y = mx + b, Parallels, Perpendiculars
─────────────────────────────────────────────

📌 Key idea of this section:

        In y = mx + b:  m is the slope (the tilt),
        b is the y-intercept (where the line crosses the y-axis).
        Parallel lines: equal slopes. Perpendicular lines: slopes
        that multiply to −1.

How do you draw the shape of a rule like y = 2x + 1? Make a tiny table!
Pick the friendliest x values — 0, 1, 2, 3 — and let the rule compute y:

        x = 0 → y = 2 × 0 + 1 = 1
        x = 1 → y = 2 × 1 + 1 = 3
        x = 2 → y = 2 × 2 + 1 = 5
        x = 3 → y = 2 × 3 + 1 = 7

That hands us four points: (0, 1), (1, 3), (2, 5), (3, 7). Plot them — they
line up perfectly! Connect the dots, and the line is drawn. (The perfect
line-up is no accident: any rule that just multiplies x by a number and
adds a number draws a perfectly straight line. That's why y = mx + b is
called a LINEAR equation.)

Now read the table like a detective. The y-values go 1, 3, 5, 7 — jumping
by 2 each time x grows by 1. A list of numbers with a constant jump is
called an ARITHMETIC SEQUENCE, and its jump is called the COMMON
DIFFERENCE. On a line, the common difference IS the slope! (A sequence is
secretly just a line's dots with the line erased.)

And the very first value, when x = 0, is 1 — that's where the line crosses
the y-axis, because every point on the y-axis has x = 0. That crossing has
a name: the Y-INTERCEPT.

So in the rule y = mx + b, both numbers are talking to you:

        m = the slope: the tilt, the table's jump
        b = the y-intercept: where the line crosses the y-axis

The rule y = 2x + 1 says "tilt 2, cross at 1." And y = x + 6? The slope is
hiding: it's 1, because x secretly means 1x. Cross at 6.

Drawing WITHOUT a table

Once you speak m and b, you can draw a line with just two moves. Take
y = 2x + 1:

        Move 1: mark the y-intercept (0, 1) — b tells you where to start.
        Move 2: use the slope as walking orders: up 2, right 1, and mark
                (1, 3). Repeat: (2, 5). Connect the dots. Done!

Two points are all a line needs — and m and b hand them to you for free.

Parallel twins

Compare y = 2x + 1 and y = 2x + 5. Same tilt (2), different starts (1 and
5). Draw them: two lines with identical slants, one floating above the
other — and they NEVER meet. Lines with equal slopes are PARALLEL!

Why must equal slopes mean never-meeting? Both lines climb at the same
rate, so the gap between them never changes — the second line is just the
first line lifted by a fixed amount. Same tilt, constant gap, no crossing.
Flip it around: if two lines have DIFFERENT slopes, one climbs faster, so
it must eventually catch up — they cross exactly once. Finding that
crossing is next lesson's job.

Perpendicular lines: the negative reciprocal

What about lines that meet at a perfect right angle (90°)? Those are called
PERPENDICULAR lines, and there's a slope rule for them too — and here is
exactly why it works.

A line's tilt is a walk: run a, rise b, so its slope is b/a. Now rotate the
whole plane 90° counter-clockwise. Rotating sends every point (x, y) to
(−y, x) — check the compass: (1, 0) → (0, 1), east spins to north ✅. So
our walk (run a, rise b) spins into a new walk: run −b, rise a. The rotated
line's slope is:

        new slope = rise ÷ run = a ÷ (−b) = −a/b

But a 90° rotation makes PERPENDICULAR lines! So a line perpendicular to
slope b/a has slope −a/b. Multiply the two slopes:

        (b/a) × (−a/b) = −(a × b) ÷ (a × b) = −1

PERPENDICULAR SLOPE RULE: perpendicular slopes multiply to −1. In plain
words: flip the fraction AND flip the sign. Slope 2's perpendicular partner
is −1/2. Slope 3's partner is −1/3. Slope −2/3's partner is 3/2.

(One pair doesn't fit the formula: a horizontal line, slope 0, is
perpendicular to a vertical line, which has no slope at all. The formula
can't divide by zero — so that pair you just remember.)

Building the rule from two points

One last superpower. Suppose a line passes through (1, 4) and (3, 10), and
you want its rule y = mx + b. Two numbers to find — and two clues to find
them with:

        Step 1: the slope.  m = (10 − 4) ÷ (3 − 1) = 6 ÷ 2 = 3.
                Now the rule looks like y = 3x + b, with b still hiding.
        Step 2: the membership test! The point (1, 4) is on the line, so
                it obeys the rule:  4 = 3 × 1 + b → 4 = 3 + b → b = 1.
        Step 3: write it:  y = 3x + 1.
        Step 4: check the OTHER point:  3 × 3 + 1 = 10 ✅. Confirmed!

Slope first, then one plug-in, then always check. Two points pin down one
line — and now you can find it.

✏️ Your Turn

(a) Build the rule for the line through (0, 2) and (2, 8). (b) What slope
is perpendicular to the line y = (1/2)x + 7? (c) Will y = 4x + 1 ever meet
y = 4x − 9? How do you know?

Answers: (a) m = (8 − 2) ÷ (2 − 0) = 3; and the point (0, 2) tells us
b = 2 directly (it's on the y-axis!): y = 3x + 2. Check: 3 × 2 + 2 = 8 ✅.
(b) Flip and sign-flip: 1/2 → −2. Check: (1/2) × (−2) = −1 ✅. (c) Never!
Both slopes are 4 — parallel twins with a constant gap.


─────────────────────────────────────────────
Lesson 7: Where Lines Meet — Two Methods, Three Possibilities
─────────────────────────────────────────────

📌 Key idea of this section:

        A meeting point must obey BOTH rules at once.
        Method 1: set the rules equal. Method 2: add the equations.
        Lines meet once, never (parallel), or everywhere (same line).

Two rules that must be true at the same time are called a SYSTEM of
equations — and its solution is exactly the meeting point. Here are two
ways to find it.

Method 1: set the rules equal

Where do y = 2x − 1 and y = −x + 5 meet? The meeting point sits on BOTH
lines, so at that one spot, 2x − 1 and −x + 5 are the same number — they're
both y! So set them equal:

        2x − 1 = −x + 5

Now the Golden Rule takes over (same thing to both sides!):

        add x to both sides:     3x − 1 = 5
        add 1 to both sides:     3x = 6
        divide both sides by 3:  x = 2

Half done — a point needs a y too! Plug x = 2 into either rule:

        y = 2 × 2 − 1 = 3

Meeting point: (2, 3). The finishing touch — the membership test on BOTH
rules:

        y = 2x − 1:   2 × 2 − 1 = 3 ✅
        y = −x + 5:   −2 + 5 = 3 ✅

Two yeses. Confirmed!

Method 2: elimination (add the equations)

Some systems arrive dressed differently: x + y = 7 and x − y = 3. Neither
rule starts with "y =". New plan: ADD the two equations, top to bottom.

Why is that legal? If A = B and C = D, then A + C = B + D: you're adding
the same amount to both sides of A = B — written as C on the left and as D
on the right. Equals plus equals stay equals. Now watch the magic:

            x + y = 7
        +   x − y = 3
        ─────────────
            2x + 0 = 10

The y's ELIMINATED each other (y + (−y) = 0) — that's the whole point of
the method! So 2x = 10, and x = 5. Plug back into the first rule:
5 + y = 7, so y = 2. Meeting point: (5, 2). Check the second rule:
5 − 2 = 3 ✅.

Which method when? If both rules already say "y = ...", setting them equal
is one step away. If the x's and y's line up in columns and a letter can
cancel, elimination is lightning. A master picks the tool to fit the job —
and you'll compare the two methods yourself in the challenges.

Three possibilities

How many times can two straight lines meet? Geometry says: once (they
cross), never (parallel twins), or everywhere (the same line twice). The
algebra tells you which case you're in — watch:

        Case 1 (one meeting): the slopes differ. You solve and get one
        x, like x = 2 above. One point.

        Case 2 (no meeting): y = 2x + 1 and y = 2x + 5.
        Set equal:     2x + 1 = 2x + 5
        Subtract 2x:   1 = 5    ← IMPOSSIBLE!
        No x can make that true. Zero solutions = zero meetings.
        The algebra literally says "never gonna happen."

        Case 3 (everywhere): y = 2x + 1 and 2y = 4x + 2.
        Divide the second rule by 2: y = 2x + 1 — the SAME line!
        Set equal: 2x + 1 = 2x + 1 → 0 = 0    ← ALWAYS true.
        Every x works: infinitely many meetings.

One, none, or all — and the algebra announces which before you ever pick up
a pencil to draw.

Fractions are allowed

Meeting points don't have to be whole numbers. Where do y = 3x + 1 and
y = x + 4 meet?

        3x + 1 = x + 4
        subtract x:     2x + 1 = 4
        subtract 1:     2x = 3
        divide by 2:    x = 3/2

Then y = 3/2 + 4 = 3/2 + 8/2 = 11/2. Meeting point: (3/2, 11/2). Check in
the other rule: 3 × (3/2) + 1 = 9/2 + 2/2 = 11/2 ✅. Fractions obey the
same rules — they just need one extra careful step.

The three-way handshake

One last wonder. The lines y = x + 1 and y = 2x − 2 meet where? Set equal:
x + 1 = 2x − 2 → add 2: x + 3 = 2x → subtract x: 3 = x → y = 3 + 1 = 4.
Point (3, 4). Now a third line crashes the party: y = 4x − 8. Does it pass
through the same spot? Don't re-solve — just run the membership test:
4 × 3 − 8 = 4 ✅. YES! Three or more lines through one point are called
CONCURRENT, and the strategy scales: to solve THREE rules at once, solve
any two of them, then test the third.

✏️ Your Turn

(a) Find where y = x + 6 meets y = 2x + 1 — set them equal. (b) Solve
2x + y = 10 and x − y = 2 by elimination. (c) Strategy! For each system,
which method would you pick — and why? (i) y = 5x + 1 and y = 2x + 7.
(ii) 3x + y = 10 and 3x − y = 2.

Answers: (a) x + 6 = 2x + 1 → subtract x: 6 = x + 1 → subtract 1: x = 5;
y = 5 + 6 = 11. Point (5, 11). Check: 2 × 5 + 1 = 11 ✅. (b) Add the
equations: 3x = 12 → x = 4; then 2 × 4 + y = 10 → y = 2. Point (4, 2).
Check: 4 − 2 = 2 ✅. (c) (i) Set equal — both already say "y =":
5x + 1 = 2x + 7 → 3x = 6 → x = 2, y = 11. (ii) Elimination — the y's are
lined up to cancel: adding gives 6x = 12 → x = 2; then 6 + y = 10 →
y = 4. Check: 6 − 4 = 2 ✅.


─────────────────────────────────────────────
Lesson 8: Distance, Midpoints, and the Circle's Equation
─────────────────────────────────────────────

📌 Key idea of this section:

        Pythagorean theorem: a² + b² = c² for right triangles.
        Distance = √((x₂ − x₁)² + (y₂ − y₁)²).
        Midpoint = average the coordinates.
        Circle: (x − h)² + (y − k)² = r².

Lines measure tilt. Now let's measure LENGTH — and earn the most famous
equation in all of geometry along the way.

The Pythagorean theorem — and why it's true

A RIGHT TRIANGLE has one 90° corner. The two short sides (the LEGS) have
lengths a and b; the long side opposite the right angle (the HYPOTENUSE)
has length c. The theorem says:

        a² + b² = c²

Here's a proof you can hold in your head. Take a big square whose sides
have length a + b. Into its four corners, pack four copies of your right
triangle, hypotenuses facing inward. Two facts:

        Fact 1: the four hypotenuses outline a tilted SQUARE in the
        middle. Why a square? All four of its sides equal c. And each of
        its corners is 90°: the triangle's two small angles (call them
        α and β) add to 90° — the triangle's three angles total 180° and
        the right corner uses 90° of that. Along the big square's
        straight edge, α + β + (middle corner) = 180°, so the middle
        corner is 180° − 90° = 90°. Four equal sides and four right
        angles: a square — with area c².

        Fact 2: areas add up. Big square = 4 triangles + middle square.

        Big square area:    (a + b)²
        Four triangles:     4 × (ab/2) = 2ab
        Middle square:      c²

        So:  (a + b)² = 2ab + c²
        Expand the left side:  (a + b)(a + b) = a² + ab + ab + b²
                             = a² + 2ab + b²
        So:  a² + 2ab + b² = 2ab + c²
        Subtract 2ab from both sides:  a² + b² = c².  ∎

That's a real proof — every step justified. Twenty-five centuries old and
still rock solid.

The distance formula

How far is it from (1, 2) to (4, 6)? Draw the right triangle: walk 3 east
and 4 north to make the legs; the direct path is the hypotenuse.

        d² = 3² + 4² = 9 + 16 = 25
        d = √25 = 5

In general, from (x₁, y₁) to (x₂, y₂), the legs are exactly the coordinate
differences. (Mathematicians write "the change in x" as Δx — delta x.) So:

        DISTANCE FORMULA:  d = √((x₂ − x₁)² + (y₂ − y₁)²)
                           = √((Δx)² + (Δy)²)

Squaring erases signs, so order never matters: (4 − 1)² = (1 − 4)² = 9.
One more: from (−1, 2) to (2, −2):

        d² = (2 − (−1))² + (−2 − 2)² = 3² + (−4)² = 9 + 16 = 25
        d = 5

The midpoint formula

The MIDPOINT of two points is the spot exactly halfway between them —
halfway in x and halfway in y. And "halfway between two numbers" is just
their average:

        MIDPOINT FORMULA:  M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

Try it: midpoint of (−2, 3) and (4, 7):

        M = ((−2 + 4)/2, (3 + 7)/2) = (1, 5)

Prove it's really halfway — compute both distances:

        to (−2, 3):  (1 − (−2))² + (5 − 3)² = 9 + 4 = 13 → d = √13
        to (4, 7):   (4 − 1)² + (7 − 5)² = 9 + 4 = 13 → d = √13

Equal distances ✅. The midpoint earns its name.

The circle: distance frozen at r

A CIRCLE is the club of all points at one fixed distance from a center.
That fixed distance is called the RADIUS r. Translate that sentence into
algebra with the distance formula — the distance from (x, y) to the center
(h, k) must equal r:

        √((x − h)² + (y − k)²) = r

Square both sides (both sides are positive, so squaring keeps the equation
honest):

        THE CIRCLE EQUATION:  (x − h)² + (y − k)² = r²

Read it backwards: x² + y² = 25 has center (0, 0) — nothing was subtracted
— and since 25 = 5², the radius is 5. Members: (3, 4): 9 + 16 = 25 ✅;
(5, 0): 25 + 0 = 25 ✅. The rule x² + y² = 25 is secretly saying "all
points exactly 5 units from the origin" — and yes, the 3-4-5 triangle
family is hiding inside the circle!

Shifted circle: (x − 2)² + (y + 1)² = 9. Center (2, −1) — watch the signs!
The formula SUBTRACTS the center's coordinates, so y + 1 means the center's
y is −1. Radius: √9 = 3. Membership tests:

        (5, −1):   (5 − 2)² + (−1 + 1)² = 9 + 0 = 9 ✅ ON!
        (2, 2):    (2 − 2)² + (2 + 1)² = 0 + 9 = 9 ✅ ON!
        (0, 0):    (0 − 2)² + (0 + 1)² = 4 + 1 = 5 ≠ 9 ❌ OFF!

✏️ Your Turn

(a) Find the distance from (0, 0) to (6, 8). (b) Find the midpoint of
(1, 1) and (7, 5). (c) Name the center and radius of
(x + 3)² + (y − 1)² = 16.

Answers: (a) √(6² + 8²) = √(36 + 64) = √100 = 10. (b) ((1 + 7)/2,
(1 + 5)/2) = (4, 3). (c) Center (−3, 1) — x + 3 means the center's x is
−3! — radius √16 = 4.


─────────────────────────────────────────────
Lesson 9: Parabolas, Transformations, and Where Lines Meet Curves
─────────────────────────────────────────────

📌 Key idea of this section:

        y = x² draws a parabola. Tinkering with the rule SLIDES it:
        y = (x − h)² + k has its vertex at (h, k).
        A line meets a parabola where x² equals the line's rule —
        and that puzzle has 2, 1, or 0 answers.

Straight lines are just the beginning. Let x get squared, and the shapes
start to bend!

The parabola: y = x²

Table it with small x's — including negatives:

        x = −3 → y = 9         x = 1 → y = 1
        x = −2 → y = 4         x = 2 → y = 4
        x = −1 → y = 1         x = 3 → y = 9
        x =  0 → y = 0

Plot those seven points. They do NOT line up — they curve into a perfect U,
a smile shape called a PARABOLA. Notice the mirror symmetry: x = −3 and
x = 3 give the same y, because (−3)² = 9 = 3². Squaring erases the minus
sign, so the left and right halves are mirror twins across the y-axis. (In
Lesson 2's language: the parabola is its own reflection across the
y-axis!)

Also notice: y is never negative, because a square can't be negative. The
parabola bottoms out at (0, 0). That lowest point — the tip of the U — is
called the VERTEX.

Basketballs fly in parabolas, fountain water arcs in parabolas, and
satellite dishes ARE parabolas made of metal!

Transformations: sliding the parabola

Here's a question worth asking about ANY rule: what happens if we tinker
with it? Two tiny tinkerings:

        y = x² + 2:    every y-value grows by 2. Every point of the U
                       lifts 2 units — the whole parabola slides UP 2.
                       New vertex: (0, 2).

        y = (x − 3)²:  trickier! At x = 3, the parenthesis equals 0 —
                       so this rule gives, at x = 3, the SAME y the old
                       rule gave at x = 0. Every y-value happens 3 units
                       LATER. The parabola slides RIGHT 3.
                       New vertex: (3, 0).

Inside the parentheses, the shift goes the opposite way from what your gut
says: x − 3 slides RIGHT, and x + 3 would slide LEFT. The cure for gut
feelings is one membership test: where is the bottom? Getting y = 0 needs
(x − 3)² = 0, which forces x = 3. Bottom at (3, 0) — right it is.

Combine both moves and you get the VIP of this lesson:

        VERTEX FORM:  y = (x − h)² + k    →    vertex at (h, k)

And here's the proof that the vertex really is the bottom — no graph
needed:

        Squares are never negative: (x − h)² ≥ 0 for every x
        (positive² > 0, negative² > 0, and 0² = 0).
        So y = (x − h)² + k ≥ 0 + k = k, always.
        The only way to hit y = k is (x − h)² = 0 — forcing x = h.
        Lowest point: (h, k). Proven! ∎

One more transformation: y = −x² negates every y-value, flipping the U
upside down — a frown instead of a smile, with a MAXIMUM at the vertex.

Where lines meet curves

Where does the line y = x + 2 meet the parabola y = x²? Same strategy as
Lesson 7 — the meeting points obey BOTH rules, so set them equal:

        x² = x + 2
        subtract x and 2 from both sides:   x² − x − 2 = 0

Now a new solving trick: FACTORING. Hunt for two numbers that multiply to
−2 and add to −1. Candidates: −2 and 1. Product: (−2) × 1 = −2 ✅. Sum:
(−2) + 1 = −1 ✅. So:

        (x − 2)(x + 1) = 0

(Check by expanding: x² + x − 2x − 2 = x² − x − 2 ✅.) Now the
ZERO-PRODUCT PROPERTY: if a product of two numbers is 0, at least one of
them must be 0 — two nonzero numbers never multiply to zero. So:

        x − 2 = 0 → x = 2       or       x + 1 = 0 → x = −1

Two x's! Find the y's from the line's rule (easier than squaring):

        x = 2:   y = 2 + 2 = 4  →  (2, 4)
        x = −1:  y = −1 + 2 = 1 →  (−1, 1)

Check BOTH points in BOTH rules:

        (2, 4):    x² = 4 ✅    x + 2 = 4 ✅
        (−1, 1):   (−1)² = 1 ✅  −1 + 2 = 1 ✅

Four yeses — a straight line really can visit a curvy parabola TWICE. Can
it visit three times? No: setting x² equal to a line's rule always
rearranges into an equation whose highest power is x² — a QUADRATIC
equation — and a quadratic has at most two solutions. The possibilities:

        2 meetings (the line pierces through),
        1 meeting  (the line just grazes — that's called TANGENT),
        0 meetings (the line misses completely).

For 0: try y = x² and y = −1. Setting equal: x² = −1. But squares are
never negative — no real number x works. The algebra announces "they never
meet" without a single doodle.

✏️ Your Turn

(a) Name the vertex of y = (x + 4)² − 1 — careful with the signs!
(b) Where do y = x² and y = 3x meet?

Answers: (a) Vertex (−4, −1): the parenthesis is x − (−4), so h = −4, and
k = −1. (b) Set equal: x² = 3x → subtract 3x: x² − 3x = 0 → factor out x:
x(x − 3) = 0 → x = 0 or x = 3. Points: (0, 0) and (3, 9). Check (3, 9):
3² = 9 ✅ and 3 × 3 = 9 ✅.


─────────────────────────────────────────────
Lesson 10: Watch Out! Common Mistakes
─────────────────────────────────────────────

📌 Keep the big ideas in sight:

        (x, y): x first. Rise on top, WITH its sign. Zero ≠ none.
        Flip AND sign-flip for perpendiculars. Two yeses at meetings.
        Circles subtract their centers. Un-squaring gives ±.

These six traps catch students every single year — even strong ones. Learn
them now, and they won't catch you!

Mistake 1: Flipping the slope fraction — or dropping the sign

        Through (2, 6) and (4, 2): slope = 2 ÷ 4 = 1/2?   ❌

Two errors in one line! That's run ÷ rise — the fraction upside down — and
it lost the sign. The RISE rides on top, WITH its sign: rise = 2 − 6 = −4,
run = 4 − 2 = 2, slope = −4 ÷ 2 = −2. Sanity checks that catch this: the
line slides downhill, so the slope must be NEGATIVE; and it falls 4 while
running only 2, so it's steep — |slope| had better be bigger than 1, not
1/2. ✅

Mistake 2: Confusing "slope 0" with "no slope"

        "The line x = 4 has slope 0."   ❌

x = 4 is VERTICAL — straight up and down. Its run is 0, and slope =
rise ÷ 0 is division by zero: not a number, no slope at all. Slope 0
belongs to HORIZONTAL lines like y = 4 (rise 0, so 0 ÷ run = 0). Flat
lines have slope 0; standing lines have none. ✅

Mistake 3: Half-fixing the perpendicular slope

        "Perpendicular to slope 3? Easy: flip it — 1/3!"   ❌

The perpendicular rule has TWO moves: flip the fraction AND flip the sign.
Perpendicular to 3 is −1/3. The check is one multiplication: perpendicular
slopes multiply to −1. Does 3 × (1/3) = −1? No, it gives 1. Does
3 × (−1/3) = −1? Yes ✅.

Mistake 4: Checking only ONE rule at a crossing

        (4, 0) is where y = x − 4 meets y = 2x − 6?   ❌

It passes the first rule (4 − 4 = 0 ✅) but flunks the second (2 × 4 − 6 =
2 ≠ 0 ❌). A meeting point needs TWO yeses — one per rule. (The real
crossing: x − 4 = 2x − 6 → add 6: x + 2 = 2x → subtract x: 2 = x →
y = 2 − 4 = −2. Check (2, −2): 2 − 4 = −2 ✅ and 2 × 2 − 6 = −2 ✅.
Double yes!)

Mistake 5: Reading the circle's center with the wrong signs

        (x − 3)² + (y + 2)² = 9 has center (−3, 2)?   ❌

Backwards! The circle formula SUBTRACTS the center: (x − h)² + (y − k)².
So x − 3 means h = 3, and y + 2 — which is really y − (−2) — means k = −2.
Center (3, −2). Quick self-check: plug the center in — both parentheses
must equal 0: (3 − 3)² + (−2 + 2)² = 0 ✅. If you'd picked (−3, 2), you'd
get 36 + 16 = 52 — definitely not the center! ✅

Mistake 6: Forgetting the ± when un-squaring

        On the circle x² + y² = 25, if x = 3 then y = 4.   ❌

Half the truth! 3² + y² = 25 gives y² = 16, and TWO numbers square to 16:
y = 4 AND y = −4. Squaring erases signs — so un-squaring must restore both.
The circle really contains both (3, 4) and (3, −4): one above the x-axis,
one below — mirror twins, exactly as Lesson 2 promised. ✅


─────────────────────────────────────────────
Lesson 11: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Addresses (x, y). Rules pick points; points draw shapes.
        Slope = rise ÷ run. Distance = Pythagoras. Vertex = (h, k).
        Meetings obey both rules — and algebra counts the meetings.

The recap list

  · Two crossed number lines make the coordinate plane; they cross at the
    origin (0, 0). Points and addresses match one-to-one.
  · Every point has an address (x, y): east-west first, north-south second.
  · Signs name the quadrant: I (+,+), II (−,+), III (−,−), IV (+,−).
    Points ON an axis live in no quadrant.
  · Reflections flip signs: x-axis (x, −y); y-axis (−x, y); origin
    (−x, −y). Two axis flips = one origin flip.
  · An equation is a club rule; its solution set, plotted, is its graph.
  · The membership test: plug in the coordinates. True → ON, False → OFF.
    Run it backwards to find a missing coordinate.
  · Slope m = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁), in either order.
    Positive climbs, negative slides, 0 is flat, vertical has NONE.
  · In y = mx + b: m is slope, b is y-intercept. The table's y-values form
    an arithmetic sequence whose common difference is the slope.
  · Equal slopes → parallel (never meet). Slopes multiplying to −1 →
    perpendicular (meet at 90°).
  · A meeting point obeys BOTH rules: set them equal, or add the equations
    (elimination). One solution, none (the algebra says 1 = 5!), or
    infinitely many (0 = 0).
  · Pythagorean theorem: a² + b² = c². Distance = √((Δx)² + (Δy)²);
    midpoint = average of the coordinates.
  · Circle: (x − h)² + (y − k)² = r² — center (h, k), radius r. The
    formula SUBTRACTS the center.
  · Parabola vertex form y = (x − h)² + k: vertex (h, k), and it's the
    true minimum because squares are ≥ 0. y = −x² flips the U over.
  · Line meets parabola: set equal, rearrange to zero, factor, use the
    zero-product property. Two, one, or zero meetings.

The magic sentence

        Points wear addresses —
        equations are their club rules —
        the members draw the shape —
        and the plug-in test settles every argument.

Say it out loud three times. Seriously! That's the whole lesson in four
lines.

Why this matters

Every pixel your phone lights up, every character a game places on its map,
every GPS dot that guides a driver home — all of it is points with
addresses, obeying rules. You now speak both languages of algebraic
geometry: the algebra (rules, systems, tests) and the geometry (points,
lines, circles, parabolas). And the deeper you go in math, the more
powerful this dictionary gets — it grows into one of the greatest subjects
humans have ever studied, and it even helped crack Fermat's Last Theorem,
a puzzle that stumped the world for more than 350 years. You just learned
its first word: shapes are equations in disguise.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Addresses: (x, y) — x first (east/west), y second (north/south)
        Membership test: plug the point into the rule. True → ON · False → OFF
        Slope = rise ÷ run (the rise rides on top, WITH its sign!)
        Parallel: same slope. Perpendicular: slopes multiply to −1.
        Distance: √((Δx)² + (Δy)²) · Midpoint: average the coordinates
        Circle: (x − h)² + (y − k)² = r² · Vertex of y = (x − h)² + k: (h, k)
        Meeting point: must obey BOTH rules — always check both!

Grab a pencil and graph paper — or draw your own axes: two crossed number
lines are all a coordinate plane is. Start with the easy ones — they use
the exact same patterns from the lessons. A few problems are open-ended:
they have more than one right answer. The 🔴 challenges are real
competition-style brain-stretchers: expect to chain four or five ideas
together, and expect to CHOOSE a strategy before you compute. Don't peek
at the answer key until you've tried!

Hint for every problem: first ask yourself, "What's the RULE — and does
this point obey it?"


🟢 EASY (Problems 1–50)

Problems 1–6 — Read the address! How do you walk there from the origin?
(Lesson 1)

  1. (4, 3)
  2. (−2, 5)
  3. (0, −6) — careful, one walk vanished!
  4. (7/2, 1) — halves are legal addresses!
  5. (−3, −4)
  6. (5, 0)

Problems 7–14 — Where does it live? Quadrant I, II, III, IV — or on an
axis? (Lesson 2)

  7. (3, 7)
  8. (−3, 7)
  9. (−3, −7)
  10. (3, −7)
  11. (0, 9)
  12. (−8, 0)
  13. A point's coordinates have signs (−, +). Name its quadrant.
  14. A point's coordinates have signs (+, −). Name its quadrant.

Problems 15–20 — Mirror tricks! Reflect the point as asked. (Lesson 2)

  15. (3, 5) across the x-axis
  16. (3, 5) across the y-axis
  17. (−2, −1) through the origin
  18. (4, −2) across the y-axis
  19. (0, 6) across the x-axis
  20. (−1, 4) across the x-axis, THEN the result across the y-axis

Problems 21–26 — Club rules! Which points get in — and which don't?
(Lesson 3)

  21. Rule y = 5. Does (2, 5) get in? Does (5, 2)?
  22. Rule x = −3. Does (−3, 4) get in? Does (3, −4)?
  23. Rule y = x. Does (7, 7) get in? Does (7, −7)?
  24. Rule y = −x. Does (3, −3) get in? Does (3, 3)?
  25. Rule 2x + y = 6. Does (1, 4) get in? Does (4, 1)?
  26. Rule x² + y² = 100. Does (6, 8) get in? Does (7, 2)?

Problems 27–34 — The membership test! Is the point ON the shape?
(Lesson 4)

  27. y = 3x − 2; is (2, 4) on the line?
  28. y = 3x − 2; is (3, 8) on it?
  29. y = 4x + 1; is (2, 9) on it?
  30. y = x² + 2; is (3, 11) on it?
  31. y = x² + 2; is (−3, −7) on it?
  32. 3x + 2y = 12; is (2, 3) on it?
  33. 3x + 2y = 12; is (4, 0) on it?
  34. (x − 1)² + (y − 2)² = 25; is (4, 6) on it?

Problems 35–42 — Find the slope through the two points. (Watch for
fractions, downhill slides, and two special cases!) (Lesson 5)

  35. (1, 1) and (3, 5)
  36. (0, 2) and (4, 3)
  37. (2, 5) and (6, 1)
  38. (0, 0) and (2, 6)
  39. (1, 7) and (5, 7) — what does a ZERO rise mean?
  40. (3, 1) and (3, 9) — what does a ZERO run mean?
  41. (−1, 2) and (1, 6)
  42. (0, 8) and (4, 0)

Problems 43–48 — Read the line's vital signs. (Lesson 6)

  43. Name the slope and y-intercept of y = 5x + 2.
  44. Name the slope and y-intercept of y = x − 7. (The slope is hiding!)
  45. Name the slope and y-intercept of y = −2x + 9.
  46. A line's table reads: x: 0, 1, 2, 3 → y: 1, 4, 7, 10. What's the
      common difference (= the slope)? What's the rule?
  47. Where does y = 2x + 6 cross the y-axis? (Give the POINT.)
  48. For y = 3x − 1, find y when x = 0, 1, and 2.

Problems 49–50 — Parallel, perpendicular, or neither? Tell how you know.
(Lesson 6)

  49. y = 3x + 1 and y = 3x − 8
  50. y = 2x + 1 and y = −x/2 + 5


🟡 INTERMEDIATE (Problems 51–80)

Problems 51–54 — Find the missing coordinate! (The membership test,
backwards.) (Lesson 4)

  51. The point (x, 9) sits on y = 2x + 3. Find x.
  52. The point (6, y) sits on y = (1/2)x + 4. Find y.
  53. The point (k, 12) sits on 3x + y = 15. Find k.
  54. The point (4, k) sits on y = x² − 3x. Find k.

Problems 55–58 — Name that rule! Read the table and write y = ___.
(Hint: the y-jump divided by the x-step is the slope.) (Lesson 6)

  55. x: 0, 1, 2, 3 → y: 3, 5, 7, 9
  56. x: 0, 1, 2, 3 → y: 2, 7, 12, 17
  57. x: 0, 1, 2, 3 → y: 8, 5, 2, −1 (this one shrinks!)
  58. x: 0, 2, 4, 6 → y: 1, 4, 7, 10 (watch the x-step!)

Problems 59–62 — Build the rule y = mx + b through the two points.
(Slope first, then one plug-in, then check!) (Lesson 6)

  59. (0, 3) and (2, 9)
  60. (1, 5) and (3, 11)
  61. (2, 1) and (4, 7)
  62. (0, 10) and (5, 0)

Problems 63–66 — Where do the lines meet? (Set the rules equal — and
check BOTH!) (Lesson 7)

  63. y = x + 4 and y = 3x
  64. y = 2x + 3 and y = x + 7
  65. y = 2x − 3 and y = −x + 6
  66. y = 4x + 1 and y = 2x + 4 (the answer is fractional — allowed!)

Problems 67–68 — Elimination! Add the equations and watch a letter
vanish. (Lesson 7)

  67. x + y = 9 and x − y = 1
  68. 2x + y = 12 and x − y = 3

Problems 69–70 — How many meetings: one, none, or infinitely many?
Let the algebra announce it. (Lesson 7)

  69. y = 3x + 2 and y = 3x + 9
  70. y = 2x + 2 and 2y = 4x + 4

Problems 71–72 — Midpoints! (Lesson 8)

  71. Find the midpoint of (2, 3) and (8, 7).
  72. Find the midpoint of (−4, 1) and (6, −3).

Problems 73–74 — Distances! (Lesson 8)

  73. Find the distance from (1, 2) to (4, 6).
  74. Find the distance from (0, 0) to (5, 12).

Problems 75–76 — Circle detective! Name the center and radius, then run
the membership test. (Lesson 8)

  75. (x − 1)² + (y + 4)² = 49; is (1, 3) on the circle?
  76. (x + 2)² + (y − 3)² = 25; is (2, 6) on the circle?

Problems 77–78 — Vertex and minimum! No graph needed — use "squares are
never negative." (Lesson 9)

  77. y = (x − 5)² + 2: name the vertex and the smallest possible y.
  78. y = (x + 1)² − 4: name the vertex and the smallest possible y.

Problem 79 — A line visits a parabola. (Lesson 9)

  79. Find BOTH points where y = x² meets y = 4x − 3. (Set equal,
      rearrange to zero, factor, and check both points in both rules!)

Problem 80 — Word problem!

  80. The submarine. A submarine is 60 meters below the surface, rising
      4 meters every minute. (a) Write the rule: d = depth in meters
      after t minutes. (b) What is the slope — and why is it negative?
      (c) When does the sub reach the surface? (Set d = 0!)


🔴 CHALLENGE (Problems 81–100)

  81. The y-crossing. A line has slope 2/3 and passes through (6, 1).
      Where does it cross the y-axis? (Build y = mx + b: plug the point
      in to find b. Your final answer is a point ON the y-axis!)

  82. The right-angle test — TWO ways! A triangle has corners A(4, 4),
      B(3, 2), C(5, 1). (a) Method 1: compute all three slopes and find
      two whose product is −1. (b) Method 2: compute all three SQUARED
      distances and check whether a² + b² = c². (c) Compare: which
      method was faster? And what EXTRA fact did Method 2 reveal about
      sides AB and BC?

  83. The lattice treasure hunt. A LATTICE POINT is a point whose
      coordinates are both whole numbers. How many lattice points lie ON
      the circle x² + y² = 25? (Organized casework: try x = 0, ±1, ±2,
      ±3, ±4, ±5 — for each, y² = 25 − x² must be a perfect square.
      Why can you stop at |x| = 5?)

  84. The lattice neighborhood. How many lattice points satisfy
      x² + y² ≤ 9 (inside or on the circle of radius 3)? (Casework by
      x: for x = 0, ±1, ±2, ±3, count the legal y's. Let symmetry cut
      your work in half!)

  85. The axis triangle. The line y = −2x + 8 and the two axes fence off
      a triangle in Quadrant I. (a) Where does the line cross the
      y-axis? (b) Where does it cross the x-axis? (Set y = 0!)
      (c) Find the triangle's area. (The legs lie right along the axes.)

  86. The third handshake. The lines y = x + 1 and y = 2x − 2 meet at a
      point — find it. Then find the number k that makes the line
      y = kx − 5 pass through that very same point. (Membership test
      with an unknown slope!)

  87. The double mirror. Start at (4, −1). Reflect across the x-axis,
      then reflect the result across the y-axis. (a) Where do you land?
      (b) Now reflect (4, −1) through the origin in one move — same
      landing? (c) Explain why: what does each flip do to (x, y), and
      what do both flips together do?

  88. The two candles. Candle A is 12 cm tall and burns 1 cm per hour:
      y = 12 − x. Candle B is 9 cm tall and burns ½ cm per hour:
      y = 9 − x/2. (a) After how many hours are they the same height?
      (b) What height is that? (c) Check BOTH rules at your answer.

  89. The missing square. Two adjacent corners of a square are (2, 1)
      and (6, 4). (a) Find the walk (east, north) from one corner to
      the other, and the square of the side length — no square roots
      needed! (b) A perpendicular walk of the same length: rotating a
      walk 90° sends (run a, rise b) to (run −b, rise a). Use that to
      find the other two corners. (c) What is the square's area?
      (d) Bonus: there's a SECOND square on the other side of the given
      side — can you find its corners too?

  90. The famous circle. A circle has center (3, 4) and radius 5.
      (a) Write its equation and prove the origin is on it.
      (b) Find where it crosses the x-axis (set y = 0 — expect TWO
      answers!) and the y-axis (set x = 0).
      (c) The three crossing points form a triangle. Find its three
      side lengths. (d) Find the midpoint of the triangle's longest
      side. What do you notice?! (This surprise is over 2000 years old —
      it's called Thales' theorem.)

  91. The fountain arc. Water arcs from a fountain: its height is
      y = −(x − 2)² + 9 at horizontal distance x meters. (a) How high
      does the water get, and where? (b) Where does the water land
      (y = 0)? Expect two answers — which one makes physical sense?
      (c) A 1-meter platform stands at x = 2. Does the water clear it?

  92. The double visit. Find BOTH points where y = x² meets
      y = 2x + 8. (Rearrange to zero, hunt for two numbers that multiply
      to −8 and add to −2, factor, zero-product property, and check
      everything in both rules.)

  93. The disguised point. The point (a, 2a) — the same mystery number
      in both coordinates — lies on the line 2x + 3y = 16. Find a, then
      give the point.

  94. The midpoint, backwards. The midpoint of A(3, −1) and a mystery
      point B is (5, 4). Find B. (Set up (3 + x)/2 = 5 and
      (−1 + y)/2 = 4. Then verify with the midpoint formula!)

  95. Two answers on the y-axis. Find ALL the points on the y-axis at
      distance 5 from (3, 1). (Points on the y-axis look like (0, y).
      Distance formula, square both sides — and remember the ±!)

  96. Through the same gate. (a) Find the rule for the line through
      (3, 5) PARALLEL to y = 3x + 4. (b) Find the rule for the line
      through (3, 5) PERPENDICULAR to y = 3x + 4. (c) Where do your two
      new lines cross the y-axis?

  97. Two methods, one answer. Solve the system 2x + y = 11 and
      x + 3y = 13 TWO ways: (a) substitution (solve the first rule for
      y, then plug into the second), and (b) elimination (multiply the
      first rule by 3, then subtract the second). (c) Which felt cleaner
      here, and why?

  98. The sequence on the line. A line passes through (0, 5) and
      (3, 14). (a) Find its rule. (b) Its y-values at x = 0, 1, 2, 3, ...
      form an arithmetic sequence — what is the common difference, and
      why is it exactly the slope? (c) Find the y-value at x = 9.
      (d) Find the SUM of the ten y-values from x = 0 to x = 9.
      (Arithmetic series trick: sum = (first + last) × count ÷ 2.)

  99. Design your own circle! (Open-ended.) (a) Write a circle rule with
      center NOT at the origin. (b) Find TWO points on it and ONE point
      not on it — prove all three with the membership test. (c) Write a
      line-rule that passes through your circle's center. (d) Where does
      your line cross your circle? (The vertical line x = h through the
      center makes the arithmetic friendliest!)

  100. The grand finale — the four-line handshake. (a) Find where
       y = x + 1 meets y = 2x − 2. (b) Prove the line y = −x + 7 passes
       through the same point. (c) Invent a FOURTH line-rule through the
       same point and prove it. (d) Big picture: one point passed FOUR
       membership tests — what does that say geometrically? And when a
       system answers "1 = 5" or "0 = 0", what is the algebra saying in
       geometry's language?


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea
slipped — the address order (x first!), the plug-in test, the rise-on-top
fraction (with its sign!), the perpendicular flip-and-sign-flip, or whether
you checked BOTH rules.

Easy

  1–6:   4 east, 3 north  ·  2 west, 5 north  ·  6 south only (x = 0:
         no east-west walk!)  ·  3½ east, 1 north (7/2 = 3½)
         3 west, 4 south  ·  5 east only (y = 0: no north-south walk!)

  7–14:  I  ·  II  ·  III  ·  IV  ·  no quadrant — it's ON the y-axis
         no quadrant — it's ON the x-axis  ·  II (signs (−, +))
         IV (signs (+, −))

  15–20: (3, −5) — y flips  ·  (−3, 5) — x flips  ·  (2, 1) — both flip
         (−4, −2) — x flips  ·  (0, −6) — y flips
         (−1, −4) after the x-axis, then (1, −4) after the y-axis —
         the same as one origin flip of (−1, 4)!

  21–26: (2, 5) yes (y = 5 ✅), (5, 2) no  ·  (−3, 4) yes (x = −3 ✅),
         (3, −4) no  ·  (7, 7) yes, (7, −7) no (−7 ≠ 7)
         (3, −3) yes (−3 = −(3) ✅), (3, 3) no (3 ≠ −3)
         (1, 4) yes (2 + 4 = 6 ✅), (4, 1) no (8 + 1 = 9 ≠ 6)
         (6, 8) yes (36 + 64 = 100 ✅), (7, 2) no (49 + 4 = 53 ≠ 100)

  27–34: yes (3 × 2 − 2 = 4)  ·  no (3 × 3 − 2 = 7 ≠ 8)
         yes (4 × 2 + 1 = 9)  ·  yes (3² + 2 = 9 + 2 = 11)
         no ((−3)² + 2 = 11 ≠ −7 — y = x² + 2 is never negative!)
         yes (6 + 6 = 12)  ·  yes (12 + 0 = 12)
         yes ((4 − 1)² + (6 − 2)² = 9 + 16 = 25)

  35–42: 2 (rise 4 ÷ run 2)  ·  1/4 (rise 1 ÷ run 4)
         −1 (rise −4 ÷ run 4 — downhill!)  ·  3 (rise 6 ÷ run 2)
         0 — a flat horizontal line: y = 7
         NO slope — run 0 means divide by 0: a vertical line, x = 3
         2 (rise 4 ÷ run 2)  ·  −2 (rise −8 ÷ run 4 — downhill!)

  43–48: m = 5, b = 2  ·  m = 1 (x is secretly 1x!), b = −7
         m = −2, b = 9
         common difference 3, so slope 3; starts at 1: y = 3x + 1
         the point (0, 6) — b is the y-intercept
         −1, 2, 5 (each step in x adds exactly 3 to y — the slope!)

  49–50: parallel — both have slope 3 with different intercepts
         (a constant gap, so they never meet)
         perpendicular — slopes 2 and −1/2, and 2 × (−1/2) = −1 ✅

Intermediate

  51. 9 = 2x + 3 → subtract 3: 6 = 2x → divide by 2: x = 3.
      Check: 2 × 3 + 3 = 9 ✅
  52. y = (1/2) × 6 + 4 = 3 + 4 = 7. The point is (6, 7) ✅
  53. 3k + 12 = 15 → subtract 12: 3k = 3 → divide by 3: k = 3.
      Check: 3 × 3 + 12 = 15 ✅
  54. k = 4² − 3 × 4 = 16 − 12 = 4. The point is (4, 4) ✅

  55. Jump 2 per x-step of 1 → slope 2; start 3 → y = 2x + 3.
      Check x = 3: 2 × 3 + 3 = 9 ✅
  56. Jump 5 → slope 5; start 2 → y = 5x + 2. Check x = 3: 17 ✅
  57. Jump −3 (shrinking!) → slope −3; start 8 → y = −3x + 8.
      Check x = 3: −9 + 8 = −1 ✅
  58. Jump 3 over an x-step of 2 → slope 3/2; start 1 → y = (3/2)x + 1.
      Check x = 4: (3/2) × 4 + 1 = 6 + 1 = 7 ✅

  59. m = (9 − 3) ÷ (2 − 0) = 3; the point (0, 3) hands us b = 3:
      y = 3x + 3. Check the other point: 3 × 2 + 3 = 9 ✅
  60. m = (11 − 5) ÷ (3 − 1) = 3; plug (1, 5): 5 = 3 × 1 + b → b = 2:
      y = 3x + 2. Check (3, 11): 3 × 3 + 2 = 11 ✅
  61. m = (7 − 1) ÷ (4 − 2) = 3; plug (2, 1): 1 = 3 × 2 + b → b = −5:
      y = 3x − 5. Check (4, 7): 3 × 4 − 5 = 7 ✅
  62. m = (0 − 10) ÷ (5 − 0) = −2; b = 10 from (0, 10): y = −2x + 10.
      Check (5, 0): −2 × 5 + 10 = 0 ✅

  63. x + 4 = 3x → subtract x: 4 = 2x → x = 2; y = 2 + 4 = 6.
      Meeting point (2, 6). Check the other rule: 3 × 2 = 6 ✅
  64. 2x + 3 = x + 7 → subtract x: x + 3 = 7 → x = 4; y = 4 + 7 = 11.
      Meeting point (4, 11). Check: 2 × 4 + 3 = 11 ✅
  65. 2x − 3 = −x + 6 → add x: 3x − 3 = 6 → add 3: 3x = 9 → x = 3;
      y = 2 × 3 − 3 = 3. Meeting point (3, 3). Check: −3 + 6 = 3 ✅
  66. 4x + 1 = 2x + 4 → subtract 2x: 2x + 1 = 4 → subtract 1: 2x = 3 →
      x = 3/2; y = 4 × (3/2) + 1 = 6 + 1 = 7. Meeting point (3/2, 7).
      Check: 2 × (3/2) + 4 = 3 + 4 = 7 ✅

  67. Add the equations: (x + y) + (x − y) = 9 + 1 → 2x = 10 → x = 5.
      Then 5 + y = 9 → y = 4. Point (5, 4). Check: 5 − 4 = 1 ✅
  68. Add the equations: (2x + y) + (x − y) = 12 + 3 → 3x = 15 → x = 5.
      Then 2 × 5 + y = 12 → y = 2. Point (5, 2). Check: 5 − 2 = 3 ✅

  69. NONE — parallel twins! Set equal: 3x + 2 = 3x + 9 → subtract 3x:
      2 = 9, which is impossible. Equal slopes, different intercepts:
      zero meetings, and the algebra just said so.
  70. INFINITELY many — the same line twice! Divide the second rule by
      2: y = 2x + 2, identical to the first. Setting equal gives
      0 = 0, always true: every point of the line is a meeting point.

  71. M = ((2 + 8)/2, (3 + 7)/2) = (5, 5) ✅
  72. M = ((−4 + 6)/2, (1 + (−3))/2) = (2/2, −2/2) = (1, −1) ✅

  73. d² = (4 − 1)² + (6 − 2)² = 9 + 16 = 25 → d = √25 = 5 ✅
  74. d² = 5² + 12² = 25 + 144 = 169 → d = √169 = 13 ✅

  75. Center (1, −4) — y + 4 means the center's y is −4! — radius √49
      = 7. Test (1, 3): (1 − 1)² + (3 + 4)² = 0 + 49 = 49 ✅ ON!
  76. Center (−2, 3) — x + 2 means h = −2! — radius √25 = 5. Test
      (2, 6): (2 + 2)² + (6 − 3)² = 16 + 9 = 25 ✅ ON!

  77. Vertex (5, 2). Smallest y = 2, because (x − 5)² ≥ 0 for every x,
      so y = (x − 5)² + 2 ≥ 2 — hit exactly when x = 5.
  78. Vertex (−1, −4) — x + 1 means h = −1! Smallest y = −4, hit
      exactly when x = −1.

  79. Set equal: x² = 4x − 3 → rearrange: x² − 4x + 3 = 0. Two numbers
      with product 3 and sum −4: −1 and −3 → (x − 1)(x − 3) = 0 →
      x = 1 or x = 3. Points: (1, 1) and (3, 9). Checks: (1, 1): 1² = 1
      ✅ and 4 × 1 − 3 = 1 ✅; (3, 9): 3² = 9 ✅ and 4 × 3 − 3 = 9 ✅.
      Four yeses!

  80. (a) d = 60 − 4t. (b) Slope −4: the depth SHRINKS by 4 meters per
      minute — negative because the sub is rising toward the surface.
      (c) Set d = 0: 60 − 4t = 0 → add 4t: 60 = 4t → t = 15 minutes.
      Check: 60 − 4 × 15 = 60 − 60 = 0 ✅

Challenge

  81. Build y = (2/3)x + b. Plug in (6, 1): 1 = (2/3) × 6 + b = 4 + b →
      subtract 4: b = −3. The rule is y = (2/3)x − 3, so it crosses the
      y-axis at (0, −3). Check: (2/3) × 6 − 3 = 4 − 3 = 1 ✅

  82. (a) Slopes: AB: (4 − 2) ÷ (4 − 3) = 2. BC: (2 − 1) ÷ (3 − 5) =
      −1/2. CA: (4 − 1) ÷ (4 − 5) = −3. Product test: AB × BC =
      2 × (−1/2) = −1 → AB ⊥ BC: the right angle is at B ✅.
      (b) Squared distances: AB² = 1² + 2² = 5. BC² = 2² + (−1)² = 5.
      AC² = 1² + 3² = 10. Is AB² + BC² = AC²? 5 + 5 = 10 ✅ — by the
      converse of the Pythagorean theorem, the right angle is at B,
      confirmed a second way!
      (c) The slopes were quicker — three fractions and one
      multiplication. But the distances revealed a bonus: AB² = BC² = 5,
      so AB = BC — the triangle is also ISOSCELES! Two methods, two
      kinds of treasure.

  83. 12 lattice points. Casework on x (y² = 25 − x² must be a perfect
      square): x = 0 → y² = 25 → y = ±5: 2 points. x = ±1 → y² = 24:
      no. x = ±2 → y² = 21: no. x = ±3 → y² = 16 → y = ±4: 4 points.
      x = ±4 → y² = 9 → y = ±3: 4 points. x = ±5 → y² = 0 → y = 0:
      2 points. And |x| ≥ 6 gives x² ≥ 36 > 25 — impossible, so the
      search is complete. Total: 2 + 4 + 4 + 2 = 12 ✅

  84. 29 lattice points. Casework on x (count the y's with y² ≤ 9 − x²):
      x = 0: y² ≤ 9 → y from −3 to 3: 7 points. x = ±1: y² ≤ 8 → y from
      −2 to 2: 5 points each → 10. x = ±2: y² ≤ 5 → y from −2 to 2:
      5 each → 10. x = ±3: y² ≤ 0 → y = 0 only: 1 each → 2.
      |x| ≥ 4: x² ≥ 16 > 9, impossible. Total: 7 + 10 + 10 + 2 = 29 ✅

  85. (a) Set x = 0: y = 8 → the y-intercept is (0, 8).
      (b) Set y = 0: 0 = −2x + 8 → add 2x: 2x = 8 → x = 4 → the
      x-intercept is (4, 0).
      (c) The legs along the axes have lengths 8 and 4:
      area = ½ × 8 × 4 = 16 square units ✅

  86. First the meeting: x + 1 = 2x − 2 → add 2: x + 3 = 2x →
      subtract x: x = 3 → y = 3 + 1 = 4. Meeting point (3, 4). Now the
      membership test on y = kx − 5: 4 = k × 3 − 5 → add 5: 9 = 3k →
      k = 3. The line y = 3x − 5 joins the handshake: 3 × 3 − 5 = 4 ✅

  87. (a) x-axis flip: (4, −1) → (4, 1). Then y-axis flip: (4, 1) →
      (−4, 1). (b) Origin flip: (4, −1) → (−4, 1). Same landing! ✅
      (c) The x-axis flip sends (x, y) → (x, −y); the y-axis flip sends
      that to (−x, −y); and the origin flip sends (x, y) → (−x, −y) in
      one move. Both flips together = the origin flip — the algebra of
      sign flips proves the geometry of mirrors.

  88. (a) Set equal: 12 − x = 9 − x/2 → subtract 9: 3 − x = −x/2 →
      add x: 3 = x/2 → multiply by 2: x = 6 hours.
      (b) Height: y = 12 − 6 = 6 cm.
      (c) Candle B: y = 9 − 6/2 = 9 − 3 = 6 ✅ — same height, both
      rules agree!

  89. (a) Walk from (2, 1) to (6, 4): 4 east, 3 north. Side² = 4² + 3²
      = 16 + 9 = 25.
      (b) Rotate the walk 90°: (run 4, rise 3) → (run −3, rise 4).
      Check perpendicular: the slopes are 3/4 and 4/(−3) = −4/3, and
      (3/4) × (−4/3) = −1 ✅. Check same length: (−3)² + 4² = 25 ✅.
      New corners: (6, 4) + (−3, 4) = (3, 8), and (2, 1) + (−3, 4) =
      (−1, 5). The square is (2, 1), (6, 4), (3, 8), (−1, 5).
      (c) Area = side² = 25 square units — no square root needed!
      (d) Rotate the other way: (run 3, rise −4): corners (6, 4) +
      (3, −4) = (9, 0) and (2, 1) + (3, −4) = (5, −3). Two different
      squares share the same side — one above-left, one below-right!

  90. (a) Equation: (x − 3)² + (y − 4)² = 25. Origin test:
      (0 − 3)² + (0 − 4)² = 9 + 16 = 25 ✅ — the origin is ON!
      (b) x-axis (set y = 0): (x − 3)² + 16 = 25 → (x − 3)² = 9 →
      x − 3 = ±3 → x = 0 or 6 → crossings (0, 0) and (6, 0).
      y-axis (set x = 0): 9 + (y − 4)² = 25 → (y − 4)² = 16 →
      y − 4 = ±4 → y = 0 or 8 → crossings (0, 0) and (0, 8).
      (c) Corners (0, 0), (6, 0), (0, 8). Sides: 6 (along the x-axis),
      8 (along the y-axis), and √(6² + 8²) = √100 = 10.
      (d) Midpoint of the longest side, from (6, 0) to (0, 8):
      ((6 + 0)/2, (0 + 8)/2) = (3, 4) — THE CENTER OF THE CIRCLE! So
      the longest side is a DIAMETER (length 10 = 2 × radius ✅), and
      the triangle's right angle (at the origin — check: 6² + 8² =
      10² ✅) sits exactly on the circle. Thales' theorem: any triangle
      whose longest side is a diameter has its right angle on the
      circle. You just rediscovered a 2000-year-old theorem with
      nothing but coordinates!

  91. (a) Vertex of y = −(x − 2)² + 9 is (2, 9): since (x − 2)² ≥ 0,
      we get −(x − 2)² ≤ 0, so y ≤ 9 — with y = 9 exactly at x = 2.
      Highest point: 9 meters up, 2 meters out.
      (b) 0 = −(x − 2)² + 9 → (x − 2)² = 9 → x − 2 = ±3 → x = 5 or
      x = −1. Distance can't be negative here — the water lands at
      x = 5 meters.
      (c) At x = 2: y = 9 > 1 — the water clears the 1-meter platform
      by 8 meters ✅

  92. Set equal: x² = 2x + 8 → rearrange: x² − 2x − 8 = 0. Two numbers
      with product −8 and sum −2: −4 and 2 → (x − 4)(x + 2) = 0 →
      x = 4 or x = −2. Points: (4, 16) and (−2, 4). Checks:
      4² = 16 ✅ and 2 × 4 + 8 = 16 ✅; (−2)² = 4 ✅ and
      2 × (−2) + 8 = 4 ✅. Four yeses!

  93. Membership test with x = a and y = 2a: 2a + 3(2a) = 16 →
      2a + 6a = 16 → 8a = 16 → a = 2. The point is (2, 4).
      Check: 2 × 2 + 3 × 4 = 4 + 12 = 16 ✅

  94. (3 + x)/2 = 5 → multiply by 2: 3 + x = 10 → x = 7.
      (−1 + y)/2 = 4 → multiply by 2: −1 + y = 8 → y = 9.
      So B = (7, 9). Verify: midpoint of (3, −1) and (7, 9) is
      ((3 + 7)/2, (−1 + 9)/2) = (5, 4) ✅

  95. Points on the y-axis look like (0, y). Distance to (3, 1):
      √((0 − 3)² + (y − 1)²) = 5 → square both sides:
      9 + (y − 1)² = 25 → (y − 1)² = 16 → y − 1 = ±4 → y = 5 or
      y = −3. TWO answers: (0, 5) and (0, −3). Checks: 9 + 16 = 25 ✅
      for both! (Two answers — just like the two mirror twins on a
      circle!)

  96. (a) Parallel: same slope 3. y = 3x + b; plug (3, 5): 5 = 9 + b →
      b = −4. Rule: y = 3x − 4. Check: 3 × 3 − 4 = 5 ✅
      (b) Perpendicular: slope −1/3 (flip AND sign-flip; check:
      3 × (−1/3) = −1 ✅). y = −x/3 + b; plug (3, 5): 5 = −3/3 + b =
      −1 + b → b = 6. Rule: y = −x/3 + 6. Check: −3/3 + 6 = 5 ✅
      (c) The y-crossings are the b's themselves: (0, −4) and (0, 6).

  97. (a) Substitution: the first rule gives y = 11 − 2x. Plug into the
      second: x + 3(11 − 2x) = 13 → x + 33 − 6x = 13 → −5x + 33 = 13 →
      subtract 33: −5x = −20 → x = 4 → y = 11 − 8 = 3.
      (b) Elimination: multiply the first rule by 3: 6x + 3y = 33.
      Subtract the second rule: (6x + 3y) − (x + 3y) = 33 − 13 →
      5x = 20 → x = 4 → then 2 × 4 + y = 11 → y = 3.
      Same answer both ways: (4, 3). Check: 2 × 4 + 3 = 11 ✅ and
      4 + 3 × 3 = 13 ✅. (c) Your call! Elimination dodged the
      parentheses here; substitution shines when a rule already says
      "y =". Choosing the tool is part of the skill.

  98. (a) Slope = (14 − 5) ÷ (3 − 0) = 3; b = 5: the rule is
      y = 3x + 5.
      (b) The y-values 5, 8, 11, 14, ... jump by 3 every time x grows
      by 1 — common difference 3 — and "jump in y per step in x" is
      exactly what slope MEANS.
      (c) At x = 9: y = 3 × 9 + 5 = 32.
      (d) Sum = (first + last) × count ÷ 2 = (5 + 32) × 10 ÷ 2 =
      37 × 5 = 185 ✅

  99. Sample answer: (a) (x − 1)² + (y − 2)² = 25 — center (1, 2),
      radius 5. (b) ON: (1, 7): 0 + 25 = 25 ✅; (4, 6): 9 + 16 = 25 ✅.
      NOT on: (0, 0): 1 + 4 = 5 ≠ 25 ❌. (c) The vertical line x = 1
      passes through the center (1, 2) ✅. (d) Crossings: plug x = 1
      into the circle's rule: (y − 2)² = 25 → y − 2 = ±5 → y = 7 or
      y = −3: the points (1, 7) and (1, −3). Your circle is probably
      different — if two tests pass, one fails, and your crossings
      check out in BOTH rules, you did it right!

  100. (a) x + 1 = 2x − 2 → add 2: x + 3 = 2x → subtract x: x = 3 →
       y = 3 + 1 = 4: the point (3, 4). Check: 2 × 3 − 2 = 4 ✅.
       (b) Membership test on y = −x + 7: −3 + 7 = 4 ✅ — it joins the
       handshake!
       (c) Sample: y = 3x − 5: 3 × 3 − 5 = 4 ✅. ANY rule that equals
       4 when x = 3 works — infinitely many lines through one point,
       like doors on the same hinge.
       (d) Four rules, one shared point: all four lines cross at the
       same spot — they're CONCURRENT. And when the algebra says
       "1 = 5", the geometry says PARALLEL (never meet); when it says
       "0 = 0", the two rules were the SAME LINE in disguise. Algebra
       counts the meetings before geometry draws them — that's the
       dictionary talking in both directions!


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you
truly understand the founding idea of algebraic geometry: points have
addresses, equations are club rules, and shapes are the members drawn on a
map — and you can now measure distances, find midpoints, circle any center,
slide any parabola, and count meetings without drawing a thing. The next
time a video game places a character exactly where it belongs, remember —
somewhere inside, a little membership test just ran. Great work!
