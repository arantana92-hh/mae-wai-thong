// ชีวิตดีๆ แม่วัยทองกับลูกวัยเรียน — Activity data source
//
// แหล่งข้อมูลกลางของไอเดียกิจกรรมแม่ลูก ใช้กับ <activity-card> component
// (js/components.js) — เช่นเดียวกับ js/data/articles.js ที่ใช้กับ <article-card>
//
// รูปแบบแต่ละรายการ:
// {
//   id, slug (ตรงกับ id — ต่อกับ URL: /activities/<slug>.html ถ้ามีหน้าจริง),
//   title, description, category, image (หรือ null),
//   ageRange, duration, difficulty ("ง่าย" | "ปานกลาง"),
//   skills (array), materials (array),
//   featured (bool — true = มี Activity Detail Page จริงที่ /activities/<slug>.html)
// }
//
// หมายเหตุเรื่อง EF/IQ/EQ: คำอธิบายในไฟล์นี้และหน้า Detail ใช้ถ้อยคำ "ช่วยฝึก" /
// "เปิดโอกาสให้ได้ฝึก" / "ส่งเสริม" เท่านั้น — ไม่มีข้อความอ้างว่ากิจกรรมช่วย
// "เพิ่ม IQ" หรือ "รักษา/พัฒนาสมอง" อย่างที่ยืนยันได้แน่นอน
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
    slug: "evening-walk",
    title: "เดินเล่นรับแดดเย็น",
    description: "แค่เดินรอบบ้านหรือรอบสวนสาธารณะ ก็เป็นเวลาที่ลูกเล่าเรื่องโรงเรียนให้ฟังได้เต็มที่",
    category: "เล่นกับลูก 10 นาที",
    image: "/images/activity-evening-walk.jpg",
    ageRange: "3-6 ปี",
    duration: "10 นาที",
    difficulty: "ง่าย",
    skills: ["การสังเกต", "การสื่อสาร"],
    materials: ["ไม่ต้องใช้อุปกรณ์"],
    featured: true
  },
  {
    id: "board-game",
    slug: "board-game",
    title: "เล่นบอร์ดเกมยามค่ำ",
    description: "เกมง่ายๆ สักตาสองตา สร้างเสียงหัวเราะและสอนเรื่องการแพ้ชนะไปในตัว",
    category: "เล่นกับลูก 10 นาที",
    image: "/images/activity-board-game.jpg",
    ageRange: "3-6 ปี",
    duration: "15-20 นาที",
    difficulty: "ง่าย",
    skills: ["การรอคอย", "การยอมรับกติกา"],
    materials: ["บอร์ดเกมสำหรับเด็ก"],
    featured: false
  },
  {
    id: "twenty-questions",
    slug: "twenty-questions",
    title: "เล่นทาย 20 คำถาม",
    description: "ผลัดกันนึกสิ่งของแล้วให้อีกฝ่ายถามใช่/ไม่ใช่ทาย ฝึกคิดวิเคราะห์แบบสนุกๆ ระหว่างรอรถหรือรอคิว",
    category: "เล่นกับลูก 10 นาที",
    image: null,
    ageRange: "3-6 ปี",
    duration: "10 นาที",
    difficulty: "ง่าย",
    skills: ["การคิดวิเคราะห์", "การตั้งคำถาม"],
    materials: ["ไม่ต้องใช้อุปกรณ์"],
    featured: false
  },
  {
    id: "sing-and-dance",
    slug: "sing-and-dance",
    title: "ร้องเพลงหรือเต้นด้วยกัน",
    description: "เปิดเพลงโปรดแล้วเต้นแบบไม่ต้องสวยงาม ความฮาระหว่างเต้นคือของรางวัลที่แท้จริง",
    category: "เล่นกับลูก 10 นาที",
    image: null,
    ageRange: "3-6 ปี",
    duration: "10 นาที",
    difficulty: "ง่าย",
    skills: ["การแสดงออก", "การเคลื่อนไหวร่างกาย"],
    materials: ["เพลงโปรด"],
    featured: false
  },
  {
    id: "coloring",
    slug: "coloring",
    title: "วาดรูประบายสี",
    description: "กระดาษว่างๆ กับสีชอล์ค เป็นทางออกที่ดีเวลาลูกอารมณ์เยอะหรือเบื่อหน่าย",
    category: "เล่นกับลูก 10 นาที",
    image: "/images/activity-coloring.jpg",
    ageRange: "3-6 ปี",
    duration: "15-20 นาที",
    difficulty: "ง่าย",
    skills: ["ความคิดสร้างสรรค์", "กล้ามเนื้อมัดเล็ก"],
    materials: ["กระดาษ", "สีเทียนหรือสีชอล์ค"],
    featured: false
  },

  // ---- อ่านหนังสือด้วยกัน ----
  {
    id: "bedtime-story",
    slug: "bedtime-story",
    title: "อ่านนิทานก่อนนอน",
    description: "สิบนาทีก่อนหลับที่เปลี่ยนเป็นช่วงเวลาผูกพันที่ลูกรอคอยทุกคืน",
    category: "อ่านหนังสือด้วยกัน",
    image: "/images/activity-reading-corner.jpg",
    ageRange: "3-6 ปี",
    duration: "10 นาที",
    difficulty: "ง่าย",
    skills: ["ทักษะภาษา", "จินตนาการ"],
    materials: ["หนังสือนิทาน 1 เล่ม"],
    featured: true
  },
  {
    id: "library-visit",
    slug: "library-visit",
    title: "ไปห้องสมุดหรือร้านหนังสือด้วยกัน",
    description: "หามุมสงบให้ลูกเลือกหนังสือที่ชอบ นั่งอ่านด้วยกันสักชั่วโมง ไม่มีค่าใช้จ่ายแต่ได้ความรู้เต็มๆ",
    category: "อ่านหนังสือด้วยกัน",
    image: null,
    ageRange: "3-6 ปี",
    duration: "30-60 นาที",
    difficulty: "ง่าย",
    skills: ["การเลือกและตัดสินใจ", "สมาธิ"],
    materials: ["ไม่ต้องใช้อุปกรณ์"],
    featured: false
  },
  {
    id: "take-turns-reading",
    slug: "take-turns-reading",
    title: "ผลัดกันอ่านออกเสียงคนละหน้า",
    description: "แบ่งกันอ่านนิทานหรือหนังสือคนละหน้า ช่วยฝึกการอ่านออกเสียงของลูกแบบไม่กดดัน และสนุกกว่าอ่านคนเดียว",
    category: "อ่านหนังสือด้วยกัน",
    image: null,
    ageRange: "4-6 ปี",
    duration: "10-15 นาที",
    difficulty: "ปานกลาง",
    skills: ["การอ่านออกเสียง", "ความมั่นใจ"],
    materials: ["หนังสือนิทาน 1 เล่ม"],
    featured: false
  },

  // ---- กิจกรรมฝึก EF/IQ/EQ ----
  {
    id: "plant-tree",
    slug: "plant-tree",
    title: "ปลูกต้นไม้เล็กๆ",
    description: "ให้ลูกมีกระถางของตัวเอง เปิดโอกาสให้ได้ฝึกความรับผิดชอบผ่านการรดน้ำทุกเช้า",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: "/images/activity-plant-tree.jpg",
    ageRange: "3-6 ปี",
    duration: "10-15 นาทีต่อวัน",
    difficulty: "ง่าย",
    skills: ["ความรับผิดชอบ", "การดูแลสิ่งมีชีวิต"],
    materials: ["กระถางเล็ก", "ดิน", "เมล็ดพันธุ์หรือต้นกล้า"],
    featured: true
  },
  {
    id: "simple-chores",
    slug: "simple-chores",
    title: "ฝึกทำงานบ้านง่ายๆ",
    description: "ให้ลูกช่วยพับผ้า จัดโต๊ะ หรือแยกขยะ งานเล็กๆ ที่ช่วยฝึกความรับผิดชอบและทำให้รู้สึกเป็นส่วนหนึ่งของบ้าน",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: null,
    ageRange: "3-6 ปี",
    duration: "10 นาที",
    difficulty: "ง่าย",
    skills: ["ความรับผิดชอบ", "การจัดการตนเอง"],
    materials: ["ไม่ต้องใช้อุปกรณ์พิเศษ"],
    featured: false
  },
  {
    id: "word-number-games",
    slug: "word-number-games",
    title: "เกมฝึกคำศัพท์กับตัวเลข",
    description: "เกมทายคำหรือบวกเลขง่ายๆ ระหว่างนั่งรถหรือรอกินข้าว เปลี่ยนเวลาว่างให้เป็นเวลาเรียนรู้แบบไม่กดดัน",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: null,
    ageRange: "4-6 ปี",
    duration: "10 นาที",
    difficulty: "ปานกลาง",
    skills: ["คำศัพท์", "การคำนวณเบื้องต้น"],
    materials: ["ไม่ต้องใช้อุปกรณ์"],
    featured: false
  },
  {
    id: "weekly-goals",
    slug: "weekly-goals",
    title: "ฝึกตั้งเป้าหมายเล็กๆ รายสัปดาห์",
    description: "ชวนลูกเลือกเป้าหมายง่ายๆ 1 อย่างต่อสัปดาห์ เช่น เก็บที่นอนเองทุกวัน แล้วมาทบทวนกันตอนสิ้นสัปดาห์ เปิดโอกาสให้ได้ฝึกการวางแผนและควบคุมตัวเอง",
    category: "กิจกรรมฝึก EF/IQ/EQ",
    image: null,
    ageRange: "4-6 ปี",
    duration: "5 นาทีต่อวัน",
    difficulty: "ปานกลาง",
    skills: ["การวางแผน", "การควบคุมตนเอง"],
    materials: ["กระดาษหรือกระดานเล็กๆ"],
    featured: false
  },

  // ---- เที่ยวกับลูก ----
  {
    id: "park-walk-cycle",
    slug: "park-walk-cycle",
    title: "เดินเล่นหรือปั่นจักรยานในสวนสาธารณะ",
    description: "ให้อาหารนก วิ่งเล่น หรือปั่นจักรยานเบาๆ เป็นเวลาคุณภาพที่ไม่มีจอมาแทรก",
    category: "เที่ยวกับลูก",
    image: null,
    ageRange: "3-6 ปี",
    duration: "30-45 นาที",
    difficulty: "ง่าย",
    skills: ["ทักษะการเคลื่อนไหว", "การสังเกตธรรมชาติ"],
    materials: ["จักรยานหรือรองเท้าออกกำลังกาย"],
    featured: false
  },
  {
    id: "weekend-market",
    slug: "weekend-market",
    title: "ตลาดนัดเช้าวันหยุด",
    description: "ให้ลูกเลือกของกินเอง ฝึกคำนวณเงินและตัดสินใจ เป็นบทเรียนชีวิตเล็กๆ ที่สนุกด้วย",
    category: "เที่ยวกับลูก",
    image: null,
    ageRange: "4-6 ปี",
    duration: "45-60 นาที",
    difficulty: "ง่าย",
    skills: ["การคำนวณเงินเบื้องต้น", "การตัดสินใจ"],
    materials: ["เงินติดตัวเล็กน้อย"],
    featured: true
  },
  {
    id: "backyard-picnic",
    slug: "backyard-picnic",
    title: "ปิกนิกเล็กๆ ในสวนหลังบ้านหรือระเบียง",
    description: "ปูเสื่อ เตรียมของว่างง่ายๆ นั่งคุยกัน ก็สร้างบรรยากาศพิเศษให้วันธรรมดาได้แล้ว",
    category: "เที่ยวกับลูก",
    image: null,
    ageRange: "3-6 ปี",
    duration: "30-45 นาที",
    difficulty: "ง่าย",
    skills: ["การวางแผนง่ายๆ", "การสื่อสาร"],
    materials: ["เสื่อปูนั่ง", "ของว่าง"],
    featured: false
  },
  {
    id: "visit-relatives",
    slug: "visit-relatives",
    title: "ไปเยี่ยมญาติผู้ใหญ่ในครอบครัว",
    description: "ให้ลูกได้เรียนรู้เรื่องราวของครอบครัวและรู้สึกผูกพันกับรากเหง้าของตัวเองมากขึ้น",
    category: "เที่ยวกับลูก",
    image: null,
    ageRange: "3-6 ปี",
    duration: "1-2 ชั่วโมง",
    difficulty: "ง่าย",
    skills: ["ความผูกพันในครอบครัว", "มารยาททางสังคม"],
    materials: ["ไม่ต้องใช้อุปกรณ์"],
    featured: false
  },

  // ---- ทำอาหารด้วยกัน ----
  {
    id: "bake-cookies",
    slug: "bake-cookies",
    title: "ทำขนมด้วยกัน",
    description: "เลือกสูตรง่ายๆ ให้ลูกช่วยตวงและคน แป้งเลอะไม่เป็นไร ความทรงจำสำคัญกว่า",
    category: "ทำอาหารด้วยกัน",
    image: "/images/activity-bake-cookies.jpg",
    ageRange: "3-6 ปี",
    duration: "30-40 นาที",
    difficulty: "ปานกลาง",
    skills: ["การตวงวัด", "กล้ามเนื้อมัดเล็ก"],
    materials: ["แป้ง", "น้ำตาล", "เนย", "แม่พิมพ์ขนม"],
    featured: true
  },
  {
    id: "favorite-menu",
    slug: "favorite-menu",
    title: "ทำเมนูโปรดของลูกด้วยกันในวันหยุด",
    description: "ให้ลูกเลือกเมนูที่อยากกิน แล้วช่วยกันทำตั้งแต่เตรียมของถึงจัดจาน ได้ทั้งความภูมิใจและมื้ออร่อย",
    category: "ทำอาหารด้วยกัน",
    image: null,
    ageRange: "4-6 ปี",
    duration: "30 นาที",
    difficulty: "ปานกลาง",
    skills: ["การตัดสินใจ", "การทำงานร่วมกัน"],
    materials: ["วัตถุดิบตามเมนูที่เลือก"],
    featured: false
  },
  {
    id: "pack-lunchbox",
    slug: "pack-lunchbox",
    title: "ห่อข้าวกล่องไปโรงเรียนด้วยกัน",
    description: "ให้ลูกช่วยเลือกเมนูและจัดข้าวกล่องของตัวเอง ฝึกการตัดสินใจง่ายๆ ตั้งแต่เช้า",
    category: "ทำอาหารด้วยกัน",
    image: null,
    ageRange: "4-6 ปี",
    duration: "10-15 นาที",
    difficulty: "ง่าย",
    skills: ["การตัดสินใจ", "ความรับผิดชอบ"],
    materials: ["กล่องข้าว", "วัตถุดิบมื้อเช้า"],
    featured: false
  }
];
