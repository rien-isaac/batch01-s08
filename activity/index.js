//spawning pokemons for each trainers
//jonas pokemons
let rayquaza = new Pokemon("Rayquaza", "Legendary", 100, 100, 100);
let groudon = new Pokemon("Groudon", "Legendary", 100, 100, 100);
let kyogre = new Pokemon("Kyogre", "Legendary", 100, 100, 100);
let arceus = new Pokemon("Arceus", "Legendary", 100, 100, 100);
let deoxys = new Pokemon("Deoxys", "Legendary", 100, 100, 100);

//ash's pokemons
let godzilla = new Pokemon("Godzilla", "Plasma", 10, 10, 5);
let pikachu = new ElectricPokemon("Pikachu", 10, 30, 23);
let charmander = new FirePokemon("Charmander", 5, 10, 26);
let torchick = new FirePokemon("Torchick", 20, 20, 20);
let mudkip = new WaterPokemon("Mudkip", 20, 20, 20);

//red's pokemons
let geodude = new RockPokemon("Geodude", 3, 10, 3);
let tutubi = new ElectricPokemon("Tutubi", 20, 20, 20);
let flygon = new Pokemon("Flygon", "Dragon", 20, 20, 20);
let onyx = new RockPokemon("Onyx", 20, 20, 20);
let gabite = new Pokemon("Gabite", "Dragon", 20, 20, 20);

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
red.addPokemon(tutubi);
red.addPokemon(flygon);
red.addPokemon(onyx);
red.addPokemon(gabite);

//selecting trainer's pokemon for single battle
let ashPokemon = ash.selectPokemon(2);
let redPokemon = red.selectPokemon(0);

//initiating single battle
// let battle = new Battle(redPokemon, ashPokemon);
// battle.startBattle();

// initiating tournament
let prelim1 = new Tournament(red.pokemonList, ash.pokemonList);
prelim1.battle();
