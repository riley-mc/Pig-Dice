//Business Logic For Dice Roll









































































// function Player() {
//   this.turnScore = 0;
//   this.scoreTotal = 0;
//   this.scoreTotal2 = 0;
// }

// generateNumber = function() {
//   var numberVal = Math.floor( Math.random() *6) + 1;
//   return numberVal;
// }

// Player.prototype.rollDice = function() {
//   let roll = generateNumber();
//   if (roll !=1) {
//     return this.turnScore += roll;
//   } else if (roll = 1)  {
//     $(".rollBtn").toggle();
//     $(".rollBtn2").toggle();
//     $(".hold").toggle();
//     $(".hold2").toggle();

//     return this.turnScore *= 0;
//     }
//   }
// // Player.prototype.holdTransfer = function() {
// //   if (this.scoreTotal + this.turnScore >= 100) {
// //     alert("PLAYER 1 WINS!!!");
// //   } else {
// //     return this.scoreTotal += this.turnScore;
// //   }
// // }

// Player.prototype.clearTurnScore = function()  {
//   this.turnScore *=0;
//   return this.turnScore;
// }
// // player2
// Player.prototype.holdTransfer2 = function() {
//   if (this.scoreTotal2 + this.turnScore >= 100)  {
//     alert("PLAYER 2 WINS!");
//   }
//   return this.scoreTotal2 += this.turnScore;
//  }

// Player.prototype.clearTurnScore2 = function() {
//  this.turnScore *=0;
//  return this.turnScore;
// }


// // User Interface

// let turn = new Player; 

// //player 1
// $(document).ready(function() {
//   $(".rollBtn").click(function(){
//     var result = turn.rollDice();
//     $("#p1turn-total").text(result);
//   });
//   $(".hold").click(function() {
//     let result2 = turn.holdTransfer();
//     let result3 = turn.clearTurnScore();

//     $(".hold").toggle();
//     $(".hold2").toggle();
//     $(".rollBtn").toggle();
//     $(".rollBtn2").toggle();

//     $("p1score-total").text(result2);

//     $("p1turn-total").text(result3);
//   });

// //player 2
// // $(".rollBtn2").click(function() {
// //   var result = turn.diceRoll();
// //   $("#p2turn-total").text(result);
// // });
// // $(".hold2").click(function(){
// //   var result2 = turn.holdTransfer2();
// //   var result3 = turn.clearTurnScore2();
// //   $("#p2score-total").text(result2);
// //   $("#p2turn-total").text(result3);
// //   $(".hold").toggle();
// //   $(".hold2").toggle();
// //   $(".rollBtn").toggle();
// //   $(".rollBtn2").toggle();
// // });

// });