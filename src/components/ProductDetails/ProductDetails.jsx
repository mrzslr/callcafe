import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { BASE_IMAGE_URL } from 'constants/endpoints';
import styles from './style';

const ProductDetails = ({
  classes, show, product, onClosed,
}) => {
  const handleClose = () => {
    onClosed();
  };

  const back = () => {
    onClosed();
  };
  const Transition = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
  ));
  return (
    <div className={classes.container}>
      {show ? (
        <Dialog fullScreen open={show} onClose={handleClose} TransitionComponent={Transition}>
          <Container>

            <img
              className={classes.image}
              src={BASE_IMAGE_URL + product.image}
              alt={product.title}
            />
            <h1 className={classes.title}>{product.title}</h1>
            <p className={classes.description}>{product.description}</p>
          </Container>

          <BottomNavigation value={0} showLabels className={classes.navigationActions}>
            <BottomNavigationAction
              className={classes.navigationActionItemDisabled}
              label="سفارش (به زودی)"
            />
            <BottomNavigationAction
              className={classes.navigationActionItem}
              label="بازگشت"
              onClick={back}
            />
          </BottomNavigation>
        </Dialog>
      ) : null}
    </div>
  );
};

ProductDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  onClosed: PropTypes.func.isRequired,
};
export default injectSheet(styles)(ProductDetails);
