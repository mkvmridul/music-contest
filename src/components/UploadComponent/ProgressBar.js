import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import playButton from "../../assets/images/play.svg";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  barWrapper: {
    background: "rgba(255,255,255,0.4)",
    borderRadius: "40px",
  },
  bar: {
    height: "5px",
    background: "#999",
    width: "100%",
    position: "relative",
  },
  progress: {
    background: "yellow",
    height: "5px",
    position: "absolute",
  },
});

const ProgressBar = props => {
      const classes = useStyles();
      return (
        <Box component="div" className={classes.barWrapper}>
          <Grid container>
            <Grid item sm={2} style={{ borderRight: "1px solid #ccc" }}>
              <img
                src={playButton}
                alt="play button"
                style={{ width: "35%", marginTop: "19px" }}
              />
            </Grid>
            <Grid sm={9} style={{ textAlign: "left" }} item>
              <Box component="p" pl={2}>
                Video <b>Creative Designs By Aman.mp4</b> is uploading
              </Box>
              <Box component="div" className={classes.bar} ml={2} mb={2}>
                <span
                  className={classes.progress}
                  style={{ width: `${props.progress}` }}
                ></span>
              </Box>
            </Grid>
          </Grid>
        </Box>
      );
};

export default ProgressBar;