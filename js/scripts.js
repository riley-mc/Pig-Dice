//Business Interface
function rollDice () {
  dice = parseInt(Math.floor(Math.random() *6)) + 1;
  if (dice > 1) {
  return dice;
  } else if (dice = 1 ) {
    return 0 
   }
  }
  //document.getElementById("roll").onclick = rollDice();


//User Interface
$(document).ready(function() {
  $("#roll").click(function(){
    $("#p1turn-total").text(function(){
      return dice 
    });
  });
  $("#roll2").click(function(){
    $("#p2turn-total").text(function(){
      return dice
    });
  });
});