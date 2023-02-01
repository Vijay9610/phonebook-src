import axios from "axios";

const baseUrl = '/api/persons'
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getContact = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const addContact = (newContact) => {
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

const deleteContact = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    // request.then(() => {
    //     alert('Contact is deleted from phonebook.')
    // })
    // .catch(() => {
    //     alert('Contact can not be deleted.')
    // })
    return request
}

const updateContact = (newContact) => {
    const request = axios.put(`${baseUrl}/${newContact.id}`, newContact)
    
    return request.then(response => response.data)
}

export default {getAll, getContact, addContact, deleteContact, updateContact}