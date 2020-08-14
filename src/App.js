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
        <div className="App">
          <header className="App-header"></header>
          <div className="App-body"></div>
          <footer className="App-footer"></footer>
          <CustomRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
