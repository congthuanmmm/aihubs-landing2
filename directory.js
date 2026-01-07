// Enhanced Directory JavaScript - Premium SaaS Version
document.addEventListener('DOMContentLoaded', function () {
    const toolsGrid = document.getElementById('directoryToolsGrid');
    const heroSearchInput = document.getElementById('heroSearchInput');
    const categoryPills = document.querySelectorAll('.category-pill');
    const intentChips = document.querySelectorAll('.intent-chip');
    const toolsCountElement = document.getElementById('toolsCount');
    const noResults = document.getElementById('noResults');
    const emptyState = document.getElementById('emptyState');
    const skeletonLoading = document.getElementById('skeletonLoading');
    const filtersApplied = document.getElementById('filtersApplied');
    const filtersList = document.getElementById('filtersList');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const clearFromEmpty = document.getElementById('clearFromEmpty');
    const advancedFilterToggle = document.getElementById('advancedFilterToggle');
    const advancedFilters = document.getElementById('advancedFilters');

    // Filter controls
    const filterPrice = document.getElementById('filterPrice');
    const filterLevel = document.getElementById('filterLevel');
    const filterPlatform = document.getElementById('filterPlatform');
    const filterLanguage = document.getElementById('filterLanguage');
    const sortSelect = document.getElementById('sortSelect');

    let currentCategory = 'all';
    let currentSearchTerm = '';
    let activeFilters = {
        price: '',
        level: '',
        platform: '',
        language: ''
    };
    let currentSort = 'popular';

    // Helper: Extract bullets from description
    function extractBullets(description) {
        // Simple extraction - split by sentence, take first 3
        const sentences = description.split('.').filter(s => s.trim().length > 0);
        return sentences.slice(0, 3).map(s => s.trim() + '.');
    }

    // Helper: Get tool slug
    function getToolSlug(name) {
        return name.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/\//g, '-')
            .replace(/[^\w-]/g, '');
    }

    // Helper: Get category icon
    function getCategoryIcon(category) {
        const iconMap = {
            'AI Writing & Productivity': '✍️',
            'AI Marketing & Online Business': '📊',
            'AI Learning & eLearning Tools': '📚',
            'AI Video': '🎬',
            'AI Image & Photo': '🎨',
            'AI Audio': '🎙️',
            'Ai WorkFlow': '⚡'
        };
        return iconMap[category] || '🤖';
    }

    // Skeleton Loading
    function showSkeletonLoading() {
        toolsGrid.style.display = 'none';
        emptyState.style.display = 'none';
        skeletonLoading.style.display = 'grid';
    }

    function hideSkeletonLoading() {
        skeletonLoading.style.display = 'none';
        toolsGrid.style.display = 'grid';
    }

    // Render Featured Tools (Fixed 8 tools)
    function renderFeaturedTools() {
        const featuredGrid = document.getElementById('featuredToolsGrid');
        if (!featuredGrid) return;

        // Fixed list of featured tool names
        const featuredNames = ['Heygen', 'Clipto', 'Magiclight', 'Jogg', 'Lovable', 'Elevenlabs', 'BetterPic', 'MakeUGC'];

        // Find these tools in ALL_TOOLS
        const featuredTools = featuredNames.map(name =>
            ALL_TOOLS.find(tool => tool.name.toLowerCase().includes(name.toLowerCase()))
        ).filter(tool => tool !== undefined);

        featuredGrid.innerHTML = featuredTools.map(tool => `
            <div class="featured-tool-card" onclick="window.location.href='tool-detail.html?tool=${getToolSlug(tool.name)}'">
                <div class="featured-tool-header">
                    <div class="featured-tool-logo">
                        ${tool.logo ? `<img src="${tool.logo}" alt="${tool.name} logo">` : getCategoryIcon(tool.category)}
                    </div>
                    <div class="featured-tool-info">
                        <div class="featured-tool-name">
                            ${tool.name} <span class="verified-badge">✓</span>
                        </div>
                        <div class="featured-tool-category">${tool.category}</div>
                    </div>
                    <span class="pricing-badge ${tool.pricing || 'freemium'}">${tool.pricing || 'FREEMIUM'}</span>
                </div>
                
                <p class="featured-tool-description">${tool.description.substring(0, 120)}...</p>
                
                <div class="featured-tool-footer">
                    <div class="featured-tool-stats">
                        <div class="rating-stars">
                            ★★★★★ <span class="rating-count">(${tool.reviews || Math.floor(Math.random() * 900) + 100})</span>
                        </div>
                        <div class="view-count">
                            👁 ${tool.views || (Math.floor(Math.random() * 50) + 10)}K
                        </div>
                    </div>
                    <a href="${tool.link}" target="_blank" rel="noopener" class="visit-btn" 
                       onclick="event.stopPropagation()">
                        Try For Free
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Render Tools
    function renderTools(toolsToRender) {
        showSkeletonLoading();

        setTimeout(() => {
            toolsGrid.innerHTML = '';

            if (toolsToRender.length === 0) {
                hideSkeletonLoading();
                toolsGrid.style.display = 'none';
                emptyState.style.display = 'block';
                toolsCountElement.textContent = '0';
                return;
            }

            emptyState.style.display = 'none';
            toolsCountElement.textContent = toolsToRender.length;

            toolsToRender.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card fade-in';

                const categoryIcon = getCategoryIcon(tool.category);
                const toolSlug = getToolSlug(tool.name);
                const hasLogo = tool.logo || false;
                const logoDisplay = hasLogo
                    ? `<img src="${tool.logo}" alt="${tool.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${categoryIcon}';">`
                    : categoryIcon;

                const bullets = extractBullets(tool.description);

                toolCard.innerHTML = `
                    <div class="tool-card-content" onclick="window.location.href='tool-detail.html?tool=${toolSlug}'">
                        <div class="tool-card-header">
                            <div class="tool-logo">${logoDisplay}</div>
                            <div class="tool-info">
                                <h3 class="tool-name">${tool.name}</h3>
                                <p class="tool-category">${tool.category}</p>
                            </div>
                            <span class="pricing-badge freemium">FREEMIUM</span>
                        </div>
                        <p class="tool-description">${tool.description}</p>
                        <div class="tool-footer">
                            <span class="tool-views">👁️ ${tool.views}</span>
                            <a href="${tool.link}" target="_blank" rel="noopener" class="visit-btn" 
                               onclick="event.stopPropagation()">
                                Try For Free
                            </a>
                        </div>
                    </div>
                `;

                toolsGrid.appendChild(toolCard);
            });

            hideSkeletonLoading();
        }, 300); // Simulate loading
    }

    // Sort Tools
    function sortTools(tools) {
        const sorted = [...tools];

        switch (currentSort) {
            case 'popular':
                sorted.sort((a, b) => {
                    const viewsA = parseFloat(a.views.replace('K', '')) * 1000;
                    const viewsB = parseFloat(b.views.replace('K', '')) * 1000;
                    return viewsB - viewsA;
                });
                break;
            case 'newest':
                // Would need date field - for now random
                sorted.reverse();
                break;
            case 'rating':
                // Would need rating field - for now by views
                sorted.sort((a, b) => {
                    const viewsA = parseFloat(a.views.replace('K', '')) * 1000;
                    const viewsB = parseFloat(b.views.replace('K', '')) * 1000;
                    return viewsB - viewsA;
                });
                break;
        }

        return sorted;
    }

    // Filter Tools
    function filterTools() {
        let filteredTools = ALL_TOOLS;

        // Toggle Featured Section visibility
        const featuredSection = document.querySelector('.featured-tools-section');
        if (featuredSection) {
            if (currentCategory === 'all' && !currentSearchTerm) {
                // Show featured section only when showing all tools
                featuredSection.style.display = 'block';
            } else {
                // Hide featured section when filtering
                featuredSection.style.display = 'none';
            }
        }

        // Update section title based on current category
        const sectionTitleText = document.getElementById('sectionTitleText');
        if (sectionTitleText) {
            if (currentCategory === 'all') {
                sectionTitleText.textContent = 'Tất Cả AI';
            } else {
                sectionTitleText.textContent = currentCategory;
            }
        }

        // Filter by category
        if (currentCategory !== 'all') {
            filteredTools = filteredTools.filter(tool => tool.category === currentCategory);
        }

        // Filter by search term
        if (currentSearchTerm) {
            filteredTools = filteredTools.filter(tool => {
                const searchFields = [
                    tool.name.toLowerCase(),
                    tool.description.toLowerCase(),
                    tool.category.toLowerCase()
                ].join(' ');
                return searchFields.includes(currentSearchTerm.toLowerCase());
            });
        }

        // Advanced filters (UI ready, data not available yet)
        // These would filter based on tool properties when data is available

        // Sort
        filteredTools = sortTools(filteredTools);

        // Update filter tags
        updateFilterTags();

        renderTools(filteredTools);
    }

    // Update Filter Tags Display
    function updateFilterTags() {
        const tags = [];

        if (currentCategory !== 'all') {
            tags.push(currentCategory);
        }

        if (activeFilters.price) {
            tags.push(activeFilters.price);
        }

        if (activeFilters.level) {
            tags.push(activeFilters.level);
        }

        if (activeFilters.platform) {
            tags.push(activeFilters.platform);
        }

        if (activeFilters.language) {
            tags.push(activeFilters.language);
        }

        if (tags.length > 0) {
            filtersList.textContent = tags.join(', ');
            filtersApplied.style.display = 'block';
            clearFiltersBtn.style.display = 'inline-flex';
        } else {
            filtersApplied.style.display = 'none';
            clearFiltersBtn.style.display = 'none';
        }
    }

    // Clear All Filters
    function clearAllFilters() {
        currentCategory = 'all';
        currentSearchTerm = '';
        activeFilters = {
            price: '',
            level: '',
            platform: '',
            language: ''
        };

        // Reset UI
        heroSearchInput.value = '';
        categoryPills.forEach(btn => btn.classList.remove('active'));
        categoryPills[0].classList.add('active');

        filterPrice.value = '';
        filterLevel.value = '';
        filterPlatform.value = '';
        filterLanguage.value = '';

        filterTools();
    }

    // Event Listeners

    // Hero Search
    heroSearchInput.addEventListener('input', function (e) {
        currentSearchTerm = e.target.value.trim();
        filterTools();
    });

    // Category Pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', function () {
            categoryPills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            filterTools();
        });
    });

    // Quick Intent Chips
    intentChips.forEach(chip => {
        chip.addEventListener('click', function () {
            const intent = this.getAttribute('data-intent');

            // Set category
            currentCategory = intent;

            // Update UI
            categoryPills.forEach(p => p.classList.remove('active'));
            const targetPill = document.querySelector(`.category-pill[data-category="${intent}"]`);
            if (targetPill) {
                targetPill.classList.add('active');
            }

            // Scroll to results
            document.querySelector('.directory-tools').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            filterTools();
        });
    });

    // Advanced Filter Toggle
    advancedFilterToggle.addEventListener('click', function () {
        const isVisible = advancedFilters.style.display !== 'none';
        advancedFilters.style.display = isVisible ? 'none' : 'flex';
        this.style.background = isVisible ? 'transparent' : 'rgba(255, 255, 255, 0.05)';
    });

    // Advanced Filters
    filterPrice.addEventListener('change', function () {
        activeFilters.price = this.value;
        filterTools();
    });

    filterLevel.addEventListener('change', function () {
        activeFilters.level = this.value;
        filterTools();
    });

    filterPlatform.addEventListener('change', function () {
        activeFilters.platform = this.value;
        filterTools();
    });

    filterLanguage.addEventListener('change', function () {
        activeFilters.language = this.value;
        filterTools();
    });

    // Sort
    sortSelect.addEventListener('change', function () {
        currentSort = this.value;
        filterTools();
    });

    // Clear Filters Buttons
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    clearFromEmpty.addEventListener('click', clearAllFilters);

    // Sticky Filter Bar
    const filterBar = document.getElementById('filterBarSticky');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 200) {
            filterBar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        } else {
            filterBar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Initial render - show all tools
    renderFeaturedTools();
    renderTools(ALL_TOOLS);
});
