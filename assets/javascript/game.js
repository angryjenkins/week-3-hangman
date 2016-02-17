function starWarsHangman(){
	var words = ["han solo","luke skywalker","tatooine","jedi","chewbacca","jakku","sith","lightsaber","blaster","alderaan","starkiller","kylo ren","stormtrooper","maz kanata","jabba the hutt","lando calrissian","emperor palpatine","princess leia organa","naboo","jar jar binks","gungan","hoth","rebels","poe dameron","tie fighter","darth vader","coruscant","darth maul","yoda","ki-adi mundi","kit fisto","plo koon","obi-wan kenobi","mace windu","padme amidala","wookie","ewok","jawa","rancor","greedo","george lucas","grand moff tarkin","general hux","empire","republic","resistance","first order","general grievous","captain phasma","the force awakens","a new hope","revenge of the sith","return of the jedi","the phantom menace","the clone wars","the empire strikes back","death star","midi-chlorians","star destroyer","count dooku","qui-gon jinn","supreme leader snoke","lor san tekka","endor","pod racer","x-wing starfighter","boba fett","mos eisley","cloud city"]; 
		//above is a wordlist of star wars-related answers.
		
		solution = words[Math.floor(Math.random()*words.length)];
		reveal = [];
		guessed = [];
		right = [];
		lives = 6;
		
		showLives = document.getElementById("lives");
		showGame = document.getElementById("gameDisplay");
		showGuessed = document.getElementById("guessed");
		showLastGuess = document.getElementById("lastGuess");
		showStatus = document.getElementById("gameStatus");
		showGuessCheck = document.getElementById("letterCheck");
		loseAudio = new Audio('assets/audio/no.mp3');
		winAudio = new Audio('assets/audio/greatshot.mp3');
		replay = document.getElementById("replay");

		//check if the letters in solution are in the alphabet, so people don't have to guess numbers/hyphens/spaces

	 	alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	        't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// render the game, substituting letters to guess with "_"      
	for(var i=0;i<solution.length;i++){
		if (alphabet.indexOf(solution[i]) == -1){
			reveal.push(solution[i]);
		} else {
			reveal.push("_");
		}
	}

	replay.className = "hidden";

	//show t\he game display with spaces and hyphens.
	showGame.innerHTML = reveal.join("");

	console.log("Game Rendered!");

	//play the game

	document.onkeyup = function(event) {
		var guess = String.fromCharCode(event.keyCode).toLowerCase();

		if(guessed.indexOf(guess) != -1){
			showStatus.innerHTML = "You have already guessed " + guess +". Try again.";
			//answer has been rpeviously guessed. Notify player to try again.
		} else { 
			//answer has not been guessed already. Resume the game.
			showStatus.innerHTML = "";
			guessed.push(guess);
			showLastGuess.innerHTML = guess;
			showGuessed.innerHTML = guessed.join(" &middot; ");

			if (solution.indexOf(guess) == -1){
				//guess is not in solution. take a lihfe, add guess to werong array. Continue 
				lives--;
				showLives.innerHTML = lives;
				showGuessCheck.innerHTML = "<span class='text-danger'>There is no " + guess + ".</span>";

				if(lives < 1){
					showStatus.innerHTML = "You lose! Game over, bro.";
					showGame.innerHTML = "<span class=text-danger>" + solution+ "</span>"
					loseAudio.play();
					replay.className = "text-center";
					console.log("Game Over :(");
				} else {
				//guess is in the solution. Reveal the solution with the correct guess.
				}
		
			} else {
				//correct guess. Display letter in the game.
				showLives.innerHTML = lives;
				showGuessCheck.innerHTML = "<span class='text-success'>" + guess + " works!</span>";
				right.push(guess);

				//replace "guess" in the reveal array at proper keys. PROBLEM - only replacing one instance.
				for(i=0;i<solution.length;i++){
					if(solution[i] == guess){
						reveal[i] = guess;
					}
				}

				showGame.innerHTML = reveal.join("");

				if(reveal.indexOf("_") == -1){
					showStatus.innerHTML = "You got it! You sure know your Star Wars, ... nerd.";
					showGame.innerHTML = "<span class=text-success>" + solution + "</span>";
					winAudio.play();
					replay.className = "text-center";
					console.log("You win!");
				}
			}
		}
	}
}

window.onLoad = starWarsHangman();