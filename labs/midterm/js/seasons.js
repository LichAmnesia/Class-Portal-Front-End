/*
 * @Author: Shen Huang
 * @Date:   2017-10-10 09:33:30
 * @Last Modified time: 2017-10-10 10:44:15
 */

var selectedImage = 'url(images/downarrow.png)';
var unselectedImage = 'url(images/uparrow.png)';

$(document).ready(function() {
    $('#spring-icon').css('listStyleImage', selectedImage);
    $('#spring-content').hide();
    $('#summer-icon').css('listStyleImage', selectedImage);
    $('#summer-content').hide();
    $('#fall-icon').css('listStyleImage', selectedImage);
    $('#fall-content').hide();
    $('#winter-icon').css('listStyleImage', selectedImage);
    $('#winter-content').hide();
});

$('#spring-icon').click(function() {
    if ($('#spring-content').is(":hidden")) {
        $('#spring-content').show();
        $('#spring-icon').css('listStyleImage', unselectedImage);
    } else {
        $('#spring-content').hide();
        $('#spring-icon').css('listStyleImage', selectedImage);
    }
});


$('#summer-icon').click(function() {
    if ($('#summer-content').is(":hidden")) {
        $('#summer-content').show();
        $('#summer-icon').css('listStyleImage', unselectedImage);
    } else {
        $('#summer-content').hide();
        $('#summer-icon').css('listStyleImage', selectedImage);
    }
});


$('#fall-icon').click(function() {
    if ($('#fall-content').is(":hidden")) {
        $('#fall-content').show();
        $('#fall-icon').css('listStyleImage', unselectedImage);
    } else {
        $('#fall-content').hide();
        $('#fall-icon').css('listStyleImage', selectedImage);
    }
});

$('#winter-icon').click(function() {
    if ($('#winter-content').is(":hidden")) {
        $('#winter-content').show();
        $('#winter-icon').css('listStyleImage', unselectedImage);
    } else {
        $('#winter-content').hide();
        $('#winter-icon').css('listStyleImage', selectedImage);
    }
});