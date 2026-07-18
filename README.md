-- # 🤖 AI Support Ticket System

An AI-powered Full Stack Support Ticket System that allows users to submit support requests. The backend uses **Google Gemini AI** to automatically classify each ticket by **priority**, **category**, and generate an **AI suggested reply**. Administrators can securely log in to view, search, and filter submitted tickets.

---

## 📌 Features

### User Features
- Submit support tickets
- AI automatically analyzes the ticket
- Instant success confirmation after submission

### AI Features
- Automatic Priority Detection (High / Medium / Low)
- Automatic Category Classification
- AI Suggested Reply Generation
- AI failure fallback handling

### Admin Features
- Secure JWT Authentication
- Admin Login
- View all submitted tickets
- Search tickets by name, email, or message
- Filter by Priority
- Filter by Category
- Logout functionality

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### AI
- Google Gemini API

---

## 📁 Project Structure

```
AI-Support-Ticket-System/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── scripts/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .env.example
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/tharunkumar41/ai-support-ticket-system.git

cd ai-support-ticket-system
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

Server runs on

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

---

## Admin Credentials

Seed the admin user using:

```bash
node scripts/createAdmin.js
```

Login Credentials

```
Email:
admin@example.com

Password:
Admin@123
```

---

## API Endpoints

### Submit Ticket

```
POST /api/tickets
```

### Admin Login

```
POST /api/auth/login
```

### Get All Tickets

```
GET /api/admin/tickets
```

Supports:

- Search
- Priority Filter
- Category Filter
- Pagination

Example:

```
GET /api/admin/tickets?search=billing

GET /api/admin/tickets?priority=High

GET /api/admin/tickets?category=Billing
```

---

## Project Workflow

```
User
 │
 ▼
React Frontend
 │
 ▼
Express Backend
 │
 ▼
Google Gemini AI
 │
 ▼
MongoDB Atlas
 │
 ▼
Admin Login (JWT)
 │
 ▼
Dashboard
 │
 ▼
Search • Filter • View Tickets
```

---

## Screenshots

# Screenshots

## Home Page

![Home Page](./screenshots/home-page.png)

---

## Admin Login

![Admin Login](./screenshots/admin-login.png)

---

## Admin Dashboard

![Admin Dashboard](./screenshots/admin-dashboard.png)

---

## Ticket Cards with AI Suggestions

![Ticket Cards](./screenshots/ticket-cards.png)

---

## Search Functionality

![Search Functionality](./screenshots/search-functionality.png)

---

## Filter by Priority & Category

![Filter Functionality](./screenshots/filter-functionality.png)

## Future Improvements

- Edit ticket status
- Delete tickets
- Email notifications
- Admin roles
- Dashboard analytics
- Dark mode

---

## Author

**Tharunkumar S**

- GitHub: https://github.com/tharunkumar41
- LinkedIn: Add your LinkedIn profile

---

## License

This project is developed for learning and portfolio purposes.
