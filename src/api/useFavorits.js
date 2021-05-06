import { useState } from "react";
import { get, post } from "./API";

const useFavorites = (query) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [error, setError] = useState();

  const getFavorite = () => {
    setLoading(true);
    setError(null);
    const params = {
      query: `query{
        favorites(page:1, count:200){
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
    get("/favorites", params)
      .then((result) => result.data.data.favorites)
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

  const removeFavorites = (id) => {
    setLoading(true);
    setError(null);
    const params = {
      query: `mutation{
        deleteFavorite(id:"${id}"){
          id
        }
      }`,
    };
    post("/favorites", params)
      .then((result) => result.data.data.lesson)
      .then((result) => {})
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addFavorites = (surah_id, verse_id) => {
    setLoading(true);
    setError(null);
    const params = {
      query: `mutation{
        addFavorite(surah_id:${surah_id},verse_id:${verse_id}){
          id
        }
      }`,
    };
    post("/favorites", params)
      .then((result) => result.data.data.lesson)
      .then((result) => {})
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    loading,
    error,
    getFavorite,
    addFavorites,
    removeFavorites,
  };
};
export default useFavorites;
