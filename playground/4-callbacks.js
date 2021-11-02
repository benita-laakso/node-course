//A callback function is a function that we provide as an argument to a nother function

setTimeout(()=>{
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen','Jess']

const shortNames = names.filter((name)=>{
   return name.length <= 4
})

console.log(shortNames)