import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

class App extends React.Component {

    state = {
        currentValue: 0,
        stepCounter: 1,
        maxValue: 5,
        minValue: 0
    }

    // если для maxValue и minValue: "", то при увеличении счетчик работает со значениями как со строками 21111
    inc = () => {
        if (this.state.currentValue < this.state.maxValue) {
            this.setState( // можно ли чем-то заменить Number
                {currentValue: Number(this.state.currentValue) + Number(this.state.stepCounter)});

        }
    }

    reset = () => {
        this.setState({currentValue: this.state.minValue})
    }

    changeMaxValue = (e) => {
        let newValue = Number(e.currentTarget.value);
        if (newValue < 0 || newValue <= this.state.minValue || this.state.minValue < 0 ) {
            this.setState({
                maxValue: newValue,
                currentValue: 'Incorrect value'
            })
        } else {
            this.setState({
                maxValue: newValue,
                currentValue: 'Enter value and press \'set\''
            })
        }
    }

    changeMinValue = (e) => {
        let newMinValue = Number(e.currentTarget.value);
        if (newMinValue < 0 || newMinValue >= this.state.maxValue) {
            this.setState({
                minValue: newMinValue,
                currentValue: 'Incorrect value'
            })
        } else {
            this.setState({
                minValue: newMinValue,
                currentValue: 'Enter value and press \'set\''
            })
        }
    }

    set = () => {
        // this.setState({minCounter: this.state.minValue});
        // this.setState({maxCounter: this.state.maxValue});
        this.setState({currentValue: this.state.minValue})
    }
    // this.state.minCounter === this.state.minValue && this.state.maxCounter === this.state.maxValue
    render = () => {
        let disabledSet =  this.state.maxValue === this.state.minValue || this.state.minValue < 0 || this.state.maxValue < 0 || this.state.minValue > this.state.maxValue;
        let styleCounter = this.state.currentValue === this.state.maxValue || this.state.currentValue === 'Incorrect value' ? 'red' : '';
        let styleInput = this.state.currentValue === 'Incorrect value' ? 'red-border' : '';
        let disabledInc =  this.state.currentValue === this.state.maxValue || this.state.currentValue === 'Incorrect value' || this.state.currentValue === 'Enter value and press \'set\''  ;
        let disabledRes = this.state.currentValue === this.state.minValue || this.state.currentValue === 'Incorrect value' || this.state.currentValue === 'Enter value and press \'set\'';

        return (

            <div className="App">
                <div className='settings'>
                    <Settings
                        styleInput={styleInput}
                        disabledSet={disabledSet}
                        onChangeMax={this.changeMaxValue}
                        onChangeMin={this.changeMinValue}
                        state={this.state}
                        onClick={this.set}

                    />
                </div>
                <div className='counter'>
                    <Counter
                        changeStatus={this.changeStatus}
                        styleCounter={styleCounter}
                        value={this.state.currentValue}
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

export default App;

