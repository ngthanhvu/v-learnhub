# 🚀 Fastify Backend Starter (MySQL + Knex + CLI)

Dự án mẫu backend sử dụng **Fastify**, **Knex**, **MySQL**, hỗ trợ CLI tự tạo migration / seed giống Laravel Artisan, và có CRUD user với hash password (`bcrypt`).

---

## 📦 Yêu cầu

- Node.js ≥ 18
- Yarn hoặc npm
- MySQL Server

---

## ⚙️ Cài đặt

```bash
# Cài thư viện
yarn install

# Tạo file .env
cp .env.example .env
```

**.env:**
```bash
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=fastify_db
```

---

## 🗂️ Cấu trúc thư mục


```
fastify-backend-typescript
├─ knexfile.ts
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app.ts
│  ├─ cli
│  │  ├─ commands
│  │  │  ├─ makeMigration.ts
│  │  │  ├─ migrate.ts
│  │  │  ├─ rollback.ts
│  │  │  └─ seed.ts
│  │  └─ index.ts
│  ├─ cli.ts
│  ├─ controllers
│  │  └─ usersController.ts
│  ├─ database
│  │  └─ migrations
│  │     └─ 20251008081810_create_users_table.js
│  ├─ plugins
│  │  └─ db.ts
│  ├─ routes
│  │  ├─ index.ts
│  │  └─ users.ts
│  ├─ server.ts
│  └─ services
│     └─ usersService.ts
├─ tsconfig.json
└─ yarn.lock

```
---

## 🧰 CLI Migration Tool

Dự án này có CLI tích hợp để thao tác database (như Laravel Artisan).

### 🧱 Các lệnh CLI

| Lệnh | Mô tả |
|------|--------|
| `yarn cli make:migration <name>` | Tạo file migration mới |
| `yarn cli migrate` | Chạy toàn bộ migration |
| `yarn cli rollback` | Rollback batch gần nhất |
| `yarn cli seed` | Chạy toàn bộ seed |

Ví dụ:
```bash
yarn cli make:migration create_users_table
yarn cli migrate
yarn cli rollback
yarn cli seed
```

---

## 🧩 File `knexfile.js`

```js
import dotenv from 'dotenv'
dotenv.config()

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'fastify_db'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }
}
```

---

## 🧱 Migration mẫu: `create_users_table.js`

```js
export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name', 100).notNullable()
    table.string('email', 150).notNullable().unique()
    table.string('password', 255).notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('users')
}
```

---

## 🌱 Seed mẫu: `user_seed.js`

```js
export async function seed(knex) {
  await knex('users').del()
  await knex('users').insert([
    { name: 'Admin', email: 'admin@example.com', password: '123456' },
    { name: 'Vũ', email: 'vu@example.com', password: '123456' }
  ])
}
```

---

## 👩‍💻 API CRUD Users

### Controller: `usersController.js`
- Có validate dữ liệu đầu vào.
- Hash password khi tạo hoặc cập nhật user.

```js
import bcrypt from 'bcrypt'
import * as userService from '../services/usersService.js'

export async function createUser(req, reply) {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    return reply.code(400).send({ message: 'Name, email và password là bắt buộc' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const id = await userService.create(req.server.db, { name, email, password: hashedPassword })
  reply.code(201).send({ id, message: 'User created successfully' })
}
```

---

## ⚙️ Chạy server Fastify

```bash
# Dev mode (auto reload)
yarn dev

# Production
yarn start
```

Server chạy ở `http://localhost:3000`.

---

## 🧪 API endpoints

| Method | Endpoint | Mô tả |
|---------|-----------|--------|
| GET | `/users` | Lấy danh sách users |
| GET | `/users/:id` | Lấy chi tiết 1 user |
| POST | `/users` | Tạo user mới (hash password) |
| PUT | `/users/:id` | Cập nhật user |
| DELETE | `/users/:id` | Xóa user |

Ví dụ tạo user:
```bash
POST /users
{
  "name": "Vũ",
  "email": "vu@example.com",
  "password": "123456"
}
```

---

## 🔐 Ghi chú

- Dự án sử dụng ESM (`"type": "module"`)
- Hash mật khẩu bằng `bcrypt`
- Không dùng Knex CLI vì Knex 3.x lỗi ESM — CLI trong `src/cli.js` gọi trực tiếp API của Knex nên **ổn định tuyệt đối**

---

## 🧤 License

MIT © 2025 — Developed by **Vũ**