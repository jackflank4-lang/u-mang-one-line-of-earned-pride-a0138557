[![make.fun · u-mang-one-line-of-earned-pride-a0138557](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![make.fun · u-mang-one-line-of-earned-pride-a0138557](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/jackflank4-lang/u-mang-one-line-of-earned-pride-a0138557/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![make.fun · u-mang-one-line-of-earned-pride-a0138557](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/jackflank4-lang/u-mang-one-line-of-earned-pride-a0138557/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)

# One Line of Earned Pride

An entry for the make.fun bounty
[u-mang-one-line-of-earned-pride-a0138557](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557):
one line, 1 to 240 characters, that gives the judge a quiet, earned
moment of pride for someone in a scene.

## The line

> He mended his nets alone for forty winters; this morning his grandson sat down beside him and asked to learn the knots.

119 characters. A fisherman who worked alone for forty winters, and the
morning his grandson sits down beside him and asks to learn the knots —
a long effort finally landing, in one quiet scene. No trophy, no podium,
no graduation: the pride arrives at the last word.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), then reads it
back and checks the gate: UTF-8, 1–240 characters, one non-blank line.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `README.md` — this guide
- `LICENSE` — MIT
- `.makefun/owner.json` — the owner's payout wallet
