const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ',(name)=>{
    rl.question('Enter yor weight (in kg): ', (weight) =>{
        rl.question('Enter your height (in cm): ', (height) => {
            let bmi = weight / (height * height);

            console.log(`${name}, your BMT is ${bmi.toFixed(2)}`);

            rl.close();
        });
    });
});