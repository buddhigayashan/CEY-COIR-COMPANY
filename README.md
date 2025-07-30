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
🔧 My Contribution – Order & Delivery Management (with Chatbot Integration)
I was fully responsible for the Order & Delivery Management module, which includes:

✅ Order placement & real-time tracking

✅ Delivery scheduling for local and export orders

✅ Status lifecycle: Pending → In-progress → Delivered

✅ Route coordination and logistics tracking

✅ Chatbot integration to enhance user interaction by allowing users to:

Learn more about our products

Get information about our company and services

✅ Admin panel for full CRUD operations on orders & deliveries

The chatbot was built using custom logic in Node.js and React, designed to assist both new visitors and existing users by answering common questions and providing a user-friendly interface.
---

📂 You can view my complete implementation in the bugfix branch of our team repo.

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
 
Main Repo: https://github.com/buddhigayashan/CEY-COIR-COMPANY.git

My Implementation (Bugfix Branch): https://github.com/Lithira-Sasmitha/ITP/tree/bugfix








