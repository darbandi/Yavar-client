import "./Surah.scss";
import React from "react";
import LastRead from "../../components/last-read/LastRead";
import Tab from "../../components/tab/Tab";
import Layout from "../../components/layout/Layout";
import SurahList from "../../components/surah-list/SurahList";

const layoutOption = {
  header: {
    action: ["search", "menu"],
  },
};
const Surah = () => {
  return (
    <Layout layoutOption={layoutOption}>
      <div className="surah">
        <div className="surah__slogan">
          <div className="surah__title">همیشه با قرآن زندگی کنیم</div>
          <b className="surah__description">نرم افزار یادگیری و ترجمه قرآن کریم</b>
        </div>
        <LastRead />
        <Tab />
        <SurahList />
      </div>
    </Layout>
  );
};

export default Surah;
