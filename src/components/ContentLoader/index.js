import React from "react";
import styles from "./style";
import injectSheet from "react-jss";
import imgLatte from "assets/img/latte.png";
import Slider from "components/Slider";

const ContentLoader = ({ classes }) => {
  return (
    <div align="center" className={classes.container}>
      
      <Slider
        options={{
          wrapAround: true,
          prevNextButtons: false,
          pageDots: false,
        }}
      >
        <div className={classes.carouselCell}>
          {" "}
          <div className={classes.cover}>
            <img src={imgLatte} />
            <div align="center" className={classes.waveBg}></div>
          </div>
        </div>
        <div className={classes.carouselCell}></div>
        <div className={classes.carouselCell}></div>
        <div className={classes.carouselCell}></div>
        <div className={classes.carouselCell}></div>
      </Slider>
    </div>
  );
};
export default injectSheet(styles)(ContentLoader);
