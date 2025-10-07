const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const { testConnection } = require('./models/database');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const server = http.createServer(app);

// CORS configuration for Railway
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST"],
  credentials: true
};

const io = socketIo(server, {
  cors: corsOptions
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Routes
app.use('/api', messageRoutes);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  socket.on('sendMessage', async (data) => {
    try {
      console.log('📨 Received message:', data);
      
      // Broadcast message to all connected clients
      io.emit('receiveMessage', {
        id: Date.now(),
        content: data.content,
        sender: data.sender || 'Anonymous',
        timestamp: new Date().toISOString()
      });
      
      console.log('📤 Message broadcasted to all clients');
    } catch (error) {
      console.error('❌ Error handling message:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Start server
server.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🔌 Socket.io ready for connections`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Test database connection
  try {
    await testConnection();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('💡 Make sure database environment variables are set correctly');
  }
});

module.exports = { app, server, io };