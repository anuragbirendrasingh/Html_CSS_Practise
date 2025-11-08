

````markdown


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



-----

```
```