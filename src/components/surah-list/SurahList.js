import React from "react";
import useSurah from "../../api/useSurah";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import SurahItem from "./surah-item/SurahItem";
import "./SurahList.scss";

const SurahList = () => {
  const { data, loading, error } = useSurah();

  if (error) return <Error style={{ marginTop: 20 }} />;
  if (loading) return <Loading />;

  return (
    <div className="surah-list">
      {data?.map((lesson) => (
        <SurahItem key={"lesson_" + lesson.id} data={lesson} />
      ))}
    </div>
  );
};

export default SurahList;
