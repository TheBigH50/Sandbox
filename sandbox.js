let stringy = "The quick brown fox jumped over the lazy dog";

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseString(stringy));

function reverseWords(string) {
  let newArr = [];
  let myArr = string.split(" ");
  for (let i = 0; i < myArr.length; i++) {
    newArr.push(myArr[i].split("").reverse().join(""));
  }
  return newArr.join(" ");
}

console.log(reverseWords(stringy));

function reverseWords(string) {
  let newArr = [];
  let myArr = string.split(" ");
  myArr.forEach((ele) => {
    newArr.push(ele.split("").reverse().join(""));
  });
  return newArr.join(" ");
}

console.log(reverseWords(stringy));

let sentence = "The quick brown fox jumps over the lazy dog";

const reverseString = (str) => {
  let splitString = str.split("").reverse().join("");
  return splitString;
};

document.write(`Forward: ${sentence} <br></br>`);
document.write(`Reverse: ${reverseString(reverseString(sentence))}`);

function pigIt(str) {
  let split = str.split(" ");
  let newArr = [];
  split.forEach((ele) => {
    if (ele == "!") {
      newArr.push(ele);
    } else if (ele == "?") {
      newArr.push(ele);
    } else {
      let nA = ele.split("");
      nA.splice(ele.length, 0, `${ele[0]}ay`);
      let pork = nA.slice(1).join("");
      newArr.push(pork);
    }
  });
  return newArr.join(" ");
}

function getSumOfDigits(integer) {
  let sum = 0;
  let arr = integer.toString().split("");
  arr.forEach((ele) => {
    sum += parseInt(ele);
  });

  return sum;
}

function candies(kids) {
  if (kids.length <= 1) {
    return -1;
  } else {
    let extraCandyNeeded = 0;
    kids.sort();
    let goalCandy = kids.slice(kids.length - 1);
    kids.forEach((lackOfCandy) => {
      extraCandyNeeded += goalCandy - lackOfCandy;
    });
    return extraCandyNeeded;
  }
}

function duplicateCount(text) {
  let textUp = text.toUpperCase();
  let splitArr = textUp.split("");
  let lettersArr = [];
  let countArr = [];
  splitArr.forEach((ele, idx, arr) => {
    if (arr.indexOf(ele) != arr.lastIndexOf(ele)) {
      lettersArr.push(ele);
    }
  });
  lettersArr.forEach((ele, idx, arr) => {
    if (arr.indexOf(ele, idx) == arr.lastIndexOf(ele)) {
      countArr.push(ele);
    }
  });
  return countArr.length;
}

function pairOfShoes(shoes) {
  let rlArr = [];
  let sizeArr = [];
  let noPairArr = [];
  let rShoe = 0;
  let lShoe = 0;
  let paired = true;

  shoes.forEach((ele) => {
    rlArr.push(ele[0]);
    sizeArr.push(ele[1]);
  });

  rlArr.forEach((ele) => {
    if (ele == 1) {
      rShoe += 1;
    } else {
      lShoe += 1;
    }
  });

  if (rShoe == lShoe) {
    sizeArr.forEach((ele, idx, arr) => {
      if (idx != arr.lastIndexOf(ele)) {
        noPairArr.push(ele);
      }
    });
  }

  sizeArr.forEach((ele) => {
    if (!noPairArr.includes(ele)) {
      return (paired = false);
    }
  });

  return paired;
}

class Person {
  constructor(name, age) {
    (name = name || "bob"),
      (age = age || 18),
      function getInfo() {
        return `${this.name} age is ${this.age}`;
      };
  }
}

function rgb(r, g, b) {
  let nums = [];
  let ans = [];
  nums.push(r, g, b);

  if (r <= 0 && g <= 0 && b <= 0) {
    return "000000";
  } else {
    nums.forEach((ele) => {
      if (ele > 255) {
        ans.push("FF");
      } else {
        if (ele.toString(16).length == 1) {
          ans.push("0" + ele.toString(16).toUpperCase());
        } else if (ele <= 0) {
          ans.push("00");
        } else {
          ans.push(ele.toString(16).toUpperCase());
        }
      }
    });
  }
  return ans.join("");
}

function sumStrings(a, b) {
  if (a == "") {
    a = 0;
  }
  if (b == "") {
    b = 0;
  }
  let num = BigInt(a) + BigInt(b);
  return `${num}`;
}

function bouncingBall(h, bounce, window) {
  let bounces = 0;
  let nope = -1;

  if (h > 0 && bounce < 1 && bounce > 0 && window < h) {
    do {
      bounces += 1;
      h *= bounce;
      if (h > window) {
        bounces += 1;
      }
    } while (h > window);
  } else {
    return nope;
  }
  return bounces;
}

function findOdd(A) {
  let numsArr = [];
  let ans = [];
  A.sort((a, b) => a - b);

  let newArr = A.forEach((ele, idx, arr) => {
    if (!numsArr.includes(ele)) {
      if ((arr.lastIndexOf(ele) + 1 - (idx + 1)) % 2 == 0) {
        ans.push(ele);
      } else {
        numsArr.push(ele);
      }
    }
  });
}
console.log(newArr);

function vowelOne(s) {
  let up = s.toUpperCase();
  let arr = up.split("");
  let ans = [];
  arr.forEach((ele) => {
    if (ele == "A" || ele == "E" || ele == "I" || ele == "O" || ele == "U") {
      ans.push("1");
    } else {
      ans.push("0");
    }
  });
  return ans.join("");
}

let arrayofsocres = [2, 3, 4, 55, 64, 99, 25];
let sum = 0;

function add(num) {
  sum += num;
}

let ans = add(...arraysofscores) / arraysofscores.length;

myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function addStuff(arr) {
  ans = 0;
  arr.forEach((ele, idx, arr) =>
    arr.forEach((ele) => {
      ans += ele;
    })
  );
  return ans;
}
addStuff(myArr);

function parseInt(string) {
  var numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
    "hundred",
    "thousand",
    "million",
  ];
  var numberValues = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000000,
  ];
  var numberWordToValue = {};
  for (var i = 0; i < numberWords.length; i++) {
    numberWordToValue[numberWords[i]] = numberValues[i];
  }
  var cut = string.split("-");
  var build = cut.join(" ");
  var wordsWithAnd = build.split(" ");
  var words = wordsWithAnd.filter(function (word) {
    return word !== "and";
  });
  var result = 0;
  var current = 0;
  var last = 0;
  for (var i = 0; i < words.length; i++) {
    current = numberWordToValue[words[i]];
    if (current === 100) {
      last *= current;
    } else if (current === 1000 || current === 1000000) {
      if (last === 0) {
        last = 1;
      }
      result += last * current;
      last = 0;
    } else {
      last += current;
    }
  }
  result += last;
  return result;
}

var goldbach = function (n) {
  var primes = [];
  var isPrime = function (n) {
    for (var i = 0; i < primes.length; i++) {
      if (n % primes[i] === 0) {
        return false;
      }
    }
    return true;
  };
  var findPrimes = function (n) {
    for (var i = 2; i < n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  };
  findPrimes(n);
  for (var i = 0; i < primes.length; i++) {
    for (var j = 0; j < primes.length; j++) {
      if (primes[i] + primes[j] === n) {
        return [primes[i], primes[j]];
      }
    }
  }
};

/* var bigInt = 9234756243689885613457614238756198349887134134095097813506978130587134895698134058130897135096708971340589713458961349867138708971305897089713079137103578913408514237982340100134605961340950196134095610923478612340761340569106601034826508761342057861083947258971687632148609136405960213945096234059621309456492347562436898856134576142387561983498871341340950978135069781305871348956981340581308971350967089713405897134589613498671387089713058970897130791371035789134085142379823401001346059613409501961340956109234786123407613405691066010348265087613420578610839472589716876321486091364059602139450962340596213094564n;
function goldbach(n) {
  var primes = [];
  var isPrime = function(n) {
    for (var i = 0; i < primes.length; i++) {
      if (n.mod(primes[i]).equals(0)) {
        return false;
      }
    }
    return true;
  };
  var findPrimes = function(n) {
    for (var i = bigInt(2); i.lesser(n); i = i.add(1)) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  };
  findPrimes(n);
  for (var i = 0; i < primes.length; i++) {
    for (var j = 0; j < primes.length; j++) {
      if (primes[i].add(primes[j]).equals(n)) {
        return [primes[i], primes[j]];
      }
    }
  }
};

goldbach(bigInt); */

function calc(num1, num2, callBack) {
  return callBack(num1, num2);
}

function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

console.log(calc(5, 10, add));
// logs 15

/* 
Condition 1: price < 450 => log price
Condition 2: price > 300 => log hello
Condition 3: price = 10 balance = 12 => log hi
*/
let price = 10;
let balance = 12;

//This code will never evaluate Condition 3:
if (price < 300) {
  console.log(price);
} else if (price > 300 && price < 450) {
  console.log(`Hello ${price}`);
} else if (price > 450) {
  console.log("Hello");
} else if (price == 10 && balance == 12) {
  console.log(`Hi ${price}`);
}

//This code will evaluate all Conditions:
if (price == 10 && balance == 12) {
  console.log(`Hi ${price}`);
} else if (price > 300 && price < 450) {
  console.log(`Hello ${price}`);
} else if (price < 300) {
  console.log(price);
} else if (price > 450) {
  console.log("Hello");
}
for (let i = 1; i < 100; i++) {
  let suffix = "";
  let numArr = i.toString().split("");
  switch (numArr[numArr.length - 1]) {
    case "1":
      suffix = "st";
      break;
    case "2":
      suffix = "nd";
      break;
    case "3":
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  console.log(`Hello for the ${i}${suffix} time`);
}

function numberToOrdinal(n) {
  if (n == 0) {
    return "0";
  } else {
    let suffix = "";
    let numArr = n.toString().split("");

    if (numArr[numArr.length - 2] == "1") {
      return `${n}th`;
    } else {
      switch (numArr[numArr.length - 1]) {
        case "1":
          suffix = "st";
          break;
        case "2":
          suffix = "nd";
          break;
        case "3":
          suffix = "rd";
          break;
        default:
          suffix = "th";
      }
      return `${n}${suffix}`;
    }
  }
}

for (i = 1; i < 200; i++) {
  let suffix = "";
  let numArr = i.toString().split("");

  if (numArr[numArr.length - 2] == "1") {
    console.log(`Hello for the ${i}th time`);
  } else {
    switch (numArr[numArr.length - 1]) {
      case "1":
        suffix = "st";
        break;
      case "2":
        suffix = "nd";
        break;
      case "3":
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
    console.log(`Hello for the ${i}${suffix} time`);
  }
}

function checkTriangle(a, b, c) {
  if (a + b < c || a + c < b || b + c < a) {
    console.log("invalid");
  } else if (a == b && b == c) {
    console.log("equilateral");
  } else if (a == b || b == c) {
    console.log("isosceles");
  } else {
    console.log("scalene");
  }
}

checkTriangle(1, 2, 2); //isosceles
checkTriangle(2, 2, 2); //equilateral
checkTriangle(4, 5, 6); //scalene
checkTriangle(10, 5, 7); //scalene
checkTriangle(1, 1, 10); //invalid

function gimme(triplet) {
  let ans = 0;
  let sorted = [...triplet];

  sorted.sort((a, b) => a - b);

  triplet.forEach((a, b) => {
    if (a == sorted[1]) {
      ans = b;
    }
  });
  return ans;
}

function gimme(triplet) {
  let ans = 2;
  let a = triplet[0];
  let b = triplet[1];
  let c = triplet[2];

  if (a < 0 && b < 0 && c < 0) {
    a = a * -1;
    b = b * -1;
    c = c * -1;
  }

  if (a + b > a + c && b + c < a + b) {
    if (a > b) {
      ans = 1;
    } else {
      ans = 0;
    }
  } else if (b + c > a + c) {
    if (b < c) {
      ans = 1;
    } else {
      ans = 2;
    }
  } else if (a + b < b + c) {
    if (a < c) {
      ans = 0;
    } else {
      ans = 2;
    }
  }

  if (a < 0 && b < 0) {
    if (a > b) {
      ans = 0;
    } else {
      ans = 1;
    }
  } else if (a < 0 && c < 0) {
    if (a > c) {
      ans = 0;
    } else {
      ans = 2;
    }
  } else if (b < 0 && c < 0) {
    if (b > c) {
      ans = 1;
    } else {
      ans = 2;
    }
  }
  if (a < 0 && b > 0 && c > 0) {
    if (b > c) {
      ans = 2;
    } else {
      ans = 1;
    }
  } else if (b < 0 && a > 0 && c > 0) {
    if (a > c) {
      ans = 2;
    } else {
      ans = 0;
    }
  } else if (c < 0 && a > 0 && b > 0) {
    if (a > b) {
      ans = 1;
    } else {
      ans = 0;
    }
  }
  return ans;
}

function sortByGenderAndScore(users) {
  let inLine = users
    .sort(function (a, b) {
      if (a.gender < b.gender) {
        return -1;
      } else if (a.gender > b.gender) {
        return 1;
      } else {
        return b.score - a.score;
      }
    })
    .map(function (user) {
      return { name: user.name, score: user.score };
    });
  return inLine;
}

console.log(sortByGenderAndScore(users));

let myArr = [1, 2, 3];

let myArrX2 = myArr.reduce((acc, cur) => {
  return acc + cur * 2;
}, 0); // returns 12

let myArrNotQuiteX2 = myArr.reduce((acc, cur) => {
  return acc + cur * 2;
}); //returns 11

console.log(myArrX2, myArrNotQuiteX2);

class Person {
  constructor(name, age) {
    (this.name = name),
      (this.age = age),
      (this.info = `${name}s age is ${age}`);
  }
  getInfo() {
    return this.info;
  }
}

class Calculator {
  constructor() {
    this.result = 0;
  }
  checkInput(a, b) {
    if (typeof b === "undefined") {
      b = a;
      a = this.result;
    }
    return [a, b];
  }
  add(a, b) {
    [a, b] = this.checkInput(a, b);
    this.result = a + b;
    return this.result;
  }
}
let calculator = new Calculator();
let sum1 = calculator.add(5, 10);
console.log(sum1); // 15

let sum2 = calculator.add(5);
console.log(sum2); // 5 + this.result

function countDevelopers(list) {
  let sum = 0;

  list.forEach((a) => {
    if (a.continent == "Europe" && a.language == "JavaScript") {
      sum += 1;
    }
  });
  return sum;
}

let trips = [-1, 3, -25];

function gimme(triplet) {
  let ans = 0;
  let a = triplet[0];
  let b = triplet[1];
  let c = triplet[2];

  if (a < 0 && b < 0 && c > 0) {
    a = a * (-c * 1.5);
    b = b * (-c * 1.5);
  } else if (a > 0 && b < 0 && c < 0) {
    b = b * (-a * 1.5);
    c = c * (-a * 1.5);
  } else if (a < 0 && b > 0 && c < 0) {
    a = a * (-b * 1.5);
    c = c * (-b * 1.5);
  } else if (a < 0 && b < 0 && c < 0) {
    a = a * -1;
    b = b * -1;
    c = c * -1;
  }

  if (a < b && c < a && b > c) {
    ans = 0;
  } else if (a < b && a > c && b < c) {
    ans = 0;
  } else if (a > b && a < c && b < c) {
    ans = 0;
  } else if (a > b && a < c && b < c) {
    ans = 0;
  } else if (a < b && b < c) {
    ans = 1;
  } else if (a > b && b > c) {
    ans = 1;
  } else {
    ans = 2;
  }
  return ans;
}

console.log(gimme(trips));

function correct(string) {
  let ans = [];
  let processed = string.split("");

  processed.forEach((a) => {
    if (a === "5") {
      ans.push("S");
    } else if (a === "0") {
      ans.push("O");
    } else if (a === "1") {
      ans.push("I");
    } else {
      ans.push(a);
    }
  });
  return ans.join("");
}

/* let deck = [
  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
  "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH",
  "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD"
  ];
let shuffledDeck = [];

function shuffle() {
  let tempDeck = [];
  while (tempDeck.length < 52) {
    let a = Math.floor(Math.random() * (52 - 1) + 1);
    let b = Math.floor(Math.random() * (52 - 1) + 1);
    let c = Math.floor(Math.random() * (52 - 1) + 1);
    let d = a + b + c;

    if (tempDeck.includes(d) == false && d > 51 && d < 104) {
      tempDeck.push(d);
    }
  }
  console.log(tempDeck);
  for (let i = 0; i < 52; i++) {
    shuffledDeck.push(deck[tempDeck[i] - 52]);
  }

  console.log(shuffledDeck);
  return shuffledDeck;
}

shuffle(); */

function shuffle() {
  let idArr = ["ID1","ID1", "ID2", "ID2", "ID3", "ID3", "ID4", "ID4",
  "ID5", "ID5", "ID6", "ID6", "ID7", "ID7", "ID8", "ID8"];
  let shuffledCards = [];
  let tempCards = [];
  while (tempCards.length < 16) {
    let a = Math.floor(Math.random() * 16);

    if (tempCards.includes(a) == false && a < 16) {
      tempCards.push(a);
    }
  }
  console.log(tempCards);
  for (let i = 0; i < 16; i++) {
    shuffledCards.push(idArr[tempCards[i] - 16]);
  }

  console.log(shuffledCards);
  return shuffledCards;
}

shuffle();


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


function decrypt(cipherText, key) {
  let plainText = "";
  let columns = key;
  let rows = Math.ceil(cipherText.length / columns);
  let matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns);
  }
  let index = 0;
  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < rows; i++) {
        matrix[i][j] = cipherText[index];
        index++;
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j]) {
        plainText += matrix[i][j];
      }
    }
  }
  return plainText;
}

let cipherText =
  "YdWnsop cnmtrto eehulthgmhriuIl o ehaeeeem tltwctil n neD!do oeslctcti o ymd eo u";
  
let PlainText = decrypt(cipherText, 6);
console.log(PlainText);