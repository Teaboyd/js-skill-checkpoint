// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderPrice) {
  // เริ่มเขียนโค้ดที่นี
  return orderPrice >= 4000 ?"Shipping is Free." : orderPrice >= 2000 ?"Shipping cost is 250 Baht":"Shipping cost is 500 Baht";
}

  /*if (orderPrice >= 4000){
    return "Shipping is Free."
  }else if(orderPrice  >= 2000){
    return "Shipping cost is 250 Baht"
  }else{
    return "Shipping cost is 500 Baht"
  }
} */

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
