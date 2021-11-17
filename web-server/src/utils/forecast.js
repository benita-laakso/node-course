const request = require('request')


// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
 
const forecast = (latitude,longitude, callback) =>{
// const url = 'http://api.weatherstack.com/current?access_key=24afed14ce2d4603f01bcb5ecbf6a39d&query=37.8267,-122.423&units=f'

const url = 'http://api.weatherstack.com/current?access_key=24afed14ce2d4603f01bcb5ecbf6a39d&query=' + latitude + ',' + longitude  +  '&units=f';
request({url, json:true},(error,{body}) =>{
    if(error){
      callback('Unable to connect to weather service',undefined)
    }else if(body.error){
        callback('Unable to find location',undefined)

    }
    else{
        callback(undefined, body.current.weather_descriptions[0] +  ' It is ' + body.current.temperature + 'degrees,but it feels like ' + body.current.feelslike);
    }

})
}

module.exports = forecast

//Acsessing Apis Json in browser
//http://api.weatherstack.com/current?access_key=24afed14ce2d4603f01bcb5ecbf6a39d&query=New%20York

