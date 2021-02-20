$('#navLinks button').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

const navSlide = () => {
    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.side-navbar')
    const navLinks = document.querySelectorAll('.side-navbar .nav-tabs li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
    })

}

navSlide()