# 🔐 MERN Authentication Application

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A full-stack MERN (MongoDB, Express.js, React, Node.js) application featuring secure user authentication, email verification, password reset functionality, and a clean notes management system.

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Security Features](#-security-features)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## ✨ Features

### Authentication System
- 🔐 **Secure User Registration** with email/password
- ✉️ **Email Verification** with JWT tokens
- 🔑 **Login System** with session management
- 🔄 **Password Reset** via OTP (One-Time Password)
- 🚪 **Logout** functionality with session cleanup
- 🛡️ **JWT-based Authentication** for secure API routes
- 🔒 **Password Hashing** with bcrypt
- ✅ **Input Validation** using Yup schema validation

### Password Security Requirements
- Minimum 8 characters
- Must contain uppercase letters
- Must contain lowercase letters
- Must contain at least one number
- Secure hashing using bcryptjs

### Notes Management
- 📝 Create, Read, Update, Delete (CRUD) notes
- 🎨 Beautiful and responsive UI
- ⚡ Real-time toast notifications
- 📱 Mobile-friendly design
- 💾 Instant save functionality

### Additional Features
- 🎯 Protected routes for authenticated users
- 🔔 Toast notifications for user feedback
- 📧 Professional email templates with Handlebars
- 🌐 RESTful API architecture
- 🎨 Modern UI with Shadcn/ui components
- 📱 Fully responsive design

## 🎬 Demo

### Key Workflows

**1. User Registration Flow**
```
Sign Up → Email Verification → Email Verification Link → Account Verified → Login
```

**2. Password Reset Flow**
```
Forgot Password → Enter Email → Receive OTP → Verify OTP → Set New Password → Login
```

**3. Notes Management**
```
Login → Create Note → Edit Note → Delete Note → Logout
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client with interceptors
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable UI components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **Handlebars** - Email templating
- **Yup** - Schema validation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

## 📁 Project Structure

```
Authentication-Project/
│
├── backend/
│   ├── controllers/
│   │   └── userController.js           # User business logic
│   ├── database/
│   │   └── db.js                       # MongoDB connection
│   ├── emailVerify/
│   │   ├── sendOtpMail.js              # OTP email sender
│   │   ├── template.hbs                 # Email HTML template
│   │   └── verifyMail.js               # Verification email sender
│   ├── middleware/
│   │   └── isAuthenticated.js          # JWT authentication middleware
│   ├── models/
│   │   ├── sessionModel.js             # Session schema
│   │   └── userModel.js                # User schema
│   ├── routes/
│   │   └── userRoute.js                # API routes
│   ├── validators/
│   │   └── userValidate.js             # Input validation schemas
│   ├── .env                            # Environment variables
│   ├── .env.example                    # Environment template
│   ├── .gitignore                      # Git ignore rules
│   ├── package.json                    # Dependencies
│   └── server.js                       # Entry point
│
├── frontend/
│   ├── public/                         # Static assets
│   ├── src/
│   │   ├── assets/                     # Images and icons
│   │   ├── components/
│   │   │   ├── ui/                     # Reusable UI components
│   │   │   ├── Hero.jsx                # Landing page hero
│   │   │   ├── Navbar.jsx              # Navigation bar
│   │   │   └── ProtectedRoute.jsx      # Route protection
│   │   ├── config/
│   │   │   └── api.js                  # Axios configuration
│   │   ├── context/
│   │   │   └── userContext.jsx         # Global user state
│   │   ├── pages/
│   │   │   ├── ChangePassword.jsx      # Password change page
│   │   │   ├── ForgotPassword.jsx      # Password reset request
│   │   │   ├── Home.jsx                # Landing page
│   │   │   ├── Login.jsx               # Login page
│   │   │   ├── Notes.jsx               # Notes management
│   │   │   ├── Signup.jsx              # Registration page
│   │   │   ├── Verify.jsx              # Email verification
│   │   │   ├── VerifyEmail.jsx         # Verification prompt
│   │   │   └── VerifyOTP.jsx           # OTP verification
│   │   ├── lib/
│   │   │   └── utils.js                # Utility functions
│   │   ├── App.jsx                     # Root component
│   │   ├── index.css                   # Global styles
│   │   └── main.jsx                    # Entry point
│   ├── .env                            # Environment variables
│   ├── .env.example                    # Environment template
│   ├── .gitignore                      # Git ignore rules
│   ├── components.json                 # Shadcn config
│   ├── index.html                      # HTML template
│   ├── package.json                    # Dependencies
│   └── vite.config.js                  # Vite configuration
│
├── .gitignore                          # Root git ignore
├── CHANGES.md                          # Change log
├── README.md                           # This file
└── SETUP_GUIDE.md                      # Quick setup guide
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB Atlas** account - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **Gmail Account** - For email functionality

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/mern-authentication-app.git
cd mern-authentication-app
```

**2. Install Backend Dependencies**
```bash
cd backend
npm install
```

**3. Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### Environment Variables

#### Backend Configuration

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=8000

# Database Configuration  
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Email Configuration (Gmail)
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-gmail-app-password

# JWT Secret Key
SECRET_KEY=your_super_secret_jwt_key_here
```

**📧 Gmail Setup for Email Verification:**

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Generate **App Password**:
   - Navigate to App Passwords section
   - Select "Mail" and "Windows Computer"
   - Copy the generated 16-character password
   - Paste it as `MAIL_PASS` in your `.env` file

**🔑 Generate JWT Secret Key:**

Run this command in your terminal:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and paste it as `SECRET_KEY` in your `.env` file.

#### Frontend Configuration

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:8000
```

### Running the Application

#### Development Mode

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
✅ Backend runs on: `http://localhost:8000`

**Terminal 2 - Frontend Dev Server:**
```bash
cd frontend
npm run dev
```
✅ Frontend runs on: `http://localhost:5173`

#### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## 📚 API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### User Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/user/register` | Register new user | ✅ |
| POST | `/user/verify` | Verify email | ✅ |
| POST | `/user/login` | Login user | ✅ |
| POST | `/user/logout` | Logout user | ✅ |
| POST | `/user/forgot-password` | Request password reset | ✅ |
| POST | `/user/verify-otp/:email` | Verify OTP code | ✅ |
| POST | `/user/change-password/:email` | Change password | ✅ |

### Request/Response Examples

#### Register User
```http
POST /user/register
Content-Type: application/json

{
  "username": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully. Please check your email to verify your account."
}
```

#### Login User
```http
POST /user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Welcome back John Doe",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "username": "John Doe",
    "email": "john@example.com",
    "isVerified": true,
    "isLoggedIn": true
  }
}
```

#### Forgot Password
```http
POST /user/forgot-password
Content-Type: application/json

{
  "email": "john@example.com"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "OTP sent successfully"
}
```

### Error Responses

```json
{
  "success": false,
  "message": "Error description"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (invalid credentials)
- `403` - Forbidden (unverified account)
- `404` - Not Found
- `500` - Internal Server Error

## 🔒 Security Features

- ✅ **Password Hashing** - bcrypt with 10 salt rounds
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Email Verification** - Required before login
- ✅ **OTP Expiration** - OTPs expire after 10 minutes
- ✅ **Session Management** - Secure session handling
- ✅ **Input Validation** - Server & client-side validation
- ✅ **CORS Protection** - Configured cross-origin policies
- ✅ **Protected Routes** - Authentication middleware
- ✅ **SQL Injection Prevention** - MongoDB ODM protection
- ✅ **XSS Protection** - Input sanitization

## 🧪 Testing

### Manual Testing Checklist

**Authentication Flow:**
- [ ] User can register with valid credentials
- [ ] Registration fails with weak password
- [ ] Verification email is sent
- [ ] Email verification link works
- [ ] Login requires verified account
- [ ] Login works with correct credentials
- [ ] Login fails with incorrect password
- [ ] Logout clears session properly

**Password Reset Flow:**
- [ ] Password reset email is sent
- [ ] OTP is received in email
- [ ] OTP verification works
- [ ] OTP expires after 10 minutes
- [ ] Password can be changed
- [ ] Can login with new password

**Notes Management:**
- [ ] User can create notes
- [ ] User can view all notes
- [ ] User can edit notes
- [ ] User can delete notes
- [ ] Changes are saved instantly

## 🌐 Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Push code to GitHub
2. Create new web service on hosting platform
3. Connect GitHub repository
4. Set environment variables:
   - `MONGO_URI`
   - `MAIL_USER`
   - `MAIL_PASS`
   - `SECRET_KEY`
   - `PORT`
5. Deploy!

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `dist` folder

3. Set environment variable:
   - `VITE_API_URL=your-backend-url`

### Post-Deployment Checklist

- [ ] Update CORS origin in backend to production frontend URL
- [ ] Test all authentication flows
- [ ] Verify email sending works
- [ ] Check database connectivity
- [ ] Test password reset functionality

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write meaningful commit messages
- Update documentation for new features
- Test thoroughly before submitting
- Add comments for complex logic
- Keep PRs focused on single features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Lucide Icons](https://lucide.dev/) - Icon library
- [MongoDB](https://www.mongodb.com/) - Database
- [Nodemailer](https://nodemailer.com/) - Email functionality
- [React](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework

## 📧 Contact & Support

For questions, issues, or suggestions:

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/mern-authentication-app/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/mern-authentication-app/discussions)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">

### 💻 Made with ❤️ by **JAY JOSHI**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jayyx3)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jay-joshi-75b75124b/)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://my-portfolio-jay-joshis-projects.vercel.app/)

**© 2025 JAY JOSHI. All Rights Reserved.**

*If you found this project useful, please consider giving it a star ⭐.*

</div>
