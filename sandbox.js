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

f
u
n
c
t
i
o
n

f
(
)
{
r
e
t
u
r
n

`
H
e
l
l
o
,

w
o
r
l
d
!
`
}
;