// AOS-like functionality without external dependency
let observer: IntersectionObserver | null = null;

export function initAOS() {
  if (typeof window === 'undefined') return;

  // Create intersection observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animation = element.getAttribute('data-aos') || 'fade-up';
          const delay = parseInt(element.getAttribute('data-aos-delay') || '0');
          
          setTimeout(() => {
            element.classList.add('aos-animate');
          }, delay);
          
          observer?.unobserve(element);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  );

  // Find all elements with data-aos attribute
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach((element) => {
    if (observer) {
      observer.observe(element);
    }
  });

  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    [data-aos] {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    [data-aos].aos-animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    [data-aos="fade-up"] {
      transform: translateY(30px);
    }
    
    [data-aos="fade-right"] {
      transform: translateX(-30px);
    }
    
    [data-aos="fade-left"] {
      transform: translateX(30px);
    }
    
    [data-aos="fade-down"] {
      transform: translateY(-30px);
    }
    
    [data-aos].aos-animate {
      transform: translate(0, 0);
    }
  `;
  
  if (!document.getElementById('aos-styles')) {
    style.id = 'aos-styles';
    document.head.appendChild(style);
  }
}

export function refreshAOS() {
  if (observer) {
    const elements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
    elements.forEach((element) => {
      observer?.observe(element);
    });
  }
}
