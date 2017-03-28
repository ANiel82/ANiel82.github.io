$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    console.log('click occured');
    var jsonCity = $(this).text();
    console.log(jsonCity);
    $.ajax({
        url: "//api.wunderground.com/api/050c3f5a30b4598c/conditions/q/" + jsonCity + ".json",
        dataType: "json",
        success: function (data) {
            console.log(data);
            console.log(data[jsonCity]);

            $("#city").text(data.current_observation.display_location.full);

            $('#summary').text(data.current_observation.weather);

            $('#temp').text(data.current_observation.temp_f + String.fromCharCode(176) + "f");

            $('#add1').text(data.current_observation.wind_string);
            $('#add2').text(data.current_observation.feelslike_f + String.fromCharCode(176) + "f");
            $('#add3').text(data.current_observation.relative_humidity);


            $("#cover").fadeOut(250);
        }
    });
});
$(function () {
    $('#query').keyup(function () {
        var value = $('#query').val();
        var rExp = new RegExp(value, "i");
        $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
            console.log(data);

            var output = '<ol>';
            $.each(data.RESULTS, function (key, val) {
                if (val.name.search(rExp) != -1) {
                    output += '<li>';
                    output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                    output += '</li>';
                }
            }); // end each
            output += '</ol>';
            $("#searchResults").html(output);

        })
    });

    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});