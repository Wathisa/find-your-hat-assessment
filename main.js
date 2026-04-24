const prompt = require("prompt-sync")();

const hat = "🎩";
const hole = "🕳";
const fieldCharacter = "🌱";
const playerCharacter = "🤓";

class Field {
  static generateField(rows, cols, holePercent) {
    const field = [];

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < cols; j++) {
        if (Math.random() < holePercent) {
          row.push(hole);
        } else {
          row.push(fieldCharacter);
        }
      }

      field.push(row);
    }

    //วางหมวกแบบสุ่ม
    let hatRow = Math.floor(Math.random() * rows);
    let hatCol = Math.floor(Math.random() * cols);
    field[hatRow][hatCol] = hat;

    //บังคับให้จุด 0,0 ไม่เป็นหลุม
    field[0][0] = fieldCharacter;

    return field;
  }

  constructor(field) {
    this.field = field;
    this.playerRow = 0;
    this.playerCol = 0;
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      console.log(this.field[i].join(" "));
    }
  }

  addPlayer() {
    this.field[this.playerRow][this.playerCol] = playerCharacter;
  }

  moveUp() {
    this.playerRow--;
  }
  moveDown() {
    this.playerRow++;
  }
  moveLeft() {
    this.playerCol--;
  }
  moveRight() {
    this.playerCol++;
  }

  runGame() {
    console.log("Controls:");
    console.log("I = Up, K = Down, J = Left, L = Right");
    console.log("----------------------");

    while (true) {
      this.addPlayer();
      this.print();
      console.log("----------------------");

      let move = prompt("Move (I/J/K/L): ");

      if (!move) continue;

      move = move.toUpperCase();

      // ลบตำแหน่งเดิม
      this.field[this.playerRow][this.playerCol] = fieldCharacter;

      if (move === "I") {
        this.moveUp();
      } else if (move === "K") {
        this.moveDown();
      } else if (move === "J") {
        this.moveLeft();
      } else if (move === "L") {
        this.moveRight();
      }

      if (
        this.playerRow < 0 ||
        this.playerRow >= this.field.length ||
        this.playerCol < 0 ||
        this.playerCol >= this.field[0].length
      ) {
        console.log("Game Over! You went out of map 💥");
        break;
      }

      let currentPosition = this.field[this.playerRow][this.playerCol];

      if (currentPosition === hole) {
        console.log("You fell into a hole! Game over! 💀");
        break;
      }

      if (currentPosition === hat) {
        console.log("You found the hat! You win! 🎉");
        break;
      }
    }
  }
}

const myField = new Field(Field.generateField(10, 10, 0.1));
myField.runGame();
