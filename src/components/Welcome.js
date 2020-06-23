import React, { useContext } from "react";
import styled from "styled-components";
import { userContext } from "./context";
import firebase from "firebase/app";


const Welcome = () => {
  const { currentUser } = useContext(userContext);

  console.log(currentUser);
  

  

  
  if (currentUser) {

    return (
      <RegisterWrapper>
        <h2>Welcome {currentUser.email}</h2>

        <div className="container ">
            <form >
            <div className="form-group px-5">
                <label>name</label>
                <input value={currentUser.name} className="form-control" type="text" name="" />
            </div>

            <div className="form-group px-5 ">
                <label>Address</label>
                <input className="form-control" type="text" name="" />
            </div>
            </form>
        </div>
      </RegisterWrapper>
    );
  }
};

const RegisterWrapper = styled.div`
width:60%;
margin 0 auto;
border: 1px solid gray;
border-radius : 0.5rem;
padding: 3rem;
`;

export default Welcome;
