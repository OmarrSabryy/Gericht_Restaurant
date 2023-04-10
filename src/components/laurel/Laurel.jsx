import React from "react";
import classes from "./laurel.module.css";
const Laurel = (props) => {
  return (
    <div className={classes["gericht__laurel"]}>
      <div className={classes["gericht__laurel-image"]}>
        <img src={props.image} alt={props.image} />
      </div>
      <div className={classes["gericht__laurel-heading"]}>
        <h3>{props.title}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default Laurel;
