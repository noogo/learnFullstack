import React, { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import axios from "axios"
import personServices from './services/persons'
import Notification from "./components/Notification"
import './index.css'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [persons, setPersons] = useState([])
  const [showPersons, setShowPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [className, setClassName] = useState('')

  useEffect(() => {
    personServices.getAll()
      .then(data => {
        setPersons(data)
        setShowPersons(data)
      })
  }, [])



  const typeSearchName = (e) => {
    setSearchName(e.target.value)
    setShowPersons(persons.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const typeNewName = (e) => {
    setNewName(e.target.value)
  }
  const typeNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.some(person => person.name === newName)) {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (result) {
        const newPerson = { name: newName, number: newNumber }
        const id = persons[persons.findIndex(person => person.name === newName)].id
        console.log(id)
        personServices.update(id, newPerson)
          .then(data => {
            console.log(data)
            const allPersons = persons.map(person => person.id === id ? data : person)
            setPersons(allPersons)
            setShowPersons(allPersons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())))
            setNewName('')
            setNewNumber('')
            setClassName('notice')
            setMessage(`updated ${data.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
      // setNewName('')
      // setNewNumber('')
      // return alert(`${newName} is already added to phonebook`)

    }
    else {
      const newPerson = { name: newName, number: newNumber }
      personServices.create(newPerson)
        .then(data => {
          const allPersons = persons.concat(data)
          setPersons(allPersons)
          setShowPersons(allPersons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())))
          setNewName('')
          setNewNumber('')
          setClassName('notice')
          setMessage(`added ${data.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  const deletePerson = (one) => {


    return (
      () => {
        const result = window.confirm(`Delete ${one.name} ?`)
        if (result) {
          personServices.deleteOne(one.id)
            .then(res => {
              if (res.status === 200) {
                const personsToShow = persons.filter(person => person.id !== one.id)
                setPersons(personsToShow)
                setShowPersons(personsToShow.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())))
              }
            })
            .catch(err => {
              setClassName('errNotice')
              setMessage(`Information of ${one.name} has already been removed from server`)
              setTimeout(() => {
                setMessage(null)
              }, 5000)
              const personsToShow = persons.filter(person => person.id !== one.id)
              setPersons(personsToShow)
              setShowPersons(personsToShow.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())))
            })
        }
      }

    )

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} className={className} />
      <Filter searchName={searchName} typeSearchName={typeSearchName} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} typeNewName={typeNewName} newNumber={newNumber} typeNewNumber={typeNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={showPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App;
