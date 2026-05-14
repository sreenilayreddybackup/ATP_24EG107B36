# Deployment Guide - Employee Management App Frontend

## ✅ All Changes Complete!

Your frontend is now ready for deployment. Here's what was fixed:

### 1. **Backend URL Configuration**
- ✅ Created `.env` and `.env.local` files with the new backend URL:
  ```
  VITE_BACKEND_URL=https://employee-project-vdh2.onrender.com/emp-api
  ```

### 2. **Updated Components**
- ✅ `CreateEmp.jsx` - Updated to use environment variable
- ✅ `ListOfEmps.jsx` - Updated to use environment variable (2 API calls)
- ✅ `EditEmployee.jsx` - Updated to use environment variable

### 3. **Vite Configuration**
- ✅ Enhanced `vite.config.js` with:
  - Build optimization (minification, sourcemap disabled)
  - Development server port configuration (3000)
  - Proper output directory setup

### 4. **Added Files**
- ✅ `.gitignore` - Excludes node_modules, dist, and env files

---

## 🚀 How to Deploy

### Option 1: Deploy to Vercel (Recommended - Free & Easy)
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend directory
cd c:\Users\sreen\OneDrive\Desktop\ATP_24EG107B36\WEEK-6\emp-app\frontend

# Deploy
vercel
```

### Option 2: Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: Deploy to GitHub Pages
```bash
# Add to package.json
"deploy": "npm run build && gh-pages -d dist"

# Then run
npm install --save-dev gh-pages
npm run deploy
```

---

## 📋 Pre-Deployment Checklist

Before deploying, do this:

```bash
# 1. Install dependencies
npm install

# 2. Test locally
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ⚙️ Environment Variables

The `.env` file is now properly configured:
- **Local Development**: Uses `.env.local` (already set up)
- **Production**: Uses `.env` (can override if needed)

---

## 🔍 Verification

All API endpoints now use:
- `POST /employees` - Create employee
- `GET /employees` - List all employees  
- `DELETE /employees/{id}` - Delete employee
- `PUT /employees/{id}` - Update employee

All pointing to: `https://employee-project-vdh2.onrender.com/emp-api`

---

## ✨ Ready to Go!

Your frontend is now production-ready. Choose your deployment platform and follow the steps above!

