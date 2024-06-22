//Q1: 
const name = "Muniba Abbas";
const message = `hello ${name}, you want to learn more JS?`
console.log(message);

//Q-2:
let fullName ="Muniba";

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(0)toUppercase() + 
fullName.slice(1).toLowerCase());



//Q-3:
let age = prompt("Enter your age:");
let isStudent = prompt("Are you a student? (yes/no)");

let ticketPrice;
if (age < 12) {
  ticketPrice = 5;
} else if (age >= 12 && age <= 18) {
  if (isStudent === "yes") {
    ticketPrice = 8;
  } else {
    ticketPrice = 10;
  }
} else {
  ticketPrice = 12;
}

alert("The ticket price is $" + ticketPrice);

//Q4 
let name = "“Albert Einstein once said, “A person who never made a mistake never tried anything new.”’";
console.log(name);

//Q5:
let famous_person = "Imran Khan";
let message = "“The more you study, the more you know; how less you know.”";
console.log (famous_person, message);

//Q6:
let whitespaces = " \t \n Muniba Abbas";
console.log(whitespaces);

let strippingName = whitespaces.trim();
console.log(strippingName);
