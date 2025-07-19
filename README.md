# MyFullstackApp

A modern fullstack monorepo framework based on **NestJS** (backend) and **React** (frontend), designed for scalable, maintainable, and production-ready applications.

---

## What is this?

**MyFullstackApp** is a boilerplate and framework for building fullstack applications using [NestJS](https://nestjs.com/) for the backend and [React](https://react.dev/) for the frontend, managed in a single monorepo.
It provides a clean build process, ready-to-deploy output, and automation scripts for easy development, build, and deployment.

---

## Project Structure

```
my-fullstack-app/
├── api/                    # NestJS backend source code and configuration
│   ├── src/                # Main backend source files (controllers, modules, etc.)
│   ├── dist/               # Compiled backend output (after build)
│   ├── package.json        # Backend-specific dependencies and scripts
│   └── ...                 # Other backend config files (tsconfig, webpack, etc.)
│
├── client/                 # React frontend source code and configuration
│   ├── src/                # Main frontend source files (components, routes, etc.)
│   ├── dist/               # Compiled frontend output (after build)
│   ├── package.json        # Frontend-specific dependencies and scripts
│   └── ...                 # Other frontend config files (tsconfig, vite, etc.)
│
├── pkg/
│   └── shared-dtos/        # Shared TypeScript DTOs and types for API contracts
│       ├── src/                # DTO and type source files
│       ├── package.json        # Shared DTO package config
│       └── ...                 # Other config files (tsconfig, etc.)
│
├── build/                  # Final distributable output (after build)
│   ├── api/                # Built backend ready for deployment
│   ├── client/             # Built frontend ready for deployment
│   └── package.json        # Final package.json for deployment/publishing
│
├── scripts/                # Helper scripts (e.g., postbuild.js)
│   └── postbuild.js        # Script to finalize build output
│
├── Makefile                # Build and automation commands
├── package.json            # Root project config and scripts
├── README.md               # Project documentation (this file)
├── pnpm-workspace.yaml     # pnpm monorepo workspace config
├── nx.json                 # Nx monorepo config
└── ...                     # Other root-level config files
```

**Key folders:**

- `api/` - All backend (NestJS) code, configs, and build output.
- `client/` - All frontend (React) code, configs, and build output.
- `pkg/shared-dtos/` - **Shared Data Transfer Objects (DTOs) and TypeScript types** used for type-safe communication between backend and frontend. This ensures both sides of your app use the exact same data contracts, reducing bugs and improving maintainability.
- `build/` - The final, ready-to-deploy output after running `make build`.
- `scripts/` - Utility scripts for build and deployment automation.
- `Makefile` - Main build and automation entrypoint.
- `package.json` - Root dependencies and scripts for the monorepo.

---

## 🚀 Getting Started

### 1. Clone the repository

First, clone the project from your git repository:

```sh
git clone https://github.com/your-username/my-fullstack-app.git
cd my-fullstack-app
```

### 2. Install dependencies

Install all dependencies using [pnpm](https://pnpm.io):

```sh
pnpm install
```

### 3. Available Scripts

The following scripts are defined in the root `package.json`:

```json
"scripts": {
  "start:dev": "pnpm -r dev",
  "start:prod": "pnpm --filter @my-fullstack-app/client build && pnpm --filter @my-fullstack-app/api build && pnpm --filter @my-fullstack-app/api serve",
  "start:api": "pnpm --filter @my-fullstack-app/api build && pnpm --filter @my-fullstack-app/api serve",
  "build": "pnpm --filter @my-fullstack-app/client build && pnpm --filter @my-fullstack-app/api build"
}
```

#### Script explanations:

- **start:dev**

  - Runs all packages (client and api) in development mode using their respective `dev` scripts.
  - Hot-reloads on code changes.
  - Usage:
    ```sh
    pnpm start:dev
    ```
- **start:prod**

  - Builds both the client and the api, then serves the api in production mode.
  - The client is built and its static files are served by the backend.
  - Usage:
    ```sh
    pnpm start:prod
    ```
- **start:api**

  - Builds and serves only the api (backend) in production mode.
  - Useful for backend-only deployments or debugging.
  - Usage:
    ```sh
    pnpm start:api
    ```

> **Tip:**
> Make sure you have [pnpm](https://pnpm.io/) installed globally.
> You can install it with:
>
> ```sh
> npm install -g pnpm
> ```

---

## 📦 How to Deploy or Publish

After running `make build`, your distributable output is in the `build/` directory.

To run the built project:

```sh
cd build
pnpm install
pnpm start
```

You can also publish the `build/` directory as an npm package or deploy it to your server.

---

## 📝 License

MIT

---

Feel free to contribute, open issues, or suggest improvements!
