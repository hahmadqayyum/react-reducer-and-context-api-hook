


const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
    }
    switch (action){
        case 'DECREMENT':
            return state -1
    }
}
export default CounterReducer;