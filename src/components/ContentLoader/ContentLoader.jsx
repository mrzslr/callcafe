import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ProductItem from 'components/ProductItem';
import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './style';

const ContentLoader = ({ classes, products }) => (
  <div align="center" className={classes.container}>
    <Container>
      <Grid container spacing={3} alignItems="center">

        {products.map((product) => (
          <Grid key={product.key} item xs={6} md={4} sm={4}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
);

ContentLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};
export default injectSheet(styles)(ContentLoader);
