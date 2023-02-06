const rect = require('./rectangle');

function solveRect(l,b) {
    console.log(`Solving rectangle for l = ${l} and b = ${b}`)
    rect(l, b, (error, rect) => {
        if(error) {
            console.log("Error: ", error.message);
        } else {
            console.log(`For l = ${l} and b = ${b}, area is ${rect.area()} and perimeter is ${rect.perimeter()}`);
        }
    })
    console.log(`This message is after the function who is solving rectangle for l = ${l} and b = ${b}`)
}

solveRect(1, 1);
solveRect(2, 1);
solveRect(0, 1);
solveRect(2, -4);