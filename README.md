# Khoa Học Online

**Mô tả ngắn:** Dự án nền tảng học trực tuyến gồm `backend` (Fastify + TypeScript + Knex) và `frontend` (Nuxt). Mục tiêu: cung cấp danh sách khóa học, trang chi tiết, mua khóa học và bảng thành tích.

**Tình trạng:** Nhập mã nguồn, có Docker Compose để chạy toàn bộ hệ thống.

**Liên hệ/Người phát triển:** xem file `LICENSE` và `backend/README.md` cho chi tiết cấu hình backend.

**Project Overview**
- **Tên dự án:**: Khoa Học Online
- **Mục tiêu:**: Nền tảng để học và bán khóa học trực tuyến, bao gồm chức năng khám phá, trang khóa học và thanh toán (phần thanh toán có thể là mock).

**Tech Stack**
- **Backend:**: TypeScript, Fastify, Knex, Node.js
- **Frontend:**: Nuxt (Vue)
- **DB:**: (thiết lập trong `docker-compose.yml`) — kiểm tra file cấu hình Docker để biết DB dùng gì (Postgres/MySQL/...)
- **Containerization:**: Docker + Docker Compose

**Repository Structure**
- **`/backend`**: mã nguồn API, migrations (`/backend/src/database/migrations`), CLI tiện ích (`/backend/src/cli`), plugin DB, services, controllers.
- **`/frontend`**: ứng dụng Nuxt (pages, components, layouts, assets).
- **`docker-compose.yml`**: cấu hình để chạy backend, frontend và DB cùng nhau.

**Quick Start (recommended — Docker Compose)**
1. Cài Docker và Docker Compose nếu chưa có.
2. Ở root repo, chạy:

```bash
docker-compose up --build
```

3. Mở trình duyệt:
- Frontend: `http://localhost:3000` (nếu port mặc định của Nuxt)
- Backend API: `http://localhost:3001` (hoặc port cấu hình trong `backend`)

Ghi chú: ports có thể khác — kiểm tra `docker-compose.yml`.

**Local Development (không dùng Docker)**
- Backend (tham khảo `backend/README.md` để biết script chính xác):

```bash
cd backend
npm install
# kiểm tra trong package.json các script như `dev` hoặc `start`
npm run dev
```

- Frontend:

```bash
cd frontend
npm install
npm run dev
```

Nếu có lỗi về biến môi trường hoặc DB, kiểm tra file `.env` hoặc tài liệu trong `backend/README.md`.

**Database Migrations & Seeds**
- Migrations có thể nằm trong `backend/src/database/migrations`. Để chạy migrations/seeds, dùng script trong `backend/package.json` nếu có, hoặc dùng Knex CLI:

```bash
cd backend
# Ví dụ (kiểm tra knexfile.ts và cài ts-node nếu cần)
npx knex --knexfile knexfile.ts migrate:latest
npx knex --knexfile knexfile.ts seed:run
```

Ghi chú: môi trường TypeScript có thể cần `ts-node/register` hoặc script đã cấu hình sẵn trong `package.json`.

**Environment variables**
- Kiểm tra `docker-compose.yml`, `backend/knexfile.ts` và `backend` để biết các biến cần thiết (DB_HOST, DB_USER, DB_PASSWORD, JWT_SECRET, PORT, v.v.).
- Đối với dev local, tạo file `.env` trong `backend` và `frontend` (nếu cần) theo hướng dẫn trong `backend/README.md`.

**Testing**
- Nếu repo có test, chạy thử từ từng thư mục:

```bash
cd backend
npm test

cd frontend
npm test
```

**Deployment**
- Dự án có thể deploy bằng Docker images (build từ `backend/Dockerfile` và `frontend/Dockerfile`) và chạy bằng `docker-compose` hoặc triển khai lên dịch vụ container (AWS ECS, DigitalOcean App Platform, v.v.).

**Contributing**
- Mở issue để đề xuất tính năng hoặc báo lỗi.
- Gửi Pull Request với mô tả thay đổi rõ ràng.
- Tuân theo coding style và giữ commit nhỏ, có ý nghĩa.

**Tài liệu thêm**
- Xem `backend/README.md` cho hướng dẫn chi tiết backend (migrations, scripts, env).
- Xem `frontend/README.md` (nếu có) để biết cấu hình Nuxt cụ thể.

**License**
- Kiểm tra file `LICENSE` trong repo để biết giấy phép sử dụng.

