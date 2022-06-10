//Click the button of the parent component to alter the "toggle" text state which is defined in the child component with using useImperativeHandle hook.
import React, { useRef } from 'react'
import ChildButton from './ChildButton'

function UseImperativehandle() {
    const buttonRef = useRef(null)
    
    return (
        <div>
            <h1>useImperativehandle</h1>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Parent Button</button>
            <ChildButton ref={buttonRef} />
        </div>
    )
}

export default UseImperativehandle