import React from "react";
import classes from "./contact.module.css";
import { SubHeader } from "../../components";
import { images } from "../../exports";
const Contact = () => {
  return (
    <div
      className={`${classes["gericht__findUs"]} flex__center section__padding`}
    >
      <div className={classes["gericht__findUs-desc"]}>
        <SubHeader title="Contact" />
        <h1>Find Us</h1>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <div className={classes["gericht__findUs-desc_openningHours"]}>
          <h2>Opening Hours</h2>
          <p>Mon - Fri: 10:00 am - 02:00 am</p>
          <p>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button>Visit Us</button>
      </div>
      <div className={classes["gericht__findUs-image"]}>
        <img src={images.findus} alt="contact" />
      </div>
    </div>
  );
};

export default Contact;
