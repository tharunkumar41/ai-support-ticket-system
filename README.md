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

```text
.
├── client/
│   ├── screenshots/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── scripts/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── README.md
└── .gitignore
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

```text
                      User
                        │
                        ▼
          Submit Support Ticket
                        │
                        ▼
              React Frontend (Vite)
                        │
                 Axios HTTP Request
                        │
                        ▼
             Express.js REST API
                        │
          Validate Request & Store Data
                        │
                        ▼
                MongoDB Atlas Database
                        │
                        ▼
             Generate AI Suggested Reply
             (Google Gemini API)
                        │
                        ▼
          Save AI Suggestion to Database
                        │
                        ▼
              Admin Login (JWT Auth)
                        │
                        ▼
             Admin Dashboard (React)
                        │
        Search │ Filter │ Pagination
                        │
                        ▼
          View Tickets & AI Suggestions
```

---

## Screenshots


### Home Page

<img width="1289" height="976" alt="home-page" src="https://github.com/user-attachments/assets/738ef8c3-b3f9-450e-966b-434f89bbcc46" />


---

### Admin Login

<img width="537" height="494" alt="admin-login" src="https://github.com/user-attachments/assets/c5148fc4-1a85-49f2-b0aa-9b5e40f4bd5b" />


---

### Tickets Bokking Page

<img width="940" height="799" alt="tickets-booking-page" src="https://github.com/user-attachments/assets/382492fb-559f-4a4e-afbc-25ca4a6b67b0" />


---

### Ticket Cards with AI Suggestions

<img width="1172" height="844" alt="ticket-cards" src="https://github.com/user-attachments/assets/bda37db4-3797-4c77-9b7c-dfbf3b6746ed" />


---

### Search Functionality

<img width="1240" height="923" alt="search-functionality" src="https://github.com/user-attachments/assets/1dfa5723-6f23-4549-b4da-bc6a8dc1c1ea" />


---

### Filter by Priority & Category

<img width="1228" height="923" alt="filter-functionality" src="https://github.com/user-attachments/assets/28259e5f-2bb8-4a22-ad52-d7954be55c76" />


### MongoDB Admin Collection

<img width="1806" height="628" alt="mongodb-admin-collection" src="https://github.com/user-attachments/assets/a43d5424-5cd5-429f-a5e6-642054b272bd" />


### MongoDB Tickets Collections
<img width="1813" height="649" alt="mongodb-tickets-collection" src="https://github.com/user-attachments/assets/7d5130ce-f91f-4cf7-b571-8831ac5372ed" />



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

---

## License

This project is developed for learning and portfolio purposes.
