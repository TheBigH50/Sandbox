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

document.write(`Foward: ${sentence} <br></br>`);
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
