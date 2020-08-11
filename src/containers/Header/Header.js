import React from "react";
import styles from './style'
import headerImg from 'assets/img/header.webp'
import injectSheet from 'react-jss'

const Header = ({classes}) => {
  return (
    <div>
      <img src={headerImg} className={classes.headerImg} />
      <h1>Call Cafe</h1>
    </div>
  );
};

export default injectSheet(styles)(Header);
