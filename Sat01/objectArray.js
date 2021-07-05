// Create an object array and then reference the same thing from both items in the object

const person = [{
    firstName: 'Jimmy',
    age: 30,
    homeAddress: '22300 SW 66th Ave',
    city: 'Boca Raton',
    state: 'Florida',
    phoneNumber: '555-309-0000',
    weight: '185lbs',
    gender: 'Male'
}, {
    firstName: 'Carlos',
    age: 28,
    homeAddress: '22300 SW 66th Ave',
    city: 'Boca Raton',
    state: 'Florida',
    phoneNumber: '555-309-0000',
    weight: '200lbs',
    gender: 'Male'
}]
console.log(person[0].firstName , 'and' , person[1].firstName)