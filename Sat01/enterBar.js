// Create a function that tells us whether the person is of legal age to enter the bar or not

function enterBar(a) {
    if (a >= 21) {
        return "You're good to come in!"
    } else {
        return "Sorry, you're not allowed in!"
    }
}

const age = 20
console.log(enterBar(age))