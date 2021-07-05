// Create a function to determine how much milk you can buy at the store

function getMilk(a, b) {
    return a / b
}

const moneyInWallet = 10
const priceOfMilk = 5

console.log('I currently have $' + moneyInWallet)
console.log('Milk costs $' + priceOfMilk)
console.log('So I can buy ' + getMilk(moneyInWallet, priceOfMilk) + ' bottles of milk')
