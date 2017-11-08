/*
 * @Author: Shen Huang
 * @Date:   2017-09-17 21:28:53
 * @Last Modified time: 2017-11-07 15:03:50
 * Refer Google Map API document.
 */


showList();

function initMap() {
    //shorthand get method that loads JSON data from the server using a GET request and calls the success function
    $.getJSON("data/mapdata.json", successfn)
}


function saveToFirebase(city, country) {
    var newPostRef = firebase.database().ref().push();
    newPostRef.set({    
        city: city,
        country: country,
    });
    showList();
}

function showList() {

    var postRef = firebase.database().ref();
    $("ul").find("li").remove();
    postRef.on('value', function(snap) {
        snap.forEach(function(userSnap) {
            console.log(userSnap.val());
// <i class="material-icons">location_on</i>
            var newli = document.createElement('li');
            newli.classList.add('mdl-list__item');
            var newi = document.createElement('i');
            newi.classList.add('material-icons');
            newi.classList.add('mdl-list__item-icon');
            newi.innerHTML = 'location_on';
            var newspan = document.createElement('span');
            newspan.classList.add('mdl-list__item-primary-content');
            newspan.innerHTML = userSnap.val().city + ', ' + userSnap.val().country;

            newli.appendChild(newi);
            newli.appendChild(newspan);
            mainList.appendChild(newli);
        });
    });


    
    
    // 
}

function successfn(result) {
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
    var input = /** @type {!HTMLInputElement} */ (
        document.getElementById('pac-input'));

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Why 17? Because it looks good.
        }
        marker.setIcon( /** @type {google.maps.Icon} */ ({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
            var data_city, data_country;
            place.address_components.forEach(function(element) {
                if (element.types[0] === "locality" && element.types[1] === "political") {
                    data_city = element.short_name;                    
                } 
                if (element.types[0] === "country" && element.types[1] === "political") {
                    data_country = element.short_name;                   
                } 
            });
            saveToFirebase(data_city, data_country);
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });
}



