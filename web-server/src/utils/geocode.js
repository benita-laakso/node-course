const request = require('request')

const geocode = (address,callback)  =>{// In the url i used + addrees + like Andrew did originaly. Thouse wo did not gett it to work used  + encodeURIComponent(address)+ insted off address
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?limit=1&access_token=pk.eyJ1IjoiYmVuaXRhbCIsImEiOiJja3ZnY3I4YzgzbHYyMzNvazNuMnh0c3IyIn0.Gv2IG7V96g_K5WJAbAPY5w'
  
    request({url ,json:true}, (error,{body})=>{
       if(error){
         callback('Unable to connect to location service!',undefined)
       } 
       else if (body.features.length === 0){
          callback ('Unable to find lokation.Try another serach',undefined)
       }
      else{//The first argument is where we would pass in the error, in this case there is none so we pass in undefined
        //The second argument is going to be the data
        //When things go well, when the surch returns resaults,we are going to gett that object sent back as the value for data
        callback(undefined,{
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name 
        })
      }
    })
  }
//Geocoding API  Taking an adress like Philadelphia USA and converting it to Longitude and lattitude cordinates
//With this API we can build an app where the user gives their location, we convert it to longitude and lattitude and they gett the weather 
//forward geocoding = We provide location and gett back longitude an dlattitude
//reversed geocoding = We provide longitude an dlattitude and gett back  location
//query-lets us know what we provide, features contains the data we want to extract, features:[] is an array, the first object in the array is the most relavent. limit property alows yo to defin how menny otions are returned
//center property gives you longitude and lattitude

module.exports = geocode

//geocode() is called in other files 
//Pasing the error to the callback, the callback can then choose what to do with the error
  // geocode('Boston',(error,data)=>{
  //   console.log('Error',error)
  //   console.log('Data', data)
  // })

