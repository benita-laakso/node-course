//reuqest() is a npm module

const request = require('request')

//Geting data from the internet and storing it in a variable from the API https://weatherstack.com/documentation
const url = 'http://api.weatherstack.com/current?access_key=24afed14ce2d4603f01bcb5ecbf6a39d&query=37.8267,-122.423&units=f'

//2 arguments, 1st options object that outlines waht we want to do
//2nd a callback function
request({url:url,json:true}, (error,response)=>{
 //json - parses the JSON responses, meening response.body will be an object as a bosed to a JSON?
 //json - sets body to JSON representation of value -Text from documentation page
console.log(`${response.body.current.weather_descriptions[0]}  It is ${response.body.current.temperature} degrees,but it feels like ${response.body.current.feelslike}
`)
})
