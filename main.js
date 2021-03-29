let allPhotos = [];



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

const photoGrid = () => {
    let elements = document.getElementsByClassName("column")
    const one = () => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.flex = "100%"
        }
    }
    const two = () => {
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


const changeHomeImages = () => {
    const homeImages = document.getElementById('home')
    if ($(window).width() <= 768) {
        homeImages.innerHTML = `
            <div class="mobile-header-logo text-center mt-1 d-none">
                    <div style="font-size: 25px">光</div>
                    <div style="font-size: 15px;">Jesse Lind</div>
            </div>
            <div class="mobile-home position-relative">
                <img src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fmobile-home-images%2F4.jpg?alt=media&token=e8508cbc-b04a-45ae-883d-e8e0d2ddb56b" alt="Niagra Falls Boat" class="mobile-home-img img-fluid">
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fdesktop-home-images%2F1.jpg?alt=media&token=e9472922-8d04-4579-a5e9-c37479332298" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fdesktop-home-images%2F2.jpg?alt=media&token=ec4bd297-7742-4cc1-8161-7047199c2e37" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fdesktop-home-images%2F49dcaa203c71f6de29c8d4fd65450639.jpg?alt=media&token=2e59d267-c3a6-4578-a6b5-a415e4e285ea" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fdesktop-home-images%2F3.jpg?alt=media&token=e38d8f1e-4713-4300-93a8-43762a7462ef" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

const collectionFunctions = () => {

    const collectionsPage = document.getElementById('collections-body')


    function showCollectionsBtnPage() {
        // Show collections buttons html
        collectionsPage.innerHTML = `
            <div class="loader-wrapper">
                <span class="loader">
                    <span class="loader-inner"></span>
                </span>
            </div>
            <div class="container collections-options mt-1 mb-5">
                <div class="row justify-content-around">
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="animals">
                            <div class="collections-title">ANIMALS</div>
                            <img alt="" class="img-fluid rounded" src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fcollections%2Fanimals.jpg?alt=media&token=44a93cc4-3be6-4a4b-9ee0-c044eef0218d">
                        </div>
                    </div>
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="places">
                            <div class="collections-title">PLACES</div>
                            <img alt="" class="img-fluid rounded" src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fcollections%2Fplaces.jpg?alt=media&token=6d31afb2-4fcb-4332-b0e2-ccd66147d155">
                        </div>
                    </div>
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="landscapes">
                            <div class="collections-title">LANDSCAPES</div>
                            <img alt="" class="img-fluid rounded" src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fcollections%2Flandscapes.jpg?alt=media&token=8bf868d5-609d-4ba3-b82b-a47e0d989491">
                        </div>
                    </div>
                    <div class="collections-selector col-lg-6 my-3">
                        <div class="collections-selector-content d-block w-100 position-relative text-center overflow-hidden rounded" id="studio">
                            <div class="collections-title">STUDIO</div>
                            <img alt="" class="img-fluid rounded" src="https://firebasestorage.googleapis.com/v0/b/photography-website-e62a9.appspot.com/o/photos%2Fthumbnails%2Fcollections%2Fstudio.jpg?alt=media&token=66ed9f6b-d5c0-4fd3-85f1-5b0cb11b675f">
                        </div>
                    </div>
                </div>
            </div>
        ` 
        // Remove Loading animation after all collection button images have loaded
        $('#studio img').on("load", function() {
            $(".loader-wrapper").fadeOut("slow")
        }) 

        // Add click event listeners to all collections buttons
        let collectionBtns = document.querySelectorAll('.collections-selector-content')
        collectionBtns.forEach(function(item) {
            item.addEventListener('click', function(event) {
                const currCollectionId = this.id
    
                showCollection(currCollectionId)
            })
        })

    }

    // Show collection album buttons when clicking on nav link
    const collectionsNavBtn = document.getElementById('collections-tab')
    $(collectionsNavBtn).on('click', function() {
        showCollectionsBtnPage()
    })
    

    function showCollection(subject) {
        const title = subject.toUpperCase();
        collectionsPage.innerHTML = `
            <div class="position-relative">
                <div id="return-to-collections-btns" class="my-3 text-muted position-absolute d-flex flex-column">
                    <div class="overflow-hidden" id="return-arrow">&#8592;</div>
                    <div style="font-size: 14px;" id="return-text">collections</div>
                </div>
                <div class="collections-album-title text-center my-3 mx-auto">${title}</div>
            </div>
            <div class="photo-container">
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
            let promises = []
            result.items.forEach(function(imageRef, index) {
                let promise = imageRef.getDownloadURL().then((url) => {
                    if (index % 2 == 0) {
                        column1.innerHTML += `
                            <img src="${url}" alt="" class="collection-image ${subject}-img" style="width: 100%;" id="${subject}-img-${index}" loading="lazy">
                        `
                    } else {
                        column2.innerHTML += `
                            <img src="${url}" alt="" class="collection-image ${subject}-img" style="width: 100%;" id="${subject}-img-${index}" loading="lazy">
                        `
                    }
                })
                promises.push(promise) 
            })
            // Once all photos load then add event listeners to all images for showing the individual image carousel
            Promise.all(promises).then(() => {
                let collectionImages = document.querySelectorAll('.collection-image')
                collectionImages.forEach(function(img) {
                    img.addEventListener('click', function() {
                        const currImgId = img.id
                        showCollectionsImageCarousel(currImgId)
                    })
                })
            })
        })

        // Control back to collections page button
        document.getElementById('return-to-collections-btns').addEventListener('click', () => {
            showCollectionsBtnPage()
        })

        photoGrid()
    }

    function showCollectionsImageCarousel(imgId) {
        // Grab first word of string to find collection from imgId and append '-img' to it
        let currCollecitonClass = imgId.substr(0, imgId.indexOf('-')) + "-img"
        let currCollectionsImgs = document.getElementsByClassName(currCollecitonClass)

        let collectionCarousel = document.querySelector('#collections-carousel-controls .carousel-inner')
        collectionCarousel.innerHTML = ''
        for (let i = 0; i < currCollectionsImgs.length; i++) {
            // Hold the current photo src link to firebase
            let currImgURL = currCollectionsImgs[i].src
            // If the current image matches the id of the image that was clicked, it will be given the active class, therefore seen first
            if(currCollectionsImgs[i].id == imgId) {
                collectionCarousel.innerHTML += `
                    <div class="collections-carousel-item carousel-item active">
                        <img src="${currImgURL}" class="d-block" alt="">
                    </div>
                `
            } else {
                collectionCarousel.innerHTML += `
                    <div class="collections-carousel-item carousel-item">
                        <img src="${currImgURL}" class="d-block" alt="">
                    </div>
                `
            }
        }

        const collectionsCarouselContainer = document.getElementById('collections-carousel-container')
        
        collectionsCarouselContainer.classList.remove('d-none')


        // Listen for exit carousel button click
        $('#exit-collections-carousel-btn').on('click', function() {
            collectionsCarouselContainer.classList.add('d-none')
        })

        // Listen for esc button press when collecitonsCarouselContainer is open
        $(document).keyup(function(e) {
            if (e.key === "Escape" && !collectionsCarouselContainer.classList.contains('d-none')) {
                collectionsCarouselContainer.classList.add('d-none')
            }
        })
        // Listen for arrow key presses when collectionsCarouselContainer is open to switch between photos.
        $(document).keyup(function(e) {
            const prevPhotoBtn = document.getElementById('collections-carousel-prev-icon')
            const nextPhotoBtn = document.getElementById('collections-carousel-next-icon')
            if (e.key === "ArrowLeft" && !collectionsCarouselContainer.classList.contains('d-none')) {
                prevPhotoBtn.click()
                console.log('this should have worked arrow')
            }
            if (e.key === "ArrowRight" && !collectionsCarouselContainer.classList.contains('d-none')) {
                nextPhotoBtn.click()
                console.log('this should have worked arrow')
            }
        })
       
    }

    showCollectionsBtnPage()
}

const allPhotosFunctions = () => {
    const displayAllPhotos = () => {
        const column1 = document.querySelector('#all-photos-column-1')
        const column2 = document.querySelector('#all-photos-column-2')

        // Only append imgs to columns if they don't already exist. Prevents imgs from being appended multiple times
        if (column1.innerHTML.trim().length == 0 && column2.innerHTML.trim().length == 0) {
            let column1Height = 0
            let column2Height = 0
        
            for (let photo in allPhotos) {
                let imgId = `all-photos-img-${photo}`
                // If the first column is shorter than the second column then the first column will get the next image appended to it
                if (column1Height <= column2Height) {
                    column1.innerHTML += `
                    <img src="${allPhotos[photo].url}" alt="" class="all-photos-image" style="width: 100%;" id="${imgId}">
                    `
                    // Add the current img ratio to column1Height so that both columns will have the closest length.
                    column1Height += allPhotos[photo].imgRatio
                } else {
                    column2.innerHTML += `
                    <img src="${allPhotos[photo].url}" alt="" class="all-photos-image" style="width: 100%;" id="${imgId}">
                    `
                    column2Height += allPhotos[photo].imgRatio
                }
                // Add EventListener to each image once they are loaded.
                $('#' + imgId).on("load", function() {
                    document.getElementById(imgId).addEventListener('click', function() {
                        showAllPhotosImageCarousel(allPhotos[photo].url)
                    })
                })
            }
        }

    }

    function showAllPhotosImageCarousel(imgURL) {

        const allPhotosCarouselContainer = document.getElementById('all-photos-carousel-container')
        allPhotosCarouselContainer.classList.remove('d-none')

        
        let allPhotosCarousel = document.querySelector('#all-photos-carousel-controls .carousel-inner')
        
        let tempPhotosHTML = ''
        document.body.style.cursor = 'wait'
        for (let photo in allPhotos) {
            const currPhotoURL = allPhotos[photo].url
            // If the current image matches the id of the image that was clicked, it will be given the active class, therefore seen first
            if(imgURL === currPhotoURL) {
                tempPhotosHTML += `
                    <div class="collections-carousel-item carousel-item active">
                        <img src="${currPhotoURL}" class="d-block" alt="">
                    </div>
                `
            } else {
                tempPhotosHTML += `
                    <div class="collections-carousel-item carousel-item">
                        <img src="${currPhotoURL}" class="d-block" alt="">
                    </div> 
                `
            }
        }
        // Push all image urls to the carousel html
        allPhotosCarousel.innerHTML = tempPhotosHTML
        document.body.style.cursor = 'default'




        // Listen for exit carousel button click
        $('#exit-all-photos-carousel-btn').on('click', function() {
            allPhotosCarouselContainer.classList.add('d-none')
        })

        // Listen for esc button press when allPhotosCarouselContainer is open
        $(document).keyup(function(e) {
            if (e.key === "Escape" && !allPhotosCarouselContainer.classList.contains('d-none')) {
                allPhotosCarouselContainer.classList.add('d-none')
            }
        })
        // Listen for arrow key presses when allPhotosCarouselContainer is open to switch between photos.
        $(document).keyup(function(e) {
            const prevPhotoBtn = document.getElementById('all-photos-carousel-prev-icon')
            const nextPhotoBtn = document.getElementById('all-photos-carousel-next-icon')
            if (e.key === "ArrowLeft" && !allPhotosCarouselContainer.classList.contains('d-none')) {
                prevPhotoBtn.click()
            }
            if (e.key === "ArrowRight" && !allPhotosCarouselContainer.classList.contains('d-none')) {
                nextPhotoBtn.click()
            }
        })
    }

    displayAllPhotos()
    photoGrid()
}


function managePhotoData() {
    let photos = []
    function saveLocalStorage(photos) {
        localStorage.setItem('photos', JSON.stringify(photos));
        allPhotos = photos;
    }

    // Will keep track of recursive funciton to know when to call continue with code.
    let count = 0;
    // let currCollection = null
    function showAllPhotos(reference, callback) {
        // Get the reference to the fb file folder given in function parameter
        const fbPhotosFolder = firebase.storage().ref()
        let fbPhotosFolderRef = fbPhotosFolder.child(reference)
        
        // List all elements in currently referenced folder
        fbPhotosFolderRef.listAll().then((res) => {
            // Grab url when an image is found in any of the folders that are being searched through
            res.items.forEach(itemRef => {
                // Inc conunt when item is found and then dec count later when that item's promise is resolved
                count++
                itemRef.getDownloadURL().then((url) => {

                    let img = new Image()
                    img.onload = function() {
                        // Get the height, width, and proceeding ratio of the current img
                        const currImgHeight = this.height
                        const currImgWidth = this.width
                        const currImgRatio = currImgHeight / currImgWidth

                        // Push collection (folder) name and url to photos array
                        photos.push({collection: itemRef.parent.name, url: url, imgRatio: currImgRatio})
                        count--
                        // Once count === 0, all photo promises will be resolved and we can add the photos to localstorage
                        if(count === 0 && callback) {
                            saveLocalStorage(photos)
                            console.log(photos)
                        }
                    }
                    img.src = url;

                })
            })
            
            // Look through each folder reference and if there is another folder inside, recusively call showAllPhotos until there are no more nested folders
            res.prefixes.forEach(folderRef => {
                showAllPhotos(folderRef.fullPath, callback)
            })
        })
    }


    showAllPhotos('photos/collections', saveLocalStorage)
}


const main = () => {
    if (localStorage.length == 0) {
        managePhotoData()
    } else {
        allPhotos = JSON.parse(localStorage.getItem('photos'))
    }

    // Control nav active links.
    $('#navLinks button').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    // Call changeHomeImages function on window resize.
    $(window).resize(() => {
        changeHomeImages()
    })

    // Prevent default operations for scrolling with arrows and spacebar 
    window.addEventListener("keydown", function(e) {
        if(["Space","ArrowUp","ArrowDown"].indexOf(e.code) > -1) {
            e.preventDefault()
        }
    }, false)

    // Call necessary listening functions. 
    navSlide()
    changeHomeImages()
    collectionFunctions()
    document.getElementById('all-tab').addEventListener('click', allPhotosFunctions)
}

main()




// Remove possible second scroll bar
$('html').css('overflow-x', 'initial');

