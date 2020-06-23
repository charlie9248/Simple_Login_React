import React from "react";

const Alert = ({ type, text }) => {
  return <div className={`text-center alert alert-${type}`}> {text} </div>;
};

export default Alert;
