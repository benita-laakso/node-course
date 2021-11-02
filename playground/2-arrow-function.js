// const square = function(x){
//     return x * x
// }
// 


// const square = (x)=>{
//     return x*x
// }

//const square = (x) => x * x 
// shorthand only possible to use when you emidiatly return a value

//console.log(square(2))

//arrow functions don't bind their own this  value. Arrow functions are not suited for methods 
//(properties that are functions when we want to acsess this)

const event = {
    name :'Birthday Party',
    guestList : ['Andrew', 'Mike', 'Jen'],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) =>{
            console.log(guest + 'is attending ' + this.name)
        })
    }
}
event.printGuestList()