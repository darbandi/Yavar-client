import "./SurahNewWords.scss";
import React from "react";
import SurahDetailsCard from "../../components/surah-details-card/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import useSurahNewWords from "../../api/useSurahNewWords";

const SurahNewWords = (props) => {
  const { id } = props.match.params;
  const [{ surahData, loading, error }] = useVerses(id);
  const [{ data }] = useSurahNewWords(id);

  console.log("data : ", data);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="surah-new-words">
      {!isEmpty(data) && <SurahDetailsCard data={surahData} />}
    </div>
  );
};

export default SurahNewWords;
