function onSubmit(form_obj) {
    var ajax_url = form_obj.attr('action'),
            ajax_data = form_obj.serialize();

    $.ajax({

        type: "GET",

        dataType: "jsonp",

        //jsonp: 'jsoncallback',

        timeout: 5000,

        url: "http://expertcatalogue.herokuapp.com/" + ajax_url,

        data: ajax_data,

        cache: false,

        success: function(data) {
            setAuthToken(data.auth_token, 30);
            window.location = 'index.html';
        },

        error: function(data, status) {
            navigator.notification.alert(

                    'Login Incorrect! Try Again!',

                    null,

                    'Error',

                    'Done'

                    );

        },

        complete:
                function(data) {

                }

        ,

        denied: function(data) {
            alert('denied');
        }

    }
            )
            ;
}