import "./Surah.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import LastRead from "../../components/last-read/LastRead";
import Tab from "../../components/tab/Tab";
import Layout from "../../components/layout/Layout";
import SurahList from "../../components/surah-list/SurahList";

const layoutOption = {
  header: {
    action: ["search", "back"],
  },
};
const Surah = () => {
  return (
    <Layout layoutOption={layoutOption}>
      <Profiler id="Surah" onRender={profilerCallback}>
        <div className="surah">
          <div className="text">
            <div className="title">همیشه با قرآن زندگی کنیم</div>
            <b className="description">نرم افزار یادگیری و ترجمه قرآن کریم</b>
          </div>
          <LastRead />
          <Tab />
      <SurahList/>
        </div>
      </Profiler>
    </Layout>
  );
};

export default Surah;
