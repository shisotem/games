const board = [];
const divs = [];
for (let y = 0; y < 4; y++) {
  board[y] = [];
  divs[y] = [];
  for (let x = 0; x < 4; x++) {
    board[y][x] = y * 4 + (x + 1);
    divs[y][x] = null;
  }
}
board[3][3] = 0; // empty

const init = () => {
  for (let i = 0; i < 1000; i++) {
    let from;
    let to;
    do {
      from = Math.trunc(Math.random() * 15);
      to = Math.trunc(Math.random() * 15);
    } while (from === to);
    [board[Math.trunc(from / 4)][from % 4], board[Math.trunc(to / 4)][to % 4]] =
      [
        board[Math.trunc(to / 4)][to % 4],
        board[Math.trunc(from / 4)][from % 4],
      ];
  }

  const squareSideLength = 80;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const div = document.createElement("div");
      document.body.appendChild(div);
      Object.assign(div.style, {
        position: "absolute",
        width: `${squareSideLength}px`,
        height: `${squareSideLength}px`,
        left: `${x * squareSideLength}px`,
        top: `${y * squareSideLength}px`,
        border: "4px solid #f80",
        backgroundColor: "#840",
        fontSize: "50px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      });
      divs[y][x] = div;
      div.onpointerdown = () => {
        ondown(x, y);
      };
    }
  }
};

const showBoard = () => {
  let clear = true;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      divs[y][x].textContent = board[y][x] || "";

      if (x !== 3 || y !== 3) {
        if (board[y][x] !== y * 4 + (x + 1)) {
          clear = false;
        }
      }
    }
  }

  if (clear) {
    ex = 999;
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        divs[y][x].style.backgroundColor = "#080";
      }
    }
  }
};

let ex = 3,
  ey = 3;
const ondown = (x, y) => {
  if (Math.abs(ex - x) + Math.abs(ey - y) === 1) {
    board[ey][ex] = board[y][x];
    board[y][x] = 0;
    ex = x;
    ey = y;
    showBoard();
  }
};

window.onload = () => {
  init();
  showBoard();
};
