// Values and Variables
const country = "Philippines";
const continent = "Asia";
let population = 174000000;

console.log(country, continent, population);

// Data Types;
const isIsland = true;
let language;

console.log(isIsland, population, country, language);

// let , const, var
language = "Filipino";

// Basic Operators
population / 2 / 2;
population++;
console.log(population);
let finlandPopulation = 6000000;
population > finlandPopulation;
let averagePopulation = 330000000;
population < averagePopulation;
let description =
  "Portugal is in Europe, and its 11 million people speaks portuguese";

//Strings and Template Literals

country = "Portugal";
continent = "Europe";
population = "11000000";
language = "portuguese";

description = `${country} is in ${continent}, and its ${population} people speaks ${language}`;

//LECTURE Taking Decisions if / else statements

// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

if (country > 3300000) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${averagePopulation - population} below average`
  );
}
