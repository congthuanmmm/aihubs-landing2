// Extended data for AI tools - Features, Pros/Cons, Pricing, etc.
const TOOLS_EXTENDED = {
    "decktopus": {
        intro: "Tại sao phải chọn một mô hình AI khi bạn có thể khám phá tất cả? OpenArt là trung tâm sáng tạo của bạn, kết hợp sức mạnh của Stable Diffusion và DALL-E 2 với các công cụ chính sửa chuyên sâu.",
        features: [
            "Truy cập DALL-E 2 & Stable Diffusion",
            "Công cụ ControlNet & Inpainting",
            "Phác thảo thành ảnh & Vẽ thời gian thực",
            "Huấn luyện mô hình cá nhân hóa",
            "Hơn 10 triệu Prompt từ cộng đồng",
            "Phác thảo thành ảnh và Vẽ thời gian thực"
        ],
        pros: [
            "Đa dạng công cụ để kiểm soát hình ảnh tính chính xác",
            "Khả năng huấn luyện mô hình riêng để tạo chỉnh là điểm độc đáo",
            "Gói miễn phí hào phóng với có hộ cho xài thử nâng cao"
        ],
        cons: [
            "Các tính năng nâng cao như ControlNet cần thời gian để học",
            "Điều khoản sử dụng thương mại có thể chưa rõ cho mô sở hữu sản"
        ],
        targetAudience: "Nghệ sĩ kỹ thuật số, Nhà phát triển game, Người yêu thích Anime, Nhà sáng tạo nội dung",
        pricing: "Miễn phí / $7 (Cần thiết) / $14.5 (Nâng cao) / $28 (Vô hạn)",
        ratings: {
            accuracy: 4.5,
            ease: 4.2,
            features: 4.8,
            speed: 4.4,
            support: 4.0,
            overall: 4.4
        },
        conclusion: "Lời cuối từ BenpromptAI: OpenArt là sân chơi mơ ước cho những nhà sáng tạo muốn thử nghiệm và sử dụng dạng hơn so với các công cụ tạo ảnh thông thường. BenpromptAI giúp AI trở nên đế dạng và hiệu quả cho tất cả mọi người."
    },
    "taskade": {
        intro: "Taskade là nền tảng quản lý công việc và cộng tác độc đáo, kết hợp sức mạnh AI để tự động hóa quy trình làm việc, tạo task list, lên lịch và phân tích dự án.",
        features: [
            "Tạo danh sách nhiệm vụ tự động bằng AI",
            "Lên lịch ghi chú và kết nối AI agents",
            "Tự động phân tích dữ liệu dự án",
            "Tạo báo cáo sau chiến dịch tự động",
            "Cộng tác real-time với team",
            "Tích hợp đa nền tảng"
        ],
        pros: [
            "Giao diện trực quan, dễ sử dụng",
            "AI agents mạnh mẽ giúp tự động hóa",
            "Đa dạng template cho các loại dự án"
        ],
        cons: [
            "Một số tính năng AI yêu cầu gói trả phí",
            "Learning curve với AI automation"
        ],
        targetAudience: "Project managers, Teams, Freelancers, Startups",
        pricing: "Miễn phí / $8/tháng (Pro) / $16/tháng (Business)",
        ratings: {
            accuracy: 4.3,
            ease: 4.7,
            features: 4.5,
            speed: 4.6,
            support: 4.2,
            overall: 4.5
        },
        conclusion: "Taskade là giải pháp toàn diện cho quản lý dự án với AI, phù hợp cho cả cá nhân và doanh nghiệp muốn tối ưu hóa quy trình làm việc."
    },
    "textcortex-ai": {
        intro: "TextCortex AI là trợ lý viết nội dung thông minh, hỗ trợ đa ngôn ngữ và có khả năng tùy chỉnh phong cách viết theo ý muốn.",
        features: [
            "Tạo nội dung nhanh chóng với AI",
            "Hỗ trợ hơn 70 ngôn ngữ",
            "Tùy chỉnh giọng điệu và phong cách",
            "Rewrite và paraphrase content",
            "Browser extension tiện lợi",
            "Template cho nhiều loại nội dung"
        ],
        pros: [
            "Chất lượng nội dung cao, tự nhiên",
            "Hỗ trợ đa ngôn ngữ tốt",
            "Tích hợp dễ dàng vào workflow"
        ],
        cons: [
            "Gói miễn phí giới hạn từ",
            "Giá cao hơn một số đối thủ"
        ],
        targetAudience: "Content writers, Marketers, Bloggers, Doanh nghiệp",
        pricing: "Freemium / $5.59/tháng (Lite) / $13.99/tháng (Unlimited)",
        ratings: {
            accuracy: 4.6,
            ease: 4.8,
            features: 4.4,
            speed: 4.7,
            support: 4.3,
            overall: 4.6
        },
        conclusion: "TextCortex AI là lựa chọn xuất sắc cho những ai cần tạo nội dung chất lượng nhanh chóng với hỗ trợ đa ngôn ngữ mạnh mẽ."
    }
};

// Helper function to get tool slug từ name
function getToolSlug(name) {
    return name.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\//g, '-')
        .replace(/[^\w-]/g, '');
}

// Helper function to find tool by slug
function findToolBySlug(slug) {
    return ALL_TOOLS.find(tool => getToolSlug(tool.name) === slug);
}
