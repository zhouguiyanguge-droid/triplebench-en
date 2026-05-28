# TripleBench Phase 1 handoff

## Current state

- English Astro site scaffold exists in this repository.
- Seed benchmark data lives at `src/data/seed-benchmarks.json`.
- First article scaffold lives at `src/pages/reports/codex-vs-claude-vs-gemini.astro`.
- Scores are placeholders for layout and methodology calibration, not final buyer recommendations.

## Runbook

```bash
cd "/Users/zgy/claude 赚钱/triplebench-en"
npm install
npm run build
npm run dev
```

## Next agent tasks

1. Replace seed benchmark scores with repeated live test evidence.
2. Add raw prompt appendix files under `benchmarks/raw-runs/`.
3. Push to GitHub `zhouguiyanguge-droid/triplebench-en`.
4. Deploy to Cloudflare Pages after API connectivity is verified.
5. Bind `triplebench.com` to the production deployment.

## Guardrails

- Do not write tokens into git remotes, README files, screenshots, or commit messages.
- Read secrets from `/Users/zgy/claude 赚钱/.env` only at command runtime.
- Keep automated progress separate from human-only login, KYC, and 2FA steps.
