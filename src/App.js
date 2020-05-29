import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

class App extends React.Component {

    state = {
        currentValue: 0,
        stepCounter: 1,
        maxValue: 5,
        minValue: 0,
        setButtonDisabled: false
    }

    componentDidMount() {
        let str = localStorage.getItem('counter');
        let obj = JSON.parse(str)
        this.setState(obj)
    }

    inc = () => {
        if (this.state.currentValue < this.state.maxValue) {
            this.setState( // можно ли чем-то заменить Number
                {currentValue: Number(this.state.currentValue) + this.state.stepCounter});

        }
    }

    reset = () => {
        this.setState({currentValue: this.state.minValue})
    }

    changeMaxValue = (e) => {
        let newValue = Number(e.currentTarget.value);
        if (newValue < 0 || newValue <= this.state.minValue || this.state.minValue < 0) {
            this.setState({
                maxValue: newValue,
                currentValue: 'Incorrect value',
                setButtonDisabled: true

            }, () => {
                this.saveState()
            })
        } else {
            this.setState({
                maxValue: newValue,
                //maxValue: localStorage.setItem('maxValue', newValue),
                currentValue: 'Enter value and press \'set\'',
                setButtonDisabled: false
            }, () => {
                this.saveState()
            })
        }
    }

    changeMinValue = (e) => {
        let newMinValue = Number(e.currentTarget.value);
        if (newMinValue < 0 || newMinValue >= this.state.maxValue) {
            this.setState({
                minValue: newMinValue,
                currentValue: 'Incorrect value',
                setButtonDisabled: true
            }, () => {
                this.saveState()
            })
        } else {
            this.setState({
                minValue: newMinValue,
                // minValue: localStorage.setItem('minValue', newMinValue),
                currentValue: 'Enter value and press \'set\'',
                setButtonDisabled: false
            }, () => {
                this.saveState()
            })
        }
    }

    set = () => {
        this.setState({
            currentValue: this.state.minValue
        })
    }

    saveState = () => {
        let ssd = JSON.stringify(this.state)
        localStorage.setItem('counter', ssd)
    }

    render = () => {
        // let disabledSet = this.state.maxValue === this.state.minValue || this.state.minValue < 0 || this.state.maxValue < 0 || this.state.minValue > this.state.maxValue;
        let styleCounter = this.state.currentValue === this.state.maxValue || this.state.currentValue === 'Incorrect value' ? 'red' : '';
        let styleInput = this.state.currentValue === 'Incorrect value' ? 'red-border' : ''; //ok
        let disabledInc = this.state.currentValue === this.state.maxValue || this.state.currentValue === 'Incorrect value' || this.state.currentValue === 'Enter value and press \'set\'';
        let disabledRes = this.state.currentValue === this.state.minValue || this.state.currentValue === 'Incorrect value' || this.state.currentValue === 'Enter value and press \'set\'';

        return (

            <div className="App">
                <div className='settings'>
                    <Settings
                        styleInput={styleInput}
                        disabledSet={this.state.setButtonDisabled}
                        onChangeMax={this.changeMaxValue}
                        onChangeMin={this.changeMinValue}
                        state={this.state}
                        onClick={this.set}

                    />
                </div>
                <div className='counter'>
                    <Counter
                        styleCounter={styleCounter}
                        value={this.state.currentValue} //??
                        disabledInc={disabledInc}
                        disabledRes={disabledRes}
                        // disabledSet={disabledSet}
                        onClick={this.inc}
                        reset={this.reset}/>
                </div>
            </div>
        );
    }
}

export default App;

