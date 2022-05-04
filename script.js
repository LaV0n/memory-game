var cards = document.querySelectorAll('.memory-card');
var count = 0;
var clicks = 0;
let tableList = ["10","20","30","40","50","60","70","80","90","95","98"];


     let hasFlippedCard = false;
     let firstCard, secondCard;
     let lockBoard = false;

     function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        this.classList.add('flip');

       if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
        return;
       }
    
      secondCard = this;
       clicks++;
          
       checkForMatch();
     }
    
     function checkForMatch() {
       if (firstCard.dataset.framework === secondCard.dataset.framework) {
         disableCards();
         return;
       }
       unflipCards();
     }
    
     function disableCards() {
       firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
       count++;
       resetBoard();
       if (count === 10) result();
     }
    
     function unflipCards() {
        lockBoard = true;
       setTimeout(() => {
         firstCard.classList.remove('flip');
         secondCard.classList.remove('flip');
         resetBoard();
       }, 1000);
     }
    
     function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
      }

      (function shuffle() {
        cards.forEach(card => {
          let ramdomPos = Math.floor(Math.random() * 12);
          card.style.order = ramdomPos;
        });
      })();
      
        function shuffle() {
        cards.forEach(card => {
          let ramdomPos = Math.floor(Math.random() * 12);
          card.style.order = ramdomPos;
        });
      }
      

      function result (){
        let x= document.getElementById("winner");
        x.style.visibility = "visible";
        list(clicks);
        
        document.getElementById("storeCount").innerHTML = clicks;
        document.getElementById("table").innerHTML = tableList.slice(0,10).join("<br/>");
      }

      function restart(){
        shuffle();
        let x= document.getElementById("winner");
        x.style.visibility = "hidden";
        clicks = 0;
        count = 0;
        cards.forEach( card => card.addEventListener('click',flipCard));
        cards.forEach(card => card.classList.remove('flip'));
      }

      function list (x){
        tableList.push(x);
        tableList.sort((a,b) => a-b);
        return tableList;
        }

    cards.forEach( card => card.addEventListener('click',flipCard));