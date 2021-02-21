$('#navLinks button').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

const navSlide = () => {
    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.side-navbar')
    const navLinks = document.querySelectorAll('.side-navbar .nav-tabs li')
    const backgroundEls = document.querySelector('.tab-content')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        if (burger.classList.contains('burger-animation')) {
            
            burger.classList.remove('burger-animation')
            void burger.offsetWidth;
        }
        burger.classList.add('burger-animation')
        // burger.classList.add('burger-animation')
        // burger.style.animation = `bugerAnimateOpen 0.5s ease`

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })

        // Burger animation
        burger.classList.toggle('toggle-burger')
        backgroundEls.classList.toggle('blur-background')
    })
}

navSlide()