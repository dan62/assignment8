$(document).ready(function () {

    $('#Form1').validate({ // initialize the plugin
        rules: {
             email: {
                required: true,
                email: true
            },
            username: {
                required: true,
                minlength: 5
            },
			password1: {
                required: true,
                minlength: 5
            },
			password2: {
                required: true,
                minlength: 5
            }
        },
        submitHandler: function (form) { 
            alert('valid form submitted'); 
            return false; 
        }
    });

});

$('password2').blur(function() {
if ($('password1').attr('value') !== $('password2').attr('value')) {
alert('Passwords entered do not match');
return false;
} else { return true; }
});