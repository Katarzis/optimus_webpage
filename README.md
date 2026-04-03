# Optimus Accounting — weboldal (kezdőprojekt)

Vite + React + TypeScript + React Router. Magyar, vállalati minta: Optimus Accounting Kft. (könyvelés, Kecskemét).

## Előfeltétel

- [Node.js](https://nodejs.org/) LTS (npm-mel)
- [Git](https://git-scm.com/) (opcionális, helyi repóhoz)

## Git repó

A projekt mappa önálló weboldal — a repót a gépeden inicializáld, ha a Git elérhető a PATH-on:

```bash
cd optimus_webpage
git init
git add .
git commit -m "Initial commit: Optimus web kezdőprojekt (Vite + React)"
```

Távoli repó (GitHub/GitLab): hozz létre egy üres repót, majd `git remote add origin <url>` és `git push -u origin main`.

## Parancsok

```bash
npm install
npm run dev
```

Fejlesztői szerver: `http://localhost:5173`

```bash
npm run build
npm run preview
```

```bash
npm run lint
```

## Útvonalak

| Útvonal | Oldal |
|--------|--------|
| `/` | Főoldal |
| `/rolunk` | Rólunk |
| `/szolgaltatasok` | Szolgáltatások |
| `/blog` | Blog lista |
| `/blog/:slug` | Cikk |
| `/kapcsolat` | Kapcsolat + időpont (minta) |

## Következő lépések

- Headless CMS a bloghoz és szövegekhez
- `POST /api/contact` és `POST /api/booking` (serverless vagy backend)
- Jogi oldalak (adatkezelés, ÁSZF) valós tartalommal
- Térkép, analytics, Search Console

## Márka

Elsődleges szín: `#1F3A5F`, másodlagos háttér: `#E6ECF2`.
