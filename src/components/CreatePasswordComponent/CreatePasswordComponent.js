import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles({
  root: {
    marginTop: "20vh",
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
    paddingLeft: "20px",
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
  },
});

const CreatePasswordComponent = () => {
      const classes = useStyles();
      return (
        <Container maxWidth="sm" className={classes.root}>
          <center>
            <form action="#" className="form">
              <h1 className={classes.heading}>Create your password</h1>
              <br />
              <br />
              <label htmlFor="password" className={classes.label}>
                Enter Password
              </label>
              <br />
              <input
                type="text"
                id="password"
                name="password"
                placeholder="* * * * * * * * *"
                className={classes.input}
              />

              <br />
              <br />
              <br />

              <label htmlFor="confirmPassword" className={classes.label}>
                Retype Password
              </label>
              <br />
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="* * * * * * * * *"
                className={classes.input}
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
                />
              </center>
            </form>
          </center>
        </Container>
      );
};

export default CreatePasswordComponent;