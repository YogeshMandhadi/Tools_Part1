// Load header and footer components
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Load footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Initialize tools data
    initializeTools();
});

// Tools data
const tools = {
    imageTools: [
        { name: 'Image to PNG Converter', icon: 'image', url: '/tools/image-to-png.html' },
        { name: 'Image to JPG Converter', icon: 'file-image', url: '/tools/image-to-jpg.html' },
        { name: 'Image Resizer', icon: 'compress', url: '/tools/image-resizer.html' },
        { name: 'Image Compressor', icon: 'compress-arrows-alt', url: '/tools/image-compressor.html' },
        { name: 'Image Cropper', icon: 'crop', url: '/tools/image-cropper.html' },
        { name: 'Base64 Converter', icon: 'code', url: '/tools/base64-converter.html' },
        { name: 'WebP to PNG', icon: 'exchange-alt', url: '/tools/webp-to-png.html' },
        { name: 'GIF Maker', icon: 'film', url: '/tools/gif-maker.html' },
        { name: 'QR Code Generator', icon: 'qrcode', url: '/tools/qr-generator.html' },
        { name: 'Screenshot to PDF', icon: 'file-pdf', url: '/tools/screenshot-to-pdf.html' }
    ],
    seoTools: [
        { name: 'Meta Tag Generator', icon: 'tags', url: '/tools/meta-tag-generator.html' },
        { name: 'Keyword Density Checker', icon: 'percentage', url: '/tools/keyword-density.html' },
        { name: 'Sitemap Generator', icon: 'sitemap', url: '/tools/sitemap-generator.html' },
        { name: 'Robots.txt Generator', icon: 'robot', url: '/tools/robots-txt-generator.html' },
        { name: 'Google Index Checker', icon: 'search', url: '/tools/google-index-checker.html' },
        { name: 'Domain Authority Checker', icon: 'chart-line', url: '/tools/domain-authority.html' },
        { name: 'Backlink Checker', icon: 'link', url: '/tools/backlink-checker.html' },
        { name: 'Page Speed Checker', icon: 'tachometer-alt', url: '/tools/page-speed.html' },
        { name: 'XML Sitemap Validator', icon: 'check-circle', url: '/tools/sitemap-validator.html' },
        { name: 'Mobile-Friendly Test', icon: 'mobile-alt', url: '/tools/mobile-friendly.html' }
    ]
};

// Initialize tools
function initializeTools() {
    // Populate Image Tools
    const imageToolsContainer = document.getElementById('imageTools');
    if (imageToolsContainer) {
        tools.imageTools.forEach(tool => {
            imageToolsContainer.appendChild(createToolCard(tool));
        });
    }

    // Populate SEO Tools
    const seoToolsContainer = document.getElementById('seoTools');
    if (seoToolsContainer) {
        tools.seoTools.forEach(tool => {
            seoToolsContainer.appendChild(createToolCard(tool));
        });
    }

    // Initialize search functionality
    initializeSearch();
}

// Create tool card
function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3';
    
    col.innerHTML = `
        <div class="card h-100">
            <div class="card-body text-center">
                <i class="fas fa-${tool.icon} fa-3x mb-3 text-primary"></i>
                <h5 class="card-title">${tool.name}</h5>
                <a href="${tool.url}" class="btn btn-primary mt-2">Use Tool</a>
            </div>
        </div>
    `;
    
    return col;
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchTools');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        // Search in image tools
        const imageTools = document.querySelectorAll('#imageTools .col-md-4');
        imageTools.forEach(tool => {
            const toolName = tool.querySelector('.card-title').textContent.toLowerCase();
            tool.style.display = toolName.includes(searchTerm) ? 'block' : 'none';
        });

        // Search in SEO tools
        const seoTools = document.querySelectorAll('#seoTools .col-md-4');
        seoTools.forEach(tool => {
            const toolName = tool.querySelector('.card-title').textContent.toLowerCase();
            tool.style.display = toolName.includes(searchTerm) ? 'block' : 'none';
        });
    });
} 