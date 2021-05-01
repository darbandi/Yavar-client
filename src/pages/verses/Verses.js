import "./Verses.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import Layout from "../../components/layout/Layout";
import VerseList from "../../components/verse-list/VerseList";
import SurahDetailsCard from "../../components/surah-details-card/SurahDetailsCard";
import useVerses from "../../api/useVerses";
import { isEmpty } from "lodash";

const layoutOption = {
  header: {
    action: ["search", "back"],
  },
};
const Verses = (props) => {
  const { id } = props.match.params;
  const [{ surahData, data, loading, error }] = useVerses(id);

  return (
    <Layout layoutOption={layoutOption}>
      <Profiler id="Verses" onRender={profilerCallback}>
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
      </Profiler>
    </Layout>
  );
};

export default Verses;
