interface nameProps {
    namexyz : {
        first:string
        last:string
    } 
}

export default function Person(props:nameProps) {

  return (
    <div>Hello {props.namexyz.first} {props.namexyz.last}</div>
  )
}
