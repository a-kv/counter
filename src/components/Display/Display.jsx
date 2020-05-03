import React from 'react';
import classes from "./Display.module.css";

const Display = (props) => {


    return (

        <div className={classes.displayCounter}>
            <span
                className={props.styleCounter}>
                {props.value}
            </span>
        </div>

    )
}
export default Display;

