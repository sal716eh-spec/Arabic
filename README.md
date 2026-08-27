# بين يديك — Arabic

A study site for **Al-ʿArabiyyah Bayna Yadayk** (العربية بين يديك), Book 1. Modern Standard Arabic.

Two halves that work on the same problem from different ends: a **vocabulary** trainer for recall, and a **speaking drills** app for production. Static files — no build step, no server, no dependencies.

## Pages

| File | |
|---|---|
| `index.html` | Sign-in screen. Placeholder — any details take you through. |
| `dashboard.html` | Entry point; shows what's due in both halves |
| `vocab.html` | Daily spaced-repetition review + searchable word list |
| `vocab-data.js` | 622 words, units 1–16, from the book's own printed lists |
| `drills.html` | Twelve drill modes across units 1–12 |
| `site.css` | Shared palette, nav and buttons |

## Drills

Dialogue · Role-play · Dictation · Ladder · Substitution · Build-it · Transform · Gap-fill · Fix-it · Structures · Produce · Review.

672 tracked items with spaced repetition, answer checking that ignores vowel marks, and speech input where the browser supports it. Vocabulary comes from the word lists printed at the back of the books themselves, so every word drilled is one the book teaches.

## Progress

The two halves keep separate schedules, on purpose — single words and whole sentences are not forgotten at the same rate.

| | Store | Boxes |
|---|---|---|
| Vocab | `bay_vocab_progress_v1` | 1, 2, 4, 8, 16 days · 12 new words/day by default |
| Drills | `bay_drills_progress_v1` | 1, 3, 7, 21, 60 days |

Both use `localStorage`, so progress is per-device and per-browser. The dashboard reads both and reports them side by side.

## Running it

Open `index.html`, or publish with GitHub Pages: **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

On a phone, open the published URL and **Add to Home Screen** — it runs full-screen with the manifest and icons here.

Audio needs an Arabic voice on the device; microphone input needs Chrome or another browser with the Web Speech API.

## Known gaps

- **The sign-in is cosmetic.** No accounts, no server, nothing checked — it sets a flag and moves on. Don't put anything private behind it.
- **English glosses and transliteration in `vocab-data.js` are editorial** — the book prints Arabic only. Worth spot-checking with a teacher.
- Units 13–16 are not in the drills yet.

## Caveats

Vowel marks, model answers and grammar notes are a study aid, not an authority — worth checking with a teacher, especially case endings. Built-in speech synthesis is fine for rhythm and shadowing but is not a pronunciation model.

## Licence

Code and original drill content: MIT (see `LICENSE`).

*Al-ʿArabiyyah Bayna Yadayk* is © Arabic For All (العربية للجميع). Unofficial personal study aid, not affiliated with or endorsed by the publisher, and not a substitute for the books.
