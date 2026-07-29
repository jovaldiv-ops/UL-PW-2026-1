# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


npm install --legacy-peer-deps

# Tutorial: Flujo de trabajo con Git usando ramas

Este tutorial explica un flujo de trabajo básico con **Git** para trabajar de forma organizada utilizando ramas (`branches`), commits descriptivos y la integración de cambios en la rama principal.

---

# 1. Actualizar la rama principal

Antes de comenzar una nueva funcionalidad, asegúrate de que tu rama principal esté actualizada.

```bash
git switch main
git pull origin main
```

### ¿Qué hace cada comando?

- `git switch main`
  - Cambia a la rama `main`.

- `git pull origin main`
  - Descarga los cambios del repositorio remoto.
  - Actualiza tu rama local con la versión más reciente.

---

# 2. Crear una nueva rama

Una vez que `main` esté actualizada, crea una rama para desarrollar tu funcionalidad.

```bash
git switch -c feature/login
```

### Explicación

- `-c` crea una nueva rama.
- Después cambia automáticamente a esa rama.

En este ejemplo se crea la rama:

```text
feature/login
```

---

# 3. Usa nombres descriptivos para las ramas

Es recomendable utilizar un prefijo que indique el propósito de la rama.

## Nuevas funcionalidades

```text
feature/login
feature/payment-api
feature/user-profile
```

## Corrección de errores

```text
fix/null-pointer
fix/email-validation
```

## Correcciones urgentes

```text
hotfix/security
hotfix/database
```

---

# 4. Realiza commits pequeños y descriptivos

En lugar de hacer un solo commit con muchos cambios, realiza varios commits pequeños con mensajes claros.

Ejemplos:

```text
feat: agregar autenticación con JWT
fix: corregir validación de correo
refactor: simplificar servicio de usuarios
test: agregar pruebas para login
docs: actualizar README
```

### Ejemplo de commit

```bash
git add .
git commit -m "feat: agregar autenticación con JWT"
```

---

# 5. Integrar los cambios a la rama principal

Cuando la funcionalidad esté terminada, cambia a la rama principal.

```bash
git checkout master
```

Luego integra la rama desarrollada.

```bash
git merge feature/vite-config
```

> **Nota:** Algunos proyectos utilizan `main` como rama principal en lugar de `master`. Usa la rama que corresponda en tu proyecto.

---

# Flujo completo

```bash
git switch main
git pull origin main

git switch -c feature/login

# Trabajar en el proyecto...

git add .
git commit -m "feat: agregar autenticación con JWT"

git checkout master
git merge feature/login
```

---

# Buenas prácticas

- Mantén siempre actualizada la rama principal.
- Crea una rama por cada funcionalidad o corrección.
- Utiliza nombres descriptivos para las ramas.
- Realiza commits pequeños y frecuentes.
- Escribe mensajes de commit claros siguiendo una convención (`feat`, `fix`, `refactor`, `docs`, `test`, etc.).
- Integra los cambios únicamente cuando la funcionalidad esté lista y probada.

---

# Resumen del flujo

```text
Actualizar main
        │
        ▼
Crear rama feature
        │
        ▼
Desarrollar cambios
        │
        ▼
Realizar commits descriptivos
        │
        ▼
Cambiar a main/master
        │
        ▼
Hacer merge de la rama
```

# Cadena de Conexión a la DB

Supabase(transaction pooler) 

    DB=postgresql://[user]:[password]@[host]:6543/postgres

Local

    DB=postgres://root:123@127.0.0.1:5432/fifa25?sslmode=disable

# Variables de entorno

    # .env
    VITE_MINIFY=false
    PORT=4000
    DB=postgres://root:123@127.0.0.1:5432/fifa25?sslmode=disable