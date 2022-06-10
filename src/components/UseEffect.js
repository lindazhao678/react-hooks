import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffect() {
    const [data, setData] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://jsonplaceholder.typicode.com/comments')
            setData(response.data[0].email)
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>useEffect</h1>
            <p>{data}</p>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>
                Click
            </button>
        </div>
    )
}

export default UseEffect