const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const { testConnection } = require('./models/database');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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
server.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🔌 Socket.io ready for connections`);
  
  // Test database connection
  await testConnection();
});

module.exports = { app, server, io };
