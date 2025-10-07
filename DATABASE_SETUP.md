# 🗄️ Database Setup Guide

## Option 1: Automatic Setup (Recommended)

### Prerequisites
- MySQL server must be running
- Database credentials must be correct in `backend/config.env`

### Run Setup
```bash
# Try the improved setup script
npm run setup:db

# If that fails, try the simple version
npm run setup:db:simple
```

## Option 2: Manual Setup

### 1. Connect to MySQL
```bash
mysql -u root -p
```

### 2. Create Database and Table
```sql
-- Create database
CREATE DATABASE IF NOT EXISTS havijchat;
USE havijchat;

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    sender VARCHAR(100) DEFAULT 'Anonymous',
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO messages (content, sender) VALUES 
('Welcome to HavijChat! 🎉', 'System'),
('This is a real-time chat application', 'System'),
('Start chatting with your friends! 💬', 'System');
```

### 3. Verify Setup
```sql
-- Check if table exists
SHOW TABLES;

-- Check sample data
SELECT * FROM messages;
```

## Option 3: Using MySQL Workbench or phpMyAdmin

1. **Create Database**: `havijchat`
2. **Create Table**: Use the SQL from Option 2
3. **Insert Sample Data**: Use the INSERT statements from Option 2

## 🔧 Configuration

### Update `backend/config.env`:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=havijchat
```

### Common MySQL Issues:

1. **"Access denied"**: Check username/password
2. **"Can't connect"**: Make sure MySQL service is running
3. **"Database doesn't exist"**: Create the database manually first

### Windows MySQL:
```bash
# Start MySQL service
net start mysql

# Or if using XAMPP
# Start XAMPP Control Panel and start MySQL
```

### macOS MySQL:
```bash
# Start MySQL
brew services start mysql
# or
sudo /usr/local/mysql/support-files/mysql.server start
```

### Linux MySQL:
```bash
# Start MySQL
sudo systemctl start mysql
# or
sudo service mysql start
```

## 🧪 Test Database Connection

After setup, test the connection:

```bash
# Test from command line
mysql -u root -p -e "USE havijchat; SELECT * FROM messages;"

# Or test from Node.js
cd backend
node -e "
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'havijchat'
});
connection.query('SELECT * FROM messages', (err, results) => {
  if (err) console.error('❌', err.message);
  else console.log('✅', results);
  connection.end();
});
"
```

## 🚀 Next Steps

Once database is set up:

1. **Start Backend**: `npm run dev:backend`
2. **Start Frontend**: `npm run dev:frontend`
3. **Test API**: Visit `http://localhost:5000/api/test`
4. **Test Chat**: Open `http://localhost:3000`

## 🆘 Troubleshooting

### Error: "Can't add new command when connection is in closed state"
- **Solution**: Use the simple setup script: `npm run setup:db:simple`

### Error: "Access denied for user 'root'@'localhost'"
- **Solution**: Check MySQL credentials and permissions

### Error: "Can't connect to MySQL server"
- **Solution**: Make sure MySQL service is running

### Error: "Unknown database 'havijchat'"
- **Solution**: Create database manually first, then run setup
