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

  const getLastReads = (query) => {
    setLoading(true);
    setError(null);
    const params = {
      query,
    };
    post("/LastReads", params)
      .then((result) => result.data.data.lastRead)
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

  return { data, loading, error, addLastRead, removeLastRead, getLastReads };
};
export default useLastReads;
