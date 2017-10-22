/*
* @Author: Shen Huang
* @Date:   2017-10-10 09:33:30
* @Last Modified time: 2017-10-10 09:40:29
*/

$(document).ready(function() {
    randomChangeImage("scenery");
});

function randomChangeImage(imageId) {
    document.getElementById(imageId).src = "images/scene" + (Math.floor(Math.random() * 5) + 1)+ ".jpg";
}


var sw = document.getElementById("scenery");
sw.addEventListener("click", function() {
    randomChangeImage("scenery");
});