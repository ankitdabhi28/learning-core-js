import React from "react";

const PracticeFourthFunctionAndVariable = () => {
  var first = 10;
  second();
  third();
  console.log("first :-->>", first);

  function second() {
    let secondValue = 20;
    console.log("second :-->>", secondValue);
  }

  function third() {
    let thirdValue = 20;
    console.log("third :-->>", thirdValue);
  }

  return (
    <div>
      <h4>Practice 4 : Function & Variable</h4>
    </div>
  );
};

export default PracticeFourthFunctionAndVariable;
