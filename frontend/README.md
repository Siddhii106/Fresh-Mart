# Fresh Mart: Full-Stack Grocery Store

A responsive online grocery store with a React frontend, a Django REST API, token-based login, and product photos hosted on Cloudinary. Visitors can browse, search, filter, and build a cart, then check out.

**Live demo:** https://fresh-mart-lilac-zeta.vercel.app

> The API runs on Render's free tier, which sleeps when idle. The first product load can take up to a minute.

## Screenshots

![Home page](docs/home.png)
![Cart page](docs/cart.png)
![Mobile view](docs/mobile.png)

## Features

- **Product catalog** loaded from a Django API, with photos, prices, units, ratings, weights, and tag labels such as "Organic" or "New"
- **Search** by product name or price, as you type
- **Category filters** with a "See More" button to expand the list
- **Cart** with an add button that becomes a quantity stepper, a live count in the navbar, and a cart page with totals
- **Checkout** with delivery details and a payment option (Cash on Delivery or UPI)
- **Accounts:** sign up and log in with token-based authentication. The navbar adapts to the logged-in state.
- **Responsive design:** a side menu on phones, an expandable search icon, and a layout that adapts from desktop to mobile
- **Admin panel** for managing products and uploading photos

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, React Router, custom CSS with a design system built on CSS variables |
| Backend | Django 4.2, Django REST Framework, DRF token authentication, django-cors-headers, gunicorn |
| Database | PostgreSQL in production, SQLite for local development |
| Media | Cloudinary (via django-cloudinary-storage) |
| Hosting | Vercel (frontend), Render (backend and PostgreSQL), GitHub (source) |

## Architecture

```
React app (Vercel) ──JSON over HTTPS──▶ Django REST API (Render) ──▶ PostgreSQL
                                              │
                                              └──▶ Cloudinary (product images)
```

## Engineering Highlights

- **Shared state lifted to the top level.** The cart, login state, and search text live in `App.jsx` and flow down through props, so the navbar, cart page, and product grid always agree.
- **Derived data.** Filtering, search results, and cart totals are computed from state rather than stored separately, which avoids sync bugs.
- **Authentication.** Passwords are hashed by Django. Login and signup return a DRF token, which the frontend saves.
- **Clean API contract.** Prices are stored as decimals in the database, and the serializer returns a formatted `display_price` plus an absolute image URL.
- **Configuration through environment variables.** Secrets and host-specific values live outside the code, and the frontend reads the API address from `VITE_API_URL`.
- **Explicit CORS policy.** Local development origins are listed directly, and a regular expression allows the project's Vercel preview deployments.

## Challenges Solved

- **Cross-origin requests** between the local dev server, Vercel previews, and the API, handled through explicit origins and a preview-URL pattern.
- **Case-sensitive file paths.** A project that worked on macOS failed on Linux until file and folder names were standardized.
- **Ephemeral storage on the free host.** Data was moved to PostgreSQL and photos to Cloudinary, so content survives redeploys.
- **Version compatibility.** Python was pinned to 3.12 to match Django 4.2 on the hosting platform.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products/` | List all products |
| POST | `/api/auth/register/` | Create an account and return a token |
| POST | `/api/auth/login/` | Log in and return a token |
| — | `/admin/` | Django admin for managing products |

## Project Structure

```
fresh-mart/
├── frontend/              React + Vite app
│   └── src/
│       ├── pages/         Home, Cart, Checkout, Login, Signup, About, Contact
│       ├── api.js         Product requests
│       └── auth.js        Register, login, and session helpers
└── backend/               Django project
    ├── freshmart/         Settings, URL routing, WSGI entry point
    ├── store/             Models, serializers, views, admin, auth endpoints
    ├── create_admin.py    Creates the first admin account during deploy
    └── requirements.txt
```

## Getting Started

Run the backend and frontend in two terminals.

**Backend**

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

The API runs at `http://127.0.0.1:8000/api/products/`. Add products at `http://127.0.0.1:8000/admin/`.

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. The frontend uses `http://127.0.0.1:8000/api` by default, so no configuration is needed for local development.

## Environment Variables

**Backend**

| Variable | Purpose |
|---|---|
| `DJANGO_SECRET_KEY` | Django's signing key. Keep it secret. |
| `DJANGO_DEBUG` | Set to `False` in production. |
| `DJANGO_ALLOWED_HOSTS` | Comma-separated hostnames the API accepts. |
| `DATABASE_URL` | PostgreSQL connection string. If unset, SQLite is used. |
| `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | Product image storage |
| `ADMIN_USERNAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Creates the first admin account during the build. Remove `ADMIN_PASSWORD` after the first login. |

**Frontend**

| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Base URL of the API, for example `https://your-api.onrender.com/api` |

## Deployment

- **Frontend (Vercel):** root directory `frontend`. Vercel rebuilds on every push to `main`.
- **Backend (Render):** web service with root directory `backend`.
  - Build command: `pip install -r requirements.txt && python manage.py migrate && python create_admin.py`
  - Start command: `gunicorn freshmart.wsgi`
- **Database (Render):** PostgreSQL, connected through `DATABASE_URL`.

## Roadmap

- Save orders on the server and add an order history page. Orders are currently stored in the browser.
- Payment gateway integration
- Order management in the admin panel

## License

MIT License