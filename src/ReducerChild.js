import React, { useReducer } from 'react';
import CounterReducer from './Reducer'

const ReducerChild = () => {
    let [state, dispatch] = useReducer(CounterReducer, 0)
    return (
        <div>

            <h1>Readucer Value is: {state}</h1>
            <button onClick={() => dispatch('INCREMENT')}>Increase Reducer</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrease Reducer</button>
        </div>
    );

}
export default ReducerChild;