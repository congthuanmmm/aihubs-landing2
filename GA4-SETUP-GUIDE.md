# Hướng Dẫn Tích Hợp Google Analytics 4

## 📋 Bước 1: Tạo Tài Khoản Google Analytics 4

### 1.1 Truy cập Google Analytics
- Vào [Google Analytics](https://analytics.google.com/)
- Đăng nhập bằng tài khoản Google của bạn

### 1.2 Tạo Property Mới
1. Click vào **Admin** (biểu tượng bánh răng ở góc dưới bên trái)
2. Trong cột **Account**, click **Create Account**
3. Nhập tên account (ví dụ: "AIHUBS")
4. Click **Next**

### 1.3 Tạo Property
1. Nhập tên property: **AIHUBS Landing Page**
2. Chọn timezone: **(GMT+07:00) Bangkok**
3. Chọn currency: **Vietnamese Dong (₫)**
4. Click **Next**

### 1.4 Nhập Thông Tin Business
1. Chọn industry category phù hợp với website của bạn
2. Chọn business size
3. Chọn mục đích sử dụng GA4
4. Click **Create**

### 1.5 Thiết Lập Data Stream
1. Chọn platform: **Web**
2. Nhập website URL (ví dụ: `https://yourdomain.com`)
3. Nhập stream name: **AIHUBS Website**
4. Click **Create stream**

### 1.6 Lấy Measurement ID
Sau khi tạo stream, bạn sẽ thấy **Measurement ID** có dạng: `G-XXXXXXXXXX`

**📝 Lưu lại Measurement ID này!**

---

## 🚀 Bước 2: Tích Hợp Vào Website

### 2.1 Chuẩn bị Code
Mã tracking GA4 đã được chuẩn bị sẵn trong file `ga4-tracking-snippet.html`

### 2.2 Cập nhật Measurement ID
1. Mở file `ga4-tracking-snippet.html`
2. Tìm dòng: `YOUR_MEASUREMENT_ID`
3. Thay bằng Measurement ID thực tế của bạn (ví dụ: `G-ABC123XYZ`)

### 2.3 Áp dụng cho tất cả trang HTML
Đoạn mã tracking cần được thêm vào **TẤT CẢ** các file HTML sau:
- index.html
- tools-directory.html
- logo-downloader.html
- Và các file HTML khác trong project

**Vị trí chèn:** Ngay sau thẻ `<head>` mở đầu

---

## ✅ Bước 3: Kiểm Tra Hoạt Động

### 3.1 Kiểm tra Real-time
1. Mở website của bạn trên trình duyệt
2. Vào Google Analytics → **Reports** → **Realtime**
3. Bạn sẽ thấy chính mình đang online!

### 3.2 Chờ dữ liệu
- Dữ liệu chi tiết sẽ xuất hiện sau **24-48 giờ**
- Real-time reports hiển thị ngay lập tức

---

## 📊 Các Chỉ Số GA4 Sẽ Theo Dõi Tự Động

Sau khi tích hợp, GA4 sẽ tự động thu thập:

✅ **Traffic Data**
- Page views (lượt xem trang)
- Users (số người dùng)
- Sessions (phiên truy cập)
- Bounce rate (tỷ lệ thoát)

✅ **User Behavior**
- Pages visited (trang đã xem)
- Session duration (thời gian truy cập)
- User engagement (mức độ tương tác)

✅ **Acquisition**
- Traffic sources (nguồn truy cập)
- Referrals (trang giới thiệu)
- Direct/Organic/Social traffic

✅ **Demographics**
- Country/City (quốc gia/thành phố)
- Device (thiết bị: desktop/mobile/tablet)
- Browser (trình duyệt)

---

## 🎯 Sau Khi Có Measurement ID

**Liên hệ lại với tôi và cung cấp Measurement ID**, tôi sẽ:
1. ✅ Tự động thêm code vào TẤT CẢ các trang HTML
2. ✅ Kiểm tra code hoạt động đúng
3. ✅ Hướng dẫn verify tracking

---

## ❓ Câu Hỏi Thường Gặp

**Q: Mất bao lâu để tạo account?**  
A: Chỉ 5-10 phút

**Q: GA4 có miễn phí không?**  
A: Hoàn toàn MIỄN PHÍ cho hầu hết website

**Q: Tôi có cần kỹ năng lập trình không?**  
A: KHÔNG! Chỉ cần copy Measurement ID và cung cấp cho tôi

**Q: Dữ liệu có hiển thị ngay không?**  
A: Real-time có, dữ liệu chi tiết sau 24-48h

---

## 📞 Hỗ Trợ

Nếu gặp khó khăn, hãy cho tôi biết bước nào bạn đang gặp vấn đề!
