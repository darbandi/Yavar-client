import "./Page-1.scss";
import React, { Profiler, useState } from "react";
// import { CustomState, CustomDispatch } from "./../../context/AppContext";
// import config from "config";
import { profilerCallback } from "./../../Utils";

let Page1 = () => {
  //   const state = CustomState();
  //   const dispatch = CustomDispatch();

  const [count, setCount] = useState(0)

  return (
    <Profiler id="Page1" onRender={profilerCallback}>
      <div className="page-1">page-1</div>
    </Profiler>
  );
};

export default Page1;
