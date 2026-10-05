Matrix Math — A Complete Lesson
═══════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        [ 2  3 ] + [ 5  1 ] = [ 7  4 ]
        [ 1  4 ]   [ 0  2 ]   [ 1  6 ]

        row [ 1  2 ] meets column [ 3 ; 1 ]:  1×3 + 2×1 = 5

Those two lines are matrix math in action. A matrix (say it: MAY-tricks) is just a grid of numbers — rows across, columns down — like a scoreboard or a spreadsheet. The first line adds two grids square by square. The second shows the heartbeat of matrix multiplication: a row pairs with a column, you multiply the partners, then add. The plural of matrix is matrices (MAY-tri-sees) — and once you can handle two or three of them at once, you can do things that feel like magic.

Why do people care? Because the world runs on grids of numbers! Every photo on your phone is a grid of pixel numbers. Every 3D video game spins and flips its world by multiplying matrices — millions of times per second. Music recommendations, weather forecasts, search engines, and the giant AI models that write poems all run on enormous versions of the little 2 × 2 grids you'll master today. Matrices are how computers think about tables of numbers — and tables of numbers are everywhere.

You already know how to add and multiply single numbers — so we'll spend zero time relearning that and go straight to grids.

In this lesson, you will:

  1. Meet the matrix — rows, columns, sizes, and every square's address
  2. Add and subtract grids square by square (and learn the same-size rule)
  3. Scale a whole grid with one number — even a fraction like 1/2
  4. Learn real matrix multiplication: row × column, pair them up and add
  5. Discover that order matters — A × B is usually NOT B × A
  6. Meet the zero grid and the identity grid — the 0 and 1 of matrix world
  7. Use matrices for real: scoreboards, brightened photos, secret codes, flipped points
  8. Learn the common mistakes so you never make them
  9. Practice with 100 problems at the end!

How to use this lesson: Read the sections in order. Each section starts with the key idea you'll learn in it. Take your time, and try every "Your Turn" box with a pencil and paper. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: Meet the Matrix — Rows, Columns, Addresses
─────────────────────────────────────────────

📌 Key idea of this section:

        Rows go ACROSS. Columns go DOWN.
        Size = (rows) × (columns).  Address = (row, column) — row first!

The scoreboard grid

You and a friend play three rounds of a game. Your scores are 3, 7, 1; your friend's are 8, 2, 6. A table holds the whole story:

        [ 3  7  1 ]
        [ 8  2  6 ]

That grid of numbers is a matrix. The sideways lines are rows (like rows of seats in a theater — across!). The up-and-down lines are columns (like the stone columns that hold up a roof — up and down!). Here, row 1 is you, row 2 is your friend, and each column is one round.

Size: rows first, always

Count the rows, then the columns: this grid is 2 by 3, written 2 × 3. Not 3 × 2! Rows always get named first — a 3 × 2 grid has THREE rows and two columns, a completely different shape:

        [ 3  8 ]
        [ 7  2 ]
        [ 1  6 ]

Addresses: every square has a seat number

Every square in a grid has an address made of two numbers: (row, column). In the scoreboard, the 6 sits at (row 2, column 3). Row first, always. (Grown-ups squeeze the address into a tiny corner: a₂₃ means "row 2, column 3." Same idea, smaller costume.)

The flat way to write a grid

Drawing a grid takes several lines, so there's a squished one-line notation too: a semicolon means "drop down to the next row."

        [ 3  7  1 ;  8  2  6 ]   is the very same scoreboard grid

You'll see both styles in the practice problems — they're the same grids in different outfits.

Two special shapes

A grid with ONE row, like [ 4  0  6  1 ], is called a row grid (size 1 × 4). A grid with ONE column is a column grid (size 3 × 1):

        [ 5 ]
        [ 2 ]
        [ 9 ]

Even a single number like 7 is secretly a 1 × 1 grid. Once you see it, you see grids everywhere: a spreadsheet is a giant matrix, and a photo is a giant matrix of pixel numbers.

✏️ Your Turn

Here is a grid: T = [ 5  9  2 ;  4  0  8 ]. (a) What is its size? (b) What number sits at (row 1, column 3)? (c) What is the address of the 9?

Answers: (a) 2 × 3 — two rows, three columns. (b) 2. (c) (row 1, column 2) — the 9 is in the first row, second column.


─────────────────────────────────────────────
Lesson 2: Adding and Subtracting — Square by Square
─────────────────────────────────────────────

📌 Key idea of this section:

        Add (or subtract) MATCHING squares — same address to same address.
        The grids must be the SAME size, or some squares have no partner.

The two-weekend scoreboard

Suppose you played the same three rounds on two weekends. Here's how to find your totals — weekend 1 plus weekend 2, matching square to matching square:

        [ 3  7  1 ] + [ 2  0  4 ] = [ 5  7  5 ]
        [ 8  2  6 ]   [ 1  3  0 ]   [ 9  5  6 ]

Each square of the answer lives at the same address as its two partners: the 9 in the corner came from 8 + 1, both at (row 2, column 1). No square ever mixes with a different address. Square by square — that's the whole rule.

The same-size rule

Can you add a 2 × 2 grid to a 2 × 3 grid? Line them up and watch:

        [ 1  2 ] + [ 1  2  3 ] = ???
        [ 3  4 ]   [ 4  5  6 ]

The 4 has a partner... but the 3 and the 6 at the ends have none. The grids are different shapes, so adding them is impossible. Same size, or no sum. ✅ (Same rule for subtraction.)

Subtraction: the improvement detector

Subtracting works the same way, and it answers a great question: how much did you improve? Subtract last month's scores from this month's:

        [ 3  7  1 ] − [ 1  2  1 ] = [ 2  5  0 ]
        [ 8  2  6 ]   [ 3  2  2 ]   [ 5  0  4 ]

You improved by 5 in round 2! (If a score ever drops, the answer grid just tells the truth with a negative number.)

✏️ Your Turn

(a) Add: [ 2  4 ;  1  3 ] + [ 3  1 ;  2  2 ]. (b) Subtract: [ 6  5 ;  4  7 ] − [ 2  3 ;  4  1 ].

Answers: (a) [ 5  5 ;  3  5 ]. (b) [ 4  2 ;  0  6 ] — square by square, matching addresses.


─────────────────────────────────────────────
Lesson 3: The Scalar — One Number Times a Whole Grid
─────────────────────────────────────────────

📌 Key idea of this section:

        k × A means: multiply EVERY square by k.
        For combos like 2A + B: scale first, then add matching squares.

Double-points weekend

The game announces: every score this weekend counts DOUBLE! You don't need to double square by square on paper — write it like this:

        2 × [ 3  1  2 ] = [ 6  2  4 ]
            [ 4  0  3 ]   [ 8  0  6 ]

Every square gets multiplied by 2. A single number that scales a whole grid like this is called a scalar — it zooms the whole grid bigger (or smaller) all at once.

Fractions are scalars too

A photo editor darkens a picture by multiplying every pixel by 1/2. You can do the same to a grid:

        1/2 × [ 4  6 ] = [ 2  3 ]
              [ 2  8 ]   [ 1  4 ]

Halving a grid is no harder than halving four numbers. (There's your fraction practice sneaking in!)

Combos: scale first, then add

The best trick is combining the two moves. Say A = [ 1  2 ;  0  3 ] and B = [ 2  1 ;  4  0 ]. What is 2A + B? Scale A first, then add:

        2A = [ 2  4 ]        2A + B = [ 2  4 ] + [ 2  1 ] = [ 4  5 ]
             [ 0  6 ]                  [ 0  6 ]   [ 4  0 ]   [ 4  6 ]

Two moves you already know, one after the other. (Bonus pattern: 2A + 2B always equals 2(A + B) — the scalar spreads over the sum, just like 2 × (3 + 5) = 2 × 3 + 2 × 5 with ordinary numbers.)

✏️ Your Turn

Let A = [ 1  0 ;  2  1 ] and B = [ 0  3 ;  1  2 ]. (a) Find 3A. (b) Find A + 2B.

Answers: (a) [ 3  0 ;  6  3 ]. (b) 2B = [ 0  6 ;  2  4 ], so A + 2B = [ 1  6 ;  4  5 ].


─────────────────────────────────────────────
Lesson 4: The Real Matrix Multiplication — Row × Column
─────────────────────────────────────────────

📌 Key idea of this section:

        Row of A pairs with column of B: multiply the partners, ADD the results.
        Each (row, column) meeting makes ONE square of the answer.

The bakery problem

Adding grids was gentle. Multiplying two grids is the strangest recipe in this lesson — so start with the question it was invented to answer.

At the bakery, a muffin costs 2 coins and a juice costs 3. On Monday you buy 3 muffins and 1 juice. On Tuesday, 2 muffins and 4 juices. How much did you spend each day?

        Monday:   3 × 2 + 1 × 3 = 6 + 3 = 9
        Tuesday:  2 × 2 + 4 × 3 = 4 + 12 = 16

Look at the shape of that computation: items × prices, paired up and added. Now write the items as a grid (rows = days) and the prices as a column:

        [ 3  1 ] × [ 2 ] = [  9 ]
        [ 2  4 ]   [ 3 ]   [ 16 ]

The top row (Monday's items) pairs with the price column: first × first, second × second, then add. That's Monday's total — and it lands in the top square of the answer. The bottom row does the same for Tuesday. Each pairing melted a whole row into ONE number.

The pairing has a name: dot product

Pairing two lists number-by-number, multiplying, and adding is called a dot product:

        [ 1  2 ] · [ 3 ; 1 ]  =  1×3 + 2×1 = 3 + 2 = 5

Row × column = pair, multiply, add. Say it until it's automatic — everything else in this lesson is built from it.

The full recipe: every row meets every column

When B has two columns, each row of A meets EACH column of B — and every meeting makes one square of the answer. Watch all four meetings:

        [ 1  2 ] × [ 3  1 ] = [ 7  9 ]
        [ 0  1 ]   [ 2  4 ]   [ 2  4 ]

        (row 1, column 1):  1×3 + 2×2 = 3 + 4 = 7
        (row 1, column 2):  1×1 + 2×4 = 1 + 8 = 9
        (row 2, column 1):  0×3 + 1×2 = 0 + 2 = 2
        (row 2, column 2):  0×1 + 1×4 = 0 + 4 = 4

The address of each answer square tells you exactly who met: square (row 1, column 2) came from row 1 of A and column 2 of B. Row 1 of A never touches row 2 of the answer. That's the whole machine!

Why the weird recipe? Because it's useful. Rows carry "things that happened" (days, players, purchases); columns carry "weights" (prices, points). Row × column turns a table of events into totals — the bakery trick, over and over, a million times a second inside every computer.

✏️ Your Turn

Compute [ 2  1 ;  1  2 ] × [ 1  3 ;  0  2 ]. Four meetings — do them all.

Answer: (row 1, column 1) = 2×1 + 1×0 = 2; (row 1, column 2) = 2×3 + 1×2 = 8; (row 2, column 1) = 1×1 + 2×0 = 1; (row 2, column 2) = 1×3 + 2×2 = 7. So the answer is [ 2  8 ;  1  7 ]. ✅


─────────────────────────────────────────────
Lesson 5: Order Matters! A × B ≠ B × A
─────────────────────────────────────────────

📌 Key ideas of this section:

        A × B is usually NOT the same as B × A.
        The handshake: (2 × 3) × (3 × 2) works — the INNER numbers match.
        The answer takes the OUTER numbers: 2 × 2.

Socks and shoes

With ordinary numbers, 2 × 3 = 3 × 2 — order never matters. (Grown-up word: multiplication commutes.) Grid addition works that way too: A + B = B + A, since matching squares meet either way. But matrix multiplication is like getting dressed: socks first, then shoes, is NOT the same as shoes first, then socks.

Watch the same two grids multiply in both orders:

        A = [ 1  2 ]        B = [ 0  1 ]
            [ 3  4 ]            [ 1  0 ]

        A × B = [ 2  1 ]        B × A = [ 3  4 ]
                [ 4  3 ]                [ 1  2 ]

Check one square of each: in A × B, the top-left square is 1×0 + 2×1 = 2. In B × A, it's 0×1 + 1×3 = 3. Different from the very first square! (Sharp eyes: A × B swapped A's columns, and B × A swapped A's rows. B is the swapper grid — you'll meet it again in Lesson 7.)

Usually different — not always. Once in a while a special pair of grids multiplies to the same answer in both orders (the intermediate problems sneak one in). But you can never count on it: with matrices, order matters.

The size handshake

Which grids can even meet? Write their sizes side by side and check the INNER numbers:

        (2 × 3) × (3 × 2)   →   inner 3 and 3: MATCH ✅   answer size: 2 × 2
        (2 × 3) × (2 × 3)   →   inner 3 and 2: NO MATCH ❌   impossible!

Why? Every row of A must pair with a column of B, number by number. A row of a 2 × 3 grid holds 3 numbers, so it can only pair with a column that also holds 3 — and the columns of a (3 × anything) grid always do. Inner numbers match = every pairing is complete.

The answer takes the OUTER numbers: rows of A by columns of B. And the extreme case is wild:

        (1 × 4) × (4 × 1)  →  1 × 1   (one number — a single giant dot product!)
        (4 × 1) × (1 × 4)  →  4 × 4   (sixteen squares from the same two skinny grids!)

Same grids, flipped order — even the SIZES disagree. Order really, really matters.

✏️ Your Turn

A is 2 × 3 and B is 3 × 1. (a) Does A × B exist? If so, what size? (b) Does B × A exist?

Answers: (a) Yes — the inner 3s match; the answer is 2 × 1 (a column!). (b) No — the inner numbers would be 1 and 2, and 1 ≠ 2: no handshake, no product.


─────────────────────────────────────────────
Lesson 6: Special Grids — The Zero Grid and the Identity Grid
─────────────────────────────────────────────

📌 Key idea of this section:

        The zero grid is the 0 of matrix world:  A + 0 = A.
        The identity grid I is the 1 of matrix world:  A × I = A.

The grid that does nothing (to sums)

The zero grid is all zeros: [ 0  0 ;  0  0 ]. Add it to anything and nothing changes — just like adding 0 to a number. And subtracting a grid from itself always gives the zero grid: A − A = 0.

The grid that does nothing (to products)

Now the sneakier one. This grid is called the identity, written I:

        I = [ 1  0 ]            I = [ 1  0  0 ]
            [ 0  1 ]                [ 0  1  0 ]
                                    [ 0  0  1 ]

Ones run down the main diagonal (the line of squares from the top-left corner to the bottom-right corner), and zeros fill the rest. Multiply any grid by I and it comes out untouched:

        I × [ 5  3 ] = [ 5  3 ]
            [ 2  4 ]   [ 2  4 ]

        top-left:      1×5 + 0×2 = 5      top-right:     1×3 + 0×4 = 3
        bottom-left:   0×5 + 1×2 = 2      bottom-right:  0×3 + 1×4 = 4

Why does it work? In every dot product, the single 1 grabs exactly one partner and the 0s ignore the rest. The identity is a perfect copy machine. (And it works on both sides: I × A = A and A × I = A. The identity commutes with everybody — it's one of the special pairs from Lesson 5!)

The undo grid (a peek)

Some grids have an undo partner called an inverse: multiply the two and you get I. Doubling then halving is doing nothing — so the doubling grid and the halving grid undo each other:

        [ 2  0 ] × [ 1/2   0  ] = [ 1  0 ] = I
        [ 0  2 ]   [  0   1/2 ]   [ 0  1 ]

        top-left square:  2 × 1/2 + 0 × 0 = 1   (the other three work out the same way)

Not every grid has an undo partner — the zero grid never does, since every product with it is all zeros. But when an inverse exists, it undoes the original perfectly, the way dividing by 2 undoes multiplying by 2. The practice problems will let you verify a couple of undo pairs yourself.

✏️ Your Turn

(a) Compute [ 6  1 ;  3  2 ] × I. (b) What grid added to [ 6  1 ;  3  2 ] gives the zero grid?

Answers: (a) Unchanged: [ 6  1 ;  3  2 ] — the identity copies. (b) The negative of every square: [ −6  −1 ;  −3  −2 ].


─────────────────────────────────────────────
Lesson 7: Matrices at Work — Scores, Photos, Codes, and Flips
─────────────────────────────────────────────

📌 Key idea of this section:

        Photos, scoreboards, secret codes, and 3D games
        all run on the grid moves you just learned.

Scoreboards: totals and weighted points

Addition totals up rounds; multiplication applies weights. If a win in one event is worth more than a win in another, put the points in a column and multiply — every row (player) meets the points column, and out pops each player's total. That's the bakery trick wearing a sports jersey.

Photos: a picture made of numbers

A gray-scale photo is a grid of brightness numbers — 0 is black, 9 is white, and the numbers between are grays. Multiply the photo by 2 and every pixel gets brighter; multiply by 1/2 and it darkens. Photo apps do exactly this, millions of squares at a time. (The practice problems include a tiny photo to brighten — watch out for a pixel that blasts past 9!)

Secret codes: scramble a message

Turn letters into numbers (A = 1, B = 2, ..., Z = 26) and stack them in a column. Then multiply by a scrambler grid:

        "HI" = [ 8 ]        [ 1  1 ] × [ 8 ] = [ 17 ]
               [ 9 ]        [ 0  1 ]   [ 9 ]   [  9 ]

The coded message is 17, 9 — nobody can read it... unless they know the trick: subtract the second number from the first (17 − 9 = 8) and keep the second (9). Back comes 8, 9 = "HI"! The scrambler leaned on the row × column machine, and decoding is the undo idea from Lesson 6 in action. Real computers protect messages with giant versions of this exact trick.

Flips: the swapper grid

A point on graph paper is a pair of numbers, so it's a column grid. Multiply it by the swapper from Lesson 5:

        [ 0  1 ] × [ 3 ] = [ 5 ]
        [ 1  0 ]   [ 5 ]   [ 3 ]

The coordinates switched places — (3, 5) flipped to (5, 3), a mirror-flip across the diagonal line on graph paper! Every 3D game flips, spins, and stretches its world with grids like this, millions of points per second. That spinning dragon? Matrix math.

✏️ Your Turn

Use the swapper [ 0  1 ;  1  0 ] on the point (2, 7). What point comes out?

Answer: [ 0  1 ;  1  0 ] × [ 2 ; 7 ] = [ 7 ; 2 ] — the point flips to (7, 2).


─────────────────────────────────────────────
Lesson 8: Watch Out! Common Mistakes
─────────────────────────────────────────────

📌 Keep the recipes in sight:

        Address = (row, column) — row first!
        Add/subtract: matching squares, same size only.
        Multiply: row × column — pair, multiply, add. Order matters!

Students trip on these five ideas every single year. Learn them now, and they won't catch you!

Mistake 1: Swapping rows and columns

        "The entry at (column 2, row 1)..."   ❌

Addresses are always (row, column) — row first, column second, no exceptions. Memory hook: you ROW a boat ACROSS the lake; a COLUMN holds up the roof, standing up and down. Across first, then down. ✅

Mistake 2: Adding grids of different sizes

        [ 1  2 ] + [ 1  2  3 ] = [ 2  4  3 ]?   ❌
        [ 3  4 ]   [ 4  5  6 ]   [ 7  9  6 ]

Someone "matched" what they could and left the extra squares dangling — that's not a rule, that's wishful thinking. A 2 × 2 and a 2 × 3 can't be added, period. Same size, or no sum. ✅

Mistake 3: Multiplying square by square

        [ 1  0 ] × [ 3  1 ] = [ 3  0 ]?   ❌
        [ 2  1 ]   [ 0  2 ]   [ 0  2 ]

That's how ADDING works — multiplication is a different machine. Every answer square is a row × column dot product:

        [ 1  0 ] × [ 3  1 ] = [ 3  1 ] ✅
        [ 2  1 ]   [ 0  2 ]   [ 6  4 ]

        top-left: 1×3 + 0×0 = 3   top-right: 1×1 + 0×2 = 1
        bottom-left: 2×3 + 1×0 = 6   bottom-right: 2×1 + 1×2 = 4

Mistake 4: Assuming A × B = B × A

        "I computed it in one order — same thing, right?"   ❌

Socks then shoes is not shoes then socks. Always multiply in the order asked — and if a problem asks for both orders, compute both. They'll usually be different grids. ✅

Mistake 5: Pairing, but forgetting to ADD

        [ 1  2 ] × [ 3 ; 1 ] = [ 3  2 ]?   ❌

Multiplying the partners is only half the recipe — a dot product ends by ADDING the pairs into ONE number: 1×3 + 2×1 = 5. If your dot product has two squares, you stopped early. ✅


─────────────────────────────────────────────
Lesson 9: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        size = (rows) × (columns)      address = (row, column) — row first
        add/subtract: matching squares — sizes must match exactly
        scalar k × A: multiply EVERY square by k — even 1/2
        A × B: each square = (row of A) × (column of B) = pair, multiply, add
        handshake: inner sizes must match; the answer wears the outer sizes
        A × B ≠ B × A (usually!)     A + 0 = A     A × I = A

The recap list

  · A matrix is a grid of numbers: rows across, columns down — like a scoreboard, a spreadsheet, or a photo.
  · Adding and subtracting are square by square, and only same-size grids can meet.
  · A scalar zooms every square at once — 2 doubles a grid, 1/2 halves it.
  · Matrix multiplication is row × column: pair the numbers, multiply, then add. Each meeting makes one answer square.
  · The sizes shake hands on the inside, and the answer takes the outside numbers.
  · The zero grid adds nothing; the identity grid copies everything; an inverse undoes.
  · Codes, photos, scoreboards, and game graphics all run on these four moves.

The magic sentence

        Rows across, columns down — add the matching squares.
        Multiply row by column: pair, multiply, add —
        and mind the handshake, because order matters!

Say it out loud three times. Seriously!

Why this matters

You just learned the four moves behind computer graphics, photo editing, data science, and secret codes. Mathematicians call this subject linear algebra, and most students don't meet it until college — but the whole machine is built from adding, multiplying, and careful bookkeeping, which you've had for years. The next time a game world spins smoothly or a photo filter brightens your shot, smile: grids of numbers are doing the work, and you know their secret handshake.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        address = (row, column) — row first!
        add/subtract: matching squares, same size only
        scalar: every square × k        combos: scale first, then add
        A × B square = row of A × column of B: pair, multiply, add
        handshake: (2 × 3) × (3 × 2) → 2 × 2 — inner match, outer answer
        A × B ≠ B × A (usually)     I copies every grid     0 adds nothing

Grab a pencil and paper. Start with the easy ones — they use the exact same patterns from the lessons. Grid answers can be drawn out or written in the flat style, like [ 5  3 ;  6  8 ] — remember, the semicolon means "next row." A few problems are open-ended: they have more than one right answer. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "What kind of move is this — reading, adding, scaling, or row-times-column? And do the sizes match?"


🟢 EASY (Problems 1–70)

Problems 1–10 — Read the grid! Use grid M for problems 1–7. (Lesson 1)

        M = [ 3  7  1 ]
            [ 8  2  6 ]

  1. How many rows does M have?
  2. How many columns does M have?
  3. What is the size of M? (rows × columns)
  4. What number sits at (row 1, column 2)?
  5. What number sits at (row 2, column 3)?
  6. What is the address of the 8?
  7. What is the address of the 1?
  8. What is the size of this tall grid?
     [ 5 ]
     [ 2 ]
     [ 9 ]
  9. What is the size of [ 4  0  6  1 ]?
  10. What is the size of [ 1  2 ;  3  4 ;  5  6 ]? (Careful — count rows first!)

Problems 11–20 — Add the grids: matching squares! (Lesson 2)

  11. [ 1  2 ;  3  4 ] + [ 5  1 ;  0  2 ]
  12. [ 2  0 ;  1  5 ] + [ 3  4 ;  2  1 ]
  13. [ 4  3 ;  2  2 ] + [ 1  1 ;  3  0 ]
  14. [ 6  1 ;  0  3 ] + [ 2  2 ;  4  1 ]
  15. [ 1  3 ;  5  2 ] + [ 4  0 ;  1  6 ]
  16. [ 2  2 ;  2  2 ] + [ 3  1 ;  0  4 ]
  17. [ 1  2  3 ] + [ 4  1  2 ]
  18. [ 3  1 ;  0  2 ;  4  5 ] + [ 1  2 ;  3  3 ;  0  1 ]
  19. [ 1  4  2 ;  3  0  5 ] + [ 2  1  3 ;  4  2  1 ]
  20. Can you add [ 1  2 ;  3  4 ] + [ 1  2  3 ]? Why or why not?

Problems 21–28 — Subtract the grids: same addresses, minus. (Lesson 2)

  21. [ 5  3 ;  4  6 ] − [ 1  2 ;  3  1 ]
  22. [ 7  2 ;  5  5 ] − [ 2  1 ;  4  3 ]
  23. [ 9  4 ;  8  7 ] − [ 3  4 ;  5  2 ]
  24. [ 6  8 ;  2  9 ] − [ 4  3 ;  2  5 ]
  25. [ 4  7 ;  6  3 ] − [ 1  5 ;  6  2 ]
  26. [ 8  6  5 ] − [ 3  2  4 ]
  27. [ 9  3 ;  7  8 ] − [ 9  3 ;  7  8 ] — what do you notice?
  28. [ 2  9 ;  4  1 ] − [ 2  7 ;  0  1 ]

Problems 29–36 — Scale the grid: every square × k. (Lesson 3)

  29. 2 × [ 1  3 ;  2  0 ]
  30. 3 × [ 2  1 ;  0  4 ]
  31. 4 × [ 1  2 ;  3  1 ]
  32. 5 × [ 2  0 ;  1  1 ]
  33. 10 × [ 0  1 ;  1  0 ]
  34. 1/2 × [ 4  6 ;  2  8 ]
  35. 1/2 × [ 6  2 ;  10  4 ]
  36. 1/3 × [ 3  6 ;  9  0 ]

Problems 37–44 — Scale first, then combine! Use A = [ 1  2 ;  0  3 ] and B = [ 2  1 ;  4  0 ]. (Lesson 3)

  37. 2A
  38. 3B
  39. A + B
  40. 2A + B
  41. A + 2B
  42. 2A + 2B — check it against 2(A + B)!
  43. New grids: C = [ 3  5 ;  6  4 ] and D = [ 1  2 ;  2  1 ]. Find C − 2D.
  44. With the same C and D, find 2C − D.

Problems 45–52 — The real multiplication: row × column. (Lesson 4)

  45. Row meets column: [ 1  2 ] × [ 3 ; 1 ] = 1×3 + 2×1 = ?
  46. [ 2  3 ] × [ 4 ; 2 ] = ?
  47. [ 1  0 ;  0  1 ] × [ 5  3 ;  2  4 ] — the answer might surprise you!
  48. [ 1  2 ;  0  1 ] × [ 3  1 ;  2  4 ]
  49. [ 2  1 ;  1  2 ] × [ 1  3 ;  0  2 ]
  50. [ 3  0 ;  1  2 ] × [ 2  1 ;  1  1 ]
  51. [ 1  1 ;  2  1 ] × [ 2  2 ;  1  3 ]
  52. [ 2  2 ;  0  3 ] × [ 1  0 ;  2  1 ]

Problems 53–58 — Grid × column: dot products down the line. (Lessons 4 and 7)

  53. [ 1  2 ;  0  1 ] × [ 3 ; 4 ]
  54. [ 2  0 ;  1  1 ] × [ 3 ; 2 ]
  55. [ 1  1 ;  1  2 ] × [ 5 ; 3 ]
  56. [ 3  1 ;  0  2 ] × [ 2 ; 4 ]
  57. The bakery returns! Items (rows = days): [ 3  1 ;  2  4 ].
      Prices column: [ 2 ; 3 ] (muffin = 2, juice = 3).
      Multiply to find each day's total.
  58. [ 0  1 ;  1  0 ] × [ 5 ; 7 ] — what did this grid DO to the column?

Problems 59–66 — Backwards puzzles! Fill in the missing pieces. (Lessons 2 and 3)

  59. [ 0  0 ;  0  0 ] + [ 4  2 ;  1  3 ] = ?
  60. [ 4  2 ;  1  3 ] − [ 4  2 ;  1  3 ] = ?
  61. 0 × [ 5  9 ;  8  7 ] = ?
  62. 1 × [ 5  9 ;  8  7 ] = ?
  63. [ 2  ? ;  1  4 ] + [ 1  5 ;  ?  2 ] = [ 3  8 ;  6  6 ]. Find both missing numbers.
  64. [ 6  ? ;  0  9 ] − [ 4  1 ;  0  ? ] = [ 2  3 ;  0  5 ]. Find both missing numbers.
  65. k × [ 1  2 ;  3  1 ] = [ 4  8 ;  12  4 ]. What is k?
  66. k × [ 2  1 ;  0  3 ] = [ 6  3 ;  0  9 ]. What is k?

Problems 67–70 — Quick think! Explain your answer in one sentence.

  67. True or false: two grids can be added only if they are the same size.
  68. True or false: to multiply two grids, you multiply the matching squares.
  69. A grid has 3 rows and 5 columns. How many squares does it have in total?
  70. In an address, which number comes first — the row or the column?
      And what's your way of remembering?


🟡 INTERMEDIATE (Problems 71–90)

Problems 71–74 — The size handshake: will the product exist? If yes, what size is the answer? (Lesson 5)

  71. A is 2 × 3, B is 3 × 2. Does A × B exist? What size?
  72. A is 2 × 3, B is 2 × 3. Does A × B exist?
  73. A is 1 × 4, B is 4 × 1. Does A × B exist? What size?
  74. A is 3 × 1, B is 1 × 3. What size is A × B — and what size is B × A?
      (Same two grids, two orders, two different answer shapes!)

Problems 75–78 — Bigger grids multiply: 2 × 3 meets 3 × 2. Each answer square is a THREE-pair dot product. (Lesson 5)

  75. [ 1  2  0 ;  0  1  3 ] × [ 2  1 ;  1  0 ;  0  2 ]
  76. [ 2  1  1 ;  1  0  2 ] × [ 1  0 ;  2  1 ;  0  1 ]
  77. [ 3  0  1 ;  2  2  0 ] × [ 0  2 ;  1  1 ;  3  0 ]
  78. [ 1  1  2 ;  2  0  1 ] × [ 2  0 ;  0  2 ;  1  1 ]

Problems 79–82 — Order matters! Compute A × B and B × A, then compare. (Lesson 5)

  79. A = [ 1  2 ;  3  4 ], B = [ 0  1 ;  1  0 ]
  80. A = [ 2  0 ;  1  3 ], B = [ 1  1 ;  0  2 ]
  81. A = [ 1  0 ;  0  2 ], B = [ 3  0 ;  0  1 ] — surprise ahead! Compute both orders.
  82. Fill in the blank, and explain: matrix multiplication usually does not ______.

Problems 83–88 — Zero grids, identity grids, and undo pairs. (Lesson 6)

  83. [ 1  0 ;  0  1 ] × [ 7  2 ;  5  3 ]
  84. [ 4  1 ;  2  6 ] × [ 1  0 ;  0  1 ]
  85. Write out the 3 × 3 identity grid.
  86. What grid, added to [ 5  3 ;  1  4 ], gives the zero grid?
  87. Verify an undo pair: compute [ 2  0 ;  0  2 ] × [ 1/2  0 ;  0  1/2 ].
      What grid do you get?
  88. Find the grid that undoes [ 3  0 ;  0  3 ]: what grid times it gives I?
      (Hint: what undoes tripling?)

Problems 89–90 — Explain yourself!

  89. True or false — and why: "Since A + B = B + A for grids, it must also
      be true that A × B = B × A."
  90. Your friend computed [ 1  2 ;  3  4 ] × [ 5  6 ;  7  8 ] by multiplying
      the matching squares and got [ 5  12 ;  21  32 ]. In one or two
      sentences, explain the mistake — and what the correct recipe is.


🔴 CHALLENGE (Problems 91–100)

  91. The tournament scoreboard. Two teams compete in two events across two
      days. Day 1 scores: [ 4  2 ;  3  5 ] (rows = teams, columns = events).
      Day 2 scores: [ 1  3 ;  4  0 ].
      (a) Find the totals grid. (b) Add up each ROW of the totals grid —
      which team scored more overall?
  92. The brightened photo. This tiny photo has brightness numbers from
      0 (black) to 9 (white):  P = [ 1  3  2 ;  4  5  1 ;  2  0  3 ].
      (a) Compute 2P to brighten it. (b) Which square blasts past 9 —
      too bright for the scale?
  93. The secret code. Letters become numbers: A = 1, B = 2, ..., Z = 26.
      The message "GO" is the column [ 7 ; 15 ]. Scramble it with
      S = [ 1  1 ;  0  1 ]:  compute S × [ 7 ; 15 ].
      (a) What two numbers come out? (b) What letters are those?
      (c) Decode: subtract the second number from the first (and keep the
      second) — do you get "GO" back?
  94. The mirror flip. Multiply the swapper F = [ 0  1 ;  1  0 ] by each point:
      (a) [ 2 ; 5 ]   (b) [ 1 ; 3 ]   (c) [ 4 ; 0 ].
      (d) In one sentence: what does F do to every point?
      (e) Compute F × F. Flipping twice should undo the flip — does it?
  95. Powers of a grid. A = [ 1  1 ;  0  2 ].
      (a) Compute A² — that means A × A. (b) Compute A³ = A² × A.
      (c) Look at the top-right squares of A, A², A³: 1, 3, 7... guess the
      next one!
  96. The missing entry. [ 2  x ;  1  3 ] × [ 1  1 ;  0  2 ] = [ 2  6 ;  1  7 ].
      Find x. (Hint: which answer square contains x? Pair up row 1 with
      column 2:  2×1 + x×2 = 6.)
  97. Design it — order matters! Invent your OWN pair of 2 × 2 grids
      (use only the numbers 0, 1, 2, 3) where A × B ≠ B × A.
      Compute both products to prove they're different.
  98. The weighted championship. Two players, three events. Wins grid
      (rows = players):  Amy [ 2  1  0 ], Bo [ 1  2  1 ]. Points per event:
      race = 5, chess = 3, puzzle = 4 — the column [ 5 ; 3 ; 4 ].
      Multiply the wins grid by the points column to find each player's
      total score. Who wins the championship?
  99. The sum-and-difference puzzle. Find two grids A and B so that BOTH of
      these are true at the same time:
      A + B = [ 4  4 ;  4  4 ]   and   A − B = [ 2  0 ;  0  2 ].
      (Hint: add the two equations — the Bs cancel! 2A = [ 6  4 ;  4  6 ].)
  100. The grand finale — design it! Invent a word problem whose answer is a
       matrix SUM (like problem 91), AND another whose answer is a
       grid × column (like problem 57 or 98). Then solve both to make sure
       they work!


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — row-first addresses, the same-size rule, scale-then-add, or the row × column pairing.

Easy

  1–7:   2 rows  ·  3 columns  ·  2 × 3  ·  7  ·  6  ·  (row 2, column 1)  ·
         (row 1, column 3)
  8–10:  3 × 1  ·  1 × 4  ·  3 × 2 (three rows, two columns!)

  11–16: [ 6  3 ;  3  6 ]  ·  [ 5  4 ;  3  6 ]  ·  [ 5  4 ;  5  2 ]  ·
         [ 8  3 ;  4  4 ]  ·  [ 5  3 ;  6  8 ]  ·  [ 5  3 ;  2  6 ]
  17–19: [ 5  3  5 ]  ·  [ 4  3 ;  3  5 ;  4  6 ]  ·  [ 3  5  5 ;  7  2  6 ]
  20:    No — a 2 × 2 grid and a 1 × 3 grid are different sizes, so some
         squares would have no partner.

  21–26: [ 4  1 ;  1  5 ]  ·  [ 5  1 ;  1  2 ]  ·  [ 6  0 ;  3  5 ]  ·
         [ 2  5 ;  0  4 ]  ·  [ 3  2 ;  0  1 ]  ·  [ 5  4  1 ]
  27–28: [ 0  0 ;  0  0 ] — subtracting a grid from itself gives the zero
         grid!  ·  [ 0  2 ;  4  0 ]

  29–33: [ 2  6 ;  4  0 ]  ·  [ 6  3 ;  0  12 ]  ·  [ 4  8 ;  12  4 ]  ·
         [ 10  0 ;  5  5 ]  ·  [ 0  10 ;  10  0 ]
  34–36: [ 2  3 ;  1  4 ]  ·  [ 3  1 ;  5  2 ]  ·  [ 1  2 ;  3  0 ]

  37–42: [ 2  4 ;  0  6 ]  ·  [ 6  3 ;  12  0 ]  ·  [ 3  3 ;  4  3 ]  ·
         [ 4  5 ;  4  6 ]  ·  [ 5  4 ;  8  3 ]  ·  [ 6  6 ;  8  6 ] —
         which matches 2(A + B) = 2 × [ 3  3 ;  4  3 ] ✅
  43–44: 2D = [ 2  4 ;  4  2 ], so C − 2D = [ 1  1 ;  2  2 ]  ·
         2C = [ 6  10 ;  12  8 ], so 2C − D = [ 5  8 ;  10  7 ]

  45–46: 5  ·  14
  47–52: [ 5  3 ;  2  4 ] — the identity copied it!  ·  [ 7  9 ;  2  4 ]  ·
         [ 2  8 ;  1  7 ]  ·  [ 6  3 ;  4  3 ]  ·  [ 3  5 ;  5  7 ]  ·
         [ 6  2 ;  6  3 ]

  53–56: [ 11 ; 4 ]  ·  [ 6 ; 5 ]  ·  [ 8 ; 11 ]  ·  [ 10 ; 8 ]
  57:    [ 9 ; 16 ] — Monday 9 coins (3×2 + 1×3), Tuesday 16 (2×2 + 4×3)
  58:    [ 7 ; 5 ] — the swapper flipped the column upside down!

  59–62: [ 4  2 ;  1  3 ] — adding the zero grid changes nothing  ·
         [ 0  0 ;  0  0 ]  ·  [ 0  0 ;  0  0 ] — the scalar 0 wipes the
         grid clean  ·  [ 5  9 ;  8  7 ] — the scalar 1 copies it
  63–66: 3 and 5  ·  4 and 4  ·  k = 4  ·  k = 3

  67:    True — every square needs a partner with the same address.
  68:    False — that's how ADDING works. Multiplication is row × column:
         pair, multiply, add.
  69:    15 squares (3 × 5).
  70:    The row comes first. Any memory hook works — "row your boat
         across; columns stand up and down."

Intermediate

  71–74: yes — the inner 3s match; the answer is 2 × 2  ·
         no — the inner numbers 3 and 2 don't match, so no product exists  ·
         yes — the inner 4s match; the answer is 1 × 1 (a single number!)  ·
         A × B is 3 × 3, but B × A is 1 × 1 — order even changes the SIZE

  75–78: [ 4  1 ;  1  6 ]  ·  [ 4  2 ;  1  2 ]  ·  [ 3  6 ;  2  6 ]  ·
         [ 4  4 ;  5  1 ]
         (Sample work for 75:  1×2+2×1+0×0 = 4,  1×1+2×0+0×2 = 1,
         0×2+1×1+3×0 = 1,  0×1+1×0+3×2 = 6.)

  79:    A × B = [ 2  1 ;  4  3 ] but B × A = [ 3  4 ;  1  2 ] — DIFFERENT!
         (A × B swapped A's columns; B × A swapped A's rows.)
  80:    A × B = [ 2  2 ;  1  7 ] but B × A = [ 3  3 ;  2  6 ] — different again.
  81:    Surprise: BOTH orders give [ 3  0 ;  0  2 ]! A few special pairs
         (like these diagonal grids) do commute — but you can never count
         on it. "Usually not equal" doesn't mean "never equal."
  82:    commute — give the same answer in both orders. (Socks then shoes
         is not shoes then socks!)

  83–84: [ 7  2 ;  5  3 ] — unchanged  ·  [ 4  1 ;  2  6 ] — unchanged;
         the identity copies on both sides
  85:    [ 1  0  0 ;  0  1  0 ;  0  0  1 ] — 1s down the main diagonal
  86:    [ −5  −3 ;  −1  −4 ] — flip the sign of every square
  87:    [ 1  0 ;  0  1 ] = I  (2 × 1/2 = 1, and the 0s stay 0) — doubling
         and halving undo each other!
  88:    [ 1/3  0 ;  0  1/3 ] — each diagonal square becomes 3 × 1/3 = 1,
         so the product is I. Tripling is undone by thirding!

  89:    False. Adding is square by square — swapping the grids changes
         nothing, since 2 + 5 = 5 + 2 inside every square. But multiplying
         pairs rows with columns in a specific order — like socks then
         shoes — so A × B and B × A are usually different grids.
  90:    Multiplying matching squares is the ADDING idea, not the
         multiplication recipe. Each answer square must be a row × column
         dot product: pair a row of the first grid with a column of the
         second, multiply the partners, then add. (The true answer here is
         [ 19  22 ;  43  50 ] — much bigger, because rows and columns mix!)

Challenge

  91:    (a) [ 5  5 ;  7  5 ]. (b) Team 1: 5 + 5 = 10; Team 2: 7 + 5 = 12 —
         Team 2 scored more overall, even though Day 1 was closer.
  92:    (a) 2P = [ 2  6  4 ;  8  10  2 ;  4  0  6 ]. (b) The middle square,
         (row 2, column 2): 5 × 2 = 10, which is past 9 — it clips off the
         top of the scale (photo editors really fight this!).
  93:    (a) 7 + 15 = 22 and 15, so the coded column is [ 22 ; 15 ].
         (b) 22 = V and 15 = O — the coded message reads "VO"! (c) Decode:
         22 − 15 = 7 = G, and 15 = O — "GO" is back. ✅
  94:    (a) [ 5 ; 2 ]  (b) [ 3 ; 1 ]  (c) [ 0 ; 4 ]. (d) It swaps the two
         coordinates — a mirror flip across the diagonal. (e) F × F =
         [ 1  0 ;  0  1 ] = I, the identity! Two flips undo everything, so
         the swapper is its own undo grid.
  95:    (a) A² = [ 1  3 ;  0  4 ]  (top row: 1×1+1×0 = 1, 1×1+1×2 = 3).
         (b) A³ = [ 1  7 ;  0  8 ]  (1×1+3×0 = 1, 1×1+3×2 = 7).
         (c) The top-right goes 1, 3, 7 — doubling and adding 1 — so the
         next is 15. (And the bottom-right goes 2, 4, 8 — doubling: 16!)
  96:    x = 2. The (row 1, column 2) square is 2×1 + x×2 = 2 + 2x, and the
         answer grid says that equals 6 — so 2x = 4 and x = 2. (Check the
         other squares: 2×1 + 2×0 = 2 ✅, 1×1 + 3×0 = 1 ✅, 1×1 + 3×2 = 7 ✅.)
  97:    One working pair: A = [ 1  2 ;  0  1 ], B = [ 0  1 ;  1  0 ].
         A × B = [ 2  1 ;  1  0 ] but B × A = [ 0  1 ;  1  2 ] — different! ✅
         Yours can be completely different; as long as the two products
         aren't identical grids, you've proved order matters.
  98:    Amy: 2×5 + 1×3 + 0×4 = 10 + 3 = 13. Bo: 1×5 + 2×3 + 1×4 =
         5 + 6 + 4 = 15. The answer column is [ 13 ; 15 ] — Bo wins the
         championship, 15 to 13!
  99:    Adding the equations: (A + B) + (A − B) = 2A = [ 6  4 ;  4  6 ],
         so A = [ 3  2 ;  2  3 ]. Then B = [ 4  4 ;  4  4 ] − A =
         [ 1  2 ;  2  1 ]. Check: A + B = [ 4  4 ;  4  4 ] ✅ and
         A − B = [ 2  0 ;  0  2 ] ✅.
  100:   Sample sum problem: "Two classes held a bake sale. Class 1 sold
         [ 4  3 ;  2  5 ] treats over two days, class 2 sold [ 2  1 ;  3  1 ].
         Total sales?" → [ 6  4 ;  5  6 ]. Sample grid × column problem:
         "You win 2 races worth 3 points each and 1 chess game worth 5;
         your friend wins 1 race and 2 chess games. Scores?" →
         [ 2  1 ;  1  2 ] × [ 3 ; 5 ] = [ 11 ; 13 ]. Your problems will be
         different — if one answer adds matching squares and the other
         pairs rows with a column, you're right!


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you truly understand matrix math — reading grids by address, adding and scaling square by square, the row × column multiplication machine, the size handshake, and why order matters. That's linear algebra — a subject most students don't see for years — running on nothing but addition, multiplication, and careful bookkeeping. The next time a game world spins or a secret code scrambles a message, smile: you know the grids behind the curtain. Great work!
