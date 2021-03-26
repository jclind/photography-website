console.log('It works!')

$(document).ready(function () {
    // Fix inputs/textareas from not reading space bar press
    $('#contact-form label input').keyup(function(event) {
        if (event.keyCode == 32) {
            $(this).val($(this).val() + ' ');
        }
    })
    $('#contact-form label textarea').keyup(function(event) {
        if (event.keyCode == 32) {
            $(this).val($(this).val() + ' ');
        }
    })

    // On form 'send button' click
    $('.submit').click(function (event) {
        console.log('Clicked button')
        
        const firstName = $('.first-name').val()
        const lastName = $('.last-name').val()
        const email = $('.email').val()
        const subject = $('.subject').val()
        const message = $('.message').val()
        const statusElm = $('.status')
        // Empty status element one every click
        statusElm.empty()

        // Make all border gray (if some inputs were failed on the last form submit)
        $('#contact-form input').css("border", "1px solid rgb(165, 165, 165)")
        $('#contact-form textarea').css("border", "1px solid rgb(165, 165, 165)")
        
        // Validate first name input
        if (firstName.length < 1) {
            // Change first name input's border color to red
            $('.first-name').val('')
            $('.first-name').css("border", "1px solid red")
            $('.first-name').attr("placeholder", "Please enter first name")
            event.preventDefault()
        } else if (firstName.length > 40) {
            $('.first-name').val('')
            $('.first-name').css("border", "1px solid red")
            $('.first-name').attr("placeholder", "First name too long")
            event.preventDefault()
        }

        // Validate last name input
        if (lastName.length < 1) {
            // Change first name input's border color to red
            $('.last-name').val('')
            $('.last-name').css("border", "1px solid red")
            $('.last-name').attr("placeholder", "Please enter last name")
            event.preventDefault()
        } else if (lastName.length > 40) {
            $('.last-name').val('')
            $('.last-name').css("border", "1px solid red")
            $('.last-name').attr("placeholder", "Last name too long")
            event.preventDefault()
        }

        // Validate email input
        if (email.length <= 5 && !email.includes('@') && !email.includes('.')) {
            $('.email').val('')
            $('.email').css("border", "1px solid red")
            $('.email').attr("placeholder", "Email invalid (Make sure to have '@' and '.')")
            event.preventDefault()
        }
        
        // Validate subject input
        if (subject.length < 2) {
            $('.subject').val('')
            $('.subject').css("border", "1px solid red")
            $('.subject').attr("placeholder", "Please enter a subject greater than 1 character")
            event.preventDefault()
        } else if (subject.length > 100) {
            $('.subject').val('')
            $('.subject').css("border", "1px solid red")
            $('.subject').attr("placeholder", "Please enter a subject less than 100 characters")
            event.preventDefault()
        }

        
        // Validate message input
        if (message.length < 10) {
            $('#contact-form textarea').val('')
            $('#contact-form textarea').css("border", "1px solid red")
            $('#contact-form textarea').attr("placeholder", "Please enter a message greater than 9 characters")
            event.preventDefault()
        }
    }) 
})