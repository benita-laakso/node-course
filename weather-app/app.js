const request = require('request')

//Geting data from the internet and storing it in a variable
const url = 'http://api.weatherstack.com/current?access_key=24afed14ce2d4603f01bcb5ecbf6a39d&query=37.8267,-122.423&units=f'


//2 arguments, 1st options object that outlines waht we want to do
//2nd a callback function
request({url:url,json:true}, (error,response)=>{
  if(error){//if things fail
    console.log('Unable to connect to weather service')
  }else if(response.body.error){
    //chequing if there is an error code/if things is  wrong with the input
    console.log('Unable to find lokation')
  }

  else{
     //json - parses the JSON responses, meening response.body will be an object as a bosed to a JSON
      console.log(`${response.body.current.weather_descriptions[0]}  It is ${response.body.current.temperature} degrees,but it feels like ${response.body.current.feelslike}`)
  }
})

//Geocoding API  Taking an adress like Philadelphia USA and converting it to Longitude and lattitude cordinates
//With this API we can build an app where the user gives their location, we convert it to longitude and lattitude and they gett the weather 
//forward geocoding = We provide location and gett back longitude an dlattitude
//reversed geocoding = We provide longitude an dlattitude and gett back  location
//query-lets us know what we provide, features contains the data we want to extract, features:[] is an array, the first object in the array is the most relavent. limit property alows yo to defin how menny otions are returned
//center property gives you longitude and lattitude
//

















const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoiYmVuaXRhbCIsImEiOiJja3ZnY3I4YzgzbHYyMzNvazNuMnh0c3IyIn0.Gv2IG7V96g_K5WJAbAPY5w';

request({url : geocodeURL, json:true},  (error, response, body)=> {
     if(error){
       console.log('Unable to connectacsess locatin sercive')
     }
    else if(body.features.length === 0){
      console.log('Unable to get location')
    }
     else{
      const latitude = body.features[0].center[1]
      const longitude = body.features[0].center[0]
     console.log(latitude,longitude)
     }
    
   
  });