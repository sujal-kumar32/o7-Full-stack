//1. Make a function to find whether a number is Positive or Negative.

function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));

//2. Make a function to find whether a number is Odd or Even.
function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkOddEven(4));
console.log(checkOddEven(7));

//3. Make a function to find whether a entered text is String or Number.
function checkType(value) {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  } else {
    return "Other Type";
  }
}

console.log(checkType("Hello"));
console.log(checkType(123));
console.log(checkType(true));
