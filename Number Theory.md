Number Theory — A Complete Lesson (Honors Edition)
══════════════════════════════════════════════════


Welcome! Here's What You'll Learn
─────────────────────────────────

        84 = 2² × 3 × 7
        GCF(12x²y, 18xy²) = 6xy
        f(36) = 9   ←  the factor-counting function

Those three lines are number theory in action — the study of whole numbers and the hidden patterns inside them. The first line breaks a number into its prime building blocks. The second finds the greatest common factor of two ALGEBRAIC expressions (yes, variables have fingerprints too). The third uses function notation to say "36 has exactly 9 factors" — and by the end of this lesson you'll compute f of any number in seconds, without listing a single factor.

You may have met the basic version of this material: divisibility rules, prime factorization, GCF and LCM. This honors edition keeps those foundations but rebuilds everything at algebra level. That means three upgrades:

  · We PROVE the rules instead of just using them. Why does the digit-sum test work? You'll see it proven with nothing but distribution.
  · Variables move in. GCFs of expressions like 12x²y, fractions with x in the denominator, and equations that divisibility helps us solve.
  · Problems run backwards. Not "how many factors does 24 have?" but "find the SMALLEST number with exactly 8 factors."

Why do people care? Because number theory is the math behind simplifying fractions in one step, clearing denominators in equations, splitting things into fair groups, and figuring out when repeating events line up. And the prime numbers you'll master are so powerful that giant versions of them protect every password and credit card on the internet — using Euclid's algorithm, which you will learn, prove, and run in reverse.

In this lesson, you will:

  1. Prove the divisibility rules with place-value algebra — including 8 and the amazing 11
  2. Test primality with the square-root proof, and see Euclid's proof that primes never run out
  3. Master prime fingerprints, exponent laws, and the factor function f(n) — forwards AND backwards
  4. Find GCFs of numbers and variables, then use them to factor polynomials and simplify fractions
  5. Run Euclid's algorithm, prove why it works, and reverse it to unlock Bézout's identity
  6. Find LCMs with variables, clear fractions from equations, and solve GCF-LCM systems
  7. Learn the classic mistakes — including the three-number trap — so you never make them
  8. Practice with 100 problems at the end, with a fully worked answer key!

How to use this lesson: Read the sections in order — each one is built on the one before it, and every new term is defined the moment it appears. Every worked example shows EVERY step, with a short reason for each move. Keep a pencil and paper next to you, and try every "Your Turn" box before reading its answer. Ready? Let's go!


─────────────────────────────────────────────
Lesson 1: Place-Value Algebra + Proving the Divisibility Rules
─────────────────────────────────────────────

📌 Key idea of this section:

        A number is a SUM of digit × place value:  253 = 2×100 + 5×10 + 3.
        Rewrite that sum with distribution, and the divisibility rules prove themselves.

Sixty-second refresher, as promised. A factor divides a number exactly: 7 is a factor of 84 because 84 = 7 × 12 with no leftovers. A multiple comes from multiplying: 84 is a multiple of 7 for the same reason. Factors fit inside; multiples grow outside. Done!

Now the honors upgrade. In this course we never just USE a rule — we prove it. The master key to every divisibility proof is writing a number as a sum of its digits times place values:

        253 = 2×100 + 5×10 + 3

The rule for 9, proven

Claim: a number is divisible by 9 exactly when its digit sum is divisible by 9. Watch 231 split apart:

        231 = 2×100 + 3×10 + 1                place-value expansion
            = 2×(99 + 1) + 3×(9 + 1) + 1      because 100 = 99 + 1 and 10 = 9 + 1
            = 2×99 + 2 + 3×9 + 3 + 1          distribute: a×(b + c) = a×b + a×c
            = (2×99 + 3×9) + (2 + 3 + 1)      regroup: multiples of 9 in front
            = 9×(2×11 + 3×1) + 6              factor 9 out of the first group

Read the last line carefully: 231 equals a multiple of 9, PLUS its own digit sum (6). The first chunk is divisible by 9 no matter what, so 231 is divisible by 9 EXACTLY when its digit sum is. Here 6 is not divisible by 9, so 231 isn't either — but it IS divisible by 3, because 99 and 9 are multiples of 3 too, so the very same proof gives the 3-rule for free. One proof, two rules!

The rules for 4 and 8, proven

Any number splits into "whole hundreds" plus its last two digits, and 100 = 4 × 25, so the hundreds part is always divisible by 4. Only the last two digits get a vote:

        316 = 3×100 + 16 = 4×(3×25) + 16 → 16 = 4×4 → YES ✅
        530 = 5×100 + 30 = 4×(5×25) + 30 → 30 ÷ 4 leaves 2 → NO ❌

For 8, go one digit deeper: 1000 = 8 × 125, so every whole thousand is divisible by 8, and only the last THREE digits vote:

        4,128 → look at 128 → 128 = 8 × 16 → YES ✅

The rule for 11, proven (negative numbers enter the story)

This time rewrite the place values with 11 in mind — and notice that 10 is one LESS than 11, while 100 is one MORE than 99:

        253 = 2×100 + 5×10 + 3
            = 2×(99 + 1) + 5×(11 − 1) + 3     100 = 99 + 1, but 10 = 11 − 1
            = 2×99 + 2 + 5×11 − 5 + 3         distribute (watch the minus sign!)
            = (2×99 + 5×11) + (2 − 5 + 3)     multiples of 11 in front
            = (a multiple of 11) + 0

The leftover piece is exactly the zigzag sum: first digit MINUS second, PLUS third. (For four digits it alternates a − b + c − d, because 1000 = 11×91 − 1.) A number is divisible by 11 exactly when its zigzag sum is a multiple of 11 — and remember, the multiples of 11 include 0, 11, −11, 22, −22, ...

        319  → 3 − 1 + 9 = 11      → YES ✅   (319 = 11 × 29)
        1,903 → 1 − 9 + 0 − 3 = −11 → YES ✅   (1903 = 11 × 173)
        245  → 2 − 4 + 5 = 3       → NO  ❌

Unknown digits: divisibility meets equations

Here is where honors algebra walks in. Problem: find every digit d that makes 4d2 divisible by 3.

        digit sum = 4 + d + 2 = d + 6
        need: d + 6 divisible by 3, where d is a digit (0 through 9)
        so d + 6 could be 6, 9, 12, or 15 — the multiples of 3 a digit can reach

        d + 6 = 6   →  d = 0      subtract 6 from both sides
        d + 6 = 9   →  d = 3      same move
        d + 6 = 12  →  d = 6
        d + 6 = 15  →  d = 9

Four answers: d ∈ {0, 3, 6, 9}. Check one: 462 = 3 × 154 ✅. Notice what just happened — a divisibility question turned into a tiny EQUATION, solved the same way every time. The symbol ∈ means "is a member of the set," by the way; you'll see it again.

The digit machine: 10a + b

Every two-digit number with tens digit a and ones digit b equals 10a + b. (Example: 54 = 10×5 + 4.) That tiny formula cracks a classic puzzle.

Puzzle: a two-digit number is 6 times the sum of its digits. Find it.

        10a + b = 6(a + b)        translate the words into algebra
        10a + b = 6a + 6b         distribute on the right side
        10a − 6a = 6b − b         subtract 6a and subtract b from BOTH sides
        4a = 5b                   simplify each side

Now think like a number theorist. The equation 4a = 5b says 4a is a multiple of 5. Since 4 and 5 share no factor (their GCF is 1), the 5 has nowhere to hide: a itself must be a multiple of 5. But a is a digit from 1 to 9, so a = 5 — and then 4×5 = 5b gives b = 4.

        The number is 54.  Check: digit sum = 5 + 4 = 9, and 6 × 9 = 54 ✅

✏️ Your Turn

  1. Is 4,128 divisible by 8? By 11?
  2. Find every digit d that makes 4d4 divisible by 9.

Answers: 1. Last three digits: 128 = 8 × 16 → YES for 8. Zigzag: 4 − 1 + 2 − 8 = −3, not a multiple of 11 → NO for 11. 2. Digit sum = 4 + d + 4 = d + 8. Need d + 8 divisible by 9: d + 8 = 9 gives d = 1; d + 8 = 18 gives d = 10, which is not a digit — rejected. So d = 1, the number is 414, and 414 = 9 × 46 ✅.


─────────────────────────────────────────────
Lesson 2: Prime Hunting — The Square-Root Proof
─────────────────────────────────────────────

📌 Key idea of this section:

        If n is composite, some prime ≤ √n divides it.
        So the test list ends where p² > n — and we can PROVE why.

Quick refresher: a prime number has exactly two factors, 1 and itself (7 = 1 × 7 and nothing else). A composite number has more (12 = 3 × 4). The number 1 is neither — it has only one factor — and 2 is the only even prime, since every other even number already has 2 as a factor.

The trap composites still lurk, and they've recruited bigger friends: 91 = 7 × 13, 119 = 7 × 17, 133 = 7 × 19, 161 = 7 × 23, 187 = 11 × 17, 221 = 13 × 17. Every one of them looks prime. Guessers get caught — detectives prove.

The key theorem: a composite number can't hide its factors past √n

Recall that √n (the square root of n) is the number that multiplies by itself to give n: √81 = 9 because 9 × 9 = 81. Now the claim.

Claim: if n is composite, then some prime p ≤ √n divides n.

Proof, with every step earning its place:

  1. n is composite, so n = a × b with 1 < a ≤ b. (That's the definition of composite; call the smaller partner a.)
  2. Suppose — just to see what happens — that a > √n. Then b ≥ a > √n as well, since b is the bigger partner.
  3. Multiplying the inequalities: a × b > √n × √n = n. Two factors each bigger than √n must multiply to more than n.
  4. But a × b = n exactly. Step 3 says a × b > n and step 1 says a × b = n — contradiction! Our supposition in step 2 is impossible, so a ≤ √n.
  5. Now, the smallest factor of n that's bigger than 1 is always prime. Why? If it split into smaller pieces, one piece would be an even SMALLER factor of n — contradicting "smallest." Apply this to a: some prime p ≤ a divides a, and anything dividing a also divides n = a × b.
  6. Conclusion: p ≤ a ≤ √n, and p divides n. That finishes the proof. ∎

That little square ∎ is the mathematician's "ta-da, proof complete" symbol. And here is the flip side of the theorem, which is the entire prime test: if NO prime ≤ √n divides n, then n cannot be composite — so n is prime.

How far must you check?

  · n < 100: √n < 10 (because 10 × 10 = 100), so checking 2, 3, 5, 7 is enough — the next prime, 11, already has 11² = 121 > 99.
  · n < 289: the next prime past 13 is 17, and 17² = 289. So for any number under 289, checking 2, 3, 5, 7, 11, 13 settles it. (13² = 169, which is why 13 makes the list.)

Worked example: is 199 prime? First estimate the root: 14² = 196 and 15² = 225, so √199 is between 14 and 15. We check primes up through 13.

  · By 2?  199 is odd. No.
  · By 3?  1 + 9 + 9 = 19, not a multiple of 3. No.
  · By 5?  Doesn't end in 0 or 5. No.
  · By 7?  199 = 7×28 + 3. No.
  · By 11? 199 = 11×18 + 1. No.
  · By 13? 199 = 13×15 + 4. No.
  · By 17? Stop — 17² = 289 > 199, so 17 is past the square root. Done.

Nothing in range divides it. 199 is PRIME — proved, not guessed. ✅

Euclid's masterpiece: the primes never run out

Around 300 BC, Euclid proved there are infinitely many primes, with one of the most famous proofs in history. Suppose — just to watch it collapse — that the complete list of primes were finite: p₁, p₂, ..., up to some last one. Now build this number:

        N = (p₁ × p₂ × ... × every prime on the list) + 1

N is bigger than 1, so by step 5 of our theorem, some prime q divides N. That prime q must be on the list (the list was supposed to be ALL primes). But then q divides the big product — and it also divides N. A number that divides both must divide their difference, which is N − product = 1. No prime divides 1. Contradiction! The finite list is impossible, so the primes go on forever. ∎

Try the construction on tiny lists: from {2, 3, 5} we get 2×3×5 + 1 = 31 — a brand-new prime. From {2, 3, 5, 7, 11, 13} we get 30031, and it turns out that 30031 = 59 × 509 — two primes that were NOT on the list. The machine always produces new primes, whether N itself is prime or not. (You'll meet Euclid again in Lesson 5, with an even more practical trick.)

✏️ Your Turn

Is 173 prime? Is 143? Estimate the square root first, then run the checks.

Answers: 173 — since 13² = 169 and 14² = 196, √173 is between 13 and 14, so check 2, 3, 5, 7, 11, 13. Odd; 1+7+3 = 11 (no 3); doesn't end in 0/5; 173 = 7×24 + 5; 173 = 11×15 + 8; 173 = 13×13 + 4. Nothing works → 173 is PRIME. 143 — check the same list: odd; 1+4+3 = 8 (no 3); not 5; 143 = 7×20 + 3 (no 7); but 143 = 11 × 13 exactly → COMPOSITE, caught by 11.


─────────────────────────────────────────────
Lesson 3: Fingerprints, Exponent Laws, and the Factor Function f(n)
─────────────────────────────────────────────

📌 Key ideas of this section:

        Every number breaks into primes in EXACTLY ONE way.   84 = 2² × 3 × 7
        f(n) = the number of factors of n = (exponent + 1)s multiplied.  f(84) = 12

The fingerprint, refreshed

Smash any number into primes by dividing out the smallest prime that fits, over and over:

        84 ÷ 2 = 42
        42 ÷ 2 = 21
        21 ÷ 3 = 7
         7 ÷ 7 = 1   ←  reaching 1 means you're done

Count the divisions: two 2s, one 3, one 7. So 84 = 2² × 3 × 7. This prime fingerprint is unique — the Fundamental Theorem of Arithmetic guarantees that no other number has the same one, and 84 has no other. (This is why 1 is not allowed to be prime: if it were, 6 = 2 × 3 and 6 = 1⁵ × 2 × 3 would be "different" fingerprints, and the theorem would break.)

Exponent laws: the three rules fingerprints run on

Since fingerprints are made of powers, let's make the power rules official. Each one is just counting:

  · Multiplying same-base powers — add exponents:  aᵐ × aⁿ = aᵐ⁺ⁿ
        2³ × 2² = (2×2×2) × (2×2) = 2⁵   (three 2s, then two more: 3 + 2 = 5)
  · A power of a power — multiply exponents:  (aᵐ)ⁿ = aᵐⁿ
        (2²)³ = 2² × 2² × 2² = 4 × 4 × 4 = 64 = 2⁶   (three groups of two 2s)
  · Dividing same-base powers — subtract exponents:  aᵐ ÷ aⁿ = aᵐ⁻ⁿ
        2⁵ ÷ 2² = 32 ÷ 4 = 8 = 2³   (five 2s on top, two cancel below: 5 − 2 = 3)

The factor-counting machine, now with function notation

Here is a definition we'll use all lesson long:

        f(n) = the number of factors of n.   Example: f(7) = 2, because 7 has 1 and 7.

This is a FUNCTION: you feed it a number n, and it hands you back one answer. (Function notation f(n) just names the machine f and the input n.) Now, how does the machine compute f(84) without listing anything? Every factor of 84 is built from 84's own primes — that's the only inventory. To build a factor, you make three choices:

  · How many 2s?  0, 1, or 2   → 3 choices
  · How many 3s?  0 or 1       → 2 choices
  · How many 7s?  0 or 1       → 2 choices

Choosing "one 2, no 3s, one 7" builds 2 × 7 = 14 — a factor of 84. Every choice builds a factor, and every factor comes from a choice, so the counts multiply:

        f(84) = 3 × 2 × 2 = 12

Verify by listing: 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84. Count them: 12! ✅ The rule in one line: add 1 to each exponent, then multiply. The +1 is the "choose none" option — easy to forget, fatal to skip.

Running the machine BACKWARDS

Honors questions love reverse gear. Problem: find the SMALLEST number with exactly 6 factors.

        We need f(n) = 6.  How can (exponent + 1)s multiply to 6?
        6 = 6           → fingerprint shape p⁵        (one prime, exponent 5)
        6 = 3 × 2       → fingerprint shape p² × q    (two primes, exponents 2 and 1)

Now build the smallest number of each shape, using the smallest primes, biggest exponent on the smallest prime:

        p⁵:      2⁵ = 32
        p² × q:  2² × 3 = 12

32 loses, 12 wins. Answer: 12 — check by listing: 1, 2, 3, 4, 6, 12. Six factors ✅. The two-step strategy (factor the COUNT first, then race the shapes) solves every backwards problem in this lesson.

Perfect squares: the odd-factor-count theorem

When is f(n) ODD? Only when every (exponent + 1) is odd — which means every exponent is even — which means n is a perfect square! Here's the "why" with algebra. Factors come in pairs: whenever d is a factor of n, so is its partner n ÷ d, and the pair multiplies to n. Two cases:

  · n is NOT a square: then d ≠ n ÷ d always (equality would mean d × d = n), so every factor has a DIFFERENT partner → the factors pair up cleanly → f(n) is even.
  · n IS a square, say n = k²: the factor k is its own partner (k × k = n), so one factor sits unpaired while the rest pair off → f(n) is odd.

Example: 36 = 6² has f(36) = (2+1)(2+1) = 9 factors, and 6 pairs with itself. Keep this in your pocket — a certain locker mystery in the challenge problems depends on it.

One more square trick. Problem: find the smallest k that makes 72 × k a perfect square.

        72 = 2³ × 3²             fingerprint first
        exponents: 3 is ODD, 2 is even
        a square needs ALL exponents even
        so supply one more 2:  k = 2

        Check: 72 × 2 = 144 = 2⁴ × 3² = (2² × 3)² = 12² ✅

Bonus: the factor-ADDING machine

If f(n) counts the factors, call g(n) the function that ADDS them. There's a machine for that too, and it runs on pure distribution. For 12 = 2² × 3:

        g(12) = (1 + 2 + 4) × (1 + 3) = 7 × 4 = 28

Why does the product work? Distribute it out — every factor of 12 appears exactly once:

        (1 + 2 + 4)(1 + 3) = 1×1 + 2×1 + 4×1 + 1×3 + 2×3 + 4×3
                           = 1 + 2 + 4 + 3 + 6 + 12 = 28 ✅

Each group in parentheses is "all the powers of one prime." Multiplying the groups builds every possible choice — the same menu logic as the counting machine, one level up.

A beautiful payoff: a PERFECT NUMBER is one whose factors (other than itself) add up to the number itself. For 28 = 2² × 7:

        g(28) = (1 + 2 + 4) × (1 + 7) = 7 × 8 = 56 = 2 × 28

The machine counted ALL the factors including 28, and got exactly double — so the proper factors sum to 28 itself (1 + 2 + 4 + 7 + 14 = 28). Perfect! The Greeks knew four perfect numbers: 6, 28, 496, and 8128. They all come from primes of the form 2ᵖ − 1 (like 7 = 2³ − 1 and 31 = 2⁵ − 1), and whether infinitely many exist is still an unsolved mystery.

✏️ Your Turn

  1. Compute f(60) with the machine — no listing allowed.
  2. Find the smallest number with exactly 4 factors. (Hint: 4 = 4 gives shape p³; 4 = 2 × 2 gives shape p × q.)

Answers: 1. 60 = 2² × 3 × 5, so f(60) = (2+1)(1+1)(1+1) = 3 × 2 × 2 = 12. 2. Shape p³ starts at 2³ = 8; shape p × q starts at 2 × 3 = 6. Winner: 6 (factors 1, 2, 3, 6) ✅.


─────────────────────────────────────────────
Lesson 4: GCF — Numbers, Variables, and Factoring Polynomials
─────────────────────────────────────────────

📌 Key idea of this section:

        GCF = shared primes, with the SMALLER supply of each.
        Variables are just new "primes": GCF(12x²y, 18xy²) = 6xy.

The greatest common factor of two numbers is the biggest number that divides both exactly. (Its other name is the GCD — greatest common divisor. Same thing, two costumes.) The fingerprint recipe: write both numbers as primes, collect only the primes they SHARE, taking the smaller supply of each:

        36 = 2² × 3²        60 = 2² × 3 × 5
        GCF(36, 60) = 2² × 3 = 12 ✅

(The 5 belongs to 60 alone — not shared, so it stays out.) Three numbers at once? "Shared" just has to mean shared by ALL THREE:

        24 = 2³ × 3         36 = 2² × 3²        60 = 2² × 3 × 5

  · The prime 2: supplies are 2³, 2², 2² → smallest is 2²
  · The prime 3: supplies are 3¹, 3², 3¹ → smallest is 3¹
  · The prime 5: missing from 24 and 36 → out!

        GCF(24, 36, 60) = 2² × 3 = 12 ✅

Variables join the party

Here's the honors leap: a variable power like x² is just x × x, and x behaves exactly like an unknown prime. Fingerprints work the same way — smallest supply wins:

        12x²y = 2² × 3 × x² × y         18xy² = 2 × 3² × x × y²

  · Prime 2: supplies 2² and 2¹ → take 2¹
  · Prime 3: supplies 3¹ and 3² → take 3¹
  · Prime x: supplies x² and x¹ → take x¹
  · Prime y: supplies y¹ and y² → take y¹

        GCF(12x²y, 18xy²) = 2 × 3 × x × y = 6xy ✅

Job 1: factoring out the GCF (distribution in reverse)

Distribution says a(b + c) = ab + ac. Read it right-to-left and it becomes FACTORING: pull the shared piece out front. This is one of the most-used moves in all of algebra, and the GCF is the tool that finds the piece.

Factor 12x² + 18x:

        fingerprint each term:  12x² = 2²×3×x²    18x = 2×3²×x
        GCF of the two terms:   2 × 3 × x = 6x    (shared, smaller supply)
        divide each term by 6x: 12x² ÷ 6x = 2x    18x ÷ 6x = 3

        12x² + 18x = 6x(2x + 3)

        Check by distributing back: 6x × 2x = 12x² and 6x × 3 = 18x ✅

Job 2: simplifying algebraic fractions

Same GCF, new costume. To simplify 12x²/18x, divide top and bottom by their GCF, which is 6x:

        12x² / 18x = (6x × 2x) / (6x × 3) = 2x/3     (valid for x ≠ 0)

The condition x ≠ 0 matters: the original fraction has division by x, and dividing by zero is banned from mathematics — so we note the restriction and move on.

The combination lemma (small now, huge in Lesson 5)

One last idea, stated with letters and proved in four steps. Claim: if d divides a and d divides b, then d divides every combination m×a + n×b, for any whole numbers m and n.

  1. d divides a means a = d × r for some whole number r. (Definition of "divides.")
  2. d divides b means b = d × s for some whole number s. (Same definition.)
  3. Substitute: m×a + n×b = m×(d×r) + n×(d×s) = d×(m×r + n×s). (Factor d out — distribution in reverse!)
  4. The result is d times a whole number, so d divides it. ∎

In words: anything that divides two numbers also divides their sum, their difference, and any "mix" of the two. Hold onto this — it's the entire engine of the next lesson.

Relatively prime: sharing nothing

Two numbers with GCF 1 are called RELATIVELY PRIME — they share no prime factors at all. Careful: they don't have to BE prime! GCF(8, 9) = 1, and neither 8 nor 9 is prime. "Relatively prime" describes the RELATIONSHIP, not the numbers themselves.

✏️ Your Turn

  1. Find GCF(12x², 30xy) with fingerprints.
  2. Factor out the GCF: 10x² − 15x.

Answers: 1. 12x² = 2²×3×x² and 30xy = 2×3×5×x×y. Shared: one 2, one 3, one x → GCF = 6x. 2. GCF of the terms: 10x² = 2×5×x², 15x = 3×5×x → 5x. Divide each term by 5x: 10x² ÷ 5x = 2x, and −15x ÷ 5x = −3. So 10x² − 15x = 5x(2x − 3). Check: 5x × 2x = 10x² and 5x × (−3) = −15x ✅.


─────────────────────────────────────────────
Lesson 5: Euclid's Algorithm — Proven, and Run in Reverse
─────────────────────────────────────────────

📌 Key idea of this section:

        GCF(big, small) = GCF(small, remainder). Repeat until the remainder is 0.
        Then run the steps BACKWARDS to write the GCF as a combination of the two numbers.

The fingerprint method has one weakness: you have to factor both numbers first. What if the numbers are big and stubborn? Enter one of the oldest algorithms on Earth — and this time, we prove it before we use it.

Why it works (the proof)

Setup: divide a by b and write the result in the standard form

        a = b × q + r        (q is the quotient, r is the remainder, 0 ≤ r < b)

Example to keep in view: 84 = 48 × 1 + 36. Now the claim: GCF(a, b) = GCF(b, r). The proof uses the combination lemma from Lesson 4, in both directions:

  1. Any common factor of b and r also divides b × q + r (a combination of b and r).
  2. But b × q + r IS a. So every common factor of b and r divides a as well — meaning every common factor of (b, r) is a common factor of (a, b).
  3. Now the other direction. Solve the setup equation for r:  r = a − b × q.
  4. Any common factor of a and b also divides a − b × q (again a combination!), and that combination IS r. So every common factor of (a, b) is a common factor of (b, r).
  5. Steps 2 and 4 say the two pairs have EXACTLY THE SAME common factors. If the lists are identical, their greatest members must match: GCF(a, b) = GCF(b, r). ∎

And that's the whole algorithm: swap (big, small) for (small, remainder), repeat until the remainder hits 0, and the last nonzero remainder is the GCF.

The algorithm, flowing

        84 = 48 × 1 + 36
        48 = 36 × 1 + 12
        36 = 12 × 3 + 0    →    GCF(84, 48) = 12 ✅

Three divisions, zero factoring. Fingerprint check: 84 = 2² × 3 × 7 and 48 = 2⁴ × 3 → shared 2² × 3 = 12. Euclid agrees. ✅

One more, bigger: GCF(252, 198).

        252 = 198 × 1 + 54
        198 = 54 × 3 + 36
         54 = 36 × 1 + 18
         36 = 18 × 2 + 0    →    GCF = 18 ✅

Fingerprint check: 252 = 2² × 3² × 7 and 198 = 2 × 3² × 11 → shared 2 × 3² = 18. Two methods, one answer — always reassuring.

The reverse gear: Bézout's identity

Now for the honors superpower. Read the Euclid lines for (84, 48) BACKWARDS to express the GCF as a combination of 84 and 48:

        12 = 48 − 36 × 1             from the middle line, solved for 12
           = 48 − (84 − 48 × 1)      substitute 36 = 84 − 48 × 1 (top line)
           = 48 − 84 + 48            distribute the minus sign
           = 2 × 48 − 1 × 84         collect like terms

        Check: 2 × 48 − 84 = 96 − 84 = 12 ✅

So 12 = 2×48 + (−1)×84 — the GCF is written as a whole-number COMBINATION of the two original numbers (negative coefficients allowed!). This fact is called Bézout's identity: GCF(a, b) can always be written as m×a + n×b for some integers m and n. It looks like a party trick, but it's the beating heart of internet security: the codes that protect messages start by finding exactly these combinations, with Euclid's algorithm, on gigantic numbers.

A word from history

This procedure appeared in Euclid's book Elements around 300 BC — over 2,300 years ago — making it possibly the oldest algorithm still in daily use. Every secure connection your computer makes today re-runs it thousands of times. Not bad for a geometry teacher from ancient Alexandria.

✏️ Your Turn

  1. Use Euclid's algorithm to find GCF(90, 126). Show every line.
  2. Now reverse it: write your answer as a combination m × 90 + n × 126.

Answers:
  1. 126 = 90 × 1 + 36;  90 = 36 × 2 + 18;  36 = 18 × 2 + 0  →  GCF = 18.
  2. From the middle line: 18 = 90 − 36 × 2. From the top line: 36 = 126 − 90 × 1.
     Substitute: 18 = 90 − (126 − 90) × 2 = 90 − 2×126 + 2×90 = 3×90 − 2×126.
     Check: 3×90 − 2×126 = 270 − 252 = 18 ✅
     (Fingerprint confirmation: 90 = 2 × 3² × 5 and 126 = 2 × 3² × 7 → shared 2 × 3² = 18.)


─────────────────────────────────────────────
Lesson 6: LCM — Variables, Fraction-Clearing, and the Multiplication Trick
─────────────────────────────────────────────

📌 Key ideas of this section:

        LCM = ALL primes, with the BIGGER supply of each.   LCM(12, 18) = 2² × 3² = 36
        The trick: GCF(a, b) × LCM(a, b) = a × b  —  and we can PROVE it.

The least common multiple of two numbers is the smallest number both divide into. The fingerprint recipe is the opposite of the GCF one: take every prime that appears in EITHER number, with the bigger supply:

        12 = 2² × 3         18 = 2 × 3²
        LCM(12, 18) = 2² × 3² = 36 ✅

GCF takes shared-and-small; LCM takes all-and-big. Say it until it's automatic. Three numbers at once — "all primes" now means from any of the three:

        4 = 2²        6 = 2 × 3        10 = 2 × 5
        LCM(4, 6, 10) = 2² × 3 × 5 = 60 ✅

Check: 60 ÷ 4 = 15, 60 ÷ 6 = 10, 60 ÷ 10 = 6 — all clean, and nothing smaller works.

LCM with variables

Same recipe, variables included — take the bigger supply of every prime AND every variable:

        12x² = 2² × 3 × x²         18x = 2 × 3² × x
        LCM(12x², 18x) = 2² × 3² × x² = 36x² ✅

That answer is the least common DENOMINATOR when you add fractions like these:

        1/(6x) + 1/(8x) = ?

        LCM of the denominators:  6x = 2×3×x, 8x = 2³×x  →  2³×3×x = 24x
        rebuild each fraction:    1/(6x) = 4/(24x)        (multiply top and bottom by 4)
                                  1/(8x) = 3/(24x)        (multiply top and bottom by 3)
        add the tops:             4/(24x) + 3/(24x) = 7/(24x) ✅

The multiplication trick — with a real proof this time

Take 12 and 18: GCF = 6, LCM = 36. Now:

        GCF × LCM = 6 × 36 = 216         12 × 18 = 216

Equal! And here's WHY it always works, prime by prime. Suppose the prime 2 appears in a with exponent m and in b with exponent n. Then:

  · in the GCF, prime 2 gets exponent min(m, n)  — the smaller supply
  · in the LCM, prime 2 gets exponent max(m, n)  — the bigger supply
  · in the product GCF × LCM, prime 2 gets exponent min(m, n) + max(m, n)  — by the exponent-addition law
  · in the product a × b, prime 2 gets exponent m + n  — same law

And min(m, n) + max(m, n) = m + n, because the smaller one plus the bigger one is just both of them added. Every prime in sight gets the same exponent on both sides, so:

        GCF(a, b) × LCM(a, b) = a × b   ∎

So if you know any three of GCF, LCM, a, b, you can find the fourth with one multiplication and one division. Warning, though: this trick is for TWO numbers only — Lesson 7 shows it exploding on three.

LCM clears fractions from equations

Here's a power move you'll use for years. When an equation has fractions, multiply BOTH sides by the LCM of the denominators — every denominator divides into it, so every fraction vanishes.

Solve:  x/2 + x/3 = 10

        LCM(2, 3) = 6, so multiply both sides by 6:
        6 × (x/2 + x/3) = 6 × 10        same move on both sides keeps it balanced
        6 × x/2 + 6 × x/3 = 60          distribute on the left
        3x + 2x = 60                    each denominator divides into 6 and cancels
        5x = 60                         combine like terms
        x = 12                          divide both sides by 5

        Check: 12/2 + 12/3 = 6 + 4 = 10 ✅

And one with variables on BOTH sides — the full honors workout:

Solve:  (2/3)x + 4 = (1/2)x + 7

        LCM(3, 2) = 6, multiply both sides by 6:
        6 × (2/3)x + 6 × 4 = 6 × (1/2)x + 6 × 7     distribute on BOTH sides
        4x + 24 = 3x + 42                            fractions cleared
        4x − 3x = 42 − 24                            subtract 3x and 24 from both sides
        x = 18                                       simplify

        Check: (2/3)×18 + 4 = 12 + 4 = 16, and (1/2)×18 + 7 = 9 + 7 = 16 ✅

GCF-LCM systems: two facts, two unknowns

A SYSTEM of equations is two (or more) facts about unknown numbers, solved together. Number theory serves up beautiful ones. Problem: two numbers have GCF 6 and LCM 36. Find ALL possible pairs.

  1. The GCF is 6, so both numbers are multiples of 6. Write a = 6m and b = 6n, where m and n share NO factor (any factor they shared would inflate the GCF past 6). So GCF(m, n) = 1.
  2. Use the multiplication trick: a × b = GCF × LCM = 6 × 36 = 216.
  3. Substitute: (6m)(6n) = 216 → 36mn = 216 → mn = 6. (Divide both sides by 36.)
  4. Factor pairs of 6: (1, 6) and (2, 3). Both pairs are relatively prime ✅.
  5. Translate back: (a, b) = (6×1, 6×6) = (6, 36), or (6×2, 6×3) = (12, 18).

        Check (6, 36):  GCF = 6, LCM = 36 ✅
        Check (12, 18): GCF = 6, LCM = 36 ✅   (from the start of this very lesson!)

Two answers, both correct — and the relatively-prime condition in step 1 is what keeps impostors out.

The leftover twist, upgraded to a formula

Classic puzzle: a pile of cookies leaves 3 left over whether counted in groups of 8 or groups of 12. What are ALL the possibilities?

        If the count is n, then n − 3 divides evenly by both 8 and 12
        so n − 3 is a common multiple of 8 and 12
        LCM(8, 12) = 24, so n − 3 = 24 × k for some whole number k

        n = 24k + 3     ←  EVERY answer, in one formula

        k = 0 → 3      k = 1 → 27      k = 2 → 51      k = 3 → 75      k = 4 → 99

The answers form an arithmetic sequence — same gap of 24 every time — and the gap is exactly the LCM. The two-digit answers are 27, 51, 75, 99.

Sanity-check inequalities

Finally, some inequalities that catch wrong answers instantly. For any positive a and b:

        GCF(a, b) ≤ the smaller of a, b ≤ the bigger of a, b ≤ LCM(a, b) ≤ a × b

The GCF can't top the smaller number (it has to FIT inside it); the LCM can't sit under the bigger one (the bigger one has to fit inside IT); and the last ≤ comes from the multiplication trick: LCM = (a × b) ÷ GCF, and dividing by the GCF only shrinks a × b — with equality exactly when GCF = 1, i.e., when a and b are relatively prime.

✏️ Your Turn

  1. Find LCM(15, 20) with fingerprints.
  2. Solve with fraction-clearing:  x/4 + x/6 = 5.

Answers: 1. 15 = 3 × 5 and 20 = 2² × 5 → LCM = 2² × 3 × 5 = 60. 2. LCM(4, 6) = 12; multiply both sides by 12: 12 × x/4 + 12 × x/6 = 60 → 3x + 2x = 60 → 5x = 60 → x = 12. Check: 12/4 + 12/6 = 3 + 2 = 5 ✅.


─────────────────────────────────────────────
Lesson 7: Watch Out! Common Mistakes — Honors Edition
─────────────────────────────────────────────

📌 Keep the recipes in sight:

        GCF = shared-and-small. LCM = all-and-big. f(n) = (exponent + 1)s multiplied.
        GCF × LCM = a × b  —  for TWO numbers only!

Mistake 1: Trusting a number's innocent face

91, 119, 133, 143, 161, 187, 221 — every one looks prime, and every one is composite (91 = 7 × 13, 221 = 13 × 17, and so on). Guessing is not a test. Estimate √n, check the primes up to it, and let the proof decide.

Mistake 2: Forgetting the +1 in the factor machine

24 = 2³ × 3 has (3+1)(1+1) = 8 factors — not 3 × 1 = 3. Each exponent gets its +1 BEFORE the multiplication, because "use zero copies of this prime" is a real choice on the menu. Skip it and every count collapses.

Mistake 3: Crossing the two recipes

GCF takes only the SHARED primes with the smaller supply; LCM takes ALL primes with the bigger supply. Cross them and you'll announce something like GCF(12, 18) = 36 — and the sanity chain should scream, because a GCF can never top the smaller number:

        GCF(a, b) ≤ smaller of a, b ≤ bigger of a, b ≤ LCM(a, b)

Mistake 4: "The LCM is just the product"

Only when the numbers are relatively prime! LCM(3, 5) = 15, sure — but LCM(4, 6) = 12, not 24. The full truth lives in the trick: LCM = (a × b) ÷ GCF. The shared factor gets counted twice if you just multiply.

Mistake 5: The three-number trap

This one fools even strong students. The multiplication trick GCF × LCM = a × b is a TWO-number theorem — and it EXPLODES on three:

        GCF(4, 6, 10) = 2        LCM(4, 6, 10) = 60
        GCF × LCM = 2 × 60 = 120        4 × 6 × 10 = 240   ✗ NOT equal!

Why does it break? Look at prime 2: its exponents in 4, 6, 10 are 2, 1, 1. The Lesson 6 proof used min(m, n) + max(m, n) = m + n — but with three exponents, min + max = 2 + 1 = 3, while the full sum is 2 + 1 + 1 = 4. The middle exponent falls out of the proof, and the trick falls with it. Two numbers: min and max capture everything. Three numbers: they don't. For three or more, use the fingerprint recipes directly.

Mistake 6: Dividing by a variable that might be zero

The algebra cousin of Lesson 4's "x ≠ 0" note. Solve x² = 3x. Tempting move: divide both sides by x, get x = 3, done. But x = 0 also works — 0² = 0 and 3 × 0 = 0 — and dividing by x threw that answer away, because division by zero is banned and x might BE zero. The safe move keeps every solution:

        x² = 3x
        x² − 3x = 0            subtract 3x from both sides
        x(x − 3) = 0           factor out the GCF, which is x
        x = 0  or  x − 3 = 0   a product is zero only when one factor is zero
        x = 0  or  x = 3       two answers, both kept ✅

Whenever you reach for "divide by the variable," ask first: could it be zero?

Mistake 7: Sign slips in the Bézout reverse

When you substitute backwards, a minus sign distributes over EVERYTHING in the parentheses. From Lesson 5's Your Turn: 18 = 90 − (126 − 90) × 2 means 90 − 2×126 + 2×90 — note the PLUS 2×90. Write that distribution step out in full; it's one extra line and it saves the whole computation. Then always CHECK the final combo: 3×90 − 2×126 = 270 − 252 = 18 ✅.

Mistake 8: "Relatively prime means prime"

GCF(8, 9) = 1, so 8 and 9 are relatively prime — and neither is prime! The phrase describes the RELATIONSHIP (they share no prime), not the numbers themselves. Two different primes are always relatively prime; two relatively prime numbers don't have to be prime at all.


─────────────────────────────────────────────
Lesson 8: Review — The Big Picture
─────────────────────────────────────────────

📌 Everything, one last time:

        Divisibility: place-value algebra proves the rules —
                      digit sum → 3, 9 · last two digits → 4 · last three → 8
                      zigzag sum → 11
        Prime test:   no prime ≤ √n divides n  →  n is prime. Proof, not guessing.
        f(n):         add 1 to each exponent, multiply. Odd count ⇔ perfect square.
        g(n):         multiply the prime-power sums. Perfect numbers have g(n) = 2n.
        GCF:          shared primes, smaller supply — numbers AND variables.
        LCM:          all primes, bigger supply — clears fractions from equations.
        Euclid:       GCF(big, small) = GCF(small, remainder), proven by the
                      combination lemma — and run BACKWARDS for Bézout.
        Trick:        GCF × LCM = a × b, two numbers only. Proof: min + max = sum.

The recap list

  · Every divisibility rule is place-value algebra in disguise: split the number into digit × place value, rewrite each place value as (multiple + leftover), distribute, regroup, and read off the remainder.
  · An unknown digit hides an equation: making 4d2 divisible by 3 became d + 6 ∈ {6, 9, 12, 15}. Divisibility questions become algebra questions.
  · Every composite has a prime factor at or below √n — so prime tests end where p² > n. And Euclid proved the primes themselves never end.
  · Fingerprints are unique (the Fundamental Theorem of Arithmetic), and they power everything: f(n), g(n), GCF, LCM, factoring polynomials, simplifying algebraic fractions.
  · Backwards problems have a two-step rhythm: factor the COUNT, then race the shapes with the smallest primes.
  · f(n) is odd exactly for perfect squares — because factors pair up, and only a square has a factor paired with itself.
  · Euclid's algorithm needs no factoring at all, its proof is the combination lemma, and its reverse gear writes the GCF as m×a + n×b — Bézout's identity, the trick at the heart of internet security.
  · Systems thinking: if GCF = g and LCM = L, write a = g×m, b = g×n with GCF(m, n) = 1 and mn = L ÷ g. The relatively-prime condition keeps impostors out.
  · Leftover puzzles end in a formula: n = (LCM) × k + leftover — every answer at once, in one line.

The magic sentence (honors remix)

        Primes are the atoms, fingerprints do the work:
        shared-and-small for the GCF, all-and-big for the LCM;
        prove the rules with place value, test primes to the root —
        and when factoring fails, Euclid remains.

Say it out loud three times. Seriously!

Why this matters

You can now PROVE every shortcut you use, count and sum a number's factors without listing them, factor polynomials with the GCF, clear fractions from equations, and run a 2,300-year-old algorithm forwards AND backwards — the same algorithm guarding every secure message on Earth. Number theory also still hides mysteries anyone can state but nobody can solve: is every even number greater than 2 the sum of two primes? (84 = 37 + 47 works... but does it always?) Does an ODD perfect number exist? Nobody knows. The door is open.

Now it's time to prove it — with 100 practice problems! 💪


═════════════════════════════════════════════
Practice Problems
═════════════════════════════════════════════

📌 Keep these next to you while you work:

        Divisibility: digit sum → 3, 9 · last two digits → 4 · last three → 8 · zigzag → 11
        Prime test: check primes p with p² ≤ n — nothing past the root!
        f(n): (exponent + 1)s multiplied · g(n): prime-power sums multiplied
        GCF: shared-and-small · LCM: all-and-big · GCF × LCM = a × b (TWO numbers only!)
        Euclid: (big, small) → (small, remainder) · Bézout: run the lines backwards

Grab a pencil and paper. Start with the easy ones — they use the exact patterns from the lessons. Yellow problems ask you to show full steps; red problems ask you to reason, prove, and design. A few are open-ended: they have more than one right answer. Don't peek at the answer key until you've tried!

Hint for every problem: first ask yourself, "Which tool is this — a divisibility rule, a fingerprint, Euclid, or the trick? And can I run it BACKWARDS?"


🟢 EASY (Problems 1–50)

Problems 1–10 — Divisibility detective! Answer yes or no, and name the rule you used. (Lesson 1)

  1. Is 512 divisible by 4?
  2. Is 234 divisible by 9?
  3. Is 715 divisible by 11?
  4. Is 1,024 divisible by 8?
  5. Is 282 divisible by 6?
  6. Is 350 divisible by 4?
  7. Is 918 divisible by 9?
  8. Is 473 divisible by 11?
  9. Is 5,132 divisible by 8?
  10. Is 690 divisible by 6?

Problems 11–12 — Unknown digits become equations! (Lesson 1)

  11. Find every digit d that makes 3d6 divisible by 9.
  12. Find every digit d that makes 7d2 divisible by 3.

Problems 13–20 — Prime or composite? Estimate √n first, then check the primes up to it. Some of these are masters of disguise! (Lesson 2)

  13. 91
  14. 103
  15. 119
  16. 143
  17. 157
  18. 161
  19. 221
  20. 229

Problems 21–30 — Write the prime factorization. Use exponents when a prime repeats! (Lesson 3)

  21. 48
  22. 72
  23. 90
  24. 120
  25. 144
  26. 168
  27. 180
  28. 216
  29. 252
  30. 300

Problems 31–38 — The factor-counting machine! Compute f(n) with fingerprints — no listing allowed. (Lesson 3)

  31. f(24)
  32. f(45)
  33. f(72)
  34. f(100)
  35. f(90)
  36. f(64)
  37. f(144)
  38. f(360)

Problems 39–44 — Find the GCF: shared primes, smaller supply. Variables are just new primes! (Lesson 4)

  39. GCF(28, 42)
  40. GCF(45, 60)
  41. GCF(48, 84)
  42. GCF(12a, 18a²)
  43. GCF(24x³, 40x)
  44. GCF(14xy², 21x²y)

Problems 45–50 — Find the LCM: all primes, bigger supply. (Lesson 6)

  45. LCM(9, 12)
  46. LCM(14, 21)
  47. LCM(16, 24)
  48. LCM(6x, 9x)
  49. LCM(4x², 6x)
  50. LCM(10a, 15ab)


🟡 INTERMEDIATE (Problems 51–80)

Problems 51–52 — Quick think! Explain your answer in two or three sentences.

  51. True or false — and why: "If GCF(a, b) = 1, then a and b must both be prime."
  52. True or false — and why: "To prove 167 is prime, you also have to check divisibility by 13."

Problems 53–58 — Euclid's algorithm! Divide, keep the remainder, repeat. Show every line. (Lesson 5)

  53. GCF(72, 120)
  54. GCF(96, 156)
  55. GCF(135, 180)
  56. GCF(144, 210)
  57. GCF(161, 203)
  58. GCF(252, 168)

Problems 59–62 — Bézout's identity! Run Euclid, then run it BACKWARDS to write the GCF as m×a + n×b. Check your combo with arithmetic. (Lesson 5)

  59. a = 30, b = 48
  60. a = 24, b = 54
  61. a = 28, b = 44
  62. a = 36, b = 60

Problems 63–66 — The multiplication trick: GCF × LCM = a × b. Find the missing number, then check that your answer really has the stated GCF and LCM. (Lesson 6)

  63. Two numbers have GCF 8 and LCM 48. One number is 16. What is the other?
  64. Two numbers have GCF 6 and LCM 90. One number is 18. What is the other?
  65. Two numbers have GCF 12 and LCM 72. One number is 24. What is the other?
  66. Two numbers have GCF 5 and LCM 60. One number is 20. What is the other?

Problems 67–70 — Clear the fractions! Multiply both sides by the LCM of the denominators, then solve. Show every step and check. (Lesson 6)

  67. x/3 + x/4 = 14
  68. x/2 − x/5 = 6
  69. (3/4)x − 2 = (1/3)x + 8
  70. (2/5)x + 1 = (1/2)x − 2

Problems 71–74 — GCF at algebra work: factor it out, or divide top and bottom by it. (Lesson 4)

  71. Factor out the GCF: 18x² − 12x
  72. Factor out the GCF: 14a²b + 21ab²
  73. Simplify in one step: 24x²/40x   (and note the restriction on x!)
  74. Simplify in one step: 15ab/25a²   (restriction?)

Problems 75–78 — The factor-counting machine, BACKWARDS! Factor the count, race the shapes. (Lesson 3)

  75. What is the SMALLEST number with exactly 8 factors?
      (Hint: 8 = 8, 8 = 4 × 2, and 8 = 2 × 2 × 2 — three shapes to race!)
  76. What is the SMALLEST number with exactly 10 factors?
  77. What is the SMALLEST number with exactly 12 factors?
      (Hint: 12 = 12 = 6 × 2 = 4 × 3 = 3 × 2 × 2 — four shapes!)
  78. What is the SMALLEST ODD number with exactly 6 factors?
      (Hint: odd means the prime 2 is banned — start from 3!)

Problems 79–80 — Unknown digits, harder mode. Set up the equation and solve it. (Lesson 1)

  79. Find the digit d that makes 25d divisible by 11. (Zigzag sum!)
  80. Find every digit d that makes 1d8 divisible by 8.
      (Hint: 1d8 = 108 + 10d. Rewrite 108 = 8×13 + 4 and 10d = 8d + 2d, then ask: what must 2d + 4 be?)


🔴 CHALLENGE (Problems 81–100)

  81. The factor-ADDING machine. Compute g(18), the sum of ALL factors of 18,
      using the prime-power product. Then list the factors to check. (Lesson 3 bonus)
  82. Compute g(20) with the machine, and check by listing.
  83. Find the smallest k that makes 180 × k a perfect square. Prove it with
      fingerprints, and check by writing the square. (Lesson 3)
  84. Find the smallest k that makes 108 × k a perfect square. Same drill.
  85. GCF-LCM system. Two numbers have GCF 4 and LCM 48. Find ALL possible pairs.
      (Lesson 6: write a = 4m, b = 4n with GCF(m, n) = 1, and find mn.)
  86. GCF-LCM system, deluxe. Two numbers have GCF 3 and LCM 90. Find ALL four
      possible pairs. (Factor pairs of 30 — which are relatively prime?)
  87. The leftover formula. A pile of tokens leaves 2 left over whether counted
      in groups of 6 or groups of 10. Write the formula for EVERY possibility,
      then find the smallest THREE-digit possibility.
  88. The three-number trap. Compute GCF(4, 6, 10) × LCM(4, 6, 10) and compute
      4 × 6 × 10. They are NOT equal! Using the exponents of the prime 2
      in 4, 6, and 10, explain exactly where the two-number proof breaks.
      (Lesson 7, Mistake 5)
  89. The locker mystery. Twenty-five lockers, all closed. Twenty-five students
      walk by in order: student 1 toggles EVERY locker, student 2 toggles every
      2nd locker, student 3 toggles every 3rd, and so on. After all 25 pass,
      which lockers are open — and WHY? (Locker n is toggled once per factor
      of n. What kind of number has an ODD factor count?)
  90. Three buses. One leaves every 6 minutes, another every 8 minutes, a third
      every 12 minutes. All three leave together at 8:00. When are the NEXT TWO
      moments all three leave together?
  91. Digit puzzle. A two-digit number equals 7 times the sum of its digits.
      Find ALL such numbers. (Use 10a + b = 7(a + b), simplify, then list every
      digit pair that works — there are four!)
  92. Prove it: GCF(n, n + 1) = 1 for every positive whole number n. Give TWO
      proofs: one running Euclid's algorithm on the pair (n + 1, n), and one
      using the combination lemma on the difference (n + 1) − n.
  93. Prove the 9-rule for a four-digit number. Let the digits be a, b, c, d, so
      the number is 1000a + 100b + 10c + d. Split each place value like Lesson 1
      did (1000 = 999 + 1, and so on) and show the number equals
      (a multiple of 9) + (a + b + c + d).
  94. Bézout, bigger. Find GCF(75, 120) with Euclid, then write it as
      m × 75 + n × 120. Check with arithmetic.
  95. Two methods, one answer. Find GCF(126, 294) by fingerprints AND by Euclid.
      Show that both give the same answer.
  96. Fifteen factors. A number has EXACTLY 15 factors. Find the TWO smallest
      such numbers. (Hint: 15 = 15 gives shape p¹⁴ — huge. 15 = 5 × 3 gives
      shape p⁴ × q². And what does an ODD factor count tell you about the
      answer? It should be a perfect square!)
  97. Impossible! A classmate claims two numbers have GCF 6 and LCM 44. Prove
      this is impossible without searching for the numbers. (Hint: the GCF
      divides each number, and each number divides the LCM. So what must be
      true of the GCF and the LCM?)
  98. Perfect number hunt. Verify that 496 is a perfect number using g(n).
      (Fingerprint: 496 = 2⁴ × 31, and 31 is prime.) What does g(496) have to
      equal for 496 to be perfect?
  99. Open-ended — design it! Invent TWO word problems:
      (a) a splitting problem whose answer is GCF(28, 42) = 14;
      (b) a syncing problem whose answer is LCM(9, 12) = 36.
      Then solve both of your problems to prove they work.
  100. The grand finale — Fibonacci's secret. The Fibonacci numbers go
       1, 1, 2, 3, 5, 8, 13, 21, 34, ... (each is the sum of the two before it).
       (a) Run Euclid's algorithm on GCF(13, 34) and look closely at every
           quotient and remainder — what do you notice?
       (b) Then run the lines BACKWARDS to write 1 = m × 13 + n × 34.
           Check your answer with arithmetic.
       This combination is exactly the kind that internet security builds on —
       and you just found it by hand!


═════════════════════════════════════════════
✅ Answer Key
═════════════════════════════════════════════

No peeking until you've tried! If you got one wrong, figure out which idea slipped — a divisibility proof step, the +1 in the machine, shared-and-small versus all-and-big, a sign in the Bézout reverse, or Euclid's remainder swap.


🟢 Easy

  1. Yes — last two digits 12 = 4 × 3; whole hundreds are always divisible by 4. (512 = 4 × 128.)
  2. Yes — digit sum 2 + 3 + 4 = 9, a multiple of 9. (234 = 9 × 26.)
  3. Yes — zigzag 7 − 1 + 5 = 11, a multiple of 11. (715 = 11 × 65.)
  4. Yes — last three digits 024 = 24 = 8 × 3. (1,024 = 8 × 128.)
  5. Yes — even (passes the 2-test) and 2 + 8 + 2 = 12 (passes the 3-test). (282 = 6 × 47.)
  6. No — last two digits 50 = 4 × 12 + 2, remainder 2.
  7. Yes — digit sum 9 + 1 + 8 = 18, a multiple of 9. (918 = 9 × 102.)
  8. Yes — zigzag 4 − 7 + 3 = 0, and 0 is a multiple of 11. (473 = 11 × 43.)
  9. No — last three digits 132 = 8 × 16 + 4, remainder 4.
 10. Yes — even, and 6 + 9 + 0 = 15 is divisible by 3. (690 = 6 × 115.)

 11. Digit sum = 3 + d + 6 = d + 9. Multiples of 9 a digit can reach: d + 9 = 9 → d = 0; d + 9 = 18 → d = 9; d + 9 = 27 → d = 18, rejected (not a digit). So d ∈ {0, 9}. Check: 306 = 9 × 34 and 396 = 9 × 44 ✅
 12. Digit sum = 7 + d + 2 = d + 9. Multiples of 3 a digit can reach: 9, 12, 15, 18 → d ∈ {0, 3, 6, 9}. Check one: 732 = 3 × 244 ✅

 13. COMPOSITE — odd, 9+1 = 10 (no 3), no 5... but 91 = 7 × 13. The classic trap!
 14. PRIME — 10² = 100 and 11² = 121, so √103 is between 10 and 11: check 2, 3, 5, 7. Odd; 1+0+3 = 4 (no 3); doesn't end in 0/5; 103 = 7×14 + 5. Nothing divides it.
 15. COMPOSITE — 119 = 7 × 17.
 16. COMPOSITE — 143 = 11 × 13.
 17. PRIME — 12² = 144, 13² = 169, so √157 < 13: check 2, 3, 5, 7, 11. Odd; 1+5+7 = 13 (no 3); no 5; 157 = 7×22 + 3; 157 = 11×14 + 3. Clean.
 18. COMPOSITE — 161 = 7 × 23.
 19. COMPOSITE — 14² = 196, 15² = 225, so check through 13. Odd; 2+2+1 = 5 (no 3); no 5; 221 = 7×31 + 4; 221 = 11×20 + 1; but 221 = 13 × 17 exactly.
 20. PRIME — same root range (check through 13). Odd; 2+2+9 = 13 (no 3); no 5; 229 = 7×32 + 5; 229 = 11×20 + 9; 229 = 13×17 + 8. Nothing works.

 21. 48 = 2⁴ × 3            (48 → 24 → 12 → 6 → 3: four 2s, one 3)
 22. 72 = 2³ × 3²           (72 → 36 → 18 → 9 → 3)
 23. 90 = 2 × 3² × 5
 24. 120 = 2³ × 3 × 5
 25. 144 = 2⁴ × 3²          (144 = 16 × 9)
 26. 168 = 2³ × 3 × 7
 27. 180 = 2² × 3² × 5      (180 = 4 × 45 = 4 × 9 × 5)
 28. 216 = 2³ × 3³          (216 = 8 × 27 — it's 6³!)
 29. 252 = 2² × 3² × 7
 30. 300 = 2² × 3 × 5²

 31. 24 = 2³ × 3      → f(24) = (3+1)(1+1) = 4 × 2 = 8
 32. 45 = 3² × 5      → f(45) = (2+1)(1+1) = 6
 33. 72 = 2³ × 3²     → f(72) = 4 × 3 = 12
 34. 100 = 2² × 5²    → f(100) = 3 × 3 = 9   (odd — because 100 = 10²!)
 35. 90 = 2 × 3² × 5  → f(90) = 2 × 3 × 2 = 12
 36. 64 = 2⁶          → f(64) = 6 + 1 = 7    (odd — 64 = 8²!)
 37. 144 = 2⁴ × 3²    → f(144) = 5 × 3 = 15  (odd — 144 = 12²!)
 38. 360 = 2³ × 3² × 5 → f(360) = 4 × 3 × 2 = 24

 39. 28 = 2²×7 and 42 = 2×3×7 → shared 2 × 7 = 14
 40. 45 = 3²×5 and 60 = 2²×3×5 → shared 3 × 5 = 15
 41. 48 = 2⁴×3 and 84 = 2²×3×7 → shared 2² × 3 = 12
 42. 12a = 2²×3×a and 18a² = 2×3²×a² → shared 2 × 3 × a = 6a
 43. 24x³ = 2³×3×x³ and 40x = 2³×5×x → shared 2³ × x = 8x
 44. 14xy² = 2×7×x×y² and 21x²y = 3×7×x²×y → shared 7 × x × y = 7xy

 45. 9 = 3² and 12 = 2²×3 → all-and-big: 2² × 3² = 36
 46. 14 = 2×7 and 21 = 3×7 → 2 × 3 × 7 = 42
 47. 16 = 2⁴ and 24 = 2³×3 → 2⁴ × 3 = 48
 48. 6x = 2×3×x and 9x = 3²×x → 2 × 3² × x = 18x
 49. 4x² = 2²×x² and 6x = 2×3×x → 2² × 3 × x² = 12x²
 50. 10a = 2×5×a and 15ab = 3×5×a×b → 2 × 3 × 5 × a × b = 30ab


🟡 Intermediate

 51. False. Example: GCF(8, 9) = 1, but 8 = 2³ and 9 = 3² — neither is prime. Numbers with GCF 1 are RELATIVELY PRIME: it describes the relationship (nothing shared), not the numbers themselves. (Lesson 4, and Lesson 7 Mistake 8.)
 52. False. 13² = 169 > 167, so 13 is PAST √167 — checking 13 can never be the check that matters. The Lesson 2 theorem says: if 167 were composite, a prime ≤ √167 would divide it, and 2, 3, 5, 7, 11 covers all primes below 13. (For the record: odd; 1+6+7 = 14; no 5; 167 = 7×23 + 6; 167 = 11×15 + 2 → 167 is prime.)

 53. 120 = 72×1 + 48;  72 = 48×1 + 24;  48 = 24×2 + 0  →  GCF = 24.
     Fingerprint check: 72 = 2³×3², 120 = 2³×3×5 → shared 2³×3 = 24 ✅
 54. 156 = 96×1 + 60;  96 = 60×1 + 36;  60 = 36×1 + 24;  36 = 24×1 + 12;  24 = 12×2 + 0  →  GCF = 12.
     Check: 96 = 2⁵×3, 156 = 2²×3×13 → 2²×3 = 12 ✅
 55. 180 = 135×1 + 45;  135 = 45×3 + 0  →  GCF = 45.
     Check: 135 = 3³×5, 180 = 2²×3²×5 → 3²×5 = 45 ✅
 56. 210 = 144×1 + 66;  144 = 66×2 + 12;  66 = 12×5 + 6;  12 = 6×2 + 0  →  GCF = 6.
     Check: 144 = 2⁴×3², 210 = 2×3×5×7 → 2×3 = 6 ✅
 57. 203 = 161×1 + 42;  161 = 42×3 + 35;  42 = 35×1 + 7;  35 = 7×5 + 0  →  GCF = 7.
     Check: 161 = 7×23 and 203 = 7×29 — Euclid dug out the hidden 7 with zero factoring ✅
 58. 252 = 168×1 + 84;  168 = 84×2 + 0  →  GCF = 84.
     Check: 252 = 2²×3²×7, 168 = 2³×3×7 → 2²×3×7 = 84 ✅

 59. Euclid: 48 = 30×1 + 18;  30 = 18×1 + 12;  18 = 12×1 + 6;  12 = 6×2 + 0  →  GCF = 6.
     Reverse: 6 = 18 − 12×1 = 18 − (30 − 18×1) = 2×18 − 30 = 2×(48 − 30×1) − 30 = 2×48 − 3×30.
     So 6 = (−3)×30 + 2×48.   Check: −90 + 96 = 6 ✅
 60. Euclid: 54 = 24×2 + 6;  24 = 6×4 + 0  →  GCF = 6.
     Reverse: the first line already says 6 = 54 − 2×24, so 6 = (−2)×24 + 1×54.
     Check: −48 + 54 = 6 ✅
 61. Euclid: 44 = 28×1 + 16;  28 = 16×1 + 12;  16 = 12×1 + 4;  12 = 4×3 + 0  →  GCF = 4.
     Reverse: 4 = 16 − 12×1 = 16 − (28 − 16×1) = 2×16 − 28 = 2×(44 − 28×1) − 28 = 2×44 − 3×28.
     So 4 = (−3)×28 + 2×44.   Check: −84 + 88 = 4 ✅
 62. Euclid: 60 = 36×1 + 24;  36 = 24×1 + 12;  24 = 12×2 + 0  →  GCF = 12.
     Reverse: 12 = 36 − 24×1 = 36 − (60 − 36×1) = 2×36 − 60.
     So 12 = 2×36 + (−1)×60.   Check: 72 − 60 = 12 ✅

 63. Other number = (8 × 48) ÷ 16 = 384 ÷ 16 = 24.
     Check: 16 = 2⁴, 24 = 2³×3 → GCF = 2³ = 8 and LCM = 2⁴×3 = 48 ✅
 64. Other number = (6 × 90) ÷ 18 = 540 ÷ 18 = 30.
     Check: 18 = 2×3², 30 = 2×3×5 → GCF = 2×3 = 6 and LCM = 2×3²×5 = 90 ✅
 65. Other number = (12 × 72) ÷ 24 = 864 ÷ 24 = 36.
     Check: 24 = 2³×3, 36 = 2²×3² → GCF = 2²×3 = 12 and LCM = 2³×3² = 72 ✅
 66. Other number = (5 × 60) ÷ 20 = 300 ÷ 20 = 15.
     Check: 20 = 2²×5, 15 = 3×5 → GCF = 5 and LCM = 2²×3×5 = 60 ✅

 67. LCM(3, 4) = 12. Multiply both sides by 12:
     12×x/3 + 12×x/4 = 12×14  →  4x + 3x = 168  →  7x = 168  →  x = 24.
     Check: 24/3 + 24/4 = 8 + 6 = 14 ✅
 68. LCM(2, 5) = 10. Multiply both sides by 10:
     5x − 2x = 60  →  3x = 60  →  x = 20.
     Check: 20/2 − 20/5 = 10 − 4 = 6 ✅
 69. LCM(4, 3) = 12. Multiply both sides by 12:
     12×(3/4)x − 12×2 = 12×(1/3)x + 12×8  →  9x − 24 = 4x + 96
     9x − 4x = 96 + 24  →  5x = 120  →  x = 24.
     Check: (3/4)×24 − 2 = 18 − 2 = 16, and (1/3)×24 + 8 = 8 + 8 = 16 ✅
 70. LCM(5, 2) = 10. Multiply both sides by 10:
     4x + 10 = 5x − 20  →  10 + 20 = 5x − 4x  →  x = 30.
     Check: (2/5)×30 + 1 = 12 + 1 = 13, and (1/2)×30 − 2 = 15 − 2 = 13 ✅

 71. 18x² = 2×3²×x² and 12x = 2²×3×x → GCF = 6x. Divide each term: 18x² ÷ 6x = 3x, −12x ÷ 6x = −2.
     18x² − 12x = 6x(3x − 2).   Check: 6x×3x = 18x² and 6x×(−2) = −12x ✅
 72. 14a²b = 2×7×a²×b and 21ab² = 3×7×a×b² → GCF = 7ab. Divide: 14a²b ÷ 7ab = 2a, 21ab² ÷ 7ab = 3b.
     14a²b + 21ab² = 7ab(2a + 3b).   Check: 7ab×2a = 14a²b and 7ab×3b = 21ab² ✅
 73. GCF(24x², 40x): 24x² = 2³×3×x², 40x = 2³×5×x → 8x.
     24x²/40x = (8x × 3x)/(8x × 5) = 3x/5, valid for x ≠ 0.
 74. GCF(15ab, 25a²): 15ab = 3×5×a×b, 25a² = 5²×a² → 5a.
     15ab/25a² = (5a × 3b)/(5a × 5a) = 3b/(5a), valid for a ≠ 0.

 75. Race the shapes of 8:  p⁷ → 2⁷ = 128;  p³q → 2³×3 = 24;  pqr → 2×3×5 = 30.
     Winner: 24. Check by listing: 1, 2, 3, 4, 6, 8, 12, 24 — eight factors ✅
 76. Race the shapes of 10:  p⁹ → 2⁹ = 512;  p⁴q → 2⁴×3 = 48.
     Winner: 48. Check: 48 = 2⁴×3 → f(48) = 5 × 2 = 10 ✅
 77. Race the shapes of 12:  p¹¹ → 2¹¹ = 2048;  p⁵q → 2⁵×3 = 96;  p³q² → 2³×3² = 72;  p²qr → 2²×3×5 = 60.
     Winner: 60. Check: 60 = 2²×3×5 → f(60) = 3 × 2 × 2 = 12 ✅
 78. The prime 2 is banned, so start at 3. Shapes of 6:  p⁵ → 3⁵ = 243;  p²q with odd primes, big exponent on the smallest → 3²×5 = 45 (the other arrangement 3×5² = 75 is bigger).
     Winner: 45. Check by listing: 1, 3, 5, 9, 15, 45 — six factors ✅

 79. Zigzag sum: 2 − 5 + d = d − 3, and we need a multiple of 11. For a digit, d − 3 sits between −3 and 6, and the only multiple of 11 in that range is 0. So d − 3 = 0 → d = 3.
     Check: 253 = 11 × 23 ✅
 80. 1d8 = 108 + 10d = (8×13 + 4) + (8d + 2d) = 8×(13 + d) + (2d + 4). The first chunk is always a multiple of 8, so 1d8 is divisible by 8 exactly when 2d + 4 is. For a digit, 2d + 4 sits between 4 and 22; the multiples of 8 in range are 8 and 16.
     2d + 4 = 8 → d = 2;  2d + 4 = 16 → d = 6.  So d ∈ {2, 6}.
     Check: 128 = 8 × 16 and 168 = 8 × 21 ✅


🔴 Challenge

  81. 18 = 2 × 3². Machine: g(18) = (1 + 2)(1 + 3 + 9) = 3 × 13 = 39.
     Check by listing: 1 + 2 + 3 + 6 + 9 + 18 = 39 ✅
  82. 20 = 2² × 5. Machine: g(20) = (1 + 2 + 4)(1 + 5) = 7 × 6 = 42.
     Check by listing: 1 + 2 + 4 + 5 + 10 + 20 = 42 ✅
  83. 180 = 2² × 3² × 5 — the exponents of 2 and 3 are even, but 5's exponent is 1 (odd).
     A square needs ALL exponents even, so supply one more 5: k = 5.
     Check: 180 × 5 = 900 = 2² × 3² × 5² = (2 × 3 × 5)² = 30² ✅
  84. 108 = 2² × 3³ — 3's exponent is 3 (odd). Supply one more 3: k = 3.
     Check: 108 × 3 = 324 = 2² × 3⁴ = (2 × 3²)² = 18² ✅
  85. Write a = 4m, b = 4n with GCF(m, n) = 1. The trick: a × b = GCF × LCM = 4 × 48 = 192,
     so 16mn = 192 → mn = 12. Factor pairs of 12: (1, 12), (2, 6), (3, 4).
     Relatively prime? (1, 12) ✅ · (2, 6) ❌ both even — that pair would inflate the GCF to 8 · (3, 4) ✅.
     Pairs: (4, 48) and (12, 16).
     Check (12, 16): 12 = 2²×3, 16 = 2⁴ → GCF = 2² = 4, LCM = 2⁴×3 = 48 ✅
  86. Write a = 3m, b = 3n with GCF(m, n) = 1. a × b = 3 × 90 = 270, so 9mn = 270 → mn = 30.
     Factor pairs of 30: (1, 30), (2, 15), (3, 10), (5, 6) — all four are relatively prime!
     Pairs: (3, 90), (6, 45), (9, 30), (15, 18).
     Spot-check (15, 18): 15 = 3×5, 18 = 2×3² → GCF = 3, LCM = 2×3²×5 = 90 ✅
  87. n − 2 must be divisible by both 6 and 10, so n − 2 is a common multiple.
     LCM(6, 10) = 2 × 3 × 5 = 30, so the formula is n = 30k + 2.
     Values: 2, 32, 62, 92, 122, ... For three digits: 30k + 2 ≥ 100 → 30k ≥ 98 → k ≥ 4 → n = 122.
     Check: 122 = 6×20 + 2 and 122 = 10×12 + 2 ✅
  88. GCF(4, 6, 10) = 2 and LCM(4, 6, 10) = 2²×3×5 = 60, so GCF × LCM = 120 — but 4 × 6 × 10 = 240. Not equal!
     Where the proof breaks: in 4 = 2², 6 = 2×3, 10 = 2×5, the prime 2 has exponents 2, 1, 1.
     The two-number proof needs min + max = the full sum, but here min + max = 1 + 2 = 3 while 2 + 1 + 1 = 4.
     One copy of 2 falls out of the proof — and notice 240 ÷ 120 = 2: the missing factor is exactly that
     middle exponent's 2. With three numbers, min and max can't carry all the information, so the trick dies.
  89. Open lockers: 1, 4, 9, 16, 25 — the perfect squares!
     Locker n is toggled once per factor of n. For a non-square, factors pair up as d with n ÷ d
     (for 12: 1×12, 2×6, 3×4) — an EVEN count, so the locker ends closed. For a square, one factor
     pairs with itself (for 16: 1×16, 2×8, 4×4) — an ODD count, so the locker ends OPEN.
     That's Lesson 3's theorem in action: f(n) is odd exactly when n is a perfect square.
  90. LCM(6, 8, 12): 6 = 2×3, 8 = 2³, 12 = 2²×3 → all-and-big: 2³×3 = 24 minutes.
     Together at 8:00, then every 24 minutes: the next two moments are 8:24 and 8:48 ✅
  91. 10a + b = 7(a + b)
     10a + b = 7a + 7b          distribute
     10a − 7a = 7b − b          subtract 7a and b from both sides
     3a = 6b → a = 2b           simplify
     Digits: a is 1–9 and b is 0–9; a = 2b forces b ≤ 4 (else a > 9) and b ≥ 1 (else a = 0,
     not a two-digit number). So b = 1, 2, 3, 4 → (a, b) = (2,1), (4,2), (6,3), (8,4).
     Answers: 21, 42, 63, 84.  Check: 21 = 7×3, 42 = 7×6, 63 = 7×9, 84 = 7×12 ✅
  92. Proof 1 (Euclid): n + 1 = n × 1 + 1, then n = 1 × n + 0. The last nonzero remainder is 1,
     so GCF(n, n + 1) = 1. ∎
     Proof 2 (combination lemma): suppose d divides both n and n + 1. Then d divides the
     combination 1×(n + 1) + (−1)×n = 1. The only positive factor of 1 is 1 itself, so d = 1.
     The only common factor is 1 — the numbers are relatively prime. ∎
     Neighbors never share a factor. That's why consecutive integers show up so often in proofs!
  93. 1000a + 100b + 10c + d
       = (999 + 1)a + (99 + 1)b + (9 + 1)c + d     split each place value
       = 999a + a + 99b + b + 9c + c + d           distribute
       = (999a + 99b + 9c) + (a + b + c + d)       regroup: multiples of 9 in front
       = 9×(111a + 11b + c) + (a + b + c + d)      factor 9 out of the first group
     The first chunk is a multiple of 9 no matter what the digits are, so the number is
     divisible by 9 EXACTLY when its digit sum a + b + c + d is. ∎ (Same proof works for
     any number of digits — every power of 10 is one more than a string of 9s.)
  94. Euclid: 120 = 75×1 + 45;  75 = 45×1 + 30;  45 = 30×1 + 15;  30 = 15×2 + 0  →  GCF = 15.
     Reverse: 15 = 45 − 30×1 = 45 − (75 − 45×1) = 2×45 − 75 = 2×(120 − 75×1) − 75 = 2×120 − 3×75.
     So 15 = (−3)×75 + 2×120.   Check: −225 + 240 = 15 ✅
     Fingerprint confirmation: 75 = 3×5², 120 = 2³×3×5 → shared 3×5 = 15 ✅
  95. Fingerprints: 126 = 2×3²×7 and 294 = 2×3×7² (294 = 2×147 = 2×3×49).
     Shared-and-small: 2 × 3 × 7 = 42.
     Euclid: 294 = 126×2 + 42;  126 = 42×3 + 0  →  GCF = 42.
     Two methods, one answer: 42 ✅
  96. 15 = 15 → shape p¹⁴: 2¹⁴ = 16384 — enormous. 15 = 5 × 3 → shape p⁴ × q².
     Race small primes, big exponent on the smallest: 2⁴×3² = 16×9 = 144; the next candidates
     are 2²×3⁴ = 4×81 = 324 and 2⁴×5² = 16×25 = 400. Order: 144 < 324 < 400.
     Two smallest: 144 and 324 — and note both are perfect squares (12² and 18²), exactly as
     the odd-factor-count theorem demands. Check: f(144) = 5×3 = 15; f(324) = 3×5 = 15 ✅
  97. The GCF divides each number, and each number divides the LCM — so the GCF must divide
     the LCM (divisibility chains along: GCF | a and a | LCM). But 6 does not divide 44
     (44 = 6×7 + 2). Contradiction — no such pair exists, no searching needed. ∎
     (Bonus view via the trick: a × b would have to equal 6 × 44 = 264, with both numbers
     multiples of 6 that divide 44 — but 44's factor list 1, 2, 4, 11, 22, 44 contains no
     multiple of 6 at all. Dead on arrival.)
  98. 496 = 2⁴ × 31, and 31 is prime. Machine: g(496) = (1 + 2 + 4 + 8 + 16)(1 + 31) = 31 × 32 = 992.
     Is 992 = 2 × 496? Yes! The machine counted ALL factors including 496 itself and got exactly
     double — so the proper factors sum to 496, and 496 is PERFECT ✅
     (Notice 31 = 2⁵ − 1, a prime of that special form — just like Lesson 3 promised.)
  99. Sample (a): "You have 28 red pens and 42 blue pens. What is the greatest number of identical
     gift sets you can make with nothing left over?" → GCF(28, 42) = 2 × 7 = 14 sets, each with
     2 red pens and 3 blue pens. Check: 14×2 = 28 and 14×3 = 42 ✅
     Sample (b): "One neon sign blinks every 9 seconds, another every 12 seconds. They blink
     together at midnight. After how many seconds do they next blink together?"
     → LCM(9, 12) = 2²×3² = 36 seconds. Check: 36 = 9×4 = 12×3 ✅
     Your problems may be completely different — if the GCF one SPLITS into identical groups and
     the LCM one SYNCS repeating events, you're right.
  100. (a) Euclid on (13, 34):
         34 = 13×2 + 8;  13 = 8×1 + 5;  8 = 5×1 + 3;  5 = 3×1 + 2;  3 = 2×1 + 1;  2 = 1×2 + 0
         → GCF = 1. Look at the remainders: 8, 5, 3, 2, 1 — Fibonacci numbers marching backwards!
         Consecutive Fibonacci numbers are always relatively prime, and Euclid takes one step per
         Fibonacci number — the longest possible chain for numbers of this size.
     (b) Reverse the lines:
         1 = 3 − 2×1                    from 3 = 2×1 + 1
           = 3 − (5 − 3×1)              substitute 2 = 5 − 3×1
           = 2×3 − 5                    collect like terms
           = 2×(8 − 5×1) − 5            substitute 3 = 8 − 5×1
           = 2×8 − 3×5                  collect
           = 2×8 − 3×(13 − 8×1)         substitute 5 = 13 − 8×1
           = 5×8 − 3×13                 collect
           = 5×(34 − 13×2) − 3×13       substitute 8 = 34 − 13×2
           = 5×34 − 13×13               collect
         So 1 = (−13)×13 + 5×34.   Check: −169 + 170 = 1 ✅
         Two consecutive Fibonacci numbers combine with integers to make 1 — Bézout's identity,
         found by hand. On numbers with hundreds of digits, exactly this move is step one of the
         codes that protect the internet.


─────────────────────────────────────────────

🎉 You finished the whole lesson! If you can solve these 100 problems, you truly understand number theory at honors level — you can PROVE the divisibility rules with place-value algebra, test primality to the square root, count and sum factors with f(n) and g(n), factor polynomials with the GCF, clear fractions from equations, solve GCF-LCM systems, and run Euclid's algorithm forwards AND backwards through Bézout's identity. Some of this mathematics is 2,300 years old, and it is still running inside every secure message on Earth. The next time a fraction simplifies in one step or a "when do they sync up?" puzzle melts in seconds, smile: you think like a number theorist now. Great work!
