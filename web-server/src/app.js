//path is a built in Core Node Module
const path = require('path')


const express = require('express');
const { send } = require('process');

//2 values that node provides
console.log(__dirname) // A path the directory that the current script lives in
//console.log(__filename) Compleat path from the root of the hard drive to the src folder, the path to thwe file itself
console.log(path.join(__dirname, '../public')) //path.join() Is a function, It is going to return the final path. With the second argument we can navigate in the directory upp a folder or in a folder



const app = express();

//Generating the path to the public folder
const publicDirectoryPath = path.join(__dirname, '../public')

//Providing the path to static
//Serving up the directory
app.use(express.static(publicDirectoryPath))
//express.static is a function, we are passing its return value into use
//Static takes the path to the folder we want to serve up
//Express is going to work through your application untill it finds the match for that Route
//Our Express static call is a match and it will find index.html and it is going to match the root URL, becouse the file has a special meening
// app.use(express.static(publicDirectoryPath))

app.get('/weather', (req,res)=>{
    res.send({
        forcast:"cloudy",
        location:"Finland"
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})

