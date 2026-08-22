// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Article data source
//
// แหล่งข้อมูลกลางของบทความ (ไม่ใช่ทุกบทความในเว็บ — ตอนนี้มีเฉพาะรายการที่ใช้กับ
// ระบบ <article-card> เช่น ส่วน "เรื่องที่อยากชวนคุณอ่าน" บน Home)
// วันหน้าถ้าจะให้ blog/index.html อ่านจากไฟล์นี้แทนการเขียน HTML ตรงๆ ก็ทำได้
// โดยไม่ต้องแก้ <article-card> เลย
//
// รูปแบบแต่ละรายการ:
// {
//   id, title, excerpt, category, image (หรือ null ถ้ายังไม่มีรูปจริง),
//   slug (ต่อกับ URL จริง: /blog/article-<slug>.html), date (YYYY-MM-DD),
//   readingTime (นาที, ประมาณจากความยาวเนื้อหาจริง), featured (bool)
// }

const ARTICLES = [
  {
    id: "talk-to-teens",
    slug: "talk-to-teens",
    title: "5 วิธีคุยกับลูกวัยรุ่นให้ลูกอยากเล่าให้ฟัง",
    excerpt: "เทคนิคง่ายๆ ที่เปลี่ยนบทสนทนาแบบสอบปากคำ ให้กลายเป็นบทสนทนาที่ลูกอยากเปิดใจ",
    category: "เลี้ยงลูก",
    image: "/images/mom-daughter-nurse.jpg",
    date: "2026-06-12",
    readingTime: 3,
    featured: true
  },
  {
    id: "new-chapter-40s",
    slug: "new-chapter-40s",
    title: "แม่วัย 40+ กับการเริ่มต้นบทใหม่ที่ไม่ใช่แค่บทบาทแม่",
    excerpt: "เมื่อลูกโตขึ้นและต้องการเราน้อยลงทีละนิด ก็ถึงเวลาที่จะกลับมาถามตัวเองว่าอยากเป็นใครอีกบ้าง",
    category: "แม่วัย 40+",
    image: null,
    date: "2026-07-03",
    readingTime: 3,
    featured: true
  },
  {
    id: "family-activities-connection",
    slug: "family-activities-connection",
    title: "5 กิจกรรมสั้นๆ ที่ทำให้ลูกอยากคุยกับเรามากขึ้น",
    excerpt: "ไม่ต้องนั่งคุยจริงจัง แค่ทำกิจกรรมง่ายๆ เหล่านี้ด้วยกัน ลูกก็เปิดใจเล่าเรื่องให้ฟังเองโดยไม่ต้องถาม",
    category: "กิจกรรมแม่ลูก",
    image: null,
    date: "2026-07-20",
    readingTime: 2,
    featured: true
  },
  {
    id: "lessons-from-my-child",
    slug: "lessons-from-my-child",
    title: "บทเรียนที่ลูกสอนเราโดยไม่ได้ตั้งใจ",
    excerpt: "เราคิดว่ากำลังสอนลูกให้เติบโต แต่บางทีลูกก็สอนเรากลับโดยไม่รู้ตัว เรื่องเล็กๆ ที่ทำให้แม่คนหนึ่งได้เติบโตไปพร้อมกับลูก",
    category: "ชีวิตและการเติบโต",
    image: null,
    date: "2026-08-05",
    readingTime: 2,
    featured: true
  }
];
