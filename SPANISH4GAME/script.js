//document.addEventListener("DOMContentLoaded", () =>{
    //creating a list of pairs with all the vocabulary
    const pairs = [
        {word: "la masculinidad", match: "masculinity"},
        {word: "la femeninidad", match: "femininity"},
        {word: "la identidad", match: "identity"},
        {word: "la doble moral", match: "double standard"},
        {word: "la ley", match: "the law"},
        {word: "la sexualidad", match: "sexuality"},
        {word: "el papel", match: "the role"},
        {word: "el comportamiento", match: "behavior"},
        {word: "el genero", match: "gender"},
        {word: "el estereotipo", match: "stereotype"},
        {word: "la expectativa", match: "the expectation"},
        {word: "la norma", match: "the norm"},
        {word: "la (des)igualdad", match: "(in)equality"},
        {word: "el espectro", match: "the spectrum"},
        {word: "el pronombre", match: "pronoun"},
        {word: "la perfección", match: "perfection"},
        {word: "la opresión", match: "opression"},
        {word: "la pureza", match: "purity"},
        {word: "la libertad", match: "freedom"},
        {word: "los vicios", match: "bad habits"},
        {word: "darse cuenta", match: "realize"},
        {word: "socavar", match: "undermine"},
        {word: "apoyar", match: "to support"},
        {word: "ocuparse de", match: "to be in charge of/responsible for"},
        {word: "oprimir a", match: "to opress"},
        {word: "suponer", match: "to assume"},
        {word: "expresar", match: "to express"},
        {word: "desafiar", match: "to defy"},
        {word: "identificarse (como)", match: "to assume"},
        {word: "ajustarse a", match: "to conform to"},
        {word: "purificarse", match: "to purify"},
        {word: "reflexionar", match: "to to reflect"},
        {word: "sufrir", match: "to suffer"},
        {word: "seducir", match: "to seduce"},
        {word: "feminista", match: "feminist"},
        {word: "fludio/a", match: "fluid"},
        {word: "gay", match: "gay"},
        {word: "(no) binario/a", match: "(non) binary"},
        {word: "dócil", match: "docile"},
        {word: "ideal", match: "ideal"},
        {word: "sexista", match: "sexist"},
        {word: "doméstico/a", match: "domestic"},
    ];
    
    let cards = document.getElementsByClassName("item");
    console.log(cards);
    let Score = 0;
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


//Making sure that the user has the option to choose whether or not it is timed
function timeChanged() {
    console.log(document.getElementById("tim").value);
    
    if(document.getElementById("tim").value == "timed"){
        document.getElementById("Timer2").style.color = "black";
    }
    
    else{
        document.getElementById("Timer2").style.color = "transparent";
    }
}
    
    function shuffleAssign() {
        
        //shuffle list of pairs
    //cardPairs = shuffleArray(cardPairs);
        
        //iterate over that array to assign cards
        
        let shuffledPairs = shuffleArray(pairs);
        console.log(shuffledPairs);
        
        //create a new array for selected paris this round
        let cardPairs = [];
        
        //randomly select 20 our of the total that you have//
        for(let i = 0; i < cards.length/2; i++){
            cardPairs.push(shuffledPairs[i].word);
            cardPairs.push(shuffledPairs[i].match);
        }
        
        console.log(cardPairs);
        
         //shuffle that array
        cardPairs = shuffleArray(cardPairs);
        
        for (let i = 0; i < cardPairs.length; i++){
            cards[i].innerText = cardPairs[i];
            cards[i].onclick = isClicked;
        }
    }
        
        
    
    //what happens when the card is clicked
        function isClicked(e){
            
            let cardClicked = e.srcElement;
            cardClicked.classList.add("clicked");
            let clicked = document.getElementsByClassName("clicked");
            if(clicked.length == 2){
                //look for a match
                if(isMatch(clicked[0].innerText, clicked[1].innerText)){
                    clicked[0].style.backgroundColor = "green";
                    clicked[1].style.backgroundColor = "green";
                    
                    clicked[0].disabled = "true";
                    clicked[1].disabled = "true";
                    
                    clicked[0].classList.remove("clicked");
                    clicked[0].classList.remove("clicked");
                    
                    Score = Score+1;
                    document.getElementById("Score").innerText = Score;
                }
                
                else {
                    clicked[0].style.backgroundColor = "red";
                    clicked[1].style.backgroundColor = "red";
                    setTimeout(function () {
                        clicked[0].style.backgroundColor = "";
                        clicked[1].style.backgroundColor = "";
                        clicked[0].classList.remove("clicked");
                        clicked[0].classList.remove("clicked");
 
                    }, 1000);
                    
                }
            }
            console.log(cardClicked);
        }
    
    
//setting a timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
    
    
    
    //setting timer to three minutes
function start() {
    alert("Match each spanish word to the corresponding english translation. If you match correctly, it will pop up as green. If you match incorrectly, it will pop up as red for exactly one second, before going back to the usual color. If you hover over the card, it will show a light blue color, and if you select it, it will show a dark blue color. Press the “Start Game” button to start the timer. Also, if you would like for it to be timed, select “Timed”, and if you would not like for it to be timed, select “Untimed”. If you would like to restart the game, reload the page. Have fun!");
    var threeMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(threeMinutes, display);
}

//<select onchange="myFunction()">

    
        function isMatch(item1, item2){
            for(let i =0; i < Object.keys(pairs).length; i++){
                if(item1 == pairs[i].word && item2 == pairs[i].match){
                    return true;
                }
                if(item2 == pairs[i].word && item1 == pairs[i].match){
                    return true;
                }
        }
            return false;
        }
    
    
    shuffleAssign();
//});



//make sure that the 20 which are slected are shuffled appropriately
//import random maybe?