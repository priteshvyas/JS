// const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123acf"
tinderUser.name="pritesh"
tinderUser.isLogedIn=false
console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



console.log(``);

//object inside the object :object nesting 

const realObject ={
    email:"pritesh@gmail.com",
    fullname:{
        username:{
            firstname:"vyas",
            lastname:"pritesh"
        }
    }
}
console.log(realObject);
console.log(realObject.fullname);
console.log(realObject.fullname.username);
console.log(realObject.fullname.username.firstname);

console.log("");


//how to combine two object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//1 but probleam
// const obj3={obj1 ,obj2}

//2
const obj3 =Object.assign(obj1,obj2)
console.log(obj3);

//3 
const obj4 =Object.assign({},obj1,obj2)
console.log(obj4);

//4 mordern and correct way
const obj5 ={...obj1,...obj2}
console.log(obj5);


//only for understanding
//it is used when data value is coming from database
//it is called array of objects
//? hwow to access this object 
const data =[
    {
        1:"a",
        email:"a@gmail.com"
    },
    {
        2:"b",
        email:"b@gmail.com"
    },
    {
        1:"c",
        email:"c@gmail.com"
    }
    
    
]
console.log(data[1]);
console.log(data[2].email);











