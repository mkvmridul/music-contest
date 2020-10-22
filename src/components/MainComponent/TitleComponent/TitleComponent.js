import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
      heading:{
            fontSize: "50px"
      }
});

const TitleComponent = () => {
      const classes = useStyles();
      return (
        <Box component="div" mt={10} pl={7}>
          <h1 className={classes.heading} style={{ marginBottom: "10px" }}>Refine Your</h1>
          <h1 className={classes.heading} style={{ color: "#f3c800", marginTop: "0px" }}>
            Singing Talent
          </h1>
          <p>
            And get what you deserve
          </p>
        </Box>
      );
};

export default TitleComponent;