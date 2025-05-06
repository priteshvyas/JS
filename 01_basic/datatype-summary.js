// Primitive : call by value
// 7 types : String  , Number , Boolean , null , undefined, symbol , bigint

let personName = "pritesh"
let personId= 234564
let isLoginUser =false
let personState;
let itUser=null
let bigIntNumber = 234567898765431234567865434565n

let userId = Symbol('1234')
let myId= Symbol('1234')

console.log(userId == myId);


// Non primitive :Call by Refrence
// Array , Objects ,Functions

const userName = ["neel","shiv","omkar","meena"]

let userObj={
    name : "pritesh",
    age:23,
    school : "gls"

}
console.log(userObj);

const myFunction = function() {
    console.log("hello gls")
}
myFunction();

console.log("");


console.log(typeof bigIntNumber);
console.log(typeof itUser );
console.log(typeof myFunction); // object function
console.log(typeof userId );
console.log(typeof isLoginUser);
console.log(typeof personName);
console.log(typeof personId);
console.log(typeof personState);








