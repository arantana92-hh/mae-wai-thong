// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Portfolio data source
//
// แหล่งข้อมูลกลางของผลงาน ใช้กับ <portfolio-card> component (js/components.js)
// เช่นเดียวกับ js/data/articles.js และ js/data/activities.js
//
// รูปแบบแต่ละรายการ:
// { id, title, description, category, image (หรือ null), platform, year, link (หรือ null), featured }
//
// สำคัญ: ทั้ง 4 รายการนี้เป็น "ตัวอย่างโครงสร้าง" ที่แต่งขึ้นใหม่ทั้งหมด
// ไม่ใช่ผลงานจริง — จึงตั้งค่า link: null ทุกรายการ (ไม่สร้างลิงก์ปลอมที่ทำ
// เหมือนเป็นผลงานจริง) เมื่อมีผลงานจริงในอนาคต ให้ใส่ URL จริงลงในฟิลด์ link
// แล้ว <portfolio-card> จะแสดงปุ่ม "ดูผลงาน" ให้เองอัตโนมัติ
//
// หมวดหมู่ (4 หมวด):
//   Content Creation
//   รีวิวสถานที่ / Lifestyle
//   Social Media Content
//   Digital Products

const PORTFOLIO = [
  {
    id: "sample-content-creation",
    title: "ตัวอย่าง: ชุดคอนเทนต์ \"เมนูเช้าง่ายๆ สำหรับลูกวัยเรียน\"",
    description: "ตัวอย่างโครงร่างซีรีส์คอนเทนต์แนะนำเมนูอาหารเช้าที่ทำง่าย ใช้เวลาไม่นาน เหมาะสำหรับคุณแม่ที่ต้องรีบตอนเช้าแต่ยังอยากให้ลูกได้กินอิ่มท้อง",
    category: "Content Creation",
    image: null,
    platform: "Blog",
    year: 2026,
    link: null,
    featured: true
  },
  {
    id: "sample-place-review",
    title: "ตัวอย่าง: รีวิวสวนสาธารณะที่เหมาะพาลูกไปวิ่งเล่น",
    description: "ตัวอย่างโครงร่างการรีวิวสถานที่ เน้นมุมมองที่เป็นประโยชน์กับครอบครัวที่มีลูกวัยเรียน เช่น ความปลอดภัย ร่มเงา และสิ่งอำนวยความสะดวกสำหรับเด็ก",
    category: "รีวิวสถานที่ / Lifestyle",
    image: null,
    platform: "Blog",
    year: 2026,
    link: null,
    featured: true
  },
  {
    id: "sample-social-content",
    title: "ตัวอย่าง: ซีรีส์โพสต์ \"เรื่องเล่าเช้าวันจันทร์\"",
    description: "ตัวอย่างแนวทางคอนเทนต์โซเชียลมีเดียแบบสั้น เล่าเรื่องราวเล็กๆ ในชีวิตประจำวันของแม่ลูกให้เข้าถึงง่ายและอ่านสบาย",
    category: "Social Media Content",
    image: null,
    platform: "Facebook / TikTok",
    year: 2026,
    link: null,
    featured: true
  },
  {
    id: "sample-digital-product",
    title: "ตัวอย่าง: แพลนเนอร์กิจกรรมแม่ลูกรายสัปดาห์",
    description: "ตัวอย่างแนวคิดไฟล์ดาวน์โหลดสำหรับวางแผนกิจกรรมกับลูกในแต่ละสัปดาห์ ออกแบบให้ใช้งานง่ายและพิมพ์ออกมาใช้ได้ทันที",
    category: "Digital Products",
    image: null,
    platform: "Digital Download",
    year: 2026,
    link: null,
    featured: true
  }
];
