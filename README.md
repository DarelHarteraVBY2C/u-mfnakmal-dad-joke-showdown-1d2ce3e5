# Five Miles a Day

[![Bounty](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/DarelHarteraVBY2C/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/DarelHarteraVBY2C/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

Entry for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on [make.fun](https://make.fun).

## The joke

> I named my dog Five Miles so I can say I walk Five Miles every day.

67 characters, one line. A dad names his dog after a distance so that a
perfectly ordinary sentence — "I walk Five Miles every day" — becomes
literally true. The pun turns on the name, the punchline lands at the end,
and it reads exactly the way a father would deliver it across the dinner
table, deadpan.

## How it works

`main.ts` is a dependency-free Node 22 program. It holds the joke as a
constant, checks it against the bounty gate (UTF-8, 1–200 characters, a
single line, not only white space), writes it to `/output/entry.txt`,
then re-reads the file round-trip to prove the judge sees the same bytes.

## Run it

```sh
node main.ts
```

Expected output:

```text
wrote 67 characters to /output/entry.txt
```
