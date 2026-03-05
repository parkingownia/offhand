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

## Deploy FTP (tylko `out/`)

W repo jest skrypt, ktory publikuje tylko zawartosc katalogu `out/` na FTP:

```bash
npm run deploy:ftp
```

Tryb testowy (bez wysylki):

```bash
npm run deploy:ftp:dry
```

Skrypt czyta dane dostepowe z lokalnego pliku `.vscode/ftp.json` i wysyla pliki do `path`
z tego pliku. W VS Code jest tez task: `Offhand: Build + Deploy FTP (out)`.
