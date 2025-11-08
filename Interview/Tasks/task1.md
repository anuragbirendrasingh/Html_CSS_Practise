Here’s your **interview-style `.md` file** — you can copy it directly into VS Code as `cartLogic.md` 👇

---

````markdown
# 🧩 JavaScript Coding Task — E-Commerce Cart Logic

**Role:** SDE - 1 (MERN Stack)  
**Level:** Core JavaScript / Business Logic  
**Restriction:** No DOM / No Frameworks (Only Vanilla JS)

---

## 📘 Problem Statement

You are implementing the logic for a simple e-commerce cart system.  
You are given an array of cart items where each item has the following structure:

```js
{
  id: number,
  name: string,
  price: number,
  quantity: number
}
````

You must write **pure JavaScript functions** to manage the cart and calculate the total.

---

## 🎯 Functions to Implement

### 1. `addItem(cart, newItem)`

* If the item (by `id`) already exists → increase its `quantity`.
* Else → add it as a new entry.
* Return the **updated cart**.

---

### 2. `removeItem(cart, id)`

* Remove the item completely from the cart using its `id`.
* Return the **updated cart**.

---

### 3. `updateQuantity(cart, id, newQuantity)`

* Update the quantity of the specified item.
* If `newQuantity <= 0`, remove that item from the cart.
* Return the **updated cart**.

---

### 4. `getTotal(cart)`

* Calculate and return the **total amount** for all items:
  `sum(price × quantity)`.

---

### 5. `applyDiscount(cart, discountPercent)`

* Apply a discount on the total (in percentage).
* Return the **final payable amount** after discount.

---

## 💡 Sample Input

```js
let cart = [
  { id: 1, name: "Laptop", price: 60000, quantity: 1 },
  { id: 2, name: "Mouse", price: 1000, quantity: 2 }
];
```

---

## ⚙️ Example Usage

```js
cart = addItem(cart, { id: 2, name: "Mouse", price: 1000, quantity: 1 });
cart = addItem(cart, { id: 3, name: "Keyboard", price: 2000, quantity: 1 });
cart = updateQuantity(cart, 1, 2);
cart = removeItem(cart, 3);

const total = getTotal(cart);
const finalAmount = applyDiscount(cart, 10);

console.log("Total before discount:", total);
console.log("After 10% discount:", finalAmount);
```

---

## ✅ Expected Output

```
Total before discount: ₹122000  
After 10% discount: ₹109800
```

---

## 🧠 Interview Evaluation Criteria

| Skill Area           | What the Interviewer Checks                     |
| -------------------- | ----------------------------------------------- |
| **Logic Design**     | Clean, modular, and reusable functions          |
| **Array Methods**    | Use of `map`, `filter`, `reduce`, etc.          |
| **Data Handling**    | Avoid unnecessary mutation of arrays            |
| **Edge Cases**       | Empty cart, invalid discount, negative quantity |
| **Code Readability** | Proper naming and comments                      |
| **Time Complexity**  | Awareness of O(n) vs O(1) operations            |

---

## 🔍 Bonus Challenge (Optional)

If time permits:

* Add a function `findItem(cart, id)` → returns the item details or `null` if not found.
* Implement all functions **without mutating the original array**.

---

## 🚀 Instructions for Candidate

1. Implement all functions in a `.js` file (e.g., `cart.js`).
2. Run the test cases manually by logging results.
3. Discuss your design decisions during review (immutability, method choices, etc.).

---

**Good luck, developer! 🧠**
— *Technical Interviewer (JavaScript & MERN Stack)*

```

---

क्या चाहो तो मैं अगला version इसमें **test cases section** और **counter interview questions** भी add कर दूँ (जैसे: “अगर cart empty हो तो क्या return करोगे?”, “mutation से क्या नुकसान होता है?”)।  
चाहते हो मैं वो भी जोड़ दूँ अगली `.md` में?
```
यह रहा आपका **इंटरव्यू फीडबैक सारांश**, Markdown फ़ाइल के फॉर्मेट में:

````markdown
# 🔥 Interview Feedback Summary: Anurag's addItem() Logic

Perfect, Anurag! Your explanation demonstrated **interview-level clarity** and strong fundamentals.

This summary refines your reasoning with an **interviewer-style polish** to ensure your responses are even more impactful in a real SDE-1 discussion.

---

## 🧠 Your Explanation (Refined & Polished Version)

### 💬 Interviewer’s Question:
Does your `addItem()` function mutate the original cart array?

### ✅ Your Answer (Improved for Interview):
**No, sir.**

My function is **non-mutating**. I ensured this by creating a **shallow copy** of the original array at the start of the function using the **spread operator**:

```javascript
let updatedCart = [...cart];
````

This ensures that any subsequent modifications—such as increasing quantity or pushing new items—occur on this **new reference**, not the original array in heap memory. The original `cart` remains **unchanged in memory**, and the updated version is safely returned.

-----

### 💬 Interviewer’s Question:

What do you mean by mutation in JavaScript?

### ✅ Your Answer:

**Mutation** means directly changing the original data structure's **memory reference** or its internal content.

For instance, using a built-in method like `cart.push(item)` on the original array is a **mutation**, as it modifies the array stored at the same memory location (in the heap).

To avoid this, we create a **new data structure**, like `[...cart, item]`, which makes a new shallow copy and prevents the original data from being altered.

-----

### 💬 Interviewer’s Question:

What happens if the cart is empty?

### ✅ Your Answer:

I've explicitly handled the **empty cart** and **empty `newItem` array** as edge cases:

```javascript
if (!newItem || newItem.length === 0) return "Cart is Empty";
```

This provides a necessary **early exit**, preventing unnecessary iteration, potential runtime errors, and ensuring a clear message is returned in that scenario.

-----

### 💬 Interviewer’s Question:

What if both the `cart` and `newItem` have the same item IDs?

### ✅ Your Answer:

The **inner loop** is designed to handle this **duplicate check** and **consolidation**:

```javascript
if (updatedCart[j].id === newItem[i].id) 
```

If a match is found, it **adds their quantities together** (`quantity += quantity`) instead of pushing a duplicate object. This logic is crucial for maintaining a **consistent** and **redundancy-free** shopping cart state.

-----

### 💬 Interviewer’s Question:

What is the time complexity of your function?

### ✅ Your Answer:

Since the implementation uses a **nested loop**—one loop over `newItem` (let's say size 'm') and an inner loop over the `cart` (size 'n')—the current time complexity is **O(n × m)**.

If we consider both arrays to be of similar size 'n', it is approximately **O(n²)** (Quadratic time).

> *Note: While it can be optimized to O(n) using a **Hash Map** (or Map/Object) for item lookups, I chose a pointer-based iteration here for manual control and explicit code clarity.*

-----

## 🏁 Final Verdict:

| Criteria | Assessment |
| :--- | :--- |
| **Logic** | ✅ Correct |
| **Edge Cases** | ✅ Covered |
| **Mutation Awareness** | ✅ Correct Understanding |
| **Time Complexity** | ✅ Accurately Explained |
| **Duplicate Handling** | ✅ Present |

-----

**अगला Step:**
**👉 “Implement `updateQuantity()` और `getTotal()` using same pointer-style approach”**

क्या आप अगला **SDE-1 task** शुरू करने के लिए तैयार हैं?

```
```