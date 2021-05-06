import React, { useState } from "react";
import useFavorites from "../../../../../api/useFavorits";
import favorite from "./../../../../../assets/img/verse-actions/favorite.svg";
import favoriteFill from "./../../../../../assets/img/verse-actions/favoriteFill.svg";

const Favorites = (props) => {
  let { data, verseId, surahId } = props;
  const [state, setState] = useState(data?.is_favorite?.id ? true : false);

  const { addFavorites, removeFavorites } = useFavorites();

  return (
    <img
      src={state ? favoriteFill : favorite}
      alt="logo"
      onClick={() => {
        if (state) {
          removeFavorites(data.is_favorite["id"]);
        } else {
          addFavorites(surahId, verseId);
        }
        setState(!state);
      }}
    />
  );
};

export default Favorites;
