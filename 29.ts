// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits : string [] = ["Mango" , "Kiwi" , "Peach"];

if (favorite_fruits.includes("Mango")){
    console.log("I Really Like Mango !!")
}
if (favorite_fruits.includes("Kiwi")){
    console.log("I Really Like Kiwi !!")
}
if (favorite_fruits.includes("Peach")){
    console.log("I Really Like Peach !!")
}
if(favorite_fruits.includes("Strawberry")){
    console.log("Strawberry is not in your list")
}
if(favorite_fruits.includes("Apple")){
    console.log("Apple is not in your List")
}