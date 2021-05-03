import { useEffect, useState } from "react";
import { get } from "./API";

const useSurahNewWords = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
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
        .then((result) => result.data.data.lesson.verses)
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
    getData();
  }, []);

  return { loading, data, error };
};
export default useSurahNewWords;
