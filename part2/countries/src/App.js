import React, { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import Countries from "./components/Countries"

function App() {
  const [countries, setCountries] = useState([])
  const [newValue, setNewValue] = useState('')
  const [showCountries, setShowCountries] = useState([])


  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountries(res.data)
      })
  }, [])

  const typeNewValue = (e) => {
    setNewValue(e.target.value)
    setShowCountries(countries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const clickToDetail = (c) => {
    const toShow = [c]
    return (
      () => { setShowCountries(toShow) }
    )
  }

  return (
    <div>
      <Filter newValue={newValue} typeNewValue={typeNewValue} />
      <Countries showCountries={showCountries} clickToDetail={clickToDetail} />
    </div>
  )
}

export default App;
