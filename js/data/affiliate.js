// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Affiliate product data source
//
// สินค้าที่แนะนำจริง พร้อมลิงก์ affiliate จริงที่เจ้าของเว็บสมัครไว้เอง
// (ไม่ใช่ตัวอย่าง/ข้อมูลสมมติแบบ js/data/portfolio.js) — ใช้กับ <affiliate-card>
// component (js/components.js)
//
// รูปแบบแต่ละรายการ:
// { id, title, description, category, image (หรือ null ถ้าไม่มีรูปที่มีสิทธิ์ใช้), price, link }
//
// สำคัญ:
// - ลิงก์ต้องเป็นลิงก์ affiliate จริงเท่านั้น ห้ามใส่ URL ปลอม
// - ห้ามใส่รูปสินค้าที่ไม่มีสิทธิ์ใช้งาน (ดึงจากแพลตฟอร์มอื่นโดยไม่ได้รับอนุญาต)
//   ถ้าไม่มีรูปของตัวเอง ให้ใช้ image: null (component จะโชว์ placeholder แทน)
// - ทุกลิงก์ในหน้า "ของแนะนำ" ต้องมีข้อความเปิดเผยว่าเป็นลิงก์พันธมิตรกำกับไว้เสมอ

const AFFILIATE_PRODUCTS = [
  {
    id: "passkids-8-books",
    title: "PASS@KIDS ชุดคุณแม่สองขาชวนเล่นกับลูก ยกชุด 8 เล่ม",
    description: "ชุดหนังสือไอเดียกิจกรรมชวนลูกเล่น รวมไอเดียหลากหลายไว้ในชุดเดียว เหมาะกับคุณแม่ที่อยากมีคลังไอเดียกิจกรรมติดบ้านไว้ใช้ได้เรื่อยๆ",
    category: "หนังสือกิจกรรมแม่ลูก",
    image: null,
    price: "฿424",
    link: "https://s.shopee.co.th/2qTzt4jpSb?share_channel_code=6"
  },
  {
    id: "bepanthen-ointment",
    title: "Bepanthen Ointment บีแพนเธน ออยเมนท์ 100g",
    description: "ครีมทาผื่นผ้าอ้อมสำหรับเด็กเล็ก ของใช้ติดบ้านที่คุณแม่ลูกเล็กหลายคนคุ้นเคยกันดี",
    category: "ของใช้ลูกน้อย",
    image: null,
    price: null,
    link: "https://s.shopee.co.th/7VFpMmOJre"
  },
  {
    id: "passkids-rap-tales-yellow",
    title: "PASS@KIDS นิทานอ่านแรปคุณธรรม (กล่องเหลือง) รวม 8 เล่ม",
    description: "นิทานแนวแรปคุณธรรม ฝึกทักษะภาษาไทยและสร้างเสริมทักษะชีวิตให้ลูกผ่านการอ่านสนุกๆ",
    category: "นิทาน / ทักษะภาษา",
    image: null,
    price: "฿320",
    link: "https://s.shopee.co.th/6L3s3bU54n?share_channel_code=6"
  },
  {
    id: "passbook-ef-tales",
    title: "นิทานคำกลอน นิทานEF แม่สองขา หนังสือเด็ก นิทานรางวัล Passbook",
    description: "นิทานคำกลอนที่ช่วยฝึก EF (Executive Function) ให้ลูก อ่านสนุก จำง่าย เหมาะเป็นนิทานก่อนนอน",
    category: "นิทาน / EF",
    image: null,
    price: "฿50",
    link: "https://s.shopee.co.th/9V0tpnMPn4?share_channel_code=6"
  }
];
