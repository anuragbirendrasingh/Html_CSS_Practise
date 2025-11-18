
Code:

```javascript
for (var i = 1; i <= 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Expected Output:

```
5
5
5
5
```

---

````markdown
# JavaScript Event Loop + Closures: `var` Example Flowchart

## Code

```javascript
for (var i = 1; i <= 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
````

---

## Step-by-Step Flow with Visual Sections

### Step 0: Initial State

```
╔══════════════════╗
║   CALL STACK     ║
╠══════════════════╣
║ main()           ║
╚══════════════════╝

╔══════════════════╗
║    WEB APIS      ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝

╔══════════════════╗
║   TASK QUEUE     ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝

╔══════════════════╗
║     OUTPUT       ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝
```

---

### Step 1-4: Loop Iterations (Register Timers)

```
╔══════════════════╗
║   CALL STACK     ║
╠══════════════════╣
║ main()           ║
║ for i = 1..4     ║
╚══════════════════╝

╔════════════════════════════════════╗
║             WEB APIS               ║
╠════════════════════════════════════╣
║ Timer1 → callback1()               ║
║ Timer2 → callback2()               ║
║ Timer3 → callback3()               ║
║ Timer4 → callback4()               ║
╚════════════════════════════════════╝

╔══════════════════╗
║   TASK QUEUE     ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝
```

> **Important Difference:**
> `var i` is **function-scoped**, so **all callbacks share the same `i`**.
> After the loop finishes, `i = 5`.

---

### Step 5: Loop Ends → Call Stack Clears

```
╔══════════════════╗
║   CALL STACK     ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝

╔════════════════════════════════════╗
║             WEB APIS               ║
╠════════════════════════════════════╣
║ Timer1 → callback1()               ║
║ Timer2 → callback2()               ║
║ Timer3 → callback3()               ║
║ Timer4 → callback4()               ║
╚════════════════════════════════════╝

╔══════════════════╗
║   TASK QUEUE     ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝
```

---

### Step 6: 1000ms Passed → Callbacks Move to Task Queue

```
╔══════════════════╗
║   CALL STACK     ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝

╔══════════════════╗
║    WEB APIS      ║
╠══════════════════╣
║ empty            ║
╚══════════════════╝

╔════════════════════════════════════╗
║            TASK QUEUE              ║
╠════════════════════════════════════╣
║ callback1(), callback2(),          ║
║ callback3(), callback4()           ║
╚════════════════════════════════════╝
```

---

### Step 7: Event Loop Executes Callbacks

```
╔══════════════════╗       ╔════════════════════════════════════╗
║   CALL STACK     ║ <───  ║            TASK QUEUE               ║
╠══════════════════╣       ╠════════════════════════════════════╣
║ console.log(i)   ║       ║ callback2(), callback3(), callback4() ║
╚══════════════════╝       ╚════════════════════════════════════╝
           │
           ▼
╔══════════════════╗
║     OUTPUT       ║
╠══════════════════╣
║ 5                ║
╚══════════════════╝

Repeat for remaining callbacks:

console.log(i) → Output: 5  
console.log(i) → Output: 5  
console.log(i) → Output: 5
```

---

### ✅ Final Output

```
5
5
5
5
```

---

## Key Takeaways

1. `var` → **function-scoped**, all callbacks share the same `i`.
2. After the loop ends, `i = 5`, so **all callbacks print 5**.
3. **Call Stack:** Executes synchronous code (the loop).
4. **Web APIs:** Handles timers asynchronously.
5. **Task Queue:** Holds ready callbacks.
6. **Event Loop:** Moves callbacks from Task Queue → Call Stack.

> This contrasts with `let`, where each callback captures its own `i`.

---

This diagram makes it **easy to compare `var` vs `let`** for closures in asynchronous callbacks.

```

---


```
