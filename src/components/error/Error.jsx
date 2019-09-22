import React from "react";
import styles from "./Error.css";
const NotFound = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "Grey",
    padding: "30px",
    fontFamily: "Arial"
  };

  return (
    <div>
      <h1 style={mystyle}>Page not found. Turn around and go back to home</h1>
    </div>
  );
};
export default NotFound;
