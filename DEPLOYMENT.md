# 🚀 Deployment Guide

Complete guide for deploying your MERN Authentication App to production.

## 📋 Pre-Deployment Checklist

### ⚠️ CRITICAL: Security Check

Before pushing to GitHub, ensure:

- [ ] **NEVER commit `.env` files** - They contain sensitive credentials
- [ ] `.env` is listed in `.gitignore` ✅
- [ ] `.env.example` files are created (without real credentials) ✅
- [ ] All sensitive data is removed from code
- [ ] Database password is secure
- [ ] JWT secret key is strong and random
- [ ] Gmail app password is properly secured

### 📝 Required Files (All Created ✅)

- [ ] `README.md` - Project documentation
- [ ] `LICENSE` - MIT License
- [ ] `.gitignore` - Git ignore rules
- [ ] `backend/.env.example` - Backend env template
- [ ] `frontend/.env.example` - Frontend env template
- [ ] `frontend/vercel.json` - Vercel configuration

---

## 🔄 Part 1: Push to GitHub

### Step 1: Initialize Git Repository

```bash
# Navigate to project root
cd "D:\PROJECTS\Authentication Project (MERN STACK)"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MERN Authentication & Notes App"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New Repository"**
3. Name it: `mern-authentication-app` (or your preferred name)
4. **Don't** initialize with README (you already have one)
5. Click **"Create Repository"**

### Step 3: Push to GitHub

```bash
# Add remote origin (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/mern-authentication-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### ✅ Verification

Visit your GitHub repository - you should see all files EXCEPT `.env` files.

---

## 🌐 Part 2: Deploy Backend (Render/Railway)

### Option A: Deploy on Render (Recommended - Free Tier)

#### Step 1: Create Render Account
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub

#### Step 2: Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `mern-auth-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Instance Type**: Free

#### Step 3: Set Environment Variables

Add these in Render dashboard:

```
PORT=8000
MONGO_URI=mongodb+srv://2022kucp1091_db_user:jayjoshi123@authenticationproject.zwkurxi.mongodb.net
MAIL_USER=joshijayy421@gmail.com
MAIL_PASS=cmnz hdbc vrtb ifqe
SECRET_KEY=mjnfq4T5jTpeSAabO5jepaHdTHapKnjX24ei7_IY0Ebehb9th73429ktrQYniSdH
```

#### Step 4: Deploy
- Click **"Create Web Service"**
- Wait for deployment (5-10 minutes)
- Copy your backend URL: `https://your-app.onrender.com`

### Option B: Railway (Alternative)

1. Go to [Railway.app](https://railway.app)
2. Click **"Start a New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository
5. Select `backend` directory
6. Add environment variables
7. Deploy!

---

## 🎨 Part 3: Deploy Frontend (Vercel)

### Step 1: Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub

### Step 2: Import Project
1. Click **"Add New"** → **"Project"**
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Set Environment Variable

Add this in Vercel project settings:

```
VITE_API_URL=https://your-backend-url.onrender.com
```

Replace with your actual backend URL from Render.

### Step 4: Deploy
- Click **"Deploy"**
- Wait for deployment (2-3 minutes)
- Your app will be live at: `https://your-app.vercel.app`

---

## 🔧 Part 4: Post-Deployment Configuration

### Update Backend CORS

After frontend is deployed, update backend code:

**File**: `backend/server.js`

```javascript
app.use(cors({
    origin: 'https://your-app.vercel.app', // Your Vercel URL
    credentials: true
}))
```

Commit and push:
```bash
git add backend/server.js
git commit -m "Update CORS for production"
git push
```

Render will auto-deploy the changes.

---

## ✅ Testing Deployment

### 1. Test Frontend
Visit your Vercel URL: `https://your-app.vercel.app`

### 2. Test Backend
Visit: `https://your-backend.onrender.com`

You should see a response (might be empty, that's okay).

### 3. Test Complete Flow

- [ ] Register new user
- [ ] Check email for verification
- [ ] Verify email
- [ ] Login with credentials
- [ ] Create a note
- [ ] Edit a note
- [ ] Delete a note
- [ ] Logout
- [ ] Test forgot password
- [ ] Verify OTP
- [ ] Change password

---

## 🐛 Troubleshooting

### Issue: "Network Error" on Frontend

**Solution**: 
- Check `VITE_API_URL` in Vercel environment variables
- Make sure it matches your backend URL
- Redeploy frontend after changing env vars

### Issue: CORS Error

**Solution**:
- Update `cors` origin in `backend/server.js` to your Vercel URL
- Commit and push changes
- Wait for Render to redeploy

### Issue: Email Not Sending

**Solution**:
- Verify `MAIL_USER` and `MAIL_PASS` in Render env vars
- Ensure Gmail app password is correct
- Check Render logs for errors

### Issue: Database Connection Failed

**Solution**:
- Verify `MONGO_URI` in Render env vars
- Check MongoDB Atlas network access
- Whitelist IP: `0.0.0.0/0` in MongoDB Atlas

### Issue: 404 on Page Refresh (Vercel)

**Solution**:
Already fixed with `vercel.json` ✅

---

## 📊 Deployment Summary

| Component | Platform | URL | Status |
|-----------|----------|-----|--------|
| **Frontend** | Vercel | `https://your-app.vercel.app` | ⏳ To Deploy |
| **Backend** | Render | `https://your-backend.onrender.com` | ⏳ To Deploy |
| **Database** | MongoDB Atlas | Cloud | ✅ Already Setup |
| **Source Code** | GitHub | `https://github.com/yourusername/repo` | ⏳ To Push |

---

## 🔐 Environment Variables Quick Reference

### Backend (Render)
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
SECRET_KEY=your_jwt_secret_key
```

### Frontend (Vercel)
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## 🎯 Next Steps After Deployment

1. **Custom Domain** (Optional)
   - Add custom domain in Vercel
   - Update backend CORS with new domain

2. **Monitoring**
   - Check Render logs for backend errors
   - Monitor Vercel analytics

3. **Updates**
   - Push to GitHub → Auto-deploys on Vercel
   - Backend on Render also auto-deploys

4. **Backup**
   - Export MongoDB database regularly
   - Keep GitHub repository updated

---

## 📞 Support

If you encounter issues:
1. Check deployment logs in Render/Vercel dashboards
2. Verify all environment variables are set correctly
3. Test API endpoints manually
4. Check browser console for errors

---

## ✨ Congratulations!

Your MERN Authentication App is now live! 🎉

**Share your deployed links:**
- Frontend: `https://your-app.vercel.app`
- Backend API: `https://your-backend.onrender.com`

---

**Made with ❤️ by JAY JOSHI**
