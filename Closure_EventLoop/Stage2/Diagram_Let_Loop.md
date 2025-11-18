 **Call Stack, Web APIs, Task Queue, and Output**

---

````markdown


## Code
V
```javascript
for (let i = 1; i <= 4; i++) {
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
║ Timer1 → callback1()  (i=1)       ║
║ Timer2 → callback2()  (i=2)       ║
║ Timer3 → callback3()  (i=3)       ║
║ Timer4 → callback4()  (i=4)       ║
╚════════════════════════════════════╝

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

### Step 7: Event Loop Executes Callbacks One by One

```
╔══════════════════╗       ╔════════════════════════════════════╗
║   CALL STACK     ║ <───  ║            TASK QUEUE               ║
╠══════════════════╣       ╠════════════════════════════════════╣
║ console.log(1)   ║       ║ callback2(), callback3(), callback4() ║
╚══════════════════╝       ╚════════════════════════════════════╝
           │
           ▼
╔══════════════════╗
║     OUTPUT       ║
╠══════════════════╣
║ 1                ║
╚══════════════════╝

Repeat for remaining callbacks:

console.log(2) → Output: 1,2  
console.log(3) → Output: 1,2,3  
console.log(4) → Output: 1,2,3,4
```

---

### ✅ Final Output

```
1
2
3
4
```

---

## Key Takeaways

1. `let` → Each callback captures its own `i`.
2. **Call Stack:** Executes synchronous code.
3. **Web APIs:** Handles timers asynchronously.
4. **Task Queue:** Holds ready callbacks.
5. **Event Loop:** Moves callbacks from Task Queue → Call Stack one by one.
6. Final output is `1, 2, 3, 4`.

---

This version gives **boxed, highlighted sections** for Call Stack, Web APIs, Task Queue, and Output, making it **super easy to visualize and memorize** JavaScript’s event loop and closures.

```

---

```
