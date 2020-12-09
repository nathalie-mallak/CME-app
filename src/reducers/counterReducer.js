import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actions/type'

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {

    switch(action.type) {

        case DECREMENT_COUNTER:
            return {
                counter: state.counter -1
            }

        case INCREMENT_COUNTER:
            return {
                counter: state.counter +1
            } 
        
        default:
            return state
    }
}

export default CounterReducer

