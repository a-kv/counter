export const INC_COUNTER = 'INC_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const INIT_STATE = 'INIT_STATE';
export const CHANGE_MIN_VALUE = 'SET_MIN_VALUE';
export const CHANGE_MAX_VALUE = 'SET_MAX_VALUE';
export const SET_VALUES = 'SET_VALUES';

let initialState = {
    currentValue: 0,
    stepCounter: 1,
    maxValue: 5,
    minValue: 0,
    setButtonDisabled: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_STATE:
            return {
                ...action.initialState
            }
        case INC_COUNTER:
            return {
                ...state,
                currentValue: action.currentValue,
            }

        case RESET_COUNTER:
            return {
                ...state,
                currentValue: 0
            }

        case CHANGE_MIN_VALUE:
            const errorMin = action.minValue < 0 || action.minValue >= state.maxValue;
            const newMinCounter = action.minValue !== state.maxValue
            return {
                ...state,
                minValue: action.minValue,
                currentValue: errorMin ? 'Incorrect value' :
                              newMinCounter ?  'Enter value and press \'set\''  :state.currentValue,
                setButtonDisabled: errorMin
            }
        case CHANGE_MAX_VALUE:
            const newCounter = action.maxValue !== state.maxValue
            const error = action.maxValue <= state.minValue || action.maxValue < 0
            return {
                ...state,
                maxValue: action.maxValue,
                currentValue: error ? 'Incorrect value' :
                              newCounter ?  'Enter value and press \'set\'' : state.currentValue,
                setButtonDisabled: error
            }

        case SET_VALUES:
            return {
                ...state,
                currentValue: action.minValue,
            }

    }
    return state
}

export const incCounterAC = (currentValue) => {
    return {type: INC_COUNTER, currentValue}
}
export const resetCounterAC = (resetCurrentValue) => {
    return {type: RESET_COUNTER, resetCurrentValue}
}
export const changeMinValueAC = (minValue) => {
    return {type: CHANGE_MIN_VALUE, minValue}
}
export const changeMaxValueAC = (maxValue) => {
    return {type: CHANGE_MAX_VALUE, maxValue}
}
export const setValuesAC = (minValue) => {
    return {type: SET_VALUES, minValue}
}

export default reducer;