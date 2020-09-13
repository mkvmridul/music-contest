import React from 'react';
import Container from "@material-ui/core/Container";
import icon from "../../assets/images/message.svg";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    marginTop: "20vh",
  },
  button: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "bold",
  },
  title: {
    color: "#f3c800",
  },
});

const SuccessComponent = () => {
      const classes = useStyles();
      return (
        <center className={classes.root}>
          <Container maxWidth="sm">
            <img src={icon} alt="mic" />
            <h1 className={classes.title}>
              Congratulations! You have <br /> successfully uploaded your video.
            </h1>
            <br />
            <p>
              Please check your mail for the confirmation of participation 
              <br />
              and other details about the contest.
            </p>
            <br />
            <Button
              variant="contained"
              color="inherit"
              className={classes.button}
            >
              Back To Site
            </Button>
          </Container>
        </center>
      );
};

export default SuccessComponent;