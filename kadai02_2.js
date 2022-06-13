{
        const NAVIWRAP = document.querySelector('#navi-wrap');
        const CATENAVY = document.querySelector('#category-navi');
        const NAVITOP = NAVIWRAP.offsetTop;

        window.onscroll =(event) => {
            let posY = document.documentElement.scrollTop;
            CATENAVY.style.top = (posY >= NAVITOP) ? `${posY}px` :0; 
        }
        
}