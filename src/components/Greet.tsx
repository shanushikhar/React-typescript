import React from 'react'

type DefinigProps = {
    name:String
}

export default function Greet(props:DefinigProps) {
  return (
    <div>Greet to {props.name}</div>
  )
}
