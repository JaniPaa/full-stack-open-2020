import React, { useState } from 'react'
import Person from './Person'

const App = (props) => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('nimi tulee tähän')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      id: persons.length + 1
    }

    if(persons.some(person => person.name === newName)){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
    }else{
        setPersons(persons.concat(person))
        setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input 
            value={newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <Person key={i} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App