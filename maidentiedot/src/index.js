import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchInput, setSearchInput] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;languages;flag')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  console.log(countries)

  const filterCountries =
  searchInput.length === 1
  ? countries
  : countries.filter(
  (country) => country.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  )


  const countryResult = () => {
    if(filterCountries.length > 10) {
      return "Too many matches, specify another filter"
    }
    return filterCountries.map((country) =>
    <p key={country.alpha2Code}>{country.name}</p>
    )
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      search for countries: <input
      onChange={handleSearch} 
      />
      {countryResult()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
