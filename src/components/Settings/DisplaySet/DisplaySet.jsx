import React from 'react';
import classes from './DisplaySet.module.css';

const DisplaySet = (props) => {



    return (
        <div className={classes.display}>
          max value:  <input type='number' value={props.state.maxValue} onChange={props.onChangeMax}/>
          start value: <input type='number' value={props.state.minValue} onChange={props.onChangeMin}/>
        </div>
    )
}
export default DisplaySet;