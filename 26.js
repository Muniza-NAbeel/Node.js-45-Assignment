"use strict";
// 26 .Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// *** runs the if block ***
let alien_color = "green";
if (alien_color === "green") {
    console.log("You Earned 5 Points for Shooting the Alien.");
}
else {
    console.log("You Earned 10 Points");
}
;
// *** runs the else block ***
alien_color = "red";
if (alien_color === "green") {
    console.log("You Earned 5 Points for Shooting the Alien.");
}
else {
    console.log("You Earned 10 Points");
}
;