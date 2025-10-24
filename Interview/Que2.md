## Explain how the JavaScript event loop works, particularly the roles of the call stack, callback queue (or task queue), and microtask queue.

## my ans 
```
event loop is the property of the comipler where it keeps checking ,
it is always runnuning 
in a loop in differetnt pahses like timer phase there are diffrent 
pahses in the event loop where it checks for the async tasks 
whcih are present in the js file . on depending on the priorty of the
 tasks the event loop execute them and when the 
call stack is in idel state it pusese the async taska from callback queue 
to the call stack .the call stack is for the execution of the different
 task of javascript whether it is the async or sync task . it first execute
  the sync task then the async task . 
call back queue is the waiting area for the task which are keep in quue
 depending in their priority of the exectution . microstask queue is the 
 taks which has higher prioerity than the macro tasks which wait in queue to
  exxecutue jab tak ki microtsak na execute hojaynge eg promises come in microstasks and setimmediate in macrostask.
```




## ans review 

Explanation of the JavaScript Event Loop
Call Stack: This is where JavaScript keeps track of function calls to execute. It handles synchronous tasks first, executing them in the order they are called.

Callback Queue (Macrotask Queue): This holds asynchronous tasks like setTimeout callbacks, which are executed after the synchronous code completes and the call stack is empty.

Microtask Queue: This queue has higher priority than the callback queue and handles microtasks, such as resolved Promises. Microtasks are executed immediately after the current synchronous code, before any macrotasks.

The event loop continuously checks if the call stack is empty. If so, it first executes all tasks in the microtask queue, then proceeds to the callback (macrotask) queue.