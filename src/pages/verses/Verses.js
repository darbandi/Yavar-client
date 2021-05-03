import "./Verses.scss";
import React from "react";
import VerseList from "../../components/verse-list/VerseList";
import SurahDetailsCard from "../../components/surah-details-card/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";

const Verses = (props) => {
  const { id } = props.match.params;
  const [{ surahData, data, loading, error }] = useVerses(id);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="verses">
      {!isEmpty(surahData) && (
        <SurahDetailsCard
          description={`لیست کلمات سوره ${"ff"}`}
          icon={"icon-list"}
          title={""}
          data={surahData}
        />
      )}

      {data && <VerseList data={data} />}
    </div>
  );
};

export default Verses;
