const fullname = " Khemikha   Thoothongkhum";
const cleanedName = fullname.trim();
console.log(`Cleaned Name: '${cleanedName}'`);

const nameParts = cleanedName.split('');
console.log("Name Parts:", nameParts);

const finalparts = nameParts.filter(Boolean);
console.log("Final Name:", finalparts);


const firstname = finalparts[0];

console.log(`Hello: '${firstname}'`);

