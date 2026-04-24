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
field[playerRow][playerCol] = "🤓";

//สร้างตัวแปร move เพื่อเก็บคำสั่งจากผู้เล่น
let move = prompt("Move (I/K/J/L): ").toUpperCase();

if (move === "I") {
  playerRow--;
} else if (move === "K") {
  playerRow++;
} else if (move === "J") {
  playerCol--;
} else if (move === "L") {
  playerCol++;
}

field[playerRow][playerCol] = "🤓";

//แสดงผล
console.log(field);
//สั่งให้แสดงผลทีละแถวโดยใช้ loop และใช้ join
for (let i = 0; i < field.length; i++) {
  console.log(field[i].join(" "));
}
