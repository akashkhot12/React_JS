import React, { useEffect, useState } from 'react'

export default function EffectHooks() {
    const [content,setContent] = useState("Post");
    const [count,setCount] = useState(0);
    const [items,setItems] = useState([])

    useEffect(()=>{
        console.log("componentDidMount");
    },[])

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/'+content)
      .then(response => response.json())
      .then(json => setItems(json))

        console.log("componentDidUpdate");
        // cleaning
        return()=>{
            console.log("unmount");
        }
    },[content])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>{count} count</button>
        <button onClick={()=>setContent("posts")}>Post</button>
        <button onClick={()=>setContent("users")}>User</button>
        <button onClick={()=>setContent("comments")}>Comment</button>

        <h2>{content}</h2>

        <ul>
            {items && items.map(item =>{
               return <li key={item.id}>{item.id}</li>
            })}
        </ul>
    </div>
  )
}
