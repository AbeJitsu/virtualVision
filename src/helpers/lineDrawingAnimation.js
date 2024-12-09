import gsap from 'gsap';

/**
 * Animates a path element with a line-drawing effect.
 * @param {string} selector - The CSS selector for the path element.
 * @param {object} options - Animation options.
 * @param {number} [options.duration=2] - Duration of the animation in seconds.
 * @param {string} [options.ease='power1.inOut'] - Easing function for the animation.
 */
export function animateLineDrawing(selector, options = {}) {
  const { duration = 2, ease = 'power1.inOut' } = options;
  gsap.fromTo(
    selector,
    { strokeDasharray: '0, 500', strokeDashoffset: 500 },
    { strokeDashoffset: 0, duration, ease }
  );
}
