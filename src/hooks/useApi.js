import { useState } from "react";
// import { get } from "../services/API";

const useApi = () => {
  const [state, setState] = useState({
    loading: false,
    data: [],
    error: null,
  });

  const query = (address, params) => {
    setState((prev) => ({
      ...prev,
      loading: true,
      error: null,
    }));

    return new Promise((resolve, reject) => {
    //   get(address, params)
    //     .then((response) => response.data.result.data)
    //     .then((response) => {
    //       setState((prev) => ({
    //         ...prev,
    //         loading: false,
    //         data: response,
    //       }));
    //       resolve(response);
    //     })
    //     .catch((err) => {
    //       setState((prev) => ({
    //         ...prev,
    //         loading: false,
    //         error: err,
    //       }));
    //       reject(err);
    //     });
    });
  };

  return { ...state, query };
};

export default useApi;
