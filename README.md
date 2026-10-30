# Anime Lover's Chess Club

**LEARN • PLAY • DOMINATE** — landing site for the Anime Lover's Chess Club on Chess.com.

- Join: https://www.chess.com/club/anime-lovers-chess-club-1/join
- Milestone: https://samayus400-ops.github.io/ayus/200-members.html
- Owner: https://www.chess.com/member/chess_by_ayus

## Stack
TanStack Start (React 19, Vite 7), Tailwind CSS v4, Lovable Cloud database for the contact/registration form
(`club_registrations` table, insert-only for visitors).

## Run locally
```bash
bun install
bun run dev      # http://localhost:8080
bunx vitest run  # tests
```
Environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`) are provided in `.env` by Lovable Cloud.

## Deploy
Click **Publish** in the Lovable editor. Or build with `bun run build` and deploy the output to Cloudflare Workers.

## Editing links
All external links live in `src/lib/club.ts`.
