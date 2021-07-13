import React, { useState } from 'react'

const Button = (props) => {
  console.log(props)
  return(
    <button onClick = {props.clickHandler}>
      {props.text}
    </button>
  )
}
const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.stat}</td>
  </tr>
)

const Statistics = ({good, neutral, bad, total}) => {
  if(total !== 0)
  {
  return(
    <>
    <table>
    <Statistic text = {'Good'} stat = {good}/>
    <Statistic text = {'Neutral'} stat = {neutral}/>
    <Statistic text = {'Bad'} stat = {bad}/>
    <Statistic text = {'All'} stat = {total}/>
    <Statistic text = {'Average'} stat = {(good-bad)/total}/>
    <Statistic text = {'Positive'} stat = {(100*good)/total + ' %'}/>
    </table>
    </>
  )
  }
  else
  {
    return (
      <div>No Feedback Given</div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodHandler = () => {
    setGood(good+1)
    setTotal(total+1)
    }
  const neutralHandler = () => {
    setNeutral(neutral+1)
    setTotal(total+1)
  }
  const badHandler = () => {
    setBad(bad+1)
    setTotal(total+1)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandler = {goodHandler} text = 'Good'/>
      <Button clickHandler = {neutralHandler} text = 'Neutral'/>
      <Button clickHandler = {badHandler} text = 'Bad'/>
      <h2>Statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total}/>
    </div>
  )
  
}

export default App

