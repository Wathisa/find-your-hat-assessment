const field = [
  ["🌱", "🌱", "🌱"],
  ["🌱", "🌱", "🌱"],
  ["🌱", "🌱", "🌱"],
];

let playerRow = 0;
let playerCol = 0;
field[playerRow][playerCol] = "🤓";

console.log(field);

for (let i = 0; i < field.length; i++) {
  console.log(field[i].join(" "));
}
