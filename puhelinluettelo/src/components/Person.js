import React from 'react'

const Person = (props) => {

  return (
    <li>{props.person.name} {props.person.number} <button onClick={(event)=>{
      props.dele(event, props.person)
    }}>delete</button></li>
  )
}

export default Person