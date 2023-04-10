import React from "react";
import ReactDOM from "react-dom";
import classes from "./backdrop.module.css";
const BackdropLayout = (props) => (
  <div className={`${classes.backdrop} ${props.classes}`}>{props.children}</div>
);
const portal = document.getElementById("overlays");
const Backdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropLayout children={props.children} classes={props.className} />,
        portal
      )}
    </>
  );
};

export default Backdrop;
