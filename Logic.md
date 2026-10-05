Logic — A Complete Lesson (Honors Edition)
══════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        The flip of "x > 5" is NOT "x < 5" — it's x ≤ 5. One single number (5 itself) is the whole difference.
        "x² = 25, so x = 5" sounds airtight — until x = −5 walks into the room.
        Solve x/(x − 2) = 2/(x − 2) and algebra cheerfully hands you x = 2 — an answer that makes the original equation EXPLODE.
        A knight always tells the truth. A knave always lies. One if-then sentence can expose them both.

Those four lines are logic in action — the study of what MUST be true. The first is a trap that fools most high schoolers. The second is the real reason your algebra teacher keeps saying "check your solutions!" — by the end of this lesson you'll know exactly which algebra moves are safe two-way doors and which are one-way traps. The third shows what happens when you multiply by something that could be zero: a one-way move that manufactures a fake solution out of thin air. The fourth is the key to a family of puzzles that feel like magic until you know the method.

Why do people care? Because logic is the operating system underneath ALL of math. Every proof ever written is built from AND, OR, NOT, and IF–THEN. So is every line of code ever written. And here's the part that matters now that you work with variables: solving an equation IS logic. An equation like 2x + 3 = 15 is really a question — "for which x is this true?" — and every step you take to solve it is a promise about what must be true. Get the logic right, and algebra stops being a bag of tricks and becomes a machine you understand.

A fair warning: this lesson goes further than most logic courses. You'll meet ideas many students don't see until a college proofs class — the symbols ∀ and ∃, contrapositives (not just as a trick but as a PROOF TOOL), De Morgan's laws, two-way promises, and the true reason squaring both sides — or canceling x — can manufacture fake solutions. Take your time. Hard just means "takes more than one step" — and we will take every single step together, with the reason for each.

In this lesson, you will:

  1. Learn what a statement is — and why an equation is a statement-MAKER with a truth set
  2. Learn to flip anything with NOT — comparisons like x > 5, and the ALL/SOME flip in symbols
  3. Learn AND and OR — compound inequalities, absolute value, De Morgan's laws, and systems of equations
  4. Learn the one and only way an IF–THEN promise can break — and hunt counterexamples with negatives, fractions, and zero
  5. Learn the family of four relatives of a promise — and the two-way promise "if and only if"
  6. Learn ALL/SOME/NONE circle logic — and prove "for ALL x" claims with letters, including one proof by contrapositive
  7. Learn the two argument moves that always work, the two fakes — and why squaring, or multiplying by zero, demands a final check
  8. Learn to crack knight-and-knave puzzles where the statements use AND, OR, and IF–THEN — including one puzzle with TWO surviving cases
  9. Learn the common mistakes so you never make them
  10. Practice with 100 problems at the end — including puzzles for you to design!

How to use this lesson: Read the sections in order. Each section starts with the key idea you'll learn in it. Try every "Your Turn" box with a pencil and paper — in logic, the answer often feels obvious until you check it carefully. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: Statements and Open Sentences — The Raw Material of Logic
─────────────────────────────────────────────

📌 Key idea of this section:

        A statement is a sentence that is either TRUE or FALSE.
        An open sentence contains a variable: plug in values, get statements out.
        The truth set of an open sentence is every value that makes it true.
        SOLVING an equation or inequality IS finding its truth set.

Logic needs raw material, and its raw material is the statement — a sentence that can be checked as true or false. It doesn't have to be true! It just has to be checkable. Now that you work with negative numbers, fractions, and exponents, the statements get juicier:

  · "−7 < −4."                  A statement — TRUE. (−7 sits farther left on the number line.)
  · "(−2)³ = 8."                A statement — FALSE, since (−2)³ = (−2)(−2)(−2) = −8. Still a statement!
  · "|−9| = −9."                A statement — FALSE. (Absolute value is a distance; |−9| = 9.)
  · "2³ × 2² = 2⁵."             A statement — TRUE. (8 × 4 = 32, and 2⁵ = 32 — exponents add when you multiply matching bases.)
  · "(3²)³ = 3⁵."               A statement — FALSE. (3²)³ = 9³ = 729, but 3⁵ = 243. A power of a power MULTIPLIES exponents: (3²)³ = 3⁶.
  · "5⁰ = 5."                   A statement — FALSE. Any nonzero number to the 0 power is 1, so 5⁰ = 1.
  · "Chocolate is the best flavor."  NOT a statement — an opinion. No test can settle it.
  · "What time is it?"          NOT a statement — a question.
  · "Solve for x."              NOT a statement — a command.
  · "x + y."                    NOT a statement — it's not even a sentence! No verb, no claim, nothing to check. It's an expression: a recipe for a calculation, not a claim about the world.

Now the idea that powers this whole course. Look at: "x + 3 = 10." True or false? You can't answer — it depends on x! A sentence like that is called an open sentence: plug in a value and it BECOMES a statement. With x = 7 it's true; with x = 4 it's false. An open sentence is a statement-making machine, and the variable is the input slot.

Every open sentence has a truth set: the collection of all inputs that make it come out true. A tiny bit of set language: we write sets with braces, like {7}; the symbol ∈ means "is a member of" (so 7 ∈ {7} is true, 4 ∈ {7} is false); and ∅ means the empty set — the set with nothing in it. You'll see why ∅ matters in a minute.

And now the punchline: solving an equation means finding its truth set. Every "solve" problem you've ever done was secretly a logic problem: "find every x that makes this sentence true." Let's do six, showing every step and its reason.

Worked example 1 — a one-member truth set. Solve 3x − 7 = 11.

        3x − 7 = 11
        3x − 7 + 7 = 11 + 7      add 7 to both sides — equal plus equal stays equal, so the truth set can't change
        3x = 18                  simplify each side
        3x ÷ 3 = 18 ÷ 3          divide both sides by 3 — same reason: equal divided by equal stays equal
        x = 6                    simplify

        Truth set: {6}.  CHECK: 3(6) − 7 = 18 − 7 = 11 ✓  (6 really makes it true)

Worked example 2 — variables on BOTH sides. Solve 5x − 7 = 3x + 9.

        5x − 7 = 3x + 9
        5x − 7 − 3x = 3x + 9 − 3x    subtract 3x from both sides — gathers every x on one side;
                                     legal because equal minus equal stays equal
        2x − 7 = 9                   simplify: 5x − 3x = 2x, and 3x − 3x = 0
        2x = 16                      add 7 to both sides
        x = 8                        divide both sides by 2

        Truth set: {8}.  CHECK BOTH SIDES separately: 5(8) − 7 = 40 − 7 = 33, and 3(8) + 9 = 24 + 9 = 33. Same number ✓

Worked example 3 — a fraction coefficient. Solve (3/4)x + 2 = 14.

        (3/4)x + 2 = 14
        (3/4)x = 12                subtract 2 from both sides
        (4/3)(3/4)x = (4/3)(12)    multiply both sides by 4/3 — the reciprocal of 3/4.
                                     Why the reciprocal? Because (4/3)(3/4) = 12/12 = 1, and 1 · x = x stands alone.
        x = 16                     simplify: (4/3)(12) = 48/3 = 16

        Truth set: {16}.  CHECK: (3/4)(16) + 2 = 12 + 2 = 14 ✓

Worked example 4 — the flip that catches everyone. Solve −2x + 3 > 11.

        −2x + 3 > 11
        −2x + 3 − 3 > 11 − 3     subtract 3 from both sides — keeps the inequality true
        −2x > 8                  simplify
        x < −4                   divide both sides by −2 — AND FLIP the comparison!

Why the flip? Dividing by a negative number reverses the number line: bigger numbers become smaller (8 > 2, but −8 < −2). To keep the truth set identical, the sign must turn around. Always check with a test value: try x = −5 — is −2(−5) + 3 > 11? 10 + 3 = 13 > 11 ✓. And the boundary x = −4 gives 8 + 3 = 11, which is NOT greater than 11 — so −4 is correctly excluded.

        Truth set: all x with x < −4. (Infinitely many members!)

Worked example 5 — a two-member truth set. Solve x² = 25.

Squaring forgets the sign: both 5² = 25 and (−5)² = 25. So:

        Truth set: {5, −5}.  Two members — and both must be listed, or the truth set is wrong.

Worked example 6 — the two extreme sizes. Some open sentences are true for EVERY input; some for NONE.

        2(x + 3) = 2x + 6
        2x + 6 = 2x + 6          distribute the 2 on the left: 2·x + 2·3
        6 = 6                    subtract 2x from both sides

6 = 6 is always true, no matter what x was — so the ORIGINAL sentence is true for every x. Truth set: ALL numbers. (An equation like this is called an identity — a promise that never breaks. You'll prove one in Lesson 6.)

        x = x + 1
        0 = 1                    subtract x from both sides

0 = 1 is false no matter what x was — so the original sentence is NEVER true. Truth set: ∅, the empty set. "No solution" is a perfectly good answer: the statement-making machine produces only false statements.

So a truth set has three possible sizes: some values (one, two, twenty), ALL values, or NO values.

One last tool for this section — a naming machine you'll use for years. Function notation: f(x) = 4x − 3 names a rule "f" that turns an input into an output. Then:

  · "f(2) = 5" is a STATEMENT — and it's true, because f(2) = 4(2) − 3 = 8 − 3 = 5 ✓.
  · "f(−2) = −11" is a STATEMENT — also true: f(−2) = 4(−2) − 3 = −8 − 3 = −11 ✓. (Negative inputs are welcome — the rule just follows its recipe.)
  · "f(x) = 9" is an OPEN SENTENCE. Solve it:

        4x − 3 = 9               replace f(x) with what it means
        4x = 12                  add 3 to both sides
        x = 3                    divide both sides by 4

        Truth set: {3}.  CHECK: f(3) = 4(3) − 3 = 12 − 3 = 9 ✓

✏️ Your Turn

Which of these are statements? If it is one, say true or false.
(a) "−2 > −5."   (b) "3x = 12."   (c) "½ + ½ = 1."   (d) "x + y."   (e) "(3²)³ = 3⁵."

Answers: (a) A statement — TRUE (−2 is to the right of −5). (b) NOT a statement — an open sentence; its truth depends on x (the truth set happens to be {4}). (c) A statement — TRUE (½ + ½ = 2/2 = 1). (d) NOT a statement — it's an expression; it claims nothing, so there's nothing to check. (e) A statement — FALSE: a power of a power multiplies exponents, so (3²)³ = 3⁶ = 9³ = 729, while 3⁵ = 243.


─────────────────────────────────────────────
Lesson 2: NOT — The Art of Flipping Anything
─────────────────────────────────────────────

📌 Key idea of this section:

        The flip of a statement reverses its truth: true becomes false, false becomes true.
        The flip of "x > 5" is x ≤ 5 — the boundary switches teams.
        The flip of "ALL are" is "SOME are NOT" — written in symbols: ¬(∀x: P) = ∃x: ¬P.

Flipping a statement is called negating it, and logicians write it with the symbol ¬ (read "not"). If p is a statement, then ¬p is its flip, and exactly one of p, ¬p is true. Flip twice and you're home: ¬¬p is just p.

Plain statements are easy to flip: "7 is prime" (true) flips to "7 is not prime" (false). The fun starts with comparisons. What is the flip of "x > 5"? Most people say "x < 5." WRONG — and you can see the mistake in one question: where did 5 itself go? The number line has no gaps. Every number is either greater than 5, equal to 5, or less than 5. If x is NOT greater than 5, then it's either equal or less. So:

        Statement:        x > 5
        Flip (¬):         x ≤ 5          ("not above 5" still allows exactly 5)

Here is the complete flip machine for comparisons — the boundary always switches teams:

        Statement              Flip
        ───────────────        ───────────────────
        x > 7            ↔     x ≤ 7
        x < −2           ↔     x ≥ −2
        x = 4            ↔     x ≠ 4
        x ≥ 3            ↔     x < 3
        x ≤ 0            ↔     x > 0

One more comparison shape, as a coming attraction: the chain "2 < x ≤ 9" is secretly an AND — it means "x > 2 AND x ≤ 9." So its flip is not a single comparison at all. The flip is x ≤ 2 OR x > 9. Lesson 3's De Morgan laws will show exactly why.

Now for the ALL/SOME flip — the one that fools adults — upgraded with the two symbols mathematicians actually use:

        ∀  means "for ALL"         (the universal claim: zero exceptions)
        ∃  means "there EXISTS at least one"   (some, possibly all!)

With those, a claim like "every multiple of 6 is even" becomes ∀x(multiple of 6): x is even — and its flip is built by two swaps:

        Statement                    Flip (the negation)
        ───────────────              ───────────────────
        ∀x: P is true        ↔     ∃x: P is NOT true
        ∃x: P is true        ↔     ∀x: P is NOT true   (i.e., NO x works)

Why "some-not" and not "none"? Same reason as ever: ALL is a zero-exceptions claim, and ONE exception kills it. You don't need every dog on Earth silent to destroy "all dogs bark" — one quiet dog does it.

Worked example 1 — flip it, then settle which side is true. Claim: "For all x, x² > x."

        Flip:  "There exists x with x² ≤ x."        (∀ becomes ∃, and > becomes ≤)

Which one is actually TRUE? Test the flip with x = ½:

        x² = (½)² = ½ × ½ = ¼        square the fraction
        Is ¼ ≤ ½?  YES ✓             ¼ = 0.25 and ½ = 0.5

So x = ½ makes "x² ≤ x" TRUE — the ∃ flip is true, and the original ∀ claim is FALSE. Fractions between 0 and 1 shrink when you square them. That one fraction just assassinated a "for all" claim — remember this move; it's the counterexample, and Lesson 4 is all about it.

Worked example 2 — flipping an ∃ claim. Claim: "There is a number bigger than 100."

        Flip:  "NO number is bigger than 100."      (∃ becomes ∀...¬: every number is ≤ 100)

The original is true (101 exists!), so the flip is false. Flipping doesn't care which side is true — it just produces the exact opposite.

✏️ Your Turn

Flip each statement. Boundaries and quantifiers — careful!
(a) x < 10   (b) "All squares have four equal sides."   (c) "There is a number bigger than 1000."   (d) x ≠ 4   (e) ∀x: x + 0 = x

Answers: (a) x ≥ 10 (the boundary 10 joins the flip). (b) SOME square does not have four equal sides — the flip is false, since the original is true by definition of square; that's fine, a flip just has to be the exact opposite. (c) NO number is bigger than 1000 — false again. (d) x = 4. (The flip of ≠ is = — the two trades go both ways.) (e) ∃x: x + 0 ≠ x. The original is true (adding 0 never changes a number), so this flip is false — zero exceptions exist.


─────────────────────────────────────────────
Lesson 3: AND, OR — Compound Inequalities, Absolute Value, De Morgan, and Systems
─────────────────────────────────────────────

📌 Key idea of this section:

        AND is strict: BOTH parts must be true. AND shrinks a truth set to the overlap.
        OR is generous: AT LEAST ONE part must be true — both is fine! OR glues truth sets together.
        Negating swaps them: ¬(p ∧ q) = ¬p ∨ ¬q, and ¬(p ∨ q) = ¬p ∧ ¬q.

Glue two statements with AND or OR and the truth of the combo follows iron rules. Logicians write p ∧ q for "p AND q" and p ∨ q for "p OR q". The whole machine in one table:

        p        q        p ∧ q      p ∨ q
        ──────   ──────   ────────   ───────
        true     true     true       true
        true     false    false      true
        false    true     false      true
        false    false    false      false

AND is only happy in the first row; OR is happy everywhere except the last. Warning about OR: in math, "p or q" means p, or q, or BOTH. So "2 is even OR 2 is prime" is TRUE — both halves true, and that's allowed.

Now watch what AND and OR do to open sentences — this is where it gets useful. Since an open sentence has a truth set, combining two of them combines their truth sets:

        AND  =  the OVERLAP:  only the x's that make BOTH true
        OR   =  the UNION:    every x that makes at least one true

Worked example 1 — an AND of two inequalities. Find the truth set of "2x + 3 ≤ 15 AND x − 1 > 2".

Solve each half separately, every step with its reason:

        2x + 3 ≤ 15                        x − 1 > 2
        2x ≤ 12          subtract 3        x > 3           add 1
        x ≤ 6            divide by 2

AND means the overlap — the x's that satisfy BOTH: x ≤ 6 and x > 3. On a number line, the first ray covers everything left of 6 (including 6), the second covers everything right of 3 (excluding 3). Where they overlap:

        Truth set:  3 < x ≤ 6
        CHECK the boundary x = 6:  2(6) + 3 = 15 ≤ 15 ✓  and  6 − 1 = 5 > 2 ✓  — in!
        CHECK x = 3:  3 − 1 = 2, and 2 > 2 is FALSE — out, as it should be.

Worked example 2 — an OR that can't be one chain. Find the truth set of "x + 4 < 2 OR 3x ≥ 21".

        x + 4 < 2                          3x ≥ 21
        x < −2           subtract 4        x ≥ 7           divide by 3

OR means the union — anything in EITHER piece counts:

        Truth set:  x < −2 OR x ≥ 7.  (Two separate rays — no single chain can write this.)

Absolute value is AND and OR in disguise. Remember: |x| is the distance from x to 0, and distance is never negative.

        |x| ≤ 4   means   "distance to 0 is at most 4"   →   −4 ≤ x ≤ 4      (an AND: x ≥ −4 AND x ≤ 4 — near 0)
        |x| > 4   means   "distance to 0 is more than 4" →   x > 4 OR x < −4 (an OR: two far-away rays)

Memory hook: "less than" clusters close (AND, one piece); "greater than" splits far (OR, two pieces).

Worked example 3 — unlock an absolute value, AND style. Solve |x − 3| ≤ 5.

        −5 ≤ x − 3 ≤ 5            "distance" reading: x − 3 sits between −5 and 5
        −5 + 3 ≤ x ≤ 5 + 3        add 3 to ALL THREE parts — keeps both inequalities true
        −2 ≤ x ≤ 8                simplify

        Truth set: −2 ≤ x ≤ 8.  CHECK x = −2: |−2 − 3| = |−5| = 5 ≤ 5 ✓.  CHECK x = 9: |9 − 3| = 6 > 5 — out ✓.

Worked example 4 — unlock an absolute value, OR style. Solve |x + 1| > 4.

        x + 1 > 4  OR  x + 1 < −4     greater-than splits into two far rays
        x > 3      OR  x < −5         subtract 1 from both sides of each piece

        Truth set: x > 3 OR x < −5.
        CHECK x = 4:  |4 + 1| = 5 > 4 ✓ in.   CHECK x = −6: |−6 + 1| = |−5| = 5 > 4 ✓ in.
        CHECK x = 0:  |0 + 1| = 1, not > 4 — out ✓.   CHECK the boundary x = −5: |−4| = 4, NOT > 4 — correctly excluded ✓.

And now the gem — De Morgan's laws, for flipping a statement with AND or OR inside:

        ¬(p ∧ q)  =  ¬p ∨ ¬q
        ¬(p ∨ q)  =  ¬p ∧ ¬q

The NOT slips inside, and AND/OR SWAP. Why the swap? Think about failing each test: to fail an AND test you only blow ONE part ("you can't have cake AND ice cream" means no cake OR no ice cream — you're missing at least one, maybe just one). To fail an OR test you must blow BOTH ("not open Saturday OR Sunday" means closed Saturday AND closed Sunday). The law works for three parts too: ¬(p ∧ q ∧ r) = ¬p ∨ ¬q ∨ ¬r.

Worked example 5 — De Morgan with comparisons. Rewrite NOT (x > 2 AND x ≤ 9) without the leading NOT.

        ¬(x > 2  AND  x ≤ 9)
        = ¬(x > 2)  OR  ¬(x ≤ 9)     De Morgan: NOT slips in, AND → OR
        = x ≤ 2  OR  x > 9           flip each comparison — boundaries switch teams (Lesson 2)

        Sanity check: the original AND was true only on 2 < x ≤ 9; the flip should cover everything
        OUTSIDE that — and x ≤ 2 OR x > 9 is exactly everything outside ✓.
        (Look back at Lesson 2's coming attraction: this is why the flip of the chain 2 < x ≤ 9
        is x ≤ 2 OR x > 9. A chain is an AND, and De Morgan flips it into an OR.)

Worked example 6 — the other direction. Rewrite NOT (x < −1 OR x ≥ 6).

        ¬(x < −1  OR  x ≥ 6)
        = ¬(x < −1)  AND  ¬(x ≥ 6)   De Morgan: NOT slips in, OR → AND
        = x ≥ −1  AND  x < 6         flip each comparison
        = −1 ≤ x < 6                 AND = overlap, written as one chain

One last powerhouse for this section. A system of two equations is just an AND of two open sentences with two variables — and "solve the system" means find the overlap of the two truth sets: the pairs (x, y) that make BOTH true.

Worked example 7 — a system is an AND, by elimination. Solve: x + y = 12 AND x − y = 4.

        x + y = 12
        x − y = 4
        ─────────────
        2x = 16          add the two equations — equal plus equal stays equal;
                         the +y and −y cancel, which is the whole point
        x = 8            divide both sides by 2
        8 + y = 12       substitute x = 8 into the first equation — the value must work THERE too
        y = 4            subtract 8 from both sides

        CHECK BOTH — AND demands both!  First: 8 + 4 = 12 ✓.  Second: 8 − 4 = 4 ✓.
        Truth set: the single pair (8, 4).

Worked example 8 — a system by substitution. Solve: 2x + 3y = 24 AND x = y + 2.

The second equation hands you x ready-made — so plug it into the first:

        2(y + 2) + 3y = 24      substitute x = y + 2 into 2x + 3y = 24 — replacing x with
                                an equal expression keeps the truth set unchanged
        2y + 4 + 3y = 24        distribute the 2: 2·y + 2·2
        5y + 4 = 24             combine like terms: 2y + 3y = 5y
        5y = 20                 subtract 4 from both sides
        y = 4                   divide both sides by 5
        x = 4 + 2 = 6           substitute y = 4 back into x = y + 2

        CHECK BOTH:  2(6) + 3(4) = 12 + 12 = 24 ✓.  6 = 4 + 2 ✓.
        Truth set: the single pair (6, 4).

(If you ever graph these: each equation's truth set is a line, and the AND-overlap is exactly where the lines cross.)

✏️ Your Turn

(a) Find the truth set: 3x − 2 ≤ 13 AND x > 2.   (b) Rewrite |x| ≥ 2 without absolute value.   (c) Rewrite NOT (x ≥ 4 AND x < 12) without the leading NOT.   (d) Solve |x + 2| ≤ 3.

Answers: (a) 3x ≤ 15 → x ≤ 5; overlap with x > 2 gives 2 < x ≤ 5. (b) x ≥ 2 OR x ≤ −2 (greater-than splits into two far rays). (c) De Morgan: x < 4 OR x ≥ 12 — the flip covers everything outside the original chain ✓. (d) −3 ≤ x + 2 ≤ 3 → subtract 2 from all three parts → −5 ≤ x ≤ 1. CHECK x = −5: |−5 + 2| = |−3| = 3 ≤ 3 ✓. CHECK x = 2: |2 + 2| = 4 > 3 — out ✓.


─────────────────────────────────────────────
Lesson 4: IF–THEN — The Promise Machine (with Counterexample Hunting)
─────────────────────────────────────────────

📌 Key idea of this section:

        "If p then q" — written p → q — is a promise: whenever p happens, q must follow.
        It breaks in exactly ONE way: p is true and q is false.
        A case like that is a counterexample — and ONE counterexample kills a promise forever.

An if-then statement has two parts: the IF part (the hypothesis) and the THEN part (the conclusion).

        "If x = 6, then x² = 36."
             ↑ hypothesis   ↑ conclusion

Think of p → q as a vending-machine promise: put the IF in, and the THEN must come out. When is the promise BROKEN? Only one way — you put the IF in and the THEN didn't come out. The full table:

        p        q        p → q
        ──────   ──────   ──────────────────────────
        true     true     TRUE   (promise kept)
        true     false    FALSE  (promise BROKEN — the only way!)
        false    true     TRUE   (promise never triggered)
        false    false    TRUE   (nothing was owed)

The bottom two rows surprise people. If the IF never happens, the promise never gets tested — and an untested promise is not a broken one. Try this wild one: "If x² < 0, then x = 50." For real numbers, x² ≥ 0 always (positive² = positive, 0² = 0, negative² = positive — a negative times a negative is a positive). So the IF can never happen, the promise can never be tested, and logicians count it as TRUE. (Weird, but consistent — see Mistake 7 in Lesson 9.)

The most powerful weapon in this lesson: the counterexample — a case where the IF is true and the THEN is false. ONE counterexample kills an if-then claim forever, no matter how many examples support it. And now that you own negative numbers, fractions, and zero, your counterexample arsenal is three times as strong. The three deadliest assassins:

        ASSASSIN 1 — the negative number: squaring erases the sign.
        ASSASSIN 2 — the fraction between 0 and 1: squaring makes it SMALLER, not bigger.
        ASSASSIN 3 — zero itself: multiplying by 0 erases ALL information.

Worked example 1 — assassin 1. Claim: "If x² > 9, then x > 3." Kill it.

        Try x = −4.
        Check the IF:  x² = (−4)² = (−4)(−4) = 16.  Is 16 > 9? YES — the IF is satisfied.
        Check the THEN:  is −4 > 3? NO.
        IF true + THEN false = COUNTEREXAMPLE. Claim dead. −4 did it.

Worked example 2 — assassin 2. Claim: "If x > 0, then x² > x." Kill it.

        Positives feel safe... x = 2 gives 4 > 2 ✓, x = 10 gives 100 > 10 ✓. A hundred checks agree!
        Try x = ½.
        Check the IF:  ½ > 0 ✓.
        Check the THEN:  (½)² = ¼.  Is ¼ > ½?  NO — ¼ < ½.
        COUNTEREXAMPLE. Claim dead. The fraction did it.

Assassin 2 has range. Same weapon, new target — claim: "If x > 0, then x³ > x²." Test x = ½: (½)³ = ⅛ and (½)² = ¼. Is ⅛ > ¼? NO — cubing shrinks the fraction even harder. Claim dead.

Worked example 3 — a claim that SURVIVES. Claim: "If x > 1, then x² > x." True or false?

No amount of testing proves it — but reasoning can. Suppose x > 1. Multiply both sides by x (x is positive, so the inequality keeps its direction):

        x > 1
        x · x > x · 1     multiply both sides by x — allowed, since x > 0
        x² > x            simplify

Every x with x > 1 is forced to satisfy x² > x — no counterexample can exist. The claim is TRUE. Notice the difference from example 2: there the IF allowed fractions; here the IF starts above 1, and the escape route is sealed. THAT is what proof feels like — and Lesson 6 gives you the full tool.

Worked example 4 — assassin 3, the zero trap. Claim: "If xy = xz, then y = z." Kill it.

        This claim is the silent engine behind "just cancel the x." Watch it die.
        Try x = 0, y = 3, z = 5.
        Check the IF:  xy = 0 · 3 = 0, and xz = 0 · 5 = 0.  Is 0 = 0? YES — the IF is satisfied.
        Check the THEN:  is 3 = 5? NO.
        COUNTEREXAMPLE. Claim dead.

Why does zero kill it? Because multiplying by 0 erases everything: 0 · 3 and 0 · 5 are identical even though 3 and 5 are not. "Canceling x" means dividing by x — and dividing by x is reversible ONLY when x ≠ 0. Hold that thought: in Lesson 7 this exact trap will eat a solution alive, and in Lesson 9 it's Mistake 8.

Worked example 5 — reading the promise table. Promise: "If x = 6, then x² = 36."

        You're told x = 6.        → x² = 36 MUST be true (the promise was triggered). ✓
        You're told x² ≠ 36.      → x ≠ 6 MUST be true (if x were 6, x² would be 36 — contradiction).
        You're told x = −6.       → the IF wasn't triggered... but x² = 36 anyway! Fine: the promise
                                    never claimed that 6 is the ONLY way to get 36.

✏️ Your Turn

(a) Kill with one counterexample: "If x² = y², then x = y."   (b) Does x = ½ break the promise "If x > 1, then x² > x"?   (c) True or false: "If x² < 0, then x = 99."   (d) Kill with one counterexample: "If x > 0, then 1/x < 1."

Answers: (a) x = 3, y = −3: the IF holds (9 = 9) but the THEN fails (3 ≠ −3). (b) NO — ½ doesn't satisfy the IF (½ > 1 is false), so it never even triggers the promise. A counterexample must satisfy the IF. (c) TRUE — x² < 0 never happens for real x, so the promise is untestable, and an untestable promise counts as kept. (d) x = ½: the IF holds (½ > 0 ✓), but 1/(½) = 2, and 2 < 1 is FALSE. The smaller the positive fraction, the BIGGER its reciprocal — claim dead.


─────────────────────────────────────────────
Lesson 5: The Family of Four — Converse, Inverse, Contrapositive, and the Two-Way Promise
─────────────────────────────────────────────

📌 Key idea of this section:

        Flipping an if-then usually BREAKS it.
        Flipping AND negating both parts — the contrapositive — always keeps it true.
        When BOTH directions are true, you have a two-way promise: "if and only if."

Every if-then has not two but THREE relatives. Never mix them up:

        Original:        If p, then q.              p → q
        Converse:        If q, then p.              q → p     ← the flip — NOT guaranteed!
        Inverse:         If NOT p, then NOT q.      ¬p → ¬q   ← the deny — NOT guaranteed!
        Contrapositive:  If NOT q, then NOT p.      ¬q → ¬p   ← flip AND deny — ALWAYS matches!

One true promise, three relatives, and only ONE relative you can trust. Watch it on an algebra promise: "If x = 5, then x² = 25."

        Converse:        "If x² = 25, then x = 5."           FALSE — x = −5 satisfies x² = 25 and isn't 5.
        Inverse:         "If x ≠ 5, then x² ≠ 25."           FALSE — x = −5 again: ≠ 5, yet x² = 25.
        Contrapositive:  "If x² ≠ 25, then x ≠ 5."           TRUE — if the square isn't 25, x can't be 5.

Why does the contrapositive always work? The promise says: whenever p happens, q must follow. So if q DIDN'T happen, could p have happened? No way — p would have forced q. No q means no p. That IS the contrapositive, so it stands or falls with the original. They're the same promise in two outfits. (Bonus fact: the converse and inverse are contrapositives of EACH OTHER — so they also stand or fall together. Two matched pairs!)

Why are the other two unreliable? One word: sprinkler. "If it rains, the ground gets wet" does not mean wet ground proves rain — a sprinkler is an alternate cause. In algebra, the alternate cause is the negative root: x² = 25 has two ways to happen, and the converse only believes in one.

Now the twist that makes this section honors-level. Sometimes the converse IS true — and noticing WHEN is a superpower.

Worked example 1 — a reversible step. Promise: "If x = 7, then 2x = 14."

        Converse: "If 2x = 14, then x = 7."
        Is it true?  2x = 14 → x = 7   divide both sides by 2 — the truth set of 2x = 14 is exactly {7}.
        YES — true this time!

What's different? Doubling is REVERSIBLE: you can always un-double by dividing by 2. Squaring is NOT reversible: two different inputs (5 and −5) give the same output, so you can't tell which one went in. That is the whole secret:

        A step gives a two-way promise when it's REVERSIBLE.
        Adding, subtracting, multiplying or dividing by a nonzero number: reversible.
        Squaring: one-way. (Hold that thought for Lesson 7.)

When BOTH directions hold, logicians smash them into one statement with the two-way arrow:

        p ↔ q    means    (p → q) AND (q → p)    — read "p if and only if q," or "p iff q."

A biconditional is an AND of two promises, so proving one takes TWO separate checks — one per direction.

Worked example 2 — test a biconditional, both directions. Claim: "x² = 49 ↔ x = 7."

        Direction 1 (→):  if x = 7, then x² = 49.  Check: 7² = 49 ✓ TRUE.
        Direction 2 (←):  if x² = 49, then x = 7.  Check: x = −7 gives (−7)² = 49, but −7 ≠ 7. FALSE.
        AND needs both → the biconditional is FALSE.

        The repair: "x² = 49 ↔ (x = 7 OR x = −7)."
        Direction 1: 7² = 49 ✓ and (−7)² = 49 ✓ — both listed values work. TRUE.
        Direction 2: if x² = 49, is x surely 7 or −7? Yes — a square comes from exactly one
        positive root and one negative root. TRUE. AND is satisfied → TRUE biconditional ✓.

Definitions are always biconditionals, even when nobody says "iff": "x is even" MEANS "x is divisible by 2" — the arrow runs both ways, no exceptions, forever.

Last vocabulary for this section — two little words with giant meaning. "ONLY IF" is not "IF":

        "You may ride the coaster ONLY IF you are at least 48 inches tall."
        = "If you ride, then you are at least 48 inches tall."   (p only if q  means  p → q)

Being 48 inches is NECESSARY — required, no ride without it — but not SUFFICIENT — not enough by itself to guarantee a ride (you also need a ticket, a working coaster...). In math: "divisible by 12" is sufficient for "divisible by 3" (it guarantees it), and "divisible by 3" is necessary for "divisible by 12" (you can't have the first without the second — but having it isn't enough: 9 is divisible by 3, not by 12).

Worked example 3 — necessary vs sufficient with inequalities. Claim: "x > 3 only if x > 1."

        Translate:  "p only if q" means p → q, so this says:  if x > 3, then x > 1.
        Is it true?  x > 3 and 3 > 1, so x > 1 — a bigger-than chain forces it. TRUE.
        Converse: "if x > 1, then x > 3."  Try x = 2: 2 > 1 ✓ but 2 > 3 ✗. FALSE.

        So "x > 1" is NECESSARY for "x > 3" (no number above 3 escapes being above 1)
        but NOT SUFFICIENT (2 proves being above 1 isn't enough to be above 3).

✏️ Your Turn

(a) Write the converse and contrapositive of "If 3x = 12, then x = 4." This time BOTH are true — explain why in one sentence.   (b) True biconditional or not: "x = 8 ↔ 3x = 24"? Check both directions.   (c) True biconditional or not: "x² > 9 ↔ x > 3"? If it fails, repair it.

Answers: (a) Converse: "If x = 4, then 3x = 12." Contrapositive: "If x ≠ 4, then 3x ≠ 12." Both true — dividing by 3 is reversible, so the promise runs both ways. (b) Direction 1: 3(8) = 24 ✓. Direction 2: 3x = 24 → x = 8 (divide by 3) ✓. Both true → YES, a true biconditional. (c) Direction 1: x > 3 → multiply both sides by x (positive, direction kept): x² > 3x; and 3x > 9 (multiply x > 3 by 3); chain them: x² > 9 ✓ TRUE. Direction 2: x = −4 gives (−4)² = 16 > 9, but −4 < 3 → FALSE. Repair with Lesson 3's absolute value: x² > 9 ↔ |x| > 3 ↔ (x > 3 OR x < −3).


─────────────────────────────────────────────
Lesson 6: ALL, SOME, NONE — Circle Logic, and Proving "For ALL x" with Letters
─────────────────────────────────────────────

📌 Key idea of this section:

        Draw "All A are B" as circle A INSIDE circle B.
        A conclusion only counts if it HAS to be true in every picture you can draw.
        A ∀ claim can't be proved by examples — prove it with LETTERS that stand for every case.
        An ∃ claim needs just ONE witness.

About 2,300 years ago Aristotle invented the syllogism — arguments built from ALL, SOME, and NONE — and Euler later gave them pictures: circles. "All A are B" = circle A inside circle B. "Some A are B" = overlapping circles. "No A are B" = circles apart. The classic patterns, one valid and two broken:

        VALID chain:        All A are B.  All B are C.  →  All A are C.   (circle in circle in circle — no escape)
        BROKEN lookalike:   All A are B.  All C are B.  →  All A are C??  NO — two circles inside B can float
                            apart: "All dogs are animals; all cats are animals; so all dogs are cats"?? Absurd.
        BROKEN some-some:   Some A are B.  Some B are C.  →  Some A are C??  NO — the overlaps can live in
                            different parts of B.

And keep the mantra from before: TRUE is not the same as FOLLOWS. "All multiples of 4 are even; all multiples of 6 are even" does NOT let you conclude "some multiple of 4 is a multiple of 6" — the facts never say the circles touch. (In arithmetic the conclusion happens to be true — 12! — but that's extra knowledge, not a conclusion. Logic asks what FOLLOWS.)

Now for the big leap. With variables, ∀ claims are everywhere — "for all x, this equals that" — and circles can't help. Examples can't help either: a million agreeing checks never prove ∀ (remember x² > x, killed by ½). What CAN prove a ∀ claim? Letters. A letter stands for EVERY case at once — so if you reason with the letter and never assume anything special about it, the conclusion covers everything.

PROOF 1 — an identity, proved for all numbers at once.
Claim: For all numbers a and b, (a + b)² = a² + 2ab + b².

        (a + b)² = (a + b)(a + b)            the meaning of ²: multiply by itself
                 = a(a + b) + b(a + b)       distribute: each term of the first (a + b) times the second
                 = a² + ab + ba + b²         distribute each piece
                 = a² + ab + ab + b²         ba = ab — multiplication order never matters
                 = a² + 2ab + b²             combine the two like terms

Every step used a rule that works for ALL numbers — never a specific value — so the conclusion holds for all a, b. No counterexample can exist. (And now you can SEE why "(a + b)² = a² + b²" is a lie: it throws away the 2ab. At a = 1, b = 1: left side (1 + 1)² = 4, right side 1 + 1 = 2. The missing 2ab is exactly the 2 that's missing.)

PROOF 2 — an even/odd claim. First, arm the letters with definitions:
An even number is one that can be written 2k for some whole number k.
An odd number is one that can be written 2k + 1 for some whole number k.
Claim: The sum of two odd numbers is even.

        Call the two odd numbers 2m + 1 and 2n + 1.    (Different letters m, n — they might be different numbers!)
        Sum = (2m + 1) + (2n + 1)
            = 2m + 2n + 2            rearrange: order of addition never matters
            = 2(m + n + 1)           factor out the 2 — the distributive law read backwards
        m + n + 1 is a whole number — whole numbers are closed under addition.
        So the sum is 2 × (a whole number) = 2k shape, with k = m + n + 1.
        By the definition above, the sum is EVEN. ∎   (the little box means: proof finished)

Check the power: this one argument covers 3 + 5, 101 + 999, and every other pair of odds in the universe. THAT is why mathematicians bother with letters.

PROOF 3 — the contrapositive as a proof TOOL. (This one is a college-level move, and you can do it.)
Claim: For every whole number n, if n² is even, then n is even.

Try a direct assault and you get stuck: the IF hands you n², and unpacking a square is hard. So flip AND deny (Lesson 5): prove the contrapositive instead — it stands or falls with the original.

        Contrapositive: if n is ODD, then n² is ODD.
        Suppose n is odd → n = 2k + 1 for some whole number k.    (definition of odd)
        n² = (2k + 1)²
           = (2k + 1)(2k + 1)             the meaning of ²
           = 4k² + 2k + 2k + 1            distribute: 2k·2k = 4k², 2k·1 = 2k, 1·2k = 2k, 1·1 = 1
           = 4k² + 4k + 1                 combine the like terms
           = 2(2k² + 2k) + 1              factor a 2 out of the first two terms
        2k² + 2k is a whole number — whole numbers are closed under multiplying and adding.
        So n² = 2 × (a whole number) + 1 — the odd shape, with the role of k played by 2k² + 2k.
        Therefore n² is ODD. ∎

        The contrapositive is proved — so the ORIGINAL promise is true:
        if n² is even, n can't be odd (odd would force n² odd), so n must be even.

Why did the contrapositive win? Because it hands you n directly (n = 2k + 1), and squaring a letter is easy — while the original only handed you n², a square you can't unpack. Choosing between a promise and its contrapositive is choosing which tool you get to hold.

Compare the ∃ world — much easier to live in. Claim: "There exists x with x² = 2x." Prove it by producing ONE witness:

        Try x = 2:  2² = 4  and  2(2) = 4.  Equal ✓.
        One witness is a complete proof of ∃. (x = 0 works too — 0² = 0 = 2·0 — but one was enough.)

So the two quantifiers have opposite proof recipes:

        To prove ∀:  reason with letters covering every case (examples NEVER suffice).
        To kill ∀:   exhibit ONE counterexample.
        To prove ∃:  exhibit ONE witness.
        To kill ∃:   show EVERY case fails (letters again — like Lesson 1's x = x + 1 ending in 0 = 1).

✏️ Your Turn

(a) Prove: the sum of two even numbers is even. (Model it on Proof 2.)   (b) Prove ∃: "There exists x with x² = 9x."   (c) Prove ∀: "The sum of three consecutive whole numbers is divisible by 3." (Arm a letter: call the smallest one n.)

Answers: (a) Call them 2m and 2n. Sum = 2m + 2n = 2(m + n) — factor out the 2. m + n is a whole number, so the sum has the 2k shape → even ∎. (b) Witness x = 9: 9² = 81 and 9(9) = 81 ✓. One witness proves ∃. (x = 0 works too.) (c) Call them n, n + 1, n + 2. Sum = n + (n + 1) + (n + 2) = 3n + 3 (combine like terms) = 3(n + 1) (factor out 3). n + 1 is a whole number, so the sum is 3 × (a whole number) — divisible by 3 by definition ∎. Check with numbers: 4 + 5 + 6 = 15 = 3 × 5 ✓.


─────────────────────────────────────────────
Lesson 7: Arguments — Two Moves That Work, Two Fakes, and the Danger of One-Way Steps
─────────────────────────────────────────────

📌 Key idea of this section:

        An argument is VALID when the conclusion is FORCED by the facts.
        Two shapes always work: affirm the IF, deny the THEN.
        Two famous shapes are fakes: affirm the THEN, deny the IF.
        Solving an equation chains two-way promises. Squaring, and multiplying by something
        that could be 0, are ONE-WAY promises — so they can create fake solutions.

An argument takes facts you already have and squeezes a new fact out of them. With one if-then promise on the table, exactly four shapes are possible. Two work, two don't. Promise for all four: "If x = 4, then x² = 16."

        WORKS — affirm the IF:              WORKS — deny the THEN:
        x = 4. So x² = 16. Guaranteed.      x² ≠ 16. So x ≠ 4. Guaranteed.
                                            (This is the contrapositive in action!)

        FAKE 1 — affirm the THEN:           FAKE 2 — deny the IF:
        x² = 16. So x = 4??                 x ≠ 4. So x² ≠ 16??
        NO — x could be −4.                 NO — x could be −4 again!

The ancient names: the working moves are modus ponens (affirm the IF) and modus tollens (deny the THEN). Notice how the SAME witness, x = −4, exposes both fakes — the negative root is the sprinkler of algebra.

The deepest point, worth reading twice: a fake argument can accidentally land on a TRUE conclusion. "x ≠ 4, so x² ≠ 16" — plug in x = 5 and the conclusion is true (25 ≠ 16)! But the argument is still fake, because the conclusion wasn't FORCED: x = −4 proves it can fail. Valid means no escape, not "worked out this time."

Now — the connection that explains half of Algebra II. Solving an equation is a CHAIN OF PROMISES, and whether you may trust the answer depends on whether those promises are one-way or two-way.

        Reversible (two-way, ↔):   add/subtract the same thing; multiply/divide by a NONZERO number.
        One-way (→ only):          squaring both sides; multiplying both sides by something that could be 0.

A one-way step can make the truth set GROW: if A = B then A² = B² is a valid promise (squaring equals gives equals), but its converse — if A² = B² then A = B — is a fake (A and B might be opposites!). So after a one-way step, every candidate solution must be CHECKED in the original equation. The check isn't politeness. It's the logic.

Worked example 1 — solve √(3x + 4) = x, and meet an extraneous solution.

        √(3x + 4) = x
        3x + 4 = x²            square both sides — VALID one-way move... but the truth set may have grown
        0 = x² − 3x − 4        subtract 3x and 4 from both sides — reversible, collects everything on one side
        0 = (x − 4)(x + 1)     factor: find two numbers with product −4 and sum −3 → those are −4 and +1
        x = 4  OR  x = −1      zero-product property: if a product is 0, at least one factor is 0 (an OR!)

        Factor check by distribution: (x − 4)(x + 1) = x² + x − 4x − 4 = x² − 3x − 4 ✓

        Now the MANDATORY checks — we squared, so candidates are suspects, not solutions:
        x = 4:   √(3·4 + 4) = √16 = 4.  Equal to x? 4 = 4 ✓  KEEP.
        x = −1:  √(3·(−1) + 4) = √1 = 1.  Equal to x? 1 ≠ −1 ✗  EXTRANEOUS — reject.

        Truth set: {4}.

Where did −1 come from? Squaring merged our equation with its evil twin √(3x + 4) = −x (both square to 3x + 4 = x²), and −1 solves the twin: √1 = 1 = −(−1) ✓. The squared equation's truth set is the UNION of both equations' truth sets — and the check filters out the twin's members. Using the squared equation to claim the original is affirming the consequent; the check is how you confess it.

Worked example 2 — the zero-multiply trap, and a truth set that comes out EMPTY. Solve x/(x − 2) = 2/(x − 2).

        x/(x − 2) = 2/(x − 2)
        x = 2                       multiply both sides by (x − 2) — one-way!
                                    This step is reversible ONLY if x − 2 ≠ 0.

        MANDATORY check — we multiplied by something that could be 0:
        x = 2:   left side 2/(2 − 2) = 2/0.  DIVISION BY ZERO — undefined.
                 The candidate doesn't just fail; it makes the original equation meaningless. REJECT.

        Truth set: ∅.  "No solution" is the correct answer here.

Where did the fake candidate come from? When x = 2, the multiplier x − 2 equals 0 — and multiplying by 0 turns any equation into 0 = 0, which is true for free. The multiplied equation can't feel that the original was broken at exactly that value. Multiplying by zero erases information (Lesson 4's assassin 3!), and erased information is how fake solutions are born. The flip side of the same trap: DIVIDING by an expression that could be 0 can erase a real solution — that's practice problem 92.

✏️ Your Turn

Valid or fake? Promise: "If x = −2, then x² = 4."
(a) x = −2, so x² = 4.   (b) x² = 4, so x = −2.   (c) x² ≠ 4, so x ≠ −2.

Answers: (a) VALID — affirming the IF. (b) FAKE — affirming the THEN: x could be 2, since 2² = 4 too. (c) VALID — denying the THEN (the contrapositive speaking).


─────────────────────────────────────────────
Lesson 8: Knights and Knaves — When the Statements Use AND, OR, and IF–THEN
─────────────────────────────────────────────

📌 Key idea of this section:

        Knights ALWAYS tell the truth. Knaves ALWAYS lie.
        A knave's compound statement is false as a WHOLE — and De Morgan (plus the promise
        table) tells you exactly what that falsehood means.
        Method: SUPPOSE, FOLLOW the consequences, hit a contradiction → switch, then CHECK.

Welcome back to Raymond Smullyan's island, where every islander is a knight (never lies) or a knave (never tells the truth). Last time the puzzles were warm-ups. Now the islanders fight back with compound statements — and everything you learned about ¬, ∧, ∨, → becomes a weapon. The key upgrade:

        If a knave says "p AND q," the AND is false — De Morgan: ¬p OR ¬q (at least one part fails).
        If a knave says "p OR q," the OR is false — De Morgan: ¬p AND ¬q (BOTH parts fail).
        If a knave says "if p then q," the promise is false — the promise table: p true AND q false.

The method, in a box:

        1. SUPPOSE someone is a knight (or a knave).
        2. FOLLOW the consequences: knights' statements are true, knaves' are false.
        3. Hit a contradiction? That supposition is dead — try the other one.
        4. Found a consistent case? CHECK every statement before declaring victory.
        5. BOTH cases explode? The situation is impossible.
        6. BOTH cases survive? Then the answer is whatever is true in BOTH of them (see Puzzle 5).

Puzzle 1 — the impossible sentence (still impossible). One islander says: "I am a knave."

  · SUPPOSE he's a knight → his statement is true → he IS a knave. Contradiction!
  · SUPPOSE he's a knave → his statement is false → he is NOT a knave → he's a knight. Contradiction!
  · Both cases explode. NO islander can ever say those words.

Puzzle 2 — an OR statement, unpacked with De Morgan. Ava says: "At least one of us is a knight." Bo says: "Ava is a knave."

  · SUPPOSE Ava is a knave → her OR statement is FALSE → De Morgan: NOT(Ava knight) AND NOT(Bo knight)
    → both are knaves → Bo is a knave → his statement "Ava is a knave" must be FALSE → Ava is a knight. Contradiction!
  · So Ava is a KNIGHT → her statement is true ✓ (she herself is a knight — the OR is satisfied).
  · Now Bo: SUPPOSE he's a knight → "Ava is a knave" would be true — but she's a knight. Contradiction.
  · So Bo is a KNAVE → his statement is false → Ava is NOT a knave ✓ consistent.
  · CHECK: Ava (knight) told the truth ✓. Bo (knave) lied ✓.
    Solution: Ava knight, Bo knave.

Puzzle 3 — the no-solution shocker, three islanders. Ava says: "Bo is a knight." Bo says: "Cy is a knight." Cy says: "Ava is a knave."

  · SUPPOSE Ava is a knight → Bo is a knight → Cy is a knight → "Ava is a knave" is TRUE → Ava is a knave. Contradiction!
  · SUPPOSE Ava is a knave → her statement is false → Bo is a knave → his statement is false → Cy is a knave
    → his statement "Ava is a knave" is FALSE → Ava is a knight. Contradiction!
  · Both suppositions explode — this trio of statements can never exist. Sometimes the correct answer is: impossible.

Puzzle 4 — the islander who speaks in if-then. Ava says: "If I am a knight, then Bo is a knave." Bo says nothing.

  · SUPPOSE Ava is a knave → her if-then must be FALSE → the promise table (Lesson 4) says a broken
    promise needs IF true and THEN false → the IF part "I am a knight" would have to be TRUE → but she's
    a knave → the IF is false → a false IF means the if-then is automatically TRUE (untested promise!)
    → so her statement CANNOT be false → a knave can't say it. Contradiction!
  · So Ava is a KNIGHT → her statement is TRUE → and its IF part is true (she IS a knight)
    → affirming the IF forces the THEN (modus ponens!): Bo is a knave.
  · CHECK: Ava knight, statement "true → true" = true ✓. Bo knave, silent — nothing to break ✓.
    Solution: Ava knight, Bo knave.

Notice what happened: the promise table ITSELF solved the puzzle. A knave can never utter "if I am a knight, then..." — such a sentence can only come from a knight. The logic you learned in Lesson 4 is doing detective work now.

Puzzle 5 — the puzzle with TWO surviving cases. Ava says: "Bo and I are the same type." Bo says nothing.

  · SUPPOSE Ava is a knight → her statement is true → they ARE the same type → Bo is a knight.
    Check this case: Ava knight told the truth ✓. Bo knight, silent ✓. CONSISTENT.
  · SUPPOSE Ava is a knave → her statement is false → they are DIFFERENT types → Bo ≠ Ava
    → Bo is a knight. Check this case: Ava knave — her statement "same type" really is false
    (knight vs knave) ✓ a knave lying. CONSISTENT.
  · BOTH cases survive?! Yes — this puzzle cannot decide Ava. But look at what stays fixed
    across both surviving cases: Bo is a knight in every one of them.

        Final answer: Bo is DEFINITELY a knight. Ava could be either type.

This is a real mathematical superpower: when every road survives, report what's true on all of them. Mathematicians do this constantly — "we can't pin down the exact value, but in every possible case it's positive" is a perfectly strong conclusion.

✏️ Your Turn

Ava says: "Bo is a knave." Bo says: "Ava and I are the same type." What are they?

Answer: SUPPOSE Ava is a knave → her statement is false → Bo is a KNIGHT → Bo's statement is true → they ARE the same type → Ava is a knight. Contradiction! So Ava is a KNIGHT → her statement is true → Bo is a knave → Bo's statement "same type" must be FALSE → they're different types ✓ (knight vs knave — indeed different). CHECK: Ava told the truth ✓, Bo lied ✓. Solution: Ava knight, Bo knave. (Notice Bo's statement here is the same sentence as Puzzle 5's — but Ava's different sentence pins everything down.)


─────────────────────────────────────────────
Lesson 9: Watch Out! Common Mistakes
─────────────────────────────────────────────

📌 Keep the rules in sight while you read these:

        ¬ flips the boundary: > ↔ ≤, < ↔ ≥, = ↔ ≠
        ALL ↔ SOME-NOT · AND needs both · OR needs one (both is fine)
        NOT swaps AND/OR · a promise breaks only one way
        flip-and-deny = same promise · flip-only = maybe
        reversible step = two-way promise · squaring and zero-multiplying = one-way, so CHECK

Mistake 1: flipping ALL to NONE. "All multiples of 6 are even" flips to "No multiple of 6 is even"? ❌ One odd multiple of 6 is all it takes to kill "all" — so the flip is "SOME multiple of 6 is not even." ✅ (The original happens true, so the flip is false — flipping doesn't care.)

Mistake 2: negating > as <. The flip of "x > 5" is "x < 5"? ❌ Where did 5 go? "Not above 5" still allows exactly 5 — the flip is x ≤ 5. The boundary always switches teams. ✅

Mistake 3: trusting the converse in algebra. "x² = 25, so x = 5"? ❌ x = −5 satisfies the equation too. Squaring is a one-way door: the converse is a maybe, never a must. The guaranteed relative is the contrapositive — flip AND deny. ✅

Mistake 4: forgetting that OR includes BOTH — and that truth sets can too. "The solution of x² = 7x − 12 is x = 3"? ❌ x = 4 works too (16 = 28 − 12 ✓). A quadratic's truth set is an OR: x = 3 OR x = 4. Reporting half of it is a wrong answer. ✅

Mistake 5: negating an AND and keeping the AND. "NOT (x > 2 AND x ≤ 9)" means "x ≤ 2 AND x > 9"? ❌ Nothing can be both ≤ 2 and > 9 — that flip claims the original was ALWAYS true! De Morgan swaps the connective: x ≤ 2 OR x > 9. ✅

Mistake 6: thinking "some" means "some aren't." "Some even numbers are prime, so some even numbers aren't prime"? ❌ In logic, SOME means at least one — possibly all. It promises nothing about the rest. (The conclusion happens to be true here, but it never FOLLOWS from "some are.") ✅

Mistake 7: calling a promise broken when the IF never happened. "If x² < 0, then x = 99" is a lie? ❌ No real number has a negative square, so the IF never triggers — and an untested promise counts as kept. A promise dies ONLY at true-IF plus false-THEN. ✅

Mistake 8: canceling x without checking it isn't 0. "x² = 5x, divide both sides by x, so x = 5, done"? ❌ Dividing by x is reversible only when x ≠ 0 — and x = 0 IS a solution (0² = 0 = 5·0 ✓), silently thrown away. Never divide by something that could be zero; instead collect on one side and factor: x² − 5x = 0 → x(x − 5) = 0 → x = 0 OR x = 5. ✅

Mistake 9: squaring both sides and skipping the check. "√(3x + 4) = x → 3x + 4 = x² → x = 4 or x = −1, done"? ❌ Squaring is one-way; its truth set is the union with the evil twin √(3x + 4) = −x. Check each candidate in the ORIGINAL: −1 fails (√1 = 1 ≠ −1). Only 4 survives. ✅

Mistake 10: thinking √25 = ±5. "x² = 25, so x = √25 = ±5"? ❌ The reasoning is muddled even though the answer list is right. The symbol √ means the POSITIVE root, one value: √25 = 5, period. The equation x² = 25 has two solutions for a different reason — squaring is one-way (Lesson 7), so you must write x = 5 OR x = −5 as a separate step with its own justification. The two answers come from the logic of squaring, not from the √ symbol. ✅

Mistake 11: solving a knights-and-knaves puzzle without the final check. Found a consistent case? ✅ — but did you re-test EVERY islander's statement, including the silent ones and the compound ones (De Morgan for AND/OR, the promise table for IF–THEN)? And did you check the OTHER supposition too? Puzzle 5 showed both cases can survive — if you stop at the first consistent case, you might miss that Ava was never pinned down. One unchecked statement is how wrong answers sneak in.


─────────────────────────────────────────────
Lesson 10: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time.

The symbol dictionary:

        ¬p    NOT p                    p ∧ q   p AND q (both)         p ∨ q   p OR q (at least one)
        p → q if p then q              p ↔ q   p if and only if q (both directions)
        ∀x    for all x                ∃x      there exists an x
        ∈     is a member of           ∅       the empty set          ∎       proof finished

The rules:

        Statement: TRUE or FALSE, checkable. Open sentence: statement-maker with a truth set.
        Solving = finding the truth set (one, several, ALL, or ∅).
        Flips: > ↔ ≤, < ↔ ≥, = ↔ ≠ · ALL ↔ SOME...NOT · NONE ↔ SOME · a chain flips to an OR
        AND: both true (overlap) · OR: at least one (union)
        Absolute value: ≤ clusters close (AND) · > splits far (OR)
        De Morgan: ¬(p ∧ q) = ¬p ∨ ¬q · ¬(p ∨ q) = ¬p ∧ ¬q
        p → q breaks ONLY at p true + q false — one counterexample kills it
        Three assassins: negatives (squaring erases sign), fractions in (0,1) (squaring shrinks), zero (multiplying erases)
        Contrapositive (flip AND deny): always matches · Converse (flip only): not guaranteed
        Biconditional p ↔ q = two promises — check BOTH directions
        "p only if q" means p → q · necessary = required · sufficient = enough by itself
        Valid moves: affirm the IF, deny the THEN · Fakes: affirm the THEN, deny the IF
        Prove ∀ with letters covering every case (the contrapositive is a legal shortcut) · prove ∃ with one witness
        Reversible step = two-way promise · squaring and multiplying by maybe-zero = one-way → CHECK every candidate
        Knights truth, knaves lie: SUPPOSE, FOLLOW, CHECK — and if both cases survive, report what's true in both

The magic sentence:

        NOT flips the boundary and swaps ALL with SOME-NOT. AND needs both; OR needs one. A promise breaks only one way. Flip-and-deny keeps it true; flip-only is a trap. For-all wants letters; there-exists wants one witness. Squaring and zero-multiplying are one-way — suppose, follow, CHECK.

Say it out loud three times. That sentence is 95% of the logic you'll meet for years.

Why this matters

You can now do things most students twice your age can't: negate any comparison or ALL-claim correctly, kill a bad promise with one well-aimed fraction, negative number, or zero, prove a "for all" claim with letters — even through the contrapositive door — tell a real proof from a pile of examples, explain exactly why "check your solutions" is a logical requirement and not a teacher's superstition, and solve island puzzles whose sentences are themselves built from AND, OR, and IF–THEN. And here's the secret you just unlocked: every proof in mathematics is built from these exact moves. Geometry proofs, the quadratic formula, computer programs, courtroom arguments — they're all AND, OR, NOT, and IF–THEN, chained together. You learned the atoms of reasoning itself.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Flips: > ↔ ≤, < ↔ ≥, = ↔ ≠ · ALL ↔ SOME-NOT · NONE ↔ SOME
        AND: both (overlap) · OR: at least one (union — both counts!)
        De Morgan: NOT-AND → OR · NOT-OR → AND
        Promise breaks only one way: true IF + false THEN
        Contrapositive: always safe · Converse: never guaranteed
        Valid: affirm IF, deny THEN · Fakes: affirm THEN, deny IF
        ∀ proof: letters · ∃ proof: one witness · one-way steps: CHECK candidates
        Knights truth, knaves lie — suppose, follow, check

Grab a pencil and paper. The easy problems train the exact patterns from the lessons; the intermediate ones chain them together; the challenge ones are puzzles — some have more than one right answer. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "What KIND of statement is this — and which rule governs it?"


🟢 EASY (Problems 1–60)

Problems 1–8 — Statement or not? If it IS a statement, also say true or false. (Lesson 1)

  1. "−7 < −4."
  2. "x + 5 = 13."
  3. "(−2)³ = 8."
  4. "Is 15 prime?"
  5. "|−9| = −9."
  6. "¾ + ¼ = 1."
  7. "Solve for x."
  8. "If f(x) = 2x + 1, then f(4) = 9."

Problems 9–14 — Write the flip (negation) of each comparison. Watch the boundaries! (Lesson 2)

  9. x > 9
  10. x ≤ −2
  11. x = 7
  12. 2x + 1 < 15
  13. x ≥ 0
  14. |x| > 3

Problems 15–20 — The ALL/SOME flip, now in symbols too. Negate each one. (Lesson 2)

  15. "All multiples of 8 are even."
  16. "No prime is divisible by 4."
  17. "Some integer is its own square."
  18. ∀x: x² ≥ 0
  19. ∃x: x + 1 = x
  20. "Every negative number is less than every positive number."

Problems 21–28 — Solve: give the truth set. Every step, every reason. (Lesson 1)

  21. 2x + 3 = 15
  22. 5x − 7 = 3x + 9
  23. x/3 + 2 = 7
  24. 4(x + 1) = 28
  25. −3x + 2 = 20
  26. x² = 64
  27. Let g(x) = x² − 3. Solve g(x) = 6.
  28. |x − 2| = 6

Problems 29–34 — Inequalities: give the truth set as a comparison. (Lessons 1–2)

  29. 3x − 2 > 10
  30. 2x + 5 ≤ 17
  31. −2x + 3 > 11
  32. 5 − x ≥ 8
  33. x/4 + 1 < 6
  34. 7x − 4 ≥ 9x

Problems 35–40 — True or false? Remember: AND needs both; OR needs one. (Lesson 3)

  35. "−4 < 0 AND (−4)² = 16."
  36. "½ < 1 AND (½)² > ½."
  37. "9 is prime OR 9 is odd."
  38. "2³ = 6 OR 2³ = 8."
  39. "x = 3 makes x² = 9 AND 2x = 9."
  40. "x = −5 satisfies |x| = 5 OR x > 0."

Problems 41–46 — Compound inequalities and absolute value. (Lesson 3)

  41. Write as one chain: x > 1 AND x ≤ 9.
  42. Solve: 2x + 1 ≤ 13 AND x + 2 > 5.
  43. Solve: x − 3 > 2 AND 3x ≤ 24.
  44. Rewrite without absolute value: |x| ≤ 5.
  45. Rewrite without absolute value: |x| > 5.
  46. Solve: |x − 3| < 4.

Problems 47–52 — De Morgan: rewrite without the leading NOT. (Lesson 3)

  47. NOT (x > 2 AND x ≤ 10)
  48. NOT (x < −3 OR x ≥ 4)
  49. NOT (p AND q AND r)
  50. "It is not true that 8 is even and prime." (Also: is the rewritten version true?)
  51. NOT (x ≤ 6 AND x ≥ 1)
  52. "The shop is not open on Saturday or Sunday."

Problems 53–58 — IF–THEN anatomy and promise-breaking. (Lesson 4)

  53. "If x = 6, then x² = 36." Name the hypothesis and the conclusion. Is the promise true?
  54. Same promise. You're told x = 6. What must be true?
  55. Same promise. You're told x² ≠ 36. What must be true?
  56. Kill with a counterexample: "If x² > 4, then x > 2."
  57. Kill with a counterexample: "If x is negative, then −x is also negative."
  58. True or false — and why: "If x² < 0, then x = 50."

Problems 59–60 — Quick think! (Lessons 1 and 3)

  59. The truth set of "2x = 10" is {5}. Is 7 in the truth set of "2x = 10 OR x = 7"? Why?
  60. What is the truth set of x = x + 2? Show the step that proves it.


🟡 INTERMEDIATE (Problems 61–85)

Problems 61–66 — The family of four and the two-way promise. (Lesson 5)

  61. Write the converse, inverse, and contrapositive of "If x = 3, then 2x = 6."
      Which of the three are true?
  62. Same job for "If x = 5, then x² = 25." Which relatives are true this time — and why the difference?
  63. Backwards detective: a promise's contrapositive is "If x² ≠ 100, then x ≠ 10."
      What was the ORIGINAL promise?
  64. True biconditional or not? "x = 8 ↔ 3x = 24." Check both directions.
  65. True biconditional or not? "x² = 16 ↔ x = 4." If it fails, repair it into a true one.
  66. Fill in the blank to make a true biconditional: "x is divisible by 10 ↔ x ends in ___."

Problems 67–70 — "Only if," necessary, and sufficient. (Lesson 5)

  67. "You may ride the coaster only if you are at least 48 inches tall."
      (a) Rewrite as an if-then. (b) You ARE 50 inches tall. Is a ride guaranteed?
  68. "Passing this course requires a score of at least 60."
      (a) Rewrite as an if-then. (b) You scored 62. Did you necessarily pass?
  69. True promise: "If x is divisible by 12, then x is divisible by 3."
      Which condition is sufficient for which? Which is necessary for which?
  70. True or false: "x² = y² only if x = y." (Translate first — then decide.)

Problems 71–74 — Circle logic and quantifiers. (Lesson 6)

  71. All multiples of 20 are multiples of 10. All multiples of 10 are multiples of 5.
      Conclusion: all multiples of 20 are multiples of 5. Valid?
  72. All multiples of 6 are even. All multiples of 10 are even.
      Conclusion: some multiple of 6 is a multiple of 10. Does it FOLLOW?
  73. Some even numbers are prime. Some prime numbers are odd.
      Conclusion: some even number is odd. Valid?
  74. All multiples of 8 are even. 27 is not even.
      Conclusion: 27 is not a multiple of 8. Valid?

Problems 75–78 — Valid or fake? Name the move or the trap. (Lesson 7)

  The promise for 75–78: "If x = 8, then x² = 64."

  75. x = 8, so x² = 64.
  76. x² = 64, so x = 8.
  77. x² ≠ 64, so x ≠ 8.
  78. x ≠ 8, so x² ≠ 64.

Problems 79–82 — ∀ and ∃ in action: prove or kill. (Lesson 6)

  79. Prove ∃: "There exists x with 5x + 1 = 21."
  80. True or false — and defend your answer: ∀x: x² ≥ 0 (x a real number).
  81. True or false — and defend: ∀x: x² > x.
  82. Find BOTH witnesses for ∃x: x² = x. (Hint: x² = x means x² − x = 0 — factor it.)

Problems 83–85 — A system is an AND: find the pair (x, y) that makes BOTH true. (Lesson 3)

  83. x + y = 14 AND x − y = 6.
  84. y = 2x AND x + y = 12.
  85. 2x + 3y = 24 AND x = y + 2.


🔴 CHALLENGE (Problems 86–100)

  86. The extraneous hunter. Solve √(x + 12) = x with full steps — square, factor, and then
      CHECK every candidate in the original equation. One of your candidates is a fake;
      explain exactly where it came from.

  87. The if-then islander. Ava says: "If I am a knight, then Bo is a knight." Bo says nothing.
      What are they? (Lesson 8's Puzzle 4 is your model — the promise table is the key.)

  88. Three islanders. Ava says: "At least one of us is a knave." Bo says: "Cy is a knight."
      Cy says: "We are all knaves." Find all three types, with suppose-and-check.

  89. Design and destroy. Invent a FALSE "for all x" claim about squares that a classmate
      would find believable — then assassinate it with ONE counterexample that uses a
      fraction between 0 and 1, or a negative number, or zero.

  90. Backwards truth sets. (a) My equation's truth set is {6, −6} and it involves squaring.
      What could my equation be? (b) Now write an equation whose truth set is {6} ONLY.

  91. Mini-proof. Prove: the sum of an even number and an odd number is odd.
      (Arm your letters: even = 2m, odd = 2n + 1. Every step needs a reason.)

  92. The vanishing solution. A student solves x² = 5x by dividing both sides by x and
      announces "x = 5." (a) Find the solution they lost. (b) Explain the logical flaw:
      why is "divide by x" not an innocent reversible step here? (c) Solve it correctly
      by factoring.

  93. Design it! Invent your own two-islander puzzle whose ONLY solution is
      "Ava is a knight, Bo is a knave." Then solve it with suppose-and-check to prove
      the other cases explode.

  94. The untestable promise. Write a TRUE if-then statement about numbers whose
      hypothesis can never happen — and explain, using the promise table, why it
      counts as true.

  95. Backwards conditions. The answer is "divisible by 6."
      (a) What condition is SUFFICIENT for being divisible by 6 (but not necessary)?
      (b) Being divisible by 6 is NECESSARY for what condition?

  96. Design it, island edition! Invent a three-islander puzzle in which EXACTLY one
      islander is a knight — and prove your puzzle works by testing every case.
      (Hint: build each statement around the solution you want, then check that every
      other case explodes.)

  97. The backwards promise machine. Here is a contrapositive: "If x is not even, then
      x is not divisible by 6." (a) What was the original promise? (b) Write its converse.
      (c) Is the converse true? Prove your answer.

  98. The OR truth set. A classmate reports: "x² = 7x − 12, so x = 3."
      (a) Show x = 3 really works. (b) Explain what logic error "so x = 3" commits.
      (c) Find the COMPLETE truth set by factoring — and write it as an OR.

  99. Two-way design. Write an if-then promise about x that is TRUE and whose converse
      is also TRUE — then prove both directions step by step, and write the final
      biconditional with ↔.

  100. The grand finale — the island census. You meet Ava, Bo, and Cy.
      Ava says: "Bo is a knave." Bo says: "Ava and Cy are the same type."
      Cy says: "Ava is a knight." Determine all three types, proving your answer is the
      ONLY possibility.


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which rule slipped — a boundary flip, the ALL/SOME swap, a De Morgan swap, the promise table, a one-way algebra step, or the final check in suppose-and-check.

Easy

  1. Statement — TRUE. −7 sits farther left than −4 on the number line.
  2. NOT a statement — an open sentence; its truth depends on x. (Its truth set happens to be {8}.)
  3. Statement — FALSE: (−2)³ = (−2)(−2)(−2) = 4 × (−2) = −8, not 8.
  4. NOT a statement — a question.
  5. Statement — FALSE: |−9| = 9. Absolute value is a distance, and distance is never negative.
  6. Statement — TRUE: ¾ + ¼ = 4/4 = 1.
  7. NOT a statement — a command.
  8. Statement — TRUE: f(4) = 2(4) + 1 = 8 + 1 = 9 ✓.

  9. x ≤ 9   (the boundary 9 switches teams)
  10. x > −2   (≤ flips to >, boundary −2 switches)
  11. x ≠ 7   (= flips to ≠)
  12. 2x + 1 ≥ 15   (flip the whole comparison as one unit: < becomes ≥)
  13. x < 0   (≥ flips to <, boundary 0 switches)
  14. |x| ≤ 3   (> flips to ≤ — the absolute value just rides along)

  15. SOME multiple of 8 is NOT even. (The original is true, so this flip is false — that's fine.)
  16. SOME prime IS divisible by 4. (NONE flips to SOME. Original true — a multiple of 4 always
      hides the factor 4 = 2·2 — so the flip is false.)
  17. NO integer is its own square. (SOME flips to NONE. Original true — 0² = 0 and 1² = 1 —
      so the flip is false.)
  18. ∃x: x² < 0   (∀ becomes ∃, ≥ becomes <. Original true → flip false.)
  19. ∀x: x + 1 ≠ x   — in words, NO x works. (∃ becomes ∀...¬.)
  20. SOME negative number is greater than or equal to SOME positive number.
      (The claim says EVERY negative beats the comparison against EVERY positive, so one
      single failing pair kills it: ∃ negative n and ∃ positive p with n ≥ p.)

  21. 2x + 3 = 15 → 2x = 12 (subtract 3 from both sides) → x = 6 (divide by 2).
      Truth set {6}.  CHECK: 2(6) + 3 = 12 + 3 = 15 ✓.
  22. 5x − 7 = 3x + 9 → 2x − 7 = 9 (subtract 3x from both sides) → 2x = 16 (add 7) → x = 8
      (divide by 2). Truth set {8}.  CHECK: 5(8) − 7 = 33 and 3(8) + 9 = 33 ✓.
  23. x/3 + 2 = 7 → x/3 = 5 (subtract 2) → x = 15 (multiply by 3).
      Truth set {15}.  CHECK: 15/3 + 2 = 5 + 2 = 7 ✓.
  24. 4(x + 1) = 28 → x + 1 = 7 (divide by 4) → x = 6 (subtract 1).
      Truth set {6}.  CHECK: 4(6 + 1) = 4·7 = 28 ✓.
  25. −3x + 2 = 20 → −3x = 18 (subtract 2) → x = −6 (divide by −3 — a nonzero number, reversible).
      Truth set {−6}.  CHECK: −3(−6) + 2 = 18 + 2 = 20 ✓.
  26. x² = 64 → x = 8 OR x = −8, since 8² = 64 AND (−8)² = 64 — squaring forgets the sign.
      Truth set {8, −8}. (Both members or the answer is wrong!)
  27. g(x) = 6 means x² − 3 = 6 → x² = 9 (add 3) → x = 3 OR x = −3.
      Truth set {3, −3}.  CHECK: g(3) = 9 − 3 = 6 ✓ and g(−3) = 9 − 3 = 6 ✓.
  28. |x − 2| = 6 → x − 2 = 6 OR x − 2 = −6 (a distance of 6 lives on both sides)
      → x = 8 OR x = −4. Truth set {8, −4}.  CHECK: |8 − 2| = 6 ✓ and |−4 − 2| = |−6| = 6 ✓.

  29. 3x − 2 > 10 → 3x > 12 (add 2) → x > 4 (divide by 3, positive — no flip).
  30. 2x + 5 ≤ 17 → 2x ≤ 12 (subtract 5) → x ≤ 6.
  31. −2x + 3 > 11 → −2x > 8 (subtract 3) → x < −4 (divide by −2 — FLIP the comparison!).
  32. 5 − x ≥ 8 → −x ≥ 3 (subtract 5) → x ≤ −3 (divide by −1 — FLIP!).
      CHECK x = −4: 5 − (−4) = 9 ≥ 8 ✓.
  33. x/4 + 1 < 6 → x/4 < 5 (subtract 1) → x < 20 (multiply by 4, positive — no flip).
  34. 7x − 4 ≥ 9x → −4 ≥ 2x (subtract 7x from both sides) → x ≤ −2 (divide by 2).
      CHECK x = −2: 7(−2) − 4 = −18 and 9(−2) = −18 — boundary included ✓.

  35. TRUE — both halves true: −4 < 0 ✓ and (−4)² = 16 ✓. AND is happy.
  36. FALSE — second half fails: (½)² = ¼, and ¼ > ½ is false (¼ < ½). AND dies on one failure.
  37. TRUE — 9 is odd ✓. One true half is enough for OR. (9 = 3 × 3, so "prime" is false — no matter.)
  38. TRUE — 2³ = 8 ✓ makes the right half true. OR needs only one.
  39. FALSE — x² = 9 ✓ but 2x = 6 ≠ 9 ✗. AND needs both.
  40. TRUE — |−5| = 5 ✓. The other half (x > 0) is false, but OR only needs one.

  41. 1 < x ≤ 9. (AND = overlap; write it as one chain with the smaller bound on the left.)
  42. 2x + 1 ≤ 13 → x ≤ 6;  x + 2 > 5 → x > 3.  Overlap: 3 < x ≤ 6.
      CHECK boundary x = 6: 13 ≤ 13 ✓ and 8 > 5 ✓ — in.
  43. x − 3 > 2 → x > 5;  3x ≤ 24 → x ≤ 8.  Overlap: 5 < x ≤ 8.
  44. −5 ≤ x ≤ 5. (Less-than clusters close: an AND around 0.)
  45. x > 5 OR x < −5. (Greater-than splits far: two rays, no single chain can write it.)
  46. |x − 3| < 4 → −4 < x − 3 < 4 (distance reading) → −1 < x < 7 (add 3 to all three parts).
      CHECK x = 7: |7 − 3| = 4, NOT < 4 — boundary correctly excluded ✓.

  47. x ≤ 2 OR x > 10.   (De Morgan: NOT slips in, AND → OR; each comparison flips.)
  48. x ≥ −3 AND x < 4, i.e., −3 ≤ x < 4.   (De Morgan: OR → AND; the overlap writes as a chain.)
  49. ¬p OR ¬q OR ¬r.   (The law extends to three parts: blow an AND of three by failing ANY one.)
  50. 8 is NOT even OR 8 is NOT prime. Is it true? 8 IS even (first half false) and 8 is NOT prime
      (8 = 2·2·2 — second half true). false OR true = TRUE. (The original AND was false,
      so its flip had better be true ✓.)
  51. x > 6 OR x < 1.   (The original chain 1 ≤ x ≤ 6 gets flipped to everything OUTSIDE it.)
  52. The shop is NOT open Saturday AND NOT open Sunday. (To fail an OR you must fail BOTH.)

  53. Hypothesis: x = 6. Conclusion: x² = 36. The promise is TRUE — the only value that triggers
      it (x = 6) keeps it: 6² = 36 ✓.
  54. x² = 36 MUST be true — affirming the IF forces the THEN (modus ponens).
  55. x ≠ 6 MUST be true — if x were 6, x² would be 36; since x² ≠ 36, x can't be 6.
      (Denying the THEN — the contrapositive in action.)
  56. x = −3: IF holds, (−3)² = 9 > 4 ✓; THEN fails, −3 > 2 is false. Counterexample — claim dead.
      (Any x ≤ −2 works: −2.5, −10...)
  57. x = −3: IF holds (−3 is negative ✓); THEN fails (−x = 3, which is POSITIVE).
      Negating a negative gives a positive — claim dead.
  58. TRUE. For real x, x² ≥ 0 always (positive² > 0, 0² = 0, negative² > 0), so the IF x² < 0
      can never happen. An untestable promise counts as kept — it breaks ONLY at true IF + false THEN.
  59. YES. OR takes the UNION of the truth sets: 7 satisfies the half "x = 7," so it's in.
      Truth set of the OR: {5, 7}.
  60. x = x + 2 → 0 = 2 (subtract x from both sides). 0 = 2 is false no matter what x was,
      so the truth set is ∅ — the empty set. "No solution" is a complete, correct answer.

Intermediate

  61. Converse: "If 2x = 6, then x = 3." Inverse: "If x ≠ 3, then 2x ≠ 6."
      Contrapositive: "If 2x ≠ 6, then x ≠ 3."
      ALL THREE are true this time: doubling is REVERSIBLE (2x = 6 → x = 3 by dividing by 2,
      and the truth set of 2x = 6 is exactly {3}), so the promise runs both ways and the
      denied version runs too.
  62. Converse: "If x² = 25, then x = 5" — FALSE (x = −5 satisfies x² = 25 and isn't 5).
      Inverse: "If x ≠ 5, then x² ≠ 25" — FALSE (−5 again: ≠ 5, yet x² = 25).
      Contrapositive: "If x² ≠ 25, then x ≠ 5" — TRUE.
      Why the difference from 61: squaring is ONE-WAY — two different inputs (5 and −5)
      share the output 25, so you can't reverse it safely.
  63. Flip AND deny the contrapositive to get home: original = "If x = 10, then x² = 100."
      (Contrapositive of the contrapositive is the original — the two always match.)
  64. Direction 1 (→): x = 8 → 3x = 3·8 = 24 ✓ TRUE.
      Direction 2 (←): 3x = 24 → x = 8 (divide both sides by 3 — reversible) ✓ TRUE.
      AND needs both, and has both → TRUE biconditional.
  65. NOT a true biconditional: Direction 2 (←) fails — x = −4 gives (−4)² = 16, but −4 ≠ 4.
      Repair: "x² = 16 ↔ (x = 4 OR x = −4)." Check: Dir 1: 4² = 16 ✓ and (−4)² = 16 ✓.
      Dir 2: a square of 16 comes only from the two roots ±4 ✓. Both directions → TRUE.
  66. "x ends in 0." (That's the very definition of divisibility by 10 — definitions are
      always biconditionals.)
  67. (a) "If you ride the coaster, then you are at least 48 inches tall." (p only if q means p → q.)
      (b) NO — 48 inches is NECESSARY (no ride without it) but not SUFFICIENT (you also need
      a ticket, an open park...). Meeting a necessary condition never guarantees the result.
  68. (a) "If you passed, then you scored at least 60." (Required = necessary.)
      (b) Not necessarily! 62 satisfies the requirement, but the rule never said 60 is ENOUGH —
      maybe there are other requirements (projects, attendance). Necessary ≠ sufficient.
  69. "Divisible by 12" is SUFFICIENT for "divisible by 3" — it guarantees it (12 = 3 · 4).
      "Divisible by 3" is NECESSARY for "divisible by 12" — you can't have 12 without 3 —
      but NOT sufficient: 9 is divisible by 3 and not by 12.
  70. Translate: "x² = y² only if x = y" means "if x² = y², then x = y."
      FALSE — counterexample x = 3, y = −3: IF holds (3² = 9 = (−3)² ✓), THEN fails (3 ≠ −3).
      Squaring erases the sign, so equal squares don't mean equal bases.

  71. VALID — circle in circle in circle: multiples of 20 ⊂ multiples of 10 ⊂ multiples of 5.
      No escape. (Spot check: 40 → multiple of 20, of 10, of 5 ✓.)
  72. It does NOT FOLLOW — both circles sit inside "even," but two circles inside the same
      circle can float apart; the facts never say they touch. (The conclusion happens to be
      TRUE in arithmetic — 30! — but that's extra knowledge. TRUE ≠ FOLLOWS.)
  73. NOT VALID — the two overlaps with "prime" can live in different regions. In fact the
      conclusion is FALSE (no number is both even and odd), which proves the pattern broken:
      a pattern that can produce false conclusions from true facts is never valid.
  74. VALID — deny the THEN wearing circle clothes: multiples of 8 live inside the even circle;
      27 sits outside "even," so it's certainly outside the smaller circle "multiples of 8."

  75. VALID — affirming the IF (modus ponens). 8 = 8 triggers the promise: 8² = 64 guaranteed.
  76. FAKE — affirming the THEN. x = −8 also gives x² = 64. The sprinkler of algebra: the negative root.
  77. VALID — denying the THEN (modus tollens — the contrapositive speaking).
  78. FAKE — denying the IF. Same witness exposes it: x = −8 is ≠ 8, yet x² = 64.

  79. Witness x = 4: 5(4) + 1 = 20 + 1 = 21 ✓. ONE witness is a complete proof of ∃.
  80. TRUE — defend by cases, covering every real number:
      x > 0 → x² = positive × positive = positive > 0 ✓.
      x = 0 → x² = 0 ✓ (≥ allows equal).
      x < 0 → x² = negative × negative = positive > 0 ✓.
      All three cases end ≥ 0, and the cases cover everything — so ∀ holds. No counterexample can exist.
  81. FALSE — kill ∀ with ONE counterexample: x = 1 gives 1² = 1, and 1 > 1 is false.
      (x = ½ also kills it: ¼ > ½ is false. Fractions and boundaries are the assassins.)
  82. x² = x → x² − x = 0 (subtract x from both sides — reversible) → x(x − 1) = 0 (factor out x)
      → x = 0 OR x = 1 (zero-product property). Both witnesses: 0² = 0 ✓ and 1² = 1 ✓.

  83. Add the equations: (x + y) + (x − y) = 14 + 6 → 2x = 20 (the y's cancel — the point
      of elimination) → x = 10 (divide by 2). Substitute: 10 + y = 14 → y = 4.
      CHECK BOTH: 10 + 4 = 14 ✓ and 10 − 4 = 6 ✓. Truth set: the pair (10, 4).
  84. Substitute y = 2x into the second: x + 2x = 12 → 3x = 12 (combine like terms) → x = 4
      (divide by 3) → y = 2(4) = 8.
      CHECK BOTH: y = 2x → 8 = 8 ✓; x + y = 4 + 8 = 12 ✓. Truth set: (4, 8).
  85. Substitute x = y + 2 into the first: 2(y + 2) + 3y = 24 → 2y + 4 + 3y = 24 (distribute)
      → 5y + 4 = 24 (combine) → 5y = 20 (subtract 4) → y = 4 (divide by 5) → x = 4 + 2 = 6.
      CHECK BOTH: 2(6) + 3(4) = 12 + 12 = 24 ✓; 6 = 4 + 2 ✓. Truth set: (6, 4).

Challenge

  86. The extraneous hunter.
        √(x + 12) = x
        x + 12 = x²            square both sides — one-way move; the truth set may have grown
        0 = x² − x − 12        subtract x and 12 from both sides — reversible
        0 = (x − 4)(x + 3)     factor: two numbers with product −12 and sum −1 → −4 and +3
        x = 4 OR x = −3        zero-product property: a product is 0 only if a factor is 0
        Factor check: (x − 4)(x + 3) = x² + 3x − 4x − 12 = x² − x − 12 ✓
        MANDATORY checks — we squared, so both candidates are suspects:
        x = 4:   √(4 + 12) = √16 = 4.  Equal to x? 4 = 4 ✓ KEEP.
        x = −3:  √(−3 + 12) = √9 = 3.  Equal to x? 3 ≠ −3 ✗ EXTRANEOUS — reject.
        Truth set: {4}.
        Where did −3 come from? Squaring merged our equation with its evil twin √(x + 12) = −x
        (both square to x + 12 = x²), and −3 solves the TWIN: √9 = 3 = −(−3) ✓. The squared
        equation's truth set is the UNION of both equations' truth sets — the check evicts the
        twin's member.

  87. The if-then islander.
        SUPPOSE Ava is a knave → her if-then must be FALSE → the promise table says a broken
        promise needs IF true AND THEN false → the IF part "I am a knight" would have to be TRUE
        → but she's a knave → the IF is false → a false IF makes the if-then automatically TRUE
        (untested promise!) → her statement CANNOT be false → a knave can't say it. Contradiction!
        So Ava is a KNIGHT → her statement is TRUE → its IF part is true (she IS a knight)
        → affirming the IF forces the THEN (modus ponens): Bo is a KNIGHT.
        CHECK: Ava knight, statement "true → true" = true ✓. Bo knight, silent ✓.
        Solution: BOTH are knights. (The promise table itself did the detective work.)

  88. Three islanders.
        SUPPOSE Cy is a knight → "we are all knaves" is true → Cy himself is a knave. Contradiction!
        So Cy is a KNAVE → his statement is FALSE → NOT all three are knaves → at least one
        islander is a knight.
        Bo says "Cy is a knight" — but we just proved Cy is a knave → Bo's statement is FALSE
        → Bo is a KNAVE.
        Ava says "at least one of us is a knave" — Bo and Cy are both knaves, so that's TRUE
        → Ava is a KNIGHT.
        CHECK all three: Ava (knight) told the truth ✓ — knaves exist (two of them).
        Bo (knave) said "Cy is a knight" — false ✓. Cy (knave) said "all knaves" — false ✓
        since Ava is a knight.
        Solution: Ava knight, Bo knave, Cy knave.

  89. Sample: claim "For all x, x² ≥ x." It sounds believable — 2² = 4 ≥ 2 ✓, 10² = 100 ≥ 10 ✓,
      even (−3)² = 9 ≥ −3 ✓. Then the assassin: x = ½ → (½)² = ¼, and ¼ ≥ ½ is FALSE. Claim dead.
      Another good one: "For all x, x² > 0" — killed by x = 0, since 0² = 0 is not > 0.
      Your claim may differ; the test is: your counterexample satisfies the FOR-ALL membership
      but breaks the rule.

  90. (a) x² = 36 — truth set {6, −6}, since 6² = 36 and (−6)² = 36 (squaring forgets the sign).
      (b) 2x = 12 — dividing by 2 is reversible, so only x = 6 survives: truth set {6}.
      Also correct: (x − 6)² = 0 — a square equals 0 only when its base is 0, so x − 6 = 0
      and x = 6 alone.

  91. Mini-proof.
        Let the even number be 2m and the odd number be 2n + 1.   (definitions of even and odd)
        Sum = 2m + (2n + 1)
            = 2m + 2n + 1          order of addition never matters
            = 2(m + n) + 1         factor out the 2 — the distributive law read backwards
        m + n is a whole number — whole numbers are closed under addition.
        So the sum is 2 × (a whole number) + 1 — exactly the odd shape, with k = m + n.
        By definition, the sum is ODD. ∎
        Number check: 4 + 7 = 11 ✓.

  92. The vanishing solution.
        (a) The lost solution is x = 0: 0² = 0 and 5·0 = 0 — equal ✓.
        (b) Dividing by x is reversible ONLY when x ≠ 0. Here x = 0 is a genuine solution,
            and dividing by 0 is undefined — the step silently throws that branch away.
            (Lesson 4's assassin 3 in reverse: multiplying by 0 erases information;
            dividing by 0 isn't even legal.)
        (c) Correct solve: x² = 5x → x² − 5x = 0 (subtract 5x — reversible) → x(x − 5) = 0
            (factor out x) → x = 0 OR x = 5 (zero-product property — an OR, both members!).
            CHECK: 0² = 0 = 5·0 ✓; 5² = 25 = 5·5 ✓. Truth set {0, 5}.

  93. Sample puzzle: Ava says "Bo is a knave." Bo says "We are both knaves."
        Solve: SUPPOSE Bo is a knight → his statement is true → both are knaves → but he's
        a knight! Contradiction. So Bo is a KNAVE → his statement is false → they are NOT both
        knaves → Ava must be a knight (Bo isn't one) → Ava's statement "Bo is a knave" is TRUE ✓.
        The other supposition: Ava knave → "Bo is a knave" would be false → Bo knight — but we
        just proved Bo can't be a knight. Dead too.
        CHECK: Ava (knight) truth ✓; Bo (knave) said "both knaves" — false since Ava is a
        knight ✓. Unique solution: Ava knight, Bo knave.
        Your puzzle may look different — the test is: three of the four type-combos explode,
        and only knight-Ava plus knave-Bo survives.

  94. Sample: "If x² + 1 = 0, then x = 7."
        Why the IF can never happen: x² ≥ 0 for every real x (problem 80), so x² + 1 ≥ 1 —
        it can never reach 0.
        Why it counts as TRUE: a promise breaks ONLY when the IF is true and the THEN is false
        (the second row of the promise table). An IF that never happens means the promise is
        never tested — and an untestable promise is unbreakable, so logicians count it as kept.
        Any always-false hypothesis works: "If x = x + 1, then ..." is another good one.

  95. (a) Divisible by 12: it GUARANTEES divisible by 6 (12 = 6 · 2), but isn't necessary —
      6, 18, and 30 are divisible by 6 and not by 12. (Divisible by 18, 24, 36 also work.)
      (b) Divisible by 12: you cannot be divisible by 12 without being divisible by 6,
      so "divisible by 6" is NECESSARY for "divisible by 12." (Also fine: divisible by 18,
      24, 30, 60 — any multiple of 6 in the requirement.)

  96. Sample puzzle: Ava says "We are all knaves." Bo says "At least one of us is a knight."
      Cy says "Bo is a knave."
        Solve: SUPPOSE Ava is a knight → "all knaves" is true → she's a knave. Contradiction!
        So Ava is a KNAVE → her statement is false → at least one islander IS a knight.
        SUPPOSE Bo is a knave → his statement "at least one knight" is false → NOBODY is a
        knight → all three are knaves → but then Ava's "all knaves" would be TRUE, making her
        a knight. Contradiction!
        So Bo is a KNIGHT — and his statement is true: he himself is the one knight ✓.
        Cy says "Bo is a knave" — Bo is a knight, so the statement is FALSE → Cy is a KNAVE ✓.
        Exactly one knight: Bo ✓. Every other case exploded, so the solution is unique.
        Your puzzle may differ — the test: exactly one case survives suppose-and-check,
        and it contains exactly one knight.

  97. The backwards promise machine.
        (a) Original: flip AND deny the contrapositive to reverse it —
            "If x is divisible by 6, then x is even." (TRUE: 6 = 2 · 3, so multiples of 6
            carry a factor of 2.)
        (b) Converse: "If x is even, then x is divisible by 6."
        (c) FALSE — kill it with one counterexample: x = 4 is even ✓ (satisfies the converse's
            IF) but 4 is not divisible by 6 ✗ (breaks the THEN). Also correct: 2, 8, 10, 14...

  98. The OR truth set.
        (a) x = 3: left side 3² = 9; right side 7(3) − 12 = 21 − 12 = 9. 9 = 9 ✓ — 3 really works.
        (b) The classmate found ONE member of the truth set and reported it as THE answer.
            A quadratic's truth set is an OR with (usually) two members — reporting half an OR
            is like answering "3" to "what numbers are less than 5": incomplete is wrong.
        (c) x² = 7x − 12 → x² − 7x + 12 = 0 (subtract 7x, add 12 — reversible)
            → (x − 3)(x − 4) = 0 (two numbers with product 12 and sum −7: −3 and −4)
            → x = 3 OR x = 4 (zero-product property).
            Factor check: (x − 3)(x − 4) = x² − 4x − 3x + 12 = x² − 7x + 12 ✓
            CHECK x = 4: 4² = 16 and 7(4) − 12 = 28 − 12 = 16 ✓.
            Complete truth set: x = 3 OR x = 4 — the set {3, 4}.

  99. Sample: promise "If x = 8, then 3x = 24."
        Direction 1 (→): x = 8 → 3x = 3 · 8 = 24 ✓ TRUE.
        Direction 2 (←, the converse "if 3x = 24, then x = 8"): divide both sides by 3 —
        reversible because 3 ≠ 0 → x = 8 ✓ TRUE.
        Both directions hold → biconditional:  x = 8 ↔ 3x = 24.
        Any promise welded out of a reversible step works the same way:
        "x + 5 = 12 ↔ x = 7" or "x/2 = 10 ↔ x = 20." The superpower is noticing WHEN
        a converse is guaranteed: exactly when every step is two-way.

  100. The grand finale.
        SUPPOSE Ava is a knight → her statement is true → Bo is a knave → Bo's statement
        "Ava and Cy are the same type" is FALSE → Ava and Cy are DIFFERENT types → Cy is a
        knave (since Ava is a knight) → Cy's statement "Ava is a knight" must be FALSE →
        but Ava IS a knight, so Cy's statement is TRUE — a knave telling the truth.
        Contradiction! The first supposition is dead.
        So Ava is a KNAVE → her statement "Bo is a knave" is false → Bo is a KNIGHT →
        Bo's statement is true → Ava and Cy ARE the same type → Cy is a knave (matching Ava)
        → Cy's statement "Ava is a knight" is FALSE ✓ — consistent, since Ava really is a knave.
        CHECK every islander: Ava (knave) said "Bo is a knave" — false, Bo is a knight ✓ lying.
        Bo (knight) said "Ava and Cy same type" — both knaves ✓ true. Cy (knave) said
        "Ava is a knight" — false ✓ lying.
        One supposition exploded and the other passed every check — the ONLY possibility:
        Ava knave, Bo knight, Cy knave.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems — especially the extraneous-solution hunts and the puzzle-design challenges — you're doing logic at a level most students don't reach for years. You can flip any claim correctly, kill a bad promise with one well-aimed number, prove a for-all claim with letters (even through the contrapositive door), explain exactly which algebra moves are two-way doors and which are one-way traps, and walk onto Smullyan's island without fear. The next time someone says "that doesn't follow!" — you'll be able to prove whether it does. Great work!
