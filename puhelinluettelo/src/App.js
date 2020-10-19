import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numberService from './services/numberService'

const App = (props) => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('nimi tulee tähän')
  const [ newNumber, setNewNumber] = useState('')

  useEffect(() => {
    numberService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if(persons.some(person => person.name === newName)){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
    }else{
      numberService
      .create(person)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm name={newName} number={newNumber} actionNumber={handleNumberChange} actionName={handleNameChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App