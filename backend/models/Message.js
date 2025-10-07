const { pool } = require('./database');

class Message {
  constructor(data) {
    this.id = data.id;
    this.content = data.content;
    this.sender = data.sender;
    this.timestamp = data.timestamp;
  }

  static async create(content, sender = 'Anonymous') {
    try {
      const [result] = await pool.execute(
        'INSERT INTO messages (content, sender) VALUES (?, ?)',
        [content, sender]
      );
      return result.insertId;
    } catch (error) {
      throw new Error(`Failed to create message: ${error.message}`);
    }
  }

  static async getAll() {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM messages ORDER BY timestamp DESC LIMIT 50'
      );
      return rows;
    } catch (error) {
      throw new Error(`Failed to get messages: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM messages WHERE id = ?',
        [id]
      );
      return rows[0];
    } catch (error) {
      throw new Error(`Failed to get message: ${error.message}`);
    }
  }
}

module.exports = Message;
