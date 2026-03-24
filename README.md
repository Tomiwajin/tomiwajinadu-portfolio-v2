<div align="center">

# Tomiwa Jinadu — Portfolio v2

**Live Site:** [tomiwajinadu.vercel.app](https://tomiwajinadu-portfolio-v2.vercel.app)

A personal portfolio built to feel like a product, not a template. Instagram-inspired grid layout with viewer-type personalisation (Developer / Recruiter / Stalker), Discord-based analytics, and a contact page with a chess challenge.

</div>

<img width="1440" height="822" alt="Portfolio Screenshot" src="https://github.com/user-attachments/assets/570a3ddc-4822-4040-9378-53e423618fb3" />

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Analytics | Vercel Analytics + Discord webhooks |
| Deployment | Vercel |

---

## Environment Variables

Create a `.env.local` file in the root:

```env
DISCORD_RESUME_WEBHOOK=https://discord.com/api/webhooks/YOUR_WEBHOOK_URL
```

The webhook fires on: resume downloads, viewer type selection, email/phone copy, LinkedIn/GitHub clicks, project demo clicks, and chess challenges.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Forking

Feel free to use this as a reference — just give credit and link back to [tomiwajinadu-portfolio-v2.vercel.app](https://tomiwajinadu-portfolio-v2.vercel.app).

---

## License

MIT — free to use, modify, and distribute with attribution.
