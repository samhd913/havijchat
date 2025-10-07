# 🛠️ Railway Troubleshooting Guide

## ❌ "Application failed to respond" Error

### 🔍 **علل احتمالی:**

1. **Database Connection Failed**
2. **Environment Variables Missing**
3. **Port Configuration Issues**
4. **CORS Configuration Problems**
5. **Dependencies Not Installed**

### 🔧 **راه‌حل‌ها:**

#### **1. بررسی Environment Variables:**
```env
# Backend Environment Variables
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=havijchat
FRONTEND_URL=https://your-frontend-url.railway.app
```

#### **2. بررسی Database Connection:**
- MySQL service در Railway اضافه شده باشد
- متغیرهای دیتابیس درست تنظیم شده باشند
- Database connection string صحیح باشد

#### **3. بررسی Logs:**
```bash
# در Railway Dashboard
# Service → Logs را چک کنید
```

#### **4. Health Check:**
```bash
# تست health endpoint
curl https://your-backend-url.railway.app/health
```

### 🚀 **مراحل Debug:**

#### **مرحله 1: بررسی Environment Variables**
```bash
# در Railway Dashboard
# Variables tab را چک کنید
```

#### **مرحله 2: بررسی Database**
```bash
# MySQL service اضافه شده باشد
# Connection string درست باشد
```

#### **مرحله 3: بررسی CORS**
```bash
# FRONTEND_URL تنظیم شده باشد
# CORS configuration درست باشد
```

#### **مرحله 4: بررسی Dependencies**
```bash
# package.json درست باشد
# Dependencies نصب شده باشند
```

### 🔧 **تنظیمات Railway:**

#### **Backend Service:**
- **Root Directory**: `backend`
- **Start Command**: `npm start`
- **Health Check**: `/health`
- **Environment Variables**: همه متغیرها تنظیم شده باشند

#### **Frontend Service:**
- **Root Directory**: `frontend`
- **Start Command**: `npm start`
- **Environment Variables**: 
  - `REACT_APP_API_URL`
  - `REACT_APP_SOCKET_URL`

### 🧪 **تست‌های مورد نیاز:**

#### **1. Backend Health Check:**
```bash
curl https://your-backend-url.railway.app/health
# باید پاسخ دهد: {"status":"OK","timestamp":"...","uptime":...}
```

#### **2. API Test:**
```bash
curl https://your-backend-url.railway.app/api/test
# باید پاسخ دهد: {"success":true,"message":"HavijChat backend works!"}
```

#### **3. Frontend Connection:**
- Frontend URL را باز کنید
- Status indicators را چک کنید
- Console errors را بررسی کنید

### 🆘 **مشکلات رایج:**

#### **1. Database Connection Error:**
```bash
# راه‌حل: MySQL service اضافه کنید
# Environment variables را تنظیم کنید
```

#### **2. CORS Error:**
```bash
# راه‌حل: FRONTEND_URL را تنظیم کنید
# CORS configuration را چک کنید
```

#### **3. Port Error:**
```bash
# راه‌حل: PORT environment variable را تنظیم کنید
# Railway خودکار پورت را مدیریت می‌کند
```

#### **4. Dependencies Error:**
```bash
# راه‌حل: package.json را چک کنید
# Dependencies را نصب کنید
```

### 📋 **چک‌لیست Deploy:**

- [ ] MySQL service اضافه شده
- [ ] Environment variables تنظیم شده
- [ ] CORS configuration درست
- [ ] Health check endpoint کار می‌کند
- [ ] API endpoints پاسخ می‌دهند
- [ ] Frontend به backend متصل می‌شود
- [ ] Socket.io connection کار می‌کند

### 🎯 **نتیجه نهایی:**

پس از رفع مشکلات:
- **Backend**: `https://your-backend-url.railway.app`
- **Frontend**: `https://your-frontend-url.railway.app`
- **Health Check**: `https://your-backend-url.railway.app/health`
- **API Test**: `https://your-backend-url.railway.app/api/test`
