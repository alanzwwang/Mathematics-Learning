Pascal's Triangle — A Complete Lesson (Honors Edition)
══════════════════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

                  1
                1   1
              1   2   1
            1   3   3   1
          1   4   6   4   1
        1   5   10  10  5   1

        Row 5's sum:  1 + 5 + 10 + 10 + 5 + 1 = 32 = 2⁵
        Ways to pick 2 captains from 9 players:  36  (it's entry 2 of row 9)
        Coefficient of x³ in (x + 2)⁵:  40  (row 5 is hiding inside the algebra!)

This little pyramid is Pascal's triangle, built by one baby-simple rule: every number is the sum of the two numbers above it. A rule a 1st grader could follow — yet out of it tumble powers of 2, triangular numbers, the Binomial Theorem, and the answers to half the counting questions in competition math. One simple machine, a dozen deep theorems.

In this lesson we don't just NOTICE the patterns — we PROVE them. That word is the difference between this edition and everything easier. A proof is an argument that shows a pattern must continue forever, not just for the rows you checked. You'll learn the three great proof moves of combinatorics: counting the same thing two different ways, splitting into cases that cover everything, and telescoping (peeling a big sum down to a small one). These moves are the real treasure; the triangle is just the playground.

In this lesson, you will:

  1. Build the triangle and master its secret indexing system (row 0, entry 0)
  2. Derive the factorial formula C(n, k) = n! / (k!(n − k)!) from scratch
  3. Prove Pascal's rule two completely different ways — a story proof and an algebra proof
  4. Prove row n sums to 2ⁿ twice, and split every row in half with alternating sums
  5. Unpack the diagonals: triangular numbers, tetrahedral numbers, and the hockey stick identity
  6. Wield the Binomial Theorem — expansions, coefficient hunting, and the truth about 11ⁿ
  7. Count grid paths (through corners, around barriers) and prove Vandermonde's identity
  8. Chase probability, odd-entry patterns, and a prime-divisibility theorem
  9. Dodge the classic mistakes — including the algebraic traps that catch honors students
  10. Practice with 100 problems, every single answer explained step by step!

How to use this lesson: Read the sections in order — each one builds on the last. Keep a written copy of rows 0–10 next to you (you'll build row 10 yourself in Lesson 1). Every proof is spelled out line by line; read each line and ask "do I believe this line follows from the one before?" Try every "Your Turn" box with pencil and paper before peeking. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: Meet the Triangle — and Its Secret Indexing System
─────────────────────────────────────────────

📌 Key ideas of this section:

        Every entry is the SUM of the two entries above it (Pascal's rule).
        Edge entries have only one parent, so they are always 1.
        Rows AND entries are numbered starting from 0 — and that tiny
        choice makes every formula in this lesson come out clean.

Here is the machine, rows 0 through 7:

                  1
                1   1
              1   2   1
            1   3   3   1
          1   4   6   4   1
        1   5   10  10  5   1
      1   6   15  20  15  6   1
    1   7   21  35  35  21  7   1

First, the indexing system, because we will use it a thousand times. The lone 1 on top is ROW 0. Under it is row 1, then row 2, and so on. Within a row, we also count entries starting from 0: row 5 is

        entry:   0   1   2    3    4   5
        value:   1   5   10   10   5   1

So row n has n + 1 entries, numbered 0 through n. The left edge is always entry 0 and the right edge is always entry n. Why start at 0 instead of 1? Because then the labels MEAN things: the second entry (entry 1) of row n is always n itself, row n always sums to 2ⁿ, and (Lesson 2) entry k of row n counts the ways to choose k things from n things. Number from 0 and the numbers become information.

Second, the build rule. Every inside entry has two parents — the entries just above-left and above-right — and it is their sum:

        5 + 10 = 15   →   the 15 in row 6 sits below the 5 and 10 of row 5
        10 + 10 = 20  →   the 20 sits below the two 10s
        84 + 126 = 210  →   the 210 in row 10 sits below them (watch it happen below!)

Edge entries have only one parent, so they never change: every row starts and ends with 1, forever. (Imagine invisible 0s beyond the edges if you like: 0 + 1 = 1. The edges take care of themselves.)

Now let's build row 10 from row 9 (1 9 36 84 126 126 84 36 9 1), step by step, with a reason for each move:

        Start with 1                       (left edge: one parent only)
        1 + 9 = 10                         (parents: the edge 1 and the 9)
        9 + 36 = 45                        (parents: 9 and 36)
        36 + 84 = 120                      (parents: 36 and 84)
        84 + 126 = 210                     (parents: 84 and 126)
        126 + 126 = 252                    (the twins meet — row 10's biggest entry)
        Then mirror the first half: 210, 120, 45, 10, 1   (every row is symmetric — Lesson 4 makes this official)

        Row 10:  1   10   45   120   210   252   210   120   45   10   1

Count them: 11 entries for row 10 — the indexing rule (n + 1 entries) holds. ✅

A word from history

Blaise Pascal wrote a famous treatise on this triangle in France in 1653 — and used it to settle questions about gambling and probability, basically inventing probability theory with it. But he was late to the party! In China, Yang Hui published the triangle in 1261, crediting Jia Xian (around the year 1000). Persian mathematicians like al-Karaji knew it earlier still, and in India, scholars used it over 2,000 years ago to count the rhythms of poetry (how many ways can you mix long and short beats?). In China it is still called Yang Hui's triangle. Pascal got the fame — but the triangle belongs to the whole world.

✏️ Your Turn

Build row 11 from row 10. Use the mirror to save yourself half the work, and write out every sum.

Answer: Start with the edge 1. Then 1 + 10 = 11, 10 + 45 = 55, 45 + 120 = 165, 120 + 210 = 330, 210 + 252 = 462. That's the halfway point, so mirror it: 462, 330, 165, 55, 11, 1.

        Row 11:  1   11   55   165   330   462   462   330   165   55   11   1 ✅

(12 entries for row 11 — and notice the second entry is 11, exactly as promised.)


─────────────────────────────────────────────
Lesson 2: The Choose Function — Deriving C(n, k) = n! / (k!(n − k)!)
─────────────────────────────────────────────

📌 Key ideas of this section:

        C(n, k) = the number of ways to pick k things from n things
        when order does NOT matter. Read it "n choose k."
        C(n, k) = n! / (k!(n − k)!)  — and we can DERIVE that formula.
        C(n, k) is exactly entry k of row n of the triangle.

Warm-up: the pizza problem, counted two ways

Your pizza place offers 5 toppings. How many 2-topping pizzas are possible? Try it with order first: pick a first topping (5 choices), then a second (4 choices) — that's 5 × 4 = 20 ordered picks. But a mushroom-pepperoni pizza is the same pizza as a pepperoni-mushroom pizza! Every unordered pair was counted exactly 2 times (once in each order). So the real count is:

        20 ÷ 2 = 10 different pizzas

That 10 is C(5, 2). Now let's turn the same reasoning into a general formula.

Factorials — the counting engine

Definition: n! (read "n factorial") = n × (n − 1) × ... × 2 × 1.

        3! = 3 × 2 × 1 = 6
        4! = 4 × 3 × 2 × 1 = 24
        5! = 120,  6! = 720,  7! = 5040

Why factorials count arrangements: to line up 4 people, you have 4 choices for the first spot, then 3 for the next, then 2, then 1 — and choices multiply: 4 × 3 × 2 × 1 = 4! = 24 lineups. In general, n things can be arranged in n! orders.

One weird convention: 0! = 1. Justification: there is exactly one way to arrange zero things (do nothing!), and the formulas we're about to build only work if 0! = 1. Watch for it below.

Step 1 — count ORDERED picks. How many ways to pick k things from n things where order MATTERS (first pick, second pick, ...)?

        n choices for the first, n − 1 for the second, ..., down to (n − k + 1) for the k-th:
        n × (n − 1) × ... × (n − k + 1)

That product is almost n! — it's n! with the tail (n − k) × (n − k − 1) × ... × 1 missing. The missing tail is exactly (n − k)!. So:

        ordered k-picks from n = n! / (n − k)!

Check with the pizza numbers: ordered pairs from 5 toppings = 5! / 3! = 120 / 6 = 20. ✅ Matches.

Step 2 — erase the order. Every unordered group of k things was counted once for each way to arrange it — that's k! times. So divide:

        C(n, k) = (ordered picks) ÷ (arrangements of each group)
                = [n! / (n − k)!] ÷ k!
                = n! / (k!(n − k)!)          ← THE formula. Memorize its shape:
                upstairs the full n!, downstairs k! and (n − k)! — and k + (n − k) = n.

Worked example — compute C(8, 3), every step justified:

        C(8, 3) = 8! / (3! · 5!)                    (the formula with n = 8, k = 3; note 3 + 5 = 8)
              = (8 × 7 × 6 × 5!) / (3! × 5!)        (peel the top of 8! off so a 5! is visible)
              = (8 × 7 × 6) / (3 × 2 × 1)           (cancel 5! top and bottom — always cancel first!)
              = 336 / 6                             (multiply out the top)
              = 56                                  (divide)

        Check on the triangle: row 8, entry 3 is 56. ✅

Sanity checks at the edges, using 0! = 1:

        C(n, 0) = n! / (0! · n!) = 1    (one way to choose nothing — and the edge entries are 1 ✅)
        C(n, n) = n! / (n! · 0!) = 1    (one way to choose everything ✅)
        C(n, 1) = n! / (1! · (n−1)!) = n    (n ways to choose one thing — entry 1 of row n is n ✅)

The symmetry identity — with two proofs

Here's a fact we've used informally: C(n, k) = C(n, n − k). Now prove it twice.

        Algebra proof:
        C(n, n − k) = n! / ((n − k)! · (n − (n − k))!)    (formula with n − k in the k slot)
                    = n! / ((n − k)! · k!)                (because n − (n − k) = k)
                    = C(n, k)                             (same denominator, just swapped)  ∎

        Story proof: choosing k toppings to PUT ON your pizza is the same act as
        choosing the n − k toppings to LEAVE OFF. Every "take" choice is secretly a
        "leave" choice, so the counts are equal.  ∎

Two proofs of one fact — the algebra is mechanical, the story explains WHY. You'll see this pair again in Lesson 3.

Bonus tool — the ratio trick. Each entry is a predictable multiple of the one before it:

        C(n, k + 1) / C(n, k) = (n − k) / (k + 1)

        Why: C(n, k + 1) = n! / ((k+1)! (n−k−1)!). Divide by C(n, k) = n! / (k! (n−k)!):
        the n! cancels, (n − k)! = (n − k) · (n − k − 1)! supplies an (n − k) on top,
        and (k + 1)! = (k + 1) · k! supplies a (k + 1) on the bottom. ∎

        Example: C(10, 5) = C(10, 4) × (10 − 4)/5 = 210 × 6/5 = 252. ✅ (row 10 entry 5!)

The ratio trick explains why entries grow toward the middle: as long as (n − k) > (k + 1), the next entry is BIGGER. That stops exactly at the middle of the row.

✏️ Your Turn

Compute C(9, 4) with the formula, showing the cancellation. Then find it on the triangle.

Answer:
        C(9, 4) = 9! / (4! · 5!)                    (note 4 + 5 = 9 ✅)
              = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)   (cancel 5!)
              = 3024 / 24
              = 126
        Row 9, entry 4: 1 9 36 84 126 ... — there it is. ✅


─────────────────────────────────────────────
Lesson 3: Pascal's Rule — One Identity, Two Proofs
─────────────────────────────────────────────

📌 Key idea of this section:

        C(n, k) = C(n − 1, k − 1) + C(n − 1, k)
        This IS the build rule in symbols — and we'll prove it twice:
        once with a story, once with pure algebra.

Why this lesson exists

So far we've noticed that the triangle's entries match the choose numbers (56 = C(8, 3), 126 = C(9, 4)). But "it worked every time we checked" is not a proof. The real claim is: the choose numbers obey the add-the-two-parents rule. If we prove THAT, then since both machines start with 1s on the edges and follow the same rule, they must agree everywhere — and reading C(n, k) off row n is justified forever.

Proof 1 — the committee story (casework)

Question: how many ways to choose a committee of k students from a class of n students? One student, Maya, is special. Every possible committee is exactly one of two types:

        Type 1 — Maya is ON the committee.
        Then the other k − 1 members come from the remaining n − 1 students:
        C(n − 1, k − 1) committees.

        Type 2 — Maya is OFF the committee.
        Then all k members come from the other n − 1 students:
        C(n − 1, k) committees.

Every committee is Type 1 or Type 2, and no committee is both — the cases cover everything without overlap, so the counts add:

        C(n, k) = C(n − 1, k − 1) + C(n − 1, k)  ∎

That's the whole proof — no computation at all. Counting one thing two ways (total vs. cases) is one of the most powerful moves in mathematics.

Proof 2 — factorial algebra (every step has a reason)

        Start with the right side and grind it into the left side.

        C(n − 1, k − 1) = (n − 1)! / ((k − 1)! · (n − k)!)
                (the formula; note (n − 1) − (k − 1) = n − k)
        C(n − 1, k) = (n − 1)! / (k! · (n − k − 1)!)
                (the formula; note (n − 1) − k = n − k − 1)

        Goal: add the fractions. We need a common denominator: k! · (n − k)!.

        First fraction: multiply top and bottom by k.
        Why it works: k · (k − 1)! = k!  (that's what k! means).
                = k · (n − 1)! / (k! · (n − k)!)

        Second fraction: multiply top and bottom by (n − k).
        Why it works: (n − k) · (n − k − 1)! = (n − k)!.
                = (n − k) · (n − 1)! / (k! · (n − k)!)

        Add them — same denominator, so add the tops:
                = [k + (n − k)] · (n − 1)! / (k! · (n − k)!)
                = n · (n − 1)! / (k! · (n − k)!)     (the k's cancel: k + n − k = n)
                = n! / (k! · (n − k)!)               (n · (n − 1)! = n!)
                = C(n, k)                            (the formula again)  ∎

Look at the machinery: the k's canceled because k + (n − k) = n — the same little fact that made the symmetry proof work. These identities are all cousins.

The punchline, stated officially: the choose numbers C(n, k) start with 1s on the edges (C(n, 0) = C(n, n) = 1) and obey add-the-two-parents (this lesson). The triangle starts with 1s on the edges and obeys add-the-two-parents (Lesson 1). Same starting values + same rule = same numbers everywhere. Therefore:

        entry k of row n  IS  C(n, k)   — proved, not just observed.

✏️ Your Turn

Verify Pascal's rule numerically for n = 7, k = 3: compute C(7, 3), C(6, 2), C(6, 3) from the triangle and check the identity.

Answer: C(6, 2) = 15 and C(6, 3) = 20 (row 6: 1 6 15 20 15 6 1). Their sum: 15 + 20 = 35 = C(7, 3) — row 7, entry 3. The 35 sits exactly below its two parents. ✅


─────────────────────────────────────────────
Lesson 4: Row Sums — 2ⁿ, Proved Twice, and the Alternating Sum
─────────────────────────────────────────────

📌 Key ideas of this section:

        C(n, 0) + C(n, 1) + ... + C(n, n) = 2ⁿ.   Two proofs!
        C(n, 0) − C(n, 1) + C(n, 2) − ... ± C(n, n) = 0   (for n ≥ 1)
        Consequence: even-position entries and odd-position entries
        each add up to exactly 2ⁿ⁻¹ — every row splits in half.

The doubling pattern, one more time

Add up the rows: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048 — row n sums to 2ⁿ. You believed it before because it kept working. Now let's prove it MUST work. Two proofs, because they're so different.

Proof A — the doubling mechanism (look at how rows are built)

Every entry of row n − 1 is a parent to exactly TWO entries of row n: its below-left child and its below-right child. So when row n − 1 pours itself into row n, every entry gets counted exactly twice:

        sum of row n = 2 × (sum of row n − 1)

Row 0 sums to 1 = 2⁰, and doubling from there gives 2¹, 2², 2³, ... So row n sums to 2ⁿ.  ∎

Proof B — count the subsets (look at what the sum MEANS)

Take a set with n elements — say 7 friends. Every subset (group of friends) has some size k, and C(n, k) counts exactly the size-k subsets. Adding C(n, 0) + C(n, 1) + ... + C(n, n) therefore counts ALL subsets of every size.

Now count all subsets a completely different way: build a subset by walking down the line of friends and deciding, for each one, "in or out?" That's 2 choices per friend, n friends, and choices multiply:

        total subsets = 2 × 2 × ... × 2 (n times) = 2ⁿ

Two ways to count the same collection must give the same number, so the row sum is 2ⁿ.  ∎

Compare the proofs (this is worth a moment): Proof A is mechanical — it watches the machine run. Proof B is meaningful — it says the row sum IS the count of all subsets. Competition problems often need the second viewpoint: "how many subsets does a 7-element set have?" is instantly 2⁷ = 128 if you think like Proof B.

The alternating sum — every row's secret split

Now subtract instead of adding, with signs alternating + − + − ...:

        Row 4:  1 − 4 + 6 − 4 + 1 = 0
        Row 5:  1 − 5 + 10 − 10 + 5 − 1 = 0

Zero, both times! Claim: for every n ≥ 1,

        C(n, 0) − C(n, 1) + C(n, 2) − ... ± C(n, n) = 0

The proof is one line long, but it needs the Binomial Theorem, so it's coming in Lesson 6 (spoiler: 0 = 0ⁿ = (1 + (−1))ⁿ). For now we've verified it, and here's the payoff: move the negative terms to the other side and the equation says

        (even-position entries) = (odd-position entries)

Together they total 2ⁿ (the row sum), so EACH side sums to 2ⁿ⁻¹. Every row splits exactly in half between its even and odd positions!

Verify on row 9 (1 9 36 84 126 126 84 36 9 1):

        Even positions (entries 0, 2, 4, 6, 8):  1 + 36 + 126 + 84 + 9 = 256
        Odd positions (entries 1, 3, 5, 7, 9):   9 + 84 + 126 + 36 + 1 = 256
        And 256 = 2⁸ = 2⁹⁻¹ ✅

Application: a set with n elements has exactly 2ⁿ⁻¹ even-sized subsets and 2ⁿ⁻¹ odd-sized ones. (Even positions count even-sized subsets — same numbers!) A 7-element set: 64 even-sized subsets, 64 odd-sized ones, 128 total.

✏️ Your Turn

Verify the even/odd split on row 8 (1 8 28 56 70 56 28 8 1) by adding each half.

Answer: even positions (0, 2, 4, 6, 8): 1 + 28 + 70 + 28 + 1 = 128. Odd positions (1, 3, 5, 7): 8 + 56 + 56 + 8 = 128. Both equal 128 = 2⁷ ✅


─────────────────────────────────────────────
Lesson 5: Diagonals — Triangular Numbers, Tetrahedral Numbers, and the Hockey Stick
─────────────────────────────────────────────

📌 Key ideas of this section:

        Diagonal 1:  1, 2, 3, 4, ...  →  C(n, 1) = n, the counting numbers
        Diagonal 2:  1, 3, 6, 10, ... →  C(n + 1, 2) = n(n + 1)/2, the triangular numbers
        Diagonal 3:  1, 4, 10, 20, ...→  C(n + 2, 3), the tetrahedral numbers
        Hockey stick: C(r, r) + C(r + 1, r) + ... + C(n, r) = C(n + 1, r + 1) — with proof!

The first three diagonals

Slice the triangle slantwise. The outer edge is all 1s: C(n, 0) = 1. One step in: 1, 2, 3, 4, 5, ... — the counting numbers, because C(n, 1) = n (choosing 1 thing from n: n ways). That's why entry 1 of row n is n — now it's a theorem, not a coincidence.

One more step in: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 — the triangular numbers. The n-th one, T_n, counts dots in a triangle with n rows:

        •
        •  •
        •  •  •
        •  •  •  •        T₄ = 1 + 2 + 3 + 4 = 10 dots

So T_n = 1 + 2 + ... + n. There's a famous closed formula, and here's its proof — Gauss's pairing trick, with every step shown:

        S = 1 + 2 + ... + (n − 1) + n          (the sum, forwards)
        S = n + (n − 1) + ... + 2 + 1          (the same sum, backwards — addition doesn't care)
        Add the two rows COLUMN by column: each column totals (n + 1)
        — 1 + n, 2 + (n − 1), 3 + (n − 2), ... — and there are n columns:
        2S = n × (n + 1)
        S = n(n + 1)/2                         (divide both sides by 2)  ∎

Now the kicker: n(n + 1)/2 = (n + 1)n/2 = C(n + 1, 2). Check: T₉ = 9 × 10/2 = 45, and C(10, 2) = 45 ✅. So the n-th triangular number is exactly entry 2 of row n + 1. WHY the triangle's third diagonal stores running totals of the second diagonal — that's the hockey stick, proved below.

The third diagonal: 1, 4, 10, 20, 35, 56, 84 — the tetrahedral numbers. Each is a stack of triangles: pile cannonballs into a triangular pyramid (10 balls on the bottom layer, 6 above, 3 above, 1 on top → 20 total). In symbols:

        Te_n = T₁ + T₂ + ... + T_n = C(n + 2, 3)

        Check: Te₄ = 1 + 3 + 6 + 10 = 20 = C(6, 3) ✅ (row 6, entry 3)

The hockey stick identity — statement and proof

Slide down any diagonal adding as you go; stop anywhere. The sum waits one row below your last number, one step to the side — the blade of the hockey stick:

        C(2, 2) + C(3, 2) + C(4, 2) + C(5, 2) = C(6, 3)
        (in numbers: 1 + 3 + 6 + 10 = 20 ✅)

Proof by telescoping (peeling), using Pascal's rule over and over:

        C(6, 3) = C(5, 2) + C(5, 3)      (Pascal's rule: 20 = 10 + 10)
        C(5, 3) = C(4, 2) + C(4, 3)      (peel the blade again: 10 = 6 + 4)
        C(4, 3) = C(3, 2) + C(3, 3)      (peel once more: 4 = 3 + 1)
        C(3, 3) = 1 = C(2, 2)            (the tiniest blade is just a 1)

        Substitute each line into the one above:
        C(6, 3) = C(5, 2) + C(4, 2) + C(3, 2) + C(2, 2) = 10 + 6 + 3 + 1 = 20  ∎

Each peel trades the blade for one diagonal entry plus a smaller blade, until the blade shrinks to C(r, r) = 1 and vanishes. The general statement:

        C(r, r) + C(r + 1, r) + ... + C(n, r) = C(n + 1, r + 1)

And now the triangular numbers' address is explained: T_n = 1 + 2 + ... + n = C(1, 1) + C(2, 1) + ... + C(n, 1) = C(n + 1, 2) by the hockey stick with r = 1. Running totals of one diagonal land on the next diagonal — proved, not just noticed. The same argument with r = 2 says sums of triangulars land on the tetrahedral diagonal. The pattern has no bottom.

✏️ Your Turn

Compute C(3, 3) + C(4, 3) + C(5, 3) + C(6, 3) using the triangle, then find the answer as a single entry (the blade) and verify.

Answer: 1 + 4 + 10 + 20 = 35. The blade sits at C(7, 4) = row 7, entry 4 = 35. ✅ (Also note C(7, 4) = C(7, 3) — same 35 by symmetry.)


─────────────────────────────────────────────
Lesson 6: The Binomial Theorem — the Triangle in Algebraic Clothes
─────────────────────────────────────────────

📌 Key ideas of this section:

        (a + b)ⁿ = C(n,0)aⁿ + C(n,1)aⁿ⁻¹b + C(n,2)aⁿ⁻²b² + ... + C(n,n)bⁿ
        The coefficients of the expansion are exactly row n.
        Coefficient hunting: each term carries C(n, k) AND powers of both parts.
        11ⁿ = (10 + 1)ⁿ explains the digit trick, and (1 − 1)ⁿ = 0
        proves the alternating sums from Lesson 4.

Where the coefficients come from

Multiply out (a + b)² by pure distribution, keeping track of every choice:

        (a + b)(a + b) = aa + ab + ba + bb

From each factor you picked either a or b — 2 factors, 2 choices each, 4 picks total. The picks ab and ba both give one a and one b, so they merge: a² + 2ab + b². The coefficient 2 is a COUNT: the number of ways to choose which 1 of the 2 factors contributes the b. That's C(2, 1) = 2.

Same story for (a + b)³: 2³ = 8 ordered picks. The term a²b needs exactly one factor to give b — which one? 3 choices (first, second, or third factor). So a²b appears C(3, 1) = 3 times:

        (a + b)³ = a³ + 3a²b + 3ab² + b³

The Binomial Theorem (official statement): expanding (a + b)ⁿ means choosing a or b from each of n factors. The term aⁿ⁻ᵏbᵏ needs exactly k of the n factors to contribute b — and choosing which k factors is C(n, k). Therefore:

        (a + b)ⁿ = Σ C(n, k) aⁿ⁻ᵏbᵏ   (k runs from 0 to n)
        The coefficients are row n of Pascal's triangle.  ∎

Worked example 1 — expand (a + b)⁴, term by term:

        k = 0:  C(4, 0) a⁴b⁰ = 1 · a⁴ · 1 = a⁴
        k = 1:  C(4, 1) a³b¹ = 4a³b
        k = 2:  C(4, 2) a²b² = 6a²b²
        k = 3:  C(4, 3) ab³  = 4ab³
        k = 4:  C(4, 4) a⁰b⁴ = b⁴

        (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴     (coefficients: row 4 ✅)

Worked example 2 — expand (x + 2)⁵. Now a = x and b = 2, so each term is C(5, k) · x⁵⁻ᵏ · 2ᵏ. The 2 gets raised to a power too — it lives inside the parentheses!

        k = 0:  C(5, 0) x⁵ · 2⁰ = 1 · x⁵ · 1   = x⁵
        k = 1:  C(5, 1) x⁴ · 2¹ = 5 · x⁴ · 2   = 10x⁴
        k = 2:  C(5, 2) x³ · 2² = 10 · x³ · 4  = 40x³
        k = 3:  C(5, 3) x² · 2³ = 10 · x² · 8  = 80x²
        k = 4:  C(5, 4) x¹ · 2⁴ = 5 · x · 16   = 80x
        k = 5:  C(5, 5) x⁰ · 2⁵ = 1 · 1 · 32   = 32

        (x + 2)⁵ = x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32

        Sanity check — plug in x = 1: left side is 3⁵ = 243;
        right side is 1 + 10 + 40 + 80 + 80 + 32 = 243. ✅
        (Always do this check. It catches coefficient slips instantly.)

Worked example 3 — expand (2x − 1)⁴. Here a = 2x, b = −1. Odd powers of (−1) bring minus signs:

        k = 0:  C(4, 0)(2x)⁴(−1)⁰ = 1 · 16x⁴ · 1    = 16x⁴
        k = 1:  C(4, 1)(2x)³(−1)¹ = 4 · 8x³ · (−1)  = −32x³
        k = 2:  C(4, 2)(2x)²(−1)² = 6 · 4x² · 1     = 24x²
        k = 3:  C(4, 3)(2x)¹(−1)³ = 4 · 2x · (−1)   = −8x
        k = 4:  C(4, 4)(2x)⁰(−1)⁴ = 1 · 1 · 1       = 1

        (2x − 1)⁴ = 16x⁴ − 32x³ + 24x² − 8x + 1

        Check x = 1: (2 − 1)⁴ = 1, and 16 − 32 + 24 − 8 + 1 = 1. ✅

Coefficient hunting — the competition skill

You rarely need the whole expansion. Question: what's the coefficient of x³ in (x + 3)⁶?

        The general term is C(6, k) · x⁶⁻ᵏ · 3ᵏ.
        We need x³, so 6 − k = 3, meaning k = 3.
        The term is C(6, 3) · x³ · 3³ = 20 · 27 · x³ = 540x³.
        Answer: 540.  (Notice BOTH parts contributed: the 20 from row 6 AND the 27 = 3³.)

The mystery of 11ⁿ — finally solved for real

Remember how rows of the triangle read as digits of 11ⁿ (1, 11, 121, 1331, 14641), with carrying when entries hit two digits? The Binomial Theorem explains everything in one line: 11 = 10 + 1, so

        11ⁿ = (10 + 1)ⁿ = C(n,0)10ⁿ + C(n,1)10ⁿ⁻¹ + C(n,2)10ⁿ⁻² + ... + C(n,n)

Each entry of row n sits in its own place-value column (powers of 10!), with the biggest place first. While entries stay single-digit, the columns never collide and the digits just spell the row. Row 5 has 10s, so the columns overlap and carrying happens:

        11⁵ = 1·10⁵ + 5·10⁴ + 10·10³ + 10·10² + 5·10 + 1
            = 100000 + 50000 + 10000 + 1000 + 50 + 1
            = 161051 ✅

The old "carrying surprise" was just place values overlapping. No mystery survives algebra.

Two debts repaid

        Debt 1 — alternating sums (Lesson 4): set a = 1, b = −1 in the theorem:
        (1 + (−1))ⁿ = C(n,0) − C(n,1) + C(n,2) − ... ± C(n,n)
        The left side is 0ⁿ = 0 (for n ≥ 1). That's the entire proof.  ∎

        Debt 2 — row sums: set a = b = 1: (1 + 1)ⁿ = C(n,0) + C(n,1) + ... + C(n,n),
        so the row sum is 2ⁿ — a THIRD proof of Lesson 4's headline fact.  ∎

Bonus skill — lightning approximation

(1.02)⁴ = (1 + 0.02)⁴. Expand with row 4:

        = 1 + 4(0.02) + 6(0.02)² + 4(0.02)³ + (0.02)⁴
        = 1 + 0.08 + 6(0.0004) + 4(0.000008) + 0.00000016
        = 1 + 0.08 + 0.0024 + 0.000032 + 0.00000016
        = 1.08243216 ≈ 1.0824

The terms shrink so fast that the first two or three do almost all the work — that's why engineers and scientists lean on this move.

✏️ Your Turn

Expand (x − 1)⁴ (watch the signs!), then check your answer at x = 2.

Answer: a = x, b = −1; each term is C(4, k) x⁴⁻ᵏ (−1)ᵏ:
        k = 0: x⁴   ·   k = 1: −4x³   ·   k = 2: 6x²   ·   k = 3: −4x   ·   k = 4: 1
        (x − 1)⁴ = x⁴ − 4x³ + 6x² − 4x + 1
        Check x = 2: (2 − 1)⁴ = 1, and 16 − 32 + 24 − 8 + 1 = 1. ✅


─────────────────────────────────────────────
Lesson 7: Grid Paths and Vandermonde — the Triangle as a Map
─────────────────────────────────────────────

📌 Key ideas of this section:

        Shortest paths across an m-by-n grid: C(m + n, n).
        Paths THROUGH a marked corner: multiply (paths to it) × (paths from it).
        Paths AVOIDING a blocked corner: subtract the through-count from the total.
        Vandermonde's identity: C(m + n, k) = Σ C(m, i) · C(n, k − i).

Paths are disguised choices

A city grid, m blocks wide and n blocks tall. You walk only RIGHT (R) or DOWN (D). Every shortest route from start to finish takes exactly m R-steps and n D-steps — m + n steps total. A route is just a WORD: some ordering of m R's and n D's. And a word is determined by WHICH of its m + n positions hold D's:

        number of paths = C(m + n, n)   (choose which steps are Down)

        Example — 3 wide, 2 tall: C(5, 2) = 10 paths.
        (Equivalently C(5, 3) = 10 — choosing which steps are Right. Same answer by symmetry!)

This is why the triangle appeared on the grid map all along: paths to a corner = paths from above + paths from the left (you must arrive from one of those two), which is Pascal's rule. Same rule, same start (1s on the edges) — same numbers.

Paths through a marked corner — multiply

How many of those 3-by-2 routes pass through a specific corner, say the one 2 blocks right and 1 block down from the start?

        Start → corner:  2 R-steps and 1 D-step → C(3, 1) = 3 paths.
        Corner → finish: 1 more R and 1 more D  → C(2, 1) = 2 paths.
        The two stages are independent (any "to" pairs with any "from"), so multiply:
        Through-count = 3 × 2 = 6 paths.

Paths around a blocked corner — subtract (complementary counting)

Sometimes it's easier to count what you DON'T want. A 4-by-4 grid has C(8, 4) = 70 shortest routes corner to corner. Suppose the very center corner (2 right, 2 down from the start) is closed for construction:

        Routes through the center: C(4, 2) × C(4, 2) = 6 × 6 = 36
        (2 R + 2 D to reach it; 2 R + 2 D to leave it)
        Open routes: 70 − 36 = 34 ✅

"Total minus bad" is complementary counting — one of the most-used moves in competition math.

Vandermonde's identity — committees with two clubs

A club has 4 girls and 5 boys. Choose a committee of 3. Count it two ways:

        Way 1 (ignore gender): C(9, 3) = 84.

        Way 2 (split by how many girls are on it):
        0 girls:  C(4, 0) · C(5, 3) = 1 × 10 = 10
        1 girl:   C(4, 1) · C(5, 2) = 4 × 10 = 40
        2 girls:  C(4, 2) · C(5, 1) = 6 × 5  = 30
        3 girls:  C(4, 3) · C(5, 0) = 4 × 1  = 4
        Total: 10 + 40 + 30 + 4 = 84 ✅

Same committee count, computed two ways — so they're equal, and the reasoning never used the specific numbers. In general:

        Vandermonde's identity:  C(m + n, k) = Σ C(m, i) · C(n, k − i)
        (sum over all i; the cases are "i members from the first group")

The sum-of-squares jewel

Set m = n = k in Vandermonde: C(2n, n) = Σ C(n, i) · C(n, n − i). But C(n, n − i) = C(n, i) by symmetry (Lesson 2!), so each term is C(n, i)²:

        C(n, 0)² + C(n, 1)² + ... + C(n, n)² = C(2n, n)

The squares of any row add to the middle entry of the row twice as far down! Verify with row 4:

        1² + 4² + 6² + 4² + 1² = 1 + 16 + 36 + 16 + 1 = 70 = C(8, 4) ✅

That one identity combines symmetry, Vandermonde, and casework — three of our proof moves in a single line.

✏️ Your Turn

(a) How many shortest paths cross a 3-by-3 grid? (b) How many of them pass through the corner 1 right and 1 down from the start?

Answer: (a) C(6, 3) = 20 (3 R's and 3 D's, choose where the D's go). (b) To the corner: 1 R + 1 D → C(2, 1) = 2. From the corner to the finish: 2 R + 2 D → C(4, 2) = 6. Multiply: 2 × 6 = 12 paths through. ✅


─────────────────────────────────────────────
Lesson 8: Probability, Parity, and Primes — Patterns Worth Proving
─────────────────────────────────────────────

📌 Key ideas of this section:

        P(exactly k heads in n flips) = C(n, k) / 2ⁿ.
        "At least one" problems: count the complement.
        Odd entries in row n: 2 raised to (number of 1s in n's binary).
        If p is PRIME, every interior entry of row p is divisible by p — proved below.

Binomial probability

Flip n coins. There are 2ⁿ total outcomes (row sum!), and exactly k heads happens in C(n, k) of them. So:

        P(k heads in n flips) = C(n, k) / 2ⁿ

        Example: P(exactly 2 heads in 4 flips) = C(4, 2) / 16 = 6/16 = 3/8.

Complementary counting strikes again: what's the probability of AT LEAST ONE head in 6 flips? Counting head-counts 1 through 6 directly means six terms. Instead:

        P(at least one) = 1 − P(zero heads) = 1 − C(6, 0)/2⁶ = 1 − 1/64 = 63/64 ✅

One subtraction beats six additions — remember this shape.

The middle is the most likely. An exact heads-tails split in 6 flips: C(6, 3)/64 = 20/64 = 5/16 ≈ 0.31. In 8 flips: C(8, 4)/256 = 70/256 = 35/128 ≈ 0.27. More flips make a perfect split LESS likely — the row sums grow faster than the middles.

Parity — the odd-entry census

Count the ODD entries in each row:

        Row:    0   1   2   3   4   5   6   7
        Odds:   1   2   2   4   2   4   4   8

All powers of 2! And the exponent has a secret source: the binary form of the row number. Row 6 in binary is 110, which has two 1s → 2² = 4 odd entries ✅. Row 7 is 111, three 1s → 2³ = 8 — every entry of row 7 is odd! The all-odd rows are exactly 0, 1, 3, 7, 15, ... = 2ᵐ − 1, whose binary forms are all 1s. (The full proof is a college-level gem called Lucas's theorem; here we collect the evidence and conjecture like real mathematicians.) Color the odd entries black on a huge triangle and the Sierpinski fractal appears — the same pattern, at every scale, forever.

The prime row theorem — with proof

Theorem: if p is prime and 0 < k < p, then p divides C(p, k).

        Proof: C(p, k) = p! / (k!(p − k)!) is a whole number — it counts committees,
        and committee counts are integers.
        The top p! = p × (p − 1) × ... × 1 contains the factor p.
        The bottom k!(p − k)! is a product of numbers all STRICTLY SMALLER than p.
        Since p is prime, no product of smaller numbers contains p as a factor
        (that "no smaller factors" property is exactly what primeness means),
        so nothing downstairs can cancel the p upstairs.
        The quotient is an integer still carrying the factor p — so p divides C(p, k).  ∎

        Verify row 7: 7, 21, 35 = 7×1, 7×3, 7×5. ✅
        Verify row 11: 11, 55, 165, 330, 462 = 11×1, 11×5, 11×15, 11×30, 11×42. ✅

        Composite rows FAIL: row 6's entry 15 is not divisible by 6. The proof tells
        you why: 6 = 2 × 3 can be built from smaller factors, so the denominator
        CAN cancel pieces of it. The hypothesis "p is prime" was load-bearing!

Fibonacci encore — now with the reason

The shallow diagonals (slicing up-right) sum to 1, 1, 2, 3, 5, 8, 13, 21 — the Fibonacci sequence, where each number is the sum of the two before it. Why must that continue? Watch the diagonal summing to 13 get built from its parents:

        13-diagonal:  C(6,0) + C(5,1) + C(4,2) + C(3,3) = 1 + 5 + 6 + 1
        Parents:      C(6,0) matches C(5,0) of the 8-diagonal (edge);
                      C(5,1) = C(4,0) + C(4,1)  →  one parent from the 5-diagonal, one from the 8;
                      C(4,2) = C(3,1) + C(3,2)  →  same split;
                      C(3,3) matches C(2,2) of the 5-diagonal (edge).
        Every entry of the 8-diagonal and the 5-diagonal is used exactly once, so
        13-diagonal sum = 8 + 5. ✅

Each new shallow diagonal sums to the previous diagonal plus the one before it — Fibonacci's rule itself, starting from 1 and 1. The triangle didn't just contain the Fibonacci numbers; it GENERATES them.

✏️ Your Turn

(a) Verify the prime row theorem for row 11's entry 462 by dividing.
(b) Row 9 in binary is 1001 — two 1s, so the census predicts 2² = 4 odd entries. Check row 9.

Answer: (a) 462 ÷ 11 = 42 exactly ✅. (b) Row 9: 1 9 36 84 126 126 84 36 9 1 — the odd entries are 1, 9, 9, 1: exactly 4, as predicted ✅.


─────────────────────────────────────────────
Lesson 9: Watch Out! Common Mistakes (Honors Edition)
─────────────────────────────────────────────

📌 Keep the big ideas in sight:

        C(n, k) = n! / (k!(n − k)!) = entry k of row n (numbering starts at 0!)
        Pascal's rule · symmetry · row sum 2ⁿ · binomial theorem · hockey stick

These traps catch honors students every year. Learn them here, not on a test.

Mistake 1: Off-by-one indexing

        C(6, 2) is the third entry of row 6? That can't be right... ❌ (it IS right!)

Entries start at 0, so entry 2 is the THIRD thing you see in row 6: 1, 6, [15], 20, ... The trap runs the other way too: hunting for C(6, 2) and grabbing the 2nd visible entry (the 6). Self-check that catches it every time: entry 1 of row n must be n. In row 6, entry 1 is 6 ✅, so entry 2 is the 15.

Mistake 2: Forgetting to divide by k! (order vs. no order)

        Choosing 2 captains from 9 players: 9 × 8 = 72?  ❌

That 72 counts (Ana first, Bo second) and (Bo first, Ana second) as DIFFERENT — but captain pairs don't have an order. Every pair was counted 2! = 2 times, so divide: 72 ÷ 2 = 36 = C(9, 2). Rule of thumb: if your "choose" answer feels too big, ask "did I count each group in several orders?"

Mistake 3: Dropping the (n − k)! downstairs

        C(7, 3) = 7! / 3! = 840?  ❌

The denominator needs BOTH factorials: C(7, 3) = 7! / (3! · 4!) = 5040 / (6 · 24) = 5040 / 144 = 35. Memory hook: the two downstairs numbers must ADD to the upstairs number — 3 + 4 = 7. If they don't, something's missing.

Mistake 4: Forgetting the inside coefficient's power

        Coefficient of x³ in (2x + 1)⁵ is C(5, 3) = 10?  ❌

The 2 lives INSIDE the parentheses, so it gets raised to the third power along with the x. The full term is C(5, 3) · (2x)³ · 1² = 10 · 8x³ = 80x³. Coefficient: 80. Every factor inside the binomial participates in every power.

Mistake 5: Sign slips in (a − b)ⁿ

        (x − 1)⁴ = x⁴ + 4x³ + 6x² + 4x + 1?  ❌

With b = −1, the odd powers of b are negative, so the signs ALTERNATE: x⁴ − 4x³ + 6x² − 4x + 1. The habit that catches this: plug in x = 1 (or 2) and compare both sides. (2 − 1)⁴ = 1, and the wrong expansion gives 16 + 32 + 24 + 8 + 1 = 81 = 3⁴ ≠ 1 — busted instantly.

Mistake 6: Assuming divisibility by the row number

        Every interior entry of row 8 is divisible by 8?  ❌

Row 8's interior: 8, 28, 56, 70 — and 70 is not divisible by 8. The prime row theorem has a hypothesis: p must be PRIME. Row 7 works (7, 21, 35 all divisible by 7); row 8 doesn't. A theorem's conditions are part of the theorem.

Mistake 7: Doubling the entries instead of the sums

        Row 4's middle is 6, so row 5's middle must be 12?  ❌

Only the SUMS double. Entries come from adding parents: row 5's middles are 4 + 6 = 10 and 6 + 4 = 10. The doubling machine works on totals (16 → 32), not on the entries inside.

Mistake 8: Gluing digits for 11⁵

        Row 5 is 1 5 10 10 5 1, so 11⁵ = 15101051?  ❌

Digit-gluing works only while every entry is one digit. Lesson 6 showed the truth: 11ⁿ = (10 + 1)ⁿ puts each entry in its own place-value column, and two-digit entries overflow into the next column — 11⁵ = 161051 after carrying. The "trick" was the binomial theorem all along.


─────────────────────────────────────────────
Lesson 10: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Build: each entry = sum of the two above; edges are 1; number from 0
        Choose: C(n, k) = n! / (k!(n − k)!) = entry k of row n
        Identities: C(n,k) = C(n,n−k) · C(n,k) = C(n−1,k−1) + C(n−1,k)
        Sums: row n totals 2ⁿ; alternating signs give 0; halves are 2ⁿ⁻¹
        Diagonals: C(n,1) = n · T_n = C(n+1,2) = n(n+1)/2 · C(n+2,3) tetrahedral
        Hockey stick: C(r,r) + ... + C(n,r) = C(n+1, r+1)
        Binomial: (a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏbᵏ — mind inside coefficients and signs
        Paths: C(m+n, n); through a corner multiply; around a block subtract
        Vandermonde: C(m+n, k) = Σ C(m,i)C(n,k−i) → row squares sum to C(2n, n)
        Patterns: P(k heads) = C(n,k)/2ⁿ · odds = 2^(binary 1s) · prime rows ÷ p

The recap list

  · Build and index: Pascal's rule with 1s on the edges; row n has entries C(n, 0) through C(n, n), all numbered from 0. Row 10: 1 10 45 120 210 252 210 120 45 10 1.
  · Choose function: ordered picks are n!/(n − k)!; each unordered group was counted k! times; divide and get C(n, k) = n!/(k!(n − k)!). Don't forget 0! = 1.
  · Pascal's rule: proved by committee casework (Maya in or out) AND by factorial algebra with a common denominator. This is what makes the triangle equal the choose function.
  · Row sums: 2ⁿ by the doubling mechanism, by counting all subsets, and by setting a = b = 1 in the binomial theorem. Alternating sums: 0, by (1 − 1)ⁿ; so even and odd positions each total 2ⁿ⁻¹.
  · Diagonals: counting numbers C(n, 1) = n; triangulars T_n = C(n + 1, 2) = n(n + 1)/2 (Gauss pairing proof); tetrahedrals C(n + 2, 3). The hockey stick turns "running totals" into a theorem via telescoping peels.
  · Binomial theorem: coefficients are row n because expanding means choosing which factors supply the b. Hunt coefficients term-by-term; carry the inside coefficient's power; alternate signs for (a − b)ⁿ; always sanity-check at x = 1. And 11ⁿ = (10 + 1)ⁿ — digit trick explained.
  · Paths: m + n steps, choose the Downs: C(m + n, n). Through a corner: multiply. Around a block: subtract (complementary counting).
  · Vandermonde: split a committee by how many come from each group; the cases multiply within and add across. Corollary: row squares sum to C(2n, n).
  · Probability and patterns: P(k heads in n flips) = C(n, k)/2ⁿ; "at least one" = 1 − P(none). Odd census: powers of 2 from binary digits; all-odd rows are 2ᵐ − 1. Prime rows: p divides every interior entry of row p — and composites fail. Shallow diagonals generate Fibonacci.

The magic sentence

        Two parents add to build each row;
        the rows are choices, the sums are powers of two,
        and the Binomial Theorem lets the whole triangle do algebra.

Say it out loud three times. Seriously!

Why this matters

Pascal's triangle is where counting, probability, algebra, and number theory shake hands — and where competition problems go to be born. You now own the factorial formula (and its derivation), the Binomial Theorem (and its checks), and the three proof moves — count it two ways, split into cases, telescope — that power combinatorics from AMC day all the way to research mathematics. A triangle a 1st grader could build just carried you through proofs most students never see. Sit with that for a second.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Row 8:  1 8 28 56 70 56 28 8 1 · Row 9:  1 9 36 84 126 126 84 36 9 1
        Row 10: 1 10 45 120 210 252 210 120 45 10 1
        Row 11: 1 11 55 165 330 462 462 330 165 55 11 1
        C(n, k) = n! / (k!(n − k)!) · row n sums to 2ⁿ · (a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏbᵏ
        Pascal's rule: C(n,k) = C(n−1,k−1) + C(n−1,k) · symmetry: C(n,k) = C(n,n−k)

Grab a pencil and paper — and your own written copy of the triangle. The easy problems drill the machinery; the intermediate ones chain two or three ideas together; the challenge problems ask for 4–6 chained steps, a strategic choice, or a proof. Some problems have more than one valid approach — when they do, you're asked to compare them. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "Is this a build-it question, a formula question, an identity question, or a binomial-theorem question — and which row am I in?"


🟢 EASY (Problems 1–40)

Problems 1–6 — Pascal's rule and building rows. (Lesson 1)

  1. In row 9, the entries 36 and 84 sit side by side. What sits directly
     below them, and in which row?
  2. The entries 126 and 126 sit side by side in row 9. What sits below them,
     and which entry of which row is it?
  3. An entry's two parents are 210 and 252. What is the entry, and which
     row is it in?
  4. Build row 10 from row 9 (1 9 36 84 126 126 84 36 9 1), writing out
     every sum.
  5. Without building anything: what is the second entry of row 11?
     What is the THIRD entry (entry 2) of row 11?
  6. Row 10 is 1 10 45 120 210 252 210 120 45 10 1. How many entries does
     it have, and how many of them are greater than 100?

Problems 7–12 — The factorial formula. Show the cancellation each time. (Lesson 2)

  7. Compute 6! and 7!.
  8. Compute C(6, 2) using the formula.
  9. Compute C(7, 3) using the formula.
  10. Compute C(8, 3) using the formula.
  11. Compute C(9, 2) using the formula.
  12. Compute C(10, 4) using the formula.

Problems 13–18 — Symmetry: the mirror identity. (Lesson 2)

  13. C(9, 7) = C(9, 2) without any new computation — why? What is its value?
  14. What is C(11, 9)? (Use the mirror first, then the triangle.)
  15. Row 8 begins 1 8 28 56 70 ... Finish the row without adding anything.
  16. Suppose C(n, 3) = C(n, 7) for some row number n. Find n.
      (Hint: mirror twins in row n are entries k and n − k.)
  17. True or false: C(12, 5) = C(12, 7).
  18. Which entry is the middle of row 12, and what is its value?
      (Compute C(12, 6) by canceling — never multiply out 12!.)

Problems 19–24 — Row sums and the even/odd split. (Lesson 4)

  19. What is the sum of row 10? (Don't add the entries!)
  20. Which row sums to 2048?
  21. Compute the alternating sum 1 − 6 + 15 − 20 + 15 − 6 + 1 for row 6.
  22. Add up the even-POSITION entries of row 8 (entries 0, 2, 4, 6, 8).
      What power of 2 do you get?
  23. How many total subsets does a 7-element set have?
  24. How many EVEN-sized subsets does a 7-element set have?
      (Use the even/odd split — don't list them!)

Problems 25–30 — Binomial theorem basics. (Lesson 6)

  25. Expand (a + b)³ completely.
  26. Expand (a + b)⁴ completely.
  27. What is the coefficient of x⁴y² in (x + y)⁶?
  28. What is the coefficient of x⁵ in (x + 1)⁷?
  29. Expand (x + 1)⁴ completely.
  30. Expand (x − 1)⁴ completely. (Watch the signs!)

Problems 31–36 — Paths and coin flips. (Lessons 7 and 8)

  31. How many shortest paths cross a 2-by-2 block grid (right/down only)?
  32. How many shortest paths cross a grid 3 blocks wide and 2 blocks tall?
  33. Flip 5 coins. In how many outcomes do exactly 2 heads appear?
  34. Flip 5 coins. What is the probability of exactly 3 heads? Simplify.
  35. Flip 4 coins. What is the probability of at least one head?
      (Complementary counting — one subtraction!)
  36. How many different words (orderings) can you make from the letters
      R, R, R, D, D? (Choosing positions for the D's IS the whole problem.)

Problems 37–40 — Hockey stick, triangular numbers, and powers of 11. (Lessons 5–6)

  37. Compute the 10th triangular number using the formula T_n = n(n + 1)/2.
  38. Compute C(2,2) + C(3,2) + C(4,2) + C(5,2) + C(6,2) two ways:
      add the numbers, then name the single entry the hockey stick promises.
  39. Use the binomial theorem on (10 + 1)⁴ to write 11⁴ as a sum of
      place-value terms, then add them.
  40. Do the same for (10 + 1)³ and confirm you get 1331.


🟡 INTERMEDIATE (Problems 41–75)

Problems 41–42 — Solve for n: the choose equation (a quadratic in disguise). (Lesson 2)

  41. C(n, 2) = 36. Find n. (Set up n(n − 1)/2 = 36, clear the fraction,
      and solve the quadratic.)
  42. C(n, 2) = 45. Find n.

Problems 43–48 — Binomial theorem, next level. (Lesson 6)

  43. What is the coefficient of x³ in (x + 2)⁵?
  44. What is the coefficient of x² in (2x + 1)⁵?
  45. What is the coefficient of x⁴ in (x − 1)⁷? (Sign alert!)
  46. Expand (2x − 1)³ completely, then check your answer at x = 1.
  47. Use the binomial theorem to approximate (1.02)⁴ to 4 decimal places.
      Show all five terms.
  48. Write 11⁵ as (10 + 1)⁵ using the binomial theorem, show all six
      place-value terms, and add them.

Problems 49–51 — Grid paths with twists. (Lesson 7)

  49. How many shortest paths cross a grid 4 blocks wide and 3 blocks tall?
  50. In that same 4-by-3 grid, how many paths pass THROUGH the corner that
      is 2 right and 1 down from the start?
  51. A 4-by-4 grid has 70 shortest routes corner to corner. The center
      corner (2 right, 2 down from the start) is closed. How many routes
      remain open?

Problems 52–54 — Committees with constraints (casework vs. complement). (Lesson 7)

  52. A club has 5 girls and 4 boys. How many 3-person committees have
      exactly 2 girls?
  53. Same club: how many 3-person committees have AT LEAST one girl?
      (Count the complement!)
  54. Eight students are eligible for a 3-person committee, but Ana and Bo
      refuse to serve together. How many committees are allowed?
      (Total minus the bad ones.)

Problems 55–59 — Identities in action. (Lessons 4, 5, 7)

  55. Add the even-POSITION entries of row 9 (entries 0, 2, 4, 6, 8) and
      name the power of 2 you get.
  56. Is every interior entry of row 7 divisible by 7? Check all of them.
      Is every interior entry of row 6 divisible by 6? What goes wrong?
  57. The 5th tetrahedral number is C(7, 3). Compute it both as C(7, 3)
      and as T₁ + T₂ + T₃ + T₄ + T₅.
  58. Compute the sum of the squares of row 3's entries, and find the
      answer as a single entry C(2n, n).
  59. Do the same for row 5: sum the squares, then locate the total
      in row 10.

Problems 60–63 — Vandermonde, Fibonacci, parity, and arrangements.

  60. Verify Vandermonde's identity for C(9, 3) by splitting 9 people into
      a group of 4 and a group of 5 (cases: 0, 1, 2, or 3 from the group
      of 4). Show all four products and their sum.
  61. The shallow diagonals of the triangle sum to 1, 1, 2, 3, 5, 8.
      Compute the next two diagonal sums (1 + 5 + 6 + 1 and 1 + 6 + 10 + 4)
      and name the famous sequence.
  62. Count the odd entries in rows 5, 6, 7, and 8. Each count is a power
      of 2 — give all four counts and the four powers.
  63. How many distinct arrangements does the word LEVEL have?
      (Hint: choose positions for the two L's, then for the two E's —
      the V takes what's left. Multiply the two choose-numbers.)

Problems 64–67 — Which entry wins?

  64. Solve C(n, 2) = 55.
  65. For which k is C(10, k) largest? What is that largest value?
  66. Which is bigger, C(10, 4) or C(10, 5)? Answer using the ratio trick:
      C(10, 5) = C(10, 4) × (10 − 4)/5. Compute it exactly.
  67. Flip 5 coins. In how many outcomes do heads OUTNUMBER tails?
      (Add the three cases — then explain in one sentence why the answer
      had to be exactly half of 32.)

Problems 68–72 — Probability and splitting rows.

  68. Flip 6 coins. What is the probability of at least 4 heads?
      Write it as a simplified fraction.
  69. Flip 4 coins. What is the probability of at least 2 heads?
      Compute it TWO ways — direct (add the good cases) and complementary
      (subtract the bad ones) — and confirm they agree. Which felt easier?
  70. A grid is 4 blocks wide and 2 blocks tall. (a) How many shortest paths
      in total? (b) How many pass through the corner 3 right and 1 down
      from the start?
  71. Add the first half of row 7: 1 + 7 + 21 + 35. What power of 2 do you
      get, and which identity from Lesson 4 explains it?
  72. Verify the hockey stick C(2,2) + C(3,2) + C(4,2) + C(5,2) + C(6,2) = C(7,3)
      by telescoping: start from C(7, 3) and peel it with Pascal's rule four
      times, writing one line per peel.

Problems 73–75 — Mixed warm-ups for the challenge zone.

  73. Solve C(n, 3) = 56. (Guess-and-check is fine — but organize it:
      compute C(n, 3) = n(n − 1)(n − 2)/6 and hunt for n.)
  74. What is the coefficient of x⁵ in (x + 2)⁸?
  75. In the expansion of (x + 1/x)⁴, find the constant term (the term with
      no x in it). Show why its k-value works.


🔴 CHALLENGE (Problems 76–100)

  76. Constant term hunt. In the expansion of (x + 1/x)⁶, find the constant
      term. (The general term is C(6, k) x⁶⁻ᵏ (1/x)ᵏ = C(6, k) x⁶⁻²ᵏ.
      Which k makes the exponent 0?)
  77. No two neighbors. How many ways can you choose 3 numbers from
      {1, 2, ..., 8} so that no two are consecutive? Guided: if your numbers
      are a < b < c with gaps of at least 2, look at a, b − 1, c − 2. Show
      those are 3 DISTINCT numbers from {1, ..., 6} with no restrictions, and
      that any triple from {1, ..., 6} can be shifted back. Conclude the count.
  78. Two roads to 265. A club has 6 girls and 5 boys. How many 4-person
      committees have at least 2 girls? (a) Casework: add the exactly-2,
      exactly-3, and exactly-4-girl cases. (b) Complement: subtract the
      0-girl and 1-girl cases from C(11, 4) = 330. (c) Both must give 265 —
      verify, and say which road you'd take if the numbers were bigger, and why.
  79. Prove Vandermonde in words. State the identity
      C(m + n, k) = Σ C(m, i) · C(n, k − i) and prove it by describing a
      committee counted two ways. No algebra needed — just a story with
      cases that cover everything without overlap.
  80. Sum of squares, explained. (a) Verify numerically that the squares of
      row 6's entries sum to 924, and confirm 924 = C(12, 6). (b) Explain
      WHY: in Vandermonde with m = n = k, each product C(n, i)·C(n, n − i)
      equals C(n, i)². Which earlier identity makes that swap legal?
  81. Prime row patrol. (a) Verify that every interior entry of row 11 is
      divisible by 11 (divide each one). (b) In one or two sentences, why
      does the factorial formula force this for prime p but allow failure
      for composite numbers like 6?
  82. The odd census. (a) The odd-entry counts for rows 0–7 are
      1, 2, 2, 4, 2, 4, 4, 8. Write each row number in binary and find the
      rule connecting binary digits to the count. (b) Which rows between
      0 and 15 are ALL odd? (c) Predict: is row 15 all odd?
  83. Fibonacci forever. The shallow diagonals sum to 1, 1, 2, 3, 5, 8, 13, 21.
      Explain why the next diagonal sum MUST be 13 + 21 = 34, using Pascal's
      rule: show that every entry of the 21-diagonal and the 13-diagonal is
      used exactly once as a parent when the 34-diagonal is built.
      (Work concretely with C(8,0), C(7,1), C(6,2), C(5,3), C(4,4).)
  84. The full expansion test. (a) Expand (a + b)⁶ using row 6.
      (b) Evaluate your expansion at a = 2, b = −1, term by term.
      (c) What should the total be, by direct computation of (2 − 1)⁶?
      Confirm they agree.
  85. 11⁶ by theorem. Write 11⁶ = (10 + 1)⁶ as a sum of place-value terms
      using row 6, add them carefully (watch the column sizes: C(6,2)·10⁴
      is 150000, not 15000!), and state 11⁶.
  86. The disguised quadratic. Solve C(n, 2) + C(n, 1) + C(n, 0) = 37.
      (Translate to an equation in n, multiply through by 2, and factor —
      or use the quadratic formula.)
  87. Negative inside. Find the coefficient of x³ in (2 − x)⁶.
      (General term: C(6, k) · 2⁶⁻ᵏ · (−x)ᵏ.)
  88. Which perfect split is more likely? (a) Compute P(exactly 3 heads in
      6 flips). (b) Compute P(exactly 4 heads in 8 flips). (c) Compare them
      with a common denominator and state which is larger. Any guesses why
      the bigger triangle is stingier about perfect balance?
  89. The detour. A grid is 5 blocks wide and 3 blocks tall. (a) How many
      shortest paths corner to corner? (b) How many pass through the corner
      2 right and 2 down from the start? (c) How many AVOID that corner?
  90. Two proofs of one identity. Prove C(n, 2) = T_{n−1} (the (n−1)th
      triangular number) two ways: (a) algebraically, from the formulas;
      (b) with the hockey stick, by writing C(n, 2) as a sum of counting
      numbers. Which proof tells you more?
  91. The perfect half. Claim: when n is ODD, the first half of row n sums
      to exactly 2ⁿ⁻¹. (a) Verify on row 7: 1 + 7 + 21 + 35. (b) Prove it:
      pair each entry C(n, k) with its mirror C(n, n − k), and count how
      many entries row n has when n is odd.
  92. Even vs. odd, settled. (a) Compute the alternating sum
      1 − 6 + 15 − 20 + 15 − 6 + 1 for row 6. (b) What does its value force
      about the even-position and odd-position sums? (c) Verify by adding
      both halves. (d) Where in this lesson did that alternating sum get
      proved for EVERY row at once?
  93. Design it. Invent a word problem whose answer is C(8, 3) = 56, and
      another whose answer is "the constant term of (x + 1/x)⁶" = 20.
      Solve both of yours to make sure they work.
  94. The weighted sum. (a) Compute 0·C(3,0) + 1·C(3,1) + 2·C(3,2) + 3·C(3,3).
      (b) Do the same for n = 4. (c) Conjecture a formula for
      0·C(n,0) + 1·C(n,1) + ... + n·C(n,n). (d) Prove it by pairing term k
      with term n − k: use symmetry to show each pair contributes n·C(n, k),
      and count the pairs. (Careful with the middle term when n is even —
      it pairs with itself!)
  95. Prove the hockey stick. State and prove in general:
      C(r, r) + C(r + 1, r) + ... + C(n, r) = C(n + 1, r + 1).
      (Telescoping: peel C(n + 1, r + 1) with Pascal's rule, then peel the
      leftover blade, over and over, until the blade is C(r, r). Write each
      peel as its own line.)
  96. The ballot paths. In a 3-by-3 grid, count the shortest paths that
      NEVER rise above the main diagonal — meaning: at every moment of the
      walk, you've taken at least as many R-steps as D-steps. Enumerate all
      valid R/D words of length 6 (three R's, three D's) by hand.
      (There are only 20 words total; cross out the rule-breakers.
      The survivors are a famous count.)
  97. Triangle total. Find n such that 1 + 2 + 3 + ... + n = 91.
      (Use the triangular formula and the quadratic formula — the
      discriminant is a perfect square.)
  98. One product, two ways. Compute the coefficient of x³ in
      (1 + x)³(1 + x)³ two ways: (a) as C(6, 3) directly; (b) by multiplying
      out the x³ contributions C(3,0)C(3,3) + C(3,1)C(3,2) + C(3,2)C(3,1)
      + C(3,3)C(3,0). (c) Which identity did you just verify?
  99. Prove Pascal's rule with algebra. Prove
      C(n, k) = C(n − 1, k − 1) + C(n − 1, k)
      using only the factorial formula: write both terms, find the common
      denominator k!(n − k)!, and justify each step in words.
      (Lesson 3 did this — now it's your turn to write it cold.)
  100. The grand synthesis — one polynomial, five secrets. Let
      P(x) = (x + 1)⁵.
      (a) Expand P(x) using row 5.
      (b) Compute P(10) from your expansion and explain why it equals 11⁵.
      (c) Compute P(1) from your expansion and explain why it must be 2⁵.
      (d) Compute P(−1) from your expansion and explain why it must be 0.
      (e) Compute P(2) from your expansion and check it equals 3⁵ = 243.
      One expansion, five theorems — that is the whole lesson in disguise.


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! Every answer below shows the key steps, so if you got one wrong, find the exact line where your work and this key part ways — that's the idea to revisit.

Easy

  1. 36 + 84 = 120, and the parents are in row 9, so 120 lands in row 10
     (entry 3). Two parents, one child.
  2. 126 + 126 = 252 — row 10, entry 5, the exact middle of the row.
  3. 210 + 252 = 462. The parents are entries 4 and 5 of row 10, so 462 is
     entry 5 of row 11.
  4. Edge 1; 1+9 = 10; 9+36 = 45; 36+84 = 120; 84+126 = 210; 126+126 = 252;
     then mirror: 210, 120, 45, 10, 1.
     Row 10: 1 10 45 120 210 252 210 120 45 10 1.
  5. Second entry (entry 1) is always the row number: 11.
     Third entry (entry 2) is C(11, 2) = 55 — see row 11.
  6. Row 10 has 11 entries (n + 1 rule). Greater than 100: 120, 210, 252,
     210, 120 — that's 5 entries.
  7. 6! = 6·5·4·3·2·1 = 720; 7! = 7·720 = 5040.
  8. C(6, 2) = 6!/(2!·4!) = (6·5)/(2·1) = 30/2 = 15. (Cancel 4! first.)
  9. C(7, 3) = (7·6·5)/(3·2·1) = 210/6 = 35. (Cancel 4!.)
  10. C(8, 3) = (8·7·6)/(3·2·1) = 336/6 = 56. (Cancel 5!.)
  11. C(9, 2) = (9·8)/(2·1) = 72/2 = 36. (Cancel 7!.)
  12. C(10, 4) = (10·9·8·7)/(4·3·2·1) = 5040/24 = 210. (Cancel 6!.)
  13. Mirror identity: C(9, 7) = C(9, 2) = 36. Story version: choosing 7 to
      take = choosing 2 to leave.
  14. C(11, 9) = C(11, 2) = 55 (row 11, entry 2).
  15. Mirror the first half: 1 8 28 56 70 56 28 8 1.
  16. Mirror twins in row n are entries k and n − k. Here k = 3 pairs with
      n − k = 7, so n = 3 + 7 = 10. Check: C(10, 3) = 120 = C(10, 7) ✅
  17. True — 5 + 7 = 12, so they're mirror twins in row 12.
  18. Row 12 has 13 entries, so the middle is entry 6.
      C(12, 6) = (12·11·10·9·8·7)/(6·5·4·3·2·1).
      Cancel: 12 against (4·3); 10 against (5·2). What remains is
      (11·9·8·7)/6 = 5544/6 = 924.
  19. 2¹⁰ = 1024. (Row n sums to 2ⁿ — no adding needed.)
  20. 2048 = 2¹¹, so row 11.
  21. 1 − 6 = −5; −5 + 15 = 10; 10 − 20 = −10; −10 + 15 = 5; 5 − 6 = −1;
      −1 + 1 = 0. Alternating row sums are always 0 (Lesson 4).
  22. Entries 0, 2, 4, 6, 8 of row 8: 1 + 28 + 70 + 28 + 1 = 128 = 2⁷.
      (Exactly half the row sum 256 — the even/odd split.)
  23. 2⁷ = 128 subsets. (Each element: in or out — 2 choices, 7 times.)
  24. Half of all subsets: 2⁶ = 64. (Even positions = odd positions = 2ⁿ⁻¹.)
  25. a³ + 3a²b + 3ab² + b³. (Coefficients: row 3.)
  26. a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴. (Coefficients: row 4.)
  27. The term with y² has k = 2: C(6, 2) x⁴y² = 15x⁴y². Coefficient: 15.
  28. The x⁵ term is C(7, 5) x⁵ · 1² = 21x⁵. Coefficient: 21.
  29. x⁴ + 4x³ + 6x² + 4x + 1. (Row 4 with b = 1.)
  30. x⁴ − 4x³ + 6x² − 4x + 1. Signs alternate because b = −1.
      Check at x = 2: 16 − 32 + 24 − 8 + 1 = 1 = (2 − 1)⁴ ✅
  31. 2 R-steps + 2 D-steps: C(4, 2) = 6 paths.
  32. 5 steps total, choose which 2 are Down: C(5, 2) = 10 paths.
  33. C(5, 2) = 10 outcomes. (Entry 2 of row 5.)
  34. C(5, 3)/2⁵ = 10/32 = 5/16.
  35. 1 − P(no heads) = 1 − C(4, 0)/16 = 1 − 1/16 = 15/16.
  36. Choose which 2 of the 5 positions hold D's: C(5, 2) = 10 words.
  37. T₁₀ = 10·11/2 = 110/2 = 55.
  38. Add: 1 + 3 + 6 + 10 + 15 = 35. Hockey stick blade: C(7, 3) = 35 ✅
  39. 11⁴ = 1·10⁴ + 4·10³ + 6·10² + 4·10 + 1 = 10000 + 4000 + 600 + 40 + 1
      = 14641.
  40. 11³ = 1·10³ + 3·10² + 3·10 + 1 = 1000 + 300 + 30 + 1 = 1331 ✅

Intermediate

  41. C(n, 2) = n(n − 1)/2 = 36 → n(n − 1) = 72 → n² − n − 72 = 0
      → (n − 9)(n + 8) = 0 → n = 9 (reject −8). Check: C(9, 2) = 36 ✅
  42. n(n − 1)/2 = 45 → n² − n − 90 = 0 → (n − 10)(n + 9) = 0 → n = 10.
      Check: C(10, 2) = 45 ✅
  43. Term: C(5, 3) · x³ · 2² = 10 · 4 · x³ = 40x³. Coefficient: 40.
      (Don't forget the 2 gets squared — it lives inside the parentheses.)
  44. Term: C(5, 2) · (2x)² · 1³ = 10 · 4x² = 40x². Coefficient: 40.
  45. x⁴ needs k = 4: C(7, 4) · x⁴ · (−1)³ = 35 · (−1) = −35.
      Coefficient: −35. (Odd power of b = −1 gives the minus.)
  46. k=0: (2x)³ = 8x³; k=1: 3·(2x)²·(−1) = −12x²; k=2: 3·(2x)·1 = 6x;
      k=3: (−1)³ = −1.
      (2x − 1)³ = 8x³ − 12x² + 6x − 1.
      Check at x = 1: 8 − 12 + 6 − 1 = 1 = (2 − 1)³ ✅
  47. (1.02)⁴ = 1 + 4(0.02) + 6(0.0004) + 4(0.000008) + 0.00000016
      = 1 + 0.08 + 0.0024 + 0.000032 + 0.00000016 = 1.08243216 ≈ 1.0824.
  48. 11⁵ = 1·10⁵ + 5·10⁴ + 10·10³ + 10·10² + 5·10 + 1
      = 100000 + 50000 + 10000 + 1000 + 50 + 1 = 161051 ✅
  49. 7 steps total, choose 3 to be Down: C(7, 3) = 35 paths.
  50. Start → corner: 2 R + 1 D → C(3, 1) = 3. Corner → finish: 2 R + 2 D
      → C(4, 2) = 6. Independent stages multiply: 3 × 6 = 18 paths.
  51. Through the center: C(4, 2) × C(4, 2) = 6 × 6 = 36.
      Open: 70 − 36 = 34 routes. (Complementary counting.)
  52. Choose 2 of the 5 girls AND 1 of the 4 boys:
      C(5, 2) · C(4, 1) = 10 · 4 = 40 committees.
  53. Complement: all committees minus all-boy ones:
      C(9, 3) − C(4, 3) = 84 − 4 = 80 committees.
  54. Bad committees have BOTH Ana and Bo: then the 3rd member is any 1 of
      the other 6 → C(6, 1) = 6 bad. Allowed: C(8, 3) − 6 = 56 − 6 = 50.
  55. Entries 0, 2, 4, 6, 8 of row 9 are 1, 36, 126, 84, 9 (entry 8 of row 9
      is C(9, 8) = 9!). Sum: 1 + 36 + 126 + 84 + 9 = 256 = 2⁸.
  56. Row 7 interior: 7 = 7×1, 21 = 7×3, 35 = 7×5 — all divisible by 7 ✅.
      Row 6 interior: 6, 15, 20 — but 15/6 = 2.5 ✗. 6 is composite
      (6 = 2×3), so the denominator CAN cancel its factors; the prime row
      theorem's hypothesis fails.
  57. C(7, 3) = 35. And T₁+...+T₅ = 1 + 3 + 6 + 10 + 15 = 35 ✅
      (Sums of triangulars land on the tetrahedral diagonal — hockey stick.)
  58. 1² + 3² + 3² + 1² = 1 + 9 + 9 + 1 = 20 = C(6, 3) ✅ (n = 3: C(2n, n).)
  59. 1² + 5² + 10² + 10² + 5² + 1² = 1 + 25 + 100 + 100 + 25 + 1 = 252
      = C(10, 5) ✅ — the middle of row 10.
  60. Cases on i = number from the group of 4:
      i=0: C(4,0)C(5,3) = 1·10 = 10;  i=1: C(4,1)C(5,2) = 4·10 = 40;
      i=2: C(4,2)C(5,1) = 6·5 = 30;   i=3: C(4,3)C(5,0) = 4·1 = 4.
      Total: 10 + 40 + 30 + 4 = 84 = C(9, 3) ✅ Vandermonde verified.
  61. 1 + 5 + 6 + 1 = 13 and 1 + 6 + 10 + 4 = 21. The sequence
      1, 1, 2, 3, 5, 8, 13, 21 (each term = sum of the previous two) is the
      FIBONACCI sequence.
  62. Row 5: odds are 1, 5, 5, 1 → 4 = 2². Row 6: 1, 15, 15, 1 → 4 = 2².
      Row 7: all 8 entries odd → 8 = 2³. Row 8: only the two edge 1s → 2 = 2¹.
  63. Choose positions for the two L's: C(5, 2) = 10. Then for the two E's
      from the 3 remaining spots: C(3, 2) = 3. V takes the last spot.
      Total: 10 × 3 = 30 arrangements. (Same as 5!/(2!·2!) = 120/4 = 30 ✅)
  64. n(n − 1)/2 = 55 → n² − n − 110 = 0 → (n − 11)(n + 10) = 0 → n = 11.
      Check: C(11, 2) = 55 ✅
  65. The middle entry is largest: k = 5, and C(10, 5) = 252.
      (The ratio trick: entries grow while (n − k) > (k + 1), i.e., until
      the middle.)
  66. C(10, 5) = C(10, 4) × (10 − 4)/5 = 210 × 6/5 = 1260/5 = 252.
      Since 6/5 > 1, C(10, 5) > C(10, 4): 252 > 210. Entries rise toward
      the middle.
  67. Heads outnumber tails with 3, 4, or 5 heads: C(5,3) + C(5,4) + C(5,5)
      = 10 + 5 + 1 = 16 outcomes. Why exactly half: mirror symmetry pairs
      every k-heads outcome with a (5 − k)-heads outcome, swapping
      "heads win" with "tails win" — and with 5 flips a tie is impossible,
      so the two camps split all 32 outcomes evenly.
  68. At least 4 heads: C(6,4) + C(6,5) + C(6,6) = 15 + 6 + 1 = 22 outcomes
      out of 64: 22/64 = 11/32.
  69. Direct: C(4,2) + C(4,3) + C(4,4) = 6 + 4 + 1 = 11 → 11/16.
      Complement: 1 − (C(4,0) + C(4,1))/16 = 1 − 5/16 = 11/16. ✅ Agree!
      (The complement had fewer terms — worth remembering when "at least"
      covers many cases.)
  70. (a) 6 steps, choose 2 Downs: C(6, 2) = 15 paths.
      (b) To the corner (3 R + 1 D): C(4, 1) = 4. From the corner
      (1 R + 1 D): C(2, 1) = 2. Through: 4 × 2 = 8 paths.
  71. 1 + 7 + 21 + 35 = 64 = 2⁶. Row 7's total is 128 = 2⁷, and the mirror
      pairs up the two halves, so each half is 2⁷⁻¹ = 2⁶. (Lesson 4's
      even/odd split is the same fact in different clothing.)
  72. Peels: C(7,3) = C(6,2) + C(6,3);  C(6,3) = C(5,2) + C(5,3);
      C(5,3) = C(4,2) + C(4,3);  C(4,3) = C(3,2) + C(3,3);  C(3,3) = C(2,2).
      Chain them: C(7,3) = C(6,2) + C(5,2) + C(4,2) + C(3,2) + C(2,2)
      = 15 + 10 + 6 + 3 + 1 = 35 ✅
  73. C(n, 3) = n(n − 1)(n − 2)/6 = 56 → n(n − 1)(n − 2) = 336.
      Try n = 8: 8·7·6 = 336 ✅ → n = 8. (n = 7 gives 210, too small;
      the left side grows as n grows, so 8 is the only answer.)
  74. Term: C(8, 5) · x⁵ · 2³ = 56 · 8 · x⁵ = 448x⁵. Coefficient: 448.
  75. Term: C(4, k) x⁴⁻ᵏ (1/x)ᵏ = C(4, k) x⁴⁻²ᵏ. Constant needs 4 − 2k = 0,
      so k = 2: C(4, 2) = 6. The constant term is 6.

Challenge

  76. Term: C(6, k) x⁶⁻²ᵏ. Constant needs 6 − 2k = 0, so k = 3:
      C(6, 3) = 20. The constant term is 20. (Each x from a factor must be
      canceled by a 1/x from another — 3 of each.)
  77. The shift: if a < b < c from {1,...,8} have gaps of at least 2, then
      a < b − 1 < c − 2 are three DISTINCT numbers from {1,...,6} (the
      subtractions shrink the gaps from ≥ 2 to ≥ 1, i.e., just distinct).
      Reverse: any a' < b' < c' from {1,...,6} shifts back to
      a', b' + 1, c' + 2 — a legal nonconsecutive triple from {1,...,8}.
      The two collections match one-to-one, so the count is C(6, 3) = 20.
      Example both directions: {2, 5, 8} ↔ {2, 4, 6}. ✅
  78. (a) Casework: exactly 2 girls: C(6,2)C(5,2) = 15·10 = 150;
      exactly 3: C(6,3)C(5,1) = 20·5 = 100; exactly 4: C(6,4)C(5,0) = 15·1
      = 15. Total: 150 + 100 + 15 = 265.
      (b) Complement: C(11, 4) − C(5, 4) − C(6, 1)C(5, 3)
      = 330 − 5 − 60 = 265. ✅ Both roads agree.
      (c) The complement had 2 cases against casework's 3 — and the gap
      grows as the "at least" threshold rises. Strategic choice: count the
      side with fewer cases.
  79. Model proof: "We choose k people from a club of m + n members, split
      into a group of m and a group of n. Every committee has some number i
      of members from the first group, with 0 ≤ i ≤ k, and for each i the
      choices are independent: C(m, i) ways to pick from the first group and
      C(n, k − i) from the second, so C(m, i)·C(n, k − i) committees of
      type i. The cases are disjoint and cover everything, so they add to
      Σ C(m, i)·C(n, k − i). But the same committees are counted directly by
      C(m + n, k). Two counts of one collection agree. ∎"
  80. (a) 1² + 6² + 15² + 20² + 15² + 6² + 1² = 1 + 36 + 225 + 400 + 225 +
      36 + 1 = 924; and C(12, 6) = 924 ✅ (Lesson 2's cancellation:
      (12·11·10·9·8·7)/720 = 924).
      (b) Vandermonde with m = n = k = 6: C(12, 6) = Σ C(6, i)C(6, 6 − i).
      Symmetry C(6, 6 − i) = C(6, i) turns each product into C(6, i)².
      The symmetry identity is what makes the swap legal.
  81. (a) 11 = 11×1, 55 = 11×5, 165 = 11×15, 330 = 11×30, 462 = 11×42 —
      all interior entries divisible by 11 ✅.
      (b) C(p, k) = p!/(k!(p − k)!) is an integer; p divides the top, and
      when p is prime no product of smaller numbers (the bottom) contains
      the factor p, so p survives. A composite like 6 = 2×3 CAN be assembled
      from smaller factors, so cancellation can destroy it — e.g., row 6's
      15 is not divisible by 6.
  82. (a) Binary: 0→0, 1→1, 2→10, 3→11, 4→100, 5→101, 6→110, 7→111.
      Counts of 1s: 0, 1, 1, 2, 1, 2, 2, 3. Rule: odd entries in row n =
      2^(number of 1s in n's binary form). Check row 6 = 110: two 1s → 4 ✅
      (b) All-odd rows: 0, 1, 3, 7, 15 — the numbers 2ᵐ − 1, whose binary
      forms are all 1s.
      (c) Row 15 = 1111 in binary → 2⁴ = 16 odd entries, and row 15 has
      exactly 16 entries — so yes, all odd (conjectured by the pattern).
  83. The 34-diagonal is C(8,0), C(7,1), C(6,2), C(5,3), C(4,4). Parents:
      C(8,0) matches C(7,0) on the 21-diagonal (edge entry);
      C(7,1) = C(6,0) + C(6,1): one parent from the 13-diagonal, one from
      the 21-diagonal; C(6,2) = C(5,1) + C(5,2): same split;
      C(5,3) = C(4,2) + C(4,3): same split; C(4,4) matches C(3,3) on the
      13-diagonal (edge entry). Every entry of the 13- and 21-diagonals is
      used exactly once, so the new diagonal sums to 13 + 21 = 34 — and the
      same argument works for every step, forever. ∎
  84. (a) (a + b)⁶ = a⁶ + 6a⁵b + 15a⁴b² + 20a³b³ + 15a²b⁴ + 6ab⁵ + b⁶.
      (b) At a = 2, b = −1: 64 + 6·32·(−1) + 15·16·1 + 20·8·(−1) +
      15·4·1 + 6·2·(−1) + 1 = 64 − 192 + 240 − 160 + 60 − 12 + 1.
      (c) Directly: (2 − 1)⁶ = 1⁶ = 1. And the sum: 64 − 192 = −128;
      −128 + 240 = 112; 112 − 160 = −48; −48 + 60 = 12; 12 − 12 = 0;
      0 + 1 = 1 ✅. They agree.
  85. 11⁶ = 1·10⁶ + 6·10⁵ + 15·10⁴ + 20·10³ + 15·10² + 6·10 + 1
      = 1000000 + 600000 + 150000 + 20000 + 1500 + 60 + 1 = 1771561.
      (Each entry of row 6 in its own place-value column — C(6, 2)·10⁴ is
      15 × 10000 = 150000, not 15000!)
  86. C(n, 2) + C(n, 1) + C(n, 0) = n(n − 1)/2 + n + 1 = 37.
      Multiply by 2: n(n − 1) + 2n + 2 = 74 → n² + n − 72 = 0
      → (n + 9)(n − 8) = 0 → n = 8 (reject −9).
      Check: C(8, 2) + C(8, 1) + C(8, 0) = 28 + 8 + 1 = 37 ✅
  87. x³ needs k = 3: C(6, 3) · 2³ · (−1)³ = 20 · 8 · (−1) = −160.
      Coefficient: −160.
  88. (a) C(6, 3)/2⁶ = 20/64 = 5/16.
      (b) C(8, 4)/2⁸ = 70/256 = 35/128.
      (c) Common denominator: 5/16 = 40/128 > 35/128 — the 6-flip split is
      MORE likely. Why: from 6 to 8 flips the row sum quadruples
      (64 → 256) while the middle only grows 20 → 70, so the middle's
      share shrinks. More coins, slimmer chance of a perfect tie.
  89. (a) 8 steps, choose 3 Downs: C(8, 3) = 56 paths.
      (b) To (2 right, 2 down): C(4, 2) = 6. From there to the finish
      (3 right, 1 down): C(4, 1) = 4. Through: 6 × 4 = 24.
      (c) Avoid it: 56 − 24 = 32 paths.
  90. (a) C(n, 2) = n(n − 1)/2 and T_{n−1} = (n − 1)n/2 — same formula. ∎
      (b) Hockey stick with r = 1: C(n, 2) = C(1,1) + C(2,1) + ... +
      C(n−1,1) = 1 + 2 + ... + (n − 1) = T_{n−1}. ∎
      The hockey-stick proof tells you more: it explains WHY the triangular
      numbers live one diagonal over from the counting numbers.
  91. (a) 1 + 7 + 21 + 35 = 64 = 2⁶ ✅
      (b) Proof: when n is odd, n + 1 is even, so row n has an even number
      of entries. Mirror symmetry pairs every entry C(n, k) with C(n, n − k)
      — and since n is odd, k ≠ n − k always (k = n − k would force
      n = 2k, even), so the pairs are all distinct. Equal-valued pairs
      straddle the middle, so first half = second half = 2ⁿ/2 = 2ⁿ⁻¹. ∎
  92. (a) 1 − 6 + 15 − 20 + 15 − 6 + 1 = 0.
      (b) Moving the negatives across: even-position sum = odd-position sum.
      (c) Even positions (0, 2, 4, 6): 1 + 15 + 15 + 1 = 32. Odd positions
      (1, 3, 5): 6 + 20 + 6 = 32. ✅ Both 2⁵.
      (d) Lesson 6 proved it for all rows at once: (1 + (−1))ⁿ = 0ⁿ = 0,
      and the binomial theorem expands the left side into exactly the
      alternating row sum.
  93. Sample choosing problem: "The quiz team has 8 members; 3 will compete
      on Saturday. How many different squads could go?" → C(8, 3) = 56.
      Sample constant-term problem: "What is the constant term of
      (x + 1/x)⁶?" → k = 3 gives C(6, 3) = 20. (A coin version also works:
      exactly 3 heads in 6 flips happens in 20 ways.) Yours can differ —
      check that choosing ignores order and that your constant term has
      balanced x's and 1/x's.
  94. (a) 0·1 + 1·3 + 2·3 + 3·1 = 0 + 3 + 6 + 3 = 12.
      (b) 0·1 + 1·4 + 2·6 + 3·4 + 4·1 = 0 + 4 + 12 + 12 + 4 = 32.
      (c) Conjecture: the weighted sum is n · 2ⁿ⁻¹. (12 = 3·4; 32 = 4·8.)
      (d) Proof: pair term k with term n − k. By symmetry C(n, n − k) =
      C(n, k), so the pair contributes
      k·C(n, k) + (n − k)·C(n, k) = n·C(n, k).
      Summing one representative from each pair gives n × (half the row) =
      n · 2ⁿ⁻¹. When n is even, the middle k = n/2 pairs with itself, and
      its term (n/2)·C(n, n/2) is exactly half of n·C(n, n/2) — so the
      pairing count still comes out right. ∎
  95. Claim: C(r, r) + C(r + 1, r) + ... + C(n, r) = C(n + 1, r + 1).
      Proof by peeling with Pascal's rule:
      C(n + 1, r + 1) = C(n, r) + C(n, r + 1)
      C(n, r + 1) = C(n − 1, r) + C(n − 1, r + 1)
      C(n − 1, r + 1) = C(n − 2, r) + C(n − 2, r + 1)
      ... keep peeling the blade ...
      C(r + 2, r + 1) = C(r + 1, r) + C(r + 1, r + 1)
      and C(r + 1, r + 1) = 1 = C(r, r).
      Substituting each line into the previous one collects
      C(n, r) + C(n − 1, r) + ... + C(r, r) on the right — which is the
      claimed sum in reverse order. ∎
  96. Words with three R's and three D's, valid if every prefix has
      R's ≥ D's. Checking all 20: the survivors are
      RRRDDD, RRDRDD, RRDDRD, RDRRDD, RDRDRD → 5 paths.
      (E.g., RDDRRD breaks at prefix RDDR: 1 R vs 2 D's.) This is the
      Catalan number C₃ = 5 — the triangle's famous cousin.
  97. n(n + 1)/2 = 91 → n² + n − 182 = 0. Quadratic formula:
      discriminant = 1 + 728 = 729 = 27², so n = (−1 + 27)/2 = 13
      (reject the negative root −14). Check: 13·14/2 = 91 ✅
  98. (a) (1 + x)³(1 + x)³ = (1 + x)⁶, and the x³ coefficient is
      C(6, 3) = 20.
      (b) x³ splits as xⁱ·x³⁻ⁱ: C(3,0)C(3,3) + C(3,1)C(3,2) + C(3,2)C(3,1)
      + C(3,3)C(3,0) = 1·1 + 3·3 + 3·3 + 1·1 = 1 + 9 + 9 + 1 = 20 ✅
      (c) Vandermonde's identity with m = n = k = 3 — equivalently, the
      sum of squares of row 3 equals C(6, 3).
  99. Proof. C(n − 1, k − 1) = (n − 1)!/((k − 1)!(n − k)!) and
      C(n − 1, k) = (n − 1)!/(k!(n − k − 1)!) — the factorial formula.
      Common denominator k!(n − k)!: multiply the first term's top and
      bottom by k (legal because k·(k − 1)! = k!), and the second's by
      (n − k) (legal because (n − k)·(n − k − 1)! = (n − k)!). Add:
      [k + (n − k)]·(n − 1)!/(k!(n − k)!) = n·(n − 1)!/(k!(n − k)!)
      = n!/(k!(n − k)!) = C(n, k). ∎  Each step: definition, fraction
      rules, the meaning of factorials — nothing skipped.
  100. (a) (x + 1)⁵ = x⁵ + 5x⁴ + 10x³ + 10x² + 5x + 1 (row 5 coefficients).
      (b) P(10) = 100000 + 50000 + 10000 + 1000 + 50 + 1 = 161051; and
      P(10) = (10 + 1)⁵ = 11⁵, so 11⁵ = 161051 — the digit trick.
      (c) P(1) = 1 + 5 + 10 + 10 + 5 + 1 = 32; and P(1) = 2⁵ = 32 —
      the row-sum theorem, because setting x = 1 adds the coefficients.
      (d) P(−1) = −1 + 5 − 10 + 10 − 5 + 1 = 0; and P(−1) = 0⁵ = 0 —
      the alternating-sum theorem.
      (e) P(2) = 32 + 80 + 80 + 40 + 10 + 1 = 243; and P(2) = 3⁵ = 243 ✅.
      One expansion, five theorems — the triangle doing algebra.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you don't just know Pascal's triangle — you can prove its secrets. You derived the choose formula from scratch, proved Pascal's rule two ways, split rows in half with alternating sums, wielded the Binomial Theorem on coefficients and powers of 11, counted paths through and around corners, and proved Vandermonde's identity with a committee story. Those moves — count it two ways, split into cases, telescope, check your algebra at x = 1 — are the same moves competition mathematicians and researchers use every day. The next time someone asks "how many ways?" or "can you prove that pattern continues?" — smile: you own the triangle that answers it. Great work!
