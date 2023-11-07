// // Conditional Statements in JavaScript

// // Learning Objectives:

// // •	Intent – To identify what Conditional Statements are and why they are required in programming.
// // •	Implementation – To embed Conditional Statements such as if/else into our workflow. 
// // •	Impact – To contextualise how Conditional Statements are used in the industry.

// // Equal To - Comparison Operator - "=="

// // Weather Example

// let weather = "Foggy"

// // IF Statement
// // if (weather == "Sunny") {
// //     console.log("Bring your sunglasses!");
// // }

// // console.log("After If Statement")

// // IF/ELSE Statement
// // if (weather == "Sunny") {
// //     console.log("Bring your sunglasses!");
// // } else {
// //     console.log("I'm not too sure about the weather.");
// // }

// // console.log("After IF/Else Statement")

// // IF/ELSE IF/ELSE
// if (weather === "Sunny") {
//     console.log("Bring your sunglasses!");
// } else if (weather === "Rain") {
//     console.log("Grab an umbrella!");
// } else if (weather === "Foggy") {
//     console.log("Be careful on the roads!");
// } else {
//     console.log("I'm not too sure about the weather.");
// }

// // Comparison Operators:

// // == - Equal to
// console.log(100 == "100");
// //  === - Equal Value and Equal Data Type
// console.log(100 === "100");
// //  != - Not Equal to
// console.log(10 != 10);
// //  !== - Not Equal Value or Equal Data Type
// console.log(10 !== "10");
// //   > - Greater Than

// //   < - Less Than

// //  >= - Greater than or equal to

// // <= - Less than or equal to

// // Traffic Lights Example

// let trafficLight = "Green";

// // if (trafficLight !== "Green") {
// //     console.log("Stop!");
// // } else {
// //     console.log("Go!");
// // }


// // Logical Operators:

// // || - or - The Pipe
// if (trafficLight === "Red" || trafficLight === "Amber") {
//     console.log("Stop!");
// } else {
//     console.log("Go!");
// }

// // && - and
// let num = 4;

// if (num > 5 && num <= 10) {
//     console.log(`${num} is between 5 and 10.`);
// } else {
//     console.log(`${num} is NOT between 5 and 10.`);
// }

// // Switch Statements
// let day = "Saturday";

// switch (day) {
//     case "Monday":
//         console.log("Weekend is over! Happy Monday!")
//         break;
//     case "Tuesday":
//         console.log("Second day of the week!")
//         break;
//     case "Wednesday":
//         console.log("Halfway through the week!")
//         break;
//     case "Thursday":
//         console.log("It's almost Friday!")
//         break;
//     case "Friday":
//         console.log("Happy Friday!")
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the Weekend!")
//         break;
//     default:
//         console.log("Day not recognised. Try again.");
// };

// // Switch Statement 2 - Grade Example
// let testScore = 55;

// switch (true) {
//     case testScore >= 70:
//         console.log("Distinction")
//         break;
//     case testScore >= 60:
//         console.log("Merit")
//         break;
//     case testScore >= 50:
//         console.log("Pass")
//         break;
//     default:
//         console.log("Fail");
// }

// JavaScript - Day 2 Tasks:
 
// 1: Write a conditional statement to check whether a customer is old enough to be served alcohol at a bar. Check the value of a variable named "age" and if the value of "age" is 18 or above, log a message to the console asking what the customer would like. If the value of "age" is below 18, log a message to the console advising that they are too young.

let age = 15
if (age > 18){
    console.log("What would you like to drink?")
} else{
    console.log("You are too young")
}
 
// 2: Write a conditional statement to check whether a number is odd or even and log a message to the console stating whether the number is odd or even.

let num = 15
if ( num % 2 === 0){
    console.log(`${num} is even`)
} else{
    console.log(`${num} is odd`)
}
 
// 3: Write a conditional statement to check whether a number is divisible by 3 or 5 and log the result to the console.

if (num % 3 === 0 || num % 5 === 0){
    console.log(`${num} is divisible by 3 or 5`)
}else{
    console.log(`${num} is not divisible by 3 or 5`)
}
 
// 4: Write a conditional statement to check whether a number is divisible by 3 and / or 5. If the number is divisible by 3 log "Fizz" to the console, if the number is divisible by 5 log "Buzz" to the console, if the number is divisible by 3 and 5 log "Fizz Buzz" to the console and if the number is divisible by neither 3 or 5 log the number to the console.
if(num % 3 === 0 && num % 5 === 0){
    console.log("Fizz Buzz")
 }else if(num % 5 === 0){
    console.log("Buzz")
 }else if(num % 3 === 0){
    console.log("Fizz")
 }else{
    console.log(num)
 }
 
// To complete the above tasks you will need to make use of the remainder operator:
 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 
 
// Stretch Task:
 
// Create a variable that stores a number and write the required code to check whether or not the number is a palindrome(reads the same backwards as it does forwards e.g 1001 is a palindrome and 1000 is not).
 
// Hint:
 
// You will need to utilise methods to complete this task.

let stretchNum = 1001;
let reverseNum = stretchNum.toString().split("").reverse().join("");
if( stretchNum == reverseNum){
    console.log(`${stretchNum} is a palindrome`)
}else {
    console.log(`${stretchNum} is not a palindrome`)
}