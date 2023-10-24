// Part A
// 1. We use the = to assign value to a variable.
// 2. You change the value of a variable by writing a new line of code without the variable, and specifying the new value to assign to it.
// 3. You can assign the value of a pre-existing variable to a new variable by setting the value of the new variable to be equal to the pre-existing variable's value.
// 4. declare = creating a variable; assign = attributing a value to a declared variable; define = create a new variable and assign value to it at the same time
// 5. Pseudocoding is writing out informally how you plan to structure a site or application; you should do it because it helps to arrange things before introducing hard code into it.
// 6. 90% thinking; 10% executing

// Part B
let firstVariable = "Hello world";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = "This is cool";

console.log(firstVariable)

// firstVariable value = 5;

let yourName = "Dan";
console.log(`Hello, my name is ${ yourName }`)

// Part C

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  // Part D

  let animal = "duck";
  if (animal == "cow") { console.log("moo") } 
    else { console.log("Hey you're not a cow!") } ;

// Part E

let age = 14;
if (age >= 16) {console.log("Here are the keys!") }
   else { console.log("Sorry, you're too young") } ;