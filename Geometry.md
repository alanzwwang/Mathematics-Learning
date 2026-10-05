Geometry — A Complete Lesson (Honors Edition)
══════════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        a² + b² = c²  — and you will PROVE it with four triangles and one square

        Arc of 80°, inscribed angle 40° — the rim of a circle always sees half

        Dilate a shape by 3: perimeter ×3, but area ×9

Those three lines are geometry at the honors level. The first is the most famous theorem in all of mathematics — and in this lesson you won't just use it, you'll prove it yourself, step by justified step. The second is a circle secret that turns impossible-looking angle puzzles into one-line answers. The third is why a giant balloon needs vastly more rubber than a small one — area grows by the SQUARE of the scale. You already know that a triangle's angles add to 180°, how to fence a shape (perimeter), and how to cover it (area). Now we go deeper: we prove WHY those rules are true, we solve them with algebra, and we add powerful new tools — congruence, similarity, circle theorems, transformations, clever counting, and even logarithms.

Why do people care? Because geometry is the operating system of the physical world. Bridges stand because of triangles. GPS satellites triangulate your phone. Every video game rotates and translates thousands of points per second using exactly the transformation rules you'll learn here. Architects, astronomers, and robotics engineers all speak fluent geometry. You're about to join them.

In this lesson, you will:

  1. Build from points, lines, segments, rays — and place them on the coordinate plane
  2. Measure turns: angles, the two famous teams, and angle algebra
  3. Cut parallel lines with a transversal — and PROVE the 180° triangle rule
  4. Master triangles: the inequality, isosceles secrets, and congruence
  5. State, prove, and reverse the Pythagorean theorem — then measure distance anywhere
  6. Unlock polygons: angle sums, exterior angles, and counting diagonals
  7. Derive every area formula (never just memorize!) — plus Heron's bonus
  8. Scale shapes with similarity — and discover the k² surprise
  9. Circle theorems: π, arcs, sectors, inscribed angles, and cyclic quadrilaterals
  10. Transform the plane with functions: translate, reflect, rotate, dilate, compose
  11. Count like a competitor: casework and complementary counting in geometry
  12. Grow shapes with sequences and exponentials — tamed by logarithms
  13. Dodge the classic mistakes (now upgraded to competition level)
  14. Recap, then conquer 100 practice problems with a full step-by-step answer key

How to use this lesson: Read the sections in order — each one is built from the one before it, and every new term is defined the moment it appears. Take your time. Try every "Your Turn" box with pencil and paper, and sketch! When we prove something, read each step slowly until its reason feels obvious. That habit — justify every step — is the whole secret of honors geometry. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: Points, Lines, Segments, Rays — and Where They Live
─────────────────────────────────────────────

📌 Key idea of this section:

        A point is a spot. A line goes forever both ways.
        A segment has two endpoints. A ray has one.
        And n points on a line hide exactly n(n−1)/2 segments.

Everything in geometry is built from four simple pieces:

  · A POINT is an exact spot. It has no size at all — no width, no height, nothing to measure. We draw it as a dot and name it with a capital letter, like P. Think: the exact tip of a pin.

  · A LINE is a perfectly straight path that goes on FOREVER in both directions. It never ends, so its length can never be measured. We name it by any two points on it, like "line AB." Think: train tracks that never, ever stop.

  · A SEGMENT is a piece of a line with TWO endpoints, like "segment AB." It starts, it ends, and you can measure it. This is the one you meet in real life: the edge of your desk, a stick, a side of a square.

  · A RAY has ONE endpoint and shoots off forever in one direction, like "ray AB" — and notice the ORDER matters for rays: ray AB starts at A and travels through B, while ray BA starts at B and travels through A. Different rays! Memory trick: a sunRAY starts at the Sun (one endpoint) and beams outward forever.

Two more words that show up everywhere:

  · PARALLEL lines (written AB ∥ CD) run side by side and NEVER meet, no matter how far they go — train tracks.
  · PERPENDICULAR lines (written AB ⊥ CD) meet at a perfect square corner — a 90° angle, like the corner of a book.

Giving points an address: the coordinate plane

Draw two perpendicular number lines — the horizontal x-axis and the vertical y-axis — crossing at the origin (0, 0). Now every point in the plane gets an address: an ordered pair (x, y). The point (3, 5) lives 3 steps right and 5 steps up from the origin.

Distances along a row or column are pure subtraction. From A(2, 5) to B(11, 5):

        11 − 2 = 9 units        (same row, so just subtract the x-coordinates)

The MIDPOINT of a segment is the point exactly halfway between the endpoints — halfway in x, and halfway in y. "Halfway between two numbers" means their average: add them, divide by 2.

Midpoint of (3, 7) and (9, 1):

        x: (3 + 9) ÷ 2 = 12 ÷ 2 = 6     (halfway between the x-coordinates)
        y: (7 + 1) ÷ 2 = 8 ÷ 2 = 4      (halfway between the y-coordinates)
        midpoint = (6, 4)

A counting gift that will come back all lesson long

Place 5 points A, B, C, D, E on a line. How many different segments do they determine? Count carefully: from A you can draw 4 (AB, AC, AD, AE). From B, only 3 are NEW (BC, BD, BE — BA was already counted). Then 2, then 1:

        4 + 3 + 2 + 1 = 10 segments

In general, n points determine 1 + 2 + 3 + ... + (n−1) segments. There's a lightning-fast formula for that sum (we'll prove where it comes from in Lesson 11):

        segments from n points = n(n−1)/2

Check it: 5 points → 5 × 4 ÷ 2 = 10 ✅. Six points → 6 × 5 ÷ 2 = 15 ✅. Why does ÷2 appear? Each segment has two ends, so counting "from each point" counts every segment twice — once from each side. Dividing by 2 undoes the double count.

✏️ Your Turn

(a) The edge of a ruler: point, line, segment, or ray? (b) Seven points sit on a line. How many segments do they determine? (c) Find the midpoint of (2, 9) and (6, 3).

Answers: (a) A segment — two endpoints, measurable. (b) 7 × 6 ÷ 2 = 21. (c) x: (2 + 6) ÷ 2 = 4; y: (9 + 3) ÷ 2 = 6; midpoint (4, 6).


─────────────────────────────────────────────
Lesson 2: Angles — Measuring the Turn, Proving the Rules
─────────────────────────────────────────────

📌 Key idea of this section:

        An angle measures a TURN, not a length.
        Complementary → 90°. Supplementary → 180°. Around a point → 360°.
        Vertical angles are always equal — and we can prove it.

An angle is what you get when two rays share one endpoint — like the hands of a clock. The shared endpoint is the VERTEX. The angle measures HOW MUCH you turn from one ray to the other, in DEGREES (°). A full spin is 360° — a gift from the ancient Babylonians, who loved 60s and 360s (that's also why clocks have 60 minutes!).

Here's what surprises everyone: an angle has nothing to do with how LONG the rays are. Tiny rays, giant rays — same turn, same angle. Length doesn't matter; turning does.

The five famous sizes:

        Acute angle:    less than 90°           (a sharp little turn)
        Right angle:    exactly 90°             (the perfect square corner)
        Obtuse angle:   between 90° and 180°    (a wide, lazy opening)
        Straight angle: exactly 180°            (the rays point opposite ways)
        Reflex angle:   between 180° and 360°   (the long way around — new!)

So 30° is acute, 90° is right, 120° is obtuse, 180° is straight, 270° is reflex. Sneaky tests love the borderline cases: 89° is acute (barely!) and 91° is obtuse (barely!).

The two angle teams, and two new crews

  · COMPLEMENTARY angles add to 90°:    30° + 60° = 90° ✅
  · SUPPLEMENTARY angles add to 180°:   110° + 70° = 180° ✅

Memory trick: in the alphabet, C comes before S — and 90 comes before 180.

Two more crews you'll meet constantly:

  · A LINEAR PAIR is two adjacent angles that together form a straight line — so a linear pair is always supplementary.
  · VERTICAL ANGLES are the two angles directly ACROSS from each other when two lines cross — like the top and bottom angles in an X.

Here comes our first real proof. Claim: vertical angles are always EQUAL. When two lines cross, label the top angle a, the left angle b, and the bottom angle c. Watch every step carry its reason:

        1. a + b = 180°      (a and b are a linear pair: together they form a straight line)
        2. b + c = 180°      (b and c are a linear pair on the other line)
        3. a + b = b + c     (both sums equal 180°, so they equal each other)
        4. a = c             (subtract b from both sides — equals minus equals are equal)

No measuring, no "it looks like it" — pure logic. That's the honors way.

Now the algebra begins. In honors geometry, angles wear disguises like 2x + 15, and your job is to unwrap them. Every step gets a reason:

Example A: The angles x and 2x + 15 are complementary. Find both.

        x + (2x + 15) = 90       (complementary means the sum is 90°)
        3x + 15 = 90             (combine like terms: x + 2x = 3x)
        3x = 75                  (subtract 15 from both sides)
        x = 25                   (divide both sides by 3)
        The angles are 25° and 2(25) + 15 = 65°.
        Check: 25° + 65° = 90° ✅

Example B: Two lines cross. One pair of vertical angles is 3x + 20 and 5x − 40. Find all four angles.

        3x + 20 = 5x − 40        (vertical angles are equal — we PROVED it!)
        20 + 40 = 5x − 3x        (add 40 to both sides; subtract 3x from both sides)
        60 = 2x                  (simplify both sides)
        x = 30                   (divide both sides by 2)
        Each vertical angle: 3(30) + 20 = 110°. Check the other: 5(30) − 40 = 110° ✅
        Each angle of the linear pair: 180° − 110° = 70° (supplementary).
        All four angles: 110°, 70°, 110°, 70°.

Example C: Four angles wrap all the way around a single point: 80°, 100°, x, and 2x.

        80 + 100 + x + 2x = 360  (a full turn around a point is 360°)
        180 + 3x = 360           (combine like terms)
        3x = 180                 (subtract 180 from both sides)
        x = 60                   (divide by 3)
        The missing angles are 60° and 120°. Check: 80 + 100 + 60 + 120 = 360 ✅

✏️ Your Turn

(a) Classify 88°, 90°, 200°. (b) Find the complement and the supplement of 63°. (c) A vertical angle is 35°. What is its linear pair — and how do you know without measuring?

Answers: (a) acute, right, reflex. (b) 90° − 63° = 27°; 180° − 63° = 117°. (c) 180° − 35° = 145°, because a linear pair forms a straight line, so it must be supplementary.


─────────────────────────────────────────────
Lesson 3: Parallel Lines and a Transversal — and the Proof of 180°
─────────────────────────────────────────────

📌 Key idea of this section:

        A transversal across parallel lines makes equal angles in the same position.
        And ONE parallel line is all it takes to prove: every triangle holds 180°.

When one line crosses two parallel lines, the crossing line is called a TRANSVERSAL. It creates eight angles, and they come in perfectly matched sets. Draw line t cutting across parallel lines m and n, and look at one crossing at a time. If one angle is 70°, here's the full cast:

  · CORRESPONDING angles sit in the SAME POSITION at each crossing (top-left at the first crossing, top-left at the second). Corresponding angles are EQUAL: both 70°.

  · ALTERNATE INTERIOR angles are inside the two parallel lines, on OPPOSITE sides of the transversal — they make a Z shape. Alternate interior angles are EQUAL: 70°.

  · SAME-SIDE INTERIOR angles (also called co-interior) are inside the parallel lines on the SAME side of the transversal. They are SUPPLEMENTARY: 70° + 110° = 180°.

Why are these true? Corresponding angles are equal because parallel lines are the same line just slid over — sliding changes nothing about the turns. Alternate interior angles are equal because each one is vertical to a corresponding angle (chase it: corresponding = 70°, vertical to it = 70°, and that's the alternate interior partner). And same-side interior angles are supplementary because each forms a linear pair with an alternate interior angle.

Watch the chase in action. A transversal cuts parallel lines, and one angle is 70°:

        Corresponding angle:    70°   (same position, parallel lines)
        Alternate interior:     70°   (Z shape, parallel lines)
        Same-side interior:     180° − 70° = 110°   (co-interior angles are supplementary)

Now the payoff: proving the golden rule of triangles

You've believed for years that every triangle's angles add to 180°. Today we PROVE it, using nothing but parallel lines and the angle facts above. Take any triangle ABC. Draw the line through C that is parallel to side AB, and mark a point D on it so that A and D are on opposite sides of line BC.

        1. ∠A = ∠ACD                  (alternate interior angles: AC is a transversal
                                         cutting the parallel lines AB and DC)
        2. ∠B = ∠BCE, where E is on the new line on the other side of C
                                         (alternate interior angles: BC is a transversal
                                         cutting the same two parallel lines)
        3. ∠ACD + ∠ACB + ∠BCE = 180°  (those three angles exactly fill the straight
                                         line through C, and a straight line is 180°)
        4. ∠A + ∠ACB + ∠B = 180°      (substitute steps 1 and 2 into step 3 —
                                         replacing each angle with its equal)

Done. ∠A + ∠B + ∠C = 180° for EVERY triangle, forever — not because we measured, but because parallel lines force it. Read the four steps again until each reason feels inevitable. This is the single most useful proof in all of school geometry.

A bonus theorem falls out for free: the EXTERIOR ANGLE

Extend one side of a triangle past a vertex. The angle formed OUTSIDE the triangle is called an EXTERIOR ANGLE, and it sits in a linear pair with the interior angle at that vertex. Claim: the exterior angle equals the SUM of the two far-away (remote) interior angles.

        1. interior + exterior = 180°        (linear pair on the extended side)
        2. interior + (other two) = 180°     (triangle angle sum, just proven!)
        3. exterior = (other two)            (both equal 180° minus the same interior angle)

Example: a triangle has interior angles 42° and 68°. The exterior angle at the third vertex?

        exterior = 42° + 68° = 110°          (exterior angle theorem)
        Check the long way: third interior = 180° − 42° − 68° = 70°,
        and exterior = 180° − 70° = 110° ✅ — same answer, two routes.

✏️ Your Turn

(a) A transversal cuts two parallel lines; one angle is 55°. Find its corresponding angle, its alternate interior partner, and its same-side interior partner. (b) A triangle has angles 35° and 75°. Find the third interior angle and the exterior angle at that vertex.

Answers: (a) 55°, 55°, and 180° − 55° = 125°. (b) Third angle: 180° − 35° − 75° = 70°. Exterior: 35° + 75° = 110° (or 180° − 70° = 110° — both routes agree ✅).


─────────────────────────────────────────────
Lesson 4: Triangles — the Inequality, Isosceles Secrets, and Congruence
─────────────────────────────────────────────

📌 Key idea of this section:

        Any two sides of a triangle must out-reach the third: a + b > c.
        Equal sides face equal angles. And SSS, SAS, ASA prove twins — SSA does not.

First, quick introductions. By SIDES: EQUILATERAL (all three sides equal), ISOSCELES (exactly two equal), SCALENE (none equal). By ANGLES: ACUTE (all angles under 90°), RIGHT (one 90° angle), OBTUSE (one angle over 90°). A triangle can never have two right or two obtuse angles — they'd already eat up 180° or more, leaving nothing for the third corner.

The triangle inequality: no side can be too long

Why can no triangle have sides 3, 5, and 9? Because the direct path from one end of the 9-side to the other is 9, and any detour through a third point must be LONGER — the shortest path between two points is the segment itself. So the two detour sides must add to MORE than 9. But 3 + 5 = 8. Not enough — the two short sides can't reach each other. The triangle collapses.

        THE TRIANGLE INEQUALITY: for any triangle, a + b > c
        (and the same for every pairing of sides)

Test 4, 7, 10:  4 + 7 = 11 > 10 ✅  4 + 10 > 7 ✅  7 + 10 > 4 ✅  — a real triangle!
Test 3, 5, 9:   3 + 5 = 8 < 9 ❌ — impossible.
Test 2, 6, 8:   2 + 6 = 8 — exactly equal! ❌ The triangle is squashed flat (called DEGENERATE). Equality is not allowed: the inequality is strict.

Handy shortcut: if two sides are 6 and 9, the third side x must satisfy

        9 − 6 < x < 9 + 6     that is,     3 < x < 15

(the third side must beat the GAP between the other two, but lose to their SUM).

Isosceles triangles: equal sides face equal angles

In an isosceles triangle, the two equal sides are the LEGS, the third side is the BASE, the angle between the legs is the VERTEX ANGLE, and the two angles at the base are the BASE ANGLES. The theorem: base angles are EQUAL. (You'll prove it yourself in the practice set — with congruent triangles!) So:

        Vertex angle 30°:  the base angles share 180° − 30° = 150°, so each is 150° ÷ 2 = 75°
        Base angle 65°:    vertex angle = 180° − 65° − 65° = 50°

Congruence: proving two triangles are exact twins

Two triangles are CONGRUENT (written ≅) if they have exactly the same shape AND size — one could be picked up and placed perfectly on the other. You don't need to check all six measurements (three sides, three angles). Three well-chosen facts are enough:

  · SSS (Side-Side-Side): all three sides match → congruent.
  · SAS (Side-Angle-Side): two sides and the angle BETWEEN them match → congruent.
  · ASA (Angle-Side-Angle): two angles and the side between them match → congruent.
  · AAS works too, because two matching angles force the third (the 180° rule!).

But careful: SSA (two sides and an angle NOT between them) does NOT guarantee congruence — two different triangles can share those measurements (the "ambiguous case"; see Lesson 13). Test writers love this trap.

Once triangles are proven congruent, you get a master key: CPCTC — "corresponding parts of congruent triangles are congruent." Every matching side and angle of the twins is equal.

A proof in action: triangles ABC and DEF have AB = DE, BC = EF, AC = DF. Prove ∠A = ∠D.

        1. AB = DE, BC = EF, AC = DF     (given)
        2. △ABC ≅ △DEF                   (SSS — three pairs of matching sides)
        3. ∠A = ∠D                       (CPCTC — ∠A and ∠D are corresponding parts)

A three-equation system, geometry style

Honors problems often hand you three facts and ask for three unknowns. In a triangle, ∠A + ∠B = 130° and ∠B + ∠C = 110°. Find all three angles. The third fact is the golden rule itself:

        1. ∠A + ∠B + ∠C = 180°           (triangle angle sum)
        2. ∠C = 180° − 130° = 50°        (subtract the equation ∠A + ∠B = 130° from step 1)
        3. ∠A = 180° − 110° = 70°        (subtract ∠B + ∠C = 110° from step 1)
        4. ∠B = 130° − 70° = 60°         (use ∠A + ∠B = 130°, now that ∠A is known)
        Check: 70° + 60° + 50° = 180° ✅ and 60° + 50° = 110° ✅

✏️ Your Turn

(a) Could a triangle have sides 5, 11, and x? Find the full range for x. (b) An isosceles triangle has base angles of 80°. Find the vertex angle. (c) In the three-equation example, why was it legal to subtract 130° in step 2?

Answers: (a) 11 − 5 < x < 11 + 5, so 6 < x < 16 (strictly — endpoints collapse flat). (b) 180° − 80° − 80° = 20°. (c) Because ∠A + ∠B = 130° means "∠A + ∠B" and "130°" are the SAME number — and you may subtract equals from equals.


─────────────────────────────────────────────
Lesson 5: The Pythagorean Theorem — State It, Prove It, Reverse It
─────────────────────────────────────────────

📌 Key idea of this section:

        In every right triangle with legs a and b and hypotenuse c:

        a² + b² = c²

        We can prove it with one square. And reversed, it classifies ANY triangle.

A RIGHT TRIANGLE has one 90° angle. The two sides forming the right angle are the LEGS (a and b), and the side across from the right angle — always the longest — is the HYPOTENUSE (c). The theorem says the squares of the legs add to the square of the hypotenuse.

The proof: four triangles in a square

Draw a big square whose side is a + b. In each corner, place a copy of your right triangle (legs a and b), rotated so the four hypotenuses face inward. The four hypotenuses form a tilted inner square with side c. Two different ways to measure the big square's area must give the same number:

        1. Big square area = (a + b)²                    (side × side)
        2. (a + b)² = (a + b)(a + b)
                    = a² + ab + ab + b²                  (multiply it out: each term of the
                    = a² + 2ab + b²                        first bracket times each of the second)
        3. Also, big square = 4 triangles + inner square (the pieces exactly fill it)
           = 4 × (ab ÷ 2) + c²                           (each triangle is half of an a-by-b rectangle)
           = 2ab + c²                                    (4 halves make 2 wholes)
        4. a² + 2ab + b² = 2ab + c²                      (steps 2 and 3 measure the SAME square)
        5. a² + b² = c²                                  (subtract 2ab from both sides)

There it is — the most famous equation in geometry, proven with nothing but area and algebra.

Using it forward: find the hypotenuse

        Legs 9 and 12:
        c² = 9² + 12²          (the theorem)
        c² = 81 + 144 = 225    (square each leg, then add)
        c = √225 = 15          (take the positive square root — lengths are positive)

Using it sideways: find a missing leg

        Hypotenuse 25, one leg 7:
        7² + b² = 25²          (the theorem, with b unknown)
        49 + b² = 625          (square the known numbers)
        b² = 625 − 49 = 576    (subtract 49 from both sides)
        b = √576 = 24          (positive square root)

Triplets worth memorizing: 3-4-5, 5-12-13, 8-15-17, 7-24-25 — and every multiple of them (6-8-10 is 3-4-5 doubled). Spotting a triple turns a four-line calculation into one glance.

Using it backwards: the CONVERSE classifies any triangle

The converse flips the logic: IF a² + b² = c², THEN the triangle is right. And comparing tells you even more:

        a² + b² = c²   →  right triangle
        a² + b² > c²   →  acute triangle  (the longest side is "too short" to close a right angle)
        a² + b² < c²   →  obtuse triangle (the longest side stretches the angle past 90°)

        Test 6, 7, 8:  36 + 49 = 85 > 64  → acute ✅
        Test 4, 5, 8:  16 + 25 = 41 < 64  → obtuse ✅
        Test 9, 12, 15: 81 + 144 = 225 = 225 → right ✅

The distance formula: Pythagoras on the coordinate plane

How far apart are (2, 3) and (8, 11)? They don't share a row or column — but a right triangle is hiding there. Slide horizontally 8 − 2 = 6, then vertically 11 − 3 = 8; those are the legs, and the distance is the hypotenuse:

        d² = 6² + 8² = 36 + 64 = 100     (Pythagorean theorem on the hidden triangle)
        d = √100 = 10                    (positive root)

        DISTANCE FORMULA: between (x₁, y₁) and (x₂, y₂):
        d = √((x₂ − x₁)² + (y₂ − y₁)²)

It's not a new formula to memorize — it's the Pythagorean theorem wearing a coordinate costume.

✏️ Your Turn

(a) Find the distance from (0, 0) to (3, 4). (b) Classify the triangle with sides 2, 3, 4 as acute, right, or obtuse. (c) A right triangle has legs 5 and 12. Hypotenuse?

Answers: (a) d² = 3² + 4² = 9 + 16 = 25, so d = 5. (b) 2² + 3² = 4 + 9 = 13 < 16 = 4² → obtuse. (c) c² = 25 + 144 = 169, so c = 13 (the 5-12-13 triple!).


─────────────────────────────────────────────
Lesson 6: Polygons — Angle Sums, Exterior Angles, and Diagonals
─────────────────────────────────────────────

📌 Key idea of this section:

        An n-sided polygon hides (n−2) triangles, so its angles sum to (n−2) × 180°.
        Its exterior angles, one per vertex, always sum to exactly 360°.

A POLYGON is any closed flat shape made of segments: triangle (3 sides), quadrilateral (4), pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10), dodecagon (12). A REGULAR polygon has all sides equal AND all angles equal.

Where do angle sums come from? Triangles!

Pick one vertex of a hexagon and draw all the diagonals from it. A DIAGONAL is a segment joining two vertices that aren't already neighbors. From one vertex of a hexagon you can draw 3 diagonals, and they slice the hexagon into 4 triangles. Each triangle carries 180°:

        hexagon angle sum = 4 × 180° = 720°

In general, from one vertex of an n-gon you draw n − 3 diagonals (to everyone except yourself and your two neighbors), making n − 2 triangles:

        ANGLE SUM OF ANY n-GON: (n − 2) × 180°

        Pentagon:  (5 − 2) × 180° = 540°
        Octagon:   (8 − 2) × 180° = 1080°

Working backwards: a polygon's angles sum to 1800°. How many sides?

        (n − 2) × 180° = 1800°       (the formula)
        n − 2 = 1800 ÷ 180 = 10      (divide both sides by 180)
        n = 12                       (add 2 to both sides) — a dodecagon!

Regular polygons: equal shares

In a REGULAR n-gon the total is split n equal ways, and there's a lovely shortcut through the back door. At each vertex, the interior angle and the EXTERIOR ANGLE (the turn you'd make walking around the outside) form a linear pair — they add to 180°. Walk all the way around any polygon and you make exactly one full turn:

        exterior angles, one per vertex:  always 360°, for EVERY polygon
        regular n-gon, each exterior angle: 360° ÷ n
        regular n-gon, each interior angle: 180° − 360°/n

        Regular hexagon:  exterior 360 ÷ 6 = 60°, interior 180 − 60 = 120° ✅
        Regular nonagon:  exterior 360 ÷ 9 = 40°, interior 180 − 40 = 140° ✅

Competition favorite: each interior angle of a regular polygon is 156°. How many sides?

        exterior = 180° − 156° = 24°   (linear pair at each vertex)
        n = 360 ÷ 24 = 15              (exteriors must tile the full 360° turn)

Counting diagonals

Each of the n vertices connects by a diagonal to n − 3 others (not itself, not its two neighbors). That counts every diagonal twice (once from each end), so:

        DIAGONALS IN AN n-GON: n(n − 3)/2

        Pentagon:  5 × 2 ÷ 2 = 5 ✅   Hexagon: 6 × 3 ÷ 2 = 9 ✅   Octagon: 8 × 5 ÷ 2 = 20 ✅

The quadrilateral family, with proof-level properties

  · PARALLELOGRAM: both pairs of opposite sides parallel. Properties: opposite sides equal, opposite angles equal, consecutive angles supplementary (why? each side is a transversal cutting parallel sides — co-interior angles!), and the diagonals BISECT each other (cut each other in half).
  · RECTANGLE: a parallelogram with four right angles. Extra superpower: diagonals are EQUAL in length.
  · RHOMBUS: a parallelogram with four equal sides — a diamond. Extra: diagonals are PERPENDICULAR.
  · SQUARE: rectangle AND rhombus at once — every superpower: equal diagonals that bisect each other at 90°. A square is a rectangle the way a poodle is a dog: it has everything required, plus extras.
  · TRAPEZOID: exactly one pair of parallel sides (the two BASES).

Example: one angle of a parallelogram is 65°. Find the other three.

        Consecutive angle: 180° − 65° = 115°   (co-interior angles, parallel sides)
        Opposite angles equal the given one:   65°
        All four: 65°, 115°, 65°, 115°.  Check: 65 + 115 + 65 + 115 = 360 ✅

✏️ Your Turn

(a) Find the angle sum of a pentagon, then each interior angle of a regular pentagon. (b) How many diagonals does a pentagon have? (c) A regular polygon has exterior angle 30°. How many sides?

Answers: (a) (5 − 2) × 180° = 540°; each interior 540 ÷ 5 = 108°. (b) 5 × 2 ÷ 2 = 5. (c) n = 360 ÷ 30 = 12 — a dodecagon.


─────────────────────────────────────────────
Lesson 7: Area — Formulas You Can Derive, Not Memorize
─────────────────────────────────────────────

📌 Key idea of this section:

        Triangle: A = (b × h) ÷ 2     Parallelogram: A = b × h
        Trapezoid: A = (b₁ + b₂) × h ÷ 2
        Every one of these is a rectangle or parallelogram in disguise.

AREA measures how many unit squares cover a shape; we write square units like cm². The rectangle is the root of everything: A = length × width, because you count rows × columns of unit squares. Every other area formula is a rectangle or parallelogram wearing a disguise — and seeing the disguise means you never have to memorize.

Triangle: two copies make a parallelogram

Take ANY triangle, spin a copy 180°, and join the copies along a matching side: you get a parallelogram with the same base and height. So one triangle is exactly half:

        A = (b × h) ÷ 2

The HEIGHT is always the PERPENDICULAR distance from base to far vertex — never the slanted side. Why is the slant side always too big? Because the slant side is the HYPOTENUSE of a right triangle whose leg is the true height, and the hypotenuse is always the longest side (Lesson 5!). Slant > height, always.

Parallelogram: snip and slide

Snip a right triangle off the left end of a parallelogram and slide it to the right end: the shape becomes a rectangle with the same base and height. So A = b × h — no half! Same words as the triangle, different recipe.

Trapezoid: two copies make a parallelogram (again!)

Spin a copy of any trapezoid 180° and join it along a leg: you get a parallelogram whose base is b₁ + b₂ (the two trapezoid bases end to end) and whose height is still h. One trapezoid is half of that:

        A = (b₁ + b₂) × h ÷ 2

        Bases 5 and 9, height 6:
        A = (5 + 9) × 6 ÷ 2     (the formula)
        A = 14 × 6 ÷ 2          (add inside the parentheses first)
        A = 84 ÷ 2 = 42 cm²     (multiply, then halve)

Running area backwards with algebra

        A triangle has area 30 cm² and height 6 cm. Find the base.
        (b × 6) ÷ 2 = 30         (the triangle formula with b unknown)
        b × 6 = 60               (multiply both sides by 2 — undo the half!)
        b = 10 cm                (divide both sides by 6)

The most common slip in that problem: dividing by 2 when you should MULTIPLY. The area was already halved — to un-halve it, double.

Composite shapes: add the pieces, or subtract the holes

Shaded-region problems are the heart of competition geometry, and they have exactly two strategies: BUILD UP (split into pieces you know, add) or CARVE OUT (big shape minus hole). Example: a 10 by 10 square with a 3 by 4 rectangle cut from one corner:

        Big square: 10 × 10 = 100 cm²
        Missing corner: 3 × 4 = 12 cm²
        Remaining: 100 − 12 = 88 cm²

And a beautiful fact: any triangle whose base is one side of a rectangle and whose apex touches the opposite side has area exactly HALF the rectangle — (b × h) ÷ 2 with the full base and full height, no matter where the apex slides along that opposite side. A 9 by 6 rectangle hides a 27 cm² triangle this way, leaving 27 cm² shaded. Sliding the apex changes nothing!

Bonus formula (competition gold): HERON'S FORMULA

What if you know all three SIDES of a triangle but no height? Heron's formula finds the area anyway. First compute the SEMIPERIMETER (half the perimeter) s = (a + b + c) ÷ 2. Then:

        A = √(s(s − a)(s − b)(s − c))

        Triangle with sides 5, 5, 6:
        s = (5 + 5 + 6) ÷ 2 = 8
        A = √(8 × 3 × 3 × 2) = √144 = 12 cm²
        Check: the triangle splits into two 3-4-5 right triangles, so the height is 4
        and (6 × 4) ÷ 2 = 12 ✅ — two completely different roads, same destination.

✏️ Your Turn

(a) Trapezoid with bases 4 and 8, height 5: area? (b) A parallelogram has area 56 cm² and base 8 cm: height? (c) In the 9 by 6 rectangle above, why doesn't the apex position matter?

Answers: (a) (4 + 8) × 5 ÷ 2 = 60 ÷ 2 = 30 cm². (b) 56 ÷ 8 = 7 cm. (c) Because base AND perpendicular height both stay fixed as the apex slides along the opposite side — and area depends only on those two.


─────────────────────────────────────────────
Lesson 8: Similarity — Same Shape, Different Size, and the k² Surprise
─────────────────────────────────────────────

📌 Key idea of this section:

        Similar figures: equal angles, sides all scaled by one factor k.
        Perimeter scales by k. Area scales by k². Always.

Two figures are SIMILAR (written ~) if they have exactly the same SHAPE — all corresponding angles equal — with every length multiplied by one SCALE FACTOR k. A photograph and its enlargement are similar. Congruent is the special case k = 1.

How do you PROVE two triangles are similar? You'd expect to check three angles and three side ratios. But the AA CRITERION says: matching TWO angles is enough — because the 180° rule then forces the third pair to match too. Two equal angles, and similarity is proven.

Finding a missing side: proportion equations

Triangles ABC and DEF are similar, with A↔D, B↔E, C↔F. If AB = 4, DE = 6, and BC = 10, find EF.

        4/6 = 10/x            (corresponding sides have equal ratios; x = EF)
        4x = 6 × 10           (cross-multiply: if a/b = c/d then ad = bc)
        4x = 60               (multiply the right side)
        x = 15                (divide both sides by 4)

Why does cross-multiplication work? Multiply both sides of a/b = c/d by b, then by d: ad = bc. No magic — just two legal moves.

The midsegment theorem: similarity hiding inside every triangle

Connect the midpoints of two sides of any triangle. That MIDSEGMENT is parallel to the third side — and the small triangle it cuts off is similar to the whole triangle with k = 1/2. So the midsegment is exactly HALF the third side:

        Third side 18 → midsegment 9.

The k² surprise: why area outruns perimeter

Scale a shape by k = 3 and every LENGTH — every side, the perimeter, the height — triples. But area counts little squares, and each square stretches by 3 in BOTH directions: each unit square becomes 9 squares.

        lengths ×k        perimeter ×k        area ×k²

        Small triangle area 8, scale factor k = 3/2:
        big area = 8 × (3/2)² = 8 × 9/4 = 72/4 = 18 cm²
        (every length grew by 3/2, so the area grew by (3/2)² = 9/4)

Backwards: two similar figures have areas 8 cm² and 200 cm². Find k and the perimeter ratio.

        k² = 200 ÷ 8 = 25     (areas scale by k²)
        k = √25 = 5           (positive root — a scale factor is a length ratio)
        Perimeters scale by k = 5 too (perimeter is a length, not an area)

The classic shadow problem — similar triangles in the wild

A 3 m stick casts a 4 m shadow. At the same moment, a flagpole casts a 28 m shadow. How tall is the pole? Same sun angle means the two right triangles (object + shadow) are similar by AA:

        3/4 = h/28            (height/shadow ratios must match)
        4h = 3 × 28           (cross-multiply)
        4h = 84               (multiply)
        h = 21 m              (divide by 4)

✏️ Your Turn

(a) Similar triangles have corresponding sides 8 and 12. The smaller one's side 10 corresponds to what in the larger? (b) A triangle's midsegment triangle (k = 1/2) has area 10 cm². Find the whole triangle's area and the area of the trapezoid below the midsegment. (c) Which grows faster when you scale up, perimeter or area — and why?

Answers: (a) 8/12 = 10/x → 8x = 120 → x = 15. (b) k² = 1/4, so whole area = 10 × 4 = 40 cm²; trapezoid = 40 − 10 = 30 cm². (c) Area — lengths multiply by k once, but area multiplies by k in two directions, giving k².


─────────────────────────────────────────────
Lesson 9: Circles — π, Arcs, Sectors, and the Inscribed Angle Theorem
─────────────────────────────────────────────

📌 Key idea of this section:

        Circumference C = 2πr.  Area A = πr².
        An INSCRIBED angle always measures HALF its arc.

A CIRCLE is every point at one fixed distance from a center. That distance is the RADIUS r; the distance straight across through the center is the DIAMETER d = 2r. Measure any circle's perimeter (the CIRCUMFERENCE) and divide by its diameter: you get the same number every time, ≈ 3.14159..., the famous π. That's not a coincidence — it's the definition of π, and it's why:

        C = πd = 2πr

        Radius 7:  C = 2π × 7 = 14π ≈ 43.98 units
        (Leaving π in the answer — "14π" — is the EXACT answer; 43.98 is an estimate.)

The area formula is A = πr². Why? Slice the circle into many thin wedges and alternate them point-up, point-down: they form a near-parallelogram with base πr (half the circumference — half the wedge arcs point up, half down) and height r. Area = base × height = πr × r = πr².

        Radius 7:  A = π × 7² = 49π ≈ 153.94 square units

Arcs and sectors: fractions of the whole

An ARC is a piece of the circle's rim, measured by the CENTRAL ANGLE — the angle at the center whose rays cut off that arc. A 60° central angle cuts off 60/360 = 1/6 of the circle. A SECTOR is the pie slice enclosed by two radii and an arc. Both arc length and sector area are just that fraction of the totals:

        arc length = (θ/360°) × 2πr        sector area = (θ/360°) × πr²

        Radius 9, central angle 40°:
        arc length = (40/360) × 18π = (1/9) × 18π = 2π
        sector area = (40/360) × 81π = (1/9) × 81π = 9π

The inscribed angle theorem — the crown jewel, with proof

An INSCRIBED ANGLE has its vertex ON the circle, with both sides cutting across the circle to chop off an arc. The theorem: an inscribed angle measures HALF of its arc — equivalently, half of the central angle standing on the same arc.

Proof (the cleanest case: one side of the angle is a diameter). Let the inscribed angle at P subtend arc AB, with the center O lying on segment PB.

        1. OA = OP                        (both are radii of the same circle)
        2. ∠OAP = ∠OPA                    (base angles of isosceles △AOP — Lesson 4!)
        3. Call each of those angles x.   (naming the unknown so we can track it)
        4. Central ∠AOB = x + x = 2x      (exterior angle of △AOP equals the sum of the
                                             two remote interiors — Lesson 3!)
        5. Central angle = 2 × inscribed angle   (step 4 says exactly this)

The general case (center inside or outside the angle) follows by adding or subtracting two of these diameter cases. So the rim always sees HALF of what the center sees.

        Arc AB = 80°:  inscribed angle over it = 80° ÷ 2 = 40° ✅
        Inscribed angle 25°:  its arc = 2 × 25° = 50°, central angle = 50° ✅

Two superstar consequences:

  · THALES' THEOREM: any angle inscribed in a SEMICIRCLE is 90°. Why? A semicircle is an arc of 180°, and 180° ÷ 2 = 90°. So if a triangle's longest side is a diameter, the opposite vertex sits on the circle making a right angle. Example: diameter 10, one leg 6 → the other leg is √(100 − 36) = √64 = 8 — Thales handed us a right triangle, and Pythagoras finished it!

  · CYCLIC QUADRILATERALS: if all four vertices of a quadrilateral lie on one circle, OPPOSITE ANGLES ARE SUPPLEMENTARY. Why? One angle is half its far arc; the opposite angle is half the REST of the circle; the two arcs total 360°, so the angles total 180°. Angle of 95° → opposite angle 85°, automatically.

✏️ Your Turn

(a) An inscribed angle stands on a 130° arc. How big is it? (b) Find the sector area for radius 4 and central angle 90°. (c) A cyclic quadrilateral has an angle of 108°. Find the opposite angle.

Answers: (a) 130° ÷ 2 = 65°. (b) (90/360) × π × 16 = 1/4 × 16π = 4π. (c) 180° − 108° = 72°.


─────────────────────────────────────────────
Lesson 10: Transformations — Moving the Plane with Functions
─────────────────────────────────────────────

📌 Key idea of this section:

        A transformation is a FUNCTION on points: point in, point out.
        Translations, rotations, reflections preserve size. Dilations scale by k (area by k²).

You already know function notation: f(x) = 2x + 1 eats a number and spits out a number. And composing functions — f(g(x)) — means "do g first, then f," where ORDER MATTERS: if f(x) = x² and g(x) = 2x + 1, then

        f(g(2)) = f(5) = 25      (g first: 2 → 5, then f: 5 → 25)
        g(f(2)) = g(4) = 9       (f first: 2 → 4, then g: 4 → 9)  — different!

A TRANSFORMATION is the same idea with points: it eats a point P and spits out an image point P′. Meet the four greats, each as a function on coordinates:

  · TRANSLATION (slide): T(x, y) = (x + 4, y − 2) slides everything 4 right, 2 down.
        T(1, 5) = (1 + 4, 5 − 2) = (5, 3)

  · REFLECTION (flip):
        over the x-axis: (x, y) → (x, −y)       — x stays, y flips sign
        over the y-axis: (x, y) → (−x, y)       — y stays, x flips sign
        over the line y = x: (x, y) → (y, x)    — coordinates trade places
        Reflect (3, −2): over x-axis (3, 2); over y-axis (−3, −2); over y = x: (−2, 3).

  · ROTATION about the origin:
        90° counterclockwise: (x, y) → (−y, x)  — swap, then negate the new x
        180°: (x, y) → (−x, −y)                 — both signs flip
        Rotate (5, 2) by 90° CCW: (−2, 5). By 180°: (−5, −2).

  · DILATION from the origin with scale factor k: D_k(x, y) = (kx, ky).
        D₃(2, 1) = (6, 3). A dilation with k = 3 triples every length — and multiplies
        every AREA by k² = 9 (Lesson 8!). Triangle (0,0), (2,0), (0,1) has area 1;
        after D₃ it's (0,0), (6,0), (0,3) with area (6 × 3) ÷ 2 = 9 ✅.

Translations, rotations, and reflections never change distances or angles — they're called ISOMETRIES ("same measure"), and their images are CONGRUENT to the original. Dilations give SIMILAR figures (Lesson 8). Same shape, guaranteed; same size only if k = 1.

Composing transformations: order matters here too

Let T(x, y) = (x + 4, y − 2) and let R be rotation 90° CCW about the origin. Apply both to P = (1, 0), in both orders:

        R after T:  T(1, 0) = (5, −2);  R(5, −2) = (2, 5)
        T after R:  R(1, 0) = (0, 1);   T(0, 1) = (4, −1)
        Final answers (2, 5) vs (4, −1) — NOT the same point! Order matters. ✅

And here's a gem: reflect over the x-axis, then over the y-axis:

        (a, b) → (a, −b) → (−a, −b)  — exactly the 180° rotation rule!
        Two reflections over PERPENDICULAR lines compose into a 180° rotation.

Symmetry counting: a square stays itself under 8 transformations (4 rotations: 0°, 90°, 180°, 270°; and 4 reflections). A regular hexagon: 6 rotations + 6 reflections = 12.

✏️ Your Turn

(a) Apply T(x, y) = (x − 3, y + 5) to (7, 2). (b) Rotate (4, 3) by 90° CCW about the origin. (c) Reflect (a, b) over the x-axis, THEN rotate the result 180°. What single transformation does that equal?

Answers: (a) (7 − 3, 2 + 5) = (4, 7). (b) (−3, 4). (c) (a, b) → (a, −b) → (−a, b) — that's reflection over the y-axis!


─────────────────────────────────────────────
Lesson 11: Counting Meets Geometry — Casework and Complementary Counting
─────────────────────────────────────────────

📌 Key idea of this section:

        Count systematically: by cases, by choosing, or by SUBTRACTING the unwanted.
        Choosing 2 of n lines: n(n−1)/2. Rectangles in a grid: choose, then multiply.

Back in Lesson 1, n points on a line gave n(n−1)/2 segments. Now we prove that sum formula and then weaponize the idea. The trick is young Gauss's: pair the first and last terms.

        S = 1 + 2 + 3 + ... + 50
        Pair ends: 1 + 50 = 51, 2 + 49 = 51, 3 + 48 = 51, ...
        How many pairs? 50 ÷ 2 = 25 pairs, each summing to 51.
        S = 25 × 51 = 1275

        General rule: 1 + 2 + ... + m = m(m + 1)/2
        (m/2 pairs, each summing to m + 1)
        Check with m = 50: 50 × 51 ÷ 2 = 1275 ✅
        Segments from n points: m = n − 1 → (n − 1)n/2 ✅ — matches Lesson 1!

Choosing: the multiplication principle

If a choice happens in two INDEPENDENT stages, multiply the counts. A rectangle in a grid is completely determined by choosing 2 vertical lines AND 2 horizontal lines:

        4 × 3 grid of squares: 5 vertical lines, 4 horizontal lines
        vertical choices: 5 × 4 ÷ 2 = 10      (choose 2 of 5 lines — order doesn't matter,
                                               so divide by 2 like the segment count)
        horizontal choices: 4 × 3 ÷ 2 = 6     (choose 2 of 4)
        rectangles: 10 × 6 = 60               (each vertical pair pairs with each
                                               horizontal pair — multiply!)

Counting triangles in a striped triangle

Draw a triangle, split its base into 5 segments (6 rays from the apex), and add 1 line parallel to the base. Count by cases — where does the triangle's base lie?

        Any triangle needs 2 of the 6 apex rays: 6 × 5 ÷ 2 = 15 pairs.
        Its base can lie on the bottom line OR the parallel line: 2 choices.
        Total: 15 × 2 = 30 triangles.

Counting squares by SIZE (classic casework)

A 3 × 3 grid contains more squares than the 9 little ones — hunt by case:

        Case 1×1: 9 squares      Case 2×2: 4 squares      Case 3×3: 1 square
        Total: 9 + 4 + 1 = 14 squares.  (A 4 × 4 grid: 16 + 9 + 4 + 1 = 30.)

Complementary counting: subtract the unwanted

Sometimes the count you DON'T want is easier. How many rectangles in a 3 × 3 grid do NOT contain the center square?

        All rectangles: (4 × 3 ÷ 2)² = 6 × 6 = 36   (4 lines each direction, choose 2)
        Rectangles CONTAINING the center square:
          left edge: 2 choices (either line left of center)
          right edge: 2 choices;  top edge: 2;  bottom edge: 2
          2 × 2 × 2 × 2 = 16
        Answer: 36 − 16 = 20   (total minus the unwanted — complementary counting!)

The handshake connection

Ten people each shake hands once with everyone else: how many handshakes? Each of the 10 people shakes 9 hands, but that counts every handshake twice:

        10 × 9 ÷ 2 = 45 handshakes

Same formula as segments and the same as diagonals-plus-sides of a polygon: a decagon has 10 × 9 ÷ 2 = 45 segments joining vertex pairs, of which 10 are sides — so 45 − 10 = 35 diagonals, exactly matching n(n − 3)/2 = 10 × 7 ÷ 2 = 35 ✅. One counting idea, three disguises.

✏️ Your Turn

(a) Compute 1 + 2 + ... + 40. (b) How many rectangles in a 2 × 2 grid? (c) How many squares in a 2 × 2 grid?

Answers: (a) 40 × 41 ÷ 2 = 820. (b) 3 lines each direction: (3 × 2 ÷ 2)² = 3 × 3 = 9. (c) 4 little + 1 big = 5.


─────────────────────────────────────────────
Lesson 12: Sequences, Series, and Exponential Growth — Tamed by Logarithms
─────────────────────────────────────────────

📌 Key idea of this section:

        Arithmetic sequence: add the same step. Geometric sequence: multiply by the same ratio.
        A LOGARITHM answers: "the base to WHAT power gives this number?"

A SEQUENCE is an ordered list of numbers following a rule. Two royal families:

  · ARITHMETIC: same STEP added each time. 5, 10, 15, 20, ... has step 5.
        nth term = first + (n − 1) × step
        (n − 1 steps get you from term 1 to term n — the fencepost count!)

  · GEOMETRIC: same RATIO multiplied each time. 3, 6, 12, 24, ... has ratio 2.
        nth term = first × ratio^(n−1)

A SERIES is a sequence ADDED UP. Arithmetic series bow to Gauss (Lesson 11): sum = (number of terms) × (first + last) ÷ 2.

        5 + 10 + 15 + ... + 100:
        number of terms: 100 ÷ 5 = 20
        sum = 20 × (5 + 100) ÷ 2 = 20 × 105 ÷ 2 = 1050

Geometric series have their own trick — multiply and subtract. S = 1 + 3 + 9 + 27:

        S = 1 + 3 + 9 + 27
        3S =     3 + 9 + 27 + 81      (multiply every term by the ratio 3)
        3S − S = 81 − 1               (subtract: every middle term cancels!)
        2S = 80  →  S = 40            (check directly: 1 + 3 + 9 + 27 = 40 ✅)

        In general: 1 + r + r² + ... + r^(n−1) = (rⁿ − 1)/(r − 1)

Fractals: geometry growing geometrically

The SIERPINSKI TRIANGLE starts as one solid triangle; each step, every solid triangle gets its middle quarter removed, leaving 3 solid triangles where there was 1. Let the original area be 256 cm².

        Holes punched: step 1: 1 hole; step 2: 3 new; step 3: 9 new; ... ratio 3.
        Total holes after 4 steps: 1 + 3 + 9 + 27 = (3⁴ − 1)/(3 − 1) = 80/2 = 40
        Solid area after each step multiplies by 3/4 (each triangle keeps 3 of 4 quarters):
        after 2 steps: 256 × (3/4)² = 256 × 9/16 = 144 cm²
        after 3 steps: 144 × 3/4 = 108 cm²

The KOCH SNOWFLAKE does the opposite to perimeter: each step replaces every segment with 4 segments each 1/3 as long, so perimeter multiplies by 4/3 forever:

        Start 81 cm:  after 1 step 81 × 4/3 = 108 cm;  after 2 steps 108 × 4/3 = 144 cm;
        after 3 steps 144 × 4/3 = 192 cm. It never stops growing — off toward ∞!

Logarithms: the undo-button for exponents

You know 2⁵ = 32. A LOGARITHM asks the reverse question: "2 to WHAT power gives 32?" The answer is 5, written log₂(32) = 5. Read it as "log base 2 of 32." That's the entire definition — a logarithm is an exponent in disguise.

        log₂(32) = 5     because 2⁵ = 32
        log₃(81) = 4     because 3⁴ = 81
        log₁₀(1000) = 3  because 10³ = 1000

Solving an exponential equation means finding that hidden exponent:

        2ⁿ = 2048
        n = log₂(2048)        (definition of logarithm)
        n = 11                (because 2¹⁰ = 1024 and 2¹¹ = 2048 — count the doublings)

A growth race: a shape's area starts at 3 cm² and quadruples each hour (a dilation by k = 2 each hour, and k² = 4 for area). After how many whole hours does the area top 3000 cm²?

        3 × 4ⁿ > 3000               (start × ratioⁿ)
        4ⁿ > 1000                   (divide both sides by 3)
        n > log₄(1000)              (take log base 4 of both sides — logs preserve order)
        log₄(1000) ≈ 4.98           (since 4⁴ = 256 < 1000 but 4⁵ = 1024 > 1000)
        smallest whole hour: n = 5  (the area must EXCEED 3000, and 4 hours isn't enough)
        Check: 3 × 1024 = 3072 > 3000 ✅; at n = 4: 3 × 256 = 768 < 3000 ✅

That last check — testing the integers on both sides — is how you turn "approximately 4.98" into a confident whole-number answer.

✏️ Your Turn

(a) Evaluate log₂(64). (b) Solve 5ⁿ = 625. (c) Find 2 + 4 + 6 + ... + 40.

Answers: (a) 6, because 2⁶ = 64. (b) n = 4, because 5⁴ = 625 (5² = 25, 5³ = 125, 5⁴ = 625). (c) 20 terms, sum = 20 × (2 + 40) ÷ 2 = 20 × 21 = 420.


─────────────────────────────────────────────
Lesson 13: Watch Out! Common Mistakes (Honors Edition)
─────────────────────────────────────────────

📌 Keep the big ideas in sight:

        Prove, don't assume. Heights are perpendicular. Areas scale by k².
        The rim sees half. Equality collapses a triangle.

These seven mistakes catch honors students every single year. Learn them now, and they won't catch you!

Mistake 1: Trusting the picture

        "The angle looks like 90°, so I'll use a right angle."   ❌

Competition diagrams are often labeled "not drawn to scale" — and even when they aren't labeled, looks prove nothing. You may only use facts that are GIVEN or MARKED (right-angle boxes, tick marks for equal sides) or PROVEN from them. A triangle can look right-angled and be 89°. ✅

Mistake 2: The slant side pretending to be the height

        Triangle with base 10 and slant side 6: area = (10 × 6) ÷ 2?   ❌

Maybe — but only if 6 is the true PERPENDICULAR height! The slant side is the hypotenuse of a right triangle whose leg is the real height, and the hypotenuse is always longest — so slant > height, and using it inflates the area. Only the perpendicular height counts. ✅

Mistake 3: Believing SSA proves congruence

        "Two sides and an angle match — the triangles are congruent!"   ❌

Only if the angle is BETWEEN the two sides (SAS). With SSA, the swinging side can land in two different places, producing two DIFFERENT triangles with the same three measurements — the ambiguous case. SSS, SAS, ASA, AAS prove congruence; SSA does not. ✅

Mistake 4: Scaling area by k instead of k²

        "The triangle tripled in size, so its area tripled."   ❌

"Tripled" means every LENGTH ×3. Area multiplies by 3 × 3 = 9 — once for each direction. Perimeter ×3, area ×9, and (looking ahead to 3-D) volume ×27. Ask which one the problem wants before computing. ✅

Mistake 5: Central and inscribed angles swapped

        "Arc is 80°, so the inscribed angle is 80°."   ❌

The rim sees HALF: the inscribed angle is 40°, and it's the CENTRAL angle that equals the arc. Picture the vertex sitting far away on the rim — of course it sees a smaller angle than the center does. Inscribed = arc ÷ 2. Central = arc. ✅

Mistake 6: Allowing equality in the triangle inequality

        "Sides 2, 3, 5: 2 + 3 = 5, so it's a triangle."   ❌

2 + 3 = 5 means the two short sides lie EXACTLY flat along the long one — a degenerate triangle, which is no triangle at all. The inequality is strict: a + b > c. Equal sums collapse. ✅

Mistake 7: Interior and exterior angles of regular polygons swapped

        "Regular hexagon: each exterior angle is 720 ÷ 6 = 120°."   ❌

Backwards! Exterior angles are the small turns you make walking around: they sum to 360°, so each exterior is 360 ÷ 6 = 60°. Each INTERIOR is the roomy 180° − 60° = 120°. Interior + exterior = 180° at every vertex — if your two numbers don't add to 180°, you've mixed them up. ✅


─────────────────────────────────────────────
Lesson 14: Recap — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Angles: complement 90° · supplement 180° · around a point 360° · vertical angles equal
        Triangle 180° · n-gon (n−2)×180° · exteriors always 360°
        Pythagorean a² + b² = c² · converse classifies acute/right/obtuse
        Triangle: a + b > c, strictly · base angles of isosceles are equal
        Congruence: SSS, SAS, ASA, AAS — never SSA · then CPCTC unlocks everything
        Similarity: AA suffices · sides ×k · perimeter ×k · area ×k²
        Circles: C = 2πr · A = πr² · inscribed angle = arc ÷ 2 · Thales: semicircle → 90°
        Transformations: T, R, reflection are isometries · D_k scales area by k² · order matters
        Counting: 1+2+...+m = m(m+1)/2 · choose 2 lines each way, multiply · subtract the unwanted
        Growth: arithmetic adds, geometric multiplies, log₂ asks "2 to what power?"

The recap list

  · A point is a spot; a line goes forever both ways; a segment has two endpoints; a ray has one. Midpoints average the coordinates; distances use Pythagoras.
  · n points on a line determine n(n−1)/2 segments — your first counting formula.
  · Vertical angles are equal — PROVEN from linear pairs, not assumed from looks.
  · One parallel line through the apex proves the triangle's 180°; the exterior angle equals the two remote interiors.
  · Four triangles in an (a + b) square prove a² + b² = c²; the converse sorts every triangle into acute, right, or obtuse.
  · Every polygon hides n − 2 triangles; every walk around one turns exactly 360°.
  · Area formulas are disguises: triangle and trapezoid are HALF of parallelograms; parallelogram is a snipped-and-slid rectangle.
  · Similarity needs just two angles (AA); areas scale by the SQUARE of the scale factor.
  · The inscribed angle theorem — the rim sees half — comes from one isosceles triangle plus the exterior angle theorem; Thales and cyclic quadrilaterals are its children.
  · Transformations are functions on points; composing them, order matters; two perpendicular reflections make a 180° rotation.
  · Counting: sum with Gauss, choose with multiplication, handle "not" with complementary counting, split hard counts into cases.
  · Geometric growth multiplies; logarithms find WHEN a growing quantity crosses any line.

The magic sentence (honors remix)

        Angles turn — and parallel lines turn them into proofs,
        heights drop straight — and Pythagoras measures what they make,
        areas square the scale — and circles halve the angle,
        and every triangle, everywhere, still hides exactly 180°.

Why this matters

You didn't just collect formulas this time — you PROVED them, and a proven fact can be trusted, combined, and extended. That's how real mathematics grows: the 180° proof powered the exterior angle theorem, which powered the inscribed angle theorem, which powers circle geometry everywhere. Architects trust these facts because someone proved them; now that someone includes you.

Now it's time to prove yourself — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Complement → 90° · supplement → 180° · around a point → 360° · vertical angles equal
        Triangle → 180° · exterior angle = sum of remote interiors · n-gon → (n−2) × 180°
        a² + b² = c² · converse: compare a² + b² vs c² · d = √(Δx² + Δy²)
        Triangle inequality: a + b > c (strict!) · isosceles: base angles equal
        Congruence: SSS, SAS, ASA, AAS · Similarity: AA, sides ×k, area ×k²
        Circle: C = 2πr, A = πr² · inscribed = arc ÷ 2 · cyclic: opposite angles sum to 180°
        Trapezoid: (b₁ + b₂) × h ÷ 2 · Counting: m(m+1)/2 · logs undo exponents

Grab a pencil and paper — and sketch! But remember Mistake 1: never trust how a figure LOOKS; trust only what's given, marked, or proven. Problems marked "open-ended" have many right answers; problems marked "compare" have several good METHODS — try to find more than one. Don't peek at the answer key until you've tried!

Hint for every problem: first ask, "Which theorem owns this — angles, Pythagoras, similarity, circles, transformations, or counting?" Then justify each step as you go, like the lessons taught you.


🟢 EASY (Problems 1–40)

Problems 1–6 — Building blocks on the coordinate plane. (Lesson 1)

  1. Find the distance between A(2, 3) and B(9, 3).
  2. Find the midpoint of (4, 1) and (10, 7).
  3. Five points sit on a line. How many different segments do they determine?
  4. Find the midpoint of (−3, 6) and (5, 2).
  5. Which two of the four building blocks go on forever — and therefore have no
     measurable length?
  6. Eight points sit on a circle. How many different chords (segments joining
     pairs of the points) do they determine? (Hint: same formula as points on a line!)

Problems 7–14 — Angles and their teams. (Lesson 2)

  7. Classify: 88°, 90°, 170°, 180°.
  8. Which size family (acute, right, obtuse, straight, reflex) does 200° belong to?
  9. Find the complement of 63°.
  10. Find the supplement of 119°.
  11. Two angles are supplementary, and one is 3 times the other. Find both.
  12. Two angles are complementary, and one is 4 times the other. Find both.
  13. Three angles wrap all the way around one point: 100°, 110°, and x. Find x.
  14. Two lines cross, making an angle of 35°. Find the other three angles — and
      name the theorem or pair-type that justifies each one.

Problems 15–18 — Transversals across parallel lines. (Lesson 3)

  15. A transversal cuts two parallel lines; one angle is 65°. Find its
      corresponding angle.
  16. Same picture: find the alternate interior partner of that 65° angle.
  17. Same picture: find the same-side interior (co-interior) partner.
  18. Two parallel lines are cut by a transversal. Two alternate interior angles
      are 2x + 10 and 3x − 20. Find x and the angles.

Problems 19–26 — Triangle rules. (Lessons 3–4)

  19. Two angles of a triangle are 70° and 60°. Find the third.
  20. A triangle's two remote interior angles are 45° and 55°. Find the exterior
      angle at the third vertex — without finding the third interior angle first!
  21. A triangle's angles are x, 2x, and 3x. Find all three.
  22. An isosceles triangle's vertex angle is 100°. Find each base angle.
  23. An isosceles triangle's base angles are 35° each. Find the vertex angle.
  24. Can a triangle have sides 4, 6, 10? Explain with the triangle inequality.
  25. Two sides of a triangle are 8 and 13. Give the full range for the third side.
  26. An exterior angle is 125°, and one remote interior angle is 70°. Find the
      other remote interior angle.

Problems 27–32 — Pythagoras. (Lesson 5)

  27. Legs 3 and 4 — find the hypotenuse.
  28. Legs 5 and 12 — find the hypotenuse.
  29. Hypotenuse 15, one leg 9 — find the other leg.
  30. Legs 8 and 15 — find the hypotenuse.
  31. Is 6-8-10 a right triangle? Show the check.
  32. Find the distance between (1, 1) and (4, 5).

Problems 33–40 — Polygons. (Lesson 6)

  33. Find the angle sum of a heptagon (7 sides).
  34. Find each interior angle of a regular hexagon.
  35. Find each exterior angle of a regular decagon.
  36. How many diagonals does a pentagon have?
  37. How many diagonals does an octagon have?
  38. A polygon's interior angles sum to 1260°. How many sides does it have?
  39. One angle of a parallelogram is 110°. Find the other three.
  40. Three angles of a quadrilateral are 80°, 100°, and 90°. Find the fourth.


🟡 INTERMEDIATE (Problems 41–80)

Problems 41–44 — The converse at work. (Lesson 5)

  41. Classify by angles (acute, right, obtuse): sides 7, 8, 12.
  42. Classify: sides 10, 24, 26.
  43. Classify: sides 6, 7, 9.
  44. A triangle has vertices (0, 0), (6, 0), (3, 4). Compute all three side
      lengths and classify the triangle by its sides.

Problems 45–52 — Area, forward and backward. (Lesson 7)

  45. Trapezoid: bases 7 and 11, height 5. Find the area.
  46. Trapezoid: bases 6 and 10, height 8. Find the area.
  47. A triangle's area is 42 cm² and its base is 12 cm. Find the height.
  48. A trapezoid's area is 40 cm² and its bases are 6 cm and 10 cm. Find the height.
  49. A 12 by 8 rectangle has a 4 by 3 rectangle cut from one corner. Find the
      remaining area.
  50. A triangle has its base on one side of a 10 by 6 rectangle and its apex on
      the opposite side. Find the triangle's area AND the shaded area left over.
  51. Use Heron's formula to find the area of the triangle with sides 9, 10, 17.
  52. A parallelogram has area 84 cm² and base 12 cm. (a) Find the height.
      (b) A second parallelogram has the same base and DOUBLE the height — find
      its area, and say which lesson's scaling idea explains the doubling.

Problems 53–58 — Similarity. (Lesson 8)

  53. Two similar triangles have corresponding sides in ratio 1:3. The smaller
      triangle's sides are 5, 7, 9. Find the larger triangle's sides.
  54. Solve for the missing corresponding side: 8/12 = 10/x.
  55. A small triangle has area 6 cm². It is scaled by k = 4. Find the new area.
  56. Two similar figures have areas in ratio 1:49. The small one's perimeter is
      12 cm. Find the large one's perimeter.
  57. A 5 m pole casts an 8 m shadow. At the same moment, a building casts a
      56 m shadow. How tall is the building?
  58. A triangle has base 26 and area 84 cm². Its midsegment cuts off a small
      top triangle. Find (a) the midsegment's length, (b) the small triangle's
      area, (c) the area of the trapezoid below the midsegment.

Problems 59–66 — Circles. (Lesson 9)

  59. Radius 6: find the circumference, in terms of π AND estimated to one decimal.
  60. Radius 8: find the area in terms of π.
  61. Diameter 14: find the circumference in terms of π.
  62. Radius 12, central angle 30°: find the arc length in terms of π.
  63. Radius 10, central angle 36°: find the sector area in terms of π.
  64. An inscribed angle stands on an arc of 110°. Find the angle.
  65. An inscribed angle measures 48°. Find its arc.
  66. A cyclic quadrilateral has one angle of 108°. Find the opposite angle.

Problems 67–74 — Transformations. (Lesson 10)

  67. Apply T(x, y) = (x − 3, y + 5) to the point (7, 2).
  68. Reflect (6, −1): (a) over the x-axis, (b) over the line y = x.
  69. Rotate (4, 3) by 90° counterclockwise about the origin.
  70. Rotate (4, 3) by 180° about the origin.
  71. Apply the dilation D₂(x, y) = (2x, 2y) to (5, −2).
  72. Compose: first T(x, y) = (x + 1, y + 2), then rotate 90° CCW. Apply to (2, 0).
  73. Now reverse the order on (2, 0): rotate first, then translate. Same answer?
      What does that teach?
  74. Which transformations preserve AREA: translation, rotation, reflection,
      dilation? Explain in one sentence each.

Problems 75–80 — Counting. (Lesson 11)

  75. Nine points sit on a line. How many segments do they determine?
  76. A triangle's base is split into 4 segments, and 2 lines parallel to the base
      cross the triangle. How many triangles does the figure contain?
  77. How many rectangles (of all sizes) are in a 5 by 2 grid of squares?
  78. How many squares (of all sizes) are in a 5 by 5 grid?
  79. Twelve people each shake hands with everyone else exactly once. How many
      handshakes?
  80. How many diagonals does a dodecagon (12 sides) have?


🔴 CHALLENGE (Problems 81–100)

  81. Three-equation angle system. In a triangle, ∠A + ∠B = 120° and
      ∠B + ∠C = 100°. Using the golden rule as your third equation, find all
      three angles, justifying each step.
  82. Disguised system. A triangle's angles satisfy: ∠x = 2∠z, and ∠y is 20°
      less than ∠x. Find all three angles. (Set up x + y + z = 180°, substitute,
      and solve — every step shown.)
  83. Complementary counting. How many rectangles in a 4 by 4 grid of squares do
      NOT contain the center square? (Count all, then count the unwanted, then
      subtract. Each stage explained.)
  84. Sierpinski accounting. A Sierpinski triangle starts with area 256 cm².
      (a) Find the solid area after 2 steps and after 3 steps. (b) Find the total
      number of punched-out holes after 5 steps, using the geometric series
      formula — then verify by adding 1 + 3 + 9 + 27 + 81 directly.
  85. Exponential growth with a log finish. A fractal's area starts at 2 cm² and
      triples every hour. After how many whole hours does it first exceed
      1000 cm²? Set up the inequality, solve with log₃, and check the integers
      on both sides of your answer.
  86. Heron's triumph. Use Heron's formula to find the area of the famous
      13-14-15 triangle. (s = 21; multiply carefully; the square root comes out
      whole!)
  87. Two roads, one triangle — compare! Find the area of the triangle with
      vertices (0, 0), (4, 1), (2, 5) TWO ways:
      (a) Box method: surround it with the smallest axis-parallel rectangle and
          subtract the three right triangles in the corners.
      (b) Shoelace method: list the coordinates in order, multiply down-diagonals
          minus up-diagonals: |x₁y₂ + x₂y₃ + x₃y₁ − y₁x₂ − y₂x₃ − y₃x₁| ÷ 2.
      (c) Which method felt safer? Which would you trust with messier numbers?
          One sentence each — there's no single right answer, but there are
          thoughtful ones.
  88. Thales plus Pythagoras. A triangle is inscribed in a semicircle whose
      diameter is 26 cm (the diameter IS one side of the triangle). One leg is
      10 cm. Find the other leg — naming each theorem you use.
  89. The grand circle chase. A triangle is inscribed in a circle, and the three
      arcs between its vertices are 80°, 100°, and 180°. (a) Find all three
      inscribed angles. (b) Check: do they sum to 180°? (c) One angle should be
      exactly 90° — which theorem predicted that before you computed anything?
  90. Nested triangles with algebra. A line parallel to the base of a triangle
      cuts off a small top triangle of height 6, similar to the whole triangle
      of height 10. The small triangle's base is x; the whole triangle's base is
      x + 6. Set up the proportion and solve for both bases.
  91. The snowflake that never stops. A Koch snowflake starts with perimeter
      81 cm, and each step multiplies the perimeter by 4/3. Find the perimeter
      after 3 steps — and explain in one sentence why the perimeter can grow
      without bound even though the snowflake's AREA stays trapped inside a
      fixed circle.
  92. Rectangle system. A rectangle's perimeter is 46 cm, and its length is
      2 cm more than twice its width. Write two equations, solve the system with
      substitution (every step), and check the perimeter.
  93. Log practice. (a) Solve 4ⁿ = 4096. (b) Solve 2^(n+1) = 256. Show the
      "log asks the question" reasoning for each.
  94. Prove it: the isosceles theorem. Prove that the base angles of an
      isosceles triangle are equal, using this guided path: draw the median from
      the vertex angle to the midpoint of the base, then (1) explain why the two
      new triangles have three equal side pairs, (2) name the congruence
      criterion, (3) finish with CPCTC. Then BONUS: could you use the angle
      bisector instead of the median? Which criterion would THAT use — and why
      can't you use "base angles equal" as a fact inside this proof?
  95. The not-to-scale trap. Two lines cross. Two ADJACENT angles (a linear pair)
      are labeled 2x and 2x + 40. A careless solver sets them equal ("vertical
      angles!"). (a) Why is that wrong? (b) Solve correctly and find both angles.
  96. Counting possible triangles. A triangle has two sides of 7 and 10, and the
      third side is a WHOLE NUMBER of centimeters. How many different values can
      the third side take? (Triangle inequality both ways, then count
      carefully — endpoints excluded!)
  97. Derive, don't memorize — compare two proofs. The trapezoid area formula
      A = (b₁ + b₂) × h ÷ 2 was proven in Lesson 7 by DOUBLING the trapezoid.
      Prove it a second way: slice the trapezoid along a diagonal into two
      triangles of heights h, compute both areas, and add. Which proof do you
      find clearer, and why? (One or two honest sentences.)
  98. Clock calculus. At 2:30, the minute hand points at the 6 — but the hour
      hand has crept halfway from 2 to 3. (a) Each hour mark is 360° ÷ 12 = 30°.
      Where exactly is the hour hand, measured from 12? (b) Find the angle
      between the hands. (c) Why would answering 90° reveal Mistake 1 thinking?
  99. The midsegment budget. A triangle has area 64 cm². Its midsegment cuts off
      a small top triangle. (a) Find the small triangle's area, naming the two
      similarity facts you chained together. (b) Find the area of the trapezoid
      below. (c) Check: do your two answers sum to 64?
  100. The grand finale — design it! Invent one geometry problem that uses a
       CIRCLE (arc, sector, or inscribed angle), one that uses SIMILARITY
       (proportion or k² scaling), and one that solves an angle CHASE with
       algebra. Solve all three yourself to make sure they work — then trade
       with a friend or teacher if you can. (Use problems 59–66, 53–58, and
       18–26 as models.)


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! When one goes wrong, find the exact step where your reasoning diverged — that step is the lesson you just earned. Check: did you justify every step, or did you trust a picture? Did you halve when you should have doubled? Did you scale by k when area needed k²?

Easy

  1.  9 − 2 = 7 units   (same row: subtract the x-coordinates)
  2.  x: (4 + 10) ÷ 2 = 7;  y: (1 + 7) ÷ 2 = 4  →  midpoint (7, 4)
  3.  5 × 4 ÷ 2 = 10 segments   (n(n−1)/2 with n = 5; the ÷2 undoes double counting)
  4.  x: (−3 + 5) ÷ 2 = 1;  y: (6 + 2) ÷ 2 = 4  →  midpoint (1, 4)
  5.  The LINE (both ways forever) and the RAY (one way forever) — only segments
      and points stay put.
  6.  8 × 7 ÷ 2 = 28 chords   (each pair of points gives one chord)

  7.  acute (under 90°) · right (exactly 90°) · obtuse (90° to 180°) · straight (180°)
  8.  Reflex — it's between 180° and 360°, the long way around.
  9.  90° − 63° = 27°   (complements sum to 90°)
  10. 180° − 119° = 61°   (supplements sum to 180°)
  11. x + 3x = 180 → 4x = 180 → x = 45.  The angles are 45° and 135°.
      Check: 45 + 135 = 180 ✅
  12. x + 4x = 90 → 5x = 90 → x = 18.  The angles are 18° and 72°.
      Check: 18 + 72 = 90 ✅
  13. x = 360° − 100° − 110° = 150°   (a full turn around a point is 360°)
  14. The angle opposite is 35° (vertical angles are equal — proven in Lesson 2
      from two linear pairs). Each of the other two is 180° − 35° = 145°
      (linear pair → supplementary). All four: 35°, 145°, 35°, 145°.

  15. 65°   (corresponding angles are equal when lines are parallel)
  16. 65°   (alternate interior angles are equal — the Z shape)
  17. 180° − 65° = 115°   (same-side interior angles are supplementary)
  18. 2x + 10 = 3x − 20  (alternate interior angles equal)
      → 10 + 20 = 3x − 2x  →  x = 30.
      Each angle: 2(30) + 10 = 70°.  Check the other: 3(30) − 20 = 70° ✅

  19. 180° − 70° − 60° = 50°   (triangle angle sum)
  20. 45° + 55° = 100°   (exterior angle = sum of the two remote interiors —
      no need to find 80° first!)
  21. x + 2x + 3x = 180 → 6x = 180 → x = 30.  Angles: 30°, 60°, 90° —
      a right triangle!
  22. Base angles share 180° − 100° = 80°, and they're equal (isosceles):
      80° ÷ 2 = 40° each.
  23. 180° − 35° − 35° = 110°.
  24. No: 4 + 6 = 10 exactly — the two short sides only REACH the long one.
      Equality makes a degenerate (flat) triangle; the inequality a + b > c
      is strict.
  25. 13 − 8 < x < 13 + 8, so 5 < x < 21   (beat the gap, lose to the sum;
      endpoints excluded).
  26. 125° − 70° = 55°   (exterior = sum of BOTH remote interiors; subtract
      the one you know).

  27. c² = 3² + 4² = 9 + 16 = 25  →  c = 5
  28. c² = 5² + 12² = 25 + 144 = 169  →  c = 13
  29. b² = 15² − 9² = 225 − 81 = 144  →  b = 12   (subtract to find a leg!)
  30. c² = 8² + 15² = 64 + 225 = 289  →  c = 17
  31. 6² + 8² = 36 + 64 = 100 = 10² — yes, right (it's the 3-4-5 triple doubled).
  32. d² = (4 − 1)² + (5 − 1)² = 9 + 16 = 25  →  d = 5

  33. (7 − 2) × 180° = 900°
  34. Exterior: 360° ÷ 6 = 60°; interior: 180° − 60° = 120°.
  35. 360° ÷ 10 = 36°   (exteriors always tile the full 360° turn)
  36. 5 × (5 − 3) ÷ 2 = 5 diagonals
  37. 8 × (8 − 3) ÷ 2 = 20 diagonals
  38. (n − 2) × 180 = 1260 → n − 2 = 7 → n = 9 sides (a nonagon)
  39. Consecutive: 180° − 110° = 70° (co-interior, parallel sides); opposites
      equal the given: 110°. All four: 110°, 70°, 110°, 70°.
  40. 360° − 80° − 100° − 90° = 90°   (quadrilateral = two triangles = 360°)

Intermediate

  41. 7² + 8² = 49 + 64 = 113 < 144 = 12²  →  OBTUSE (longest side too long
      for a right angle).
  42. 10² + 24² = 100 + 576 = 676 = 26²  →  RIGHT.
  43. 6² + 7² = 36 + 49 = 85 > 81 = 9²  →  ACUTE.
  44. (0,0) to (6,0): 6.  (0,0) to (3,4): √(9 + 16) = 5.  (6,0) to (3,4):
      √(9 + 16) = 5.  Sides 6, 5, 5 → ISOSCELES.
  45. (7 + 11) × 5 ÷ 2 = 90 ÷ 2 = 45 cm²
  46. (6 + 10) × 8 ÷ 2 = 128 ÷ 2 = 64 cm²
  47. Un-halve first: 42 × 2 = 84 (the full parallelogram); then 84 ÷ 12 = 7 cm.
  48. 40 × 2 = 80 = (6 + 10) × h → 80 = 16h → h = 5 cm.
  49. Whole 12 × 8 = 96; hole 4 × 3 = 12; remaining 96 − 12 = 84 cm² (carve out).
  50. Triangle: (10 × 6) ÷ 2 = 30 cm² (full base, full height — apex position
      irrelevant!). Shaded left over: 60 − 30 = 30 cm².
  51. s = (9 + 10 + 17) ÷ 2 = 18.  A = √(18 × 9 × 8 × 1) = √1296 = 36 cm².
  52. (a) 84 ÷ 12 = 7 cm. (b) 2 × 84 = 168 cm². This is NOT similarity scaling:
      only the height doubled while the base stayed fixed, so the area doubles
      (one direction of growth). The k² rule applies only when BOTH directions
      scale — a true dilation.
  53. Multiply each side by 3: 15, 21, 27.
  54. Cross-multiply: 8x = 12 × 10 = 120 → x = 15.
  55. Area scales by k² = 16: 6 × 16 = 96 cm².
  56. k² = 49 → k = 7 (areas!). Perimeter scales by k: 12 × 7 = 84 cm.
  57. 5/8 = h/56 (same sun angle → similar right triangles by AA)
      → 8h = 280 → h = 35 m.
  58. (a) Midsegment = half the base: 26 ÷ 2 = 13. (b) k = 1/2 → area ratio
      k² = 1/4 → 84 ÷ 4 = 21 cm². (c) 84 − 21 = 63 cm².
  59. C = 2π × 6 = 12π ≈ 37.7 units   (12 × 3.14159 ≈ 37.699)
  60. A = π × 8² = 64π square units
  61. C = πd = 14π units   (diameter given — no need to halve first!)
  62. (30/360) × 2π × 12 = (1/12) × 24π = 2π
  63. (36/360) × π × 10² = (1/10) × 100π = 10π
  64. 110° ÷ 2 = 55°   (the rim sees half)
  65. 2 × 48° = 96°   (arc is DOUBLE the inscribed angle)
  66. 180° − 108° = 72°   (cyclic quadrilateral: opposite angles supplementary —
      the two far arcs total 360°, so the half-angles total 180°)
  67. (7 − 3, 2 + 5) = (4, 7)
  68. (a) (6, 1) — y flips sign. (b) (−1, 6) — coordinates trade places.
  69. (x, y) → (−y, x): (4, 3) → (−3, 4)
  70. (x, y) → (−x, −y): (4, 3) → (−4, −3)
  71. (2 × 5, 2 × (−2)) = (10, −4)
  72. T first: (2, 0) → (3, 2). Then rotate 90° CCW: (−2, 3).
  73. Rotate first: (2, 0) → (0, 2). Then T: (1, 4). DIFFERENT from problem 72 —
      composition order matters, just like f(g(x)) vs g(f(x)).
  74. Translation, rotation, reflection: YES — they're isometries (same distances,
      so same areas). Dilation: NO (unless k = 1) — it multiplies area by k².
  75. 9 × 8 ÷ 2 = 36 segments
  76. Base split into 4 → 5 rays from the apex → 5 × 4 ÷ 2 = 10 ray-pairs per
      level. Three levels (base + 2 parallels): 10 × 3 = 30 triangles.
  77. 6 vertical lines → 6 × 5 ÷ 2 = 15 pairs; 3 horizontal lines → 3 pairs;
      15 × 3 = 45 rectangles.
  78. Count by size: 25 + 16 + 9 + 4 + 1 = 55 squares.
  79. 12 × 11 ÷ 2 = 66 handshakes   (each shake counted twice — once per shaker)
  80. 12 × 9 ÷ 2 = 54 diagonals   (or: 66 vertex-pairs − 12 sides = 54 ✅)

Challenge

  81. ∠A + ∠B + ∠C = 180° (golden rule). Subtract ∠A + ∠B = 120°: ∠C = 60°
      (equals minus equals). Subtract ∠B + ∠C = 100°: ∠A = 80°. Then
      ∠B = 120° − 80° = 40°. Check: 80° + 40° + 60° = 180° ✅ and
      40° + 60° = 100° ✅.
  82. x = 2z and y = x − 20 = 2z − 20 (substitute x). Into the sum:
      2z + (2z − 20) + z = 180 → 5z − 20 = 180 → 5z = 200 → z = 40°.
      Then x = 80°, y = 60°. Check: 80 + 60 + 40 = 180 ✅.
  83. All rectangles: 5 lines each direction → (5 × 4 ÷ 2)² = 10 × 10 = 100.
      Containing the center square: left edge 3 choices, right edge 2, top 3,
      bottom 2 → 3 × 2 × 3 × 2 = 36. Answer: 100 − 36 = 64 rectangles.
  84. (a) After 2 steps: 256 × (3/4)² = 256 × 9/16 = 144 cm². After 3:
      144 × 3/4 = 108 cm². (b) (3⁵ − 1) ÷ (3 − 1) = 242 ÷ 2 = 121 holes.
      Direct check: 1 + 3 + 9 + 27 + 81 = 121 ✅.
  85. 2 × 3ⁿ > 1000 → 3ⁿ > 500 → n > log₃(500). Since 3⁵ = 243 < 500 and
      3⁶ = 729 > 500, log₃(500) ≈ 5.66, so the first whole hour is n = 6.
      Check both sides: at n = 5, area = 2 × 243 = 486 < 1000; at n = 6,
      2 × 729 = 1458 > 1000 ✅.
  86. s = (13 + 14 + 15) ÷ 2 = 21.  A = √(21 × 8 × 7 × 6) = √7056 = 84 cm².
      (The famous Heron showcase triangle!)
  87. (a) Box: 4 × 5 = 20. Corner triangles: (4 × 1) ÷ 2 = 2, (4 × 2) ÷ 2 = 4,
      (2 × 5) ÷ 2 = 5. Subtract: 20 − 2 − 4 − 5 = 9. (b) Shoelace:
      |0×1 + 4×5 + 2×0 − 0×4 − 1×2 − 5×0| ÷ 2 = |20 − 2| ÷ 2 = 9 ✅ — both
      roads reach 9. (c) Sample: the box method is visual and each piece is
      checkable; the shoelace is pure mechanics and scales to messy coordinates
      without drawing anything. Either honest preference earns the point.
  88. Thales' theorem: the diameter subtends a semicircle (180° arc), so the
      inscribed angle is 90° — a right triangle! Pythagoras: other leg =
      √(26² − 10²) = √(676 − 100) = √576 = 24 cm. (A 5-12-13 triangle doubled!)
  89. (a) Each inscribed angle halves its OPPOSITE arc: ∠A sees 100° → 50°;
      ∠B sees 180° → 90°; ∠C sees 80° → 40°. (b) 50° + 90° + 40° = 180° ✅ —
      the golden rule holds even with a circle wrapped around the triangle.
      (c) Thales: the 180° arc IS a semicircle, so its inscribed angle was
      guaranteed to be 90° before any arithmetic.
  90. Heights and bases scale together (similar triangles): x/(x + 6) = 6/10.
      Cross-multiply: 10x = 6(x + 6) → 10x = 6x + 36 → 4x = 36 → x = 9.
      Small base 9, big base 15. Check the ratio: 9/15 = 3/5 = 6/10 ✅.
  91. 81 × (4/3)³ = 81 × 64/27 = 3 × 64 = 192 cm. The perimeter multiplies by
      4/3 forever — geometric growth with ratio > 1 never stops — but the area
      stays bounded because every new spike pokes OUTWARD in length while adding
      less and less area, and the snowflake never leaves its surrounding circle.
  92. 2L + 2W = 46 and L = 2W + 2. Substitute: 2(2W + 2) + 2W = 46 →
      4W + 4 + 2W = 46 → 6W = 42 → W = 7 cm; then L = 2(7) + 2 = 16 cm.
      Check perimeter: 2 × 16 + 2 × 7 = 32 + 14 = 46 ✅.
  93. (a) n = log₄(4096) — "4 to what power gives 4096?" Count: 4⁵ = 1024,
      4⁶ = 4096, so n = 6. (b) n + 1 = log₂(256) = 8 (since 2⁸ = 256),
      so n = 7. In both, the logarithm names the unknown exponent; counting
      powers of the base finds it.
  94. (1) The median hits the base's midpoint (definition), so the base is split
      into two EQUAL halves; the two legs are equal (given: isosceles); and the
      median itself is SHARED by both new triangles. That's three equal side
      pairs. (2) SSS congruence. (3) The base angles are corresponding parts of
      the two congruent triangles, so they're equal (CPCTC). BONUS: the angle
      bisector also works — it gives SAS (leg, half the vertex angle, leg). You
      may NOT assume "base angles are equal" anywhere in the proof — that's the
      very fact being proven; using it would be circular reasoning.
  95. (a) The two angles are ADJACENT angles forming a straight line — a linear
      pair — so they're supplementary, not vertical. Setting them equal uses the
      wrong theorem; the picture may even look like an X, but only true vertical
      (opposite) angles are equal. (b) 2x + (2x + 40) = 180 → 4x + 40 = 180 →
      4x = 140 → x = 35. The angles are 70° and 110°. Check: 70 + 110 = 180 ✅.
  96. Triangle inequality both directions: x < 7 + 10 = 17 AND x + 7 > 10, i.e.,
      x > 3. So 3 < x < 17, strictly. Whole numbers: 4, 5, ..., 16 — count them:
      16 − 4 + 1 = 13 possible values. (The "+1" is the classic fencepost:
      endpoints 4 and 16 BOTH count!)
  97. The diagonal splits the trapezoid into two triangles: one with base b₁ and
      height h (area b₁ × h ÷ 2), the other with base b₂ and the same height h
      (area b₂ × h ÷ 2). Adding: (b₁ + b₂) × h ÷ 2 — the formula ✅. Sample
      comparison: the doubling proof is elegant because one picture explains the
      "÷2"; the slicing proof uses nothing but triangles, which we already trust.
      Either answer (with a reason) is correct.
  98. (a) The hour hand moves 30° per hour, so at 2:30 it's at 2.5 × 30° = 75°
      from 12. (b) The minute hand points at 6: 180°. Angle between:
      180° − 75° = 105°. (c) Answering 90° treats the hour hand as frozen at 2 —
      trusting a naive picture instead of the moving clock. That's Mistake 1.
  99. (a) The midsegment makes a small triangle similar to the whole with
      k = 1/2 (midsegment theorem), and areas scale by k² = 1/4:
      64 ÷ 4 = 16 cm². (b) Trapezoid below: 64 − 16 = 48 cm².
      (c) 16 + 48 = 64 ✅.
  100. Sample trio: Circle — "An inscribed angle stands on a 70° arc; find it."
      → 70° ÷ 2 = 35°. Similarity — "A triangle of area 4 cm² is dilated by
      k = 3; find the new area." → 4 × 9 = 36 cm². Angle chase — "A triangle's
      angles are x, x + 20, and x + 40." → 3x + 60 = 180 → x = 40, giving
      40°, 60°, 80°. Yours will differ — if each one uses its theorem honestly
      and the arithmetic checks, they're right!


─────────────────────────────────────────────

🎉 You finished the whole honors lesson! If you can work through these 100 problems — justifying each step, choosing strategies, catching yourself before trusting a picture — then you don't just KNOW geometry, you can PROVE it. You proved the 180° rule with one parallel line, the Pythagorean theorem with four triangles, and the inscribed angle theorem with one isosceles triangle. You scaled shapes and watched area sprint ahead by k², chased angles around circles, moved points with functions, counted without listing, and tamed exponential growth with logarithms. That's not a list of facts — that's a mathematician's toolkit. The next time you cross a bridge, look at the beams: triangles everywhere, standing strong because of math you can now prove. Outstanding work!
