// const div = document.createElement('div');
// div.innerHTML("id = ")
// div.innerText('div')


const div = document.getElementById('root');
const btn = document.getElementById('btn');


btn.addEventListener('click',()=>{
    const li = document.createElement('li');
li.innerText = 'Krishna';
    div.appendChild(li);
})


