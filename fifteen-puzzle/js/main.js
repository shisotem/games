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
    }
  }
};

const showBoard = () => {
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      divs[y][x].textContent = board[y][x] || "";
    }
  }
};

window.onload = () => {
  init();
  showBoard();
};
