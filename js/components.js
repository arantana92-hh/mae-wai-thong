// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Reusable Web Components
// ใช้ Custom Elements มาตรฐานของเบราว์เซอร์ (ไม่ใช่ library ภายนอก) แทนการ copy-paste
// header/footer ซ้ำในทุกไฟล์ HTML

const FB_URL = 'https://www.facebook.com/share/1D57ZSNNBr/';

// ใช้ path แบบ absolute (ขึ้นต้นด้วย /) เพื่อให้ลิงก์ถูกต้องไม่ว่าหน้าปัจจุบัน
// จะอยู่ลึกแค่ไหน (root, /blog/, ฯลฯ)
const HOME = '/index.html';
function isHomePage() {
  const p = location.pathname;
  return p === '/' || p === '' || p.endsWith('/index.html');
}
// ใช้กับลิงก์ที่ชี้ไปยัง section บน Home (#stories ฯลฯ) — ถ้าอยู่ที่ Home อยู่แล้วใช้ # เฉยๆ
// (same-page scroll) ถ้าอยู่หน้าอื่นให้พ่วง path ของ Home ไปด้วย
function homeAnchor(hash) {
  return (isHomePage() ? '' : HOME) + hash;
}

/**
 * <site-header variant="full|simple">
 * - full   (ค่าเริ่มต้น): เมนูเต็มพร้อมลิงก์ไปแต่ละหน้า/section + ปุ่มแฮมเบอร์เกอร์มือถือ (ใช้ในหน้า Home)
 * - simple: โลโก้ + ลิงก์ "กลับหน้าแรก" (ใช้ในหน้าบทความ)
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const variant = this.getAttribute('variant') || 'full';

    if (variant === 'simple') {
      this.innerHTML = `
<header>
  <nav class="nav">
    <a href="${HOME}#top" class="logo"><span>🌿</span> แม่วัยทอง</a>
    <a href="${HOME}#top" class="back-link">← กลับหน้าแรก</a>
  </nav>
</header>`;
      return;
    }

    this.innerHTML = `
<header>
  <nav class="nav">
    <a href="${HOME}#top" class="logo"><span>🌿</span> แม่วัยทอง</a>
    <ul class="nav-links">
      <li><a href="/about.html">แนะนำตัว</a></li>
      <li><a href="/blog/index.html">บทความ</a></li>
      <li><a href="/activities.html">กิจกรรม</a></li>
      <li><a href="/portfolio.html">ผลงาน</a></li>
      <li><a href="/contact.html">ติดต่อ</a></li>
    </ul>
    <div class="nav-cta">
      <a href="${FB_URL}" target="_blank" rel="noopener" class="btn btn-primary">ติดตาม Facebook</a>
    </div>
    <button class="menu-toggle" id="menuToggle" aria-label="เปิดเมนู">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-panel" id="mobilePanel">
    <a href="/about.html">แนะนำตัว</a>
    <a href="${homeAnchor('#stories')}">เรื่องราว</a>
    <a href="/blog/index.html">บทความ</a>
    <a href="/activities.html">กิจกรรม</a>
    <a href="/portfolio.html">ผลงาน</a>
    <a href="/contact.html">ติดต่อ</a>
    <a href="${FB_URL}" target="_blank" rel="noopener">ติดตาม Facebook →</a>
  </div>
</header>`;
  }
}

/** <site-footer> — ท้ายทุกหน้า */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer>
  <p>ขอบคุณที่แวะมาเยี่ยมชมนะคะ หวังว่าเรื่องราวเล็กๆ ที่นี่จะเป็นเพื่อนคุณแม่ทุกคนในวันที่เหนื่อยและวันที่อบอุ่นใจ</p>
  <p>© 2026 ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน · ทำด้วยหัวใจ <span class="heart">♥</span></p>
</footer>`;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
