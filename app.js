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

navSlide();