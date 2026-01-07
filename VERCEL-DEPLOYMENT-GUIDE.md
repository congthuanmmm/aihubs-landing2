# Hướng Dẫn Deploy AIHUBS Landing lên Vercel

## 📋 Tổng Quan

Vì Git chưa được cài đặt trên máy bạn, chúng ta sẽ sử dụng phương pháp **GitHub Web Interface** - đơn giản, không cần command line!

---

## 🚀 Method 1: Deploy qua GitHub Web (Khuyến nghị)

### Bước 1: Tạo GitHub Repository

1. **Đăng nhập GitHub**
   - Truy cập [github.com](https://github.com)
   - Đăng nhập tài khoản của bạn (hoặc tạo tài khoản mới nếu chưa có)

2. **Tạo Repository Mới**
   - Click nút **"+"** ở góc trên bên phải
   - Chọn **"New repository"**
   - Repository name: `aihubs-landing` (hoặc tên bạn thích)
   - Chọn **Public**
   - **KHÔNG** check "Add a README file"
   - Click **"Create repository"**

### Bước 2: Upload Files lên GitHub

1. **Vào trang repository vừa tạo**
   - Bạn sẽ thấy trang trống

2. **Upload files**
   - Click **"uploading an existing file"** (link màu xanh)
   - Hoặc kéo thả file trực tiếp vào trình duyệt

3. **Chọn tất cả files trong folder `d:\Code\aihubs-landing`**
   - **QUAN TRỌNG**: Chọn TẤT CẢ files bao gồm:
     - ✅ Tất cả file `.html`
     - ✅ Tất cả file `.css`
     - ✅ Tất cả file `.js`
     - ✅ Folder `logos` (nếu có images)
     - ✅ File `.gitignore`
     - ✅ File `vercel.json`
     - ❌ KHÔNG upload file `.py` (Python files)

4. **Commit changes**
   - Scroll xuống dưới
   - Commit message: "Initial commit"
   - Click **"Commit changes"**

5. **Chờ upload hoàn tất**
   - Bạn sẽ thấy tất cả files trên GitHub

---

### Bước 3: Kết Nối Vercel với GitHub

1. **Đăng nhập Vercel**
   - Truy cập [vercel.com](https://vercel.com)
   - Click **"Sign Up"** hoặc **"Login"**
   - **QUAN TRỌNG**: Chọn **"Continue with GitHub"**
   - Cho phép Vercel truy cập GitHub account

2. **Import Project**
   - Sau khi đăng nhập, click **"Add New..."** → **"Project"**
   - Bạn sẽ thấy list các repositories từ GitHub
   - Tìm repository `aihubs-landing`
   - Click **"Import"**

3. **Configure Project**
   - **Project Name**: `aihubs-landing` (hoặc tên bạn muốn)
   - **Framework Preset**: Để trống hoặc chọn "Other"
   - **Root Directory**: `./`
   - **Build Command**: Để trống
   - **Output Directory**: Để trống
   - Click **"Deploy"**

4. **Chờ Deployment**
   - Vercel sẽ build và deploy (~1-2 phút)
   - Bạn sẽ thấy animation "Building..." và "Deploying..."

---

### Bước 4: Lấy URL Deployment

1. **Deployment Success!** 🎉
   - Sau khi hoàn tất, bạn sẽ thấy màn hình celebration
   - Click **"Visit"** để xem website

2. **Lấy URL**
   - URL sẽ có dạng: `https://aihubs-landing.vercel.app`
   - Hoặc: `https://aihubs-landing-<random>.vercel.app`
   - **COPY URL NÀY** - bạn sẽ dùng cho GA4!

3. **Test Website**
   - Click qua các trang để kiểm tra:
     - Homepage
     - Tools Directory
     - Logo Downloader
     - Etc.

---

## 🔧 Method 2: Deploy qua Vercel CLI (Alternative)

Nếu Method 1 không hoạt động, bạn có thể cài Vercel CLI:

### Bước 1: Cài Node.js (nếu chưa có)
1. Download từ [nodejs.org](https://nodejs.org)
2. Chọn bản LTS (Long Term Support)
3. Cài đặt theo hướng dẫn

### Bước 2: Cài Vercel CLI
Mở PowerShell và chạy:
```powershell
npm install -g vercel
```

### Bước 3: Deploy
```powershell
cd d:\Code\aihubs-landing
vercel
```

Làm theo hướng dẫn:
- Login with GitHub/Email
- Confirm project settings
- Deploy!

---

## ✅ Sau Khi Deploy Thành Công

### 1. Lưu lại URL
Copy URL Vercel của bạn, ví dụ:
```
https://aihubs-landing.vercel.app
```

### 2. Setup GA4
- Dùng URL này để tạo GA4 Data Stream
- Lấy Measurement ID (dạng `G-XXXXXXXXXX`)
- **Cung cấp Measurement ID cho tôi**

### 3. Tích Hợp GA4
Tôi sẽ tự động:
- Thêm GA4 tracking vào tất cả 5 trang HTML
- Commit và push code mới lên GitHub
- Vercel sẽ tự động deploy lại với GA4

---

## 🔄 Cập Nhật Website Sau Này

Mỗi khi bạn muốn thay đổi website:

### Cách 1: GitHub Web
1. Vào repository trên GitHub
2. Click vào file cần sửa
3. Click icon bút chì (Edit)
4. Sửa nội dung
5. Commit changes
6. Vercel tự động deploy lại!

### Cách 2: Upload File Mới
1. Vào repository
2. Click "Add file" → "Upload files"
3. Kéo thả file mới
4. Commit
5. Auto deploy!

---

## 🆘 Troubleshooting

### Lỗi: "Repository not found"
- Đảm bảo repository là **Public**
- Refresh trang Vercel

### Lỗi: "Build failed"
- Vercel có thể bỏ qua Python files
- Đảm bảo file `.gitignore` đã được upload

### Website không hiển thị đúng
- Kiểm tra tất cả files `.css` và `.js` đã upload
- Kiểm tra folder `logos` đã upload

### URL bị random characters
- Đây là bình thường! Ví dụ: `aihubs-landing-abc123.vercel.app`
- Bạn có thể đổi domain sau trong Vercel settings

---

## 📞 Tiếp Theo

**Sau khi deploy thành công, hãy:**
1. ✅ Copy URL Vercel
2. ✅ Test tất cả các trang
3. ✅ Báo cho tôi biết URL (hoặc "đã deploy xong")
4. ✅ Tạo GA4 account với URL này
5. ✅ Cung cấp Measurement ID cho tôi

Tôi sẽ tự động tích hợp GA4 tracking! 🚀

---

## 💡 Tips

- Vercel miễn phí cho personal projects
- Mỗi lần commit lên GitHub, Vercel tự động deploy lại
- Bạn có thể có nhiều domains cho cùng 1 project
- Analytics của Vercel cũng rất hữu ích (ngoài GA4)

**Chúc bạn deploy thành công! 🎉**
