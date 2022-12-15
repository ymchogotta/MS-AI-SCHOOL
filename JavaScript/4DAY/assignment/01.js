function sum(array){
    let sum=0
    for(let i=0; i<array.length; i++){
        sum += numbers[i]
    }
    return sum
}

let numbers = [10, 20, 30]
let result = sum(numbers)
console.log(result)
