import React from 'react';
import Button from "./Button/Button";
import classes from './Buttons.module.css';


const Buttons = (props) => {
    return (
        <div className={classes.buttons}>
            <Button  disabled={props.disabledInc} name={'inc'} onClick={props.onClick}/>
            <Button  disabled={props.disabledRes} name={'reset'} onClick={props.reset}/>

        </div>
    )


}
export default Buttons;