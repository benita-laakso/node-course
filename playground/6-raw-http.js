const http = require('http') //This indecates that http requires the core module HTTPS from Node.js core modules(the https variable name is standarsdin the docs)
const url = 'http://api.weatherstack.com/current?access_key=24afed14ce2d4603f01bcb5ecbf6a39d&query=45,-75&units=f';

 //Reguest is a built in function in Node.js .We pass 2 arguments to it. 1st our url. 2nd is a callback function
 //the callback function getts called with the response
 const req = http.request(url,(response)=>{
     let data = '' //we are using let seing as we are going to reasign the value over time
    response.on('data',(chunk)=>{
        data = data + chunk.toString() //converting the buffer to a string  Giving us acsess to the entire body responce from the variable data
        console.log(chunk)

    })
    response.on('end' ,()=>{
  
        //parsing the data so we can get an object, that we can pull properties off
        const responseBody = JSON.parse(data)
        console.log(responseBody)

    })
 })

req.on('error',(error)=>{
    console.log('An error has accured',error)

}) //the event we are listening for at this point is and will be fired when an error acures. Our callback function that wwe provide here is going to alow us to do something with that error. The error is the first and only argument

 req.end()
//In this callback we don´t have acsess yto the compleat response body as we are using Node.js core module http.request() with out npm request library 
//We have to listen for individual chunks to come in,we have to listen to when they have all arived
//http data can be streamed in multiple parts
//The chunk data that commes back is a buffer      buffer= a sett of numbers
//we want to convert the buffer to niumbers so we 



//response.on() is a function that alows us to register a handler, 
//there are a few events we can regiser callback functions for, one of them is data, 
//1. We provide the event name as the 1st argument represented as a string. Ex response.on('data')
//2. We can provide the callback, thats going to fire when new data comes in, we get acses to that data through the first and only argument commonly called chunk
//  Response.on('data',(chunk)=>{})
//The data comming in can happen once or multiple times, we want to take the chunk/ all of the chunks and store it in a variable
//3. Figure aout when we are done, the end event     response.on('end',()=>{}) after that is's callback will run, It doesn't take any arguments

//Figuring out how we can gett the entire reponce body and parse it from a JSON to a JS object


//What we gett back from the request method is what you can reffer to as the request it self, this is why we store this information in a variable called req, on here ther is a method we can use
//req.end()   By calling end the program will see that we are done setting up our request and end() will be fierd off 