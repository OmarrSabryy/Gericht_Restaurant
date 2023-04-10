import React from "react";
import classes from "./aboutUs.module.css";
import { images } from "../../exports";
const AboutUs = () => {
  return (
    <div
      className={`${classes["gericht__about"]} flex__center section__padding `}
      id="about"
    >
      <div className={classes["gericht__about-overlay"]}>
        <img src={images.G_image} alt="overlay" />
      </div>
      <div className={classes["gericht__about-aboutUs"]}>
        <div className={classes["gericht__about-aboutUs_subheader"]}>
          <h3>About Us</h3>
          <img src={images.spoon} alt="spoon" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Know More</button>
      </div>
      <div className={classes["gericht__about-image"]}>
        <img src={images.knife} alt="knife" />
      </div>
      <div className={classes["gericht__about-history"]}>
        <div className={classes["gericht__about-history_subheader"]}>
          <h3>Our History</h3>
          <img src={images.spoon} alt="spoon" />
        </div>
        <p>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default AboutUs;
