let row1 = [1, 1, 1];
let row2 = [2, 2, 2];
let row3 = [3, 3, 3];

function checkWin(x, o) {
  let xSum = x.reduce((a, b) => {
    a += b;
  }, 0);
  let oSum = o.reduce((a, b) => {
    a += b;
  }, 0);
  let winner = "";
  if (x.length > 2) {
    if (o.length == 3 && oSum % 3 == 0) {
      winner = "O";
    } else if (o.length == 4 && xSum % 2 == 0) {
      winner = "O";
    } else if (x.length == 3 && xSum % 3 == 0) {
      winner = "X";
    } else if (x.length == 4 && xSum % 2 != 0) {
      winner = "X";
    } else if (x.length == 5 && xSum % 2 == 0) {
      winner = "X";
    } else {
      winner = "DRAW";
    }
  }
  return winner;
}
