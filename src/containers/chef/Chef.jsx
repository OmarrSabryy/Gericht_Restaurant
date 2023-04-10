import React from "react";
import classes from "./chef.module.css";
import { images } from "../../exports";
import { SubHeader } from "../../components";
import { RiDoubleQuotesL } from "react-icons/ri";
const Chef = () => {
  return (
    <div
      className={`${classes["gericht__chef"]} flex__center section__padding`}
    >
      <div className={classes["gericht__chef-image"]}>
        <img src={images.chef} alt="chef" />
      </div>
      <div className={classes["gericht__chef-desc"]}>
        <SubHeader title="Chef's Word" />
        <h1>What We Believe In</h1>
        <div className={classes["gericht__chef-desc_qoute"]}>
          <RiDoubleQuotesL size={100} />
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
            Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
            Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
            Nunc. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore odio vel quis laborum dolor, voluptate temporibus molestiae
            repellendus dolorum incidunt quae culpa accusantium fugit soluta?
            Distinctio veniam repellendus dolor vel!
          </p>
        </div>
        <h2>Kevin Luo</h2>
        <p>Chef & Founder</p>
        <div className={classes["gericht__chef-desc_sign"]}>
          <img src={images.sign} alt="signature" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
