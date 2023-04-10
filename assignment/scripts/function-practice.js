console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `"Hello, ${name}!"`;
}
// Remember to call the function to test

console.log(helloName("Mason"));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}

console.log(addNumbers(3, 6))
console.log(addNumbers(12, 36))

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3
}

console.log(multiplyThree(2,2,4))
console.log(multiplyThree(3,4,5))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


let snesGames = ["Super Mario World", "Donkey Kong Country", "Kirby Super Star", "Super Metroid"]

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length-1];
}

console.log(getLast(snesGames))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(let i=0; i < array.length; i++)
  if (array[i] === value){
    return true;
} 
  return false;
}

console.log(find("Donkey Kong Country", snesGames))
console.log(find("Super Mario Kart", snesGames))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter){
    return true;
  }
  return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++){
  currentSum = array[i];
  sum = sum + currentSum;
  }
  return sum;
}

let numArray = [5, 10, 15, 20]
let difArray = [2, 4, 6, 8]

console.log(sumAll(numArray));
console.log(sumAll(difArray))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveNumbers(array){
  let positiveArray = []
  for (let i=0; i < array.length; i++){
  if(array[i] > 0){
    positiveArray.push(array[i]);
  }
}
return positiveArray;
}

let moreNumbers = [3, -6, 9, -12, 15, -18, 21];

console.log(positiveNumbers(moreNumbers));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// https://www.codewars.com/kata/586c1cf4b98de0399300001d
// Let's get our tabletop RPG on! We're gonna create a function to calculate
// the damage our hero will take during combat. 
// First we'll create a hero with the needed attributes, then we'll 
// write a function that takes the hero's current health and the amount of damage
// recieved, and returns the hero's new health total.

let ourHero = {name: "Trogdor",
health: 25}

function combatDamage(health, damage){
  hpRemaining = health - damage
  if(hpRemaining > 0){
  return hpRemaining
  } return "YOU ARE DEAD"
}

ourHero.health = combatDamage(ourHero.health, 6)

console.log(`${ourHero.name} took some damage! ${ourHero.name} hp status: ${ourHero.health}`)

// You think Trogdor's gonna just stand there and take that? Time to retaliate!
// Let's create an enemy to test our new combatDamage function on. For the sake of testing the
// else outcome, we'll say our hero rolled a critical hit, and he's gonna fell the enemy with one
// mighty swing!

let theEnemy = {name: "Kobold",
health: 10}

theEnemy.health = combatDamage(theEnemy.health, 12)

console.log(`${theEnemy.name} took some damage! ${theEnemy.name} hp status: ${theEnemy.health}`)
