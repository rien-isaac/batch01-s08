// console.log("Hi");
// functions
// function in js are lines/ blocks of codes that tell our device/application to perform a certain task when called /invoked

// function decralations
// (function statement) defines a function with a specified parameters
// parameters - are simply placeholders listed in a function declaration or expression. They represent vales that are passed into a function when it is called/invoked
// variables are named containers for stroing data values (used to store and manipulate data)

/*
    Syntax:
        function functionName(){
            code block (statement)
        }
        
        function keyword - used to dfine a javascript functions
        functionName - function name


*/

function printName() {
  console.log("May name is Juan.");
}

// invoked/called - call a function
printName();

// declaredFunction(); it results in an error, much like variables, we cannot invoke a function we have not yest define
// fucntion declareations vs expression

// function declarations can be created through function declaration by using the function keyword and adding a function name
// declared function are not executed immediatley. They are save for later user, and will e exevuted later, when they are invoked (called upon)

declaredFunction(); //declared functions can be hoisted

//Note: in js hoisting is a behaviour for certain variables and function to run or use them before declaration

function declaredFunction() {
  console.log("Hello world from declaredFunction");
}

//function expression
/*
    A function can also be stored in a variable. This is called a function expression

    A function expression is an anonymous function assigned to the variableFunction

    anonymous function - a function without a name, it cannot be hoisted
*/

let variableFunction = function () {
  console.log("Hello Again");
};

variableFunction();

const constFunction = function () {
  //
  console.log("initialized with const");
};

constFunction();

constFunction = function () {
  console.log("re-assigned");
};
