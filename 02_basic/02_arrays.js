const myState=["punjab" , "dehli" , "pune" , "gujarat"]
const myRiver=["ganga" , "yamuna" , "sabarmati", "kaveri"]

//printing both array
console.log(myState);
console.log(myRiver);

console.log(``);

//pushing myRiver into myState 
// myState.push(myRiver)   // comment because showing the working of concat...
// console.log(myState);

console.log('');


//using concat //concat() returns a new array, it does not modify
const newArr=myState.concat(myRiver)
console.log("using concat",newArr);

//using spread operator  (mordern way to add two array)
const myNewArr = [...myState,...myRiver]
console.log(myNewArr);

console.log(``);

//rare array
const myAnotherAraay =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(myAnotherAraay);

//now if we want array in one array if dont like this syntax
const real_myAnotherAraay = myAnotherAraay.flat(Infinity)  // it will merage all the sub array // also we can give depth
console.log(real_myAnotherAraay);

console.log('');

//string to array m1
console.log(Array.isArray("pritesh"));
//now convert in array
console.log(Array.from("pritesh"))

//m2
const str ="split"
const arr = str.split("")
console.log(arr);

//m3
const arr1 = [...str]
console.log(arr1);

console.log(Array.from({name:"pritesh"})); //intresting // in project wil use only key to array or  only value to array

//some time we have to convert variable into array
let lap1=22
let lap2=23
let lap3=24
console.log(Array.from([lap1,lap2,lap3])); //m1
console.log(Array.of(lap1,lap2,lap3));//m2

//another basic way
let lap = [lap1,lap2,lap3] //m3
console.log(lap);

console.log('');

//array to string
const myArray = ["apple", "banana", "cherry"];
const myString = myArray.join();
console.log(myString); 



//just for understanding
//other two method which we will use in array

//map()  used to store arrya element in new array without changing intial array
//filtter()used to filtter somthing from the array


console.log("Running...")

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log("Doubled:", doubled);  // [2, 4, 6, 8, 10]

const numberss = [1, 2, 3, 4, 5, 6];

//filtter
const evens = numberss.filter(function(num) {
  return num % 2 === 0;
});

console.log("Evens:", evens);  // [2, 4, 6]










