import axios from "axios"
import service from '../services/contacts'

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, errorMessage, setErrorMessage}) => {
    const addName = (event) => {
        event.preventDefault()
        
        const newPerson =  {
          name: newName,
          number: newNumber
        }
        
        // check if a person already exists in phonebook
        let isExists = false
        for(let i=0; i<persons.length; i++){
          if(persons[i].name === newPerson.name){
            newPerson.id = persons[i].id
            isExists = true
            break
          }
        }
    
        if (isExists){
          if(window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)){
            service.updateContact(newPerson)
            .then(newContact => {
              setPersons(persons.map(person =>
                person.id === newContact.id ? {...person, number: newContact.number} : person
              ))
            })
            
            setErrorMessage(`${newPerson.name} Updated`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')

          }
        }
        else{
          service.addContact(newPerson)
          .then(newContact => {
            setPersons(persons.concat(newContact))
          })
          setErrorMessage(`${newPerson.name} Added`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        }
    }

    const onNameChange = (event) => {
        setNewName(event.target.value)
    }
    const onNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    
    return(
        <form onSubmit={addName}>
            <div>
                name: <input value={newName} onChange={onNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={onNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm