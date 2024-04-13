import React from 'react'

export default function Array() {
    const Students = ["Akash","Anil","Vainkatesha","Rajnikant"]
  return (
    <div>
            <h1>hello world </h1>
            {
                Students.map((data,index)=>(
                    <h2 key={index}>Name is : {data}</h2>
                ))
            }
    </div>
  )
}
