const rect = {
    area: (l,b) => b*l,
    perimeter: (l,b) => 2*(l+b)
}

const rectEx = require('./rectangle');

function solveRect(l,b) {
    if(l<=0 || b<=0)  { 
        console.log("Rectangle dimensions should be greater than 0");
    }
    else {
        console.log(`For l = ${l} and b = ${b}, area is ${rect.area(l,b)} and perimeter is ${rect.perimeter(l,b)}`);
        console.log(`For l = ${l} and b = ${b}, area is ${rectEx.area(l,b)} and perimeter is ${rectEx.perimeter(l,b)}`);
    }
}

solveRect(1, 1);
solveRect(2, 1);