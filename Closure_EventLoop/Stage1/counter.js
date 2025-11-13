function outer() {
  let count = 0;
  return function inc() {
    count++;
    console.log("inc" + count);

    return function dec() {
      count--;
      console.log("dec" + count);

      return function reset() {
        count = 0;
        console.log("reset" + count);

        return;
      };
    };
  };
}

const incfun = outer();
const decfun = incfun();
const resfun = decfun();
resfun();

// Power: Memory preservation (variable zinda rehta hai)
// Problem: If you nest too deep, usability & readability mar jaati hai

// Isliye production-level code me hum closure ko structured bana dete hain —
// jaise tu bola, object return kar ke ya modular design se.
