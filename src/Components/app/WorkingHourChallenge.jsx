/* eslint-disable no-unused-expressions */
import React from "react";

const WorkingHourChallenge = () => {
  const officeTimeValue = [3, 20, 30, 1.5];

  const calculateOverTimeValue = (val) => {
    // const startWork = val[0];
    // const endWork = val[1];
    // const hourIncome = val[2];
    // const overTime = val[3];
    const [startWork, endWork, hourIncome, overTimeIncome] = val;
    // 9 to 5: regular hours
    // console.log(
    //   "val -->> ",
    //   val,
    //   "total ->",
    //   endWork - startWork,
    //   "regular ->",
    //   Math.min(endWork, 17) - startWork,
    //   "overtimeIncome ->",
    //   endWork - startWork - (Math.min(endWork, 17) - startWork),
    //   "total-paid ->",
    //   (Math.min(endWork, 17) - startWork) * hourIncome +
    //     (endWork - startWork - (Math.min(endWork, 17) - startWork)) * overTimeIncome
    // );

    //  ! using .math
    let totalHour = endWork - startWork;
    let regularHour = Math.min(endWork, 17) - Math.max(startWork, 9);
    let overTimeHour = totalHour - regularHour;
    let regularHourPaid = regularHour * hourIncome;
    let overTimeHourPaid = overTimeHour * overTimeIncome * hourIncome;
    let totalPaid = regularHourPaid + overTimeHourPaid;

    // ! without Math.

    // let totalHour = endWork - startWork;
    // let regularHour = (endWork <= 17 ? endWork : 17) - (startWork >= 9 ? startWork : 9);
    // let overTimeHour = totalHour - regularHour;
    // let regularHourPaid = regularHour * hourIncome;
    // let overTimeHourPaid = overTimeHour * overTimeIncome * hourIncome;
    // let totalPaid = regularHourPaid + overTimeHourPaid;

    // console.log(
    //   "val -->> ",
    //   val,
    //   "total ->",
    //   totalHour,
    //   "regular ->",
    //   regularHour,
    //   "overtime ->",
    //   overTimeHour,
    //   "total-paid ->",
    //   totalPaid
    // );

    return totalPaid;
  };

  // ([1, 3, 5, 4, 0, 2], 4), [[0, 4], [1, 3]])
  const defaultArray = [[1, 3, 5, 4, 0, 2, 2], 4];

  const arrayConcatFunction = (val) => {
    const [array, subValue] = val;
    let finalData = [];

    for (let i = 0; i < array.length; i++) {
      // console.log("i: ", i);
      for (let j = i; j < array.length; j++) {
        // console.log(
        //   "try ->",
        //   array[i],
        //   array[j],
        //   i !== j ? array[i] + array[j] === subValue : false
        // );

        if (i !== j) {
          if (array[i] + array[j] === subValue) {
            if (array[j] >= array[i]) {
              finalData.push([array[i], array[j]]);
            } else {
              finalData.push([array[j], array[i]]);
            }
            // console.log("final -->>", array[i], array[j]);
          }
        }
      }
    }

    // console.log("finalData: ", finalData);

    return finalData;
  };

  return (
    <>
      <div>
        <h2>Working Hour Challenge</h2>
        <div> 9 to 5: regular hours </div>
        <div>{JSON.stringify(officeTimeValue)} here time in 24-Hour</div>
        <div>
          <b>total paid : {calculateOverTimeValue(officeTimeValue)}</b>
        </div>
      </div>

      <div>
        <h2>Array-Challenge</h2>
        <div>Default Array : {JSON.stringify(defaultArray)}</div>
        <div>
          Final Ans : {JSON.stringify(arrayConcatFunction(defaultArray))}
        </div>
      </div>
    </>
  );
};

export default WorkingHourChallenge;
