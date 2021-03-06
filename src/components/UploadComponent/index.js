import React, {useEffect, useContext, useState} from 'react';
import Uploader from './Uploader';
import Container from "@material-ui/core/Container";
import ProgressBar from "./ProgressBar";
import {AuthContext} from "../../context/auth-context";
import { navigate } from "@reach/router";
import axios from "axios";

let file = "";


const UploadComponent = () => {
  const authContext = useContext(AuthContext);
  const [submitButton, setSubmitButton] = useState(true);
  const [selectedFile, setSelectedFile] = useState([]);
  const [progress, setProgress] = useState(null);
     
  const disableSubmitHandler = () => {
        setSubmitButton(false);
  }

    useEffect(() => {
        if(!authContext.auth) navigate("/") ;
    },[authContext.auth]);
    const selectedFileHandler = (file) => {
      setSelectedFile(file);
      let formData = new FormData();
      formData.append("contestVideo",file);
      disableSubmitHandler();
      axios
        .post(
          // `${authContext.baseUrl}/submit/contest/5f65baa188113427d0cbc4e3/user/5f69e79e05a502835da39485`,
          `${authContext.baseUrl}/submit/contest/5f65baa188113427d0cbc4e3/user/${JSON.parse(localStorage.getItem("user"))._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
                    let percentCompleted = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    if(percentCompleted === 100) authContext.turnOnLoader()
                    setProgress(percentCompleted);
                    console.log(percentCompleted);
            }
          }
        )
        .then(function (res) {
          authContext.turnOffLoader();
          console.log({ res: res });
          navigate("/success");
        })
        .catch(function (err) {
          authContext.turnOffLoader();
          console.log({ err: err });
        });
    }


    

      return (
        <center>
          <Container maxWidth="sm">
            <Uploader file={selectedFileHandler} disableSubmit={disableSubmitHandler}  submitButton={submitButton}/>
            <br />
            <br />
            <div id="container">
              <ProgressBar progress={progress} fileName={file.name} />
            </div>
          </Container>
        </center>
      );
};

export default UploadComponent;