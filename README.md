# 🚀 Weekly Assessment — MERN Stack

A full-stack web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) as part of a weekly assessment. The project follows a clean client-server architecture with a React frontend deployed on Vercel and a Node/Express backend.

🔗 **Live Demo:** [weekly-assessment-mern-stack.vercel.app](https://weekly-assessment-mern-stack.vercel.app)

---

## 📁 Project Structure

```
Weekly-Assessment-MERN-stack/
├── backend/          # Node.js + Express REST API
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API route handlers
│   ├── controllers/  # Business logic
│   └── server.js     # Entry point
├── frontend/         # React (Create React App)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
└── README.md
```

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React.js (Create React App)       |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB (Mongoose ODM)            |
| Deployment | Vercel (Frontend)                 |
| Styling    | CSS3, HTML5                       |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
# or for development with auto-reload:
npm run dev
```

The API will run at `http://localhost:5000`.

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the React development server:

```bash
npm start
```

The app will open at `http://localhost:3000`.

---

## 🌐 Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com). Push to `main` branch to trigger auto-deploy.
- **Backend** can be deployed on [Render](https://render.com), [Railway](https://railway.app), or any Node.js-compatible host.

---

## 📜 Available Scripts

### Backend (`/backend`)

| Script        | Description                     |
|---------------|---------------------------------|
| `npm start`   | Start the production server     |
| `npm run dev` | Start with nodemon (dev mode)   |

### Frontend (`/frontend`)

| Script          | Description                        |
|-----------------|------------------------------------|
| `npm start`     | Start development server           |
| `npm run build` | Build for production               |
| `npm test`      | Run tests                          |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ as part of a MERN stack weekly assessment.
