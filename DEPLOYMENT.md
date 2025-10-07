# 🚀 Railway Deployment Guide

## Backend Deployment

### 1. Prepare Backend for Railway

1. **Environment Variables**: Railway will automatically detect your `config.env` file, but you can also set them in the Railway dashboard:
   ```
   PORT=5000
   DB_HOST=your_mysql_host
   DB_USER=your_db_user  
   DB_PASSWORD=your_db_password
   DB_NAME=havijchat
   ```

2. **Database Setup**: Run the database setup script before deployment:
   ```bash
   cd backend
   node scripts/setup-db.js
   ```

### 2. Deploy to Railway

1. Connect your GitHub repository to Railway
2. Select the `backend` folder as the root directory
3. Railway will automatically detect the Node.js app
4. Set the environment variables in Railway dashboard
5. Deploy!

### 3. Backend URL
After deployment, your backend will be available at:
```
https://your-app-name.railway.app
```

## Frontend Deployment

### 1. Update API URLs

Before deploying, update the API URLs in your frontend:

**frontend/src/services/api.js**:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.railway.app/api';
```

**frontend/src/services/socket.js**:
```javascript
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'https://your-backend-url.railway.app';
```

### 2. Build Frontend

```bash
cd frontend
npm run build
```

### 3. Deploy to Railway

1. Create a new Railway project for frontend
2. Select the `frontend` folder as root directory
3. Set environment variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.railway.app/api
   REACT_APP_SOCKET_URL=https://your-backend-url.railway.app
   ```
4. Deploy!

## Environment Variables for Railway

### Backend Environment Variables:
```
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=havijchat
```

### Frontend Environment Variables:
```
REACT_APP_API_URL=https://your-backend-url.railway.app/api
REACT_APP_SOCKET_URL=https://your-backend-url.railway.app
```

## Database Setup on Railway

1. **Option 1: External MySQL**
   - Use a cloud MySQL provider (PlanetScale, AWS RDS, etc.)
   - Set the connection details in Railway environment variables

2. **Option 2: Railway MySQL**
   - Add MySQL service in Railway
   - Connect to the provided database URL

## Testing Deployment

1. **Backend Test**: Visit `https://your-backend-url.railway.app/api/test`
2. **Frontend Test**: Visit your frontend URL and check connection status
3. **Socket Test**: Send a message and verify real-time functionality

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure CORS is properly configured in backend
2. **Socket Connection**: Check WebSocket support on Railway
3. **Database Connection**: Verify database credentials and network access
4. **Environment Variables**: Double-check all variables are set correctly

### Debug Steps:

1. Check Railway logs for errors
2. Test API endpoints individually
3. Verify database connectivity
4. Check browser console for frontend errors

## Production Checklist

- [ ] Database is set up and accessible
- [ ] Environment variables are configured
- [ ] CORS is properly set for production domains
- [ ] SSL certificates are working
- [ ] Socket.io is working over HTTPS
- [ ] API endpoints are responding
- [ ] Frontend is connecting to backend
- [ ] Real-time messaging is working

## Monitoring

Railway provides built-in monitoring for:
- Application logs
- Performance metrics
- Error tracking
- Resource usage

Use these tools to monitor your deployed application!
