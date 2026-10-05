# Combinatorics — A Complete Lesson


Welcome! Here's What You'll Learn
─────────────────────────────────

        3 shirts × 4 pants = 12 outfits
        5! = 5 × 4 × 3 × 2 × 1 = 120
        C(8, 3) = 56 possible teams

Those three lines are the heart of combinatorics — the art of counting WITHOUT listing. The first line counts outfits without drawing a single stick figure. The second counts ways to line up five dogs without writing down all 120 orders (you'll soon see why that's lucky). The third counts three-person teams — and it's the trickiest idea in the lesson, because a team doesn't care about order, but counting naturally does. Taming that mismatch is the real skill here.

Why do people care? Because counting is everywhere, and listing is hopeless. A 6/49 lottery ticket has C(49, 6) = 13,983,816 possible combinations — that's why jackpots are so rare. Passwords, video game loadouts, sports schedules, phone numbers, and every probability question you'll ever meet all start with counting. (Already finished the Probability lesson? This is the counting engine that makes it even stronger.)

In this lesson, you will:

  1. Learn the counting principle — why AND means multiply
  2. Meet the factorial — the "everyone in a line" machine
  3. Count permutations — SOME of the people, in order
  4. Count combinations — some of the people, order forgotten
  5. Master the big question: does order matter? (The swap test!)
  6. Handle restrictions — picky slots first
  7. Learn two sneaky shortcuts: complements and cases
  8. Learn the common mistakes so you never make them
  9. Practice with 100 problems at the end — including puzzles with more than one right answer!

How to use this lesson: read the sections in order. Each section starts with the key idea you'll learn in it. Take your time, and try every "Your Turn" box with a pencil and paper. For most of these problems, listing every possibility would take all day — the whole point is to count smart. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: The Counting Principle — AND Means Multiply
─────────────────────────────────────────────

📌 Key idea of this section:

        Choices from DIFFERENT categories → multiply.
        3 shirts × 4 pants = 12 outfits

You have 3 shirts (red, green, blue) and 4 pairs of pants. How many different outfits can you wear?

You could draw a tree: the red branch splits into 4 outfits, the green branch splits into 4, the blue branch splits into 4. Counting the leaves gives 12. But look closer — the tree is just addition in disguise: 4 + 4 + 4 = 12. And repeated addition is multiplication:

        3 × 4 = 12 outfits ✅

That's the counting principle: when you make one choice AND then another from a different category, multiply the number of options. Every shirt gets paired with EVERY pair of pants — nothing is shared, nothing is skipped.

It works for as many choices as you like. A restaurant offers 2 appetizers, 4 main courses, and 3 desserts. How many full meals?

        2 × 4 × 3 = 24 meals ✅

And here is the workhorse you'll use constantly — counting outcomes for coins and dice:

  · Flip 3 coins:             2 × 2 × 2 = 8 outcomes
  · Roll 2 dice:              6 × 6 = 36 outcomes
  · Flip a coin, roll a die:  2 × 6 = 12 outcomes

One warning label, for later: multiply when the choices come from different categories (shirt AND pants AND hat). When you're counting alternatives — this OR that — you add instead. Lesson 8 has a whole mistake about it; for now, notice the AND hiding in every problem above.

✏️ Your Turn

A skate shop sells decks in 5 designs, wheels in 3 colors, and grip tape in 2 patterns. How many different skateboards can you build?

Answer: 5 × 3 × 2 = 30 skateboards. Deck AND wheels AND tape — different categories, so multiply.


─────────────────────────────────────────────
Lesson 2: Factorials — Everyone, Get in Line!
─────────────────────────────────────────────

📌 Key idea of this section:

        n things in a line:  n! = n × (n−1) × ... × 2 × 1
        4! = 4 × 3 × 2 × 1 = 24

Three kids — Ana, Ben, and Cleo — line up for ice cream. How many different lines are possible?

Use the slot method. Picture three slots:

        ___ ___ ___
        front     back

  · Front slot: 3 choices (anyone)
  · Middle slot: 2 choices (whoever's left)
  · Back slot: 1 choice (last kid standing)

        3 × 2 × 1 = 6 lines ✅

Check by listing: ABC, ACB, BAC, BCA, CAB, CBA. Six! The slots and the honest list agree — but the slots took five seconds.

This product — a number times every whole number below it — shows up so often it gets its own symbol, the exclamation mark:

        4! = 4 × 3 × 2 × 1 = 24        ("four factorial")

Here's the table worth memorizing:

        1! = 1        4! = 24        7! = 5,040
        2! = 2        5! = 120       8! = 40,320
        3! = 6        6! = 720

Two things to notice. First, each factorial is the previous one times n: 5! = 5 × 4! = 5 × 24 = 120. Know 4! and you never multiply four numbers again. Second, factorials grow SCARY fast. 10! = 3,628,800, and 52! — the number of ways to shuffle a deck of cards — has 68 digits. When you shuffle a deck honestly, the order you get has almost certainly never existed before in the history of the universe. Really.

One weird one: 0! = 1. How many ways can you line up zero people? Exactly one — stand there and do nothing. It sounds like a joke, but Lesson 4's formula depends on it.

✏️ Your Turn

Compute 6!. (Hint: you already know 5! = 120.) Then: how many ways can 6 books be arranged on a shelf?

Answer: 6! = 6 × 120 = 720. And 6 books on a shelf is exactly 6 slots, so 6! = 720 arrangements.


─────────────────────────────────────────────
Lesson 3: Permutations — Some of Them, In Order
─────────────────────────────────────────────

📌 Key idea of this section:

        P(n, r) = n × (n−1) × ... (r numbers) = n! ÷ (n−r)!
        P(8, 3) = 8 × 7 × 6 = 336

Eight runners race. How many ways can the gold, silver, and bronze medals be given out?

Careful — this is NOT 8!. We're not lining up all 8 runners; only 3 medals exist. But the slot method doesn't mind:

        ___ ___ ___
        🥇   🥈   🥉

  · Gold: 8 choices
  · Silver: 7 choices (whoever didn't win gold)
  · Bronze: 6 choices

        8 × 7 × 6 = 336 podiums ✅

An arrangement where ORDER MATTERS is called a permutation — "Ana gold, Ben silver" is a different result from "Ben gold, Ana silver." The count has a name and a formula:

        P(n, r) = the number of ways to arrange r things chosen from n
        P(8, 3) = 8 × 7 × 6 = 336

Notice the pattern: start at n and multiply r descending numbers. P(8, 3) has three factors because there are three medals. P(7, 2) = 7 × 6 = 42 — two factors, two slots.

There's also a slick factorial form:

        P(n, r) = n! / (n−r)!

Why does that work? 8! would line up ALL 8 runners. The medal problem only cares about the first 3 slots — every arrangement of the 5 non-medalists standing behind them is a clone of the same podium. There are 5! ways to shuffle those clones, so divide them out:

        8! / 5! = 40,320 / 120 = 336 ✅

The factorials even cancel on paper: (8 × 7 × 6 × 5 × 4 × 3 × 2 × 1) ÷ (5 × 4 × 3 × 2 × 1) = 8 × 7 × 6. Canceling beats computing 40,320 every time.

The slot method and the formula are the same machine — use whichever feels friendlier. Just remember the decay: no repeats allowed, so every slot has one fewer choice than the one before.

✏️ Your Turn

A club has 9 members. How many ways can it choose a president and a vice-president? (Different jobs — order matters!)

Answer: P(9, 2) = 9 × 8 = 72. Two slots, decay by one each time.


─────────────────────────────────────────────
Lesson 4: Combinations — Order Doesn't Matter
─────────────────────────────────────────────

📌 Key idea of this section:

        C(n, r) = P(n, r) ÷ r!     ("n choose r")
        C(6, 3) = 20

Pizza night! You may pick 2 toppings out of 4: pepperoni, mushrooms, olives, green peppers. How many different pizzas are possible?

Try P(4, 2) = 4 × 3 = 12. Sounds reasonable... but it's WRONG. Here's the trap: "pepperoni then mushrooms" and "mushrooms then pepperoni" make the SAME pizza. The permutation counted every pizza twice — once in each order. The real list has only 6: PM, PO, PG, MO, MG, OG.

When ORDER DOESN'T MATTER, the permutation overcounts. Every group of r things gets counted once for each of its r! arrangements — so divide the clones out:

        C(n, r) = P(n, r) / r!

For the pizza: C(4, 2) = 12 / 2! = 12 / 2 = 6 ✅. ("C" is for choose — you CHOOSE the group and stop caring about order.)

The full factorial version, worth knowing:

        C(n, r) = n! / (r! × (n−r)!)

Example: C(6, 3) = 6! / (3! × 3!) = 720 / (6 × 6) = 720 / 36 = 20 ✅. (Cancel before you multiply: (6 × 5 × 4) / (3 × 2 × 1) = 120/6 = 20. Your pencil will thank you.)

The most famous combination in the world: handshakes. 5 people each shake hands once with everyone else. How many handshakes? Each handshake is just a pair of people — and "Ana shakes Ben" is the same event as "Ben shakes Ana." Order doesn't matter:

        C(5, 2) = (5 × 4) / 2 = 10 handshakes ✅

Try it with dots and lines: 5 dots, connect every pair — you'll draw exactly 10 lines. Every two-person connection problem (handshakes, games in a round-robin, cables between cities) is a C(n, 2) in disguise.

✏️ Your Turn

Compute C(7, 2). Then: 7 players on a team high-five every possible pair at practice. How many high-fives?

Answer: C(7, 2) = (7 × 6) / 2 = 21. And the high-fives are the same problem in disguise — 21.


─────────────────────────────────────────────
Lesson 5: The Big Question — Order or Not?
─────────────────────────────────────────────

📌 Key idea of this section:

        The swap test: swap two chosen things.
        New result? → permutation.   Same thing? → combination.

Every problem from now on starts with one question: DOES ORDER MATTER? Get it right and the problem is half solved. Get it wrong and you're off by a factor of r! — usually without noticing.

The swap test: imagine the outcome, then swap two of the chosen things. If the swap creates a genuinely different result, order matters — use P. If it's the same situation wearing a fake mustache, order doesn't matter — use C.

  · Gold & silver from 8 runners: swap the two medalists → DIFFERENT
    result (who wants silver instead of gold?). Permutation: 8 × 7 = 56.
  · Two toppings from 8: swap → same pizza. Combination: C(8, 2) = 28.
  · President & VP from 9 members: swap → different jobs! P(9, 2) = 72.
  · Committee of 2 from 9 members: swap → same committee. C(9, 2) = 36.

Feel the pattern: titles, rankings, jobs, and lineups care about order. Teams, groups, toppings, and "just pick some" don't.

And now, the greatest scam in mathematics: the combination lock. Your lock code is 24-7-15. Is 7-24-15 the same code? Try it and enjoy being locked out — order matters! A "combination lock" is really a PERMUTATION lock. The name stuck anyway. Mathematicians cry about it; now you can cry with them.

✏️ Your Turn

Classify each, then solve: (a) a team of 3 from 7 kids; (b) gold and silver from 7 runners; (c) lining up 3 of 7 books on a shelf.

Answers: (a) combination — C(7, 3) = 35. (b) permutation — 7 × 6 = 42. (c) permutation — 7 × 6 × 5 = 210. (A shelf of books in a different order IS a different shelf!)


─────────────────────────────────────────────
Lesson 6: Picky Slots First
─────────────────────────────────────────────

📌 Key idea of this section:

        A slot with a RULE gets filled first.
        Then the decay: used things can't be reused (unless repeats are allowed).

Real counting problems come with rules: "no repeats," "the code can't start with 0," "it has to be even." The strategy is always the same — fill the PICKY slot first, then let the other slots multiply as usual.

Example 1: the zero rule. How many 3-digit codes are there if the first digit can't be 0? (Repeats allowed.) The first slot is picky: 9 choices (1–9). The others are free: 10 each.

        9 × 10 × 10 = 900 codes ✅

Example 2: no repeats. How many 3-digit numbers use the digits 1, 2, 3, 4 with no digit repeated?

        4 × 3 × 2 = 24 ✅

The decay is the whole game: each digit you use shrinks the next slot's menu by one.

Example 3: picky slot FIRST. How many EVEN 2-digit numbers can you build from 2, 3, 4, 5 with no repeats? The ones digit is picky — it must be 2 or 4. Fill it first: 2 choices. Then the tens digit: 3 left.

        3 × 2 = 6 ✅   (Check: 24, 32, 34, 42, 52, 54 — six!)

Do it the other way — tens first — and you get stuck: "3 choices for the ones digit... wait, it depends on whether the tens digit was even." Picky-slot-first dodges that mess completely. That's why it's a rule, not a suggestion.

✏️ Your Turn

How many 3-digit numbers from the digits 1, 2, 3, 4, 5 (no repeats) END in 5?

Answer: the ones slot is picky — exactly 1 choice (it must be 5). Then 4 × 3 for the rest: 4 × 3 × 1 = 12.


─────────────────────────────────────────────
Lesson 7: Sneaky Shortcuts — Complements, Cases, and Grids
─────────────────────────────────────────────

📌 Key ideas of this section:

        "At least one"  =  total − none
        OR means ADD: split into cases that don't overlap, then add.

Sometimes the direct count is a monster, and the smart move is to count around it.

Shortcut 1: the complement. A gym class has 4 boys and 3 girls. How many 3-person groups include AT LEAST ONE girl? Counting directly means cases (1 girl + 2 girls + 3 girls — ugh). Instead, count everything and subtract what you DON'T want:

        Total groups:                    C(7, 3) = 35
        Groups with NO girls (all boys): C(4, 3) = 4

        At least one girl = 35 − 4 = 31 ✅

Every "at least one" is a subtraction in disguise: total − none. (The Probability lesson's killer combo — same move!)

Shortcut 2: casework. Five toppings include pepperoni. How many 2-topping pizzas are there? You already know: C(5, 2) = 10. But split it by cases — pizzas WITH pepperoni and pizzas WITHOUT:

        With pepperoni: pick 1 more from the other 4:  C(4, 1) = 4
        Without:        pick 2 from the other 4:       C(4, 2) = 6

        Total: 4 + 6 = 10 ✅

Same answer — because cases that don't overlap get ADDED (with pepperoni OR without — no pizza is both). Casework is the slow road here, but some problems only open up this way, so keep it in the toolbox.

Shortcut 3: the grid — casework on autopilot. How many ways can you walk from the start corner to the finish corner of this neighborhood, moving only RIGHT or UP?

        finish ○────○────○
               │    │    │
               ○────○────○
               │    │    │
        start  ○────○────○

Trick: write at each corner the number of ways to ARRIVE there. You can only arrive from the left or from below — two cases, so ADD those two corners:

        1────3────6   ← 6 ways to reach the finish!
        │    │    │
        1────2────3
        │    │    │
        1────1────1
        ↑
      write 1 at the start (one way to "arrive" — start there!)

Six paths. Try listing them: RRUU, RURU, RUUR, URRU, URUR, UURR. And here's the beautiful part — every path is just the letters R, R, U, U in some order, so the grid was really C(4, 2) = 6 all along: choose which 2 of the 4 steps are UP. The grid, the cases, and the combination all agree. They always do.

✏️ Your Turn

(a) How many outcomes of 3 coin flips have at least one head? (b) Verify the grid method on a 1-block neighborhood — a single square.

Answers: (a) total 2 × 2 × 2 = 8, no-heads (TTT) is 1, so 8 − 1 = 7. (b) corners: 1, 1, 1, then 1 + 1 = 2 — two paths, RU and UR ✅.


─────────────────────────────────────────────
Lesson 8: Watch Out! Common Mistakes
─────────────────────────────────────────────

📌 Keep the rules in sight:

        AND (different categories) → multiply
        OR (either case) → add
        Order matters → P   ·   order doesn't → C = P ÷ r!

Mistake 1: adding when you should multiply. 3 shirts and 4 pants = 7 outfits? ❌ Addition is for OR — and you're wearing a shirt AND pants, from different categories: 12 ✅.

Mistake 2: multiplying when you should add. How many ways to pick 1 topping from 3 veggies OR 2 meats? 3 × 2 = 6? ❌ You're picking ONE topping, either kind — alternatives: 3 + 2 = 5 ✅.

Mistake 3: forgetting the clones. 2-topping pizzas from 6 toppings: 6 × 5 = 30? ❌ That counted pepperoni-mushroom and mushroom-pepperoni separately. Order doesn't matter — divide by 2!: C(6, 2) = 15 ✅.

Mistake 4: dividing when order DOES matter. Medals from 8 runners: C(8, 3) = 56? ❌ You divided out arrangements that were genuinely different — gold-silver-bronze and bronze-gold-silver are NOT the same podium! P(8, 3) = 336 ✅. When in doubt, run the swap test.

Mistake 5: forgetting the decay. 3-letter codes from A–E with no repeats: 5 × 5 × 5 = 125? ❌ No repeats means the menu shrinks: 5 × 4 × 3 = 60 ✅. (125 is right only when repeats ARE allowed — read the problem!)

Mistake 6: trusting names. A "combination lock" cares about order — it's a permutation in a trench coat. Never let the wording choose your formula; run the swap test instead.

Mistake 7: mixing factorials. 3! + 2! = 5!? ❌ 6 + 2 = 8, and 5! = 120. Factorials don't add. They don't multiply like that either: 3! × 2! = 12, not 720. Slow down and compute each one.


─────────────────────────────────────────────
Lesson 9: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Choices: multiply the slots      (3 × 4 = 12)
        All in a line: n!                (4! = 24)
        Some, in order: P(n, r)          (P(8, 3) = 336)
        Some, any order: C(n, r) = P ÷ r!   (C(8, 3) = 56)

The recap:

  · Counting principle: one choice AND another → multiply. Each option
    pairs with EVERY option of the other kind.
  · Factorial: n things in a line → n!. It grows terrifyingly fast.
  · Permutation: some of them, order matters → start at n and multiply
    r decaying numbers.
  · Combination: order doesn't matter → the permutation counted each
    group r! times, so divide the clones out.
  · Not sure which? The swap test: swap two chosen things — different
    result means P, same result means C.
  · Rules on slots: fill the picky slot FIRST, then decay.
  · "At least one": total − none. OR-cases that don't overlap: add.
  · Grids: each corner = left + below. (Secretly a combination!)

The magic sentence:

        Multiply the slots. If order matters, keep the clones;
        if it doesn't, divide them out.

Say it three times. That sentence — plus the swap test and picky-slots-first — solves nearly every counting problem you'll meet for years.

And here's the secret payoff: combinatorics is the engine under probability. Every probability is "count what you want ÷ count everything" — and now you can count HUGE spaces without listing a single one. How likely is one exact 5-card hand out of a deck? Count the hands: C(52, 5) = 2,598,960. One in about two and a half million. You just counted millions of things without listing one. That's the whole lesson.

Time to prove it — 100 problems, including puzzles to design yourself. 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        AND → multiply slots  ·  OR → add cases
        Line of all n → n!  ·  order matters → P  ·  order doesn't → C = P ÷ r!
        Picky slot first  ·  "at least one" = total − none

Grab a pencil and paper. Start with the easy ones — they use the exact patterns from the lessons. Cancel factorials before you multiply, and simplify everything. A few problems are open-ended: they have more than one right answer. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "Does order matter? And is there a picky slot?"


🟢 EASY (Problems 1–70)

Problems 1–10 — The counting principle! Different categories, so multiply. (Lesson 1)

  1. You have 2 shirts and 3 pairs of pants. How many outfits?
  2. 4 ice cream flavors and 2 kinds of cone. How many cones?
  3. A menu has 3 appetizers, 4 main courses, and 2 desserts. How many full meals?
  4. A bike comes in 5 colors and 3 sizes. How many versions are sold?
  5. A license plate has 2 letters followed by 1 digit. How many plates?
  6. You flip 3 coins. How many outcomes?
  7. You roll 2 dice. How many outcomes?
  8. A 4-digit code (repeats allowed, like 0042). How many codes?
  9. Sandwiches: 2 breads, 3 fillings, 2 cheeses — one of each. How many sandwiches?
  10. In one sentence: WHY do the choices multiply instead of add?

Problems 11–20 — Factorials! The "everyone in a line" machine. (Lesson 2)

  11. Compute 4!
  12. Compute 5!
  13. Compute 6!
  14. Compute 7!
  15. How many ways can 3 books be arranged on a shelf?
  16. How many ways can 5 dogs line up for a photo?
  17. How many ways can 6 people stand in a row?
  18. Four runners race. How many possible finishing orders?
  19. True or false: 3! + 2! = 5!. Explain!
  20. What is 1!? What is 0!?

Problems 21–30 — Permutations! Order matters, and the menu decays. (Lesson 3)

  21. Gold and silver medals from 5 runners. How many ways?
  22. Gold, silver, and bronze from 6 runners. How many ways?
  23. Compute P(7, 2)
  24. Compute P(8, 2)
  25. Compute P(6, 3)
  26. Compute P(9, 2)
  27. A club of 10 members picks a president and a vice-president. How many ways?
  28. How many ways to line up 3 of your 7 books on a shelf?
  29. Compute P(10, 3)
  30. Compute P(n, 1) — and explain in one sentence why your answer makes sense.

Problems 31–42 — Combinations! Order doesn't matter — divide out the clones. (Lesson 4)

  31. Compute C(4, 2)
  32. Compute C(5, 2)
  33. Compute C(6, 2)
  34. Compute C(5, 3)
  35. Compute C(6, 3)
  36. Compute C(7, 2)
  37. Compute C(8, 2)
  38. Compute C(7, 3)
  39. Five people all shake hands once with each other. How many handshakes?
  40. Eight people at a meeting do the same. How many handshakes?
  41. How many 2-topping pizzas can you build from 6 toppings?
  42. Compute C(6, 6) — and explain in one sentence why your answer makes sense.

Problems 43–52 — Permutation or combination? Run the swap test, then solve. (Lesson 5)

  43. A team of 2 from 5 kids.
  44. 1st and 2nd place from 5 runners.
  45. A 3-digit lock code with all digits different.
  46. A committee of 3 from 8 members.
  47. A captain and an assistant captain from 9 players.
  48. A 3-topping pizza from 8 toppings.
  49. Lining up 4 of 6 books on a shelf.
  50. Choosing 4 of 10 books to pack for a trip.
  51. Picking 2 movies to rent from 9.
  52. 1st, 2nd, and 3rd place from 12 runners.

Problems 53–60 — Picky slots first! Then let the decay do its job. (Lesson 6)

  53. How many 2-digit numbers use the digits 1, 2, 3, 4 with no repeats?
  54. How many 3-digit numbers use the digits 1, 2, 3, 4 with no repeats?
  55. How many 3-digit numbers use the digits 1, 2, 3, 4 if repeats ARE allowed?
  56. How many 3-digit codes are there if the first digit can't be 0? (Repeats allowed.)
  57. Four kids line up, and Ana insists on being first. How many lines?
  58. Five books go on a shelf, and the dictionary must be at one END or the other. How many arrangements?
  59. How many 2-letter codes come from A, B, C, D with no repeats?
  60. How many EVEN 2-digit numbers can you build from 2, 3, 4, 5 with no repeats?

Problems 61–70 — Mixed review! Anything from Lessons 1–7 is fair game.

  61. Compute 3! × 2!. (Careful — it's NOT 6!)
  62. Compute P(5, 5). (All 5 slots get used — what does that make it?)
  63. Compute C(5, 5). Explain in one sentence why your answer makes sense.
  64. Which is bigger: C(7, 2) or C(7, 5)? Compute both — then explain the surprising result!
  65. How many 3-letter "words" (nonsense allowed) come from A, B, C with no repeated letters?
  66. You flip a coin and roll a die. How many outcomes?
  67. Ten people at a party all shake hands once with each other. How many handshakes?
  68. A pizza shop offers 3 sizes, 4 crusts, and 2 sauces. How many different pizzas?
  69. True or false: C(6, 2) = P(6, 2). Explain!
  70. In one sentence: when do you divide by the clones — and why is the divisor r!?


🟡 INTERMEDIATE (Problems 71–90)

Problems 71–76 — Bigger numbers! Cancel before you multiply — your pencil will thank you.

  71. Compute C(10, 3)
  72. Compute C(10, 4)
  73. Compute C(9, 3)
  74. Compute C(12, 2)
  75. Compute P(9, 3)
  76. Compute C(8, 4)

Problems 77–80 — "At least one" means total − none. (Lesson 7)

  77. A gym class has 4 boys and 3 girls. How many 3-person groups include at least one girl?
  78. How many 3-digit numbers from the digits 1, 2, 3, 4, 5 (no repeats) contain at least one EVEN digit?
  79. You flip 4 coins. How many outcomes have at least one head?
  80. A bag has 5 red and 3 blue balls. How many ways to grab 2 balls with at least one blue?

Problems 81–83 — Casework! Split into cases that don't overlap, then add.

  81. How many 3-digit numbers GREATER THAN 400 use the digits 1, 2, 3, 4, 5 with no repeats?
      (Which slot is picky?)
  82. How many EVEN 3-digit numbers use the digits 1, 2, 3, 4, 5 with no repeats?
      (Split by the last digit: ending in 2, or ending in 4. Then add!)
  83. Five toppings include pepperoni. Count the 2-topping pizzas twice:
      with pepperoni + without pepperoni. Does it match C(5, 2)?

Problems 84–86 — Backwards! The count is given — find the crowd.

  84. A club has n members, and C(n, 2) = 15. What is n?
      (Hint: n(n−1)/2 = 15, so n(n−1) = 30. Two neighbors that multiply to 30?)
  85. At a reunion, everyone shakes hands once with everyone — 36 handshakes total.
      How many people were there?
  86. P(n, 2) = 30. What is n?

Problems 87–88 — Open-ended! Many right answers — find one, then try to find another.

  87. Design a restaurant menu (appetizers, mains, desserts — or any categories
      you like) with EXACTLY 24 possible full meals. What's the pattern in your numbers?
  88. Invent one real-life question whose answer is C(6, 2) and another whose
      answer is P(6, 2). (Same numbers, different question — that's the swap test!)

Problems 89–90 — Explain yourself!

  89. True or false — and why: C(n, r) always equals C(n, n−r).
      (Think about choosing who comes versus choosing who stays.)
  90. In your own words: why does P(n, r) = n! / (n−r)! work?
      (What are the (n−r)! clones?)


🔴 CHALLENGE (Problems 91–100)

  91. The clone word. How many different arrangements (nonsense words allowed)
      can you make from the letters of APPLE?
      (Hint: 5! = 120 treats the two P's as different letters. But swapping the
      two P's changes nothing — every arrangement has an identical twin.)
  92. The double-clone word. How many arrangements of TOMATO?
      (Now TWO letters repeat: the T's AND the O's. Divide by both clone counts!)
  93. The big grid. How many right-or-up paths cross a neighborhood that is
      3 blocks wide and 2 blocks tall? Build the corner numbers like Lesson 7.
      Then check with the clone trick: every path is R, R, R, U, U in some order!
  94. Best friends. Ana and Ben INSIST on standing next to each other in a line
      of 4 kids (Ana, Ben, Cleo, Dan). How many lines are possible?
      (Hint: glue them into one super-person. Now 3 units line up — and the
      super-person itself can be Ana-Ben or Ben-Ana.)
  95. The tournament. Six teams play a round-robin: every team plays every other
      team once. How many games total? Then: how many games if every pair plays
      twice (home and away)?
  96. Captain rules. A club has 6 members: 2 captains and 4 regular members.
      How many 4-person committees include AT LEAST ONE captain?
      (Solve it twice: once with total − none, and once with cases — exactly one
      captain, or exactly two. The two answers must agree!)
  97. Sundae bar. You may take ANY of 3 toppings — hot fudge, sprinkles,
      cherries — each one optional. How many sundaes have at least one topping?
      (Hint: each topping is IN or OUT — a slot with 2 choices. Multiply, then
      subtract the all-nothing case.) Then: how many with 4 toppings available?
  98. The fancy plate. A license plate has 2 DIFFERENT letters (no repeats)
      followed by 2 DIFFERENT digits (no repeats). How many plates are possible?
      (Count the letters, count the digits, then multiply — letters AND digits.)
  99. The unlabeled-teams trap. Six kids split into two teams of 3 for a game
      where the teams have NO names or colors. How many ways can the split
      happen? (Hint: C(6, 3) = 20 counts choosing a team — but choosing
      {Ana, Ben, Cleo} produces the SAME split as choosing the other three.
      Every split got counted twice.)
  100. The grand finale — design it! Invent one problem whose answer is
       P(5, 3) = 60 and another whose answer is C(6, 4) = 15. Then solve both
       of yours to prove they work. (Order matters in the first — medals, jobs,
       shelves. Order forgotten in the second — toppings, teams, trips.)


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — the swap test, the clone division, the decay, or picky-slots-first. For open-ended problems, your answer may look different and still be right.

Easy

  1–10:  6  ·  8  ·  24  ·  15  ·  6,760 (26×26×10)  ·  8  ·  36
         10,000 (every code from 0000 to 9999!)  ·  12
         Every option of one kind pairs with EVERY option of the other —
         nothing shared, nothing skipped — so the counts multiply.

  11–20: 24  ·  120  ·  720  ·  5,040  ·  6  ·  120  ·  720  ·  24
         False — 3! + 2! = 6 + 2 = 8, but 5! = 120  ·  1! = 1 and 0! = 1

  21–30: 20 (5×4)  ·  120 (6×5×4)  ·  42 (7×6)  ·  56 (8×7)  ·  120 (6×5×4)
         72 (9×8)  ·  90 (10×9)  ·  210 (7×6×5)  ·  720 (10×9×8)
         n — one slot, n choices, no decay needed

  31–42: 6  ·  10  ·  15  ·  10  ·  20  ·  21  ·  28  ·  35  ·  10  ·  28  ·  15
         1 — there's exactly one way to take all 6 (and one way to take none)

  43–52: C: C(5,2) = 10  ·  P: 5×4 = 20  ·  order matters: 10×9×8 = 720
         C: C(8,3) = 56  ·  P: 9×8 = 72  ·  C: C(8,3) = 56
         P: 6×5×4×3 = 360  ·  C: C(10,4) = 210  ·  C: C(9,2) = 36
         P: 12×11×10 = 1,320

  53–60: 12 (4×3)  ·  24 (4×3×2)  ·  64 (4×4×4)  ·  900 (9×10×10)
         6 (1×3×2×1)  ·  48 (2 ends × 4! = 2×24)  ·  12 (4×3)
         6 (picky ones slot: 2 choices — 2 or 4 — then 3 left for the tens)

  61–70: 12 (6 × 2 — NOT 6! = 720)  ·  120 (P(5,5) = 5!)  ·  1 (take all 5 — one way)
         Equal! Both are 21 — choosing 2 to come is the same as choosing 5 to stay
         6 (3×2×1)  ·  12 (2×6)  ·  45 (C(10,2))  ·  24 (3×4×2)
         False — P(6,2) = 30 counts the order; C(6,2) = 15 doesn't
         When order doesn't matter — each group was counted once per arrangement,
         and a group of r has r! arrangements

Intermediate

  71–76: 120 (10×9×8 / 3!)  ·  210 (10×9×8×7 / 4!)  ·  84 (9×8×7 / 3!)
         66 (12×11 / 2!)  ·  504 (9×8×7)  ·  70 (8×7×6×5 / 4!)

  77. 31 — total C(7,3) = 35, all-boys C(4,3) = 4, so 35 − 4 = 31
  78. 54 — total 5×4×3 = 60; all-odd uses only 1, 3, 5: 3×2×1 = 6; 60 − 6 = 54
  79. 15 — total 2⁴ = 16, no-heads is just 1 (TTTT), so 16 − 1 = 15
  80. 18 — total C(8,2) = 28, both-red C(5,2) = 10, so 28 − 10 = 18
  81. 24 — picky slot first: the hundreds digit must be 4 or 5 (2 choices),
      then 4 × 3 for the rest: 2×4×3 = 24
  82. 24 — picky ones slot: must be 2 or 4 (2 choices), then 4 × 3: 2×4×3 = 24.
      Casework check: ending in 2 → 12, ending in 4 → 12, and 12 + 12 = 24 ✅
  83. 10 — with pepperoni: pick 1 more from 4 → C(4,1) = 4; without: C(4,2) = 6;
      and 4 + 6 = 10 = C(5,2) ✅
  84. 6 — n(n−1) = 30, and 30 = 6 × 5
  85. 9 — n(n−1)/2 = 36, so n(n−1) = 72, and 72 = 9 × 8
  86. 6 — n(n−1) = 30 = 6 × 5

  87. Any numbers multiplying to 24! E.g., 2 appetizers × 3 mains × 4 desserts;
      or 3 mains × 8 desserts; or 4 × 6; or 2 × 2 × 6. The pattern: the category
      counts must be FACTORS that multiply to 24.
  88. Sample C(6,2): "how many 2-topping pizzas from 6 toppings?" (15 — same
      pizza either order). Sample P(6,2): "gold and silver from 6 runners?"
      (30 — swapping medals changes everything). Yours will differ — the swap
      test is the judge.

  89. True! Choosing who comes IS choosing who stays — every time you pick r
      people to include, you've also picked n−r people to leave out. One choice
      creates both groups, so the counts are equal: C(n,r) = C(n,n−r).
  90. Line up ALL n people (n! ways). The r chosen ones stand in the first r
      slots; every arrangement of the leftover n−r people behind them is a
      clone of the same ordered-r result. Divide out the (n−r)! clones:
      P(n,r) = n! / (n−r)!.

Challenge

  91. 60 — 5!/2! = 120/2. Every arrangement has an identical twin made by
      swapping the two P's.
  92. 180 — 6!/(2! × 2!) = 720/4. The two T's clone everything by 2, and the
      two O's clone everything by 2 again.
  93. 10 — the corner numbers:
          1────3────6────10
          1────2────3────4
          1────1────1────1
      Clone-trick check: arrangements of R,R,R,U,U = 5!/(3! × 2!) = 120/12 = 10 ✅
  94. 12 — glue Ana+Ben into one unit: 3 units line up in 3! = 6 ways, and the
      glued pair has 2 inside orders (Ana-Ben or Ben-Ana): 6 × 2 = 12 ✅
  95. 15 — every game is just a pair of teams: C(6,2) = 15. Twice: 2 × 15 = 30 ✅
  96. 14 — complement: C(6,4) = 15 total, no-captain committees C(4,4) = 1,
      so 15 − 1 = 14. Casework: exactly one captain = 2 × C(4,3) = 8, both
      captains = C(4,2) = 6, and 8 + 6 = 14. Agreement ✅
  97. 7 — each topping is IN or OUT: 2 × 2 × 2 = 8, minus the plain-ice-cream
      case: 8 − 1 = 7. With 4 toppings: 2⁴ − 1 = 16 − 1 = 15 ✅
  98. 58,500 — letters 26 × 25 = 650, digits 10 × 9 = 90, and letters AND digits
      multiply: 650 × 90 = 58,500 ✅
  99. 10 — C(6,3) = 20 counts each split twice, because picking one team and
      picking the OTHER team describe the same split: 20/2 = 10 ✅
  100. Sample P(5,3): "gold, silver, bronze from 5 runners" = 5×4×3 = 60.
       Sample C(6,4): "choose 4 of 6 books to take on a trip" = 6!/(4!×2!) = 15.
       Yours will differ — if the swap test says "different result" for the
       first and "same thing" for the second, you're right.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems — especially the design challenges — you can count things that would take a lifetime to list. That's not a small skill: it's the engine under probability, passwords, schedules, and every "how many ways?" question ever asked. The next time someone says "there are so many possibilities!", you won't just nod. You'll multiply the slots, divide out the clones, and tell them exactly how many. Great work!
