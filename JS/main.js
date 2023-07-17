const joinBtns = document.querySelectorAll('.js-register-join')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
function showRegister() {
    modal.classList.add('open')
}

function hideRegister() {
    modal.classList.remove('open')
}

for (const joinBtn of joinBtns){
    joinBtn.addEventListener('click',showRegister)
}

modalClose.addEventListener('click', hideRegister)

modal.addEventListener('click', hideRegister)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


