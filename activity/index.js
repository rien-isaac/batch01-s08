//spawning pokemons for each trainers
//jonas pokemons
let rayquaza = new Pokemon("Rayquaza", "Legendary", 19, 19, 100);
let groudon = new Pokemon("Groudon", "Legendary", 11, 11, 100);
let kyogre = new Pokemon("Kyogre", "Legendary", 17, 17, 100);
let arceus = new Pokemon("Arceus", "Legendary", 10, 10, 100);
let deoxys = new Pokemon("Deoxys", "Legendary", 18, 18, 100);

//ash's pokemons
let godzilla = new Pokemon("Godzilla", "Plasma", 13, 13, 5);
let pikachu = new ElectricPokemon("Pikachu", 12, 12, 5);
let charmander = new FirePokemon("Charmander", 15, 15, 5);
let torchick = new FirePokemon("Torchick", 17, 17, 5);
let mudkip = new WaterPokemon("Mudkip", 10, 10, 5);

//red's pokemons
let geodude = new RockPokemon("Geodude", 17, 17, 5);
let electrobuzz = new ElectricPokemon("Electrobuzz", 18, 18, 5);
let flygon = new Pokemon("Flygon", "Dragon", 11, 11, 5);
let onyx = new RockPokemon("Onyx", 14, 14, 5);
let gabite = new Pokemon("Gabite", "Dragon", 15, 15, 5);

/* Mini activity
    create a function for recievedDamage() and heal()

    ss your code and your results on your chatbox
*/

//adding pokemons to their respective trainers
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
red.addPokemon(electrobuzz);
red.addPokemon(flygon);
red.addPokemon(onyx);
red.addPokemon(gabite);

let blue = new Trainer("Blue");
blue.addPokemon(geodude);
blue.addPokemon(electrobuzz);
blue.addPokemon(flygon);
blue.addPokemon(onyx);
blue.addPokemon(gabite);

let wabapet = new Trainer("Wabapet");
wabapet.addPokemon(geodude);
wabapet.addPokemon(electrobuzz);
wabapet.addPokemon(flygon);
wabapet.addPokemon(onyx);
wabapet.addPokemon(gabite);

//selecting trainer's pokemon for single battle
let ashPokemon = ash.selectPokemon(2);
let redPokemon = red.selectPokemon(0);

//initiating single battle
// let battle = new Battle(redPokemon, ashPokemon);
// battle.startBattle();

// initiating tournament
let prelim1 = new Tournament(red, ash);
prelim1.battle();

let prelim2 = new Tournament(blue, wabapet);
prelim2.battle();
