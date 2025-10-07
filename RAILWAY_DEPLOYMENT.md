# 🚀 راهنمای Deploy روی Railway

## 📋 تنظیمات پورت:

### **Backend (پورت خودکار):**
- Railway به صورت خودکار پورت را از `process.env.PORT` می‌خواند
- نیازی به تنظیم دستی پورت نیست
- Railway پورت‌های مختلف را به صورت خودکار مدیریت می‌کند

### **Frontend (پورت 3000):**
- React به صورت پیش‌فرض روی پورت 3000 اجرا می‌شود
- Railway آن را به صورت خودکار مدیریت می‌کند

## 🔧 مراحل Deploy:

### **1. Backend Deploy:**

#### **مرحله 1: ایجاد پروژه در Railway**
1. به [railway.app](https://railway.app) بروید
2. "New Project" کلیک کنید
3. "Deploy from GitHub repo" انتخاب کنید
4. Repository `samhd913/havijchat` را انتخاب کنید
5. **Root Directory**: `backend` انتخاب کنید

#### **مرحله 2: تنظیم متغیرهای محیطی**
در Railway Dashboard، متغیرهای زیر را اضافه کنید:

```env
# Server
PORT=5000

# Database (از Railway MySQL service)
DB_HOST=your_railway_mysql_host
DB_USER=your_railway_db_user
DB_PASSWORD=your_railway_db_password
DB_NAME=havijchat
```

#### **مرحله 3: اضافه کردن MySQL Service**
1. در Railway Dashboard، "Add Service" کلیک کنید
2. "Database" → "MySQL" انتخاب کنید
3. متغیرهای محیطی را از MySQL service کپی کنید

### **2. Frontend Deploy:**

#### **مرحله 1: ایجاد پروژه دوم**
1. "New Project" کلیک کنید
2. "Deploy from GitHub repo" انتخاب کنید
3. همان repository را انتخاب کنید
4. **Root Directory**: `frontend` انتخاب کنید

#### **مرحله 2: تنظیم متغیرهای محیطی**
```env
# Backend URL (از backend service کپی کنید)
REACT_APP_API_URL=https://your-backend-url.railway.app/api
REACT_APP_SOCKET_URL=https://your-backend-url.railway.app

# Build settings
GENERATE_SOURCEMAP=false
```

## 🌐 URL های نهایی:

### **Backend:**
```
https://your-backend-name.railway.app
```

### **Frontend:**
```
https://your-frontend-name.railway.app
```

## 🔧 تنظیمات مهم:

### **CORS Configuration:**
Backend باید CORS را برای frontend domain تنظیم کند:

```javascript
const io = socketIo(server, {
  cors: {
    origin: "https://your-frontend-name.railway.app",
    methods: ["GET", "POST"]
  }
});
```

### **Environment Variables:**

#### **Backend (.env):**
```env
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=havijchat
```

#### **Frontend (.env):**
```env
REACT_APP_API_URL=https://your-backend-url.railway.app/api
REACT_APP_SOCKET_URL=https://your-backend-url.railway.app
```

## 🧪 تست Deploy:

### **1. تست Backend:**
```bash
curl https://your-backend-url.railway.app/api/test
```

### **2. تست Frontend:**
- به frontend URL بروید
- Status indicators را چک کنید
- پیام ارسال کنید

## 🆘 Troubleshooting:

### **مشکلات رایج:**

1. **CORS Error**: Frontend URL را در backend CORS تنظیم کنید
2. **Socket Connection Failed**: WebSocket URL را چک کنید
3. **Database Connection**: متغیرهای محیطی دیتابیس را بررسی کنید
4. **Build Failed**: package.json و dependencies را چک کنید

### **Logs بررسی:**
```bash
# در Railway Dashboard
# هر service → Logs را چک کنید
```

## 📝 نکات مهم:

1. **پورت‌ها**: Railway خودکار مدیریت می‌کند
2. **HTTPS**: Railway خودکار SSL ارائه می‌دهد
3. **Domain**: Railway domain رایگان ارائه می‌دهد
4. **Database**: Railway MySQL service استفاده کنید
5. **Environment**: متغیرهای محیطی را درست تنظیم کنید

## 🎯 نتیجه نهایی:

- **Backend**: `https://your-backend.railway.app`
- **Frontend**: `https://your-frontend.railway.app`
- **Database**: Railway MySQL
- **Real-time Chat**: کاملاً کار می‌کند
