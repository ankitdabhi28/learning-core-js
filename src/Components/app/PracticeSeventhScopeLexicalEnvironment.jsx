import React from "react";

const PracticeSeventhScopeLexicalEnvironment = () => {
  //** Case:1
  function first() {
    second();
    function second() {
      console.log("inside second function :-->>", b);
    }
  }
  var b = 10;
  first();

  //** Case:2
  // function first() {
  //   second();
  //   function second() {
  //     console.log("inside second function :-->>", b);
  //   }
  // }
  // var b = 10;
  // first();

  //** Case:3
  // function first() {
  //   var b = 10;
  //   second();
  //   function second() {
  //     console.log("inside second function :-->>", b);
  //   }
  // }
  // first();
  // console.log("outside second function :-->>", b); // here Error : 'b' is not defined

  return (
    <div>
      <h4>Practice 7 : Scope And Lexical Environment</h4>
      <p>
        Each block of code creates scope and a lexical environment. JavaScript
        cares about the lexical environment when you ask for a variable while
        running a line of code inside any particular execution context if it
        can't find that variable in its block it will go at the outer reference
        or block and look for variables there.
      </p>
      <p>just commit</p>
    </div>
  );
};

export default PracticeSeventhScopeLexicalEnvironment;
