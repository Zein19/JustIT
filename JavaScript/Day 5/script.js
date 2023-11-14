// JavaScript - Day 5 Tasks:
 
// 1: Create an object called person with keys of name age and city. Once created log your object to the console in a table format.

const person = {
    name: "Zein",
    age: "24",
    city: "London",
}

console.table(person)
 
// 2: Without editing the original person object add a list of your favourite songs to the person object and log the list to the console.

person.favSongs = [
    "I wanna be",
    "We fight together",
    "We are",
]

console.log(person.favSongs)


 
// 3: Create an Alarm object with a method called "checkAlarm", that takes in the day of the week as an argument and returns "Get up at 7:00am" if it is passed a weekday and "Sleep in it's the weekend" if it is passed a weekend day.

const alarm = {}

alarm.checkAlarm = function(day){
    if (day.toLowerCase() === "monday" || day.toLowerCase() === "tuesday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "thursday" || day.toLowerCase() === "friday"){
        return `Get up at 7:00am!`
    }else {
       return `Sleep in it's the weekend`
    }
}

console.log(alarm.checkAlarm("Monday"))
 
// Nested Objects Tasks:
 
// Use the nested objects at the bottom of todays reference file to complete the tasks below. Reference the requested data via the objects.

// Nested Objects
const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: {
        name: 'Engineering',
        location: 'Building A',
        supervisor: {
            name: 'Jane Smith',
            position: 'Engineering Manager'
        }
    }
};


const library = {
    name: 'Public Library',
    location: 'City Center',
    books: [
        {
            id: 'B001',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            details: {
                genre: 'Fiction',
                year: 1925
            }
        },
        {
            id: 'B002',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            details: {
                genre: 'Fiction',
                year: 1960
            }
        }
    ]
};
 
// 1: Log the name of John's supervisor to the console.

console.log(employee.department.supervisor.name)
 
// 2: Log the title of 'The Great Gatsby' to the console.

console.log(library.books[0].title)