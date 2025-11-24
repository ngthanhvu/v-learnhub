
```
khoa-hoc-online
├─ README.md
├─ backend
│  ├─ .env
│  ├─ .env.example
│  ├─ Dockerfile
│  ├─ LICENSE
│  ├─ README.md
│  ├─ knexfile.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ cli
│  │  │  ├─ commands
│  │  │  │  ├─ makeMigration.ts
│  │  │  │  ├─ migrate.ts
│  │  │  │  ├─ rollback.ts
│  │  │  │  └─ seed.ts
│  │  │  └─ index.ts
│  │  ├─ cli.ts
│  │  ├─ controllers
│  │  │  └─ usersController.ts
│  │  ├─ database
│  │  │  └─ migrations
│  │  │     └─ 20251008081810_create_users_table.js
│  │  ├─ plugins
│  │  │  ├─ db.ts
│  │  │  └─ logger.ts
│  │  ├─ routes
│  │  │  ├─ index.ts
│  │  │  └─ users.ts
│  │  ├─ server.ts
│  │  ├─ services
│  │  │  └─ usersService.ts
│  │  └─ types
│  │     └─ fastify.d.ts
│  ├─ tsconfig.json
│  └─ yarn.lock
├─ docker-compose.yml
└─ frontend
   ├─ .nuxt
   │  ├─ app.config.mjs
   │  ├─ components.d.ts
   │  ├─ imports.d.ts
   │  ├─ manifest
   │  │  └─ meta
   │  │     └─ b250bb2f-a7ea-4fe5-903a-4252110b1c78.json
   │  ├─ nuxt.d.ts
   │  ├─ nuxt.node.d.ts
   │  ├─ nuxt.shared.d.ts
   │  ├─ schema
   │  │  ├─ nuxt.schema.d.ts
   │  │  └─ nuxt.schema.json
   │  ├─ tsconfig.app.json
   │  ├─ tsconfig.json
   │  ├─ tsconfig.node.json
   │  ├─ tsconfig.server.json
   │  ├─ tsconfig.shared.json
   │  └─ types
   │     ├─ app.config.d.ts
   │     ├─ build.d.ts
   │     ├─ builder-env.d.ts
   │     ├─ components.d.ts
   │     ├─ imports.d.ts
   │     ├─ middleware.d.ts
   │     ├─ modules.d.ts
   │     ├─ nitro-config.d.ts
   │     ├─ nitro-imports.d.ts
   │     ├─ nitro-nuxt.d.ts
   │     ├─ nitro-routes.d.ts
   │     ├─ nitro.d.ts
   │     ├─ plugins.d.ts
   │     ├─ runtime-config.d.ts
   │     └─ vue-shim.d.ts
   ├─ Dockerfile
   ├─ README.md
   ├─ app
   │  └─ app.vue
   ├─ nuxt.config.ts
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  └─ robots.txt
   └─ tsconfig.json

```