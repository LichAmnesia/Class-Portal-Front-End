/*
 * @Author: Shen Huang
 * @Date:   2017-09-17 21:28:53
 * @Last Modified time: 2017-10-09 16:41:33
 */

// First change dom background color type. Use click event.
var showButton = document.getElementById('showbutton');
// Chang color each time.
showButton.addEventListener('click', function() {
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
alarmDone.addEventListener('mouseover', function() {
    'use strict';
    alarmDone.style.fontSize = '36px';
});

alarmDone.addEventListener('mouseout', function() {
    'use strict';
    alarmDone.style.fontSize = '24px';
});

// Color generator for background
patternArr = ["OrRd", "PuBu", "BuPu", "Oranges", "BuGn", "YlOrBr", "YlGn", "Reds", "RdPu", "Greens", "YlGnBu", "Purples", "GnBu", "Greys", "YlOrRd", "PuRd", "Blues", "PuBuGn", "Viridis", "Spectral", "RdYlGn", "RdBu", "PiYG", "PRGn", "RdYlBu", "BrBG", "RdGy", "PuOr", "Set2", "Accent", "Set1", "Set3", "Dark2", "Paired", "Pastel2", "Pastel1", "orrd", "pubu", "bupu", "oranges", "bugn", "ylorbr", "ylgn", "reds", "rdpu", "greens", "ylgnbu", "purples", "gnbu", "greys", "ylorrd", "purd", "blues", "pubugn", "viridis", "spectral", "rdylgn", "rdbu", "piyg", "prgn", "rdylbu", "brbg", "rdgy", "puor", "set2", "accent", "set1", "set3", "dark2", "paired", "pastel2", "pastel1"]
var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    cell_size: Math.floor(Math.random() * 100 + 50),
    x_colors:  chroma.brewer[patternArr[Math.floor(Math.random() * patternArr.length)]]
}).canvas();

pattern.setAttribute('id', 'canvas');
document.body.appendChild(pattern);


