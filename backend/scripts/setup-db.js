const mysql = require('mysql2');
require('dotenv').config({ path: './config.env' });

const setupDatabase = async () => {
  let connection;
  
  try {
    console.log('🔧 Setting up database...');
    
    // Create connection
    connection = mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    });

    // Create database
    await connection.promise().execute('CREATE DATABASE IF NOT EXISTS havijchat');
    console.log('✅ Database created/verified');
    
    // Close initial connection
    await connection.promise().end();
    
    // Create new connection to the specific database
    connection = mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: 'havijchat'
    });
    
    // Create messages table
    await connection.promise().execute(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        content TEXT NOT NULL,
        sender VARCHAR(100) DEFAULT 'Anonymous',
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Messages table created/verified');
    
    // Insert sample data
    const [rows] = await connection.promise().execute('SELECT COUNT(*) as count FROM messages');
    if (rows[0].count === 0) {
      await connection.promise().execute(`
        INSERT INTO messages (content, sender) VALUES 
        ('Welcome to HavijChat! 🎉', 'System'),
        ('This is a real-time chat application', 'System'),
        ('Start chatting with your friends! 💬', 'System')
      `);
      console.log('✅ Sample data inserted');
    }
    
    console.log('🎉 Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.error('💡 Make sure MySQL is running and credentials are correct');
    console.error('💡 Check your config.env file for correct database settings');
  } finally {
    if (connection) {
      try {
        await connection.promise().end();
      } catch (err) {
        // Connection might already be closed
      }
    }
  }
};

setupDatabase();
