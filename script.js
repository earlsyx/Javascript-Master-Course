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

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2027;

//type coercion
const jonas =
  "I'm" + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
console.log(jonas);

//tempalte literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear}  year old ${job}!`;
console.log(jonasNew);
console.log(`Just use a regular string....`);

console.log("String \n multiple \n lines");
console.log(`String 
  multiple
   lines`);
