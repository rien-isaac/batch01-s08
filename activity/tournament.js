class Tournament {
  constructor(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
  }

  battle() {
    //selects first pokemon of trainer 1
    this.team1.forEach((pokemon1, team1Index) => {
      if (this.team1[team1Index].hp > 0) {
        console.log(`Trainer 1 selects ${this.team1[team1Index].name}`);

        //selects pokemons of trainer 2
        this.team2.forEach((pokemon2, team2Index) => {
          if (this.team2[team2Index].hp > 0) {
            console.log(`Trainer 2 selects ${this.team2[team2Index].name}`);

            while (
              this.team1[team1Index].hp > 0 &&
              this.team2[team2Index].hp > 0
            ) {
              this.team1[team1Index].attack(this.team2[team2Index]);
              if (this.team2[team2Index].hp > 0) {
                this.team2[team2Index].attack(this.team1[team1Index]);
              }

              if (this.team1[team1Index].hp <= 0) {
                console.log(
                  `${this.team1[team1Index].name} has lost the battle.`
                );
              } else {
                console.log(
                  `${this.team2[team2Index].name} has lost the battle.`
                );
              }
            }
          }
        });
      }
    });

    // if ()
  }
}
