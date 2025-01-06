class Tournament {
  constructor(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
  }

  battle() {
    //selects the pokemon of trainer 1
    for (let i = 0; i < this.team1.length; i++) {
      if (this.team1[i].hp > 0) {
        console.log(`Trainer 1 selects ${this.team1[i].name}`);

        //selects the pokemon of trainer 2
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
                //set team 2 as the winner
                break;
              } else {
                console.log(`${this.team2[i].name} has lost the battle.`);
                //set team 1 as the winner
              }
            }
          }
        }
      }
    }
  }
}
