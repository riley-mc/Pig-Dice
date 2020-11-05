//Business Interface
let player1 = "Player 1";
let player2 = "Player 2";

function nameInput () {
  player1 = prompt("Change Player 1 name");
  player2 = prompt("Change Player 2 name");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
} 
function rollDice () {
  dice = parseInt(Math.floor(Math.random() *6)) + 1;
  if (dice > 1) {
  return dice;
  } else if (dice = 1 ) {
    return 0 
  }
}
  

Player.prototype.addRolls = function() rollDice() 
Player.prototype.clearTurnScore = function()  {
  this.turnScore *=0;
  return this.turnScore;
}

//User Interface
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



















//document.getElementById("roll").onclick = rollDice();


// $(document).ready(function() {
//   $("#roll").click(function(){
//     $("#p1turn-total").text(function(){
//       return dice 
//     });
//   });
//   $("#roll2").click(function(){
//     $("#p2turn-total").text(function(){
//       return dice
//     });
//   });
// });