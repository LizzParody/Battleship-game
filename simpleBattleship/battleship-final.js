var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;

while(isSunk == false){
	guess = prompt("Enter a number from 0 to 6");
	if(guess < 0 || guess > 6){
		alert("Please enter a valid input");
	} else {
		guesses += 1;
		if(guess == location1 || guess == location2 || guess == location3){
			alert("Hit!");
			hits += 1;
			if(hits == 3){
				alert("You sank my battleship");
				isSunk = true;
			}
		} else {
			alert("Miss!");
		}
	}
}

stats = "You sank my battleship in " + guesses + " guesses. That's an accuracy of " +
guesses/3;
alert(stats);
