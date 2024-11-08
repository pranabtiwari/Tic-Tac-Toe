let boxes = document.querySelectorAll(".box");
let rebutton = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#Newbutton");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let gameActive = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameActive) return;
    
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val && pos1Val === pos2Val && pos1Val === pos3Val) {
      alert(`Winner: ${pos1Val}`);
      gameActive = false;
      return;
    }
  }
  
  const isDraw = [...boxes].every(box => box.innerText !== "");
  if (isDraw) {
    alert("It's a draw!");
    gameActive = false;
  }
};

const resetGame = () => {
  gameActive = true;
  turnO = true;
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
};

rebutton.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
