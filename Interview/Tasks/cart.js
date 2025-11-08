// my approach without using find method 

let cart = [
  { id: 1, name: "Laptop", price: 60000, quantity: 1 },
  { id: 2, name: "Mouse", price: 1000, quantity: 2 },
];

let newItem = [
  { id: 100, name: "mmm", price: 55, quantity: 5 },
  { id: 101, name: "hhh", price: 66, quantity: 6 },
  { id: 2, name: "Mouse", price: 1000, quantity: 3 },
];

// addItem()
// function addItem(cart, newItem) {
//   //  Edge case: empty newItem
//   if (!newItem || newItem.length === 0) {
//     return "Cart is Empty";
//   }

//   //  Make sure we don't mutate original array directly
//   let updatedCart = [...cart];

//   //  Pointer variables 
//   let cartPointer = 0;
//   let newItemPointer = 0;

//   //  Loop through newItem array
//   for (let i = 0; i < newItem.length; i++) {
//     let found = false;

//     // Compare current newItem with all cart items
//     for (let j = 0; j < updatedCart.length; j++) {
//       if (updatedCart[j].id === newItem[i].id) {
//         // If same id found → increase quantity
//         updatedCart[j].quantity += newItem[i].quantity;
//         found = true;
//         break;
//       }
//     }

//     // If not found → push as new entry
//     if (!found) {
//       updatedCart.push(newItem[i]);
//     }

//     cartPointer++;
//     newItemPointer++;
//   }

//   return updatedCart;
// }








// using find method
function addItem(cart, newItems) {
  // Ensure newItems is always an array
  if (!Array.isArray(newItems)) {
    newItems = [newItems];
  }

  // Make a shallow copy (avoid mutation if needed)
  let updatedCart = [...cart];

  for (let newItem of newItems) {
    const existing = updatedCart.find(item => item.id === newItem.id);
    if (existing) {
      existing.quantity += newItem.quantity; // increase quantity
    } else {
      updatedCart.push(newItem); // add as new
    }
  }

  return updatedCart;
}



function removeItem(cart, id) {
  
  let updatedCart = cart.filter((item) => item.id !== id);
  return updatedCart;
}

// ✅ Testing
cart = addItem(cart, newItem);
console.log("After Adding Items:", cart);

cart = removeItem(cart, 100);
console.log("After Removing ID 100:", cart);



