"use strict";
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
let myPet = ["Cat", "Puppy", "Parrot"];
for (let pet of myPet) {
    // console.log(pet)
    console.log(`"A ${pet} would make a great pet".`);
}
console.log("All of These Animals would Make a great Pet .!!!");
