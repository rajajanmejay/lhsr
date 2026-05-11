// Lazy loading utility for images
/**
 * Create a lazy-loadable image component configuration
 * @param {string} src - Source URL
 * @param {string} alt - Alt text
 * @param {string} placeholder - Placeholder image or color
 * @returns {object} Configuration object
 */
export const createLazyImageConfig = (src, alt, placeholder = null) => ({
  src,
  alt,
  placeholder,
  loaded: false,
});

/**
 * Setup Intersection Observer for lazy loading
 * @param {React.RefObject} ref - Reference to image element
 * @param {Function} onLoad - Callback when image should load
 */
export const setupIntersectionObserver = (ref, onLoad) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onLoad();
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '50px' }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
};

/**
 * Preload image
 */
export const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
  return new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
};
