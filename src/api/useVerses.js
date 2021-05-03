import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { get } from "./API";

const useVerses = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const [surahData, setSurahData] = useState({});

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      setError(null);
      const params = {
        query: `query{
        lesson(id:"${id}"){
         id
         surah_id
         order
         surah_name
         verse_count
         sequence_of_descent
         place_of_descent
         verses(page: 1, count: 300){
           text_arabic
           text_persian
           verse_id
           surah_id
           new_words
           component
           verse_words_count
           tags{
             id
             surah_id
             verse_id
             text
             is_delete
             created_at
             user_id
             user{
               email
             }
           }
           is_favorite{
               id
           }
           is_read{
               id
           }
         }
       }
     }`,
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
