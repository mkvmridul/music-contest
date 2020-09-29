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
  const [selectedFile, setSelectedFile] = useState([]);
  const [progress, setProgress] = useState(null);
    useEffect(() => {
        if(!authContext.auth) navigate("/") ;
    },[authContext.auth]);

    const selectedFileHandler = (file) => {
      setSelectedFile(file);
      let formData = new FormData();
      formData.append("contestVideo",file);
      axios
        .post(
          `${authContext.baseUrl}/submit/contest/5f65baa188113427d0cbc4e3/user/5f69e79e05a502835da39485`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
                    let percentCompleted = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percentCompleted);
                    console.log(percentCompleted);
            }
          }
        )
        .then(function (res) {
          console.log({ res: res });
          navigate("/success");
        })
        .catch(function (err) {
          console.log({ err: err });
        });
    }


    

      return (
        <center>
          <Container maxWidth="sm">
            <Uploader file={selectedFileHandler} />
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