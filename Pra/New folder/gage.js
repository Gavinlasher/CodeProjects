let myVar = "Hello"
let firstName = "Gage"

console.log(myVar, firstName);


for (let i = 25; i < 51; i++) {
  if (i/5 == 7)
  console.log(i);
}

let student = {
phones: {
mobile: "208-960-4480",
work: "208-960-4480",
home: "208-960-4480"

}


}
console.log(student.phones.mobile);

if (student.phones.mobile == student.phones.work && student.phones.mobile == student.phones.home) {
  console.log("match")
}

const cart = [
{Item: "Milk", Price: 7, Quantity: 2},
{Item: "Bananna", Price: 3.50, Quantity: 2},
{Item: "Apple", Price: 4, Quantity: 2}
]

let total = 0
for (let i = 0; i < cart.length; i++) {
  const groceries = cart[i];
  console.log(groceries.Item, groceries.Quantity);
  total += groceries.Price * groceries.Quantity
  console.log(total);
}