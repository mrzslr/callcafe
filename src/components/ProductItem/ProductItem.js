import React from "react";
import styles from "./style";
import injectSheet from "react-jss";
import { BASE_IMAGE_URL } from "constants/endpoints";
const ProductItem = ({ classes, product }) => {
  return (
    <div className={classes.container}>
      <div className={classes.cover}>
        <img src={BASE_IMAGE_URL + product.image} />
        <div align="center" className={classes.waveBg}></div>
        <h1 className={classes.title}>اسپرسو</h1>
      </div>
    </div>
  );
};
export default injectSheet(styles)(ProductItem);
