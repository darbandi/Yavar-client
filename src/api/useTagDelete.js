import { useState } from "react";
import { post } from "./API";

const useTagDelete = (data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const deleteTag = (id) => {
    setLoading(true);
    setError(null);
    const params = {
      query: `mutation{
        deleteTag(id:"${id}"){
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
      .then((result) => result.data.data.deleteTag)
      .then((result) => {

        
        // data = data.filter((x) => x.id !== result.id);
        data.splice((x) => x.id !== result.id);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [{ loading, error }, deleteTag];
};
export default useTagDelete;