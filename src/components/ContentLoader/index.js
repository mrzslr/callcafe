import React from 'react';
import styles from './style';
import injectSheet from 'react-jss';
import imgLatte from 'assets/img/latte.png'

const ContentLoader =({classes})=>{
    return <div align="center" className={classes.container}>
        <img src={imgLatte} />
    </div>
}
export default injectSheet(styles)(ContentLoader)