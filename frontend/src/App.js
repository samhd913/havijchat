import React, { useState, useEffect } from 'react';
import ApiService from './services/api';
import socketService from './services/socket';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sender, setSender] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    // Test API connection
    const testAPI = async () => {
      try {
        const response = await ApiService.testConnection();
        console.log('✅ API Response:', response);
        setApiStatus('connected');
      } catch (error) {
        console.error('❌ API Error:', error);
        setApiStatus('error');
      }
    };

    // Initialize socket connection
    const socket = socketService.connect();
    
    // Set up socket event listeners
    socketService.onReceiveMessage((message) => {
      console.log('📨 Received message:', message);
      setMessages(prev => [message, ...prev]);
    });

    socketService.onError((error) => {
      console.error('❌ Socket error:', error);
    });

    // Test API and set connection status
    testAPI();
    setIsConnected(socketService.isConnected);

    // Cleanup on unmount
    return () => {
      socketService.removeAllListeners();
      socketService.disconnect();
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;

    const messageData = {
      content: newMessage.trim(),
      sender: sender.trim() || 'Anonymous'
    };

    // Send via socket for real-time
    socketService.sendMessage(messageData);

    // Also send via API for persistence
    ApiService.sendMessage(messageData)
      .then(response => {
        console.log('✅ Message saved:', response);
      })
      .catch(error => {
        console.error('❌ Failed to save message:', error);
      });

    setNewMessage('');
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="app">
      <div className="chat-container">
        <header className="chat-header">
          <h1>💬 HavijChat</h1>
          <div className="status-indicators">
            <div className={`status ${apiStatus}`}>
              API: {apiStatus === 'connected' ? '✅' : apiStatus === 'error' ? '❌' : '⏳'}
            </div>
            <div className={`status ${isConnected ? 'connected' : 'error'}`}>
              Socket: {isConnected ? '✅' : '❌'}
            </div>
          </div>
        </header>

        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="no-messages">
              <p>📭 No messages yet. Start the conversation!</p>
            </div>
          ) : (
            <div className="messages-list">
              {messages.map((message, index) => (
                <div key={message.id || index} className="message">
                  <div className="message-header">
                    <span className="sender">{message.sender}</span>
                    <span className="timestamp">{formatTime(message.timestamp)}</span>
                  </div>
                  <div className="message-content">{message.content}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <form className="message-form" onSubmit={handleSendMessage}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="sender-input"
            />
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="message-input"
              required
            />
            <button type="submit" className="send-button">
              Send 📤
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
