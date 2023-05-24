let gameBoardLogic = (() => {
  let mainBoard = document.querySelector(".grid-container");
  let boxes = [...mainBoard.querySelectorAll('.block')];
  let disp = document.getElementById("winner");
  let btn = document.getElementById("reset");
  let counter = 0;
  
  let gameBoard =  (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    return {board};
  })();

  boxes.forEach((element) => {
    element.onclick = () => {
 
      let id = element.getAttribute("id")

      if (winner == "The winner is X" || winner == "The winner is O") {
        console.log("gameover")
        return
      }
       
      else if (element.innerHTML!= "") {
        return
      }

      else if (counter % 2 == 0) {
        gameBoard.board[parseInt(id)] = player1.sign;
        element.innerHTML = gameBoard.board[parseInt(id)];
        console.log(gameBoard.board);
        counter++;
        console.log(counter);
        player = player1.sign
        
      }
      else {
        gameBoard.board[parseInt(id)] = player2.sign;
        element.innerHTML = gameBoard.board[parseInt(id)];
        console.log(gameBoard.board);
        counter++;
        console.log(counter);
        player = player2.sign
        
      }

      let whoWin = (() => {
        //horizontal 
        if (gameBoard.board[0] == player && gameBoard.board[1] == player && gameBoard.board[2] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"
       
        }
        if (gameBoard.board[3] == player && gameBoard.board[4] == player && gameBoard.board[5] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"

        }
        if (gameBoard.board[6] == player && gameBoard.board[7] == player && gameBoard.board[8] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"

        }
        //vertical 
        if (gameBoard.board[0] == player && gameBoard.board[3] == player && gameBoard.board[6] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"

        }
        if (gameBoard.board[1] == player && gameBoard.board[4] == player && gameBoard.board[7] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"
        }
        if (gameBoard.board[2] == player && gameBoard.board[5] == player && gameBoard.board[8] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"

        }          
        //diagonal 
        if (gameBoard.board[0] == player && gameBoard.board[4] == player && gameBoard.board[8] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"

        }
        if (gameBoard.board[2] == player && gameBoard.board[4] == player && gameBoard.board[6] == player) {
          winner = "The winner is " + player;
          console.log(winner);
          disp.innerHTML = winner;
          btn.innerHTML = "Play Again"

        }
   
      })();
    }
    
  
  }); 

  let reset = (() => {
    
    btn.onclick = () => {
      counter = 0;
      console.log(counter);
      gameBoard.board = ["", "", "", "", "", "", "", "", ""];
      console.log(gameBoard.board);
      boxes.forEach((element) => { 
        element.innerHTML = "";
        disp.innerHTML = "";
        btn.innerHTML = "Reset";
        
      })
    
    }
  })();

  let Player = (name, sign) => {

    const getsign = () => sign;
    const getName  = () => name;
    return {name, sign};
  }

  let player1 = Player('player one', "X");
  let player2 = Player('player two', "O");

})();








// add a check for a winner with if statements. when one is picked, display who won(player1 or 2),
//then on the next click reset the entire board, or remove vent listener so player 
//is forced to click play again(change reset text content to play agin)

//use modal for this?

