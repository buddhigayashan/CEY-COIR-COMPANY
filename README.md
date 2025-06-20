# 🥥 CEY-COIR-COMPANY – Enterprise Management System

A full-stack enterprise management web application developed for **Cey Coir**, a leading Sri Lankan manufacturer of coir-based products. The system helps streamline business operations across departments such as delivery, inventory, finance, production, and warehouse management.

---

## 📦 Project Overview

This system was built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) to digitize and manage core operational processes of the company. It is structured into the following main functional modules:

- 👤 User & Employee Management  
- 🚚 **Order & Delivery Management** *(my contribution)*  
- 🏭 Product & Machinery Management  
- 💰 Financial Management  
- 📦 Warehouse Management  

---

## 🔧 My Contribution – Order & Delivery Management

As the developer responsible for the **Order & Delivery Management** module, I implemented the following key features:

- ✅ Order placement and real-time tracking  
- ✅ Delivery scheduling for both **local** and **export** operations  
- ✅ Status management: pending, in-progress, delivered  
- ✅ Logistics and route coordination  
- ✅ Admin panel for adding/editing/deleting orders & deliveries  

My work is located in the `bugfix` branch of the GitHub repository and includes both backend logic (Node.js + Express) and frontend interfaces (React.js + Tailwind CSS).

---

## 🛠️ Tech Stack

| Layer       | Technology        |
|-------------|-------------------|
| Frontend    | React.js, Tailwind CSS |
| Backend     | Node.js, Express.js    |
| Database    | MongoDB            |
| Runtime     | Node.js (v18+)     |
| Package Mgmt| npm                |

---

## 📁 Project Structure
CEY-COIR-COMPANY/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
├── .env
├── package.json
└── README.md


> ⚠️ Note: This project was created using **React (without Vite)** and developed in **Visual Studio Code** (VSCode).

---

## 📥 How to Run the Project

### 🔧 Prerequisites

- Node.js (v18 or above)
- MongoDB (local or Atlas)
- Git
- VSCode

### 📦 Installation Steps

1. **Clone the repository:**
 
git clone https://github.com/dewmirajapakshe/ITP.git
cd ITP
 
 
 
2. Install dependencies for both frontend and backend:

 cd backend
npm install
cd ../frontend
npm install


3.**Set up environment variables:
Create a .env file inside the backend/ directory:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000**

4.Run backend server:

bash
Copy
Edit
cd backend
npm run dev

5.Run frontend app:

bash
Copy
Edit
cd frontend
npm start

 


🌐 Live Demo
[Coming Soon]

🔗 GitHub Repository
👉 https://github.com/dewmirajapakshe/ITP.git






