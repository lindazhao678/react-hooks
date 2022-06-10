import axios from 'axios'
import { useState, useEffect, useCallback } from 'react';
import Child from './Child';

import React from 'react'

function UseCallback() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
            });
            console.log(data)
    }, []);


//useCallback have the same use case with useMemo. But useCallback is different from useMemo, as useMemo only store the return value of the function, and useCallback store the function itself.
    const returnComment = useCallback(
        (name) => {
            return name+ " : " + data ;
        },
        [data]
    );

    return (
        <div>
            <h1>useCallback</h1>
            <Child returnComment={returnComment} />
            <button onClick={() => {
                setToggle(!toggle)
            }}>
                Toggle
            </button>
            {toggle && <p>toggle</p>}
        </div>
    )
}

export default UseCallback