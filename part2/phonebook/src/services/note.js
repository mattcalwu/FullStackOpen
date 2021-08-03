import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addContact = newContact => {
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

const deleteContact = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updateContact = (id, contactInfo) => {
    const request = axios.put(`${baseUrl}/${id}`, contactInfo)
    return request.then(response => response.data)
}

export default {getAll, addContact, deleteContact, updateContact}