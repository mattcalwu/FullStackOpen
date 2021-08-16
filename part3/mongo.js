const mongoose = require('mongoose')

if (process.argv.length < 3){
    console.log('Please provide password as an argument: node mongo.js <password> <name> <number');
    process.exit(1)
}

const password = process.argv[2]


const baseUrl = `mongodb+srv://phonebook:${password}@cluster0.ezrcr.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(baseUrl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)



if(process.argv.length === 3){
    Person.find({}).then(result => {
        console.log("phonebook:");
        result.forEach(person => {
            console.log(person.name, person.number);
        })
        mongoose.connection.close()
    })
}
else if(process.argv.length === 5){
    const name = process.argv[3]
    const number = process.argv[4]
    const person = new Person({
        name: name,
        number: number,
    })
    person.save().then( result =>{
    console.log('Person saved!');
    mongoose.connection.close()
    }) 
}



