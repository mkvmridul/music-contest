import React from "react";
import HomeComponent from  "./components/HomeComponent/HomeComponent";
import {Router} from "@reach/router";
import SuccessComponent from "./components/SuccessComponent/SuccessComponent";
import CreatePasswordComponent from "./components/CreatePasswordComponent/CreatePasswordComponent";

const App = () => {
  return (
    <div className="App">
      <Router>
        <HomeComponent path="/*" />
        <SuccessComponent path="/success" />
        <CreatePasswordComponent path="/password" />
      </Router>
    </div>
  );
}

export default App;
