import "./SurahNewWords.scss";
import React from "react";
import SurahDetailsCard from "../../components/cards/surah-details/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import useSurahNewWords from "../../api/useSurahNewWords";
import VerseNewWords from "../../components/verse-list/new-words/VerseNewWords";

const SurahNewWords = (props) => {
  const { id } = props.match.params;
  const { surahData, loading, error } = useVerses(id);
  const { data } = useSurahNewWords(id);

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
