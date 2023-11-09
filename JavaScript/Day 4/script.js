// JavaScript - Day 4 Tasks:
 
// 1: Write a function that takes a first name and surname as arguments and returns a personalised greeting to the console.

function greeting(firstName, lastName){
    return(console.log(`Hello ${firstName} ${lastName}!`))
}
greeting("Zein","Sharif")
 
// 2: Write a function that takes a string as an argument, sorts the string into alphabetical order and logs it to the console.

function stringSort(string){
    let newString = string.split("").sort().join("")
    return console.log(newString)
}

stringSort("bcdaf")
 
// 3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as an argument and compares the pin and and withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient approve the transaction, if not decline the transaction.
let balance = 100
const pin = 1234

function atm(withdrawal,userPin){
    if(withdrawal <= balance && userPin === pin){
        return console.log(`£${withdrawal} has been successfully withdrawn!`)
    }else if(userPin != pin){
        return console.log(`Incorrect pin!`)
    }else if(withdrawal > balance){
        return console.log(`Insufficient Funds!`)
    }
}

atm(72,1234)
 
// 4: Research Arrow Functions to identify how they differ from function declarations.
 
// https://www.programiz.com/javascript/arrow-function