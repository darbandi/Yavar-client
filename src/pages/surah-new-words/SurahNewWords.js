import "./SurahNewWords.scss";
import React from "react";
import Layout from "../../components/layout/Layout";
import SurahDetailsCard from "../../components/surah-details-card/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import useSurahNewWords from "../../api/useSurahNewWords";
import VerseList from "../../components/verse-list/VerseList";

const layoutOption = {
  header: {
    action: ["search", "back"],
  },
};
const SurahNewWords = (props) => {
  const { id } = props.match.params;
  const [{ surahData, loading, error }] = useVerses(id);
  const [{ data }] = useSurahNewWords(id);

  console.log("data : ", data);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <Layout layoutOption={layoutOption}>
      <div className="surah-new-words">
        {!isEmpty(data) && <SurahDetailsCard data={surahData} />}
        
      </div>
    </Layout>
  );
};

export default SurahNewWords;
