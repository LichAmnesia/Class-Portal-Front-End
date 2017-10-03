/*
 * @Author: Lich_Amnesia
 * @Date:   2017-09-17 21:28:53
 * @Last Modified by:   Lich_Amnesia
 * @Last Modified time: 2017-10-02 22:24:32
 */

// Store the canvas object into a variable



// set sky background 
$("canvas").filter(".sky").css("overflow", "hidden");

noise.seed(Math.random());

function drawing(density) {
    var $myCanvas = $('#myCanvas');
    var c = myCanvas;
    var ctx = c.getContext('2d');
    var xMax = c.width = window.screen.availWidth;
    var yMax = c.height = window.screen.availHeight;

    var hmTimes = density;

    for (var i = 0; i <= hmTimes; i++) {
        var randomX = Math.floor((Math.random() * xMax) + 1);
        var randomY = Math.floor((Math.random() * yMax) + 1);
        var randomSize = Math.floor((Math.random() * 3) + 1);
        var randomOpacityOne = Math.floor((Math.random() * 9) + 1);
        var randomOpacityTwo = Math.floor((Math.random() * 9) + 1);
        var randomHue = Math.floor((Math.random() * 360) + 1);
        if (randomSize > 1) {
            ctx.shadowBlur = Math.floor((Math.random() * 15) + 5);
            ctx.shadowColor = "white";
        }
        ctx.fillStyle = "hsla(" + randomHue + ", 30%, 80%, ." + randomOpacityOne + randomOpacityTwo + ")";
        ctx.beginPath(); //Start path
        ctx.arc(randomX, randomY, randomSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
        ctx.fill();
    }

}

// 
var TAU = 2 * Math.PI;
var period = 1 / 1000;
var arrLen = 1000;
var pointsArr = [];
var $myCanvas = $('#myCanvas');

for (_i = 0; _i < arrLen; _i++) {
    p1 = {
        x: myCanvas.width + Math.random() * myCanvas.width,
        y: myCanvas.height + Math.random() * 50 + 50,
        a: 0
    };
    pointsArr.push(p1);
    pointsArr.push({
        x: p1.x,
        y: p1.y,
        a: TAU / 2
    });
}


function drawNebulae() {
    var $myCanvas = $('#myCanvas');
    var ctx = myCanvas.getContext('2d');

    for (_i = 0; _i < arrLen; _i++) {
        var p = pointsArr[_i];
        v = noise.perlin2(p.x * period, p.y * period);
        ctx.fillStyle = "hsla(" + (Math.floor(v * 50 + 220)) + ", 50%, 20%, 0.05)";
        ctx.fillRect(p.x, p.y, 2, 2);
        p.h++;
        a = v * 2 * Math.PI + p.a;
        p.x += Math.cos(a);
        p.y += Math.sin(a);
    }
}


$(document).ready(function() {
    drawing(Math.round(Math.random() * 100) + 100);
    // drawNebulae();
    setInterval(drawNebulae, 1);
});



$("#start").click(function(){
    $("canvas").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 

$("#stop").click(function(){
    $("canvas").animate({
        left: '250px',
        opacity: '1',
        height: '800px',
        width: '1440px'
    });
}); 