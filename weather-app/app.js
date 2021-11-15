const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const adress = process.argv[2]

console.log(process.argv[2])

if(!adress){
  return console.log("please provide a location")
}else{

//We can easaly call geocode() more then one time, from different places in our application, becouse everything is sitting in a single reusable function above.
//pasing the error to the callback, so that the callback can then choose what to do, this makes the code reusable in different scenarios
geocode(adress,(error,{latitude,longitude,location} = {})=>{//Passing in 'Philadelphia', gives geo cordinests, becouse it won't give any errors. For testing perpouses swoping 'Philadelphia' for  'abcd1234' will make the adress fail, becouse its undefined.         
  if(error){
    return console.log(error)
  }
 
  //I pased an empty string insted of one cordinate to treiger the felse if bad request 44.1545
forecast( latitude ,longitude, (error, forcastData) => {  //44.1545,-75.7088,
  if(error){
    return console.log(error)//We are using return to stop the callback function
  }
  //This code will run if boath requests worked
  console.log(location)
  console.log(forcastData)
})
})

}





