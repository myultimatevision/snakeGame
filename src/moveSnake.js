const { stdin, stdout } = require("process");
const {
  incrementX,
  incrementY,
  decrementX,
  decrementY,
  quit
} = require("./utils");

const printSnake = () => {
  stdout.write("000");
};

const moveSnake = (userMove, xPosition, yPosition) => {
  const moves = {
    w: decrementY,
    a: decrementX,
    s: incrementY,
    d: incrementX,
    q: quit
  };
  const coordinateModifier = moves[userMove];
  console.clear();
  stdout.cursorTo(xPosition, yPosition);
  printSnake();
  if (coordinateModifier != undefined) {
    const modifiedCoordinates = coordinateModifier(xPosition, yPosition);
    xPosition = modifiedCoordinates.x;
    yPosition = modifiedCoordinates.y;
  }
  return { xPosition, yPosition, previousMove: userMove };
};

module.exports = { moveSnake };
