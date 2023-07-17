// Carousel
$(document).ready(function () {
    $('.causes-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa-solid fa-arrow-left"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa-solid fa-arrow-right"></i></div>'
    });
    $('.testimonial-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1500
    });
});

// Counter
let parentCounterPositionValue = document.querySelector('.facts').offsetTop - 300
let counterList = document.querySelectorAll('h3[data-toggle="counter-up"]')
let isCountDown = false;
document.onscroll = function () {
    if(window.scrollY > parentCounterPositionValue && !isCountDown) {
        counterList.forEach(item=>{
            countUp(item)
        })
        isCountDown = true
    }
}
function countUp(element) {
    var count = 0;
    var time = 144;
    var to = element.innerText
    var step = to / time;
    var countElement = setInterval(() => {
        count += step;
        if (count > to) {
            element.innerText = to;
            clearInterval(countElement)
        }
        else {
            element.innerText = Math.round(count);
        }
    }, 10);
}


// tab line
let contents =[
    {
        title:'Về chúng tôi',
        content : `CSF Team là nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh bạch. Được phát triển và vận hành bởi CSF Team.
        CSF Team được tin dùng bởi các tổ chức cộng đồng uy tín, như: Quỹ Bảo Trợ Trẻ Em Việt Nam, Quỹ từ thiện Bông Sen, Quỹ xã hội Phan Anh, Operation Smile Vietnam, Quỹ Vì Tầm Vóc Việt, Pan Nature, Mạng Lưới Ung Thư Vú Việt Nam, Trung tâm hợp tác phát triển Tây Bắc, và nhiều tổ chức khác.
        CSF Team được hỗ trợ công nghệ bởi Comartek, FPT Smart Cloud, Viettel Money và VNPay, đảm bảo ứng dụng hoạt động ổn định và phương thức thanh toán đa dạng, an toàn.
        `
    },
    {
        title:'Sứ mệnh',
        content:`Để tạo ra các nguồn lực thông qua các sáng kiến gây quỹ và quan hệ đối tác cộng đồng, đồng thời sử dụng các quỹ đó để tạo ra tác động trong cuộc sống của trẻ em.
        Để thu hút các tình nguyện viên và đối tác đam mê giúp đỡ trẻ em đạt được hy vọng, ước mơ và tiềm năng đầy đủ của chúng.
        Để thay đổi cộng đồng thông qua việc giúp đỡ trẻ em, thanh thiếu niên và gia đình của họ, những người cần được hỗ trợ.
        `
    },
    {
        title:'Tầm nhìn',
        content:`Để thực hiện những điều ước sẽ mang lại hy vọng cho trẻ em và thanh thiếu niên gặp khó khăn trong các cộng đồng trên khắp Việt Nam.`
    }
]

let tabMenuList = document.querySelectorAll('.about-tab-item')
let tabLine = document.querySelector('.tab-line')
let tabContent = document.querySelector('.tab-content')

tabMenuList.forEach((item) => {
    item.onclick = function () {
        document.querySelector('.about-tab-item.active').classList.remove('active')
        item.classList.add('active')
        tabLine.style.width =  item.offsetWidth + 'px'
        tabLine.style.left = item.offsetLeft + 'px'
        contents.forEach((content) =>{
            if(item.innerText === content.title){
                tabContent.innerText = content.content
            }
        })
    }
})


