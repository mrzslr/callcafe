import React from "react";
import styles from "./style";
import CategoryItem from "components/CategoryItem";
import injectSheet from "react-jss";
import imgFood from "assets/img/food.svg";
import imgHotBar from "assets/img/mug.svg";
import imgColdBar from "assets/img/coldbrew.svg";
import imgCake from "assets/img/cake.svg";

const CategoryMenu = ({ classes }) => {
  const categories = [
    {
      id: 1,
      title: "بار گرم",
      key: "cold",
      image: imgHotBar,
    },
    {
      id: 2,
      title: "بار سرد",
      key: "cold",
      image: imgColdBar,
    },
    {
      id: 3,
      title: "غذا",
      key: "food",
      image: imgFood,
    },
    {
      id: 4,
      title: "کیک و کوکی",
      key: "cakes",
      image: imgCake,
    },
  ];
  return (
    <div className={classes.container}>
      {categories.map((item) => {
        return <CategoryItem category={item} key={item.id} />;
      })}
    </div>
  );
};
export default injectSheet(styles)(CategoryMenu);
