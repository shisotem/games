const board = [];
for (let y = 0; y < 4; y++) {
  board[y] = [];
  for (let x = 0; x < 4; x++) {
    board[y][x] = y * 4 + (x + 1);
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
    }
  }
};

window.onload = () => {
  init();
};
