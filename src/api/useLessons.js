import { useEffect, useState } from "react";
import { get } from "./API";

const useLessons = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

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
export default useLessons;
