const name = "Andrew";

function sayName() {           // original sayName function declaration
    const message = "My name is " + name;
    console.log(message);
}

const sayName = function() {  // function expression
    const message = "My name is " + name;
    console.log(message);
}

function sayBye() {         // original sayBye function declaration
  console.log("Bye " + name);
}

const sayBye = () => {      // arrow function expression
  console.log("Bye " + name);
}


const sayBye = () => console.log("Bye " + name);  // concise arrow function syntax
