// var quyengopBtn = document.querySelector('.btn-donate button')
// // var hoten = document.querySelector('.control-group .name')
// var donateDisplay = document.querySelector('.donate-box')
// var contentDonate = document.querySelector('.donate-body')
// var closeBtn = document.querySelector('.donate-close')
// var isDisplay = false
// quyengopBtn.onclick = function () {
//     if(!isDisplay){
//         donateDisplay.classList.add('active')
//         contentDonate.innerHTML = `Bạn đã đăng quyên góp thành công !`
//         isDisplay = true;
//     }    
// }
// closeBtn.onclick = function () {
//     isDisplay = false;
//     donateDisplay.classList.remove('active')
// }

////////////////////////
var messengerbtn = document.querySelector('.btn-contact button')
var touchDisplay = document.querySelector('.touch-box')
var contentTouch = document.querySelector('touch-body')
var closeBtntouch = document.querySelector('.touch-close')
var isDisplay = false
messengerbtn.onclick = function () {
    if(!isDisplay){
        touchDisplay.classList.add('active')
        isDisplay = true;
    }    
}

closeBtntouch.onclick = function () {
    isDisplay = false;
    touchDisplay.classList.remove('active')
}

