const incrementX = (x, y) => {
  x += 1;
  return { x, y };
};

const incrementY = (x, y) => {
  y += 1;
  return { x, y };
};

const decrementX = (x, y) => {
  x -= 1;
  return { x, y };
};

const decrementY = (x, y) => {
  y -= 1;
  return { x, y };
};

const quit = () => {
  process.stdout.write("\x1B[?25h");
  process.exit(0);
};

module.exports = { incrementX, incrementY, decrementX, decrementY, quit };
