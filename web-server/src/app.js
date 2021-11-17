//path is a built in Core Node Module
const path = require('path')
const hbs = require('hbs') //npm pakage,view engine

const express = require('express');
const { send } = require('process');

//2 values that node provides
console.log(__dirname) // A path the directory that the current script lives in
//console.log(__filename) Compleat path from the root of the hard drive to the src folder, the path to thwe file itself
console.log(path.join(__dirname, '../public')) //path.join() Is a function, It is going to return the final path. With the second argument we can navigate in the directory upp a folder or in a folder

const app = express();

//Define paths for Express config
//Generating the path to the public folder , --dirname is the file we are currently in this file
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname,'../templates/views')

const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
//telling Expres which templeting engin we installed with npm, by using a new method on map
//set alows you to set a value to a given express value. First argument is the key, the setting name, 2nd the value we want to set for the setter
//We are setting up a Viue engin(Express) hence the first arguments value is 'view engine' view engine -A reserved name in express, the value is the name of the module we installed
app.set('view engine','hbs')

//views is an express setting - we set it to the viues directory that we would like to use
app.set('views', viewsPath)//viewsPath is avariable whre we have stored the correct path to the viue

hbs.registerPartials(partialsPath) //Takes a path to where your partials live

//Setup static directory to serve
//Providing the path to static
app.use(express.static(publicDirectoryPath))
//express.static is a function, we are passing its return value into use
//Static takes the path to the folder we want to serve up
//Express is going to work through your application untill it finds the match for that Route
//Our Express static call is a match and it will find index.html and it is going to match the root URL, becouse the file has a special meening
// app.use(express.static(publicDirectoryPath))


//To serve up the Handlebars Templet index.hbs we need to set up a Rout
//Leving the first string empty becouse it's the home page
app.get('',(req,res)=>{
    res.render('index', {
        title: 'Weather',
        name: 'Girl Coder'

    }) // render alows us to render one of our view/one of our Handlebars templates
    //first argument the Viue/filename we want to use without file extention .hbs
    //Second argument is an object that contains all of the values that you want the View to be able to actsess
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Coder Girl'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{  //'help'is the name of the new template/help.hbs
        helpText: 'Help Page',
        title:'Help',
        name:'Coder Girl'
    })
})

app.get('/weather', (req,res)=>{
    if(!req.query.adress){
        return res.send({
            error:'Pleas add adress'
        })
    }
    res.send({
        forcast:"cloudy",
        location:"Finland",
        adress:req.query.adress 
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.serch){
       return res.send({
            error:'Please add a search'})
    }
    console.log(req.query)
    res.send({
        products: []
    })
})



app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"404",
        name:"Anna",
        errorMessage:"Help page not found"
    })
})

app.get('*', (req,res)=>{
    res.render('404',{
        title:"404",
        name:"Anna",
        errorMessage:"Somthing went wrong"
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})

