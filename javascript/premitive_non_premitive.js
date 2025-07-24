// Primitive data types
// There are 7 primitive data types in JavaScript:
// string, number, boolean, null, undefined, symbol, and bigint

let number = 14;                     // number – used to store numeric values
let myName = "Amir Khan";           // string – used to store text
let isLoggedIn = true;              // boolean – true or false value
let myAge = null;                   // null – represents an intentional absence of any value
let mySalary;                       // undefined – declared but no value assigned
let uniqueId = Symbol('123');       // symbol – used to create unique identifiers
let bigIntValue = 123456789876543234567876545678n; // bigint – used to store large integers


// Non-primitive data types
// These include: Arrays, Objects, and Functions

let myArray = ["Amir", "Adil", "Awais"]; 
// Array – used to store a list of values (indexed collection)

let myObject = {
    id: 2,
    name: "Amir Khan",
    age: 23,
    salary: 25000
}; 
// Object – used to store key-value pairs (structured data)

// Function – used to perform actions or return values
function myFunction() {
    console.log("Hello world");
}



// Now we are checking the type of the variable 
// These console to check the datatype of the premitive datatypes

console.log(typeof(number))
console.log(typeof(myName))
console.log(typeof(isLoggedIn))
console.log(typeof(mySalary))
console.log(typeof(myAge))
console.log(typeof(mySalary))
console.log(typeof(uniqueId))
console.log(typeof(bigIntValue))


// These are for the non-premitive datatypes

console.log(typeof(myArray))
console.log(typeof(myObject))
console.log(typeof(myFunction))