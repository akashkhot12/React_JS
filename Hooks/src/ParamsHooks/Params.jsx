import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Params() {
    const [setParams,updatSetParams] = useSearchParams();
    console.log(setParams.get('age'));
    console.log(setParams.get('city'));
    const age = setParams.get('age');
    const city = setParams.get('city');
  return (
    <div>
        <h3>{age}</h3>
        <h3>{city}</h3>
    </div>
  )
}
