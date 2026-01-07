// ====================
// TOOLS LOADING SYSTEM
// ====================

// Import tools data (defined directly to avoid async loading issues)
const ALL_TOOLS = [
    { category: "AI Writing & Productivity", name: "Decktopus", link: "https://www.decktopus.com?via=dang-hai", description: "Decktopus AI tạo các bộ slide hoàn chỉnh từ một yêu cầu duy nhất, tiết kiệm thời gian bằng cách cung cấp mẫu, đồ họa và hoạt ảnh để bạn tùy chỉnh.", views: "15.2K" },
    { category: "AI Writing & Productivity", name: "Taskade", link: "https://taskade.com/?via=0ig3sj", description: "Tạo danh sách nhiệm vụ, lên lịch ghi chú, kết nối các AI khác để cộng tác, tự động phân tích dữ liệu và tự động tạo báo cáo sau chiến dịch.", views: "22.8K" },
    { category: "AI Writing & Productivity", name: "TextCortex AI", link: "https://textcortex.com/?via=hai-dang", description: "Tạo nội dung nhanh và chất lượng, hỗ trợ đa ngôn ngữ, tùy chỉnh phong cách và giọng điệu.", views: "18.5K" },
    { category: "AI Writing & Productivity", name: "Everneed AI", link: "https://everneedai.idevaffiliate.com/534.html", description: "Tối ưu công việc hàng ngày. Nền tảng này tự động hóa các nhiệm vụ lặp lại bằng AI cho việc lên lịch, viết và tổ chức, tăng năng suất lên tới 5 lần.", views: "12.3K" },
    { category: "AI Writing & Productivity", name: "Easygen", link: "https://easygen.io/?via=dang", description: "Tạo bài đăng LinkedIn; 3 bài đầu miễn phí. Đối với người dùng, chi phí phải chăng cho nội dung hàng ngày.", views: "9.7K" },
    { category: "AI Writing & Productivity", name: "Advomate", link: "http://advomate.cz/?via=dang", description: "Công cụ có trụ sở ở Czech này tự động hóa quy trình pháp lý, như tạo tóm tắt nghiên cứu kèm trích dẫn trong vài giây, phân tích tài liệu qua trò chuyện và tìm kiếm luật/phán quyết.", views: "7.1K" },
    { category: "AI Writing & Productivity", name: "Ailawyer", link: "https://ailawyer.pro/?ref=hai", description: "Cung cấp nghiên cứu web nhanh, tóm tắt tài liệu (trong 5 giây), dịch thuật và tư vấn pháp lý dạng hội thoại.", views: "10.5K" },
    { category: "AI Writing & Productivity", name: "Apify", link: "https://www.apify.com?fpr=o4ju0v", description: "Xây dựng và triển khai trình thu thập và tác nhân AI để trích xuất dữ liệu từ các trang như Instagram/Amazon, có tích hợp và xuất bản miễn phí.", views: "14.2K" },
    { category: "AI Writing & Productivity", name: "Meetcody", link: "https://meetcody.ai?fpr=congthuan83", description: "Cody sử dụng AI để dịch, chuyển lời nói thành văn bản và tóm tắt nội dung cuộc thi.", views: "8.9K" },
    { category: "AI Writing & Productivity", name: "Easy-peasy", link: "https://easy-peasy.ai/?via=hai-dang", description: "Easy-peasy là nền tảng AI đa năng hỗ trợ tạo nội dung, tự động hóa chatbot và tạo thiết kế, giúp doanh nghiệp và người sáng tạo dễ dàng tạo sản phẩm chuyên nghiệp.", views: "16.7K" },
    { category: "AI Marketing & Online Business", name: "SEO Writing", link: "https://seowriting.ai?fp_ref=31kn3l", description: "Công cụ giúp người dùng nhanh chóng viết bài SEO và tối ưu từ khóa mà không cần soạn thảo thủ công.", views: "20.3K" },
    { category: "AI Marketing & Online Business", name: "LIVE CHAT AI", link: "https://www.livechat.com/?a=cvQfKt_Hg&utm_campaign=pp_livechat-default&utm_source=PP", description: "Hỗ trợ khách hàng 24/7 với cuộc trò chuyện cá nhân hóa và phân tích tự động để cải thiện dịch vụ và giảm chi phí vận hành.", views: "25.6K" },
    { category: "AI Marketing & Online Business", name: "VOILA AI", link: "https://www.getvoila.ai/?via=hai-dang", description: "Tự động viết blog thân thiện SEO, tìm kiếm cập nhật nội dung và tự động tóm tắt.", views: "11.4K" },
    { category: "AI Marketing & Online Business", name: "AI SEO", link: "https://aiseo.ai/?fpr=hai81", description: "Trợ lý SEO sử dụng AI để tối ưu nội dung và cải thiện trên trang.", views: "18.9K" },
    { category: "AI Marketing & Online Business", name: "Lovable", link: "https://lovable.dev/?via=hai-dang", description: "Tạo website không cần biết Code", views: "13.2K" },
    { category: "AI Marketing & Online Business", name: "Readdy", link: "https://readdy.ai/?via=dang", description: "Trình tạo website dựa trên AI tạo trang chuyên nghiệp từ yêu cầu văn bản, phù hợp cho blog, cửa hàng hoặc trang đích mà không cần lập trình.", views: "9.8K" },
    { category: "AI Marketing & Online Business", name: "Affitor", link: "https://affitor.com/?via=PHA-8000", description: "Affitor giúp bạn khám phá và so sánh các chương trình tiếp thị liên kết hiệu quả cao với các chỉ số thời gian thực như lưu lượng truy cập, hoa hồng và tần suất thanh toán.", views: "12.7K" },
    { category: "AI Marketing & Online Business", name: "Aitoptools", link: "https://aitoptools.com?ref=hai86", description: "Thư mục với hơn 10.000 công cụ AI, có đánh giá và cập nhật hàng ngày cho các công cụ marketing/năng suất.", views: "17.5K" },
    { category: "AI Marketing & Online Business", name: "Klap", link: "https://klap.app?via=858c33", description: "Tạo nhiều video nổi bật từ video dài.", views: "14.8K" },
    { category: "AI Marketing & Online Business", name: "logomeai", link: "https://logomeai.partnerlinks.io/6crezjtr6ium", description: "Mở khóa hơn 100 mẫu thương hiệu được tạo với logo, màu sắc, phông chữ và ảnh của bạn. Tạo tài liệu marketing ấn tượng để phát triển doanh nghiệp!", views: "10.3K" },
    { category: "AI Marketing & Online Business", name: "writecream", link: "https://www.writecream.com/?gr_pk=4Dyb", description: "Writecream là công cụ AI đa năng tạo email cá nhân hóa, blog và lồng tiếng, nổi bật trong tự động hóa email và viết kịch bản podcast cho marketer và người sáng tạo.", views: "19.1K" },
    { category: "AI Marketing & Online Business", name: "10web", link: "https://10web.sjv.io/6yKL9K", description: "10Web có các tính năng cốt lõi để xây dựng website và dễ dàng tạo bằng AI. Khách hàng của chúng tôi yêu thích nó và chúng tôi triển khai dễ dàng.", views: "22.4K" },
    { category: "AI Marketing & Online Business", name: "Alphana", link: "https://www.alphana.ai?via=dang", description: "Chuyển đổi video thành video ngắn, bài viết, blog và hình ảnh với hơn 117 thẻ AI. Đối với người sáng tạo/thương hiệu, nó biến một video thành hơn 100 tài sản nhanh chóng, tăng năng suất cho các đợt ra mắt.", views: "15.9K" },
    { category: "AI Learning & eLearning Tools", name: "Clipto", link: "https://www.clipto.com/transcribe-audio-video-to-text-free?via=hai-dang", description: "Chuyển âm thanh hoặc video thành văn bản bằng AI.", views: "11.2K" },
    { category: "AI Learning & eLearning Tools", name: "Beforesunset", link: "https://www.beforesunset.ai/?via=dang", description: "Lên lịch nhiệm vụ, chuyển ý tưởng thành hành động, cung cấp chế độ tập trung và chế độ xem. Đối với cá nhân/người sáng lập, nó đồng bộ trên thiết bị để lập kế hoạch có tổ chức.", views: "9.7K" },
    { category: "AI Learning & eLearning Tools", name: "Mylens", link: "https://mylens.ai/?aff=hai2x", description: "MyLens là công cụ tạo nội dung hình ảnh dựa trên AI tạo hình ảnh và video ấn tượng từ yêu cầu văn bản, lý tưởng cho nhà thiết kế và marketer tìm kiếm hình ảnh độc đáo.", views: "13.8K" },
    { category: "AI Learning & eLearning Tools", name: "Originality", link: "https://originality.ai/ai-checker?via=hai-dang", description: "Originality.ai là công cụ AI đáng tin cậy để phát hiện đạo văn và nội dung do AI tạo, đảm bảo tính xác thực cho người sáng tạo nội dung và giáo viên.", views: "17.2K" },
    { category: "AI Learning & eLearning Tools", name: "Winston", link: "https://gowinston.ai/?via=dang", description: "Winston AI là công cụ phát hiện nội dung hàng đầu sử dụng AI để nhận dạng văn bản do AI tạo và đạo văn, được giáo viên và nhà xuất bản tin tưởng về tính toàn vẹn nội dung.", views: "14.5K" },
    { category: "AI Learning & eLearning Tools", name: "Coral", link: "https://www.getcoralai.com/?ref=hai", description: "Coral AI là công cụ quản lý tài liệu sử dụng AI tóm tắt, sắp xếp và trích xuất thông tin từ tệp, hợp lý hóa quy trình cho chuyên gia và nhóm.", views: "10.6K" },
    { category: "AI Learning & eLearning Tools", name: "Notta", link: "https://notta.pxf.io/OeJ0QQ", description: "Công cụ chuyển biên cuộc họp AI và chuyển âm thanh. Được tạo bởi chủ sở hữu của trang được liệt kê. Đây là nhà xuất bản uy tín không có vi phạm chính sách.", views: "21.3K" },
    { category: "AI Learning & eLearning Tools", name: "Gamma", link: "https://try.gamma.app/4t5b7o6eiwkj", description: "Tạo slide chuyên nghiệp (rất phổ biến ở Mỹ).", views: "28.9K" },
    { category: "AI Learning & eLearning Tools", name: "SlideAi", link: "https://slidesai.io/?ref=hai", description: "Tạo slide chuyên nghiệp.", views: "16.4K" },
    { category: "AI Learning & eLearning Tools", name: "Anara", link: "https://www.anara.com/?ref=hairl", description: "Tìm kiếm cơ sở dữ liệu học thuật, trích xuất đoạn, tạo thẻ ghi nhớ/câu hỏi và tổ chức nghiên cứu mà không bịa đặt. Đối với nhà khoa học/sinh viên, nó tiết kiệm đáng kể thời gian.", views: "8.7K" },
    { category: "AI Learning & eLearning Tools", name: "Pdfai", link: "https://refer.pdf.ai/thuan-pham-cong", description: "Đọc và tóm tắt PDF, đặt câu hỏi về PDF của bạn, tìm kiếm thông tin nhanh, hỗ trợ nhiều loại tài liệu.", views: "19.8K" },
    { category: "AI Learning & eLearning Tools", name: "youlearn ai", link: "https://app.youlearn.ai/?via=dang-hai", description: "Công cụ học tập cá nhân hóa: tự động tóm tắt video YouTube, mã hóa bản chép thành gạch đầu dòng ngắn gọn, giúp người dùng nắm bắt ý chính trong vài phút.", views: "12.1K" },
    { category: "AI Video", name: "Jogg", link: "https://www.jogg.ai/?fpr=defiz", description: "Tạo video avatar, video giới thiệu sản phẩm UGC, podcast video và nhiều hơn.", views: "15.6K" },
    { category: "AI Video", name: "Heygen", link: "https://heygen.com/?sid=rewardful&via=dang-hai", description: "Tạo video avatar và video giới thiệu sản phẩm UGC.", views: "32.4K" },
    { category: "AI Video", name: "Fliki", link: "https://fliki.ai?referral=hi-ng-phm-z8zqyv", description: "Tự động tạo video dựa trên nội dung hoặc chủ đề đã chọn.", views: "24.7K" },
    { category: "AI Video", name: "Magiclight", link: "https://www.magiclight.ai/official-website?code=kfl9a8951", description: "Tạo phim hoạt hình 30 phút chỉ với một yêu cầu.", views: "8.3K" },
    { category: "AI Video", name: "VideoGen", link: "https://videogen.io?fpr=hai13", description: "Tạo nhiều video hàng loạt từ nội dung hoặc chủ đề đã chọn.", views: "18.2K" },
    { category: "AI Video", name: "MakeUGC", link: "https://www.makeugc.ai/?ref=hairj", description: "Tạo video UGC chuyên nghiệp.", views: "11.9K" },
    { category: "AI Video", name: "Dupdub", link: "http://www.dupdub.com/?via=hai-dang", description: "Tạo video AI không có khuôn mặt cho TikTok, Instagram và YouTube bằng ảnh hồ sơ và giọng đọc AI.", views: "14.5K" },
    { category: "AI Video", name: "Akool", link: "https://akool.com/?via=dang-hai", description: "Bộ công cụ video với chuyển đổi hình ảnh thành video, avatar phát trực tuyến, ảnh biết nói, dịch thuật và hoán đổi khuôn mặt. Được các công ty Fortune 500 như Amazon sử dụng.", views: "21.7K" },
    { category: "AI Video", name: "Arcads", link: "https://arcads.ai/?via=dang-hai", description: "Chuyển văn bản thành quảng cáo với diễn viên AI, kịch bản chỉnh sửa được và nhiều biến thể hàng loạt. Đối với marketer, nó giảm thời gian và chi phí sản xuất và hỗ trợ thử nghiệm.", views: "13.4K" },
    { category: "AI Video", name: "Argil", link: "https://argil.ai?via=dang-hai", description: "Tạo video từ hình ảnh/giọng nói với hơn 200 avatar, tự động chỉnh sửa (phụ đề/nhạc) và bản sao AI. Đối với nhà sáng tạo nội dung trên YouTube/TikTok.", views: "16.8K" },
    { category: "AI Video", name: "Storyshort", link: "https://storyshort.ai?via=dang-hai", description: "Chủ yếu là trình tạo video AI để tạo video ngắn không mặt lan truyền cho các nền tảng như TikTok và YouTube, nhấn mạnh tính năng tự động.", views: "9.2K" },
    { category: "AI Image & Photo", name: "Aitubo", link: "https://aitubo.ai/?ref=odjjyzd", description: "Tạo hình ảnh/video cho game/anime bằng mô hình Flux, với xóa nền, nâng cấp, mở rộng hình, hoán đổi khuôn mặt và trò chuyện bạn gái AI. Được hơn 2 triệu người dùng tin cậy.", views: "26.5K" },
    { category: "AI Image & Photo", name: "BetterPic", link: "https://www.betterpic.io?via=hai-dang", description: "Tạo ảnh chuyên nghiệp để xây dựng hồ sơ của bạn.", views: "18.7K" },
    { category: "AI Image & Photo", name: "Pikzels", link: "https://pikzels.com?via=z0na4", description: "Tải lên ảnh hoặc dán liên kết video để tự động tạo ảnh thu nhỏ, tạo tiêu đề video hấp dẫn, hoán đổi khuôn mặt và cá nhân hóa ảnh thu nhỏ.", views: "12.9K" },
    { category: "AI Image & Photo", name: "Funfunart", link: "https://www.funfun.art/?via=dang-hai", description: "Tạo hình ảnh/video AI, kèm thư viện. Đối với người sáng tạo, việc tạo hình ảnh trở nên dễ dàng.", views: "14.3K" },
    { category: "AI Image & Photo", name: "Flux", link: "https://flux-ai.io/?via=hai-dang", description: "Trình tạo hình ảnh miễn phí với tính năng ngữ cảnh; chi tiết hạn chế, dành cho người sáng tạo/nhà phát triển.", views: "22.1K" },
    { category: "AI Image & Photo", name: "Imagine", link: "https://www.imagine.art/dashboard?a_aid=c43e5729", description: "Imagine AI Art tạo tác phẩm nghệ thuật AI tuyệt đẹp từ yêu cầu văn bản, với 1,98 triệu lượt truy cập hàng tháng.", views: "29.6K" },
    { category: "AI Image & Photo", name: "Sellerpic", link: "https://app.sellerpic.ai?fpr=9ggl99", description: "SellerPic là công cụ thiết kế dùng AI tạo hình ảnh sản phẩm chuyên nghiệp và mô hình cho thương mại điện tử, tăng cường hình ảnh sản phẩm với hình ảnh ấn tượng.", views: "11.4K" },
    { category: "AI Image & Photo", name: "basedlabs", link: "https://www.basedlabs.ai/?via=hai-dang", description: "BasedLabs kết hợp thiết kế AI và tạo video, thu hút 2,17 triệu lượt truy cập hàng tháng kể từ khi ra mắt năm 2023.", views: "17.8K" },
    { category: "AI Image & Photo", name: "Promeai", link: "https://www.promeai.pro/?vsource=i_h34de1wj67", description: "PromeAI là nền tảng thiết kế dùng AI tạo đồ họa chuyên nghiệp, mô hình 3D và render, cho phép nhà sáng tạo và doanh nghiệp tạo hình ảnh chất lượng cao dễ dàng.", views: "20.3K" },
    { category: "AI Audio", name: "Elevenlabs", link: "https://try.elevenlabs.io/d278we9ydxth", description: "ElevenLabs là nền tảng âm thanh AI hàng đầu tập trung vào tạo giọng nói giống con người cho nhiều ứng dụng. Dựa trên thông tin từ trang chính thức và đánh giá, nó cung cấp các công cụ tiên tiến để tạo nội dung âm thanh chất lượng cao.", views: "35.2K" },
    { category: "AI Audio", name: "Ausynclab", link: "https://ausynclab.io?ref=aff-17fw-j7vhr", description: "Voice cloning là công nghệ sử dụng trí tuệ nhân tạo để sao chép giọng nói của một người cụ thể. Với AusyncLab, chỉ cần 3 đến 7 giây âm thanh mẫu sẽ tạo ra giọng nói giống gần như hoàn toàn với người thật.", views: "14.6K" },
    { category: "AI Audio", name: "Vbee", link: "https://vbee.vn/?aff=dsk", description: "Công cụ chuyển văn bản thành tiếng nói (Text-to-speech) chỉ trong vài giây, tạo ra âm thanh tự nhiên, chất lượng và giàu cảm xúc như con người, mở ra bước tiến mới trong công nghệ tổng hợp tiếng nói.", views: "19.7K" },
    { category: "AI Audio", name: "Mubert", link: "https://mubert.com/render/pricing?via=d0e192", description: "Mubert là nền tảng tạo nhạc dùng AI tạo nhạc nền không bản quyền cho livestream, video và quảng cáo, tùy chỉnh theo tâm trạng và thời lượng. Thư viện nhạc vô tận của nó là niềm mơ ước của người sáng tạo.", views: "16.3K" },
    { category: "Ai WorkFlow", name: "Make", link: "https://www.make.com/en/register?pc=haidang", description: "Make là nền tảng tự động hóa quy trình mạnh mẽ với 5,76 triệu lượt truy cập hàng tháng, ra mắt năm 2022.", views: "28.4K" },
    { category: "Ai WorkFlow", name: "Pipedream", link: "https://pipedream.com/@phamhaidangnb2/invite?token=d1e766693894f001a7a3a68579f524e7", description: "Pipedream là nền tảng tự động hóa quy trình dành cho nhà phát triển, với 386.924 lượt truy cập hàng tháng.", views: "12.8K" },
    { category: "Ai WorkFlow", name: "Pabbly", link: "#", description: "Pabbly Connect tự động hóa quy trình với hơn 2.000 ứng dụng, không phí nhiệm vụ nội bộ, tiết kiệm chi phí và hỗ trợ tích hợp AI nâng cao. Các gói mua một lần và giao diện kéo thả giúp doanh nghiệp tối ưu hiệu suất dễ dàng.", views: "15.9K" },
    { category: "Ai WorkFlow", name: "Albato", link: "https://albato.com?fpr=po3nf7", description: "Albato AI cho phép tích hợp và tự động hóa không cần mã với hơn 800 ứng dụng, dễ dàng kết nối với các nền tảng AI như OpenAI, ChatGPT mà không cần tài khoản riêng. Giao diện thân thiện, giá cả phải chăng và hỗ trợ 24/7 giúp tối ưu hóa quy trình kinh doanh hiệu quả.", views: "18.2K" }
];

// Tools loading configuration
let currentlyDisplayed = 0;
const TOOLS_PER_LOAD = 12;

// Helper function to determine badge and emoji
function getToolBadge(description) {
    const descLower = description.toLowerCase();
    if (descLower.includes('free') || descLower.includes('miễn phí')) {
        return { badge: 'FREE', class: 'badge-free' };
    } else if (descLower.includes('paid') || descLower.includes('trả phí')) {
        return { badge: 'PAID', class: 'badge-paid' };
    } else {
        return { badge: 'FREEMIUM', class: 'badge-freemium' };
    }
}

function getCategoryEmoji(category) {
    const catLower = category.toLowerCase();
    if (catLower.includes('writing') || catLower.includes('productivity')) return '✍️';
    if (catLower.includes('marketing') || catLower.includes('business')) return '📊';
    if (catLower.includes('learning') || catLower.includes('elearning')) return '📚';
    if (catLower.includes('video')) return '🎬';
    if (catLower.includes('image') || catLower.includes('photo')) return '🎨';
    if (catLower.includes('audio')) return '🎙️';
    if (catLower.includes('workflow')) return '⚡';
    return '🤖';
}

// Render tool card
function renderToolCard(tool) {
    const badgeInfo = getToolBadge(tool.description);
    const emoji = getCategoryEmoji(tool.category);

    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-logo">${emoji}</div>
            <span class="tool-badge ${badgeInfo.class}">${badgeInfo.badge}</span>
        </div>
        <h3 class="tool-name">${tool.name}</h3>
        <p class="tool-category">${tool.category}</p>
        <p class="tool-description">${tool.description.substring(0, 120)}...</p>
        <div class="tool-footer">
            <span class="tool-views">👁️ ${tool.views} views</span>
            <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="btn btn-small">Visit</a>
        </div>
    `;

    return card;
}

// Load more tools
function loadMoreTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!toolsGrid) return;

    // Calculate how many tools to load
    const startIndex = currentlyDisplayed;
    const endIndex = Math.min(startIndex + TOOLS_PER_LOAD, ALL_TOOLS.length);

    // Add new tools
    for (let i = startIndex; i < endIndex; i++) {
        const card = renderToolCard(ALL_TOOLS[i]);
        toolsGrid.appendChild(card);

        // Animate in
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (i - startIndex) * 50);
    }

    currentlyDisplayed = endIndex;

    // Update or hide button
    if (currentlyDisplayed >= ALL_TOOLS.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.textContent = `Xem thêm công cụ (${ALL_TOOLS.length - currentlyDisplayed} còn lại) →`;
    }

    console.log(`✅ Loaded ${endIndex - startIndex} tools. Total displayed: ${currentlyDisplayed}/${ALL_TOOLS.length}`);
}

// Initialize tools on page load
function initializeTools() {
    loadMoreTools(); // Load first 12 tools

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'block';
        loadMoreBtn.addEventListener('click', loadMoreTools);
    }
}

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTools);
} else {
    initializeTools();
}

// ====================
// SMOOTH SCROLL & INTERACTIVE FEATURES
// ====================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 72;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.tool-card, .blog-card, .pricing-card, .comparison-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Pricing card hover effect enhancement
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Tool card click tracking (for analytics)
const toolCards = document.querySelectorAll('.tool-card');
toolCards.forEach(card => {
    card.addEventListener('click', function (e) {
        if (!e.target.classList.contains('btn')) {
            const toolName = this.querySelector('.tool-name').textContent;
            console.log(`Tool card clicked: ${toolName}`);
            // Add your analytics tracking here
        }
    });
});

// CTA button pulse effect
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(btn => {
    setInterval(() => {
        btn.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            btn.style.animation = '';
        }, 500);
    }, 3000);
});

// Add CSS animation for pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    
    @media (max-width: 768px) {
        .nav.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: white;
            padding: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            gap: 16px;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add smooth reveal animation to sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

console.log('AIHUBS Landing Page loaded successfully! 🚀');
