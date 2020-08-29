import React from "react";
import styles from "./style";
import CategoryItem from "components/CategoryItem";
import injectSheet from "react-jss";


const CategoryMenu = ({ classes,menu,activeCategory,onCategoryChanged }) => {
  const onCategoryItemClicked=category=>{
    onCategoryChanged(category.key)
  }
  return (
    <div className={classes.container}>
      <div className={classes.categoryMenu}>
        {menu && menu.map((category,i) => {
          return  <CategoryItem onCategoryItemClicked={onCategoryItemClicked} category={category}  selected={activeCategory === category.key ? true : false} key={i} />;
        })}
      </div>
    </div>
  );
};
export default injectSheet(styles)(CategoryMenu);
