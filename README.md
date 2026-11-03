# 📐 Mathematics Learning

**Version:** V.3.0

<!-- WHATS-NEW:README:START -->
## 🆕 What's New in V.3.0

- NEW!!! A 🏆 Quiz for every topic: 10 questions each time
- Every quiz is brand-new: the computer makes up fresh questions with new numbers, so there is nothing to memorise
- You only see your score and the right answers AFTER you submit the whole quiz
- Each answer comes with an explanation of how to get it
- Your best score for each topic is saved on your device
- The answer keys are gone from the website, so no more peeking!

### Earlier updates

- **V.2.9:** NEW!!! A brand-new Mathematics website: all 20 topics are now colourful, kid-friendly web pages, A new home page with every topic in four groups: Foundations, Algebra, Geometry and Advanced, Every lesson has its own page, with lesson buttons and Next / Back buttons, ✏️ Your Turn answers now hide behind a 👀 button, so no accidental peeking!, 2 pictures for every topic (40 in all), with their sources, 100 practice problems for every topic, Works on phones and tablets too
- **V.2.8:** NEW!!! This What's New pop-up: every update now tells you what changed
- **V.2.7:** All 20 lessons proofread: math slips, wording and references fixed, Version number shown on the home page, New README

_When you open it, a What's New pop-up shows this once per version. Add `?whatsnew` to the address to see it again._
<!-- WHATS-NEW:README:END -->

A kid-friendly math library website, from arithmetic all the way to complex analysis.

Visit it at **https://alanzwwang.github.io/Mathematics-Learning/**

## What's inside

20 topics in four groups. Every topic has a start page with 2 pictures, one page per lesson, 100 practice problems and an answer key.

- **🧱 Foundations:** Arithmetic, Fractions, Logic
- **🔣 Algebra:** Algebraic Equations, Linear Functions, Logarithms, Exponential Growth, Pascal's Triangle
- **📐 Geometry:** Geometry, Algebraic Geometry, Non-Euclidean Geometry, Fractal Geometry
- **🚀 Advanced:** Calculus, Complex Analysis, Matrix Math, Number Theory, Trigonometry, Combinatorics, Permutations vs Combinations, Probability

## How it's made

- The lessons are written in the `.md` files (for example `Fractions.md`). They stay here as the source.
- `node tools/build.cjs` turns them into the website: `index.html` (home page), one folder per topic (for example `fractions/`), and `style.css`.
- `tools/topics.json` holds each topic's emoji, colour, short description and picture captions. `tools/pictures.json` holds the picture credits.
- `img/` has the pictures (free-licence images from Wikimedia Commons, credited on each topic's start page).
- Only the website is published. `_config.yml` keeps the `.md` files off the site.

To change a lesson: edit its `.md` file, then run `node tools/build.cjs` again.
