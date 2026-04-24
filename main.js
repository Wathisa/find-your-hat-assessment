const prompt = require("prompt-sync")();

class Field {
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
    this.field[this.playerRow][this.playerCol] = "🤓";
  }
}

const myField = new Field([
  ["🌱", "🌱", "🌱"],
  ["🌱", "🕳", "🌱"],
  ["🌱", "🎩", "🌱"],
]);

myField.addPlayer();
myField.print();

/////////////////////////////////////////////////

//สร้างตัวผู้เล่น
// let playerRow = 0;
// let playerCol = 0;

// while (true) {
//วางตัวผู้เล่นไว้ที่จุดเริ่มต้น
//   field[playerRow][playerCol] = "🤓";

//สั่งให้แสดงผลทีละแถวโดยใช้ loop และใช้ join
//   for (let i = 0; i < field.length; i++) {
//     console.log(field[i].join(" "));
//   }

//สร้างตัวแปร move เพื่อเก็บคำสั่งจากผู้เล่น
//   let move = prompt("Move (I/K/J/L): ").toUpperCase();

//ลบตำแหน่งเดิม
//   field[playerRow][playerCol] = "🌱";

//   if (move === "I") {
//     playerRow--;
//   } else if (move === "K") {
//     playerRow++;
//   } else if (move === "J") {
//     playerCol--;
//   } else if (move === "L") {
//     playerCol++;
//   }

//   if (
//     playerRow < 0 ||
//     playerRow >= field.length ||
//     playerCol < 0 ||
//     playerCol >= field[0].length
//   ) {
//     console.log("Game Over! You went out of map 💥");
//     break;
//   }

//   let currentPosition = field[playerRow][playerCol];

//   if (currentPosition === "🕳") {
//     console.log("You fell into a hole! Game over! 💀");
//     break;
//   }

//   if (currentPosition === "🎩") {
//     console.log("You found the hat! You win! 🎉");
//     break;
//   }
// }
