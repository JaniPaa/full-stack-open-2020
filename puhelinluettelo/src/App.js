import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = (props) => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('nimi tulee tähän')
  const [ newNumber, setNewNumber] = useState('')

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
      number: newNumber,
      id: persons.length + 1
    }

    if(persons.some(person => person.name === newName)){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
    }else{
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
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