var board = [[null,null,null],
              [null,null,null],
              [null,null,null]];

var playerTurn = 'X';

var winner = false;

function positionState(row, column) {
  return (board[row][column]);
};

function printBoard (){
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  console.log('************');
};

function setValue(row, column) {
  board[row][column] = playerTurn;
  printBoard();
};

function ticTacToe(boardcheck) {
    if(boardcheck[0].join('') === 'OOO' || boardcheck[0].join('') === 'XXX'){
        alert((boardcheck[0][0])+ 'is the winner!');
        winner = true;
    }else if(boardcheck[1].join('') === 'OOO' || boardcheck[1].join('') === 'XXX'){ 
         alert(boardcheck[1][0] + 'is the winner!');
         winner = true;     
    }else if(boardcheck[2].join('') === 'OOO' || boardcheck[2].join('') === 'XXX'){
         alert(boardcheck[2][0]+ 'is the winner');
         winner = true;
    }else if(boardcheck[0][0] === boardcheck[1][0] && boardcheck[0][0]===boardcheck[2][0] && boardcheck[0][0] !== null){
        alert(boardcheck[0][0]+ 'is the winner');
        winner = true;
    }else if(boardcheck[0][1]=== boardcheck[1][1] && boardcheck[0][1]===boardcheck[2][1] && boardcheck[0][1] !== null){
        alert(boardcheck[0][1]+ 'is the winner');
        winner = true;
    }else if (boardcheck[0][2] === boardcheck[1][2] && boardcheck[0][2]===boardcheck[2][2] && boardcheck[0][2] !== null){
        alert(boardcheck[0][2]+ 'is the winner'); 
        winner = true;
    }else if (boardcheck[0][0] === boardcheck[1][1] && boardcheck[0][0] === boardcheck[2][2] && boardcheck[2][2] !== null){
        alert(boardcheck[0][0]+ 'is the winner');
        winner = true;
    }else if (boardcheck[0][2] === boardcheck[1][1] && boardcheck[0][2] === boardcheck[2][0] && boardcheck[1][1] !== null) {
        alert(boardcheck[0][2]+ 'is the winner');
        winner = true;    
    }else if(board[0].includes(null) !== true && board[1].includes(null) !== true && board[2].includes(null) !== true){
        alert('No one wins!');
        winner = true;
    }
    }      



function placementChoice() {
var rowChoice = Number(prompt("Where to place row? "));
var colChoice = Number(prompt("Where to place col? "));
if (positionState(rowChoice, colChoice) === null){
setValue(rowChoice,colChoice);
if(playerTurn === 'X'){
  playerTurn = 'O';
}else if(playerTurn === 'O'){
  playerTurn = 'X';
}
}else{
  alert("Youre a jerk!");
}
};

while(winner == false){
 placementChoice();
 ticTacToe(board);
};
