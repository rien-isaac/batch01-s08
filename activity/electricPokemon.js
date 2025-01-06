class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Electric", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    console.log(
      `${this.name} uses Thunderbolt on ${opponent.name} and deals ${this.dmg} damage.`
    );
    opponent.receivedDamage(opponent);
  }
}
