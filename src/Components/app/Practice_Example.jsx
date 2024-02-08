import React, { useState } from "react";

const PracticeExample = () => {
  // ===================== 1 =================
  // const str = "missing";
  // // output:- m = 1 , s= 2 i=3

  // const d = str.split("");

  // let f = {};

  // for (let i = 0; i < d.length; i++) {
  //   if (f[d[i]] !== null && f[d[i]] !== undefined) {
  //     f[d[i]] = f[d[i]] + 1;
  //   } else {
  //     f[d[i]] = 1;
  //   }
  // }
  // console.log(f);

  // ========= 2 =============================

  // const b = [1, 4, 8, 6];
  // const a = [2, 4, 6, 1, 3, 5];
  // output will be this in new array  [3,8,14,7,3,5]

  // const value = Math.max(b.length, a.length);
  // console.log(value);

  // let array = [];
  // for (let i = 0; i < value; i++) {
  //   // if(a.length)
  //   let aValue = a[i] || 0;
  //   let bValue = b[i] || 0;
  //   let final = aValue + bValue;
  //   array.push(final);
  //   // console.log("hello", final, array);
  //   // return final;
  // }

  // console.log(array);

  //  =================== 3 =====================

  // const str = "asjkldfjalksdjf";
  // // output:- m = 1 , s= 2 i=3

  // let arr = [];

  // for (let i = 0; i < str.length; i++) {
  //   arr.push(str.charAt(i));
  // }

  // let f = {};
  // for (let i = 0; i < arr.length; i++) {
  //   if (f[arr[i]] !== null && f[arr[i]] !== undefined) {
  //     f[arr[i]] = f[arr[i]] + 1;
  //   } else {
  //     f[arr[i]] = 1;
  //   }
  // }
  // console.log(Object.keys(f));

  //  =============== 4 ============

  // const str = "kjaskfjkasjdfkjalk";
  // const charCount = {};

  // for (const char of str) {
  //   if (charCount[char]) {
  //     charCount[char]++;
  //   } else {
  //     charCount[char] = 1;
  //   }
  // }

  // let output = "";
  // for (const char in charCount) {
  //   output += `${char}: ${charCount[char]}, `;
  // }

  // console.log(output);

  // ===================== 5 ===========

  // function calculateCharacterFrequency(str) {
  //   const sanitizedStr = str.toLowerCase().replace(/\s/g, "");

  //   const frequencyMap = new Map();

  //   for (const char of sanitizedStr) {
  //     console.log(char);
  //     if (frequencyMap.has(char)) {
  //       frequencyMap.set(char, frequencyMap.get(char) + 1);
  //     } else {
  //       frequencyMap.set(char, 1);
  //     }
  //   }

  //   let result = "";
  //   for (const [char, frequency] of frequencyMap) {
  //     result += `${char}: ${frequency}, `;
  //   }

  //   return result;
  // }

  // // Example usage
  // const str = "Hello";
  // const frequencyOutput = calculateCharacterFrequency(str);
  // console.log(frequencyOutput);

  const [numData, setNumData] = useState({ start: null, end: null });

  const GetRowValue = () => {
    const numbers = [];

    for (let i = parseInt(numData.start); i <= parseInt(numData.end); i++) {
      numbers.push(i);
    }
    console.log(
      "numbersInRange:--->>>",
      numbers,
      numbers.some((num) => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
        }
        return true;
      })
    );
  };

  return (
    <div>
      Practice_Example Code
      <div>
        Start
        <input
          type="text"
          onChange={(e) => {
            setNumData({
              ...numData,
              start: e.target.value === "" ? null : e.target.value,
            });
          }}
        />
      </div>
      <div>
        End
        <input
          type="text"
          onChange={(e) => {
            setNumData({
              ...numData,
              end: e.target.value === "" ? null : e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={() => GetRowValue()}>click-data</button>
      </div>
    </div>
  );
};

export default PracticeExample;
