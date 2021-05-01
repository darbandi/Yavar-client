import { useState } from "react";
import { post } from "./API";

const useTagAdd = (data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const addTag = (surahId, verseId, text) => {
    setLoading(true);
    setError(null);
    const params = {
      query: `mutation{
        addTag(surah_id:${surahId},verse_id:${verseId},text:"${text}"){
          id
          surah_id
          text
          verse_id
          created_at
          is_delete
          user_id
        }
      }`,
    };
    post("/tags", params)
      .then((result) => result.data.data.addTag)
      .then((result) => {
        data.push(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [{ loading, error }, addTag];
};
export default useTagAdd;
