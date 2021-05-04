import "./SurahNewWords.scss";
import React from "react";
import SurahDetailsCard from "../../components/cards/surah-details/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import VerseNewWords from "../../components/verse-list/new-words/VerseNewWords";

const SurahNewWords = (props) => {
  const { id } = props.match.params;
  const { surahData, data, loading, error } = useVerses(`query{
    lesson(id:"${id}"){
     surah_name
     verse_count
     place_of_descent
     verses(page: 1, count: 300){
       new_words
       verse_words_count
     }
   }
 }`);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="surah-new-words">
      {!isEmpty(surahData) && <SurahDetailsCard data={surahData} type="list" />}
      {!isEmpty(data) && <VerseNewWords data={data} />}
    </div>
  );
};

export default SurahNewWords;
