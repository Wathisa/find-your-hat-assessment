const prompt = require("prompt-sync")();

//สร้างแผนที่ของเกม
const field = [
  ["🌱", "🌱", "🌱"],
  ["🌱", "🌱", "🌱"],
  ["🌱", "🌱", "🌱"],
];

//สร้างตัวผู้เล่น
let playerRow = 0;
let playerCol = 0;

while (true) {
  //วางตัวผู้เล่นไว้ที่จุดเริ่มต้น
  field[playerRow][playerCol] = "🤓";

  //สั่งให้แสดงผลทีละแถวโดยใช้ loop และใช้ join
  for (let i = 0; i < field.length; i++) {
    console.log(field[i].join(" "));
  }

  //สร้างตัวแปร move เพื่อเก็บคำสั่งจากผู้เล่น
  let move = prompt("Move (I/K/J/L): ").toUpperCase();

  //ลบตำแหน่งเดิม
  field[playerRow][playerCol] = "🌱";

  if (move === "I") {
    playerRow--;
  } else if (move === "K") {
    playerRow++;
  } else if (move === "J") {
    playerCol--;
  } else if (move === "L") {
    playerCol++;
  }

  if (
    playerRow < 0 ||
    playerRow >= field.length ||
    playerCol < 0 ||
    playerCol >= field[0].length
  ) {
    console.log("Game Over! You went out of map 💥");
    break;
  }
}
