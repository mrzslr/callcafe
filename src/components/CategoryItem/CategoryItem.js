import React from "react";
import styles from "./style";
import injectSheet from "react-jss";
import { BASE_IMAGE_URL } from "constants/endpoints";
const CategoryItem = ({
  classes,
  category,
  selected,
  onCategoryItemClicked,
}) => {
  const categoryItemClicked = () => {
    onCategoryItemClicked(category);
  };
  return (
    <div
      onClick={categoryItemClicked}
      align="center"
      className={selected ? classes.selected : classes.container}
    >
      <img
        src={BASE_IMAGE_URL + category.image}
        className={classes.icon}
        alt={category.title}
      />
    </div>
  );
};
export default injectSheet(styles)(CategoryItem);
