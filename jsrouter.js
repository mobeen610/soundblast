// Handle navigation between pages
class Router {
  constructor() {
    this.routes = {
      home: 'index.html',
      category: 'category.html',
      sound: 'sound.html',
      upload: 'upload.html',
      profile: 'profile.html'
    };
    
    this.init();
  }
  
  init() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(currentPage)) {
        link.classList.add('active');
      }
    });
  }
  
  navigate(page, params = {}) {
    let url = this.routes[page];
    
    if (params && Object.keys(params).length > 0) {
      const queryString = new URLSearchParams(params).toString();
      url += '?' + queryString;
    }
    
    window.location.href = url;
  }
  
  getParams() {
    return new URLSearchParams(window.location.search);
  }
}

// Initialize router
const router = new Router();

// Global navigation function
function navigateTo(page, params) {
  router.navigate(page, params);
}