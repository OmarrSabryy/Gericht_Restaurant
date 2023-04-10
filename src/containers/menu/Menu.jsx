import React from "react";
import classes from "./menu.module.css";
import { MenuItem } from "../../components";
import { images } from "../../exports";
const Menu = () => {
  return (
    <div
      className={`${classes["gericht__menu"]} flex__center section__padding`}
    >
      <div className={classes["gericht__menu-subheader"]}>
        <h3>Menu That Fits Your Palatte</h3>
        <img src={images.spoon} alt="spoon" />
      </div>
      <h1>Today’s Special</h1>
      <div className={classes["gericht__menu-details"]}>
        <div className={classes["gericht__menu-details_wineBeer"]}>
          <h2>Wine & Beer</h2>
          <ul className={classes["gericht__menu-details_wineBeer-items"]}>
            <MenuItem
              name="Chapel Hill Shiraz"
              price="$56"
              ingredients={["AU", "Bottle"]}
            />
            <MenuItem
              name="Catena Malbec"
              price="$59"
              ingredients={["AR", "Bottle"]}
            />
            <MenuItem
              name="La Vieille Rosé"
              price="$44"
              ingredients={["FR", "750ml"]}
            />
            <MenuItem
              name="Rhino Pale Ale"
              price="$31"
              ingredients={["CA", "750ml"]}
            />
            <MenuItem
              name="Irish Guinness"
              price="$26"
              ingredients={["IE", "750ml"]}
            />
          </ul>
        </div>
        <div className={classes["gericht__menu-details_image"]}>
          <img src={images.menu} alt="bar" />
        </div>
        <div className={classes["gericht__menu-details_coktails"]}>
          <h2>Cocktails</h2>
          <ul className={classes["gericht__menu-details_coctails-items"]}>
            <MenuItem
              name="Aperol Spritz"
              price="$20"
              ingredients={["Aperol", "Vila Marchesi prosecco", "soda", "30ml"]}
            />
            <MenuItem
              name="Dark 'N' Stormy"
              price="$16"
              ingredients={["Dark rum", "Ginger beer", "slice of lime"]}
            />
            <MenuItem
              name="Daiquiri"
              price="$10"
              ingredients={["Rum", "Citrus juice", "Sugar"]}
            />
            <MenuItem
              name="Old Fashioned"
              price="$31"
              ingredients={["Bourbon", "Brown Sugar", "Angostura Bitters"]}
            />
            <MenuItem
              name="Negroni"
              price="$26"
              ingredients={[
                "Gin",
                "Sweet Vermouth",
                "Campari",
                "Orange garnish",
              ]}
            />
          </ul>
        </div>
      </div>
      <button>View More</button>
    </div>
  );
};

export default Menu;
