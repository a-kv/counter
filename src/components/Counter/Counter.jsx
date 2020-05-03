import React from 'react';
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";
import classes from "./Counter.module.css";

const Counter = (props) => {

    return (

        <div className="Counter">
            <div className={classes.container}>

                <Display

                    styleCounter={props.styleCounter}
                    value={props.value}
                    disabledSet={props.disabledSet}
                />
                <Buttons
                    disabledInc={props.disabledInc}
                    disabledRes={props.disabledRes}
                    onClick={props.onClick}
                    reset={props.reset}/>
            </div>

        </div>
    );
}


export default Counter;
