/*
* @Author: Shen Huang
* @Date:   2017-10-10 09:33:30
* @Last Modified time: 2017-10-10 10:13:28
*/

$(document).ready(function() {
    // randomChangeImage("scenery");
});

function changeImage(imageId, imageName) {
    document.getElementById(imageId).src = imageName;
}


var ir = document.getElementById("icon_rock");
ir.addEventListener("click", function() {
    changeImage("icon-img", "images/climbing.jpg");
    $('#icon-content').text("Colorado offers breathtaking vistas of some of the Rocky’s most scenic peaks and a rich history that make Colorado one of the most visited summer climbing areas in North America.");
});



var ic = document.getElementById("icon_cycle");
ic.addEventListener("click", function() {
    changeImage("icon-img", "images/cycling.jpg");
    $('#icon-content').text("Some of the best single-track trails on the planet are found in Colorado. Many Colorado roads offer road cyclists a great way to enjoy the spectacular scenery outside of a car. The plethora of bike paths offer families the opportunity for fun cycling adventures.");
});


var sw = document.getElementById("icon_ski");
sw.addEventListener("click", function() {
    changeImage("icon-img", "images/skiing.jpg");
    $('#icon-content').text("From family ski trips with leisurely days spent gliding down the slopes to intense, expert-only terrain for adventurous skiers and boarders, there’s a slope in Colorado for everyone.");
});