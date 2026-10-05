Non-Euclidean Geometry — A Complete Lesson (Honors Edition)
═══════════════════════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        Flat triangle:    80° + 60° + 40° = 180°

        Ball triangle:    90° + 90° + 90° = 270°

        Saddle triangle:  70° + 50° + 40° = 160°

Those three lines are non-Euclidean geometry in action. The first is the golden rule you already know: on flat paper, every triangle's angles add to exactly 180 degrees. The second and third look like mistakes — 270°? 160°? — but they are not mistakes at all. They are triangles drawn on a BALL and on a SADDLE, where the rules of the game are different.

In this honors edition, you won't just believe those three lines — you'll COMPUTE with them. You'll learn a beautiful formula called Girard's theorem that turns a triangle's extra degrees into its exact AREA, and you'll prove it yourself, step by step. You'll measure the curvature of a world from a single triangle and even calculate the radius of a planet without ever leaving its surface. And you'll discover something truly shocking: on a ball, two triangles with the same three angles must have the same area — which means zooming in and out, the heart of similar triangles, simply does not exist there.

Why do people care? Because the world you live on IS a ball! Airplanes flying between continents, GPS satellites guiding your phone, and every world map ever drawn all run on ball geometry. And it gets wilder: about 100 years ago, Albert Einstein discovered that space itself can be curved — and ball-and-saddle geometry is the language his discovery speaks. For 2,000 years, everyone thought Euclid's rules were the only possible rules. Changing just ONE of them opened up whole new universes of math. Now you get to visit them — with a pencil, a protractor, and some real formulas.

In this lesson, you will:

  1. Learn Euclid's five postulates — and five famous statements that stand or fall together like dominoes
  2. Learn what "straight line" even means on a curved surface (geodesics)
  3. Explore ball geometry: no parallel lines and fat triangles
  4. Prove and use Girard's theorem: on a ball, area IS angle excess
  5. Explore saddle geometry: crowds of parallels, skinny triangles, and a stunning area limit
  6. Become a quantitative curvature detective: one triangle reveals the radius of the world
  7. See why flat maps can't help but lie — and why airplanes fly "curved" routes
  8. Compare the three worlds side by side
  9. Learn the seven classic mistakes so you never make them
  10. Practice with 100 problems — easy, intermediate, and challenge — with a fully worked answer key

How to use this lesson: Read the sections in order. Each section starts with the key idea you'll learn in it. Every new idea is built from the one before it, and every worked example shows EVERY step with a reason — so keep a pencil and paper next to you and check each line yourself. Try every "Your Turn" box before reading its answer. If you have a ball or a globe at home, keep it nearby — this lesson is much more fun when you can touch the math! Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: The Five Postulates — and the Troublemaker
─────────────────────────────────────────────

📌 Key idea of this section:

        Geometry is a game with rules (called POSTULATES).
        Change ONE rule, and you get a whole new game —
        and several other famous facts fall with it, like dominoes.

First, three words you'll need all lesson:

  · A POSTULATE is a starting rule — something we accept without proof so the game can begin.
  · A THEOREM is a statement we PROVE from the postulates, step by justified step.
  · A PROOF is a chain of steps where each step follows from a postulate, a definition, or a theorem already proved.

The rulebook

About 2,300 years ago (around 300 BC), a Greek mathematician named Euclid wrote the most successful math book of all time: The Elements. It starts with just FIVE postulates — and from those five, all of flat-paper geometry grows. Here they are, in kid language:

  1. You can draw a straight line between any two points.
  2. You can keep any segment going, straight, forever.
  3. You can draw a circle with any center and any size.
  4. All right angles are equal to each other.
  5. THE PARALLEL POSTULATE: through a point NOT on a line, you can draw exactly ONE line that never meets the first one — exactly one parallel line.

Read postulates 1 to 4 again. Each one feels obvious — of course you can connect two dots! Now read postulate 5. It's longer, wordier, and fussier. Euclid himself seemed suspicious of it; he avoided using it for as long as he could.

The 2,000-year argument

For about 2,000 years, mathematicians tried to PROVE postulate 5 using only postulates 1 to 4. If they could, it would become a theorem, and the rulebook would shrink to four truly obvious rules. They tried everything. Every single proof failed — and many "proofs" accidentally smuggled postulate 5 back in, wearing a disguise!

Then, about 200 years ago, three mathematicians — Lobachevsky, Bolyai, and Riemann — dared to try something rebellious: what if postulate 5 is simply NOT FORCED on us? Not wrong like 2 + 2 = 5. Optional, like a rule in a game — change it, and you don't break math. You just get a DIFFERENT game.

The three rulebooks

There are exactly three ways the parallel postulate can go:

        FLAT world:    exactly ONE parallel line through the point
        BALL world:    ZERO — every straight line meets the first one
        SADDLE world:  MANY — a whole fan of lines never meet it

Euclid's geometry is the flat one. The other two are called NON-EUCLIDEAN — which simply means "not Euclid's." And here's the shock: both are perfectly good math, with no contradictions anywhere. Even better: one of them describes the planet under your feet right now.

The five dominoes

Here's the deeper truth that honors students need. In any world obeying postulates 1 to 4, these five statements STAND OR FALL TOGETHER — proving any one of them proves all five, and breaking one breaks all five:

  Domino 1:  Exactly one parallel line through a point off a line.
  Domino 2:  Every triangle's angles sum to exactly 180°.
  Domino 3:  Rectangles exist (four straight sides, four right angles).
  Domino 4:  The Pythagorean theorem holds: a² + b² = c².
  Domino 5:  Similar triangles of DIFFERENT sizes exist.

(Two quick definitions for domino 5: two figures are CONGRUENT if they have the same shape AND the same size. They are SIMILAR if they have the same shape but possibly different sizes — same angles, sides scaled by one factor.)

So when the ball world changes domino 1 to "zero parallels," all five dominoes fall: ball triangles never sum to exactly 180°, no rectangles exist on a ball, the Pythagorean theorem fails on a ball, and — most surprising of all — you cannot make a bigger or smaller copy of a triangle on a ball without changing its angles. You'll prove pieces of this yourself by the end of the lesson!

Worked mini-proof: Domino 3 pushes Domino 2

Let's prove one domino tip in the flat world: IF rectangles exist, THEN triangles sum to 180°.

  Step 1: Take any rectangle. [Given — we're assuming domino 3.]
  Step 2: Draw one diagonal. It splits the rectangle into two right
          triangles that are CONGRUENT — same shape and size.
          [A rectangle's diagonal always splits it into two matching
          right triangles.]
  Step 3: The diagonal splits each corner it touches (both 90°) into
          two small angles. Because the two triangles are congruent,
          the small angle at one end of the diagonal equals the
          matching small angle at the other end. [Matching angles of
          congruent triangles are equal.]
  Step 4: So inside ONE triangle, its two non-right angles are one
          piece of the first corner plus one piece of the second —
          and those pieces reassemble into a full 90° corner.
          [Step 3 lets us swap the pieces.]
  Step 5: The triangle's total is therefore 90° + 90° = 180°.
          [Adding the right angle to Step 4's 90°.] ✅

One justified chain, and a domino falls exactly where it should. That is what proof feels like — and this whole lesson is built out of chains just like it.

✏️ Your Turn

(a) Which of the five postulates is the troublemaker? (b) Name the three possible answers to "how many parallel lines can you draw through a point off a line?" — and the world that goes with each. (c) An explorer lands on a world where rectangles are IMPOSSIBLE. Using the five dominoes, what else do you immediately know about her world?

Answers: (a) Postulate 5, the parallel postulate. (b) One → flat; none → ball; many → saddle. (c) The dominoes stand or fall together: her world's triangles do NOT sum to exactly 180°, its parallel count is NOT "exactly one," the Pythagorean theorem fails there, and same-angles-different-size triangles can't exist.


─────────────────────────────────────────────
Lesson 2: What Is a Straight Line, Anyway?
─────────────────────────────────────────────

📌 Key idea of this section:

        On ANY surface, the "straight line" between two points
        is the straightest-possible path — and the shortest one.
        Its fancy name is a GEODESIC.

The ant test

Here's a question nobody asks on flat paper: what does "straight" even MEAN? On paper it's easy — grab a ruler. But on a curved surface like a ball, no flat ruler fits. We need a meaning of "straight" that works EVERYWHERE.

Meet the ant test. Imagine an ant walking on a surface, and this ant never steers — no turning left, no turning right, just straight ahead, always. The path it walks is a "straight line" FOR THAT SURFACE. The ant doesn't care that the surface curves; it walks as straight as it possibly can.

The string test

There's a second test, and it agrees with the ant. Press a string onto the surface between two points and pull it TIGHT. The tight string settles onto the shortest path — and shortest and straightest always match. That straightest-possible path is the GEODESIC (say it "jee-oh-DESS-ik"). From now on, "line" on any surface means "geodesic."

Great circles: the straight lines of a ball

So what are the straight lines on a ball? They are the GREAT CIRCLES — the biggest circles you can possibly draw on the ball, the ones whose center is the ball's own center. Two famous families:

  · The EQUATOR: a great circle — the biggest circle around the middle.
  · The MERIDIANS (the longitude lines that run through the North and South Poles): every one of them is a great circle.

But watch out: the other latitude lines — the circles that run alongside the equator, like the Arctic Circle — are NOT great circles. They're too small; they loop around a point that isn't the ball's center. An ant walking along one would feel itself turning the whole time — it must steer to stay on it. On a ball, the equator is the ONLY straight latitude line!

Worked example: how far is the pole from the equator?

Problem: on a ball of radius R = 6, how far is the walk from the North Pole to the equator, measured along the surface?

  Step 1: The walk follows a meridian, and every meridian is a great
          circle, so the full meridian loop has length
          2πR. [Circumference of a circle of radius R.]
  Step 2: Pole → equator → South Pole → equator → pole is four equal
          legs, so one leg is a QUARTER of the loop. [Symmetry of
          the sphere.]
  Step 3: Distance = 2πR/4 = πR/2. [Divide Step 1 by 4.]
  Step 4: Substitute R = 6: distance = 6π/2 = 3π. [Plug in.]
  Step 5: Using π ≈ 3: 3π ≈ 9. [Estimate.]

So the surface walk is 3π ≈ 9 units. (Fun check: a straight tunnel bored through the ball would be the diagonal of a right triangle with legs R and R, so its length is √(R² + R²) = 6√2 ≈ 8.5. The surface path is longer — living on a surface costs you a little distance!)

The shocker

Now comes the fact that breaks 2,000 years of intuition. Take ANY two great circles. They ALWAYS cross — exactly twice, at two points on opposite sides of the ball. Two points on opposite ends of a diameter through the ball's center are called ANTIPODAL points (like the North and South Poles). So: every two great circles meet at a pair of antipodal points.

Every two straight lines on a ball meet. There are NO parallel lines on a ball. Zero. That's not a failure — that's the ball's rulebook, and it's the first non-Euclidean world!

Bonus: the digon — a polygon flat paper can't build

Two meridians leave the North Pole at some angle, sail to the South Pole, and meet again there. Together they enclose a TWO-SIDED polygon — a DIGON, also called a LUNE. On flat paper that's impossible: two flat lines meet at most once, so they can never close up a two-sided figure. On a ball, great circles meet TWICE — so digons exist! Keep digons in mind: in Lesson 4 they'll become the key that unlocks the area formula for every ball triangle.

✏️ Your Turn

(a) Is the Arctic Circle a great circle? Why or why not? (b) On a ball of radius R = 10, how far is the pole-to-equator walk? (Use π ≈ 3.) (c) What are the two meeting points of any two great circles called — and why does this fact destroy all parallels on a ball?

Answers: (a) No — it's a small circle; its center isn't the ball's center, so an ant would have to steer to follow it. (b) Distance = πR/2 = 10π/2 = 5π ≈ 15. (c) Antipodal points. Since EVERY two great circles meet (twice), no line on a ball can ever run parallel to another — parallels simply don't exist.


─────────────────────────────────────────────
Lesson 3: Geometry on a Ball — Fat Triangles
─────────────────────────────────────────────

📌 Key idea of this section:

        On a ball, every triangle's angles add to MORE than 180°.
        The extra amount is the EXCESS — and the bigger the
        triangle, the bigger the excess.

The champion triangle

Let's build the wildest triangle you've ever seen. Hold a globe (or any ball) in your imagination:

  1. Start at the North Pole. Walk straight SOUTH along a meridian, all the way to the equator.
  2. Turn 90°. Walk along the equator — remember, it's a great circle, so this side is straight too!
  3. Turn 90° again. Walk straight NORTH along another meridian. You'll arrive right back at the North Pole.

Three straight sides. Three corners. A genuine triangle — drawn on a ball. Now count its angles. The two corners at the equator are both 90° (meridians always cross the equator at perfect right angles). And if your two meridians meet at the pole at 90°:

        90° + 90° + 90° = 270°

A triangle with THREE right angles! On flat paper that's impossible — two 90° corners would already spend the whole 180° budget. On a ball, it's a Tuesday.

How long are the champion's sides? Each side is a quarter of a great circle — pole to equator, equator to pole. From Lesson 2's worked example, each side has length πR/2. On a ball of radius R = 10, that's 10π/2 = 5π ≈ 15 units per side. All three sides equal: the champion is the ball's EQUILATERAL triangle — with three right angles!

Fat triangles and the excess

EVERY triangle on a ball has angles adding to MORE than 180°. The sides of ball triangles bulge outward compared with flat ones, and that bulge is where the extra degrees hide. The amount OVER 180° has a name: the EXCESS.

        EXCESS:  E = (angle sum) − 180°

Worked example, every step shown:

  Problem: a ball triangle has angles 95°, 85°, and 60°. Find its excess.

  Step 1: Sum = 95° + 85° + 60° = 240°. [Add the three angles.]
  Step 2: E = 240° − 180° = 60°. [Definition of excess.]

The rule to remember: the BIGGER the triangle (compared with the ball), the BIGGER its excess. A triangle the size of a continent has a chunky excess. And the sums can get huge — all the way up toward 540° (each angle can approach 180°, though never quite reach it).

No rectangles on a ball — a three-line proof

Here's your first payoff from the excess rule:

  Step 1: A rectangle would need angle sum 4 × 90° = 360°. [Four
          right angles.]
  Step 2: But cut any ball quadrilateral along a diagonal and you get
          two ball triangles, each summing to MORE than 180° — so every
          ball quadrilateral sums to MORE than 360°. [Excess, applied
          to both triangles.]
  Step 3: 360° cannot equal "more than 360°" — so rectangles are
          impossible on a ball. [Contradiction.] ✅

Why everyone believed Euclid for 2,000 years

Here's the twist that explains history. Flip the growth rule around: the SMALLER the triangle, the SMALLER its excess. A triangle drawn in your schoolyard is microscopic compared with Earth — its excess is so tiny that no protractor on Earth could catch it. Its angles LOOK like they add to exactly 180°!

In Lesson 4 you'll learn WHY small triangles have small excess — it's a theorem, not a coincidence: the excess is proportional to the triangle's AREA.

Everyone was drawing tiny triangles on a giant ball. No wonder the flat rule FELT like the only rule.

✏️ Your Turn

(a) A ball triangle has angles 100°, 70°, and 55°. Find its sum and its excess. (b) On a ball of radius R = 4, how long is each side of the champion (90°, 90°, 90°) triangle? (Use π ≈ 3.) (c) Two angles of a ball triangle are 92° and 84°. The third angle must be MORE than what number? Show the inequality you used.

Answers: (a) Sum = 100° + 70° + 55° = 225°; E = 225° − 180° = 45°. (b) Each side = πR/2 = 4π/2 = 2π ≈ 6. (c) Sum must exceed 180°, so third angle > 180° − 92° − 84° = 4°.


─────────────────────────────────────────────
Lesson 4: Girard's Theorem — On a Ball, Area IS Excess
─────────────────────────────────────────────

📌 Key idea of this section:

        On a ball of radius R:
            triangle area = R² × E   (E = excess, in radians)
        Angles alone decide the area. This is Girard's theorem —
        and you're going to prove it.

This is the lesson where non-Euclidean geometry turns from amazing to useful. The formula above is about 400 years old, and its proof fits in nine steps — each one a step you can justify.

Tool 1: radians, a second way to measure angles

Degrees chop a full turn into 360 pieces. RADIANS measure an angle by the length of the arc it cuts from a circle of radius 1. A full turn cuts the whole circumference, 2π, so:

        full turn:  360° = 2π radians
        half turn:  180° = π radians ≈ 3 radians   (using π ≈ 3)

        conversion (π ≈ 3):  radians ≈ degrees ÷ 60
        because 180° ÷ π ≈ 180° ÷ 3 = 60.

        Examples:  90° = π/2 ≈ 1.5 rad      60° = π/3 ≈ 1 rad
                   45° = π/4 ≈ 0.75 rad     30° = π/6 ≈ 0.5 rad

Tool 2: the area of a digon (lune)

Remember the digon from Lesson 2: two meridians meeting at both poles, with pole angle θ. Spinning all the way around the pole is 360°, so a digon with angle θ covers the fraction θ/360° of the whole sphere. The sphere's area is 4πR², so:

        LUNE AREA:  lune area = (θ/360°) × 4πR²

Worked example, every step shown:

  Problem: on a ball of radius R = 5, find the area of a lune with
  angle θ = 72°.

  Step 1: Fraction of the sphere = 72°/360° = 1/5. [θ over a full turn.]
  Step 2: Sphere area = 4πR² = 4π × 25 = 100π. [Sphere area formula.]
  Step 3: Lune area = (1/5) × 100π = 20π. [Multiply Step 1 by Step 2.]
  Step 4: Using π ≈ 3: 20π ≈ 60. [Estimate.]

  Sanity check: a lune with θ = 180° should be half the sphere:
  (180°/360°) × 4πR² = 2πR². ✓ Half of 4πR². ✓

The proof of Girard's theorem (nine steps — follow with your pencil!)

Setup: take any triangle Δ on a ball of radius R, with angles A, B, C. Extend each of its three sides into a full great circle.

  Step 1: The three great circles cut the sphere into 8 triangles.
          [Each new great circle crosses the others twice; count the
          regions: 8.]
  Step 2: The 8 triangles form 4 antipodal pairs, and antipodal
          triangles have EQUAL areas. [Flipping through the ball's
          center maps one onto the other without stretching.]
  Step 3: At vertex A, the two sides through A bound a lune of angle
          A containing Δ. That lune is Δ plus exactly ONE far triangle
          on the far side of the ball, and its area is
          (A/360°) × 4πR². [Lune formula, Tool 2.]
  Step 4: Do the same at B and C, and add all three lunes. The
          triangle Δ sits inside all three lunes, so it gets counted
          3 times; the three far triangles get counted once each.
          Call the far-triangle total area S:
              3Δ + S = ((A + B + C)/360°) × 4πR²
          [Adding Step 3's formula for A, B, C.]
  Step 5: The whole sphere counts Δ and the far triangles twice each
          (once directly, once as antipodes — Step 2):
              Δ + S = (1/2) × 4πR² = 2πR²
          [Half of the 4 antipodal pairs.]
  Step 6: Subtract Step 5 from Step 4:
              2Δ = ((A + B + C)/360°) × 4πR² − 2πR²
          [3Δ − Δ = 2Δ and S − S = 0.]
  Step 7: Factor 2πR² out of the right side:
              2Δ = 2πR² × ((A + B + C)/180° − 1)
          [Because 4πR²/360° = 2πR²/180°, and 2πR² = 2πR² × 1.]
  Step 8: Divide both sides by 2:
              Δ = πR² × (A + B + C − 180°)/180°
          [Divide, and 1 = 180°/180°.]
  Step 9: The quantity (A + B + C − 180°) is the excess E in degrees,
          and E° × π/180° is exactly E in radians. So:
              area = R² × E   (E in radians)   ✅  PROVED!

With π ≈ 3, the degrees version is friendly:

        area ≈ R² × E°/60        (because E radians ≈ E°/60)

Worked example A — forward:

  Problem: on a ball of radius R = 3, a triangle has angles 90°, 80°,
  70°. Find its area.

  Step 1: Sum = 90° + 80° + 70° = 240°. [Add.]
  Step 2: E = 240° − 180° = 60°. [Excess.]
  Step 3: Convert: E ≈ 60°/60 = 1 radian. [Degrees to radians.]
  Step 4: Area = R² × E = 9 × 1 = 9. [Girard's theorem.]
  (Exactly 3π, since E = π/3 precisely: 9 × π/3 = 3π.)

Worked example B — verify with the champion:

  Problem: check Girard on the champion triangle (90°, 90°, 90°) with
  R = 2, WITHOUT using Girard for the check.

  Step 1: Girard: E = 270° − 180° = 90° = π/2 ≈ 1.5 rad. [Excess.]
  Step 2: Area = R² × E = 4 × π/2 = 2π ≈ 6. [Girard.]
  Step 3: Independent check: the champion is exactly 1/8 of the
          sphere — three 90° angles at the pole cut the ball into
          8 identical pieces. [Picture the 8 orange wedges.]
  Step 4: Sphere area = 4πR² = 16π. One eighth = 16π/8 = 2π ≈ 6.
          [Divide by 8.]
  Step 5: 2π = 2π — the two methods AGREE. ✅ [Compare.]

Worked example C — reverse direction:

  Problem: a triangle on a ball of radius R = 3 has area 12. Find its
  excess and its angle sum.

  Step 1: Girard says area = R² × E, so E = area/R². [Flip the
          formula — divide both sides by R².]
  Step 2: E = 12/9 = 4/3 radians. [Substitute area = 12, R² = 9.]
  Step 3: Convert: E° ≈ (4/3) × 60° = 80°. [Radians to degrees.]
  Step 4: Sum = 180° + E° ≈ 180° + 80° = 260°. [Excess definition,
          rearranged.]

The similarity collapse — the fifth domino falls

Read Girard's formula once more: area = R² × E. The area depends ONLY on the angles (through E) and the ball's radius. So on a FIXED ball:

        Same three angles  →  same excess  →  same area.

Two ball triangles with the same angles must have the same area — they can't be different sizes! AAA on a ball forces congruence, not mere similarity. The flat world's zoom button — make a bigger copy with the same angles — simply doesn't exist on a ball. That's domino 5 from Lesson 1, fallen. (On a saddle it falls too, for the mirror-image reason, as you'll see next.)

✏️ Your Turn

(a) On a ball of radius R = 1, a triangle has excess 90°. Find its area. (b) On a ball of radius R = 6, find the area of a lune with angle 30°. (c) Two triangles on the same ball both have angles 70°, 80°, 90°. What can you say about their areas — and which step of the lesson tells you?

Answers: (a) E = 90° ≈ 1.5 rad; area = R² × E = 1 × 1.5 = 1.5 (exactly π/2). (b) Lune = (30°/360°) × 4πR² = (1/12) × 4π × 36 = (1/12) × 144π = 12π ≈ 36. (c) Their areas must be EQUAL: same angles → same excess (60°) → same area (R² × π/3 on that ball). Same angles on a fixed ball means same size — AAA forces congruence.


─────────────────────────────────────────────
Lesson 5: Geometry on a Saddle — Skinny Triangles
─────────────────────────────────────────────

📌 Key idea of this section:

        On a saddle, every triangle's angles add to LESS than 180°.
        The missing amount is the DEFICIT — and on the ideal saddle,
        area = deficit. No saddle triangle can ever reach area π!

Meet the saddle

Picture a horse saddle — or a Pringles chip, or a high mountain pass. It curves UP in one direction (front to back) and DOWN in the other (side to side). A surface that curves both ways at once is the third world of our story. (Nature loves this shape: look at ruffled lettuce leaves, coral, and certain seashells — they flare like saddles!)

On a saddle, something backwards happens to parallel lines. Take a straight line and a point off it. On flat paper, exactly ONE line through the point never meets the first. On a saddle, line after line through the point slips safely past — bending away, missing forever. A whole FAN of parallels: MANY, not one.

Skinny triangles and the deficit

Triangles on a saddle look pinched — their corners seem sharper, their sides cave slightly inward. Add up the angles:

        Saddle triangle: 70° + 60° + 40° = 170°

LESS than 180°! The amount UNDER 180° is called the DEFICIT:

        DEFICIT:  D = 180° − (angle sum)

The growth rule mirrors the ball's: the BIGGER the saddle triangle, the BIGGER its deficit — the farther its sum sinks below 180°.

The ideal saddle: area = deficit

The ball had a magical area formula, and the saddle has a mirror-image one. On the IDEAL saddle — the evenly ruffled world mathematicians call the hyperbolic plane, with curvature exactly −1 everywhere — the formula is stunningly simple:

        SADDLE AREA (curvature −1):  area = D   (D = deficit, in radians)

        With π ≈ 3:  area ≈ D°/60

Worked example, every step shown:

  Problem: on the curvature −1 saddle, a triangle has angles 80°, 60°,
  and 30°. Find its deficit and its area.

  Step 1: Sum = 80° + 60° + 30° = 170°. [Add the angles.]
  Step 2: D = 180° − 170° = 10°. [Definition of deficit.]
  Step 3: Convert: D ≈ 10°/60 = 1/6 radian. [Degrees to radians.]
  Step 4: Area = D ≈ 1/6. [Saddle area formula.]

The shock: a speed limit on triangle size

Now chain two facts you already own:

  Step 1: Every angle is bigger than 0°, so every saddle triangle's
          angle sum is MORE than 0°. [Angles are positive.]
  Step 2: So the deficit D = 180° − sum is LESS than 180°. [Subtract.]
  Step 3: In radians, D < π ≈ 3. [Convert 180° = π ≈ 3 radians.]
  Step 4: Therefore area = D < π ≈ 3. [Saddle area formula.] ✅

Read Step 4 again. On the curvature −1 saddle, NO triangle — not one the size of a city, not one the size of a galaxy — can ever reach area 3! The closer a triangle comes to that limit, the closer its angles come to 0°, with its three vertices flying off toward infinity. The ball lets triangles grow to 4πR²; the saddle ruffles so fast that area hits a hard ceiling. Two curved worlds, opposite personalities.

A peek at the map of the saddle: the Poincaré disk

The saddle world is too ruffled to build in our 3D space, but mathematicians draw a MAP of it: the Poincaré disk (say "pwan-ka-RAY"). The whole infinite saddle world lives INSIDE one circle:

  · The boundary circle is NOT part of the world — it represents
    points infinitely far away.
  · "Straight lines" (geodesics) appear as DIAMETERS, and as arcs of
    circles that meet the boundary at RIGHT angles (90°).
  · This map measures ANGLES honestly — so skinny triangles really
    look skinny when you draw them.

Through one point in the disk, you can draw arc after arc that never touches a given arc — the fan of many parallels, visible on one page!

✏️ Your Turn

(a) A saddle triangle has angles 85°, 60°, and 30°. Find its sum, its deficit, and its area on the curvature −1 saddle. (b) Can a curvature −1 saddle triangle have area 2? If yes, find its deficit and its angle sum. (c) Why does the ball allow giant-area triangles while the saddle caps them? (One sentence, using sums.)

Answers: (a) Sum = 85° + 60° + 30° = 175°; D = 180° − 175° = 5°; area ≈ 5°/60 = 1/12. (b) Yes — area 2 means deficit 2 radians ≈ 120°, so the angle sum is 180° − 120° = 60°. (c) Ball sums climb toward 540°, so excesses (and areas) grow huge; saddle sums stay above 0°, so the deficit never reaches 180° and area never reaches π.


─────────────────────────────────────────────
Lesson 6: The Curvature Detective, Quantified
─────────────────────────────────────────────

📌 Key idea of this section:

        CURVATURE = excess per unit area:  K = E/area.
        On a ball, K = 1/R². Measure ONE triangle — its angles
        and its area — and you can compute the world's radius.

The shape-o-meter (quick review)

You're dropped onto a mystery world carrying a giant protractor. You draw one big triangle, measure its three angles, and add:

        sum = exactly 180°   →   FLAT world
        sum MORE than 180°   →   BALL world (excess)
        sum LESS than 180°   →   SADDLE world (deficit)

The three worlds have different CURVATURE — that's the word for how sharply a surface bends:

        World    Curvature    Parallels      Triangle sum
        Flat     zero         exactly one    exactly 180°
        Ball     positive     none           MORE (excess)
        Saddle   negative     many           LESS (deficit)

That table is the qualitative picture — the world's FAMILY. Now let's make it QUANTITATIVE — with numbers.

The curvature formula

Watch what happens when you rearrange Girard's theorem:

  Step 1: Girard: area = R² × E. [Lesson 4.]
  Step 2: Divide both sides by (R² × area): E/area = 1/R². [Divide.]
  Step 3: Name the left side: K = E/area is the CURVATURE — the
          excess each unit of area carries. [Definition of K.]
  Step 4: So for a ball: K = 1/R². Bigger ball → smaller curvature —
          a bigger ball bends more gently. [Read the formula.]

The same idea works on the saddle with deficit: K = −D/area (negative, because degrees go missing instead of piling up). On the ideal saddle, K = −1 everywhere — that's what "curvature −1" meant in Lesson 5. And flat paper: E = 0 always, so K = 0. ✅

Worked example — measure a planet from inside it:

  Problem: your survey team measures one giant triangle: angles
  100°, 90°, 50°, and area 12. Find your world's curvature and —
  if it's a ball — its radius.

  Step 1: Sum = 100° + 90° + 50° = 240°. [Add.]
  Step 2: E = 240° − 180° = 60°. [Excess — MORE than 180°, so this
          is a ball world.]
  Step 3: Convert: E ≈ 60°/60 = 1 radian. [Degrees to radians.]
  Step 4: K = E/area = 1/12. [Curvature = excess per unit area.]
  Step 5: Ball: K = 1/R², so R² = 1/K = 12. [Flip Step 4 of the
          derivation above.]
  Step 6: R = √12 = √(4 × 3) = 2√3 ≈ 3.5. [Simplify the root.]

  Check with Girard: predicted area = R² × E = 12 × 1 = 12. ✓ Matches
  the survey. You just measured the radius of a planet with a
  protractor — no spaceflight needed!

The circle test, quantified

Triangles aren't the only snitches. Draw a circle of surface-radius r and measure around it. On flat paper, C = 2πr. On curved worlds:

        BALL:    C comes out LESS than 2πr
                 (the surface bulges away inside the circle)
        SADDLE:  C comes out MORE than 2πr
                 (extra surface is ruffled into the same space —
                 the gap grows explosively as r grows)

Worked example — the equator trick:

  Problem: on a ball of radius R = 4, draw the circle centered at the
  North Pole whose surface radius reaches exactly to the equator.
  Compare its true circumference with the flat prediction.

  Step 1: Surface radius r = pole-to-equator distance = πR/2
          = 4π/2 = 2π ≈ 6. [Lesson 2's worked example.]
  Step 2: Flat prediction: C = 2πr = 2π × 2π = 4π² ≈ 36.
          [Flat circle formula; π² ≈ 9.]
  Step 3: But this circle IS the equator — a great circle — so its
          true circumference is 2πR = 8π ≈ 24. [The circle at that
          radius is the equator itself.]
  Step 4: 24 < 36 — the ball's circle comes out SHORT, by a third.
          [Compare Step 2 and Step 3.] ✅

(For enthusiasts: the exact ball formula is C = 2πR × sin(r/R), with r/R in radians. Here r/R = π/2 = 90°, and sin(90°) = 1, giving C = 2πR — exactly Step 3. You'll meet the sine function properly in trigonometry; for now, the equator trick gives you the same answer with nothing but π.)

The biggest measurement ever

Now for the goosebumps. About 100 years ago, Albert Einstein discovered that SPACE ITSELF can be curved — and that gravity is what we feel when matter bends the space around it. So astronomers became curvature detectives: they measure the geometry of deep space with triangles whose corners are galaxies and beams of light. The answer decides the shape of... everything. (Current best measurements: space looks FLAT as far as anyone can tell — but the survey continues!)

✏️ Your Turn

(a) A triangle has angles 90°, 80°, 70° and area 8. Find K and R. (b) Your circle test gives C = 2πr exactly. Which world? (c) A triangle on the curvature −1 saddle has area 1. What is its deficit in degrees?

Answers: (a) Sum = 240°; E = 60° ≈ 1 rad; K = E/area = 1/8; R² = 8, so R = √8 = 2√2 ≈ 2.8. (b) Flat — only zero curvature gives the exact flat circumference. (c) Area = D in radians, so D = 1 radian ≈ 60°.


─────────────────────────────────────────────
Lesson 7: Maps Lie — Geometry in the Real World
─────────────────────────────────────────────

📌 Key idea of this section:

        You can't flatten a ball without stretching it —
        so every flat map of Earth distorts something.

The orange-peel problem

Try this at home (with permission!): peel an orange and press the peel flat on the table. It rips. It cracks. It refuses. A ball's skin simply does not FIT onto flat paper — and that, in one sticky experiment, is why every flat map of the whole Earth must stretch, squash, or tear SOMETHING.

Most world maps deal with the problem by pushing the stretch toward the poles. Look at a classic world map (the famous one is called the Mercator map): Greenland looms as big as Africa. In reality, Africa is about FOURTEEN times bigger than Greenland! Near the equator the map is fairly honest; near the poles it exaggerates wildly.

The champion of distortion: Antarctica. On the ball, the South Pole is ONE POINT. On the rectangular map, it stretches into the ENTIRE bottom edge — a point pulled into a line thousands of miles long on the page! A point becoming a line is the ultimate stretch, and it's exactly what the orange peel warned you about.

The curved-looking shortcut

Here's a puzzle pilots solve every day. On a flat map, draw the straightest-looking route from New York to Tokyo — a ruler line. Surprise: that's NOT the shortest flight! The shortest path on the ball is a great circle, and on the flat map that great circle draws itself as a big ARC bending over Alaska and the Arctic.

Look at it from the ball's point of view and the mystery vanishes: the "curved" arc is the straight one, and the ruler line is the detour. The map stretched the truth again. Every long flight you ever take flies a great circle — a straight line on a round world.

One more wrinkle: the latitude-line trap. Two cities can sit on the SAME latitude line, and the latitude line still isn't the shortest route — because (Lesson 2!) latitude lines other than the equator aren't geodesics. The great-circle route between them dips toward the pole and wins. An ant following the latitude line would have to steer the whole way; an ant following the great circle never steers.

Your phone knows non-Euclidean geometry

GPS works by timing signals from satellites whipping around Earth. Those satellites move fast and feel weaker gravity than you do — and Einstein's curved-space math says both effects change how their clocks tick. The GPS system corrects for ALL of it, ball geometry and Einstein geometry together. Take away the non-Euclidean corrections, and your map app would be kilometers wrong within a day.

✏️ Your Turn

(a) Why must every flat map of the whole Earth distort something? (b) Which single point on Earth gets stretched into the entire bottom edge of a rectangular world map? (c) A long flight path looks like a big curve on the flat map. What is it really?

Answers: (a) A ball's skin can't be flattened without stretching or ripping — the orange-peel problem. (b) The South Pole. (c) A great circle — the straightest, shortest path on the ball.


─────────────────────────────────────────────
Lesson 8: The Three Worlds, Side by Side
─────────────────────────────────────────────

📌 Key idea of this section:

        One changed rule → three worlds of geometry.
        Which one applies depends on the surface you're standing on.

The grand comparison

You've now toured all three worlds. Line them up — including the new honors rows:

                                FLAT            BALL              SADDLE
        Parallels through       exactly one     none              many
        a point off a line
        Triangle angle sum      = 180°          MORE (excess)     LESS (deficit)
        Triangle area           1/2 × base      R² × excess       deficit
                                × height        (radians)         (radians, K = −1)
        Biggest possible        unlimited       up to 4πR²        never reaches
        triangle area                                             π ≈ 3 (K = −1)
        Rectangles exist?       YES             no                no
        Digons exist?           no              YES (lunes)       no
        Same angles,            YES             no                no
        different sizes?
        Pythagorean theorem?    YES             no                no
        Circle, radius r        2πr             less than 2πr     more than 2πr
        Curvature K             zero            positive (1/R²)   negative
        Real-life home          small places:   planet Earth,     Einstein's
                                rooms, maps     flights, GPS      universe, ruffled
                                                                  leaves

So which world is the REAL one?

All three are real math — perfectly consistent, no contradictions anywhere. The question "which is true?" only makes sense once you add: "...true OF WHAT SURFACE?"

  · Your desk, your notebook, the schoolyard: FLAT (or so close you can't tell the difference — tiny triangles on a huge ball carry excess E = area/R² ≈ 0!).
  · Planet Earth, long flights, world maps, GPS: BALL.
  · The fabric of space near heavy things — and every ruffled lettuce leaf: SADDLE.

The 2,000-year argument over postulate 5 ended with a plot twist nobody saw coming: Euclid wasn't wrong — he was just LOCAL.

✏️ Your Turn

Sort these four facts by world: (a) "Digons exist here." (b) "Triangle area equals R² times the excess." (c) "No triangle ever reaches area π." (d) "You can draw a triangle with the same angles but twice the sides."

Answers: (a) Ball — two great circles meet twice, closing a two-sided lune. (b) Ball — that's Girard's theorem. (c) Saddle — area = deficit < 180° = π radians. (d) Flat — only the flat world has similarity; on a fixed ball or saddle, the angles alone fix the area, so scaling is impossible.


─────────────────────────────────────────────
Lesson 9: Watch Out! Seven Common Mistakes
─────────────────────────────────────────────

📌 Keep the big ideas in sight:

        The rules depend on the surface!
        Ball: no parallels, fat triangles, area = R² × excess.
        Saddle: many parallels, skinny triangles, area < π.

These seven mistakes catch students every single year. Learn them now, and they won't catch you!

Mistake 1: "Parallel lines NEVER meeting is just a fact of the universe"

        "Lines that never meet are impossible, and parallels never fail." ❌

Both halves are flat-world thinking! On a ball, EVERY two straight lines meet — parallels don't exist at all. On a saddle, MANY lines through a point never meet the first. "Exactly one parallel" is the flat rulebook, not a law of the universe. ✅

Mistake 2: "A triangle's angles ALWAYS add to 180°"

        90° + 90° + 90° = 270° — so that triangle must be impossible? ❌

On flat paper, yes, impossible. On a ball, that's the champion triangle: pole, equator, pole! The 180° rule belongs to flat surfaces. Balls give MORE (excess); saddles give LESS (deficit). Before adding angles, always ask: which world's rules am I playing by? ✅

Mistake 3: "The latitude lines are straight lines on the ball"

        "The Arctic Circle runs straight east, so it must be a straight line." ❌

Only the EQUATOR is a great circle. The other latitude circles are too small — they loop around a point that isn't the ball's center, and an ant walking one would feel itself steering the whole way. Straight lines on a ball = great circles, centered on the ball's center. ✅

Mistake 4: "The map shows it huge, so it must be huge"

        "Greenland looks as big as Africa, so they're about the same size." ❌

Flat maps of the whole Earth MUST stretch something — the orange-peel problem — and most push the stretch to the poles. Greenland sits far north and gets inflated; Africa hugs the equator and stays honest. In reality, Africa is about 14 times bigger. And the South Pole — one single point! — stretches into the map's entire bottom edge. Never trust sizes near a map's top and bottom edges! ✅

Mistake 5: "A bigger triangle still adds to almost exactly 180°"

        "A triangle the size of a continent still sums to about 180°." ❌

Backwards! On a ball, the BIGGER the triangle, the BIGGER its excess — Girard even tells you exactly how big: E = area/R². A continent-sized triangle misses 180° by a mile. It's the TINY triangles that hug 180°. That's exactly why the flat rule fooled everyone for 2,000 years: every triangle anyone measured was tiny. ✅

Mistake 6: "Same angles, different sizes — similarity works everywhere"

        "I can always draw a triangle with the same angles but twice
        the side lengths." ❌

Only on flat paper! On a fixed ball, Girard's theorem says the three angles ALONE fix the area: same angles → same excess → same area. You cannot zoom a triangle on a ball. Same on the ideal saddle, where area = deficit. Similar triangles of different sizes are domino 5 — and domino 5 falls whenever the parallel postulate falls. ✅

Mistake 7: "The Pythagorean theorem works on every world"

        "a² + b² = c² is a universal law." ❌

Test it on the champion ball triangle: it has right angles (three!) and all three sides equal — call the side s. Then a² + b² = s² + s² = 2s², but c² = s². Two copies of s² can never equal one copy — so a² + b² = c² FAILS on the ball. Pythagoras is domino 4: flat worlds only. ✅


─────────────────────────────────────────────
Lesson 10: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Parallel lines through a point:  flat 1  ·  ball 0  ·  saddle many
        Triangle sum:  flat = 180°  ·  ball MORE (excess)  ·  saddle LESS (deficit)
        Ball area:  area = R² × E (radians)   ≈ R² × E°/60  (π ≈ 3)
        Saddle area (K = −1):  area = deficit  —  always LESS than π ≈ 3
        Curvature:  K = E/area = 1/R² (ball)  ·  R = √(area/E)
        Circle, radius r:  flat 2πr  ·  ball less  ·  saddle more
        Lune (digon) area:  (θ/360°) × 4πR²

The recap list

  · Euclid wrote five postulates; the fifth — the parallel postulate — was the troublemaker nobody could prove.
  · "Non-Euclidean" means the parallel postulate was changed: exactly one → none (ball) or many (saddle).
  · Five statements stand or fall together: one parallel; 180° sums; rectangles; Pythagoras; similarity. Break one, break all five.
  · On any surface, the straightest path is the shortest path — a geodesic. Pull a string tight to see it; watch a never-steering ant walk it.
  · On a ball, geodesics are great circles: the biggest circles, centered on the ball's center. The equator and all meridians qualify; other latitude lines do not.
  · Two great circles always meet at two antipodal points — so a ball has NO parallel lines, and digons (lunes) exist.
  · Pole to equator along the surface = πR/2 (a quarter of a great circle).
  · Ball triangles are fat: angles add to MORE than 180° (the extra is the excess). Saddle triangles are skinny: LESS than 180° (the missing amount is the deficit).
  · Girard's theorem: ball area = R² × excess. Proof: three lunes count the triangle three times and three far triangles once; subtract the sphere equation.
  · Consequence: on a fixed ball, same angles → same area. AAA forces congruence — there is no zoom button on a ball.
  · On the ideal saddle (K = −1), area = deficit, and since deficits never reach 180°, no saddle triangle ever reaches area π.
  · Curvature is excess per unit area: K = E/area. For a ball K = 1/R², so R = √(area/E) — one triangle measures the world's radius.
  · Circle of radius r: flat C = 2πr; ball less (equator trick: r = πR/2 gives C = 2πR, not 2πr); saddle more, explosively.
  · Flat maps must stretch something (the orange-peel problem!) — most of all near the poles. Flight paths are great circles, and GPS needs Einstein's curved space.

The magic sentence

        One rule changed, three worlds born:
        flat — one parallel, 180°.
        ball — no parallels, MORE, area = R² × excess.
        saddle — many parallels, LESS, area capped at π.

Say it out loud three times. Seriously! That's the whole lesson in five lines.

Why this matters

For 2,000 years, the greatest minds insisted Euclid's rules were the only possible ones — and they were wrong in the most useful way. Ball geometry guides every long flight and every GPS ping; saddle geometry is woven into Einstein's universe. And the detective trick you learned — one triangle reveals the shape, even the RADIUS, of a world — is literally what astronomers do to measure the universe itself. You didn't just learn geometry. You learned that even the RULES can be chosen — and that choosing differently builds new worlds, each with its own formulas, its own limits, and its own surprises.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Parallel lines through a point off a line:  flat 1  ·  ball 0  ·  saddle many
        Excess E = sum − 180° (ball)   ·   Deficit D = 180° − sum (saddle)
        Girard (ball):  area = R² × E (radians)  ≈  R² × E°/60   (π ≈ 3)
        Saddle (K = −1):  area = D (radians)  ≈  D°/60  —  always less than π ≈ 3
        Curvature:  K = E/area = 1/R²   ·   R = √(area/E)
        Lune area:  (θ/360°) × 4πR²    ·    Pole to equator:  πR/2
        Circle, radius r:  flat 2πr  ·  ball less  ·  saddle more
        Bigger triangle on a curved world → bigger excess or deficit
        Same angles on a fixed ball → same area (no zoom button!)

Grab a pencil and paper — and if you have a ball or globe, keep it next to you! Start with the easy ones — they use the exact same patterns from the lessons. The intermediate problems chain two or three steps; the challenge problems chain four to six and make YOU choose the strategy. A few problems are open-ended: they have more than one right answer. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "Which world's rules am I playing by — flat, ball, or saddle?"


🟢 EASY (Problems 1–70)

Problems 1–8 — Euclid and the dominoes! (Lesson 1)

  1. What is a postulate?
  2. Who wrote The Elements, about 2,300 years ago?
  3. Which postulate is the troublemaker, and what does it say?
  4. For about how long did mathematicians try to PROVE the parallel
     postulate from the other four?
  5. Did any of those proofs succeed?
  6. What did Lobachevsky, Bolyai, and Riemann dare to do instead?
  7. What are the three possible answers to "how many parallel lines
     through a point off a line?" — and which world goes with each?
  8. True or false: "Every triangle sums to 180°" and the parallel
     postulate are dominoes — each one forces the other.

Problems 9–16 — Straight lines on curved surfaces! (Lesson 2)

  9. Give BOTH definitions of a geodesic: the ant's version and the
     string's version.
 10. You press a string onto a surface between two points and pull it
     tight. What does the string settle onto?
 11. Why does a never-steering ant walk a geodesic?
 12. On a ball, the geodesics are which circles — and what makes a
     circle "great"?
 13. Which latitude lines are geodesics: all, none, or exactly one?
 14. Which meridians are great circles: all of them or none of them?
 15. A ball has radius R = 8. How far is the pole-to-equator walk
     along the surface? (Use π ≈ 3.)
 16. Two great circles meet how many times — and what are the two
     meeting points called?

Problems 17–24 — Parallels and digons! (Lessons 2–4)

 17. How many parallel lines through a point off a line — on FLAT paper?
 18. How many on a ball?
 19. How many on a saddle?
 20. Why can't a ball have ANY parallel lines? (One sentence, using
     great circles.)
 21. What is a digon — and why can't one exist on flat paper?
 22. Why CAN digons exist on a ball?
 23. On a ball of radius R = 6, find the area of a lune with angle
     45°. (Use π ≈ 3.)
 24. Write the lune area formula (with the angle in degrees).

Problems 25–32 — Ball triangles are fat! (Lesson 3)

 25. On a ball, do a triangle's angles add to MORE or LESS than 180°?
 26. Write the definition of the excess E.
 27. The champion ball triangle has three 90° angles. Find its sum
     and its excess.
 28. A ball triangle has angles 100°, 70°, and 50°. Find its sum and
     its excess.
 29. A ball triangle's angle sum is 230°. What is its excess?
 30. Two angles of a ball triangle are 100° and 65°. The third angle
     must be MORE than what number?
 31. On the same ball, which has the bigger excess: a town-sized
     triangle or a continent-sized one?
 32. On a ball of radius R = 12, how long is each side of the
     champion triangle? (Use π ≈ 3.)

Problems 33–40 — Girard's theorem: area = R² × excess! (Lesson 4)

 33. State Girard's theorem in words AND as a formula.
 34. Rewrite Girard's formula for degrees, using π ≈ 3.
 35. On a ball of radius R = 1, a triangle has excess 60°. Find its
     area.
 36. On a ball of radius R = 2, a triangle has excess 90°. (a) Find
     its area with Girard. (b) Check: what fraction of the whole
     sphere is the 90°-90°-90° triangle?
 37. On a ball of radius R = 3, a triangle has excess 30°. Find its
     area.
 38. On a ball of radius R = 1, a triangle has area 2 (that is, its
     excess is 2 radians). Find its excess in degrees and its angle
     sum.
 39. On a FIXED ball, two triangles have exactly the same three
     angles. Must their areas be equal? Why?
 40. Can two ball triangles of DIFFERENT sizes be similar (same
     angles)? Why or why not?

Problems 41–48 — Saddle triangles are skinny! (Lesson 5)

 41. On a saddle, do a triangle's angles add to MORE or LESS than 180°?
 42. Write the definition of the deficit D.
 43. A saddle triangle has angles 80°, 50°, and 40°. Find its sum
     and its deficit.
 44. A saddle triangle's angle sum is 155°. What is its deficit?
 45. Two angles of a saddle triangle are 75° and 55°. The third angle
     must be LESS than what number?
 46. On the curvature −1 saddle, area equals the deficit measured in
     what unit? Rewrite the formula for degrees (π ≈ 3).
 47. A curvature −1 saddle triangle has deficit 90°. Find its area.
 48. Why can NO curvature −1 saddle triangle ever reach area 3?

Problems 49–56 — The curvature detective! (Lesson 6)

 49. A giant triangle's angles add to exactly 180°. Which world?
 50. The sum is 200° — which world? The sum is 160° — which world?
 51. Give the curvature sign of each world: flat, ball, saddle.
 52. Write the curvature formula K = ?, and the ball's special case
     K = ? in terms of R.
 53. A triangle has excess 90° and area 6. Find K, then R.
     (Use π ≈ 3 for the radian conversion.)
 54. On a ball, a circle's measured circumference is MORE or LESS
     than 2πr? On a saddle?
 55. On a ball of radius R = 4, draw the circle centered at the North
     Pole reaching exactly to the equator. (a) Its surface radius r.
     (b) The flat prediction 2πr. (c) Its true circumference.
     (d) Verdict: which world does the circle test report?
 56. Who discovered that space itself can be curved — and that gravity
     is what that curvature feels like?

Problems 57–64 — Maps, quadrilaterals, and the real world! (Lessons 7–8)

 57. What happens when you press an orange peel flat — and what does
     that prove about flat maps of Earth?
 58. On a Mercator-style map, which regions get stretched the most?
 59. Greenland looks as big as Africa on the map. What's the truth?
 60. Why does a great-circle flight path look CURVED on a flat map?
 61. What is a flat quadrilateral's angle sum? (Hint: split it into
     triangles.)
 62. Is a ball quadrilateral's sum MORE or LESS than 360°? Why?
 63. Is a saddle quadrilateral's sum MORE or LESS than 360°?
 64. Which worlds allow true rectangles — and why only those?

Problems 65–70 — Quick mixed checks! (All lessons)

 65. What is a flat pentagon's angle sum? (Hint: (n − 2) × 180°.)
 66. Is a ball pentagon's sum MORE or LESS than 540°?
 67. True or false: every surface has geodesics.
 68. Name the ONLY straight latitude line on a ball.
 69. Which needs Einstein's curved-space math: GPS or a paper map?
 70. Your schoolyard triangle measures exactly 180°. Should you be
     shocked to find exactly 180° on a round planet? Why not?


🟡 INTERMEDIATE (Problems 71–90)

Problems 71–73 — Girard in both directions! (Lessons 3–4)

 71. A ball triangle has angles 80°, 70°, and 60°. (a) Find the angle
     sum. (b) Find the excess. (c) If the ball has radius R = 2,
     find the triangle's area. (Use π ≈ 3.)
 72. A ball triangle on a ball of radius R = 3 has excess 45°.
     (a) Find its area. (b) Two of its angles are 70° and 60°.
     Find the third angle. (Hint: excess first, then the sum!)
 73. A triangle on a ball of radius R = 4 has area 8. (a) Find its
     excess in degrees. (b) Find its angle sum. (c) If two of its
     angles are 90° and 80°, find the third.

Problems 74–76 — Lunes and saddles! (Lessons 4–5)

 74. On a ball of radius R = 10, find the area of a lune with angle
     36°. (Use π ≈ 3.)
 75. The champion check. On a ball of radius R = 4: (a) Find the
     champion triangle's excess. (b) Find its area with Girard.
     (c) Compute the sphere's area, take 1/8 of it, and confirm the
     two answers agree.
 76. On the curvature −1 saddle, a triangle has angles 60°, 50°, and
     an unknown third angle. (a) If the deficit is 40°, find the
     third angle. (b) Find the triangle's area.

Problems 77–79 — Curvature detective work! (Lesson 6)

 77. A giant triangle has excess 120° and area 18. (a) Convert the
     excess to radians (π ≈ 3). (b) Find the curvature K. (c) Find
     the world's radius R.
 78. Two survey teams on two different ball-worlds each measure a
     triangle of area 12. Team A finds excess 60°; Team B finds
     excess 30°. (a) Find both radii R_A and R_B. (b) Which world
     is bigger, and by what factor? (Hint: compare R² values first,
     then take a square root.)
 79. On a ball of radius R = 2, triangle P has angles 60°, 70°, 80°.
     (a) Find P's area. (b) Triangle Q, on the SAME ball, also has
     angles 60°, 70°, 80°. Find Q's area — one line, with the reason.
     (c) What does this tell you about similar triangles on a ball?

Problems 80–82 — Which world am I on? Use EVERY clue! (Lessons 5–8)

 80. A ball quadrilateral has three angles of 100°, 100°, 100°.
     (a) What must the fourth angle EXCEED? (b) Hence what is the
     smallest the quadrilateral's sum could approach?
 81. Circle test: on a ball of radius R = 10, measure the circle
     centered at the pole reaching the equator. (a) Surface radius r.
     (b) Flat prediction 2πr. (c) True circumference. (d) Verdict.
     (Use π ≈ 3.)
 82. On a stretched flat map, Greenland and Africa are drawn the SAME
     size — but really Africa is about 14 times bigger than Greenland.
     (a) Which one was stretched more, relative to its true size?
     (b) By what factor, relative to the other?

Problems 83–85 — Proofs and constructions! (Lessons 3–5)

 83. Pole triangle: walk south from the North Pole to the equator,
     turn 90°, walk along the equator, turn 90°, walk north back to
     the pole; the two paths meet at the pole at 40°. (a) Find all
     three angles. (b) The sum. (c) The excess. (d) The area, if
     R = 6. (Use π ≈ 3.)
 84. Prove that no rectangle can exist on a ball. Give each step a
     reason. (Hint: suppose one DID exist — what would its sum be?
     What MUST a ball quadrilateral's sum be?)
 85. True or false, with numbers: "On a ball, an equilateral triangle
     can have all three angles equal to 100°." (Check the sum rule,
     then find the excess and, for radius R, the area.)

Problems 86–88 — Models and mixed clues! (Lessons 5–7)

 86. In the Poincaré disk model of the saddle world: (a) What do
     "straight lines" look like? (Name both kinds.) (b) At what angle
     does a line-arc meet the boundary circle? (c) Is the boundary
     circle part of the world?
 87. World X: triangle sums are 170°, the circle test gives MORE than
     2πr, and through a point off a line you can draw many parallels.
     Which world? Confirm all three clues agree.
 88. World Y: rectangles exist, the circle test gives exactly 2πr,
     and K = 0. Which world? Confirm all three clues agree.

Problems 89–90 — Two ways to win! (Compare approaches)

 89. A ball triangle's excess is exactly 1/3 of 180°, and the ball's
     radius is R = 5. (a) Find the excess. (b) Find the area.
     (c) Find the angle sum. (Use π ≈ 3.)
 90. Find the area of the champion triangle on a ball of radius R = 6
     TWO ways: (i) with Girard's theorem; (ii) as a fraction of the
     whole sphere. Show both full computations, state whether they
     agree, and say which method works for a NON-champion triangle —
     and why the other doesn't. (Use π ≈ 3.)


🔴 CHALLENGE (Problems 91–100)

 91. The curvature surveyor. Your team measures one giant triangle:
     angles 90°, 80°, 70°, and area 8. (a) Find the angle sum.
     (b) Find the excess in degrees, then radians (π ≈ 3). (c) Find
     the curvature K. (d) Find the world's radius R, simplifying the
     square root. (e) Verify: plug R and E into Girard's theorem and
     check the area comes out 8.
 92. Digons to triangles. On a ball of radius R = 2, two meridians
     meet at the poles at 60°. (a) Find the lune's area. (b) The
     equator splits this lune into which two pieces? (c) Each piece
     is a triangle — find its three angles and its area via Girard.
     (d) Check: do the two triangle areas add to the lune's area?
     (Use π ≈ 3.)
 93. The similarity collapse. (a) On FLAT paper, triangle T has
     angles 80°, 60°, 50° and shortest side 3; triangle T′ is similar
     with shortest side 9. By what factor do the areas differ?
     (b) Now on a ball of radius R = 1, two triangles both have
     angles 80°, 60°, 50°. Find BOTH areas. (c) Explain in one or
     two sentences why flat paper allows the two sizes but the ball
     doesn't.
 94. Design a world. You want a ball where the champion triangle
     (90°, 90°, 90°) has area exactly 36. (a) What is the champion's
     excess, in degrees and radians (π ≈ 3)? (b) Set up Girard's
     theorem and solve for R². (c) Find R, simplifying the root.
     (d) Check with the octant: compute the sphere's area and divide
     by 8.
 95. The hyperbolic ceiling. Work on the curvature −1 saddle.
     (a) What is the largest deficit a triangle can APPROACH (never
     reach)? (b) Hence the largest area? (c) Describe the triangle
     that comes closest — what happens to its angles and vertices?
     (d) Can a saddle triangle have area 2? If so, give its deficit
     in degrees and an example triple of angles that works.
 96. Circle showdown. On a ball of radius R = 6, consider the circle
     centered at the pole with surface radius reaching the equator.
     (a) Find r (π ≈ 3). (b) Compute the flat prediction 2πr.
     (c) Compute the true ball circumference. (d) State what a SADDLE
     world would give for the same r (no exact number needed — a
     comparison). (e) Explain why ONE circle measurement can separate
     all three worlds at once.
 97. The pole-to-pole trek. On a ball of radius R = 4, an explorer
     walks: south 1/4 of a full great circle, then east 1/8 of the
     equator, then north 1/4 of a great circle. (a) Does she return
     to her start? (b) What shape did she trace? (c) Find its three
     angles. (Hint: 1/8 of the equator is how many degrees of
     longitude?) (d) Find the excess. (e) Find the area enclosed.
     (Use π ≈ 3.)
 98. The map trap — open-ended! (a) On a rectangular world map, the
     South Pole — ONE point on the ball — becomes the entire bottom
     edge. Explain what that tells you about stretching near the
     poles. (b) Antarctica appears as a giant white smear wider than
     any other continent. Explain the illusion in a sentence or two.
     (c) Invent one clear rule for map-readers so they won't be
     fooled by places near the poles.
 99. Pentagon probe — compare approaches! (a) What is a flat
     pentagon's angle sum? Show the (n − 2) reasoning. (b) Explain
     why a ball pentagon does NOT have one fixed angle sum. (c) A
     ball pentagon on a ball of radius R = 2 has area 10. Split it
     into 3 triangles, use Girard on the TOTAL excess, and find its
     angle sum. (d) Compare with (a): does the answer fit the ball's
     "MORE" rule?
 100. The grand finale — build a world dossier! Choose the ball of
     radius R = 3. (a) For its champion triangle, compute ALL of:
     the three angles, the sum, the excess (degrees and radians,
     π ≈ 3), the side length, and the area. Show every step.
     (b) Verify the area a second way, using the sphere's area.
     (c) Design a circle test that would reveal this world, with
     numbers: pick the pole-centered circle reaching the equator,
     and compare the flat prediction with the truth. (d) One
     sentence: how could a tiny-triangle measurer on this very ball
     still grow up believing in Euclid?


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — the parallel counts (one, none, many), the angle sums (exactly 180°, more, or less), the area formulas (R² × E versus deficit), or which surface the problem was standing on.

Easy

  1–8:   a starting rule accepted without proof, so the game can
         begin  ·  Euclid  ·  postulate 5: through a point not on a
         line, exactly one parallel line  ·  about 2,000 years  ·
         no — nobody ever proved it from postulates 1–4  ·
         they dared to CHANGE the postulate and build new,
         contradiction-free geometries  ·  one → flat, none → ball,
         many → saddle  ·  true — they're two of the five dominoes:
         proving either one proves both

  9–16:  straightest-possible path (ant) = shortest path (string)  ·
         the geodesic — the shortest, straightest path  ·
         steering means turning; never steering means walking as
         straight as the surface allows — the definition of a
         geodesic  ·  great circles; their center is the ball's own
         center, making them the biggest circles on the ball  ·
         exactly one — the equator  ·  all of them  ·
         distance = πR/2 = 8π/2 = 4π ≈ 12  ·
         twice, at two antipodal points (opposite ends of a diameter)

 17–24:  exactly one  ·  none  ·  many  ·
         every two great circles meet (twice), so no line can avoid
         meeting another  ·  a two-sided polygon; flat lines meet at
         most once, so two flat sides can never close a figure  ·
         great circles meet TWICE (at both poles), closing a
         two-sided lune  ·
         (45°/360°) × 4πR² = (1/8) × 4π × 36 = (1/8) × 144π = 18π
         ≈ 54  ·  lune area = (θ/360°) × 4πR²

 25–32:  MORE than 180°  ·  E = (angle sum) − 180°  ·
         sum = 270°, excess = 270° − 180° = 90°  ·
         sum = 100° + 70° + 50° = 220°, excess = 220° − 180° = 40°  ·
         E = 230° − 180° = 50°  ·
         more than 15° (third > 180° − 100° − 65° = 15°)  ·
         the continent-sized one — bigger triangle, bigger excess  ·
         side = πR/2 = 12π/2 = 6π ≈ 18

 33–40:  on a ball of radius R, a triangle's area equals R² times
         its excess: area = R² × E (E in radians)  ·
         area ≈ R² × E°/60  ·
         E ≈ 60°/60 = 1 rad; area = 1² × 1 = 1  ·
         (a) E = 90° ≈ 1.5 rad; area = 4 × 1.5 = 6 (exactly 2π)
         (b) the champion is 1/8 of the sphere: sphere = 4π × 4 =
         16π ≈ 48, and 48/8 = 6 — agrees ✅  ·
         E ≈ 30°/60 = 0.5 rad; area = 9 × 0.5 = 4.5  ·
         E° = 60 × area/R² = 60 × 2/1 = 120°; sum = 180° + 120° =
         300°  ·
         yes — same angles give the same excess, and area = R² × E
         with the same R, so the areas match  ·
         no — same angles on a fixed ball force the same area, so a
         differently-sized copy can't exist

 41–48:  LESS than 180°  ·  D = 180° − (angle sum)  ·
         sum = 80° + 50° + 40° = 170°, deficit = 180° − 170° = 10°  ·
         D = 180° − 155° = 25°  ·
         less than 50° (third < 180° − 75° − 55° = 50°)  ·
         radians; area ≈ D°/60  ·
         D ≈ 90°/60 = 1.5 rad; area = 1.5  ·
         angle sums stay above 0°, so deficits stay below 180° =
         π ≈ 3 radians, so area = D stays below 3

 49–56:  flat  ·  200° → ball (excess 20°); 160° → saddle
         (deficit 20°)  ·  flat zero, ball positive, saddle
         negative  ·  K = E/area; on a ball K = 1/R²  ·
         E ≈ 90°/60 = 1.5 rad; K = 1.5/6 = 0.25; R² = 1/K = 4, so
         R = 2  ·  LESS than 2πr on a ball; MORE on a saddle  ·
         (a) r = πR/2 = 2π ≈ 6  (b) 2πr = 2π × 6 = 12π ≈ 36
         (c) the circle IS the equator: 2πR = 8π ≈ 24
         (d) ball — 24 comes out LESS than the flat 36  ·
         Einstein

 57–64:  it rips and cracks — proving a ball can't be flattened
         without stretching, so every whole-Earth flat map distorts
         something  ·  the regions nearest the poles  ·
         Africa is really about 14 times bigger than Greenland  ·
         the map is stretched; the shortest path on the ball (a great
         circle) draws as an arc on the distorted page  ·
         360° — a diagonal splits it into 2 triangles, and
         2 × 180° = 360°  ·  MORE — both of its two triangles carry
         excess, so the sum exceeds 2 × 180° = 360°  ·
         LESS — both triangles carry deficits  ·
         only flat: a rectangle needs 4 × 90° = 360° exactly, but
         ball quadrilaterals always exceed 360° and saddle ones fall
         short

 65–70:  (5 − 2) × 180° = 540°  ·  MORE than 540° (its three
         triangles each carry excess)  ·  true — straightest/shortest
         paths exist on any surface  ·  the equator  ·  GPS  ·
         no — the schoolyard is microscopic next to Earth, so the
         ball's excess (E = area/R²) is far too small to measure;
         180° is exactly what you'd expect

Intermediate

  71. (a) Sum = 80° + 70° + 60° = 210°. (b) E = 210° − 180° = 30°.
      (c) E ≈ 30°/60 = 0.5 rad; area = R² × E = 4 × 0.5 = 2 ✅
  72. (a) E ≈ 45°/60 = 0.75 rad; area = R² × E = 9 × 0.75 = 6.75.
      (b) Sum = 180° + 45° = 225° [excess definition, rearranged];
      third = 225° − 70° − 60° = 95° ✅
  73. (a) Girard flipped: E = area/R² = 8/16 = 0.5 rad ≈ 30°.
      (b) Sum = 180° + 30° = 210°. (c) Third = 210° − 90° − 80° =
      40° ✅
  74. Lune = (36°/360°) × 4πR² = (1/10) × 4π × 100 = (1/10) × 400π
      = 40π ≈ 120 ✅
  75. (a) E = 270° − 180° = 90°. (b) E ≈ 90°/60 = 1.5 rad; area =
      R² × E = 16 × 1.5 = 24. (c) Sphere = 4πR² = 4π × 16 = 64π ≈
      192; the champion is 1/8 of the sphere: 192/8 = 24. Both
      methods give 24 ✅
  76. (a) Deficit 40° means sum = 180° − 40° = 140°; third angle =
      140° − 60° − 50° = 30°. (b) Area = D ≈ 40°/60 = 2/3 ✅
  77. (a) E ≈ 120°/60 = 2 rad. (b) K = E/area = 2/18 = 1/9.
      (c) K = 1/R², so R² = 9 and R = 3 ✅
  78. (a) Team A: E ≈ 1 rad, so R_A² = area/E = 12/1 = 12 and
      R_A = √12 = 2√3 ≈ 3.5. Team B: E ≈ 0.5 rad, so R_B² =
      12/0.5 = 24 and R_B = √24 = 2√6 ≈ 4.9. (b) World B is bigger.
      Comparing R² first: 24/12 = 2, so R_B/R_A = √2 ≈ 1.4 — the
      radii differ by a factor of √2 ✅
  79. (a) Sum = 60° + 70° + 80° = 210°; E = 30° ≈ 0.5 rad; area =
      R² × E = 4 × 0.5 = 2. (b) Q's area is also 2 — same angles on
      the same ball give the same excess and the same R, hence the
      same area [Girard]. (c) On a ball, AAA forces congruence:
      you cannot make a bigger or smaller copy with the same
      angles — similarity (domino 5) is dead ✅
  80. (a) Ball quadrilaterals sum to MORE than 360°, so
      300° + (fourth) > 360°, hence the fourth angle > 60°.
      (b) The sum can approach 360° from above but never reach it —
      always strictly MORE ✅
  81. (a) r = πR/2 = 10π/2 = 5π ≈ 15. (b) Flat prediction:
      2πr = 2π × 15 = 30π ≈ 90. (c) The circle IS the equator:
      2πR = 20π ≈ 60. (d) 60 < 90 — the circle test reports BALL ✅
  82. (a) Greenland. (b) The map shows a 1:1 size ratio while the
      true ratio is 14:1, so Greenland was stretched about 14 times
      relative to Africa ✅
  83. (a) 90°, 90°, 40° [meridians cross the equator at right
      angles; pole angle given]. (b) Sum = 90° + 90° + 40° = 220°.
      (c) E = 220° − 180° = 40°. (d) E ≈ 40°/60 = 2/3 rad; area =
      R² × E = 36 × 2/3 = 24 ✅
  84. Step 1: Suppose a rectangle DID exist on a ball. [Proof by
      contradiction: assume the opposite and watch it break.]
      Step 2: Its angle sum would be 4 × 90° = 360°. [Definition of
      a rectangle.]
      Step 3: Cut it along a diagonal — you'd get two ball
      triangles. [A diagonal always splits a quadrilateral into two
      triangles.]
      Step 4: Each ball triangle sums to MORE than 180°. [Excess
      rule, Lesson 3.]
      Step 5: So the quadrilateral's sum must be MORE than 360°.
      [Two "more than 180°"s add to "more than 360°".]
      Step 6: Step 2 says exactly 360°; Step 5 says more than 360°.
      Contradiction — so the assumption was wrong: no rectangle
      exists on a ball. ✅
  85. True. Sum = 3 × 100° = 300°, which is MORE than 180°, so the
      ball's rule allows it. E = 300° − 180° = 120° ≈ 2 rad, so on a
      ball of radius R its area would be R² × 2 = 2R². (Ball
      "equilateral" triangles have angles BIGGER than 60° — the
      opposite of what flat paper trained you to expect!) ✅
  86. (a) Diameters of the disk, and arcs of circles that meet the
      boundary at right angles. (b) 90°. (c) No — the boundary
      represents points infinitely far away; the world is the
      disk's interior ✅
  87. Saddle. Check: 170° < 180° → skinny triangles ✅; circle test
      MORE than 2πr → saddle ✅; many parallels → saddle ✅. All
      three clues agree.
  88. Flat. Check: rectangles exist ONLY in flat worlds ✅; C = 2πr
      exactly means zero curvature ✅; K = 0 is the flat world's
      curvature ✅. All three clues agree.
  89. (a) E = (1/3) × 180° = 60°. (b) E ≈ 60°/60 = 1 rad; area =
      R² × E = 25 × 1 = 25. (c) Sum = 180° + 60° = 240° ✅
  90. Method (i), Girard: E = 270° − 180° = 90° ≈ 1.5 rad; area =
      R² × E = 36 × 1.5 = 54. Method (ii), fraction: sphere =
      4πR² = 4π × 36 = 144π ≈ 432; the champion is 1/8 of the
      sphere: 432/8 = 54. The methods AGREE (54 = 54) ✅. Girard's
      method works for ANY triangle, because it needs only the
      angles; the 1/8 trick works only for the champion, because
      only the champion tiles the sphere into 8 identical pieces.

Challenge

  91. (a) Sum = 90° + 80° + 70° = 240°. (b) E = 240° − 180° = 60°
      ≈ 60°/60 = 1 rad. (c) K = E/area = 1/8. (d) K = 1/R², so
      R² = 8 and R = √8 = √(4 × 2) = 2√2 ≈ 2.8. (e) Check:
      R² × E = 8 × 1 = 8 — matches the measured area ✅
  92. (a) Lune = (60°/360°) × 4πR² = (1/6) × 4π × 4 = (1/6) × 16π
      = 8π/3 ≈ 8. (b) Two congruent triangles — one in the northern
      hemisphere, one in the southern. (c) Each has angles 90°,
      90°, 60° [two equator corners plus the 60° pole angle];
      sum = 90° + 90° + 60° = 240°, so E = 240° − 180° = 60° ≈ 1
      rad; area = R² × E = 4 × 1 = 4.
      (d) 4 + 4 = 8, matching the lune's area from (a) ✅ — two
      independent computations, one answer.
  93. (a) Linear scale factor = 9/3 = 3; areas scale by 3² = 9 —
      T′ has 9 times the area. (b) Sum = 80° + 60° + 50° = 190°, so
      E = 10° ≈ 1/6 rad; EACH triangle has area = R² × E = 1 × 1/6
      = 1/6. Same angles, same area — both 1/6. (c) Flat paper has
      similarity (domino 5): same angles, any size. On a fixed ball,
      Girard makes the angles alone fix the area, so a bigger copy
      with the same angles cannot exist ✅
  94. (a) E = 270° − 180° = 90° = π/2 ≈ 1.5 rad. (b) Girard:
      36 = R² × 1.5, so R² = 36/1.5 = 24. (c) R = √24 = √(4 × 6)
      = 2√6 ≈ 4.9. (d) Sphere = 4πR² = 4π × 24 = 96π ≈ 288;
      champion = 1/8 of it = 288/8 = 36 — matches the design
      target ✅
  95. (a) The deficit approaches 180° (the sum approaches 0°, never
      reaching it). (b) So area = D approaches π ≈ 3 — never
      reached. (c) Its three angles all shrink toward 0° and its
      vertices fly off toward infinity; the "biggest" saddle
      triangle looks unbounded yet has area under 3. (d) Yes: area
      2 means deficit 2 rad ≈ 120°, so the sum is 180° − 120° =
      60° — for example angles 25°, 20°, 15° ✅
  96. (a) r = πR/2 = 6π/2 = 3π ≈ 9. (b) Flat prediction: 2πr =
      2π × 3π = 6π² ≈ 54. (c) True circumference: the circle is
      the equator, 2πR = 12π ≈ 36. (d) A saddle world would give
      MORE than 54 — ruffled surfaces pack extra circle into the
      same radius. (e) One measurement, three signatures: less than
      2πr → ball, exactly 2πr → flat, more than 2πr → saddle. The
      same r gives three different answers, so one circle separates
      all three worlds at once ✅
  97. (a) Yes — the northward leg returns her to the North Pole.
      (b) A triangle: two meridians and an equator arc. (c) 1/8 of
      the equator = 360°/8 = 45° of longitude, so the pole angle is
      45°; the two equator corners are 90° each: 90°, 90°, 45°.
      (d) Sum = 225°; E = 225° − 180° = 45°. (e) E ≈ 45°/60 =
      0.75 rad; area = R² × E = 16 × 0.75 = 12 ✅
  98. (a) A single point stretching into an edge thousands of miles
      long means the stretching near the poles is infinite — the
      map tears the ball's geometry there. (b) Antarctica hugs the
      South Pole, the most stretched region of all, so it gets
      smeared into a giant band; near-equator continents stay
      honest. (c) Sample rules: "never compare the sizes of places
      at different latitudes," or "trust shapes near the equator,
      distrust everything near the top and bottom edges," or
      "remember the bottom edge is secretly one point." Any rule
      that respects the pole-stretch works ✅
  99. (a) Split the pentagon from one vertex into 3 triangles:
      sum = 3 × 180° = (5 − 2) × 180° = 540°. (b) On a ball, each
      of those 3 triangles carries its own excess, and the excesses
      ADD — so the pentagon's sum is 540° + (total excess), which
      depends on its size, not just on having 5 sides. (c) Total
      excess = area/R² [Girard applied to all 3 triangles and
      added] = 10/4 = 2.5 rad ≈ 2.5 × 60° = 150°. Sum = 540° +
      150° = 690°. (d) 690° > 540° — MORE than flat, exactly as the
      ball's rule demands ✅
 100. (a) Angles: 90°, 90°, 90° [pole, equator, pole]. Sum = 270°.
      E = 270° − 180° = 90° ≈ 1.5 rad. Side length = πR/2 =
      3π/2 ≈ 4.5. Area = R² × E = 9 × 1.5 = 13.5. (b) Sphere =
      4πR² = 4π × 9 = 36π ≈ 108; champion = 1/8 of the sphere =
      108/8 = 13.5 — the two methods agree ✅. (c) Circle test:
      take r = pole-to-equator distance = 3π/2 ≈ 4.5. Flat
      prediction: 2πr = 2π × 4.5 = 9π ≈ 27. Truth: the circle is
      the equator, 2πR = 6π ≈ 18. Since 18 < 27, the test reports
      BALL ✅. (d) Tiny triangles have excess E = area/R² = area/9,
      which is microscopically small for schoolyard-sized triangles
      — so every sum anyone measured looked like exactly 180°, and
      Euclid's flat rule felt like the only rule.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you truly understand non-Euclidean geometry — why one changed postulate creates three worlds, why ball triangles are fat and saddle triangles are skinny, why AREA ITSELF is measured in degrees of excess or deficit, why a single triangle can reveal the radius of a planet, and why flat maps can't help but stretch the truth. For 2,000 years, the greatest minds insisted Euclid's rules were the only possible ones. You now know better — and you have the formulas to prove it. The next time you see a plane's curved route on a flight map, smile: it's flying a straight line on a round world, and you can compute with exactly the geometry it's using. Great work!
