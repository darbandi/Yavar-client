import "./Surah.scss";
import React from "react";
import LastRead from "../../components/last-read/LastRead";
import Tab from "../../components/tab/Tab";
import SurahList from "../../components/surah-list/SurahList";


const Surah = () => {
  return (
      <div className="surah">
        <div className="surah__slogan">
          <div className="surah__title">همیشه با قرآن زندگی کنیم</div>
          <b className="surah__description">نرم افزار یادگیری و ترجمه قرآن کریم</b>
        </div>
        <LastRead />
        <Tab />
        <SurahList />
      </div>
  );
};

export default Surah;
