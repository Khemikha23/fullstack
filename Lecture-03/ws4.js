const message = "Hello World";
const vowels = "aeiou"; // สร้างรายการสระเก็บไว้เปรียบเทียบ

for (const char of message) {
    // แปลงตัวอักษรเป็นตัวพิมพ์เล็ก แล้วเช็คว่าอยู่ในกลุ่ม vowels หรือไม่
    if (vowels.includes(char.toLowerCase())) {
        console.log(char);
    }
}