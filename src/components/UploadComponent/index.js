import React from 'react';
import Uploader from './Uploader';
import Container from "@material-ui/core/Container";
import ProgressBar from "./ProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  submit: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#121212",
    },
  },
});

const UploadComponent = () => {
      const classes = useStyles();
      return (
        <center>
          <Container maxWidth="sm">
            <Uploader />
            <br />
            <br />
            <ProgressBar progress={"30%"} />
            <br />
            <br />
            <Button
              variant="contained"
              color="inherit"
              className={classes.submit}
            >
              Submit
            </Button>
          </Container>
        </center>
      );
};

export default UploadComponent;