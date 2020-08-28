import "./Page-1.scss";
import React, { Profiler, useState, useEffect } from "react";
// import { CustomState, CustomDispatch } from "./../../context/AppContext";
// import config from "config";
import { profilerCallback } from "./../../Utils";
import { get } from "./../../API";

let Page1 = () => {
  //   const state = CustomState();
  //   const dispatch = CustomDispatch();

  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);  
    setError(null);
    const params = {
      query: `query{
                lessons(page:1, count:50) {
                    name
                    id
                    key
                }
             }`,
    };
    get("/lessons", params)
      .then((result) => result.data.data.lessons)
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
          setError(error);
      })
      .finally(() => {
          setLoading(false)
      });
  }, []);

  return (
    <Profiler id="Page1" onRender={profilerCallback}>
      <div className="page-1">
        {data?.map((item) => (
          <div key={item?.id}>{item?.name}</div>
        ))}
      </div>
    </Profiler>
  );
};

export default Page1;
