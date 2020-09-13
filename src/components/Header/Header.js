import React from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "../../logo.png";
import '../../assets/scss/Header.scss';

const useStyles = makeStyles({
  header: {
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0,0)",
  },
  image: {
    width: "139px",
    height: "60px",
  },
  reverseFlex: {
    flexBasis: "revert !important",
  },
  login: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "bold",
  },
  activeButton: {
    borderBottom: "3px solid #f3c800",
    borderRadius: "0px",
    marginTop: "10px",
    fontSize: "13px",
  },
  menuButton: {
    marginTop: "10px",
    fontSize: "13px",
  },
});

const Header = () => {
      const classes = useStyles();
      return (
        <Box component="div" className={classes.header} px={8} py={3}>
          <Grid container justify="space-between">
            <img src={logo} alt="logo" xs={4} className={classes.image} />
            <Grid item sm={6} lg={6} className="menuGrid">
              <Grid container className={classes.reverseFlex}>
                <Grid item sm={3} lg={2}>
                  <Button className={classes.activeButton}>Home</Button>
                </Grid>
                <Grid item sm={3} lg={2}>
                  <Button className={classes.menuButton}>About Us</Button>
                </Grid>
                <Grid item sm={3} lg={2}>
                  <Button className={classes.menuButton}>Contest</Button>
                </Grid>
                <Grid item sm={3} lg={2}>
                  <Button
                    variant="contained"
                    color="inherit"
                    className={classes.login}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      );
};

export default Header;