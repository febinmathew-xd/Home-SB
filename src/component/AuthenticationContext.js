import React, { useState, createContext, useContext } from "react";

import { useEffect } from "react";

import { Post } from "./service/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState("");
  const [userid, setUserId] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    if (info?.usertype == 1) {
      setUser(true);
    }
  }, []);

  const onLogin = (email, password) => {
    let param = {
      email: email,
      password: password,
    };

    Post("login", param).then((data) => {
      console.log(data);
      if (data == "invalid") {
        toast.error("Invalid User!");
        return false;
      }
      if (data?.usertype == 1) {
        localStorage.setItem("userdata", JSON.stringify(data));
        setUserId(data?.loginid);
        setUser(true);
      }
    });
    setisLoading(true);
  };

  const onLogout = () => {
    localStorage.clear();
    setUser(false);
    window.location.href = "/";
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: user,
        userid,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
