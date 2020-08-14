import React from "react";
import styles from "./style";
import { ArrowBackIos, Menu } from "@material-ui/icons";
import injectSheet from "react-jss";
import CategoryItem from "components/CategoryItem";
import colors from 'utils/styles/colors'
const Header = ({ classes }) => {
  return (
    <div>
      <div className={classes.toolbar}>
        <ArrowBackIos style={{color:colors.primaryColor}} />
        <Menu style={{color:colors.primaryColor}} />
        
      </div>
      
      <CategoryItem  />
    </div>
  );
};

export default injectSheet(styles)(Header);
