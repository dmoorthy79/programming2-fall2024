document.addEventListener("DOMContentLoaded", () =>{
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
        {word: "el estereotipo", match: "stereotype"}
    ];
    
    let cards = document.getElementsByClassName("item");
    console.log(cards);
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function shuffleAssign() {
        //shuffle list of pairs
    //cardPairs = shuffleArray(cardPairs);
        
        //iterate over that array to assign cards
        
        let shuffledPairs = shuffleArray(pairs);
        console.log(shuffledPairs);
        
        //create a new array for selected paris this round
        let cardPairs = [];
        
        //take the first cards.length/2 pairs (word and match) to the new array
        for(let i = 0; i < cards.length/2; i++){
            cardPairs.push(shuffledPairs[i].word);
            cardPairs.push(shuffledPairs[i].match);
        }
        
        console.log(cardPairs);
        
        cardPairs = shuffleArray(cardPairs);
        
        for (let i = 0; i < cardPairs.length; i++){
            cards[i].innerText = cardPairs[i];
            cards[i].onclick = isClicked;
        }
    }
        
        
        //suffle that array
    
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
                }
                
                else {
                    clicked[0].classList.remove("clicked");
                    clicked[0].classList.remove("clicked");
                }
            }
            console.log(cardClicked);
        }
    
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
});


//randomly select 20 our of the total that you have//
//make sure that the 20 which are slected are shuffled appropriately
//import random maybe?