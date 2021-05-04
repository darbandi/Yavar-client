import "./LastReadCard.scss";
import React, { useEffect } from "react";
import useLastReads from "../../../api/useLastReads";
import Loading from "../../loading/Loading";
import Error from "../../error/Error";
import { withRouter } from "react-router";

const LastReadCard = ({ history }) => {
  const { data, error, loading, getLastReads } = useLastReads();

  useEffect(() => {
    getLastReads();
  }, []);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div
      className="last-read"
      onClick={() => history.push(`/verses/${data?.verse?.lesson?.id}#item-${data?.verse?.verse_id}`)}
    >
      <div className="last-read__title">
        <img
          className="last-read__icon"
          src={require("./../../../assets/img/last-read.svg")}
          alt="logo"
        />
        <span>آخرین آیه قرائت شده</span>
      </div>
      <div className="last-read__verse">
        <div className="last-read__verse__right">
          <div className="last-read__verse__title">
            {data?.verse?.lesson?.surah_name}
          </div>
          <div className="last-read__verse__description">
            {data?.verse?.text_arabic}
          </div>
        </div>

        <div className="last-read__verse__logo">
          <img src={require("./../../../assets/img/quran.svg")} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(LastReadCard);
