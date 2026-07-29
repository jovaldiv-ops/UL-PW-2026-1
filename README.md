# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


git switch main
git pull origin main

git switch -c feature/login

Usa nombres descriptivos:

feature/login
feature/payment-api
fix/null-pointer
hotfix/security

3. Haz commits pequeños y descriptivos

Ejemplos:

feat: agregar autenticación con JWT
fix: corregir validación de correo
refactor: simplificar servicio de usuarios
test: agregar pruebas para login
docs: actualizar README

# Variables de entorno

    # .env
    VITE_MINIFY=false