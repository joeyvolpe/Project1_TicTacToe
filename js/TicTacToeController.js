angular
	.module("ticTacToeApp")
	.controller("TicTacToeController", TicTacToeController)

	function TicTacToeController(){
		var self = this;

		self.board1 = [];
		self.board2 = [];

		self.placeX = placeX;
		self.placeO = placeO;

		self.name1; //bound to text input in index.html
		self.name2; //bound to text input in index.html
		self.numOfGames1; //bound to number input in index.html
		self.numOfGames2; //bound to number input in index.html
		self.colorPicker1; //bound to select drop-down in index.html
		self.colorPicker2; //bound to select drop-down in index.html


		// for (var i = 0; i < 9; i++) {

		// 	self.board.push({img: "images/white.png"});

		// }

		for (i = 0; i < 9; i++) {

			self.board1.push(
				{
					// xMove: false,
					// twoXsInARow: false,
					// twoXsInAColumn: false, 
					// twoXsInADiagonal: false,
					// xWon: false,
					// xWins: 0,
					img: "images/white.png"

					// oMove: false,
					// twoOsInARow: false,
					// twoOsInAColumn: false, 
					// twoOsInADiagonal: false,
					// oWon: false, 
					// oWins: 0, 
				}
			);

			self.board2.push(
				{
					// xMove: false,
					// twoXsInARow: false,
					// twoXsInAColumn: false, 
					// twoXsInADiagonal: false,
					// xWon: false,
					// xWins: 0,
					img: "images/white.png"

					// oMove: false,
					// twoOsInARow: false,
					// twoOsInAColumn: false, 
					// twoOsInADiagonal: false,
					// oWon: false, 
					// oWins: 0, 
				}
			);
		}

		function placeX(repeat) {

			var index = self.board1.indexOf(repeat);
			self.board1[index].img = "images/x.gif";
			self.board2[index].img = "images/x.gif";

			if ((self.board1[0].img==="images/x.gif" && self.board1[1].img==="images/x.gif" && self.board1[2].img==="images/x.gif") ||
				(self.board1[3].img==="images/x.gif" && self.board1[4].img==="images/x.gif" && self.board1[5].img==="images/x.gif") ||
				(self.board1[6].img==="images/x.gif" && self.board1[7].img==="images/x.gif" && self.board1[8].img==="images/x.gif") ||
				(self.board1[0].img==="images/x.gif" && self.board1[3].img==="images/x.gif" && self.board1[6].img==="images/x.gif") ||
				(self.board1[1].img==="images/x.gif" && self.board1[4].img==="images/x.gif" && self.board1[7].img==="images/x.gif") ||
				(self.board1[2].img==="images/x.gif" && self.board1[5].img==="images/x.gif" && self.board1[8].img==="images/x.gif") ||
				(self.board1[0].img==="images/x.gif" && self.board1[4].img==="images/x.gif" && self.board1[8].img==="images/x.gif") ||
				(self.board1[2].img==="images/x.gif" && self.board1[4].img==="images/x.gif" && self.board1[6].img==="images/x.gif")) {
				alert("X wins. Play again!");
				for (i = 0; i < 9; i++) {
					self.board1[i].img = "images/white.png";
					self.board2[i].img = "images/white.png";
				}
			}

			else if ((self.board1[0].img!=="images/white.png" && self.board1[1].img!=="images/white.png" && self.board1[2].img!=="images/white.png" &&
				self.board1[3].img!=="images/white.png" && self.board1[4].img!=="images/white.png" && self.board1[5].img!=="images/white.png" &&
				self.board1[6].img!=="images/white.png" && self.board1[7].img!=="images/white.png" && self.board1[8].img!=="images/white.png")) {
				alert("Tie game. Play again!");
				for (i = 0; i < 9; i++) {
					self.board1[i].img = "images/white.png";
					self.board2[i].img = "images/white.png";
				}
			}
		}

		function placeO(repeat) {

			var index = self.board2.indexOf(repeat);
			self.board1[index].img = "images/o.jpeg";
			self.board2[index].img = "images/o.jpeg";

			if ((self.board2[0].img==="images/o.jpeg" && self.board2[1].img==="images/o.jpeg" && self.board2[2].img==="images/o.jpeg") ||
				(self.board2[3].img==="images/o.jpeg" && self.board2[4].img==="images/o.jpeg" && self.board2[5].img==="images/o.jpeg") ||
				(self.board2[6].img==="images/o.jpeg" && self.board2[7].img==="images/o.jpeg" && self.board2[8].img==="images/o.jpeg") ||
				(self.board2[0].img==="images/o.jpeg" && self.board2[3].img==="images/o.jpeg" && self.board2[6].img==="images/o.jpeg") ||
				(self.board2[1].img==="images/o.jpeg" && self.board2[4].img==="images/o.jpeg" && self.board2[7].img==="images/o.jpeg") ||
				(self.board2[2].img==="images/o.jpeg" && self.board2[5].img==="images/o.jpeg" && self.board2[8].img==="images/o.jpeg") ||
				(self.board2[0].img==="images/o.jpeg" && self.board2[4].img==="images/o.jpeg" && self.board2[8].img==="images/o.jpeg") ||
				(self.board2[2].img==="images/o.jpeg" && self.board2[4].img==="images/o.jpeg" && self.board2[6].img==="images/o.jpeg")) {
				alert("O wins. Play again!");
				for (i = 0; i < 9; i++) {
					self.board1[i].img = "images/white.png";
					self.board2[i].img = "images/white.png";
				}
			}

			else if ((self.board2[0].img!=="images/white.png" && self.board2[1].img!=="images/white.png" && self.board2[2].img!=="images/white.png" &&
				self.board2[3].img!=="images/white.png" && self.board2[4].img!=="images/white.png" && self.board2[5].img!=="images/white.png" &&
				self.board2[6].img!=="images/white.png" && self.board2[7].img!=="images/white.png" && self.board2[8].img!=="images/white.png")) {
				alert("Tie game.Play again!");
				for (i = 0; i < 9; i++) {
					self.board1[i].img = "images/white.png";
					self.board2[i].img = "images/white.png";
				}
			}
		}
	}










	// if (img === true) {
					
				// }else


