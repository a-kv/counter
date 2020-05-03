import React from 'react';
import classes from "./Settings.module.css";
import Button from "../Buttons/Button/Button";
import DisplaySet from "./DisplaySet/DisplaySet";
import PropTypes from 'prop-types';


const Settings = (props) => {

    return (
        <div className={classes.container}>

            <DisplaySet
                styleInput={props.styleInput}
                onChangeMax={props.onChangeMax}
                onChangeMin={props.onChangeMin}
                state={props.state}
                style={classes.display}
                value={props.counter}
            />
            <div className={classes.button}>
                <Button disabled={props.disabledSet} name={'set'} onClick={props.onClick}/>
            </div>
        </div>
    );
}

Settings.propTypes = {
    counter: PropTypes.number

};

export default Settings;
