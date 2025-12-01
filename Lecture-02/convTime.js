const registrationDate = new Date('2025-1-12T08:30:00');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};
const formattedDate = registrationDate.toLocaleDateString('th-TH',options);
console.log(`วันที่สมัครสมาชิก: ${formattedDate}`);