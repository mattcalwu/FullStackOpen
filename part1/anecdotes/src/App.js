import React, {useState} from 'react'


const Button = (props) => {
  console.log(props)
  return(
    <button onClick = {props.clickHandler}>
    {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const [selected, setSelected] = useState(0)

  const [maxIndex, setMax] = useState(0)

  const rand = Math.random()
  const clickHandler = () => setSelected(Math.floor(rand * anecdotes.length))

  const voteHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    if (copy[selected] > copy[maxIndex])
    {
      setMax(selected)
    }
    return(setVotes(copy))
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes
      <p>
        <Button clickHandler = {voteHandler} text = 'vote'/>
        <Button clickHandler = {clickHandler} text = 'next anecdote'/>
      </p>
      <h1>Anecdote with the most vote</h1>
      {anecdotes[maxIndex]}
      
    </div>
  )
}

export default App;
