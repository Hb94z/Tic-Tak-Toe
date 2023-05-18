let gameBoard = {
  board: ["", "", "", "", "", "", "", "", ""]

};
  console.log(gameBoard.board.length)

   let starterGrid = (() => {
      for (let i = 0; i < gameBoard.board.length; i++) {
        let container = document.querySelector(".grid-container");
        let grid = document.createElement('div');
        grid.classList = ('block');
        grid.setAttribute("id", i)
        container.appendChild(grid);
      }}
   )();

