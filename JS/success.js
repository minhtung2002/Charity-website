const btn = document.querySelector('.bt--success');
const toast = document.querySelector('.toast');
console.log(toast)
const toastClose = document.querySelector('.toast__close');
console.log(toastClose)
function show() {
    toast.classList.add('open')
}

function hide() {
    toast.classList.remove('open')
}

btn.addEventListener('click', show);

toastClose.addEventListener('click', hide)
 
////////////////////////////////////////
// const btn_vlt = document.querySelector('.bt--volunteer');
// const vlt = document.querySelector('.vlt');
// console.log(vlt)
// const vltClose = document.querySelector('.vlt__close');
// console.log(vltClose)
// function show() {
//     vlt.classList.add('openn')
// }

// function hide() {
//     vlt.classList.remove('openn')
// }

// btn_vlt.addEventListener('click', show);

// vltClose.addEventListener('click', hide)