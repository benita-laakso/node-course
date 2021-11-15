//A callback function is a function that we provide as an argument to a nother function

setTimeout(()=>{
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen','Jess']

const shortNames = names.filter((name)=>{
   return name.length <= 4
})
console.log(shortNames)
console.log('..............')

//geocode is a function that will tacke a callback function, You can tace in as menny arguments as you need along with the call back
//We are setting it up so geocode will take the address that the user provides and the callbackfunction
//The goal is to give the data back to the caller of geocode
//When the caller types in a location into the geocode function they want to get back ther coardinates


const geocode = (adress, callback)=>{
   setTimeout(()=>{
    const data = {
        longitude:0,
        latitude :0
    }
    callback(data)
   },2000)
}
geocode('Philadelphia',(data)=>{
  console.log(data)
})

/////Same code my version for clarity
console.log('Same code my version for clarity')
const geocode2 = (adress, callback2)=>{
    setTimeout(()=>{
     const data = {
         longitude:0,
         latitude :0
     }
     callback2(data)
    },2000)
 }
 
 const callback2 = (data)=>{
     return console.log(data)
  }
 geocode2('Philadelphia',callback2)
 
 /////Same code my version for clarity


console.log('......')


const add = (x,y, callback)=>{
    setTimeout(()=>{
        callback(x+y)
    },2000) 
  };

add(10,4, (sum)=>{ console.log(sum)})
