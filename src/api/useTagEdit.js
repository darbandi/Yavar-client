import { useState } from "react";
import { post } from "./API";

const useTagEdit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const editTag = (id) => {
    setLoading(true);
    setError(null);
    const params = {
      query: `mutation{
        updateTag(id:"${id}"){
          id
          surah_id
          text
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
    post("/tags", params)
      .then((result) => result.data.data.updateTag)
      .then((result) => {})
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [{ loading, error }, editTag];
};
export default useTagEdit;
