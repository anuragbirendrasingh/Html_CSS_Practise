
---

````markdown
# JavaScript Event Loop + Closures: Dry Run of `setTimeout` in a `for` Loop

## Code Example

```javascript
for (let i = 1; i <= 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
````

---

## Key Concepts

1. **`let` in `for` loop**

   * Creates a new block-scoped `i` for each iteration.
   * Each callback **closes over its own `i`**.

2. **`setTimeout`**

   * Asynchronous function.
   * Callback goes to **Web APIs** first, then **Task Queue** after the specified delay.

3. **Event Loop**

   * Moves callbacks from **Task Queue → Call Stack** when the stack is empty.

---

## Step-by-Step Execution

### Step 0: Initial State

| Call Stack | Web APIs | Task Queue | Output |
| ---------- | -------- | ---------- | ------ |
| main()     | empty    | empty      | empty  |

---

### Step 1: Iteration 1 (`i = 1`)

* `setTimeout` registers a callback for 1000ms.
* Returns immediately.

| Call Stack | Web APIs                                 | Task Queue | Output |
| ---------- | ---------------------------------------- | ---------- | ------ |
| main()     | Timer1 → callback `() => console.log(1)` | empty      | empty  |

---

### Step 2: Iteration 2 (`i = 2`)

| Call Stack | Web APIs                                       | Task Queue | Output |
| ---------- | ---------------------------------------------- | ---------- | ------ |
| main()     | Timer1 → callback1, Timer2 → callback2 (`i=2`) | empty      | empty  |

---

### Step 3: Iteration 3 (`i = 3`)

| Call Stack | Web APIs                                                           | Task Queue | Output |
| ---------- | ------------------------------------------------------------------ | ---------- | ------ |
| main()     | Timer1 → callback1, Timer2 → callback2, Timer3 → callback3 (`i=3`) | empty      | empty  |

---

### Step 4: Iteration 4 (`i = 4`)

| Call Stack | Web APIs                                                                               | Task Queue | Output |
| ---------- | -------------------------------------------------------------------------------------- | ---------- | ------ |
| main()     | Timer1 → callback1, Timer2 → callback2, Timer3 → callback3, Timer4 → callback4 (`i=4`) | empty      | empty  |

---

### Step 5: Loop ends

* Call Stack empties (`main()` done).
* Timers still counting down in **Web APIs**.

| Call Stack | Web APIs                                                                       | Task Queue | Output |
| ---------- | ------------------------------------------------------------------------------ | ---------- | ------ |
| empty      | Timer1 → callback1, Timer2 → callback2, Timer3 → callback3, Timer4 → callback4 | empty      | empty  |

---

### Step 6: 1000ms elapsed → Callbacks enter Task Queue

| Call Stack | Web APIs | Task Queue                                 | Output |
| ---------- | -------- | ------------------------------------------ | ------ |
| empty      | empty    | callback1, callback2, callback3, callback4 | empty  |

---

### Step 7: Event Loop executes callbacks one by one

**Callback 1 executes:**

| Call Stack     | Task Queue                      | Output |
| -------------- | ------------------------------- | ------ |
| console.log(1) | callback2, callback3, callback4 | 1      |

**Callback 2 executes:**

| Call Stack     | Task Queue           | Output |
| -------------- | -------------------- | ------ |
| console.log(2) | callback3, callback4 | 1,2    |

**Callback 3 executes:**

| Call Stack     | Task Queue | Output |
| -------------- | ---------- | ------ |
| console.log(3) | callback4  | 1,2,3  |

**Callback 4 executes:**

| Call Stack     | Task Queue | Output  |
| -------------- | ---------- | ------- |
| console.log(4) | empty      | 1,2,3,4 |

---

## ✅ Final Output

```
1
2
3
4
```

---

## Summary

* **Call Stack:** Runs synchronous code (the loop).
* **Web APIs:** Holds timers until they expire.
* **Task Queue:** Holds callbacks ready to execute.
* **Event Loop:** Moves callbacks from Task Queue → Call Stack **one by one**.
* **`let` in loop:** Each iteration gets its own `i`, so callbacks log **1, 2, 3, 4** individually.

---

**Notes:**

* Using `var` instead of `let` would result in all callbacks logging `5` (after the loop ends), because `var` is function-scoped.
* This example is a perfect illustration of **closures + event loop in JavaScript**.

```

---

```
