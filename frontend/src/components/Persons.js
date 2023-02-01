import service from '../services/contacts'
import Notification from './Notification'

const Persons = ({contacts, persons, setPersons, setErrorMessage}) => {
    const deleteContact = (contact, id) => {
        if(window.confirm(`Delete ${contact} ?`)){
            service.deleteContact(id).then(() => {
                setErrorMessage(`Information of ${contact} has been removed from server`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
            .catch(() => {
                setErrorMessage(`Request failed!, Maybe information of ${contact} has been already removed from server`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
            setPersons(persons.filter(person => person.id !== id))
        }
    }
    return (
        <div>
            {contacts.map(person => <p key={person.number}>
                {person.name} {person.number} 
                <button onClick={() => {deleteContact(person.name, person.id)}}>delete</button> 
            </p>)}
        </div>
    )
}

export default Persons