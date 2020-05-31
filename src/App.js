import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import {connect} from "react-redux";
import {changeMaxValueAC, changeMinValueAC, incCounterAC, resetCounterAC, setValuesAC} from "./redusers/reduser";

class App extends React.Component {

    // state = {
    //     currentValue: 0,
    //     stepCounter: 1,
    //     maxValue: 5,
    //     minValue: 0,
    //     setButtonDisabled: false
    // }

    componentDidMount() {
        // let str = localStorage.getItem('counter');
        // let obj = JSON.parse(str)
        // this.setState(obj)
    }

    inc = () => {
        if (this.props.currentValue < this.props.maxValue) {
            let counter = this.props.currentValue + this.props.stepCounter
            this.props.incCounter(counter);
        }
    }

    reset = () => {
        let resetCurrentValue = this.props.currentValue;
        this.props.resetCounter(resetCurrentValue);
    }

    changeMaxValue = (e) => {
        let currentValue = Number(e.currentTarget.value);
            this.props.changeMaxValue(currentValue);
    }

    changeMinValue = (e) => {
        let currentValue = Number(e.currentTarget.value);
            this.props.changeMinValue(currentValue)
    }

    set = () => {
        let minValue = this.props.minValue
        this.props.setValues(minValue)
      }

    saveState = () => {
        // let ssd = JSON.stringify(this.props.state)
        // localStorage.setItem('counter', ssd)
    }


    render = () => {
        let disabledSet = this.props.maxValue === this.props.minValue || this.props.minValue < 0 || this.props.maxValue < 0 || this.props.minValue > this.props.maxValue;
        let styleCounter = this.props.currentValue === this.props.maxValue || this.props.currentValue === 'Incorrect value' ? 'red' : '';
        let styleInput = this.props.currentValue === 'Incorrect value' ? 'red-border' : ''; //ok
        let disabledInc = this.props.currentValue === this.props.maxValue || this.props.currentValue === 'Incorrect value' || this.props.currentValue === 'Enter value and press \'set\'';
        let disabledRes = this.props.currentValue === this.props.minValue || this.props.currentValue === 'Incorrect value' || this.props.currentValue === 'Enter value and press \'set\'';

        return (

            <div className="App">
                <div className='settings'>
                    <Settings
                        styleInput={styleInput}
                        disabledSet={this.props.setButtonDisabled}
                        onChangeMax={this.changeMaxValue}
                        onChangeMin={this.changeMinValue}
                        maxValue={this.props.maxValue}
                        minValue={this.props.minValue}
                        // state={this.props.state}
                        onClick={this.set}

                    />
                </div>
                <div className='counter'>
                    <Counter
                        styleCounter={styleCounter}
                        value={this.props.currentValue} //??
                        disabledInc={disabledInc}
                        disabledRes={disabledRes}
                        disabledSet={disabledSet}
                        onClick={this.inc}
                        reset={this.reset}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue,
        stepCounter: state.stepCounter,
        maxValue: state.maxValue,
        minValue: state.minValue,
        setButtonDisabled: state.setButtonDisabled
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        incCounter: (currentValue) =>{
            dispatch(incCounterAC(currentValue))
        },
        resetCounter: (resetCurrentValue) => {
            dispatch(resetCounterAC(resetCurrentValue))
        },
        changeMinValue: (currentValue) => {
            dispatch(changeMinValueAC(currentValue))
        },
        changeMaxValue: (currentValue) => {
            dispatch(changeMaxValueAC(currentValue))
        },
        setValues: (minValue) => {
            dispatch(setValuesAC(minValue))
        }
    }

}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;

