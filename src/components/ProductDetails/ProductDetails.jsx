import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import styles from './style';

const ProductDetails = ({
  classes, show, product, onClosed,
}) => {
  const handleClose = () => {
    onClosed();
  };
  const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
  return (
    <div className={classes.container}>
      {show ? (
        <Dialog fullScreen open={show} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Container>
            <p>
              {JSON.stringify(product)}
            </p>
          </Container>
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
