import React from 'react';
import Child from './Child';
import ReducerChild from './ReducerChild';


const Parent = () => {

    return (
        <div>

            <h1>this is Parent Component</h1>
            <Child />
            <ReducerChild />
        </div>

    );
}
export default Parent;

