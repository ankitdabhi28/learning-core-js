import React from "react";
const PracticeSecondExecution = () => {
  var number = 2;
  function square(num) {
    var ans = num * num;
    console.log("Function ans -->>", ans);
    return ans;
  }
  var square2 = square(number);
  var square4 = square(4);
  console.log("Square Function call -->> ", square2, square4);
  return (
    <div>
      <h4>Practice 2 : Execution Contexts</h4>
      <div>
        <input
          type="number"
          onChange={(e) => {
            square(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default PracticeSecondExecution;
