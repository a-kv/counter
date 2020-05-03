import React from 'react';
import classes from './Display.module.css';

const DisplayText = (props) => {
    return (

        <div>
            <div className={classes.displayText}>
                <span>enter value and press 'set'</span>
            </div>
        </div>
    )
}
export default DisplayText;