let plainText = "You Did It! Well done to show you completed this challenge comment the current time"



function encrypt(plainText, key) {
  let cipherText = "";
  let columns = key;
  let rows = Math.ceil(plainText.length / columns);
  let matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns);
  }
  let index = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (index < plainText.length) {
        matrix[i][j] = plainText[index];
        index++;
      } else {
        matrix[i][j] = null;
      }
    }
  }
  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < rows; i++) {
      if (matrix[i][j]) {
        console.log(matrix[i][j]);
        cipherText += matrix[i][j];
      }
    }
  }
  return cipherText;
}

let CipherText = encrypt(plainText, 6);
console.log(CipherText);

// YdWnsop cnmtrto eehulthgmhriuIl o ehaeeeem tltwctil n neD!do oeslctcti o ymd eo u