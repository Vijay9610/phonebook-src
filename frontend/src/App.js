import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import service from './services/contacts'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {
    service.getAll()
    .then(contacts => {
      setPersons(contacts)
    })
  }, [])

  const contactShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName} 
        setNewName={setNewName}
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <h3>Numbers</h3>
      <Persons contacts={contactShow} persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} />
    </div>
  )
}

export default App