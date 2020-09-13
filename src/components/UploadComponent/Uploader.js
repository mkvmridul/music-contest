import React from 'react';
import Box from "@material-ui/core/Box";
import upload from "../../assets/images/upload.svg";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import "../../assets/scss/Uploader.scss";

const useStyles = makeStyles({
  uploadButton: {
    width: "168px",
    height: "50px",
    background: "#121212",
    borderRadius: "30px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#f3c800",
    },
  },
});

const Uploader = () => {
      const classes = useStyles();
      return (
        <Box component="div" py="5vh" className="uploadBorderBottom">
          <h1>Upload your Video here</h1>
          <br />
          <img src={upload} alt="upload video MIC" />
          <p>Click on the button or Drag & Drop files here</p>
          <br />
          <Button
            variant="contained"
            color="inherit"
            className={classes.uploadButton}
          >
            Upload Video
          </Button>
        </Box>
      );
};

export default Uploader;