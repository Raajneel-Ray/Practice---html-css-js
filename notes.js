/******************************************************
 * JavaScript Browser Console – Reference Notes
 * Source: CognitiveClass.ai Hands-on Lab
 * Purpose: Learn JS basics via Browser Console
 ******************************************************/

/* ===============================
   CONSOLE BASICS
================================ */

// Clear the console
// clear();
// console.clear();

// Print output
console.log("Hello World!");

/* ===============================
   VARIABLES & CONSTANTS
================================ */

let num = 5;                 // Block-scoped variable
var mystr = "John";          // Function/global-scoped variable
const pi_val = 3.147;        // Constant value

console.log(num);
console.log(mystr);
console.log(pi_val);

/* ===============================
   FUNCTIONS
================================ */

// Normal function
function printMyInput(user_input) {
    console.log("The parameter passed is " + user_input);
}

printMyInput(9);
printMyInput("John");

// Arrow function (ES6)
let printMyInputES6 = (user_input) => {
    console.log(user_input);
};

printMyInputES6(9);
printMyInputES6("John");

// Short arrow function
let printMyInputES6Short = user_input => console.log(user_input);

printMyInputES6Short(9);
printMyInputES6Short("John");

/* ===============================
   ARITHMETIC OPERATORS
================================ */

console.log("5 + 3 =", 5 + 3);
console.log("7 - 3 =", 7 - 3);
console.log("8 * 2 =", 8 * 2);
console.log("27 / 3 =", 27 / 3);
console.log("4 ** 3 =", 4 ** 3);
console.log("19 % 4 =", 19 % 4);

/* ===============================
   STRING CONCATENATION
================================ */

console.log("5 + '3' =", 5 + "3");
console.log("5 + 5 + '3' =", 5 + 5 + "3");
console.log("'3' + 5 + 5 =", "3" + 5 + 5);
console.log("5 + 5 + '3' + 5 =", 5 + 5 + "3" + 5);

/* ===============================
   ASSIGNMENT OPERATORS
================================ */

let x = 5;
x += 3;
console.log("x =", x);

let y = 5;
y -= 3;
console.log("y =", y);

let a = 6;
a *= 3;
console.log("a =", a);

let b = 6;
b /= 3;
console.log("b =", b);

let c = 6;
c %= 3;
console.log("c =", c);

let d = 6;
d **= 3;
console.log("d =", d);

/* ===============================
   COMPARISON OPERATORS
================================ */

console.log("5 == '5' :", 5 == "5");
console.log("5 === '5' :", 5 === "5");
console.log("5 !== 6 :", 5 !== 6);
console.log("5 > 2 :", 5 > 2);
console.log("5 >= 5 :", 5 >= 5);
console.log("5 <= 5 :", 5 <= 5);

/* ===============================
   LOGICAL OPERATORS
================================ */

let raining = false;
let cloudy = true;

console.log("raining && cloudy :", raining && cloudy);
console.log("raining || cloudy :", raining || cloudy);
console.log("!raining :", !raining);

/* ===============================
   SHORT-CIRCUIT EVALUATION
================================ */

let chocolate = true;
let candy = false;

console.log("chocolate && candy :", chocolate && candy);
console.log("chocolate || candy :", chocolate || candy);

/* ===============================
   IF - ELSE CONDITIONS
================================ */

// Uncomment to test in browser console
/*
let user_input = prompt("Enter a value");

if (!user_input) {
    console.log("You did not input anything");
} else if (isNaN(user_input)) {
    console.log("Input:", user_input);
    console.log("Length:", user_input.length);
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${user_input} x ${i} = ${user_input * i}`);
    }
}
*/

/* ===============================
   SWITCH CASE
================================ */

// Uncomment to test
/*
let dayInput = prompt("Enter a number between 1 to 7");

if (isNaN(dayInput) || dayInput < 1 || dayInput > 7) {
    console.log("Invalid input");
} else {
    switch (parseInt(dayInput)) {
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Invalid entry");
    }
}
*/

/* ===============================
   FOR LOOP
================================ */

for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

/* ===============================
   WHILE LOOP
================================ */

// Uncomment to test
/*
let do_more = true;

while (do_more) {
    let word = prompt("Enter a word");

    if (isNaN(word)) {
        console.log("Word length:", word.length);
    } else {
        console.log("Only words allowed");
    }

    let cont = prompt("Press n to stop");
    if (cont === "n") {
        do_more = false;
    }
}
*/

/* ===============================
   ARRAYS
================================ */

let myArray = ["Jack", "Jill", 4, 5, true, "John"];

console.log(myArray[0]);
console.log(myArray[5]);

// forEach loop
myArray.forEach(element => {
    console.log("Array element:", element);
});

// Index + value
for (const [index, value] of Object.entries(myArray)) {
    console.log(index, "-", value);
}

/* ===============================
   MAP COLLECTION
================================ */

let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 22);

myMap.forEach((value, key) => {
    console.log(key, "-", value);
});

/******************************************************
 * END OF JAVASCRIPT BROWSER CONSOLE NOTES
 ******************************************************/
