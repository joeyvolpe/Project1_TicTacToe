angular
	.module("ticTacToeApp")
	.controller("TicTacToeController", TicTacToeController)

	TicTacToeController.$inject = ['$firebaseObject'];

	function TicTacToeController($firebaseObject) {
		var ticTacToe = this; 

		ticTacToe.game = syncGameWithFirebase(); //******
		ticTacToe.playerMove = playerMove; //sets playerMove() function as a property of the controller
		ticTacToe.getWinner = getWinner;

		var x = "images/x.gif";
		var o = "images/o.jpeg";
		var white = "images/white.png";

		ticTacToe.name; //bound to text input in index.html
		// ticTacToe.name2; //bound to text input in index.html
		ticTacToe.colorPicker; //bound to select drop-down in index.html
		// ticTacToe.colorPicker2; //bound to select drop-down in index.html

		function syncGameWithFirebase(){
			var ref = new Firebase('https://joeytictactoe.firebaseio.com/tictactoe');
			var gameObject = $firebaseObject(ref);

			// initializes values in the gameObject once it's loaded
			gameObject.$loaded(function(){
				gameObject.xScore = 0;
				gameObject.oScore = 0;
				gameObject.board = [];
				gameObject.playerTurn = 1;

				for(var i = 0; i < 9; i++){
               gameObject.board.push(
                  {
                  spaceOccupied: null,
                  occupiedBy: null, 
						img: white
                  }
					)
				}
				gameObject.$save();
			});
			return gameObject;
		}

		// bound to ng-click
		function playerMove($index) {

			if (ticTacToe.game.playerTurn === 1) {
				if (ticTacToe.game.board[$index].spaceOccupied = "no") {

					ticTacToe.game.board[$index].spaceOccupied = "yes";
					ticTacToe.game.board[$index].occupiedBy = "x";
					ticTacToe.game.board[$index].img = x;

					ticTacToe.game.playerTurn = 0;
					ticTacToe.game.$save();

					if (getWinner("x") === true) {
						alert("X wins! Play again.");
					}
				}
				else if (ticTacToe.game.board[$index].spaceOccupied = "yes") {
					alert("Space occupied!");
				}
			}
			else {
				if (ticTacToe.game.board[$index].spaceOccupied = "no") {

					ticTacToe.game.board[$index].spaceOccupied = "yes";
					ticTacToe.game.board[$index].occupiedBy = "o";
					ticTacToe.game.board[$index].img = o;

					ticTacToe.game.playerTurn = 1;
					ticTacToe.game.$save();

					if (getWinner("o") === true) {
						alert("O wins! Play again.");
					}
				}
				else if (ticTacToe.game.board[$index].spaceOccupied = "yes") {
					alert("Space occupied!");
				}
			}
		}

		function getWinner(player) {
			if ((checkRows(player) === true) || (checkColumns(player) === true) || (checkDiagonals(player) === true)) {
				return true;
			}
		}

		function checkRows(player) {
			if (((ticTacToe.game.board[0].occupiedBy === player) && (ticTacToe.game.board[1].occupiedBy === player) && (ticTacToe.game.board[2].occupiedBy === player)) ||
				((ticTacToe.game.board[3].occupiedBy === player) && (ticTacToe.game.board[4].occupiedBy === player) && (ticTacToe.game.board[5].occupiedBy === player)) ||
				((ticTacToe.game.board[6].occupiedBy === player) && (ticTacToe.game.board[7].occupiedBy === player) && (ticTacToe.game.board[8].occupiedBy === player))) {
				return true;
			}
		}

		function checkColumns(player) {
			if	(((ticTacToe.game.board[0].occupiedBy === player) && (ticTacToe.game.board[3].occupiedBy === player) && (ticTacToe.game.board[6].occupiedBy === player)) ||
				((ticTacToe.game.board[1].occupiedBy === player) && (ticTacToe.game.board[4].occupiedBy === player) && (ticTacToe.game.board[7].occupiedBy === player)) ||
				((ticTacToe.game.board[2].occupiedBy === player) && (ticTacToe.game.board[5].occupiedBy === player) && (ticTacToe.game.board[8].occupiedBy === player))) {
				return true;
			}
		}

		function checkDiagonals(player) {
			if	(((ticTacToe.game.board[0].occupiedBy === player) && (ticTacToe.game.board[4].occupiedBy === player) && (ticTacToe.game.board[8].occupiedBy === player)) ||
				((ticTacToe.game.board[2].occupiedBy === player) && (ticTacToe.game.board[4].occupiedBy === player) && (ticTacToe.game.board[6].occupiedBy === player))) {
				return true;
			}
		}

		function resetBoard() {
			for (var i=0; i<9; i++){
				ticTacToe.game.board[i].img = "images/white.png";
			}
		}
	}


// {
// 				alert("O wins. Play again!");
// 				for (i = 0; i < 9; i++) {
// 					ticTacToe.board1[i].img = "images/white.png";
// 					ticTacToe.board2[i].img = "images/white.png";
// 				}
// 			} else if ((ticTacToe.board2[0].img !== "images/white.png" && ticTacToe.board2[1].img !== "images/white.png" && ticTacToe.board2[2].img !== "images/white.png" &&
// 					ticTacToe.board2[3].img !== "images/white.png" && ticTacToe.board2[4].img !== "images/white.png" && ticTacToe.board2[5].img !== "images/white.png" &&
// 					ticTacToe.board2[6].img !== "images/white.png" && ticTacToe.board2[7].img !== "images/white.png" && ticTacToe.board2[8].img !== "images/white.png")) {
// 				alert("Tie game. Play again!");
// 				for (i = 0; i < 9; i++) {
// 					ticTacToe.board1[i].img = "images/white.png";
// 					ticTacToe.board2[i].img = "images/white.png";
// 				}
// 			}

		// var winner = null;


		// function vertCheck(num) {

		// }

		// function checkRows() {
		// 	for (var i=0; i<3; i++) {
		// 		if (ticTacToe.game.board[i].occupiedBy==="x"){
		// 				vertCheckX++;
		// 				if (vertCheckX===3) {
		// 					winner = "x";
		// 				}
		// 			}
		// 		}
		// 	}
		// 	for (var i=3; i<6; i++) {
		// 		if (ticTacToe.game.board[i].occupiedBy==="x"){
		// 				vertCheckX++;
		// 				if (vertCheckX===3) {
		// 					winner = true;
		// 					return winner;
		// 				}
		// 			}
		// 		}
		// 	}




		// 		for (var j=0; j<7; j+=3){
		// 			if (ticTacToe.game.board[i+j].occupiedBy==="x"){
		// 				vertCheckX++;
		// 	}

		// }




	// 	function getWinner() {

	// 		var vertCheckX = 0;
	// 		var vertCheckO = 0;
	// 		var horCheckX = 0;
	// 		var horCheckO = 0;
	// 		var diagCheck1X = 0;
	// 		var diagCheck1O = 0;
	// 		var diagCheck2X = 0;
	// 		var diagCheck2O = 0;

	// 		var catsCheck = 0;
	// 		var winner = null;


	// 		// var index = ticTacToe.board.indexOf(repeat);
	// 		// ticTacToe.board[index].img = x or o;

	// 		// checks for vertical wins
	// 		for (var i=0; i<3; i++){
	// 			for (var j=0; j<7; j+=3){
	// 				for (var k=0; k<3; k++){
	// 					if (ticTacToe.game.board[i+j].occupiedBy==="x"){
	// 						vertCheckX++;
	// 						if (vertCheckX===3){
	// 							// ticTacToe.board[i+j]=vertLine; //places line in col w/ [i+j]
	// 							alert("X wins. Play again!");
	// 							winner="x";
	// 							game.xScore++;
	// 						}
	// 					}
	// 					else if (ticTacToe.game.board[i+j].occupiedBy==="o"){
	// 						vertCheckO++;
	// 						if (vertCheckO===3){
	// 							// ticTacToe.board[i+j]=vertLine; //places line in col w/ [i+j]
	// 							alert("O wins. Play again!");
	// 							winner="o";
	// 							game.oScore++;						
	// 						}
	// 					} 
	// 				}
	// 			}
	// 		}
	// 		// checks for horizontal wins
	// 		for (var i=0; i<7; i+=3){
	// 			for (var j=0; j<3; j++){
	// 				for (var k=0; k<3; k++){
	// 					if (ticTacToe.game.board[i+j].occupiedBy==="x"){
	// 						horCheckX++;
	// 						if (horCheckX===3){
	// 							// ticTacToe.board[i+j]=vertLine; //places line in col w/ [i+j]
	// 							alert("X wins. Play again!");
	// 							winner="x";
	// 							game.xScore++;
	// 						}
	// 					}
	// 					else if (ticTacToe.game.board[i+j].occupiedBy==="o"){
	// 						vertCheckO++;
	// 						if (vertCheckO===3){
	// 							// ticTacToe.board[i+j]=vertLine; //places line in col w/ [i+j]
	// 							alert("O wins. Play again!");
	// 							winner="o";
	// 							game.oScore++;
	// 						}
	// 					} 
	// 				}
	// 			}
	// 		}
	// 		// checks for one diagonal win
	// 		for (var i=2; i<7; i+=2){
	// 			if (ticTacToe.game.board[i].occupiedBy = "x"){
	// 				diagCheck2X++;
	// 				if (diagCheck2X===3){
	// 					// ticTacToe.board[6] = diagLine2; //places line in diag2
	// 					alert("X wins. Play again!");
	// 					winner="x";
	// 					game.xScore++;
	// 				}
	// 			}
	// 			else if (ticTacToe.game.board[i].occupiedBy = "o"){
	// 				diagCheck2O++;
	// 				if (diagCheck2O===3){
	// 					// ticTacToe.board[6] = diagLine2; //places line in diag2
	// 					alert("O wins. Play again!");
	// 					winner="o";
	// 					game.oScore++;						
	// 				}
	// 			}
	// 		}
	// 		// checks for other diagonal win
	// 		for (var i=0; i<9; i+=4){
	// 			if (ticTacToe.game.board[i].occupiedBy = "x"){
	// 				diagCheck1X++;
	// 				if (diagCheck1X===3){
	// 					// ticTacToe.board[6] = diagLine2; //places line in diag2
	// 					alert("X wins. Play again!");
	// 					winner="x";
	// 					game.xScore++;
	// 				}
	// 			}
	// 			else if (ticTacToe.game.board[i].occupiedBy = "o"){
	// 				diagCheck1O++;
	// 				if (diagCheck1O===3){
	// 					// ticTacToe.board[6] = diagLine2; //places line in diag2
	// 					alert("O wins. Play again!");
	// 					winner="o";
	// 					game.oScore++;	
	// 				}
	// 			}
	// 		}
	// 		// checks for cats game
	// 		for (var i=0; i<9; i++){
	// 			if (ticTacToe.game.board[i].img!==white){
	// 				catsCheck++
	// 				if (catsCheck=9){
	// 					// giant cats image?
	// 					alert("Cats game. Play again!");
	// 					resetBoard();
	// 				}
	// 			}
	// 		}

	// 		return winner;
	// 	}
	
	// 	function resetBoard() {
	// 		for (var i=0; i<9; i++){
	// 			ticTacToe.game.board[i].img = "images/white.png";
	// 		}
	// 	}
	// }


