import React, {useContext} from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "../../logo.png";
import '../../assets/scss/Header.scss';
import {AuthContext} from '../../context/auth-context';
import { navigate } from "@reach/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
      const authContext = useContext(AuthContext);
      const classes = useStyles();
      const matches = useMediaQuery("(max-width:600px)");

      const loginHandler = () => {
        if (!authContext.auth){
           authContext.loggingHandler();
        }
        else{
          authContext.auth = false;
          localStorage.removeItem("user");
          navigate("/");
        }

      }

      return (
        <Box component="div" className={classes.header} px={8} py={3} style={
          matches ? {
            padding: "18px 15px"
          } : null
        }>
          <Grid container justify="space-between">
            <img src={logo} alt="logo" xs={4} className={classes.image} style={
          matches ? {
            width: "116px",
            height: "45px"
          } : null
        }/>
            <Grid item sm={6} lg={6} className="menuGrid">
              <Grid container className={classes.reverseFlex}>
                <Grid item sm={3} lg={2} style={
                      matches ? {
                        display: "none"
                      } : null
                    }>
                  <Button className={classes.activeButton}>Home</Button>
                </Grid>
                <Grid item sm={3} lg={2} style={
                      matches ? {
                        display: "none"
                      } : null
                    }>
                  <Button className={classes.menuButton}>About Us</Button>
                </Grid>
                <Grid item sm={3} lg={2} style={
                      matches ? {
                        display: "none"
                      } : null
                    }>
                  <Button className={classes.menuButton}>Contest</Button>
                </Grid>
                <Grid item sm={3} lg={2} style={
                      matches ? {
                        zIndex: 1000
                      } : null
                    }>
                  <Button
                    variant="contained"
                    color="inherit"
                    className={classes.login}
                    onClick={()=>loginHandler()}
                  >
                    {authContext.auth ? "logout" : "login"  }
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      );
};

export default Header;