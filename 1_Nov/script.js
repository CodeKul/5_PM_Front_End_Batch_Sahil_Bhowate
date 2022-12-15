console.log("This is script.js file");

//a function is a set of instructions that are executed , when we make the function call.
//Below we have written the function body
//displayMessage() function has no parameters
function displayMessage() {

  console.log("Good Evening Everyone");

}

let displayValue = displayMessage(); //calling the function displayMessage()
console.log("Value stored in displayValue variable is " + displayValue);

//function having two parameters
function displaySum(a, b) {
  let sum = a + b;
  console.log("sum is " + sum);
}

displaySum(4, 5);

//function having a return statement
function returnSum(a, b) {
  let sum = a + b;
  return sum; //return statement
}

let finalResult = returnSum(6, 7);

console.log("final result is " + finalResult);