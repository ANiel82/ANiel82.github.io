jQuery(document).ready(function ($) {
    function ajaxFromLocalJson(locationToGrab) {
        $.ajax({
            url: "../weather.json",
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

    function ajaxFromApi() {
        $.ajax({
            url: "http://api.wunderground.com/api/050c3f5a30b4598c/geolookup/conditions/q/ID/Rexburg.json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var location = data['location']['city'];
                var temp_f = data['current_observation']['temp_f'];
                alert("Current temperature in " + location + " is: " + temp_f);
            }
        });
    }

    ajaxFromLocalJson("Franklin");
    ajaxFromApi();
});