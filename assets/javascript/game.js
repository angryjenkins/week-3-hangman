function starWarsHangman(){
	var words = ["han solo","luke skywalker","tatooine","jedi","chewbacca","jakku","sith"]; //this is a wordlist of star wars-related answers.
		solution = words[Math.floor(Math.random()*words.length)];
		reveal = [];
		guessed = [];
		wrong = [];
		right = [];
		lives = 6;
		
		showLives = document.getElementById("lives");
		showGame = document.getElementById("gameDisplay");
		showGuessed = document.getElementById("guessed");
		showLastGuess = document.getElementById("lastGuess");
		showStatus = document.getElementById("gameStatus");
		showGuessCheck = document.getElementById("letterCheck");
		loseAudio = new Audio('aassets/audio/no.mp3');

		//check if the letters in solutioin are in the alphabet, so people don't have to guess numbers 

	 	alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	        't', 'u', 'v', 'w', 'x', 'y', 'z'];


	for(var i=0;i<solution.length;i++){

		if (alphabet.indexOf(solution[i]) == -1 || right.indexOf(solution[i]) != -1){
			reveal.push(solution[i]);
		} else {
			reveal.push("_");
		}
	}

	//show t\he game display with spaces and hyphens.
	showGame.innerHTML = reveal.join("");

	console.log("Game Rendered!");

	//play the game

	document.onkeyup = function(event) {
		var guess = String.fromCharCode(event.keyCode).toLowerCase();
		showLastGuess.innerHTML = guess;

		if(guessed.indexOf(guess) != -1){
			showStatus.innerHTML = "You have already guessed " + guess +". Try again.";
			//answer has been rpeviously guessed. Notify player to try again.
		} else { 
			//answer has not been guessed already. Resume the game.
			showStatus.innerHTML = "";
			guessed.push(guess);
			showLastGuess.innerHTML = guess;
			showGuessed.innerHTML = guessed;

			if (solution.indexOf(guess) == -1){
				//guess is not in solution. take a life, add guess to werong array. Continue 
				lives--;
				showLives.innerHTML = lives;

				if(lives < 1){
					showStatus.innerHTML = "You have run out of lives. The game is over.";
					showGame.innerHTML = "<span class=text-danger>" + solution+ "</span>"
				} else {
				//guess is in the solution. Reveal the solution with the correct guess.
					
				}
		
			} else {
				//correct guess. Display letter in the game.
				showLives.innerHTML = lives;
				showGuessCheck.innerHTML = guess + " works!";
				right.push(guess);
				showGame.innerHTML = reveal.join("");
			}
		}
	}
}

window.onLoad = starWarsHangman();