import React from 'react';
import styles from './style';
import injectSheet from 'react-jss';
import mugCup from 'assets/img/mug.svg';

const CategoryItem  = ({classes})=>{
    return <div align="center" className={classes.container}>
        <img src={mugCup} className={classes.icon}/>
    </div>
}
export default injectSheet(styles)(CategoryItem)