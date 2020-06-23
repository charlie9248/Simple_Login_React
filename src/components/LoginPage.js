import React, { useState } from "react";
import firebase from "firebase/app";
import styled from "styled-components";
import Alert from "./Alert";
import { Redirect } from "react-router-dom";

const LoginPage = ({ history }) => {
  const [userPassword, setUserPassword] = useState("");
  const [UsereMail, setUserEmail] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const hanleSubmit = e => {
    e.preventDefault();
    loggin();
  };

  const loggin = () => {
     firebase
      .auth()
      .signInWithEmailAndPassword(UsereMail, userPassword)
      .then(res => {
        if (res.user) {
          history.push("/");
          return <Redirect to="/" />;
        }
      })
      .catch(err => {
        handleAlert({
          type: "danger",
          text: err.message
        });
      });
  };

  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text
    });

    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className="container text-center mt-4 ">
        <h2 className="btn btn-outline-secondary px-5 ">Login Page</h2>
      </div>
      <LoginBoxWrapper>
        <form onSubmit={hanleSubmit}>
          <input
            className="form-control m-2"
            type="email"
            placeholder="enter email"
            value={UsereMail}
            onChange={e => setUserEmail(e.target.value)}
          />
          <input
            className="form-control m-2"
            type="password"
            placeholder="enter password"
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
          />

          <div className="form-group form-check check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">keep me signed in</label>
          </div>

          <input
            className="btn btn-secondary form-control mt-3"
            type="submit"
          />
        </form>
      </LoginBoxWrapper>
    </>
  );
};

const LoginBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin: 4rem auto;
  border: 0.1rem solid black;
  padding: 5rem;
  border-radius: 0.5rem;
  background: #f1f3f4;

  form {
    width: 70%;
    margin: 0px auto;
  }
`;

export default LoginPage;
