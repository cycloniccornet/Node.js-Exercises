// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";


const addition = parseFloat(numberOne) + parseFloat(numberTwo)

//console.log(addition)

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const exercise4 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)

//console.log(exercise4.toFixed(2))


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


const exersize5 = ((one+two+three)/3).toFixed(5)

//console.log(exersize5)


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

//console.log(letters[2])


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const onet = fact.slice(0,16);
const twot = fact.charAt(17).toUpperCase()
const treet = fact.slice(18, 28)

console.log(onet,twot + treet)

//console.log(fact.slice(0,16) + " "+ fact.charAt(17).toUpperCase() + fact.slice(18,28))
//console.log(fact.replace("j", "J"))
// --------------------------------------