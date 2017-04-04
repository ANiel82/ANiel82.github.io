function getData(input) {
    // Get the data from the wunderground API
    $.ajax({
        url: "./treats.json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var name =
                console.log(name);
            $("#Choco").text(name);
        }
    });



    $(function () {
        $('nav li').css('background-color', 'turquoise');

        $("nav li").hover(function () {
            $(this).css("background-color", "white");
        })

        $("nav li").mouseleave(function () {
            $("nav li").css("background-color", "turquoise");
        });

    });
}