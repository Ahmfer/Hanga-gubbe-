document.addEventListener("DOMContentLoaded", function(){
const newGameButton = document.getElementById('newGame');

newGameButton.addEventListener('click', newGameFunction);
//List with words
const wordList =["SOL", "BOK", "HUS", "BIL", "TRÄD", "VATTEN", "GLAS", "STOL", "KATT", "HUND", 
    "LISTA", "DATOR","BÅT", "PENNA", "BORD", "HAV", "MOLN", "DATOR", "SKED", "BUSS", "FILM",  
    "LJUS", "VÄGG", "TÅG", "LINJE", "GRÄS", "KAKA", "SKO", "FISK", "LAMPA", "KLOCKA", 
    "MAT", "FRUKT", "TALL", "BOLL", "VÄSKA", "RÖK", "BÄNK", "KNIV", "SKÅL", "TAK", "DOKTOR",
     "VÄG",  "HJUL", "FLAGGA", "SÄNG", "KOPP", "LUFT"];

newGameFunction();

function newGameFunction (){
    var player1WrongGuesses = 0;
    var player2WrongGuesses = 0;

     document.getElementById("player2guesses").innerHTML = "";  //Empty guesses from last game
     document.getElementById("player1guesses").innerHTML = "";  //Empty guesses from last game
     document.getElementById("player1guess").disabled = false;  //Enables input field
     document.getElementById("player2guess").disabled = false;  //Enables input field
     document.getElementById("Player1").innerHTML = "Spelare 1"; //Removes 'Win/Lose'
     document.getElementById("Player2").innerHTML = "Spelare 2"; //Removes 'Win/Lose'
     document.getElementById("player1img").src = `/images/${player1WrongGuesses + 1}.png`;  //Start picture
     document.getElementById("player2img").src = `/images/${player1WrongGuesses + 1}.png`;  //Starat picture

    
    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    };

    let max = wordList.length;

    //Random words
    let word1 = wordList[getRandomInt(max)];
    let word2 = wordList[getRandomInt(max)];
    console.log(word1 +" " + word2);
    
    
    
    var word1hidden = "";
    for (let i = 0; i < word1.length; i++) {
        word1hidden += "_ ";
    }
    
    var word2hidden = "";
    for (let i = 0; i < word2.length; i++) {
        word2hidden += "_ ";
    }
    
    let guessedLetter = "";

    document.getElementById("player1word").innerText = word1hidden;
    document.getElementById("player2word").innerText = word2hidden;

    
    
    Guess = (event) => {
        event.preventDefault();

    
        if(event.target.id == "player1form"){
            guessedLetter = document.getElementById("player1guess").value;
            guessedLetter = guessedLetter.toUpperCase();
            console.log (guessedLetter)
            if(word2.includes(guessedLetter)){
                for (let i = 0; i < word2.length; i++) {
                    if (word2[i] == guessedLetter) {
                        console.log(i);
                    
                        // Split word2hidden into an array for easy modification
                        let hiddenArray = word2hidden.split("");
                    
                        hiddenArray[i * 2] = guessedLetter;
                    
                        word2hidden = hiddenArray.join("");

                        document.getElementById("player2word").innerText = word2hidden;
                    }            
                }
                //If word doesent contain any udnerscore, end game
                if(!(word2hidden.includes("_"))){
                    
                    document.getElementById("Player1").innerHTML += " VINNER";
                    document.getElementById("player1guess").disabled = true;
                    document.getElementById("player2guess").disabled = true;
                }
            }else{
                if(player1WrongGuesses == 5){
                    
                    document.getElementById("Player1").innerHTML += " FÖRLORADE";
                    document.getElementById("player1guess").disabled = true;
                    document.getElementById("player2guess").disabled = true;
                } else{
                    player1WrongGuesses++;
                    document.getElementById("player2guesses").innerHTML += guessedLetter;
                    document.getElementById("player2img").src = `/images/${player1WrongGuesses + 1}.png`;
                }
            }
            document.getElementById("player1guess").value = "";
    
        } else if(event.target.id == "player2form"){
            guessedLetter = document.getElementById("player2guess").value;
            guessedLetter = guessedLetter.toUpperCase();
            console.log(guessedLetter);

            if(word1.includes(guessedLetter)){
                for (let i = 0; i < word1.length; i++) {
                    if (word1[i] == guessedLetter) {                    
                        // Split word2hidden into an array for easy modification
                        let hiddenArray = word1hidden.split("");
                    
                        hiddenArray[i * 2] = guessedLetter;
                    
                        word1hidden = hiddenArray.join("");
                        document.getElementById("player1word").innerText = word1hidden;
                    }            
                }
                //If word doesent contain any udnerscore, end game
                if(!(word1hidden.includes("_"))){
                    
                    document.getElementById("Player2").innerHTML += " VINNER";
                    document.getElementById("player1guess").disabled = true;
                    document.getElementById("player2guess").disabled = true;
                }            
            }else{
                if(player2WrongGuesses == 5){
                    
                    document.getElementById("Player2").innerHTML += " FÖRLORADE";
                    document.getElementById("player1guess").disabled = true;
                    document.getElementById("player2guess").disabled = true;
                } else{
                    player2WrongGuesses++;
                    document.getElementById("player1guesses").innerHTML += document.getElementById("player2guess").value;
                    document.getElementById("player1img").src = `/images/${player2WrongGuesses + 1}.png`;
                }
            }
            document.getElementById("player2guess").value = "";
        }
    }
}})
