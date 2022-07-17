// handling the menu items
const menuOpen= document.getElementById('menu-open');
const menuClose= document.getElementById('menu-close');
const sideBar =  document.getElementById('mobile-side-bar');


const showsideBar=()=>{   
    sideBar.classList.remove('d-none');
};
const hidesideBar=()=>{
    sideBar.classList.add('d-none');
};
menuOpen.addEventListener('click',showsideBar);
menuClose.addEventListener('click',hidesideBar);