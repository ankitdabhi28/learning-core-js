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
      <p>
        In JavaScript, Hoisting is the default behavior of moving all the
        declarations at the top of the scope before code execution. Basically,
        it gives us an advantage that no matter where functions and variables
        are declared, they are moved to the top of their scope regardless of
        whether their scope is global or local.
      </p>
      <p>
        It allows us to call functions before even writing them in our code.{" "}
        <b>Declaration –> Initialisation/Assignment –> Usage </b>
      </p>
    </div>
  );
};

export default PracticeThirdHoisting;
