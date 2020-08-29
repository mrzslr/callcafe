import React from "react";
import styles from "./style";
import injectSheet from "react-jss";

const Header = ({ classes }) => {
  return (
    <div>
      <div className={classes.toolbar}>
        <h1 className={classes.title}>CALL CAFE</h1>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
