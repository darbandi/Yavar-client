import "./Tab.scss";
import React from "react";

const Tab = () => {
  return (
    <div className="tab">
      <span className="active">سوره‌ها</span>
      <span>نزول آیه</span>
      <span>بیشترین آیه</span>
      <span>کمترین آیه</span>
    </div>
  );
};

export default Tab;
