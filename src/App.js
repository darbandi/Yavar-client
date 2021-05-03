import React from "react";
import { Provider } from "./context/AppContext";
import CustomRouter from "./CustomRouter";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  document.title = "یاور";
  const layoutOption = {
    header: {
      action: ["search", "menu"],
    },
  };
  return (
    <Provider>
      <BrowserRouter>
        <div className="app">
          <Layout layoutOption={layoutOption}>
            <CustomRouter />
          </Layout>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
