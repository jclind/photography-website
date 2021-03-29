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
        if (firstName.length < 1 || firstName.length > 40) {
            // Change first name input's border color to red
            $('.first-name').siblings('.input-border').css("border", "1px solid red")

            // Remove red border on focus of current input
            $('.first-name').on('focus', function() {
                $(this).siblings('.input-border').css("border", "1px solid rgb(233, 233, 233)")
            })

            // Change placeholder text based on wrongly inputed value
            $('.first-name').val('')
            if (firstName.length < 1) {
                $('.first-name').attr("placeholder", "Please enter first name")
            } else {
                $('.first-name').attr("placeholder", "First name too long")
            }
            event.preventDefault()
        }

        // Validate last name input
        if (lastName.length < 1 || lastName.length > 40) {
            // Change first name input's border color to red
            $('.last-name').siblings('.input-border').css("border", "1px solid red")

            // Remove red border on focus of current input
            $('.last-name').on('focus', function() {
                $(this).siblings('.input-border').css("border", "1px solid rgb(233, 233, 233)")
            })
            // Change placeholder text based on wrongly inputed value
            $('.last-name').val('')
            if (lastName.length < 1) {
                $('.last-name').attr("placeholder", "Please enter last name")
            } else {
                $('.last-name').attr("placeholder", "Last name too long")
            }
            event.preventDefault()
        }

        // Validate email input
        if (email.length <= 5 && !email.includes('@') && !email.includes('.')) {
            $('.email').siblings('.input-border').css("border", "1px solid red")
            // Remove red border on focus of current input
            $('.email').on('focus', function() {
                $(this).siblings('.input-border').css("border", "1px solid rgb(233, 233, 233)")
            })
            $('.email').val('')
            $('.email').attr("placeholder", "Email invalid (add '@' or '.')")
            event.preventDefault()
        }
        
        // Validate subject input
        if (subject.length < 2 || subject.length > 100) {
            $('.subject').siblings('.input-border').css("border", "1px solid red")
            $('.subject').on('focus', function() {
                $(this).siblings('.input-border').css("border", "1px solid rgb(233, 233, 233)")
            })
            // Change placeholder text based on wrongly inputed value
            $('.subject').val('')
            if (subject.length < 2) {
                $('.subject').attr("placeholder", "Enter more than 1 character")
            } else {
                $('.subject').attr("placeholder", "Enter less than 100 characters")
            }
            event.preventDefault()
        }

        
        // Validate message input
        if (message.length < 10) {
            $('#contact-form textarea').val('')
            $('#contact-form textarea').siblings('.input-border').css("border", "1px solid red")
            $('#contact-form textarea').on('focus', function() {
                $(this).siblings('.input-border').css("border", "1px solid rgb(233, 233, 233)")
            })
            $('#contact-form textarea').attr("placeholder", "Enter a message greater than 9 characters")
            event.preventDefault()
        }
    }) 
})