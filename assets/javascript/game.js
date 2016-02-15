
var game = {};
 	game.words = ["han solo","luke skywealker","tatooine"];//this is a wordlist of star wars-related answers.
	game.solution = game.words[Math.floor(Math.random()*game.words.length)];
	game.printAnswer = [];
	game.right = [];
	game.wrong = [];
	game.lives = 6;
	

//check if the letters in solutioin are in the alphabet, so people don't have to guess numbers 

function renderGame(){
	//check solution for special characters.
	console.log("Game Rendered!");
 	var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

	for(var i=0;i<game.solution.length;i++){

		if (alphabet.indexOf(game.solution[i]) == -1){
			//display a blank.
		} else {
			//display the letter.
		}
	}
}

//play the game

document.onkeyup = function(event) {
	var guess = String.fromCharCode(event.keyCode).toLowerCase();
	if(game.right.indexOf(guess) != -1 || game.wrong.indexOf(guess) != -1){
		//answer has been rpeviously guessed. Notify player to try again.
	} else {
		//answer has not been guessed already. Resume the game.
		if (game.solution.indexOf(guess) == -1){
			game.lives--;
			if(game.lives == 0){
				
			}
			//guess is not in solution. take a life, add guess to werong array.
		} else {
			//correct guess. Display letter in the game. 
		}
	}
}

