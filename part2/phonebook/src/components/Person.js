import React from 'react'

const Person = ({person, deleteContact}) => {
    return(
        <>
          <li>
            <form id = {person.id} className = {person.name} onSubmit = {deleteContact}>
            {person.name} {person.number}
            <button type = 'submit'>delete</button>
            </form>
          </li>
        </>
    )
}
export default Person