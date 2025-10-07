# 🛠️ حل مشکل 502 Error در Railway

## ❌ **خطای 502:**
```
GET / 502 141ms
GET /favicon.ico 502 1ms
```

## 🔍 **علل احتمالی:**

1. **سرور در حال اجرا نیست**
2. **Port configuration مشکل دارد**
3. **Dependencies نصب نشده‌اند**
4. **Environment variables تنظیم نشده‌اند**
5. **Database connection مشکل دارد**

## ✅ **راه‌حل‌ها:**

### **1. بررسی Railway Logs:**
```bash
# در Railway Dashboard
# Service → Logs را چک کنید
```

### **2. بررسی Environment Variables:**
```env
# Backend Variables (در Railway Dashboard)
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=havijchat
FRONTEND_URL=https://your-frontend-url.railway.app
```

### **3. بررسی Root Directory:**
- **Backend**: Root Directory = `backend`
- **Frontend**: Root Directory = `frontend`

### **4. بررسی Start Command:**
- **Backend**: `npm start` (خودکار)
- **Frontend**: `npm start` (خودکار)

## 🔧 **مراحل Debug:**

### **مرحله 1: بررسی Logs**
```bash
# در Railway Dashboard
# Service → Logs
# خطاهای قرمز را چک کنید
```

### **مرحله 2: بررسی Health Check**
```bash
# تست health endpoint
curl https://your-backend-url.railway.app/health
```

### **مرحله 3: بررسی API**
```bash
# تست API endpoint
curl https://your-backend-url.railway.app/api/test
```

## 🚀 **راه‌حل‌های سریع:**

### **1. Redeploy Service:**
```bash
# در Railway Dashboard
# Service → Settings → Redeploy
```

### **2. بررسی Environment Variables:**
```bash
# همه متغیرها را چک کنید
# Database connection را تست کنید
```

### **3. بررسی Dependencies:**
```bash
# package.json درست باشد
# Dependencies نصب شده باشند
```

## 📋 **چک‌لیست Railway:**

### **Backend Service:**
- [ ] Root Directory = `backend`
- [ ] Environment Variables تنظیم شده
- [ ] MySQL Service اضافه شده
- [ ] Health Check کار می‌کند
- [ ] API endpoints پاسخ می‌دهند

### **Frontend Service:**
- [ ] Root Directory = `frontend`
- [ ] Environment Variables تنظیم شده
- [ ] Backend URL درست باشد
- [ ] Build موفق باشد

## 🧪 **تست‌های مورد نیاز:**

### **1. Backend Health Check:**
```bash
curl https://your-backend-url.railway.app/health
# باید پاسخ دهد: {"status":"OK","timestamp":"...","uptime":...}
```

### **2. API Test:**
```bash
curl https://your-backend-url.railway.app/api/test
# باید پاسخ دهد: {"success":true,"message":"HavijChat backend works!"}
```

### **3. Frontend Test:**
```bash
# Frontend URL را باز کنید
# Status indicators را چک کنید
```

## 🆘 **مشکلات رایج:**

### **1. Database Connection Error:**
```bash
# راه‌حل: MySQL service اضافه کنید
# Environment variables را تنظیم کنید
```

### **2. Port Error:**
```bash
# راه‌حل: PORT environment variable را تنظیم کنید
# Railway خودکار پورت را مدیریت می‌کند
```

### **3. Dependencies Error:**
```bash
# راه‌حل: package.json را چک کنید
# Dependencies را نصب کنید
```

### **4. CORS Error:**
```bash
# راه‌حل: FRONTEND_URL را تنظیم کنید
# CORS configuration را چک کنید
```

## 🎯 **نتیجه نهایی:**

پس از رفع مشکلات:
- **Backend**: `https://your-backend-url.railway.app/health` ✅
- **Frontend**: `https://your-frontend-url.railway.app` ✅
- **API**: `https://your-backend-url.railway.app/api/test` ✅
- **Real-time Chat**: کاملاً کار می‌کند ✅

## 📞 **اگر مشکل ادامه داشت:**

1. **Railway Logs** را بررسی کنید
2. **Environment Variables** را چک کنید
3. **Database Connection** را تست کنید
4. **Service را Redeploy** کنید
