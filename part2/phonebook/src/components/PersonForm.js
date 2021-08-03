import React from 'react'


const PersonForm = ({addName, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return(
        <>
        <form onSubmit = {addName}>
        <div>
          Name: <input 
          value = {newName} 
          onChange = {handleNameChange}
          />
        </div>
        <div>
          Number: <input
          value = {newNumber}
          onChange = {handleNumberChange}
          >
          </input>
        </div>
        <div>
          <button type = 'submit'>add</button>
        </div>
      </form>
      </>
    )
}

export default PersonForm