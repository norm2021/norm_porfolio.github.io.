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
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 752) {
        $('#Navigation').addClass('nav-fixed');
      }
      if ($(window).scrollTop() < 752) {
        $('#Navigation').removeClass('nav-fixed');
      }
    });
  });

navSlide();