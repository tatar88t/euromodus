function showMenu () {
    let trigger = document.querySelector('#burger'),
        close = document.querySelector('.close-menu'),
        menu = document.querySelector('.menu');

    trigger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        trigger.classList.toggle('burger_active');
    })
    close.addEventListener('click', () => {
        menu.classList.remove('menu_active');
        trigger.classList.remove('burger_active')
    })
    window.addEventListener('resize', () => {
        menu.classList.remove('menu_active');
        trigger.classList.remove('burger_active')
    })
    // window.addEventListener('scroll', () => {
    //     menu.classList.remove('menu_active');
    //     trigger.classList.remove('burger_active')
    // })
};
export default showMenu;
