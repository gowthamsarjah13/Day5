//      Anonymous  function & IIFE (immediately invoked function expression):

// Print odd numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  let oddNum = function (a) {
    if (!(a % 2 == 0)) {
      console.log(a);
    }
  };
  oddNum(array[i]);
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array1.length; i++) {
  (function (a) {
    if (!(a % 2 == 0)) {
      console.log(a);
    }
  })(array1[i]);
}

// *************************************** end here ******************************************************

// Convert all the strings to title caps in a string array:

let str = "scott adkin";

let caps = function (a) {
  console.log(a.toUpperCase());
};

caps(str);

let str1 = "scott adkin";

(function (a) {
  console.log(a.toUpperCase());
})(str1);

// *************************************** end here ******************************************************

// Sum of all numbers in an array

let arraySum = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arraySum.length; i++) {
  let addSum = function (s) {
    sum = sum + s;
  };
  addSum(arraySum[i]);
}

console.log(sum);

let arraySum1 = [1, 2, 3, 4, 5];
let sum1 = 0;

for (let i = 0; i < arraySum1.length; i++) {
  (function (s) {
    sum1 = sum1 + s;
  })(arraySum1[i]);
}

console.log(sum1);

// *************************************** end here ******************************************************

// Return all the prime numbers in an array:

let prime = [1, 2, 3, 4, 5];

for (let j = 0; j < prime.length; j++) {
  let count = 0;
  let result = [];
  let primeNum = function (p) {
    for (let i = 2; i <= p; i++) {
      if (p % i == 0) {
        result.push(i);
        count++;
      }
    }
    if (count == 1) {
      console.log(p);
    }
  };

  primeNum(prime[j]);
}

let prime1 = [6, 7, 8, 9, 10];

for (let j = 0; j < prime1.length; j++) {
  let count = 0;
  let result = [];
  (function (p) {
    for (let i = 2; i <= p; i++) {
      if (p % i == 0) {
        result.push(i);
        count++;
      }
    }
    if (count == 1) {
      console.log(p);
    }
  })(prime1[j]);
}

// *************************************** end here ******************************************************

// Return all the palindromes in an array

let pali = ["dad", "father", "maam", "mother"];

let findpali = function (pali) {
  let result = [];
  for (let i = 0; i < pali.length; i++) {
    if (pali[i] === pali[i].split("").reverse().join("")) {
      result.push(pali[i]);
    }
  }
  return result;
};

console.log(findpali(pali));

let palindrom = ["dad", "father", "maam", "mother"];

(function (palindrom) {
  let result = [];

  for (let i = 0; i < palindrom.length; i++) {
    if (palindrom[i] === palindrom[i].split("").reverse().join("")) {
      result.push(palindrom[i]);
    }
  }
  console.log(result);
})(palindrom);

// *************************************** end here ******************************************************

// Return median of two sorted arrays of the same size

let midarray1 = [3, 9, 8, 7, 5];
let midarray2 = [4, 6, 2, 1];

midarray1.sort();
midarray2.sort();

// console.log(midarray1 , midarray2);

let result = function (a, b) {
  let aLen = a.length / 2;
  aLen = Math.floor(aLen);
  console.log(midarray1[aLen]);

  let bLen = b.length / 2;
  bLen = Math.floor(bLen);
  console.log(midarray2[bLen]);
};

result(midarray1, midarray2);

let midarray3 = [3, 9, 8, 7, 5];
let midarray4 = [4, 6, 2, 1];

midarray3.sort();
midarray4.sort();

// console.log(midarray1 , midarray2);

(function (c, d) {
  let cLen = c.length / 2;
  cLen = Math.floor(cLen);
  console.log(midarray3[cLen]);

  let dLen = d.length / 2;
  dLen = Math.floor(dLen);
  console.log(midarray4[dLen]);
})(midarray3, midarray4);

// *************************************** end here ******************************************************

// Remove duplicates from an array

let dupArr1 = [1, 2, 3, 3, 2, 4, 4, 5, 4];

let removeDuplicate = function (dupArr1) {
  let result = [];

  for (let i = 0; i < dupArr1.length; i++) {
    if (result.length === 0) {
      result.push(dupArr1[i]);
    }

    if (result.indexOf(dupArr1[i]) === -1) {
      result.push(dupArr1[i]);
    }
  }

  return result;
};

console.log(removeDuplicate(dupArr1));

let dupArr2 = [1, 2, 3, 3, 2, 4, 4, 5, 4];

(function (dupArr2) {
  let result = [];

  for (let i = 0; i < dupArr2.length; i++) {
    if (result.length === 0) {
      result.push(dupArr2[i]);
    }

    if (result.indexOf(dupArr2[i]) === -1) {
      result.push(dupArr2[i]);
    }
  }

  console.log(result);
})(dupArr2);

// *************************************** end here ******************************************************

// Rotate an array by k times

let k = 3;

let rotate = [1, 2, 3, 4, 5, 6, 7];

let rotateArr = function (rotate) {
  let rightside = [];
  let leftside = [];
  let total = [];
  if (rotate.length > 2 && k < rotate.length && k > 0) {
    let leftLen = rotate.length - 1 - k;
    let rightLen = leftLen + 1;

    for (let i = leftLen; i >= 0; i--) {
      leftside.push(rotate[i]);
    }

    for (let i = rotate.length - 1; i >= rightLen; i--) {
      rightside.push(rotate[i]);
    }

    total = leftside.concat(rightside);

    console.log(total.reverse());
  } else {
    console.log("error");
  }
};

rotateArr(rotate);

let rotate1 = [1, 2, 3, 4, 5, 6, 7];

(function (rotate1) {
  let rightside = [];
  let leftside = [];
  let total = [];
  if (rotate1.length > 2 && k < rotate1.length && k > 0) {
    let leftLen = rotate1.length - 1 - k;
    let rightLen = leftLen + 1;

    for (let i = leftLen; i >= 0; i--) {
      leftside.push(rotate1[i]);
    }

    for (let i = rotate1.length - 1; i >= rightLen; i--) {
      rightside.push(rotate1[i]);
    }

    total = leftside.concat(rightside);

    console.log(total.reverse());
  } else {
    console.log("error");
  }
})(rotate1);

// *************************************** end here ******************************************************

// *************************************** Arrow function start here ******************************************************

// Print odd numbers in an array

let OddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < OddArr.length; i++) {
  let oddNum = (Num) => {
    if (Num % 2 == 1) {
      console.log(Num);
    }
  };
  oddNum(OddArr[i]);
}

// *************************************** end here ******************************************************

// Convert all the strings to title caps in a string array

let capStr = "scott adkin";

let titleCap = (cap) => cap.toUpperCase();

console.log(titleCap(capStr));

// *************************************** end here ******************************************************

// Sum of all numbers in an array

let AddNum = [1, 2, 3, 4, 5];
let SumValue = 0;

for (let i = 0; i < AddNum.length; i++) {
  let SumFun = (Add) => {
    SumValue = SumValue + Add;
  };
  SumFun(AddNum[i]);
}
console.log(SumValue);

// *************************************** end here ******************************************************

// Return all the prime numbers in an array

let primeNum = [1, 2, 3, 4, 5];

for (let j = 0; j < primeNum.length; j++) {
  let count = 0;
  let result = [];
  let primeFun = (p) => {
    for (let i = 2; i <= p; i++) {
      if (p % i == 0) {
        result.push(i);
        count++;
      }
    }
    if (count == 1) {
      console.log(p);
    }
  };

  primeFun(primeNum[j]);
}

// *************************************** end here ******************************************************

// Return all the palindromes in an array

let palindromesArr = ["dad", "madam", "maam", "mother"];

let resultPali = [];

for (let i = 0; i < palindromesArr.length; i++) {
  let PaliFunction = (value) => {
    if (value === value.split("").reverse().join("")) {
      resultPali.push(value);
    }
  };
  PaliFunction(palindromesArr[i]);
}
console.log(resultPali);

// *************************************** Arrow function end here ******************************************************
