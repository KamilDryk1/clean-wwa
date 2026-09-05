import Vue from 'vue';

// Progressive enhancement: HTML is visible before hydration and without JS.
// Animate only once per element; never leave content hidden waiting for an observer.
export default () => {
  if (process.server) { Vue.directive('reveal', {}); return; }
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pending = new Map();
  const running = new Map();
  const finish = (el) => {
    if (observer) observer.unobserve(el);
    pending.delete(el);
    if (running.has(el)) running.get(el).cancel();
    running.delete(el);
  };
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      const delay = pending.get(target) || 0;
      finish(target);
      if (preference.matches || !target.animate || target.contains(document.activeElement)) return;
      const animation = target.animate([
        { opacity: 0.15, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 560, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
      running.set(target, animation);
      animation.onfinish = () => running.delete(target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }) : null;
  preference.addEventListener('change', () => {
    if (preference.matches) [...pending.keys(), ...running.keys()].forEach(finish);
  });
  Vue.directive('reveal', {
    inserted(el, binding) {
      if (!observer || preference.matches) return;
      pending.set(el, Math.min(180, Math.max(0, Number(binding.value) || 0)));
      observer.observe(el);
      el.__finishReveal = () => finish(el);
      el.addEventListener('focusin', el.__finishReveal);
    },
    unbind(el) { finish(el); el.removeEventListener('focusin', el.__finishReveal); delete el.__finishReveal; },
  });
};
