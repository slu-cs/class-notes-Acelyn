// Name:

//////////////////////////////////////////////////////////////// Question 1

const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

// A. Generate a new array containing the seat numbers of all the labs (by invoking the built-in map method).
const seatNumber = labs.map(lab=>lab.seats);
console.log(seatNumber);

// B. Generate a new array containing only the labs with more than 10 seats (by invoking the built-in filter method).
const ten = labs.filter(lab=>lab.seats>10);
console.log(ten);
// C. Sort the existing array in order of (increasing) seat numbers (by invoking the built-in sort method).
labs.sort(function(a,b){
  return a.seats - b.seats
  });
console.log(labs);

//////////////////////////////////////////////////////////////// Question 2

const numbers = [5, 4, 3, 2, 1];

// A. Get the first even number (by invoking the built-in find method).
const firstEven = numbers.find(function(a){
  if (a %2===0){
    return a;
  }
});
console.log(firstEven);

// B. Define a standalone find function. The array is its first argument and the callback is its second argument.

const even = function(numbers){
  for (const number of numbers){
    if (number%2===0){
      return number;
    }
  }
};

console.log(even(numbers));
//////////////////////////////////////////////////////////////// Question 3

// This creates the user object described on the quiz.
// It has a question method you can call in part A.
const readline = require('readline');
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A. Make small talk, using traditional callbacks.
const q1 = 'What is your name?';
const q2 = 'How are you doing?';

user.question(q1, function(line){
    console.log('Hello '+ line+'.');
    user.question(q2, function(line){
        console.log('I am also '+ line+'.');
      });
    });


// The user.question method doesn't actually return a promise, so here is a question function that does.
// Call this question function in part B instead of calling the user.question method.
const question = function(prompt) {
  return new Promise(resolve => user.question(prompt, resolve));
};
/*
// B. Make small talk again, using promises.
question(q1).then(function(r1){
  console.log('Hello '+ r1 + '.');
  return question(q2)}).
  then(r2=>console.log('I am also ' + r2 + '.'));
*/
//////////////////////////////////////////////////////////////// Question 4
// Question 4 is commented out because otherwise it would interfere with Question 3.
// When you're ready to work on Question 4, uncomment it and comment out Question 3.
/*
// This function returns a promise, which produces 42 after an asynchronous delay of one second.
const f1 = function() {
  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
};

// This function returns a promise, which produces 24 after an asynchronous delay of one second.
const f2 = function() {
  return new Promise(resolve => setTimeout(() => resolve(24), 1000));
};

// Run f1 and f2 in parallel and log 'f1', 'f2', or 'equal' to indicate which function returned the larger result.
const functionlist=[f1,f2];

Promise.all(functionlist).
then(function(result){
  if (result[0]>result[1]) console.log('f1');
  if (result[0]<result[1]) console.log('f2');
  if (result[0]===result[1]) console.log('euqal');
});
*/
