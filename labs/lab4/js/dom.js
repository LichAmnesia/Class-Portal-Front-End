/*
 * @Author: Shen Huang
 * @Date:   2017-09-17 21:28:53
 * @Last Modified time: 2017-10-21 23:52:53
 * Refer Google Map API document.
 */




function initMap(){
    //shorthand get method that loads JSON data from the server using a GET request and calls the success function
    $.getJSON("data/mapdata.json", successfn)
}

function successfn(result){
    //result will be a parsed JavaScript object
    console.log(result);
    var uluru = result[0];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

}
