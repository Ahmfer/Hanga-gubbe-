document.addEventListener("DOMContentLoaded", function(){
    //Might wanna make this dynamic
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
                for (let i = 0; i < word2.length; i++) {
                    if (word2[i] == document.getElementById("player1guess").value) {
                        console.log(i);
                    
                        // Split word2hidden into an array for easy modification
                        let hiddenArray = word2hidden.split("");
                    
                        hiddenArray[i * 2] = document.getElementById("player1guess").value;
                    
                        word2hidden = hiddenArray.join("");

                        document.getElementById("player2word").innerText = word2hidden;
                    }            
                }
                //If word doesent contain any udnerscore, end game
                if(!(word2hidden.includes("_"))){
                    document.getElementById("player2guesses").innerHTML += " Spelare 1 vann!"
                }
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
            if(word1.includes(document.getElementById("player2guess").value)){
                for (let i = 0; i < word1.length; i++) {
                    if (word1[i] == document.getElementById("player2guess").value) {                    
                        // Split word2hidden into an array for easy modification
                        let hiddenArray = word1hidden.split("");
                    
                        hiddenArray[i * 2] = document.getElementById("player2guess").value;
                    
                        word1hidden = hiddenArray.join("");
                        document.getElementById("player1word").innerText = word1hidden;
                    }            
                }
                //If word doesent contain any udnerscore, end game
                if(!(word1hidden.includes("_"))){
                    document.getElementById("player1guesses").innerHTML += " Spelare 2 vann!"
                }            
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
})