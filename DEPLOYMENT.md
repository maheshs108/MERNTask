# MERNTask - Deployment Guide

## Environment Variables

### Server (.env)
```
MONGODB_URI=mongodb+srv://merntask:9phrbVoQtbtcqAaD@cluster0.xhouvqy.mongodb.net/MERNTASK?retryWrites=true&w=majority
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

### Client (.env)
```
VITE_API_BASE_URL=http://localhost:5000
```

## Render Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Create Render Service**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Use the following settings:
     - **Name**: mern-task
     - **Runtime**: Node
     - **Build Command**: `npm run build`
     - **Start Command**: `npm start`
     - **Instance Type**: Free

3. **Environment Variables**
   Add these in Render dashboard:
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://merntask:9phrbVoQtbtcqAaD@cluster0.xhouvqy.mongodb.net/MERNTASK?retryWrites=true&w=majority
   ```

## Local Development

1. **Install Dependencies**
   ```bash
   # Server
   cd server && npm install
   
   # Client
   cd client && npm install
   ```

2. **Start Servers**
   ```bash
   # Terminal 1 - Server
   cd server && npm start
   
   # Terminal 2 - Client
   cd client && npm run dev
   ```

3. **Access Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Features

- ✅ User CRUD Operations
- ✅ Pagination
- ✅ Search Functionality
- ✅ CSV Export
- ✅ File Upload (Profile Images)
- ✅ Responsive Design
- ✅ Production Ready
