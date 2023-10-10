import React from "react";

const JustExample = () => {
  const routeDetails = [
    {
      selected_day: "1_day",
      route_options: [
        {
          selectted_route_option: "route_1",
          route_path: [
            { mainPlace: "Main Place 1_1_day__1", subPlace: null },
            { mainPlace: "Main Place 2_1_day__1", subPlace: "Sub Place 2_1" },
            { mainPlace: "Main Place 3_1_day__1", subPlace: "Sub Place 3_1" },
            { mainPlace: "Main Place 4_1_day__1", subPlace: "Sub Place 4_1" },
          ],
        },
        {
          selectted_route_option: "route_2",
          route_path: [
            { mainPlace: "Main Place 1_1_day__2", subPlace: null },
            { mainPlace: "Main Place 2_1_day__2", subPlace: "Sub Place 2_2" },
            { mainPlace: "Main Place 3_1_day__2", subPlace: "Sub Place 3_2" },
            { mainPlace: "Main Place 4_1_day__2", subPlace: "Sub Place 4_2" },
          ],
        },
        {
          selectted_route_option: "route_3",
          route_path: [
            { mainPlace: "Main Place 1_1_day__3", subPlace: null },
            { mainPlace: "Main Place 2_1_day__3", subPlace: "Sub Place 2_3" },
            { mainPlace: "Main Place 3_1_day__3", subPlace: "Sub Place 3_3" },
            { mainPlace: "Main Place 4_1_day__3", subPlace: "Sub Place 4_3" },
          ],
        },
        {
          selectted_route_option: "route_4",
          route_path: [
            { mainPlace: "Main Place 1_1_day__4", subPlace: null },
            { mainPlace: "Main Place 2_1_day__4", subPlace: "Sub Place 2_4" },
            { mainPlace: "Main Place 3_1_day__4", subPlace: "Sub Place 3_4" },
            { mainPlace: "Main Place 4_1_day__4", subPlace: "Sub Place 4_4" },
          ],
        },
      ],
    },
    {
      selected_day: "2_day_1_night",
      route_options: [
        {
          selectted_route_option: "route_1",
          route_path: [
            { mainPlace: "Main Place 1_2_day_1_night_1", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_1_night_1",
              subPlace: "Sub Place 2_1",
            },
            {
              mainPlace: "Main Place 3_2_day_1_night_1",
              subPlace: "Sub Place 3_1",
            },
            {
              mainPlace: "Main Place 4_2_day_1_night_1",
              subPlace: "Sub Place 4_1",
            },
          ],
        },
        {
          selectted_route_option: "route_2",
          route_path: [
            { mainPlace: "Main Place 1_2_day_1_night_2", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_1_night_2",
              subPlace: "Sub Place 2_2",
            },
            {
              mainPlace: "Main Place 3_2_day_1_night_2",
              subPlace: "Sub Place 3_2",
            },
            {
              mainPlace: "Main Place 4_2_day_1_night_2",
              subPlace: "Sub Place 4_2",
            },
          ],
        },
        {
          selectted_route_option: "route_3",
          route_path: [
            { mainPlace: "Main Place 1_2_day_1_night_3", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_1_night_3",
              subPlace: "Sub Place 2_3",
            },
            {
              mainPlace: "Main Place 3_2_day_1_night_3",
              subPlace: "Sub Place 3_3",
            },
            {
              mainPlace: "Main Place 4_2_day_1_night_3",
              subPlace: "Sub Place 4_3",
            },
          ],
        },
        {
          selectted_route_option: "route_4",
          route_path: [
            { mainPlace: "Main Place 1_2_day_1_night_4", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_1_night_4",
              subPlace: "Sub Place 2_4",
            },
            {
              mainPlace: "Main Place 3_2_day_1_night_4",
              subPlace: "Sub Place 3_4",
            },
            {
              mainPlace: "Main Place 4_2_day_1_night_4",
              subPlace: "Sub Place 4_4",
            },
          ],
        },
        {
          selectted_route_option: "route_5",
          route_path: [
            { mainPlace: "Main Place 1_2_day_1_night_5", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_1_night_5",
              subPlace: "Sub Place 2_5",
            },
            {
              mainPlace: "Main Place 3_2_day_1_night_5",
              subPlace: "Sub Place 3_5",
            },
            {
              mainPlace: "Main Place 4_2_day_1_night_5",
              subPlace: "Sub Place 4_5",
            },
          ],
        },
      ],
    },
    {
      selected_day: "2_day_2_night",
      route_options: [
        {
          selectted_route_option: "route_1",
          route_path: [
            { mainPlace: "Main Place 1_2_day_2_night_1", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_2_night_1",
              subPlace: "Sub Place 2_1",
            },
            {
              mainPlace: "Main Place 3_2_day_2_night_1",
              subPlace: "Sub Place 3_1",
            },
            {
              mainPlace: "Main Place 4_2_day_2_night_1",
              subPlace: "Sub Place 4_1",
            },
          ],
        },
        {
          selectted_route_option: "route_2",
          route_path: [
            { mainPlace: "Main Place 1_2_day_2_night_2", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_2_night_2",
              subPlace: "Sub Place 2_2",
            },
            {
              mainPlace: "Main Place 3_2_day_2_night_2",
              subPlace: "Sub Place 3_2",
            },
            {
              mainPlace: "Main Place 4_2_day_2_night_2",
              subPlace: "Sub Place 4_2",
            },
          ],
        },
        {
          selectted_route_option: "route_3",
          route_path: [
            { mainPlace: "Main Place 1_2_day_2_night_3", subPlace: null },
            {
              mainPlace: "Main Place 2_2_day_2_night_3",
              subPlace: "Sub Place 2_3",
            },
            {
              mainPlace: "Main Place 3_2_day_2_night_3",
              subPlace: "Sub Place 3_3",
            },
            {
              mainPlace: "Main Place 4_2_day_2_night_3",
              subPlace: "Sub Place 4_3",
            },
          ],
        },
      ],
    },
    {
      selected_day: "3_day_2_night",
      route_options: [
        {
          selectted_route_option: "route_1",
          route_path: [
            { mainPlace: "Main Place 1_3_day_2_night_1", subPlace: null },
            {
              mainPlace: "Main Place 2_3_day_2_night_1",
              subPlace: "Sub Place 2_1",
            },
            {
              mainPlace: "Main Place 3_3_day_2_night_1",
              subPlace: "Sub Place 3_1",
            },
            {
              mainPlace: "Main Place 4_3_day_2_night_1",
              subPlace: "Sub Place 4_1",
            },
          ],
        },
        {
          selectted_route_option: "route_2",
          route_path: [
            { mainPlace: "Main Place 1_3_day_2_night_2", subPlace: null },
            {
              mainPlace: "Main Place 2_3_day_2_night_2",
              subPlace: "Sub Place 2_2",
            },
            {
              mainPlace: "Main Place 3_3_day_2_night_2",
              subPlace: "Sub Place 3_2",
            },
            {
              mainPlace: "Main Place 4_3_day_2_night_2",
              subPlace: "Sub Place 4_2",
            },
          ],
        },
        {
          selectted_route_option: "route_3",
          route_path: [
            { mainPlace: "Main Place 1_3_day_2_night_3", subPlace: null },
            {
              mainPlace: "Main Place 2_3_day_2_night_3",
              subPlace: "Sub Place 2_3",
            },
            {
              mainPlace: "Main Place 3_3_day_2_night_3",
              subPlace: "Sub Place 3_3",
            },
            {
              mainPlace: "Main Place 4_3_day_2_night_3",
              subPlace: "Sub Place 4_3",
            },
          ],
        },
        {
          selectted_route_option: "route_4",
          route_path: [
            { mainPlace: "Main Place 1_3_day_2_night_4", subPlace: null },
            {
              mainPlace: "Main Place 2_3_day_2_night_4",
              subPlace: "Sub Place 2_4",
            },
            {
              mainPlace: "Main Place 3_3_day_2_night_4",
              subPlace: "Sub Place 3_4",
            },
            {
              mainPlace: "Main Place 4_3_day_2_night_4",
              subPlace: "Sub Place 4_4",
            },
          ],
        },
        {
          selectted_route_option: "route_5",
          route_path: [
            { mainPlace: "Main Place 1_3_day_2_night_5", subPlace: null },
            {
              mainPlace: "Main Place 2_3_day_2_night_5",
              subPlace: "Sub Place 2_5",
            },
            {
              mainPlace: "Main Place 3_3_day_2_night_5",
              subPlace: "Sub Place 3_5",
            },
            {
              mainPlace: "Main Place 4_3_day_2_night_5",
              subPlace: "Sub Place 4_5",
            },
          ],
        },
        {
          selectted_route_option: "route_6",
          route_path: [
            { mainPlace: "Main Place 1_3_day_2_night_6", subPlace: null },
            {
              mainPlace: "Main Place 2_3_day_2_night_6",
              subPlace: "Sub Place 2_6",
            },
            {
              mainPlace: "Main Place 3_3_day_2_night_6",
              subPlace: "Sub Place 3_6",
            },
            {
              mainPlace: "Main Place 4_3_day_2_night_6",
              subPlace: "Sub Place 4_6",
            },
          ],
        },
      ],
    },
  ];

  const receivedData = {
    selected_day: "3_day_2_night",
    selectted_route_option: "route_6",
  };

  // console.log("routeDetails-->>", routeDetails, receivedData);

  // method 1 *****************************************************************************************************************************
  const matchingRoute = routeDetails.find((routeDetail) => {
    return (
      routeDetail.selected_day === receivedData.selected_day &&
      routeDetail.route_options.some(
        (option) =>
          option.selectted_route_option === receivedData.selectted_route_option
      )
    );
  });

  let method_1_routePath = null;

  if (matchingRoute) {
    const selectedOption = matchingRoute.route_options.find(
      (option) =>
        option.selectted_route_option === receivedData.selectted_route_option
    );

    if (selectedOption) {
      method_1_routePath = selectedOption.route_path;
    }
  }
  // console.log("method_1_routePath--->>>", method_1_routePath);

  // method 2 *****************************************************************************************************************************
  function findRoutePath(routeDetails, receivedData) {
    const matchingRouteMethodSecond = routeDetails?.filter((routeDetail) => {
      // console.log("routeDetail:--->>>", routeDetail);
      return (
        routeDetail?.selected_day === receivedData?.selected_day &&
        routeDetail?.route_options?.some((option) => {
          console.log("option:--->>> 1", option);
          return (
            option.selectted_route_option ===
            receivedData.selectted_route_option
          );
        })
      );
    });

    console.log("matchingRouteMethodSecond:-->>", matchingRouteMethodSecond);
    return matchingRouteMethodSecond?.length > 0
      ? matchingRouteMethodSecond[0]?.route_options?.find((option) => {
          console.log("option:--->>> 2", option);
          return (
            option?.selectted_route_option ===
            receivedData?.selectted_route_option
          );
        })?.route_path
      : null;
  }

  const method_2_routePath = findRoutePath(routeDetails, receivedData);

  // console.log("method_2_routePath-->>", method_2_routePath);

  return (
    <div>
      <div>
        received-data
        <div>
          <p className="text-bg-warning">
            selected_day = {receivedData.selected_day} || selectted_route_option
            = {receivedData.selectted_route_option}
          </p>
        </div>
      </div>
      <div className="text-danger">
        {method_2_routePath.map((row, index) => (
          <div key={index}>
            <p>
              {row?.mainPlace} || {row?.subPlace ? row?.subPlace : "--"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustExample;
