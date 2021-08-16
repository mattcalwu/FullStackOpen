require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
//app.use(morgan("tiny"))
const custom = (tokens, req, res) =>{
  if(tokens.method(req,res) === 'POST'){
    return [
      tokens.method(req,res),
      tokens.url(req,res),
      tokens.status(req,res),
      tokens.req(req,res, 'content-length'), '-',
      tokens['response-time'](req,res), 'ms',JSON.stringify(req.body)].join(' ') }
  else{
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'].join(' ')}
}
app.use(morgan(custom))


app.get('/', (request, response) => {
  response.send('<div>Welcome to the app!</div>')
})

app.get('/info', (request, response) => {
  Person.find({}).then(person => {
    response.send(`<div>Phonebook has infor for ${person.length} people</br></br>${new Date()}</div>`)})
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(person => {
    response.json(person) })
})

app.get('/api/persons/:id', (request, response, next)=>{
  Person.findById(request.params.id).then(person => {
    if(person){
      response.json(person)
    }else{
      response.status(404).end()
    } })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => { 
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()})
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next)=> {
  const body = request.body
  const person = {
    name: body.name,
    number: body.number }

  Person.findByIdAndUpdate(request.params.id, person, {new: true})
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

/* const generateId = () =>{
    const min = Math.max(...persons.map(person=>person.id))
    const max = 5*min
    const id = Math.random() * (max-min) + min
    return Math.floor(id)
} */

app.post('/api/persons', (request, response, next)=>{
  const body = request.body
  /*     if(!body.name || !body.number){
        return response.status(400).json({
            error: 'Missing name and or number'
        })
    }
    const unique = persons.find(person=> person.name === body.name)
    if(unique){
        return response.status(400).json({
            error: 'name must be unique'
        })
    } */

  const person = new Person({
    name: body.name,
    number: body.number })
  //persons = persons.concat(person)
  person.save().then(savedPerson => {
    response.json(savedPerson) })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError'){
    return response.status(400).send({ error: 'malformatted id' }) }
  else if(error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message }) }
  next(error) }
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})