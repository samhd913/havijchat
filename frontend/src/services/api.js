import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service class following MVVM pattern
class ApiService {
  static async testConnection() {
    try {
      const response = await api.get('/test');
      return response.data;
    } catch (error) {
      throw new Error(`API connection failed: ${error.message}`);
    }
  }

  static async getMessages() {
    try {
      const response = await api.get('/messages');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch messages: ${error.message}`);
    }
  }

  static async sendMessage(messageData) {
    try {
      const response = await api.post('/messages', messageData);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to send message: ${error.message}`);
    }
  }
}

export default ApiService;
