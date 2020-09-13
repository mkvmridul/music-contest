import React from 'react';
import Grid from "@material-ui/core/Grid";
import TitleComponent from "./TitleComponent/TitleComponent";
import RegistrationComponent from "./RegistrationComponent/RegistrationComponent";
import Box from "@material-ui/core/Box";

const MainComponent = () => {
      return (
        <Box component="div" p={8} >
          <Grid container justify="space-between" >
            <Grid item sm={6}>
              <TitleComponent />
            </Grid>
            <Grid item sm={3}>
              <RegistrationComponent />
            </Grid>
          </Grid>
        </Box>
      );
};

export default MainComponent;