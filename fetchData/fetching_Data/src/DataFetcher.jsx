import React, { useState } from 'react'
import { useEffect } from 'react';

export default function DataFetcher() {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) {
                    console.log('network response was not ok.');
                }

                const data  = await response.json();
                setData(data);
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }

        fetchData();
    },[]);

    if (loading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div>Error :{error.message}</div>
    }


  return (
    <div>
        <h1>Fetch data</h1>
        {/* <ul>
            {data.map(item=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul> */}

        

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    SR.
                </th>
                <th scope="col" className="px-6 py-3">
                    Tittle
                </th>
                <th scope="col" className="px-6 py-3">
                    Body
                </th>
            </tr>
        </thead>
        <tbody>
        
        {data.map(item => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                    {item.id}
                </td>
                <td className="px-6 py-4">
                    {item.title}
                </td>
                <td className="px-6 py-4">
                    {item.body}
                </td>
            </tr>
            
          ))}
           
        </tbody>
    </table>
</div>




    </div>
  )
}
