# Ultimate Consult

A full-stack consultation platform for accounting and advisory businesses — built to convert inbound interest into structured client consultations with admin-side workflow control.

---

## 🚀 Project Snapshot

Ultimate Consult combines a polished client-facing site with a production-style backend stack:

- Marketing + contact experience for potential clients.
- Admin dashboard for reviewing and managing consultation requests.
- Payment-ready architecture (Paystack init + webhook verification).
- Real backend infrastructure (MongoDB, Redis/BullMQ worker, SMTP, JWT auth, Socket.IO).

---

## 🧠 What makes this project strong

- **End-to-end flow:** inquiry to internal admin management.
- **Separation of concerns:** Controllers, Services, Schemas, Routes.
- **Scalable patterns:** background jobs, token-based auth, webhooks, validation middleware.
- **Deployable frontend pattern:** GitHub Pages-friendly router basename.

---

## 🛠 Tech Stack

### Frontend
- React 19
- Vite 7
- React Router 7
- Tailwind CSS + MUI
- Axios

### Backend
- Node.js + Express 5
- MongoDB + Mongoose
- JWT + bcryptjs
- BullMQ + Redis (ioredis)
- Nodemailer
- Socket.IO
- Celebrate/Joi validation

---

## ⚡ Quick Run (Minimal)

```bash
# Terminal 1
cd Backend
npm install
npm run dev

# Terminal 2
cd Frontend
npm install
npm run dev
```

Also ensure these services are running:
- MongoDB
- Redis

Local URLs:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 🔐 Environment Variables

### `Backend/.env`

```bash
PORT=5000
MONGO_DB_URI=mongodb://127.0.0.1:27017/ultimate_consult

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

JWT_ACCESS_SECRET=replace_me
JWT_REFRESH_SECRET=replace_me

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=replace_me
SMTP_PASS=replace_me

PAYSTACK_API_KEY=replace_me
CLIENT_VERIFY_URL=http://localhost:5173/consultation/verify
```

### `Frontend/.env`

```bash
VITE_API_URL=http://localhost:5000
```

---

## 🧭 Main Routes

### Frontend
- `/`
- `/admin/login`
- `/admin/consultations`
- `/admin/consultations/:consultationId`

### Backend
- `GET /health`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /customers`
- `GET /customers` *(protected)*
- `GET /customers/:id` *(protected)*
- `PATCH /customers/:id` *(protected)*
- `POST /payments`
- `POST /webhook/paystack`

---

## 📌 Context

This repository is optimized as a **project showcase with practical implementation depth**, not as a public contribution template. It is intentionally concise while still giving enough technical detail to understand and run the system.
