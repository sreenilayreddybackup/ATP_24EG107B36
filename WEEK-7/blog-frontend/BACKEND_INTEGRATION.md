# Blog Frontend - Backend Integration Guide

## Overview
The blog frontend has been successfully integrated with the production backend at `https://blogapp-12zw.onrender.com`.

## What Was Changed

### 1. **Created API Configuration File** 
   - **File**: `src/services/apiConfig.js`
   - Contains all API endpoint definitions in one centralized location
   - Makes it easy to manage and update API URLs

### 2. **Updated All API Calls**
   The following components were updated to use the new backend URL:
   - `src/store/authStore.js` - Authentication (login, logout, check-auth, register)
   - `src/components/Register.jsx` - User registration
   - `src/components/Login.jsx` - Login (uses authStore)
   - `src/components/ArticleByID.jsx` - Article retrieval, comments, and article status updates
   - `src/components/UserProfile.jsx` - User articles listing
   - `src/components/WriteArticles.jsx` - Create new articles
   - `src/components/EditArticle.jsx` - Edit existing articles
   - `src/components/AuthorArticles.jsx` - Author's articles listing

### 3. **Environment Configuration**
   - Created `.env.local` for local configuration
   - Created `.env.example` as a template
   - Backend URL can be easily changed via environment variables

## API Endpoints Integrated

### Authentication
- `POST /auth/login` - User login
- `GET /auth/logout` - User logout
- `GET /auth/check-auth` - Check authentication status
- `POST /auth/users` - User registration

### Author API
- `GET /author-api/articles` - Get author's articles
- `POST /author-api/article` - Create new article
- `PUT /author-api/articles` - Update article
- `PATCH /author-api/articles` - Update article status

### User API
- `GET /user-api/articles` - Get all articles
- `GET /user-api/article/{id}` - Get article by ID
- `PUT /user-api/articles` - Add comment to article

## How to Use

### Development (Local Backend)
If you want to use a local backend during development:
1. Edit `.env.local` and uncomment the local URL:
   ```
   # VITE_API_URL=https://blogapp-12zw.onrender.com
   VITE_API_URL=http://localhost:4000
   ```
2. Start your local backend server on port 4000
3. Restart the development server: `npm run dev`

### Production (Cloud Backend)
The frontend is configured to use the production backend by default:
- Backend URL: `https://blogapp-12zw.onrender.com`
- No changes needed to use the production backend

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Key Features Implemented

✅ Centralized API configuration  
✅ All authentication flows connected  
✅ Article CRUD operations integrated  
✅ User and author workflows connected  
✅ Comments system integrated  
✅ Environment variable support  
✅ Credentials included in all requests (withCredentials: true)  

## Notes

- All API requests include `withCredentials: true` to handle cookies for authentication
- The backend URL is configurable via environment variables
- The configuration file uses Vite's environment variable system
- All endpoints maintain the same functionality as the localhost version

## Troubleshooting

If you encounter CORS issues:
1. Ensure the backend is running and accessible
2. Verify the backend URL in `.env.local`
3. Check that the backend allows credentials from your frontend domain
4. Restart the development server after changing environment variables

## Next Steps

1. Test all authentication flows
2. Verify article creation, editing, and deletion
3. Test user and author profile functionality
4. Verify comments system works correctly
5. Deploy to your hosting platform
