class WaterPokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Water", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    console.log(
      `${this.name} uses Hydro Pump on ${opponent.name} and deals ${this.dmg} damage.`
    );
    // opponent.receivedDamage(opponent);
  }

  heal() {
    this.hp += 16;
    console.log(
      `${this.name} regained 10 HP with the blessing of water! Current HP: ${this.hp}`
    );
  }
}
