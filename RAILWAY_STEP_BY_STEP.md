# 🚀 راهنمای قدم‌به‌قدم Railway Deployment

## 📋 **مراحل کامل Deploy:**

### **مرحله 1: ایجاد Backend Service**

#### **1.1: ایجاد پروژه جدید**
```bash
# به railway.app بروید
# "New Project" → "Deploy from GitHub repo"
# Repository: samhd913/havijchat
```

#### **1.2: تنظیم Root Directory**
```bash
# در Railway Dashboard
# Service → Settings
# Root Directory: backend
# Start Command: npm start
```

#### **1.3: اضافه کردن MySQL Service**
```bash
# در Railway Dashboard
# "Add Service" → "Database" → "MySQL"
# MySQL service اضافه می‌شود
```

#### **1.4: تنظیم Environment Variables**
```env
# در Railway Dashboard → Variables
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=havijchat
FRONTEND_URL=https://your-frontend-url.railway.app
```

### **مرحله 2: ایجاد Frontend Service**

#### **2.1: ایجاد پروژه جدید**
```bash
# "New Project" → "Deploy from GitHub repo"
# Repository: samhd913/havijchat
```

#### **2.2: تنظیم Root Directory**
```bash
# در Railway Dashboard
# Service → Settings
# Root Directory: frontend
# Start Command: npm start
```

#### **2.3: تنظیم Environment Variables**
```env
# در Railway Dashboard → Variables
REACT_APP_API_URL=https://your-backend-url.railway.app/api
REACT_APP_SOCKET_URL=https://your-backend-url.railway.app
```

### **مرحله 3: تست و بررسی**

#### **3.1: تست Backend**
```bash
# Health Check
curl https://your-backend-url.railway.app/health

# API Test
curl https://your-backend-url.railway.app/api/test
```

#### **3.2: تست Frontend**
```bash
# Frontend URL را باز کنید
# Status indicators را چک کنید
# پیام ارسال کنید
```

## 🔧 **تنظیمات مهم:**

### **Backend Service:**
- **Root Directory**: `backend`
- **Start Command**: `npm start`
- **Port**: خودکار (Railway)
- **Health Check**: `/health`

### **Frontend Service:**
- **Root Directory**: `frontend`
- **Start Command**: `npm start`
- **Port**: خودکار (Railway)

## 🧪 **تست‌های مورد نیاز:**

### **Backend Tests:**
1. **Health Check**: `https://your-backend-url.railway.app/health`
2. **API Test**: `https://your-backend-url.railway.app/api/test`
3. **Database**: Logs را چک کنید

### **Frontend Tests:**
1. **Frontend URL**: `https://your-frontend-url.railway.app`
2. **Connection Status**: API و Socket indicators
3. **Real-time Chat**: پیام ارسال کنید

## 🆘 **مشکلات رایج:**

### **1. Root Directory اشتباه:**
```bash
# مشکل: Root Directory = / (root)
# راه‌حل: Root Directory = backend
```

### **2. Dependencies نصب نشده:**
```bash
# مشکل: "Cannot find module 'express'"
# راه‌حل: Root Directory = backend
```

### **3. Database Connection:**
```bash
# مشکل: "Database connection failed"
# راه‌حل: MySQL Service اضافه کنید
```

### **4. CORS Error:**
```bash
# مشکل: "CORS error"
# راه‌حل: FRONTEND_URL را تنظیم کنید
```

## 🎯 **نتیجه نهایی:**

پس از تکمیل مراحل:
- **Backend**: `https://your-backend-url.railway.app` ✅
- **Frontend**: `https://your-frontend-url.railway.app` ✅
- **Real-time Chat**: کاملاً کار می‌کند ✅
- **Database**: متصل و کار می‌کند ✅

## 📞 **اگر مشکل ادامه داشت:**

1. **Railway Logs** را بررسی کنید
2. **Environment Variables** را چک کنید
3. **Root Directory** را بررسی کنید
4. **Service را Redeploy** کنید
5. **MySQL Service** را اضافه کنید
