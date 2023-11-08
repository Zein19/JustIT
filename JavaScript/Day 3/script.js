// JavaScript - Day 3 Tasks:
 
// 1: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Then using a loop, cycle through the array and log each item to the console.

let favSeries = [
    "One Piece",
    "Vinland Saga",
    "Gintama",
    "Invincible",
    "Breaking Bad",
    "Better Call Saul",
]
console.log(favSeries)

favSeries.push("Dragon Ball")
favSeries.push("The Boys")

for(let i = 0; i < favSeries.length; i++){
    console.log(favSeries[i])
}
 
// 2: Use a loop to generate 10 random numbers between 1-100 and log them to the console.

for(let i = 0; i<10;i++){
    console.log(Math.floor(Math.random()*100))
}
 
// 3: Use a loop to count backwards from 20-0 logging each number to the console.

for(let i = 20; i>=0;i--){
    console.log(i)
}
 
// 4: Use a loop to generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console.

for(let i=0; i<5; i++){
    let rand = Math.floor(Math.random()*50);
    if(rand % 5 === 0){
        console.log(`${rand} is divisible by 5`)
    }else{
        console.log(`${rand} is not divisible by 5`)
    }
}
 
// 5: Research a for each loop and put together a working example.

favSeries.forEach((series) => console.log(series))