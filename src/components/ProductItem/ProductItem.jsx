import { BASE_IMAGE_URL } from 'constants/endpoints';
import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './style';

const ProductItem = ({ classes, product }) => (
  <div className={classes.container}>
    <div className={classes.cover}>
      <img src={BASE_IMAGE_URL + product.image} alt={product.title} />
      <div align="center" className={classes.waveBg} />
      <h1 className={classes.title}>{product.title}</h1>
    </div>
  </div>
);

ProductItem.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

export default injectSheet(styles)(ProductItem);
