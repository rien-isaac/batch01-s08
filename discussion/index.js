// // console.log("Hi");
// // functions
// // function in js are lines/ blocks of codes that tell our device/application to perform a certain task when called /invoked

// // function decralations
// // (function statement) defines a function with a specified parameters
// // parameters - are simply placeholders listed in a function declaration or expression. They represent vales that are passed into a function when it is called/invoked
// // variables are named containers for stroing data values (used to store and manipulate data)

// /*
//     Syntax:
//         function functionName(){
//             code block (statement)
//         }

//         function keyword - used to dfine a javascript functions
//         functionName - function name

// */

// function printName() {
//   console.log("May name is Juan.");
// }

// // invoked/called - call a function
// printName();

// // declaredFunction(); it results in an error, much like variables, we cannot invoke a function we have not yest define
// // fucntion declareations vs expression

// // function declarations can be created through function declaration by using the function keyword and adding a function name
// // declared function are not executed immediatley. They are save for later user, and will e exevuted later, when they are invoked (called upon)

// declaredFunction(); //declared functions can be hoisted

// //Note: in js hoisting is a behaviour for certain variables and function to run or use them before declaration

// function declaredFunction() {
//   console.log("Hello world from declaredFunction");
// }

// //function expression
// /*
//     A function can also be stored in a variable. This is called a function expression

//     A function expression is an anonymous function assigned to the variableFunction

//     anonymous function - a function without a name, it cannot be hoisted
// */

// let variableFunction = function () {
//   console.log("Hello Again");
// };

// variableFunction();

// const constFunction = function () {
//   //
//   console.log("initialized with const");
// };

// constFunction();

// // constFunction = function () {
// //   console.log("re-assigned");
// // };

// /*
//     Parameters and arguments

// */

// function printName(name) {
//   console.log("my name is " + name);
// }

// printName("Juan"); //argument

// /*
//     name is called a parameter
//     a parameter acts as a named variable/containers that exists only inside of a function
//     it is used to store information that is provided to a function when it is called
//     an argument is a value passed when invoking a function, this argument is then stored as the parameter within the function

// */

// printName("happy");
// printName("Yui", 12);

// function argumentFunction() {
//   console.log(
//     "This function was passed as an argument before the message was printed."
//   );
// }

// function invokeFunction(argumentFunction) {
//   console.log(argumentFunction);
// }

// invokeFunction(argumentFunction);
// // invokeFunction(argumentFunction);

// console.log(argumentFunction);

// /**
//  *
//  * OBject Oriented Programming (OOP)
//  * programming style based on classes and objects, group data (properties) and methods (actions)
//  *
//  * class - blueprint, template for an object
//  *
//  * objects - instance of a class.
//  * instance refers to an object created from a class or a constructor fnction
//  *
//  * constructor is a special method used in a class to initialize objects
//  */

// //basic instance
// //this creates an object called person
// const person = {
//   name: "Juan Dela Cruz",
//   age: 25,

//   greet: function () {
//     //this refers to the current object(person)
//     console.log(
//       `Hello, my name is ${this.name} and i am ${this.age} yearls old.`
//     );
//   },
// };

// person.greet();

// class Person {
//   constructor(name, age) {
//     this.name = name; //initializing the 'name' property
//     this.age = age; //initializing the 'age' property
//   }

//   introduce() {
//     console.log(
//       `Hello, my name is ${this.name} and i am ${this.age} yearls old.`
//     );
//   }
// }

// //create instance using the constructor
// const person1 = new Person("Kiko", 26);
// const person2 = new Person("Jun", 17);

// person1.introduce();
// person2.introduce();

// //without ES6

// function Person1(name, age) {
//   this.name = name;
//   this.age = age;

//   this.introduce = function () {
//     console.log(
//       `Hello, my name is ${this.name} and i am ${this.age} yearls old.`
//     );
//   };
// }

// const person3 = new Person1("Carpo", 34);
// person3.introduce();

// class Car {
//   constructor(model) {
//     this.model = model;
//   }

//   start() {
//     console.log(`${this.model} is starting . . .`);
//   }
// }

// const car1 = new Car("Totoya");
// car1.start();
//////end here of the comment

/**
 * Pokemon game here
 */

//pokemon game
class Pokemon {
  constructor(name, type, level, hp, dmg) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.dmg = dmg;
  }
  attack(opponent) {
    console.log(`${this.name} attack ${opponent.name}!`);
    // console.log(`${this.name} level up ${this.level}`);
  }

  receivedDamage(opponent) {
    this.hp -= opponent.dmg;
    if (this.hp <= 0) {
      console.log(`${this.name} has fainted.`);
      console.log(`${opponent.name} level up ${opponent.level + 1}`);
    } else {
      console.log(`${this.name} has ${this.hp} HP left.`);
    }
  }

  heal() {
    this.hp += 10;
    console.log(`${this.name} has 10 HP! Current HP: ${this.hp}`);
  }
}
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Electric", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    console.log(`${this.name} uses Thunderbolt on ${opponent.name}`);
    let dmg = this.dmg * 3;
    opponent.receivedDamage(dmg);
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Fire", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    console.log(`${this.name} uses Flamethrower on ${opponent.name}`);
    let dmg = this.dmg * 3;
    opponent.receivedDamage(dmg);
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonList = [];
  }
  addPokemon(pokemon) {
    this.pokemonList.push(pokemon);
  }
  selectPokemon(index) {
    return this.pokemonList[index];
  }
}

//ash's pokemons
let pikachu = new Pokemon("Pikachu", "Electric", 10, 30, 23);
let charmander = new Pokemon("Charmander", "Fire", 5, 10, 26);
let godzilla = new Pokemon("Godzilla", "Plasma", 50, 50, 50);
let torchick = new FirePokemon("Torchick", 20, 20, 20);

//red's pokemons
let geodude = new Pokemon("Geodude", "rock", 6, 10, 3);
let tutubi = new ElectricPokemon("Tutubi", 20, 20, 20);

/* Mini activity
    create a function for recievedDamage() and heal()

    ss your code and your results on your chatbox
*/

let ash = new Trainer("Ash");
ash.addPokemon(godzilla);
ash.addPokemon(torchick);

let red = new Trainer("Red");
red.addPokemon(geodude);

let ashPokemon = ash.selectPokemon(1);
let redPokemon = red.selectPokemon(0);

class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  startBattle() {
    console.log(
      `The battle between ${this.pokemon1.name} and ${this.pokemon2.name} has started`
    );

    while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      this.pokemon1.attack(this.pokemon2);
      if (this.pokemon2.hp > 0) {
        this.pokemon2.attack(this.pokemon1);
        break;
      }
    }

    if (this.pokemon1.hp <= 0) {
      console.log(`${this.pokemon1.name} has lost the battle.`);
    } else {
      console.log(`${this.pokemon2.name} has lost the battle.`);
    }
  }
}

let battle = new Battle(ashPokemon, redPokemon);
battle.startBattle();

/**
 * Inheritance
 *  -extend the pokemon class into specific types of pokemon
 *      -electric pokemon
 *      -fire pokemon
 *          -each subclass will inherit properties and methods for the base pokemon class but can also have it's own specific behaviour
 */

/**
 * Polymorphism the ability of different classes to respond to the same method call in a way that's specific to their type. It allows one interface(method) to be used for a general classof actions with each subclass implement the method in its own way.
 *
 * method overriding, method overloading,  dynamic method resolution
 *
 * method overriding
 * -subclasses can provide their own specific implementation of a method that is already defined in the parent class
 *
 * method overloading
 * - multiple method with the same name can be defined with different parameter, dynamic method resolution
 *
 * dynamic method resoltion
 * -method that gets called depend on the obect's type (not the referrence type), which is determine in a runtime
 *
 *
 */
