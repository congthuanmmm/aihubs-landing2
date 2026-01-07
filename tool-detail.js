// Tool Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Get tool slug from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const toolSlug = urlParams.get('tool');

    if (!toolSlug) {
        window.location.href = 'tools-directory.html';
        return;
    }

    // Find tool data
    const tool = findToolBySlug(toolSlug);

    if (!tool) {
        window.location.href = 'tools-directory.html';
        return;
    }

    // Get extended data
    const extendedData = TOOLS_EXTENDED[toolSlug] || {};

    // Populate page
    populateToolData(tool, extendedData);

    // Setup tabs
    setupTabs();

    // Setup save button
    setupSaveButton(tool);

    // Load trending tools
    loadTrendingTools();
});

function populateToolData(tool, extendedData) {
    // Update page title and meta
    document.title = `${tool.name} - Chi tiết Công cụ - AIHUBS`;
    document.getElementById('pageDescription').content = tool.description;

    // Header section
    if (tool.logo) {
        document.getElementById('toolLogoImg').src = tool.logo;
        document.getElementById('toolLogoImg').alt = tool.name;
    } else {
        document.getElementById('toolLogoLarge').innerHTML = getCategoryIcon(tool.category);
    }

    document.getElementById('toolTitleLarge').textContent = tool.name;
    document.getElementById('toolDescriptionLarge').textContent = tool.description;
    document.getElementById('visitWebsiteBtn').href = tool.link;

    // Rating stars
    const rating = extendedData.ratings?.overall || 5.0;
    document.getElementById('toolStarsLarge').innerHTML = generateStars(rating);
    document.getElementById('toolRatingScore').textContent = rating.toFixed(1);
    document.getElementById('toolViewsLarge').textContent = `📊 ${tool.views}`;

    // Tool names in various places
    document.getElementById('tabToolName1').textContent = tool.name;
    document.getElementById('tabToolName2').textContent = tool.name;
    document.getElementById('tabToolName3').textContent = tool.name;
    document.getElementById('introToolName').textContent = tool.name;
    document.getElementById('usersToolName').textContent = tool.name;

    // Metadata
    const categoriesEl = document.getElementById('toolCategories');
    const categories = tool.category.split(',').map(c => c.trim());
    categoriesEl.innerHTML = categories.map(cat =>
        `<span class="category-tag">${cat}</span>`
    ).join('');

    // Introduction
    if (extendedData.intro) {
        document.getElementById('toolIntro').textContent = extendedData.intro;
    } else {
        document.getElementById('toolIntro').textContent = tool.description;
    }

    // Features
    const featuresEl = document.getElementById('toolFeatures');
    if (extendedData.features && extendedData.features.length > 0) {
        featuresEl.innerHTML = extendedData.features.map(feature => `
            <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span class="feature-text">${feature}</span>
            </div>
        `).join('');
    } else {
        featuresEl.innerHTML = '<p>Thông tin tính năng đang được cập nhật...</p>';
    }

    // Pros
    const prosEl = document.getElementById('toolPros');
    if (extendedData.pros && extendedData.pros.length > 0) {
        prosEl.innerHTML = extendedData.pros.map(pro => `<li>${pro}</li>`).join('');
    } else {
        prosEl.innerHTML = '<li>Dễ sử dụng và hiệu quả</li><li>Giao diện thân thiện</li>';
    }

    // Cons
    const consEl = document.getElementById('toolCons');
    if (extendedData.cons && extendedData.cons.length > 0) {
        consEl.innerHTML = extendedData.cons.map(con => `<li>${con}</li>`).join('');
    } else {
        consEl.innerHTML = '<li>Một số tính năng yêu cầu trả phí</li>';
    }

    // Target Audience
    const audienceEl = document.getElementById('toolTargetAudience');
    if (extendedData.targetAudience) {
        audienceEl.textContent = extendedData.targetAudience;
    } else {
        audienceEl.textContent = 'Phù hợp cho mọi người muốn sử dụng AI trong công việc.';
    }

    // Pricing
    const pricingEl = document.getElementById('toolPricing');
    if (extendedData.pricing) {
        pricingEl.textContent = extendedData.pricing;
    } else {
        pricingEl.textContent = 'Vui lòng truy cập website để xem bảng giá chi tiết.';
    }

    // Ratings Breakdown
    const ratingsEl = document.getElementById('toolRatingsBreakdown');
    if (extendedData.ratings) {
        const ratings = extendedData.ratings;
        ratingsEl.innerHTML = `
            <div class="rating-item">
                <span class="rating-label">Độ chính xác</span>
                <span class="rating-value">${ratings.accuracy}/5</span>
            </div>
            <div class="rating-item">
                <span class="rating-label">Dễ sử dụng</span>
                <span class="rating-value">${ratings.ease}/5</span>
            </div>
            <div class="rating-item">
                <span class="rating-label">Tính năng</span>
                <span class="rating-value">${ratings.features}/5</span>
            </div>
            <div class="rating-item">
                <span class="rating-label">Tốc độ</span>
                <span class="rating-value">${ratings.speed}/5</span>
            </div>
            <div class="rating-item">
                <span class="rating-label">Hỗ trợ</span>
                <span class="rating-value">${ratings.support}/5</span>
            </div>
            <div class="rating-item">
                <span class="rating-label"><strong>Điểm tổng</strong></span>
                <span class="rating-value">${ratings.overall}/5</span>
            </div>
        `;
    } else {
        ratingsEl.innerHTML = '<p>Đánh giá đang được cập nhật...</p>';
    }

    // Conclusion
    const conclusionEl = document.getElementById('toolConclusion');
    if (extendedData.conclusion) {
        conclusionEl.textContent = extendedData.conclusion;
    } else {
        conclusionEl.textContent = `${tool.name} là một công cụ AI tuyệt vời giúp bạn tăng năng suất và hiệu quả công việc.`;
    }
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let html = '';

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            html += '⭐';
        } else if (i === fullStars && hasHalfStar) {
            html += '⭐';
        } else {
            html += '☆';
        }
    }

    return html;
}

function getCategoryIcon(category) {
    const icons = {
        'AI Writing & Productivity': '✍️',
        'AI Marketing & Online Business': '📊',
        'AI Learning & eLearning Tools': '📚',
        'AI Video': '🎬',
        'AI Image & Photo': '🎨',
        'AI Audio': '🎵',
        'Ai WorkFlow': '⚙️'
    };

    return icons[category] || '🤖';
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

function setupSaveButton(tool) {
    const saveBtn = document.getElementById('saveToolBtn');
    const savedTools = JSON.parse(localStorage.getItem('savedTools') || '[]');
    const isSaved = savedTools.includes(tool.name);

    if (isSaved) {
        saveBtn.textContent = '✓ Đã lưu';
        saveBtn.classList.add('saved');
    }

    saveBtn.addEventListener('click', () => {
        let savedTools = JSON.parse(localStorage.getItem('savedTools') || '[]');

        if (savedTools.includes(tool.name)) {
            // Remove from saved
            savedTools = savedTools.filter(name => name !== tool.name);
            saveBtn.textContent = '🔖 Lưu lại';
            saveBtn.classList.remove('saved');
        } else {
            // Add to saved
            savedTools.push(tool.name);
            saveBtn.textContent = '✓ Đã lưu';
            saveBtn.classList.add('saved');
        }

        localStorage.setItem('savedTools', JSON.stringify(savedTools));
    });
}

function loadTrendingTools() {
    const trendingEl = document.getElementById('trendingTools');

    // Get top 4 tools by views
    const topTools = [...ALL_TOOLS]
        .sort((a, b) => {
            const viewsA = parseFloat(a.views.replace('K', '')) * 1000;
            const viewsB = parseFloat(b.views.replace('K', '')) * 1000;
            return viewsB - viewsA;
        })
        .slice(0, 4);

    trendingEl.innerHTML = topTools.map((tool, index) => {
        const toolSlug = getToolSlug(tool.name);
        const logoHtml = tool.logo
            ? `<img src="${tool.logo}" alt="${tool.name}">`
            : getCategoryIcon(tool.category);

        return `
            <a href="tool-detail.html?tool=${toolSlug}" class="trending-item">
                <div class="trending-rank">#${index + 1}</div>
                <div class="trending-logo">${logoHtml}</div>
                <div class="trending-info">
                    <div class="trending-name">${tool.name}</div>
                    <div class="trending-meta">
                        <span class="trending-price">Freemium</span>
                        <span class="trending-views">👁 ${tool.views}</span>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}
