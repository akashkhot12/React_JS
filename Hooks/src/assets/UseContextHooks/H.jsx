import React, { useContext } from 'react'
import { FirstName, LastName } from './E'

export default function H() {
    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);
  return (
    <div>
        {firstName}<br></br>{lastName}
    </div>
  )
}
