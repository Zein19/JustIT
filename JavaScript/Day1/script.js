// [15:27] Christian Perry
// JavaScript - Day 1 Tasks:
 
// 1: Create a variable that stores your name and log a string to the console that provides a personalised greeting.
 
// Example Output in Console: "Good Afternoon John"
const myName = "Zein"
console.log("Hello" + " " + myName)
 
// 2: Create additional variables to store your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including your name and these values to the console.
 
// Example Output in Console: "My name is John, my favourite colour is Green and my favourite film is The Wolf of Wall Street"

let favFilm = "The Dark Knight"
let favColour = "Blue"
console.log(`My name is ${myName}, my favourite colour is ${favColour} and my favourite film is ${favFilm}.`)


 
// 3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. I then want you to update the values for the breakfast, lunch and dinner variables to what you are eating today and log the new values to the console.

let breakfast = "cereal"
let lunch = "chicken and rice"
let dinner = "noodles"

console.log(`Yesterday I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)

breakfast = "eggs"
lunch = "pasta"
dinner = "pizza"

console.log(`Today I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)
 
// Stretch Task:
 
// Research the JavaScript Math object and see if you are able to use the in-built methods to generate a random number between 1 and 10.

let randomNumber = Math.floor((Math.random()*10)+1)
console.log(randomNumber)
 
// https://www.w3schools.com/js/js_math.asp
// JavaScript Math Object
// W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.