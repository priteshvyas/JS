const score = 200
console.log(score);

console.log(``);
const balance =new Number(200)
console.log(balance);

console.log(``);
const newString =balance.toString();
console.log(newString);
console.log(typeof newString);
console.log(newString.length);
console.log(balance.toFixed(2)); //after point 2 digit

console.log(``);
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(2)); // most use

console.log(``);
const hundreds =100000000
console.log(hundreds.toLocaleString()); //10,00,000

console.log(Number.isInteger(hundreds)); // Multiple number methods
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE); // etc ... use space+enter to see others


//+++++++++++++++++++++++++++ Maths +++++++++++++++++++++++
console.log(``);

console.log(Math);// here it will show object and in console it will other method
console.log(Math.abs(-234));
console.log(Math.round(4.67));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(1445,235,456,8895,478,953));
console.log(Math.max(1445,235,456,8895,478,953));

console.log('');
console.log(Math.random());
console.log(Math.floor(1000 + Math.random() * 9000));

console.log('');
const otp = String(Math.floor(Math.random() * 10000)).padStart(4, "0"); // why it is converted to string
console.log(otp); // e.g., "0923", "0045", "9876"


//uncomment to see output
// const num = 0123
console.log(num);  // Output will be 83, because JavaScript interprets numbers with a leading 0 as octal (base 8) notation.


console.log('');
//solve genrate number min 10 and max 20 

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1 ) + min ));














