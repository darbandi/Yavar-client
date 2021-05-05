import "./Verses.scss";
import React from "react";
import VerseList from "../../components/verse-list/VerseList";
import SurahDetailsCard from "../../components/cards/surah-details/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
const Verses = (props) => {
  const { id } = props.match.params;
  const { surahData, data, loading, error } = useVerses(`query{
    lesson(id:"${id}"){
     surah_name
     verse_count
     place_of_descent
     verses(page: 1, count: 300){
        verse_id
        surah_id
        new_words
        text_arabic 
        text_persian
        is_read{
            id
        }
        tags(page: 1, count: 300){
            id
            text
       }
     }
   }
 }`);

  if (!surahData) return null;
  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="verses">
      {!isEmpty(surahData) && (
        <SurahDetailsCard data={surahData} page="verses" />
      )}

      {data && <VerseList data={data} surahName={surahData.surah_name} />}
    </div>
  );
};

export default Verses;
