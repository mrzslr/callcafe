import React from 'react';
import CategoryItem from 'components/CategoryItem';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './style';

const CategoryMenu = ({
  classes, menu, activeCategory, onCategoryChanged,
}) => {
  const onCategoryItemClicked = (category) => {
    onCategoryChanged(category.key);
  };
  return (
    <div className={classes.container}>
      <div className={classes.categoryMenu}>
        {menu && menu.map((category) => (
          <CategoryItem
            onCategoryItemClicked={onCategoryItemClicked}
            category={category}
            selected={activeCategory === category.key}
            key={category.id}
          />
        ))}
      </div>
    </div>
  );
};

CategoryMenu.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  menu: PropTypes.objectOf(PropTypes.object).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
};
export default injectSheet(styles)(CategoryMenu);
