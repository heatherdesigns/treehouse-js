// var input1 = prompt("Please type a starting number");
// var bottomNumber = parseInt(input1);
// var input = prompt("Please type a number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber +1)) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
// document.write(message);

// Random Number Challenge - take 2 using a function
function getRandomNumber (lower, upper) {
  if (isNaN(lower) || isNaN(upper)) {
    throw new Error('Both arguments must be numbers');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber(1,6));
console.log(getRandomNumber(1, 100));
console.log(getRandomNumber(200, 500));
console.log(getRandomNumber(50, 100));
//console.log(getRandomNumber('nine', 59)); // error thrown and program stops
