/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
*/

// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

// /*2. Calculate both their BMIs using the formula (you can even implement both
// versions) */

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

const markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);

// cHALLGEN2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's!`);
}
