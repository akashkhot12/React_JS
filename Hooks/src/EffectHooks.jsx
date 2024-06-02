import React, { useEffect, useState } from 'react'

export default function EffectHooks() {
    const [content,setContent] = useState("Post");
    const [count,setCount] = useState(0)

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>{count} count</button>
        <button onClick={()=>setContent("Post")}>Post</button>
        <button onClick={()=>setContent("User")}>User</button>
        <button onClick={()=>setContent("Comment")}>Comment</button>

        <h2>{content}</h2>
    </div>
  )
}
