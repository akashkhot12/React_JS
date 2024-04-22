import React from 'react'
import "../../DB.json"
export default function DynamicData(props) {
  return (
    <>
    <h1>{props.db.title}</h1>
    </>
  )
}
