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
