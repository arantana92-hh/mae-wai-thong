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
      <li><a href="/about.html">เรื่องราว</a></li>
      <li><a href="/blog/index.html">บทความ</a></li>
      <li><a href="/activities.html">กิจกรรม</a></li>
      <li><a href="/portfolio.html">ผลงาน</a></li>
      <li><a href="/recommended.html">ของแนะนำ</a></li>
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
    <a href="/about.html">เรื่องราว</a>
    <a href="${homeAnchor('#stories')}">เรื่องเล่าจากบ้านเรา</a>
    <a href="/blog/index.html">บทความ</a>
    <a href="/activities.html">กิจกรรม</a>
    <a href="/portfolio.html">ผลงาน</a>
    <a href="/recommended.html">ของแนะนำ</a>
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

/**
 * <article-card> — การ์ดบทความที่ใช้ซ้ำได้ (Home / Blog / Category / Search ในอนาคต)
 * รับข้อมูลผ่าน property เท่านั้น ไม่มีเนื้อหา hardcode อยู่ใน component:
 *
 *   const card = document.createElement('article-card');
 *   card.article = { id, title, excerpt, category, image, slug, date, readingTime, featured };
 *   container.appendChild(card);
 *
 * - image เป็น null ได้ (จะแสดง placeholder ที่ไม่มีข้อความหลอก แทนการสร้างภาพปลอม)
 * - ลิงก์บทความคำนวณจาก slug ตามระบบ routing เดิมของไซต์: /blog/article-<slug>.html
 * - การ์ดทั้งใบเป็นลิงก์เดียว (a11y: 1 accessible name ต่อการ์ด, keyboard-operable โดยไม่ต้องเขียน JS เพิ่ม)
 */
class ArticleCard extends HTMLElement {
  set article(data) {
    this._article = data;
    this.render();
  }
  get article() {
    return this._article;
  }
  render() {
    const a = this._article;
    if (!a) return;
    this.classList.add('article-card-editorial');

    const url = `/blog/article-${a.slug}.html`;
    const dateLabel = formatArticleDate(a.date);
    const mediaHtml = a.image
      ? `<img src="${a.image}" alt="${escapeHtml(a.title)}" loading="lazy">`
      : `<div class="article-card-editorial__placeholder" aria-hidden="true">
           <svg viewBox="0 0 24 24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5.5-5.5a1.5 1.5 0 00-2.1 0L4 19"/></svg>
         </div>`;

    this.innerHTML = `
<a href="${url}" class="article-card-editorial__link" aria-label="${escapeHtml(a.title)} — อ่านเพิ่มเติม">
  <div class="article-card-editorial__media">${mediaHtml}</div>
  <div class="article-card-editorial__body">
    <span class="article-card-editorial__category">${escapeHtml(a.category)}</span>
    <h3 class="article-card-editorial__title">${escapeHtml(a.title)}</h3>
    <p class="article-card-editorial__excerpt">${escapeHtml(a.excerpt)}</p>
    <p class="article-card-editorial__meta">
      <time datetime="${a.date}">${dateLabel}</time>
      <span aria-hidden="true"> · </span>
      <span>อ่าน ${a.readingTime} นาที</span>
    </p>
  </div>
</a>`;
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function formatArticleDate(isoDate) {
  const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  const [y, m, d] = isoDate.split('-').map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}

/**
 * <activity-card> — การ์ดไอเดียกิจกรรมที่ใช้ซ้ำได้ (Home / หน้า Activities)
 * รับข้อมูลผ่าน property เช่นเดียวกับ <article-card>:
 *
 *   const card = document.createElement('activity-card');
 *   card.activity = { id, title, description, category, image, featured };
 *   container.appendChild(card);
 *
 * ไม่มีลิงก์ภายใน (กิจกรรมไม่มีหน้ารายละเอียดแยก) — เป็นการ์ดข้อมูลล้วนๆ
 */
class ActivityCard extends HTMLElement {
  set activity(data) {
    this._activity = data;
    this.render();
  }
  get activity() {
    return this._activity;
  }
  render() {
    const a = this._activity;
    if (!a) return;
    this.classList.add('activity-card-editorial');

    const mediaHtml = a.image
      ? `<img src="${a.image}" alt="${escapeHtml(a.title)}" loading="lazy">`
      : `<div class="activity-card-editorial__placeholder" aria-hidden="true">
           <svg viewBox="0 0 24 24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5.5-5.5a1.5 1.5 0 00-2.1 0L4 19"/></svg>
         </div>`;

    const skillsHtml = (a.skills && a.skills.length)
      ? `<ul class="activity-card-editorial__skills">${a.skills.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
      : '';

    // ระดับความยาก/อายุ/เวลา แสดงเป็น "ข้อความ" เสมอ ไม่ใช้สีอย่างเดียวสื่อความหมาย
    const metaHtml = `
<p class="activity-card-editorial__meta">
  <span>⏱ ${escapeHtml(a.duration)}</span>
  <span aria-hidden="true"> · </span>
  <span>อายุ ${escapeHtml(a.ageRange)}</span>
  <span aria-hidden="true"> · </span>
  <span>ระดับ${escapeHtml(a.difficulty)}</span>
</p>`;

    const bodyHtml = `
<div class="activity-card-editorial__media">${mediaHtml}</div>
<div class="activity-card-editorial__body">
  <span class="activity-card-editorial__category">${escapeHtml(a.category)}</span>
  <h3 class="activity-card-editorial__title">${escapeHtml(a.title)}</h3>
  <p class="activity-card-editorial__desc">${escapeHtml(a.description)}</p>
  ${metaHtml}
  ${skillsHtml}
</div>`;

    // ห่อด้วยลิงก์เฉพาะเมื่อมี Activity Detail Page จริง (featured: true) — ป้องกันลิงก์พัง
    this.innerHTML = (a.featured && a.slug)
      ? `<a href="/activities/${a.slug}.html" class="activity-card-editorial__link" aria-label="${escapeHtml(a.title)} — ดูรายละเอียดกิจกรรม">${bodyHtml}</a>`
      : bodyHtml;
  }
}

/**
 * <portfolio-card> — การ์ดผลงานที่ใช้ซ้ำได้ (Home / Portfolio / Category ในอนาคต)
 * รับข้อมูลผ่าน property เช่นเดียวกับ <article-card> / <activity-card>:
 *
 *   const card = document.createElement('portfolio-card');
 *   card.portfolio = { id, title, description, category, image, platform, year, link, featured };
 *   container.appendChild(card);
 *
 * ห้ามใส่ URL ปลอมใน `link` — ถ้ายังไม่มีผลงานจริงให้ใช้ null แล้ว component
 * จะไม่แสดงปุ่ม "ดูผลงาน" เลย (เหมือน <activity-card> ที่ไม่แสดงลิงก์เมื่อ
 * ยังไม่มีหน้ารายละเอียดจริงรองรับ)
 */
class PortfolioCard extends HTMLElement {
  set portfolio(data) {
    this._portfolio = data;
    this.render();
  }
  get portfolio() {
    return this._portfolio;
  }
  render() {
    const p = this._portfolio;
    if (!p) return;
    this.classList.add('portfolio-card-editorial');

    const mediaHtml = p.image
      ? `<img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy">`
      : `<div class="portfolio-card-editorial__placeholder" aria-hidden="true">
           <svg viewBox="0 0 24 24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5.5-5.5a1.5 1.5 0 00-2.1 0L4 19"/></svg>
         </div>`;

    const metaParts = [];
    if (p.platform) metaParts.push(escapeHtml(p.platform));
    if (p.year) metaParts.push(String(p.year));
    const metaHtml = metaParts.length
      ? `<p class="portfolio-card-editorial__meta">${metaParts.join(' · ')}</p>`
      : '';

    // แสดงปุ่ม "ดูผลงาน" เฉพาะเมื่อมีลิงก์จริงเท่านั้น
    const linkHtml = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener" class="portfolio-card-editorial__cta" aria-label="ดูผลงาน: ${escapeHtml(p.title)}">ดูผลงาน →</a>`
      : '';

    this.innerHTML = `
<div class="portfolio-card-editorial__media">${mediaHtml}</div>
<div class="portfolio-card-editorial__body">
  <span class="portfolio-card-editorial__category">${escapeHtml(p.category)}</span>
  <h3 class="portfolio-card-editorial__title">${escapeHtml(p.title)}</h3>
  <p class="portfolio-card-editorial__desc">${escapeHtml(p.description)}</p>
  ${metaHtml}
  ${linkHtml}
</div>`;
  }
}

/**
 * <affiliate-card> — การ์ดสินค้าพันธมิตร (affiliate) ใช้ซ้ำได้ (หน้า "ของแนะนำ", Phase 14)
 * รับข้อมูลผ่าน property เช่นเดียวกับการ์ดอื่นๆ:
 *
 *   const card = document.createElement('affiliate-card');
 *   card.affiliate = { id, title, description, category, image, price, link };
 *   container.appendChild(card);
 *
 * ใช้คลาส CSS ร่วมกับ <portfolio-card> (โครงหน้าตาเดียวกัน ไม่ต้องเพิ่ม CSS ใหม่)
 * ลิงก์เป็น affiliate link จริงเท่านั้น (ต่างจาก <portfolio-card> ตรงที่ไม่มี
 * link: null เพราะสินค้าที่แสดงในหน้านี้ต้องมีลิงก์จริงเสมอ) ใช้ rel="sponsored
 * noopener" ตามแนวทางของ Google สำหรับลิงก์พันธมิตร/ลิงก์ที่ได้รับค่าตอบแทน
 */
class AffiliateCard extends HTMLElement {
  set affiliate(data) {
    this._affiliate = data;
    this.render();
  }
  get affiliate() {
    return this._affiliate;
  }
  render() {
    const p = this._affiliate;
    if (!p) return;
    this.classList.add('portfolio-card-editorial');

    const mediaHtml = p.image
      ? `<img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy">`
      : `<div class="portfolio-card-editorial__placeholder" aria-hidden="true">
           <svg viewBox="0 0 24 24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5.5-5.5a1.5 1.5 0 00-2.1 0L4 19"/></svg>
         </div>`;

    const metaHtml = p.price
      ? `<p class="portfolio-card-editorial__meta">${escapeHtml(p.price)}</p>`
      : '';

    this.innerHTML = `
<div class="portfolio-card-editorial__media">${mediaHtml}</div>
<div class="portfolio-card-editorial__body">
  <span class="portfolio-card-editorial__category">${escapeHtml(p.category)}</span>
  <h3 class="portfolio-card-editorial__title">${escapeHtml(p.title)}</h3>
  <p class="portfolio-card-editorial__desc">${escapeHtml(p.description)}</p>
  ${metaHtml}
  <a href="${p.link}" target="_blank" rel="sponsored noopener" class="portfolio-card-editorial__cta" aria-label="ดูสินค้า: ${escapeHtml(p.title)}">ดูสินค้า →</a>
</div>`;
  }
}

/**
 * <lead-magnet-cta> — การ์ดชวนรับเช็คลิสต์ฟรี ใช้ซ้ำได้ทุกหน้า (Phase 13: Content Funnel)
 * ไม่มี property ให้ตั้งค่า (ข้อความเดียวกันทุกที่ที่ใช้) วางไว้ท้ายบทความ/หน้ารายการ
 * เพื่อชวนคนที่กำลังอ่านเนื้อหาอยู่ไปรับเช็คลิสต์ฟรีต่อ
 */
class LeadMagnetCta extends HTMLElement {
  connectedCallback() {
    this.classList.add('lead-magnet-cta');
    this.innerHTML = `
<span class="lead-magnet-cta__icon" aria-hidden="true">🎁</span>
<div class="lead-magnet-cta__body">
  <p class="lead-magnet-cta__title">เช็คลิสต์ 10 ไอเดียกิจกรรมแม่ลูก ไม่ต้องเตรียมของ</p>
  <p class="lead-magnet-cta__desc">ดาวน์โหลดฟรี ทำได้เลยวันนี้</p>
</div>
<a href="/free-checklist.html" class="btn btn-primary">รับฟรี →</a>`;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
customElements.define('article-card', ArticleCard);
customElements.define('activity-card', ActivityCard);
customElements.define('portfolio-card', PortfolioCard);
customElements.define('lead-magnet-cta', LeadMagnetCta);
customElements.define('affiliate-card', AffiliateCard);
