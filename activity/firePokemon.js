class FirePokemon extends Pokemon {
  constructor(name, level, hp, dmg) {
    //calling the base constructor
    super(name, "Fire", level, hp, dmg);
  }
  //polymorphism; override attack() method for fire pokemon
  attack(opponent) {
    console.log(
      `${this.name} uses Flamethrower on ${opponent.name} and deals ${
        this.calculateDamage() * 2
      } DAMAGE.`
    );
    opponent.receivedDamage(opponent);
  }
}
