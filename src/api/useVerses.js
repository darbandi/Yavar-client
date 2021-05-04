import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { get } from "./API";

const useVerses = (query) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const [surahData, setSurahData] = useState({});

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      setError(null);
      const params = {
        query,
      };
      get("/lessons", params)
        .then((result) => result.data.data.lesson)
        .then((result) => {
          setData(result.verses);
          const surah = cloneDeep(result);
          delete surah.verses;
          setSurahData(surah);
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

  return { surahData, loading, data, error };
};
export default useVerses;
