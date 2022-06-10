//useRef used for access or manipulate dom element
import React, { useRef, useState } from 'react'

function UseRef() {
    const inputRef = useRef(null)
    const [name, setName] = useState('Linda')

    const handleClick = () => {
        inputRef.current.focus()
        inputRef.current.value=""    
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <h1>useRef</h1>
            <p>{name}</p>
            <input type="text" placeholder='enter name...' ref={inputRef} onChange={handleChange} />
            <button onClick={handleClick}>Change Name</button>
        </div>
    )
}

export default UseRef