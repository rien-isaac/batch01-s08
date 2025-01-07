//spawning pokemons for each trainers
//jonas pokemons
let rayquaza = new Pokemon("Rayquaza", "Legendary", 100, 100, 100);
let groudon = new Pokemon("Groudon", "Legendary", 100, 100, 100);
let kyogre = new Pokemon("Kyogre", "Legendary", 100, 100, 100);
let arceus = new Pokemon("Arceus", "Legendary", 100, 100, 100);
let deoxys = new Pokemon("Deoxys", "Legendary", 100, 100, 100);

//ash's pokemons
let godzilla = new Pokemon("Godzilla", "Plasma", 13, 13, 3);
let pikachu = new ElectricPokemon("Pikachu", 12, 12, 5);
let charmander = new FirePokemon("Charmander", 15, 15, 7);
let torchick = new FirePokemon("Torchick", 17, 17, 4);
let mudkip = new WaterPokemon("Mudkip", 10, 10, 6);

//red's pokemons
let geodude = new RockPokemon("Geodude", 17, 17, 8);
let electrobuzz = new ElectricPokemon("Electrobuzz", 18, 18, 3);
let flygon = new Pokemon("Flygon", "Dragon", 11, 11, 5);
let onyx = new RockPokemon("Onyx", 14, 14, 7);
let gabite = new Pokemon("Gabite", "Dragon", 15, 15, 2);

//blue's pokemon
let absol = new Pokemon("Absol", "Bug", 3, 8, 4);
let lotad = new WaterPokemon("Lotad", 5, 19, 6);
let wingul = new WaterPokemon("Wingul", 12, 18, 11);
let ralts = new Pokemon("Ralts", "Normal", 5, 7, 9);
let ratata = new Pokemon("Ratata", "Normal", 6, 3, 9);

//wabapet's pokemon
let numel = new Pokemon("Numel", "Normal", 8, 9, 10);
let oddish = new Pokemon("Oddish", "Grass", 6, 7, 8);
let psyduck = new WaterPokemon("Psyduck", 12, 15, 16);
let spoink = new Pokemon("Spoink", "Normal", 12, 15, 18);
let vulpix = new FirePokemon("Vulpix", 16, 18, 20);

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
blue.addPokemon(ratata);
blue.addPokemon(ralts);
blue.addPokemon(wingul);
blue.addPokemon(lotad);
blue.addPokemon(absol);

let wabapet = new Trainer("Wabapet");
wabapet.addPokemon(spoink);
wabapet.addPokemon(vulpix);
wabapet.addPokemon(psyduck);
wabapet.addPokemon(oddish);
wabapet.addPokemon(numel);

//selecting trainer's pokemon for single battle
let ashPokemon = ash.selectPokemon(2);
let redPokemon = red.selectPokemon(0);

//initiating single battle
// let battle = new Battle(redPokemon, ashPokemon);
// battle.startBattle();

// initiating tournament
let prelim1 = new Tournament(red, wabapet);
prelim1.battle();
console.log(prelim1.winner);

let prelim2 = new Tournament(blue, ash);
prelim2.battle();
// console.log(prelim2.winner);

let semiFinals = new Tournament(prelim1.winner, prelim2.winner);
semiFinals.battle();
// console.log(semiFinals.winner);

let finals = new Tournament(semiFinals.winner, jonas);
finals.battle();
// console.log(finals.winner);

console.log(`The Champion in this tournament is ${finals.winner.name}!`);
finals.winner.showPokemon();
