const tinderUser = {};

tinderUser.id = 123;
tinderUser.name = "Amir Khan";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

const regularUser = {
  email: "amir@gmail.com",
  fullname: {
    userfullname: {
      first_name: "Amir",
      last_name: "Khan",
    },
  },
};

console.log(regularUser.fullname.userfullname.first_name);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// Spread
// This method is using most of the time in production
let obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
console.log(users[1].email);

// to find the keys of the tinderUser Object

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

// this method is checking is this existing in the object or not
console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// Through this way in the object we are shortcuting the name of the key such as this
const { coursename: c_n, courseInstructor: c_i } = course;
console.log(c_n, c_i);
