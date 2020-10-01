import React, {useState, useEffect} from 'react';
import { navigate } from "@reach/router";


export const AuthContext = React.createContext({
      auth: false,
      logging: false,
      login: () => {},
      loggingHandler: () => {},
      baseUrl: "",
      loader: false
});

const AuthContextProvider = props => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [logging, setLogging] = useState(false);
      const baseUrl = "/api";
      const loginHandler = () => {setIsAuthenticated(!isAuthenticated); loggingHandler()};
      const [loader, setLoader] = useState(false);
      const baseUrl = "/api";
      const loginHandler = () => {setIsAuthenticated(!isAuthenticated); };
      const loggingHandler = () => setLogging(!logging);
      const turnOffLoader = () => setLoader(false);
      const turnOnLoader = () => setLoader(true);

      useEffect(() => {
            if (JSON.parse(localStorage.getItem("user"))) {
                  setIsAuthenticated(true);
                  navigate('/upload');
            }
      },[]);

      return (
            <AuthContext.Provider value={
                  {
                        auth: isAuthenticated, 
                        login: loginHandler,
                        logging: logging,
                        loggingHandler: loggingHandler,
                        baseUrl,
                        turnOffLoader,
                        turnOnLoader,
                        loader
                  }
            }>
                  {props.children}
            </AuthContext.Provider>
      );
};

export default AuthContextProvider;
