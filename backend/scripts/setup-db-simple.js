const mysql = require('mysql2');
require('dotenv').config({ path: './config.env' });

const setupDatabase = async () => {
  console.log('🔧 Setting up database...');
  console.log('📋 Database configuration:');
  console.log(`   Host: ${process.env.DB_HOST || 'localhost'}`);
  console.log(`   User: ${process.env.DB_USER || 'root'}`);
  console.log(`   Database: ${process.env.DB_NAME || 'havijchat'}`);
  
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'havijchat'
  });

  const executeQuery = (query, description) => {
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          console.error(`❌ ${description} failed:`, error.message);
          reject(error);
        } else {
          console.log(`✅ ${description} completed`);
          resolve(results);
        }
      });
    });
  };

  try {
    // Create database (if not exists)
    await executeQuery('CREATE DATABASE IF NOT EXISTS havijchat', 'Database creation');
    
    // Use the database
    await executeQuery('USE havijchat', 'Database selection');
    
    // Create messages table
    await executeQuery(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        content TEXT NOT NULL,
        sender VARCHAR(100) DEFAULT 'Anonymous',
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `, 'Messages table creation');
    
    // Check if table has data
    const [rows] = await executeQuery('SELECT COUNT(*) as count FROM messages', 'Data count check');
    
    if (rows[0].count === 0) {
      await executeQuery(`
        INSERT INTO messages (content, sender) VALUES 
        ('Welcome to HavijChat! 🎉', 'System'),
        ('This is a real-time chat application', 'System'),
        ('Start chatting with your friends! 💬', 'System')
      `, 'Sample data insertion');
    } else {
      console.log('✅ Sample data already exists');
    }
    
    console.log('🎉 Database setup completed successfully!');
    console.log('🚀 You can now start the backend server');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.error('');
    console.error('💡 Troubleshooting tips:');
    console.error('   1. Make sure MySQL server is running');
    console.error('   2. Check your database credentials in config.env');
    console.error('   3. Ensure the database user has proper permissions');
    console.error('   4. Try running: mysql -u root -p');
    console.error('');
    console.error('📝 Example config.env:');
    console.error('   DB_HOST=localhost');
    console.error('   DB_USER=root');
    console.error('   DB_PASSWORD=your_password');
    console.error('   DB_NAME=havijchat');
  } finally {
    connection.end();
  }
};

setupDatabase();
