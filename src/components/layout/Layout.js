import "./Layout.scss";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props) => {
  const { layoutOption, children } = props;
  return (
    <div className="layout">
      <div className="layout-header">
        <Header
          // title={layoutOption.header}
          headerOption={layoutOption.header}
        />
      </div>
      <div className="layout-body">{children}</div>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
