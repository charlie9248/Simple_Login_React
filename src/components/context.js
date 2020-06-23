import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <userContext.Provider value={{ currentUser }}>
      {children}
    </userContext.Provider>
  );
};

export const Consumer = userContext;
