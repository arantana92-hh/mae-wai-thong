// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Activity data source
//
// แหล่งข้อมูลกลางของไอเดียกิจกรรมแม่ลูก ใช้กับ <activity-card> component
// (js/components.js) — เช่นเดียวกับ js/data/articles.js ที่ใช้กับ <article-card>
//
// รูปแบบแต่ละรายการ:
// { id, title, description, category, image (หรือ null ถ้ายังไม่มีรูปจริง), featured (bool) }
//
// หมวดหมู่ (5 หมวด — "ช่วงเวลาของเรา"):
//   🎨 เล่นกับลูก 10 นาที
//   📚 อ่านหนังสือด้วยกัน
//   🧩 กิจกรรมฝึก EF/IQ/EQ
//   🚗 เที่ยวกับลูก
//   🍳 ทำอาหารด้วยกัน

const ACTIVITIES = [
  // ---- เล่นกับลูก 10 นาที ----
  {
    id: "evening-walk",
    title: "เดินเล่นรับแดดเย็น",
    description: "แค่เดินรอบบ้านหรือรอบสวนสาธารณะ ก็เป็นเวลาที่ลูกเล่าเรื่องโรงเรียนให้ฟังได้เต็มที่",
    category: "เล่นกับลูก 10 นาที",
    image: "/images/activity-evening-walk.jpg",
    featured: true
  },
  {
    id: "board-game",
    title: "เล่นบอร์ดเกมยามค่ำ",
    description: "เกมง่ายๆ สักตาสองตา สร้างเสียงหัวเราะและสอนเรื่องการแพ้ชนะไปในตัว",
    category: "เล่นกับลูก 10 นาที",
    image: "/images/activity-board-game.jpg",
    featured: false
  },
  {
    id: "twenty-questions",
    title: "เล่นทาย 20 คำถาม",
    description: "ผลัดกันนึกสิ่งของแล้วให้อีกฝ่ายถามใช่/ไม่ใช่ทาย ฝึกคิดวิเคราะห์แบบสนุกๆ ระหว่างรอรถหรือรอคิว",
    category: "เล่นกับลูก 10 นาที",
    image: null,
    featured: false
  },
  {
    id: "sing-and-dance",
    title: "ร้องเพลงหรือเต้นด้วยกัน",
    description: "เปิดเพลงโปรดแล้วเต้นแบบไม่ต้องสวยงาม ความฮาระหว่างเต้นคือของรางวัลที่แท้จริง",
    category: "เล่นกับลูก 10 นาที",
    image: null,
    featured: false
  },
  {
    id: "coloring",
    title: "วาดรูประบายสี",
    description: "กระดาษว่างๆ กับสีชอล์ค เป็นทางออกที่ดีเวลาลูกอารมณ์เยอะหรือเบื่อหน่าย",
    category: "เล่นกับลูก 10 นาที",
    image: "/images/activity-coloring.jpg",
    featured: false
  },

  // ---- อ่านหนังสือด้วยกัน ----
  {
    id: "bedtime-story",
    title: "อ่านนิทานก่อนนอน",
    description: "สิบนาทีก่อนหลับที่เปลี่ยนเป็นช่วงเวลาผูกพันที่ลูกรอคอยทุกคืน",
    category: "อ่านหนังสือด้วยกัน",
    image: "/images/activity-reading-corner.jpg",
    featured: true
  },
  {
    id: "library-visit",
    title: "ไปห้องสมุดหรือร้านหนังสือด้วยกัน",
    description: "หามุมสงบให้ลูกเลือกหนังสือที่ชอบ นั่งอ่านด้วยกันสักชั่วโมง ไม่มีค่าใช้จ่ายแต่ได้ความรู้เต็มๆ",
    category: "อ่านหนังสือด้วยกัน",
    image: null,
    featured: false
  },
  {
    id: "take-turns-reading",
    title: "ผลัดกันอ่านออกเสียงคนละหน้า",
    description: "แบ่งกันอ่านนิทานหรือหนังสือคนละหน้า ช่วยฝึกการอ่านออกเสียงของลูกแบบไม่กดดัน และสนุกกว่าอ่านคนเดียว",
    category: "อ่านหนังสือด้วยกัน",
    image: null,
    featured: false
  },

  // ---- กิจกรรมฝึก EF/IQ/EQ ----
  {
    id: "plant-tree",
    title: "ปลูกต้นไม้เล็กๆ",
    description: "ให้ลูกมีกระถางของตัวเอง สอนเรื่องความรับผิดชอบผ่านการรดน้ำทุกเช้า",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: "/images/activity-plant-tree.jpg",
    featured: true
  },
  {
    id: "simple-chores",
    title: "ฝึกทำงานบ้านง่ายๆ",
    description: "ให้ลูกช่วยพับผ้า จัดโต๊ะ หรือแยกขยะ งานเล็กๆ ที่ฝึกความรับผิดชอบและทำให้รู้สึกเป็นส่วนหนึ่งของบ้าน",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: null,
    featured: false
  },
  {
    id: "word-number-games",
    title: "เกมฝึกคำศัพท์กับตัวเลข",
    description: "เกมทายคำหรือบวกเลขง่ายๆ ระหว่างนั่งรถหรือรอกินข้าว เปลี่ยนเวลาว่างให้เป็นเวลาเรียนรู้แบบไม่กดดัน",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: null,
    featured: false
  },
  {
    id: "weekly-goals",
    title: "ฝึกตั้งเป้าหมายเล็กๆ รายสัปดาห์",
    description: "ชวนลูกเลือกเป้าหมายง่ายๆ 1 อย่างต่อสัปดาห์ เช่น เก็บที่นอนเองทุกวัน แล้วมาทบทวนกันตอนสิ้นสัปดาห์ ฝึกการวางแผนและควบคุมตัวเอง",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: null,
    featured: false
  },

  // ---- เที่ยวกับลูก ----
  {
    id: "park-walk-cycle",
    title: "เดินเล่นหรือปั่นจักรยานในสวนสาธารณะ",
    description: "ให้อาหารนก วิ่งเล่น หรือปั่นจักรยานเบาๆ เป็นเวลาคุณภาพที่ไม่มีจอมาแทรก",
    category: "เที่ยวกับลูก",
    image: null,
    featured: false
  },
  {
    id: "weekend-market",
    title: "ตลาดนัดเช้าวันหยุด",
    description: "ให้ลูกเลือกของกินเอง ฝึกคำนวณเงินและตัดสินใจ เป็นบทเรียนชีวิตเล็กๆ ที่สนุกด้วย",
    category: "เที่ยวกับลูก",
    image: null,
    featured: true
  },
  {
    id: "backyard-picnic",
    title: "ปิกนิกเล็กๆ ในสวนหลังบ้านหรือระเบียง",
    description: "ปูเสื่อ เตรียมของว่างง่ายๆ นั่งคุยกัน ก็สร้างบรรยากาศพิเศษให้วันธรรมดาได้แล้ว",
    category: "เที่ยวกับลูก",
    image: null,
    featured: false
  },
  {
    id: "visit-relatives",
    title: "ไปเยี่ยมญาติผู้ใหญ่ในครอบครัว",
    description: "ให้ลูกได้เรียนรู้เรื่องราวของครอบครัวและรู้สึกผูกพันกับรากเหง้าของตัวเองมากขึ้น",
    category: "เที่ยวกับลูก",
    image: null,
    featured: false
  },

  // ---- ทำอาหารด้วยกัน ----
  {
    id: "bake-cookies",
    title: "ทำขนมด้วยกัน",
    description: "เลือกสูตรง่ายๆ ให้ลูกช่วยตวงและคน แป้งเลอะไม่เป็นไร ความทรงจำสำคัญกว่า",
    category: "ทำอาหารด้วยกัน",
    image: "/images/activity-bake-cookies.jpg",
    featured: true
  },
  {
    id: "favorite-menu",
    title: "ทำเมนูโปรดของลูกด้วยกันในวันหยุด",
    description: "ให้ลูกเลือกเมนูที่อยากกิน แล้วช่วยกันทำตั้งแต่เตรียมของถึงจัดจาน ได้ทั้งความภูมิใจและมื้ออร่อย",
    category: "ทำอาหารด้วยกัน",
    image: null,
    featured: false
  },
  {
    id: "pack-lunchbox",
    title: "ห่อข้าวกล่องไปโรงเรียนด้วยกัน",
    description: "ให้ลูกช่วยเลือกเมนูและจัดข้าวกล่องของตัวเอง ฝึกการตัดสินใจง่ายๆ ตั้งแต่เช้า",
    category: "ทำอาหารด้วยกัน",
    image: null,
    featured: false
  }
];
