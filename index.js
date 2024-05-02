let fib = [0, 1]

let ask = prompt('number?')

function fibonacci(a) {
    for(let i = 2; i<a; i++) {
        fib[i]=fib[i-1]+fib[i-2]
    }
}

fibonacci(ask)
console.log(
    fib
)


let arr = [9, 1, 9, 4, 7, 9, 87, 3, 6]

function sort(arr) {
    let unsorted = true

    while (unsorted === true) {
        unsorted = false

        for (let i = 0; i < arr.length; i++) {
            
            let save = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = save

            unsorted = true
            
        }
    }
    
    return arr
}

console.log(sort(arr))
