import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

class App extends React.Component {

    // как можно подругому оформить стейт
    state = {
        counter: 0,
        currentValue:0,
        // maxCounter: 5,
        // minCounter: 0,
        stepCounter: 1,
        maxValue: 5,
        minValue: 0
    }
// если для maxValue и minValue: "", то при увеличении счетчик работает со значениями как со строками 21111
    inc = () => {
        if (this.state.counter < this.state.maxCounter) {
            this.setState( // можно ли чем-то заменить Number
                {counter: Number(this.state.counter) + Number(this.state.stepCounter)});

        }
    }
    reset = () => {
        this.setState({counter: this.state.minCounter})
    }


    changeMaxValue = (e) => {
        let newValue = e.currentTarget.value;
        this.setState({
            maxValue: newValue
        })
    }

    changeMinValue = (e) => {
        this.setState({
            minValue: e.currentTarget.value,

        })
    }

    set = () => {
        this.setState({minCounter: this.state.minValue});
        this.setState({maxCounter: this.state.maxValue});
        this.setState({counter: this.state.minValue})
    }


    render() {
        let styleCounter = this.state.counter === this.state.maxCounter ? 'red' : '';
        let disabledInc = this.state.counter === this.state.maxCounter;
        let disabledRes = this.state.counter === this.state.minCounter;
        let disabledSet = this.state.minCounter === this.state.minValue && this.state.maxCounter === this.state.maxValue

        return (

            <div className="App">
                <div className='settings'>
                    <Settings
                        disabledSet={disabledSet}
                        onChangeMax={this.changeMaxValue}
                        onChangeMin={this.changeMinValue}
                        state={this.state}
                        onClick={this.set}
                    />
                </div>
                <div className='counter'>
                    <Counter
                        styleCounter={styleCounter}
                        // maxValue={this.state.maxValue}
                        value={this.state.counter}
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

