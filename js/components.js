// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Reusable Web Components
// ใช้ Custom Elements มาตรฐานของเบราว์เซอร์ (ไม่ใช่ library ภายนอก) แทนการ copy-paste
// header/footer ซ้ำในทุกไฟล์ HTML

const FB_URL = 'https://www.facebook.com/share/1D57ZSNNBr/';

// หน้าไหนที่ไม่ใช่ index.html ต้องอ้างอิงกลับไปที่ index.html#... แทน #... เฉยๆ
function homePrefix() {
  const p = location.pathname;
  const isHome = p === '/' || p === '' || p.endsWith('/index.html');
  return isHome ? '' : 'index.html';
}

/**
 * <site-header variant="full|simple">
 * - full   (ค่าเริ่มต้น): เมนูเต็มพร้อมลิงก์ไปแต่ละ section + ปุ่มแฮมเบอร์เกอร์มือถือ (ใช้ในหน้า Home)
 * - simple: โลโก้ + ลิงก์ "กลับหน้าแรก" (ใช้ในหน้าบทความ)
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const variant = this.getAttribute('variant') || 'full';
    const prefix = homePrefix();

    if (variant === 'simple') {
      this.innerHTML = `
<header>
  <nav class="nav">
    <a href="${prefix}#top" class="logo"><span>🌿</span> แม่วัยทอง</a>
    <a href="${prefix}#articles" class="back-link">← กลับหน้าแรก</a>
  </nav>
</header>`;
      return;
    }

    this.innerHTML = `
<header>
  <nav class="nav">
    <a href="${prefix}#top" class="logo"><span>🌿</span> แม่วัยทอง</a>
    <ul class="nav-links">
      <li><a href="${prefix}#about">แนะนำตัว</a></li>
      <li><a href="${prefix}#stories">เรื่องราว</a></li>
      <li><a href="${prefix}#activities">กิจกรรม</a></li>
      <li><a href="${prefix}#articles">บทความ</a></li>
    </ul>
    <div class="nav-cta">
      <a href="${FB_URL}" target="_blank" rel="noopener" class="btn btn-primary">ติดตาม Facebook</a>
    </div>
    <button class="menu-toggle" id="menuToggle" aria-label="เปิดเมนู">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-panel" id="mobilePanel">
    <a href="${prefix}#about">แนะนำตัว</a>
    <a href="${prefix}#stories">เรื่องราว</a>
    <a href="${prefix}#activities">กิจกรรม</a>
    <a href="${prefix}#articles">บทความ</a>
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
