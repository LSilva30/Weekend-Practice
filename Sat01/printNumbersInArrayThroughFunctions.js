// Print all the numbers in the Array 1-10 through a function

function goThrough(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
goThrough(numbers)