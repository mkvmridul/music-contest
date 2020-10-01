import React, {useState, useContext} from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/logo_opposite.png";
import bg from "../../assets/images/bg.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {AuthContext} from "../../context/auth-context";
import { navigate } from "@reach/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles({
  padding: {
    padding: "20px",
  },
  heading: {
    fontSize: "25px",
    color: "#f3c800",
    textAlign: "center",
  },
  input: {
    padding: "15px 20px",
    border: "none",
    borderRadius: " 24px",
    marginTop: "10px",
    fontWeight: "bold",
    background: "#ddd",
  },
  label: {
    fontSize: "13px",
    color: "#333",
    paddingLeft: "0px",
    letterSpacing: "0.05rem",
    marginLeft: "-70px",
  },
  submitButton: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer"
  },
  register: {
    width: "168px",
    height: "50px",
    borderRadius: "30px",
    fontWeight: "bold",
    borderColor: "white",
    color: "white"
  },
  rightPanel: {
    background: `url(${bg})`,
    borderRadius: "0px 20px 20px 0px",
    padding: "60px 20px 10px",
    color: "white",
  },
});
const LoginComponent = props => {
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const loginHandler = e => {
        e.preventDefault();
        if(email.length > 0 && password.length > 0){
                    authContext.turnOnLoader();
                    axios
                      .post(
                        `${authContext.baseUrl}/user/login`,
                        {
                          username: email,
                          password: password,
                        }
                      )
                      .then(function (response) {
                        console.log(response.data);
                        localStorage.setItem(
                          "user",
                          JSON.stringify(response.data.data)
                        );
                        authContext.turnOffLoader();
                        window.location.href = "/upload";
                      })
                      .catch(function (error) {
                        console.log(error.response);
                        authContext.turnOffLoader();
                        setError(error.response.data.message);
                      });
        }else{
          setError("Please enter required field");
        }
  }

  return (
    <center>
      <Grid container>
        <Grid item sm={7} className={classes.padding}>
          <h1 className={classes.heading}>
            Great to see you again, <br /> please log In!
          </h1>
          <br />
          {error && <h4 style={{ color: "red" }}>{error}</h4>}
          <br />
          <form action="#" className="form">
            <label
              htmlFor="loginEmail"
              className={classes.label}
              style={{ marginLeft: "-85px" }}
            >
              Enter Email
            </label>
            <br />
            <input
              type="email"
              id="loginEmail"
              name="loginEmail"
              placeholder="Your Email ID"
              className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />
            <br />

            <label htmlFor="loginPassword" className={classes.label}>
              Enter Password
            </label>
            <br />
            <input
              type="password"
              id="loginPassword"
              name="loginPassword"
              placeholder="* * * * * * * * *"
              className={classes.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <br />
            <br />
            <br />
            <center>
              <input
                type="submit"
                value="Submit"
                className={classes.submitButton}
                onClick={loginHandler}
              />
            </center>
          </form>
        </Grid>
        <Grid item sm={5} className={classes.rightPanel} style={
                      matches ? {
                        display: "none"
                      } : null
                    }>
          <img src={logo} alt="logo" />
          <br />
          <br />
          <h2>Not a User?</h2>
          <p>Fill up personal information and start journey with us.</p>
          <br />
          <Button variant="outlined" className={classes.register} onClick={() => window.location.href = "/"}>
            Register
          </Button>
        </Grid>
      </Grid>
    </center>
  );
};

export default LoginComponent;
