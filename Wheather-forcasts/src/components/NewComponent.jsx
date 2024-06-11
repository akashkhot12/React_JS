import React, { useEffect, useState } from 'react'

export default function NewComponent() {
    const [city,setCity] = useState('Mumbai');
    const [search,setSearch] = useState('Nagpur');

    useEffect(()=>{
        const fetcApi = async()=>{
            const url  = '';
            const response  = await fetch(url);
            const result  = await response.json();
            setSearch(result)
        }
    },[setSearch])

  return (
    <div></div>
  )
}
