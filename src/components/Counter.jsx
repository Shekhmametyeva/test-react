import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }
    function decrement() {
        setCounter(counter - 1);
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Counter;