import React, { useState, createContext } from 'react'
import Login from './Login'
import User from './User'

//Instead of passing states with props, Using context API to organise and manage the states.
//In this case, AppContext is the collection of states. as a result, we could access all the states inside all the components which wraped the AppContext.
export const AppContext = createContext(null)

function UseContext() {
  const [username, setUsername] = useState('')

  return (
//value will be all the states and functions that you want to be accessed  by all component which inside of the wrap
    <AppContext.Provider value={{username, setUsername}}>
      <h1>useContext</h1>
      <Login setUsername={setUsername} />
      <User username={username} />
    </AppContext.Provider>
  )
}

export default UseContext