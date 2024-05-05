// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// *** Equality ***

let myName : string = "Muniza" ;

console.log(myName === "Muniza");  // Equal to
console.log(myName !== "Muniza");  // Non Equal to

// • Tests using the lower case function

console.log(myName.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let myNumber : number = 20 ;

//Numerical tests involving equality and inequality

console.log(myNumber === 5 );   // Non equal to
console.log(myNumber !== 5 );    // Equal to 

//greater than and less than

console.log(myNumber > 4 ) ; // Greater Than
console.log(myNumber < 8 ) ; // Less Than 

// Greater than or Equal to 

console.log(myNumber >= 20 );

// Less Than Or Equal to

console.log(myNumber <= 15 );

// • Tests using "and" and "or" operators

let num1 : number = 5 ;
let num2 : number = 8 ;

console.log(num1 === 7 && num2 === 8 ); // && "And Operators"

console.log(num1 === 7 || num2 === 8 );  // || "Or Operators"

// • Test whether an item is in a array

let name1 : string[] = ["Muniza" , "Nabeel" , "Nafay"];
console.log(name1);

// • Test whether an item is not in a array

let name2 : string = "Muniza";
console.log(name2);


