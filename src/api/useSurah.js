import { useEffect, useState } from "react";
import { get } from "./API";

const useSurah = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      setError(null);
      const params = {
        query: `query{
                    lessons(page:1, count:114) {
                        id
                        surah_id
                        order
                        surah_name
                        verse_count
                        verses_read
                        sequence_of_descent
                        place_of_descent
                    }
                 }`,
      };
      get("/lessons", params)
        .then((result) => result.data.data.lessons)
        .then((result) => {
          setData(result);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getData();
  }, []);

  return { loading, data, error };
};
export default useSurah;
