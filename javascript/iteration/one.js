// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is my favourite number");
//   }
//   console.log(element);
// }

// Nested Loop

// for (let i = 0; i < 10; i++) {
//   console.log(`Outer loop value is: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Inner loop value is: ${j} and outer loop value is: ${i}`);
//     console.log(` ${i} * ${j} = ${i * j}`);
//   }
// }

let myArry = ["English", "Urdu", "Sindhi"];
for (let i = 0; i < myArry.length; i++) {
  const element = myArry[i];
  console.log(element);
}

// Break and Continue in the foor loop

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("5 is my favourite number");
    break;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("5 is my favourite number");
    continue;
  }
  console.log(i);
}

// Now the difference between the break and continue is
// when the condition is become the true the break statement will stop the loop.

//Continue is
// When the condition is become the true the continue statement will skip the current iteration and continue the loop
