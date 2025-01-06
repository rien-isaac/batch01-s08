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
    opponent.receivedDamage(opponent);
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
    opponent.receivedDamage(opponent);
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Water", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    console.log(`${this.name} uses Hydro Pump on ${opponent.name}`);
    let dmg = this.dmg * 3;
    opponent.receivedDamage(dmg);
  }

  heal() {
    this.hp += 16;
    console.log(
      `${this.name} regained 10 HP with the blessing of water! Current HP: ${this.hp}`
    );
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

//jonas
let rayquaza = new Pokemon("Rayquaza", "Legendary", 100, 100, 100);
let groudon = new Pokemon("Groudon", "Legendary", 100, 100, 100);
let kyogre = new Pokemon("Kyogre", "Legendary", 100, 100, 100);
let arceus = new Pokemon("Arceus", "Legendary", 100, 100, 100);
let deoxys = new Pokemon("Deoxys", "Legendary", 100, 100, 100);

//ash's pokemons
let godzilla = new Pokemon("Godzilla", "Plasma", 6, 10, 3);
let pikachu = new ElectricPokemon("Pikachu", 10, 30, 23);
let charmander = new FirePokemon("Charmander", 5, 10, 26);
let torchick = new FirePokemon("Torchick", 20, 20, 20);
let mudkip = new WaterPokemon("Mudkip", 20, 20, 20);

//red's pokemons
let geodude = new Pokemon("Geodude", "rock", 6, 10, 3);
let tutubi = new ElectricPokemon("Tutubi", 20, 20, 20);

/* Mini activity
    create a function for recievedDamage() and heal()

    ss your code and your results on your chatbox
*/

let jonas = new Trainer("Jonas");
jonas.addPokemon(rayquaza);
jonas.addPokemon(groudon);
jonas.addPokemon(kyogre);
jonas.addPokemon(arceus);
jonas.addPokemon(deoxys);

let ash = new Trainer("Ash");
ash.addPokemon(godzilla);
ash.addPokemon(pikachu);
ash.addPokemon(charmander);
ash.addPokemon(torchick);
ash.addPokemon(mudkip);

let red = new Trainer("Red");
red.addPokemon(geodude);

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

//trainers pokemon
let ashPokemon = ash.selectPokemon(1);
let redPokemon = red.selectPokemon(0);

let battle = new Battle(ashPokemon, redPokemon);
battle.startBattle();
