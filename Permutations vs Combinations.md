Permutations vs. Combinations — A Complete Lesson


Welcome! Here's What You'll Learn
─────────────────────────────────

        5! = 5 × 4 × 3 × 2 × 1 = 120
        P(5, 2) = 5 × 4 = 20        ← order MATTERS
        C(5, 2) = 20 ÷ 2 = 10       ← order DOESN'T matter

Those three lines are the heart of this lesson — the math of counting without listing. The first line is a factorial: it counts the ways to line things up. The second is a permutation: it counts ordered picks, where gold-silver is different from silver-gold. The third is a combination: it counts unordered picks, where pepperoni-mushroom is the same pizza as mushroom-pepperoni. Telling those last two apart — instantly, every time — is the real skill in this lesson.

Why do people care? Because counting is everywhere: passwords and phone codes, tournament schedules, card hands, lottery odds, pizza menus, team picks, and every "how many ways?" question ever asked. And once you can count, probability becomes easy — probability is just favorable ÷ total, and now you'll be able to count BOTH.

In this lesson, you will:

  1. Count with the multiplication machine — choices × choices × choices
  2. Line up whole groups with factorials — and cancel them like a pro
  3. Count ordered picks with permutations — gold, silver, bronze
  4. Count unordered picks with combinations — and the un-scramble trick
  5. Tell them apart with the one-question swap test
  6. Learn the common mistakes so you never make them
  7. Practice with 100 problems at the end — including backwards puzzles,
     restriction twists, and design-your-own challenges!

How to use this lesson: Read the sections in order. Each section starts with the key idea you'll learn in it. Take your time, and try every "Your Turn" box with a pencil and paper. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: The Counting Principle — The Multiplication Machine
─────────────────────────────────────────────

📌 Key idea of this section:

        Choices in a row? MULTIPLY the number of options.
        3 shirts × 4 pants = 12 outfits

You're getting dressed: 3 shirts, 4 pairs of pants. How many possible outfits? You could draw a diagram... or just notice that each of the 3 shirts can pair with all 4 pants. That's 4 + 4 + 4 = 12 — and repeated addition is exactly what multiplication is for:

        3 × 4 = 12 outfits

The machine works for any number of choices in a row. A café meal: pick 1 of 2 sandwiches, 1 of 3 drinks, 1 of 2 desserts:

        2 × 3 × 2 = 12 meals

It even works when the same choice can repeat. A 3-letter code using the letters A–E, where repeats are allowed (AAB is fine): each of the 3 spots has 5 choices:

        5 × 5 × 5 = 125 codes

One twist you'll meet in the problems: a restriction. Same code, but it MUST start with A? Then the first spot has only 1 choice:

        1 × 5 × 5 = 25 codes

Handle the picky spot first, then multiply as usual.

✏️ Your Turn

A sundae shop has 2 cone types, 4 flavors, and 3 toppings. You pick one of each. How many different sundaes?

Answer: 2 × 4 × 3 = 24 sundaes.


─────────────────────────────────────────────
Lesson 2: Factorials — The Line-Up Machine
─────────────────────────────────────────────

📌 Key ideas of this section:

        Lining up ALL of n things: n × (n−1) × … × 1 = n!
        5! = 5 × 4 × 3 × 2 × 1 = 120

Four friends line up for a photo. How many arrangements? Fill the spots one at a time: 4 choices for the first spot, then 3 remain for the second, 2 for the third, and 1 for the last:

        4 × 3 × 2 × 1 = 24 arrangements

Why do the choices shrink? Because there are no repeats in a line — Maya can't stand in two spots at once! This "multiply the shrinking choices" pattern is so useful it gets its own name and symbol: the factorial, written with an exclamation point. And yes, mathematicians shout it: "four factorial!"

        4! = 4 × 3 × 2 × 1 = 24

Small factorials are worth knowing cold. Watch them explode:

        1! = 1
        2! = 2
        3! = 6
        4! = 24
        5! = 120
        6! = 720
        7! = 5,040   ← whoa

Don't believe 3! = 6? Here are all six arrangements of A, B, C — count them:

        ABC   ACB   BAC   BCA   CAB   CBA

Now the pro move: canceling. Each factorial hides the one before it — 6! is really 6 × 5!. So when factorials divide, they collapse:

        6! / 4! = (6 × 5 × 4 × 3 × 2 × 1) / (4 × 3 × 2 × 1) = 6 × 5 = 30

Never multiply out a factorial you're about to cancel. That one habit will save you from arithmetic misery in the next two lessons.

✏️ Your Turn

(a) How many ways can you arrange the letters of MATH?
(b) Compute 7! / 5! — cancel first, don't multiply out!

Answers: (a) 4! = 24. (b) 7 × 6 = 42.


─────────────────────────────────────────────
Lesson 3: Permutations — When Order Matters
─────────────────────────────────────────────

📌 Key idea of this section:

        A permutation is an ORDERED pick of k things from n things.
        P(n, k) = the first k factors of n!  =  n! / (n−k)!
        P(8, 3) = 8 × 7 × 6 = 336

Eight runners race for gold, silver, and bronze. How many ways can the medals be awarded? Only 3 spots to fill — but the choices still shrink:

        8 × 7 × 6 = 336

Why not 8!? Because nobody cares about 4th place — the race stops mattering after the podium. You're picking just 3 of the 8, but the order of those 3 is everything: Ana gold, Ben silver, Cy bronze is a COMPLETELY different result from Ben gold, Ana silver, Cy bronze. Same three people, different order, different outcome. That's what makes it a permutation.

The shorthand: P(8, 3) means "permutations of 8 things taken 3 at a time" — the first 3 factors of 8!. The factorial version of the formula does the same job by canceling the tail:

        P(8, 3) = 8! / 5! = 8 × 7 × 6 = 336

The (n−k)! on the bottom chops off exactly the factors you don't need. Two more for the road:

        P(6, 2) = 6 × 5 = 30        (president and VP from 6 members)
        P(5, 3) = 5 × 4 × 3 = 60    (1st, 2nd, 3rd from 5 swimmers)

Words that scream ORDER — permutation alarm bells: line up, arrange, rank, 1st/2nd/3rd, code, password, schedule, batting order, playlist.

✏️ Your Turn

Six swimmers race for gold and silver only. How many ways can the two medals be awarded?

Answer: P(6, 2) = 6 × 5 = 30.


─────────────────────────────────────────────
Lesson 4: Combinations — When Order Doesn't Matter
─────────────────────────────────────────────

📌 Key idea of this section:

        A combination is an UNORDERED pick — same group, any order, counts ONCE.
        C(n, k) = P(n, k) ÷ k!    ← divide out the scrambles
        C(5, 2) = 20 ÷ 2 = 10

Pizza time: you may pick 2 toppings out of 5. How many different pizzas?

Try the permutation: 5 × 4 = 20. But wait — pepperoni-then-mushroom and mushroom-then-pepperoni are the SAME pizza! The permutation counted every pair twice, because every group of 2 can be scrambled into 2! = 2 orders. So un-scramble — divide:

        C(5, 2) = 20 ÷ 2 = 10 pizzas

That's the whole trick, and it works every time. Choosing 3 books to pack from 5? The permutation says 5 × 4 × 3 = 60, but every group of 3 books was counted 3! = 6 times (all its scrambles). Divide them away:

        C(5, 3) = 60 ÷ 6 = 10

Handshakes are combinations in disguise. If 5 people each shake hands once with everyone, how many handshakes? "Amy shakes Ben" IS "Ben shakes Amy" — order is meaningless, so:

        C(5, 2) = 10 handshakes

Here's a beautiful side effect. C(6, 2) = 15, and C(6, 4) = 15 too. Coincidence? Never. Choosing 2 toys to TAKE on a trip is the same act as choosing 4 to LEAVE behind — every "take" group automatically creates a "leave" group. So:

        C(n, k) = C(n, n − k)     choosing = leaving behind

When k is big, flip it to the small side. It's the laziest, most legal shortcut in counting.

✏️ Your Turn

(a) How many ways to pick 2 movies from 6 for movie night?
(b) Find C(6, 4) WITHOUT a new computation.

Answers: (a) C(6, 2) = (6 × 5) ÷ 2 = 15. (b) Also 15 — choosing 4 to take = choosing 2 to leave!


─────────────────────────────────────────────
Lesson 5: The Big Decision — Permutation or Combination?
─────────────────────────────────────────────

📌 The one-question test:

        "If I SWAP two of my picks, do I get a DIFFERENT result?"
        YES → permutation.    NO (same thing) → combination.

Same club, two questions. Seven members.

  Question A: pick a president, a vice-president, and a treasurer.
  Swap two names and someone gets a new job — different result! Permutation:

        P(7, 3) = 7 × 6 × 5 = 210

  Question B: pick a 3-person cleanup committee.
  Swap two names and it's the same committee — no new result. Combination:

        C(7, 3) = 210 ÷ 6 = 35

Same people, same club, same-size pick — and the answers are exactly 6 = 3! apart. The permutation counts every committee once per scramble; the combination counts it once, period.

Clue words to listen for:

  · Permutation clues: arrange, line up, order, rank, 1st/2nd/3rd place,
    code, password, schedule, batting order
  · Combination clues: choose, pick, select, group, team, committee,
    toppings, handshakes

But trust the swap test more than the clue words. "Pick 3 winners" is a combination — but "pick 1st, 2nd, and 3rd" is a permutation, even though both say "pick"!

One last gem: a combination lock is misnamed! On a lock, 1-2-3 and 3-2-1 are very different — order matters. It should really be called a permutation lock. You now know more vocabulary than the lock company.

✏️ Your Turn

Decide first — P or C? Then solve.
(a) Pick 3 of 6 friends for a study group.
(b) Award gold, silver, and bronze to 3 of 6 skaters.

Answers: (a) Combination — swap two friends, same group. C(6, 3) = (6 × 5 × 4) ÷ 6 = 20. (b) Permutation — swap two medals, different podium. P(6, 3) = 6 × 5 × 4 = 120.


─────────────────────────────────────────────
Lesson 6: Watch Out! Common Mistakes
─────────────────────────────────────────────

📌 Keep the test in sight:

        Swap two picks. Different result? P. Same thing? C — and divide by k!

Mistake 1: Forgetting to un-scramble

"Two toppings from 5 — that's 5 × 4 = 20." ❌ You counted pepperoni-mushroom and mushroom-pepperoni as two pizzas. Order doesn't matter here: 20 ÷ 2 = 10. ✅

Mistake 2: Un-scrambling an ordered problem

"Gold and silver from 6 runners — divide by 2, so 15." ❌ Swap the two medals and it's a DIFFERENT podium — keep all 6 × 5 = 30. ✅ The two mistakes above are twins: both come from skipping the swap test.

Mistake 3: Multiplying out giant factorials

8! / 5! by computing 40,320 ÷ 120? ❌ That's pain you volunteered for. Cancel first: 8 × 7 × 6 = 336. ✅ Never multiply what you're about to cancel.

Mistake 4: Mixing up "repeats allowed" and "no repeats"

A 3-letter code from 5 letters, repeats allowed: 5 × 5 × 5 = 125 (A-A-B is legal). But lining up 3 of 5 people: 5 × 4 × 3 = 60 (nobody stands in two spots). Always ask: can the same thing be picked twice?

Mistake 5: Adding when you should multiply

"3 shirts and 4 pants — 7 outfits!" ❌ That would be true only if you wore a shirt OR pants (yikes). Each shirt pairs with all 4 pants: 3 × 4 = 12. ✅

Mistake 6: Computing the big side of a combination

C(10, 8) by writing 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 ÷ 8!? ❌ Flip it with choosing = leaving: C(10, 8) = C(10, 2) = 45. ✅ Work lazy — it's legal!


─────────────────────────────────────────────
Lesson 7: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Choices in a row?        MULTIPLY the options.
        All n things in a line?  n!
        Ordered pick of k?       P(n, k) = first k factors of n!
        Unordered pick of k?     C(n, k) = P(n, k) ÷ k!

The recap list

  · The multiplication machine counts choices made in a row — even with restrictions (handle the picky spot first) and repeats.
  · Factorials count full line-ups: 5! = 120. They explode fast, and they cancel beautifully: 8! / 6! = 8 × 7.
  · Permutations count ordered picks: podium finishes, codes, batting orders. Same picks, new order = new result.
  · Combinations count unordered picks: toppings, teams, handshakes. Divide out the k! scrambles.
  · Symmetry shortcut: C(n, k) = C(n, n − k). Choosing = leaving behind.
  · The swap test settles every argument: swap two picks — different result? P. Same thing? C.

The magic sentence

        Multiply the choices. Line-ups use factorials.
        Order matters? Permutation. Order doesn't? Combination —
        and divide out the scrambles.

Say it out loud three times. Seriously!

Why this matters

Counting is the quiet engine inside passwords and security, tournament brackets, card games, lottery odds, genetics, and every menu that brags "over 100 combinations!" (after Lesson 4, you can check whether they're lying). It's also the engine of probability: P = favorable ÷ total, and now you can count both the top AND the bottom of that fraction — even when listing every outcome would take all weekend.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Choices in a row? MULTIPLY.
        All n lined up? n!
        Order matters?  P(n, k) = first k factors of n!
        Order doesn't?  C(n, k) = P(n, k) ÷ k!

Grab a pencil and paper. Start with the easy ones — they use the exact same patterns from the lessons. A few problems are open-ended: they have more than one right answer. Don't peek at the answer key until you've tried!

Hint for every problem: first ask the magic question — "If I swap two of my picks, is it a DIFFERENT result?"


🟢 EASY (Problems 1–70)

Problems 1–10 — The multiplication machine! A few have restrictions — handle the picky spot first. (Lesson 1)

  1. You have 3 shirts and 4 pairs of pants. How many outfits?
  2. A café has 5 sandwiches and 2 drinks. How many sandwich-and-drink meals?
  3. Sundae time: 2 cone types, 4 flavors, 3 toppings — one of each. How many sundaes?
  4. You flip a coin, then roll a die. How many possible results?
  5. You roll two dice. How many possible results?
  6. A 3-letter code uses letters A–E, repeats allowed. How many codes?
  7. A 2-digit code uses digits 1–6, repeats allowed. How many codes?
  8. A 3-digit code uses digits 1–4, repeats allowed. How many codes?
  9. Same code as #8, but it MUST start with the digit 1. How many now?
  10. Back to 3 shirts and 4 pairs of pants — but your favorite shirt is in the wash. How many outfits?

Problems 11–20 — Factorials: line up EVERYTHING. (Lesson 2)

  11. Three books (call them A, B, C) go on a shelf. How many arrangements? List them all to check your factorial!
  12. Four friends line up for a photo. How many arrangements?
  13. Five dogs line up at the groomer. How many arrangements?
  14. Compute 6!.
  15. How many ways can you arrange the letters of CAT?
  16. How many ways can you arrange the letters of MATH?
  17. Six runners finish a race. How many possible finishing orders (all 6 of them)?
  18. True or false: 4! = 4 × 3!.
  19. Which is bigger: 3! + 3!, or 4!?
  20. What is 5! ÷ 5? (Hint: it equals a smaller factorial!)

Problems 21–30 — Cancel those factorials! Never multiply what you'll cancel. (Lessons 2–3)

  21. 6! / 4!
  22. 7! / 5!
  23. 5! / 3!
  24. 8! / 6!
  25. 6! / 5!
  26. P(5, 2)
  27. P(6, 2)
  28. P(7, 2)
  29. P(5, 3)
  30. P(6, 3)

Problems 31–40 — Permutation stories: order matters! (Lesson 3)

  31. Six runners race for gold and silver. How many ways can the two medals be awarded?
  32. Six runners race for gold, silver, and bronze. How many ways now?
  33. A club of 5 members picks a president and a vice-president. How many ways?
  34. Seven swimmers race for 1st, 2nd, and 3rd. How many ways?
  35. A coach picks the first 3 batters (in order) from 9 players. How many ways?
  36. A password is 3 DIFFERENT letters chosen from 6 letters. How many passwords?
  37. You line up 3 trophies chosen from 6 trophies. How many arrangements?
  38. You build a playlist of 4 songs chosen from 6 songs. (Order matters — it's a playlist!) How many playlists?
  39. How many 2-letter codes with no repeats can you make from 8 letters?
  40. Which is bigger: P(6, 2) or P(4, 3)?

Problems 41–48 — Combination computation: un-scramble! (Lesson 4)

  41. C(4, 2)
  42. C(5, 2)
  43. C(6, 2)
  44. C(5, 3)
  45. C(6, 3)
  46. C(7, 2)
  47. C(6, 4)  ← think before you compute!
  48. C(8, 2)

Problems 49–58 — Combination stories: order doesn't matter! (Lesson 4)

  49. Pick 2 pizza toppings from 6. How many pizzas?
  50. Choose 3 books to pack from 5. How many ways?
  51. Five people each shake hands once with everyone. How many handshakes?
  52. Same party, but 6 people. How many handshakes now?
  53. Choose 2 movies to rent from 7. How many ways?
  54. A committee of 3 is chosen from 6 members. How many committees?
  55. Choose 2 ice cream flavors from 8 for a sundae. How many ways?
  56. How many 2-person teams can you form from 9 players?
  57. Choose 4 colors from 6 for a poster. How many ways?
  58. Pick 3 snacks from 8 for a road trip. How many ways?

Problems 59–70 — THE BIG DECISION. First say "permutation" or "combination" — then solve! (Lesson 5)

  59. President and VP from 6 members.
  60. A 2-person committee from 6 members.
  61. 1st, 2nd, and 3rd place from 8 racers.
  62. Three toppings from 8.
  63. Arrange all 4 of your photos in a row on the fridge.
  64. Choose 4 photos to print from 6.
  65. A 2-letter code, no repeats, from 5 letters.
  66. Adopt 2 kittens from a litter of 5.
  67. Pick your 1st, 2nd, and 3rd period classes from 5 subjects.
  68. Pick 3 of 6 friends for a study group.
  69. Gold and silver from 10 skaters.
  70. Choose 2 of 10 rides at the fair.


🟡 INTERMEDIATE (Problems 71–90)

Problems 71–76 — Restrictions! Handle the picky part first, then count.

  71. Line up 5 books on a shelf, but the dictionary MUST be first. How many arrangements?
  72. A 4-digit code uses digits 1–6 with NO repeats. How many codes?
  73. Choose a 3-person team from 7 players, but the captain MUST be on the team. How many teams?
  74. Choose 4 books from 8, but you MUST take the one your friend recommended. How many ways?
  75. A quiz team needs 2 of the 4 boys AND 2 of the 3 girls. How many possible teams?
  76. Line up 3 trophies chosen from 5, but the gold trophy MUST be in the line-up. How many arrangements? (Hint: first pick which of the 3 spots it takes.)

Problems 77–82 — Symmetry and backwards puzzles!

  77. Find C(10, 8) WITHOUT a big computation.
  78. Find C(9, 7) the same sneaky way.
  79. You know C(6, 2) = 15. What is C(6, 4)? Explain in one sentence.
  80. C(n, 2) = 10. What is n? (Hint: try small values of n.)
  81. P(n, 2) = 30. What is n?
  82. C(n, 2) = 21. What is n?

Problems 83–86 — Counting meets probability! (P = favorable ÷ total — count BOTH with your new skills. Simplify!)

  83. You pick 2 of 5 toppings at random. What's the probability you get exactly your 2 favorites?
  84. Four books go on a shelf in a random order. What's the probability your favorite is first?
  85. Six runners are randomly awarded gold, silver, and bronze. What's the probability YOU get gold? (Count the podiums where you're on top!)
  86. A 3-person committee is chosen at random from 8 people. What's the probability the captain is on it? (Favorable: captain in, 2 of the other 7. Total: C(8, 3).)

Problems 87–90 — Explain yourself!

  87. True or false — and why: "Choosing 3 winners from 10 people is the same thing as choosing 7 losers."
  88. Open-ended! Invent your own permutation story whose answer is 30. Then invent a combination story whose answer is 15.
  89. Compute P(5, 3) and C(5, 3). The permutation is exactly how many times bigger — and why THAT number?
  90. From 5 people: pick a president, then a 2-person committee from the OTHER 4. How many ways?


🔴 CHALLENGE (Problems 91–100)

  91. The ratio mystery. A club of 8 picks 3 officers (president, VP, treasurer): that's P(8, 3). It also picks a plain 3-person committee: that's C(8, 3). Compute both, then divide the first by the second. Why is the ratio EXACTLY 6?
  92. Handshake pattern. Eight people shake hands: C(8, 2) = 28. Then a 9th person arrives and shakes everyone's hand. How many NEW handshakes happen? What's the new total? Bonus: explain why C(9, 2) = C(8, 2) + 8 must ALWAYS work.
  93. The tournament. Six teams each play each other once. How many games? Now make it home-and-away — each pair plays twice, once at each team's field. How many games now, and why did it secretly become a PERMUTATION problem?
  94. The pizza ad (open-ended). A pizzeria brags: "Over 50 different 2-topping pizzas!" What is the SMALLEST number of toppings they must offer for the ad to be true? (Test C(10, 2), then go one bigger.)
  95. Best friends forever. Five friends line up for a photo, but Ana and Ben INSIST on standing next to each other. How many arrangements? (Hint: glue Ana and Ben into one block — now you have 4 things to line up. But the block can flip!)
  96. Always, sometimes, or never? "C(n, 2) is exactly half of P(n, 2)." Prove your answer. Bonus: what fraction of P(n, 3) is C(n, 3)?
  97. Probability finale. Six books go on a shelf in a random order. What's the probability that your 2 favorites end up NEXT TO EACH OTHER? (Glue them like in #95: that's 2 × 5! favorable out of 6! total — then simplify the fraction!)
  98. The mixed machine (open-ended). A coach picks 1 goalie from 4 players AND 3 field players from 6 other players. How many ways? Then invent your own story that mixes one plain choice with one combination.
  99. The misnamed lock. A "combination lock" uses a 3-digit code, digits 0–9, repeats allowed. How many codes is that? If repeats are NOT allowed, how many? Then explain why the lock should really be called a PERMUTATION lock.
  100. The grand finale — two roads, one answer. A club of 6 needs a president AND a 2-person welcoming committee (the committee comes from the remaining members). Count it two ways:
      (a) president first, then the committee from the 5 leftovers: 6 × C(5, 2)
      (b) committee first, then the president from the 4 leftovers: C(6, 2) × 4
      Compute both. Do the two roads meet? Explain why they MUST.


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — the multiplication machine, a factorial cancel, the swap test, or the un-scramble division.

Easy

  1–10: 12  ·  10  ·  24  ·  12  ·  36  ·  125  ·  36  ·  64
        16 (1 × 4 × 4 — the first spot has just 1 choice)  ·  8 (2 clean shirts × 4 pants)

  11–20: 6 — ABC, ACB, BAC, BCA, CAB, CBA  ·  24  ·  120  ·  720
         6 — CAT, CTA, ACT, ATC, TCA, TAC  ·  24  ·  720
         True — 4 × 3! = 4 × 6 = 24  ·  4! is bigger: 24 beats 6 + 6 = 12
         24 — since 5! ÷ 5 = 4!

  21–30: 30  ·  42  ·  20  ·  56  ·  6  ·  20  ·  30  ·  42  ·  60  ·  120

  31–40: 30  ·  120  ·  20  ·  210  ·  504  ·  120  ·  120  ·  360  ·  56
         P(6, 2) = 30 beats P(4, 3) = 24

  41–48: 6  ·  10  ·  15  ·  10  ·  20  ·  21  ·  15 (same as C(6, 2)!)  ·  28

  49–58: 15  ·  10  ·  10  ·  15  ·  21  ·  20  ·  28  ·  36  ·  15  ·  56

  59–70: P → 30  ·  C → 15  ·  P → 336  ·  C → 56  ·  P → 24  ·  C → 15
         P → 20  ·  C → 10  ·  P → 60  ·  C → 20  ·  P → 90  ·  C → 45

Intermediate

  71–76: 24 — dictionary fixed first, then 4! = 24 for the rest
         360 — P(6, 4) = 6 × 5 × 4 × 3
         15 — captain is in, so choose 2 of the other 6: C(6, 2)
         35 — the pick is forced, so choose 3 of the other 7: C(7, 3)
         18 — C(4, 2) × C(3, 2) = 6 × 3
         36 — gold trophy takes one of 3 spots, then 4 × 3 fill the rest: 3 × 12 = 36

  77–82: 45 — C(10, 8) = C(10, 2): choosing 8 to take = choosing 2 to leave
         36 — C(9, 7) = C(9, 2)
         15 — choosing 4 to take IS choosing 2 to leave, so C(6, 4) = C(6, 2)
         5 — because 5 × 4 ÷ 2 = 10
         6 — because 6 × 5 = 30
         7 — because 7 × 6 ÷ 2 = 21

  83–86: 1/10 — one favorite pair out of C(5, 2) = 10
         1/4 — favorable: favorite first, 3! = 6 ways; total 4! = 24; 6/24 = 1/4
         1/6 — you-gold podiums: 1 × 5 × 4 = 20; total P(6, 3) = 120; 20/120 = 1/6
         3/8 — favorable C(7, 2) = 21 out of C(8, 3) = 56; 21/56 = 3/8

  87. True — every choice of 3 winners automatically chooses 7 non-winners:
      C(10, 3) = C(10, 7) = 120. Choosing = leaving behind!
  88. Sample permutation story: gold and silver from 6 runners → 6 × 5 = 30.
      Sample combination story: 2 toppings from 6 → 15. Yours can be totally
      different — run the swap test on your own story to check it!
  89. P(5, 3) = 60 and C(5, 3) = 10 — exactly 6 times bigger, because every
      unordered group gets scrambled into 3! = 6 different orders.
  90. 5 × C(4, 2) = 5 × 6 = 30 ways.

Challenge

  91. P(8, 3) = 336 and C(8, 3) = 56, and 336 ÷ 56 = 6 — exactly 3!. Every
      committee of 3 can be assigned to the three offices in 3! = 6 ways, so
      the officer count is exactly 6 times the committee count. The ratio
      could never be anything else!
  92. The newcomer shakes 8 hands (one per old-timer), so 8 new handshakes;
      new total 28 + 8 = 36 = C(9, 2). Always works: person n+1 adds exactly
      n handshakes to the old total, so C(n+1, 2) = C(n, 2) + n.
  93. One round: C(6, 2) = 15 games — Tigers-host-Lions IS Lions-visit-Tigers,
      same game. Home-and-away: 30 games — now Tigers@home vs Lions@home are
      DIFFERENT games, so order matters: P(6, 2) = 6 × 5 = 30.
  94. C(10, 2) = 45 — that's under 50, ad fails. C(11, 2) = 55 — over 50, ad
      true! They need at least 11 toppings.
  95. Glue Ana and Ben into one block: 4 things to line up → 4! = 24. The block
      flips (Ana-Ben or Ben-Ana): × 2. Total 48 arrangements.
  96. Always! C(n, 2) = P(n, 2) ÷ 2! and 2! = 2, so the combination is exactly
      half the permutation every single time. Bonus: C(n, 3) is 1/6 of
      P(n, 3), since 3! = 6.
  97. Glue the 2 favorites into a block: 5! = 120 arrangements × 2 flip-orders
      = 240 favorable. Total: 6! = 720. So P = 240/720 = 1/3. ✅
  98. 4 × C(6, 3) = 4 × 20 = 80 ways. Sample story: "Pick 1 captain from
      5 players and 2 helpers from 4 others" → 5 × C(4, 2) = 30.
  99. Repeats allowed: 10 × 10 × 10 = 1,000 codes. No repeats:
      10 × 9 × 8 = 720. It's a permutation lock because order matters —
      1-2-3 and 3-2-1 open nothing alike. A TRUE combination lock wouldn't
      care about the order of its digits!
  100. Both roads meet at 60! (a) 6 × C(5, 2) = 6 × 10 = 60.
      (b) C(6, 2) × 4 = 15 × 4 = 60. They must agree because both count the
      exact same final results — one president plus two welcomers — just
      built in a different order. Two honest counts of the same thing can
      never disagree. That's one of the deepest ideas in all of counting.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems — especially the backwards puzzles and the design challenges — you truly understand the difference between permutations and combinations. The next time someone says "there are a million possibilities!", you won't just take their word for it. You'll count them. Great work!
