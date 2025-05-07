//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

console.log(typeof myDate); //object

//let myCreatedDate = new Date (2023 ,0 ,23) // in js month start with 0
//let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("01-04-2023")
console.log(myCreatedDate);
console.log(myCreatedDate.toString());

console.log('');

//timestamp use quiz and poll

let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()); //milisecond 
console.log(Math.floor(Date.now()/1000)); // second


console.log('');
// other date method

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // in js month start with 0
console.log(newDate.getDay());
console.log(newDate.getHours());
//
newDate.toLocaleString()
//continuec if we create project

//only understanding
let pollCreatedTime = Date.now();
let pollValidityPeriod = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
if (Date.now() - pollCreatedTime <= pollValidityPeriod) {
  console.log("Poll is still open.");
} else {
  console.log("Poll has closed.");
}








