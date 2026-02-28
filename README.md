# Offhand

Projekt bazowy `Next.js 16` z modułem:
- logowanie (`/login`)
- chroniony panel użytkownika (`/panel`)
- publiczny dashboard (`/dashboard`)
- healthcheck API (`/api/health`)

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

## Domyślne logowanie (dev)

- email: `admin@offhand.local`
- hasło: `offhand123`

Możesz nadpisać przez zmienne środowiskowe:
- `OFFHAND_ADMIN_EMAIL`
- `OFFHAND_ADMIN_PASSWORD`
- `OFFHAND_AUTH_SECRET`
