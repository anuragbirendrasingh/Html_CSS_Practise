const intag = document.getElementById('intag');

const ptag = document.getElementById('ptag');

intag.addEventListener('input',()=>{
    ptag.innerText = intag.value ; 
})