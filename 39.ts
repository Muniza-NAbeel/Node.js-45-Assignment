// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country( city : string , country : string){
    return `${city} , ${country}`
}

let name1 = city_country("Lahore" ,"Pakistan")
let name2 = city_country("Istanbul" , "Turkey")
let name3 = city_country("Mecca" , "Saudi Arabia")

console.log(name1);
console.log(name2);
console.log(name3);