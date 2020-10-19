import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Finder = (props) => {
  return(
    <div>
      find countries <input
      onChange={props.handler}
      />
    </div>
  )
}

const Show = (props) => {
  const country = props
  console.log(country)
  return(
   <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <img src={country.flag} alt={country.name + " flag"} width="100"></img>
  </div>
  )
}


const Countries = (props) => {

  if (props.newFilter.toLowerCase() === '') {
    return (
    <div>
      <p>Countries will be listed here</p>      
    </div>)
  } else {
    const results = props.countries.filter(function (country) { return country.name.toLowerCase().includes(props.newFilter.toLowerCase())})
    if (results.length > 1 && results.length <= 10) {
      return (results.map(country =>
        <p key={country.name}>{country.name} <button onClick={() => Show(country)}>show</button></p>)
        )
    } else if (results.length === 1) {
      return (
        results.map(country =>
          <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
              {(country.languages.map(language =>
              <li key={language.name}>{language.name}</li>))}
            </ul>
            <img src={country.flag} alt={country.name + " flag"} width="100"></img>
          </div>
        )
      )
    } else {
      return (
      <div>
        <p>Too many matches ({results.length}), specify another filter</p>      
      </div>)
    }
  }
}

const App = () => {
  const [ newFilter, setNewFilter ] = useState('')
  const [ countries, setCountries] = useState([]) 

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;languages;flag;population')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Finder handler={handleFilterChange}/>
      <Countries countries={countries} newFilter={newFilter}/>
      <Show/>
    </div>
  )
}
export default App
