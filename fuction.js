// Setting DOM on the Input box
const game = () => {  
// 1st Row
const tile1Input = document.getElementById('tile1');
const tile1Val = document.getElementById('tile1').value;
const tile2Input = document.getElementById('tile2');
const tile2Val = document.getElementById('tile2').value;
const tile3Input = document.getElementById('tile3');
const tile3Val = document.getElementById('tile3').value;
// 2nd Row
const tile4Input = document.getElementById('tile4');
const tile4Val = document.getElementById('tile4').value;
const tile5Input = document.getElementById('tile5');
const tile5Val = document.getElementById('tile5').value;
const tile6Input = document.getElementById('tile6');
const tile6Val = document.getElementById('tile6').value;
// 3rd Row
const tile7Input = document.getElementById('tile7');
const tile7Val = document.getElementById('tile7').value;
const tile8Input = document.getElementById('tile8');
const tile8Val = document.getElementById('tile8').value;
const tile9Input = document.getElementById('tile9');
const tile9Val = document.getElementById('tile9').value;

if ((tile1Val === 'x' || tile1Val === 'X') && (tile2Val === 'x' || tile2Val === 'X') && (tile3Val === 'x' || tile3Val === 'X')) {
  // Check if Player x has won or not yet

  document.getElementById('winner').innerHTML = 'Player X won';

  tile4Input.disabled = true;
  tile5Input.disabled = true;
  tile6Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;
  tile9Input.disabled = true;

  tile1Input.style.color = 'orange';
  tile2Input.style.color = 'orange';
  tile3Input.style.color = 'orange';

} else if ((tile1Val === 'x' || tile1Val === 'X') && (tile4Val === 'x' || tile4Val === 'X') && (tile7Val === 'x' || tile7Val === 'X')){

  document.getElementById('winner').innerHTML = 'Player X won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile3Input.disabled = true;
  tile4Input.disabled = true;
  tile5Input.disabled = true;
  tile6Input.disabled = true;

  tile7Input.style.color = 'orange';
  tile8Input.style.color = 'orange';
  tile9Input.style.color = 'orange';

} else if ((tile3Val === 'x' || tile3Val === 'X') && (tile6Val === 'x' || tile6Val === 'X') && (tile9Val === 'x' || tile9Val === 'X')) {

  document.getElementById('winner').innerHTML = 'Player X won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile4Input.disabled = true;
  tile5Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;

  tile3Input.style.color = 'orange';
  tile6Input.style.color = 'orange';
  tile9Input.style.color = 'orange';


} else if ((tile1Val === 'x' || tile1Val === 'X') && (tile5Val === 'x' || tile5Val === 'X') && (tile9Val === 'x' || tile9Val === 'X')) {

  document.getElementById('winner').innerHTML = 'Player X won';

  tile2Input.disabled = true;
  tile3Input.disabled = true;
  tile4Input.disabled = true;
  tile6Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;

  tile1Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile9Input.style.color = 'orange';


} else if ((tile3Val === 'x' || tile3Val === 'X') && (tile5Val === 'x' || tile5Val === 'X') && (tile7Val === 'x' || tile7Val === 'X')) {

  document.getElementById('winner').innerHTML = 'Player X won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile4Input.disabled = true;
  tile6Input.disabled = true;
  tile8Input.disabled = true;
  tile9Input.disabled = true;

  tile3Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile7Input.style.color = 'orange';

} else if ((tile2Val === 'x' || tile2Val === 'X') && (tile5Val === 'x' || tile5Val === 'X') && (tile8Val === 'x' || tile8Val === 'X')) {

  document.getElementById('winner').innerHTML = 'Player X won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile4Input.disabled = true;
  tile6Input.disabled = true;
  tile7Input.disabled = true;
  tile9Input.disabled = true;

  tile2Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile8Input.style.color = 'orange';

} else if ((tile4Val === 'x' || tile4Val === 'X') && (tile5Val === 'x' || tile5Val === 'X') && (tile6Val === 'x' || tile6Val === 'X')) {

  document.getElementById('winner').innerHTML = 'Player X won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile3Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;
  tile9Input.disabled = true;

  tile4Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile6Input.style.color = 'orange';

}
// Check if player 0 won or not
else if ((tile1Val === 'o' || tile1Val === 'O') && (tile2Val === 'o' || tile2Val === 'O') && (tile3Val === 'o' || tile3Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile4Input.disabled = true;
  tile5Input.disabled = true;
  tile6Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;
  tile9Input.disabled = true;

  tile1Input.style.color = 'orange';
  tile2Input.style.color = 'orange';
  tile3Input.style.color = 'orange';

} else if ((tile1Val === 'o' || tile1Val === 'O') && (tile4Val === 'o' || tile4Val === 'O') && (tile7Val === 'o' || tile7Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile2Input.disabled = true;
  tile3Input.disabled = true;
  tile5Input.disabled = true;
  tile6Input.disabled = true;
  tile8Input.disabled = true;
  tile9Input.disabled = true;

  tile1Input.style.color = 'orange';
  tile4Input.style.color = 'orange';
  tile7Input.style.color = 'orange';

} else if ((tile7Val === 'o' || tile7Val === 'O') && (tile8Val === 'o' || tile8Val === 'O') && (tile9Val === 'o' || tile9Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile3Input.disabled = true;
  tile4Input.disabled = true;
  tile5Input.disabled = true;
  tile6Input.disabled = true;

  tile7Input.style.color = 'orange';
  tile8Input.style.color = 'orange';
  tile9Input.style.color = 'orange';

} else if ((tile3Val === 'o' || tile3Val === 'O') && (tile6Val === 'o' || tile6Val === 'O') && (tile9Val === 'o' || tile9Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile4Input.disabled = true;
  tile5Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;

  tile3Input.style.color = 'orange';
  tile6Input.style.color = 'orange';
  tile9Input.style.color = 'orange';

} else if ((tile1Val === 'o' || tile1Val === 'O') && (tile5Val === 'o' || tile5Val === 'O') && (tile9Val === 'o' || tile9Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile2Input.disabled = true;
  tile3Input.disabled = true;
  tile4Input.disabled = true;
  tile6Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;

  tile1Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile9Input.style.color = 'orange';

} else if ((tile3Val === 'o' || tile3Val === 'O') && (tile5Val === 'o' || tile5Val === 'O') && (tile7Val === 'o' || tile7Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile4Input.disabled = true;
  tile6Input.disabled = true;
  tile8Input.disabled = true;
  tile9Input.disabled = true;

  tile3Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile7Input.style.color = 'orange';

} else if ((tile2Val === 'o' || tile2Val === 'O') && (tile5Val === 'o' || tile5Val === 'O') && (tile8Val === 'o' || tile8Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile1Input.disabled = true;
  tile3Input.disabled = true;
  tile4Input.disabled = true;
  tile6Input.disabled = true;
  tile7Input.disabled = true;
  tile9Input.disabled = true;

  tile2Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile8Input.style.color = 'orange';

} else if ((tile4Val === 'o' || tile4Val === 'O') && (tile5Val === 'o' || tile5Val === 'O') && (tile6Val === 'o' || tile6Val === 'O')) {

  document.getElementById('winner').innerHTML = 'Player O won';

  tile1Input.disabled = true;
  tile2Input.disabled = true;
  tile3Input.disabled = true;
  tile7Input.disabled = true;
  tile8Input.disabled = true;
  tile9Input.disabled = true;

  tile4Input.style.color = 'orange';
  tile5Input.style.color = 'orange';
  tile6Input.style.color = 'orange';

} //check for a tie

else if ((tile1Val === 'X' || tile1Val === 'O') && (tile2Val === 'X' || tile2Val === 'O') && (tile3Val === 'X' || tile3Val === 'O') &&
  (tile4Val === 'X' || tile4Val === 'O') && (tile5Val === 'X' || tile5Val === 'O') && (tile6Val === 'X' || tile6Val === 'O') && 
  (tile7Val === 'X' || tile7Val === 'O') && (tile8Val === 'X' || tile8Val === 'O') && (tile9Val === 'X' || tile9Val === 'O')) {
    document.getElementById('winner').innerHTML = 'Match Tie';

  } else {
    //player turn
    if (turn == 1) {
      document.getElementById('winner').innerHTML = 'Player X turn';
    } else {
      document.getElementById('winner').innerHTML = 'Plater O turn';
    }
  }

}

const reset = () => {
  location.reload();
  tile1Val = '';
  tile2Val = '';
  tile3Val = '';
  tile4Val = '';
  tile5Val = '';
  tile6Val = '';
  tile7Val = '';
  tile8Val = '';
  tile9Val = '';
}

turn = 1;

const myTurn = () => {
  if (turn%2 == 0) {
    document.getElementById('tile1').value = 'X';
    document.getElementById('tile1').disabled = true;
    turn++;
  } else {
    document.getElementById('tile1').value = 'O';
    document.getElementById('tile1').disabled = true;
    turn++;
  }
}

const myTurn1 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile2').value = 'X';
    document.getElementById('tile2').disabled = true;
    turn++;
  } else {
    document.getElementById('tile2').value = 'O';
    document.getElementById('tile2').disabled = true;
    turn++;
  }
}

const myTurn2 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile3').value = 'X';
    document.getElementById('tile3').disabled = true;
    turn++;
  } else {
    document.getElementById('tile3').value = 'O';
    document.getElementById('tile3').disabled = true;
    turn++;
  }
}

const myTurn3 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile4').value = 'X';
    document.getElementById('tile4').disabled = true;
    turn++;
  } else {
    document.getElementById('tile4').value = 'O';
    document.getElementById('tile4').disabled = true;
    turn++;
  }
}

const myTurn4 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile5').value = 'X';
    document.getElementById('tile5').disabled = true;
    turn++;
  } else {
    document.getElementById('tile5').value = 'O';
    document.getElementById('tile5').disabled = true;
    turn++;
  }
}

const myTurn5 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile6').value = 'X';
    document.getElementById('tile6').disabled = true;
    turn++;
  } else {
    document.getElementById('tile6').value = 'O';
    document.getElementById('tile6').disabled = true;
    turn++;
  }
}

const myTurn6 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile7').value = 'X';
    document.getElementById('tile7').disabled = true;
    turn++;
  } else {
    document.getElementById('tile7').value = 'O';
    document.getElementById('tile7').disabled = true;
    turn++;
  }
}

const myTurn7 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile8').value = 'X';
    document.getElementById('tile8').disabled = true;
    turn++;
  } else {
    document.getElementById('tile8').value = 'O';
    document.getElementById('tile8').disabled = true;
    turn++;
  }
}

const myTurn8 = () => {
  if (turn%2 == 0) {
    document.getElementById('tile9').value = 'X';
    document.getElementById('tile9').disabled = true;
    turn++;
  } else {
    document.getElementById('tile9').value = 'O';
    document.getElementById('tile9').disabled = true;
    turn++;
  }
}