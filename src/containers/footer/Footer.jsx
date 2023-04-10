import React from "react";
import classes from "./footer.module.css";
import { Cta, FooterLinks } from "../../components";
const Footer = () => {
  return (
    <div
      className={`${classes["gericht__footer"]} flex__center section_padding`}
    >
      <Cta />
      <FooterLinks />
      <p>2021 Gerícht. All Rights reserved.</p>
    </div>
  );
};

export default Footer;
