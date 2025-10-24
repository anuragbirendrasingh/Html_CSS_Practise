console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');


// start   // bahi ye hai sync task
// end   // sync task
// promise callback // micortsask
//timeout call back  // macrotask
