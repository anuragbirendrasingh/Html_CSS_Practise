
---

````markdown
# JavaScript Event Loop + Closures: Dry Run of `setTimeout` in a `for` Loop (`var` version)

## Code Example

```javascript
for (var i = 1; i <= 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
````

---

## Key Concepts

1. **`var` in `for` loop**

   * Function-scoped, **not block-scoped**.
   * All callbacks share the **same `i`** variable.
   * After the loop ends, `i = 5`, so all callbacks will log `5`.

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
| main()     | Timer1 → callback `() => console.log(i)` | empty      | empty  |

---

### Step 2: Iteration 2 (`i = 2`)

| Call Stack | Web APIs                               | Task Queue | Output |
| ---------- | -------------------------------------- | ---------- | ------ |
| main()     | Timer1 → callback1, Timer2 → callback2 | empty      | empty  |

---

### Step 3: Iteration 3 (`i = 3`)

| Call Stack | Web APIs                                                   | Task Queue | Output |
| ---------- | ---------------------------------------------------------- | ---------- | ------ |
| main()     | Timer1 → callback1, Timer2 → callback2, Timer3 → callback3 | empty      | empty  |

---

### Step 4: Iteration 4 (`i = 4`)

| Call Stack | Web APIs                                                                       | Task Queue | Output |
| ---------- | ------------------------------------------------------------------------------ | ---------- | ------ |
| main()     | Timer1 → callback1, Timer2 → callback2, Timer3 → callback3, Timer4 → callback4 | empty      | empty  |

---

### Step 5: Loop ends

* Call Stack empties (`main()` done).
* All callbacks share the **same `i` = 5** now.

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
| console.log(i) | callback2, callback3, callback4 | 5      |

**Callback 2 executes:**

| Call Stack     | Task Queue           | Output |
| -------------- | -------------------- | ------ |
| console.log(i) | callback3, callback4 | 5,5    |

**Callback 3 executes:**

| Call Stack     | Task Queue | Output |
| -------------- | ---------- | ------ |
| console.log(i) | callback4  | 5,5,5  |

**Callback 4 executes:**

| Call Stack     | Task Queue | Output  |
| -------------- | ---------- | ------- |
| console.log(i) | empty      | 5,5,5,5 |

---

## ✅ Final Output

```
5
5
5
5
```

---

## Summary

* **Call Stack:** Runs synchronous code (the loop).
* **Web APIs:** Holds timers until they expire.
* **Task Queue:** Holds callbacks ready to execute.
* **Event Loop:** Moves callbacks from Task Queue → Call Stack **one by one**.
* **`var` in loop:** All callbacks share the same `i`, so they all log **5** after the loop ends.

---

**Notes:**

* This contrasts with `let`, where each callback captures its own block-scoped `i`.
* Demonstrates the **difference between function-scoped `var` and block-scoped `let` in asynchronous closures**.

```

---

```
