import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "../../../assets/scss/RegistrationComponent.scss";


const useStyles = makeStyles({
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
  },
  submitButton: {
    width: "168px",
    height: "50px",
    background: "#f3c800",
    borderRadius: "30px",
    fontWeight: "bold",
    border: "none"
  },
});

const RegistrationComponent = () => {
      const classes = useStyles();
      return (
            <Box component="div" className="border" pt={3} pb={6} px={5}>
                  <form action="#" className="form">
                        <h1 className={classes.heading}>Register Here</h1>
                        <label htmlFor="name" className={classes.label}>Your Name:</label><br />
                        <input type="text" id="name" name="name" placeholder="Your Name" className={classes.input} /><br />
                        <br />
                        <label htmlFor="email" className={classes.label}>Email:</label><br />
                        <input type="email" id="email" name="email" placeholder="Your Email Id" className={classes.input} /><br />
                        <br />
                        <label htmlFor="mobile" className={classes.label}>Mobile:</label><br />
                        <input type="number" id="mobile" name="mobile" placeholder="Your Mobile Id" className={classes.input} /><br />
                        <br />
                        <br />
                        <center>
                              <input type="submit" value="Submit" className={classes.submitButton}/>
                        </center>
                  </form> 
            </Box>
      );
};

export default RegistrationComponent;