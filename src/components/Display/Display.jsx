import React from 'react';
import classes from './Display.module.css';

const Display = (props) => {
    return (
        <div className={classes.display}>
        <span className={props.style}>{props.value}</span>
</div>
    )
}
export default Display;