//Business Logic

function Player() {
  this.turnScore = 0;
  this.scoreTotal = 0;
  this.scoreTotal2 = 0;
}

generateNumber = function() {
  let numberVal = Math.floor( Math.random() *6) + 1;
  return numberVal;
}

Player.prototype.rollDice = function() {
  let roll = generateNumber();
  if (roll !=1) {
    return this.turnScore += roll;
  } else if (roll = 1)  {
    // $(".rollBtn").toggle();
    // $(".rollBtn2").toggle();
    // $(".hold").toggle();
    // $(".hold2").toggle();

    return this.turnScore *= 0;
    }
  }
//Player 1
Player.prototype.holdTransfer = function() {
    if (this.scoreTotal + this.turnScore >= 100)  {
    alert("PLAYER 1 WINS!");
  } else {
    return this.scoreTotal += this.turnScore;
  }
}


Player.prototype.clearTurnScore = function()  {
  this.turnScore *=0;
  return this.turnScore;
}

//Player 2




// User Interface

let turn = new Player; 

//Player 1
$(document).ready(function() {
  $(".rollBtn").click(function(){
  var result = turn.rollDice();
  $("#p1turn-total").text(result);
  });
  $(".hold").click(function() {
    let result2 = turn.holdTransfer();
    let result3 = turn.clearTurnScore();
    $("p1score-total").text(result2);
    $("p1turn-total").text(result3);
    // $(".hold").toggle();
    // $(".hold2").toggle();
    // $(".rollBtn").toggle();
    // $(".rollBtn2").toggle();
    

//Player 2
    
  });

});





// let player1 = "Player 1";
// let player2 = "Player 2";

// function nameInput () {
//   player1 = prompt("Change Player 1 name");
//   player2 = prompt("Change Player 2 name");

//   document.querySelector("p.Player1").innerHTML = player1;
//   document.querySelector("p.Player2").innerHTML = player2;
// } 


