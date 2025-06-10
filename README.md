# Food Ordering and Management System

A full-stack web application for restaurant food ordering and management. This project provides a seamless experience for both customers and restaurant administrators, including table management, menu browsing, order placement, payments, and user authentication.

## Features

- User registration, login, and password reset (with OTP/email verification)
- Role-based access for users and admins
- Menu browsing and item management
- Table selection and booking
- Order placement and review
- Payment processing (multiple payment modes)
- Admin dashboard for managing menu, tables, users, and payments
- Feedback and rating system

## Tech Stack

- **Frontend:** Angular 19, Angular Material, Bootstrap, FontAwesome, RxJS, ngx-toastr
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, Nodemailer

## Project Structure

```
food-order/
  angularapp/    # Angular frontend
  backend/       # Node.js/Express backend
```

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)
- MongoDB (local or cloud instance)

### 1. Clone the repository
```powershell
git clone <your-repo-url>
cd food-order
```

### 2. Backend Setup
```powershell
cd backend
npm install
```
- Configure environment variables in `backend/.env` (see sample below):
  ```env
  JWT_SECRET_KEY=your_jwt_secret
  EMAIL_USER=your_email@gmail.com
  EMAIL_PASS=your_email_password
  EMAIL_HOST=smtp.gmail.com
  EMAIL_PORT=587
  CLIENT_URL=http://localhost:4200
  ```
- Start the backend server:
```powershell
npm start
```
- The backend runs on [http://localhost:3000](http://localhost:3000)

### 3. Frontend Setup
```powershell
cd ../angularapp
npm install
```
- Start the Angular development server:
```powershell
npm start
```
- The frontend runs on [http://localhost:4200](http://localhost:4200)

## Usage
- Register as a new user or login as admin/user
- Browse menu, select table, place orders, and make payments
- Admins can manage menu items, tables, users, and view payments

## Scripts
### Backend
- `npm start` — Start backend server with nodemon

### Frontend
- `npm start` — Start Angular dev server
- `ng build` — Build Angular app
- `ng test` — Run unit tests

## 📄 License
**This project is licensed under the MIT License.**

## 👨‍💻 Author
**Sai Teja**  
**GitHub:** [SaiTeja134](https://github.com/SaiTeja134)  
**Email:** saiteja.gangavaram09@gmail.com
