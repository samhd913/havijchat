# ⚡ راهنمای سریع حل مشکل 502

## 🚨 **خطای 502 - سرور در حال اجرا نیست**

### **مرحله 1: بررسی Railway Logs**
```bash
# در Railway Dashboard
# Service → Logs
# خطاهای قرمز را چک کنید
```

### **مرحله 2: بررسی Environment Variables**
```env
# Backend Variables (در Railway Dashboard)
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=havijchat
FRONTEND_URL=https://your-frontend-url.railway.app
```

### **مرحله 3: بررسی Root Directory**
- **Backend**: Root Directory = `backend`
- **Frontend**: Root Directory = `frontend`

### **مرحله 4: Redeploy Service**
```bash
# در Railway Dashboard
# Service → Settings → Redeploy
```

## 🔧 **راه‌حل‌های سریع:**

### **1. اگر Backend کار نمی‌کند:**
```bash
# بررسی کنید:
- Root Directory = backend
- Environment Variables تنظیم شده
- MySQL Service اضافه شده
- Health Check: /health
```

### **2. اگر Frontend کار نمی‌کند:**
```bash
# بررسی کنید:
- Root Directory = frontend
- Environment Variables تنظیم شده
- Backend URL درست باشد
```

## 🧪 **تست‌های سریع:**

### **Backend Health Check:**
```bash
curl https://your-backend-url.railway.app/health
# باید پاسخ دهد: {"status":"OK","timestamp":"...","uptime":...}
```

### **API Test:**
```bash
curl https://your-backend-url.railway.app/api/test
# باید پاسخ دهد: {"success":true,"message":"HavijChat backend works!"}
```

## 🎯 **نتیجه:**
پس از رفع مشکلات، سرور باید کار کند و خطای 502 برطرف شود.
