
// function createCounter(){
//     return function inc(){
//         return 1 ;
//     }
// }
// // createCounter();
// // console.log(inc());


// counter() = createCounter();
// console.log(counter());



function createCounter(){
    let count = 1 ;
    return function inc(){
        return count++ ;
    }
}

 const counter = createCounter();
 counter();
 counter();
 console.log(counter());
 

