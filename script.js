let gameBoardLogic = (() => {
  let mainBoard = document.querySelector(".grid-container");
  let boxes = [...mainBoard.querySelectorAll('.block')];
  
  
    
  let gameBoard =  (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    return {board};
  })();

  console.log(gameBoard.board.length)
  let counter = 0;
  boxes.forEach((element) => {
    element.onclick = () => {
 
 
      let id = element.getAttribute("id")
      if (counter % 2 == 0) {
        gameBoard.board[parseInt(id)] = player1.sign;
        element.innerHTML = gameBoard.board[parseInt(id)];
        console.log(gameBoard.board);
        counter++;
        console.log(counter);
      }
      else {
        gameBoard.board[parseInt(id)] = player2.sign;
        element.innerHTML = gameBoard.board[parseInt(id)];
        console.log(gameBoard.board);
        counter++;
        console.log(counter);
      }
    
    }
  
  }); 

  let reset = (() => {
    btn = document.getElementById("reset");
    btn.onclick = () => {
      counter = 0;
      console.log(counter);
      gameBoard.board = ["", "", "", "", "", "", "", "", ""];
      console.log(gameBoard.board);
      boxes.forEach((element) => { 
        element.innerHTML = "";
      })
    
    }
  })();


  let Player = (name, sign) => {

    const getsign = () => sign;
    const getName  = () => name;
    //console.log(`${name} and the sign is ${sign}`);
    return {name, sign};
  }

  let player1 = Player('player one', "X");
  let player2 = Player('player two', "O");

})();





