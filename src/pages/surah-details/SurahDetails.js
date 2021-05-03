import "./SurahDetails.scss";
import React from "react";
import Tiles from "../../components/tiles/Tiles";
import SurahDetailsCard from "../../components/surah-details-card/SurahDetailsCard";
import { isEmpty } from "lodash";
import useVerses from "../../api/useVerses";
import Layout from "../../components/layout/Layout";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const SurahDetails = (props) => {
  const { id } = props.match.params;
  const [{ surahData, data, loading, error }] = useVerses(id);

  const layoutOption = {
    header: {
      action: ["search", "back"],
    },
  };

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <Layout layoutOption={layoutOption}>
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
    </Layout>
  );
};

export default SurahDetails;
