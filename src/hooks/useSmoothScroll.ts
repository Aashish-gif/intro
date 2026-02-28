import { useEffect } from 'react';

/**
 * Simple smooth scroll implementation without external dependency
 * Provides buttery smooth scroll experience similar to Lenis
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    // Enable smooth scroll behavior
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';

    // Easing function for smooth scroll
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const smoothScroll = (target: HTMLElement, duration: number = 1000) => {
      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + window.scrollY;
      const distance = end - start;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Attach smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target instanceof HTMLElement) {
            smoothScroll(target);
          }
        }
      });
    });

    return () => {
      html.style.scrollBehavior = 'auto';
    };
  }, []);
};

export default useSmoothScroll;
