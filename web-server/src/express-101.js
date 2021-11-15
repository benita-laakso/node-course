const express = require('express')

const app = express();

//When somone visits our domain we want to show them something

app.get('',(req,res)=>{
    res.send('Hello express!') // This will display in the browser
})



//We can provide an array or an object as the value to send
//When you provide an object you get a JSON responce back

app.get('/help', (req,res)=>{
    res.send({
        name:'Anna',
        age:32
    }) 
})

//We can provide an array or an object as the value to send
//When you provide an object you get a JSON responce back/The values are being pharsed
//The JSON Can be an array, example an array of objects
app.get('/hello', (req,res)=>{
    res.send([{name:'Andrew'},{name:"Sara"}]) 
})



app.get('/about',(req,res)=>{
    res.send('About')
})

//We can send back HTML or JSON
app.get('/weather',(req,res)=>{
    res.send('<h1>Weather</h1>') 
})

//Only ever used once in an application, starts the server and has it listen to a specific port
//2nd argument a callback function that runs when the server is upp and running
app.listen(3001,()=>{
    console.log('Server is up on port 3001')
})

//Setting up our server when somone is trying to set something up in a specific rout
// This letts us configure what a server should do, when somone tryes to gett the resourse att a specific URL
//The get method takes 2 arguments. 1st the route/partial URL, 2nd a function
//The function passed into get() describes what we want to do when someone visits a perticulare route
//The function will decribe what to send back to them


//The function gets called with 2 arguments (req,res)=>, 1st an object containing information about information from the incoming server


//res.send() - Alowes us to send somthing back to the requester

//When we run a web server it is never going to stop unless we stop it
//ctrl  C -shuts down the server