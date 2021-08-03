import React, {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteServices from './services/note'
import Notification from './components/Notification'
import Error from './components/Error'
const App = () =>{
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('')
  const [message, setNewMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
   
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const deleteContact = (event) => {
    event.preventDefault()
    const id = event.target.id
    const contactName = event.target.className
    const confirmed = window.confirm(`Delete ${contactName}?`)
    if(confirmed){
      noteServices
                  .deleteContact(id)
                  .catch(error =>{
                    setErrorMessage(`Information of ${contactName} was already deleted`)
                    setTimeout(()=>{
                      setErrorMessage(null)
                    }, 5000)
                  })
      setPersons(persons.filter(person => parseInt(person.id,10) !== parseInt(id,10)))
      setNewName('')
      setNewNumber('')
      setNewSearch('')
    }
  }

  useEffect(() => {
    noteServices  
                .getAll()
                .then(initialContacts=>{
                  setPersons(initialContacts)
                })
  },[])

  const personsToShow = search 
  ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  : persons

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    const found = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())
    if (found !== undefined){
      const confirmed = window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)
      if(confirmed){
        noteServices
                    .updateContact(found.id, personObject)
                    .then(returnedContact => {
                      setPersons(persons.map(person => returnedContact.name === person.name? personObject: person))
                    })
        setNewMessage(`Updated ${personObject.name}'s contact information`)
        setTimeout(()=>{
          setNewMessage(null)
        },5000)
      }
    }
    else{
      noteServices 
                  .addContact(personObject)
                  .then(newContact =>{
                    setPersons(persons.concat(newContact))
                    setNewName('')
                    setNewNumber('')
                    setNewSearch('')
                  })
      setNewMessage(`Added ${personObject.name}'s contact information`)
      setTimeout(()=>{
        setNewMessage(null)
      },5000)
    }
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <Notification message = {message}/>
      <Error message = {errorMessage}/>
        <Filter 
        search = {search} 
        handleSearchChange = {handleSearchChange}
        />
      <h2>Add a new</h2>
        <PersonForm
        addName = {addName}
        newName = {newName} 
        newNumber = {newNumber}
        handleNameChange = {handleNameChange} 
        handleNumberChange = {handleNumberChange}
        />
      <h2>Numbers</h2>
        <Persons persons = {personsToShow} deleteContact= {deleteContact}/>
    </div>
  )
}

export default App;

