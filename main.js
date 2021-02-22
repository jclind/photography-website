$('#navLinks button').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})


const navSlide = () => {
    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.side-navbar')
    const navLinks = document.querySelectorAll('.side-navbar .nav-tabs li')
    const backgroundEls = document.querySelector('.tab-content')
    
    // Control toggling the nav bar on called events.
    const toggleNav = () => {
        if ($(window).width() <= 768) {
            nav.classList.toggle('nav-active')
    
            if (burger.classList.contains('burger-animation')) {
                
                burger.classList.remove('burger-animation')
                // Reset animations so that the burger can transition again. 
                void burger.offsetWidth;
            }
            burger.classList.add('burger-animation')
    
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
        }
    }
    
    // Toggle nav on burger click
    burger.addEventListener('click', () => {
        toggleNav();
    })

    // Close nav when clicking outside the navbar 
    backgroundEls.addEventListener('click', function() {
        // If the background is blurred (AKA the side modal is active) clicking on elements outside the nav will close the nav bar.
        if (this.classList.contains('blur-background')) {
            toggleNav();
        }
    })

    // Close nav when clicking inside nav links
    navLinks.forEach(item => item.addEventListener('click', function() {
        toggleNav()
    }))
}

navSlide()


const changeHomeImages = () => {
    const homeImages = document.getElementById('home')
    if ($(window).width() <= 768) {
        homeImages.innerHTML = `
            <div class="mobile-home position-relative">
                <img src="photos/niagra-boat.jpg" alt="Niagra Falls Boat" class="mobile-home-img img-fluid">
                <div class="mobile-home-text">
                    <div style="font-size: 60px; font-weight: bold;">Jesse Lind</div>
                    <div style="font-size: 40px; font-weight: bold;">Photography</div>
                </div>
            </div>
        `
    }
}
changeHomeImages()
