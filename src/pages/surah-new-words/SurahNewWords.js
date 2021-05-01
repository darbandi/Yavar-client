import "./SurahNewWords.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import Layout from "../../components/layout/Layout";
import SurahDetailsCard from "../../components/surah-details-card/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";

const layoutOption = {
  header: {
    action: ["search", "back"],
  },
};
const SurahNewWords = (props) => {
  const { id } = props.match.params;
  const [{ surahData, data, loading, error }] = useVerses(id);

  return (
    <Layout layoutOption={layoutOption}>
      <Profiler id="SurahNewWords" onRender={profilerCallback}>
        <div className="surah-new-words">
          {!isEmpty(surahData) && (
            <SurahDetailsCard
              description={`لیست کلمات سوره ${"aa"}`}
              icon={"icon-list"}
              title={""}
              data={surahData}
            />
          )}
        </div>
      </Profiler>
    </Layout>
  );
};

export default SurahNewWords;
