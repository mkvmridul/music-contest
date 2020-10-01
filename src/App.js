import React, {useContext, useEffect} from "react";
import HomeComponent from  "./components/HomeComponent/HomeComponent";
import {Router} from "@reach/router";
import SuccessComponent from "./components/SuccessComponent/SuccessComponent";
import CreatePasswordComponent from "./components/CreatePasswordComponent/CreatePasswordComponent";
import Modal from "./components/UI/Modal/Modal";
import {AuthContext} from "./context/auth-context";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import { navigate } from "@reach/router";
import loader from "./assets/images/loader.gif";


const App = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    if(authContext.auth) navigate('/upload');
  },[authContext.auth]);
  const hideModalHandler = () => {

  }
  return (
    <div className="App">
      { authContext.loader && ( <img alt="loader" src={loader} style={{
        position: "absolute",
        width: "20vw",
        left: "40%",
        top: "45%",
        zIndex: 10000 
      }}
      />)}
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
