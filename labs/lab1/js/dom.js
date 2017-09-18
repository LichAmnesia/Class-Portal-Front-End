/*
* @Author: Lich_Amnesia
* @Date:   2017-09-17 21:28:53
* @Last Modified by:   Lich_Amnesia
* @Last Modified time: 2017-09-17 22:50:12
*/

// First change dom background color type. Use click event.
var showButton = document.getElementById('showbutton');
// Chang color each time.
showButton.addEventListener('click', function(){
    'use strict';
    showButton.style.backgroundColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);

    var newli = document.createElement('li');
    newli.classList.add('mdl-list__item');
    var newi = document.createElement('i');
    newi.classList.add('material-icons');
    newi.classList.add('mdl-list__item-icon');
    newi.innerHTML = 'person';
    var newspan = document.createElement('span');
    newspan.classList.add('mdl-list__item-primary-content');
    newspan.innerHTML = 'Test ' + Math.floor(Math.random() * 26);

    newli.appendChild(newi);
    newli.appendChild(newspan);
    mainList.appendChild(newli);
    
});

// Add listener for icon size
var alarmDone = document.getElementById('alarmDone');
alarmDone.addEventListener('mouseover', function(){
    'use strict';
    alarmDone.style.fontSize = '36px';
});

alarmDone.addEventListener('mouseout', function(){
    'use strict';
    alarmDone.style.fontSize = '24px';
});
