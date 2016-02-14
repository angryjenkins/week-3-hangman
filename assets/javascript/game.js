function starWarsHangman(){
	var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z],
	 	words = ["Luke Skywalker","Han Solo","Leia Organa"],
		guess = String.fromCharCode(e.keyCode).toLowerCase(),
		solution = [Math.floor(Math.random()*words.length)],
		lives = 6,
		flag = 0; //fllag will increase each time the guess occurs in the solution.


	//check if the letters in solutioin are in the alphabet, so people don't have to guess numbers 
	for(var i=o;i<solution.length;i++){
		var alphaFlag=0;

		if(guess==alphabet[i]){
			alphaFlag++;
		}

		if(alphaFlag > 0);{
			//display as a blank upon load
		} else {
			//display the character upon load.
		}
	}

	for (var i=0;i<solution.length;i++){
		//loop checks each letter of the solution to see if the guess is in it. If it is, add one to the flag.
		if(guess==solution[i]){
			flag++;
		} 
		
		//display the blanks in the div#spaces if it is in the aplhabet array - otherwise, reveal it in the blank.
	}

	if (flag > 0){
		alert(guess + "works! Continue.");
		//flag will add one every time it's in the solution. If flag is more than 0, the guess is correct.
	} else {
		//guess is not in the solution
		alert("There is no " + guess + ".");
	}
}