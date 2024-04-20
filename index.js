let car = {
    model: 'Nexia2',
    year: 2015,
    luke: true,
    color: 'white',
    doors: 4,  
    engine: '1.6L'  
}

let details = {  
    country: 'Uzbekistan',  
    factory: 'GM',
    price: 8000,


}

let newCar = Object.assign({}, car, {details})

let keys = Object.keys(newCar)

let values = Object.values(newCar)

let combined = keys.concat(values)

// console.log(newCar)
// console.log(keys)
console.log(values)
// console.log(combined)


let strings = []
let numbers = []
let booleans = []
let objects = []

values.forEach((value) => {
    if (typeof value === 'string') {
        strings.push(value)
    }
    if (typeof value === 'number') {
        numbers.push(value)
    } 
    if (typeof value === 'boolean') {
        booleans.push(value)
    }
    if (typeof value === 'object') {
        objects.push(value)
    } 
})


console.log('Strings:', strings)
console.log('Numbers:', numbers)
console.log('Booleans:', booleans)
console.log('Objects:', objects)
