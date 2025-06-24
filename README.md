# Notes App – Vertex UI Technical Take-Home

##  Features
Create, Read, Update, and Delete notes
Login page with simple route protection (localStorage-based)
Data stored in localStorage (no backend required)
Fully responsive design using TailwindCSS
Form validation using React Hook Form + Zod
Placeholder for tests using Jest / React Testing Library
CI with GitHub Actions (install, build steps)

---

## Getting Started

### Prerequisites
- Node.js >= 16
- npm >= 8

### Installation
```bash
npm install
```

### Run the App
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

---

## Login Info

The login is mocked. Any username/password will work.

- Protected routes: `/create`, `/edit/:id`
- Login page: `/login`
- Auth state is saved in `localStorage`

---

## Folder Structure

```
src/
├── App.tsx                  # App routing
├── index.tsx                # App bootstrap
├── components/
│   ├── NoteCard.tsx         # UI for individual note
│   └── ProtectedRoute.tsx   # Route guard
├── pages/
│   ├── Home.tsx             # List notes
│   ├── Login.tsx            # Login page
│   ├── Create.tsx           # Create note
│   └── Edit.tsx             # Edit note
```

---

## GitHub Actions – CI

Workflow is defined in `.github/workflows/ci.yml`

It runs:
- `npm install`
- `npm run build`

---

