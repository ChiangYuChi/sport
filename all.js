function initMap() {
    var myLatlng = new google.maps.LatLng(25.168927, 121.4419034);
    var mapOptions = {
        zoom: 15,
        center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
}


$(document).ready(function () {

    $(".responsive-menu").click(function () {
        $("ul").toggleClass("show", 400, "easeOutSine");
    });



});