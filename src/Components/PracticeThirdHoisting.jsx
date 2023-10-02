import React from "react";

const PracticeThirdHoisting = () => {
  let a;
  let b; // case:1 code compiled successfully

  function codeHoist() {
    a = 10;
    b = 50; // case:1 code compiled successfully
    // let b = 50; // case:2

    // console.log(b);
  }
  codeHoist();

  console.log(a);
  // console.log(b); // case:2  ReferenceError : b is not defined
  console.log(b); // case:1 code compiled successfully
  return (
    <div>
      <h4>Practice 3 : Hoisting </h4>
    </div>
  );
};

export default PracticeThirdHoisting;
