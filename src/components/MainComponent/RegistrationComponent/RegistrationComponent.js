import React, {useContext, useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "../../../assets/scss/RegistrationComponent.scss";
import {AuthContext} from "../../../context/auth-context";
import music from "../../../assets/images/music.svg";
import Modal from "../../UI/Modal/Modal";
import CreatePasswordComponent from "../../CreatePasswordComponent/CreatePasswordComponent";
import axios from "axios";
  import { navigate } from "@reach/router";



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
    border: "none",
    cursor: "pointer",
  },
});

const RegistrationComponent = () => {
  const authContext = useContext(AuthContext);
  const [registering, setRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

    const registrationHandler = (e) => {
        e.preventDefault();
        if (name.length > 0 && email.length > 0 && mobile.length > 0) {
            toggleRegistering();
        }else{
          setError("Please enter required fields");
        }
    }

    const submitHandler = () => {
      if (password.length > 0 && confirmPassword.length > 0) {
        axios
          .post(`${authContext.baseUrl}/user/register`, {
            username: email,
            name: name,
            phone_no: mobile,
            password: password,
          })
          .then(function (response) {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            authContext.auth = true;
            navigate('/upload');
          })
          .catch(function (error) {
            setError(error.response.data.message);
            toggleRegistering();
          });
      }
      else{
          toggleRegistering();
      }
    };

    const toggleRegistering = () => setRegistering(!registering);
    const handlePassword = pass => setPassword(pass); 
    const handleConfirmPassword = (pass) => setConfirmPassword(pass); 

      const classes = useStyles();
      return !authContext.auth ? (
        <Box component="div" className="border" pt={3} pb={6} px={5}>
          <Modal show={registering} closeModal={toggleRegistering}>
            <CreatePasswordComponent
              password={handlePassword}
              confirmPassword={handleConfirmPassword}
              submit={submitHandler}
            />
          </Modal>
          {error && <h4 style={{ color: "red" }}>{error}</h4>}

          <form action="#" className="form">
            <h1 className={classes.heading}>Register Here</h1>
            <label htmlFor="name" className={classes.label}>
              Your Name:
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={classes.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="email" className={classes.label}>
              Email:
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Id"
              className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="mobile" className={classes.label}>
              Mobile:
            </label>
            <br />
            <input
              type="number"
              id="mobile"
              name="mobile"
              placeholder="Your Mobile Id"
              className={classes.input}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <br />
            <br />
            <br />
            <center>
              <input
                type="submit"
                value="Submit"
                className={classes.submitButton}
                onClick={registrationHandler}
              />
            </center>
          </form>
        </Box>
      ) : (
        <img
          src={music}
          alt="admere"
          style={{ width: "42%", position: "fixed", bottom: 0 }}
        />
      );
};

export default RegistrationComponent;