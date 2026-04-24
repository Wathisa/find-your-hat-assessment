const prompt = require("prompt-sync")();

const hat = "🎩";
const hole = "👻";
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

    //ป้องกันจุดเริ่มต้นเป็นหลุม
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
    let message = ""; //เก็บข้อความ error

    while (true) {
      console.clear();

      //ข้อความด้านบนเกม
      console.log("👻 ====== GHOST ADVENTURE ====== 👻");
      console.log("Find the magic hat before you disappear...\n");

      console.log("🎮 Controls:");
      console.log("I = Up | K = Down | J = Left | L = Right | Q = Quit");
      console.log("\n===================================");

      //ข้อความ
      if (message) {
        console.log(message);
        console.log("");
      }

      //แผนที่
      this.addPlayer();
      this.print();

      console.log("===================================\n");

      let move = prompt("Move (I / J / K / L or Q): ");

      if (!move) continue;

      move = move.toUpperCase();

      const validMoves = ["I", "J", "K", "L", "Q"];

      if (!validMoves.includes(move)) {
        message = "⚠️ Invalid input! Use I / J / K / L or Q only.";
        continue;
      }

      //reset message ถ้าถูกต้อง
      message = "";

      //ลบตำแหน่งเดิม
      this.field[this.playerRow][this.playerCol] = fieldCharacter;

      //quit
      if (move === "Q") {
        console.log("You left the haunted world... Bye! 👋");
        break;
      }

      //ขยับ
      if (move === "I") this.moveUp();
      else if (move === "K") this.moveDown();
      else if (move === "J") this.moveLeft();
      else if (move === "L") this.moveRight();

      //ออกนอกแผนที่
      if (
        this.playerRow < 0 ||
        this.playerRow >= this.field.length ||
        this.playerCol < 0 ||
        this.playerCol >= this.field[0].length
      ) {
        console.log("You drifted out of the spirit world... Game over! 💥");
        break;
      }

      let currentPosition = this.field[this.playerRow][this.playerCol];

      if (currentPosition === hole) {
        console.log("Oh no! A ghost caught you... Game over! 💀");
        break;
      }

      if (currentPosition === hat) {
        console.log("Boo! You found the magic hat! You win! 🎉");
        break;
      }
    }
  }
}

const myField = new Field(Field.generateField(10, 12, 0.15));
myField.runGame();
