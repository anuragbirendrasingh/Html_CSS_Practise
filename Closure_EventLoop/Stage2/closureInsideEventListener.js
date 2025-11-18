

const btn = document.getElementById("btn");
const hTag = document.createElement('h4');
let  click = 0 ;

document.body.appendChild(hTag) ;
btn.addEventListener('click',function(){
      click++;
      hTag.innerText = `click count :  ${click}`;

})

// const hTag = document.createElement('h4');
// hTag.innerText = click;
