# AI Support Ticket System - Frontend

## Overview

This is the frontend of the AI Support Ticket System built using React and Vite. It provides a clean interface for users to submit support tickets and an admin dashboard to manage them.

## Features

- Submit support tickets
- Responsive user interface
- Admin Login
- Protected Dashboard
- Search tickets
- Filter by Priority
- Filter by Category
- Pagination

## Tech Stack

- React
- Vite
- Axios
- React Router DOM

## Why These Technologies?

- React provides a fast and component-based UI.
- Vite offers a lightweight and fast development experience.
- Axios simplifies API communication.
- React Router enables client-side routing.
- React Icons improves the overall user experience.

## Project Structure

```
src/
│── api/
│── components/
│── pages/
│── App.jsx
│── main.jsx
```

## Installation

```bash
git clone <frontend-repository-url>

cd client

npm install

npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

## Backend Configuration

Update the API base URL inside:

```
src/api/axios.js
```

Example:

```javascript
baseURL: "http://localhost:5000/api"
```

## Trade-off

Due to the assignment timeline, I focused on implementing the core functionality using inline styling instead of a dedicated CSS framework. This allowed me to prioritize AI integration, authentication, filtering, and pagination.

## Future Improvements

- Dark Mode
- Better animations
- Toast notifications
- Responsive mobile dashboard
- User profile management
- Unit testing