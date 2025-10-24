Explain what a closure is in JavaScript. Then, write a function
 createCounter that returns another function. Each time the returned function is called, 
 it should increment and return a counter value starting from 1.

Example usage

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// it is the property of the functional scope where the inner function keep the 
remember of the outer function variables or we can say that the outer function 
scope isaccessioble to the inner fuction 



For formal interviews, consider mentioning that closures are formed whenever a function 
is created inside another function and allows the inner function to access the parent’s
variables even after the parent has returned.

You may also want to include a short example of where closures are useful, such as for encapsulating state or creating private variables.