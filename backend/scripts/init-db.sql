-- HavijChat Database Setup
CREATE DATABASE IF NOT EXISTS havijchat;
USE havijchat;

-- Messages table
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
