jQuery(document).ready(function ($) {
    function ajaxFromLocalJson(locationToGrab) {
        $.ajax({
            url: "treats.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var location = data[locationToGrab]['City'];
                var temp_f = data[locationToGrab]['High'];
                var state = data[locationToGrab]['State'];
                console.log("Current temperature in " + location + " is: " + temp_f);

                var cur_location = $('#location');
                var temp = $('#temp');
                var message = $('#message');

                cur_location.text(location + ', ' + state);
                temp.text(temp_f);
                message.text("Current tempuature in " + location + "is " + temp_f);
            }
        });
    }


    $(function () {
        $('nav li').css('background-color', 'turquoise');

        $("nav li").hover(function () {
            $(this).css("background-color", "white");
        })

        $("nav li").mouseleave(function () {
            $("nav li").css("background-color", "turquoise");
        });

    });
});