class Tournament {
  constructor(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
  }

  battle() {
    //selects the pokemon of trainer 1
    //   this.team1.forEach((pokemon1, team1Index) =>
    for (let i = 0; i < this.team1.length; i++) {
      if (this.team1[i].hp > 0) {
        console.log(`Trainer 1 selects ${this.team1[i].name}`);

        //selects the pokemon of trainer 2
        //   this.team2.forEach((pokemon2, team2Index) =>
        for (let i = 0; i < this.team1.length; i++) {
          if (this.team2[i].hp > 0) {
            console.log(`Trainer 2 selects ${this.team2[i].name}`);

            while (this.team1[i].hp > 0 && this.team2[i].hp > 0) {
              this.team1[i].attack(this.team2[i]);
              if (this.team2[i].hp > 0) {
                this.team2[i].attack(this.team1[i]);
              }

              if (this.team1[i].hp <= 0) {
                console.log(`${this.team1[i].name} has lost the battle.`);

                break;
              } else {
                console.log(`${this.team2[i].name} has lost the battle.`);
              }
            }
          }
        }
      }
    }

    // if ()
  }
}
