import React from 'react'

// we can also use interface, all upto se
type DefinigProps = {
    name : string,
    number: number,
    isLoggedIn: boolean
}

export default function Greet(props:DefinigProps) {
  return (
    <div>
        <h1>
        {props.isLoggedIn && `Greet to ${props.name} ${props.number} times`}
        </h1>
    </div>
  )
}
