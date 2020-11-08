import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numberService from './services/numberService'
import Notifications from './components/Notifications'
import './index.css'

const App = (props) => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('nimi tulee tähän')
  const [ newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState("")

  useEffect(() => {
    numberService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const removePerson = (event, person) => {
   // console.log(event)
    //console.log(person)
    event.preventDefault()
    if(window.confirm("Delete "+  +"?")){
      numberService.deleteNumber(person.id)
      const tempList = persons.filter(pers => pers.id !== person.id)

      setPersons(tempList)
      setNotification(
        `Person '${person.name}' was deleted.`
      )
      setTimeout(() => {
        setNotification(null)
      }, 3000)
    }
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if(persons.some(person => person.name === newName)){
      //console.log("test" + persons[1].id)
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const foundPerson = persons.filter(person => person.name === newName) // aika scuffed kikka id:n hakemiseen
          const updatedPerson = {...person, name: newName}
         // console.log(foundPerson[0].id)
          numberService.update(foundPerson[0].id, updatedPerson)
          .then(returnedPerson => {
            console.log(returnedPerson)
            setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
          })
          setNotification(
            `Persons '${updatedPerson.name}'s number was changed.`
          )
          setTimeout(() => {
            setNotification(null)
          }, 3000)
          setNewName('')
          setNewNumber('')
          console.log(persons)
        }else{
          setNewName('')
          setNewNumber('')
        }  
    }else{
      numberService
      .create(person)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNotification(
          `Added '${person.name}'`
        )
        setTimeout(() => {
          setNotification(null)
        }, 3000)
        setNewName('')
        setNewNumber('')
      })
      
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications message={notification}/>
      <PersonForm name={newName} number={newNumber} actionNumber={handleNumberChange} actionName={handleNameChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} dele={removePerson}/>
    </div>
  )

}

export default App