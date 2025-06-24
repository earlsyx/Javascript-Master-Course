/*
let js = "amazing";
console.log(48 + 41 + 500 - 25);

console.log("Earl");
console.log(6);
let firstName = "Earl";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let earl_hehe = "Idk";
let $function = 26;

let person = "Earl";
let PI = 3.1415;

let myFirstJob = "Data Analyst";
let myCurrentJob = "Programmer";

console.log(myFirstJob);

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);

// console.log(typeof 23);
// console.log(typeof "Jonas");

// javaScriptIsFun = "Yes";
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
let age = 30;
age = 31;
//mutated the age variable
const birthYear = 1991;
// birthYear = 1990;
//immutable vairable, a variable that cant be mmuteted
// can't decalre empty variable in a cont
// const job;

var job = "Programmer";
job = "teacher";
// let is block scoped
// var is function scoped

//wrong create global variable
lastName = "test";
console.log(lastName);

// Math Operators
const now = 2023;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = "Jonas";
const lastName = "Schememe";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // 25
x *= 4; // 100
x++; // 101
x--; //100
x--; //99;
console.log(x);

//Comparison Operators

console.log(ageJonas > ageSarah); // > < >= <=
console.log(ageSarah >= 18);

const isFulleAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// const now = 2023;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2027;

// //type coercion
// const jonas =
//   "I'm" + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
// console.log(jonas);

// //tempalte literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear}  year old ${job}!`;
// console.log(jonasNew);
// console.log(`Just use a regular string....`);

// console.log("String \n multiple \n lines");
// console.log(`String
//   multiple
//    lines`);

const age = 15;
let century;
// control structure
if (age >= 18) {
  console.log("Sarah can start driving license  ");
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;
if (birthYear <= 2000) {
  century = 20; // code block
} else {
  century = 21;
}

console.log(century);

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

// 1.4
// 2. 617
// 3.23
// 4.
// to continue

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Dont spend it all");
// } else {
//   console.log("You shoud get a Job!");
// }

// let height;
// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is undefiend");
// }

// const ages = 19;
// if (age === 18) console.log("You just became an adult :D");

// //strict and loose, type coersion type conversion

// if (age == 18) console.log("You just became an adult :D (loose");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23");

// const hasDriverLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone should drive");
// }

// const isTired = false; // C
// console.log(hasDriverLicense || hasGoodVision || isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone should drive");
// }

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course strucure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log;
//     "Write conde examples";
//     break;
//   case "friday":
//     console.log("Record videos");
//   case "saturday":
//   case "sunday ":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

//difference between satement and expresison

3 + 4; // experession because it produce a value
1991;
true && false && !false;

//statemetns , sequence of action

if (23 > 10) {
  const str = "23 is bigger"; //decalring a variable, str is exprssion
}

//teplate literal, statement only
const me = "Earl";
console.log(`I'm ${2037 - 1991} years old ${me} `);
