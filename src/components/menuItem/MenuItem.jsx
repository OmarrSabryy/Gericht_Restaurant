import React from "react";
import classes from "./menuItem.module.css";
const MenuItem = (props) => {
  const lastIngredient = props.ingredients.length - 1;
  const ingredients = props.ingredients.map((item, index) =>
    index === lastIngredient ? (
      <li key={index}>{item}</li>
    ) : (
      <>
        <li key={index + "i"}>{item}</li>
        <li
          key={index + "bar"}
          className={classes["gericht__menuItem-ingredient_bar"]}
        ></li>
      </>
    )
  );
  return (
    <div className={classes["gericht__menuItem"]}>
      <div className={classes["gericht__menuItem-desc"]}>
        <h4>{props.name}</h4>
        <div className={classes["gericht__menuItem-desc_line"]}></div>
        <h3>{props.price}</h3>
      </div>
      <ul className={classes["gericht__menuItem-ingredient"]}>{ingredients}</ul>
    </div>
  );
};

export default MenuItem;
