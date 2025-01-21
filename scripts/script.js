var word1 = "CODING";
var word2 = "PC";

var player1WrongGuesses = 0;
var player2WrongGuesses = 0;

var word1hidden = "";
for (let i = 0; i < word1.length; i++) {
    word1hidden += "_ ";
}

var word2hidden = "";
for (let i = 0; i < word2.length; i++) {
    word2hidden += "_ ";
}

document.getElementById("player1word").innerText = word1hidden;
document.getElementById("player2word").innerText = word2hidden;


Guess = (event) => {
    event.preventDefault();

    if(event.target.id == "player1form"){
        if(word2.includes(document.getElementById("player1guess").value)){
            console.log("hej");
        }else{
            if(player1WrongGuesses == 5){
                document.getElementById("player2guesses").innerHTML += " Spelare 1 förlorade"
            } else{
                player1WrongGuesses++;
                document.getElementById("player2guesses").innerHTML += document.getElementById("player1guess").value;
                document.getElementById("player2img").src = `/images/${player1WrongGuesses + 1}.png`;
            }
        }
        document.getElementById("player1guess").value = "";

    } else if(event.target.id == "player2form"){
        if(word2.includes(document.getElementById("player2guess").value)){
            console.log("hej");
        }else{
            if(player2WrongGuesses == 5){
                document.getElementById("player1guesses").innerHTML += " Spelare 2 förlorade"
            } else{
                player2WrongGuesses++;
                document.getElementById("player1guesses").innerHTML += document.getElementById("player2guess").value;
                document.getElementById("player1img").src = `/images/${player2WrongGuesses + 1}.png`;
            }
        }
        document.getElementById("player2guess").value = "";
    }
}