import React from 'react'


const Total = ({ course }) => {
    const sum = course.parts.reduce((tot, part) => tot + part.exercises, 0)
    return(
      <p><strong>Total of {sum} exercises</strong></p>
    ) 
  }

export default Total