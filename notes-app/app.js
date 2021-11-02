const chalk = require('chalk') //npm pakage
const yargs = require('yargs') //npm pakage
const notes = require('./notes.js')

//Customizes yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            decribe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)  //Calling addNote function that we created in notes.js
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    bulider:{
        title:{
            describe:'remove note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) { //argv is a  variable that contains the arguments passed to a program through the command line. 
        notes.removeNote(argv.title) //title maches with the option name we chouse in builder
        //notes are the functions exported from notes.js
    }
})
//Create list command
yargs.command({
    command:'list',
    describe:'Listing items',
  
    handler(){
        notes.listNotes()
    }
})
// Create read command
yargs.command({
    command:'read',
    describe:'Reading items',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


//console.log(yargs.argv) 
// returns info from the parsed info of the process in an object
//When vwe acsess the argv propperty on yargs, yargs will phars the arguments

yargs.parse() // Pharses all of the arguments with the configuration, with the yargs command calles up above







