import React from 'react'
import Person from './Person'

const Persons = ({persons, deleteContact}) => {
    return(
        <ul style = {{
            listStyle: 'none', 
            paddingLeft: 0}
            }>
            {persons.map(
              person => <Person key = {person.name} person = {person} deleteContact = {deleteContact}/>)}
          </ul>
    )
}


export default Persons