import React from 'react';
import classes from './Display.module.css';

const DisplayError = (props) => {
    return (

        <div>
            <div className={classes.displayError}>
                <span>Incorrect value</span>
            </div>
        </div>
    )
}
export default DisplayError;