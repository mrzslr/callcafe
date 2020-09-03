import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ProductItem from 'components/ProductItem';
import ProductDetails from 'components/ProductDetails';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './style';

const ContentLoader = ({ classes, products }) => {
  const [productDetails, setProductDetails] = useState({ show: false, product: null });

  const showProduct = (product) => {
    setProductDetails({ show: true, product });
  };
  const onProductDetailsClosed = () => {
    setProductDetails({ show: false, product: null });
  };

  return (
    <div align="center" className={classes.container}>
      <h1>عنوان دسته</h1>
      <Container>
        <Grid container spacing={3} alignItems="center">

          {products.map((product) => (
            <Grid key={product.key} item xs={6} md={4} sm={4} onClick={() => showProduct(product)}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <ProductDetails
        show={productDetails.show}
        product={productDetails.product}
        onClosed={onProductDetailsClosed}

      />
    </div>
  );
};

ContentLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};
export default injectSheet(styles)(ContentLoader);
