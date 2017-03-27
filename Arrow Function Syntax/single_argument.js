// original function declarations
function square(x) {
    return x * x;
}

function cube(x) {
    return square(x) * x;
}


// arrow function expressions
const square = (x) => {
    return x * x;
}

const cube = (x) => {
    return square(x) * x;
}


// concise arrow function syntax
const square = x => x * x;

const cube = x => square(x) * x;
