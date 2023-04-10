import React from "react";
import classes from "./header.module.css";
import { images } from "../../exports";
import { SubHeader } from "../../components";
const Header = () => {
  return (
    <div
      className={`${classes["gericht__header"]} flex__center section__padding`}
      id="home"
    >
      <div className={classes["gericht__header-desc"]}>
        <div className={classes["gericht__header-desc_links"]}>
          <p>#Bar</p>
          <p>#Gericht</p>
        </div>
        <div className={classes["gericht__header-desc_heading"]}>
          <SubHeader title="Chase the new Flavour" />
          <h1>The Key To Fine Dining</h1>
          <p>
            Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
            Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
            Aliquam Amet Tellus
          </p>
          <button>Explore Menu</button>
        </div>
      </div>
      <div className={classes["gericht__header-image"]}>
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
