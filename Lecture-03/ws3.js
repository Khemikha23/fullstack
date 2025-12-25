const guests = ['Alice', 'Bob', 'Charlie', 'David'];

let i = 0; // ใน JS ใช้ let เพราะค่า i จะต้องเพิ่มขึ้นเรื่อยๆ (เปลี่ยนค่าได้)

while (i < guests.length) {
    if (guests[i] === "Charlie") { // JS ใช้ === ในการเปรียบเทียบข้อความ
        console.log("Found Charlie!");
        break; // หยุด Loop ทันที
    }
    i++; 
}