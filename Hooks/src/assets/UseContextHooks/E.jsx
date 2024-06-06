import React, { createContext } from 'react'
import F from './F'


const FirstName = createContext();
const LastName = createContext();
 function E() {

  return (
    <div>
        <FirstName.Provider value="Akash">
        <LastName.Provider value="Khot">
        <F/>
        </LastName.Provider>
        </FirstName.Provider>
        
    </div>
  )
}
export default E;
export {FirstName,LastName}


