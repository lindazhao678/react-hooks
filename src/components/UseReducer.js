import React, { useReducer } from 'react';

//useReducer used for one event alter bunch of states declarations
function UseReducer() {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1, showText: state.showText }
            case "toggleShowText":
                return { count: state.count, showText: !state.showText }
            default:
                return state
        }
    }

//Single state declaration
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

    return (
        <div>
            <h1>useReducer</h1>
            <p>{state.count}</p>
            <button onClick = {() => {
                dispatch({ type: "INCREMENT" })
                dispatch({ type:"toggleShowText" })
            }}>
                Click Here
            </button>
            {state.showText && <p>This is a text</p>}
        </div>
    )
}
export default UseReducer
