const btn_vlt = document.querySelector('.bt--volunteer');
const vlt = document.querySelector('.vlt');
console.log(vlt)
const vltClose = document.querySelector('.vlt__close');
console.log(vltClose)
function show() {
    vlt.classList.add('openn')
}

function hide() {
    vlt.classList.remove('openn')
}

btn_vlt.addEventListener('click', show);

vltClose.addEventListener('click', hide)