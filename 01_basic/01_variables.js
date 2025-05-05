const accountId=3636467
let accountName="Pritesh"
var accountAge=23
accountCity="Rajkot"
let accountState;

// now changing the value of each variables

// accountId=22353 this will not work due constant value cant be change
console.log(accountId);

//let accountName="Om" we cant redeclare variable using let
accountName="Om"
console.log(accountName);

//Problem using var is when  when we use same name variable in another file or block or functional scope it will change the value of first one
accountAge=24
console.log(accountAge);

accountCity="Vadodra"
console.log(accountCity);


// using console.table multiple variable are printed at same time and give table form
console.table([accountId,accountName,accountAge,accountCity,accountState])




