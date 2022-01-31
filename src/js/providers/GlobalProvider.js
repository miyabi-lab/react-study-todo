import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = (props) => {
  // global states
  const [user, setUser] = useState({
    username: 'miyabi',
    gender: 'male',
    age: 32
  })
  
  return(
    <GlobalContext.Provider value={{user, setUser}}>
      {props.children}
    </GlobalContext.Provider>
  )
}