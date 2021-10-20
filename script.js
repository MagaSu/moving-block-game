const game = document.getElementById("game");
const mainCharacter = document.createElement("div");
const enemy = document.createElement("div");
mainCharacter.className = "main-character";
enemy.className = "enemy";

// ============================= MAIN CHARACTER LOGIC ======================== //
game.appendChild(mainCharacter);

const blockPosition = {
  y: 300,
  x: 300,
};
mainCharacter.style.transform = `translateX(${blockPosition.x}px) translateY(${blockPosition.y}px)`;

function moveBlock(pos) {
  if (pos === "y") {
    blockPosition.y =
      blockPosition.y < 600 ? blockPosition.y + 50 : blockPosition.y;
  } else if (pos === "-y") {
    blockPosition.y =
      blockPosition.y > 0 ? blockPosition.y - 50 : blockPosition.y;
  }
  if (pos === "x") {
    blockPosition.x =
      blockPosition.x < 600 ? blockPosition.x + 50 : blockPosition.x;
  } else if (pos === "-x") {
    blockPosition.x =
      blockPosition.x > 0 ? blockPosition.x - 50 : blockPosition.x;
  }
}

// function pos() {
//   return mainCharacter.getBoundingClientRect();
// }

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      moveBlock("-y");
      mainCharacter.style.transform = `translateY(${blockPosition.y}px) translateX(${blockPosition.x}px)`;
      break;
    case "ArrowRight":
      moveBlock("x");
      mainCharacter.style.transform = `translateX(${blockPosition.x}px) translateY(${blockPosition.y}px)`;
      break;
    case "ArrowDown":
      moveBlock("y");
      mainCharacter.style.transform = `translateY(${blockPosition.y}px) translateX(${blockPosition.x}px)`;
      break;
    case "ArrowLeft":
      moveBlock("-x");
      mainCharacter.style.transform = `translateX(${blockPosition.x}px) translateY(${blockPosition.y}px)`;
      break;
    default:
      break;
  }
});

// ======================== ENEMY LOGIC =================================== //
game.appendChild(enemy);

const directions = ["y", "x", "-y", "-x"];

// NOT FINISHED
// const enemies = [
//   {
//     name: "enemyOne",
//     position: {
//       x: 0,
//       y: 0,
//     },
//   },
//   {
//     name: "enemyTwo",
//     position: {
//       x: 0,
//       y: 0,
//     },
//   },
//   {
//     name: "enemyThree",
//     position: {
//       x: 0,
//       y: 0,
//     },
//   },
// ];
// console.log(enemies[2].name);

let enemyDirection;

const enemyPosition = {
  x: 0,
  y: 0,
};

// setInterval(() => {
//   newEnemy();
// }, 1000);

// let i = 0;
// function newEnemy() {
//   if (i < enemies.length) {
//     enemy[i] = document.createElement("div");
//     enemy[i].className = "enemy";
//     game.appendChild(enemy[i]);
//   }
//   i++;
// }

function randomDirection() {
  return (enemyDirection =
    directions[Math.floor(Math.random() * directions.length)]);
}

setInterval(() => {
  enemyBlock(randomDirection());
}, 1000);

function enemyBlock(pos, block = null) {
  if (pos === "y") {
    enemyPosition.y =
      enemyPosition.y < 550 ? enemyPosition.y + 50 : enemyPosition.y;
    enemy.style.transform = `translateY(${enemyPosition.y}px) translateX(${enemyPosition.x}px)`;
  } else if (pos === "-y") {
    enemyPosition.y =
      enemyPosition.y > 0 ? enemyPosition.y - 50 : enemyPosition.y;
    enemy.style.transform = `translateY(${enemyPosition.y}px) translateX(${enemyPosition.x}px)`;
  }
  if (pos === "x") {
    enemyPosition.x =
      enemyPosition.x < 600 ? enemyPosition.x + 50 : enemyPosition.x;
    enemy.style.transform = `translateX(${enemyPosition.x}px) translateY(${enemyPosition.y}px)`;
  } else if (pos === "-x") {
    enemyPosition.x =
      enemyPosition.x > 0 ? enemyPosition.x - 50 : enemyPosition.x;
    enemy.style.transform = `translateX(${enemyPosition.x}px) translateY(${enemyPosition.y}px)`;
  }
}
