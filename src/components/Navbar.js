import React from "react";
import { Link } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import firebase from "firebase/app";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark ">
        <Link to="/login" className="navbar-brand text-white">
          <MdAccountBalance />
          Home
        </Link>
        <ul className="d:flex">
          <Link to="/SignUp" className="nav-link btn-style text-white mx-1 ">
            <MdLockOpen />
            SIGN UP
          </Link>
          <Link to="/login" className="nav-link btn-style text-white mx-1 ">
            <MdLockOutline onClick={() => firebase.auth().signOut()} /> LOG OUT
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
