// Sybmol is the permitive datatype which is used to create the unique identifier
// this is main points according to interview question
// How we can define sybmol and also print it in the object
let mySybol = Symbol("user_id");
let myObject = {
  name: "Amir Khan",
  age: 23,
  salary: 25000,
  [mySybol]: 1234,
};
console.log(myObject);

myObject.name = "Adil Khan";
myObject.age = 24;

// Some of the function of the object
myObject.greeting = function () {
  console.log("Hello world");
};

//  another function
myObject.greetingTwo = function () {
  console.log(`Wellcome to the team of SimeXmade ${this.name}`);
};
console.log(myObject.greetingTwo());
console.log(typeof myObject.greeting());
