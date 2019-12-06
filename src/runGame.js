const { moveSnake } = require("./moveSnake.js");
const { stdin, stdout } = require("process");
stdin.setRawMode(true);
stdin.setEncoding("utf8");

const runGame = () => {
  let xPosition = 0,
    yPosition = 0,
    previousMove = "d";
  const start = move => {
    clearTimeout(timer);
    let configuration = moveSnake(move, xPosition, yPosition);
    xPosition = configuration.xPosition;
    yPosition = configuration.yPosition;
    previousMove = configuration.previousMove;
    timer = setTimeout(start, 300, previousMove);
  };
  stdout.write("\x1B[?25l");
  stdin.on("data", start);
  let timer = setTimeout(start, 300, previousMove);
};

module.exports = { runGame };
