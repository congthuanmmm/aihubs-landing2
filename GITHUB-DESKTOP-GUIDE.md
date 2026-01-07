# Hướng Dẫn Upload Dự Án Lên GitHub Bằng GitHub Desktop

## 📋 Tình Trạng Hiện Tại

Từ screenshot của bạn, tôi thấy:
- ✅ GitHub Desktop đã cài đặt
- ✅ Repository "AIHUBS" đã được tạo
- ⚠️ **Vấn đề**: "No local changes" - nghĩa là repository chưa có files nào

---

## 🔍 Kiểm Tra Repository Location

**Bước 1: Xem repository đang ở đâu**

1. Trong GitHub Desktop, click vào **Repository** (menu trên)
2. Chọn **Show in Explorer** (hoặc nhấn `Ctrl + Shift + F`)
3. Một folder sẽ mở ra - đây là nơi Git đang theo dõi

📝 **Ghi nhớ đường dẫn này**, ví dụ có thể là:
- `C:\Users\[YourName]\Documents\GitHub\AIHUBS`
- Hoặc đường dẫn khác

---

## 📦 Hai Cách Upload Files

### **Cách 1: Copy Files Vào Repository Folder** (Đơn giản nhất) ⭐

**Bước 1: Mở 2 cửa sổ Explorer**
- Cửa sổ 1: Mở folder dự án hiện tại: `d:\Code\aihubs-landing`
- Cửa sổ 2: Mở folder repository (từ "Show in Explorer" ở trên)

**Bước 2: Copy tất cả files**

Từ `d:\Code\aihubs-landing`, chọn **TẤT CẢ** files:
- ✅ `index.html`
- ✅ `tools-directory.html`
- ✅ `logo-downloader.html`
- ✅ `logo-bg-remover.html`
- ✅ `tool-detail.html`
- ✅ Tất cả file `.css`
- ✅ Tất cả file `.js`
- ✅ Folder `logos`
- ✅ `.gitignore`
- ✅ `vercel.json`
- ❌ **KHÔNG copy** file `.py` (Python files - không cần cho web)

**Cách select nhanh:**
1. Nhấn `Ctrl + A` (select all)
2. Giữ `Ctrl` và click vào các file `.py` để bỏ chọn
3. Copy (`Ctrl + C`)
4. Paste vào folder repository (`Ctrl + V`)

**Bước 3: Quay lại GitHub Desktop**

GitHub Desktop sẽ **TƯ ĐỘNG** phát hiện files mới! Bạn sẽ thấy:
- Bên trái: Danh sách tất cả files vừa copy (màu xanh lá)
- Số lượng: "X changed files"

![User uploaded image](C:/Users/admin/.gemini/antigravity/brain/3b8a9f0b-dddd-47bf-87b0-da07498f4c8f/uploaded_image_1767790627078.png)
*Thay vì "No local changes", bạn sẽ thấy danh sách files*

---

### **Cách 2: Move Repository Folder** (Alternative)

Nếu bạn muốn giữ code ở `d:\Code\aihubs-landing`:

**Bước 1: Xóa repository hiện tại**
1. GitHub Desktop → **Repository** → **Remove**
2. **Chỉ remove khỏi list**, KHÔNG xóa files

**Bước 2: Tạo repository mới từ folder hiện tại**
1. **File** → **Add Local Repository**
2. Chọn folder: `d:\Code\aihubs-landing`
3. Nếu báo "This directory does not appear to be a Git repository":
   - Click **Create a repository**
   - Repository name: `aihubs-landing`
   - Click **Create Repository**

---

## ✅ Commit Changes

Sau khi có files trong repository:

**Bước 1: Xem lại changes**
- Bên trái sẽ hiện tất cả files mới
- Bạn có thể click vào từng file để xem nội dung

**Bước 2: Điền commit message**
- Summary (required): `Initial commit - AIHUBS landing page`
- Description: Để trống hoặc viết gì bạn muốn

**Bước 3: Click nút "Commit to main"**
- Nút màu xanh ở góc dưới bên trái
- Sau khi click, files sẽ được commit

---

## 🚀 Publish to GitHub

**Bước 1: Click "Publish branch"** hoặc **"Publish repository"**
- Nút này sẽ xuất hiện ở góc trên bên phải
- Thay vì "Cannot publish: no commits", sẽ thành nút xanh

**Bước 2: Chọn settings**
- **Name**: `aihubs-landing`
- **Description**: "AIHUBS AI Tools Directory Landing Page"
- ⚠️ **Bỏ check** "Keep this code private" (chọn Public)
- Click **Publish Repository**

**Bước 3: Chờ upload**
- GitHub Desktop sẽ upload tất cả files (~10-30 giây)
- Thành công khi thấy "Last fetched just now"

---

## 🌐 Xem Repository Trên GitHub.com

**Bước 1: Mở trên web**
1. GitHub Desktop → **Repository** → **View on GitHub**
2. Hoặc nhấn `Ctrl + Shift + G`
3. Trình duyệt sẽ mở repository của bạn

**Bước 2: Kiểm tra**
- Xem tất cả files đã upload chưa
- URL sẽ dạng: `https://github.com/[username]/aihubs-landing`

---

## 🎯 Kết Nối Với Vercel

Sau khi code đã lên GitHub:

**Bước 1: Đăng nhập Vercel**
1. Vào [vercel.com](https://vercel.com)
2. Click **"Continue with GitHub"**

**Bước 2: Import Project**
1. Click **"Add New..."** → **"Project"**
2. Tìm repository `aihubs-landing`
3. Click **"Import"**

**Bước 3: Deploy Settings**
- Project Name: `aihubs-landing`
- Framework: "Other" hoặc để trống
- Root Directory: `./`
- Build Command: Để trống
- Output Directory: Để trống
- Click **"Deploy"**

**Bước 4: Chờ deployment (~1-2 phút)**

**Bước 5: Lấy URL**
- Sau khi xong, copy URL (dạng `https://aihubs-landing.vercel.app`)
- **Cho tôi biết URL này!**

---

## 🔄 Cập Nhật Code Sau Này

Mỗi khi sửa code:

1. **Sửa files** trong folder repository
2. **GitHub Desktop tự động phát hiện** changes
3. **Commit** với message mô tả thay đổi
4. **Click "Push origin"** (nút ở trên)
5. **Vercel tự động deploy lại!**

---

## 🆘 Troubleshooting

### "Cannot publish: no commits"
➡️ **Giải pháp**: Chưa có files trong repository
- Làm theo **Cách 1** hoặc **Cách 2** ở trên để thêm files

### "This directory is not a Git repository"
➡️ **Giải pháp**: Click **"Create a repository"** để tạo mới

### Files không xuất hiện trong GitHub Desktop
➡️ **Giải pháp**: 
- Kiểm tra bạn đã copy vào đúng folder chưa
- Click **Repository** → **Refresh** (hoặc `Ctrl + R`)

### Upload bị lỗi authentication
➡️ **Giải pháp**:
- **File** → **Options** → **Accounts**
- Sign out và sign in lại GitHub

---

## 📞 Tiếp Theo

**Sau khi upload lên GitHub thành công:**

1. ✅ Cho tôi biết "đã upload xong"
2. ✅ Deploy lên Vercel theo hướng dẫn trên
3. ✅ Cho tôi biết URL Vercel
4. ✅ Tạo GA4 account với URL đó
5. ✅ Cho tôi Measurement ID → Tôi sẽ tích hợp GA4!

**Nếu gặp khó khăn ở bất kỳ bước nào, chụp màn hình và gửi cho tôi nhé!** 📸
