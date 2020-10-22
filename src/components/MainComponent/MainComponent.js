import React from 'react';
import Grid from "@material-ui/core/Grid";
import TitleComponent from "./TitleComponent/TitleComponent";
import RegistrationComponent from "./RegistrationComponent/RegistrationComponent";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const MainComponent = () => {
      const matches = useMediaQuery("(max-width:600px)");

      return (
        <Box
          component="div"
          p={8}
          style={
            matches
              ? {
                  padding: "40px",
                }
              : null
          }
        >
          <Grid container justify="space-between">
            <Grid
              item
              sm={6}
              xs={12}
              style={
                matches
                  ? {
                      display: "none",
                    }
                  : null
              }
            >
              <TitleComponent />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <RegistrationComponent />
            </Grid>
          </Grid>
        </Box>
      );
};

export default MainComponent;