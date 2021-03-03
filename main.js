

// [{src: ..., tag}]
let allPhotos = [{src: "https://tookapic.ams3.digitaloceanspaces.com/photos/2016/115/5/a/5a8bfc724ee22fb2a3bdfa5a028235f6.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FCTSGY53G7RK6CW6I4PK%2F20210226%2Fams3%2Fs3%2Faws4_request&X-Amz-Date=20210226T174805Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=6ef46d19c2c640f9ea828af6f927cbc97ef5690a4f4acdb3b3d541264be2373d"}]














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


const changeHomeImages = () => {
    const homeImages = document.getElementById('home')
    if ($(window).width() <= 768) {
        homeImages.innerHTML = `
            <div class="mobile-header-logo text-center mt-1 d-none">
                    <div style="font-size: 25px">光</div>
                    <div style="font-size: 15px;">Jesse Lind</div>
            </div>
            <div class="mobile-home position-relative">
                <img src="photos/home-images/4.jpg" alt="Niagra Falls Boat" class="mobile-home-img img-fluid">
                <div class="mobile-home-text">
                    <div style="font-size: 60px; font-weight: bold;">Jesse Lind</div>
                    <div style="font-size: 40px; font-weight: bold;">Photography</div>
                </div>
            </div>
        `
    } else {
        homeImages.innerHTML = `
            <div class="home-title text-center my-sm-5 my-xxl-4">
                <span style="font-size: 40px; font-weight: 500;">Jesse Lind</span><br>
                <span class="text-muted sh" style="font-size: 25px; font-weight: 500;">Photography</span>
            </div>
            <div class="carousel-container m-auto col-sm-12 col-md-10 col-xxl-7">
                <div id="home-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="photos/home-images/1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="photos/home-images/2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="photos/home-images/3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

const collectionFunctions = () => {

    const collectionsPage = document.getElementById('collections-body')
    
    const collectionsPhotoGrid = () => {
        let elements = document.getElementsByClassName("column")
        const one = () => {
            console.log(elements)
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.flex = "100%"
            }
        }
        const two = () => {
            console.log(elements)
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.flex = "50%"
            }
        }
        const changeFlex = () => {
            if ($(window).width() > 1200 && elements[0].style.flex != "50%") {
                two()
            } else if (elements[0].style.flex != "100%") {
                one()
            }
        }

        $(window).ready(() => {
            changeFlex();
        })
        $(window).on('resize', function() {
            changeFlex();
        })
    }


    function showCollectionsBtnPage() {
        // Show collections buttons html
        
        collectionsPage.innerHTML = `
            <div class="container collections-options mt-1">
                <div class="row justify-content-around">
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="animals">
                            <div class="collections-title">ANIMALS</div>
                            <img alt="" class="img-fluid rounded">
                        </div>
                    </div>
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="places">
                            <div class="collections-title">PLACES</div>
                            <img alt="" class="img-fluid rounded">
                        </div>
                    </div>
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="landscapes">
                            <div class="collections-title">LANDSCAPES</div>
                            <img alt="" class="img-fluid rounded">
                        </div>
                    </div>
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="studio">
                            <div class="collections-title">STUDIO</div>
                            <img alt="" class="img-fluid rounded">
                        </div>
                    </div>
                </div>
            </div>
        `
        // Get collections thumbnail image references for each category
        const collectionsBtnPageRef = firebase.storage().ref('photos/thumbnails/collections')
        const animalsCollectionsBtn = collectionsBtnPageRef.child('animals.jpg')
        const landscapesCollectionsBtn = collectionsBtnPageRef.child('landscapes.jpg')
        const placesCollectionsBtn = collectionsBtnPageRef.child('places.jpg')
        const studioCollectionsBtn = collectionsBtnPageRef.child('studio.jpg')

        // Download and show images in the collecitons tab thumbnails
        animalsCollectionsBtn.getDownloadURL()
        .then((url) => {
            document.querySelector('#animals img').src = url
        })
        landscapesCollectionsBtn.getDownloadURL()
        .then((url) => {
            document.querySelector('#landscapes img').src = url
        })
        placesCollectionsBtn.getDownloadURL()
        .then((url) => {
            document.querySelector('#places img').src = url
        })
        studioCollectionsBtn.getDownloadURL()
        .then((url) => {
            document.querySelector('#studio img').src = url
        })

        // Add click event listeners to all collections buttons
        let collectionBtns = document.querySelectorAll('.collections-selector-content')
        collectionBtns.forEach(function(item) {
            item.addEventListener('click', function(event) {
                const currCollectionId = this.id
                console.log(currCollectionId)
    
                showCollection(currCollectionId)
            })
        })

    }

    function showCollection(subject) {
        const title = subject.toUpperCase();
        collectionsPage.innerHTML = `
            <span id="return-to-collections-btns" class="my-3 text-muted">&#8592;</span>
            <div class="collections-album-title text-center my-3">${title}</div>
            <div class="collections-photo-container">
                <div class="row">
                    <div class="column" id="collections-column-1"> 
                    </div>
                    <div class="column" id="collections-column-2"> 
                    </div>
                </div>
            </div>
        `

        // Initialize reference to photo columns and photo refs.
        const column1 = document.querySelector('#collections-column-1')
        const column2 = document.querySelector('#collections-column-2')
        const storageRef = firebase.storage().ref('photos/collections/' + subject)

        storageRef.listAll().then(function(result) {
            result.items.forEach(function(imageRef, index) {
                imageRef.getDownloadURL()
                .then((url) => {
                    if (index % 2 == 0) {
                        column1.innerHTML += `
                            <img src="${url}" alt="" style="width: 100%;">
                        `
                    } else {
                        column2.innerHTML += `
                            <img src="${url}" alt="" style="width: 100%;">
                        `
                    }
                })
            })
        })

        // Control back to collections page button
        document.getElementById('return-to-collections-btns').addEventListener('click', () => {
            showCollectionsBtnPage()
        })

        collectionsPhotoGrid()
    }


    showCollectionsBtnPage()
}



const main = () => {
    // Control nav active links.
    $('#navLinks button').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    // Call changeHomeImages function on window resize.
    $(window).resize(() => {
        changeHomeImages()
    })

    // Call necessary listening functions. 
    navSlide()
    changeHomeImages()
    collectionFunctions()
}
main()







