import React from "react";
import spoon from "../../assets/spoon.png";
import classes from "./cta.module.css";
const Cta = () => {
  return (
    <div className={classes["gericht__cta"]}>
      <div className={classes["gericht__cta-subheader"]}>
        <h3>Newsletter</h3>
        <img src={spoon} alt="spoon" />
      </div>
      <h1>Subscribe To Our Newsletter</h1>
      <p>And never miss latest Updates!</p>
      <div className={classes["gericht__cta-actions"]}>
        <input type="email" placeholder="Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Cta;
