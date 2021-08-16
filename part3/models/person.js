const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
        .then(result => {
            console.log('Connected to server');
        })
        .catch(error =>{
            console.log('Error connecting to MongoDB', error.message);
        })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    number:{
        type: String,
        minLength: 8,
        required: true
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

personSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Person', personSchema)