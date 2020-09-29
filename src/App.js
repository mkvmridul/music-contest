import React, {useContext, useEffect} from "react";
import HomeComponent from  "./components/HomeComponent/HomeComponent";
import {Router} from "@reach/router";
import SuccessComponent from "./components/SuccessComponent/SuccessComponent";
import CreatePasswordComponent from "./components/CreatePasswordComponent/CreatePasswordComponent";
import Modal from "./components/UI/Modal/Modal";
import {AuthContext} from "./context/auth-context";
import LoginComponent from "./components/LoginComponent/LoginComponent";
  import { navigate } from "@reach/router";


const App = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    if(authContext.auth) navigate('/upload');
  },[authContext.auth]);
  return (
    <div className="App">
      <Modal show={authContext.logging} closeModal={authContext.loggingHandler}>
        <LoginComponent />
      </Modal>
      <Router>
        <HomeComponent path="/*" />
        <SuccessComponent path="/success" />
        <CreatePasswordComponent path="/password" />
      </Router>
    </div>
  );
}

export default App;
