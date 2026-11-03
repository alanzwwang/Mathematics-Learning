# 📐 Mathematics Learning

**Version:** V.3.1

<!-- WHATS-NEW:README:START -->
## 🆕 What's New in V.3.1

- NEW!!! Adult Mode: press "Switch to adult mode" at the top of the home page
- The same 20 fields of mathematics, rewritten at a PhD/graduate level, with definitions, theorems and full proofs
- Longer courses: 12–14 lessons per field, 60 problems each, and harder randomly generated assessments
- A calm, compact design in Arial for grown-up readers, with new pictures of famous mathematicians and historic manuscripts
- Kid Mode is still the default, and you can switch back any time

### Earlier updates

- **V.3.0:** NEW!!! A 🏆 Quiz for every topic: 10 questions each time, Every quiz is brand-new: the computer makes up fresh questions with new numbers, so there is nothing to memorise, You only see your score and the right answers AFTER you submit the whole quiz, Each answer comes with an explanation of how to get it, Your best score for each topic is saved on your device, The answer keys are gone from the website, so no more peeking!
- **V.2.9:** NEW!!! A brand-new Mathematics website: all 20 topics are now colourful, kid-friendly web pages, A new home page with every topic in four groups: Foundations, Algebra, Geometry and Advanced, Every lesson has its own page, with lesson buttons and Next / Back buttons, ✏️ Your Turn answers now hide behind a 👀 button, so no accidental peeking!, 2 pictures for every topic (40 in all), with their sources, 100 practice problems for every topic, Works on phones and tablets too
- **V.2.8:** NEW!!! This What's New pop-up: every update now tells you what changed
- **V.2.7:** All 20 lessons proofread: math slips, wording and references fixed, Version number shown on the home page, New README

_When you open it, a What's New pop-up shows this once per version. Add `?whatsnew` to the address to see it again._
<!-- WHATS-NEW:README:END -->

A math library website with two modes: a kid-friendly **Kid Mode** (the default) and a graduate-level **Adult Mode**, both covering 20 fields, from arithmetic all the way to complex analysis.

Visit it at **https://alanzwwang.github.io/Mathematics-Learning/** (Adult Mode: **https://alanzwwang.github.io/Mathematics-Learning/adult/**, or press "Switch to adult mode" at the top right).

## What's inside

20 topics in four groups. In Kid Mode, every topic has a start page with 2 pictures, one page per lesson, 100 practice problems and a quiz with brand-new questions every time. In Adult Mode, the same 20 fields are taught at a PhD/graduate level: 12–14 lessons with theorems and proofs, 60 problems and a harder randomly generated assessment. Answer keys are not published on the site.

- **🧱 Foundations:** Arithmetic, Fractions, Logic
- **🔣 Algebra:** Algebraic Equations, Linear Functions, Logarithms, Exponential Growth, Pascal's Triangle
- **📐 Geometry:** Geometry, Algebraic Geometry, Non-Euclidean Geometry, Fractal Geometry
- **🚀 Advanced:** Calculus, Complex Analysis, Matrix Math, Number Theory, Trigonometry, Combinatorics, Permutations vs Combinations, Probability

## How it's made

- The lessons are written in the `.md` files (for example `Fractions.md`). They stay here as the source.
- `node tools/build.cjs` turns them into the website pages: `index.html` (home page) and one folder per topic (for example `fractions/`). The look comes from `style.css` (kid mode) and `adult/adult.css` (adult mode), which are edited by hand.
- `tools/topics.json` holds each topic's emoji, colour, short description and picture captions. `tools/pictures.json` holds the picture credits.
- `img/` has the pictures (free-licence images from Wikimedia Commons, credited on each topic's start page).
- Adult Mode is built from `adult-lessons/*.md` into the `adult/` folder (style: `adult/adult.css`). Each field's description and pictures are in `tools/adult/<topic>.json`, its harder quiz questions in `tools/adult/<topic>.quiz.js` (test them with `node tools/test-adult-quiz.cjs <topic>`), and its pictures in `img/adult/`.
- `quiz.js` is the quiz engine; the build makes `adult/quiz.js` from it with the adult questions swapped in.
- Only the website is published. `_config.yml` keeps all the `.md` files, `adult-lessons/` and `tools/` off the site.

To change a lesson: edit its `.md` file, then run `node tools/build.cjs` again.
