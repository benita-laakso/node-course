const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') //Loading data from other file
const dataJSON = dataBuffer.toString() //Converting data to a string
const user = JSON.parse(dataJSON) //Parseing data into an object

user.name = "Gunther" //Changing data in object
user.age = 54


const userJSON = JSON.stringify(user) 
//The JSON.stringify() method converts a JavaScript object or value to a JSON string

fs.writeFileSync('1-json.json', userJSON) //Overriding original data in JSON file















