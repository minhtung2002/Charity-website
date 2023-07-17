let selectList = document.querySelectorAll('.lk-custom')

selectList.forEach((item) => {
    item.onclick = function () {
        document.querySelector('.lk-custom.active').classList.remove('active')
        item.classList.add('active')
    }
})