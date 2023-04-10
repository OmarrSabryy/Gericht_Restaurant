import React from "react";
import { images } from "../../exports";
import classes from "./subHeader.module.css";
const SubHeader = (props) => {
  return (
    <div className={`${props?.classes} ${classes["gericht__subHeader"]}`}>
      <h3>{props.title}</h3>
      <img src={images.spoon} alt="subHeaderImage" />
    </div>
  );
};

export default SubHeader;
