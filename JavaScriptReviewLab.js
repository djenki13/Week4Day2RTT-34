// Part A
// 1. We use the = to assign value to a variable.
// 2. You change the value of a variable by writing a new line of code without the variable, and specifying the new value to assign to it.
// 3. You can assign the value of a pre-existing variable to a new variable by setting the value of the new variable to be equal to the pre-existing variable's value.
// 4. declare = creating a variable; assign = attributing a value to a declared variable; define = create a new variable and assign value to it at the same time
// 5. Pseudocoding is writing out informally how you plan to structure a site or application; you should do it because it helps to arrange things before introducing hard code into it.
// 6. 90% thinking; 10% executing

// Part B
// let firstVariable = "Hello world";
// firstVariable = 5;
// let secondVariable = firstVariable;
// secondVariable = "This is cool";

// console.log(firstVariable)

// // firstVariable value = 5;

// let yourName = "Dan";
// console.log(`Hello, my name is ${ yourName }`)

// // Part C

// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' == 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false == false)
//   console.log(e == 'Kevin');
//   console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');

  // Part D

//   let animal = "duck";
//   if (animal == "cow") { console.log("moo") } 
//     else { console.log("Hey you're not a cow!") } ;

// // Part E

// let age = 14;
// if (age >= 16) {console.log("Here are the keys!") }
//    else { console.log("Sorry, you're too young") } ;

// Section II Part A

// 1.
// let i

// for (let i=0; i<=10;i++)
// { console.log(i) }

// 2.

// let i

// for (let i=10; i<=400;i++) {
//   console.log(i)
// }

// 3.

// let i

// for (let i=12; i<=4000; i+=3) {
//   console.log(i)
// }

// Section II Part B

// let i

// for (let i=1; i<=100; i++) { 
//   if (i % 2 === 0) (console.log(i + '<--is an even number')); 
//   else (console.log(i));
//    }

// console.log(i)

// Section II Part C

// let i

// for (let i=0; i<=100; i++) {
//   if (i % 5 === 0)(console.log(` I found a ` +i + `, high five!`)); 
//   else if (i % 3 === 0) console.log(`I found a ` +i + `. Three is a crowd.`);
//   else if (i % 3 === 0 && i % 5 === 0) { console.log(`I found a ` +i + `. Three is a crowd.`); console.log(`I found a ` +i + (`, high five!`)); }
// }
// console.log(i)

// Section II Part D

// 1.

// let bankAccount = 0
// for (let i = 1; i <=10; i++) bankAccount+=i;

// 2.
// console.log(bankAccount)

// 3.

// let bankAccount = 0
// for (let i = 1; i <= 100; i++) bankAccount+=i*2;

// 4.
// console.log(bankAccount)

// Section III

// Part A

// 1. The objects in an array are called values and indexes.
// 2. The indexes in an array are in order, but the values may not be.
// 3. Arrays allow you to model sequences, vectors, lists, the alphabet, and generally any group of related items.

// Part B

// 1.

// const quotes = ["we like cats", "we like dogs", "we like all animals"];
// console.log(quotes[0])

// Part C

// 1. You access the first object in an array by referring to it with the index number 0.

// 2.

// const randomThings = [1,10,"world",true]

// 3.

// console.log(randomThings[2])

// Part D

// 1.

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass[2]

// 2.

// const ourClass = ["Salty","Zoom","Sardine","Slack","Github"];
// ourClass[4] = "Octocat";
// console.log(ourClass[4])

// 3.

// const ourClass = ["Salty","Zoom","Sardine","Slack","Github"];
// ourClass[5] = "Cloud City";
// console.log(ourClass[5])

// Part E

// 1.
// const myArray = [5,10,500,20]
// myArray[4] = "aegon";
// myArray[5] = "banjo";
// console.log(myArray[4])
// console.log(myArray[5])

// 2.
// const myArray = [5,10,500,20]
// myArray.splice(0,1,undefined)
// console.log(myArray)

// 3.
// const myArray = [5,10,500,20]
// myArray.splice(0,1,"Bob Marley")
// console.log(myArray)

// 4.
// const myArray = [5,10,500,20]
// myArray.splice(3,1,undefined)
// console.log(myArray)

// 5.

// const myArray = [5,10,500,20];
// myArray.reverse

// Nothing was returned; mutating an array means to change it, no change occurred.

// Part F

// 1.

let i= 50;

if i <= 100 {
  console.log(i("little number"));
} else i >= 100 {
  console.log(i("big number"));
}
console.log(50)