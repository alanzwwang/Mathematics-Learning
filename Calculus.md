Calculus — The Complete Honors Lesson
═════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        f'(x) = lim (h → 0) of  [ f(x + h) − f(x) ] ÷ h

        1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1) ÷ 6

        ∫₀³ x² dx = 9   —  one line, thanks to the Fundamental Theorem

Those three lines are real calculus — the early-college kind. The first is the definition of the derivative: the machine that answers "how fast is this changing right now?" with an exact number. The second is a formula that will let us add up infinitely many skinny rectangles and compute a curvy area exactly. The third is the Fundamental Theorem of Calculus — the discovery that slope questions and area questions are secretly the same question in disguise. Right now those lines might look intimidating. That's okay! By the end of this lesson you will understand every symbol — and you will have DERIVED all three, not just memorized them.

Why do people care? Because calculus is the math of change, and the modern world runs on it: rocket trajectories, bridge engineering, drug concentrations in your bloodstream, pricing strategy, disease models, the physics inside every video game. Newton and Leibniz built the first version about 350 years ago — but the version you'll learn here is the rigorous one, polished by three more centuries of mathematicians who insisted on knowing exactly WHY it works.

The deal this lesson makes with you: no formula appears out of thin air. When you meet the power rule, you will watch it pop out of the algebra. When you meet the Fundamental Theorem, you will see why it MUST be true. That is what makes this the honors version — and honestly, the fun version.

In this lesson, you will:

  1. Meet the two big questions — instantaneous rate and accumulated total
  2. Master average rate of change, the Δ notation, and the secant line
  3. Learn limits rigorously: the tolerance game, one-sided limits, 0/0 forms, limits at infinity
  4. Define the derivative — and derive the power rule yourself
  5. Write equations of tangent lines, and find where derivatives fail
  6. Derive the product, quotient, and chain rules
  7. Read the derivative's diary: increasing, decreasing, concavity, the second derivative
  8. Solve real optimization problems — fences, boxes, and five-digit profits
  9. Compute the area under y = x² exactly, as a limit of rectangle sums
 10. Unlock the Fundamental Theorem of Calculus — and use it in both directions
 11. Dodge the classic mistakes that trip up even college students
 12. Practice with 100 problems, from warm-ups to genuine brain-benders!

How to use this lesson: Read the sections in order — every idea is built from the one before it, and every worked example shows EVERY step with a short reason. Keep pencil and paper next to you, and try every "Your Turn" box before peeking at its answer. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: The Two Big Questions — Rate and Accumulation
─────────────────────────────────────────────

📌 Key idea of this section:

        Every calculus question is one of two:
        the INSTANTANEOUS RATE — how fast is it changing right now?
        the ACCUMULATED TOTAL — how much has piled up so far?

Two instruments in a car

Picture the dashboard of a car. Two instruments sit in front of the driver:

        speedometer  →  HOW FAST am I going right this second?
        odometer     →  HOW FAR have I gone in total?

They sound like the same question, but they are not — and telling them apart is the first step of calculus. The speedometer needle jumps around: 0 at a red light, 86 on the highway. The odometer never jumps and never goes down: it just slowly piles up the total distance. And the two are secretly connected: drive fast and the odometer spins quickly; stop and the odometer freezes. Each instrument knows what the other is doing.

The upgrade: functions and the Δ notation

Grown-up calculus talks about the dashboard with functions. Let:

        s(t) = the odometer reading at time t   (s for "space", position)
        v(t) = the speedometer reading at time t (v for velocity)

Both are functions: put a time in, get exactly one number out. When a quantity changes, mathematicians write the change with the Greek letter Δ (capital delta), which always means "the difference":

        Δs = s(t₂) − s(t₁)    (how much the position changed)
        Δt = t₂ − t₁          (how much time passed)

Worked example — a real trip with real numbers. Your odometer reads 45,210 km at noon and 45,468 km at 3:00 PM. How far, and how fast on average?

        Step 1: Δs = 45,468 − 45,210 = 258 km   (subtract the readings)
        Step 2: Δt = 3 h                         (noon to 3 PM)
        Step 3: average rate = Δs ÷ Δt = 258 ÷ 3 = 86 km/h

But here is the question that starts all of calculus: what did the speedometer read at exactly 1:30 PM? The average cannot say — you could have cruised at 86 the whole time, or sped at 110 and then sat in traffic. The average squashes the adventure into one number and hides the drama. Catching the needle at one instant takes a shrinking window — that is Lesson 4's derivative.

Not just cars

The two questions hide everywhere:

  · A water tank: V(t) = how much water is inside (a total); R(t) = how fast it is filling, in liters per minute (a rate).
  · A factory: the total cost so far (accumulation); the cost per extra unit produced (a rate — economists call it the marginal cost).
  · You!: your height (a total that piled up over years); your growth speed in cm per year (a rate).

The fancy names

        The answer to a HOW FAST question is called a derivative.
        The answer to a HOW MUCH question is called an integral.
        The tool that makes both possible is called a limit — Lesson 3.

Now you can honestly say at dinner: "Today I learned what a derivative and an integral are."

✏️ Your Turn

A delivery van's odometer reads 12,040 km at 9:00 AM and 12,400 km at 1:00 PM. (a) Find Δs and Δt. (b) Find the average rate. (c) Name one question this data CANNOT answer.

Answers: (a) Δs = 12,400 − 12,040 = 360 km; Δt = 4 h. (b) 360 ÷ 4 = 90 km/h. (c) Anything about one instant — for example, the exact speed at 10:00 AM. Averages hide the drama; only a shrinking window (the derivative) can catch it.


─────────────────────────────────────────────
Lesson 2: Average Rate of Change and the Secant Line
─────────────────────────────────────────────

📌 Key idea of this section:

        average rate of change of f from a to b
            = (f(b) − f(a)) ÷ (b − a)
            = the slope of the secant line through the two endpoints

From trips to functions

The car idea works for ANY function. Pick two x-values, call them a and b (mathematicians write the interval between them as [a, b] — the square brackets mean both endpoints are included). Measure how much f changes and divide by how much x changed:

        average rate of change = (f(b) − f(a)) ÷ (b − a) = Δy ÷ Δx

That number has a picture: draw the straight line through the two points (a, f(a)) and (b, f(b)). It is called a secant line (secant is Latin-flavored for "cutting" — the line cuts the curve twice), and the average rate of change IS its slope, because slope is rise ÷ run = Δy ÷ Δx.

Worked example 1 — a curvy function. Find the average rate of change of f(x) = x² + 3x on [1, 4]:

        Step 1: f(4) = 4² + 3×4 = 16 + 12 = 28   (plug in the right endpoint)
        Step 2: f(1) = 1² + 3×1 = 1 + 3 = 4      (plug in the left endpoint)
        Step 3: Δy = 28 − 4 = 24                 (how much f changed)
        Step 4: Δx = 4 − 1 = 3                   (how much x changed)
        Step 5: average rate = 24 ÷ 3 = 8        (rise ÷ run)

So the secant line through (1, 4) and (4, 28) has slope 8 — even though the curve's own steepness keeps changing the whole way. The secant is the "as if it were steady" version of the curve.

Worked example 2 — big real data. A town grows from 12,400 people to 18,700 people over 5 years:

        Step 1: Δ(population) = 18,700 − 12,400 = 6,300 people
        Step 2: Δt = 5 years
        Step 3: average rate = 6,300 ÷ 5 = 1,260 people per year

That does NOT mean exactly 1,260 arrived each year — some years boomed, some years shrank. It means: a perfectly steady 1,260 per year would have produced the same total change.

Worked example 3 — a negative rate. Find the average rate of change of f(x) = 20 − x² on [1, 3]:

        Step 1: f(3) = 20 − 9 = 11
        Step 2: f(1) = 20 − 1 = 19
        Step 3: Δy = 11 − 19 = −8     (f went DOWN — the change is negative)
        Step 4: Δx = 3 − 1 = 2
        Step 5: average rate = −8 ÷ 2 = −4

A negative rate means the function is falling on average over that window — the secant line runs downhill.

Shrinking the window

Now the move that launches calculus: keep a fixed, and slide b closer and closer to a. The secant line pivots, hugging the curve tighter and tighter, and its slope creeps toward a single number — the slope AT the point a. That number is the instantaneous rate of change, and Lesson 4 will compute it exactly. But first we need to say precisely what "creeps toward" means. That is Lesson 3.

✏️ Your Turn

Find the average rate of change of f(x) = x² + 1 on [1, 5], and say which line has that slope.

Answer: f(5) = 25 + 1 = 26; f(1) = 1 + 1 = 2; Δy = 26 − 2 = 24; Δx = 5 − 1 = 4; average rate = 24 ÷ 4 = 6. It is the slope of the secant line through (1, 2) and (5, 26).


─────────────────────────────────────────────
Lesson 3: Limits — The Tolerance Game
─────────────────────────────────────────────

📌 Key idea of this section:

        lim (x → a) f(x) = L  means:
        f(x) gets within ANY tolerance of L
        whenever x is close enough to a (with x ≠ a).

The notation and the idea

Mathematicians write lim (x → a) f(x) = L and say "the limit of f(x), as x approaches a, is L." The arrow means "gets closer and closer to." For example:

        lim (x → 2) of 3x = 6

because as x slides toward 2, 3x slides toward 6. Nothing surprising yet — but watch what "slides toward" really means, because that is the rigorous heart of calculus.

The tolerance game

Here is the precise test, played as a game between you and me. You challenge me with any error tolerance you like — say 0.1. To win, I must keep 3x within 0.1 of 6 by keeping x close enough to 2. Watch:

        Step 1: I need |3x − 6| < 0.1        (your tolerance demand)
        Step 2: 3x − 6 = 3(x − 2), so I need 3|x − 2| < 0.1   (factor out the 3)
        Step 3: dividing by 3: |x − 2| < 1/30  (my winning strategy!)

So if x stays within 1/30 of 2, the output stays within 0.1 of 6. Now you get tougher: tolerance 0.001. Same algebra gives |x − 2| < 1/3000 — I still win. No matter how tiny your tolerance, I have a comeback. THAT is what makes the limit exactly 6 — not approximately, exactly.

Mathematicians call your tolerance ε (the Greek letter epsilon) and my comeback distance δ (delta). You have just learned the famous ε-δ game in disguise — the rigorous floor underneath all of calculus, usually not met until college.

The limit is about the approach, not the landing

Notice the fine print: x ≠ a. A limit asks what happens as x gets CLOSE to a — it does not care what happens AT a, or whether f(a) even exists. That freedom is exactly what we need, because the most interesting limits happen where the formula itself breaks.

Worked example — the 0/0 rescue. Find lim (x → 3) of (x² − 9)/(x − 3):

        Step 1: try plugging in x = 3: top is 9 − 9 = 0, bottom is 3 − 3 = 0.
                We get 0/0 — undefined as a VALUE. But the limit question is still alive!
        Step 2: factor the top (difference of squares): x² − 9 = (x − 3)(x + 3)
        Step 3: cancel (x − 3) top and bottom. Legal! On the approach x ≠ 3,
                so we are never dividing by zero: we are left with x + 3.
        Step 4: now let x → 3: the limit is 3 + 3 = 6.

A ratio that comes out 0/0 is called an indeterminate form — not an answer, just a signal: simplify first, then decide. Factoring is the master key.

Worked example — the derivative machine, previewed. Find lim (h → 0) of ((2 + h)² − 4)/h:

        Step 1: expand the square: (2 + h)² = 4 + 4h + h²
        Step 2: the numerator is 4 + 4h + h² − 4 = 4h + h²   (the 4's cancel)
        Step 3: factor out h: h(4 + h) ÷ h = 4 + h           (h ≠ 0 on the approach)
        Step 4: let h → 0: the limit is 4.

Remember this shape — in Lesson 4 you will meet it wearing a name tag: "derivative of x² at x = 2."

One-sided limits — and when a limit does not exist

Sometimes the approach from the left and from the right disagree. We write x → 5⁻ for "approaches 5 from below" and x → 5⁺ for "from above." A shipping company charges 4x dollars for a package of x kg up to and including 5 kg — and slaps on a $10 heavy surcharge above 5 kg, so the price is 4x + 10 for x > 5:

        lim (x → 5⁻) of the price = 4 × 5 = 20        (approaching from the light side)
        lim (x → 5⁺) of the price = 4 × 5 + 10 = 30   (approaching from the heavy side)

Left says 20, right says 30. When the two one-sided limits disagree, the two-sided limit DOES NOT EXIST (write DNE). The graph has a jump at 5 — and a limit cannot settle on two numbers at once.

Limit laws — limits love arithmetic

If the pieces have limits, you can combine them the way you expect:

        sum:        lim (f + g) = lim f + lim g
        difference: lim (f − g) = lim f − lim g
        product:    lim (f × g) = (lim f) × (lim g)
        quotient:   lim (f ÷ g) = (lim f) ÷ (lim g)   — only if lim g ≠ 0!

Each one says the same thing: limits commute with arithmetic, as long as you never divide by zero. That is why plugging in works for nice functions like polynomials — their limits are exactly their values.

Limits at infinity

One more flavor: x → ∞ asks what happens as x grows without bound. Find lim (x → ∞) of (5x² + 3x)/(2x² + 1):

        Step 1: divide top and bottom by x², the highest power in sight:
                (5x² + 3x)/(2x² + 1) = (5 + 3/x)/(2 + 1/x²)
        Step 2: as x → ∞, the pieces 3/x and 1/x² shrink to 0
        Step 3: the limit is (5 + 0)/(2 + 0) = 5/2

The graph of this function creeps toward the horizontal line y = 5/2 — a horizontal asymptote: a wall the curve approaches forever but is not required to touch.

✏️ Your Turn

(a) Find lim (x → 4) of (x² − 16)/(x − 4). (b) Find lim (x → ∞) of (3x² + x)/(6x² + 1).

Answers: (a) Plugging in gives 0/0, so factor: x² − 16 = (x − 4)(x + 4); cancel (x − 4); left with x + 4 → 4 + 4 = 8. (b) Divide top and bottom by x²: (3 + 1/x)/(6 + 1/x²) → 3/6 = 1/2.


─────────────────────────────────────────────
Lesson 4: The Derivative — Defined and Derived
─────────────────────────────────────────────

📌 Key idea of this section:

        f'(x) = lim (h → 0) of  [ f(x + h) − f(x) ] ÷ h

        The derivative is the slope of the tangent line —
        the secant slope after the window shrinks to nothing.

The definition

Here is the machine the whole course runs on. To find the slope of a curve at the point x, look at a nearby point x + h (h is the window width — a small step forward). The slope of the secant line between them is:

        [ f(x + h) − f(x) ] ÷ h        ← the difference quotient (rise ÷ run)

Now shrink the window: let h → 0. The secants pivot toward the tangent line, and the quotient creeps toward one exact number — the derivative of f at x, written f'(x) (read "f prime of x"):

        f'(x) = lim (h → 0) of  [ f(x + h) − f(x) ] ÷ h

That one line is three ideas fused: Lesson 2's average rate, Lesson 3's limit, and the tangent slope. Now let's run the machine — slowly, with every step.

Derivation 1 — the derivative of x². Let f(x) = x²:

        Step 1: f(x + h) = (x + h)² = x² + 2xh + h²     (expand the square)
        Step 2: f(x + h) − f(x) = 2xh + h²              (subtract x² — it cancels!)
        Step 3: divide by h: (2xh + h²) ÷ h = 2x + h    (every term has an h to give)
        Step 4: take the limit as h → 0: 2x + h → 2x    (the lone h dies)

        So the derivative of x² is 2x.  f'(x) = 2x.

Read what this says: the slope of y = x² at any point x is exactly 2x. At x = 1 the slope is 2; at x = 3 the slope is 6; at x = 0 the slope is 0 — the curve is perfectly level at the bottom of its bowl. All from four lines of algebra.

Derivation 2 — the derivative of x³. Let f(x) = x³. We need (x + h)³, which Pascal's Triangle row "1 3 3 1" hands us:

        Step 1: (x + h)³ = x³ + 3x²h + 3xh² + h³
        Step 2: f(x + h) − f(x) = 3x²h + 3xh² + h³      (the x³ cancels)
        Step 3: divide by h: 3x² + 3xh + h²             (each term gives up one h)
        Step 4: limit as h → 0: the terms 3xh and h² die → 3x²

        So the derivative of x³ is 3x².  f'(x) = 3x².

The pattern — and why it always works

Look at the trophies: x² → 2x and x³ → 3x². The exponent hops down in front, and the power drops by one. This is the power rule:

        d/dx of xⁿ = n·xⁿ⁻¹

Why does it hold for EVERY n? Run the same four steps on xⁿ. The binomial expansion (Pascal's Triangle again — row n starts 1, n, ...) says:

        (x + h)ⁿ = xⁿ + n·xⁿ⁻¹h + (terms with h², h³, ..., hⁿ)

        Step 2: subtract xⁿ:   n·xⁿ⁻¹h + (terms with h² or higher)
        Step 3: divide by h:   n·xⁿ⁻¹ + (terms that still contain h)
        Step 4: limit as h → 0: every leftover term has an h, so they ALL die → n·xⁿ⁻¹

That is the whole secret: the xⁿ cancels, the second term survives the division, and everything from h² upward is washed away by the limit. The rule is not a coincidence — it is the shape of the binomial expansion.

Three more rules, all derivable in one breath

        Constant rule: if f(x) = c (a flat line), then
        f(x + h) − f(x) = c − c = 0, so f'(x) = 0. Flat graph, zero slope. ✅

        Constant multiple rule: (c·f)' = c·f'. The difference quotient for c·f is
        c·[f(x + h) − f(x)] ÷ h — the c just rides along and out the limit.

        Sum rule: (f + g)' = f' + g'. Split the difference quotient into two
        fractions, one for f and one for g, and each becomes its own derivative.

Worked example — a full polynomial. Differentiate f(x) = 4x³ − 5x² + 7x − 2, term by term:

        4x³  →  4 × 3x²  = 12x²     (power rule, then the 4 rides along)
        −5x² →  −5 × 2x  = −10x     (same idea)
        7x   →  7 × 1    = 7        (x is x¹, and 1 × x⁰ = 1)
        −2   →  0                   (a constant has no slope)

        f'(x) = 12x² − 10x + 7

And we can evaluate the slope anywhere. At x = 2: f'(2) = 12×4 − 10×2 + 7 = 48 − 20 + 7 = 35. The curve is climbing 35 units of height per unit of forward at that spot — steep!

A second notation worth knowing: Leibniz wrote the derivative as dy/dx — a fossil of Δy/Δx after the window shrank to nothing. When you see d/dx in front of a function (like d/dx of xⁿ above), read it as "take the derivative of what comes next."

✏️ Your Turn

Differentiate f(x) = 2x³ + 5x² − 4x + 9, then find f'(1).

Answer: 2x³ → 6x²; 5x² → 10x; −4x → −4; 9 → 0. So f'(x) = 6x² + 10x − 4. Then f'(1) = 6 + 10 − 4 = 12.


─────────────────────────────────────────────
Lesson 5: Tangent Lines — and Where Derivatives Fail
─────────────────────────────────────────────

📌 Key idea of this section:

        The tangent line at x = a is:  y = f(a) + f'(a)(x − a)
        (the point, plus the slope, in point-slope form).
        Corners and jumps have NO tangent line — no derivative.

The tangent recipe

A line is pinned down by two facts: one point it passes through, and its slope. For the tangent line to a curve at x = a we know both:

        the point:  (a, f(a))          — the line must touch the curve there
        the slope:  f'(a)              — the derivative does the measuring

Point-slope form says a line through (x₁, y₁) with slope m is y = y₁ + m(x − x₁). Substituting our two facts:

        tangent line:  y = f(a) + f'(a)(x − a)

Worked example 1 — f(x) = x² at x = 3:

        Step 1: the point: f(3) = 9, so the line passes through (3, 9)
        Step 2: the slope: f'(x) = 2x, so f'(3) = 6
        Step 3: assemble: y = 9 + 6(x − 3) = 9 + 6x − 18 = 6x − 9
        Step 4: sanity check — at x = 3 the line gives 6×3 − 9 = 9 ✅
                (the line must actually touch the curve at the touching point!)

Worked example 2 — f(x) = x³ − 2x at x = 2:

        Step 1: f(2) = 8 − 4 = 4, so the point is (2, 4)
        Step 2: f'(x) = 3x² − 2, so f'(2) = 3×4 − 2 = 10
        Step 3: y = 4 + 10(x − 2) = 4 + 10x − 20 = 10x − 16
        Step 4: check at x = 2: 10×2 − 16 = 4 ✅

Where derivatives fail: the corner

Differentiation has a built-in lie detector: the limit must exist. Watch it fire. Take f(x) = |x| — the V-shaped graph with a sharp corner at 0 — and try the difference quotient at x = 0:

        from the right (h > 0):  (|0 + h| − |0|) ÷ h = h ÷ h = 1
        from the left (h < 0):   (|h|) ÷ h = (−h) ÷ h = −1     (|h| = −h when h < 0)

The right-side limit is 1; the left-side limit is −1. Lesson 3 taught us what happens when left and right disagree: the limit DOES NOT EXIST. So f'(0) does not exist — geometrically, a corner cannot be kissed by just one tangent line. Infinitely many lines through the corner touch the V without crossing it, and none is THE tangent.

A function that has a derivative at every point we care about is called differentiable (smooth, no corners, no jumps). A jump is even worse news: across a jump the difference quotient explodes to infinity, so differentiability automatically requires continuity (an unbroken graph). Smooth curves are the natural home of calculus.

✏️ Your Turn

Find the tangent line to f(x) = x² − 3x at x = 4.

Answer: f(4) = 16 − 12 = 4, so the point is (4, 4). f'(x) = 2x − 3, so f'(4) = 8 − 3 = 5. Tangent: y = 4 + 5(x − 4) = 5x − 16. Check: 5×4 − 16 = 4 ✅.


─────────────────────────────────────────────
Lesson 6: The Rules Toolkit — Product, Quotient, Chain
─────────────────────────────────────────────

📌 Key idea of this section:

        product rule:  (f·g)' = f'·g + f·g'
        quotient rule: (f/g)' = (f'·g − f·g') ÷ g²
        chain rule:    dy/dx = (dy/du) × (du/dx)   — rates multiply

        None of these is "the obvious guess" — each has a derivation.

The product rule, derived

Guess check: is the derivative of a product just the product of the derivatives? Test on x²·x³ = x⁵: the guess gives 2x × 3x² = 6x⁵, but the power rule gives 5x⁵. The guess FAILS — 6 ≠ 5. So products need their own rule. Here is where it comes from. Start the difference quotient for the product f·g:

        [ f(x + h)·g(x + h) − f(x)·g(x) ] ÷ h

Now the classic trick: add and subtract f(x)·g(x + h) in the numerator (adding zero — legal, and it lets us factor):

        Step 1: numerator = f(x + h)g(x + h) − f(x)g(x + h) + f(x)g(x + h) − f(x)g(x)
        Step 2: factor in pairs:
                = g(x + h)·[ f(x + h) − f(x) ]  +  f(x)·[ g(x + h) − g(x) ]
        Step 3: divide by h and let h → 0: the first bracket becomes f'(x)
                (with g(x + h) → g(x)); the second becomes g'(x).

        Result:  (f·g)' = f'·g + f·g'

Read it as a story: the two factors take turns changing — first f changes while g holds still, then g changes while f holds still.

Worked example — the lie detector passes. d/dx of (x²·x³):

        = (2x)(x³) + (x²)(3x²) = 2x⁵ + 3x⁵ = 5x⁵ ✅  — matches the power rule on x⁵!

Worked example — f(x) = (3x + 1)(x² − 4):

        Step 1: f' = 3·(x² − 4) + (3x + 1)·(2x)      (first derivative×second + first×second derivative)
        Step 2: = 3x² − 12 + 6x² + 2x                 (expand both products)
        Step 3: = 9x² + 2x − 12                       (collect like terms)
        Check by expanding first: (3x + 1)(x² − 4) = 3x³ + x² − 12x − 4,
        and its derivative is 9x² + 2x − 12 ✅. Two roads, same city.

The reciprocal, from scratch — d/dx of 1/x:

        Step 1: difference quotient: [ 1/(x + h) − 1/x ] ÷ h
        Step 2: common denominator on top: [ x − (x + h) ] ÷ [ x(x + h) ] ÷ h
        Step 3: the top is −h: [ −h ÷ (x(x + h)) ] ÷ h = −1 ÷ [ x(x + h) ]
        Step 4: limit as h → 0: −1 ÷ x²

So d/dx of x⁻¹ is −x⁻² — the power rule works for the negative exponent n = −1 too! (It works for ALL real n, in fact.)

The quotient rule

Division is multiplication by a reciprocal, so the product rule plus the reciprocal rule gives (the full derivation is challenge problem 80):

        (f/g)' = (f'·g − f·g') ÷ g²      ("low dee-high minus high dee-low, over low squared")

Worked example — d/dx of x²/(x + 1):

        Step 1: = [ 2x·(x + 1) − x²·1 ] ÷ (x + 1)²     (f'g − fg', over g²)
        Step 2: top = 2x² + 2x − x² = x² + 2x          (expand, then collect)
        Step 3: answer: (x² + 2x) ÷ (x + 1)²

The chain rule — rates multiply

Suppose y depends on u, and u depends on x. If y changes 3 times as fast as u (dy/du = 3), and u changes 2 times as fast as x (du/dx = 2), then y changes 3 × 2 = 6 times as fast as x. A gear train! That is the chain rule:

        dy/dx = (dy/du) × (du/dx)

In practice: differentiate the OUTSIDE, leaving the inside untouched, then multiply by the derivative of the INSIDE.

Worked example — two ways, same answer. h(x) = (2x + 3)²:

        Chain rule way: outside is (something)², derivative 2×(something);
        inside is 2x + 3, derivative 2.
                h'(x) = 2(2x + 3) × 2 = 4(2x + 3) = 8x + 12
        Expand-first way: (2x + 3)² = 4x² + 12x + 9 → h'(x) = 8x + 12 ✅

Worked example — where expanding would be a nightmare. h(x) = (5x² − 2x + 1)³:

        Step 1: outside: (stuff)³ → 3(stuff)²
        Step 2: inside: 5x² − 2x + 1 → 10x − 2
        Step 3: h'(x) = 3(5x² − 2x + 1)²(10x − 2)     (one line — the chain rule's power)

Bonus derivation — d/dx of √x (the conjugate trick):

        Step 1: difference quotient: [ √(x + h) − √x ] ÷ h
        Step 2: multiply top and bottom by √(x + h) + √x (the conjugate):
                top becomes (x + h) − x = h   [since (A − B)(A + B) = A² − B²]
        Step 3: = h ÷ [ h·(√(x + h) + √x) ] = 1 ÷ (√(x + h) + √x)
        Step 4: limit as h → 0: 1 ÷ (2√x)

And the power rule with n = 1/2 predicts exactly that: (1/2)x⁻¹ᐟ² = 1/(2√x) ✅. The pattern survives even fractional exponents.

✏️ Your Turn

Differentiate f(x) = (x² + 1)(x − 2) by the product rule, then check by expanding.

Answer: product rule: 2x(x − 2) + (x² + 1)(1) = 2x² − 4x + x² + 1 = 3x² − 4x + 1. Expanding: (x² + 1)(x − 2) = x³ − 2x² + x − 2, whose derivative is 3x² − 4x + 1 ✅.


─────────────────────────────────────────────
Lesson 7: The Derivative's Diary — Reading f' and f''
─────────────────────────────────────────────

📌 Key idea of this section:

        f' > 0: the curve is climbing.   f' < 0: falling.
        f' = 0: level ground — a critical point (maybe a peak or valley).
        f'' > 0: concave up (a cup ∪).   f'' < 0: concave down (a cap ∩).

Critical points

A derivative is a slope-meter, so its sign is the curve's diary: positive means climbing, negative means falling. The interesting moments are the level ones:

        A CRITICAL POINT of f is an x where f'(x) = 0 or f'(x) does not exist.

Peaks (local maxima) and valleys (local minima) can only happen at critical points — a hilltop has to be level (or pointed, like |x|). But careful: not every critical point is a peak or valley. We will meet the exception soon.

Worked example — a full analysis of f(x) = x³ − 12x + 5:

        Step 1: f'(x) = 3x² − 12. Solve f'(x) = 0:
                3x² − 12 = 0  →  3(x² − 4) = 0  →  x² = 4  →  x = −2 or x = 2.
        Step 2: sign test — sample one x in each region:
                x = −3:  f'(−3) = 3×9 − 12 = 15 > 0   → climbing
                x = 0:   f'(0) = −12 < 0              → falling
                x = 3:   f'(3) = 15 > 0               → climbing
        Step 3: read the diary: climbing, then falling, then climbing.
                So x = −2 is a peak (climb → fall) and x = 2 is a valley (fall → climb).
        Step 4: find the heights: f(−2) = −8 + 24 + 5 = 21  (peak at (−2, 21))
                                f(2) = 8 − 24 + 5 = −11     (valley at (2, −11))

The second derivative

The derivative of the derivative, f''(x) (read "f double prime"), measures how the SLOPE is changing — the curve's concavity, which way it bends:

        f'' > 0: slopes are increasing — the curve bends up like a cup ∪
        f'' < 0: slopes are decreasing — the curve bends down like a cap ∩

That gives a one-step classifier, the second derivative test: at a critical point, f'' > 0 means a valley (cup) and f'' < 0 means a peak (cap). Watch it confirm our example:

        f''(x) = 6x
        f''(−2) = −12 < 0  →  cap  →  peak ✅
        f''(2)  =  12 > 0  →  cup  →  valley ✅

The exception that keeps you honest: f(x) = x³ has f'(0) = 0 — level ground! — but f' = 3x² ≥ 0 on BOTH sides, so the curve climbs, pauses level for an instant, and climbs on. No peak, no valley. Its f'' = 6x changes sign at x = 0: the bend switches from cap to cup. A point where the concavity flips is called an inflection point — and f'(a) = 0 with a sign flip of f'' is a level inflection point, not a max or min. (Mistake 6 in Lesson 11!)

Physics footnote: if s(t) is position, then s'(t) = v(t) is velocity and s''(t) = v'(t) = a(t) is acceleration — the rate of change of the rate of change. You feel acceleration in your stomach on a roller coaster; you are feeling s''.

✏️ Your Turn

Find the critical points of f(x) = x³ − 3x² and classify each with the second derivative test.

Answer: f'(x) = 3x² − 6x = 3x(x − 2), so x = 0 and x = 2. f''(x) = 6x − 6. f''(0) = −6 < 0 → peak, f(0) = 0. f''(2) = 12 − 6 = 6 > 0 → valley, f(2) = 8 − 12 = −4. Peak at (0, 0), valley at (2, −4).


─────────────────────────────────────────────
Lesson 8: Optimization — Finding the Best Possible Answer
─────────────────────────────────────────────

📌 Key idea of this section:

        To maximize or minimize: build ONE formula for the quantity,
        solve its derivative = 0, and VERIFY — check the second
        derivative and the endpoints.

The game plan

Optimization is calculus earning its paycheck. Four steps, every time:

        Step 1: name variables and write the quantity you want to max/min.
        Step 2: use the constraint (the fixed budget, fence, volume...) to
                reduce to ONE variable — and note the allowed interval.
        Step 3: differentiate and solve derivative = 0.
        Step 4: verify it is really the best: second derivative test,
                and compare with the endpoints.

Worked example 1 — the fence against the wall. A farmer has 2,400 m of fencing for a rectangular pen, and a long stone wall forms one whole side (no fence needed there). What is the largest area she can enclose?

        Step 1: let x = each of the two sides perpendicular to the wall,
                and L = the side parallel to the wall. Maximize A = x·L.
        Step 2: the fence budget: 2x + L = 2,400, so L = 2,400 − 2x.
                Then A(x) = x(2,400 − 2x) = 2,400x − 2x².
                Allowed interval: 0 ≤ x ≤ 1,200 (at x = 1,200 the fence is all
                used by the two x-sides, leaving L = 0).
        Step 3: A'(x) = 2,400 − 4x = 0  →  4x = 2,400  →  x = 600.
        Step 4: verify: A''(x) = −4 < 0 → a cap → a MAX ✅.
                Endpoints: A(0) = 0 and A(1,200) = 0 — both worse. ✅
        Harvest: L = 2,400 − 2×600 = 1,200 m, and
                A = 600 × 1,200 = 720,000 m²

        That is 72 hectares of pen from 2,400 m of fence — and the proof
        that no other shape beats it is the derivative, not a guess.

Worked example 2 — the open box. From a 36 cm square sheet of cardboard, cut equal squares of side x from the four corners and fold up the flaps to make an open-top box. Which x gives the biggest volume?

        Step 1: the base becomes (36 − 2x) by (36 − 2x), the height is x.
                Maximize V(x) = x(36 − 2x)² on 0 ≤ x ≤ 18.
        Step 2: expand: (36 − 2x)² = 1,296 − 144x + 4x², so
                V(x) = 4x³ − 144x² + 1,296x.
        Step 3: V'(x) = 12x² − 288x + 1,296 = 12(x² − 24x + 108).
                Factor: x² − 24x + 108 = (x − 6)(x − 18)
                (6 × 18 = 108 and 6 + 18 = 24 ✅), so V'(x) = 0 at x = 6, x = 18.
        Step 4: x = 18 makes the base 36 − 36 = 0 — volume 0, a MINIMUM.
                Check x = 6: V''(x) = 24x − 288, so V''(6) = 144 − 288 = −144 < 0
                → cap → MAX ✅. Endpoints give V = 0. ✅
        Harvest: V(6) = 6 × 24² = 6 × 576 = 3,456 cm³.

        Intuition check: x = 6 is exactly 1/6 of the sheet's side — small enough
        to leave a generous base, tall enough to matter. Calculus found the
        sweet spot; geometry alone could only guess.

Worked example 3 — the five-digit profit. A company sells gadgets. When the price is p dollars per gadget, customers buy x of them, where p(x) = 1,000 − 2x (charge less, sell more). Each gadget costs $200 to make, plus fixed costs of $45,000. How many gadgets maximize profit?

        Step 1: revenue R(x) = x·p(x) = 1,000x − 2x²   (units × price).
                Cost C(x) = 200x + 45,000.
        Step 2: profit P(x) = R − C = 1,000x − 2x² − 200x − 45,000
                                  = −2x² + 800x − 45,000.
        Step 3: P'(x) = −4x + 800 = 0  →  x = 200 gadgets.
        Step 4: P''(x) = −4 < 0 → cap → MAX ✅.
        Harvest: price p(200) = 1,000 − 400 = $600;
                revenue = 200 × 600 = $120,000;
                cost = 200 × 200 + 45,000 = $85,000;
                profit = $120,000 − $85,000 = $35,000.
        Neighbor check: P(190) = −2×36,100 + 152,000 − 45,000 = $34,800 < $35,000 ✅
                (moving 10 units either way costs the company $200 of profit).

✏️ Your Turn

Redo the fence problem with only 800 m of fencing (still one stone wall).

Answer: 2x + L = 800 → L = 800 − 2x; A(x) = 800x − 2x²; A'(x) = 800 − 4x = 0 → x = 200; A'' = −4 < 0 ✅ max; L = 800 − 400 = 400 m; A = 200 × 400 = 80,000 m². Quarter the fence, one-ninth the area — scaling is not linear!


─────────────────────────────────────────────
Lesson 9: Area Under a Curve — Sigma Sums and the Rectangle Limit
─────────────────────────────────────────────

📌 Key idea of this section:

        Slice the region into n rectangles of width Δx = (b − a) ÷ n.
        Area = lim (n → ∞) of  ∑ f(xₖ)·Δx  =  ∫ₐᵇ f(x) dx.

The sigma notation

Adding many similar terms gets tiring to write, so mathematicians use the Greek capital sigma ∑ for "sum":

        ∑ k   for k = 1 to 4   = 1 + 2 + 3 + 4 = 10
        ∑ k²  for k = 1 to 3   = 1 + 4 + 9 = 14

The counter (k) marches through the integers; the recipe after ∑ tells you what to add each time.

The rectangle machine

To find the area under a curve f from a to b: slice [a, b] into n equal strips of width Δx = (b − a)/n. Number the strips k = 1, 2, ..., n; the right edge of strip k sits at xₖ = a + k·Δx, and we use the height there, f(xₖ). Each strip is a rectangle of area f(xₖ)·Δx, and the total estimate is:

        ∑ f(xₖ)·Δx   for k = 1 to n        ← called a Riemann sum

Skinnier rectangles hug the curve better, so the exact area is the limit as n → ∞. That limit has its own symbol, the definite integral — an elongated S for "sum," Leibniz's idea:

        ∫ₐᵇ f(x) dx  =  lim (n → ∞) of  ∑ f(xₖ)·Δx

The dx is the fossil of Δx after the slices got infinitely skinny.

Warm-up we can check — the area under f(x) = x from 0 to 4. We need the sum formula 1 + 2 + ... + n = n(n + 1)/2 (from pairing first with last: 1 + n, 2 + (n − 1), ... — there are n/2 pairs, each worth n + 1):

        width: Δx = 4/n;  right edges: xₖ = 4k/n;  heights: f(xₖ) = 4k/n
        Step 1: rectangle areas: (4k/n)(4/n) = 16k/n²
        Step 2: total = (16/n²) × ∑ k = (16/n²) × n(n + 1)/2
        Step 3: = 8(n + 1)/n = 8(1 + 1/n)
        Step 4: limit as n → ∞: 8(1 + 0) = 8

Triangle check: the region IS a triangle, and 1/2 × 4 × 4 = 8 ✅. The rectangle machine works — now for a region no triangle formula can touch.

The main event — the area under f(x) = x² from 0 to 3. We need the sum of squares formula:

        1² + 2² + ... + n² = n(n + 1)(2n + 1) ÷ 6

Verify it for n = 3: 3×4×7/6 = 84/6 = 14 = 1 + 4 + 9 ✅. (It is proved for all n in challenge problem 76.) Now run the machine:

        width: Δx = 3/n;  right edges: xₖ = 3k/n;  heights: (3k/n)² = 9k²/n²
        Step 1: rectangle k has area (9k²/n²)(3/n) = 27k²/n³
        Step 2: total = (27/n³) × ∑ k² = (27/n³) × n(n + 1)(2n + 1)/6
        Step 3: rewrite each n-factor as a fraction over n:
                = (27/6) × (n + 1)/n × (2n + 1)/n
                = (9/2) × (1 + 1/n) × (2 + 1/n)
        Step 4: limit as n → ∞: 1/n → 0, so
                (9/2) × 1 × 2 = 9

        The area under y = x² from 0 to 3 is EXACTLY 9.

No "about," no "close enough" — the limit delivered an exact integer out of infinitely many rectangles. Archimedes computed areas this way 2,000 years before Newton. File the number 9 away: Lesson 10 will get it in three lines, and you will see the shortcut and the grunt work agree.

✏️ Your Turn

(a) Compute ∑ k for k = 1 to 5 directly. (b) Compute ∑ k² for k = 1 to 4 two ways: by adding, and by the formula.

Answers: (a) 1 + 2 + 3 + 4 + 5 = 15. (b) Adding: 1 + 4 + 9 + 16 = 30. Formula: 4×5×9/6 = 180/6 = 30 ✅.


─────────────────────────────────────────────
Lesson 10: The Fundamental Theorem of Calculus
─────────────────────────────────────────────

📌 Key idea of this section:

        ∫ₐᵇ f(x) dx = F(b) − F(a),   where F is any antiderivative of f.
        Area-adding and slope-taking undo each other.

Antiderivatives — running the derivative backwards

F is an antiderivative of f if F' = f. The power rule backwards:

        the antiderivative of xⁿ is xⁿ⁺¹/(n + 1) + C

Check with n = 2: d/dx of x³/3 = 3x²/3 = x² ✅. What is the +C doing there? The derivative kills every constant (d/dx of 7 is 0), so x³/3, x³/3 + 5, and x³/3 − 11 ALL have derivative x². Antiderivatives come in a whole family, and +C is the family's name tag.

Quick drills: 3x² → x³ + C. 6x − 4 → 3x² − 4x + C. x → x²/2 + C.

The accumulation function — why slopes and areas are twins

Define A(x) = the area under f from a to x (a running total — the odometer of area). Now the key question: what is A'(x)? Run the difference quotient:

        Step 1: A(x + h) − A(x) = the area of the thin strip from x to x + h.
        Step 2: that strip is almost a rectangle of height f(x) and width h,
                so A(x + h) − A(x) ≈ f(x)·h — with an error smaller than the
                strip itself, which vanishes as h → 0.
        Step 3: divide by h: [ A(x + h) − A(x) ] ÷ h ≈ f(x).
        Step 4: limit as h → 0: A'(x) = f(x). EXACTLY.

The area function's slope IS the curve's height. Slope-taking undoes area-adding — that is the Fundamental Theorem's first half.

The second half — evaluating integrals. A and F are both antiderivatives of f, and two antiderivatives of the same f differ only by a constant (their difference has derivative 0, and only constants have derivative 0 everywhere on an interval). So A(x) = F(x) + C. Since A(a) = 0 (no width, no area), we get C = −F(a). Therefore:

        area from a to b = A(b) = F(b) − F(a).   ∎

THAT is the Fundamental Theorem of Calculus, and we just walked through why it must be true.

Worked example 1 — the rematch. ∫₀³ x² dx:

        Step 1: antiderivative: F(x) = x³/3
        Step 2: F(3) = 27/3 = 9;  F(0) = 0
        Step 3: ∫₀³ x² dx = 9 − 0 = 9  ✅

The same 9 that Lesson 9 wrestled out of an infinite rectangle limit — in three lines. This is why the theorem is called fundamental: it turns an impossible infinite sum into a subtraction.

Worked example 2 — bigger numbers. ∫₁⁵ (3x² + 2x) dx:

        Step 1: F(x) = x³ + x²          (check: F' = 3x² + 2x ✅)
        Step 2: F(5) = 125 + 25 = 150;  F(1) = 1 + 1 = 2
        Step 3: 150 − 2 = 148

Where did +C go? Compute with the family: (F(b) + C) − (F(a) + C) = F(b) − F(a) — the C's cancel. For definite integrals, any family member works; the +C only matters when the antiderivative itself is the answer (see problem 99).

The other direction — velocity into distance. Since the odometer is an antiderivative of the speedometer:

        ∫ₐᵇ v(t) dt = s(b) − s(a) = the net change in position.

Warning — the integral counts area BELOW the axis as NEGATIVE. If v(t) = 3t² − 12 on [0, 3], then ∫₀³ v dt = [ t³ − 12t ]₀³ = (27 − 36) − 0 = −9: the particle ends 9 meters behind where it started. That is the net displacement, not the total travel — challenge problem 85 splits the trip into forward and backward parts to get the true distance.

✏️ Your Turn

(a) Find the antiderivative family of 4x³. (b) Compute ∫₀² (2x + 1) dx.

Answers: (a) x⁴ + C (check: d/dx of x⁴ = 4x³ ✅). (b) F(x) = x² + x; F(2) = 4 + 2 = 6; F(0) = 0; answer 6.


─────────────────────────────────────────────
Lesson 11: Watch Out! Six Classic Calculus Mistakes
─────────────────────────────────────────────

📌 Keep the big ideas in sight:

        Simplify FIRST, take the limit LAST.
        Products and chains have their own rules — the obvious guess is wrong.
        f' = 0 is a candidate, not a verdict. Endpoints count.

These six mistakes catch students every single year — including college students. Learn them now and they will never catch you.

Mistake 1: "0/0 means the limit does not exist"

        (x² − 4)/(x − 2) at x = 2 gives 0/0, so there is no limit?   ❌

0/0 is an indeterminate form — a signal to simplify, not a verdict. Factor: (x − 2)(x + 2)/(x − 2) = x + 2 (legal because on the approach x ≠ 2), and the limit is 4. ✅ Never surrender at 0/0; reach for factoring, expanding, or the conjugate trick first.

Mistake 2: plugging h = 0 into the difference quotient before simplifying

        [ (x + h)² − x² ] ÷ h with h = 0 gives 0/0... so x² has no derivative?   ❌

The limit comes LAST. The whole point of Lessons 3 and 4 is that h ≠ 0 during the approach: expand, cancel the x², divide out an h, and ONLY THEN let h → 0. The difference quotient with h = 0 is meaningless; the difference quotient simplified and then limited is 2x. ✅ Order of operations: simplify first, limit last.

Mistake 3: "the derivative of a product is the product of the derivatives"

        d/dx of (x²·x³) = 2x × 3x² = 6x⁵?   ❌

Since x²·x³ = x⁵, the truth is 5x⁵ — and 6x⁵ ≠ 5x⁵. Products use the product rule: (fg)' = f'g + fg', each factor taking its turn. ✅ (Sibling trap: the derivative of a constant is 0, not the constant — d/dx of 7 is 0, because a flat graph has no slope.)

Mistake 4: forgetting the inside's derivative in the chain rule

        d/dx of (5x + 2)² = 2(5x + 2)?   ❌

That peels the outside but forgets the gear inside. The inside 5x + 2 has derivative 5, and the chain rule says multiply by it: 2(5x + 2) × 5 = 50x + 20. ✅ Check by expanding: (5x + 2)² = 25x² + 20x + 4, whose derivative is 50x + 20 ✅. When in doubt, expand a small case and compare.

Mistake 5: forgetting the +C

        "THE antiderivative of 3x² is x³."   ❌ (half wrong!)

x³ is ONE antiderivative; the family is x³ + C, because the derivative erases every constant. Forgetting +C loses infinitely many correct answers — and in problems with an extra clue (like "the curve passes through (1, 3)"), the whole point is to FIND C. ✅ Flip side: in a definite integral the C's cancel, so there you may pick C = 0 and relax.

Mistake 6: "f'(a) = 0 guarantees a max or a min"

        f'(0) = 0 for f(x) = x³, so x = 0 is a peak or a valley?   ❌

It is neither: f' = 3x² ≥ 0 on both sides, so the curve climbs, pauses level, and climbs on — a level inflection point. f' = 0 only nominates candidates; the second derivative test (or a sign test of f') gives the verdict. ✅ And in optimization, do not forget the endpoints: the best answer on a closed interval can live at a boundary, where f' is not 0 at all (challenge problem 94 is exactly this trap).


─────────────────────────────────────────────
Lesson 12: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        average rate = Δy ÷ Δx;   f'(x) = lim (h → 0) of Δy ÷ Δx
        power, product, quotient, chain — derived, not memorized
        f' reads climb/fall; f'' reads cup/cap
        optimize: constraint → one variable → f' = 0 → verify
        ∫ₐᵇ f(x) dx = lim of rectangle sums = F(b) − F(a)

The recap list

  · The two big questions: HOW FAST right now (derivative) and HOW MUCH so far (integral).
  · Average rate of change is a secant slope; shrink the window and it becomes the tangent slope.
  · A limit is an exact target certified by the tolerance game: for every ε there is a δ.
  · 0/0 means "simplify, then decide" — factoring is the master key.
  · The derivative definition f'(x) = lim (h → 0) of [f(x + h) − f(x)] ÷ h generates every rule.
  · The power rule nxⁿ⁻¹ falls out of the binomial expansion; the product rule out of the add-zero trick; the chain rule is rates multiplying.
  · f' = 0 nominates critical points; f'' classifies them: cap is a peak, cup is a valley.
  · Optimization turns stories into max/min hunts — with endpoints on the suspect list.
  · The integral is a limit of rectangle sums; the sum of squares formula cracked ∫x² by hand.
  · The Fundamental Theorem: ∫ₐᵇ f(x) dx = F(b) − F(a). Slope-taking and area-adding undo each other.

The magic sentence

        The derivative shrinks a window to a point;
        the integral piles up infinitely many slivers;
        and the Fundamental Theorem says they are the same trick, backwards.

Say it out loud three times. Seriously! That is the whole course in three lines.

Why this matters

You now hold the engine room keys of modern science: how fast, how much, and the bridge between them. Rockets landing themselves, epidemiologists forecasting peaks, engineers minimizing material, companies maximizing profit — all of it runs on the ideas you just derived with your own pencil: the limit, the derivative, the integral, and the Fundamental Theorem. And you did not just use the formulas — you saw WHY each one is true. That is what separates calculating from understanding.

Now it is time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        average rate of change = (f(b) − f(a)) ÷ (b − a)
        f'(x) = lim (h → 0) of [ f(x + h) − f(x) ] ÷ h
        power: d/dx of xⁿ = nxⁿ⁻¹   ·   (fg)' = f'g + fg'   ·   (f/g)' = (f'g − fg')/g²
        chain: peel the outside, then multiply by the inside's derivative
        tangent line at x = a: y = f(a) + f'(a)(x − a)
        critical points: f' = 0 (or DNE); f'' < 0 cap/peak, f'' > 0 cup/valley
        ∫ₐᵇ f(x) dx = F(b) − F(a), where F' = f; antiderivatives carry +C
        1 + 2 + ... + n = n(n + 1)/2;  1² + ... + n² = n(n + 1)(2n + 1)/6

Grab a pencil and paper. Start with the easy ones — they use the exact patterns from the lessons. The challenge section expects 3-6 chained steps, a derivation, or a strategic choice. A few problems are open-ended. Don't peek at the answer key until you've tried!

Hint for almost every problem: first ask yourself, "Which of the two big questions is this — HOW FAST or HOW MUCH?"


🟢 EASY (Problems 1–40)

Problems 1–6 — Rate (how fast, right now) or accumulation (total so far)? (Lesson 1)

  1. v(t) is your car's velocity at time t. Rate or accumulation?
  2. s(t) is the car's odometer reading at time t. Rate or accumulation?
  3. R(t) is the flow of water into a tank, in liters per minute.
  4. V(t) is the volume of water in the tank at time t.
  5. "The factory's total cost rises by $340 for each extra unit produced."
     Is $340 per unit a rate or an accumulation?
  6. "The town gained 6,300 people over 5 years." Is 6,300 a rate or an
     accumulation? What would the corresponding rate be?

Problems 7–12 — Average rate of change: (f(b) − f(a)) ÷ (b − a). (Lesson 2)

  7. f(x) = x² from x = 1 to x = 4
  8. f(x) = x² + 2x from x = 0 to x = 3
  9. f(x) = 3x + 1 from x = 2 to x = 6 — why was the answer obvious?
 10. f(x) = x³ from x = 1 to x = 3
 11. f(x) = 5x² from x = 1 to x = 2
 12. f(x) = 10 − x² from x = 1 to x = 4 (careful — negative!)

Problems 13–18 — Limits by direct substitution (the function is nice, so plug in). (Lesson 3)

 13. lim (x → 2) of 3x + 1
 14. lim (x → 1) of x² + 4x
 15. lim (x → 3) of (x² − 2)/(x + 1)
 16. lim (x → 0) of 5x² − 2x + 8
 17. lim (x → 4) of √x + x/2
 18. lim (x → −1) of x³ + 5x

Problems 19–24 — Factor-and-cancel limits (0/0 — simplify first!). (Lesson 3)

 19. lim (x → 2) of (x² − 4)/(x − 2)
 20. lim (x → 5) of (x² − 25)/(x − 5)
 21. lim (x → 1) of (x² − 1)/(x − 1)
 22. lim (x → 3) of (x² − 9)/(x − 3)
 23. lim (x → 0) of (x² + 5x)/x
 24. lim (h → 0) of (3h + h²)/h

Problems 25–32 — Differentiate with the power rule. (Lesson 4)

 25. f(x) = x⁵
 26. f(x) = x⁷
 27. f(x) = 3x⁴
 28. f(x) = 2x³ + x
 29. f(x) = x² − 6x + 9
 30. f(x) = 10x
 31. f(x) = 7
 32. f(x) = x⁴/2   (the 1/2 rides along)

Problems 33–36 — Evaluate the derivative at the given x. (Lesson 4)

 33. f(x) = x²: find f'(3)
 34. f(x) = x³: find f'(2)
 35. f(x) = 2x² − 3x: find f'(4)
 36. f(x) = x³ − 6x: find f'(1) (a negative slope — the curve is falling there!)

Problems 37–40 — Find the antiderivative family (run the power rule backwards; +C!). (Lesson 10)

 37. 2x
 38. 3x²
 39. x
 40. 5


🟡 INTERMEDIATE (Problems 41–75)

Problems 41–44 — Limits at infinity: divide top and bottom by the highest power. (Lesson 3)

 41. lim (x → ∞) of (3x + 2)/(x − 1)
 42. lim (x → ∞) of (2x² + x)/(x² + 3)
 43. lim (x → ∞) of (5x² + 1)/(x³ + 2)
 44. lim (x → ∞) of (4x² − 3x + 1)/(2x² + 5)

Problems 45–48 — Differentiate straight from the definition: write f(x + h),
subtract f(x), divide by h, then take the limit. (Lesson 4)

 45. f(x) = 3x
 46. f(x) = x² + x
 47. f(x) = 5x²
 48. f(x) = 2x − x²

Problems 49–52 — Tangent lines: point + slope, then y = f(a) + f'(a)(x − a). (Lesson 5)

 49. f(x) = x² at x = 1
 50. f(x) = x³ at x = 1
 51. f(x) = x² + 4x at x = 2
 52. f(x) = 5x − x² at x = 4

Problems 53–56 — Product rule. Check each answer by expanding first! (Lesson 6)

 53. d/dx of x·x⁴
 54. d/dx of (x + 1)(x + 2)
 55. d/dx of x²(x − 3)
 56. d/dx of (2x)(3x + 1)

Problems 57–60 — Chain rule: peel the outside, multiply by the inside's derivative. (Lesson 6)

 57. d/dx of (3x − 2)⁵
 58. d/dx of (x² + 1)³
 59. d/dx of (5x + 4)² — then check by expanding
 60. d/dx of √(4x + 1)  (treat √ as the 1/2 power; write the answer with √ on the bottom)

Problems 61–64 — Find the critical point, classify it with f'', and give the value of f there. (Lesson 7)

 61. f(x) = x² − 8x + 3
 62. f(x) = x² + 6x − 1
 63. f(x) = 2x² − 12x + 5
 64. f(x) = −x² + 10x − 7

Problems 65–68 — Full analysis: find both critical points, classify each, and give the
peak and valley VALUES of f. (Lesson 7)

 65. f(x) = x³ − 3x
 66. f(x) = x³ − 12x
 67. f(x) = 2x³ − 3x²
 68. f(x) = x³ + 3x² − 9x + 1

Problems 69–72 — Definite integrals by the Fundamental Theorem. (Lesson 10)

 69. ∫₀² x dx — then check with the triangle area formula!
 70. ∫₀³ x² dx
 71. ∫₁³ 2x dx
 72. ∫₀² (3x² + 1) dx

Problems 73–75 — Explain yourself!

 73. In ∫ₐᵇ f dx = F(b) − F(a), the antiderivative could be F + C for any C.
     Why does the answer not depend on C?
 74. True or false — and why: "If f'(2) = 0, then f must have a local max or
     a local min at x = 2."
 75. Give TWO reasons the derivative of a constant function is 0: one from the
     difference quotient, one from the graph's shape.


🔴 CHALLENGE (Problems 76–100)

 76. Prove the sum of squares formula by induction. Base (n = 1): check that
     1² = 1×2×3/6. Step: assume 1² + ... + n² = n(n + 1)(2n + 1)/6, add
     (n + 1)² to both sides, and factor the right side into the formula's
     shape with n replaced by n + 1: (n + 1)(n + 2)(2n + 3)/6. Show every
     algebra step.
 77. The cube's area, by brute force. Given 1³ + 2³ + ... + n³ = [n(n + 1)/2]²:
     (a) set up the Riemann sum for the area under y = x³ from 0 to 2
     (width 2/n, right edges 2k/n); (b) take the limit as n → ∞;
     (c) check with the Fundamental Theorem.
 78. Derive the derivative of 1/x from the definition (common denominator in
     the numerator, cancel the h, then limit). Every step.
 79. Derive the derivative of √x from the definition (multiply top and bottom
     by the conjugate √(x + h) + √x). Every step.
 80. Derive the quotient rule: write f/g as f·(1/g), apply the product rule,
     use d/dx of 1/g = −g'/g² (chain rule on the power −1), then combine over
     a common denominator g². Every step.
 81. The two-sided detective. (a) f(x) = x + 1 for x < 2, and f(x) = x + 2 for
     x ≥ 2: find both one-sided limits as x → 2, then decide whether the
     two-sided limit exists. (b) Same questions for f(x) = |x − 2|/(x − 2).
 82. The four-sided fence. With 1,600 m of fencing for a rectangle (no wall
     this time — fence all four sides), find the shape with the largest area.
     Spoiler: it has a famous name.
 83. The cheapest open box. An open-top box has a square base of side b and
     height h, and must hold 4,000 cm³. (a) Use the volume constraint to write
     h in terms of b. (b) The surface area is S = b² + 4bh (base + 4 sides);
     write S(b). (c) Solve S'(b) = 0 and verify with S''. (d) Give b, h, and
     the minimum S.
 84. The profit summit. A shop sells x phones at price p(x) = 500 − x dollars;
     each phone costs $100 to stock, plus $12,000 fixed costs. (a) Build the
     profit P(x). (b) Find the profit-maximizing x, the price, and the
     maximum profit. (c) Verify with the second derivative.
 85. Displacement vs. distance. A particle's velocity is v(t) = 3t² − 12 m/s
     on [0, 3]. (a) Compute ∫₀³ v dt — the net displacement. (b) Find when
     v = 0 inside the interval, split the integral there, and compute the
     TOTAL distance traveled (the backward part counts positive).
 86. The particle with acceleration. s(t) = t³ − 6t² + 9t is a position in
     meters. (a) Find v(t) and the times when the particle is momentarily
     stopped. (b) Find the acceleration a(t) and its values at those stop
     times. (c) For which t in [0, ∞) is the particle moving forward (v > 0)?
 87. Tangents through the origin. The parabola y = x² + 1 never touches the
     origin — yet two of its tangent lines pass through (0, 0). (a) Write the
     tangent line at x = a: y = (a² + 1) + 2a(x − a). (b) Force it through
     (0, 0) and solve for a. (c) Write both tangent lines.
 88. Level ground hunt. Find all x where f(x) = 2x³ + 3x² − 36x + 7 has a
     horizontal tangent, and give the full coordinates of both level points.
 89. Riemann by hand. Estimate ∫₀⁴ x² dx with n = 4 rectangles of width 1:
     (a) right-edge heights (1, 4, 9, 16); (b) left-edge heights (0, 1, 4, 9).
     (c) The true value is 64/3 ≈ 21.33. Which estimate was high, which low,
     and why does averaging the two (a sneak peek at the trapezoid rule)
     come so close?
 90. The average value. Define the average value of f on [a, b] as
     (1/(b − a)) × ∫ₐᵇ f dx. (a) Find the average value of f(x) = x² on
     [0, 3]. (b) Find the x in [0, 3] where f actually EQUALS its average
     value. (You just rediscovered the Mean Value Theorem for integrals!)
 91. A famous inequality, by calculus. Prove that x + 1/x ≥ 2 for all x > 0:
     (a) find the critical point of f(x) = x + 1/x on x > 0; (b) classify it
     with f''; (c) conclude the minimum value of x + 1/x is 2.
 92. The inscribed rectangle. A triangle has base 12 and height 8 (its top
     edge runs from (0, 8) down to (12, 0)). A rectangle sits inside with its
     base on the triangle's base. (a) Show the rectangle's height is
     y = 8 − (2/3)x when its width is x. (b) Maximize A(x) = x·y.
     (c) What fraction of the triangle's area did you capture?
 93. Power rule for n = 4, from scratch. Using Pascal's Triangle row
     1 4 6 4 1, expand (x + h)⁴ and run the four-step definition to derive
     d/dx of x⁴. Every step.
 94. The endpoint trap. Find the absolute maximum and minimum of
     f(x) = x³ − 3x on the closed interval [−2, 5/2]. Critical points are
     suspects — but so are the endpoints. Compare ALL of them.
 95. Area between two curves. The line y = 2x and the parabola y = x² cross
     at x = 0 and x = 2, and between them the line is on top. The area between
     them is ∫₀² (top − bottom) dx = ∫₀² (2x − x²) dx. Compute it.
 96. The rocket. A rocket's velocity t seconds after launch is v(t) = 30t m/s
     (constant acceleration!). How far does it travel in its first 12 seconds?
     (Integrate v — or check with the triangle area formula.)
 97. The general fence theorem. Prove that among ALL rectangles with a fixed
     perimeter P, the square has the largest area. (Sides x and P/2 − x;
     maximize A(x); no numbers — just letters.)
 98. The full sketch. For f(x) = x³ − 3x² − 9x + 2, gather everything a
     sketch needs: (a) critical points, (b) their classification and values,
     (c) the inflection point (where f'' = 0 and changes sign) and its height.
 99. The +C detective. Find the function f with f'(x) = 6x² − 4x that passes
     through the point (1, 3). (Antidifferentiate, then use the point to
     solve for C.)
100. The grand finale — design it! Pick any polynomial with at least three
     terms (your choice). (a) Differentiate it, and verify one term from the
     four-step definition. (b) Write the tangent line at some x = a and check
     it touches the curve. (c) Find and classify its critical points.
     (d) Compute the area under it over some interval [a, b] where it is
     positive. (e) Invent one HOW FAST question and one HOW MUCH question
     about your function, and answer both. (A full model solution appears in
     the answer key — your numbers will differ, and that is the point.)


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — simplifying before the limit, the derivative's four steps, a forgotten +C, an unclassified critical point, or an endpoint you did not check.

Easy

  1. Rate — velocity is an instantaneous speed, a HOW FAST answer.
  2. Accumulation — the odometer is a total that piled up.
  3. Rate — "liters per minute" is flow speed, not a total.
  4. Accumulation — the volume is the water that piled up so far.
  5. Rate — $340 PER unit is a speed of cost (the marginal cost).
  6. Accumulation — 6,300 is a total change. The rate: 6,300 ÷ 5 = 1,260
     people per year.

  7. f(4) = 16, f(1) = 1; (16 − 1) ÷ (4 − 1) = 15/3 = 5.
  8. f(3) = 9 + 6 = 15, f(0) = 0; 15/3 = 5.
  9. f(6) = 19, f(2) = 7; 12/4 = 3. Obvious because a LINE has the same
     slope on every window — the average is just its slope.
 10. f(3) = 27, f(1) = 1; 26/2 = 13.
 11. f(2) = 20, f(1) = 5; 15/1 = 15.
 12. f(4) = 10 − 16 = −6, f(1) = 9; (−6 − 9)/3 = −15/3 = −5 (downhill!).

 13. 3×2 + 1 = 7.
 14. 1 + 4 = 5.
 15. (9 − 2)/(3 + 1) = 7/4.
 16. 0 − 0 + 8 = 8.
 17. √4 + 4/2 = 2 + 2 = 4.
 18. (−1)³ + 5×(−1) = −1 − 5 = −6.

 19. (x − 2)(x + 2)/(x − 2) = x + 2 → 4.
 20. (x − 5)(x + 5)/(x − 5) = x + 5 → 10.
 21. (x − 1)(x + 1)/(x − 1) = x + 1 → 2.
 22. (x − 3)(x + 3)/(x − 3) = x + 3 → 6.
 23. x(x + 5)/x = x + 5 → 5. (Factor the top, cancel the x.)
 24. h(3 + h)/h = 3 + h → 3. (Same trick with h.)

 25. 5x⁴.  26. 7x⁶.  27. 3×4x³ = 12x³.  28. 6x² + 1.
 29. 2x − 6.  30. 10 (x is x¹; 1×x⁰ = 1).  31. 0 (constant!).  32. (1/2)×4x³ = 2x³.

 33. f'(x) = 2x, so f'(3) = 6.
 34. f'(x) = 3x², so f'(2) = 12.
 35. f'(x) = 4x − 3, so f'(4) = 16 − 3 = 13.
 36. f'(x) = 3x² − 6, so f'(1) = 3 − 6 = −3 (falling).

 37. x² + C (check: d/dx of x² = 2x ✅).
 38. x³ + C.
 39. x²/2 + C (check: d/dx of x²/2 = 2x/2 = x ✅).
 40. 5x + C (check: d/dx of 5x = 5 ✅).

Intermediate

 41. Divide by x: (3 + 2/x)/(1 − 1/x) → (3 + 0)/(1 − 0) = 3.
 42. Divide by x²: (2 + 1/x)/(1 + 3/x²) → 2/1 = 2.
 43. Divide by x³: (5/x + 1/x³)/(1 + 2/x³) → 0/1 = 0 (the bottom outgrows
     the top).
 44. Divide by x²: (4 − 3/x + 1/x²)/(2 + 5/x²) → 4/2 = 2.

 45. [3(x + h) − 3x]/h = 3h/h = 3 → 3. A line's slope is its derivative.
 46. [(x + h)² + (x + h) − x² − x]/h = [2xh + h² + h]/h = 2x + h + 1 → 2x + 1.
     (Matches the power rule on x² + x ✅.)
 47. [5(x + h)² − 5x²]/h = 5(2xh + h²)/h = 10x + 5h → 10x.
 48. [2(x + h) − (x + h)² − 2x + x²]/h = [2h − 2xh − h²]/h = 2 − 2x − h → 2 − 2x.

 49. f(1) = 1; f'(x) = 2x → f'(1) = 2; y = 1 + 2(x − 1) = 2x − 1.
 50. f(1) = 1; f'(x) = 3x² → f'(1) = 3; y = 1 + 3(x − 1) = 3x − 2.
 51. f(2) = 4 + 8 = 12; f'(x) = 2x + 4 → f'(2) = 8; y = 12 + 8(x − 2) = 8x − 4.
 52. f(4) = 20 − 16 = 4; f'(x) = 5 − 2x → f'(4) = −3;
     y = 4 − 3(x − 4) = −3x + 16 (a downhill tangent!).

 53. 1·x⁴ + x·4x³ = x⁴ + 4x⁴ = 5x⁴. Check: x·x⁴ = x⁵ → 5x⁴ ✅.
 54. 1·(x + 2) + (x + 1)·1 = x + 2 + x + 1 = 2x + 3.
     Check: x² + 3x + 2 → 2x + 3 ✅.
 55. 2x·(x − 3) + x²·1 = 2x² − 6x + x² = 3x² − 6x.
     Check: x³ − 3x² → 3x² − 6x ✅.
 56. 2·(3x + 1) + 2x·3 = 6x + 2 + 6x = 12x + 2.
     Check: 6x² + 2x → 12x + 2 ✅.

 57. 5(3x − 2)⁴ × 3 = 15(3x − 2)⁴.
 58. 3(x² + 1)² × 2x = 6x(x² + 1)².
 59. 2(5x + 4) × 5 = 10(5x + 4) = 50x + 40.
     Check: 25x² + 40x + 16 → 50x + 40 ✅.
 60. (1/2)(4x + 1)⁻¹ᐟ² × 4 = 2(4x + 1)⁻¹ᐟ² = 2/√(4x + 1).
     (Outside: the 1/2 power; inside derivative: 4; the half and the 4 make 2.)

 61. f'(x) = 2x − 8 = 0 → x = 4. f'' = 2 > 0 (cup) → valley.
     f(4) = 16 − 32 + 3 = −13. Valley at (4, −13).
 62. f'(x) = 2x + 6 = 0 → x = −3. f'' = 2 > 0 → valley.
     f(−3) = 9 − 18 − 1 = −10. Valley at (−3, −10).
 63. f'(x) = 4x − 12 = 0 → x = 3. f'' = 4 > 0 → valley.
     f(3) = 18 − 36 + 5 = −13. Valley at (3, −13).
 64. f'(x) = −2x + 10 = 0 → x = 5. f'' = −2 < 0 (cap) → peak.
     f(5) = −25 + 50 − 7 = 18. Peak at (5, 18).

 65. f'(x) = 3x² − 3 = 3(x − 1)(x + 1) → x = −1, 1. f'' = 6x:
     f''(−1) = −6 < 0 → peak, f(−1) = −1 + 3 = 2;
     f''(1) = 6 > 0 → valley, f(1) = 1 − 3 = −2. Peak value 2, valley value −2.
 66. f'(x) = 3x² − 12 = 3(x − 2)(x + 2) → x = ±2. f'' = 6x:
     f''(−2) = −12 → peak, f(−2) = −8 + 24 = 16;
     f''(2) = 12 → valley, f(2) = 8 − 24 = −16.
 67. f'(x) = 6x² − 6x = 6x(x − 1) → x = 0, 1. f'' = 12x − 6:
     f''(0) = −6 → peak, f(0) = 0;
     f''(1) = 6 → valley, f(1) = 2 − 3 = −1.
 68. f'(x) = 3x² + 6x − 9 = 3(x² + 2x − 3) = 3(x + 3)(x − 1) → x = −3, 1.
     f'' = 6x + 6: f''(−3) = −12 → peak, f(−3) = −27 + 27 + 27 + 1 = 28;
     f''(1) = 12 → valley, f(1) = 1 + 3 − 9 + 1 = −4.

 69. [x²/2] from 0 to 2 = 4/2 − 0 = 2. Triangle check: 1/2 × 2 × 2 = 2 ✅.
 70. [x³/3] from 0 to 3 = 27/3 − 0 = 9. (Lesson 9's rectangle limit agrees!)
 71. [x²] from 1 to 3 = 9 − 1 = 8.
 72. [x³ + x] from 0 to 2 = (8 + 2) − 0 = 10.

 73. (F(b) + C) − (F(a) + C) = F(b) − F(a): the C's cancel by subtraction.
     Any family member gives the same definite integral.
 74. FALSE. Try f(x) = (x − 2)³: f'(x) = 3(x − 2)², so f'(2) = 0 — but f' ≥ 0
     on both sides, so the curve climbs, pauses level, and climbs on (a level
     inflection point). f' = 0 nominates candidates; a sign test or f''
     gives the verdict.
 75. Difference quotient: [c − c]/h = 0/h = 0 → limit 0. Graph: a constant
     function is a horizontal line, and a flat line has slope 0 everywhere.

Challenge

 76. Base: 1² = 1 and 1×2×3/6 = 6/6 = 1 ✅. Step: assume the formula for n
     and add (n + 1)²:
         n(n + 1)(2n + 1)/6 + (n + 1)²
       = [n(n + 1)(2n + 1) + 6(n + 1)²]/6        (common denominator)
       = (n + 1)[n(2n + 1) + 6(n + 1)]/6         (factor out (n + 1))
       = (n + 1)(2n² + n + 6n + 6)/6             (expand inside)
       = (n + 1)(2n² + 7n + 6)/6                 (collect)
       = (n + 1)(n + 2)(2n + 3)/6                (factor: (n + 2)(2n + 3)
                                                  = 2n² + 7n + 6 ✅)
     That is exactly the formula with n replaced by n + 1 — so if it holds
     for n it holds for n + 1, and induction carries it to every n. ∎
 77. (a) width 2/n; right edges 2k/n; heights (2k/n)³ = 8k³/n³;
         rectangle areas (2/n)(8k³/n³) = 16k³/n⁴;
         total = (16/n⁴) × [n(n + 1)/2]² = (16/n⁴) × n²(n + 1)²/4
               = 4(n + 1)²/n² = 4(1 + 1/n)².
     (b) limit as n → ∞: 4(1 + 0)² = 4.
     (c) FTC: ∫₀² x³ dx = [x⁴/4] from 0 to 2 = 16/4 − 0 = 4 ✅.
 78. [1/(x + h) − 1/x] ÷ h
       = [(x − (x + h)) / (x(x + h))] ÷ h      (common denominator)
       = [−h / (x(x + h))] ÷ h = −1 / (x(x + h))   (the h's cancel)
       → −1/x² as h → 0.   So d/dx of 1/x = −1/x².
 79. [√(x + h) − √x] ÷ h × [√(x + h) + √x]/[√(x + h) + √x]
       = [(x + h) − x] / [h(√(x + h) + √x)]     ((A − B)(A + B) = A² − B²)
       = h / [h(√(x + h) + √x)] = 1 / (√(x + h) + √x)
       → 1/(2√x) as h → 0.   So d/dx of √x = 1/(2√x).
 80. (f/g)' = (f × g⁻¹)' = f'×g⁻¹ + f × (−1)g⁻² × g'   (product + chain)
       = f'/g − f×g'/g²
       = (f'×g)/g² − (f×g')/g²      (multiply the first term by g/g)
       = (f'g − fg')/g². ∎
 81. (a) From the left: 2 + 1 = 3. From the right: 2 + 2 = 4. Since 3 ≠ 4,
         the two-sided limit does NOT exist — a jump.
     (b) For x < 2, |x − 2| = −(x − 2), so the quotient is −1. For x > 2 it
         is +1. Left −1 ≠ right +1 → DNE. (This is why |x| has no derivative
         at 0 — Lesson 5's corner!)
 82. 2x + 2y = 1,600 → y = 800 − x. A(x) = x(800 − x) = 800x − x².
     A'(x) = 800 − 2x = 0 → x = 400; then y = 400 — equal sides: a SQUARE.
     A'' = −2 < 0 confirms max; endpoints give A = 0.
     Max area = 400 × 400 = 160,000 m².
 83. (a) b²h = 4,000 → h = 4,000/b².
     (b) S(b) = b² + 4b × (4,000/b²) = b² + 16,000/b.
     (c) S'(b) = 2b − 16,000/b² = 0 → 2b = 16,000/b² → 2b³ = 16,000
         → b³ = 8,000 → b = 20. S''(b) = 2 + 32,000/b³; S''(20) = 2 + 4 = 6 > 0
         → cup → minimum ✅. (Endpoints b → 0 or b → ∞ blow S up.)
     (d) h = 4,000/400 = 10 cm; S = 20² + 4×20×10 = 400 + 800 = 1,200 cm².
 84. (a) P(x) = x(500 − x) − (100x + 12,000) = −x² + 400x − 12,000.
     (b) P'(x) = −2x + 400 = 0 → x = 200 phones; price = 500 − 200 = $300;
         P(200) = −40,000 + 80,000 − 12,000 = $28,000.
         (Cross-check: revenue 200 × 300 = 60,000; cost 20,000 + 12,000 =
         32,000; 60,000 − 32,000 = 28,000 ✅.)
     (c) P'' = −2 < 0 → cap → maximum ✅.
 85. (a) ∫₀³ (3t² − 12) dt = [t³ − 12t] from 0 to 3 = (27 − 36) − 0 = −9 m
         (net displacement — 9 m behind the start).
     (b) v = 3t² − 12 = 0 → t² = 4 → t = 2 (in the interval).
         Backward leg: ∫₀² = (8 − 24) − 0 = −16 → 16 m traveled backward.
         Forward leg: ∫₂³ = (27 − 36) − (8 − 24) = −9 + 16 = 7 m forward.
         TOTAL distance = 16 + 7 = 23 m. (Compare: net was only −9.)
 86. (a) v(t) = 3t² − 12t + 9 = 3(t² − 4t + 3) = 3(t − 1)(t − 3): stopped at
         t = 1 and t = 3.
     (b) a(t) = 6t − 12; a(1) = −6 m/s² (slowing into the stop),
         a(3) = 6 m/s² (speeding out of it).
     (c) v > 0 when (t − 1)(t − 3) > 0: both factors negative (t < 1) or both
         positive (t > 3). Forward on 0 ≤ t < 1 and t > 3; backward between.
 87. (a) f(a) = a² + 1, f'(a) = 2a, so tangent: y = (a² + 1) + 2a(x − a).
     (b) Force through (0, 0): 0 = a² + 1 + 2a(0 − a) = a² + 1 − 2a² = 1 − a²
         → a² = 1 → a = 1 or a = −1.
     (c) a = 1: y = 2 + 2(x − 1) = 2x.  a = −1: y = 2 − 2(x + 1) = −2x.
         Check: y = 2x hits the parabola at (1, 2) with matching slope 2 ✅.
 88. f'(x) = 6x² + 6x − 36 = 6(x² + x − 6) = 6(x + 3)(x − 2) = 0
         → x = −3 or x = 2.
     f(−3) = 2(−27) + 3(9) − 36(−3) + 7 = −54 + 27 + 108 + 7 = 88.
     f(2) = 16 + 12 − 72 + 7 = −37.
     Level points: (−3, 88) and (2, −37).
 89. (a) Right sum: 1×(1 + 4 + 9 + 16) = 30.
     (b) Left sum: 1×(0 + 1 + 4 + 9) = 14.
     (c) True: 64/3 ≈ 21.33. Right overshoots — on a climbing curve the
         right edge is the strip's tallest point; left undershoots.
         Average: (30 + 14)/2 = 22 — off from 21.33 by only 2/3! Balancing
         overhang against gap is the trapezoid idea.
 90. (a) Average = (1/3) × ∫₀³ x² dx = (1/3) × 9 = 3.
     (b) x² = 3 → x = √3 ≈ 1.73, which lies inside [0, 3] ✅. A continuous
         curve always crosses its own average somewhere — that is the Mean
         Value Theorem for integrals.
 91. (a) f'(x) = 1 − 1/x² = 0 → x² = 1 → x = 1 (only the positive root is
         allowed).
     (b) f''(x) = 2/x³; f''(1) = 2 > 0 → cup → minimum ✅.
     (c) The smallest value of x + 1/x on x > 0 is f(1) = 1 + 1 = 2, so
         x + 1/x ≥ 2 for all positive x. ∎ (Equality only at x = 1.)
 92. (a) The top edge falls 8 over a run of 12: slope −8/12 = −2/3, so at
         width x the height is y = 8 − (2/3)x.
     (b) A(x) = 8x − (2/3)x²; A'(x) = 8 − (4/3)x = 0 → (4/3)x = 8 → x = 6.
         A'' = −4/3 < 0 → max ✅. Height y = 8 − (2/3)×6 = 8 − 4 = 4.
         A = 6 × 4 = 24.
     (c) Triangle area = 1/2 × 12 × 8 = 48, and 24/48 = 1/2 — the biggest
         inscribed rectangle always captures exactly HALF the triangle.
 93. (x + h)⁴ = x⁴ + 4x³h + 6x²h² + 4xh³ + h⁴   (Pascal's row 1 4 6 4 1)
     Subtract x⁴: 4x³h + 6x²h² + 4xh³ + h⁴
     Divide by h: 4x³ + 6x²h + 4xh² + h³
     Limit as h → 0: every term with an h dies → 4x³.
     Matches the power rule: d/dx of x⁴ = 4x³ ✅.
 94. f'(x) = 3x² − 3 = 3(x − 1)(x + 1) → critical x = −1, 1 (both inside).
     Values at ALL suspects:
         f(−2) = −8 + 6 = −2        (endpoint)
         f(−1) = −1 + 3 = 2         (critical)
         f(1) = 1 − 3 = −2          (critical)
         f(5/2) = 125/8 − 15/2 = 125/8 − 60/8 = 65/8 = 8.125   (endpoint)
     Absolute max: 65/8 at the ENDPOINT x = 5/2 — the derivative never
     warned us! Absolute min: −2, tied at x = −2 and x = 1. Endpoints count.
 95. ∫₀² (2x − x²) dx = [x² − x³/3] from 0 to 2 = (4 − 8/3) − 0
     = 12/3 − 8/3 = 4/3. (Top minus bottom, one integral.)
 96. ∫₀¹² 30t dt = [15t²] from 0 to 12 = 15 × 144 − 0 = 2,160 m.
     Triangle check: the speed graph is a triangle of base 12 s and height
     30 × 12 = 360 m/s: 1/2 × 12 × 360 = 2,160 ✅ — two methods, one answer.
 97. 2x + 2y = P → y = P/2 − x. A(x) = x(P/2 − x) = (P/2)x − x².
     A'(x) = P/2 − 2x = 0 → x = P/4, so y = P/4 as well: equal sides — a
     SQUARE. A'' = −2 < 0 confirms max; endpoints x = 0 or P/2 give A = 0.
     Max area = (P/4)² = P²/16. ∎ (For P = 1,600: side 400, area 160,000 —
     exactly problem 82.)
 98. (a) f'(x) = 3x² − 6x − 9 = 3(x² − 2x − 3) = 3(x − 3)(x + 1)
         → critical x = −1 and x = 3.
     (b) f''(x) = 6x − 6: f''(−1) = −12 < 0 → peak, f(−1) = −1 − 3 + 9 + 2 = 7.
         f''(3) = 12 > 0 → valley, f(3) = 27 − 27 − 27 + 2 = −25.
     (c) f''(x) = 0 → x = 1, and f'' flips from negative to positive there
         (6x − 6 is negative below 1, positive above) → inflection point at
         x = 1, height f(1) = 1 − 3 − 9 + 2 = −9. The curve bends from cap
         to cup exactly halfway between peak and valley.
 99. Antidifferentiate: f(x) = 2x³ − 2x² + C. Use the point (1, 3):
     f(1) = 2 − 2 + C = C, and we need f(1) = 3, so C = 3.
     f(x) = 2x³ − 2x² + 3. Check: f'(x) = 6x² − 4x ✅ and f(1) = 3 ✅.
100. Model solution with f(x) = x² − 4x + 3 (yours will differ!):
     (a) f'(x) = 2x − 4. Definition check on the x² term:
         [(x + h)² − x²]/h = (2xh + h²)/h = 2x + h → 2x ✅.
     (b) At a = 1: f(1) = 1 − 4 + 3 = 0 and f'(1) = −2, so the tangent is
         y = 0 + (−2)(x − 1) = −2x + 2. Touch check: at x = 1, the line
         gives −2 + 2 = 0 = f(1) ✅.
     (c) f'(x) = 2x − 4 = 0 → x = 2; f'' = 2 > 0 → valley; f(2) = 4 − 8 + 3
         = −1. Single valley at (2, −1).
     (d) f factors as (x − 1)(x − 3), so f ≥ 0 on [0, 1]:
         ∫₀¹ (x² − 4x + 3) dx = [x³/3 − 2x² + 3x] from 0 to 1
         = (1/3 − 2 + 3) − 0 = 4/3.
     (e) HOW FAST: "how fast is f changing at the valley floor x = 2?" —
         f'(2) = 0, level. HOW MUCH: "how much area sits under f from 0 to
         1?" — 4/3, from part (d). If your function produced a derivative, a
         tangent that touches, classified critical points, and an area,
         your finale is correct!


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you genuinely understand calculus at the honors level — limits as a tolerance game you can win against any challenger, derivatives built from four honest lines of algebra, areas conquered by infinite rectangle sums, and the Fundamental Theorem tying slopes and areas into one idea. You did not just memorize nxⁿ⁻¹ — you watched it climb out of the binomial expansion, and you know exactly why f' = 0 is only a candidate, never a verdict. The next time someone says calculus is too hard, smile: you have computed derivatives from the definition, optimized fences and profits, and proved the Fundamental Theorem makes sense. Great work!
