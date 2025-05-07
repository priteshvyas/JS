//aaray

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[2]);
console.log(typeof myArr);

const myName =["pritesh","ritesh"]
console.log(myName);


console.log(``);


const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr2);
console.log(typeof myArr2);

console.log('');


//Araay methods

myArr2.push(6)
console.log("push 6",myArr2);

myArr2.push(7)
console.log("push 7",myArr2);

myArr2.pop()
console.log("pop 7",myArr2);

console.log('');


myArr2.unshift(9)
console.log(myArr2); //9 will added before index 0

myArr2.shift()//remove 9
console.log(myArr2);
myArr2.shift() //one more time shift 
console.log(myArr2);//it will remove 1

console.log("");

console.log(myArr2.includes(9)); // check 9 is there in array or not
console.log(myArr2.indexOf(6));
console.log(myArr2);

console.log('');

const newArr =myArr2.join()
console.log(newArr);
console.log(typeof newArr);

console.log('');

//slice , splice
console.log("A",myArr);

const myArr1=myArr.slice(1,3)

console.log(myArr1);
console.log("B",myArr);

const myArr3 = myArr.splice(1,3) //for better understanding change the value
console.log("C",myArr);
console.log(myArr3);



















