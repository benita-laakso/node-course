const fs = require("fs");
const chalk = require('chalk')

const addNote =  (title, body) => {
  const notes = loadNotes(); //starts of with an empty array that we can add new notes to. loadNotes starts of with empty array if ther is no file
  const duplicateNote = notes.find((note)=> note.title ===title)


  if (!duplicateNote) {//if there is no duplicateNote we add the new not passed in
    //we will represent each note as an object and add it to the notes array with push() method
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes); // notes has been changed since it was originaly pased in
    console.log(chalk.green.inverse('New note added'))
  } else{
      console.log(chalk.red.inverse('Note title taken'))
  }
};

const removeNote = (title) =>{
      const notes = loadNotes()
      const notesToKeep = notes.filter((note)=> note.title !== title)     
      
    if (notes.length > notesToKeep.length){
      console.log(chalk.bgGreen('Note removed!'))
      saveNotes(notesToKeep)
    }
    else{
      console.log(chalk.bgRed('No note found'))
    }
   

}

const saveNotes =  (notes) => {
  //takes in the notes array and writes it to the file System
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//This code works well when there is a file and it contains JSON
//It will fail if there is no file or the file does not contain JSON
//if any code in try throws an error the code is emediatly going to stop and run the catch block instead

const loadNotes = ()=> {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON); //Takes in the JSON and gives back the object or array
  } catch (e) {
    //If ther is no file this code will run
    return []; //Basicly what would happen if we had an empty file
    // meening we are starting addNote() off with an empty array
  }
};

const listNotes = ()=>{
 const notes = loadNotes();
 console.log(chalk.inverse('Your notes'))

 notes.forEach((note)=>{
     console.log(note.title)
 })
};

const readNote =(title)=>{
  const notes = loadNotes();
  const note = notes.find((note)=> note.title === title)
  if (note){
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }
  else {
    console.log(chalk.red('No note was found'))
  }
}


module.exports = {
  addNote: addNote,
  removeNote:removeNote,
  listNotes:listNotes,
  readNote:readNote
};
