"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", text = "I Love Typescript") {
    console.log(`You Orderd a ${size} Shirt , that Says : "${text}"`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love pakistan");
