import React, { useContext } from 'react';
import ContextValue from './ContextValue'


const Child = () => {
    const counterValue = useContext(ContextValue);

    return (
        <div>

            <h1>this is Child Component</h1>
            <h2>the value is {counterValue[0]}$</h2>
            <button onClick={() => {counterValue[1](counterValue[0]+=20)}}>Add 20$</button>
            <button onClick={() => {counterValue[1](counterValue[0]-=20)}}>-20$</button>

        </div>
    );
}
export default Child;
