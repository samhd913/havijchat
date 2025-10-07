const Message = require('../models/Message');

class MessageController {
  static async getAllMessages(req, res) {
    try {
      const messages = await Message.getAll();
      res.json({
        success: true,
        data: messages
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createMessage(req, res) {
    try {
      const { content, sender } = req.body;
      
      if (!content) {
        return res.status(400).json({
          success: false,
          message: 'Message content is required'
        });
      }

      const messageId = await Message.create(content, sender);
      const newMessage = await Message.getById(messageId);

      res.status(201).json({
        success: true,
        data: newMessage
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async testAPI(req, res) {
    res.json({
      success: true,
      message: 'HavijChat backend works!'
    });
  }
}

module.exports = MessageController;
