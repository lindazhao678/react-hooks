//useLayoutEffect is called in the early stage of the page rendering, before the useEffect
//while the useEffect is called after everying is rendered on the page and showing to the user
//useLayoutEffect is used for the case that you want to change the layout of the page before it print out to the user. 
import React, { useLayoutEffect, useEffect, useRef } from 'react'

function UseLayoutEffect() {
    const inputRef = useRef(null)

    useLayoutEffect(() => {
      console.log(inputRef.current.value)
    }, [])

    useEffect(() => {
        inputRef.current.value = "Meng"
    }, [])

    return (
        <div>
            <h1>useLayoutEffect</h1>
            <input type="text" ref={inputRef} value="Linda" />
        </div>
    )
}

export default UseLayoutEffect