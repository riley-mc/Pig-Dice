//Business Logic For Dice Roll

function rollDice () {
return Math.floor(Math.random() *6) + 1;
}

function Player() {
  this.turnScore = 0;
  this.scoreTotal = 0;
  this.scoreTotal2 = 0;
}

generateNumber = function() {
  var numberVal = Math.floor( Math.random() *6) + 1;
  return numberVal;
}

Player.prototype.rollDice = function() {
  let roll = generateNumber();
  if (roll !=1) {
    return this.turnScore += roll;
  } else if (roll = 1)  {
    $(".roll").toggle();
    $(".roll2").toggle();
    $(".hold").toggle();
    $(".hold2").toggle();

    return this.turnScore *= 0;
    }
  }
Player.prototype.holdTransfer = function() {
  if (this.scoreTotal + this.turnScore >= 100) {
    alert("PLAYER 1 WINS!!!");
  } else {
    return this.scoreTotal += this.turnScore;
  }
}

Player.prototype.clearTurnScore = function()  {
  this.turnScore *=0;
  return this.turnScore
}


// User Interface

//player 1
$(document).ready(function() {
  $("#roll").click(function(){
    var result = turn.rollDice();
    $("$p1turn-total").text(result);
  });
  $(".hold").click(function() {
    let result2 = turn.holdTransfer();
    let result3 = turn.clearTurnScore();

    $(".hold").toggle();
    $(".hold2").toggle();
    $(".roll").toggle();
    $(".roll2").toggle();

    $("p1score-total").text(result2);

    $("p1turn-total").text(result3);
  });




});



//player 2

