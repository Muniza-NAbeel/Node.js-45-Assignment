// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let guestArr : string [] = ["Nabeel" , "Ahmed" , "Nafay"];

let canNotAttend : string = "Ahmed";

console.log(` ${canNotAttend}, Can Not Make it, For Dinner.`);

let newGuest : string = "Muniza";

guestArr[guestArr.indexOf(canNotAttend)] = newGuest ;

console.log(guestArr);

guestArr.map((items) => console.log(`Dear ${items}, You Are invited For a Dinner.`));

guestArr.map((items) => console.log(` Dear ${items}, i Found a Bigger Dinner Table.`));

let guestBegin : string = " Malik ";

guestArr.unshift(guestBegin);

console.log(guestArr);

let middleGuest : string = "Khan" ;

let middleIndex = guestArr.length/2

guestArr.splice(middleIndex,0,middleGuest)

console.log(guestArr);

guestArr.push("Parisa");

console.log(guestArr);

guestArr.map((items) => console.log(` Dear, ${items}, You Are invited tO a Dinner`));

