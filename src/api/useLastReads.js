import { useState } from "react";
import { post } from "./API";

const useLastReads = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const addLastRead = (surahId, verseId) => {
    setLoading(true);
    setError(null);
    const params = {
      query: `mutation{
        addLastRead(surah_id:${surahId},verse_id:${verseId}){
            id
            surah_id
            verse_id
            created_at
            is_delete
            user_id
        }
      }`,
    };
    post("/LastReads", params)
      .then((result) => result.data.data.addLastRead)
      .then((result) => {})
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const removeLastRead = (id) => {
    setLoading(true);
    setError(null);
    const params = {
      query: `mutation{
        deleteLastRead(id:"${id}"){
            id
            surah_id
            verse_id
            created_at
            is_delete
            user_id
            user{
              email
            }
        }
      }`,
    };
    post("/LastReads", params)
      .then((result) => result.data.data.deleteLastRead)
      .then((result) => {})
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getLastReads = () => {
    setLoading(true);
    setError(null);
    const params = {
      query: `query{
                lastRead{
                    id
                    surah_id
                    verse_id
                    created_at
                    is_delete
                    user_id
                    user{
                        id
                        email
                    }
                    verse{
                        id
                        text_arabic
                        text_persian
                        verse_id
                        surah_id
                        new_words
                        component
                        verse_words_count
                        lesson{
                            id
                            surah_id
                            order
                            surah_name
                            verse_count
                            sequence_of_descent
                            place_of_descent
                        }
                    }
                }
            }`,
    };
    post("/LastReads", params)
      .then((result) => result.data.data.lastRead)
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

  return { data, loading, error, addLastRead, removeLastRead, getLastReads };
};
export default useLastReads;
