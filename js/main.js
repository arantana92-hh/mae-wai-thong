// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Shared behaviors
// (เมนูมือถือ / scroll-reveal / ปุ่มกลับขึ้นด้านบน — ย้ายมาจาก <script> ที่เคยพิมพ์ซ้ำในแต่ละหน้า)

// เมนูมือถือ (ทำงานเฉพาะหน้าที่มี <site-header> แบบเต็ม ซึ่งจะมี #menuToggle/#mobilePanel)
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');
if (menuToggle && mobilePanel) {
  menuToggle.addEventListener('click', () => {
    mobilePanel.classList.toggle('open');
  });
  mobilePanel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobilePanel.classList.remove('open'));
  });
}

// แสดงเนื้อหาแบบค่อยๆ ปรากฏเมื่อเลื่อนดู
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

// ปุ่มกลับขึ้นด้านบน
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });
}
