import React from 'react';
import Header from "../Header/Header";
import MicBgImage from "../../assets/images/main.png";
import { makeStyles } from "@material-ui/core/styles";
import MainComponent from "../MainComponent/MainComponent";
import UploadComponent from "../UploadComponent";
import { Router } from "@reach/router";


const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${MicBgImage})`,
    width: "100vw",
    height: "100vh"
  },
});

const HomeComponent = () => {
      const classes = useStyles();
      return (
        <div className={classes.root}>
          <Header />
          <Router>
            <MainComponent path="/" />
            <UploadComponent path="/upload" />
          </Router>
        </div>
      );
};

export default HomeComponent;