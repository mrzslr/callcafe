import React from "react";
import styles from "./style";
import injectSheet from "react-jss";
import Grid from "@material-ui/core/Grid";
import ProductItem from "components/ProductItem";
import { Container } from "@material-ui/core";
import coffees from "data/coffees";

const ContentLoader = ({ classes }) => {
  return (
    <div align="center" className={classes.container}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {coffees.map((product) => (
            <Grid key={product.key} item xs={6}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default injectSheet(styles)(ContentLoader);
