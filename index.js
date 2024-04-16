let cars = [
    {
        mode: "malibu 2.",
        mark: "GM",
        color: "white",
        price: 30000,
        engine: 2.4,
        year: 2023
    },
    {
        mode: "Tahoe.",
        mark: "GM",
        color: "black",
        price: 90000,
        engine: 3.5,
        year: 2024
    },
    {
        mode: "Bugatti.",
        mark: "BG",
        color: "blue",
        price: 2000000,
        engine: 5.5,
        year: 2020
    },
    {
        mode: "Matiz.",
        mark: "Daewoo",
        color: "green",
        price: 3000,
        engine: 1.5,
        year: 2015
    },
    {
        mode: "Nexia 2.",
        mark: "GM",
        color: "gray",
        price: 7000,
        engine: 1.6,
        year: 2010
    },
    {
        mode: "Camry.",
        mark: "Toyota",
        color: "white",
        price: 70000,
        engine: 3.5,
        year: 2022
    }
]

let from = prompt('от')
let up = prompt('до')

let exp = cars.sort((a, b) => b.price - a.price)[0]
let cheap = cars.sort((a, b) => a.price - b.price)[0]
let fast = cars.sort((a, b) => b.engine - a.engine)[0]
let old = cars.sort((a, b) => a.year - b.year)[0]

console.log("Expensive:", exp.mode, "Price:", exp.price)
console.log("Cheap:", cheap.mode, "Price:", cheap.price)
console.log("Fast:", fast.mode, "Engine:", fast.engine)
console.log("Old:", old.mode, "Year:", old.year)






