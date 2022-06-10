import React, { forwardRef, useImperativeHandle, useState } from 'react'

//forwardRef transfrom a functional component and allow it to accept a reference component from parent
const ChildButton = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

//useImperativehandle hook used for define functions based on the ref that can be called by using that ref (in this case the ref is the parent component). when you create a reusable component that need to have to be invoked outside the component.

//useImperativeHandle ask to return an object
    useImperativeHandle(ref, () => {
        return{
         alterToggle() {
            setToggle(!toggle)
        }
       }
    })

    return (
        <div>
            <button>
                Child Button
            </button>
            {toggle && <p>Toggle</p>}
        </div>
    )
})

export default ChildButton