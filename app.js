const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav_list = document.querySelector('.nav-list');
    const nav_list_items = document.querySelectorAll('.nav-list li');

    burger.addEventListener('click', ()=>{
        nav_list.classList.toggle('nav-active');
       
        nav_list_items.forEach((item, index) => {
            if(item.style.animation){
                item.style.animation = '';
            }else{
                item.style.animation = `nav-list-fade 0.5 ease forwards ${index / 2 + 1.5}s`;
            }
        })

        burger.classList.toggle('toggle');
    });
}

$(document).ready(function() {
  
    $(window).scroll(function () {
        //console.log($(window).scrollTop())
        var window_top = $(window).scrollTop();
        var div_top = $('.nav-line').offset().top;

        if(window_top > div_top){
            $('#Navigation').removeClass('nav-relative');
            $('#Navigation').addClass('nav-fixed');
        }else{
            $('#Navigation').removeClass('nav-fixed');
            $('#Navigation').addClass('nav-relative');
        }

        // if($(window).width() < 768){
        //     if ($(window).scrollTop() > 750) {

        //         $('#Navigation').removeClass('nav-relative');
        //         $('#Navigation').addClass('nav-fixed');
        //     }
        //     if ($(window).scrollTop() < 624) {
        //         $('#Navigation').removeClass('nav-fixed');
        //         $('#Navigation').addClass('nav-relative');
        //     }
        // }else{
        //     if ($(window).scrollTop() > 752) {
        //         $('#Navigation').removeClass('nav-relative');
        //         $('#Navigation').addClass('nav-fixed');
        //     }
        //     if ($(window).scrollTop() < 752) {
        //         $('#Navigation').removeClass('nav-fixed');
        //         $('#Navigation').addClass('nav-relative');
        //     }
        // }
      
    });
  });

navSlide();