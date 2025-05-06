//Stack(primitive) and Heap(non-primitive)

//stack
let userOne ="pritesh"
let userTwo =userOne
userTwo ="rugved"

console.log(userOne);
console.log(userTwo);


console.log("");


//heap

let user1 = {
    email:"pritesh@gmail.com",
    upi:"py@sbi"
}

let user2 = user1

user2.email="rugved@gmail.com"

console.log(user1)
console.log(user2);
