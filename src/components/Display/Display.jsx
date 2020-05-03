import React from 'react';
import DisplayCounter from "./DisplayCounter";
import DisplayText from "./DisplayText";
import DisplayError from "./DisplayError";
import classes from "./Display.module.css";

const Display = (props) => {

    let changeDisplay = props.disabledSet === false ? <DisplayText/> : <DisplayCounter styleCounter={props.styleCounter}
                                                                                       value={props.value}/>;
    return (

        <div>
            {/*<div>*/}
            {/*    <div className={classes.displayCounter}>*/}
            {/*        <span className={props.styleCounter}>{props.value}</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<DisplayError/>*/}
            {changeDisplay}
        </div>
    )
}
export default Display;