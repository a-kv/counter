import React from 'react';
import classes from './Button.module.css';


const Button = (props) => {
    return (
        <button className={classes.button} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    )
}
export default Button;