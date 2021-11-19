const name = "Adam"

 const age = 34

 const user = {
     name,userAge:age
 }

 console.log(user)

 const product = {
     label :"Red notebook",
     stock :201,
     price: 20,
     salePrice:undefined,
     rating:10
 }

 //De structuring turns properties into variables. When we use destructuring we can add a default value if there is one in the original object.Ithere is a value in the object the default wount be used
//  const {label:productLabel,stock,price,rating = 5} = product
  
//  console.log(stock)
//  console.log(rating)
//  console.log(productLabel)

const transaction = (type,  {label,stock = 0 } = {})=>{   //  = {} Setting default value label to empty object, Setting default value stock to 0
     console.log(type, label,stock)

}

transaction("order", product)

transaction("order")