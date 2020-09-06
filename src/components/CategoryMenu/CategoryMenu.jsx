import React from 'react';
import CategoryItem from 'components/CategoryItem';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Slider from 'components/Slider';
import styles from './style';

const CategoryMenu = ({
  classes, menu, activeCategory, onCategoryChanged,
}) => {
  const onCategoryItemClicked = (category) => {
    onCategoryChanged(category);
  };
  return (
    <div className={classes.container}>
      <div className={classes.categoryMenu}>
        <Slider
          options={{
            groupCells: true,
            prevNextButtons: false,
            pageDots: true,
          }}
        >
          {menu && menu.map((category) => (
            <CategoryItem
              onCategoryItemClicked={onCategoryItemClicked}
              category={category}
              selected={activeCategory.key === category.key}
              key={category.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

CategoryMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  activeCategory: PropTypes.object.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
};
export default injectSheet(styles)(CategoryMenu);
