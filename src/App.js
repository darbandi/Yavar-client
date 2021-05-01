import React from "react";
import { Provider } from "./context/AppContext";
import CustomRouter from "./CustomRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  document.title = "یاور";
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
