# Logos Health — Blood Test Analytics Dashboard

A full-stack web app to upload blood-test PDFs, extract values, and visualize trends over time.

## Stack

- **Frontend:** React + Vite + Ant Design + React Router + Recharts
- **Backend:** FastAPI + SQLAlchemy + Pydantic + JWT *(coming soon)*
- **Database:** PostgreSQL (Neon) *(coming soon)*
- **Deploy:** Vercel (FE) + Render (BE) + Neon (DB)

## Project structure

```
Logos/
├── frontend/     React + Vite app
└── backend/      FastAPI app (coming soon)
```

## Frontend — local dev

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. Any email + password will log you in (mock auth for now).

## Deployment

**Frontend** auto-deploys to Vercel on push to `main`.

- **Live:** https://logos-health-checkup.vercel.app
- **Repo:** https://github.com/Vsraju1999/logos-health-checkup
