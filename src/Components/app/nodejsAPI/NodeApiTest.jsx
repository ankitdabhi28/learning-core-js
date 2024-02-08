/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { getUserDetails } from "../../axios/API/userDwtails";

const NodeApiTest = () => {
  useEffect(() => {
    getUserDetails()
      .then((res) => {
        console.log("res -->", res);
      })
      .catch((err) => {
        console.log("err -->", err);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Node Api Test</h2>
      </div>
    </>
  );
};

export default NodeApiTest;
