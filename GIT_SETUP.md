# 🚀 راهنمای آپلود پروژه روی گیت

## مراحل آپلود روی GitHub:

### 1. ایجاد Repository در GitHub
1. به [GitHub.com](https://github.com) بروید
2. روی "New repository" کلیک کنید
3. نام repository را `havijchat` قرار دهید
4. توضیحات: "HavijChat - Full-stack real-time chat application"
5. Public یا Private انتخاب کنید
6. "Create repository" کلیک کنید

### 2. اتصال پروژه محلی به GitHub
```bash
# اتصال به remote repository
git remote add origin https://github.com/YOUR_USERNAME/havijchat.git

# آپلود پروژه
git branch -M main
git push -u origin main
```

### 3. دستورات کامل:
```bash
# اگر repository خالی است
git remote add origin https://github.com/YOUR_USERNAME/havijchat.git
git branch -M main
git push -u origin main

# اگر repository قبلاً محتوا دارد
git remote add origin https://github.com/YOUR_USERNAME/havijchat.git
git branch -M main
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## 📁 ساختار پروژه در گیت:

```
havijchat/
├── .gitignore              # فایل‌های نادیده گرفته شده
├── README.md               # راهنمای پروژه
├── package.json            # تنظیمات اصلی
├── backend/                # بک‌اند
│   ├── controllers/        # کنترلرها
│   ├── models/            # مدل‌ها
│   ├── routes/            # مسیرها
│   ├── scripts/           # اسکریپت‌ها
│   ├── server.js          # سرور اصلی
│   ├── package.json       # وابستگی‌های بک‌اند
│   └── config.env         # متغیرهای محیطی
├── frontend/               # فرانت‌اند
│   ├── src/               # کدهای React
│   ├── public/            # فایل‌های عمومی
│   └── package.json       # وابستگی‌های فرانت‌اند
└── docs/                   # مستندات
    ├── DATABASE_SETUP.md
    └── DEPLOYMENT.md
```

## 🔧 تنظیمات مهم:

### فایل‌های نادیده گرفته شده (.gitignore):
- `node_modules/` - وابستگی‌ها
- `.env` - متغیرهای محیطی
- `build/` - فایل‌های build شده
- `*.log` - فایل‌های log

### متغیرهای محیطی:
- فایل `backend/config.env` را در گیت قرار ندهید
- از `backend/config.env.example` استفاده کنید

## 🚀 آماده برای Railway:

پس از آپلود روی گیت، می‌توانید:
1. پروژه را به Railway متصل کنید
2. متغیرهای محیطی را تنظیم کنید
3. دیتابیس را راه‌اندازی کنید
4. پروژه را deploy کنید

## 📝 دستورات مفید:

```bash
# بررسی وضعیت
git status

# اضافه کردن تغییرات
git add .

# کامیت تغییرات
git commit -m "توضیح تغییرات"

# آپلود به گیت
git push origin main

# دریافت آخرین تغییرات
git pull origin main
```

## 🎯 نکات مهم:

1. **هرگز** فایل‌های حساس را commit نکنید
2. **همیشه** قبل از commit، `git status` چک کنید
3. **README.md** را به‌روزرسانی کنید
4. **Issues** و **Pull Requests** را فعال کنید
