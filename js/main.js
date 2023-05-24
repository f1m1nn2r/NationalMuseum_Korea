window.addEventListener('scroll', function(){
    const section = document.querySelectorAll('.section');
    for(var i=0; i<section.length; i++){
        if(window.scrollY && window.pageYOffset >= section[i].offsetTop - 100){ 
            section[i].classList.add('ani');            
        }
    }

    const banner = document.querySelectorAll('.infinite-banner-box .inner');
    var bannerValue = window.scrollY && window.pageYOffset / document.querySelector('.at-header').scrollHeight;
    for(var i=0; i<banner.length; i++){
        if(window.scrollY && window.pageYOffset >= banner[i].offsetTop){
            if(i % 2 == 0){
                banner[i].style.transform = `translate3d(${bannerValue}vw, 0, 0) translateY(-50%)`;
            }else if(i % 2 == 1){
                banner[i].style.transform = `translate3d(${-bannerValue}vw, 0, 0) translateY(-50%)`;
            }
        }
    }
})

window.addEventListener('wheel', function(e){
    const header = document.querySelector('.at-header');
    if(e.deltaY > 0){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
});
