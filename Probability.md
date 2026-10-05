Probability — A Complete Lesson (Honors Edition)
════════════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        P(event) = number of favorable outcomes / total number of possible outcomes
        P(not A) = 1 − P(A)
        P(A or B) = P(A) + P(B) − P(A and B together)
        P(A and then B) = P(A) × P(B after A)

Those four lines are the heart of probability — the math of chance — and they are the stars of this lesson. The first one you may have seen before. The other three are where it gets interesting: they let you combine probabilities by adding, subtracting, and multiplying fractions. And in this honors edition, they do one more thing: they turn into EQUATIONS. A probability problem you can't solve forward, you solve backward — with x, with variables on both sides, with inequalities, with powers like (1/2)ⁿ, and even with one quadratic that peeks in at the end.

Why do people care? Because probability is everywhere: weather forecasts, board games, card games, video game drop rates, medical studies, sports predictions. And once you can combine probabilities, you can answer questions that sound impossibly hard — like "what's the chance of at least one six in four rolls?" or "is this carnival game rigged?" — in about ten seconds, and then PROVE your answer.

A fair warning: this lesson goes further than most first probability courses. You'll meet dependent events (drawing without putting it back), conditional probability, expected value, and functions like f(n) = 1 − (3/4)ⁿ. Hard just means "takes more than one step" — and we will take every single step together, with the reason for each.

In this lesson, you will:

  1. Learn what probability is — the inequality 0 ≤ P(A) ≤ 1, and how to compare any two probabilities
  2. Learn the probability formula — forward, and BACKWARD as an equation to solve
  3. Learn to count every outcome — the counting principle, factorials, all 36 two-dice outcomes, and a deck of cards
  4. Learn the "not" rule — and how complements turn into algebra like 3x + 5x = 1
  5. Learn the "or" rule — the overlap trap, and how to solve backward for a missing piece
  6. Learn the "and" rule — independent events, DEPENDENT events, and powers like (1/2)ⁿ
  7. Learn what probability really means — expected counts, expected value, and the math of fair games
  8. Learn the common mistakes so you never make them
  9. Practice with 100 problems at the end — including design-your-own-game challenges with more than one right answer!

How to use this lesson: read the sections in order. Each section starts with the key idea you'll learn in it. Take your time, and try every "Your Turn" box with a pencil and paper. Show your steps, simplify every fraction, and never trust your first answer until you've checked it. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: What Is Probability?
─────────────────────────────────────────────

📌 Key idea of this section:

        Every probability obeys the inequality  0 ≤ P(A) ≤ 1.
        The same probability can wear three outfits: fraction, decimal, percent.
        To compare two probabilities: common denominators — or cross-multiply.

Some things are impossible — like rolling a 9 on a regular die. Some things are certain — like rolling a number from 1 to 6. Probability gives every "maybe" in between a number. In the language of inequalities, EVERY probability P(A) obeys:

        0 ≤ P(A) ≤ 1

  · P(A) = 0: impossible. It will never happen.
  · P(A) = 1: certain. It will definitely happen.
  · P(A) = ½: a perfect 50-50, like a fair coin flip.
  · Small fractions (like 1/6): unlikely, but possible.
  · Big fractions (like 5/6): likely, but not guaranteed.

Read that inequality out loud: "P of A is greater than or equal to 0 and less than or equal to 1." It's not just decoration — it's a built-in answer checker. If you ever finish a problem and get P = 5/3 or P = −0.2, the math is telling you to go back: no real probability escapes [0, 1]. That's Mistake 6 in Lesson 8.

Three outfits — fraction, decimal, percent:

        1/2 = 0.5 = 50%        3/4 = 0.75 = 75%        1/6 ≈ 0.167 ≈ 16.7%

In this lesson we'll mostly use fractions, because they're exact — 1/6 is exact, while 16.7% is a rounded-off approximation (a small lie, but still). To turn a fraction into a percent, scale it to a denominator of 100 when that's friendly:

        3/4 = 75/100 = 75%         2/5 = 40/100 = 40%         7/10 = 70/100 = 70%

Comparing probabilities. Which is more likely, an event with P = 1/3 or one with P = 2/5? You can't tell by staring. Two methods — learn both.

Method 1 — common denominators. The least common denominator of 3 and 5 is 15:

        1/3 = 5/15        2/5 = 6/15        5/15 < 6/15, so 1/3 < 2/5 ✅

Method 2 — cross-multiplication. To compare a/b with c/d (positive denominators), compare a × d with c × b:

        Compare 1/3 and 2/5:
        1 × 5 = 5         2 × 3 = 6         5 < 6, so 1/3 < 2/5 ✅

Why does cross-multiplication work? Starting from a/b ? c/d, multiply both sides by b × d — a POSITIVE number, so the inequality keeps its direction. The left side becomes a × d (the b cancels: a/b × b × d = a × d), and the right side becomes c × b. Same comparison, no fractions. Two methods, one answer — pick whichever is faster, but know both.

Probabilities can also hide inside algebra. Suppose an experiment has only two outcomes, A and B, and A is twice as likely as B. What are the two probabilities? Nobody tells you a fraction — so name the unknown:

        P(B) = x                name the smaller probability
        P(A) = 2x               "twice as likely" means double
        P(A) + P(B) = 1         every trial is A or B — the chances must total 1
        2x + x = 1              substitute
        3x = 1                  combine like terms
        x = 1/3                 divide both sides by 3

So P(B) = 1/3 and P(A) = 2/3. CHECK: 2/3 + 1/3 = 1 ✓, and 2/3 really is twice 1/3 ✓. You just solved your first probability system — one equation from the story ("twice as likely"), one from the law ("everything totals 1"). That pattern solves half the backward problems in probability.

✏️ Your Turn

(a) Order these probabilities from least to greatest: 1/4, 2/5, 1/3. (Hint: 60 is a friendly common denominator.)
(b) An experiment has only outcomes X and Y, and X is three times as likely as Y. Find both probabilities.

Answers: (a) 1/4 = 15/60, 1/3 = 20/60, 2/5 = 24/60, so 1/4 < 1/3 < 2/5. (b) P(Y) = x, P(X) = 3x; then 3x + x = 1 → 4x = 1 → x = 1/4. So P(Y) = 1/4 and P(X) = 3/4. CHECK: 3/4 + 1/4 = 1 ✓.


─────────────────────────────────────────────
Lesson 2: The Probability Formula — Forward AND Backward
─────────────────────────────────────────────

📌 Formula of this section:

        P(event) = number of favorable outcomes / total number of possible outcomes

An outcome is one possible result. Rolling a die has six outcomes: 1, 2, 3, 4, 5, 6. A favorable outcome means "one you want" — a result that makes your event happen. In plain words, the formula says: what you want, over all that can happen.

One golden rule: the formula only works when every outcome is equally likely — a fair coin, a fair die, a well-shuffled deck. (What if they're not equally likely? That's Mistake 2 in Lesson 8.)

Worked example 1 — forward, with simplifying. A bag holds 5 red, 3 blue, and 4 green marbles. What is P(blue)?

        Total marbles: 5 + 3 + 4 = 12          the bottom is EVERYTHING
        P(blue) = 3/12 = 1/4 ✅                 simplify: divide top and bottom by 3

Always simplify your final fraction. 3/12 and 1/4 are the same probability, but 1/4 is the answer you write down.

Worked example 2 — the sum-to-1 law. A bag holds 6 red, 8 blue, and 6 yellow marbles — 20 total.

        P(red) = 6/20 = 3/10
        P(blue) = 8/20 = 2/5
        P(yellow) = 6/20 = 3/10

Notice something? Add them:

        6/20 + 8/20 + 6/20 = 20/20 = 1 ✅

That's no coincidence: the probabilities of ALL outcomes always add to exactly 1 — because something has to happen, and "something" is 100%. This looks like a cute fact. It's actually the most useful secret in the whole lesson — it powers Lesson 4's shortcut and most of the backward problems.

Worked example 3 — BACKWARD. A bag has 20 marbles, and P(red) = 2/5. How many red marbles r are in the bag?

        r/20 = 2/5            the same formula, run in reverse: favorable over total
        r = 20 × 2/5          multiply both sides by 20 — undo the division
        r = 40/5              multiply: 20 × 2 = 40
        r = 8 ✅               divide: 40 ÷ 5 = 8

        CHECK: 8/20 = 2/5 ✓   (divide top and bottom by 4)

Worked example 4 — backward with the sum-to-1 law. A spinner has exactly three colors, with P(red) = 1/4 and P(blue) = 5/12. What is P(green)?

        P(red) + P(blue) + P(green) = 1        the sum-to-1 law — something must land
        1/4 + 5/12 + P(green) = 1              substitute what we know
        3/12 + 5/12 + P(green) = 1             common denominator 12: 1/4 = 3/12
        8/12 + P(green) = 1                    add the numerators: 3 + 5 = 8
        P(green) = 1 − 8/12                    subtract 8/12 from both sides
        P(green) = 4/12 = 1/3 ✅                simplify

        CHECK: 1/4 + 5/12 + 1/3 = 3/12 + 5/12 + 4/12 = 12/12 = 1 ✓

Notice the shape of those solutions: every backward probability problem is just an equation — and you already know how to solve equations. Probability plus algebra is the whole honors game.

✏️ Your Turn

A bag holds 5 red, 7 blue, and 8 green marbles.
(a) Find P(red) and P(not green). Simplify both!
(b) A different bag has 24 marbles, and P(yellow) = 3/8. How many yellow marbles y are there?

Answers: (a) Total = 5 + 7 + 8 = 20. P(red) = 5/20 = 1/4. P(not green) = 12/20 = 3/5. (b) y/24 = 3/8 → y = 24 × 3/8 (multiply both sides by 24) → y = 72/8 = 9. CHECK: 9/24 = 3/8 ✓.


─────────────────────────────────────────────
Lesson 3: Counting Every Outcome
─────────────────────────────────────────────

📌 Key idea of this section:

        The bottom of the fraction is ALL that can happen — so first you must count.
        Counting principle: multiply the number of choices at each step.
        n! = n × (n − 1) × … × 2 × 1 counts the ways to line up n different things.

The formula is easy. The tricky part is making sure you've counted every outcome. The full list of outcomes has a fancy name — the sample space — but it's just "the list of everything that can happen."

Two coins, counted honestly. Flip two coins. Many people say there are three outcomes: two heads, two tails, or one of each. Wrong! The real sample space:

        Coin 1    Coin 2
        H         H
        H         T
        T         H
        T         T

HT and TH are different — "penny heads, dime tails" is a different result from "penny tails, dime heads." So "one of each" happens 2 ways out of 4:

        P(exactly one head) = 2/4 = 1/2
        P(two heads) = 1/4

Mixed is twice as likely as double heads. That's the kind of thing you can only see once you count honestly.

The counting principle. Listing 36 outcomes by hand is misery, so use the shortcut: multiply the number of choices at each step.

        Two coins: 2 × 2 = 4
        Three coins: 2 × 2 × 2 = 2³ = 8
        n coins: 2ⁿ
        A coin and a die: 2 × 6 = 12
        Two dice: 6 × 6 = 36
        Outfits from 3 shirts, 4 pants, 2 pairs of shoes: 3 × 4 × 2 = 24

Why multiply? Each choice at step 1 can be paired with EACH choice at step 2 — so the step-2 options get copied once for every step-1 option. Repeated copying is multiplication.

Notice the exponent hiding in the coin row: every extra coin doubles the count, so n coins have 2ⁿ outcomes. That lets you solve BACKWARD. How many coins produce 32 outcomes?

        2ⁿ = 32
        2ⁿ = 2 × 2 × 2 × 2 × 2      count the doublings: 2, 4, 8, 16, 32
        2ⁿ = 2⁵
        n = 5 ✅

Factorials: the line-up machine. How many ways can 3 different books line up on a shelf? 3 choices for the first slot; once it's filled, 2 books remain for the second slot; then 1 for the last:

        3 × 2 × 1 = 6 ways

That shrinking product has a name and a symbol — the factorial, written with an exclamation mark:

        3! = 3 × 2 × 1 = 6
        4! = 4 × 3 × 2 × 1 = 24
        5! = 5 × 4 × 3 × 2 × 1 = 120

Factorials grow FAST — 5! is already 120 — because every new item multiplies the count by a bigger number.

A quadratic peeks in. Two fair dice-like objects each have n sides, and together they produce 36 outcomes. How many sides does each have?

        n × n = 36          counting principle: n choices paired with n choices
        n² = 36
        n = 6 or n = −6     BOTH square to 36: 6² = 36 and (−6)² = 36
        n = 6 ✅             a side count must be positive — reject −6

That's your first quadratic equation in the wild: algebra hands you two solutions, and the story keeps only the positive one. Remember that move — the challenge problems use it again.

Two dice: the sum map. Two dice have 36 outcomes, and what usually matters is the sum. Here's the whole map — how many ways each sum can happen:

        Sum:    2   3   4   5   6   7   8   9   10  11  12
        Ways:   1   2   3   4   5   6   5   4   3   2   1

        Check: 1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = 36 ✅

See the pyramid shape? Seven sits on top with 6 ways, so it's the most likely sum: P(7) = 6/36 = 1/6. Learn to REBUILD this map, not memorize it: for each sum s from 2 up to 7, the number of ways is s − 1; from 7 up to 12 it mirrors back down. Sums like 6 and 8 tie at 5 ways each. This map is your best friend for the practice problems.

The deck of cards. One more counting machine: a standard deck has 52 cards — 4 suits (hearts ♥ and diamonds ♦ in red, spades ♠ and clubs ♣ in black), with 13 cards in each suit (ace, 2, 3, …, 10, jack, queen, king). Jacks, queens, and kings are called face cards — 3 per suit, 12 total. The counting principle again: 4 × 13 = 52. Now you can count anything:

        P(heart) = 13/52 = 1/4
        P(ace) = 4/52 = 1/13
        P(face card) = 12/52 = 3/13
        P(ace of spades) = 1/52

✏️ Your Turn

(a) How many ways can two dice make a sum of 5? List them, then write P(sum of 5) as a simplified fraction.
(b) How many ways can 4 different trophies line up on a shelf?
(c) Two fair objects each have n sides, and rolling both gives 64 outcomes. Find n.

Answers: (a) (1,4), (2,3), (3,2), (4,1) — 4 ways. P = 4/36 = 1/9. (b) 4! = 4 × 3 × 2 × 1 = 24. (c) n² = 64 → n = 8 (reject −8, since a side count must be positive).


─────────────────────────────────────────────
Lesson 4: The "Not" Rule — Complements, Algebra, and an Inequality
─────────────────────────────────────────────

📌 Formula of this section:

        P(not A) = 1 − P(A)

Remember Lesson 2's secret: all probabilities together add to 1. So an event either happens or it doesn't, and those two chances must total 1. The event "not A" has a name — the complement of A — and the rule is just the sum-to-1 law wearing a disguise:

        P(A) + P(not A) = 1        →        P(not A) = 1 − P(A)

Worked example 1 — the die.

        P(not a 6) = 1 − 1/6 = 6/6 − 1/6 = 5/6 ✅
        (Write 1 as a matching fraction first — 6/6 — then subtract the numerators.)

Worked example 2 — the weather.

        P(rain) = 30%, so P(no rain) = 100% − 30% = 70% ✅

Worked example 3 — a two-step chain. You flip one coin and roll one die. What's P(NOT getting "heads and a 6")? First you need P(heads and a 6) — that's 1 of the 2 × 6 = 12 outcomes, so 1/12. Then:

        P(not) = 1 − 1/12 = 11/12 ✅

Counting "everything except heads-and-a-6" directly means listing 11 outcomes. The rule did it in one subtraction.

Worked example 4 — the complement as an equation. An event A has P(A) = 3x, and its complement has P(not A) = 5x. Find P(A).

        3x + 5x = 1        the complement law: the two must total 1
        8x = 1             combine like terms
        x = 1/8            divide both sides by 8
        P(A) = 3x = 3 × 1/8 = 3/8 ✅

        CHECK: P(A) + P(not A) = 3/8 + 5/8 = 8/8 = 1 ✓

Worked example 5 — an inequality. A forecast only promises P(rain) ≤ 1/3. What can you conclude about P(no rain)?

        P(no rain) = 1 − P(rain)        the complement rule
        P(rain) ≤ 1/3                    what we know
        1 − P(rain) ≥ 1 − 1/3            subtract from 1 — and the comparison FLIPS
        P(no rain) ≥ 2/3 ✅               simplify: 1 − 1/3 = 3/3 − 1/3 = 2/3

Why does the comparison flip? Subtracting a SMALLER number from 1 leaves MORE. Test it with numbers: if P(rain) = 1/3, then P(no rain) = 2/3. If P(rain) is smaller — say 1/4 — then P(no rain) = 3/4, which is bigger than 2/3. The less rain, the more no-rain: the comparison turns around. (This is the same flip you already know from algebra: multiplying an inequality by a negative reverses it — and "subtract from 1" secretly multiplies by −1 first.)

✏️ Your Turn

(a) If P(A) = 2/9, what is P(not A)?
(b) P(win) = x and P(not win) = 4x. Find P(win).
(c) P(A) = x/12 and P(not A) = 3/4. Find x. (Careful: x itself is a marble count, not a probability — so x CAN be bigger than 1.)

Answers: (a) 1 − 2/9 = 9/9 − 2/9 = 7/9. (b) x + 4x = 1 → 5x = 1 → x = 1/5, so P(win) = 1/5. CHECK: 1/5 + 4/5 = 1 ✓. (c) P(A) = 1 − 3/4 = 1/4, so x/12 = 1/4 → x = 12 × 1/4 = 3. CHECK: 3/12 = 1/4 ✓.


─────────────────────────────────────────────
Lesson 5: The "Or" Rule — Overlaps and Backward Detective Work
─────────────────────────────────────────────

📌 Formulas of this section:

        P(A or B) = P(A) + P(B)                   when A and B CAN'T happen together
        P(A or B) = P(A) + P(B) − P(A and B)      when they CAN

What's P(rolling a 1 or a 2) on a die? You can't roll both at once, so the favorable outcomes just pile up:

        P(1 or 2) = 1/6 + 1/6 = 2/6 = 1/3 ✅

Events that can't happen together are called mutually exclusive — a fancy name for "no overlap." For those, or means add:

        P(heart or club) = 13/52 + 13/52 = 26/52 = 1/2 ✅
        P(jack or queen) = 4/52 + 4/52 = 8/52 = 2/13 ✅

Now the dangerous one: what's P(heart or ace)?

        Careless answer: 13/52 + 4/52 = 17/52 ❌

Here's why that's wrong: the ace of hearts is both a heart and an ace. You counted it twice — once in the 13 hearts, once in the 4 aces. Fix it by subtracting the overlap:

        P(heart or ace) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13 ✅

The test: before you add, always ask — can these two things happen at the same time? If yes, find the overlap and subtract it once (it was counted twice). If no, add away.

One more: P(red card or king)? Red cards: 26. Kings: 4. Overlap: the king of hearts and king of diamonds — 2 cards.

        P(red or king) = 26/52 + 4/52 − 2/52 = 28/52 = 7/13 ✅

Now the honors upgrade — backward detective work. Suppose you know P(A) = 1/3, P(B) = 1/4, and P(A or B) = 1/2. What is the overlap P(A and B)? Name it x and solve.

        P(A or B) = P(A) + P(B) − x        the overlap formula
        1/2 = 1/3 + 1/4 − x                substitute the knowns
        1/2 = 7/12 − x                     add the fractions: 1/3 + 1/4 = 4/12 + 3/12 = 7/12
        1/2 − 7/12 = −x                    subtract 7/12 from both sides
        6/12 − 7/12 = −x                   common denominator 12
        −1/12 = −x                         subtract numerators: 6 − 7 = −1
        x = 1/12 ✅                         multiply both sides by −1: negative × negative = positive

        CHECK: 1/3 + 1/4 − 1/12 = 4/12 + 3/12 − 1/12 = 6/12 = 1/2 ✓

Look what happened halfway through: −x = −1/12 — a negative number, inside a probability problem! Nothing is broken. The negative was just bookkeeping on the way to the true overlap. The FINAL probability must still obey 0 ≤ P ≤ 1 — and 1/12 does.

✏️ Your Turn

(a) Find P(diamond or jack). Watch the overlap!
(b) Detective work: P(A) = 1/2, P(A and B) = 1/10, and P(A or B) = 4/5. Find P(B).

Answers: (a) 13/52 + 4/52 − 1/52 = 16/52 = 4/13. (The jack of diamonds was double-counted.) (b) 4/5 = 1/2 + P(B) − 1/10 → P(B) = 4/5 − 1/2 + 1/10 (subtract 1/2 and add 1/10 on both sides) → P(B) = 8/10 − 5/10 + 1/10 = 4/10 = 2/5. CHECK: 1/2 + 2/5 − 1/10 = 5/10 + 4/10 − 1/10 = 8/10 = 4/5 ✓.


─────────────────────────────────────────────
Lesson 6: The "And" Rule — Independent, Dependent, and the Power of Powers
─────────────────────────────────────────────

📌 Formulas of this section:

        P(A and then B) = P(A) × P(B)              when the events are INDEPENDENT
        P(A and then B) = P(A) × P(B after A)      when DEPENDENT (no replacement!)
        n independent tries, each with probability p:  P(all n succeed) = pⁿ
        P(at least one) = 1 − P(none)

Independent means the first event doesn't change the second — coin flips and dice rolls never remember anything. For those, and means multiply.

Why does multiplying work? Take P(two heads in a row). You already know from the two-coin list: 1/4. Now watch the rule get it instantly:

        P(H and then H) = 1/2 × 1/2 = 1/4 ✅

Half the time you get heads first — and then only half of THOSE times do you get heads again. Half of a half is a fourth. The multiplication is doing the "of."

And it scales, using exponent laws. What's P(five heads in a row)?

        P = 1/2 × 1/2 × 1/2 × 1/2 × 1/2 = (1/2)⁵ = 1/32 ✅

Each factor of 1/2 halves the probability, so the denominator doubles each time: 2, 4, 8, 16, 32. In general (1/2)ⁿ = 1/2ⁿ. WARNING: (1/2)ⁿ is not n/2 — five heads in a row is 1/32, not 5/2 (which is bigger than 1 and therefore impossible anyway). That's Mistake 8.

The honors upgrade: DEPENDENT events. Draw two marbles from a bag with 3 red and 2 blue — WITHOUT putting the first one back. What's P(red and then red)?

        P(first red) = 3/5                            3 red out of 5 marbles
        P(second red AFTER first red) = 2/4 = 1/2     one red is gone: 2 red left out of 4 marbles
        P(red, then red) = 3/5 × 2/4 = 6/20 = 3/10 ✅

"P(B after A)" — the probability of B once A has already happened — is called a conditional probability. Without replacement, the denominator DROPS by 1 (one fewer marble in the bag), and if a red was taken, the red count drops too. With replacement, nothing changes:

        With replacement: P(red, then red) = 3/5 × 3/5 = 9/25 ✅

Which is bigger? Compare with a common denominator of 50:

        3/10 = 15/50        9/25 = 18/50        so without < with

That makes sense: putting the red marble back keeps your red chances high. So the FIRST question in every two-draw problem is: did it go back in the bag?

The killer combo — at least one. What's P(at least one head in 3 flips)? Counting directly is awful: exactly 1 head + exactly 2 heads + exactly 3 heads… Instead, flip it around. The opposite of "at least one head" is "no heads" — and no heads means tails AND tails AND tails:

        P(no heads) = (1/2)³ = 1/8
        P(at least one head) = 1 − 1/8 = 7/8 ✅

The pattern: for "at least one," compute P(none) with multiplication, then subtract from 1. And the combo works for dependent draws too:

        Bag: 3 red, 2 blue. Two draws, NO replacement.
        P(at least one red) = 1 − P(blue, then blue)
                            = 1 − (2/5 × 1/4)
                            = 1 − 2/20
                            = 9/10 ✅

        (Second draw: one blue is gone, so 1 blue remains out of 4 marbles.)

One last upgrade — function notation. "At least one head in n flips" depends on n, so give it a name:

        f(n) = 1 − (1/2)ⁿ

        f(1) = 1 − 1/2 = 1/2
        f(2) = 1 − 1/4 = 3/4
        f(3) = 1 − 1/8 = 7/8
        f(4) = 1 − 1/16 = 15/16

Watch f(n) climb toward 1 as n grows — but never arrive: (1/2)ⁿ shrinks without ever hitting 0, so f(n) gets closer and closer to 1 without touching it. And once probability is a FUNCTION, you can ask inequality questions: for which n is f(n) > 1/2? Read the list: f(1) = 1/2 is NOT greater, f(2) = 3/4 is — so the answer is n ≥ 2. You'll solve one like that, step by step, in the practice set.

✏️ Your Turn

(a) Find P(at least one 6 in two rolls of a die). (Hint: first find P(no sixes) = 5/6 × 5/6.)
(b) A bag has 4 red and 2 green marbles. Two draws, no replacement: find P(red, then red).
(c) For f(n) = 1 − (1/2)ⁿ, compute f(5).

Answers: (a) P(no sixes) = 5/6 × 5/6 = 25/36, so P(at least one) = 1 − 25/36 = 11/36. (b) 4/6 × 3/5 = 12/30 = 2/5. (First draw 4 red of 6; then 3 red of 5 remain.) (c) f(5) = 1 − 1/32 = 31/32.


─────────────────────────────────────────────
Lesson 7: What Probability Really Means — Expected Value
─────────────────────────────────────────────

📌 Key ideas of this section:

        Expected count = number of tries × probability
        Expected value E = add up (each prize × its probability)
        A game is FAIR when E = cost — and you can solve backward for the fair prize.

P(heads) = 1/2, but flip a coin 10 times and you might get 7 heads. Nothing is broken — probability never promised you exactly half of a small batch. It promises the long run. Ten flips could be anything; 100 flips will usually land pretty close to 50 heads. The more tries, the closer reality gets to the fraction. The next flip, though, is never promised — coins have no memory and no plans.

Expected count. If you repeat an experiment n times, with probability p of success each time:

        expected count = n × p

  · Roll a die 60 times: expect 60 × 1/6 = 10 sixes.
  · Spin a spinner with P(red) = 3/8 forty times: expect 40 × 3/8 = 15 reds.
  · Flip two coins 20 times: expect 20 × 1/4 = 5 double-heads.

"Expect" doesn't mean "guaranteed" — it means "the long-run average." Reality wiggles around it, and bigger batches wiggle less (as a fraction of the total).

Expected value: the money version. Different outcomes often pay different prizes, so a plain count isn't enough. Weigh each prize by its probability and add the pieces. The result E is the average win per play in the long run:

        Game: roll a die; win 5 points on a 6, otherwise 0.
        E = 5 × P(6) + 0 × P(not 6)
        E = 5 × 1/6 + 0 × 5/6 = 5/6 ≈ 0.83 points per play

Now say the game costs 1 point to play. You pay 1 and collect 5/6 on average — a bad deal. Over 12 games: expect 12 × 1/6 = 2 wins → 2 × 5 = 10 points won, but 12 paid → about 2 points down in the long run. That's the math behind every carnival game, lottery, and casino on Earth.

(Mathematicians write this recipe with the Greek letter ∑ — sigma — which just means "add them all up": E = ∑ (prize × its probability). Same idea, fancier outfit.)

Worked example — when is a game FAIR? When E equals the cost. Same die game, but the prize is 12 points for a 6:

        E = 12 × 1/6 + 0 × 5/6 = 2 points per play

A cost of exactly 2 points is fair: in the long run nobody gains and nobody loses. Charge more than 2 and the house profits; charge less and YOU profit.

Worked example — two prizes at once. A spinner pays 4 points on red (P = 1/2), 10 points on blue (P = 1/4), and nothing on green (P = 1/4):

        E = 4 × 1/2 + 10 × 1/4 + 0 × 1/4        each prize × its probability, added
        E = 2 + 10/4 + 0                         multiply each piece
        E = 2 + 5/2                              simplify: 10/4 = 5/2
        E = 4/2 + 5/2 = 9/2 = 4.5 ✅              common denominator 2

A fair cost for this game is 4.5 points per play. (Note the check built into the recipe: 1/2 + 1/4 + 1/4 = 1 — the probabilities must total 1, or the spinner is missing a color.)

Worked example — BACKWARD: design the prize. A game has two outcomes, each with probability 1/2: win 2 points, or win p points. The cost is 3 points. What prize p makes the game perfectly fair?

        E = cost                     the fairness equation
        2 × 1/2 + p × 1/2 = 3        the expected value recipe, with unknown p
        1 + p/2 = 3                  simplify: 2 × 1/2 = 1
        p/2 = 2                      subtract 1 from both sides
        p = 4 ✅                      multiply both sides by 2

        CHECK: E = 2 × 1/2 + 4 × 1/2 = 1 + 2 = 3 = cost ✓ — perfectly fair.

✏️ Your Turn

You roll a die 30 times.
(a) About how many 5s do you expect?
(b) A game pays 6 points for rolling a 6, and 3 points for rolling a 5, otherwise 0. Find E.
(c) The game in (b) costs 1 point to play. Good deal or bad deal? Prove it.

Answers: (a) 30 × 1/6 = 5 fives. (b) E = 6 × 1/6 + 3 × 1/6 + 0 × 4/6 = 1 + 1/2 + 0 = 3/2 = 1.5. (c) E = 3/2 > 1 = cost — a GOOD deal: you expect to gain 1/2 point per play in the long run.


─────────────────────────────────────────────
Lesson 8: Watch Out! Common Mistakes
─────────────────────────────────────────────

📌 Keep the rules in sight:

        OR means add (subtract the overlap!) · AND means multiply (check replacement!) ·
        NOT means 1 − P(A) · every probability obeys 0 ≤ P ≤ 1

Mistake 1: counting only part of the bottom. A bag has 3 red, 2 blue, 5 green. P(red) = 3/5? ❌ — someone forgot the green marbles! The bottom is everything: 3/10 ✅.

Mistake 2: "two options means 50-50." My lottery ticket either wins or loses, so it's 50%! ❌ Two options are 50-50 only when they're equally likely. The formula demands it — that's the golden rule.

Mistake 3: thinking the coin has a memory. Five tails in a row, so heads is "due"? ❌ Every flip is a fresh 1/2. Flips are independent — the coin doesn't remember, doesn't plan, and doesn't owe you anything.

Mistake 4: adding when you should subtract the overlap. P(heart or ace) = 17/52? ❌ You double-counted the ace of hearts. Always ask: can these happen together? If yes, subtract the overlap: 16/52 = 4/13 ✅.

Mistake 5: adding when you should multiply. P(two heads in a row) = 1/2 + 1/2 = 1? ❌ That would mean it always happens! "And then" chains get multiplied: 1/2 × 1/2 = 1/4 ✅. Adding is for "or" (one experiment, either result). Multiplying is for "and then" (chained experiments, all results needed).

Mistake 6: impossible answers. P(red) = 5/3? P(win) = 120%? P(A) = −1/6? ❌ Every probability obeys 0 ≤ P ≤ 1. If your answer escapes that range, something went wrong in the counting — go back and find it. (A negative number mid-solution, like in Lesson 5's detective work, is fine. A negative FINAL probability is not.)

Mistake 7: forgetting the bag changes. Two draws without replacement from 3 red, 2 blue: P(red, then red) = 3/5 × 3/5 = 9/25? ❌ The second draw has one fewer marble AND one fewer red: 3/5 × 2/4 = 3/10 ✅. First question of every draw problem: did it go back in?

Mistake 8: (1/2)ⁿ ≠ n/2. P(three heads in a row) = 3/2? ❌ — and 3/2 > 1 should set off the Mistake 6 alarm! Powers mean multiply the fraction by ITSELF: (1/2)³ = 1/2 × 1/2 × 1/2 = 1/8 ✅. Each extra event multiplies the probability; it never just adds another 1/2.

Mistake 9: "expected" means "guaranteed." You expected 10 sixes in 60 rolls and got 8 — is the die rigged? ❌ Expected count is a long-run average. Any single batch of 60 rolls will wiggle around 10 — that's normal, not suspicious.


─────────────────────────────────────────────
Lesson 9: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        P(event) = favorable / total            (equally likely outcomes only)
        P(not A) = 1 − P(A)                     (complements total 1)
        P(A or B) = P(A) + P(B) − P(A and B)    (subtract the double-count)
        P(A and then B) = P(A) × P(B after A)   (independent: P(B after A) = P(B))
        P(at least one) = 1 − P(none)
        Expected count = n × p
        Expected value E = ∑ (prize × probability);  fair game: E = cost

The recap:

  · The formula: favorable ÷ total. All outcomes must be equally likely.
  · Comparing: common denominators or cross-multiplication. Never compare fractions with different bottoms.
  · Backward problems: probability questions are equations. Name the unknown, write the equation, solve it step by step.
  · Not: 1 − P(A). Write 1 as a matching fraction first — and remember the comparison flips when you subtract from 1.
  · Or: add. Overlap? Subtract the double-counted part. Missing piece? Solve for it — negatives may visit mid-solution.
  · And then: multiply. Independent events keep their probabilities; without replacement, the denominator drops by 1.
  · Powers: n independent tries → pⁿ. And (1/2)ⁿ = 1/2ⁿ — never n/2.
  · At least one: 1 − P(none), where P(none) is a multiplication.
  · Long run: expected count = n × p. Fair games: expected value = cost. "Expected" ≠ "guaranteed."

The magic sentence:

        Count what you want. Count everything. Divide. Then combine:
        OR means add (subtract the overlap), AND means multiply (ask about replacement),
        NOT means subtract from 1 — and every backward problem is just an equation.

Say it out loud three times. That sentence, plus honest counting, plus the algebra you already know, is 95% of all the probability you'll meet for years.

Probability runs weather forecasts, medical studies, sports analytics, game design, insurance, and every "what are the chances?" question ever asked. And notice what powered this lesson: fraction arithmetic AND algebra side by side. Common denominators, simplifying, cross-multiplication, complements — and then equations, inequalities, powers, and functions riding on top. The skills you drilled are the engine under every one of these rules.

But the biggest lesson isn't the formulas themselves. It's this: math has patterns. Once you learn the pattern, hard problems become easy. "At least one six in four rolls" sounds impossible until you see the pattern: multiply the misses, subtract from 1. "Is this game fair?" sounds like an opinion until you see the pattern: prizes times probabilities, added up, compared to the cost. Now those are ten-second problems. That's the whole lesson.

Time to prove it — 100 problems, including games for you to design. 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        P = favorable / total  ·  0 ≤ P ≤ 1  ·  all outcomes total 1
        NOT: 1 − P  ·  OR: add, subtract overlap  ·  AND: multiply
        Independent vs dependent: did it go back in the bag?
        At least one: 1 − P(none)  ·  (1/2)ⁿ = 1/2ⁿ
        Expected count = n × p  ·  E = ∑ prize × P  ·  fair: E = cost

Grab a pencil and paper. Show your steps, simplify every fraction, and check that your answers stay between 0 and 1. Some problems are open-ended — they have many right answers. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "Is this an OR, an AND, a NOT, the basic formula — or an equation to solve?"


🟢 EASY (Problems 1–48)

Problems 1–10 — the basic formula, with real simplifying. Bag A holds 5 red, 3 blue, 4 green. (6–8 use Bag B; 9–10 use a spinner.)

  1. How many marbles are in Bag A?
  2. P(red) from Bag A
  3. P(blue) from Bag A
  4. P(green) from Bag A
  5. P(not green) from Bag A
  6. Bag B: 6 red, 8 blue, 6 yellow. P(red)
  7. Bag B: P(blue)
  8. Bag B: P(not yellow)
  9. A spinner has 24 equal sections: 6 red, 10 blue, 8 green. P(blue)
  10. Problem 4's answer as a percent: is 33% exact? Explain in one sentence.

Problems 11–18 — which probability is bigger? Show the common denominators (or the cross-multiplication). For 16–17, order all three from least to greatest.

  11. 1/3 or 2/5
  12. 3/4 or 7/10
  13. 5/6 or 4/5
  14. 2/3 or 5/8
  15. 3/7 or 4/9 (cross-multiplication is the fast route here)
  16. Order: 1/2, 1/3, 5/12
  17. Order: 2/5, 1/4, 3/10
  18. Game A: you win with P = 2/6 on a die. Game B: you win with P = 3/8 on a spinner. Which game treats you better?

Problems 19–26 — the counting principle. (25–26 solve backward!)

  19. How many outcomes do two coin flips have?
  20. Three coin flips?
  21. Four coin flips?
  22. A coin flip followed by a die roll?
  23. Two dice?
  24. Outfits from 3 shirts, 4 pairs of pants, 2 pairs of shoes?
  25. How many ways can 3 different books line up on a shelf? (Use the factorial idea.)
  26. How many coins does it take to have 32 outcomes? Solve 2ⁿ = 32.

Problems 27–34 — the OR rule, no overlaps. Add and simplify.

  27. P(rolling a 1 or a 2) on a die
  28. P(rolling an even number or a 5) on a die
  29. P(rolling a 1 or a multiple of 3) on a die
  30. P(heart or club) from a deck
  31. P(jack or queen) from a deck
  32. A spinner has 8 equal sections: 3 red, 2 blue, 3 green. P(red or blue)
  33. Same spinner: P(blue or green)
  34. Same spinner: P(red or blue or green) — explain your answer in one sentence!

Problems 35–42 — the AND rule, independent events. Multiply, then simplify.

  35. P(heads, then heads)
  36. P(heads, then tails)
  37. P(6, then 6) on two rolls of a die
  38. P(6 on the first roll, then even on the second)
  39. P(even, then even) on two rolls
  40. P(heads on a coin, and a 5 on a die)
  41. P(three heads in a row) — write it as a power first!
  42. P(four heads in a row)

Problems 43–48 — the NOT rule. Show the subtraction; write 1 as a matching fraction.

  43. P(A) = 2/5. P(not A)?
  44. P(rain) = 7/10. P(no rain)?
  45. P(A) = 5/12. P(not A)?
  46. P(A) = 9/20. P(not A)?
  47. P(win) = 0.15. P(not win), as a percent?
  48. P(jackpot) = 1/100. P(no jackpot)?


🟡 INTERMEDIATE (Problems 49–84)

Problems 49–54 — two dice! Use the sum map from Lesson 3 — or rebuild it yourself for practice.

  49. How many total outcomes do two dice have?
  50. P(sum of 7)
  51. P(sum of 11)
  52. P(sum of 6 or 8) — OR rule on the two dice!
  53. P(sum of 2 or 12)
  54. P(sum GREATER than 9). (Hint: which sums qualify? Add their ways.)

Problems 55–60 — the formula, BACKWARD. Solve the equation and check your answer.

  55. A bag has 20 marbles and P(red) = 2/5. How many red marbles r? Solve r/20 = 2/5.
  56. P(green) = 2/7 and exactly 14 marbles are green. How many marbles t in total? Solve 14/t = 2/7.
  57. A spinner has only red, blue, green, with P(red) = 1/4 and P(blue) = 5/12. Find P(green).
  58. P(yellow) = 3/8 in a 24-marble bag. How many yellow marbles x? Solve x/24 = 3/8.
  59. Design a bag where P(red) = 1/2 and P(blue) = 1/3. What's the SMALLEST bag that works — and what color fills the rest?
  60. A bag has only red and blue marbles, and P(red) = 2/9. What's the smallest possible number of marbles?

Problems 61–66 — complement algebra. The probabilities total 1 — turn that into an equation.

  61. P(A) = 3x and P(not A) = 5x. Find x, then P(A).
  62. A game has P(win) = 2x, P(tie) = x, P(lose) = 3x. Find x, then P(win).
  63. P(A) = x + 1/8 and P(not A) = 5/8. Find x. (First find P(A), then subtract.)
  64. P(B) = x/2 and P(not B) = 1/4. Find x. (Warning: x is not itself a probability — it may be bigger than 1!)
  65. Which is bigger, P(A) or P(not A), if P(A) = 1/3? What if P(A) = 5/8? What's the boundary value of P(A) where the two tie?
  66. A forecast says P(rain) ≤ 1/3. What does that tell you about P(no rain) — and why does the comparison flip?

Problems 67–72 — the overlap trap, forward AND backward.

  67. P(heart or ace)
  68. P(diamond or face card)
  69. P(red card or king)
  70. P(even or greater than 3) on a die. (List both groups, find the overlap, use the formula — then check by listing the final group!)
  71. Detective: P(A) = 1/3, P(B) = 1/4, P(A or B) = 1/2. Find P(A and B). Show every algebra step.
  72. Detective: P(A) = 1/2, P(A and B) = 1/10, P(A or B) = 4/5. Find P(B).

Problems 73–78 — DEPENDENT events: no replacement! Ask "what's left in the bag?" before the second fraction.

  73. A bag has 3 red and 2 blue. Two draws, NO replacement: P(red, then red)?
  74. Same bag, but WITH replacement: P(red, then red)? Which is bigger — and why does that make sense?
  75. Same bag, no replacement: P(red, then blue)?
  76. A mini-deck has 8 cards: 4 hearts and 4 spades. Draw 2 cards without replacement. P(both hearts)?
  77. In problem 76, explain in one sentence why the SECOND fraction has denominator 7.
  78. Bag from problem 73 (3 red, 2 blue), two draws, no replacement: P(at least one red)? (Use 1 − P(no reds).)

Problems 79–84 — "at least one" and probability as a FUNCTION.

  79. P(at least one head in 2 flips)
  80. P(at least one 6 in 2 rolls of a die)
  81. Let f(n) = 1 − (1/2)ⁿ = P(at least one head in n flips). Compute f(3) and f(5).
  82. Let f(n) = 1 − (3/4)ⁿ = P(at least one win in n spins), where P(win) = 1/4 per spin. Find the smallest n with f(n) > 1/2. Compute f(1), f(2), f(3) and stop the moment you cross 1/2!
  83. Let g(n) = 1 − (2/3)ⁿ. Find the smallest n with g(n) > 1/2.
  84. P(at least one 6 in 3 rolls of a die). (Cube the miss: (5/6)³.)


🔴 CHALLENGE (Problems 85–100)

  85. Three coins. List all 8 outcomes (HHH, HHT, …). Then find P(exactly 2 heads).
  86. Two ways to one answer. Find P(at least one head in 3 flips) twice: once by adding P(exactly 1) + P(exactly 2) + P(exactly 3) from your list in #85, and once with the 1 − P(none) shortcut. Do they match? Should they?
  87. Craps opener. In the dice game craps, rolling a sum of 7 or 11 on the first roll wins immediately. What's P(7 or 11)?
  88. Craps, the dark side. Rolling a sum of 2, 3, or 12 on the first roll LOSES immediately. What's P(lose immediately)?
  89. A system of two equations. A bag has only red and blue marbles, 24 in all, and there are twice as many red as blue. Write the two equations (r + b = 24 and r = 2b), solve the system, then give P(red).
  90. The fix. A bag has 9 red and 15 blue marbles (24 total). How many red marbles x must you ADD to make P(red) = 1/2? Set up (9 + x)/(24 + x) = 1/2 and solve.
  91. The harder fix. A bag has 6 red and 14 blue marbles (20 total). How many red marbles x must you add to make P(red) = 2/3? Set up (6 + x)/(20 + x) = 2/3, solve, and check.
  92. Expected value. A game costs 1 point to play. You roll a die: win 6 points on a 6, win 3 points on a 5, otherwise nothing. Compute E. Should you play? How much do you expect to gain per game in the long run?
  93. Backward prize design. A game costs 2 points to play. You roll a die and win p points for a 6, nothing otherwise. What prize p makes the game perfectly fair?
  94. The inequality. A 20-marble bag has r red marbles (the rest blue). You want P(red) ≥ 2/5. Set up the inequality and find the smallest whole number r that works.
  95. The quadratic peek. A bag has 6 marbles, r of them red. Drawing 2 without replacement, P(both red) = 2/3. Show that r(r − 1) = 20, rewrite it as r² − r − 20 = 0, factor it into (r − 5)(r + 4) = 0, and explain which solution the bag keeps — and why.
  96. Design a fair spinner. Design a spinner with at least two colors where two players each have exactly a 1/2 chance to win — but the colors do NOT split the spinner into two equal halves. Describe your sections and prove each player has 1/2.
  97. The grand design. Invent a two-dice game where P(you win) = P(friend wins) = 1/3 exactly, and the remaining 1/3 is a tie. Use the sum map: the sums' ways are 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 — group them into three piles of 12 ways each. There is more than one solution; find one and prove it works!
  98. Explain why. For independent events, why is P(A and B) never bigger than P(A)? Use the formula and the inequality 0 ≤ P(B) ≤ 1 in your explanation.
  99. Carnival showdown. Game A costs 1 point: flip a coin, win 4 points on heads. Game B costs 1 point: roll a die, win 5 points on a 6. Compute both expected values, decide which game (if either) is worth playing, and state your long-run gain or loss per play for each.
  100. The capstone. (a) What's the smallest bag with P(red) = 1/3? (b) From your bag, draw twice WITH replacement: P(both red)? (c) Now WITHOUT replacement: P(both red)? Explain the surprise. (d) Redesign: find the smallest bag where P(red) = 1/2 AND P(both red, no replacement) = 1/6. Set up the equations and solve — you'll divide both sides by r along the way.


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! The key shows the important steps, not just final answers — if you got one wrong, find the exact step where your work splits from mine. For open-ended problems, your answer may look different and still be right; the key shows one good answer and the pattern to check yours against.

Easy

  1. 5 + 3 + 4 = 12 marbles. (The bottom of every fraction in 2–5.)
  2. P(red) = 5/12. (Already simplified — 5 and 12 share no factor.)
  3. P(blue) = 3/12 = 1/4. (Divide top and bottom by 3.)
  4. P(green) = 4/12 = 1/3. (Divide by 4.)
  5. P(not green) = 8/12 = 2/3 — or by the complement rule: 1 − 1/3 = 2/3. Two routes, one answer.
  6. Bag B total: 6 + 8 + 6 = 20. P(red) = 6/20 = 3/10.
  7. P(blue) = 8/20 = 2/5.
  8. P(not yellow) = 14/20 = 7/10. (20 − 6 = 14 non-yellow.)
  9. P(blue) = 10/24 = 5/12.
  10. 1/3 ≈ 33.3% — and no, 33% is NOT exact: 33/100 ≠ 1/3. The exact percent is 33⅓%;
      the decimal 0.333… repeats forever, so any cut-off decimal is a small lie.

  11. 2/5 is bigger: 1/3 = 5/15 < 2/5 = 6/15.
  12. 3/4 is bigger: 3/4 = 15/20 > 7/10 = 14/20.
  13. 5/6 is bigger: 5/6 = 25/30 > 4/5 = 24/30.
  14. 2/3 is bigger: 2/3 = 16/24 > 5/8 = 15/24.
  15. 4/9 is bigger. Cross-multiply: 3 × 9 = 27 vs 4 × 7 = 28, and 27 < 28.
      (Check by common denominator: 3/7 = 27/63 < 4/9 = 28/63 — same verdict.)
  16. Twelfths: 1/2 = 6/12, 1/3 = 4/12, 5/12 stays. So 1/3 < 5/12 < 1/2.
  17. Twentieths: 2/5 = 8/20, 1/4 = 5/20, 3/10 = 6/20. So 1/4 < 3/10 < 2/5.
  18. Game B. Compare 2/6 and 3/8 over 24: 2/6 = 8/24 < 3/8 = 9/24. B wins by 1/24.

  19. 2 × 2 = 4.
  20. 2 × 2 × 2 = 2³ = 8.
  21. 2⁴ = 16.
  22. 2 × 6 = 12.
  23. 6 × 6 = 36.
  24. 3 × 4 × 2 = 24 outfits.
  25. 3! = 3 × 2 × 1 = 6. (3 choices for slot 1, then 2 remain, then 1.)
  26. n = 5, because 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Count the doublings: 2, 4, 8, 16, 32.

  27. 1/6 + 1/6 = 2/6 = 1/3.
  28. Evens are 2, 4, 6 — three of them — and 5 is one more: 3/6 + 1/6 = 4/6 = 2/3.
  29. Multiples of 3 on a die: 3 and 6. So 1/6 + 2/6 = 3/6 = 1/2.
  30. 13/52 + 13/52 = 26/52 = 1/2.
  31. 4/52 + 4/52 = 8/52 = 2/13.
  32. 3/8 + 2/8 = 5/8.
  33. 2/8 + 3/8 = 5/8.
  34. 3/8 + 2/8 + 3/8 = 8/8 = 1 — the three colors cover every section, so SOME color
      must land. A certain event always has probability 1.

  35. 1/2 × 1/2 = 1/4.
  36. 1/2 × 1/2 = 1/4. (Same as #35 — order doesn't matter to the product.)
  37. 1/6 × 1/6 = 1/36.
  38. 1/6 × 3/6 = 1/6 × 1/2 = 1/12.
  39. 3/6 × 3/6 = 1/2 × 1/2 = 1/4.
  40. 1/2 × 1/6 = 1/12. (Matches the counting principle: 2 × 6 = 12 outcomes, one winner.)
  41. (1/2)³ = 1/2 × 1/2 × 1/2 = 1/8.
  42. (1/2)⁴ = 1/16. (The denominator doubles with each flip: 2, 4, 8, 16.)

  43. 1 − 2/5 = 5/5 − 2/5 = 3/5.
  44. 1 − 7/10 = 10/10 − 7/10 = 3/10.
  45. 1 − 5/12 = 12/12 − 5/12 = 7/12.
  46. 1 − 9/20 = 20/20 − 9/20 = 11/20.
  47. 100% − 15% = 85%.
  48. 1 − 1/100 = 100/100 − 1/100 = 99/100.


Intermediate

  49. 6 × 6 = 36 outcomes.
  50. Six ways make 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). P = 6/36 = 1/6.
  51. Two ways: (5,6), (6,5). P = 2/36 = 1/18.
  52. Sum 6 has 5 ways, sum 8 has 5 ways, and they can't happen at once (no overlap):
      5/36 + 5/36 = 10/36 = 5/18.
  53. 1 way + 1 way = 2 ways: 2/36 = 1/18.
  54. Sums greater than 9 are 10, 11, 12 — with 3, 2, 1 ways: 3/36 + 2/36 + 1/36 = 6/36 = 1/6.

  55. r/20 = 2/5 → r = 20 × 2/5 (multiply both sides by 20) → r = 40/5 = 8 red marbles.
      CHECK: 8/20 = 2/5 ✓.
  56. 14/t = 2/7 → 14 × 7 = 2 × t (cross-multiply) → 98 = 2t → t = 49 marbles.
      CHECK: 14/49 = 2/7 ✓ (divide top and bottom by 7).
  57. P(green) = 1 − 1/4 − 5/12 = 12/12 − 3/12 − 5/12 = 4/12 = 1/3.
      CHECK: 1/4 + 5/12 + 1/3 = 3/12 + 5/12 + 4/12 = 12/12 = 1 ✓.
  58. x/24 = 3/8 → x = 24 × 3/8 = 72/8 = 9 yellow marbles. CHECK: 9/24 = 3/8 ✓.
  59. Smallest bag: 6 marbles — 3 red (3/6 = 1/2), 2 blue (2/6 = 1/3), and 1 of any third
      color. Why 6? The denominators 2 and 3 must both divide the total, and their least
      common multiple is 6. Any multiple of 6 keeps the same probabilities (12: 6-4-2, etc.).
  60. 2/9 is already in lowest terms (2 and 9 share no factor), so the smallest bag has
      9 marbles: 2 red, 7 blue. (Any smaller total would need 2/9 to simplify — it doesn't.)

  61. 3x + 5x = 1 (complements total 1) → 8x = 1 → x = 1/8 → P(A) = 3 × 1/8 = 3/8.
      CHECK: 3/8 + 5/8 = 1 ✓.
  62. 2x + x + 3x = 1 (win, tie, or lose must happen) → 6x = 1 → x = 1/6.
      P(win) = 2x = 2/6 = 1/3. CHECK: 2/6 + 1/6 + 3/6 = 6/6 = 1 ✓.
  63. P(A) = 1 − 5/8 = 3/8 (complement rule). Then x + 1/8 = 3/8 → x = 3/8 − 1/8 = 2/8 = 1/4.
  64. P(B) = 1 − 1/4 = 3/4. Then x/2 = 3/4 → x = 2 × 3/4 = 6/4 = 3/2.
      x = 3/2 is bigger than 1 — perfectly fine, because x itself is not a probability;
      x/2 = 3/4 is, and it obeys 0 ≤ 3/4 ≤ 1 ✓.
  65. P(A) = 1/3 → P(not A) = 2/3, so P(not A) is bigger. P(A) = 5/8 → P(not A) = 3/8,
      so P(A) is bigger. The tie happens where P(A) = P(not A): solve x = 1 − x →
      2x = 1 (add x to both sides) → x = 1/2. Boundary: P(A) = 1/2. Above it, A wins;
      below it, not-A wins.
  66. P(no rain) = 1 − P(rain) ≥ 1 − 1/3 = 2/3. The comparison flips because subtracting
      a SMALLER number from 1 leaves MORE: P(rain) = 1/3 gives 2/3, but P(rain) = 1/4
      (which is smaller) gives 3/4 (which is bigger).

  67. 13/52 + 4/52 − 1/52 = 16/52 = 4/13. (The ace of hearts was double-counted.)
  68. 13/52 + 12/52 − 3/52 = 22/52 = 11/26. (Three face cards are diamonds.)
  69. 26/52 + 4/52 − 2/52 = 28/52 = 7/13. (Overlap: king of hearts, king of diamonds.)
  70. Evens {2, 4, 6} = 3 outcomes; greater than 3 {4, 5, 6} = 3 outcomes; overlap {4, 6} = 2.
      P = 3/6 + 3/6 − 2/6 = 4/6 = 2/3. CHECK by listing the union: {2, 4, 5, 6} = 4 outcomes → 4/6 ✓.
  71. P(A or B) = P(A) + P(B) − x → 1/2 = 1/3 + 1/4 − x → 1/2 = 7/12 − x
      (since 1/3 + 1/4 = 4/12 + 3/12 = 7/12) → 1/2 − 7/12 = −x (subtract 7/12 from both sides)
      → 6/12 − 7/12 = −x → −1/12 = −x → x = 1/12 (multiply both sides by −1).
      CHECK: 1/3 + 1/4 − 1/12 = 4/12 + 3/12 − 1/12 = 6/12 = 1/2 ✓.
  72. 4/5 = 1/2 + P(B) − 1/10 → P(B) = 4/5 − 1/2 + 1/10 (move the knowns across)
      → P(B) = 8/10 − 5/10 + 1/10 = 4/10 = 2/5.
      CHECK: 1/2 + 2/5 − 1/10 = 5/10 + 4/10 − 1/10 = 8/10 = 4/5 ✓.

  73. 3/5 × 2/4 = 6/20 = 3/10. (After one red leaves: 2 red out of 4 marbles.)
  74. 3/5 × 3/5 = 9/25. With replacement is BIGGER: 9/25 = 18/50 > 15/50 = 3/10.
      Sensible — the red marble goes back, so your red chance stays at its full 3/5.
  75. 3/5 × 2/4 = 6/20 = 3/10. (First red: 3 of 5. Then blue: still 2 blues, out of 4.)
  76. 4/8 × 3/7 = 12/56 = 3/14. (First heart: 4 of 8. Second heart: 3 of the 7 left.)
  77. One card is already in your hand, so only 7 cards remain in the deck — the denominator
      counts what's left, not what started.
  78. P(at least one red) = 1 − P(blue, then blue) = 1 − (2/5 × 1/4) = 1 − 2/20 = 9/10.
      (After one blue leaves, only 1 blue remains out of 4.)

  79. 1 − P(no heads) = 1 − (1/2)² = 1 − 1/4 = 3/4.
  80. 1 − P(no sixes) = 1 − (5/6)² = 1 − 25/36 = 36/36 − 25/36 = 11/36.
  81. f(3) = 1 − (1/2)³ = 1 − 1/8 = 7/8.  f(5) = 1 − (1/2)⁵ = 1 − 1/32 = 31/32.
  82. f(1) = 1 − 3/4 = 1/4 — not above 1/2.  f(2) = 1 − 9/16 = 7/16, and 7/16 < 8/16 = 1/2 —
      still short.  f(3) = 1 − 27/64 = 37/64, and 37/64 > 32/64 = 1/2 — crossed!
      Smallest n = 3 spins.
  83. g(1) = 1 − 2/3 = 1/3 < 1/2.  g(2) = 1 − 4/9 = 5/9, and 5/9 = 10/18 > 9/18 = 1/2 — crossed!
      Smallest n = 2.
  84. 1 − (5/6)³ = 1 − 125/216 = 216/216 − 125/216 = 91/216.
      ((5/6)³ = 5³/6³ = 125/216; each extra roll multiplies the miss chance by 5/6.)


Challenge

  85. The 8 outcomes: HHH, HHT, HTH, THH, HTT, THT, TTH, TTT.
      Exactly 2 heads: HHT, HTH, THH → 3 outcomes → P = 3/8.

  86. Adding: P(exactly 1) = 3/8 (HTT, THT, TTH), P(exactly 2) = 3/8, P(exactly 3) = 1/8,
      so 3/8 + 3/8 + 1/8 = 7/8. Shortcut: 1 − P(none) = 1 − 1/8 = 7/8. They match ✅ —
      and they MUST: "exactly 1, exactly 2, exactly 3" together are precisely the
      complement of "no heads," so the two methods describe the same event.

  87. 7 has 6 ways, 11 has 2 ways, no overlap (one roll can't be both sums):
      P(7 or 11) = 6/36 + 2/36 = 8/36 = 2/9.

  88. 2 has 1 way, 3 has 2 ways, 12 has 1 way:
      P = 1/36 + 2/36 + 1/36 = 4/36 = 1/9.
      (Bonus thought: win 8/36 + lose 4/36 = 12/36 = 1/3 — the other 2/3 of opening
      rolls keep the game going.)

  89. r + b = 24 (the count) and r = 2b (the story).
      Substitute the second into the first: 2b + b = 24 → 3b = 24 → b = 8.
      Then r = 2 × 8 = 16. CHECK: 16 + 8 = 24 ✓.
      P(red) = 16/24 = 2/3.

  90. (9 + x)/(24 + x) = 1/2
      2(9 + x) = 1(24 + x)     cross-multiply (multiply both sides by 2(24 + x), then simplify)
      18 + 2x = 24 + x         distribute: 2 × 9 = 18 and 2 × x = 2x
      18 + 2x − x = 24         subtract x from both sides — gather the x's
      18 + x = 24              simplify: 2x − x = x
      x = 6 ✅                  subtract 18 from both sides
      CHECK: 15 red out of 30 total → 15/30 = 1/2 ✓

  91. (6 + x)/(20 + x) = 2/3
      3(6 + x) = 2(20 + x)     cross-multiply
      18 + 3x = 40 + 2x        distribute both sides
      18 + 3x − 2x = 40        subtract 2x from both sides
      18 + x = 40              simplify: 3x − 2x = x
      x = 22 ✅                 subtract 18 from both sides
      CHECK: 28 red out of 42 total → 28/42 = 2/3 ✓ (divide top and bottom by 14)

  92. E = 6 × 1/6 + 3 × 1/6 + 0 × 4/6 = 6/6 + 3/6 + 0 = 1 + 1/2 = 3/2 = 1.5 points per play.
      E = 3/2 > 1 = cost, so YES, play — you expect to gain 3/2 − 1 = 1/2 point per game
      in the long run. (This is a generous carnival. Real ones run the same math and
      make sure it points the other way.)

  93. Fair means E = cost: p × 1/6 + 0 × 5/6 = 2 → p/6 = 2 → p = 12 points.
      CHECK: 12 × 1/6 = 2 = cost ✓ — perfectly fair.

  94. r/20 ≥ 2/5 → r/20 ≥ 8/20 (rewrite 2/5 with denominator 20) → r ≥ 8
      (multiply both sides by 20 — positive, so no flip).
      Smallest whole number: r = 8. CHECK: 8/20 = 2/5 ✓, and ≥ includes equality,
      so 8 is allowed. With r = 7 you'd get 7/20 < 8/20 — too small.

  95. P(both red, no replacement) = r/6 × (r − 1)/5 = r(r − 1)/30.
      Set equal to 2/3: r(r − 1)/30 = 2/3 → r(r − 1) = 20 (multiply both sides by 30).
      Expand: r² − r = 20 → r² − r − 20 = 0 (subtract 20 from both sides).
      Factor: (r − 5)(r + 4) = 0. (Check the factorization: (r − 5)(r + 4) =
      r² + 4r − 5r − 20 = r² − r − 20 ✓.)
      A product is zero only when a factor is zero: r − 5 = 0 or r + 4 = 0 → r = 5 or r = −4.
      The bag keeps r = 5 — a marble count can't be negative, so −4 is rejected.
      CHECK: 5/6 × 4/5 = 20/30 = 2/3 ✓.

  96. One answer: 8 equal sections — 4 red for you (P = 4/8 = 1/2), and 3 blue + 1 green
      for your friend (P = 3/8 + 1/8 = 4/8 = 1/2 by the OR rule, since blue and green
      can't happen on the same spin). The spinner is not split into two colored halves —
      your friend's half is built from two colors. Any design where the two players'
      section counts are equal works.

  97. One solution: you win on sums {2, 6, 8, 12} (1 + 5 + 5 + 1 = 12 ways),
      friend wins on {3, 5, 9, 11} (2 + 4 + 4 + 2 = 12 ways),
      tie on {4, 7, 10} (3 + 6 + 3 = 12 ways).
      Each pile: 12/36 = 1/3 ✅. Proof complete: 12 + 12 + 12 = 36, so nothing is
      missing and nothing overlaps. Other groupings of 12 exist — did you find a
      different one?

  98. P(A and B) = P(A) × P(B), and every probability obeys 0 ≤ P(B) ≤ 1. Multiplying
      a nonnegative number by something at most 1 can only shrink it or leave it alone:
      P(A) × P(B) ≤ P(A) × 1 = P(A). In words: needing BOTH A and B can never be easier
      than needing just A — the multiplication formula makes that intuition exact.

  99. Game A: E = 4 × 1/2 + 0 × 1/2 = 2 points per play. Gain: 2 − 1 = +1 point per play.
      Game B: E = 5 × 1/6 + 0 × 5/6 = 5/6 ≈ 0.83 points per play. Gain: 5/6 − 1 = −1/6
      point per play. Verdict: play A (it pays double your cost on average), skip B
      (you leak about 1/6 of a point every game — that's how carnivals eat).

  100. (a) Smallest bag: 3 marbles — 1 red, 2 of other colors. (1/3 is already in lowest
      terms, so no smaller total can produce it.)
      (b) With replacement: 1/3 × 1/3 = 1/9.
      (c) Without replacement: 1/3 × 0/2 = 0! After the only red is drawn, ZERO reds
      remain out of 2 marbles — the second draw's probability collapses to 0. Dependent
      events can do things independent events never would: here, "both red" went from
      merely unlikely (1/9) to truly impossible.
      (d) Need P(red) = 1/2, so r/n = 1/2 → n = 2r. And P(both red, no replacement) =
      r(r − 1)/(n(n − 1)) = 1/6. Substitute n = 2r:
          r(r − 1)/(2r(2r − 1)) = 1/6
          6r(r − 1) = 2r(2r − 1)     cross-multiply
          6(r − 1) = 2(2r − 1)       divide both sides by r — legal because r ≠ 0
                                     (a bag with no reds couldn't have P(red) = 1/2)
          6r − 6 = 4r − 2            distribute both sides
          6r − 4r = 6 − 2            subtract 4r and add 6 on both sides
          2r = 4                     simplify both sides
          r = 2, so n = 4 ✅
      CHECK: P(red) = 2/4 = 1/2 ✓; P(both red) = 2/4 × 1/3 = 2/12 = 1/6 ✓.
      Smallest bag: 4 marbles — 2 red, 2 others.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems — especially the backward equations, the without-replacement chains, and the design challenges — you're doing probability with real algebra: common denominators, cross-multiplication, complements, powers, expected value, and even a quadratic. That's the kind of probability most students don't meet until high school or beyond. The next time someone says "that's so unlikely!", you won't just agree. You'll compute it — and then you'll prove it. Great work!
