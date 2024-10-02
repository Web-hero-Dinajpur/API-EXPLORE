const user = { id: 1, name: 'hafiz', address: 'bangladesh' };
const stringify = JSON.stringify(user);
console.log(user);
console.log(stringify);

const shop = {
    name: 'Alia',
    address: {
        village: 'dhormo pur',
        country: 'Bangladesh',
        father: 'Jamal uddin',
        mother: 'Kalima begum',
        Phone: '28037802163'
    },
    cart: ['2kg', '5kg','10kg',],
    total:2000
}
const Stringify = JSON.stringify(shop);
console.log(Stringify)
console.log(shop)
