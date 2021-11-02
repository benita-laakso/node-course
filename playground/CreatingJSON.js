const fs = require('fs')

console.log('hello')

const hus = {
   djur : "inga",
   trivsel : 'fantastisk',
   växter:"många"
}

//Converting the object to a JSON, and storing it in this file
husJSON =  JSON.stringify(hus)

//printing the JSON in console
console.log(husJSON)

//Building a JSON file
fs.writeFileSync('CreatingJSON.json',husJSON)

//Storing the data from another file
const dataBuffer = fs.readFileSync('CreatingJSON.json')
//Printing the data in it's current 7b 22 64 6a 75 72 22 3a 22 69 6e 67 61 22 2c 22 74 72 69 76 73 6 ...
console.log(dataBuffer)

//Converting the data into a string, in this example the string data from the other file is a JSON
const dataString = dataBuffer.toString()
console.log('hej'+ dataString)

hus.trivsel = "jätte bra"

//Chequinhg that the Object was updated
console.log(hus)

//Converting the object to a JSON, and storing it in this file
husJSON =  JSON.stringify(hus)

//Pasing the updated Object to the JSON file in JSON format
fs.writeFileSync('CreatingJSON.json',husJSON)

