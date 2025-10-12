const btn = document.getElementById('btn');
console.log(btn);

const ptag = document.getElementById('ptag');
console.log(ptag);

btn.addEventListener('click',()=>{
     ptag.innerText = "Hello Anurag"
},{once : true}) ;