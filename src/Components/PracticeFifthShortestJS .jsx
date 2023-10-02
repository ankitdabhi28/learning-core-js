import React from "react";

const PracticeFifthShortestJS = () => {
  // window is
  function call() {
    // eslint-disable-next-line
    let x = 10;
  }
  console.log("Call Function :-->>", call);
  console.log("window?.x :-->>", window.x);
  console.log("Global-Window :-->>", window);
  return (
    <div>
      <h4>Practice 5 : Shortest-JS Program </h4>
      <p>
        Using the <b>global Window object</b>, we can access the{" "}
        <b>global variable.</b> The Window object is the global object that
        represents the browser <b>Window</b>. All the variables declared in the
        global scope become the variable of the Window object. To access this
        Window object, we have to use the object dot notation
      </p>
    </div>
  );
};

export default PracticeFifthShortestJS;
