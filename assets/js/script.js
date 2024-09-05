document.addEventListener("DOMContentLoaded", function () {
    function checkScreenWidth() {
        if (window.innerWidth < 1024) {
            let menulist = document.getElementById('menu-list');
            menulist.style.height = '0px'; 
            menulist.style.padding = '0px'; 
            let togglebtn = document.getElementById('togglemenu');
            let menuIsOpen = false;

            function togglemenu(){
                if(menuIsOpen == false){
                    menulist.style.padding = '1.2rem 0';
                    menulist.style.height = '14.5rem';
                    menuIsOpen = true;
                }else{
                    menulist.style.height = '0px';
                    menulist.style.padding = '0px';
                    menuIsOpen = false;
                }
                // console.log(menuIsOpen);
            }

            togglebtn.addEventListener('click', togglemenu);
        }
    }    
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});
