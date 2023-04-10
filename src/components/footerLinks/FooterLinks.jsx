import React from "react";
import classes from "./footerLinks.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import spoon from "../../assets/spoon.png";
const FooterLinks = () => {
  return (
    <div className={classes["gericht__footerLinks"]}>
      <div className={classes["gericht__footerLinks-contactUs"]}>
        <h2>Contact Us</h2>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>
      <div className={classes["gericht__footerLinks-gericht"]}>
        <h1>Gerícht</h1>
        <p>
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={spoon} alt="spoon" />
        <div className={classes["gericht__footerLinks-gericht_social"]}>
          <FaFacebookF size={20} /> <FaTwitter size={20} />{" "}
          <FaInstagram size={20} />
        </div>
      </div>
      <div className={classes["gericht__footerLinks-workingHours"]}>
        <h2>Working Hours</h2>
        <p>Monday-Friday:</p>
        <p>08:00 am -12:00 am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 pm</p>
      </div>
    </div>
  );
};

export default FooterLinks;
