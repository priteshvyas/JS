//there are two ways to declare the object
// Singleton
//Object.create()  //using constructer

//object literals
const jsUser = {
    name:"pritesh",
    "fullname":"vyas pritesh",
    age:23,
    location:"abd",
    email:"pritesh@gmail.com",
    isLoginUser:false,
    lastLogin:["monday","friday"]
}

console.log(jsUser);

console.log('');


//there are two way to access the object elements
console.log(jsUser.email); //1
console.log(jsUser["email"]);//2 it is used when the key are declare using string in object 

//eg "fullname":"vyas pritesh"
console.log(jsUser["fullname"]);

//how to use symbol in object or method to declare in object
const mySym = Symbol("key1")
const mySym2 = Symbol("key2")
const symbol ={
    [mySym]:"mykey1", // ask in interview
    mySym2:"mykey2"
}
console.log(symbol);

jsUser.email="priteshvyas@gmail.com"
console.log(jsUser);

//now we will freeze the object so changes in object not possible
// Object.freeze(jsUser)
jsUser.email="vyas@gmail.com"
console.log(jsUser);

console.log('');

//learning purpose
jsUser.greeting=function(){
    console.log("hello js users");
}
//console.log(jsUser.greeting);
console.log(jsUser.greeting());  //for using this comment the freeze object

console.log(``);

//important
//how to access the value in function using this
jsUser.greetingtwo=function(){
    console.log(`hello js user ${this.fullname}`);
    
}
console.log(jsUser.greetingtwo());










