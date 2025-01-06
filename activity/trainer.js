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
