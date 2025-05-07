const name = "pritesh"
const repoCount = 50

console.log(name + repoCount + " Value"); // not correct way to write the string in moder time

console.log("");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount} `); //string interpolation


console.log("");
//another way to declare string (2)

const gameName = new String('pritesh') // it will represent as object
console.log(gameName);

//also check in console of browser

console.log("");
console.log(typeof gameName); //object

console.log("");
console.log(gameName.__proto__);//{} 
// prototype means your object hold something as 
//another object which inherits properties and method from.



//using example only for better understanding
console.log("");
let car = {
    color: 'red',
    drive: function() {
        console.log('The car is driving');
    }
};
//Object.create() is an inbuilt JavaScript method that allows you to create a new object.
let myCar = Object.create(car); // Inherits from the 'car' prototype
console.log(myCar.color); // 'red' (inherited from 'car')
myCar.drive(); // 'The car is driving' (inherited method)


//accessing the key and getting  there values
console.log("");
console.log(gameName[1],gameName[3]); // key start from index 0


console.log("");
console.log(gameName.indexOf("h")); //6
console.log(gameName.length);//7
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));


//other string methods
console.log("");

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-3,7) //only we can use negative sign in slice only not in substring
console.log(anotherString);

const trimString =gameName.trim() // it will trim blank space
console.log(trimString); //trimstart and trimend method

const url = "https://pritesh.com/pritesh%20vyas" //browser auto add %20 when its find blank space
console.log(url.replace('%20','-'));

console.log(url.includes('vyas')); // true
console.log(url.includes('.in'));//false

const userName = "pritesh-vyas-hiteshbhai"
console.log(userName.split("-"));

// there many more string method in js you can refer mdn site
// string are very important in js make practice on it 

//only for understanding
console.log("");

const str = "Hello Pritesh";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("Pritesh")); // true

console.log("Ha!".repeat(3)); // Ha!Ha!Ha!

const id = "7";
console.log(id.padStart(3, "0")); // "007"
console.log(id.padEnd(3, "X"));   // "7XX" 

const msg = "apple, apple, apple";
console.log(msg.replaceAll("apple", "banana")); // banana, banana, banana

const text = "My phone number is 12345 and zip is 67890";
const result = text.match(/\d+/g); // \d+ = one or more digits
console.log(result); // ["12345", "67890"]










