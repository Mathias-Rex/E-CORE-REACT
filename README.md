# E-CORE React

Ez a projekt az E-CORE alkalmazás frontend része, amely React és Vite technológiákra épül.

A projekt célja a korábbi, teljes egészében HTML + CSS + JavaScript alapú honlap újraalkotása React felhasználásával.

## Előfeltételek

- [Node.js](https://nodejs.org/) (LTS verzió javasolt)
- [npm](https://www.npmjs.com/) (a Node.js-sal együtt települ)

## Letöltés és telepítés

1. Klónozd a repository-t:
   ```bash
   git clone https://github.com/ViktorDev20/E-CORE-REACT.git
   ```

2. Navigálj a projekt könyvtárába:
   ```bash
   cd E-CORE-REACT
   ```

3. Telepítsd a függőségeket:
   ```bash
   npm install
   ```

## Indítás fejlesztői módban

```bash
npm run dev
```

A fejlesztői szerver alapértelmezetten a `http://localhost:5173` címen érhető el.

## Backend API

A projekt az alábbi backend API-t használja:
```
https://ecore-backend-production.up.railway.app
```

## Build

Éles verzió készítése:
```bash
npm run build
```

A build kimenete a `dist` mappába kerül.

## Preview

A buildelt verzió helyi futtatása:
```bash
npm run preview
```
