# Offhand

Projekt bazowy `Next.js 16` w trybie statycznym (`output: export`) pod hosting FTP.

Dostępne podstrony:
- logowanie demo (`/login`)
- panel demo (`/panel`)
- publiczny dashboard (`/dashboard`)
- status strony (`/health`)

## Uruchomienie

```bash
npm install
npm run dev
```

## Weryfikacja

```bash
npm run lint
npm run build
```

Po buildzie wygenerowany katalog `out/` wysyłasz na serwer FTP (np. OVH Perso).
