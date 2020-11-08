import React from 'react'
import Person from './Person'

const Persons = (props) => {

  console.log(props)
    return(
        <div>
            <ul>
        {props.persons.map((person, i) => 
          <Person key={i} person={person} dele={props.dele}/>
        )}
      </ul>
        </div>
    )
}

export default Persons