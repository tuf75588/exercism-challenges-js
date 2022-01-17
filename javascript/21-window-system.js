// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;

  Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  };
}

class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

class ProgramWindow {
  constructor(
    screenSize = new Size(800, 60),
    size = new Size(),
    position = new Position()
  ) {
    this.screenSize = screenSize;
    this.size = size;
    this.position = position;
  }
}
