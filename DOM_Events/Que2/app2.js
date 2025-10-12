
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const li = document.createElement('li');

li.innerText = 'Item 4 '


btn.addEventListener('click',()=>{
     list.append(li)
});

list.addEventListener('click',(e)=>{
    alert(e.target.innerText)
});