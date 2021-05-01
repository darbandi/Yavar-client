import "./SurahDetails.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import Tiles from "../../components/Tiles/Tiles";
import SurahDetailsCard from "../../components/surah-details-card/SurahDetailsCard";
import { isEmpty } from "lodash";
import useVerses from "../../api/useVerses";
import Layout from "../../components/layout/Layout";

const SurahDetails = (props) => {
  const { id } = props.match.params;
  const [{ surahData, data, loading, error }] = useVerses(id);

  const layoutOption = {
    header: {
      action: ["search", "back"],
    },
  };

  return (
    <Layout layoutOption={layoutOption}>
      <Profiler id="SurahDetails" onRender={profilerCallback}>
        <div className="surah-details">
          {!isEmpty(surahData) && (
            <SurahDetailsCard
              description={`لیست کلمات سوره ${"ff"}`}
              icon={"icon-list"}
              title={""}
              data={surahData}
            />
          )}
          <Tiles id={id} />
        </div>
      </Profiler>
    </Layout>
  );
};

export default SurahDetails;
