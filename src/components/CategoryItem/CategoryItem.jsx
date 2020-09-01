import { BASE_IMAGE_URL } from 'constants/endpoints';
import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './style';

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
      onKeyPress={categoryItemClicked}
      align="center"
      role="button"
      tabIndex="0"
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

CategoryItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  category: PropTypes.objectOf(PropTypes.object).isRequired,
  selected: PropTypes.bool.isRequired,
  onCategoryItemClicked: PropTypes.func.isRequired,
};

export default injectSheet(styles)(CategoryItem);
