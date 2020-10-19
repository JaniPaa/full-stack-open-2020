import React from 'react'
import numberService from '../services/numberService'

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number} <button>delete</button></li>
  )
}

export default Person