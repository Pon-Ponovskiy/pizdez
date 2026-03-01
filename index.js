document.addEventListener('DOMContentLoaded', function(){
    let search = document.querySelector('.header__search')// сама кнопка
    let textField = document.querySelector('.header__text-field')//ввод текста
    
    search.addEventListener('click', ()=>{
        textField.classList.toggle('active')
    })

    let header = document.querySelector('.header')
    let widthScreen = document.documentElement.clientWidth 
    let headerHeight = header.clientHeight

    if(widthScreen > 1024){
        window.onscroll = changeHeader
        let lastScroll = 0
        function changeHeader(){
            const scrollTop = document.documentElement.scrollTop
            if(lastScroll > scrollTop){
                header.style.top = `0px`
            }
            else{
                if(window.pageYOffset > 200){
                    header.style.top = `-${headerHeight}px`
                }
            }
            lastScroll = scrollTop;
        }
    }

    let headerBurger = document.querySelector('.header__burger')
    let headerLogo = document.querySelector('.header__top').querySelector('.header__logo')
    let headerMobile = document.querySelector('.header__mobile')
    let headerCross = document.querySelector('.header__mobile-cross')


    function openBurgerMenu(){
        headerLogo.classList.add('active')
        headerMobile.classList.toggle('active')
        headerCross.classList.toggle('active')
        document.addEventListener('click', (e)=>{
            const withinBoundaries = e.composedPath().includes(headerMobile);
            const withinButton = e.composedPath().includes(headerBurger);
            if ( ! withinBoundaries && ! withinButton){
                closeBurgerMenu()
	    }
        })
    }

    function closeBurgerMenu(){
        headerLogo.classList.remove('active')
        headerMobile.classList.remove('active')
        headerCross.classList.remove('active')
    }
    headerBurger.addEventListener('click', openBurgerMenu)
    headerCross.addEventListener('click', closeBurgerMenu)
})  