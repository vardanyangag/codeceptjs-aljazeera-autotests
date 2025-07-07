const CONFIG = {
  // Base URLs
  BASE_URL: 'https://www.aljazeera.com',
  MAIN_URL: 'https://www.aljazeera.com',
  LIVE_URL: 'https://www.aljazeera.com/live',
  
  // Viewport configurations
  VIEWPORTS: {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 375, height: 812 },
    tablet: { width: 768, height: 1024 }
  },
  
  // Timeouts
  TIMEOUTS: {
    default: 5000,
    pageLoad: 10000,
    elementWait: 5000,
    bypassBlock: 3000,  // Shorter timeout for bypass block operations
    urlWait: 3000       // Shorter timeout for URL waiting
  },
  
  // Selectors
  SELECTORS: {
    mostReadContainer: '#most-read-container',
    mostReadArticles: '#most-read-container article',
    livestreamPlayer: 'div.livestream-wrapper, .video-js, iframe',
    switchPlayerButton: 'button',
    body: 'body'
  },
  
  // Test data
  TEST_DATA: {
    expectedArticleCount: 10,
    bypassBlockAnchor: '#most-read-container'
  }
};

module.exports = { CONFIG }; 