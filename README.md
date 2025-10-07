# 💬 HavijChat

A full-stack real-time chat application built with React, Node.js, Express, MySQL, and Socket.io.

## 🚀 Features

- **Real-time messaging** with Socket.io
- **RESTful API** with Express.js
- **MySQL database** for message persistence
- **Modern React frontend** with clean UI
- **MVC architecture** for backend
- **MVVM pattern** for frontend
- **Ready for Railway deployment**

## 📁 Project Structure

```
havijchat/
├── backend/                 # Backend API
│   ├── controllers/        # MVC Controllers
│   ├── models/            # Database Models
│   ├── routes/            # API Routes
│   ├── scripts/           # Database setup
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── services/      # API & Socket services
│   │   ├── App.js         # Main React component
│   │   └── App.css        # Styling
│   └── package.json       # Frontend dependencies
└── package.json           # Root package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- npm or yarn

### 1. Clone and Install Dependencies

```bash
# Install all dependencies
npm run install:all
```

### 2. Database Setup

```bash
# Setup MySQL database
npm run setup:db
```

### 3. Environment Configuration

Create `backend/config.env` file:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=havijchat
```

### 4. Start Development

```bash
# Start both backend and frontend
npm run dev
```

Or start separately:
```bash
# Backend only (port 5000)
npm run dev:backend

# Frontend only (port 3000)
npm run dev:frontend
```

## 🔧 API Endpoints

- `GET /api/test` - Test API connection
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create new message

## 🔌 Socket.io Events

- `sendMessage` - Send a message
- `receiveMessage` - Receive a message

## 🚀 Railway Deployment

### Backend Deployment

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard:
   ```
   PORT=5000
   DB_HOST=your_mysql_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=havijchat
   ```
3. Deploy backend folder

### Frontend Deployment

1. Build the frontend:
   ```bash
   npm run build:frontend
   ```
2. Update API URLs in `frontend/src/services/api.js` and `frontend/src/services/socket.js`
3. Deploy frontend folder

## 🎯 Usage

1. Open the application in your browser
2. Check connection status (API and Socket indicators)
3. Enter your name (optional)
4. Type and send messages
5. Messages appear in real-time for all connected users

## 🛠️ Development

### Backend Development
- Uses nodemon for auto-restart
- MVC architecture with clean separation
- MySQL connection with connection pooling
- Socket.io for real-time communication

### Frontend Development
- React with hooks
- MVVM pattern with service layer
- Axios for API calls
- Socket.io-client for real-time updates
- Responsive design with modern CSS

## 📝 Scripts

- `npm run install:all` - Install all dependencies
- `npm run setup:db` - Setup database
- `npm run dev` - Start development servers
- `npm run dev:backend` - Start backend only
- `npm run dev:frontend` - Start frontend only
- `npm run build:frontend` - Build frontend for production

## 🔍 Troubleshooting

1. **Database Connection Issues**: Check MySQL is running and credentials are correct
2. **Socket Connection Issues**: Ensure backend is running on port 5000
3. **API Connection Issues**: Check CORS settings and API URL configuration

## 📄 License

MIT License - feel free to use this project for learning and development!
