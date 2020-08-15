import React from "react";
import styles from "./style";
import injectSheet from "react-jss";

const CategoryItem = ({ classes, category }) => {
  return (
    <div align="center" className={classes.container}>
      <img src={category.image} className={classes.icon} alt={category.title} />
    </div>
  );
};
export default injectSheet(styles)(CategoryItem);
