import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './style';

const Header = ({ classes }) => (
  <div>
    <div className={classes.toolbar}>
      <h1 className={classes.title}>CALL CAFE</h1>
    </div>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default injectSheet(styles)(Header);
