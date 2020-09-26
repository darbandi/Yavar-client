import { useEffect, useState } from "react";
import { get } from "../API";

const useSurahNewWords = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const getData = () => {
    setLoading(true);
    setError(null);
    const params = {
      query: `query{
        lesson(id:"${id}"){
         verses(page: 1, count: 300){
           new_words
         }
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
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [{ loading, data, error }, getData];
};
export default useSurahNewWords;
