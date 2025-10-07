const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');

// Test API endpoint
router.get('/test', MessageController.testAPI);

// Message routes
router.get('/messages', MessageController.getAllMessages);
router.post('/messages', MessageController.createMessage);

module.exports = router;
