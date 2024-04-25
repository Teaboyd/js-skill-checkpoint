// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
console.log(inventory)
inventory.orange = {price:20,quantity:300};
console.log(inventory)

let totalPrice = 0;
for (const pati in inventory){
   const fruits = inventory[pati];
   totalPrice += fruits.price * fruits.quantity;
}

console.log(`Total inventory value: ${totalPrice} baht`);

