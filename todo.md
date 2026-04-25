# Todo

## Admin UI - Consultation Management

- [ ] Create admin login page (frontend/src/Pages/AdminLogin.jsx)
- [ ] Create admin dashboard layout with sidebar navigation
- [ ] Build consultations list view with filters (by status: Pending/Completed/Cancelled)
- [ ] Add consultation detail view showing full customer info
- [ ] Implement status update functionality (Pending → Completed/Cancelled)
- [ ] Add admin authentication state management
- [ ] Protect admin routes with auth check

## Backend - Admin API Enhancements

- [ ] Add PATCH /consultations/:id endpoint to update status
- [ ] Add GET /consultations/:id endpoint for single consultation
- [ ] Add pagination to customers list endpoint
- [ ] Add filtering by status to customers list
- [ ] Implement admin login/auth controller
- [ ] Add admin token validation middleware

## Existing Tasks

- Change paystack key in .env to use proper credentials before pushing to prod
- Integrate sockets w/ frontend, confirm that backend socket logic is intact, and make sure it works ofc (IF proceeding with payments)
- Update env vars for email and redis connections
- Add dockerfile and docker compose file so redis can start in prod
