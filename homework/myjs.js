jQuery(document).ready(function ($) {
    function ajaxFromLocalJson(locationToGrab) {
        $.ajax({
            url: "../treats.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var choco = data[locationToGrab]['Chocolate'];
                var cara = data[locationToGrab]['Caramel'];
                var redv = data[locationToGrab]['Red'];
                console.log(choco);

                var choco = $('#Chocolate');
                var cara = $('#Caramel');
                var redv = $('#RedV');

                choco.display(Image)

                //                cur_location.text(location + ', ' + state);
                //                temp.text(temp_f);
                //                message.text("Current tempuature in " + location + "is " + temp_f);
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