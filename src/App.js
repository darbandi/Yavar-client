import React from "react";
import { Provider } from "./context/AppContext";
import CustomRouter from "./CustomRouter";
import { BrowserRouter } from "react-router-dom";
import config from "./config.json";

const App = () => {
  document.title = config.siteName;
  return (
    <Provider>
      <BrowserRouter>
        <div className="app">
          <CustomRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
