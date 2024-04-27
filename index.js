let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let arr = []
let arr_rev = []


for (let i = 0; i < alphabet.length; i++) {
    arr.push({
        idx: i + 1,  
        letter: alphabet[i]  
    })
}

console.log(arr)


let alphabet_rev = alphabet.split("")


for (let i = alphabet_rev.length - 1; i >= 0; i--) {
    arr_rev.push({
        idx: alphabet_rev.length - i, 
        letter: alphabet_rev[i] 
    })
}

console.log(arr_rev)
