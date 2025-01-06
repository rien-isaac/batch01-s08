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

  calculateDamage() {
    return Math.floor(Math.random() * 18);
  }

  receivedDamage(opponent) {
    this.hp -= opponent.calculateDamage();
    if (this.hp <= 0) {
      console.log(`${this.name} has fainted.`);
      //   console.log(`${opponent.name} level up ${opponent.level + 1}`);
    } else {
      console.log(`${this.name} has ${this.hp} HP left.`);
    }
  }

  heal() {
    this.hp += 10;
    console.log(`${this.name} has 10 HP! Current HP: ${this.hp}`);
  }

  powerUp() {
    this.dmg += 16;
    console.log(
      `${this.name} uses power up and increase its damage ${this.dmg} (+16)`
    );
  }
}
