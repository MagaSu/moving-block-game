const game = document.getElementById("game");
const mainCharacter = document.createElement("div");
mainCharacter.className = "main-character";
const enemy = document.createElement("div");
enemy.className = "enemy";
game.appendChild(mainCharacter);
game.appendChild(enemy);

let positionY = 0;
let positionX = 0;

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    positionY -= 50;
    console.log("Top: " + positionY);
    mainCharacter.style.transform = `translateY(${positionY}px)`;
  }
  if (e.key == "ArrowRight") {
    positionX += 50;
    console.log("Right: " + positionX);
    mainCharacter.style.transform = `translateX(${positionX}px)`;
  }
  if (e.key == "ArrowLeft") {
    positionX -= 50;
    console.log("Left: " + positionX);
    mainCharacter.style.transform = `translateX(${positionX}px)`;
  }
  if (e.key == "ArrowDown") {
    positionY += 50;
    console.log("Down: " + positionY);
    mainCharacter.style.transform = `translateY(${positionY}px)`;
  }
});
