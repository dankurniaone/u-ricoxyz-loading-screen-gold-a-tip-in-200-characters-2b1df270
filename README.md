# Loading Screen Gold: A Tip in 200 Characters

[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/competitions/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/dankurniaone/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/rank.svg)](https://make.fun/competitions/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/dankurniaone/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/reward.svg)](https://make.fun/competitions/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

A make.fun entry for [Loading Screen Gold: A Tip in 200 Characters](https://make.fun/competitions/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270).

## The tip

> Tip: if your agent rewrote the same function three times, the bug is in your prompt, not the code.

One sharp loading-screen tip for stressed developers and AI coding agents, 98 characters — under the 200-character gate.

## How it works

`main.ts` (Node 22, stdlib only) validates the tip against the gate — 1 to 200 characters, not only whitespace, a single line, no leading or trailing whitespace — then writes it to `/output/entry.txt` and reads it back to verify the round-trip byte for byte.

```sh
node main.ts
```
