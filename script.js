const game = document.getElementById("game");
const mainCharacter = document.createElement("div");
mainCharacter.className = "main-character";
const enemy = document.createElement("div");
enemy.className = "enemy";
game.appendChild(mainCharacter);
game.appendChild(enemy);

// let positionY = 0;
// let positionX = 0;
const blockPosition = {
  y: 0,
  x: 0,
};

function moveBlock(pos) {
  if (pos == "y") {
    blockPosition.y += 50;
  } else if (pos == "-y") {
    blockPosition.y -= 50;
  }
  if (pos == "x") {
    blockPosition.x += 50;
  } else if (pos == "-x") {
    blockPosition.x -= 50;
  }
}

function pos() {
  return mainCharacter.getBoundingClientRect();
}

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    moveBlock("-y");
    console.log(blockPosition);
    console.log(pos());
    mainCharacter.style.transform = `translateY(${blockPosition.y}px)`;
  }
  if (e.key == "ArrowRight") {
    moveBlock("x");
    console.log(blockPosition);
    console.log(pos());
    mainCharacter.style.transform = `translateX(${blockPosition.x}px)`;
  }
  if (e.key == "ArrowLeft") {
    moveBlock("-x");
    console.log(blockPosition);
    console.log(pos());
    mainCharacter.style.transform = `translateX(${blockPosition.x}px)`;
  }
  if (e.key == "ArrowDown") {
    moveBlock("y");
    console.log(blockPosition);
    console.log(pos());
    mainCharacter.style.transform = `translateY(${blockPosition.y}px)`;
  }
});
