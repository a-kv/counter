import React from 'react';
import './App.css';
import Button from "./components/Buttons/Button/Button";
import Buttons from "./components/Buttons/Buttons";
import Display from "./components/Display/Display";

class App extends React.Component {

    state = {
        counter: 0,
        maxCounter: 5,
        minCounter: 0
    }

    inc = () => {
        if (this.state.counter < this.state.maxCounter) {
            this.setState(
                {counter: this.state.counter + 1});

        }
    }
    reset = () => {
        this.setState({counter: this.state.minCounter})
    }


    render() {
        let styleCounter = this.state.counter === this.state.maxCounter ? 'red' : '';
        let disabledInc = this.state.counter === this.state.maxCounter;
        let disabledRes = this.state.counter === 0;

        return (

            <div className="App">
                <div className='container-counter'>
                    <Display style={styleCounter} value={this.state.counter}/>
                    <Buttons disabledInc={disabledInc} disabledRes={disabledRes}
                             onClick={this.inc} reset={this.reset}/>
                </div>

            </div>
        );
    }
}

export default App;
// styleCounter = () => {
//     if (this.state.counter > this.state.maxCounter){
//         return 'red';
//     }
// }