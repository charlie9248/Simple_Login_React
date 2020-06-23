import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import Alert from "./Alert";

const SignUp = ({ history }) => {
  

  const [Useremail, setMail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userConfirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const hanleSubmit = e => {
    e.preventDefault();
    signUp();
  };

  const signUp = () => {
    if (userPassword !== userConfirmPassword) {
      handleAlert({ type: "danger", text: "password do not match" });
    } else if (
      Useremail === "" &&
      userPassword === "" &&
      userConfirmPassword === "" &&
      firstname === "" &&
      address === ""
    ) {
      handleAlert({ type: "danger", text: "please full all the fields" });
    } else {
       firebase.auth()
        .createUserWithEmailAndPassword(Useremail, userPassword )
        .then(res => {
          console.log(res)
          let userId = res.user.uid;
          console.log(userId)

          firebase.database().ref('Users/' + userId).set({
            username: firstname,
            address: address,
          });
        })
        .catch(err => {
          handleAlert({ type: "danger", text: err.message });
        });

      setMail("");
      setPassword("");
      setConfirmPassword("");
      setAddress("");
      setFirstname("");
      history.push("/login");
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      text,
      type
    });

    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };



  

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className="container font-weight-bold mt-5">
        <h4 className="text-center">Sing Up</h4>
      </div>
      <RegisterWrapper>
        <form onSubmit={hanleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={Useremail}
              onChange={e => setMail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={userPassword}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              value={userConfirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Firstname</label>
            <input
              type="text"
              className="form-control"
              id="xname"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="xaddress"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-secondary mx-auto mt-5 ">
            Submit
          </button>
        </form>
      </RegisterWrapper>
    </>
  );
};

const RegisterWrapper = styled.div`
width:60%;
margin 0 auto;
border: 1px solid gray;
border-radius : 0.5rem;
padding: 3rem;
`;

export default SignUp;
