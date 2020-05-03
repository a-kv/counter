import React from 'react';
import classes from './Display.module.css';

const DisplayCounter = (props) => {
    return (

        <div>
            <div className={classes.displayCounter}>
                <span className={props.styleCounter}>{props.value}</span>
            </div>
        </div>
    )
}
export default DisplayCounter;