import React from "react";
import { Laurel, SubHeader } from "../../components";
import classes from "./laurels.module.css";
import { images } from "../../exports";
const Laurels = () => {
  return (
    <div
      className={`${classes["gerict__laurels"]} flex__center section__padding`}
    >
      <div className={classes["gerict__laurels-logo"]}>
        <img src={images.logo2} alt="logo" />
      </div>
      <div className={classes["gerict__laurels-desc"]}>
        <SubHeader title="Awards & recognition" />
        <h1>Our Laurels</h1>
        <div className={classes["gerict__laurels-desc_awards"]}>
          <Laurel image={images.award02} title="Bib Gourmond" />
          <Laurel image={images.award01} title="Rising Star" />
          <Laurel image={images.award05} title="AA Hospitality " />
          <Laurel image={images.award03} title="Outstanding Chef" />
        </div>
      </div>
      <div className={classes["gerict__laurels-image"]}>
        <img src={images.laurels} alt="laurel" />
      </div>
    </div>
  );
};

export default Laurels;
